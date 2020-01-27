import React, { useContext, useEffect, useState } from "react";
import ArticleForm from "../../components/ArticleForm/ArticleForm";
import useFetch from "../../hooks/useFetch";
import { Redirect } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUser";

const EditArticle = ({ match }) => {
  const slug = match.params.slug;
  const apiUrl = `/articles/${slug}`;
  const [initialValues, setInitialValues] = useState(null);
  const [{ response: fetchArticleResponse }, doFetchArticle] = useFetch(apiUrl);
  const [
    { response: updateArticleResponse, error: updateArticleError },
    doUpdateArticle
  ] = useFetch(apiUrl);
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);
  const [curruntUserState] = useContext(CurrentUserContext);
  useEffect(() => {
    doFetchArticle();
  }, [doFetchArticle]);

  useEffect(() => {
    if (!fetchArticleResponse) {
      return;
    }
    setInitialValues({
      title: fetchArticleResponse.article.title,
      description: fetchArticleResponse.article.description,
      body: fetchArticleResponse.article.body,
      tagList: fetchArticleResponse.article.tagList
    });
  }, [setInitialValues, fetchArticleResponse]);

  useEffect(() => {
    if (!updateArticleResponse) {
      return;
    }
    setIsSuccessfullSubmit(true);
  }, [updateArticleResponse]);

  if (!curruntUserState.isLoggedIn) {
    return <Redirect to="/" />;
  }

  if (isSuccessfullSubmit) {
    return <Redirect to={`/article/${slug}`} />;
  }

  const handleSubmit = article => {
    doUpdateArticle({
      method: "put",
      data: {
        article
      }
    });
  };

  return (
    <div>
      <ArticleForm
        onSubmit={handleSubmit}
        error={(updateArticleError && updateArticleError.errors) || {}}
        initialValues={initialValues}
      />
    </div>
  );
};

export default EditArticle;

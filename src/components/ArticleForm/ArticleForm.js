import React, { useEffect, useState } from "react";
import BackendErrorMessages from "../BackendErrorMessages/BackendErrorMessages";

const ArticleForm = ({ onSubmit, error, initialValues }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [description, setDescription] = useState("");
  const [tagList, setTagList] = useState("");

  const article = {
    title,
    body,
    description,
    tagList
  };

  useEffect(() => {
    if (!initialValues) {
      return;
    }

    setTitle(initialValues.title);
    setBody(initialValues.body);
    setDescription(initialValues.description);
    setTagList(initialValues.tagList.join(" "));
  }, [initialValues]);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(article);
  };

  return (
    <div className="editor-page">
      <div className="container-page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            {error && <BackendErrorMessages backendErrors={error} />}
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Article title"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="What is this article about?"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    className="form-control"
                    rows="8"
                    placeholder="Write your article (in markdown)"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    value={tagList}
                    onChange={e => setTagList(e.target.value)}
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter tags"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <button
                    type="submit"
                    className="btn btn-lg pull-xs-right btn-primary"
                  >
                    Publish article
                  </button>
                </fieldset>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleForm;

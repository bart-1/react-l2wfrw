import { observable, action, makeObservable } from 'mobx';

const NO_RESULT = -1;

export default class CommentsStore {
  @observable
  comments = [
    {
      id: 726837618,
      comment: 'super książka',
    }];
  constructor() {
    makeObservable(this);
  } 
    
  @action
  addComment = (comment) => this.comments.push(comment);

  @action
  removeComment = (id) => {
    this.comments = this.comments.filter((comment) => comment.id !== id);
  };
}

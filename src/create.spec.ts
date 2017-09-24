import { expect } from 'chai';
import { Observable } from 'rxjs';
import { spy } from 'sinon';

describe('Creation', () => {
  it('observable of', () => {
    expect(() => Observable.of(1)).to.throw();
  });
});

import User from "../src/user"

describe("Test Feature", () => {
  let user;

  beforeEach(function () {
    user = new User();
  });
  it('calctulates the age of today', () => {
    expect(user.getAge("July 21, 1992 01:15:00")).toEqual(28);
  });
});
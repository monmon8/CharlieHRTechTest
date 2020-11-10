import User from "../src/user"

describe("Test Feature", () => {
  let user = new User(thname,);

  
  it('calctulates the age of today', () => {
    expect(user.getAge("July 21, 1992 01:15:00")).toEqual(28);
  });
  it('calctulates the date of the upcomimg year ', () => {
    expect(user.getNextDob("1993-12-21")).toEqual("1993-12-21");
  });
});
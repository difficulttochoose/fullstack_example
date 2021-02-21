export const antdScheme = (rule, value) => {
  if (
    !value.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    ) &&
    value !== ''
  ) {
    return Promise.reject(
      'Password must have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!'
    );
  }
  return Promise.resolve();
};

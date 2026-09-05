import usersStore from "./store/users-store";

/**
 *
 * @param {HTMLDivElement} elment
 */
export const UsersApp = async (element) => {
  element.innerHTML = "Loading...";
  await usersStore.loadNextPage();
};

import { loadUsersByPage } from "../use-cases/load-users-by-page.js";
import { UsersApp } from "../users-app.js";

const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  await loadUsersByPage(state.currentPage + 1);
};

const loadPreviousPage = async () => {
  throw new Error("No implementado");
};

const onUserChanged = () => {
  throw new Error("No implementado");
};
const reloadPage = async () => {
  throw new Error("No implementado");
};

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,

  getUser: () => [...state.users],
  getCurrentPage: () => state.currentPage,
};

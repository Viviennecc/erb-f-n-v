import { pageLinks } from "../../data";
const PageLink = () => {
  return (
    <>
      {pageLinks.map((pageLinks) => {
        return (
          <li key={pageLinks.id}>
            <a href={pageLinks.href}>{pageLinks.text}</a>
          </li>
        );
      })}
    </>
  );
};

export default PageLink;

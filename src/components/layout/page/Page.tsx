import React from "react";
import { Header } from "../header";

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article className="min-h-screen bg-gray-50">
      <Header
        user={user}
        onLogin={() => setUser({ name: "Jane Doe" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />

      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Pages in Storybook
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            We recommend building UIs with a{" "}
            <a
              href="https://componentdriven.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold underline"
            >
              component-driven
            </a>{" "}
            process starting with atomic components and ending with pages.
          </p>

          <p className="text-gray-700 mb-6">
            Render pages with mock data. This makes it easy to build and review
            page states without needing to navigate to them in your app. Here
            are some handy patterns for managing page data in Storybook:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li>
              Use a higher-level connected component. Storybook helps you
              compose such data from the "args" of child component stories
            </li>
            <li>
              Assemble data in the page component from your services. You can
              mock these services out using Storybook.
            </li>
          </ul>

          <p className="text-gray-700 mb-8">
            Get a guided tutorial on component-driven development at{" "}
            <a
              href="https://storybook.js.org/tutorials/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold underline"
            >
              Storybook tutorials
            </a>
            . Read more in the{" "}
            <a
              href="https://storybook.js.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold underline"
            >
              docs
            </a>
            .
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start space-x-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Tip
            </span>
            <div className="flex-1">
              <p className="text-sm text-blue-700">
                Adjust the width of the canvas with the{" "}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline mx-1"
                >
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                      id="a"
                      fill="#3B82F6"
                    />
                  </g>
                </svg>
                Viewports addon in the toolbar
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

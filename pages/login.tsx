import React from 'react';

function Login() {
  return (
    <main className="mx-auto flex h-full w-full max-w-xl items-center justify-center px-8 text-text-dark dark:text-text-white">
      <form className="flex h-full w-full flex-col justify-between space-y-5 rounded-xl border-2 border-l-mainColor py-24 px-8 text-text-dark dark:border-d-mainColor dark:text-text-white md:max-w-md">
        <div className="flex justify-between text-base">
          <span className="mr-3 w-20 text-right">아이디</span>
          <input
            type="text"
            className="w-full rounded-lg border-2 border-l-mainColor bg-transparent pl-2 focus:outline-none dark:border-d-mainColor"
          />
        </div>
        <div className="flex justify-between text-base">
          <span className="mr-3 w-20 text-right">비밀번호</span>
          <input
            type="password"
            className="w-full rounded-lg border-2 border-l-mainColor bg-transparent pl-2 focus:outline-none dark:border-d-mainColor"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-l-hoverColor text-lg text-text-white hover:bg-l-highlightColor"
        >
          로그인
        </button>
      </form>
    </main>
  );
}

export default Login;

import React from "react"

function Contact() {
  return (
    <div className="flex justify-center">
      <form className="my-12 w-full max-w-md rounded-lg bg-[#222222FF] p-6 md:my-24">
        <p className="pb-6 text-2xl text-white">Contact Us</p>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-light text-white" htmlFor="name">
            Your name<span className="text-red-500">*</span>
          </label>
          <input
            className="w-full rounded-md bg-black px-3 py-2"
            id="name"
            type="text"
            required
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-light text-white" htmlFor="email">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            className="w-full rounded-md bg-black px-3 py-2"
            id="email"
            type="email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-light text-white" htmlFor="company">
            Name of the company you represent
          </label>
          <input
            className="w-full rounded-md bg-black px-3 py-2"
            id="company"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-light text-white" htmlFor="website">
            Company website
          </label>
          <input
            className="w-full rounded-md   bg-black px-3 py-2"
            id="website"
            type="url"
            placeholder="https://"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-light text-white" htmlFor="users">
            Expected number of users
          </label>
          <input className="w-full rounded-md bg-black px-3 py-2" id="users" />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-light text-white"
            htmlFor="comments"
          >
            Questions or comments<span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full rounded-md   bg-black px-3 py-2"
            id="comments"
            rows={4}
            required
          ></textarea>
        </div>
        <div className="flex">
          <button
            className="flex-grow rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact

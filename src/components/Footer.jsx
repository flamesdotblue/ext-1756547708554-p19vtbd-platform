function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black" id="newsletter">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Stay updated on Gridfall</h3>
            <p className="mt-2 text-white/70">Sign up for devlogs, closed tests, and launch dates.</p>
          </div>
          <form
            className="flex w-full items-center gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const input = form.querySelector('input');
              if (input) {
                input.value = '';
                alert('Thanks for signing up!');
              }
            }}
          >
            <input
              type="email"
              required
              placeholder="you@domain.com"
              className="h-12 w-full rounded-md border border-white/15 bg-white/5 px-4 text-white placeholder-white/50 outline-none focus:border-white/40"
            />
            <button
              type="submit"
              className="h-12 whitespace-nowrap rounded-md bg-white px-6 font-semibold text-black hover:bg-white/90"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row">
          <span>© {new Date().getFullYear()} Gridfall. All rights reserved.</span>
          <div className="flex gap-6">
            <a className="hover:text-white" href="#features">Features</a>
            <a className="hover:text-white" href="#footage">Footage</a>
            <a className="hover:text-white" href="#">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

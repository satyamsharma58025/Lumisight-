export default function Features() {
  return (
    <section className="bg-gray-800 px-6 py-16 text-center">
      <h2 className="text-3xl font-semibold mb-6">Why LumiSight?</h2>
      <div className="grid gap-10 md:grid-cols-3 text-left max-w-5xl mx-auto">
        <div>
          <h3 className="text-xl font-bold">Zero-DCE Powered</h3>
          <p className="text-gray-400">Fast, accurate enhancement without cloud processing.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">No App Needed</h3>
          <p className="text-gray-400">Works in your browser, on any device.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Privacy First</h3>
          <p className="text-gray-400">All processing happens locally. Your images stay private.</p>
        </div>
      </div>
    </section>
  );
}

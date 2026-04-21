export default function Resume() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-2xl font-semibold mb-12">Resume</h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="opacity-50 text-sm">
            <p>2025</p>
            <p className="mt-16">2024</p>
          </div>

          <div className="md:col-span-2 space-y-12">
            <div>
              <h3 className="font-medium">Featured project</h3>
              <div className="h-36 mt-3 rounded-xl bg-gradient-to-r from-pink-200 to-yellow-200"></div>
            </div>

            <div>
              <h3 className="font-medium">Another project</h3>
              <div className="h-36 mt-3 rounded-xl bg-gradient-to-r from-green-200 to-blue-300"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
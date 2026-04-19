'use client';

import { useEffect, useRef, useState } from 'react';

export default function Contact() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.2 },
		);

		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<section
			id="contact"
			ref={sectionRef}
			className="relative py-28 md:py-36 bg-[var(--bg-primary)] overflow-hidden"
		>
			{/* Decorative elements */}
			<div className="absolute top-12 right-12 w-40 h-40 rounded-full border border-[var(--border-soft)] opacity-30 animate-breathe" />
			<div className="absolute bottom-20 left-8 w-24 h-24 rounded-full border border-[var(--border-soft)] opacity-20 animate-breathe delay-1000" />

			<div className="max-w-[800px] mx-auto px-8 md:px-16 text-center">
				<div
					className={`transition-all duration-1000 ${
						visible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-8'
					}`}
				>
					<span className="text-[0.72rem] uppercase tracking-[0.4em] text-[var(--text-muted)] font-light font-[var(--font-outfit)]">
						Get In Touch
					</span>

					<h2 className="mt-4 font-[var(--font-playfair)] text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight text-[var(--text-primary)] italic">
						Let&apos;s create something
						<br />
						beautiful together.
					</h2>

					<div className="mt-5 mx-auto w-12 h-[1px] bg-[var(--accent)]" />

					<p className="mt-8 text-[0.95rem] md:text-base leading-[1.9] text-[var(--text-secondary)] font-light font-[var(--font-outfit)] max-w-lg mx-auto">
						Whether you&apos;re looking for game day coverage,
						athlete portraits, or editorial sports content —
						I&apos;d love to hear about your project and vision.
					</p>
				</div>

				{/* Contact form */}
				<form
					className={`mt-14 max-w-md mx-auto space-y-6 transition-all duration-1000 delay-300 ${
						visible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-8'
					}`}
					onSubmit={(e) => e.preventDefault()}
				>
					<div className="text-left">
						<label
							htmlFor="contact-name"
							className="block text-[0.7rem] uppercase tracking-[0.25em] text-[var(--text-muted)] font-[var(--font-outfit)] mb-2"
						>
							Name
						</label>
						<input
							id="contact-name"
							type="text"
							placeholder="Your name"
							className="w-full bg-transparent border-b border-[var(--border-soft)] py-3 px-0 text-[0.92rem] text-[var(--text-primary)] font-[var(--font-outfit)] font-light placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-500"
						/>
					</div>

					<div className="text-left">
						<label
							htmlFor="contact-email"
							className="block text-[0.7rem] uppercase tracking-[0.25em] text-[var(--text-muted)] font-[var(--font-outfit)] mb-2"
						>
							Email
						</label>
						<input
							id="contact-email"
							type="email"
							placeholder="your@email.com"
							className="w-full bg-transparent border-b border-[var(--border-soft)] py-3 px-0 text-[0.92rem] text-[var(--text-primary)] font-[var(--font-outfit)] font-light placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-500"
						/>
					</div>

					<div className="text-left">
						<label
							htmlFor="contact-message"
							className="block text-[0.7rem] uppercase tracking-[0.25em] text-[var(--text-muted)] font-[var(--font-outfit)] mb-2"
						>
							Message
						</label>
						<textarea
							id="contact-message"
							rows={4}
							placeholder="Tell me about your project..."
							className="w-full bg-transparent border-b border-[var(--border-soft)] py-3 px-0 text-[0.92rem] text-[var(--text-primary)] font-[var(--font-outfit)] font-light placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-500 resize-none"
						/>
					</div>

					<button
						type="submit"
						id="contact-submit"
						className="group relative inline-flex items-center gap-3 px-10 py-4 bg-[var(--accent)] text-white text-[0.82rem] uppercase tracking-[0.25em] font-light font-[var(--font-outfit)] overflow-hidden transition-all duration-600 hover:bg-[var(--accent-hover)] hover:shadow-[0_8px_40px_var(--shadow-warm)] mt-4 cursor-pointer border-none"
					>
						<span className="relative z-10">Send Message</span>
						<svg
							className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
							/>
						</svg>
						<span className="absolute inset-0 bg-[var(--accent-hover)] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-600 z-0" />
					</button>
				</form>

				{/* Direct contact */}
				<div
					className={`mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 transition-all duration-1000 delay-500 ${
						visible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-8'
					}`}
				>
					<a
						href="mailto:hello@katelia.com"
						className="flex items-center gap-2 text-[0.8rem] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-400 font-[var(--font-outfit)] no-underline"
					>
						<svg
							className="w-4 h-4"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
							/>
						</svg>
						hello@katelia.com
					</a>
					<span className="hidden sm:block w-[1px] h-4 bg-[var(--border-soft)]" />
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 text-[0.8rem] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-400 font-[var(--font-outfit)] no-underline"
					>
						<svg
							className="w-4 h-4"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							viewBox="0 0 24 24"
						>
							<rect x="2" y="2" width="20" height="20" rx="5" />
							<circle cx="12" cy="12" r="5" />
							<circle cx="17.5" cy="6.5" r="1.5" />
						</svg>
						@kate.liaaa
					</a>
				</div>
			</div>
		</section>
	);
}

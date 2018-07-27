export function msToMin (ms) {
	const m = Math.floor(ms/60000);
	const s = (ms % 60000) / 1000;
  
   const formatSeconds = s < 10 ? '0' + s: s;
   const time = m ? `${m}:${formatSeconds}` : s;

	return time;
}
---
title: Aufbau und Format eines Profils
slug: Web/API/JS_Self-Profiling_API/Profile_content_and_format
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("JS Self-Profiling API")}}

Auf dieser Seite beschreiben wir, wie Sie ein Profil interpretieren können, das mit der Self-Profiling-API erfasst wurde.

Das Format des von [`Profiler.stop()`](/de/docs/Web/API/Profiler/stop) zurückgegebenen Objekts ist darauf ausgelegt, speichereffizient zu sein: Zum Beispiel soll das Format vermeiden, URL-Werte für Funktionen zu duplizieren, die im selben Skript definiert sind. Das bedeutet, dass eine gewisse Interpretation erforderlich ist, um zu verstehen, wie eine Probe im Profilobjekt auf einen Speicherort im Programm abgebildet wird, und diese Leitfadenseite soll erklären, wie diese Interpretation durchgeführt werden kann.

Im ersten Abschnitt beschreiben wir die [abstrakte Struktur eines Profils](#anatomie_eines_profils). Im nächsten Abschnitt beschreiben wir [das Format des Profilobjekts](#profilformat), das von [`Profiler.stop()`](/de/docs/Web/API/Profiler/stop) zurückgegeben wird. Zum Schluss werden wir [ein Beispiel durchgehen](#beispiel), um zu zeigen, wie ein Profil für ein gegebenes Programm aussieht und wie es interpretiert werden kann.

## Anatomie eines Profils

In diesem Abschnitt beschreiben wir die abstrakte Struktur eines Profils. Beachten Sie, dass dies nicht dasselbe ist wie das Format des von [`Profiler.stop()`](/de/docs/Web/API/Profiler/stop) zurückgegebenen Objekts: Wir beschreiben dieses Format im nächsten Abschnitt dieses Leitfadens.

Ein Profil besteht aus einem Array von Proben. Jede Probe besteht aus einem Zeitstempel und einem Aufrufstack. Jeder Aufrufstack besteht aus einem Array von Stack-Frames, und jeder Stack-Frame enthält Informationen über den Speicherort der entsprechenden Funktion im Programm:

![Diagramm eines Profils](profile.svg)

Der Zeitstempel ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der Millisekunden seit dem _Zeitursprung_ misst: Für einen Fensterkontext ist dies die Zeit, zu der das Fenster erstellt wurde (wenn das Fenster neu ist) oder die Zeit, zu der der Browser begonnen hat, zu diesem Dokument zu navigieren.

Der Aufrufstack ist eine Darstellung des JavaScript-Aufrufstacks, die es Ihnen ermöglicht, den Ausführungsweg zur Position des Programms zu dem Zeitpunkt zu verstehen, an dem die Probe genommen wurde.

Der Aufrufstack besteht aus einem Array von Stack-Frames. Ein Stack-Frame stellt im Wesentlichen einen geschachtelten Funktionsaufruf dar, also wenn Funktion `a()` Funktion `b()` aufruft, die Funktion `c()` aufruft und eine Probe genommen wird, während der Browser `c()` ausführt, besteht der Aufrufstack aus den Frames `[a, b, c]`:

```js
function c() {
  // sample taken here
}

function b() {
  c();
}

function a() {
  b();
}
```

Jeder Stack-Frame enthält Informationen über den Speicherort der entsprechenden Funktion im Programm:

- Die URL des Skripts
- Der Name der Funktion
- Die Zeilennummer der Funktionsdefinition im Skript
- Die Spaltennummer der Funktionsdefinition in der Zeile

## Profilformat

Obwohl der Abschnitt oben die _logische_ Struktur eines Profils beschreibt, ist das Format des von [`Profiler.stop()`](/de/docs/Web/API/Profiler/stop) zurückgegebenen Objekts anders. Der Grund ist, dass das Format speichereffizient sein soll: Zum Beispiel soll das Format vermeiden, URL-Werte für Funktionen zu duplizieren, die im selben Skript definiert sind.

Das Profilobjekt enthält vier Eigenschaften, die alle Arrays sind:

- `frames`
  - : Ein Array von Objekten, die jeweils Informationen über einen Stack-Frame enthalten:
    - `column`: die Spaltennummer der Funktionsdefinition.
    - `line`: die Zeilennummer der Funktionsdefinition.
    - `name`: der Name der Funktion.
    - `resourceId`: der Index eines Elements in `resources`, das die URL des Skripts repräsentiert, in dem die Funktion definiert ist.

    Nur `name` ist immer vorhanden: Wenn die Funktion nicht in einem Skript definiert ist (zum Beispiel wenn es sich um eine im Browser eingebaute Funktion handelt), werden die anderen drei Eigenschaften weggelassen.

- `resources`
  - : Ein Array von Zeichenfolgen, die jeweils die URL eines Skripts darstellen.
- `samples`
  - : Ein Array von Objekten, die jeweils zwei Eigenschaften enthalten:
    - `timestamp`: die Zeit, zu der die Probe genommen wurde.
    - `stackId`: der Index eines Elements im `stacks`-Array.
- `stacks`
  - : Ein Array von Objekten, die jeweils zwei Eigenschaften enthalten:
    - `frameId`: der Index eines Elements in `frames`, das den am tiefsten verschachtelten Frame im Stack repräsentiert.
    - `parentId`: der Index eines anderen Eintrags in `stacks`, der den Aufrufstack bis zu, aber nicht einschließlich, des durch `frameId` repräsentierten Frames darstellt. Dies ist nicht vorhanden, wenn der durch `frameId` repräsentierte Frame auf der obersten Ebene des Stacks war.

## Beispiel

Im folgenden Beispiel haben wir eine Webseite, die einen Button enthält: Wenn der Benutzer den Button drückt, generiert die Seite einige Primzahlen.

Das HTML enthält nur den Button:

```html
<button id="generate">generate!</button>
```

Das JavaScript ist über zwei Dateien verteilt. Das Skript "main.js" enthält den Klick-Handler für den Button. Dies startet ein Profil, ruft dann den Code zur Generierung der Primzahlen auf und protokolliert dann das resultierende Profil:

```js
// main.js

import { genPrimes } from "./generate.js";

async function handleClick() {
  const profiler = new Profiler({ sampleInterval: 10, maxBufferSize: 10000 });

  const primes = genPrimes();
  console.log(`Finished generating ${primes.length} primes!`);

  const trace = await profiler.stop();
  console.log(JSON.stringify(trace));
}

document.querySelector("#generate").addEventListener("click", handleClick);
```

Das Skript "generate.js" generiert die Primzahlen, organisiert in zwei Funktionen, `genPrimes()` und `isPrime()`:

```js
// generate.js

const MAX_PRIME = 1000000000;
const PRIMES_QUOTA = 10000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

export function genPrimes() {
  const primes = [];
  while (primes.length < PRIMES_QUOTA) {
    const candidate = Math.floor(Math.random() * MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}
```

Wenn wir diesen Code ausführen, wird ein Profil wie das unten stehende in die Konsole der Entwicklertools protokolliert:

```json
{
  "frames": [
    { "name": "Profiler" },
    { "column": 27, "line": 5, "name": "handleClick", "resourceId": 0 },
    { "column": 17, "line": 6, "name": "isPrime", "resourceId": 1 },
    { "column": 26, "line": 15, "name": "genPrimes", "resourceId": 1 }
  ],
  "resources": [
    "http://localhost:3000/main.js",
    "http://localhost:3000/generate.js"
  ],
  "samples": [
    { "stackId": 1, "timestamp": 2972.734999999404 },
    { "stackId": 3, "timestamp": 2973.4899999946356 },
    { "stackId": 3, "timestamp": 2974.5700000077486 },
    { "stackId": 3, "timestamp": 2977.8649999946356 },
    { "stackId": 3, "timestamp": 2978.4899999946356 },
    { "stackId": 3, "timestamp": 2978.6950000077486 },
    { "stackId": 3, "timestamp": 2978.9500000029802 },
    { "stackId": 3, "timestamp": 2979.405000001192 },
    { "stackId": 2, "timestamp": 2980.030000001192 },
    { "stackId": 2, "timestamp": 2980.655000001192 }
  ],
  "stacks": [
    { "frameId": 1 },
    { "frameId": 0, "parentId": 0 },
    { "frameId": 3, "parentId": 0 },
    { "frameId": 2, "parentId": 2 }
  ]
}
```

Dieses Profil hat 10 Proben erfasst, die in der `samples`-Eigenschaft aufgelistet sind.

Die `stackId`-Eigenschaft jeder Probe ermöglicht es uns zu verstehen, wo sich das Programm zu dem Zeitpunkt befand, an dem die Probe genommen wurde, und in diesem Fall haben wir Proben an drei verschiedenen Stellen genommen:

- `stackId: 1`: eine Probe
- `stackId: 3`: sieben Proben
- `stackId: 2`: zwei Proben

Um den vollständigen Aufrufstack für eine Probe zu finden, rufen wir den Stack anhand der `stackId` ab, verwenden dann den `frameId`-Wert im Stack, um die am tiefsten verschachtelte Funktion zu finden, und rufen dann rekursiv übergeordnete Stacks mit `parentId` ab, bis wir die oberste Ebene erreichen, die keinen `parentId`-Wert hat.

Zum Beispiel zeigt das unten stehende Diagramm, wie wir den vollständigen Aufrufstack für die sieben Proben ableiten könnten, deren `stackId` 3 ist:

![Ableitung eines Aufrufstacks aus einer Probe](profile-format.svg)

Beachten Sie auch, dass das erste Element in `frames`, das einen `name`-Wert von `Profiler` hat, eine Probe darstellt, die im [`Profiler()`](/de/docs/Web/API/Profiler/Profiler)-Konstruktor genommen wurde: Da dies eine vom Browser bereitgestellte Funktion ist, enthält der Frame keine Skriptinformationen.

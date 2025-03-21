---
title: Anatomie und Format eines Profils
slug: Web/API/JS_Self-Profiling_API/Profile_content_and_format
l10n:
  sourceCommit: 49f36838f402e87204234c21fa8a98002c7e7a42
---

{{DefaultAPISidebar("JS Self-Profiling API")}}

Auf dieser Seite beschreiben wir, wie man ein Profil interpretiert, das mit der Self-Profiling API erfasst wurde.

Das Format des Objekts, das von [`Profiler.stop()`](/de/docs/Web/API/Profiler/stop) zurückgegeben wird, ist so konzipiert, dass es speichereffizient ist: Das Format zielt zum Beispiel darauf ab, URL-Werte für Funktionen, die im gleichen Skript definiert sind, nicht zu duplizieren. Das bedeutet, dass eine Interpretation erforderlich ist, um zu verstehen, wie eine Probe im Profilobjekt auf einen Ort im Programm abgebildet wird. Diese Leitfadenseite zielt darauf ab, zu erklären, wie diese Interpretation durchgeführt wird.

Im ersten Abschnitt beschreiben wir die [abstrakte Struktur eines Profils](#anatomie_eines_profils). Im nächsten Abschnitt beschreiben wir [das Format des Profilobjekts](#profilformat), das von [`Profiler.stop()`](/de/docs/Web/API/Profiler/stop) zurückgegeben wird. Schließlich werden wir [ein Beispiel durchgehen](#an_example), um zu zeigen, wie ein Profil für ein gegebenes Programm aussieht und wie es interpretiert werden kann.

## Anatomie eines Profils

In diesem Abschnitt beschreiben wir die abstrakte Struktur eines Profils. Beachten Sie, dass dies nicht dasselbe ist wie das Format des Objekts, das von [`Profiler.stop()`](/de/docs/Web/API/Profiler/stop) zurückgegeben wird: Wir beschreiben dieses Format im nächsten Abschnitt dieses Leitfadens.

Ein Profil besteht aus einer Liste von Proben. Jede Probe besteht aus einem Zeitstempel und einem Aufrufstapel. Jeder Aufrufstapel besteht aus einer Liste von Stack-Frames, und jeder Stack-Frame enthält Informationen über den Ort der entsprechenden Funktion im Programm:

![Diagramm eines Profils](profile.svg)

Der Zeitstempel ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der Millisekunden seit dem _Zeitursprung_ misst: Für einen Fensterkontext ist dies die Zeit, zu der das Fenster erstellt wurde (wenn das Fenster neu ist) oder die Zeit, zu der der Browser begann, zu diesem Dokument zu navigieren.

Der Aufrufstapel ist eine Darstellung des JavaScript-Aufrufstapels, die es Ihnen ermöglicht, den Ausführungspfad zur Position des Programms zu verstehen, an der die Probe entnommen wurde.

Der Aufrufstapel besteht aus einer Liste von Stack-Frames. Ein Stack-Frame stellt im Wesentlichen einen verschachtelten Funktionsaufruf dar, sodass, wenn Funktion `a()` Funktion `b()` aufruft, die wiederum Funktion `c()` aufruft und eine Probe entnommen wird, während der Browser `c()` ausführt, der Aufrufstapel aus den Frames `[a, b, c]` besteht:

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

Jeder Stack-Frame enthält Informationen über den Ort der entsprechenden Funktion im Programm:

- Die URL des Skripts
- Der Name der Funktion
- Die Zeilennummer der Funktionsdefinition im Skript
- Die Spaltennummer der Funktionsdefinition in der Zeile

## Profilformat

Obwohl der obige Abschnitt die _logische_ Struktur eines Profils beschreibt, ist das Format des Objekts, das von [`Profiler.stop()`](/de/docs/Web/API/Profiler/stop) zurückgegeben wird, anders. Der Grund dafür ist, dass das Format so konzipiert ist, dass es speichereffizient ist: Das Format zielt beispielsweise darauf ab, URL-Werte für Funktionen, die im gleichen Skript definiert sind, nicht zu duplizieren.

Das Profilobjekt enthält vier Eigenschaften, die alle Listen sind:

- `frames`

  - : Eine Liste von Objekten, die jeweils Informationen über einen Stack-Frame enthalten:

    - `column`: die Spaltennummer der Funktionsdefinition.
    - `line`: die Zeilennummer der Funktionsdefinition.
    - `name`: der Name der Funktion.
    - `resourceId`: der Index eines Elements in `resources`, das die URL des Skripts darstellt, in dem die Funktion definiert ist.

    Nur `name` ist immer vorhanden: Wenn die Funktion nicht in einem Skript definiert ist (zum Beispiel, wenn es sich um eine in den Browser integrierte Funktion handelt), werden die anderen drei Eigenschaften weggelassen.

- `resources`
  - : Eine Liste von Zeichenfolgen, die jeweils die URL eines Skripts darstellen.
- `samples`
  - : Eine Liste von Objekten, die jeweils zwei Eigenschaften enthalten:
    - `timestamp`: die Zeit, zu der die Probe entnommen wurde.
    - `stackId`: der Index eines Elements in der Liste `stacks`.
- `stacks`
  - : Eine Liste von Objekten, die jeweils zwei Eigenschaften enthalten:
    - `frameId`: der Index eines Elements in `frames`, das den am tiefsten verschachtelten Frame im Stapel darstellt.
    - `parentId`: der Index eines weiteren Eintrags in `stacks`, der den Aufrufstapel bis zu, aber nicht einschließlich, des durch `frameId` dargestellten Frames darstellt. Dies ist nicht vorhanden, wenn der durch `frameId` dargestellte Frame auf der obersten Ebene des Stapels war.

## Beispiel

Im folgenden Beispiel haben wir eine Webseite, die einen Button enthält: Wenn der Benutzer den Button drückt, generiert die Seite einige Primzahlen.

Das HTML enthält nur den Button:

```html
<button id="generate">generate!</button>
```

Das JavaScript ist auf zwei Dateien verteilt. Das Skript "main.js" enthält den Klick-Handler für den Button. Dieser startet ein Profil, ruft dann den Code zur Generierung der Primzahlen auf und protokolliert schließlich das resultierende Profil:

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

Wenn wir diesen Code ausführen, wird ein Profil wie das unten stehende im Entwicklertools-Console-Protokoll angezeigt:

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

Dieses Profil erfasste 10 Proben, die in der Eigenschaft `samples` aufgelistet sind.

Die Eigenschaft `stackId` jeder Probe ermöglicht es uns zu verstehen, wo das Programm war, als die Probe entnommen wurde. In diesem Fall haben wir Proben an drei verschiedenen Stellen entnommen:

- `stackId: 1`: eine Probe
- `stackId: 3`: sieben Proben
- `stackId: 2`: zwei Proben

Um den vollständigen Aufrufstapel für eine Probe zu finden, rufen wir den Stack über die angegebene `stackId` ab, verwenden dann den Wert `frameId` im Stack, um die am tiefsten verschachtelte Funktion zu finden, und rufen rekursiv Elternstapel mit `parentId` ab, bis wir die oberste Ebene erreichen, die keinen `parentId`-Wert hat.

Zum Beispiel zeigt das unten stehende Diagramm, wie wir den vollständigen Aufrufstapel für die sieben Proben ableiten könnten, deren `stackId` 3 ist:

![Ableiten eines Aufrufstapels aus einer Probe](profile-format.svg)

Beachten Sie auch, dass der erste Eintrag in `frames`, der einen `name`-Wert von `Profiler` hat, eine Probe darstellt, die im [`Profiler()`](/de/docs/Web/API/Profiler/Profiler) Konstruktor genommen wurde: Da dies eine vom Browser bereitgestellte Funktion ist, enthält der Frame keine Skriptinformationen.

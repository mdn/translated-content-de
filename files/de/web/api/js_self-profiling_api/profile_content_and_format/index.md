---
title: Anatomie und Format eines Profils
slug: Web/API/JS_Self-Profiling_API/Profile_content_and_format
l10n:
  sourceCommit: 20cff31570e35c6da44ddd84158fcebd9f4f42d9
---

{{DefaultAPISidebar("JS Self-Profiling API")}}

Auf dieser Seite beschreiben wir, wie ein Profil, das mit der Self-Profiling API erfasst wurde, interpretiert werden kann.

Das Format des von [`Profiler.stop()`](/de/docs/Web/API/Profiler/stop) zurückgegebenen Objekts ist platzsparend gestaltet: zum Beispiel soll das Format die Duplizierung von URL-Werten für Funktionen vermeiden, die im selben Skript definiert sind. Daher ist eine gewisse Interpretation erforderlich, um zu verstehen, wie ein Sample im Profilobjekt einer Stelle im Programm zugeordnet wird, und diese Leitfaden-Seite soll erklären, wie diese Interpretation vorgenommen wird.

Im ersten Abschnitt beschreiben wir die [abstrakte Struktur eines Profils](#anatomie_eines_profils). Im nächsten Abschnitt beschreiben wir [das Format des Profilobjekts](#profilformat), das von [`Profiler.stop()`](/de/docs/Web/API/Profiler/stop) zurückgegeben wird. Schließlich werden wir [ein Beispiel durchgehen](#beispiel), um zu zeigen, wie ein Profil für ein gegebenes Programm aussieht und wie es interpretiert werden kann.

## Anatomie eines Profils

In diesem Abschnitt beschreiben wir die abstrakte Struktur eines Profils. Beachten Sie, dass dies nicht dasselbe ist wie das Format des von [`Profiler.stop()`](/de/docs/Web/API/Profiler/stop) zurückgegebenen Objekts: wir beschreiben dieses Format im nächsten Abschnitt dieses Leitfadens.

Ein Profil besteht aus einem Array von Samples. Jedes Sample besteht aus einem Zeitstempel und einem Aufrufstapel. Jeder Aufrufstapel besteht aus einem Array von Stack-Frames, und jeder Stack-Frame enthält Informationen über den Ort der entsprechenden Funktion im Programm:

![Diagramm eines Profils](profile.svg)

Der Zeitstempel ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der Millisekunden seit dem _Zeitursprung_ misst: für ein Fensterkontext ist dies der Zeitpunkt, zu dem das Fenster erstellt wurde (wenn das Fenster neu ist) oder der Zeitpunkt, zu dem der Browser mit der Navigation zu diesem Dokument begann.

Der Aufrufstapel ist eine Darstellung des JavaScript-Aufrufstapels, der es Ihnen ermöglicht, den Ausführungspfad bis zum Ort des Programms zu verstehen, an dem das Sample aufgenommen wurde.

Der Aufrufstapel besteht aus einem Array von Stack-Frames. Ein Stack-Frame repräsentiert im Wesentlichen einen verschachtelten Funktionsaufruf. Wenn Funktion `a()` Funktion `b()` aufruft, die wiederum Funktion `c()` aufruft und ein Sample aufgenommen wird, während der Browser `c()` ausführt, dann besteht der Aufrufstapel aus den Frames `[a, b, c]`:

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

Obwohl der obige Abschnitt die _logische_ Struktur eines Profils beschreibt, ist das Format des von [`Profiler.stop()`](/de/docs/Web/API/Profiler/stop) zurückgegebenen Objekts anders. Der Grund ist, dass das Format platzsparend gestaltet ist: zum Beispiel soll das Format die Duplizierung von URL-Werten für Funktionen vermeiden, die im selben Skript definiert sind.

Das Profilobjekt enthält vier Eigenschaften, allesamt Arrays:

- `frames`

  - : Ein Array von Objekten, die Informationen über einen Stack-Frame enthalten:

    - `column`: die Spaltennummer der Funktionsdefinition.
    - `line`: die Zeilennummer der Funktionsdefinition.
    - `name`: der Name der Funktion.
    - `resourceId`: der Index eines Elements in `resources`, der die URL des Skripts repräsentiert, in dem die Funktion definiert ist.

    Nur `name` ist immer vorhanden: Wenn die Funktion nicht in einem Skript definiert ist (zum Beispiel, wenn es sich um eine Funktion handelt, die im Browser integriert ist), werden die anderen drei Eigenschaften weggelassen.

- `resources`
  - : Ein Array von Zeichenketten, die jeweils die URL eines Skripts repräsentieren.
- `samples`
  - : Ein Array von Objekten, die jeweils zwei Eigenschaften enthalten:
    - `timestamp`: der Zeitpunkt, zu dem das Sample aufgenommen wurde.
    - `stackId`: der Index eines Elements im `stacks`-Array.
- `stacks`
  - : Ein Array von Objekten, die jeweils zwei Eigenschaften enthalten:
    - `frameId`: der Index eines Elements in `frames`, das den am tiefsten verschachtelten Frame im Stapel darstellt.
    - `parentId`: der Index eines anderen Eintrags in `stacks`, der den Aufrufstapel bis zu, aber nicht einschließlich des durch `frameId` dargestellten Frames repräsentiert. Dies ist nicht vorhanden, wenn der durch `frameId` dargestellte Frame auf der obersten Ebene des Stapels war.

## Beispiel

Im folgenden Beispiel haben wir eine Webseite, die einen Button enthält: Wenn der Benutzer den Button drückt, generiert die Seite einige Primzahlen.

Das HTML enthält nur den Button:

```html
<button id="generate">generate!</button>
```

Das JavaScript ist auf zwei Dateien aufgeteilt. Das Skript "main.js" enthält den Klick-Handler für den Button. Dieses startet ein Profil, ruft dann den Code zum Erzeugen der Primzahlen auf und protokolliert schließlich das resultierende Profil:

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

Das Skript "generate.js" erzeugt die Primzahlen, organisiert in zwei Funktionen, `genPrimes()` und `isPrime()`:

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

Wenn wir diesen Code ausführen, wird ein Profil wie das untenstehende an die Entwicklertools-Konsole ausgegeben:

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

Dieses Profil hat 10 Samples erfasst, die in der Eigenschaft `samples` aufgelistet sind.

Die `stackId`-Eigenschaft jedes Samples ermöglicht es uns zu verstehen, wo sich das Programm zum Zeitpunkt der Aufnahme des Samples befand, und in diesem Fall haben wir Samples an drei verschiedenen Stellen aufgenommen:

- `stackId: 1`: ein Sample
- `stackId: 3`: sieben Samples
- `stackId: 2`: zwei Samples

Um den vollständigen Aufrufstapel für ein Sample zu finden, rufen wir den Stapel mithilfe der `stackId`-Wert ab, verwenden dann den `frameId`-Wert im Stapel, um die am tiefsten verschachtelte Funktion zu finden, und holen dann rekursiv übergeordnete Stapel mithilfe der `parentId`-Werte, bis wir die oberste Ebene erreichen, die keinen `parentId`-Wert hat.

Zum Beispiel zeigt das untenstehende Diagramm, wie wir den vollständigen Aufrufstapel für die sieben Samples ableiten könnten, deren `stackId` 3 ist:

![Ableitung eines Aufrufstapels aus einem Sample](profile-format.svg)

Beachten Sie auch, dass das erste Element in `frames`, das einen `name`-Wert von `Profiler` hat, ein Sample im [`Profiler()`](/de/docs/Web/API/Profiler/Profiler) Konstruktor repräsentiert: Da dies eine vom Browser bereitgestellte Funktion ist, enthält der Frame keine Skriptinformationen.

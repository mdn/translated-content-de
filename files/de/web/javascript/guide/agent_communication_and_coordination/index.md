---
title: Kommunikation und Koordination zwischen Agents
slug: Web/JavaScript/Guide/Agent_communication_and_coordination
l10n:
  sourceCommit: 9d64ff6c5d0eee1800b0d3b4f9076de65f34f5ce
---

**Agents** ist die formale Bezeichnung in JavaScript für autonome JavaScript-Ausführungseinheiten. Der meiste JavaScript-Code, den Sie schreiben, wird in einem einzigen Thread ausgeführt. Mit bestimmten Plattform-APIs wie [Web Workers](/de/docs/Web/API/Web_Workers_API) können Sie jedoch weitere Threads erstellen.

Dieser Leitfaden erläutert allgemeine Informatikkonzepte zur Koordination von Threads und deren Umsetzung in JavaScript. Außerdem stellt er APIs für die Kommunikation zwischen Threads vor: [`postMessage()`](/de/docs/Web/API/Worker/postMessage), {{jsxref("SharedArrayBuffer")}} und {{jsxref("Atomics")}}.

Es empfiehlt sich, vor der Lektüre [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) zu verstehen. Anschließend können Sie in der Referenz zum [Ausführungsmodell](/de/docs/Web/JavaScript/Reference/Execution_model) die technischen Details vertiefen.

> [!NOTE]
> In diesem Artikel verwenden wir „Thread“ und „Agent“ synonym. Ein Agent ist eine Abstraktion der JavaScript-Engine, während ein Thread ein Implementierungsdetail ist. Ein Agent kann, muss aber nicht in einem eigenen Betriebssystem-Thread laufen. Genau genommen müssten wir überall „Agents“ verwenden, da Sie in JavaScript nur mit Agents interagieren können. Bei allgemeinen Informatikkonzepten wie Sperren ist „Threads“ jedoch die natürlichere Bezeichnung.
>
> Dieser Leitfaden hat außerdem nichts mit [KI-Agents](https://en.wikipedia.org/wiki/AI_agent) zu tun.

## Kommunikation zwischen zwei Agents

Die JavaScript-Sprachspezifikation stellt keine APIs bereit, um Agents zu erstellen, eine Referenz auf einen anderen Agent zu erhalten oder Daten zwischen Agents auszutauschen. Obwohl das Konzept von „Workern“ sowohl im Web als auch in Node.js existiert, unterscheiden sich deren APIs weitgehend. Dieser Leitfaden verwendet [Web Workers](/de/docs/Web/API/Web_Workers_API).

### Agents erstellen

Ein übergeordneter Agent erstellt mit dem Konstruktor [`Worker()`](/de/docs/Web/API/Worker/Worker) einen untergeordneten Agent und behält eine Referenz darauf:

```js
// -- main.js --
const worker = new Worker("./worker.js", { type: "module" });
```

Der übergeordnete Agent kann ein Fenster oder ein anderer Worker sein. Um dieses Beispiel in einem Browser auszuführen, können Sie etwa `main.js` in einer HTML-Datei referenzieren:

```html
<script src="main.js" type="module"></script>
```

### Kommunikation über Nachrichten

Zwei Agents kommunizieren über _Nachrichten_. Nachrichten werden über _Nachrichtenkanäle_ gesendet. Der übergeordnete Agent (hier `main.js`) und sein untergeordneter Agent (hier `worker.js`) verfügen standardmäßig über einen Nachrichtenkanal, der zu ihren Standard-Ports führt:

- `main.js` sendet Nachrichten mit [`worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) und empfängt sie über das [`message`](/de/docs/Web/API/Worker/message_event)-Event am `worker`-Objekt.
- `worker.js` sendet Nachrichten mit [`self.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) und empfängt sie über das [`message`](/de/docs/Web/API/DedicatedWorkerGlobalScope/message_event)-Event an `self`.

Dies ist jedoch auf die Kommunikation zwischen dem erstellenden Agent und dem von ihm erstellten Agent beschränkt. Wenn zwei beliebige Agents miteinander kommunizieren sollen, benötigen Sie einen eigenen [`MessageChannel`](/de/docs/Web/API/MessageChannel). Sie übergeben eines seiner [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekte über den Standardkanal an den Worker und verwenden anschließend ausschließlich diesen Port:

```js
// -- main.js --
const worker = new Worker("./worker.js", { type: "module" });
const { port1, port2 } = new MessageChannel();

// We'll explain the [port2] parameter soon
worker.postMessage({ hereIsYourPort: port2 }, [port2]);

// Mark the port as ready for receiving messages
port1.start();
```

```js
// -- worker.js --
// Use top-level await (only available inside modules) so code following it
// only evaluates when the port is received
const port = await new Promise((resolve, reject) => {
  self.addEventListener(
    "message",
    (e) => {
      const port = e.data.hereIsYourPort;
      if (!(port instanceof MessagePort)) {
        reject(new Error("I'm expecting a dedicated port"));
        return;
      }
      resolve(port);
    },
    { once: true },
  );
});

// Mark the port as ready for receiving messages
port.start();
```

> [!NOTE]
> In allen folgenden Beispielen gehen wir davon aus, dass diese Zeilen am Anfang von `main.js` und `worker.js` stehen. Wir wiederholen sie nicht.

Nun kann jeder Agent [`postMessage()`](/de/docs/Web/API/MessagePort/postMessage) aufrufen und am `MessagePort`-Objekt auf [`message`](/de/docs/Web/API/MessagePort/message_event)-Events reagieren.

Mithilfe von Nachrichtenkanälen können Sie auch zwei Agents verbinden, die nicht in einer Eltern-Kind-Beziehung stehen, beispielsweise zwei Worker, die vom selben Thread erstellt wurden:

```js
const { port1, port2 } = new MessageChannel();
const worker1 = new Worker("./worker1.js", { type: "module" });
const worker2 = new Worker("./worker2.js", { type: "module" });

worker1.postMessage({ hereIsYourPort: port1 }, [port1]);
worker2.postMessage({ hereIsYourPort: port2 }, [port2]);
```

Als praktisches Beispiel implementieren wir ein Zahlenratespiel. `main.js` legt eine geheime Zahl fest, und `worker.js` versucht, sie zu erraten. Bei jedem Versuch teilt `main.js` dem Worker mit, ob der Tipp richtig, zu niedrig oder zu hoch ist. Daraufhin passt der Worker seinen nächsten Tipp an. So kann `main.js` über [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) Tipps vom Worker empfangen und mit `port1.postMessage()` Rückmeldung geben:

```js
// -- main.js --
const secretNumber = 63;

port1.addEventListener("message", (e) => {
  const workerGuess = e.data;
  console.log("Worker guessed:", workerGuess);
  if (workerGuess < secretNumber) {
    port1.postMessage("Too low");
  } else if (workerGuess > secretNumber) {
    port1.postMessage("Too high");
  } else {
    port1.postMessage("Correct");
    console.log("Worker successfully guessed the secret number!");
  }
});
```

Und so kann der Worker Tipps an `main.js` senden und sie anhand der Rückmeldung anpassen:

```js
// -- worker.js --
let low = 0;
let high = 100;
let lastGuess = Math.floor((low + high) / 2);

// First guess submitted immediately after initialization
port.postMessage(lastGuess);
port.addEventListener("message", (e) => {
  const feedback = e.data;
  if (feedback === "Correct") {
    console.log("Yay");
    return;
  }
  if (feedback === "Too low") {
    low = lastGuess + 1;
  } else if (feedback === "Too high") {
    high = lastGuess - 1;
  }
  if (low > high) {
    throw new Error(
      "Sorry, the feedback from main.js is inconsistent and I suspect main is cheating",
    );
  }
  lastGuess = Math.floor((low + high) / 2);
  port.postMessage(lastGuess);
});

port.start();
```

Wenn Sie dies in einem Browser ausführen, schreiben sowohl der Worker als auch der Haupt-Thread in dieselbe DevTools-Konsole. Sie sehen daher folgende Ausgabe:

```plain
Worker guessed: 50                              main.js
Worker guessed: 75                              main.js
Worker guessed: 62                              main.js
Worker guessed: 68                              main.js
Worker guessed: 65                              main.js
Worker guessed: 63                              main.js
Worker successfully guessed the secret number!  main.js
Yay                                             worker.js
```

### Nachrichten durch Kopieren oder Übertragen senden

Sie können viele Arten von JavaScript-Werten an `postMessage` übergeben. Im Zahlenratespiel übergeben wir Zahlen für die Tipps, Strings für die Rückmeldungen und Objekte für den `MessagePort`. Standardmäßig verfügt jeder Agent über einen eigenen [Speicherbereich](/de/docs/Web/JavaScript/Reference/Execution_model#agent_execution_model). Wenn ein Objekt von einem Heap an einen anderen gesendet wird, wird daher eine Kopie im Ziel-Heap erstellt. Dafür wird der [Structured-Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verwendet, der nur eine feste Auswahl an Datentypen unterstützt. Wenn Sie versuchen, ein nicht unterstütztes Objekt zu kopieren, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

![Zwei Agents, eine HTML-Seite und ein Worker, enthalten jeweils einen Heap mit einem Objekt. Ein mit postMessage() beschrifteter Pfeil zeigt vom Objekt im Heap der Seite auf das Objekt im Heap des Workers.](message-copy-diagram.svg)

Durch das Kopieren können Sender und Empfänger das Objekt unabhängig voneinander verändern, ohne dass sich dies auf die andere Seite auswirkt. Der Nachteil ist, dass das Objekt im Gültigkeitsbereich des Empfängers neu erstellt wird. Das bedeutet:

- Es ist nicht mehr an seinen ursprünglichen Ersteller gebunden, weshalb [`MessagePort`](/de/docs/Web/API/MessagePort) so nicht funktionieren kann. In der Liste der [serialisierbaren Objekte](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) ist `MessagePort` tatsächlich nicht aufgeführt.
- Die Daten liegen zweimal vor, wodurch der Speicherverbrauch steigt.

Um diese Probleme zu lösen, können Sie Objekte _übertragen_, statt sie zu kopieren. Bei einer Übertragung wird das Objekt mit einem etwas anderen Algorithmus im Ziel-Realm erstellt und im Quell-Realm als _abgetrennt_ markiert. Das Quellobjekt existiert weiterhin, seine übertragene Ressource ist nun jedoch über das neue Objekt im Ziel-Realm verfügbar:

![Eine HTML-Seite und ein Worker enthalten jeweils einen Heap. Das ursprüngliche Objekt im Heap der Seite ist grau, hat einen gestrichelten Rahmen und trägt die Beschriftung Detached. Ein mit Transfer beschrifteter Pfeil zeigt auf ein grünes Objekt im Heap des Workers.](message-transfer-diagram.svg)

Um ein Objekt zu übertragen, übergeben Sie es weiterhin an `postMessage()` – entweder direkt oder als Teil eines anderen Objekts. Der zweite Parameter von `postMessage()` enthält eine Liste der Objekte innerhalb der Nachricht, die übertragen statt kopiert werden sollen. Das erklärt die folgende Zeile aus dem Zahlenratespiel:

```js
worker.postMessage({ hereIsYourPort: port2 }, [port2]);
```

Das gesamte Objekt `{ hereIsYourPort: port2 }` wird wie gewohnt kopiert und kann in beiden Agents verwendet werden. Da es beim Sender keiner Variablen zugewiesen wird, wird es dort allerdings sofort verworfen. Die Ressource von `port2` wird vom neuen Objekt im Worker-Agent übernommen, während die Quellinstanz als abgetrennt markiert wird. Die Folgen der Abtrennung hängen vom Objekttyp ab. Im Allgemeinen lösen Operationen entweder einen Fehler aus oder bewirken nichts. Bei einem `MessagePort` verliert das ursprüngliche Objekt seine Verbindung zum anderen Port.

Neben `MessagePort` ist {{jsxref("ArrayBuffer")}} ein weiteres häufig verwendetes übertragbares Objekt, das sowohl kopiert als auch übertragen werden kann. Wird ein `ArrayBuffer` kopiert, halten Quelle und Empfänger jeweils eine unabhängige Kopie; Änderungen auf einer Seite wirken sich nicht auf die andere aus. Wird ein `ArrayBuffer` übertragen, wird er ebenfalls als _abgetrennt_ markiert. Ein abgetrennter Array-Buffer existiert weiterhin als Objekt, bietet aber keinen Zugriff mehr auf den zugrunde liegenden Speicher. Das bedeutet:

- {{jsxref("ArrayBuffer/byteLength", "byteLength")}} wird zu `0` – sowohl beim Buffer als auch bei den zugehörigen Typed-Array-Views.
- Methoden wie {{jsxref("ArrayBuffer/resize", "resize()")}} und {{jsxref("ArrayBuffer/slice", "slice()")}} lösen beim Aufruf einen {{jsxref("TypeError")}} aus. Auch die Methoden der zugehörigen Typed-Array-Views lösen einen `TypeError` aus.

Über die Eigenschaft {{jsxref("ArrayBuffer/detached", "detached")}} können Sie prüfen, ob ein `ArrayBuffer` abgetrennt ist.

In reinem JavaScript können Sie das Eigentum am Speicher auch mit der Methode {{jsxref("ArrayBuffer/transfer", "transfer()")}} oder {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}} von einem `ArrayBuffer` auf einen anderen übertragen.

```js
const buffer1 = new ArrayBuffer(1024);
console.log(buffer1.detached); // false
console.log(buffer1.byteLength); // 1024

const buffer2 = buffer1.transfer();
console.log(buffer1.detached); // true
console.log(buffer1.byteLength); // 0
console.log(buffer2.byteLength); // 1024
```

## Speicher mit SharedArrayBuffer gemeinsam nutzen

Neben dem Kopieren und Übertragen gibt es ein drittes Modell für die Datenweitergabe: die _gemeinsame Nutzung_. Dabei halten beide Seiten ein Objekt, das denselben zugrunde liegenden Speicher verwendet. Die gemeinsame Speichernutzung ist nur mit dem Objekt {{jsxref("SharedArrayBuffer")}} möglich. Sender und Empfänger halten weiterhin unterschiedliche Instanzen des `SharedArrayBuffer`-Objekts. Diese verweisen jedoch auf denselben Speicherbereich, sodass Änderungen auf einer Seite für die andere sichtbar sind.

![Eine HTML-Seite und ein Worker enthalten jeweils einen Heap mit einem SharedArrayBuffer-Objekt. Ein gestrichelter, doppelseitiger Pfeil mit der Beschriftung Sharing verbindet die Objekte, die auf denselben zugrunde liegenden Speicher verweisen.](message-sharing-diagram.svg)

### Gemeinsame Speichernutzung aktivieren

Die gemeinsame Speichernutzung ist an sich nicht riskant. Sie ermöglicht jedoch die Implementierung einer hochpräzisen Uhr – auf die Details gehen wir hier nicht ein –, die sich für [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>)-Angriffe nutzen lässt. Deshalb beschränken Browser den Zugriff auf gemeinsam genutzten Speicher auf [Cross-Origin-isolierte](/de/docs/Web/API/Window/crossOriginIsolated) Websites.

> [!NOTE]
> Wenn Sie für dieses Tutorial Node.js verwenden und die bisherigen Beispiele entsprechend an Node-spezifische APIs angepasst haben, können Sie diesen Abschnitt überspringen. Dort ist gemeinsam genutzter Speicher standardmäßig verfügbar.

Wenn Sie mit einem lokalen HTTP-Server mit diesen Beispielen experimentieren, müssen Sie Ihre Website Cross-Origin-isolieren, beispielsweise indem Sie die folgenden Header senden:

```http
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```

Anschließend können Sie mit den folgenden Prüfungen bestätigen, dass die gemeinsame Speichernutzung aktiviert ist:

```js
console.log(window.crossOriginIsolated); // true
console.log("SharedArrayBuffer" in window); // true
```

Nun können Sie Speicher gemeinsam nutzen, allerdings nur innerhalb eines [Agent-Clusters](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing). Mit Agents außerhalb dieses Clusters können Sie keinen Speicher gemeinsam nutzen, selbst wenn ein Nachrichtenkanal zwischen ihnen besteht. Ein Fenster und sein Dedicated Worker gehören zum selben Cluster, daher funktionieren unsere Beispiele.

### Einen gemeinsam genutzten Buffer verwenden

Die `SharedArrayBuffer`-Schnittstelle ist weitgehend identisch mit `ArrayBuffer`. Sie können einen `SharedArrayBuffer` erstellen, der die angegebene Anzahl an Bytes reserviert.

```js
const sab = new SharedArrayBuffer(1024);
```

Um den Speicherinhalt zu lesen und zu schreiben, erstellen Sie eine [View](/de/docs/Web/JavaScript/Guide/Typed_arrays#views), beispielsweise eine {{jsxref("Int8Array")}}.

```js
const int8 = new Int8Array(sab);
int8[0] = 63;
```

Sie können einen [Ausschnitt](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice) des SAB erstellen. Dadurch wird ein neuer gemeinsam genutzter Speicherbereich angelegt und sein Inhalt kopiert.

```js
const sab2 = sab.slice();
// Entire sab is copied
const int82 = new Int8Array(sab2);
console.log(int82[0]); // 63
```

Zwischen `SharedArrayBuffer` und `ArrayBuffer` bestehen – abgesehen von der gemeinsamen Speichernutzung – mehrere Unterschiede:

- SABs mit veränderbarer Größe können nur _vergrößert_ werden, während gewöhnliche Buffer mit veränderbarer Größe sowohl vergrößert als auch verkleinert werden können.
- SABs können nicht übertragen oder abgetrennt werden.

Um einen vergrößerbaren SAB zu erstellen, übergeben Sie die Option `maxByteLength`, die seine maximal zulässige Größe angibt. Anschließend können Sie [`grow()`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow) verwenden.

```js
const sabResizable = new SharedArrayBuffer(1024, { maxByteLength: 2048 });
console.log(sabResizable.byteLength); // 1024

sabResizable.grow(2000);
console.log(sabResizable.byteLength); // 2000
```

### SharedArrayBuffers per Nachricht senden

`SharedArrayBuffer`-Objekte werden bei der Übergabe an `postMessage()` immer gemeinsam genutzt, sofern die Sicherheitsanforderungen erfüllt sind. Zusätzliche Optionen sind nicht erforderlich. Beide Seiten können diesen Speicherbereich verändern und die Änderungen der jeweils anderen Seite beobachten. Sie können auch eine View auf einen `SharedArrayBuffer` direkt übergeben: Die View und das `buffer`-Objekt werden kopiert, der zugrunde liegende Speicherbereich bleibt jedoch gemeinsam genutzt.

In den folgenden Beispielen nutzen `main.js` und `worker.js` neben dem Nachrichten-Port auch einen Buffer gemeinsam. Ersetzen Sie diese Zeile in `main.js`:

```js
worker.postMessage({ hereIsYourPort: port2 }, [port2]);
```

Durch:

```js
const sab = new SharedArrayBuffer(1024);
worker.postMessage({ hereIsYourPort: port2, andHereIsOurSAB: sab }, [port2]);
```

Ersetzen Sie außerdem in `worker.js` den anfänglichen Empfangscode durch:

```js
const { port, sab } = await new Promise((resolve, reject) => {
  self.addEventListener(
    "message",
    (e) => {
      const port = e.data.hereIsYourPort;
      if (!(port instanceof MessagePort)) {
        reject(new Error("I'm expecting a dedicated port"));
        return;
      }
      const sab = e.data.andHereIsOurSAB;
      if (!(sab instanceof SharedArrayBuffer)) {
        reject(new Error("I'm expecting a shared array buffer"));
        return;
      }
      resolve({ port, sab });
    },
    { once: true },
  );
});
```

Um zu überprüfen, ob diese Einrichtung funktioniert, koordinieren Sie über eine Nachricht einen kurzen Schreib-Lese-Austausch. Der Worker aktualisiert sofort den `SharedArrayBuffer` und sendet eine Nachricht an den Haupt-Thread. Der Haupt-Thread empfängt diese Nachricht und liest den neuen Wert. Auf effizientere Kommunikationsmöglichkeiten gehen wir später ein.

```js
// -- main.js --
const int8 = new Int8Array(sab);

port1.addEventListener("message", (e) => {
  console.log(int8[0]); // 63
});
```

```js
// -- worker.js --
const int8 = new Int8Array(sab);
int8[0] = 63;
port.postMessage("I've modified the memory. Please check");
```

## Mit Atomics auf gemeinsam genutzten Speicher zugreifen

Im obigen Beispiel erzwingen wir mithilfe einer Nachricht die folgende Reihenfolge:

1. Der Worker schreibt in den Speicher.
2. Der Worker sendet eine Nachricht.
3. Der Haupt-Agent empfängt die Nachricht und führt den Event-Listener aus.
4. Der Haupt-Agent liest aus dem Speicher.

Das Problem bei der Event-basierten Koordination ist, dass Events asynchron sind: Die Zeit zwischen Schritt 2 und 3 hängt von der Event-Loop des Browsers ab. In diesem Fall könnten Sie die Werte ebenso gut direkt per Nachricht austauschen, ohne gemeinsam genutzten Speicher zu verwenden. Der Vorteil gemeinsam genutzten Speichers liegt gerade darin, dass Sie (weitgehend) synchron kommunizieren können, ohne die Job-Warteschlange für andere asynchrone Aufgaben freizugeben.

Innerhalb eines einzelnen Agents gewährleistet die [Run-to-Completion](/de/docs/Web/JavaScript/Reference/Execution_model#run-to-completion)-Semantik eine verlässliche Reihenfolge der Auswirkungen mehrerer synchroner Jobs:

```js
const promise = Promise.resolve();
let i = 0;
promise.then(() => {
  i += 1;
  console.log(i);
});
promise.then(() => {
  i += 1;
  console.log(i);
});
```

Hier lautet die Gesamtreihenfolge immer `i += 1; console.log(i); i += 1; console.log(i);` und niemals `i += 1; i += 1; console.log(i); console.log(i);`.

Für synchrone Jobs unterschiedlicher Agents gibt es keine solche Garantie. Im folgenden Beispiel sendet der Worker dem Haupt-Agent eine `started`-Nachricht und beginnt sofort, die gemeinsam genutzte Ganzzahl in einer Schleife zu erhöhen. Sobald der Haupt-Agent die Nachricht erhält, führt er gleichzeitig dieselbe Schleife aus. Nach Abschluss sendet der Worker eine `finished`-Nachricht, woraufhin der Haupt-Agent den Endwert ausgibt.

```js
// -- main.js --
const i = new Int32Array(sab, 0, 1);

port1.addEventListener("message", ({ data }) => {
  if (data === "started") {
    for (let n = 0; n < 10_000_000; n++) {
      i[0] += 1;
    }
  } else if (data === "finished") {
    console.log(i[0]); // Usually less than 20000000
  }
});
```

```js
// -- worker.js --
const i = new Int32Array(sab, 0, 1);

port.postMessage("started");
for (let n = 0; n < 10_000_000; n++) {
  i[0] += 1;
}
port.postMessage("finished");
```

Da Nachrichten an einem Port in der richtigen Reihenfolge zugestellt werden, wird der `finished`-Handler immer erst ausgeführt, nachdem die eigene Schleife des Haupt-Agents abgeschlossen ist. Zum Zeitpunkt der Ausgabe haben also beide Agents das Zählen beendet. Dennoch ist der ausgegebene Wert wahrscheinlich kleiner als `20000000` und unterscheidet sich von Durchlauf zu Durchlauf. Das liegt daran, dass `i[0] += 1` kein einzelner Schritt ist: Zunächst wird `i[0]` gelesen, dann 1 addiert und schließlich das Ergebnis zurückgeschrieben. Mindestens zwei Reihenfolgen sind möglich. Bei der ersten geht keine Erhöhung verloren:

1. `main.js` liest `i[0]` als `currentI`.
2. `main.js` schreibt `i[0] = currentI + 1`.
3. `worker.js` liest `i[0]` als `currentI + 1`.
4. `worker.js` schreibt `i[0] = currentI + 2`.

Bei der zweiten geht eine Erhöhung verloren:

1. `main.js` liest `i[0]` als `currentI`.
2. `worker.js` liest `i[0]` als `currentI`.
3. `main.js` schreibt `i[0] = currentI + 1`.
4. `worker.js` schreibt `i[0] = currentI + 1`.

Um dieses Problem zu lösen, benötigen wir einen Mechanismus, der die Ausführungsreihenfolge agentübergreifend gewährleistet: Eine Anweisung in `worker.js` darf erst ausgeführt werden, nachdem eine Anweisung in `main.js` abgeschlossen und ihre Wirkung beobachtbar ist – und umgekehrt. Die Methoden des {{jsxref("Atomics")}}-Namespaces bieten diese Möglichkeit.

### Lesen und Schreiben

Die grundlegendsten `Atomics`-Operationen sind {{jsxref("Atomics.load()")}} und {{jsxref("Atomics.store()")}}. Sie lesen beziehungsweise schreiben einen Wert an einem bestimmten Index. Sie können mit allen vorzeichenbehafteten oder vorzeichenlosen Ganzzahl-Arrays verwendet werden, außer mit `Uint8ClampedArray`.

Bei der Syntax für indexbasiertes Lesen und Schreiben besteht das Problem, dass eine Schreiboperation für andere Agents nicht unbedingt sofort beobachtbar sein muss. Betrachten Sie das folgende indexbasierte Lesen und Schreiben:

```js
// -- main.js --
const a = new Int32Array(sab);
a[0] = 63;
console.log("Main:", a[1]);
```

```js
// -- worker.js --
const a = new Int32Array(sab);
a[1] = 15;
console.log("Worker:", a[0]);
```

Theoretisch müsste mindestens eine der beiden Ausgaben ungleich `0` sein, unabhängig von der Reihenfolge der Operationen – solange jeder Agent seinen Code in der vorgesehenen Reihenfolge ausführt. Versuchen Sie, alle möglichen Reihenfolgen der vier Anweisungen aufzuschreiben, unter der Bedingung, dass `a[0] = 63` vor `console.log(a[1])` und `a[1] = 15` vor `console.log(a[0])` steht! Tatsächlich können jedoch beide Ausgaben 0 anzeigen. Das kann sich aus der folgenden Reihenfolge ergeben:

1. `main.js` liest `a[1]` als `0`.
2. `worker.js` liest `a[0]` als `0`.
3. `main.js` schreibt `a[0] = 63`.
4. `worker.js` schreibt `a[1] = 15`.
5. `main.js` und `worker.js` führen jeweils `console.log` mit den bereits gelesenen Werten von `a[1]` beziehungsweise `a[0]` aus.

Beachten Sie, dass die Ausdrücke zum Lesen von `a[1]` und `a[0]` im Quellcode zwar weiter hinten stehen, aber vor den Anweisungen `a[0] = 63` und `a[1] = 15` ausgeführt werden. Solche Umordnungen von Anweisungen können sowohl im JavaScript-Compiler als auch in der CPU stattfinden, um aufeinanderfolgende Speicheroperationen zu optimieren. Für jeden einzelnen Agent wahrt diese Reihenfolge vollständig die erwarteten Garantien einer sequenziellen Ausführung. In `main.js` wird beispielsweise der Schreibwert von `a[0] = 63` nie wieder eingelesen. Daher ist es dort unproblematisch, diese Schreiboperation hinter das Lesen von `a[1]` zu verschieben. Bei mehreren Agents führt das jedoch zu Problemen.

Mit `Atomics.load()` und `Atomics.store()` teilen Sie dem Compiler und der CPU ausdrücklich mit, dass eine solche Umordnung nicht zulässig ist. Die Reihenfolge der Speicherzugriffe muss mit der Ausführungsreihenfolge des JavaScript-Codes übereinstimmen.

```js
// -- main.js --
const a = new Int32Array(sab);
Atomics.store(a, 0, 63);
console.log("Main:", Atomics.load(a, 1));
```

```js
// -- worker.js --
const a = new Int32Array(sab);
Atomics.store(a, 1, 15);
console.log("Worker:", Atomics.load(a, 0));
```

Hier können Sie zwar weiterhin in einer der Ausgaben `0` sehen – beispielsweise wenn das `load` des Haupt-Agents vor dem `store` des Workers stattfindet –, aber niemals in beiden.

> [!NOTE]
> Wenn Sie darüber hinaus sicherstellen möchten, dass beide neuen Werte beobachtet werden, müssen Sie beide Agents vor dem Aufruf von `Atomics.load()` [warten lassen](#warten_und_benachrichtigen), beispielsweise mit einer Schleife wie `while (Atomics.load(a, 1) === 0);`.

Außerdem stellen atomare Lade- und Speicheroperationen eine partielle Reihenfolge für andere, _nicht atomare_ Lese- und Schreiboperationen her. Wenn Agent A `Atomics.store()` ausführt und Agent B anschließend denselben Wert mit `Atomics.load()` liest, müssen alle nicht atomaren Schreiboperationen, die A vor dem atomaren Speichern ausgeführt hat, auch für alle nicht atomaren Leseoperationen beobachtbar sein, die B nach dem atomaren Laden ausführt. Damit entsteht im Wesentlichen ein „Synchronisationspunkt“ zwischen zwei Threads, ähnlich einem `message`-Event. Zum Beispiel:

```js
// -- main.js --
a[0] = 63;
// Set a "Ready" flag in a[1]; assume initially it's not 1.
Atomics.store(a, 1, 1);
```

```js
// -- worker.js --
// Spin until a[1] receives the "Ready" flag
while (Atomics.load(a, 1) !== 1);
console.log(a[0]); // 63
```

> [!NOTE]
> Innerhalb eines einzelnen Agents wäre der Code in `worker.js` eindeutig fehlerhaft: `a[1]` könnte sich in der Schleife nicht ändern, wenn die Schleife den Wert selbst nie aktualisiert. Viele synchrone Endlosschleifen sind nur mit gemeinsam genutztem Speicher sinnvoll!
>
> Unter [Warten und Benachrichtigen](#warten_und_benachrichtigen) sehen wir, wie sich dieser Code etwas effizienter und weniger wie ein Fehler gestalten lässt.

Die einzige mögliche Reihenfolge ist:

1. `main.js` schreibt `a[0] = 63`. `worker.js` bleibt in der `while`-Schleife, weil `a[1]` noch nicht den richtigen Wert hat.
2. `main.js` speichert `1` in `a[1]`.
3. `worker.js` lädt den neuen Wert von `a[1]` und verlässt die `while`-Schleife.
4. `worker.js` liest `a[0]` als `63`.

Mithilfe des `store`/`load`-Paars haben wir erfolgreich eine Reihenfolge von Schritt 1 bis 4 hergestellt. So kann `worker.js` den von `main.js` geschriebenen neuen Wert von `a[0]` beobachten, obwohl dafür keine atomaren Operationen verwendet werden.

### Atomare Aktualisierungen

Die nächste Gruppe von Operationen ersetzt direkt mehrere Operatoren für [kombinierte Zuweisungen](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators). Wie bereits gezeigt, ist der Operator `+=` nicht atomar: Zwischen dem Lesen und Schreiben können andere Anweisungen ausgeführt werden, sodass die abschließende Schreiboperation möglicherweise nicht den erwarteten Wert schreibt. Um dies zu verhindern, können Sie ihn durch {{jsxref("Atomics.add()")}} ersetzen:

```js
// -- main.js --
const i = new Int32Array(sab, 0, 1);

port1.addEventListener("message", ({ data }) => {
  if (data === "started") {
    for (let n = 0; n < 10_000_000; n++) {
      Atomics.add(i, 0, 1);
    }
  } else if (data === "finished") {
    console.log(i[0]); // Guaranteed 20000000
  }
});
```

```js
// -- worker.js --
const i = new Int32Array(sab, 0, 1);

port.postMessage("started");
for (let n = 0; n < 10_000_000; n++) {
  Atomics.add(i, 0, 1);
}
port.postMessage("finished");
```

Der einzige Unterschied zum vorherigen Beispiel mit einer Race Condition ist, dass wir beide Anweisungen `i[0] += 1` durch `Atomics.add(i, 0, 1)` ersetzt haben. Nun gilt nicht nur dieselbe Garantie einer „sequenziell konsistenten“ Ausführung wie für `load` und `store`: Auch jeder Block aus Lesen, Ändern und Schreiben ist garantiert atomar. Die beiden atomaren Blöcke können daher in beliebiger Reihenfolge ausgeführt, aber nicht ineinander verschachtelt werden:

1. Atomarer Block:
   1. `main.js` liest `i[0]` als `currentI`.
   2. `main.js` schreibt `i[0] = currentI + 1`.
2. Atomarer Block:
   1. `worker.js` liest `i[0]` als `currentI + 1`.
   2. `worker.js` schreibt `i[0] = currentI + 2`.

Für einige weitere Operatoren für kombinierte Zuweisungen gibt es entsprechende `Atomics`-Methoden:

| Operator                                                                   | Methode                     |
| -------------------------------------------------------------------------- | --------------------------- |
| [`+=`](/de/docs/Web/JavaScript/Reference/Operators/Addition_assignment)    | {{jsxref("Atomics.add()")}} |
| [`-=`](/de/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment) | {{jsxref("Atomics.sub()")}} |
| [`&=`](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment) | {{jsxref("Atomics.and()")}} |
| [`\|=`](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment) | {{jsxref("Atomics.or()")}}  |
| [`^=`](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment) | {{jsxref("Atomics.xor()")}} |

Falls Ihre Operation keiner dieser Methoden entspricht, können Sie stattdessen die allgemeine Methode {{jsxref("Atomics.compareExchange()")}} verwenden. Sie ersetzt die folgende Abfolge:

```js
const oldValue = array[index];
if (oldValue === expectedValue) {
  array[index] = newValue;
}
return oldValue;
```

Wenn Sie beispielsweise die Operation `array[index] *= multiplier` haben, können Sie sie folgendermaßen atomar ausführen:

```js
function atomicMultiply(array, index, multiplier) {
  let oldValue = Atomics.load(array, index);

  while (true) {
    const observed = Atomics.compareExchange(
      array,
      index,
      oldValue,
      oldValue * multiplier,
    );

    if (observed === oldValue) {
      return oldValue;
    }

    oldValue = observed;
  }
}
```

Diese Funktion wiederholt sich in einer Schleife. Bei jedem Durchlauf versucht sie, `oldValue * multiplier` zu schreiben – unter der Bedingung, dass der Wert an diesem Index zum Zeitpunkt ihres atomaren Blocks noch `oldValue` ist. Hat sich der Wert geändert, versucht sie es mit dem neuen `oldValue` erneut.

Außerdem gibt es mit {{jsxref("Atomics.exchange()")}} eine Methode für den bedingungslosen Austausch. Sie ersetzt die folgende Abfolge:

```js
const oldValue = array[index];
array[index] = newValue;
return oldValue;
```

Verwenden Sie diese Methode, wenn Sie einen Speicherbereich zurücksetzen und zugleich seinen Wert zum Zeitpunkt des Zurücksetzens erhalten möchten. Sie lässt sich beispielsweise für eine Uhr verwenden:

```js
// -- worker.js --
while (true) {
  Atomics.add(a, 0, 1);
}
```

```js
// -- main.js --
const ticksSinceLastCheck = Atomics.exchange(a, 0, 0);
// ticksSinceLastCheck records how many times the worker has spun.
```

Würden Sie dies in eine `load`- und eine `store`-Operation aufteilen, könnte der Worker dazwischen eine weitere `add`-Operation ausgeführt haben, die dann unbemerkt verloren ginge.

## Warten und Benachrichtigen

In den bisherigen Beispielen verwenden wir eine Endlosschleife, wenn ein Agent darauf wartet, dass ein anderer seine Operation abschließt – etwa `while (Atomics.load(a, 1) !== 1);`. Das nennt man [aktives Warten](https://en.wikipedia.org/wiki/Busy_waiting). Dabei wird der gesamte Thread daran gehindert, andere Jobs auszuführen, bis ein anderer Thread den erwarteten Wert schreibt. Sie können dies etwas effizienter gestalten, indem Sie innerhalb der `while`-Schleife {{jsxref("Atomics.pause()")}} aufrufen. Diese Methode kann der CPU signalisieren, weniger Ressourcen bereitzustellen, da der Thread nur wartet und keine eigentliche Berechnung ausführt, ohne dass die CPU sofort anderen Threads überlassen werden muss.

```js
// -- worker.js --
while (Atomics.load(a, 1) !== 1) {
  Atomics.pause();
}
```

Alternativ können Sie auf ein System mit expliziten Benachrichtigungen umstellen und dabei synchron bleiben. Die Methoden {{jsxref("Atomics.wait()")}} und {{jsxref("Atomics.notify()")}} ermöglichen dies: Der wartende Thread muss den Wert nicht ständig prüfen; der schreibende Thread benachrichtigt ihn, sobald er fertig ist.

> [!NOTE]
> Anders als die zuvor vorgestellten Methoden können `wait()`, `waitAsync()` und `notify()` nur mit `Int32Array`- und `BigInt64Array`-Views arbeiten.

Hier wird der Thread von `worker.js` angehalten, wenn `a[1] === 0` gilt.

```js
// -- worker.js --
Atomics.wait(a, 1, 0);
console.log(a[0]);
```

Er bleibt angehalten, bis ihn ein anderer Thread – in unserem Fall `main.js` – benachrichtigt:

```js
// -- main.js --
a[0] = 63;
Atomics.store(a, 1, 1);
Atomics.notify(a, 1);
```

Einige wichtige Hinweise dazu:

- `Atomics.wait()` hindert den Thread auch daran, andere Jobs auszuführen. Im Web darf der Haupt-Thread nicht blockiert werden. Ein Aufruf von `Atomics.wait()` löst dort deshalb einen Fehler aus.
- `Atomics.wait()` kehrt nach einer Benachrichtigung zurück, unabhängig davon, ob sich `a[1]` tatsächlich geändert hat.
- Abgesehen von der Prüfung des Anfangswerts ist der Speicherindex, auf dem `store` und `wait` arbeiten, vollkommen frei wählbar: Was sein Wert tatsächlich bedeutet, spielt für diese Methoden keine Rolle. Der Index dient als Kennung der Liste wartender Agents. Die anfängliche Prüfung des Flags sorgt dafür, dass ein `wait` des Workers sofort fortgesetzt wird, wenn `notify` bereits zuvor aufgerufen wurde, statt dauerhaft zu warten. Deshalb sollten Sie `a[1]` erst unmittelbar vor dem Aufruf von `notify` auf `1` setzen – in unserem Fall bedeutet das „Bereit“ – und nur dann.

Sie können auch ein `timeout` angeben. Danach setzt der Thread seine Ausführung fort, selbst wenn er keine Benachrichtigung erhalten hat:

```js
// -- worker.js --
const result = Atomics.wait(a, 1, 0, 100); // Wait about 100ms
if (result === "timed-out") {
  // Decide what to do here: wait again? Throw an error?
  // Change to an asynchronous wait instead?
} else {
  // result can be either "not-equal" - i.e., a[1] is already "Ready"
  // without waiting or "ok" - i.e., some other thread notified it
  console.log(a[0]);
}
```

Die Methode {{jsxref("Atomics.waitAsync()")}} bietet dieselbe Funktionalität wie `wait()`, allerdings in Form einer Promise. Dadurch können während des Wartens andere asynchrone Jobs ausgeführt werden.

```js
// -- main.js --
const result = Atomics.waitAsync(a, 1, 0, 100); // Wait about 100ms
if (!result.async) {
  // Already ready
  // (Note: because timeout is not 0, result.value is always "not-equal")
  console.log(a[0]);
} else {
  const resultValue = await result.value;
  if (resultValue === "ok") {
    console.log(a[0]);
  } else {
    // resultValue is "timed-out" here; decide what to do
  }
}
```

Sie sollten die Auswirkungen der drei Wartemechanismen sorgfältig abwägen:

- Aktives Warten blockiert den Thread, ohne die CPU freizugeben. Nach dem Ende des Wartens kann die CPU die Ausführung sofort fortsetzen, ohne einen [Kontextwechsel](https://en.wikipedia.org/wiki/Context_switch) vorzunehmen. Während der Schleife ist der CPU-Kern allerdings belegt und kann keine anderen Jobs übernehmen. Das Betriebssystem kann dennoch entscheiden, einen anderen Thread einzuplanen, wenn der aktuelle Thread die CPU zu lange beansprucht. Dieser Mechanismus ist am schnellsten, wenn Sie eine sehr kurze Wartezeit erwarten – sogar kürzer als die Dauer zweier Kontextwechsel.
- Das synchrone `Atomics.wait()` blockiert den Thread, gibt die CPU jedoch frei. Der CPU-Kern kann andere Threads ausführen und muss beim Fortsetzen dieses Threads gegebenenfalls einen Kontextwechsel vornehmen. Dies ist der effizienteste Mechanismus, wenn Sie eine Wartezeit von mehr als zwei Kontextwechseln erwarten und andere Threads die CPU zwischenzeitlich besser nutzen könnten, Sie den Code aber synchron halten möchten.
- Das asynchrone `Atomics.waitAsync()` verwendet die übliche Promise-Semantik: Der Code, der auf den Abschluss wartet, wird als weiterer Job im Agent fortgesetzt, während anderer Code im selben Thread weiterläuft. Das ist nützlich, wenn der aktuelle Thread zwischenzeitlich andere, ebenso wichtige Aufgaben erledigen muss – etwa der Haupt-Thread, der die Seite rendern und auf Benutzerinteraktionen reagieren muss.

## Nützliche Muster für gemeinsam genutzten Speicher

Sehen wir uns einige gängige Techniken und Konzepte an, mit denen sich die Leistung und Korrektheit von Multithreading sicherstellen lassen.

Ein Protokoll für gemeinsam genutzten Speicher muss folgende Fragen beantworten:

- Wer darf auf welchen Teil des Speichers zugreifen?
- Welche Operationen müssen gemeinsam stattfinden, ohne dass sich Operationen anderer Threads dazwischenschieben?
- Woran erkennt ein Agent, dass Daten gelesen oder gefahrlos überschrieben werden können?
- Wie viel Aufwand erfordert das Protokoll, wenn ein Agent allein arbeitet, und was geschieht, wenn viele Agents um den Zugriff konkurrieren?

### Sperren und Mutexe

Eine [_Sperre_](<https://en.wikipedia.org/wiki/Lock_(computer_science)>), auch _Mutex_ genannt – von „mutual exclusion“ –, ist ein Mechanismus, der sicherstellt, dass kein anderer Thread auf dieselbe Ressource zugreifen kann, solange ein Thread Zugriff darauf hat. Jeder Thread erwirbt die Sperre vor dem Zugriff auf geschützte Daten und gibt sie danach wieder frei. Der Code zwischen dem Erwerb und der Freigabe heißt _kritischer Abschnitt_.

> [!NOTE]
> [_Futex_](https://en.wikipedia.org/wiki/Futex) ist die Kurzform von „fast user-space mutex“. Etwas verwirrend ist ein Futex jedoch kein Mutex, sondern ein Wartemechanismus, mit dem sich ein Mutex implementieren lässt. In JavaScript sind Futexe der einzige integrierte Wartemechanismus; er wird durch `Atomics.wait()`/`Atomics.waitAsync()` und `Atomics.notify()` bereitgestellt. Unsere Mutex-Beispiele bauen darauf auf.

Ein Mutex ist lediglich ein Protokoll und hindert einen anderen Thread nicht physisch am Zugriff auf den Speicher. Solange alle das Protokoll einhalten, überschneiden sich die kritischen Abschnitte verschiedener Threads nie. So wird eine ganze Abfolge von Operationen geschützt, ohne dass jeder einzelne Lese- und Schreibvorgang atomar sein muss.

Erstellen Sie beispielsweise einen Buffer mit Platz für eine Sperre und einen Wert. In unserem Protokoll erstellt jeder beteiligte Agent eine `Int32Array`-View. Deren erstes Element repräsentiert die Sperre (`1` bedeutet entsperrt, `0` bedeutet gesperrt), während das zweite die geschützten Daten enthält.

```js
const sab = new SharedArrayBuffer(8);
const shared = new Int32Array(sab);
shared[0] = 1;
```

So kann ein beteiligter Agent dieses Protokoll implementieren. Wenn ein Agent `lock()` aufruft, um die Sperre zu erwerben, geschieht Folgendes:

- `Atomics.compareExchange()` versucht, das erste Element auf `0` (gesperrt) zu setzen, allerdings nur, wenn es derzeit `1` (verfügbar) ist.
- Falls dies fehlschlägt – das Element also bereits `0` ist, weil ein anderer Agent die Sperre hält –, versetzt `Atomics.wait()` den aufrufenden Agent in den Wartezustand, sofern die Sperre noch `0` enthält. Sie könnte zwischen `compareExchange()` und `wait()` freigegeben worden sein.
- Der Agent wird erst wieder geweckt, wenn der Agent, der die Sperre derzeit hält, `unlock()` aufruft. Dadurch wird das Sperrelement auf `1` zurückgesetzt und der am längsten wartende Agent in der Warteschlange mit `Atomics.notify()` geweckt.
- Nach dem Aufwachen versucht der Agent erneut, die Sperre zu erwerben. Das kann weiterhin fehlschlagen, wenn ein neu hinzukommender Agent die Sperre zuerst erhält – beispielsweise wenn der freigebende Agent sofort wieder `lock()` aufruft. In diesem Fall wartet der Agent aufgrund der `while()`-Schleife erneut.
- Die Schleife endet erst, wenn der Erwerb der Sperre erfolgreich ist.

```js
function lock() {
  while (Atomics.compareExchange(shared, 0, 1, 0) !== 1) {
    Atomics.wait(shared, 0, 0);
  }
}

function unlock() {
  Atomics.store(shared, 0, 1);
  Atomics.notify(shared, 0, 1);
}
```

So können Sie das Paar aus Sperren und Entsperren verwenden. Der kritische Abschnitt muss in einen {{jsxref("Statements/try...catch", "try...finally")}}-Block eingeschlossen werden, in dessen `finally`-Teil `unlock()` aufgerufen wird. Dadurch wird die Sperre auch dann freigegeben, wenn der kritische Abschnitt eine Ausnahme auslöst:

```js
lock();
try {
  shared[1] *= 2;
  shared[1] += 1;
} finally {
  unlock();
}
```

Obwohl der kritische Abschnitt gewöhnliche indexbasierte Lese- und Schreibzugriffe verwendet, beobachten andere Agents niemals veraltete Werte. Die atomaren Operationen in `lock()` und `unlock()` stellen nämlich eine sequenziell konsistente Reihenfolge her.

Ein einzelner Mutex für alle gemeinsam genutzten Daten ist ein unkomplizierter Ausgangspunkt, führt jedoch dazu, dass sämtliche geschützten Arbeiten nacheinander ausgeführt werden. Wenn Agents auf unabhängigen Speicherbereichen arbeiten können, ermöglichen separate Sperren für diese Bereiche – oder die Zuweisung jedes Bereichs an einen einzigen schreibenden Agent – mehr Parallelität.

Dieser einfache Mutex bietet mehrere Verbesserungsmöglichkeiten:

- Was passiert, wenn ein Agent versehentlich `unlock()` aufruft, obwohl er die Sperre gar nicht hält?
  - : Wir können das lösen, indem wir das boolesche Flag durch eine eindeutige ID für jeden Agent ersetzen. `unlock()` wird dann nur ausgeführt, wenn die ID in der Sperre mit der Agent-ID übereinstimmt.
- Was passiert, wenn ein Agent versehentlich `lock()` aufruft, obwohl er die Sperre bereits hält? Das nennt man _Wiedereintritt_. Der Agent würde dann unbegrenzt auf sich selbst warten, und auch alle anderen auf die Sperre wartenden Agents kämen nie zum Zug.
  - : Wir können das lösen, indem `lock()` nur dann wartet, wenn die Eigentümer-ID in der Sperre nicht mit der aktuellen ID übereinstimmt.

    > [!NOTE]
    > Wiedereintritt kommt häufig bei verschachtelten Funktionsaufrufen vor: Beispielsweise ruft ein kritischer Abschnitt eine weitere Funktion auf, die ebenfalls versucht, mit derselben Sperre einen kritischen Abschnitt einzurichten. Wenn die Sperre nicht wiedereintrittsfähig ist, also diesen Mechanismus nicht implementiert, muss jeder Agent sicherstellen, dass kein Wiedereintritt in den kritischen Abschnitt erfolgt.

- Was passiert, wenn ein Agent, der erneut in die Sperre eingetreten ist, `unlock()` aufruft? Dadurch würde die Sperre vorzeitig freigegeben, obwohl ein weiterer `lock()`-Aufruf voraussetzt, dass sie noch gehalten wird.
  - : Wir benötigen einen Zähler, der bei jedem `lock()` erhöht und bei jedem `unlock()` verringert wird. Die Sperre wird erst tatsächlich freigegeben, wenn der Zähler null erreicht.
- Was passiert, wenn ein wartender Agent stets gegen einen neu hinzukommenden Agent verliert und die Sperre nie erhält?
  - : Wir benötigen einen Mechanismus zur Ablaufplanung, der verhindert, dass neu hinzukommende Agents die Warteschlange überholen.

### Spinlocks

Im obigen Beispiel wird ein Agent, der auf die Sperre wartet, in den Wartezustand versetzt und muss von einem anderen Agent durch `unlock()` benachrichtigt werden. Bei starker Konkurrenz um die Sperre ist das effizient: Da die Sperre möglicherweise nicht bald verfügbar wird, sollte die CPU besser anderen Prozessen überlassen werden, die sie nicht benötigen. Bei geringer Konkurrenz verursacht das Aus- und Wiedereinplanen des Threads auf der CPU jedoch mehr Aufwand, als die CPU während des Wartens einfach zu belegen.

Ein _Spinlock_ verwendet aktives Warten, statt konkurrierende Agents in den Wartezustand zu versetzen. Um den vorherigen Mutex in einen Spinlock umzuwandeln, ersetzen Sie seine Funktionen durch:

```js
function lock() {
  while (Atomics.compareExchange(shared, 0, 1, 0) !== 1) {
    Atomics.pause();
  }
}

function unlock() {
  Atomics.store(shared, 0, 1);
}
```

`Atomics.pause()` dient hier lediglich als Leistungshinweis an die CPU. Sie können es entfernen, ohne die Funktionalität zu ändern.

> [!WARNING]
> Spinlocks im Haupt-Thread werden nicht empfohlen, da sie die gesamte Seite einfrieren. Generell sind Spinlocks möglicherweise nicht leistungsfähiger als gewöhnliches Warten, sofern sie nicht sehr sorgfältig konzipiert sind.

Manchmal lässt sich beim Schreiben des Codes nicht vorhersagen, ob die Konkurrenz um die Sperre stark oder gering sein wird. Derselbe Code kann mit nur zwei konkurrierenden Agents laufen, sodass aktives Warten effizienter ist, oder mit tausend konkurrierenden Agents, sodass reguläres Warten erforderlich ist. In diesem Fall können Sie einen hybriden Ansatz wählen: Warten Sie zunächst für kurze Zeit aktiv – beispielsweise zehn Schleifendurchläufe – und rufen Sie `Atomics.wait()` auf, falls die Sperre dann noch nicht erworben wurde. Ein Beispiel finden Sie auf der Seite zu {{jsxref("Atomics.pause()")}}.

### Semaphore

Ein Mutex erlaubt jeweils nur einem Agent den Zugriff auf eine Ressource. Ein [_Semaphor_](<https://en.wikipedia.org/wiki/Semaphore_(programming)>) verallgemeinert dies und lässt eine festgelegte Anzahl von Agents gleichzeitig zu.

Dazu hält der gemeinsam genutzte Speicher einen Zähler für verfügbare _Zugangsberechtigungen_: Beim Erwerb einer Berechtigung wird der Zähler verringert, bei der Freigabe erhöht. Ein Agent wartet, wenn keine Berechtigung verfügbar ist.

```js
const sab = new SharedArrayBuffer(4);
const permits = new Int32Array(sab);
permits[0] = 3;
```

Jeder Worker erstellt eine eigene View auf diesen Buffer und verwendet die folgenden Funktionen:

```js
const permits = new Int32Array(sab);

function acquire() {
  while (true) {
    const available = Atomics.load(permits, 0);
    if (available === 0) {
      Atomics.wait(permits, 0, 0);
    } else if (
      Atomics.compareExchange(permits, 0, available, available - 1) ===
      available
    ) {
      return;
    }
  }
}

function release() {
  Atomics.add(permits, 0, 1);
  Atomics.notify(permits, 0, 1);
}

acquire();
try {
  // Perform a task that requires one permit.
} finally {
  release();
}
```

Vielleicht fällt Ihnen auf, dass wir bei einer maximalen Anzahl von `1` Zugangsberechtigung im Wesentlichen denselben Code wie im Mutex-Beispiel erhalten. Tatsächlich ist unser einfacher Mutex lediglich ein _binärer Semaphor_ mit höchstens einer Berechtigung.

Ein Semaphor mit mehreren Berechtigungen – ein _zählender Semaphor_ – stößt dennoch auf Probleme, wenn gleichzeitig arbeitende Agents auf dieselbe Ressource zugreifen möchten. Ziel eines Semaphors ist es, den Zugriff auf einen begrenzten Ressourcenpool zu steuern, beispielsweise auf nur vier verfügbare Buffer. Sie benötigen weiterhin einen eigenen Mechanismus, der diese Ressourcen den Agents zuweist, damit sie nicht gleichzeitig auf dieselbe Ressource zugreifen.

### Deadlocks vermeiden

Ein _Deadlock_ entsteht, wenn Agents in einem Kreislauf aufeinander warten, sodass keiner weiterarbeiten kann. Zum Beispiel:

1. Agent A erwirbt Sperre X.
2. Agent B erwirbt Sperre Y.
3. Agent A wartet darauf, Y zu erwerben, während er X weiterhin hält.
4. Agent B wartet darauf, X zu erwerben, während er Y weiterhin hält.

```js
// -- a.js --
lockX.lock();
try {
  lockY.lock(); // Waiting for lockY.unlock() in b.js...
  try {
    // Work requiring both locks
  } finally {
    lockY.unlock();
  }
} finally {
  lockX.unlock();
}
```

```js
// -- b.js --
lockY.lock();
try {
  lockX.lock(); // Waiting for lockX.unlock() in a.js...
  try {
    // Work requiring both locks
  } finally {
    lockX.unlock();
  }
} finally {
  lockY.unlock();
}
```

Keiner der beiden Agents kann den Code erreichen, der seine Sperre freigibt.

Das Warten auf eine Sperre ist nur eine Möglichkeit, in einen Deadlock zu geraten. Zwei Agents können beispielsweise auch jeweils auf eine Nachricht des anderen warten.

Die Vermeidung von Deadlocks erfordert in jedem Agent ein hohes Maß an Disziplin. Wenn eine Operation mehrere Sperren benötigt, muss das Protokoll beispielsweise festlegen, in welcher Reihenfolge sie erworben werden. Jeder Agent muss sicherstellen, dass Sperren letztlich wieder freigegeben werden – insbesondere bei Fehlern, etwa durch die Verwendung von `try...finally`. Wie solche Protokolle auf Ebene des Compilers oder eines statischen Prüfwerkzeugs durchgesetzt werden können, ist Gegenstand aktiver Forschung.

### Algorithmen ohne Sperren

Sperren sind leistungsfähig und bequem – sofern sie korrekt implementiert sind –, verursachen aber auch einen gewissen Aufwand, insbesondere wenn keine Konkurrenz besteht. Für jeden kritischen Abschnitt, der möglicherweise nur aus einem einzigen Lese- oder Schreibvorgang besteht, führt der obige Mutex ein `Atomics.compareExchange()`, ein `Atomics.store()` und – außer bei Spinlocks – ein `Atomics.notify()` aus.

Tatsächlich könnte selbst etwas so Einfaches wie `Atomics.load(uint16, 0)` eine interne Sperre benötigen! Ein Element in einem `Uint16Array` besteht aus zwei Bytes. Wenn eine sehr einfache CPU Speicher nur Byte für Byte lesen könnte, sähe das – bei Little-Endian-Byte-Reihenfolge – folgendermaßen aus:

```js
const firstByte = uint8[0]; // uint8 is the same memory span viewed as Uint8Array
const secondByte = uint8[1];

const value = firstByte + (secondByte << 8);
```

Schreibt ein anderer Agent zwischen der ersten und der zweiten Anweisung einen neuen Zwei-Byte-Wert, kann der abschließende Lesevorgang Bytes des alten und des neuen Werts kombinieren, statt einen konsistenten `uint16`-Wert zu liefern. Das nennt man einen _zerrissenen Lesevorgang_. Atomare Lese- und Schreibzugriffe auf dasselbe Element werden niemals zerrissen, weil die Engine entweder die betreffenden Bytes sperrt oder native CPU-Anweisungen verwendet, die die erforderliche Atomarität gewährleisten. Eine Sperre erfordert zwei zusätzliche Schritte – Erwerb und Freigabe – und kann deutlich langsamer sein als eine Implementierung ohne Sperre. Ob die eine oder die andere Variante verwendet wird, hängt unter anderem vom Betriebssystem, der CPU-Architektur, der JavaScript-Engine und der Byte-Größe der Operation ab. Mit {{jsxref("Atomics.isLockFree()")}} können Sie prüfen, ob atomare Operationen einer bestimmten Byte-Größe in Ihrer aktuellen Umgebung ohne Sperren implementiert sind.

```js
Atomics.isLockFree(4); // true: required for 4-byte atomic operations
Atomics.isLockFree(7); // false: not a supported atomic element size
```

Nicht alle Operationen sind _vor zerrissenen Zugriffen geschützt_. Lese- und Schreibzugriffe auf die Typen `Int16`, `Uint16`, `Int32` und `Uint32` werden niemals zerrissen – unabhängig davon, ob Sie `Atomics` oder einen indexbasierten Zugriff verwenden. Bei anderen Datentypen können indexbasierte Zugriffe zerrissen werden. Um dies zu vermeiden, müssen Sie `Atomics` verwenden oder – bei nicht unterstützten Typen wie Gleitkommazahlen – selbst eine Sperre implementieren. `Atomics.isLockFree` gibt an, ob die Garantie gegen zerrissene Zugriffe durch eine Sperre oder eine native Anweisung gewährleistet wird.

Auch in Ihrem eigenen Code können Sie Sperren vermeiden. Erinnern Sie sich an den Code für die atomare Multiplikation von oben:

```js
function atomicMultiply(array, index, multiplier) {
  let oldValue = Atomics.load(array, index);

  while (true) {
    const observed = Atomics.compareExchange(
      array,
      index,
      oldValue,
      oldValue * multiplier,
    );

    if (observed === oldValue) {
      return oldValue;
    }

    oldValue = observed;
  }
}
```

Hier gibt es keine explizite Sperre. Der Agent erzwingt keinen kritischen Abschnitt, sondern wiederholt die Lese-Schreib-Abfolge, bis sich dazwischen kein konkurrierender Zugriff mehr ereignet. Das macht den Fall ohne Konkurrenz so schnell wie möglich, kann bei starker Konkurrenz aber viele Wiederholungsversuche erfordern.

### Übergabe zwischen Produzent und Verbraucher

Ein häufiger Fall, in dem zwei Threads auf denselben Speicher zugreifen müssen, ist ein _Produzent_ mit einem _Verbraucher_. Bei einer gewöhnlichen Sperre konkurrieren die beiden Agents jedes Mal um die Sperre. Sind die Daten noch nicht bereit – etwa weil der Produzent feststellt, dass der Verbraucher sie noch nicht gelesen hat, oder der Verbraucher feststellt, dass der Produzent sie noch nicht geschrieben hat; um dies festzustellen, benötigen Sie außerdem ein eigenes Bereitschafts-Flag –, geht der betreffende Agent wieder in den Wartezustand und überlässt dem anderen die Sperre. Das ist ineffizient. Das _Übergabemuster_ lässt die beiden Agents abwechselnd arbeiten und vereint die Sperre und das Bereitschafts-Flag in einem einzigen Protokoll.

Wir beginnen wieder mit einem gemeinsam genutzten Speicherbereich aus zwei Elementen. Das erste Element ist ein Zustands-Flag: `0` bedeutet leer und `1` bedeutet voll. Das zweite Element enthält einen Wert.

```js
const sab = new SharedArrayBuffer(8);
const shared = new Int32Array(sab);
```

Der Produzent wartet, solange der Platz für den Wert „voll“ ist, der Verbraucher ihn also noch nicht gelesen hat. Sobald der Platz „leer“ ist, schreibt er den neuen Wert und benachrichtigt den Verbraucher.

```js
// -- producer.js --
function produce(value) {
  while (Atomics.load(shared, 0) !== 0) {
    Atomics.wait(shared, 0, 1);
  }

  shared[1] = value;
  Atomics.store(shared, 0, 1);
  Atomics.notify(shared, 0, 1);
}

produce(63);
produce(64);
```

Umgekehrt wartet der Verbraucher, solange der Platz für den Wert „leer“ ist, und liest den neuen Wert, sobald er „voll“ wird.

```js
// -- consumer.js --
function consume() {
  while (Atomics.load(shared, 0) !== 1) {
    Atomics.wait(shared, 0, 0);
  }

  const value = shared[1];
  Atomics.store(shared, 0, 0);
  Atomics.notify(shared, 0, 1);
  return value;
}

console.log(consume()); // 63
console.log(consume()); // 64
```

Dieses Protokoll setzt genau einen Produzenten und einen Verbraucher voraus. Bei mehreren Produzenten könnten zwei Agents beide einen leeren Platz feststellen und die Daten des jeweils anderen überschreiben. Sie bräuchten daher weiterhin einen Mutex für die Produzenten. Dasselbe gilt für Verbraucher. Gegenüber einer gemeinsamen Sperre für alle Produzenten und Verbraucher ist dies dennoch eine Verbesserung: Die Kontrolle kann ohne Konkurrenz zwischen den _Gruppen_ von Produzenten und Verbrauchern wechseln.

## Zahlenratespiel mit gemeinsam genutztem Speicher

Zum Abschluss dieses Leitfadens implementieren wir unser [Zahlenratespiel](#kommunikation_über_nachrichten) mit dem Übergabemuster erneut. Beide Agents wechseln sich als Produzent und Verbraucher ab: Der Worker erzeugt einen Tipp; der Haupt-Thread liest ihn und erzeugt eine Rückmeldung. Sie nutzen zwei Ganzzahlen gemeinsam:

- `shared[0]` zeigt an, wer an der Reihe ist: `0` für den Worker und `1` für den Haupt-Thread.
- `shared[1]` enthält je nach aktuellem Zug entweder den Tipp oder die Rückmeldung. Für die Rückmeldung bedeutet `-1` „Zu niedrig“, `1` „Zu hoch“ und `0` „Richtig“.

```js
// -- main.js --
const worker = new Worker("./worker.js", { type: "module" });
const sab = new SharedArrayBuffer(8);
const shared = new Int32Array(sab);
const secretNumber = 63;

// The turn flag is initially 0, so the worker takes the first turn
worker.postMessage(sab);

// Wait until the worker has started. The browser may not start the
// worker until the main thread returns to the event loop.
await new Promise((resolve) => {
  worker.addEventListener("message", resolve, { once: true });
});

while (true) {
  // Wait until the worker finishes its turn
  while (Atomics.load(shared, 0) !== 1) {
    // We use busy waiting here because we expect the worker to come
    // back very quickly and the main thread can't use Atomics.wait().
    // In more complex scenarios, you probably want to use Atomics.waitAsync()
    // to avoid blocking the main thread.
    Atomics.pause();
  }

  const workerGuess = shared[1];
  console.log("Worker guessed:", workerGuess);
  const feedback =
    workerGuess < secretNumber ? -1 : workerGuess > secretNumber ? 1 : 0;

  shared[1] = feedback;
  Atomics.store(shared, 0, 0);
  Atomics.notify(shared, 0, 1);

  if (feedback === 0) {
    console.log("Worker successfully guessed the secret number!");
    break;
  }
}
```

```js
// -- worker.js --
const sab = await new Promise((resolve) => {
  self.addEventListener("message", (e) => resolve(e.data), { once: true });
});
const shared = new Int32Array(sab);
let low = 0;
let high = 100;

// Tell the main thread that the worker has started
self.postMessage("ready");

while (true) {
  const lastGuess = Math.floor((low + high) / 2);
  // Worker initiates the handoff here by making a guess
  shared[1] = lastGuess;
  Atomics.store(shared, 0, 1);
  Atomics.notify(shared, 0, 1);

  // Wait until the main agent writes the feedback
  while (Atomics.load(shared, 0) !== 0) {
    Atomics.wait(shared, 0, 1);
  }

  const feedback = shared[1];
  if (feedback === 0) {
    console.log("Yay");
    break;
  }
  if (feedback === -1) {
    low = lastGuess + 1;
  } else if (feedback === 1) {
    high = lastGuess - 1;
  }
  if (low > high) {
    throw new Error(
      "Sorry, the feedback from main.js is inconsistent and I suspect main is cheating",
    );
  }
}
```

Damit wird dieselbe Funktionalität umgesetzt. Beachten Sie, dass beide Schleifen synchron sind – das sollte wesentlich effizienter sein, als Nachrichten hin und her zu senden!

## Siehe auch

- [JavaScript-Ausführungsmodell](/de/docs/Web/JavaScript/Reference/Execution_model)
- [Web Workers API](/de/docs/Web/API/Web_Workers_API)
- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("Atomics")}}
- [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage)

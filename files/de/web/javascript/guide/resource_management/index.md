---
title: JavaScript-Ressourcenmanagement
slug: Web/JavaScript/Guide/Resource_management
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Internationalization")}}

Dieser Leitfaden erklärt, wie man Ressourcenmanagement in JavaScript durchführt. Ressourcenmanagement ist nicht dasselbe wie [Speichermanagement](/de/docs/Web/JavaScript/Guide/Memory_management), was ein fortgeschritteneres Thema ist und normalerweise automatisch von JavaScript abgewickelt wird. Das Ressourcenmanagement handelt von der Verwaltung von Ressourcen, die _nicht_ automatisch von JavaScript bereinigt werden. Manchmal ist es in Ordnung, einige ungenutzte Objekte im Speicher zu haben, da sie die Anwendungslogik nicht beeinträchtigen. Ressourcenlecks führen jedoch oft dazu, dass Dinge nicht funktionieren oder viel übermäßiger Speicher genutzt wird. Daher ist dies keine optionale Funktion zur Optimierung, sondern ein Kernmerkmal, um korrekte Programme zu schreiben!

> [!NOTE]
> Auch wenn Speichermanagement und Ressourcenmanagement zwei separate Themen sind, können Sie manchmal als letzten Ausweg in das Speichermanagement-System eingreifen, um Ressourcenmanagement durchzuführen. Wenn Sie beispielsweise ein JavaScript-Objekt haben, das einen Handle einer externen Ressource darstellt, können Sie eine {{jsxref("FinalizationRegistry")}} erstellen, um die Ressource aufzuräumen, wenn der Handle vom Garbage Collector erfasst wird, da auf die Ressource definitiv nicht mehr zugegriffen werden kann. Es gibt jedoch keine Garantie, dass der Finalizer ausgeführt wird, daher ist es keine gute Idee, sich darauf für kritische Ressourcen zu verlassen.

## Problem

Lassen Sie uns zunächst einige Beispiele für Ressourcen betrachten, die verwaltet werden müssen:

- **Datei-Handles**: Ein Datei-Handle wird verwendet, um Bytes in einer Datei zu lesen und zu schreiben. Wenn Sie damit fertig sind, müssen Sie [`fileHandle.close()`](https://nodejs.org/api/fs.html#filehandleclose) aufrufen, andernfalls bleibt die Datei geöffnet, auch wenn das JS-Objekt nicht mehr zugänglich ist. Wie in den verlinkten Node.js-Dokumenten steht:

  > Wenn ein `<FileHandle>` nicht mit der `fileHandle.close()`-Methode geschlossen wird, versucht es, den Dateideskriptor automatisch zu schließen und eine Prozesswarnung auszugeben, um Speicherlecks zu verhindern. Bitte verlassen Sie sich nicht auf dieses Verhalten, da es unzuverlässig sein kann und die Datei möglicherweise nicht geschlossen wird. Schließen Sie stattdessen immer explizit `<FileHandle>`s. Node.js könnte dieses Verhalten in Zukunft ändern.

- **Netzwerkverbindungen**: Einige Verbindungen, wie [`WebSocket`](/de/docs/Web/API/WebSocket) und [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), müssen geschlossen werden, wenn keine Nachrichten übertragen werden. Andernfalls bleibt die Verbindung offen, und Verbindungspools sind oft in ihrer Größe stark begrenzt.
- **Stream-Leser**: Wenn Sie [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock) nicht aufrufen, bleibt der Stream gesperrt und erlaubt keinen anderen Leser, ihn zu konsumieren.

Hier ist ein konkretes Beispiel, das einen lesbaren Stream verwendet:

```js
const stream = new ReadableStream({
  start(controller) {
    controller.enqueue("a");
    controller.enqueue("b");
    controller.enqueue("c");
    controller.close();
  },
});

async function readUntil(stream, text) {
  const reader = stream.getReader();
  let chunk = await reader.read();

  while (!chunk.done && chunk.value !== text) {
    console.log(chunk);
    chunk = await reader.read();
  }
  // We forgot to release the lock here
}

readUntil(stream, "b").then(() => {
  const anotherReader = stream.getReader();
  // TypeError: ReadableStreamDefaultReader constructor can only
  // accept readable streams that are not yet locked to a reader
});
```

Hier haben wir einen Stream, der drei Datenbrocken ausgibt. Wir lesen vom Stream, bis wir den Buchstaben „b“ finden. Wenn `readUntil` zurückkehrt, ist der Stream nur teilweise konsumiert, sodass wir in der Lage sein sollten, mit einem anderen Leser weiter davon zu lesen. Wir haben jedoch vergessen, den Lock freizugeben, sodass der Stream weiterhin gesperrt ist, obwohl `reader` nicht mehr verfügbar ist, und keinen weiteren Leser erstellen können.

Die Lösung in diesem Fall ist einfach: Rufen Sie `reader.releaseLock()` am Ende von `readUntil` auf. Aber ein paar Probleme bleiben bestehen:

- Inkonsistenz: Unterschiedliche Ressourcen haben unterschiedliche Möglichkeiten, sie freizugeben. Zum Beispiel haben wir `close()`, `releaseLock()`, `disconnect()`, usw. Das Muster verallgemeinert sich nicht.
- Fehlerbehandlung: Was passiert, wenn der Aufruf `reader.read()` fehlschlägt? Dann würde `readUntil` terminieren und nie zum Aufruf von `reader.releaseLock()` gelangen. Wir können dies mit {{jsxref("Statements/try...catch", "try...finally")}} beheben:

  ```js
  async function readUntil(stream, text) {
    const reader = stream.getReader();
    try {
      let chunk = await reader.read();

      while (!chunk.done && chunk.value !== text) {
        console.log(chunk);
        chunk = await reader.read();
      }
    } finally {
      reader.releaseLock();
    }
  }
  ```

  Aber Sie müssen sich daran erinnern, dies jedes Mal zu tun, wenn Sie eine wichtige Ressource haben, um sie freizugeben.

- Bereich: Im obigen Beispiel ist `reader` bereits geschlossen, wenn wir die `try...finally`-Anweisung verlassen, aber es bleibt im Gültigkeitsbereich verfügbar. Das bedeutet, dass Sie es möglicherweise versehentlich verwenden, nachdem es geschlossen wurde.
- Mehrere Ressourcen: Wenn wir zwei Leser auf verschiedenen Streams haben, müssen wir daran denken, beide freizugeben. Dies ist ein respektabler Versuch, dies zu tun:

  ```js
  const reader1 = stream1.getReader();
  const reader2 = stream2.getReader();
  try {
    // do something with reader1 and reader2
  } finally {
    reader1.releaseLock();
    reader2.releaseLock();
  }
  ```

  Dies führt jedoch zu weiteren Fehlerbehandlungsschwierigkeiten. Wenn `stream2.getReader()` auslöst, wird `reader1` nicht freigegeben; wenn `reader1.releaseLock()` einen Fehler auslöst, wird `reader2` nicht freigegeben. Das bedeutet, dass wir tatsächlich jedes Ressourcenerwerbs-Freigabepaar in einem eigenen `try...finally` umwickeln müssen:

  ```js
  const reader1 = stream1.getReader();
  try {
    const reader2 = stream2.getReader();
    try {
      // do something with reader1 and reader2
    } finally {
      reader2.releaseLock();
    }
  } finally {
    reader1.releaseLock();
  }
  ```

Sie sehen, wie eine scheinbar harmlose Aufgabe, `releaseLock` aufzurufen, schnell zu verschachteltem Boilerplate-Code führen kann. Aus diesem Grund bietet JavaScript integrierte Sprachunterstützung für das Ressourcenmanagement.

## Die `using`- und `await using`-Deklarationen

Die Lösung, die wir haben, sind zwei spezielle Arten von Variablendeklarationen: {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}}. Sie sind `const` ähnlich, geben aber die Ressource automatisch frei, wenn die Variable außerhalb des Gültigkeitsbereichs geht, solange die Ressource _entsorgbar_ ist. Im gleichen Beispiel wie oben, können wir es wie folgt umschreiben:

```js
{
  using reader1 = stream1.getReader();
  using reader2 = stream2.getReader();

  // do something with reader1 and reader2

  // Before we exit the block, reader1 and reader2 are automatically released
}
```

> [!NOTE]
> Zum Zeitpunkt des Schreibens implementiert [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) nicht das entsorgbare Protokoll. Dies ist ein hypothetisches Beispiel.

Beachten Sie zunächst die zusätzlichen geschweiften Klammern um den Code. Dies erstellt einen neuen [Blockbereich](/de/docs/Web/JavaScript/Reference/Statements/block) für die `using`-Deklarationen. Mit `using` deklarierte Ressourcen werden automatisch freigegeben, wenn sie aus dem `using`-Gültigkeitsbereich gehen, was in diesem Fall der Fall ist, wenn wir den Block verlassen, entweder weil alle Anweisungen ausgeführt wurden oder weil irgendwo ein Fehler oder ein `return`/`break`/`continue` aufgetreten ist.

Das bedeutet, dass `using` nur in einem Gültigkeitsbereich verwendet werden kann, der eine klare Lebensdauer hat – nämlich kann es nicht auf der obersten Ebene eines Skripts verwendet werden, da Variablen auf der obersten Ebene eines Skripts im Gültigkeitsbereich für alle zukünftigen Skripte auf der Seite sind, was praktisch bedeutet, dass die Ressource niemals freigegeben werden kann, wenn die Seite nie entladen wird. Sie können es jedoch auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwenden, da der Modulbereich endet, wenn das Modul die Ausführung beendet.

Jetzt wissen wir, _wann_ `using` aufräumt. Aber _wie_ wird es gemacht? `using` erfordert, dass die Ressource das _entsorgbare_ Protokoll implementiert. Ein Objekt ist entsorgbar, wenn es die [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose)-Methode hat. Diese Methode wird ohne Argumente aufgerufen, um die Bereinigung durchzuführen. Zum Beispiel, im Fall des Lesers, kann die `[Symbol.dispose]`-Eigenschaft ein einfacher Alias oder Wrapper von `releaseLock` sein:

```js
// For demonstration
class MyReader {
  // A wrapper
  [Symbol.dispose]() {
    this.releaseLock();
  }
  releaseLock() {
    // Logic to release resources
  }
}

// OR, an alias
MyReader.prototype[Symbol.dispose] = MyReader.prototype.releaseLock;
```

Durch das entsorgbare Protokoll kann `using` alle Ressourcen auf konsistente Weise entsorgen, ohne zu verstehen, welchen Ressourcentyp es ist.

Jeder Bereich hat eine Liste von Ressourcen, die ihm in der Reihenfolge zugeordnet sind, in der sie deklariert wurden. Wenn der Bereich endet, werden die Ressourcen in umgekehrter Reihenfolge entsorgt, indem ihre `[Symbol.dispose]()`-Methode aufgerufen wird. Zum Beispiel, im obigen Beispiel, wird `reader1` vor `reader2` deklariert, also wird `reader2` zuerst entsorgt, dann `reader1`. Fehler, die beim Versuch auftreten, eine Ressource zu entsorgen, verhindern nicht die Entsorgung anderer Ressourcen. Dies ist konsistent mit dem `try...finally`-Muster und respektiert mögliche Abhängigkeiten zwischen Ressourcen.

`await using` ist `using` sehr ähnlich. Die Syntax sagt Ihnen, dass irgendwo ein `await` stattfindet – nicht, wenn die Ressource deklariert wird, sondern tatsächlich, wenn sie entsorgt wird. `await using` erfordert, dass die Ressource _asynchron entsorgbar_ ist, was bedeutet, dass sie eine [`[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose)-Methode hat. Diese Methode wird ohne Argumente aufgerufen und gibt ein Promise zurück, das aufgelöst wird, wenn die Bereinigung abgeschlossen ist. Dies ist nützlich, wenn die Bereinigung asynchron ist, wie `fileHandle.close()`, in welchem Fall das Ergebnis der Entsorgung nur asynchron bekannt sein kann.

```js
{
  await using fileHandle = open("file.txt", "w");
  await fileHandle.write("Hello");

  // fileHandle.close() is called and awaited
}
```

Weil `await using` ein `await` erfordert, ist es nur in Kontexten erlaubt, in denen `await` es ist, was `async`-Funktionen und das Top-Level-`await` in Modulen einschließt.

Ressourcen werden sequentiell und nicht gleichzeitig bereinigt: Der Rückgabewert der `[Symbol.asyncDispose]()`-Methode einer Ressource wird `await`et, bevor die `[Symbol.asyncDispose]()`-Methode der nächsten Ressource aufgerufen wird.

Einige Punkte, die man beachten sollte:

- `using` und `await using` sind _opt-in_. Wenn Sie Ihre Ressource mit `let`, `const` oder `var` deklarieren, erfolgt keine automatische Entsorgung, genauso wie bei anderen nicht entsorgbaren Werten.
- `using` und `await using` erfordern, dass die Ressource entsorgbar (oder asynchron entsorgbar) ist. Wenn die Ressource die `[Symbol.dispose]()`- oder `[Symbol.asyncDispose]()`-Methode nicht hat, erhalten Sie einen `TypeError` in der Deklarationszeile. Die Ressource kann jedoch `null` oder `undefined` sein, wodurch Sie Ressourcen bedingt erwerben können.
- Wie `const` können `using` und `await using`-Variablen nicht neu zugewiesen werden, obwohl die Eigenschaften der Objekte, die sie halten, geändert werden können. Die `[Symbol.dispose]()`/`[Symbol.asyncDispose]()`-Methode wird jedoch bereits zum Zeitpunkt der Deklaration gespeichert, sodass eine Änderung der Methode nach der Deklaration die Bereinigung nicht beeinflusst.
- Es gibt einige Fallstricke, wenn man Bereiche mit der Lebensdauer von Ressourcen vermischt. Siehe [`using`](/de/docs/Web/JavaScript/Reference/Statements/using#examples) für einige Beispiele.

## Die `DisposableStack`- und `AsyncDisposableStack`-Objekte

`using` und `await using` sind spezielle Syntaxen. Syntaxen sind bequem und verbergen viel Komplexität, aber manchmal müssen Sie Dinge manuell tun.

Für ein häufiges Beispiel: Was ist, wenn Sie die Ressource nicht am Ende _dieses_ Bereichs entsorgen wollen, sondern in einem _späteren_ Bereich? Betrachten Sie dies:

```js
let reader;
if (someCondition) {
  reader = stream.getReader();
} else {
  reader = stream.getReader({ mode: "byob" });
}
```

Wie gesagt, `using` ist wie `const`: es muss initialisiert werden und kann nicht neu zugewiesen werden, daher könnten Sie dies versuchen:

```js
if (someCondition) {
  using reader = stream.getReader();
} else {
  using reader = stream.getReader({ mode: "byob" });
}
```

Das bedeutet jedoch, dass gesamte Logik innerhalb des `if` oder `else` geschrieben werden muss, was zu viel Duplikation führt. Was wir tun wollen, ist, die Ressource in einem Bereich zu erwerben und zu registrieren, aber sie in einem anderen zu entsorgen. Wir können dafür eine {{jsxref("DisposableStack")}} verwenden, die ein Objekt ist, das eine Sammlung von entsorgbaren Ressourcen hält und selbst entsorgbar ist:

```js
{
  using disposer = new DisposableStack();
  let reader;
  if (someCondition) {
    reader = disposer.use(stream.getReader());
  } else {
    reader = disposer.use(stream.getReader({ mode: "byob" }));
  }
  // Do something with reader
  // Before scope exit, disposer is disposed, which disposes reader
}
```

Sie können eine Ressource haben, die das entsorgbare Protokoll noch nicht implementiert, sodass sie von `using` abgelehnt wird. In diesem Fall können Sie {{jsxref("DisposableStack/adopt", "adopt()")}} verwenden.

```js
{
  using disposer = new DisposableStack();
  // Suppose reader does not have the [Symbol.dispose]() method,
  // then it cannot be used with using.
  // However, we can manually pass a disposer function to disposer.adopt
  const reader = disposer.adopt(stream.getReader(), (reader) =>
    reader.releaseLock(),
  );
  // Do something with reader
  // Before scope exit, disposer is disposed, which disposes reader
}
```

Sie haben möglicherweise eine Entsorgungsaktion auszuführen, die nicht an irgendeine Ressource „gebunden“ ist. Vielleicht möchten Sie einfach nur eine Nachricht protokollieren, die besagt "Alle Datenbankverbindungen geschlossen", wenn mehrere Verbindungen gleichzeitig geöffnet sind. In diesem Fall können Sie {{jsxref("DisposableStack/defer", "defer()")}} verwenden.

```js
{
  using disposer = new DisposableStack();
  disposer.defer(() => console.log("All database connections closed"));
  const connection1 = disposer.use(openConnection());
  const connection2 = disposer.use(openConnection());
  // Do something with connection1 and connection2
  // Before scope exit, disposer is disposed, which first disposes connection1
  // and connection2 and then logs the message
}
```

Sie möchten möglicherweise eine _bedingte_ Entsorgung vornehmen – zum Beispiel nur beanspruchte Ressourcen entsorgen, wenn ein Fehler auftritt. In diesem Fall können Sie {{jsxref("DisposableStack/move", "move()")}} verwenden, um die Ressourcen zu bewahren, die sonst entsorgt würden.

```js
class MyResource {
  #resource1;
  #resource2;
  #disposables;
  constructor() {
    using disposer = new DisposableStack();
    this.#resource1 = disposer.use(getResource1());
    this.#resource2 = disposer.use(getResource2());
    // If we made it here, then there were no errors during construction and
    // we can safely move the disposables out of `disposer` and into `#disposables`.
    this.#disposables = disposer.move();
    // If construction failed, then `disposer` would be disposed before reaching
    // the line above, disposing `#resource1` and `#resource2`.
  }
  [Symbol.dispose]() {
    this.#disposables.dispose(); // Dispose `#resource2` and `#resource1`.
  }
}
```

`AsyncDisposableStack` ist wie `DisposableStack`, aber für die Verwendung mit asynchron entsorgbaren Ressourcen. Ihre `use()`-Methode erwartet einen asynchron entsorgbaren Wert, ihre `adopt()`-Methode erwartet eine asynchron Bereinigungsfunktion, und ihre `dispose()`-Methode erwartet einen asynchronen Rückruf. Sie bietet eine `[Symbol.asyncDispose]()`-Methode. Sie können ihr dennoch synchrone Ressourcen übergeben, wenn Sie eine Mischung aus sowohl synchronen als auch asynchronen haben.

Die Referenz für {{jsxref("DisposableStack")}} enthält mehr Beispiele und Details.

## Fehlerbehandlung

Ein Hauptanwendungsfall der Ressourcenverwaltungsfunktion besteht darin, sicherzustellen, dass Ressourcen immer entsorgt werden, selbst wenn ein Fehler auftritt. Untersuchen wir einige komplexe Fehlerbehandlungsszenarien.

Wir beginnen mit folgendem Code, der durch die Verwendung von `using` gegenüber Fehlern robust ist:

```js
async function readUntil(stream, text) {
  // Use `using` instead of `await using` because `releaseLock` is synchronous
  using reader = stream.getReader();
  let chunk = await reader.read();

  while (!chunk.done && chunk.value !== text) {
    console.log(chunk.toUpperCase());
    chunk = await reader.read();
  }
}
```

Angenommen, `chunk` ist `null`. Dann wird `toUpperCase()` eine `TypeError` auslösen, was dazu führt, dass die Funktion terminiert. Bevor die Funktion beendet wird, wird `stream[Symbol.dispose]()` aufgerufen, was den Lock auf dem Stream freigibt.

```js
const stream = new ReadableStream({
  start(controller) {
    controller.enqueue("a");
    controller.enqueue(null);
    controller.enqueue("b");
    controller.enqueue("c");
    controller.close();
  },
});

readUntil(stream, "b")
  .catch((e) => console.error(e)) // TypeError: chunk.toUpperCase is not a function
  .then(() => {
    const anotherReader = stream.getReader();
    // Successfully creates another reader
  });
```

`using` unterdrückt also keinen Fehler: Alle aufgetretenen Fehler werden immer noch geworfen, aber die Ressourcen werden direkt davor geschlossen. Was passiert jetzt, wenn die Ressourcenbereinigung selbst auch einen Fehler verursacht? Lassen Sie uns ein etwas konstruiertes Beispiel verwenden:

```js
class MyReader {
  [Symbol.dispose]() {
    throw new Error("Failed to release lock");
  }
}

function doSomething() {
  using reader = new MyReader();
  throw new Error("Failed to read");
}

try {
  doSomething();
} catch (e) {
  console.error(e); // SuppressedError: An error was suppressed during disposal
}
```

Es werden zwei Fehler im `doSomething()`-Aufruf generiert: Ein Fehler wird während `doSomething` geworfen, und ein Fehler wird während der Entsorgung von `reader` wegen des ersten Fehlers geworfen. Beide Fehler werden zusammen geworfen, sodass Sie einen {{jsxref("SuppressedError")}} gefangen haben. Dies ist ein besonderer Fehler, der zwei Fehler umhüllt: Die {{jsxref("SuppressedError/error", "error")}}-Eigenschaft enthält den späteren Fehler, und die {{jsxref("SuppressedError/suppressed", "suppressed")}}-Eigenschaft enthält den früheren Fehler, der durch den späteren Fehler „unterdrückt“ wird.

Wenn wir mehr als eine Ressource haben und _beide_ von ihnen einen Fehler während der Entsorgung verursachen (dies sollte extrem selten sein – es ist bereits selten, dass eine Entsorgung fehlschlägt!), dann wird jeder frühere Fehler durch den späteren Fehler unterdrückt, wodurch eine Kette unterdrückter Fehler entsteht.

```js
class MyReader {
  [Symbol.dispose]() {
    throw new Error("Failed to release lock on reader");
  }
}

class MyWriter {
  [Symbol.dispose]() {
    throw new Error("Failed to release lock on writer");
  }
}

function doSomething() {
  using reader = new MyReader();
  using writer = new MyWriter();
  throw new Error("Failed to read");
}

try {
  doSomething();
} catch (e) {
  console.error(e); // SuppressedError: An error was suppressed during disposal
  console.error(e.suppressed); // SuppressedError: An error was suppressed during disposal
  console.error(e.error); // Error: Failed to release lock on reader
  console.error(e.suppressed.suppressed); // Error: Failed to read
  console.error(e.suppressed.error); // Error: Failed to release lock on writer
}
```

- `reader` wird zuletzt freigegeben, sodass sein Fehler der neueste ist und daher alles andere unterdrückt: Er wird als `e.error` angezeigt.
- `writer` wird zuerst freigegeben, sodass sein Fehler später als der ursprüngliche Beendigungsfehler, aber früher als der `reader`-Fehler ist: Er wird als `e.suppressed.error` angezeigt.
- Der ursprüngliche Fehler bezüglich „Fehlgeschlagen zu lesen“ ist der früheste Fehler, sodass er als `e.suppressed.suppressed` angezeigt wird.

## Beispiele

### Automatisches Freigeben von Objekt-URLs

Im folgenden Beispiel erstellen wir eine [Objekt-URL](/de/docs/Web/URI/Reference/Schemes/blob) zu einem Blob (in einer realen Anwendung würde dieser Blob von irgendwoher abgerufen, wie z.B. einer Datei oder einer Fetch-Antwort), sodass wir den Blob als Datei herunterladen können. Um ein Ressourcenleck zu verhindern, müssen wir die Objekt-URL mit [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) freigeben, wenn sie nicht mehr benötigt wird (das heißt, wenn der Download erfolgreich gestartet wurde). Da die URL selbst nur ein String ist und deshalb das entsorgbare Protokoll nicht implementiert, können wir `url` nicht direkt mit `using` deklarieren; daher erstellen wir einen `DisposableStack`, der als Entsorger für `url` dient. Die Objekt-URL wird sofort zurückgezogen, wenn `disposer` den Bereich verlässt, was entweder der Fall ist, wenn `link.click()` fertig ist oder irgendwo ein Fehler auftritt.

```js
const downloadButton = document.getElementById("download-button");
const exampleBlob = new Blob(["example data"]);

downloadButton.addEventListener("click", () => {
  using disposer = new DisposableStack();
  const link = document.createElement("a");
  const url = disposer.adopt(
    URL.createObjectURL(exampleBlob),
    URL.revokeObjectURL,
  );

  link.href = url;
  link.download = "example.txt";
  link.click();
});
```

### Automatisches Abbrechen laufender Anfragen

Im folgenden Beispiel rufen wir eine Liste von Ressourcen gleichzeitig mit {{jsxref("Promise.all()")}} ab. `Promise.all()` schlägt fehl und lehnt das resultierende Versprechen ab, sobald eine Anfrage fehlgeschlagen ist; die anderen laufenden Anfragen laufen jedoch weiter, obwohl ihre Ergebnisse für das Programm nicht verfügbar sind. Um zu verhindern, dass diese verbleibenden Anfragen unnötig Ressourcen verbrauchen, müssen wir laufende Anfragen automatisch abbrechen, sobald `Promise.all()` abgeschlossen ist. Wir implementieren den Abbruch mit einem [`AbortController`](/de/docs/Web/API/AbortController) und übergeben dessen [`signal`](/de/docs/Web/API/AbortController/signal) an jeden `fetch()`-Aufruf. Wenn `Promise.all()` erfüllt wird, gibt die Funktion normal zurück und der Controller bricht ab, was harmlos ist, da keine laufende Anfrage zu stornieren ist; wenn `Promise.all()` abgelehnt wird und die Funktion auslöst, bricht der Controller ab und storniert alle laufenden Anfragen.

```js
async function getAllData(urls) {
  using disposer = new DisposableStack();
  const { signal } = disposer.adopt(new AbortController(), (controller) =>
    controller.abort(),
  );

  // Fetch all URLs in parallel
  // Automatically cancel any incomplete requests if any request fails
  const pages = await Promise.all(
    urls.map((url) =>
      fetch(url, { signal }).then((response) => {
        if (!response.ok)
          throw new Error(
            `Response error: ${response.status} - ${response.statusText}`,
          );
        return response.text();
      }),
    ),
  );
  return pages;
}
```

## Fallstricke

Die Ressourcenentsorgungssyntax bietet viele starke Fehlerhandhabungsgarantien, die sicherstellen, dass die Ressourcen immer aufgeräumt werden, egal was passiert, aber es gibt einige Fallstricke, denen Sie möglicherweise begegnen:

- Das Vergessen von `using` oder `await using`. Die Ressourcenverwaltungssyntax ist nur da, um Ihnen zu helfen, wenn Sie wissen, dass Sie sie benötigen, aber es gibt nichts, das Sie darauf hinweist, wenn Sie es vergessen! Leider gibt es keinen guten Weg, dies vorher zu verhindern, da es keine syntaktischen Hinweise gibt, dass etwas eine entsorgbare Ressource ist, und selbst für entsorgbare Ressourcen möchten Sie sie möglicherweise ohne automatische Entsorgung deklarieren. Wahrscheinlich benötigen Sie einen Typprüfer in Kombination mit einem Linter, um diese Probleme zu erkennen, wie [typescript-eslint](https://typescript-eslint.io/) ([welches noch plant, an diesem Feature zu arbeiten](https://github.com/typescript-eslint/typescript-eslint/issues/8255)).
- Verwendung nach der Freigabe. Im Allgemeinen stellt die `using`-Syntax sicher, dass eine Ressource freigegeben wird, wenn sie den Gültigkeitsbereich verlässt, aber es gibt viele Möglichkeiten, einen Wert über seine Bindungsvariable hinaus zu bewahren. JavaScript hat keinen Eigentumsmechanismus wie Rust, sodass Sie einen Alias deklarieren können, der `using` nicht verwendet, oder die Ressource in einem [closure](/de/docs/Web/JavaScript/Guide/Closures) bewahren können, usw. Die {{jsxref("Statements/using", "using")}}-Referenz enthält viele Beispiele für solche Fallstricke. Auch hier gibt es keinen guten Weg, dies in einem komplizierten Kontrollfluss richtig zu erkennen, daher müssen Sie vorsichtig sein.

Das Ressourcenmanagement-Feature ist kein Allheilmittel. Es ist definitiv eine Verbesserung gegenüber dem manuellen Aufrufen von Entsorgungsmethoden, aber es ist nicht klug genug, um alle Ressourcenmanagement-Fehler zu verhindern. Sie müssen immer noch vorsichtig sein und die Semantik der Ressourcen verstehen, die Sie verwenden.

## Fazit

Hier sind die Schlüsselkomponenten des Ressourcenmanagementsystems:

- {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}}-Deklarationen für die automatische Ressourcentsorgung.
- Die _entsorgbaren_ und _asynchron entsorgbaren_ Protokolle, die die Verwendung von {{jsxref("Symbol.dispose")}} und {{jsxref("Symbol.asyncDispose")}} erfordern, für Ressourcen, die diese implementieren.
- Die {{jsxref("DisposableStack")}}- und {{jsxref("AsyncDisposableStack")}}-Objekte für Fälle, in denen `using` und `await using` nicht geeignet sind.

Mit der richtigen Nutzung dieser APIs können Sie Systeme erstellen, die mit externen Ressourcen interagieren und stark und robust gegenüber allen Fehlerbedingungen sind, ohne viel Boilerplate-Code.

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Internationalization")}}

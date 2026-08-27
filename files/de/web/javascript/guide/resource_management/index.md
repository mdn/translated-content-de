---
title: Ressourcenverwaltung in JavaScript
slug: Web/JavaScript/Guide/Resource_management
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Internationalization")}}

Dieser Leitfaden beschreibt, wie Sie in JavaScript _Ressourcenverwaltung_ durchführen. Ressourcenverwaltung ist nicht genau dasselbe wie [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management), ein fortgeschritteneres Thema, das normalerweise automatisch von JavaScript gehandhabt wird. Ressourcenverwaltung bezieht sich auf die Verwaltung von Ressourcen, die _nicht_ automatisch von JavaScript bereinigt werden. Manchmal ist es in Ordnung, einige ungenutzte Objekte im Speicher zu haben, weil sie nicht in die Anwendungslogik eingreifen, aber Ressourcenlecks führen oft dazu, dass Dinge nicht funktionieren oder dass es zu einem übermäßigen Speicherverbrauch kommt. Daher ist dies kein optionales Feature zur Optimierung, sondern eine Kernfunktion, um korrekte Programme zu schreiben!

> [!NOTE]
> Während Speicherverwaltung und Ressourcenverwaltung zwei separate Themen sind, können Sie manchmal in das Speicherverwaltungssystem eingreifen, um Ressourcenverwaltung durchzuführen, als letztes Mittel. Wenn Sie beispielsweise ein JavaScript-Objekt haben, das einen Handle einer externen Ressource darstellt, können Sie einen {{jsxref("FinalizationRegistry")}} erstellen, um die Ressource zu bereinigen, wenn der Handle vom Garbage Collector aufgeräumt wird, da es definitiv keine Möglichkeit gibt, danach auf die Ressource zuzugreifen. Es gibt jedoch keine Garantie, dass der Finalizer ausgeführt wird. Es ist also keine gute Idee, sich für kritische Ressourcen darauf zu verlassen.

## Problem

Schauen wir uns zunächst einige Beispiele von Ressourcen an, die verwaltet werden müssen:

- **Dateihandles**: Ein Dateihandle wird verwendet, um Bytes in einer Datei zu lesen und zu schreiben. Wenn Sie damit fertig sind, müssen Sie [`fileHandle.close()`](https://nodejs.org/api/fs.html#filehandleclose) aufrufen, andernfalls bleibt die Datei offen, selbst wenn das JS-Objekt nicht mehr zugänglich ist. Wie in den verlinkten Node.js-Dokumenten steht:

  > Wenn ein `<FileHandle>` nicht mit der Methode `fileHandle.close()` geschlossen wird, versucht es, den Dateideskriptor automatisch zu schließen und gibt eine Prozesswarnung aus, die hilft, Speicherlecks zu verhindern. Bitte verlassen Sie sich nicht auf dieses Verhalten, da es unzuverlässig sein kann und die Datei möglicherweise nicht geschlossen wird. Schließen Sie stattdessen immer explizit `<FileHandle>`s. Node.js kann dieses Verhalten in der Zukunft ändern.

- **Netzwerkverbindungen**: Einige Verbindungen, wie [`WebSocket`](/de/docs/Web/API/WebSocket) und [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), müssen geschlossen werden, wenn keine Nachrichten mehr übermittelt werden. Andernfalls bleibt die Verbindung offen, und Verbindungspools sind oft sehr begrenzt in ihrer Größe.
- **Stream-Reader**: Wenn Sie nicht [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock) aufrufen, bleibt der Stream gesperrt und erlaubt keinem anderen Leser, ihn zu konsumieren.

Hier ist ein konkretes Beispiel mit einem lesbaren Stream:

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

Hier haben wir einen Stream, der drei Datenchunks ausgibt. Wir lesen vom Stream, bis wir den Buchstaben "b" finden. Wenn `readUntil` zurückkehrt, ist der Stream nur teilweise verbraucht, so dass wir in der Lage sein sollten, mit einem anderen Leser weiter daraus zu lesen. Wir haben jedoch vergessen, das Schloss zu lösen, so dass der Stream, obwohl `reader` nicht mehr verfügbar ist, immer noch gesperrt ist und wir keinen weiteren Leser erstellen können.

Die Lösung in diesem Fall ist einfach: Rufen Sie `reader.releaseLock()` am Ende von `readUntil` auf. Ein paar Probleme bleiben jedoch:

- Inkonsistenz: Verschiedene Ressourcen haben unterschiedliche Möglichkeiten, sie freizugeben. Zum Beispiel haben wir `close()`, `releaseLock()`, `disconnect()`, etc. Das Muster verallgemeinert sich nicht.
- Fehlerbehandlung: Was passiert, wenn der Aufruf von `reader.read()` fehlschlägt? Dann würde `readUntil` abbrechen und nie zum Aufruf von `reader.releaseLock()` gelangen. Wir können dies mithilfe von {{jsxref("Statements/try...catch", "try...finally")}} beheben:

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

  Aber Sie müssen daran denken, dies jedes Mal zu tun, wenn Sie eine wichtige Ressource freigeben müssen.

- Bereich: Im obigen Beispiel ist `reader` bereits geschlossen, wenn wir die `try...finally`-Anweisung verlassen, aber es ist weiterhin in seinem Bereich verfügbar. Dies bedeutet, dass Sie es versehentlich verwenden können, nachdem es geschlossen wurde.
- Mehrere Ressourcen: Wenn wir zwei Reader auf verschiedenen Streams haben, müssen wir daran denken, beide freizugeben. Dies ist ein respektabler Versuch, dies zu tun:

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

  Dies führt jedoch zu weiteren Fehlerbehandlungsproblemen. Wenn `stream2.getReader()` einen Fehler wirft, wird `reader1` nicht freigegeben; wenn `reader1.releaseLock()` einen Fehler wirft, dann wird `reader2` nicht freigegeben. Dies bedeutet, dass wir tatsächlich jedes Ressourcenakquisitions-Freigabepaar in einem eigenen `try...finally` umhüllen müssen:

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

Sie sehen, wie eine scheinbar harmlose Aufgabe, `releaseLock` aufzurufen, schnell zu verschachteltem Boilerplate-Code führen kann. Aus diesem Grund bietet JavaScript integrierte Sprachunterstützung für die Ressourcenverwaltung.

## Die `using`- und `await using`-Deklarationen

Die Lösung, die wir haben, sind zwei spezielle Arten der Variablendeklaration: {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}}. Sie ähneln `const`, geben die Ressource jedoch automatisch frei, wenn die Variable den Bereich verlässt, solange die Ressource _entsorgbar_ ist. Mit demselben Beispiel wie oben können wir es umschreiben als:

```js
{
  using reader1 = stream1.getReader();
  using reader2 = stream2.getReader();

  // do something with reader1 and reader2

  // Before we exit the block, reader1 and reader2 are automatically released
}
```

> [!NOTE]
> Zum Zeitpunkt des Schreibens implementiert [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) das entsorgbare Protokoll nicht. Dies ist ein hypothetisches Beispiel.

Beachten Sie zunächst die zusätzlichen geschweiften Klammern um den Code. Dies erzeugt einen neuen [Blockbereich](/de/docs/Web/JavaScript/Reference/Statements/block) für die `using`-Deklarationen. Mit `using` deklarierte Ressourcen werden automatisch freigegeben, wenn sie den Bereich von `using` verlassen, was in diesem Fall der Fall ist, wenn wir den Block verlassen, entweder weil alle Anweisungen ausgeführt wurden oder weil irgendwo ein Fehler oder `return`/`break`/`continue` aufgetreten ist.

Dies bedeutet, dass `using` nur in einem Bereich verwendet werden kann, der eine feste Lebensdauer hat—nämlich kann es nicht auf der obersten Ebene eines Skripts verwendet werden, da Variablen auf der obersten Ebene eines Skripts für alle zukünftigen Skripte auf der Seite im Bereich bleiben, was praktisch bedeutet, dass die Ressource nie freigegeben werden kann, wenn die Seite nie entladen wird. Sie können es jedoch auf oberster Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwenden, da der Modulbereich endet, wenn das Modul die Ausführung beendet.

Nun wissen wir, _wann_ `using` aufräumt. Aber _wie_ wird es gemacht? `using` erfordert, dass die Ressource das _entsorgbare_ Protokoll implementiert. Ein Objekt ist entsorgbar, wenn es die Methode [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose) hat. Diese Methode wird ohne Argumente aufgerufen, um die Bereinigung durchzuführen. Im Fall des Readers kann die `[Symbol.dispose]`-Eigenschaft beispielsweise ein einfacher Alias oder Wrapper von `releaseLock` sein:

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

Durch das entsorgbare Protokoll kann `using` alle Ressourcen auf konsistente Weise entsorgen, ohne zu verstehen, welcher Ressourcentyp es ist.

Jeder Bereich hat eine Liste von Ressourcen, die damit verbunden sind, in der Reihenfolge, in der sie deklariert wurden. Wenn der Bereich verlassen wird, werden die Ressourcen in umgekehrter Reihenfolge entsorgt, indem ihre Methode `[Symbol.dispose]()` aufgerufen wird. Beispielsweise wird im obigen Beispiel `reader1` vor `reader2` deklariert, daher wird `reader2` zuerst entsorgt, dann `reader1`. Fehler, die beim Versuch auftreten, eine Ressource zu entsorgen, verhindern nicht die Entsorgung anderer Ressourcen. Dies ist konsistent mit dem `try...finally`-Muster und respektiert mögliche Abhängigkeiten zwischen Ressourcen.

`await using` ist `using` sehr ähnlich. Die Syntax zeigt Ihnen, dass irgendwo ein `await` stattfindet—nicht bei der Deklaration der Ressource, sondern tatsächlich, wenn sie entsorgt wird. `await using` erfordert, dass die Ressource _asynchron entsorgbar_ ist, was bedeutet, dass sie eine Methode [`[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose) hat. Diese Methode wird ohne Argumente aufgerufen und gibt ein Versprechen zurück, das erfüllt wird, wenn die Bereinigung abgeschlossen ist. Dies ist nützlich, wenn die Bereinigung asynchron ist, wie `fileHandle.close()`, in welchem Fall das Ergebnis der Entsorgung nur asynchron bekannt sein kann.

```js
{
  await using fileHandle = open("file.txt", "w");
  await fileHandle.write("Hello");

  // fileHandle.close() is called and awaited
}
```

Da `await using` ein `await` erfordert, ist es nur in Kontexten zulässig, in denen `await` erlaubt ist, was `async`-Funktionen und `top-level await` in Modulen einschließt.

Ressourcen werden sequenziell, nicht gleichzeitig bereinigt: Der Rückgabewert der `[Symbol.asyncDispose]()`-Methode einer Ressource wird `await`et, bevor die `await using`-Methode der nächsten Ressource aufgerufen wird.

Einige Dinge zu beachten:

- `using` und `await using` sind _Opt-In_. Wenn Sie Ihre Ressource mit `let`, `const` oder `var` deklarieren, erfolgt keine automatische Entsorgung, genauso wie bei anderen nicht-entsorgbaren Werten.
- `using` und `await using` erfordern, dass die Ressource entsorgbar (oder asynchron entsorgbar) ist. Wenn die Ressource nicht über die Methode `[Symbol.dispose]()` oder `[Symbol.asyncDispose]()` verfügt, erhalten Sie einen `TypeError` bei der Deklarationszeile. Die Ressource kann `null` oder `undefined` sein, sodass Sie Ressourcen bedingt erwerben können.
- Wie bei `const` können `using`- und `await using`-Variablen nicht neu zugewiesen werden, obwohl die Eigenschaften der Objekte, die sie halten, geändert werden können. Die Methode `[Symbol.dispose]()`/`[Symbol.asyncDispose]()` wird jedoch bereits zum Zeitpunkt der Deklaration gespeichert, sodass die Änderung der Methode nach der Deklaration die Bereinigung nicht beeinflusst.
- Es gibt einige Fallstricke, wenn man Bereiche mit der Lebensdauer von Ressourcen vermischt. Siehe [`using`](/de/docs/Web/JavaScript/Reference/Statements/using#examples) für einige Beispiele.

## Die Objekte `DisposableStack` und `AsyncDisposableStack`

`using` und `await using` sind spezielle Syntaxelemente. Syntaxelemente sind bequem und verbergen viel Komplexität, aber manchmal müssen Sie Dinge manuell erledigen.

Ein gängiges Beispiel: Was, wenn Sie die Ressource nicht am Ende dieses Bereichs entsorgen möchten, sondern in einem späteren Bereich? Betrachten Sie dies:

```js
let reader;
if (someCondition) {
  reader = stream.getReader();
} else {
  reader = stream.getReader({ mode: "byob" });
}
```

Wie wir gesagt haben, ist `using` wie `const`: es muss initialisiert werden und kann nicht neu zugewiesen werden, sodass Sie dies versuchen könnten:

```js
if (someCondition) {
  using reader = stream.getReader();
} else {
  using reader = stream.getReader({ mode: "byob" });
}
```

Dies bedeutet jedoch, dass die gesamte Logik innerhalb des `if` oder `else` geschrieben werden muss, was zu viel Duplizierung führt. Was wir tun möchten, ist, die Ressource in einem Bereich zu erwerben und zu registrieren, aber in einem anderen zu entsorgen. Dafür können wir einen {{jsxref("DisposableStack")}} verwenden, ein Objekt, das eine Sammlung von entsorgbaren Ressourcen enthält und selbst entsorgbar ist:

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

Sie können eine Entsorgungsaktion durchführen, die nicht an eine bestimmte Ressource "gebunden" ist. Vielleicht möchten Sie nur eine Nachricht protokollieren, die besagt, dass "Alle Datenbankverbindungen geschlossen" wurden, wenn mehrere Verbindungen gleichzeitig geöffnet sind. In diesem Fall können Sie {{jsxref("DisposableStack/defer", "defer()")}} verwenden.

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

Vielleicht möchten Sie eine _bedingte_ Entsorgung durchführen—zum Beispiel nur beanspruchte Ressourcen entsorgen, wenn ein Fehler aufgetreten ist. In diesem Fall können Sie {{jsxref("DisposableStack/move", "move()")}} verwenden, um die Ressourcen zu erhalten, die ansonsten entsorgt würden.

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

`AsyncDisposableStack` ist wie `DisposableStack`, aber für die Verwendung mit asynchron entsorgbaren Ressourcen. Seine `use()`-Methode erwartet eine asynchron entsorgbare Ressource, seine `adopt()`-Methode erwartet eine asynchrone Bereinigungsfunktion und seine `dispose()`-Methode erwartet einen asynchronen Rückruf. Es bietet eine `[Symbol.asyncDispose]()`-Methode. Sie können ihm immer noch synchrone Ressourcen übergeben, wenn Sie eine Mischung aus synchronen und asynchronen Ressourcen haben.

Die Referenz für {{jsxref("DisposableStack")}} enthält weitere Beispiele und Details.

## Fehlerbehandlung

Ein Hauptanwendungsfall des Ressourcenmanagement-Features ist sicherzustellen, dass Ressourcen immer entsorgt werden, auch wenn ein Fehler auftritt. Lassen Sie uns einige komplexe Szenarien zur Fehlerbehandlung untersuchen.

Wir beginnen mit dem folgenden Code, der durch die Verwendung von `using` robust gegenüber Fehlern ist:

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

Angenommen, `chunk` stellt sich als `null` heraus. Dann wird `!chunk.done` einen `TypeError` werfen, was dazu führt, dass die Funktion beendet wird. Bevor die Funktion jedoch verlässt, wird `stream[Symbol.dispose]()` aufgerufen, wodurch das Schloss auf dem Stream freigegeben wird.

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

So unterdrückt `using` keine Fehler: Alle auftretenden Fehler werden weiterhin geworfen, aber die Ressourcen werden unmittelbar davor geschlossen. Was passiert nun, wenn die Ressourcenbereinigung selbst auch einen Fehler wirft? Lassen Sie uns ein konstruiertes Beispiel verwenden:

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

Es gibt zwei Fehler, die beim Aufruf von `doSomething()` generiert werden: einen Fehler, der während `doSomething` geworfen wird, und einen Fehler, der während der Entsorgung von `reader` wegen des ersten Fehlers geworfen wird. Beide Fehler werden zusammen geworfen, sodass Sie einen {{jsxref("SuppressedError")}} einfangen. Dies ist ein spezieller Fehler, der zwei Fehler umhüllt: Die Eigenschaft {{jsxref("SuppressedError/error", "error")}} enthält den späteren Fehler und die Eigenschaft {{jsxref("SuppressedError/suppressed", "suppressed")}} enthält den früheren Fehler, der durch den späteren Fehler "unterdrückt" wurde.

Wenn wir mehr als eine Ressource haben und _beide_ von ihnen einen Fehler während der Entsorgung werfen (was äußerst selten sein sollte—es ist bereits selten, dass eine Entsorgung fehlschlägt!), dann wird jeder frühere Fehler durch den späteren Fehler unterdrückt, was eine Kette unterdrückter Fehler bildet.

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

- Der `reader` wird zuletzt freigegeben, daher ist sein Fehler der neueste und unterdrückt daher alles andere: Er erscheint als `e.error`.
- Der `writer` wird zuerst freigegeben, daher ist sein Fehler später als der ursprüngliche austretende Fehler, aber früher als der `reader`-Fehler: Er erscheint als `e.suppressed.error`.
- Der ursprüngliche Fehler "Failed to read" ist der früheste Fehler, daher erscheint er als `e.suppressed.suppressed`.

## Beispiele

### Automatische Freigabe von Objekt-URLs

Im folgenden Beispiel erstellen wir eine [Objekt-URL](/de/docs/Web/URI/Reference/Schemes/blob) zu einem Blob (in einer realen Anwendung würde dieses Blob von irgendwoher abgerufen, z. B. aus einer Datei oder einer Fetch-Antwort), damit wir das Blob als Datei herunterladen können. Um ein Ressourcenleck zu vermeiden, müssen wir die Objekt-URL mit [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) freigeben, wenn sie nicht mehr benötigt wird (d.h. wenn der Download erfolgreich gestartet wurde). Da die URL selbst nur ein String ist und daher das entsorgbare Protokoll nicht implementiert, können wir `url` nicht direkt mit `using` deklarieren; daher erstellen wir einen `DisposableStack`, um als Entsorger für `url` zu dienen. Die Objekt-URL wird freigegeben, sobald `disposer` den Bereich verlässt, was dann der Fall ist, wenn entweder `link.click()` beendet ist oder irgendwo ein Fehler auftritt.

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

### Automatische Stornierung laufender Anfragen

Im folgenden Beispiel rufen wir eine Liste von Ressourcen gleichzeitig unter Verwendung von {{jsxref("Promise.all()")}} ab. `Promise.all()` schlägt fehl und lehnt das resultierende Versprechen ab, sobald eine Anfrage fehlgeschlagen ist; jedoch laufen die anderen ausstehenden Anfragen weiter, obwohl ihre Ergebnisse für das Programm unzugänglich sind. Um zu vermeiden, dass diese verbleibenden Anfragen unnötig Ressourcen verbrauchen, müssen wir automatisch laufende Anfragen stornieren, wann immer `Promise.all()` abgeschlossen wird. Wir implementieren die Stornierung mit einem [`AbortController`](/de/docs/Web/API/AbortController) und übergeben sein [`signal`](/de/docs/Web/API/AbortController/signal) an jeden `fetch()`-Aufruf. Wenn `Promise.all()` erfüllt wird, wird die Funktion normal zurückgegeben und der Controller abgebrochen, was harmlos ist, da keine ausstehende Anfrage zum Abbrechen vorhanden ist; wenn `Promise.all()` abgelehnt wird und die Funktion einen Fehler wirft, wird der Controller abgebrochen und alle ausstehenden Anfragen werden storniert.

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

Die Ressourcensyntax bietet viele starke Fehlerbehandlungsgarantien, die sicherstellen, dass die Ressourcen immer bereinigt werden, egal was passiert. Aber es gibt einige Fallstricke, denen Sie möglicherweise begegnen:

- Vergessen, `using` oder `await using` zu verwenden. Die Ressourcenverwaltungssyntax ist nur da, um Ihnen zu helfen, wenn Sie wissen, dass Sie sie benötigen, aber nichts ruft Sie zurück, wenn Sie vergessen, sie zu verwenden! Leider gibt es keine gute Möglichkeit, dies im Voraus zu verhindern, da es keine syntaktischen Hinweise darauf gibt, dass etwas eine entsorgbare Ressource ist, und selbst für entsorgbare Ressourcen möchten Sie sie möglicherweise ohne automatische Entsorgung deklarieren. Sie benötigen wahrscheinlich einen Type-Checker kombiniert mit einem Linter, um diese Probleme zu erkennen, wie z. B. [typescript-eslint](https://typescript-eslint.io/) ([die immer noch an dieser Funktion arbeiten](https://github.com/typescript-eslint/typescript-eslint/issues/8255)).
- Verwendung nach der Freigabe. Im Allgemeinen stellt die `using`-Syntax sicher, dass eine Ressource freigegeben wird, wenn sie den Bereich verlässt, aber es gibt viele Möglichkeiten, einen Wert über seine Bindungsvariable hinaus zu erhalten. JavaScript verfügt nicht über einen Mechanismus für Eigentum wie Rust, sodass Sie einen Alias deklarieren können, der `using` nicht verwendet, oder die Ressource in einem [Closure](/de/docs/Web/JavaScript/Guide/Closures) aufbewahren können, usw. Die {{jsxref("Statements/using", "using")}}-Referenz enthält viele Beispiele für solche Fallstricke. Auch hier gibt es keine gute Möglichkeit, dies in einem komplizierten Kontrollfluss richtig zu erkennen, sodass Sie vorsichtig sein müssen.

Das Ressourcenmanagement-Feature ist kein Allheilmittel. Es ist definitiv eine Verbesserung gegenüber dem manuellen Aufrufen der Entsorgungsmethoden, aber es ist nicht klug genug, um alle Ressourcenverwaltungsfehler zu verhindern. Sie müssen immer noch vorsichtig sein und die Semantik der Ressourcen verstehen, die Sie verwenden.

## Fazit

Hier sind die Hauptkomponenten des Ressourcenmanagementsystems:

- Die Deklarationen {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}} für die automatische Ressourcenentsorgung.
- Die _entsorgbaren_ und _asynchron entsorgbaren_ Protokolle, mit Verwendung von {{jsxref("Symbol.dispose")}} bzw. {{jsxref("Symbol.asyncDispose")}}, die von Ressourcen implementiert werden müssen.
- Die Objekte {{jsxref("DisposableStack")}} und {{jsxref("AsyncDisposableStack")}} für Fälle, in denen `using` und `await using` nicht geeignet sind.

Durch den ordnungsgemäßen Gebrauch dieser APIs können Sie Systeme erstellen, die mit externen Ressourcen interagieren und unter allen Fehlerbedingungen stark und robust bleiben, ohne viel Boilerplate-Code.

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Internationalization")}}

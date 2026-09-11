---
title: Ressourcenverwaltung in JavaScript
slug: Web/JavaScript/Guide/Resource_management
l10n:
  sourceCommit: 4b111fc009d4844d407dd1b5c791c07b0fb326fc
---

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Internationalization")}}

Dieser Leitfaden erläutert, wie _Ressourcenverwaltung_ in JavaScript durchgeführt wird. Ressourcenverwaltung ist nicht genau dasselbe wie [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management), die ein fortgeschritteneres Thema ist und üblicherweise automatisch von JavaScript gehandhabt wird. Bei der Ressourcenverwaltung geht es um die Verwaltung von Ressourcen, die _nicht_ automatisch von JavaScript bereinigt werden. Manchmal ist es in Ordnung, einige ungenutzte Objekte im Speicher zu haben, da sie die Anwendungslogik nicht beeinträchtigen, aber Ressourcenlecks führen oft dazu, dass Dinge nicht funktionieren oder sehr viel überschüssiger Speicher verwendet wird. Daher handelt es sich nicht um eine optionale Optimierungsfunktion, sondern um eine Kernfunktion zum Schreiben korrekter Programme!

> [!NOTE]
> Obwohl Speicherverwaltung und Ressourcenverwaltung zwei getrennte Themen sind, können Sie sich manchmal als letzten Ausweg in das Speicherverwaltungssystem einklinken, um Ressourcenverwaltung durchzuführen. Wenn Sie beispielsweise ein JavaScript-Objekt haben, das ein Handle für eine externe Ressource darstellt, können Sie eine {{jsxref("FinalizationRegistry")}} erstellen, um die Ressource zu bereinigen, wenn das Handle durch die Garbage Collection entfernt wird, da danach definitiv keine Möglichkeit mehr besteht, auf die Ressource zuzugreifen. Es gibt jedoch keine Garantie, dass der Finalizer ausgeführt wird; daher ist es keine gute Idee, sich bei kritischen Ressourcen darauf zu verlassen.

## Problem

Sehen wir uns zunächst einige Beispiele für Ressourcen an, die verwaltet werden müssen:

- **Datei-Handles**: Ein Datei-Handle wird verwendet, um Bytes in einer Datei zu lesen und zu schreiben. Wenn Sie damit fertig sind, müssen Sie [`fileHandle.close()`](https://nodejs.org/api/fs.html#filehandleclose) aufrufen; andernfalls bleibt die Datei geöffnet, selbst wenn das JS-Objekt nicht mehr zugänglich ist. Wie die verlinkte Node.js-Dokumentation sagt:

  > Wenn ein `<FileHandle>` nicht mit der Methode `fileHandle.close()` geschlossen wird, wird versucht, den Dateideskriptor automatisch zu schließen und eine Prozesswarnung auszugeben, um Speicherlecks zu verhindern. Bitte verlassen Sie sich nicht auf dieses Verhalten, da es unzuverlässig sein kann und die Datei möglicherweise nicht geschlossen wird. Schließen Sie `<FileHandle>`s stattdessen immer ausdrücklich. Node.js kann dieses Verhalten in Zukunft ändern.

- **Netzwerkverbindungen**: Einige Verbindungen, etwa [`WebSocket`](/de/docs/Web/API/WebSocket) und [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), müssen geschlossen werden, wenn keine Nachrichten übertragen werden. Andernfalls bleibt die Verbindung geöffnet, und Verbindungspools sind häufig stark in ihrer Größe begrenzt.
- **Stream-Reader**: Wenn Sie [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock) nicht aufrufen, wird der Stream gesperrt und lässt nicht zu, dass ein anderer Reader ihn konsumiert.

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

Hier haben wir einen Stream, der drei Daten-Chunks ausgibt. Wir lesen aus dem Stream, bis wir den Buchstaben „b“ finden. Wenn `readUntil` zurückkehrt, ist der Stream nur teilweise konsumiert; daher sollten wir mit einem anderen Reader weiter daraus lesen können. Wir haben jedoch vergessen, die Sperre freizugeben. Obwohl `reader` nicht mehr verfügbar ist, ist der Stream weiterhin gesperrt, und wir können keinen weiteren Reader erstellen.

Die Lösung ist in diesem Fall einfach: Rufen Sie am Ende von `readUntil` `reader.releaseLock()` auf. Es bleiben jedoch einige Probleme:

- Inkonsistenz: Verschiedene Ressourcen haben unterschiedliche Möglichkeiten, sie freizugeben. Beispielsweise gibt es `close()`, `releaseLock()`, `disconnect()` usw. Das Muster lässt sich nicht verallgemeinern.
- Fehlerbehandlung: Was geschieht, wenn der Aufruf von `reader.read()` fehlschlägt? Dann würde `readUntil` beendet und käme nie zum Aufruf von `reader.releaseLock()`. Wir können dies mit {{jsxref("Statements/try...catch", "try...finally")}} beheben:

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

  Sie müssen jedoch daran denken, dies jedes Mal zu tun, wenn Sie eine wichtige Ressource freigeben müssen.

- Gültigkeitsbereich: Im obigen Beispiel ist `reader` bereits geschlossen, wenn wir die `try...finally`-Anweisung verlassen, bleibt aber in seinem Gültigkeitsbereich verfügbar. Das bedeutet, dass Sie ihn möglicherweise versehentlich verwenden, nachdem er geschlossen wurde.
- Mehrere Ressourcen: Wenn wir zwei Reader für unterschiedliche Streams haben, müssen wir daran denken, beide freizugeben. Dies ist ein respektabler Versuch, das zu tun:

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

  Dies führt jedoch zu weiteren Problemen bei der Fehlerbehandlung. Wenn `stream2.getReader()` eine Exception auslöst, wird `reader1` nicht freigegeben; wenn `reader1.releaseLock()` einen Fehler auslöst, wird `reader2` nicht freigegeben. Das bedeutet, dass wir jedes Paar aus Ressourcenerwerb und -freigabe tatsächlich in ein eigenes `try...finally` einschließen müssen:

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

Sie sehen, wie eine scheinbar harmlose Aufgabe wie der Aufruf von `releaseLock` schnell zu verschachteltem Boilerplate-Code führen kann. Deshalb stellt JavaScript integrierte Sprachunterstützung für die Ressourcenverwaltung bereit.

## Die Deklarationen `using` und `await using`

Die verfügbare Lösung besteht aus zwei besonderen Arten von Variablendeklarationen: {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}}. Sie ähneln `const`, geben die Ressource jedoch automatisch frei, wenn die Variable ihren Gültigkeitsbereich verlässt, solange die Ressource _disposable_ ist. Mit demselben Beispiel wie oben können wir es wie folgt umschreiben:

```js
{
  using reader1 = stream1.getReader();
  using reader2 = stream2.getReader();

  // do something with reader1 and reader2

  // Before we exit the block, reader1 and reader2 are automatically released
}
```

> [!NOTE]
> Zum Zeitpunkt der Erstellung dieses Dokuments implementiert [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) nicht das Disposable-Protokoll. Dies ist ein hypothetisches Beispiel.

Beachten Sie zunächst die zusätzlichen geschweiften Klammern um den Code. Dadurch wird ein neuer [Block-Gültigkeitsbereich](/de/docs/Web/JavaScript/Reference/Statements/block) für die `using`-Deklarationen erstellt. Mit `using` deklarierte Ressourcen werden automatisch freigegeben, wenn sie den Gültigkeitsbereich von `using` verlassen, was in diesem Fall immer geschieht, wenn wir den Block verlassen – entweder weil alle Anweisungen ausgeführt wurden oder weil irgendwo ein Fehler oder `return`/`break`/`continue` aufgetreten ist.

Das bedeutet, dass `using` nur in einem Gültigkeitsbereich mit klarer Lebensdauer verwendet werden kann. Insbesondere kann es nicht auf der obersten Ebene eines Skripts verwendet werden, da Variablen auf der obersten Ebene eines Skripts für alle zukünftigen Skripte auf der Seite im Gültigkeitsbereich liegen. Praktisch bedeutet dies, dass die Ressource nie freigegeben werden kann, wenn die Seite nie entladen wird. Sie können es jedoch auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwenden, weil der Modul-Gültigkeitsbereich endet, wenn das Modul seine Ausführung abschließt.

Jetzt wissen wir, _wann_ `using` die Bereinigung durchführt. Aber _wie_ geschieht sie? `using` verlangt, dass die Ressource das _disposable_-Protokoll implementiert. Ein Objekt ist disposable, wenn es die Methode [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose) besitzt. Diese Methode wird ohne Argumente aufgerufen, um die Bereinigung durchzuführen. Im Fall des Readers kann die Eigenschaft `[Symbol.dispose]` beispielsweise ein einfacher Alias oder Wrapper von `releaseLock` sein:

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

Durch das Disposable-Protokoll kann `using` alle Ressourcen auf konsistente Weise entsorgen, ohne verstehen zu müssen, um welchen Ressourcentyp es sich handelt.

Jeder Gültigkeitsbereich hat eine Liste von Ressourcen, die ihm zugeordnet sind, in der Reihenfolge ihrer Deklaration. Wenn der Gültigkeitsbereich verlassen wird, werden die Ressourcen in umgekehrter Reihenfolge entsorgt, indem ihre Methode `[Symbol.dispose]()` aufgerufen wird. Im obigen Beispiel wird `reader1` beispielsweise vor `reader2` deklariert, daher wird zuerst `reader2` und anschließend `reader1` entsorgt. Fehler, die beim Versuch auftreten, eine Ressource zu entsorgen, verhindern nicht die Entsorgung anderer Ressourcen. Dies stimmt mit dem Muster `try...finally` überein und berücksichtigt mögliche Abhängigkeiten zwischen Ressourcen.

`await using` ist `using` sehr ähnlich. Die Syntax zeigt an, dass irgendwo ein `await` erfolgt – nicht bei der Deklaration der Ressource, sondern tatsächlich bei ihrer Entsorgung. `await using` verlangt, dass die Ressource _async disposable_ ist, was bedeutet, dass sie eine Methode [`[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose) besitzt. Diese Methode wird ohne Argumente aufgerufen und gibt ein Promise zurück, das aufgelöst wird, wenn die Bereinigung abgeschlossen ist. Dies ist nützlich, wenn die Bereinigung asynchron ist, etwa `fileHandle.close()`, wobei das Ergebnis der Entsorgung nur asynchron bekannt sein kann.

```js
{
  await using fileHandle = open("file.txt", "w");
  await fileHandle.write("Hello");

  // fileHandle.close() is called and awaited
}
```

Da `await using` ein `await` erfordert, ist es nur in Kontexten zulässig, in denen auch `await` zulässig ist, einschließlich innerhalb von `async`-Funktionen und bei Top-Level-`await` in Modulen.

Ressourcen werden sequenziell und nicht gleichzeitig bereinigt: Der Rückgabewert der Methode `[Symbol.asyncDispose]()` einer Ressource wird mittels `await` abgewartet, bevor die Methode `[Symbol.asyncDispose]()` der nächsten Ressource aufgerufen wird.

Einige Hinweise:

- `using` und `await using` sind _Opt-in_. Wenn Sie Ihre Ressource mit `let`, `const` oder `var` deklarieren, erfolgt keine automatische Entsorgung, genau wie bei allen anderen nicht disposable Werten.
- `using` und `await using` verlangen, dass die Ressource disposable beziehungsweise async disposable ist. Wenn die Ressource nicht die jeweilige Methode `[Symbol.dispose]()` oder `[Symbol.asyncDispose]()` besitzt, erhalten Sie in der Deklarationszeile einen `TypeError`. Die Ressource kann jedoch `null` oder `undefined` sein, wodurch Sie Ressourcen bedingt erwerben können.
- Wie `const` können Variablen von `using` und `await using` nicht neu zugewiesen werden, obwohl die Eigenschaften der Objekte, die sie enthalten, geändert werden können. Die Methode `[Symbol.dispose]()`/`[Symbol.asyncDispose]()` wird jedoch bereits zum Zeitpunkt der Deklaration gespeichert, sodass eine Änderung der Methode nach der Deklaration die Bereinigung nicht beeinflusst.
- Es gibt einige Fallstricke, wenn Gültigkeitsbereiche mit der Lebensdauer von Ressourcen gleichgesetzt werden. Einige Beispiele finden Sie unter [`using`](/de/docs/Web/JavaScript/Reference/Statements/using#examples).

## Die Objekte `DisposableStack` und `AsyncDisposableStack`

`using` und `await using` sind spezielle Syntaxformen. Syntaxformen sind praktisch und verbergen viel Komplexität, aber manchmal müssen Sie Dinge manuell erledigen.

Ein häufiges Beispiel: Was ist, wenn Sie die Ressource nicht am Ende _dieses_ Gültigkeitsbereichs entsorgen möchten, sondern in einem _späteren_ Gültigkeitsbereich? Betrachten Sie Folgendes:

```js
let reader;
if (someCondition) {
  reader = stream.getReader();
} else {
  reader = stream.getReader({ mode: "byob" });
}
```

Wie bereits erwähnt, ist `using` wie `const`: Es muss initialisiert werden und kann nicht neu zugewiesen werden. Daher könnten Sie Folgendes versuchen:

```js
if (someCondition) {
  using reader = stream.getReader();
} else {
  using reader = stream.getReader({ mode: "byob" });
}
```

Das bedeutet jedoch, dass die gesamte Logik innerhalb von `if` oder `else` geschrieben werden muss, was viel Duplizierung verursacht. Wir möchten die Ressource in einem Gültigkeitsbereich erwerben und registrieren, aber in einem anderen entsorgen. Dafür können wir einen {{jsxref("DisposableStack")}} verwenden, ein Objekt, das eine Sammlung von disposable Ressourcen enthält und selbst disposable ist:

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

Möglicherweise haben Sie eine Ressource, die das Disposable-Protokoll noch nicht implementiert und daher von `using` abgelehnt wird. In diesem Fall können Sie {{jsxref("DisposableStack/adopt", "adopt()")}} verwenden.

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

Möglicherweise müssen Sie eine Entsorgungsaktion durchführen, die nicht an eine bestimmte Ressource „gebunden“ ist. Vielleicht möchten Sie einfach eine Meldung wie „All database connections closed“ protokollieren, wenn mehrere Verbindungen gleichzeitig geöffnet sind. In diesem Fall können Sie {{jsxref("DisposableStack/defer", "defer()")}} verwenden.

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

Möglicherweise möchten Sie eine _bedingte_ Entsorgung durchführen – beispielsweise beanspruchte Ressourcen nur dann entsorgen, wenn ein Fehler aufgetreten ist. In diesem Fall können Sie {{jsxref("DisposableStack/move", "move()")}} verwenden, um Ressourcen zu bewahren, die andernfalls entsorgt würden.

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

`AsyncDisposableStack` ist wie `DisposableStack`, jedoch zur Verwendung mit async disposable Ressourcen. Seine Methode `use()` erwartet eine async disposable Ressource, seine Methode `adopt()` erwartet eine asynchrone Bereinigungsfunktion und seine Methode `dispose()` erwartet einen asynchronen Callback. Es stellt eine Methode `[Symbol.asyncDispose]()` bereit. Sie können ihm weiterhin synchrone Ressourcen übergeben, falls Sie eine Mischung aus synchronen und asynchronen Ressourcen haben.

Die Referenz für {{jsxref("DisposableStack")}} enthält weitere Beispiele und Details.

## Fehlerbehandlung

Ein wichtiger Anwendungsfall der Funktion zur Ressourcenverwaltung besteht darin, sicherzustellen, dass Ressourcen auch dann immer entsorgt werden, wenn ein Fehler auftritt. Untersuchen wir einige komplexe Szenarien der Fehlerbehandlung.

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

Angenommen, `chunk` ist `null`. Dann löst `!chunk.done` einen `TypeError` aus, wodurch die Funktion beendet wird. Bevor die Funktion endet, wird `stream[Symbol.dispose]()` aufgerufen, wodurch die Sperre für den Stream freigegeben wird.

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

`using` verschluckt also keine Fehler: Alle auftretenden Fehler werden weiterhin ausgelöst, aber die Ressourcen werden unmittelbar davor geschlossen. Was geschieht nun, wenn die Bereinigung der Ressource selbst ebenfalls einen Fehler auslöst? Verwenden wir ein konstruiertes Beispiel:

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

Beim Aufruf von `doSomething()` werden zwei Fehler erzeugt: ein während `doSomething` ausgelöster Fehler und ein während der Entsorgung von `reader` aufgrund des ersten Fehlers ausgelöster Fehler. Beide Fehler werden zusammen ausgelöst; daher ist das, was Sie abfangen, ein {{jsxref("SuppressedError")}}. Dies ist ein spezieller Fehler, der zwei Fehler umschließt: Die Eigenschaft {{jsxref("SuppressedError/error", "error")}} enthält den späteren Fehler und die Eigenschaft {{jsxref("SuppressedError/suppressed", "suppressed")}} enthält den früheren Fehler, der durch den späteren Fehler „unterdrückt“ wird.

Wenn wir mehr als eine Ressource haben und _beide_ während der Entsorgung einen Fehler auslösen – dies sollte äußerst selten sein, denn bereits das Fehlschlagen einer Entsorgung ist selten! –, wird jeder frühere Fehler durch den späteren Fehler unterdrückt, wodurch eine Kette unterdrückter Fehler entsteht.

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

- Der `reader` wird zuletzt freigegeben. Sein Fehler ist daher der späteste und unterdrückt alles andere: Er erscheint als `e.error`.
- Der `writer` wird zuerst freigegeben. Sein Fehler tritt später auf als der ursprüngliche Fehler beim Verlassen, aber früher als der Fehler von `reader`: Er erscheint als `e.suppressed.error`.
- Der ursprüngliche Fehler über „Failed to read“ ist der früheste Fehler und erscheint daher als `e.suppressed.suppressed`.

## Beispiele

### Objekt-URLs automatisch freigeben

Im folgenden Beispiel erstellen wir eine [Objekt-URL](/de/docs/Web/URI/Reference/Schemes/blob) für ein Blob (in einer echten Anwendung würde dieses Blob von irgendwoher abgerufen werden, etwa aus einer Datei oder einer Fetch-Antwort), damit wir das Blob als Datei herunterladen können. Um ein Ressourcenleck zu verhindern, müssen wir die Objekt-URL mit [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) freigeben, wenn sie nicht mehr benötigt wird, also wenn der Download erfolgreich gestartet wurde. Da die URL selbst nur ein String ist und daher das Disposable-Protokoll nicht implementiert, können wir `url` nicht direkt mit `using` deklarieren. Stattdessen erstellen wir einen `DisposableStack`, der als Entsorger für `url` dient. Die Objekt-URL wird widerrufen, sobald `disposer` seinen Gültigkeitsbereich verlässt, also wenn entweder `link.click()` abgeschlossen wird oder irgendwo ein Fehler auftritt.

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

### Laufende Anfragen automatisch abbrechen

Im folgenden Beispiel [rufen wir ab](/de/docs/Web/API/Window/fetch) eine Liste von Ressourcen gleichzeitig mit {{jsxref("Promise.all()")}} ab. `Promise.all()` schlägt fehl und lehnt das resultierende Promise ab, sobald eine Anfrage fehlgeschlagen ist. Die anderen ausstehenden Anfragen werden jedoch weiterhin ausgeführt, obwohl ihre Ergebnisse für das Programm nicht zugänglich sind. Um zu vermeiden, dass diese verbleibenden Anfragen unnötig Ressourcen verbrauchen, müssen wir laufende Anfragen automatisch abbrechen, sobald `Promise.all()` abgeschlossen ist. Wir implementieren den Abbruch mit einem [`AbortController`](/de/docs/Web/API/AbortController) und übergeben dessen [`signal`](/de/docs/Web/API/AbortController/signal) an jeden `fetch()`-Aufruf. Wenn `Promise.all()` erfüllt wird, kehrt die Funktion normal zurück und der Controller bricht ab, was harmlos ist, da keine ausstehende Anfrage abgebrochen werden muss. Wenn `Promise.all()` abgelehnt wird und die Funktion einen Fehler auslöst, bricht der Controller ab und beendet alle ausstehenden Anfragen.

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

Die Syntax zur Ressourcenentsorgung bietet viele starke Fehlerbehandlungsgarantien, die sicherstellen, dass Ressourcen unabhängig davon, was passiert, immer bereinigt werden. Dennoch können einige Fallstricke auftreten:

- Vergessen, `using` oder `await using` zu verwenden. Die Syntax zur Ressourcenverwaltung hilft Ihnen nur, wenn Sie wissen, dass Sie sie benötigen, aber nichts weist Sie darauf hin, wenn Sie vergessen, sie zu verwenden! Leider gibt es keine gute Möglichkeit, dies im Voraus zu verhindern, da es keine syntaktischen Hinweise darauf gibt, dass etwas eine disposable Ressource ist, und Sie selbst bei disposable Ressourcen diese möglicherweise ohne automatische Entsorgung deklarieren möchten. Sie benötigen wahrscheinlich eine Typprüfung in Kombination mit einem Linter, um diese Probleme zu erkennen, etwa [typescript-eslint](https://typescript-eslint.io/) ([das weiterhin plant, an dieser Funktion zu arbeiten](https://github.com/typescript-eslint/typescript-eslint/issues/8255)).
- Verwendung nach Freigabe. Im Allgemeinen stellt die Syntax `using` sicher, dass eine Ressource freigegeben wird, wenn sie ihren Gültigkeitsbereich verlässt. Es gibt jedoch viele Möglichkeiten, einen Wert über seine Bindungsvariable hinaus beizubehalten. JavaScript verfügt nicht über einen Ownership-Mechanismus wie Rust, daher können Sie einen Alias deklarieren, der `using` nicht verwendet, oder die Ressource in einer [Closure](/de/docs/Web/JavaScript/Guide/Closures) beibehalten usw. Die Referenz {{jsxref("Statements/using", "using")}} enthält viele Beispiele für solche Fallstricke. Auch hier gibt es keine gute Möglichkeit, dies in einem komplizierten Kontrollfluss zuverlässig zu erkennen; Sie müssen daher vorsichtig sein.

Die Funktion zur Ressourcenverwaltung ist kein Allheilmittel. Sie ist definitiv eine Verbesserung gegenüber dem manuellen Aufruf der Entsorgungsmethoden, aber sie ist nicht intelligent genug, um alle Fehler bei der Ressourcenverwaltung zu verhindern. Sie müssen weiterhin vorsichtig sein und die Semantik der verwendeten Ressourcen verstehen.

## Fazit

Hier sind die wichtigsten Komponenten des Ressourcenverwaltungssystems:

- Deklarationen {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}} zur automatischen Ressourcenentsorgung.
- Die Protokolle _disposable_ und _async disposable_, die Ressourcen jeweils mit {{jsxref("Symbol.dispose")}} und {{jsxref("Symbol.asyncDispose")}} implementieren.
- Die Objekte {{jsxref("DisposableStack")}} und {{jsxref("AsyncDisposableStack")}} für Fälle, in denen `using` und `await using` nicht geeignet sind.

Bei korrekter Verwendung dieser APIs können Sie Systeme erstellen, die mit externen Ressourcen interagieren und ohne viel Boilerplate-Code robust und widerstandsfähig gegenüber allen Fehlerbedingungen bleiben.

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Internationalization")}}

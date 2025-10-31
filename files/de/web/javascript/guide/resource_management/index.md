---
title: JavaScript-Ressourcenmanagement
slug: Web/JavaScript/Guide/Resource_management
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Internationalization")}}

Dieser Leitfaden behandelt das Thema _Ressourcenmanagement_ in JavaScript. Ressourcenmanagement ist nicht genau dasselbe wie das [Speichermanagement](/de/docs/Web/JavaScript/Guide/Memory_management), welches ein komplexeres Thema ist und normalerweise automatisch von JavaScript gehandhabt wird. Ressourcenmanagement bezieht sich auf die Verwaltung von Ressourcen, die _nicht_ automatisch von JavaScript bereinigt werden. Manchmal ist es in Ordnung, einige ungenutzte Objekte im Speicher zu haben, weil sie die Anwendungslogik nicht stören. Aber Ressourcenlecks führen oft dazu, dass Dinge nicht funktionieren oder dass unnötig viel Speicherplatz genutzt wird. Deshalb ist dies keine optionale Optimierungsfunktion, sondern eine Kernfunktion, um korrekte Programme zu schreiben!

> [!NOTE]
> Obwohl Speicher- und Ressourcenmanagement zwei separate Themen sind, können Sie manchmal in das Speichermanagementsystem eingreifen, um Ressourcenmanagement durchzuführen, als letztes Mittel. Zum Beispiel, wenn Sie ein JavaScript-Objekt haben, das einen Handle für eine externe Ressource darstellt, können Sie ein {{jsxref("FinalizationRegistry")}} erstellen, um die Ressource zu bereinigen, wenn der Handle vom Müllsammler entfernt wird, weil es definitiv keine Möglichkeit gibt, die Ressource danach zuzugreifen. Es gibt jedoch keine Garantie, dass der Finalisierer ausgeführt wird, daher ist es keine gute Idee, sich auf ihn für kritische Ressourcen zu verlassen.

## Problem

Betrachten wir zunächst einige Beispiele von Ressourcen, die verwaltet werden müssen:

- **Dateihandles**: Ein Dateihandle wird verwendet, um Bytes in einer Datei zu lesen und zu schreiben. Wenn Sie damit fertig sind, müssen Sie [`fileHandle.close()`](https://nodejs.org/api/fs.html#filehandleclose) aufrufen, andernfalls bleibt die Datei geöffnet, selbst wenn das JS-Objekt nicht mehr zugänglich ist. Wie die verlinkte Node.js-Dokumentation sagt:

  > Wenn ein `<FileHandle>` nicht mit der Methode `fileHandle.close()` geschlossen wird, wird versucht, den Dateideskriptor automatisch zu schließen und eine Prozesswarnung auszugeben, um Speicherlecks zu verhindern. Bitte verlassen Sie sich nicht auf dieses Verhalten, da es unzuverlässig sein kann und die Datei nicht geschlossen werden könnte. Stattdessen sollten Sie immer `<FileHandle>`s explizit schließen. Node.js könnte dieses Verhalten in Zukunft ändern.

- **Netzwerkverbindungen**: Einige Verbindungen, wie [`WebSocket`](/de/docs/Web/API/WebSocket) und [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), müssen geschlossen werden, wenn keine Nachrichten übertragen werden. Andernfalls bleibt die Verbindung geöffnet, und Verbindungspools sind oft in ihrer Größe sehr begrenzt.
- **Stream-Reader**: Wenn Sie [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock) nicht aufrufen, bleibt der Stream gesperrt und erlaubt es keinem anderen Reader, ihn zu konsumieren.

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

Hier haben wir einen Stream, der drei Datenblöcke ausgibt. Wir lesen aus dem Stream, bis wir den Buchstaben „b“ finden. Wenn `readUntil` zurückkehrt, ist der Stream nur teilweise konsumiert, sodass wir weiterhin mit einem anderen Reader daraus lesen sollten. Wir haben jedoch vergessen, den Lock freizugeben, also obwohl `reader` nicht mehr verfügbar ist, bleibt der Stream gesperrt und wir können keinen anderen Reader erstellen.

Die Lösung in diesem Fall ist einfach: Rufen Sie `reader.releaseLock()` am Ende von `readUntil` auf. Aber es bleiben einige Probleme:

- Inkonsistenz: Verschiedene Ressourcen haben unterschiedliche Freigabemethoden. Zum Beispiel haben wir `close()`, `releaseLock()`, `disconnect()` usw. Das Muster generalisiert sich nicht.
- Fehlerbehandlung: Was passiert, wenn der `reader.read()`-Aufruf fehlschlägt? Dann würde `readUntil` enden und nie den `reader.releaseLock()`-Aufruf erreichen. Wir können dies mit {{jsxref("Statements/try...catch", "try...finally")}} beheben:

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

- Geltungsbereich: Im obigen Beispiel ist `reader` bereits geschlossen, wenn wir die `try...finally`-Anweisung verlassen, aber es bleibt in seinem Geltungsbereich verfügbar. Dies bedeutet, dass Sie es versehentlich nach dem Schließen verwenden könnten.
- Mehrere Ressourcen: Wenn wir zwei Reader auf unterschiedlichen Streams haben, müssen wir daran denken, beide freizugeben. Dies ist ein respektabler Versuch, dies zu tun:

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

  Dies führt jedoch zu weiteren Problemen bei der Fehlerbehandlung. Wenn `stream2.getReader()` eine Ausnahme auslöst, wird `reader1` nicht freigegeben; wenn `reader1.releaseLock()` einen Fehler auslöst, wird `reader2` nicht freigegeben. Das bedeutet, dass wir tatsächlich jedes Ressourcenerwerb-Freigabe-Paar in ein eigenes `try...finally`-Block einschließen müssen:

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

Sie sehen, wie eine scheinbar harmlose Aufgabe des Aufrufs von `releaseLock` schnell zu verschachteltem Boilerplate-Code führen kann. Aus diesem Grund bietet JavaScript integrierten Sprachsupport für das Ressourcenmanagement.

## Die `using`- und `await using`-Deklarationen

Die Lösung, die wir haben, sind zwei besondere Arten von Variablendeklarationen: {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}}. Sie sind `const` ähnlich, geben aber die Ressource automatisch frei, wenn die Variable außer Geltung gerät, solange die Ressource _disposable_ ist. Am selben Beispiel wie oben können wir es folgendermaßen umschreiben:

```js
{
  using reader1 = stream1.getReader();
  using reader2 = stream2.getReader();

  // do something with reader1 and reader2

  // Before we exit the block, reader1 and reader2 are automatically released
}
```

> [!NOTE]
> Zum Zeitpunkt des Schreibens implementiert [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) das Disposable-Protokoll nicht. Dies ist ein hypothetisches Beispiel.

Zuerst bemerken Sie die zusätzlichen geschweiften Klammern um den Code. Dies erstellt einen neuen [Block Scope](/de/docs/Web/JavaScript/Reference/Statements/block) für die `using`-Deklarationen. Mit `using` deklarierte Ressourcen werden automatisch freigegeben, wenn sie außerhalb des Geltungsbereichs von `using` gelangen, was in diesem Fall immer dann der Fall ist, wenn wir den Block verlassen, entweder weil alle Anweisungen ausgeführt wurden oder weil irgendwo ein Fehler oder `return`/`break`/`continue` aufgetreten ist.

Das bedeutet, `using` kann nur in einem Geltungsbereich verwendet werden, der eine eindeutige Lebensdauer hat—nämlich, es kann nicht auf der obersten Ebene eines Skripts verwendet werden, weil Variablen auf der obersten Ebene eines Skripts im Geltungsbereich für alle zukünftigen Skripte auf der Seite sind, was praktisch bedeutet, dass die Ressource nie freigegeben werden kann, wenn die Seite nie entladen wird. Sie können es jedoch auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwenden, weil der Modul-Geltungsbereich endet, wenn das Modul mit der Ausführung fertig ist.

Nun wissen wir, _wann_ `using` bereinigt. Aber _wie_ wird es gemacht? `using` erfordert, dass die Ressource das _disposable_ Protokoll implementiert. Ein Objekt ist disposable, wenn es die Methode [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose) hat. Diese Methode wird ohne Argumente aufgerufen, um die Bereinigung durchzuführen. Zum Beispiel kann in diesem Fall der Reader die `[Symbol.dispose]`-Eigenschaft ein einfacher Alias oder Wrapper von `releaseLock` sein:

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

Durch das Disposable-Protokoll kann `using` alle Ressourcen in konsistenter Weise entsorgen, ohne zu verstehen, welche Art von Ressource es ist.

Jeder Geltungsbereich hat eine Liste von Ressourcen, die mit ihm in derselben Reihenfolge verknüpft sind, in der sie deklariert wurden. Wenn der Geltungsbereich verlassen wird, werden die Ressourcen in umgekehrter Reihenfolge entsorgt, indem ihre `[Symbol.dispose]()`-Methode aufgerufen wird. Zum Beispiel wird in dem obigen Beispiel `reader1` vor `reader2` deklariert, sodass `reader2` zuerst entsorgt wird, dann `reader1`. Fehler, die beim Versuch auftreten, eine Ressource zu entsorgen, verhindern nicht die Entsorgung anderer Ressourcen. Dies ist konsistent mit dem `try...finally`-Muster und achtet auf mögliche Abhängigkeiten zwischen Ressourcen.

`await using` ähnelt sehr `using`. Die Syntax sagt Ihnen, dass irgendwo ein `await` passiert—nicht, wenn die Ressource deklariert wird, sondern tatsächlich, wenn sie entsorgt wird. `await using` erfordert, dass die Ressource _async disposable_ ist, was bedeutet, dass sie eine [`[Symbol.asyncDisposable]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose) Methode hat. Diese Methode wird ohne Argumente aufgerufen und gibt ein Promise zurück, das aufgelöst wird, wenn die Bereinigung abgeschlossen ist. Dies ist nützlich, wenn die Bereinigung asynchron ist, wie `fileHandle.close()`, in welchem Fall das Ergebnis der Entsorgung nur asynchron bekannt sein kann.

```js
{
  await using fileHandle = open("file.txt", "w");
  await fileHandle.write("Hello");

  // fileHandle.close() is called and awaited
}
```

Da `await using` ein `await` erfordert, ist es nur in Kontexten erlaubt, in denen `await` ist, was `async` Funktionen und Top-Level `await` in Modulen beinhaltet.

Ressourcen werden nacheinander gereinigt, nicht gleichzeitig: Der Rückgabewert der `[Symbol.asyncDispose]()`-Methode einer Ressource wird `await`et, bevor die `[Symbol.asyncDispose]()`-Methode der nächsten Ressource aufgerufen wird.

Ein paar Dinge sind zu beachten:

- `using` und `await using` sind _Opt-in_. Wenn Sie Ihre Ressource mit `let`, `const` oder `var` deklarieren, findet keine automatische Entsorgung statt, genau wie bei allen anderen nicht disposablen Werten.
- `using` und `await using` erfordern, dass die Ressource disposable (oder async disposable) ist. Wenn die Ressource nicht die Methode `[Symbol.dispose]()` oder `[Symbol.asyncDispose]()` hat, bekommen Sie einen `TypeError` in der Deklarationszeile. Die Ressource kann jedoch `null` oder `undefined` sein, was Ihnen erlaubt, Ressourcen bedingt zu erwerben.
- Wie bei `const` können `using` und `await using` Variablen nicht neu zugewiesen werden, obwohl die Eigenschaften der Objekte, die sie halten, verändert werden können. Die Methode `[Symbol.dispose]()`/`[Symbol.asyncDispose]()` wird jedoch bereits zum Zeitpunkt der Deklaration gespeichert, sodass das Ändern der Methode nach der Deklaration die Bereinigung nicht beeinflusst.
- Es gibt einige Tücken, wenn man Geltungsbereiche mit der Lebensdauer von Ressourcen vermischt. Siehe [`using`](/de/docs/Web/JavaScript/Reference/Statements/using#examples) für einige Beispiele.

## Die `DisposableStack`- und `AsyncDisposableStack`-Objekte

`using` und `await using` sind spezielle Syntaxen. Syntaxen sind bequem und verbergen viel von der Komplexität, aber manchmal müssen Sie Dinge manuell tun.

Ein gängiges Beispiel: Was, wenn Sie die Ressource nicht am Ende _dieses_ Geltungsbereichs entsorgen möchten, sondern in einem _späteren_ Geltungsbereich? Betrachten Sie dies:

```js
let reader;
if (someCondition) {
  reader = stream.getReader();
} else {
  reader = stream.getReader({ mode: "byob" });
}
```

Wie wir sagten, ist `using` wie `const`: Es muss initialisiert werden und kann nicht neu zugewiesen werden, also könnten Sie dies versuchen:

```js
if (someCondition) {
  using reader = stream.getReader();
} else {
  using reader = stream.getReader({ mode: "byob" });
}
```

Dies bedeutet jedoch, dass die gesamte Logik innerhalb des `if` oder `else` geschrieben werden muss, was zu viel Duplikation führt. Was wir tun wollen, ist, die Ressource in einem Bereich zu erwerben und zu registrieren, aber sie in einem anderen zu entsorgen. Wir können dazu eine {{jsxref("DisposableStack")}} verwenden, die ein Objekt ist, das eine Sammlung von disposable Ressourcen hält und selbst disposable ist:

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

Vielleicht haben Sie eine Ressource, die das Disposable-Protokoll noch nicht implementiert, sodass sie von `using` abgelehnt wird. In diesem Fall können Sie {{jsxref("DisposableStack/adopt", "adopt()")}} verwenden.

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

Möglicherweise haben Sie eine Entsorgungsaktion durchzuführen, die nicht an eine bestimmte Ressource gebunden ist. Vielleicht möchten Sie einfach eine Nachricht protokollieren, die besagt "Alle Datenbankverbindungen geschlossen", wenn mehrere Verbindungen gleichzeitig geöffnet sind. In diesem Fall können Sie {{jsxref("DisposableStack/defer", "defer()")}} verwenden.

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

Sie möchten möglicherweise eine _bedingte_ Entsorgung durchführen—zum Beispiel nur beanspruchte Ressourcen entsorgen, wenn ein Fehler aufgetreten ist. In diesem Fall können Sie {{jsxref("DisposableStack/move", "move()")}} verwenden, um die Ressourcen zu erhalten, die sonst entsorgt würden.

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

`AsyncDisposableStack` ist wie `DisposableStack`, jedoch für die Verwendung mit async disposable Ressourcen. Ihre `use()` Methode erwartet eine async disposable Ressource, ihre `adopt()` Methode erwartet eine async Bereinigungsfunktion und ihre `dispose()` Methode erwartet einen async Callback. Sie bietet eine `[Symbol.asyncDispose]()` Methode. Sie können immer noch synch Ressourcen übergeben, wenn Sie eine Mischung aus synch und async haben.

Die Referenz für {{jsxref("DisposableStack")}} enthält weitere Beispiele und Details.

## Fehlerbehandlung

Ein Hauptanwendungsfall der Ressourcenmanagementfunktion ist sicherzustellen, dass Ressourcen immer entsorgt werden, selbst wenn ein Fehler auftritt. Untersuchen wir einige komplexe Fehlerbehandlungsszenarien.

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

Angenommen, `chunk` ist `null`. Dann wird `toUpperCase()` einen `TypeError` auslösen, der die Funktion beendet. Bevor die Funktion beendet wird, wird `stream[Symbol.dispose]()` aufgerufen, was den Lock auf dem Stream freigibt.

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

Also verschluckt `using` keine Fehler: Alle auftretenden Fehler werden weiterhin geworfen, aber die Ressourcen werden direkt davor geschlossen. Was passiert nun, wenn die Ressource selbst bei der Bereinigung auch einen Fehler verursacht? Verwenden wir ein etwas konstruiertes Beispiel:

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

Es gibt zwei Fehler, die beim `doSomething()`-Aufruf erzeugt werden: ein Fehler, der während `doSomething` geworfen wird und ein Fehler, der während der Entsorgung von `reader` aufgrund des ersten Fehlers geworfen wird. Beide Fehler werden zusammen geworfen, sodass Sie einen {{jsxref("SuppressedError")}} erhalten. Dies ist ein spezieller Fehler, der zwei Fehler umschließt: Die Eigenschaft {{jsxref("SuppressedError/error", "error")}} enthält den späteren Fehler und die Eigenschaft {{jsxref("SuppressedError/suppressed", "suppressed")}} enthält den früheren Fehler, der von dem späteren Fehler "unterdrückt" wird.

Wenn wir mehr als eine Ressource haben und _beide_ während der Entsorgung einen Fehler auslösen (dies sollte äußerst selten sein—es ist bereits selten, dass die Entsorgung fehlschlägt!), dann wird jeder frühere Fehler von dem späteren Fehler unterdrückt, was zu einer Kette unterdrückter Fehler führt.

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

- Der `reader` wird zuletzt freigegeben, sodass sein Fehler der neuste ist und alles andere unterdrückt: Er erscheint als `e.error`.
- Der `writer` wird zuerst freigegeben, sodass sein Fehler später als der ursprüngliche Austrittsfehler, aber früher als der `reader`-Fehler ist: Er erscheint als `e.suppressed.error`.
- Der ursprüngliche Fehler im Zusammenhang mit "Failed to read" ist der früheste Fehler, sodass er als `e.suppressed.suppressed` erscheint.

## Beispiele

### Automatisches Freigeben von Objekt-URLs

Im folgenden Beispiel erstellen wir eine [Objekt-URL](/de/docs/Web/URI/Reference/Schemes/blob) zu einem Blob (in einer realen Anwendung würde dieser Blob von irgendwoher abgerufen, wie z.B. einer Datei oder einer Abrufantwort), sodass wir den Blob als Datei herunterladen können. Um ein Ressourcenleck zu verhindern, müssen wir die Objekt-URL mit [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) freigeben, wenn sie nicht mehr benötigt wird (das heißt, wenn der Download erfolgreich gestartet wurde). Da die URL selbst nur ein String ist und daher das Disposable-Protokoll nicht implementiert, können wir `url` nicht direkt mit `using` deklarieren; daher erstellen wir einen `DisposableStack`, der als Verwalter für `url` dient. Die Objekt-URL wird widerrufen, sobald `disposer` außer Geltungsbereich geht, was passiert, wenn entweder `link.click()` endet oder irgendwo ein Fehler auftritt.

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

### Automatisches Abbrechen von laufenden Anfragen

Im folgenden Beispiel holen wir eine Liste von Ressourcen gleichzeitig mit {{jsxref("Promise.all()")}} ab. `Promise.all()` schlägt fehl und lehnt das resultierende Promise ab, sobald eine Anfrage fehlgeschlagen ist; die anderen ausstehenden Anfragen laufen jedoch weiter, obwohl ihre Ergebnisse für das Programm unzugänglich sind. Um zu vermeiden, dass diese verbleibenden Anfragen unnötigerweise Ressourcen verbrauchen, müssen wir alle laufenden Anfragen automatisch abbrechen, sobald `Promise.all()` abgeschlossen ist. Wir implementieren die Abbrechung mit einem [`AbortController`](/de/docs/Web/API/AbortController) und übergeben sein [`signal`](/de/docs/Web/API/AbortController/signal) an jeden `fetch()`-Aufruf. Wenn `Promise.all()` erfüllt wird, gibt die Funktion normal zurück und der Controller bricht ab, was harmlos ist, weil keine ausstehende Anfrage abgebrochen werden muss; Wenn `Promise.all()` ablehnt und die Funktion einen Fehler auslöst, wird der Controller abgebrochen und storniert alle ausstehenden Anfragen.

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

Die Ressourcenerkennsyntax bietet viele starke Fehlerbehandlungsgarantien, die sicherstellen, dass die Ressourcen unabhängig von dem, was passiert, immer bereinigt werden, aber es gibt einige Fallstricke, denen Sie dennoch begegnen können:

- Vergessen, `using` oder `await using` zu verwenden. Die Ressourcenmanagementsyntax ist nur dazu da, Ihnen zu helfen, wenn Sie wissen, dass Sie sie brauchen, aber es gibt nichts, was Sie darauf hinweisen würde, wenn Sie sie vergessen! Leider gibt es keine gute Möglichkeit, dies im Vorfeld zu verhindern, da es keine syntaktischen Hinweise darauf gibt, dass etwas eine disposable Ressource ist, und selbst für disposable Ressourcen möchten Sie sie möglicherweise ohne automatische Entsorgung deklarieren. Wahrscheinlich benötigen Sie einen Typprüfer in Kombination mit einem Linter, um diese Probleme zu erkennen, wie [typescript-eslint](https://typescript-eslint.io/) ([das noch plant, an dieser Funktion zu arbeiten](https://github.com/typescript-eslint/typescript-eslint/issues/8255)).
- Verwendung nach Freigabe. Im Allgemeinen stellt die `using`-Syntax sicher, dass eine Ressource freigegeben wird, wenn sie außerhalb des Geltungsbereichs geht, aber es gibt viele Möglichkeiten, einen Wert über seine Bindungsvariable hinaus beizubehalten. JavaScript hat keinen Besitzmechanismus wie Rust, sodass Sie einen Alias deklarieren können, der nicht `using` verwendet, oder die Ressource in einer [Closure](/de/docs/Web/JavaScript/Guide/Closures) behalten, usw. Die {{jsxref("Statements/using", "using")}}-Referenz enthält viele Beispiele für solche Fallstricke. Hier gibt es leider auch keine gute Möglichkeit, dies bei einem komplizierten Kontrollfluss richtig zu erkennen, sodass Sie vorsichtig sein müssen.

Die Ressourcenmanagementfunktion ist kein Allheilmittel. Es ist definitiv eine Verbesserung gegenüber dem manuellen Aufrufen der Entsorgungsmethoden, aber es ist nicht intelligent genug, um alle Ressourcenmanagementfehler zu verhindern. Sie müssen weiterhin vorsichtig sein und die Semantik der von Ihnen verwendeten Ressourcen verstehen.

## Fazit

Hier sind die Schlüsselelemente des Ressourcenmanagementsystems:

- {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}} Deklarationen zur automatischen Ressourcengewinnung.
- Die _disposable_ und _async disposable_ Protokolle, die jeweils die {{jsxref("Symbol.dispose")}} und {{jsxref("Symbol.asyncDispose")}} verwenden, die von Ressourcen implementiert werden.
- Die {{jsxref("DisposableStack")}} und {{jsxref("AsyncDisposableStack")}} Objekte für Fälle, in denen `using` und `await using` nicht geeignet sind.

Mit der richtigen Nutzung dieser APIs können Sie Systeme erstellen, die mit externen Ressourcen interagieren und stark und robust gegen alle Fehlerbedingungen bleiben, ohne viel Boilerplate-Code.

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Internationalization")}}

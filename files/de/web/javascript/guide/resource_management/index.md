---
title: JavaScript-Ressourcenmanagement
slug: Web/JavaScript/Guide/Resource_management
l10n:
  sourceCommit: 99e4e41ce89ef69db3d08766296699f342c5a8ff
---

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Internationalization")}}

Dieser Leitfaden behandelt, wie man in JavaScript _Ressourcenmanagement_ betreibt. Ressourcenmanagement ist nicht genau dasselbe wie das [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management), ein fortgeschritteneres Thema, das normalerweise automatisch von JavaScript gehandhabt wird. Ressourcenmanagement bezieht sich auf die Verwaltung von Ressourcen, die _nicht_ automatisch von JavaScript aufgeräumt werden. Manchmal ist es in Ordnung, einige ungenutzte Objekte im Speicher zu haben, da sie nicht die Anwendungslogik stören, aber Ressourcenausfälle führen oft dazu, dass Dinge nicht funktionieren oder eine Menge überschüssiger Speicherplatz genutzt wird. Daher ist dies keine optionale Eigenschaft zur Optimierung, sondern eine Kernfunktion zum Schreiben korrekter Programme!

> [!NOTE]
> Während Speicherverwaltung und Ressourcenmanagement zwei separate Themen sind, können Sie manchmal auf das System der Speicherverwaltung zugreifen, um Ressourcen zu verwalten, als letzten Ausweg. Wenn Sie beispielsweise ein JavaScript-Objekt haben, das einen Handle einer externen Ressource darstellt, können Sie ein {{jsxref("FinalizationRegistry")}} erstellen, um die Ressource zu bereinigen, wenn der Handle vom Garbage Collector entfernt wird, da es definitiv keinen Weg gibt, danach auf die Ressource zuzugreifen. Es gibt jedoch keine Garantie dafür, dass der Finalizer ausgeführt wird, daher ist es keine gute Idee, sich für kritische Ressourcen darauf zu verlassen.

## Problem

Lassen Sie uns zunächst einige Beispiele von Ressourcen betrachten, die verwaltet werden müssen:

- **Datei-Handles**: Ein Datei-Handle wird verwendet, um Bytes in einer Datei zu lesen und zu schreiben. Wenn Sie damit fertig sind, müssen Sie [`fileHandle.close()`](https://nodejs.org/api/fs.html#filehandleclose) aufrufen, andernfalls bleibt die Datei offen, selbst wenn das JS-Objekt nicht mehr zugänglich ist. Wie in den verlinkten Node.js-Dokumenten gesagt wird:

  > Wenn ein `<FileHandle>` nicht mit der `fileHandle.close()`-Methode geschlossen wird, versucht es, den Dateideskriptor automatisch zu schließen und eine Prozesswarnung auszugeben, um Speicherlecks zu verhindern. Bitte verlassen Sie sich nicht auf dieses Verhalten, da es unzuverlässig sein kann und die Datei möglicherweise nicht geschlossen wird. Stattdessen sollten Sie `<FileHandle>`s immer explizit schließen. Node.js kann dieses Verhalten in Zukunft ändern.

- **Netzwerkverbindungen**: Einige Verbindungen, wie [`WebSocket`](/de/docs/Web/API/WebSocket) und [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), müssen geschlossen werden, wenn keine Nachrichten übertragen werden. Andernfalls bleibt die Verbindung offen, und Verbindungspools sind oft sehr begrenzt in ihrer Größe.
- **Stream-Leser**: Wenn Sie nicht [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock) aufrufen, wird der Stream gesperrt und erlaubt keinem anderen Leser, ihn zu konsumieren.

Hier ist ein konkretes Beispiel, bei dem ein lesbarer Stream verwendet wird:

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

Hier haben wir einen Stream, der drei Datenblöcke übernimmt. Wir lesen vom Stream, bis wir den Buchstaben "b" finden. Wenn `readUntil` zurückkehrt, ist der Stream nur teilweise gelesen, sodass wir in der Lage sein sollten, mit einem anderen Leser weiter zu lesen. Wir haben jedoch vergessen, das Lock zu lösen, sodass der Stream immer noch gesperrt ist und kein weiterer Leser erstellt werden kann.

Die Lösung in diesem Fall ist einfach: Rufen Sie `reader.releaseLock()` am Ende von `readUntil` auf. Aber einige Probleme bleiben bestehen:

- Inkonsistenz: Verschiedene Ressourcen haben unterschiedliche Wege, freigegeben zu werden. Zum Beispiel haben wir `close()`, `releaseLock()`, `disconnect()`, etc. Das Muster verallgemeinert sich nicht.
- Fehlerbehandlung: Was passiert, wenn der Aufruf von `reader.read()` fehlschlägt? Dann würde `readUntil` beendet und nie zum Aufruf von `reader.releaseLock()` gelangen. Wir können dies beheben, indem wir {{jsxref("Statements/try...catch", "try...finally")}} verwenden:

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

  Aber Sie müssen sich daran erinnern, dies jedes Mal zu tun, wenn Sie eine wichtige Ressource freigeben müssen.

- Scoping: Im obigen Beispiel ist `reader` bereits geschlossen, wenn wir die `try...finally`-Anweisung verlassen, aber es bleibt in seinem Gültigkeitsbereich verfügbar. Dies bedeutet, dass Sie es versehentlich nach dem Schließen verwenden können.
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

  Dies führt jedoch zu mehr Fehlerbehandlungsproblemen. Wenn `stream2.getReader()` einen Fehler auslöst, wird `reader1` nicht freigegeben; wenn `reader1.releaseLock()` einen Fehler auslöst, wird `reader2` nicht freigegeben. Dies bedeutet, dass wir tatsächlich jedes Ressourcen-Akquisitions- und -Freigabepaar in seinem eigenen `try...finally` umwickeln müssen:

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

Sie sehen, wie eine scheinbar harmlose Aufgabe des Aufrufens von `releaseLock` schnell zu einem verschachtelten Boilerplate-Code führen kann. Deshalb bietet JavaScript integrierte Sprachunterstützung für das Ressourcenmanagement.

## Die `using`- und `await using`-Deklarationen

Die Lösung, die wir haben, sind zwei spezielle Arten der Variablendeklaration: {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}}. Sie sind `const` ähnlich, aber sie geben die Ressource automatisch frei, wenn die Variable aus dem Gültigkeitsbereich austritt, solange die Ressource _freigebbar_ ist. Am gleichen Beispiel wie oben können wir es umschreiben als:

```js
{
  using reader1 = stream1.getReader();
  using reader2 = stream2.getReader();

  // do something with reader1 and reader2

  // Before we exit the block, reader1 and reader2 are automatically released
}
```

> [!NOTE]
> Zum Zeitpunkt des Schreibens implementiert [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) das disposable-Protokoll nicht. Dies ist ein hypothetisches Beispiel.

Beachten Sie zuerst die zusätzlichen geschwungenen Klammern um den Code. Dies erzeugt einen neuen [Blockbereich](/de/docs/Web/JavaScript/Reference/Statements/block) für die `using`-Deklarationen. Mit `using` deklarierte Ressourcen werden automatisch freigegeben, wenn sie aus dem Gültigkeitsbereich von `using` austreten, was in diesem Fall der Fall ist, wenn wir den Block verlassen, entweder weil alle Anweisungen ausgeführt wurden oder weil irgendwo ein Fehler, ein `return`/`break`/`continue` aufgetreten ist.

Dies bedeutet, dass `using` nur in einem Gültigkeitsbereich verwendet werden kann, der eine klare Lebensdauer hat – nämlich, es kann nicht auf der obersten Ebene eines Skripts verwendet werden, da Variablen auf der obersten Ebene eines Skripts im Gültigkeitsbereich für alle zukünftigen Skripte auf der Seite sind, was praktisch bedeutet, dass die Ressource niemals freigegeben werden kann, wenn die Seite niemals entladen wird. Sie können es jedoch auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwenden, weil der Modulbereich endet, wenn das Modul die Ausführung beendet.

Jetzt wissen wir, _wann_ `using` das Aufräumen durchführt. Aber _wie_ wird es gemacht? `using` erfordert, dass die Ressource das _disposable_-Protokoll implementiert. Ein Objekt ist disposable, wenn es die Methode [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose) hat. Diese Methode wird ohne Argumente aufgerufen, um die Bereinigung durchzuführen. Zum Beispiel kann im Falle des Lesers die `[Symbol.dispose]`-Eigenschaft ein einfacher Alias oder Wrapper von `releaseLock` sein:

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

Durch das disposable-Protokoll kann `using` alle Ressourcen konsistent freigeben, ohne zu wissen, welcher Ressourcentyp es ist.

Jeder Gültigkeitsbereich hat eine Liste von Ressourcen, die mit ihm verbunden sind, in der Reihenfolge, in der sie deklariert wurden. Wenn der Bereich verlassen wird, werden die Ressourcen in umgekehrter Reihenfolge freigegeben, indem ihre `[Symbol.dispose]()`-Methode aufgerufen wird. Zum Beispiel wird im obigen Beispiel `reader1` vor `reader2` deklariert, also wird `reader2` zuerst und dann `reader1` freigegeben. Fehler, die beim Versuch, eine Ressource freizugeben, ausgelöst werden, verhindern nicht die Freigabe anderer Ressourcen. Dies ist konsistent mit dem `try...finally`-Muster und berücksichtigt mögliche Abhängigkeiten zwischen den Ressourcen.

`await using` ist `using` sehr ähnlich. Die Syntax zeigt an, dass irgendwo ein `await` passiert – nicht wenn die Ressource deklariert wird, sondern tatsächlich wenn sie freigegeben wird. `await using` erfordert, dass die Ressource _asynchron freigebbar_ ist, was bedeutet, dass sie eine [`[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose) Methode hat. Diese Methode wird ohne Argumente aufgerufen und gibt ein Promise zurück, das sich löst, wenn die Bereinigung abgeschlossen ist. Dies ist nützlich, wenn die Bereinigung asynchron ist, wie `fileHandle.close()`, in welchem Fall das Ergebnis der Freigabe nur asynchron bekannt sein kann.

```js
{
  await using fileHandle = open("file.txt", "w");
  await fileHandle.write("Hello");

  // fileHandle.close() is called and awaited
}
```

Weil `await using` ein `await` erfordert, ist es nur in Kontexten erlaubt, in denen `await` ist, was `async`-Funktionen und Top-Level-`awaits` in Modulen einschließt.

Ressourcen werden sequentiell und nicht gleichzeitig bereinigt: Der Rückgabewert der `[Symbol.asyncDispose]()`-Methode einer Ressource wird vor dem Aufruf der nächsten `[Symbol.asyncDispose]()`-Methode erwartet.

Einige Punkte, die zu beachten sind:

- `using` und `await using` sind _opt-in_. Wenn Sie Ihre Ressource mit `let`, `const` oder `var` deklarieren, erfolgt keine automatische Freigabe, genau wie bei allen anderen nicht-disposablen Werten.
- `using` und `await using` erfordern, dass die Ressource disposable (oder async disposable) ist. Wenn die Ressource nicht die Methode `[Symbol.dispose]()` oder `[Symbol.asyncDispose]()` hat, erhalten Sie einen `TypeError` bei der Deklarationslinie. Die Ressource kann jedoch `null` oder `undefined` sein, sodass Sie Ressourcen bedingt erwerben können.
- Wie `const`, können `using`- und `await using`-Variablen nicht neu zugewiesen werden, obwohl die Eigenschaften der Objekte, die sie enthalten, geändert werden können. Die `[Symbol.dispose]()`/`[Symbol.asyncDispose]()` Methode wird jedoch bereits zum Zeitpunkt der Deklaration gespeichert, sodass das Ändern der Methode nach der Deklaration die Bereinigung nicht beeinflusst.
- Es gibt ein paar Fallstricke, wenn man Bereiche mit Ressourcen-Lebensdauer vermischt. Siehe [`using`](/de/docs/Web/JavaScript/Reference/Statements/using#examples) für einige Beispiele.

## Die `DisposableStack`- und `AsyncDisposableStack`-Objekte

`using` und `await using` sind spezielle Syntaxen. Syntaxen sind praktisch und verbergen viel der Komplexität, aber manchmal müssen Sie Dinge manuell tun.

Ein häufiges Beispiel: Was, wenn Sie die Ressource nicht am Ende _dieses_ Bereichs freigeben möchten, sondern in einem _späteren_ Bereich? Betrachten Sie dies:

```js
let reader;
if (someCondition) {
  reader = stream.getReader();
} else {
  reader = stream.getReader({ mode: "byob" });
}
```

Wie gesagt, `using` ist wie `const`: Es muss initialisiert sein und kann nicht neu zugewiesen werden, sodass Sie dies versuchen könnten:

```js
if (someCondition) {
  using reader = stream.getReader();
} else {
  using reader = stream.getReader({ mode: "byob" });
}
```

Dies bedeutet jedoch, dass die gesamte Logik innerhalb des `if` oder `else` geschrieben werden muss, was zu viel Duplikation führt. Was wir tun möchten, ist, die Ressource in einem Bereich zu erwerben und sie in einem anderen freizugeben. Wir können dafür einen {{jsxref("DisposableStack")}} verwenden, der ein Objekt ist, das eine Sammlung von disposablen Ressourcen hält und selbst disposable ist:

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

Sie könnten eine Ressource haben, die das disposable-Protokoll noch nicht implementiert, sodass sie von `using` abgelehnt wird. In diesem Fall können Sie {{jsxref("DisposableStack/adopt", "adopt()")}} verwenden.

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

Sie könnten eine Bereinigungsaktion ausführen müssen, die nicht mit einer bestimmten Ressource "verbunden" ist. Vielleicht möchten Sie einfach nur eine Nachricht wie "Alle Datenbankverbindungen geschlossen" protokollieren, wenn mehrere Verbindungen gleichzeitig geöffnet sind. In diesem Fall können Sie {{jsxref("DisposableStack/defer", "defer()")}} verwenden.

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

Sie möchten möglicherweise eine _bedingte_ Freigabe durchführen – zum Beispiel nur erworbene Ressourcen freigeben, wenn ein Fehler aufgetreten ist. In diesem Fall können Sie {{jsxref("DisposableStack/move", "move()")}} verwenden, um die Ressourcen zu bewahren, die ansonsten freigegeben würden.

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

`AsyncDisposableStack` ist wie `DisposableStack`, aber zur Verwendung mit asynchronen disposable Ressourcen. Seine `use()`-Methode erwartet ein async disposable, seine `adopt()`-Methode erwartet eine asynchrone Bereinigungsfunktion und seine `dispose()`-Methode erwartet einen asynchronen Callback. Es bietet eine `[Symbol.asyncDispose]()` Methode. Sie können ihm weiterhin synchrone Ressourcen übergeben, wenn Sie einen Mix aus synchronen und asynchronen Ressourcen haben.

Das Referenzdokument für {{jsxref("DisposableStack")}} enthält mehr Beispiele und Details.

## Fehlerbehandlung

Ein Hauptanwendungsfall der Ressourcenmanagementfunktion ist sicherzustellen, dass Ressourcen immer freigegeben werden, selbst wenn ein Fehler auftritt. Lassen Sie uns einige komplexe Fehlerbehandlungsszenarien untersuchen.

Wir beginnen mit dem folgenden Code, der durch die Verwendung von `using` gegen Fehler robust ist:

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

Angenommen, `chunk` stellte sich als `null` heraus. Dann wird `toUpperCase()` einen `TypeError` auslösen, was dazu führt, dass die Funktion beendet wird. Bevor die Funktion beendet wird, wird `stream[Symbol.dispose]()` aufgerufen, was das Sperren des Streams aufhebt.

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

Daher unterdrückt `using` keine Fehler: Alle auftretenden Fehler werden weiterhin geworfen, aber die Ressourcen werden direkt vorher geschlossen. Was passiert nun, wenn die Ressourcensäuberung selbst einen Fehler wirft? Lassen Sie uns ein noch konstruierteres Beispiel verwenden:

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

In dem Aufruf von `doSomething()` werden zwei Fehler generiert: ein Fehler, der während `doSomething` ausgelöst wird, und ein Fehler, der beim Freigeben von `reader` aufgrund des ersten Fehlers ausgelöst wird. Beide Fehler werden zusammen geworfen, sodass das, was Sie gefangen haben, ein {{jsxref("SuppressedError")}} ist. Dies ist ein spezieller Fehler, der zwei Fehler umschließt: Die {{jsxref("SuppressedError/error", "error")}}-Eigenschaft enthält den späteren Fehler, und die {{jsxref("SuppressedError/suppressed", "suppressed")}}-Eigenschaft enthält den früheren Fehler, der durch den späteren Fehler "unterdrückt" wird.

Wenn wir mehr als eine Ressource haben und _beide_ von ihnen während der Freigabe einen Fehler auslösen (dies sollte äußerst selten sein – es ist bereits selten, dass die Freigabe fehlschlägt!), dann wird jeder frühere Fehler durch den späteren Fehler unterdrückt und bildet eine Kette unterdrückter Fehler.

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

- Der `reader` wird zuletzt freigegeben, sodass sein Fehler der letzte ist und daher alles andere unterdrückt: Er erscheint als `e.error`.
- Der `writer` wird zuerst freigegeben, sodass sein Fehler später als der ursprüngliche austretende Fehler ist, aber früher als der `reader`-Fehler: Er erscheint als `e.suppressed.error`.
- Der ursprüngliche Fehler über das "Fehlgeschlagene Lesen" ist der früheste Fehler, sodass er als `e.suppressed.suppressed` erscheint.

## Beispiele

### Automatisches Freigeben von Objekt-URLs

Im folgenden Beispiel erstellen wir eine [Objekt-URL](/de/docs/Web/URI/Reference/Schemes/blob) zu einem Blob (in einer realen Anwendung würde dieser Blob von irgendwoher abgerufen, wie einer Datei oder einer Abruffunktion), damit wir den Blob als Datei herunterladen können. Um ein Ressourcenleck zu vermeiden, müssen wir die Objekt-URL mithilfe von [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) freigeben, sobald sie nicht mehr benötigt wird (das heißt, wenn der Download erfolgreich gestartet wurde). Da die URL selbst nur eine Zeichenfolge ist und daher nicht das disposable-Protokoll implementiert, können wir `url` nicht direkt mit `using` deklarieren; daher erstellen wir einen `DisposableStack`, der als Freigeber für `url` dient. Die Objekt-URL wird sofort gelöscht, wenn `disposer` aus dem Gültigkeitsbereich geht, was entweder dann der Fall ist, wenn `link.click()` abgeschlossen ist oder ein Fehler auftritt.

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

Im folgenden Beispiel rufen wir eine Liste von Ressourcen gleichzeitig mit {{jsxref("Promise.all()")}} ab. `Promise.all()` schlägt fehl und weist das resultierende Promise zurück, sobald eine Anfrage fehlgeschlagen ist; jedoch laufen die anderen ausstehenden Anfragen weiter, obwohl ihre Ergebnisse für das Programm unzugänglich sind. Um zu verhindern, dass diese verbleibenden Anfragen unnötig Ressourcen verbrauchen, müssen wir laufende Anfragen automatisch stornieren, sobald `Promise.all()` abgeschlossen ist. Wir implementieren die Stornierung mit einem [`AbortController`](/de/docs/Web/API/AbortController) und übergeben dessen [`signal`](/de/docs/Web/API/AbortController/signal) an jeden `fetch()`-Aufruf. Wenn `Promise.all()` erfolgreich ist, gibt die Funktion normal zurück und der Controller bricht ab, was harmlos ist, da keine ausstehende Anfrage zu stornieren ist; wenn `Promise.all()` abgelehnt wird und die Funktion einen Fehler wirft, bricht der Controller ab und storniert alle ausstehenden Anfragen.

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

Die Ressourcensäuberungssyntax bietet viele starke Fehlerbehandlungsgarantien, die sicherstellen, dass die Ressourcen aufgeräumt werden, egal was passiert, aber es gibt einige Fallstricke, die Sie dennoch erleben könnten:

- Vergessen, `using` oder `await using` zu verwenden. Die Ressourcenmanagementsyntax ist nur da, um Ihnen zu helfen, wenn Sie wissen, dass Sie sie benötigen, aber es gibt nichts, das Sie darauf aufmerksam macht, wenn Sie sie vergessen! Leider gibt es keinen guten Weg, dies im Voraus zu verhindern, da es keine syntaktischen Hinweise gibt, dass etwas eine disposable Ressource ist, und selbst für disposable Ressourcen möchten Sie sie möglicherweise ohne automatische Freigabe deklarieren. Sie benötigen wahrscheinlich einen Typenprüfer in Kombination mit einem Linter, um diese Probleme zu erkennen, wie [typescript-eslint](https://typescript-eslint.io/) ([das noch plant, an dieser Funktion zu arbeiten](https://github.com/typescript-eslint/typescript-eslint/issues/8255)).
- Verwenden nach dem Freigeben. Im Allgemeinen stellt die `using`-Syntax sicher, dass eine Ressource freigegeben wird, wenn sie aus dem Gültigkeitsbereich hinausgeht, aber es gibt viele Möglichkeiten, einen Wert über seine Bindungsvariable hinaus beizubehalten. JavaScript hat keinen Besitzmechanismus wie Rust, sodass Sie einen Alias deklarieren können, der `using` nicht verwendet, oder die Ressource in einer [closure](/de/docs/Web/JavaScript/Guide/Closures) beibehalten können, etc. Die {{jsxref("Statements/using", "using")}}-Referenz enthält viele Beispiele für solche Fallstricke. Wieder gibt es keinen guten Weg, dies in einem komplizierten Kontrollfluss richtig zu erkennen, sodass Sie vorsichtig sein müssen.

Die Ressourcenmanagementfunktion ist kein Allheilmittel. Sie stellt definitiv eine Verbesserung gegenüber dem manuellen Aufrufen der Freigabemethoden dar, aber sie ist nicht smart genug, um alle Ressourcenmanagementfehler zu verhindern. Sie müssen dennoch vorsichtig sein und die Semantik der Ressourcen, die Sie verwenden, verstehen.

## Fazit

Hier sind die wichtigsten Komponenten des Ressourcenmanagementsystems:

- {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}}-Deklarationen für die automatische Ressourcenfreigabe.
- Die _disposable_- und _async disposable_-Protokolle, die durch den Einsatz von {{jsxref("Symbol.dispose")}} und {{jsxref("Symbol.asyncDispose")}} von Ressourcen implementiert werden.
- Die {{jsxref("DisposableStack")}}- und {{jsxref("AsyncDisposableStack")}}-Objekte für Fälle, in denen `using` und `await using` nicht geeignet sind.

Mit der ordnungsgemäßen Nutzung dieser APIs können Sie Systeme erstellen, die mit externen Ressourcen interagieren und stark und robust gegen alle Fehlerbedingungen bleiben, ohne viel Boilerplate-Code.

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Internationalization")}}

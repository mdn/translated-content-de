---
title: JavaScript Ressourcenmanagement
slug: Web/JavaScript/Guide/Resource_management
l10n:
  sourceCommit: a9655b090df5ee16a7de3cba76dee7c0e8b9f0f0
---

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Internationalization")}}

Dieser Leitfaden behandelt, wie Ressourcenmanagement in JavaScript durchgeführt wird. Ressourcenmanagement ist nicht genau dasselbe wie [Speichermanagement](/de/docs/Web/JavaScript/Guide/Memory_management), welches ein fortgeschritteneres Thema ist und üblicherweise automatisch von JavaScript gehandhabt wird. Ressourcenmanagement bezieht sich auf das Verwalten von Ressourcen, die _nicht_ automatisch von JavaScript bereinigt werden. Manchmal ist es in Ordnung, einige ungenutzte Objekte im Speicher zu haben, weil sie die Anwendungslogik nicht beeinträchtigen, aber Ressourcenlecks führen oft dazu, dass Dinge nicht funktionieren oder ein erheblich erhöhter Speicherverbrauch auftritt. Daher ist dies kein optionales Feature zur Optimierung, sondern ein Kernmerkmal, um korrekte Programme zu schreiben!

> [!NOTE]
> Auch wenn Speichermanagement und Ressourcenmanagement zwei separate Themen sind, können Sie manchmal als letztes Mittel in das Speichermanagement-Hilfssystem einhaken, um Ressourcenmanagement durchzuführen. Wenn Sie beispielsweise ein JavaScript-Objekt haben, das einen Handle einer externen Ressource darstellt, können Sie ein {{jsxref("FinalizationRegistry")}} erstellen, um die Ressource zu bereinigen, wenn der Handle gesammelt wird, da es definitiv keine Möglichkeit gibt, danach auf die Ressource zuzugreifen. Es gibt jedoch keine Garantie, dass der Finalizer ausgeführt wird, daher ist es keine gute Idee, sich bei kritischen Ressourcen darauf zu verlassen.

## Problem

Schauen wir uns zunächst ein paar Beispiele von Ressourcen an, die verwaltet werden müssen:

- **Datei-Handles**: Ein Datei-Handle wird verwendet, um Bytes in einer Datei zu lesen und zu schreiben. Wenn Sie damit fertig sind, müssen Sie [`fileHandle.close()`](https://nodejs.org/api/fs.html#filehandleclose) aufrufen, ansonsten bleibt die Datei geöffnet, selbst wenn das JS-Objekt nicht mehr zugänglich ist. Wie in den verlinkten Node.js-Dokumenten steht:

  > Wenn ein `<FileHandle>` nicht mit der Methode `fileHandle.close()` geschlossen wurde, versucht es, den Dateideskriptor automatisch zu schließen und eine Warnung im Prozess zu generieren, was hilft, Speicherlecks zu vermeiden. Bitte verlassen Sie sich nicht auf dieses Verhalten, da es unzuverlässig sein kann und die Datei möglicherweise nicht geschlossen wird. Schließen Sie stattdessen immer explizit `<FileHandle>`s. Node.js kann dieses Verhalten in Zukunft ändern.

- **Netzwerkverbindungen**: Einige Verbindungen, wie [`WebSocket`](/de/docs/Web/API/WebSocket) und [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), müssen geschlossen werden, wenn keine Nachrichten übertragen werden. Andernfalls bleibt die Verbindung offen, und Verbindungspools sind oft sehr begrenzt in ihrer Größe.
- **Stream-Reader**: Wenn Sie [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock) nicht aufrufen, wird der Stream gesperrt und lässt keinen anderen Reader zu, ihn zu konsumieren.

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

Hier haben wir einen Stream, der drei Datensegmente ausgibt. Wir lesen vom Stream, bis wir den Buchstaben "b" finden. Wenn `readUntil` zurückkehrt, ist der Stream nur teilweise konsumiert, sodass wir in der Lage sein sollten, weiterhin von ihm mit einem anderen Reader zu lesen. Allerdings haben wir vergessen, die Sperre freizugeben, sodass, obwohl `reader` nicht mehr verfügbar ist, der Stream weiterhin gesperrt ist und wir keinen weiteren Reader erstellen können.

Die Lösung in diesem Fall ist einfach: rufen Sie `reader.releaseLock()` am Ende von `readUntil` auf. Aber einige Probleme bleiben dennoch:

- Inkonsistenz: verschiedene Ressourcen haben unterschiedliche Wege, um sie freizugeben. Zum Beispiel haben wir `close()`, `releaseLock()`, `disconnect()` usw. Das Muster ist nicht verallgemeinerbar.
- Fehlerbehandlung: Was passiert, wenn der Aufruf `reader.read()` fehlschlägt? Dann würde `readUntil` terminieren und niemals zum Aufruf `reader.releaseLock()` gelangen. Wir können dies beheben, indem wir {{jsxref("Statements/try...catch", "try...finally")}} verwenden:

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

- Geltungsbereich: im obigen Beispiel ist `reader` bereits geschlossen, wenn wir die `try...finally`-Anweisung verlassen, aber es ist weiterhin in seinem Geltungsbereich verfügbar. Das bedeutet, dass Sie es möglicherweise versehentlich nach dem Schließen verwenden.
- Mehrere Ressourcen: wenn wir zwei Reader auf verschiedenen Streams haben, müssen wir daran denken, beide freizugeben. Dies ist ein respektabler Versuch, dies zu tun:

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

  Dies führt jedoch zu weiteren Problemen bei der Fehlerbehandlung. Wenn `stream2.getReader()` eine Ausnahme auslöst, wird `reader1` nicht freigegeben; wenn `reader1.releaseLock()` einen Fehler auslöst, wird `reader2` nicht freigegeben. Das bedeutet, dass wir tatsächlich jedes Ressourcen-Akquisitions-Freigabe-Paar in seinen eigenen `try...finally` blockieren müssen:

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

Sie sehen, wie eine scheinbar harmlose Aufgabe des Aufrufs von `releaseLock` schnell zu verschachteltem Boilerplate-Code führen kann. Aus diesem Grund bietet JavaScript integrierte Sprachunterstützung für Ressourcenmanagement.

## Die `using` und `await using` Deklarationen

Die Lösung, die wir haben, sind zwei spezielle Arten von Variablendeklarationen: {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}}. Sie sind `const` ähnlich, aber sie geben die Ressource automatisch frei, wenn die Variable aus dem Geltungsbereich tritt, sofern die Ressource _entsorgbar_ ist. Mit demselben Beispiel wie oben können wir es umschreiben als:

```js
{
  using reader1 = stream1.getReader();
  using reader2 = stream2.getReader();

  // do something with reader1 and reader2

  // Before we exit the block, reader1 and reader2 are automatically released
}
```

> [!NOTE]
> Zum Zeitpunkt des Schreibens implementiert der [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) nicht das entsorgbare Protokoll. Dies ist ein hypothetisches Beispiel.

Zunächst beachten Sie die zusätzlichen geschweiften Klammern um den Code. Dies erstellt einen neuen [Block Scope](/de/docs/Web/JavaScript/Reference/Statements/block) für die `using` Deklarationen. Mit `using` deklarierte Ressourcen werden automatisch freigegeben, wenn sie aus dem Geltungsbereich von `using` austreten, was in diesem Fall der Fall ist, sobald wir den Block verlassen, sei es, weil alle Anweisungen ausgeführt wurden oder weil irgendwo ein Fehler oder `return`/`break`/`continue` aufgetreten ist.

Das bedeutet, dass `using` nur in einem Geltungsbereich verwendet werden kann, der eine klare Lebensdauer hat – namentlich kann es nicht auf oberster Ebene eines Skripts verwendet werden, da Variablen auf oberster Ebene eines Skripts im Geltungsbereich für alle zukünftigen Skripte auf der Seite sind, was praktisch bedeutet, dass die Ressource niemals freigegeben werden kann, wenn die Seite niemals entladen wird. Sie können es jedoch auf oberster Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwenden, da der Modul-Geltungsbereich endet, wenn das Modul die Ausführung beendet.

Jetzt wissen wir _wann_ `using` die Reinigung durchführt. Aber _wie_ wird es gemacht? `using` erfordert, dass die Ressource das _entsorgbare_ Protokoll implementiert. Ein Objekt ist entsorgbar, wenn es die Methode [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose) hat. Diese Methode wird ohne Argumente aufgerufen, um die Reinigung durchzuführen. Zum Beispiel kann im Fall des Readers die `[Symbol.dispose]`-Eigenschaft ein einfacher Alias oder Wrapper von `releaseLock` sein:

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

Durch das entsorgbare Protokoll kann `using` alle Ressourcen konsistent entsorgen, ohne zu verstehen, um welchen Ressourcentyp es sich handelt.

Jeder Geltungsbereich hat eine Liste von Ressourcen, die ihm in der Reihenfolge, in der sie deklariert wurden, zugeordnet sind. Wenn der Geltungsbereich endet, werden die Ressourcen in umgekehrter Reihenfolge entsorgt, indem ihre `[Symbol.dispose]()`-Methode aufgerufen wird. Zum Beispiel wird im obigen Beispiel `reader1` vor `reader2` deklariert, sodass `reader2` zuerst entsorgt wird, dann `reader1`. Fehler, die beim Versuch auftreten, eine Ressource zu entsorgen, verhindern nicht die Entsorgung anderer Ressourcen. Dies ist konsistent mit dem `try...finally` Muster und respektiert mögliche Abhängigkeiten zwischen Ressourcen.

`await using` ist `using` sehr ähnlich. Die Syntax sagt Ihnen, dass irgendwo ein `await` passiert – nicht, wenn die Ressource deklariert wird, sondern tatsächlich, wenn sie entsorgt wird. `await using` erfordert, dass die Ressource _asynchron entsorgbar_ ist, was bedeutet, dass sie eine Methode [`[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose) hat. Diese Methode wird ohne Argumente aufgerufen und gibt ein Versprechen zurück, das aufgelöst wird, wenn die Reinigung abgeschlossen ist. Dies ist nützlich, wenn die Reinigung asynchron ist, wie `fileHandle.close()`, in welchem Fall das Ergebnis der Entsorgung nur asynchron bekannt sein kann.

```js
{
  await using fileHandle = open("file.txt", "w");
  await fileHandle.write("Hello");

  // fileHandle.close() is called and awaited
}
```

Da `await using` erfordert, dass ein `await` ausgeführt wird, ist es nur in Kontexten erlaubt, in denen `await` erlaubt ist, zu denen `async` Funktionen und oberstes `await` in Modulen gehören.

Ressourcen werden sequentiell, nicht gleichzeitig, bereinigt: Der Rückgabewert der `[Symbol.asyncDispose]()`-Methode einer Ressource wird `await`ed, bevor die `[Symbol.asyncDispose]()`-Methode der nächsten Ressource aufgerufen wird.

Einige Punkte, die zu beachten sind:

- `using` und `await using` sind _opt-in_. Wenn Sie Ihre Ressource mit `let`, `const` oder `var` deklarieren, erfolgt keine automatische Entsorgung, genau wie bei anderen nicht entsorgbaren Werten.
- `using` und `await using` erfordern, dass die Ressource entsorgbar (oder asynchron entsorgbar) ist. Wenn die Ressource nicht die Methode `[Symbol.dispose]()` oder `[Symbol.asyncDispose]()` hat, erhalten Sie einen `TypeError` an der Deklarationszeile. Die Ressource kann jedoch `null` oder `undefined` sein, sodass Sie Ressourcen bedingt erwerben können.
- Wie `const` können `using` und `await using` Variablen nicht neu zugewiesen werden, obwohl die Eigenschaften der von ihnen gehaltenen Objekte geändert werden können. Die Methode `[Symbol.dispose]()`/`[Symbol.asyncDispose]()` wird jedoch zum Zeitpunkt der Deklaration bereits gespeichert, sodass eine Änderung der Methode nach der Deklaration die Bereinigung nicht beeinträchtigt.
- Es gibt einige Stolperfallen, wenn Sie Geltungsbereiche mit der Lebensdauer von Ressourcen vermischen. Siehe [`using`](/de/docs/Web/JavaScript/Reference/Statements/using#examples) für einige Beispiele.

## Die `DisposableStack` und `AsyncDisposableStack` Objekte

`using` und `await using` sind spezielle Syntaxen. Syntaxen sind praktisch und verbergen viel von der Komplexität, aber manchmal müssen Sie Dinge manuell erledigen.

Für ein häufiges Beispiel: Was, wenn Sie die Ressource nicht am Ende _dieses_ Geltungsbereichs, sondern in einem _späteren_ Geltungsbereich entsorgen möchten? Betrachten Sie dies:

```js
let reader;
if (someCondition) {
  reader = stream.getReader();
} else {
  reader = stream.getReader({ mode: "byob" });
}
```

Wie gesagt, `using` ist wie `const`: es muss initialisiert werden und kann nicht neu zugewiesen werden, sodass Sie dies versuchen könnten:

```js
if (someCondition) {
  using reader = stream.getReader();
} else {
  using reader = stream.getReader({ mode: "byob" });
}
```

Dies bedeutet jedoch, dass alle Logik innerhalb des `if` oder `else` geschrieben werden muss, was zu viel Duplizierung führt. Was wir tun möchten, ist, die Ressource in einem Geltungsbereich zu erwerben und zu registrieren, aber sie in einem anderen zu entsorgen. Dafür können wir einen {{jsxref("DisposableStack")}} verwenden, welcher ein Objekt ist, das eine Sammlung von entsorgbaren Ressourcen hält und selbst entsorgbar ist:

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

Möglicherweise haben Sie eine Ressource, die das entsorgbare Protokoll noch nicht implementiert, sodass sie von `using` abgelehnt wird. In diesem Fall können Sie {{jsxref("DisposableStack/adopt", "adopt()")}} verwenden.

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

Vielleicht haben Sie eine Entsorgungsaktion durchzuführen, die nicht mit einer bestimmten Ressource verbunden ist. Vielleicht möchten Sie einfach eine Nachricht mit "Alle Datenbankverbindungen geschlossen" protokollieren, wenn mehrere Verbindungen gleichzeitig geöffnet sind. In diesem Fall können Sie {{jsxref("DisposableStack/defer", "defer()")}} verwenden.

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

Sie möchten möglicherweise eine _bedingte_ Entsorgung durchführen – zum Beispiel nur beanspruchte Ressourcen entsorgen, wenn ein Fehler aufgetreten ist. In diesem Fall können Sie {{jsxref("DisposableStack/move", "move()")}} verwenden, um die Ressourcen zu erhalten, die sonst entsorgt würden.

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

`AsyncDisposableStack` ist ähnlich wie `DisposableStack`, aber für die Verwendung mit asynchron entsorgbaren Ressourcen. Seine `use()`-Methode erwartet ein asynchron entsorgbares Objekt, seine `adopt()`-Methode erwartet eine asynchrone Bereinigungsfunktion, und seine `dispose()`-Methode erwartet eine asynchrone Callback-Funktion. Es bietet eine `[Symbol.asyncDispose]()`-Methode. Sie können ihm weiterhin synchrone Ressourcen übergeben, wenn Sie eine Mischung aus synchronen und asynchronen haben.

Die Referenz zu {{jsxref("DisposableStack")}} enthält weitere Beispiele und Details.

## Fehlerbehandlung

Ein wesentlicher Anwendungsfall der Ressourcenmanagement Funktion ist sicherzustellen, dass Ressourcen immer entsorgt werden, auch wenn ein Fehler auftritt. Lassen Sie uns einige komplexe Fehlerbehandlungsszenarien untersuchen.

Wir starten mit dem folgenden Code, der durch die Verwendung von `using` robust gegen Fehler ist:

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

Nehmen wir an, dass `chunk` sich als `null` herausstellt. Dann wird `!chunk.done` einen `TypeError` auslösen, was dazu führt, dass die Funktion beendet wird. Bevor die Funktion beendet wird, wird `stream[Symbol.dispose]()` aufgerufen, was die Sperre des Streams freigibt.

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

Daher schluckt `using` keine Fehler: Alle auftretenden Fehler werden weiterhin ausgelöst, aber die Ressourcen werden kurz davor geschlossen. Was passiert nun, wenn die Ressourcenbereinigung selbst auch einen Fehler auslöst? Lassen Sie uns ein konstruiertes Beispiel verwenden:

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

Es gibt zwei Fehler, die im Aufruf von `doSomething()` generiert werden: einen Fehler, der während `doSomething` geworfen wird, und einen Fehler, der während der Entsorgung von `reader` aufgrund des ersten Fehlers geworfen wird. Beide Fehler werden zusammen geworfen, sodass das, was Sie fangen, ein {{jsxref("SuppressedError")}} ist. Dies ist ein spezieller Fehler, der zwei Fehler umschließt: die {{jsxref("SuppressedError/error", "Fehler")}}-Eigenschaft enthält den späteren Fehler, und die {{jsxref("SuppressedError/suppressed", "unterdrückte")}}-Eigenschaft enthält den früheren Fehler, der durch den späteren Fehler "unterdrückt" wird.

Wenn wir mehr als eine Ressource haben und _beide_ einen Fehler während der Entsorgung auslösen (dies sollte äußerst selten sein – es ist schon selten, dass die Entsorgung fehlschlägt!), dann wird jeder frühere Fehler durch den späteren Fehler unterdrückt, wodurch eine Kette von unterdrückten Fehlern entsteht.

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

- `reader` wird zuletzt freigegeben, daher ist sein Fehler der neueste und unterdrückt daher alles andere: er wird als `e.error` angezeigt.
- `writer` wird zuerst freigegeben, daher ist sein Fehler später als der ursprüngliche Austrittsfehler, aber früher als der `reader`-Fehler: er wird als `e.suppressed.error` angezeigt.
- Der ursprüngliche Fehler über "Failed to read" ist der früheste Fehler, sodass er als `e.suppressed.suppressed` angezeigt wird.

## Beispiele

### Automatisches Freigeben von Objekt-URLs

Im folgenden Beispiel erstellen wir eine [Objekt-URL](/de/docs/Web/URI/Reference/Schemes/blob) zu einem Blob (in einer realen Anwendung würde dieser Blob von irgendwoher abgerufen werden, z.B. aus einer Datei oder einer Fetch-Antwort), sodass wir den Blob als Datei herunterladen können. Um ein Ressourcenleck zu vermeiden, müssen wir die Objekt-URL mit [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) freigeben, wenn sie nicht mehr benötigt wird (das heißt, wenn der Download erfolgreich gestartet wurde). Da die URL selbst lediglich ein String ist und daher nicht das entsorgbare Protokoll implementiert, können wir `url` nicht direkt mit `using` deklarieren; stattdessen erstellen wir einen `DisposableStack`, der als Entsorger für `url` dient. Die Objekt-URL wird freigegeben, sobald `disposer` den Geltungsbereich verlässt, was entweder geschieht, wenn `link.click()` endet oder irgendwo ein Fehler auftritt.

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

Im folgenden Beispiel rufen wir eine Liste von Ressourcen gleichzeitig mit {{jsxref("Promise.all()")}} ab. `Promise.all()` schlägt fehl und lehnt das resultierende Versprechen ab, sobald eine Anfrage fehlgeschlagen ist; jedoch laufen die anderen noch ausstehenden Anfragen weiter, obwohl ihre Ergebnisse im Programm nicht zugänglich sind. Um zu verhindern, dass diese verbleibenden Anfragen unnötig Ressourcen verbrauchen, müssen wir sicherstellen, dass ausstehende Anfragen automatisch abgebrochen werden, wenn `Promise.all()` abschließt. Wir implementieren den Abbruch mit einem [`AbortController`](/de/docs/Web/API/AbortController) und übergeben dessen [`signal`](/de/docs/Web/API/AbortController/signal) an jeden `fetch()` Aufruf. Wenn `Promise.all()` erfüllt wird, kehrt die Funktion normal zurück und der Controller bricht ab, was harmlos ist, da keine ausstehende Anfrage abzubrechen ist; wenn `Promise.all()` abgelehnt wird und die Funktion einen Fehler wirft, bricht der Controller ab und alle ausstehenden Anfragen werden abgebrochen.

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

## Stolperfallen

Die Ressourcenentsorgungssyntax bietet viele starke Fehlerbehandlungsgarantien, die sicherstellen, dass die Ressourcen immer bereinigt werden, egal was passiert, aber es gibt einige Stolperfallen, auf die Sie möglicherweise stoßen:

- Vergessen von `using` oder `await using`. Die Ressourcenmanagement-Syntax ist nur da, um Ihnen zu helfen, wenn Sie wissen, dass Sie sie benötigen, aber es gibt nichts, das Ihnen sagt, wenn Sie sie vergessen, zu verwenden! Leider gibt es keinen guten Weg, dies vor der Tat zu verhindern, da es keine syntaktischen Hinweise gibt, dass etwas eine entsorgbare Ressource ist, und selbst bei entsorgbaren Ressourcen möchten Sie möglicherweise, sie ohne automatische Entsorgung deklarieren. Wahrscheinlich benötigen Sie einen Typprüfer in Kombination mit einem Linter, um diese Probleme zu erkennen, wie [typescript-eslint](https://typescript-eslint.io/) ([das immer noch plant, an diesem Feature zu arbeiten](https://github.com/typescript-eslint/typescript-eslint/issues/8255)).
- Verwendung nach Freigabe. Im Allgemeinen stellt die `using`-Syntax sicher, dass eine Ressource freigegeben wird, wenn sie den Geltungsbereich verlässt, aber es gibt viele Möglichkeiten, einen Wert über seine bindende Variable hinaus zu erhalten. JavaScript hat keinen Besitzmechanismus wie Rust, daher können Sie ein Alias deklarieren, das `using` nicht verwendet, oder die Ressource in einer [closure](/de/docs/Web/JavaScript/Guide/Closures) bewahren, usw. Die {{jsxref("Statements/using", "using")}} Referenz enthält viele Beispiele für solche Stolperfallen. Auch hier gibt es keinen guten Weg, dies in einem komplizierten Kontrollfluss richtig zu erkennen, daher müssen Sie vorsichtig sein.

Die Ressourcenmanagement-Funktion ist kein Allheilmittel. Sie ist definitiv eine Verbesserung gegenüber dem manuellen Aufrufen der Entsorgungsmethoden, aber sie ist nicht intelligent genug, um alle Ressourcenmanagementfehler zu verhindern. Sie müssen immer noch vorsichtig sein und die Semantik der Ressourcen, die Sie verwenden, verstehen.

## Fazit

Hier sind die Schlüsselelemente des Ressourcenmanagementsystems:

- {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}} Deklarationen für automatische Ressourcentsorgung.
- Die _entsorgbare_ und _asynchron entsorgbare_ Protokolle, die {{jsxref("Symbol.dispose")}} und {{jsxref("Symbol.asyncDispose")}} verwenden, die von den Ressourcen implementiert werden sollen.
- Die {{jsxref("DisposableStack")}} und {{jsxref("AsyncDisposableStack")}} Objekte für Fälle, in denen `using` und `await using` nicht geeignet sind.

Mit der ordnungsgemäßen Verwendung dieser APIs können Sie Systeme erstellen, die mit externen Ressourcen interagieren und stark und robust gegenüber allen Fehlerbedingungen bleiben, ohne viel Boilerplate-Code.

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Internationalization")}}

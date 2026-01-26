---
title: JavaScript-Ressourcenverwaltung
slug: Web/JavaScript/Guide/Resource_management
l10n:
  sourceCommit: 29b752c82ab56376109a1d8b851075349b7054c4
---

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Internationalization")}}

Dieser Leitfaden behandelt, wie man in JavaScript _Ressourcenverwaltung_ durchführt. Ressourcenverwaltung ist nicht genau dasselbe wie [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management), welches ein fortgeschritteneres Thema ist und normalerweise automatisch von JavaScript gehandhabt wird. Ressourcenverwaltung dreht sich um die Verwaltung von Ressourcen, die _nicht_ automatisch von JavaScript aufgeräumt werden. Manchmal ist es in Ordnung, einige ungenutzte Objekte im Speicher zu haben, da sie nicht in die Anwendungslogik eingreifen, aber Ressourcenlecks führen oft dazu, dass Dinge nicht funktionieren oder der Speicherverbrauch stark zunimmt. Daher ist dies keine optionale Optimierungsfunktion, sondern eine grundlegende Funktion zum Schreiben korrekter Programme!

> [!NOTE]
> Auch wenn Speicherverwaltung und Ressourcenverwaltung zwei getrennte Themen sind, können Sie manchmal als letzte Möglichkeit in das Speichermanagementsystem eingreifen, um Ressourcenverwaltung durchzuführen. Wenn Sie beispielsweise über ein JavaScript-Objekt verfügen, das einen Handle einer externen Ressource darstellt, können Sie ein {{jsxref("FinalizationRegistry")}} erstellen, um die Ressource zu bereinigen, wenn der Handle vom Garbage Collector entfernt wird, da es definitiv keine Möglichkeit gibt, auf die Ressource danach zuzugreifen. Es gibt jedoch keine Garantie, dass der Finalizer ausgeführt wird, daher ist es keine gute Idee, sich für kritische Ressourcen darauf zu verlassen.

## Problem

Betrachten wir zunächst einige Beispiele von Ressourcen, die verwaltet werden müssen:

- **Datei-Handles**: Ein Datei-Handle wird verwendet, um Bytes in einer Datei zu lesen und zu schreiben. Wenn Sie damit fertig sind, müssen Sie [`fileHandle.close()`](https://nodejs.org/api/fs.html#filehandleclose) aufrufen, andernfalls bleibt die Datei offen, selbst wenn das JS-Objekt nicht mehr zugänglich ist. Wie in der verlinkten Node.js-Dokumentation erwähnt:

  > Wenn ein `<FileHandle>` nicht mittels der `fileHandle.close()`-Methode geschlossen wird, versucht es, den Dateideskriptor automatisch zu schließen und eine Prozesswarnung auszugeben, um Speicherlecks zu verhindern. Bitte verlassen Sie sich nicht auf dieses Verhalten, da es unzuverlässig sein kann und die Datei möglicherweise nicht geschlossen wird. Schließen Sie `<FileHandle>`s stattdessen immer explizit. Node.js kann dieses Verhalten in Zukunft ändern.

- **Netzwerkverbindungen**: Einige Verbindungen, wie [`WebSocket`](/de/docs/Web/API/WebSocket) und [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), müssen geschlossen werden, wenn keine Nachrichten übertragen werden. Andernfalls bleibt die Verbindung offen, und Verbindungspools sind oft sehr begrenzt in ihrer Größe.
- **Stream-Leser**: Wenn Sie [`ReadableStreamDefaultReader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock) nicht aufrufen, wird der Stream gesperrt und erlaubt es einem anderen Leser nicht, ihn zu konsumieren.

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

Hier haben wir einen Stream, der drei Datenstücke ausgibt. Wir lesen vom Stream, bis wir den Buchstaben "b" finden. Wenn `readUntil` zurückkehrt, ist der Stream nur teilweise verbraucht, so dass wir in der Lage sein sollten, weiterhin mit einem anderen Leser daraus zu lesen. Wir haben jedoch vergessen, die Sperre freizugeben, sodass der Stream noch gesperrt ist und wir keinen weiteren Leser erstellen können, obwohl `reader` nicht mehr verfügbar ist.

Die Lösung in diesem Fall ist einfach: Rufen Sie `reader.releaseLock()` am Ende von `readUntil` auf. Aber einige Probleme bleiben bestehen:

- Inkonsistenz: Verschiedene Ressourcen haben verschiedene Möglichkeiten, sie freizugeben. Zum Beispiel haben wir `close()`, `releaseLock()`, `disconnect()` usw. Das Muster verallgemeinert sich nicht.
- Fehlerbehandlung: Was passiert, wenn der Aufruf von `reader.read()` fehlschlägt? Dann würde `readUntil` enden und nie zum Aufruf von `reader.releaseLock()` gelangen. Wir können dies mit {{jsxref("Statements/try...catch", "try...finally")}} beheben:

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

  Aber Sie müssen daran denken, dies jedes Mal zu tun, wenn Sie einige wichtige Ressourcen freigeben müssen.

- Scoping: Im obigen Beispiel ist `reader` bereits geschlossen, wenn wir die `try...finally`-Anweisung verlassen, aber es ist weiterhin in seinem Gültigkeitsbereich verfügbar. Das bedeutet, dass Sie es möglicherweise versehentlich verwenden, nachdem es geschlossen wurde.
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

  Dies führt jedoch zu weiteren Fehlerbehandlungsproblemen. Wenn `stream2.getReader()` eine Ausnahme auslöst, wird `reader1` nicht freigegeben; wenn `reader1.releaseLock()` einen Fehler auslöst, wird `reader2` nicht freigegeben. Dies bedeutet, dass wir tatsächlich jedes Ressourcenakquisitions-Freigabe-Paar in seiner eigenen `try...finally`-Anweisung einwickeln müssen:

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

Sie sehen, wie eine scheinbar harmlose Aufgabe des Aufrufs von `releaseLock` schnell zu verschachteltem Boilerplate-Code führen kann. Aus diesem Grund bietet JavaScript integrierte Sprachunterstützung für die Ressourcenverwaltung.

## Die `using` und `await using` Deklarationen

Die Lösung, die wir haben, sind zwei spezielle Arten von Variablendeklarationen: {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}}. Sie sind `const` ähnlich, aber sie geben die Ressource automatisch frei, wenn die Variable außer Gültigkeitsbereich gerät, solange die Ressource _wegwerfbar_ ist. Anhand des gleichen Beispiels wie oben können wir es so umschreiben:

```js
{
  using reader1 = stream1.getReader();
  using reader2 = stream2.getReader();

  // do something with reader1 and reader2

  // Before we exit the block, reader1 and reader2 are automatically released
}
```

> [!NOTE]
> Zum Zeitpunkt des Schreibens implementiert [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) nicht das Wegwerfprotokoll. Dies ist ein hypothetisches Beispiel.

Beachten Sie zuerst die zusätzlichen geschweiften Klammern um den Code. Dies erstellt einen neuen [Block Gültigkeitsbereich](/de/docs/Web/JavaScript/Reference/Statements/block) für die `using`-Deklarationen. Ressourcen, die mit `using` deklariert wurden, werden automatisch freigegeben, wenn sie außerhalb des Gültigkeitsbereichs von `using` gelangen, was in diesem Fall immer dann der Fall ist, wenn wir den Block verlassen, entweder weil alle Anweisungen ausgeführt wurden oder weil irgendwo ein Fehler oder `return`/`break`/`continue` vorliegt.

Das bedeutet, `using` kann nur in einem Gültigkeitsbereich verwendet werden, der eine klare Lebensdauer hat – nämlich kann es nicht auf der obersten Ebene eines Skripts verwendet werden, da Variablen auf der obersten Ebene eines Skripts im Gültigkeitsbereich für alle zukünftigen Skripte auf der Seite sind, was praktisch bedeutet, dass die Ressource nie freigegeben werden kann, wenn die Seite nie geladen wird. Sie können es jedoch auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwenden, da der Modulbereich endet, wenn das Modul die Ausführung beendet.

Jetzt wissen wir, _wann_ `using` aufräumt. Aber _wie_ wird das gemacht? `using` erfordert, dass die Ressource das _wegwerfbare_ Protokoll implementiert. Ein Objekt ist wegwerfbar, wenn es die Methode [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose) besitzt. Diese Methode wird ohne Argumente aufgerufen, um eine Bereinigung durchzuführen. Im Falle des Lesers kann die `[Symbol.dispose]`-Eigenschaft ein einfacher Alias oder Wrapper von `releaseLock` sein:

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

Durch das Wegwerfprotokoll kann `using` alle Ressourcen auf konsistente Weise entsorgen, ohne zu verstehen, um welche Art von Ressource es sich handelt.

Jeder Gültigkeitsbereich hat eine Liste von Ressourcen, die mit ihm verbunden sind, in der Reihenfolge, in der sie deklariert wurden. Wenn der Bereich verlassen wird, werden die Ressourcen in umgekehrter Reihenfolge entsorgt, indem ihre Methode `[Symbol.dispose]()` aufgerufen wird. Zum Beispiel wird im obigen Beispiel `reader1` vor `reader2` deklariert, also wird `reader2` zuerst, dann `reader1` entsorgt. Fehler, die beim Versuch, eine Ressource zu entsorgen, auftreten, verhindern nicht die Entsorgung anderer Ressourcen. Dies ist konsistent mit dem `try...finally`-Muster und respektiert mögliche Abhängigkeiten zwischen den Ressourcen.

`await using` ist sehr ähnlich zu `using`. Die Syntax sagt Ihnen, dass ein `await` irgendwo passiert – nicht wenn die Ressource deklariert wird, sondern tatsächlich, wenn sie entsorgt wird. `await using` erfordert, dass die Ressource _asynchron wegwerfbar_ ist, was bedeutet, dass sie eine Methode [`[Symbol.asyncDisposable]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose) hat. Diese Methode wird ohne Argumente aufgerufen und gibt ein Versprechen zurück, das aufgelöst wird, wenn die Bereinigung abgeschlossen ist. Dies ist nützlich, wenn die Bereinigung asynchron ist, wie `fileHandle.close()`, in welchem Fall das Ergebnis der Entsorgung nur asynchron bekannt sein kann.

```js
{
  await using fileHandle = open("file.txt", "w");
  await fileHandle.write("Hello");

  // fileHandle.close() is called and awaited
}
```

Da `await using` erfordert, ein `await` auszuführen, ist es nur in Kontexten zulässig, in denen `await` ist, was innerhalb von `async`-Funktionen und auf oberer Ebene von `await` in Modulen enthalten ist.

Ressourcen werden nacheinander und nicht gleichzeitig aufgeräumt: Der Rückgabewert der `[Symbol.asyncDispose]()`-Methode einer Ressource wird `awaitet`, bevor die nächste Ressource mit ihrer `[Symbol.asyncDispose]()`-Methode aufgerufen wird.

Einige Dinge zu beachten:

- `using` und `await using` sind _Opt-in_. Wenn Sie Ihre Ressource mit `let`, `const` oder `var` deklarieren, erfolgt keine automatische Entsorgung, genau wie bei anderen nicht wegwerfbaren Werten.
- `using` und `await using` erfordern, dass die Ressource wegwerfbar (oder asynchron wegwerfbar) ist. Wenn die Ressource die Methode `[Symbol.dispose]()` oder `[Symbol.asyncDispose]()` nicht hat, erhalten Sie einen `TypeError` in der Deklarationszeile. Die Ressource kann jedoch `null` oder `undefined` sein, sodass Sie Ressourcen bedingt erwerben können.
- Wie `const` können `using` und `await using` Variablen nicht neu zugewiesen werden, obwohl die Eigenschaften der Objekte, die sie enthalten, geändert werden können. Die Methode `[Symbol.dispose]()`/`[Symbol.asyncDispose]()` wird jedoch bereits zum Zeitpunkt der Deklaration gespeichert, sodass eine Änderung der Methode nach der Deklaration die Bereinigung nicht beeinflusst.
- Es gibt einige Fallstricke, wenn man Gültigkeitsbereiche mit der Lebensdauer von Ressourcen vermischt. Siehe [`using`](/de/docs/Web/JavaScript/Reference/Statements/using#examples) für einige Beispiele.

## Die `DisposableStack` und `AsyncDisposableStack` Objekte

`using` und `await using` sind spezielle Syntaxen. Syntaxen sind bequem und verbergen viel der Komplexität, aber manchmal müssen Sie Dinge manuell erledigen.

Ein häufiges Beispiel: Was, wenn Sie die Ressource nicht am Ende _dieses_ Gültigkeitsbereichs entsorgen möchten, sondern in einem _späteren_ Gültigkeitsbereich? Bedenken Sie dies:

```js
let reader;
if (someCondition) {
  reader = stream.getReader();
} else {
  reader = stream.getReader({ mode: "byob" });
}
```

Wie gesagt, `using` ist wie `const`: es muss initialisiert werden und kann nicht neu zugewiesen werden, also könnten Sie versuchen, dies zu tun:

```js
if (someCondition) {
  using reader = stream.getReader();
} else {
  using reader = stream.getReader({ mode: "byob" });
}
```

Dies bedeutet jedoch, dass alle Logik innerhalb des `if` oder `else` geschrieben werden muss, was zu vielen Duplikaten führt. Was wir tun möchten, ist die Ressource in einem Gültigkeitsbereich zu erwerben und zu registrieren, aber sie in einem anderen zu entsorgen. Wir können einen {{jsxref("DisposableStack")}} für diesen Zweck verwenden, der ein Objekt ist, das eine Sammlung von wegwerfbaren Ressourcen enthält und selbst wegwerfbar ist:

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

Vielleicht haben Sie eine Ressource, die noch nicht das wegwerfbare Protokoll implementiert, sie wird also von `using` abgelehnt. In diesem Fall können Sie {{jsxref("DisposableStack/adopt", "adopt()")}} verwenden.

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

Vielleicht haben Sie eine Entsorgungsaktion auszuführen, aber sie ist nicht an eine bestimmte Ressource "gebunden". Vielleicht möchten Sie nur eine Nachricht protokollieren, die sagt "Alle Datenbankverbindungen geschlossen", wenn mehrere Verbindungen gleichzeitig geöffnet sind. In diesem Fall können Sie {{jsxref("DisposableStack/defer", "defer()")}} verwenden.

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

Vielleicht möchten Sie eine _bedingte_ Entsorgung durchführen – zum Beispiel nur beanspruchte Ressourcen entsorgen, wenn ein Fehler aufgetreten ist. In diesem Fall können Sie {{jsxref("DisposableStack/move", "move()")}} verwenden, um die Ressourcen zu erhalten, die ansonsten entsorgt würden.

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

`AsyncDisposableStack` ist wie `DisposableStack`, aber zur Verwendung mit asynchron wegwerfbaren Ressourcen. Seine `use()`-Methode erwartet einen asynchronen Wegwerfer, seine `adopt()`-Methode erwartet eine asynchrone Bereinigungsfunktion und seine `dispose()`-Methode erwartet einen asynchronen Rückruf. Es stellt eine `[Symbol.asyncDispose]()`-Methode bereit. Sie können ihm weiterhin synchrone Ressourcen übergeben, wenn Sie eine Mischung aus synchronen und asynchronen haben.

Die Referenz für {{jsxref("DisposableStack")}} enthält weitere Beispiele und Details.

## Fehlerbehandlung

Ein Hauptanwendungsfall der Ressourcenverwaltungsfunktion besteht darin, sicherzustellen, dass Ressourcen immer freigegeben werden, selbst wenn ein Fehler auftritt. Lassen Sie uns einige komplexe Fehlermanagementszenarien untersuchen.

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

Angenommen, `chunk` stellt sich als `null` heraus. Dann wird `!chunk.done` einen `TypeError` auslösen, der dazu führt, dass die Funktion beendet wird. Bevor die Funktion beendet wird, wird `stream[Symbol.dispose]()` aufgerufen, was die Sperre auf den Stream freigibt.

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

Somit verschluckt `using` keine Fehler: Alle auftretenden Fehler werden weiterhin geworfen, aber die Ressourcen werden direkt vorher geschlossen. Was passiert nun, wenn die Ressourcenbereinigung selbst auch einen Fehler auslöst? Lassen Sie uns ein konstruiertes Beispiel verwenden:

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

Im `doSomething()`-Aufruf werden zwei Fehler generiert: ein Fehler, der während `doSomething` ausgelöst wird, und ein Fehler, der während der Entsorgung von `reader` aufgrund des ersten Fehlers ausgelöst wird. Beide Fehler werden gemeinsam geworfen, so dass das, was Sie abgefangen haben, ein {{jsxref("SuppressedError")}} ist. Dies ist ein spezieller Fehler, der zwei Fehler umhüllt: Die Eigenschaft {{jsxref("SuppressedError/error", "error")}} enthält den späteren Fehler, und die Eigenschaft {{jsxref("SuppressedError/suppressed", "suppressed")}} enthält den früheren Fehler, der durch den späteren Fehler "unterdrückt" wird.

Wenn wir mehr als eine Ressource haben und _beide_ von ihnen während der Entsorgung einen Fehler werfen (was äußerst selten sein sollte – es ist bereits selten, dass die Entsorgung fehlschlägt!), dann wird jeder frühere Fehler durch den späteren Fehler unterdrückt, wodurch eine Kette von unterdrückten Fehlern entsteht.

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

- Der `reader` wird zuletzt freigegeben, sodass sein Fehler der neueste ist und alles andere unterdrückt: Er wird als `e.error` angezeigt.
- Der `writer` wird zuerst freigegeben, sodass sein Fehler später als der ursprüngliche austretende Fehler ist, aber früher als der `reader`-Fehler: Er wird als `e.suppressed.error` angezeigt.
- Der ursprüngliche Fehler über "Failed to read" ist der früheste Fehler, sodass er als `e.suppressed.suppressed` angezeigt wird.

## Beispiele

### Automatisches Freigeben von Objekt-URLs

Im folgenden Beispiel erstellen wir eine [Objekt-URL](/de/docs/Web/URI/Reference/Schemes/blob) zu einem Blob (in einer realen Anwendung würde dieser Blob von irgendwoher abgerufen werden, z. B. eine Datei oder eine Fetch-Antwort), so dass wir den Blob als Datei herunterladen können. Um ein Ressourcenleck zu verhindern, müssen wir die Objekt-URL mit [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) freigeben, wenn sie nicht mehr benötigt wird (das heißt, wenn der Download erfolgreich gestartet wurde). Da die URL selbst nur eine Zeichenkette ist und daher nicht das wegwerfbare Protokoll implementiert, können wir `url` nicht direkt mit `using` deklarieren; daher erstellen wir einen `DisposableStack`, um als Entsorger für `url` zu dienen. Die Objekt-URL wird freigegeben, sobald `disposer` außer Gültigkeitsbereich gerät, was entweder der Fall ist, wenn `link.click()` beendet ist oder irgendwo ein Fehler auftritt.

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

Im folgenden Beispiel verwenden wir [fetch](/de/docs/Web/API/Window/fetch), um eine Liste von Ressourcen mit Hilfe von {{jsxref("Promise.all()")}} gleichzeitig abzurufen. `Promise.all()` schlägt fehl und lehnt das resultierende Versprechen ab, sobald eine Anfrage fehlgeschlagen ist; jedoch laufen die anderen ausstehenden Anfragen weiter, obwohl ihre Ergebnisse für das Programm nicht zugänglich sind. Um zu verhindern, dass diese verbleibenden Anfragen unnötig Ressourcen verbrauchen, müssen wir automatisch laufende Anfragen abbrechen, wann immer `Promise.all()` abgeschlossen wird. Wir implementieren die Stornierung mit einem [`AbortController`](/de/docs/Web/API/AbortController) und übergeben dessen [`signal`](/de/docs/Web/API/AbortController/signal) jedem `fetch()`-Aufruf. Wenn `Promise.all()` erfüllt wird, gibt die Funktion normal zurück und der Controller bricht ab, was harmlos ist, da es keine ausstehende Anfrage zu stornieren gibt; wenn `Promise.all()` abgelehnt und die Funktion geworfen wird, bricht der Controller ab und storniert alle ausstehenden Anfragen.

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

## Fallgruben

Die Ressourcenerstellungssyntax bietet viele starke Fehlerbehandlungsgarantien, die sicherstellen, dass die Ressourcen immer aufgeräumt werden, egal was passiert, aber es gibt einige Fallstricke, auf die Sie dennoch stoßen könnten:

- Vergessen, `using` oder `await using` zu verwenden. Die Ressourcenverwaltungssyntax ist nur dazu da, Ihnen zu helfen, wenn Sie wissen, dass Sie sie benötigen, aber es gibt nichts, das Sie daran erinnert, wenn Sie vergessen, sie zu verwenden! Leider gibt es keinen guten Weg, um dies vorab zu verhindern, da es keine syntaktischen Hinweise darauf gibt, dass etwas eine wegwerfbare Ressource ist, und selbst bei wegwerfbaren Ressourcen möchten Sie sie möglicherweise ohne automatische Entsorgung deklarieren. Wahrscheinlich benötigen Sie einen Typrüfgerät in Kombination mit einem Linter, um diese Probleme zu erkennen, wie [typescript-eslint](https://typescript-eslint.io/) ([welches noch plant, an dieser Funktion zu arbeiten](https://github.com/typescript-eslint/typescript-eslint/issues/8255)).
- Verwendung nach Freigabe. Im Allgemeinen stellt die `using`-Syntax sicher, dass eine Ressource freigegeben wird, wenn sie außer Gültigkeitsbereich gerät, aber es gibt viele Möglichkeiten, einen Wert über seine Bindungsvariable hinaus zu erhalten. JavaScript verfügt nicht über einen Besitzmechanismus wie Rust, sodass Sie ein Alias deklarieren können, der `using` nicht verwendet, oder die Ressource in einer [Schließung](/de/docs/Web/JavaScript/Guide/Closures) speichern usw. Der {{jsxref("Statements/using", "using")}}-Referenz enthält viele Beispiele für solche Fallstricke. Auch hier gibt es keinen guten Weg, um dies in einem komplizierten Kontrollfluss richtig zu erkennen, daher müssen Sie vorsichtig sein.

Die Ressourcenverwaltungsfunktion ist kein Allheilmittel. Sie ist definitiv eine Verbesserung gegenüber dem manuellen Aufruf der Entsorgungsmethoden, aber sie ist nicht intelligent genug, um alle Ressourcenverwaltungsfehler zu verhindern. Sie müssen dennoch vorsichtig sein und die Semantik der von Ihnen verwendeten Ressourcen verstehen.

## Fazit

Hier sind die Schlüsselelemente des Ressourcenverwaltungssystems:

- {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}} Deklarationen zur automatischen Ressourcenentsorgung.
- Die _wegwerfbare_ und _asynchron wegwerfbare_ Protokolle, die jeweils das {{jsxref("Symbol.dispose")}} und {{jsxref("Symbol.asyncDispose")}} verwenden, um von Ressourcen implementiert zu werden.
- Die {{jsxref("DisposableStack")}} und {{jsxref("AsyncDisposableStack")}} Objekte für Fälle, in denen `using` und `await using` nicht geeignet sind.

Mit der richtigen Nutzung dieser APIs können Sie Systeme erstellen, die mit externen Ressourcen interagieren und unter allen Fehlerbedingungen robust bleiben, ohne dass viel Boilerplate-Code erforderlich ist.

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Internationalization")}}

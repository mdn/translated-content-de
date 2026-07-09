---
title: WebAssembly.Suspending
slug: WebAssembly/Reference/JavaScript_interface/Suspending
l10n:
  sourceCommit: 3934778cdfee0d5d2ae4c93b9f5568701008a628
---

Das **`WebAssembly.Suspending`** Objekt repräsentiert eine Suspensionsfunktion — eine asynchrone ({{jsxref("Promise")}}-basierte) JavaScript-Funktion, die, wenn sie in ein Wasm-Modul importiert und von innen aufgerufen wird, zur Folge hat, dass die Ausführung unterbrochen wird, bis das Promise aufgelöst wird.

> [!NOTE]
> Der einzige Zweck von `WebAssembly.Suspending` besteht darin zu kennzeichnen, welche importierten Funktionen Suspensionsfunktionen sind, wenn sie in ein Wasm-Modul-Importobjekt übergeben werden.

## Konstruktor

- [`WebAssembly.Suspending()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending/Suspending)
  - : Erzeugt eine neue Instanz eines `Suspending` Objekts.

## Beschreibung

Die `Suspending`-Schnittstelle — zusammen mit ihrer Gegenstücksmethode [`WebAssembly.promising()`](/de/docs/WebAssembly/Reference/JavaScript_interface/promising_static) — ermöglicht es WebAssembly-Modulen, mit asynchronen JavaScript-Hostfunktionen zu interagieren.

Um diese Funktionalität zu nutzen, müssen Sie `Promise`-basierte Funktionen zuerst in einen `WebAssembly.Suspending()` Konstruktoraufruf einwickeln, wenn Sie sie importieren:

```js
function someAsyncFunction() {
  return fetch("https://example.com").then((result) => {
    // ...
  });
}

const importObj = {
  someAsyncFunction: new WebAssembly.Suspending(someAsyncFunction),
};
```

Dies erzeugt eine Suspensionsfunktion. Es sind keine Änderungen erforderlich, um sie im Wasm-Modul zu verwenden: Wenn sie aufgerufen wird, wird die Ausführung unterbrochen, bis das `Promise` aufgelöst wird und dann mit dem auf dem Stack verfügbaren Auflösungswert fortgesetzt. Beim Exportieren einer Wasm-Funktion, die auf der suspensiven importierten Funktion basiert, zurück zum JavaScript-Host, müssen Sie den Export in einem `WebAssembly.promising()` Aufruf einwickeln:

```js
WebAssembly.instantiateStreaming(fetch("module.wasm"), { importObj }).then(
  (result) => {
    const fromWasm = WebAssembly.promising(
      result.instance.exports.exportedFunc,
    );
    fromWasm().then((result) => {
      // ...
    });
  },
);
```

Dies verwandelt effektiv den Export in ein Promise, das sich auflöst, sobald die importierte JavaScript-Funktion sich auflöst und die Ausführung der exportierten Wasm-Funktion abgeschlossen werden kann.

## Beispiele

### Integration eines Promises in eine Wasm-Anwendung

Dieses Beispiel zeigt, wie Sie eine auf JavaScript-Promise basierende Funktion in ein Wasm-Modul importieren, sie innerhalb einer exportierten Wasm-Funktion aufrufen und dann die exportierte Funktion vom JavaScript-Host aus aufrufen, um ein Ergebnis zu erhalten.

#### HTML

In unserem Markup fügen wir ein {{htmlelement("button")}}-Element hinzu, um die Anwendung zu starten, und ein {{htmlelement("p")}}-Element, um das erhaltene Ergebnis auszugeben.

```html live-sample___jspi
<button>Run application</button>
<hr />
<p></p>
```

#### Wasm

Unser Wasm-Modul importiert zuerst eine `double()` Funktion, die einen [`i32`](/de/docs/WebAssembly/Reference/Value_types/i32) Parameter annimmt und ein `i32` Ergebnis zurückgibt. Es definiert dann eine exportierte `add()` Funktion, die ebenfalls ein `i32` übernimmt und zurückgibt. Die `add()` Funktion schiebt eine Konstante auf den Stack und übergibt diese an die importierte `double()` Funktion, dann [addiert](/de/docs/WebAssembly/Reference/Numeric/add) sie das Ergebnis zu ihrem Parameter.

```wat live-sample___jspi
(module
  (import "importObj" "double" (func $double (param i32) (result i32)))
  (func (export "add") (param i32) (result i32)
    (i32.const 20)
    call $double
    (local.get 0)

    i32.add ;; add the two values
  )
)
```

#### JavaScript

In unserem Script greifen wir zuerst auf die `<p>` und `<button>` Elemente zu:

```js live-sample___jspi
const outputElem = document.querySelector("p");
const btn = document.querySelector("button");
```

Als nächstes definieren wir unsere `double()` Funktion — diese nimmt eine einzelne Zahl als Parameter an und gibt ein `Promise` zurück, das sich mit einem Wert, der dem doppelten Eingabewert nach einem dreisekündigen [Timeout](/de/docs/Web/API/Window/setTimeout) entspricht, auflöst.

```js live-sample___jspi
function double(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = num * 2;
      resolve(result);
    }, 3000);
  });
}
```

Bei der Definition des Modul-Importobjekts wickeln wir unsere `double()` Funktion in einen `new WebAssembly.Suspending()` Konstruktoraufruf ein, um dem Browser anzuzeigen, dass die Ausführung unterbrochen werden soll, wenn diese Funktion im Wasm-Modul aufgerufen wird, bis das Promise aufgelöst ist.

```js live-sample___jspi
const importObj = {
  double: new WebAssembly.Suspending(double),
};
```

Wenn der Button geklickt wird, kompilieren und instanziieren wir das Modul mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Methode. Wenn das Ergebnis zurückgegeben wird, wickeln wir die exportierte `add()` Funktion in einen `WebAssembly.promising()` Aufruf ein und speichern das zurückgegebene Promise in einem `fromWasm` Wert.

Wir rufen dann `fromWasm(10)` auf, um `add()` mit einem Parameter von `10` zu rufen. Sobald das Promise gelöst ist, geben wir das Ergebnis im `<p>` Element aus.

```js live-sample___jspi
btn.addEventListener("click", () => {
  WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { importObj }).then(
    (result) => {
      const fromWasm = WebAssembly.promising(result.instance.exports.add);
      fromWasm(10).then((result) => {
        outputElem.textContent = result;
      });
    },
  );
});
```

#### Ergebnis

{{embedlivesample("jspi", "100%", 100)}}

Drücken Sie den Button, um die Anwendung zu starten. Nach drei Sekunden sollte der Wert `50` in den Absatz geschrieben werden. Dies liegt daran, dass die exportierte `add()` Funktion einen konstanten Wert von `20` auf den Stack legt, dann die importierte `double()` Funktion aufruft, die die Eingabezahl nach drei Sekunden verdoppelt und den Wert `40` auf den Stack legt. Dieser Wert wird dann zum Parameter der `add()` Funktion hinzugefügt, welcher `10` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebAssembly.promising()`](/de/docs/WebAssembly/Reference/JavaScript_interface/promising_static)
- [WebAssembly](/de/docs/WebAssembly) Übersicht

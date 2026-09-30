---
title: "EventTarget: Methode addEventListener()"
short-title: addEventListener()
slug: Web/API/EventTarget/addEventListener
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die Methode **`addEventListener()`** der Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget) registriert eine Funktion, die aufgerufen wird, sobald das angegebene Ereignis an das Ziel übermittelt wird.

Häufige Ziele sind [`Element`](/de/docs/Web/API/Element), dessen untergeordnete Elemente, [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window). Als Ziel kommt jedoch jedes Objekt infrage, das Ereignisse unterstützt, beispielsweise [`IDBRequest`](/de/docs/Web/API/IDBRequest).

> [!NOTE]
> Die Methode `addEventListener()` ist die _empfohlene_ Methode zum Registrieren eines Event-Listeners. Sie bietet folgende Vorteile:
>
> - Für ein Ereignis können mehrere Handler hinzugefügt werden. Das ist besonders nützlich für Bibliotheken, JavaScript-Module und andere Arten von Code, die mit weiteren Bibliotheken oder Erweiterungen zusammenarbeiten müssen.
> - Anders als bei der Verwendung einer `onXYZ`-Eigenschaft lässt sich genauer steuern, in welcher Phase der Listener aktiviert wird (Capturing oder Bubbling).
> - Sie funktioniert mit jedem Ereignisziel, nicht nur mit HTML- oder SVG-Elementen.

Die Methode `addEventListener()` fügt der Liste der Event-Listener für den angegebenen Ereignistyp auf dem [`EventTarget`](/de/docs/Web/API/EventTarget), auf dem sie aufgerufen wird, eine Funktion oder ein Objekt hinzu, das eine `handleEvent()`-Funktion implementiert. Befindet sich die Funktion oder das Objekt bereits in der Liste der Event-Listener für dieses Ziel, wird sie beziehungsweise es nicht erneut hinzugefügt.

> [!NOTE]
> Wenn eine bestimmte anonyme Funktion in der Liste der für ein Ziel registrierten Event-Listener steht und später im Code bei einem `addEventListener`-Aufruf eine identisch aussehende anonyme Funktion übergeben wird, wird die zweite Funktion _ebenfalls_ zur Liste der Event-Listener dieses Ziels hinzugefügt.
>
> Anonyme Funktionen sind nämlich nicht identisch, selbst wenn sie mit demselben unveränderten Quellcode definiert werden, der wiederholt ausgeführt wird – **auch innerhalb einer Schleife**.
>
> Das wiederholte Definieren derselben unbenannten Funktion kann in solchen Fällen problematisch sein. (Siehe [Speicherprobleme](#speicherprobleme) weiter unten.)

Wird einem [`EventTarget`](/de/docs/Web/API/EventTarget) innerhalb eines anderen Listeners – also während der Verarbeitung eines Ereignisses – ein Event-Listener hinzugefügt, löst dieses Ereignis den neuen Listener nicht aus. Der neue Listener kann jedoch in einer späteren Phase der Ereignisausbreitung ausgelöst werden, beispielsweise während der Bubbling-Phase.

## Syntax

```js-nolint
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

### Parameter

- `type`
  - : Eine Zeichenfolge, bei der die Groß- und Kleinschreibung beachtet wird und die den zu überwachenden [Ereignistyp](/de/docs/Web/API/Document_Object_Model/Events) angibt.
- `listener`
  - : Das Objekt, das eine Benachrichtigung (ein Objekt, das die Schnittstelle [`Event`](/de/docs/Web/API/Event) implementiert) erhält, wenn ein Ereignis des angegebenen Typs auftritt. Der Wert muss `null`, ein Objekt mit einer `handleEvent()`-Methode oder eine JavaScript-[Funktion](/de/docs/Web/JavaScript/Guide/Functions) sein. Einzelheiten zum Callback selbst finden Sie unter [Der Event-Listener-Callback](#der_event-listener-callback).
- `options` {{optional_inline}}
  - : Ein Objekt, das Eigenschaften des Event-Listeners festlegt. Folgende Optionen sind verfügbar:
    - `capture` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass Ereignisse dieses Typs an den registrierten `listener` übermittelt werden, bevor sie an ein darunter liegendes `EventTarget` im DOM-Baum übermittelt werden. Ist die Option nicht angegeben, ist der Standardwert `false`.
    - `once` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass der `listener` nach dem Hinzufügen höchstens einmal aufgerufen werden soll. Bei `true` wird der `listener` beim Aufruf automatisch entfernt. Ist die Option nicht angegeben, ist der Standardwert `false`.
    - `passive` {{optional_inline}}
      - : Ein boolescher Wert, der bei `true` angibt, dass die durch `listener` angegebene Funktion niemals [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft. Ruft ein passiver Listener `preventDefault()` auf, hat dies keine Wirkung und möglicherweise wird eine Warnung in der Konsole ausgegeben.

        Ist diese Option nicht angegeben, ist ihr Standardwert `false` – mit Ausnahme von [`wheel`](/de/docs/Web/API/Element/wheel_event)-, [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event)-, [`touchstart`](/de/docs/Web/API/Element/touchstart_event)- und [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignissen auf [`Window`](/de/docs/Web/API/Window), [`Document`](/de/docs/Web/API/Document), [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) und [`Document.body`](/de/docs/Web/API/Document/body). Für diese ist der Standardwert `true`. Weitere Informationen finden Sie unter [Passive Listener verwenden](#passive_listener_verwenden).

    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Der Listener wird entfernt, wenn die Methode [`abort()`](/de/docs/Web/API/AbortController/abort) des [`AbortController`](/de/docs/Web/API/AbortController) aufgerufen wird, zu dem das `AbortSignal` gehört. Ist die Option nicht angegeben, ist dem Listener kein `AbortSignal` zugeordnet.

- `useCapture` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob Ereignisse dieses Typs an den registrierten `listener` übermittelt werden, _bevor_ sie an ein darunter liegendes `EventTarget` im DOM-Baum übermittelt werden. Ereignisse, die sich durch den Baum nach oben ausbreiten, lösen keinen Listener aus, der Capturing verwendet. Bubbling und Capturing sind zwei Arten der Ausbreitung von Ereignissen, die in einem Element auftreten, das in einem anderen Element verschachtelt ist, wenn beide Elemente einen Handler für das Ereignis registriert haben. Der Modus der Ereignisausbreitung bestimmt, in welcher Reihenfolge die Elemente das Ereignis empfangen. Eine ausführliche Erklärung finden Sie in der [DOM-Spezifikation](https://dom.spec.whatwg.org/#introduction-to-dom-events) und unter [Reihenfolge von JavaScript-Ereignissen](https://www.quirksmode.org/js/events_order.html#link4).
    Ist `useCapture` nicht angegeben, ist der Standardwert `false`.

    > [!NOTE]
    > Bei Event-Listenern, die am Ereignisziel registriert sind, befindet sich das Ereignis in der Zielphase und nicht in der Capturing- oder Bubbling-Phase.
    > Event-Listener in der _Capturing_-Phase werden vor Event-Listenern in der Ziel- und Bubbling-Phase aufgerufen.

- `wantsUntrusted` {{optional_inline}} {{non-standard_inline}}
  - : Ein Firefox-(Gecko-)spezifischer Parameter. Bei `true` empfängt der Listener synthetische Ereignisse, die von Webinhalten ausgelöst werden (der Standardwert ist `false` für Browser-{{Glossary("chrome", "Chrome")}} und `true` für gewöhnliche Webseiten). Dieser Parameter ist für Code in Add-ons sowie im Browser selbst nützlich.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Hinweise zur Verwendung

### Der Event-Listener-Callback

Ein Event-Listener kann entweder als Callback-Funktion oder als Objekt angegeben werden, dessen `handleEvent()`-Methode als Callback-Funktion dient.

Die Callback-Funktion selbst hat dieselben Parameter und denselben Rückgabewert wie die Methode `handleEvent()`: Sie akzeptiert einen einzelnen Parameter – ein von [`Event`](/de/docs/Web/API/Event) abgeleitetes Objekt, das das aufgetretene Ereignis beschreibt – und gibt nichts zurück.

Ein Event-Handler-Callback, der sowohl [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) als auch [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) verarbeiten kann, könnte beispielsweise so aussehen:

```js
function handleEvent(event) {
  if (event.type === "fullscreenchange") {
    /* handle a full screen toggle */
  } else {
    /* handle a full screen toggle error */
  }
}
```

### Der Wert von „this“ innerhalb des Handlers

Häufig soll auf das Element zugegriffen werden, auf dem der Event-Handler ausgelöst wurde, etwa wenn ein allgemeiner Handler für mehrere ähnliche Elemente verwendet wird.

Wird eine Handler-Funktion mit `addEventListener()` an ein Element gebunden, verweist {{jsxref("this")}} innerhalb des Handlers auf dieses Element. Der Wert entspricht dem der Eigenschaft `currentTarget` des Ereignisarguments, das an den Handler übergeben wird.

```js
myElement.addEventListener("click", function (e) {
  console.log(this.className); // logs the className of myElement
  console.log(e.currentTarget === this); // logs `true`
});
```

Zur Erinnerung: [Pfeilfunktionen haben keinen eigenen `this`-Kontext](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

```js
myElement.addEventListener("click", (e) => {
  console.log(this.className); // WARNING: `this` is not `myElement`
  console.log(e.currentTarget === this); // logs `false`
});
```

Wird ein Event-Handler (beispielsweise [`onclick`](/de/docs/Web/API/Element/click_event)) im HTML-Quelltext an einem Element angegeben, wird der JavaScript-Code im Attributwert intern in eine Handler-Funktion eingebettet, die den Wert von `this` auf eine mit `addEventListener()` konsistente Weise bindet. Ein `this` innerhalb dieses Codes verweist auf das Element.

```html
<table id="my-table" onclick="console.log(this.id);">
  <!-- `this` refers to the table; logs 'my-table' -->
  …
</table>
```

Beachten Sie, dass sich der Wert von `this` innerhalb einer Funktion, die vom Code im Attributwert _aufgerufen wird_, nach den [üblichen Regeln](/de/docs/Web/JavaScript/Reference/Operators/this) richtet. Das folgende Beispiel zeigt dies:

```html
<script>
  function logID() {
    console.log(this.id);
  }
</script>
<table id="my-table" onclick="logID();">
  <!-- when called, `this` will refer to the global object -->
  …
</table>
```

Innerhalb von `logID()` verweist `this` auf das globale Objekt [`Window`](/de/docs/Web/API/Window) (oder hat im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) den Wert `undefined`).

#### „this“ mit bind() festlegen

Mit der Methode {{jsxref("Function.prototype.bind()")}} können Sie einen festen `this`-Kontext für alle späteren Aufrufe festlegen. So vermeiden Sie Probleme, wenn unklar ist, welchen Wert `this` abhängig vom Aufrufkontext der Funktion haben wird. Beachten Sie jedoch, dass Sie eine Referenz auf den Listener behalten müssen, damit Sie ihn später entfernen können.

Dies ist ein Beispiel mit und ohne `bind()`:

```js
class Something {
  name = "Something Good";
  constructor(element) {
    // bind causes a fixed `this` context to be assigned to `onclick2`
    this.onclick2 = this.onclick2.bind(this);
    element.addEventListener("click", this.onclick1);
    element.addEventListener("click", this.onclick2); // Trick
  }
  onclick1(event) {
    console.log(this.name); // undefined, as `this` is the element
  }
  onclick2(event) {
    console.log(this.name); // 'Something Good', as `this` is bound to the Something instance
  }
}

const s = new Something(document.body);
```

Eine weitere Möglichkeit besteht darin, Ereignisse mit einer speziellen Funktion namens `handleEvent()` abzufangen:

```js
class Something {
  name = "Something Good";
  constructor(element) {
    // Note that the listeners in this case are `this`, not this.handleEvent
    element.addEventListener("click", this);
    element.addEventListener("dblclick", this);
  }
  handleEvent(event) {
    console.log(this.name); // 'Something Good', as this is bound to newly created object
    switch (event.type) {
      case "click":
        // some code here…
        break;
      case "dblclick":
        // some code here…
        break;
    }
  }
}

const s = new Something(document.body);
```

Eine andere Möglichkeit, mit der Referenz von `this` umzugehen, ist eine Pfeilfunktion, die keinen eigenen `this`-Kontext erzeugt.

```js
class SomeClass {
  name = "Something Good";

  register() {
    window.addEventListener("keydown", (e) => {
      this.someMethod(e);
    });
  }

  someMethod(e) {
    console.log(this.name);
    switch (e.code) {
      case "ArrowUp":
        // some code here…
        break;
      case "ArrowDown":
        // some code here…
        break;
    }
  }
}

const myObject = new SomeClass();
myObject.register();
```

### Daten an einen Event-Listener übergeben und aus ihm erhalten

Event-Listener akzeptieren nur ein Argument: ein [`Event`](/de/docs/Web/API/Event) oder eine Unterklasse von `Event`. Dieses Argument wird automatisch an den Listener übergeben; der Rückgabewert wird ignoriert. Um Daten an einen Event-Listener zu übergeben und aus ihm zu erhalten, müssen Sie daher [Closures](/de/docs/Web/JavaScript/Guide/Closures) verwenden, statt die Daten über Parameter und Rückgabewerte auszutauschen.

Die als Event-Listener übergebenen Funktionen haben Zugriff auf alle Variablen, die in den äußeren Gültigkeitsbereichen deklariert sind, welche die Funktion umschließen.

```js
const myButton = document.getElementById("my-button-id");
let someString = "Data";

myButton.addEventListener("click", () => {
  console.log(someString);
  // 'Data' on first click,
  // 'Data Again' on second click

  someString = "Data Again";
});

console.log(someString); // Expected Value: 'Data' (will never output 'Data Again')
```

Weitere Informationen zu den Gültigkeitsbereichen von Funktionen finden Sie im [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions#function_scopes_and_closures).

### Speicherprobleme

```js
const elems = document.getElementsByTagName("*");

// Case 1
for (const elem of elems) {
  elem.addEventListener("click", (e) => {
    // Do something
  });
}

// Case 2
function processEvent(e) {
  // Do something
}

for (const elem of elems) {
  elem.addEventListener("click", processEvent);
}
```

Im ersten Fall oben wird bei jedem Schleifendurchlauf eine neue (anonyme) Handler-Funktion erstellt. Im zweiten Fall wird dieselbe zuvor deklarierte Funktion als Event-Handler verwendet. Das verbraucht weniger Speicher, da nur eine Handler-Funktion erstellt wird. Außerdem lässt sich im ersten Fall [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) nicht aufrufen, weil keine Referenz auf die anonyme Funktion erhalten bleibt (beziehungsweise hier auf keine der mehreren anonymen Funktionen, die die Schleife möglicherweise erstellt). Im zweiten Fall ist der Aufruf von `myElement.removeEventListener("click", processEvent, false)` möglich, da `processEvent` die Funktionsreferenz ist.

Im Hinblick auf den Speicherverbrauch ist das eigentliche Problem nicht, dass keine Funktionsreferenz erhalten bleibt, sondern dass keine _statische_ Funktionsreferenz erhalten bleibt.

### Passive Listener verwenden

Hat ein Ereignis eine Standardaktion – beispielsweise ein [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, das standardmäßig den Container scrollt –, kann der Browser diese Aktion im Allgemeinen erst starten, wenn der Event-Listener beendet ist. Der Browser weiß vorher nicht, ob der Listener die Standardaktion durch einen Aufruf von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) verhindern wird. Dauert die Ausführung des Listeners zu lange, kann dies eine merkliche Verzögerung verursachen, auch {{Glossary("jank", "Jank")}} genannt, bevor die Standardaktion ausgeführt werden kann.

Indem ein Event-Listener die Option `passive` auf `true` setzt, erklärt er, dass er die Standardaktion nicht verhindern wird. Der Browser kann sie daher sofort starten, ohne auf das Ende des Listeners zu warten. Ruft der Listener dennoch [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, bleibt dies wirkungslos.

Damit auch bestehender Code von der besseren Scroll-Leistung passiver Listener profitiert, legt die Spezifikation für `addEventListener()` den Standardwert der Option `passive` für [`wheel`](/de/docs/Web/API/Element/wheel_event)-, [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event)-, [`touchstart`](/de/docs/Web/API/Element/touchstart_event)- und [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignisse auf [`Window`](/de/docs/Web/API/Window), [`Document`](/de/docs/Web/API/Document), [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) und [`Document.body`](/de/docs/Web/API/Document/body) auf `true` fest. Für andere Ereignisse und Ziele ist der Standardwert `false`. Ein passiver Listener kann [das Ereignis nicht abbrechen](/de/docs/Web/API/Event/preventDefault), sodass der Browser nicht auf sein Ende warten muss, bevor er scrollt.

Wenn Sie dieses Verhalten überschreiben und sicherstellen möchten, dass die Option `passive` den Wert `false` hat, müssen Sie sie deshalb ausdrücklich auf `false` setzen, statt sich auf den Standardwert zu verlassen.

Bei einem einfachen [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis müssen Sie sich über den Wert von `passive` keine Gedanken machen. Da dieses Ereignis nicht abgebrochen werden kann, können Event-Listener die Darstellung der Seite ohnehin nicht blockieren.

Ein Beispiel für die Auswirkungen passiver Listener finden Sie unter [Scroll-Leistung mit passiven Listenern verbessern](#scroll-leistung_mit_passiven_listenern_verbessern).

## Beispiele

### Einen einfachen Listener hinzufügen

Dieses Beispiel zeigt, wie Sie mit `addEventListener()` Mausklicks auf einem Element überwachen.

#### HTML

```html
<table id="outside">
  <tbody>
    <tr>
      <td id="t1">one</td>
    </tr>
    <tr>
      <td id="t2">two</td>
    </tr>
  </tbody>
</table>
```

#### JavaScript

```js
// Function to change the content of t2
function modifyText() {
  const t2 = document.getElementById("t2");
  const isNodeThree = t2.firstChild.nodeValue === "three";
  t2.firstChild.nodeValue = isNodeThree ? "two" : "three";
}

// Add event listener to table
const el = document.getElementById("outside");
el.addEventListener("click", modifyText);
```

In diesem Code ist `modifyText()` ein mit `addEventListener()` registrierter Listener für `click`-Ereignisse. Ein Klick an beliebiger Stelle in der Tabelle breitet sich zum Handler aus und führt `modifyText()` aus.

#### Ergebnis

{{EmbedLiveSample('Add_a_simple_listener')}}

### Einen abbrechbaren Listener hinzufügen

Dieses Beispiel zeigt, wie Sie mit `addEventListener()` einen Listener hinzufügen, der sich mit einem [`AbortSignal`](/de/docs/Web/API/AbortSignal) abbrechen lässt.

#### HTML

```html
<table id="outside">
  <tbody>
    <tr>
      <td id="t1">one</td>
    </tr>
    <tr>
      <td id="t2">two</td>
    </tr>
  </tbody>
</table>
```

#### JavaScript

```js
// Add an abortable event listener to table
const controller = new AbortController();
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, { signal: controller.signal });

// Function to change the content of t2
function modifyText() {
  const t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue === "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
    controller.abort(); // remove listener after value reaches "three"
  }
}
```

Im obigen Beispiel ändern wir den Code des vorherigen Beispiels so, dass wir `abort()` auf dem [`AbortController`](/de/docs/Web/API/AbortController) aufrufen, den wir an `addEventListener()` übergeben haben, nachdem sich der Inhalt der zweiten Zeile in „three“ geändert hat. Dadurch bleibt der Wert dauerhaft „three“, weil nun kein Code mehr auf ein Klickereignis wartet.

#### Ergebnis

{{EmbedLiveSample('Add_an_abortable_listener')}}

### Event-Listener mit anonymer Funktion

Hier sehen wir uns an, wie Sie mit einer anonymen Funktion Parameter an einen Event-Listener übergeben können.

#### HTML

```html
<table id="outside">
  <tbody>
    <tr>
      <td id="t1">one</td>
    </tr>
    <tr>
      <td id="t2">two</td>
    </tr>
  </tbody>
</table>
```

#### JavaScript

```js
// Function to change the content of t2
function modifyText(newText) {
  const t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = newText;
}

// Function to add event listener to table
const el = document.getElementById("outside");
el.addEventListener("click", function () {
  modifyText("four");
});
```

Beachten Sie, dass der Listener eine anonyme Funktion ist, die Code enthält, der seinerseits Parameter an die Funktion `modifyText()` übergeben kann. Diese Funktion verarbeitet das Ereignis.

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_anonymous_function')}}

### Event-Listener mit Pfeilfunktion

Dieses Beispiel zeigt einen Event-Listener, der mit einer Pfeilfunktion implementiert wurde.

#### HTML

```html
<table id="outside">
  <tbody>
    <tr>
      <td id="t1">one</td>
    </tr>
    <tr>
      <td id="t2">two</td>
    </tr>
  </tbody>
</table>
```

#### JavaScript

```js
// Function to change the content of t2
function modifyText(newText) {
  const t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = newText;
}

// Add event listener to table with an arrow function
const el = document.getElementById("outside");
el.addEventListener("click", () => {
  modifyText("four");
});
```

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_an_arrow_function')}}

Beachten Sie, dass anonyme Funktionen und Pfeilfunktionen zwar ähnlich sind, `this` aber unterschiedlich binden. Während anonyme Funktionen (und alle herkömmlichen JavaScript-Funktionen) eine eigene Bindung für `this` erzeugen, übernehmen Pfeilfunktionen die `this`-Bindung der umschließenden Funktion.

Das bedeutet, dass die Variablen und Konstanten, die der umschließenden Funktion zur Verfügung stehen, bei Verwendung einer Pfeilfunktion auch dem Event-Handler zur Verfügung stehen.

### Beispiel für die Verwendung von Optionen

#### HTML

```html
<div class="outer">
  outer, once & none-once
  <div class="middle" target="_blank">
    middle, capture & none-capture
    <a class="inner1" href="https://www.mozilla.org" target="_blank">
      inner1, passive & preventDefault(which is not allowed)
    </a>
    <a class="inner2" href="https://developer.mozilla.org/" target="_blank">
      inner2, none-passive & preventDefault(not open new page)
    </a>
  </div>
</div>
<hr />
<button class="clear-button">Clear logs</button>
<section class="demo-logs"></section>
```

#### CSS

```css
.outer,
.middle,
.inner1,
.inner2 {
  display: block;
  width: 520px;
  padding: 15px;
  margin: 15px;
  text-decoration: none;
}
.outer {
  border: 1px solid red;
  color: red;
}
.middle {
  border: 1px solid green;
  color: green;
  width: 460px;
}
.inner1,
.inner2 {
  border: 1px solid purple;
  color: purple;
  width: 400px;
}
```

```css hidden
.demo-logs {
  width: 530px;
  height: 16rem;
  background-color: #dddddd;
  overflow-x: auto;
  padding: 1rem;
}
```

#### JavaScript

```js hidden
const clearBtn = document.querySelector(".clear-button");
const demoLogs = document.querySelector(".demo-logs");

function log(msg) {
  demoLogs.innerText += `${msg}\n`;
}

clearBtn.addEventListener("click", () => {
  demoLogs.innerText = "";
});
```

```js
const outer = document.querySelector(".outer");
const middle = document.querySelector(".middle");
const inner1 = document.querySelector(".inner1");
const inner2 = document.querySelector(".inner2");

const capture = {
  capture: true,
};
const noneCapture = {
  capture: false,
};
const once = {
  once: true,
};
const noneOnce = {
  once: false,
};
const passive = {
  passive: true,
};
const nonePassive = {
  passive: false,
};

outer.addEventListener("click", onceHandler, once);
outer.addEventListener("click", noneOnceHandler, noneOnce);
middle.addEventListener("click", captureHandler, capture);
middle.addEventListener("click", noneCaptureHandler, noneCapture);
inner1.addEventListener("click", passiveHandler, passive);
inner2.addEventListener("click", nonePassiveHandler, nonePassive);

function onceHandler(event) {
  log("outer, once");
}
function noneOnceHandler(event) {
  log("outer, none-once, default\n");
}
function captureHandler(event) {
  // event.stopImmediatePropagation();
  log("middle, capture");
}
function noneCaptureHandler(event) {
  log("middle, none-capture, default");
}
function passiveHandler(event) {
  // Unable to preventDefault inside passive event listener invocation.
  event.preventDefault();
  log("inner1, passive, open new page");
}
function nonePassiveHandler(event) {
  event.preventDefault();
  // event.stopPropagation();
  log("inner2, none-passive, default, not open new page");
}
```

#### Ergebnis

Klicken Sie nacheinander auf den äußeren, mittleren und inneren Container, um zu sehen, wie die Optionen funktionieren.

{{ EmbedLiveSample('Example_of_options_usage', 600, 630) }}

### Event-Listener mit mehreren Optionen

Sie können im Parameter `options` mehrere Optionen festlegen. Im folgenden Beispiel legen wir zwei Optionen fest:

- `passive`, um anzugeben, dass der Handler [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) nicht aufrufen wird.
- `once`, um sicherzustellen, dass der Event-Handler nur einmal aufgerufen wird.

#### HTML

```html
<button id="example-button">You have not clicked this button.</button>
<button id="reset-button">Click this button to reset the first button.</button>
```

#### JavaScript

```js
const buttonToBeClicked = document.getElementById("example-button");

const resetButton = document.getElementById("reset-button");

// the text that the button is initialized with
const initialText = buttonToBeClicked.textContent;

// the text that the button contains after being clicked
const clickedText = "You have clicked this button.";

// we hoist the event listener callback function
// to prevent having duplicate listeners attached
function eventListener() {
  buttonToBeClicked.textContent = clickedText;
}

function addListener() {
  buttonToBeClicked.addEventListener("click", eventListener, {
    passive: true,
    once: true,
  });
}

// when the reset button is clicked, the example button is reset,
// and allowed to have its state updated again
resetButton.addEventListener("click", () => {
  buttonToBeClicked.textContent = initialText;
  addListener();
});

addListener();
```

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_multiple_options')}}

### Scroll-Leistung mit passiven Listenern verbessern

Das folgende Beispiel zeigt die Wirkung der Option `passive`. Es enthält ein {{htmlelement("div")}} mit etwas Text sowie ein Kontrollkästchen.

#### HTML

```html
<div id="container">
  <p>
    But down there it would be dark now, and not the lovely lighted aquarium she
    imagined it to be during the daylight hours, eddying with schools of tiny,
    delicate animals floating and dancing slowly to their own serene currents
    and creating the look of a living painting. That was wrong, in any case. The
    ocean was different from an aquarium, which was an artificial environment.
    The ocean was a world. And a world is not art. Dorothy thought about the
    living things that moved in that world: large, ruthless and hungry. Like us
    up here.
  </p>
</div>

<div>
  <input type="checkbox" id="passive" name="passive" checked />
  <label for="passive">passive</label>
</div>
```

```css hidden
#container {
  width: 150px;
  height: 200px;
  overflow: scroll;
  margin: 2rem 0;
  padding: 0.4rem;
  border: 1px solid black;
}
```

#### JavaScript

Der Code fügt einen Listener für das [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis des Containers hinzu, das den Container standardmäßig scrollt. Der Listener führt einen langwierigen Vorgang aus. Anfangs wird der Listener mit der Option `passive` hinzugefügt. Bei jeder Änderung des Kontrollkästchens schaltet der Code die Option `passive` um.

```js
const passive = document.querySelector("#passive");
const container = document.querySelector("#container");

passive.addEventListener("change", (event) => {
  container.removeEventListener("wheel", wheelHandler);
  container.addEventListener("wheel", wheelHandler, {
    passive: passive.checked,
    once: true,
  });
});

container.addEventListener("wheel", wheelHandler, {
  passive: true,
  once: true,
});

function wheelHandler() {
  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
        return false;
      }
    }
    return true;
  }

  const quota = 1000000;
  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  console.log(primes);
}
```

#### Ergebnis

Das hat folgende Auswirkungen:

- Anfangs ist der Listener passiv. Wenn Sie versuchen, den Container mit dem Mausrad zu scrollen, reagiert er sofort.
- Wenn Sie „passive“ deaktivieren und versuchen, den Container mit dem Mausrad zu scrollen, tritt eine merkliche Verzögerung auf, bevor der Container scrollt. Der Browser muss auf das Ende des langwierigen Listeners warten.

{{EmbedLiveSample("Improving scroll performance using passive listeners", 100, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)
- [Benutzerdefinierte Ereignisse erstellen und auslösen](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events)
- [Weitere Informationen zur Verwendung von `this` in Event-Handlern](https://www.quirksmode.org/js/this.html)

---
title: "EventTarget: addEventListener()-Methode"
short-title: addEventListener()
slug: Web/API/EventTarget/addEventListener
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`addEventListener()`**-Methode der [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle
richtet eine Funktion ein, die jedes Mal aufgerufen wird, wenn das angegebene Ereignis an das Ziel übermittelt wird.

Gängige Ziele sind [`Element`](/de/docs/Web/API/Element) oder seine Kinder, [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window),
aber das Ziel kann jedes Objekt sein, das Ereignisse unterstützt (wie z. B. [`IDBRequest`](/de/docs/Web/API/IDBRequest)).

> [!NOTE]
> Die Methode `addEventListener()` ist die _empfohlene_ Art, einen Ereignis-Listener zu registrieren. Die Vorteile sind:
>
> - Sie ermöglicht das Hinzufügen mehrerer Handler für ein Ereignis. Dies ist besonders
>   nützlich für Bibliotheken, JavaScript-Module oder jede andere Art von
>   Code, der gut mit anderen Bibliotheken oder Erweiterungen zusammenarbeiten muss.
> - Im Gegensatz zur Verwendung einer `onXYZ`-Eigenschaft bietet sie Ihnen eine feinere Kontrolle über die Phase, wann der Listener aktiviert wird (Capturing vs. Bubbling).
> - Sie funktioniert mit jedem Ereignisziel, nicht nur mit HTML- oder SVG-Elementen.

Die Methode `addEventListener()` funktioniert, indem sie eine Funktion oder ein Objekt, das eine `handleEvent()`-Funktion implementiert, zur Liste der Event-Listener für den angegebenen Ereignistyp
auf dem [`EventTarget`](/de/docs/Web/API/EventTarget) hinzufügt, auf dem sie aufgerufen wird. Wenn die Funktion oder das Objekt bereits in der Liste der Event-Listener für dieses Ziel steht, wird die Funktion oder das Objekt nicht ein zweites Mal hinzugefügt.

> [!NOTE]
> Wenn eine bestimmte anonyme Funktion in der Liste der für ein bestimmtes Ziel registrierten Event-Listener enthalten ist und später im Code eine identische anonyme Funktion in einem `addEventListener`-Aufruf angegeben wird, wird die zweite Funktion _ebenfalls_ zur Liste der Event-Listener für dieses Ziel hinzugefügt.
>
> Tatsächlich sind anonyme Funktionen nicht identisch, selbst wenn sie mit
> demselben unveränderten Quellcode wiederholt definiert werden, **selbst in einer Schleife**.
>
> Das wiederholte Definieren derselben namenlosen Funktion in solchen Fällen kann problematisch sein. (Siehe [Speicherprobleme](#speicherprobleme) unten.)

Wenn ein Event-Listener zu einem [`EventTarget`](/de/docs/Web/API/EventTarget) von innen einem anderen Listener hinzugefügt wird —
das heißt während der Bearbeitung des Ereignisses —
wird dieses Ereignis den neuen Listener nicht auslösen.
Der neue Listener kann jedoch in einer späteren Phase des Ereignisflusses ausgelöst werden,
zum Beispiel während der Bubbling-Phase.

## Syntax

```js-nolint
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

### Parameter

- `type`
  - : Ein Case-sensitiver String, der den [Ereignistyp](/de/docs/Web/API/Document_Object_Model/Events) repräsentiert, für den Sie zuhören möchten.
- `listener`
  - : Das Objekt, das eine Benachrichtigung erhält (ein Objekt, das die
    [`Event`](/de/docs/Web/API/Event)-Schnittstelle implementiert), wenn ein Ereignis des angegebenen Typs auftritt. Dies muss
    entweder `null`, ein Objekt mit einer `handleEvent()`-Methode oder eine JavaScript-
    [Funktion](/de/docs/Web/JavaScript/Guide/Functions) sein. Siehe
    [Der Callback des Ereignis-Listeners](#der_callback_des_ereignis-listeners) für Details zum Callback selbst.
- `options` {{optional_inline}}
  - : Ein Objekt, das Eigenschaften zum Event-Listener spezifiziert. Die verfügbaren
    Optionen sind:
    - `capture` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass Ereignisse dieser Art an den registrierten `listener` gesendet werden sollen, bevor sie an ein darunter liegendes
        `EventTarget` im DOM-Baum gesendet werden. Wenn nicht angegeben, ist der Standardwert `false`.
    - `once` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass der `listener`
        höchstens einmal aufgerufen werden soll, nachdem er hinzugefügt wurde. Wenn `true`, wird der
        `listener` automatisch entfernt, wenn er aufgerufen wird. Wenn nicht angegeben, ist der Standardwert `false`.
    - `passive` {{optional_inline}}
      - : Ein boolescher Wert, der, wenn `true`, angibt, dass die durch `listener` spezifizierte Funktion niemals [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen wird. Wenn ein passiver Listener `preventDefault()` aufruft, passiert nichts und eine Konsolenwarnung könnte generiert werden.

        Wenn diese Option nicht angegeben ist, ist der Standardwert `false` – außer in Browsern außer Safari, dort ist der Standardwert `true` für [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event) Ereignisse. Siehe [Verwendung passiver Listener](#verwendung_passiver_listener), um mehr zu erfahren.

    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Der Listener wird entfernt, wenn die [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des [`AbortController`](/de/docs/Web/API/AbortController), das das `AbortSignal` besitzt, aufgerufen wird. Wenn nicht angegeben, ist kein `AbortSignal` mit dem Listener verbunden.

- `useCapture` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob Ereignisse dieser Art an den
    registrierten `listener` _bevor_ sie an ein darunter liegendes
    `EventTarget` im DOM-Baum gesendet werden sollen. Ereignisse, die im Baum nach oben sprudeln,
    werden keinen Listener auslösen, der für die Verwendung von Capture vorgesehen ist. Das Event
    Bubbling und Capturing sind zwei Arten der Ereignisweiterleitung, die in einem Element, das innerhalb eines anderen Elements verschachtelt ist, auftreten können, wenn beide Elemente einen Handler für
    dieses Ereignis registriert haben. Der Ereignisausbreitungsmodus bestimmt die Reihenfolge, in der Elemente
    das Ereignis empfangen. Siehe [die DOM-Spezifikation](https://dom.spec.whatwg.org/#introduction-to-dom-events) und [JavaScript-Ereignisreihenfolge](https://www.quirksmode.org/js/events_order.html#link4) für eine ausführliche Erklärung.
    Wenn nicht angegeben, ist `useCapture` standardmäßig `false`.

    > [!NOTE]
    > Für Ereignis-Listener, die an das Ereignisziel angehängt sind, befindet sich das Ereignis in der Zielphase, und nicht in den Capturing- und Bubbling-Phasen.
    > Ereignis-Listener in der _Capturing_-Phase werden vor den Listenern in der Ziel- und Bubbling-Phase aufgerufen.

- `wantsUntrusted` {{optional_inline}} {{non-standard_inline}}
  - : Ein Firefox (Gecko)-spezifischer Parameter. Wenn `true`, erhält der Listener
    synthetische Ereignisse, die vom Webinhalt gesendet werden (der Standardwert ist `false` für
    den Browser-{{Glossary("chrome", "chrome")}} und `true` für reguläre Webseiten). Dieser
    Parameter ist nützlich für in Add-Ons gefundenem Code sowie den Browser selbst.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Nutzungshinweise

### Der Callback des Ereignis-Listeners

Der Ereignis-Listener kann entweder als Callback-Funktion oder
als Objekt, dessen `handleEvent()`-Methode als Callback-Funktion dient, angegeben werden.

Die Callback-Funktion selbst hat die gleichen Parameter und den gleichen Rückgabewert wie die
`handleEvent()`-Methode; das heißt, der Callback akzeptiert ein einzelnes Argument: ein
Objekt auf Basis von [`Event`](/de/docs/Web/API/Event), das das eingetretene Ereignis beschreibt, und gibt
nichts zurück.

Ein Beispiel für einen Ereignishandler-Callback, der sowohl
[`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) als auch
[`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) behandeln kann, könnte so aussehen:

```js
function handleEvent(event) {
  if (event.type === "fullscreenchange") {
    /* handle a full screen toggle */
  } else {
    /* handle a full screen toggle error */
  }
}
```

### Der Wert von "this" innerhalb des Handlers

Es ist oft wünschenswert, sich auf das Element zu beziehen, auf dem der Ereignishandler ausgelöst wurde,
etwa wenn ein generischer Handler für eine Menge ähnlicher Elemente verwendet wird.

Wenn Sie eine Handler-Funktion an ein Element mit `addEventListener()` anhängen,
wird der Wert von {{jsxref("Operators/this","this")}} innerhalb des Handlers zu einer Referenz auf
das Element. Es wird der gleiche Wert sein wie der `currentTarget`-Eigenschaft des
Ereignisarguments, das an den Handler übergeben wird.

```js
my_element.addEventListener("click", function (e) {
  console.log(this.className); // logs the className of my_element
  console.log(e.currentTarget === this); // logs `true`
});
```

Zur Erinnerung: [Arrow-Funktionen haben keinen eigenen `this`-Kontext](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

```js
my_element.addEventListener("click", (e) => {
  console.log(this.className); // WARNING: `this` is not `my_element`
  console.log(e.currentTarget === this); // logs `false`
});
```

Wenn ein Ereignishandler (zum Beispiel [`onclick`](/de/docs/Web/API/Element/click_event)) in der HTML-Quelle auf einem Element angegeben ist, wird der JavaScript-Code im Attributwert effektiv in eine Handler-Funktion eingeschlossen, die den Wert von `this` auf eine Weise bindet, die mit `addEventListener()` konsistent ist; ein Vorkommen von `this` innerhalb des Codes repräsentiert eine Referenz auf das Element.

```html
<table id="my_table" onclick="console.log(this.id);">
  <!-- `this` refers to the table; logs 'my_table' -->
  …
</table>
```

Beachten Sie, dass der Wert von `this` innerhalb einer Funktion, die durch den Code
im Attributwert _aufgerufen_ wird, gemäß den [Standardregeln](/de/docs/Web/JavaScript/Reference/Operators/this) verhält. Dies wird
im folgenden Beispiel gezeigt:

```html
<script>
  function logID() {
    console.log(this.id);
  }
</script>
<table id="my_table" onclick="logID();">
  <!-- when called, `this` will refer to the global object -->
  …
</table>
```

Der Wert von `this` innerhalb von `logID()` ist eine Referenz auf das globale
Objekt [`Window`](/de/docs/Web/API/Window) (oder `undefined` im Fall des [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode).

#### "this" mit bind() spezifizieren

Die Methode {{jsxref("Function.prototype.bind()")}} erlaubt es Ihnen, einen festen
`this`-Kontext für alle nachfolgenden Aufrufe festzulegen — dies umgeht Probleme, bei denen unklar ist, was `this` sein wird, abhängig vom
Kontext, aus dem Ihre Funktion aufgerufen wurde. Beachten Sie jedoch, dass Sie
einen Verweis auf den Listener behalten müssen, damit Sie ihn später entfernen können.

Dies ist ein Beispiel mit und ohne `bind()`:

```js
class Something {
  name = "Something Good";
  constructor(element) {
    // bind causes a fixed `this` context to be assigned to `onclick2`
    this.onclick2 = this.onclick2.bind(this);
    element.addEventListener("click", this.onclick1, false);
    element.addEventListener("click", this.onclick2, false); // Trick
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

Eine andere Lösung ist, eine spezielle Funktion namens `handleEvent()` zu verwenden, um
alle Ereignisse abzufangen:

```js
class Something {
  name = "Something Good";
  constructor(element) {
    // Note that the listeners in this case are `this`, not this.handleEvent
    element.addEventListener("click", this, false);
    element.addEventListener("dblclick", this, false);
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

Eine andere Möglichkeit, mit der Referenz von `this` umzugehen, besteht darin, eine Arrow-Funktion zu verwenden, die keinen separaten `this`-Kontext erstellt.

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

### Daten in und aus einem Ereignis-Listener übertragen

Ereignis-Listener akzeptieren nur ein Argument,
ein [`Event`](/de/docs/Web/API/Event) oder eine Unterklasse von `Event`,
das automatisch an den Listener übergeben wird, und der Rückgabewert wird ignoriert.
Daher müssen Sie, um Daten in und aus einem Ereignis-Listener zu bekommen, anstelle der Übergabe der Daten durch Parameter und Rückgabewerte, [Closures](/de/docs/Web/JavaScript/Guide/Closures) erstellen.

Die als Ereignis-Listener übergebenen Funktionen haben Zugriff auf alle in den äußeren Scopes deklarierten Variablen, die die Funktion enthalten.

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

Lesen Sie den [Funktionsleitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_scopes_and_closures) für weitere Informationen über Funktionsumfänge.

### Speicherprobleme

```js
const elems = document.getElementsByTagName("*");

// Case 1
for (const elem of elems) {
  elem.addEventListener(
    "click",
    (e) => {
      // Do something
    },
    false,
  );
}

// Case 2
function processEvent(e) {
  // Do something
}

for (const elem of elems) {
  elem.addEventListener("click", processEvent, false);
}
```

Im ersten Fall oben wird mit jeder Iteration der Schleife eine neue (anonyme) Handler-Funktion erstellt. Im zweiten Fall wird dieselbe zuvor deklarierte Funktion als Ereignis-Handler verwendet, was zu einem geringeren Speicherverbrauch führt, da nur eine Handler-Funktion erstellt wird. Darüber hinaus ist es im ersten Fall nicht möglich, [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) aufzurufen, da es keinen Verweis auf die anonyme Funktion gibt (oder hier keine von der Schleife möglicherweise erstellten anonymen Funktionen behalten werden). Im zweiten Fall ist es möglich, `myElement.removeEventListener("click", processEvent, false)` auszuführen, da `processEvent` der Funktionsverweis ist.

Tatsächlich ist in Bezug auf den Speicherverbrauch das Fehlen eines Funktionsverweises nicht das eigentliche Problem, sondern das Fehlen eines _statischen_ Funktionsverweises.

### Verwendung passiver Listener

Wenn ein Ereignis eine Standardaktion hat — zum Beispiel ein [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, das den Container standardmäßig scrollt — kann der Browser im Allgemeinen die Standardaktion erst starten, wenn der Ereignis-Listener abgeschlossen ist, da er vorher nicht weiß, ob der Ereignis-Listener die Standardaktion durch Aufruf von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen könnte. Wenn der Ereignis-Listener zu lange dauert, kann dies zu einer wahrnehmbaren Verzögerung, auch bekannt als {{Glossary("jank", "Jank")}}, führen, bevor die Standardaktion ausgeführt werden kann.

Indem die Option `passive` auf `true` gesetzt wird, erklärt ein Ereignis-Listener, dass er die Standardaktion nicht abbrechen wird, sodass der Browser die Standardaktion sofort starten kann, ohne auf das Ende des Listeners zu warten. Wenn der Listener dann [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, hat dies keine Wirkung.

Die Spezifikation für `addEventListener()` definiert den Standardwert für die `passive`-Option als immer `false`. Jedoch haben moderne Browser, um die Scroll-Performance-Vorteile passiver Listener im Legacy-Code zu realisieren, den Standardwert der `passive`-Option für die [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event) Ereignisse auf höheren Dokumentknoten wie [`Window`](/de/docs/Web/API/Window), [`Document`](/de/docs/Web/API/Document) und [`Document.body`](/de/docs/Web/API/Document/body) auf `true` geändert. Das verhindert, dass der Ereignis-Listener [das Ereignis abbricht](/de/docs/Web/API/Event/preventDefault), sodass es das Rendering der Seite nicht blockieren kann, während der Benutzer scrollt.

Daher, wenn Sie dieses Verhalten überschreiben und sicherstellen möchten, dass die Option `passive` `false` ist, müssen Sie die Option explizit auf `false` setzen (anstatt sich auf den Standardwert zu verlassen).

Sie müssen sich keine Sorgen um den Wert von `passive` beim grundlegenden [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis machen.
Da es nicht abgebrochen werden kann, können Ereignis-Listener keine Seiten rendering blockieren.

Siehe [Verbesserung der Scroll-Performance mit passiven Listenern](#verbesserung_der_scroll-leistung_mit_passiven_listenern) für ein Beispiel, das die Wirkung passiver Listener zeigt.

## Beispiele

### Einfachen Listener hinzufügen

Dieses Beispiel demonstriert, wie Sie `addEventListener()` verwenden, um auf Mausklicks auf einem Element zu achten.

#### HTML

```html
<table id="outside">
  <tr>
    <td id="t1">one</td>
  </tr>
  <tr>
    <td id="t2">two</td>
  </tr>
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
el.addEventListener("click", modifyText, false);
```

In diesem Code ist `modifyText()` ein Listener für `click`-Ereignisse,
der mit `addEventListener()` registriert wird. Ein Klick irgendwo in der Tabelle wird
bis zum Handler gebubbelt und führt `modifyText()` aus.

#### Ergebnis

{{EmbedLiveSample('Add_a_simple_listener')}}

### Einen abbrechbaren Listener hinzufügen

Dieses Beispiel zeigt, wie man einen `addEventListener()` hinzufügt, der mit einem [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgebrochen werden kann.

#### HTML

```html
<table id="outside">
  <tr>
    <td id="t1">one</td>
  </tr>
  <tr>
    <td id="t2">two</td>
  </tr>
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

Im obigen Beispiel erweitern wir den Code aus dem vorherigen Beispiel so, dass nachdem sich der Inhalt der zweiten Zeile auf "three" geändert hat, wir `abort()` vom [`AbortController`](/de/docs/Web/API/AbortController) aufrufen, den wir dem `addEventListener()`-Aufruf übergeben haben. Das Ergebnis ist, dass der Wert für immer "three" bleibt, weil wir keinen Code mehr haben, der auf ein Klick-Ereignis hört.

#### Ergebnis

{{EmbedLiveSample('Add_an_abortable_listener')}}

### Ereignis-Listener mit anonymer Funktion

Hier sehen wir uns an, wie man eine anonyme Funktion verwendet, um Parameter an den
Ereignis-Listener zu übergeben.

#### HTML

```html
<table id="outside">
  <tr>
    <td id="t1">one</td>
  </tr>
  <tr>
    <td id="t2">two</td>
  </tr>
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
el.addEventListener(
  "click",
  function () {
    modifyText("four");
  },
  false,
);
```

Beachten Sie, dass der Listener eine anonyme Funktion ist, die Code einbettet, der dann wiederum
Parameter an die `modifyText()`-Funktion senden kann, die
für die tatsächliche Reaktion auf das Ereignis verantwortlich ist.

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_anonymous_function')}}

### Ereignis-Listener mit einer Arrow-Funktion

Dieses Beispiel zeigt einen Ereignis-Listener, der mit einer Arrow-Funktion
implementiert ist.

#### HTML

```html
<table id="outside">
  <tr>
    <td id="t1">one</td>
  </tr>
  <tr>
    <td id="t2">two</td>
  </tr>
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
el.addEventListener(
  "click",
  () => {
    modifyText("four");
  },
  false,
);
```

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_an_arrow_function')}}

Bitte beachten Sie, dass während anonyme und Arrow-Funktionen ähnlich sind, sie unterschiedliche
`this`-Bindungen haben. Während anonyme (und alle traditionellen JavaScript-Funktionen)
ihre eigenen `this`-Bindungen erstellen, erben Arrow-Funktionen die
`this`-Bindung der umgebenden Funktion.

Das bedeutet, dass die Variablen und Konstanten, die der umgebenden Funktion zur Verfügung stehen,
auch der Ereignis-Handler beim Verwenden einer Arrow-Funktion zur Verfügung stehen.

### Beispiel zur Nutzung von Optionen

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
  background-color: #ddd;
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

Klicken Sie die äußeren, mittleren, inneren Container an, um zu sehen, wie die Optionen funktionieren.

{{ EmbedLiveSample('Example_of_options_usage', 600, 630) }}

### Ereignis-Listener mit mehreren Optionen

Sie können mehr als eine der Optionen im `options`-Parameter einstellen. Im folgenden Beispiel setzen wir zwei Optionen:

- `passive`, um zu bestätigen, dass der Handler nicht [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen wird
- `once`, um sicherzustellen, dass der Ereignis-Handler nur einmal aufgerufen wird.

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

### Verbesserung der Scroll-Leistung mit passiven Listenern

Das folgende Beispiel zeigt den Effekt der Einstellung von `passive`. Es enthält ein {{htmlelement("div")}}, das einigen Text und eine Checkbox beinhaltet.

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

Der Code fügt einen Listener für das [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis des Containers hinzu, das standardmäßig den Container scrollt. Der Listener führt eine langwierige Operation aus. Zunächst wird der Listener mit der `passive`-Option hinzugefügt, und wann immer das Kontrollkästchen umgeschaltet wird, ändert der Code die `passive`-Option.

```js
const passive = document.querySelector("#passive");
passive.addEventListener("change", (event) => {
  container.removeEventListener("wheel", wheelHandler);
  container.addEventListener("wheel", wheelHandler, {
    passive: passive.checked,
    once: true,
  });
});

const container = document.querySelector("#container");
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

Der Effekt ist, dass:

- Anfangs ist der Listener passiv, sodass das Versuchen, den Container mit dem Rad zu scrollen, sofort erfolgt.
- Wenn Sie "passiv" abwählen und versuchen, den Container mit dem Rad zu scrollen, gibt es eine merkbare Verzögerung, bevor der Container scrollt, da der Browser warten muss, bis der langwierige Listener abgeschlossen ist.

{{EmbedLiveSample("Improving scroll performance using passive listeners", 100, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)
- [Erstellen und Auslösen benutzerdefinierter Ereignisse](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events)
- [Weitere Details zur Verwendung von `this` in Ereignis-Handlern](https://www.quirksmode.org/js/this.html)

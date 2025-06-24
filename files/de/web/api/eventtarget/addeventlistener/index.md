---
title: "EventTarget: addEventListener() Methode"
short-title: addEventListener()
slug: Web/API/EventTarget/addEventListener
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`addEventListener()`**-Methode des [`EventTarget`](/de/docs/Web/API/EventTarget)-Interfaces
richtet eine Funktion ein, die aufgerufen wird, wenn das spezifizierte Ereignis an das Ziel übermittelt wird.

Übliche Ziele sind [`Element`](/de/docs/Web/API/Element) oder dessen Kinder, [`Document`](/de/docs/Web/API/Document), und [`Window`](/de/docs/Web/API/Window),
aber das Ziel kann jedes Objekt sein, das Ereignisse unterstützt (wie z.B. [`IDBRequest`](/de/docs/Web/API/IDBRequest)).

> [!NOTE]
> Die `addEventListener()`-Methode ist der _empfohlene_ Weg, um einen Ereignis-Listener zu registrieren. Die Vorteile sind folgende:
>
> - Sie ermöglicht das Hinzufügen von mehr als einem Handler für ein Ereignis. Dies ist besonders
>   nützlich für Bibliotheken, JavaScript-Module oder jede andere Art von Code, der gut mit anderen Bibliotheken oder Erweiterungen zusammenarbeiten muss.
> - Im Gegensatz zur Verwendung einer `onXYZ`-Eigenschaft bietet sie eine feinere Steuerung der Phase, in der der Listener aktiviert wird (Erfassung vs. Blasen).
> - Sie funktioniert bei jedem Ereignisziel, nicht nur bei HTML- oder SVG-Elementen.

Die `addEventListener()`-Methode funktioniert, indem sie eine Funktion oder ein Objekt, das eine `handleEvent()`-Funktion implementiert, zur Liste der Ereignis-Listener für den spezifizierten Ereignistyp auf dem [`EventTarget`](/de/docs/Web/API/EventTarget) hinzufügt, auf dem sie aufgerufen wird. Wenn die Funktion oder das Objekt bereits in der Liste der Ereignis-Listener für dieses Ziel steht, wird die Funktion oder das Objekt nicht ein zweites Mal hinzugefügt.

> [!NOTE]
> Wenn eine bestimmte anonyme Funktion in der Liste der Ereignis-Listener registriert für ein bestimmtes Ziel steht und dann später im Code eine identische anonyme Funktion in einem `addEventListener`-Aufruf angegeben wird, wird die zweite Funktion _ebenfalls_ zur Liste der Ereignis-Listener für dieses Ziel hinzugefügt.
>
> In der Tat sind anonyme Funktionen nicht identisch, selbst wenn sie mit
> dem _gleichen_ unveränderten Quellcode, der wiederholt aufgerufen wird, definiert werden, **selbst in einer Schleife**.
>
> Das wiederholte Definieren derselben unbenannten Funktion in solchen Fällen kann problematisch sein. (Siehe [Speicherprobleme](#speicherprobleme) unten.)

Wenn ein Ereignis-Listener während der Verarbeitung des Ereignisses zu einem [`EventTarget`](/de/docs/Web/API/EventTarget) hinzugefügt wird —
das heißt, während der Verarbeitungsphase des Ereignisses —
wird dieses Ereignis den neuen Listener nicht auslösen.
Der neue Listener kann jedoch in einer späteren Phase des Ereignisflusses ausgelöst werden,
wie zum Beispiel während der Bubble-Phase.

## Syntax

```js-nolint
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

### Parameter

- `type`
  - : Ein fallsensitiver String, der den [Ereignistyp](/de/docs/Web/Events) darstellt, für den gehorcht werden soll.
- `listener`
  - : Das Objekt, das eine Benachrichtigung erhält (ein Objekt, das das
    [`Event`](/de/docs/Web/API/Event)-Interface implementiert), wenn ein Ereignis des spezifizierten Typs auftritt. Dies muss
    `null`, ein Objekt mit einer `handleEvent()`-Methode oder eine JavaScript-
    [Funktion](/de/docs/Web/JavaScript/Guide/Functions) sein. Siehe
    [Der Ereignis-Listener-Callback](#der_ereignis-listener-callback) für Details zum Callback selbst.
- `options` {{optional_inline}}

  - : Ein Objekt, das Merkmale über den Ereignis-Listener spezifiziert. Die verfügbaren
    Optionen sind:

    - `capture` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass Ereignisse dieses Typs an den registrierten `listener` gesendet werden, bevor sie an ein darunterliegendes `EventTarget` im DOM-Baum gesendet werden. Wenn nicht angegeben, ist der Standardwert `false`.
    - `once` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass der `listener`
        höchstens einmal aufgerufen werden soll, nachdem er hinzugefügt wurde. Wenn `true`, würde der
        `listener` automatisch entfernt, wenn er aufgerufen wird. Wenn nicht angegeben, ist der Standardwert `false`.
    - `passive` {{optional_inline}}

      - : Ein boolescher Wert, der, wenn `true`, angibt, dass die von `listener` angegebene Funktion niemals [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen wird. Wenn ein passiver Listener `preventDefault()` aufruft, passiert nichts und es kann eine Warnung in der Konsole erzeugt werden.

        Wenn diese Option nicht angegeben ist, ist der Standardwert `false` – außer dass in Browsern außer Safari der Standardwert für [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignisse `true` ist. Siehe [Verwendung passiver Listener](#verwendung_passiver_listener), um mehr zu erfahren.

    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Der Listener wird entfernt, wenn die [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des [`AbortController`](/de/docs/Web/API/AbortController), der das `AbortSignal` besitzt, aufgerufen wird. Wenn nicht spezifiziert, ist kein `AbortSignal` mit dem Listener verbunden.

- `useCapture` {{optional_inline}}

  - : Ein boolescher Wert, der angibt, ob Ereignisse dieses Typs an den
    registrierten `listener` _vor_ jedem darunterliegenden `EventTarget` im DOM-Baum gesendet werden, bevor es gesendet wird. Ereignisse, die den Baum durchlaufen, lösen keinen Listener aus, der zum Verwenden der Erfassung vorgesehen ist. Ereignis-Bubbling und -Erfassung sind zwei Arten der Ereignisverbreitung, die bei einem Element auftreten, das in einem anderen Element eingebettet ist, wenn beide Elemente eine Behandlung für dieses Ereignis registriert haben. Der Ereignisverbreitungsmodus bestimmt die Reihenfolge, in der Elemente das Ereignis empfangen. Siehe [die DOM-Spezifikation](https://dom.spec.whatwg.org/#introduction-to-dom-events) und [Reihenfolge der JavaScript-Ereignisse](https://www.quirksmode.org/js/events_order.html#link4) für eine ausführliche Erklärung.
    Wenn nicht spezifiziert, ist der Standardwert für `useCapture` `false`.

    > [!NOTE]
    > Für Ereignis-Listener, die am Ereignisziel angebracht sind, befindet sich das Ereignis in der Zielphase, nicht in den Erfassungs- und Bubble-Phasen.
    > Listener in der _Erfassungsphase_ werden vor Listenern in der Ziel- und Bubble-Phase aufgerufen.

- `wantsUntrusted` {{optional_inline}} {{non-standard_inline}}
  - : Ein Firefox (Gecko)-spezifischer Parameter. Wenn `true`, empfängt der Listener
    synthetische Ereignisse, die von Webinhalten gesendet werden (der Standardwert ist `false` für
    Browser-{{Glossary("chrome", "Chrome")}} und `true` für reguläre Webseiten). Dieser
    Parameter ist nützlich für Code, der in Add-ons zu finden ist, sowie für den Browser selbst.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Nutzungshinweise

### Der Ereignis-Listener-Callback

Der Ereignis-Listener kann entweder als Callback-Funktion oder
als Objekt angegeben werden, dessen `handleEvent()`-Methode als Callback-Funktion dient.

Die Callback-Funktion selbst hat dieselben Parameter und denselben Rückgabewert wie die
`handleEvent()`-Methode; das heißt, der Callback nimmt einen einzigen Parameter an: ein
Objekt basierend auf [`Event`](/de/docs/Web/API/Event), das das aufgetretene Ereignis beschreibt, und es
gibt nichts zurück.

Ein Ereignishandler-Callback, der sowohl
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

### Der Wert von "this" im Handler

Es ist oft wünschenswert, auf das Element zu verweisen, auf dem der Ereignishandler ausgelöst wurde,
wie zum Beispiel bei der Verwendung eines generischen Handlers für eine Reihe ähnlicher Elemente.

Wenn eine Handler-Funktion mit `addEventListener()` an ein Element angehängt wird,
ist der Wert von {{jsxref("Operators/this","this")}} innerhalb des Handlers eine Referenz auf
das Element. Es wird derselbe Wert wie der der `currentTarget`-Eigenschaft des
Ereignisarguments sein, das dem Handler übergeben wird.

```js
my_element.addEventListener("click", function (e) {
  console.log(this.className); // logs the className of my_element
  console.log(e.currentTarget === this); // logs `true`
});
```

Zur Erinnerung: [Pfeilfunktionen haben ihren eigenen `this`-Kontext nicht](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

```js
my_element.addEventListener("click", (e) => {
  console.log(this.className); // WARNING: `this` is not `my_element`
  console.log(e.currentTarget === this); // logs `false`
});
```

Wenn ein Ereignishandler (zum Beispiel [`onclick`](/de/docs/Web/API/Element/click_event)) in der HTML-Quelle auf ein Element spezifiziert ist, wird der JavaScript-Code im Attributwert effektiv in einer Handler-Funktion umschlossen, die den Wert von `this` auf eine Weise bindet, die konsistent mit `addEventListener()` ist; ein Vorkommen von `this` innerhalb des Codes repräsentiert eine Referenz auf das Element.

```html
<table id="my_table" onclick="console.log(this.id);">
  <!-- `this` refers to the table; logs 'my_table' -->
  …
</table>
```

Beachten Sie, dass der Wert von `this` innerhalb einer Funktion, _aufgerufen durch_ den Code
im Attributwert, sich gemäß [Standardregeln](/de/docs/Web/JavaScript/Reference/Operators/this) verhält. Dies wird
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
Objekt [`Window`](/de/docs/Web/API/Window) (oder `undefined` im Falle von [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode).

#### Spezifizieren von "this" mit bind()

Die Methode {{jsxref("Function.prototype.bind()")}} erlaubt es Ihnen, einen festen
`this`-Kontext für alle nachfolgenden Aufrufe festzulegen — Probleme zu umgehen, bei denen unklar ist, was `this` sein wird, abhängig von
dem Kontext, aus dem Ihre Funktion aufgerufen wurde. Beachten Sie jedoch, dass Sie eine
Referenz auf den Listener behalten müssen, damit Sie ihn später entfernen können.

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

Eine andere Lösung verwendet eine spezielle Funktion namens `handleEvent()`, um
irgendein Ereignis abzufangen:

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

Eine weitere Möglichkeit, die Referenz auf `this` zu handhaben, ist die Verwendung einer Pfeilfunktion, die keinen separaten `this`-Kontext erstellt.

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

### Übergabe von Daten in und aus einem Ereignis-Listener

Ereignis-Listener nehmen nur ein Argument an,
ein [`Event`](/de/docs/Web/API/Event) oder eine Unterklasse von `Event`,
die automatisch an den Listener übergeben wird, und der Rückgabewert wird ignoriert.
Daher müssen Sie, um Daten in und aus einem Ereignis-Listener zu bekommen, anstatt die Daten durch Parameter und Rückgabewerte zu übergeben, [Closures](/de/docs/Web/JavaScript/Guide/Closures) erstellen.

Die Funktionen, die als Ereignis-Listener übergeben werden, haben Zugriff auf alle Variablen, die in den äußeren Scopes deklariert sind, die die Funktion enthalten.

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

Lesen Sie den [Funktionen-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_scopes_and_closures) für mehr Informationen über Funktions-Scopes.

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

Im obigen ersten Fall wird mit jeder
Iteration der Schleife eine neue (anonyme) Handler-Funktion erstellt. Im zweiten Fall wird dieselbe zuvor deklarierte Funktion als
Ereignis-Handler verwendet, was zu einem geringeren Speicherverbrauch führt, da nur
eine Handler-Funktion erstellt wird. Zudem ist im ersten Fall das Aufrufen von
[`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) nicht möglich, da keine
Referenz auf die anonyme Funktion erhalten bleibt (oder hier, nicht zu einer der
mehreren anonymen Funktionen, die die Schleife möglicherweise erstellt). Im zweiten Fall ist es möglich, `myElement.removeEventListener("click", processEvent, false)`
auszuführen, da `processEvent` die Funktionsreferenz ist.

Eigentlich ist im Hinblick auf den Speicherverbrauch das Fehlen einer Funktionsreferenz
nicht das eigentliche Problem, sondern das Fehlen einer _statischen_ Funktionsreferenz.

### Verwendung passiver Listener

Wenn ein Ereignis eine Standardaktion hat — beispielsweise ein [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, das standardmäßig den Container scrollt — kann der Browser im Allgemeinen die Standardaktion nicht starten, bis der Ereignis-Listener beendet ist, da er nicht im Voraus weiß, ob der Ereignis-Listener die Standardaktion durch Aufrufen von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen könnte. Wenn der Ereignis-Listener zu lange zur Ausführung braucht, kann dies zu einer merklichen Verzögerung führen, auch bekannt als {{Glossary("jank", "jank")}}, bevor die Standardaktion ausgeführt werden kann.

Indem man die `passive`-Option auf `true` setzt, erklärt ein Ereignis-Listener, dass er die Standardaktion nicht abbrechen wird, sodass der Browser die Standardaktion sofort starten kann, ohne auf das Ende des Listeners zu warten. Ruft der Listener dann [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, hat dies keine Wirkung.

Die Spezifikation für `addEventListener()` definiert den Standardwert für die `passive`-Option als immer `false`. Um jedoch die Vorteile der Scrollleistung passiver Listener bei Legacy-Code zu nutzen, haben moderne Browser den Standardwert der `passive`-Option für die [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignisse auf Dokument-Ebene-Elementen wie [`Window`](/de/docs/Web/API/Window), [`Document`](/de/docs/Web/API/Document) und [`Document.body`](/de/docs/Web/API/Document/body) auf `true` geändert. Dies verhindert, dass der Ereignis-Listener [das Ereignis abbricht](/de/docs/Web/API/Event/preventDefault), sodass es das Rendern der Seite beim Scrollen des Benutzers nicht blockieren kann.

Aufgrund dessen müssen Sie, wenn Sie dieses Verhalten überschreiben und sicherstellen möchten, dass die `passive`-Option `false` ist, sie explizit auf `false` setzen (anstatt sich auf den Standardwert zu verlassen).

Sie müssen sich keine Sorgen um den Wert von `passive` für das grundlegende [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis machen.
Da es nicht abgebrochen werden kann, können Ereignis-Listener das Rendern der Seite sowieso nicht blockieren.

Sehen Sie [Verbesserung der Scroll-Leistung durch passive Listener](#verbesserung_der_scroll-leistung_durch_passive_listener) für ein Beispiel, das die Wirkung passiver Listener zeigt.

## Beispiele

### Einfachen Listener hinzufügen

Dieses Beispiel demonstriert, wie `addEventListener()` verwendet wird, um auf Mausklicks auf einem Element zu achten.

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

In diesem Code ist `modifyText()` ein Listener für `click`-Ereignisse, die mit `addEventListener()` registriert wurden. Ein Klick irgendwo in der Tabelle blubbert bis zum Handler hoch und führt `modifyText()` aus.

#### Ergebnis

{{EmbedLiveSample('Add_a_simple_listener')}}

### Hinzufügen eines abbruchfähigen Listeners

Dieses Beispiel demonstriert, wie man ein `addEventListener()` hinzufügt, das mit einem [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgebrochen werden kann.

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

Im obigen Beispiel modifizieren wir den Code des vorherigen Beispiels so, dass, nachdem der Inhalt der zweiten Zeile auf "three" geändert wurde, `abort()` vom [`AbortController`](/de/docs/Web/API/AbortController) aufgerufen wird, den wir an den `addEventListener()`-Aufruf übergeben haben. Das Ergebnis ist, dass der Wert dauerhaft "three" bleibt, da wir keinen Code mehr haben, der auf ein Klick-Ereignis hört.

#### Ergebnis

{{EmbedLiveSample('Add_an_abortable_listener')}}

### Ereignis-Listener mit anonymer Funktion

Hier schauen wir uns an, wie man eine anonyme Funktion verwendet, um Parameter an den
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

Beachten Sie, dass der Listener eine anonyme Funktion ist, die Code einkapselt, der dann
wiederum in der Lage ist, Parameter an die `modifyText()`-Funktion zu senden, welche für die eigentliche Reaktion auf das Ereignis verantwortlich ist.

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_anonymous_function')}}

### Ereignis-Listener mit einer Pfeilfunktion

Dieses Beispiel demonstriert einen Ereignis-Listener, der mit einer Pfeilfunktion
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

Bitte beachten Sie, dass, während anonyme und Pfeilfunktionen ähnlich sind, sie unterschiedliche
`this`-Bindungen haben. Während anonyme (und alle traditionellen JavaScript-Funktionen)
ihre eigenen `this`-Bindungen erstellen, erben Pfeilfunktionen die
`this`-Bindung der umgebenden Funktion.

Das bedeutet, dass die Variablen und Konstanten, die der umgebenden Funktion verfügbar sind,
auch dem Ereignishandler zur Verfügung stehen, wenn eine Pfeilfunktion verwendet wird.

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

Klicken Sie die äußeren, mittleren und inneren Container an, um zu sehen, wie die Optionen funktionieren.

{{ EmbedLiveSample('Example_of_options_usage', 600, 630) }}

### Ereignis-Listener mit mehreren Optionen

Man kann mehr als eine der Optionen im `options`-Parameter setzen. Im folgenden Beispiel setzen wir zwei Optionen:

- `passive`, um zu bestätigen, dass der Handler [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) nicht aufrufen wird
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

### Verbesserung der Scroll-Leistung durch passive Listener

Das folgende Beispiel zeigt den Effekt des Setzens von `passive`. Es beinhaltet ein {{htmlelement("div")}}, das etwas Text enthält und ein Kontrollkästchen.

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

Der Code fügt einen Listener zum [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis des Containers hinzu, der standardmäßig den Container scrollt. Der Listener führt eine lang laufende Operation aus. Zunächst wird der Listener mit der `passive`-Option hinzugefügt, und immer wenn das Kontrollkästchen umgeschaltet wird, schaltet der Code die `passive`-Option um.

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

Der Effekt ist:

- Zunächst ist der Listener passiv, sodass das Scrollen durch den Container mit dem Rad sofort erfolgt.
- Wenn Sie "passive" deaktivieren und versuchen, mit dem Rad durch den Container zu scrollen, gibt es eine merkliche Verzögerung, bevor der Container scrollt, da der Browser warten muss, bis der lang laufende Listener abgeschlossen ist.

{{EmbedLiveSample("Improving scroll performance using passive listeners", 100, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)
- [Erstellen und Auslösen benutzerdefinierter Ereignisse](/de/docs/Web/Events/Creating_and_triggering_events)
- [Mehr Details zur Verwendung von `this` in Ereignis-Handlern](https://www.quirksmode.org/js/this.html)

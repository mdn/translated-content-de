---
title: "EventTarget: Methode addEventListener()"
short-title: addEventListener()
slug: Web/API/EventTarget/addEventListener
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die Methode **`addEventListener()`** des [`EventTarget`](/de/docs/Web/API/EventTarget)-Interfaces richtet eine Funktion ein, die jedes Mal aufgerufen wird, wenn das spezifizierte Ereignis an das Ziel übermittelt wird.

Häufige Ziele sind [`Element`](/de/docs/Web/API/Element) oder dessen Kinder, [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window). Das Ziel kann jedoch jedes Objekt sein, das Ereignisse unterstützt (wie z.B. [`IDBRequest`](/de/docs/Web/API/IDBRequest)).

> [!NOTE]
> Die Methode `addEventListener()` ist der _empfohlene_ Weg, einen Event-Listener zu registrieren. Die Vorteile sind wie folgt:
>
> - Sie ermöglicht das Hinzufügen von mehr als einem Handler für ein Ereignis. Dies ist besonders
>   nützlich für Bibliotheken, JavaScript-Module oder andere
>   Codearten, die gut mit anderen Bibliotheken oder Erweiterungen zusammenarbeiten müssen.
> - Im Gegensatz zur Verwendung einer `onXYZ`-Eigenschaft bietet sie eine feiner abgestufte Kontrolle über die Phase, in der der Listener aktiviert wird (Erfassung vs. Blasen).
> - Sie funktioniert bei jedem Event-Ziel, nicht nur bei HTML- oder SVG-Elementen.

Die Methode `addEventListener()` funktioniert, indem sie eine Funktion oder ein Objekt, das eine `handleEvent()`-Funktion implementiert, zur Liste der Event-Listener für den angegebenen Ereignistyp auf dem [`EventTarget`](/de/docs/Web/API/EventTarget) hinzufügt, auf dem sie aufgerufen wird. Wenn die Funktion oder das Objekt bereits in der Liste der Event-Listener für dieses Ziel ist, wird die Funktion oder das Objekt nicht ein zweites Mal hinzugefügt.

> [!NOTE]
> Wenn eine bestimmte anonyme Funktion in der Liste der Event-Listener registriert ist, die für ein bestimmtes Ziel registriert sind, und später im Code eine identische anonyme Funktion in einem `addEventListener`-Aufruf angegeben wird, wird die zweite Funktion _auch_ zur Liste der Event-Listener für dieses Ziel hinzugefügt.
>
> Tatsächlich sind anonyme Funktionen nicht identisch, selbst wenn sie mit
> demselben unveränderlichen Quellcode wiederholt definiert werden, **auch wenn sie in einer Schleife sind**.
>
> Dasselbe namenlose Funktion in solchen Fällen wiederholt zu definieren, kann
> problematisch sein (siehe [Memory-Probleme](#speicherprobleme), unten).

Wenn ein Event-Listener von innerhalb eines anderen Listeners zu einem [`EventTarget`](/de/docs/Web/API/EventTarget) hinzugefügt wird — das heißt, während der Bearbeitung des Ereignisses — wird dieses Ereignis nicht den neuen Listener auslösen. Der neue Listener kann jedoch in einer späteren Phase des Event-Flows ausgelöst werden, beispielsweise während der Bubbling-Phase.

## Syntax

```js-nolint
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

### Parameter

- `type`
  - : Ein differenzierungsfähiger String, der den zu hörenden [Ereignistyp](/de/docs/Web/Events) darstellt.
- `listener`
  - : Das Objekt, das eine Benachrichtigung erhält (ein Objekt, das die
    [`Event`](/de/docs/Web/API/Event)-Schnittstelle implementiert), wenn ein Ereignis des angegebenen Typs eintritt. Dies muss
    `null`, ein Objekt mit einer `handleEvent()`-Methode oder eine JavaScript-
    [Funktion](/de/docs/Web/JavaScript/Guide/Functions) sein. Siehe
    [Der Event-Listener Callback](#der_event-listener_callback) für Details zum Callback selbst.
- `options` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften über den Event-Listener spezifiziert. Die verfügbaren
    Optionen sind:

    - `capture` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass Ereignisse dieses Typs an den registrierten `listener` gesendet werden,
        bevor sie an ein darunterliegendes `EventTarget` im DOM-Baum gesendet werden. Wenn nicht angegeben, ist der Standardwert `false`.
    - `once` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass der `listener`
        höchstens einmal nach dem Hinzufügen aufgerufen werden soll. Wenn `true`, wird der
        `listener` automatisch entfernt, wenn er aufgerufen wird. Wenn nicht angegeben, ist der Standardwert `false`.
    - `passive` {{optional_inline}}

      - : Ein boolescher Wert, der, wenn `true`, angibt, dass die durch `listener` angegebene Funktion niemals [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen wird. Wenn ein passiver Listener `preventDefault()` aufruft, passiert nichts und eine Konsolenwarnung kann generiert werden.

        Wenn diese Option nicht angegeben ist, ist der Standardwert `false` – außer dass in anderen Browsern als Safari, der Standardwert `true` für [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignisse ist. Siehe [Verwendung passiver Listener](#verwendung_passiver_listener), um mehr zu erfahren.

    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Der Listener wird entfernt, wenn die [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des [`AbortController`](/de/docs/Web/API/AbortController), der das `AbortSignal` besitzt, aufgerufen wird. Wenn nicht angegeben, ist kein `AbortSignal` mit dem Listener verbunden.

- `useCapture` {{optional_inline}}

  - : Ein boolescher Wert, der angibt, ob Ereignisse dieses Typs an
    den registrierten `listener` _vor_ dem Senden an
    ein darunterliegendes `EventTarget` im DOM-Baum gesendet werden. Ereignisse, die nach oben durch den Baum blubbern, werden einen als Capture ausgewiesenen Listener nicht auslösen. Event-Blubbern und Capturing sind zwei Wege der Weitergabe von Ereignissen, die in einem Element auftreten, das innerhalb eines anderen verschachtelt ist, wenn beide Elemente einen Handler für dieses Ereignis registriert haben. Der Ereignisauslösungsmodus bestimmt die Reihenfolge, in der Elemente das Ereignis empfangen. Weitere Details finden Sie in [DOM Level 3 Events](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow) und [JavaScript Event-Reihenfolge](https://www.quirksmode.org/js/events_order.html#link4). Wenn nicht angegeben, ist der Standardwert von `useCapture` `false`.

    > [!NOTE]
    > Für Event-Listener, die am Ereignisziel angebracht sind, befindet sich das Ereignis in der Zielphase, anstatt in den Capturing- und Bubbling-Phasen. Event-Listener in der _Capturing_-Phase werden vor den Event-Listenern in der Ziel- und Bubbling-Phase aufgerufen.

- `wantsUntrusted` {{optional_inline}} {{non-standard_inline}}
  - : Ein Firefox (Gecko)-spezifischer Parameter. Wenn `true`, empfängt der Listener synthetische Ereignisse, die von Web-Inhalt gesendet werden (der Standardwert ist `false` für Browser-{{Glossary("chrome", "chrome")}} und `true` für reguläre Webseiten). Dieser Parameter ist nützlich für Code, der in Add-ons sowie im Browser selbst gefunden wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Nutzungshinweise

### Der Event-Listener Callback

Der Event-Listener kann entweder als Callback-Funktion oder
als ein Objekt spezifiziert werden, dessen `handleEvent()`-Methode als Callback-Funktion dient.

Die Callback-Funktion selbst hat dieselben Parameter und Rückgabewert wie die
`handleEvent()`-Methode; das heißt, der Callback akzeptiert einen einzigen Parameter: ein
Objekt basierend auf [`Event`](/de/docs/Web/API/Event), das das eingetretene Ereignis beschreibt, und es
gibt nichts zurück.

Zum Beispiel könnte ein Event-Handler-Callback, der sowohl
[`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)- als auch
[`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)-Ereignisse behandelt, folgendermaßen aussehen:

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

Es ist oft wünschenswert, auf das Element zu verweisen, auf dem der Event-Handler ausgelöst wurde,
zum Beispiel wenn ein generischer Handler für eine Gruppe ähnlicher Elemente verwendet wird.

Wenn eine Handler-Funktion an ein Element mit `addEventListener()` gebunden wird,
ist der Wert von {{jsxref("Operators/this","this")}} innerhalb des Handlers eine Referenz auf
das Element. Es wird derselbe Wert wie der der `currentTarget`-Eigenschaft des
Ereignisarguments sein, das an den Handler übergeben wird.

```js
my_element.addEventListener("click", function (e) {
  console.log(this.className); // logs the className of my_element
  console.log(e.currentTarget === this); // logs `true`
});
```

Zur Erinnerung: [Pfeilfunktionen haben keinen eigenen `this` Kontext](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

```js
my_element.addEventListener("click", (e) => {
  console.log(this.className); // WARNING: `this` is not `my_element`
  console.log(e.currentTarget === this); // logs `false`
});
```

Wenn ein Event-Handler (zum Beispiel [`onclick`](/de/docs/Web/API/Element/click_event)) bei einem Element im HTML-Quelltext angegeben ist, ist der JavaScript-Code im Attributwert effektiv in eine Handler-Funktion eingebettet, die den Wert von `this` ähnlich wie `addEventListener()` bindet; ein Vorkommen von `this` innerhalb des Codes repräsentiert eine Referenz auf das Element.

```html
<table id="my_table" onclick="console.log(this.id);">
  <!-- `this` refers to the table; logs 'my_table' -->
  …
</table>
```

Beachten Sie, dass der Wert von `this` innerhalb einer Funktion, _aufgerufen von_ dem Code
im Attributwert, gemäß den [Standardregeln](/de/docs/Web/JavaScript/Reference/Operators/this) behandelt wird. Dies wird
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
Objekt [`Window`](/de/docs/Web/API/Window) (oder `undefined`, wenn es sich um den [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) handelt).

#### Festlegen von "this" mit bind()

Die Methode {{jsxref("Function.prototype.bind()")}} ermöglicht es Ihnen, einen festen
`this`-Kontext für alle nachfolgenden Aufrufe festzulegen — wodurch Probleme vermieden werden, bei denen unklar ist, was `this` sein wird, abhängig vom
Kontext, aus dem Ihre Funktion aufgerufen wurde. Beachten Sie jedoch, dass Sie eine Referenz auf den Listener behalten müssen, damit Sie ihn später entfernen können.

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

Eine andere Lösung ist die Verwendung einer speziellen Funktion namens `handleEvent()`, um
beliebige Ereignisse abzufangen:

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

Eine weitere Möglichkeit, die Referenz zu `this` zu behandeln, ist die Verwendung einer Pfeilfunktion, die keinen separaten `this`-Kontext erstellt.

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

### Daten in und aus einem Event-Listener übergeben

Event-Listener nehmen nur ein Argument an,
ein [`Event`](/de/docs/Web/API/Event) oder eine Unterklasse von `Event`,
und ihr Rückgabewert wird ignoriert.
Daher, um Daten in einen Event-Listener einzuschleusen und aus diesem herauszubekommen, müssen Sie anstelle von Parameterübergaben und Rückgabewerten [Closures](/de/docs/Web/JavaScript/Guide/Closures) verwenden.

Die als Event-Listener übergebenen Funktionen haben Zugriff auf alle Variablen, die in den äußeren Bereichen deklariert sind, die die Funktion einschließen.

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

Lesen Sie [den Funktions-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_scopes_and_closures) für weitere Informationen über Funktionsbereiche.

### Speicherprobleme

```js
const elts = document.getElementsByTagName("*");

// Case 1
for (const elt of elts) {
  elt.addEventListener(
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

for (const elt of elts) {
  elt.addEventListener("click", processEvent, false);
}
```

Im ersten obigen Fall wird mit jeder Iteration der Schleife eine neue (anonyme) Handler-Funktion erstellt. Im zweiten Fall wird dieselbe vorher deklarierte Funktion als Event-Handler verwendet, was in einer kleineren Speichernutzung resultiert, da nur eine Handler-Funktion erstellt wird. Darüber hinaus ist es im ersten Fall nicht möglich, [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) aufzurufen, da keine Referenz auf die anonyme Funktion beibehalten wird (oder hier, keine von den mehreren anonymen Funktionen, die die Schleife möglicherweise erstellt). Im zweiten Fall ist es möglich, `myElement.removeEventListener("click", processEvent, false)` zu tun, da `processEvent` die Funktionsreferenz ist.

Tatsächlich ist in Bezug auf die Speichernutzung die fehlende Beibehaltung einer Funktionsreferenz nicht das wirkliche Problem; vielmehr ist es das Fehlen der Beibehaltung einer _statischen_ Funktionsreferenz.

### Verwendung passiver Listener

Wenn ein Ereignis eine Standardaktion hat — zum Beispiel ein [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, das den Container standardmäßig scrollt — ist der Browser im Allgemeinen nicht in der Lage, die Standardaktion zu starten, bis der Event-Listener abgeschlossen ist, da er nicht im Voraus weiß, ob der Event-Listener die Standardaktion durch einen Aufruf von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen könnte. Wenn der Event-Listener zu lange dauert, kann dies zu einer merklichen Verzögerung führen, auch bekannt als {{Glossary("jank", "Ruckeln")}}, bevor die Standardaktion ausgeführt werden kann.

Indem Sie die `passive`-Option auf `true` setzen, erklärt ein Event-Listener, dass er die Standardaktion nicht abbrechen wird, sodass der Browser die Standardaktion sofort starten kann, ohne darauf zu warten, dass der Listener beendet wird. Wenn der Listener dann [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, hat dies keine Wirkung.

Die Spezifikation für `addEventListener()` definiert den Standardwert für die `passive`-Option immer als `false`. Um jedoch die Scrollleistungsverbesserungen passiver Listener im Legacy-Code zu realisieren, haben moderne Browser den Standardwert für die `passive`-Option zu `true` für die [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignisse auf Dokumentebene-Nodes [`Window`](/de/docs/Web/API/Window), [`Document`](/de/docs/Web/API/Document), und [`Document.body`](/de/docs/Web/API/Document/body) geändert. Das verhindert, dass der Event-Listener das [Ereignis abbricht](/de/docs/Web/API/Event/preventDefault), sodass er das Seiten-Rendering nicht blockieren kann, während der Benutzer scrollt.

Deshalb müssen Sie, wenn Sie dieses Verhalten überschreiben und sicherstellen möchten, dass die `passive`-Option `false` ist, diese Option explizit auf `false` setzen (anstatt sich auf den Standardwert zu verlassen).

Sie müssen sich keine Sorgen über den Wert von `passive` für das grundlegende [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis machen.
Da es nicht abgebrochen werden kann, können Event-Listener das Seiten-Rendering nicht blockieren.

Siehe [Verbesserung der Scroll-Leistung durch passive Listener](#verbesserung_der_scroll-leistung_durch_passive_listener) für ein Beispiel, das die Auswirkung passiver Listener zeigt.

## Beispiele

### Einen einfachen Listener hinzufügen

Dieses Beispiel demonstriert, wie `addEventListener()` verwendet wird, um auf Mausklicks
auf ein Element zu achten.

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
die mit `addEventListener()` registriert werden. Ein Klick irgendwo in der Tabelle blubbert
zum Handler hoch und führt `modifyText()` aus.

#### Ergebnis

{{EmbedLiveSample('Add_a_simple_listener')}}

### Einen abbrechbaren Listener hinzufügen

Dieses Beispiel zeigt, wie man ein `addEventListener()` hinzufügt, das mit einem [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgebrochen werden kann.

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

Im obigen Beispiel ändern wir den Code aus dem vorherigen Beispiel so, dass nachdem der Inhalt der zweiten Zeile in "drei" geändert wurde, wir `abort()` vom [`AbortController`](/de/docs/Web/API/AbortController) aufrufen, den wir an den `addEventListener()`-Aufruf übergeben haben. Das führt dazu, dass der Wert für immer "drei" bleibt, weil wir keinen Code mehr haben, der auf ein Klickevent hört.

#### Ergebnis

{{EmbedLiveSample('Add_an_abortable_listener')}}

### Event-Listener mit anonymer Funktion

Hier werden wir uns ansehen, wie man eine anonyme Funktion verwendet, um Parameter in den
Event-Listener zu übergeben.

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
function modifyText(new_text) {
  const t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
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

Beachten Sie, dass der Listener eine anonyme Funktion ist, die Code kapselt, der dann wiederum
in der Lage ist, Parameter an die `modifyText()`-Funktion zu senden, die
für das tatsächliche Reagieren auf das Ereignis verantwortlich ist.

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_anonymous_function')}}

### Event-Listener mit einer Pfeilfunktion

Dieses Beispiel demonstriert einen Event-Listener, der mit der Pfeilfunktionen-Notation
implementiert wurde.

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
function modifyText(new_text) {
  const t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
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

Bitte beachten Sie, dass während anonyme und Pfeilfunktionen ähnlich sind, sie unterschiedliche
`this`-Bindungen haben. Während anonyme (und alle traditionellen JavaScript-Funktionen)
ihre eigenen `this`-Bindungen erstellen, erben Pfeilfunktionen die
`this`-Bindung der umgebenden Funktion.

Das bedeutet, dass die Variablen und Konstanten, die der umgebenden Funktion zur Verfügung stehen,
auch dem Event-Handler zur Verfügung stehen, wenn eine Pfeilfunktion verwendet wird.

### Beispiel für die Nutzung von Optionen

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
  //event.stopImmediatePropagation();
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
  //event.stopPropagation();
  log("inner2, none-passive, default, not open new page");
}
```

#### Ergebnis

Klicken Sie auf die äußeren, mittleren und inneren Container, um zu sehen, wie die Optionen funktionieren.

{{EmbedLiveSample('Example_of_options_usage', 600, 630)}}

### Event-Listener mit mehreren Optionen

Sie können im `options`-Parameter mehr als eine der Optionen setzen. Im folgenden Beispiel setzen wir zwei Optionen:

- `passive`, um zu versichern, dass der Handler kein [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen wird
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

### Verbesserung der Scroll-Leistung durch passive Listener

Das folgende Beispiel zeigt die Auswirkung des Setzens von `passive`. Es enthält ein {{htmlelement("div")}}, das einige Texte enthält, und eine Checkbox.

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

Der Code fügt einen Listener zum [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis des Containers hinzu, das standardmäßig den Container scrollt. Der Listener führt eine langlaufende Operation aus. Anfänglich wird der Listener mit der `passive`-Option hinzugefügt, und wann immer das Kontrollkästchen umgeschaltet wird, wird die `passive`-Option umgeschaltet.

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

- Anfangs ist der Listener passiv, sodass der Versuch, den Container mit dem Rad zu scrollen, sofort erfolgt.
- Wenn Sie "passiv" deaktivieren und versuchen, den Container mit dem Rad zu scrollen, gibt es eine merkliche Verzögerung, bevor der Container scrollt, da der Browser warten muss, bis der langlaufende Listener beendet ist.

{{EmbedLiveSample("Improving scroll performance using passive listeners", 100, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)
- [Erstellen und Auslösen benutzerdefinierter Ereignisse](/de/docs/Web/Events/Creating_and_triggering_events)
- [Weitere Details zur Verwendung von `this` in Event-Handlern](https://www.quirksmode.org/js/this.html)

---
title: "EventTarget: addEventListener() Methode"
short-title: addEventListener()
slug: Web/API/EventTarget/addEventListener
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`addEventListener()`**-Methode des [`EventTarget`](/de/docs/Web/API/EventTarget)-Interfaces
richtet eine Funktion ein, die immer aufgerufen wird, wenn das angegebene Ereignis an das Ziel gesendet wird.

Gängige Ziele sind [`Element`](/de/docs/Web/API/Element) oder seine Kinder, [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window),
aber das Ziel kann jedes Objekt sein, das Ereignisse unterstützt (wie z. B. [`IDBRequest`](/de/docs/Web/API/IDBRequest)).

> [!NOTE]
> Die `addEventListener()`-Methode ist die _empfohlene_ Methode, um einen Event-Listener zu registrieren. Die Vorteile sind wie folgt:
>
> - Sie erlaubt es, mehr als einen Handler für ein Ereignis hinzuzufügen. Dies ist besonders
>   nützlich für Bibliotheken, JavaScript-Module oder andere
>   Codes, die gut mit anderen Bibliotheken oder Erweiterungen funktionieren müssen.
> - Im Gegensatz zur Verwendung einer `onXYZ`-Eigenschaft bietet sie eine feinere Kontrolle über die Phase, in der der Listener aktiviert wird (Capturing vs. Bubbling).
> - Sie funktioniert bei jedem Ereignisziel, nicht nur bei HTML- oder SVG-Elementen.

Die Methode `addEventListener()` funktioniert, indem sie eine Funktion oder ein Objekt, das eine `handleEvent()`-Funktion implementiert, zur Liste der Event-Listener für den angegebenen Ereignistyp
auf dem [`EventTarget`](/de/docs/Web/API/EventTarget) hinzufügt, auf dem sie aufgerufen wird. Wenn die Funktion oder das Objekt bereits in der Liste der Event-Listener für dieses Ziel ist, wird die Funktion oder das Objekt nicht ein zweites Mal hinzugefügt.

> [!NOTE]
> Wenn eine bestimmte anonyme Funktion in der Liste der für ein bestimmtes Ziel registrierten Event-Listener steht und später im Code eine identische anonyme Funktion in einem `addEventListener`-Aufruf angegeben wird, wird die zweite Funktion _auch_ zur Liste der Event-Listener für dieses Ziel hinzugefügt.
>
> Anonyme Funktionen sind tatsächlich nicht identisch, selbst wenn sie mit demselben
> unveränderten Quellcode wiederholt definiert werden, **sogar in einer Schleife**.
>
> Wiederholtes Definieren derselben unbenannten Funktion in solchen Fällen kann
> problematisch sein. (Siehe [Speicherprobleme](#speicherprobleme) unten.)

Wenn ein Event-Listener von innerhalb eines anderen Listeners zu einem [`EventTarget`](/de/docs/Web/API/EventTarget) hinzugefügt wird —
das heißt, während der Verarbeitung des Ereignisses —
wird dieses Ereignis den neuen Listener nicht auslösen.
Der neue Listener kann jedoch in einer späteren Phase des Event-Flows ausgelöst werden,
wie beispielsweise in der Bubbling-Phase.

## Syntax

```js-nolint
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

### Parameter

- `type`
  - : Ein case-sensitiver String, der den [Ereignistyp](/de/docs/Web/Events) darstellt, für den Sie lauschen.
- `listener`
  - : Das Objekt, das eine Benachrichtigung erhält (ein Objekt, das das
    [`Event`](/de/docs/Web/API/Event)-Interface implementiert), wenn ein Ereignis des angegebenen Typs auftritt. Dies muss
    `null`, ein Objekt mit einer `handleEvent()`-Methode oder eine JavaScript-
    [Funktion](/de/docs/Web/JavaScript/Guide/Functions) sein. Siehe
    [Der Event-Listener-Callback](#der_event-listener-callback) für Details zum Callback selbst.
- `options` {{optional_inline}}

  - : Ein Objekt, das Merkmale über den Event-Listener spezifiziert. Die verfügbaren
    Optionen sind:

    - `capture` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass Ereignisse dieses Typs vor allen
        unter ihnen im DOM-Baum befindlichen `EventTargets` an den registrierten `listener`
        gesendet werden. Wenn nicht angegeben, wird standardmäßig `false` verwendet.
    - `once` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass der `listener`
        höchstens einmal aufgerufen werden soll, nachdem er hinzugefügt wurde. Wenn `true`,
        würde der `listener` automatisch entfernt, wenn er aufgerufen wird. Wenn nicht angegeben, wird standardmäßig `false` verwendet.
    - `passive` {{optional_inline}}

      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, angibt, dass die durch den `listener` spezifizierte Funktion niemals [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen wird. Wenn ein passiver Listener `preventDefault()` aufruft, passiert nichts und es kann eine Konsolenwarnung generiert werden.

        Wenn diese Option nicht angegeben ist, wird sie standardmäßig auf `false` gesetzt – mit der Ausnahme, dass sie in anderen Browsern außer Safari für [`wheel`](/de/docs/Web/API/Element/wheel_event)-, [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event)-, [`touchstart`](/de/docs/Web/API/Element/touchstart_event)- und [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignisse standardmäßig auf `true` gesetzt ist. Siehe [Verwendung passiver Listener](#verwendung_passiver_listener), um mehr zu erfahren.

    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Der Listener wird entfernt, wenn die [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des [`AbortController`](/de/docs/Web/API/AbortController), der das `AbortSignal` besitzt, aufgerufen wird. Wenn nicht angegeben, ist kein `AbortSignal` mit dem Listener verbunden.

- `useCapture` {{optional_inline}}

  - : Ein boolescher Wert, der angibt, ob Ereignisse dieses Typs an den registrierten `listener` _vor_ den an
    unter ihm im DOM-Baum befindlichen `EventTargets` gesendet werden. Ereignisse, die nach oben durch den Baum blubbern, lösen keinen Listener aus, der für das Capturing vorgesehen ist. Das Event-
    Propagationsmodell bestimmt die Reihenfolge, in der Elemente das Ereignis empfangen. Siehe [DOM Level 3 Events](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow) und [JavaScript Event order](https://www.quirksmode.org/js/events_order.html#link4) für eine detaillierte Erklärung.
    Wenn nicht angegeben, wird `useCapture` standardmäßig auf `false` gesetzt.

    > [!NOTE]
    > Für Event-Listener, die am Event-Ziel befestigt sind, befindet sich das Ereignis in der Zielphase, und nicht in den Capturing- oder Bubbling-Phasen.
    > Event-Listener in der _capturing_ Phase werden vor Event-Listenern in der Ziel- und Bubbling-Phase aufgerufen.

- `wantsUntrusted` {{optional_inline}} {{non-standard_inline}}
  - : Ein Firefox (Gecko)-spezifischer Parameter. Wenn `true`, empfängt der Listener
    synthetische Ereignisse, die vom Webinhalt versendet werden (der Standard ist `false` für
    Browser {{Glossary("chrome", "chrome")}} und `true` für reguläre Webseiten). Dieser
    Parameter ist nützlich für Code, der in Add-ons sowie im Browser selbst zu finden ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Anwendungshinweise

### Der Event-Listener-Callback

Der Event-Listener kann entweder als Callback-Funktion oder
als Objekt spezifiziert werden, dessen `handleEvent()`-Methode als Callback-Funktion dient.

Die Rückruffunktion selbst hat dieselben Parameter und denselben Rückgabewert wie die
`handleEvent()`-Methode; das heißt, der Callback akzeptiert einen einzelnen Parameter: ein
auf [`Event`](/de/docs/Web/API/Event) basierendes Objekt, das das aufgetretene Ereignis beschreibt, und gibt
nichts zurück.

Zum Beispiel könnte ein Event-Handler-Callback, der sowohl
[`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) als auch
[`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) behandelt, so aussehen:

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
zum Beispiel bei der Verwendung eines generischen Handlers für eine Reihe ähnlicher Elemente.

Wenn eine Handler-Funktion mit `addEventListener()` an ein Element gebunden wird,
ist der Wert von {{jsxref("Operators/this","this")}} innerhalb des Handlers eine Referenz auf
das Element. Es wird der gleiche sein wie der Wert der `currentTarget`-Eigenschaft des
Ereignisarguments, das an den Handler übergeben wird.

```js
my_element.addEventListener("click", function (e) {
  console.log(this.className); // logs the className of my_element
  console.log(e.currentTarget === this); // logs `true`
});
```

Zur Erinnerung: [Arrow-Funktionen haben keinen eigenen `this` Kontext](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

```js
my_element.addEventListener("click", (e) => {
  console.log(this.className); // WARNING: `this` is not `my_element`
  console.log(e.currentTarget === this); // logs `false`
});
```

Wenn ein Event-Handler (zum Beispiel [`onclick`](/de/docs/Web/API/Element/click_event)) an ein Element im HTML-Quellcode spezifiziert wird, ist der JavaScript-Code im Attributswert effektiv in eine Handler-Funktion eingebunden, die den Wert von `this` in einer Weise bindet, die mit `addEventListener()` konsistent ist; ein Vorkommen von `this` innerhalb des Codes stellt eine Referenz auf das Element dar.

```html
<table id="my_table" onclick="console.log(this.id);">
  <!-- `this` refers to the table; logs 'my_table' -->
  …
</table>
```

Beachten Sie, dass der Wert von `this` innerhalb einer Funktion, die _vom_ Code
im Attributswert aufgerufen wird, sich gemäß den [Standardregeln](/de/docs/Web/JavaScript/Reference/Operators/this) verhält. Dies wird
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
Objekt [`Window`](/de/docs/Web/API/Window) (oder `undefined` im Fall von [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode).

#### Festlegen von "this" mit bind()

Die {{jsxref("Function.prototype.bind()")}}-Methode ermöglicht es Ihnen, einen festen
`this`-Kontext für alle nachfolgenden Aufrufe festzulegen – wodurch Probleme umgangen werden, bei denen unklar ist, was `this` sein wird, abhängig vom
Kontext, aus dem Ihre Funktion aufgerufen wurde. Beachten Sie jedoch, dass Sie eine
Referenz zum Listener behalten müssen, um ihn später entfernen zu können.

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

Eine andere Möglichkeit, den Bezug zu `this` zu handhaben, ist die Verwendung einer Pfeilfunktion, die keinen separaten `this`-Kontext erstellt.

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

### Daten in einen Event-Listener hinein- und herausbekommen

Event-Listener nehmen nur ein Argument,
ein [`Event`](/de/docs/Web/API/Event) oder eine Unterklasse von `Event`,
das automatisch an den Listener übergeben wird, und der Rückgabewert wird ignoriert.
Daher müssen Sie anstelle von Parametern und Rückgabewerten, um Daten in einen Event-Listener hinein- und herauszubekommen, [Closures](/de/docs/Web/JavaScript/Guide/Closures) erstellen.

Die Funktionen, die als Event-Listener übergeben werden, haben Zugriff auf alle im äußeren Bereich deklarierten Variablen, die die Funktion enthalten.

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

Lesen Sie [den Funktionsleitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_scopes_and_closures) für weitere Informationen zu Funktionsbereichen.

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

Im ersten Fall oben wird mit jeder Iteration der Schleife eine neue (anonyme) Handler-Funktion erstellt. Im zweiten Fall wird die gleiche zuvor deklarierte Funktion als Event-Handler verwendet, was zu einem geringeren Speicherverbrauch führt, da nur
eine Handler-Funktion erstellt wird. Außerdem ist es im ersten Fall nicht möglich,
[`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) aufzurufen, da keine
Referenz zur anonymen Funktion beibehalten wird (oder hier nicht zu einer der vielen
anonymen Funktionen, die die Schleife erstellen könnte.) Im zweiten Fall ist es möglich,
`myElement.removeEventListener("click", processEvent, false)`
aufzurufen, da `processEvent` die Funktionsreferenz ist.

Was den Speicherverbrauch betrifft, ist eigentlich das Fehlen einer Funktionsreferenz nicht
das eigentliche Problem; vielmehr ist es das Fehlen einer _statischen_ Funktionsreferenz.

### Verwendung passiver Listener

Wenn ein Ereignis eine Standardaktion hat – zum Beispiel ein [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, das standardmäßig den Container scrollt – ist der Browser im Allgemeinen nicht in der Lage, die Standardaktion zu starten, bis der Event-Listener abgeschlossen ist, da er im Voraus nicht weiß, ob der Event-Listener die Standardaktion durch den Aufruf von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen könnte. Wenn der Event-Listener zu lange dauert, kann dies eine spürbare Verzögerung verursachen, auch bekannt als {{Glossary("jank", "Jank")}}, bevor die Standardaktion ausgeführt werden kann.

Indem die Option `passive` auf `true` gesetzt wird, erklärt ein Event-Listener, dass er die Standardaktion nicht abbricht, sodass der Browser die Standardaktion sofort starten kann, ohne auf das Ende des Listeners zu warten. Wenn der Listener dann tatsächlich [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, hat dies keine Wirkung.

Die Spezifikation für `addEventListener()` definiert den Standardwert für die Option `passive` immer als `false`. Um jedoch die Scroll-Leistungsvorteile passiver Listener in Legacy-Code zu realisieren, haben moderne Browser den Standardwert der Option `passive` für die [`wheel`](/de/docs/Web/API/Element/wheel_event)-, [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event)-, [`touchstart`](/de/docs/Web/API/Element/touchstart_event)- und [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignisse auf Dokumentebene auf [`Window`](/de/docs/Web/API/Window), [`Document`](/de/docs/Web/API/Document) und [`Document.body`](/de/docs/Web/API/Document/body) geändert. Das verhindert, dass der Event-Listener [das Ereignis abbricht](/de/docs/Web/API/Event/preventDefault), sodass er das Seiten-Rendering nicht blockieren kann, während der Nutzer scrollt.

Deshalb müssen Sie, wenn Sie dieses Verhalten überschreiben und sicherstellen möchten, dass die Option `passive` `false` ist, die Option ausdrücklich auf `false` setzen (anstatt sich auf den Standardwert zu verlassen).

Sie müssen sich keine Gedanken über den Wert von `passive` beim grundlegenden [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis machen.
Da es nicht abgebrochen werden kann, können Event-Listener das Seiten-Rendering nicht blockieren.

Siehe [Verbesserung der Scroll-Leistung mit passiven Listenern](#verbesserung_der_scroll-leistung_mit_passiven_listenern) für ein Beispiel, das die Wirkung passiver Listener zeigt.

## Beispiele

### Einfache Listener hinzufügen

Dieses Beispiel zeigt, wie `addEventListener()` verwendet wird, um auf Mausklicks auf ein Element zu reagieren.

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

In diesem Code ist `modifyText()` ein Listener für `click`-Ereignisse, der mit `addEventListener()` registriert wurde. Ein Klick irgendwo in der Tabelle blubbert bis zum Handler und führt `modifyText()` aus.

#### Resultat

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

Im obigen Beispiel verändern wir den Code im vorherigen Beispiel so, dass nachdem der Inhalt der zweiten Zeile in "three" geändert wird, der `abort()` des [`AbortController`](/de/docs/Web/API/AbortController), den wir an den `addEventListener()`-Aufruf übergeben haben, aufgerufen wird. Das führt dazu, dass der Wert für immer "three" bleibt, da wir keinen Code mehr haben, der einem Klick-Ereignis lauscht.

#### Resultat

{{EmbedLiveSample('Add_an_abortable_listener')}}

### Event-Listener mit anonymer Funktion

Hier betrachten wir, wie man eine anonyme Funktion verwendet, um Parameter an den
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

Beachten Sie, dass der Listener eine anonyme Funktion ist, die Code kapselt, der dann
in der Lage ist, Parameter an die `modifyText()`-Funktion zu senden, die
verantwortlich ist, auf das Ereignis zu reagieren.

#### Resultat

{{EmbedLiveSample('Event_listener_with_anonymous_function')}}

### Event-Listener mit einer Pfeilfunktion

Dieses Beispiel zeigt einen Event-Listener, der mit Hilfe der Pfeilfunktion-Notation
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

#### Resultat

{{EmbedLiveSample('Event_listener_with_an_arrow_function')}}

Bitte beachten Sie, dass anonyme und Pfeil-Funktionen zwar ähnlich sind, sie jedoch unterschiedliche
`this`-Bindungen haben. Während anonyme (und alle traditionellen JavaScript-Funktionen)
ihre eigenen `this`-Bindungen erstellen, erben Pfeil-Funktionen die
`this`-Bindung der umgebenden Funktion.

Das bedeutet, dass die in der umgebenden Funktion verfügbaren Variablen und Konstanten
auch dem Event-Handler bei Verwendung einer Pfeil-Funktion zur Verfügung stehen.

### Beispiel für Optionen

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

#### Resultat

Klicken Sie auf die äußere, mittlere, innere Container, um zu sehen, wie die Optionen funktionieren.

{{ EmbedLiveSample('Example_of_options_usage', 600, 630) }}

### Event-Listener mit mehreren Optionen

Sie können mehr als eine der Optionen im `options`-Parameter festlegen. Im folgenden Beispiel setzen wir zwei Optionen:

- `passive`, um sicherzustellen, dass der Handler nicht [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft
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

#### Resultat

{{EmbedLiveSample('Event_listener_with_multiple_options')}}

### Verbesserung der Scroll-Leistung mit passiven Listenern

Das folgende Beispiel zeigt die Wirkung des Setzens von `passive`. Es enthält ein {{htmlelement("div")}}, das einige Text und ein Kontrollkästchen enthält.

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

Der Code fügt einen Listener zum [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis des Containers hinzu, das standardmäßig den Container scrollt. Der Listener führt eine lang andauernde Operation aus. Anfangs wird der Listener mit der `passive`-Option hinzugefügt, und jedes Mal, wenn das Kontrollkästchen umgeschaltet wird, wird die `passive`-Option umgeschaltet.

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

#### Resultat

Der Effekt ist, dass:

- Anfangs ist der Listener passiv, wodurch das Scrollen des Containers mit dem Rad sofort erfolgt.
- Wenn Sie "passive" deaktivieren und versuchen, den Container mit dem Rad zu scrollen, gibt es eine spürbare Verzögerung, bevor der Container scrollt, da der Browser warten muss, bis der lang andauernde Listener beendet ist.

{{EmbedLiveSample("Improving scroll performance using passive listeners", 100, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)
- [Erstellung und Auslösung benutzerdefinierter Ereignisse](/de/docs/Web/Events/Creating_and_triggering_events)
- [Weitere Details zur Verwendung von `this` in Event-Handlern](https://www.quirksmode.org/js/this.html)

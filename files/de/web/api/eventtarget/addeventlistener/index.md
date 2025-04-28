---
title: "EventTarget: addEventListener() Methode"
short-title: addEventListener()
slug: Web/API/EventTarget/addEventListener
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`addEventListener()`**-Methode des [`EventTarget`](/de/docs/Web/API/EventTarget)-Interfaces richtet eine Funktion ein, die immer dann aufgerufen wird, wenn das spezifizierte Ereignis an das Ziel übermittelt wird.

Gängige Ziele sind [`Element`](/de/docs/Web/API/Element) oder dessen Kinder, [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window), aber das Ziel kann jedes Objekt sein, das Ereignisse unterstützt (wie z.B. [`IDBRequest`](/de/docs/Web/API/IDBRequest)).

> [!NOTE]
> Die `addEventListener()`-Methode ist die _empfohlene_ Methode, um einen Ereignis-Listener zu registrieren. Die Vorteile sind:
>
> - Sie ermöglicht es, mehr als einen Handler für ein Ereignis hinzuzufügen. Dies ist besonders
>   nützlich für Bibliotheken, JavaScript-Module oder jede andere Art von
>   Code, der gut mit anderen Bibliotheken oder Erweiterungen zusammenarbeiten muss.
> - Im Gegensatz zur Verwendung einer `onXYZ`-Eigenschaft gibt sie Ihnen eine feinere Kontrolle über die Phase, in der der Listener aktiviert wird (capturing vs. bubbling).
> - Sie funktioniert bei jedem Ereignisziel, nicht nur bei HTML- oder SVG-Elementen.

Die Methode `addEventListener()` funktioniert, indem sie eine Funktion oder ein Objekt, das eine `handleEvent()`-Funktion implementiert, zur Liste der Ereignis-Listener für den spezifizierten Ereignistyp hinzufügt
auf dem [`EventTarget`](/de/docs/Web/API/EventTarget), auf dem es aufgerufen wird. Wenn die Funktion oder das Objekt bereits in der Liste der Ereignis-Listener für dieses Ziel vorhanden ist, wird die Funktion oder das Objekt nicht zum zweiten Mal hinzugefügt.

> [!NOTE]
> Wenn eine bestimmte anonyme Funktion in der Liste der für ein bestimmtes Ziel registrierten Ereignis-Listener ist und dann später im Code eine identische anonyme Funktion in einem `addEventListener`-Aufruf angegeben wird, wird die zweite Funktion _auch_ zur Liste der Ereignis-Listener für dieses Ziel hinzugefügt.
>
> Tatsächlich sind anonyme Funktionen nicht identisch, selbst wenn sie mit unverändertem
> Quellcode, der wiederholt aufgerufen wird, _definiert_ werden, **selbst in einer Schleife**.
>
> Das wiederholte Definieren derselben namenlosen Funktion in solchen Fällen kann
> problematisch sein. (Siehe [Speicherprobleme](#speicherprobleme), unten.)

Wenn ein Ereignis-Listener während der Verarbeitung des Ereignisses zu einem [`EventTarget`](/de/docs/Web/API/EventTarget) von innen eines anderen Listeners hinzugefügt wird —
das heißt, während der Verarbeitung des Ereignisses —
wird dieses Ereignis den neuen Listener nicht auslösen.
Jedoch kann der neue Listener während einer späteren Phase des Ereignis-Flusses ausgelöst werden,
wie z. B. während der Bubbling-Phase.

## Syntax

```js-nolint
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

### Parameter

- `type`
  - : Ein faltenempfindlicher String, der den [Ereignistyp](/de/docs/Web/Events) darstellt, für den Sie zuhören möchten.
- `listener`
  - : Das Objekt, das eine Benachrichtigung erhält (ein Objekt, das das
    [`Event`](/de/docs/Web/API/Event)-Interface implementiert), wenn ein Ereignis des spezifizierten Typs eintritt. Muss
    `null`, ein Objekt mit einer `handleEvent()`-Methode oder eine JavaScript-
    [Funktion](/de/docs/Web/JavaScript/Guide/Functions) sein. Siehe
    [Der Event-Listener-Callback](#der_event-listener-callback) für Details zum Callback selbst.
- `options` {{optional_inline}}

  - : Ein Objekt, das Merkmale über den Ereignis-Listener spezifiziert. Die verfügbaren
    Optionen sind:

    - `capture` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass Ereignisse dieses Typs an den registrierten `listener` übergeben werden, bevor sie an ein darunterliegendes `EventTarget` im DOM-Baum übergeben werden. Wenn nicht angegeben, ist der Standard `false`.
    - `once` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass der `listener`
        höchstens einmal nach dem Hinzufügen aufgerufen werden soll. Wenn `true`, wird der
        `listener` automatisch entfernt, wenn er aufgerufen wird. Wenn nicht angegeben, ist der Standard `false`.
    - `passive` {{optional_inline}}

      - : Ein boolescher Wert, der angibt, dass die durch `listener` spezifizierte Funktion niemals [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen wird. Wenn ein passiver Listener `preventDefault()` aufruft, passiert nichts und möglicherweise wird eine Konsolenwarnung generiert.

        Wenn diese Option nicht angegeben ist, ist der Standard `false`, außer dass in Browsern außer Safari der Standard `true` für [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event) Ereignisse ist. Siehe [Verwendung passiver Listener](#verwendung_passiver_listener) um mehr zu erfahren.

    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Der Listener wird entfernt, wenn die [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des [`AbortController`](/de/docs/Web/API/AbortController), dem das `AbortSignal` gehört, aufgerufen wird. Wenn nicht angegeben, ist kein `AbortSignal` mit dem Listener verbunden.

- `useCapture` {{optional_inline}}

  - : Ein boolescher Wert, der angibt, ob Ereignisse dieses Typs an den registrierten `listener` _bevor_ sie an ein darunterliegendes `EventTarget` im DOM-Baum übergeben werden. Ereignisse, die den Baum nach oben durchlaufen, werden keinen Listener auslösen, der zum Verwenden von Capture bestimmt ist. Ereignis bubbling und capturing sind zwei Wege der Ereignisweitergabe, die in einem Element auftreten, das in ein anderes Element eingebettet ist, wenn beide Elemente einen Handler für dieses Ereignis registriert haben. Der Ereignisweitergabemodus bestimmt die Reihenfolge, in der Elemente das Ereignis empfangen. Siehe [DOM Level 3 Events](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow) und [JavaScript Ereignis-Reihenfolge](https://www.quirksmode.org/js/events_order.html#link4) für eine detaillierte Erklärung.
    Wenn nicht angegeben, ist der Standard für `useCapture` `false`.

    > [!NOTE]
    > Für Ereignis-Listener, die an das Ereignisziel angehängt sind, befindet sich das Ereignis in der Zielphase, im Gegensatz zur Capture- und Bubbling-Phase.
    > Ereignis-Listener in der _Capture_-Phase werden vor Ereignis-Listenern in den Ziel- und Bubbling-Phasen aufgerufen.

- `wantsUntrusted` {{optional_inline}} {{non-standard_inline}}
  - : Ein Firefox (Gecko)-spezifischer Parameter. Wenn `true`, empfängt der Listener
    synthetische Ereignisse, die von Webinhalten gesendet werden (der Standard ist `false` für
    Browser {{Glossary("chrome", "chrome")}} und `true` für normale Webseiten). Diese
    Parameter ist nützlich für Code, der in Add-ons gefunden wird, sowie den Browser selbst.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Verwendungshinweise

### Der Event-Listener-Callback

Der Ereignis-Listener kann entweder als eine Callback-Funktion oder als
ein Objekt angegeben werden, dessen `handleEvent()`-Methode als Callback-Funktion dient.

Die Callback-Funktion selbst hat die gleichen Parameter und gibt denselben Wert zurück wie die
`handleEvent()`-Methode; das heißt, der Callback akzeptiert einen einzelnen Parameter: ein
Objekt, das auf [`Event`](/de/docs/Web/API/Event) basiert und das das aufgetretene Ereignis beschreibt, und er gibt
nichts zurück.

Zum Beispiel könnte ein Ereignis-Handler-Callback, der sowohl
[`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) und
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

Es ist oft wünschenswert, auf das Element zuzugreifen, auf dem der Ereignis-Handler ausgelöst wurde,
zum Beispiel, wenn ein generischer Handler für eine Reihe ähnlicher Elemente verwendet wird.

Wenn Sie eine Handler-Funktion mit `addEventListener()` an ein Element anhängen,
wird der Wert von {{jsxref("Operators/this","this")}} innerhalb des Handlers eine Referenz auf
das Element sein. Es wird derselbe Wert sein wie der der `currentTarget`-Eigenschaft des
Ereignis-Arguments, das an den Handler übergeben wird.

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

Wenn ein Ereignis-Handler (zum Beispiel [`onclick`](/de/docs/Web/API/Element/click_event)) an einem Element im HTML-Quellcode spezifiziert ist, wird der JavaScript-Code im Attributwert effektiv in eine Handler-Funktion eingebunden, die den Wert von `this` in einer Weise bindet, die mit `addEventListener()` konsistent ist; ein Vorkommen von `this` innerhalb des Codes stellt eine Referenz auf das Element dar.

```html
<table id="my_table" onclick="console.log(this.id);">
  <!-- `this` refers to the table; logs 'my_table' -->
  …
</table>
```

Beachten Sie, dass der Wert von `this` innerhalb einer Funktion, die vom Code
im Attributwert _aufgerufen_ wird, sich gemäß den [Standardregeln](/de/docs/Web/JavaScript/Reference/Operators/this) verhält. Dies wird
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

Der Wert von `this` innerhalb `logID()` ist eine Referenz auf das globale
Objekt [`Window`](/de/docs/Web/API/Window) (oder `undefined` im Fall des [strict modes](/de/docs/Web/JavaScript/Reference/Strict_mode).

#### Spezifizierung von "this" mithilfe von bind()

Die {{jsxref("Function.prototype.bind()")}}-Methode ermöglicht es Ihnen, einen festen
`this`-Kontext für alle nachfolgenden Aufrufe zu etablieren — damit umgehen Sie Probleme, bei denen nicht klar ist, was `this` sein wird, je nach
dem Kontext, aus dem Ihre Funktion aufgerufen wurde. Beachten Sie jedoch, dass Sie
eine Referenz auf den Listener behalten müssen, um ihn später entfernen zu können.

Hier ist ein Beispiel mit und ohne `bind()`:

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

Eine andere Lösung besteht darin, eine spezielle Funktion namens `handleEvent()` zu verwenden, um
alle Ereignisse zu erfassen:

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

Eine andere Möglichkeit zur Handhabung der Referenz zu `this` besteht darin, eine Arrow-Funktion zu verwenden, die keinen eigenen `this`-Kontext erzeugt.

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

Ereignis-Listener nehmen nur ein Argument,
ein [`Event`](/de/docs/Web/API/Event) oder eine Unterklasse von `Event`,
die automatisch an den Listener übergeben wird, und der Rückgabewert wird ignoriert.
Um daher Daten in und aus einem Ereignis-Listener zu bekommen, erstellen Sie [Closures](/de/docs/Web/JavaScript/Guide/Closures) anstatt Daten durch Parameter und Rückgabewerte zu übergeben.

Die als Ereignis-Listener übergebenen Funktionen haben Zugriff auf alle Variablen, die in den äußeren Scopes deklariert sind, die die Funktion enthalten.

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

Lesen Sie [den Funktions-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_scopes_and_closures) für weitere Informationen über Funktions-Scopes.

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

Im ersten Fall oben wird in jeder
Iteration der Schleife eine neue (anonyme) Handler-Funktion erstellt. Im zweiten Fall wird dieselbe zuvor deklarierte Funktion als
Ereignis-Handler verwendet, was zu einem geringeren Speicherverbrauch führt, da nur
eine Handler-Funktion erstellt wird. Zudem ist es im ersten Fall nicht möglich,
[`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) aufzurufen, da keine
Referenz zur anonymen Funktion aufbewahrt wird (oder hier, nicht zu irgendeiner der mehreren
anonymen Funktionen, die die Schleife möglicherweise erstellt). Im zweiten Fall ist es möglich,
`myElement.removeEventListener("click", processEvent, false)`
aufzurufen, weil `processEvent` die Funktionsreferenz ist.

Tatsächlich ist in Bezug auf den Speicherverbrauch nicht das Fehlen einer Funktionsreferenz
das wirkliche Problem; vielmehr ist es das Fehlen einer _statischen_ Funktionsreferenz.

### Verwendung passiver Listener

Wenn ein Ereignis eine Standardaktion hat – zum Beispiel ein [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, das standardmäßig den Container scrollt – kann der Browser die Standardaktion im Allgemeinen nicht starten, bevor der Ereignis-Listener beendet ist, weil er nicht im Voraus weiß, ob der Ereignis-Listener die Standardaktion möglicherweise mit einem Aufruf von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbricht. Wenn der Ereignis-Listener zu lange dauert, kann dies zu einer spürbaren Verzögerung, auch bekannt als {{Glossary("jank", "Jank")}}, führen, bevor die Standardaktion ausgeführt werden kann.

Durch das Setzen der `passive`-Option auf `true` erklärt ein Ereignis-Listener, dass er die Standardaktion nicht abbrechen wird, sodass der Browser die Standardaktion sofort starten kann, ohne auf das Ende des Listeners zu warten. Wenn der Listener dann `Event.preventDefault()` aufruft, hat dies keine Auswirkungen.

Die Spezifikation für `addEventListener()` definiert den Standardwert für die `passive`-Option immer als `false`. Um jedoch die Leistungsverbesserungen beim Scrollen passiver Listener im Legacy-Code zu realisieren, haben moderne Browser den Standardwert der `passive`-Option für die [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignisse auf dokumentbezogene Knoten wie [`Window`](/de/docs/Web/API/Window), [`Document`](/de/docs/Web/API/Document) und [`Document.body`](/de/docs/Web/API/Document/body) auf `true` geändert. Dies verhindert, dass der Ereignis-Listener das Ereignis [abbrechen](/de/docs/Web/API/Event/preventDefault), sodass es das Seitenrendering während des Scrollens des Benutzers nicht blockieren kann.

Deshalb müssen Sie, wenn Sie dieses Verhalten überschreiben und sicherstellen möchten, dass die `passive`-Option `false` ist, explizit die Option auf `false` setzen (anstatt sich auf den Standardwert zu verlassen).

Sie müssen sich keine Sorgen um den Wert von `passive` für das grundlegende [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis machen.
Da es nicht abgebrochen werden kann, können Ereignis-Listener das Seitenrendering sowieso nicht blockieren.

Siehe [Verbesserung der Scrollleistung durch Nutzung passiver Listener](#verbesserung_der_scroll-leistung_durch_verwendung_passiver_listener) für ein Beispiel, das die Wirkung passiver Listener zeigt.

## Beispiele

### Einen einfachen Listener hinzufügen

Dieses Beispiel zeigt, wie man `addEventListener()` verwendet, um auf Mausklicks auf ein Element zu achten.

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

In diesem Code ist `modifyText()` ein Listener für `click`-Ereignisse
über `addEventListener()` registriert. Ein Klick irgendwo in der Tabelle
wird an den Handler übergeben und führt `modifyText()` aus.

#### Ergebnis

{{EmbedLiveSample('Add_a_simple_listener')}}

### Einen abbruchbaren Listener hinzufügen

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

Im obigen Beispiel ändern wir den Code des vorherigen Beispiels so, dass nach dem Ändern des Inhalts der zweiten Zeile zu "drei", wir `abort()` aus dem [`AbortController`](/de/docs/Web/API/AbortController) aufrufen, den wir an den `addEventListener()`-Aufruf übergeben haben. Dies führt dazu, dass der Wert für immer "drei" bleibt, da wir keinen Code mehr haben, der auf ein Klick-Ereignis achtet.

#### Ergebnis

{{EmbedLiveSample('Add_an_abortable_listener')}}

### Ereignis-Listener mit anonymer Funktion

Hier werden wir uns ansehen, wie man eine anonyme Funktion verwendet, um Parameter in den
Ereignis-Listener zu übertragen.

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

Beachten Sie, dass der Listener eine anonyme Funktion ist, die Code kapselt, der wiederum
in der Lage ist, Parameter an die `modifyText()`-Funktion zu senden, die
für die Reaktion auf das Ereignis verantwortlich ist.

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_anonymous_function')}}

### Ereignis-Listener mit einer Arrow-Funktion

Dieses Beispiel zeigt einen Ereignis-Listener, der mit Arrow-Funktionsnotation
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

Bitte beachten Sie, dass während anonyme und Arrow-Funktionen ähnlich sind, sie unterschiedliche
`this`-Binds haben. Anonyme (und alle traditionellen JavaScript-Funktionen)
erstellen ihre eigenen `this`-Binds, während Arrow-Funktionen den
`this`-Bind der umgebenden Funktion erben.

Das bedeutet, dass die Variablen und Konstanten, die der umgebenden Funktion zur Verfügung stehen,
auch dem Ereignis-Handler zur Verfügung stehen, wenn eine Arrow-Funktion verwendet wird.

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

Klicken Sie auf die äußeren, mittleren und inneren Container, um zu sehen, wie die Optionen funktionieren.

{{ EmbedLiveSample('Example_of_options_usage', 600, 630) }}

### Ereignis-Listener mit mehreren Optionen

Sie können mehr als eine der Optionen im `options`-Parameter setzen. Im folgenden Beispiel setzen wir zwei Optionen:

- `passive`, um zu bestätigen, dass der Handler nicht [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft.
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

### Verbesserung der Scroll-Leistung durch Verwendung passiver Listener

Das folgende Beispiel zeigt den Effekt der Einstellung von `passive`. Es beinhaltet ein {{htmlelement("div")}}, das etwas Text enthält, und ein Kontrollkästchen.

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

Der Code fügt einen Listener für das [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis des Containers hinzu, das standardmäßig den Container scrollt. Der Listener führt eine langlaufende Operation aus. Zunächst wird der Listener mit der `passive`-Option hinzugefügt, und wann immer das Kontrollkästchen umgeschaltet wird, schaltet der Code die `passive`-Option um.

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

- Zunächst ist der Listener passiv, sodass das Scrollen des Containers mit dem Rad sofort ist.
- Wenn Sie "passiv" deaktivieren und versuchen, den Container mit dem Rad zu scrollen, gibt es eine spürbare Verzögerung, bevor der Container scrollt, da der Browser warten muss, bis der lang andauernde Listener beendet ist.

{{EmbedLiveSample("Improving scroll performance using passive listeners", 100, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)
- [Erstellen und Auslösen benutzerdefinierter Ereignisse](/de/docs/Web/Events/Creating_and_triggering_events)
- [Weitere Details zur Verwendung von `this` in Ereignis-Handlern](https://www.quirksmode.org/js/this.html)

---
title: "EventTarget: addEventListener() Methode"
short-title: addEventListener()
slug: Web/API/EventTarget/addEventListener
l10n:
  sourceCommit: a845f9d916369fc5652818416f07ed2829277a50
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`addEventListener()`** Methode der [`EventTarget`](/de/docs/Web/API/EventTarget) Schnittstelle
richtet eine Funktion ein, die aufgerufen wird, wann immer das angegebene Ereignis an das Ziel gesendet wird.

Häufige Ziele sind [`Element`](/de/docs/Web/API/Element) oder seine Kinder, [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window),
aber das Ziel kann jedes Objekt sein, das Ereignisse unterstützt (wie zum Beispiel [`IDBRequest`](/de/docs/Web/API/IDBRequest)).

> [!NOTE]
> Die `addEventListener()` Methode ist die _empfohlene_ Methode, um einen Ereignis-Listener zu registrieren. Die Vorteile sind:
>
> - Sie ermöglicht das Hinzufügen mehrerer Handler für ein Ereignis. Dies ist besonders nützlich für Bibliotheken, JavaScript-Module oder jede andere Art von Code, der gut mit anderen Bibliotheken oder Erweiterungen zusammenarbeiten muss.
> - Im Gegensatz zur Verwendung einer `onXYZ`-Eigenschaft bietet sie eine feinere Kontrolle darüber, in welcher Phase der Listener aktiviert wird (Capturing vs. Bubbling).
> - Sie funktioniert auf jedem Ereignisziel, nicht nur auf HTML- oder SVG-Elementen.

Die Methode `addEventListener()` funktioniert, indem sie eine Funktion oder ein Objekt, das eine `handleEvent()`-Funktion implementiert, zur Liste der Ereignis-Listener für den angegebenen Ereignistyp hinzufügt,
auf dem [`EventTarget`](/de/docs/Web/API/EventTarget), auf dem sie aufgerufen wird. Wenn die Funktion oder das Objekt bereits in der Liste der Ereignis-Listener für dieses Ziel enthalten ist, wird die Funktion oder das Objekt nicht ein zweites Mal hinzugefügt.

> [!NOTE]
> Wenn eine bestimmte anonyme Funktion in der Liste der Ereignis-Listener für ein bestimmtes Ziel registriert ist und dann später im Code eine identische anonyme Funktion in einem `addEventListener`-Aufruf angegeben wird, wird die zweite Funktion _auch_ zur Liste der Ereignis-Listener für dieses Ziel hinzugefügt.
>
> Tatsächlich sind anonyme Funktionen nicht identisch, selbst wenn sie mit demselben unveränderlichen Quellcode mehrfach definiert werden, **selbst wenn in einer Schleife**.
>
> Die wiederholte Definition derselben unbenannten Funktion in solchen Fällen kann problematisch sein. (Siehe [Speicherprobleme](#speicherprobleme) weiter unten.)

Wenn ein Ereignis-Listener von innerhalb eines anderen Listeners zu einem [`EventTarget`](/de/docs/Web/API/EventTarget) hinzugefügt wird —
das heißt, während der Verarbeitung des Ereignisses —
wird dieses Ereignis den neuen Listener nicht auslösen.
Der neue Listener kann jedoch in einer späteren Phase des Ereignisflusses ausgelöst werden,
wie beispielsweise in der Bubbling-Phase.

## Syntax

```js-nolint
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

### Parameter

- `type`
  - : Ein Groß-/Kleinschreibung beachtender String, der den [Ereignistyp](/de/docs/Web/Events) darstellt, auf den reagiert werden soll.
- `listener`
  - : Das Objekt, das eine Benachrichtigung (ein Objekt, das die
    [`Event`](/de/docs/Web/API/Event)-Schnittstelle implementiert) empfängt, wenn ein Ereignis des angegebenen Typs auftritt. Dieses muss
    `null`, ein Objekt mit einer `handleEvent()`-Methode oder eine JavaScript-
    [Funktion](/de/docs/Web/JavaScript/Guide/Functions) sein. Siehe
    [Der Ereignis-Listener-Callback](#der_ereignis-listener-callback) für Details über den Callback selbst.
- `options` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften des Ereignis-Listeners festlegt. Die verfügbaren
    Optionen sind:

    - `capture` {{optional_inline}}
      - : Ein boolean Wert, der angibt, dass Ereignisse dieses Typs an den registrierten `listener` weitergeleitet werden, bevor sie an ein darunter liegendes `EventTarget` im DOM-Baum weitergeleitet werden. Wenn nicht angegeben, ist der Standardwert `false`.
    - `once` {{optional_inline}}
      - : Ein boolean Wert, der angibt, dass der `listener`
        höchstens einmal nach dem Hinzufügen aufgerufen werden sollte. Wenn `true`, wird der
        `listener` automatisch entfernt, wenn er aufgerufen wird. Wenn nicht angegeben, ist der Standardwert `false`.
    - `passive` {{optional_inline}}

      - : Ein boolean Wert, der, wenn er `true` ist, angibt, dass die vom `listener` angegebene Funktion niemals [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen wird. Wenn ein passiver Listener `preventDefault()` aufruft, wird nichts passieren und es könnte eine Warnung in der Konsole ausgegeben werden.

        Wenn diese Option nicht angegeben ist, ist der Standardwert `false` – außer in Browsern außer Safari, wo es für [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event) Ereignisse auf `true` gesetzt ist. Siehe [Verwendung passiver Listener](#verwendung_passiver_listener) um mehr zu erfahren.

    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Der Listener wird entfernt, wenn die `abort()` Methode des gegebenen `AbortSignal` Objekts aufgerufen wird. Wenn nicht angegeben, wird kein `AbortSignal` mit dem Listener verknüpft.

- `useCapture` {{optional_inline}}

  - : Ein boolean Wert, der angibt, ob Ereignisse dieses Typs an den registrierten `listener` _vor_ der Weiterleitung an ein darunter liegendes `EventTarget` im DOM-Baum weitergeleitet werden. Ereignisse, die aufwärts durch den Baum blasen, lösen keinen Listener aus, der zum Capturing gekennzeichnet ist. Event
    Bubbling und Capturing sind zwei Möglichkeiten der Ereignisausbreitung, die auftreten, wenn ein Element innerhalb eines anderen Elements eingebettet ist, wenn beide Elemente einen Handler für
    dieses Ereignis registriert haben. Der Ereignisausbreitungsmodus bestimmt die Reihenfolge, in der die Elemente das Ereignis empfangen. Siehe [DOM Level 3 Events](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow) und [JavaScript Event order](https://www.quirksmode.org/js/events_order.html#link4) für eine detaillierte Erklärung.
    Wenn nicht angegeben, ist `useCapture` standardmäßig `false`.

    > [!NOTE]
    > Für Ereignis-Listener, die dem Ereignisziel zugeordnet sind, befindet sich das Ereignis in der Zielphase, anstatt in den Capturing- und Bubbling-Phasen.
    > Ereignis-Listener in der _Capturing_-Phase werden vor Ereignis-Listenern in allen nicht-Capturing-Phasen aufgerufen.

- `wantsUntrusted` {{optional_inline}} {{non-standard_inline}}
  - : Ein Firefox (Gecko)-spezifischer Parameter. Wenn `true`, empfängt der Listener
    synthetische Ereignisse, die vom Webinhalt gesendet werden (der Standardwert ist `false` für
    Browser {{Glossary("chrome", "chrome")}} und `true` für reguläre Webseiten). Dieser
    Parameter ist nützlich für Code, der in Add-ons sowie im Browser selbst zu finden ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Hinweise zur Verwendung

### Der Ereignis-Listener-Callback

Der Ereignis-Listener kann entweder als Callback-Funktion oder
als Objekt angegeben werden, dessen `handleEvent()` Methode als Callback-Funktion dient.

Die Callback-Funktion selbst hat die gleichen Parameter und Rückgabewerte wie die
`handleEvent()` Methode; das heißt, der Callback akzeptiert einen einzigen Parameter: ein
Objekt basierend auf [`Event`](/de/docs/Web/API/Event), das das aufgetretene Ereignis beschreibt, und er
gibt nichts zurück.

Ein Ereignis-Handler-Callback, der sowohl
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

Es ist oft wünschenswert, das Element zu referenzieren, auf dem der Ereignis-Handler ausgelöst wurde,
zum Beispiel bei der Verwendung eines generischen Handlers für eine Menge ähnlicher Elemente.

Wenn eine Handlerfunktion an ein Element mittels `addEventListener()` angehängt wird,
wird der Wert von {{jsxref("Operators/this","this")}} innerhalb des Handlers eine Referenz auf
das Element sein. Dieser wird derselbe wie der Wert der `currentTarget` Eigenschaft des
Ereignis-Arguments sein, das an den Handler übergeben wird.

```js
my_element.addEventListener("click", function (e) {
  console.log(this.className); // logs the className of my_element
  console.log(e.currentTarget === this); // logs `true`
});
```

Zur Erinnerung, [Pfeilfunktionen haben keinen eigenen `this` Kontext](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

```js
my_element.addEventListener("click", (e) => {
  console.log(this.className); // WARNING: `this` is not `my_element`
  console.log(e.currentTarget === this); // logs `false`
});
```

Wenn ein Ereignis-Handler (zum Beispiel [`onclick`](/de/docs/Web/API/Element/click_event)) in der HTML-Quelle auf einem Element angegeben ist, wird der JavaScript-Code im Attributwert effektiv in eine Handlerfunktion eingepackt, die den Wert von `this` in einer Weise bindet, die mit `addEventListener()` konsistent ist; ein Vorkommen von `this` innerhalb des Codes stellt eine Referenz auf das Element dar.

```html
<table id="my_table" onclick="console.log(this.id);">
  <!-- `this` refers to the table; logs 'my_table' -->
  …
</table>
```

Beachten Sie, dass der Wert von `this` innerhalb einer Funktion, _aufgerufen von_ dem Code
im Attributwert, sich nach den [Standardregeln](/de/docs/Web/JavaScript/Reference/Operators/this) verhält. Dies wird
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
Objekt [`Window`](/de/docs/Web/API/Window) (oder `undefined` im Fall des [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode).

#### Spezifizieren von "this" mit bind()

Die Methode {{jsxref("Function.prototype.bind()")}} erlaubt es Ihnen, einen festen
`this` Kontext für alle nachfolgenden Aufrufe festzulegen — um Probleme zu umgehen, bei denen unklar ist, was `this` sein wird, abhängig von
dem Kontext, aus dem Ihre Funktion aufgerufen wird. Beachten Sie jedoch, dass Sie
eine Referenz auf den Listener behalten müssen, damit Sie ihn später entfernen können.

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

Eine weitere Lösung ist die Verwendung einer speziellen Funktion namens `handleEvent()`, um
beliebige Ereignisse zu erfassen:

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

Eine andere Möglichkeit, die Referenz auf `this` zu behandeln, ist die Verwendung einer Arrow Function, die keinen separaten `this` Kontext erstellt.

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

### Daten in einen Ereignis-Listener hinein- und herausbekommen

Ereignis-Listener nehmen nur ein Argument,
ein [`Event`](/de/docs/Web/API/Event) oder eine Unterklasse von `Event`,
das automatisch an den Listener übergeben wird, und der Rückgabewert wird ignoriert.
Um Daten in einen Ereignis-Listener hinein- und herauszubekommen, anstatt sie durch Parameter und Rückgabewerte zu übergeben, müssen Sie [Closures](/de/docs/Web/JavaScript/Closures) erstellen.

Die Funktionen, die als Ereignis-Listener übergeben werden, haben Zugriff auf alle Variablen, die in den äußeren Bereichen deklariert sind, die die Funktion enthalten.

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

Lesen Sie [den Funktionsleitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_scope) für weitere Informationen über Funktionsbereiche.

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

Im obigen ersten Fall wird in jeder
Durchlauf der Schleife eine neue (anonyme) Handlerfunktion erstellt. Im zweiten Fall wird dieselbe zuvor deklarierte Funktion
als Ereignis-Handler verwendet, was zu einem geringeren Speicherverbrauch führt, da nur eine Handlerfunktion erstellt wird. Darüber hinaus ist es im ersten Fall nicht möglich,
[`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) aufzurufen, da keine
Referenz auf die anonyme Funktion gespeichert wird (oder hier, nicht auf eine der mehreren
anonymen Funktionen, die die Schleife möglicherweise erstellt). Im zweiten Fall ist es möglich,
`myElement.removeEventListener("click", processEvent, false)` zu machen,
da `processEvent` die Funktionsreferenz ist.

Was den Speicherverbrauch betrifft, ist das Fehlen einer Funktionsreferenz nicht
das eigentliche Problem; vielmehr ist es das Fehlen einer _statischen_ Funktionsreferenz.

### Verwendung passiver Listener

Wenn ein Ereignis eine Standardaktion hat — zum Beispiel ein [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, das standardmäßig den Container scrollt — kann der Browser die Standardaktion im Allgemeinen nicht starten, bis der Ereignis-Listener beendet ist, da er nicht im Voraus weiß, ob der Ereignis-Listener die Standardaktion durch Aufrufen von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen könnte. Wenn der Ereignis-Listener zu lange braucht, kann dies zu einer bemerkbaren Verzögerung führen, auch bekannt als {{Glossary("jank", "Jank")}}, bevor die Standardaktion ausgeführt werden kann.

Indem die `passive` Option auf `true` gesetzt wird, erklärt ein Ereignis-Listener, dass er die Standardaktion nicht abbrechen wird, sodass der Browser die Standardaktion sofort starten kann, ohne auf das Ende des Listeners zu warten. Wenn der Listener dann [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, hat dies keine Wirkung.

Die Spezifikation für `addEventListener()` definiert den Standardwert für die `passive` Option immer als `false`. Um jedoch die Scroll-Leistungsverbesserungen passiver Listener in Legacy-Code zu realisieren, haben moderne Browser den Standardwert für die `passive` Option auf `true` geändert, für die [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event) Ereignisse auf Dokument-Ebene-Knoten [`Window`](/de/docs/Web/API/Window), [`Document`](/de/docs/Web/API/Document) und [`Document.body`](/de/docs/Web/API/Document/body). Dadurch wird verhindert, dass der Ereignis-Listener [das Ereignis abbricht](/de/docs/Web/API/Event/preventDefault), sodass es das Rendering der Seite beim Scrollen durch den Benutzer nicht blockieren kann.

Aus diesem Grund, wenn Sie dieses Verhalten überschreiben und sicherstellen möchten, dass die `passive` Option `false` ist, müssen Sie die Option explizit auf `false` setzen (anstatt sich auf den Standard zu verlassen).

Sie müssen sich bei dem grundlegenden [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis keine Gedanken über den Wert von `passive` machen.
Da es nicht abgefangen werden kann, können Ereignis-Listener das Rendering der Seite sowieso nicht blockieren.

Siehe [Verbesserung der Scroll-Leistung durch die Verwendung passiver Listener](#verbesserung_der_scroll-performance_durch_verwendung_passiver_listener) für ein Beispiel, das die Wirkung passiver Listener zeigt.

## Beispiele

### Einfachen Listener hinzufügen

Dieses Beispiel zeigt, wie `addEventListener()` verwendet wird, um Maus-
Klicks auf ein Element zu beobachten.

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
der mit `addEventListener()` registriert wurde. Ein Klick irgendwo in der Tabelle
wird an den Handler weitergeleitet und führt zu einem `modifyText()`-Aufruf.

#### Ergebnis

{{EmbedLiveSample('Add_a_simple_listener')}}

### Einen abbrechbaren Listener hinzufügen

Dieses Beispiel zeigt, wie ein `addEventListener()` hinzugefügt wird, der mit einem [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgebrochen werden kann.

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

Im obigen Beispiel modifizieren wir den Code im vorherigen Beispiel so, dass, nachdem der Inhalt der zweiten Zeile auf "three" geändert wurde, wir `abort()` von dem [`AbortController`](/de/docs/Web/API/AbortController) aufrufen, den wir an den `addEventListener()`-Aufruf übergeben haben. Dadurch bleibt der Wert immer "three", da wir keinen Code mehr haben, der auf ein Klick-Ereignis hört.

#### Ergebnis

{{EmbedLiveSample('Add_an_abortable_listener')}}

### Ereignis-Listener mit anonymer Funktion

Hier sehen wir, wie eine anonyme Funktion verwendet wird, um Parameter in den
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
wiederum in der Lage ist, Parameter an die `modifyText()`-Funktion zu senden, die
für die tatsächliche Reaktion auf das Ereignis verantwortlich ist.

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_anonymous_function')}}

### Ereignis-Listener mit einer Pfeilfunktion

Dieses Beispiel zeigt einen einfachen Ereignis-Listener, der mit einer Pfeilfunktion
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

Beachten Sie, dass während anonyme und Pfeilfunktionen ähnlich sind, sie unterschiedliche
`this` Bindungen haben. Während anonyme (und alle traditionellen JavaScript-Funktionen)
ihre eigenen `this` Bindungen erstellen, erben Pfeilfunktionen die
`this` Bindung der umgebenden Funktion.

Das bedeutet, dass die Variablen und Konstanten, die der umgebenden Funktion zur Verfügung stehen,
auch dem Ereignis-Handler bei Verwendung einer Pfeilfunktion zur Verfügung stehen.

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

{{ EmbedLiveSample('Example_of_options_usage', 600, 630) }}

### Ereignis-Listener mit mehreren Optionen

Sie können mehr als eine der Optionen im `options` Parameter setzen. Im folgenden Beispiel setzen wir zwei Optionen:

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

### Verbesserung der Scroll-Performance durch Verwendung passiver Listener

Das folgende Beispiel zeigt die Auswirkung der Einstellung von `passive`. Es enthält ein {{htmlelement("div")}}, das etwas Text und ein Kontrollkästchen enthält.

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

Der Code fügt ein Listener hinzu, das auf das [`wheel`](/de/docs/Web/API/Element/wheel_event) Ereignis des Containers hört, welches standardmäßig den Container scrollt. Der Listener führt eine langlaufende Operation aus. Zunächst wird der Listener mit der `passive` Option hinzugefügt und immer, wenn das Kontrollkästchen umgeschaltet wird, schaltet der Code die `passive` Option um.

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

- Zunächst ist der Listener passiv, sodass der Versuch, den Container mit dem Rad zu scrollen, sofort erfolgt.
- Wenn Sie "passive" deaktivieren und versuchen, den Container mit dem Rad zu scrollen, gibt es eine bemerkbare Verzögerung, bevor der Container scrollt, weil der Browser warten muss, bis der langlaufende Listener beendet ist.

{{EmbedLiveSample("Improving scroll performance using passive listeners", 100, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)
- [Erstellen und Auslösen benutzerdefinierter Ereignisse](/de/docs/Web/Events/Creating_and_triggering_events)
- [Weitere Details zur Verwendung von `this` in Ereignis-Handlern](https://www.quirksmode.org/js/this.html)

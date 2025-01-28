---
title: "EventTarget: Methode addEventListener()"
short-title: addEventListener()
slug: Web/API/EventTarget/addEventListener
l10n:
  sourceCommit: 8f10db5cabb50ee778f781f96adadc8cff98761a
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`addEventListener()`**-Methode der [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle
richtet eine Funktion ein, die immer dann aufgerufen wird, wenn das angegebene Ereignis an das Ziel übermittelt wird.

Übliche Ziele sind [`Element`](/de/docs/Web/API/Element) oder dessen Kinder, [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window),
aber das Ziel kann jedes Objekt sein, das Ereignisse unterstützt (wie z.B. [`IDBRequest`](/de/docs/Web/API/IDBRequest)).

> [!NOTE]
> Die `addEventListener()`-Methode ist die _empfohlene_ Methode zum Registrieren eines Event-Listeners. Die Vorteile sind:
>
> - Sie ermöglicht das Hinzufügen mehrerer Handler für ein Ereignis. Dies ist besonders
>   nützlich für Bibliotheken, JavaScript-Module oder jede andere Art von
>   Code, der gut mit anderen Bibliotheken oder Erweiterungen funktionieren muss.
> - Im Gegensatz zur Verwendung einer `onXYZ`-Eigenschaft bietet sie eine feinere Kontrolle über die Phase, in der der Listener aktiviert wird (Capturing vs. Bubbling).
> - Sie funktioniert auf jedem Ereignisziel, nicht nur auf HTML- oder SVG-Elementen.

Die `addEventListener()`-Methode funktioniert, indem sie eine Funktion oder ein Objekt, das eine `handleEvent()`-Funktion implementiert, zur Liste der Event-Listener für den angegebenen Ereignistyp auf dem [`EventTarget`](/de/docs/Web/API/EventTarget) hinzufügt, auf dem sie aufgerufen wird. Wenn die Funktion oder das Objekt bereits in der Liste der Event-Listener für dieses Ziel ist, wird die Funktion oder das Objekt nicht ein zweites Mal hinzugefügt.

> [!NOTE]
> Wenn eine bestimmte anonyme Funktion in der Liste der für ein bestimmtes Ziel registrierten Event-Listener enthalten ist und später im Code eine identische anonyme Funktion in einem `addEventListener`-Aufruf angegeben wird, wird die zweite Funktion _ebenfalls_ in die Liste der Event-Listener für dieses Ziel aufgenommen.
>
> In der Tat sind anonyme Funktionen nicht identisch, selbst wenn sie mit
> dem _gleichen_ unveränderten Quellcode wiederholt definiert werden, **sogar in einer Schleife**.
>
> Das wiederholte Definieren derselben unbenannten Funktion in solchen Fällen kann
> problematisch sein. (Siehe [Speicherprobleme](#speicherprobleme) unten.)

Wenn ein Event-Listener von einem anderen Listener aus zu einem [`EventTarget`](/de/docs/Web/API/EventTarget) hinzugefügt wird —
das heißt, während der Verarbeitung des Ereignisses —
wird dieses Ereignis den neuen Listener nicht auslösen.
Der neue Listener kann jedoch während einer späteren Phase des Eventflusses ausgelöst werden,
wie zum Beispiel während der Bubbling-Phase.

## Syntax

```js-nolint
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

### Parameter

- `type`
  - : Ein Groß-/Kleinschreibung berücksichtigender String, der den [Ereignistyp](/de/docs/Web/Events) darstellt, auf den gehört werden soll.
- `listener`
  - : Das Objekt, das eine Benachrichtigung erhält (ein Objekt, das die
    [`Event`](/de/docs/Web/API/Event)-Schnittstelle implementiert), wenn ein Ereignis des angegebenen Typs eintritt. Dies muss
    `null`, ein Objekt mit einer `handleEvent()`-Methode oder eine JavaScript
    [Funktion](/de/docs/Web/JavaScript/Guide/Functions) sein. Siehe
    [Der Event-Listener-Callback](#der_event-listener-callback) für Details auf den Callback selbst.
- `options` {{optional_inline}}

  - : Ein Objekt, das Merkmale über den Event-Listener angibt. Die verfügbaren
    Optionen sind:

    - `capture` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass Ereignisse dieses Typs an den registrierten `listener` gesendet werden, bevor sie an ein darunterliegendes
        `EventTarget` im DOM-Baum gesendet werden. Wenn nicht angegeben, ist der Standardwert `false`.
    - `once` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass der `listener`
        höchstens einmal nach dem Hinzufügen aufgerufen werden sollte. Wenn `true`, wird der
        `listener` automatisch entfernt, wenn er aufgerufen wird. Wenn nicht angegeben, ist der Standardwert `false`.
    - `passive` {{optional_inline}}

      - : Ein boolescher Wert, der, wenn `true`, angibt, dass die durch `listener` angegebene Funktion nie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen wird. Wenn ein passiver Listener `preventDefault()` aufruft, wird nichts passieren und es kann eine Konsolenwarnung generiert werden.

        Wenn diese Option nicht angegeben ist, ist der Standardwert `false` - außer in Browsern außer Safari, wo sie standardmäßig für [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`]( /en-US/ docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignissen `true` ist. Siehe [Verwendung von passiven Listenern](#verwendung_von_passiven_listenern), um mehr zu erfahren.

    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Der Listener wird entfernt, wenn die [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des [`AbortController`](/de/docs/Web/API/AbortController), dem das `AbortSignal` gehört, aufgerufen wird. Wenn nicht angegeben, wird kein `AbortSignal` mit dem Listener assoziiert.

- `useCapture` {{optional_inline}}

  - : Ein boolescher Wert, der angibt, ob Ereignisse dieses Typs an den registrierten `listener` _bevor_ sie an ein darunterliegendes `EventTarget` im DOM-Baum gesendet werden, gesendet werden. Aufwärts durch den Baum bubbelnde Ereignisse lösen keinen Listener aus, der zum Capturing bestimmt ist. Ereignis-Propagation- und Capturing-Methoden sind zwei Möglichkeiten, Ereignisse, die in einem Element auftreten, das in einem anderen Element verschachtelt ist, zu propagieren, wenn beide Elemente einen Handler für dieses Ereignis registriert haben. Der Ereignis-Propagationsmodus bestimmt die Reihenfolge, in der Elemente das Ereignis empfangen. Siehe [DOM Level 3 Events](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow) und [JavaScript Event order](https://www.quirksmode.org/js/events_order.html#link4) für eine detaillierte Erklärung.
    Wenn nicht angegeben, ist `useCapture` standardmäßig `false`.

    > [!NOTE]
    > Für Event-Listener, die am Eventziel angebracht sind, befindet sich das Ereignis in der Zielphase, anstatt in den Phasen Capturing und Bubbling.
    > Event-Listener in der _Capturing_-Phase werden vor den Event-Listenern in der Ziel- und Bubbling-Phase aufgerufen.

- `wantsUntrusted` {{optional_inline}} {{non-standard_inline}}
  - : Ein Firefox (Gecko)-spezifischer Parameter. Wenn `true`, empfängt der Listener
    synthetische Ereignisse, die vom Web-Inhalt gesendet werden (standardmäßig ist `false` für
    Browser-{{Glossary("chrome", "chrome")}} und `true` für normale Webseiten). Dieser
    Parameter ist nützlich für Code, der in Add-ons gefunden wird, sowie im Browser selbst.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Nutzungshinweise

### Der Event-Listener-Callback

Der Event-Listener kann entweder als Callback-Funktion oder als
ein Objekt, dessen `handleEvent()`-Methode als Callback-Funktion dient, angegeben werden.

Die Callback-Funktion selbst hat die gleichen Parameter und den gleichen Rückgabewert wie die
`handleEvent()`-Methode; das heißt, der Callback akzeptiert einen einzelnen Parameter: ein
Objekt basierend auf [`Event`](/de/docs/Web/API/Event), das das aufgetretene Ereignis beschreibt, und es
gibt nichts zurück.

Zum Beispiel könnte ein Event-Handler-Callback, der sowohl
[`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) als auch
[`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) handeln kann, so aussehen:

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
wie beispielsweise bei der Verwendung eines generischen Handlers für eine Reihe ähnlicher Elemente.

Wenn Sie eine Handler-Funktion mithilfe von `addEventListener()` an ein Element anhängen,
wird der Wert von {{jsxref("Operators/this","this")}} innerhalb des Handlers eine Referenz auf
das Element sein. Es wird der gleiche Wert wie die Eigenschaft `currentTarget` des
übergebenen Event-Arguments, das an den Handler übergeben wird.

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

Wenn ein Event-Handler (zum Beispiel [`onclick`](/de/docs/Web/API/Element/click_event)) auf einem Element im HTML-Quelltext spezifiziert wird, wird der JavaScript-Code im Attributwert effektiv in eine Handler-Funktion gewrappt, die den `this`-Wert auf eine Weise bindet, die mit der `addEventListener()`-Methode konsistent ist; ein Vorkommen von `this` innerhalb des Codes stellt eine Referenz auf das Element dar.

```html
<table id="my_table" onclick="console.log(this.id);">
  <!-- `this` refers to the table; logs 'my_table' -->
  …
</table>
```

Beachten Sie, dass der Wert von `this` innerhalb einer Funktion, die _vom_ im Attributwert enthaltenen Code aufgerufen wird, gemäß den [Standardregeln](/de/docs/Web/JavaScript/Reference/Operators/this) verhält. Dies wird im folgenden Beispiel gezeigt:

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

Die Methode {{jsxref("Function.prototype.bind()")}} ermöglicht es Ihnen, einen festen
`this`-Kontext für alle nachfolgenden Aufrufe festzulegen - damit werden Probleme umgangen, bei denen unklar ist, was `this` sein wird, abhängig davon, aus welchem
Kontext Ihre Funktion aufgerufen wurde. Beachten Sie jedoch, dass Sie eine
Referenz zum Listener aufbewahren müssen, damit Sie ihn später entfernen können.

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

Eine andere Lösung besteht darin, eine spezielle Funktion `handleEvent()` zu verwenden, um
Ereignisse abzufangen:

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

Eine andere Möglichkeit, die Referenz zu `this` zu verwalten, besteht darin, eine Arrow-Funktion zu verwenden, die keinen separaten `this`-Kontext erstellt.

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

### Daten in und aus einem Event-Listener bekommen

Event-Listener nehmen nur ein Argument,
ein [`Event`](/de/docs/Web/API/Event) oder eine Unterklasse von `Event`,
das automatisch an den Listener übergeben wird, und der Rückgabewert wird ignoriert.
Um also Daten in und aus einem Event-Listener zu erhalten, anstatt die Daten durch Parameter und Rückgabewerte zu übergeben, müssen Sie stattdessen [Closures](/de/docs/Web/JavaScript/Closures) erstellen.

Die als Event-Listener übergebenen Funktionen haben Zugriff auf alle in den äußeren Bereichen deklarierten Variablen, die die Funktion enthalten.

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

Im obigen ersten Fall wird mit jeder Iteration der Schleife eine neue (anonyme) Handler-Funktion erstellt. Im zweiten Fall wird dieselbe zuvor deklarierte Funktion als Event-Handler verwendet, was zu einem geringeren Speicherverbrauch führt, da nur eine Handler-Funktion erstellt wird. Darüber hinaus ist es im ersten Fall nicht möglich, [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) aufzurufen, da keine Referenz auf die anonyme Funktion behalten wird (oder hier nicht auf eine der möglicherweise durch die Schleife erzeugten mehreren anonymen Funktionen gehalten wird). Im zweiten Fall ist es möglich, `myElement.removeEventListener("click", processEvent, false)` zu tun, weil `processEvent` die Funktionsreferenz ist.

Tatsächlich ist hinsichtlich des Speicherverbrauchs das fehlende Behalten einer Funktionsreferenz nicht
das eigentliche Problem; vielmehr ist es das fehlende Beibehalten einer _statischen_ Funktionsreferenz.

### Verwendung von passiven Listenern

Wenn ein Ereignis eine Standardaktion hat - zum Beispiel ein [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, das standardmäßig den Container scrollt - kann der Browser die Standardaktion im Allgemeinen nicht starten, bis der Event-Listener abgeschlossen ist, da er nicht im Voraus weiß, ob der Event-Listener möglicherweise die Standardaktion durch einen Aufruf von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen könnte. Wenn der Event-Listener zu lange braucht, um ausgeführt zu werden, kann dies eine merkliche Verzögerung verursachen, auch bekannt als {{Glossary("jank", "Jank")}}, bevor die Standardaktion ausgeführt werden kann.

Durch Setzen der Option `passive` auf `true` erklärt ein Event-Listener, dass er die Standardaktion nicht abbrechen wird, sodass der Browser die Standardaktion sofort starten kann, ohne auf das Ende des Listeners zu warten. Wenn der Listener dann [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, hat dies keine Wirkung.

Die Spezifikation von `addEventListener()` definiert den Standardwert für die Option `passive` als immer `false`. Um jedoch die Scroll-Performance-Vorteile passiver Listener im Legacy-Code zu realisieren, haben moderne Browser den Standardwert der Option `passive` für die Ereignisse [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event) auf Dokument-Ebene-Knoten wie [`Window`](/de/docs/Web/API/Window), [`Document`](/de/docs/Web/API/Document) und [`Document.body`](/de/docs/Web/API/Document/body) geändert. Das verhindert, dass der Event-Listener das [Ereignis abbricht](/de/docs/Web/API/Event/preventDefault), wodurch verhindert wird, dass das Rendering der Seite während des Scrollens des Benutzers blockiert wird.

Deshalb, wenn Sie dieses Verhalten überschreiben und sicherstellen möchten, dass die Option `passive` `false` ist, müssen Sie die Option explizit auf `false` setzen (statt sich auf den Standardwert zu verlassen).

Sie müssen sich keine Sorgen über den Wert von `passive` für das grundlegende [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis machen.
Da es nicht abgebrochen werden kann, können Event-Listener die Seitenanzeige sowieso nicht blockieren.

Siehe [Verbesserung der Scroll-Leistung durch die Verwendung passiver Listener](#verbesserung_der_scroll-leistung_durch_verwendung_von_passiven_listenern) für ein Beispiel, das den Effekt passiver Listener zeigt.

## Beispiele

### Einfachen Listener hinzufügen

Dieses Beispiel zeigt, wie `addEventListener()` verwendet wird, um Maus-
Klicks auf einem Element zu beobachten.

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
registriert mithilfe von `addEventListener()`. Ein Klick irgendwo im Tisch bubbeltn
zum Handler und führt `modifyText()` aus.

#### Ergebnis

{{EmbedLiveSample('Add_a_simple_listener')}}

### Einen abbruchbaren Listener hinzufügen

Dieses Beispiel zeigt, wie ein `addEventListener()` hinzugefügt werden kann, das mit einem [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgebrochen werden kann.

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

Im obigen Beispiel ändern wir den Code im vorherigen Beispiel so, dass nachdem sich der Inhalt der zweiten Zeile auf "three" ändert, wir `abort()` von dem [`AbortController`](/de/docs/Web/API/AbortController) aufrufen, den wir zum `addEventListener()`-Aufruf übergeben haben. Dadurch bleibt der Wert für immer "three", da wir keinen Code mehr haben, der auf ein Klickereignis hört.

#### Ergebnis

{{EmbedLiveSample('Add_an_abortable_listener')}}

### Event-Listener mit anonymer Funktion

Hier sehen wir, wie eine anonyme Funktion verwendet werden kann, um Parameter in den
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

Beachten Sie, dass der Listener eine anonyme Funktion ist, die Code umschließt, der dann wiederum
Parameter an die `modifyText()`-Funktion senden kann, die
eigentlich auf das Ereignis reagiert.

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_anonymous_function')}}

### Event-Listener mit einer Pfeilfunktion

Dieses Beispiel zeigt einen Event-Listener, der mit der Pfeilfunktionsnotation
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

Bitte beachten Sie, dass anonyme und Pfeilfunktionen zwar ähnlich sind, aber unterschiedliche
`this`-Bindings haben. Während anonyme Funktionen (und alle traditionellen JavaScript-Funktionen)
ihre eigenen `this`-Bindings erstellen, erben Pfeilfunktionen das
`this`-Binding der umgebenden Funktion.

Das bedeutet, dass die Variablen und Konstanten, die für die umgebende Funktion verfügbar sind,
auch dem Event-Handler zur Verfügung stehen, wenn eine Pfeilfunktion verwendet wird.

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

Klicken Sie auf die äußeren, mittleren, inneren Container, um zu sehen, wie die Optionen funktionieren.

{{ EmbedLiveSample('Example_of_options_usage', 600, 630) }}

### Event-Listener mit mehreren Optionen

Sie können mehr als eine der Optionen im `options`-Parameter setzen. Im folgenden Beispiel setzen wir zwei Optionen:

- `passive`, um sicherzustellen, dass der Handler kein [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft.
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

### Verbesserung der Scroll-Leistung durch Verwendung von passiven Listenern

Das folgende Beispiel zeigt den Effekt des Setzens von `passive`. Es beinhaltet ein {{htmlelement("div")}}, das Text enthält, und eine Checkbox.

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

Der Code fügt dem [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis des Containers einen Listener hinzu, der standardmäßig den Container scrollt. Der Listener führt eine langlaufende Operation aus. Anfangs wird der Listener mit der `passive`-Option hinzugefügt, und wenn die Checkbox umgeschaltet wird, schaltet der Code die `passive`-Option um.

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

- Anfänglich ist der Listener passiv, sodass das Scrollen des Containers mit dem Rad sofort geschieht.
- Wenn Sie "passive" abwählen und versuchen, den Container mit dem Rad zu scrollen, tritt eine spürbare Verzögerung auf, bevor der Container scrollt, da der Browser warten muss, bis der langlaufende Listener fertig ist.

{{EmbedLiveSample("Improving scroll performance using passive listeners", 100, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)
- [Erstellen und Auslösen benutzerdefinierter Ereignisse](/de/docs/Web/Events/Creating_and_triggering_events)
- [Weitere Details zur Verwendung von `this` in Event-Handlern](https://www.quirksmode.org/js/this.html)

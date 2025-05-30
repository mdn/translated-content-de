---
title: "EventTarget: addEventListener() Methode"
short-title: addEventListener()
slug: Web/API/EventTarget/addEventListener
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`addEventListener()`** Methode der [`EventTarget`](/de/docs/Web/API/EventTarget) Schnittstelle
richtet eine Funktion ein, die aufgerufen wird, wann immer das angegebene Ereignis an das Ziel übermittelt wird.

Gängige Ziele sind [`Element`](/de/docs/Web/API/Element) oder dessen Kinder, [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window),
aber das Ziel kann jedes Objekt sein, das Ereignisse unterstützt (z. B. [`IDBRequest`](/de/docs/Web/API/IDBRequest)).

> [!NOTE]
> Die `addEventListener()` Methode ist der _empfohlene_ Weg, einen Ereignis-Listener zu registrieren. Die Vorteile sind wie folgt:
>
> - Sie ermöglicht das Hinzufügen mehrerer Handler für ein Ereignis. Dies ist besonders
>   nützlich für Bibliotheken, JavaScript-Module oder jede andere Art von
>   Code, der gut mit anderen Bibliotheken oder Erweiterungen funktionieren muss.
> - Im Gegensatz zur Verwendung einer `onXYZ` Eigenschaft bietet sie eine detailliertere Kontrolle über die Phase, in der der Listener aktiviert wird (Erfassung vs. Blasen).
> - Sie funktioniert bei jedem Ereignisziel, nicht nur bei HTML- oder SVG-Elementen.

Die Methode `addEventListener()` funktioniert, indem sie eine Funktion oder ein Objekt, das eine `handleEvent()` Funktion implementiert, zur Liste der Ereignis-Listener für den angegebenen Ereignistyp
auf der [`EventTarget`](/de/docs/Web/API/EventTarget), auf der sie aufgerufen wird, hinzufügt. Wenn die Funktion oder das Objekt bereits in der Liste der Ereignis-Listener für dieses Ziel enthalten ist, wird die Funktion oder das Objekt nicht ein zweites Mal hinzugefügt.

> [!NOTE]
> Wenn eine bestimmte anonyme Funktion in der Liste der Ereignis-Listener registriert ist, die für ein bestimmtes Ziel registriert sind, und später im Code eine identische anonyme Funktion in einem `addEventListener` Aufruf angegeben wird, wird die zweite Funktion _auch_ zur Liste der Ereignis-Listener für dieses Ziel hinzugefügt.
>
> Tatsächlich sind anonyme Funktionen nicht identisch, auch wenn sie mit
> dem _gleichen_ unveränderten Quellcode mehrfach definiert werden, **sogar in einer Schleife**.
>
> Das wiederholte Definieren derselben namenlosen Funktion in solchen Fällen kann
> problematisch sein. (Siehe [Speicherprobleme](#speicherprobleme), unten.)

Wenn ein Ereignis-Listener für ein [`EventTarget`](/de/docs/Web/API/EventTarget) aus einem anderen Listener heraus hinzugefügt wird —
das heißt, während der Verarbeitung des Ereignisses —
wird dieses Ereignis den neuen Listener nicht auslösen.
Der neue Listener kann jedoch in einer späteren Phase des Ereignisablaufs ausgelöst werden,
z. B. während der Bubbling-Phase.

## Syntax

```js-nolint
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

### Parameter

- `type`
  - : Ein auf Groß- und Kleinschreibung achtender String, der den [Ereignistyp](/de/docs/Web/Events) darstellt, auf den gehört werden soll.
- `listener`
  - : Das Objekt, das eine Benachrichtigung erhält (ein Objekt, das die
    [`Event`](/de/docs/Web/API/Event) Schnittstelle implementiert), wenn ein Ereignis des angegebenen Typs auftritt. Dies muss
    `null`, ein Objekt mit einer `handleEvent()` Methode oder eine JavaScript
    [Funktion](/de/docs/Web/JavaScript/Guide/Functions) sein. Siehe
    [Der Ereignis-Listener Callback](#der_ereignis-listener_callback) für Details zum Callback selbst.
- `options` {{optional_inline}}

  - : Ein Objekt, das Merkmale des Ereignis-Listeners beschreibt. Die verfügbaren
    Optionen sind:

    - `capture` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass Ereignisse dieses Typs an den registrierten `listener` gesendet werden,
        bevor sie an ein darunterliegendes `EventTarget` im DOM-Baum gesendet werden. Wenn nicht angegeben, ist der Standardwert `false`.
    - `once` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass der `listener`
        höchstens einmal nach dem Hinzufügen aufgerufen werden sollte. Wenn `true`, wird der
        `listener` automatisch entfernt, wenn er aufgerufen wird. Wenn nicht angegeben, ist der Standardwert `false`.
    - `passive` {{optional_inline}}

      - : Ein boolescher Wert, der, falls `true`, angibt, dass die von `listener` angegebene Funktion niemals [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen wird. Wenn ein passiver Listener `preventDefault()` aufruft, wird nichts passieren und möglicherweise wird eine Konsolenwarnung generiert.

        Wenn diese Option nicht angegeben wird, ist der Standardwert `false` – außer dass dieser in Browsern außer Safari bei den Ereignissen [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event) `true` ist. Siehe [Verwendung von passiven Listenern](#verwendung_von_passiven_listenern), um mehr zu erfahren.

    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Der Listener wird entfernt, wenn die [`abort()`](/de/docs/Web/API/AbortController/abort) Methode des [`AbortController`](/de/docs/Web/API/AbortController), das das `AbortSignal` besitzt, aufgerufen wird. Wenn nicht angegeben, ist mit dem Listener kein `AbortSignal` verknüpft.

- `useCapture` {{optional_inline}}

  - : Ein boolescher Wert, der angibt, ob Ereignisse dieses Typs an
    den registrierten `listener` _bevor_ sie an
    das darunterliegende `EventTarget` im DOM-Baum gesendet werden. Ereignisse, die
    durch den Baum nach oben wandern, lösen keinen Listener aus, der zum Erfassen verwendet werden soll. Ereignis-
    propagation und Erfassung sind zwei Arten der Weiterleitung von Ereignissen, die in einem Element
    auftreten, das in ein anderes Element eingebettet ist, wenn beide Elemente einen Handler für
    dieses Ereignis registriert haben. Der Propagationsmodus des Ereignisses bestimmt die Reihenfolge, in der die Elemente
    das Ereignis empfangen. Siehe [DOM Level 3 Events](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow) und [JavaScript-Ereignisreihenfolge](https://www.quirksmode.org/js/events_order.html#link4) für eine ausführliche Erklärung.
    Wird nichts angegeben, lautet der Standardwert für `useCapture` `false`.

    > [!NOTE]
    > Für an das Ereignisziel angebundene Ereignis-Listener befindet sich das Ereignis in der Zielphase, nicht in den Erfassungs- und Bubbling-Phasen.
    > Ereignis-Listener in der _Erfassungs_- Phase werden vor Ereignis-Listener in den Ziel- und Bubbling-Phasen aufgerufen.

- `wantsUntrusted` {{optional_inline}} {{non-standard_inline}}
  - : Ein spezifischer Firefox (Gecko) Parameter. Wenn `true`, erhält der Listener
    synthetische Ereignisse, die von Webinhalten gesendet werden (der Standardwert ist `false` für
    Browser {{Glossary("chrome", "Chrome")}} und `true` für reguläre Webseiten). Dieser
    Parameter ist nützlich für Code, der in Add-ons sowie im Browser selbst gefunden wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Nutzungshinweise

### Der Ereignis-Listener Callback

Der Ereignis-Listener kann entweder als Callback-Funktion oder
als Objekt angegeben werden, dessen `handleEvent()` Methode als Callback-Funktion dient.

Die Callback-Funktion selbst hat die gleichen Parameter und Rückgabewerte wie die
`handleEvent()` Methode; das heißt, der Callback akzeptiert einen einzelnen Parameter: ein
Objekt basierend auf [`Event`](/de/docs/Web/API/Event), das das aufgetretene Ereignis beschreibt, und gibt
nichts zurück.

Beispielsweise könnte ein Ereignis-Handler-Callback, der sowohl
[`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) als auch
[`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) behandeln kann, folgendermaßen aussehen:

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

Es ist oft wünschenswert, auf das Element zu verweisen, auf dem der Ereignis-Handler ausgelöst wurde,
wie beim Einsatz eines generischen Handlers für eine Gruppe ähnlicher Elemente.

Beim Anbringen einer Handler-Funktion an ein Element mit `addEventListener()`,
wird der Wert von {{jsxref("Operators/this","this")}} im Handler als Referenz auf
das Element. Es wird dasselbe sein wie der Wert der `currentTarget` Eigenschaft des
Ereignisarguments, das an den Handler übergeben wird.

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

Wenn ein Ereignishandler (zum Beispiel [`onclick`](/de/docs/Web/API/Element/click_event)) im HTML-Quelltext auf einem Element angegeben wird, wird der JavaScript-Code im Attributwert effektiv in eine Handler-Funktion eingebunden, die den Wert von `this` auf eine Weise bindet, die mit `addEventListener()` konsistent ist; ein Vorkommen von `this` innerhalb des Codes stellt eine Referenz auf das Element dar.

```html
<table id="my_table" onclick="console.log(this.id);">
  <!-- `this` refers to the table; logs 'my_table' -->
  …
</table>
```

Beachten Sie, dass der Wert von `this` innerhalb einer Funktion, _die vom_ Code
im Attributwert aufgerufen wird, gemäß den [Standardregeln](/de/docs/Web/JavaScript/Reference/Operators/this) verhält. Dies wird
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

Die {{jsxref("Function.prototype.bind()")}} Methode ermöglicht es, einen festen
`this` Kontext für alle nachfolgenden Aufrufe zu definieren — wodurch Probleme umgangen werden, bei denen unklar ist, was `this` sein wird, abhängig davon,
von welchem Kontext aus Ihre Funktion aufgerufen wurde. Beachten Sie jedoch, dass Sie einen
Referenz auf den Listener bereithalten müssen, damit Sie ihn später entfernen können.

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

Eine weitere Möglichkeit, den Verweis auf `this` zu handhaben, ist die Verwendung einer Pfeilfunktion, die keinen separaten `this` Kontext erstellt.

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

### Daten in und aus einem Ereignis-Listener ein- und ausgeben

Ereignis-Listener nehmen nur ein Argument an,
ein [`Event`](/de/docs/Web/API/Event) oder eine Unterklasse von `Event`,
das automatisch an den Listener übergeben wird, und der Rückgabewert wird ignoriert.
Daher müssen Sie anstelle das Daten durch Parameter und Rückgabewerte weiterzugegeben, [Closures](/de/docs/Web/JavaScript/Guide/Closures) erstellen, um Daten in und aus einem Ereignis-Listener zu bekommen.

Die als Ereignis-Listener übergebenen Funktionen haben Zugang zu allen Variablen, die in den äußeren Gültigkeitsbereichen deklariert sind, die die Funktion enthalten.

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

Lesen Sie [den Funktionsleitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_scopes_and_closures) für weitere Informationen über Funktionsbereiche.

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

Im ersten Beispiel oben wird bei jeder
Iteration der Schleife eine neue (anonyme) Handler-Funktion erstellt. Im zweiten Fall wird die gleiche vorher deklarierte Funktion als
Ereignishandler verwendet, was einen geringeren Speicherverbrauch zur Folge hat, da nur
eine Handler-Funktion erstellt wird. Darüber hinaus ist es im ersten Fall nicht möglich
, [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) aufzurufen, weil keine
Referenz zur anonymen Funktion aufbewahrt wird (oder hier, nicht zu einer der
mehreren anonymen Funktionen, die die Schleife erstellen könnte). Im zweiten Fall ist es möglich,
`myElement.removeEventListener("click", processEvent, false)` zu tun,
weil `processEvent` die Funktionsreferenz ist.

Tatsächlich ist in Bezug auf den Speicherverbrauch das Nichtbehalten einer Funktionsreferenz nicht
das eigentliche Problem; sondern eher das Nichtbehalten einer _statischen_ Funktionsreferenz.

### Verwendung von passiven Listenern

Wenn ein Ereignis eine Standardaktion hat – zum Beispiel ein [`wheel`](/de/docs/Web/API/Element/wheel_event) Ereignis, das den Container standardmäßig scrollt — ist der Browser im Allgemeinen nicht in der Lage, die Standardaktion zu starten, solange der Ereignis-Listener noch arbeitet, da er im Voraus nicht weiß, ob der Ereignis-Listener die Standardaktion möglicherweise durch Aufruf von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen kann. Wenn der Ereignis-Listener zu lange für die Ausführung benötigt, kann dies zu einer merklichen Verzögerung führen, die auch als {{Glossary("jank", "Ruck")}} bekannt ist, bevor die Standardaktion ausgeführt werden kann.

Durch das Setzen der `passive` Option auf `true` erklärt ein Ereignis-Listener, dass er die Standardaktion nicht abbrechen wird, sodass der Browser die Standardaktion sofort starten kann, ohne auf das Ende des Listeners zu warten. Wenn der Listener dann [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, hat dies keine Wirkung.

Die Spezifikation für `addEventListener()` definiert den Standardwert für die `passive` Option immer als `false`. Um jedoch die Scroll-Leistungssteigerungen passiver Listener in älterem Code zu realisieren, haben moderne Browser den Standardwert der `passive` Option geändert, um für die [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event) Ereignisse auf Dokumentebenenknoten [`Window`](/de/docs/Web/API/Window), [`Document`](/de/docs/Web/API/Document) und [`Document.body`](/de/docs/Web/API/Document/body) zu `true` zu machen. Das verhindert, dass der Ereignis-Listener [das Ereignis abbricht](/de/docs/Web/API/Event/preventDefault), sodass es das Rendering der Seite nicht blockieren kann, während der Benutzer scrollt.

Deshalb müssen Sie, wenn Sie dieses Verhalten überschreiben und sicherstellen möchten, dass die `passive` Option `false` ist, die Option explizit auf `false` setzen (anstatt sich auf den Standardwert zu verlassen).

Sie müssen sich keine Sorgen um den Wert von `passive` für das grundlegende [`scroll`](/de/docs/Web/API/Element/scroll_event) Ereignis machen.
Da es nicht abgebrochen werden kann, können Ereignis-Listener das Seiten-Rendering ohnehin nicht blockieren.

Siehe [Verbesserung der Scroll-Leistung durch Verwendung passiver Listener](#verbesserte_scroll-leistung_mit_passiven_listenern) für ein Beispiel, das die Wirkung passiver Listener zeigt.

## Beispiele

### Einfachen Listener hinzufügen

Dieses Beispiel demonstriert, wie `addEventListener()` verwendet wird, um auf Mausklicks auf ein Element zu achten.

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

In diesem Code ist `modifyText()` ein Listener für `click` Events,
der mit `addEventListener()` registriert wurde. Ein Klick irgendwo in der Tabelle sprudelt
zum Handler hoch und führt `modifyText()` aus.

#### Ergebnis

{{EmbedLiveSample('Add_a_simple_listener')}}

### Einen abbrechbaren Listener hinzufügen

Dieses Beispiel demonstriert, wie ein `addEventListener()` hinzugefügt werden kann, das mit einem [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgebrochen werden kann.

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

Im oben genannten Beispiel ändern wir den Code im vorherigen Beispiel so, dass nachdem der Inhalt der zweiten Zeile auf "three" geändert wird, wir `abort()` des [`AbortController`](/de/docs/Web/API/AbortController) aufrufen, das wir an den `addEventListener()` Aufruf übergeben haben. Das führt dazu, dass der Wert für immer "three" bleibt, weil wir keinen weiteren Code haben, der auf ein Klick-Ereignis lauscht.

#### Ergebnis

{{EmbedLiveSample('Add_an_abortable_listener')}}

### Ereignis-Listener mit anonymer Funktion

Hier werfen wir einen Blick darauf, wie eine anonyme Funktion verwendet wird, um Parameter in den
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
Parameter an die `modifyText()` Funktion senden kann, die
für die tatsächliche Reaktion auf das Ereignis verantwortlich ist.

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_anonymous_function')}}

### Ereignis-Listener mit einer Pfeilfunktion

Dieses Beispiel demonstriert einen Ereignis-Listener, der mit der Pfeilfunktionsnotation
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

Bitte beachten Sie, dass, obwohl anonyme und Pfeilfunktionen ähnlich sind, sie unterschiedliche
`this` Bindungen haben. Während anonyme (und alle traditionellen JavaScript-Funktionen)
ihre eigenen `this` Bindungen erstellen, erben Pfeilfunktionen die
`this` Bindung der umgebenden Funktion.

Das bedeutet, dass die Variablen und Konstanten, die der umgebenden Funktion zur Verfügung stehen,
auch dem Ereignis-Handler zur Verfügung stehen, wenn eine Pfeilfunktion verwendet wird.

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

Sie können mehr als eine der Optionen im `options` Parameter festlegen. Im folgenden Beispiel setzen wir zwei Optionen:

- `passive`, um sicherzustellen, dass der Handler nicht [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft
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

### Verbesserte Scroll-Leistung mit passiven Listenern

Das folgende Beispiel zeigt die Wirkung des Setzens von `passive`. Es enthält ein {{htmlelement("div")}} mit etwas Text und einem Kontrollkästchen.

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

Der Code fügt dem [`wheel`](/de/docs/Web/API/Element/wheel_event) Ereignis des Containers einen Listener hinzu, das standardmäßig den Container scrollt. Der Listener führt eine lang laufende Operation aus. Zunächst wird der Listener mit der `passive` Option hinzugefügt, und wann immer das Kontrollkästchen umgeschaltet wird, schaltet der Code die `passive` Option um.

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

Die Wirkung ist, dass:

- Zunächst ist der Listener passiv, sodass das Scrollen des Containers mit dem Rad sofort erfolgt.
- Wenn Sie "passiv" abwählen und versuchen, den Container mit dem Rad zu scrollen, dann gibt es eine merkliche Verzögerung, bevor der Container scrollt, weil der Browser warten muss, bis der lang laufende Listener abgeschlossen ist.

{{EmbedLiveSample("Improving scroll performance using passive listeners", 100, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)
- [Erstellen und Auslösen benutzerdefinierter Ereignisse](/de/docs/Web/Events/Creating_and_triggering_events)
- [Mehr Details zur Verwendung von `this` in Ereignis-Handlern](https://www.quirksmode.org/js/this.html)

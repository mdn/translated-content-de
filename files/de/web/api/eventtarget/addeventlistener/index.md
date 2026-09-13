---
title: "EventTarget: Methode addEventListener()"
short-title: addEventListener()
slug: Web/API/EventTarget/addEventListener
l10n:
  sourceCommit: 26fb7eaa7b398a35c2463fa15ab6ccfa46a9e06d
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`addEventListener()`**-Methode des [`EventTarget`](/de/docs/Web/API/EventTarget)-Interfaces richtet eine Funktion ein, die immer dann aufgerufen wird, wenn das angegebene Ereignis an das Ziel übermittelt wird.

Gängige Ziele sind [`Element`](/de/docs/Web/API/Element) oder dessen Kinder, [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window), aber das Ziel kann jedes Objekt sein, das Ereignisse unterstützt (wie z.B. [`IDBRequest`](/de/docs/Web/API/IDBRequest)).

> [!NOTE]
> Die Methode `addEventListener()` ist die _empfohlene_ Methode, um einen Ereignis-Listener zu registrieren. Die Vorteile sind:
>
> - Es ermöglicht das Hinzufügen von mehr als einem Handler für ein Ereignis. Dies ist besonders
>   nützlich für Bibliotheken, JavaScript-Module oder jede andere Art von
>   Code, der gut mit anderen Bibliotheken oder Erweiterungen zusammenarbeiten muss.
> - Im Gegensatz zur Verwendung einer `onXYZ`-Eigenschaft bietet es eine feinere Steuerung der Phase, in der der Listener aktiviert wird (Erfassungs- vs. Blasenphase).
> - Es funktioniert mit jedem Ereignisziel, nicht nur mit HTML- oder SVG-Elementen.

Die Methode `addEventListener()` funktioniert, indem sie eine Funktion oder ein Objekt, das eine `handleEvent()`-Funktion implementiert, zur Liste der Ereignis-Listener für den angegebenen Ereignistyp auf dem [`EventTarget`](/de/docs/Web/API/EventTarget), auf dem es aufgerufen wird, hinzufügt. Wenn die Funktion oder das Objekt bereits in der Liste der Ereignis-Listener für dieses Ziel enthalten ist, wird die Funktion oder das Objekt nicht ein zweites Mal hinzugefügt.

> [!NOTE]
> Wenn eine bestimmte anonyme Funktion in der Liste der für ein bestimmtes Ziel registrierten Ereignis-Listener enthalten ist und später im Code dieselbe anonyme Funktion in einem `addEventListener`-Aufruf angegeben wird, wird die zweite Funktion _auch_ zur Liste der Ereignis-Listener für dieses Ziel hinzugefügt.
>
> Tatsächlich sind anonyme Funktionen nicht identisch, selbst wenn sie mit
> demselben unveränderten Quellcode wiederholt definiert werden, **selbst wenn in einer Schleife**.
>
> Wiederholt dieselbe unbenannte Funktion in solchen Fällen zu definieren, kann
> problematisch sein. (Siehe [Speicherprobleme](#speicherprobleme) unten.)

Wenn ein Ereignis-Listener zu einem [`EventTarget`](/de/docs/Web/API/EventTarget) von innerhalb eines anderen Listeners hinzugefügt wird – das heißt, während der Verarbeitung des Ereignisses – wird dieses Ereignis den neuen Listener nicht auslösen. Der neue Listener kann jedoch in einer späteren Phase des Ereignisflusses ausgelöst werden, z. B. in der Blasenphase.

## Syntax

```js-nolint
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

### Parameter

- `type`
  - : Ein case-sensitiver String, der den [Ereignistyp](/de/docs/Web/API/Document_Object_Model/Events) darstellt, der überwacht werden soll.
- `listener`
  - : Das Objekt, das eine Benachrichtigung empfängt (ein Objekt, das das
    [`Event`](/de/docs/Web/API/Event) Interface implementiert), wenn ein Ereignis des angegebenen Typs auftritt. Dies kann
    `null`, ein Objekt mit einer `handleEvent()`-Methode oder eine JavaScript-
    [Funktion](/de/docs/Web/JavaScript/Guide/Functions) sein. Siehe
    [Der Ereignis-Listener-Callback](#der_ereignis-listener-callback) für Details zum Callback selbst.
- `options` {{optional_inline}}
  - : Ein Objekt, das Eigenschaften über den Ereignis-Listener spezifiziert. Die verfügbaren
    Optionen sind:
    - `capture` {{optional_inline}}
      - : Ein booleanischer Wert, der angibt, dass Ereignisse dieses Typs an den registrierten `Listener` gesendet werden, bevor sie an ein `EventTarget` darunter im DOM-Baum gesendet werden. Wenn nicht angegeben, ist der Standardwert `false`.
    - `once` {{optional_inline}}
      - : Ein booleanischer Wert, der angibt, dass der `Listener`
        höchstens einmal nach dem Hinzufügen aufgerufen werden soll. Wenn `true`, wird der
        `Listener` automatisch entfernt, wenn er aufgerufen wird. Wenn nicht angegeben, ist der Standardwert `false`.
    - `passive` {{optional_inline}}
      - : Ein booleanischer Wert, der, wenn `true`, anzeigt, dass die durch `Listener` angegebene Funktion niemals [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft. Wenn ein passiver Listener `preventDefault()` aufruft, wird nichts geschehen und es kann eine Konsolenwarnung generiert werden.

        Wenn diese Option nicht angegeben wird, ist der Standardwert `false` – außer in Browsern, die nicht Safari sind, wo sie für [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event) Ereignisse `true` ist. Siehe [Verwendung passiver Listener](#verwendung_passiver_listener), um mehr zu erfahren.

    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Der Listener wird entfernt, wenn die [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des [`AbortController`](/de/docs/Web/API/AbortController), dem das `AbortSignal` gehört, aufgerufen wird. Wenn nicht angegeben, wird kein `AbortSignal` mit dem Listener in Verbindung gebracht.

- `useCapture` {{optional_inline}}
  - : Ein booleanischer Wert, der angibt, ob Ereignisse dieses Typs zu dem registrierten `Listener` _bevor_ sie an irgendein `EventTarget` darunter im DOM-Baum gesendet werden, gesendet werden. Ereignisse, die durch den Baum nach oben blasen, werden keinen Listener auslösen, der zur Verwendung der Erfassungsphase bestimmt ist. Ereignisblasen und -erfassung sind zwei Wege, wie Ereignisse, die in einem Element auftreten, das innerhalb eines anderen Elements geschachtelt ist, weitergegeben werden, wenn beide Elemente einen Handler für dieses Ereignis registriert haben. Der Ereignispropagationsmodus bestimmt die Reihenfolge, in der Elemente das Ereignis empfangen. Siehe [die DOM-Spezifikation](https://dom.spec.whatwg.org/#introduction-to-dom-events) und [JavaScript-Ereignisreihenfolge](https://www.quirksmode.org/js/events_order.html#link4) für eine detaillierte Erklärung. Wenn nicht angegeben, ist der Standardwert für `useCapture` `false`.

    > [!NOTE]
    > Für Ereignis-Listener, die an das Ereignisziel angehängt sind, befindet sich das Ereignis in der Zielphase und nicht in den Erfassungs- und Blasenphasen.
    > Ereignis-Listener in der _Erfassungs_ phase werden vor den Ereignis-Listenern in der Ziel- und Blasenphase aufgerufen.

- `wantsUntrusted` {{optional_inline}} {{non-standard_inline}}
  - : Ein Firefox (Gecko)-spezifischer Parameter. Wenn `true`, empfängt der Listener synthetische Ereignisse, die vom Webinhalt gesendet werden (der Standardwert ist `false` für den Browser-{{Glossary("chrome", "Chrome")}} und `true` für reguläre Webseiten). Dieser Parameter ist nützlich für Code, der in Add-ons zu finden ist, sowie für den Browser selbst.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Verwendungshinweise

### Der Ereignis-Listener-Callback

Der Ereignis-Listener kann entweder als Callback-Funktion oder als Objekt angegeben werden, dessen `handleEvent()`-Methode als Callback-Funktion dient.

Die Callback-Funktion selbst hat dieselben Parameter und denselben Rückgabewert wie die `handleEvent()`-Methode; das heißt, der Callback akzeptiert einen einzigen Parameter: ein Objekt basierend auf [`Event`](/de/docs/Web/API/Event), das das aufgetretene Ereignis beschreibt, und es gibt nichts zurück.

Zum Beispiel könnte ein Ereignis-Handler-Callback, der sowohl [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) als auch [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) behandeln kann, so aussehen:

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

Es ist oft wünschenswert, auf das Element zu verweisen, auf dem der Ereignis-Handler ausgelöst wurde, beispielsweise bei der Verwendung eines generischen Handlers für eine Reihe ähnlicher Elemente.

Wenn eine Handler-Funktion mit `addEventListener()` an ein Element angehängt wird, wird der Wert von {{jsxref("this")}} im Handler ein Verweis auf das Element sein. Er wird derselbe sein wie der Wert der `currentTarget`-Eigenschaft des Ereignis-Arguments, das an den Handler übergeben wird.

```js
myElement.addEventListener("click", function (e) {
  console.log(this.className); // logs the className of myElement
  console.log(e.currentTarget === this); // logs `true`
});
```

Zur Erinnerung: [Arrow-Funktionen haben keinen eigenen `this`-Kontext](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

```js
myElement.addEventListener("click", (e) => {
  console.log(this.className); // WARNING: `this` is not `myElement`
  console.log(e.currentTarget === this); // logs `false`
});
```

Wenn ein Ereignis-Handler (z.B. [`onclick`](/de/docs/Web/API/Element/click_event)) in der HTML-Quelle an ein Element angegeben wird, wird der JavaScript-Code im Attributwert effektiv in einer Handler-Funktion eingeschlossen, die den Wert von `this` auf eine Weise bindet, die mit `addEventListener()` konsistent ist; ein Vorkommen von `this` im Code stellt einen Verweis auf das Element dar.

```html
<table id="my-table" onclick="console.log(this.id);">
  <!-- `this` refers to the table; logs 'my-table' -->
  …
</table>
```

Beachten Sie, dass der Wert von `this` in einer Funktion, _aufgerufen von_ dem Code im Attributwert, sich nach den [Standardregeln](/de/docs/Web/JavaScript/Reference/Operators/this) verhält. Dies wird im folgenden Beispiel gezeigt:

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

Der Wert von `this` innerhalb `logID()` ist ein Verweis auf das globale Objekt [`Window`](/de/docs/Web/API/Window) (oder `undefined` im Fall von [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode).

#### Festlegen von "this" mit `bind()`

Die Methode {{jsxref("Function.prototype.bind()")}} ermöglicht Ihnen, einen festen `this`-Kontext für alle nachfolgenden Aufrufe festzulegen – dadurch werden Probleme umgangen, bei denen es unklar ist, was `this` sein wird, abhängig vom Kontext, aus dem Ihre Funktion aufgerufen wurde. Beachten Sie jedoch, dass Sie eine Referenz auf den Listener behalten müssen, damit Sie ihn später entfernen können.

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

Eine weitere Lösung besteht darin, eine spezielle Funktion namens `handleEvent()` zu verwenden, um alle Ereignisse abzufangen:

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

Eine andere Möglichkeit, den Verweis auf `this` zu handhaben, besteht darin, eine Arrow-Funktion zu verwenden, die keinen separaten `this`-Kontext erstellt.

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

### Daten in und aus einem Ereignis-Listener erhalten

Ereignis-Listener nehmen nur ein Argument, ein [`Event`](/de/docs/Web/API/Event) oder eine Unterklasse von `Event`, das automatisch an den Listener übergeben wird, und der Rückgabewert wird ignoriert. Daher müssen Sie, um Daten in und aus einem Ereignis-Listener zu bekommen, statt die Daten durch Parameter und Rückgabewerte zu übergeben, [Closures](/de/docs/Web/JavaScript/Guide/Closures) erstellen.

Die als Ereignis-Listener übergebenen Funktionen haben Zugriff auf alle Variablen, die in den äußeren Bereichen deklariert sind, die die Funktion enthalten.

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

Lesen Sie den [Funktionen-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_scopes_and_closures), um mehr über Funktionsbereiche zu erfahren.

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

Im ersten Fall oben wird mit jeder
Schleifeniteration eine neue (anonyme) Handler-Funktion erstellt. Im zweiten Fall wird dieselbe zuvor deklarierte Funktion als Ereignis-Handler verwendet, was zu einem geringeren Speicherbedarf führt, da nur eine Handler-Funktion erstellt wird. Außerdem ist es im ersten Fall nicht möglich, [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) aufzurufen, da keine
Referenz zur anonymen Funktion gespeichert wird (oder hier nicht auf eine der mehreren anonymen Funktionen, die die Schleife möglicherweise erstellt). Im zweiten Fall ist es möglich, `myElement.removeEventListener("click", processEvent, false)` aufzurufen, da `processEvent` die Funktionsreferenz ist.

Eigentlich ist im Hinblick auf den Speicherverbrauch nicht das Fehlen des Beibehaltens einer Funktionsreferenz das wirkliche Problem; vielmehr ist es das Fehlen des Beibehaltens einer _statischen_ Funktionsreferenz.

### Verwendung passiver Listener

Wenn ein Ereignis eine Standardaktion hat – beispielsweise ein [`wheel`](/de/docs/Web/API/Element/wheel_event) Ereignis, das den Container standardmäßig scrollt – ist der Browser im Allgemeinen nicht in der Lage, die Standardaktion zu starten, bis der Ereignis-Listener beendet ist, da er im Voraus nicht weiß, ob der Ereignis-Listener die Standardaktion möglicherweise durch den Aufruf von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen wird. Wenn der Ereignis-Listener zu lange braucht, um auszuführen, kann dies zu einer wahrnehmbaren Verzögerung führen, auch bekannt als {{Glossary("jank", "Jank")}}, bevor die Standardaktion ausgeführt werden kann.

Indem die `passive`-Option auf `true` gesetzt wird, erklärt ein Ereignis-Listener, dass er die Standardaktion nicht abbrechen wird, sodass der Browser die Standardaktion sofort starten kann, ohne darauf zu warten, dass der Listener beendet ist. Wenn der Listener dann [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, hat dies keine Wirkung.

Die Spezifikation für `addEventListener()` definiert den Standardwert für die `passive`-Option als immer `false`. Um jedoch die Scroll-Leistungsverbesserungen passiver Listener im alten Code zu nutzen, haben moderne Browser den Standardwert für die `passive`-Option für die [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event) Ereignisse auf Dokumentebene-Knoten wie [`Window`](/de/docs/Web/API/Window), [`Document`](/de/docs/Web/API/Document) und [`Document.body`](/de/docs/Web/API/Document/body) auf `true` geändert. Dies verhindert, dass der Ereignis-Listener das [Ereignis abbricht](/de/docs/Web/API/Event/preventDefault), sodass er das Rendering der Seite während des Scrollens nicht blockieren kann.

Deshalb müssen Sie, wenn Sie dieses Verhalten überschreiben und sicherstellen wollen, dass die `passive`-Option `false` ist, die Option ausdrücklich auf `false` setzen (statt sich auf den Standardwert zu verlassen).

Sie brauchen sich keine Sorgen über den Wert von `passive` für das grundlegende [`scroll`](/de/docs/Web/API/Element/scroll_event) Ereignis zu machen. Da es nicht abgebrochen werden kann, können Ereignis-Listener das Seiten-Rendering nicht blockieren.

Siehe [Verbesserung der Scroll-Leistung durch passive Listener](#verbesserung_der_scroll-leistung_durch_passive_listener) für ein Beispiel, das die Wirkung passiver Listener zeigt.

## Beispiele

### Einen einfachen Listener hinzufügen

Dieses Beispiel zeigt, wie `addEventListener()` verwendet wird, um auf Mausklicks auf ein Element zu warten.

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

In diesem Code ist `modifyText()` ein Listener für `click` Ereignisse, registriert durch die Verwendung von `addEventListener()`. Ein Klick irgendwo in der Tabelle wird zum Handler gebubbelt und führt `modifyText()` aus.

#### Ergebnis

{{EmbedLiveSample('Add_a_simple_listener')}}

### Einen abbrechbaren Listener hinzufügen

Dieses Beispiel zeigt, wie ein `addEventListener()` hinzugefügt werden kann, das mit einem [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgebrochen werden kann.

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

Im obigen Beispiel ändern wir den Code im vorherigen Beispiel so, dass nachdem der Inhalt der zweiten Reihe zu "three" geändert wurde, wir `abort()` von dem [`AbortController`](/de/docs/Web/API/AbortController) aufrufen, den wir an den `addEventListener()`-Aufruf übergeben haben. Das resultiert darin, dass der Wert für immer "three" bleibt, weil wir keinen Code mehr haben, der auf ein Klickevent hört.

#### Ergebnis

{{EmbedLiveSample('Add_an_abortable_listener')}}

### Ereignis-Listener mit anonymer Funktion

Hier werden wir uns ansehen, wie man eine anonyme Funktion verwendet, um Parameter an den Ereignis-Listener zu übergeben.

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

Beachten Sie, dass der Listener eine anonyme Funktion ist, die Code einschließt, der dann wiederum in der Lage ist, Parameter an die `modifyText()`-Funktion zu senden, die für das eigentliche Reagieren auf das Ereignis verantwortlich ist.

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_anonymous_function')}}

### Ereignis-Listener mit einer Arrow-Funktion

Dieses Beispiel zeigt einen Ereignis-Listener, der mit Arrow-Funktion-Notation implementiert ist.

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

Bitte beachten Sie, dass obwohl anonyme und Arrow-Funktionen ähnlich sind, sie unterschiedliche `this`-Bindungen haben. Während anonyme (und alle traditionellen JavaScript-Funktionen) ihre eigenen `this`-Bindungen erstellen, erben Arrow-Funktionen die `this`-Bindung der umgebenden Funktion.

Das bedeutet, dass die für die umgebende Funktion verfügbaren Variablen und Konstanten auch für den Ereignis-Handler beim Verwenden einer Arrow-Funktion verfügbar sind.

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

Klicken Sie auf die äußeren, mittleren und inneren Container, um zu sehen, wie die Optionen funktionieren.

{{ EmbedLiveSample('Example_of_options_usage', 600, 630) }}

### Ereignis-Listener mit mehreren Optionen

Sie können im `options`-Parameter mehr als eine der Optionen festlegen. Im folgenden Beispiel setzen wir zwei Optionen:

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

### Verbesserung der Scroll-Leistung durch passive Listener

Das folgende Beispiel zeigt die Wirkung der Einstellung von `passive`. Es enthält eine {{htmlelement("div")}}, die etwas Text enthält, und ein Kontrollkästchen.

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

Der Code fügt dem [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis des Containers einen Listener hinzu, der standardmäßig den Container scrollt. Der Listener führt eine langlaufende Operation durch. Anfänglich wird der Listener mit der `passive`-Option hinzugefügt und immer wenn das Kontrollkästchen umgeschaltet wird, wird die `passive`-Option umgeschaltet.

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

Die Wirkung ist, dass:

- Anfänglich ist der Listener passiv, daher ist der Versuch, den Container mit dem Rad zu scrollen, sofort.
- Wenn Sie "passive" abwählen und versuchen, den Container mit dem Rad zu scrollen, gibt es eine merkliche Verzögerung, bevor der Container scrollt, weil der Browser warten muss, bis der langlaufende Listener beendet ist.

{{EmbedLiveSample("Improving scroll performance using passive listeners", 100, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)
- [Erstellen und Auslösen benutzerdefinierter Ereignisse](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events)
- [Mehr Details zur Verwendung von `this` in Ereignis-Handlern](https://www.quirksmode.org/js/this.html)

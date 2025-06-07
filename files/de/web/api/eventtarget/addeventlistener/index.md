---
title: "EventTarget: addEventListener()-Methode"
short-title: addEventListener()
slug: Web/API/EventTarget/addEventListener
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`addEventListener()`**-Methode der [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle
richtet eine Funktion ein, die immer dann aufgerufen wird, wenn das angegebene Ereignis an das Ziel gesendet wird.

Typische Ziele sind [`Element`](/de/docs/Web/API/Element) oder dessen Kinder, [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window), aber das Ziel kann jedes Objekt sein, das Ereignisse unterstützt (wie zum Beispiel [`IDBRequest`](/de/docs/Web/API/IDBRequest)).

> [!NOTE]
> Die `addEventListener()`-Methode ist der _empfohlene_ Weg, um einen Ereignis-Listener zu registrieren. Die Vorteile sind folgende:
>
> - Es erlaubt das Hinzufügen von mehr als einem Handler für ein Ereignis. Dies ist besonders nützlich für Bibliotheken, JavaScript-Module oder jede Art von Code, die gut mit anderen Bibliotheken oder Erweiterungen funktionieren muss.
> - Im Gegensatz zur Verwendung einer `onXYZ`-Eigenschaft bietet es eine feinere Steuerung der Phase, in der der Listener aktiviert wird (Capturing vs. Bubbling).
> - Es funktioniert auf jedem Ereignisziel, nicht nur auf HTML- oder SVG-Elementen.

Die Methode `addEventListener()` funktioniert, indem sie eine Funktion oder ein Objekt, das eine `handleEvent()`-Funktion implementiert, zur Liste der Event-Listener für den angegebenen Ereignistyp auf dem [`EventTarget`](/de/docs/Web/API/EventTarget), auf dem sie aufgerufen wird, hinzufügt. Wenn die Funktion oder das Objekt bereits in der Liste der Event-Listener für dieses Ziel enthalten ist, wird die Funktion oder das Objekt nicht ein zweites Mal hinzugefügt.

> [!NOTE]
> Wenn eine bestimmte anonyme Funktion in der Liste der für ein bestimmtes Ziel registrierten Event-Listener enthalten ist und später im Code eine identische anonyme Funktion in einem `addEventListener`-Aufruf übergeben wird, wird die zweite Funktion _auch_ zur Liste der Event-Listener für dieses Ziel hinzugefügt.
>
> Tatsächlich sind anonyme Funktionen nicht identisch, selbst wenn sie denselben unveränderten Quellcode verwenden, der wiederholt aufgerufen wird, **sogar in einer Schleife**.
>
> Die wiederholte Definition derselben unbenannten Funktion in solchen Fällen kann problematisch sein. (Siehe [Speicherprobleme](#speicherprobleme), unten.)

Wenn ein Event-Listener während der Verarbeitung des Ereignisses von einem anderen Listener zu einem [`EventTarget`](/de/docs/Web/API/EventTarget) hinzugefügt wird, löst dieses Ereignis den neuen Listener nicht aus.
Der neue Listener kann jedoch in einer späteren Phase des Ereignisflusses ausgelöst werden, beispielsweise während der Bubbling-Phase.

## Syntax

```js-nolint
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

### Parameters

- `type`
  - : Eine groß-/kleinschreibungsabhängige Zeichenkette, die den [Ereignistyp](/de/docs/Web/Events) darstellt, auf den gelauscht werden soll.
- `listener`
  - : Das Objekt, das bei Auftreten eines Ereignisses des angegebenen Typs eine Benachrichtigung erhält (ein Objekt, das die [`Event`](/de/docs/Web/API/Event)-Schnittstelle implementiert). Dies muss `null`, ein Objekt mit einer `handleEvent()`-Methode oder eine JavaScript-[Funktion](/de/docs/Web/JavaScript/Guide/Functions) sein. Siehe [Der Event-Listener-Callback](#der_event-listener-callback) für Details zum Callback selbst.
- `options` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften über den Event-Listener spezifiziert. Die verfügbaren Optionen sind:

    - `capture` {{optional_inline}}
      - : Ein Boolean-Wert, der angibt, dass Ereignisse dieses Typs an den registrierten `listener` gesendet werden, bevor sie an ein darunterliegendes `EventTarget` im DOM-Baum gesendet werden. Wenn nicht angegeben, ist der Standardwert `false`.
    - `once` {{optional_inline}}
      - : Ein Boolean-Wert, der angibt, dass der `listener` höchstens einmal aufgerufen werden soll, nachdem er hinzugefügt wurde. Wenn `true`, wird der `listener` automatisch entfernt, wenn er aufgerufen wird. Wenn nicht angegeben, ist der Standardwert `false`.
    - `passive` {{optional_inline}}

      - : Ein Boolean-Wert, der, wenn `true`, anzeigt, dass die von `listener` angegebene Funktion niemals [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen wird. Wenn ein passiver Listener `preventDefault()` aufruft, passiert nichts und es kann eine Konsolenwarnung generiert werden.

        Wenn diese Option nicht angegeben ist, ist der Standardwert `false` – außer in Browsern außer Safari, wo sie für [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event) Ereignisse auf `true` gesetzt ist. Lesen Sie [Verwendung passiver Listener](#verwendung_passiver_listener), um mehr zu erfahren.

    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Der Listener wird entfernt, wenn die [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des [`AbortController`](/de/docs/Web/API/AbortController), dem das `AbortSignal` gehört, aufgerufen wird. Wenn nicht angegeben, wird kein `AbortSignal` mit dem Listener verknüpft.

- `useCapture` {{optional_inline}}

  - : Ein Boolean-Wert, der angibt, ob Ereignisse dieses Typs an den registrierten `listener` _vor_ den anderen `EventTarget`-Elementen, die darunter im DOM-Baum liegen, gesendet werden. Ereignisse, die auf dem Weg nach oben durch den Baum blasen, lösen keinen Listener aus, der für die Verwendung von Capturing gekennzeichnet ist. Event-Bubbling und Capturing sind zwei Möglichkeiten zur Verteilung von Ereignissen, die in einem verschachtelten Element auftreten, wenn beide Elemente einen Handler für dieses Ereignis registriert haben. Der Modus der Ereignisverteilung bestimmt die Reihenfolge, in der Elemente das Ereignis erhalten. Siehe [die DOM-Spezifikation](https://dom.spec.whatwg.org/#introduction-to-dom-events) und [JavaScript-Ereignisreihenfolge](https://www.quirksmode.org/js/events_order.html#link4) für eine detaillierte Erklärung.
    Wenn nicht angegeben, ist `useCapture` standardmäßig `false`.

    > [!NOTE]
    > Für Event-Listener, die an das Ereignisziel angehängt sind, befindet sich das Ereignis in der Zielphase, anstatt in den Capturing- und Bubbling-Phasen.
    > Event-Listener in der _Capturing_-Phase werden vor Event-Listenern in der Ziel- und Bubbling-Phase aufgerufen.

- `wantsUntrusted` {{optional_inline}} {{non-standard_inline}}
  - : Ein Firefox (Gecko)-spezifischer Parameter. Wenn `true`, empfängt der Listener synthetische Ereignisse, die von Webinhalten gesendet werden (der Standardwert ist `false` für Browser-{{Glossary("chrome", "Chrome")}} und `true` für reguläre Webseiten). Dieser Parameter ist nützlich für Code, der in Add-Ons sowie im Browser selbst gefunden wird.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Nutzungshinweise

### Der Event-Listener-Callback

Der Event-Listener kann entweder als Callback-Funktion oder als Objekt angegeben werden, dessen `handleEvent()`-Methode als Callback-Funktion dient.

Die Callback-Funktion selbst hat die gleichen Parameter und den gleichen Rückgabewert wie die `handleEvent()`-Methode; das heißt, der Callback akzeptiert einen einzelnen Parameter: ein auf [`Event`](/de/docs/Web/API/Event) basierendes Objekt, das das aufgetretene Ereignis beschreibt, und es gibt nichts zurück.

Beispielsweise könnte ein Ereignishandler-Callback, das sowohl [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) als auch [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) behandeln kann, folgendermaßen aussehen:

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

Es ist oft wünschenswert, auf das Element zu verweisen, auf dem der Ereignishandler ausgelöst wurde, zum Beispiel bei der Verwendung eines generischen Handlers für eine Gruppe ähnlicher Elemente.

Wenn eine Handler-Funktion mit `addEventListener()` an ein Element angehängt wird, ist der Wert von {{jsxref("Operators/this","this")}} innerhalb des Handlers eine Referenz auf das Element. Es wird der gleiche Wert wie die `currentTarget`-Eigenschaft des Ereignisarguments sein, das an den Handler übergeben wird.

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

Wenn ein Ereignishandler (zum Beispiel [`onclick`](/de/docs/Web/API/Element/click_event)) in der HTML-Quelle für ein Element angegeben wird, wird der JavaScript-Code im Attributwert effektiv in eine Handler-Funktion eingeschlossen, die den Wert von `this` auf eine Weise bindet, die mit der `addEventListener()`-Methode konsistent ist; ein Vorkommen von `this` im Code stellt eine Referenz zum Element dar.

```html
<table id="my_table" onclick="console.log(this.id);">
  <!-- `this` refers to the table; logs 'my_table' -->
  …
</table>
```

Beachten Sie, dass der Wert von `this` innerhalb einer Funktion, _die vom_ Code im Attributwert _aufgerufen wird_, gemäß den [Standardregeln](/de/docs/Web/JavaScript/Reference/Operators/this) funktioniert. Dies wird im folgenden Beispiel gezeigt:

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

Der Wert von `this` innerhalb von `logID()` ist eine Referenz auf das globale Objekt [`Window`](/de/docs/Web/API/Window) (oder `undefined` im Fall des [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)).

#### "this" mithilfe von bind() spezifizieren

Die {{jsxref("Function.prototype.bind()")}}-Methode ermöglicht es Ihnen, einen festen `this`-Kontext für alle nachfolgenden Aufrufe festzulegen – um Probleme zu vermeiden, bei denen nicht klar ist, was `this` sein wird, abhängig vom Kontext, aus dem Ihre Funktion aufgerufen wurde. Beachten Sie jedoch, dass Sie eine Referenz auf den Listener aufbewahren müssen, damit Sie ihn später entfernen können.

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

Eine andere Lösung ist die Verwendung einer speziellen Funktion namens `handleEvent()`, um beliebige Ereignisse abzufangen:

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

Eine weitere Möglichkeit, den Bezug zu `this` zu handhaben, ist die Verwendung einer Arrow-Funktion, die keinen separaten `this`-Kontext erstellt.

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

Event-Listener akzeptieren nur ein Argument, ein [`Event`](/de/docs/Web/API/Event) oder eine Unterklasse von `Event`, das automatisch an den Listener übergeben wird, und der Rückgabewert wird ignoriert. Daher müssen Sie, um Daten in einen und aus einem Event-Listener zu bekommen, anstelle der Übergabe von Daten durch Parameter und Rückgabewerte [Closures](/de/docs/Web/JavaScript/Guide/Closures) erstellen.

Die als Event-Listener übergebenen Funktionen haben Zugriff auf alle in den äußeren Ebenen enthaltenen Variablen, die die Funktion umschließen.

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

Lesen Sie den [Funktionsleitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_scopes_and_closures) für weitere Informationen über Funktionsbereiche.

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

Im ersten oben gezeigten Fall wird mit jeder Iteration der Schleife eine neue (anonyme) Handler-Funktion erstellt. Im zweiten Fall wird dieselbe vorher deklarierte Funktion als Event-Handler verwendet, was zu einem geringeren Speicherverbrauch führt, da nur eine Handler-Funktion erstellt wird. Außerdem ist es im ersten Fall nicht möglich, [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) aufzurufen, da keine Referenz auf die anonyme Funktion behalten wird (oder hier auf keine der möglicherweise durch die Schleife erstellten mehrfachen anonymen Funktionen). Im zweiten Fall ist es möglich, `myElement.removeEventListener("click", processEvent, false)` zu verwenden, da `processEvent` die Funktionsreferenz ist.

Tatsächlich ist in Bezug auf den Speicherverbrauch nicht das Nichtbehalten einer Funktionsreferenz das eigentliche Problem, sondern das Nichtbehalten einer _statischen_ Funktionsreferenz.

### Verwendung passiver Listener

Wenn ein Ereignis eine Standardaktion hat – zum Beispiel ein [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, das das Container-Scrollen standardmäßig auslöst – ist der Browser im Allgemeinen nicht in der Lage, die Standardaktion zu starten, bis der Ereignis-Listener abgeschlossen ist, da er im Voraus nicht weiß, ob der Ereignis-Listener die Standardaktion durch Aufrufen von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) möglicherweise abbricht. Wenn der Event-Listener zu lange benötigt, um ausgeführt zu werden, kann dies zu einer merklichen Verzögerung führen, die auch als {{Glossary("jank", "Jank")}} bezeichnet wird, bevor die Standardaktion ausgeführt werden kann.

Indem die Option `passive` auf `true` gesetzt wird, erklärt der Event-Listener, dass er die Standardaktion nicht abbrechen wird, sodass der Browser die Standardaktion sofort starten kann, ohne auf den Abschluss des Listeners zu warten. Wenn der Listener dann [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, wird dies keine Wirkung haben.

Die Spezifikation für `addEventListener()` definiert den Standardwert für die `passive`-Option als immer `false`. Um jedoch die Leistungsverbesserungen bei passiven Listenern im Legacy-Code zu realisieren, haben moderne Browser den Standardwert der `passive`-Option für die [`wheel`](/de/docs/Web/API/Element/wheel_event)-, [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event)-, [`touchstart`](/de/docs/Web/API/Element/touchstart_event)- und [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignisse auf Dokumentebene auf [`Window`](/de/docs/Web/API/Window), [`Document`](/de/docs/Web/API/Document) und [`Document.body`](/de/docs/Web/API/Document/body) geändert. Das verhindert, dass der Event-Listener [das Ereignis abbrechen kann](/de/docs/Web/API/Event/preventDefault), sodass er das Seitenrendering nicht blockieren kann, während der Benutzer scrollt.

Deshalb müssen Sie, wenn Sie dieses Verhalten überschreiben und sicherstellen möchten, dass die `passive`-Option auf `false` gesetzt ist, die Option explizit auf `false` setzen (anstatt sich auf den Standardwert zu verlassen).

Sie müssen sich keine Gedanken über den Wert von `passive` für das grundlegende [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis machen. Da es nicht abgebrochen werden kann, können Event-Listener das Seitenrendering sowieso nicht blockieren.

Siehe [Verbessern der Scroll-Leistung durch passive Listener](#verbesserung_der_scroll-leistung_mit_passiven_listenern) für ein Beispiel, das den Effekt passiver Listener zeigt.

## Beispiele

### Einfachen Listener hinzufügen

Dieses Beispiel zeigt, wie `addEventListener()` verwendet wird, um auf Mausklicks auf ein Element zu achten.

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

In diesem Code ist `modifyText()` ein Listener für `click`-Ereignisse, die mit `addEventListener()` registriert werden. Ein Klick irgendwo in der Tabelle bläst bis zum Handler hoch und führt `modifyText()` aus.

#### Ergebnis

{{EmbedLiveSample('Add_a_simple_listener')}}

### Einen abbrechbaren Listener hinzufügen

Dieses Beispiel zeigt, wie ein `addEventListener()`-Ereignis hinzugefügt wird, das mit einem [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgebrochen werden kann.

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

Im obigen Beispiel ändern wir den Code aus dem vorherigen Beispiel so, dass nachdem der Inhalt der zweiten Zeile zu "drei" gewechselt hat, wir `abort()` vom [`AbortController`](/de/docs/Web/API/AbortController) aufrufen, den wir an den `addEventListener()` Aufruf übergeben haben. Das führt dazu, dass der Wert für immer "drei" bleibt, da wir keinen Code mehr haben, der auf ein Klickereignis hört.

#### Ergebnis

{{EmbedLiveSample('Add_an_abortable_listener')}}

### Event-Listener mit anonymer Funktion

Hier betrachten wir, wie eine anonyme Funktion verwendet wird, um Parameter an den Event-Listener zu übergeben.

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

Beachten Sie, dass der Listener eine anonyme Funktion ist, die Code umschließt, der dann wiederum in der Lage ist, Parameter an die `modifyText()`-Funktion zu übergeben, die für das eigentliche Reagieren auf das Ereignis verantwortlich ist.

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_anonymous_function')}}

### Event-Listener mit einer Pfeilfunktion

Dieses Beispiel zeigt einen Event-Listener, der mit der Notation einer Pfeilfunktion implementiert ist.

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

Bitte beachten Sie, dass anonyme und Pfeilfunktionen zwar ähnlich sind, aber unterschiedliche `this`-Bindungen haben. Während anonyme (und alle traditionellen JavaScript-Funktionen) ihre eigenen `this`-Bindungen erstellen, erben Pfeilfunktionen die `this`-Bindung der umgebenden Funktion.

Das bedeutet, dass die Variablen und Konstanten, die der umgebenden Funktion zur Verfügung stehen, auch dem Event-Handler zur Verfügung stehen, wenn eine Pfeilfunktion verwendet wird.

### Beispiel zur Verwendung von Optionen

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

Klicken Sie nacheinander auf die äußeren, mittleren und inneren Container, um zu sehen, wie die Optionen funktionieren.

{{ EmbedLiveSample('Example_of_options_usage', 600, 630) }}

### Event-Listener mit mehreren Optionen

Sie können im `options`-Parameter mehr als eine der Optionen setzen. Im folgenden Beispiel setzen wir zwei Optionen:

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

Das folgende Beispiel zeigt den Effekt des Setzens von `passive`. Es umfasst ein {{htmlelement("div")}}, das Text enthält, und ein Kontrollkästchen.

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

Der Code fügt einen Listener für das [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis des Containers hinzu, das standardmäßig den Container scrollt. Der Listener führt einen langlaufenden Vorgang aus. Der Listener wird zunächst mit der `passive`-Option hinzugefügt, und immer wenn das Kontrollkästchen umgeschaltet wird, ändert der Code die `passive`-Option.

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

- Der Listener ist zu Beginn passiv, sodass das Scrollen des Containers mit dem Rad sofortig erfolgt.
- Wenn Sie "passive" deaktivieren und versuchen, den Container mit dem Rad zu scrollen, gibt es eine merkliche Verzögerung, bevor der Container scrollt, da der Browser warten muss, bis der langlaufende Listener fertig ist.

{{EmbedLiveSample("Improving scroll performance using passive listeners", 100, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)
- [Erstellung und Auslösung benutzerdefinierter Ereignisse](/de/docs/Web/Events/Creating_and_triggering_events)
- [Weitere Details zur Verwendung von `this` in Event-Handlern](https://www.quirksmode.org/js/this.html)

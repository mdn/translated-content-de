---
title: "EventTarget: addEventListener() Methode"
short-title: addEventListener()
slug: Web/API/EventTarget/addEventListener
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`addEventListener()`**-Methode des [`EventTarget`](/de/docs/Web/API/EventTarget)-Interfaces richtet eine Funktion ein, die immer aufgerufen wird, wenn das angegebene Ereignis an das Ziel geliefert wird.

Häufige Ziele sind [`Element`](/de/docs/Web/API/Element) oder dessen Kinder, [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window), aber das Ziel kann jedes Objekt sein, das Ereignisse unterstützt (z.B. [`IDBRequest`](/de/docs/Web/API/IDBRequest)).

> [!NOTE]
> Die Methode `addEventListener()` ist der _empfohlene_ Weg, um einen Ereignis-Listener zu registrieren. Die Vorteile sind wie folgt:
>
> - Sie erlaubt es, mehr als einen Handler für ein Ereignis hinzuzufügen. Dies ist besonders nützlich für Bibliotheken, JavaScript-Module oder andere Arten von Code, die gut mit anderen Bibliotheken oder Erweiterungen funktionieren müssen.
> - Im Gegensatz zur Verwendung einer `onXYZ`-Eigenschaft gibt sie Ihnen eine feinere Kontrolle über die Phase, in der der Listener aktiviert wird (Capturing vs. Bubbling).
> - Sie funktioniert mit jedem Ereignisziel, nicht nur mit HTML- oder SVG-Elementen.

Die Methode `addEventListener()` funktioniert, indem eine Funktion oder ein Objekt, das eine `handleEvent()`-Funktion implementiert, zur Liste der Ereignis-Listener für den angegebenen Ereignistyp auf dem [`EventTarget`](/de/docs/Web/API/EventTarget) hinzugefügt wird, auf dem sie aufgerufen wird. Wenn die Funktion oder das Objekt bereits in der Liste der Ereignis-Listener für dieses Ziel vorhanden ist, wird die Funktion oder das Objekt nicht ein zweites Mal hinzugefügt.

> [!NOTE]
> Wenn eine bestimmte anonyme Funktion in der Liste der für ein bestimmtes Ziel registrierten Ereignis-Listener ist und später im Code eine identische anonyme Funktion in einem `addEventListener`-Aufruf angegeben wird, wird die zweite Funktion _auch_ der Liste der Ereignis-Listener für dieses Ziel hinzugefügt.
>
> Tatsächlich sind anonyme Funktionen nicht identisch, selbst wenn sie unter Verwendung desselben unveränderten Quellcodes wiederholt definiert werden, **auch wenn sie in einer Schleife verwendet werden**.
>
> Das wiederholte Definieren derselben unbenannten Funktion kann in solchen Fällen problematisch sein. (Siehe [Speicherprobleme](#speicherprobleme) unten.)

Wenn ein Ereignis-Listener zu einem [`EventTarget`](/de/docs/Web/API/EventTarget) von innerhalb eines anderen Listeners hinzugefügt wird — also während der Verarbeitung des Ereignisses — wird dieses Ereignis den neuen Listener nicht auslösen. Der neue Listener kann jedoch während einer späteren Phase des Ereignisstromes ausgelöst werden, z.B. während der Bubbling-Phase.

## Syntax

```js-nolint
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

### Parameter

- `type`
  - : Eine Groß- und Kleinschreibung berücksichtigende Zeichenfolge, die den [Ereignistyp](/de/docs/Web/API/Document_Object_Model/Events) angibt, für den Sie lauschen möchten.
- `listener`
  - : Das Objekt, das eine Benachrichtigung erhält (ein Objekt, das das [`Event`](/de/docs/Web/API/Event)-Interface implementiert), wenn ein Ereignis des angegebenen Typs auftritt. Dies muss `null`, ein Objekt mit einer `handleEvent()`-Methode oder eine JavaScript-[Funktion](/de/docs/Web/JavaScript/Guide/Functions) sein. Weitere Informationen zum Callback selbst finden Sie unter [Der Ereignislistener-Callback](#der_ereignislistener-callback).
- `options` {{optional_inline}}
  - : Ein Objekt, das Eigenschaften des Ereignis-Listeners spezifiziert. Die verfügbaren Optionen sind:
    - `capture` {{optional_inline}}
      - : Ein boolean-Wert, der angibt, dass Ereignisse dieses Typs an den registrierten `listener` gesendet werden, bevor sie an ein darunter liegendes `EventTarget` im DOM-Baum gesendet werden. Wenn nicht angegeben, wird der Standardwert `false` verwendet.
    - `once` {{optional_inline}}
      - : Ein boolean-Wert, der angibt, dass der `listener` höchstens einmal nach dem Hinzufügen aufgerufen werden sollte. Wenn `true`, wird der `listener` automatisch entfernt, wenn er aufgerufen wird. Wenn nicht angegeben, wird der Standardwert `false` verwendet.
    - `passive` {{optional_inline}}
      - : Ein boolean-Wert, der, wenn `true`, angibt, dass die durch den `listener` spezifizierte Funktion niemals [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen wird. Wenn ein passiver Listener `preventDefault()` aufruft, passiert nichts, und es kann eine Konsolenwarnung generiert werden.

        Wenn diese Option nicht angegeben ist, ist der Standardwert `false` – außer dass in anderen Browsern als Safari der Standardwert für [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignisse `true` ist. Siehe [Verwendung von passiven Listeners](#verwendung_von_passiven_listeners), um mehr zu erfahren.

    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Der Listener wird entfernt, wenn die [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des [`AbortController`](/de/docs/Web/API/AbortController), welches das `AbortSignal` besitzt, aufgerufen wird. Wenn nicht angegeben, wird kein `AbortSignal` mit dem Listener verknüpft.

- `useCapture` {{optional_inline}}
  - : Ein boolean-Wert, der angibt, ob Ereignisse dieses Typs an den registrierten `listener` _bevor_ sie an ein darunter liegendes `EventTarget` im DOM-Baum gesendet werden, gesendet werden. Ereignisse, die nach oben durch den Baum dringen, lösen keinen Listener aus, der zum Capture verwendet werden soll. Event-Bubbling und -Capturing sind zwei Möglichkeiten zur Ereignisverarbeitung, die auftreten, wenn ein Ereignis in einem verschachtelten Element ausgelöst wird, in dem beide Elemente einen Handler für dieses Ereignis registriert haben. Der Event-Propagation-Modus bestimmt die Reihenfolge, in der Elemente das Ereignis empfangen. Siehe [die DOM-Spezifikation](https://dom.spec.whatwg.org/#introduction-to-dom-events) und [JavaScript-Ereignisreihenfolge](https://www.quirksmode.org/js/events_order.html#link4) für eine detaillierte Erklärung. Wenn nicht angegeben, ist der Standardwert für `useCapture` `false`.

    > [!NOTE]
    > Für Ereignis-Listener, die am Ereignisziel angebracht sind, befindet sich das Ereignis in der Zielphase und nicht in den Phasen Capturing und Bubbling.
    > Ereignis-Listener in der _Capturing_-Phase werden vor den Ereignis-Listenern in der Ziel- und Bubbling-Phase aufgerufen.

- `wantsUntrusted` {{optional_inline}} {{non-standard_inline}}
  - : Ein Firefox (Gecko)-spezifischer Parameter. Wenn `true`, erhält der Listener synthetische Ereignisse, die durch Web-Inhalte ausgelöst werden (der Standard ist `false` für Browser-{{Glossary("chrome", "chrome")}} und `true` für reguläre Webseiten). Dieser Parameter ist nützlich für Code, der in Add-ons sowie im Browser selbst gefunden wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Verwendungshinweise

### Der Ereignislistener-Callback

Der Ereignis-Listener kann entweder als Callback-Funktion oder als ein Objekt angegeben werden, dessen `handleEvent()`-Methode als Callback-Funktion dient.

Die Callback-Funktion selbst hat dieselben Parameter und denselben Rückgabewert wie die `handleEvent()`-Methode; d.h. der Callback akzeptiert einen einzigen Parameter: ein auf [`Event`](/de/docs/Web/API/Event) basierendes Objekt, das das aufgetretene Ereignis beschreibt, und gibt nichts zurück.

Beispielsweise könnte ein Callback für den Ereignis-Handler, der sowohl [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) als auch [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) verarbeiten kann, so aussehen:

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

Es ist oft wünschenswert, auf das Element zuzugreifen, auf dem der Ereignis-Handler ausgelöst wurde, z.B. bei Verwendung eines generischen Handlers für eine Gruppe ähnlicher Elemente.

Wenn Sie eine Handler-Funktion mit `addEventListener()` einem Element hinzufügen, ist der Wert von {{jsxref("Operators/this","this")}} innerhalb des Handlers ein Verweis auf das Element. Es wird derselbe sein wie der Wert der `currentTarget`-Eigenschaft des Ereignisarguments, das an den Handler übergeben wird.

```js
myElement.addEventListener("click", function (e) {
  console.log(this.className); // logs the className of myElement
  console.log(e.currentTarget === this); // logs `true`
});
```

Zur Erinnerung: [Pfeilfunktionen haben keinen eigenen `this`-Kontext](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

```js
myElement.addEventListener("click", (e) => {
  console.log(this.className); // WARNING: `this` is not `myElement`
  console.log(e.currentTarget === this); // logs `false`
});
```

Wenn ein Ereignis-Handler (z.B. [`onclick`](/de/docs/Web/API/Element/click_event)) in der HTML-Quelle auf einem Element spezifiziert wird, wird der JavaScript-Code im Attributwert effektiv in einer Handler-Funktion eingeschlossen, die den Wert von `this` konsistent mit `addEventListener()` bindet; ein Vorkommen von `this` innerhalb des Codes stellt einen Verweis auf das Element dar.

```html
<table id="my-table" onclick="console.log(this.id);">
  <!-- `this` refers to the table; logs 'my-table' -->
  …
</table>
```

Beachten Sie, dass der Wert von `this` innerhalb einer Funktion, die _vom_ Code im Attributwert aufgerufen wird, sich gemäß [Standardregeln](/de/docs/Web/JavaScript/Reference/Operators/this) verhält. Dies wird im folgenden Beispiel gezeigt:

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

Der Wert von `this` innerhalb von `logID()` ist ein Verweis auf das globale
Objekt [`Window`](/de/docs/Web/API/Window) (oder `undefined`, im Fall des [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)).

#### "this" mit bind() spezifizieren

Die Methode {{jsxref("Function.prototype.bind()")}} ermöglicht es Ihnen, einen festen
`this`-Kontext für alle nachfolgenden Aufrufe zu definieren — um Probleme zu umgehen, bei denen unklar ist, was `this` sein wird, abhängig davon, aus welchem Kontext Ihre Funktion aufgerufen wurde. Beachten Sie jedoch, dass Sie einen Verweis auf den Listener behalten müssen, damit Sie ihn später entfernen können.

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

Eine weitere Lösung besteht darin, eine spezielle Funktion namens `handleEvent()` zu verwenden, um
Ereignisse abzufangen:

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

Eine andere Möglichkeit, den Verweis auf `this` zu handhaben, ist die Verwendung einer Pfeilfunktion, die keinen eigenen `this`-Kontext erstellt.

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

### Daten in einen und aus einem Ereignis-Listener bekommen

Ereignis-Listener nehmen nur ein Argument entgegen,
ein [`Event`](/de/docs/Web/API/Event) oder eine Unterklasse von `Event`,
die automatisch an den Listener übergeben wird, und der Rückgabewert wird ignoriert.
Daher, um Daten in einen und aus einem Ereignis-Listener zu bekommen, müssen Sie anstelle des Übergangs von Daten durch Parameter und Rückgabewerte [Closures](/de/docs/Web/JavaScript/Guide/Closures) erstellen.

Die Funktionen, die als Ereignis-Listener übergeben werden, haben Zugriff auf alle Variablen, die in den äußeren Bereichen der Funktion deklariert sind, die die Funktion enthält.

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

Lesen Sie [den Funktionsleitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_scopes_and_closures) für mehr Informationen über Funktionsbereiche.

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

Im ersten obigen Fall wird bei jeder Iteration der Schleife eine neue (anonyme) Handler-Funktion erstellt. Im zweiten Fall wird die gleiche zuvor deklarierte Funktion als Ereignis-Handler verwendet, was zu einem geringeren Speicherverbrauch führt, da nur eine Handler-Funktion erstellt wird. Darüber hinaus ist es im ersten Fall nicht möglich, [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) aufzurufen, da kein Verweis auf die anonyme Funktion behalten wird (oder hier, nicht behalten wird für eine der mehreren anonymen Funktionen, die die Schleife erstellen könnte). Im zweiten Fall ist es möglich, `myElement.removeEventListener("click", processEvent, false)` zu verwenden, da `processEvent` der Funktionsverweis ist.

Tatsächlich ist im Hinblick auf den Speicherverbrauch das Nichtbehalten eines Funktionsverweises nicht das eigentliche Problem; vielmehr ist es das Nichtbehalten eines _statischen_ Funktionsverweises.

### Verwendung von passiven Listeners

Wenn ein Ereignis eine Standardaktion hat — zum Beispiel ein [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, das den Container standardmäßig scrollt — ist der Browser im Allgemeinen nicht in der Lage, die Standardaktion zu starten, bis der Ereignis-Listener fertig ist, da er nicht im Voraus weiß, ob der Ereignis-Listener die Standardaktion durch Aufruf von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen könnte. Wenn der Ereignis-Listener zu lange braucht, um fertig zu werden, kann dies zu einer spürbaren Verzögerung führen, auch bekannt als {{Glossary("jank", "Jank")}}, bevor die Standardaktion ausgeführt werden kann.

Indem die `passive`-Option auf `true` gesetzt wird, erklärt ein Ereignis-Listener, dass er die Standardaktion nicht abbrechen wird, sodass der Browser die Standardaktion sofort starten kann, ohne auf das Ende des Listeners zu warten. Wenn der Listener dann [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, hat dies keine Wirkung.

Die Spezifikation für `addEventListener()` definiert den Standardwert für die `passive`-Option als immer `false`. Allerdings haben moderne Browser den Standardwert der `passive`-Option auf `true` geändert für die [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignisse auf den Dokumentebenen-Knoten [`Window`](/de/docs/Web/API/Window), [`Document`](/de/docs/Web/API/Document) und [`Document.body`](/de/docs/Web/API/Document/body). Das verhindert, dass der Ereignis-Listener [das Ereignis abbrechen](/de/docs/Web/API/Event/preventDefault) kann, sodass das Rendern der Seite beim Scrollen des Benutzers nicht blockiert wird.

Deshalb, wenn Sie dieses Verhalten übersteuern möchten und sicherstellen möchten, dass die `passive`-Option `false` ist, müssen Sie die Option explizit auf `false` setzen (anstatt sich auf den Standardwert zu verlassen).

Sie müssen sich keine Sorgen über den Wert von `passive` für das grundlegende [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis machen.
Da es nicht abgebrochen werden kann, können Ereignis-Listener das Rendern der Seite ohnehin nicht blockieren.

Siehe [Verbesserung der Scroll-Leistung durch passive Listeners](#verbesserung_der_scroll-leistung_durch_passive_listeners) für ein Beispiel, das den Effekt von passiven Listeners zeigt.

## Beispiele

### Einen einfachen Listener hinzufügen

Dieses Beispiel demonstriert, wie `addEventListener()` verwendet wird, um auf Mausklicks auf ein Element zu lauschen.

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

In diesem Code ist `modifyText()` ein Listener für `click`-Ereignisse, der mit `addEventListener()` registriert wurde. Ein Klick irgendwo in der Tabelle "bubbelt" bis zum Handler und ruft `modifyText()` auf.

#### Ergebnis

{{EmbedLiveSample('Add_a_simple_listener')}}

### Einen abbruchbaren Listener hinzufügen

Dieses Beispiel zeigt, wie man einen `addEventListener()`-Aufruf hinzufügt, der mit einem [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgebrochen werden kann.

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

Im obigen Beispiel modifizieren wir den Code aus dem vorherigen Beispiel so, dass nachdem der Inhalt der zweiten Zeile zu "three" geändert wurde, wir `abort()` vom [`AbortController`](/de/docs/Web/API/AbortController) aufrufen, den wir dem `addEventListener()`-Aufruf übergeben haben. Das führt dazu, dass der Wert für immer "three" bleibt, da wir keinen Code mehr haben, der auf ein Klickereignis lauscht.

#### Ergebnis

{{EmbedLiveSample('Add_an_abortable_listener')}}

### Ereignis-Listener mit anonymer Funktion

Hier schauen wir, wie man eine anonyme Funktion verwendet, um Parameter in den
Ereignis-Listener zu übergeben.

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

Beachten Sie, dass der Listener eine anonyme Funktion ist, die Code kapselt, der wiederum in der Lage ist, Parameter an die `modifyText()`-Funktion zu übergeben, die für die Reaktion auf das Ereignis verantwortlich ist.

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_anonymous_function')}}

### Ereignis-Listener mit einer Pfeilfunktion

Dieses Beispiel zeigt einen Ereignis-Listener, der mit der Notation für Pfeilfunktionen
implementiert wird.

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

Bitte beachten Sie, dass anonyme und Pfeilfunktionen zwar ähnlich sind, jedoch unterschiedliche
`this`-Bindings haben. Während anonyme (und alle traditionellen JavaScript-Funktionen)
ihre eigenen `this`-Bindings erstellen, erben Pfeilfunktionen das
`this`-Binding der umgebenden Funktion.

Das bedeutet, dass Variablen und Konstanten, die der umgebenden Funktion zur Verfügung stehen,
auch dem Ereignis-Handler zur Verfügung stehen, wenn man eine Pfeilfunktion verwendet.

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

Klicken Sie die äußeren, mittleren, inneren Container jeweils an, um zu sehen, wie die Optionen funktionieren.

{{ EmbedLiveSample('Example_of_options_usage', 600, 630) }}

### Ereignis-Listener mit mehreren Optionen

Sie können mehr als eine der Optionen im `options`-Parameter setzen. Im folgenden Beispiel setzen wir zwei Optionen:

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

### Verbesserung der Scroll-Leistung durch passive Listeners

Das folgende Beispiel zeigt den Effekt der Einstellung von `passive`. Es enthält ein {{htmlelement("div")}}, das einige Texte und ein Kontrollkästchen enthält.

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

Der Code fügt dem Container-Ereignis [`wheel`](/de/docs/Web/API/Element/wheel_event) einen Listener hinzu, der standardmäßig den Container scrollt. Der Listener führt eine lang andauernde Operation aus. Zunächst wird der Listener mit der `passive`-Option hinzugefügt, und immer wenn das Kontrollkästchen umgeschaltet wird, wird die `passive`-Option umgeschaltet.

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

Der Effekt ist, dass:

- Zunächst ist der Listener passiv, sodass der Versuch, den Container mit dem Rad zu scrollen, sofort erfolgt.
- Wenn Sie "passive" deaktivieren und versuchen, den Container mit dem Rad zu scrollen, gibt es eine spürbare Verzögerung, bevor der Container scrollt, da der Browser warten muss, bis der lang andauernde Listener beendet ist.

{{EmbedLiveSample("Improving scroll performance using passive listeners", 100, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)
- [Erstellen und Auslösen benutzerdefinierter Ereignisse](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events)
- [Weitere Details zur Verwendung von `this` in Event-Handlern](https://www.quirksmode.org/js/this.html)

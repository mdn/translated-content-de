---
title: "EventTarget: Methode addEventListener()"
short-title: addEventListener()
slug: Web/API/EventTarget/addEventListener
l10n:
  sourceCommit: efddd42ccc637de8980c29864da204953308dd09
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`addEventListener()`**-Methode der [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle richtet eine Funktion ein, die immer dann aufgerufen wird, wenn das angegebene Ereignis an das Ziel zugestellt wird.

Häufige Ziele sind [`Element`](/de/docs/Web/API/Element) oder dessen Kinder, [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window), aber das Ziel kann jedes Objekt sein, das Ereignisse unterstützt (wie z.B. [`IDBRequest`](/de/docs/Web/API/IDBRequest)).

> [!NOTE]
> Die `addEventListener()`-Methode ist der _empfohlene_ Weg, um einen Ereignis-Listener zu registrieren. Die Vorteile sind wie folgt:
>
> - Sie ermöglicht das Hinzufügen von mehr als einem Handler für ein Ereignis. Dies ist besonders
>   nützlich für Bibliotheken, JavaScript-Module oder jede andere Art von
>   Code, der gut mit anderen Bibliotheken oder Erweiterungen funktionieren muss.
> - Im Gegensatz zur Verwendung einer `onXYZ`-Eigenschaft bietet sie eine feinere Kontrolle darüber, in welcher Phase der Listener aktiviert wird (Erfassung vs. Blasen).
> - Sie funktioniert bei jedem Ereignisziel, nicht nur bei HTML- oder SVG-Elementen.

Die Methode `addEventListener()` funktioniert, indem sie eine Funktion oder ein Objekt, das eine `handleEvent()`-Funktion implementiert, zur Liste der Ereignis-Listener für den angegebenen Ereignistyp auf dem [`EventTarget`](/de/docs/Web/API/EventTarget), auf dem sie aufgerufen wird, hinzufügt. Wenn die Funktion oder das Objekt bereits in der Liste der Ereignis-Listener für dieses Ziel vorhanden ist, wird die Funktion oder das Objekt nicht ein zweites Mal hinzugefügt.

> [!NOTE]
> Wenn eine bestimmte anonyme Funktion in der Liste der für ein bestimmtes Ziel registrierten Ereignis-Listener enthalten ist und später im Code eine identische anonyme Funktion in einem `addEventListener`-Aufruf übergeben wird, wird die zweite Funktion _ebenfalls_ zur Liste der Ereignis-Listener für dieses Ziel hinzugefügt.
>
> Tatsächlich sind anonyme Funktionen nicht identisch, auch wenn sie mit
> demselben unveränderten Quellcode wiederholt definiert werden, **sogar in einer Schleife**.
>
> Wiederholt dieselbe unbenannte Funktion in solchen Fällen zu definieren, kann
> problematisch sein. (Siehe [Speicherprobleme](#speicherprobleme) unten.)

Wenn ein Ereignis-Listener während der Verarbeitung des Ereignisses zu einem [`EventTarget`](/de/docs/Web/API/EventTarget) hinzugefügt wird - das heißt innerhalb eines anderen Listeners - wird das Ereignis den neuen Listener nicht auslösen. Der neue Listener kann jedoch während einer späteren Phase des Ereignisflusses ausgelöst werden, z. B. während der Blasenphase.

## Syntax

```js-nolint
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

### Parameter

- `type`
  - : Ein Groß- und Kleinschreibung berücksichtigender String, der den zu hörenden [Ereignistyp](/de/docs/Web/Events) darstellt.
- `listener`
  - : Das Objekt, das eine Benachrichtigung erhält (ein Objekt, das die [`Event`](/de/docs/Web/API/Event)-Schnittstelle implementiert), wenn ein Ereignis des angegebenen Typs auftritt. Dies muss `null`, ein Objekt mit einer `handleEvent()`-Methode oder eine JavaScript-[Funktion](/de/docs/Web/JavaScript/Guide/Functions) sein. Siehe [Der Callback des Ereignis-Listeners](#der_callback_des_ereignis-listeners) für Details zum Callback selbst.
- `options` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften über den Ereignis-Listener angibt. Die verfügbaren Optionen sind:

    - `capture` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass Ereignisse dieses Typs an die registrierte `listener` gesendet werden, bevor sie an ein darunterliegendes `EventTarget` im DOM-Baum gesendet werden. Wenn nicht angegeben, ist der Standardwert `false`.
    - `once` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass der `listener` höchstens einmal nach dem Hinzufügen aufgerufen werden sollte. Wenn `true`, wird der `listener` automatisch entfernt, wenn er aufgerufen wird. Wenn nicht angegeben, ist der Standardwert `false`.
    - `passive` {{optional_inline}}

      - : Ein boolescher Wert, der, falls `true`, angibt, dass die vom `listener` angegebene Funktion niemals [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen wird. Wenn ein passiver Listener `preventDefault()` aufruft, wird nichts passieren und es kann eine Konsolenwarnung generiert werden.

        Wenn diese Option nicht angegeben wird, ist der Standardwert `false` – außer in anderen Browsern als Safari, wo der Standardwert für [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event) Ereignisse auf Dokument-Ebene `true` ist. Siehe [Verwendung passiver Listener](#verwendung_passiver_listener) für mehr Informationen.

    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Der Listener wird entfernt, wenn die `abort()`-Methode des angegebenen `AbortSignal`-Objekts aufgerufen wird. Wenn nicht angegeben, ist kein `AbortSignal` mit dem Listener verknüpft.

- `useCapture` {{optional_inline}}

  - : Ein boolescher Wert, der angibt, ob Ereignisse dieses Typs gesendet werden, um den registrierten `listener` _bevor_ er an ein darunterliegendes `EventTarget` im DOM-Baum gesendet wird. Ereignisse, die den Baum nach oben durchlaufen, lösen keinen Listener aus, der für die Verwendung von Erfassung bestimmt ist. Ereignis-Blasen und Erfassung sind zwei Methoden der Ereignisausbreitung, die in einem Element auftreten, das in ein anderes Element eingebettet ist, wenn beide Elemente einen Handler für dieses Ereignis registriert haben. Der Modus der Ereignisausbreitung bestimmt die Reihenfolge, in der die Elemente das Ereignis erhalten. Siehe [DOM Level 3 Events](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow) und [JavaScript-Ereignisreihenfolge](https://www.quirksmode.org/js/events_order.html#link4) für eine detaillierte Erklärung. Wenn nicht angegeben, ist der Standardwert von `useCapture` `false`.

    > [!NOTE]
    > Für Ereignis-Listener, die an das Ereignisziel angehängt sind, befindet sich das Ereignis in der Zielphase, anstatt in den Erfassungs- und Blasenphasen.
    > Ereignis-Listener in der _Erfassungs_ Phase werden vor Ereignis-Listenern in den Ziel- und Blasenphasen aufgerufen.

- `wantsUntrusted` {{optional_inline}} {{non-standard_inline}}
  - : Ein Firefox (Gecko)-spezifischer Parameter. Wenn `true`, erhält der Listener synthetische Ereignisse von Webinhalten (der Standardwert ist `false` für die Browser-[chrome](/de/docs/Glossary/chrome) und `true` für reguläre Webseiten). Dieser Parameter ist nützlich für Code in Add-ons sowie im Browser selbst.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Anwendungshinweise

### Der Callback des Ereignis-Listeners

Der Ereignis-Listener kann entweder als Callback-Funktion oder als Objekt angegeben werden, dessen `handleEvent()`-Methode als Callback-Funktion dient.

Die Callback-Funktion selbst hat die gleichen Parameter und den gleichen Rückgabewert wie die `handleEvent()`-Methode; das heißt, der Callback akzeptiert einen einzelnen Parameter: ein auf [`Event`](/de/docs/Web/API/Event) basierendes Objekt, das das aufgetretene Ereignis beschreibt, und es gibt nichts zurück.

Zum Beispiel könnte ein Event-Handler-Callback, der sowohl [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) als auch [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) behandeln kann, so aussehen:

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

Es ist oft wünschenswert, auf das Element zu verweisen, auf dem der Ereignis-Handler ausgelöst wurde, z.B. wenn ein generischer Handler für eine Gruppe ähnlicher Elemente verwendet wird.

Wenn eine Handler-Funktion einem Element mit `addEventListener()` hinzugefügt wird, ist der Wert von {{jsxref("Operators/this","this")}} innerhalb des Handlers ein Verweis auf das Element. Es wird derselbe Wert wie die `currentTarget`-Eigenschaft des Ereignis-Arguments, das an den Handler übergeben wird.

```js
my_element.addEventListener("click", function (e) {
  console.log(this.className); // logs the className of my_element
  console.log(e.currentTarget === this); // logs `true`
});
```

Zur Erinnerung: [Pfeilfunktionen haben keinen eigenen `this`-Kontext](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

```js
my_element.addEventListener("click", (e) => {
  console.log(this.className); // WARNING: `this` is not `my_element`
  console.log(e.currentTarget === this); // logs `false`
});
```

Wenn ein Ereignis-Handler (z.B. [`onclick`](/de/docs/Web/API/Element/click_event)) auf einem Element im HTML-Quellcode angegeben wird, wird der JavaScript-Code im Attributwert effektiv in einer Handler-Funktion umschlossen, die den Wert von `this` in einer Weise bindet, die mit `addEventListener()` konsistent ist; ein Vorkommen von `this` im Code stellt einen Verweis auf das Element dar.

```html
<table id="my_table" onclick="console.log(this.id);">
  <!-- `this` refers to the table; logs 'my_table' -->
  …
</table>
```

Beachten Sie, dass der Wert von `this` innerhalb einer Funktion, _die vom_ Code im Attributwert aufgerufen wird, sich gemäß den [Standardregeln](/de/docs/Web/JavaScript/Reference/Operators/this) verhält. Dies wird im folgenden Beispiel gezeigt:

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

Der Wert von `this` innerhalb von `logID()` ist ein Verweis auf das globale Objekt [`Window`](/de/docs/Web/API/Window) (oder `undefined` im Fall des [strengen Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)).

#### "this" mit bind() festlegen

Die Methode {{jsxref("Function.prototype.bind()")}} ermöglicht es Ihnen, einen festen `this`-Kontext für alle nachfolgenden Aufrufe zu etablieren — wodurch Probleme umgangen werden, bei denen unklar ist, was `this` sein wird, abhängig vom Kontext, aus dem Ihre Funktion aufgerufen wurde. Beachten Sie jedoch, dass Sie einen Verweis auf den Listener speichern müssen, damit Sie ihn später entfernen können.

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

Eine weitere Lösung ist die Verwendung einer speziellen Funktion namens `handleEvent()`, um alle Ereignisse abzufangen:

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

Eine andere Möglichkeit, den Verweis auf `this` zu handhaben, ist die Verwendung einer Pfeilfunktion, die keinen separaten `this`-Kontext erstellt.

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

### Daten in einen und aus einem Ereignis-Listener übertragen

Ereignis-Listener nehmen nur ein Argument an, ein [`Event`](/de/docs/Web/API/Event) oder eine Unterklasse von `Event`, das automatisch an den Listener übergeben wird, und der Rückgabewert wird ignoriert. Daher müssen Sie, um Daten in einen und aus einem Ereignis-Listener zu übertragen, [Closures](/de/docs/Web/JavaScript/Closures) erstellen, anstatt die Daten durch Parameter und Rückgabewerte zu übergeben.

Die als Event-Listener übergebenen Funktionen haben Zugriff auf alle in den äußeren Bereichen deklarierten Variablen, die die Funktion umschließen.

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

Lesen Sie den [Funktionsleitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_scope) für weitere Informationen über Funktionsbereiche.

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

Im ersten Fall oben wird mit jeder Iteration der Schleife eine neue (anonyme) Handlerfunktion erstellt. Im zweiten Fall wird dieselbe vorher deklarierte Funktion als Ereignis-Handler verwendet, was zu einem geringeren Speicherverbrauch führt, da nur eine Handler-Funktion erstellt wird. Zudem ist es im ersten Fall nicht möglich, [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) aufzurufen, da kein Verweis auf die anonyme Funktion gespeichert wird (oder hier auf keine der möglicherweise durch die Schleife erstellten anonymen Funktionen). Im zweiten Fall ist es möglich, `myElement.removeEventListener("click", processEvent, false)` auszuführen, da `processEvent` der Funktionsverweis ist.

Bezüglich des Speicherverbrauchs ist eigentlich nicht das Fehlen eines Funktionsverweises das reale Problem, sondern das Fehlen eines _statischen_ Funktionsverweises.

### Verwendung passiver Listener

Wenn ein Ereignis eine Standardaktion hat — z.B. ein [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, das standardmäßig den Container scrollt — ist der Browser im Allgemeinen nicht in der Lage, die Standardaktion zu starten, bis der Ereignis-Listener beendet ist, da er nicht im Voraus weiß, ob der Ereignis-Listener die Standardaktion durch Aufruf von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen könnte. Wenn der Ereignis-Listener zu lange benötigt, um ausgeführt zu werden, kann dies zu einer spürbaren Verzögerung führen, auch bekannt als [Jank](/de/docs/Glossary/jank), bevor die Standardaktion ausgeführt werden kann.

Durch das Setzen der `passive`-Option auf `true` erklärt ein Ereignis-Listener, dass er die Standardaktion nicht abbrechen wird, sodass der Browser die Standardaktion sofort starten kann, ohne darauf zu warten, dass der Listener fertig ist. Wenn der Listener dann [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, hat dies keine Auswirkungen.

Die Spezifikation für `addEventListener()` definiert den Standardwert für die `passive`-Option immer als `false`. Um jedoch die Scroll-Leistungsverbesserungen durch passive Listener im Legacy-Code zu realisieren, haben moderne Browser den Standardwert der `passive`-Option für die [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event) Ereignisse auf den Dokument-Ebene-Knoten [`Window`](/de/docs/Web/API/Window), [`Document`](/de/docs/Web/API/Document) und [`Document.body`](/de/docs/Web/API/Document/body) geändert. Das verhindert, dass der Ereignis-Listener das [Ereignis abbricht](/de/docs/Web/API/Event/preventDefault), sodass er das Seitenrendering während des Scrolling des Benutzers nicht blockieren kann.

Deshalb, wenn Sie dieses Verhalten überschreiben und sicherstellen möchten, dass die `passive`-Option `false` ist, müssen Sie die Option explizit auf `false` setzen (anstatt sich auf den Standardwert zu verlassen).

Sie müssen sich keine Sorgen über den Wert von `passive` für das grundlegende [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis machen. Da es nicht abgebrochen werden kann, können Ereignis-Listener das Seitenrendering nicht blockieren.

Siehe [Verbesserung der Scroll-Leistung durch passive Listener](#verbesserung_der_scroll-leistung_durch_passive_listener) für ein Beispiel, das die Wirkung passiver Listener zeigt.

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

In diesem Code ist `modifyText()` ein Listener für `click`-Ereignisse, der mit `addEventListener()` registriert wurde. Ein Klick irgendwo in der Tabelle wird an den Handler weitergeleitet und führt `modifyText()` aus.

#### Ergebnis

{{EmbedLiveSample('Add_a_simple_listener')}}

### Abbrechbaren Listener hinzufügen

Dieses Beispiel zeigt, wie ein `addEventListener()` hinzugefügt wird, das mit einem [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgebrochen werden kann.

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

Im obigen Beispiel modifizieren wir den Code aus dem vorherigen Beispiel so, dass nach dem Ändern des Inhalts der zweiten Zeile auf "drei" `abort()` vom [`AbortController`](/de/docs/Web/API/AbortController) aufgerufen wird, den wir an den `addEventListener()`-Aufruf übergeben haben. Das führt dazu, dass der Wert für immer "drei" bleibt, da wir keinen Code mehr haben, der auf ein Klick-Ereignis hört.

#### Ergebnis

{{EmbedLiveSample('Add_an_abortable_listener')}}

### Ereignis-Listener mit anonymer Funktion

Hier werden wir uns ansehen, wie eine anonyme Funktion verwendet wird, um Parameter an den Ereignis-Listener zu übergeben.

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

Beachten Sie, dass der Listener eine anonyme Funktion ist, die Code kapselt, der dann wiederum Parameter an die `modifyText()`-Funktion senden kann, die für die eigentliche Reaktion auf das Ereignis verantwortlich ist.

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_anonymous_function')}}

### Ereignis-Listener mit einer Pfeilfunktion

Dieses Beispiel zeigt einen einfachen Ereignis-Listener, der mit Notation der Pfeilfunktion implementiert ist.

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

Bitte beachten Sie, dass, während anonyme und Pfeilfunktionen ähnlich sind, sie unterschiedliche `this`-Bindings haben. Während anonyme (und alle traditionellen JavaScript-Funktionen) ihre eigenen `this`-Bindings erstellen, erben Pfeilfunktionen das `this`-Binding der enthaltenden Funktion.

Das bedeutet, dass die Variablen und Konstanten, die der enthaltenden Funktion zur Verfügung stehen, auch dem Ereignis-Handler zur Verfügung stehen, wenn eine Pfeilfunktion verwendet wird.

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

Klicken Sie nacheinander auf die äußeren, mittleren, inneren Container, um zu sehen, wie die Optionen funktionieren.

{{EmbedLiveSample('Example_of_options_usage', 600, 630)}}

### Ereignis-Listener mit mehreren Optionen

Sie können mehr als eine der Optionen im `options`-Parameter einstellen. Im folgenden Beispiel setzen wir zwei Optionen:

- `passive`, um zu bestätigen, dass der Handler nicht [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen wird.
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

Das folgende Beispiel zeigt den Effekt der Einstellung von `passive`. Es enthält ein {{htmlelement("div")}}, das etwas Text und ein Kontrollkästchen enthält.

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

Der Code fügt einen Listener für das `wheel`-Ereignis des Containers hinzu, das standardmäßig den Container scrollt. Der Listener führt eine langlaufende Operation aus. Zunächst wird der Listener mit der `passive`-Option hinzugefügt, und wann immer das Kontrollkästchen umgeschaltet wird, schaltet der Code die `passive`-Option um.

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

- Zunächst ist der Listener passiv, daher erfolgt das Scrollen des Containers mit dem Rad sofort.
- Wenn Sie "passive" deaktivieren und versuchen, den Container mit dem Rad zu scrollen, gibt es eine spürbare Verzögerung, bevor der Container scrollt, da der Browser warten muss, bis der langlaufende Listener beendet ist.

{{EmbedLiveSample("Improving scroll performance using passive listeners", 100, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)
- [Erstellen und Auslösen benutzerdefinierter Ereignisse](/de/docs/Web/Events/Creating_and_triggering_events)
- [Mehr Details zur Verwendung von `this` in Ereignis-Handlern](https://www.quirksmode.org/js/this.html)

---
title: "EventTarget: Methode addEventListener()"
short-title: addEventListener()
slug: Web/API/EventTarget/addEventListener
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`addEventListener()`**-Methode der [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle
richtet eine Funktion ein, die immer dann aufgerufen wird, wenn das angegebene Ereignis an das Ziel geliefert wird.

Gemeinsame Ziele sind [`Element`](/de/docs/Web/API/Element), oder dessen Kinder, [`Document`](/de/docs/Web/API/Document), und [`Window`](/de/docs/Web/API/Window),
aber das Ziel kann jedes Objekt sein, das Ereignisse unterstützt (z. B. [`IDBRequest`](/de/docs/Web/API/IDBRequest)).

> [!NOTE]
> Die `addEventListener()`-Methode ist die _empfohlene_ Art, einen Ereignis-Listener zu registrieren. Die Vorteile sind wie folgt:
>
> - Sie ermöglicht das Hinzufügen von mehr als einem Handler für ein Ereignis. Dies ist besonders
>   nützlich für Bibliotheken, JavaScript-Module oder jede andere Art
>   von Code, der gut mit anderen Bibliotheken oder Erweiterungen funktionieren muss.
> - Im Gegensatz zur Verwendung einer `onXYZ`-Eigenschaft bietet sie eine feinere Steuerung der Phase, in der der Listener aktiviert wird (Erfassen vs. Bubble-Prozess).
> - Sie funktioniert auf jedem Ereignisziel, nicht nur auf HTML- oder SVG-Elementen.

Die Methode `addEventListener()` funktioniert, indem sie eine Funktion, oder ein Objekt, das eine `handleEvent()`-Funktion implementiert, zur Liste der Ereignis-Listener für den angegebenen Ereignistyp hinzufügt
auf dem [`EventTarget`](/de/docs/Web/API/EventTarget), auf dem sie aufgerufen wurde. Wenn die Funktion oder das Objekt bereits in der Liste der Ereignis-Listener für dieses Ziel enthalten ist, wird die Funktion oder das Objekt nicht ein zweites Mal hinzugefügt.

> [!NOTE]
> Wenn eine bestimmte anonyme Funktion in die Liste der Ereignis-Listener, die für ein bestimmtes Ziel registriert sind, aufgenommen wird und dann später im Code eine identische anonyme Funktion in einem `addEventListener`-Aufruf übergeben wird, wird die zweite Funktion _auch_ zur Liste der Ereignis-Listener für dieses Ziel hinzugefügt.
>
> In der Tat sind anonyme Funktionen nicht identisch, selbst wenn sie mit
> demselben unveränderten Quellcode wiederholt definiert werden, **selbst in einer Schleife**.
>
> Die wiederholte Definition derselben unbenannten Funktion in solchen Fällen kann
> problematisch sein. (Siehe [Speicherprobleme](#speicherprobleme) unten.)

Wenn ein Ereignis-Listener zu einem [`EventTarget`](/de/docs/Web/API/EventTarget) aus einem anderen Listener heraus hinzugefügt wird –
d.h. während der Verarbeitung des Ereignisses –
wird dieses Ereignis den neuen Listener nicht auslösen.
Der neue Listener kann jedoch in einer späteren Phase des Ereignisflusses ausgelöst werden,
beispielsweise während der Bubble-Phase.

## Syntax

```js-nolint
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

### Parameter

- `type`
  - : Ein groß- und kleinschreibungssensitiver String, der den [Ereignistyp](/de/docs/Web/API/Document_Object_Model/Events) repräsentiert, für den Sie zuhören möchten.
- `listener`
  - : Das Objekt, das eine Benachrichtigung empfängt (ein Objekt, das die
    [`Event`](/de/docs/Web/API/Event)-Schnittstelle implementiert), wenn ein Ereignis des angegebenen Typs eintritt. Dies muss
    `null` sein, ein Objekt mit einer `handleEvent()`-Methode oder eine JavaScript
    [Funktion](/de/docs/Web/JavaScript/Guide/Functions). Siehe
    [Der Callback des Ereignis-Listeners](#der_callback_des_ereignis-listeners) für Details zum Callback selbst.
- `options` {{optional_inline}}
  - : Ein Objekt, das Eigenschaften über den Ereignis-Listener spezifiziert. Die verfügbaren
    Optionen sind:
    - `capture` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass Ereignisse dieses Typs an den registrierten `listener` gesendet werden, bevor sie an ein anderes
        `EventTarget` unterhalb davon im DOM-Baum gesendet werden. Wenn nicht angegeben, ist der Standardwert `false`.
    - `once` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass der `listener`
        höchstens einmal nach dem Hinzufügen aufgerufen werden soll. Wenn `true`, wird der
        `listener` automatisch entfernt, wenn er aufgerufen wird. Wenn nicht angegeben, ist der Standardwert `false`.
    - `passive` {{optional_inline}}
      - : Ein boolescher Wert, der, wenn `true`, anzeigt, dass die von `listener` angegebene Funktion niemals [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft. Wenn ein passiver Listener `preventDefault()` aufruft, passiert nichts und eine Konsolen-Warnung kann generiert werden.

        Wenn diese Option nicht angegeben ist, ist der Standardwert `false` – außer in Browsern außerhalb von Safari, wo der Standardwert `true` für [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event) Ereignisse ist. Siehe [Verwendung passiver Listener](#verwendung_von_passiven_listenern), um mehr zu erfahren.

    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Der Listener wird entfernt, wenn die [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des [`AbortController`](/de/docs/Web/API/AbortController), das das `AbortSignal` besitzt, aufgerufen wird. Wenn nicht angegeben, ist kein `AbortSignal` mit dem Listener verknüpft.

- `useCapture` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob Ereignisse dieses Typs an den
    registrierten `listener` _vor_ dem Senden an
    jedes `EventTarget` unterhalb davon im DOM-Baum gesendet werden. Ereignisse, die im Baum aufwärts wandern, lösen keinen Listener aus, der für die Verwendung von Capture festgelegt ist. Ereignis
    -Bubble- und -Capture sind zwei Möglichkeiten der Ereignisübertragung, die auftreten, wenn ein Ereignis in einem Element ausgelöst wird, das in ein anderes Element eingebettet ist, wenn beide Elemente eine Behandlung für dieses Ereignis registriert haben. Der Ereignisübertragungsmodus bestimmt die Reihenfolge, in der Elemente das Ereignis empfangen. Siehe [die DOM-Spezifikation](https://dom.spec.whatwg.org/#introduction-to-dom-events) und [JavaScript-Ereignisreihenfolge](https://www.quirksmode.org/js/events_order.html#link4) für eine detaillierte Erklärung.
    Wenn nicht angegeben, ist `useCapture` standardmäßig `false`.

    > [!NOTE]
    > Für Ereignis-Listener, die am Ereignisziel angehängt sind, befindet sich das Ereignis in der Zielphase, nicht in den Capture- und Bubble-Phasen.
    > Ereignis-Listener in der _Capture_-Phase werden vor den Listenern in den Ziel- und Bubble-Phasen aufgerufen.

- `wantsUntrusted` {{optional_inline}} {{non-standard_inline}}
  - : Ein Firefox (Gecko)-spezifischer Parameter. Wenn `true`, empfängt der Listener
    synthetische Ereignisse, die von Webinhalten gesendet werden (der Standard ist `false` für
    Browser [chrome](/de/docs/Glossary/Chrome) und `true` für reguläre Webseiten). Dieser
    Parameter ist nützlich für Code, der in Add-Ons sowie im Browser selbst zu finden ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Verwendungshinweise

### Der Callback des Ereignis-Listeners

Der Ereignis-Listener kann entweder als Callback-Funktion oder
als Objekt, dessen Methode `handleEvent()` als Callback-Funktion dient, angegeben werden.

Die Callback-Funktion selbst hat dieselben Parameter und denselben Rückgabewert wie die
`handleEvent()`-Methode; das heißt, der Callback akzeptiert einen einzelnen Parameter: ein
Objekt basierend auf [`Event`](/de/docs/Web/API/Event), das das aufgetretene Ereignis beschreibt, und es
gibt nichts zurück.

Zum Beispiel könnte ein Ereignishandler-Callback, der sowohl [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) als auch
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

### Der Wert von "this" innerhalb des Handlers

Es ist oft wünschenswert, das Element zu referenzieren, auf dem der Ereignishandler ausgelöst wurde,
wie zum Beispiel, wenn ein generischer Handler für eine Reihe ähnlicher Elemente verwendet wird.

Wenn Sie eine Handler-Funktion an ein Element mit `addEventListener()` anhängen,
wird der Wert von {{jsxref("Operators/this","this")}} innerhalb des Handlers eine Referenz auf
das Element sein. Es wird derselbe Wert wie die `currentTarget`-Eigenschaft des
Ereignisarguments sein, das an den Handler übergeben wird.

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

Wenn ein Ereignishandler (zum Beispiel, [`onclick`](/de/docs/Web/API/Element/click_event)) auf einem Element im HTML-Quellcode angegeben wird, wird der JavaScript-Code im Attributwert effektiv in einer Handler-Funktion umschlossen, die den Wert von `this` in einer Weise bindet, die mit `addEventListener()` konsistent ist; ein Vorkommen von `this` innerhalb des Codes stellt eine Referenz auf das Element dar.

```html
<table id="my_table" onclick="console.log(this.id);">
  <!-- `this` refers to the table; logs 'my_table' -->
  …
</table>
```

Beachten Sie, dass der Wert von `this` innerhalb einer Funktion, _aufgerufen durch_ den Code
im Attributwert, sich gemäß [den Standardregeln](/de/docs/Web/JavaScript/Reference/Operators/this) verhält. Dies wird
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
Objekt [`Window`](/de/docs/Web/API/Window) (oder `undefined` im Fall von [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)).

#### Angabe von "this" mit bind()

Die Methode {{jsxref("Function.prototype.bind()")}} ermöglicht es Ihnen, einen festen
`this`-Kontext für alle nachfolgenden Aufrufe festzulegen – wodurch Probleme umgangen werden, bei denen unklar ist, was `this` sein wird, abhängig vom
Kontext, aus dem Ihre Funktion aufgerufen wurde. Beachten Sie jedoch, dass Sie
einen Verweis auf den Listener behalten müssen, damit Sie ihn später entfernen können.

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

Eine weitere Lösung ist die Verwendung einer speziellen Funktion namens `handleEvent()`, um
alle Ereignisse zu erfassen:

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

### Daten in und aus einem Ereignis-Listener laden

Ereignis-Listener nehmen nur ein Argument entgegen,
ein [`Event`](/de/docs/Web/API/Event) oder eine Unterklasse von `Event`,
das automatisch an den Listener übergeben wird, und der Rückgabewert wird ignoriert.
Daher müssen Sie, um Daten in einen Ereignis-Listener hinein und hinaus zu bekommen, anstelle die Daten durch Parameter und Rückgabewerte zu übergeben, [Closures](/de/docs/Web/JavaScript/Guide/Closures) erstellen.

Die als Ereignis-Listener übergebenen Funktionen haben Zugriff auf alle im äußeren
Scopes enthaltenen Variablen, die die Funktion umgeben.

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

Im oben gezeigten ersten Fall wird mit jeder Iteration der Schleife eine neue (anonyme) Handler-Funktion erstellt. Im zweiten Fall wird die gleiche zuvor deklarierte Funktion als Ereignis-Handler verwendet, was zu einem geringeren Speicherverbrauch führt, da nur eine Handler-Funktion erstellt wird. Zudem ist es im ersten Fall nicht möglich, [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) aufzurufen, da kein Verweis auf die anonyme Funktion gespeichert (oder hier nicht auf eine der mehreren anonymen Funktionen, die die Schleife erstellen könnte) wird. Im zweiten Fall ist es möglich, `myElement.removeEventListener("click", processEvent, false)` zu tun, da `processEvent` der Funktionsverweis ist.

Tatsächlich ist in Bezug auf den Speicherverbrauch das Fehlen eines Funktionsverweises nicht das
eigentliche Problem, sondern das Fehlen eines _statischen_ Funktionsverweises.

### Verwendung von passiven Listenern

Wenn ein Ereignis eine Standardaktion hat — zum Beispiel ein [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, das standardmäßig das Fenster oder den Container scrollt — ist der Browser im Allgemeinen nicht in der Lage, die Standardaktion zu starten, bis der Ereignis-Listener abgeschlossen ist, da er im Voraus nicht weiß, ob der Ereignis-Listener möglicherweise die Standardaktion durch den Aufruf von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) annulliert. Wenn der Ereignis-Listener zu lange zur Ausführung benötigt, kann dies eine merkliche Verzögerung, auch als {{Glossary("jank", "Jank")}} bekannt, verursachen, bevor die Standardaktion ausgeführt werden kann.

Indem Sie die `passive`-Option auf `true` setzen, erklärt ein Ereignis-Listener, dass er die Standardaktion nicht abbrechen wird, sodass der Browser die Standardaktion sofort starten kann, ohne auf das Ende des Listeners zu warten. Wenn der Listener dann doch [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, hat das keine Wirkung.

Die Spezifikation für `addEventListener()` legt den Standardwert für die `passive`-Option fest, der immer `false` ist. Um jedoch die Leistungen der Scroll-Geschwindigkeit von passiven Listeners im Legacy-Code zu realisieren, haben moderne Browser den Standardwert der `passive`-Option zu `true` geändert für die [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event) Ereignisse auf Dokument-Lebensniveausknoten [`Window`](/de/docs/Web/API/Window), [`Document`](/de/docs/Web/API/Document), und [`Document.body`](/de/docs/Web/API/Document/body). Das verhindert, dass der Ereignis-Listener [das Ereignis abbricht](/de/docs/Web/API/Event/preventDefault), sodass er das Seitenerrendering nicht blockieren kann, während der Benutzer scrollt.

Aufgrund dessen, wenn Sie dieses Verhalten überschreiben möchten und sicherstellen möchten, dass die `passive`-Option `false` ist, müssen Sie die Option explizit auf `false` setzen (anstatt sich auf den Standardwert zu verlassen).

Sie müssen sich keine Sorgen über den Wert von `passive` für das grundlegende [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis machen.
Da es nicht abgebrochen werden kann, können Ereignis-Listener das Seitenerrendering nicht blockieren.

Sehen Sie [Scroll-Leistungsverbesserung durch passive Listener](#scroll-leistungsverbesserung_durch_passive_listener) für ein Beispiel, das die Wirkung von passiven Listenern zeigt.

## Beispiele

### Einfache Zuweisung eines Listeners

Dieses Beispiel zeigt, wie man `addEventListener()` verwendet, um auf Mausklicks auf einem Element zu lauschen.

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
el.addEventListener("click", modifyText);
```

In diesem Code ist `modifyText()` ein Listener für `click`-Ereignisse,
der mit `addEventListener()` registriert wurde. Ein Klick irgendwo auf der Tabelle wechselt
hoch zum Handler und ruft `modifyText()` auf.

#### Ergebnis

{{EmbedLiveSample('Add_a_simple_listener')}}

### Hinzufügen eines abbrechbaren Listeners

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

Im obigen Beispiel ändern wir den Code im vorherigen Beispiel so, dass nachdem sich der Inhalt der zweiten Zeile zu "three" ändert, wir `abort()` vom [`AbortController`](/de/docs/Web/API/AbortController) aufrufen, den wir an den `addEventListener()`-Aufruf übergeben haben. Dadurch bleibt der Wert auf "three" für immer, weil wir keinen Code mehr haben, der auf ein Klickevent lauscht.

#### Ergebnis

{{EmbedLiveSample('Add_an_abortable_listener')}}

### Ereignis-Listener mit anonymer Funktion

Hier schauen wir uns an, wie man eine anonyme Funktion verwendet, um Parameter in den
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
el.addEventListener("click", function () {
  modifyText("four");
});
```

Beachten Sie, dass der Listener eine anonyme Funktion ist, die Code umschließt, der dann wiederum in der Lage ist, Parameter an die `modifyText()`-Funktion zu senden, die für die eigentliche Reaktion auf das Ereignis verantwortlich ist.

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_anonymous_function')}}

### Ereignis-Listener mit einer Pfeilfunktion

Dieses Beispiel zeigt einen Ereignis-Listener, der mit einer Pfeilfunktionsnotation implementiert ist.

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
el.addEventListener("click", () => {
  modifyText("four");
});
```

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_an_arrow_function')}}

Bitte beachten Sie, dass anonyme und Pfeilfunktionen zwar ähnlich sind, sie jedoch unterschiedliche
`this`-Bindungen aufweisen. Während anonyme (und alle traditionellen JavaScript-Funktionen)
ihre eigenen `this`-Bindungen erstellen, erben Pfeilfunktionen die
`this`-Bindung der umgebenden Funktion.

Das bedeutet, dass die Variablen und Konstanten, die der umgebenden Funktion verfügbar sind,
auch der Ereignis-Listener zur Verfügung stehen, wenn eine Pfeilfunktion verwendet wird.

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

Klicken Sie jeweils auf die äußeren, mittleren, inneren Container, um zu sehen, wie die Optionen funktionieren.

{{ EmbedLiveSample('Example_of_options_usage', 600, 630) }}

### Ereignis-Listener mit mehreren Optionen

Sie können mehr als eine der Optionen im `options`-Parameter setzen. Im folgenden Beispiel setzen wir zwei Optionen:

- `passive`, um zu bestätigen, dass der Handler [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) nicht aufrufen wird
- `once`, um sicherzustellen, dass der Ereignishandler nur einmal aufgerufen wird.

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

### Scroll-Leistungsverbesserung durch passive Listener

Das folgende Beispiel zeigt die Wirkung der Einstellung von `passive`. Es enthält ein {{htmlelement("div")}}, das etwas Text enthält, und ein Kontrollkästchen.

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

Der Code fügt dem [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis des Containers, das standardmäßig den Container scrollt, einen Listener hinzu. Der Listener führt einen langlaufenden Vorgang aus. Anfangs wird der Listener mit der `passive`-Option hinzugefügt und wann auch immer der Checkbox umgeschaltet wird, wechselt der Code die `passive`-Option.

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

- Anfangs ist der Listener passiv, sodass das Scrollen des Containers mit dem Rad sofort ist.
- Wenn Sie "passive" deaktivieren und versuchen, den Container mit dem Rad zu scrollen, gibt es eine wahrnehmbare Verzögerung bevor der Container scrollt, weil der Browser warten muss, bis der langlaufende Listener fertig ist.

{{EmbedLiveSample("Improving scroll performance using passive listeners", 100, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)
- [Erstellen und Senden von benutzerdefinierten Ereignissen](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events)
- [Mehr Details zur Verwendung von `this` in Ereignis-Handlern](https://www.quirksmode.org/js/this.html)

---
title: "EventTarget: Methode addEventListener()"
short-title: addEventListener()
slug: Web/API/EventTarget/addEventListener
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die Methode **`addEventListener()`** des [`EventTarget`](/de/docs/Web/API/EventTarget)-Interfaces
richtet eine Funktion ein, die immer dann aufgerufen wird, wenn das spezifizierte Ereignis an das Ziel ausgeliefert wird.

Häufige Ziele sind [`Element`](/de/docs/Web/API/Element) oder dessen Kinder, [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window),
aber das Ziel kann jedes Objekt sein, das Ereignisse unterstützt (wie zum Beispiel [`IDBRequest`](/de/docs/Web/API/IDBRequest)).

> [!NOTE]
> Die Methode `addEventListener()` ist die _empfohlene_ Methode, um einen Ereignis-Listener zu registrieren. Die Vorteile sind wie folgt:
>
> - Sie erlaubt das Hinzufügen von mehr als einem Handler für ein Ereignis. Dies ist besonders
>   nützlich für Bibliotheken, JavaScript-Module oder jede andere Art von
>   Code, der gut mit anderen Bibliotheken oder Erweiterungen zusammenarbeiten muss.
> - Im Gegensatz zur Verwendung einer `onXYZ`-Eigenschaft bietet sie eine feinere Kontrolle darüber, in welcher Phase der Listener aktiviert wird (Erfassung vs. Bubbling).
> - Sie funktioniert bei jedem Ereignisziel, nicht nur bei HTML- oder SVG-Elementen.

Die Methode `addEventListener()` funktioniert, indem sie eine Funktion oder ein Objekt, das eine `handleEvent()`-Funktion implementiert, zur Liste der Ereignislistener für den angegebenen Ereignistyp auf dem aufgerufenen [`EventTarget`](/de/docs/Web/API/EventTarget) hinzufügt. Wenn die Funktion oder das Objekt bereits in der Liste der Ereignislistener für dieses Ziel ist, wird die Funktion oder das Objekt nicht ein zweites Mal hinzugefügt.

> [!NOTE]
> Wenn eine bestimmte anonyme Funktion in der Liste der für ein bestimmtes Ziel registrierten Ereignislistener enthalten ist und dann später im Code eine identische anonyme Funktion in einem `addEventListener`-Aufruf angegeben wird, wird die zweite Funktion _auch_ in die Liste der Ereignislistener für dieses Ziel aufgenommen.
>
> In der Tat sind anonyme Funktionen nicht identisch, selbst wenn sie
> mit demselben unveränderten Quellcode wiederholt definiert werden, **selbst wenn in einer Schleife**.
>
> Das wiederholte Definieren derselben unbenannten Funktion in solchen Fällen kann problematisch sein. (Siehe [Speicherprobleme](#speicherprobleme) unten.)

Wenn ein Ereignis-Listener von einem [`EventTarget`](/de/docs/Web/API/EventTarget) aus einem anderen Listener hinzugefügt wird —
das heißt, während der Verarbeitung des Ereignisses —
wird dieses Ereignis den neuen Listener nicht auslösen.
Der neue Listener kann jedoch in einer späteren Phase des Ereignisflussses ausgelöst werden,
wie zum Beispiel während der Bubbling-Phase.

## Syntax

```js-nolint
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

### Parameter

- `type`
  - : Ein Groß-/Kleinschreibung empfindlicher String, der den [Ereignistyp](/de/docs/Web/API/Document_Object_Model/Events) repräsentiert, auf den gehört werden soll.
- `listener`
  - : Das Objekt, das eine Benachrichtigung erhält (ein Objekt, das das
    [`Event`](/de/docs/Web/API/Event)-Interface implementiert), wenn ein Ereignis des angegebenen Typs eintritt. Dies muss
    `null`, ein Objekt mit einer `handleEvent()`-Methode oder eine JavaScript-
    [Funktion](/de/docs/Web/JavaScript/Guide/Functions) sein. Siehe
    [Der Event-Listener-Callback](#der_event-listener-callback) für Details zum Callback selbst.
- `options` {{optional_inline}}
  - : Ein Objekt, das Eigenschaften des Ereignislisteners angibt. Die verfügbaren
    Optionen sind:
    - `capture` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob Ereignisse dieses Typs an den registrierten `listener` gesendet werden, bevor sie an ein anderes
        `EventTarget` darunter im DOM-Baum gesendet werden. Wenn nicht angegeben, ist der Standardwert `false`.
    - `once` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass der `listener`
        höchstens einmal aufgerufen werden soll, nachdem er hinzugefügt wurde. Wenn `true`, wird der
        `listener` automatisch entfernt, wenn er aufgerufen wird. Wenn nicht angegeben, ist der Standardwert `false`.
    - `passive` {{optional_inline}}
      - : Ein boolescher Wert, der, wenn `true`, angibt, dass die durch `listener` angegebene Funktion niemals [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen wird. Wenn ein passiver Listener `preventDefault()` aufruft, passiert nichts und es kann eine Konsolenwarnung erzeugt werden.

        Wenn diese Option nicht angegeben ist, beträgt der Standardwert `false` – außer, dass in Browsern, die nicht Safari sind, der Standardwert für [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event) Ereignisse `true` ist. Siehe [Verwendung passiver Listener](#verwendung_passiver_listener), um mehr zu erfahren.

    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Der Listener wird entfernt, wenn die Methode [`abort()`](/de/docs/Web/API/AbortController/abort) des [`AbortController`](/de/docs/Web/API/AbortController), die das `AbortSignal` besitzt, aufgerufen wird. Wenn nicht angegeben, wird kein `AbortSignal` mit dem Listener verknüpft.

- `useCapture` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob Ereignisse dieses Typs an den
    registrierten `listener` _vor_ gesendet werden, bevor sie an ein anderes
    `EventTarget` darunter im DOM-Baum gesendet werden. Ereignisse, die sich im Baum nach oben ausbreiten, lösen keinen Listener aus, der zur Verwendung von Capturing bestimmt ist. Ereignis
    Bubbling und Capturing sind zwei Wege, Ereignisse zu verbreiten, die in einem Element auftreten,
    das in ein anderes Element verschachtelt ist, wenn beide Elemente einen Handler für
    dieses Ereignis registriert haben. Der Ereignisverbreitungsmodus bestimmt die Reihenfolge, in der Elemente
    das Ereignis empfangen. Siehe [die DOM-Spezifikation](https://dom.spec.whatwg.org/#introduction-to-dom-events) und [JavaScript-Ereignisreihenfolge](https://www.quirksmode.org/js/events_order.html#link4) für eine detaillierte Erklärung.
    Wenn nicht angegeben, ist der Standardwert von `useCapture` `false`.

    > [!NOTE]
    > Für an das Ereignisziel angehängte Ereignislistener befindet sich das Ereignis in der Zielphase und nicht in den Capturing- und Bubbling-Phasen.
    > Ereignislistener in der _Capturing_-Phase werden vor Ereignislistenern in der Ziel- und Bubbling-Phase aufgerufen.

- `wantsUntrusted` {{optional_inline}} {{non-standard_inline}}
  - : Ein Firefox (Gecko)-spezifischer Parameter. Wenn `true`, empfängt der Listener
    synthetische Ereignisse, die von Webinhalten gesendet werden (der Standardwert ist `false` für
    den Browser {{Glossary("chrome", "chrome")}} und `true` für reguläre Webseiten). Dieser
    Parameter ist nützlich für Code, der in Add-ons sowie im Browser selbst gefunden wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Nutzungsnotizen

### Der Event-Listener-Callback

Der Event-Listener kann entweder als Callback-Funktion oder
als ein Objekt angegeben werden, dessen `handleEvent()`-Methode als Callback-Funktion dient.

Die Callback-Funktion selbst hat dieselben Parameter und Rückgabewert wie die
`handleEvent()`-Methode; das heißt, der Callback akzeptiert einen einzigen Parameter: ein
Objekt basierend auf [`Event`](/de/docs/Web/API/Event), das das aufgetretene Ereignis beschreibt, und gibt
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
zum Beispiel wenn ein generischer Handler für eine Reihe ähnlicher Elemente verwendet wird.

Wenn Sie eine Handlerfunktion mit `addEventListener()` an ein Element anhängen,
wird der Wert von {{jsxref("this")}} im Handler ein Verweis auf
das Element sein. Es wird der gleiche Wert wie die `currentTarget`-Eigenschaft des
Ereignisarguments sein, das an den Handler übergeben wird.

```js
myElement.addEventListener("click", function (e) {
  console.log(this.className); // logs the className of myElement
  console.log(e.currentTarget === this); // logs `true`
});
```

Zur Erinnerung: [Arrow-Funktionen haben keinen eigenen `this` Kontext](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

```js
myElement.addEventListener("click", (e) => {
  console.log(this.className); // WARNING: `this` is not `myElement`
  console.log(e.currentTarget === this); // logs `false`
});
```

Wenn ein Event-Handler (zum Beispiel [`onclick`](/de/docs/Web/API/Element/click_event)) auf ein Element im HTML-Quellcode festgelegt ist, wird der JavaScript-Code im Attributwert effektiv in einer Handlerfunktion umschlossen, die den Wert von `this` auf eine Art und Weise bindet, die mit `addEventListener()` konsistent ist; ein Vorkommen von `this` innerhalb des Codes stellt einen Verweis auf das Element dar.

```html
<table id="my-table" onclick="console.log(this.id);">
  <!-- `this` refers to the table; logs 'my-table' -->
  …
</table>
```

Beachten Sie, dass der Wert von `this` innerhalb einer Funktion, die _vom_ Code im Attributwert aufgerufen wird, sich gemäß den [Standardregeln](/de/docs/Web/JavaScript/Reference/Operators/this) verhält. Dies wird im folgenden Beispiel gezeigt:

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
Objekt [`Window`](/de/docs/Web/API/Window) (oder `undefined` im Fall von [Strict-Mode](/de/docs/Web/JavaScript/Reference/Strict_mode).

#### Festlegen von "this" mit bind()

Die Methode {{jsxref("Function.prototype.bind()")}} ermöglicht es Ihnen, einen festen
`this` Kontext für alle nachfolgenden Aufrufe zu bestimmen – um Probleme zu umgehen, bei denen unklar ist, was `this` ist, abhängig vom
Kontext, aus dem Ihre Funktion aufgerufen wurde. Beachten Sie jedoch, dass Sie einen
Verweis auf den Listener behalten müssen, damit Sie ihn später wieder entfernen können.

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

Eine andere Lösung ist die Verwendung einer speziellen Funktion, die `handleEvent()` genannt wird, um
alle Ereignisse abzufangen:

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

Eine weitere Möglichkeit, den Verweis auf `this` zu handhaben, ist die Verwendung einer Arrow-Funktion, die keinen separaten `this` Kontext erstellt.

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

### Daten in einen und aus einem Event-Listener bringen

Event-Listener akzeptieren nur ein Argument,
ein [`Event`](/de/docs/Web/API/Event) oder eine Unterklasse von `Event`,
die automatisch an den Listener übergeben wird, und der Rückgabewert wird ignoriert.
Um daher Daten in einen und aus einem Event-Listener zu übergeben, anstatt die Daten durch Parameter und Rückgabewerte zu übergeben, müssen Sie [Closures](/de/docs/Web/JavaScript/Guide/Closures) erstellen.

Die als Event-Listener übergebenen Funktionen haben Zugriff auf alle Variablen, die in den äußeren Bereichen, die die Funktion enthalten, deklariert sind.

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
Iteration der Schleife eine neue (anonyme) Handler-Funktion erstellt. Im zweiten Fall wird dieselbe zuvor deklarierte Funktion als Ereignis-Handler verwendet,
was zu einem geringeren Speicherverbrauch führt, da nur eine
Handler-Funktion erstellt wird. Darüber hinaus ist es im ersten Fall nicht möglich,
[`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) aufzurufen, da keine
Referenz auf die anonyme Funktion gespeichert wird (oder hier nicht auf eine der
mehreren anonymen Funktionen, die die Schleife erstellen könnte). Im zweiten Fall ist es möglich, `myElement.removeEventListener("click", processEvent, false)` zu tun, weil `processEvent` die Funktionsreferenz ist.

Tatsächlich ist im Hinblick auf den Speicherverbrauch das Fehlen einer Funktionsreferenz nicht
das eigentliche Problem; vielmehr ist es das Fehlen einer _statischen_ Funktionsreferenz.

### Verwendung passiver Listener

Wenn ein Ereignis eine Standardaktion hat — zum Beispiel ein [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, das standardmäßig den Container scrollt — kann der Browser im Allgemeinen die Standardaktion nicht starten, bis der Event-Listener abgeschlossen ist, weil er nicht im Voraus weiß, ob der Event-Listener die Standardaktion durch Aufrufen von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) möglicherweise abbrechen wird. Wenn die Ausführung des Event-Listeners zu lange dauert, kann dies zu einer merklichen Verzögerung führen, die auch als {{Glossary("jank", "Jank")}} bekannt ist, bevor die Standardaktion ausgeführt werden kann.

Durch Setzen der `passive`-Option auf `true` erklärt ein Event-Listener, dass er die Standardaktion nicht abbrechen wird, sodass der Browser die Standardaktion sofort starten kann, ohne auf das Ende des Listeners zu warten. Wenn der Listener danach [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, hat dies keinen Effekt.

Die Spezifikation für `addEventListener()` definiert den Standardwert für die `passive`-Option als immer `false`. Um jedoch die Scroll-Leistungsverbesserungen passiver Listener im Legacy-Code zu realisieren, haben moderne Browser den Standardwert der `passive`-Option auf `true` für die [`wheel`](/de/docs/Web/API/Element/wheel_event)-, [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event) -, [`touchstart`](/de/docs/Web/API/Element/touchstart_event) - und [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignisse auf der Dokument-Knoten-Ebene [`Window`](/de/docs/Web/API/Window), [`Document`](/de/docs/Web/API/Document) und [`Document.body`](/de/docs/Web/API/Document/body) geändert. Dadurch wird verhindert, dass der Event-Listener das Ereignis [abbrechen](/de/docs/Web/API/Event/preventDefault) kann, sodass es die Seitenanzeige nicht blockieren kann, während der Benutzer scrollt.

Daher müssen Sie, wenn Sie dieses Verhalten überschreiben möchten und sicherstellen möchten, dass die `passive`-Option `false` ist, diese Option ausdrücklich auf `false` setzen (anstatt sich auf den Standardwert zu verlassen).

Sie müssen sich keine Sorgen über den Wert von `passive` für das grundlegende [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis machen.
Da es nicht abgebrochen werden kann, können Event-Listener die Seitenanzeige ohnehin nicht blockieren.

Siehe [Scroll-Leistung verbessern mit passiven Listenern](#scroll-leistung_verbessern_mit_passiven_listenern) für ein Beispiel, das die Wirkung passiver Listener zeigt.

## Beispiele

### Einfachen Listener hinzufügen

Dieses Beispiel zeigt, wie `addEventListener()` verwendet wird, um auf Mausklicks auf ein Element
zu achten.

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

In diesem Code ist `modifyText()` ein Listener für `click`-Ereignisse,
der mit `addEventListener()` registriert wird. Ein Klick irgendwo in der Tabelle wird durch den Handler nach oben gebubbelt und führt `modifyText()` aus.

#### Ergebnis

{{EmbedLiveSample('Add_a_simple_listener')}}

### Einen abbrechbaren Listener hinzufügen

Dieses Beispiel demonstriert, wie man einen `addEventListener()` hinzufügt, der mit einem [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgebrochen werden kann.

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

Im obigen Beispiel ändern wir den Code aus dem vorherigen Beispiel so, dass, nachdem der Inhalt der zweiten Zeile in "drei" geändert wird, die Methode `abort()` des [`AbortController`](/de/docs/Web/API/AbortController) aufgerufen wird, die wir dem `addEventListener()`-Aufruf übergeben haben. Dadurch bleibt der Wert für immer auf "drei", da wir keinen Code mehr haben, der auf ein Klick-Ereignis hört.

#### Ergebnis

{{EmbedLiveSample('Add_an_abortable_listener')}}

### Event-Listener mit anonymer Funktion

Hier werden wir uns ansehen, wie man eine anonyme Funktion verwendet, um Parameter in den Event-Listener zu übergeben.

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

Beachten Sie, dass der Listener eine anonyme Funktion ist, die Code umschließt, der dann wiederum in der Lage ist, Parameter an die `modifyText()`-Funktion zu senden, die dafür verantwortlich ist, tatsächlich auf das Ereignis zu reagieren.

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_anonymous_function')}}

### Event-Listener mit einer Arrow-Funktion

Dieses Beispiel demonstriert einen Event-Listener, der mit Notation einer Arrow-Funktion implementiert wird.

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

Bitte beachten Sie, dass anonyme Funktionen und Arrow-Funktionen zwar ähnlich sind, sie jedoch unterschiedliche
`this`-Bindings haben. Während anonyme (und alle traditionellen JavaScript-Funktionen)
ihre eigenen `this`-Bindings erstellen, erben Arrow-Funktionen das
`this`-Binding der umgebenden Funktion.

Das bedeutet, dass die Variablen und Konstanten, die für die umgebende Funktion verfügbar sind,
auch für den Event-Handler verfügbar sind, wenn eine Arrow-Funktion verwendet wird.

### Beispiel für die Nutzung von Optionen

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

### Event-Listener mit mehreren Optionen

Sie können mehr als eine der Optionen im `options`-Parameter festlegen. Im folgenden Beispiel setzen wir zwei Optionen:

- `passive`, um zu versichern, dass der Handler nicht [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen wird
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

### Scroll-Leistung verbessern mit passiven Listenern

Das folgende Beispiel zeigt die Wirkung von `passive`. Es enthält ein {{htmlelement("div")}}, das einige Texte enthält, und ein Kontrollkästchen.

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

Der Code fügt dem [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis des Containers einen Listener hinzu, das standardmäßig den Container scrollt. Der Listener führt eine langwierige Operation aus. Der Listener wird zunächst mit der `passive`-Option hinzugefügt, und immer wenn das Kontrollkästchen umgeschaltet wird, wird die `passive`-Option im Code umgeschaltet.

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

Die Wirkung ist folgende:

- Zunächst ist der Listener passiv, sodass der Versuch, den Container mit dem Rad zu scrollen, sofort erfolgt.
- Wenn Sie "passive" deaktivieren und versuchen, den Container mit dem Rad zu scrollen, gibt es eine merkliche Verzögerung, bevor der Container scrollt, da der Browser warten muss, bis der langwierige Listener fertig ist.

{{EmbedLiveSample("Improving scroll performance using passive listeners", 100, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)
- [Erstellen und Senden von benutzerdefinierten Ereignissen](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events)
- [Weitere Details zur Verwendung von `this` in Event-Handlern](https://www.quirksmode.org/js/this.html)

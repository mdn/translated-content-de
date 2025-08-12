---
title: "EventTarget: Methode addEventListener()"
short-title: addEventListener()
slug: Web/API/EventTarget/addEventListener
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`addEventListener()`**-Methode des [`EventTarget`](/de/docs/Web/API/EventTarget)-Interfaces
richtet eine Funktion ein, die immer dann aufgerufen wird, wenn das angegebene Ereignis an das Ziel gesendet wird.

Häufige Ziele sind [`Element`](/de/docs/Web/API/Element) oder dessen Kinder, [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window),
aber das Ziel kann jedes Objekt sein, das Ereignisse unterstützt (wie zum Beispiel [`IDBRequest`](/de/docs/Web/API/IDBRequest)).

> [!NOTE]
> Die Verwendung der `addEventListener()`-Methode wird empfohlen, um einen Ereignis-Listener zu registrieren. Die Vorteile sind wie folgt:
>
> - Es ist möglich, mehr als einen Handler für ein Ereignis hinzuzufügen. Dies ist besonders
>   hilfreich für Bibliotheken, JavaScript-Module oder jede andere Art von
>   Code, der gut mit anderen Bibliotheken oder Erweiterungen zusammenarbeiten muss.
> - Im Gegensatz zur Verwendung einer `onXYZ`-Eigenschaft ermöglicht es Ihnen eine genauere Kontrolle über die Phase, in der der Listener aktiviert wird (Erfassung vs. Blasen).
> - Es funktioniert mit jedem Ereignisziel, nicht nur mit HTML- oder SVG-Elementen.

Die Methode `addEventListener()` funktioniert, indem sie eine Funktion oder ein Objekt, das eine `handleEvent()`-Funktion implementiert, zur Liste der Ereignis-Listener für den angegebenen Ereignistyp hinzufügt,
auf dem [`EventTarget`](/de/docs/Web/API/EventTarget), auf dem sie aufgerufen wird. Wenn die Funktion oder das Objekt bereits in der Liste der Ereignis-Listener für dieses Ziel ist, wird die Funktion oder das Objekt nicht ein zweites Mal hinzugefügt.

> [!NOTE]
> Wenn eine bestimmte anonyme Funktion in der Liste der für ein bestimmtes Ziel registrierten Ereignis-Listener enthalten ist und dann später im Code eine identische anonyme Funktion in einem `addEventListener`-Aufruf angegeben wird, wird die zweite Funktion _auch_ zur Liste der Ereignis-Listener für dieses Ziel hinzugefügt.
>
> Tatsächlich sind anonyme Funktionen selbst dann nicht identisch, wenn sie mit dem _gleichen_ unveränderten Quellcode wiederholt definiert werden, **selbst in einer Schleife**.
>
> Das wiederholte Definieren derselben unbenannten Funktion in solchen Fällen kann problematisch sein. (Siehe [Speicherprobleme](#speicherprobleme) unten.)

Wenn ein Ereignis-Listener von einem anderen Listener aus einem [`EventTarget`](/de/docs/Web/API/EventTarget) hinzugefügt wird — das heißt, während der Bearbeitung des Ereignisses —
wird dieses Ereignis den neuen Listener nicht auslösen.
Der neue Listener kann jedoch während einer späteren Phase des Ereignisflusses ausgelöst werden,
wie zum Beispiel während der Bubbling-Phase.

## Syntax

```js-nolint
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

### Parameter

- `type`
  - : Ein case-sensitiver String, der den [Ereignistyp](/de/docs/Web/API/Document_Object_Model/Events) darstellt, nach dem gelauscht werden soll.
- `listener`
  - : Das Objekt, das eine Benachrichtigung erhält (ein Objekt, das das
    [`Event`](/de/docs/Web/API/Event)-Interface implementiert), wenn ein Ereignis des angegebenen Typs auftritt. Dies muss `null`, ein Objekt mit einer `handleEvent()`-Methode oder eine JavaScript-[Funktion](/de/docs/Web/JavaScript/Guide/Functions) sein. Siehe
    [Der Ereignis-Listener-Rückruf](#der_ereignis-listener-rückruf) für Details über den Rückruf selbst.
- `options` {{optional_inline}}
  - : Ein Objekt, das Eigenschaften über den Ereignis-Listener spezifiziert. Die verfügbaren
    Optionen sind:
    - `capture` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass Ereignisse dieses Typs an den registrierten `listener` gesendet werden, bevor sie an ein
        `EventTarget` weitergeleitet werden, das sich darunter im DOM-Baum befindet. Wird es nicht angegeben, ist der Standardwert `false`.
    - `once` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass der `listener`
        höchstens einmal aufgerufen werden sollte, nachdem er hinzugefügt wurde. Wenn `true`, wird der
        `listener` automatisch entfernt, wenn er aufgerufen wurde. Wird es nicht angegeben, ist der Standardwert `false`.
    - `passive` {{optional_inline}}
      - : Ein boolescher Wert, der, falls `true`, angibt, dass die durch den `listener` angegebene Funktion niemals [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen wird. Falls ein passiver Listener `preventDefault()` aufruft, wird nichts geschehen und möglicherweise eine Warnung in der Konsole generiert.

        Wird diese Option nicht angegeben, ist der Standardwert `false` – außer dass in Browsern außer Safari der Standardwert `true` für [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignisse ist. Siehe [Verwendung passiver Listener](#verwendung_passiver_listener), um mehr zu erfahren.

    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Der Listener wird entfernt, wenn die [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des [`AbortController`](/de/docs/Web/API/AbortController), der den `AbortSignal` besitzt, aufgerufen wird. Wird es nicht angegeben, wird kein `AbortSignal` mit dem Listener verknüpft.

- `useCapture` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob Ereignisse dieses Typs an den
    registrierten `listener` _vor_ der Weiterleitung an ein `EventTarget`,
    das sich darunter im DOM-Baum befindet, gesendet werden. Ereignisse, die nach oben durch den Baum blasen, werden keinen Listener auslösen, der für die Erfassung vorgesehen ist. Die Ereignisausbreitungsmethode bestimmt die Reihenfolge, in der Elemente das Ereignis erhalten. Siehe [die DOM-Spezifikation](https://dom.spec.whatwg.org/#introduction-to-dom-events) und [JavaScript Event order](https://www.quirksmode.org/js/events_order.html#link4) für eine detaillierte Erklärung.
    Wird es nicht angegeben, ist der Standardwert für `useCapture` `false`.

    > [!NOTE]
    > Bei Ereignis-Listenern, die an das Ereignisziel angehängt sind, befindet sich das Ereignis in der Zielphase und nicht in den Erfassungs- und Blasenphasen.
    > Ereignis-Listener in der _Erfassungs_-Phase werden vor den Event-Listenern in den Ziel- und Blasenphasen aufgerufen.

- `wantsUntrusted` {{optional_inline}} {{non-standard_inline}}
  - : Ein Firefox (Gecko)-spezifischer Parameter. Wenn `true`, empfängt der Listener
    synthetische Ereignisse, die von Webinhalten gesendet werden (der Standardwert ist `false` für
    den Browser {{Glossary("chrome", "chrome")}} und `true` für normale Webseiten). Dieser
    Parameter ist nützlich für Code, der in Add-ons sowie im Browser selbst zu finden ist.

### Rückgabewert

Keinen ({{jsxref("undefined")}}).

## Nutzungshinweise

### Der Ereignis-Listener-Rückruf

Der Ereignis-Listener kann entweder als Rückruffunktion oder
als Objekt angegeben werden, dessen `handleEvent()`-Methode als Rückruffunktion dient.

Die Rückruffunktion selbst hat dieselben Parameter und denselben Rückgabewert wie die
`handleEvent()`-Methode; das heißt, der Rückruf akzeptiert einen Parameter: ein
Objekt basierend auf [`Event`](/de/docs/Web/API/Event), das das aufgetretene Ereignis beschreibt, und es
gibt nichts zurück.

Zum Beispiel könnte ein Ereignishandler-Rückruf, der sowohl das
[`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)- als auch das
[`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)-Ereignis bearbeiten kann, folgendermaßen aussehen:

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

Es ist oft wünschenswert, auf das Element zu verweisen, auf dem der Ereignishandler ausgelöst wurde,
beispielsweise bei der Verwendung eines generischen Handlers für eine Gruppe ähnlicher Elemente.

Wenn eine Handler-Funktion mithilfe von `addEventListener()` an ein Element angefügt wird,
ist der Wert von {{jsxref("Operators/this","this")}} innerhalb des Handlers eine Referenz auf
das Element. Es wird derselbe Wert wie die der `currentTarget`-Eigenschaft des
dem Handler übergebenen Ereignisarguments sein.

```js
my_element.addEventListener("click", function (e) {
  console.log(this.className); // logs the className of my_element
  console.log(e.currentTarget === this); // logs `true`
});
```

Zur Erinnerung: [Arrow Functions haben keinen eigenen `this`-Kontext](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

```js
my_element.addEventListener("click", (e) => {
  console.log(this.className); // WARNING: `this` is not `my_element`
  console.log(e.currentTarget === this); // logs `false`
});
```

Wenn ein Ereignishandler (zum Beispiel [`onclick`](/de/docs/Web/API/Element/click_event)) in der HTML-Quelle auf einem Element angegeben ist, wird der JavaScript-Code im Attributwert effektiv in eine Handler-Funktion eingeschlossen, die den Wert von `this` auf eine Weise bindet, die mit der von `addEventListener()` konsistent ist; ein Vorkommen von `this` im Code repräsentiert eine Referenz auf das Element.

```html
<table id="my_table" onclick="console.log(this.id);">
  <!-- `this` refers to the table; logs 'my_table' -->
  …
</table>
```

Beachten Sie, dass der Wert von `this` innerhalb einer Funktion, _die durch_ den Code
im Attributwert aufgerufen wird, gemäß den [Standardregeln](/de/docs/Web/JavaScript/Reference/Operators/this) verhält. Dies wird im folgenden Beispiel gezeigt:

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

#### Festlegen von "this" mit bind()

Die {{jsxref("Function.prototype.bind()")}}-Methode ermöglicht es Ihnen, einen festen
`this`-Kontext für alle nachfolgenden Aufrufe festzulegen — dadurch werden Probleme umgangen, bei denen unklar ist, was `this` sein wird, abhängig von
dem Kontext, aus dem Ihre Funktion aufgerufen wurde. Beachten Sie jedoch, dass Sie
eine Referenz auf den Listener behalten müssen, damit Sie ihn später entfernen können.

Das ist ein Beispiel mit und ohne `bind()`:

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

Eine weitere Möglichkeit, den Bezug zu `this` zu handhaben, besteht darin, eine Arrow Function zu verwenden, die keinen separaten `this`-Kontext erstellt.

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

### Daten in und aus einem Ereignis-Listener bringen

Ereignis-Listener nehmen nur ein Argument,
ein [`Event`](/de/docs/Web/API/Event) oder eine Unterklasse von `Event`,
welches automatisch an den Listener übergeben wird, und der Rückgabewert wird ignoriert.
Um daher Daten in und aus einem Ereignis-Listener zu bekommen, anstatt die Daten durch Parameter und Rückgabewerte zu übergeben, müssen Sie stattdessen [Closures](/de/docs/Web/JavaScript/Guide/Closures) erstellen.

Die als Ereignis-Listener übergebenen Funktionen haben Zugriff auf alle in den äußeren Bereichen deklarierten Variablen, die die Funktion enthalten.

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

Lesen Sie [den Funktionsleitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_scopes_and_closures), um mehr Informationen über Funktionsbereiche zu erhalten.

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

Im obigen ersten Fall wird bei jedem
Durchlauf der Schleife eine neue (anonyme) Handler-Funktion erstellt. Im zweiten Fall wird die gleiche zuvor deklarierte Funktion als Ereignishandler verwendet,
was zu einem geringeren Speicherverbrauch führt, da nur
eine Handler-Funktion erstellt wird. Zudem ist es im ersten Fall nicht möglich,
[`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) aufzurufen, weil keine
Referenz auf die anonyme Funktion behalten wird (oder hier, nicht auf eine der
mehreren anonymen Funktionen, die die Schleife erstellen könnte). Im zweiten Fall ist es möglich,
`myElement.removeEventListener("click", processEvent, false)` zu verwenden,
weil `processEvent` die Funktionsreferenz ist.

Was den Speicherverbrauch betrifft, ist das eigentliche Problem nicht das Fehlen des Beibehalten einer Funktionsreferenz,
sondern vielmehr das Fehlen des Beibehaltens einer _statischen_
Funktionsreferenz.

### Verwendung passiver Listener

Wenn ein Ereignis eine Standardaktion hat — beispielsweise ein [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, das standardmäßig den Container scrollt — ist der Browser im Allgemeinen nicht in der Lage, die Standardaktion zu starten, solange der Ereignis-Listener nicht abgeschlossen ist, da er im Voraus nicht weiß, ob der Ereignis-Listener die Standardaktion durch Aufrufen von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) möglicherweise abbrechen wird. Wenn der Ereignis-Listener zu lange läuft, kann dies zu einer merklichen Verzögerung führen, die auch als {{Glossary("jank", "Ruckeln")}} bekannt ist, bevor die Standardaktion ausgeführt werden kann.

Durch Setzen der `passive`-Option auf `true` erklärt ein Ereignis-Listener, dass er die Standardaktion nicht abbrechen wird, sodass der Browser die Standardaktion sofort starten kann, ohne auf das Ende des Listeners warten zu müssen. Wenn der Listener dann [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, hat dies keine Wirkung.

Die Spezifikation für `addEventListener()` definiert den Standardwert für die `passive`-Option als immer `false`. Um jedoch die Scroll-Leistungsverbesserungen durch passive Listener in Legacy-Code zu realisieren, haben moderne Browser den Standardwert der `passive`-Option für die [`wheel`](/de/docs/Web/API/Element/wheel_event)-, [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event)-, [`touchstart`](/de/docs/Web/API/Element/touchstart_event)- und [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignisse auf den Dokumentebenenknoten [`Window`](/de/docs/Web/API/Window), [`Document`](/de/docs/Web/API/Document) und [`Document.body`](/de/docs/Web/API/Document/body) geändert. Das verhindert, dass der Ereignis-Listener [das Ereignis abbrechen](/de/docs/Web/API/Event/preventDefault) kann, sodass er nicht das Seitenrendering blockieren kann, während der Benutzer scrollt.

Deshalb müssen Sie, wenn Sie dieses Verhalten überschreiben und sicherstellen möchten, dass die `passive`-Option `false` ist, diese Option explizit auf `false` setzen (anstatt sich auf den Standard zu verlassen).

Sie müssen sich keine Sorgen über den Wert von `passive` für das grundlegende [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis machen.
Da es nicht abgebrochen werden kann, können Ereignis-Listener das Seitenrendering ohnehin nicht blockieren.

Siehe [Verbesserung der Scroll-Leistung durch Verwendung passiver Listener](#verbesserung_der_scroll-leistung_durch_verwendung_passiver_listener) für ein Beispiel, das die Wirkung passiver Listener zeigt.

## Beispiele

### Einfachen Listener hinzufügen

Dieses Beispiel demonstriert, wie `addEventListener()` verwendet wird, um auf Mausklicks auf ein Element zu lauschen.

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
der mit `addEventListener()` registriert wurde. Ein Klick irgendwo in der Tabelle bläst
bis zum Handler durch und führt `modifyText()` aus.

#### Ergebnis

{{EmbedLiveSample('Add_a_simple_listener')}}

### Abbrechbaren Listener hinzufügen

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

Im obigen Beispiel ändern wir den Code aus dem vorherigen Beispiel so, dass die Inhalte der zweiten Zeile nach "drei" geändert werden. Wir rufen dann `abort()` aus dem [`AbortController`](/de/docs/Web/API/AbortController) auf, den wir dem `addEventListener()`-Aufruf übergeben haben. Dadurch bleibt der Wert für immer "drei", da wir keine Chiffre mehr haben, die auf ein Klickevent hört.

#### Ergebnis

{{EmbedLiveSample('Add_an_abortable_listener')}}

### Ereignis-Listener mit anonymer Funktion

Hier werden wir uns ansehen, wie eine anonyme Funktion verwendet werden kann, um Parameter in den
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

Beachten Sie, dass der Listener eine anonyme Funktion ist, die den Code einkapselt, der dann
in der Lage ist, Parameter an die `modifyText()`-Funktion zu senden, die
für die eigentliche Bearbeitung des Ereignisses verantwortlich ist.

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_anonymous_function')}}

### Ereignis-Listener mit einer Arrow Function

Dieses Beispiel zeigt einen Ereignis-Listener, der mit Hilfe der Arrow Function
Notation implementiert wurde.

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

Bitte beachten Sie, dass, obwohl anonyme und Arrow Functions ähnlich sind, sie unterschiedliche
`this`-Bindings haben. Während anonyme (und alle traditionellen JavaScript-Funktionen)
ihre eigenen `this`-Bindings erstellen, erben Arrow Functions das
`this`-Binding der umgebenden Funktion.

Das bedeutet, dass die Variablen und Konstanten, die der umgebenden Funktion verfügbar sind,
ebenfalls dem Ereignishandler zur Verfügung stehen, wenn eine Arrow Function verwendet wird.

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

Klicken Sie auf die äußeren, mittleren und inneren Container, um zu sehen, wie die Optionen funktionieren.

{{ EmbedLiveSample('Example_of_options_usage', 600, 630) }}

### Ereignis-Listener mit mehreren Optionen

Sie können mehr als eine der Optionen im `options`-Parameter festlegen. Im folgenden Beispiel legen wir zwei Optionen fest:

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

### Verbesserung der Scroll-Leistung durch Verwendung passiver Listener

Das folgende Beispiel zeigt den Effekt der Einstellung von `passive`. Es enthält ein {{htmlelement("div")}}, das einigen Text und ein Kontrollkästchen enthält.

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

Der Code fügt einen Listener für das [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis des Containers hinzu, das standardmäßig den Container scrollt. Der Listener führt eine langlaufende Operation aus. Zunächst wird der Listener mit der `passive`-Option hinzugefügt, und wann immer das Kontrollkästchen umgeschaltet wird, wird die `passive`-Option umgeschaltet.

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

Der Effekt ist:

- Zunächst ist der Listener passiv, sodass das Scrollen des Containers mit dem Rad sofort erfolgt.
- Wenn Sie "passiv" deaktivieren und versuchen, den Container mit dem Rad zu scrollen, gibt es eine merkliche Verzögerung, bevor der Container scrollt, da der Browser warten muss, bis der langlaufende Listener abgeschlossen ist.

{{EmbedLiveSample("Improving scroll performance using passive listeners", 100, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)
- [Erstellen und Senden von benutzerdefinierten Ereignissen](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events)
- [Weitere Details zur Verwendung von `this` in Ereignishandlern](https://www.quirksmode.org/js/this.html)

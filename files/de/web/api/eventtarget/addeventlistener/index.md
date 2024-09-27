---
title: "EventTarget: Methode addEventListener()"
short-title: addEventListener()
slug: Web/API/EventTarget/addEventListener
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`addEventListener()`**-Methode der [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle richtet eine Funktion ein, die aufgerufen wird, wann immer das angegebene Ereignis an das Ziel übermittelt wird.

Gängige Ziele sind [`Element`](/de/docs/Web/API/Element) oder seine Kinder, [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window), aber das Ziel kann jedes Objekt sein, das Ereignisse unterstützt (wie [`IDBRequest`](/de/docs/Web/API/IDBRequest)).

> [!NOTE]
> Die `addEventListener()`-Methode ist der _empfohlene_ Weg, einen Ereignis-Listener zu registrieren. Die Vorteile sind folgende:
>
> - Sie erlaubt das Hinzufügen von mehr als einem Handler für ein Ereignis. Dies ist besonders nützlich für Bibliotheken, JavaScript-Module oder jede Art von Code, der gut mit anderen Bibliotheken oder Erweiterungen funktionieren muss.
> - Im Gegensatz zur Verwendung einer `onXYZ`-Eigenschaft bietet es eine feinere Kontrolle der Phase, in der der Listener aktiviert wird (Erfassung vs. Bubbling).
> - Sie funktioniert bei jedem Ereignisziel, nicht nur bei HTML- oder SVG-Elementen.

Die Methode `addEventListener()` funktioniert, indem sie eine Funktion oder ein Objekt, das eine `handleEvent()`-Funktion implementiert, zur Liste der Ereignis-Listener für den angegebenen Ereignistyp auf dem [`EventTarget`](/de/docs/Web/API/EventTarget) hinzufügt, auf dem sie aufgerufen wird. Wenn die Funktion oder das Objekt bereits in der Liste der Ereignis-Listener für dieses Ziel ist, wird die Funktion oder das Objekt nicht ein zweites Mal hinzugefügt.

> [!NOTE]
> Wenn eine bestimmte anonyme Funktion in der Liste der für ein bestimmtes Ziel registrierten Ereignis-Listener enthalten ist und später im Code eine identische anonyme Funktion in einem `addEventListener`-Aufruf angegeben wird, wird die zweite Funktion _ebenfalls_ zur Liste der Ereignis-Listener für dieses Ziel hinzugefügt.
>
> Tatsächlich sind anonyme Funktionen nicht identisch, selbst wenn sie mit dem _gleichen_ unveränderten Quellcode wiederholt definiert werden, **sogar in einer Schleife**.
>
> Die gleiche unbenannte Funktion in solchen Fällen wiederholt zu definieren kann problematisch sein. (Siehe [Speicherprobleme](#speicherprobleme) unten.)

Wenn ein Ereignis-Listener innerhalb eines anderen Listeners zu einem [`EventTarget`](/de/docs/Web/API/EventTarget) hinzugefügt wird — also während der Verarbeitung des Ereignisses — löst dieses Ereignis nicht den neuen Listener aus. Der neue Listener kann jedoch in einer späteren Phase des Ereignisflusses ausgelöst werden, wie z.B. während der Bubbling-Phase.

## Syntax

```js-nolint
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

### Parameter

- `type`
  - : Eine groß- und kleinschreibungssensible Zeichenfolge, die den [Ereignistyp](/de/docs/Web/Events) repräsentiert, für den der Listener eingerichtet werden soll.
- `listener`
  - : Das Objekt, das eine Benachrichtigung (ein Objekt, das die [`Event`](/de/docs/Web/API/Event)-Schnittstelle implementiert) erhält, wenn ein Ereignis des angegebenen Typs auftritt. Dies muss `null`, ein Objekt mit einer `handleEvent()`-Methode oder eine JavaScript-[Funktion](/de/docs/Web/JavaScript/Guide/Functions) sein. Siehe [Der Ereignis-Listener Callback](#der_ereignis-listener_callback) für Details zum Callback selbst.
- `options` {{optional_inline}}

  - : Ein Objekt, das Merkmale über den Ereignis-Listener angibt. Die verfügbaren Optionen sind:

    - `capture` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass Ereignisse dieses Typs an den registrierten `listener` gesendet werden, bevor sie an ein `EventTarget` weitergeleitet werden, das sich darunter im DOM-Baum befindet. Wenn nicht angegeben, ist der Standardwert `false`.
    - `once` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass der `listener` höchstens einmal nach Hinzufügen aufgerufen werden soll. Wenn `true`, würde der `listener` automatisch entfernt, sobald er aufgerufen wird. Wenn nicht angegeben, ist der Standardwert `false`.
    - `passive` {{optional_inline}}

      - : Ein boolescher Wert, der, wenn `true`, angibt, dass die durch `listener` angegebene Funktion niemals [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen wird. Wenn ein passiver Listener trotzdem `preventDefault()` aufruft, unternimmt der Benutzeragent nichts, außer eine Konsolenwarnung zu generieren.

        Wenn diese Option nicht angegeben ist, ist der Standardwert `false` – außer dass sie in anderen Browsern als Safari für [`wheel`](/de/docs/Web/API/Element/wheel_event), [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event), [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignisse `true` ist. Siehe [Verwendung passiver Listener](#verwendung_passiver_listener), um mehr zu erfahren.

    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Der Listener wird entfernt, wenn die Methode [`abort()`](/de/docs/Web/API/AbortController/abort) des angegebenen `AbortSignal`-Objekts aufgerufen wird. Wenn nicht angegeben, ist kein `AbortSignal` mit dem Listener verbunden.

- `useCapture` {{optional_inline}}

  - : Ein boolescher Wert, der angibt, ob Ereignisse dieses Typs an den registrierten `listener` _bevor_ an ein `EventTarget` unterhalb im DOM-Baum weitergeleitet werden. Ereignisse, die aufwärts durch den Baum bubblen, lösen keinen Listener aus, der zur Erfassung bestimmt ist. Ereignis-Bubbling und -Erfassung sind zwei Arten, wie Ereignisse, die in einem Element auftreten, das innerhalb eines anderen Elements geschachtelt ist, propagiert werden, wenn beide Elemente einen Handler für dieses Ereignis registriert haben. Der Ereignis-Propagation-Modus bestimmt die Reihenfolge, in der Elemente das Ereignis empfangen. Siehe [DOM Level 3 Events](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow) und [Reihenfolge von JavaScript-Ereignissen](https://www.quirksmode.org/js/events_order.html#link4) für eine ausführliche Erklärung.
    Wenn nicht angegeben, ist der Standardwert von `useCapture` `false`.

    > [!NOTE]
    > Für an das Ereignisziel angehängte Ereignis-Listener ist das Ereignis in der Zielphase, anstatt in den Erfassungs- und Bubbling-Phasen.
    > Ereignis-Listener in der _Erfassungs_-Phase werden vor Ereignis-Listenern in jeder nicht-erfassenden Phase aufgerufen.

- `wantsUntrusted` {{optional_inline}} {{non-standard_inline}}
  - : Ein Firefox (Gecko)-spezifischer Parameter. Wenn `true`, empfängt der Listener synthetische Ereignisse, die vom Webinhalt gesendet werden (der Standard ist `false` für den Browser-[chrome](/de/docs/Glossary/chrome) und `true` für reguläre Webseiten). Dieser Parameter ist nützlich für Code, der in Add-ons und im Browser selbst zu finden ist.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Verwendungshinweise

### Der Ereignis-Listener Callback

Der Ereignis-Listener kann entweder als Callback-Funktion oder als Objekt angegeben werden, dessen `handleEvent()`-Methode als Callback-Funktion dient.

Die Callback-Funktion selbst hat die gleichen Parameter und Rückgabewerte wie die `handleEvent()`-Methode; das heißt, der Callback akzeptiert einen einzigen Parameter: ein Objekt basierend auf [`Event`](/de/docs/Web/API/Event), das das aufgetretene Ereignis beschreibt, und es gibt nichts zurück.

Zum Beispiel könnte ein Ereignishandler-Callback, der sowohl [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) als auch [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) behandeln kann, so aussehen:

```js
function handleEvent(event) {
  if (event.type === "fullscreenchange") {
    /* handle a full screen toggle */
  } else {
    /* handle a full screen toggle error */
  }
}
```

### Sicheres Erkennen von Unterstützungsoptionen

In älteren Versionen der DOM-Spezifikation war der dritte Parameter von `addEventListener()` ein boolescher Wert, der angab, ob Capture verwendet werden soll oder nicht. Im Laufe der Zeit wurde klar, dass mehr Optionen benötigt wurden. Anstatt der Funktion mehr Parameter hinzuzufügen (was die Dinge enorm verkomplizieren würde, wenn man sich mit optionalen Werten beschäftigt), wurde der dritte Parameter in ein Objekt geändert, das verschiedene Eigenschaften enthalten kann, die die Werte von Optionen zur Konfiguration des Prozesses der Entfernung des Ereignis-Listeners definieren.

Da ältere Browser (sowie einige nicht so alte Browser) immer noch annehmen, dass der dritte Parameter ein boolescher Wert ist, müssen Sie Ihren Code so erstellen, dass er dieses Szenario intelligent behandelt. Sie können dies tun, indem Sie eine Feature-Erkennung für jede der Optionen, die Sie interessieren, verwenden.

Zum Beispiel, wenn Sie die `passive`-Option überprüfen möchten:

```js
let passiveSupported = false;

try {
  const options = {
    get passive() {
      // This function will be called when the browser
      // attempts to access the passive property.
      passiveSupported = true;
      return false;
    },
  };

  window.addEventListener("test", null, options);
  window.removeEventListener("test", null, options);
} catch (err) {
  passiveSupported = false;
}
```

Dies erstellt ein `options`-Objekt mit einer Getter-Funktion für die `passive`-Eigenschaft; der Getter setzt eine Flag, `passiveSupported`, auf `true`, wenn er aufgerufen wird. Das bedeutet, dass, wenn der Browser den Wert der `passive`-Eigenschaft auf dem `options`-Objekt überprüft, `passiveSupported` auf `true` gesetzt wird; andernfalls bleibt er `false`. Dann rufen wir `addEventListener()` auf, um einen gefälschten Ereignishandler zu erstellen, der diese Optionen angibt, sodass die Optionen überprüft werden, wenn der Browser ein Objekt als dritten Parameter erkennt. Dann rufen wir [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) auf, um aufzuräumen. Beachten Sie, dass `handleEvent()` bei Ereignis-Listenern ignoriert wird, die nicht aufgerufen werden.

Sie können auf diese Weise überprüfen, ob eine Option unterstützt wird. Fügen Sie einfach einen Getter für diese Option hinzu, wobei Sie Code ähnlich dem oben gezeigten verwenden.

Dann, wenn Sie einen tatsächlichen Ereignis-Listener erstellen möchten, der die betreffenden Optionen verwendet, können Sie etwas wie folgt tun:

```js
someElement.addEventListener(
  "mouseup",
  handleMouseUp,
  passiveSupported ? { passive: true } : false,
);
```

Hier fügen wir einen Listener für das [`mouseup`](/de/docs/Web/API/Element/mouseup_event)-Ereignis auf dem Element `someElement` hinzu. Für den dritten Parameter, wenn `passiveSupported` `true` ist, geben wir ein `options`-Objekt mit `passive` auf `true` gesetzt an; andernfalls wissen wir, dass wir einen booleschen Wert übergeben müssen, und wir übergeben `false` als den Wert des `useCapture`-Parameters.

Sie können im [Implementierungsleitfaden zur Feature-Erkennung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) und im Erklärer über [`EventListenerOptions`](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection) der [Web Incubator Community Group](https://wicg.github.io/admin/charter.html) mehr erfahren.

### Der Wert von "this" innerhalb des Handlers

Es ist oft wünschenswert, auf das Element zu verweisen, auf dem der Ereignis-Handler ausgelöst wurde, beispielsweise beim Verwenden eines generischen Handlers für eine Gruppe ähnlicher Elemente.

Wenn Sie eine Handler-Funktion an ein Element mithilfe von `addEventListener()` anhängen, ist der Wert von {{jsxref("Operators/this","this")}} innerhalb des Handlers eine Referenz auf das Element. Es wird derselbe Wert sein wie die `currentTarget`-Eigenschaft des Ereignis-Argumentes, das an den Handler übergeben wird.

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

Wenn ein Ereignishandler (zum Beispiel [`onclick`](/de/docs/Web/API/Element/click_event)) in der HTML-Quelle für ein Element angegeben ist, wird der JavaScript-Code im Attributwert effektiv in eine Handler-Funktion gewickelt, die den Wert von `this` in einer Weise bindet, die mit `addEventListener()` übereinstimmt; ein Auftreten von `this` innerhalb des Codes stellt eine Referenz auf das Element dar.

```html
<table id="my_table" onclick="console.log(this.id);">
  <!-- `this` refers to the table; logs 'my_table' -->
  …
</table>
```

Beachten Sie, dass der Wert von `this` innerhalb einer Funktion, die vom Code im Attributwert _aufgerufen_ wird, sich gemäß den [Standardregeln](/de/docs/Web/JavaScript/Reference/Operators/this) verhält. Dies wird in folgendem Beispiel gezeigt:

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

Der Wert von `this` innerhalb von `logID()` ist eine Referenz auf das globale Objekt [`Window`](/de/docs/Web/API/Window) (oder `undefined` im Fall des [strengen Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)).

#### Festlegen von "this" mit bind()

Die Methode {{jsxref("Function.prototype.bind()")}} ermöglicht es Ihnen, einen festen `this`-Kontext für alle nachfolgenden Aufrufe festzulegen - dabei umgehen Sie Probleme, bei denen unklar ist, was `this` sein wird, abhängig vom Kontext, aus dem Ihre Funktion aufgerufen wurde. Beachten Sie jedoch, dass Sie eine Referenz auf den Listener behalten müssen, damit Sie ihn später entfernen können.

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

Eine andere Lösung ist die Verwendung einer speziellen Funktion namens `handleEvent()`, um alle Ereignisse abzufangen:

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

Eine weitere Möglichkeit, die Referenz auf `this` zu behandeln, besteht darin, eine Pfeilfunktion zu verwenden, die keinen separaten `this`-Kontext erstellt.

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

### Daten in einen Ereignis-Listener ein- und ausgeben

Ereignis-Listener nehmen nur ein Argument an, ein [`Event`](/de/docs/Web/API/Event) oder eine Unterklasse von `Event`, das automatisch an den Listener übergeben wird, und der Rückgabewert wird ignoriert. Um also Daten in einen Ereignis-Listener einzugeben oder daraus zu entnehmen, anstatt die Daten durch Parameter und Rückgabewerte zu übergeben, müssen Sie [Closures](/de/docs/Web/JavaScript/Closures) erstellen.

Die als Ereignis-Listener übergebenen Funktionen haben Zugriff auf alle in den äußeren Bereichen deklarierte Variablen, die die Funktion enthalten.

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

Im ersten Fall oben wird mit jeder Iteration der Schleife eine neue (anonyme) Handler-Funktion erstellt. Im zweiten Fall wird dieselbe zuvor deklarierte Funktion als Ereignis-Handler verwendet, was zu einem geringeren Speicherverbrauch führt, da nur eine Handler-Funktion erstellt wird. Darüber hinaus ist es im ersten Fall nicht möglich, [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) aufzurufen, weil keine Referenz auf die anonyme Funktion aufbewahrt wird (oder hier keine der möglicherweise von der Schleife erstellten mehreren anonymen Funktionen aufbewahrt wird). Im zweiten Fall ist es möglich, `myElement.removeEventListener("click", processEvent, false)` auszuführen, weil `processEvent` die Funktionsreferenz ist.

Tatsächlich ist das mangelnde Beibehalten einer Funktionsreferenz im Hinblick auf den Speicherverbrauch nicht das wahre Problem; vielmehr ist es das Fehlen einer _statischen_ Funktionsreferenz.

### Verwendung passiver Listener

Wenn ein Ereignis eine Standardaktion hat — zum Beispiel ein [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, das den Container standardmäßig scrollt — kann der Browser im Allgemeinen die Standardaktion nicht beginnen, bis der Ereignis-Listener fertig ist, da er nicht im Voraus wissen kann, ob der Ereignis-Listener die Standardaktion durch Aufrufen von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen könnte. Wenn der Ereignis-Listener zu lange dauert, kann dies zu einer spürbaren Verzögerung, auch bekannt als [Jank](/de/docs/Glossary/jank), führen, bevor die Standardaktion ausgeführt werden kann.

Indem Sie die `passive`-Option auf `true` setzen, erklärt ein Ereignis-Listener, dass er die Standardaktion nicht abbrechen wird, sodass der Browser die Standardaktion sofort starten kann, ohne darauf zu warten, dass der Listener fertig wird. Wenn der Listener dann [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, hat dies keinen Effekt.

Die Spezifikation von `addEventListener()` definiert den Standardwert für die `passive`-Option immer als `false`. Moderne Browser haben jedoch den Standardwert der `passive`-Option für die [`wheel`](/de/docs/Web/API/Element/wheel_event)-, [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event)-, [`touchstart`](/de/docs/Web/API/Element/touchstart_event)- und [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignisse in den dokumententypischen Knoten [`Window`](/de/docs/Web/API/Window), [`Document`](/de/docs/Web/API/Document) und [`Document.body`](/de/docs/Web/API/Document/body) auf `true` geändert, um die Vorteile der Scroll-Performance mit passiven Listenern im Legacy-Code zu realisieren. Dies verhindert, dass der Ereignis-Listener [das Ereignis abbrechen](/de/docs/Web/API/Event/preventDefault) kann, sodass er das Rendern der Seite nicht blockieren kann, während der Benutzer scrollt.

Deshalb, wenn Sie dieses Verhalten überschreiben und sicherstellen möchten, dass die `passive`-Option `false` ist, müssen Sie die Option explizit auf `false` setzen (anstatt sich auf den Standard zu verlassen).

Sie müssen sich keine Sorgen über den Wert von `passive` beim grundlegenden [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis machen. Da es nicht abgebrochen werden kann, können Ereignis-Listener das Rendern der Seite ohnehin nicht blockieren.

Siehe [Verbesserung der Scroll-Leistung durch passive Listener](#verbesserung_der_scroll-leistung_durch_passive_listener) für ein Beispiel, das die Wirkung passiver Listener zeigt.

### Ältere Browser

In älteren Browsern, die den `options`-Parameter für `addEventListener()` nicht unterstützen, verhindert der Versuch, ihn zu verwenden, die Verwendung des `useCapture`-Arguments ohne richtige Verwendung der [Feature-Erkennung](#sicheres_erkennen_von_unterstützungsoptionen).

## Beispiele

### Einfache Listener hinzufügen

Dieses Beispiel zeigt, wie man `addEventListener()` verwendet, um Mausklicks auf einem Element zu überwachen.

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

In diesem Code ist `modifyText()` ein Listener für `click`-Ereignisse, der mit `addEventListener()` registriert wurde. Ein Klick irgendwo in der Tabelle steigt zum Handler auf und führt `modifyText()` aus.

#### Ergebnis

{{EmbedLiveSample('Add_a_simple_listener')}}

### Hinzufügen eines abbruchfähigen Listeners

Dieses Beispiel zeigt, wie man `addEventListener()` hinzufügt, das mit einem [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgebrochen werden kann.

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

In dem obigen Beispiel ändern wir den Code im vorhergehenden Beispiel so, dass nachdem sich der Inhalt der zweiten Zeile in "three" ändert, rufen wir `abort()` von dem [`AbortController`](/de/docs/Web/API/AbortController) auf, den wir an den `addEventListener()`-Aufruf übergeben haben. Dies führt dazu, dass der Wert für immer "three" bleibt, da wir keinen weiteren Code haben, der auf ein Klick-Ereignis lauscht.

#### Ergebnis

{{EmbedLiveSample('Add_an_abortable_listener')}}

### Ereignis-Listener mit anonymer Funktion

Hier betrachten wir, wie man eine anonyme Funktion verwendet, um Parameter in den Ereignis-Listener zu übergeben.

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

Beachten Sie, dass der Listener eine anonyme Funktion ist, die Code kapselt, der dann wiederum in der Lage ist, Parameter an die `modifyText()`-Funktion zu übergeben, die für die tatsächliche Reaktion auf das Ereignis verantwortlich ist.

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_anonymous_function')}}

### Ereignis-Listener mit einer Pfeilfunktion

Dieses Beispiel zeigt einen einfachen Ereignis-Listener, der unter Verwendung der Pfeilfunktionsnotierung implementiert wurde.

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

Bitte beachten Sie, dass, obwohl anonyme und Pfeilfunktionen ähnlich sind, sie unterschiedliche `this`-Bindungen haben. Während anonyme (und alle traditionellen JavaScript-Funktionen) ihre eigenen `this`-Bindungen erstellen, erben Pfeilfunktionen die `this`-Bindung der enthaltenen Funktion.

Das bedeutet, dass die Variablen und Konstanten, die der enthaltenen Funktion zur Verfügung stehen, auch dem Ereignis-Handler zur Verfügung stehen, wenn man eine Pfeilfunktion verwendet.

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

Bevor Sie einen bestimmten Wert im `options`-Objekt verwenden, ist es eine gute Idee, sicherzustellen, dass der Browser des Benutzers ihn unterstützt, da diese eine Ergänzung sind, die nicht alle Browser historisch unterstützt haben. Siehe [Sicheres Erkennen von Unterstützungsoptionen](#sicheres_erkennen_von_unterstützungsoptionen) für Details.

### Ereignis-Listener mit mehreren Optionen

Sie können mehr als eine der Optionen im `options`-Parameter festlegen. Im folgenden Beispiel setzen wir zwei Optionen:

- `passive`, um zu bestätigen, dass der Handler [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) nicht aufrufen wird
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

Das folgende Beispiel zeigt die Wirkung von `passive`. Es enthält ein {{htmlelement("div")}}, das einige Texte und eine Checkbox enthält.

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

Der Code fügt einen Listener zum [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis des Containers hinzu, das standardmäßig den Container scrollt. Der Listener führt eine langlaufende Operation aus. Zunächst wird der Listener mit der `passive`-Option hinzugefügt, und wann immer das Kontrollkästchen umgeschaltet wird, schaltet der Code die `passive`-Option um.

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
- Wenn Sie "passive" deaktivieren und versuchen, den Container mit dem Rad zu scrollen, gibt es eine spürbare Verzögerung, bevor der Container scrollt, da der Browser darauf warten muss, dass der langlaufende Listener fertig ist.

{{EmbedLiveSample("Improving scroll performance using passive listeners", 100, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)
- [Erstellen und Auslösen von benutzerdefinierten Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events)
- [Weitere Details zur Verwendung von `this` in Ereignis-Handlern](https://www.quirksmode.org/js/this.html)

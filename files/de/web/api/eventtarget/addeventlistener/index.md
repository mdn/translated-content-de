---
title: "EventTarget: Methode addEventListener()"
short-title: addEventListener()
slug: Web/API/EventTarget/addEventListener
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`addEventListener()`** Methode der {{domxref("EventTarget")}} Schnittstelle richtet eine Funktion ein, die immer dann aufgerufen wird, wenn das angegebene Ereignis an das Ziel gesendet wird.

Übliche Ziele sind {{domxref("Element")}}, oder dessen Kinder, {{domxref("Document")}}, und {{domxref("Window")}}, aber das Ziel kann jedes Objekt sein, das Ereignisse unterstützt (wie {{domxref("IDBRequest")}}).

> [!NOTE]
> Die Methode `addEventListener()` ist die _empfohlene_ Art, einen Ereignis-Listener zu registrieren. Die Vorteile sind wie folgt:
>
> - Sie ermöglicht das Hinzufügen von mehr als einem Handler für ein Ereignis. Dies ist besonders nützlich für Bibliotheken, JavaScript-Module oder jede andere Art von Code, der gut mit anderen Bibliotheken oder Erweiterungen funktionieren muss.
> - Im Gegensatz zur Verwendung einer `onXYZ` Eigenschaft bietet sie eine feinere Kontrolle über die Phase, in der der Listener aktiviert wird (Erfassung vs. Bubbling).
> - Sie funktioniert bei jedem Ereignisziel, nicht nur bei HTML- oder SVG-Elementen.

Die Methode `addEventListener()` funktioniert, indem sie eine Funktion oder ein Objekt, das eine `handleEvent()`-Funktion implementiert, zur Liste der Ereignis-Listener für den angegebenen Ereignistyp auf dem {{domxref("EventTarget")}}, auf dem sie aufgerufen wird, hinzufügt. Wenn die Funktion oder das Objekt bereits in der Liste der Ereignis-Listener für dieses Ziel enthalten ist, wird die Funktion oder das Objekt nicht ein zweites Mal hinzugefügt.

> [!NOTE]
> Ist eine bestimmte anonyme Funktion in der Liste der für ein bestimmtes Ziel registrierten Ereignis-Listener und wird später im Code eine identische anonyme Funktion in einem `addEventListener`-Aufruf angegeben, wird die zweite Funktion _ebenfalls_ zur Liste der Ereignis-Listener für dieses Ziel hinzugefügt.
>
> Tatsächlich sind anonyme Funktionen nicht identisch, selbst wenn sie mit dem _gleichen_ unveränderlichen Quellcode, der wiederholt aufgerufen wird, definiert wurden, **selbst in einer Schleife**.
>
> Das wiederholte Definieren derselben unbenannten Funktion in solchen Fällen kann problematisch sein. (Siehe [Speicherprobleme](#speicherprobleme) unten.)

Wenn ein Ereignis-Listener von einem anderen Listener aus zu einem {{domxref("EventTarget")}} hinzugefügt wird – also während der Verarbeitung des Ereignisses – löst dieses Ereignis den neuen Listener nicht aus. Der neue Listener kann jedoch während einer späteren Phase des Ereignisflusses ausgelöst werden, beispielsweise während der Bubbling-Phase.

## Syntax

```js-nolint
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

### Parameter

- `type`
  - : Eine case-sensitive Zeichenkette, die den [Ereignistyp](/de/docs/Web/Events) angibt, den man beobachten möchte.
- `listener`
  - : Das Objekt, das bei einem der angegebenen Typen entsprechenden Ereignis eine Benachrichtigung erhält (ein Objekt, das die {{domxref("Event")}} Schnittstelle implementiert). Dies muss `null`, ein Objekt mit einer `handleEvent()`-Methode oder eine JavaScript-[Funktion](/de/docs/Web/JavaScript/Guide/Functions) sein. Siehe [Der Event-Listener-Rückruf](#der_event-listener-rückruf) für Details über den Rückruf selbst.
- `options` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften bezüglich des Ereignis-Listeners angibt. Die verfügbaren Optionen sind:

    - `capture` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass Ereignisse dieses Typs an den registrierten `listener` gesendet werden, bevor sie an ein `EventTarget` gesendet werden, das sich darunter im DOM-Baum befindet. Wenn nicht angegeben, ist der Standardwert `false`.
    - `once` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass der `listener` höchstens einmal nach dem Hinzufügen aufgerufen werden soll. Wenn `true`, wird der `listener` automatisch entfernt, wenn er aufgerufen wird. Wenn nicht angegeben, ist der Standardwert `false`.
    - `passive` {{optional_inline}}

      - : Ein boolescher Wert, der, wenn `true`, angibt, dass die durch `listener` angegebene Funktion niemals {{domxref("Event.preventDefault", "preventDefault()")}} aufrufen wird. Wenn ein passiver Listener `preventDefault()` aufruft, tut der Benutzeragent nichts anderes als eine Warnung in der Konsole zu generieren.

        Wenn diese Option nicht angegeben ist, lautet der Standardwert `false` – abgesehen davon, dass er in Browsern außer Safari für {{domxref("Element/wheel_event", "wheel")}}, {{domxref("Element/mousewheel_event", "mousewheel")}}, {{domxref("Element/touchstart_event", "touchstart")}} und {{domxref("Element/touchmove_event", "touchmove")}} Ereignisse auf `true` gesetzt ist. Siehe [Verwendung passiver Listener](#verwendung_passiver_listener) um mehr zu erfahren.

    - `signal` {{optional_inline}}
      - : Ein {{domxref("AbortSignal")}}. Der Listener wird entfernt, wenn die `abort()`-Methode des angegebenen `AbortSignal` Objekts aufgerufen wird. Wenn nicht angegeben, wird kein `AbortSignal` mit dem Listener verbunden.

- `useCapture` {{optional_inline}}

  - : Ein boolescher Wert, der angibt, ob Ereignisse dieses Typs an den registrierten `listener` _bevor_ sie an ein `EventTarget` gesendet werden, das sich darunter im DOM-Baum befindet. Ereignisse, die durch den Baum aufwärts wandern (Bubbling), lösen keinen Listener aus, der so eingerichtet ist, dass er Capture verwendet. Event-Bubbling und Capture sind zwei Möglichkeiten, Ereignisse weiterzuleiten, die in einem Element auftreten, das in einem anderen Element eingebettet ist, wenn beide Elemente eine Bearbeitung für dieses Ereignis registriert haben. Der Ereignisfortpflanzungsmodus bestimmt die Reihenfolge, in der die Elemente das Ereignis erhalten. Siehe [DOM Level 3 Events](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow) und [JavaScript Ereignisreihenfolge](https://www.quirksmode.org/js/events_order.html#link4) für eine ausführliche Erklärung. Wenn nicht angegeben, ist der Standardwert von `useCapture` `false`.

    > [!NOTE]
    > Für Ereignis-Listener, die am Ereignisziel angebracht sind, befindet sich das Ereignis in der Zielphase, anstatt in der Capture- und Bubbling-Phase.
    > Ereignis-Listener in der _Capture_-Phase werden vor Ereignis-Listenern in anderen Phasen aufgerufen.

- `wantsUntrusted` {{optional_inline}} {{non-standard_inline}}
  - : Ein Firefox (Gecko)-spezifischer Parameter. Wenn `true`, erhält der Listener synthetische Ereignisse, die von Web-Inhalten gesendet werden (der Standardwert ist `false` für den Browser-{{glossary("chrome")}} und `true` für reguläre Webseiten). Dieser Parameter ist nützlich für in Add-ons gefundene Codes sowie den Browser selbst.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Nutzungshinweise

### Der Event-Listener-Rückruf

Der Ereignis-Listener kann entweder als Rückruffunktion oder als Objekt angegeben werden, dessen `handleEvent()`-Methode als Rückruffunktion dient.

Die Rückruffunktion selbst hat die gleichen Parameter und den gleichen Rückgabewert wie die `handleEvent()`-Methode; das heißt, der Rückruf akzeptiert einen einzelnen Parameter: ein Objekt basierend auf der {{domxref("Event")}}-Schnittstelle, das das aufgetretene Ereignis beschreibt, und es gibt nichts zurück.

Zum Beispiel könnte ein Event-Handler-Rückruf, der sowohl das {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} als auch das {{domxref("Element/fullscreenerror_event", "fullscreenerror")}} behandeln kann, folgendermaßen aussehen:

```js
function handleEvent(event) {
  if (event.type === "fullscreenchange") {
    /* handle a full screen toggle */
  } else {
    /* handle a full screen toggle error */
  }
}
```

### Sicheres Erkennen von Optionsunterstützung

In älteren Versionen der DOM-Spezifikation war der dritte Parameter von `addEventListener()` ein boolescher Wert, der angab, ob Capture verwendet werden soll oder nicht. Mit der Zeit wurde klar, dass mehr Optionen benötigt wurden. Anstatt der Funktion mehr Parameter hinzuzufügen (was die Dinge beim Umgang mit optionalen Werten enorm komplizieren würde), wurde der dritte Parameter in ein Objekt geändert, das verschiedene Eigenschaften enthalten kann, die die Werte von Optionen definieren, um die Ausführung des Ereignis-Listeners zu konfigurieren.

Da ältere Browser (sowie einige nicht allzu alte Browser) immer noch davon ausgehen, dass der dritte Parameter ein Boolean ist, müssen Sie Ihren Code so erstellen, dass diese Situation intelligent bearbeitet wird. Sie können dies tun, indem Sie für jede der Optionen, an denen Sie interessiert sind, eine Feature-Erkennung verwenden.

Zum Beispiel, wenn Sie die `passive` Option überprüfen möchten:

```js
let passiveSupported = false;

try {
  const options = {
    get passive() {
      // Diese Funktion wird aufgerufen, wenn der Browser versucht,
      // auf die passive-Eigenschaft zuzugreifen.
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

Dies erstellt ein `options`-Objekt mit einer Getter-Funktion für die `passive`-Eigenschaft; der Getter setzt eine Flagge, `passiveSupported`, auf `true`, wenn er aufgerufen wird. Das bedeutet, dass, wenn der Browser den Wert der `passive`-Eigenschaft im `options`-Objekt überprüft, `passiveSupported` auf `true` gesetzt wird; andernfalls bleibt es `false`. Wir rufen dann `addEventListener()` auf, um einen gefälschten Event-Handler festzulegen und diese Optionen anzugeben, damit die Optionen überprüft werden, wenn der Browser ein Objekt als dritten Parameter erkennt. Dann rufen wir [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) auf, um das wieder zurückzusetzen. (Bitte beachten Sie, dass `handleEvent()` bei Ereignis-Listenern, die nicht aufgerufen werden, ignoriert wird.)

Auf diese Weise können Sie überprüfen, ob eine Option unterstützt wird. Fügen Sie einfach einen Getter für diese Option unter Verwendung eines ähnlichen Codes hinzu wie oben gezeigt.

Dann, wenn Sie einen echten Ereignis-Listener erstellen möchten, der die betreffenden Optionen verwendet, können Sie so etwas wie das folgende machen:

```js
someElement.addEventListener(
  "mouseup",
  handleMouseUp,
  passiveSupported ? { passive: true } : false,
);
```

Hier fügen wir einen Listener für das {{domxref("Element/mouseup_event", "mouseup")}} Ereignis auf dem Element `someElement` hinzu. Für den dritten Parameter, wenn `passiveSupported` `true` ist, spezifizieren wir ein `options`-Objekt mit `passive`, das auf `true` gesetzt ist; andernfalls wissen wir, dass wir einen Boolean übergeben müssen, und wir übergeben `false` als den Wert des `useCapture`-Parameters.

Sie können in der [Implementierung von Feature-Erkennung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) Dokumentation und im Erklärungstext zu [`EventListenerOptions`](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection) von der [Web Incubator Community Group](https://wicg.github.io/admin/charter.html) mehr erfahren.

### Der Wert von "this" innerhalb des Handlers

Es ist oft wünschenswert, auf das Element zu verweisen, auf dem der Ereignis-Handler ausgelöst wurde, wie bei der Verwendung eines generischen Handlers für eine Reihe ähnlicher Elemente.

Wenn Sie eine Handler-Funktion an ein Element mit `addEventListener()` anhängen, ist der Wert von {{jsxref("Operators/this","this")}} innerhalb des Handlers eine Referenz auf das Element. Er entspricht dem Wert der `currentTarget`-Eigenschaft des Ereignisarguments, das an den Handler übergeben wird.

```js
my_element.addEventListener("click", function (e) {
  console.log(this.className); // gibt den className von my_element aus
  console.log(e.currentTarget === this); // gibt `true` aus
});
```

Zur Erinnerung: [Pfeilfunktionen haben keinen eigenen `this`-Kontext](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#cannot_be_used_as_methods).

```js
my_element.addEventListener("click", (e) => {
  console.log(this.className); // WARNUNG: `this` ist nicht `my_element`
  console.log(e.currentTarget === this); // gibt `false` aus
});
```

Wenn ein Ereignis-Handler (z. B. {{domxref("Element.click_event", "onclick")}}) in einem HTML-Quellcode-Element angegeben ist, wird der JavaScript-Code im Attribut-Wert effektiv in eine Handler-Funktion eingebettet, die den Wert von `this` in Übereinstimmung mit `addEventListener()` bindet; ein Vorkommen von `this` im Code stellt eine Referenz auf das Element dar.

```html
<table id="my_table" onclick="console.log(this.id);">
  <!-- `this` bezieht sich auf die Tabelle; gibt 'my_table' aus -->
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
<table id="my_table" onclick="logID();">
  <!-- wenn aufgerufen, bezieht sich `this` auf das globale Objekt -->
  …
</table>
```

Der Wert von `this` innerhalb von `logID()` ist eine Referenz auf das globale Objekt {{domxref("Window")}} (oder `undefined` im Falle des [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)).

#### Spezifizieren von "this" mit bind()

Die {{jsxref("Function.prototype.bind()")}} Methode ermöglicht es Ihnen, einen festen `this`-Kontext für alle nachfolgenden Aufrufe festzulegen – wodurch Probleme umgangen werden, bei denen es unklar ist, was `this` sein wird, abhängig vom Kontext, aus dem Ihre Funktion aufgerufen wurde. Beachten Sie jedoch, dass Sie eine Referenz zum Listener aufbewahren müssen, damit Sie ihn später entfernen können.

Dies ist ein Beispiel mit und ohne `bind()`:

```js
class Something {
  name = "Something Good";
  constructor(element) {
    // bind setzt einen festen `this`-Kontext für `onclick2`
    this.onclick2 = this.onclick2.bind(this);
    element.addEventListener("click", this.onclick1, false);
    element.addEventListener("click", this.onclick2, false); // Trick
  }
  onclick1(event) {
    console.log(this.name); // undefined, da `this` das Element ist
  }
  onclick2(event) {
    console.log(this.name); // 'Something Good', da `this` auf die Something Instanz gebunden ist
  }
}

const s = new Something(document.body);
```

Eine andere Lösung ist die Verwendung einer speziellen Funktion namens `handleEvent()`, um Ereignisse abzufangen:

```js
class Something {
  name = "Something Good";
  constructor(element) {
    // Beachten Sie, dass die Listener in diesem Fall `this` sind, nicht this.handleEvent
    element.addEventListener("click", this, false);
    element.addEventListener("dblclick", this, false);
  }
  handleEvent(event) {
    console.log(this.name); // 'Something Good', da dies auf das neu erstellte Objekt gebunden ist
    switch (event.type) {
      case "click":
        // hier einen Code schreiben…
        break;
      case "dblclick":
        // hier einen Code schreiben…
        break;
    }
  }
}

const s = new Something(document.body);
```

Eine weitere Möglichkeit, die Referenz auf `this` zu handhaben, besteht darin, eine Pfeilfunktion zu verwenden, die keinen separaten `this`-Kontext erstellt.

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
        // hier einen Code schreiben…
        break;
      case "ArrowDown":
        // hier einen Code schreiben…
        break;
    }
  }
}

const myObject = new SomeClass();
myObject.register();
```

### Daten in einen und aus einem Ereignis-Listener aufnehmen

Ereignis-Listener nehmen nur ein Argument,
ein {{domxref("Event")}} oder eine Unterklasse von `Event`,
das automatisch an den Listener übergeben wird, und der Rückgabewert wird ignoriert.
Um also Daten in und aus einem Ereignis-Listener zu erhalten, müssen Sie anstelle des Durchgebens der Daten durch Parameter und Rückgabewerte [Verschlüsse](/de/docs/Web/JavaScript/Closures) erstellen.

Die als Ereignis-Listener übergebenen Funktionen haben Zugriff auf alle Variablen, die in den äußeren Gültigkeitsbereichen deklariert sind, die die Funktion enthalten.

```js
const myButton = document.getElementById("my-button-id");
let someString = "Data";

myButton.addEventListener("click", () => {
  console.log(someString);
  // 'Data' beim ersten Klick,
  // 'Data Again' beim zweiten Klick

  someString = "Data Again";
});

console.log(someString); // Erwarteter Wert: 'Data' (wird niemals 'Data Again' ausgeben)
```

Lesen Sie für weitere Informationen über Funktionswechsel [den Funktionsleitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_scope).

### Speicherprobleme

```js
const elts = document.getElementsByTagName("*");

// Fall 1
for (const elt of elts) {
  elt.addEventListener(
    "click",
    (e) => {
      // Etwas machen
    },
    false,
  );
}

// Fall 2
function processEvent(e) {
  // Etwas machen
}

for (const elt of elts) {
  elt.addEventListener("click", processEvent, false);
}
```

Im obigen ersten Fall wird mit jeder Iteration der Schleife eine neue (anonyme) Handler-Funktion erstellt. Im zweiten Fall wird die gleiche zuvor deklarierte Funktion als Ereignis-Handler verwendet, was zu einem geringeren Speicherverbrauch führt, da nur eine einzige Handler-Funktion erstellt wird. Darüber hinaus ist es im ersten Fall nicht möglich, {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} aufzurufen, da keine Referenz zur anonymen Funktion beibehalten wird (oder hier nicht zu einer der möglicherweise von der Schleife erstellten zahlreichen anonymen Funktionen beibehalten wird). Im zweiten Fall ist es möglich, `myElement.removeEventListener("click", processEvent, false)` abzurufen, da `processEvent` die Funktionsreferenz ist.

Tatsächlich ist das eigentliche Problem bei der Speicherverbrauch nicht der Mangel an der Beibehaltung einer Funktionsreferenz, sondern vielmehr der Mangel an der Beibehaltung einer _statischen_ Funktionsreferenz.

### Verwendung passiver Listener

Wenn ein Ereignis eine Standardaktion hat – zum Beispiel ein {{domxref("Element/wheel_event", "wheel")}}-Ereignis, das standardmäßig das Container scrollt – ist der Browser im Allgemeinen nicht in der Lage, die Standardaktion zu starten, bis der Ereignis-Listener beendet ist, da er nicht im Voraus weiß, ob der Ereignis-Listener möglicherweise die Standardaktion durch Aufrufen von {{domxref("Event.preventDefault()")}} abbrechen könnte. Wenn der Ereignis-Listener zu lange dauert, um ausgeführt zu werden, kann dies zu einer spürbaren Verzögerung führen, auch bekannt als {{glossary("jank")}}, bevor die Standardaktion ausgeführt werden kann.

Indem die `passive`-Option auf `true` gesetzt wird, erklärt ein Ereignis-Listener, dass es die Standardaktion nicht abbrechen wird, sodass der Browser die Standardaktion sofort starten kann, ohne darauf zu warten, dass der Listener beendet wird. Wenn der Listener dann {{domxref("Event.preventDefault()")}} aufruft, hat dies keine Wirkung.

Die Spezifikation für `addEventListener()` definiert den Standardwert für die `passive`-Option immer als `false`. Um jedoch die Scroll-Leistungsverbesserung passiver Listener in Legacy-Code zu realisieren, haben moderne Browser den Standardwert der `passive`-Option auf `true` für die {{domxref("Element/wheel_event", "wheel")}}, {{domxref("Element/mousewheel_event", "mousewheel")}}, {{domxref("Element/touchstart_event", "touchstart")}} und {{domxref("Element/touchmove_event", "touchmove")}}-Ereignisse auf den dokumentenähnlichen Knotenpunkten {{domxref("Window")}}, {{domxref("Document")}}, und {{domxref("Document.body")}} geändert. Das verhindert, dass der Ereignis-Listener das [Ereignis abbrechen](/de/docs/Web/API/Event/preventDefault) kann, sodass es die Seitenrenderung nicht blockieren kann, während der Benutzer scrollt.

Deshalb, wenn Sie dieses Verhalten übergehen und sicherstellen möchten, dass die `passive`-Option `false` ist, müssen Sie die Option explizit auf `false` setzen (anstatt sich auf den Standardwert zu verlassen).

Sie brauchen sich keine Sorgen über den Wert von `passive` für das grundlegende {{domxref("Element/scroll_event", "scroll")}}-Ereignis zu machen.
Da es nicht abgebrochen werden kann, können Ereignis-Listener die Seitenrenderung ohnehin nicht blockieren.

Siehe [Verbesserung der Scroll-Performance mit passiven Listenern](#verbesserung_der_scroll-performance_mit_passiven_listenern) für ein Beispiel, das den Effekt passiver Listener zeigt.

### Ältere Browser

In älteren Browsern, die den `options`-Parameter von `addEventListener()` nicht unterstützen, verhindert der Versuch, ihn zu verwenden, die Verwendung des `useCapture`-Arguments, ohne angemessene Verwendung der [Feature-Erkennung](#sicheres_erkennen_von_optionsunterstützung).

## Beispiele

### Einfachen Listener hinzufügen

Dieses Beispiel zeigt, wie `addEventListener()` verwendet wird, um auf Mausklicks auf einem Element zu achten.

#### HTML

```html
<table id="outside">
  <tr>
    <td id="t1">eins</td>
  </tr>
  <tr>
    <td id="t2">zwei</td>
  </tr>
</table>
```

#### JavaScript

```js
// Funktion zum Ändern des Inhalts von t2
function modifyText() {
  const t2 = document.getElementById("t2");
  const isNodeThree = t2.firstChild.nodeValue === "drei";
  t2.firstChild.nodeValue = isNodeThree ? "zwei" : "drei";
}

// Ereignis-Listener zur Tabelle hinzufügen
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);
```

In diesem Code ist `modifyText()` ein Listener für `click`-Ereignisse, der mit `addEventListener()` registriert wurde. Ein Klick irgendwo in der Tabelle wird bis zum Handler hochgebubbled und ruft `modifyText()` auf.

#### Ergebnis

{{EmbedLiveSample('Add_a_simple_listener')}}

### Einen abbrechbaren Listener hinzufügen

Dieses Beispiel zeigt, wie ein `addEventListener()` hinzugefügt wird, das mit einem {{domxref("AbortSignal")}} abgebrochen werden kann.

#### HTML

```html
<table id="outside">
  <tr>
    <td id="t1">eins</td>
  </tr>
  <tr>
    <td id="t2">zwei</td>
  </tr>
</table>
```

#### JavaScript

```js
// Einen abbrechbaren Ereignis-Listener zur Tabelle hinzufügen
const controller = new AbortController();
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, { signal: controller.signal });

// Funktion zum Ändern des Inhalts von t2
function modifyText() {
  const t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue === "drei") {
    t2.firstChild.nodeValue = "zwei";
  } else {
    t2.firstChild.nodeValue = "drei";
    controller.abort(); // Listener entfernen, nachdem der Wert "drei" erreicht hat
  }
}
```

Im obigen Beispiel modifizieren wir den Code aus dem vorherigen Beispiel so, dass nachdem der Inhalt der zweiten Reihe zu "drei" geändert wird, wir `abort()` des {{domxref("AbortController")}} aufrufen, den wir an den `addEventListener()`-Aufruf übergeben haben. Das führt dazu, dass der Wert für immer als "drei" bleibt, da wir keinen Code mehr haben, der auf ein Klickereignis hört.

#### Ergebnis

{{EmbedLiveSample('Add_an_abortable_listener')}}

### Ereignis-Listener mit anonymer Funktion

Hier werden wir uns anschauen, wie man eine anonyme Funktion nutzt, um Parameter an den Ereignis-Listener zu übergeben.

#### HTML

```html
<table id="outside">
  <tr>
    <td id="t1">eins</td>
  </tr>
  <tr>
    <td id="t2">zwei</td>
  </tr>
</table>
```

#### JavaScript

```js
// Funktion zum Ändern des Inhalts von t2
function modifyText(new_text) {
  const t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
}

// Funktion zum Hinzufügen eines Ereignis-Listeners zur Tabelle
const el = document.getElementById("outside");
el.addEventListener(
  "click",
  function () {
    modifyText("vier");
  },
  false,
);
```

Beachten Sie, dass der Listener eine anonyme Funktion ist, die Code kapselt, der wiederum in der Lage ist, Parameter an die `modifyText()`-Funktion zu übergeben, die für das eigentliche Reagieren auf das Ereignis verantwortlich ist.

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_anonymous_function')}}

### Ereignis-Listener mit einer Pfeilfunktion

Dieses Beispiel demonstriert einen einfachen Ereignis-Listener, der unter Verwendung der Pfeilfunktions-Notation implementiert wurde.

#### HTML

```html
<table id="outside">
  <tr>
    <td id="t1">eins</td>
  </tr>
  <tr>
    <td id="t2">zwei</td>
  </tr>
</table>
```

#### JavaScript

```js
// Funktion zum Ändern des Inhalts von t2
function modifyText(new_text) {
  const t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
}

// Ereignis-Listener mit einer Pfeilfunktion zur Tabelle hinzufügen
const el = document.getElementById("outside");
el.addEventListener(
  "click",
  () => {
    modifyText("vier");
  },
  false,
);
```

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_an_arrow_function')}}

Bitte beachten Sie, dass, während anonyme und Pfeilfunktionen ähnlich sind, sie unterschiedliche `this`-Bindungen haben. Während anonyme (und alle traditionellen JavaScript-Funktionen) ihre eigenen `this`-Bindungen erstellen, erben Pfeilfunktionen die `this`-Bindung der umgebenden Funktion.

Das bedeutet, dass die Variablen und Konstanten, die der umgebenden Funktion zur Verfügung stehen, auch der Ereignisbehandlung zur Verfügung stehen, wenn eine Pfeilfunktion verwendet wird.

### Beispiel zur Nutzung von Optionen

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
<button class="clear-button">Logs löschen</button>
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
  // Abbrechen von preventDefault innerhalb des passiven Ereignis-Listeners wird nicht ausgeführt.
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

Bevor Sie einen bestimmten Wert im `options` Objekt verwenden, sollten Sie sicherstellen, dass der Browser des Benutzers ihn unterstützt, da diese eine Erweiterung ist, die nicht alle Browser historisch unterstützt haben. Siehe [Sicheres Erkennen von Optionsunterstützung](#sicheres_erkennen_von_optionsunterstützung) für Details.

### Ereignis-Listener mit mehreren Optionen

Sie können mehr als eine der Optionen im `options`-Parameter festlegen. Im folgenden Beispiel setzen wir zwei Optionen:

- `passive`, um zu bestätigen, dass der Handler nicht {{domxref("Event.preventDefault", "preventDefault()")}} aufrufen wird
- `once`, um sicherzustellen, dass der Ereignis-Handler nur einmal aufgerufen wird.

#### HTML

```html
<button id="example-button">Sie haben diesen Knopf nicht geklickt.</button>
<button id="reset-button">Klicken Sie auf diesen Knopf, um den ersten Knopf zurückzusetzen.</button>
```

#### JavaScript

```js
const buttonToBeClicked = document.getElementById("example-button");

const resetButton = document.getElementById("reset-button");

// der Text, mit dem der Button initialisiert wird
const initialText = buttonToBeClicked.textContent;

// der Text, den der Button nach dem Klick enthält
const clickedText = "Sie haben diesen Button geklickt.";

// wir heben die Rückruffunktion des Ereignis-Listeners heraus,
// um zu verhindern, dass doppelte Listener hinzugefügt werden
function eventListener() {
  buttonToBeClicked.textContent = clickedText;
}

function addListener() {
  buttonToBeClicked.addEventListener("click", eventListener, {
    passive: true,
    once: true,
  });
}

// wenn der Reset-Knopf geklickt wird, wird der Beispielbutton zurückgesetzt,
// und es ist erlaubt, seinen Zustand wieder zu aktualisieren
resetButton.addEventListener("click", () => {
  buttonToBeClicked.textContent = initialText;
  addListener();
});

addListener();
```

#### Ergebnis

{{EmbedLiveSample('Event_listener_with_multiple_options')}}

### Verbesserung der Scroll-Performance mit passiven Listenern

Das folgende Beispiel zeigt den Effekt der Einstellung von `passive`. Es umfasst ein {{htmlelement("div")}}, das etwas Text enthält, und ein Kontrollkästchen.

#### HTML

```html
<div id="container">
  <p>
    Aber dort unten wäre es jetzt dunkel, und nicht das schöne beleuchtete
    Aquarium, das sie sich während der Tageslichtstunden vorstellte, womit
    Schulen winziger, zarter Tiere langsam zu ihren eigenen ruhigen Strömen
    schwammen und tanzten und das Aussehen eines lebenden Gemäldes
    schufen. Das war jedenfalls falsch. Der Ozean war anders als ein Aquarium,
    welches eine künstliche Umgebung ist.> Der Ozean war eine Welt. Und
    eine Welt ist keine Kunst. Dorothy dachte über die Lebewesen nach, die in
    dieser Welt lebten: groß, ungnädig und hungrig. So wie wir hier oben.
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

Der Code fügt dem `wheel`-Ereignis des Containers einen Listener hinzu, der standardmäßig den Container scrollt. Der Listener führt eine langlaufende Operation aus. Zu Beginn wird der Listener mit der `passive`-Option hinzugefügt, und wann immer das Kontrollkästchen umgeschaltet wird, wechselt der Code die `passive`-Option.

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

- Zu Beginn ist der Listener passiv, daher ist der Versuch, den Container mit dem Rad zu scrollen, sofort.
- Wenn Sie das "passive" Häkchen entfernen und versuchen, den Container mit dem Rad zu scrollen, gibt es eine merkliche Verzögerung, bevor der Container scrollt, da derBrowser warten muss, bis der langlaufende Listener abgeschlossen ist.

{{EmbedLiveSample("Improving scroll performance using passive listeners", 100, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("EventTarget.removeEventListener()")}}
- [Erstellen und Auslösen von benutzerdefinierten Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events)
- [Weitere Details zur Verwendung von `this` in Ereignis-Handlern](https://www.quirksmode.org/js/this.html)

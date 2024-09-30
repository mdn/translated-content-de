---
title: Einführung in Events
slug: Learn/JavaScript/Building_blocks/Events
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Event_bubbling", "Learn/JavaScript/Building_blocks")}}

Events sind Dinge, die im System, das Sie programmieren, passieren und über die das System Sie informiert, damit Ihr Code darauf reagieren kann.

Wenn ein Benutzer beispielsweise auf einer Webseite auf eine Schaltfläche klickt, möchten Sie möglicherweise auf diese Aktion reagieren, indem Sie ein Informationsfenster anzeigen. In diesem Artikel besprechen wir einige wichtige Konzepte im Zusammenhang mit Events und untersuchen, wie sie in Browsern funktionieren. Dies wird keine erschöpfende Studie sein; nur das, was Sie an diesem Punkt wissen müssen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML, CSS und
        <a href="/de/docs/Learn/JavaScript/First_steps"
          >JavaScript erste Schritte</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das grundlegende Verständnis von Events, wie sie in Browsern funktionieren, und wie sie sich in verschiedenen Programmierumgebungen unterscheiden können.
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Event?

Events sind Dinge, die im System passieren, das Sie programmieren — das System erzeugt (oder "feuert") ein Signal irgendeiner Art, wenn ein Event auftritt, und bietet einen Mechanismus, bei dem eine Aktion (d.h. ein laufender Code) automatisch ausgeführt werden kann, wenn das Event auftritt. Events werden im Browserfenster ausgelöst und neigen dazu, an ein bestimmtes Element gebunden zu sein, das darin vorhanden ist. Dies könnte ein einzelnes Element, eine Menge von Elementen, das im aktuellen Tab geladene HTML-Dokument oder das gesamte Browserfenster sein. Es gibt viele verschiedene Arten von Events, die auftreten können.

Zum Beispiel:

- Der Benutzer wählt, klickt oder schwebt mit dem Cursor über ein bestimmtes Element.
- Der Benutzer wählt eine Taste auf der Tastatur.
- Der Benutzer ändert die Größe oder schließt das Browserfenster.
- Eine Webseite wird fertig geladen.
- Ein Formular wird abgeschickt.
- Ein Video wird abgespielt, pausiert oder endet.
- Ein Fehler tritt auf.

Sie können aus diesem (und einem Blick in das MDN [Event-Referenz](/de/docs/Web/Events)) entnehmen, dass viele **Events** ausgelöst werden können.

Um auf ein Event zu reagieren, heften Sie einen **Event-Handler** daran an. Dies ist ein Codeblock (normalerweise eine JavaScript-Funktion, die Sie als Programmierer erstellen), der ausgeführt wird, wenn das Event gefeuert wird.
Wenn ein solcher Codeblock definiert wird, um als Reaktion auf ein Event ausgeführt zu werden, sagen wir, wir **registrieren einen Event-Handler**.
Hinweis: Event-Handler werden manchmal als **Event-Listener** bezeichnet — sie sind für unsere Zwecke nahezu austauschbar, obwohl sie genau genommen zusammenarbeiten.
Der Listener wartet auf das Auftreten des Events, und der Handler ist der Code, der als Reaktion darauf ausgeführt wird.

> [!NOTE]
> Web-Events sind kein Teil der Kern-JavaScript-Sprache — sie sind Teil der APIs, die im Browser integriert sind.

### Ein Beispiel: Umgang mit einem Click-Event

Im folgenden Beispiel haben wir eine einzelne {{htmlelement("button")}} auf der Seite:

```html
<button>Change color</button>
```

```css hidden
button {
  margin: 10px;
}
```

Dann haben wir etwas JavaScript. Wir werden uns das im nächsten Abschnitt genauer ansehen, aber für jetzt können wir einfach sagen: es fügt einen Event-Handler für das `"click"`-Event der Schaltfläche hinzu, und der Handler reagiert auf das Event, indem er den Seitenhintergrund auf eine zufällige Farbe setzt:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
```

Die Ausgabe des Beispiels ist wie folgt. Versuchen Sie, die Schaltfläche zu klicken:

{{ EmbedLiveSample('An example: handling a click event', '100%', 200, "", "") }}

## Verwendung von addEventListener()

Wie wir im letzten Beispiel gesehen haben, haben Objekte, die Events auslösen können, eine [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode, und dies ist der empfohlene Mechanismus zum Hinzufügen von Event-Handlern.

Werfen wir einen genaueren Blick auf den Code aus dem letzten Beispiel:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
```

Das HTML-{{HTMLElement("button")}}-Element wird ein Event auslösen, wenn der Benutzer auf die Schaltfläche klickt. Also definiert es eine `addEventListener()`-Funktion, die wir hier aufrufen. Wir übergeben zwei Parameter:

- den String `"click"`, um anzuzeigen, dass wir auf das Klick-Event hören möchten. Schaltflächen können viele andere Events auslösen, wie z.B. [`"mouseover"`](/de/docs/Web/API/Element/mouseover_event), wenn der Benutzer den Mauszeiger über die Schaltfläche bewegt, oder [`"keydown"`](/de/docs/Web/API/Element/keydown_event), wenn der Benutzer eine Taste drückt und die Schaltfläche fokussiert ist.
- eine Funktion, die beim Eintreten des Events aufgerufen wird. In unserem Fall generiert die Funktion eine zufällige RGB-Farbe und setzt die [`background-color`](/de/docs/Web/CSS/background-color) der Seite auf den Körper dieser Farbe.

Es ist in Ordnung, die Handler-Funktion als separate benannte Funktion zu machen, wie dies:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", changeBackground);
```

### Hören auf andere Events

Es gibt viele verschiedene Events, die von einem Schaltflächenelement ausgelöst werden können. Lassen Sie uns experimentieren.

Erstellen Sie zunächst eine lokale Kopie von [random-color-addeventlistener.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-addeventlistener.html) und öffnen Sie sie in Ihrem Browser.
Es ist nur eine Kopie des einfachen Beispiel für zufällige Farben, mit dem wir bereits gespielt haben. Ändern Sie nun nacheinander `click` zu den folgenden verschiedenen Werten und beobachten Sie die Ergebnisse im Beispiel:

- [`focus`](/de/docs/Web/API/Element/focus_event) und [`blur`](/de/docs/Web/API/Element/blur_event) — Die Farbe ändert sich, wenn die Schaltfläche fokussiert oder defokussiert wird; versuchen Sie, die Tab-Taste zu drücken, um die Schaltfläche zu fokussieren, und drücken Sie die Tab-Taste erneut, um den Fokus von der Schaltfläche zu entfernen.
  Diese werden häufig verwendet, um Informationen darüber anzuzeigen, wie man Formularfelder ausfüllt, wenn diese fokussiert sind, oder um eine Fehlermeldung anzuzeigen, wenn ein Formularfeld mit einem falschen Wert gefüllt ist.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event) — Die Farbe ändert sich nur, wenn die Schaltfläche doppelt geklickt wird.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`mouseout`](/de/docs/Web/API/Element/mouseout_event) — Die Farbe ändert sich, wenn der Mauszeiger über die Schaltfläche schwebt oder wenn der Zeiger die Schaltfläche verlässt.

Einige Events, wie zum Beispiel `click`, sind auf nahezu jedem Element verfügbar. Andere sind spezifischer und nur in bestimmten Situationen nützlich: zum Beispiel ist das [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Event nur auf einigen Elementen verfügbar, wie {{htmlelement("video")}}.

### Entfernen von Listeners

Wenn Sie einen Event-Handler mit `addEventListener()` hinzugefügt haben, können Sie ihn mit der [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)-Methode wieder entfernen. Zum Beispiel würde dies den `changeBackground()`-Event-Handler entfernen:

```js
btn.removeEventListener("click", changeBackground);
```

Event-Handler können auch entfernt werden, indem ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) an [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) übergeben und dann [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller, der das `AbortSignal` besitzt, später aufgerufen wird.
Zum Beispiel, um einen Event-Handler hinzuzufügen, den wir mit einem `AbortSignal` entfernen können:

```js-nolint
const controller = new AbortController();

btn.addEventListener("click",
  () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal } // pass an AbortSignal to this handler
);
```

Dann kann der oben erstellte Event-Handler wie folgt entfernt werden:

```js
controller.abort(); // removes any/all event handlers associated with this controller
```

Bei einfachen, kleinen Programmen ist das Bereinigen alter, ungenutzter Event-Handler nicht notwendig, aber bei größeren, komplexeren Programmen kann dies die Effizienz verbessern.
Außerdem ermöglicht das Entfernen von Event-Handlern, dass Sie bei derselben Schaltfläche in unterschiedlichen Umgebungen unterschiedliche Aktionen ausführen können: Alles, was Sie tun müssen, ist, die Handler hinzuzufügen oder zu entfernen.

### Hinzufügen mehrerer Listener für ein einzelnes Event

Durch mehrmaliges Aufrufen von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mit unterschiedlichen Handlern können Sie mehrere Handler für ein einzelnes Event haben:

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

Beide Funktionen werden jetzt ausgeführt, wenn das Element geklickt wird.

### Mehr erfahren

Es gibt weitere leistungsstarke Funktionen und Optionen mit `addEventListener()`.

Diese liegen etwas außerhalb des Umfangs dieses Artikels, aber wenn Sie sie lesen möchten, besuchen Sie die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) und [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) Referenzseiten.

## Andere Event-Listener-Mechanismen

Wir empfehlen, `addEventListener()` zu verwenden, um Event-Handler zu registrieren. Es ist die mächtigste Methode und skaliert am besten mit komplexeren Programmen. Es gibt jedoch zwei weitere Möglichkeiten, Event-Handler zu registrieren, die Sie möglicherweise sehen werden: _Event-Handler-Eigenschaften_ und _Inline-Event-Handler_.

### Event-Handler-Eigenschaften

Objekte (wie Schaltflächen), die Events auslösen können, haben normalerweise auch Eigenschaften, deren Name `on` gefolgt vom Namen des Events ist. Beispielsweise haben Elemente eine Eigenschaft `onclick`.
Dies wird als _Event-Handler-Eigenschaft_ bezeichnet. Um das Event zu hören, können Sie der Eigenschaft die Handler-Funktion zuweisen.

Beispielsweise könnten wir das Beispiel mit der zufälligen Farbe so umschreiben:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.onclick = () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
};
```

Sie können die Handler-Eigenschaft auch auf eine benannte Funktion setzen:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;
```

Mit Event-Handler-Eigenschaften können Sie nicht mehr als einen Handler für ein einzelnes Event hinzufügen. Zum Beispiel können Sie `addEventListener('click', handler)` mit unterschiedlichen Funktionen, die im zweiten Argument angegeben sind, mehrfach auf ein Element aufrufen:

```js
element.addEventListener("click", function1);
element.addEventListener("click", function2);
```

Dies ist mit Event-Handler-Eigenschaften unmöglich, da nachfolgende Versuche, die Eigenschaft zu setzen, frühere überschreiben werden:

```js
element.onclick = function1;
element.onclick = function2;
```

### Inline-Event-Handler — verwenden Sie diese nicht

Sie könnten auch auf ein Muster wie dieses in Ihrem Code stoßen:

```html
<button onclick="bgChange()">Press me</button>
```

```js
function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
```

Die früheste Methode zum Registrieren von Event-Handlern, die im Web zu finden ist, beinhaltete [_Event-Handler-HTML-Attribute_](/de/docs/Web/HTML/Attributes#event_handler_attributes) (oder _Inline-Event-Handler_) wie das oben gezeigte — der Attributwert ist wörtlich der JavaScript-Code, den Sie ausführen möchten, wenn das Event auftritt.
Das obige Beispiel ruft eine Funktion auf, die innerhalb eines {{htmlelement("script")}}-Elements auf derselben Seite definiert ist, Sie könnten jedoch auch JavaScript direkt in das Attribut einfügen, zum Beispiel:

```html
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

Sie können HTML-Attribut-Äquivalente für viele der Event-Handler-Eigenschaften finden; jedoch sollten Sie diese nicht verwenden — sie werden als schlechte Praxis angesehen.
Es mag einfach erscheinen, ein Event-Handler-Attribut zu verwenden, wenn Sie etwas sehr Schnelles tun, aber sie werden schnell unüberschaubar und ineffizient.

Zum einen ist es keine gute Idee, Ihr HTML und Ihr JavaScript zu vermischen, da es schwer lesbar wird. Es ist eine gute Praxis, Ihr JavaScript getrennt zu halten, und wenn es in einer separaten Datei ist, können Sie es auf mehrere HTML-Dokumente anwenden.

Selbst in einer einzelnen Datei sind Inline-Event-Handler keine gute Idee.
Ein Button ist in Ordnung, aber was, wenn Sie 100 Buttons hätten? Sie müssten 100 Attribute in die Datei einfügen; es würde schnell zu einem Wartungsalbtraum werden.
Mit JavaScript könnten Sie leicht eine Event-Handler-Funktion zu allen Buttons auf der Seite hinzufügen, egal wie viele es gibt, indem Sie etwas wie dies verwenden:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}
```

Abschließend: Viele gängige Server-Konfigurationen werden Inline-JavaScript aus Sicherheitsgründen nicht zulassen.

**Sie sollten nie die HTML Event-Handler-Attribute verwenden** — diese sind veraltet, und ihre Verwendung wird als schlechte Praxis angesehen.

## Event-Objekte

Manchmal sehen Sie innerhalb einer Event-Handler-Funktion einen Parameter mit einem Namen wie `event`, `evt` oder `e`.
Dies wird als **Event-Objekt** bezeichnet, und es wird automatisch an Event-Handler übergeben, um zusätzliche Funktionen und Informationen bereitzustellen.
Zum Beispiel, schreiben wir unser zufälliges Farb-Beispiel noch einmal leicht um:

```js
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);
```

> [!NOTE]
> Sie können den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-eventobject.html) für dieses Beispiel auf GitHub finden (auch [sehen Sie es live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)).

Hier sehen Sie, dass wir ein Event-Objekt, **e**, in die Funktion einschließen, und in der Funktion einen Hintergrundfarbenstil auf `e.target` setzen — das ist der Button selbst.
Die `target`-Eigenschaft des Event-Objekts ist immer ein Verweis auf das Element, auf dem das Event aufgetreten ist.
In diesem Beispiel setzen wir also eine zufällige Hintergrundfarbe auf den Button, nicht auf die Seite.

> [!NOTE]
> Sie können jeden beliebigen Namen für das Event-Objekt verwenden — Sie müssen nur einen Namen wählen, den Sie dann verwenden können, um darauf innerhalb der Event-Handler-Funktion zu verweisen.
> `e`/`evt`/`event` wird von Entwicklern am häufigsten verwendet, weil sie kurz und leicht zu merken sind.
> Es ist immer gut, konsistent zu sein — mit sich selbst und, wenn möglich, mit anderen.

### Zusätzliche Eigenschaften von Event-Objekten

Die meisten Event-Objekte haben eine standardmäßige Liste von Eigenschaften und Methoden, die auf dem Event-Objekt verfügbar sind; siehe die [`Event`](/de/docs/Web/API/Event) Objekt-Referenz für eine vollständige Liste.

Einige Event-Objekte fügen zusätzliche Eigenschaften hinzu, die für den jeweiligen Event-Typ relevant sind. Zum Beispiel feuert das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Event, wenn der Benutzer eine Taste drückt. Sein Event-Objekt ist ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent), das ein spezialisiertes `Event`-Objekt mit einer `key`-Eigenschaft ist, die Ihnen mitteilt, welche Taste gedrückt wurde:

```html
<input id="textBox" type="text" />
<div id="output"></div>
```

```js
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});
```

```css hidden
div {
  margin: 0.5rem 0;
}
```

Versuchen Sie, in das Textfeld zu tippen und sehen Sie die Ausgabe:

{{EmbedLiveSample("Extra_properties_of_event_objects", 100, 100)}}

## Verhindern des Standardverhaltens

Manchmal stoßen Sie auf eine Situation, in der Sie verhindern möchten, dass ein Event das tut, was es standardmäßig tut. Das häufigste Beispiel ist das eines Webformulars, z. B. eines benutzerdefinierten Registrierungsformulars. Wenn Sie die Daten ausfüllen und auf die Schaltfläche zum Absenden klicken, ist das natürliche Verhalten, dass die Daten an eine angegebene Seite auf dem Server zur Verarbeitung gesendet werden, und der Browser zu einer Art "Erfolgsmeldung"-Seite umgeleitet wird (oder dieselbe Seite, wenn keine andere angegeben ist).

Das Problem tritt auf, wenn der Benutzer die Daten nicht korrekt übermittelt hat — als Entwickler möchten Sie die Übermittlung an den Server verhindern und eine Fehlermeldung anzeigen, die erklärt, was falsch ist und was getan werden muss, um das Problem zu beheben.
Einige Browser unterstützen automatische Validierungsfunktionen für Formulardaten, aber da viele dies nicht tun, wird empfohlen, sich nicht darauf zu verlassen und Ihre eigenen Validierungsprüfungen zu implementieren.
Lassen Sie uns ein einfaches Beispiel betrachten.

Zuerst ein einfaches HTML-Formular, das verlangt, dass Sie Ihren Vor- und Nachnamen eingeben:

```html
<form>
  <div>
    <label for="fname">First name: </label>
    <input id="fname" type="text" />
  </div>
  <div>
    <label for="lname">Last name: </label>
    <input id="lname" type="text" />
  </div>
  <div>
    <input id="submit" type="submit" />
  </div>
</form>
<p></p>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

Nun ein wenig JavaScript — hier implementieren wir eine sehr einfache Prüfung innerhalb eines Handlers für das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Event (das submit-Event wird bei einem Formular ausgelöst, wenn es abgeschickt wird), die testet, ob die Textfelder leer sind. Wenn sie es sind, rufen wir die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Funktion auf dem Event-Objekt auf — die die Formularübermittlung stoppt — und zeigen dann eine Fehlermeldung im Absatz unter unserem Formular an, um dem Benutzer zu sagen, was nicht stimmt:

```js
const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "You need to fill in both names!";
  }
});
```

Offensichtlich ist dies eine ziemlich schwache Formularvalidierung — es würde den Benutzer nicht daran hindern, das Formular mit Leerzeichen oder Zahlen in den Feldern zu validieren, zum Beispiel — aber es ist in Ordnung für Beispielzwecke. Die Ausgabe ist wie folgt:

{{ EmbedLiveSample('Preventing_default_behavior', '100%', 180, "", "") }}

> [!NOTE]
> Für den vollständigen Quellcode siehe [preventdefault-validation.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/preventdefault-validation.html) (sehen Sie es auch [live hier laufen](https://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html)).

## Es sind nicht nur Webseiten

Events sind nicht einzigartig für JavaScript — die meisten Programmiersprachen haben ein gewisses Event-Modell, und die Funktionsweise des Modells unterscheidet sich oft von JavaScripts Ansatz. Tatsächlich unterscheidet sich das Event-Modell in JavaScript für Webseiten von dem Event-Modell für JavaScript, wie es in anderen Umgebungen verwendet wird.

Zum Beispiel ist [Node.js](/de/docs/Learn/Server-side/Express_Nodejs) eine sehr beliebte JavaScript-Laufzeitumgebung, die Entwicklern ermöglicht, JavaScript zu verwenden, um Netzwerk- und serverseitige Anwendungen zu erstellen. Das [Node.js Event-Modell](https://nodejs.org/api/events.html) stützt sich auf Listener, um auf Events zu hören, und Emitter, um Events periodisch zu emittieren — es klingt nicht so anders, aber der Code ist ziemlich anders und verwendet Funktionen wie `on()`, um einen Event-Listener zu registrieren, und `once()`, um einen Event-Listener zu registrieren, der sich abmeldet, nachdem er einmal gelaufen ist. Die [HTTP connect event docs](https://nodejs.org/api/http.html#event-connect) bieten ein gutes Beispiel.

Sie können JavaScript auch verwenden, um browserübergreifende Add-Ons — Funktionsverbesserungen des Browsers — mit einer Technologie namens [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) zu erstellen. Das Event-Modell ähnelt dem Web-Events-Modell, ist aber etwas anders — die Eigenschaften der Event-Listener werden in [Camel Case](/de/docs/Glossary/camel_case) geschrieben (z.B. `onMessage` anstelle von `onmessage`) und müssen mit der `addListener`-Funktion kombiniert werden. Siehe die [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples)-Seite für ein Beispiel.

Zu diesem Zeitpunkt Ihres Lernens müssen Sie nichts über andere solche Umgebungen verstehen; wir wollten lediglich klarstellen, dass Events in verschiedenen Programmierumgebungen unterschiedlich sein können.

## Fazit

In diesem Kapitel haben wir gelernt, was Events sind, wie man auf Events hört und wie man darauf reagiert.

Sie haben inzwischen wahrscheinlich erkannt, dass Elemente in einer Webseite in andere Elemente eingebettet sein können. Zum Beispiel haben wir im [Verhindern des Standardverhaltens](#verhindern_des_standardverhaltens)-Beispiel einige Textfelder, die in {{htmlelement("div")}}-Elementen platziert sind, die wiederum in ein {{htmlelement("form")}}-Element platziert sind. Was passiert, wenn ein Klick-Event-Listener an das `<form>`-Element angehängt wird und der Benutzer in eines der Textfelder klickt? Dies nennt man _Event-Bubbling_ und ist das Thema des nächsten Kapitels.

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Event_bubbling", "Learn/JavaScript/Building_blocks")}}

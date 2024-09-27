---
title: Einführung in Events
slug: Learn/JavaScript/Building_blocks/Events
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Event_bubbling", "Learn/JavaScript/Building_blocks")}}

Events sind Vorgänge, die im System, das Sie programmieren, auftreten und über die das System Sie informiert, damit Ihr Code darauf reagieren kann.

Zum Beispiel, wenn der Benutzer auf einer Webseite einen Button anklickt, möchten Sie möglicherweise auf diese Aktion reagieren, indem Sie ein Informationsfenster anzeigen.
In diesem Artikel besprechen wir einige wichtige Konzepte rund um Events und betrachten, wie sie in Browsern funktionieren.
Dies wird keine erschöpfende Studie sein; nur das, was Sie zu diesem Zeitpunkt wissen müssen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von HTML, CSS und
        <a href="/de/docs/Learn/JavaScript/First_steps"
          >JavaScript-Erste Schritte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das grundlegende Verständnis der Theorie von Events, ihrer Funktionsweise in
        Browsern und der Unterschiede von Events in verschiedenen Programmierumgebungen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Event?

Events sind Vorgänge, die im System, das Sie programmieren, passieren — das System erzeugt (oder "löst") ein Signal irgendeiner Art, wenn ein Event auftritt, und bietet einen Mechanismus, durch den automatisch eine Aktion ausgeführt werden kann (d. h. ein Code wird ausgeführt), wenn das Event auftritt.
Events werden im Browserfenster ausgelöst und tendieren dazu, an ein spezifisches Objekt gebunden zu sein, das sich darin befindet. Dies könnte ein einzelnes Element, ein Satz von Elementen, das im aktuellen Tab geladene HTML-Dokument oder das gesamte Browserfenster sein.
Es gibt viele verschiedene Arten von Events, die auftreten können.

Zum Beispiel:

- Der Benutzer wählt, klickt oder bewegt den Cursor über ein bestimmtes Element.
- Der Benutzer wählt eine Taste auf der Tastatur.
- Der Benutzer ändert die Größe oder schließt das Browserfenster.
- Eine Webseite wird fertig geladen.
- Ein Formular wird abgeschickt.
- Ein Video wird abgespielt, pausiert oder endet.
- Ein Fehler tritt auf.

Sie können daraus (und durch einen Blick auf die MDN [Event-Referenz](/de/docs/Web/Events)) zu dem Schluss kommen, dass es **viele** Events gibt, die ausgelöst werden können.

Um auf ein Event zu reagieren, fügen Sie diesem einen **Event-Handler** hinzu. Dies ist ein Codeblock (in der Regel eine von Ihnen als Programmierer erstellte JavaScript-Funktion), die ausgeführt wird, wenn das Event ausgelöst wird.
Wenn ein solcher Codeblock definiert wird, um auf ein Event zu reagieren, sagen wir, dass wir einen **Event-Handler registrieren**.
Hinweis: Event-Handler werden manchmal auch als **Event-Listener** bezeichnet — sie sind für unsere Zwecke im Wesentlichen austauschbar, obwohl sie genau genommen zusammenarbeiten.
Der Listener wartet darauf, dass das Event eintritt, und der Handler ist der Code, der als Reaktion darauf ausgeführt wird.

> [!NOTE]
> Web-Events sind kein Bestandteil der Kern-JavaScript-Sprache — sie sind Teil der in den Browser integrierten APIs definiert.

### Ein Beispiel: Ein Klick-Event behandeln

Im folgenden Beispiel haben wir auf der Seite einen einzigen {{htmlelement("button")}}:

```html
<button>Change color</button>
```

```css hidden
button {
  margin: 10px;
}
```

Dann haben wir ein wenig JavaScript. Wir werden dies im nächsten Abschnitt detaillierter betrachten, aber jetzt können wir einfach sagen: Es fügt dem `"click"`-Event des Buttons einen Event-Handler hinzu, und der Handler reagiert auf das Event, indem er die Hintergrundfarbe der Seite auf eine zufällige Farbe setzt:

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

Das Beispiel-Output sieht wie folgt aus. Versuchen Sie, auf den Button zu klicken:

{{ EmbedLiveSample('Ein Beispiel: Ein Klick-Event behandeln', '100%', 200, "", "") }}

## Verwendung von addEventListener()

Wie wir im letzten Beispiel gesehen haben, haben Objekte, die Events auslösen können, eine [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode, und dies ist der empfohlene Mechanismus zum Hinzufügen von Event-Handlern.

Lassen Sie uns den Code aus dem letzten Beispiel genauer betrachten:

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

Das HTML-{{HTMLElement("button")}}-Element wird ein Event auslösen, wenn der Benutzer auf den Button klickt. Es definiert eine `addEventListener()`-Funktion, die wir hier aufrufen. Wir übergeben zwei Parameter:

- den String `"click"`, um anzugeben, dass wir auf das Klick-Event hören möchten. Buttons können viele andere Events auslösen, wie zum Beispiel [`"mouseover"`](/de/docs/Web/API/Element/mouseover_event), wenn der Benutzer die Maus über den Button bewegt, oder [`"keydown"`](/de/docs/Web/API/Element/keydown_event), wenn der Benutzer eine Taste drückt und der Button fokussiert ist.
- eine Funktion, die aufgerufen wird, wenn das Event eintritt. In unserem Fall erzeugt die Funktion eine zufällige RGB-Farbe und setzt die [`background-color`](/de/docs/Web/CSS/background-color) der Seite [`<body>`](/de/docs/Web/HTML/Element/body) auf diese Farbe.

Es ist in Ordnung, die Handler-Funktion als separate benannte Funktion zu erstellen, wie dies:

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

### Auf andere Events hören

Es gibt viele verschiedene Events, die ein Button-Element auslösen kann. Lassen Sie uns experimentieren.

Zuerst erstellen Sie eine lokale Kopie von [random-color-addeventlistener.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-addeventlistener.html) und öffnen Sie sie in Ihrem Browser.
Es ist nur eine Kopie des einfachen zufälligen Farbbeispiels, mit dem wir bereits gespielt haben. Ändern Sie nun `click` nacheinander in die folgenden verschiedenen Werte und beobachten Sie die Ergebnisse im Beispiel:

- [`focus`](/de/docs/Web/API/Element/focus_event) und [`blur`](/de/docs/Web/API/Element/blur_event) — Die Farbe ändert sich, wenn der Button fokussiert und defokussiert wird; versuchen Sie die Tabulatortaste zu drücken, um den Button zu fokussieren, und drücken Sie die Tabulatortaste erneut, um den Button zu defokussieren.
  Diese werden häufig verwendet, um Informationen zur Ausfüllung von Formularfeldern anzuzeigen, wenn sie fokussiert sind, oder um eine Fehlermeldung anzuzeigen, wenn ein Formularfeld mit einem falschen Wert ausgefüllt ist.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event) — Die Farbe ändert sich nur, wenn der Button doppelt angeklickt wird.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`mouseout`](/de/docs/Web/API/Element/mouseout_event) — Die Farbe ändert sich, wenn der Mauszeiger über den Button schwebt oder wenn der Zeiger vom Button weg bewegt wird.

Einige Events, wie `click`, sind auf nahezu jedem Element verfügbar. Andere sind spezifischer und nur in bestimmten Situationen nützlich: Zum Beispiel ist das [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Event nur auf einigen Elementen verfügbar, wie {{htmlelement("video")}}.

### Entfernen von Listenern

Wenn Sie einen Event-Handler mit `addEventListener()` hinzugefügt haben, können Sie ihn wieder entfernen, indem Sie die [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)-Methode verwenden. Zum Beispiel würde dies den `changeBackground()`-Event-Handler entfernen:

```js
btn.removeEventListener("click", changeBackground);
```

Event-Handler können auch entfernt werden, indem ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) an [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) übergeben und später [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller aufgerufen wird, der das `AbortSignal` besitzt.
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

Dann kann der durch den obigen Code erstellte Event-Handler so entfernt werden:

```js
controller.abort(); // removes any/all event handlers associated with this controller
```

Für einfache, kleine Programme ist das Aufräumen alter, ungenutzter Event-Handler nicht notwendig, aber für größere, komplexe Programme kann es die Effizienz verbessern.
Auch erlaubt Ihnen die Möglichkeit, Event-Handler zu entfernen, denselben Button in verschiedenen Umständen verschiedene Aktionen ausführen zu lassen: Alles, was Sie tun müssen, ist, Handler hinzuzufügen oder zu entfernen.

### Hinzufügen mehrerer Listener für ein einzelnes Event

Indem Sie mehrmals [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufrufen und unterschiedliche Handler bereitstellen, können Sie mehrere Handler für ein einzelnes Event haben:

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

Beide Funktionen würden jetzt ausgeführt, wenn das Element angeklickt wird.

### Mehr erfahren

Es gibt andere leistungsstarke Funktionen und Optionen, die mit `addEventListener()` verfügbar sind.

Diese sind ein wenig außerhalb des Rahmens dieses Artikels, aber wenn Sie sie lesen möchten, besuchen Sie die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)- und [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)-Referenzseiten.

## Andere Event-Listener-Mechanismen

Wir empfehlen, `addEventListener()` zu verwenden, um Event-Handler zu registrieren. Es ist die leistungsstärkste Methode und skaliert am besten mit komplexeren Programmen. Es gibt jedoch zwei weitere Möglichkeiten, Event-Handler zu registrieren, die Sie möglicherweise sehen: _Event-Handler-Eigenschaften_ und _inline Event-Handler_.

### Event-Handler-Eigenschaften

Objekte (wie Buttons), die Events auslösen können, haben normalerweise auch Eigenschaften, deren Name `on` gefolgt von dem Namen des Events ist. Zum Beispiel haben Elemente eine Eigenschaft `onclick`.
Dies wird als _Event-Handler-Eigenschaft_ bezeichnet. Um auf das Event zu hören, können Sie die Handler-Funktion der Eigenschaft zuweisen.

Zum Beispiel könnten wir das zufällige Farbbeispiel so umschreiben:

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

Sie können die Handler-Eigenschaft auch einer benannten Funktion zuweisen:

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

Bei Event-Handler-Eigenschaften können Sie nicht mehr als einen Handler für ein einzelnes Event hinzufügen. Zum Beispiel können Sie `addEventListener('click', handler)` auf einem Element mehrmals mit unterschiedlichen in dem zweiten Argument spezifizierten Funktionen aufrufen:

```js
element.addEventListener("click", function1);
element.addEventListener("click", function2);
```

Dies ist bei Event-Handler-Eigenschaften unmöglich, da nachfolgende Versuche, die Eigenschaft zu setzen, frühere überschreiben:

```js
element.onclick = function1;
element.onclick = function2;
```

### Inline Event-Handler — verwenden Sie diese nicht

Sie könnten auch ein Muster wie dieses in Ihrem Code sehen:

```html
<button onclick="bgChange()">Press me</button>
```

```js
function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
```

Die früheste Methode, Event-Handler im Web zu registrieren, verwendete [_Event-Handler-HTML-Attribute_](/de/docs/Web/HTML/Attributes#event_handler_attributes) (oder _inline Event-Handler_) wie das oben gezeigte — der Attributwert ist buchstäblich der JavaScript-Code, den Sie ausführen möchten, wenn das Event auftritt.
Das obige Beispiel ruft eine im selben Dokument innerhalb eines {{htmlelement("script")}}-Elements definierte Funktion auf, aber Sie könnten auch JavaScript direkt innerhalb des Attributs einfügen, zum Beispiel:

```html
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

Sie können HTML-Attribut-Äquivalente für viele der Event-Handler-Eigenschaften finden; Sie sollten diese jedoch nicht verwenden — sie gelten als schlechte Praxis.
Es mag einfach erscheinen, ein Event-Handler-Attribut zu verwenden, wenn Sie etwas wirklich Schnelles tun, aber sie werden schnell unhandlich und ineffizient.

Zunächst ist es keine gute Idee, Ihr HTML und Ihr JavaScript zu vermischen, da es schwer lesbar wird. Es ist eine gute Praxis, Ihr JavaScript getrennt zu halten, und wenn es in einer separaten Datei ist, können Sie es auf mehrere HTML-Dokumente anwenden.

Selbst in einer einzigen Datei sind Inline-Event-Handler keine gute Idee.
Ein Button ist okay, aber was ist, wenn Sie 100 Buttons hätten? Sie müssten 100 Attribute zur Datei hinzufügen; es würde schnell zu einem Wartungsalbtraum.
Mit JavaScript könnten Sie leicht eine Event-Handler-Funktion zu allen Buttons auf der Seite hinzufügen, unabhängig davon, wie viele es waren, indem Sie etwas wie dies verwenden:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}
```

Schließlich werden in vielen gängigen Server-Konfigurationen Inline-JavaScript als Sicherheitsmaßnahme nicht erlaubt.

**Sie sollten niemals die HTML-Event-Handler-Attribute verwenden** — sie sind veraltet und ihre Nutzung ist schlechte Praxis.

## Event-Objekte

Manchmal sehen Sie innerhalb einer Event-Handler-Funktion einen Parameter, der mit einem Namen wie `event`, `evt` oder `e` angegeben ist.
Dies wird das **Event-Objekt** genannt, und es wird automatisch an Event-Handler übergeben, um zusätzliche Funktionen und Informationen bereitzustellen.
Zum Beispiel, lassen Sie uns unser zufälliges Farbbeispiel noch einmal leicht umschreiben:

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
> Sie können den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-eventobject.html) für dieses Beispiel auf GitHub finden (siehe auch das [Live-Beispiel](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)).

Hier können Sie sehen, dass wir ein Event-Objekt, **e**, in die Funktion einschließen und in der Funktion einen Hintergrundfarbenstil auf `e.target` setzen — der der Button selbst ist.
Die `target`-Eigenschaft des Event-Objekts ist immer ein Verweis auf das Element, auf dem das Event auftrat.
In diesem Beispiel setzen wir also eine zufällige Hintergrundfarbe auf den Button, nicht auf die Seite.

> [!NOTE]
> Sie können für das Event-Objekt jeden beliebigen Namen verwenden — Sie müssen lediglich einen Namen wählen, den Sie dann im Event-Handler verwenden können, um darauf zuzugreifen.
> `e`/`evt`/`event` wird am häufigsten von Entwicklern verwendet, weil sie kurz und leicht zu merken sind.
> Es ist immer gut, konsistent zu sein — mit sich selbst und nach Möglichkeit auch mit anderen.

### Zusätzliche Eigenschaften von Event-Objekten

Die meisten Event-Objekte haben einen Standardset an Eigenschaften und Methoden, die auf dem Event-Objekt verfügbar sind; sehen Sie im [`Event`](/de/docs/Web/API/Event)-Objekt-Referenz für eine vollständige Liste nach.

Einige Event-Objekte fügen zusätzliche Eigenschaften hinzu, die spezifisch für diese Art von Event sind. Zum Beispiel wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Event ausgelöst, wenn der Benutzer eine Taste drückt. Sein Event-Objekt ist ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent), welches ein spezialisierter `Event`-Objekt mit einer `key`-Eigenschaft ist, die angibt, welche Taste gedrückt wurde:

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

Versuchen Sie, in das Textfeld einzugeben und sehen Sie sich die Ausgabe an:

{{EmbedLiveSample("Zusätzliche Eigenschaften von Event-Objekten", 100, 100)}}

## Standardverhalten verhindern

Manchmal stoßen Sie auf eine Situation, in der Sie verhindern möchten, dass ein Event das tut, was es standardmäßig tut.
Das häufigste Beispiel ist das eines Webformulars, zum Beispiel eines benutzerdefinierten Registrierungsformulars.
Wenn Sie die Details ausfüllen und auf die Schaltfläche zum Absenden klicken, ist das natürliche Verhalten, dass die Daten an eine bestimmte Seite auf dem Server zur Verarbeitung übermittelt werden und der Browser auf eine Art "Erfolgsmeldung"-Seite umgeleitet wird (oder dieselbe Seite, wenn keine andere angegeben ist).

Das Problem entsteht, wenn der Benutzer die Daten nicht korrekt übermittelt hat — als Entwickler möchten Sie die Übermittlung an den Server verhindern und eine Fehlermeldung geben, die besagt, was falsch ist und was getan werden muss, um es richtigzustellen.
Einige Browser unterstützen automatische Formulardaten-Validierungsfunktionen, aber da viele dies nicht tun, wird Ihnen empfohlen, nicht darauf zu vertrauen und Ihre eigenen Validierungsprüfungen einzuführen.
Lassen Sie uns ein einfaches Beispiel betrachten.

Zuerst ein einfaches HTML-Formular, das Sie auffordert, Ihren Vor- und Nachnamen einzugeben:

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

Nun etwas JavaScript — hier führen wir eine sehr einfache Prüfung in einem Handler für das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Event (das Submit-Event wird auf einem Formular ausgelöst, wenn es übermittelt wird) durch, die testet, ob die Textfelder leer sind.
Wenn sie es sind, rufen wir die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Funktion auf dem Event-Objekt auf — die die Formularübermittlung stoppt — und zeigen dann eine Fehlermeldung im Absatz unter unserem Formular an, um dem Benutzer mitzuteilen, was falsch ist:

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

Offensichtlich ist dies eine ziemlich schwache Formularvalidierung — sie würde den Benutzer nicht daran hindern, das Formular mit Leerzeichen oder Zahlen in die Felder zu validieren, zum Beispiel — aber es ist in Ordnung zu Beispielzwecken.
Die Ausgabe ist wie folgt:

{{ EmbedLiveSample('Standardverhalten verhindern', '100%', 180, "", "") }}

> [!NOTE]
> Für den vollständigen Quellcode siehe [preventdefault-validation.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/preventdefault-validation.html) (auch hier das [Live-Beispiel](https://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html)).

## Es sind nicht nur Webseiten

Events sind nicht einzigartig für JavaScript — die meisten Programmiersprachen haben eine Art von Event-Modell, und die Art, wie das Modell funktioniert, unterscheidet sich oft von JavaScript.
Tatsächlich unterscheidet sich das Event-Modell in JavaScript für Webseiten vom Event-Modell für JavaScript, das in anderen Umgebungen verwendet wird.

Zum Beispiel ist [Node.js](/de/docs/Learn/Server-side/Express_Nodejs) ein sehr beliebtes JavaScript-Laufzeitsystem, das Entwicklern ermöglicht, JavaScript zum Aufbau von Netzwerk- und serverseitigen Anwendungen zu nutzen.
Das [Node.js-Event-Modell](https://nodejs.org/api/events.html) basiert auf Listenern, die auf Events hören, und Emittern, die regelmäßig Events aussenden — es klingt nicht so anders, aber der Code ist ziemlich anders, wobei Funktionen wie `on()` verwendet werden, um einen Event-Listener zu registrieren, und `once()`, um einen Event-Listener zu registrieren, der sich nach einmaliger Ausführung abmeldet.
Die [HTTP connect event docs](https://nodejs.org/api/http.html#event-connect) bieten ein gutes Beispiel.

Sie können JavaScript auch verwenden, um browserübergreifende Add-ons zu erstellen — Browserfunktionalitätserweiterungen — mit einer Technologie namens [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions).
Das Event-Modell ist dem Web-Events-Modell ähnlich, aber ein wenig anders — die Eigenschaften von Event-Handlern werden in [Camel Case](/de/docs/Glossary/camel_case) geschrieben (wie `onMessage` statt `onmessage`) und müssen mit der `addListener`-Funktion kombiniert werden.
Sehen Sie sich die [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples)-Seite für ein Beispiel an.

Sie müssen an diesem Punkt in Ihrem Lernprozess nichts über andere solche Umgebungen verstehen; wir wollten nur klarstellen, dass sich Events in verschiedenen Programmierumgebungen unterscheiden können.

## Fazit

In diesem Kapitel haben wir gelernt, was Events sind, wie man auf Events hört und wie man darauf reagiert.

Sie haben inzwischen gesehen, dass Elemente in einer Webseite ineinander verschachtelt sein können. Zum Beispiel, im Beispiel [Standardverhalten verhindern](#standardverhalten_verhindern), haben wir einige Textfelder, die in {{htmlelement("div")}}-Elemente platziert werden, die wiederum in einem {{htmlelement("form")}}-Element platziert sind. Was passiert, wenn ein Klick-Event-Listener an das `<form>`-Element gebunden ist und der Benutzer in eines der Textfelder klickt? Dies nennt sich _Event-Bubbling_ und ist das Thema des nächsten Kapitels.

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Event_bubbling", "Learn/JavaScript/Building_blocks")}}

---
title: Einführung in Events
short-title: Events
slug: Learn_web_development/Core/Scripting/Events
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

Events sind Ereignisse, die im System, das Sie programmieren, passieren und über die das System Sie informiert, damit Ihr Code darauf reagieren kann.
Zum Beispiel, wenn der Benutzer auf einer Webseite auf einen Button klickt, möchten Sie möglicherweise auf diese Aktion reagieren, indem Sie ein Informationsfeld anzeigen.
In diesem Artikel besprechen wir einige wichtige Konzepte rund um Events und betrachten die Grundlagen, wie sie in Browsern funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, die in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Events sind — ein Signal, das vom Browser ausgelöst wird, wenn etwas Bedeutendes passiert, worauf der Entwickler mit einem Code reagieren kann.</li>
          <li>Einrichten von Event-Handlern mit <code>addEventListener()</code> (und <code>removeEventListener()</code>) und Event-Handler-Eigenschaften.</li>
          <li>Inline-Ereignis-Handler-Attribute und warum sie nicht verwendet werden sollten.</li>
          <li>Event-Objekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Event?

Events sind Ereignisse, die im System, das Sie programmieren, passieren — das System erzeugt (oder "löst") ein Signal irgendeiner Art aus, wenn ein Ereignis auftritt, und stellt einen Mechanismus bereit, durch den automatisch eine Aktion ausgeführt werden kann (d.h. ein Code ausgeführt wird), wenn das Ereignis auftritt.
Events werden im Browserfenster ausgelöst und sind in der Regel mit einem bestimmten Element verbunden, das sich darin befindet. Dies könnte ein einzelnes Element, eine Gruppe von Elementen, das im aktuellen Tab geladene HTML-Dokument oder das gesamte Browserfenster sein.
Es gibt viele verschiedene Arten von Events, die auftreten können.

Zum Beispiel:

- Der Benutzer wählt, klickt oder schwebt mit dem Cursor über ein bestimmtes Element.
- Der Benutzer drückt eine Taste auf der Tastatur.
- Der Benutzer ändert die Größe des Browserfensters oder schließt es.
- Eine Webseite wird vollständig geladen.
- Ein Formular wird übermittelt.
- Ein Video wird abgespielt, pausiert oder beendet.
- Ein Fehler tritt auf.

Sie können dieser Liste (und einem Blick auf die MDN [Event-Referenz](/de/docs/Web/Events)) entnehmen, dass **viele** Events ausgelöst werden können.

Um auf ein Event zu reagieren, hängen Sie einen **Event-Handler** daran an. Dies ist ein Codeblock (meist eine JavaScript-Funktion, die Sie als Programmierer erstellen), der läuft, wenn das Event ausgelöst wird.
Wenn ein solcher Codeblock definiert ist, um als Reaktion auf ein Event zu laufen, sagen wir, dass wir einen **Event-Handler registrieren**.
Hinweis: Event-Handler werden manchmal als **Event-Listener** bezeichnet — für unsere Zwecke sind sie ziemlich austauschbar, obwohl sie streng genommen zusammenarbeiten.
Der Listener wartet darauf, dass das Event passiert, und der Handler ist der Code, der als Reaktion darauf läuft.

> [!NOTE]
> Web-Ereignisse sind kein Bestandteil der Kern-JavaScript-Sprache — sie sind als Teil der im Browser eingebauten API definiert.

### Ein Beispiel: Umgang mit einem Klick-Event

Im folgenden Beispiel haben wir einen einzigen {{htmlelement("button")}} auf der Seite:

```html
<button>Change color</button>
```

```css hidden
button {
  margin: 10px;
}
```

Dann haben wir ein wenig JavaScript. Wir sehen uns dies im nächsten Abschnitt genauer an, aber jetzt können wir nur sagen: es fügt einen Event-Handler zum `"click"`-Event des Buttons hinzu, und der Handler reagiert auf das Event, indem er den Hintergrund der Seite auf eine zufällige Farbe setzt:

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

Die Ausgabe des Beispiels ist wie folgt. Versuchen Sie, den Button zu klicken:

{{ EmbedLiveSample('Ein Beispiel: Umgang mit einem Klick-Event', '100%', 200, "", "") }}

## Verwendung von addEventListener()

Wie wir im letzten Beispiel gesehen haben, haben Objekte, die Events auslösen können, eine [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode, und dies ist der empfohlene Mechanismus zum Hinzufügen von Event-Handlern.

Sehen wir uns den Code vom letzten Beispiel genauer an:

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

Das HTML-{{HTMLElement("button")}}-Element löst ein Event aus, wenn der Benutzer den Button klickt. Daher definiert es eine `addEventListener()`-Funktion, welche wir hier aufrufen. Wir übergeben zwei Parameter:

- den String `"click"`, um anzugeben, dass wir das Klick-Event hören wollen. Buttons können viele andere Events auslösen, wie z.B. [`"mouseover"`](/de/docs/Web/API/Element/mouseover_event), wenn der Benutzer seine Maus über den Button bewegt, oder [`"keydown"`](/de/docs/Web/API/Element/keydown_event), wenn der Benutzer eine Taste drückt und der Button fokussiert ist.
- eine Funktion, die aufgerufen wird, wenn das Event passiert. In unserem Fall generiert die Funktion eine zufällige RGB-Farbe und setzt die [`background-color`](/de/docs/Web/CSS/background-color) der Seite [`<body>`](/de/docs/Web/HTML/Reference/Elements/body) auf diese Farbe.

Es ist in Ordnung, die Handler-Funktion als separate benannte Funktion zu erstellen, wie folgt:

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

Es gibt viele verschiedene Events, die von einem Button-Element ausgelöst werden können. Lassen Sie uns experimentieren.

Machen Sie zuerst eine lokale Kopie von [random-color-addeventlistener.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-addeventlistener.html) und öffnen Sie sie in Ihrem Browser.
Es ist nur eine Kopie des einfachen Zufallsfarben-Beispiels, mit dem wir bereits gespielt haben. Versuchen Sie nun, `click` in die folgenden verschiedenen Werte zu ändern und beobachten Sie die Ergebnisse im Beispiel:

- [`focus`](/de/docs/Web/API/Element/focus_event) und [`blur`](/de/docs/Web/API/Element/blur_event) — Die Farbe ändert sich, wenn der Button fokussiert und nicht fokussiert wird; versuchen Sie, die Tabulatortaste zu drücken, um den Button zu fokussieren und die Tabulatortaste erneut zu drücken, um den Fokus vom Button zu entfernen.
  Diese werden oft verwendet, um Informationen über das Ausfüllen von Formularfeldern anzuzeigen, wenn sie fokussiert sind, oder um eine Fehlermeldung anzuzeigen, wenn ein Formularfeld mit einem inkorrekten Wert gefüllt ist.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event) — Die Farbe ändert sich nur, wenn der Button doppelt geklickt wird.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`mouseout`](/de/docs/Web/API/Element/mouseout_event) — Die Farbe ändert sich, wenn der Mauszeiger über den Button schwebt oder wenn der Zeiger den Button verlässt.

Einige Events wie `click` sind auf nahezu jedem Element verfügbar. Andere sind spezifischer und nur in bestimmten Situationen nützlich: zum Beispiel ist das [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Event nur auf einigen Elementen verfügbar, wie z.B. {{htmlelement("video")}}.

### Entfernen von Listeners

Wenn Sie einen Event-Handler mit `addEventListener()` hinzugefügt haben, können Sie ihn wieder mit der [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)-Methode entfernen. Zum Beispiel würde dies den `changeBackground()`-Event-Handler entfernen:

```js
btn.removeEventListener("click", changeBackground);
```

Event-Handler können auch entfernt werden, indem man ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zu [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) übergibt und dann später [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller aufruft, der das `AbortSignal` besitzt.
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

Für einfache, kleine Programme ist das Bereinigen von alten, nicht verwendeten Event-Handlern nicht notwendig, aber für größere, komplexere Programme kann es die Effizienz verbessern.
Auch die Möglichkeit, Event-Handler zu entfernen, erlaubt es Ihnen, denselben Button in unterschiedlichen Situationen unterschiedliche Aktionen ausführen zu lassen: Alles, was Sie tun müssen, ist, Handler hinzuzufügen oder zu entfernen.

### Hinzufügen von mehreren Listeners für ein einzelnes Event

Indem Sie mehr als einen Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mit verschiedenen Handlern machen, können Sie mehrere Handler für ein einzelnes Event haben:

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

Beide Funktionen würden jetzt ausgeführt, wenn das Element geklickt wird.

## Andere Mechanismen für Event-Handler

Wir empfehlen, `addEventListener()` zu verwenden, um Event-Handler zu registrieren. Es ist die mächtigste Methode und skaliert am besten mit komplexeren Programmen. Es gibt jedoch zwei andere Möglichkeiten zum Registrieren von Event-Handlern, die Sie möglicherweise sehen: _Event-Handler-Eigenschaften_ und _Inline-Event-Handler_.

### Event-Handler-Eigenschaften

Objekte (wie Buttons), die Events auslösen können, haben normalerweise auch Eigenschaften, deren Name mit `on` gefolgt vom Namen des Events beginnt. Zum Beispiel haben Elemente eine Eigenschaft `onclick`.
Dies wird als _Event-Handler-Eigenschaft_ bezeichnet. Um das Event zu hören, können Sie die Handler-Funktion der Eigenschaft zuweisen.

Zum Beispiel könnten wir das Zufallsfarben-Beispiel so umschreiben:

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

Sie können auch die Handler-Eigenschaft auf eine benannte Funktion setzen:

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

Mit Event-Handler-Eigenschaften können Sie nicht mehr als einen Handler für ein einzelnes Event hinzufügen. Zum Beispiel können Sie `addEventListener('click', handler)` für ein Element mehrfach aufrufen, mit verschiedenen Funktionen, die im zweiten Argument angegeben sind:

```js
element.addEventListener("click", function1);
element.addEventListener("click", function2);
```

Dies ist mit Event-Handler-Eigenschaften unmöglich, da alle nachfolgenden Versuche, die Eigenschaft zu setzen, die vorherigen überschreiben werden:

```js
element.onclick = function1;
element.onclick = function2;
```

### Inline-Event-Handler — verwenden Sie diese nicht

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

Die früheste Methode zur Registrierung von Event-Handlern im Web beinhaltete [_Event-Handler-HTML-Attribute_](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) (oder _Inline-Event-Handler_) wie das oben gezeigte — der Attributwert ist buchstäblich der JavaScript-Code, den Sie ausführen möchten, wenn das Event auftritt.
Das obige Beispiel ruft eine Funktion auf, die in einem {{htmlelement("script")}}-Element auf derselben Seite definiert ist, aber Sie könnten auch JavaScript direkt im Attribut einfügen, zum Beispiel:

```html
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

Sie können HTML-Attributäquivalente für viele der Event-Handler-Eigenschaften finden; jedoch sollten "sie diese nicht verwenden — sie gelten als schlechte Praxis.
Es mag einfach erscheinen, ein Event-Handler-Attribut zu verwenden, wenn Sie etwas wirklich Schnelles machen, aber sie werden schnell unüberschaubar und ineffizient.

Zum einen ist es keine gute Idee, Ihr HTML und Ihr JavaScript zu vermischen, da es schwer zu lesen wird. Ihr JavaScript getrennt zu halten, ist eine gute Praxis, und wenn es in einer separaten Datei ist, können Sie es auf mehrere HTML-Dokumente anwenden.

Selbst in einer einzelnen Datei sind Inline-Event-Handler keine gute Idee.
Ein Button ist in Ordnung, aber was, wenn Sie 100 Buttons hätten? Sie müssten 100 Attribute zur Datei hinzufügen; es würde sich schnell in einen Wartungsalbtraum verwandeln.
Mit JavaScript könnten Sie leicht eine Event-Handler-Funktion zu allen Buttons auf der Seite hinzufügen, egal wie viele es gab, indem Sie etwas wie Folgendes verwenden:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}
```

Schließlich werden viele gängige Serverkonfigurationen Inline-JavaScript als Sicherheitsmaßnahme nicht zulassen.

**Sie sollten niemals die HTML-Event-Handler-Attribute verwenden** — diese sind veraltet, und ihre Verwendung ist schlechte Praxis.

## Event-Objekte

Manchmal sehen Sie innerhalb einer Event-Handler-Funktion einen Parameter, der mit einem Namen wie `event`, `evt` oder `e` spezifiziert ist.
Dies nennt man das **Event-Objekt**, und es wird automatisch an Event-Handler übergeben, um zusätzliche Funktionen und Informationen bereitzustellen.
Zum Beispiel, lassen Sie uns unser Zufallsfarben-Beispiel leicht umschreiben:

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
> Sie können den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-eventobject.html) für dieses Beispiel auf GitHub finden (sehen Sie es auch [live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)).

Hier sehen Sie, dass wir ein Event-Objekt, **e**, in die Funktion einschließen, und in der Funktion eine Hintergrundfarbe auf `e.target` setzen — das ist der Button selbst.
Die `target`-Eigenschaft des Event-Objekts ist immer eine Referenz auf das Element, auf dem das Event aufgetreten ist.
Also setzen wir in diesem Beispiel eine zufällige Hintergrundfarbe auf den Button, nicht auf die Seite.

> [!NOTE]
> Sie können einen beliebigen Namen für das Event-Objekt verwenden — Sie müssen nur einen Namen wählen, den Sie dann verwenden können, um es innerhalb der Event-Handler-Funktion zu referenzieren.
> `e`/`evt`/`event` wird von Entwicklern am häufigsten verwendet, weil sie Kurz und leicht zu merken sind.
> Es ist immer gut, konsistent zu sein — mit sich selbst und wenn möglich auch mit anderen.

### Zusätzliche Eigenschaften von Event-Objekten

Die meisten Event-Objekte haben eine standardmäßig festgelegte Menge an Eigenschaften und Methoden, die im Event-Objekt verfügbar sind; sehen Sie die [`Event`](/de/docs/Web/API/Event)-Objektreferenz für eine vollständige Liste.

Einige Event-Objekte fügen zusätzliche Eigenschaften hinzu, die für diesen bestimmten Event-Typ relevant sind. Zum Beispiel tritt das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Event auf, wenn der Benutzer eine Taste drückt. Sein Event-Objekt ist ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent), das ein spezialisiertes `Event`-Objekt mit einer `key`-Eigenschaft ist, die Ihnen mitteilt, welche Taste gedrückt wurde:

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

Versuchen Sie, in das Textfeld zu tippen, und sehen Sie die Ausgabe:

{{EmbedLiveSample("Extra_properties_of_event_objects", 100, 100)}}

## Verhindern von Standardverhalten

Manchmal stoßen Sie auf eine Situation, in der Sie verhindern möchten, dass ein Event das tut, was es standardmäßig tut.
Das häufigste Beispiel ist das eines Webformulars, zum Beispiel eines benutzerdefinierten Registrierungsformulars.
Wenn Sie die Daten eingeben und den Absende-Button klicken, ist das natürliche Verhalten, dass die Daten an eine auf dem Server spezifizierte Seite zur Verarbeitung übermittelt werden und der Browser auf eine Art "Erfolgsmeldungs"-Seite umgeleitet wird (oder die gleiche Seite, wenn keine andere spezifiziert ist).

Das Problem tritt auf, wenn der Benutzer die Daten nicht korrekt eingereicht hat — als Entwickler möchten Sie die Übermittlung an den Server verhindern und eine Fehlermeldung anzeigen, die sagt, was falsch ist und was getan werden muss, um das Problem zu beheben.
Einige Browser unterstützen automatische Formular-Datenprüfungen, jedoch viele nicht, und deshalb wird empfohlen, sich nicht auf diese zu verlassen und eigene Validierungsprüfungen zu implementieren.
Lassen Sie uns ein Beispiel ansehen.

Zuerst ein einfaches HTML-Formular, das erfordert, dass Sie Ihren Vor- und Nachnamen eingeben:

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

Nun etwas JavaScript — hier implementieren wir eine sehr einfache Prüfung innerhalb eines Handlers für das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Event (das submit-Event wird auf einem Formular ausgelöst, wenn es übermittelt wird), das testet, ob die Textfelder leer sind.
Falls dies der Fall ist, rufen wir die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Funktion auf dem Event-Objekt auf — was die Formularübermittlung stoppt — und zeigen dann eine Fehlermeldung im Absatz unter unserem Formular an, um dem Benutzer zu sagen, was falsch ist:

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

Offensichtlich ist dies eine ziemlich schwache Formularvalidierung — es würde den Benutzer nicht daran hindern, das Formular mit Leerzeichen oder Zahlen in die Felder auszufüllen, zum Beispiel — aber es ist in Ordnung für Beispielzwecke.
Die Ausgabe ist wie folgt:

{{ EmbedLiveSample('Verhindern von Standardverhalten', '100%', 180, "", "") }}

> [!NOTE]
> Für den vollständigen Quellcode, siehe [preventdefault-validation.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/preventdefault-validation.html) (siehe es auch [running live](https://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html) hier).

## Es sind nicht nur Webseiten

Events sind nicht einzigartig für JavaScript — die meisten Programmiersprachen haben irgendeine Art von Event-Modell, und die Art und Weise, wie das Modell funktioniert, unterscheidet sich oft von JavaScript.
Tatsächlich unterscheidet sich das Event-Modell in JavaScript für Webseiten von dem Event-Modell für JavaScript, wie es in anderen Umgebungen verwendet wird.

Zum Beispiel ist [Node.js](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) eine sehr beliebte JavaScript-Laufzeitumgebung, die es Entwicklern ermöglicht, JavaScript zur Erstellung von Netzwerk- und Server-Anwendungen zu verwenden.
Das [Node.js-Event-Modell](https://nodejs.org/api/events.html) basiert auf Listeners, die auf Events hören, und Emitters, die Events periodisch auslösen — es klingt nicht so anders, aber der Code ist sehr unterschiedlich und verwendet Funktionen wie `on()`, um einen Event-Listener zu registrieren, und `once()`, um einen Event-Listener zu registrieren, der sich nach einmaliger Ausführung abmeldet.
Die [HTTP connect event docs](https://nodejs.org/api/http.html#event-connect) bieten ein gutes Beispiel.

Sie können auch JavaScript verwenden, um browserübergreifende Add-ons — funktionale Erweiterungen für den Browser — mit einer Technologie namens [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) zu erstellen.
Das Event-Modell ist dem Web-Events-Modell ähnlich, aber ein wenig anders — die Eigenschaften von Event-Listenern sind im {{Glossary("camel_case", "camel case")}} geschrieben (wie `onMessage` statt `onmessage`) und müssen mit der `addListener`-Funktion kombiniert werden.
Sehen Sie sich die Seite [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples) für ein Beispiel an.

Sie müssen nichts über andere solche Umgebungen in diesem Stadium Ihres Lernens verstehen; wir wollten nur verdeutlichen, dass Events in verschiedenen Programmierumgebungen unterschiedlich sein können.

## Zusammenfassung

In diesem Kapitel haben wir gelernt, was Events sind, wie man auf Events lauscht und wie man auf sie reagiert.

Sie haben mittlerweile gesehen, dass Elemente in einer Webseite in andere Elemente verschachtelt sein können. Zum Beispiel haben wir im [Verhindern von Standardverhalten](#verhindern_von_standardverhalten)-Beispiel einige Textboxen, die sich in {{htmlelement("div")}}-Elementen befinden, die wiederum in einem {{htmlelement("form")}}-Element platziert sind. Was passiert, wenn ein Klick-Event-Listener an das `<form>`-Element angehängt ist und der Benutzer in eine der Textboxen klickt? Die zugehörige Event-Handler-Funktion wird immer noch durch einen Prozess namens _Event-Bubbling_ ausgelöst, auf den in der nächsten Lektion eingegangen wird.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

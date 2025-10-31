---
title: Einführung in Ereignisse
short-title: Events
slug: Learn_web_development/Core/Scripting/Events
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Functions","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

Ereignisse sind Vorgänge, die im System, das Sie programmieren, auftreten und die das System Ihnen mitteilt, damit Ihr Code darauf reagieren kann.
Zum Beispiel können Sie, wenn der Benutzer auf einen Button auf einer Webseite klickt, auf diese Aktion reagieren, indem Sie ein Informationsfenster anzeigen.
In diesem Artikel diskutieren wir einige wichtige Konzepte rund um Ereignisse und betrachten die Grundlagen, wie sie in Browsern funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit JavaScript-Grundlagen, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Ereignisse sind — ein Signal, das vom Browser ausgelöst wird, wenn etwas Wichtiges passiert, und auf das der Entwickler mit Code reagieren kann.</li>
          <li>Einrichten von Ereignishandlern mit <code>addEventListener()</code> (und <code>removeEventListener()</code>) und Eigenschaften von Ereignishandlern.</li>
          <li>Inline-Ereignishandlerattribute und warum Sie diese nicht verwenden sollten.</li>
          <li>Ereignisobjekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Ereignis?

Ereignisse sind Vorgänge, die im System, das Sie programmieren, ablaufen — das System erzeugt (oder "feuert") ein Signal einer bestimmten Art, wenn ein Ereignis auftritt und bietet einen Mechanismus, durch den eine Aktion automatisch ausgeführt werden kann (das heißt, ein Code wird ausgeführt), wenn das Ereignis auftritt.
Ereignisse werden im Browserfenster ausgelöst und neigen dazu, an einen bestimmten Gegenstand gebunden zu sein, der darin enthalten ist. Dies kann ein einzelnes Element, eine Gruppe von Elementen, das im aktuellen Tab geladene HTML-Dokument oder das gesamte Browserfenster sein.
Es gibt viele verschiedene Arten von Ereignissen, die auftreten können.

Zum Beispiel:

- Der Benutzer wählt ein bestimmtes Element aus, klickt darauf oder bewegt den Mauszeiger darüber.
- Der Benutzer drückt eine Taste auf der Tastatur.
- Der Benutzer ändert die Größe des Browserfensters oder schließt es.
- Eine Webseite wird fertig geladen.
- Ein Formular wird abgesendet.
- Ein Video wird abgespielt, pausiert oder endet.
- Ein Fehler tritt auf.

Aus diesem (und aus einem Blick auf den [Ereignisindex](/de/docs/Web/API/Document_Object_Model/Events#event_index)) können Sie entnehmen, dass es **viele** Ereignisse gibt, die ausgelöst werden können.

Um auf ein Ereignis zu reagieren, fügen Sie ihm einen **Ereignis-Listener** hinzu. Dies ist eine Code-Funktion, die auf das Auslösen des Ereignisses lauscht. Wenn das Ereignis ausgelöst wird, wird eine **Ereignishandler**-Funktion (die vom Ereignis-Listener referenziert wird oder in diesem enthalten ist) aufgerufen, um auf das Auslösen des Ereignisses zu reagieren. Wenn ein solcher Codeblock eingerichtet ist, um auf ein Ereignis zu reagieren, sagen wir, dass wir **einen Ereignishandler registrieren**.

### Ein Beispiel: Ein Klick-Ereignis behandeln

Im folgenden Beispiel haben wir einen einzigen {{htmlelement("button")}} auf der Seite:

```html
<button>Change color</button>
```

```css hidden
button {
  margin: 10px;
}
```

Dann haben wir etwas JavaScript. Wir werden uns das im nächsten Abschnitt genauer ansehen, aber zunächst können wir einfach sagen: Es fügt einen Ereignis-Listener für das "`click`"-Ereignis des Buttons hinzu, und die enthaltene Handler-Funktion reagiert auf das Ereignis, indem sie den Seitenhintergrund auf eine zufällige Farbe einstellt:

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

Die Beispielausgabe ist wie folgt. Versuchen Sie, den Button zu klicken:

{{ EmbedLiveSample('Ein Beispiel: Ein Klick-Ereignis behandeln', '100%', 200, "", "") }}

## Verwendung von addEventListener()

Wie wir im letzten Beispiel gesehen haben, verfügen Objekte, die Ereignisse auslösen können, über eine Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), und dies ist der empfohlene Mechanismus zum Hinzufügen von Ereignis-Listenern.

Lassen Sie uns einen genaueren Blick auf den Code aus dem letzten Beispiel werfen:

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

Das HTML {{HTMLElement("button")}}-Element löst ein `click`-Ereignis aus, wenn der Benutzer darauf klickt. Wir rufen die Methode `addEventListener()` darauf auf, um einen Ereignis-Listener hinzuzufügen; dies erfordert zwei Parameter:

- die Zeichenkette "`click`", um anzugeben, dass wir auf das `click`-Ereignis lauschen möchten. Buttons können viele andere Ereignisse auslösen, wie etwa [`"mouseover"`](/de/docs/Web/API/Element/mouseover_event), wenn der Benutzer die Maus über den Button bewegt, oder [`"keydown"`](/de/docs/Web/API/Element/keydown_event), wenn der Benutzer eine Taste drückt und der Button fokussiert ist.
- eine Funktion, die aufgerufen wird, wenn das Ereignis auftritt. In unserem Fall generiert die definierte anonyme Funktion eine zufällige RGB-Farbe und setzt die [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color) der Seite [`<body>`](/de/docs/Web/HTML/Reference/Elements/body) auf diese Farbe.

Sie könnten auch eine separate benannte Funktion erstellen und diese im zweiten Parameter von `addEventListener()` referenzieren, so:

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

### Lauschen weiterer Ereignisse

Es gibt viele verschiedene Ereignisse, die durch ein Button-Element ausgelöst werden können. Lassen Sie uns experimentieren.

Kopieren Sie zuerst [random-color-addeventlistener.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-addeventlistener.html) lokal, und öffnen Sie es in Ihrem Browser.
Es handelt sich einfach um eine Kopie des einfachen Zufallsfarben-Beispiels, das wir bereits verwendet haben. Versuchen Sie nun, `click` zu den folgenden verschiedenen Werten zu ändern, und beobachten Sie die Ergebnisse im Beispiel:

- [`focus`](/de/docs/Web/API/Element/focus_event) und [`blur`](/de/docs/Web/API/Element/blur_event) — Die Farbe ändert sich, wenn der Button fokussiert und nicht fokussiert wird; versuchen Sie, die Tabulatortaste zu drücken, um den Button zu fokussieren, und ein weiteres Mal, um den Fokus vom Button zu entfernen.
  Diese werden oft verwendet, um Informationen über das Ausfüllen von Formularfeldern anzuzeigen, wenn sie fokussiert sind, oder um eine Fehlermeldung anzuzeigen, wenn ein Formularfeld mit einem falschen Wert ausgefüllt ist.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event) — Die Farbe ändert sich nur, wenn der Button doppelt geklickt wird.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`mouseout`](/de/docs/Web/API/Element/mouseout_event) — Die Farbe ändert sich, wenn der Mauszeiger über den Button schwebt oder wenn der Zeiger den Button verlässt.

Einige Ereignisse, wie `click`, sind auf fast jedem Element verfügbar. Andere sind spezifischer und nur in bestimmten Situationen nützlich: Zum Beispiel ist das [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignis nur auf Elementen verfügbar, die über Abspielfunktionalität verfügen, wie {{htmlelement("video")}}.

### Entfernen von Listenern

Wenn Sie einen Ereignis-Listener mit `addEventListener()` hinzugefügt haben, können Sie ihn bei Bedarf wieder entfernen. Der häufigste Weg, dies zu tun, ist die Methode [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener). Zum Beispiel würde die folgende Zeile den zuvor gesehenen `click`-Ereignishandler entfernen:

```js
btn.removeEventListener("click", changeBackground);
```

Für einfache, kleine Programme ist das Aufräumen alter, nicht mehr benötigter Ereignishandler nicht notwendig, aber für größere, komplexere Programme kann es die Effizienz verbessern.
Außerdem ermöglicht Ihnen die Fähigkeit, Ereignishandler zu entfernen, dass derselbe Button in unterschiedlichen Umständen unterschiedliche Aktionen ausführt: Sie müssen nur Handler hinzufügen oder entfernen.

### Hinzufügen mehrerer Listener für ein einzelnes Ereignis

Indem Sie mehrere Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mit verschiedenen Handlern tätigen, können Sie mehrere Handler-Funktionen haben, die als Reaktion auf ein einzelnes Ereignis ausgeführt werden:

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

Beide Funktionen würden nun ausgeführt, wenn das Element angeklickt wird.

## Andere Mechanismen für Ereignis-Listener

Wir empfehlen, dass Sie `addEventListener()` verwenden, um Ereignishandler zu registrieren. Es ist die mächtigste Methode und skalierbar für komplexere Programme. Es gibt jedoch zwei weitere Möglichkeiten, Ereignishandler zu registrieren, die Sie sehen könnten: _Ereignishandler-Eigenschaften_ und _Inline-Ereignishandler_.

### Ereignishandler-Eigenschaften

Objekte (wie Buttons), die Ereignisse auslösen können, haben normalerweise auch Eigenschaften, deren Name `on` gefolgt von dem Ereignisnamen ist. Zum Beispiel haben Elemente eine Eigenschaft `onclick`.
Dies wird als **Ereignishandler-Eigenschaft** bezeichnet. Um auf das Ereignis zu lauschen, können Sie die Handler-Funktion der Eigenschaft zuweisen.

Zum Beispiel könnten wir das Zufallsfarben-Beispiel wie folgt umschreiben:

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

Ereignishandler-Eigenschaften haben im Vergleich zu `addEventListener()` Nachteile. Einer der bedeutendsten ist, dass Sie [nicht mehr als einen Listener für ein einzelnes Ereignis hinzufügen können](#hinzufügen_mehrerer_listener_für_ein_einzelnes_ereignis). Das folgende Muster funktioniert nicht, da nachfolgende Versuche, den Eigenschaftswert zu setzen, vorherige überschreiben:

```js
element.onclick = function1;
element.onclick = function2;
```

### Inline-Ereignishandler — verwenden Sie diese nicht

Möglicherweise sehen Sie auch ein Muster wie dieses in Ihrem Code:

```html example-bad
<button onclick="bgChange()">Press me</button>
```

```js
function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
```

Die früheste Methode, Ereignishandler im Web zu registrieren, beinhaltete [_Ereignishandler-HTML-Attribute_](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) (oder _Inline-Ereignishandler_) wie das oben gezeigte — der Attributwert enthält den JavaScript, den Sie ausführen möchten, wenn das Ereignis auftritt.
Das obige Beispiel ruft eine Funktion auf, die in einem {{htmlelement("script")}}-Element auf derselben Seite definiert ist, aber Sie könnten auch JavaScript direkt im Attribut einfügen, etwa so:

```html example-bad
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

Sie können HTML-Attribut-Entsprechungen für viele der Ereignishandler-Eigenschaften finden; jedoch sollten Sie diese nicht verwenden — sie gelten als schlechte Praxis.
Es mag einfach erscheinen, ein Ereignishandler-Attribut zu verwenden, wenn Sie etwas wirklich Schnelles tun möchten, aber sie werden schnell unübersichtlich und ineffizient.

Es ist zum Beispiel keine gute Idee, Ihr HTML und Ihr JavaScript zu vermengen, da dies schwer zu lesen wird. Ihr JavaScript getrennt zu halten, ist eine gute Praxis, und wenn es in einer separaten Datei ist, können Sie es auf mehrere HTML-Dokumente anwenden.

Selbst in einer einzelnen Datei sind Inline-Ereignishandler keine gute Idee.
Ein Button ist in Ordnung, aber was, wenn Sie 100 Buttons hätten? Sie müssten 100 Attribute zur Datei hinzufügen; dies würde schnell zu einem Wartungsalbtraum werden.
Mit JavaScript könnten Sie Ereignishandler-Funktionen leicht auf alle Buttons der Seite anwenden, egal wie viele es gab, mit etwas wie diesem:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}
```

Schließlich werden viele gängige Server-Konfigurationen als Sicherheitsmaßnahme Inline-JavaScript nicht zulassen.

**Sie sollten niemals die HTML-Ereignishandler-Attribute verwenden** — diese sind veraltet, und ihre Verwendung gilt als schlechte Praxis.

## Ereignisobjekte

Manchmal sehen Sie in einer Ereignishandler-Funktion einen Parameter, der mit Namen wie `event`, `evt` oder `e` angegeben ist.
Dies wird das **Ereignisobjekt** genannt, und es wird automatisch Ereignishandlern übergeben, um zusätzliche Funktionen und Informationen bereitzustellen.
Lassen Sie uns unser Zufallsfarben-Beispiel um ein Ereignisobjekt erweitern:

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
> Den [kompletten Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-eventobject.html) finden Sie auf GitHub (siehe auch [das Beispiel live](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)).

Sie können sehen, dass wir hier ein Ereignisobjekt, **e**, in die Funktion einfügen und in der Funktion einen Hintergrundfarbstil auf `e.target` setzen — was der Button selbst ist.
Die `target`-Eigenschaft des Ereignisobjekts ist immer eine Referenz auf das Element, auf dem das Ereignis aufgetreten ist.
In diesem Beispiel setzen wir also eine zufällige Hintergrundfarbe auf den Button, nicht auf die Seite.

> [!NOTE]
> Sie können für das Ereignisobjekt jeden beliebigen Namen verwenden — Sie müssen lediglich einen Namen wählen, den Sie innerhalb der Ereignishandler-Funktion referenzieren können.
> `e`, `evt` und `event` werden von Entwicklern häufig verwendet, da sie kurz und leicht zu merken sind.
> Es ist immer gut, konsistent zu sein — mit sich selbst und, wenn möglich, mit anderen.

### Zusätzliche Eigenschaften von Ereignisobjekten

Die meisten Ereignisobjekte haben eine standardmäßige Reihe von Eigenschaften und Methoden, die auf dem Ereignisobjekt verfügbar sind; siehe das [`Event`](/de/docs/Web/API/Event)-Objektreferenz für eine vollständige Liste.

Einige Ereignisobjekte fügen zusätzliche Eigenschaften hinzu, die für diesen bestimmten Ereignistyp relevant sind. Zum Beispiel wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis ausgelöst, wenn der Benutzer eine Taste drückt. Sein Ereignisobjekt ist ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent), welches ein spezialisiertes `Event`-Objekt ist mit einer `key`-Eigenschaft, die mitteilt, welche Taste gedrückt wurde:

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

Versuchen Sie, in das Textfeld einzugeben, und sehen Sie sich die Ausgabe an:

{{EmbedLiveSample("Zusätzliche Eigenschaften von Ereignisobjekten", 100, 100)}}

## Verhindern des Standardverhaltens

Manchmal stoßen Sie auf eine Situation, in der Sie das Standardverhalten eines Ereignisses verhindern möchten.
Das häufigste Beispiel ist das eines Webformulars, beispielsweise eines benutzerdefinierten Registrierungsformulars.
Wenn Sie die Details ausfüllen und auf den Absenden-Button klicken, ist das natürliche Verhalten, dass die Daten an eine angegebene Seite auf dem Server zur Verarbeitung gesendet werden und der Browser zu einer Art "Erfolgsmeldungs"-Seite (oder derselben Seite, wenn keine spezifiziert ist) umgeleitet wird.

Ein Problem tritt auf, wenn der Benutzer die Daten nicht korrekt eingereicht hat — als Entwickler möchten Sie das Absenden an den Server verhindern und eine Fehlermeldung anzeigen, die sagt, was falsch ist und was getan werden muss, um es richtigzustellen.
Einige Browser unterstützen automatische Formularvalidierungsfunktionen, aber da viele dies nicht tun, sollten Sie sich nicht auf diese verlassen und eigene Validierungsprüfungen implementieren.
Sehen wir uns ein Beispiel an.

Zuerst ein einfaches HTML-Formular, das erfordert, dass Sie Ihren Vor- und Nachnamen eingeben:

```html
<form action="#">
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

Nun etwas JavaScript — hier implementieren wir eine grundlegende Prüfung innerhalb eines Handlers für das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis (das Submit-Ereignis wird auf einem Formular ausgelöst, wenn es abgesendet wird), der prüft, ob die Textfelder leer sind.
Wenn sie es sind, rufen wir die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Funktion des Ereignisobjekts auf — die die Formularübermittlung stoppt — und dann wird eine Fehlermeldung im Absatz unter unserem Formular angezeigt, um dem Benutzer zu sagen, was falsch ist:

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

Offensichtlich handelt es sich hier um eine ziemlich schwache Formularvalidierung — sie würde den Benutzer zum Beispiel nicht daran hindern, das Formular mit Leerzeichen oder Zahlen in den Feldern zu validieren — aber es ist für Beispielzwecke ausreichend.

Sie können das vollständige Beispiel [live ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html) — probieren Sie es dort aus. Für den vollständigen Quellcode siehe [preventdefault-validation.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/preventdefault-validation.html).

## Es sind nicht nur Webseiten

Ereignisse sind nicht einzigartig für JavaScript — die meisten Programmiersprachen haben eine Art von Ereignismodell, und die Funktionsweise unterscheidet sich oft von der Art und Weise, wie JavaScript funktioniert.
Tatsächlich unterscheidet sich das Ereignismodell in JavaScript für Webseiten vom Ereignismodell für JavaScript, wie es in anderen Umgebungen verwendet wird.

Zum Beispiel ist [Node.js](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) eine sehr beliebte JavaScript-Laufzeitumgebung, die Entwicklern ermöglicht, mit JavaScript Netzwerk- und Server-Anwendungen zu erstellen.
Das [Node.js-Ereignismodell](https://nodejs.org/api/events.html) stützt sich auf Listener, um auf Ereignisse zu lauschen, und auf Emitter, um regelmäßig Ereignisse auszulösen — es klingt nicht so unterschiedlich, aber der Code ist ziemlich anders und verwendet Funktionen wie `on()`, um einen Ereignis-Listener zu registrieren, und `once()`, um einen zu registrieren, der nach einmaliger Ausführung abgemeldet wird.
Die [HTTP connect event docs von Node.js](https://nodejs.org/api/http.html#event-connect) bieten ein gutes Beispiel.

Sie können JavaScript auch verwenden, um plattformübergreifende Erweiterungen — Funktionsverbesserungen für den Browser — mit einer Technologie namens [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) zu erstellen.
Das Ereignismodell ist ähnlich dem Ereignismodell für das Web, aber ein wenig anders — Ereignis-Listener-Eigenschaften werden in {{Glossary("camel_case", "Camel Case")}} geschrieben (wie `onMessage` statt `onmessage`) und müssen mit der Funktion `addListener` kombiniert werden.
Siehe die Seite [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples) für ein Beispiel.

Sie müssen jetzt noch nichts über andere solche Umgebungen verstehen; wir wollten lediglich klarstellen, dass Ereignisse sich in verschiedenen Programmierumgebungen unterscheiden können.

## Zusammenfassung

In diesem Kapitel haben wir gelernt, was Ereignisse sind, wie man auf Ereignisse lauscht und wie man auf sie reagiert.

Sie haben gesehen, dass Elemente auf einer Webseite in anderen Elementen verschachtelt sein können. Zum Beispiel haben wir im Beispiel [Verhindern des Standardverhaltens](#verhindern_des_standardverhaltens) einige Textboxen, die sich innerhalb von {{htmlelement("div")}}-Elementen befinden, die wiederum innerhalb eines {{htmlelement("form")}}-Elements platziert sind. Was passiert, wenn ein Click-Ereignis-Listener an das `<form>`-Element angehängt ist und der Benutzer innerhalb einer der Textboxen klickt? Die zugehörige Ereignishandler-Funktion wird immer noch über einen Prozess namens _Event Bubbling_ ausgelöst, der in der nächsten Lektion behandelt wird.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Functions","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

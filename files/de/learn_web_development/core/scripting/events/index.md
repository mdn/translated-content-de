---
title: Einführung in Ereignisse
short-title: Events
slug: Learn_web_development/Core/Scripting/Events
l10n:
  sourceCommit: 6149deb5f4beccdc09549fbf8d1810d9a4dc3462
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

Ereignisse sind Dinge, die im System, in dem Sie programmieren, passieren und über die das System Sie informiert, damit Ihr Code darauf reagieren kann.
Zum Beispiel, wenn der Benutzer auf einer Webseite auf einen Button klickt, möchten Sie möglicherweise auf diese Aktion reagieren, indem Sie ein Informationsfeld anzeigen.
In diesem Artikel besprechen wir einige wichtige Konzepte im Zusammenhang mit Ereignissen und betrachten die Grundlagen, wie sie in Browsern funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie sie in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Ereignisse sind – ein Signal, das vom Browser ausgelöst wird, wenn etwas Bedeutendes passiert, auf das der Entwickler mit Code reagieren kann.</li>
          <li>Einrichtung von Ereignis-Handlern mit <code>addEventListener()</code> (und <code>removeEventListener()</code>) und Ereignis-Handler-Eigenschaften.</li>
          <li>Inline-Ergebnis-Handler-Attribute und warum Sie diese nicht verwenden sollten.</li>
          <li>Ereignisobjekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Ereignis?

Ereignisse sind Dinge, die im System, das Sie programmieren, passieren – das System erzeugt (oder "löst") ein Signal irgendeiner Art, wenn ein Ereignis eintritt, und bietet einen Mechanismus, durch den automatisch eine Aktion (d.h. Ausführung von Code) unternommen werden kann, wenn das Ereignis eintritt.
Ereignisse werden im Browserfenster ausgelöst und neigen dazu, an ein bestimmtes Element gebunden zu sein, das sich darin befindet. Dies könnte ein einzelnes Element, eine Gruppe von Elementen, das HTML-Dokument, das im aktuellen Tab geladen ist, oder das gesamte Browserfenster sein.
Es gibt viele verschiedene Arten von Ereignissen, die auftreten können.

Zum Beispiel:

- Der Benutzer wählt, klickt oder bewegt den Cursor über ein bestimmtes Element.
- Der Benutzer drückt eine Taste auf der Tastatur.
- Der Benutzer ändert die Größe des Browserfensters oder schließt es.
- Eine Webseite ist vollständig geladen.
- Ein Formular wird gesendet.
- Ein Video wird abgespielt, pausiert oder endet.
- Ein Fehler tritt auf.

Aus dem Blick auf die MDN [Ereignisreferenz](/de/docs/Web/Events) ist es klar, dass es **eine Menge** Ereignisse gibt, die ausgelöst werden können.

Um auf ein Ereignis zu reagieren, fügen Sie ihm einen **Event Listener** hinzu. Dies ist eine Codefunktion, die auf das Auslösen des Ereignisses wartet. Wenn das Ereignis ausgelöst wird, wird eine **Event-Handler**-Funktion (referenziert durch oder enthalten im Event Listener) aufgerufen, um auf das Auslösen des Ereignisses zu reagieren. Wenn ein solcher Codeblock eingerichtet wird, um auf ein Ereignis zu reagieren, sagen wir, dass wir einen **Ereignis-Handler registrieren**.

### Ein Beispiel: Umgang mit einem Klickereignis

Im folgenden Beispiel haben wir einen einzelnen {{htmlelement("button")}} auf der Seite:

```html
<button>Change color</button>
```

```css hidden
button {
  margin: 10px;
}
```

Dann haben wir etwas JavaScript. Wir schauen uns dies im nächsten Abschnitt genauer an, aber vorerst können wir nur sagen: Es fügt dem `"click"`-Ereignis des Buttons einen Event Listener hinzu, und die enthaltene Handler-Funktion reagiert auf das Ereignis, indem sie die Hintergrundfarbe der Seite auf eine zufällige Farbe setzt:

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

{{EmbedLiveSample('An example: handling a click event', '100%', 200, "", "")}}

## Verwendung von addEventListener()

Wie wir im letzten Beispiel gesehen haben, haben Objekte, die Ereignisse auslösen können, eine [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode, und dies ist der empfohlene Mechanismus zum Hinzufügen von Event Listen.

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

Das HTML-{{HTMLElement("button")}}-Element löst ein `click`-Ereignis aus, wenn der Benutzer darauf klickt. Wir rufen die `addEventListener()`-Methode auf, um einen Event Listener hinzuzufügen; dies erfordert zwei Parameter:

- den String `"click"`, um anzugeben, dass wir auf das `click`-Ereignis hören möchten. Buttons können viele andere Ereignisse auslösen, wie zum Beispiel [`"mouseover"`](/de/docs/Web/API/Element/mouseover_event), wenn der Benutzer den Mauszeiger über den Button bewegt, oder [`"keydown"`](/de/docs/Web/API/Element/keydown_event), wenn der Benutzer eine Taste drückt und der Button fokussiert ist.
- eine Funktion, die aufgerufen wird, wenn das Ereignis eintritt. In unserem Fall erzeugt die definierte anonyme Funktion eine zufällige RGB-Farbe und setzt die [`background-color`](/de/docs/Web/CSS/background-color) der Seite [`<body>`](/de/docs/Web/HTML/Reference/Elements/body) auf diese Farbe.

Sie könnten auch eine separate benannte Funktion erstellen und diese im zweiten Parameter von `addEventListener()` referenzieren, so wie hier:

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

### Hören auf andere Ereignisse

Es gibt viele verschiedene Ereignisse, die durch ein Button-Element ausgelöst werden können. Lassen Sie uns experimentieren.

Erstellen Sie zunächst eine lokale Kopie von [random-color-addeventlistener.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-addeventlistener.html) und öffnen Sie sie in Ihrem Browser.
Es ist nur eine Kopie des einfachen zufälligen Farbbeispiels, mit dem wir bereits gespielt haben. Versuchen Sie nun, `click` zu verschiedenen Werten zu ändern und die Ergebnisse im Beispiel zu beobachten:

- [`focus`](/de/docs/Web/API/Element/focus_event) und [`blur`](/de/docs/Web/API/Element/blur_event) – Die Farbe ändert sich, wenn der Button fokussiert oder defokussiert wird; versuchen Sie, die Tabulatortaste zu drücken, um den Button zu fokussieren, und drücken Sie erneut Tab, um den Fokus vom Button zu entfernen.
  Diese werden häufig verwendet, um Informationen zum Ausfüllen von Formularfeldern anzuzeigen, wenn sie fokussiert sind, oder um eine Fehlermeldung anzuzeigen, wenn ein Formularfeld mit einem falschen Wert gefüllt ist.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event) – Die Farbe ändert sich nur, wenn der Button doppelt angeklickt wird.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`mouseout`](/de/docs/Web/API/Element/mouseout_event) – Die Farbe ändert sich, wenn der Mauszeiger über dem Button schwebt oder wenn der Zeiger den Button verlässt.

Einige Ereignisse, wie `click`, sind auf fast jedem Element verfügbar. Andere sind spezialisierter und nur in bestimmten Situationen nützlich: Zum Beispiel ist das [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignis nur auf Elementen verfügbar, die eine Abspielfunktionalität haben, wie zum Beispiel {{htmlelement("video")}}.

### Entfernen von Listeners

Wenn Sie ein Event Listener mit `addEventListener()` hinzugefügt haben, können Sie es bei Bedarf wieder entfernen. Der gebräuchlichste Weg, dies zu tun, ist die Verwendung der [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)-Methode. Zum Beispiel würde die folgende Zeile den zuvor gesehenen `click`-Event-Handler entfernen:

```js
btn.removeEventListener("click", changeBackground);
```

Für einfache, kleine Programme ist das Aufräumen alter, ungenutzter Event Handler nicht notwendig, aber für größere, komplexere Programme kann es die Effizienz verbessern.
Die Möglichkeit, Event Handler zu entfernen, ermöglicht es Ihnen auch, dass derselbe Button in unterschiedlichen Situationen unterschiedliche Aktionen ausführt: Sie müssen nur Handler hinzufügen oder entfernen.

### Hinzufügen mehrerer Listener für ein einzelnes Ereignis

Durch mehrfache Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), die verschiedene Handler bereitstellen, können Sie mehrere Handler-Funktionen haben, die auf ein einzelnes Ereignis reagieren:

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

Beide Funktionen würden nun ausgeführt, wenn das Element angeklickt wird.

## Andere Mechanismen für Event Listener

Wir empfehlen Ihnen, `addEventListener()` zu verwenden, um Event Handler zu registrieren. Es ist die leistungsfähigste Methode und skaliert am besten mit komplexeren Programmen. Es gibt jedoch zwei andere Möglichkeiten, Event Handler zu registrieren, die Sie möglicherweise sehen: _Event-Handler-Eigenschaften_ und _Inline-Ereignishandler_.

### Event-Handler-Eigenschaften

Objekte (wie Buttons), die Ereignisse auslösen können, haben meist auch Eigenschaften, deren Name `on` gefolgt von dem Namen eines Ereignisses ist. Elemente haben zum Beispiel eine Eigenschaft `onclick`.
Dies wird eine **Event-Handler-Eigenschaft** genannt. Um auf das Ereignis zu hören, können Sie die Handler-Funktion der Eigenschaft zuweisen.

Zum Beispiel könnten wir das random color Beispiel so umschreiben:

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

Event-Handler-Eigenschaften haben Nachteile im Vergleich zu `addEventListener()`. Einer der bedeutendsten ist, dass Sie nicht [mehr als einen Listener für ein einzelnes Ereignis hinzufügen können](#hinzufügen_mehrerer_listener_für_ein_einzelnes_ereignis). Das folgende Muster funktioniert nicht, da spätere Versuche, den Eigenschaftswert zu setzen, frühere überschreiben werden:

```js
element.onclick = function1;
element.onclick = function2;
```

### Inline-Ereignishandler - Verwenden Sie diese nicht

Sie könnten im Code auch folgendes Muster sehen:

```html example-bad
<button onclick="bgChange()">Press me</button>
```

```js
function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
```

Die früheste Methode, um Event Handler im Web zu registrieren, involvierte [_Event-Handler-HTML-Attribute_](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) (oder _Inline-Ereignishandler_) wie das oben gezeigte - der Attributwert enthält den JavaScript-Code, den Sie ausführen möchten, wenn das Ereignis eintritt.
Das obige Beispiel ruft eine Funktion auf, die in einem {{htmlelement("script")}}-Element auf derselben Seite definiert ist, aber Sie könnten JavaScript auch direkt im Attribut einfügen, zum Beispiel:

```html example-bad
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

Sie können HTML-Attribut-Äquivalente für viele der Event-Handler-Eigenschaften finden; Sie sollten diese jedoch nicht verwenden - sie werden als schlechte Praxis angesehen.
Es mag einfach erscheinen, ein Event-Handler-Attribut zu verwenden, wenn Sie etwas wirklich Schnelles tun, aber sie werden schnell unhandlich und ineffizient.

Zum einen ist es keine gute Idee, Ihr HTML und Ihr JavaScript zu vermischen, da es schwer lesbar wird. Es ist eine gute Praxis, Ihr JavaScript separat zu halten, und wenn es in einer separaten Datei ist, können Sie es auf mehrere HTML-Dokumente anwenden.

Selbst in einer einzigen Datei sind Inline-Ereignishandler keine gute Idee.
Ein Button ist in Ordnung, aber was, wenn Sie 100 Buttons hätten? Sie müssten 100 Attribute in die Datei einfügen; es würde schnell zu einem Wartungsalptraum werden.
Mit JavaScript könnten Sie leicht eine Event-Handler-Funktion zu allen Buttons auf der Seite hinzufügen, egal wie viele es sind, indem Sie etwas wie dies verwenden:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}
```

Schließlich werden viele gängige Serverkonfigurationen Inline-JavaScript aus Sicherheitsgründen deaktivieren.

**Sie sollten niemals die HTML-Ereignishandler-Attribute verwenden** - sie sind veraltet und ihre Verwendung stellt eine schlechte Praxis dar.

## Ereignisobjekte

Manchmal sehen Sie in einer Event-Handler-Funktion einen Parameter mit einem Namen wie `event`, `evt` oder `e`.
Dies wird das **Ereignisobjekt** genannt und es wird automatisch an Event Handler übergeben, um zusätzliche Funktionen und Informationen bereitzustellen.
Zum Beispiel lassen Sie uns unser random color Beispiel umschreiben, um ein Ereignisobjekt einzuschließen:

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
> Sie können den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-eventobject.html) für dieses Beispiel auf GitHub finden (auch [siehe es live ausgeführt](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)).

Hier sehen Sie, dass wir ein Ereignisobjekt, **e**, in der Funktion enthalten und in der Funktion einen Hintergrundfarbenstil auf `e.target` setzen – welches der Button selbst ist.
Die `target`-Eigenschaft des Ereignisobjekts ist immer eine Referenz auf das Element, auf dem das Ereignis eingetreten ist.
In diesem Beispiel setzen wir also eine zufällige Hintergrundfarbe auf den Button, nicht auf die Seite.

> [!NOTE]
> Sie können jeden beliebigen Namen für das Ereignisobjekt verwenden – Sie müssen nur einen Namen wählen, auf den Sie innerhalb der Event-Handler-Funktion referenzieren können.
> `e`, `evt` und `event` werden häufig von Entwicklern verwendet, weil sie kurz und leicht zu merken sind.
> Es ist immer gut, konsistent zu sein – mit sich selbst und, wenn möglich, mit anderen.

### Zusätzliche Eigenschaften von Ereignisobjekten

Die meisten Ereignisobjekte haben eine standardisierte Menge von Eigenschaften und Methoden, die auf dem Ereignisobjekt verfügbar sind; sehen Sie sich die [`Event`](/de/docs/Web/API/Event)-Objektreferenz für eine vollständige Liste an.

Einige Ereignisobjekte fügen zusätzliche Eigenschaften hinzu, die für diese bestimmte Art von Ereignis relevant sind. Zum Beispiel wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis ausgelöst, wenn der Benutzer eine Taste drückt. Sein Ereignisobjekt ist ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent), welches ein spezialisiertes `Event`-Objekt mit einer `key`-Eigenschaft ist, die Ihnen sagt, welche Taste gedrückt wurde:

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

Versuchen Sie, in das Textfeld zu tippen und sehen Sie sich die Ausgabe an:

{{EmbedLiveSample("Extra_properties_of_event_objects", 100, 100)}}

## Verhindern des Standardverhaltens

Manchmal stoßen Sie auf eine Situation, in der Sie verhindern möchten, dass ein Ereignis das tut, was es standardmäßig tut.
Das häufigste Beispiel dafür ist ein Webformular, zum Beispiel ein benutzerdefiniertes Registrierungsformular.
Wenn Sie die Details eingeben und auf die Senden-Taste klicken, ist das natürliche Verhalten, dass die Daten an eine bestimmte Seite auf dem Server zur Verarbeitung gesendet werden und der Browser zu einer Art "Erfolgsmeldung"-Seite umgeleitet wird (oder auf die gleiche Seite, wenn keine andere angegeben ist).

Das Problem tritt auf, wenn der Benutzer die Daten nicht korrekt eingereicht hat – als Entwickler möchten Sie die Übermittlung an den Server verhindern und eine Fehlermeldung geben, die sagt, was falsch ist und was getan werden muss, um die Dinge in Ordnung zu bringen.
Einige Browser unterstützen automatische Formular-Datenvalidierungsfunktionen, aber da viele dies nicht tun, wird empfohlen, nicht darauf zu verzichten und eigene Validierungsprüfungen zu implementieren.
Lassen Sie uns ein Beispiel betrachten.

Zuerst ein einfaches HTML-Formular, das Sie auffordert, Ihren Vor- und Nachnamen einzugeben:

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

Jetzt etwas JavaScript – hier implementieren wir eine grundlegende Überprüfung innerhalb eines Handlers für das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis (das Submitevent wird auf einem Formular ausgelöst, wenn es gesendet wird), das überprüft, ob die Textfelder leer sind.
Wenn sie leer sind, rufen wir die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Funktion des Ereignisobjekts auf – welche die Formularübermittlung stoppt – und dann wird eine Fehlermeldung im Absatz unter unserem Formular angezeigt, um dem Benutzer zu sagen, was falsch ist:

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

Offensichtlich ist dies eine ziemlich schwache Formularvalidierung - es würde den Benutzer nicht daran hindern, das Formular mit Leerzeichen oder Zahlen in den Feldern zu validieren, zum Beispiel - aber es ist okay für Beispielzwecke.

Sie können das vollständige Beispiel [live ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html) – probieren Sie es dort aus. Für den vollständigen Quellcode siehe [preventdefault-validation.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/preventdefault-validation.html).

## Es sind nicht nur Webseiten

Ereignisse sind nicht einzigartig für JavaScript – die meisten Programmiersprachen haben irgendeine Art von Ereignismodell, und die Art, wie das Modell funktioniert, unterscheidet sich oft von JavaScripts Methode.
Tatsächlich unterscheidet sich das Ereignismodell in JavaScript für Webseiten vom Ereignismodell für JavaScript, wie es in anderen Umgebungen verwendet wird.

Zum Beispiel ist [Node.js](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) eine sehr beliebte JavaScript-Laufzeitumgebung, die es Entwicklern ermöglicht, JavaScript zur Erstellung von Netzwerk- und serverseitigen Anwendungen zu verwenden.
Das [Node.js-Ereignismodell](https://nodejs.org/api/events.html) basiert auf Listenern, die auf Ereignisse hören, und Emittern, die regelmäßig Ereignisse auslösen – es klingt nicht so anders, aber der Code ist ziemlich unterschiedlich und verwendet Funktionen wie `on()`, um einen Listener zu registrieren, und `once()`, um einen Event-Listener zu registrieren, der sich nach einmaligem Ausführen wieder abmeldet.
Die [HTTP connect event docs von Node.js](https://nodejs.org/api/http.html#event-connect) bieten ein gutes Beispiel.

Sie können JavaScript auch verwenden, um browserübergreifende Add-ons – funktionale Erweiterungen des Browsers – zu erstellen, indem Sie eine Technologie namens [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) einsetzen.
Das Ereignismodell ist dem Webereignismodell ähnlich, aber etwas anders – Event-Listener-Eigenschaften werden in {{Glossary("camel_case", "camel case")}} geschrieben (wie `onMessage` anstelle von `onmessage`) und müssen mit der `addListener`-Funktion kombiniert werden.
Sehen Sie sich die Seite [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples) für ein Beispiel an.

Sie müssen an dieser Stelle Ihres Lernens nichts über andere solche Umgebungen verstehen; wir wollten nur klarstellen, dass Ereignisse in verschiedenen Programmiersprachen unterschiedlich sein können.

## Zusammenfassung

In diesem Kapitel haben wir gelernt, was Ereignisse sind, wie man auf Ereignisse hört und wie man darauf reagiert.

Sie haben inzwischen gesehen, dass Elemente auf einer Webseite innerhalb anderer Elemente verschachtelt sein können. Zum Beispiel haben wir im Beispiel [Verhindern des Standardverhaltens](#verhindern_des_standardverhaltens) einige Textfelder, die sich in {{htmlelement("div")}}-Elementen befinden, die wiederum sich in einem {{htmlelement("form")}}-Element befinden. Was passiert, wenn ein Klickereignis-Listener am `<form>`-Element angehängt ist und der Benutzer in eines der Textfelder klickt? Die zugehörige Event-Handler-Funktion wird immer noch über einen Prozess namens _Ereignisbubbling_ ausgelöst, der in der nächsten Lektion behandelt wird.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

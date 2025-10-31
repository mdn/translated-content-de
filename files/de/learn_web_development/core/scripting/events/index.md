---
title: Einführung in Ereignisse
short-title: Events
slug: Learn_web_development/Core/Scripting/Events
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Functions","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

Ereignisse sind Vorgänge, die im System, das Sie programmieren, auftreten und über die das System Sie informiert, damit Ihr Code darauf reagieren kann.
Wenn der Benutzer beispielsweise auf eine Schaltfläche auf einer Webseite klickt, möchten Sie möglicherweise auf diese Aktion reagieren, indem Sie ein Informationsfenster anzeigen.
In diesem Artikel besprechen wir einige wichtige Konzepte rund um Ereignisse und betrachten die Grundlagen, wie sie in Browsern funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a> sowie Vertrautheit mit den JavaScript-Grundlagen wie in vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Ereignisse sind — ein Signal, das vom Browser gesendet wird, wenn etwas Wichtiges passiert, auf das der Entwickler mit dem Ausführen von Code reagieren kann.</li>
          <li>Einrichten von Ereignisbehandlern mit <code>addEventListener()</code> (und <code>removeEventListener()</code>) und Eigenschaften von Ereignisbehandlern.</li>
          <li>Inline-Ereignisbehandler-Attribute und warum Sie diese nicht verwenden sollten.</li>
          <li>Ereignisobjekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Ereignis?

Ereignisse sind Vorgänge, die im System, das Sie programmieren, auftreten — das System erzeugt (oder "feuert") ein Signal irgendeiner Art, wenn ein Ereignis eintritt, und bietet einen Mechanismus, mit dem eine Aktion automatisch ausgeführt werden kann (das heißt, einige ausgeführte Codeabschnitte), wenn das Ereignis eintritt.
Ereignisse werden innerhalb des Browserfensters ausgelöst und sind in der Regel an ein bestimmtes Element gebunden, das sich darin befindet. Dies könnte ein einzelnes Element, eine Menge von Elementen, das im aktuellen Tab geladene HTML-Dokument oder das gesamte Browserfenster sein.
Es gibt viele verschiedene Arten von Ereignissen, die auftreten können.

Zum Beispiel:

- Der Benutzer wählt ein bestimmtes Element aus, klickt darauf oder bewegt den Cursor darüber.
- Der Benutzer drückt eine Taste auf der Tastatur.
- Der Benutzer ändert die Größe des Browserfensters oder schließt es.
- Eine Webseite wird geladen.
- Ein Formular wird abgeschickt.
- Ein Video wird abgespielt, angehalten oder endet.
- Ein Fehler tritt auf.

Aus diesem (und einem Blick auf den [Ereignisindex](/de/docs/Web/API/Document_Object_Model/Events#event_index)) können Sie entnehmen, dass es **viele** Ereignisse gibt, die ausgelöst werden können.

Um auf ein Ereignis zu reagieren, fügen Sie ihm einen **Ereignis-Listener** hinzu. Dies ist eine Codefunktionalität, die darauf wartet, dass das Ereignis ausgelöst wird. Wenn das Ereignis ausgelöst wird, wird eine **Ereignisbehandler**-Funktion (die von, oder innerhalb des Ereignis-Listeners referenziert wird) aufgerufen, um auf das ausgelöste Ereignis zu reagieren. Wenn ein solcher Codeblock eingerichtet wird, um auf ein Ereignis zu reagieren, sagen wir, dass wir einen **Ereignisbehandler registrieren**.

### Ein Beispiel: Ein Klickereignis behandeln

Im folgenden Beispiel haben wir eine einzelne {{htmlelement("button")}} auf der Seite:

```html
<button>Change color</button>
```

```css hidden
button {
  margin: 10px;
}
```

Dann haben wir ein bisschen JavaScript. Darauf werden wir im nächsten Abschnitt näher eingehen, aber im Moment können wir nur sagen: Es fügt einen Ereignis-Listener für das `"click"` Ereignis der Schaltfläche hinzu, und die enthaltene Behandlerfunktion reagiert auf das Ereignis, indem sie den Hintergrund der Seite auf eine zufällige Farbe setzt:

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

Die Beispielausgabe ist wie folgt. Versuchen Sie, die Schaltfläche anzuklicken:

{{ EmbedLiveSample('Ein Beispiel: Ein Klickereignis behandeln', '100%', 200, "", "") }}

## Verwendung von addEventListener()

Wie wir im letzten Beispiel gesehen haben, haben Objekte, die Ereignisse auslösen können, eine [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Methode, und dies ist der empfohlene Mechanismus zum Hinzufügen von Ereignis-Listenern.

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

Das HTML {{HTMLElement("button")}} Element löst ein `click` Ereignis aus, wenn der Benutzer darauf klickt. Wir rufen die Methode `addEventListener()` darauf auf, um einen Ereignis-Listener hinzuzufügen; dieser nimmt zwei Parameter an:

- der String `"click"`, um anzugeben, dass wir auf das `click` Ereignis hören möchten. Schaltflächen können viele andere Ereignisse auslösen, wie zum Beispiel [`"mouseover"`](/de/docs/Web/API/Element/mouseover_event) wenn der Benutzer seine Maus über die Schaltfläche bewegt, oder [`"keydown"`](/de/docs/Web/API/Element/keydown_event) wenn der Benutzer eine Taste drückt und die Schaltfläche fokussiert ist.
- eine Funktion, die aufgerufen wird, wenn das Ereignis eintritt. In unserem Fall generiert die definierte anonyme Funktion eine zufällige RGB-Farbe und setzt die [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color) der Seite [`<body>`](/de/docs/Web/HTML/Reference/Elements/body) auf diese Farbe.

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

### Auf andere Ereignisse hören

Es gibt viele verschiedene Ereignisse, die von einem Schaltflächenelement ausgelöst werden können. Lassen Sie uns experimentieren.

Erstellen Sie zunächst eine lokale Kopie von [random-color-addeventlistener.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-addeventlistener.html) und öffnen Sie sie in Ihrem Browser.
Es ist nur eine Kopie des einfachen zufälligen Farbbeispiels, mit dem wir bereits gespielt haben. Ändern Sie jetzt `click` nacheinander in die folgenden unterschiedlichen Werte und beobachten Sie die Ergebnisse im Beispiel:

- [`focus`](/de/docs/Web/API/Element/focus_event) und [`blur`](/de/docs/Web/API/Element/blur_event) — Die Farbe ändert sich, wenn die Schaltfläche fokussiert und unfokussiert wird; versuchen Sie, die Tabulatortaste zu drücken, um die Schaltfläche zu fokussieren und erneut die Tabulatortaste zu drücken, um von der Schaltfläche weg zu fokussieren.
  Diese werden oft verwendet, um Informationen über das Ausfüllen von Formularfeldern anzuzeigen, wenn sie fokussiert sind, oder um eine Fehlermeldung anzuzeigen, wenn ein Formularfeld mit einem falschen Wert ausgefüllt ist.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event) — Die Farbe ändert sich nur, wenn die Schaltfläche doppelt angeklickt wird.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`mouseout`](/de/docs/Web/API/Element/mouseout_event) — Die Farbe ändert sich, wenn der Mauszeiger über der Schaltfläche schwebt oder wenn der Zeiger sich von der Schaltfläche wegbewegt.

Einige Ereignisse wie `click` sind auf nahezu jedem Element verfügbar. Andere sind spezifischer und nur in bestimmten Situationen nützlich: zum Beispiel das [`play`](/de/docs/Web/API/HTMLMediaElement/play_event) Ereignis ist nur auf Elementen verfügbar, die Wiedergabefunktionen haben, wie zum Beispiel {{htmlelement("video")}}.

### Entfernen von Listenern

Wenn Sie einen Ereignis-Listener mit `addEventListener()` hinzugefügt haben, können Sie ihn bei Bedarf auch wieder entfernen. Der gebräuchlichste Weg, dies zu tun, ist die Verwendung der [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) Methode. Zum Beispiel würde die folgende Zeile den `click` Ereignisbehandler entfernen, den wir zuvor gesehen haben:

```js
btn.removeEventListener("click", changeBackground);
```

Für einfache, kleine Programme ist das Bereinigen alter, nicht verwendeter Ereignisbehandler nicht notwendig, aber für größere, komplexere Programme kann es die Effizienz verbessern.
Außerdem ermöglicht Ihnen die Möglichkeit, Ereignisbehandler zu entfernen, dasselbe Element in unterschiedlichen Umständen verschiedene Aktionen ausführen zu lassen: Sie müssen nur Behandler hinzufügen oder entfernen.

### Hinzufügen mehrerer Listener zu einem einzelnen Ereignis

Indem Sie mehr als einen Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) machen und dabei unterschiedliche Behandler angeben, können Sie mehrere Behandlerfunktionen als Reaktion auf ein einzelnes Ereignis ausführen lassen:

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

Beide Funktionen werden nun ausgeführt, wenn das Element angeklickt wird.

## Andere Mechanismen für Ereignis-Listener

Wir empfehlen, `addEventListener()` zu verwenden, um Ereignisbehandler zu registrieren. Es ist die leistungsfähigste Methode und skaliert am besten mit komplexeren Programmen. Es gibt jedoch zwei andere Möglichkeiten, Ereignisbehandler zu registrieren, die Sie möglicherweise sehen: _Ereignisbehandlereigenschaften_ und _Inlineereignisbehandler_.

### Ereignisbehandlereigenschaften

Objekte (wie Buttons), die Ereignisse auslösen können, haben meist auch Eigenschaften, deren Name `on` gefolgt vom Namen eines Ereignisses ist. Zum Beispiel haben Elemente eine Eigenschaft `onclick`.
Dies wird als **Ereignisbehandlereigenschaft** bezeichnet. Um auf das Ereignis zu hören, können Sie die Behandlerfunktion der Eigenschaft zuweisen.

Zum Beispiel könnten wir das Zufallsfarbbeispiel so umschreiben:

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

Sie können die Behandlereigenschaft auch auf eine benannte Funktion setzen:

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

Ereignisbehandlereigenschaften haben Nachteile im Vergleich zu `addEventListener()`. Einer der bedeutendsten ist, dass Sie nicht [mehr als einen Listener für ein einzelnes Ereignis hinzufügen können](#hinzufügen_mehrerer_listener_zu_einem_einzelnen_ereignis). Das folgende Muster funktioniert nicht, da alle weiteren Versuche, den Eigenschaftswert zu setzen, die vorherigen überschreiben:

```js
element.onclick = function1;
element.onclick = function2;
```

### Inline-Ereignisbehandler — Verwenden Sie diese nicht

Sie könnten auch ein Muster wie dieses in Ihrem Code sehen:

```html example-bad
<button onclick="bgChange()">Press me</button>
```

```js
function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
```

Die früheste Methode, um Ereignisbehandler im Web zu registrieren, beinhaltete [_Ereignisbehandler-HTML-Attribute_](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) (oder _Inline-Ereignisbehandler_) wie das oben gezeigte — der Attributwert enthält den JavaScript-Code, den Sie ausführen möchten, wenn das Ereignis eintritt.
Das obige Beispiel ruft eine Funktion auf, die innerhalb eines {{htmlelement("script")}}-Elements auf derselben Seite definiert ist, aber Sie könnten auch JavaScript direkt in das Attribut einfügen, zum Beispiel:

```html example-bad
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

Sie können HTML-Attributäquivalente für viele der Ereignisbehandlereigenschaften finden, allerdings sollten Sie diese nicht verwenden — sie werden als schlechte Praxis betrachtet.
Es mag einfach erscheinen, ein Ereignisbehandlerattribut zu verwenden, wenn Sie etwas wirklich Schnelles tun, aber sie werden schnell unüberschaubar und ineffizient.

Zunächst einmal ist es keine gute Idee, Ihr HTML und Ihr JavaScript zu vermischen, da es schwer zu lesen wird. Es ist eine gute Praxis, Ihr JavaScript getrennt zu halten, und wenn es sich in einer separaten Datei befindet, können Sie es auf mehrere HTML-Dokumente anwenden.

Auch in einer einzelnen Datei sind Inline-Ereignisbehandler keine gute Idee.
Eine Schaltfläche ist in Ordnung, aber was, wenn Sie 100 Schaltflächen hätten? Sie müssten 100 Attribute zur Datei hinzufügen; es würde sich schnell in einen Wartungsalbtraum verwandeln.
Mit JavaScript könnten Sie leicht eine Ereignisbehandlerfunktion zu allen Schaltflächen auf der Seite hinzufügen, unabhängig davon, wie viele es gibt, indem Sie so etwas verwenden:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}
```

Schließlich werden viele gängige Serverkonfigurationen Inline-JavaScript aus Sicherheitsgründen nicht zulassen.

**Sie sollten niemals die HTML-Ereignisbehandlerattribute verwenden** — diese sind veraltet und ihre Verwendung wird als schlechte Praxis angesehen.

## Ereignisobjekte

Manchmal sehen Sie in einer Ereignisbehandlerfunktion einen Parameter, der mit einem Namen wie `event`, `evt` oder `e` spezifiziert ist.
Dies nennt man das **Ereignisobjekt**, und es wird automatisch an Ereignisbehandler übergeben, um zusätzliche Funktionen und Informationen bereitzustellen.
Zum Beispiel lassen Sie uns unser Zufallsfarbbeispiel umschreiben, um ein Ereignisobjekt einzubeziehen:

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
> Sie können den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-eventobject.html) für dieses Beispiel auf GitHub finden (auch [live ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)).

Hier sehen Sie, dass wir ein Ereignisobjekt, **e**, in die Funktion einbinden und in der Funktion eine Hintergrundfarbstil auf `e.target` setzen — was die Schaltfläche selbst ist.
Die `target` Eigenschaft des Ereignisobjekts ist immer eine Referenz auf das Element, auf dem das Ereignis aufgetreten ist.
In diesem Beispiel setzen wir also eine zufällige Hintergrundfarbe auf die Schaltfläche, nicht auf die Seite.

> [!NOTE]
> Sie können jedem beliebigen Namen für das Ereignisobjekt verwenden — Sie müssen nur einen Namen wählen, den Sie innerhalb der Ereignisbehandlerfunktion referenzieren können.
> `e`, `evt` und `event` werden von Entwicklern häufig verwendet, da sie kurz und leicht zu merken sind.
> Es ist immer gut, konsistent zu sein — mit sich selbst und wenn möglich mit anderen.

### Zusätzliche Eigenschaften von Ereignisobjekten

Die meisten Ereignisobjekte haben einen Standardsatz von Eigenschaften und Methoden, die auf dem Ereignisobjekt verfügbar sind; siehe die [`Event`](/de/docs/Web/API/Event) Objektreferenz für eine vollständige Liste.

Einige Ereignisobjekte fügen zusätzliche Eigenschaften hinzu, die für diesen besonderen Ereignistyp relevant sind. Zum Beispiel das [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignis, das ausgelöst wird, wenn der Benutzer eine Taste drückt. Sein Ereignisobjekt ist ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent), das ein spezialisiertes `Event` Objekt mit einer `key` Eigenschaft ist, die Ihnen sagt, welche Taste gedrückt wurde:

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

{{EmbedLiveSample("Zusätzliche Eigenschaften von Ereignisobjekten", 100, 100)}}

## Verhindern des Standardverhaltens

Manchmal stoßen Sie auf eine Situation, in der Sie verhindern möchten, dass ein Ereignis das tut, was es standardmäßig tut.
Das häufigste Beispiel ist ein Webformular, zum Beispiel ein benutzerdefiniertes Registrierungsformular.
Wenn Sie die Daten eingeben und den Absenden-Button klicken, ist das natürliche Verhalten, dass die Daten an eine bestimmte Seite auf dem Server zur Verarbeitung gesendet werden und der Browser zu einer Art "Erfolgsmeldung" Seite umgeleitet wird (oder zur selben Seite, wenn keine andere angegeben ist).

Das Problem entsteht, wenn der Benutzer die Daten nicht korrekt übermittelt hat — als Entwickler möchten Sie die Übermittlung an den Server verhindern und eine Fehlermeldung anzeigen, die sagt, was falsch ist und was getan werden muss, um die Dinge in Ordnung zu bringen.
Einige Browser unterstützen automatische Funktionen zur Formulardatenvalidierung, aber da viele dies nicht tun, wird empfohlen, sich nicht auf diese zu verlassen und eigene Validierungsprüfungen zu implementieren.
Schauen wir uns ein Beispiel an.

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

Jetzt etwas JavaScript — hier implementieren wir eine grundlegende Überprüfung innerhalb eines Handlers für das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event) Ereignis (das Submit-Ereignis wird auf einem Formular ausgelöst, wenn es abgeschickt wird), das testet, ob die Textfelder leer sind.
Wenn sie es sind, rufen wir die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) Funktion auf dem Ereignisobjekt auf — die die Formularübermittlung stoppt — und zeigen dann eine Fehlermeldung im Absatz unter unserem Formular an, um dem Benutzer zu sagen, was falsch ist:

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

Offensichtlich ist dies eine ziemlich schwache Formularvalidierung — es würde den Benutzer nicht daran hindern, das Formular mit Leerzeichen oder Zahlen in den Feldern zu validieren, zum Beispiel — aber es ist für Beispielzwecke in Ordnung.

Sie können das vollständige Beispiel [live sehen](https://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html) — probieren Sie es dort aus. Für den vollständigen Quellcode siehe [preventdefault-validation.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/preventdefault-validation.html).

## Es sind nicht nur Webseiten

Ereignisse sind nicht einzigartig für JavaScript — die meisten Programmiersprachen haben irgendein Modell für Ereignisse, und die Art, wie das Modell funktioniert, unterscheidet sich oft von der Art, wie es in JavaScript passiert.
Tatsächlich unterscheidet sich das Ereignismodell in JavaScript für Webseiten vom Ereignismodell für JavaScript, wie es in anderen Umgebungen verwendet wird.

Zum Beispiel ist [Node.js](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) eine sehr beliebte JavaScript-Laufzeit, die es Entwicklern ermöglicht, mit JavaScript Netzwerk- und serverseitige Anwendungen zu entwickeln.
Das [Node.js-Ereignismodell](https://nodejs.org/api/events.html) basiert auf Listenn zu hören, während sie regelmäßig Ereignisse von Emittern auslösen — es hört sich nicht so anders an, aber der Code unterscheidet sich erheblich und verwendet Funktionen wie `on()`, um einen Ereignis-Listener zu registrieren, und `once()`, um einen einmal zu registrierenden Ereignis-Listener zu registrieren.
Die Node.js [HTTP-Verbindungsereignis-Dokumentation](https://nodejs.org/api/http.html#event-connect) bietet ein gutes Beispiel.

Sie können auch JavaScript verwenden, um plattformübergreifende Add-Ons — Funktionserweiterungen für Browser — mit einer Technologie zu entwickeln, die als [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) bekannt ist.
Das Ereignismodell ist dem der Webereignisse ähnlich, aber etwas anders — Ereignis-Listener-Eigenschaften werden in {{Glossary("camel_case", "Camel Case")}} geschrieben (wie `onMessage` statt `onmessage`) und müssen mit der `addListener`-Funktion kombiniert werden.
Siehe die [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples) Seite für ein Beispiel.

Sie müssen an diesem Punkt Ihres Lernens nichts über andere solche Umgebungen verstehen; wir wollten nur klarstellen, dass Ereignisse in verschiedenen Programmierumgebungen unterschiedlich sein können.

## Zusammenfassung

In diesem Kapitel haben wir gelernt, was Ereignisse sind, wie man auf Ereignisse hört und wie man auf sie reagiert.

Sie haben mittlerweile gesehen, dass Elemente in einer Webseite innerhalb anderer Elemente verschachtelt sein können. Zum Beispiel haben wir im Beispiel [Verhindern des Standardverhaltens](#verhindern_des_standardverhaltens) einige Textfelder, die sich in {{htmlelement("div")}}-Elementen befinden, die wiederum in einem {{htmlelement("form")}}-Element platziert sind. Was passiert, wenn ein Klick-Ereignislistener an das `<form>`-Element gebunden ist und der Benutzer innerhalb eines der Textfelder klickt? Die zugehörige Ereignisbehandler-Funktion wird immer noch über einen als _Ereignisweiterleitung_ bezeichneten Prozess ausgelöst, der in der nächsten Lektion behandelt wird.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Functions","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

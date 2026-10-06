---
title: Einführung in Events
short-title: Events
slug: Learn_web_development/Core/Scripting/Events
l10n:
  sourceCommit: c529f2672b3541cc28ea687ff9266f98b1734191
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Functions","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

Events sind Ereignisse, die in dem System auftreten, das Sie programmieren. Das System informiert Ihren Code darüber, damit er darauf reagieren kann.
Wenn eine Person beispielsweise auf einer Webseite auf einen Button klickt, möchten Sie möglicherweise darauf reagieren, indem Sie ein Informationsfeld anzeigen.
In diesem Artikel besprechen wir wichtige Konzepte rund um Events und die Grundlagen ihrer Funktionsweise in Browsern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Kenntnisse in <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a> sowie Vertrautheit mit den JavaScript-Grundlagen aus den vorherigen Lektionen.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Events sind: Signale, die der Browser auslöst, wenn etwas Wichtiges geschieht, und auf die Entwickler mit Code reagieren können.</li>
          <li>Event-Handler mit <code>addEventListener()</code> (und <code>removeEventListener()</code>) sowie Event-Handler-Properties einrichten.</li>
          <li>Inline-Event-Handler-Attribute und warum Sie diese nicht verwenden sollten.</li>
          <li>Event-Objekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Event?

Events sind Ereignisse, die in dem System auftreten, das Sie programmieren. Wenn ein Event auftritt, erzeugt (oder „feuert“) das System eine Art Signal und stellt einen Mechanismus bereit, mit dem automatisch eine Aktion ausgeführt werden kann – also Code –, wenn das Event auftritt.
Events werden innerhalb des Browserfensters ausgelöst und sind meist mit einem bestimmten Objekt darin verbunden. Das kann ein einzelnes Element, eine Gruppe von Elementen, das im aktuellen Tab geladene HTML-Dokument oder das gesamte Browserfenster sein.
Es können viele verschiedene Arten von Events auftreten.

Zum Beispiel:

- Eine Person wählt ein bestimmtes Element aus, klickt darauf oder bewegt den Mauszeiger darüber.
- Eine Person drückt eine Taste auf der Tastatur.
- Eine Person ändert die Größe des Browserfensters oder schließt es.
- Eine Webseite wird vollständig geladen.
- Ein Formular wird abgesendet.
- Ein Video wird abgespielt, pausiert oder endet.
- Ein Fehler tritt auf.

Daran – und an einem Blick auf den [Event-Index](/de/docs/Web/API/Document_Object_Model/Events#event_index) – erkennen Sie, dass **sehr viele** Events ausgelöst werden können.

Um auf ein Event zu reagieren, fügen Sie einen **Event-Listener** hinzu. Das ist ein Codeteil, der darauf wartet, dass das Event ausgelöst wird. Wenn dies geschieht, wird eine **Event-Handler**-Funktion aufgerufen, die vom Event-Listener referenziert wird oder in ihm enthalten ist und auf das Event reagiert. Wenn ein solcher Codeblock eingerichtet wird, um auf ein Event zu reagieren, sprechen wir davon, einen **Event-Handler zu registrieren**.

### Ein Beispiel: Ein Klick-Event verarbeiten

Im folgenden Beispiel gibt es auf der Seite einen einzelnen {{htmlelement("button")}}:

```html
<button>Change color</button>
```

```css hidden
button {
  margin: 10px;
}
```

Dazu kommt etwas JavaScript. Im nächsten Abschnitt sehen wir uns den Code genauer an. Für den Moment genügt es zu wissen, dass er dem `"click"`-Event des Buttons einen Event-Listener hinzufügt. Die darin enthaltene Handler-Funktion reagiert auf das Event, indem sie die Hintergrundfarbe der Seite auf eine zufällige Farbe setzt:

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

Das Ergebnis sieht wie folgt aus. Klicken Sie auf den Button:

{{ EmbedLiveSample('An example: handling a click event', '100%', 200, "", "") }}

## `addEventListener()` verwenden

Wie wir im letzten Beispiel gesehen haben, besitzen Objekte, die Events auslösen können, eine [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode. Sie ist der empfohlene Weg, Event-Listener hinzuzufügen.

Sehen wir uns den Code aus dem letzten Beispiel genauer an:

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

Das HTML-Element {{HTMLElement("button")}} löst ein `click`-Event aus, wenn eine Person darauf klickt. Wir rufen seine `addEventListener()`-Methode auf, um einen Event-Listener hinzuzufügen. Die Methode erhält zwei Parameter:

- die Zeichenfolge `"click"`, die angibt, dass wir auf das `click`-Event warten möchten. Buttons können viele weitere Events auslösen, etwa [`"mouseover"`](/de/docs/Web/API/Element/mouseover_event), wenn der Mauszeiger über den Button bewegt wird, oder [`"keydown"`](/de/docs/Web/API/Element/keydown_event), wenn bei fokussiertem Button eine Taste gedrückt wird.
- eine Funktion, die aufgerufen wird, wenn das Event auftritt. In unserem Fall erzeugt die definierte anonyme Funktion eine zufällige RGB-Farbe und setzt die {{cssxref("background-color")}} des [`<body>`](/de/docs/Web/HTML/Reference/Elements/body) der Seite auf diese Farbe.

Sie können auch eine separate benannte Funktion erstellen und sie als zweiten Parameter an `addEventListener()` übergeben:

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

### Auf andere Events warten

Ein `<button>`-Element kann viele verschiedene Events auslösen. Probieren wir einige davon aus.

Erstellen Sie zunächst eine neue HTML-Datei auf Ihrem lokalen Dateisystem und fügen Sie den folgenden Code ein:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Random color example — addEventListener()</title>
    <style>
      button {
        margin: 10px;
      }
    </style>
  </head>
  <body>
    <button>Change color</button>
    <script>
      const btn = document.querySelector("button");

      function random(number) {
        return Math.floor(Math.random() * (number + 1));
      }

      btn.addEventListener("click", () => {
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        document.body.style.backgroundColor = rndCol;
      });
    </script>
  </body>
</html>
```

Öffnen Sie die Datei in Ihrem Browser und probieren Sie sie aus. Sie ist lediglich eine Kopie des einfachen Beispiels mit zufälligen Farben, das Sie bereits kennengelernt haben.

Ersetzen Sie nun `click` nacheinander durch die folgenden Werte und beobachten Sie die Ergebnisse im Browser:

- [`focus`](/de/docs/Web/API/Element/focus_event) und [`blur`](/de/docs/Web/API/Element/blur_event) – Die Farbe ändert sich, wenn der Button den Fokus erhält oder verliert. Drücken Sie die Tabulatortaste, um den Button zu fokussieren, und erneut, um den Fokus von ihm wegzubewegen.
  Diese Events werden häufig verwendet, um beim Fokussieren eines Formularfelds Hinweise zum Ausfüllen anzuzeigen oder eine Fehlermeldung auszugeben, wenn ein Formularfeld einen ungültigen Wert enthält.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event) – Die Farbe ändert sich nur bei einem Doppelklick auf den Button.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`mouseout`](/de/docs/Web/API/Element/mouseout_event) – Die Farbe ändert sich, wenn der Mauszeiger über den Button bewegt wird beziehungsweise ihn verlässt.

Einige Events, etwa `click`, sind für nahezu jedes Element verfügbar. Andere sind spezifischer und nur in bestimmten Situationen sinnvoll: Das Event [`play`](/de/docs/Web/API/HTMLMediaElement/play_event) ist beispielsweise nur für Elemente mit Wiedergabefunktion verfügbar, etwa {{htmlelement("video")}}.

### Listener entfernen

Wenn Sie mit `addEventListener()` einen Event-Listener hinzugefügt haben, können Sie ihn bei Bedarf wieder entfernen. Üblicherweise verwenden Sie dazu die Methode [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener). Die folgende Zeile würde beispielsweise den zuvor gezeigten Event-Handler für `click` entfernen:

```js
btn.removeEventListener("click", changeBackground);
```

Bei einfachen, kleinen Programmen müssen alte, nicht mehr verwendete Event-Handler nicht unbedingt entfernt werden. Bei größeren, komplexeren Programmen kann dies jedoch die Effizienz verbessern.
Außerdem können Sie durch das Entfernen von Event-Handlern denselben Button je nach Situation unterschiedliche Aktionen ausführen lassen: Sie müssen lediglich Handler hinzufügen oder entfernen.

### Mehrere Listener für ein einzelnes Event hinzufügen

Wenn Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mehrfach mit unterschiedlichen Handlern aufrufen, können als Reaktion auf ein einzelnes Event mehrere Handler-Funktionen ausgeführt werden:

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

Nun würden beide Funktionen ausgeführt, wenn auf das Element geklickt wird.

## Andere Möglichkeiten zur Registrierung von Event-Listenern

Wir empfehlen, Event-Handler mit `addEventListener()` zu registrieren. Dies ist die leistungsfähigste Methode und eignet sich am besten für komplexere Programme. Es gibt jedoch zwei weitere Möglichkeiten, Event-Handler zu registrieren, auf die Sie stoßen könnten: _Event-Handler-Properties_ und _Inline-Event-Handler_.

### Event-Handler-Properties

Objekte wie Buttons, die Events auslösen können, haben in der Regel auch Properties, deren Namen aus `on` und dem Namen eines Events bestehen. Elemente haben beispielsweise eine Property namens `onclick`.
Dies wird als **Event-Handler-Property** bezeichnet. Um auf das Event zu reagieren, können Sie der Property eine Handler-Funktion zuweisen.

Wir könnten das Beispiel mit der zufälligen Farbe folgendermaßen umschreiben:

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

Sie können der Handler-Property auch eine benannte Funktion zuweisen:

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

Event-Handler-Properties haben gegenüber `addEventListener()` Nachteile. Einer der wichtigsten ist, dass Sie nicht [mehr als einen Listener für ein einzelnes Event hinzufügen](#mehrere_listener_für_ein_einzelnes_event_hinzufügen) können. Das folgende Muster funktioniert nicht, da jeder weitere Versuch, den Wert der Property festzulegen, den vorherigen überschreibt:

```js
element.onclick = function1;
element.onclick = function2;
```

### Inline-Event-Handler – verwenden Sie diese nicht

Möglicherweise begegnet Ihnen in Code auch ein Muster wie dieses:

```html example-bad
<button onclick="bgChange()">Press me</button>
```

```js
function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
```

Die früheste Methode zur Registrierung von Event-Handlern im Web verwendete [_HTML-Event-Handler-Attribute_](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) (oder _Inline-Event-Handler_) wie das oben gezeigte. Der Attributwert enthält den JavaScript-Code, der beim Auftreten des Events ausgeführt werden soll.
Das obige Beispiel ruft eine Funktion auf, die innerhalb eines {{htmlelement("script")}}-Elements auf derselben Seite definiert ist. Sie könnten JavaScript aber auch direkt in das Attribut schreiben, zum Beispiel:

```html example-bad
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

Für viele Event-Handler-Properties gibt es entsprechende HTML-Attribute. Sie sollten diese jedoch nicht verwenden – ihre Verwendung gilt als schlechte Praxis.
Für eine sehr schnelle Lösung mag ein Event-Handler-Attribut einfach erscheinen, doch diese Attribute werden schnell unübersichtlich und ineffizient.

Zunächst ist es keine gute Idee, HTML und JavaScript zu vermischen, weil der Code dadurch schwer zu lesen wird. Es ist gute Praxis, JavaScript getrennt zu halten. Liegt es in einer separaten Datei, können Sie es zudem in mehreren HTML-Dokumenten verwenden.

Auch innerhalb einer einzelnen Datei sind Inline-Event-Handler keine gute Idee.
Bei einem Button mag das noch in Ordnung sein – aber was wäre bei 100 Buttons? Sie müssten der Datei 100 Attribute hinzufügen, was die Wartung schnell zum Albtraum machen würde.
Mit JavaScript können Sie allen Buttons auf der Seite unabhängig von ihrer Anzahl ganz einfach eine Event-Handler-Funktion hinzufügen, etwa so:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}
```

Schließlich untersagen viele gängige Serverkonfigurationen aus Sicherheitsgründen Inline-JavaScript.

**Verwenden Sie niemals HTML-Event-Handler-Attribute** – sie sind veraltet, und ihre Verwendung gilt als schlechte Praxis.

## Event-Objekte

Manchmal sehen Sie innerhalb einer Event-Handler-Funktion einen Parameter mit einem Namen wie `event`, `evt` oder `e`.
Dieser wird als **Event-Objekt** bezeichnet und automatisch an Event-Handler übergeben, um zusätzliche Funktionen und Informationen bereitzustellen.
Schreiben wir beispielsweise unser Beispiel mit der zufälligen Farbe so um, dass es ein Event-Objekt verwendet:

```html hidden live-sample___event-object
<button>Change color</button>
```

```css hidden live-sample___event-object
button {
  margin: 10px;
  font-size: 300%;
  padding: 30px;
}
```

```js live-sample___event-object
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

Sehen Sie sich das folgende interaktive Beispiel an. Ja, wir haben den `<button>` wirklich groß gemacht!

{{embedlivesample("event-object", "100%", 150)}}

Wir nehmen ein Event-Objekt, **e**, als Parameter in die Funktion auf und setzen für `e.target` – also den Button selbst – eine Hintergrundfarbe.
Die Property `target` des Event-Objekts verweist immer auf das Element, bei dem das Event aufgetreten ist.
In diesem Beispiel setzen wir also eine zufällige Hintergrundfarbe für den Button, nicht für die Seite.

> [!NOTE]
> Sie können dem Event-Objekt einen beliebigen Namen geben. Wichtig ist nur, dass Sie innerhalb der Event-Handler-Funktion darauf verweisen können.
> Entwickler verwenden häufig `e`, `evt` oder `event`, weil diese Namen kurz und leicht zu merken sind.
> Es ist immer gut, bei der Benennung einheitlich vorzugehen – für sich selbst und nach Möglichkeit auch im Team.

### Zusätzliche Properties von Event-Objekten

Die meisten Event-Objekte verfügen über eine Standardauswahl an Properties und Methoden. Eine vollständige Liste finden Sie in der Referenz zum [`Event`](/de/docs/Web/API/Event)-Objekt.

Einige Event-Objekte haben zusätzliche Properties, die für den jeweiligen Event-Typ relevant sind. Das Event [`keydown`](/de/docs/Web/API/Element/keydown_event) wird beispielsweise ausgelöst, wenn eine Person eine Taste drückt. Sein Event-Objekt ist ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent): ein spezialisiertes `Event`-Objekt mit einer Property `key`, die angibt, welche Taste gedrückt wurde:

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

Geben Sie etwas in das Textfeld ein und sehen Sie sich die Ausgabe an:

{{EmbedLiveSample("Extra_properties_of_event_objects", 100, 100)}}

## Standardverhalten verhindern

Manchmal möchten Sie verhindern, dass ein Event seine standardmäßige Aktion ausführt.
Das häufigste Beispiel dafür ist ein Webformular, etwa ein benutzerdefiniertes Registrierungsformular.
Wenn Sie die Angaben ausfüllen und auf den Absende-Button klicken, werden die Daten normalerweise zur Verarbeitung an eine festgelegte Seite auf dem Server gesendet. Anschließend leitet der Browser zu einer Seite mit einer Erfolgsmeldung weiter – oder, falls keine andere Seite festgelegt ist, zur selben Seite.

Problematisch wird es, wenn die eingegebenen Daten nicht korrekt sind: Als Entwickler möchten Sie dann das Senden an den Server verhindern und mit einer Fehlermeldung erklären, was falsch ist und wie es behoben werden kann.
Einige Browser bieten Funktionen zur automatischen Validierung von Formulardaten. Da Sie sich nicht in allen Fällen darauf verlassen können, sollten Sie eigene Validierungsprüfungen implementieren.
Sehen wir uns ein Beispiel an.

Zunächst ein einfaches HTML-Formular, in das Sie Ihren Vor- und Nachnamen eingeben müssen:

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

Nun etwas JavaScript: In einem Handler für das Event [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event) – das beim Absenden eines Formulars ausgelöst wird – prüfen wir, ob die Textfelder leer sind.
Falls ja, rufen wir die Funktion [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) am Event-Objekt auf. Dadurch wird das Absenden des Formulars verhindert. Anschließend zeigen wir im Absatz unter dem Formular eine Fehlermeldung an, die erklärt, was falsch ist:

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

Natürlich ist diese Formularvalidierung ziemlich schwach: Sie würde beispielsweise nicht verhindern, dass die Felder nur mit Leerzeichen oder Zahlen ausgefüllt werden. Für dieses Beispiel reicht sie jedoch aus.

Sie können sich das vollständige Beispiel [live ansehen](https://mdn.github.io/learning-area/javascript/building-blocks/preventdefault/) und ausprobieren. Sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/preventdefault/) an.

## Events gibt es nicht nur auf Webseiten

Events sind keine Besonderheit von JavaScript: Die meisten Programmiersprachen haben eine Art Event-Modell, das oft anders funktioniert als das von JavaScript.
Tatsächlich unterscheidet sich sogar das Event-Modell von JavaScript für Webseiten von demjenigen, das JavaScript in anderen Umgebungen verwendet.

[Node.js](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) ist beispielsweise eine sehr beliebte JavaScript-Laufzeitumgebung, mit der Entwickler Netzwerk- und serverseitige Anwendungen in JavaScript erstellen können.
Das [Event-Modell von Node.js](https://nodejs.org/api/events.html) verwendet Listener, um auf Events zu warten, und Emitter, um Events auszulösen. Das klingt zunächst ähnlich, doch der Code unterscheidet sich deutlich: Mit Funktionen wie `on()` wird ein Event-Listener registriert; mit `once()` wird ein Event-Listener registriert, der sich nach einmaliger Ausführung wieder entfernt.
Die [Node.js-Dokumentation zum HTTP-Event `connect`](https://nodejs.org/api/http.html#event-connect) bietet dafür ein gutes Beispiel.

Mit JavaScript können Sie mithilfe einer Technologie namens [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) auch browserübergreifende Add-ons erstellen, die Browser um Funktionen erweitern.
Das Event-Modell ähnelt dem für Webseiten, unterscheidet sich aber in einigen Punkten: Event-Listener-Properties werden in {{Glossary("camel_case", "Camel Case")}} geschrieben (etwa `onMessage` statt `onmessage`) und müssen mit der Funktion `addListener` kombiniert werden.
Ein Beispiel finden Sie auf der Seite zu [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples).

Zu diesem Zeitpunkt müssen Sie noch nichts über solche anderen Umgebungen wissen. Wir möchten lediglich verdeutlichen, dass sich Events je nach Programmierumgebung unterscheiden können.

## Zusammenfassung

In diesem Kapitel haben Sie gelernt, was Events sind, wie Sie auf sie warten und wie Sie auf sie reagieren.

Sie haben inzwischen gesehen, dass Elemente auf einer Webseite in anderen Elementen verschachtelt sein können. Im Beispiel zum [Verhindern des Standardverhaltens](#standardverhalten_verhindern) befinden sich etwa Textfelder innerhalb von {{htmlelement("div")}}-Elementen, die wiederum in einem {{htmlelement("form")}}-Element liegen. Was passiert, wenn dem `<form>`-Element ein Klick-Event-Listener hinzugefügt wurde und eine Person in eines der Textfelder klickt? Die zugehörige Event-Handler-Funktion wird dennoch ausgeführt. Dafür sorgt ein Vorgang namens _Event Bubbling_, den die nächste Lektion behandelt.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Functions","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

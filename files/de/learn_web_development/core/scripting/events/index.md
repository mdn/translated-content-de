---
title: Einführung in Events
short-title: Events
slug: Learn_web_development/Core/Scripting/Events
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Functions","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

Events sind Ereignisse, die in dem von Ihnen programmierten System auftreten. Das System teilt sie Ihnen mit, damit Ihr Code darauf reagieren kann.
Wenn jemand beispielsweise auf einer Webseite auf eine Schaltfläche klickt, möchten Sie darauf vielleicht reagieren, indem Sie ein Informationsfeld anzeigen.
In diesem Artikel behandeln wir einige wichtige Konzepte rund um Events und sehen uns die Grundlagen ihrer Funktionsweise im Browser an.

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
          <li>Was Events sind: Signale, die der Browser auslöst, wenn etwas Bedeutsames geschieht, und auf die Entwickler mit Code reagieren können.</li>
          <li>Event-Handler mit <code>addEventListener()</code> (und <code>removeEventListener()</code>) sowie über Event-Handler-Eigenschaften einrichten.</li>
          <li>Inline-Event-Handler-Attribute und warum Sie diese nicht verwenden sollten.</li>
          <li>Event-Objekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Event?

Events sind Ereignisse, die in dem von Ihnen programmierten System auftreten. Wenn ein Event eintritt, erzeugt (oder „löst“) das System ein Signal aus und stellt einen Mechanismus bereit, mit dem automatisch eine Aktion ausgeführt werden kann – also Code –, sobald das Event eintritt.
Events werden innerhalb des Browserfensters ausgelöst und sind meist mit einem bestimmten Objekt darin verknüpft. Das kann ein einzelnes Element, eine Gruppe von Elementen, das im aktuellen Tab geladene HTML-Dokument oder das gesamte Browserfenster sein.
Es gibt viele verschiedene Arten von Events.

Zum Beispiel:

- Jemand wählt ein bestimmtes Element aus, klickt darauf oder bewegt den Mauszeiger darüber.
- Jemand drückt eine Taste auf der Tastatur.
- Jemand ändert die Größe des Browserfensters oder schließt es.
- Eine Webseite wird vollständig geladen.
- Ein Formular wird abgesendet.
- Ein Video wird abgespielt, pausiert oder endet.
- Ein Fehler tritt auf.

Daran – und an einem Blick auf den [Event-Index](/de/docs/Web/API/Document_Object_Model/Events#event_index) – erkennen Sie, dass **sehr viele** verschiedene Events ausgelöst werden können.

Um auf ein Event zu reagieren, fügen Sie einen **Event-Listener** hinzu. Dieser Teil des Codes wartet darauf, dass das Event ausgelöst wird. Sobald das geschieht, wird eine **Event-Handler**-Funktion aufgerufen, die im Event-Listener referenziert oder enthalten ist und auf das Event reagiert. Wenn ein solcher Codeblock für die Reaktion auf ein Event eingerichtet wird, spricht man davon, einen **Event-Handler zu registrieren**.

### Ein Beispiel: ein Klick-Event behandeln

Im folgenden Beispiel befindet sich ein einzelnes {{htmlelement("button")}} auf der Seite:

```html
<button>Change color</button>
```

```css hidden
button {
  margin: 10px;
}
```

Dazu kommt etwas JavaScript. Im nächsten Abschnitt sehen wir uns den Code genauer an. Für den Moment genügt: Er fügt dem `"click"`-Event der Schaltfläche einen Event-Listener hinzu. Die darin enthaltene Handler-Funktion reagiert auf das Event, indem sie die Hintergrundfarbe der Seite auf eine zufällige Farbe setzt:

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

Die Ausgabe des Beispiels sieht wie folgt aus. Klicken Sie auf die Schaltfläche:

{{ EmbedLiveSample('An example: handling a click event', '100%', 200, "", "") }}

## addEventListener() verwenden

Wie wir im letzten Beispiel gesehen haben, besitzen Objekte, die Events auslösen können, eine Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener). Sie ist die empfohlene Möglichkeit, Event-Listener hinzuzufügen.

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

Das HTML-Element {{HTMLElement("button")}} löst ein `click`-Event aus, wenn jemand darauf klickt. Wir rufen seine Methode `addEventListener()` auf, um einen Event-Listener hinzuzufügen. Die Methode nimmt zwei Parameter entgegen:

- Die Zeichenfolge `"click"` gibt an, dass wir auf das `click`-Event reagieren möchten. Schaltflächen können viele weitere Events auslösen, beispielsweise [`"mouseover"`](/de/docs/Web/API/Element/mouseover_event), wenn der Mauszeiger über die Schaltfläche bewegt wird, oder [`"keydown"`](/de/docs/Web/API/Element/keydown_event), wenn eine Taste gedrückt wird, während die Schaltfläche fokussiert ist.
- Eine Funktion, die aufgerufen wird, wenn das Event eintritt. In unserem Fall erzeugt die definierte anonyme Funktion eine zufällige RGB-Farbe und setzt die {{cssxref("background-color")}} des [`<body>`](/de/docs/Web/HTML/Reference/Elements/body)-Elements der Seite auf diese Farbe.

Sie können auch eine separate benannte Funktion erstellen und diese als zweiten Parameter von `addEventListener()` angeben:

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

### Auf andere Events reagieren

Ein `<button>`-Element kann viele verschiedene Events auslösen. Probieren wir einige davon aus.

Erstellen Sie zunächst eine neue HTML-Datei auf Ihrem lokalen Dateisystem und fügen Sie den folgenden Code ein:

```html
<!doctype html>
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

Öffnen Sie die Datei in Ihrem Browser und experimentieren Sie damit. Es handelt sich lediglich um eine Kopie des einfachen Beispiels mit der zufälligen Farbe, das Sie bereits ausprobiert haben.

Ersetzen Sie nun `click` nacheinander durch die folgenden Werte und beobachten Sie das Ergebnis im Browser:

- [`focus`](/de/docs/Web/API/Element/focus_event) und [`blur`](/de/docs/Web/API/Element/blur_event) – Die Farbe ändert sich, wenn die Schaltfläche den Fokus erhält oder verliert. Drücken Sie die Tabulatortaste, um die Schaltfläche zu fokussieren, und drücken Sie sie erneut, um den Fokus von ihr wegzubewegen.
  Diese Events werden häufig verwendet, um beim Fokussieren eines Formularfelds Hinweise zum Ausfüllen anzuzeigen oder eine Fehlermeldung auszugeben, wenn ein Formularfeld einen ungültigen Wert enthält.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event) – Die Farbe ändert sich nur bei einem Doppelklick auf die Schaltfläche.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`mouseout`](/de/docs/Web/API/Element/mouseout_event) – Die Farbe ändert sich, wenn der Mauszeiger über die Schaltfläche bewegt wird beziehungsweise wenn er sie verlässt.

Einige Events, etwa `click`, stehen für fast jedes Element zur Verfügung. Andere sind spezifischer und nur in bestimmten Situationen sinnvoll. Das Event [`play`](/de/docs/Web/API/HTMLMediaElement/play_event) steht beispielsweise nur für Elemente mit Wiedergabefunktion zur Verfügung, etwa {{htmlelement("video")}}.

### Event-Listener entfernen

Wenn Sie einen Event-Listener mit `addEventListener()` hinzugefügt haben, können Sie ihn bei Bedarf wieder entfernen. Üblicherweise verwenden Sie dazu die Methode [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener). Die folgende Zeile würde beispielsweise den zuvor gezeigten `click`-Event-Handler entfernen:

```js
btn.removeEventListener("click", changeBackground);
```

Bei einfachen, kleinen Programmen müssen alte, nicht mehr verwendete Event-Handler nicht unbedingt entfernt werden. Bei größeren und komplexeren Programmen kann das jedoch die Effizienz verbessern.
Die Möglichkeit, Event-Handler zu entfernen, erlaubt es Ihnen außerdem, dieselbe Schaltfläche unter verschiedenen Umständen unterschiedliche Aktionen ausführen zu lassen: Sie müssen lediglich Handler hinzufügen oder entfernen.

### Mehrere Listener für ein einzelnes Event hinzufügen

Wenn Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mehrfach mit unterschiedlichen Handlern aufrufen, können mehrere Handler-Funktionen auf dasselbe Event reagieren:

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

Beim Klicken auf das Element würden nun beide Funktionen ausgeführt.

## Andere Mechanismen für Event-Listener

Wir empfehlen, Event-Handler mit `addEventListener()` zu registrieren. Diese Methode bietet die meisten Möglichkeiten und eignet sich am besten für komplexere Programme. Es gibt jedoch zwei weitere Möglichkeiten, Event-Handler zu registrieren, denen Sie begegnen könnten: _Event-Handler-Eigenschaften_ und _Inline-Event-Handler_.

### Event-Handler-Eigenschaften

Objekte wie Schaltflächen, die Events auslösen können, besitzen in der Regel auch Eigenschaften, deren Name aus `on` und dem Namen eines Events besteht. Elemente haben beispielsweise eine Eigenschaft namens `onclick`.
Eine solche Eigenschaft wird **Event-Handler-Eigenschaft** genannt. Um auf das Event zu reagieren, können Sie der Eigenschaft eine Handler-Funktion zuweisen.

Das Beispiel mit der zufälligen Farbe ließe sich so umschreiben:

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

Sie können der Handler-Eigenschaft auch eine benannte Funktion zuweisen:

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

Event-Handler-Eigenschaften haben gegenüber `addEventListener()` Nachteile. Einer der wichtigsten ist, dass Sie nicht [mehr als einen Listener für ein einzelnes Event hinzufügen](#mehrere_listener_für_ein_einzelnes_event_hinzufügen) können. Das folgende Muster funktioniert nicht, weil jeder weitere Versuch, den Wert der Eigenschaft festzulegen, den vorherigen Wert überschreibt:

```js
element.onclick = function1;
element.onclick = function2;
```

### Inline-Event-Handler – verwenden Sie sie nicht

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

Die früheste im Web verwendete Methode zur Registrierung von Event-Handlern nutzte [_HTML-Event-Handler-Attribute_](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) (oder _Inline-Event-Handler_) wie das oben gezeigte. Der Attributwert enthält den JavaScript-Code, der beim Eintreten des Events ausgeführt werden soll.
Im obigen Beispiel wird eine Funktion aufgerufen, die in einem {{htmlelement("script")}}-Element auf derselben Seite definiert ist. Sie könnten JavaScript aber auch direkt in das Attribut schreiben, zum Beispiel:

```html example-bad
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

Für viele Event-Handler-Eigenschaften gibt es entsprechende HTML-Attribute. Sie sollten diese jedoch nicht verwenden – ihre Verwendung gilt als schlechte Praxis.
Wenn Sie schnell etwas ausprobieren möchten, mag ein Event-Handler-Attribut zunächst einfach erscheinen. Solche Attribute werden aber rasch unübersichtlich und ineffizient.

Schon grundsätzlich ist es keine gute Idee, HTML und JavaScript zu vermischen, weil der Code dadurch schwer lesbar wird. JavaScript getrennt zu halten, ist gute Praxis. Liegt es in einer separaten Datei, können Sie es außerdem in mehreren HTML-Dokumenten verwenden.

Selbst innerhalb einer einzelnen Datei sind Inline-Event-Handler keine gute Idee.
Bei einer Schaltfläche mag es noch gehen – aber was wäre bei 100 Schaltflächen? Sie müssten der Datei 100 Attribute hinzufügen; die Wartung würde schnell zum Albtraum.
Mit JavaScript könnten Sie allen Schaltflächen auf der Seite unabhängig von ihrer Anzahl ganz einfach eine Event-Handler-Funktion hinzufügen, beispielsweise so:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}
```

Außerdem unterbinden viele gängige Serverkonfigurationen Inline-JavaScript aus Sicherheitsgründen.

**Sie sollten HTML-Event-Handler-Attribute niemals verwenden** – sie sind veraltet, und ihre Verwendung gilt als schlechte Praxis.

## Event-Objekte

Manchmal sehen Sie innerhalb einer Event-Handler-Funktion einen Parameter mit einem Namen wie `event`, `evt` oder `e`.
Dabei handelt es sich um das **Event-Objekt**. Es wird automatisch an Event-Handler übergeben und stellt zusätzliche Funktionen und Informationen bereit.
Schreiben wir beispielsweise das Beispiel mit der zufälligen Farbe so um, dass es ein Event-Objekt verwendet:

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

Sehen Sie sich das folgende interaktive Beispiel an. Ja, wir haben das `<button>`-Element wirklich sehr groß gemacht!

{{embedlivesample("event-object", "100%", 150)}}

Wir nehmen ein Event-Objekt namens **e** als Parameter in die Funktion auf und setzen eine Hintergrundfarbe für `e.target` – also für die Schaltfläche selbst.
Die Eigenschaft `target` des Event-Objekts verweist immer auf das Element, bei dem das Event aufgetreten ist.
In diesem Beispiel geben wir daher der Schaltfläche eine zufällige Hintergrundfarbe, nicht der Seite.

> [!NOTE]
> Sie können das Event-Objekt beliebig benennen. Wichtig ist nur, dass Sie innerhalb der Event-Handler-Funktion auf diesen Namen verweisen können.
> Entwickler verwenden häufig `e`, `evt` oder `event`, weil diese Namen kurz und leicht zu merken sind.
> Es ist immer gut, konsistent zu bleiben – sowohl für sich selbst als auch nach Möglichkeit im Team.

### Zusätzliche Eigenschaften von Event-Objekten

Die meisten Event-Objekte verfügen über eine gemeinsame Gruppe von Eigenschaften und Methoden. Eine vollständige Liste finden Sie in der Referenz zum [`Event`](/de/docs/Web/API/Event)-Objekt.

Manche Event-Objekte bieten zusätzliche Eigenschaften, die für die jeweilige Art von Event relevant sind. Das Event [`keydown`](/de/docs/Web/API/Element/keydown_event) wird beispielsweise ausgelöst, wenn eine Taste gedrückt wird. Sein Event-Objekt ist ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent), also ein spezialisiertes `Event`-Objekt mit einer Eigenschaft `key`, die angibt, welche Taste gedrückt wurde:

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

Geben Sie etwas in das Textfeld ein und beobachten Sie die Ausgabe:

{{EmbedLiveSample("Extra_properties_of_event_objects", 100, 100)}}

## Standardverhalten verhindern

Manchmal möchten Sie verhindern, dass ein Event die Aktion ausführt, die standardmäßig damit verbunden ist.
Ein häufiges Beispiel ist ein Webformular, etwa ein benutzerdefiniertes Registrierungsformular.
Nachdem Sie die Angaben eingetragen und auf die Schaltfläche zum Absenden geklickt haben, werden die Daten normalerweise zur Verarbeitung an eine bestimmte Seite auf dem Server gesendet. Anschließend leitet der Browser auf eine Seite mit einer Erfolgsmeldung weiter – oder auf dieselbe Seite, falls keine andere angegeben ist.

Problematisch wird es, wenn die Angaben nicht korrekt sind. Als Entwickler möchten Sie dann verhindern, dass die Daten an den Server gesendet werden, und stattdessen eine Fehlermeldung anzeigen, die erklärt, was falsch ist und wie sich der Fehler beheben lässt.
Einige Browser bieten Funktionen zur automatischen Validierung von Formulardaten. Da das nicht für alle gilt, sollten Sie sich nicht darauf verlassen, sondern eigene Validierungsprüfungen implementieren.
Sehen wir uns ein Beispiel an.

Zunächst ein einfaches HTML-Formular, in das Vor- und Nachname eingegeben werden sollen:

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

Nun etwas JavaScript: Hier implementieren wir eine einfache Prüfung in einem Handler für das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Event, das beim Absenden eines Formulars ausgelöst wird. Die Prüfung ermittelt, ob die Textfelder leer sind.
Wenn das der Fall ist, rufen wir die Funktion [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Event-Objekts auf. Dadurch wird das Absenden des Formulars verhindert. Anschließend zeigen wir im Absatz unter dem Formular eine Fehlermeldung an, die das Problem beschreibt:

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

Diese Formularvalidierung ist natürlich recht schwach: Sie würde beispielsweise nicht verhindern, dass das Formular mit Leerzeichen oder Zahlen in den Feldern abgesendet wird. Für ein Beispiel reicht sie aber aus.

Sie können das vollständige Beispiel [live ausprobieren](https://mdn.github.io/learning-area/javascript/building-blocks/preventdefault/). Sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/preventdefault/) an.

## Events gibt es nicht nur auf Webseiten

Events gibt es nicht nur in JavaScript. Die meisten Programmiersprachen besitzen eine Art Event-Modell, dessen Funktionsweise sich häufig von der in JavaScript unterscheidet.
Tatsächlich unterscheidet sich sogar das Event-Modell von JavaScript für Webseiten von dem Modell, das bei JavaScript in anderen Umgebungen verwendet wird.

[Node.js](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) ist beispielsweise eine sehr beliebte JavaScript-Laufzeitumgebung, mit der Entwickler JavaScript für Netzwerk- und serverseitige Anwendungen verwenden können.
Das [Event-Modell von Node.js](https://nodejs.org/api/events.html) verwendet Listener, die auf Events warten, und Emitter, die Events auslösen. Das klingt nicht sehr anders, doch der Code unterscheidet sich deutlich: Funktionen wie `on()` registrieren einen Event-Listener, während `once()` einen Event-Listener registriert, der nach seiner ersten Ausführung wieder entfernt wird.
Die Node.js-Dokumentation zum [HTTP-Event connect](https://nodejs.org/api/http.html#event-connect) enthält ein gutes Beispiel.

Mit JavaScript können Sie mithilfe einer Technologie namens [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) auch browserübergreifende Add-ons entwickeln, die den Funktionsumfang von Browsern erweitern.
Das Event-Modell ähnelt dem für Webseiten, unterscheidet sich aber in einigen Punkten: Event-Listener-Eigenschaften werden in {{Glossary("camel_case", "Camel Case")}} geschrieben (beispielsweise `onMessage` statt `onmessage`) und müssen mit der Funktion `addListener` kombiniert werden.
Ein Beispiel finden Sie auf der Seite zu [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples).

In dieser Phase müssen Sie nichts über solche anderen Umgebungen wissen. Wir möchten lediglich verdeutlichen, dass sich Events je nach Programmierumgebung unterscheiden können.

## Zusammenfassung

In diesem Kapitel haben wir gelernt, was Events sind, wie man auf sie wartet und wie man auf sie reagiert.

Sie haben inzwischen gesehen, dass Elemente einer Webseite in anderen Elementen verschachtelt sein können. Im Beispiel zum [Verhindern des Standardverhaltens](#standardverhalten_verhindern) befinden sich etwa Textfelder in {{htmlelement("div")}}-Elementen, die wiederum in einem {{htmlelement("form")}}-Element liegen. Was geschieht, wenn dem `<form>`-Element ein Listener für Klick-Events hinzugefügt wird und jemand in eines der Textfelder klickt? Die zugehörige Event-Handler-Funktion wird trotzdem ausgeführt. Der dafür verantwortliche Vorgang heißt _Event-Bubbling_ und wird in der nächsten Lektion behandelt.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Functions","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

---
title: Einführung in Ereignisse
slug: Learn/JavaScript/Building_blocks/Events
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Event_bubbling", "Learn/JavaScript/Building_blocks")}}

Ereignisse sind Dinge, die im System geschehen, das Sie programmieren, und über die das System Sie informiert, damit Ihr Code darauf reagieren kann.

Wenn der Benutzer beispielsweise auf eine Schaltfläche auf einer Webseite klickt, möchten Sie möglicherweise auf diese Aktion reagieren, indem Sie ein Informationsfenster anzeigen.
In diesem Artikel diskutieren wir einige wichtige Konzepte rund um Ereignisse und betrachten, wie sie in Browsern funktionieren.
Dies wird keine umfassende Untersuchung sein, sondern nur das, was Sie in diesem Stadium wissen müssen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML, CSS und
        <a href="/de/docs/Learn/JavaScript/First_steps"
          >JavaScript erste Schritte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das grundlegende Verständnis der Theorie von Ereignissen, wie sie in
        Browsern funktionieren und wie Ereignisse sich in unterschiedlichen
        Programmierumgebungen unterscheiden können.
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Ereignis?

Ereignisse sind Dinge, die im System geschehen, das Sie programmieren — das System erzeugt (oder "löst") ein Signal irgendeiner Art, wenn ein Ereignis eintritt, und bietet einen Mechanismus, durch den eine Aktion automatisch ausgeführt werden kann (dh, dass Code ausgeführt wird), wenn das Ereignis eintritt.
Ereignisse werden innerhalb des Browserfensters ausgelöst und sind oft an einen bestimmten Gegenstand gebunden, der sich darin befindet. Dies könnte ein einzelnes Element, eine Gruppe von Elementen, das im aktuellen Tab geladene HTML-Dokument oder das gesamte Browserfenster sein.
Es gibt viele verschiedene Arten von Ereignissen, die auftreten können.

Zum Beispiel:

- Der Benutzer wählt, klickt oder bewegt den Mauszeiger über ein bestimmtes Element.
- Der Benutzer wählt eine Taste auf der Tastatur.
- Der Benutzer ändert die Größe des Browserfensters oder schließt es.
- Eine Webseite wird vollständig geladen.
- Ein Formular wird abgeschickt.
- Ein Video wird abgespielt, pausiert oder endet.
- Ein Fehler tritt auf.

Sie können aus diesem (und einem Blick auf die MDN-Referenz für [Ereignisse](/de/docs/Web/Events)) entnehmen, dass es **sehr viele** Ereignisse gibt, die ausgelöst werden können.

Um auf ein Ereignis zu reagieren, fügen Sie diesem einen **Ereignishandler** hinzu. Dies ist ein Codeblock (normalerweise eine JavaScript-Funktion, die Sie als Programmierer erstellen), der ausgeführt wird, wenn das Ereignis ausgelöst wird.
Wenn ein solcher Codeblock definiert ist, um als Reaktion auf ein Ereignis zu laufen, sagen wir, dass wir einen **Ereignishandler registrieren**.
Hinweis: Ereignishandler werden manchmal auch als **Ereignislistener** bezeichnet — sie sind für unsere Zwecke weitgehend austauschbar, obwohl sie streng genommen zusammenarbeiten.
Der Listener "lauscht", ob das Ereignis auftritt, und der Handler ist der Code, der als Reaktion darauf ausgeführt wird.

> [!NOTE]
> Webereignisse sind nicht Teil der Kernsprache JavaScript — sie sind Teil der APIs, die im Browser eingebaut sind.

### Ein Beispiel: Umgang mit einem Klick-Ereignis

Im folgenden Beispiel haben wir ein einzelnes {{htmlelement("button")}} auf der Seite:

```html
<button>Farbe ändern</button>
```

```css hidden
button {
  margin: 10px;
}
```

Dann haben wir etwas JavaScript. Wir werden dies im nächsten Abschnitt genauer betrachten, aber für jetzt können wir sagen: Es fügt einen Ereignishandler zum `"click"`-Ereignis der Schaltfläche hinzu, und der Handler reagiert auf das Ereignis, indem er die Hintergrundfarbe der Seite auf eine zufällige Farbe setzt:

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

Die beispielhafte Ausgabe ist wie folgt. Versuchen Sie, die Schaltfläche zu klicken:

{{ EmbedLiveSample('Ein Beispiel: Umgang mit einem Klick-Ereignis', '100%', 200, "", "") }}

## Verwendung von addEventListener()

Wie wir im letzten Beispiel gesehen haben, haben Objekte, die Ereignisse auslösen können, eine {{domxref("EventTarget/addEventListener", "addEventListener()")}}-Methode, und dies ist der empfohlene Mechanismus, um Ereignishandler hinzuzufügen.

Schauen wir uns den Code vom letzten Beispiel genauer an:

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

Das HTML-{{HTMLElement("button")}}-Element löst ein Ereignis aus, wenn der Benutzer auf die Schaltfläche klickt. Daher definiert es eine `addEventListener()`-Funktion, die wir hier aufrufen. Wir übergeben zwei Parameter:

- den String `"click"`, um anzugeben, dass wir auf das Klick-Ereignis lauschen wollen. Schaltflächen können viele andere Ereignisse auslösen, wie etwa [`"mouseover"`](/de/docs/Web/API/Element/mouseover_event), wenn der Benutzer mit der Maus über die Schaltfläche fährt, oder [`"keydown"`](/de/docs/Web/API/Element/keydown_event), wenn der Benutzer eine Taste drückt und die Schaltfläche fokussiert ist.
- eine Funktion, die aufgerufen wird, wenn das Ereignis eintritt. In unserem Fall erzeugt die Funktion eine zufällige RGB-Farbe und setzt die [`background-color`](/de/docs/Web/CSS/background-color) der Seite [`<body>`](/de/docs/Web/HTML/Element/body) auf diese Farbe.

Es ist in Ordnung, die Handlerfunktion als separate benannte Funktion zu erstellen, wie hier:

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

### Andere Ereignisse lauschen

Es gibt viele verschiedene Ereignisse, die von einem Schaltflächenelement ausgelöst werden können. Lassen Sie uns experimentieren.

Zuerst machen Sie eine lokale Kopie von [random-color-addeventlistener.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-addeventlistener.html) und öffnen Sie diese in Ihrem Browser.
Es ist nur eine Kopie des einfachen Zufallsfarb-Beispiels, mit dem wir bereits gespielt haben. Ändern Sie nun `click` in die folgenden verschiedenen Werte der Reihe nach und beobachten Sie die Ergebnisse im Beispiel:

- [`focus`](/de/docs/Web/API/Element/focus_event) und [`blur`](/de/docs/Web/API/Element/blur_event) — Die Farbe ändert sich, wenn die Schaltfläche fokussiert und defokussiert wird; versuchen Sie, die Tabulatortaste zu drücken, um die Schaltfläche zu fokussieren, und drücken Sie die Tabulatortaste erneut, um den Fokus von der Schaltfläche zu nehmen. Diese werden häufig verwendet, um Informationen über das Ausfüllen von Formularfeldern anzuzeigen, wenn sie fokussiert sind, oder eine Fehlermeldung anzuzeigen, wenn ein Formularfeld mit einem falschen Wert ausgefüllt ist.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event) — Die Farbe ändert sich nur, wenn die Schaltfläche doppelt angeklickt wird.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`mouseout`](/de/docs/Web/API/Element/mouseout_event) — Die Farbe ändert sich, wenn der Mauszeiger über die Schaltfläche fährt oder der Mauszeiger von der Schaltfläche wegbewegt wird.

Einige Ereignisse, wie `click`, sind fast auf jedem Element verfügbar. Andere sind spezifischer und nur in bestimmten Situationen nützlich: Beispielsweise ist das [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignis nur auf bestimmten Elementen verfügbar, wie {{htmlelement("video")}}.

### Entfernen von Listenern

Wenn Sie einen Ereignishandler mit `addEventListener()` hinzugefügt haben, können Sie ihn wieder entfernen, indem Sie die Methode [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) verwenden. Zum Beispiel würde dies den `changeBackground()`-Ereignishandler entfernen:

```js
btn.removeEventListener("click", changeBackground);
```

Ereignishandler können auch entfernt werden, indem man ein {{domxref("AbortSignal")}} an {{domxref("EventTarget/addEventListener()", "addEventListener()")}} übergibt und dann später {{domxref("AbortController/abort()", "abort()")}} auf dem Controller aufruft, der das `AbortSignal` besitzt.
Zum Beispiel, um einen Ereignishandler hinzuzufügen, den wir mit einem `AbortSignal` entfernen können:

```js-nolint
const controller = new AbortController();

btn.addEventListener("click",
  () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal } // übergibt ein AbortSignal an diesen Handler
);
```

Dann kann der Ereignishandler, der durch den obigen Code erstellt wurde, wie folgt entfernt werden:

```js
controller.abort(); // entfernt alle mit diesem Controller assoziierten Ereignishandler
```

Bei einfachen, kleinen Programmen ist das Bereinigen alter, nicht verwendeter Ereignishandler nicht notwendig, aber bei größeren, komplexeren Programmen kann es die Effizienz verbessern.
Außerdem erlaubt Ihnen die Fähigkeit, Ereignishandler zu entfernen, dass dieselbe Schaltfläche in unterschiedlichen Umständen unterschiedliche Aktionen durchführt: Sie müssen lediglich Handler hinzufügen oder entfernen.

### Mehrere Listener für ein einzelnes Ereignis hinzufügen

Indem Sie mehr als einen Aufruf an {{domxref("EventTarget/addEventListener()", "addEventListener()")}} machen, mit verschiedenen Handlern, können Sie mehrere Handler für ein einzelnes Ereignis haben:

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

Beide Funktionen würden nun ausgeführt, wenn das Element angeklickt wird.

### Mehr erfahren

Es gibt andere leistungsstarke Funktionen und Optionen, die mit `addEventListener()` verfügbar sind.

Diese sind ein wenig außerhalb des Umfangs dieses Artikels, aber wenn Sie sie lesen möchten, besuchen Sie die Referenzseiten zu [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) und [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener).

## Andere Mechanismen für Ereignislistener

Wir empfehlen, `addEventListener()` zu verwenden, um Ereignishandler zu registrieren. Es ist die leistungsstärkste Methode und skaliert am besten mit komplexeren Programmen. Dennoch gibt es zwei andere Möglichkeiten, Ereignishandler zu registrieren, die Sie möglicherweise sehen: _Ereignishandler-Eigenschaften_ und _Inline-Ereignishandler_.

### Ereignishandler-Eigenschaften

Objekte (wie Schaltflächen), die Ereignisse auslösen können, haben normalerweise auch Eigenschaften, deren Name mit `on` gefolgt vom Ereignisnamen beginnt. Elemente haben beispielsweise eine Eigenschaft `onclick`.
Dies nennt man eine _Ereignishandler-Eigenschaft_. Um auf das Ereignis zu lauschen, können Sie die Handler-Funktion der Eigenschaft zuweisen.

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

Mit Ereignishandler-Eigenschaften können Sie nicht mehr als einen Handler für ein einzelnes Ereignis hinzufügen. Zum Beispiel können Sie `addEventListener('click', handler)` auf einem Element mehrmals aufrufen, mit verschiedenen Funktionen, die als zweiter Parameter angegeben sind:

```js
element.addEventListener("click", function1);
element.addEventListener("click", function2);
```

Das ist mit Ereignishandler-Eigenschaften nicht möglich, da alle nachfolgenden Versuche, die Eigenschaft zu setzen, frühere überschreiben werden:

```js
element.onclick = function1;
element.onclick = function2;
```

### Inline-Ereignishandler — verwenden Sie diese nicht

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

Die früheste Methode des Registrierens von Ereignishandlern im Web beinhaltete [_Ereignishandlere HTML-Attribute_](/de/docs/Web/HTML/Attributes#event_handler_attributes) (oder _Inline-Ereignishandler_) wie das oben gezeigte — der Attributwert ist buchstäblich der JavaScript-Code, den Sie ausführen möchten, wenn das Ereignis eintritt.
Das obige Beispiel ruft eine Funktion auf, die innerhalb eines {{htmlelement("script")}}-Elements auf derselben Seite definiert ist, aber Sie könnten auch JavaScript direkt innerhalb des Attributs einfügen, zum Beispiel:

```html
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Drücken Sie mich
</button>
```

Sie können HTML-Attributäquivalente für viele der Ereignishandler-Eigenschaften finden; Sie sollten diese jedoch nicht verwenden — sie gelten als schlechte Praxis.
Es mag einfach erscheinen, ein Ereignishandler-Attribut zu verwenden, wenn Sie etwas sehr Schnelles tun, aber sie werden schnell unübersichtlich und ineffizient.

Es ist keine gute Idee, Ihr HTML und Ihr JavaScript zu vermischen, da es schwer lesbar wird. Es ist eine gute Praxis, Ihr JavaScript getrennt zu halten, und wenn es in einer separaten Datei ist, können Sie es auf mehrere HTML-Dokumente anwenden.

Selbst in einer einzigen Datei sind Inline-Ereignishandler keine gute Idee.
Eine Schaltfläche ist in Ordnung, aber was, wenn Sie 100 Schaltflächen hätten? Sie müssten 100 Attribute in die Datei einfügen; es würde schnell zu einem Wartungsalptraum werden.
Mit JavaScript könnten Sie einer Funktion, die Ereignishandler für alle Schaltflächen auf der Seite hinzufügt, unabhängig davon, wie viele es gibt, einfach eine hinzufügen, mit etwas wie diesem:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}
```

Zuletzt erlauben viele allgemeine Serverkonfigurationen kein Inline-JavaScript, als Sicherheitsmaßnahme.

**Sie sollten die HTML-Ereignishandler-Attribute niemals verwenden** — diese sind veraltet, und deren Verwendung ist schlechte Praxis.

## Ereignisobjekte

Manchmal sehen Sie innerhalb einer Ereignishandler-Funktion einen Parameter, der mit einem Namen wie `event`, `evt` oder `e` angegeben ist.
Dies wird als **Ereignisobjekt** bezeichnet und wird automatisch an Ereignishandler übergeben, um zusätzliche Funktionen und Informationen bereitzustellen.
Lassen Sie uns unser Zufallsfarben-Beispiel erneut leicht umschreiben:

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
> Sie finden den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-eventobject.html) für dieses Beispiel auf GitHub (auch [sehen Sie es live an](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)).

Hier sehen Sie, dass wir ein Ereignisobjekt, **e**, in die Funktion einbinden, und in der Funktion eine Hintergrundfarb-Eigenschaft auf `e.target` setzen — das ist die Schaltfläche selbst.
Die `target`-Eigenschaft des Ereignisobjekts ist immer ein Verweis auf das Element, auf dem das Ereignis stattgefunden hat.
In diesem Beispiel setzen wir also eine zufällige Hintergrundfarbe auf die Schaltfläche, nicht auf die Seite.

> [!NOTE]
> Sie können jeden beliebigen Namen für das Ereignisobjekt verwenden — Sie müssen nur einen Namen wählen, den Sie dann verwenden können, um es innerhalb der Ereignishandler-Funktion zu referenzieren.
> `e`/`evt`/`event` wird von Entwicklern am häufigsten verwendet, weil sie kurz und leicht zu merken sind.
> Es ist immer gut, konsistent zu sein — mit sich selbst, und, wenn möglich, mit anderen.

### Zusätzliche Eigenschaften von Ereignisobjekten

Die meisten Ereignisobjekte haben einen Standardsatz an Eigenschaften und Methoden, die auf dem Ereignisobjekt verfügbar sind; siehe die {{domxref("Event")}}-Objektreferenz für eine vollständige Liste.

Einige Ereignisobjekte fügen zusätzliche Eigenschaften hinzu, die für diesen bestimmten Ereignistyp relevant sind. Zum Beispiel wird das {{domxref("Element/keydown_event", "keydown")}}-Ereignis ausgelöst, wenn der Benutzer eine Taste drückt. Sein Ereignisobjekt ist ein {{domxref("KeyboardEvent")}}, das ein spezialisiertes `Event`-Objekt mit einer `key`-Eigenschaft ist, die Ihnen mitteilt, welche Taste gedrückt wurde:

```html
<input id="textBox" type="text" />
<div id="output"></div>
```

```js
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `Sie haben "${event.key}" gedrückt.`;
});
```

```css hidden
div {
  margin: 0.5rem 0;
}
```

Versuchen Sie, in das Textfeld zu tippen, und sehen Sie die Ausgabe:

{{EmbedLiveSample("Zusätzliche_Eigenschaften_von_Ereignisobjekten", 100, 100)}}

## Verhindern des Standardverhaltens

Manchmal stoßen Sie auf eine Situation, in der Sie verhindern möchten, dass ein Ereignis das tut, was es standardmäßig tut.
Das häufigste Beispiel ist das eines Webformulars, zum Beispiel eines benutzerdefinierten Registrierungsformulars.
Wenn Sie die Details ausfüllen und die Schaltfläche zum Absenden klicken, besteht das natürliche Verhalten darin, dass die Daten an eine bestimmte Seite auf dem Server zur Verarbeitung gesendet werden und der Browser zu einer "Erfolgsmeldung"-Seite irgendeiner Art umgeleitet wird (oder zur gleichen Seite, wenn keine andere angegeben ist).

Das Problem entsteht, wenn der Benutzer die Daten nicht korrekt eingereicht hat — als Entwickler möchten Sie die Übermittlung an den Server verhindern und eine Fehlermeldung anzeigen, die beschreibt, was falsch ist und was getan werden muss, um es richtigzustellen.
Einige Browser unterstützen automatische Formularvalidierungsfunktionen, aber da viele dies nicht tun, wird geraten, nicht darauf zu vertrauen und Ihre eigenen Validierungsprüfungen zu implementieren.
Lassen Sie uns ein einfaches Beispiel betrachten.

Zuerst ein einfaches HTML-Formular, bei dem Sie Ihren Vor- und Nachnamen eingeben müssen:

```html
<form>
  <div>
    <label for="fname">Vorname: </label>
    <input id="fname" type="text" />
  </div>
  <div>
    <label for="lname">Nachname: </label>
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

Nun etwas JavaScript — hier implementieren wir eine ganz einfache Überprüfung innerhalb eines Handlers für das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis (das Absendungsereignis wird ausgelöst, wenn ein Formular übermittelt wird), das prüft, ob die Textfelder leer sind.
Wenn sie leer sind, rufen wir die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Funktion auf dem Ereignisobjekt auf — die die Formularübermittlung stoppt — und zeigen dann eine Fehlermeldung im Absatz unter unserem Formular an, um dem Benutzer mitzuteilen, was falsch ist:

```js
const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "Sie müssen beide Namen ausfüllen!";
  }
});
```

Offensichtlich ist dies eine ziemlich schwache Formularvalidierung — sie würde den Benutzer nicht daran hindern, das Formular mit Leerzeichen oder Zahlen in den Feldern zu überprüfen, zum Beispiel — aber es ist für Beispielzwecke in Ordnung.
Die Ausgabe ist wie folgt:

{{ EmbedLiveSample('Verhindern_des_Standardverhaltens', '100%', 180, "", "") }}

> [!NOTE]
> Für den vollständigen Quellcode siehe [preventdefault-validation.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/preventdefault-validation.html) (auch sehen Sie es [live ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html) hier).

## Es sind nicht nur Webseiten

Ereignisse sind nicht einzigartig für JavaScript — die meisten Programmiersprachen haben irgendeine Art von Ereignismodell, und die Art, wie das Modell funktioniert, unterscheidet sich oft von JavaScripts Art.
Tatsächlich unterscheidet sich das Ereignismodell in JavaScript für Webseiten vom Ereignismodell für JavaScript, wie es in anderen Umgebungen verwendet wird.

Zum Beispiel ist [Node.js](/de/docs/Learn/Server-side/Express_Nodejs) eine sehr beliebte JavaScript-Laufzeit, die es Entwicklern ermöglicht, JavaScript zur Entwicklung von Netzwerk- und serverseitigen Anwendungen zu verwenden.
Das [Node.js-Ereignismodell](https://nodejs.org/api/events.html) setzt auf Listener, die auf Ereignisse lauschen, und auf Emittierer, die Ereignisse periodisch auslösen — es klingt nicht so anders, aber der Code ist ziemlich anders, wobei Funktionen wie `on()` zur Registrierung eines Ereignislisteners und `once()` zur Registrierung eines Ereignislisteners, der einmal nach der Ausführung abgemeldet wird, verwendet werden.
Die [HTTP-Dokumentation für das connect-Ereignis](https://nodejs.org/api/http.html#event-connect) bietet ein gutes Beispiel.

Sie können JavaScript auch verwenden, um browserübergreifende Add-ons — Erweiterungen der Browserfunktionalität — mit einer Technologie namens [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) zu erstellen.
Das Ereignismodell ist ähnlich dem Webereignismodell, aber etwas anders — die Eigenschaften der Ereignislistener werden in {{Glossary("camel_case", "CamelCase")}} geschrieben (wie `onMessage` statt `onmessage`) und müssen mit der `addListener`-Funktion kombiniert werden.
Sehen Sie sich die Seite [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples) für ein Beispiel an.

In diesem Lernstadium müssen Sie nichts über andere derartige Umgebungen verstehen; wir wollten nur klarstellen, dass sich Ereignisse in unterschiedlichen Programmierumgebungen unterscheiden können.

## Fazit

In diesem Kapitel haben wir gelernt, was Ereignisse sind, wie man auf Ereignisse lauscht und wie man auf sie reagiert.

Sie haben inzwischen gesehen, dass Elemente auf einer Webseite innerhalb anderer Elemente verschachtelt werden können. Zum Beispiel, im Beispiel [Verhindern des Standardverhaltens](#verhindern_des_standardverhaltens), haben wir einige Textfelder, die in {{htmlelement("div")}}-Elemente platziert sind, die wiederum in ein {{htmlelement("form")}}-Element eingebettet sind. Was passiert, wenn ein Klick-Ereignislistener an das `<form>`-Element angefügt wird, und der Benutzer in eines der Textfelder klickt? Dies wird als _Ereignis-Bubbling_ bezeichnet und ist das Thema des nächsten Kapitels.

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Event_bubbling", "Learn/JavaScript/Building_blocks")}}

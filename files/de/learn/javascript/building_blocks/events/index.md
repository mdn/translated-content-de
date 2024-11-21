---
title: Einführung in Ereignisse
slug: Learn/JavaScript/Building_blocks/Events
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Event_bubbling", "Learn/JavaScript/Building_blocks")}}

Ereignisse sind Dinge, die im System, das Sie programmieren, geschehen und über die das System Sie informiert, damit Ihr Code darauf reagieren kann.

Zum Beispiel, wenn der Benutzer auf einen Knopf auf einer Webseite klickt, möchten Sie möglicherweise auf diese Aktion reagieren, indem Sie ein Informationsfenster anzeigen. In diesem Artikel besprechen wir einige wichtige Konzepte rund um Ereignisse und betrachten, wie sie in Browsern funktionieren. Dies wird keine umfassende Studie sein, sondern nur das, was Sie in diesem Stadium wissen müssen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML, CSS und
        <a href="/de/docs/Learn/JavaScript/First_steps"
          >Erste Schritte in JavaScript</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das grundlegende Konzept von Ereignissen zu verstehen, wie sie in
        Browsern funktionieren und wie Ereignisse sich in verschiedenen
        Programmierumgebungen unterscheiden können.
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Ereignis?

Ereignisse sind Dinge, die im System, das Sie programmieren, geschehen — das System erzeugt (oder "feuert") ein Signal irgendeiner Art, wenn ein Ereignis auftritt, und bietet einen Mechanismus, durch den eine Aktion automatisch ausgeführt werden kann (das heißt, ein Code, der ausgeführt wird), wenn das Ereignis auftritt. Ereignisse werden innerhalb des Browserfensters ausgelöst und tendieren dazu, an ein spezifisches Element gebunden zu sein, das sich darin befindet. Dies könnte ein einzelnes Element, eine Gruppe von Elementen, das HTML-Dokument, das im aktuellen Tab geladen ist, oder das gesamte Browserfenster sein. Es gibt viele verschiedene Arten von Ereignissen, die auftreten können.

Zum Beispiel:

- Der Benutzer wählt, klickt oder schwebt mit dem Cursor über ein bestimmtes Element.
- Der Benutzer wählt eine Taste auf der Tastatur.
- Der Benutzer ändert die Größe oder schließt das Browserfenster.
- Eine Webseite wird fertig geladen.
- Ein Formular wird abgeschickt.
- Ein Video wird abgespielt, pausiert oder endet.
- Ein Fehler tritt auf.

Daraus (und aus einem Blick auf die MDN [Ereignisreferenz](/de/docs/Web/Events)) können Sie entnehmen, dass es **viele** Ereignisse gibt, die ausgelöst werden können.

Um auf ein Ereignis zu reagieren, befestigen Sie einen **Ereignishandler** daran. Dies ist ein Block von Code (normalerweise eine von Ihnen als Programmierer erstellte JavaScript-Funktion), die ausgeführt wird, wenn das Ereignis ausgelöst wird. Wenn ein solcher Codeblock definiert ist, um als Reaktion auf ein Ereignis ausgeführt zu werden, sagen wir, dass wir einen **Ereignishandler registrieren**. Hinweis: Ereignishandler werden manchmal auch **Ereignislistener** genannt — sie sind für unsere Zwecke ziemlich austauschbar, obwohl sie streng genommen zusammenarbeiten. Der Listener hört auf das Auftreten des Ereignisses, und der Handler ist der Code, der als Reaktion darauf ausgeführt wird.

> [!NOTE]
> Web-Ereignisse sind nicht Teil der grundlegenden JavaScript-Sprache — sie sind Teil der in den Browser integrierten APIs definiert.

### Ein Beispiel: Ein Klickevent behandeln

Im folgenden Beispiel haben wir ein einzelnes {{htmlelement("button")}} auf der Seite:

```html
<button>Change color</button>
```

```css hidden
button {
  margin: 10px;
}
```

Dann haben wir etwas JavaScript. Wir werden dies im nächsten Abschnitt detaillierter betrachten, aber vorerst können wir nur sagen: es fügt dem `"click"`-Ereignis des Knopfes einen Ereignishandler hinzu, und der Handler reagiert auf das Ereignis, indem er den Hintergrund der Seite auf eine zufällige Farbe ändert:

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

Das Beispielausgabe ist wie folgt. Versuchen Sie, den Knopf zu klicken:

{{ EmbedLiveSample('An example: handling a click event', '100%', 200, "", "") }}

## Verwendung von addEventListener()

Wie wir im letzten Beispiel gesehen haben, haben Objekte, die Ereignisse auslösen können, eine [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode, und dies ist der empfohlene Mechanismus zum Hinzufügen von Ereignishandlern.

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

Das HTML {{HTMLElement("button")}}-Element wird ein Ereignis auslösen, wenn der Benutzer auf den Knopf klickt. Also definiert es eine `addEventListener()`-Funktion, die wir hier aufrufen. Wir übergeben zwei Parameter:

- den String `"click"`, um anzuzeigen, dass wir dem Klickereignis zuhören möchten. Schaltflächen können viele andere Ereignisse auslösen, wie [`"mouseover"`](/de/docs/Web/API/Element/mouseover_event), wenn der Benutzer mit der Maus über die Schaltfläche fährt, oder [`"keydown"`](/de/docs/Web/API/Element/keydown_event), wenn der Benutzer eine Taste drückt und die Schaltfläche fokussiert ist.
- eine Funktion, die aufgerufen werden soll, wenn das Ereignis passiert. In unserem Fall erzeugt die Funktion eine zufällige RGB-Farbe und setzt die [`background-color`](/de/docs/Web/CSS/background-color) der Seite [`<body>`](/de/docs/Web/HTML/Element/body) auf diese Farbe.

Es ist in Ordnung, die Handlerfunktion zu einer separaten benannten Funktion zu machen, wie hier:

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

### Zuhören auf andere Ereignisse

Es gibt viele verschiedene Ereignisse, die von einem Schalterein Element ausgelöst werden können. Lassen Sie uns experimentieren.

Erstellen Sie zunächst eine lokale Kopie von [random-color-addeventlistener.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-addeventlistener.html) und öffnen Sie sie in Ihrem Browser. Es ist nur eine Kopie des einfachen Zufallsfarbenbeispiels, mit dem wir bereits gespielt haben. Versuchen Sie nun, `click` in die folgenden unterschiedlichen Werte zu ändern und beobachten Sie die Ergebnisse im Beispiel:

- [`focus`](/de/docs/Web/API/Element/focus_event) und [`blur`](/de/docs/Web/API/Element/blur_event) — Die Farbe ändert sich, wenn die Schaltfläche fokussiert und entfokussiert wird; versuchen Sie, die Tab-Taste zu drücken, um die Schaltfläche zu fokussieren, und drücken Sie die Tab-Taste erneut, um den Fokus von der Schaltfläche zu entfernen. Diese werden oft verwendet, um Informationen zur Ausfüllung von Formularfeldern anzuzeigen, wenn diese fokussiert sind, oder um eine Fehlermeldung anzuzeigen, wenn ein Formularfeld mit einem falschen Wert ausgefüllt wird.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event) — Die Farbe ändert sich nur, wenn die Schaltfläche doppelt geklickt wird.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`mouseout`](/de/docs/Web/API/Element/mouseout_event) — Die Farbe ändert sich, wenn der Mauszeiger über die Schaltfläche schwebt oder wenn der Zeiger von der Schaltfläche weg bewegt wird.

Einige Ereignisse, wie `click`, stehen bei fast jedem Element zur Verfügung. Andere sind spezifischer und nur in bestimmten Situationen nützlich: zum Beispiel ist das [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignis nur bei einigen Elementen verfügbar, wie etwa {{htmlelement("video")}}.

### Entfernen von Listenern

Wenn Sie einen Ereignishandler mit `addEventListener()` hinzugefügt haben, können Sie ihn wieder entfernen, indem Sie die Methode [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) verwenden. Zum Beispiel würde dies den `changeBackground()`-Ereignishandler entfernen:

```js
btn.removeEventListener("click", changeBackground);
```

Ereignishandler können auch entfernt werden, indem ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) an [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) übergeben wird und dann später [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller aufgerufen wird, der das `AbortSignal` besitzt. Zum Beispiel, um einen Ereignishandler hinzuzufügen, den wir mit einem `AbortSignal` entfernen können:

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

Der durch den obigen Code erstellte Ereignishandler kann dann wie folgt entfernt werden:

```js
controller.abort(); // removes any/all event handlers associated with this controller
```

Für einfache, kleine Programme ist das Bereinigen alter, ungenutzter Ereignishandler nicht notwendig, aber bei größeren, komplexeren Programmen kann dies die Effizienz verbessern. Auch ermöglicht das Entfernen von Ereignishandlern, dass dieselbe Schaltfläche unter verschiedenen Umständen unterschiedliche Aktionen ausführt: Sie müssen lediglich Handler hinzufügen oder entfernen.

### Hinzufügen mehrerer Listener für ein einzelnes Ereignis

Durch mehrmaliges Aufrufen von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mit unterschiedlichen Handlern können Sie mehrere Handler für ein einzelnes Ereignis haben:

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

Beide Funktionen würden jetzt ausgeführt werden, wenn das Element angeklickt wird.

### Erfahren Sie mehr

Es gibt weitere leistungsstarke Funktionen und Optionen mit `addEventListener()`.

Diese sind ein wenig außerhalb des Umfangs dieses Artikels, aber wenn Sie mehr darüber erfahren möchten, besuchen Sie die Referenzseiten zu [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) und [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener).

## Andere Mechanismen für Ereignislistener

Wir empfehlen, dass Sie `addEventListener()` verwenden, um Ereignishandler zu registrieren. Es ist die leistungsstärkste Methode und skaliert am besten mit komplexeren Programmen. Es gibt jedoch zwei weitere Möglichkeiten zum Registrieren von Ereignishandlern, die Sie möglicherweise sehen: _Ereignishandler-Eigenschaften_ und _Inline-Ereignishandler_.

### Ereignishandler-Eigenschaften

Objekte (wie Knöpfe), die Ereignisse auslösen können, haben in der Regel auch Eigenschaften, deren Name mit `on` gefolgt von dem Namen des Ereignisses beginnt. Zum Beispiel haben Elemente eine `onclick`-Eigenschaft. Dies wird als _Ereignishandler-Eigenschaft_ bezeichnet. Um auf das Ereignis zu hören, können Sie die Handlerfunktion auf die Eigenschaft zuweisen.

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

Mit Ereignishandler-Eigenschaften können Sie nicht mehr als einen Handler für ein einzelnes Ereignis hinzufügen. Zum Beispiel können Sie `addEventListener('click', handler)` bei einem Element mehrfach aufrufen, mit verschiedenen Funktionen, die im zweiten Argument angegeben sind:

```js
element.addEventListener("click", function1);
element.addEventListener("click", function2);
```

Dies ist unmöglich mit Ereignishandler-Eigenschaften, da alle nachfolgenden Versuche, die Eigenschaft zu setzen, frühere überschreiben werden:

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

Die früheste Methode zum Registrieren von Ereignishandlern, die im Web gefunden wurde, beinhaltete [_Ereignishandler-HTML-Attribute_](/de/docs/Web/HTML/Attributes#event_handler_attributes) (oder _Inline-Ereignishandler_) wie das obige — der Attributwert ist buchstäblich der JavaScript-Code, den Sie ausführen möchten, wenn das Ereignis auftritt. Das obige Beispiel ruft eine Funktion auf, die innerhalb eines {{htmlelement("script")}}-Elements auf derselben Seite definiert ist, aber Sie könnten auch JavaScript direkt im Attribut einfügen, zum Beispiel:

```html
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

Sie finden HTML-Attribut-Pendants zu vielen der Ereignishandler-Eigenschaften; jedoch sollten Sie diese nicht verwenden — sie gelten als schlechte Praxis. Es mag einfach erscheinen, ein Ereignishandler-Attribut zu verwenden, wenn Sie etwas sehr Schnelles tun, aber sie werden schnell unhandlich und ineffizient.

Zum einen ist es keine gute Idee, Ihr HTML und Ihr JavaScript zu vermischen, da es schwer zu lesen wird. Es ist eine gute Praxis, Ihr JavaScript getrennt zu halten, und wenn es sich in einer separaten Datei befindet, können Sie es auf mehrere HTML-Dokumente anwenden.

Selbst in einer einzigen Datei sind Inline-Ereignishandler keine gute Idee. Ein Knopf ist in Ordnung, aber was wäre, wenn Sie 100 Knöpfe hätten? Sie müssten 100 Attribute in die Datei einfügen, es würde schnell zu einem Wartungsalbtraum werden. Mit JavaScript könnten Sie leicht eine Ereignishandler-Funktion zu allen Schaltflächen auf der Seite hinzufügen, egal wie viele es gibt, mit etwas wie diesem:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}
```

Schließlich werden viele gängige Serverkonfigurationen Inline-JavaScript als Sicherheitsmaßnahme verbieten.

**Sie sollten niemals die HTML-Ereignishandler-Attribute verwenden** — diese sind veraltet, und ihre Verwendung ist schlechte Praxis.

## Ereignisobjekte

Manchmal sehen Sie in einer Ereignishandlerfunktion einen angegebenen Parameter mit einem Namen wie `event`, `evt` oder `e`. Dies wird das **Ereignisobjekt** genannt und automatisch an Ereignishandler übergeben, um zusätzliche Funktionen und Informationen bereitzustellen. Zum Beispiel, lassen Sie uns unser Zufallsfarben-Beispiel erneut etwas umschreiben:

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
> Sie können den [vollen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-eventobject.html) für dieses Beispiel auf GitHub finden (sehen Sie es auch [live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)).

Hier sehen Sie, dass wir ein Ereignisobjekt, **e**, in der Funktion einschließen und in der Funktion einen Hintergrundfarbstil auf `e.target` setzen — das ist der Button selbst. Die `target`-Eigenschaft des Ereignisobjekts ist immer ein Verweis auf das Element, auf dem das Ereignis aufgetreten ist. In diesem Beispiel setzen wir also eine zufällige Hintergrundfarbe auf den Button, nicht auf die Seite.

> [!NOTE]
> Sie können jeden beliebigen Namen für das Ereignisobjekt verwenden — Sie müssen nur einen Namen wählen, den Sie dann verwenden können, um es innerhalb der Ereignishandlerfunktion zu referenzieren. `e`/`evt`/`event` wird am häufigsten von Entwicklern verwendet, da sie kurz und leicht zu merken sind. Es ist immer gut, konsistent zu sein — mit sich selbst und, wenn möglich, mit anderen.

### Zusätzliche Eigenschaften von Ereignisobjekten

Die meisten Ereignisobjekte haben eine Standardsammlung von Eigenschaften und Methoden, die auf dem Ereignisobjekt verfügbar sind; siehe die [`Event`](/de/docs/Web/API/Event) Objektreferenz für eine vollständige Liste.

Einige Ereignisobjekte fügen zusätzliche Eigenschaften hinzu, die für diesen bestimmten Ereignistyp relevant sind. Zum Beispiel wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis ausgelöst, wenn der Benutzer eine Taste drückt. Sein Ereignisobjekt ist ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent), das ein spezialisiertes `Event`-Objekt mit einer `key`-Eigenschaft ist, die angibt, welche Taste gedrückt wurde:

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

## Standardverhalten verhindern

Manchmal stoßen Sie auf eine Situation, in der Sie verhindern möchten, dass ein Ereignis das tut, was es standardmäßig tut. Das häufigste Beispiel ist das eines Webformulars, zum Beispiel eines benutzerdefinierten Registrierungsformulars. Wenn Sie die Daten ausfüllen und die Absende-Schaltfläche klicken, ist das natürliche Verhalten, dass die Daten an eine angegebene Seite auf dem Server zur Verarbeitung gesendet werden, und der Browser wird zu einer Art "Erfolgsmeldung"-Seite umgeleitet (oder zur gleichen Seite, wenn keine andere angegeben ist).

Das Problem entsteht, wenn der Benutzer die Daten nicht korrekt übermittelt hat — als Entwickler möchten Sie verhindern, dass die Übermittlung an den Server erfolgt und eine Fehlermeldung anzeigen, die angibt, was falsch ist und was getan werden muss, um es richtig zu stellen. Einige Browser unterstützen automatische Validierungsfunktionen für Formulardaten, aber da viele das nicht tun, sollten Sie sich nicht darauf verlassen und Ihre eigenen Validierungsprüfungen implementieren. Lassen Sie uns ein Beispiel betrachten.

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

Nun etwas JavaScript — hier implementieren wir eine sehr einfache Prüfung innerhalb eines Handlers für das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis (das Submit-Ereignis wird auf einem Formular ausgelöst, wenn es übermittelt wird), die prüft, ob die Textfelder leer sind. Wenn sie es sind, rufen wir die Funktion [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Ereignisobjekt auf — was die Formularübermittlung stoppt — und zeigen dann eine Fehlermeldung im Absatz unter unserem Formular an, um dem Benutzer zu sagen, was falsch ist:

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

Natürlich ist dies eine ziemlich schwache Formularvalidierung — sie würde nicht verhindern, dass der Benutzer das Formular mit Leerzeichen oder Zahlen in den Feldern validiert — aber es ist in Ordnung für Beispielzwecke. Die Ausgabe ist wie folgt:

{{ EmbedLiveSample('Preventing_default_behavior', '100%', 180, "", "") }}

> [!NOTE]
> Für den vollständigen Quellcode, siehe [preventdefault-validation.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/preventdefault-validation.html) (sehen Sie es auch [live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html) hier).

## Es sind nicht nur Webseiten

Ereignisse sind nicht einzigartig für JavaScript — die meisten Programmiersprachen haben irgendeine Art von Ereignismodell, und die Funktionsweise des Modells unterscheidet sich oft von der in JavaScript. Tatsächlich unterscheidet sich das Ereignismodell in JavaScript für Webseiten vom Ereignismodell für JavaScript, wie es in anderen Umgebungen verwendet wird.

Zum Beispiel ist [Node.js](/de/docs/Learn/Server-side/Express_Nodejs) eine sehr beliebte JavaScript-Laufzeit, die es Entwicklern ermöglicht, JavaScript zur Erstellung von Netzwerk- und serverseitigen Anwendungen zu verwenden. Das [Node.js-Ereignismodell](https://nodejs.org/api/events.html) basiert auf Listenern, die auf Ereignisse hören, und Emittenten, die regelmäßig Ereignisse auslösen — es klingt nicht so anders, aber der Code ist ziemlich unterschiedlich, indem Funktionen wie `on()` verwendet werden, um einen Ereignislistener zu registrieren und `once()`, um einen Ereignislistener zu registrieren, der sich entfernt, nachdem er einmal ausgeführt wurde. Die [HTTP-Connect-Event-Dokumentation](https://nodejs.org/api/http.html#event-connect) bietet ein gutes Beispiel.

Sie können JavaScript auch verwenden, um plattformübergreifende Add-Ons zu erstellen — Erweiterungen der Browserfunktionen — mit einer Technologie namens [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions). Das Ereignismodell ist ähnlich wie das Web-Ereignismodell, aber etwas anders — Eigenschaftennamen von Ereignislistenern werden im {{Glossary("camel_case", "Camel Case")}} geschrieben (wie `onMessage` statt `onmessage`), und müssen mit der `addListener`-Funktion kombiniert werden. Siehe die Seite [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples) für ein Beispiel.

Sie müssen in dieser Phase Ihres Lernens nichts über andere solche Umgebungen verstehen; wir wollten nur klarstellen, dass sich Ereignisse in verschiedenen Programmierumgebungen unterscheiden können.

## Fazit

In diesem Kapitel haben wir gelernt, was Ereignisse sind, wie man auf Ereignisse lauschen kann und wie man auf sie reagieren kann.

Sie haben bis jetzt gesehen, dass Elemente in einer Webseite in andere Elemente verschachtelt werden können. Zum Beispiel haben wir im [Verhindern des Standardverhaltens](#standardverhalten_verhindern)-Beispiel einige Textfelder, die in {{htmlelement("div")}}-Elementen untergebracht sind, die wiederum in einem {{htmlelement("form")}}-Element platziert sind. Was passiert, wenn ein Klickereignis-Listener an das `<form>`-Element befestigt ist und der Benutzer in eines der Textfelder klickt? Dies wird als _Ereignis-Bubbling_ bezeichnet und ist das Thema des nächsten Kapitels.

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Event_bubbling", "Learn/JavaScript/Building_blocks")}}

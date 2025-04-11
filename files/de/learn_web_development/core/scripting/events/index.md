---
title: Einführung in Ereignisse
short-title: Events
slug: Learn_web_development/Core/Scripting/Events
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

Ereignisse sind Dinge, die in dem System, das Sie programmieren, geschehen und über die das System Sie informiert, damit Ihr Code darauf reagieren kann.
Wenn beispielsweise der Benutzer auf eine Schaltfläche auf einer Webseite klickt, möchten Sie möglicherweise auf diese Aktion reagieren, indem Sie ein Informationsfeld anzeigen.
In diesem Artikel besprechen wir einige wichtige Konzepte rund um Ereignisse und betrachten die Grundlagen, wie sie in Browsern funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen</a>, Vertrautheit mit den JavaScript-Grundlagen, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Ereignisse sind — ein Signal, das vom Browser ausgelöst wird, wenn etwas Wichtiges passiert, woraufhin der Entwickler Code ausführen kann.</li>
          <li>Einrichten von Ereignishandlern mit <code>addEventListener()</code> (und <code>removeEventListener()</code>) und Eigenschaften von Ereignishandlern.</li>
          <li>Inline-Ereignishandler-Attribute und warum Sie diese nicht verwenden sollten.</li>
          <li>Ereignisobjekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Ereignis?

Ereignisse sind Dinge, die in dem System, das Sie programmieren, geschehen — das System erzeugt (oder "löst") ein Signal irgendeiner Art, wenn ein Ereignis eintritt, und stellt einen Mechanismus bereit, durch den automatisch eine Aktion ausgeführt werden kann (das heißt, etwas Code läuft), wenn das Ereignis eintritt.
Ereignisse werden im Browserfenster ausgelöst und sind in der Regel an einen bestimmten Gegenstand gebunden, der sich darin befindet. Dies kann ein einzelnes Element, eine Gruppe von Elementen, das im aktuellen Tab geladene HTML-Dokument oder das gesamte Browserfenster sein.
Es gibt viele verschiedene Arten von Ereignissen, die auftreten können.

Zum Beispiel:

- Der Benutzer wählt ein bestimmtes Element aus, klickt darauf oder bewegt den Cursor darüber.
- Der Benutzer drückt eine Taste auf der Tastatur.
- Der Benutzer ändert die Größe des Browserfensters oder schließt es.
- Eine Webseite wird vollständig geladen.
- Ein Formular wird abgeschickt.
- Ein Video wird abgespielt, pausiert oder endet.
- Ein Fehler tritt auf.

Sie können daraus (und durch einen Blick in das MDN-[Ereignis-Referenz](/de/docs/Web/Events)) entnehmen, dass es **viele** Ereignisse gibt, die ausgelöst werden können.

Um auf ein Ereignis zu reagieren, hängen Sie einen **Ereignishandler** daran. Dies ist ein Codeblock (in der Regel eine JavaScript-Funktion, die Sie als Programmierer erstellen), der ausgeführt wird, wenn das Ereignis ausgelöst wird.
Wenn ein solcher Codeblock definiert ist, um auf ein Ereignis zu reagieren, sagen wir, dass wir einen **Ereignishandler registrieren**.
Hinweis: Ereignishandler werden manchmal als **Ereignislistener** bezeichnet — sie sind für unsere Zwecke ziemlich austauschbar, obwohl sie streng genommen zusammenarbeiten.
Der Listener hört auf das Ereignis, und der Handler ist der Code, der als Reaktion darauf ausgeführt wird.

> [!NOTE]
> Webereignisse sind nicht Teil der Kernsprache JavaScript — sie sind Teil der APIs, die im Browser integriert sind.

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

Dann haben wir etwas JavaScript. Wir werden dies im nächsten Abschnitt genauer betrachten, aber vorerst können wir einfach sagen: Es fügt der `"click"`-Ereignis der Schaltfläche einen Ereignishandler hinzu, und der Handler reagiert auf das Ereignis, indem er den Seitenhintergrund auf eine zufällige Farbe setzt:

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

Das Beispielergebnis ist wie folgt. Versuchen Sie, auf die Schaltfläche zu klicken:

{{ EmbedLiveSample('An example: handling a click event', '100%', 200, "", "") }}

## Verwendung von addEventListener()

Wie wir im letzten Beispiel gesehen haben, haben Objekte, die Ereignisse auslösen können, eine [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode, und dies ist der empfohlene Mechanismus, um Ereignishandler hinzuzufügen.

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

Das HTML-{{HTMLElement("button")}}-Element löst ein Ereignis aus, wenn der Benutzer auf die Schaltfläche klickt. Daher definiert es eine `addEventListener()`-Funktion, die wir hier aufrufen. Wir übergeben zwei Parameter:

- den String `"click"`, um anzuzeigen, dass wir auf das Klickevent hören möchten. Schaltflächen können viele andere Ereignisse auslösen, wie zum Beispiel [`"mouseover"`](/de/docs/Web/API/Element/mouseover_event), wenn der Benutzer den Mauszeiger über die Schaltfläche bewegt, oder [`"keydown"`](/de/docs/Web/API/Element/keydown_event), wenn der Benutzer eine Taste drückt und die Schaltfläche fokussiert ist.
- eine Funktion, die aufgerufen wird, wenn das Ereignis eintritt. In unserem Fall generiert die Funktion eine zufällige RGB-Farbe und setzt die [`background-color`](/de/docs/Web/CSS/background-color) der Seite [`<body>`](/de/docs/Web/HTML/Reference/Elements/body) auf diese Farbe.

Es ist in Ordnung, die Handlerfunktion als separate benannte Funktion zu erstellen, wie folgt:

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

Es gibt viele verschiedene Ereignisse, die von einem Schaltflächenelement ausgelöst werden können. Lassen Sie uns experimentieren.

Zuerst machen Sie eine lokale Kopie von [random-color-addeventlistener.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-addeventlistener.html) und öffnen Sie sie in Ihrem Browser.
Es ist nur eine Kopie des einfachen Zufallsfarbebeispiels, mit dem wir bereits gespielt haben. Versuchen Sie nun, `click` nacheinander in die folgenden verschiedenen Werte zu ändern und beobachten Sie die Ergebnisse im Beispiel:

- [`focus`](/de/docs/Web/API/Element/focus_event) und [`blur`](/de/docs/Web/API/Element/blur_event) — Die Farbe ändert sich, wenn die Schaltfläche fokussiert und unfokussiert wird; versuchen Sie, die Tabulatortaste zu drücken, um die Schaltfläche zu fokussieren, und drücken Sie die Tabulatortaste erneut, um die Schaltfläche zu verlassen.
  Diese werden oft verwendet, um Informationen über das Ausfüllen von Formularfeldern anzuzeigen, wenn sie fokussiert sind, oder um eine Fehlermeldung anzuzeigen, wenn ein Formularfeld mit einem falschen Wert ausgefüllt ist.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event) — Die Farbe ändert sich nur, wenn die Schaltfläche doppelt angeklickt wird.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`mouseout`](/de/docs/Web/API/Element/mouseout_event) — Die Farbe ändert sich, wenn der Mauszeiger über die Schaltfläche schwebt oder wenn der Zeiger von der Schaltfläche weg bewegt wird.

Einige Ereignisse, wie `click`, sind auf nahezu jedem Element verfügbar. Andere sind spezifischer und nur in bestimmten Situationen nützlich: zum Beispiel ist das [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignis nur auf einigen Elementen verfügbar, wie z.B. dem {{htmlelement("video")}}.

### Entfernen von Listenern

Wenn Sie einen Ereignishandler mit `addEventListener()` hinzugefügt haben, können Sie ihn mit der [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)-Methode wieder entfernen. Zum Beispiel würde dies den `changeBackground()`-Ereignishandler entfernen:

```js
btn.removeEventListener("click", changeBackground);
```

Ereignishandler können auch entfernt werden, indem ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) an [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) übergeben und später [`abort()`](/de/docs/Web/API/AbortController/abort) am Controller, der das `AbortSignal` besitzt, aufgerufen wird.
Zum Beispiel, um einen Ereignishandler hinzuzufügen, den wir mit einem `AbortSignal` entfernen können:

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

Dann kann der Ereignishandler, der durch den obigen Code erstellt wurde, wie folgt entfernt werden:

```js
controller.abort(); // removes any/all event handlers associated with this controller
```

Bei einfachen, kleinen Programmen ist das Aufräumen alter, ungenutzter Ereignishandler nicht notwendig, aber bei größeren, komplexeren Programmen kann es die Effizienz verbessern.
Darüber hinaus ermöglicht die Möglichkeit, Ereignishandler zu entfernen, dass die gleiche Schaltfläche in unterschiedlichen Situationen verschiedene Aktionen ausführt: Sie müssen nur die Handler hinzufügen oder entfernen.

### Hinzufügen mehrerer Listener für ein einzelnes Ereignis

Durch mehrmaliges Aufrufen von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mit unterschiedlichen Handlern können Sie mehrere Handler für ein einzelnes Ereignis haben:

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

Jetzt würden beide Funktionen ausgeführt, wenn das Element angeklickt wird.

## Andere Mechanismen für Ereignislistener

Wir empfehlen Ihnen, `addEventListener()` zum Registrieren von Ereignishandlern zu verwenden. Es ist die leistungsstärkste Methode und skaliert am besten mit komplexeren Programmen. Es gibt jedoch zwei andere Möglichkeiten, Ereignishandler zu registrieren, die Ihnen vielleicht begegnen: _Ereignishandler-Eigenschaften_ und _Inline-Ereignishandler_.

### Ereignishandler-Eigenschaften

Objekte (wie Schaltflächen), die Ereignisse auslösen können, haben normalerweise auch Eigenschaften, deren Name `on` gefolgt von dem Ereignisnamen ist. Zum Beispiel haben Elemente eine Eigenschaft `onclick`.
Dies wird als _Ereignishandler-Eigenschaft_ bezeichnet. Um auf das Ereignis zu hören, können Sie die Handlerfunktion der Eigenschaft zuweisen.

Zum Beispiel könnten wir das Zufallsfarbebeispiel so umschreiben:

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

Mit Ereignishandler-Eigenschaften können Sie nicht mehr als einen Handler für ein einzelnes Ereignis hinzufügen. Zum Beispiel können Sie `addEventListener('click', handler)` mehrmals auf einem Element aufrufen, mit unterschiedlichen Funktionen, die im zweiten Argument angegeben sind:

```js
element.addEventListener("click", function1);
element.addEventListener("click", function2);
```

Dies ist mit Ereignishandler-Eigenschaften unmöglich, weil jeder Versuch, die Eigenschaft zu setzen, frühere überschreiben würde:

```js
element.onclick = function1;
element.onclick = function2;
```

### Inline-Ereignishandler — verwenden Sie diese nicht

Vielleicht sehen Sie in Ihrem Code auch ein Muster wie dieses:

```html
<button onclick="bgChange()">Press me</button>
```

```js
function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
```

Die früheste Methode zum Registrieren von Ereignishandlern im Web umfasste [_Ereignishandler-HTML-Attribute_](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) (oder _Inline-Ereignishandler_) wie das oben gezeigte — der Attributwert ist buchstäblich der JavaScript-Code, den Sie ausführen möchten, wenn das Ereignis eintritt.
Obiges Beispiel ruft eine Funktion auf, die in einem {{htmlelement("script")}}-Element auf derselben Seite definiert ist, aber Sie könnten auch JavaScript direkt innerhalb des Attributs einfügen, zum Beispiel:

```html
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

Sie können HTML-Attributäquivalente für viele der Ereignishandler-Eigenschaften finden, jedoch sollten Sie diese nicht verwenden — sie gelten als schlechte Praxis.
Es mag einfach erscheinen, ein Ereignishandler-Attribut zu verwenden, wenn Sie etwas sehr Schnelles tun, aber sie werden schnell unübersichtlich und ineffizient.

Es ist nicht ratsam, Ihr HTML und Ihr JavaScript zu mischen, da es schwer zu lesen wird. Es ist eine gute Praxis, Ihr JavaScript getrennt zu halten, und wenn es in einer separaten Datei ist, können Sie es auf mehrere HTML-Dokumente anwenden.

Selbst in einer einzigen Datei sind Inline-Ereignishandler keine gute Idee.
Eine Schaltfläche ist in Ordnung, aber was, wenn Sie 100 Schaltflächen hätten? Sie müssten 100 Attribute zur Datei hinzufügen; es würde schnell in einen Wartungsalbtraum ausarten.
Mit JavaScript könnten Sie leicht eine Ereignishandlerfunktion zu allen Schaltflächen auf der Seite hinzufügen, unabhängig davon, wie viele es gibt, indem Sie so etwas verwenden:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}
```

Viele gängige Server-Konfigurationen werden schließlich Inline-JavaScript als Sicherheitsmaßnahme nicht zulassen.

**Sie sollten niemals die HTML-Ereignishandler-Attribute verwenden** — diese sind veraltet, und die Verwendung dieser ist schlechte Praxis.

## Ereignisobjekte

Manchmal sehen Sie innerhalb einer Ereignishandlerfunktion einen Parameter mit einem Namen wie `event`, `evt` oder `e` angegeben.
Dies wird als **Ereignisobjekt** bezeichnet und es wird automatisch an Ereignishandler übergeben, um zusätzliche Funktionen und Informationen bereitzustellen.
Zum Beispiel lassen Sie uns unser Zufallsfarbebeispiel nochmal leicht umschreiben:

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
> Sie können den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-eventobject.html) für dieses Beispiel auf GitHub finden (sehen Sie es auch [live in Aktion](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)).

Hier können Sie sehen, dass wir ein Ereignisobjekt, **e**, in der Funktion einbeziehen, und in der Funktion einen Hintergrundfarbenstil auf `e.target` setzen — welches die Schaltfläche selbst ist.
Die `target`-Eigenschaft des Ereignisobjekts ist immer ein Verweis auf das Element, auf dem das Ereignis aufgetreten ist.
Wir setzen in diesem Beispiel also eine zufällige Hintergrundfarbe auf die Schaltfläche, nicht die Seite.

> [!NOTE]
> Sie können jeden Namen für das Ereignisobjekt verwenden, den Sie möchten — Sie müssen lediglich einen Namen wählen, den Sie dann im Ereignishandler verwenden können, um darauf zuzugreifen.
> `e`/`evt`/`event` wird von Entwicklern am häufigsten verwendet, weil sie kurz und leicht zu merken sind.
> Es ist immer gut, konsistent zu sein — mit sich selbst und, wenn möglich, mit anderen.

### Zusätzliche Eigenschaften von Ereignisobjekten

Die meisten Ereignisobjekte haben eine standardmäßige Menge an Eigenschaften und Methoden, die auf dem Ereignisobjekt verfügbar sind; siehe die [`Event`](/de/docs/Web/API/Event)-Objektreferenz für eine vollständige Liste.

Einige Ereignisobjekte fügen zusätzliche Eigenschaften hinzu, die für diesen speziellen Ereignistyp relevant sind. Zum Beispiel wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis ausgelöst, wenn der Benutzer eine Taste drückt. Sein Ereignisobjekt ist ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent), ein spezialisiertes `Event`-Objekt mit einer `key`-Eigenschaft, die Ihnen sagt, welche Taste gedrückt wurde:

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
Das häufigste Beispiel ist ein Webformular, etwa ein benutzerdefiniertes Anmeldeformular.
Wenn Sie die Details ausfüllen und auf die Schaltfläche zum Übermitteln klicken, ist das natürliche Verhalten, dass die Daten zur Verarbeitung an eine bestimmte Seite auf dem Server übermittelt werden und der Browser zu einer Art "Erfolgsmeldung"-Seite umgeleitet wird (oder zur selben Seite, wenn eine andere nicht angegeben ist).

Das Problem tritt auf, wenn der Benutzer die Daten nicht richtig übermittelt hat — als Entwickler möchten Sie die Übermittlung zum Server verhindern und eine Fehlermeldung anzeigen, die angibt, was falsch ist und was getan werden muss, um es zu korrigieren.
Einige Browser unterstützen automatische Formulardatenprüfung, aber da viele dies nicht tun, wird empfohlen, sich nicht darauf zu verlassen und eigene Prüfungen zu implementieren.
Lassen Sie uns ein Beispiel betrachten.

Zuerst ein einfaches HTML-Formular, das Sie dazu bringt, Ihren Vor- und Nachnamen einzugeben:

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

Nun etwas JavaScript — hier implementieren wir eine sehr einfache Prüfung innerhalb eines Handlers für das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis (das Übermittlungsereignis wird auf einem Formular ausgelöst, wenn es übermittelt wird), das testet, ob die Textfelder leer sind.
Falls ja, rufen wir die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Funktion auf dem Ereignisobjekt auf — was die Formularübermittlung stoppt — und zeigen dann eine Fehlermeldung im Absatz unter unserem Formular an, um dem Benutzer mitzuteilen, was falsch ist:

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

Natürlich ist dies eine ziemlich schwache Formularvalidierung — es würde den Benutzer nicht daran hindern, das Formular mit Leerzeichen oder Zahlen in den Feldern zu validieren, zum Beispiel — aber es ist ausreichend für Beispielzwecke.
Die Ausgabe ist wie folgt:

{{ EmbedLiveSample('Preventing_default_behavior', '100%', 180, "", "") }}

> [!NOTE]
> Für den vollständigen Quellcode siehe [preventdefault-validation.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/preventdefault-validation.html) (sehen Sie es auch [live in Aktion](https://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html) hier).

## Es sind nicht nur Webseiten

Ereignisse sind nicht einzigartig für JavaScript — die meisten Programmiersprachen haben eine Art Ereignismodell, und die Art und Weise, wie das Modell funktioniert, unterscheidet sich oft von JavaScripts Ansatz.
Tatsächlich unterscheidet sich das Ereignismodell in JavaScript für Webseiten vom Ereignismodell für JavaScript, wie es in anderen Umgebungen verwendet wird.

Zum Beispiel ist [Node.js](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) eine sehr beliebte JavaScript-Laufzeitumgebung, die es Entwicklern ermöglicht, JavaScript zur Erstellung von Netzwerk- und Serveranwendungen zu verwenden.
Das [Node.js-Ereignismodell](https://nodejs.org/api/events.html) setzt auf Listener, die auf Ereignisse hören, und Emitter, die Ereignisse regelmäßig senden — es klingt nicht so anders, aber der Code ist ziemlich anders und nutzt Funktionen wie `on()`, um einen Ereignislistener zu registrieren, und `once()`, um einen Ereignislistener zu registrieren, der sich nach einmaligem Ausführen abmeldet.
Die [HTTP Connect Event Docs](https://nodejs.org/api/http.html#event-connect) bieten ein gutes Beispiel.

Sie können JavaScript auch verwenden, um plattformübergreifende Add-ons zu erstellen, also Funktionserweiterungen für den Browser, indem Sie eine Technologie namens [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) einsetzen.
Das Ereignismodell ist dem Webereignismodell ähnlich, aber etwas anders — die Eigenschaften der Ereignislistener werden in {{Glossary("camel_case", "Camel-Case")}} geschrieben (wie `onMessage` statt `onmessage`) und müssen mit der Funktion `addListener` kombiniert werden.
Sehen Sie sich zum Beispiel die Seite [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples) an.

Sie müssen in diesem Stadium Ihres Lernprozesses nichts über andere solcher Umgebungen verstehen; wir wollten nur klarstellen, dass Ereignisse sich in verschiedenen Programmierumgebungen unterscheiden können.

## Zusammenfassung

In diesem Kapitel haben wir gelernt, was Ereignisse sind, wie man auf Ereignisse hört und darauf reagiert.

Sie haben mittlerweile gesehen, dass Elemente auf einer Webseite ineinander verschachtelt werden können. Zum Beispiel haben wir im Beispiel [Verhindern des Standardverhaltens](#verhindern_des_standardverhaltens) einige Textfelder, die in {{htmlelement("div")}}-Elemente eingebettet sind, welche ihrerseits in ein {{htmlelement("form")}}-Element eingebettet sind. Was passiert, wenn ein Klickereignis-Listener an das `<form>`-Element angehängt ist und der Benutzer in eines der Textfelder klickt? Die zugehörige Ereignishandlerfunktion wird weiterhin über einen Prozess namens _Event-Bubbling_ ausgelöst, der in der nächsten Lektion behandelt wird.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

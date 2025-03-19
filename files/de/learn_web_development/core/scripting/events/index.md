---
title: Einführung in Ereignisse
short-title: Events
slug: Learn_web_development/Core/Scripting/Events
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

Ereignisse sind Ereignisse, die in dem System auftreten, das Sie programmieren. Das System informiert Sie darüber, damit Ihr Code darauf reagieren kann.
Zum Beispiel, wenn der Benutzer auf eine Schaltfläche auf einer Webseite klickt, möchten Sie möglicherweise auf diese Aktion reagieren, indem Sie ein Informationsfenster anzeigen.
In diesem Artikel besprechen wir einige wichtige Konzepte rund um Ereignisse und betrachten die Grundlagen, wie sie in Browsern funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit JavaScript-Grundlagen aus vorherigen Lektionen.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Ereignisse sind — ein Signal, das vom Browser ausgelöst wird, wenn etwas Wichtiges passiert und der Entwickler daraufhin Code ausführen kann.</li>
          <li>Einrichten von Ereignis-Handlern mit `addEventListener()` (und `removeEventListener()`) und Ereignis-Handler-Eigenschaften.</li>
          <li>Inline-Ereignis-Handler-Attribute und warum Sie sie nicht verwenden sollten.</li>
          <li>Ereignisobjekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Ereignis?

Ereignisse sind Dinge, die im System, das Sie programmieren, passieren — das System erzeugt (oder "löst") eine Art Signal, wenn ein Ereignis eintritt, und bietet einen Mechanismus, durch den automatisch eine Aktion ausgeführt werden kann (d.h. ein Code wird ausgeführt), wenn das Ereignis eintritt.
Ereignisse werden im Browserfenster ausgelöst und neigen dazu, an ein spezifisches Element gebunden zu sein, das darin enthalten ist. Dies könnte ein einzelnes Element, eine Gruppe von Elementen, das im aktuellen Tab geladene HTML-Dokument oder das gesamte Browserfenster sein.
Es gibt viele verschiedene Arten von Ereignissen, die auftreten können.

Zum Beispiel:

- Der Benutzer wählt, klickt oder bewegt den Cursor über ein bestimmtes Element.
- Der Benutzer drückt eine Taste auf der Tastatur.
- Der Benutzer ändert die Größe des Browserfensters oder schließt es.
- Eine Webseite wird vollständig geladen.
- Ein Formular wird abgeschickt.
- Ein Video wird abgespielt, pausiert oder endet.
- Ein Fehler tritt auf.

Aus diesem Grund (und aus einem Blick auf die MDN [Ereignisreferenz](/de/docs/Web/Events)) können Sie erkennen, dass es **viele** Ereignisse gibt, die ausgelöst werden können.

Um auf ein Ereignis zu reagieren, fügen Sie ihm einen **Ereignis-Handler** hinzu. Dies ist ein Codeblock (normalerweise eine JavaScript-Funktion, die Sie als Programmierer erstellen), der ausgeführt wird, wenn das Ereignis ausgelöst wird.
Wenn ein solcher Codeblock definiert wird, um auf ein Ereignis zu reagieren, sagen wir, wir **registrieren einen Ereignis-Handler**.
Hinweis: Ereignis-Handler werden manchmal **Ereignis-Listener** genannt — sie sind für unsere Zwecke ziemlich austauschbar, obwohl sie technisch gesehen zusammenarbeiten.
Der Listener wartet darauf, dass das Ereignis auftritt, und der Handler ist der Code, der als Reaktion darauf ausgeführt wird.

> [!NOTE]
> Web-Ereignisse sind kein Teil der Kern-JavaScript-Sprache — sie sind als Teil der in den Browser integrierten APIs definiert.

### Ein Beispiel: Bearbeiten eines Klick-Ereignisses

Im folgenden Beispiel haben wir einen einzelnen {{htmlelement("button")}} auf der Seite:

```html
<button>Change color</button>
```

```css hidden
button {
  margin: 10px;
}
```

Dann haben wir etwas JavaScript. Wir werden uns das im nächsten Abschnitt genauer ansehen, aber für den Moment können wir einfach sagen: Es fügt dem "click"-Ereignis der Schaltfläche einen Ereignis-Handler hinzu, und der Handler reagiert auf das Ereignis, indem er den Seitenhintergrund auf eine zufällige Farbe setzt:

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

Das Beispielausgabe sieht folgendermaßen aus. Versuchen Sie, auf die Schaltfläche zu klicken:

{{ EmbedLiveSample('An example: handling a click event', '100%', 200, "", "") }}

## Verwendung von addEventListener()

Wie wir im letzten Beispiel gesehen haben, haben Objekte, die Ereignisse auslösen können, eine [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode, und dies ist der empfohlene Mechanismus, um Ereignis-Handler hinzuzufügen.

Schauen wir uns den Code aus dem letzten Beispiel genauer an:

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

Das HTML-{{HTMLElement("button")}}-Element löst ein Ereignis aus, wenn der Benutzer auf die Schaltfläche klickt. Also definiert es eine `addEventListener()`-Funktion, die wir hier aufrufen. Wir übergeben ihr zwei Parameter:

- den String `"click"`, um anzuzeigen, dass wir auf das Klickevent hören wollen. Schaltflächen können viele andere Ereignisse auslösen, wie z. B. [`"mouseover"`](/de/docs/Web/API/Element/mouseover_event), wenn der Benutzer die Maus über die Schaltfläche bewegt, oder [`"keydown"`](/de/docs/Web/API/Element/keydown_event), wenn der Benutzer eine Taste drückt und die Schaltfläche fokussiert ist.
- eine Funktion, die aufgerufen wird, wenn das Ereignis eintritt. In unserem Fall erzeugt die Funktion eine zufällige RGB-Farbe und setzt die [`background-color`](/de/docs/Web/CSS/background-color) der Seite [`<body>`](/de/docs/Web/HTML/Element/body) auf diese Farbe.

Es ist in Ordnung, die Handler-Funktion als separate benannte Funktion zu gestalten, so:

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

Es gibt viele verschiedene Ereignisse, die von einem Schaltflächenelement ausgelöst werden können. Lass uns experimentieren.

Erstellen Sie zuerst eine lokale Kopie von [random-color-addeventlistener.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-addeventlistener.html) und öffnen Sie sie in Ihrem Browser.
Es ist nur eine Kopie des einfachen Zufallsfarbenbeispiels, das wir bereits ausprobiert haben. Versuchen Sie nun, `click` durch die folgenden verschiedenen Werte zu ersetzen und beobachten Sie die Ergebnisse im Beispiel:

- [`focus`](/de/docs/Web/API/Element/focus_event) und [`blur`](/de/docs/Web/API/Element/blur_event) — Die Farbe ändert sich, wenn die Schaltfläche fokussiert und entfokussiert wird; versuchen Sie, die Tabulatortaste zu drücken, um den Fokus auf die Schaltfläche und erneut zu drücken, um den Fokus von der Schaltfläche zu nehmen.
  Diese werden oft verwendet, um Informationen über das Ausfüllen von Formularfeldern anzuzeigen, wenn sie fokussiert sind, oder um eine Fehlermeldung anzuzeigen, wenn ein Formularfeld mit einem falschen Wert ausgefüllt ist.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event) — Die Farbe ändert sich nur, wenn auf die Schaltfläche doppelt geklickt wird.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`mouseout`](/de/docs/Web/API/Element/mouseout_event) — Die Farbe ändert sich, wenn der Mauszeiger über die Schaltfläche schwebt oder der Zeiger von der Schaltfläche wegbewegt wird.

Einige Ereignisse, wie `click`, sind auf fast jedem Element verfügbar. Andere sind spezifischer und nur in bestimmten Situationen nützlich: Zum Beispiel ist das [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignis nur auf einigen Elementen verfügbar, wie {{htmlelement("video")}}.

### Entfernen von Listeners

Wenn Sie einen Ereignis-Handler mit `addEventListener()` hinzugefügt haben, können Sie ihn mit der Methode [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) wieder entfernen. Zum Beispiel würde dies den `changeBackground()`-Ereignis-Handler entfernen:

```js
btn.removeEventListener("click", changeBackground);
```

Ereignis-Handler können auch entfernt werden, indem ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) an [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) übergeben und dann später [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller, dem das `AbortSignal` gehört, aufgerufen wird.
Zum Beispiel: Um einen Ereignis-Handler hinzuzufügen, den wir mit einem `AbortSignal` entfernen können:

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

Dann kann der durch den obigen Code erstellte Ereignis-Handler so entfernt werden:

```js
controller.abort(); // removes any/all event handlers associated with this controller
```

Für einfache, kleine Programme ist es nicht notwendig, alte, nicht verwendete Ereignis-Handler zu bereinigen, aber für größere, komplexere Programme kann es die Effizienz verbessern.
Auch die Möglichkeit, Ereignis-Handler zu entfernen, ermöglicht es Ihnen, dieselbe Schaltfläche unter verschiedenen Umständen unterschiedliche Aktionen ausführen zu lassen: Alles, was Sie tun müssen, ist, Handler hinzuzufügen oder zu entfernen.

### Hinzufügen mehrerer Listener für ein einzelnes Ereignis

Indem Sie mehr als einen Aufruf zu [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mit verschiedenen Handlers durchführen, können Sie mehrere Handlers für ein einzelnes Ereignis haben:

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

Beide Funktionen würden nun ausgeführt, wenn auf das Element geklickt wird.

## Andere Ereignis-Listener-Mechanismen

Wir empfehlen, `addEventListener()` zu verwenden, um Ereignis-Handler zu registrieren. Es ist die leistungsstärkste Methode und skaliert am besten mit komplexeren Programmen. Es gibt jedoch zwei andere Möglichkeiten zur Registrierung von Ereignis-Handlern, die Sie sehen könnten: _Ereignis-Handler-Eigenschaften_ und _Inline-Ereignis-Handler_.

### Ereignis-Handler-Eigenschaften

Objekte (wie Schaltflächen), die Ereignisse auslösen können, haben normalerweise auch Eigenschaften, deren Name `on` gefolgt von dem Namen des Ereignisses ist. Zum Beispiel haben Elemente eine Eigenschaft `onclick`.
Dies wird eine _Ereignis-Handler-Eigenschaft_ genannt. Um auf das Ereignis zu hören, können Sie die Handler-Funktion der Eigenschaft zuweisen.

Zum Beispiel könnten wir das Zufallsfarbenbeispiel so umschreiben:

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

Mit Ereignis-Handler-Eigenschaften können Sie nicht mehr als einen Handler für ein einzelnes Ereignis hinzufügen. Zum Beispiel können Sie `addEventListener('click', handler)` auf einem Element mehrfach aufrufen, mit verschiedenen Funktionen, die im zweiten Argument angegeben sind:

```js
element.addEventListener("click", function1);
element.addEventListener("click", function2);
```

Dies ist mit Ereignis-Handler-Eigenschaften nicht möglich, da alle nachfolgenden Versuche, die Eigenschaft zu setzen, frühere überschreiben:

```js
element.onclick = function1;
element.onclick = function2;
```

### Inline-Ereignis-Handler — diese sollten Sie nicht verwenden

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

Die früheste Methode, um Ereignis-Handler im Web zu registrieren, umfasste [_Ereignis-Handler-HTML-Attribute_](/de/docs/Web/HTML/Attributes#event_handler_attributes) (oder _Inline-Ereignis-Handler_) wie das oben gezeigte — der Attributwert ist buchstäblich der JavaScript-Code, den Sie ausführen möchten, wenn das Ereignis eintritt.
Das obige Beispiel ruft eine Funktion auf, die in einem {{htmlelement("script")}}-Element auf derselben Seite definiert ist, aber Sie könnten auch JavaScript direkt im Attribut einfügen, zum Beispiel:

```html
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

Sie finden HTML-Attributäquivalente für viele der Ereignis-Handler-Eigenschaften; Sie sollten diese jedoch nicht verwenden — sie gelten als schlechte Praxis.
Es mag einfach erscheinen, ein Ereignis-Handler-Attribut zu verwenden, wenn Sie etwas wirklich Schnelles tun möchten, aber sie werden schnell unüberschaubar und ineffizient.

Zunächst einmal ist es keine gute Idee, Ihr HTML und Ihr JavaScript zu vermischen, da es schwer lesbar wird. Ihr JavaScript getrennt zu halten, ist eine gute Praxis, und wenn es in einer separaten Datei ist, können Sie es auf mehrere HTML-Dokumente anwenden.

Selbst in einer einzigen Datei sind Inline-Ereignis-Handler keine gute Idee.
Eine Schaltfläche ist in Ordnung, aber was wäre, wenn Sie 100 Schaltflächen hätten? Sie müssten 100 Attribute zur Datei hinzufügen; es würde schnell zu einem Wartungsalbtraum werden.
Mit JavaScript könnten Sie leicht eine Ereignis-Handler-Funktion auf alle Schaltflächen der Seite anwenden, egal wie viele es sind, indem Sie etwas wie dieses verwenden:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}
```

Schließlich werden viele gängige Serverkonfigurationen Inline-JavaScript als Sicherheitsmaßnahme deaktivieren.

**Sie sollten niemals die HTML-Ereignis-Handler-Attribute verwenden** — diese sind veraltet, und ihre Verwendung ist schlechte Praxis.

## Ereignisobjekte

Manchmal sehen Sie in einer Ereignis-Handler-Funktion einen Parameter, der mit einem Namen wie `event`, `evt` oder `e` angegeben ist.
Dies wird **Ereignisobjekt** genannt, und es wird automatisch an Ereignis-Handler übergeben, um zusätzliche Funktionen und Informationen bereitzustellen.
Zum Beispiel, lassen Sie uns unser Zufallsfarbenbeispiel erneut leicht umschreiben:

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
> Den vollständigen Quellcode können Sie auf GitHub finden (siehe auch [Live-Demo](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)).

Hier sehen Sie, dass wir ein Ereignisobjekt, **e**, in der Funktion enthalten, und in der Funktion eine Hintergrundfarbe für `e.target` setzen — das ist die Schaltfläche selbst.
Die `target`-Eigenschaft des Ereignisobjekts ist immer eine Referenz auf das Element, auf das das Ereignis stattgefunden hat.
Also setzen wir in diesem Beispiel eine zufällige Hintergrundfarbe auf die Schaltfläche, nicht auf die Seite.

> [!NOTE]
> Sie können jeden beliebigen Namen für das Ereignisobjekt verwenden — Sie müssen nur einen Namen wählen, den Sie dann innerhalb der Ereignis-Handler-Funktion verwenden können, um darauf zuzugreifen.
> `e`/`evt`/`event` wird von Entwicklern am häufigsten verwendet, da es kurz und leicht zu merken ist.
> Es ist immer gut, konsistent zu sein — mit sich selbst und, wenn möglich, mit anderen.

### Zusätzliche Eigenschaften von Ereignisobjekten

Die meisten Ereignisobjekte haben eine Standardmenge an Eigenschaften und Methoden, die auf dem Ereignisobjekt verfügbar sind; siehe die [`Event`](/de/docs/Web/API/Event)-Objektreferenz für eine vollständige Liste.

Einige Ereignisobjekte fügen zusätzliche Eigenschaften hinzu, die für diesen besonderen Ereignistyp relevant sind. Beispielsweise wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis ausgelöst, wenn der Benutzer eine Taste drückt. Das Ereignisobjekt ist ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent), welches ein spezialisiertes `Event`-Objekt mit einer `key`-Eigenschaft ist, die Ihnen sagt, welche Taste gedrückt wurde:

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

Versuchen Sie, in das Textfeld zu tippen, und sehen Sie sich die Ausgabe an:

{{EmbedLiveSample("Extra_properties_of_event_objects", 100, 100)}}

## Verhindern des Standardverhaltens

Manchmal stoßen Sie auf eine Situation, in der Sie wollen, dass ein Ereignis nicht das tut, was es standardmäßig tun würde.
Das häufigste Beispiel ist das eines Webformulars, zum Beispiel eines benutzerdefinierten Registrierungsformulars.
Wenn Sie die Details ausfüllen und die Schaltfläche zum Absenden klicken, ist das natürliche Verhalten, dass die Daten an eine angegebene Seite auf dem Server zur Verarbeitung gesendet werden und der Browser zu einer Art "Erfolg"-Seite weitergeleitet wird (oder zur selben Seite, wenn keine andere angegeben ist).

Das Problem tritt auf, wenn der Benutzer die Daten nicht korrekt übermittelt hat — als Entwickler möchten Sie die Übermittlung an den Server verhindern und eine Fehlermeldung anzeigen, die sagt, was falsch ist und was gemacht werden muss, um es zu korrigieren.
Einige Browser unterstützen automatische Formular-Datenvalidierungsfunktionen, aber da viele dies nicht tun, wird empfohlen, nicht darauf zu verlassen und eigene Validierungsprüfungen zu implementieren.
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

Nun etwas JavaScript — hier implementieren wir eine sehr einfache Überprüfung innerhalb eines Handlers für das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis (das Senden-Ereignis wird auf einem Formular ausgelöst, wenn es abgesendet wird), das überprüft, ob die Textfelder leer sind.
Wenn sie es sind, rufen wir die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Funktion auf dem Ereignisobjekt auf — wodurch das Formular nicht übermittelt wird — und zeigen dann eine Fehlermeldung im Absatz unter unserem Formular an, um dem Benutzer mitzuteilen, was falsch ist:

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

Offensichtlich ist dies eine ziemlich schwache Formularvalidierung — es würde den Benutzer nicht davon abhalten, das Formular mit Leerzeichen oder Zahlen in den Feldern zu validieren, zum Beispiel — aber es ist für Beispielzwecke in Ordnung.
Die Ausgabe ist wie folgt:

{{ EmbedLiveSample('Preventing_default_behavior', '100%', 180, "", "") }}

> [!NOTE]
> Für den vollständigen Quellcode siehe [preventdefault-validation.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/preventdefault-validation.html) (siehe auch [Live-Demo](https://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html) hier).

## Es geht nicht nur um Webseiten

Ereignisse sind nicht einzigartig für JavaScript — die meisten Programmiersprachen haben eine Art Ereignismodell, und die Art und Weise, wie das Modell funktioniert, unterscheidet sich oft vom JavaScript-Weg.
Tatsächlich unterscheidet sich das Ereignismodell in JavaScript für Webseiten vom Ereignismodell für JavaScript, wie es in anderen Umgebungen verwendet wird.

Zum Beispiel ist [Node.js](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) ein sehr beliebtes JavaScript-Laufzeitsystem, das es Entwicklern ermöglicht, JavaScript zu verwenden, um Netzwerk- und Serveranwendungen zu erstellen.
Das [Node.js-Ereignismodell](https://nodejs.org/api/events.html) beruht auf Listenern, die auf Ereignisse hören, und Emittern, die Ereignisse periodisch auslösen — es klingt nicht so anders, aber der Code ist ziemlich anders und verwendet Funktionen wie `on()`, um einen Ereignis-Listener zu registrieren, und `once()`, um einen Ereignis-Listener zu registrieren, der sich abmeldet, nachdem er einmal ausgeführt wurde.
Die [HTTP connect event docs](https://nodejs.org/api/http.html#event-connect) bieten ein gutes Beispiel.

Sie können JavaScript auch verwenden, um plattformübergreifende Add-ons — Funktionserweiterungen für den Browser — mit einer Technologie namens [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) zu erstellen.
Das Ereignismodell ist dem Webereignismodell ähnlich, aber ein wenig anders — Ereignis-Listener-Eigenschaften werden in {{Glossary("camel_case", "Camel Case")}} geschrieben (wie `onMessage` anstelle von `onmessage`) und müssen mit der `addListener`-Funktion kombiniert werden.
Sehen Sie sich die Seite [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples) für ein Beispiel an.

Sie müssen derzeit nichts über andere solche Umgebungen verstehen; wir wollten nur klarstellen, dass sich Ereignisse in verschiedenen Programmierumgebungen unterscheiden können.

## Zusammenfassung

In diesem Kapitel haben wir gelernt, was Ereignisse sind, wie man auf sie hört und wie man auf sie reagiert.

Sie haben inzwischen gesehen, dass Elemente in einer Webseite innerhalb anderer Elemente verschachtelt sein können. Zum Beispiel haben wir im [Verhindern des Standardverhaltens](#verhindern_des_standardverhaltens)-Beispiel einige Textfelder, die in {{htmlelement("div")}}-Elementen platziert sind, die wiederum in einem {{htmlelement("form")}}-Element stehen. Was passiert, wenn ein Klickereignis-Listener am `<form>`-Element angebracht ist und der Benutzer in eines der Textfelder klickt? Die zugehörige Ereignis-Handler-Funktion wird trotzdem über einen Prozess namens _Ereignis-Bubbling_ ausgeführt, das im nächsten Lernabschnitt behandelt wird.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

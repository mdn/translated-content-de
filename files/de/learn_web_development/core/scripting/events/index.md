---
title: Einführung in Ereignisse
short-title: Events
slug: Learn_web_development/Core/Scripting/Events
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Functions","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

Ereignisse sind Vorgänge, die im System, das Sie programmieren, geschehen und über die das System Sie informiert, damit Ihr Code darauf reagieren kann.
Wenn ein Benutzer beispielsweise auf einer Webseite einen Button klickt, möchten Sie möglicherweise auf diese Aktion reagieren, indem Sie ein Informationsfenster anzeigen.
In diesem Artikel besprechen wir einige wichtige Konzepte rund um Ereignisse und betrachten die Grundlagen ihrer Funktionsweise in Browsern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Grundverständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, die in vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Ereignisse sind: ein Signal, das vom Browser ausgelöst wird, wenn etwas Wichtiges passiert, worauf der Entwickler mit Code reagieren kann.</li>
          <li>Einrichten von Ereignishandlern mit <code>addEventListener()</code> (und <code>removeEventListener()</code>) und Ereignishandler-Eigenschaften.</li>
          <li>Inline-Ereignishandler-Attribute und warum Sie diese nicht verwenden sollten.</li>
          <li>Ereignisobjekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Ereignis?

Ereignisse sind Vorgänge, die im System, das Sie programmieren, geschehen — das System erzeugt (oder "löst") eine Art Signal, wenn ein Ereignis auftritt, und bietet einen Mechanismus, durch den automatisch eine Aktion ausgeführt werden kann (das heißt, ein Code ausgeführt wird), wenn das Ereignis stattfindet.
Ereignisse werden im Browserfenster ausgelöst und sind normalerweise an ein bestimmtes Element gebunden, das sich darin befindet. Dies könnte ein einzelnes Element sein, eine Gruppe von Elementen, das im aktuellen Tab geladene HTML-Dokument oder das gesamte Browserfenster.
Es gibt viele verschiedene Arten von Ereignissen, die auftreten können.

Zum Beispiel:

- Der Benutzer wählt, klickt oder bewegt den Cursor über ein bestimmtes Element.
- Der Benutzer drückt eine Taste auf der Tastatur.
- Der Benutzer ändert die Größe oder schließt das Browserfenster.
- Eine Webseite lädt vollständig.
- Ein Formular wird abgesendet.
- Ein Video wird abgespielt, pausiert oder endet.
- Ein Fehler tritt auf.

Aus dieser Übersicht (und einem Blick auf den [Ereignisindex](/de/docs/Web/API/Document_Object_Model/Events#event_index)) können Sie entnehmen, dass es **eine Menge** von Ereignissen gibt, die ausgelöst werden können.

Um auf ein Ereignis zu reagieren, fügen Sie ihm einen **Ereignislistener** hinzu. Dies ist eine Codefunktion, die das Auslösen des Ereignisses überwacht. Wenn das Ereignis ausgelöst wird, wird eine **Ereignishandler**-Funktion (die im Listener referenziert oder enthalten ist) aufgerufen, um auf das Auslösen des Ereignisses zu reagieren. Wenn ein solcher Codeblock eingerichtet ist, um auf ein Ereignis zu reagieren, sprechen wir von der **Registrierung eines Ereignishandlers**.

### Ein Beispiel: Umgang mit einem Klick-Ereignis

Im folgenden Beispiel haben wir einen einzelnen {{htmlelement("button")}} auf der Seite:

```html
<button>Change color</button>
```

```css hidden
button {
  margin: 10px;
}
```

Dann haben wir etwas JavaScript. Wir werden dies im nächsten Abschnitt genauer betrachten, aber vorerst können wir einfach sagen: Es fügt einen Ereignislistener für das `"click"`-Ereignis des Buttons hinzu, und die enthaltene Handlerfunktion reagiert auf das Ereignis, indem sie den Seitenhintergrund auf eine zufällige Farbe setzt:

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

Die Beispielausgabe ist wie folgt. Versuchen Sie, auf den Button zu klicken:

{{ EmbedLiveSample('An example: handling a click event', '100%', 200, "", "") }}

## Nutzung von addEventListener()

Wie wir im letzten Beispiel gesehen haben, haben Objekte, die Ereignisse auslösen können, eine [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode, und dies ist der empfohlene Mechanismus zum Hinzufügen von Ereignislistenern.

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

Das HTML {{HTMLElement("button")}}-Element löst ein `click`-Ereignis aus, wenn der Benutzer darauf klickt. Wir rufen die `addEventListener()`-Methode darauf auf, um einen Ereignislistener hinzuzufügen; dieser nimmt zwei Parameter:

- den String `"click"`, um anzugeben, dass wir das `click`-Ereignis überwachen möchten. Buttons können viele andere Ereignisse auslösen, wie zum Beispiel [`"mouseover"`](/de/docs/Web/API/Element/mouseover_event), wenn der Benutzer die Maus über den Button bewegt, oder [`"keydown"`](/de/docs/Web/API/Element/keydown_event), wenn der Benutzer eine Taste drückt und der Button den Fokus hat.
- eine Funktion, die aufgerufen wird, wenn das Ereignis auftritt. In unserem Fall erzeugt die definierte anonyme Funktion eine zufällige RGB-Farbe und setzt die {{cssxref("background-color")}} der Seite [`<body>`](/de/docs/Web/HTML/Reference/Elements/body) auf diese Farbe.

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

### Überwachen anderer Ereignisse

Es gibt viele verschiedene Ereignisse, die von einem Button-Element ausgelöst werden können. Lassen Sie uns experimentieren.

Erstellen Sie zunächst eine lokale Kopie von [random-color-addeventlistener.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-addeventlistener.html) und öffnen Sie sie in Ihrem Browser.
Es ist nur eine Kopie des einfachen Zufallsfarb-Beispiels, das wir bereits ausprobiert haben. Versuchen Sie nun, `click` nacheinander durch die folgenden verschiedenen Werte zu ersetzen und beobachten Sie die Ergebnisse im Beispiel:

- [`focus`](/de/docs/Web/API/Element/focus_event) und [`blur`](/de/docs/Web/API/Element/blur_event) — Die Farbe ändert sich, wenn der Button fokussiert und unfokussiert wird; versuchen Sie, die Tabulatortaste zu drücken, um den Button zu fokussieren, und drücken Sie erneut die Tabulatortaste, um den Fokus vom Button zu entfernen.
  Diese werden häufig verwendet, um Informationen über das Ausfüllen von Formularfeldern anzuzeigen, wenn diese fokussiert sind, oder um eine Fehlermeldung anzuzeigen, wenn ein Formularfeld mit einem falschen Wert ausgefüllt wurde.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event) — Die Farbe ändert sich nur, wenn der Button doppelt geklickt wird.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`mouseout`](/de/docs/Web/API/Element/mouseout_event) — Die Farbe ändert sich, wenn der Mauszeiger über den Button schwebt oder wenn der Zeiger den Button verlässt.

Einige Ereignisse wie `click` sind auf nahezu jedem Element verfügbar. Andere sind spezifischer und nur in bestimmten Situationen nützlich: Zum Beispiel ist das [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignis nur auf Elementen verfügbar, die eine Wiedergabefunktion haben, wie z.B. {{htmlelement("video")}}.

### Entfernen von Listenern

Wenn Sie einen Ereignislistener mit `addEventListener()` hinzugefügt haben, können Sie ihn wieder entfernen, falls gewünscht. Der gebräuchlichste Weg, dies zu tun, ist mit der [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)-Methode. Die folgende Zeile würde zum Beispiel den `click`-Ereignishandler entfernen, den wir zuvor gesehen haben:

```js
btn.removeEventListener("click", changeBackground);
```

Für einfache, kleine Programme ist das Bereinigen alter, nicht mehr benötigter Ereignishandler nicht notwendig, aber für größere, komplexere Programme kann es die Effizienz verbessern.
Auch ermöglicht Ihnen die Fähigkeit, Ereignishandler zu entfernen, dasselbe Button, unterschiedliche Aktionen unter verschiedenen Umständen auszuführen: Sie müssen lediglich Handler hinzufügen oder entfernen.

### Hinzufügen mehrerer Listener für ein einzelnes Ereignis

Indem Sie mehrmals [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufrufen und unterschiedliche Handler bereitstellen, können Sie mehrere Handler-Funktionen auf ein einzelnes Ereignis reagieren lassen:

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

Beide Funktionen würden nun ausgeführt, wenn das Element geklickt wird.

## Andere Mechanismen für Ereignislistener

Wir empfehlen, `addEventListener()` zu verwenden, um Ereignishandler zu registrieren. Es ist die leistungsstärkste Methode und skaliert am besten mit komplexeren Programmen. Es gibt jedoch zwei andere Möglichkeiten, Ereignishandler zu registrieren, die Sie möglicherweise sehen werden: _Ereignishandler-Eigenschaften_ und _Inline-Ereignishandler_.

### Ereignishandler-Eigenschaften

Objekte (wie Schaltflächen), die Ereignisse auslösen können, haben normalerweise auch Eigenschaften, deren Name mit `on` gefolgt vom Namen eines Ereignisses beginnt. Zum Beispiel haben Elemente eine Eigenschaft `onclick`.
Dies wird als **Ereignishandler-Eigenschaft** bezeichnet. Um das Ereignis zu überwachen, können Sie die Handler-Funktion der Eigenschaft zuweisen.

Beispielsweise könnten wir das Zufallsfarb-Beispiel so umschreiben:

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

Ereignishandler-Eigenschaften haben im Vergleich zu `addEventListener()` Nachteile. Einer der bedeutendsten ist, dass Sie keine [mehreren Listener für ein einzelnes Ereignis hinzufügen können](#hinzufügen_mehrerer_listener_für_ein_einzelnes_ereignis). Das folgende Muster funktioniert nicht, da alle nachfolgenden Versuche den Eigenschaftswert zu setzen, frühere überschreiben würden:

```js
element.onclick = function1;
element.onclick = function2;
```

### Inline-Ereignishandler — verwenden Sie diese nicht

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

Die früheste Methode zum Registrieren von Ereignishandlern im Web umfasste [_Ereignishandler-Attribute_](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) (oder _Inline-Ereignishandler_) wie das obige Beispiel — der Attributwert enthält den JavaScript-Code, den Sie ausführen möchten, wenn das Ereignis eintritt.
Im obigen Beispiel wird eine Funktion innerhalb eines {{htmlelement("script")}}-Elements auf derselben Seite aufgerufen, aber Sie könnten auch JavaScript direkt innerhalb des Attributs einfügen, zum Beispiel:

```html example-bad
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

Sie können HTML-Attributäquivalente für viele der Ereignishandler-Eigenschaften finden; Sie sollten diese jedoch nicht verwenden — sie gelten als schlechte Praxis.
Es mag leicht erscheinen, ein Ereignishandler-Attribut zu verwenden, wenn Sie etwas sehr Schnelles tun, aber sie werden schnell unübersichtlich und ineffizient.

Es ist von vornherein keine gute Idee, HTML und JavaScript zu vermischen, da das Lesen erschwert wird. Es ist gute Praxis, Ihr JavaScript getrennt zu halten, und wenn es sich in einer separaten Datei befindet, können Sie es auf mehrere HTML-Dokumente anwenden.

Selbst in einer einzigen Datei sind Inline-Ereignishandler keine gute Idee.
Ein Button ist in Ordnung, aber was ist, wenn Sie 100 Buttons haben? Sie müssten 100 Attribute zur Datei hinzufügen; es würde schnell zu einem Wartungsalptraum.
Mit JavaScript könnten Sie leicht eine Ereignishandler-Funktion zu allen Buttons auf der Seite hinzufügen, unabhängig davon, wie viele es gibt, indem Sie etwas wie dies verwenden:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}
```

Schließlich werden viele gängige Serverkonfigurationen Inline-JavaScript als Sicherheitsmaßnahme nicht zulassen.

**Sie sollten nie die HTML-Ereignishandler-Attribute verwenden** — diese sind veraltet, und ihre Verwendung ist schlechte Praxis.

## Ereignisobjekte

Manchmal sehen Sie innerhalb einer Ereignishandler-Funktion einen Parameter mit einem Namen wie `event`, `evt` oder `e`.
Dies wird als **Ereignisobjekt** bezeichnet, und es wird automatisch an Ereignishandler weitergegeben, um zusätzliche Funktionen und Informationen bereitzustellen.
Schauen wir uns unser Random-Color-Beispiel noch einmal an, um ein Ereignisobjekt zu integrieren:

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
> Sie können den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-eventobject.html) für dieses Beispiel auf GitHub finden (auch [sehen Sie es live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)).

Hier sehen Sie, dass wir ein Ereignisobjekt **e** in die Funktion aufnehmen und in der Funktion eine Hintergrundfarbenstil auf `e.target` festlegen — was der Button selbst ist.
Die `target`-Eigenschaft des Ereignisobjekts ist immer ein Verweis auf das Element, auf dem das Ereignis aufgetreten ist.
In diesem Beispiel setzen wir also eine zufällige Hintergrundfarbe auf den Button, nicht auf die Seite.

> [!NOTE]
> Sie können jeden beliebigen Namen für das Ereignisobjekt verwenden — Sie müssen nur einen Namen wählen, den Sie innerhalb der Ereignishandler-Funktion referenzieren können.
> `e`, `evt` und `event` werden häufig von Entwicklern verwendet, weil sie kurz und leicht zu merken sind.
> Es ist immer gut, konsistent zu sein — mit sich selbst und mit anderen, wenn möglich.

### Zusätzliche Eigenschaften von Ereignisobjekten

Die meisten Ereignisobjekte haben einen standardmäßigen Satz von Eigenschaften und Methoden, die auf dem Ereignisobjekt verfügbar sind; siehe die [`Event`](/de/docs/Web/API/Event)-Objektreferenz für eine vollständige Liste.

Einige Ereignisobjekte fügen zusätzliche Eigenschaften hinzu, die für den bestimmten Ereignistyp relevant sind. Zum Beispiel das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis, das ausgelöst wird, wenn der Benutzer eine Taste drückt. Sein Ereignisobjekt ist ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent), ein spezialisiertes `Event`-Objekt mit einer `key`-Eigenschaft, die Ihnen mitteilt, welche Taste gedrückt wurde:

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

{{EmbedLiveSample("Extra_properties_of_event_objects", 100, 100)}}

## Verhindern des Standardverhaltens

Manchmal stoßen Sie auf eine Situation, in der Sie verhindern möchten, dass ein Ereignis das tut, was es standardmäßig tut.
Das häufigste Beispiel ist das eines Webformulars, zum Beispiel eines benutzerdefinierten Registrierungsformulars.
Wenn Sie die Daten ausfüllen und auf die Schaltfläche "Senden" klicken, besteht das natürliche Verhalten darin, dass die Daten an eine angegebene Seite auf dem Server zur Verarbeitung gesendet werden und der Browser auf eine Art "Erfolgsmeldungs"-Seite umgeleitet wird (oder auf dieselbe Seite, wenn eine andere nicht angegeben wurde).

Das Problem entsteht, wenn der Benutzer die Daten nicht korrekt eingereicht hat — als Entwickler möchten Sie die Übermittlung an den Server verhindern und eine Fehlermeldung anzeigen, die besagt, was falsch ist und was zu tun ist, um es zu korrigieren.
Einige Browser unterstützen automatische Formular-Datenprüfungsfunktionen, aber da viele dies nicht tun, wird empfohlen, sich nicht darauf zu verlassen und eigene Validierungsprüfungen zu implementieren.
Schauen wir uns ein Beispiel an.

Zuerst ein einfaches HTML-Formular, das Sie dazu auffordert, Ihren Vor- und Nachnamen einzugeben:

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

Nun etwas JavaScript — hier implementieren wir eine grundlegende Prüfung in einem Handler für das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis (das Submit-Ereignis wird bei einem Formular ausgelöst, wenn es gesendet wird), das überprüft, ob die Textfelder leer sind.
Wenn dem so ist, rufen wir die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Funktion auf dem Ereignisobjekt auf — das die Formularübermittlung stoppt — und zeigen dann eine Fehlermeldung im Absatz unter unserem Formular an, um dem Benutzer mitzuteilen, was falsch ist:

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

Offensichtlich ist dies eine ziemlich schwache Formularvalidierung — sie würde den Benutzer beispielsweise nicht daran hindern, das Formular mit Leerzeichen oder Zahlen in den Feldern zu validieren — aber es ist für Beispielzwecke in Ordnung.

Sie können das vollständige Beispiel [live ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html) — probieren Sie es dort aus. Für den vollständigen Quellcode siehe [preventdefault-validation.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/preventdefault-validation.html).

## Es betrifft nicht nur Webseiten

Ereignisse sind nicht einzigartig für JavaScript — die meisten Programmiersprachen haben eine Art von Ereignismodell, und die Funktionsweise des Modells unterscheidet sich oft von der in JavaScript.
In der Tat unterscheidet sich das Ereignismodell in JavaScript für Webseiten vom Ereignismodell für JavaScript, wie es in anderen Umgebungen verwendet wird.

Zum Beispiel ist [Node.js](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) eine sehr beliebte JavaScript-Laufzeitumgebung, die es Entwicklern ermöglicht, JavaScript zum Erstellen von Netzwerk- und serverseitigen Anwendungen zu verwenden.
Das [Node.js-Ereignismodell](https://nodejs.org/api/events.html) beruht auf Listenern, die auf Ereignisse horchen, und Emittern, die periodisch Ereignisse auslösen — es klingt nicht so anders, aber der Code unterscheidet sich erheblich, da Funktionen wie `on()` zum Registrieren eines Ereignislisteners verwendet werden, und `once()` zum Registrieren eines Ereignislisteners, der sich abmeldet, nachdem er einmal ausgeführt wurde.
Die Node.js [HTTP connect event docs](https://nodejs.org/api/http.html#event-connect) bieten ein gutes Beispiel.

Sie können JavaScript auch verwenden, um plattformübergreifende Add-ons zu entwickeln — Erweiterungen der Browserfunktionalität — mit einer Technologie namens [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions).
Das Ereignismodell ist dem der Webereignisse ähnlich, jedoch etwas anders — Ereignislistener-Eigenschaften werden in {{Glossary("camel_case", "camel case")}} geschrieben (wie z.B. `onMessage` statt `onmessage`) und müssen mit der `addListener`-Funktion kombiniert werden.
Siehe die Seite zu [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples) für ein Beispiel.

Sie müssen an diesem Punkt Ihres Lernens nichts über andere solche Umgebungen verstehen; wir wollten nur klarstellen, dass sich Ereignisse in unterschiedlichen Programmierumgebungen unterscheiden können.

## Zusammenfassung

In diesem Kapitel haben wir gelernt, was Ereignisse sind, wie man auf Ereignisse horcht und wie man auf sie reagiert.

Sie haben inzwischen gesehen, dass Elemente auf einer Webseite innerhalb anderer Elemente verschachtelt sein können. Zum Beispiel haben wir im Beispiel [Verhindern des Standardverhaltens](#verhindern_des_standardverhaltens) einige Textfelder, die in {{htmlelement("div")}}-Elementen platziert sind, die wiederum in einem {{htmlelement("form")}}-Element platziert sind. Was passiert, wenn ein Klick-Ereignislistener an das `<form>`-Element gebunden ist und der Benutzer in eines der Textfelder klickt? Die zugehörige Ereignishandler-Funktion wird immer noch über einen als _Event-Bubbling_ bezeichneten Prozess ausgelöst, der in der nächsten Lektion behandelt wird.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Functions","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

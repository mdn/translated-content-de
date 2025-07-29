---
title: Einführung in Ereignisse
short-title: Events
slug: Learn_web_development/Core/Scripting/Events
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

Ereignisse sind Dinge, die im System, das Sie programmieren, geschehen und von denen das System Ihnen berichtet, damit Ihr Code darauf reagieren kann.
Zum Beispiel, wenn der Benutzer auf einer Webseite auf einen Button klickt, möchten Sie vielleicht mit dem Anzeigen eines Informationsfeldes auf diese Aktion reagieren.
In diesem Artikel besprechen wir einige wichtige Konzepte rund um Ereignisse und schauen uns die Grundlagen an, wie sie in Browsern funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, die in vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Ereignisse sind — ein Signal, das vom Browser ausgelöst wird, wenn etwas Bedeutendes passiert, auf das der Entwickler mit Code reagieren kann.</li>
          <li>Einrichten von Ereignishandlern mit <code>addEventListener()</code> (und <code>removeEventListener()</code>) und Ereignishandler-Eigenschaften.</li>
          <li>Inline-Ereignishandler-Attribute und warum Sie sie nicht verwenden sollten.</li>
          <li>Ereignis-Objekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Ereignis?

Ereignisse sind Dinge, die im System, das Sie programmieren, geschehen — das System produziert (oder "feuert") ein Signal irgendeiner Art, wenn ein Ereignis auftritt, und bietet einen Mechanismus, durch den eine Aktion automatisch ausgeführt werden kann (also ein Code, der ausgeführt wird), wenn das Ereignis auftritt.
Ereignisse werden im Browserfenster ausgelöst und tendieren dazu, mit einem speziellen Element verbunden zu sein, das sich darin befindet. Dies könnte ein einzelnes Element, eine Gruppe von Elementen, das im aktuellen Tab geladene HTML-Dokument oder das gesamte Browserfenster sein.
Es gibt viele verschiedene Arten von Ereignissen, die auftreten können.

Zum Beispiel:

- Der Benutzer wählt ein Element aus, klickt darauf oder fährt mit dem Cursor darüber.
- Der Benutzer drückt eine Taste auf der Tastatur.
- Der Benutzer ändert die Größe des Browserfensters oder schließt es.
- Eine Webseite wird fertig geladen.
- Ein Formular wird abgesendet.
- Ein Video wird abgespielt, pausiert oder beendet.
- Ein Fehler tritt auf.

Sie können daraus ableiten (und durch einen Blick auf den [Ereignisindex](/de/docs/Web/API/Document_Object_Model/Events#event_index)), dass **sehr viele** Ereignisse ausgelöst werden können.

Um auf ein Ereignis zu reagieren, fügen Sie ihm einen **Ereignislistener** hinzu. Dies ist ein Codemechanismus, der auf das Auslösen des Ereignisses hört. Wenn das Ereignis ausgelöst wird, wird eine **Ereignishandler**-Funktion (die im Ereignislistener referenziert wird oder sich darin befindet) aufgerufen, um auf das Auslösen des Ereignisses zu reagieren. Wenn ein solcher Codeblock zur Reaktion auf ein Ereignis eingerichtet wird, sagen wir, dass wir **einen Ereignishandler registrieren**.

### Ein Beispiel: Behandeln eines Klick-Ereignisses

Im folgenden Beispiel haben wir einen einzigen {{htmlelement("button")}} auf der Seite:

```html
<button>Change color</button>
```

```css hidden
button {
  margin: 10px;
}
```

Dann haben wir etwas JavaScript. Wir werden dies im nächsten Abschnitt genauer betrachten, aber für jetzt können wir sagen: Es fügt einen Ereignislistener für das `"click"`-Ereignis des Buttons hinzu, und die enthaltene Handler-Funktion reagiert auf das Ereignis, indem sie den Hintergrund der Seite auf eine zufällige Farbe setzt:

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

{{ EmbedLiveSample('An example: handling a click event', '100%', 200, "", "") }}

## Verwendung von addEventListener()

Wie wir im letzten Beispiel gesehen haben, haben Objekte, die Ereignisse auslösen können, eine [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode, und dies ist der empfohlene Mechanismus, um Ereignislistener hinzuzufügen.

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

Das HTML-{{HTMLElement("button")}}-Element löst ein `click`-Ereignis aus, wenn der Benutzer darauf klickt. Wir rufen die `addEventListener()`-Methode darauf auf, um einen Ereignislistener hinzuzufügen; dies nimmt zwei Parameter entgegen:

- der String `"click"`, um anzuzeigen, dass wir auf das `click`-Ereignis hören möchten. Buttons können viele andere Ereignisse auslösen, wie [`"mouseover"`](/de/docs/Web/API/Element/mouseover_event), wenn der Benutzer die Maus über den Button bewegt, oder [`"keydown"`](/de/docs/Web/API/Element/keydown_event), wenn der Benutzer eine Taste drückt und der Button fokussiert ist.
- eine Funktion, die aufgerufen wird, wenn das Ereignis eintritt. In unserem Fall generiert die definierte anonyme Funktion eine zufällige RGB-Farbe und setzt die [`background-color`](/de/docs/Web/CSS/background-color) der Seite [`<body>`](/de/docs/Web/HTML/Reference/Elements/body) auf diese Farbe.

Sie könnten auch eine separate benannte Funktion erstellen und diese im zweiten Parameter von `addEventListener()` referenzieren, wie folgt:

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

### Lauschen auf andere Ereignisse

Es gibt viele verschiedene Ereignisse, die von einem Button-Element ausgelöst werden können. Lassen Sie uns experimentieren.

Erstellen Sie zunächst eine lokale Kopie von [random-color-addeventlistener.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-addeventlistener.html) und öffnen Sie sie in Ihrem Browser.
Es ist nur eine Kopie des einfachen Egennfarb-Beispiels, mit dem wir bereits gespielt haben. Versuchen Sie nun, `click` auf die folgenden verschiedenen Werte zu ändern und die Ergebnisse im Beispiel zu beobachten:

- [`focus`](/de/docs/Web/API/Element/focus_event) und [`blur`](/de/docs/Web/API/Element/blur_event) — Die Farbe ändert sich, wenn der Button fokussiert und nicht fokussiert wird; versuchen Sie, die Tabulatortaste zu drücken, um den Button zu fokussieren, und drücken Sie die Tabulatortaste erneut, um den Fokus vom Button zu entfernen.
  Diese werden oft verwendet, um Informationen über das Ausfüllen von Formularfeldern anzuzeigen, wenn sie fokussiert sind, oder um eine Fehlermeldung anzuzeigen, wenn ein Formularfeld mit einem falschen Wert ausgefüllt ist.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event) — Die Farbe ändert sich nur, wenn der Button doppelt geklickt wird.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`mouseout`](/de/docs/Web/API/Element/mouseout_event) — Die Farbe ändert sich, wenn der Mauszeiger über dem Button schwebt oder wenn der Zeiger den Button wieder verlässt.

Einige Ereignisse, wie `click`, sind auf nahezu jedem Element verfügbar. Andere sind spezifischer und nur in bestimmten Situationen nützlich: zum Beispiel ist das [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignis nur auf Elementen verfügbar, die Play-Funktionalität haben, wie zum Beispiel {{htmlelement("video")}}.

### Entfernen von Listeners

Wenn Sie einen Ereignislistener mit `addEventListener()` hinzugefügt haben, können Sie ihn wieder entfernen, wenn gewünscht. Der häufigste Weg, dies zu tun, ist die Verwendung der [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)-Methode. Zum Beispiel würde die folgende Zeile den `click`-Ereignishandler entfernen, den wir zuvor gesehen haben:

```js
btn.removeEventListener("click", changeBackground);
```

Für einfache, kleine Programme ist es nicht notwendig, alte, nicht genutzte Ereignishandler zu bereinigen, aber für größere, komplexere Programme kann es die Effizienz verbessern.
Auch ermöglicht Ihnen die Fähigkeit, Ereignishandler zu entfernen, denselben Button in verschiedenen Situationen unterschiedliche Aktionen auszuführen: alles, was Sie tun müssen, ist, Handler hinzuzufügen oder zu entfernen.

### Hinzufügen mehrerer Listener für ein einziges Ereignis

Durch mehr als einen Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mit verschiedenen Handlern können Sie mehrere Handler-Funktionen als Reaktion auf ein einziges Ereignis ausführen lassen:

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

Beide Funktionen würden nun ausgeführt, wenn das Element geklickt wird.

## Andere Mechanismen für Ereignislistener

Wir empfehlen, `addEventListener()` zu verwenden, um Ereignishandler zu registrieren. Es ist die leistungsfähigste Methode und skaliert am besten mit komplexeren Programmen. Es gibt jedoch zwei andere Möglichkeiten, Ereignishandler zu registrieren, die Sie vielleicht sehen werden: _Ereignishandler-Eigenschaften_ und _inline Ereignishandler_.

### Ereignishandler-Eigenschaften

Objekte (wie Buttons), die Ereignisse auslösen können, haben normalerweise auch Eigenschaften, deren Name `on`, gefolgt vom Namen eines Ereignisses, enthält. Zum Beispiel haben Elemente eine Eigenschaft `onclick`.
Dies wird als **Ereignishandler-Eigenschaft** bezeichnet. Um auf das Ereignis zu hören, können Sie die Handler-Funktion der Eigenschaft zuweisen.

Zum Beispiel könnten wir das zufällige Farbbeispiel so umschreiben:

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

Ereignishandler-Eigenschaften haben Nachteile im Vergleich zu `addEventListener()`. Einer der bedeutendsten ist, dass Sie nicht [mehr als einen Listener für ein einzelnes Ereignis hinzufügen](#hinzufügen_mehrerer_listener_für_ein_einziges_ereignis) können. Das folgende Muster funktioniert nicht, da jeder nachfolgende Versuch, den Eigenschaftswert zu setzen, frühere überschreibt:

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

Die früheste Methode, Ereignishandler im Web zu registrieren, beinhaltete [_Ereignishandler-HTML-Attribute_](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) (oder _Inline-Ereignishandler_) wie das oben gezeigte — der Attributwert enthält den JavaScript-Code, den Sie ausführen möchten, wenn das Ereignis eintritt.
Das obige Beispiel ruft eine Funktion auf, die in einem {{htmlelement("script")}}-Element auf derselben Seite definiert ist, aber Sie könnten auch JavaScript direkt innerhalb des Attributs einfügen, zum Beispiel:

```html example-bad
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

Sie können HTML-Attributäquivalente für viele der Ereignishandler-Eigenschaften finden; jedoch sollten Sie diese nicht verwenden — sie werden als schlechtes Vorgehen angesehen.
Es mag einfach erscheinen, ein Ereignishandler-Attribut zu verwenden, wenn Sie etwas wirklich Schnelles machen, aber sie werden schnell unüberschaubar und ineffizient.

Zunächst ist es keine gute Idee, Ihr HTML und Ihr JavaScript zu vermischen, da es schwer zu lesen wird. Es ist eine gute Vorgehensweise, Ihr JavaScript getrennt zu halten, und wenn es in einer separaten Datei ist, können Sie es auf mehrere HTML-Dokumente anwenden.

Selbst in einer einzelnen Datei sind Inline-Ereignishandler keine gute Idee.
Ein Button ist OK, aber was, wenn Sie 100 Buttons hätten? Sie müssten 100 Attribute in die Datei einfügen; es würde schnell zu einem Wartungsalptraum werden.
Mit JavaScript könnten Sie problemlos eine Ereignis-Handler-Funktion allen Buttons auf der Seite hinzufügen, egal wie viele es gibt, indem Sie so etwas wie dies verwenden:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}
```

Schließlich werden viele übliche Serverkonfigurationen Inline-JavaScript als Sicherheitsmaßnahme nicht zulassen.

**Sie sollten niemals die HTML-Ereignishandler-Attribute verwenden** — diese sind veraltet, und ihre Verwendung ist schlechtes Vorgehen.

## Ereignisobjekte

Manchmal sehen Sie in einer Ereignishandlerfunktion einen Parameter, der mit einem Namen wie `event`, `evt` oder `e` angegeben ist.
Dies wird das **Ereignisobjekt** genannt, und es wird automatisch an Ereignishandler weitergegeben, um zusätzliche Funktionen und Informationen bereitzustellen.
Zum Beispiel lassen Sie uns unser zufälliges Farbbeispiel umschreiben, um ein Ereignisobjekt einzuschließen:

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

Hier können Sie sehen, dass wir ein Ereignisobjekt, **e**, in die Funktion einfügen und in der Funktion einen Hintergrundfarbenstil auf `e.target` setzen — das ist der Button selbst.
Die `target`-Eigenschaft des Ereignisobjekts ist immer ein Verweis auf das Element, auf dem das Ereignis auftrat.
In diesem Beispiel setzen wir also eine zufällige Hintergrundfarbe auf den Button, nicht auf die Seite.

> [!NOTE]
> Sie können für das Ereignisobjekt jeden Namen verwenden, den Sie mögen — Sie müssen nur einen Namen wählen, den Sie innerhalb der Ereignishandlerfunktion referenzieren können.
> `e`, `evt` und `event` werden häufig von Entwicklern verwendet, da sie kurz und leicht zu merken sind.
> Es ist immer gut, konsistent zu sein — mit sich selbst, und wenn möglich mit anderen.

### Zusätzliche Eigenschaften von Ereignisobjekten

Die meisten Ereignisobjekte haben eine standardmäßige Reihe von Eigenschaften und Methoden, die auf dem Ereignisobjekt verfügbar sind; siehe die [`Event`](/de/docs/Web/API/Event)-Objekt-Referenz für eine vollständige Liste.

Einige Ereignisobjekte fügen zusätzliche Eigenschaften hinzu, die für diesen bestimmten Ereignistyp relevant sind. Zum Beispiel wird das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis ausgelöst, wenn der Benutzer eine Taste drückt. Sein Ereignisobjekt ist ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent), welches ein spezielles `Event`-Objekt mit einer `key`-Eigenschaft ist, die Ihnen sagt, welche Taste gedrückt wurde:

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

Manchmal stoßen Sie auf eine Situation, in der Sie verhindern möchten, dass ein Ereignis das tut, was es standardmäßig tun würde.
Das häufigste Beispiel ist das eines Webformulars, zum Beispiel ein benutzerdefiniertes Registrierungsformular.
Wenn Sie die Details ausfüllen und auf den Absenden-Button klicken, ist das natürliche Verhalten, dass die Daten zu einer bestimmten Seite auf dem Server zur Verarbeitung gesendet werden und der Browser auf eine Art "Erfolgsmeldung" weitergeleitet wird (oder auf dieselbe Seite, wenn keine andere angegeben ist).

Das Problem tritt auf, wenn der Benutzer die Daten nicht korrekt eingereicht hat — als Entwickler möchten Sie das Absenden an den Server verhindern und eine Fehlermeldung anzeigen, die erklärt, was falsch ist und was getan werden muss, um die Dinge richtig zu stellen.
Einige Browser unterstützen automatische Formularvalidierungsfunktionen, aber da viele dies nicht tun, wird empfohlen, sich nicht darauf zu verlassen und eigene Validierungsprüfungen zu implementieren.
Schauen wir uns ein Beispiel an.

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

Nun ein wenig JavaScript — hier implementieren wir eine grundlegende Prüfung innerhalb eines Handlers für das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis (das submit-Ereignis wird bei der Übermittlung auf ein Formular ausgelöst), welches prüft, ob die Textfelder leer sind.
Sind diese leer, rufen wir die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Funktion auf dem Ereignisobjekt auf — was die Formularübermittlung stoppt — und zeigen dann eine Fehlermeldung im Absatz unter unserem Formular an, die dem Benutzer sagt, was falsch ist:

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

Offensichtlich ist dies eine ziemlich schwache Formularvalidierung — sie würde den Benutzer nicht davon abhalten, das Formular mit Leerzeichen oder Zahlen in den Feldern zu validieren, zum Beispiel — aber es ist okay für Beispielsweise.

Sie können das vollständige Beispiel [live in Aktion sehen](https://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html) — probieren Sie es dort aus. Den vollständigen Quellcode finden Sie in [preventdefault-validation.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/preventdefault-validation.html).

## Es sind nicht nur Webseiten

Ereignisse sind nicht einzigartig für JavaScript — die meisten Programmiersprachen haben ein irgendeine Art von Ereignismodell, und die Art und Weise, wie das Modell funktioniert, unterscheidet sich oft von der Art und Weise, wie es in JavaScript funktioniert.
Tatsächlich unterscheidet sich das Ereignismodell in JavaScript für Webseiten vom Ereignismodell für JavaScript, wie es in anderen Umgebungen verwendet wird.

Zum Beispiel ist [Node.js](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) eine sehr beliebte JavaScript-Laufzeitumgebung, die es Entwicklern ermöglicht, mit JavaScript Netzwerk- und serverseitige Anwendungen zu erstellen.
Das [Node.js-Ereignismodell](https://nodejs.org/api/events.html) basiert auf Listeners, um Ereignisse abzuhören, und Emitters, um periodisch Ereignisse auszulösen — es klingt nicht so anders, aber der Code ist ziemlich anders und verwendet Funktionen wie `on()`, um einen Ereignislistener zu registrieren, und `once()`, um einen Ereignislistener zu registrieren, der nach einmaliger Ausführung deaktiviert wird.
Die Node.js- [HTTP-Connect-Ereignis-Dokumentation](https://nodejs.org/api/http.html#event-connect) bietet ein gutes Beispiel.

Sie können JavaScript auch verwenden, um browserübergreifende Add-Ons zu bauen — Browserfunktions-Erweiterungen — mit einer Technologie namens [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions).
Das Ereignismodell ist ähnlich zum Web-Ereignismodell, aber etwas anders — Eigenschaften des Ereignislisteners werden in {{Glossary("camel_case", "camelCase")}} geschrieben (zum Beispiel `onMessage` statt `onmessage`) und müssen mit der `addListener`-Funktion kombiniert werden.
Sehen Sie sich die Seite [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples) für ein Beispiel an.

Sie müssen nichts über solche anderen Umgebungen an diesem Punkt in Ihrem Lernprozess verstehen; wir wollten nur klarstellen, dass sich Ereignisse in verschiedenen Programmierumgebungen unterscheiden können.

## Zusammenfassung

In diesem Kapitel haben wir gelernt, was Ereignisse sind, wie man auf Ereignisse hört und wie man auf sie reagiert.

Sie haben mittlerweile gesehen, dass Elemente auf einer Webseite innerhalb anderer Elemente verschachtelt sein können. Zum Beispiel haben wir im Beispiel [Verhindern des Standardverhaltens](#verhindern_des_standardverhaltens) einige Textfelder, die sich innerhalb von {{htmlelement("div")}}-Elementen befinden, die wiederum innerhalb eines {{htmlelement("form")}}-Elements platziert sind. Was passiert, wenn ein Klick-Ereignislistener an das `<form>`-Element angehängt ist und der Benutzer in eines der Textfelder klickt? Die zugehörige Ereignishandlerfunktion wird immer noch über einen Prozess namens _Event Bubbling_ ausgelöst, welcher in der nächsten Lektion behandelt wird.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

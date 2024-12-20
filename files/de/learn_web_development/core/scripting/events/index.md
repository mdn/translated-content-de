---
title: Einführung in Ereignisse
slug: Learn_web_development/Core/Scripting/Events
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

Ereignisse sind Vorgänge, die im System, das Sie programmieren, passieren und über die das System Sie informiert, damit Ihr Code darauf reagieren kann. Wenn beispielsweise der Benutzer auf einer Webseite auf einen Button klickt, könnten Sie darauf reagieren, indem Sie ein Informationsfenster anzeigen. In diesem Artikel besprechen wir einige wichtige Konzepte rund um Ereignisse und schauen uns die Grundlagen an, wie sie in Browsern funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen aus vorherigen Lektionen.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Ereignisse sind — ein Signal, das vom Browser ausgelöst wird, wenn etwas Bedeutendes passiert und auf das der Entwickler mit Code reagieren kann.</li>
          <li>Einrichten von Ereignis-Handlern mit <code>addEventListener()</code> (und <code>removeEventListener()</code>) und Ereigniseigenschaften.</li>
          <li>Inline-Ereignis-Handler-Attribute und warum Sie diese nicht verwenden sollten.</li>
          <li>Ereignisobjekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Ereignis?

Ereignisse sind Vorgänge, die im System, das Sie programmieren, passieren — das System erzeugt (oder "löst") ein Signal, wenn ein Ereignis eintritt, und bietet einen Mechanismus, durch den automatisch eine Aktion ausgeführt werden kann, wenn das Ereignis eintritt (d.h. ein Code ausgeführt wird). Ereignisse werden im Browserfenster ausgelöst und sind oft mit einem bestimmten Element verknüpft, das sich darin befindet. Dies könnte ein einzelnes Element, eine Gruppe von Elementen, das im aktuellen Tab geladene HTML-Dokument oder das gesamte Browserfenster sein. Es gibt viele verschiedene Arten von Ereignissen, die auftreten können.

Beispiele:

- Der Benutzer wählt oder klickt auf ein Element oder bewegt den Mauszeiger darüber.
- Der Benutzer drückt eine Taste auf der Tastatur.
- Der Benutzer ändert die Größe des Browserfensters oder schließt es.
- Eine Webseite wird geladen.
- Ein Formular wird übermittelt.
- Ein Video wird abgespielt, pausiert oder endet.
- Ein Fehler tritt auf.

Sie können daraus (und durch einen Blick auf den MDN [Ereignisreferenz](/de/docs/Web/Events)) entnehmen, dass es **viele** Ereignisse gibt, die ausgelöst werden können.

Um auf ein Ereignis zu reagieren, verknüpfen Sie einen **Ereignis-Handler** damit. Dies ist ein Codeblock (in der Regel eine von Ihnen als Programmierer erstellte JavaScript-Funktion), die ausgeführt wird, wenn das Ereignis ausgelöst wird. Wenn ein solcher Codeblock definiert ist, um auf ein Ereignis zu reagieren, sagen wir, dass wir einen **Ereignis-Handler registrieren**. Hinweis: Ereignis-Handler werden manchmal auch als **Ereignis-Listener** bezeichnet — sie sind für unsere Zwecke fast austauschbar, obwohl sie technisch gesehen zusammenarbeiten. Der Listener lauscht darauf, dass das Ereignis eintritt, und der Handler ist der Code, der daraufhin ausgeführt wird.

> [!NOTE]
> Webereignisse sind nicht Teil der Kern-JavaScript-Sprache — sie sind Teil der in den Browser integrierten APIs definiert.

### Ein Beispiel: Umgang mit einem Klickereignis

Im folgenden Beispiel haben wir eine einzige {{htmlelement("button")}} auf der Seite:

```html
<button>Change color</button>
```

```css hidden
button {
  margin: 10px;
}
```

Dann haben wir etwas JavaScript. Wir werden uns das im nächsten Abschnitt genauer ansehen, aber vorerst können wir einfach sagen: Es fügt dem Button einen Ereignis-Handler für das `"click"`-Ereignis hinzu, und der Handler reagiert auf das Ereignis, indem er die Hintergrundfarbe der Seite auf eine zufällige Farbe setzt:

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

## Verwendung von addEventListener()

Wie wir im letzten Beispiel gesehen haben, haben Objekte, die Ereignisse auslösen können, eine [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode, und dies ist der empfohlene Mechanismus zum Hinzufügen von Ereignis-Handlern.

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

Das HTML {{HTMLElement("button")}}-Element löst ein Ereignis aus, wenn der Benutzer auf den Button klickt. Es definiert also eine `addEventListener()`-Funktion, die wir hier aufrufen. Wir übergeben zwei Parameter:

- den String `"click"`, um anzugeben, dass wir auf das Klickereignis lauschen wollen. Buttons können viele andere Ereignisse auslösen, wie z.B. [`"mouseover"`](/de/docs/Web/API/Element/mouseover_event), wenn der Benutzer die Maus über den Button bewegt, oder [`"keydown"`](/de/docs/Web/API/Element/keydown_event), wenn der Benutzer eine Taste drückt und der Button fokussiert ist.
- eine Funktion, die aufgerufen wird, wenn das Ereignis eintritt. In unserem Fall generiert die Funktion eine zufällige RGB-Farbe und setzt die [`background-color`](/de/docs/Web/CSS/background-color) der Seite [`<body>`](/de/docs/Web/HTML/Element/body) auf diese Farbe.

Es ist in Ordnung, die Handlerfunktion als separate benannte Funktion zu definieren, so:

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

Erstellen Sie zunächst eine lokale Kopie von [random-color-addeventlistener.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-addeventlistener.html) und öffnen Sie diese in Ihrem Browser. Es ist lediglich eine Kopie des einfachen Zufallsfarbenbeispiels, mit dem wir bereits gespielt haben. Ändern Sie nun `click` zu den folgenden unterschiedlichen Werten nacheinander und beobachten Sie die Ergebnisse im Beispiel:

- [`focus`](/de/docs/Web/API/Element/focus_event) und [`blur`](/de/docs/Web/API/Element/blur_event) — Die Farbe ändert sich, wenn der Button fokussiert und unfokussiert wird; versuchen Sie, die Tab-Taste zu drücken, um den Button zu fokussieren und erneut, um den Fokus vom Button zu entfernen.
  Diese werden oft verwendet, um Informationen zu zeigen, wenn Formularfelder fokussiert werden, oder eine Fehlermeldung anzuzeigen, wenn ein Formularfeld mit einem falschen Wert gefüllt ist.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event) — Die Farbe ändert sich nur, wenn der Button doppelt angeklickt wird.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`mouseout`](/de/docs/Web/API/Element/mouseout_event) — Die Farbe ändert sich, wenn der Mauszeiger über den Button schwebt oder wenn der Zeiger den Button verlässt.

Einige Ereignisse, wie `click`, sind auf nahezu jedem Element verfügbar. Andere sind spezifischer und nur in bestimmten Situationen nützlich: zum Beispiel ist das [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignis nur auf einigen Elementen verfügbar, wie z.B. {{htmlelement("video")}}.

### Entfernen von Listeners

Wenn Sie einen Ereignis-Handler mit `addEventListener()` hinzugefügt haben, können Sie ihn wieder entfernen, indem Sie die [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)-Methode verwenden. Zum Beispiel würde dies den `changeBackground()`-Ereignis-Handler entfernen:

```js
btn.removeEventListener("click", changeBackground);
```

Ereignis-Handler können auch entfernt werden, indem ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) an [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) übergeben wird und dann später [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller aufgerufen wird, dem das `AbortSignal` gehört. Zum Beispiel, um einen Ereignis-Handler hinzuzufügen, den wir mit einem `AbortSignal` entfernen können:

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

Der oben erstellte Ereignis-Handler kann dann so entfernt werden:

```js
controller.abort(); // removes any/all event handlers associated with this controller
```

Für einfache, kleine Programme ist es nicht notwendig, alte, ungenutzte Ereignis-Handler aufzuräumen, aber für größere, komplexere Programme kann es die Effizienz verbessern. Auch ermöglicht das Entfernen von Ereignis-Handlern Ihnen, dass derselbe Button in verschiedenen Umständen unterschiedliche Aktionen ausführt: alles, was Sie tun müssen, ist, Handler hinzuzufügen oder zu entfernen.

### Hinzufügen mehrerer Listener für ein einziges Ereignis

Indem Sie mehr als einen Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mit verschiedenen Handlern machen, können Sie mehrere Handler für ein einzelnes Ereignis haben:

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

Jetzt würden beide Funktionen ausgeführt, wenn das Element geklickt wird.

## Andere Mechanismen für Ereignis-Listener

Wir empfehlen, `addEventListener()` zu verwenden, um Ereignis-Handler zu registrieren. Es ist die leistungsstärkste Methode und skaliert am besten mit komplexeren Programmen. Es gibt jedoch zwei andere Möglichkeiten, Ereignis-Handler zu registrieren, die Sie eventuell sehen werden: _Ereignis-Handler-Eigenschaften_ und _Inline-Ereignis-Handler_.

### Ereignis-Handler-Eigenschaften

Objekte (wie Buttons), die Ereignisse auslösen können, haben normalerweise auch Eigenschaften, deren Name mit `on` gefolgt vom Ereignisnamen beginnt. Zum Beispiel haben Elemente eine Eigenschaft `onclick`. Dies wird als _Ereignis-Handler-Eigenschaft_ bezeichnet. Um auf das Ereignis zu lauschen, können Sie die Handler-Funktion der Eigenschaft zuweisen.

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

Mit Ereignis-Handler-Eigenschaften können Sie nicht mehr als einen Handler für ein einzelnes Ereignis hinzufügen. Zum Beispiel können Sie mehrfach `addEventListener('click', handler)` auf einem Element aufrufen, wobei verschiedene Funktionen im zweiten Argument angegeben werden:

```js
element.addEventListener("click", function1);
element.addEventListener("click", function2);
```

Dies ist mit Ereignis-Handler-Eigenschaften nicht möglich, da alle nachfolgenden Versuche, die Eigenschaft zu setzen, frühere überschreiben:

```js
element.onclick = function1;
element.onclick = function2;
```

### Inline-Ereignis-Handler — verwenden Sie diese nicht

Kann sein, dass Ihnen in Ihrem Code folgendes Muster begegnet:

```html
<button onclick="bgChange()">Press me</button>
```

```js
function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
```

Die früheste Methode, die gefunden wurde, um Ereignis-Handler im Web zu registrieren, bestand in [_Ereignis-Handler-HTML-Attributen_](/de/docs/Web/HTML/Attributes#event_handler_attributes) (oder _Inline-Ereignis-Handlern_) wie dem oben gezeigten — der Attributwert ist buchstäblich der JavaScript-Code, den Sie ausführen möchten, wenn das Ereignis eintritt. Das obige Beispiel ruft eine Funktion auf, die in einem {{htmlelement("script")}}-Element auf derselben Seite definiert ist, aber Sie könnten auch JavaScript direkt im Attribut einsetzen, zum Beispiel:

```html
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

Für viele der Ereignis-Handler-Eigenschaften gibt es HTML-Attribut-Äquivalente; allerdings sollten Sie diese nicht verwenden — sie gelten als schlechte Praxis. Es mag einfach erscheinen, ein Ereignis-Handler-Attribut zu verwenden, wenn Sie etwas sehr Schnelllebiges machen, aber sie werden schnell unübersichtlich und ineffizient.

Zum einen ist es keine gute Idee, HTML und JavaScript zu vermischen, da es schwer zu lesen wird. Ihren JavaScript-Code separate zu halten, ist eine gute Praxis, und wenn er in einer separaten Datei ist, können Sie ihn auf mehrere HTML-Dokumente anwenden.

Selbst in einer einzelnen Datei sind Inline-Ereignis-Handler keine gute Idee. Ein Button ist in Ordnung, aber was, wenn Sie 100 Buttons haben? Sie müssten 100 Attribute zur Datei hinzufügen; dies würde schnell zu einem Wartungsalbtraum. Mit JavaScript könnten Sie ganz einfach eine Ereignis-Handler-Funktion auf alle Buttons auf der Seite anwenden, egal wie viele es sind, indem Sie etwas wie dies verwenden:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}
```

Viele gängige Serverkonfigurationen verbieten aus Sicherheitsgründen auch Inline-JavaScript.

**Sie sollten niemals die HTML-Ereignis-Handler-Attribute verwenden** — diese sind veraltet, und ihre Verwendung ist schlechte Praxis.

## Ereignisobjekte

Manchmal sehen Sie innerhalb einer Ereignis-Handler-Funktion einen Parameter mit einem Namen wie `event`, `evt`, oder `e`. Dies wird als **Ereignisobjekt** bezeichnet, und es wird automatisch an Ereignis-Handler übergeben, um zusätzliche Funktionen und Informationen bereitzustellen. Zum Beispiel: Lassen Sie uns unser Zufallsfarbenbeispiel erneut leicht überarbeiten:

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
> Sie können den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/random-color-eventobject.html) für dieses Beispiel auf GitHub finden (auch [sehen Sie es live ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)).

Hier sehen Sie, dass wir ein Ereignisobjekt, **e**, in der Funktion einbeziehen, und in der Funktion eine Hintergrundfarbstil auf `e.target` gesetzt wird — das ist der Button selbst. Die `target`-Eigenschaft des Ereignisobjekts ist immer eine Referenz auf das Element, auf dem das Ereignis eingetreten ist. In diesem Beispiel setzen wir also eine zufällige Hintergrundfarbe auf den Button, nicht auf die Seite.

> [!NOTE]
> Sie können jeden gewünschten Namen für das Ereignisobjekt verwenden — Sie müssen lediglich einen Namen wählen, mit dem Sie es innerhalb der Ereignis-Handler-Funktion referenzieren können. `e`/`evt`/`event` wird von Entwicklern am häufigsten verwendet, da sie kurz und leicht zu merken sind. Es ist immer gut, konsistent zu sein — mit Ihnen selbst und, wenn möglich, mit anderen.

### Zusätzliche Eigenschaften von Ereignisobjekten

Die meisten Ereignisobjekte haben einen Standardsatz von Eigenschaften und Methoden, die auf dem Ereignisobjekt verfügbar sind; siehe die [`Event`](/de/docs/Web/API/Event)-Objektreferenz für eine vollständige Liste.

Einige Ereignisobjekte fügen zusätzliche Eigenschaften hinzu, die für diesen bestimmten Ereignistyp relevant sind. Zum Beispiel feuert das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis, wenn der Benutzer eine Taste drückt. Sein Ereignisobjekt ist ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent), welches ein spezialisiertes `Event`-Objekt mit einer `key`-Eigenschaft ist, die Ihnen sagt, welche Taste gedrückt wurde:

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

Probieren Sie aus, in das Textfeld zu tippen und schauen Sie sich die Ausgabe an:

{{EmbedLiveSample("Extra_properties_of_event_objects", 100, 100)}}

## Verhindern des Standardverhaltens

Manchmal werden Sie auf eine Situation stoßen, in der Sie verhindern möchten, dass ein Ereignis sein Standardverhalten ausführt. Das häufigste Beispiel ist das eines Webformulars, beispielsweise ein benutzerdefiniertes Registrierungsformular. Wenn Sie die Daten eingeben und auf den Absenden-Button klicken, besteht das natürliche Verhalten darin, dass die Daten zur Verarbeitung an eine bestimmte Seite auf dem Server gesendet werden und der Browser zu einer Art "Erfolgsmeldung"-Seite umgeleitet wird (oder dieselbe Seite, wenn keine andere angegeben ist).

Das Problem entsteht, wenn der Benutzer die Daten nicht korrekt übermittelt hat — als Entwickler möchten Sie die Übermittlung an den Server verhindern und eine Fehlermeldung anzeigen, die erklärt, was falsch ist und was getan werden muss, um es richtigzustellen. Einige Browser unterstützen automatische Funktionen zur Formularvalidierung, aber da viele dies nicht tun, wird empfohlen, sich nicht auf diese zu verlassen und Ihre eigenen Validierungsprüfungen zu implementieren. Schauen wir uns ein Beispiel an.

Zuerst ein einfaches HTML-Formular, das Sie auffordert, Ihren Vor- und Nachnamen einzugeben:

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

Nun etwas JavaScript — hier implementieren wir eine sehr einfache Überprüfung innerhalb eines Handlers für das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis (das Submit-Ereignis wird bei einem Formular ausgelöst, wenn es übermittelt wird), das testet, ob die Textfelder leer sind. Wenn dies der Fall ist, rufen wir die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Funktion auf dem Ereignisobjekt auf — was die Formularübermittlung stoppt — und zeigen dann eine Fehlermeldung im Absatz unter unserem Formular an, um dem Benutzer zu erklären, was falsch ist:

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

Offensichtlich ist dies eine ziemlich schwache Formularvalidierung — es würde nicht verhindern, dass der Benutzer das Formular mit Leerzeichen oder Zahlen in den Feldern validiert, zum Beispiel — aber es ist für Beispielzwecke in Ordnung. Die Ausgabe ist wie folgt:

{{ EmbedLiveSample('Preventing_default_behavior', '100%', 180, "", "") }}

> [!NOTE]
> Den vollständigen Quellcode finden Sie unter [preventdefault-validation.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/preventdefault-validation.html) (sehen Sie es auch [hier live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html)).

## Es sind nicht nur Webseiten

Ereignisse sind nicht einzigartig in JavaScript — die meisten Programmiersprachen haben irgendeine Art von Ereignismodell, und die Art und Weise, wie das Modell funktioniert, unterscheidet sich oft von der Art JavaScript. Tatsächlich unterscheidet sich das Ereignismodell in JavaScript für Webseiten vom Ereignismodell für JavaScript, wie es in anderen Umgebungen verwendet wird.

Zum Beispiel ist [Node.js](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) eine sehr beliebte JavaScript-Laufzeitumgebung, die es Entwicklern ermöglicht, JavaScript zum Erstellen von Netzwerk- und serverseitigen Anwendungen zu verwenden. Das [Node.js-Ereignismodell](https://nodejs.org/api/events.html) basiert auf Listeners (die auf Ereignisse lauschen) und Emittern (die regelmäßig Ereignisse auslösen) — das klingt nicht so anders, aber der Code ist ganz anders und verwendet Funktionen wie `on()`, um einen Ereignis-Listener zu registrieren, und `once()`, um einen Event-Listener zu registrieren, der sich nach einmaligem Ausführen abmeldet. Die [HTTP connect event docs](https://nodejs.org/api/http.html#event-connect) bieten ein gutes Beispiel.

Sie können auch JavaScript verwenden, um plattformübergreifende Add-ons — Funktionserweiterungen für Browser — mit einer Technologie namens [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) zu erstellen. Das Ereignismodell ist ähnlich dem Web-Ereignismodell, aber ein bisschen anders — die Eigenschaften der Ereignis-Listener werden in {{Glossary("camelcase", "camel case")}} geschrieben (wie `onMessage` anstelle von `onmessage`), und müssen mit der `addListener`-Funktion kombiniert werden. Siehe die [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples)-Seite für ein Beispiel.

Sie müssen zu diesem Zeitpunkt Ihres Lernens nichts über andere derartige Umgebungen verstehen; wir wollten nur klarstellen, dass Ereignisse sich in unterschiedlichen Programmierumgebungen unterscheiden können.

## Zusammenfassung

In diesem Kapitel haben wir gelernt, was Ereignisse sind, wie man auf Ereignisse lauscht und wie man auf sie reagiert.

Sie haben inzwischen gesehen, dass Elemente in einer Webseite innerhalb anderer Elemente verschachtelt sein können. Zum Beispiel haben wir im Beispiel [Verhindern des Standardverhaltens](#verhindern_des_standardverhaltens) einige Textfelder, die in {{htmlelement("div")}}-Elementen platziert sind, die wiederum in einem {{htmlelement("form")}}-Element platziert sind. Was passiert, wenn ein Klickereignis-Listener an das `<form>`-Element angehängt wird und der Benutzer in eines der Textfelder klickt? Die zugehörige Ereignis-Handler-Funktion wird immer noch über einen Prozess namens _Ereignis-Bubbling_ ausgelöst, welches im nächsten Kapitel behandelt wird.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Return_values","Learn_web_development/Core/Scripting/Event_bubbling", "Learn_web_development/Core/Scripting")}}

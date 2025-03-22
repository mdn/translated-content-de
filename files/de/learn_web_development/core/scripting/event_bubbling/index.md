---
title: Ereignis-Bubbling
slug: Learn_web_development/Core/Scripting/Event_bubbling
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

Wir haben gesehen, dass eine Webseite aus _Elementen_ besteht — Überschriften, Textabschnitte, Bilder, Schaltflächen usw. — und dass Sie auf Ereignisse, die bei diesen Elementen auftreten, hören können. Beispielsweise könnten Sie einen Listener zu einer Schaltfläche hinzufügen, und dieser wird ausgeführt, wenn der Benutzer auf die Schaltfläche klickt.

Wir haben auch gesehen, dass diese Elemente ineinander _verschachtelt_ werden können: Zum Beispiel könnte ein {{htmlelement("button")}}-Element in einem {{htmlelement("div")}}-Element platziert werden. In diesem Fall würden wir das `<div>`-Element ein _Elternelement_ nennen und das `<button>`-Element ein _Kindelement_.

In diesem Kapitel betrachten wir das **Ereignis-Bubbling** — das passiert, wenn Sie einen Ereignis-Listener zu einem Elternelement hinzufügen und der Benutzer auf das Kindelement klickt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und die <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, die in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Ereignisdelegation, erreicht durch Ereignis-Bubbling oder Ereignis-Capturing.</li>
          <li>Stoppen der Ereignisdelegation mit <code>stopPropagation()</code>.</li>
          <li>Zugriff auf Ereignisziele aus dem Ereignisobjekt.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Einführung in das Ereignis-Bubbling

Lassen Sie uns das Ereignis-Bubbling anhand eines Beispiels einführen und definieren.

### Einen Listener auf ein Elternelement setzen

Betrachten Sie eine Webseite wie diese:

```html
<div id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>
```

Hier befindet sich die Schaltfläche innerhalb eines anderen Elements, eines {{HTMLElement("div")}}-Elements. Wir sagen, dass das `<div>`-Element hier das **Elternteil** des Elements ist, das es enthält. Was passiert, wenn wir einen Klick-Ereignis-Handler zum Elternteil hinzufügen und dann auf die Schaltfläche klicken?

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Einen Listener auf ein Elternelement setzen', '100%', 200, "", "") }}

Sie werden sehen, dass das Elternelement ein Klickereignis auslöst, wenn der Benutzer auf die Schaltfläche klickt:

```plain
You clicked on a DIV element
```

Das ergibt Sinn: Die Schaltfläche befindet sich innerhalb des `<div>`-Elements. Wenn Sie auf die Schaltfläche klicken, klicken Sie implizit auch auf das Element, in dem es sich befindet.

### Bubbling-Beispiel

Was passiert, wenn wir Ereignis-Listener zur Schaltfläche _und_ zum Elternelement hinzufügen?

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Lassen Sie uns versuchen, Klick-Ereignis-Handler zur Schaltfläche, zu ihrem Elternteil (dem `<div>`-Element) und zum {{HTMLElement("body")}}-Element hinzuzufügen, das beide Elemente enthält:

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Bubbling-Beispiel', '100%', 200, "", "") }}

Sie werden sehen, dass alle drei Elemente ein Klick-Ereignis auslösen, wenn der Benutzer auf die Schaltfläche klickt:

```plain
You clicked on a BUTTON element
You clicked on a DIV element
You clicked on a BODY element
```

In diesem Fall:

- wird zuerst das Klickereignis auf der Schaltfläche ausgelöst.
- gefolgt von dem Klickereignis auf ihrem Elternteil (dem `<div>`-Element).
- gefolgt von dem Klickereignis auf den Elternteil des `<div>`-Elements (dem `<body>`-Element).

Wir beschreiben dies, indem wir sagen, dass das Ereignis vom innersten angeklickten Element **aufsteigt**.

Diese Funktion kann nützlich sein und auch unerwartete Probleme verursachen. In den nächsten Abschnitten werden wir ein Problem sehen, das es verursacht, und die Lösung finden.

### Videoplayer-Beispiel

In diesem Beispiel enthält unsere Seite ein Video, das zunächst verborgen ist, und eine Schaltfläche mit der Aufschrift "Video anzeigen". Wir wollen die folgende Interaktion:

- Wenn der Benutzer auf die Schaltfläche "Video anzeigen" klickt, wird das Feld mit dem Video angezeigt, das Video jedoch noch nicht abgespielt.
- Wenn der Benutzer auf das Video klickt, wird das Video abgespielt.
- Wenn der Benutzer irgendwo außerhalb des Videos in dem Feld klickt, wird das Feld ausgeblendet.

Der HTML-Code sieht folgendermaßen aus:

```html
<button>Display video</button>

<div class="hidden">
  <video>
    <source
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
      type="video/webm" />
    <p>
      Your browser doesn't support HTML video. Here is a
      <a href="rabbit320.mp4">link to the video</a> instead.
    </p>
  </video>
</div>
```

Er enthält:

- ein `<button>`-Element.
- ein `<div>`-Element, das anfänglich das Attribut `class="hidden"` hat.
- ein `<video>`-Element, das innerhalb des `<div>`-Elements verschachtelt ist.

Wir verwenden CSS, um Elemente mit gesetzter `"hidden"`-Klasse auszublenden.

```css hidden
div {
  width: 100%;
  height: 100%;
  background-color: #eee;
}

.hidden {
  display: none;
}

div video {
  padding: 40px;
  display: block;
  width: 400px;
  margin: 40px auto;
}
```

Der JavaScript-Code sieht folgendermaßen aus:

```js
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", () => video.play());
box.addEventListener("click", () => box.classList.add("hidden"));
```

Dies fügt drei `'click'`-Ereignislistener hinzu:

- einen auf dem `<button>`, der das `<div>`, das das `<video>` enthält, anzeigt.
- einen auf dem `<video>`, der das Video abspielt.
- einen auf dem `<div>`, der das Video ausblendet.

Lassen Sie uns sehen, wie das funktioniert:

{{ EmbedLiveSample('Videoplayer-Beispiel', '100%', 500) }}

Sie sollten sehen, dass, wenn Sie auf die Schaltfläche klicken, das Feld und das darin enthaltene Video angezeigt werden. Aber dann, wenn Sie auf das Video klicken, beginnt das Video zu spielen, aber das Feld wird wieder ausgeblendet!

Das Video befindet sich innerhalb des `<div>` — es ist Teil davon — also löst das Klicken auf das Video _beide_ Ereignis-Handler aus, was dieses Verhalten verursacht.

### Das Problem mit `stopPropagation()` beheben

Wie wir im letzten Abschnitt gesehen haben, kann das Ereignis-Bubbling manchmal Probleme verursachen, aber es gibt eine Möglichkeit, es zu verhindern.
Das [`Event`](/de/docs/Web/API/Event)-Objekt hat eine Funktion namens [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), die, wenn sie in einem Ereignis-Handler aufgerufen wird, das Aufsteigen des Ereignisses zu anderen Elementen verhindert.

Wir können unser aktuelles Problem beheben, indem wir den JavaScript-Code so ändern:

```js
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));

video.addEventListener("click", (event) => {
  event.stopPropagation();
  video.play();
});

box.addEventListener("click", () => box.classList.add("hidden"));
```

Alles, was wir hier tun, ist `stopPropagation()` auf dem Ereignisobjekt im Handler für das `'click'`-Ereignis des `<video>`-Elements aufzurufen. Dies wird verhindern, dass das Ereignis zum Feld aufsteigt. Versuchen Sie jetzt, auf die Schaltfläche und dann das Video zu klicken:

{{EmbedLiveSample("Das Problem mit stopPropagation() beheben", '100%', 500)}}

```html hidden
<button>Display video</button>

<div class="hidden">
  <video>
    <source
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
      type="video/webm" />
    <p>
      Your browser doesn't support HTML video. Here is a
      <a href="rabbit320.mp4">link to the video</a> instead.
    </p>
  </video>
</div>
```

```css hidden
div {
  width: 100%;
  height: 100%;
  background-color: #eee;
}

.hidden {
  display: none;
}

div video {
  padding: 40px;
  display: block;
  width: 400px;
  margin: 40px auto;
}
```

## Ereignis-Capturing

Eine alternative Form der Ereignisausbreitung ist das _Ereignis-Capturing_. Dies ist dem Ereignis-Bubbling ähnlich, jedoch ist die Reihenfolge umgekehrt: das Ereignis wird zuerst auf dem _weniger verschachtelten_ Element ausgelöst und dann auf nacheinander stärker verschachtelten Elementen, bis das Ziel erreicht ist.

Das Ereignis-Capturing ist standardmäßig deaktiviert. Um es zu aktivieren, müssen Sie die `capture`-Option in `addEventListener()` übergeben.

Dieses Beispiel ist genau wie das [Bubbling-Beispiel](#bubbling-beispiel), das wir zuvor gesehen haben, außer dass wir die `capture`-Option verwendet haben:

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick, { capture: true });
container.addEventListener("click", handleClick, { capture: true });
button.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Ereignis-Capturing', '100%', 200, "", "") }}

In diesem Fall ist die Reihenfolge der Nachrichten umgekehrt: Der `<body>`-Ereignis-Handler wird zuerst ausgelöst, gefolgt vom `<div>`-Ereignis-Handler und dann vom `<button>`-Ereignis-Handler:

```plain
You clicked on a BODY element
You clicked on a DIV element
You clicked on a BUTTON element
```

Warum sich um sowohl Capturing als auch Bubbling kümmern? In den schlechten alten Zeiten, als Browser viel weniger kompatibel waren als jetzt, verwendete Netscape nur Ereignis-Capturing und Internet Explorer nur Ereignis-Bubbling. Als das W3C beschloss, zu versuchen, das Verhalten zu standardisieren und einen Konsens zu erreichen, endeten sie mit diesem System, das beide umfasste, welches moderne Browser implementieren.

Standardmäßig sind fast alle Ereignis-Handler in der Bubbling-Phase registriert, und das macht die meiste Zeit mehr Sinn.

## Ereignisdelegation

Im letzten Abschnitt haben wir ein Problem besprochen, das durch Ereignis-Bubbling verursacht wurde, und wie es zu beheben ist. Ereignis-Bubbling ist jedoch nicht nur ärgerlich, sondern kann sehr nützlich sein. Insbesondere ermöglicht es die **Ereignisdelegation**. In dieser Praxis wollen wir, dass Code ausgeführt wird, wenn der Benutzer mit einem von vielen Kindelementen interagiert. Wir setzen den Ereignis-Listener auf ihr Elternelement und lassen Ereignisse, die auf ihnen auftreten, zu ihrem Elternelement aufsteigen, anstatt den Ereignis-Listener auf jedem einzelnen Kindelement setzen zu müssen.

Kehren wir zu unserem ersten Beispiel zurück, bei dem wir die Hintergrundfarbe der gesamten Seite setzen, wenn der Benutzer auf eine Schaltfläche klickt. Angenommen, die Seite ist in 16 Kacheln unterteilt, und wir möchten jede Kachel auf eine zufällige Farbe einstellen, wenn der Benutzer darauf klickt.

Hier ist der HTML-Code:

```html
<div id="container">
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
</div>
```

Wir haben ein wenig CSS, um die Größe und Position der Kacheln festzulegen:

```css
#container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
}
```

Nun könnten wir im JavaScript einen Klick-Ereignis-Handler für jede Kachel hinzufügen. Eine viel einfachere und effizientere Option ist jedoch, den Klick-Ereignis-Handler auf das Elternelement zu setzen und sich auf Ereignis-Bubbling zu verlassen, um sicherzustellen, dass der Handler ausgeführt wird, wenn der Benutzer auf eine Kachel klickt:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  return rndCol;
}

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  event.target.style.backgroundColor = bgChange();
});
```

Die Ausgabe ist wie folgt (versuchen Sie, darauf zu klicken):

{{ EmbedLiveSample('Ereignisdelegation', '100%', 430, "", "") }}

> [!NOTE]
> In diesem Beispiel verwenden wir `event.target`, um das Element zu erhalten, das das Ziel des Ereignisses war (das heißt, das innerste Element). Wenn wir auf das Element zugreifen wollten, das dieses Ereignis behandelt hat (in diesem Fall der Container), könnten wir `event.currentTarget` verwenden.

> [!NOTE]
> Siehe [useful-eventtarget.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/useful-eventtarget.html) für den vollständigen Quellcode; auch können Sie es [live ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html).

## `target` und `currentTarget`

Wenn Sie die Beispiele, die wir auf dieser Seite eingeführt haben, genau betrachten, werden Sie sehen, dass wir zwei verschiedene Eigenschaften des Ereignisobjekts verwenden, um auf das angeklickte Element zuzugreifen. Im Abschnitt [Einen Listener auf ein Elternelement setzen](#einen_listener_auf_ein_elternelement_setzen) verwenden wir [`event.currentTarget`](/de/docs/Web/API/Event/currentTarget). Im Abschnitt [Ereignisdelegation](#ereignisdelegation) verwenden wir jedoch [`event.target`](/de/docs/Web/API/Event/target).

Der Unterschied ist, dass `target` sich auf das Element bezieht, auf dem das Ereignis ursprünglich ausgelöst wurde, während `currentTarget` sich auf das Element bezieht, an das dieser Ereignis-Handler angehängt wurde.

Während `target` gleich bleibt, während ein Ereignis aufsteigt, wird `currentTarget` unterschiedlich für Ereignis-Handler, die an verschiedene Elemente in der Hierarchie angehängt sind.

Das können wir sehen, wenn wir das [Bubbling-Beispiel](#bubbling-beispiel) leicht anpassen. Wir verwenden das gleiche HTML wie zuvor:

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Der JavaScript-Code ist fast derselbe, außer dass wir sowohl `target` als auch `currentTarget` protokollieren:

```js
const output = document.querySelector("#output");
function handleClick(e) {
  const logTarget = `Target: ${e.target.tagName}`;
  const logCurrentTarget = `Current target: ${e.currentTarget.tagName}`;
  output.textContent += `${logTarget}, ${logCurrentTarget}\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);
```

Beachten Sie, dass, wenn wir auf die Schaltfläche klicken, `target` jedes Mal das Schaltflächenelement ist, egal ob der Ereignis-Handler an die Schaltfläche selbst, an das `<div>` oder an das `<body>`-Element angehängt ist. Allerdings identifiziert `currentTarget` das Element, dessen Ereignis-Handler wir gerade ausführen:

{{embedlivesample("target und currentTarget")}}

Die `target`-Eigenschaft wird häufig in der Ereignisdelegation verwendet, wie in unserem [Ereignisdelegationsbeispiel](#ereignisdelegation) oben.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Um zu überprüfen, ob Sie diese Informationen gespeichert haben, bevor Sie fortfahren — sehen Sie sich [Test your skills: Events](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Events) an.

## Zusammenfassung

Sie sollten jetzt alles wissen, was Sie über Webereignisse in diesem frühen Stadium wissen müssen.
Wie erwähnt, sind Ereignisse nicht wirklich Teil des Kern-JavaScripts — sie sind in den Web-APIs des Browsers definiert.

Außerdem ist es wichtig zu verstehen, dass die verschiedenen Kontexte, in denen JavaScript verwendet wird, unterschiedliche Ereignismodelle haben — von Web-APIs bis hin zu anderen Bereichen wie Browser-WebExtensions und Node.js (serverseitiges JavaScript).
Wir erwarten nicht, dass Sie alle diese Bereiche jetzt verstehen, aber es hilft sicherlich, die Grundlagen der Ereignisse zu verstehen, während Sie mit dem Erlernen der Webentwicklung weitermachen.

Als nächstes finden Sie eine Herausforderung, die Ihr Verständnis der letzten Themen testen wird.

## Siehe auch

- [domevents.dev](https://domevents.dev/)
  - : Eine nützliche interaktive Spielplatz-App, die das Erlernen des Verhaltens des DOM-Ereignissystems durch Erkundung ermöglicht.
- [Ereignisreferenz](/de/docs/Web/Events)
  - : Die Haupt-MDN-Ereignisreferenz.
- [Ereignisreihenfolge](https://www.quirksmode.org/js/events_order.html)
  - : Eine hervorragend detaillierte Diskussion über Capturing und Bubbling von Peter-Paul Koch.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

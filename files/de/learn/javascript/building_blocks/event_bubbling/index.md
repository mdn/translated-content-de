---
title: Event bubbling
slug: Learn/JavaScript/Building_blocks/Event_bubbling
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Events","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}

Wir haben gesehen, dass eine Webseite aus _Elementen_ besteht — Überschriften, Textabsätzen, Bildern, Schaltflächen usw. — und dass Sie auf Ereignisse lauschen können, die bei diesen Elementen auftreten. Zum Beispiel könnten Sie einen Listener zu einer Schaltfläche hinzufügen, der abläuft, wenn der Benutzer auf die Schaltfläche klickt.

Wir haben auch gesehen, dass diese Elemente ineinander _verschachtelt_ sein können: Ein {{htmlelement("button")}} könnte beispielsweise in einem {{htmlelement("div")}}-Element platziert werden. In diesem Fall würden wir das `<div>`-Element ein _übergeordnetes_ Element nennen und das `<button>` ein _Kind_ Element.

In diesem Kapitel werden wir sehen, was passiert, wenn Sie einen Ereignis-Listener zu einem übergeordneten Element hinzufügen und der Benutzer auf das untergeordnete Element klickt.

## Einführung in das Event-Bubbling

### Einen Listener auf ein übergeordnetes Element setzen

Betrachten Sie eine Webseite wie diese:

```html
<div id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>
```

Hier befindet sich die Schaltfläche innerhalb eines anderen Elements, eines {{HTMLElement("div")}}-Elements. Wir sagen, dass das `<div>`-Element hier das **übergeordnete** Element des darin enthaltenen Elements ist. Was passiert, wenn wir einen Klick-Ereignishandler zum übergeordneten Element hinzufügen und dann die Schaltfläche klicken?

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Einen Listener auf ein übergeordnetes Element setzen', '100%', 200, "", "") }}

Sie werden sehen, dass das übergeordnete Element ein Klick-Ereignis auslöst, wenn der Benutzer auf die Schaltfläche klickt:

```plain
You clicked on a DIV element
```

Das macht Sinn: Die Schaltfläche befindet sich innerhalb des `<div>`, sodass Sie, wenn Sie auf die Schaltfläche klicken, auch implizit auf das Element klicken, in dem es sich befindet.

### Bubbling-Beispiel

Was passiert, wenn wir Ereignislistener sowohl zur Schaltfläche _als auch_ zum übergeordneten Element hinzufügen?

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Lassen Sie uns versuchen, Klick-Ereignishandler zur Schaltfläche, zu ihrem übergeordneten Element (dem `<div>`) und zum {{HTMLElement("body")}}-Element hinzuzufügen, das beide enthält:

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

- wird der Klick auf die Schaltfläche zuerst ausgelöst
- gefolgt von dem Klick auf das übergeordnete Element (das `<div>`-Element)
- gefolgt vom übergeordneten Element des `<div>` (dem `<body>`-Element).

Wir beschreiben dies, indem wir sagen, dass das Ereignis von dem am tiefsten geschachtelten Element aus **nach oben blubbert**, das geklickt wurde.

Dieses Verhalten kann nützlich sein und auch unerwartete Probleme verursachen. In den nächsten Abschnitten werden wir ein Problem sehen, das es verursacht, und die Lösung finden.

### Videoplayer-Beispiel

In diesem Beispiel enthält unsere Seite ein Video, das zunächst verborgen ist, sowie eine Schaltfläche mit der Beschriftung "Video anzeigen". Wir möchten das folgende Interaktionsmuster:

- Wenn der Benutzer die Schaltfläche "Video anzeigen" klickt, zeigen Sie das Feld mit dem Video an, starten Sie das Video jedoch noch nicht.
- Wenn der Benutzer auf das Video klickt, startet das Video.
- Wenn der Benutzer irgendwo im Feld außerhalb des Videos klickt, wird das Feld ausgeblendet.

Das HTML sieht wie folgt aus:

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

Es beinhaltet:

- ein `<button>`-Element
- ein `<div>`-Element, das anfänglich das Attribut `class="hidden"` besitzt
- ein `<video>`-Element, das innerhalb des `<div>`-Elements verschachtelt ist.

Wir verwenden CSS, um Elemente mit der festgelegten `"hidden"`-Klasse auszublenden.

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

Das JavaScript sieht wie folgt aus:

```js
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", () => video.play());
box.addEventListener("click", () => box.classList.add("hidden"));
```

Dies fügt drei `'click'` Ereignis-Listener hinzu:

- einen auf dem `<button>`, der das `<div>` zeigt, das das `<video>` enthält
- einen auf dem `<video>`, der das Video startet
- einen auf dem `<div>`, der das Video ausblendet

Sehen wir uns an, wie das funktioniert:

{{ EmbedLiveSample('Videoplayer-Beispiel', '100%', 500) }}

Sie sollten sehen, dass, wenn Sie die Schaltfläche klicken, das Feld und das darin enthaltene Video angezeigt werden. Aber dann, wenn Sie auf das Video klicken, startet das Video, aber das Feld wird wieder ausgeblendet!

Das Video befindet sich innerhalb des `<div>` — es ist Teil davon — daher werden beim Klicken auf das Video _beide_ Ereignishandler ausgeführt, was dieses Verhalten verursacht.

### Das Problem mit `stopPropagation()` beheben

Wie wir im letzten Abschnitt gesehen haben, kann das Event-Bubbling manchmal Probleme verursachen, aber es gibt eine Möglichkeit, dies zu verhindern. Das [`Event`](/de/docs/Web/API/Event)-Objekt hat eine darauf verfügbare Funktion namens [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), die, wenn sie innerhalb eines Ereignishandlers aufgerufen wird, das Aufblubbern des Ereignisses zu anderen Elementen verhindert.

Wir können unser aktuelles Problem lösen, indem wir das JavaScript dahingehend ändern:

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

Hier rufen wir einfach `stopPropagation()` auf dem Ereignisobjekt im Handler für das `<video>`-Element's `'click'`-Ereignis auf. Dadurch wird verhindert, dass dieses Ereignis zum Feld hinaufblubbert. Probieren Sie jetzt das Klicken auf die Schaltfläche und dann das Video:

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

## Event-Capture

Eine alternative Form der Ereignisausbreitung ist das _Event-Capture_. Dies ähnelt dem Event-Bubbling, jedoch ist die Reihenfolge umgekehrt: Das bedeutet, dass das Ereignis zuerst auf dem am wenigsten verschachtelten Element ausgelöst wird und dann auf den nachfolgend mehr verschachtelten Elementen, bis das Ziel erreicht ist.

Das Event-Capture ist standardmäßig deaktiviert. Um es zu aktivieren, müssen Sie die `capture`-Option in `addEventListener()` übergeben.

Dieses Beispiel ist genau wie das [Bubbling-Beispiel](#bubbling-beispiel), das wir zuvor gesehen haben, außer dass wir die `capture`-Option benutzt haben:

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

{{ EmbedLiveSample('Event-Capture', '100%', 200, "", "") }}

In diesem Fall ist die Reihenfolge der Nachrichten umgekehrt: Der `<body>`-Ereignishandler wird zuerst ausgelöst, gefolgt vom `<div>`-Ereignishandler, gefolgt vom `<button>`-Ereignishandler:

```plain
You clicked on a BODY element
You clicked on a DIV element
You clicked on a BUTTON element
```

Warum sich sowohl um Capturing als auch um Bubbling kümmern? In den schlechten alten Zeiten, als Browser viel weniger kompatibel waren als heute, verwendete Netscape nur das Event-Capturing und Internet Explorer nur das Event-Bubbling. Als das W3C versuchte, das Verhalten zu standardisieren und einen Konsens zu erreichen, kamen sie auf dieses System, das beides einbezog, was moderne Browser implementieren.

Standardmäßig werden fast alle Ereignishandler in der Bubbling-Phase registriert und dies ergibt meistens mehr Sinn.

## Ereignisdelegation

Im letzten Abschnitt haben wir uns ein Problem angeschaut, das durch Event-Bubbling verursacht wurde, und wie man es beheben kann. Event-Bubbling ist jedoch nicht nur lästig, sondern sehr nützlich. Insbesondere ermöglicht es die **Ereignisdelegation**. In dieser Praxis, wenn wir möchten, dass ein Code ausgeführt wird, wenn der Benutzer mit einem von vielen Kinderlementen interagiert, setzen wir den Ereignis-Listener auf ihr übergeordnetes Element und lassen Ereignisse, die auf ihnen geschehen, zu ihrem Elternteil blubbern, anstatt den Ereignis-Listener auf jedem einzelnen Kind einzeln setzen zu müssen.

Lassen Sie uns zu unserem ersten Beispiel zurückkehren, in dem wir die Hintergrundfarbe der gesamten Seite ändern, wenn der Benutzer auf eine Schaltfläche klickt. Angenommen, die Seite ist in 16 Kacheln unterteilt, und wir möchten jede Kachel bei einem Klick auf diese zufällig färben.

Hier ist das HTML:

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
.tile {
  height: 100px;
  width: 25%;
  float: left;
}
```

Nun könnten wir im JavaScript einen Klick-Ereignishandler für jede Kachel hinzufügen. Eine viel einfachere und effizientere Option ist jedoch, den Klick-Ereignishandler auf das Elternteil zu setzen und auf das Event-Bubbling zu vertrauen, um sicherzustellen, dass der Handler ausgeführt wird, wenn der Benutzer auf eine Kachel klickt:

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

Die Ausgabe ist wie folgt (versuchen Sie darauf zu klicken):

{{ EmbedLiveSample('Ereignisdelegation', '100%', 430, "", "") }}

> [!NOTE]
> In diesem Beispiel verwenden wir `event.target`, um das Element zu erhalten, das das Ziel des Ereignisses war (d.h. das am tiefsten geschachtelte Element). Wenn wir auf das Element zugreifen wollen, das dieses Ereignis bearbeitet hat (in diesem Fall den Container), könnten wir `event.currentTarget` verwenden.

> [!NOTE]
> Siehe [useful-eventtarget.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/useful-eventtarget.html) für den vollständigen Quellcode; sehen Sie es auch [live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html) hier.

## `target` und `currentTarget`

Wenn Sie die Beispiele, die wir auf dieser Seite eingeführt haben, genau betrachten, werden Sie sehen, dass wir zwei verschiedene Eigenschaften des Ereignisobjekts verwenden, um auf das geklickte Element zuzugreifen. In [Einen Listener auf ein übergeordnetes Element setzen](#einen_listener_auf_ein_übergeordnetes_element_setzen) verwenden wir [`event.currentTarget`](/de/docs/Web/API/Event/currentTarget). In [Ereignisdelegation](#ereignisdelegation) hingegen verwenden wir [`event.target`](/de/docs/Web/API/Event/target).

Der Unterschied besteht darin, dass `target` auf das Element verweist, auf dem das Ereignis zunächst ausgelöst wurde, während `currentTarget` auf das Element verweist, an das dieser Ereignishandler angehängt wurde.

Während `target` während eines Ereignis-Bubblings gleich bleibt, wird `currentTarget` bei Ereignishandlern, die an unterschiedliche Elemente in der Hierarchie angefügt sind, unterschiedlich sein.

Wir können das sehen, wenn wir das [Bubbling-Beispiel](#bubbling-beispiel) oben leicht anpassen. Wir verwenden dasselbe HTML wie zuvor:

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Das JavaScript ist fast das gleiche, außer dass wir sowohl `target` als auch `currentTarget` loggen:

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

Beachten Sie, dass `target`, wenn wir die Schaltfläche klicken, jedes Mal das Schaltflächenelement ist, unabhängig davon, ob der Ereignishandler an die Schaltfläche selbst, an das `<div>` oder an das `<body>` angefügt ist. `currentTarget` hingegen identifiziert das Element, dessen Ereignishandler wir gerade ausführen:

{{embedlivesample("target und currentTarget")}}

Die `target`-Eigenschaft wird häufig in der Ereignisdelegation verwendet, wie in unserem [Ereignisdelegation](#ereignisdelegation)-Beispiel oben.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Test your skills: Events](/de/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Events).

## Fazit

Sie sollten jetzt alles Wesentliche über Webereignisse in diesem frühen Stadium wissen.
Wie erwähnt, sind Ereignisse nicht wirklich Teil des Kern-JavaScript — sie sind in den Web-APIs des Browsers definiert.

Auch ist es wichtig zu verstehen, dass die unterschiedlichen Kontexte, in denen JavaScript verwendet wird, unterschiedliche Ereignismodelle haben — von Web-APIs bis zu anderen Bereichen wie Browser-WebExtensions und Node.js (Server-seitiges JavaScript).
Wir erwarten nicht, dass Sie all diese Bereiche jetzt verstehen, aber es hilft sicherlich, die Grundlagen von Ereignissen zu verstehen, während Sie sich mit der Webentwicklung beschäftigen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Siehe auch

- [domevents.dev](https://domevents.dev/) — eine sehr nützliche interaktive Playground-App, die es ermöglicht, das Verhalten des DOM-Ereignissystems durch Erkundung zu erlernen.
- [Ereignisreferenz](/de/docs/Web/Events)
- [Ereignisreihenfolge](https://www.quirksmode.org/js/events_order.html) (Diskussion zu Capturing und Bubbling) — ein ausgezeichnet detaillierter Beitrag von Peter-Paul Koch.

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Events","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}

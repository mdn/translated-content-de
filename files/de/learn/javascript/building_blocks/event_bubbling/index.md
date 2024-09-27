---
title: Ereignis-Bubbling
slug: Learn/JavaScript/Building_blocks/Event_bubbling
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Events","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}

Wir haben gesehen, dass eine Webseite aus _Elementen_ besteht – Überschriften, Textabsätze, Bilder, Schaltflächen usw. – und dass Sie Ereignisse abhören können, die bei diesen Elementen auftreten. Zum Beispiel könnten Sie einen Listener zu einer Schaltfläche hinzufügen, der ausgeführt wird, wenn der Benutzer auf die Schaltfläche klickt.

Wir haben auch gesehen, dass diese Elemente _verschachtelt_ sein können: Zum Beispiel könnte ein {{htmlelement("button")}} innerhalb eines {{htmlelement("div")}}-Elements platziert werden. In diesem Fall würden wir das `<div>`-Element als _Elternelement_ bezeichnen und das `<button>` als _Kindelement_.

In diesem Kapitel werden wir sehen, was passiert, wenn Sie einen Event-Listener zu einem Elternelement hinzufügen und der Benutzer auf das Kindelement klickt.

## Einführung in das Ereignis-Bubbling

### Ein Listener auf einem Elternelement setzen

Betrachten Sie eine Webseite wie diese:

```html
<div id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>
```

Hier befindet sich die Schaltfläche innerhalb eines anderen Elements, eines {{HTMLElement("div")}}-Elements. Wir sagen, dass das `<div>`-Element hier das **Elternelement** des enthaltenen Elements ist. Was passiert, wenn wir einen Klick-Event-Handler zum Elternelement hinzufügen und dann auf die Schaltfläche klicken?

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Ein Listener auf einem Elternelement setzen', '100%', 200, "", "") }}

Sie werden sehen, dass das Elternelement ein Klick-Ereignis auslöst, wenn der Benutzer auf die Schaltfläche klickt:

```plain
You clicked on a DIV element
```

Das ergibt Sinn: Die Schaltfläche befindet sich innerhalb des `<div>`, also wenn Sie auf die Schaltfläche klicken, klicken Sie implizit auch auf das Element, in dem es sich befindet.

### Bubbling-Beispiel

Was passiert, wenn wir Ereignis-Listener sowohl zur Schaltfläche _als auch_ zum Elternelement hinzufügen?

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Versuchen wir, Klick-Event-Handler zur Schaltfläche, ihrem Elternelement (dem `<div>`) und dem {{HTMLElement("body")}}-Element, das beide enthält, hinzuzufügen:

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

- wird zuerst der Klick auf die Schaltfläche ausgelöst
- gefolgt von dem Klick auf das Elternelement (dem `<div>`-Element)
- gefolgt vom Elternelement des `<div>` (dem `<body>`-Element).

Wir beschreiben dies, indem wir sagen, dass das Ereignis von dem innersten Element, das angeklickt wurde, **nach oben blubbert**.

Dieses Verhalten kann nützlich sein und auch unerwartete Probleme verursachen. In den nächsten Abschnitten werden wir ein Problem sehen, das es verursacht, und die Lösung finden.

### Video-Player-Beispiel

In diesem Beispiel enthält unsere Seite ein Video, das zunächst verborgen ist, und eine Schaltfläche mit der Bezeichnung "Video anzeigen". Wir möchten die folgende Interaktion:

- Wenn der Benutzer auf die Schaltfläche "Video anzeigen" klickt, soll das Feld mit dem Video angezeigt werden, es soll jedoch noch nicht mit der Wiedergabe des Videos begonnen werden.
- Wenn der Benutzer auf das Video klickt, soll die Wiedergabe des Videos beginnen.
- Wenn der Benutzer irgendwo im Feld außerhalb des Videos klickt, soll das Feld ausgeblendet werden.

Das HTML sieht so aus:

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

Es enthält:

- ein `<button>`-Element
- ein `<div>`-Element, das zunächst ein `class="hidden"`-Attribut hat
- ein `<video>`-Element, das im `<div>`-Element verschachtelt ist.

Wir verwenden CSS, um Elemente mit der Klasse `"hidden"` versteckt zu halten.

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

Das JavaScript sieht so aus:

```js
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", () => video.play());
box.addEventListener("click", () => box.classList.add("hidden"));
```

Dies fügt drei `'click'`-Event-Listener hinzu:

- einen auf dem `<button>`, der das `<div>`, das das `<video>` enthält, anzeigt
- einen auf dem `<video>`, der das Video startet
- einen auf dem `<div>`, der das Video ausblendet

Sehen wir uns an, wie das funktioniert:

{{ EmbedLiveSample('Video-Player-Beispiel', '100%', 500) }}

Sie sollten sehen, dass, wenn Sie auf die Schaltfläche klicken, das Feld und das darin enthaltene Video angezeigt werden. Wenn Sie dann auf das Video klicken, beginnt das Video abzuspielen, aber das Feld wird wieder versteckt!

Das Video befindet sich innerhalb des `<div>` — es ist ein Teil davon —, sodass beim Klicken auf das Video _beide_ Event-Handler ausgeführt werden, was dieses Verhalten verursacht.

### Das Problem mit stopPropagation() beheben

Wie wir im letzten Abschnitt gesehen haben, kann das Ereignis-Bubbling manchmal Probleme verursachen, aber es gibt eine Möglichkeit, es zu verhindern.
Das [`Event`](/de/docs/Web/API/Event)-Objekt hat eine Funktion namens [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), die, wenn sie innerhalb eines Ereignishandlers aufgerufen wird, das Blubbern des Ereignisses zu anderen Elementen verhindert.

Wir können unser aktuelles Problem beheben, indem wir das JavaScript folgendermaßen ändern:

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

Alles, was wir hier machen, ist, `stopPropagation()` auf das Ereignisobjekt im Handler für das `<video>`-Element `'click'`-Ereignis anzuwenden. Dies wird verhindern, dass dieses Ereignis bis zum Feld blubbert. Versuchen Sie nun, auf die Schaltfläche und dann auf das Video zu klicken:

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

## Ereignis-Capture

Eine alternative Form der Ereignisübertragung ist das _Ereignis-Capture_. Dies ähnelt dem Ereignis-Bubbling, jedoch ist die Reihenfolge umgekehrt: Anstatt dass das Ereignis zuerst auf dem innersten Ziel-Element ausgelöst wird und dann auf sukzessiv weniger verschachtelten Elementen, wird das Ereignis zuerst auf dem _wenigsten verschachtelten_ Element ausgelöst und dann auf sukzessiv mehr verschachtelten Elementen, bis das Ziel erreicht ist.

Das Ereignis-Capture ist standardmäßig deaktiviert. Um es zu aktivieren, müssen Sie die `capture`-Option in `addEventListener()` übergeben.

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

{{ EmbedLiveSample('Ereignis-Capture', '100%', 200, "", "") }}

In diesem Fall ist die Reihenfolge der Nachrichten umgekehrt: Der `<body>`-Event-Handler wird zuerst ausgelöst, gefolgt vom `<div>`-Event-Handler, gefolgt vom `<button>`-Event-Handler:

```plain
You clicked on a BODY element
You clicked on a DIV element
You clicked on a BUTTON element
```

Warum kümmern wir uns um sowohl Capturing als auch Bubbling? In den schlechten alten Zeiten, als Browser viel weniger interoperabel waren als heute, verwendete Netscape nur Ereignis-Capturing, während Internet Explorer nur Ereignis-Bubbling verwendete. Als das W3C versuchte, das Verhalten zu standardisieren und einen Konsens zu erreichen, führte dies zu diesem System, das beides umfasst, was moderne Browser implementieren.

Standardmäßig sind fast alle Event-Handler in der Bubbling-Phase registriert, und dies ergibt meistens mehr Sinn.

## Ereignis-Delegation

Im letzten Abschnitt haben wir ein Problem untersucht, das durch Ereignis-Bubbling verursacht wird, und wie man es behebt. Ereignis-Bubbling ist jedoch nicht nur ärgerlich, es kann sehr nützlich sein. Insbesondere ermöglicht es **Ereignis-Delegation**. Dabei setzen wir den Event-Listener auf das Elternelement, wenn wir möchten, dass ein Code ausgeführt wird, wenn der Benutzer mit einem von vielen Kindelementen interagiert, und lassen Ereignisse, die auf ihnen auftreten, bis zu ihrem Elternteil hochblubbern, anstatt den Event-Listener einzeln auf jedem Kind zu setzen.

Kehren wir zu unserem ersten Beispiel zurück, bei dem wir die Hintergrundfarbe der gesamten Seite festgelegt haben, wenn der Benutzer auf eine Schaltfläche klickt. Angenommen, die Seite ist stattdessen in 16 Kacheln unterteilt, und wir möchten jede Kachel in einer zufälligen Farbe einfärben, wenn der Benutzer auf diese Kachel klickt.

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

Jetzt könnten wir in JavaScript für jede Kachel einen Klick-Event-Handler hinzufügen. Aber eine viel einfachere und effizientere Option ist es, den Klick-Event-Handler auf das Elternelement zu setzen und sich auf das Ereignis-Bubbling zu verlassen, um sicherzustellen, dass der Handler ausgeführt wird, wenn der Benutzer auf eine Kachel klickt:

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

Das Ergebnis sieht wie folgt aus (versuchen Sie, darauf zu klicken):

{{ EmbedLiveSample('Ereignis-Delegation', '100%', 430, "", "") }}

> [!NOTE]
> In diesem Beispiel verwenden wir `event.target`, um das Element zu erhalten, das Ziel des Ereignisses war (also das innerste Element). Wenn wir auf das Element zugreifen wollten, das dieses Ereignis behandelt hat (in diesem Fall der Container), könnten wir `event.currentTarget` verwenden.

> [!NOTE]
> Siehe [useful-eventtarget.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/useful-eventtarget.html) für den vollständigen Quellcode; sehen Sie es auch [live ausgeführt](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html) hier.

## `target` und `currentTarget`

Wenn Sie sich die Beispiele, die wir auf dieser Seite eingeführt haben, genau ansehen, werden Sie sehen, dass wir zwei verschiedene Eigenschaften des Ereignisobjekts verwenden, um auf das angeklickte Element zuzugreifen. In [Ein Listener auf einem Elternelement setzen](#ein_listener_auf_einem_elternelement_setzen) verwenden wir [`event.currentTarget`](/de/docs/Web/API/Event/currentTarget). In [Ereignis-Delegation](#ereignis-delegation) hingegen verwenden wir [`event.target`](/de/docs/Web/API/Event/target).

Der Unterschied besteht darin, dass `target` sich auf das Element bezieht, auf dem das Ereignis ursprünglich ausgelöst wurde, während `currentTarget` sich auf das Element bezieht, an das dieser Ereignishandler angehängt wurde.

Während `target` während des Bubblings eines Ereignisses gleich bleibt, wird `currentTarget` für Ereignishandler, die an unterschiedliche Elemente in der Hierarchie angehängt sind, unterschiedlich sein.

Wir können dies sehen, wenn wir das [Bubbling-Beispiel](#bubbling-beispiel) oben leicht anpassen. Wir verwenden das gleiche HTML wie zuvor:

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Das JavaScript ist fast das gleiche, außer dass wir sowohl `target` als auch `currentTarget` protokollieren:

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

Beachten Sie, dass bei einem Klick auf die Schaltfläche `target` jedes Mal das Schaltflächenelement ist, ob der Event-Handler an die Schaltfläche selbst, das `<div>` oder das `<body>` angehängt ist. `currentTarget` hingegen identifiziert das Element, dessen Event-Handler wir gerade ausführen:

{{embedlivesample("target und currentTarget")}}

Die `target`-Eigenschaft wird häufig bei der Ereignis-Delegation verwendet, wie in unserem Beispiel [Ereignis-Delegation](#ereignis-delegation) oben.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihr Wissen: Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Events).

## Fazit

Sie sollten jetzt alles wissen, was Sie über Web-Ereignisse in diesem frühen Stadium wissen müssen.
Wie erwähnt, gehören Ereignisse nicht wirklich zum Kern von JavaScript – sie sind in den Web-APIs der Browser definiert.

Es ist auch wichtig zu verstehen, dass die verschiedenen Kontexte, in denen JavaScript verwendet wird, unterschiedliche Ereignismodelle haben – von Web-APIs bis zu anderen Bereichen wie Browser-WebExtensions und Node.js (serverseitiges JavaScript).
Wir erwarten nicht, dass Sie alle diese Bereiche jetzt verstehen, aber es ist sicherlich hilfreich, die Grundlagen von Ereignissen zu verstehen, wenn Sie mit dem Erlernen der Webentwicklung fortfahren.

> [!NOTE]
> Wenn Sie Probleme haben, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Siehe auch

- [domevents.dev](https://domevents.dev/) — eine sehr nützliche interaktive Spielplatz-App, die ermöglicht, das Verhalten des DOM-Ereignissystems durch Exploration zu erlernen.
- [Ereignisreferenz](/de/docs/Web/Events)
- [Ereignisreihenfolge](https://www.quirksmode.org/js/events_order.html) (Diskussion über Capturing und Bubbling) — ein ausgezeichnet detaillierter Beitrag von Peter-Paul Koch.

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Events","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}

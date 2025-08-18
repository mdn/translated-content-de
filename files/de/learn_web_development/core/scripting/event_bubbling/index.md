---
title: Event-Bubbling
slug: Learn_web_development/Core/Scripting/Event_bubbling
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Test_your_skills/Events", "Learn_web_development/Core/Scripting")}}

Wir haben gesehen, dass eine Webseite aus _Elementen_ besteht – Überschriften, Textabsätze, Bilder, Schaltflächen und so weiter – und dass Sie Ereignisse, die auf diesen Elementen passieren, abhören können. Zum Beispiel könnten Sie einen Listener zu einer Schaltfläche hinzufügen, und dieser wird ausgeführt, wenn der Benutzer die Schaltfläche anklickt.

Wir haben auch gesehen, dass diese Elemente ineinander verschachtelt sein können: zum Beispiel könnte ein {{htmlelement("button")}} in einem {{htmlelement("div")}}-Element platziert werden. In diesem Fall würden wir das `<div>`-Element ein _Elternelement_ nennen und das `<button>` ein _Kindelement_.

In diesem Kapitel werden wir uns mit **Event-Bubbling** befassen – das ist das, was passiert, wenn Sie einen Event-Listener zu einem Elternelement hinzufügen und der Benutzer das Kindelement anklickt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, wie sie in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Ereignisdelegation, erreicht durch Event-Bubbling oder Event-Capturing.</li>
          <li>Verhindern der Ereignisdelegation mit <code>stopPropagation()</code>.</li>
          <li>Zugriff auf Ereignisziele aus dem Ereignisobjekt.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Event-Bubbling

Lassen Sie uns Event-Bubbling anhand eines Beispiels einführen und definieren.

### Einen Listener auf ein Elternelement setzen

Betrachten Sie eine Webseite wie diese:

```html
<div id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>
```

Hier befindet sich die Schaltfläche innerhalb eines anderen Elements, einem {{HTMLElement("div")}}-Element. Wir sagen, dass das `<div>`-Element hier das **Elternelement** des enthaltenen Elements ist. Was passiert, wenn wir einen Klick-Ereignishandler zum Eltern hinzufügen und dann die Schaltfläche anklicken?

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Einen Listener auf ein Elternelement setzen', '100%', 200, "", "") }}

Sie werden sehen, dass das Elternelement ein Klick-Ereignis auslöst, wenn der Benutzer auf die Schaltfläche klickt:

```plain
You clicked on a DIV element
```

Das ergibt Sinn: Die Schaltfläche befindet sich im `<div>`, sodass Sie beim Anklicken der Schaltfläche auch implizit das Element anklicken, in dem sie sich befindet.

### Bubbling-Beispiel

Was passiert, wenn wir sowohl der Schaltfläche als auch dem Elternteil Ereignis-Listener hinzufügen?

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Versuchen wir, Klick-Ereignishandler zur Schaltfläche, ihrem Elternteil (dem `<div>`) und dem {{HTMLElement("body")}}-Element hinzuzufügen, das beide enthält:

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

{{ EmbedLiveSample('Bubbling example', '100%', 200, "", "") }}

Sie werden sehen, dass alle drei Elemente ein Klick-Ereignis auslösen, wenn der Benutzer die Schaltfläche anklickt:

```plain
You clicked on a BUTTON element
You clicked on a DIV element
You clicked on a BODY element
```

In diesem Fall:

- wird zuerst der Klick auf die Schaltfläche ausgelöst.
- gefolgt vom Klick auf ihren Elternteil (das `<div>`-Element).
- gefolgt vom Klick auf den Elternteil des `<div>`-Elements (das `<body>`-Element).

Wir beschreiben dies, indem wir sagen, dass das Ereignis vom innersten angeklickten Element nach oben **aufsteigt**.

Dieses Verhalten kann nützlich sein und auch unerwartete Probleme verursachen. In den nächsten Abschnitten werden wir ein Problem davon sehen und die Lösung finden.

### Video-Player-Beispiel

In diesem Beispiel enthält unsere Seite ein Video, das anfangs versteckt ist, und eine Schaltfläche mit der Beschriftung "Video anzeigen". Wir möchten die folgende Interaktion:

- Wenn der Benutzer auf die Schaltfläche "Video anzeigen" klickt, soll die Box mit dem Video angezeigt werden, das Video soll jedoch noch nicht abgespielt werden.
- Wenn der Benutzer auf das Video klickt, soll das Video abgespielt werden.
- Wenn der Benutzer irgendwo in der Box außerhalb des Videos klickt, soll die Box ausgeblendet werden.

Der HTML-Code sieht so aus:

```html
<button>Display video</button>

<div class="hidden">
  <video>
    <source src="/shared-assets/videos/flower.webm" type="video/webm" />
    <p>
      Your browser doesn't support HTML video. Here is a
      <a href="rabbit320.mp4">link to the video</a> instead.
    </p>
  </video>
</div>
```

Darin enthalten sind:

- ein `<button>`-Element.
- ein `<div>`-Element, das anfangs ein `class="hidden"`-Attribut hat.
- ein `<video>`-Element, das im `<div>`-Element verschachtelt ist.

Wir verwenden CSS, um Elemente mit gesetzter `"hidden"`-Klasse zu verstecken.

```css hidden
div {
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
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

Der JavaScript-Code sieht so aus:

```js
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", () => video.play());
box.addEventListener("click", () => box.classList.add("hidden"));
```

Dies fügt drei `'click'` Event-Listener hinzu:

- einen zum `<button>`, der das `<div>`, das das `<video>`-Element enthält, anzeigt.
- einen zum `<video>`, der das Video startet.
- einen zum `<div>`, der das Video ausblendet.

Sehen wir uns an, wie das funktioniert:

{{ EmbedLiveSample('Video-Player-Beispiel', '100%', 500) }}

Sie sollten sehen, dass wenn Sie die Schaltfläche anklicken, die Box und das darin enthaltene Video angezeigt werden. Aber dann, wenn Sie das Video anklicken, beginnt das Video zu spielen, aber die Box wird wieder versteckt!

Das Video ist innerhalb des `<div>` — es ist Teil davon — also führt das Anklicken des Videos _beide_ Event-Handler aus, was zu diesem Verhalten führt.

### Das Problem mit `stopPropagation()` beheben

Wie wir im letzten Abschnitt gesehen haben, kann Event-Bubbling manchmal Probleme verursachen, aber es gibt eine Möglichkeit, dies zu verhindern.
Das [`Event`](/de/docs/Web/API/Event)-Objekt hat eine darauf verfügbare Funktion namens [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), die, wenn sie innerhalb eines Ereignishandlers aufgerufen wird, das Aufsteigen des Ereignisses zu anderen Elementen verhindert.

Wir können unser aktuelles Problem beheben, indem wir das JavaScript so ändern:

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

Alles, was wir hier tun, ist `stopPropagation()` auf das Ereignis-Objekt im Handler für das `'click'`-Ereignis des `<video>`-Elements aufzurufen. Dies wird das Ereignis daran hindern, zur Box umzusteigen. Versuchen Sie es nun, indem Sie auf die Schaltfläche und dann auf das Video klicken:

{{EmbedLiveSample("Fixing the problem with stopPropagation()", '100%', 500)}}

```html hidden
<button>Display video</button>

<div class="hidden">
  <video>
    <source src="/shared-assets/videos/flower.webm" type="video/webm" />
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
  background-color: #eeeeee;
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

Eine alternative Form der Ereignisweitergabe ist das _Event-Capture_. Dies ähnelt dem Event-Bubbling, jedoch ist die Reihenfolge umgekehrt: Anstatt dass das Ereignis zuerst auf dem innersten anvisierten Element ausgelöst wird und dann auf jeweils weniger verschachtelten Elementen, wird das Ereignis zunächst auf dem _am wenigsten verschachtelten_ Element ausgelöst und dann auf jeweils mehr verschachtelten Elementen, bis das Ziel erreicht ist.

Event-Capture ist standardmäßig deaktiviert. Um es zu aktivieren, müssen Sie die `capture`-Option in `addEventListener()` übergeben.

Dieses Beispiel ähnelt dem [Bubbling-Beispiel](#bubbling-beispiel), das wir früher gesehen haben, außer dass wir die `capture`-Option verwendet haben:

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

{{ EmbedLiveSample('Event capture', '100%', 200, "", "") }}

In diesem Fall ist die Reihenfolge der Nachrichten umgekehrt: Der `<body>`-Eventhandler wird zuerst ausgelöst, gefolgt vom `<div>`-Eventhandler, gefolgt vom `<button>`-Eventhandler:

```plain
You clicked on a BODY element
You clicked on a DIV element
You clicked on a BUTTON element
```

Warum sich mit både capture und bubbling beschäftigen? In den schlechten alten Zeiten, als Browser viel weniger kompatibel zueinander waren als heute, verwendete Netscape nur Event-Capturing, und der Internet Explorer verwendete nur Event-Bubbling. Als das W3C beschloss, das Verhalten zu standardisieren und einen Konsens zu erreichen, endeten sie mit diesem System, das beide beinhaltete, was moderne Browser implementieren.

Standardmäßig werden fast alle Event-Handler in der Bubbling-Phase registriert, und dies macht die meiste Zeit mehr Sinn.

## Event-Delegation

Im letzten Abschnitt haben wir ein durch Event-Bubbling verursachtes Problem betrachtet und wie man es behebt. Event-Bubbling ist jedoch nicht nur störend: Es kann sehr nützlich sein. Insbesondere ermöglicht es **Event-Delegation**. In dieser Praxis, wenn wir möchten, dass Code ausgeführt wird, wenn der Benutzer mit einem von vielen Kindelementen interagiert, setzen wir den Event-Listener auf ihr Elternelement und lassen das Ereignis, das auf ihnen passiert, zu ihrem Elternelement aufsteigen, anstatt den Event-Listener auf jedem Kind einzeln zu setzen.

Lassen Sie uns zu unserem ersten Beispiel zurückkehren, in dem wir die Hintergrundfarbe der gesamten Seite festlegen, wenn der Benutzer eine Schaltfläche anklickt. Angenommen, die Seite ist stattdessen in 16 Kacheln unterteilt, und wir möchten jede Kachel auf eine zufällige Farbe setzen, wenn der Benutzer diese Kachel anklickt.

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
#container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
}
```

Jetzt könnten wir in JavaScript für jede Kachel einen Klick-Eventhandler hinzufügen. Eine viel einfachere und effizientere Option ist jedoch, den Klick-Eventhandler auf das Elternelement zu setzen und sich auf das Event-Bubbling zu verlassen, um sicherzustellen, dass der Handler ausgeführt wird, wenn der Benutzer auf eine Kachel klickt:

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

Das Ergebnis ist wie folgt (versuchen Sie, darauf zu klicken):

{{ EmbedLiveSample('Event delegation', '100%', 430, "", "") }}

> [!NOTE]
> In diesem Beispiel verwenden wir `event.target`, um das Element zu erhalten, das das Ziel des Ereignisses war (also das innerste Element). Wenn wir auf das Element zugreifen wollten, das dieses Ereignis behandelt hat (in diesem Fall der Container), könnten wir `event.currentTarget` verwenden.

> [!NOTE]
> Siehe [useful-eventtarget.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/useful-eventtarget.html) für den vollständigen Quellcode; sehen Sie ihn auch [hier live](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html) laufen.

## `target` und `currentTarget`

Wenn Sie genau hinsehen bei den Beispielen, die wir in dieser Seite vorgestellt haben, werden Sie sehen, dass wir zwei verschiedene Eigenschaften des Ereignisobjekts verwenden, um auf das angeklickte Element zuzugreifen. In [Einen Listener auf ein Elternelement setzen](#einen_listener_auf_ein_elternelement_setzen) verwenden wir [`event.currentTarget`](/de/docs/Web/API/Event/currentTarget). Jedoch verwenden wir in [Event-Delegation](#event-delegation) [`event.target`](/de/docs/Web/API/Event/target).

Der Unterschied ist, dass sich `target` auf das Element bezieht, auf dem das Ereignis ursprünglich ausgelöst wurde, während sich `currentTarget` auf das Element bezieht, an das dieser Ereignis-Handler angehängt ist.

Während `target` während eines Event-Bubbling-Prozesses gleich bleibt, wird `currentTarget` für Event-Handler, die an verschiedene Elemente in der Hierarchie angehängt sind, unterschiedlich sein.

Wir können das sehen, wenn wir das [Bubbling-Beispiel](#bubbling-beispiel) oben leicht anpassen. Wir verwenden das gleiche HTML wie vorher:

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Das JavaScript ist fast gleich, außer dass wir sowohl `target` als auch `currentTarget` protokollieren:

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

Beachten Sie, dass, wenn wir die Schaltfläche anklicken, `target` jedes Mal das Schaltflächen-Element ist, egal ob der Event-Handler an der Schaltfläche selbst, am `<div>` oder am `<body>` angehängt ist. `currentTarget` hingegen identifiziert das Element, dessen Event-Handler wir aktuell ausführen:

{{embedlivesample("target und currentTarget")}}

Die `target`-Eigenschaft wird häufig in der Event-Delegation verwendet, wie in unserem [Event-Delegation](#event-delegation) Beispiel oben zu sehen ist.

## Zusammenfassung

Sie sollten nun alles wissen, was Sie über Webereignisse in diesem frühen Stadium wissen müssen. Wie erwähnt, sind Ereignisse nicht wirklich Teil der Kern-JavaScript-Sprache – sie sind in den Web-APIs des Browsers definiert.

Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie all die Informationen, die wir Ihnen über Ereignisse gegeben haben, verstanden und behalten haben.

## Siehe auch

- [domevents.dev](https://domevents.dev/)
  - : Eine nützliche interaktive Playground-App, die es ermöglicht, das Verhalten des DOM-Ereignissystems durch Erkundung zu erlernen.
- [DOM-Ereignisse](/de/docs/Web/API/Document_Object_Model/Events)
  - : Ein umfassender Leitfaden zum Verständnis und Umgang mit Ereignissen.
- [Ereignisreihenfolge](https://www.quirksmode.org/js/events_order.html)
  - : Eine hervorragend detaillierte Diskussion von Capturing und Bubbling von Peter-Paul Koch.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Test_your_skills/Events", "Learn_web_development/Core/Scripting")}}

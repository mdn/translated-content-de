---
title: Ereignis-Bubbling
slug: Learn_web_development/Core/Scripting/Event_bubbling
l10n:
  sourceCommit: a73e5b9e881645835a254c4b3d07c48230010d29
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Test_your_skills/Events", "Learn_web_development/Core/Scripting")}}

Wir haben gesehen, dass eine Webseite aus _Elementen_ besteht — Überschriften, Textabsätzen, Bildern, Schaltflächen usw. — und dass Sie Ereignisse, die an diesen Elementen auftreten, abhören können. Sie könnten beispielsweise einen Listener zu einer Schaltfläche hinzufügen und dieser wird ausgeführt, wenn der Benutzer die Schaltfläche anklickt.

Wir haben auch gesehen, dass diese Elemente _ineinander geschachtelt_ sein können: Beispielsweise könnte ein {{htmlelement("button")}} in ein {{htmlelement("div")}}-Element eingefügt werden. In diesem Fall würden wir das `<div>`-Element als ein _übergeordnetes_ Element und die `<button>` als ein _untergeordnetes_ Element bezeichnen.

In diesem Kapitel betrachten wir das **Ereignis-Bubbling** — das passiert, wenn Sie einen Event-Listener zu einem übergeordneten Element hinzufügen und der Benutzer auf das untergeordnete Element klickt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, die in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Ereignisdelegation, erreicht durch Ereignis-Bubbling oder Ereignis-Capture.</li>
          <li>Stoppen der Ereignisdelegation mit <code>stopPropagation()</code>.</li>
          <li>Zugriff auf Ereignisziele aus dem Ereignisobjekt.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Einführung in das Ereignis-Bubbling

Lassen Sie uns das Ereignis-Bubbling anhand eines Beispiels einführen und definieren.

### Ein Listener auf ein übergeordnetes Element setzen

Betrachten Sie eine Webseite wie diese:

```html
<div id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>
```

Hier befindet sich die Schaltfläche innerhalb eines anderen Elements, eines {{HTMLElement("div")}}-Elements. Wir sagen, dass das `<div>`-Element hier das **übergeordnete Element** des enthaltenen Elements ist. Was passiert, wenn wir einen Click-Ereignishandler zum übergeordneten Element hinzufügen und dann die Schaltfläche anklicken?

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Setting a listener on a parent element', '100%', 200, "", "") }}

Sie sehen, dass das übergeordnete Element ein Click-Ereignis auslöst, wenn der Benutzer die Schaltfläche anklickt:

```plain
You clicked on a DIV element
```

Das ergibt Sinn: Die Schaltfläche ist innerhalb des `<div>`, also klicken Sie beim Anklicken der Schaltfläche auch implizit auf das Element, in dem sie enthalten ist.

### Bubbling-Beispiel

Was passiert, wenn wir Ereignis-Listener sowohl zur Schaltfläche als auch zum übergeordneten Element hinzufügen?

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Lassen Sie uns versuchen, Click-Ereignishandler sowohl zur Schaltfläche, zu ihrem übergeordneten Element (dem `<div>`) als auch zum {{HTMLElement("body")}}-Element hinzuzufügen, das beide enthält:

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

Sie werden sehen, dass alle drei Elemente ein Click-Ereignis auslösen, wenn der Benutzer die Schaltfläche anklickt:

```plain
You clicked on a BUTTON element
You clicked on a DIV element
You clicked on a BODY element
```

In diesem Fall:

- wird zuerst der Klick auf die Schaltfläche ausgelöst.
- gefolgt vom Klick auf das übergeordnete Element (das `<div>`-Element).
- gefolgt vom Klick auf das übergeordnete Element des `<div>` (das `<body>`-Element).

Wir beschreiben dies, indem wir sagen, dass das Ereignis vom innersten angeklickten Element **nach oben "bubbelt"**.

Dieses Verhalten kann nützlich sein, kann aber auch unerwartete Probleme verursachen. In den nächsten Abschnitten sehen wir ein Problem, das es verursacht, und finden die Lösung.

### Beispiel eines Videoplayers

In diesem Beispiel enthält unsere Seite ein Video, das zunächst verborgen ist, und eine Schaltfläche mit der Beschriftung "Video anzeigen". Wir möchten folgende Interaktionen:

- Wenn der Benutzer auf die Schaltfläche "Video anzeigen" klickt, soll die Box mit dem Video angezeigt werden, das Video soll jedoch noch nicht abgespielt werden.
- Wenn der Benutzer auf das Video klickt, soll das Video abgespielt werden.
- Wenn der Benutzer irgendwo außerhalb des Videos in der Box klickt, soll die Box versteckt werden.

Das HTML sieht so aus:

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

Es enthält:

- ein `<button>`-Element.
- ein `<div>`-Element, das zunächst ein `class="hidden"`-Attribut hat.
- ein `<video>`-Element, das im `<div>`-Element geschachtelt ist.

Wir verwenden CSS, um Elemente mit gesetzter `"hidden"`-Klasse zu verbergen.

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

Das JavaScript sieht so aus:

```js
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", () => video.play());
box.addEventListener("click", () => box.classList.add("hidden"));
```

Dies fügt drei `'click'`-Ereignis-Listener hinzu:

- einen für die `<button>`, welcher das `<div>` zeigt, das das `<video>` enthält.
- einen für das `<video>`, der das Video abspielt.
- einen für das `<div>`, der das Video versteckt.

Sehen wir uns an, wie das funktioniert:

{{ EmbedLiveSample('Video_player_example', '100%', 500) }}

Sie sollten sehen, dass beim Klicken auf die Schaltfläche die Box und das darin enthaltene Video angezeigt werden. Aber wenn Sie dann auf das Video klicken, beginnt das Video zu spielen, aber die Box wird wieder versteckt!

Das Video befindet sich im `<div>` — es ist Teil davon — also führt das Klicken auf das Video _beide_ Ereignishandler aus, was zu diesem Verhalten führt.

### Behebung des Problems mit `stopPropagation()`

Wie wir im letzten Abschnitt gesehen haben, kann Ereignis-Bubbling manchmal Probleme verursachen, aber es gibt einen Weg, es zu verhindern.
Das [`Event`](/de/docs/Web/API/Event)-Objekt hat eine Funktion namens [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), die, wenn sie innerhalb eines Ereignishandlers aufgerufen wird, verhindert, dass das Ereignis zu anderen Elementen "bubbelt".

Wir können unser aktuelles Problem beheben, indem wir das JavaScript wie folgt ändern:

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

Alles, was wir hier tun, ist, `stopPropagation()` auf dem Ereignisobjekt im Handler für das `<video>`-Element des `'click'`-Ereignisses aufzurufen. Dies wird verhindern, dass dieses Ereignis zur Box "bubbelt". Versuchen Sie nun, auf die Schaltfläche und dann auf das Video zu klicken:

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

## Ereignis-Capture

Eine alternative Form der Ereignisausbreitung ist das _Ereignis-Capture_. Dies ist wie das Ereignis-Bubbling, jedoch in umgekehrter Reihenfolge: Anstatt dass das Ereignis zuerst auf dem am wenigsten verschachtelten Element ausgelöst wird und dann auf successiv tiefer verschachtelten Elementen, wird das Ereignis zuerst auf dem _am wenigsten verschachtelten_ Element ausgelöst und geht dann bis zum Ziel weiter.

Das Ereignis-Capture ist standardmäßig deaktiviert. Um es zu aktivieren, müssen Sie die `capture`-Option in `addEventListener()` übergeben.

Dieses Beispiel ähnelt dem [Bubbling-Beispiel](#bubbling-beispiel), das wir zuvor gesehen haben, mit dem Unterschied, dass wir die `capture`-Option verwendet haben:

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

In diesem Fall ist die Reihenfolge der Nachrichten umgekehrt: Der `<body>`-Ereignishandler löst zuerst aus, gefolgt vom `<div>`-Ereignishandler und schließlich vom `<button>`-Ereignishandler:

```plain
You clicked on a BODY element
You clicked on a DIV element
You clicked on a BUTTON element
```

Warum sich mit Capture und Bubbling befassen? In den schlechten alten Zeiten, als Browser weitaus weniger kompatibel waren als heute, nutzte Netscape nur das Ereignis-Capture, und Internet Explorer nutzte nur das Ereignis-Bubbling. Als das W3C versuchte, das Verhalten zu standardisieren und einen Konsens zu erreichen, endeten sie mit diesem System, das beide einschließt, was die modernen Browser implementieren.

Standardmäßig werden fast alle Ereignishandler in der Bubbling-Phase registriert, und das ergibt meistens mehr Sinn.

## Ereignisdelegation

Im letzten Abschnitt haben wir ein Problem betrachtet, das durch Ereignis-Bubbling verursacht wurde und wie man es behebt. Ereignis-Bubbling ist jedoch nicht nur lästig, sondern kann auch sehr nützlich sein. Insbesondere ermöglicht es die **Ereignisdelegation**. Bei dieser Praxis möchten wir, dass ein Code ausgeführt wird, wenn der Benutzer mit einem von vielen untergeordneten Elementen interagiert. Wir setzen den Ereignis-Listener auf dem übergeordneten Element und lassen die Ereignisse, die auf ihnen auftreten, zu ihrem übergeordneten Element "bubblen", anstatt den Ereignis-Listener auf jedem untergeordneten Element einzeln setzen zu müssen.

Lassen Sie uns zu unserem [ersten Beispiel](/de/docs/Learn_web_development/Core/Scripting/Events#an_example_handling_a_click_event) zurückkehren,
bei dem wir die Hintergrundfarbe der gesamten Seite geändert haben, wenn der Benutzer eine Schaltfläche angeklickt hat. Angenommen, die Seite ist stattdessen in 16 Kacheln unterteilt, und wir möchten jede Kachel auf eine zufällige Farbe setzen, wenn der Benutzer auf diese Kachel klickt.

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

Wir haben ein wenig CSS, um die Größe und Position der Kacheln zu setzen:

```css
#container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
}
```

Nun, im JavaScript, könnten wir für jede Kachel einen Click-Ereignishandler hinzufügen. Aber eine viel einfachere und effizientere Option ist es, den Click-Ereignishandler auf das übergeordnete Element zu setzen und sich auf das Ereignis-Bubbling zu verlassen, um sicherzustellen, dass der Handler ausgeführt wird, wenn der Benutzer auf eine Kachel klickt:

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

Die Ausgabe sieht wie folgt aus (versuchen Sie, darauf zu klicken):

{{ EmbedLiveSample('Event delegation', '100%', 430, "", "") }}

> [!NOTE]
> In diesem Beispiel verwenden wir `event.target`, um das Element zu erhalten, das das Ziel des Ereignisses war (das heißt, das innerste Element). Wenn wir auf das Element zugreifen wollten, das dieses Ereignis gehandhabt hat (in diesem Fall der Container), könnten wir `event.currentTarget` verwenden.

> [!NOTE]
> Siehe [useful-eventtarget.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/useful-eventtarget.html) für den vollständigen Quellcode; sehen Sie auch, wie es [live läuft](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html).

## `target` und `currentTarget`

Wenn Sie genau auf die Beispiele achten, die wir auf dieser Seite vorgestellt haben, werden Sie sehen, dass wir zwei verschiedene Eigenschaften des Ereignisobjekts verwenden, um auf das geklickte Element zuzugreifen. In [Ein Listener auf ein übergeordnetes Element setzen](#ein_listener_auf_ein_übergeordnetes_element_setzen) verwenden wir [`event.currentTarget`](/de/docs/Web/API/Event/currentTarget). Allerdings verwenden wir in [Ereignisdelegation](#ereignisdelegation) [`event.target`](/de/docs/Web/API/Event/target).

Der Unterschied besteht darin, dass `target` auf das Element verweist, auf dem das Ereignis ursprünglich ausgelöst wurde, während `currentTarget` auf das Element verweist, an das dieser Ereignishandler gebunden ist.

Während `target` während eines gesamten Bubbling-Prozesses gleich bleibt, wird `currentTarget` für Ereignishandler unterschiedlich sein, die an verschiedene Elemente in der Hierarchie gebunden sind.

Wir können dies sehen, wenn wir das [Bubbling-Beispiel](#bubbling-beispiel) ein wenig anpassen. Wir verwenden dasselbe HTML wie zuvor:

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Das JavaScript ist fast dasselbe, außer dass wir sowohl `target` als auch `currentTarget` protokollieren:

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

Beachten Sie, dass, wenn wir auf die Schaltfläche klicken, `target` jedes Mal das Schaltflächenelement ist, ob der Ereignishandler an die Schaltfläche selbst, an das `<div>` oder an das `<body>`-Element gebunden ist. `currentTarget` identifiziert jedoch das Element, dessen Ereignishandler wir derzeit ausführen:

{{embedlivesample("target and currentTarget")}}

Die Eigenschaft `target` wird häufig in der Ereignisdelegation verwendet, wie in unserem [Beispiel der Ereignisdelegation](#ereignisdelegation) oben gesehen.

## Zusammenfassung

Sie sollten jetzt alles über Webereignisse wissen, was Sie in diesem frühen Stadium wissen müssen. Wie erwähnt, sind Ereignisse nicht wirklich Teil der Kernsprache von JavaScript — sie sind in den Web-APIs von Browsern definiert.

Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie alle Informationen, die wir Ihnen zu Ereignissen gegeben haben, verstanden und behalten haben.

## Siehe auch

- [domevents.dev](https://domevents.dev/)
  - : Eine nützliche interaktive Spielplatz-App, die es ermöglicht, das Verhalten des DOM-Ereignissystems durch Exploration zu lernen.
- [DOM-Ereignisse](/de/docs/Web/API/Document_Object_Model/Events)
  - : Ein umfassender Leitfaden zum Verstehen und Handhaben von Ereignissen.
- [Reihenfolge der Ereignisse](https://www.quirksmode.org/js/events_order.html)
  - : Eine ausgezeichnet detaillierte Diskussion über Capture und Bubbling von Peter-Paul Koch.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Test_your_skills/Events", "Learn_web_development/Core/Scripting")}}

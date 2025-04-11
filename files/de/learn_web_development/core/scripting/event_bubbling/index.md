---
title: Event-Bubbling
slug: Learn_web_development/Core/Scripting/Event_bubbling
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

Wir haben gesehen, dass eine Webseite aus _Elementen_ besteht — Überschriften, Textabsätzen, Bildern, Schaltflächen usw. — und dass Sie auf Ereignisse hören können, die mit diesen Elementen geschehen. Zum Beispiel könnten Sie einen Listener zu einer Schaltfläche hinzufügen, der ausgeführt wird, wenn der Benutzer die Schaltfläche anklickt.

Wir haben auch gesehen, dass diese Elemente _verschachtelt_ sein können: zum Beispiel könnte ein {{htmlelement("button")}} in einem {{htmlelement("div")}}-Element platziert werden. In diesem Fall würden wir das `<div>`-Element ein _übergeordnetes Element_ nennen und das `<button>` ein _untergeordnetes Element_.

In diesem Kapitel betrachten wir **Event-Bubbling** — dies geschieht, wenn Sie einem übergeordneten Element einen Event-Listener hinzufügen und der Benutzer das untergeordnete Element anklickt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">grundlegenden CSS-Kenntnissen</a>, Vertrautheit mit den JavaScript-Grundlagen, die in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Ereignisdelegation, erreicht durch Event-Bubbling oder Event-Capturing.</li>
          <li>Stoppen der Ereignisdelegation mit <code>stopPropagation()</code>.</li>
          <li>Zugriff auf Ereignisziele aus dem Ereignisobjekt.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Einführung in das Event-Bubbling

Lassen Sie uns das Event-Bubbling anhand eines Beispiels vorstellen und definieren.

### Einen Listener auf einem übergeordneten Element einstellen

Betrachten Sie eine Webseite wie diese:

```html
<div id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>
```

Hier ist die Schaltfläche in ein weiteres Element eingebettet, ein {{HTMLElement("div")}}-Element. Wir sagen, dass das `<div>`-Element hier das **übergeordnete Element** des enthaltenen Elements ist. Was passiert, wenn wir einen Klick-Ereignis-Handler zum übergeordneten Element hinzufügen und dann die Schaltfläche anklicken?

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Einen Listener auf einem übergeordneten Element einstellen', '100%', 200, "", "") }}

Sie werden sehen, dass das übergeordnete Element ein Klick-Ereignis auslöst, wenn der Benutzer die Schaltfläche anklickt:

```plain
You clicked on a DIV element
```

Das macht Sinn: Die Schaltfläche befindet sich innerhalb des `<div>`, also klicken Sie, wenn Sie auf die Schaltfläche klicken, auch implizit auf das Element, in dem sie enthalten ist.

### Bubbling-Beispiel

Was passiert, wenn wir auch Event-Listener zur Schaltfläche _und_ zum übergeordneten Element hinzufügen?

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Versuchen wir, Klick-Ereignis-Handler zur Schaltfläche, ihrem übergeordneten Element (dem `<div>`) und dem {{HTMLElement("body")}}-Element, das beide enthält, hinzuzufügen:

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

- Der Klick auf die Schaltfläche wird zuerst ausgelöst.
- gefolgt vom Klick auf das übergeordnete Element (das `<div>`-Element).
- gefolgt vom Klick auf das übergeordnete Element des `<div>`-Elements (das `<body>`-Element).

Wir beschreiben dies, indem wir sagen, dass das Ereignis **vom innersten Element, das angeklickt wurde, nach oben gebubbelt** wird.

Dieses Verhalten kann nützlich sein und auch unerwartete Probleme verursachen. In den nächsten Abschnitten werden wir ein Problem sehen, das es verursacht, und eine Lösung finden.

### Videoplayer-Beispiel

In diesem Beispiel enthält unsere Seite ein Video, das zunächst verborgen ist, und eine Schaltfläche mit der Aufschrift "Video anzeigen". Wir möchten die folgende Interaktion:

- Wenn der Benutzer auf die Schaltfläche "Video anzeigen" klickt, wird das Kästchen, das das Video enthält, angezeigt, aber das Video noch nicht abgespielt.
- Wenn der Benutzer auf das Video klickt, wird das Video abgespielt.
- Wenn der Benutzer irgendwo im Kästchen außerhalb des Videos klickt, wird das Kästchen ausgeblendet.

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

- ein `<button>`-Element.
- ein `<div>`-Element, das zunächst ein `class="hidden"`-Attribut hat.
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

- einen auf der `<button>`, die das `<div>` anzeigt, das das `<video>` enthält.
- einen auf dem `<video>`, das das Video abspielt.
- einen auf dem `<div>`, das das Video ausblendet.

Sehen wir uns an, wie das funktioniert:

{{ EmbedLiveSample('Videoplayer-Beispiel', '100%', 500) }}

Sie sollten sehen, dass, wenn Sie die Schaltfläche klicken, das Kästchen und das darin enthaltene Video angezeigt werden. Aber dann, wenn Sie auf das Video klicken, beginnt das Video zu spielen, aber das Kästchen wird wieder ausgeblendet!

Das Video befindet sich innerhalb des `<div>` — es ist ein Teil davon — also führt das Klicken auf das Video _beide_ Event-Handler aus und verursacht dieses Verhalten.

### Behebung des Problems mit `stopPropagation()`

Wie wir im letzten Abschnitt gesehen haben, kann Event-Bubbling manchmal Probleme verursachen, aber es gibt eine Möglichkeit, dies zu verhindern.
Das [`Event`](/de/docs/Web/API/Event)-Objekt hat eine Funktion namens [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), die, wenn sie innerhalb eines Ereignis-Handlers aufgerufen wird, verhindert, dass das Ereignis zu anderen Elementen nach oben gebubbelt wird.

Wir können unser aktuelles Problem lösen, indem wir das JavaScript so ändern:

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

Alles, was wir hier tun, ist `stopPropagation()` auf das Ereignisobjekt im Handler für das `'click'`-Ereignis des `<video>`-Elements aufzurufen. Dies wird verhindern, dass das Ereignis zum Kästchen weiter gebubbelt wird. Versuchen Sie jetzt, die Schaltfläche und dann das Video anzuklicken:

{{EmbedLiveSample("Behebung des Problems mit stopPropagation()", '100%', 500)}}

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

## Event-Capturing

Eine alternative Form der Ereignisausbreitung ist das _Event-Capturing_. Dies ähnelt dem Event-Bubbling, aber die Reihenfolge ist umgekehrt: anstatt dass das Ereignis zuerst auf dem innersten Element ausgelöst wird und dann auf sukzessiv weniger verschachtelten Elementen, wird das Ereignis zuerst auf dem _am wenigsten verschachtelten_ Element ausgelöst und dann auf sukzessiv mehr verschachtelten Elementen, bis das Ziel erreicht ist.

Standardmäßig ist das Event-Capturing deaktiviert. Um es zu aktivieren, müssen Sie die `capture`-Option in `addEventListener()` übergeben.

Dieses Beispiel ist genauso wie das [Bubbling-Beispiel](#bubbling-beispiel), das wir zuvor gesehen haben, außer dass wir die `capture`-Option verwendet haben:

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

{{ EmbedLiveSample('Event-Capturing', '100%', 200, "", "") }}

In diesem Fall ist die Reihenfolge der Nachrichten umgekehrt: Der `<body>`-Event-Handler wird zuerst ausgelöst, gefolgt vom `<div>`-Event-Handler, gefolgt vom `<button>`-Event-Handler:

```plain
You clicked on a BODY element
You clicked on a DIV element
You clicked on a BUTTON element
```

Warum sowohl Capturing als auch Bubbling verwenden? In den schlechten alten Zeiten, als Browser weit weniger übergreifend kompatibel waren als heute, nutzte Netscape nur Event-Capturing, und Internet Explorer nutzte nur Event-Bubbling. Als das W3C beschloss, das Verhalten zu standardisieren und einen Konsens zu erreichen, endeten sie mit diesem System, das beide beinhaltete, und das ist es, was moderne Browser implementieren.

Standardmäßig werden fast alle Event-Handler in der Bubbling-Phase registriert, und dies macht meistens mehr Sinn.

## Ereignisdelegation

Im letzten Abschnitt haben wir ein Problem gesehen, das durch Event-Bubbling verursacht wurde, und wie wir es beheben können. Event-Bubbling ist nicht nur lästig, sondern kann auch sehr nützlich sein. Insbesondere ermöglicht es die **Ereignisdelegation**. Bei dieser Praxis, wenn wir möchten, dass Code ausgeführt wird, wenn der Benutzer mit einem von vielen untergeordneten Elementen interagiert, setzen wir den Event-Listener auf das übergeordnete Element, und lassen die Ereignisse, die auf ihnen geschehen, zu ihrem übergeordneten Element hochbubbeln, anstatt den Event-Listener auf jedes untergeordnete Element einzeln setzen zu müssen.

Gehen wir zurück zu unserem ersten Beispiel, wo wir die Hintergrundfarbe der gesamten Seite setzten, wenn der Benutzer eine Schaltfläche klickte. Angenommen, die Seite ist in 16 Kacheln aufgeteilt, und wir möchten jede Kachel in eine zufällige Farbe setzen, wenn der Benutzer diese Kachel anklickt.

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

Jetzt könnten wir im JavaScript einen Klick-Ereignis-Handler für jede Kachel hinzufügen. Aber eine viel einfachere und effizientere Option ist es, den Klick-Ereignis-Handler auf das übergeordnete Element zu setzen und darauf zu vertrauen, dass das Event-Bubbling sicherstellt, dass der Handler ausgeführt wird, wenn der Benutzer auf eine Kachel klickt:

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
> In diesem Beispiel verwenden wir `event.target`, um das Element zu bekommen, das Ziel des Ereignisses war (das heißt, das innerste Element). Wenn wir auf das Element zugreifen wollten, das dieses Ereignis behandelt hat (in diesem Fall der Container), könnten wir `event.currentTarget` verwenden.

> [!NOTE]
> Siehe [useful-eventtarget.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/useful-eventtarget.html) für den vollständigen Quellcode; sehen Sie es auch [live ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html) hier.

## `target` und `currentTarget`

Wenn Sie sich die Beispiele, die wir auf dieser Seite eingeführt haben, genauer ansehen, werden Sie sehen, dass wir zwei verschiedene Eigenschaften des Ereignisobjekts verwenden, um auf das angeklickte Element zuzugreifen. In [Einen Listener auf einem übergeordneten Element einstellen](#einen_listener_auf_einem_übergeordneten_element_einstellen) verwenden wir [`event.currentTarget`](/de/docs/Web/API/Event/currentTarget). In [Ereignisdelegation](#ereignisdelegation) verwenden wir jedoch [`event.target`](/de/docs/Web/API/Event/target).

Der Unterschied besteht darin, dass `target` sich auf das Element bezieht, auf dem das Ereignis zunächst ausgelöst wurde, während sich `currentTarget` auf das Element bezieht, an das dieser Event-Handler gebunden ist.

Während `target` beim Event-Bubbling gleich bleibt, wird `currentTarget` für Event-Handler, die an verschiedene Elemente in der Hierarchie gebunden sind, unterschiedlich sein.

Wir können dies sehen, wenn wir das [Bubbling-Beispiel](#bubbling-beispiel) oben leicht anpassen. Wir verwenden das gleiche HTML wie zuvor:

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Das JavaScript ist fast identisch, außer dass wir sowohl `target` als auch `currentTarget` protokollieren:

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

Beachten Sie, dass, wenn wir die Schaltfläche klicken, `target` jedes Mal das Schaltflächenelement ist, unabhängig davon, ob der Event-Handler an die Schaltfläche selbst, an das `<div>` oder an das `<body>` gebunden ist. `currentTarget` dagegen identifiziert das Element, dessen Event-Handler wir gerade ausführen:

{{embedlivesample("target und currentTarget")}}

Die `target`-Eigenschaft wird häufig in der Ereignisdelegation verwendet, wie in unserem Beispiel [Ereignisdelegation](#ereignisdelegation) oben.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Events).

## Zusammenfassung

Sie sollten jetzt alles wissen, was Sie über Web-Ereignisse in diesem frühen Stadium wissen müssen. Wie erwähnt, sind Ereignisse eigentlich kein Teil des Kern-JavaScript — sie sind in den Web-APIs des Browsers definiert.

Es ist auch wichtig zu verstehen, dass die verschiedenen Kontexte, in denen JavaScript verwendet wird, unterschiedliche Ereignismodelle haben — von Web-APIs bis zu anderen Bereichen wie Browser-WebExtensions und Node.js (serverseitiges JavaScript). Wir erwarten nicht, dass Sie all diese Bereiche jetzt verstehen, aber es hilft sicherlich, die Grundlagen von Ereignissen zu verstehen, während Sie weiter lernen, Webentwicklung zu betreiben.

Als Nächstes finden Sie eine Herausforderung, die Ihr Verständnis der letzten Themen testen wird.

## Siehe auch

- [domevents.dev](https://domevents.dev/)
  - : Eine nützliche interaktive Spielplatz-App, die das Lernen über das Verhalten des DOM-Ereignissystems durch Erkundung ermöglicht.
- [Event-Referenz](/de/docs/Web/Events)
  - : Die Haupt-MDN-Ereignisreferenz.
- [Ereignisreihenfolge](https://www.quirksmode.org/js/events_order.html)
  - : Eine hervorragend detaillierte Diskussion über Capturing und Bubbling von Peter-Paul Koch.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

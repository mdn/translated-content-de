---
title: Ereignis-Bubbling
slug: Learn_web_development/Core/Scripting/Event_bubbling
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

Wir haben gesehen, dass eine Webseite aus _Elementen_ besteht – Überschriften, Textabsätzen, Bildern, Schaltflächen und so weiter – und dass Sie Ereignisse verfolgen können, die mit diesen Elementen geschehen. Zum Beispiel könnten Sie einen Listener zu einer Schaltfläche hinzufügen, der aktiviert wird, wenn der Benutzer auf die Schaltfläche klickt.

Wir haben auch gesehen, dass diese Elemente ineinander _verschachtelt_ sein können: Ein Beispiel wäre ein {{htmlelement("button")}}, das in einem {{htmlelement("div")}}-Element platziert wird. In diesem Fall würden wir das `<div>`-Element als _Elternelement_ und das `<button>` als _Kindelement_ bezeichnen.

In diesem Kapitel werden wir uns mit **Ereignis-Bubbling** beschäftigen – das ist das, was passiert, wenn Sie einen Ereignis-Listener zu einem Elternelement hinzufügen und der Benutzer auf das Kindelement klickt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den grundlegenden JavaScript-Konzepten, die in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Ereignis-Delegation, erreicht durch Ereignis-Bubbling oder Ereignis-Capture.</li>
          <li>Stoppen der Ereignis-Delegation mit <code>stopPropagation()</code>.</li>
          <li>Zugriff auf Ereignisziele aus dem Ereignisobjekt.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Einführung in das Ereignis-Bubbling

Lassen Sie uns das Ereignis-Bubbling anhand eines Beispiels einführen und definieren.

### Einen Listener auf einem Elternelement setzen

Betrachten Sie eine Webseite wie diese:

```html
<div id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>
```

Hier befindet sich die Schaltfläche innerhalb eines anderen Elements, einem {{HTMLElement("div")}}-Element. Wir sagen, dass das `<div>`-Element hier das **Elternteil** des enthaltenen Elements ist. Was passiert, wenn wir einen Klick-Ereignishandler zum Elternteil hinzufügen und dann auf die Schaltfläche klicken?

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Einen Listener auf einem Elternelement setzen', '100%', 200, "", "") }}

Sie werden sehen, dass das Elternelement ein Klick-Ereignis auslöst, wenn der Benutzer auf die Schaltfläche klickt:

```plain
You clicked on a DIV element
```

Das macht Sinn: Die Schaltfläche ist im `<div>`-Element enthalten, sodass Sie beim Klicken auf die Schaltfläche auch implizit das Element innerhalb davon anklicken.

### Bubbling-Beispiel

Was passiert, wenn wir sowohl dem Button als auch dem Elternelement Ereignis-Listener hinzufügen?

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Versuchen wir Klick-Ereignishandler zur Schaltfläche, ihrem Elternteil (dem `<div>`) und dem {{HTMLElement("body")}}-Element, das beide enthält, hinzuzufügen:

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

- das Klicken auf die Schaltfläche feuert zuerst.
- gefolgt vom Klick auf das Elternelement (das `<div>`-Element).
- gefolgt vom Klick auf das Elternelement des `<div>`-Elements (das `<body>`-Element).

Wir beschreiben dies, indem wir sagen, dass das Ereignis von dem innersten Element, das angeklickt wurde, **aufsteigt**.

Dieses Verhalten kann nützlich sein und auch unerwartete Probleme verursachen. In den nächsten Abschnitten werden wir ein Problem betrachten, das es verursacht, und die Lösung finden.

### Videoplayer-Beispiel

In diesem Beispiel enthält unsere Seite ein Video, das anfänglich versteckt ist, und eine Schaltfläche mit der Aufschrift "Video anzeigen". Wir möchten die folgende Interaktion:

- Wenn der Benutzer auf die Schaltfläche "Video anzeigen" klickt, wird der Kasten mit dem Video angezeigt, aber das Video noch nicht abgespielt.
- Wenn der Benutzer auf das Video klickt, beginnt das Video abzuspielen.
- Wenn der Benutzer irgendwo im Kasten außerhalb des Videos klickt, wird der Kasten versteckt.

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

Es beinhaltet:

- ein `<button>`-Element.
- ein `<div>`-Element, das anfänglich das Attribut `class="hidden"` hat.
- ein `<video>`-Element, das im `<div>`-Element verschachtelt ist.

Wir verwenden CSS, um Elemente mit gesetzter `"hidden"`-Klasse zu verstecken.

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

Dies fügt drei `'click'`-Ereignis-Listener hinzu:

- einen für das `<button>`, der das `<div>`, das das `<video>` enthält, anzeigt.
- einen für das `<video>`, das das Video abspielt.
- einen für das `<div>`, das das Video versteckt.

Schauen wir uns an, wie das funktioniert:

{{ EmbedLiveSample('Videoplayer-Beispiel', '100%', 500) }}

Sie sollten sehen, dass, wenn Sie auf die Schaltfläche klicken, der Kasten und das darin enthaltene Video angezeigt werden. Aber wenn Sie dann auf das Video klicken, beginnt das Video zu spielen, aber der Kasten wird wieder ausgeblendet!

Das Video ist innerhalb des `<div>` – es gehört dazu – sodass beim Klicken auf das Video _beide_ Ereignis-Handler ausgeführt werden, was zu diesem Verhalten führt.

### Das Problem mit `stopPropagation()` beheben

Wie wir im letzten Abschnitt gesehen haben, kann Ereignis-Bubbling manchmal Probleme verursachen, aber es gibt einen Weg, dies zu verhindern.
Das [`Event`](/de/docs/Web/API/Event)-Objekt hat eine verfügbare Funktion namens [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), die, wenn sie innerhalb eines Ereignis-Handlers aufgerufen wird, das Ereignis daran hindert, zu anderen Elementen aufzusteigen.

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

Alles, was wir hier tun, ist `stopPropagation()` auf dem Ereignis-Objekt im Handler für das `'click'`-Ereignis des `<video>`-Elements aufzurufen. Dies wird verhindern, dass dieses Ereignis zum Kasten aufsteigt. Versuchen Sie nun, die Schaltfläche und dann das Video zu klicken:

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

Eine alternative Form der Ereignisweitergabe ist _Ereignis-Capture_. Dies ist wie Ereignis-Bubbling, aber die Reihenfolge ist umgekehrt: Anstatt dass das Ereignis zuerst auf dem innersten Element ausgelöst wird und dann auf sukzessiv weniger verschachtelten Elementen, wird das Ereignis zuerst auf dem _am wenigsten verschachtelten_ Element ausgelöst und dann auf sukzessiv mehr verschachtelten Elementen, bis das Ziel erreicht ist.

Ereignis-Capture ist standardmäßig deaktiviert. Um es zu aktivieren, müssen Sie die Option `capture` in `addEventListener()` übergeben.

Dieses Beispiel ist genau wie das [Bubbling-Beispiel](#bubbling-beispiel), das wir früher gesehen haben, außer dass wir die Option `capture` verwendet haben:

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

In diesem Fall ist die Reihenfolge der Nachrichten umgekehrt: Der `<body>`-Ereignis-Handler feuert zuerst, gefolgt vom `<div>`-Ereignis-Handler, gefolgt vom `<button>`-Ereignis-Handler:

```plain
You clicked on a BODY element
You clicked on a DIV element
You clicked on a BUTTON element
```

Warum sowohl Capturing als auch Bubbling verwenden? In den schlechten alten Zeiten, als Browser viel weniger kompatibel waren als jetzt, verwendete Netscape nur Ereignis-Capturing, und Internet Explorer verwendete nur Ereignis-Bubbling. Als das W3C versuchte, das Verhalten zu standardisieren und einen Konsens zu erzielen, endeten sie mit diesem System, das beide beinhaltet, was nun von modernen Browsern implementiert wird.

Standardmäßig werden fast alle Ereignis-Handler im Bubbling-Phase registriert, und das macht die meiste Zeit mehr Sinn.

## Ereignis-Delegation

Im letzten Abschnitt haben wir ein durch Ereignis-Bubbling verursachtes Problem betrachtet und wie man es behebt. Ereignis-Bubbling ist jedoch nicht nur lästig, sondern kann sehr nützlich sein. Es ermöglicht insbesondere die **Ereignis-Delegation**. In dieser Praxis, wenn wir möchten, dass ein Code ausgeführt wird, wenn der Benutzer mit einem von vielen Kindelementen interagiert, setzen wir den Ereignislistener auf ihrem Elternteil und lassen Ereignisse, die auf ihnen geschehen, zu ihrem Elternteil aufsteigen, anstatt den Ereignislistener auf jedes Kind individuell setzen zu müssen.

Lassen Sie uns zu unserem ersten Beispiel zurückkehren, in dem wir die Hintergrundfarbe der gesamten Seite ändern, wenn der Benutzer auf eine Schaltfläche klickt. Angenommen, die Seite ist in 16 Kacheln unterteilt, und wir möchten jede Kachel in eine zufällige Farbe einstellen, wenn der Benutzer auf diese Kachel klickt.

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

Wir haben ein wenig CSS, um die Größe und Position der Kacheln einzurichten:

```css
#container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
}
```

Jetzt in JavaScript könnten wir einen Klick-Ereignishandler für jede Kachel hinzufügen. Aber eine viel einfachere und effizientere Option ist es, den Klick-Ereignishandler auf dem Elternelement einzustellen und auf Ereignis-Bubbling zu setzen, um sicherzustellen, dass der Handler ausgeführt wird, wenn der Benutzer auf eine Kachel klickt:

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

Das Ergebnis ist wie folgt (versuchen Sie herumzuklicken):

{{ EmbedLiveSample('Ereignis-Delegation', '100%', 430, "", "") }}

> [!NOTE]
> In diesem Beispiel verwenden wir `event.target`, um das Element zu erhalten, das das Ziel des Ereignisses war (also das innerste Element). Wenn wir auf das Element zugreifen wollten, das dieses Ereignis behandelt hat (in diesem Fall den Container), könnten wir `event.currentTarget` verwenden.

> [!NOTE]
> Siehe [useful-eventtarget.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/useful-eventtarget.html) für den vollständigen Quellcode; sehen Sie es auch [live laufend](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html) hier.

## `target` und `currentTarget`

Wenn Sie genau auf die Beispiele achten, die wir auf dieser Seite eingeführt haben, werden Sie sehen, dass wir zwei verschiedene Eigenschaften des Ereignis-Objekts verwenden, um auf das angeklickte Element zuzugreifen. In [Einen Listener auf einem Elternelement setzen](#einen_listener_auf_einem_elternelement_setzen) verwenden wir [`event.currentTarget`](/de/docs/Web/API/Event/currentTarget). Im Gegensatz dazu verwenden wir in [Ereignis-Delegation](#ereignis-delegation) [`event.target`](/de/docs/Web/API/Event/target).

Der Unterschied besteht darin, dass `target` sich auf das Element bezieht, auf dem das Ereignis ursprünglich ausgelöst wurde, während `currentTarget` sich auf das Element bezieht, an das dieser Ereignishandler angehängt ist.

Während `target` gleich bleibt, während ein Ereignis aufsteigt, wird `currentTarget` für Ereignis-Handler, die an verschiedene Elemente in der Hierarchie angefügt werden, unterschiedlich sein.

Wir können dies sehen, wenn wir das [Bubbling-Beispiel](#bubbling-beispiel) oben leicht anpassen. Wir verwenden dasselbe HTML wie zuvor:

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

Beachten Sie, dass, wenn wir die Schaltfläche anklicken, `target` jedes Mal das Schaltflächenelement ist, unabhängig davon, ob der Ereignis-Handler an die Schaltfläche selbst, an das `<div>` oder an das `<body>` angefügt ist. `currentTarget` jedoch identifiziert das Element, dessen Ereignis-Handler wir gerade ausführen:

{{embedlivesample("target und currentTarget")}}

Die `target`-Eigenschaft wird häufig in der Ereignis-Delegation verwendet, wie in unserem [Ereignis-Delegation](#ereignis-delegation)-Beispiel oben.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Building_blocks/Test_your_skills:_Events).

## Zusammenfassung

Sie sollten nun alles wissen, was Sie zu diesem frühen Zeitpunkt über Webereignisse wissen müssen.
Wie erwähnt, gehören Ereignisse nicht wirklich zum Kern von JavaScript — sie sind in den Web-APIs des Browsers definiert.

Außerdem ist es wichtig zu verstehen, dass die verschiedenen Kontexte, in denen JavaScript verwendet wird, unterschiedliche Ereignismodelle haben — von Web-APIs bis hin zu anderen Bereichen wie Browser-WebExtensions und Node.js (serverseitiges JavaScript).
Wir erwarten nicht, dass Sie all diese Bereiche jetzt verstehen, aber es hilft sicherlich, die Grundlagen der Ereignisse zu verstehen, während Sie mit dem Erlernen der Webentwicklung voranschreiten.

Als Nächstes finden Sie eine Herausforderung, die Ihr Verständnis der letzten Themen testen wird.


## Siehe auch

- [domevents.dev](https://domevents.dev/)
  - : Eine nützliche interaktive Playground-App, die das Lernen über das Verhalten des DOM-Ereignissystems durch Exploration ermöglicht.
- [Ereignisreferenz](/de/docs/Web/Events)
  - : Die Haupt-Ereignisreferenz von MDN.
- [Ereignisreihenfolge](https://www.quirksmode.org/js/events_order.html)
  - : Eine ausgezeichnet detaillierte Diskussion über Capturing und Bubbling von Peter-Paul Koch.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

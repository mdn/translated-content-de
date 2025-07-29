---
title: Event-Bubbling
slug: Learn_web_development/Core/Scripting/Event_bubbling
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

Wir haben gesehen, dass eine Webseite aus _Elementen_ besteht - Überschriften, Textabsätze, Bilder, Buttons und so weiter - und dass Sie Ereignisse abhören können, die bei diesen Elementen auftreten. Zum Beispiel könnten Sie einem Button einen Listener hinzufügen, und dieser wird ausgeführt, wenn der Benutzer den Button anklickt.

Wir haben auch gesehen, dass diese Elemente _verschachtelt_ sein können: zum Beispiel könnte ein {{htmlelement("button")}} in einem {{htmlelement("div")}}-Element platziert werden. In diesem Fall würden wir das `<div>`-Element als _Elternelement_ und das `<button>`-Element als _Kindelement_ bezeichnen.

In diesem Kapitel werden wir uns mit dem **Event-Bubbling** befassen — dies ist das, was passiert, wenn Sie einen Ereignis-Listener zu einem Elternelement hinzufügen und der Benutzer das Kindelement anklickt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie sie in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Ereignisdelegation, erreicht durch Event-Bubbling oder Event-Capture.</li>
          <li>Beenden der Ereignisdelegation mit <code>stopPropagation()</code>.</li>
          <li>Zugriff auf Ereignisziele aus dem Ereignisobjekt.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Einführung in das Event-Bubbling

Lassen Sie uns das Konzept des Event-Bubblings anhand eines Beispiels einführen und definieren.

### Einen Listener auf einem Elternelement setzen

Betrachten Sie eine Webseite wie diese:

```html
<div id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>
```

Hier befindet sich der Button innerhalb eines anderen Elements, eines {{HTMLElement("div")}}-Elements. Wir sagen, dass das `<div>`-Element hier das **Elternelement** des Elements ist, das es enthält. Was passiert, wenn wir einen Klick-Event-Handler zum Elternelement hinzufügen und dann den Button anklicken?

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Setting a listener on a parent element', '100%', 200, "", "") }}

Sie werden sehen, dass das Elternelement ein Klickereignis auslöst, wenn der Benutzer den Button anklickt:

```plain
You clicked on a DIV element
```

Das macht Sinn: Der Button befindet sich innerhalb des `<div>`, sodass Sie, wenn Sie den Button anklicken, auch implizit das Element anklicken, in dem er sich befindet.

### Bubbling-Beispiel

Was passiert, wenn wir Event-Listener sowohl zum Button als auch zum Elternelement hinzufügen?

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Lassen Sie uns versuchen, Klick-Event-Handler zu dem Button, seinem Elternelement (dem `<div>`) und dem {{HTMLElement("body")}}-Element hinzuzufügen, das beide enthält:

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

Sie werden sehen, dass alle drei Elemente ein Klickereignis auslösen, wenn der Benutzer den Button anklickt:

```plain
You clicked on a BUTTON element
You clicked on a DIV element
You clicked on a BODY element
```

In diesem Fall:

- wird zuerst der Klick auf dem Button ausgelöst,
- gefolgt vom Klick auf sein Elternelement (das `<div>`-Element),
- gefolgt vom Klick auf das Elternelement des `<div>`-Elements (das `<body>`-Element).

Wir beschreiben dies, indem wir sagen, dass sich das Ereignis vom innersten angeklickten Element an **nach oben ausbreitet**.

Dieses Verhalten kann nützlich sein und auch unerwartete Probleme verursachen. In den nächsten Abschnitten werden wir ein Problem sehen, das es verursacht, und die Lösung finden.

### Video-Player-Beispiel

In diesem Beispiel enthält unsere Seite ein Video, das zu Beginn ausgeblendet ist, und einen Button mit der Beschriftung "Video anzeigen". Wir möchten die folgende Interaktion:

- Wenn der Benutzer auf den Button "Video anzeigen" klickt, soll das Kästchen mit dem Video angezeigt werden, das Video jedoch noch nicht gestartet werden.
- Wenn der Benutzer auf das Video klickt, soll das Video starten.
- Wenn der Benutzer irgendwo im Kästchen außerhalb des Videos klickt, soll das Kästchen ausgeblendet werden.

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

Es beinhaltet:

- ein `<button>`-Element.
- ein `<div>`-Element, das anfänglich ein `class="hidden"`-Attribut hat.
- ein `<video>`-Element, das innerhalb des `<div>`-Elements verschachtelt ist.

Wir verwenden CSS, um Elemente mit der Klasseneigenschaft `"hidden"` auszublenden.

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

Es fügt drei `'click'`-Event-Listener hinzu:

- einen auf dem `<button>`, der das `<div>` anzeigt, das das `<video>` enthält.
- einen auf dem `<video>`, der das Video startet.
- einen auf dem `<div>`, der das Video ausblendet.

Lassen Sie uns sehen, wie das funktioniert:

{{ EmbedLiveSample('Video_player_example', '100%', 500) }}

Sie sollten sehen, dass, wenn Sie auf den Button klicken, das Kästchen und das darin enthaltene Video angezeigt werden. Aber dann, wenn Sie auf das Video klicken, beginnt das Video zu spielen, aber das Kästchen wird wieder ausgeblendet!

Das Video befindet sich innerhalb des `<div>` — es ist ein Teil davon — daher wird durch das Klicken auf das Video _beide_ Event-Handler ausgeführt, was dieses Verhalten hervorruft.

### Das Problem mit `stopPropagation()` beheben

Wie wir im letzten Abschnitt gesehen haben, kann das Event-Bubbling manchmal Probleme verursachen, aber es gibt eine Möglichkeit, es zu verhindern. Das [`Event`](/de/docs/Web/API/Event)-Objekt hat eine Funktion namens [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), die, wenn sie innerhalb eines Event-Handlers aufgerufen wird, verhindert, dass das Ereignis zu anderen Elementen hinaufsteigt.

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

Alles, was wir hier tun, ist `stopPropagation()` auf dem Ereignisobjekt im Handler für das `<video>`-Element `'click'`-Ereignis aufzurufen. Dies wird dieses Ereignis daran hindern, sich zum Kästchen nach oben auszubreiten. Versuchen Sie nun, den Button und dann das Video anzuklicken:

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

Eine alternative Art der Ereignisausbreitung ist _Event-Capture_. Dies ist ähnlich wie Event-Bubbling, aber die Reihenfolge ist umgekehrt: Anstatt dass das Ereignis zuerst auf dem innersten angezielten Element ausgelöst wird und dann auf aufeinanderfolgend weniger verschachtelten Elementen, wird das Ereignis zuerst auf dem _am wenigsten verschachtelten_ Element ausgelöst und dann auf aufeinanderfolgend stärker verschachtelten Elementen, bis das Ziel erreicht ist.

Event-Capture ist standardmäßig deaktiviert. Um es zu aktivieren, müssen Sie die Option `capture` in `addEventListener()` übergeben.

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

{{ EmbedLiveSample('Event capture', '100%', 200, "", "") }}

In diesem Fall ist die Reihenfolge der Nachrichten umgekehrt: Der `<body>`-Ereignis-Handler wird zuerst ausgelöst, gefolgt vom `<div>`-Ereignis-Handler, und schließlich vom `<button>`-Ereignis-Handler:

```plain
You clicked on a BODY element
You clicked on a DIV element
You clicked on a BUTTON element
```

Warum die Mühe mit sowohl Capturing als auch Bubbling? In den schlechten alten Tagen, als Browser viel weniger untereinander kompatibel waren als heute, verwendete Netscape nur Event-Capturing, und Internet Explorer verwendete nur Event-Bubbling. Als das W3C beschloss, das Verhalten zu standardisieren und zu einem Konsens zu gelangen, endeten sie mit diesem System, das beides beinhaltete, was moderne Browser implementieren.

Standardmäßig werden fast alle Ereignis-Handler in der Bubbling-Phase registriert, und das macht in den meisten Fällen mehr Sinn.

## Ereignisdelegation

Im letzten Abschnitt haben wir ein durch Event-Bubbling verursachtes Problem betrachtet und wie man es beheben kann. Event-Bubbling ist jedoch nicht nur ärgerlich, es kann auch sehr nützlich sein. Insbesondere ermöglicht es die **Ereignisdelegation**. In dieser Praxis, wenn wir möchten, dass Code ausgeführt wird, wenn der Benutzer mit irgendeinem der vielen Kindelemente interagiert, setzen wir den Ereignis-Listener auf ihr Elternelement und lassen die Ereignisse, die auf ihnen passieren, zu ihrem Elternelement hinaufsteigen, anstatt den Ereignis-Listener auf jedem Kind einzeln setzen zu müssen.

Lassen Sie uns zu unserem ersten Beispiel zurückkehren, bei dem wir die Hintergrundfarbe der ganzen Seite gesetzt haben, wenn der Benutzer einen Button anklickte. Angenommen, die Seite ist in 16 Kacheln unterteilt, und wir möchten jede Kachel in einer zufälligen Farbe setzen, wenn der Benutzer diese Kachel anklickt.

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

Nun könnten wir in JavaScript für jede Kachel einen Klick-Event-Handler hinzufügen. Aber eine viel einfachere und effizientere Option ist es, den Klick-Event-Handler auf das Elternelement zu setzen und auf Event-Bubbling zu vertrauen, um sicherzustellen, dass der Handler ausgeführt wird, wenn der Benutzer auf eine Kachel klickt:

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

{{ EmbedLiveSample('Event delegation', '100%', 430, "", "") }}

> [!NOTE]
> In diesem Beispiel verwenden wir `event.target`, um das Element zu erhalten, das das Ziel des Ereignisses war (also das innerste Element). Wenn wir auf das Element zugreifen wollten, das dieses Ereignis behandelt hat (in diesem Fall den Container), könnten wir `event.currentTarget` verwenden.

> [!NOTE]
> Siehe [useful-eventtarget.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/useful-eventtarget.html) für den vollständigen Quellcode; Sie können es auch [live ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html).

## `target` und `currentTarget`

Wenn Sie sich die Beispiele auf dieser Seite genau ansehen, werden Sie feststellen, dass wir zwei verschiedene Eigenschaften des Ereignisobjekts verwenden, um auf das angeklickte Element zuzugreifen. In [Einen Listener auf einem Elternelement setzen](#einen_listener_auf_einem_elternelement_setzen) verwenden wir [`event.currentTarget`](/de/docs/Web/API/Event/currentTarget). Jedoch in [Ereignisdelegation](#ereignisdelegation) verwenden wir [`event.target`](/de/docs/Web/API/Event/target).

Der Unterschied besteht darin, dass `target` sich auf das Element bezieht, auf dem das Ereignis ursprünglich ausgelöst wurde, während sich `currentTarget` auf das Element bezieht, an das dieser Event-Handler gebunden ist.

Während `target` während eines Bubblings unverändert bleibt, wird `currentTarget` bei Event-Handlern, die an unterschiedliche Elemente in der Hierarchie gebunden sind, unterschiedlich sein.

Wir können dies sehen, wenn wir das [Bubbling-Beispiel](#bubbling-beispiel) oben leicht abwandeln. Wir verwenden das gleiche HTML wie zuvor:

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

Beachten Sie, dass wenn wir den Button anklicken, `target` jedes Mal das Button-Element ist, unabhängig davon, ob der Event-Handler an den Button selbst, das `<div>`-Element oder das `<body>`-Element gebunden ist. `currentTarget` hingegen identifiziert, welches Element den aktuellen Event-Handler ausführt:

{{embedlivesample("target and currentTarget")}}

Die `target`-Eigenschaft wird häufig in der Ereignisdelegation verwendet, wie in unserem [Ereignisdelegation](#ereignisdelegation)-Beispiel oben.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Events](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Events).

## Zusammenfassung

Jetzt sollten Sie alles wissen, was Sie über Web-Ereignisse in diesem frühen Stadium wissen müssen.
Wie erwähnt, sind Ereignisse nicht wirklich Teil des Kern-JavaScripts — sie werden in Web-APIs des Browsers definiert.

Es ist auch wichtig zu verstehen, dass die verschiedenen Kontexte, in denen JavaScript verwendet wird, unterschiedliche Event-Modelle haben — von Web-APIs bis hin zu anderen Bereichen wie Browser-WebExtensions und Node.js (serverseitiges JavaScript).
Wir erwarten nicht, dass Sie alle diese Bereiche jetzt verstehen, aber es hilft sicherlich, die Grundlagen der Ereignisse zu verstehen, während Sie mit dem Erlernen der Webentwicklung vorankommen.

Als nächstes finden Sie eine Herausforderung, die Ihr Verständnis der letzten Themen testet.

## Siehe auch

- [domevents.dev](https://domevents.dev/)
  - : Eine nützliche interaktive App, die das Lernen über das Verhalten des DOM-Ereignissystems durch Exploration ermöglicht.
- [DOM events](/de/docs/Web/API/Document_Object_Model/Events)
  - : Ein umfassender Leitfaden zum Verständnis und zur Behandlung von Ereignissen.
- [Event order](https://www.quirksmode.org/js/events_order.html)
  - : Eine ausgezeichnet detaillierte Diskussion über Capturing und Bubbling von Peter-Paul Koch.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

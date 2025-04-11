---
title: Event-Bubbling
slug: Learn_web_development/Core/Scripting/Event_bubbling
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

Wir haben gesehen, dass eine Webseite aus _Elementen_ besteht — Überschriften, Textabsätzen, Bildern, Buttons usw. — und dass Sie für diese Elemente Ereignisse abhören können. Zum Beispiel könnten Sie einem Button einen Listener hinzufügen, der ausgeführt wird, wenn der Benutzer den Button anklickt.

Wir haben auch gesehen, dass diese Elemente _verschachtelt_ sein können: Zum Beispiel könnte ein {{htmlelement("button")}} innerhalb eines {{htmlelement("div")}}-Elements platziert werden. In diesem Fall würden wir das `<div>`-Element als _übergeordnetes_ Element und den `<button>` als _untergeordnetes_ Element bezeichnen.

In diesem Kapitel betrachten wir **Event-Bubbling** — das ist das, was passiert, wenn Sie einen Ereignis-Listener an ein übergeordnetes Element anhängen und der Benutzer das untergeordnete Element anklickt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie sie in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Ereignisdelegation, erreicht durch Event-Bubbling oder Ereignis-Capture.</li>
          <li>Stoppen der Ereignisdelegation mit <code>stopPropagation()</code>.</li>
          <li>Zugriff auf Ereignisziele vom Ereignisobjekt.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Einführung in das Event-Bubbling

Lassen Sie uns das Event-Bubbling anhand eines Beispiels einführen und definieren.

### Einstellen eines Listeners auf ein übergeordnetes Element

Betrachten Sie eine Webseite wie diese:

```html
<div id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>
```

Hier befindet sich der Button innerhalb eines anderen Elements, einem {{HTMLElement("div")}}-Element. Wir sagen, dass das `<div>`-Element hier das **übergeordnete** Element des enthaltenen Elements ist. Was passiert, wenn wir einen Klick-Ereignishandler zum übergeordneten Element hinzufügen und dann auf den Button klicken?

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Setting a listener on a parent element', '100%', 200, "", "") }}

Sie werden sehen, dass das übergeordnete Element ein Klick-Ereignis auslöst, wenn der Benutzer auf den Button klickt:

```plain
You clicked on a DIV element
```

Das ist sinnvoll: Der Button befindet sich innerhalb des `<div>`, also klicken Sie, wenn Sie auf den Button klicken, auch implizit das Element an, in dem er sich befindet.

### Bubbling-Beispiel

Was passiert, wenn wir Ereignis-Listener sowohl zum Button _als auch_ zum übergeordneten Element hinzufügen?

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Versuchen wir, Klick-Ereignishandler zum Button, seinem übergeordneten Element (dem `<div>`) und dem {{HTMLElement("body")}}-Element hinzuzufügen, das beide enthält:

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

Sie werden sehen, dass alle drei Elemente ein Klick-Ereignis auslösen, wenn der Benutzer auf den Button klickt:

```plain
You clicked on a BUTTON element
You clicked on a DIV element
You clicked on a BODY element
```

In diesem Fall:

- der Klick auf den Button wird zuerst ausgelöst.
- gefolgt vom Klick auf sein übergeordnetes Element (dem `<div>`-Element).
- gefolgt vom Klick auf das übergeordnete `<div>`-Element (dem `<body>`-Element).

Wir beschreiben dies, indem wir sagen, dass das Ereignis **von innen nach außen** vom innersten Element, das angeklickt wurde, nach oben "blubbert".

Dieses Verhalten kann nützlich sein und auch unerwartete Probleme verursachen. In den nächsten Abschnitten werden wir ein Problem sehen, das dadurch verursacht wird, und die Lösung finden.

### Videoplayer-Beispiel

In diesem Beispiel enthält unsere Seite ein Video, das zuerst versteckt ist, und einen Button mit der Aufschrift "Video anzeigen". Wir möchten die folgende Interaktion:

- Wenn der Benutzer den Button "Video anzeigen" klickt, wird das Kästchen mit dem Video angezeigt, aber das Video wird nicht sofort abgespielt.
- Wenn der Benutzer auf das Video klickt, beginnt das Video zu spielen.
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

Es enthält:

- ein `<button>`-Element.
- ein `<div>`-Element, das zunächst das Attribut `class="hidden"` hat.
- ein `<video>`-Element, das innerhalb des `<div>`-Elements verschachtelt ist.

Wir verwenden CSS, um Elemente mit der Klasseneinstellung `"hidden"` zu verstecken.

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

- einen auf dem `<button>`, der das `<div>`, das das `<video>` enthält, anzeigt.
- einen auf dem `<video>`, der das Video abspielt.
- einen auf dem `<div>`, der das Video versteckt.

Sehen wir uns an, wie das funktioniert:

{{ EmbedLiveSample('Video_player_example', '100%', 500) }}

Sie sollten sehen, dass, wenn Sie den Button klicken, das Kästchen und das darin enthaltene Video angezeigt werden. Wenn Sie jedoch auf das Video klicken, beginnt es zu spielen, aber das Kästchen wird wieder versteckt!

Das Video befindet sich im `<div>` — es ist ein Teil davon — daher werden beide Ereignishandler durch das Klicken auf das Video ausgeführt, was zu diesem Verhalten führt.

### Das Problem mit `stopPropagation()` lösen

Wie wir im letzten Abschnitt gesehen haben, kann Event-Bubbling manchmal Probleme verursachen, aber es gibt eine Möglichkeit, dies zu verhindern.
Das [`Event`](/de/docs/Web/API/Event)-Objekt hat eine Funktion namens [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), die, wenn sie innerhalb eines Ereignishandlers aufgerufen wird, das Blubbern des Ereignisses zu anderen Elementen verhindert.

Wir können unser aktuelles Problem lösen, indem wir das JavaScript wie folgt ändern:

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

Alles, was wir hier tun, ist, `stopPropagation()` auf dem Ereignisobjekt im Handler des `<video>`-Elements `'click'`-Ereignisses aufzurufen. Dies wird verhindern, dass das Ereignis zum Kästchen aufsteigt. Versuchen Sie, den Button und dann das Video zu klicken:

{{EmbedLiveSample("Fixing the problem with stopPropagation()", '100%', 500)}}

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

Eine alternative Form der Ereignisausbreitung ist das _Ereignis-Capture_. Dies ist ähnlich wie das Event-Bubbling, aber die Reihenfolge ist umgekehrt: Anstatt dass das Ereignis zuerst auf dem innersten Ziel-Element ausgelöst wird und sich dann auf weniger verschachtelte Elemente fortpflanzt, wird das Ereignis zuerst auf dem _am wenigsten verschachtelten_ Element ausgelöst und bewegt sich dann auf zunehmend verschachtelte Elemente zu, bis das Ziel erreicht wird.

Das Ereignis-Capture ist standardmäßig deaktiviert. Um es zu aktivieren, müssen Sie die Option `capture` in `addEventListener()` übergeben.

Dieses Beispiel ähnelt dem [Bubbling-Beispiel](#bubbling-beispiel) von früher, außer dass wir die `capture`-Option verwendet haben:

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

In diesem Fall ist die Reihenfolge der Nachrichten umgekehrt: Der `<body>`-Ereignishandler wird zuerst ausgelöst, gefolgt vom `<div>`-Ereignishandler und dann vom `<button>`-Ereignishandler:

```plain
You clicked on a BODY element
You clicked on a DIV element
You clicked on a BUTTON element
```

Warum sich die Mühe mit beiden, Capture und Bubbling, machen? In den schlechten alten Zeiten, als Browser viel weniger kompatibel waren als heute, verwendete Netscape nur Ereignisaufnahme, und Internet Explorer verwendete nur Event-Bubbling. Als das W3C beschloss, das Verhalten zu standardisieren und einen Konsens zu erreichen, endeten sie mit diesem System, das beide umfasst, welches in modernen Browsern implementiert ist.

Standardmäßig werden fast alle Ereignishandler in der Bubbling-Phase registriert, und das ergibt meistens mehr Sinn.

## Ereignis-Delegation

Im letzten Abschnitt haben wir ein Problem gesehen, das durch Event-Bubbling verursacht wird und wie man es behebt. Event-Bubbling ist allerdings nicht nur ärgerlich; es kann auch sehr nützlich sein. Insbesondere ermöglicht es die **Ereignis-Delegation**. Bei dieser Praxis stellen wir, wenn wir möchten, dass ein Code ausgeführt wird, wenn der Benutzer mit einem von vielen untergeordneten Elementen interagiert, den Ereignis-Listener auf ihr übergeordnetes Element ein und lassen die Ereignisse, die auf ihnen passieren, zu ihrem übergeordneten Element aufsteigen, anstatt den Ereignis-Listener auf jedes einzelne Kind einstellen zu müssen.

Kehren wir zu unserem ersten Beispiel zurück, bei dem wir die Hintergrundfarbe der gesamten Seite ändern, wenn der Benutzer auf einen Button klickt. Angenommen, die Seite ist stattdessen in 16 Kacheln unterteilt, und wir möchten jede Kachel in einer zufälligen Farbe färben, wenn der Benutzer auf diese Kachel klickt.

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

Nun könnten wir im JavaScript für jede Kachel einen Klick-Ereignishandler hinzufügen. Aber eine viel einfachere und effizientere Option ist es, den Klick-Ereignishandler auf das übergeordnete Element zu setzen und sich auf das Event-Bubbling zu verlassen, um sicherzustellen, dass der Handler ausgeführt wird, wenn der Benutzer auf eine Kachel klickt:

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

Die Ausgabe ist wie folgt (versuchen Sie herumzuklicken):

{{ EmbedLiveSample('Event delegation', '100%', 430, "", "") }}

> [!NOTE]
> In diesem Beispiel verwenden wir `event.target`, um das Element zu erhalten, das das Ziel des Ereignisses war (also das innerste Element). Wenn wir auf das Element zugreifen möchten, das dieses Ereignis bearbeitet (in diesem Fall den Container), könnten wir `event.currentTarget` verwenden.

> [!NOTE]
> Siehe [useful-eventtarget.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/useful-eventtarget.html) für den vollständigen Quellcode; sehen Sie es sich [hier live an](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html).

## `target` und `currentTarget`

Wenn Sie die Beispiele, die wir auf dieser Seite eingeführt haben, genau betrachten, werden Sie sehen, dass wir zwei verschiedene Eigenschaften des Ereignisobjekts verwenden, um auf das Element zuzugreifen, das angeklickt wurde. In [Einstellen eines Listeners auf ein übergeordnetes Element](#einstellen_eines_listeners_auf_ein_übergeordnetes_element) verwenden wir [`event.currentTarget`](/de/docs/Web/API/Event/currentTarget). Im Gegensatz dazu verwenden wir in [Ereignis-Delegation](#ereignis-delegation) [`event.target`](/de/docs/Web/API/Event/target).

Der Unterschied besteht darin, dass sich `target` auf das Element bezieht, auf das das Ereignis ursprünglich ausgelöst wurde, während sich `currentTarget` auf das Element bezieht, an das dieser Ereignishandler angehängt ist.

Während `target` während eines aufsteigenden Ereignisses gleich bleibt, wird `currentTarget` für Ereignishandler unterschiedlich sein, die an verschiedene Elemente in der Hierarchie angehängt sind.

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

Beachten Sie, dass, wenn wir den Button anklicken, `target` jedes Mal das Button-Element ist, unabhängig davon, ob der Ereignishandler an den Button selbst, an das `<div>` oder an das `<body>`-Element angehängt ist. `currentTarget` hingegen identifiziert das Element, dessen Ereignishandler wir gerade ausführen:

{{embedlivesample("target und currentTarget")}}

Die `target`-Eigenschaft wird häufig in der Ereignis-Delegation verwendet, wie in unserem [Ereignis-Delegation](#ereignis-delegation)-Beispiel oben.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen, sehen Sie sich [Testen Sie Ihre Fähigkeiten: Events](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Events) an.

## Zusammenfassung

Sie sollten jetzt alles wissen, was Sie über Webereignisse in diesem frühen Stadium wissen müssen.
Wie erwähnt, sind Ereignisse eigentlich kein Bestandteil des Kern-JavaScripts — sie sind in den Browser-Web-APIs definiert.

Es ist auch wichtig zu verstehen, dass die verschiedenen Kontexte, in denen JavaScript verwendet wird, unterschiedliche Ereignismodelle haben — von Web-APIs bis hin zu anderen Bereichen wie Browser-Web-Erweiterungen und Node.js (Server-seitiges JavaScript).
Wir erwarten nicht, dass Sie jetzt alle diese Bereiche verstehen, aber es ist sicherlich hilfreich, die Grundlagen von Ereignissen zu verstehen, während Sie mit dem Erlernen der Webentwicklung fortfahren.

Als nächstes finden Sie eine Herausforderung, die Ihr Verständnis der letzten Themen testen wird.

## Siehe auch

- [domevents.dev](https://domevents.dev/)
  - : Eine nützliche interaktive Spielwiesen-App, die es ermöglicht, das Verhalten des DOM-Ereignissystems durch Erkundung zu lernen.
- [Ereignisreferenz](/de/docs/Web/Events)
  - : Die Haupt-MDN-Ereignisreferenz.
- [Ereignisreihenfolge](https://www.quirksmode.org/js/events_order.html)
  - : Eine hervorragend detaillierte Diskussion über Capture und Bubbling von Peter-Paul Koch.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

---
title: Ereignis-Bubbling
slug: Learn_web_development/Core/Scripting/Event_bubbling
l10n:
  sourceCommit: e68530dbce2b661c8860e9c6a1c70b1caca5a199
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

Wir haben gesehen, dass eine Webseite aus _Elementen_ besteht — Überschriften, Textabschnitten, Bildern, Buttons usw. — und dass Sie auf Ereignisse hören können, die diesen Elementen passieren. Zum Beispiel können Sie einen Listener zu einem Button hinzufügen, und er wird ausgeführt, wenn der Benutzer auf den Button klickt.

Wir haben auch gesehen, dass diese Elemente ineinander _verschachtelt_ sein können: Zum Beispiel könnte ein {{htmlelement("button")}} innerhalb eines {{htmlelement("div")}}-Elements platziert werden. In diesem Fall würden wir das `<div>`-Element ein _übergeordnetes_ Element nennen und den `<button>` ein _untergeordnetes_ Element.

In diesem Kapitel werden wir uns das **Ereignis-Bubbling** ansehen — dies ist das, was passiert, wenn Sie einen Ereignis-Listener zu einem übergeordneten Element hinzufügen und der Benutzer auf das untergeordnete Element klickt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, und Vertrautheit mit den JavaScript-Grundlagen, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Ereignisdelegation durch Ereignis-Bubbling oder Ereignis-Erfassung erreichen.</li>
          <li>Das Stoppen der Ereignisdelegation mit <code>stopPropagation()</code>.</li>
          <li>Zugriff auf Ereignisziele über das Ereignisobjekt.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Einführung in das Ereignis-Bubbling

Lassen Sie uns das Ereignis-Bubbling anhand eines Beispiels vorstellen und definieren.

### Einen Listener auf einem übergeordneten Element setzen

Betrachten Sie eine Webseite wie diese:

```html
<div id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>
```

Hier befindet sich der Button in einem anderen Element, einem {{HTMLElement("div")}}-Element. Wir sagen, dass das `<div>`-Element hier das **übergeordnete Element** des Elements ist, das es enthält. Was passiert, wenn wir einen Klick-Ereignishandler zum übergeordneten Element hinzufügen und dann auf den Button klicken?

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Einen Listener auf einem übergeordneten Element setzen', '100%', 200, "", "") }}

Sie werden sehen, dass das übergeordnete Element ein Klick-Ereignis auslöst, wenn der Benutzer auf den Button klickt:

```plain
You clicked on a DIV element
```

Das macht Sinn: Der Button befindet sich im `<div>`, also wenn Sie auf den Button klicken, klicken Sie implizit auch auf das Element, in dem er sich befindet.

### Bubbling-Beispiel

Was passiert, wenn wir Ereignis-Listener sowohl zum Button als auch zum übergeordneten Element hinzufügen?

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Lassen Sie uns versuchen, Klick-Ereignishandler zum Button, seinem übergeordneten Element (dem `<div>`) und dem {{HTMLElement("body")}}-Element, das beide enthält, hinzuzufügen:

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

Sie werden sehen, dass alle drei Elemente ein Klick-Ereignis auslösen, wenn der Benutzer auf den Button klickt:

```plain
You clicked on a BUTTON element
You clicked on a DIV element
You clicked on a BODY element
```

In diesem Fall:

- Das Klicken auf den Button löst zuerst aus.
- gefolgt von dem Klick auf sein übergeordnetes Element (das `<div>`-Element).
- gefolgt von dem Klick auf das übergeordnete `<div>`-Element (das `<body>`-Element).

Wir beschreiben dies, indem wir sagen, dass das Ereignis **von dem am weitesten innen liegenden Element, das angeklickt wurde, nach oben blubbert**.

Dieses Verhalten kann nützlich sein und kann auch unerwartete Probleme verursachen. In den nächsten Abschnitten werden wir ein Problem sehen, das es verursacht, und die Lösung dafür finden.

### Videoplayer-Beispiel

In diesem Beispiel enthält unsere Seite ein Video, das anfänglich verborgen ist, und einen Button mit der Beschriftung "Video anzeigen". Wir möchten die folgende Interaktion:

- Wenn der Benutzer auf den Button "Video anzeigen" klickt, soll das Kästchen mit dem Video angezeigt werden, aber das Video noch nicht abgespielt werden.
- Wenn der Benutzer auf das Video klickt, soll das Video abgespielt werden.
- Wenn der Benutzer irgendwo im Kästchen außerhalb des Videos klickt, soll das Kästchen verborgen werden.

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

Es umfasst:

- ein `<button>`-Element.
- ein `<div>`-Element, das anfänglich das `class="hidden"`-Attribut hat.
- ein `<video>`-Element, das im `<div>`-Element eingebettet ist.

Wir verwenden CSS, um Elemente mit der `"hidden"`-Klasse zu verbergen.

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

Das fügt drei `'click'`-Ereignis-Listener hinzu:

- einen auf dem `<button>`, der das `<div>` anzeigt, das das `<video>` enthält.
- einen auf dem `<video>`, der das Video abspielt.
- einen auf dem `<div>`, der das Video verbirgt.

Lassen Sie uns sehen, wie das funktioniert:

{{ EmbedLiveSample('Videoplayer-Beispiel', '100%', 500) }}

Sie sollten sehen, dass wenn Sie auf den Button klicken, das Kästchen und das darin enthaltene Video gezeigt werden. Aber wenn Sie dann auf das Video klicken, beginnt das Video zu spielen, aber das Kästchen wird erneut verborgen!

Das Video ist im `<div>` — es ist ein Teil davon — also ruft das Klicken auf das Video _beide_ Ereignishandler auf, was dieses Verhalten verursacht.

### Das Problem mit `stopPropagation()` beheben

Wie wir im letzten Abschnitt gesehen haben, kann Ereignis-Bubbling manchmal Probleme verursachen, aber es gibt eine Möglichkeit, es zu verhindern.
Das [`Event`](/de/docs/Web/API/Event)-Objekt hat eine Funktion namens [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), die, wenn sie innerhalb eines Ereignishandlers aufgerufen wird, verhindert, dass das Ereignis zu anderen Elementen hochblubbert.

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

Hier rufen wir einfach `stopPropagation()` auf dem Ereignisobjekt im Handler für das `<video>`-Element `'click'`-Ereignis auf. Dies wird verhindern, dass das Ereignis zum Kästchen hochblubbert. Versuchen Sie jetzt, auf den Button und dann auf das Video zu klicken:

{{EmbedLiveSample("Das Problem mit stopPropagation() beheben", '100%', 500)}}

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

## Ereignis-Erfassung

Eine alternative Form der Ereignisverarbeitung ist die _Ereignis-Erfassung_. Dies ist ähnlich wie Ereignis-Bubbling, jedoch ist die Reihenfolge umgekehrt: Anstatt dass das Ereignis zuerst auf dem am weitesten innen liegenden Element ausgelöst wird und dann auf sukzessiv weniger verschachtelten Elementen, wird das Ereignis zuerst auf dem am wenigsten verschachtelten Element ausgelöst und dann auf sukzessiv mehr verschachtelten Elementen, bis das Ziel erreicht ist.

Die Ereignis-Erfassung ist standardmäßig deaktiviert. Um sie zu aktivieren, müssen Sie die `capture`-Option in `addEventListener()` übergeben.

Dieses Beispiel ähnelt dem [Bubbling-Beispiel](#bubbling-beispiel), das wir zuvor gesehen haben, außer dass wir die `capture`-Option verwendet haben:

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

{{ EmbedLiveSample('Ereignis-Erfassung', '100%', 200, "", "") }}

In diesem Fall ist die Reihenfolge der Nachrichten umgekehrt: der `<body>`-Ereignishandler wird zuerst ausgelöst, gefolgt vom `<div>`-Ereignishandler, gefolgt vom `<button>`-Ereignishandler:

```plain
You clicked on a BODY element
You clicked on a DIV element
You clicked on a BUTTON element
```

Warum sich mit sowohl Erfassung als auch Bubbling beschäftigen? In den schlechten alten Zeiten, als Browser viel weniger übergreifend kompatibel waren als heute, nutzte Netscape nur die Ereignis-Erfassung, und der Internet Explorer nutzte nur das Ereignis-Bubbling. Als das W3C versuchte, das Verhalten zu standardisieren und einen Konsens zu erreichen, kamen sie zu diesem System, das beide umfasst, was moderne Browser implementieren.

Standardmäßig werden fast alle Ereignishandler in der Bubbling-Phase registriert, und das ergibt die meiste Zeit mehr Sinn.

## Ereignisdelegation

Im letzten Abschnitt haben wir ein Problem betrachtet, das durch Ereignis-Bubbling verursacht wird, und wie man es behebt. Ereignis-Bubbling ist jedoch nicht nur ärgerlich, es kann sehr nützlich sein. Insbesondere ermöglicht es die **Ereignisdelegation**. In dieser Praxis, wenn wir möchten, dass Code ausgeführt wird, wenn der Benutzer mit einem von vielen untergeordneten Elementen interagiert, setzen wir den Ereignis-Listener auf ihr übergeordnetes Element und lassen die Ereignisse, die auf ihnen passieren, zu ihrem übergeordneten Element hochblubben, anstatt den Ereignis-Listener auf jedes einzelne untergeordnete Element setzen zu müssen.

Lassen Sie uns zurück zu unserem ersten Beispiel gehen, bei dem wir die Hintergrundfarbe der gesamten Seite gesetzt haben, wenn der Benutzer auf einen Button klickte. Angenommen, die Seite ist in 16 Kacheln unterteilt, und wir möchten, dass jede Kachel eine zufällige Farbe annimmt, wenn der Benutzer auf diese Kachel klickt.

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

Jetzt könnten wir in JavaScript für jede Kachel einen Klick-Ereignishandler hinzufügen. Aber eine viel einfachere und effizientere Option ist es, den Klick-Ereignishandler auf dem Elternteil zu setzen und sich auf das Ereignis-Bubbling zu verlassen, um sicherzustellen, dass der Handler ausgeführt wird, wenn der Benutzer auf eine Kachel klickt:

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

{{ EmbedLiveSample('Ereignisdelegation', '100%', 430, "", "") }}

> [!NOTE]
> In diesem Beispiel verwenden wir `event.target`, um das Element zu erhalten, das das Ziel des Ereignisses war (das heißt, das am weitesten innen liegende Element). Wenn wir auf das Element zugreifen möchten, das dieses Ereignis gehandhabt hat (in diesem Fall der Container), könnten wir `event.currentTarget` verwenden.

> [!NOTE]
> Sehen Sie [useful-eventtarget.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/useful-eventtarget.html) für den vollständigen Quellcode; sehen Sie es auch [live ausgeführt](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html) hier.

## `target` und `currentTarget`

Wenn Sie sich die Beispiele genau ansehen, die wir auf dieser Seite eingeführt haben, werden Sie sehen, dass wir zwei verschiedene Eigenschaften des Ereignisobjekts verwenden, um auf das angeklickte Element zuzugreifen. Im Abschnitt [Einen Listener auf einem übergeordneten Element setzen](#einen_listener_auf_einem_übergeordneten_element_setzen) verwenden wir [`event.currentTarget`](/de/docs/Web/API/Event/currentTarget). Im Abschnitt [Ereignisdelegation](#ereignisdelegation) verwenden wir jedoch [`event.target`](/de/docs/Web/API/Event/target).

Der Unterschied besteht darin, dass sich `target` auf das Element bezieht, auf dem das Ereignis ursprünglich ausgelöst wurde, während sich `currentTarget` auf das Element bezieht, auf das dieser Ereignishandler angewendet wurde.

Während `target` gleich bleibt, während ein Ereignis hochblubbert, wird `currentTarget` für Ereignishandler, die auf verschiedene Elemente in der Hierarchie angewendet werden, unterschiedlich sein.

Wir können dies sehen, wenn wir das [Bubbling-Beispiel](#bubbling-beispiel) oben leicht anpassen. Wir verwenden dasselbe HTML wie zuvor:

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Das JavaScript ist fast das Gleiche, außer dass wir sowohl `target` als auch `currentTarget` protokollieren:

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

Beachten Sie, dass wenn wir auf den Button klicken, `target` jedes Mal das Button-Element ist, unabhängig davon, ob der Ereignishandler auf dem Button selbst, auf dem `<div>` oder auf dem `<body>` angebracht ist. `currentTarget` hingegen identifiziert das Element, dessen Ereignishandler wir gerade ausführen:

{{embedlivesample("target und currentTarget")}}

Die `target`-Eigenschaft wird häufig in der Ereignisdelegation verwendet, wie in unserem Beispiel [Ereignisdelegation](#ereignisdelegation) oben.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Test your skills: Events](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Events).

## Zusammenfassung

Sie sollten nun alles wissen, was Sie über Webereignisse in diesem frühen Stadium wissen müssen.
Wie erwähnt, gehören Ereignisse eigentlich nicht zum Kern von JavaScript — sie sind in den Web-APIs der Browser definiert.

Es ist auch wichtig zu verstehen, dass die unterschiedlichen Kontexte, in denen JavaScript verwendet wird, unterschiedliche Ereignismodelle haben — von Web-APIs bis hin zu anderen Bereichen wie Browser-WebExtensions und Node.js (serverseitiges JavaScript).
Wir erwarten nicht, dass Sie jetzt alle diese Bereiche verstehen, aber es hilft sicherlich, die Grundlagen von Ereignissen zu verstehen, wenn Sie mit dem Lernen der Webentwicklung voranschreiten.

Als Nächstes finden Sie eine Herausforderung, die Ihr Verständnis der letzten Themen testen wird.

## Siehe auch

- [domevents.dev](https://domevents.dev/)
  - : Eine nützliche interaktive Playground-App, die es ermöglicht, das Verhalten des DOM-Ereignissystems durch Erkundung zu erlernen.
- [Event-Referenz](/de/docs/Web/Events)
  - : Die Haupt-Ereignisreferenz von MDN.
- [Ereignis-Reihenfolge](https://www.quirksmode.org/js/events_order.html)
  - : Eine ausgezeichnet detaillierte Diskussion über Erfassung und Bubbling von Peter-Paul Koch.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

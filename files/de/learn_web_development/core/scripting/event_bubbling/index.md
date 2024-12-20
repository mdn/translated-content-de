---
title: Ereignis-Bubbling
slug: Learn_web_development/Core/Scripting/Event_bubbling
l10n:
  sourceCommit: eb20babb96149f98bcbf7817b58e305c5297f2e1
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

Wir haben gesehen, dass eine Webseite aus _Elementen_ besteht – Überschriften, Textabsätzen, Bildern, Buttons und so weiter – und dass Sie Ereignisse überwachen können, die bei diesen Elementen auftreten. Zum Beispiel könnten Sie einen Listener zu einem Button hinzufügen, der ausgeführt wird, wenn der Benutzer auf den Button klickt.

Wir haben auch gesehen, dass diese Elemente _verschachtelt_ sein können: Ein {{htmlelement("button")}} könnte zum Beispiel innerhalb eines {{htmlelement("div")}}-Elements platziert werden. In diesem Fall würden wir das `<div>`-Element als _Elternelement_ bezeichnen und das `<button>` als _Kindelement_.

In diesem Kapitel betrachten wir **Ereignis-Bubbling** – das ist das, was passiert, wenn Sie einen Ereignislistener auf ein Elternelement setzen und der Benutzer auf das Kindelement klickt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, und Vertrautheit mit den JavaScript-Grundlagen, die in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Ereignisdelegierung, erreicht durch Ereignis-Bubbling oder Ereignis-Capturing.</li>
          <li>Stoppen der Ereignisdelegierung mit <code>stopPropagation()</code>.</li>
          <li>Zugriff auf Ereignisziele aus dem Ereignisobjekt.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Einführung in das Ereignis-Bubbling

Lassen Sie uns Ereignis-Bubbling anhand eines Beispiels einführen und definieren.

### Setzen eines Listeners auf ein Elternelement

Betrachten Sie eine Webseite wie diese:

```html
<div id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>
```

Hier befindet sich der Button innerhalb eines anderen Elements, eines {{HTMLElement("div")}}-Elements. Wir sagen, dass hier das `<div>`-Element der **Elternteil** des Elements ist, das es enthält. Was passiert, wenn wir einen Klick-Ereignishandler auf das Elternteil setzen und dann den Button klicken?

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Setzen eines Listeners auf ein Elternelement', '100%', 200, "", "") }}

Sie werden sehen, dass das Elternteil ein Klick-Ereignis auslöst, wenn der Benutzer den Button klickt:

```plain
You clicked on a DIV element
```

Das macht Sinn: Der Button befindet sich innerhalb des `<div>`, also klicken Sie implizit auch auf das Element, in dem er sich befindet.

### Bubbling-Beispiel

Was passiert, wenn wir Ereignislistener auf den Button _und_ das Elternelement hinzufügen?

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Lassen Sie uns Klick-Ereignishandler zum Button, seinem Elternteil (dem `<div>`) und dem {{HTMLElement("body")}}-Element hinzufügen, das beide enthält:

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

Sie werden sehen, dass alle drei Elemente ein Klick-Ereignis auslösen, wenn der Benutzer den Button klickt:

```plain
You clicked on a BUTTON element
You clicked on a DIV element
You clicked on a BODY element
```

In diesem Fall:

- wird zuerst der Klick auf den Button ausgelöst.
- gefolgt von einem Klick auf seinen Elternteil (das `<div>`-Element).
- gefolgt von einem Klick auf den Elternteil des `<div>`-Elements (das `<body>`-Element).

Wir beschreiben dies, indem wir sagen, dass das Ereignis von dem innersten Element, das geklickt wurde, **aufsteigt**.

Dieses Verhalten kann nützlich sein und auch unerwartete Probleme verursachen. In den nächsten Abschnitten werden wir ein Problem sehen, das es verursacht, und die Lösung finden.

### Video-Player-Beispiel

In diesem Beispiel enthält unsere Seite ein Video, das zunächst verborgen ist, und einen Button mit der Beschriftung „Video anzeigen“. Wir wollen die folgende Interaktion:

- Wenn der Benutzer auf den Button „Video anzeigen“ klickt, wird das Kästchen, das das Video enthält, angezeigt, aber das Video wird noch nicht abgespielt.
- Wenn der Benutzer auf das Video klickt, beginnt das Video zu spielen.
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

Es beinhaltet:

- ein `<button>`-Element.
- ein `<div>`-Element, das zunächst ein `class="hidden"`-Attribut besitzt.
- ein `<video>`-Element, das innerhalb des `<div>`-Elements verschachtelt ist.

Wir verwenden CSS, um Elemente mit der Klasse `"hidden"` auszublenden.

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

Dies fügt drei `'click'`-Ereignislistener hinzu:

- einen auf dem `<button>`, der das `<div>` zeigt, das das `<video>` enthält.
- einen auf dem `<video>`, der das Video startet.
- einen auf dem `<div>`, der das Video ausblendet.

Lassen Sie uns sehen, wie das funktioniert:

{{ EmbedLiveSample('Video-Player-Beispiel', '100%', 500) }}

Sie sollten sehen, dass wenn Sie den Button klicken, das Kästchen und das darin enthaltene Video angezeigt werden. Wenn Sie dann auf das Video klicken, beginnt das Video zu spielen, aber das Kästchen wird wieder ausgeblendet!

Das Video befindet sich innerhalb des `<div>` – es ist ein Teil davon – also führt das Klicken auf das Video _beide_ Ereignishandler aus, was dieses Verhalten verursacht.

### Das Problem mit `stopPropagation()` beheben

Wie wir im letzten Abschnitt gesehen haben, kann das Ereignis-Bubbling manchmal Probleme verursachen, aber es gibt eine Möglichkeit, es zu verhindern.
Das [`Event`](/de/docs/Web/API/Event)-Objekt hat eine Funktion namens [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), die innen eines Ereignishandlers aufgerufen wird und das Aufsteigen des Ereignisses zu anderen Elementen verhindert.

Wir können unser derzeitiges Problem lösen, indem wir das JavaScript wie folgt ändern:

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

Alles, was wir hier tun, ist `stopPropagation()` auf dem Ereignisobjekt im Handler für das `'click'`-Ereignis des `<video>`-Elements aufzurufen. Dies verhindert, dass das Ereignis zum Kästchen aufsteigt. Versuchen Sie nun, auf den Button und dann auf das Video zu klicken:

{{EmbedLiveSample("Das Problem mit stopPropagation() lösen", '100%', 500)}}

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

Eine alternative Form der Ereignisausbreitung ist das _Ereignis-Capturing_. Dies ist wie das Ereignis-Bubbling, aber die Reihenfolge ist umgekehrt: Statt dass das Ereignis zuerst auf dem innersten Element ausgelöst wird, wird es auf dem äußersten Element ausgelöst und dann auf den jeweils tiefer verschachtelten Elementen, bis das Ziel erreicht ist.

Das Ereignis-Capturing ist standardmäßig deaktiviert. Um es zu aktivieren, müssen Sie die `capture`-Option in `addEventListener()` angeben.

Dieses Beispiel entspricht genau dem [Bubbling-Beispiel](#bubbling-beispiel), das wir zuvor gesehen haben, außer dass wir die `capture`-Option verwendet haben:

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

In diesem Fall ist die Reihenfolge der Nachrichten umgekehrt: Der `<body>`-Ereignishandler wird zuerst ausgelöst, gefolgt vom `<div>`-Ereignishandler, gefolgt vom `<button>`-Ereignishandler:

```plain
You clicked on a BODY element
You clicked on a DIV element
You clicked on a BUTTON element
```

Warum sich mit Capturing und Bubbling beschäftigen? In den schlechten alten Zeiten, als Browser viel weniger miteinander kompatibel waren als heute, benutzte Netscape nur Ereignis-Capturing und Internet Explorer nur Ereignis-Bubbling. Als das W3C beschloss, das Verhalten zu standardisieren und einen Konsens zu erreichen, führten sie dieses System ein, das beide Mechanismen enthalten sollte, was moderne Browser implementieren.

Standardmäßig sind fast alle Ereignishandler in der Bubbling-Phase registriert, und das ergibt die meiste Zeit mehr Sinn.

## Ereignis-Delegierung

Im letzten Abschnitt haben wir ein Problem durch das Ereignis-Bubbling und wie man es beheben kann betrachtet. Ereignis-Bubbling ist jedoch nicht nur lästig: es kann sehr nützlich sein. Insbesondere ermöglicht es die **Ereignis-Delegierung**. Bei dieser Praxis setzen wir, wenn wir möchten, dass ein Code ausgeführt wird, wenn der Benutzer mit einem Element einer großen Menge von Kindelementen interagiert, den Ereignis-Listener auf ihrem Elternteil und lassen Ereignisse, die auf ihnen passieren, zu ihrem Elternteil aufsteigen, anstatt den Ereignis-Listener auf jedem einzelnen Kind zu setzen.

Gehen wir zurück zu unserem ersten Beispiel, bei dem wir die Hintergrundfarbe der gesamten Seite verändern, wenn der Benutzer auf einen Button klickt. Angenommen, die Seite ist stattdessen in 16 Kacheln unterteilt, und wir möchten jede Kachel in einer zufälligen Farbe setzen, wenn der Benutzer auf diese Kachel klickt.

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

Wir haben ein bisschen CSS, um die Größe und Position der Kacheln festzulegen:

```css
#container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
}
```

Jetzt im JavaScript könnten wir einen Klick-Ereignishandler für jede Kachel hinzufügen. Aber eine viel einfachere und effizientere Option ist es, den Klick-Ereignishandler auf das Elternelement zu setzen und sich auf Ereignis-Bubbling zu verlassen, um sicherzustellen, dass der Handler ausgeführt wird, wenn der Benutzer auf eine Kachel klickt:

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

Das Ergebnis ist wie folgt (versuchen Sie hier und da zu klicken):

{{ EmbedLiveSample('Ereignis-Delegierung', '100%', 430, "", "") }}

> [!NOTE]
> In diesem Beispiel verwenden wir `event.target`, um das Element zu erhalten, das das Ziel des Ereignisses war (das heißt, das innerste Element). Wenn wir auf das Element zugreifen wollten, das dieses Ereignis behandelt hat (in diesem Fall der Container), könnten wir `event.currentTarget` verwenden.

> [!NOTE]
> Sehen Sie sich [useful-eventtarget.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/useful-eventtarget.html) für den vollständigen Quellcode an; sehen Sie es auch [hier live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html).

## `target` und `currentTarget`

Wenn Sie die in dieser Seite eingeführten Beispiele genau betrachten, werden Sie sehen, dass wir zwei verschiedene Eigenschaften des Ereignisobjekts verwenden, um auf das Element zuzugreifen, das geklickt wurde. Im Abschnitt [Setzen eines Listeners auf ein Elternelement](#setzen_eines_listeners_auf_ein_elternelement) verwenden wir [`event.currentTarget`](/de/docs/Web/API/Event/currentTarget). Im Abschnitt [Ereignis-Delegierung](#ereignis-delegierung) dagegen verwenden wir [`event.target`](/de/docs/Web/API/Event/target).

Der Unterschied ist, dass `target` sich auf das Element bezieht, auf dem das Ereignis ursprünglich ausgelöst wurde, während `currentTarget` sich auf das Element bezieht, an das dieser Ereignis-Handler angehängt wurde.

Während `target` gleich bleibt, während ein Ereignis aufsteigt, wird `currentTarget` für Ereignis-Handler unterschiedlich sein, die an verschiedene Elemente im Hierarchiebaum angehängt sind.

Wir können das sehen, wenn wir das [Bubbling-Beispiel](#bubbling-beispiel) leicht anpassen. Wir verwenden das gleiche HTML wie zuvor:

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

Beachten Sie, dass wenn wir den Button klicken, `target` jedes Mal das Button-Element ist, egal ob der Ereignis-Handler an den Button selbst, an das `<div>` oder an das `<body>` angehängt ist. `currentTarget` jedoch identifiziert das Element, dessen Ereignis-Handler wir gerade ausführen:

{{embedlivesample("target und currentTarget")}}

Die `target`-Eigenschaft wird häufig in der Ereignis-Delegierung verwendet, wie in unserem [Ereignis-Delegierungs-Beispiel](#ereignis-delegierung) oben.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — sehen Sie sich [Testen Sie Ihre Fähigkeiten: Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Building_blocks/Test_your_skills:_Events) an.

## Zusammenfassung

Sie sollten jetzt alles wissen, was Sie über Webereignisse zu diesem frühen Zeitpunkt wissen müssen.
Wie erwähnt, gehören Ereignisse nicht wirklich zum Kern von JavaScript — sie sind in Browser-Web-APIs definiert.

Es ist auch wichtig zu verstehen, dass die verschiedenen Kontexte, in denen JavaScript verwendet wird, unterschiedliche Ereignismodelle haben — von Web-APIs zu anderen Bereichen wie Browser-WebExtensions und Node.js (serverseitiges JavaScript).
Wir erwarten nicht, dass Sie jetzt alle diese Bereiche verstehen, aber es hilft sicherlich, die Grundlagen von Ereignissen zu verstehen, während Sie mit dem Erlernen der Webentwicklung voranschreiten.

Als Nächstes finden Sie eine Herausforderung, die Ihr Verständnis der letzten Themen testen wird.

## Siehe auch

- [domevents.dev](https://domevents.dev/)
  - : Eine nützliche interaktive Playground-Anwendung, die das Lernen über das Verhalten des DOM-Ereignissystems durch Erkundung ermöglicht.
- [Ereignisreferenz](/de/docs/Web/Events)
  - : Die Haupt-MDN-Ereignisreferenz.
- [Ereignisreihenfolge](https://www.quirksmode.org/js/events_order.html)
  - : Eine ausgezeichnet und detailliert ausgearbeitete Diskussion über Capturing und Bubbling von Peter-Paul Koch.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

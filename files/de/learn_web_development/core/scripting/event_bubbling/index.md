---
title: Event Bubbling
slug: Learn_web_development/Core/Scripting/Event_bubbling
l10n:
  sourceCommit: c529f2672b3541cc28ea687ff9266f98b1734191
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Test_your_skills/Events", "Learn_web_development/Core/Scripting")}}

Wir haben gesehen, dass eine Webseite aus _Elementen_ besteht – Überschriften, Textabsätzen, Bildern, Buttons und so weiter – und dass Sie auf Ereignisse reagieren können, die bei diesen Elementen auftreten. Sie könnten beispielsweise einem Button einen Event Listener hinzufügen, der ausgeführt wird, wenn jemand auf den Button klickt.

Wir haben auch gesehen, dass diese Elemente ineinander _verschachtelt_ sein können: Beispielsweise könnte ein {{htmlelement("button")}} innerhalb eines {{htmlelement("div")}}-Elements stehen. In diesem Fall bezeichnen wir das `<div>`-Element als _Elternelement_ und das `<button>`-Element als _Kindelement_.

In diesem Kapitel sehen wir uns **Event Bubbling** an – also das, was passiert, wenn Sie einem Elternelement einen Event Listener hinzufügen und auf das Kindelement geklickt wird.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a> sowie Vertrautheit mit den JavaScript-Grundlagen aus den vorherigen Lektionen.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Event Delegation durch Event Bubbling oder Event Capturing.</li>
          <li>Das Unterbinden der Ereignisweitergabe mit <code>stopPropagation()</code>.</li>
          <li>Der Zugriff auf Ereignisziele über das Event-Objekt.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Event Bubbling

Sehen wir uns Event Bubbling anhand eines Beispiels an.

### Einen Event Listener auf einem Elternelement registrieren

Betrachten Sie eine Webseite wie diese:

```html
<div id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>
```

Hier befindet sich der Button innerhalb eines anderen Elements, eines {{HTMLElement("div")}}-Elements. Das `<div>`-Element ist das **Elternelement** des Elements, das es enthält. Was passiert, wenn wir dem Elternelement einen Click-Event-Handler hinzufügen und dann auf den Button klicken?

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Setting a listener on a parent element', '100%', 200, "", "") }}

Sie sehen, dass beim Klick auf den Button ein Click-Event für das Elternelement ausgelöst wird:

```plain
You clicked on a DIV element
```

Das ist nachvollziehbar: Der Button befindet sich innerhalb des `<div>`-Elements. Wenn Sie auf den Button klicken, klicken Sie damit indirekt auch auf das Element, in dem er sich befindet.

### Beispiel für Bubbling

Was passiert, wenn wir _sowohl_ dem Button _als auch_ dem Elternelement Event Listener hinzufügen?

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Fügen wir dem Button, seinem Elternelement (dem `<div>`) und dem {{HTMLElement("body")}}-Element, das beide enthält, Click-Event-Handler hinzu:

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

Sie sehen, dass beim Klick auf den Button für alle drei Elemente ein Click-Event ausgelöst wird:

```plain
You clicked on a BUTTON element
You clicked on a DIV element
You clicked on a BODY element
```

In diesem Fall geschieht Folgendes:

- Zuerst wird das Click-Event auf dem Button ausgelöst.
- Danach folgt das Click-Event auf seinem Elternelement (dem `<div>`-Element).
- Anschließend folgt das Click-Event auf dem Elternelement des `<div>`-Elements (dem `<body>`-Element).

Wir beschreiben das so: Das Ereignis **steigt** vom innersten Element, auf das geklickt wurde, **nach oben**.

Dieses Verhalten kann nützlich sein, aber auch unerwartete Probleme verursachen. In den nächsten Abschnitten sehen wir uns ein solches Problem und seine Lösung an.

### Beispiel mit einem Videoplayer

In diesem Beispiel enthält unsere Seite ein Video, das zunächst verborgen ist, und einen Button mit der Beschriftung „Video anzeigen“. Wir möchten folgendes Verhalten erreichen:

- Wenn auf den Button „Video anzeigen“ geklickt wird, soll die Box mit dem Video angezeigt werden, ohne dass das Video bereits abgespielt wird.
- Wenn auf das Video geklickt wird, soll die Wiedergabe beginnen.
- Wenn innerhalb der Box außerhalb des Videos auf eine Stelle geklickt wird, soll die Box ausgeblendet werden.

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
- ein `<div>`-Element, das anfangs ein `class="hidden"`-Attribut hat.
- ein `<video>`-Element, das innerhalb des `<div>`-Elements verschachtelt ist.

Wir verwenden CSS, um Elemente mit der Klasse `"hidden"` auszublenden.

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

Damit werden drei `'click'`-Event-Listener hinzugefügt:

- einer auf dem `<button>`, der das `<div>` mit dem `<video>` anzeigt.
- einer auf dem `<video>`, der die Wiedergabe des Videos startet.
- einer auf dem `<div>`, der das Video ausblendet.

Sehen wir uns an, wie das funktioniert:

{{ EmbedLiveSample('Video_player_example', '100%', 500) }}

Wenn Sie auf den Button klicken, sollten die Box und das darin enthaltene Video angezeigt werden. Wenn Sie dann aber auf das Video klicken, beginnt zwar die Wiedergabe, doch die Box wird wieder ausgeblendet!

Das Video befindet sich innerhalb des `<div>`-Elements – es ist Teil davon. Deshalb werden beim Klick auf das Video _beide_ Event-Handler ausgeführt, was zu diesem Verhalten führt.

### Das Problem mit `stopPropagation()` beheben

Wie wir im letzten Abschnitt gesehen haben, kann Event Bubbling manchmal Probleme verursachen. Es gibt jedoch eine Möglichkeit, es zu verhindern.
Das [`Event`](/de/docs/Web/API/Event)-Objekt stellt eine Funktion namens [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) bereit. Wird sie innerhalb eines Event-Handlers aufgerufen, verhindert sie, dass das Ereignis zu anderen Elementen aufsteigt.

Wir können unser Problem beheben, indem wir das JavaScript wie folgt ändern:

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

Hier rufen wir lediglich `stopPropagation()` auf dem Event-Objekt im Handler für das `'click'`-Event des `<video>`-Elements auf. Dadurch steigt dieses Ereignis nicht mehr zur Box auf. Klicken Sie jetzt auf den Button und anschließend auf das Video:

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

## Event Capturing

Eine andere Form der Ereignisweitergabe ist _Event Capturing_. Es ähnelt Event Bubbling, aber die Reihenfolge ist umgekehrt: Statt zuerst auf dem innersten Zielelement und anschließend auf immer weniger tief verschachtelten Elementen wird das Ereignis zuerst auf dem _am wenigsten tief verschachtelten_ Element ausgelöst und dann auf immer tiefer verschachtelten Elementen, bis es das Zielelement erreicht.

Event Capturing ist standardmäßig deaktiviert. Um es zu aktivieren, müssen Sie die Option `capture` an `addEventListener()` übergeben.

Dieses Beispiel entspricht dem zuvor gezeigten [Bubbling-Beispiel](#beispiel_für_bubbling), verwendet jedoch die Option `capture`:

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

In diesem Fall ist die Reihenfolge der Meldungen umgekehrt: Zuerst wird der Event-Handler des `<body>`-Elements ausgeführt, dann der des `<div>`-Elements und schließlich der des `<button>`-Elements:

```plain
You clicked on a BODY element
You clicked on a DIV element
You clicked on a BUTTON element
```

Warum gibt es sowohl Capturing als auch Bubbling? Früher, als Browser noch deutlich weniger miteinander kompatibel waren, verwendete Netscape nur Event Capturing und Internet Explorer nur Event Bubbling. Als das W3C versuchte, das Verhalten zu standardisieren und einen Konsens zu finden, entstand schließlich dieses System, das beides umfasst und von modernen Browsern implementiert wird.

Standardmäßig werden fast alle Event-Handler für die Bubbling-Phase registriert. Das ist in den meisten Fällen sinnvoller.

## Event Delegation

Im letzten Abschnitt haben wir ein durch Event Bubbling verursachtes Problem und seine Lösung betrachtet. Event Bubbling ist aber nicht nur lästig: Es kann auch sehr nützlich sein. Insbesondere ermöglicht es **Event Delegation**. Wenn Code ausgeführt werden soll, sobald mit einem beliebigen von vielen Kindelementen interagiert wird, registrieren wir den Event Listener auf deren Elternelement. Die Ereignisse auf den Kindelementen steigen dann zum Elternelement auf, sodass wir nicht für jedes Kindelement einzeln einen Event Listener registrieren müssen.

Kehren wir zu unserem [ersten Beispiel](/de/docs/Learn_web_development/Core/Scripting/Events#an_example_handling_a_click_event) zurück, in dem wir die Hintergrundfarbe der gesamten Seite geändert haben, wenn auf einen Button geklickt wurde. Nehmen wir stattdessen an, die Seite sei in 16 Kacheln unterteilt, und wir möchten jeder Kachel eine zufällige Farbe geben, wenn auf sie geklickt wird.

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

Mit etwas CSS legen wir die Größe und Position der Kacheln fest:

```css
#container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
}
```

Nun könnten wir in JavaScript für jede Kachel einen Click-Event-Handler hinzufügen. Viel einfacher und effizienter ist es jedoch, den Click-Event-Handler auf dem Elternelement zu registrieren und Event Bubbling dafür zu nutzen, dass der Handler beim Klick auf eine Kachel ausgeführt wird:

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

Das Ergebnis sieht so aus (probieren Sie aus, auf verschiedene Stellen zu klicken):

{{ EmbedLiveSample('Event delegation', '100%', 430, "", "") }}

> [!NOTE]
> In diesem Beispiel verwenden wir `event.target`, um das Element zu ermitteln, das Ziel des Ereignisses war (also das innerste Element). Wenn wir auf das Element zugreifen möchten, das dieses Ereignis verarbeitet hat (in diesem Fall den Container), können wir `event.currentTarget` verwenden.

## `target` und `currentTarget`

Wenn Sie sich die Beispiele auf dieser Seite genauer ansehen, werden Sie feststellen, dass wir zwei verschiedene Eigenschaften des Event-Objekts verwenden, um auf das angeklickte Element zuzugreifen. In [Einen Event Listener auf einem Elternelement registrieren](#einen_event_listener_auf_einem_elternelement_registrieren) verwenden wir [`event.currentTarget`](/de/docs/Web/API/Event/currentTarget). Bei der [Event Delegation](#event_delegation) verwenden wir dagegen [`event.target`](/de/docs/Web/API/Event/target).

Der Unterschied besteht darin, dass `target` auf das Element verweist, auf dem das Ereignis ursprünglich ausgelöst wurde, während `currentTarget` auf das Element verweist, an dem dieser Event-Handler registriert ist.

Während `target` beim Aufsteigen eines Ereignisses gleich bleibt, unterscheidet sich `currentTarget` bei Event-Handlern, die an verschiedenen Elementen der Hierarchie registriert sind.

Das können wir sehen, wenn wir das obige [Bubbling-Beispiel](#beispiel_für_bubbling) leicht anpassen. Wir verwenden dasselbe HTML wie zuvor:

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Das JavaScript ist fast identisch, allerdings protokollieren wir sowohl `target` als auch `currentTarget`:

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

Beachten Sie: Wenn wir auf den Button klicken, ist `target` jedes Mal das Button-Element – unabhängig davon, ob der Event-Handler am Button selbst, am `<div>` oder am `<body>` registriert ist. `currentTarget` bezeichnet dagegen das Element, dessen Event-Handler gerade ausgeführt wird:

{{embedlivesample("target and currentTarget")}}

Die Eigenschaft `target` wird häufig bei Event Delegation verwendet, wie in unserem obigen [Beispiel für Event Delegation](#event_delegation).

## Zusammenfassung

Sie sollten nun alles wissen, was Sie in dieser frühen Phase über Web-Events wissen müssen. Wie erwähnt, sind Events nicht Teil der JavaScript-Kernsprache – sie werden durch Web-APIs des Browsers definiert.

Im nächsten Artikel finden Sie einige Tests, mit denen Sie überprüfen können, wie gut Sie die Informationen über Events verstanden und behalten haben.

## Siehe auch

- [domevents.dev](https://domevents.dev/)
  - : Eine nützliche interaktive Anwendung, mit der Sie das Verhalten des DOM-Event-Systems erkunden und verstehen können.
- [DOM-Events](/de/docs/Web/API/Document_Object_Model/Events)
  - : Ein umfassender Leitfaden zum Verständnis und zur Verarbeitung von Events.
- [Reihenfolge von Events](https://www.quirksmode.org/js/events_order.html)
  - : Eine ausführliche Erläuterung von Capturing und Bubbling von Peter-Paul Koch.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Test_your_skills/Events", "Learn_web_development/Core/Scripting")}}

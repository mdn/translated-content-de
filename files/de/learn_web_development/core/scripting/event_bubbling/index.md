---
title: Ereignis-Bubbling
slug: Learn_web_development/Core/Scripting/Event_bubbling
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

Wir haben gesehen, dass eine Webseite aus _Elementen_ besteht — Überschriften, Textabschnitten, Bildern, Buttons usw. — und dass Sie auf Ereignisse hören können, die bei diesen Elementen auftreten. Zum Beispiel könnten Sie einen Listener zu einem Button hinzufügen, der ausgeführt wird, wenn der Benutzer den Button klickt.

Wir haben auch gesehen, dass diese Elemente _ineinander verschachtelt_ sein können: Ein {{htmlelement("button")}} könnte beispielsweise in einem {{htmlelement("div")}}-Element platziert sein. In diesem Fall würden wir das `<div>`-Element als _übergeordnetes_ Element bezeichnen und den `<button>` als _untergeordnetes_ Element.

In diesem Kapitel schauen wir uns **Ereignis-Bubbling** an — das ist das, was passiert, wenn Sie einen Ereignis-Listener zu einem übergeordneten Element hinzufügen und der Benutzer das untergeordnete Element klickt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, die in vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Ereignisdelegation, erreicht durch Ereignis-Bubbling oder Ereignis-Erfassung.</li>
          <li>Stoppen der Ereignisdelegation mit <code>stopPropagation()</code>.</li>
          <li>Zugriff auf Ereignisziele aus dem Ereignisobjekt.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Einführung in Ereignis-Bubbling

Lassen Sie uns Ereignis-Bubbling anhand eines Beispiels einführen und definieren.

### Setzen eines Listeners auf ein übergeordnetes Element

Betrachten Sie eine Webseite wie diese:

```html
<div id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>
```

Hier befindet sich der Button in einem anderen Element, einem {{HTMLElement("div")}}-Element. Wir sagen, dass das `<div>`-Element hier das **übergeordnete** Element des enthaltenen Elements ist. Was passiert, wenn wir einen Klick-Ereignishandler auf das übergeordnete Element setzen und dann den Button klicken?

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Setting a listener on a parent element', '100%', 200, "", "") }}

Sie werden sehen, dass das übergeordnete Element ein Klickevent auslöst, wenn der Benutzer den Button klickt:

```plain
You clicked on a DIV element
```

Das ergibt Sinn: Der Button befindet sich innerhalb des `<div>`, also klicken Sie beim Klicken auf den Button implizit auch auf das Element, in dem es sich befindet.

### Bubbling-Beispiel

Was passiert, wenn wir Ereignis-Listener sowohl dem Button _als auch_ dem übergeordneten Element hinzufügen?

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Versuchen wir, Klick-Ereignishandler dem Button, seinem übergeordneten Element (dem `<div>`) und dem {{HTMLElement("body")}}-Element hinzuzufügen, das beide enthält:

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

Sie werden sehen, dass alle drei Elemente ein Klickevent auslösen, wenn der Benutzer den Button klickt:

```plain
You clicked on a BUTTON element
You clicked on a DIV element
You clicked on a BODY element
```

In diesem Fall:

- wird der Klick auf den Button zuerst ausgelöst.
- gefolgt von dem Klick auf sein übergeordnetes Element (das `<div>`-Element).
- gefolgt von dem Klick auf das übergeordnete Element des `<div>` (das `<body>`-Element).

Wir beschreiben dies, indem wir sagen, dass das Ereignis **von innen** nach außen durch die Elemente "hochblubbert".

Dieses Verhalten kann nützlich sein und auch unerwartete Probleme verursachen. In den folgenden Abschnitten werden wir ein Problem sehen, das es verursacht, und die Lösung finden.

### Videoplayer-Beispiel

In diesem Beispiel enthält unsere Seite ein Video, das zunächst verborgen ist, und einen Button mit der Aufschrift "Video anzeigen". Wir möchten folgende Interaktion:

- Wenn der Benutzer den "Video anzeigen" Button klickt, zeigen Sie die Box, die das Video enthält, aber starten Sie das Video noch nicht.
- Wenn der Benutzer auf das Video klickt, starten Sie das Video.
- Wenn der Benutzer irgendwo in der Box außerhalb des Videos klickt, verstecken Sie die Box.

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
- ein `<div>`-Element, das anfangs das Attribut `class="hidden"` hat.
- ein `<video>`-Element, eingebettet im `<div>`-Element.

Wir verwenden CSS, um Elemente mit der Klasse `"hidden"` zu verbergen.

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

Dies fügt drei `'click'` Ereignis-Listener hinzu:

- einen auf dem `<button>`, welcher das `<div>`, das das `<video>` enthält, zeigt.
- einen auf dem `<video>`, welcher das Video startet.
- einen auf dem `<div>`, welcher das Video verbirgt.

Mal sehen, wie das funktioniert:

{{ EmbedLiveSample('Video_player_example', '100%', 500) }}

Sie sollten sehen, dass wenn Sie den Button klicken, die Box und das Video darin angezeigt werden. Aber wenn Sie dann auf das Video klicken, startet das Video, aber die Box wird wieder verborgen!

Das Video befindet sich im `<div>` — es ist ein Teil davon — also führt das Klicken auf das Video _beide_ Ereignishandler aus, was zu diesem Verhalten führt.

### Das Problem mit `stopPropagation()` beheben

Wie wir im letzten Abschnitt gesehen haben, kann Ereignis-Bubbling manchmal Probleme verursachen, aber es gibt eine Möglichkeit, dies zu verhindern.
Das [`Event`](/de/docs/Web/API/Event) Objekt verfügt über eine Funktion namens [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), die, wenn sie innerhalb eines Ereignishandlers aufgerufen wird, verhindert, dass das Ereignis zu anderen Elementen hochblubbert.

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

Alles, was wir hier tun, ist `stopPropagation()` auf das Ereignisobjekt im Handler für das `<video>`-Element `'click'` Ereignis zu rufen. Dies stoppt das Ereignis von der weiteren Bubbelung zur Box. Jetzt versuchen Sie, den Button und dann das Video zu klicken:

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

## Ereignis-Erfassung

Eine alternative Form der Ereignisverarbeitung ist _Ereignis-Erfassung_. Diese ähnelt dem Ereignis-Bubbling, aber die Reihenfolge ist umgekehrt: Anstatt dass das Ereignis zuerst auf dem innersten gewünschten Element und dann auf sukzessiv weniger verschachtelten Elementen ausgelöst wird, wird das Ereignis zuerst auf dem _weniger verschachtelten_ Element ausgelöst und dann auf sukzessiv mehr verschachtelten Elementen, bis das Ziel erreicht wird.

Ereignis-Erfassung ist standardmäßig deaktiviert. Um sie zu aktivieren, müssen Sie die `capture` Option in `addEventListener()` übergeben.

Dieses Beispiel ist dem zuvor gesehenen [Bubbling-Beispiel](#bubbling-beispiel) sehr ähnlich, außer dass wir die `capture` Option verwendet haben:

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

In diesem Fall ist die Reihenfolge der Nachrichten umgekehrt: Der `<body>` Ereignishandler wird zuerst ausgelöst, gefolgt vom `<div>` Ereignishandler, gefolgt vom `<button>` Ereignishandler:

```plain
You clicked on a BODY element
You clicked on a DIV element
You clicked on a BUTTON element
```

Warum sowohl Erfassung als auch Bubbling verwenden? In den schlechten alten Zeiten, als Browser viel weniger kompatibel waren als heute, verwendete Netscape nur Ereignis-Erfassung und Internet Explorer nur Ereignis-Bubbling. Als das W3C versuchte, das Verhalten zu standardisieren und einen Konsens zu erreichen, endeten sie mit diesem System, das beides einschloss, was moderne Browser nun implementieren.

Standardmäßig werden fast alle Ereignishandler in der Bubbling-Phase registriert, und das macht die meiste Zeit auch mehr Sinn.

## Ereignisdelegation

Im letzten Abschnitt haben wir uns ein Problem angesehen, das durch Ereignis-Bubbling verursacht wird, und wie man es behebt. Ereignis-Bubbling ist jedoch nicht nur störend, sondern kann auch sehr nützlich sein. Insbesondere ermöglicht es die **Ereignisdelegation**. In dieser Praxis, wenn eine Aktion ausgeführt werden soll, wenn der Benutzer mit einem von vielen untergeordneten Elementen interagiert, setzen wir den Ereignis-Listener auf deren übergeordnetes Element und lassen die Ereignisse hochblubbern, anstatt den Ereignis-Listener auf jedes untergeordnete Element einzeln zu setzen.

Gehen wir zurück zu unserem ersten Beispiel, bei dem wir die Hintergrundfarbe der gesamten Seite setzen, wenn der Benutzer einen Button klickt. Angenommen, die Seite ist in 16 Kacheln unterteilt, und wir möchten, dass jede Kachel eine zufällige Farbe erhält, wenn der Benutzer auf diese Kachel klickt.

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

Jetzt könnten wir in JavaScript einen Klick-Ereignishandler für jede Kachel hinzufügen. Eine viel einfachere und effizientere Option ist es jedoch, den Klick-Ereignishandler auf das übergeordnete Element zu setzen und auf Ereignis-Bubbling zu vertrauen, um sicherzustellen, dass der Handler ausgeführt wird, wenn der Benutzer auf eine Kachel klickt:

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

Das Ergebnis ist wie folgt (versuchen Sie, herumzuklicken):

{{ EmbedLiveSample('Event delegation', '100%', 430, "", "") }}

> [!NOTE]
> In diesem Beispiel verwenden wir `event.target`, um das Element zu erhalten, das das Ziel des Ereignisses war (das heißt, das innerste Element). Wenn wir das Element erreichen wollten, das dieses Ereignis behandelt (in diesem Fall den Container), könnten wir `event.currentTarget` verwenden.

> [!NOTE]
> Siehe [useful-eventtarget.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/useful-eventtarget.html) für den vollständigen Quellcode; sehen Sie es sich auch [live in Aktion](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html) an.

## `target` und `currentTarget`

Wenn Sie sich die Beispiele, die wir auf dieser Seite vorgestellt haben, genau ansehen, werden Sie sehen, dass wir zwei verschiedene Eigenschaften des Ereignisobjekts verwenden, um auf das Element zuzugreifen, das angeklickt wurde. In [Ein Listener auf ein übergeordnetes Element setzen](#setzen_eines_listeners_auf_ein_übergeordnetes_element) verwenden wir [`event.currentTarget`](/de/docs/Web/API/Event/currentTarget). Aber in [Ereignisdelegation](#ereignisdelegation) nutzen wir [`event.target`](/de/docs/Web/API/Event/target).

Der Unterschied ist, dass sich `target` auf das Element bezieht, auf dem das Ereignis ursprünglich ausgelöst wurde, während sich `currentTarget` auf das Element bezieht, an das dieser Ereignishandler angehängt wurde.

Während `target` während des Hochblubberns eines Ereignisses gleich bleibt, wird `currentTarget` für Ereignishandler, die an verschiedene Elemente in der Hierarchie angehängt sind, unterschiedlich sein.

Wir können dies sehen, wenn wir das [Bubbling-Beispiel](#bubbling-beispiel) oben leicht adaptieren. Wir verwenden das gleiche HTML wie zuvor:

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

Beachten Sie, dass `target` jedes Mal das Button-Element ist, ob der Ereignishandler selbst am Button, am `<div>` oder am `<body>` angehängt ist. Allerdings identifiziert `currentTarget` das Element, dessen Ereignishandler wir derzeit ausführen:

{{embedlivesample("target and currentTarget")}}

Die `target`-Eigenschaft wird häufig in der Ereignis-Delegation verwendet, wie in unserem [Ereignis-Delegationsbeispiel](#ereignisdelegation) oben.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — schauen Sie sich [Testen Sie Ihre Fähigkeiten: Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Events) an.

## Zusammenfassung

Sie sollten nun alles wissen, was Sie über Webereignisse zu diesem frühen Stadium wissen müssen.
Wie erwähnt, sind Ereignisse eigentlich kein Teil des Kern-JavaScripts — sie sind in Browser-Web-APIs definiert.

Es ist auch wichtig zu verstehen, dass die verschiedenen Kontexte, in denen JavaScript verwendet wird, unterschiedliche Ereignismodelle haben — von Web-APIs bis hin zu anderen Bereichen wie Browser-WebExtensions und Node.js (serverseitiges JavaScript).
Wir erwarten nicht, dass Sie all diese Bereiche jetzt verstehen, aber es hilft definitiv, die Grundlagen von Ereignissen zu verstehen, während Sie mit dem Lernen der Webentwicklung fortfahren.

Als nächstes finden Sie eine Herausforderung, die Ihr Verständnis der letzten Themen testen wird.

## Siehe auch

- [domevents.dev](https://domevents.dev/)
  - : Eine nützliche interaktive Spielplatz-App, mit der Sie das Verhalten des DOM-Ereignissystems durch Erkundung lernen können.
- [DOM-Ereignisse](/de/docs/Web/API/Document_Object_Model/Events)
  - : Ein umfassender Leitfaden zum Verstehen und Behandeln von Ereignissen.
- [Ereignis-Reihenfolge](https://www.quirksmode.org/js/events_order.html)
  - : Eine hervorragend detaillierte Diskussion über Erfassung und Bubbling von Peter-Paul Koch.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

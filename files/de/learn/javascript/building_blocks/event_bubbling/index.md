---
title: Ereignis-Bubbling
slug: Learn/JavaScript/Building_blocks/Event_bubbling
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Events","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}

Wir haben gesehen, dass eine Webseite aus _Elementen_ besteht – Überschriften, Textabsätzen, Bildern, Schaltflächen und so weiter – und dass Sie auf Ereignisse hören können, die diesen Elementen widerfahren. Zum Beispiel könnten Sie einen Listener zu einer Schaltfläche hinzufügen, und dieser wird ausgeführt, wenn der Benutzer auf die Schaltfläche klickt.

Wir haben auch gesehen, dass diese Elemente _ineinander verschachtelt_ sein können: Zum Beispiel könnte ein {{htmlelement("button")}}-Element innerhalb eines {{htmlelement("div")}}-Elements platziert werden. In diesem Fall würden wir das `<div>`-Element als _übergeordnetes_ Element und das `<button>` als _Kind_-Element bezeichnen.

In diesem Kapitel werden wir sehen, was passiert, wenn Sie einen Eventlistener zu einem übergeordneten Element hinzufügen und der Benutzer auf das Kind-Element klickt.

## Einführung in Event-Bubbling

### Einen Listener auf einem übergeordneten Element einstellen

Betrachten Sie eine Webseite wie diese:

```html
<div id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>
```

Hier befindet sich die Schaltfläche innerhalb eines anderen Elements, einem {{HTMLElement("div")}}-Element. Wir sagen, dass das `<div>`-Element hier das **übergeordnete Element** des darin enthaltenen Elements ist. Was passiert, wenn wir einen Klick-Ereignishandler zum übergeordneten Element hinzufügen und dann auf die Schaltfläche klicken?

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('Setting a listener on a parent element', '100%', 200, "", "") }}

Sie werden sehen, dass das übergeordnete Element ein Klickevent auslöst, wenn der Benutzer auf die Schaltfläche klickt:

```plain
You clicked on a DIV element
```

Dies ist sinnvoll: Die Schaltfläche befindet sich innerhalb des `<div>`, sodass Sie durch Klick auf die Schaltfläche auch implizit auf das Element klicken, in dem sie sich befindet.

### Bubbling-Beispiel

Was passiert, wenn wir Eventlistener sowohl zur Schaltfläche _als auch_ zum übergeordneten Element hinzufügen?

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Versuchen wir, Klick-Ereignishandler zur Schaltfläche, ihrem übergeordneten Element (dem `<div>`), und dem {{HTMLElement("body")}}-Element, das beide enthält, hinzuzufügen:

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

Sie werden sehen, dass alle drei Elemente ein Klickevent auslösen, wenn der Benutzer auf die Schaltfläche klickt:

```plain
You clicked on a BUTTON element
You clicked on a DIV element
You clicked on a BODY element
```

In diesem Fall:

- wird der Klick auf die Schaltfläche zuerst ausgelöst
- gefolgt vom Klick auf das übergeordnete Element (das `<div>`-Element)
- gefolgt vom übergeordneten Element des `<div>` (das `<body>`-Element).

Wir beschreiben dies, indem wir sagen, dass das Ereignis vom innermost angeklickten Element **aufsteigt**.

Dieses Verhalten kann nützlich sein und auch unerwartete Probleme verursachen. In den nächsten Abschnitten werden wir ein Problem sehen, das es verursacht, und die Lösung finden.

### Videoplayer-Beispiel

In diesem Beispiel enthält unsere Seite ein Video, das anfangs ausgeblendet ist, und eine Schaltfläche mit der Bezeichnung "Video anzeigen". Wir wünschen uns folgende Interaktionen:

- Wenn der Benutzer auf die "Video anzeigen"-Schaltfläche klickt, soll die Box, die das Video enthält, angezeigt werden, aber das Video noch nicht abgespielt werden.
- Wenn der Benutzer auf das Video klickt, soll das Video anfangen zu spielen.
- Wenn der Benutzer irgendwo in der Box außerhalb des Videos klickt, soll die Box verborgen werden.

Das HTML sieht wie folgt aus:

```html
<button>Display video</button>

<div class="hidden">
  <video>
    <source
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
      type="video/webm" />
    <p>
      Ihr Browser unterstützt HTML-Video nicht. Hier ist ein
      <a href="rabbit320.mp4">Link zum Video</a> stattdessen.
    </p>
  </video>
</div>
```

Es umfasst:

- ein `<button>`-Element
- ein `<div>`-Element, das anfänglich ein `class="hidden"`-Attribut hat
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

Das JavaScript sieht wie folgt aus:

```js
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", () => video.play());
box.addEventListener("click", () => box.classList.add("hidden"));
```

Dies fügt drei `'click'`-Eventlistener hinzu:

- einen auf dem `<button>`, der das `<div>` zeigt, das das `<video>` enthält
- einen auf dem `<video>`, der das Video startet
- einen auf dem `<div>`, der das Video verbirgt

Schauen wir uns an, wie das funktioniert:

{{ EmbedLiveSample('Video_player_example', '100%', 500) }}

Sie sollten sehen, dass, wenn Sie auf die Schaltfläche klicken, die Box und das darin enthaltene Video angezeigt werden. Aber dann, wenn Sie auf das Video klicken, das Video zu spielen beginnt, aber die Box wieder ausgeblendet wird!

Das Video befindet sich innerhalb des `<div>` – es ist Teil davon – also führt ein Klick auf das Video beide Eventhandler aus, was dieses Verhalten verursacht.

### Das Problem mit stopPropagation() beheben

Wie wir im letzten Abschnitt gesehen haben, kann das Event-Bubbling manchmal Probleme verursachen, aber es gibt eine Möglichkeit, es zu verhindern.
Das [`Event`](/de/docs/Web/API/Event)-Objekt hat eine Funktion namens [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), die, wenn sie innerhalb eines Eventhandlers aufgerufen wird, verhindert, dass das Ereignis zu anderen Elementen aufsteigt.

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

Alles was wir hier tun, ist `stopPropagation()` auf dem Event-Objekt im Handler für das `'click'`-Event des `<video>`-Elements aufzurufen. Dies verhindert, dass dieses Ereignis zur Box aufsteigt. Versuchen Sie nun, auf die Schaltfläche und dann auf das Video zu klicken:

{{EmbedLiveSample("Fixing the problem with stopPropagation()", '100%', 500)}}

```html hidden
<button>Display video</button>

<div class="hidden">
  <video>
    <source
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
      type="video/webm" />
    <p>
      Ihr Browser unterstützt HTML-Video nicht. Hier ist ein
      <a href="rabbit320.mp4">Link zum Video</a> stattdessen.
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

## Ereigniskette

Eine alternative Form der Ereignisweitergabe ist die _Ereigniskette_. Dies ist ähnlich wie das Event-Bubbling, aber die Reihenfolge ist umgekehrt: Anstatt das Ereignis zuerst auf das innerste Element zu feuern, das anvisiert wurde, und dann auf sukzessive weniger verschachtelte Elemente, feuert das Ereignis zuerst auf das _am wenigsten verschachtelte_ Element und dann auf sukzessive mehr verschachtelte Elemente, bis das Ziel erreicht ist.

Die Ereigniskette ist standardmäßig deaktiviert. Um sie zu aktivieren, müssen Sie die `capture`-Option in `addEventListener()` übergeben.

Dieses Beispiel ist ähnlich wie das [Bubbling-Beispiel](#bubbling-beispiel), das wir früher gesehen haben, außer dass wir die `capture`-Option verwendet haben:

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

In diesem Fall ist die Reihenfolge der Nachrichten umgekehrt: Der `<body>`-Ereignishandler wird zuerst ausgelöst, gefolgt vom `<div>`-Ereignishandler, gefolgt vom `<button>`-Ereignishandler:

```plain
You clicked on a BODY element
You clicked on a DIV element
You clicked on a BUTTON element
```

Warum sich mit sowohl Capture als auch Bubbling beschäftigen? In den alten Tagen, als Browser viel weniger untereinander kompatibel waren als jetzt, benutzte Netscape nur das Capture-Verfahren, und Internet Explorer benutzte nur das Bubbling-Verfahren. Als das W3C sich entschied, zu versuchen, das Verhalten zu standardisieren und einen Konsens zu erzielen, endeten sie mit diesem System, das beides einschließt, was heutige Browser implementieren.

Standardmäßig sind fast alle Ereignishandler in der Bubbling-Phase registriert, und das ergibt meistens mehr Sinn.

## Ereignisdelegation

Im letzten Abschnitt haben wir uns ein Problem angesehen, das durch Event-Bubbling verursacht wurde und wie man es behebt. Event-Bubbling ist jedoch nicht nur nervig: Es kann sehr nützlich sein. Insbesondere ermöglicht es die **Ereignisdelegation**. In dieser Praxis, wenn wir möchten, dass ein Code ausgeführt wird, wenn der Benutzer mit einem von vielen Kind-Elementen interagiert, setzen wir den Ereignislistener auf ihren übergeordneten Element und lassen die Ereignisse, die auf ihnen geschehen, zu ihrem übergeordneten Element aufsteigen, anstatt den Ereignislistener auf jedes Kind einzeln setzen zu müssen.

Kehren wir zu unserem ersten Beispiel zurück, in dem wir die Hintergrundfarbe der gesamten Seite geändert haben, wenn der Benutzer auf eine Schaltfläche klickte. Angenommen, die Seite ist stattdessen in 16 Kacheln unterteilt, und wir möchten jede Kachel in einer zufälligen Farbe ändern, wenn der Benutzer auf diese Kachel klickt.

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

Wir haben etwas CSS, um die Größe und Position der Kacheln festzulegen:

```css
.tile {
  height: 100px;
  width: 25%;
  float: left;
}
```

Jetzt könnten wir im JavaScript für jede Kachel einen Klick-Ereignishandler hinzufügen. Eine viel einfachere und effizientere Option ist es jedoch, den Klick-Ereignishandler auf das übergeordnete Element zu setzen und sich auf das Event-Bubbling zu verlassen, um sicherzustellen, dass der Handler ausgeführt wird, wenn der Benutzer auf eine Kachel klickt:

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
> In diesem Beispiel verwenden wir `event.target`, um das Element zu ermitteln, das das Ziel des Ereignisses war (das ist das innerste Element). Wenn wir auf das Element zugreifen wollten, das dieses Ereignis verarbeitet hat (in diesem Fall das Container-Element), könnten wir `event.currentTarget` verwenden.

> [!NOTE]
> Siehe [useful-eventtarget.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/useful-eventtarget.html) für den vollständigen Quellcode; sehen Sie es auch [live ausgeführt](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html) hier.

## `target` und `currentTarget`

Wenn Sie sich die Beispiele, die wir in dieser Seite eingeführt haben, genau ansehen, werden Sie sehen, dass wir zwei verschiedene Eigenschaften des Event-Objekts verwenden, um auf das Element zuzugreifen, das angeklickt wurde. In [Ein Listener auf einem übergeordneten Element einstellen](#einen_listener_auf_einem_übergeordneten_element_einstellen) verwenden wir {{domxref("Event.currentTarget", "event.currentTarget")}}. Jedoch in [Ereignisdelegation](#ereignisdelegation) verwenden wir {{domxref("Event.target", "event.target")}}.

Der Unterschied besteht darin, dass sich `target` auf das Element bezieht, auf dem das Ereignis ursprünglich ausgelöst wurde, während sich `currentTarget` auf das Element bezieht, auf das dieser Ereignishandler angewendet wurde.

Während `target` unverändert bleibt, während ein Ereignis aufsteigt, unterscheidet sich `currentTarget` für Ereignishandler, die an verschiedene Elemente in der Hierarchie angehängt sind.

Wir können dies sehen, wenn wir das [Bubbling-Beispiel](#bubbling-beispiel) oben leicht anpassen. Wir verwenden dasselbe HTML wie zuvor:

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

Beachten Sie, dass, wenn wir die Schaltfläche klicken, `target` jedes Mal das Button-Element ist, unabhängig davon, ob der Ereignishandler auf die Schaltfläche selbst, das `<div>`, oder das `<body>` angewendet wurde. Jedoch identifiziert `currentTarget` das Element, dessen Ereignishandler wir gerade ausführen:

{{embedlivesample("target and currentTarget")}}

Die `target`-Eigenschaft wird häufig in der Ereignisdelegation verwendet, wie in unserem [Ereignisdelegations](#ereignisdelegation)-Beispiel oben.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren, sehen Sie sich [Test your skills: Events](/de/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Events) an.

## Fazit

Sie sollten jetzt alles wissen, was Sie zu diesem frühen Zeitpunkt über Webereignisse wissen müssen.
Wie erwähnt, gehören Ereignisse nicht wirklich zum Kern von JavaScript – sie sind in Browser-Web-APIs definiert.

Es ist auch wichtig zu verstehen, dass die verschiedenen Kontexte, in denen JavaScript verwendet wird, unterschiedliche Ereignismodelle haben – von Web-APIs bis hin zu anderen Bereichen wie Browsererweiterungen und Node.js (serverseitiges JavaScript).
Wir erwarten nicht, dass Sie all diese Bereiche jetzt verstehen, aber es hilft sicherlich, die Grundlagen der Ereignisse zu kennen, während Sie sich mit dem Erlernen der Webentwicklung fortsetzen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie uns jederzeit in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Siehe auch

- [domevents.dev](https://domevents.dev/) — eine sehr nützliche interaktive Spielplatz-App, die das Lernen über das Verhalten des DOM-Ereignissystems durch Erkundung ermöglicht.
- [Ereignisreferenz](/de/docs/Web/Events)
- [Ereignisreihenfolge](https://www.quirksmode.org/js/events_order.html) (Diskussion über Capturing und Bubbling) — ein exzellent detaillierter Artikel von Peter-Paul Koch.

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Events","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}

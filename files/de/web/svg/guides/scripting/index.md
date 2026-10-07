---
title: SVG mit JavaScript skripten
short-title: Scripting
slug: Web/SVG/Guides/Scripting
l10n:
  sourceCommit: 259ae6f55fa8009dd492e010e497c8a18737523c
---

SVG-Elemente sind Teil des DOM. Deshalb funktionieren die [DOM-APIs](/de/docs/Web/API/Document_Object_Model), die Sie möglicherweise bereits mit HTML verwenden – etwa [`querySelector()`](/de/docs/Web/API/Document/querySelector), [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) und [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) – auch mit SVG. Dieser Leitfaden behandelt die Besonderheiten von SVG:

- Wo Skripte in SVG ausgeführt werden und wo nicht.
- Wie Sie SVG-Elemente per Skript erstellen, wofür der SVG-Namespace erforderlich ist.
- Die SVG-spezifischen Aspekte der Ereignisbehandlung und Gestaltung.
- Wie Sie ein SVG-Dokument skripten, das in eine HTML-Seite eingebettet ist.
- SVG-DOM-Schnittstellen, für die es keine Entsprechung in HTML gibt.

## Wo Skripte ausgeführt werden

Wie Sie ein SVG skripten, hängt davon ab, wie es auf die Seite gelangt ist:

- **Inline-SVG in einem HTML-Dokument.** Die SVG-Elemente sind Knoten im HTML-Dokument. Skripte der Seite können sie daher direkt abfragen und verändern. Dies ist der einfachste Fall und derjenige, der in diesem Leitfaden durchgehend verwendet wird.
- **Ein eigenständiges SVG-Dokument.** Eine SVG-Datei kann eigene Skripte im SVG-Element {{SVGElement("script")}} enthalten. Diese Skripte werden ausgeführt, wenn die Datei als Dokument geladen wird: beim direkten Öffnen oder beim Einbetten mit {{HTMLElement("object")}}, {{HTMLElement("iframe")}} oder {{HTMLElement("embed")}}.
- **SVG als Bild.** Wenn ein SVG über {{HTMLElement("img")}}, das SVG-Element {{SVGElement("image")}} oder eine CSS-Eigenschaft wie {{cssxref("background-image")}} referenziert wird, wird es in einem sicheren, nicht interaktiven Modus gerendert: Seine Skripte werden nie ausgeführt und seine Links können nicht aktiviert werden. Siehe [SVG als Bild](/de/docs/Web/SVG/Guides/SVG_as_an_image).

Unabhängig davon, wo sich das Skript befindet, stehen dieselben DOM-APIs zur Verfügung. Hier findet ein SVG-`<script>`-Element einen Kreis und fügt ihm einen Event-Listener hinzu:

```html
<svg
  viewBox="0 0 100 100"
  width="100"
  height="100"
  xmlns="http://www.w3.org/2000/svg">
  <circle id="dot" cx="50" cy="50" r="40" fill="steelblue" />
  <script>
    let colorIndex = 0;
    document.getElementById("dot").addEventListener("click", (event) => {
      colorIndex = (colorIndex + 1) % 2;
      event.target.setAttribute(
        "fill",
        ["steelblue", "lightskyblue"][colorIndex],
      );
    });
  </script>
</svg>
```

Klicken Sie auf den Kreis, um das Skript auszuführen:

{{EmbedLiveSample("Where_scripts_run", "100%", 130)}}

> [!NOTE]
> Das obige Beispiel ist inline in ein HTML-Dokument eingebettet. Wenn derselbe Code als eigenständige `.svg`-Datei gespeichert wird, wird er als XML geparst. Dabei werden `<` oder `&` im Skripttext als Markup interpretiert. Escapen Sie diese Zeichen oder schließen Sie das Skript in einen `<![CDATA[ … ]]>`-Abschnitt ein.

## SVG-Elemente erstellen

SVG-Elemente befinden sich im SVG-Namespace `http://www.w3.org/2000/svg`. Die Methode [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt niemals Elemente in diesem Namespace. SVG-Elemente müssen daher mit [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) erstellt werden.

Dieses Beispiel beginnt mit einem leeren `<svg>`-Element. Alles, was darin gezeichnet wird, stammt also aus dem Skript:

```html
<svg
  viewBox="0 0 100 100"
  width="100"
  height="100"
  xmlns="http://www.w3.org/2000/svg"></svg>
```

Das Skript erstellt einen Kreis im SVG-Namespace, legt seine Geometrie fest und fügt ihn ein:

```js
const svgNS = "http://www.w3.org/2000/svg";
const circle = document.createElementNS(svgNS, "circle");
circle.setAttribute("cx", 50);
circle.setAttribute("cy", 50);
circle.setAttribute("r", 40);
circle.setAttribute("fill", "steelblue");
document.querySelector("svg").append(circle);
```

Das Ergebnis ist ein Kreis, der im Markup nicht vorkommt:

{{EmbedLiveSample("Creating_SVG_elements", "100%", 130)}}

Wenn Sie hier `document.createElement("circle")` verwenden, entsteht ein unbekanntes HTML-Element mit dem Namen `circle`. Es wird zwar in den Baum eingefügt, aber nicht gerendert. Die Grafik bleibt damit so leer wie ihr Markup.

Attribute erfordern nicht dieselbe Behandlung. Abgesehen von einigen älteren Attributen wie dem veralteten `xlink:href` haben SVG-Attribute keinen Namespace. Daher genügt [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute). [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS) mit einem `null`-Namespace bewirkt dasselbe, ist aber umständlicher.

Eine ausführlichere Erläuterung finden Sie im Leitfaden zu [XML-Namespaces](/de/docs/Web/API/Document_Object_Model/XML_namespaces).

## Ereignisse behandeln

SVG- und HTML-Elemente verwenden dasselbe [Ereignismodell](/de/docs/Web/API/Document_Object_Model/Events). Die Ereignisbehandlung funktioniert in SVG daher genauso wie in HTML. Fügen Sie Event-Listener mit `addEventListener()` hinzu. Ereignisse steigen im SVG-Baum nach oben auf. Sie können deshalb einen einzigen Listener am Wurzelelement `<svg>` anbringen und anhand von [`event.target`](/de/docs/Web/API/Event/target) ermitteln, auf welche Form geklickt wurde.

Rufen Sie [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um ein störendes Standardverhalten des Browsers zu unterdrücken. Beispiele sind die Textauswahl beim Ziehen einer Form oder die Navigation nach einem Klick auf eine Form innerhalb eines {{SVGElement("a")}}-Elements, wenn Sie den Klick stattdessen per Skript behandeln möchten.

## Zeigerkoordinaten in Benutzereinheiten umrechnen

Pointer-Events melden Koordinaten in CSS-Pixeln relativ zum Viewport. Die Formen sind dagegen im Benutzerkoordinatensystem positioniert, das durch {{SVGAttr("viewBox")}} festgelegt wird. Die Koordinaten unterscheiden sich durch die Position des SVG auf der Seite und außerdem durch einen Skalierungsfaktor, wenn das SVG nicht genau in der Größe seines `viewBox` angezeigt wird.

Dieses Beispiel macht den Skalierungsfaktor sichtbar. Die `viewBox` ist 100 mal 50 Benutzereinheiten groß und wird mit 400 mal 200 CSS-Pixeln angezeigt. Eine Benutzereinheit entspricht daher in beiden Dimensionen vier CSS-Pixeln. Das Markup enthält ein Hintergrundrechteck, eine vom Skript bewegte Markierung und ein {{HTMLElement("output")}}-Element für die Zahlen:

```html
<svg
  id="grid"
  viewBox="0 0 100 50"
  width="400"
  height="200"
  xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="50" fill="whitesmoke" />
  <circle id="marker" cx="-10" cy="-10" r="3" fill="crimson" />
</svg>
<output id="readout">Move the pointer over the graphic.</output>
```

Die Markierung beginnt außerhalb der `viewBox` und wird daher erst sichtbar, wenn der Zeiger bewegt wird.

```css hidden
svg {
  border: 1px solid gray;
}

output {
  display: block;
  margin-top: 0.5rem;
  font-family: monospace;
}
```

Die Methode [`SVGGraphicsElement.getScreenCTM()`](/de/docs/Web/API/SVGGraphicsElement/getScreenCTM) gibt eine _Bildschirm-Koordinatentransformationsmatrix_ (Screen-CTM) zurück. Wird diese auf einen [`DOMPoint`](/de/docs/Web/API/DOMPoint) im Benutzerkoordinatensystem angewendet, ergibt sich derselbe Punkt im Client-Koordinatensystem – trotz des Namens nicht im Bildschirmkoordinatensystem. Hier liegen die Ereigniskoordinaten bereits im Client-Koordinatensystem vor. Für die umgekehrte Transformation wenden wir daher mit [`DOMPointReadOnly.matrixTransform()`](/de/docs/Web/API/DOMPointReadOnly/matrixTransform) die [_inverse Matrix_](/de/docs/Web/API/DOMMatrixReadOnly/inverse) der Screen-CTM auf den Punkt an.

```js
const svg = document.getElementById("grid");
const marker = document.getElementById("marker");
const readout = document.getElementById("readout");

function toUserSpace(svg, event) {
  const point = new DOMPoint(event.clientX, event.clientY);
  return point.matrixTransform(svg.getScreenCTM().inverse());
}

svg.addEventListener("pointermove", (event) => {
  const { x, y } = toUserSpace(svg, event);
  marker.setAttribute("cx", x);
  marker.setAttribute("cy", y);
  readout.textContent = `client: ${Math.round(event.clientX)}, ${Math.round(event.clientY)}; user: ${x.toFixed(1)}, ${y.toFixed(1)}`;
});
```

Vergleichen Sie die beiden Koordinatenpaare, während Sie den Zeiger bewegen:

{{EmbedLiveSample("Converting_pointer_coordinates_to_user_units", "100%", 280)}}

`getScreenCTM()` ist wesentlich robuster, als die Skalierung und Verschiebung selbst zu berechnen, da die Matrix automatisch angepasst wird, wenn sich Größe oder Position des SVG-Elements auf dem Bildschirm ändern.

## Elemente abhängig von der Klickposition hinzufügen und entfernen

Dieses Beispiel führt die bisherigen Schritte zusammen: Ein Listener am Wurzelelement `<svg>` fügt an der Klickposition einen Kreis hinzu oder entfernt den Kreis, auf den Sie geklickt haben.

Das Markup enthält ein leeres SVG mit einem Hintergrundrechteck, auf dem Klicks erfasst werden können:

```html
<svg
  id="diagram"
  viewBox="0 0 300 150"
  width="300"
  height="150"
  xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="150" fill="whitesmoke" />
</svg>
```

```css hidden
circle {
  cursor: pointer;
}
```

Der Click-Listener prüft, worauf geklickt wurde: Ein Kreis wird entfernt; ein Klick an einer anderen Stelle erstellt einen neuen Kreis an der Zeigerposition. Diese wird mit derselben Funktion `toUserSpace()` in Benutzereinheiten umgerechnet:

```js
const svgNS = "http://www.w3.org/2000/svg";
const diagram = document.getElementById("diagram");

function toUserSpace(svg, event) {
  const point = new DOMPoint(event.clientX, event.clientY);
  return point.matrixTransform(svg.getScreenCTM().inverse());
}

diagram.addEventListener("click", (event) => {
  if (event.target.localName === "circle") {
    event.target.remove();
    return;
  }

  const { x, y } = toUserSpace(diagram, event);
  const circle = document.createElementNS(svgNS, "circle");
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", 12);
  circle.setAttribute("fill", "steelblue");
  diagram.append(circle);
});
```

Da sich der Click-Listener am Wurzelelement `<svg>` befindet, erfasst er Klicks auf jede darin enthaltene Form. `event.target` gibt an, welche Form angeklickt wurde. Der Vergleich verwendet [`localName`](/de/docs/Web/API/Element/localName), also den Elementnamen ohne Namespace-Präfix. Damit funktioniert er auch in einer eigenständigen SVG-Datei, deren Elemente als `<svg:circle>` geschrieben sind.

Klicken Sie auf das SVG, um einen Kreis hinzuzufügen, oder auf einen Kreis, um ihn zu entfernen:

{{EmbedLiveSample("Adding_and_removing_elements_according_to_click_position", "100%", 200)}}

## Elemente per Skript gestalten

SVG-Elemente lassen sich auf zwei Arten gestalten: mit [Präsentationsattributen](/de/docs/Web/SVG/Reference/Attribute#presentation_attributes) und mit CSS. Beide lassen sich per Skript steuern.

Um Styles über Präsentationsattribute anzuwenden, setzen Sie das Attribut mit allgemeinen DOM-Methoden:

```js
circle.setAttribute("fill-opacity", 0.5);
```

Um Styles über CSS anzuwenden, verwenden Sie aus HTML bekannte Techniken, beispielsweise das [CSSOM](/de/docs/Web/API/CSS_Object_Model) über [`SVGElement.style`](/de/docs/Web/API/SVGElement/style):

```js
circle.style.fillOpacity = 0.5;
```

Präsentationsattribute werden als Deklarationen des Autors mit einer Spezifität von null behandelt und am Anfang des Autoren-Stylesheets eingefügt. Daher überschreibt jede Regel in einem Stylesheet diese Attribute. Inline-Styles, die mit `element.style` gesetzt werden, haben dagegen Vorrang vor normalen Stylesheet-Deklarationen.

Dieses Beispiel beginnt mit zwei identischen Kreisen:

```html live-sample___script-styling
<svg
  viewBox="0 0 220 100"
  width="220"
  height="100"
  xmlns="http://www.w3.org/2000/svg">
  <circle id="left" cx="50" cy="50" r="40" fill="steelblue" />
  <circle id="right" cx="160" cy="50" r="40" fill="steelblue" />
</svg>
<button id="apply">Apply styles</button>
<button id="reset">Reset styles</button>
```

Das Stylesheet definiert eine Klasse `selected`, die das Skript zuweist:

```css live-sample___script-styling
.selected {
  stroke: crimson;
  stroke-width: 4;
}
```

Beide Kreise werden über die Eigenschaft [`style`](/de/docs/Web/API/SVGElement/style) auf zwei gleichwertige Arten durchscheinend gemacht: mit dem Eigenschaftsnamen in Camel-Case-Schreibweise und mit [`CSSStyleDeclaration.setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) unter Verwendung des Namens mit Bindestrichen. `setProperty()` akzeptiert einen optionalen dritten Parameter für die Priorität `!important`, den Sie weglassen können.

Dem rechten Kreis wird außerdem über [`classList`](/de/docs/Web/API/Element/classList) eine Klasse hinzugefügt. Den Rest übernimmt das Stylesheet:

```js live-sample___script-styling
const left = document.getElementById("left");
const right = document.getElementById("right");

document.getElementById("apply").addEventListener("click", () => {
  left.style.fillOpacity = "0.5";
  right.style.setProperty("fill-opacity", "0.5");
  right.classList.add("selected");
});
document.getElementById("reset").addEventListener("click", () => {
  left.style.removeProperty("fill-opacity");
  right.style.removeProperty("fill-opacity");
  right.classList.remove("selected");
});
```

Beide Kreise sind schließlich gleich durchscheinend; nur der rechte erhält eine Umrandung:

{{EmbedLiveSample("script-styling", "100%", 180)}}

## Ein eingebettetes SVG-Dokument skripten

Ein mit `<object>`, `<iframe>` oder `<embed>` eingebettetes SVG ist ein separates Dokument mit eigenem DOM:

```html
<iframe id="chart" src="chart.svg" width="300" height="150"></iframe>
```

Um dieses Dokument von der einbettenden Seite aus zu skripten, greifen Sie auf sein [`Document`](/de/docs/Web/API/Document) zu: entweder über `contentDocument` ([`HTMLIFrameElement.contentDocument`](/de/docs/Web/API/HTMLIFrameElement/contentDocument) oder [`HTMLObjectElement.contentDocument`](/de/docs/Web/API/HTMLObjectElement/contentDocument)) oder durch Aufruf von [`getSVGDocument()`](/de/docs/Web/API/HTMLIFrameElement/getSVGDocument). Alle drei Elemente stellen `getSVGDocument()` bereit. Die Methode gibt `null` zurück, wenn das Element kein SVG-Dokument anzeigt. Warten Sie auf das `load`-Ereignis des Frames, da das Dokument vorher noch nicht verfügbar ist:

```js
const frame = document.getElementById("chart");

frame.addEventListener("load", () => {
  const svgDocument = frame.contentDocument;
  const bar = svgDocument.getElementById("bar-1");
  bar.setAttribute("fill", "steelblue");
});
```

Dies funktioniert nur, wenn die SVG-Datei denselben [Origin](/de/docs/Web/Security/Defenses/Same-origin_policy) wie die einbettende Seite hat; andernfalls ist `contentDocument` `null`.

Umgekehrt kann ein Skript innerhalb des eingebetteten SVG über [`window.parent`](/de/docs/Web/API/Window/parent) auf die einbettende Seite zugreifen – oder über [`window.top`](/de/docs/Web/API/Window/top) auf das äußerste Dokument. Auch hier gilt die Same-Origin-Beschränkung. [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) ist die robustere Wahl und bei unterschiedlichen Origins die einzige Möglichkeit.

> [!NOTE]
> Möglicherweise finden Sie Dokumentation, die eine `SVGDocument`-Schnittstelle erwähnt. Vor SVG 2 wurden SVG-Dokumente durch diese Schnittstelle repräsentiert. Heute wird stattdessen die Schnittstelle [`XMLDocument`](/de/docs/Web/API/XMLDocument) verwendet.

## Geometrie und animierte Werte im SVG-DOM

Einige SVG-Schnittstellen stellen Geometrie- und Animationswerte bereit, für die es in HTML keine Entsprechung gibt:

- [`SVGGraphicsElement.getBBox()`](/de/docs/Web/API/SVGGraphicsElement/getBBox) gibt die eng anliegende Bounding Box eines Elements in Benutzereinheiten zurück. Konturen, Filter und auf das Element angewendete Transformationen bleiben dabei unberücksichtigt. Das unterscheidet sich von [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect), das gerenderte CSS-Pixel angibt und Transformationen berücksichtigt.
- [`SVGGeometryElement.getTotalLength()`](/de/docs/Web/API/SVGGeometryElement/getTotalLength) und [`SVGGeometryElement.getPointAtLength()`](/de/docs/Web/API/SVGGeometryElement/getPointAtLength) messen einen Pfad und ermitteln einen Punkt in einem bestimmten Abstand entlang des Pfads. Darauf bauen Animationen auf, bei denen Linien gezeichnet werden.
- Geometrische Attribute werden auch als animierte Werte bereitgestellt. So liest `circle.r.baseVal.value` den Radius als Zahl aus einem [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)-Objekt, während `circle.getAttribute("r")` den Attributwert als Zeichenfolge zurückgibt.

Dieses Beispiel vermisst mit diesen APIs eine Kurve. Das Markup enthält den Pfad sowie ein leeres Rechteck und einen leeren Kreis, die das Skript positioniert:

```html
<svg
  viewBox="0 0 200 100"
  width="400"
  height="200"
  xmlns="http://www.w3.org/2000/svg">
  <path
    id="track"
    d="M 20 80 C 60 10, 140 10, 180 80"
    fill="none"
    stroke="steelblue"
    stroke-width="4" />
  <rect id="box" fill="none" stroke="crimson" stroke-dasharray="4 4" />
  <circle id="dot" r="5" fill="crimson" />
</svg>
<output id="readout"></output>
```

```css hidden
output {
  display: block;
  margin-top: 0.5rem;
  font-family: monospace;
}
```

Das Skript zeichnet die Bounding Box des Pfads, setzt den Punkt auf die Hälfte der Pfadlänge und liest seinen Radius als Zahl aus:

```js
const track = document.getElementById("track");
const box = document.getElementById("box");
const dot = document.getElementById("dot");

const bbox = track.getBBox();
box.setAttribute("x", bbox.x);
box.setAttribute("y", bbox.y);
box.setAttribute("width", bbox.width);
box.setAttribute("height", bbox.height);

const length = track.getTotalLength();
const middle = track.getPointAtLength(length / 2);
dot.setAttribute("cx", middle.x);
dot.setAttribute("cy", middle.y);

document.getElementById("readout").textContent =
  `path length: ${length.toFixed(1)} user units, dot radius: ${dot.r.baseVal.value}`;
```

Das Rechteck, der Punkt und die Zahlen ergeben sich alle aus den Messungen:

{{EmbedLiveSample("Geometry_and_animated_values_in_the_SVG_DOM", "100%", 260)}}

Das gestrichelte Rechteck umschließt den Pfad selbst, nicht seine Kontur, da `getBBox()` die Konturbreite ignoriert. Wo die Kontur das Rechteck schneidet, ragen daher Teile von ihr darüber hinaus.

## Siehe auch

- {{SVGElement("script")}}
- [`SVGElement`](/de/docs/Web/API/SVGElement)
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
- [SVG als Bild](/de/docs/Web/SVG/Guides/SVG_as_an_image)
- [Einführung in SVG in HTML](/de/docs/Web/SVG/Guides/SVG_in_HTML)
- [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)

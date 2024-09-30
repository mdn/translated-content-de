---
title: Viewport-Konzepte
slug: Web/CSS/Viewport_concepts
l10n:
  sourceCommit: c72b86b3d6818ec6c8df1d52a77513d769f4164e
---

{{CSSRef}}

Dieser Artikel erklärt das Konzept des Viewports – was es ist, seine Auswirkungen in Bezug auf CSS, SVG und mobile Geräte – und unterscheidet zwischen dem visuellen Viewport und dem Layout-Viewport.

## Was ist ein Viewport?

Ein Viewport stellt den Bereich in der Computergrafik dar, der aktuell angezeigt wird. In Bezug auf Webbrowser ist es im Allgemeinen dasselbe wie das Browserfenster, abzüglich der Benutzeroberfläche, der Menüleiste usw. Das ist der Teil des Dokuments, den Sie gerade betrachten.

Dokumente wie dieser Artikel können sehr lang sein. Ihr Viewport umfasst alles, was derzeit sichtbar ist, insbesondere den Abschnitt „Was ist ein Viewport“ und möglicherweise einen Teil des Navigationsmenüs. Die Größe des Viewports hängt von der Größe des Bildschirms ab, davon, ob sich der Browser im Vollbildmodus befindet oder nicht, und davon, ob der Benutzer herangezoomt hat. Inhalte außerhalb des Viewports, wie der Abschnitt _Siehe auch_ in diesem Dokument, werden wahrscheinlich erst sichtbar, wenn sie in den Anzeigebereich gescrollt werden.

- Auf größeren Monitoren, auf denen Anwendungen nicht unbedingt im Vollbildmodus geöffnet sind, entspricht der Viewport der Größe des Browserfensters.
- Auf den meisten mobilen Geräten und wenn sich der Browser im Vollbildmodus befindet, ist der Viewport der gesamte Bildschirm.
- Im Vollbildmodus ist der Viewport der Geräteschirm, das Fenster ist das Browserfenster, das so groß wie der Viewport oder kleiner sein kann, und das Dokument ist die Webseite, die viel höher oder breiter als der Viewport sein kann.

Zusammenfassend lässt sich sagen, dass der Viewport im Wesentlichen der Teil des Dokuments ist, der derzeit sichtbar ist.

### Viewport-Größen sind veränderlich

Die Breite des Viewports entspricht nicht immer der Breite des Fensters. Wenn Sie in Chrome oder Firefox die Breite oder Höhe des Fensters und des Dokuments abfragen, können Sie erhalten:

```js
document.documentElement.clientWidth; /* 1200 */
window.innerWidth; /* 1200 */
window.outerWidth; /* 1200 */
```

```js
document.documentElement.clientHeight; /* 800 */
window.innerHeight; /* 800 */
window.outerHeight; /* 900 */
```

Es gibt mehrere DOM-Eigenschaften, die Ihnen dabei helfen können, die Viewport-Größe und andere ähnliche Längen abzufragen:

- Die [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) des Dokument-Elements ist die innere Breite eines Dokuments in [CSS-Pixeln](/de/docs/Web/HTML/Viewport_meta_tag#screen_density), einschließlich Padding (jedoch ohne Ränder, Abstände oder vertikale Scrollleisten, falls vorhanden). **Dies ist die Viewport-Breite**.
- Die [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) ist die Breite, in CSS-Pixeln, des Browserfenster-Viewports einschließlich, falls gerendert, der vertikalen Scrollleiste.
- Die [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) ist die Breite der Außenseite des Browserfensters einschließlich aller Fenster-[Chromes](/de/docs/Glossary/chrome).

In einem Experiment mit diesen Eigenschaften waren `innerWidth` und `outerWidth` gleich, aber `outerHeight` war 100px höher als `innerHeight`. Dies liegt daran, dass `outerHeight` das Browser-Chrome einschließt: Die Messungen wurden in einem Browser mit einer Adressleiste und einer Lesezeichenleiste mit einer Gesamthöhe von 100px vorgenommen, aber ohne Chrome links oder rechts vom Fenster.

Der Bereich innerhalb von `innerHeight` und `innerWidth` wird allgemein als **Layout-Viewport** angesehen. Das Browser-Chrome wird nicht als Teil des Viewports betrachtet.

Wenn herangezoomt wird, melden sowohl Firefox als auch Chrome die neue CSS-Pixelgröße für `innerWidth` und `clientWidth`. Die zurückgegebenen Werte für `outerWidth` und `outerHeight` hängen vom Browser ab: Firefox meldet den neuen Wert in CSS-Pixeln, aber Chrome gibt die Länge in der Standard-Pixelgröße zurück. Wenn herangezoomt wird, kann es sein, dass Sie erhalten:

```js
document.documentElement.clientWidth; /* 800 */
window.innerWidth; /* 800 */
window.outerWidth; /* 800 in Firefox, 1200 in chrome */
```

```js
document.documentElement.clientHeight; /* 533 */
window.innerHeight; /* 533 */
window.outerHeight; /* 596 in Firefox, 900 in chrome */
```

Der Viewport war ursprünglich 1200 x 800 Pixel. Nach dem Heranzoomen wurde der Viewport 800 x 533 Pixel groß. Dies ist der _Layout-Viewport_. Feste Kopf- oder Fußzeilen mit den folgenden Stilen bleiben oben und unten im _Layout-Viewport_ fest verankert.

```css
body > header {
  position: fixed;
  top: 0;
}
body > footer {
  position: fixed;
  bottom: 0;
}
```

Wir erhielten die Messung von 800 x 533, als wir mit der Tastatur herangezoomt haben. Die Kopf- und Fußzeile blieben am oberen und unteren Rand des Fensters. Aber was wäre, wenn wir auf einem Tablet gezoomt hätten? Was, wenn eine dynamische Tastatur auf einem Telefon erscheint?

Das Web enthält zwei Viewports, den **Layout-Viewport** und den **visuellen Viewport**. Der visuelle Viewport ist der Teil der Webseite, der derzeit im Browser sichtbar ist und sich ändern kann. Wenn der Nutzer die Seite durch Pinch-to-Zoom vergrößert, eine dynamische Tastatur öffnet oder eine zuvor ausgeblendete Adressleiste sichtbar wird, verkleinert sich der visuelle Viewport, aber der Layout-Viewport bleibt unverändert.

Feste Kopf- oder Fußzeilen, wie oben beschrieben, bleiben oben und unten im _Layout-Viewport_ verankert und bleiben daher beim Zoomen mit der Tastatur sichtbar. Wenn Sie wischen, um zu zoomen, ist möglicherweise nicht der gesamte Layout-Viewport sichtbar. Wenn Sie aus der Mitte des Layout-Viewports vergrößern, dehnt sich der Inhalt in alle vier Richtungen aus. Wenn Sie eine feste Kopf- oder Fußzeile haben, bleibt diese weiterhin oben oder unten im Layout-Viewport verankert, wird jedoch möglicherweise nicht am oberen und unteren Rand des Gerätebildschirms sichtbar sein — was der visuelle Viewport ist. Der visuelle Viewport ist der derzeit sichtbare Teil des Layout-Viewports. Wenn Sie nach unten scrollen, ändern Sie den Inhalt des visuellen Viewports und bringen den unteren Teil des Layout-Viewports ins Sichtfeld, wodurch die feste Fußzeile angezeigt wird, die dann am unteren Rand kleben bleibt.

Der visuelle Viewport ist der sichtbare Teil eines Bildschirms ohne Bildschirmtastaturen, Bereiche außerhalb des Zoom-Bereichs oder andere Funktionen, die nicht mit den Dimensionen einer Seite skalieren. Der visuelle Viewport ist gleich groß wie der Layout-Viewport oder kleiner.

Für eine Seite mit iframes, Objekten oder externen SVGs haben sowohl die enthaltenen Seiten als auch jede eingebundene Datei ihr eigenes einzigartiges Fensterobjekt. Nur das oberste Fenster verfügt über einen visuellen Viewport, der sich vom Layout-Viewport unterscheiden kann. Für eingebundene Dokumente sind der visuelle Viewport und der Layout-Viewport gleich.

### CSS

Der oben beschriebene Layout-Viewport und visuelle Viewport sind nicht die einzigen Viewports, denen Sie begegnen werden. Jeder Unter-Viewport, der vollständig oder teilweise innerhalb des Layout-Viewports angezeigt wird, wird als visueller Viewport betrachtet.

Wir denken normalerweise, dass Breiten- und Höhenmedienabfragen relativ zur Breite und Höhe des Browserfensters sind. Tatsächlich sind sie relativ zum Viewport, der im Hauptdokument das Fenster darstellt, jedoch die intrinsische Größe des übergeordneten Elements in einem verschachtelten Browsing-Kontext wie Objekten, iframes und SVG ist. In CSS haben wir auch Längeneinheiten, die auf der Viewport-Größe basieren. Eine `vh`-Einheit entspricht 1% der Höhe des Layout-Viewports. Ebenso entspricht die `vw`-Einheit 1% der Breite des Layout-Viewports.

#### `<iframe>`

Innerhalb eines iframes ist der visuelle Viewport die Größe der inneren Breite und Höhe des iframes und nicht des übergeordneten Dokuments. Sie können jedes gewünschte Höhen- und Breitenmaß auf ein iframe setzen, aber das gesamte Dokument ist möglicherweise nicht sichtbar.

Wenn Sie im iframe-Dokument Viewport-Längeneinheiten in Ihrem CSS verwenden, entspricht `1vh` 1% der Höhe des iframes und `1vw` 1% der Breite des Dokuments.

```css
iframe {
  width: 50vw;
}
```

Wenn das iframe auf 50vw eingestellt ist, beträgt es 50% der Breite des `1200px` übergeordneten Dokuments in unserem obigen Beispiel oder `600px`, wobei `1vw` `6px` entspricht. Bei herangezoomtem Zustand schrumpft das iframe auf `400px` und `1vw` wird `4px`.

Eine breitebasierte Medienabfrage innerhalb des iframe-Dokuments bezieht sich auf den Viewport des iframes.

```css
@media screen and (min-width: 500px) {
  p {
    color: red;
  }
}
```

Wenn das obige CSS im iframe enthalten ist, werden die Absätze rot, wenn der Benutzer herangezoomt hat, aber dieser Stil gilt nicht im nicht herangezoomten Zustand.

#### SVG

In einem SVG-Dokument ist der Viewport der sichtbare Bereich des SVG-Bildes. Sie können jede gewünschte Höhen- und Breitenmaß auf ein SVG setzen, aber das gesamte Bild ist möglicherweise nicht sichtbar. Der sichtbare Bereich wird als Viewport bezeichnet. Die Größe des Viewports kann mithilfe der Breiten- und Höhenattribute des {{SVGElement("svg")}}-Elements definiert werden.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat der Viewport ein [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) von 3:4 und ist standardmäßig 400 mal 300 Einheiten groß, wobei eine Einheit im Allgemeinen einem CSS-Pixel entspricht.

SVG hat auch ein internes Koordinatensystem, das über das [viewBox](/de/docs/Web/SVG/Attribute/viewBox)-Attribut definiert wird, welches nicht zu dieser Viewport-Diskussion gehört.

Wenn Sie eine SVG-Datei in Ihr HTML einfügen, ist der Viewport der SVG der ursprüngliche umgebende Block oder die Breite und Höhe des SVG-Containers. Die {{CSSxRef("@media")}}-Abfrage in Ihrer SVG-CSS bezieht sich auf diesen Container und nicht auf den Browser.

```css
@media screen and (min-width: 400px) and (max-width: 500px) {
  /* CSS goes here */
}
```

Im Allgemeinen, wenn Sie die obige Medienabfrage schreiben, werden die Stile angewendet, wenn der Viewport, im Allgemeinen das Browserfenster, zwischen 400px und 500px inklusive liegt. Die Breiten-Medien-Abfrage im SVG bezieht sich auf das Element, in dem das SVG enthalten ist — das {{htmlelement("img")}}, wenn die Quelle eine SVG-Datei ist, das SVG selbst, wenn das SVG direkt in das HTML eingefügt wird, oder das übergeordnete Element, wenn das übergeordnete Element eine Breite zugewiesen hat und nicht die Breite des Viewports. Mit der oben genannten Medienabfrage in unserer SVG-Datei wird das CSS angewendet, wenn der SVG-Container zwischen 400 und 500px liegt.

### JavaScript

Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des visuellen Viewports.

## Mobile Viewports

Mobile Geräte gibt es in allen Formen und Größen, mit Bildschirmen unterschiedlicher Pixeldichte. Der Viewport des mobilen Browsers ist der Bereich des Fensters, in dem Webinhalte angezeigt werden können, der nicht unbedingt die gleiche Größe wie die gerenderte Seite hat. Mobile Browser rendern Seiten in einem virtuellen Fenster oder Viewport, im Allgemeinen mit 980px, was normalerweise breiter als der Bildschirm ist, und verkleinern dann das gerenderte Ergebnis, sodass es auf einmal gesehen werden kann. Die Benutzer können dann schwenken und zoomen, um verschiedene Bereiche der Seite zu sehen. Beispielsweise, wenn ein mobiler Bildschirm eine Breite von 320px hat, könnte eine Website mit einem virtuellen Viewport von 980px gerendert werden, und dann wird sie verkleinert, um in den 320px großen Raum zu passen, was je nach Design für viele, wenn nicht alle, unleserlich ist. Um einem mobilen Browser mitzuteilen, anstelle der standardmäßigen 980px die Viewport-Breite als Bildschirmbreite zu verwenden, können Entwickler einen Viewport-Meta-Tag einschließen, wie das folgende:

```html
<meta name="viewport" content="width=device-width" />
```

Die `width`-Eigenschaft steuert die Größe des Viewports. Sie sollte vorzugsweise auf `device-width` gesetzt werden, was der Breite des Bildschirms in CSS-Pixeln bei einem Maßstab von 100% entspricht. Es gibt andere Eigenschaften wie `maximum-scale`, `minimum-scale` und `user-scalable`, welche steuern, ob Benutzer die Seite hinein- oder herauszoomen können, aber die Standardwerte sind für Barrierefreiheit und Benutzererfahrung die besten, sodass diese Eigenschaften weggelassen werden können.

## Siehe auch

- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- {{HTMLElement("meta")}}, speziell `<meta name="viewport">`
- [Verwendung des viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Viewport_meta_tag)

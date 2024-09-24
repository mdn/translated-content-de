---
title: Viewport-Konzepte
slug: Web/CSS/Viewport_concepts
l10n:
  sourceCommit: c72b86b3d6818ec6c8df1d52a77513d769f4164e
---

{{CSSRef}}

Dieser Artikel erklärt das Konzept des Viewports – was er ist, seine Auswirkungen in Bezug auf CSS, SVG und mobile Geräte – und unterscheidet zwischen dem visuellen Viewport und dem Layout-Viewport.

## Was ist ein Viewport?

Ein Viewport stellt den Bereich in der Computergrafik dar, der derzeit betrachtet wird. In Bezug auf Webbrowser ist es im Allgemeinen dasselbe wie das Browserfenster, jedoch ohne Benutzeroberfläche, Menüleiste usw. Es ist der Teil des Dokuments, den Sie anzeigen.

Dokumente wie dieser Artikel können sehr lang sein. Ihr Viewport umfasst alles, was derzeit sichtbar ist, insbesondere den Abschnitt „Was ist ein Viewport?“ und möglicherweise einen Teil des Navigationsmenüs. Die Größe des Viewports hängt von der Größe des Bildschirms ab, davon, ob der Browser im Vollbildmodus ist oder nicht, und davon, ob der Benutzer hereingezoomt hat oder nicht. Inhalte außerhalb des Viewports, wie z. B. der Abschnitt _Siehe auch_ in diesem Dokument, sind wahrscheinlich erst sichtbar, wenn sie in den sichtbaren Bereich gescrollt werden.

- Auf größeren Monitoren, bei denen Anwendungen nicht unbedingt im Vollbildmodus sind, entspricht der Viewport der Größe des Browserfensters.
- Auf den meisten Mobilgeräten und wenn sich der Browser im Vollbildmodus befindet, ist der Viewport der gesamte Bildschirm.
- Im Vollbildmodus ist der Viewport der Geräteschirm, das Fenster ist das Browserfenster, das so groß wie der Viewport oder kleiner sein kann, und das Dokument ist die Website, die viel höher oder breiter als der Viewport sein kann.

Zusammengefasst ist der Viewport im Grunde der Teil des Dokuments, der derzeit sichtbar ist.

### Viewportgrößen sind veränderbar

Die Breite des Viewports entspricht nicht immer der Breite des Fensters. Wenn Sie nach der Breite oder Höhe des Fensters und Dokuments in Chrome oder Firefox fragen, können Sie Folgendes erhalten:

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

Es gibt mehrere DOM-Eigenschaften, die Ihnen helfen können, die Größe des Viewports und andere ähnliche Längen abzufragen:

- Die Dokumentelementeigenschaft {{DOMxRef("Element.clientWidth")}} ist die innere Breite eines Dokuments in [CSS-Pixeln](/de/docs/Web/HTML/Viewport_meta_tag#screen_density), einschließlich Padding (aber ohne Rahmen, Ränder oder vertikale Scrollleisten, falls vorhanden). **Dies ist die Breite des Viewports**.
- Die {{DOMxRef("Window.innerWidth")}} ist die Breite in CSS-Pixeln des Browserfenster-Viewports, einschließlich, falls gerendert, der vertikalen Scrollleiste.
- Die {{DOMxRef("Window.outerWidth")}} ist die Breite der Außenseiten des Browserfensters, einschließlich aller Fenster-{{glossary("chrome")}}.

In einem Experiment mit diesen Eigenschaften war die `innerWidth` und `outerWidth` gleich, aber die `outerHeight` war 100px höher als die `innerHeight`. Dies liegt daran, dass die `outerHeight` das Browser-Chrome einschließt: Die Messungen wurden in einem Browser mit einer Adressleiste und einer Lesezeichenleiste durchgeführt, die zusammen 100px Höhe haben, jedoch kein Chrome links oder rechts vom Fenster.

Der Bereich innerhalb der `innerHeight` und `innerWidth` wird im Allgemeinen als **Layout-Viewport** betrachtet. Das Browser-Chrome wird nicht als Teil des Viewports betrachtet.

Wenn Sie hereinzoomen, melden sowohl Firefox als auch Chrome die neue CSS-Pixelgröße für `innerWidth` und `clientWidth`. Die für `outerWidth` und `outerHeight` zurückgegebenen Werte hängen vom Browser ab: Firefox meldet den neuen Wert in CSS-Pixeln, aber Chrome gibt die Länge in der Standardpixellgröße zurück. Wenn Sie hereinzoomen, erhalten Sie möglicherweise:

```js
document.documentElement.clientWidth; /* 800 */
window.innerWidth; /* 800 */
window.outerWidth; /* 800 in Firefox, 1200 in Chrome */
```

```js
document.documentElement.clientHeight; /* 533 */
window.innerHeight; /* 533 */
window.outerHeight; /* 596 in Firefox, 900 in Chrome */
```

Der Viewport betrug ursprünglich 1200 x 800 Pixel. Beim Hineinzoomen wurde der Viewport auf 800 x 533 Pixel geändert. Dies ist der _Layout-Viewport_. Sticky-Header oder -Footer, mit den folgenden Stilen, haften oben und unten am _Layout-Viewport_.

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

Wir erhielten die Messung von 800 x 533, als wir die Tastatur zum Hineinzoomen verwendeten. Der Header und Footer blieben bündig an der Ober- und Unterseite des Fensters. Aber was wäre, wenn wir auf einem Tablet in das Bild gezoomt hätten? Was passiert, wenn auf einem Telefon eine dynamische Tastatur angezeigt wird?

Das Web enthält zwei Viewports, den **Layout-Viewport** und den **visuellen Viewport**. Der visuelle Viewport ist der Teil der Webseite, der derzeit im Browser sichtbar ist und sich ändern kann. Wenn der Benutzer die Seite mit einem Pinch-Zoom vergrößert, eine dynamische Tastatur öffnet oder eine zuvor versteckte Adressleiste sichtbar wird, schrumpft der visuelle Viewport, während der Layout-Viewport unverändert bleibt.

Sticky-Header oder -Footer, wie oben besprochen, haften am oberen und unteren Ende des _Layout-Viewports_ und bleiben daher sichtbar, wenn wir mit der Tastatur hineinzoomen. Wenn Sie mit einem Pinch-Zoom hereinzoomen, ist möglicherweise nicht der gesamte Layout-Viewport sichtbar. Wenn Sie aus der Mitte des Layout-Viewports vergrößern, wird der Inhalt in alle vier Richtungen erweitert. Wenn Sie einen Sticky-Header oder -Footer haben, werden diese weiterhin am oberen oder unteren Rand des Layout-Viewports angeheftet, aber möglicherweise sind sie am oberen und unteren Rand des Geräts – dem visuellen Viewport – nicht sichtbar. Der visuelle Viewport ist der derzeit sichtbare Teil des Layout-Viewports. Wenn Sie nach unten scrollen, ändern Sie den Inhalt des visuellen Viewports und bringen den unteren Teil des Layout-Viewports in den sichtbaren Bereich, wodurch der Sticky-Footer angezeigt wird, der dann unten bleibt.

Der visuelle Viewport ist der sichtbare Bereich eines Bildschirms, der nicht On-Screen-Tastaturen, Bereiche außerhalb eines Pinch-Zoom-Bereichs oder andere Funktionen umfasst, die nicht mit den Dimensionen einer Seite skaliert werden. Der visuelle Viewport ist gleich groß oder kleiner als der Layout-Viewport.

Bei einer Seite mit iframes, Objekten oder externem SVG haben sowohl die enthaltenen Seiten als auch jede eingeschlossene Datei ihr eigenes einzigartiges Fensterobjekt. Nur das oberste Fenster hat einen visuellen Viewport, der sich möglicherweise vom Layout-Viewport unterscheidet. Bei den eingeschlossenen Dokumenten sind der visuelle Viewport und der Layout-Viewport identisch.

### CSS

Der oben beschriebene Layout-Viewport und der visuelle Viewport sind nicht die einzigen Viewports, denen Sie begegnen werden. Jeder Unterviewport, der vollständig oder teilweise im Layout-Viewport angezeigt wird, wird als visueller Viewport betrachtet.

Wir denken im Allgemeinen, dass Breiten- und Höhenmedienabfragen relativ zur Breite und Höhe des Browserfensters stehen. Sie sind tatsächlich relativ zum Viewport, der das Fenster im Hauptdokument ist, jedoch die intrinsische Größe des Elternteils in einem verschachtelten Browsing-Kontext wie Objekten, iframes und SVG ist. In CSS haben wir auch Längeneinheiten basierend auf der Viewportgröße. Eine `vh`-Einheit entspricht 1 % der Höhe des Layout-Viewports. Ähnlich entspricht die `vw`-Einheit 1 % der Breite des Layout-Viewports.

#### `<iframe>`

In einem iframe entspricht der visuelle Viewport der Größe der inneren Breite und Höhe des iframes, nicht dem Elterndokument. Sie können eine beliebige Höhe und Breite für ein iframe festlegen, aber das gesamte Dokument ist möglicherweise nicht sichtbar.

Wenn Sie Viewport-Längeneinheiten in Ihrem CSS innerhalb des iframe-Dokuments verwenden, entspricht `1vh` 1 % der Höhe des iframes und `1vw` 1 % der Breite des Dokuments.

```css
iframe {
  width: 50vw;
}
```

Wenn das iframe auf 50vw gesetzt ist, beträgt es 50 % der Breite des `1200px` großen Elterndokuments in unserem obigen Beispiel oder `600px`, wobei `1vw` `6px` entspricht. Beim Hineinzoomen schrumpft das iframe auf `400px` und `1vw` wird zu `4px`.

Eine auf Breite basierende Medienabfrage innerhalb des iframe-Dokuments bezieht sich auf den Viewport des iframes.

```css
@media screen and (min-width: 500px) {
  p {
    color: red;
  }
}
```

Wenn das obige CSS im iframe enthalten ist, werden die Absätze rot, wenn der Benutzer hineingezoomt hat, aber dieser Stil gilt nicht im nicht hineingezoomten Zustand.

#### SVG

In einem SVG-Dokument ist der Viewport der sichtbare Bereich des SVG-Bildes. Sie können eine beliebige Höhe und Breite für ein SVG festlegen, aber das gesamte Bild ist möglicherweise nicht sichtbar. Der sichtbare Bereich wird als Viewport bezeichnet. Die Größe des Viewports kann mit den Breiten- und Höhenattributen des {{SVGElement("svg")}}-Elements definiert werden.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat der Viewport ein {{glossary("Aspect Ratio")}} von 3:4 und ist standardmäßig 400 mal 300 Einheiten groß, wobei eine Einheit im Allgemeinen einem CSS-Pixel entspricht.

SVG hat auch ein internes Koordinatensystem, das über das [viewBox](/de/docs/Web/SVG/Attribute/viewBox)-Attribut definiert ist und nicht mit dieser Viewport-Diskussion zusammenhängt.

Wenn Sie eine SVG-Datei in Ihr HTML einfügen, ist der Viewport des SVG der ursprüngliche enthaltende Block oder die Breite und Höhe des SVG-Containers. Die Verwendung der {{CSSxRef("@media")}}-Abfrage im CSS Ihres SVG bezieht sich auf diesen Container, nicht auf den Browser.

```css
@media screen and (min-width: 400px) and (max-width: 500px) {
  /* CSS kommt hierher */
}
```

Im Allgemeinen, wenn Sie die obige Medienabfrage schreiben, werden die Stile angewendet, wenn der Viewport, im Allgemeinen das Browserfenster, zwischen 400px und 500px liegt, einschließlich. Die Breitenmedienabfrage im SVG basiert auf dem Element, in dem das SVG enthalten ist – das {{htmlelement("img")}}, wenn die Quelle eine SVG-Datei ist, das SVG selbst, wenn das SVG direkt in das HTML eingefügt ist, oder das Elternteil, wenn das Elternelement eine zugewiesene Breite hat – und nicht die Breite des Viewports. Mit der obigen Medienabfrage in unserer SVG-Datei wird das CSS angewendet, wenn der SVG-Container zwischen 400 und 500px ist.

### JavaScript

Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des visuellen Viewports.

## Mobile Viewports

Mobile Geräte gibt es in allen Formen und Größen mit Bildschirmen mit unterschiedlichen Geräte-Pixelverhältnissen. Der Viewport des mobilen Browsers ist der Bereich des Fensters, in dem Webinhalte angezeigt werden können, was nicht unbedingt der gleichen Größe wie die gerenderte Seite entspricht. Mobile Browser rendern Seiten in einem virtuellen Fenster oder Viewport, normalerweise auf 980px, was in der Regel breiter als der Bildschirm ist, und schrumpfen dann das gerenderte Ergebnis, damit es alles auf einmal gesehen werden kann. Benutzer können dann die Pan- und Zoom-Funktion nutzen, um verschiedene Bereiche der Seite zu sehen. Wenn beispielsweise ein mobiler Bildschirm eine Breite von 320px hat, könnte eine Website mit einem virtuellen Viewport von 980px gerendert werden, die dann in den 320px-Bereich vergrößert wird, was je nach Design für viele oder sogar alle unlesbar ist. Um einem mobilen Browser mitzuteilen, die Viewport-Breite anstelle der standardmäßigen 980px als Breite des Bildschirms zu verwenden, können Entwickler ein Viewport-Meta-Tag einfügen, wie das folgende:

```html
<meta name="viewport" content="width=device-width" />
```

Die `width`-Eigenschaft steuert die Größe des Viewports. Es sollte vorzugsweise auf `device-width` gesetzt werden, was die Breite des Bildschirms in CSS-Pixeln bei einem Maßstab von 100 % ist. Es gibt andere Eigenschaften, einschließlich `maximum-scale`, `minimum-scale` und `user-scalable`, die steuern, ob Benutzer die Seite hinein- oder herauszoomen können, aber die Standardwerte sind die besten für Barrierefreiheit und Benutzererfahrung, sodass diese weggelassen werden können.

## Siehe auch

- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- {{HTMLElement("meta")}}, insbesondere `<meta name="viewport">`
- [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Viewport_meta_tag)

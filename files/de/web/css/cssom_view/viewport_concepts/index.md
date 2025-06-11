---
title: Viewport-Konzepte
slug: Web/CSS/CSSOM_view/Viewport_concepts
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Dieser Artikel erklärt das Konzept des {{Glossary("viewport", "Viewports")}} — was er ist, seine Auswirkungen im Hinblick auf CSS, SVG und mobile Geräte — und unterscheidet zwischen dem {{Glossary("visual_viewport", "visuellen Viewport")}} und dem {{Glossary("layout_viewport", "Layout-Viewport")}}.

## Was ist ein Viewport?

Ein Viewport repräsentiert den Bereich in der Computergrafik, der derzeit angezeigt wird. In Bezug auf Web-Browser entspricht er im Allgemeinen dem Browserfenster, abzüglich der Benutzeroberfläche, der Menüleiste usw. Dies ist der Teil des Dokuments, den Sie gerade betrachten.

Dokumente wie dieser Artikel können sehr lang sein. Ihr Viewport umfasst alles, was derzeit sichtbar ist; insbesondere der Abschnitt „Was ist ein Viewport“ und vielleicht ein Teil des Navigationsmenüs. Die Größe des Viewports hängt von der Größe des Bildschirms ab, davon, ob der Browser im Vollbildmodus ist oder nicht, und ob der Browser herangezoomt ist. Inhalte außerhalb des Viewports, wie z. B. der Abschnitt _Siehe auch_ in diesem Dokument, sind wahrscheinlich erst sichtbar, wenn Sie zu ihnen scrollen.

- Auf größeren Monitoren, auf denen Anwendungen nicht unbedingt im Vollbildmodus ausgeführt werden, ist der Viewport die Größe des Browserfensters.
- Auf den meisten mobilen Geräten und wenn der Browser im Vollbildmodus ist, ist der Viewport der gesamte Bildschirm.
- Im Vollbildmodus ist der Viewport der Bildschirm des Geräts, das Fenster ist das Browserfenster, das so groß wie der Viewport oder kleiner sein kann, und das Dokument ist die Webseite, die viel höher oder breiter als der Viewport sein kann.

Zusammengefasst ist der Viewport im Grunde der Teil des Dokuments, der derzeit sichtbar ist.

### Viewport-Größen sind veränderlich

Die Breite des Viewports ist nicht immer die Breite des Fensters. Wenn Sie die Breite oder Höhe des Fensters und des Dokuments in Chrome oder Firefox abfragen, können Sie Folgendes erhalten:

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

Es gibt mehrere DOM-Eigenschaften, die Ihnen bei der Abfrage der Viewport-Größe und anderer ähnlicher Längen helfen können:

- Die [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) des Dokumentelements ist die innere Breite eines Dokuments in [CSS-Pixeln](/de/docs/Web/HTML/Guides/Viewport_meta_element#screen_density), einschließlich Polsterung (aber keine Ränder, Abstände oder vertikale Scrollbalken, falls vorhanden). **Das ist die Viewport-Breite**.
- Die [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) ist die Breite in CSS-Pixeln des Browserfenster-Viewports einschließlich, wenn gerendert, des vertikalen Scrollbalkens.
- Die [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) ist die Breite der Außenseite des Browserfensters, einschließlich aller Fenster-{{Glossary("chrome", "Chrome")}}.

In einem Experiment mit diesen wurde festgestellt, dass `innerWidth` und `outerWidth` denselben Wert hatten, aber `outerHeight` um 100 Pixel höher war als `innerHeight`. Dies liegt daran, dass `outerHeight` das Browser-Chrome umfasst: Die Messungen wurden in einem Browser mit einer Adressleiste und einer Lesezeichenleiste durchgeführt, die zusammen 100 Pixel hoch sind, aber keine Chrome links oder rechts des Fensters.

Der Bereich innerhalb der `innerHeight` und `innerWidth` wird im Allgemeinen als **{{Glossary("layout_viewport", "Layout-Viewport")}}** betrachtet. Das Browser-Chrome wird nicht als Teil des Viewports angesehen.

Beim Hineinzoomen melden sowohl Firefox als auch Chrome die neue {{Glossary("CSS_pixel", "CSS-Pixel")}}-Größe für `innerWidth` und `clientWidth`. Die zurückgegebenen Werte für `outerWidth` und `outerHeight` hängen vom Browser ab: Firefox meldet den neuen Wert in CSS-Pixeln, aber Chrome gibt die Länge in der Standard-Pixelgröße zurück. Beim Hineinzoomen können Sie Folgendes erhalten:

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

Der Viewport war ursprünglich 1200 x 800 Pixel groß. Beim Hineinzoomen wurde der Viewport zu 800 x 533 Pixeln. Dies ist der _Layout-Viewport_. Sticky-Header oder -Footer mit den folgenden Stilen bleiben jeweils oben und unten im _Layout-Viewport_ haften.

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

Wir erhielten das Maß 800 x 533, als wir mithilfe der Tastatur hineinzoomten. Der Header und Footer blieben bündig oben und unten am Fenster. Was wäre jedoch, wenn wir auf einem Tablet herangezoomt hätten? Was passiert, wenn eine dynamische Tastatur auf einem Telefon geöffnet wird?

### Layout- und visuelle Viewports

Das Web enthält zwei Viewports, den **Layout-Viewport** und den **visuellen Viewport**. Der visuelle Viewport ist der Teil der Webseite, der derzeit im Browser sichtbar ist, und kann sich ändern. Wenn der Benutzer die Seite zusammenzieht, eine dynamische Tastatur öffnet oder wenn eine zuvor verborgene Adressleiste sichtbar wird, schrumpft der visuelle Viewport, aber der Layout-Viewport bleibt unverändert.

[Fixed](/de/docs/Web/CSS/position#fixed_positioning) Sticky-Header oder -Footer, wie oben beschrieben, bleiben oben und unten im _Layout-Viewport_ haften und bleiben daher sichtbar, wenn wir mit der Tastatur hineinzoomen. Wenn Sie heranzoomt, ist der Layout-Viewport möglicherweise nicht vollständig sichtbar. Wenn Sie von der Mitte des Layout-Viewports aus vergrößern, dehnen sich die Inhalte in alle vier Richtungen aus. Wenn Sie einen Sticky-Header oder -Footer haben, bleiben diese zwar weiterhin oben oder unten im Layout-Viewport hängen, sind jedoch möglicherweise nicht oben und unten auf dem Bildschirm des Geräts sichtbar — dies ist der visuelle Viewport. Der visuelle Viewport ist der derzeit sichtbare Teil des Layout-Viewports. Wenn Sie nach unten scrollen, ändern Sie die Inhalte des visuellen Viewports und bringen den unteren Rand des Layout-Viewports in die Ansicht, wobei der Sticky-Footer angezeigt wird, der dann unten bleibt.

Der visuelle Viewport ist der visuelle Bereich eines Bildschirms, ohne On-Screen-Tastaturen, Bereiche außerhalb eines Zoom-Bereichs oder andere Funktionen, die nicht mit den Abmessungen einer Seite skalieren. Der visuelle Viewport ist so groß wie der Layout-Viewport oder kleiner.

Für eine Seite mit Iframes, Objekten oder externen SVGs haben sowohl die enthaltenen Seiten als auch jede eingebundene Datei ihr eigenes einzigartiges Fensterobjekt. Nur das oberste Fenster hat einen visuellen Viewport, der sich vom Layout-Viewport unterscheiden kann. Für eingebundene Dokumente sind der visuelle Viewport und der Layout-Viewport identisch.

### CSS

Der beschriebenen Layout-Viewport und visueller Viewport sind nicht die einzigen Viewports, denen Sie begegnen werden. Jeder Teil-Viewport, der vollständig oder teilweise innerhalb des Layout-Viewports angezeigt wird, wird als visueller Viewport betrachtet.

Wir denken im Allgemeinen an [`width`](/de/docs/Web/CSS/@media/width) und [`height`](/de/docs/Web/CSS/@media/height) Media Queries als relativ zur Breite und Höhe des Browserfensters. Tatsächlich sind sie relativ zum Viewport, der im Hauptdokument das Fenster ist, aber die intrinsische Größe des übergeordneten Elements in einem verschachtelten Browsing-Kontext wie Objekten, Iframes und SVGs ist. In CSS haben wir auch [Längeneinheiten basierend auf der Viewport-Größe](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units). Eine `vh`-Einheit entspricht 1 % der Höhe des Layout-Viewports. Ebenso entspricht die `vw`-Einheit 1 % der Breite des Layout-Viewports.

#### `<iframe>`

In einem {{htmlelement("iframe")}} ist der visuelle Viewport die Größe der inneren Breite und Höhe des Iframes, anstatt des übergeordneten Dokuments. Sie können eine beliebige Höhe und Breite für einen Iframe festlegen, aber das gesamte Dokument ist möglicherweise nicht sichtbar.

Wenn Sie [Viewport-Längeneinheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units) in Ihrem CSS innerhalb des Iframe-Dokuments verwenden, ist `1vh` 1 % der Höhe des Iframes und `1vw` ist 1 % der Breite des Dokuments.

```css
iframe {
  width: 50vw;
}
```

Wenn der Iframe auf 50vw gesetzt ist, beträgt er 50 % der Breite des `1200px` übergeordneten Dokuments in unserem obigen Beispiel oder `600px`, wobei `1vw` `6px` entspricht. Beim Hineinzoomen schrumpft der Iframe auf `400px` und `1vw` wird zu `4px`.

Eine breitebasierte Media Query innerhalb des Iframe-Dokuments ist relativ zum Viewport des Iframes.

```css
@media screen and (min-width: 500px) {
  p {
    color: red;
  }
}
```

Wenn das oben stehende CSS im Iframe enthalten ist, werden die Absätze rot, wenn der Benutzer herangezoomt hat, aber dieser Stil gilt nicht im nicht herangezoomten Zustand.

#### SVG

In einem [SVG](/de/docs/Web/SVG)-Dokument ist der Viewport der sichtbare Bereich des SVG-Bildes. Sie können eine beliebige Höhe und Breite für ein {{SVGElement("svg")}} festlegen, aber das gesamte Bild ist möglicherweise nicht sichtbar. Der sichtbare Bereich wird als Viewport bezeichnet. Die Größe des Viewports kann mit den Breiten- und Höhenattributen des `<svg>`-Elements definiert werden.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat der Viewport ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 3:4 und ist standardmäßig 400 x 300 Einheiten groß, wobei eine Einheit im Allgemeinen einem CSS-Pixel entspricht.

SVG hat auch ein internes [Koordinatensystem](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems), das über das [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut definiert wird, welches nicht mit dieser Viewport-Diskussion zusammenhängt.

Wenn Sie eine SVG-Datei in Ihr HTML einfügen, ist der Viewport des SVG der anfängliche umgebende Block oder die Breite und Höhe des SVG-Containers. Die Verwendung der {{CSSxRef("@media")}}-Abfrage im CSS Ihres SVGs ist relativ zu diesem Container, nicht zum Browser.

```css
@media screen and (min-width: 400px) and (max-width: 500px) {
  /* CSS goes here */
}
```

Im Allgemeinen werden, wenn Sie die obige Media Query schreiben, die Stile angewendet, wenn der Viewport, im Allgemeinen das Browserfenster, zwischen 400px und 500px groß ist, einschließlich. Die Breiten-Media-Query im SVG basiert auf dem Element, in dem das SVG enthalten ist — das {{htmlelement("img")}}, wenn die Quelle eine SVG-Datei ist, das SVG selbst, wenn das SVG direkt in das HTML eingefügt wird, oder das übergeordnete Element, falls dieses eine zugewiesene Breite hat, und nicht die Breite des Viewports. Da die obige Media-Query in unserer SVG-Datei enthalten ist, wird das CSS angewendet, wenn der SVG-Container zwischen 400px und 500px groß ist.

### JavaScript

Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) bietet einen Mechanismus zur Abfrage und Änderung der Eigenschaften des visuellen Viewports.

## Mobile Viewports

Mobile Geräte gibt es in allen Formen und Größen mit Bildschirmen unterschiedlicher {{Glossary("device_pixel", "Geräte-Pixel")}}-Verhältnisse. Der Viewport des mobilen Browsers ist der Bereich des Fensters, in dem Webinhalte gesehen werden können, was nicht unbedingt dieselbe Größe wie die gerenderte Seite hat. Mobile Browser rendern Seiten in einem virtuellen Fenster oder Viewport, normalerweise bei 980px, was in der Regel breiter als der Bildschirm ist, und verkleinern dann das gerenderte Ergebnis, damit es auf einmal gesehen werden kann. Die Benutzer können dann schwenken und zoomen, um verschiedene Bereiche der Seite zu sehen. Wenn ein mobiler Bildschirm beispielsweise eine Breite von 320px hat, wird eine Webseite möglicherweise mit einem virtuellen Viewport von 980px gerendert und dann in den 320px-Raum verkleinert, was je nach Design für viele, wenn nicht alle, unleserlich ist. Um einem mobilen Browser mitzuteilen, dass er die Viewport-Breite anstelle der standardmäßigen 980px als Bildschirmbreite verwenden soll, können Entwickler einen Viewport-Meta-Tag wie das folgende einfügen:

```html
<meta name="viewport" content="width=device-width" />
```

Die `width`-Eigenschaft steuert die Größe des Viewports. Sie sollte vorzugsweise auf `device-width` gesetzt werden, was die Breite des Bildschirms in CSS-Pixeln bei einem Maßstab von 100 % ist. Es gibt andere Eigenschaften, einschließlich `maximum-scale`, `minimum-scale` und `user-scalable`, die steuern, ob Benutzer die Seite hinein- oder herauszoomen können, aber die Standardwerte sind am besten für Barrierefreiheit und Benutzererfahrung geeignet, sodass diese weggelassen werden können.

## Siehe auch

- [CSSOM View](/de/docs/Web/CSS/CSSOM_view) Modul
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- {{HTMLElement("meta")}}, speziell `<meta name="viewport">`
- [Benutzung des Viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Guides/Viewport_meta_element)

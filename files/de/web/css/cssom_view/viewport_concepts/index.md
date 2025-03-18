---
title: Viewport-Konzepte
slug: Web/CSS/CSSOM_view/Viewport_concepts
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{CSSRef}}

Dieser Artikel erklärt das Konzept des {{Glossary("viewport", "Viewports")}} — was es ist, seine Auswirkungen in Bezug auf CSS, SVG und mobile Geräte — und unterscheidet zwischen dem {{Glossary("visual_viewport", "Visual Viewport")}} und dem {{Glossary("layout_viewport", "Layout Viewport")}}.

## Was ist ein Viewport?

Ein Viewport repräsentiert den Bereich in der Computergrafik, der derzeit betrachtet wird. In Bezug auf Webbrowser ist es im Allgemeinen dasselbe wie das Browserfenster, abzüglich der Benutzeroberfläche, der Menüleiste usw. Das ist der Teil des Dokuments, den Sie gerade sehen.

Dokumente, wie dieser Artikel, können sehr lang sein. Ihr Viewport ist alles, was derzeit sichtbar ist; insbesondere der Abschnitt "Was ist ein Viewport" und vielleicht Teile des Navigationsmenüs. Die Größe des Viewports hängt von der Größe des Bildschirms ab, davon, ob der Browser im Vollbildmodus ist oder nicht, und ob der Browser eingezoomt ist oder nicht. Inhalte außerhalb des Viewports, wie der _Siehe auch_-Abschnitt in diesem Dokument, sind wahrscheinlich erst sichtbar, wenn Sie dahin scrollen.

- Auf größeren Monitoren, auf denen Anwendungen nicht unbedingt im Vollbildmodus sind, ist der Viewport die Größe des Browserfensters.
- Auf den meisten mobilen Geräten und wenn der Browser im Vollbildmodus ist, ist der Viewport der gesamte Bildschirm.
- Im Vollbildmodus ist der Viewport der Gerätescreen, das Fenster ist das Browserfenster, welches so groß wie der Viewport oder kleiner sein kann, und das Dokument ist die Website, welches viel höher oder breiter als der Viewport sein kann.

Zusammengefasst ist der Viewport im Wesentlichen der Teil des Dokuments, der derzeit sichtbar ist.

### Viewport-Größen sind veränderlich

Die Breite des Viewports ist nicht immer die Breite des Fensters. Wenn Sie die Breite oder Höhe des Fensters und Dokuments in Chrome oder Firefox abfragen, können Sie Folgendes erhalten:

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

Es gibt mehrere DOM-Eigenschaften, die Ihnen helfen können, die Viewport-Größe und ähnliche Längen abzufragen:

- Die `Element.clientWidth` des Dokumentenelements ist die innere Breite eines Dokuments in [CSS-Pixeln](/de/docs/Web/HTML/Viewport_meta_tag#screen_density), einschließlich Padding (aber ohne Rahmen, Außenabstände oder vertikale Scrollleisten, falls vorhanden). **Dies ist die Viewport-Breite**.
- `Window.innerWidth` ist die Breite, in CSS-Pixeln, des Browserfenster-Viewports einschließlich, falls gerendert, der vertikalen Scrollleiste.
- `Window.outerWidth` ist die Breite der Außenseite des Browserfensters einschließlich des gesamten Fenster- {{Glossary("chrome", "Chrome")}}.

In einem Experiment damit wurde festgestellt, dass `innerWidth` und `outerWidth` gleich waren, aber `outerHeight` 100px höher als `innerHeight` war. Dies liegt daran, dass `outerHeight` das Browser-Chrome einschließt: Die Messungen wurden in einem Browser mit einer Adressleiste und Lesezeichenleiste, die insgesamt 100px hoch waren, aber keinen Chrome links oder rechts vom Fenster, vorgenommen.

Der Bereich innerhalb der `innerHeight` und `innerWidth` wird im Allgemeinen als **{{Glossary("layout_viewport", "Layout Viewport")}}** betrachtet. Das Browser-Chrome wird nicht als Teil des Viewports betrachtet.

Wenn hineingezoomt wird, melden sowohl Firefox als auch Chrome die neue {{Glossary("CSS_pixel", "CSS-Pixel")}}-Größe für `innerWidth` und `clientWidth`. Die für `outerWidth` und `outerHeight` zurückgegebenen Werte hängen vom Browser ab: Firefox gibt den neuen Wert in CSS-Pixeln zurück, aber Chrome gibt die Länge in der Standardpixel-Größe zurück. Wenn hineingezoomt wird, können Sie erhalten:

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

Der Viewport war ursprünglich 1200 x 800 Pixel groß. Nach dem Einzoomen wurde der Viewport 800 x 533 Pixel groß. Dies ist der _Layout Viewport_. Feste Header oder Footer mit den folgenden Stilen bleiben oben und unten im _Layout Viewport_ haften.

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

Wir erhielten die Messung von 800 x 533, wenn wir mit der Tastatur hineinzoomten. Der Header und Footer blieben bündig an der Ober- und Unterkante des Fensters. Aber was wäre, wenn wir auf einem Tablet herein gezoomt hätten? Was, wenn eine dynamische Tastatur auf einem Telefon geöffnet wird?

### Layout- und visuelle Viewports

Das Web enthält zwei Viewports, den **Layout Viewport** und den **Visual Viewport**. Der Visual Viewport ist der Teil der Webseite, der derzeit im Browser sichtbar ist und veränderlich sein kann. Wenn der Benutzer die Seite durch Zoomgesten vergrößert, eine dynamische Tastatur öffnet oder wenn eine zuvor versteckte Adressleiste sichtbar wird, schrumpft der Visual Viewport, aber der Layout Viewport bleibt unverändert.

[Feste](/de/docs/Web/CSS/position#fixed_positioning) Header oder Footer, wie oben besprochen, kleben am oberen und unteren Rand des _Layout Viewport_ und bleiben daher im Blick, wenn wir mit der Tastatur reinzoomen. Wenn Sie durch Zoomgesten vergrößern, ist der Layout Viewport möglicherweise nicht vollständig sichtbar. Wenn Sie aus der Mitte des Layout Viewport vergrößern, wird der Inhalt in alle vier Richtungen erweitert. Wenn Sie einen festen Header oder Footer haben, bleiben diese am oberen oder unteren Rand des Layout Viewport haften, werden aber möglicherweise nicht oben und unten auf dem Bildschirm des Geräts sichtbar sein — was der Visual Viewport ist. Der Visual Viewport ist der derzeit sichtbare Teil des Layout Viewport. Wenn Sie nach unten scrollen, ändern Sie den Inhalt des Visual Viewport und bringen den unteren Rand des Layout Viewport in Sicht, der den festen Footer anzeigt, der dann am unteren Rand haftet.

Der Visual Viewport ist der sichtbare Teil eines Bildschirms ohne die Bildschirmeingabetastaturen, Bereiche außerhalb eines Zoombereichs oder andere Funktionen, die nicht mit den Dimensionen einer Seite skalieren. Der Visual Viewport hat die gleiche Größe wie der Layout Viewport oder ist kleiner.

Für eine Seite mit iframes, Objekten oder externem SVG haben sowohl die enthaltenen Seiten als auch jede eingebundene Datei ihr eigenes einzigartiges Fensterobjekt. Nur das oberste Fenster hat einen Visual Viewport, der sich vom Layout Viewport unterscheiden kann. Für eingebundene Dokumente sind der Visual Viewport und der Layout Viewport identisch.

### CSS

Der oben beschriebene Layout Viewport und Visual Viewport sind nicht die einzigen Viewports, denen Sie begegnen werden. Jeder Sub-Viewport, der vollständig oder teilweise innerhalb des Layout Viewport angezeigt wird, wird als Visual Viewport betrachtet.

Wir denken im Allgemeinen, dass [`width`](/de/docs/Web/CSS/@media/width) und [`height`](/de/docs/Web/CSS/@media/height) Media Queries relativ zur Breite und Höhe des Browserfensters sind. Tatsächlich sind sie relativ zum Viewport, der im Hauptdokument das Fenster ist, aber die intrinsische Größe des Elternelements in einem eingebetteten Browsing-Kontext wie Objekten, iframes und SVG darstellt. In CSS haben wir auch [Längeneinheiten basierend auf der Viewport-Größe](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units). Eine `vh`-Einheit ist 1 % der Höhe des Layout Viewports. Ebenso ist die `vw`-Einheit 1 % der Breite des Layout Viewports.

#### `<iframe>`

Innerhalb eines {{htmlelement("iframe")}} ist der Visual Viewport die Größe der inneren Breite und Höhe des iframes, anstelle des übergeordneten Dokuments. Sie können jede beliebige Höhe und Breite für ein iframe festlegen, aber das gesamte Dokument ist möglicherweise nicht sichtbar.

Wenn Sie [Viewport-Längeneinheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units) in Ihrem CSS innerhalb des iframe-Dokuments verwenden, ist `1vh` 1 % der Höhe des iframes und `1vw` 1 % der Breite des Dokuments.

```css
iframe {
  width: 50vw;
}
```

Wenn das iframe auf 50vw gesetzt ist, beträgt es 50 % der Breite des `1200px` übergeordneten Dokuments in unserem obigen Beispiel oder `600px`, wobei `1vw` `6px` ist. Beim Einzoomen schrumpft das iframe auf `400px` und `1vw` wird `4px`.

Eine medienbezogene Breitenabfrage im iframe-Dokument ist relativ zur Viewport-Größe des iframes.

```css
@media screen and (min-width: 500px) {
  p {
    color: red;
  }
}
```

Wenn das obige CSS im iframe enthalten ist, werden die Absätze rot, wenn der Benutzer eingezoomt hat, aber dieser Stil gilt nicht im nicht eingezoomten Zustand.

#### SVG

In einem [SVG](/de/docs/Web/SVG)-Dokument ist der Viewport der sichtbare Bereich des SVG-Bildes. Sie können jede beliebige Höhe und Breite für ein {{htmlelement("SVG")}} festlegen, aber das gesamte Bild ist möglicherweise nicht sichtbar. Der Bereich, der sichtbar ist, wird als Viewport bezeichnet. Die Größe des Viewports kann über die Breiten- und Höhenattribute des {{SVGElement("svg")}} Elements definiert werden.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat der Viewport ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 3:4 und ist standardmäßig 400 mal 300 Einheiten groß, wobei eine Einheit im Allgemeinen ein CSS-Pixel ist.

SVG hat auch ein internes [Koordinatensystem](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems), das über das [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut definiert wird und nicht mit dieser Viewport-Diskussion in Verbindung steht.

Wenn Sie eine SVG-Datei in Ihr HTML einfügen, ist der Viewport des SVG der anfängliche enthaltende Block oder die Breite und Höhe des SVG-Containers. Verwenden Sie die {{CSSxRef("@media")}}-Abfrage in Ihrem SVG-CSS, die sich relativ zu diesem Container und nicht zum Browser bezieht.

```css
@media screen and (min-width: 400px) and (max-width: 500px) {
  /* CSS goes here */
}
```

Im Allgemeinen, wenn Sie die obige Medienabfrage schreiben, werden die Stile angewendet, wenn der Viewport, im Allgemeinen das Browserfenster, zwischen 400px und 500px groß ist, einschließlich. Die medienbezogene Breitenabfrage im SVG bezieht sich auf das Element, in dem das SVG enthalten ist — das {{htmlelement("img")}}, wenn die Quelle eine SVG-Datei ist, das SVG selbst, wenn das SVG direkt in das HTML eingefügt wird, oder das übergeordnete Element, wenn das übergeordnete Element eine Breite zugewiesen hat und — nicht die Breite des Viewports. Mit der obigen Medienabfrage in unserer SVG-Datei wird das CSS angewendet, wenn der SVG-Container zwischen 400px und 500px groß ist.

### JavaScript

Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des Visual Viewport.

## Mobile Viewports

Mobile Geräte gibt es in allen Formen und Größen, mit Bildschirmen unterschiedlicher {{Glossary("device_pixel", "Geräte-Pixel")}}-Verhältnisse. Der Viewport des mobilen Browsers ist der Bereich des Fensters, in dem Webinhalt sichtbar ist, der nicht unbedingt die gleiche Größe wie die gerenderte Seite hat. Mobile Browser rendern Seiten in einem virtuellen Fenster oder Viewport, im Allgemeinen bei 980px, das normalerweise breiter als der Bildschirm ist, und verkleinern dann das gerenderte Ergebnis, sodass es vollständig auf einmal gesehen werden kann. Benutzer können dann die Seite verschieben und zoomen, um verschiedene Bereiche der Seite zu sehen. Wenn z.B. ein mobiler Bildschirm eine Breite von 320px hat, könnte eine Website mit einem virtuellen Viewport von 980px gerendert werden, und dann wird sie in den 320px-Bereich geschrumpft, was je nach Design für viele, wenn nicht alle, unlesbar ist. Um einem mobilen Browser mitzuteilen, die Viewport-Breite anstelle der Standardbreite von 980px als Breite des Bildschirms zu verwenden, können Entwickler einen Viewport-Meta-Tag einfügen wie das folgende:

```html
<meta name="viewport" content="width=device-width" />
```

Die `width`-Eigenschaft steuert die Größe des Viewports. Sie sollte vorzugsweise auf `device-width` gesetzt werden, was die Breite des Bildschirms in CSS-Pixeln bei einer Skalierung von 100 % ist. Es gibt andere Eigenschaften, einschließlich `maximum-scale`, `minimum-scale` und `user-scalable`, die steuern, ob Benutzer die Seite hinein- oder herauszoomen können, aber die Standardwerte sind die besten für Zugänglichkeit und Benutzererfahrung, sodass diese weggelassen werden können.

## Siehe auch

- [CSSOM View](/de/docs/Web/CSS/CSSOM_view) Modul
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- {{HTMLElement("meta")}}, insbesondere `<meta name="viewport">`
- [Verwenden des Viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Viewport_meta_tag)

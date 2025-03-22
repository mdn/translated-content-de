---
title: Viewport-Konzepte
slug: Web/CSS/CSSOM_view/Viewport_concepts
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{CSSRef}}

Dieser Artikel erklärt das Konzept des {{Glossary("viewport", "Viewport")}} — was es ist, seine Auswirkungen im Hinblick auf CSS, SVG und Mobilgeräte — und unterscheidet zwischen dem {{Glossary("visual_viewport", "visuellen Viewport")}} und dem {{Glossary("layout_viewport", "Layout-Viewport")}}.

## Was ist ein Viewport?

Ein Viewport repräsentiert den Bereich in der Computergrafik, der aktuell angezeigt wird. In Bezug auf Webbrowser ist es im Allgemeinen dasselbe wie das Browserfenster, ohne die Benutzeroberfläche, Menüleiste usw. Das ist der Teil des Dokuments, den Sie gerade sehen.

Dokumente, wie dieser Artikel, können sehr lang sein. Ihr Viewport ist alles, was derzeit sichtbar ist; insbesondere der Abschnitt „Was ist ein Viewport“ und möglicherweise ein Teil des Navigationsmenüs. Die Größe des Viewports hängt von der Größe des Bildschirms ab, ob der Browser im Vollbildmodus ist oder nicht, und ob der Browser vergrößert wird oder nicht. Inhalte außerhalb des Viewports, wie der Abschnitt _Siehe auch_ in diesem Dokument, sind wahrscheinlich nicht sichtbar, bis sie in den sichtbaren Bereich gescrollt werden.

- Auf größeren Monitoren, auf denen Anwendungen nicht unbedingt im Vollbildmodus sind, entspricht der Viewport der Größe des Browserfensters.
- Auf den meisten Mobilgeräten und wenn der Browser im Vollbildmodus ist, ist der Viewport der gesamte Bildschirm.
- Im Vollbildmodus entspricht der Viewport dem Geräteschirm, das Fenster ist das Browserfenster, das so groß wie der Viewport oder kleiner sein kann und das Dokument ist die Webseite, die viel höher oder breiter als der Viewport sein kann.

Zusammengefasst, der Viewport ist im Wesentlichen der Teil des Dokuments, der aktuell sichtbar ist.

### Viewport-Größen sind veränderbar

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

- Die [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) des Dokumentenelements ist die innere Breite eines Dokuments in [CSS-Pixel](/de/docs/Web/HTML/Viewport_meta_tag#screen_density), einschließlich der Polsterung (aber ohne Rahmen, Ränder oder vertikale Bildlaufleisten, falls vorhanden). **Dies ist die Breite des Viewports**.
- Die [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) ist die Breite, in CSS-Pixeln, des Browserfenster-Viewports, einschließlich der vertikalen Bildlaufleiste, falls gerendert.
- Die [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) ist die Breite der Außenseite des Browserfensters, einschließlich des gesamten Browser-{{Glossary("chrome", "Chrome")}}.

Bei einem Experiment mit diesen war `innerWidth` und `outerWidth` gleich, aber `outerHeight` war 100px höher als `innerHeight`. Dies liegt daran, dass `outerHeight` das Browser-Chrome umfasst: die Messungen wurden in einem Browser mit einer Adressleiste und einer Lesezeichenleiste, die zusammen 100px hoch sind, jedoch keinem Chrome links oder rechts neben dem Fenster, durchgeführt.

Der Bereich innerhalb der `innerHeight` und `innerWidth` wird allgemein als **{{Glossary("layout_viewport", "Layout-Viewport")}}** angesehen. Das Browser-Chrome wird nicht als Teil des Viewports betrachtet.

Wenn Sie hineinzoomen, berichten sowohl Firefox als auch Chrome die neue {{Glossary("CSS_pixel", "CSS-Pixel")}} Größe für `innerWidth` und `clientWidth`. Die zurückgegebenen Werte für `outerWidth` und `outerHeight` hängen vom Browser ab: Firefox meldet den neuen Wert in CSS-Pixeln, aber Chrome gibt die Länge in der Standard-Pixelgröße zurück. Wenn Sie hineinzoomen, könnten Sie Folgendes erhalten:

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

Der ursprüngliche Viewport betrug 1200 x 800 Pixel. Nach dem Hineinzoomen wurde der Viewport zu 800 x 533 Pixel. Dies ist der _Layout-Viewport_. Fixierte Kopf- oder Fußzeilen, mit den folgenden Stilen, werden oben bzw. unten am _Layout-Viewport_ befestigt bleiben.

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

Wir erhielten die 800 x 533 Messung, als wir mit der Tastatur hineinzoomten. Die Kopf- und Fußzeile blieben bündig oben und unten am Fenster. Aber was wäre, wenn wir auf einem Tablet hereinzoomen würden? Was wäre, wenn auf einem Telefon eine dynamische Tastatur eingeblendet wird?

### Layout- und visuelle Viewports

Das Web enthält zwei Viewports, den **Layout-Viewport** und den **visuellen Viewport**. Der visuelle Viewport ist der Teil der Webseite, der aktuell im Browser sichtbar ist und sich ändern kann. Wenn der Benutzer die Seite hereinzwingt, eine dynamische Tastatur öffnet oder eine zuvor verborgene Adressleiste sichtbar wird, schrumpft der visuelle Viewport, aber der Layout-Viewport bleibt unverändert.

[Fixierte](/de/docs/Web/CSS/position#fixed_positioning) klebrige Kopf- oder Fußzeilen, wie oben besprochen, haften am oberen und unteren Rand des _Layout-Viewports_ und bleiben daher sichtbar, wenn wir mit der Tastatur hineinzoomen. Wenn Sie hereinzoomen, ist der Layout-Viewport möglicherweise nicht vollständig sichtbar. Wenn Sie von der Mitte des Layout-Viewports aus vergrößern, wird der Inhalt in alle vier Richtungen erweitert. Wenn Sie eine klebrige Kopf- oder Fußzeile haben, bleiben diese am oberen oder unteren Rand des Layout-Viewports, sind jedoch möglicherweise nicht am oberen und unteren Rand des Geräteschirms sichtbar — der der visuelle Viewport ist. Der visuelle Viewport ist der derzeit sichtbare Teil des Layout-Viewports. Wenn Sie nach unten scrollen, ändern Sie den Inhalt des visuellen Viewports und bringen das Ende des Layout-Viewports in Sicht, wodurch die klebrige Fußzeile angezeigt wird, die dann unten bleibt.

Der visuelle Viewport ist der visuelle Teil eines Bildschirms, ohne eingeblendete Tastaturen, Bereiche außerhalb eines gezoomten Bereichs oder andere Funktionen, die nicht mit den Abmessungen einer Seite skalieren. Der visuelle Viewport hat die gleiche Größe wie der Layout-Viewport oder ist kleiner.

Für eine Seite, die iframes, Objekte oder externe SVG enthält, haben sowohl die enthaltenen Seiten als auch jede enthaltene Datei ihr eigenes einzigartiges Fensterobjekt. Nur das Fenster der obersten Ebene hat einen visuellen Viewport, der sich vom Layout-Viewport unterscheiden kann. Bei enthaltenen Dokumenten sind der visuelle Viewport und der Layout-Viewport gleich.

### CSS

Der oben beschriebene Layout-Viewport und visuelle Viewport sind nicht die einzigen Viewports, denen Sie begegnen werden. Jeder Unter-Viewport, der vollständig oder teilweise innerhalb des Layout-Viewports angezeigt wird, wird als visueller Viewport angesehen.

Wir denken im Allgemeinen an [`width`](/de/docs/Web/CSS/@media/width) und [`height`](/de/docs/Web/CSS/@media/height) Media Queries als relativ zur Breite und Höhe des Browserfensters. Sie sind tatsächlich relativ zum Viewport, der das Fenster im Hauptdokument ist, aber dies ist die intrinsische Größe des Elternteils des Elements in einem geschachtelten Browsing-Kontext wie Objekte, iframes und SVG. In CSS haben wir auch [Längeneinheiten basierend auf der Viewport-Größe](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units). Eine `vh`-Einheit entspricht 1 % der Höhe des Layout-Viewports. Ebenso ist die `vw`-Einheit 1 % der Breite des Layout-Viewports.

#### `<iframe>`

Innerhalb eines {{htmlelement("iframe")}} ist der visuelle Viewport die Größe der inneren Breite und Höhe des iframes, nicht des übergeordneten Dokuments. Sie können eine beliebige Höhe und Breite für ein iframe festlegen, aber das gesamte Dokument ist möglicherweise nicht sichtbar.

Wenn Sie [Viewport-Längeneinheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units) in Ihrem CSS innerhalb des iframe-Dokuments verwenden, wird `1vh` 1 % der Höhe des iframes und `1vw` 1 % der Breite des Dokuments sein.

```css
iframe {
  width: 50vw;
}
```

Wenn das iframe auf 50vw gesetzt ist, wird es 50 % der Breite des `1200px` großen übergeordneten Dokuments in unserem obigen Beispiel entsprechen, also `600px`, wobei `1vw` `6px` entspricht. Beim Hineinzoomen schrumpft das iframe auf `400px` und `1vw` wird zu `4px`.

Eine breitebasierte Media Query innerhalb des iframe-Dokuments bezieht sich auf den Viewport des iframes.

```css
@media screen and (min-width: 500px) {
  p {
    color: red;
  }
}
```

Wenn das obige CSS im iframe enthalten ist, werden die Absätze rot, wenn der Benutzer hineingezoomt hat, aber dieser Stil gilt nicht im nicht hereingezoomten Zustand.

#### SVG

In einem [SVG](/de/docs/Web/SVG)-Dokument ist der Viewport der sichtbare Bereich des SVG-Bildes. Sie können eine beliebige Höhe und Breite für ein {{SVGElement("svg")}} festlegen, aber das gesamte Bild ist möglicherweise nicht sichtbar. Der sichtbare Bereich wird als Viewport bezeichnet. Die Größe des Viewports kann über die Breiten- und Höhenattribute des `<svg>`-Elements definiert werden.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat der Viewport ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 3:4 und ist standardmäßig 400 mal 300 Einheiten groß, wobei eine Einheit im Allgemeinen einem CSS-Pixel entspricht.

SVG hat auch ein internes [Koordinatensystem](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems), das über das [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut definiert wird und nicht mit dieser Viewport-Diskussion in Zusammenhang steht.

Wenn Sie eine SVG-Datei in Ihr HTML einfügen, ist der Viewport des SVG der anfängliche Block, oder die Breite und Höhe des SVG-Containers. Die {{CSSxRef("@media")}}-Abfrage in Ihrem SVG-CSS bezieht sich auf diesen Container, nicht auf den Browser.

```css
@media screen and (min-width: 400px) and (max-width: 500px) {
  /* CSS goes here */
}
```

Im Allgemeinen, wenn Sie die obige Media Query schreiben, werden die Styles angewendet, wenn der Viewport, im Allgemeinen das Browserfenster, inklusiv zwischen 400px und 500px ist. Die Breite der Media Query im SVG basiert auf dem Element, in dem das SVG enthalten ist — das {{htmlelement("img")}}, wenn die Quelle eine SVG-Datei ist, das SVG selbst, wenn das SVG direkt in das HTML integriert ist, oder das übergeordnete Element, wenn das übergeordnete Element eine zugewiesene Breite hat und — nicht die Breite des Viewports. Da die obige Media Query in unserer SVG-Datei enthalten ist, wird das CSS angewendet, wenn der SVG-Container zwischen 400px und 500px liegt.

### JavaScript

Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des visuellen Viewports.

## Mobile Viewports

Mobilgeräte kommen in allen Formen und Größen, mit Bildschirmen von unterschiedlichen {{Glossary("device_pixel", "Gerätepixel")}}-Verhältnissen. Der Viewport des mobilen Browsers ist der Bereich des Fensters, in dem Webinhalte gesehen werden können, was nicht unbedingt die gleiche Größe wie die gerenderte Seite hat. Mobile Browser rendern Seiten in einem virtuellen Fenster oder Viewport, im Allgemeinen bei 980px, das normalerweise breiter als das Display ist, und verkleinern dann das gerenderte Ergebnis, damit es vollständig angezeigt werden kann. Benutzer können dann scrollen und zoomen, um verschiedene Bereiche der Seite zu sehen. Beispielsweise, wenn ein mobiler Bildschirm eine Breite von 320px hat, könnte eine Website mit einem virtuellen Viewport von 980px gerendert werden und dann wird sie auf die 320px verkleinert, was, je nach Design, für viele bis alle unleserlich ist. Um einem mobilen Browser mitzuteilen, die Breite des Viewports anstelle des Standardwerts von 980px zu verwenden, können Entwickler ein Viewport-Meta-Tag einfügen, wie das folgende:

```html
<meta name="viewport" content="width=device-width" />
```

Die `width`-Eigenschaft steuert die Größe des Viewports. Sie sollte vorzugsweise auf `device-width` gesetzt werden, was der Breite des Bildschirms in CSS-Pixeln bei einer Skalierung von 100 % entspricht. Es gibt andere Eigenschaften, einschließlich `maximum-scale`, `minimum-scale` und `user-scalable`, die steuern, ob Benutzer die Seite herein- oder herauszoomen können, aber die Standardwerte sind die besten für Barrierefreiheit und Benutzererfahrung, daher können diese weggelassen werden.

## Siehe auch

- [CSSOM-Ansicht](/de/docs/Web/CSS/CSSOM_view)-Modul
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- {{HTMLElement("meta")}}, insbesondere `<meta name="viewport">`
- [Das Viewport-Meta-Tag verwenden, um das Layout auf mobilen Browsern zu steuern](/de/docs/Web/HTML/Viewport_meta_tag)

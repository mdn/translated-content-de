---
title: Viewport-Konzept
slug: Web/CSS/CSSOM_view/Viewport_concepts
l10n:
  sourceCommit: f731452fabde211bee55aedd39fc83d60c4e4918
---

{{CSSRef}}

Dieser Artikel erklärt das Konzept des {{Glossary("viewport", "Viewports")}} — was es ist, seine Auswirkungen im Hinblick auf CSS, SVG und mobile Geräte — und differenziert zwischen dem {{Glossary("visual_viewport", "visuellen Viewport")}} und dem {{Glossary("layout_viewport", "Layout-Viewport")}}.

## Was ist ein Viewport?

Ein Viewport repräsentiert den Bereich in der Computergrafik, der aktuell betrachtet wird. In Bezug auf Webbrowser ist er im Allgemeinen dasselbe wie das Browserfenster, jedoch ohne die Benutzeroberfläche, die Menüleiste usw. Das ist der Teil des Dokuments, den Sie betrachten.

Dokumente, wie dieser Artikel, können sehr lang sein. Ihr Viewport ist alles, was aktuell sichtbar ist; insbesondere der Abschnitt "Was ist ein Viewport", und möglicherweise ein Teil des Navigationsmenüs. Die Größe des Viewports hängt von der Größe des Bildschirms ab, davon, ob der Browser im Vollbildmodus ist oder nicht, und davon, ob der Browser vergrößert ist oder nicht. Inhalte außerhalb des Viewports, wie der Abschnitt _See Also_ in diesem Dokument, sind wahrscheinlich erst sichtbar, wenn sie in den sichtbaren Bereich gescrollt werden.

- Auf größeren Monitoren, auf denen Anwendungen nicht unbedingt im Vollbildmodus sind, hat der Viewport die Größe des Browserfensters.
- Auf den meisten mobilen Geräten und wenn der Browser im Vollbildmodus ist, ist der Viewport der gesamte Bildschirm.
- Im Vollbildmodus ist der Viewport der Gerätescreen, das Fenster ist das Browserfenster, das so groß wie der Viewport oder kleiner sein kann, und das Dokument ist die Website, die viel höher oder breiter als der Viewport sein kann.

Zusammengefasst ist der Viewport im Grunde der Teil des Dokuments, der aktuell sichtbar ist.

### Viewport-Größen sind veränderlich

Die Breite des Viewports ist nicht immer die Breite des Fensters. Wenn Sie die Breite oder Höhe des Fensters und Dokuments in Chrome oder Firefox abfragen, können Sie folgende Werte erhalten:

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

Es gibt mehrere DOM-Eigenschaften, die Ihnen helfen können, die Viewport-Größe und andere ähnliche Längen abzufragen:

- Die [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) des Dokumentelements ist die innere Breite eines Dokuments in [CSS-Pixeln](/de/docs/Web/HTML/Viewport_meta_tag#screen_density), einschließlich Padding (aber ohne Rahmen, Außenabstände oder vertikale Scrollleisten, falls vorhanden). **Dies ist die Viewport-Breite**.
- Die [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) ist die Breite, in CSS-Pixeln, des Browserfenster-Viewports einschließlich, falls gerendert, der vertikalen Scrollleiste.
- Die [`Window.outerWidth`](/de/docs/Web/API/Window/outerWidth) ist die Breite außerhalb des Browserfensters einschließlich aller Fenster-{{Glossary("chrome", "Chrome")}}.

In einem Experiment im Umgang mit diesen Größen waren `innerWidth` und `outerWidth` gleich, aber die `outerHeight` war 100px höher als die `innerHeight`. Dies liegt daran, dass `outerHeight` das Browser-Chrome enthält: Die Messungen wurden bei einem Browser mit einer Adressleiste und einer Lesezeichenleiste gemacht, die insgesamt 100px hoch ist, aber kein Chrome auf der linken oder rechten Seite des Fensters hatte.

Der Bereich innerhalb der `innerHeight` und `innerWidth` wird im Allgemeinen als **{{Glossary("layout_viewport", "Layout-Viewport")}}** betrachtet. Das Browser-Chrome wird nicht als Teil des Viewports betrachtet.

Bei vergrößerter Darstellung melden sowohl Firefox als auch Chrome die neue {{Glossary("CSS_pixel", "CSS-Pixel")}}-Größe für `innerWidth` und `clientWidth`. Die für `outerWidth` und `outerHeight` zurückgegebenen Werte hängen vom Browser ab: Firefox berichtet den neuen Wert in CSS-Pixeln, aber Chrome gibt die Länge in der Standardpixelgröße zurück. Bei vergrößerter Darstellung können Sie folgendes erhalten:

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

Ursprünglich war der Viewport 1200 x 800 Pixel. Nach der Vergrößerung wurde der Viewport zu 800 x 533 Pixel. Dies ist der _Layout-Viewport_. Sticky-Header oder -Footer mit den folgenden Stilen bleiben oben bzw. unten im _Layout-Viewport_ haften.

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

Wir erhielten die Messung von 800 x 533, als wir mit der Tastatur vergrößerten. Der Header und Footer blieben bündig am oberen und unteren Rand des Fensters. Aber was, wenn wir auf einem Tablet zusammengezoomt hätten? Was, wenn eine dynamische Tastatur auf einem Telefon aufspringt?

### Layout- und visuelle Viewports

Das Web enthält zwei Viewports, den **Layout-Viewport** und den **visuellen Viewport**. Der visuelle Viewport ist der Teil der Webseite, der derzeit im Browser sichtbar ist und sich ändern kann. Wenn der Benutzer die Seite zusammendrückt, eine dynamische Tastatur öffnet oder wenn eine zuvor verborgene Adressleiste sichtbar wird, schrumpft der visuelle Viewport, aber der Layout-Viewport bleibt unverändert.

[Feste](/de/docs/Web/CSS/position#fixed_positioning) Sticky-Header oder -Footer, wie oben diskutiert, bleiben am oberen und unteren Rand des _Layout-Viewports_ haften und bleiben daher sichtbar, wenn wir mit der Tastatur vergrößern. Wenn Sie zusammenzoomen, ist möglicherweise nicht der gesamte Layout-Viewport sichtbar. Wenn Sie aus der Mitte des Layout-Viewports vergrößern, dehnt sich der Inhalt in alle vier Richtungen aus. Wenn Sie einen Sticky-Header oder -Footer haben, bleiben diese immer noch am oberen oder unteren Rand des Layout-Viewports, aber sie sind möglicherweise nicht am oberen und unteren Rand des Bildschirms des Geräts sichtbar — das ist der visuelle Viewport. Der visuelle Viewport ist der aktuell sichtbare Teil des Layout-Viewports. Wenn Sie nach unten scrollen, ändern Sie den Inhalt des visuellen Viewports und bringen den unteren Teil des Layout-Viewports in Sicht, wobei der Sticky-Footer dann unten bleibt.

Der visuelle Viewport ist der sichtbare Teil eines Bildschirms ohne On-Screen-Tastaturen, Bereiche außerhalb eines Zoom-Bereichs oder andere Merkmale, die sich nicht mit den Dimensionen einer Seite skalieren. Der visuelle Viewport ist gleich groß wie der Layout-Viewport oder kleiner.

Für eine Seite mit iframes, Objekten oder externem SVG haben sowohl die einbettenden Seiten als auch jede enthaltene Datei ihr eigenes, einzigartiges Fensterobjekt. Nur das oberste Fenster hat einen visuellen Viewport, der sich vom Layout-Viewport unterscheiden kann. Bei eingebetteten Dokumenten sind der visuelle Viewport und der Layout-Viewport gleich.

### CSS

Der oben beschriebene Layout-Viewport und visuelle Viewport sind nicht die einzigen Viewports, denen Sie begegnen werden. Jeder Sub-Viewport, der innerhalb des Layout-Viewports vollständig oder teilweise angezeigt wird, wird als visueller Viewport betrachtet.

Wir betrachten [`width`](/de/docs/Web/CSS/@media/width)- und [`height`](/de/docs/Web/CSS/@media/height)-Media-Queries im Allgemeinen als relativ zur Breite und Höhe des Browserfensters. Sie sind tatsächlich relativ zum Viewport, der das Fenster im Hauptdokument ist, aber die intrinsische Größe des Elternelements in einem geschachtelten Browsing-Kontext wie Objekten, iframes und SVG ist. In CSS haben wir auch [Längeneinheiten basierend auf der Viewport-Größe](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units). Eine `vh`-Einheit ist 1% der Höhe des Layout-Viewports. Ebenso ist die `vw`-Einheit 1% der Breite des Layout-Viewports.

#### `<iframe>`

Innerhalb eines {{htmlelement("iframe")}}, ist der visuelle Viewport die Größe der inneren Breite und Höhe des iframes, anstatt das übergeordnete Dokument. Sie können jede Höhe und Breite auf ein iframe einstellen, aber das gesamte Dokument ist möglicherweise nicht sichtbar.

Wenn Sie [Viewport-Längeneinheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units) in Ihrem CSS innerhalb des iframe-Dokuments verwenden, wird `1vh` 1% der Höhe des iframes und `1vw` 1% der Breite des Dokuments sein.

```css
iframe {
  width: 50vw;
}
```

Wenn das iframe auf 50vw eingestellt ist, wird es 50% der Breite des `1200px` übergeordneten Dokuments in unserem obigen Beispiel sein, oder `600px`, wobei `1vw` `6px` ist. Bei vergrößerter Darstellung schrumpft das iframe auf `400px` und `1vw` wird zu `4px`.

Eine Breitenbasierte Media-Query innerhalb des iframe-Dokuments ist relativ zum Viewport des iframes.

```css
@media screen and (min-width: 500px) {
  p {
    color: red;
  }
}
```

Wenn das obige CSS im iframe enthalten ist, werden die Absätze rot, wenn der Benutzer vergrößert hat, aber dieser Stil gilt nicht im nicht vergrößerten Zustand.

#### SVG

In einem [SVG](/de/docs/Web/SVG)-Dokument ist der Viewport der sichtbare Bereich des SVG-Bildes. Sie können jede Höhe und Breite auf ein {{htmlelement("SVG")}} einstellen, aber das gesamte Bild könnte nicht sichtbar sein. Der sichtbare Bereich wird als Viewport bezeichnet. Die Größe des Viewports kann mit den Breiten- und Höhenattributen des {{SVGElement("svg")}}-Elements definiert werden.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat der Viewport ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 3:4 und ist standardmäßig 400 x 300 Einheiten groß, wobei eine Einheit im Allgemeinen einem CSS-Pixel entspricht.

SVG verfügt auch über ein internes [Koordinatensystem](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems), das über das [viewBox](/de/docs/Web/SVG/Attribute/viewBox)-Attribut definiert wird und nicht im Zusammenhang mit dieser Viewport-Diskussion steht.

Wenn Sie eine SVG-Datei in Ihrem HTML einfügen, ist der Viewport der SVG der anfängliche Containerblock oder die Breite und Höhe des SVG-Containers. Die Verwendung der {{CSSxRef("@media")}}-Abfrage im CSS Ihrer SVG bezieht sich auf diesen Container, nicht auf den Browser.

```css
@media screen and (min-width: 400px) and (max-width: 500px) {
  /* CSS goes here */
}
```

Im Allgemeinen, wenn Sie die obige Media-Query schreiben, werden die Stile angewendet, wenn der Viewport, im Allgemeinen das Browserfenster, zwischen 400px und 500px liegt, einschließlich. Die Breiten-Media-Query im SVG basiert auf dem Element, in dem das SVG enthalten ist — das {{htmlelement("img")}}, wenn die Quelle eine SVG-Datei ist, das SVG selbst, wenn das SVG direkt in das HTML eingefügt ist, oder das übergeordnete Element, wenn das übergeordnete Element eine Breite zugewiesen hat und — nicht die Breite des Viewports. Mit der obigen Media-Query, die in unsere SVG-Datei eingetragen ist, wird das CSS angewendet, wenn der SVG-Container zwischen 400px und 500px groß ist.

### JavaScript

Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) bietet einen Mechanismus zum Abfragen und Ändern der Eigenschaften des visuellen Viewports.

## Mobile Viewports

Mobile Geräte gibt es in allen Formen und Größen, mit Bildschirmen unterschiedlicher {{Glossary("device_pixel", "Gerätepixel")}}-Verhältnisse. Der Viewport des mobilen Browsers ist der Bereich des Fensters, in dem Webinhalte sichtbar sein können, was nicht unbedingt die gleiche Größe wie die gerenderte Seite hat. Mobile Browser rendern Seiten in einem virtuellen Fenster oder Viewport, in der Regel bei 980px, das normalerweise breiter als der Bildschirm ist, und verkleinern dann das gerenderte Ergebnis, sodass alles auf einmal sichtbar ist. Benutzer können dann schwenken und zoomen, um verschiedene Bereiche der Seite zu sehen. Zum Beispiel, wenn ein mobiler Bildschirm eine Breite von 320px hat, könnte eine Website mit einem virtuellen Viewport von 980px gerendert werden und dann auf den 320px-Bereich geschrumpft werden, was, abhängig vom Design, für viele möglicherweise unleserlich ist, wenn nicht für alle. Um einem mobilen Browser mitzuteilen, die Viewport-Breite anstelle der Standard-980px als Breite des Bildschirms zu verwenden, können Entwickler ein Viewport-Meta-Tag wie das folgende einfügen:

```html
<meta name="viewport" content="width=device-width" />
```

Die `width`-Eigenschaft steuert die Größe des Viewports. Es sollte vorzugsweise auf `device-width` gesetzt werden, was die Breite des Bildschirms in CSS-Pixeln bei einem Maßstab von 100% ist. Es gibt andere Eigenschaften, einschließlich `maximum-scale`, `minimum-scale` und `user-scalable`, die steuern, ob Benutzer die Seite vergrößern oder verkleinern können, aber die Standardwerte sind die besten für Barrierefreiheit und Benutzererfahrung, sodass diese weggelassen werden können.

## Siehe auch

- [CSSOM View](/de/docs/Web/CSS/CSSOM_view) Modul
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- {{HTMLElement("meta")}}, insbesondere `<meta name="viewport">`
- [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Viewport_meta_tag)

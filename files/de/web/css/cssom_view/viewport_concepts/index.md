---
title: Konzepte zum Viewport
slug: Web/CSS/CSSOM_view/Viewport_concepts
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Dieser Artikel erklärt das Konzept des {{Glossary("viewport", "Viewports")}} — was es ist, seine Auswirkungen im Hinblick auf CSS, SVG und mobile Geräte — und differenziert zwischen dem {{Glossary("visual_viewport", "visuellen Viewport")}} und dem {{Glossary("layout_viewport", "Layout-Viewport")}}.

## Was ist ein Viewport?

Ein Viewport stellt den Bereich in der Computergrafik dar, der derzeit angezeigt wird. In Bezug auf Webbrowser entspricht er im Allgemeinen dem Browserfenster, abzüglich der Benutzeroberfläche, Menüleiste usw. Das ist der Teil des Dokuments, den Sie sich ansehen.

Dokumente, wie dieser Artikel, können sehr lang sein. Ihr Viewport ist alles, was derzeit sichtbar ist; insbesondere der Abschnitt „Was ist ein Viewport“ und möglicherweise ein Teil des Navigationsmenüs. Die Größe des Viewports hängt von der Größe des Bildschirms ab, davon, ob der Browser im Vollbildmodus ist oder nicht, und ob der Browser herangezoomt ist oder nicht. Inhalte außerhalb des Viewports, wie der Abschnitt _See Also_ in diesem Dokument, sind wahrscheinlich erst sichtbar, wenn sie in den sichtbaren Bereich gescrollt werden.

- Auf größeren Monitoren, bei denen Anwendungen nicht unbedingt im Vollbildmodus angezeigt werden, ist der Viewport die Größe des Browserfensters.
- Auf den meisten mobilen Geräten und wenn der Browser im Vollbildmodus ist, umfasst der Viewport den gesamten Bildschirm.
- Im Vollbildmodus ist der Viewport der Geräteschirm, das Fenster ist das Browserfenster, das so groß wie der Viewport oder kleiner sein kann, und das Dokument ist die Website, die viel höher oder breiter als der Viewport sein kann.

Zusammengefasst ist der Viewport im Wesentlichen der Teil des Dokuments, der derzeit sichtbar ist.

### Viewport-Größen sind veränderlich

Die Breite des Viewports ist nicht immer die Breite des Fensters. Wenn Sie unter Chrome oder Firefox die Breite oder Höhe des Fensters und Dokuments abfragen, erhalten Sie möglicherweise:

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

- Die `Element.clientWidth` des Dokumentenelements ist die innere Breite eines Dokuments in [CSS-Pixeln](/de/docs/Web/HTML/Guides/Viewport_meta_element#screen_density), einschließlich Padding (aber nicht Ränder, Außenabstände oder vertikale Bildlaufleisten, falls vorhanden). **Dies ist die Viewport-Breite**.
- Die `Window.innerWidth` ist die Breite des Browserfenster-Viewports in CSS-Pixeln einschließlich der vertikalen Bildlaufleiste, falls dargestellt.
- Die `Window.outerWidth` ist die Breite des äußeren Teils des Browserfensters, einschließlich aller Fenster-{{Glossary("chrome", "Chrome")}}.

In einem Experiment mit diesen Eigenschaften wurden `innerWidth` und `outerWidth` als gleich beobachtet, aber `outerHeight` war 100px höher als `innerHeight`. Dies liegt daran, dass `outerHeight` das Browser-Chrome umfasst: Die Messungen wurden in einem Browser mit einer Adressleiste und einer Lesezeichenleiste durchgeführt, die zusammen 100px hoch sind, jedoch ohne Chrome an der linken oder rechten Fensterseite.

Der Bereich innerhalb von `innerHeight` und `innerWidth` wird im Allgemeinen als **{{Glossary("layout_viewport", "Layout-Viewport")}}** betrachtet. Das Browser-Chrome wird nicht als Teil des Viewports betrachtet.

Wenn herangezoomt wird, geben sowohl Firefox als auch Chrome die neue {{Glossary("CSS_pixel", "CSS-Pixel")}}-Größe für `innerWidth` und `clientWidth` an. Die für `outerWidth` und `outerHeight` zurückgegebenen Werte hängen vom Browser ab: Firefox gibt den neuen Wert in CSS-Pixeln an, während Chrome die Länge in der Standard-Pixelgröße zurückgibt. Wenn herangezoomt wird, können Sie Folgendes erhalten:

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

Der Viewport war ursprünglich 1200 x 800 Pixel. Nach dem Heranzoomen wurde der Viewport 800 x 533 Pixel. Dies ist der _Layout-Viewport_. Fixierte Header oder Footer mit den folgenden Stilen heften sich entsprechend an den oberen und unteren Rand des _Layout-Viewports_.

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

Beim Heranzoomen mit der Tastatur erhielten wir die Messung von 800 x 533. Der Header und Footer blieben bündig mit dem oberen und unteren Fensterrand. Aber was wäre, wenn wir auf einem Tablet herangezoomt hätten? Was wäre, wenn eine dynamische Tastatur auf einem Telefon geöffnet würde?

### Layout- und visuelle Viewports

Das Web enthält zwei Viewports, den **Layout-Viewport** und den **visuellen Viewport**. Der visuelle Viewport ist der Teil der Webseite, der derzeit im Browser sichtbar ist und sich ändern kann. Wenn der Benutzer die Seite heranzoomt, eine dynamische Tastatur öffnet oder eine zuvor verborgene Adressleiste sichtbar wird, schrumpft der visuelle Viewport, aber der Layout-Viewport bleibt unverändert.

[Fixierte](/de/docs/Web/CSS/position#fixed_positioning) Header oder Footer, wie oben erwähnt, kleben am oberen und unteren Rand des _Layout-Viewports_ und bleiben daher sichtbar, wenn wir mit der Tastatur heranzoomen. Wenn Sie heranzoomen, ist der Layout-Viewport möglicherweise nicht vollständig sichtbar. Wenn Sie vom Mittelpunkt des Layout-Viewports aus vergrößern, dehnen sich die Inhalte in alle vier Richtungen aus. Wenn Sie einen fixierten Header oder Footer haben, bleiben diese am oberen oder unteren Rand des Layout-Viewports haften, sind aber möglicherweise nicht am oberen und unteren Rand des Geräteschirms sichtbar – was der visuelle Viewport ist. Der visuelle Viewport ist der derzeit sichtbare Teil des Layout-Viewports. Wenn Sie nach unten scrollen, ändern Sie den Inhalt des visuellen Viewports und bringen den unteren Rand des Layout-Viewports ins Sichtfeld, wodurch der fixe Footer angezeigt wird, der dann unten kleben bleibt.

Der visuelle Viewport ist der sichtbare Teil eines Bildschirms, der keine Bildschirmlinien, Bereiche außerhalb eines herangezoomten Bereichs oder andere Funktionen umfasst, die nicht mit den Abmessungen einer Seite skalieren. Der visuelle Viewport hat die gleiche Größe wie der Layout-Viewport oder ist kleiner.

Für eine Seite mit iframes, Objekten oder externem SVG haben sowohl die einbettenden Seiten als auch jede eingebettete Datei ihr eigenes einzigartiges Fensterobjekt. Nur das Fenster höchster Ebene hat einen visuellen Viewport, der sich vom Layout-Viewport unterscheiden kann. Für eingebettete Dokumente sind der visuelle Viewport und der Layout-Viewport gleich.

### CSS

Der oben beschriebene Layout-Viewport und visuelle Viewport sind nicht die einzigen Viewports, denen Sie begegnen werden. Jeder Unter-Viewport, der vollständig oder teilweise im Layout-Viewport angezeigt wird, wird als visueller Viewport betrachtet.

Wir denken im Allgemeinen, dass [`width`](/de/docs/Web/CSS/@media/width)- und [`height`](/de/docs/Web/CSS/@media/height)-Medienabfragen relativ zur Breite und Höhe des Browserfensters sind. Sie sind tatsächlich relativ zum Viewport, was im Hauptdokument das Fenster ist, aber die intrinsische Größe des Elternelements in einem eingebetteten Browsing-Kontext wie Objekten, iframes und SVG. In CSS haben wir auch [Längeneinheiten basierend auf der Viewport-Größe](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units). Eine `vh`-Einheit ist 1 % der Höhe des Layout-Viewports. Ebenso ist die `vw`-Einheit 1 % der Breite des Layout-Viewports.

#### `<iframe>`

Innerhalb eines `iframe` ist der visuelle Viewport die Größe der inneren Breite und Höhe des iframes und nicht das übergeordnete Dokument. Sie können eine beliebige Höhe und Breite auf ein iframe setzen, aber das gesamte Dokument ist möglicherweise nicht sichtbar.

Wenn Sie [Viewport-Längeneinheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units) in Ihrem CSS innerhalb des iframe-Dokuments verwenden, entspricht `1vh` 1 % der Höhe des iframes, und `1vw` entspricht 1 % der Breite des Dokuments.

```css
iframe {
  width: 50vw;
}
```

Wenn das iframe auf 50vw gesetzt ist, wird es 50 % der Breite des `1200px` übergeordneten Dokuments in unserem obigen Beispiel, also `600px`, wobei `1vw` `6px` entspricht. Beim Heranzoomen schrumpft das iframe auf `400px`, und `1vw` wird `4px`.

Eine medienbezogene Breitenabfrage innerhalb des iframe-Dokuments bezieht sich auf den Viewport des iframes.

```css
@media screen and (width >= 500px) {
  p {
    color: red;
  }
}
```

Wenn das obige CSS im iframe enthalten ist, werden die Absätze rot, wenn der Benutzer herangezoomt hat, aber dieser Stil gilt nicht im nicht herangezoomten Zustand.

#### SVG

In einem [SVG](/de/docs/Web/SVG)-Dokument ist der Viewport der sichtbare Bereich des SVG-Bildes. Sie können eine beliebige Höhe und Breite auf ein `svg`-Element setzen, aber das gesamte Bild ist möglicherweise nicht sichtbar. Der sichtbare Bereich wird als Viewport bezeichnet. Die Größe des Viewports kann mit den Breiten- und Höhenattributen des `<svg>`-Elements definiert werden.

```html
<svg height="300" width="400"></svg>
```

In diesem Beispiel hat der Viewport ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 3:4 und ist standardmäßig 400 mal 300 Einheiten, wobei eine Einheit im Allgemeinen ein CSS-Pixel ist.

SVG hat auch ein internes [Koordinatensystem](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems), das über das [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut definiert wird und nicht mit dieser Viewport-Diskussion zusammenhängt.

Wenn Sie eine SVG-Datei in Ihrem HTML einbinden, ist der Viewport des SVG der anfängliche enthaltende Block oder die Breite und Höhe des SVG-Containers. Die Verwendung der {{CSSxRef("@media")}}-Abfrage im CSS Ihres SVGs bezieht sich auf diesen Container und nicht auf den Browser.

```css
@media screen and (400px <= width <= 500px) {
  /* CSS goes here */
}
```

Im Allgemeinen werden bei der obigen Medienabfrage die Stile angewandt, wenn der Viewport, im Allgemeinen das Browserfenster, zwischen 400px und 500px liegt, einschließlich. Die Breitenabfrage im SVG bezieht sich auf das Element, in dem das SVG enthalten ist — das {{htmlelement("img")}}, wenn die Quelle eine SVG-Datei ist, das SVG selbst, wenn das SVG direkt in das HTML eingebunden ist, oder das übergeordnete Element, wenn das übergeordnete Element eine zugewiesene Breite hat und nicht die Breite des Viewports. Wenn die obige Medienabfrage in unserer SVG-Datei enthalten ist, wird das CSS angewendet, wenn der SVG-Container zwischen 400px und 500px liegt.

### JavaScript

Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) bietet einen Mechanismus zur Abfrage und Änderung der Eigenschaften des visuellen Viewports.

## Mobile Viewports

Mobile Geräte gibt es in allen Formen und Größen, mit Bildschirmen von unterschiedlichen {{Glossary("device_pixel", "Geräte-Pixel")}}-Verhältnissen. Der Viewport des mobilen Browsers ist der Bereich des Fensters, in dem Webinhalte angezeigt werden können, was nicht unbedingt die gleiche Größe wie die gerenderte Seite hat. Mobile Browser rendern Seiten in einem virtuellen Fenster oder Viewport, in der Regel bei 980px, was normalerweise breiter als der Bildschirm ist, und dann wird das gerenderte Ergebnis verkleinert, damit es insgesamt erkennbar ist. Benutzer können dann schwenken und zoomen, um unterschiedliche Bereiche der Seite zu sehen. Wenn zum Beispiel ein mobiler Bildschirm eine Breite von 320px hat, könnte eine Website mit einem virtuellen Viewport von 980px gerendert werden und dann wird sie heruntergeschrumpft, um in den 320px-Bereich zu passen, was, je nach Design, unleserlich für viele, wenn nicht alle, ist. Um einem mobilen Browser mitzuteilen, die Viewport-Breite anstelle der Standard-980px als Breite des Bildschirms zu verwenden, können Entwickler einen Viewport-Meta-Tag einfügen, wie den folgenden:

```html
<meta name="viewport" content="width=device-width" />
```

Die `width`-Eigenschaft steuert die Größe des Viewports. Sie sollte vorzugsweise auf `device-width` gesetzt werden, was die Breite des Bildschirms in CSS-Pixeln bei einem Maßstab von 100% ist. Es gibt andere Eigenschaften wie `maximum-scale`, `minimum-scale` und `user-scalable`, die steuern, ob Benutzer die Seite hinein- oder herauszoomen können, aber die Standardwerte sind die besten für Barrierefreiheit und Benutzererfahrung, sodass diese weggelassen werden können.

## Siehe auch

- [CSSOM view](/de/docs/Web/CSS/CSSOM_view) Modul
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- {{HTMLElement("meta")}}, insbesondere `<meta name="viewport">`
- [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts in mobilen Browsern](/de/docs/Web/HTML/Guides/Viewport_meta_element)

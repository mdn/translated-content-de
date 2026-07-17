---
title: "`frame-sizing` CSS property"
short-title: frame-sizing
slug: Web/CSS/Reference/Properties/frame-sizing
l10n:
  sourceCommit: 04c41175b160dc00b1a1b8e4e13b2183d89fdf1a
---

Die **`frame-sizing`**-Eigenschaft ([CSS](/de/docs/Web/CSS)) kann verwendet werden, um die horizontale oder vertikale Größe eines {{htmlelement("iframe")}}-Elements auf die Layoutgröße seines eingebetteten Dokuments in derselben Dimension einzustellen, jedoch nur, wenn das eingebettete Dokument die Weitergabe seiner Größeninformationen aktiviert hat.

## Syntax

```css
/* Keyword values */
frame-sizing: auto;
frame-sizing: content-width;
frame-sizing: content-height;
frame-sizing: content-inline-size;
frame-sizing: content-block-size;

/* Global values */
frame-sizing: inherit;
frame-sizing: initial;
frame-sizing: revert;
frame-sizing: revert-layer;
frame-sizing: unset;
```

### Werte

Der Wert der `frame-sizing`-Eigenschaft entspricht einem der folgenden Schlüsselwörter:

- `auto`
  - : Der Standardwert. Die Größe des `<iframe>`-Elements wird nicht durch die Layoutgröße seines eingebetteten Dokuments beeinflusst.
- `content-width`
  - : Die {{cssxref("width")}} des `<iframe>`-Elements wird auf die Layoutbreite seines eingebetteten Dokuments gesetzt.
- `content-height`
  - : Die {{cssxref("height")}} des `<iframe>`-Elements wird auf die Layouthöhe seines eingebetteten Dokuments gesetzt.
- `content-inline-size`
  - : Die {{cssxref("inline-size")}} des `<iframe>`-Elements wird auf die Layoutgröße seines eingebetteten Dokuments in der Inline-Richtung gesetzt.
- `content-block-size`
  - : Die {{cssxref("block-size")}} des `<iframe>`-Elements wird auf die Layoutgröße seines eingebetteten Dokuments in der Block-Richtung gesetzt.

## Beschreibung

Aus Sicherheits- und Datenschutzgründen geben {{htmlelement("iframe")}}-Elemente standardmäßig keine Informationen an das übergeordnete Dokument über die Größe des Inhalts in dem eingebetteten Dokument weiter.

Um eine reaktionsfähige Größenanpassung von {{htmlelement("iframe")}}-Elementen basierend auf ihrem Inhalt zu ermöglichen, kann das Tag [`<meta name="responsive-embedded-sizing">`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) in ein eingebettetes Dokument aufgenommen werden, um die Weitergabe seiner Größeninformationen an das übergeordnete Dokument zu aktivieren. Die `frame-sizing`-Eigenschaft kann dann auf dem `<iframe>` gesetzt werden, um es dazu zu bringen, dieselbe horizontale oder vertikale Größe wie die tatsächliche Inhaltsgröße des eingebetteten Dokuments (im Spezifikationskontext als **interne Layout-intrinsische Größe** bezeichnet, aber hier als "Layoutgröße" abgekürzt) anzunehmen. Der Dokumentinhalt passt sich dann nahtlos in das einbettende `<iframe>` ein und vermeidet unnötige Bildlaufleisten.

Die `frame-sizing`-Eigenschaft kann Werte von `content-width` oder `content-height` annehmen, um die `width` oder `height` des `<iframe>`-Elements auf die Layoutbreite oder Layouthöhe des eingebetteten Dokuments einzustellen.

Es gibt auch logische Entsprechungen — `frame-sizing` kann Werte von `content-inline-size` oder `content-block-size` annehmen, um die `inline-size` oder `block-size` des `<iframe>`-Elements auf die Inline-Größe oder Block-Größe des eingebetteten Dokuments einzustellen. Die Block- oder Inline-Richtung wird durch den {{cssxref("writing-mode")}} des `<iframe>`-Elements bestimmt, nicht durch den Inhalt des eingebetteten Dokuments.

Um das `<iframe>` dynamisch zu skalieren, während das eingebettete Dokument die Layoutgröße ändert, können Sie die Methode [`Window.requestResize()`](/de/docs/Web/API/Window/requestResize) aus dem eingebetteten Dokument aufrufen, um eine aktualisierte Größe zu melden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel demonstriert die Verwendung der `frame-sizing`-Eigenschaft.

Wir haben zwei Dokumente, das Hauptdokument `index.html` und das eingebettete Dokument `frame.html`.

#### Das Hauptdokument `index.html`

Das HTML des `index.html`-Dokuments enthält eine Überschrift und ein `<iframe>`, in das das `frame.html`-Dokument eingebettet ist:

```html
<h1>Responsive iframes — basic example</h1>

<iframe src="frame.html"></iframe>
```

Im CSS von `index.html` geben wir dem `<iframe>` einen `frame-sizing`-Wert von `content-block-size`. Da das `<iframe>` einen horizontalen `writing-mode` hat, wird seine `height` auf die Layouthöhe des eingebetteten Dokuments eingestellt.

```css
iframe {
  frame-sizing: content-block-size;
  border: 2px solid gray;
}
```

#### Das eingebettete `frame.html`

Das `frame.html`-Dokument enthält eine Überschrift und einige Absätze. Noch wichtiger ist jedoch, dass es das `<meta name="responsive-embedded-sizing" />`-Tag enthält, das es dazu berechtigt, seine Inhaltslayoutgröße mit dem übergeordneten Dokument zu teilen.

```html
<head>
  ...

  <meta name="responsive-embedded-sizing" />

  ...
</head>
<body>
  <h1>This is my frame</h1>
  <p>This is the content of my discontent.</p>
  <p>This is some more content.</p>
</body>
```

#### Ergebnis

Öffnen Sie unser [Basic Responsive `<iframe>` Sizing Demo](https://mdn.github.io/dom-examples/responsive-iframe-sizing/basic/) in einem separaten Tab, um es in Aktion zu sehen ([siehe den Quellcode](https://github.com/mdn/dom-examples/tree/main/responsive-iframe-sizing/basic)).

Auch wenn keine explizite `height` auf dem `<iframe>` gesetzt wurde, wird es auf die richtige Höhe skaliert, um genau sein eingebettetes Dokument zu enthalten, ohne Bildlaufleisten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Box-Größenanpassung](/de/docs/Web/CSS/Guides/Box_sizing) Modul
- [`<meta name="responsive-embedded-sizing">`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing)
- [`Window.requestResize()`](/de/docs/Web/API/Window/requestResize)

---
title: "`frame-sizing` CSS property"
short-title: frame-sizing
slug: Web/CSS/Reference/Properties/frame-sizing
l10n:
  sourceCommit: a5531a7b1fa30ab1de952ffff619a9830eb1c1a9
---

{{SeeCompatTable}}

Die **`frame-sizing`** [CSS](/de/docs/Web/CSS) Eigenschaft kann verwendet werden, um die horizontale oder vertikale Größe eines {{htmlelement("iframe")}}-Elements an die Layout-Größe des eingebetteten Dokuments in derselben Dimension anzupassen, jedoch nur, wenn das eingebettete Dokument zugestimmt hat, seine Größeninformationen zu teilen.

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

Diese Eigenschaft wird als eines der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Der Anfangswert. Die Größe des `<iframe>`-Elements wird nicht durch die Layout-Größe seines eingebetteten Dokuments beeinflusst.
- `content-width`
  - : Die {{cssxref("width")}} des `<iframe>`-Elements wird auf die Layout-Breite des eingebetteten Dokuments gesetzt.
- `content-height`
  - : Die {{cssxref("height")}} des `<iframe>`-Elements wird auf die Layout-Höhe des eingebetteten Dokuments gesetzt.
- `content-inline-size`
  - : Die {{cssxref("inline-size")}} des `<iframe>`-Elements wird auf die Layout-Größe des eingebetteten Dokuments in der Inline-Richtung gesetzt.
- `content-block-size`
  - : Die {{cssxref("block-size")}} des `<iframe>`-Elements wird auf die Layout-Größe des eingebetteten Dokuments in der Block-Richtung gesetzt.

## Beschreibung

Aus Sicherheits- und Datenschutzgründen geben {{htmlelement("iframe")}}-Elemente standardmäßig keine Informationen über die Größe des Inhalts im eingebetteten Dokument an das übergeordnete Dokument weiter.

Um eine reaktive Größenanpassung von {{htmlelement("iframe")}}-Elementen basierend auf ihrem Inhalt zu ermöglichen, kann das [`<meta name="responsive-embedded-sizing">`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) Tag in ein eingebettetes Dokument aufgenommen werden, um es zur Weitergabe seiner Größeninformationen an das übergeordnete Dokument zu optieren. Die `frame-sizing`-Eigenschaft kann dann auf das `<iframe>` gesetzt werden, um dieselbe horizontale oder vertikale Größe wie die tatsächliche Inhaltsgröße des eingebetteten Dokuments zu übernehmen (im Spezifikationsdokument als **interne Layout-intrinsische Größe** bezeichnet, aber in unserer Dokumentation als "Layout-Größe" abgekürzt). Der Dokumentinhalt passt dann nahtlos in das einbettende `<iframe>`, wodurch unnötige Scrollbalken vermieden werden.

Die `frame-sizing`-Eigenschaft kann Werte von `content-width` oder `content-height` annehmen, um die `width` oder `height` des `<iframe>`-Elements an die Layout-Breite oder Layout-Höhe des eingebetteten Dokuments anzupassen.

Es gibt auch logische Entsprechungen — `frame-sizing` kann Werte von `content-inline-size` oder `content-block-size` annehmen, um die `inline-size` oder `block-size` des `<iframe>`-Elements an die Inline-Größe oder Block-Größe des eingebetteten Dokuments anzupassen. Die Block- oder Inline-Richtung wird durch den {{cssxref("writing-mode")}} des `<iframe>`-Elements bestimmt, nicht durch den des eingebetteten Dokuments.

Um das `<iframe>` dynamisch anzupassen, während das eingebettete Dokument die Layout-Größe ändert, können Sie die [`Window.requestResize()`](/de/docs/Web/API/Window/requestResize) Methode vom eingebetteten Dokument aufrufen, um eine aktualisierte Größe zu melden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt die Verwendung der `frame-sizing`-Eigenschaft.

Wir haben zwei Dokumente, das Hauptdokument `index.html` und das eingebettete Dokument `frame.html`.

#### Das Hauptdokument `index.html`

Das HTML des `index.html`-Dokuments enthält eine Überschrift und ein `<iframe>`, in das das `frame.html`-Dokument eingebettet ist:

```html
<h1>Responsive iframes — basic example</h1>

<iframe src="frame.html"></iframe>
```

Im CSS des `index.html` geben wir dem `<iframe>` einen `frame-sizing`-Wert von `content-block-size`. Da das `<iframe>` einen horizontalen `writing-mode` hat, wird die `height` auf die Layout-Höhe des eingebetteten Dokuments gesetzt.

```css
iframe {
  frame-sizing: content-block-size;
  border: 2px solid gray;
}
```

#### Das eingebettete `frame.html`

Das `frame.html`-Dokument enthält eine Überschrift und einige Absätze. Wichtiger ist jedoch, dass es das `<meta name="responsive-embedded-sizing" />` Tag enthält, das es zur Weitergabe seiner Inhaltslayout-Größe an das übergeordnete Dokument optiert.

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

Öffnen Sie unser [Demo zur grundlegenden responsiven `<iframe>`-Größenanpassung](https://mdn.github.io/dom-examples/responsive-iframe-sizing/basic/) in einem separaten Tab, um es in Aktion zu sehen ([sehen Sie sich den Quellcode an](https://github.com/mdn/dom-examples/tree/main/responsive-iframe-sizing/basic)).

Auch wenn keine explizite `height` auf dem `<iframe>` gesetzt wurde, wird es in die richtige Höhe skaliert, um sein eingebettetes Dokument ohne Scrollbalken genau aufzunehmen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Rahmengröße](/de/docs/Web/CSS/Guides/Box_sizing) Modul
- [`<meta name="responsive-embedded-sizing">`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing)
- [`Window.requestResize()`](/de/docs/Web/API/Window/requestResize)

---
title: "`frame-sizing` CSS property"
short-title: frame-sizing
slug: Web/CSS/Reference/Properties/frame-sizing
l10n:
  sourceCommit: 9cf3002bd29376c15d49df6fab2e6a264285abf6
---

{{SeeCompatTable}}

Die **`frame-sizing`** [CSS](/de/docs/Web/CSS)-Eigenschaft kann verwendet werden, um die horizontale oder vertikale Größe eines {{htmlelement("iframe")}}-Elements so festzulegen, dass sie der Layoutgröße seines eingebetteten Dokuments in derselben Dimension entspricht. Dies ist jedoch nur möglich, wenn das eingebettete Dokument zugestimmt hat, seine Größeninformationen zu teilen.

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
  - : Der Anfangswert. Die Größe des `<iframe>`-Elements wird nicht durch die Layoutgröße seines eingebetteten Dokuments beeinflusst.
- `content-width`
  - : Die {{cssxref("width")}} des `<iframe>`-Elements wird auf die Layoutbreite seines eingebetteten Dokuments gesetzt.
- `content-height`
  - : Die {{cssxref("height")}} des `<iframe>`-Elements wird auf die Layouthöhe seines eingebetteten Dokuments gesetzt.
- `content-inline-size`
  - : Die {{cssxref("inline-size")}} des `<iframe>`-Elements wird auf die Layoutgröße seines eingebetteten Dokuments in der Inline-Richtung gesetzt.
- `content-block-size`
  - : Die {{cssxref("block-size")}} des `<iframe>`-Elements wird auf die Layoutgröße seines eingebetteten Dokuments in der Blockrichtung gesetzt.

## Beschreibung

Aus Sicherheits- und Datenschutzgründen geben {{htmlelement("iframe")}}-Elemente standardmäßig keine Informationen über die Größe des Inhalts im eingebetteten Dokument an das übergeordnete Dokument weiter.

Um eine anpassungsfähige Größenanpassung von {{htmlelement("iframe")}}-Elementen basierend auf ihrem Inhalt zu ermöglichen, kann das Tag [`<meta name="responsive-embedded-sizing">`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) in ein eingebettetes Dokument eingefügt werden, um es zu ermöglichen, seine Größeninformationen mit dem übergeordneten Dokument zu teilen. Die `frame-sizing`-Eigenschaft kann dann auf dem `<iframe>` festgelegt werden, sodass es die gleiche horizontale oder vertikale Größe wie die tatsächliche Inhaltsgröße des eingebetteten Dokuments annimmt (im Spezifikationsdokument als **interne Layout-Intrinsic-Größe** bezeichnet, aber in unserer Dokumentation auf "Layoutgröße" abgekürzt). Der Dokumenteninhalt passt sich dann nahtlos in das einbettende `<iframe>` ein, wobei unnötige Scrollleisten vermieden werden.

Die `frame-sizing`-Eigenschaft kann die Werte `content-width` oder `content-height` annehmen, um die Breite oder Höhe des `<iframe>`-Elements an die Layoutbreite oder Layouthöhe des eingebetteten Dokuments anzupassen.

Es gibt auch logische Äquivalente — `frame-sizing` kann die Werte `content-inline-size` oder `content-block-size` annehmen, um die `inline-size` oder `block-size` des `<iframe>`-Elements an die Inline- oder Blockgröße des eingebetteten Dokuments anzupassen, jeweils bestimmt durch den {{cssxref("writing-mode")}} des `<iframe>`-Elements und nicht durch den Inhalt des eingebetteten Dokuments.

Um die Größe des `<iframe>` dynamisch anzupassen, wenn sich die Layoutgröße des eingebetteten Dokuments ändert, können Sie die Methode [`Window.requestResize()`](/de/docs/Web/API/Window/requestResize) aus dem eingebetteten Dokument aufrufen, um eine aktualisierte Größe zu melden.

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

In der CSS von `index.html` geben wir dem `<iframe>` einen `frame-sizing`-Wert von `content-block-size`. Da das `<iframe>` einen horizontalen `writing-mode` hat, wird seine `height` auf die Layouthöhe des eingebetteten Dokuments gesetzt.

```css
iframe {
  frame-sizing: content-block-size;
  border: 2px solid gray;
}
```

#### Das eingebettete Dokument `frame.html`

Das `frame.html`-Dokument enthält eine Überschrift und einige Absätze. Wesentlicher jedoch ist das enthaltene `<meta name="responsive-embedded-sizing" />`-Tag, das es ermöglicht, die Layoutgröße seines Inhalts mit dem übergeordneten Dokument zu teilen.

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

Öffnen Sie unser [grundlegendes responsives `<iframe>`-Sizing-Demo](https://mdn.github.io/dom-examples/responsive-iframe-sizing/basic/) in einem separaten Tab, um es in Aktion zu sehen ([sehen Sie den Quellcode](https://github.com/mdn/dom-examples/tree/main/responsive-iframe-sizing/basic)).

Auch wenn keine explizite `height` auf dem `<iframe>` festgelegt wurde, wird es auf die richtige Höhe gesetzt, um sein eingebettetes Dokument genau zu enthalten, ohne Scrollleisten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Box-Größenbestimmung](/de/docs/Web/CSS/Guides/Box_sizing) Modul
- [`<meta name="responsive-embedded-sizing">`](/de/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing)
- [`Window.requestResize()`](/de/docs/Web/API/Window/requestResize)

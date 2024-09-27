---
title: contain-intrinsic-width
slug: Web/CSS/contain-intrinsic-width
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Die **`contain-intrinsic-width`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Breite eines Elements fest, die ein Browser für das Layout verwendet, wenn das Element der [Größenbeschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

## Syntax

```css
/* Keyword values */
contain-intrinsic-width: none;

/* <length> values */
contain-intrinsic-width: 1000px;
contain-intrinsic-width: 10rem;

/* auto <length> */
contain-intrinsic-width: auto 300px;

/* Global values */
contain-intrinsic-width: inherit;
contain-intrinsic-width: initial;
contain-intrinsic-width: revert;
contain-intrinsic-width: revert-layer;
contain-intrinsic-width: unset;
```

### Werte

Die folgenden Werte können für ein Element angegeben werden.

- `none`
  - : Das Element hat keine intrinsische Breite.
- `<length>`
  - : Das Element hat die angegebene Breite ({{cssxref("&lt;length&gt;")}}).
- `auto <length>`
  - : Ein gemerkter Wert der "normal gerenderten" Elementbreite, falls vorhanden, und das Element überspringt seinen Inhalt (zum Beispiel, wenn es außerhalb des Bildschirms ist); ansonsten die angegebene `<length>`.

## Beschreibung

Die Eigenschaft wird häufig in Verbindung mit Elementen angewendet, die eine Größenbeschränkung auslösen können, wie [`contain: size`](/de/docs/Web/CSS/contain) und [`content-visibility`](/de/docs/Web/CSS/content-visibility), und kann auch mithilfe der [`contain-intrinsic-size`](/de/docs/Web/CSS/contain-intrinsic-size) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) festgelegt werden.

Größenbeschränkung ermöglicht es einem Benutzeragenten, ein Element so zu layouten, als hätte es eine feste Größe. Dadurch werden unnötige Neuberechnungen vermieden, indem das Neukonfigurieren von Kindelementen vermieden wird, um die tatsächliche Größe zu bestimmen (dadurch wird die Benutzerfreundlichkeit verbessert).
Standardmäßig behandelt die Größenbeschränkung Elemente so, als hätten sie keinen Inhalt, und könnte das Layout in gleicher Weise zusammenfallen lassen, als ob der Inhalt keine Breite oder Höhe hätte.
Die `contain-intrinsic-width`-Eigenschaft erlaubt es Autoren, einen geeigneten Wert anzugeben, der als Breite für das Layout verwendet wird.

Der Wert `auto <length>` ermöglicht es, die Breite des Elements zu speichern, wenn das Element jemals "normal gerendert" wird (mit seinen Kindelementen), und dann anstelle der angegebenen Breite zu verwenden, wenn das Element seinen Inhalt überspringt.
Dies ermöglicht es Elementen außerhalb des Bildschirms mit [`content-visibility: auto`](/de/docs/Web/CSS/content-visibility), von der Größenbeschränkung zu profitieren, ohne dass Entwickler so präzise in ihren Schätzungen der Elementgröße sein müssen.
Der gemerkte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn die Größenbeschränkung aktiviert ist, wird die `<length>` verwendet).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Zusätzlich zu dem folgenden Beispiel enthält die Seite {{CSSxRef("contain-intrinsic-size")}} ein Live-Beispiel, das die Wirkung der Modifikation der intrinsischen Breite und Höhe demonstriert.

### Setzen der intrinsischen Breite

Das untenstehende HTML definiert ein Element "contained_element", das der Größenbeschränkung unterliegt und ein Kindelement enthält.

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

Das untenstehende CSS setzt die [`content-visibility`](/de/docs/Web/CSS/content-visibility) von `contained_element` auf `auto`, sodass, wenn das Element verborgen ist, es der Größenbeschränkung unterliegt.
Die Breite und Höhe, die verwendet werden, wenn es der Größenbeschränkung unterliegt, werden gleichzeitig mit `contain-intrinsic-width` und `contain-intrinsic-height` festgelegt.

```css
#contained_element {
  border: 2px solid green;
  width: 151px;
  content-visibility: auto;
  contain-intrinsic-width: 152px;
  contain-intrinsic-height: 52px;
}
.child_element {
  border: 1px solid red;
  background: blue;
  height: 50px;
  width: 150px;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) (web.dev)
- {{CSSxRef("contain-intrinsic-size")}}
- {{CSSxRef("contain-intrinsic-height")}}
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}

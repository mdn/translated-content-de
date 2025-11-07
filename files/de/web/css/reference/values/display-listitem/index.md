---
title: <display-listitem>
slug: Web/CSS/Reference/Values/display-listitem
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das `list-item` Schlüsselwort bewirkt, dass das Element ein `::marker` Pseudo-Element mit dem Inhalt generiert, der durch seine {{CSSxRef("list-style")}} Eigenschaften spezifiziert wird (zum Beispiel ein Aufzählungszeichen) zusammen mit einer Hauptbox des dafür angegebenen Typs für den eigenen Inhalt.

## Syntax

Ein einzelner Wert von `list-item` wird dazu führen, dass sich das Element wie ein Listeneintrag verhält. Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}} Schlüsselwort sowie den `flow` oder `flow-root` {{CSSxRef("&lt;display-inside&gt;")}} Schlüsselwörtern kombiniert werden.

> [!NOTE]
> In Browsern, die die Zwei-Wert-Syntax unterstützen, wird, wenn kein innerer Wert angegeben ist, standardmäßig `flow` verwendet. Wenn kein äußerer Wert angegeben ist, hat die Hauptbox einen äußeren Anzeigetyp von `block`.

## Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<div class="fake-list">I will display as a list item</div>
```

### CSS

```css
.fake-list {
  display: list-item;
  list-style-position: inside;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("display")}}
  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

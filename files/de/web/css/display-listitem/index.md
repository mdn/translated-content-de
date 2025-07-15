---
title: <display-listitem>
slug: Web/CSS/display-listitem
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das Schlüsselwort `list-item` veranlasst das Element, ein `::marker` Pseudo-Element mit dem Inhalt zu erzeugen, der durch die {{CSSxRef("list-style")}} Eigenschaften angegeben wird (zum Beispiel ein Aufzählungspunkt), zusammen mit einem Hauptblock des spezifizierten Typs für seinen eigenen Inhalt.

## Syntax

Ein einzelner Wert von `list-item` lässt das Element wie ein Listenelement verhalten. Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}} Schlüsselwort und den `flow` oder `flow-root` {{CSSxRef("&lt;display-inside&gt;")}} Schlüsselwörtern kombiniert werden.

> [!NOTE]
> In Browsern, die die Zwei-Werte-Syntax unterstützen, wird, falls kein innerer Wert angegeben ist, standardmäßig `flow` verwendet. Falls kein äußerer Wert angegeben ist, wird der Hauptblock einen äußeren Anzeigetyp von `block` haben.

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

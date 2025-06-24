---
title: <display-listitem>
slug: Web/CSS/display-listitem
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Das Schlüsselwort `list-item` bewirkt, dass das Element ein `::marker` Pseudo-Element mit dem Inhalt erzeugt, der durch seine {{CSSxRef("list-style")}} Eigenschaften angegeben wird (zum Beispiel ein Aufzählungspunkt), zusammen mit einem Hauptblock des angegebenen Typs für seine eigenen Inhalte.

## Syntax

Ein einzelner Wert von `list-item` führt dazu, dass das Element sich wie ein Listenpunkt verhält. Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}} Schlüsselwort und den `flow` oder `flow-root` {{CSSxRef("&lt;display-inside&gt;")}} Schlüsselwörtern kombiniert werden.

> [!NOTE]
> In Browsern, die die Zwei-Wert-Syntax unterstützen, wird, wenn kein innerer Wert angegeben ist, standardmäßig `flow` verwendet. Wenn kein äußerer Wert angegeben ist, hat der Hauptblock einen äußeren Anzeigetyp von `block`.

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

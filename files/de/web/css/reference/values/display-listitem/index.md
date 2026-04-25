---
title: "`<display-listitem>` CSS-Typ"
short-title: <display-listitem>
slug: Web/CSS/Reference/Values/display-listitem
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Das `list-item` Schlüsselwort bewirkt, dass das Element ein `::marker` Pseudo-Element erzeugt, dessen Inhalt durch die {{CSSxRef("list-style")}} Eigenschaften festgelegt wird (zum Beispiel ein Aufzählungspunkt), zusammen mit einem Haupt-Box des angegebenen Typs für seine eigenen Inhalte.

## Syntax

Ein einzelner Wert von `list-item` führt dazu, dass sich das Element wie ein Listenelement verhält. Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}} Schlüsselwort und den `flow` oder `flow-root` {{CSSxRef("&lt;display-inside&gt;")}} Schlüsselwörtern kombiniert werden.

> [!NOTE]
> In Browsern, die die Zwei-Wert-Syntax unterstützen, wird, falls kein innerer Wert angegeben ist, `flow` als Standard verwendet. Wenn kein äußerer Wert angegeben ist, hat die Haupt-Box einen äußeren Anzeigetyp von `block`.

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

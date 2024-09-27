---
title: <display-listitem>
slug: Web/CSS/display-listitem
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Das Schlüsselwort `list-item` bewirkt, dass das Element ein `::marker` Pseudoelement erzeugt, dessen Inhalt durch seine {{CSSxRef("list-style")}} Eigenschaften festgelegt wird (zum Beispiel ein Aufzählungspunkt) zusammen mit einem Hauptblock des angegebenen Typs für den eigenen Inhalt.

## Syntax

Ein einzelner Wert von `list-item` sorgt dafür, dass das Element sich wie ein Listenelement verhält. Dies kann zusammen mit {{CSSxRef("list-style-type")}} und {{CSSxRef("list-style-position")}} verwendet werden.

`list-item` kann auch mit jedem {{CSSxRef("&lt;display-outside&gt;")}} Schlüsselwort und den `flow` oder `flow-root` {{CSSxRef("&lt;display-inside&gt;")}} Schlüsselwörtern kombiniert werden.

> [!NOTE]
> In Browsern, die die Zwei-Wert-Syntax unterstützen, wird, wenn kein innerer Wert angegeben ist, standardmäßig `flow` verwendet. Wenn kein äußerer Wert angegeben ist, hat der Hauptblock einen äußeren Anzeigetyp `block`.

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

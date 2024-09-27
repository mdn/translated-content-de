---
title: margin-trim
slug: Web/CSS/margin-trim
l10n:
  sourceCommit: de76d381cb79a61813378963b66d98f68e74381c
---

{{CSSRef}}{{SeeCompatTable}}

Die `margin-trim`-Eigenschaft ermöglicht es dem Container, die Ränder seiner Kindelemente zu kürzen, wo sie an die Kanten des Containers angrenzen.

## Syntax

```css
margin-trim: none;
margin-trim: block;
margin-trim: block-start;
margin-trim: block-end;
margin-trim: inline;
margin-trim: inline-start;
margin-trim: inline-end;

/* Global values */
margin-trim: inherit;
margin-trim: initial;
margin-trim: revert;
margin-trim: revert-layer;
margin-trim: unset;
```

### Werte

- `none`

  - : Die Ränder werden vom Container nicht gekürzt.

- `block`

  - : Die Ränder, die den Blockkindern zugewiesen sind, wo sie an die Kanten des Containers angrenzen, werden auf Null gekürzt, ohne die dem Container zugewiesenen Ränder zu beeinflussen.

- `block-start`

  - : Der Rand des ersten Blockkindes an der Containerkante wird auf Null gekürzt.

- `block-end`

  - : Der Rand des letzten Blockkindes an der Containerkante wird auf Null gekürzt.

- `inline`

  - : Die Ränder, die den Inlinekindern zugewiesen sind, wo sie an die Kanten des Containers angrenzen, werden auf Null gekürzt, ohne den Abstand am Anfang und Ende der Zeile zu beeinflussen.

- `inline-start`

  - : Der Rand zwischen der Containerkante und dem ersten Inlinekind wird auf Null gekürzt.

- `inline-end`
  - : Der Rand zwischen der Containerkante und dem letzten Inlinekind wird auf Null gekürzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Sobald die Unterstützung für diese Eigenschaft implementiert ist, wird sie wahrscheinlich folgendermaßen funktionieren:

Wenn Sie einen Container mit einigen Inline-Kindelementen haben und einen Rand zwischen jedem Kind setzen möchten, der jedoch nicht den Abstand am Ende der Zeile stört, könnten Sie Folgendes tun:

```css
article {
  background-color: red;
  margin: 20px;
  padding: 20px;
  display: inline-block;
}

article > span {
  background-color: black;
  color: white;
  text-align: center;
  padding: 10px;
  margin-right: 20px;
  margin-left: 30px;
}
```

Das Problem hierbei ist, dass Sie am Ende der Zeile 20px zu viel Abstand haben, daher könnten Sie dies tun, um es zu beheben:

```css
span:last-child {
  margin-right: 0;
  margin-left: 0;
}
```

Es ist mühsam, eine weitere Regel schreiben zu müssen, um dies zu erreichen, und es ist auch nicht sehr flexibel. Stattdessen könnte `margin-trim` das Problem lösen:

```css
article {
  margin-trim: inline-end;
  /* … */
}
```

Ähnlich, um den linken Rand an der Containerkante zu entfernen:

```css
article {
  margin-trim: inline-start;
  /* … */
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("margin")}}

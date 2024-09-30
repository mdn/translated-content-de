---
title: margin-trim
slug: Web/CSS/margin-trim
l10n:
  sourceCommit: de76d381cb79a61813378963b66d98f68e74381c
---

{{CSSRef}}{{SeeCompatTable}}

Die Eigenschaft `margin-trim` ermöglicht es dem Container, die Ränder seiner Kinder zu kürzen, wenn sie an die Ränder des Containers angrenzen.

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

  - : Ränder werden vom Container nicht gekürzt.

- `block`

  - : Ränder, die den Blockkindern bereitgestellt werden, wenn sie an die Ränder des Containers angrenzen, werden auf null gekürzt, ohne die Ränder des Containers zu beeinflussen.

- `block-start`

  - : Der Rand des ersten Blockkindes mit dem Rand des Containers wird auf null gekürzt.

- `block-end`

  - : Der Rand des letzten Blockkindes mit dem Rand des Containers wird auf null gekürzt.

- `inline`

  - : Ränder, die den Inline-Kindern bereitgestellt werden, wenn sie an die Ränder des Containers angrenzen, werden auf null gekürzt, ohne den Abstand am Anfang und Ende der Zeile zu beeinflussen.

- `inline-start`

  - : Der Rand zwischen dem Rand des Containers und dem ersten Inline-Kind wird auf null gekürzt.

- `inline-end`
  - : Der Rand zwischen dem Rand des Containers und dem letzten Inline-Kind wird auf null gekürzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Sobald die Unterstützung für diese Eigenschaft implementiert ist, wird sie wahrscheinlich so funktionieren:

Wenn Sie einen Container mit einigen Inline-Kindern haben und einen Abstand zwischen jedem Kind einfügen möchten, ohne dass dies den Abstand am Ende der Zeile beeinträchtigt, könnten Sie Folgendes tun:

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

Das Problem hier ist, dass Sie am Ende der Zeile 20px zu viel Abstand hätten, also könnten Sie dies tun, um es zu beheben:

```css
span:last-child {
  margin-right: 0;
  margin-left: 0;
}
```

Es ist mühsam, eine weitere Regel zu schreiben, um dies zu erreichen, und es ist auch nicht sehr flexibel. Stattdessen könnte `margin-trim` dies beheben:

```css
article {
  margin-trim: inline-end;
  /* … */
}
```

Ähnlich, um den linken Rand mit dem Rand des Containers zu entfernen:

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

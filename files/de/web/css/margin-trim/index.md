---
title: margin-trim
slug: Web/CSS/margin-trim
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Die Eigenschaft `margin-trim` ermöglicht es dem Container, die Ränder seiner Kinder zu kürzen, wo sie an die Kanten des Containers stoßen.

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
  - : Die Ränder der Block-Kinder, wo sie an die Kanten des Containers stoßen, werden auf null gekürzt, ohne die Ränder des Containers zu beeinflussen.

- `block-start`
  - : Der Rand des ersten Block-Kindes mit der Kante des Containers wird auf null gekürzt.

- `block-end`
  - : Der Rand des letzten Block-Kindes mit der Kante des Containers wird auf null gekürzt.

- `inline`
  - : Die Ränder der Inline-Kinder, wo sie an die Kanten des Containers stoßen, werden auf null gekürzt, ohne den Abstand am Anfang und Ende der Zeile zu beeinflussen.

- `inline-start`
  - : Der Rand zwischen der Kante des Containers und dem ersten Inline-Kind wird auf null gekürzt.

- `inline-end`
  - : Der Rand zwischen der Kante des Containers und dem letzten Inline-Kind wird auf null gekürzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Sobald diese Eigenschaft unterstützt wird, wird sie wahrscheinlich so funktionieren:

Wenn Sie einen Container mit einigen Inline-Kindern haben und einen Rand zwischen jedem Kind setzen möchten, ohne den Abstand am Ende der Zeile zu beeinträchtigen, könnten Sie das so machen:

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

Das Problem dabei ist, dass am rechten Ende der Zeile 20px zu viel Abstand entstehen würden, also könnten Sie Folgendes tun, um es zu beheben:

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

Ebenso, um den linken Rand in Bezug auf die Kante des Containers zu entfernen:

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

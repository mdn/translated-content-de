---
title: margin-trim
slug: Web/CSS/Reference/Properties/margin-trim
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{SeeCompatTable}}

Die Eigenschaft `margin-trim` ermöglicht es dem Container, die Ränder seiner Kinder zu reduzieren, wo sie an die Kanten des Containers angrenzen.

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
  - : Ränder werden nicht durch den Container gekürzt.

- `block`
  - : Ränder der Blockkinder, wo sie an die Kanten des Containers angrenzen, werden auf null reduziert, ohne die Ränder des Containers zu beeinflussen.

- `block-start`
  - : Der Rand des ersten Blockkindes an der Kante des Containers wird auf null reduziert.

- `block-end`
  - : Der Rand des letzten Blockkindes an der Kante des Containers wird auf null reduziert.

- `inline`
  - : Ränder der Inline-Kinder, wo sie an die Kanten des Containers angrenzen, werden auf null reduziert, ohne den Abstand am Anfang und Ende der Zeile zu beeinflussen.

- `inline-start`
  - : Der Rand zwischen der Kante des Containers und dem ersten Inline-Kind wird auf null reduziert.

- `inline-end`
  - : Der Rand zwischen der Kante des Containers und dem letzten Inline-Kind wird auf null reduziert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Sobald die Unterstützung für diese Eigenschaft implementiert ist, wird sie wahrscheinlich so funktionieren:

Wenn Sie einen Container mit einigen Inline-Kindern haben und einen Rand zwischen jedem Kind einfügen möchten, ohne dass dieser den Abstand am Ende der Zeile stört, könnten Sie so vorgehen:

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

Das Problem hier ist, dass Sie am rechten Ende der Zeile 20px zu viel Abstand haben würden, sodass Sie vielleicht Folgendes tun, um es zu beheben:

```css
span:last-child {
  margin-right: 0;
  margin-left: 0;
}
```

Es ist mühsam, eine weitere Regel zu schreiben, um dies zu erreichen, und es ist auch nicht sehr flexibel. Stattdessen könnte `margin-trim` dies lösen:

```css
article {
  margin-trim: inline-end;
  /* … */
}
```

Ähnlich, um den linken Rand mit der Kante des Containers zu entfernen:

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

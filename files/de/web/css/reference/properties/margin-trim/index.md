---
title: "`margin-trim` CSS property"
short-title: margin-trim
slug: Web/CSS/Reference/Properties/margin-trim
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die `margin-trim`-Eigenschaft ermöglicht es dem Container, die Ränder seiner Kinder zu kürzen, wo sie an die Kanten des Containers angrenzen.

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
  - : Die Ränder der Blockkinder, die an die Kanten des Containers angrenzen, werden auf null gekürzt, ohne die Ränder des Containers zu beeinflussen.

- `block-start`
  - : Der Rand des ersten Blockkindes, das an die Kante des Containers angrenzt, wird auf null gekürzt.

- `block-end`
  - : Der Rand des letzten Blockkindes, das an die Kante des Containers angrenzt, wird auf null gekürzt.

- `inline`
  - : Die Ränder der Inline-Kinder, die an die Kanten des Containers angrenzen, werden auf null gekürzt, ohne den Abstand am Anfang und Ende der Zeile zu beeinflussen.

- `inline-start`
  - : Der Rand zwischen der Kante des Containers und dem ersten Inline-Kind wird auf null gekürzt.

- `inline-end`
  - : Der Rand zwischen der Kante des Containers und dem letzten Inline-Kind wird auf null gekürzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Sobald die Unterstützung für diese Eigenschaft implementiert ist, wird sie wahrscheinlich folgendermaßen funktionieren:

Wenn Sie einen Container mit einigen Inline-Kindern haben und einen Rand zwischen jedem Kind einfügen möchten, der den Abstand am Ende der Zeile nicht beeinträchtigt, könnten Sie so vorgehen:

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

Das Problem hier ist, dass Sie am Ende 20px zu viel Abstand rechts von der Zeile haben würden, daher könnten Sie dies tun, um es zu beheben:

```css
span:last-child {
  margin-right: 0;
  margin-left: 0;
}
```

Es ist mühsam, eine zusätzliche Regel schreiben zu müssen, um dies zu erreichen, und es ist auch nicht sehr flexibel. Stattdessen könnte `margin-trim` dies beheben:

```css
article {
  margin-trim: inline-end;
  /* … */
}
```

Ähnlich, um den linken Rand an der Kante des Containers zu entfernen:

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

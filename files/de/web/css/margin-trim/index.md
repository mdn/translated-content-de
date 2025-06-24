---
title: margin-trim
slug: Web/CSS/margin-trim
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}{{SeeCompatTable}}

Die `margin-trim`-Eigenschaft ermöglicht es, dass der Container die Ränder seiner Kinder, dort wo sie an den Kanten des Containers anstoßen, kürzt.

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

  - : Die Ränder werden nicht vom Container gekürzt.

- `block`

  - : Ränder der Blockkinder, die an den Kanten des Containers anstoßen, werden auf null gekürzt, ohne die Ränder des Containers zu beeinflussen.

- `block-start`

  - : Der Rand des ersten Blockkindes an der Kante des Containers wird auf null gekürzt.

- `block-end`

  - : Der Rand des letzten Blockkindes an der Kante des Containers wird auf null gekürzt.

- `inline`

  - : Ränder der Inline-Kinder, die an den Kanten des Containers anstoßen, werden auf null gekürzt, ohne den Abstand am Anfang und Ende der Zeile zu beeinflussen.

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

Sobald die Unterstützung für diese Eigenschaft implementiert ist, wird sie wahrscheinlich so funktionieren:

Wenn Sie einen Container mit einigen Inline-Kindern haben und einen Rand zwischen jedem Kind einfügen möchten, ohne dass dieser den Abstand am Ende der Zeile beeinflusst, könnten Sie Folgendes tun:

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

Das Problem hier ist, dass Sie am rechten Ende der Zeile 20px zu viel Abstand haben, also könnten Sie dies möglicherweise beheben:

```css
span:last-child {
  margin-right: 0;
  margin-left: 0;
}
```

Es ist mühsam, eine weitere Regel schreiben zu müssen, um dies zu erreichen, und es ist auch nicht sehr flexibel. Stattdessen könnte `margin-trim` dies beheben:

```css
article {
  margin-trim: inline-end;
  /* … */
}
```

Ähnlich dazu, um den linken Rand an der Kante des Containers zu entfernen:

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

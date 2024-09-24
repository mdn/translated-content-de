---
title: margin-trim
slug: Web/CSS/margin-trim
l10n:
  sourceCommit: de76d381cb79a61813378963b66d98f68e74381c
---

{{CSSRef}}{{SeeCompatTable}}

Die `margin-trim`-Eigenschaft ermöglicht es dem Container, die Ränder seiner Kinder zu kürzen, wenn sie an den Rändern des Containers anliegen.

## Syntax

```css
margin-trim: none;
margin-trim: block;
margin-trim: block-start;
margin-trim: block-end;
margin-trim: inline;
margin-trim: inline-start;
margin-trim: inline-end;

/* Globale Werte */
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

  - : Ränder, die den Block-Kindern zur Verfügung gestellt werden, werden auf null gekürzt, wenn sie an den Rändern des Containers anliegen, ohne die dem Container zur Verfügung gestellten Ränder zu beeinflussen.

- `block-start`

  - : Der Rand des ersten Block-Kindes mit dem Rand des Containers wird auf null gekürzt.

- `block-end`

  - : Der Rand des letzten Block-Kindes mit dem Rand des Containers wird auf null gekürzt.

- `inline`

  - : Ränder, die den Inline-Kindern zur Verfügung gestellt werden, werden auf null gekürzt, wenn sie an den Rändern des Containers anliegen, ohne den Abstand am Anfang und Ende der Zeile zu beeinflussen.

- `inline-start`

  - : Der Rand zwischen dem Rand des Containers und dem ersten Inline-Kind wird auf null gekürzt.

- `inline-end`
  - : Der Rand zwischen dem Rand des Containers und dem letzten Inline-Kind wird auf null gekürzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Sobald die Unterstützung für diese Eigenschaft implementiert ist, wird sie wahrscheinlich so funktionieren:

Wenn Sie einen Container mit einigen Inline-Kindern haben und zwischen jedem Kind einen Rand setzen möchten, der den Abstand am Ende der Zeile nicht beeinträchtigt, könnten Sie Folgendes tun:

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

Das Problem hierbei ist, dass Sie am Ende der Zeile 20px zu viel Abstand hätten, also könnten Sie dies tun, um es zu beheben:

```css
span:last-child {
  margin-right: 0;
  margin-left: 0;
}
```

Es ist ärgerlich, eine weitere Regel schreiben zu müssen, um dies zu erreichen, und es ist auch nicht sehr flexibel. Stattdessen könnte `margin-trim` es beheben:

```css
article {
  margin-trim: inline-end;
  /* … */
}
```

Ähnlich, um den linken Rand am Rand des Containers zu entfernen:

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

---
title: "`margin-trim` CSS property"
short-title: margin-trim
slug: Web/CSS/Reference/Properties/margin-trim
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

{{SeeCompatTable}}

Die Eigenschaft `margin-trim` ermöglicht es dem Container, die Ränder seiner Kinder dort zu kürzen, wo sie an die Ränder des Containers angrenzen.

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

Diese Eigenschaft wird als eines der folgenden Schlüsselwortwerte angegeben:

- `none`
  - : Ränder werden vom Container nicht gekürzt.

- `block`
  - : Ränder der Block-Kinder, die an die Ränder des Containers angrenzen, werden auf null gekürzt, ohne die dem Container zugeordneten Ränder zu beeinflussen.

- `block-start`
  - : Rand des ersten Block-Kindes mit dem Container-Rand wird auf null gekürzt.

- `block-end`
  - : Rand des letzten Block-Kindes mit dem Container-Rand wird auf null gekürzt.

- `inline`
  - : Ränder der Inline-Kinder, die an die Ränder des Containers angrenzen, werden auf null gekürzt, ohne den Raum am Anfang und Ende der Zeile zu beeinflussen.

- `inline-start`
  - : Rand zwischen dem Container-Rand und dem ersten Inline-Kind wird auf null gekürzt.

- `inline-end`
  - : Rand zwischen dem Container-Rand und dem letzten Inline-Kind wird auf null gekürzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Sobald die Unterstützung für diese Eigenschaft implementiert ist, wird sie wahrscheinlich wie folgt funktionieren:

Wenn Sie einen Container mit einigen Inline-Kindern haben und einen Rand zwischen jedem Kind setzen möchten, ohne den Abstand am Ende der Zeile zu stören, könnten Sie etwas wie das Folgende tun:

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

Das Problem hier ist, dass Sie am Ende der Zeile 20px zu viel Abstand haben, also könnten Sie dies tun, um es zu beheben:

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

Ebenso, um den linken Rand mit dem Container-Rand zu entfernen:

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

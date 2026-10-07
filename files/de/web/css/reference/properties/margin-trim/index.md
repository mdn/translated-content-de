---
title: "`margin-trim` CSS property"
short-title: margin-trim
slug: Web/CSS/Reference/Properties/margin-trim
l10n:
  sourceCommit: bf7ff749b987d530e9a6c07f23ac66f94d968e57
---

Mit der Eigenschaft `margin-trim` kann ein Container die Margins seiner Kindelemente dort auf null reduzieren, wo sie an seine Ränder angrenzen.

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

Für diese Eigenschaft wird einer der folgenden Schlüsselwortwerte angegeben:

- `none`
  - : Der Container reduziert die Margins nicht.

- `block`
  - : Die Margins von Block-Kindelementen werden dort, wo sie an die Ränder des Containers angrenzen, auf null reduziert. Die Margins des Containers bleiben davon unberührt.

- `block-start`
  - : Der Margin des ersten Block-Kindelements am Rand des Containers wird auf null reduziert.

- `block-end`
  - : Der Margin des letzten Block-Kindelements am Rand des Containers wird auf null reduziert.

- `inline`
  - : Die Margins von Inline-Kindelementen werden dort, wo sie an die Ränder des Containers angrenzen, auf null reduziert. Der Abstand am Anfang und Ende der Zeile bleibt davon unberührt.

- `inline-start`
  - : Der Margin zwischen dem Rand des Containers und dem ersten Inline-Kindelement wird auf null reduziert.

- `inline-end`
  - : Der Margin zwischen dem Rand des Containers und dem letzten Inline-Kindelement wird auf null reduziert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Sobald diese Eigenschaft unterstützt wird, funktioniert sie voraussichtlich folgendermaßen:

Angenommen, Sie haben einen Container mit mehreren Inline-Kindelementen und möchten zwischen den Kindelementen jeweils einen Margin einfügen, ohne den Abstand am Ende der Zeile zu verändern. Dazu könnten Sie Folgendes verwenden:

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

Das Problem dabei ist, dass am rechten Ende der Zeile ein zusätzlicher Abstand von 20px entsteht. Um dies zu beheben, könnten Sie Folgendes tun:

```css
span:last-child {
  margin-right: 0;
  margin-left: 0;
}
```

Dafür eine weitere Regel schreiben zu müssen, ist umständlich und zudem wenig flexibel. Stattdessen könnte `margin-trim` das Problem lösen:

```css
article {
  margin-trim: inline-end;
  /* … */
}
```

Entsprechend können Sie den linken Margin am Rand des Containers entfernen:

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

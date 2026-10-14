---
title: "`overscroll-behavior-y` CSS property"
short-title: overscroll-behavior-y
slug: Web/CSS/Reference/Properties/overscroll-behavior-y
l10n:
  sourceCommit: 151d527b2d48812d732cb4f3fdffa0737682e684
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`overscroll-behavior-y`** legt fest, wie sich der Browser verhält, wenn die vertikale Grenze eines Scrollbereichs erreicht wird.

Eine ausführliche Erklärung finden Sie unter {{cssxref("overscroll-behavior")}}.

## Syntax

```css
/* Keyword values */
overscroll-behavior-y: auto; /* default */
overscroll-behavior-y: chain;
overscroll-behavior-y: contain;
overscroll-behavior-y: none;

/* Global values */
overscroll-behavior-y: inherit;
overscroll-behavior-y: initial;
overscroll-behavior-y: revert;
overscroll-behavior-y: revert-layer;
overscroll-behavior-y: unset;
```

### Werte

Für diese Eigenschaft wird einer der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Erlaubt das Standardverhalten an einer Scrollgrenze. Das Scrollen kann in einem anderen Scrollcontainer fortgesetzt werden.
- `chain`
  - : Erlaubt, das Scrollen außerhalb des Scrollcontainers fortzusetzen, verhindert aber Overscroll-„Bounce“-Effekte.
- `contain`
  - : Verhindert, dass das Scrollen außerhalb des Scrollcontainers fortgesetzt wird. „Bounce“-Effekte können weiterhin auftreten.
- `none`
  - : Verhindert, dass das Scrollen außerhalb des Scrollcontainers fortgesetzt wird, und unterbindet außerdem Overscroll-„Bounce“-Effekte.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein darunterliegendes Element scrollt

In unserem [Beispiel zu overscroll-behavior](https://mdn.github.io/css-examples/overscroll-behavior/) (siehe auch den [Quellcode](https://github.com/mdn/css-examples/tree/main/overscroll-behavior)) zeigen wir eine seitenfüllende Liste fiktiver Kontakte und ein Dialogfeld mit einem Chatfenster.

![Ein Popup-Chatfenster mit dem Titel „Active chat“, das eine Unterhaltung zwischen Chris und Bob zeigt. Hinter dem Chatfenster befindet sich eine Kontaktliste mit dem Titel „overscroll-behavior demo“.](example.png)

Beide Bereiche sind scrollbar. Wenn Sie normalerweise im Chatfenster bis zu einer Scrollgrenze scrollen, beginnt auch die darunterliegende Kontaktliste zu scrollen. Das ist nicht erwünscht. Sie können dies verhindern, indem Sie `overscroll-behavior-y` auf das Chatfenster anwenden (`overscroll-behavior` würde ebenfalls funktionieren):

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

Außerdem wollten wir die üblichen Overscroll-Effekte unterbinden, die auftreten, wenn die Kontaktliste bis ganz nach oben oder unten gescrollt wird (beispielsweise lädt Chrome unter Android die Seite neu, wenn Sie über die obere Grenze hinaus scrollen). Dies lässt sich verhindern, indem Sie `overscroll-behavior-y: none` für das {{htmlelement("html")}}-Element festlegen:

```css
html {
  margin: 0;
  overscroll-behavior-y: none;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("overscroll-behavior")}}
- {{cssxref("overscroll-behavior-x")}}
- {{cssxref("overscroll-behavior-inline")}}
- {{cssxref("overscroll-behavior-block")}}
- Modul [CSS overscroll behavior](/de/docs/Web/CSS/Guides/Overscroll_behavior)

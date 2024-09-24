---
title: overscroll-behavior-block
slug: Web/CSS/overscroll-behavior-block
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`overscroll-behavior-block`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn die Block-Richtungsgrenze eines Scrollbereichs erreicht wird.

Sehen Sie {{cssxref("overscroll-behavior")}} für eine vollständige Erklärung.

## Syntax

```css
/* Schlüsselwortwerte */
overscroll-behavior-block: auto; /* Standard */
overscroll-behavior-block: contain;
overscroll-behavior-block: none;

/* Globale Werte */
overscroll-behavior-block: inherit;
overscroll-behavior-block: initial;
overscroll-behavior-block: revert;
overscroll-behavior-block: revert-layer;
overscroll-behavior-block: unset;
```

Die `overscroll-behavior-block` Eigenschaft wird als Schlüsselwort aus der untenstehenden Liste von Werten angegeben.

### Werte

- `auto`
  - : Das Standardverhalten bei Überlauf beim Scrollen tritt wie gewohnt auf.
- `contain`
  - : Das Standardverhalten bei Überlauf (z.B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, in dem dieser Wert gesetzt ist. Es findet jedoch kein {{Glossary("Scroll_chaining", "Scroll-Chaining")}} in benachbarten Scrollbereichen statt; die zugrundeliegenden Elemente werden nicht scrollen. Der `contain`-Wert deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und horizontalen Wischnavigation.
- `none`
  - : Es findet kein Scroll-Chaining in benachbarten Scrollbereichen statt, und das Standardverhalten bei Überlauf wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern des Block-Overscrollings

In diesem Beispiel haben wir zwei Block-Level-Boxen, eine innerhalb der anderen. Die äußere Box hat eine große {{cssxref("height")}} eingestellt, sodass die Seite vertikal scrollt. Die innere Box hat eine kleine {{cssxref("width")}} (und `height`) eingestellt, sodass sie bequem innerhalb des Ansichtsfensters sitzt, aber ihr Inhalt hat eine große `height`, sodass sie ebenfalls vertikal scrollt.

Standardmäßig beginnt die gesamte Seite zu scrollen, wenn die innere Box gescrollt wird und eine Scrollgrenze erreicht wird, was wahrscheinlich nicht gewünscht ist. Um dies in der Block-Richtung zu vermeiden, haben wir `overscroll-behavior-block: contain` auf der inneren Box gesetzt.

#### HTML

```html
<main>
  <div>
    <div>
      <p>
        <code>overscroll-behavior-block</code> wurde verwendet, um sicherzustellen, dass wenn die Scrollgrenzen der gelben inneren Box erreicht werden, die gesamte Seite nicht zu scrollen beginnt.
      </p>
    </div>
  </div>
</main>
```

#### CSS

```css
main {
  height: 3000px;
  width: 500px;
  background-color: white;
  background-image: repeating-linear-gradient(
    to bottom,
    rgb(0 0 0 / 0%) 0px,
    rgb(0 0 0 / 0%) 19px,
    rgb(0 0 0 / 50%) 20px
  );
}

main > div {
  height: 300px;
  width: 400px;
  overflow: auto;
  position: relative;
  top: 50px;
  left: 50px;
  overscroll-behavior-block: contain;
}

div > div {
  height: 1500px;
  width: 100%;
  background-color: yellow;
  background-image: repeating-linear-gradient(
    to bottom,
    rgb(0 0 0 / 0%) 0px,
    rgb(0 0 0 / 0%) 19px,
    rgb(0 0 0 / 50%) 20px
  );
}

p {
  padding: 10px;
  background-color: rgb(255 0 0 / 50%);
  margin: 0;
  width: 340px;
  position: relative;
  top: 10px;
  left: 10px;
}
```

#### Ergebnis

{{EmbedLiveSample('Preventing_block_overscrolling','100%', 500)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Take control of your scroll: customizing pull-to-refresh and overflow effects](https://developer.chrome.com/blog/overscroll-behavior/#full-demo)

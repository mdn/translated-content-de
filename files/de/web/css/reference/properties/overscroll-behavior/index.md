---
title: CSS-Eigenschaft `overscroll-behavior`
short-title: overscroll-behavior
slug: Web/CSS/Reference/Properties/overscroll-behavior
l10n:
  sourceCommit: 151d527b2d48812d732cb4f3fdffa0737682e684
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`overscroll-behavior`** steuert, was passiert, wenn beim Scrollen der Rand eines {{Glossary("Scroll_container", "Scroll-Containers")}} erreicht wird.

{{InteractiveExample("CSS Demo: overscroll-behavior")}}

```css interactive-example-choice
overscroll-behavior: auto;
```

```css interactive-example-choice
overscroll-behavior: contain;
```

```css interactive-example-choice
overscroll-behavior: chain;
```

```css interactive-example-choice
overscroll-behavior: none;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="box">
      This is a scrollable container. Michaelmas term lately over, and the Lord
      Chancellor sitting in Lincoln's Inn Hall. Implacable November weather. As
      much mud in the streets as if the waters had but newly retired from the
      face of the earth.
      <br /><br />
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.
    </div>
    <div id="example-element">
      This is the inner container. Focus on this container, scroll to the bottom
      and when you reach the bottom keep scrolling.
      <p>
        If you have
        <code class="language-css">overscroll-behavior: auto;</code> selected
        the outer container will start to scroll.
      </p>
      If you have
      <code class="language-css">overscroll-behavior: contain;</code> selected,
      the outer container will not scroll unless you move your cursor out of the
      inner container and try to perform scroll on the outer container.
    </div>
  </div>
</section>
```

```css interactive-example
.example-container {
  width: 35em;
  height: 18em;
  border: medium dotted;
  padding: 0.75em;
  text-align: left;
  overflow: auto;
  display: flex;
}

.box {
  width: 50%;
}

#example-element {
  width: 50%;
  height: 12em;
  border: medium dotted #1b76c4;
  padding: 0.3em;
  margin: 0 0.3em;
  text-align: left;
  overflow: auto;
  overscroll-behavior: contain;
}
```

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{Cssxref("overscroll-behavior-x")}}
- {{Cssxref("overscroll-behavior-y")}}

## Syntax

```css
/* Keyword values */
overscroll-behavior: auto; /* default */
overscroll-behavior: chain;
overscroll-behavior: contain;
overscroll-behavior: none;

/* Two values */
overscroll-behavior: auto contain;

/* Global values */
overscroll-behavior: inherit;
overscroll-behavior: initial;
overscroll-behavior: revert;
overscroll-behavior: revert-layer;
overscroll-behavior: unset;
```

### Werte

Die Eigenschaft `overscroll-behavior` wird mit einem oder zwei Schlüsselwörtern aus der folgenden Werteliste angegeben.

Bei zwei Schlüsselwörtern legt das erste den Wert für die `x`-Achse und das zweite den Wert für die `y`-Achse fest. Wird nur ein Wert angegeben, gilt er für beide Achsen.

- `auto`
  - : Erlaubt das Standardverhalten an einer Scroll-Grenze. Das Scrollen kann in einem anderen Scroll-Container fortgesetzt werden.
- `chain`
  - : Erlaubt, das Scrollen außerhalb des Scroll-Containers fortzusetzen, verhindert aber „Bounce“-Effekte beim Überscrollen.
- `contain`
  - : Verhindert, dass das Scrollen außerhalb des Scroll-Containers fortgesetzt wird. „Bounce“-Effekte können weiterhin auftreten.
- `none`
  - : Verhindert, dass das Scrollen außerhalb des Scroll-Containers fortgesetzt wird, und unterbindet außerdem „Bounce“-Effekte beim Überscrollen.

## Beschreibung

Mobile Browser zeigen standardmäßig häufig einen „Bounce“-Effekt oder aktualisieren sogar die Seite, wenn das obere oder untere Ende einer Seite (oder eines anderen scrollbaren Bereichs) erreicht wird. Vielleicht haben Sie auch schon bemerkt, dass bei einem Dialogfeld mit scrollbarem Inhalt auf einer ebenfalls scrollbaren Seite die darunterliegende Seite zu scrollen beginnt, sobald die {{Glossary("Scroll_boundary", "Scroll-Grenze")}} des Dialogfelds erreicht ist. Dieses Verhalten wird als {{Glossary("Scroll_chaining", "Scroll Chaining")}} bezeichnet.

In manchen Fällen sind diese Verhaltensweisen unerwünscht. Mit `overscroll-behavior` können Sie unerwünschtes Scroll Chaining und das „Pull to Refresh“-Verhalten des Browsers unterbinden.

Beachten Sie, dass diese Eigenschaft nur für {{Glossary("Scroll_container", "Scroll-Container")}} gilt. Insbesondere ist ein [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) kein Scroll-Container. Daher hat es keine Wirkung, diese Eigenschaft auf einem iframe zu setzen. Um Scroll Chaining aus einem iframe heraus zu steuern, setzen Sie `overscroll-behavior` sowohl auf dem [`<html>`](/de/docs/Web/HTML/Reference/Elements/html)- als auch auf dem [`<body>`](/de/docs/Web/HTML/Reference/Elements/body)-Element des iframe-Dokuments.

Ein {{Glossary("Scroll_container", "Scroll-Container")}} ohne scrollbaren Überlauf, beispielsweise ein Element mit `overflow: hidden`, gilt immer als an seiner {{Glossary("Scroll_boundary", "Scroll-Grenze")}} befindlich. Wenn Sie darauf einen vom Standard abweichenden Wert für `overscroll-behavior` wie `contain` oder `none` setzen, wird Scroll Chaining zu übergeordneten Scroll-Containern verhindert. Damit lässt sich verhindern, dass der Hintergrund scrollt, während ein Dialogfeld oder Overlay geöffnet ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### `overscroll-behavior` auf `<dialog>`-Elementen

In diesem Beispiel gibt es vier Schaltflächen, die jeweils ein Dialogfeld öffnen. Jedes Dialogfeld hat einen anderen Wert für `overscroll-behavior`. Außerdem gibt es ein `<div>`, das dafür sorgt, dass der Inhalt größer als der Container ist, damit der Scrolleffekt der Seite sichtbar wird.

#### HTML

```html
<div class="buttons">
  <button popovertarget="dialog-auto"><code>auto</code></button>
  <button popovertarget="dialog-contain"><code>contain</code></button>
  <button popovertarget="dialog-chain"><code>chain</code></button>
  <button popovertarget="dialog-none"><code>none</code></button>
</div>
<div class="force-scroll"></div>
<dialog id="dialog-auto" popover>
  <code>overscroll-behavior: auto;</code>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio
    voluptatum minus dolorem assumenda nemo quos autem culpa, pariatur illo
    deserunt ea nam commodi fugiat ipsum quam alias suscipit facilis?
  </p>
</dialog>
<dialog id="dialog-contain" popover>
  <code>overscroll-behavior: contain;</code>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio
    voluptatum minus dolorem assumenda nemo quos autem culpa, pariatur illo
    deserunt ea nam commodi fugiat ipsum quam alias suscipit facilis?
  </p>
</dialog>
<dialog id="dialog-chain" popover>
  <code>overscroll-behavior: chain;</code>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio
    voluptatum minus dolorem assumenda nemo quos autem culpa, pariatur illo
    deserunt ea nam commodi fugiat ipsum quam alias suscipit facilis?
  </p>
</dialog>
<dialog id="dialog-none" popover>
  <code>overscroll-behavior: none;</code>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio
    voluptatum minus dolorem assumenda nemo quos autem culpa, pariatur illo
    deserunt ea nam commodi fugiat ipsum quam alias suscipit facilis?
  </p>
</dialog>
```

#### CSS

```css hidden
::backdrop {
  backdrop-filter: blur(0.5rem);
}
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 2vb;
}
.force-scroll {
  width: 20vi;
  height: 200vb;
  margin-inline: auto;
  border: solid 1px black;
  background: linear-gradient(45deg, tomato, olivedrab);
}
```

```css
[popover] {
  width: 30vi;
  height: 10vi;
}
#dialog-auto {
  overscroll-behavior: auto;
}
#dialog-contain {
  overscroll-behavior: contain;
}
#dialog-chain {
  overscroll-behavior: chain;
}
#dialog-none {
  overscroll-behavior: none;
}
```

#### Ergebnis

Klicken Sie auf eine der Schaltflächen und scrollen Sie im daraufhin geöffneten Dialogfeld, um das jeweilige Verhalten zu sehen:

- `auto`: Wenn Sie über die Grenze des Dialogfelds hinaus scrollen, „federt“ der Inhalt zurück. Scrollen Sie weiter, scrollt auch der Hintergrund.
- `contain`: Wenn Sie über die Grenze des Dialogfelds hinaus scrollen, „federt“ der Inhalt zurück. Auch wenn Sie weiterscrollen, scrollt der Hintergrund nicht.
- `chain`: Wenn Sie über die Grenze des Dialogfelds hinaus scrollen, „federt“ der Inhalt nicht zurück. Scrollen Sie weiter, scrollt auch der Hintergrund.
- `none`: Wenn Sie über die Grenze des Dialogfelds hinaus scrollen, „federt“ der Inhalt nicht zurück. Auch wenn Sie weiterscrollen, scrollt der Hintergrund nicht.

{{EmbedLiveSample("overscroll-behavior_on_dialog_elements", "100%", "180")}}

Ein weiteres Beispiel dafür, wie sich das Scrollverhalten eines „Chat“-Fensters steuern lässt, finden Sie bei der Eigenschaft [`overscroll-behavior-y`](/de/docs/Web/CSS/Reference/Properties/overscroll-behavior-y#preventing_an_underlying_element_from_scrolling).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Modul [CSS overscroll behavior](/de/docs/Web/CSS/Guides/Overscroll_behavior)
- Modul [CSS scroll anchoring](/de/docs/Web/CSS/Guides/Scroll_anchoring)
- [Übernehmen Sie die Kontrolle über das Scrollen: Pull-to-Refresh und Überlaufeffekte anpassen](https://developer.chrome.com/blog/overscroll-behavior) auf developer.chrome.com (2017)

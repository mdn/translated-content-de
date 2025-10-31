---
title: overscroll-behavior
slug: Web/CSS/Reference/Properties/overscroll-behavior
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`overscroll-behavior`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was ein Browser tut, wenn er das Ende eines Scrollbereichs erreicht.

{{InteractiveExample("CSS Demo: overscroll-behavior")}}

```css interactive-example-choice
overscroll-behavior: auto;
```

```css interactive-example-choice
overscroll-behavior: contain;
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

## Bestandteilige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{Cssxref("overscroll-behavior-x")}}
- {{Cssxref("overscroll-behavior-y")}}

## Syntax

```css
/* Keyword values */
overscroll-behavior: auto; /* default */
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

Die `overscroll-behavior`-Eigenschaft wird als ein oder zwei Schlüsselwörter aus der unten stehenden Liste von Werten angegeben.

Zwei Schlüsselwörter spezifizieren den `overscroll-behavior`-Wert auf den `x`- und `y`-Achsen. Wenn nur ein Wert angegeben wird, wird angenommen, dass sowohl x als auch y denselben Wert haben.

### Werte

- `auto`
  - : Das standardmäßige Scroll-Überlaufverhalten erfolgt wie gewohnt.
- `contain`
  - : Das standardmäßige Scroll-Überlaufverhalten (z.B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, in dem dieser Wert gesetzt ist. Es findet jedoch keine Scroll-Verkettung in benachbarten Scrollbereichen statt; die darunter liegenden Elemente werden nicht scrollen. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wisch-Navigation.
- `none`
  - : Es findet keine Scroll-Verkettung zu benachbarten Scrollbereichen statt, und das standardmäßige Scroll-Überlaufverhalten wird verhindert.

## Beschreibung

Standardmäßig neigen mobile Browser dazu, einen "Bounce"-Effekt oder sogar eine Seitenaktualisierung zu bieten, wenn das obere oder untere Ende einer Seite (oder eines anderen Scrollbereichs) erreicht wird. Sie haben vielleicht auch bemerkt, dass, wenn Sie ein Dialogfeld mit scrollbarem Inhalt oben auf einer Seite haben, die ebenfalls scrollbaren Inhalt hat, sobald die {{Glossary("Scroll_boundary", "scroll-Grenze")}} des Dialogfeldes erreicht ist, die darunter liegende Seite dann zu scrollen beginnt - dies wird {{Glossary("Scroll_chaining", "scroll-Verkettung")}} genannt.

In einigen Fällen sind diese Verhaltensweisen nicht erwünscht. Sie können `overscroll-behavior` verwenden, um unerwünschte Scroll-Verkettung und das vom Facebook/Twitter-App inspirierte "Pull to Refresh"-Verhalten des Browsers zu beseitigen.

Beachten Sie, dass diese Eigenschaft nur auf {{Glossary("Scroll_container", "scroll Container")}} angewendet wird. Insbesondere, da ein [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) kein Scroll-Container ist, hat das Setzen dieser Eigenschaft auf einem iframe keine Wirkung. Um die Scroll-Verkettung von einem iframe aus zu steuern, setzen Sie `overscroll-behavior` sowohl auf die [`<html>`](/de/docs/Web/HTML/Reference/Elements/html) als auch auf die [`<body>`](/de/docs/Web/HTML/Reference/Elements/body) Elemente des Dokuments des iframe.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein darunter liegendes Element scrollt

In unserem [overscroll-behavior-Beispiel](https://mdn.github.io/css-examples/overscroll-behavior/) (siehe auch den [Quellcode](https://github.com/mdn/css-examples/tree/main/overscroll-behavior)), präsentieren wir eine ganzseitige Liste von Fake-Kontakten und ein Dialogfeld mit einem Chat-Fenster.

![Ein Pop-up-Chat-Fenster mit dem Titel 'Aktiver Chat', das ein Gespräch zwischen Chris und Bob zeigt. Hinter dem Chat-Fenster befindet sich eine Kontaktliste mit dem Titel 'overscroll-behavior-Demo'.](example.png)

Beide dieser Bereiche scrollen; normalerweise, wenn Sie das Chat-Fenster scrollen, bis Sie eine Scroll-Grenze erreichen, würde das darunter liegende Kontakt-Fenster ebenfalls zu scrollen beginnen, was nicht wünschenswert ist. Dies kann durch die Verwendung von `overscroll-behavior-y` (`overscroll-behavior` würde ebenfalls funktionieren) auf dem Chat-Fenster wie folgt gestoppt werden:

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

Wir wollten auch die standardmäßigen Overscroll-Effekte entfernen, wenn die Kontakte an den Anfang oder das Ende gescrollt werden (z.B. aktualisiert Chrome auf Android die Seite, wenn Sie über die obere Grenze hinaus scrollen). Dies kann verhindert werden, indem `overscroll-behavior: none` auf dem {{htmlelement("html")}}-Element gesetzt wird:

```css
html {
  margin: 0;
  overscroll-behavior: none;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS overscroll behavior](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul
- [CSS scroll anchoring](/de/docs/Web/CSS/CSS_scroll_anchoring) Modul
- [Übernehmen Sie die Kontrolle über Ihr Scrollen: Anpassen von Pull-to-Refresh und Überlaufeffekten](https://developer.chrome.com/blog/overscroll-behavior) auf developer.chrome.com (2017)

---
title: overscroll-behavior
slug: Web/CSS/Reference/Properties/overscroll-behavior
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`overscroll-behavior`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was ein Browser tut, wenn er den Rand eines Scrollbereichs erreicht.

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

## Zusammensetzende Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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

Die Eigenschaft `overscroll-behavior` wird als eines oder zwei Schlüsselwörter angegeben, die aus der unten stehenden Werteliste ausgewählt werden.

Zwei Schlüsselwörter geben den `overscroll-behavior`-Wert für die `x`- und `y`-Achse an. Wenn nur ein Wert angegeben wird, wird angenommen, dass sowohl x als auch y denselben Wert haben.

### Werte

- `auto`
  - : Das Standardverhalten bei Scrollüberlauf tritt normal auf.
- `contain`
  - : Das Standardverhalten bei Scrollüberlauf (z. B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, wo dieser Wert gesetzt ist. Es findet jedoch keine Scroll-Verkettung in benachbarte Scrollbereiche statt; die zugrunde liegenden Elemente scrollen nicht. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen "Pull-to-Refresh"-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es findet keine Scroll-Verkettung zu benachbarten Scrollbereichen statt, und das Standardverhalten bei Scrollüberlauf wird verhindert.

## Beschreibung

Standardmäßig neigen mobile Browser dazu, einen "Bounce"-Effekt oder sogar ein Seitenaktualisierung durchzuführen, wenn das obere oder untere Ende einer Seite (oder eines anderen Scrollbereichs) erreicht wird. Sie haben möglicherweise auch bemerkt, dass, wenn Sie ein Dialogfeld mit scrollbarem Inhalt am oberen Rand einer Seite haben, die ebenfalls scrollbaren Inhalt hat, sobald die {{Glossary("Scroll_boundary", "Scroll-Grenze")}} des Dialogfeldes erreicht ist, die zugrunde liegende Seite zu scrollen beginnt – dies wird als {{Glossary("Scroll_chaining", "Scroll-Verkettung")}} bezeichnet.

In einigen Fällen sind diese Verhaltensweisen nicht erwünscht. Sie können `overscroll-behavior` verwenden, um unerwünschte Scroll-Verkettungen und das vom Facebook/Twitter-App inspirierte "Pull-to-Refresh"-Verhalten des Browsers zu entfernen.

Beachten Sie, dass diese Eigenschaft nur auf {{Glossary("Scroll_container", "Scroll-Containern")}} angewendet wird. Insbesondere, da ein [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) kein Scroll-Container ist, hat das Setzen dieser Eigenschaft auf einem iframe keine Wirkung. Um die Scroll-Verkettung von einem iframe aus zu steuern, setzen Sie `overscroll-behavior` sowohl auf die [`<html>`](/de/docs/Web/HTML/Reference/Elements/html) als auch die [`<body>`](/de/docs/Web/HTML/Reference/Elements/body) Elemente des Dokuments im iframe.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein zugrunde liegendes Element scrollt

In unserem [overscroll-behavior Beispiel](https://mdn.github.io/css-examples/overscroll-behavior/) (siehe auch den [Quellcode](https://github.com/mdn/css-examples/tree/main/overscroll-behavior)) präsentieren wir eine vollständige Seite mit einer Liste gefälschter Kontakte und einem Dialogfeld, das ein Chatfenster enthält.

![Ein Popup-Chatfenster mit dem Titel 'Aktiver Chat', das ein Gespräch zwischen Chris und Bob zeigt. Hinter dem Chatfenster befindet sich eine Kontaktliste mit dem Titel 'overscroll-behavior demo'.](example.png)

Beide Bereiche scrollen; normalerweise, wenn Sie im Chatfenster scrollen, bis Sie eine Scroll-Grenze erreichen, würde das zugrunde liegende Kontakte-Fenster ebenfalls zu scrollen beginnen, was nicht wünschenswert ist. Dies kann durch die Verwendung von `overscroll-behavior-y` (`overscroll-behavior` würde auch funktionieren) auf dem Chatfenster gestoppt werden, wie folgt:

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

Wir wollten auch die Standard-Überscrolleffekte loswerden, wenn die Kontakte nach oben oder unten gescrollt werden (z. B. aktualisiert Chrome auf Android die Seite, wenn Sie über die obere Grenze hinaus scrollen). Dies kann verhindert werden, indem `overscroll-behavior: none` auf dem {{htmlelement("html")}} Element gesetzt wird:

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

- [CSS overscroll behavior](/de/docs/Web/CSS/Guides/Overscroll_behavior) Modul
- [CSS scroll anchoring](/de/docs/Web/CSS/Guides/Scroll_anchoring) Modul
- [Take control of your scroll: customizing pull-to-refresh and overflow effects](https://developer.chrome.com/blog/overscroll-behavior) auf developer.chrome.com (2017)

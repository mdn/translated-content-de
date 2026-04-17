---
title: overscroll-behavior
slug: Web/CSS/Reference/Properties/overscroll-behavior
l10n:
  sourceCommit: 12e3ce1c71f6f04ecf6689a62a02382ad47fd52e
---

Die **`overscroll-behavior`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, was ein Browser tut, wenn er den Rand eines scrollbaren Bereichs erreicht.

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

## Zusätzliche Eigenschaften

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

Die `overscroll-behavior`-Eigenschaft wird mit einem oder zwei Schlüsselwörtern aus der Liste der unten angegebenen Werte festgelegt.

Zwei Schlüsselwörter bestimmen den `overscroll-behavior`-Wert auf den `x`- und `y`-Achsen. Wenn nur ein Wert angegeben wird, wird für x und y derselbe Wert angenommen.

### Werte

- `auto`
  - : Das standardmäßige Scroll-Überlaufverhalten tritt wie gewöhnlich auf.
- `contain`
  - : Standardmäßiges Scroll-Überlaufverhalten (z. B. "Bounce"-Effekte) tritt innerhalb des Elements auf, in dem dieser Wert gesetzt ist. Es tritt jedoch keine Scroll-Verkettung mit benachbarten scrollbaren Bereichen auf; die darunterliegenden Elemente scrollen nicht. Der Wert `contain` deaktiviert native Browsernavigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt keine Scroll-Verkettung mit benachbarten scrollbaren Bereichen auf, und das standardmäßige Scroll-Überlaufverhalten wird verhindert.

## Beschreibung

Standardmäßig neigen mobile Browser dazu, bei Erreichen des oberen oder unteren Endes einer Seite (oder eines anderen Scrollbereichs) einen "Bounce"-Effekt oder sogar eine Seitenaktualisierung bereitzustellen. Sie haben vielleicht auch bemerkt, dass, wenn Sie ein Dialogfeld mit scrollbarem Inhalt oben auf einer Seite haben, die ebenfalls scrollbaren Inhalt hat, die darunter liegende Seite zu scrollen beginnt, sobald die {{Glossary("Scroll_boundary", "Scroll-Grenze")}} des Dialogfelds erreicht ist — dies wird {{Glossary("Scroll_chaining", "Scroll-Verkettung")}} genannt.

In manchen Fällen sind diese Verhaltensweisen nicht wünschenswert. Sie können `overscroll-behavior` verwenden, um unerwünschte Scroll-Verkettung und das von Facebook/Twitter inspirierten "Pull to Refresh"-Verhaltens des Browsers zu beseitigen.

Beachten Sie, dass diese Eigenschaft nur für {{Glossary("Scroll_container", "Scroll-Container")}} gilt. Insbesondere, da ein [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) kein Scroll-Container ist, hat das Setzen dieser Eigenschaft auf einem iframe keine Wirkung. Um Scroll-Verkettung von einem iframe zu steuern, setzen Sie `overscroll-behavior` sowohl auf die [`<html>`](/de/docs/Web/HTML/Reference/Elements/html)- als auch auf die [`<body>`](/de/docs/Web/HTML/Reference/Elements/body)-Elemente des Dokuments im iframe.

Ein {{Glossary("Scroll_container", "Scroll-Container")}}, der keinen scrollbaren Überlauf hat, wie ein Element mit `overflow: hidden`, wird immer als an seiner {{Glossary("Scroll_boundary", "Scroll-Grenze")}} befindlich betrachtet. Das Setzen eines nicht-standardmäßigen `overscroll-behavior` wie `contain` oder `none` darauf verhindert die Scroll-Verkettung zu übergeordneten Scroll-Containern. Dies kann verwendet werden, um das Hintergrundscrollen zu verhindern, während ein Dialog oder Overlay geöffnet ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein darunterliegendes Element scrollt

In unserem [overscroll-behavior Beispiel](https://mdn.github.io/css-examples/overscroll-behavior/) (siehe auch den [Quellcode](https://github.com/mdn/css-examples/tree/main/overscroll-behavior)) präsentieren wir eine ganzseitige Liste von fiktiven Kontakten und ein Dialogfeld, das ein Chatfenster enthält.

![Ein Popup-Chatfenster mit dem Titel 'Aktiver Chat', das ein Gespräch zwischen Chris und Bob zeigt. Hinter dem Chatfenster befindet sich eine Kontaktliste mit dem Titel 'overscroll-behavior demo'.](example.png)

Beide dieser Bereiche scrollen; normalerweise, wenn Sie das Chatfenster nach oben scrollen, bis Sie eine Scroll-Grenze erreichen, würde das darunterliegende Kontaktfenster ebenfalls zu scrollen beginnen, was nicht wünschenswert ist. Dies kann durch die Verwendung von `overscroll-behavior-y` (`overscroll-behavior` würde auch funktionieren) auf dem Chatfenster gestoppt werden, wie folgt:

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

Wir wollten auch die standardmäßigen Overscroll-Effekte beseitigen, wenn die Kontakte nach oben oder unten gescrollt werden (z. B. aktualisiert Chrome auf Android die Seite, wenn Sie über die obere Grenze hinaus scrollen). Dies kann verhindert werden, indem `overscroll-behavior: none` auf das {{htmlelement("html")}}-Element gesetzt wird:

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

- [CSS overscroll behavior](/de/docs/Web/CSS/Guides/Overscroll_behavior) Modulo
- [CSS scroll anchoring](/de/docs/Web/CSS/Guides/Scroll_anchoring) Modulo
- [Take control of your scroll: customizing pull-to-refresh and overflow effects](https://developer.chrome.com/blog/overscroll-behavior) auf developer.chrome.com (2017)

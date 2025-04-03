---
title: overscroll-behavior
slug: Web/CSS/overscroll-behavior
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Die **`overscroll-behavior`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, was ein Browser tut, wenn er den Rand eines Scrollbereichs erreicht.

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

Die `overscroll-behavior`-Eigenschaft wird als eines oder zwei Schlüsselwörter aus der unten stehenden Werteliste angegeben.

Zwei Schlüsselwörter spezifizieren den `overscroll-behavior`-Wert auf den `x`- und `y`-Achsen respektive. Wenn nur ein Wert angegeben wird, wird für beide Achsen derselbe Wert angenommen.

### Werte

- `auto`
  - : Das Standardverhalten bei Überlauf von Scrolls tritt wie gewohnt auf.
- `contain`
  - : Das Standardverhalten bei Überlauf von Scrolls (z.B. „Bounce“-Effekte) wird innerhalb des Elements beobachtet, in dem dieser Wert gesetzt ist. Es tritt jedoch kein Scroll-Chaining bei angrenzenden Scrollbereichen auf; die darunter liegenden Elemente scrollen nicht. Der `contain`-Wert deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt kein Scroll-Chaining bei angrenzenden Scrollbereichen auf, und das Standardverhalten bei Überlauf von Scrolls wird verhindert.

## Beschreibung

Standardmäßig neigen mobile Browser dazu, einen "Bounce"-Effekt oder sogar eine Seitenaktualisierung zu liefern, wenn der obere oder untere Rand einer Seite (oder eines anderen Scrollbereichs) erreicht wird. Sie haben vielleicht auch bemerkt, dass wenn Sie ein Dialogfeld mit scrollbarem Inhalt am oberen Rand einer Seite haben, die auch scrollbare Inhalte hat, sobald der {{Glossary("Scroll_boundary", "Scrollrand")}} des Dialogfeldes erreicht ist, die darunter liegende Seite zu scrollen beginnt – dies wird als {{Glossary("Scroll_chaining", "Scroll-Chaining")}} bezeichnet.

In einigen Fällen sind diese Verhaltensweisen nicht erwünscht. Sie können `overscroll-behavior` verwenden, um unerwünschtes Scroll-Chaining und das "Pull-to-Refresh"-Verhalten des Browsers, wie es bei der Facebook-/Twitter-App inspiriert ist, zu beseitigen.

Beachten Sie, dass diese Eigenschaft nur für {{Glossary("Scroll_container", "Scroll-Container")}} gilt. Insbesondere da ein [`<iframe>`](/de/docs/Web/HTML/Element/iframe) kein Scroll-Container ist, hat das Setzen dieser Eigenschaft auf einem iframe keinen Effekt. Um das Scroll-Chaining von einem iframe zu steuern, setzen Sie `overscroll-behavior` sowohl auf die [`<html>`](/de/docs/Web/HTML/Element/html)- als auch die [`<body>`](/de/docs/Web/HTML/Element/body)-Elemente des Dokuments des iframes.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein zugrundeliegendes Element scrollt

In unserem [overscroll-behavior Beispiel](https://mdn.github.io/css-examples/overscroll-behavior/) (siehe auch den [Quellcode](https://github.com/mdn/css-examples/tree/main/overscroll-behavior)), präsentieren wir eine ganzseitige Liste von gefälschten Kontakten und ein Dialogfeld mit einem Chat-Fenster.

![Ein Popup-Chatfenster mit dem Titel 'Aktiver Chat', das ein Gespräch zwischen Chris und Bob zeigt. Hinter dem Chatfenster befindet sich eine Kontaktliste mit dem Titel 'overscroll-behavior demo'.](example.png)

Beide Bereiche sind scrollbar; normalerweise, wenn Sie das Chatfenster scrollen, bis Sie einen Scrollrand erreichen, würde das zugrundeliegende Kontaktefenster auch zu scrollen beginnen, was nicht wünschenswert ist. Dies kann durch die Verwendung von `overscroll-behavior-y` (`overscroll-behavior` würde auch funktionieren) auf dem Chatfenster gestoppt werden, wie folgt:

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

Wir wollten auch die standardmäßigen Effekte des Überscrollens beseitigen, wenn die Kontakte an den oberen oder unteren Rand gescrollt werden (z.B. Chrome auf Android aktualisiert die Seite, wenn Sie den oberen Rand überschreiten). Dies kann verhindert werden, indem `overscroll-behavior: none` auf das {{htmlelement("html")}}-Element gesetzt wird:

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
- [Übernehmen Sie die Kontrolle über Ihr Scrollen: Anpassung von Pull-to-Refresh und Überlauf-Effekten](https://developer.chrome.com/blog/overscroll-behavior) auf developer.chrome.com (2017)

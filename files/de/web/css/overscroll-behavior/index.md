---
title: overscroll-behavior
slug: Web/CSS/overscroll-behavior
l10n:
  sourceCommit: a7335ef81c49b0f7604ee64240711456d0f29e6b
---

{{CSSRef}}

Die **`overscroll-behavior`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was ein Browser tut, wenn er die Grenze eines Scrollbereichs erreicht.

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

```css interactive-example-choice
overscroll-behavior: auto;
```

```css interactive-example-choice
overscroll-behavior: contain;
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

## Untergeordnete Eigenschaften

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

Die `overscroll-behavior` Eigenschaft wird als eines oder zwei Schlüsselwörter aus der folgenden Werteliste angegeben.

Zwei Schlüsselwörter geben den `overscroll-behavior`-Wert auf der `x`- und `y`-Achse an. Wenn nur ein Wert angegeben wird, wird angenommen, dass sowohl x als auch y denselben Wert haben.

### Werte

- `auto`
  - : Das Standard-Scroll-Überlaufverhalten tritt wie gewohnt auf.
- `contain`
  - : Standard-Scroll-Überlaufverhalten (z.B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, in dem dieser Wert gesetzt ist. Es tritt jedoch kein Scroll-Chaining in benachbarten Scrollbereichen auf; die darunter liegenden Elemente scrollen nicht. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischen-Navigation.
- `none`
  - : Es tritt kein Scroll-Chaining zu benachbarten Scrollbereichen auf und das Standard-Scroll-Überlaufverhalten wird verhindert.

## Beschreibung

Standardmäßig bieten mobile Browser oft einen "Bounce"-Effekt oder sogar ein Seiten-Refresh, wenn das obere oder untere Ende einer Seite (oder eines anderen Scrollbereichs) erreicht wird. Sie haben vielleicht auch bemerkt, dass wenn Sie eine Dialogbox mit scrollendem Inhalt am oberen Rand einer Seite haben, die ebenfalls scrollenden Inhalt hat, die darunter liegende Seite zu scrollen beginnt, sobald die {{Glossary("Scroll_boundary", "Scrollgrenze")}} der Dialogbox erreicht ist - dies wird als {{Glossary("Scroll_chaining", "Scroll-Chaining")}} bezeichnet.

In einigen Fällen sind diese Verhaltensweisen nicht erwünscht. Sie können `overscroll-behavior` verwenden, um unerwünschtes Scroll-Chaining und das vom Browser inspirierte "Pull to Refresh"-Verhalten zu beseitigen.

Beachten Sie, dass diese Eigenschaft nur auf {{Glossary("Scroll_container", "Scroll-Container")}} angewendet wird. Insbesondere hat sie keine Wirkung, da ein [`<iframe>`](/de/docs/Web/HTML/Element/iframe) kein Scroll-Container ist, wenn sie auf ein iframe angewendet wird. Um das Scroll-Chaining von einem iframe aus zu steuern, setzen Sie `overscroll-behavior` sowohl auf die [`<html>`](/de/docs/Web/HTML/Element/html) als auch auf die [`<body>`](/de/docs/Web/HTML/Element/body) Elemente des iframe-Dokuments.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein darunter liegendes Element scrollt

In unserem [overscroll-behavior Beispiel](https://mdn.github.io/css-examples/overscroll-behavior/) (siehe auch den [Quellcode](https://github.com/mdn/css-examples/tree/main/overscroll-behavior)), präsentieren wir eine seitenfüllende Liste von Fake-Kontakten und eine Dialogbox mit einem Chatfenster.

![Ein Popup-Chatfenster mit dem Titel 'Active chat', das ein Gespräch zwischen Chris und Bob zeigt. Hinter dem Chatfenster befindet sich eine Kontaktliste mit dem Titel 'overscroll-behavior demo'.](example.png)

Beide Bereiche scrollen; normalerweise würde, wenn Sie das Chatfenster scrollen, bis Sie eine Scrollgrenze erreichen, das darunter liegende Kontaktefenster ebenfalls zu scrollen beginnen, was nicht erwünscht ist. Dies kann gestoppt werden, indem `overscroll-behavior-y` (`overscroll-behavior` würde auch funktionieren) auf dem Chatfenster gesetzt wird, wie folgt:

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

Wir wollten auch die standardmäßigen Overscroll-Effekte loswerden, wenn die Kontakte ganz nach oben oder unten gescrollt werden (z.B. aktualisiert Chrome auf Android die Seite, wenn Sie über die obere Grenze hinaus scrollen). Dies kann verhindert werden, indem `overscroll-behavior: none` auf dem {{htmlelement("html")}} Element gesetzt wird:

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
- [Nehmen Sie die Kontrolle über Ihr Scrollen: Anpassen von Pull-to-Refresh und Überlaufeffekten](https://developer.chrome.com/blog/overscroll-behavior) auf developer.chrome.com (2017)

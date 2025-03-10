---
title: overscroll-behavior
slug: Web/CSS/overscroll-behavior
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

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

## Bestandteileigenschaften

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

Die `overscroll-behavior` Eigenschaft wird als eines oder zwei Schlüsselwörter aus der unten aufgeführten Liste von Werten angegeben.

Zwei Schlüsselwörter geben den `overscroll-behavior` Wert auf den `x`- und `y`-Achsen an. Wenn nur ein Wert angegeben wird, wird angenommen, dass sowohl `x` als auch `y` denselben Wert haben.

### Werte

- `auto`
  - : Das Standardverhalten bei Überlauf des Scrollens tritt wie gewohnt auf.
- `contain`
  - : Standardmäßiges Überlaufverhalten beim Scrollen (z. B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, in dem dieser Wert gesetzt ist. Es tritt jedoch keine Scroll-Verkettung in benachbarten Scrollbereichen auf; die zugrunde liegenden Elemente werden nicht scrollen. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen "Ziehen-zum-Aktualisieren" Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt keine Scroll-Verkettung zu benachbarten Scrollbereichen auf, und das Standardverhalten bei Überlauf des Scrollens wird verhindert.

## Beschreibung

Standardmäßig neigen mobile Browser dazu, einen "Bounce"-Effekt oder sogar eine Seitenaktualisierung bereitzustellen, wenn das obere oder untere Ende einer Seite (oder eines anderen Scrollbereichs) erreicht wird. Sie haben vielleicht auch bemerkt, dass wenn Sie ein Dialogfeld mit scrollendem Inhalt am oberen Ende einer Seite haben, die auch scrollbaren Inhalt hat, sobald die {{Glossary("Scroll_boundary", "Scrollgrenze")}} des Dialogfelds erreicht wird, die zugrunde liegende Seite dann zu scrollen beginnt — dies wird als {{Glossary("Scroll_chaining", "Scroll-Verkettung")}} bezeichnet.

In einigen Fällen sind diese Verhaltensweisen nicht wünschenswert. Sie können `overscroll-behavior` verwenden, um unerwünschte Scroll-Verkettungen und das vom Browser inspirierte "Ziehen-zum-Aktualisieren"-Verhalten zu beseitigen.

Beachten Sie, dass diese Eigenschaft nur auf {{Glossary("Scroll_container", "Scroll-Container")}} angewendet wird. Insbesondere da ein [`<iframe>`](/de/docs/Web/HTML/Element/iframe) kein Scroll-Container ist, hat das Setzen dieser Eigenschaft auf ein iframe keine Wirkung. Um die Scroll-Verkettung aus einem iframe zu steuern, setzen Sie `overscroll-behavior` sowohl auf den [`<html>`](/de/docs/Web/HTML/Element/html) als auch auf den [`<body>`](/de/docs/Web/HTML/Element/body) Elementen des Dokuments im iframe.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein zugrunde liegendes Element scrollt

In unserem [overscroll-behavior Beispiel](https://mdn.github.io/css-examples/overscroll-behavior/) (siehe auch den [Quellcode](https://github.com/mdn/css-examples/tree/main/overscroll-behavior)), präsentieren wir eine ganzseitige Liste von fiktiven Kontakten und ein Dialogfeld mit einem Chatfenster.

![Ein Popup-Chatfenster mit dem Titel 'Aktiver Chat', das ein Gespräch zwischen Chris und Bob zeigt. Hinter dem Chatfenster befindet sich eine Kontaktliste mit dem Titel 'overscroll-behavior Demo'.](example.png)

Beide Bereiche scrollen; normalerweise, wenn Sie das Chatfenster scrollen, bis Sie eine Scrollgrenze erreichen, würde das zugrunde liegende Kontaktfenster auch anfangen zu scrollen, was nicht wünschenswert ist. Dies kann man stoppen, indem man `overscroll-behavior-y` (`overscroll-behavior` würde auch funktionieren) auf dem Chatfenster anwendet, wie folgt:

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

Wir wollten auch die standardmäßigen Overscroll-Effekte loswerden, wenn die Kontakte nach oben oder unten gescrollt werden (z. B. aktualisiert Chrome auf Android die Seite, wenn Sie über die obere Grenze hinaus scrollen). Dies kann verhindert werden, indem `overscroll-behavior: none` auf das {{htmlelement("html")}}-Element gesetzt wird:

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

- [CSS Overscroll Behavior](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul
- [Übernehmen Sie die Kontrolle über Ihr Scrollen: Anpassen von Ziehen-zum-Aktualisieren und Überlaufeffekten](https://developer.chrome.com/blog/overscroll-behavior) auf developer.chrome.com (2017)

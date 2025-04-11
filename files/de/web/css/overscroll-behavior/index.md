---
title: overscroll-behavior
slug: Web/CSS/overscroll-behavior
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

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

## Zukünftige Eigenschaften

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

Die `overscroll-behavior` Eigenschaft wird als eines oder zwei Schlüsselwörter aus der unten stehenden Werteliste angegeben.

Zwei Schlüsselwörter spezifizieren den `overscroll-behavior` Wert auf der `x`- und `y`-Achse. Wenn nur ein Wert angegeben wird, haben sowohl x als auch y denselben Wert.

### Werte

- `auto`
  - : Das Standardverhalten für überlaufendes Scrollen erfolgt wie gewohnt.
- `contain`
  - : Standardmäßig wird das Verhalten für überlaufendes Scrollen (z.B. "Bounce"-Effekte) innerhalb des Elements beobachtet, auf dem dieser Wert gesetzt ist. Es findet jedoch keine Verkettung des Scrolls auf benachbarte Scrollbereiche statt; die zugrunde liegenden Elemente scrollen nicht. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen Geste „pull-to-refresh“ und horizontaler Wischnavigation.
- `none`
  - : Es findet keine Verkettung des Scrolls auf benachbarte Scrollbereiche statt, und das Standardverhalten für überlaufendes Scrollen wird verhindert.

## Beschreibung

Standardmäßig neigen mobile Browser dazu, einen "Bounce"-Effekt oder sogar eine Seitenaktualisierung anzubieten, wenn das obere oder untere Ende einer Seite (oder eines anderen Scrollbereichs) erreicht wird. Es ist Ihnen möglicherweise auch aufgefallen, dass, wenn Sie ein Dialogfeld mit scrollenden Inhalten oben auf einer Seite haben, die ebenfalls scrollenden Inhalte enthält, sobald das {{Glossary("Scroll_boundary", "Scroll-Limit")}} des Dialogfelds erreicht ist, die zugrunde liegende Seite zu scrollen beginnt — dies wird als {{Glossary("Scroll_chaining", "Scroll-Verkettung")}} bezeichnet.

In einigen Fällen sind diese Verhaltensweisen nicht wünschenswert. Sie können `overscroll-behavior` verwenden, um unerwünschte Scroll-Verkettungen und das von den Apps von Facebook/Twitter inspirierte "pull-to-refresh"-Verhalten des Browsers zu beseitigen.

Beachten Sie, dass sich diese Eigenschaft nur auf {{Glossary("Scroll_container", "Scroll-Container")}} auswirkt. Insbesondere, da ein [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) kein Scroll-Container ist, hat das Setzen dieser Eigenschaft auf einem iframe keine Wirkung. Um die Scroll-Verkettung von einem iframe zu steuern, setzen Sie `overscroll-behavior` auf die [`<html>`](/de/docs/Web/HTML/Reference/Elements/html) und die [`<body>`](/de/docs/Web/HTML/Reference/Elements/body) Elemente des Dokuments des iframes.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein darunterliegendes Element scrollt

In unserem [overscroll-behavior Beispiel](https://mdn.github.io/css-examples/overscroll-behavior/) (siehe auch den [Quellcode](https://github.com/mdn/css-examples/tree/main/overscroll-behavior)) präsentieren wir eine ganzseitige Liste von Fake-Kontakten und ein Dialogfeld mit einem Chatfenster.

![Ein Popup-Chatfenster mit dem Titel 'Aktiver Chat', das ein Gespräch zwischen Chris und Bob zeigt. Hinter dem Chatfenster befindet sich eine Kontaktliste mit dem Titel 'overscroll-behavior Demo'.](example.png)

Beide Bereiche scrollen; normalerweise, wenn Sie das Chatfenster scrollen, bis Sie ein Scroll-Limit erreichen, fängt das darunterliegende Kontaktfenster ebenfalls an zu scrollen, was nicht erwünscht ist. Dies kann gestoppt werden, indem `overscroll-behavior-y` (`overscroll-behavior` würde auch funktionieren) auf das Chatfenster angewendet wird, wie folgt:

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

Wir wollten auch die standardmäßigen Overscroll-Effekte loswerden, wenn die Kontakte bis zum oberen oder unteren Ende gescrollt werden (z.B. aktualisiert Chrome auf Android die Seite, wenn Sie über das obere Limit hinaus scrollen). Dies kann verhindert werden, indem `overscroll-behavior: none` auf das {{htmlelement("html")}} Element gesetzt wird:

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
- [Take control of your scroll: customizing pull-to-refresh and overflow effects](https://developer.chrome.com/blog/overscroll-behavior) auf developer.chrome.com (2017)

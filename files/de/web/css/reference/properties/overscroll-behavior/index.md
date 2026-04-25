---
title: CSS-Eigenschaft `overscroll-behavior`
short-title: overscroll-behavior
slug: Web/CSS/Reference/Properties/overscroll-behavior
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

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

## Bestandteilende Eigenschaften

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

Die `overscroll-behavior`-Eigenschaft wird als eines oder zwei Schlüsselwörter angegeben, die aus der untenstehenden Liste von Werten ausgewählt werden.

Zwei Schlüsselwörter geben den `overscroll-behavior`-Wert für die `x`- und `y`-Achsen an. Wenn nur ein Wert angegeben ist, wird für beide Achsen derselbe Wert angenommen.

### Werte

- `auto`
  - : Das Standardverhalten bei Überlauf beim Scrollen tritt wie gewohnt auf.
- `contain`
  - : Das Standardverhalten bei Überlauf beim Scrollen (z.B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, in dem dieser Wert gesetzt ist. Scroll-Verkettung tritt jedoch bei benachbarten Scrollbereichen nicht auf; die darunterliegenden Elemente scrollen nicht. Der `contain`-Wert deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Keine Scroll-Verkettung tritt bei benachbarten Scrollbereichen auf, und das Standardverhalten bei Überlauf beim Scrollen wird verhindert.

## Beschreibung

Standardmäßig neigen mobile Browser dazu, einen "Bounce"-Effekt oder sogar eine Seitenaktualisierung bereitzustellen, wenn das obere oder untere Ende einer Seite (oder eines anderen Scrollbereichs) erreicht wird. Sie haben vielleicht auch bemerkt, dass, wenn Sie ein Dialogfeld mit scrollendem Inhalt oben auf einer Seite haben, die auch scrollenden Inhalt hat, die zugrunde liegende Seite zu scrollen beginnt, sobald die {{Glossary("Scroll_boundary", "Scrollgrenze")}} des Dialogfelds erreicht ist – dies wird {{Glossary("Scroll_chaining", "Scroll-Verkettung")}} genannt.

In einigen Fällen sind diese Verhaltensweisen nicht erwünscht. Sie können `overscroll-behavior` verwenden, um unerwünschte Scroll-Verkettungen und das vom Facebook/Twitter-App inspirierten Verhalten "zum Aktualisieren ziehen"-Typ zu beseitigen.

Beachten Sie, dass diese Eigenschaft nur für {{Glossary("Scroll_container", "Scroll-Container")}} gilt. Insbesondere da ein [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) kein Scroll-Container ist, hat das Setzen dieser Eigenschaft auf einem `iframe` keine Wirkung. Um die Scroll-Verkettung von einem `iframe` aus zu steuern, setzen Sie `overscroll-behavior` auf sowohl den [`<html>`](/de/docs/Web/HTML/Reference/Elements/html)- als auch den [`<body>`](/de/docs/Web/HTML/Reference/Elements/body)-Elementen des Dokuments des `iframe`.

Ein {{Glossary("Scroll_container", "Scroll-Container")}}, der keinen scrollbaren Überlauf hat, wie ein Element mit `overflow: hidden`, wird immer als an seinem {{Glossary("Scroll_boundary", "Scrollgrenze")}} betrachtet. Daher wird das Setzen eines nicht standardmäßigen `overscroll-behavior` wie `contain` oder `none` darauf verhindern, dass eine Scroll-Verkettung zu übergeordneten Scroll-Containern erfolgt. Dies kann verwendet werden, um Hintergrundscrollen zu verhindern, während ein Dialog oder Overlay geöffnet ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein darunterliegendes Element scrollt

In unserem [overscroll-behavior Beispiel](https://mdn.github.io/css-examples/overscroll-behavior/) (siehe auch den [Quellcode](https://github.com/mdn/css-examples/tree/main/overscroll-behavior)) präsentieren wir eine ganzseitige Liste von gefälschten Kontakten und ein Dialogfeld, das ein Chatfenster enthält.

![Ein Popup-Chatfenster mit dem Titel 'Aktiver Chat', das ein Gespräch zwischen Chris und Bob zeigt. Hinter dem Chatfenster befindet sich eine Kontaktliste mit dem Titel 'overscroll-behavior Demo'.](example.png)

Beide Bereiche scrollen; normalerweise, wenn Sie das Chatfenster scrollen, bis Sie eine Scroll-Grenze erreichen, würde das darunterliegende Kontakte-Fenster auch zu scrollen beginnen, was nicht wünschenswert ist. Dies kann verhindert werden, indem `overscroll-behavior-y` (`overscroll-behavior` würde auch funktionieren) auf dem Chatfenster wie folgt gesetzt wird:

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

Wir wollten auch die Standard-Overscroll-Effekte beseitigen, wenn die Kontakte an den oberen oder unteren Rand scrollen (z.B. aktualisiert Chrome auf Android die Seite, wenn Sie über die obere Grenze scrollen). Dies kann verhindert werden, indem `overscroll-behavior: none` auf dem {{htmlelement("html")}}-Element gesetzt wird:

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

- [CSS overscroll behavior](/de/docs/Web/CSS/Guides/Overscroll_behavior)-Modul
- [CSS scroll anchoring](/de/docs/Web/CSS/Guides/Scroll_anchoring)-Modul
- [Übernehmen Sie die Kontrolle über Ihr Scrollen: Anpassen von Pull-to-Refresh und Überlaufeffekten](https://developer.chrome.com/blog/overscroll-behavior) auf developer.chrome.com (2017)

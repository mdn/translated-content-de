---
title: overscroll-behavior
slug: Web/CSS/Reference/Properties/overscroll-behavior
l10n:
  sourceCommit: f28f4c26a3d95e41d01a505af3388881abd6e49c
---

Die **`overscroll-behavior`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, was ein Browser tut, wenn er die Grenze eines Scrollbereichs erreicht.

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

## Zusammengesetzte Eigenschaften

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

Die `overscroll-behavior`-Eigenschaft wird als ein oder zwei Schlüsselwörter aus der unten stehenden Werteliste angegeben.

Zwei Schlüsselwörter legen den `overscroll-behavior`-Wert auf den x- und y-Achsen fest. Wenn nur ein Wert angegeben wird, wird für x und y derselbe Wert angenommen.

### Werte

- `auto`
  - : Das Standardverhalten bei Bildlaufüberlauf tritt wie gewohnt auf.
- `contain`
  - : Das Standardverhalten bei Bildlaufüberlauf (z.B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, wo dieser Wert festgelegt ist. Scroll-Chaining tritt jedoch nicht bei benachbarten Scrollbereichen auf; die zugrunde liegenden Elemente werden nicht scrollen. Der `contain`-Wert deaktiviert die native Browsernavigation, einschließlich der vertikalen Pull-to-Refresh-Geste und horizontalen Wischnavigation.
- `none`
  - : Kein Scroll-Chaining tritt bei benachbarten Scrollbereichen auf und das Standardverhalten bei Bildlaufüberlauf wird verhindert.

## Beschreibung

Standardmäßig neigen mobile Browser dazu, einen "Bounce"-Effekt oder sogar ein Seiten-Refresh zu bieten, wenn das obere oder untere Ende einer Seite (oder eines anderen Scrollbereichs) erreicht wird. Möglicherweise haben Sie auch bemerkt, dass wenn Sie ein Dialogfenster mit scrollbarem Inhalt oben auf einer Seite haben, die ebenfalls scrollbaren Inhalt hat, die zugrunde liegende Seite mit dem Scrollen beginnt, sobald die {{Glossary("Scroll_boundary", "Scroll-Grenze")}} des Dialogfelds erreicht ist — dies wird {{Glossary("Scroll_chaining", "Scroll-Chaining")}} genannt.

In einigen Fällen sind diese Verhaltensweisen nicht erwünscht. Sie können `overscroll-behavior` verwenden, um unerwünschtes Scroll-Chaining und das von den Facebook/Twitter-Apps inspirierte "Pull to Refresh"-Verhalten des Browsers zu beseitigen.

Beachten Sie, dass diese Eigenschaft nur auf {{Glossary("Scroll_container", "Scroll-Container")}} angewendet wird. Insbesondere hat das Setzen dieser Eigenschaft auf einem [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) keine Wirkung, da ein `<iframe>` kein Scroll-Container ist. Um das Scroll-Chaining von einem iFrame zu steuern, setzen Sie `overscroll-behavior` sowohl auf den [`<html>`](/de/docs/Web/HTML/Reference/Elements/html)- als auch auf den [`<body>`](/de/docs/Web/HTML/Reference/Elements/body)-Elementen des Dokuments des iFrames.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein unterliegendes Element scrollt

In unserem [Beispiel für overscroll-behavior](https://mdn.github.io/css-examples/overscroll-behavior/) (siehe auch den [Quellcode](https://github.com/mdn/css-examples/tree/main/overscroll-behavior)) präsentieren wir eine ganzseitige Liste von gefälschten Kontakten und ein Dialogfenster, das ein Chat-Fenster enthält.

![Ein Popup-Chatfenster mit dem Titel 'Aktiver Chat', das ein Gespräch zwischen Chris und Bob zeigt. Hinter dem Chatfenster befindet sich eine Kontaktliste mit dem Titel 'overscroll-behavior demo'.](example.png)

Beide dieser Bereiche scrollen; normalerweise würde, wenn Sie das Chatfenster bis zu einer Scroll-Grenze scrollen, das unterliegende Kontaktfenster auch zu scrollen beginnen, was nicht erwünscht ist. Dies kann verhindert werden, indem `overscroll-behavior-y` (`overscroll-behavior` würde auch funktionieren) auf dem Chatfenster gesetzt wird, wie folgt:

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

Wir wollten auch die standardmäßigen Overscroll-Effekte beseitigen, wenn die Kontakte bis zum oberen oder unteren Rand gescrollt werden (z.B. aktualisiert Chrome auf Android die Seite, wenn man über die obere Grenze hinaus scrollt). Dies kann verhindert werden, indem `overscroll-behavior: none` auf dem {{htmlelement("html")}} Element gesetzt wird:

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
- [Haben Sie die Kontrolle über Ihr Scroll: Anpassung von Pull-to-Refresh und Überlauf-Effekten](https://developer.chrome.com/blog/overscroll-behavior) auf developer.chrome.com (2017)

---
title: overscroll-behavior
slug: Web/CSS/overscroll-behavior
l10n:
  sourceCommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

{{CSSRef}}

Die **`overscroll-behavior`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was ein Browser tut, wenn er den Rand eines Scrollbereichs erreicht.

{{EmbedInteractiveExample("pages/css/overscroll-behavior.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Abkürzung für die folgenden CSS-Eigenschaften:

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

Die `overscroll-behavior` Eigenschaft wird als ein oder zwei Schlüsselwörter aus der untenstehenden Werteliste angegeben.

Zwei Schlüsselwörter spezifizieren den `overscroll-behavior` Wert auf den `x`- und `y`-Achsen. Wenn nur ein Wert angegeben ist, wird angenommen, dass sowohl `x` als auch `y` denselben Wert haben.

### Werte

- `auto`
  - : Das Standard-Scroll-Überlaufverhalten tritt wie gewohnt auf.
- `contain`
  - : Das Standard-Scroll-Überlaufverhalten (z. B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, in dem dieser Wert gesetzt ist. Es passiert jedoch kein Scroll-Chaining in benachbarten Scrollbereichen; die zugrunde liegenden Elemente werden nicht scrollen. Der `contain` Wert deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Swipe-Navigation.
- `none`
  - : Es passiert kein Scroll-Chaining zu benachbarten Scrollbereichen, und das Standard-Scroll-Überlaufverhalten wird verhindert.

## Beschreibung

Standardmäßig neigen mobile Browser dazu, einen "Bounce"-Effekt oder sogar eine Seitenaktualisierung zu bieten, wenn das obere oder untere Ende einer Seite (oder eines anderen Scrollbereichs) erreicht wird. Sie haben möglicherweise auch bemerkt, dass wenn Sie ein Dialogfeld mit scrollbarem Inhalt oben auf einer Seite haben, die ebenfalls scrollbaren Inhalt hat, sobald die {{Glossary("Scroll_boundary", "Scrollbegrenzung")}} des Dialogfelds erreicht ist, die zugrunde liegende Seite zu scrollen beginnt — dies wird als {{Glossary("Scroll_chaining", "Scroll-Chaining")}} bezeichnet.

In einigen Fällen sind diese Verhaltensweisen nicht wünschenswert. Sie können `overscroll-behavior` verwenden, um unerwünschtes Scroll-Chaining und das vom Browser inspirierte "Pull-to-Refresh"-Verhalten von Facebook/Twitter-Apps zu beseitigen.

Beachten Sie, dass sich diese Eigenschaft nur auf {{Glossary("Scroll_container", "Scrollcontainer")}} bezieht. Insbesondere, da ein [`<iframe>`](/de/docs/Web/HTML/Element/iframe) kein Scrollcontainer ist, hat das Setzen dieser Eigenschaft auf einem `iframe` keine Wirkung. Um das Scroll-Chaining von einem `iframe` zu steuern, setzen Sie `overscroll-behavior` auf sowohl die [`<html>`](/de/docs/Web/HTML/Element/html) als auch die [`<body>`](/de/docs/Web/HTML/Element/body) Elemente des Dokuments des `iframe`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein zugrunde liegendes Element scrollt

In unserem [overscroll-behavior-Beispiel](https://mdn.github.io/css-examples/overscroll-behavior/) (siehe auch den [Quellcode](https://github.com/mdn/css-examples/tree/main/overscroll-behavior)) präsentieren wir eine ganzseitige Liste von fiktiven Kontakten und ein Dialogfeld, das ein Chatfenster enthält.

![Ein Popup-Chatfenster mit dem Titel 'Aktiver Chat', das ein Gespräch zwischen Chris und Bob zeigt. Hinter dem Chatfenster befindet sich eine Kontaktliste mit dem Titel 'overscroll-behavior demo'.](example.png)

Beide dieser Bereiche scrollen; normalerweise, wenn Sie das Chatfenster scrollen, bis Sie eine Scrollbegrenzung erreichen, würde das zugrunde liegende Kontaktfenster auch zu scrollen beginnen, was nicht erwünscht ist. Dies kann durch Verwenden von `overscroll-behavior-y` (auch `overscroll-behavior` würde funktionieren) im Chatfenster gestoppt werden, wie folgt:

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

Wir wollten auch die Standard-Overscroll-Effekte loswerden, wenn die Kontakte nach oben oder unten gescrollt werden (z. B. aktualisiert Chrome auf Android die Seite, wenn Sie über die obere Grenze hinaus scrollen). Dies kann verhindert werden, indem `overscroll-behavior: none` auf dem {{htmlelement("html")}} Element gesetzt wird:

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
- [Übernehmen Sie die Kontrolle über Ihr Scrollen: Anpassen von Pull-to-Refresh und Overflow-Effekten](https://developer.chrome.com/blog/overscroll-behavior) auf developer.chrome.com (2017)

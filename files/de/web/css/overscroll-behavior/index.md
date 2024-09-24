---
title: overscroll-behavior
slug: Web/CSS/overscroll-behavior
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`overscroll-behavior`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, was ein Browser tut, wenn er den Rand eines Scrollbereichs erreicht.

{{EmbedInteractiveExample("pages/css/overscroll-behavior.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{Cssxref("overscroll-behavior-x")}}
- {{Cssxref("overscroll-behavior-y")}}

## Syntax

```css
/* Schlüsselwortwerte */
overscroll-behavior: auto; /* Standard */
overscroll-behavior: contain;
overscroll-behavior: none;

/* Zwei Werte */
overscroll-behavior: auto contain;

/* Globale Werte */
overscroll-behavior: inherit;
overscroll-behavior: initial;
overscroll-behavior: revert;
overscroll-behavior: revert-layer;
overscroll-behavior: unset;
```

Die `overscroll-behavior`-Eigenschaft wird als ein oder zwei Schlüsselwörter aus der folgenden Liste von Werten angegeben.

Zwei Schlüsselwörter geben den `overscroll-behavior`-Wert auf der `x`- und `y`-Achse an. Wenn nur ein Wert angegeben wird, wird angenommen, dass sowohl x als auch y denselben Wert haben.

### Werte

- `auto`
  - : Das Standardverhalten bei Scroll-Überlauf tritt wie gewohnt auf.
- `contain`
  - : Standardverhalten bei Scroll-Überlauf (z.B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, wo dieser Wert festgelegt ist. Es tritt jedoch keine Scroll-Verkettung bei benachbarten Scrollbereichen auf; die zugrunde liegenden Elemente werden nicht scrollen. Der `contain`-Wert deaktiviert die native Browser-Navigation, einschließlich der vertikalen "Pull-to-Refresh"-Geste und der horizontalen Wisch-Navigation.
- `none`
  - : Es tritt keine Scroll-Verkettung bei benachbarten Scrollbereichen auf, und das Standardverhalten bei Scroll-Überlauf wird verhindert.

## Beschreibung

Standardmäßig tendieren mobile Browser dazu, einen "Bounce"-Effekt oder sogar eine Seitenaktualisierung zu bieten, wenn das obere oder untere Ende einer Seite (oder eines anderen Scrollbereichs) erreicht wird. Sie haben möglicherweise auch bemerkt, dass, wenn Sie einen Dialogkasten mit scrollbarem Inhalt am oberen Ende einer Seite haben, die ebenfalls scrollbaren Inhalt hat, sobald die {{Glossary("Scroll_boundary", "Scrollgrenze")}} des Dialogkastens erreicht wird, die zugrunde liegende Seite anfangen wird zu scrollen — dies wird als {{Glossary("Scroll_chaining", "Scroll-Verkettung")}} bezeichnet.

In einigen Fällen sind diese Verhaltensweisen nicht wünschenswert. Sie können `overscroll-behavior` verwenden, um unerwünschte Scroll-Verkettung und das "Pull-to-refresh"-ähnliche Verhalten des Browsers loszuwerden.

Beachten Sie, dass diese Eigenschaft nur auf {{Glossary("Scroll_container", "Scrollcontainer")}} angewendet wird. Insbesondere, da ein [`<iframe>`](/de/docs/Web/HTML/Element/iframe) kein Scrollcontainer ist, hat das Setzen dieser Eigenschaft bei einem iframe keine Wirkung. Um die Scroll-Verkettung von einem iframe aus zu steuern, setzen Sie `overscroll-behavior` sowohl auf den [`<html>`](/de/docs/Web/HTML/Element/html)- als auch den [`<body>`](/de/docs/Web/HTML/Element/body)-Elementen des Dokuments des iframes.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein zugrunde liegendes Element scrollt

In unserem [overscroll-behavior-Beispiel](https://mdn.github.io/css-examples/overscroll-behavior/) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/css-examples/tree/main/overscroll-behavior) an) präsentieren wir eine ganzseitige Liste von gefälschten Kontakten und ein Dialogfeld mit einem Chatfenster.

![Ein Popup-Chatfenster mit dem Titel 'Aktiver Chat', das ein Gespräch zwischen Chris und Bob zeigt. Hinter dem Chatfenster befindet sich eine Kontaktliste mit dem Titel 'overscroll-behavior demo'.](example.png)

Beide dieser Bereiche scrollen; normalerweise, wenn Sie das Chatfenster scrollen, bis Sie eine Scrollgrenze erreichen, würde das zugrunde liegende Kontaktfenster auch anfangen zu scrollen, was nicht wünschenswert ist. Dies kann mit `overscroll-behavior-y` (`overscroll-behavior` würde auch funktionieren) auf dem Chatfenster gestoppt werden, wie folgt:

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

Wir wollten auch die Standard-Überscrolleffekte loswerden, wenn die Kontakte nach oben oder unten gescrollt werden (z.B. aktualisiert Chrome auf Android die Seite, wenn Sie über die obere Grenze hinaus scrollen). Dies kann verhindert werden, indem `overscroll-behavior: none` auf das {{htmlelement("html")}}-Element gesetzt wird:

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

- [Take control of your scroll: customizing pull-to-refresh and overflow effects](https://developer.chrome.com/blog/overscroll-behavior) auf developer.chrome.com (2017)

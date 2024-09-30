---
title: overscroll-behavior
slug: Web/CSS/overscroll-behavior
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`overscroll-behavior`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was ein Browser tut, wenn er den Rand eines Scrollbereichs erreicht.

{{EmbedInteractiveExample("pages/css/overscroll-behavior.html")}}

## Bestandteile

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

Die `overscroll-behavior` Eigenschaft wird als ein oder zwei Schlüsselwörter angegeben, die aus der untenstehenden Werteliste ausgewählt werden.

Zwei Schlüsselwörter legen den `overscroll-behavior` Wert auf den `x`- und `y`-Achsen fest. Wenn nur ein Wert angegeben wird, wird für beide Achsen derselbe Wert angenommen.

### Werte

- `auto`
  - : Das Standardverhalten bei Scrollüberschuss tritt wie gewohnt auf.
- `contain`
  - : Das Standardverhalten bei Scrollüberschuss (z.B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, in dem dieser Wert gesetzt wird. Es tritt jedoch keine Scrollverkettung bei benachbarten Scrollbereichen auf; die zugrunde liegenden Elemente scrollen nicht. Der `contain` Wert deaktiviert die native Browsernavigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt keine Scrollverkettung zu benachbarten Scrollbereichen auf, und das Standardverhalten bei Scrollüberschuss wird verhindert.

## Beschreibung

Standardmäßig haben mobile Browser die Tendenz, einen "Bounce"-Effekt oder sogar eine Seitenaktualisierung bereitzustellen, wenn das obere oder untere Ende einer Seite (oder eines anderen Scrollbereichs) erreicht wird. Eventuell haben Sie auch bemerkt, dass, wenn Sie ein Dialogfeld mit scrollendem Inhalt am oberen Ende einer Seite haben, die ebenfalls scrollbaren Inhalt hat, sobald der Scrollgrenze des Dialogfelds erreicht wird, die zugrunde liegende Seite zu scrollen beginnt — dies wird als [Scrollverkettung](/de/docs/Glossary/Scroll_chaining) bezeichnet.

In einigen Fällen sind diese Verhaltensweisen nicht wünschenswert. Sie können `overscroll-behavior` verwenden, um unerwünschte Scrollverkettung und das vom Browser inspirierte "Pull-to-Refresh"-Verhalten zu beseitigen.

Beachten Sie, dass diese Eigenschaft nur auf [Scrollcontainer](/de/docs/Glossary/Scroll_container) angewendet wird. Insbesondere, da ein [`<iframe>`](/de/docs/Web/HTML/Element/iframe) kein Scrollcontainer ist, hat das Setzen dieser Eigenschaft auf ein `iframe` keine Auswirkung. Um die Scrollverkettung von einem `iframe` zu steuern, setzen Sie `overscroll-behavior` auf sowohl die [`<html>`](/de/docs/Web/HTML/Element/html) als auch die [`<body>`](/de/docs/Web/HTML/Element/body) Elemente des Dokuments des `iframe`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein zugrunde liegendes Element scrollt

In unserem [Beispiel für overscroll-behavior](https://mdn.github.io/css-examples/overscroll-behavior/) (siehe auch den [Quellcode](https://github.com/mdn/css-examples/tree/main/overscroll-behavior)) präsentieren wir eine ganzseitige Liste von fiktiven Kontakten und ein Dialogfeld mit einem Chatfenster.

![Ein Popup-Chatfenster mit dem Titel 'Aktiver Chat', das ein Gespräch zwischen Chris und Bob zeigt. Hinter dem Chatfenster befindet sich eine Kontaktliste mit dem Titel 'overscroll-behavior demo'.](example.png)

Beide dieser Bereiche scrollen; normalerweise, wenn Sie das Chatfenster scrollen, bis Sie eine Scrollgrenze erreichen, würde das zugrunde liegende Fenster der Kontakte ebenfalls zu scrollen beginnen, was nicht wünschenswert ist. Dies kann verhindert werden, indem `overscroll-behavior-y` (`overscroll-behavior` würde ebenfalls funktionieren) auf das Chatfenster angewendet wird, wie folgt:

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

Wir wollten ebenfalls die standardmäßigen Overscroll-Effekte loswerden, wenn die Kontakte nach oben oder unten gescrollt werden (z.B. aktualisiert Chrome auf Android die Seite, wenn Sie das obere Ende scrollen). Dies kann verhindert werden, indem `overscroll-behavior: none` auf das {{htmlelement("html")}} Element gesetzt wird:

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

- [Übernehmen Sie die Kontrolle über Ihr Scrollen: Anpassen von Pull-to-Refresh und Überlaufeffekten](https://developer.chrome.com/blog/overscroll-behavior) auf developer.chrome.com (2017)

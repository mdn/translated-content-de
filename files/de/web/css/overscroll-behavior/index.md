---
title: overscroll-behavior
slug: Web/CSS/overscroll-behavior
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`overscroll-behavior`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was ein Browser tut, wenn der Rand eines Scrollbereichs erreicht wird.

{{EmbedInteractiveExample("pages/css/overscroll-behavior.html")}}

## Bestandteil-Eigenschaften

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

Die `overscroll-behavior` Eigenschaft wird als eines oder zwei Schlüsselwörter aus der Liste der unten stehenden Werte angegeben.

Zwei Schlüsselwörter geben den `overscroll-behavior` Wert auf den `x`- und `y`-Achsen an. Wenn nur ein Wert angegeben wird, wird davon ausgegangen, dass x und y denselben Wert haben.

### Werte

- `auto`
  - : Das Standard-Scroll-Überlaufverhalten tritt normal auf.
- `contain`
  - : Standard-Scroll-Überlaufverhalten (z. B. „Bounce“-Effekte) wird innerhalb des Elements beobachtet, bei dem dieser Wert festgelegt ist. Es kommt jedoch zu keiner Scroll-Verkettung in benachbarte Scrollbereiche; die zugrunde liegenden Elemente scrollen nicht. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wisch-Navigation.
- `none`
  - : Keine Scroll-Verkettung in benachbarte Scrollbereiche erfolgt, und das Standard-Scroll-Überlaufverhalten wird verhindert.

## Beschreibung

Standardmäßig neigen mobile Browser dazu, einen „Bounce“-Effekt oder sogar einen Seitenneuladen auszuführen, wenn das obere oder untere Ende einer Seite (oder eines anderen Scrollbereichs) erreicht wird. Ihnen ist vielleicht auch aufgefallen, dass, wenn Sie ein Dialogfeld mit scrollbarem Inhalt am oberen Rand einer Seite haben, die ebenfalls scrollbaren Inhalt hat, sobald die Scroll-Grenze des Dialogfelds erreicht ist, die darunter liegende Seite zu scrollen beginnt – dies wird als [Scroll-Verkettung](/de/docs/Glossary/Scroll_chaining) bezeichnet.

In einigen Fällen sind diese Verhaltensweisen nicht wünschenswert. Sie können `overscroll-behavior` verwenden, um unerwünschte Scroll-Verkettungen und das Facebook/Twitter-App-inspirierte „Pull to Refresh“-Verhalten des Browsers zu entfernen.

Beachten Sie, dass diese Eigenschaft nur auf [Scroll-Container](/de/docs/Glossary/Scroll_container) angewendet wird. Insbesondere, da ein [`<iframe>`](/de/docs/Web/HTML/Element/iframe) kein Scroll-Container ist, hat die Einstellung dieser Eigenschaft auf einem Iframe keine Wirkung. Um die Scroll-Verkettung bei einem Iframe zu kontrollieren, setzen Sie `overscroll-behavior` sowohl auf den [`<html>`](/de/docs/Web/HTML/Element/html) als auch auf den [`<body>`](/de/docs/Web/HTML/Element/body) Elementen des Dokuments des Iframe.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein darunter liegendes Element scrollt

In unserem [overscroll-behavior Beispiel](https://mdn.github.io/css-examples/overscroll-behavior/) (siehe auch den [Quellcode](https://github.com/mdn/css-examples/tree/main/overscroll-behavior)) präsentieren wir eine ganzseitige Liste von gefälschten Kontakten und ein Dialogfeld mit einem Chatfenster.

![Ein Popup-Chatfenster mit dem Titel 'Aktiver Chat', das ein Gespräch zwischen Chris und Bob zeigt. Hinter dem Chatfenster befindet sich eine Kontaktliste mit dem Titel 'overscroll-behavior demo'.](example.png)

Beide dieser Bereiche scrollen; normalerweise, wenn Sie das Chatfenster scrollen, bis Sie eine Scrollgrenze erreichen, würde das darunter liegende Kontakte-Fenster ebenfalls zu scrollen beginnen, was nicht wünschenswert ist. Dies kann gestoppt werden, indem `overscroll-behavior-y` (`overscroll-behavior` würde ebenfalls funktionieren) auf das Chatfenster angewendet wird, wie folgt:

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

Wir wollten auch die standardmäßigen Overscroll-Effekte beseitigen, wenn die Kontakte bis zum oberen oder unteren Rand gescrollt werden (z. B. Chrome auf Android aktualisiert die Seite, wenn Sie die obere Grenze überschreiten). Dies kann verhindert werden, indem `overscroll-behavior: none` auf das {{htmlelement("html")}} Element gesetzt wird:

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

- [Ihre Scrolls steuern: Pull-to-refresh und Überlaufeffekte anpassen](https://developer.chrome.com/blog/overscroll-behavior) auf developer.chrome.com (2017)

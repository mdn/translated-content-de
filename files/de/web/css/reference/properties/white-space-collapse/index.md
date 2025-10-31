---
title: white-space-collapse
slug: Web/CSS/Reference/Properties/white-space-collapse
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`white-space-collapse`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, wie {{Glossary("whitespace", "Leerraum")}} innerhalb eines Elements zusammengefasst wird.

> [!NOTE]
> Die `white-space-collapse` und {{CSSxRef("text-wrap-mode")}} Eigenschaften können zusammen mit der {{CSSxRef("white-space")}} Kurzschreibweise deklariert werden.

## Syntax

```css
/* Keyword values */
white-space-collapse: collapse;
white-space-collapse: preserve;
white-space-collapse: preserve-breaks;
white-space-collapse: preserve-spaces;
white-space-collapse: break-spaces;

/* Global values */
white-space-collapse: inherit;
white-space-collapse: initial;
white-space-collapse: revert;
white-space-collapse: revert-layer;
white-space-collapse: unset;
```

Die `white-space-collapse` Eigenschaft wird als ein einzelnes Schlüsselwort festgelegt, das aus der Liste der unten aufgeführten Werte gewählt wird.

### Werte

- `collapse`
  - : Leerraumsequenzen werden [zusammengefasst](/de/docs/Web/CSS/CSS_text/Whitespace#collapsing_and_transformation).
- `preserve`
  - : Leerraumsequenzen und Zeichenfolgenumbrüche werden beibehalten.
- `preserve-breaks`
  - : Leerraumsequenzen werden zusammengefasst, während Zeichenfolgenumbrüche erhalten bleiben.
- `preserve-spaces`
  - : Leerraumsequenzen werden beibehalten, während Tabs und Zeichenfolgenumbrüche in Leerzeichen umgewandelt werden.
- `break-spaces`
  - : Das Verhalten ist identisch mit `preserve`, außer dass:
    - Jede beibehaltene Leerraumsequenz nimmt immer Platz ein, auch am Ende der Zeile.
    - Nach jedem beibehaltenen Leerzeichen-Zeichen besteht eine Zeilenumbruchmöglichkeit, auch zwischen Leerzeichen-Zeichen.
    - Beibehaltene Leerzeichen nehmen Platz ein und hängen nicht, wodurch sich die intrinsischen Größen des Boxenlayouts ({{cssxref("min-content")}} Größe und {{cssxref("max-content")}} Größe) ändern.

> [!NOTE]
> _Zeichenfolgenumbrüche_ sind Zeichen wie Zeilenumbrüche, die den Text auf neue Zeilen brechen lassen.

> [!NOTE]
> Das [CSS text](/de/docs/Web/CSS/CSS_text) Modul definiert einen `discard` Wert für die `white-space-collapse` Eigenschaft, um alle Leerzeichen im Element zu verwerfen, jedoch wird dies in keinem Browser unterstützt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### HTML

<!-- prettier-ignore-start -->
```html
<h2 class="collapse">Default behavior;
  all   whitespace   is   collapsed
  in    the          heading       .</h2>

<h2 class="preserve">In this case
  all   whitespace   is   preserved
  in    the          heading       .</h2>

<h2 class="preserve-breaks">In this case only
  the   line breaks  are  preserved
  in    the          heading       .</h2>

<h2 class="preserve-spaces">In this case only
  the   spaces       are  preserved
  in    the          heading       .</h2>
```
<!-- prettier-ignore-end -->

### CSS

```css
.collapse {
  white-space-collapse: collapse;
}

.preserve {
  white-space-collapse: preserve;
}

.preserve-breaks {
  white-space-collapse: preserve-breaks;
}

.preserve-spaces {
  white-space-collapse: preserve-spaces;
}

h2 {
  font-size: 1.6rem;
  font-family: monospace;
  border-bottom: 1px dotted #cccccc;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Kurzschreibweise für `white-space-collapse` und {{CSSxRef("text-wrap-mode")}}: Die {{CSSxRef("white-space")}} Eigenschaft.
- [CSS text Modul](/de/docs/Web/CSS/CSS_text)
- [Umgang mit Leerraum in CSS](/de/docs/Web/CSS/CSS_text/Whitespace)

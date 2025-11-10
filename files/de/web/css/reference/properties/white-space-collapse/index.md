---
title: white-space-collapse
slug: Web/CSS/Reference/Properties/white-space-collapse
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`white-space-collapse`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, wie {{Glossary("whitespace", "Leerraum")}} innerhalb eines Elements zusammengefasst wird.

> [!NOTE]
> Die Eigenschaften `white-space-collapse` und {{CSSxRef("text-wrap-mode")}} können gemeinsam mit der Abkürzungs-Eigenschaft {{CSSxRef("white-space")}} deklariert werden.

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

Die Eigenschaft `white-space-collapse` wird als ein einzelnes Schlüsselwort aus der unten stehenden Werteliste angegeben.

### Werte

- `collapse`
  - : Leerraumsequenzen werden [zusammengefasst](/de/docs/Web/CSS/Guides/Text/Whitespace#collapsing_and_transformation).
- `preserve`
  - : Leerraumsequenzen und Segmenttrennzeichen werden beibehalten.
- `preserve-breaks`
  - : Leerraumsequenzen werden zusammengefasst, während Segmenttrennzeichen beibehalten werden.
- `preserve-spaces`
  - : Leerraumsequenzen werden beibehalten, während Tabs und Segmenttrennzeichen in Leerzeichen umgewandelt werden.
- `break-spaces`
  - : Das Verhalten ist identisch mit `preserve`, außer dass:
    - Jede beibehaltene Leerraumsequenz immer Platz einnimmt, auch am Ende der Zeile.
    - Eine Möglichkeit zum Zeilenumbruch nach jedem beibehaltenen Leerzeichen besteht, auch zwischen Leerraumzeichen.
    - Beibehaltene Leerzeichen nehmen Platz ein und hängen nicht, wodurch die intrinsischen Größen des Kastens ({{cssxref("min-content")}} Größe und {{cssxref("max-content")}} Größe) beeinflusst werden.

> [!NOTE] > _Segmenttrennzeichen_ sind Zeichen wie Zeilenumbrüche, die den Text auf neue Zeilen brechen lassen.

> [!NOTE]
> Das [CSS Text](/de/docs/Web/CSS/Guides/Text) Modul definiert einen `discard` Wert für die `white-space-collapse` Eigenschaft, um alle Leerzeichen im Element zu verwerfen, jedoch wird dies in keinem Browser unterstützt.

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

- Abkürzung für `white-space-collapse` und {{CSSxRef("text-wrap-mode")}}: Die Eigenschaft {{CSSxRef("white-space")}}.
- [CSS Text Modul](/de/docs/Web/CSS/Guides/Text)
- [Umgang mit Leerraum in CSS](/de/docs/Web/CSS/Guides/Text/Whitespace)

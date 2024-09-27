---
title: ":blank"
slug: Web/CSS/:blank
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{SeeCompatTable}}

> [!NOTE]
> Der `:blank`-Selektor wird als riskant betrachtet, da die CSSWG ihn ständig ändert.
>
> Siehe [CSSWG issue #1967](https://github.com/w3c/csswg-drafts/issues/1967).

Die **`:blank`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt leere Benutzereingabeelemente aus (z. B. {{HTMLElement("input")}} oder {{HTMLElement("textarea")}}).

## Syntax

```css
:blank {
  /* ... */
}
```

## Beispiele

### Einfaches :blank Beispiel

In zukünftigen unterstützenden Browsern wird die `:blank`-Pseudoklasse es Entwicklern ermöglichen, in irgendeiner Weise Eingabesteuerungen hervorzuheben, die nicht erforderlich sind, aber immer noch keinen Inhalt enthalten, möglicherweise als Erinnerung für Benutzer.

#### HTML

```html
<textarea></textarea>
```

#### CSS

```css
textarea:blank {
  border: 3px solid red;
}
```

#### Ergebnis

{{EmbedLiveSample('Simple_blank_example', '100%', 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":empty")}}

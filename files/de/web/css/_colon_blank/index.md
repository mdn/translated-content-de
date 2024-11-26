---
title: ":blank"
slug: Web/CSS/:blank
l10n:
  sourceCommit: d278eda568df670011d4e89c1f30f57b66a8a850
---

{{CSSRef}}{{SeeCompatTable}}

> [!NOTE]
> Der `:blank`-Selektor gilt als risikoreich, da die CSSWG ihn ständig ändert.
>
> Siehe [CSSWG Issue #1967](https://github.com/w3c/csswg-drafts/issues/1967).

Die **`:blank`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt leere Benutzereingabeelemente aus (z. B. {{HTMLElement("input")}} oder {{HTMLElement("textarea")}}).

## Syntax

```css
:blank {
  /* ... */
}
```

## Beispiele

### Grundlegendes :blank-Beispiel

In zukünftig unterstützenden Browsern wird die `:blank`-Pseudoklasse es Entwicklern ermöglichen, Eingabesteuerungen, die nicht erforderlich sind, aber dennoch keinen Inhalt haben, auf irgendeine Weise hervorzuheben, möglicherweise als Erinnerung für die Benutzer.

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

{{EmbedLiveSample('Basic_blank_example', '100%', 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit hat kein Browser diese Funktion implementiert.

## Siehe auch

- {{CSSxRef(":empty")}}

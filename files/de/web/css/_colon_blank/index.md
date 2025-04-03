---
title: :blank
slug: Web/CSS/:blank
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}{{SeeCompatTable}}

> [!NOTE]
> Der `:blank` Selektor wird als riskant angesehen, da das CSSWG ihn ständig ändert.
>
> Siehe [CSSWG issue #1967](https://github.com/w3c/csswg-drafts/issues/1967).

Die **`:blank`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt leere Benutzer-Eingabeelemente aus (z.B. {{HTMLElement("input")}} oder {{HTMLElement("textarea")}}).

## Syntax

```css
:blank {
  /* ... */
}
```

## Beispiele

### Grundlegendes :blank Beispiel

In zukünftig unterstützenden Browsern ermöglicht die `:blank` Pseudoklasse Entwicklern, Eingabesteuerungen hervorzuheben, die nicht erforderlich sind, aber immer noch keinen Inhalt enthalten, vielleicht als Erinnerung für Benutzer.

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

Derzeit haben keine Browser dieses Feature implementiert.

## Siehe auch

- {{CSSxRef(":empty")}}

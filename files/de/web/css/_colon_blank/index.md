---
title: :blank
slug: Web/CSS/:blank
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

{{SeeCompatTable}}

> [!NOTE]
> Der `:blank` Selektor gilt als riskant, da das CSSWG ihn ständig ändert.
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

In letztendlich unterstützten Browsern ermöglicht die `:blank` Pseudoklasse Entwicklern, Steuerelemente für Eingaben hervorzuheben, die nicht erforderlich sind, aber noch keinen Inhalt enthalten, möglicherweise als Erinnerung für die Benutzer.

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

Derzeit unterstützen keine Browser dieses Feature.

## Siehe auch

- {{CSSxRef(":empty")}}
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul

---
title: :blank
slug: Web/CSS/Reference/Selectors/:blank
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

> [!NOTE]
> Der `:blank`-Selektor gilt als gefährdet, da das CSSWG ihn ständig ändert.
>
> Siehe [CSSWG issue #1967](https://github.com/w3c/csswg-drafts/issues/1967).

Die **`:blank`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt leere Benutzereingabeelemente aus (z.B. {{HTMLElement("input")}} oder {{HTMLElement("textarea")}}).

## Syntax

```css
:blank {
  /* ... */
}
```

## Beispiele

### Einfaches Beispiel für :blank

In letztendlich unterstützten Browsern ermöglicht die `:blank`-Pseudoklasse Entwicklern, Eingabesteuerelemente, die nicht erforderlich sind, aber dennoch keinen Inhalt haben, möglicherweise als Erinnerung an die Benutzer hervorzuheben.

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

Derzeit unterstützen keine Browser diese Funktion.

## Siehe auch

- {{CSSxRef(":empty")}}
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul

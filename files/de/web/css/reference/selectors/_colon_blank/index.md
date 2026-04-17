---
title: "`:blank` CSS-Pseudoklasse"
short-title: :blank
slug: Web/CSS/Reference/Selectors/:blank
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{SeeCompatTable}}

> [!NOTE]
> Der `:blank` Selektor wird als risikobehaftet betrachtet, da das CSSWG ihn ständig ändert.
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

### Einfaches :blank-Beispiel

In zukünftig unterstützten Browsern ermöglicht die `:blank` Pseudoklasse Entwicklern, Eingabekontrollen hervorzuheben, die nicht erforderlich sind, aber noch keinen Inhalt enthalten. Dies könnte als Erinnerung für Benutzer dienen.

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

Derzeit unterstützt kein Browser dieses Feature.

## Siehe auch

- {{CSSxRef(":empty")}}
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul

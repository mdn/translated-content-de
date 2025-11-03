---
title: :blank
slug: Web/CSS/Reference/Selectors/:blank
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{SeeCompatTable}}

> [!NOTE]
> Der `:blank`-Selektor wird als riskant angesehen, da das CSSWG ihn ständig ändert.
>
> Siehe [CSSWG issue #1967](https://github.com/w3c/csswg-drafts/issues/1967).

Die **`:blank`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt leere Benutzer-Eingabelemente aus (z. B. {{HTMLElement("input")}} oder {{HTMLElement("textarea")}}).

## Syntax

```css
:blank {
  /* ... */
}
```

## Beispiele

### Einfaches :blank-Beispiel

In zukünftig unterstützenden Browsern wird die `:blank`-Pseudoklasse Entwicklern ermöglichen, Eingabefelder auf irgendeine Weise hervorzuheben, die nicht erforderlich sind, aber noch keinen Inhalt enthalten, möglicherweise als Erinnerung für Nutzer.

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
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul

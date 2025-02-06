---
title: :blank
slug: Web/CSS/:blank
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{SeeCompatTable}}

> [!NOTE]
> Der `:blank`-Selektor wird als gefährdet angesehen, da das CSSWG ihn ständig verändert.
>
> Siehe [CSSWG Issue #1967](https://github.com/w3c/csswg-drafts/issues/1967).

Die **`:blank`**-[[CSS](/de/docs/Web/CSS)]-[[Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes)] wählt leere Benutzereingabe-Elemente aus (z. B. {{HTMLElement("input")}} oder {{HTMLElement("textarea")}}).

## Syntax

```css
:blank {
  /* ... */
}
```

## Beispiele

### Grundlegendes Beispiel für :blank

In zukünftigen unterstützenden Browsern wird die `:blank`-Pseudo-Klasse Entwicklern ermöglichen, Eingabesteuerelemente, die nicht erforderlich, aber noch kein ausgefülltes Inhalt haben, auf irgendeine Weise hervorzuheben, möglicherweise als Erinnerung für Benutzer.

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

Derzeit hat kein Browser dieses Feature implementiert.

## Siehe auch

- {{CSSxRef(":empty")}}

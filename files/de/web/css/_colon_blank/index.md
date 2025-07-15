---
title: :blank
slug: Web/CSS/:blank
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

> [!NOTE]
> Der `:blank`-Selektor wird als riskant betrachtet, da die CSSWG ihn ständig ändert.
>
> Siehe [CSSWG problem #1967](https://github.com/w3c/csswg-drafts/issues/1967).

Die **`:blank`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) selektiert leere Benutzereingabeelemente (z.B. {{HTMLElement("input")}} oder {{HTMLElement("textarea")}}).

## Syntax

```css
:blank {
  /* ... */
}
```

## Beispiele

### Einfaches :blank-Beispiel

In zukünftig unterstützenden Browsern wird die `:blank`-Pseudoklasse es Entwicklern ermöglichen, Eingabesteuerungen auf irgendeine Weise hervorzuheben, die nicht erforderlich sind, aber dennoch keinen Inhalt enthalten, vielleicht als Erinnerung an die Benutzer.

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

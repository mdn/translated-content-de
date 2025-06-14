---
title: "HTML-Attribut: content"
short-title: content
slug: Web/HTML/Reference/Attributes/content
l10n:
  sourceCommit: 0b8f00bb9ece33c6964eea886b2f7db8711d7b62
---

{{HTMLSidebar}}

Das **`content`**-Attribut gibt den Wert eines durch das `<meta>`-[`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut definierten Metadaten-Namens an. Es nimmt eine Zeichenkette als Wert und die erwartete Syntax variiert je nach verwendetem `name`-Wert.

## Wert

Die Arten von Werten, die ein `content`-Attribut akzeptiert, hängen vom `name`-Wert ab. Für Details zu spezifischen Formaten und Typen siehe die Seite zum [`<meta>`-`name`-Attribut](/de/docs/Web/HTML/Reference/Elements/meta/name).

## Beispiele

### Festlegen einer Meta-Beschreibung für ein Dokument

Das folgende `<meta>`-Tag verwendet `name=description`, um eine "Meta-Beschreibung" für ein Dokument festzulegen. Das `content`-Attribut liefert den Wert für die Metadaten:

```html
<meta
  name="description"
  content="The HTML reference describes all elements and attributes of HTML, including global attributes that apply to all elements." />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- `<meta>`-[`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut

---
title: "HTML-Attribut: content"
short-title: content
slug: Web/HTML/Reference/Attributes/content
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`content`**-Attribut gibt den Wert eines Metadaten-Namens an, der durch das `<meta>`-Attribut [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name) definiert ist.
Es nimmt einen String als Wert, und die erwartete Syntax variiert je nach verwendetem `name`-Wert.

## Wert

Die Art der Werte, die ein `content`-Attribut akzeptiert, hängt vom `name`-Wert ab.
Für Details zu spezifischen Formaten und Typen siehe die Seite über das [`<meta>` `name`-Attribut](/de/docs/Web/HTML/Reference/Elements/meta/name).

## Beispiele

### Festlegen einer Meta-Beschreibung für ein Dokument

Das folgende `<meta>`-Tag verwendet `name=description`, um eine "Meta-Beschreibung" für ein Dokument festzulegen.
Das `content`-Attribut liefert den Wert für die Metadaten:

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

- `<meta>` [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name) Attribut

---
title: "`content` HTML-Attribut"
short-title: content
slug: Web/HTML/Reference/Attributes/content
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das **`content`**-Attribut gibt den Wert eines durch das `<meta>`-Element definierten Metadatanamens an, der durch das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut festgelegt wird. Es nimmt einen String als Wert an, und die erwartete Syntax variiert je nach verwendetem `name`-Wert.

## Wert

Die Art der Werte, die ein `content`-Attribut akzeptiert, hängt vom `name`-Wert ab. Für Details zu spezifischen Formaten und Typen siehe die Seite des [`<meta>` `name`-Attributs](/de/docs/Web/HTML/Reference/Elements/meta/name).

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

- `<meta>` [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name) Attribut

---
title: "HTML-Attribut: content"
short-title: content
slug: Web/HTML/Reference/Attributes/content
l10n:
  sourceCommit: d9b6cad3b5e14b42061608fb5283e32c75808a3d
---

{{HTMLSidebar}}

Das **`content`**-Attribut gibt den Wert eines Metadatennamens an, der durch das [`<meta> name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut definiert ist. Es nimmt eine Zeichenkette als Wert an, und die erwartete Syntax variiert je nach verwendetem `name`-Wert.

## Wert

Die Art der Werte, die ein `content`-Attribut akzeptiert, hängt vom `name`-Wert ab. Für Details zu spezifischen Formaten und Typen siehe die Seite [`<meta>` Namensattribut](/de/docs/Web/HTML/Reference/Elements/meta/name).

## Beispiele

### Festlegen einer Dokument-Metabeschreibung

Das folgende `<meta>`-Tag verwendet `name=description`, um eine "Metabeschreibung" für ein Dokument festzulegen. Das `content`-Attribut liefert den Wert für die Metadaten:

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

- [`<meta> name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut

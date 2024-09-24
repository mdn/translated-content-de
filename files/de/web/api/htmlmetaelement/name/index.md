---
title: "HTMLMetaElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLMetaElement/name
l10n:
  sourceCommit: 83c8b8d54ac8fa2459b5a31011e68c0485084991
---

{{APIRef("HTML DOM")}}

Die **`HTMLMetaElement.name`**-Eigenschaft wird in Kombination mit {{domxref("HTMLMetaElement.content")}} verwendet, um die Name-Wert-Paare für die Metadaten eines Dokuments zu definieren. Das `name`-Attribut definiert den Metadatennamen und das `content`-Attribut definiert den Wert.

## Wert

Ein String.

## Beispiele

### Lesen des Metadatennamens eines Meta-Elements

Das folgende Beispiel fragt das erste `<meta>`-Element in einem Dokument ab. Der `name`-Wert wird in die Konsole protokolliert und zeigt, dass [keywords](/de/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification) für das Dokument angegeben wurden:

```js
// gegeben <meta name="keywords" content="documentation, HTML, web technologies">
const meta = document.querySelector("meta");
console.log(meta.name);
// "keywords"
```

### Erstellen eines Meta-Elements mit `author`-Metadaten

Das folgende Beispiel erstellt ein neues `<meta>`-Element mit einem auf [`author`](/de/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification) gesetzten `name`-Attribut. Das `content`-Attribut setzt den Autor des Dokuments und das Element wird dem Dokument-`<head>` hinzugefügt:

```js
let meta = document.createElement("meta");
meta.name = "author";
meta.content = "Franz Kafka";
document.head.appendChild(meta);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("meta")}}
- [Mögliche Werte für das Name-Attribut](/de/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification)

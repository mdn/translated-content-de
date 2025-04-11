---
title: "HTMLMetaElement: Eigenschaft `name`"
short-title: name
slug: Web/API/HTMLMetaElement/name
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`HTMLMetaElement.name`**-Eigenschaft wird in Kombination mit [`HTMLMetaElement.content`](/de/docs/Web/API/HTMLMetaElement/content) verwendet, um die Namens-Wert-Paare für die Metadaten eines Dokuments zu definieren. Das `name`-Attribut definiert den Metadaten-Namen und das `content`-Attribut definiert den Wert.

## Wert

Ein String.

## Beispiele

### Den Metadaten-Namen eines Meta-Elements auslesen

Das folgende Beispiel fragt das erste `<meta>`-Element in einem Dokument ab. Der `name`-Wert wird in die Konsole geloggt und zeigt, dass [keywords](/de/docs/Web/HTML/Reference/Elements/meta/name#standard_metadata_names_defined_in_the_html_specification) für das Dokument angegeben wurden:

```js
// given <meta name="keywords" content="documentation, HTML, web technologies">
const meta = document.querySelector("meta");
console.log(meta.name);
// "keywords"
```

### Erstellen eines Meta-Elements mit `author` Metadaten

Das folgende Beispiel erstellt ein neues `<meta>`-Element mit einem `name`-Attribut, das auf [`author`](/de/docs/Web/HTML/Reference/Elements/meta/name#standard_metadata_names_defined_in_the_html_specification) gesetzt ist. Das `content`-Attribut legt den Autor des Dokuments fest und das Element wird dem Dokument `<head>` hinzugefügt:

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
- [Mögliche Werte für das name-Attribut](/de/docs/Web/HTML/Reference/Elements/meta/name#standard_metadata_names_defined_in_the_html_specification)

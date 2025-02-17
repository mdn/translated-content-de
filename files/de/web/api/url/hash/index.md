---
title: "URL: hash-Eigenschaft"
short-title: hash
slug: Web/API/URL/hash
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ APIRef("URL API") }} {{AvailableInWorkers}}

Die **`hash`**-Eigenschaft der [`URL`](/de/docs/Web/API/URL)-Schnittstelle ist ein String, der ein `"#"` gefolgt vom Fragment-Bezeichner der URL enthält. Wenn die URL keinen Fragment-Bezeichner hat, enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann gesetzt werden, um den Fragment-Bezeichner der URL zu ändern. Wenn sie gesetzt wird, wird ein einzelnes `"#"`-Präfix zum angegebenen Wert hinzugefügt, falls es nicht bereits vorhanden ist. Wenn sie auf `""` gesetzt wird, wird der Fragment-Bezeichner entfernt.

Das Fragment wird beim Setzen {{Glossary("Percent-encoding", "prozentcodiert")}}, jedoch beim Lesen nicht prozentde-codiert.

## Wert

Ein String.

## Beispiele

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/href#examples",
);
console.log(url.hash); // '#examples'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`URL`](/de/docs/Web/API/URL)-Schnittstelle, zu der sie gehört.

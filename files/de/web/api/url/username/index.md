---
title: "URL: username-Eigenschaft"
short-title: username
slug: Web/API/URL/username
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`username`**-Eigenschaft der [`URL`](/de/docs/Web/API/URL)-Schnittstelle ist ein String, der die Benutzername-Komponente der URL enthält. Wenn die URL keinen Benutzernamen hat, enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann gesetzt werden, um den Benutzernamen der URL zu ändern. Hat die URL keinen [`host`](/de/docs/Web/API/URL/host) oder ihr Schema ist `file:`, dann hat das Setzen dieser Eigenschaft keine Auswirkung.

Der Benutzername wird beim Setzen {{Glossary("Percent-encoding", "prozentcodiert")}}, jedoch beim Auslesen nicht prozentdecodiert.

## Wert

Ein String.

## Beispiele

```js
const url = new URL(
  "https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/username",
);
console.log(url.username); // Logs "anonymous"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`URL`](/de/docs/Web/API/URL)-Schnittstelle, zu der sie gehört.

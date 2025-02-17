---
title: "URL: password-Eigenschaft"
short-title: password
slug: Web/API/URL/password
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`password`**-Eigenschaft des [`URL`](/de/docs/Web/API/URL)-Interfaces ist ein String, der die Passwortkomponente der URL enthält. Wenn die URL kein Passwort besitzt, enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann gesetzt werden, um das Passwort der URL zu ändern. Wenn die URL keinen [`host`](/de/docs/Web/API/URL/host) hat oder ihr Schema `file:` ist, hat das Setzen dieser Eigenschaft keine Wirkung.

Das Passwort wird beim Setzen {{Glossary("Percent-encoding", "percent-codiert")}}, aber beim Lesen nicht percent-decodiert.

## Wert

Ein String.

## Beispiele

```js
const url = new URL(
  "https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/password",
);
console.log(url.password); // Logs "flabada"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`URL`](/de/docs/Web/API/URL)-Interface, zu dem es gehört.

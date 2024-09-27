---
title: "URLPattern: username-Eigenschaft"
short-title: username
slug: Web/API/URLPattern/username
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`username`**-Eigenschaft der [`URLPattern`](/de/docs/Web/API/URLPattern)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die ein Musterzeichen enthält, das verwendet wird, um den Benutzername-Teil einer URL zu matchen. Dieser Wert kann sich aufgrund von Normalisierung von der Eingabe des Konstruktors unterscheiden.

## Wert

Ein String.

## Beispiele

Im folgenden Beispiel wird ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `admin` für den `username`-Teil erstellt. Dieses Muster matcht nur, wenn der Benutzername-Teil der URL `admin` ist.

```js
const pattern = new URLPattern({ username: "admin" });
console.log(pattern.username); // 'admin'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

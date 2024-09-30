---
title: "URLPattern: username-Eigenschaft"
short-title: username
slug: Web/API/URLPattern/username
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die schreibgeschützte **`username`**-Eigenschaft der [`URLPattern`](/de/docs/Web/API/URLPattern)-Schnittstelle ist ein String, der das Muster enthält, das verwendet wird, um den Benutzernamen-Teil einer URL zu matchen. Dieser Wert kann aufgrund von Normalisierung von der Eingabe des Konstruktors abweichen.

## Wert

Ein String.

## Beispiele

Das untenstehende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `admin` für den `username`-Teil. Dieses Muster matcht nur, wenn der Benutzername-Teil der URL `admin` ist.

```js
const pattern = new URLPattern({ username: "admin" });
console.log(pattern.username); // 'admin'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

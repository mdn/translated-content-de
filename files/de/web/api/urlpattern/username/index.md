---
title: "URLPattern: username-Eigenschaft"
short-title: username
slug: Web/API/URLPattern/username
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die **`username`** schreibgeschützte Eigenschaft des [`URLPattern`](/de/docs/Web/API/URLPattern)-Interfaces ist ein
String, der das Muster enthält, um den Benutzernamen-Teil einer URL zu matchen. Dieser Wert kann sich aufgrund der Normalisierung vom Eingabewert des Konstruktors unterscheiden.

## Wert

Ein String.

## Beispiele

Das untenstehende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `admin` für
den `username`-Teil. Dieses Muster passt nur, wenn der Benutzernamen-Teil der URL
`admin` ist.

```js
const pattern = new URLPattern({ username: "admin" });
console.log(pattern.username); // 'admin'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

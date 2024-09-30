---
title: "URLPattern: password-Eigenschaft"
short-title: password
slug: Web/API/URLPattern/password
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`password`** der [`URLPattern`](/de/docs/Web/API/URLPattern)-Schnittstelle ist ein String, der das Muster enthält, das verwendet wird, um den Passwortteil einer URL zu erkennen. Dieser Wert kann sich aufgrund von Normalisierung von der Eingabe des Konstruktors unterscheiden.

## Wert

Ein String.

## Beispiele

Das untenstehende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `correct-horse-battery{-staple}?` für den `password`-Teil. Dieses Muster erkennt die Passwörter `correct-horse-battery` und `correct-horse-battery-staple`.

```js
const pattern = new URLPattern({ password: "correct-horse-battery{-staple}?" });
console.log(pattern.password); // 'correct-horse-battery{-staple}?'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

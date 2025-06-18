---
title: "URLPattern: password-Eigenschaft"
short-title: password
slug: Web/API/URLPattern/password
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die **`password`**-Schreibgeschützte Eigenschaft des [`URLPattern`](/de/docs/Web/API/URLPattern)-Interfaces ist ein String, der das Muster enthält, das verwendet wird, um den Passwortteil einer URL zu matchen. Dieser Wert kann sich aufgrund der Normalisierung von der Eingabe des Konstruktors unterscheiden.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `correct-horse-battery{-staple}?` für den `password`-Teil. Dieses Muster passt auf die Passwörter `correct-horse-battery` und `correct-horse-battery-staple`.

```js
const pattern = new URLPattern({ password: "correct-horse-battery{-staple}?" });
console.log(pattern.password); // 'correct-horse-battery{-staple}?'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

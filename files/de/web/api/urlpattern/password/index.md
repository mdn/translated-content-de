---
title: "URLPattern: password-Eigenschaft"
short-title: password
slug: Web/API/URLPattern/password
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`password`**-Eigenschaft des nur lesbaren [`URLPattern`](/de/docs/Web/API/URLPattern)-Interfaces ist ein
String, der das Muster enthält, das verwendet wird, um den Passwortteil einer URL zu matchen. Dieser Wert kann aufgrund der Normalisierung von der Eingabe im Konstruktor abweichen.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit
`correct-horse-battery{-staple}?` für den `password`-Teil. Dieses Muster stimmt mit den Passwörtern `correct-horse-battery` und `correct-horse-battery-staple` überein.

```js
const pattern = new URLPattern({ password: "correct-horse-battery{-staple}?" });
console.log(pattern.password); // 'correct-horse-battery{-staple}?'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

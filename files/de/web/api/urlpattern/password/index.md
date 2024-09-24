---
title: "URLPattern: password-Eigenschaft"
short-title: password
slug: Web/API/URLPattern/password
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`password`**-Eigenschaft des schreibgeschützten {{domxref("URLPattern")}}-Interfaces ist ein String, der das Muster enthält, das verwendet wird, um den Passwort-Teil einer URL abzugleichen. Dieser Wert kann sich aufgrund von Normalisierung vom Eingabewert des Konstruktors unterscheiden.

## Wert

Ein String.

## Beispiele

Im folgenden Beispiel wird ein {{domxref("URLPattern")}}-Objekt mit `correct-horse-battery{-staple}?` für den `password`-Teil erstellt. Dieses Muster stimmt mit den Passwörtern `correct-horse-battery` und `correct-horse-battery-staple` überein.

```js
const pattern = new URLPattern({ password: "correct-horse-battery{-staple}?" });
console.log(pattern.password); // 'correct-horse-battery{-staple}?'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

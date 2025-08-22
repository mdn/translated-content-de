---
title: "URLPattern: password-Eigenschaft"
short-title: password
slug: Web/API/URLPattern/password
l10n:
  sourceCommit: 4535090888f24ac8394e177c27260d16a53631e6
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`password`** der [`URLPattern`](/de/docs/Web/API/URLPattern)-Schnittstelle ist ein String, der das [Muster](/de/docs/Web/API/URL_Pattern_API#pattern_syntax) enthält, das verwendet wird, um den Passwortteil einer URL zu matchen.

Dies ist der [normierte Wert](/de/docs/Web/API/URL_Pattern_API#pattern_normalization) des Passwortmusters, das an den [Konstruktor](/de/docs/Web/API/URLPattern/URLPattern) übergeben wurde, oder der Standardwert (`"*"`), der jedes Passwort matcht.

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `correct-horse-battery{-staple}?` für den `password`-Teil und gibt die Eigenschaft aus.
Dieses Muster matcht die Passwörter `correct-horse-battery` und `correct-horse-battery-staple`.

```js
const pattern = new URLPattern({ password: "correct-horse-battery{-staple}?" });
console.log(pattern.password); // 'correct-horse-battery{-staple}?'
console.log(pattern.test("https://user:correct-horse-battery@example.com")); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

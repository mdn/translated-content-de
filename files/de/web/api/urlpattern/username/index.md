---
title: "URLPattern: username-Eigenschaft"
short-title: username
slug: Web/API/URLPattern/username
l10n:
  sourceCommit: 4535090888f24ac8394e177c27260d16a53631e6
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

Die **`username`** schreibgeschützte Eigenschaft der [`URLPattern`](/de/docs/Web/API/URLPattern)-Schnittstelle ist ein String, der das [Muster](/de/docs/Web/API/URL_Pattern_API#pattern_syntax) enthält, welches zum Abgleichen des Benutzerteil eines URL verwendet wird.

Dies ist der [normalisierte Wert](/de/docs/Web/API/URL_Pattern_API#pattern_normalization) des an den [Konstruktor](/de/docs/Web/API/URLPattern/URLPattern) übergebenen Benutzernamen-Musters, oder der Standardwert (`"*"`), der mit jedem Benutzernamen übereinstimmt.

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel erstellt ein [`URLPattern`](/de/docs/Web/API/URLPattern)-Objekt mit `admin` für den `username`-Teil und protokolliert die Eigenschaft.
Dieses Muster stimmt nur überein, wenn der Benutzername-Teil der URL `admin` ist.

```js
const pattern = new URLPattern({ username: "admin" });
console.log(pattern.username); // "admin"
console.log(pattern.test("http://admin:password@example.com/")); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

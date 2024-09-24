---
title: "URLPattern: username-Eigenschaft"
short-title: username
slug: Web/API/URLPattern/username
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die schreibgeschützte **`username`**-Eigenschaft der {{domxref("URLPattern")}}-Schnittstelle ist ein
String, der das Muster enthält, das verwendet wird, um den Benutzernamen-Teil
einer URL abzugleichen. Dieser Wert kann sich aufgrund von Normalisierung vom Eingabewert des Konstruktors unterscheiden.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel erstellt ein {{domxref("URLPattern")}}-Objekt mit `admin` für
den `username`-Teil. Dieses Muster stimmt nur überein, wenn der Benutzername-Teil der URL
`admin` ist.

```js
const pattern = new URLPattern({ username: "admin" });
console.log(pattern.username); // 'admin'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

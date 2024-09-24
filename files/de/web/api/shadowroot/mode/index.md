---
title: "ShadowRoot: mode-Eigenschaft"
short-title: mode
slug: Web/API/ShadowRoot/mode
l10n:
  sourceCommit: 26091e4af9c73bb6c5d1466df5070c949498fdbd
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte **`mode`**-Eigenschaft des {{domxref("ShadowRoot")}} gibt den Modus an — entweder `open` oder `closed`. Dies legt fest, ob die internen Funktionen des Shadow-Roots von JavaScript aus zugänglich sind oder nicht.

Wenn der `mode` eines Shadow-Roots "`closed`" ist, sind die Implementierungsdetails des Shadow-Roots von JavaScript aus nicht zugänglich und unveränderlich, ähnlich wie die Implementierungsdetails des {{HTMLElement("video")}}-Elements von JavaScript aus nicht zugänglich und unveränderlich sind.

Der Eigenschaftswert wird über die `options.mode`-Eigenschaft des Objekts gesetzt, das an {{domxref("Element.attachShadow()")}} übergeben wird, oder durch das [`shadowrootmode`](/de/docs/Web/HTML/Element/template#shadowrootmode)-Attribut des [`<template>`](/de/docs/Web/HTML/Element/template)-Elements, wenn ein Shadow-Root deklarativ erstellt wird.

## Wert

Ein String-Wert, der einen der folgenden Werte haben kann:

- `open`
  - : Elemente des Shadow-Roots sind von JavaScript außerhalb des Roots zugänglich.
- `closed`
  - : Knoten innerhalb des geschlossenen Shadow-Baums können von JavaScript außerhalb des Roots nicht zugegriffen werden.

## Beispiele

```js
// Wir erstellen einen geschlossenen Shadow-Root, der nicht zugänglich ist
let element = document.createElement("div");
element.attachShadow({ mode: "closed" });
element.shadowRoot; // null, da der Shadow-Root geschlossen ist

// Wir erstellen einen offenen Shadow-Root, der zugänglich ist
let element2 = document.createElement("div");
element2.attachShadow({ mode: "open" });
console.log(`The shadow is ${element2.shadowRoot.mode}`); // logs "The shadow is open"
element2.shadowRoot.textContent("Opened shadow"); // Der Shadow ist offen, wir können von außen darauf zugreifen
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

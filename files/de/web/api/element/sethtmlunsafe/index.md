---
title: "Element: Methode setHTMLUnsafe()"
short-title: setHTMLUnsafe()
slug: Web/API/Element/setHTMLUnsafe
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die **`setHTMLUnsafe()`**-Methode der {{domxref("Element")}}-Schnittstelle wird verwendet, um einen HTML-String in ein {{domxref("DocumentFragment")}} zu parsen, das dann den Teilbaum des Elements im DOM ersetzt. Der eingegebene HTML-Code kann [declarative shadow roots](/de/docs/Web/HTML/Element/template#declarative_shadow_dom) enthalten.

Das Suffix "Unsafe" im Methodennamen weist darauf hin, dass die Methode potenziell unsichere Eingaben, die für XSS relevant sind, wie `<script>`-Elemente sowie Skript- oder Ereignis-Handler-Inhaltsattribute, nicht bereinigt oder entfernt.

Wenn der HTML-String mehr als eine [declarative shadow root](/de/docs/Web/HTML/Element/template#declarative_shadow_dom) in einem bestimmten Shadow-Host definiert, wird nur das erste {{domxref("ShadowRoot")}} erstellt — nachfolgende Deklarationen werden als `<template>`-Elemente innerhalb dieses Shadow-Roots geparst.

> [!NOTE]
> Diese Methode sollte anstelle von {{domxref("Element.innerHTML")}} verwendet werden, wenn ein HTML-String deklarative Shadow-Roots enthalten könnte.

## Syntax

```js-nolint
setHTMLUnsafe(html)
```

### Parameter

- `html`
  - : Ein String, der das zu parsende HTML definiert.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

Keine.

## Beispiele

Der folgende Code demonstriert, wie ein HTML-String geparst und in das `Element` mit der ID `target` eingefügt wird.

```js
const value = "<p>This is a string of text</p>"; // string of HTML

// Das Element mit der ID "target" abrufen und mit dem String setzen.
document.getElementById("target").setHTMLUnsafe(value);

// Ergebnis (als String): "<p>This is a string of text</p>"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ShadowRoot.setHTMLUnsafe()")}}
- {{domxref("Element.innerHTML")}}
- {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}

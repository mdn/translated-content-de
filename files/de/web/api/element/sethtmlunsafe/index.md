---
title: "Element: setHTMLUnsafe() Methode"
short-title: setHTMLUnsafe()
slug: Web/API/Element/setHTMLUnsafe
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die **`setHTMLUnsafe()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle wird verwendet, um einen HTML-String in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen, welches dann den Teilbaum des Elements im DOM ersetzt. Die Eingabe-HTML kann [declarative shadow roots](/de/docs/Web/HTML/Element/template#declarative_shadow_dom) enthalten.

Das Suffix "Unsafe" im Methodennamen weist darauf hin, dass die Methode keine potenziell unsicheren XSS-relevanten Eingaben, wie zum Beispiel `<script>` Elemente sowie Skript- oder Event-Handler-Inhaltsattribute, bereinigt oder entfernt.

Wenn der HTML-String mehr als eine [declarative shadow root](/de/docs/Web/HTML/Element/template#declarative_shadow_dom) in einem bestimmten Shadow-Host definiert, wird nur die erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt - nachfolgende Deklarationen werden als `<template>` Elemente innerhalb dieser Shadow-Root geparst.

> [!NOTE]
> Diese Methode sollte anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, wenn ein HTML-String deklarative Shadow-Roots enthalten kann.

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

Der folgende Code zeigt, wie ein HTML-String geparst und in das `Element` mit der ID `target` eingefügt wird.

```js
const value = "<p>This is a string of text</p>"; // string of HTML

// Get the Element with id "target" and set it with the string.
document.getElementById("target").setHTMLUnsafe(value);

// Result (as a string): "<p>This is a string of text</p>"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)

---
title: "ShadowRoot: setHTMLUnsafe() Methode"
short-title: setHTMLUnsafe()
slug: Web/API/ShadowRoot/setHTMLUnsafe
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Shadow DOM")}}

Die **`setHTMLUnsafe()`** Methode des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Interfaces wird verwendet, um einen HTML-String in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen, welches dann den Unterbaum des Elements im DOM ersetzt. Der Eingabe-HTML-String kann [deklarative Shadow Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) beinhalten.

Das Suffix "Unsafe" im Methodennamen weist darauf hin, dass die Methode die potenziell unsichere, XSS-relevante Eingabe, wie z.B. `<script>` Elemente und Skript- oder Event-Handler-Attributinhalte, nicht saniert oder entfernt.

Wenn der HTML-String mehr als einen [deklarativen Shadow Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow-Host definiert, wird nur der erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt — nachfolgende Deklarationen werden als `<template>` Elemente innerhalb dieses Shadow Roots geparst.

> [!NOTE]
> Diese Methode sollte anstelle von [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) verwendet werden, wenn ein HTML-String deklarative Shadow Roots enthalten kann.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML)
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)

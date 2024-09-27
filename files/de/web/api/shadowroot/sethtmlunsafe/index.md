---
title: "ShadowRoot: setHTMLUnsafe() Methode"
short-title: setHTMLUnsafe()
slug: Web/API/ShadowRoot/setHTMLUnsafe
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Shadow DOM")}}

Die **`setHTMLUnsafe()`**-Methode des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Interface wird verwendet, um einen HTML-String in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen, welches dann den Subtree des Elements im DOM ersetzt. Das eingegebene HTML kann [deklarative Shadow Roots](/de/docs/Web/HTML/Element/template#declarative_shadow_dom) enthalten.

Der Suffix "Unsafe" im Methodennamen weist darauf hin, dass die Methode keine potenziell unsicheren XSS-relevanten Eingaben, wie `<script>`-Elemente, sowie Script- oder Ereignishandler-Attributinhalte bereinigt oder entfernt.

Wenn der HTML-String mehr als einen [deklarativen Shadow Root](/de/docs/Web/HTML/Element/template#declarative_shadow_dom) in einem bestimmten Shadow-Host definiert, wird nur der erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt — nachfolgende Deklarationen werden als `<template>`-Elemente innerhalb dieses Shadow Roots geparst.

> [!NOTE]
> Diese Methode sollte anstelle von [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) verwendet werden, wenn ein HTML-String deklarative Shadow Roots enthalten könnte.

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

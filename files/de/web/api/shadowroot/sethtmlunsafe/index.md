---
title: "ShadowRoot: setHTMLUnsafe() Methode"
short-title: setHTMLUnsafe()
slug: Web/API/ShadowRoot/setHTMLUnsafe
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Shadow DOM")}}

Die **`setHTMLUnsafe()`** Methode der {{domxref("ShadowRoot")}} Schnittstelle wird verwendet, um einen HTML-String in ein {{domxref("DocumentFragment")}} zu parsen, welches dann den Unterbaum des Elements im DOM ersetzt. Das eingegebene HTML kann [deklarative Shadow Roots](/de/docs/Web/HTML/Element/template#declarative_shadow_dom) enthalten.

Der Suffix "Unsafe" im Methodennamen weist darauf hin, dass die Methode potenziell unsichere, XSS-relevante Eingaben, wie `<script>` Elemente und Skript- oder Ereignis-Handler-Attributinhalte, weder bereinigt noch entfernt.

Wenn der HTML-String mehr als einen [deklarativen Shadow Root](/de/docs/Web/HTML/Element/template#declarative_shadow_dom) in einem bestimmten Shadow Host definiert, wird nur das erste {{domxref("ShadowRoot")}} erstellt — nachfolgende Deklarationen werden als `<template>` Elemente innerhalb dieses Shadow Roots geparst.

> [!NOTE]
> Diese Methode sollte anstelle von {{domxref("ShadowRoot.innerHTML")}} verwendet werden, wenn ein HTML-String deklarative Shadow Roots enthalten könnte.

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

- {{domxref("Element.setHTMLUnsafe()")}}
- {{domxref("ShadowRoot.innerHTML")}}
- {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}

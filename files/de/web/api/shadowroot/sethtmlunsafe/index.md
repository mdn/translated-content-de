---
title: "ShadowRoot: setHTMLUnsafe()-Methode"
short-title: setHTMLUnsafe()
slug: Web/API/ShadowRoot/setHTMLUnsafe
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Shadow DOM")}}

Die **`setHTMLUnsafe()`**-Methode der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle wird verwendet, um einen HTML-String in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen, welches dann den Unterbaum des Elements im DOM ersetzt. Der Eingabe-HTML-String kann [deklarative Shadow Roots](/de/docs/Web/HTML/Element/template#declarative_shadow_dom) enthalten.

Das Suffix "Unsafe" im Methodennamen weist darauf hin, dass die Methode keine potenziell unsicheren, XSS-relevanten Eingaben, wie `<script>`-Elemente und Skript- oder Ereignis-Handler-Inhaltsattribute, säubert oder entfernt.

Wenn der HTML-String mehr als eine [deklarative Shadow Root](/de/docs/Web/HTML/Element/template#declarative_shadow_dom) in einem bestimmten Shadow Host definiert, wird nur die erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt - nachfolgende Deklarationen werden als `<template>`-Elemente innerhalb dieser Shadow Root geparst.

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

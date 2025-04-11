---
title: "Element: setHTMLUnsafe()-Methode"
short-title: setHTMLUnsafe()
slug: Web/API/Element/setHTMLUnsafe
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("DOM")}}

Die **`setHTMLUnsafe()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces wird verwendet, um einen HTML-String in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen, welches dann den Subtree des Elements im DOM ersetzt. Das Eingabe-HTML kann [deklarative Shadow-Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) enthalten.

Der Suffix "Unsafe" im Methodennamen zeigt an, dass die Methode keine potenziell unsicheren XSS-relevanten Eingaben, wie `<script>`-Elemente, Skript- oder Event-Handler-Inhaltsattribute, säubert oder entfernt.

Wenn der HTML-String mehr als eine [deklarative Shadow-Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow-Host definiert, wird nur die erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt – nachfolgende Deklarationen werden als `<template>`-Elemente innerhalb dieser Shadow-Root geparst.

> [!NOTE]
> Diese Methode sollte anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, wenn ein HTML-String deklarative Shadow-Roots enthalten könnte.

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

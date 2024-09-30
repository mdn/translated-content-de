---
title: "ScreenDetailed: isPrimary-Eigenschaft"
short-title: isPrimary
slug: Web/API/ScreenDetailed/isPrimary
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`isPrimary`** des [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Interfaces ist ein boolescher Wert, der angibt, ob der Bildschirm als primärer Bildschirm des Betriebssystems (OS) eingestellt ist oder nicht.

Das Betriebssystem, auf dem der Browser ausgeführt wird, hat einen primären Bildschirm und einen oder mehrere sekundäre Bildschirme. Der primäre Bildschirm kann normalerweise vom Benutzer über die Einstellungen des Betriebssystems festgelegt werden und enthält in der Regel OS-Benutzeroberfläche-Features wie die Taskleiste/das Symbol-Dock. Der primäre Bildschirm kann sich aus verschiedenen Gründen ändern, zum Beispiel wenn ein Bildschirm abgesteckt wird.

## Wert

Ein boolescher Wert — `true`, wenn der Bildschirm primär ist, und `false`, wenn er sekundär ist.

## Beispiele

```js
const screenDetails = await window.getScreenDetails();

// Is the first screen primary?
const screen1Primary = screenDetails.screens[0].isPrimary;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)

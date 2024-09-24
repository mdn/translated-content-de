---
title: "ScreenDetailed: isPrimary-Eigenschaft"
short-title: isPrimary
slug: Web/API/ScreenDetailed/isPrimary
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`isPrimary`**-Eigenschaft des {{domxref("ScreenDetailed")}}-Interfaces ist ein Boolean, der angibt, ob der Bildschirm als primärer Bildschirm des Betriebssystems (OS) festgelegt ist oder nicht.

Das Betriebssystem, auf dem der Browser läuft, wird einen primären Bildschirm und einen oder mehrere sekundäre Bildschirme haben. Der primäre Bildschirm kann normalerweise vom Benutzer über die Betriebssystemeinstellungen festgelegt werden und enthält in der Regel OS-UI-Funktionen wie die Taskleiste/Das Dock mit den Symbolen. Der primäre Bildschirm kann aus mehreren Gründen geändert werden, zum Beispiel wenn ein Bildschirm abgesteckt wird.

## Wert

Ein Boolescher Wert — `true`, wenn der Bildschirm primär ist, und `false`, wenn er sekundär ist.

## Beispiele

```js
const screenDetails = await window.getScreenDetails();

// Ist der erste Bildschirm primär?
const screen1Primary = screenDetails.screens[0].isPrimary;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)

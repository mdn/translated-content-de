---
title: "ClipboardChangeEvent: changeId-Eigenschaft"
short-title: changeId
slug: Web/API/ClipboardChangeEvent/changeId
l10n:
  sourceCommit: eb38a196911f92a7c99a1a2000fac1cd29d23db9
---

{{securecontext_header}}{{APIRef("Clipboard API")}}

Die schreibgeschützte **`changeId`**-Eigenschaft des [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent)-Interfaces gibt eine ganze Zahl zurück, die einen eindeutigen Bezeichner für diese spezifische Zwischenablage-Änderungsoperation darstellt.

Der Bezeichner ist über alle Fenster und Tabs hinweg konsistent, die denselben Speicher-Schlüssel für dieselbe Zwischenablage-Änderung haben. Dies ermöglicht es Anwendungen, Ereignisse zu deduplizieren, wenn mehrere Fenster dieselbe Benachrichtigung über eine Zwischenablage-Änderung erhalten.

## Wert

Eine ganze Zahl. Ein kryptografisch abgeleiteter 128-Bit-Integer, der garantiert nach einem Schreibvorgang in die Zwischenablage einen anderen Wert ergibt als vor dem Schreibvorgang.

## Beispiele

In diesem Beispiel verwendet der Ereignislistener die `ClipboardChangeEvent.changeId`-Eigenschaft, um beim Ändern des Inhalts der Zwischenablage die eindeutige ID, die die ausgelöste Zwischenablage-Änderungsoperation darstellt, in die Konsole zu protokollieren.

```js
navigator.clipboard.addEventListener("clipboardchange", (event) => {
  console.log(event.changeId);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ClipboardChangeEvent.types`](/de/docs/Web/API/ClipboardChangeEvent/types)
- [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent)
- [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)
- [Clipboard API](/de/docs/Web/API/Clipboard_API)

---
title: "Navigator: `presentation`-Eigenschaft"
short-title: presentation
slug: Web/API/Navigator/presentation
l10n:
  sourceCommit: 5ac9120a7d243e0b479ffc203d78127b8aaf842e
---

{{securecontext_header}}{{APIRef("Presentation API")}}

Die schreibgeschützte `presentation`-Eigenschaft von [`Navigator`](/de/docs/Web/API/Navigator) dient als Einstiegspunkt für die [Presentation API](/de/docs/Web/API/Presentation_API) und gibt eine Referenz auf das [`Presentation`](/de/docs/Web/API/Presentation)-Objekt zurück.

## Wert

Eine Referenz auf das [`Presentation`](/de/docs/Web/API/Presentation)-Objekt.

## Beispiele

Derzeit ist die `navigator.presentation`-Eigenschaft am nützlichsten für die Funktionsüberprüfung und, für das empfangende User-Agent, um auf den [`PresentationReceiver`](/de/docs/Web/API/PresentationReceiver) zuzugreifen.

```js
// Check if the Presentation API is available in the current browser
if ("presentation" in navigator) {
  footer.textContent = navigator.presentation.receiver
    ? "Receiving presentation"
    : "(idle)";
} else {
  console.error("Presentation API is not available in this browser.");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Presentation API](/de/docs/Web/API/Presentation_API)
- [`Presentation`](/de/docs/Web/API/Presentation)

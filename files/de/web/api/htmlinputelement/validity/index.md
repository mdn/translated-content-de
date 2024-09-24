---
title: "HTMLInputElement: Gültigkeitseigenschaft"
short-title: Gültigkeit
slug: Web/API/HTMLInputElement/validity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

Die **`validity`** schreibgeschützte Eigenschaft des {{domxref("HTMLInputElement")}}-Interfaces gibt ein {{domxref("ValidityState")}}-Objekt zurück, das die Gültigkeitszustände dieses Elements darstellt.

## Wert

Ein {{domxref("ValidityState")}}-Objekt.

## Beispiele

Im folgenden Beispiel wird der Gültigkeitsstatus eines Eingabeelements abgerufen und verarbeitet, falls es nicht gültig ist:

```js
const input = document.getElementById("myInput");
const validityState = input.validity;
if (!validityState.valid) {
  // Testen Sie jeden Gültigkeitszustand
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLInputElement.checkValidity()")}}
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Eingeschränkte Validierung](/de/docs/Web/HTML/Constraint_validation)

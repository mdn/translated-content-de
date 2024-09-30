---
title: "HTMLInputElement: Validity-Eigenschaft"
short-title: validity
slug: Web/API/HTMLInputElement/validity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`validity`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurück, das die Gültigkeitszustände darstellt, in denen sich dieses Element befindet.

## Wert

Ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt.

## Beispiele

Das folgende Beispiel ruft den Gültigkeitszustand eines Eingabefelds ab und verarbeitet es, wenn es nicht gültig ist:

```js
const input = document.getElementById("myInput");
const validityState = input.validity;
if (!validityState.valid) {
  // Test each validity state
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)

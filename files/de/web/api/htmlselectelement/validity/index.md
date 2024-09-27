---
title: "HTMLSelectElement: validity-Eigenschaft"
short-title: validity
slug: Web/API/HTMLSelectElement/validity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`validity`** der Schnittstelle [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt zurück, das die Gültigkeitszustände darstellt, in denen sich dieses Element befindet.

## Wert

Ein [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt.

## Beispiel

Das folgende Beispiel erfasst den Gültigkeitszustand eines `select`-Elements und verarbeitet ihn, wenn er nicht gültig ist:

```js
const select = document.getElementById("mySelect");
const validityState = select.validity;
if (!validityState.valid) {
  // Test each validity state
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLSelectElement.checkValidity()`](/de/docs/Web/API/HTMLSelectElement/checkValidity)
- {{HTMLElement("select")}}
- {{HTMLElement("form")}}
- [Erfahren Sie mehr: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation)

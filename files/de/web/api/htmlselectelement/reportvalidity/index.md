---
title: "HTMLSelectElement: reportValidity() Methode"
short-title: reportValidity()
slug: Web/API/HTMLSelectElement/reportValidity
l10n:
  sourceCommit: 89d17a618d9a09519b1a667ecab74c4c40515e8f
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`** Methode des [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) Schnittstelle führt dieselben Gültigkeitsprüfungen durch wie die [`checkValidity()`](/de/docs/Web/API/HTMLSelectElement/checkValidity) Methode. Zusätzlich zeigt der Browser das Problem dem Benutzer an, wenn das [`invalid`](/de/docs/Web/API/HTMLElement/invalid_event) Ereignis nicht abgebrochen wird.

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme hat; andernfalls wird `false` zurückgegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLSelectElement.checkValidity()`](/de/docs/Web/API/HTMLSelectElement/checkValidity)
- {{HTMLElement("select")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Eingeschränkte Validierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen

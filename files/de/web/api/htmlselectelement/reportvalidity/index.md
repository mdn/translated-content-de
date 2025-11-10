---
title: "HTMLSelectElement: reportValidity() Methode"
short-title: reportValidity()
slug: Web/API/HTMLSelectElement/reportValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`** Methode des [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Interface führt die gleichen Gültigkeitsprüfschritte aus wie die [`checkValidity()`](/de/docs/Web/API/HTMLSelectElement/checkValidity)-Methode. Zusätzlich zeigt der Browser das Problem dem Nutzer an, wenn das [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis nicht abgebrochen wird.

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls gibt `false` zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLSelectElement.checkValidity()`](/de/docs/Web/API/HTMLSelectElement/checkValidity)
- {{HTMLElement("select")}}
- {{HTMLElement("form")}}
- [Erfahren Sie mehr: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen

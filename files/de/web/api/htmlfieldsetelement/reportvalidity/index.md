---
title: "HTMLFieldSetElement: reportValidity() Methode"
short-title: reportValidity()
slug: Web/API/HTMLFieldSetElement/reportValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`** Methode des [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) Interfaces führt die gleichen Gültigkeitsprüfungen durch wie die [`checkValidity()`](/de/docs/Web/API/HTMLFieldSetElement/checkValidity) Methode. Sie gibt immer `true` zurück, da {{HTMLElement("fieldset")}} Elemente nie Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) sind.

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Ein boolescher Wert, `true`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLFieldSetElement.checkValidity()`](/de/docs/Web/API/HTMLFieldSetElement/checkValidity)
- {{HTMLElement("fieldset")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)

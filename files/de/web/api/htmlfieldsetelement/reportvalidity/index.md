---
title: "HTMLFieldSetElement: reportValidity()-Methode"
short-title: reportValidity()
slug: Web/API/HTMLFieldSetElement/reportValidity
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`**-Methode des [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement)-Interfaces führt die gleichen Gültigkeitsprüfungen durch wie die [`checkValidity()`](/de/docs/Web/API/HTMLFieldSetElement/checkValidity)-Methode. Sie gibt immer `true` zurück, da {{HTMLElement("fieldset")}}-Elemente niemals Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) sind.

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Ein Boolean-Wert, `true`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLFieldSetElement.checkValidity()`](/de/docs/Web/API/HTMLFieldSetElement/checkValidity)
- {{HTMLElement("fieldset")}}
- {{HTMLElement("form")}}
- [Lernen: Formularvalidierung auf der Client-Seite](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)

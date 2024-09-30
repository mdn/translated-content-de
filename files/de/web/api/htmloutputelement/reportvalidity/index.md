---
title: "HTMLOutputElement: Methode reportValidity()"
short-title: reportValidity()
slug: Web/API/HTMLOutputElement/reportValidity
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`**-Methode des [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement)-Interfaces führt die gleichen Gültigkeitsprüfungen durch wie die Methode [`checkValidity()`](/de/docs/Web/API/HTMLOutputElement/checkValidity). Sie gibt immer `true` zurück, da {{HTMLElement("output")}}-Elemente nie Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) sind.

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

- [`HTMLOutputElement.checkValidity()`](/de/docs/Web/API/HTMLOutputElement/checkValidity)
- {{HTMLElement("output")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)

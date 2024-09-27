---
title: "HTMLObjectElement: reportValidity()-Methode"
short-title: reportValidity()
slug: Web/API/HTMLObjectElement/reportValidity
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`**-Methode des [`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement)-Interfaces führt die gleichen Schritte zur Überprüfung der Gültigkeit durch wie die [`checkValidity()`](/de/docs/Web/API/HTMLObjectElement/checkValidity)-Methode. Sie gibt immer `true` zurück, da {{HTMLElement("object")}}-Elemente niemals Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) sind.

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

- [`HTMLObjectElement.checkValidity()`](/de/docs/Web/API/HTMLObjectElement/checkValidity)
- {{HTMLElement("object")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)

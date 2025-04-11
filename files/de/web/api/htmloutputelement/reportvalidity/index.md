---
title: "HTMLOutputElement: reportValidity()-Methode"
short-title: reportValidity()
slug: Web/API/HTMLOutputElement/reportValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`**-Methode des [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement)-Interfaces führt die gleichen Schritte zur Gültigkeitsprüfung aus wie die [`checkValidity()`](/de/docs/Web/API/HTMLOutputElement/checkValidity)-Methode. Sie gibt immer `true` zurück, da {{HTMLElement("output")}}-Elemente niemals Kandidaten für die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) sind.

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
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation)

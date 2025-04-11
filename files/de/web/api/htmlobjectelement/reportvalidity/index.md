---
title: "HTMLObjectElement: reportValidity() Methode"
short-title: reportValidity()
slug: Web/API/HTMLObjectElement/reportValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`** Methode der [`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement) Schnittstelle führt die gleichen Gültigkeitsprüfungs-Schritte aus wie die [`checkValidity()`](/de/docs/Web/API/HTMLObjectElement/checkValidity) Methode. Sie gibt immer `true` zurück, da {{HTMLElement("object")}} Elemente niemals Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) sind.

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
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)

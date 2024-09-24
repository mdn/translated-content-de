---
title: "HTMLFieldSetElement: Methode reportValidity()"
short-title: reportValidity()
slug: Web/API/HTMLFieldSetElement/reportValidity
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`**-Methode des {{domxref("HTMLFieldSetElement")}}-Interfaces führt die gleichen Gültigkeitsprüfungen durch wie die Methode {{domxref("HTMLFieldSetElement.checkValidity", "checkValidity()")}}. Sie liefert immer `true` zurück, da {{HTMLElement("fieldset")}}-Elemente niemals für [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) in Frage kommen.

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

- {{domxref("HTMLFieldSetElement.checkValidity()")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("form")}}
- [Erfahren Sie mehr: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)

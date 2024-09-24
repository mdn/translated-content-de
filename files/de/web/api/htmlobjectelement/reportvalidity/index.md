---
title: "HTMLObjectElement: Methode reportValidity()"
short-title: reportValidity()
slug: Web/API/HTMLObjectElement/reportValidity
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`** Methode des {{domxref("HTMLObjectElement")}} Interfaces führt dieselben Gültigkeitsüberprüfungen wie die Methode {{domxref("HTMLObjectElement.checkValidity", "checkValidity()")}} durch. Sie gibt immer `true` zurück, da {{HTMLElement("object")}} Elemente niemals Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) sind.

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

- {{domxref("HTMLObjectElement.checkValidity()")}}
- {{HTMLElement("object")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)

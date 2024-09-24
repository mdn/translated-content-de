---
title: "HTMLOutputElement: Methode reportValidity()"
short-title: reportValidity()
slug: Web/API/HTMLOutputElement/reportValidity
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`** Methode des {{domxref("HTMLOutputElement")}}-Interfaces führt dieselben Schritte zur Überprüfung der Gültigkeit aus wie die Methode {{domxref("HTMLOutputElement.checkValidity", "checkValidity()")}}. Sie gibt immer `true` zurück, da {{HTMLElement("output")}}-Elemente niemals Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) sind.

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

- {{domxref("HTMLOutputElement.checkValidity()")}}
- {{HTMLElement("output")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)

---
title: "HTMLFieldSetElement: checkValidity()-Methode"
short-title: checkValidity()
slug: Web/API/HTMLFieldSetElement/checkValidity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`**-Methode der [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement)-Schnittstelle überprüft, ob das Element gültig ist, gibt jedoch immer `true` zurück, da {{HTMLElement("fieldset")}}-Elemente niemals Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) sind.

> [!NOTE]
> Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden auf `<fieldset>`-Elemente basierend auf der Gültigkeit ihrer untergeordneten Formularsteuerungen angewendet, nicht auf das Fieldset selbst.

## Syntax

```js-nolint
checkValidity()
```

### Parameter

Keine.

### Rückgabewert

Ein boolescher Wert, `true`.

## Beispiele

Im folgenden Beispiel gibt der Aufruf von `checkValidity()` `true` zurück.

```js
const element = document.getElementById("myFieldSet");
console.log(element.checkValidity());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLFieldSetElement.reportValidity()`](/de/docs/Web/API/HTMLFieldSetElement/reportValidity)
- {{HTMLElement("fieldset")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)

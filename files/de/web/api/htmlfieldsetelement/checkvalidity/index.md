---
title: "HTMLFieldSetElement: checkValidity()-Methode"
short-title: checkValidity()
slug: Web/API/HTMLFieldSetElement/checkValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`**-Methode der [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement)-Schnittstelle überprüft, ob das Element gültig ist, gibt aber immer `true` zurück, da {{HTMLElement("fieldset")}}-Elemente niemals Kandidaten für die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) sind.

> [!NOTE]
> Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden auf `<fieldset>`-Elemente angewendet basierend auf der Gültigkeit ihrer untergeordneten Formularelemente, nicht auf das `fieldset` selbst.

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
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation)

---
title: "HTMLFieldSetElement: checkValidity()-Methode"
short-title: checkValidity()
slug: Web/API/HTMLFieldSetElement/checkValidity
l10n:
  sourceCommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`**-Methode des {{domxref("HTMLFieldSetElement")}}-Interfaces prüft, ob das Element gültig ist, gibt jedoch immer `true` zurück, da {{HTMLElement("fieldset")}}-Elemente niemals Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) sind.

> [!NOTE]
> Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden auf `<fieldset>`-Elemente basierend auf der Gültigkeit ihrer untergeordneten Formularelemente angewendet, nicht auf das Fieldset selbst.

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

- {{domxref("HTMLFieldSetElement.reportValidity()")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("form")}}
- [Lernen: Validierung von Formularen auf der Clientseite](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)

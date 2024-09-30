---
title: "HTMLOutputElement: checkValidity() Methode"
short-title: checkValidity()
slug: Web/API/HTMLOutputElement/checkValidity
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`** Methode der [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement)-Schnittstelle überprüft, ob das Element gültig ist, gibt jedoch immer `true` zurück, da {{HTMLElement("output")}}-Elemente niemals Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) sind.

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
const element = document.getElementById("myOutput");
console.log(element.checkValidity());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLOutputElement.reportValidity()`](/de/docs/Web/API/HTMLOutputElement/reportValidity)
- {{HTMLElement("output")}}
- {{HTMLElement("form")}}
- [Lernen: Clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)

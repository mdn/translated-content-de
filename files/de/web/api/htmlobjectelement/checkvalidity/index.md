---
title: "HTMLObjectElement: checkValidity()-Methode"
short-title: checkValidity()
slug: Web/API/HTMLObjectElement/checkValidity
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`**-Methode des [`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement)-Interfaces überprüft, ob das Element gültig ist, gibt jedoch immer `true` zurück, da {{HTMLElement("object")}}-Elemente niemals Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) sind.

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
const element = document.getElementById("myObjectElement");
console.log(element.checkValidity());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLObjectElement.reportValidity()`](/de/docs/Web/API/HTMLObjectElement/reportValidity)
- {{HTMLElement("object")}}
- {{HTMLElement("form")}}
- [Erfahren Sie mehr: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)

---
title: "HTMLOutputElement: checkValidity() Methode"
short-title: checkValidity()
slug: Web/API/HTMLOutputElement/checkValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`**-Methode der [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement)-Schnittstelle prüft, ob das Element gültig ist, gibt aber immer `true` zurück, da {{HTMLElement("output")}}-Elemente niemals Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) sind.

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
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)

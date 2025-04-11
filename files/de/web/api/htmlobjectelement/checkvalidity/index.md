---
title: "HTMLObjectElement: checkValidity() Methode"
short-title: checkValidity()
slug: Web/API/HTMLObjectElement/checkValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`** Methode des [`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement) Interface prüft, ob das Element gültig ist, gibt jedoch immer `true` zurück, da {{HTMLElement("object")}} Elemente niemals Kandidaten für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) sind.

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
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)

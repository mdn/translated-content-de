---
title: "HTMLSelectElement: reportValidity()-Methode"
short-title: reportValidity()
slug: Web/API/HTMLSelectElement/reportValidity
l10n:
  sourceCommit: 89d17a618d9a09519b1a667ecab74c4c40515e8f
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`**-Methode des {{domxref("HTMLSelectElement")}}-Interfaces führt dieselben Schritte zur Gültigkeitsprüfung durch wie die {{domxref("HTMLSelectElement.checkValidity", "checkValidity()")}}-Methode. Darüber hinaus zeigt der Browser das Problem dem Benutzer an, wenn das {{domxref("HTMLElement/invalid_event", "ungültig")}}-Ereignis nicht abgebrochen wird.

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls wird `false` zurückgegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLSelectElement.checkValidity()")}}
- {{HTMLElement("select")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen

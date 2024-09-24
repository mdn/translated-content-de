---
title: "HTMLFormElement: reportValidity()-Methode"
short-title: reportValidity()
slug: Web/API/HTMLFormElement/reportValidity
l10n:
  sourceCommit: 89d17a618d9a09519b1a667ecab74c4c40515e8f
---

{{APIRef("HTML DOM")}}

Die **`reportValidity()`**-Methode des {{domxref("HTMLFormElement")}}-Interfaces führt die gleichen Gültigkeitsprüfungen durch wie die {{domxref("HTMLFormElement.checkValidity", "checkValidity()")}}-Methode. Zusätzlich zeigt der Browser für jedes ausgelöste und nicht abgebrochene {{domxref("HTMLElement/invalid_event", "invalid")}}-Ereignis das Problem dem Benutzer an.

## Syntax

```js-nolint
reportValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn die Werte der zugehörigen Steuerelemente keine Gültigkeitsprobleme aufweisen; andernfalls wird `false` zurückgegeben.

## Beispiel

```js
document.forms["myform"].addEventListener(
  "submit",
  () => {
    document.forms["myform"].reportValidity();
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLFormElement.checkValidity()")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)

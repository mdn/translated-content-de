---
title: "HTMLSelectElement: checkValidity()-Methode"
short-title: checkValidity()
slug: Web/API/HTMLSelectElement/checkValidity
l10n:
  sourceCommit: 89d17a618d9a09519b1a667ecab74c4c40515e8f
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`**-Methode der [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob das Element die angewendeten [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation)-Regeln erfüllt. Wenn der Wert `false` ist, löst die Methode auch ein [`invalid`](/de/docs/Web/API/HTMLElement/invalid_event)-Ereignis auf dem Element aus. Da es kein Standard-Browserverhalten für `checkValidity()` gibt, hat das Abbrechen dieses `invalid`-Ereignisses keine Wirkung.

> [!NOTE]
> Ein HTML-{{htmlelement("select")}}-Element mit einer nicht-null [`validationMessage`](/de/docs/Web/API/HTMLSelectElement/validationMessage) wird als ungültig angesehen, entspricht der CSS {{cssxref(":invalid")}}-Pseudoklasse und führt dazu, dass `checkValidity()` `false` zurückgibt. Verwenden Sie die Methode [`HTMLSelectElement.setCustomValidity()`](/de/docs/Web/API/HTMLSelectElement/setCustomValidity), um die [`HTMLSelectElement.validationMessage`](/de/docs/Web/API/HTMLSelectElement/validationMessage) auf den leeren String zu setzen, um den [`validity`](/de/docs/Web/API/HTMLSelectElement/validity)-Zustand als gültig festzulegen.

## Syntax

```js-nolint
checkValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme hat; andernfalls gibt es `false` zurück.

## Beispiele

Im folgenden Beispiel liefert der Aufruf von `checkValidity()` entweder `true` oder `false` zurück.

```js
const element = document.getElementById("mySelect");
console.log(element.checkValidity());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTextAreaElement.reportValidity()`](/de/docs/Web/API/HTMLTextAreaElement/reportValidity)
- {{HTMLElement("textarea")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Constraint validation](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen

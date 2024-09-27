---
title: "HTMLSelectElement: checkValidity() Methode"
short-title: checkValidity()
slug: Web/API/HTMLSelectElement/checkValidity
l10n:
  sourceCommit: 89d17a618d9a09519b1a667ecab74c4c40515e8f
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`**-Methode des [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob das Element irgendwelche auf es angewandten [Constraint-Validierungsregeln](/de/docs/Web/HTML/Constraint_validation) erfüllt. Wenn der Wert `false` ist, löst die Methode außerdem ein [`invalid`](/de/docs/Web/API/HTMLElement/invalid_event)-Event auf dem Element aus. Da es kein Standardverhalten des Browsers für `checkValidity()` gibt, hat das Abbrechen dieses `invalid`-Events keine Auswirkungen.

> [!NOTE]
> Ein HTML {{htmlelement("select")}}-Element mit einer nicht-null [`validationMessage`](/de/docs/Web/API/HTMLSelectElement/validationMessage) wird als ungültig betrachtet, wird die CSS {{cssxref(":invalid")}} Pseudo-Klasse entsprechen und führt dazu, dass `checkValidity()` `false` zurückgibt. Verwenden Sie die [`HTMLSelectElement.setCustomValidity()`](/de/docs/Web/API/HTMLSelectElement/setCustomValidity)-Methode, um die [`HTMLSelectElement.validationMessage`](/de/docs/Web/API/HTMLSelectElement/validationMessage) auf die leere Zeichenkette zu setzen, um den [`validity`](/de/docs/Web/API/HTMLSelectElement/validity)-Zustand auf gültig zu setzen.

## Syntax

```js-nolint
checkValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls `false`.

## Beispiele

Im folgenden Beispiel gibt der Aufruf von `checkValidity()` entweder `true` oder `false` zurück.

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
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudo-Klassen

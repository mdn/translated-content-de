---
title: "HTMLTextAreaElement: checkValidity() Methode"
short-title: checkValidity()
slug: Web/API/HTMLTextAreaElement/checkValidity
l10n:
  sourceCommit: 89d17a618d9a09519b1a667ecab74c4c40515e8f
---

{{APIRef("HTML DOM")}}

Die **`checkValidity()`** Methode des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob das Element alle angewendeten [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)-Regeln erfüllt. Bei einem Wert von `false` löst die Methode zudem ein [`invalid`](/de/docs/Web/API/HTMLElement/invalid_event)-Ereignis auf dem Element aus. Da es kein Standardverhalten im Browser für `checkValidity()` gibt, hat das Abbrechen dieses `invalid`-Ereignisses keine Wirkung.

> [!NOTE]
> Ein HTML-{{htmlelement("textarea")}}-Element mit einer nicht-null [`validationMessage`](/de/docs/Web/API/HTMLTextAreaElement/validationMessage) wird als ungültig angesehen, passt zu der CSS-{{cssxref(":invalid")}}-Pseudoklasse und führt dazu, dass `checkValidity()` `false` zurückgibt. Verwenden Sie die Methode [`HTMLTextAreaElement.setCustomValidity()`](/de/docs/Web/API/HTMLTextAreaElement/setCustomValidity), um die [`HTMLTextAreaElement.validationMessage`](/de/docs/Web/API/HTMLTextAreaElement/validationMessage) auf eine leere Zeichenkette zu setzen, um den [`validity`](/de/docs/Web/API/HTMLTextAreaElement/validity)-Status als gültig zu deklarieren.

## Syntax

```js-nolint
checkValidity()
```

### Parameter

Keine.

### Rückgabewert

Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls wird `false` zurückgegeben.

## Beispiele

Im folgenden Beispiel gibt der Aufruf von `checkValidity()` entweder `true` oder `false` zurück.

```js
const element = document.getElementById("myTextArea");
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
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- CSS-{{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklasse

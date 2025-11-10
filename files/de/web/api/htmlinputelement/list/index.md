---
title: "HTMLInputElement: list-Eigenschaft"
short-title: list
slug: Web/API/HTMLInputElement/list
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{ApiRef("HTML DOM")}}

Die **`list`** schreibgeschützte Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle gibt das [`HTMLDataListElement`](/de/docs/Web/API/HTMLDataListElement) zurück, auf das durch das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut des Elements verwiesen wird, oder `null`, wenn das `list`-Attribut nicht definiert ist oder der Wert des `list`-Attributs mit keinem `<datalist>` im gleichen Baum assoziiert ist.

> [!NOTE]
> Dies ist eine schreibgeschützte Eigenschaft. Um ein `<datalist>` mit einem Element zu verknüpfen, setzen Sie den Wert des `list`-Attributs mit [`setAttribute()`](/de/docs/Web/API/Element/setAttribute).

## Wert

Ein [`HTMLDataListElement`](/de/docs/Web/API/HTMLDataListElement) oder `null`.

## Beispiel

Angenommen, Sie haben das folgende HTML:

```html
<label for="planet">Which planet are you from?</label>
<input id="planet" type="text" list="superhero" />
<datalist id="superhero">
  <option value="Azarath"></option>
  <option value="Krypton"></option>
  <option value="Tamaran"></option>
</datalist>
```

Sie können das mit dem `<input>` assoziierte `<datalist>`-Element abrufen:

```js
const inputElement = document.querySelector("#planet");
console.log(inputElement.list); // returns the superhero HTMLDatalistElement
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)
- [`HTMLInputElement.type`](/de/docs/Web/API/HTMLInputElement/type)
- [`HTMLDataListElement`](/de/docs/Web/API/HTMLDataListElement)
- [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement)
- [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)
- {{htmlelement("input")}}
- {{htmlelement("datalist")}}
- {{htmlelement("option")}}

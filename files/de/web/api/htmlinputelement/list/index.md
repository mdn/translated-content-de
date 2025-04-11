---
title: "HTMLInputElement: list-Eigenschaft"
short-title: list
slug: Web/API/HTMLInputElement/list
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`list`**-Eigenschaft der Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) gibt das [`HTMLDataListElement`](/de/docs/Web/API/HTMLDataListElement) zurück, auf das durch das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut des Elements verwiesen wird. Wenn das `list`-Attribut nicht definiert ist oder dessen Wert keinem `<datalist>` im gleichen Baum zugeordnet ist, ist der Wert `null`.

> [!NOTE]
> Dies ist eine schreibgeschützte Eigenschaft. Um ein `<datalist>` mit einem Element zu verknüpfen, setzen Sie den Wert des `list`-Attributs mit [`setAttribute()`](/de/docs/Web/API/Element/setAttribute).

## Wert

Ein [`HTMLDataListElement`](/de/docs/Web/API/HTMLDataListElement) oder `null`.

## Beispiel

Für das folgende HTML:

```html
<label for="planet">Which planet are you from?</label>
<input id="planet" type="text" list="superhero" />
<datalist id="superhero">
  <option value="Azarath" />
  <option value="Krypton" />
  <option value="Tamaran" />
</datalist>
```

Können Sie das `<datalist>`-Element abrufen, das mit dem `<input>` verknüpft ist:

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

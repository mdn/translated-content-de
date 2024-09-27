---
title: "HTMLInputElement: list-Eigenschaft"
short-title: list
slug: Web/API/HTMLInputElement/list
l10n:
  sourceCommit: 46bcde62d3767fdba91163dfa30fa4b9fdaac5a6
---

{{ApiRef("HTML DOM")}}

Die schreibgeschützte **`list`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces gibt das [`HTMLDataListElement`](/de/docs/Web/API/HTMLDataListElement) zurück, auf das durch das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut des Elements verwiesen wird, oder `null`, wenn das `list`-Attribut nicht definiert ist oder der Wert des `list`-Attributs keinem `<datalist>` im selben Baum zugeordnet ist.

> [!NOTE]
> Dies ist eine schreibgeschützte Eigenschaft. Um ein `<datalist>` mit einem Element zu verknüpfen, setzen Sie den Wert des `list`-Attributs mit [`setAttribute()`](/de/docs/Web/API/Element/setAttribute).

## Wert

Ein [`HTMLDataListElement`](/de/docs/Web/API/HTMLDataListElement) oder `null`.

## Beispiel

Angenommen, Sie haben folgendes HTML:

```html
<label for="planet">Which planet are you from?</label>
<input id="planet" type="text" list="superhero" />
<datalist id="superhero">
  <option value="Azarath" />
  <option value="Krypton" />
  <option value="Tamaran" />
</datalist>
```

Sie können das `<datalist>`-Element abrufen, das mit dem `<input>` verknüpft ist:

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

---
title: "HTMLInputElement: list-Eigenschaft"
short-title: list
slug: Web/API/HTMLInputElement/list
l10n:
  sourceCommit: 46bcde62d3767fdba91163dfa30fa4b9fdaac5a6
---

{{ApiRef("HTML DOM")}}

Die **`list`** schreibgeschützte Eigenschaft des {{domxref("HTMLInputElement")}}-Interfaces gibt das {{domxref("HTMLDataListElement")}} zurück, auf das durch das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut des Elements verwiesen wird, oder `null`, wenn das `list`-Attribut nicht definiert ist oder der Wert des `list`-Attributs mit keinem `<datalist>` im gleichen Dokumentbaum verknüpft ist.

> [!NOTE]
> Dies ist eine schreibgeschützte Eigenschaft. Um ein `<datalist>` mit einem Element zu verknüpfen, setzen Sie den Wert des `list`-Attributs mit {{domxref("Element.setAttribute", "setAttribute()")}}.

## Wert

Ein {{domxref("HTMLDataListElement")}} oder `null`.

## Beispiel

Angenommen, wir haben folgendes HTML:

```html
<label for="planet">Aus welchem Planeten kommen Sie?</label>
<input id="planet" type="text" list="superhero" />
<datalist id="superhero">
  <option value="Azarath" />
  <option value="Krypton" />
  <option value="Tamaran" />
</datalist>
```

Sie können das `<datalist>`-Element abrufen, das mit dem `<input>` assoziiert ist:

```js
const inputElement = document.querySelector("#planet");
console.log(inputElement.list); // gibt das superhero HTMLDatalistElement zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.type")}}
- {{domxref("HTMLDataListElement")}}
- {{domxref("HTMLOptionElement")}}
- {{domxref("HTMLCollection")}}
- {{htmlelement("input")}}
- {{htmlelement("datalist")}}
- {{htmlelement("option")}}

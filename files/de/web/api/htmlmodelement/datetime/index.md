---
title: "HTMLModElement: dateTime-Eigenschaft"
short-title: dateTime
slug: Web/API/HTMLModElement/dateTime
l10n:
  sourceCommit: 51caa17b040ab8c591d1c9e38ff9c859935b8fbe
---

{{ APIRef("HTML DOM") }}

Die **`dateTime`**-Eigenschaft der [`HTMLModElement`](/de/docs/Web/API/HTMLModElement)-Schnittstelle ist eine Zeichenkette, die ein maschinenlesbares Datum mit einem optionalen Zeitwert enthält. Sie entspricht dem HTML-Attribut [`datetime`](/de/docs/Web/HTML/Element/time#datetime) der Elemente {{HTMLElement("del")}} und {{HTMLElement("ins")}}.

## Wert

Eine Zeichenkette. Für gültige Zeichenfolgenformate siehe die [gültigen `datetime`-Werte](/de/docs/Web/HTML/Element/time#valid_datetime_values).

## Beispiele

Das folgende HTML ist gegeben:

```html
<p>The paragraph <del datetime="2021-11-01">has been</del> changed</p>
```

Wir können den Wert des `dateTime`-Attributs des `<del>`-Elements abrufen:

```js
const deletedText = document.querySelector("del");
console.log(deletedText.dateTime); // "2021-11-01"
```

Wir können auch die `dateTime`-Eigenschaft festlegen. Hier erstellen wir ein `<ins>`-Element, setzen dann die `dateTime`-Eigenschaft des `<ins>`-Elements auf das aktuelle Datum im `YYYY-MM-DD`-Format und fügen es nach dem gelöschten Text ein:

```js
const insertedText = document.createElement("ins");
const now = new Date();
insertedText.dateTime = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
insertedText.appendChild(document.createTextNode("was"));
deletedText.insertAdjacentElement("afterend", insertedText);
```

Wenn unser Skript am 9. Januar 2025 ausgeführt wird, sieht unser HTML wie folgt aus:

```html
<p>
  The paragraph <del datetime="2021-11-01">has been</del
  ><ins datetime="2025-1-9">was</ins> changed
</p>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("del")}}
- {{HTMLElement("ins")}}
- [`HTMLModElement`](/de/docs/Web/API/HTMLModElement)
- [`HTMLModElement.cite`](/de/docs/Web/API/HTMLModElement/cite)
- [`HTMLTimeElement.dateTime`](/de/docs/Web/API/HTMLTimeElement/dateTime)
- [Datumszeichenfolgen](/de/docs/Web/HTML/Date_and_time_formats#date_strings)
- [Lokale Datums- und Zeitzeichenfolgen](/de/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings)
- {{jsxref("Date")}}
- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)

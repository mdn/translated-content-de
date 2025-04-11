---
title: "HTMLModElement: dateTime-Eigenschaft"
short-title: dateTime
slug: Web/API/HTMLModElement/dateTime
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`dateTime`**-Eigenschaft des [`HTMLModElement`](/de/docs/Web/API/HTMLModElement)-Interfaces ist ein String, der ein maschinenlesbares Datum mit einem optionalen Zeitwert enthält. Sie spiegelt das [`datetime`](/de/docs/Web/HTML/Reference/Elements/time#datetime)-HTML-Attribut der {{HTMLElement("del")}}- und {{HTMLElement("ins")}}-Elemente wider.

## Wert

Ein String. Für gültige String-Formate siehe [gültige `datetime`-Werte](/de/docs/Web/HTML/Reference/Elements/time#valid_datetime_values).

## Beispiele

Angenommen, wir haben folgendes HTML:

```html
<p>The paragraph <del datetime="2021-11-01">has been</del> changed</p>
```

Wir können den Wert des `dateTime`-Attributs des `<del>`-Elements abrufen:

```js
const deletedText = document.querySelector("del");
console.log(deletedText.dateTime); // "2021-11-01"
```

Wir können auch die `dateTime`-Eigenschaft setzen. Hier erstellen wir ein `<ins>`-Element, setzen die `dateTime`-Eigenschaft des `<ins>`-Elements auf das aktuelle Datum im `YYYY-MM-DD`-Format und fügen es nach dem gelöschten Text ein:

```js
const insertedText = document.createElement("ins");
const now = new Date();
insertedText.dateTime = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
insertedText.appendChild(document.createTextNode("was"));
deletedText.insertAdjacentElement("afterend", insertedText);
```

Wenn unser Skript am 9. Januar 2025 ausgeführt würde, wäre unser HTML wie folgt:

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
- [Datumsstrings](/de/docs/Web/HTML/Guides/Date_and_time_formats#date_strings)
- [Lokale Datums- und Zeitstrings](/de/docs/Web/HTML/Guides/Date_and_time_formats#local_date_and_time_strings)
- {{jsxref("Date")}}
- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)

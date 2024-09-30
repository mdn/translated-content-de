---
title: "HTMLElement: dataset-Eigenschaft"
short-title: dataset
slug: Web/API/HTMLElement/dataset
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die **`dataset`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle ist nur lesbar und bietet Lese- und Schreibzugriff auf [benutzerdefinierte Datenattribute](/de/docs/Web/HTML/Global_attributes/data-*) (`data-*`) an Elementen. Sie gibt eine Zeichenkette-Karte ([`DOMStringMap`](/de/docs/Web/API/DOMStringMap)) mit einem Eintrag für jedes `data-*`-Attribut zurück.

> [!NOTE]
> Die `dataset`-Eigenschaft selbst kann gelesen, aber nicht direkt beschrieben werden.
> Stattdessen müssen alle Schreibvorgänge an den einzelnen Eigenschaften innerhalb des
> `dataset` erfolgen, die wiederum die Datenattribute darstellen.

Ein HTML-`data-*`-Attribut und das entsprechende DOM
`dataset.property` ändern ihren gemeinsamen Namen entsprechend dem Ort,
an dem sie gelesen oder beschrieben werden:

- In HTML
  - : Der Attributname beginnt mit `data-`. Er kann nur Buchstaben,
    Zahlen, Bindestriche (`-`), Punkte (`.`), Doppelpunkte (`:`)
    und Unterstriche (`_`) enthalten. Alle [ASCII](/de/docs/Glossary/ASCII)-Großbuchstaben (`A` bis
    `Z`) werden in Kleinbuchstaben umgewandelt.
- In JavaScript
  - : Der Eigenschaftsname eines benutzerdefinierten Datenattributs entspricht dem HTML-Attribut
    ohne das `data-`-Präfix und entfernt einfache Bindestriche (`-`) für
    das CamelCase-Schreiben des Eigenschaftsnamens.

Zusätzlich zu den untenstehenden Informationen finden Sie eine Anleitung zur Verwendung von HTML-Datenattributen in unserem Artikel [_Verwendung von Datenattributen_](/de/docs/Learn/HTML/Howto/Use_data_attributes).

### Namensumwandlung

- Umwandlung von `dash-style` zu `camelCase`

  - : Ein benutzerdefinierter Datenattributname wird durch folgendes in einen Schlüssel für den
    [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)-Eintrag umgewandelt:

    1. Alle ASCII-Großbuchstaben (`A` bis
       `Z`) in Kleinbuchstaben umwandeln;
    2. Das Präfix `data-` (einschließlich des Bindestrichs) entfernen;
    3. Für jeden Bindestrich (`U+002D`), dem ein ASCII-Kleinbuchstabe
       `a` bis `z` folgt, den Bindestrich entfernen und den Buchstaben großschreiben;
    4. Andere Zeichen (einschließlich weiterer Bindestriche) bleiben unverändert.

- Umwandlung von `camelCase` zu `dash-style`

  - : Die gegenteilige Transformation, die einen Schlüssel in einen Attributnamen umwandelt, verwendet das
    Folgende:

    1. **Einschränkung:** Vor der Umwandlung darf einem Bindestrich _nicht_ sofort ein ASCII-Kleinbuchstabe `a` bis
       `z` folgen;
    2. Das Präfix `data-` hinzufügen;
    3. Einen Bindestrich vor jedem ASCII-Großbuchstaben `A` bis `Z` hinzufügen,
       dann den Buchstaben in Kleinbuchstaben umwandeln;
    4. Andere Zeichen bleiben unverändert.

Zum Beispiel entspricht ein `data-abc-def`-Attribut `dataset.abcDef`.

### Zugriff auf Werte

- Attribute können durch den camelCase-Namen/Schlüssel als Objekteigenschaft des
  datasets gesetzt und gelesen werden: `element.dataset.keyname`.
- Attribute können auch mit der Klammernschreibweise gesetzt und gelesen werden:
  `element.dataset['keyname']`.
- Der [`in`-Operator](/de/docs/Web/JavaScript/Reference/Operators/in) kann prüfen, ob ein gegebenes Attribut existiert:
  `'keyname' in element.dataset`. Beachten Sie, dass dies die [Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) des `dataset` durchlaufen wird und unsicher sein kann, wenn Sie externen Code haben, der die Prototypenkette beeinflussen könnte. Mehrere Alternativen existieren, wie z.B. {{jsxref("Object/hasOwn", "Object.hasOwn(element.dataset, 'keyname')")}}, oder einfach zu prüfen, ob `element.dataset.keyname !== undefined`.

### Setzen von Werten

- Wenn das Attribut gesetzt wird, wird sein Wert immer in eine Zeichenkette konvertiert.
  Zum Beispiel: `element.dataset.example = null` wird
  in `data-example="null"` konvertiert.

- Um ein Attribut zu entfernen, können Sie den [`delete`-Operator](/de/docs/Web/JavaScript/Reference/Operators/delete) verwenden: `delete element.dataset.keyname`.

## Wert

Ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap).

## Beispiele

```html
<div id="user" data-id="1234567890" data-user="carinaanand" data-date-of-birth>
  Carina Anand
</div>
```

```js
const el = document.querySelector("#user");

// el.id === 'user'
// el.dataset.id === '1234567890'
// el.dataset.user === 'carinaanand'
// el.dataset.dateOfBirth === ''

// set a data attribute
el.dataset.dateOfBirth = "1960-10-03";
// Result on JS: el.dataset.dateOfBirth === '1960-10-03'
// Result on HTML: <div id="user" data-id="1234567890" data-user="carinaanand" data-date-of-birth="1960-10-03">Carina Anand</div>

delete el.dataset.dateOfBirth;
// Result on JS: el.dataset.dateOfBirth === undefined
// Result on HTML: <div id="user" data-id="1234567890" data-user="carinaanand">Carina Anand</div>

if (el.dataset.someDataAttr === undefined) {
  el.dataset.someDataAttr = "mydata";
  // Result on JS: 'someDataAttr' in el.dataset === true
  // Result on HTML: <div id="user" data-id="1234567890" data-user="carinaanand" data-some-data-attr="mydata">Carina Anand</div>
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die HTML [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*) Klasse
  von globalen Attributen
- [Verwendung von Datenattributen](/de/docs/Learn/HTML/Howto/Use_data_attributes)
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) und [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)

---
title: "HTMLElement: dataset-Eigenschaft"
short-title: dataset
slug: Web/API/HTMLElement/dataset
l10n:
  sourceCommit: 01c674d9a172cf64b4d360d1bba4decaab5cc0f8
---

{{APIRef("HTML DOM")}}

Die **`dataset`**-Eigenschaft, die nur gelesen werden kann,
der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle bietet Lese-/Schreibzugriff auf [custom data attributes](/de/docs/Web/HTML/Global_attributes/data-*)
(`data-*`) auf Elementen. Sie stellt eine Zeichenfolgenabbildung
([`DOMStringMap`](/de/docs/Web/API/DOMStringMap)) mit einem Eintrag für jedes `data-*`-Attribut dar.

> [!NOTE]
> Die `dataset`-Eigenschaft selbst kann gelesen, aber nicht direkt geschrieben werden.
> Stattdessen müssen alle Schreibvorgänge an die einzelnen Eigenschaften innerhalb des
> `dataset` erfolgen, die wiederum die Datenattribute darstellen.

Ein HTML `data-*`-Attribut und sein entsprechendes DOM
`dataset.property` passen ihren gemeinsamen Namen je nachdem an,
wo sie gelesen oder geschrieben werden:

- In HTML
  - : Der Attributname beginnt mit `data-`. Er darf nur Buchstaben,
    Zahlen, Bindestriche (`-`), Punkte (`.`), Doppelpunkte (`:`)
    und Unterstriche (`_`) enthalten. Alle {{Glossary("ASCII", "ASCII")}}-Großbuchstaben (`A` bis
    `Z`) werden in Kleinbuchstaben umgewandelt.
- In JavaScript
  - : Der Eigenschaftenname eines benutzerdefinierten Datenattributs ist derselbe wie das HTML-Attribut
    ohne das `data-` Präfix. Einzelne Bindestriche (`-`) werden entfernt, und der nächste ASCII
    Buchstabe nach einem entfernten Bindestrich wird großgeschrieben, um den camel-cased Namen der Eigenschaft zu bilden.

Details und Beispiele für die Umwandlung zwischen den HTML- und JavaScript-Formen werden im nächsten Abschnitt genauer beschrieben.

Zusätzlich zu den untenstehenden Informationen finden Sie eine Anleitung für die Verwendung von HTML-Datenattributen in unserem Artikel [_Using data attributes_](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes).

### Namenskonvertierung

- `dash-style` zu `camelCase` Konvertierung

  - : Ein benutzerdefinierter Datenattributname wird zu einem Schlüssel für den
    [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)-Eintrag durch folgende Maßnahmen transformiert:

    1. Alle ASCII-Großbuchstaben (`A` bis
       `Z`) in Kleinbuchstaben umwandeln;
    2. Das Präfix `data-` (einschließlich des Bindestrichs) entfernen;
    3. Für jeden Bindestrich (`U+002D`) gefolgt von einem ASCII-Kleinbuchstaben
       `a` bis `z`, den Bindestrich entfernen und den Buchstaben groß schreiben;
    4. Andere Zeichen (einschließlich anderer Bindestriche) bleiben unverändert.

- `camelCase` zu `dash-style` Konvertierung

  - : Die entgegengesetzte Transformation, die einen Schlüssel einem Attributnamen zuordnet, folgt dem
    nachfolgenden Muster:

    1. **Einschränkung:** Vor der Transformation darf ein Bindestrich _nicht_ unmittelbar von einem ASCII-Kleinbuchstaben `a` bis
       `z` gefolgt werden;
    2. Das Präfix `data-` hinzufügen;
    3. Einen Bindestrich vor jedem ASCII-Großbuchstaben `A` bis `Z` hinzufügen,
       dann den Buchstaben in Kleinbuchstaben umwandeln;
    4. Andere Zeichen bleiben unverändert.

Zum Beispiel entspricht ein `data-abc-def`-Attribut
`dataset.abcDef`.

### Zugriff auf Werte

- Attribute können durch den camelCase-Namen/Schlüssel als Objekteigenschaft des
  Datensatzes gesetzt und gelesen werden: `element.dataset.keyname`.
- Attribute können auch unter Verwendung der Klammer-Syntax gesetzt und gelesen werden:
  `element.dataset['keyname']`.
- Der [`in` operator](/de/docs/Web/JavaScript/Reference/Operators/in) kann prüfen, ob ein gegebenes Attribut existiert:
  `'keyname' in element.dataset`. Beachten Sie, dass dies die [Prototype-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) des `dataset` durchlaufen wird und möglicherweise unsicher ist, wenn Sie externen Code haben, der die Prototype-Kette verunreinigen könnte. Verschiedene Alternativen existieren, wie {{jsxref("Object/hasOwn", "Object.hasOwn(element.dataset, 'keyname')")}}, oder einfach zu prüfen, ob `element.dataset.keyname !== undefined` ist.

### Werte setzen

- Wenn das Attribut gesetzt wird, wird sein Wert immer in eine Zeichenfolge umgewandelt.
  Zum Beispiel: `element.dataset.example = null` wird
  in `data-example="null"` umgewandelt.

- Um ein Attribut zu entfernen, können Sie den [`delete` operator](/de/docs/Web/JavaScript/Reference/Operators/delete) verwenden: `delete element.dataset.keyname`.

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
  der globalen Attribute
- [Using data attributes](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) und [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)

---
title: "HTMLElement: dataset-Eigenschaft"
short-title: dataset
slug: Web/API/HTMLElement/dataset
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`dataset`** Eigenschaft
des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces bietet Lese-/Schreibzugriff auf [benutzerdefinierte Datenattribute](/de/docs/Web/HTML/Global_attributes/data-*)
(`data-*`) von Elementen. Es stellt eine Zeichenfolgenzuordnung
([`DOMStringMap`](/de/docs/Web/API/DOMStringMap)) mit einem Eintrag für jedes `data-*`-Attribut bereit.

> [!NOTE]
> Die `dataset`-Eigenschaft kann selbst gelesen, aber nicht direkt geschrieben werden.
> Stattdessen müssen alle Schreibvorgänge an die einzelnen Eigenschaften innerhalb des
> `dataset` erfolgen, die wiederum die Datenattribute darstellen.

Ein HTML-`data-*`-Attribut und das entsprechende DOM
`dataset.property` passen ihren gemeinsamen Namen an, abhängig davon, ob sie gelesen oder geschrieben werden:

- In HTML
  - : Der Attributname beginnt mit `data-`. Es kann nur Buchstaben,
    Zahlen, Bindestriche (`-`), Punkte (`.`), Doppelpunkte (`:`),
    und Unterstriche (`_`) enthalten. Alle {{Glossary("ASCII", "ASCII")}} Großbuchstaben (`A` bis
    `Z`) werden in Kleinbuchstaben umgewandelt.
- In JavaScript
  - : Der Eigenschaftsname eines benutzerdefinierten Datenattributs entspricht dem HTML-Attribut
    ohne das `data-`-Präfix und entfernt einzelne Bindestriche (`-`), um
    den "{{Glossary("camel_case", "camel-cased")}}" Namen der Eigenschaft zu kapitalisieren.

Zusätzlich zu den unten stehenden Informationen finden Sie eine Anleitung zur Verwendung von HTML-Daten
attributen in unserem Artikel [_Using data attributes_](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes).

### Namenskonvertierung

- Umwandlung von `dash-style` in `camelCase`

  - : Ein benutzerdefinierter Datenattributname wird wie folgt in einen Schlüssel für den
    [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)-Eintrag transformiert:

    1. Alle ASCII-Großbuchstaben (`A` bis
       `Z`) in Kleinbuchstaben umwandeln;
    2. Das Präfix `data-` (einschließlich des Bindestrichs) entfernen;
    3. Bei jedem Bindestrich (`U+002D`), dem ein ASCII-Kleinbuchstabe
       `a` bis `z` folgt, den Bindestrich entfernen und den Buchstaben groß schreiben;
    4. Andere Zeichen (einschließlich anderer Bindestriche) bleiben unverändert.

- Umwandlung von `camelCase` in `dash-style`

  - : Die entgegengesetzte Transformation, die einen Schlüssel in einen Attributnamen umwandelt, verwendet die
    folgenden Schritte:

    1. **Einschränkung:** Vor der Umwandlung darf ein Bindestrich _nicht_ unmittelbar von einem ASCII-Kleinbuchstaben `a` bis
       `z` gefolgt werden;
    2. Das Präfix `data-` hinzufügen;
    3. Vor jedem ASCII-Großbuchstaben `A` bis `Z` einen Bindestrich hinzufügen,
       dann den Buchstaben in Kleinbuchstaben umwandeln;
    4. Andere Zeichen bleiben unverändert.

Zum Beispiel entspricht ein `data-abc-def` Attribut
`dataset.abcDef`.

### Zugriff auf Werte

- Attribute können über den camelCase-Namen/Schlüssel als Objekteigenschaft des
  Datasets gesetzt und gelesen werden: `element.dataset.keyname`.
- Attribute können auch mit der Klammernsyntax gesetzt und gelesen werden:
  `element.dataset['keyname']`.
- Der [`in` Operator](/de/docs/Web/JavaScript/Reference/Operators/in) kann prüfen, ob ein gegebenes Attribut existiert:
  `'keyname' in element.dataset`. Beachten Sie, dass dies die [Prototype-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) von `dataset` durchläuft und unsicher sein kann, wenn Sie externen Code haben, der die Prototype-Kette verschmutzen könnte. Mehrere Alternativen existieren, wie {{jsxref("Object/hasOwn", "Object.hasOwn(element.dataset, 'keyname')")}}, oder einfach zu prüfen, ob `element.dataset.keyname !== undefined`.

### Werte setzen

- Wenn das Attribut gesetzt wird, wird sein Wert immer in eine Zeichenfolge konvertiert.
  Zum Beispiel: `element.dataset.example = null` wird
  in `data-example="null"` konvertiert.

- Um ein Attribut zu entfernen, können Sie den [`delete` Operator](/de/docs/Web/JavaScript/Reference/Operators/delete) verwenden: `delete element.dataset.keyname`.

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

- Die Klasse der HTML [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*) globalen Attribute
- [Using data attributes](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) und [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)

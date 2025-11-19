---
title: "HTMLElement: dataset-Eigenschaft"
short-title: dataset
slug: Web/API/HTMLElement/dataset
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`dataset`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle bietet Lese-/Schreibzugriff auf [benutzerdefinierte Datenattribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*)(`data-*`) auf Elementen. Sie stellt eine Karte von Zeichenfolgen ([`DOMStringMap`](/de/docs/Web/API/DOMStringMap)) mit einem Eintrag für jedes `data-*`-Attribut bereit.

> [!NOTE]
> Die `dataset`-Eigenschaft selbst kann gelesen, aber nicht direkt geschrieben werden.
> Stattdessen müssen alle Schreiboperationen auf die einzelnen Eigenschaften innerhalb des
> `dataset` erfolgen, die wiederum die Datenattribute repräsentieren.

## Wert

Eine [`DOMStringMap`](/de/docs/Web/API/DOMStringMap).

Ein HTML `data-*` Attribut und sein entsprechendes DOM
`dataset.property` ändern ihren gemeinsamen Namen, abhängig davon, wo
sie gelesen oder geschrieben werden:

- In HTML
  - : Der Attributname beginnt mit `data-`. Er kann nur Buchstaben,
    Zahlen, Bindestriche (`-`), Punkte (`.`), Doppelpunkte (`:`),
    und Unterstriche (`_`) enthalten. Alle {{Glossary("ASCII", "ASCII")}}-Großbuchstaben (`A` bis
    `Z`) werden in Kleinbuchstaben umgewandelt.
- In JavaScript
  - : Der Name der Eigenschaft eines benutzerdefinierten Datenattributs ist derselbe wie der HTML-Attributname ohne das Präfix `data-`. Einzelne Bindestriche (`-`) werden entfernt, und das nächstfolgende ASCII-Zeichen nach einem entfernten Bindestrich wird großgeschrieben, um den camel-cased Eigenschaftsnamen zu bilden.

Details und Beispiele für die Umwandlung zwischen der HTML- und JavaScript-Form werden im folgenden Abschnitt ausführlicher beschrieben.

Zusätzlich zu den unten stehenden Informationen finden Sie eine Anleitung zur Verwendung von HTML-Datenattributen in unserem Artikel [_Using data attributes_](/de/docs/Web/HTML/How_to/Use_data_attributes).

### Namenskonvertierung

- `dash-style` zu `camelCase` Konvertierung
  - : Ein benutzerdefinierter Datenattributname wird wie folgt in einen Schlüssel für den [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)-Eintrag umgewandelt:
    1. Alle ASCII-Großbuchstaben (`A` bis
       `Z`) werden in Kleinbuchstaben umgewandelt;
    2. Das Präfix `data-` (einschließlich des Bindestrichs) wird entfernt;
    3. Für jeden Bindestrich (`U+002D`), dem ein ASCII-Kleinbuchstabe
       `a` bis `z` folgt, wird der Bindestrich entfernt und der Buchstabe großgeschrieben;
    4. Andere Zeichen (einschließlich anderer Bindestriche) bleiben unverändert.

- `camelCase` zu `dash-style` Konvertierung
  - : Die gegenteilige Umwandlung, die einen Schlüssel zu einem Attributnamen abbildet, verwendet folgendes Verfahren:
    1. **Einschränkung:** Vor der Umwandlung darf ein Bindestrich _nicht_ direkt auf einen ASCII-Kleinbuchstaben `a` bis `z` folgen;
    2. Das Präfix `data-` wird hinzugefügt;
    3. Ein Bindestrich wird vor jedem ASCII-Großbuchstaben `A` bis `Z` hinzugefügt,
       dann wird der Buchstabe in Kleinbuchstaben umgewandelt;
    4. Andere Zeichen bleiben unverändert.

Zum Beispiel entspricht ein `data-abc-def` Attribut `dataset.abcDef`.

### Zugriff auf Werte

- Attribute können über den camelCase Namen/Schlüssel als Objekteigenschaft des
  Datasets gesetzt und gelesen werden: `element.dataset.keyname`.
- Attribute können auch unter Verwendung der Klammernschreibweise gesetzt und gelesen werden:
  `element.dataset['keyname']`.
- Der [`in` Operator](/de/docs/Web/JavaScript/Reference/Operators/in) kann überprüfen, ob ein gegebenes Attribut existiert:
  `'keyname' in element.dataset`. Beachten Sie, dass dies die [Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) des `dataset` durchläuft und unsicher sein kann, wenn Sie externen Code haben, der die Prototypkette verunreinigen könnte. Es gibt mehrere Alternativen, wie {{jsxref("Object/hasOwn", "Object.hasOwn(element.dataset, 'keyname')")}}, oder einfach zu überprüfen, ob `element.dataset.keyname !== undefined`.

### Werte setzen

- Wenn das Attribut gesetzt wird, wird sein Wert immer in eine Zeichenfolge umgewandelt.
  Zum Beispiel: `element.dataset.example = null` wird
  in `data-example="null"` umgewandelt.

- Um ein Attribut zu entfernen, können Sie den [`delete` Operator](/de/docs/Web/JavaScript/Reference/Operators/delete) verwenden: `delete element.dataset.keyname`.

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

- Die HTML [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*) Klasse von globalen Attributen
- [Using data attributes](/de/docs/Web/HTML/How_to/Use_data_attributes)
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) und [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)

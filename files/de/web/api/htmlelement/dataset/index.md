---
title: "HTMLElement: dataset-Eigenschaft"
short-title: dataset
slug: Web/API/HTMLElement/dataset
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

Die **`dataset`**-Schreibgeschützte Eigenschaft
der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle ermöglicht Lese-/Schreibzugriff auf [benutzerdefinierte Datenattribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*)
(`data-*`) von Elementen. Sie stellt eine Zeichenfolgenkarte
([`DOMStringMap`](/de/docs/Web/API/DOMStringMap)) mit einem Eintrag für jedes `data-*`-Attribut zur Verfügung.

> [!NOTE]
> Die `dataset`-Eigenschaft selbst kann gelesen, aber nicht direkt beschrieben werden.
> Stattdessen müssen alle Schreibvorgänge für die einzelnen Eigenschaften innerhalb des
> `dataset` erfolgen, die wiederum die Datenattribute repräsentieren.

Ein HTML-`data-*`-Attribut und sein entsprechendes DOM
`dataset.property` ändern ihren gemeinsamen Namen je nachdem, ob sie gelesen oder geschrieben werden:

- In HTML
  - : Der Attributname beginnt mit `data-`. Er kann nur Buchstaben,
    Zahlen, Bindestriche (`-`), Punkte (`.`), Doppelpunkte (`:`)
    und Unterstriche (`_`) enthalten. Alle {{Glossary("ASCII", "ASCII")}}-Großbuchstaben (`A` bis
    `Z`) werden in Kleinbuchstaben umgewandelt.
- In JavaScript
  - : Der Name der Eigenschaft eines benutzerdefinierten Datenattributs ist derselbe wie der HTML-Attributname
    ohne das Präfix `data-`. Einzelne Bindestriche (`-`) werden entfernt, und das nächste ASCII-Zeichen
    nach einem entfernten Bindestrich wird großgeschrieben, um den camelCase-Namen der Eigenschaft zu bilden.

Details und Beispiele zur Umwandlung zwischen den HTML- und JavaScript-Formen werden im nächsten Abschnitt ausführlicher beschrieben.

Neben den folgenden Informationen finden Sie eine Anleitung zur Verwendung von HTML-Datenattributen in unserem Artikel [_Using data attributes_](/de/docs/Web/HTML/How_to/Use_data_attributes).

### Namenskonvertierung

- Umwandlung von `dash-style` zu `camelCase`

  - : Ein benutzerdefinierter Datenattributname wird zu einem Schlüssel für den
    [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)-Eintrag folgendermaßen umgewandelt:
    1. Alle ASCII-Großbuchstaben (`A` bis
       `Z`) werden kleingeschrieben;
    2. Entfernen Sie das Präfix `data-` (einschließlich des Bindestrichs);
    3. Für jeden Bindestrich (`U+002D`), gefolgt von einem ASCII-Kleinbuchstaben
       `a` bis `z`, entfernen Sie den Bindestrich und schreiben Sie den Buchstaben groß;
    4. Andere Zeichen (einschließlich weiterer Bindestriche) bleiben unverändert.

- Umwandlung von `camelCase` zu `dash-style`
  - : Die gegenteilige Umwandlung, bei der ein Schlüssel in einen Attributnamen umgewandelt wird, erfolgt folgendermaßen:
    1. **Einschränkung:** Vor der Umwandlung darf ein Bindestrich _nicht_ direkt auf einen ASCII-Kleinbuchstaben `a` bis
       `z` folgen;
    2. Fügen Sie das Präfix `data-` hinzu;
    3. Fügen Sie einen Bindestrich vor jedem ASCII-Großbuchstaben `A` bis `Z` hinzu,
       und schreiben Sie den Buchstaben klein;
    4. Andere Zeichen bleiben unverändert.

Zum Beispiel entspricht ein `data-abc-def`-Attribut
`dataset.abcDef`.

### Zugriff auf Werte

- Attribute können mit dem camelCase-Namen/Schlüssel als Objekteigenschaft des
  dataset festgelegt und ausgelesen werden: `element.dataset.keyname`.
- Attribute können auch mit der Klammer-Syntax festgelegt und ausgelesen werden:
  `element.dataset['keyname']`.
- Mit dem [`in`-Operator](/de/docs/Web/JavaScript/Reference/Operators/in) kann überprüft werden, ob ein bestimmtes Attribut existiert:
  `'keyname' in element.dataset`. Beachten Sie, dass dies die [Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) von `dataset` durchlaufen kann und möglicherweise unsicher ist, wenn Sie externen Code haben, der die Prototypenkette verunreinigen könnte. Es gibt mehrere Alternativen, wie z. B. {{jsxref("Object/hasOwn", "Object.hasOwn(element.dataset, 'keyname')")}}, oder einfach zu überprüfen, ob `element.dataset.keyname !== undefined`.

### Werte festlegen

- Beim Festlegen des Attributs wird sein Wert immer in eine Zeichenfolge umgewandelt.
  Zum Beispiel: `element.dataset.example = null` wird
  in `data-example="null"` umgewandelt.

- Um ein Attribut zu entfernen, können Sie den [`delete`-Operator](/de/docs/Web/JavaScript/Reference/Operators/delete) verwenden: `delete element.dataset.keyname`.

## Wert

Eine [`DOMStringMap`](/de/docs/Web/API/DOMStringMap).

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

- Die HTML-`data-*`-Klasse der globalen Attribute
- [Using data attributes](/de/docs/Web/HTML/How_to/Use_data_attributes)
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) und [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)

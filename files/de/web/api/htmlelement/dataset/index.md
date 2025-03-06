---
title: "HTMLElement: dataset-Eigenschaft"
short-title: dataset
slug: Web/API/HTMLElement/dataset
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`dataset`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle ermöglicht den Lese- und Schreibzugriff auf [benutzerdefinierte Datenattribute](/de/docs/Web/HTML/Global_attributes/data-*) (`data-*`) von Elementen. Sie bietet eine Karte von Strings ([`DOMStringMap`](/de/docs/Web/API/DOMStringMap)) mit einem Eintrag für jedes `data-*`-Attribut.

> [!NOTE]
> Die `dataset`-Eigenschaft selbst kann gelesen, aber nicht direkt beschrieben werden.
> Stattdessen müssen alle Schreibvorgänge an den einzelnen Eigenschaften innerhalb des
> `dataset` erfolgen, die wiederum die Datenattribute repräsentieren.

Ein HTML-`data-*`-Attribut und sein entsprechendes DOM
`dataset.property` ändern ihren gemeinsamen Namen entsprechend, je nachdem, wo sie gelesen oder geschrieben werden:

- In HTML
  - : Der Attributname beginnt mit `data-`. Er darf nur Buchstaben,
    Zahlen, Bindestriche (`-`), Punkte (`.`), Doppelpunkte (`:`),
    und Unterstriche (`_`) enthalten. Alle {{Glossary("ASCII", "ASCII")}}-Großbuchstaben (`A` bis
    `Z`) werden in Kleinbuchstaben umgewandelt.
- In JavaScript
  - : Der Property-Name eines benutzerdefinierten Datenattributs ist derselbe wie der HTML-Attributname ohne das Präfix `data-`. Einzelne Bindestriche (`-`) werden entfernt, und das nächste ASCII-Zeichen nach einem entfernten Bindestrich wird großgeschrieben, um den camelCase-Namen der Eigenschaft zu bilden.

Details und Beispiele zur Umwandlung zwischen den HTML- und JavaScript-Formen werden im nächsten Abschnitt ausführlicher beschrieben.

Zusätzlich zu den untenstehenden Informationen finden Sie eine Anleitung zur Verwendung von HTML-Datenattributen in unserem Artikel [_Verwendung von Datenattributen_](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes).

### Namensumwandlung

- `dash-style` zu `camelCase`-Umwandlung

  - : Ein benutzerdefinierter Datenattributname wird in einen Schlüssel für den
    [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)-Eintrag wie folgt umgewandelt:

    1. Alle ASCII-Großbuchstaben (`A` bis
       `Z`) werden in Kleinbuchstaben umgewandelt;
    2. Das Präfix `data-` (einschließlich des Bindestrichs) wird entfernt;
    3. Für jeden Bindestrich (`U+002D`) gefolgt von einem ASCII-Kleinbuchstaben
       `a` bis `z`, wird der Bindestrich entfernt und der Buchstabe großgeschrieben;
    4. Andere Zeichen (einschließlich weiterer Bindestriche) bleiben unverändert.

- `camelCase` zu `dash-style`-Umwandlung

  - : Die entgegengesetzte Umwandlung, die einen Schlüssel in einen Attributnamen überführt, verwendet folgende Schritte:

    1. **Einschränkung:** Vor der Umwandlung darf ein Bindestrich _nicht_ unmittelbar
       auf einen ASCII-Kleinbuchstaben `a` bis `z` folgen;
    2. Das Präfix `data-` wird hinzugefügt;
    3. Vor jedem ASCII-Großbuchstaben `A` bis `Z` wird ein Bindestrich hinzugefügt,
       dann wird der Buchstabe in Kleinbuchstaben umgewandelt;
    4. Andere Zeichen bleiben unverändert.

Zum Beispiel entspricht ein `data-abc-def`-Attribut dem
`dataset.abcDef`.

### Zugriff auf Werte

- Attribute können über den camelCase-Namen/Schlüssel als Objekteigenschaft des
  Dataset gesetzt und gelesen werden: `element.dataset.keyname`.
- Attribute können auch mit der Klammer-Syntax gesetzt und gelesen werden:
  `element.dataset['keyname']`.
- Der [`in`-Operator](/de/docs/Web/JavaScript/Reference/Operators/in) kann überprüfen, ob ein bestimmtes Attribut existiert:
  `'keyname' in element.dataset`. Beachten Sie, dass dies die [Prototyp-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) von `dataset` durchlaufen kann und möglicherweise unsicher ist, wenn Sie externen Code haben, der die Prototyp-Kette verschmutzen könnte. Mehrere Alternativen existieren, wie etwa {{jsxref("Object/hasOwn", "Object.hasOwn(element.dataset, 'keyname')")}}, oder einfach zu überprüfen, ob `element.dataset.keyname !== undefined`.

### Werte setzen

- Wenn das Attribut gesetzt wird, wird sein Wert immer in einen String umgewandelt.
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

- Die HTML-[`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)-Klasse
  der globalen Attribute
- [Verwendung von Datenattributen](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) und [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)

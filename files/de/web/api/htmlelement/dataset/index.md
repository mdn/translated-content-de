---
title: "HTMLElement: dataset-Eigenschaft"
short-title: dataset
slug: Web/API/HTMLElement/dataset
l10n:
  sourceCommit: 960a94a198ca60fb04fe63857ea61d7306465791
---

{{APIRef("HTML DOM")}}

Die **`dataset`**-Eigenschaft, die schreibgeschützt ist, des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces bietet Lese- und Schreibzugriff auf [benutzerdefinierte Datenattribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*)
(`data-*`) von Elementen. Sie stellt eine Map von Strings
([`DOMStringMap`](/de/docs/Web/API/DOMStringMap)) mit einem Eintrag für jedes `data-*`-Attribut bereit.

> [!NOTE]
> Die `dataset`-Eigenschaft selbst kann gelesen, aber nicht direkt geschrieben werden.
> Stattdessen müssen alle Schreiboperationen auf die einzelnen Eigenschaften innerhalb des
> `dataset` erfolgen, die wiederum die Datenattribute repräsentieren.

Ein HTML-`data-*`-Attribut und sein entsprechendes DOM
`dataset.property` ändern ihren gemeinsamen Namen je nachdem, wo sie gelesen oder geschrieben werden:

- In HTML
  - : Der Attributname beginnt mit `data-`. Er darf nur Buchstaben,
    Zahlen, Bindestriche (`-`), Punkte (`.`), Doppelpunkte (`:`),
    und Unterstriche (`_`) enthalten. Alle {{Glossary("ASCII", "ASCII")}}-Großbuchstaben (`A` bis
    `Z`) werden in Kleinbuchstaben umgewandelt.
- In JavaScript
  - : Der Eigenname eines benutzerdefinierten Datenattributs entspricht dem HTML-Attribut
    ohne das `data-`-Präfix. Einzelne Bindestriche (`-`) werden entfernt und das nächste ASCII-
    Zeichen nach einem entfernten Bindestrich wird großgeschrieben, um den camelCase-Namen der Eigenschaft zu bilden.

Details und Beispiele zur Umwandlung zwischen den HTML- und JavaScript-Formen werden im nächsten Abschnitt ausführlicher beschrieben.

Zusätzlich zu den folgenden Informationen finden Sie einen Leitfaden zur Verwendung von HTML-Datenattributen in unserem Artikel [_Using data attributes_](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes).

### Namensumwandlung

- Umwandlung von `dash-style` zu `camelCase`

  - : Ein benutzerdefinierter Datenattributname wird durch die folgenden Schritte in einen Schlüssel für den
    [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)-Eintrag umgewandelt:

    1. Alle ASCII-Großbuchstaben (`A` bis `Z`) in Kleinbuchstaben umwandeln;
    2. Das Präfix `data-` (einschließlich des Bindestrichs) entfernen;
    3. Bei jedem Bindestrich (`U+002D`), gefolgt von einem ASCII-Kleinbuchstaben `a` bis `z`, den Bindestrich entfernen und den Buchstaben großschreiben;
    4. Andere Zeichen (einschließlich anderer Bindestriche) bleiben unverändert.

- Umwandlung von `camelCase` zu `dash-style`

  - : Die entgegengesetzte Umwandlung, die einen Schlüssel in einen Attributnamen umwandelt, erfolgt nach den folgenden Schritten:

    1. **Einschränkung:** Vor der Umwandlung darf ein Bindestrich _nicht_ direkt von einem ASCII-Kleinbuchstaben `a` bis `z` gefolgt werden;
    2. Das Präfix `data-` hinzufügen;
    3. Einen Bindestrich vor jedem ASCII-Großbuchstaben `A` bis `Z` einfügen, dann den Buchstaben in Kleinbuchstaben umwandeln;
    4. Andere Zeichen bleiben unverändert.

Zum Beispiel entspricht ein `data-abc-def`-Attribut dem
`dataset.abcDef`.

### Zugriff auf Werte

- Attribute können über den camelCase-Namen/Schlüssel als Objekteigenschaft des
  datasets gesetzt und gelesen werden: `element.dataset.keyname`.
- Attribute können auch mit der Klammer-Syntax gesetzt und gelesen werden:
  `element.dataset['keyname']`.
- Der [`in`-Operator](/de/docs/Web/JavaScript/Reference/Operators/in) kann überprüfen, ob ein bestimmtes Attribut existiert:
  `'keyname' in element.dataset`. Beachten Sie, dass dies die [Prototypen-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) des `dataset` durchläuft und unsicher sein kann, wenn Sie externen Code haben, der die Prototypen-Kette verunreinigen könnte. Mehrere Alternativen existieren, wie z.B. {{jsxref("Object/hasOwn", "Object.hasOwn(element.dataset, 'keyname')")}}, oder einfach die Überprüfung, ob `element.dataset.keyname !== undefined`.

### Setzen von Werten

- Wenn das Attribut gesetzt wird, wird der Wert immer in einen String umgewandelt.
  Zum Beispiel: `element.dataset.example = null` wird
  in `data-example="null"` umgewandelt.

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

- Die HTML-`data-*`-Klasse der globalen Attribute
- [Using data attributes](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) und [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)

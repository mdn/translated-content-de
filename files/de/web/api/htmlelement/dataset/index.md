---
title: "HTMLElement: dataset-Eigenschaft"
short-title: dataset
slug: Web/API/HTMLElement/dataset
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die **`dataset`** Leseeigenschaft
der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle ermöglicht den Lese-/Schreibzugriff auf [benutzerdefinierte Datenattribute](/de/docs/Web/HTML/Global_attributes/data-*)
(`data-*`) von Elementen. Sie stellt eine Zuordnung von Zeichenfolgen
([`DOMStringMap`](/de/docs/Web/API/DOMStringMap)) mit einem Eintrag für jedes `data-*`-Attribut bereit.

> [!NOTE]
> Die `dataset`-Eigenschaft selbst kann gelesen, aber nicht direkt geschrieben werden.
> Stattdessen müssen alle Schreibvorgänge an den einzelnen Eigenschaften innerhalb des
> `dataset` erfolgen, die wiederum die Datenattribute repräsentieren.

Ein HTML `data-*`-Attribut und sein entsprechendes DOM
`dataset.property` ändern ihren gemeinsamen Namen je nachdem, ob
sie gelesen oder geschrieben werden:

- Im HTML
  - : Der Attributname beginnt mit `data-`. Es kann nur Buchstaben,
    Zahlen, Bindestriche (`-`), Punkte (`.`), Doppelpunkte (`:`)
    und Unterstriche (`_`) enthalten. Alle [ASCII](/de/docs/Glossary/ASCII)-Großbuchstaben (`A` bis
    `Z`) werden in Kleinbuchstaben umgewandelt.
- In JavaScript
  - : Der Eigenschaftsname eines benutzerdefinierten Datenattributs ist derselbe wie der HTML-Attributname
    ohne das Präfix `data-` und entfernt einfache Bindestriche (`-`), um anzugeben,
    wann der Eigenschaftsname in "[camel-cased](/de/docs/Glossary/camel_case)" umgewandelt wird.

Zusätzlich zu den unten stehenden Informationen finden Sie eine Anleitung zur Verwendung von HTML-Datenattributen in unserem Artikel [_Using data attributes_](/de/docs/Learn/HTML/Howto/Use_data_attributes).

### Namenskonvertierung

- Umwandlung von `dash-style` zu `camelCase`

  - : Ein benutzerdefinierte Datenattributname wird in einen Schlüssel für den
    [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)-Eintrag wie folgt umgewandelt:

    1. Alle ASCII-Großbuchstaben (`A` bis `Z`) in Kleinbuchstaben ändern;
    2. Das Präfix `data-` (einschließlich des Bindestrichs) entfernen;
    3. Bei jedem Bindestrich (`U+002D`), gefolgt von einem ASCII-Kleinbuchstaben
       `a` bis `z`, den Bindestrich entfernen und den Buchstaben großschreiben;
    4. Andere Zeichen (einschließlich weiterer Bindestriche) bleiben unverändert.

- Umwandlung von `camelCase` zu `dash-style`

  - : Die entgegengesetzte Umwandlung, die einen Schlüssel in einen Attributnamen umwandelt, wird folgendermaßen durchgeführt:

    1. **Einschränkung:** Vor der Umwandlung darf ein Bindestrich _nicht_ direkt auf einen ASCII-Kleinbuchstaben `a` bis `z` folgen;
    2. Das Präfix `data-` hinzufügen;
    3. Einem ASCII-Großbuchstaben `A` bis `Z` einen Bindestrich voranstellen und den Buchstaben dann in Kleinbuchstaben umwandeln;
    4. Andere Zeichen bleiben unverändert.

Zum Beispiel entspricht ein `data-abc-def`-Attribut dem
`dataset.abcDef`.

### Zugriff auf Werte

- Attribute können über den camelCase Namen/Schlüssel als Objekteigenschaft des
  Datasets gesetzt und gelesen werden: `element.dataset.keyname`.
- Attribute können auch über die Klammer-Syntax gesetzt und gelesen werden:
  `element.dataset['keyname']`.
- Der [`in`-Operator](/de/docs/Web/JavaScript/Reference/Operators/in) kann prüfen, ob ein bestimmtes Attribut existiert:
  `'keyname' in element.dataset`. Beachten Sie, dass dies die [Prototypen-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) des `dataset` durchläuft und unsicher sein kann, wenn Sie externen Code haben, der die Prototypen-Kette verunreinigen könnte. Es gibt mehrere Alternativen, wie zum Beispiel {{jsxref("Object/hasOwn", "Object.hasOwn(element.dataset, 'keyname')")}}, oder einfach zu prüfen, ob `element.dataset.keyname !== undefined`.

### Werte setzen

- Wenn das Attribut gesetzt wird, wird sein Wert immer in eine Zeichenfolge umgewandelt.
  Zum Beispiel: `element.dataset.example = null` wird
  in `data-example="null"` konvertiert.

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

- Die HTML-Klasse der [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)
  globalen Attribute
- [Verwendung von Datenattributen](/de/docs/Learn/HTML/Howto/Use_data_attributes)
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) und [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)

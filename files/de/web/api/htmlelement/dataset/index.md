---
title: "HTMLElement: dataset-Eigenschaft"
short-title: dataset
slug: Web/API/HTMLElement/dataset
l10n:
  sourceCommit: cd701f10306c8b0b9690532ff808df826818a04f
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`dataset`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle bietet Lese-/Schreibzugriff auf [benutzerdefinierte Datenattribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) (`data-*`) auf Elementen. Sie stellt eine Map von Zeichenfolgen ([`DOMStringMap`](/de/docs/Web/API/DOMStringMap)) mit einem Eintrag für jedes `data-*`-Attribut bereit.

> [!NOTE]
> Die `dataset`-Eigenschaft selbst kann gelesen, aber nicht direkt geschrieben werden.
> Stattdessen müssen alle Schreibvorgänge auf die einzelnen Eigenschaften innerhalb des
> `dataset` erfolgen, die wiederum die Datenattribute darstellen.

Ein HTML `data-*`-Attribut und sein entsprechendes DOM
`dataset.property` ändern ihren gemeinsamen Namen je nachdem, wo
sie gelesen oder geschrieben werden:

- In HTML
  - : Der Attributname beginnt mit `data-`. Er kann nur Buchstaben,
    Zahlen, Bindestriche (`-`), Punkte (`.`), Doppelpunkte (`:`)
    und Unterstriche (`_`) enthalten. Alle {{Glossary("ASCII", "ASCII")}}-Großbuchstaben (`A` bis `Z`) werden in Kleinbuchstaben umgewandelt.
- In JavaScript
  - : Der Eigenschaftsname eines benutzerdefinierten Datenattributs ist derselbe wie der HTML-Attributname
    ohne das `data-`-Präfix. Einzelne Bindestriche (`-`) werden entfernt, und das nächste ASCII-Zeichen
    nach einem entfernten Bindestrich wird großgeschrieben, um den camel-cased Eigenschaftsnamen zu bilden.

Details und Beispiele zur Umwandlung zwischen der HTML- und JavaScript-Form sind im nächsten Abschnitt näher beschrieben.

Zusätzlich zu den untenstehenden Informationen finden Sie eine Anleitung zur Verwendung von HTML-Datenattributen in unserem Artikel [_Verwendung von Datenattributen_](/de/docs/Web/HTML/How_to/Use_data_attributes).

### Namenskonvertierung

- Umwandlung von `dash-style` in `camelCase`

  - : Ein benutzerdefinierter Datenattributname wird in einen Schlüssel für den
    [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)-Eintrag durch Folgendes umgewandelt:

    1. Alle ASCII-Großbuchstaben (`A` bis `Z`) werden in Kleinbuchstaben umgewandelt;
    2. Entfernen des Präfixes `data-` (einschließlich des Bindestrichs);
    3. Bei jedem Bindestrich (`U+002D`) gefolgt von einem ASCII-Kleinbuchstaben
       `a` bis `z` wird der Bindestrich entfernt und der Buchstabe wird großgeschrieben;
    4. Andere Zeichen (einschließlich anderer Bindestriche) bleiben unverändert.

- Umwandlung von `camelCase` in `dash-style`

  - : Die entgegengesetzte Umwandlung, die einen Schlüssel in einen Attributnamen umwandelt, verwendet Folgendes:

    1. **Einschränkung:** Vor der Umwandlung darf ein Bindestrich _nicht_ unmittelbar von einem ASCII-Kleinbuchstaben `a` bis `z` gefolgt werden;
    2. Hinzufügen des Präfixes `data-`;
    3. Einen Bindestrich vor jedem ASCII-Großbuchstaben `A` bis `Z` hinzufügen,
       dann den Buchstaben in Kleinbuchstaben umwandeln;
    4. Andere Zeichen bleiben unverändert.

Zum Beispiel entspricht ein `data-abc-def`-Attribut
`dataset.abcDef`.

### Zugriff auf Werte

- Attribute können durch den camelCase Namen/Schlüssel als Objekteigenschaft des
  dataset gesetzt und gelesen werden: `element.dataset.keyname`.
- Attribute können auch durch Verwendung der Klammer-Syntax gesetzt und gelesen werden:
  `element.dataset['keyname']`.
- Der [`in` Operator](/de/docs/Web/JavaScript/Reference/Operators/in) kann überprüfen, ob ein gegebenes Attribut existiert:
  `'keyname' in element.dataset`. Beachten Sie, dass dies die [Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) von `dataset` durchläuft und möglicherweise unsicher ist, wenn fremder Code die Prototypkette beeinflussen kann. Es gibt mehrere Alternativen, wie zum Beispiel {{jsxref("Object/hasOwn", "Object.hasOwn(element.dataset, 'keyname')")}}, oder einfach zu überprüfen, ob `element.dataset.keyname !== undefined`.

### Werte Setzen

- Wenn das Attribut gesetzt wird, wird sein Wert immer in eine Zeichenkette umgewandelt.
  Beispielsweise wird `element.dataset.example = null` umgewandelt in `data-example="null"`.

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

- Die HTML [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*) Klasse
  von globalen Attributen
- [Verwendung von Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes)
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) und [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)

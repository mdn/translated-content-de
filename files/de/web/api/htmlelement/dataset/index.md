---
title: "HTMLElement: dataset Eigenschaft"
short-title: dataset
slug: Web/API/HTMLElement/dataset
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die **`dataset`** Lese-Schreibeigenschaft der {{DOMxRef("HTMLElement")}} Schnittstelle ermöglicht den Lese- und Schreibzugriff auf [benutzerdefinierte Datenattribute](/de/docs/Web/HTML/Global_attributes/data-*) (`data-*`) von Elementen. Sie stellt eine Zeichenfolgenkarte ({{domxref("DOMStringMap")}}) mit einem Eintrag für jedes `data-*` Attribut zur Verfügung.

> [!NOTE]
> Die `dataset` Eigenschaft selbst kann gelesen, aber nicht direkt beschrieben werden.
> Stattdessen müssen alle Schreiboperationen an den individuellen Eigenschaften innerhalb des
> `dataset` durchgeführt werden, die wiederum die Datenattribute repräsentieren.

Ein HTML `data-*` Attribut und sein entsprechendes DOM
`dataset.property` ändern ihren gemeinsamen Namen je nachdem, wo
sie gelesen oder beschrieben werden:

- In HTML
  - : Der Attributname beginnt mit `data-`. Er kann nur Buchstaben,
    Zahlen, Bindestriche (`-`), Punkte (`.`), Doppelpunkte (`:`),
    und Unterstriche (`_`) enthalten. Alle {{Glossary("ASCII")}} Großbuchstaben (`A` bis
    `Z`) werden in Kleinbuchstaben konvertiert.
- In JavaScript
  - : Der Name der Eigenschaft eines benutzerdefinierten Datenattributs ist derselbe wie das HTML-Attribut
    ohne das `data-` Präfix und entfernt Einzelbindestriche (`-`) für
    wenn der Name der Eigenschaft in "{{Glossary("camel_case", "camel-cased")}}" Form gebracht wird.

Zusätzlich zu den untenstehenden Informationen finden Sie in unserem Artikel [_Verwendung von Datenattributen_](/de/docs/Learn/HTML/Howto/Use_data_attributes) eine Anleitung zur Nutzung von HTML-Datenattributen.

### Namenskonvertierung

- Umwandlung von `dash-style` in `camelCase`

  - : Ein benutzerdefinierter Datenattributname wird in einen Schlüssel für den
    {{domxref("DOMStringMap") }} Eintrag durch Folgendes umgewandelt:

    1. Alle ASCII-Großbuchstaben (`A` bis
       `Z`) in Kleinbuchstaben umwandeln;
    2. Das Präfix `data-` (einschließlich des Bindestrichs) entfernen;
    3. Bei jedem Bindestrich (`U+002D`) gefolgt von einem ASCII-Kleinbuchstaben
       `a` bis `z`, den Bindestrich entfernen und den Buchstaben groß schreiben;
    4. Andere Zeichen (einschließlich anderer Bindestriche) bleiben unverändert.

- Umwandlung von `camelCase` in `dash-style`

  - : Die entgegengesetzte Umwandlung, bei der ein Schlüssel in einen Attributnamen umgewandelt wird, verwendet das
    Folgende:

    1. **Einschränkung:** Vor der Umwandlung darf ein Bindestrich nicht unmittelbar von einem ASCII-Kleinbuchstaben `a` bis
       `z` gefolgt werden;
    2. Das Präfix `data-` hinzufügen;
    3. Vor jedem ASCII-Großbuchstaben `A` bis `Z` einen Bindestrich hinzufügen,
       dann den Buchstaben in Kleinbuchstaben umwandeln;
    4. Andere Zeichen bleiben unverändert.

Zum Beispiel entspricht ein `data-abc-def` Attribut `dataset.abcDef`.

### Zugriff auf Werte

- Attribute können durch den `camelCase` Namen/Schlüssel als Objekteigenschaft des
  Datasets gesetzt und gelesen werden: `element.dataset.keyname`.
- Attribute können auch mit Klammer-Syntax gesetzt und gelesen werden:
  `element.dataset['keyname']`.
- Der [`in` Operator](/de/docs/Web/JavaScript/Reference/Operators/in) kann prüfen, ob ein bestimmtes Attribut existiert:
  `'keyname' in element.dataset`. Beachten Sie, dass dies die [Prototype-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) des `dataset` durchlaufen wird und unsicher sein kann, wenn Sie externen Code haben, der die Prototype-Kette verschmutzen könnte. Es gibt mehrere Alternativen, wie z.B. {{jsxref("Object/hasOwn", "Object.hasOwn(element.dataset, 'keyname')")}}, oder einfach zu prüfen, ob `element.dataset.keyname !== undefined`.

### Werte setzen

- Wenn das Attribut gesetzt ist, wird sein Wert immer in eine Zeichenfolge konvertiert.
  Zum Beispiel: `element.dataset.example = null` wird
  in `data-example="null"` umgewandelt.

- Um ein Attribut zu entfernen, können Sie den [`delete` Operator](/de/docs/Web/JavaScript/Reference/Operators/delete) verwenden: `delete element.dataset.keyname`.

## Wert

Ein {{domxref("DOMStringMap")}}.

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
- {{DOMxRef("Element.getAttribute()")}} und {{DOMxRef("Element.setAttribute()")}}

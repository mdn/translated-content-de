---
title: HTMLCollection
slug: Web/API/HTMLCollection
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

Die **`HTMLCollection`**-Schnittstelle repräsentiert eine generische Sammlung (Array-ähnliches Objekt ähnlich wie {{jsxref("Functions/arguments", "arguments")}}) von Elementen (in Dokumentreihenfolge) und bietet Methoden und Eigenschaften zum Auswählen aus der Liste.

Eine `HTMLCollection` im HTML-DOM ist live; sie wird automatisch aktualisiert, wenn das zugrunde liegende Dokument geändert wird. Aus diesem Grund ist es eine gute Idee, eine Kopie zu erstellen (z. B. mit {{jsxref("Array/from", "Array.from")}}), um darüber zu iterieren, falls Sie Knoten hinzufügen, verschieben oder entfernen.

Diese Schnittstelle wird aus historischen Gründen `HTMLCollection` genannt, da vor der modernen DOM-Implementierung Sammlungen, die diese Schnittstelle implementierten, nur HTML-Elemente als ihre Elemente haben konnten.

Diese Schnittstelle war ein [Versuch, eine nicht modifizierbare Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird nur weiterhin unterstützt, um Code nicht zu brechen, der sie bereits verwendet. Moderne APIs repräsentieren Listenstrukturen mit Typen, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, wodurch viele Array-Methoden verfügbar werden und gleichzeitig zusätzliche Semantiken für ihre Verwendung auferlegt werden (wie die Festlegung, dass ihre Elemente schreibgeschützt sind).

Diese historischen Gründe bedeuten nicht, dass Sie als Entwickler `HTMLCollection` vermeiden sollten. Sie erstellen `HTMLCollection`-Objekte nicht selbst, sondern erhalten sie von APIs wie [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName), und diese APIs sind nicht veraltet. Seien Sie jedoch vorsichtig mit den semantischen Unterschieden zu einem echten Array.

## Instanz-Eigenschaften

- [`HTMLCollection.length`](/de/docs/Web/API/HTMLCollection/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Elemente in der Sammlung zurück.

## Instanz-Methoden

- [`HTMLCollection.item()`](/de/docs/Web/API/HTMLCollection/item)

  - : Gibt das spezifische Element an der gegebenen nullbasierten `index`-Position in der Liste zurück. Gibt `null` zurück, wenn der `index` außerhalb des Bereichs liegt.

    Eine Alternative zum Zugriff auf `collection[i]` (was stattdessen `undefined` zurückgibt, wenn `i` außerhalb des Bereichs liegt). Dies ist hauptsächlich nützlich für nicht-JavaScript-DOM-Implementierungen.

- [`HTMLCollection.namedItem()`](/de/docs/Web/API/HTMLCollection/namedItem)

  - : Gibt den spezifischen Knoten zurück, dessen ID oder, falls dies nicht möglich ist, Name mit der durch `name` angegebenen Zeichenfolge übereinstimmt. Das Zuordnen nach Name erfolgt nur als letzter Ausweg, nur in HTML und nur, wenn das referenzierte Element das `name`-Attribut unterstützt. Gibt `null` zurück, wenn kein Knoten mit dem angegebenen Namen existiert.

    Eine Alternative zum Zugriff auf `collection[name]` (was stattdessen `undefined` zurückgibt, wenn `name` nicht existiert). Dies ist hauptsächlich nützlich für nicht-JavaScript-DOM-Implementierungen.

## Verwendung in JavaScript

`HTMLCollection` bietet auch Zugriff auf seine Mitglieder als Eigenschaften nach Namen und Index. HTML-IDs können `:` und `.` als gültige Zeichen enthalten, was die Verwendung der Klammernotation für den Eigenschaftszugriff erforderlich machen würde. Derzeit erkennt ein `HTMLCollection`-Objekt keine rein numerischen IDs, die zu einem Konflikt mit dem array-ähnlichen Zugriff führen würden, obwohl HTML diese erlaubt.

Zum Beispiel, angenommen es gibt ein `<form>`-Element im Dokument und seine `id` ist `myForm`:

```js
let elem1, elem2;

// document.forms is an HTMLCollection

elem1 = document.forms[0];
elem2 = document.forms.item(0);

alert(elem1 === elem2); // shows: "true"

elem1 = document.forms.myForm;
elem2 = document.forms.namedItem("myForm");

alert(elem1 === elem2); // shows: "true"

elem1 = document.forms["named.item.with.periods"];
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`NodeList`](/de/docs/Web/API/NodeList)
- [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection), [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)

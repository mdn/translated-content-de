---
title: HTMLCollection
slug: Web/API/HTMLCollection
l10n:
  sourceCommit: cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{APIRef("DOM")}}

Die Schnittstelle **`HTMLCollection`** repräsentiert eine generische Sammlung (ein array-ähnliches Objekt ähnlich wie {{jsxref("Functions/arguments", "arguments")}}) von Elementen (in Dokumentreihenfolge) und bietet Methoden und Eigenschaften zum Auswählen aus der Liste.

Eine `HTMLCollection` im HTML-DOM ist live; sie wird automatisch aktualisiert, wenn das zugrunde liegende Dokument geändert wird. Aus diesem Grund ist es eine gute Idee, eine Kopie zu erstellen (z. B. mit {{jsxref("Array/from", "Array.from")}}), um darüber zu iterieren, falls Knoten hinzugefügt, verschoben oder entfernt werden.

Diese Schnittstelle wird aus historischen Gründen `HTMLCollection` genannt, da vor dem modernen DOM Sammlungen, die diese Schnittstelle implementierten, nur HTML-Elemente als ihre Items haben konnten.

Diese Schnittstelle war ein [Versuch, eine unveränderliche Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird nur weiterhin unterstützt, um bestehenden Code nicht zu brechen, der sie bereits verwendet. Moderne APIs repräsentieren Listenstrukturen mit Typen, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, womit viele Array-Methoden verfügbar gemacht werden und gleichzeitig zusätzliche Semantiken für ihre Verwendung auferlegt werden (wie z. B. das Schreiben ihrer Items zu untersagen).

Diese historischen Gründe bedeuten nicht, dass Sie als Entwickler `HTMLCollection` vermeiden sollten. Sie erstellen `HTMLCollection`-Objekte nicht selbst, sondern erhalten sie von APIs wie [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName), und diese APIs sind nicht veraltet. Seien Sie jedoch vorsichtig bei den semantischen Unterschieden zu einem echten Array.

## Instanz-Eigenschaften

- [`HTMLCollection.length`](/de/docs/Web/API/HTMLCollection/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Items in der Sammlung zurück.

## Instanz-Methoden

- [`HTMLCollection.item()`](/de/docs/Web/API/HTMLCollection/item)

  - : Gibt das spezifische Element am angegebenen nullbasierten `index` in der Liste zurück. Gibt `null` zurück, wenn der `index` außerhalb des Bereichs liegt.

    Eine Alternative zum Zugreifen auf `collection[i]` (das stattdessen `undefined` zurückgibt, wenn `i` außerhalb des Bereichs liegt). Dies ist hauptsächlich für nicht-JavaScript-DOM-Implementierungen nützlich.

- [`HTMLCollection.namedItem()`](/de/docs/Web/API/HTMLCollection/namedItem)

  - : Gibt den spezifischen Knoten zurück, dessen ID oder, als Fallback, Name mit dem durch `name` angegebenen String übereinstimmt. Das Matching nach Namen wird nur als letzte Möglichkeit, nur in HTML und nur wenn das referenzierte Element das `name`-Attribut unterstützt, durchgeführt. Gibt `null` zurück, wenn kein Knoten mit dem angegebenen Namen existiert.

    Eine Alternative zum Zugreifen auf `collection[name]` (das stattdessen `undefined` zurückgibt, wenn `name` nicht existiert). Dies ist hauptsächlich für nicht-JavaScript-DOM-Implementierungen nützlich.

## Verwendung in JavaScript

`HTMLCollection` stellt seine Mitglieder auch als Eigenschaften nach Name und Index bereit. HTML-IDs können `:` und `.` als gültige Zeichen enthalten, was die Verwendung der Klammernotation zum Zugriff auf Eigenschaften erforderlich machen würde. Derzeit erkennt ein `HTMLCollection`-Objekt rein numerische IDs nicht, was zu einem Konflikt mit dem array-ähnlichen Zugriff führen würde, obwohl HTML diese zulässt.

Zum Beispiel, vorausgesetzt es gibt ein `<form>`-Element im Dokument und seine `id` ist `myForm`:

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

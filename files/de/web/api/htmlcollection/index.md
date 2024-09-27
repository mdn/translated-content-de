---
title: HTMLCollection
slug: Web/API/HTMLCollection
l10n:
  sourceCommit: cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{APIRef("DOM")}}

Das **`HTMLCollection`**-Interface repräsentiert eine generische Sammlung (ein array-ähnliches Objekt ähnlich dem {{jsxref("Functions/arguments", "arguments")}}) von Elementen (in Dokumentreihenfolge) und bietet Methoden und Eigenschaften zum Auswählen aus der Liste.

Eine `HTMLCollection` im HTML-DOM ist live; sie wird automatisch aktualisiert, wenn das zugrunde liegende Dokument geändert wird. Aus diesem Grund ist es eine gute Idee, eine Kopie zu erstellen (z. B. mit {{jsxref("Array/from", "Array.from")}}), um darüber zu iterieren, wenn Knoten hinzugefügt, verschoben oder entfernt werden.

Dieses Interface wird aus historischen Gründen als `HTMLCollection` bezeichnet, da Sammlungen, die dieses Interface implementieren, vor dem modernen DOM nur HTML-Elemente als ihre Elemente haben konnten.

Dieses Interface war ein [Versuch, eine unveränderliche Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird weiterhin unterstützt, um bestehenden Code nicht zu brechen, der es bereits verwendet. Moderne APIs repräsentieren Listenstrukturen mithilfe von Typen, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, wodurch viele Array-Methoden verfügbar gemacht werden, und gleichzeitig zusätzliche Semantiken für deren Verwendung auferlegen (wie beispielsweise, dass ihre Elemente schreibgeschützt sind).

Diese historischen Gründe bedeuten nicht, dass Sie als Entwickler `HTMLCollection` vermeiden sollten. Sie erstellen `HTMLCollection`-Objekte nicht selbst, sondern erhalten sie von APIs wie [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName), und diese APIs sind nicht veraltet. Seien Sie jedoch vorsichtig hinsichtlich der semantischen Unterschiede zu einem echten Array.

## Instanzeigenschaften

- [`HTMLCollection.length`](/de/docs/Web/API/HTMLCollection/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Elemente in der Sammlung zurück.

## Instanzmethoden

- [`HTMLCollection.item()`](/de/docs/Web/API/HTMLCollection/item)

  - : Gibt das spezifische Element an der gegebenen nullbasierten `index`-Position in der Liste zurück. Gibt `null` zurück, wenn der `index` außerhalb des Bereichs liegt.

    Eine Alternative zum Zugreifen über `collection[i]` (was stattdessen `undefined` zurückgibt, wenn `i` außerhalb des Bereichs liegt). Dies ist hauptsächlich für nicht-JavaScript-DOM-Implementierungen nützlich.

- [`HTMLCollection.namedItem()`](/de/docs/Web/API/HTMLCollection/namedItem)

  - : Gibt den spezifischen Knoten zurück, dessen ID oder, zur Not, Name dem durch `name` angegebenen String entspricht. Das Abgleichen nach Name erfolgt nur als letztes Mittel, nur in HTML, und nur, wenn das referenzierte Element das `name`-Attribut unterstützt. Gibt `null` zurück, wenn kein Knoten mit dem gegebenen Namen existiert.

    Eine Alternative zum Zugriff über `collection[name]` (was stattdessen `undefined` zurückgibt, wenn `name` nicht existiert). Dies ist hauptsächlich für nicht-JavaScript-DOM-Implementierungen nützlich.

## Verwendung in JavaScript

`HTMLCollection` macht seine Mitglieder auch als Eigenschaften nach Name und Index zugänglich. HTML-IDs können `:` und `.` als gültige Zeichen enthalten, was die Verwendung der Klammernotation für den Eigenschaftszugriff erforderlich machen würde. Derzeit erkennt ein `HTMLCollection`-Objekt keine rein numerischen IDs, was einen Konflikt mit dem Array-ähnlichen Zugriff verursachen würde, obwohl HTML diese erlaubt.

Zum Beispiel, angenommen es gibt ein `<form>`-Element im Dokument und dessen `id` ist `myForm`:

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

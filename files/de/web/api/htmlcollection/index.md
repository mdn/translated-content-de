---
title: HTMLSammlung
slug: Web/API/HTMLCollection
l10n:
  sourceCommit: cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{APIRef("DOM")}}

Die **`HTMLCollection`**-Schnittstelle repräsentiert eine generische Sammlung (array-ähnliches Objekt ähnlich wie {{jsxref("Functions/arguments", "arguments")}}) von Elementen (in Dokumentreihenfolge) und bietet Methoden und Eigenschaften zum Auswählen aus der Liste.

Eine `HTMLCollection` im HTML-DOM ist dynamisch; sie wird automatisch aktualisiert, wenn das zugrunde liegende Dokument verändert wird. Aus diesem Grund ist es ratsam, eine Kopie zu erstellen (z. B. mit {{jsxref("Array/from", "Array.from")}}), um darüber zu iterieren, falls Knoten hinzugefügt, verschoben oder entfernt werden.

Diese Schnittstelle wird aus historischen Gründen `HTMLCollection` genannt, da vor dem modernen DOM Sammlungen, die diese Schnittstelle implementierten, nur HTML-Elemente als ihre Elemente haben konnten.

Diese Schnittstelle war ein [Versuch, eine nicht-modifizierbare Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird weiterhin unterstützt, um bestehenden Code nicht zu brechen. Moderne APIs repräsentieren Listenstrukturen mit Typen, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, wodurch viele Array-Methoden verfügbar sind und zugleich zusätzliche Semantiken auf deren Verwendung auferlegt werden (wie das Festlegen, dass ihre Elemente schreibgeschützt sind).

Diese historischen Gründe bedeuten nicht, dass Entwickler `HTMLCollection` vermeiden sollten. Sie erstellen keine `HTMLCollection`-Objekte selbst, sondern erhalten sie von APIs wie {{domxref("Document.getElementsByClassName()")}}, und diese APIs sind nicht veraltet. Allerdings sollten Sie sich der semantischen Unterschiede zu einem echten Array bewusst sein.

## Instanzeigenschaften

- {{domxref("HTMLCollection.length")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Elemente in der Sammlung zurück.

## Instanzmethoden

- {{domxref("HTMLCollection.item()")}}

  - : Gibt das spezifische Element an dem gegebenen nullbasierten `index` in der Liste zurück. Gibt `null` zurück, wenn der `index` außerhalb des Bereichs liegt.

    Eine Alternative zum Zugriff auf `collection[i]` (was stattdessen `undefined` zurückgibt, wenn `i` außerhalb des Bereichs liegt). Dies ist hauptsächlich nützlich für Nicht-JavaScript-DOM-Implementierungen.

- {{domxref("HTMLCollection.namedItem()")}}

  - : Gibt den spezifischen Knoten zurück, dessen ID oder als Fallback Name mit dem durch `name` angegebenen Zeichenfolge übereinstimmt. Die Übereinstimmung nach Name erfolgt nur als letztes Mittel, nur in HTML und nur, wenn das referenzierte Element das `name`-Attribut unterstützt. Gibt `null` zurück, wenn kein Knoten mit dem angegebenen Namen existiert.

    Eine Alternative zum Zugriff auf `collection[name]` (was stattdessen `undefined` zurückgibt, wenn `name` nicht existiert). Dies ist hauptsächlich nützlich für Nicht-JavaScript-DOM-Implementierungen.

## Verwendung in JavaScript

`HTMLCollection` stellt seine Mitglieder auch als Eigenschaften nach Name und Index zur Verfügung. HTML-IDs dürfen `:` und `.` als gültige Zeichen enthalten, was die Verwendung von Klammernotation für den Eigenschaftszugriff erforderlich machen würde. Derzeit erkennt ein `HTMLCollection`-Objekt keine rein numerischen IDs, was einen Konflikt mit dem array-artigen Zugriff verursachen würde, obwohl HTML diese erlaubt.

Zum Beispiel, angenommen, es gibt ein `<form>`-Element im Dokument und seine `id` ist `myForm`:

```js
let elem1, elem2;

// document.forms ist eine HTMLCollection

elem1 = document.forms[0];
elem2 = document.forms.item(0);

alert(elem1 === elem2); // zeigt: "true"

elem1 = document.forms.myForm;
elem2 = document.forms.namedItem("myForm");

alert(elem1 === elem2); // zeigt: "true"

elem1 = document.forms["named.item.with.periods"];
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("NodeList")}}
- {{domxref("HTMLFormControlsCollection")}}, {{domxref("HTMLOptionsCollection")}}

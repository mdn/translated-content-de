---
title: "Dokumentation: getElementsByName() Methode"
short-title: getElementsByName()
slug: Web/API/Document/getElementsByName
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("DOM")}}

Die **`getElementsByName()`** Methode
des [`Document`](/de/docs/Web/API/Document) Objekts gibt eine [`NodeList`](/de/docs/Web/API/NodeList) Sammlung von
Elementen mit einem bestimmten `name` Attribut im Dokument zurück.

## Syntax

```js-nolint
getElementsByName(name)
```

### Parameter

- `name`
  - : Der Wert des `name` Attributs der Elemente, nach denen wir suchen.

### Rückgabewert

Eine dynamische [`NodeList`](/de/docs/Web/API/NodeList) Sammlung, was bedeutet, dass sie automatisch aktualisiert wird, wenn neue Elemente mit demselben `name` zum Dokument hinzugefügt oder daraus entfernt werden.

## Beispiele

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Example: using document.getElementsByName</title>
  </head>
  <body>
    <input type="hidden" name="up" />
    <input type="hidden" name="down" />
  </body>
</html>
```

```js
const upNames = document.getElementsByName("up");
console.log(upNames[0].tagName); // displays "INPUT"
```

## Hinweise

Das `name` Attribut kann nur in (X)HTML
Dokumenten angewendet werden.

Die zurückgegebene [`NodeList`](/de/docs/Web/API/NodeList) Sammlung enthält _alle_ Elemente mit dem
angegebenen `name`, wie z.B. {{htmlelement("meta")}}, {{htmlelement("object")}}, und
sogar Elemente, die das `name` Attribut überhaupt nicht unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) um eine Referenz auf ein Element anhand seiner
  eindeutigen `id` zurückzugeben
- [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName) um Referenzen auf Elemente mit
  demselben [Tag-Namen](/de/docs/Web/API/Element/tagName) zurückzugeben
- [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) um Referenzen auf Elemente mittels CSS
  Selektoren wie `'div.myclass'` zurückzugeben

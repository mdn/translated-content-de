---
title: "Dokument: getElementsByName()-Methode"
short-title: getElementsByName()
slug: Web/API/Document/getElementsByName
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

Die **`getElementsByName()`**-Methode
des {{domxref("Document")}}-Objekts gibt eine {{domxref("NodeList")}}-Sammlung von
Elementen mit einem bestimmten `name`-Attribut im Dokument zurück.

## Syntax

```js-nolint
getElementsByName(name)
```

### Parameter

- `name`
  - : Der Wert des `name`-Attributs der gesuchten Elemente.

### Rückgabewert

Eine dynamische {{domxref("NodeList")}}-Sammlung, was bedeutet, dass sie automatisch aktualisiert wird, wenn neue Elemente mit demselben `name` dem Dokument hinzugefügt oder daraus entfernt werden.

## Beispiele

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Beispiel: Verwendung von document.getElementsByName</title>
  </head>
  <body>
    <input type="hidden" name="up" />
    <input type="hidden" name="down" />
  </body>
</html>
```

```js
const up_names = document.getElementsByName("up");
console.log(up_names[0].tagName); // zeigt "INPUT" an
```

## Anmerkungen

Das `name`-Attribut kann nur in (X)HTML-Dokumenten angewendet werden.

Die zurückgegebene {{domxref("NodeList")}}-Sammlung enthält _alle_ Elemente mit dem
angegebenen `name`, wie {{htmlelement("meta")}}, {{htmlelement("object")}} und
sogar Elemente, die das `name`-Attribut überhaupt nicht unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("document.getElementById()")}} um eine Referenz zu einem Element anhand seiner
  eindeutigen `id` zurückzugeben
- {{domxref("document.getElementsByTagName()")}} um Referenzen zu Elementen mit
  demselben [Tag-Namen](/de/docs/Web/API/Element/tagName) zurückzugeben
- {{domxref("document.querySelector()")}} um Referenzen zu Elementen über CSS
  Selektoren wie `'div.myclass'` zurückzugeben

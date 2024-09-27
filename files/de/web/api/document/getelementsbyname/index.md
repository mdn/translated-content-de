---
title: "Document: Methode getElementsByName()"
short-title: getElementsByName()
slug: Web/API/Document/getElementsByName
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

Die **`getElementsByName()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Objekts gibt eine [`NodeList`](/de/docs/Web/API/NodeList)-Sammlung von Elementen mit einem gegebenen `name`-Attribut im Dokument zurück.

## Syntax

```js-nolint
getElementsByName(name)
```

### Parameter

- `name`
  - : Der Wert des `name`-Attributs des Elements bzw. der Elemente, die wir suchen.

### Rückgabewert

Eine dynamische [`NodeList`](/de/docs/Web/API/NodeList)-Sammlung, die sich automatisch aktualisiert, wenn neue Elemente mit demselben `name`-Attribut zum Dokument hinzugefügt oder daraus entfernt werden.

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
const up_names = document.getElementsByName("up");
console.log(up_names[0].tagName); // displays "INPUT"
```

## Hinweise

Das `name`-Attribut kann nur in (X)HTML-Dokumenten angewendet werden.

Die zurückgegebene [`NodeList`](/de/docs/Web/API/NodeList)-Sammlung enthält _alle_ Elemente mit dem angegebenen `name`, wie {{htmlelement("meta")}}, {{htmlelement("object")}} und sogar Elemente, die das `name`-Attribut überhaupt nicht unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.getElementById()`](/de/docs/Web/API/Document/getElementById), um eine Referenz zu einem Element mit einer eindeutigen `id` zurückzugeben
- [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), um Referenzen zu Elementen mit demselben [Tag-Namen](/de/docs/Web/API/Element/tagName) zurückzugeben
- [`document.querySelector()`](/de/docs/Web/API/Document/querySelector), um Referenzen zu Elementen über CSS-Selektoren wie `'div.myclass'` zurückzugeben

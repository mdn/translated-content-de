---
title: "Element: setAttributeNS() Methode"
short-title: setAttributeNS()
slug: Web/API/Element/setAttributeNS
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("DOM") }}

`setAttributeNS` fügt ein neues Attribut hinzu oder ändert den Wert eines Attributs mit dem angegebenen Namespace und Namen.

Wenn Sie mit HTML-Dokumenten arbeiten und das angeforderte Attribut nicht als Teil eines bestimmten Namespace angeben müssen, verwenden Sie stattdessen die [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) Methode.

## Syntax

```js-nolint
setAttributeNS(namespace, name, value)
```

### Parameter

- `namespace`
  - : Ein String, der den Namespace des Attributs angibt.
- `name`
  - : Ein String, der das Attribut mit seinem qualifizierten Namen identifiziert, also ein Namespace-Prefix gefolgt von einem Doppelpunkt und einem lokalen Namen.
- `value`
  - : Der gewünschte String-Wert des neuen Attributs.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
let d = document.getElementById("d1");
d.setAttributeNS(
  "http://www.mozilla.org/ns/specialspace",
  "spec:align",
  "center",
);
```

## Hinweise

`setAttributeNS` ist die einzige Methode für Namespaced-Attribute, die den voll qualifizierten Namen erwartet, d.h. `"namespace:localname"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)
- [`Element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS)
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)

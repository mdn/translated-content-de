---
title: "Element: setAttributeNS() Methode"
short-title: setAttributeNS()
slug: Web/API/Element/setAttributeNS
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{ APIRef("DOM") }}

`setAttributeNS` fügt ein neues Attribut hinzu oder ändert den Wert eines Attributs
mit dem angegebenen Namensraum und Namen.

Wenn Sie mit HTML-Dokumenten arbeiten und das angeforderte Attribut nicht als Teil eines bestimmten Namensraums angeben müssen, verwenden Sie stattdessen die [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) Methode.

## Syntax

```js-nolint
setAttributeNS(namespace, name, value)
```

### Parameter

- `namespace`
  - : Ein String, der den Namensraum des Attributs spezifiziert.
- `name`
  - : Ein String, der das Attribut durch seinen qualifizierten Namen identifiziert;
    das heißt, ein Namensraum-Präfix gefolgt von einem Doppelpunkt und einem lokalen Namen.
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

## Anmerkungen

`setAttributeNS` ist die einzige Methode für attributierte Namensräume, die den voll qualifizierten Namen erwartet, d.h. `"namespace:local-name"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)
- [`Element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS)
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)

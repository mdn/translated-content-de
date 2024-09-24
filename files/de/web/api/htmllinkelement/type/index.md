---
title: "HTMLLinkElement: type Eigenschaft"
short-title: type
slug: Web/API/HTMLLinkElement/type
l10n:
  sourceCommit: 1a790d83cbfcd76ac05a1b18697597f8d110d2cf
---

{{APIRef("HTML DOM")}}

Die **`type`**-Eigenschaft der {{domxref("HTMLLinkElement")}}-Schnittstelle ist ein String, der den {{glossary("MIME-Typ")}} der verknüpften Ressource widerspiegelt.

Sie spiegelt das `type`-Attribut des {{HTMLElement("link")}}-Elements wider.

## Wert

Ein String, der ein gültiger MIME-Typ-String sein muss.

## Beispiele

```html
<link
  id="el"
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

```js
const el = document.getElementById("el");
console.log(el.type); // Ausgabe: "image/png"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

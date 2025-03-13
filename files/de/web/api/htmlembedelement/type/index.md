---
title: "HTMLEmbedElement: type Eigenschaft"
short-title: type
slug: Web/API/HTMLEmbedElement/type
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("HTML DOM")}}

Die **`type`**-Eigenschaft der [`HTMLEmbedElement`](/de/docs/Web/API/HTMLEmbedElement)-Schnittstelle gibt einen String zurück, der das `type`-Attribut des {{HTMLElement("embed")}}-Elements widerspiegelt und den {{Glossary("MIME_type", "MIME-Typ")}} der Ressource angibt. Es spiegelt das [`type`](/de/docs/Web/HTML/Element/embed#type)-Attribut des {{htmlelement("embed")}}-Elements wider.

## Wert

Ein String; der MIME-Typ der Ressource.

## Beispiele

```js
const el = document.getElementById("el");
console.log(el.type); // Output: "video/webp"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLObjectElement.type`](/de/docs/Web/API/HTMLObjectElement/type)
- [`HTMLSourceElement.type`](/de/docs/Web/API/HTMLSourceElement/type)
- [Medientypen, die im Web zu finden sind](/de/docs/Web/Media/Guides/Formats)
- [Wichtige MIME-Typen für Webentwickler](/de/docs/Web/HTTP/Guides/MIME_types#important_mime_types_for_web_developers)

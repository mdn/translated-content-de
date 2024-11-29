---
title: "HTMLEmbedElement: type-Eigenschaft"
short-title: type
slug: Web/API/HTMLEmbedElement/type
l10n:
  sourceCommit: 64088e3a95e2cc9c8cf44d1338d0be21f1fadfed
---

{{APIRef("HTML DOM")}}

Die **`type`**-Eigenschaft der [`HTMLEmbedElement`](/de/docs/Web/API/HTMLEmbedElement)-Schnittstelle gibt einen String zurück, der das `type`-Attribut des {{HTMLElement("embed")}}-Elements widerspiegelt und den {{Glossary("MIME_type", "MIME-Typ")}} der Ressource angibt. Sie spiegelt das [`type`](/de/docs/Web/HTML/Element/embed#type)-Attribut des {{htmlelement("embed")}}-Elements wider.

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
- [Medientypen im Web](/de/docs/Web/Media/Formats)
- [Wichtige MIME-Typen für Webentwickler](/de/docs/Web/HTTP/MIME_types#important_mime_types_for_web_developers)

---
title: "HTMLFormElement: enctype-Eigenschaft"
short-title: enctype
slug: Web/API/HTMLFormElement/enctype
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement.enctype`**-Eigenschaft ist der {{Glossary("MIME_type", "MIME-Typ")}} des Inhalts, der verwendet wird, um das Formular an den Server zu senden. Mögliche Werte sind:

- `application/x-www-form-urlencoded`: Der anfängliche Standardtyp.
- `multipart/form-data`: Der Typ, der es ermöglicht, dass {{HTMLElement("input")}}-Element(e) Dateidaten hochladen.
- `text/plain`: Ein zweideutiges Format, dessen menschenlesbarer Inhalt nicht zuverlässig von einem Computer interpretierbar ist.

Dieser Wert kann durch ein [`formenctype`](/de/docs/Web/HTML/Reference/Elements/button#formenctype)-Attribut auf einem {{HTMLElement("button")}}- oder {{HTMLElement("input")}}-Element überschrieben werden.

## Wert

Ein String.

## Beispiele

```js
form.enctype = "application/x-www-form-urlencoded";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

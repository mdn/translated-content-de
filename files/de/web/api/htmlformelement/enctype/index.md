---
title: "HTMLFormElement: enctype-Eigenschaft"
short-title: enctype
slug: Web/API/HTMLFormElement/enctype
l10n:
  sourceCommit: 0487fb66d2d9a151d11f420e3ee794ac594bc881
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement.enctype`**-Eigenschaft ist der [MIME-Typ](/de/docs/Glossary/MIME_type) von Inhalten, die verwendet werden
um das Formular an den Server zu senden. Mögliche Werte sind:

- `application/x-www-form-urlencoded`: Der anfängliche Standardtyp.
- `multipart/form-data`: Der Typ, der das Hochladen von Dateidaten über {{HTMLElement("input")}}-
  Element(e) ermöglicht.
- `text/plain`: Mehrdeutiges Format, menschenlesbarer Inhalt, der von Computern nicht zuverlässig interpretierbar ist.

Dieser Wert kann durch ein [`formenctype`](/de/docs/Web/HTML/Element/button#formenctype)-Attribut
auf einem {{HTMLElement("button")}} oder {{HTMLElement("input")}}-Element überschrieben werden.

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

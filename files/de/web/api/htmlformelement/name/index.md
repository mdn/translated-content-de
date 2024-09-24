---
title: "HTMLFormElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLFormElement/name
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`HTMLFormElement.name`**-Eigenschaft repräsentiert den Namen des aktuellen {{HtmlElement("form")}}-Elements als Zeichenkette.

Wenn Ihr {{HTMLElement("Form")}}-Element ein Element mit dem Namen _name_ enthält, dann überschreibt dieses Element die `form.name`-Eigenschaft, sodass Sie keinen Zugriff darauf haben.

## Wert

Eine Zeichenkette.

## Beispiele

```js
const form1name = document.getElementById("form1").name;

if (form1name !== document.form.form1) {
  // Der Browser unterstützt diese Form der Referenzierung nicht
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

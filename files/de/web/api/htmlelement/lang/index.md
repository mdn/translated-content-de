---
title: "HTMLElement: lang-Eigenschaft"
short-title: lang
slug: Web/API/HTMLElement/lang
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

Die **`HTMLElement.lang`**-Eigenschaft holt oder setzt die Basissprache der Attributwerte und des Textinhalts eines Elements.

Der von dieser Eigenschaft zurückgegebene Sprachcode ist in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert. Häufige Beispiele sind "en" für Englisch, "ja" für Japanisch, "es" für Spanisch und so weiter. Der Standardwert dieses Attributs ist `unknown`. Beachten Sie, dass dieses Attribut, obwohl es auf der hier beschriebenen Ebene individueller Elemente gültig ist, am häufigsten für das Wurzelelement des Dokuments angegeben wird.

Dies funktioniert auch nur mit dem `lang`-Attribut und nicht mit `xml:lang`.

## Wert

Ein String.

## Beispiele

```js
// this snippet compares the base language and
// redirects to another URL based on language
if (document.documentElement.lang === "en") {
  window.location.href = "Some_document.html.en";
} else if (document.documentElement.lang === "ru") {
  window.location.href = "Some_document.html.ru";
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

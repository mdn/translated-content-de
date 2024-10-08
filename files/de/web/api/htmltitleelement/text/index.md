---
title: "HTMLTitleElement: text-Eigenschaft"
short-title: text
slug: Web/API/HTMLTitleElement/text
l10n:
  sourceCommit: 7cc15fff0f1284ece460597b9717ca20350a1fa9
---

{{APIRef("HTML DOM")}}

Die **`text`**-Eigenschaft des [`HTMLTitleElement`](/de/docs/Web/API/HTMLTitleElement)-Interfaces repräsentiert den Text des Dokuments-Titels. Es wird nur der Textteil einbezogen; Tags innerhalb des Elements und deren Inhalte werden entfernt und ignoriert.

## Wert

Ein String.

## Beispiele

Betrachten Sie das folgende Beispiel:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <title>
      Hello world! <span class="highlight">Isn't this wonderful</span> really?
    </title>
  </head>
  <body></body>
</html>
```

```js
const title = document.querySelector("title");
console.log(title.text); // yield: "Hello world!  really?"
```

Wie Sie sehen können, wurden das `span`-Tag und sein Inhalt übersprungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: "HTMLTitleElement: text-Eigenschaft"
short-title: text
slug: Web/API/HTMLTitleElement/text
l10n:
  sourceCommit: 396bda9a41c74e0c58dfa235d2c17b706677dc29
---

{{APIRef("HTML DOM")}}

Die **`text`**-Eigenschaft des [`HTMLTitleElement`](/de/docs/Web/API/HTMLTitleElement)-Interfaces repräsentiert den Textinhalt des Dokumenttitels als String. Sie enthält den Inhalt des {{HTMLelement("title")}}-Elements als Text; wenn HTML-Tags innerhalb des `<title>`-Elements enthalten sind, werden sie als Teil des String-Werts einbezogen und nicht als HTML geparst.

Das Setzen eines Werts für die `text`-Eigenschaft ersetzt den gesamten Textinhalt des `<title>`.

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
console.log(title.text); // "Hello world! <span class="highlight">Isn't this wonderful</span> really?"
title.text = "Update the title";
```

Wie Sie sehen können, blieb das `span`-Tag ungeparst; der Inhalt des `<title>`-Elements wurde als Nur-Text behandelt und genau so zurückgegeben, wie er im `title`-Element erscheint.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

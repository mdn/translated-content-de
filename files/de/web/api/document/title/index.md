---
title: "Document: title-Eigenschaft"
short-title: title
slug: Web/API/Document/title
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

Die **`document.title`**-Eigenschaft ruft den aktuellen Titel des Dokuments ab oder setzt ihn. Wenn vorhanden, entspricht sie standardmäßig dem Wert des [`<title>`](/de/docs/Web/HTML/Element/title).

## Wert

Ein String, der den Titel des _Dokuments_ enthält. Wenn der Titel durch das Setzen von `document.title` überschrieben wurde, enthält er diesen Wert. Andernfalls enthält er den Titel, der im [`<title>`](/de/docs/Web/HTML/Element/title)-Element angegeben ist.

```js
document.title = newTitle;
```

`newTitle` ist der neue Titel des Dokuments. Die Zuweisung wirkt sich auf den Rückgabewert von `document.title` aus, auf den angezeigten Titel des Dokuments (z. B. in der Titelleiste des Fensters oder Tabs) und es wirkt sich auch auf das DOM des Dokuments aus (z. B. den Inhalt des `<title>`-Elements in einem HTML-Dokument).

## Beispiele

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Hello World!</title>
  </head>
  <body>
    <script>
      alert(document.title); // displays "Hello World!"
      document.title = "Goodbye World!";
      alert(document.title); // displays "Goodbye World!"
    </script>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

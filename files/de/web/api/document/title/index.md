---
title: "Dokument: title-Eigenschaft"
short-title: title
slug: Web/API/Document/title
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("DOM")}}

Die **`document.title`**-Eigenschaft ruft den aktuellen Titel des Dokuments ab oder setzt ihn. Wenn vorhanden, entspricht sie standardmäßig dem Wert des [`<title>`](/de/docs/Web/HTML/Reference/Elements/title).

## Wert

Ein String, der den Titel des _Dokuments_ enthält. Wenn der Titel durch Setzen von `document.title` überschrieben wurde, enthält er diesen Wert. Andernfalls enthält er den im [`<title>`](/de/docs/Web/HTML/Reference/Elements/title)-Element angegebenen Titel.

```js
document.title = newTitle;
```

`newTitle` ist der neue Titel des Dokuments. Die Zuweisung beeinflusst den Rückgabewert von `document.title`, den für das Dokument angezeigten Titel (z.B. in der Titelleiste des Fensters oder Tabs), und sie beeinflusst auch das DOM des Dokuments (z.B. den Inhalt des `<title>`-Elements in einem HTML-Dokument).

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

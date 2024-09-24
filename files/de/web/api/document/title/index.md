---
title: "Dokument: title-Eigenschaft"
short-title: title
slug: Web/API/Document/title
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

Die **`document.title`**-Eigenschaft ruft den aktuellen Titel des Dokuments ab oder setzt ihn.
Standardmäßig entspricht sie dem Wert des [`<title>`](/de/docs/Web/HTML/Element/title)-Elements, falls vorhanden.

## Wert

Ein String, der den Titel des _Dokuments_ enthält. Wenn der Titel durch das Setzen von `document.title` überschrieben wurde, enthält er diesen Wert. Andernfalls enthält er den im [`<title>`](/de/docs/Web/HTML/Element/title)-Element angegebenen Titel.

```js
document.title = newTitle;
```

`newTitle` ist der neue Titel des Dokuments. Die Zuweisung beeinflusst den Rückgabewert von `document.title`, den angezeigten Titel des Dokuments (z.B. im Titelleisten-Fenster oder -Tab) und auch das DOM des Dokuments (z.B. den Inhalt des `<title>`-Elements in einem HTML-Dokument).

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
      alert(document.title); // zeigt "Hello World!" an
      document.title = "Goodbye World!";
      alert(document.title); // zeigt "Goodbye World!" an
    </script>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

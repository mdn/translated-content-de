---
title: "Dokument: title-Eigenschaft"
short-title: title
slug: Web/API/Document/title
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

Die **`document.title`**-Eigenschaft ruft den aktuellen Titel des Dokuments ab oder setzt ihn.
Wenn vorhanden, wird standardmäßig der Wert des [`<title>`](/de/docs/Web/HTML/Reference/Elements/title)-Elements verwendet.

## Wert

Ein String, der den Titel des _Dokuments_ enthält. Falls der Titel durch die Festlegung von `document.title` überschrieben wurde, enthält er diesen Wert. Andernfalls enthält er den im [`<title>`](/de/docs/Web/HTML/Reference/Elements/title)-Element angegebenen Titel.

```js
document.title = newTitle;
```

`newTitle` ist der neue Titel des Dokuments. Die Zuordnung beeinflusst den Rückgabewert von `document.title`, den für das Dokument angezeigten Titel (z.B. in der Titelleiste des Fensters oder Tabs) und es beeinflusst auch das DOM des Dokuments (z.B. den Inhalt des `<title>`-Elements in einem HTML-Dokument).

## Beispiele

Angenommen, der `<head>` des Dokuments sieht folgendermaßen aus:

```html
<head>
  <meta charset="UTF-8" />
  <title>Hello World!</title>
</head>
```

```js
console.log(document.title); // "Hello World!"
document.title = "Goodbye World!"; // Page title changed
console.log(document.title); // "Goodbye World!"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: "Document: location-Eigenschaft"
short-title: location
slug: Web/API/Document/location
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`Document.location`** schreibgeschützte Eigenschaft gibt ein
[`Location`](/de/docs/Web/API/Location)-Objekt zurück, das Informationen über die URL des Dokuments enthält und Methoden bietet, um diese URL zu ändern und eine andere URL zu laden.

Obwohl `Document.location` ein _schreibgeschütztes_ `Location`
Objekt ist, können Sie ihm auch einen String zuweisen. Dies bedeutet, dass Sie mit document.location in den meisten Fällen arbeiten können, als ob es sich um einen String handeln würde: `document.location = 'http://www.example.com'` ist ein Synonym für
`document.location.href = 'http://www.example.com'`. Wenn Sie ihm einen anderen
String zuweisen, wird der Browser die zugewiesene Webseite laden.

Um nur die URL als String abzurufen, kann auch die schreibgeschützte [`document.URL`](/de/docs/Web/API/Document/URL)
Eigenschaft verwendet werden.

Wenn sich das aktuelle Dokument nicht in einem Browsing-Kontext befindet, ist der zurückgegebene Wert
`null`.

## Wert

Ein [`Location`](/de/docs/Web/API/Location)-Objekt.

## Beispiele

```js
console.log(document.location);
// Prints a Location object to the console
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle des zurückgegebenen Wertes, [`Location`](/de/docs/Web/API/Location)
- Ähnliche Informationen, jedoch im Zusammenhang mit dem [Browsing-Kontext](/de/docs/Glossary/browsing_context),
  [`Window.location`](/de/docs/Web/API/Window/location)

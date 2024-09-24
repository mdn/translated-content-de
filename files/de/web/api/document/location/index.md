---
title: "Dokument: location-Eigenschaft"
short-title: location
slug: Web/API/Document/location
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`Document.location`** schreibgeschützte Eigenschaft gibt ein
{{domxref("Location")}}-Objekt zurück, das Informationen über die URL des Dokuments enthält und Methoden zum Ändern dieser URL und zum Laden einer anderen URL bietet.

Obwohl `Document.location` ein _schreibgeschütztes_ `Location`-Objekt ist, können Sie ihm auch einen String zuweisen. Das bedeutet, dass Sie in den meisten Fällen mit `document.location` arbeiten können, als wäre es ein String: `document.location = 'http://www.example.com'` ist ein Synonym für `document.location.href = 'http://www.example.com'`. Wenn Sie ihm einen anderen String zuweisen, lädt der Browser die von Ihnen angegebene Website.

Um nur die URL als String abzurufen, kann auch die schreibgeschützte {{domxref("document.URL")}}-Eigenschaft verwendet werden.

Wenn sich das aktuelle Dokument nicht in einem Browsing-Kontext befindet, ist der zurückgegebene Wert `null`.

## Wert

Ein {{domxref("Location")}}-Objekt.

## Beispiele

```js
console.log(document.location);
// Gibt ein Location-Objekt in der Konsole aus
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Die Schnittstelle des zurückgegebenen Werts, {{domxref("Location")}}
- Eine ähnliche Information, jedoch an den {{Glossary("browsing context")}} angehängt,
  {{domxref("Window.location")}}

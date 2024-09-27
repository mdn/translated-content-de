---
title: "Location: href-Eigenschaft"
short-title: href
slug: Web/API/Location/href
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{ApiRef("Location")}}

Die **`href`**-Eigenschaft der [`Location`](/de/docs/Web/API/Location)
Schnittstelle ist ein [stringifier](/de/docs/Glossary/stringifier), der einen String zurückgibt, der die gesamte URL enthält, und erlaubt es, das href zu aktualisieren.

Das Setzen des Wertes von `href` navigiert zur angegebenen URL. Wenn Sie eine _Umleitung_ wünschen, verwenden Sie [`location.replace()`](/de/docs/Web/API/Location/replace). Der Unterschied zum Setzen des Wertes der `href`-Eigenschaft besteht darin, dass bei Verwendung der `location.replace()`-Methode nach der Navigation zur angegebenen URL die aktuelle Seite nicht im Sitzungsverlauf ([History](/de/docs/Web/API/History_API)) gespeichert wird — das bedeutet, der Benutzer kann nicht mit der Zurück-Schaltfläche darauf navigieren.

## Wert

Ein String.

## Beispiele

```js
// Lets imagine an <a id="myAnchor" href="https://developer.mozilla.org/en-US/Location/href"> element is in the document
const anchor = document.getElementById("myAnchor");
const result = anchor.href; // Returns: 'https://developer.mozilla.org/en-US/Location/href'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

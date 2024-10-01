---
title: "Location: href-Eigenschaft"
short-title: href
slug: Web/API/Location/href
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{ApiRef("Location")}}

Die **`href`**-Eigenschaft des [`Location`](/de/docs/Web/API/Location)
Interfaces ist ein {{Glossary("stringifier", "Stringifier")}}, der einen String mit der gesamten
URL zurückgibt und es ermöglicht, das `href` zu aktualisieren.

Das Setzen des Werts von `href` _navigiert_ zur angegebenen URL. Wenn Sie eine _Weiterleitung_ wünschen, verwenden Sie [`location.replace()`](/de/docs/Web/API/Location/replace). Der Unterschied zum Setzen des `href`-Eigenschaftswertes besteht darin, dass beim Verwenden der `location.replace()`-Methode nach der Navigation zur angegebenen URL die aktuelle Seite nicht im Sitzungs-[Verlauf](/de/docs/Web/API/History_API) gespeichert wird – das bedeutet, dass der Benutzer nicht die Zurück-Taste verwenden kann, um zu dieser Seite zurückzukehren.

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

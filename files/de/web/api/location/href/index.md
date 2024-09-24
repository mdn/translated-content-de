---
title: "Location: href-Eigenschaft"
short-title: href
slug: Web/API/Location/href
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{ApiRef("Location")}}

Die **`href`**-Eigenschaft des {{domxref("Location")}}-Interfaces ist ein {{Glossary("stringifier")}}, der einen String mit der gesamten URL zurückgibt und es ermöglicht, das href zu aktualisieren.

Das Setzen des `href`-Werts führt zur Navigation zur angegebenen URL. Wenn Sie eine _Weiterleitung_ wünschen, verwenden Sie {{domxref("Location/replace","location.replace()")}}. Der Unterschied zur Festlegung des `href`-Eigenschaftswerts besteht darin, dass beim Verwenden der `location.replace()`-Methode die aktuelle Seite nach der Navigation zur angegebenen URL nicht im Sitzungsverlauf [history](/de/docs/Web/API/History_API) gespeichert wird — was bedeutet, dass der Benutzer nicht mit der Zurück-Taste dorthin navigieren kann.

## Wert

Ein String.

## Beispiele

```js
// Stellen Sie sich ein <a id="myAnchor" href="https://developer.mozilla.org/en-US/Location/href"> Element im Dokument vor
const anchor = document.getElementById("myAnchor");
const result = anchor.href; // Gibt zurück: 'https://developer.mozilla.org/en-US/Location/href'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

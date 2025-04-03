---
title: "Navigator: doNotTrack-Eigenschaft"
short-title: doNotTrack
slug: Web/API/Navigator/doNotTrack
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ApiRef("HTML DOM")}}{{Deprecated_header}}{{non-standard_header}}

Die **`Navigator.doNotTrack`**-Eigenschaft gibt die Do Not Track-Einstellung des Nutzers zurück, die anzeigt, ob der Nutzer von Websites und Werbeanbietern verlangt, sie nicht zu verfolgen.

Der Wert der Eigenschaft spiegelt den des {{httpheader("DNT")}} HTTP-Headers wider, d.h. die Werte können `"1"`, `"0"` oder `null` sein.

Die gesamte DNT (Do Not Track)-Spezifikation wurde eingestellt. Das Design des Mechanismus war fehlerhaft, da es sich um eine kooperative Funktion zwischen Nutzern, Websites und Browsern handelte. Die Idee war, dass der Nutzer der _Website_ mitteilt, sie nicht zu verfolgen, und die _Website_ würde dem nachkommen. Allerdings gibt es keine strikte Durchsetzung dieser Richtlinie, weshalb Werbe-Websites den DNT-Header ignorierten und die Nutzer dennoch verfolgten. Die Funktion ist daher nutzlos. Darüber hinaus ist sie schädlich, da sie im Header mehr {{Glossary("Fingerprinting", "Benutzer-Fingerabdrücke")}} hinterlässt, die genutzt werden können, um Nutzer noch mehr zu verfolgen.

Browser erkunden andere, besser durchsetzbare Datenschutzfunktionen, wie zum Beispiel [globale Datenschutzkontrolle](/de/docs/Web/API/Navigator/globalPrivacyControl), Einschränkungen bei Drittanbieter-Cookies und mehr.

## Wert

Ein String oder `null`.

## Beispiele

```js
console.log(navigator.doNotTrack);
// prints "1" if DNT is enabled; "0" if the user opted-in for tracking; otherwise null
```

## Spezifikationen

Teil der eingestellten [Tracking Preference Expression (DNT)](https://www.w3.org/TR/tracking-dnt/#dom-navigator-donottrack)-Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("DNT")}} HTTP-Header

---
title: "Navigator: doNotTrack-Eigenschaft"
short-title: doNotTrack
slug: Web/API/Navigator/doNotTrack
l10n:
  sourceCommit: 7b9ee8ab596eba10b320d0743ceefbbe1a98d250
---

{{ApiRef("HTML DOM")}}{{Deprecated_header}}{{non-standard_header}}

Die **`Navigator.doNotTrack`**-Eigenschaft gibt die Do Not Track-Einstellung des Benutzers zurück, die angibt, ob der Benutzer Websites und Werbetreibende auffordert, ihn nicht zu verfolgen.

Der Wert der Eigenschaft spiegelt den des {{httpheader("DNT")}} HTTP-Headers wider, d.h. Werte von `"1"`, `"0"` oder `null`.

Die gesamte DNT (Do Not Track)-Spezifikation wurde eingestellt. Das Design des Mechanismus war fehlerhaft, da es ein kooperatives Merkmal zwischen Benutzern, Websites und Browsern war. Die Idee war, dass der Benutzer der _Website_ mitteilt, ihn nicht zu verfolgen, und die _Website_ dem zustimmen würde. Es gibt jedoch keine strikte Durchsetzung dieser Richtlinie, sodass Werbe-Websites den DNT-Header ignorierten und Benutzer dennoch verfolgten. Das Merkmal ist daher nutzlos. Darüber hinaus ist es schädlich, da es mehr Benutzer-[Fingerabdruck](/de/docs/Glossary/Fingerprinting) im Header hinterlässt, der verwendet werden kann, um Benutzer noch mehr zu verfolgen.

Browser erforschen andere durchsetzbare Datenschutzfunktionen, wie z.B. [global privacy control](/de/docs/Web/API/Navigator/globalPrivacyControl), Einschränkungen bei Drittanbieter-Cookies und mehr.

## Wert

Ein String oder `null`.

## Beispiele

```js
console.log(navigator.doNotTrack);
// prints "1" if DNT is enabled; "0" if the user opted-in for tracking; otherwise null
```

## Spezifikationen

Teil der eingestellten [Tracking Preference Expression (DNT)](https://www.w3.org/TR/tracking-dnt/#dom-navigator-donottrack) Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("DNT")}} HTTP-Header

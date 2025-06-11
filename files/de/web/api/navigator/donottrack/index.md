---
title: "Navigator: doNotTrack-Eigenschaft"
short-title: doNotTrack
slug: Web/API/Navigator/doNotTrack
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{ApiRef("HTML DOM")}}{{Deprecated_header}}{{non-standard_header}}

Die **`Navigator.doNotTrack`**-Eigenschaft gibt die Do Not Track-Einstellung des Benutzers zurück, die angibt, ob der Benutzer Websites und Werbeanbieter darum bittet, ihn nicht zu verfolgen.

Der Wert der Eigenschaft entspricht dem des {{httpheader("DNT")}} HTTP-Headers, d.h. Werte von `"1"`, `"0"` oder `null`.

Die gesamte DNT (Do Not Track)-Spezifikation wurde eingestellt. Das Design des Mechanismus war fehlerhaft, da es sich um ein kooperatives Feature zwischen Benutzern, Websites und Browsern handelte. Die Idee ist, dass der Benutzer der _Website_ mitteilt, ihn nicht zu verfolgen, und die _Website_ dem zustimmt. Allerdings gibt es keine strenge Durchsetzung dieser Richtlinie, sodass Werbewebsites die DNT-Header ignorierten und Benutzer dennoch verfolgten. Das Feature ist daher nutzlos. Zudem ist es schädlich, da es mehr Benutzer-{{Glossary("Fingerprinting", "Fingerabdrücke")}} im Header hinterlässt, die zur weiteren Verfolgung der Benutzer verwendet werden können.

Browser erforschen derzeit andere, besser durchsetzbare Datenschutzfunktionen, wie z. B. die [globale Datenschutzkontrolle](/de/docs/Web/API/Navigator/globalPrivacyControl), Beschränkungen für Cookies von Drittanbietern und mehr.

## Wert

Ein String oder `null`.

## Beispiele

```js
console.log(navigator.doNotTrack);
// prints "1" if DNT is enabled; "0" if the user opted-in for tracking; otherwise null
```

## Spezifikationen

Teil der eingestellten [Tracking Preference Expression (DNT)](https://w3c.github.io/dnt/drafts/tracking-dnt.html#dom-navigator-donottrack)-Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("DNT")}} HTTP-Header

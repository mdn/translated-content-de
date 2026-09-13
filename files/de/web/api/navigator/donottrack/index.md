---
title: "Navigator: doNotTrack-Eigenschaft"
short-title: doNotTrack
slug: Web/API/Navigator/doNotTrack
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ApiRef("HTML DOM")}}{{non-standard_header}}

Die **`Navigator.doNotTrack`**-Eigenschaft gibt die Einstellung "Do Not Track" des Benutzers zurück, welche angibt, ob der Benutzer von Webseiten und Werbetreibenden nicht verfolgt werden möchte.

Der Wert der Eigenschaft spiegelt den des {{httpheader("DNT")}} HTTP-Headers wider, d.h. Werte von `"1"`, `"0"` oder `null`.

Die gesamte DNT (Do Not Track)-Spezifikation wurde eingestellt. Das Mechanismusdesign war fehlerhaft, da es sich um ein kooperatives Merkmal zwischen Benutzern, Websites und Browsern handelte. Die Idee war, dass der Benutzer der _Website_ mitteilt, sie nicht zu verfolgen, und die _Website_ dem nachkommt. Es gibt jedoch keine strenge Durchsetzung dieser Richtlinie, sodass Werbeseiten den DNT-Header ignorierten und Benutzer trotzdem verfolgten. Das Feature ist daher nutzlos. Darüber hinaus ist es schädlich, da es mehr Benutzer-{{Glossary("Fingerprinting", "Fingerabdruck")}} im Header hinterlässt, der verwendet werden kann, um Benutzer noch stärker zu verfolgen.

Browser erforschen andere, besser durchsetzbare Datenschutzfunktionen, wie z.B. [globale Datenschutzeinstellungen](/de/docs/Web/API/Navigator/globalPrivacyControl), Beschränkungen für Cookies von Drittanbietern und mehr.

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

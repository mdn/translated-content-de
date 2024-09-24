---
title: "Navigator: doNotTrack-Eigenschaft"
short-title: doNotTrack
slug: Web/API/Navigator/doNotTrack
l10n:
  sourceCommit: 7b9ee8ab596eba10b320d0743ceefbbe1a98d250
---

{{ApiRef("HTML DOM")}}{{Deprecated_header}}{{non-standard_header}}

Die **`Navigator.doNotTrack`**-Eigenschaft gibt die Do Not Track-Einstellung des Benutzers zurück, die anzeigt, ob der Benutzer Webseiten und Werbetreibende darum bittet, ihn nicht zu verfolgen.

Der Wert der Eigenschaft entspricht dem Wert des {{httpheader("DNT")}} HTTP-Headers, also Werte wie `"1"`, `"0"` oder `null`.

Die gesamte DNT-Spezifikation (Do Not Track) wurde eingestellt. Das Mechanismus-Design war fehlerhaft, da es sich um ein kooperatives Merkmal zwischen Benutzern, Webseiten und Browsern handelte. Die Idee ist, dass der Benutzer der _Website_ mitteilt, ihn nicht zu verfolgen, und die _Website_ würde dem entsprechen. Es gibt jedoch keine strikte Durchsetzung dieser Richtlinie, sodass Werbeseiten den DNT-Header ignorierten und Benutzer trotzdem verfolgten. Das Feature ist daher nutzlos. Darüber hinaus ist es schädlich, da es mehr Nutzer [Fingerabdruck](/de/docs/Glossary/Fingerprinting) im Header hinterlässt, der dazu verwendet werden kann, Benutzer noch mehr zu verfolgen.

Browser erkunden andere durchsetzbarere Datenschutzfunktionen, wie etwa [global privacy control](/de/docs/Web/API/Navigator/globalPrivacyControl), Einschränkungen von Drittanbieter-Cookies und mehr.

## Wert

Ein String oder `null`.

## Beispiele

```js
console.log(navigator.doNotTrack);
// gibt "1" aus, wenn DNT aktiviert ist; "0", wenn der Benutzer sich für das Tracking entschieden hat; andernfalls null
```

## Spezifikationen

Teil der eingestellten [Tracking Preference Expression (DNT)](https://www.w3.org/TR/tracking-dnt/#dom-navigator-donottrack) Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("DNT")}} HTTP-Header

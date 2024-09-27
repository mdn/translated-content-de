---
title: "Navigator: doNotTrack-Eigenschaft"
short-title: doNotTrack
slug: Web/API/Navigator/doNotTrack
l10n:
  sourceCommit: 7b9ee8ab596eba10b320d0743ceefbbe1a98d250
---

{{ApiRef("HTML DOM")}}{{Deprecated_header}}{{non-standard_header}}

Die **`Navigator.doNotTrack`**-Eigenschaft gibt die Do Not Track-Einstellung des Nutzers zurück, die anzeigt, ob der Nutzer von Websites und Werbeanbietern nicht verfolgt werden möchte.

Der Wert der Eigenschaft entspricht dem des {{httpheader("DNT")}} HTTP-Headers, d.h. Werte von `"1"`, `"0"` oder `null`.

Die gesamte DNT (Do Not Track)-Spezifikation wurde eingestellt. Das Mechanismusdesign war fehlerhaft, da es sich um eine kooperative Funktion zwischen Nutzern, Websites und Browsern handelte. Die Idee ist, dass der Nutzer der _Website_ mitteilt, ihn nicht zu verfolgen, und die _Website_ dem nachkommt. Es gibt jedoch keine strenge Durchsetzung dieser Richtlinie, sodass Werbeseiten den DNT-Header ignorierten und Nutzer dennoch verfolgten. Das Feature ist daher nutzlos. Darüber hinaus ist es schädlich, da es mehr Nutzer-[Fingerabdrücke](/de/docs/Glossary/Fingerprinting) im Header hinterlässt, die benutzt werden können, um Nutzer noch mehr zu verfolgen.

Browser erforschen andere durchsetzbarere Datenschutzfunktionen, wie z. B. [global privacy control](/de/docs/Web/API/Navigator/globalPrivacyControl), Einschränkungen für Drittanbieter-Cookies und mehr.

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

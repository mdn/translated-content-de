---
title: "Navigator: Eigenschaft doNotTrack"
short-title: doNotTrack
slug: Web/API/Navigator/doNotTrack
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{ApiRef("HTML DOM")}}{{non-standard_header}}

Die schreibgeschützte Eigenschaft **`doNotTrack`** der Schnittstelle [`Navigator`](/de/docs/Web/API/Navigator) gibt die Do-Not-Track-Einstellung der Nutzerin oder des Nutzers zurück. Sie zeigt an, ob die Person Websites und Werbetreibende auffordert, sie nicht zu verfolgen.

Der Wert der Eigenschaft entspricht dem Wert des HTTP-Headers {{httpheader("DNT")}}, also `"1"`, `"0"` oder `null`.

Die gesamte DNT-Spezifikation (Do Not Track) wurde eingestellt. Der Mechanismus war konzeptionell fehlerhaft, weil er auf der Zusammenarbeit von Nutzern, Websites und Browsern beruhte. Die Idee war, dass Nutzer einer _Website_ mitteilen, dass sie nicht verfolgt werden möchten, und die _Website_ dieser Aufforderung nachkommt. Die Einhaltung dieser Vorgabe wurde jedoch nicht verbindlich durchgesetzt. Werbe-Websites ignorierten daher den DNT-Header und verfolgten Nutzer trotzdem. Die Funktion ist damit nutzlos. Darüber hinaus ist sie schädlich, da sie im Header einen zusätzlichen {{Glossary("Fingerprinting", "Fingerabdruck")}} hinterlässt, mit dem Nutzer noch besser verfolgt werden können.

Browser untersuchen andere, besser durchsetzbare Datenschutzfunktionen, etwa [Global Privacy Control](/de/docs/Web/API/Navigator/globalPrivacyControl) und Einschränkungen für Cookies von Drittanbietern.

## Wert

Ein String oder `null`.

## Beispiele

```js
console.log(navigator.doNotTrack);
// prints "1" if DNT is enabled; "0" if the user opted-in for tracking; otherwise null
```

## Spezifikationen

Teil der eingestellten Spezifikation [Tracking Preference Expression (DNT)](https://w3c.github.io/dnt/drafts/tracking-dnt.html#dom-navigator-donottrack).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTTP-Header {{httpheader("DNT")}}

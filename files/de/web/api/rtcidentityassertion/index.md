---
title: RTCIdentityAssertion
slug: Web/API/RTCIdentityAssertion
l10n:
  sourceCommit: 50ed08d7b506c19b7d073b05ea1e02a15f276878
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`RTCIdentityAssertion`**-Schnittstelle der [WebRTC-API](/de/docs/Web/API/WebRTC_API) repräsentiert die Identität eines entfernten Partners der aktuellen Verbindung. Wenn noch kein Partner festgelegt und verifiziert wurde, gibt diese Schnittstelle `null` zurück. Einmal festgelegt, kann es nicht mehr geändert werden.

## Instanzeigenschaften

- [`RTCIdentityAssertion.idp`](/de/docs/Web/API/RTCIdentityAssertion/idp) {{Experimental_Inline}}
  - : Gibt den Anbieter der Identitätsaussage an.
- [`RTCIdentityAssertion.name`](/de/docs/Web/API/RTCIdentityAssertion/name) {{Experimental_Inline}}
  - : Gibt den Namen des Anbieters der Identitätsaussage an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

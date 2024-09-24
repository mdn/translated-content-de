---
title: RTCIdentityAssertion
slug: Web/API/RTCIdentityAssertion
l10n:
  sourceCommit: 50ed08d7b506c19b7d073b05ea1e02a15f276878
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`RTCIdentityAssertion`**-Schnittstelle der [WebRTC API](/de/docs/Web/API/WebRTC_API) repräsentiert die Identität eines entfernten Peers der aktuellen Verbindung. Wenn noch kein Peer gesetzt und verifiziert wurde, gibt diese Schnittstelle `null` zurück. Nachdem sie einmal gesetzt wurde, kann sie nicht mehr geändert werden.

## Instanz-Eigenschaften

- {{domxref("RTCIdentityAssertion.idp")}} {{Experimental_Inline}}
  - : Gibt den Anbieter der Identitätsbehauptung an.
- {{domxref("RTCIdentityAssertion.name")}} {{Experimental_Inline}}
  - : Gibt den Namen des Identitätsbehauptungsanbieters an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

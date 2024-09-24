---
title: "RTCPeerConnection: Methode setIdentityProvider()"
short-title: setIdentityProvider()
slug: Web/API/RTCPeerConnection/setIdentityProvider
l10n:
  sourceCommit: 310ee01fc5f74eb34004b0a0fcb3e991eda1f7c2
---

{{APIRef("WebRTC")}}

Die **`setIdentityProvider()`** Methode des {{domxref("RTCPeerConnection")}} Interfaces setzt den Identitätsanbieter (IdP) auf das in den Parametern angegebene Triplet: seinen Namen, das Protokoll, das zur Kommunikation mit ihm verwendet wird (optional) und einen optionalen Benutzernamen. Der IdP wird nur dann verwendet, wenn eine Assertion benötigt wird.

Wenn der {{domxref("RTCPeerConnection.signalingState", "signalingState")}} auf `"closed"` gesetzt ist, wird ein `InvalidStateError` ausgelöst.

## Syntax

```js-nolint
setIdentityProvider(domainname)
setIdentityProvider(domainname, protocol)
setIdentityProvider(domainname, protocol, username)
```

### Parameter

- `domainname`
  - : Eine Zeichenkette, die den Domainnamen repräsentiert, bei dem sich der IdP befindet.
- `protocol` {{optional_Inline}}
  - : Eine Zeichenkette, die das Protokoll repräsentiert, das zur Kommunikation mit dem IdP verwendet wird. Es wird standardmäßig auf `"default"` gesetzt und wird verwendet, um die URL zu bestimmen, wo der IdP zuhört.
- `username` {{optional_Inline}}
  - : Eine Zeichenkette, die den mit dem IdP verbundenen Benutzernamen repräsentiert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiel

```js
const pc = new RTCPeerConnection();

pc.setIdentityProvider("developer.mozilla.org");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)

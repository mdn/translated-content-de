---
title: "RTCPeerConnection: setIdentityProvider() Methode"
short-title: setIdentityProvider()
slug: Web/API/RTCPeerConnection/setIdentityProvider
l10n:
  sourceCommit: 310ee01fc5f74eb34004b0a0fcb3e991eda1f7c2
---

{{APIRef("WebRTC")}}

Die **`setIdentityProvider()`** Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Schnittstelle setzt den Identitätsanbieter (IdP) auf das im Parameter angegebene Tripel: seinen Namen, das Protokoll, das zur Kommunikation mit ihm verwendet wird (optional) und einen optionalen Benutzernamen. Der IdP wird nur verwendet, wenn eine Bestätigung erforderlich ist.

Wenn der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) auf `"closed"` gesetzt ist, wird ein `InvalidStateError` ausgelöst.

## Syntax

```js-nolint
setIdentityProvider(domainname)
setIdentityProvider(domainname, protocol)
setIdentityProvider(domainname, protocol, username)
```

### Parameter

- `domainname`
  - : Eine Zeichenkette, die den Domainnamen darstellt, an dem der IdP sich befindet.
- `protocol` {{optional_Inline}}
  - : Eine Zeichenkette, die das Protokoll darstellt, welches zur Kommunikation mit dem IdP verwendet wird.
    Standardmäßig ist dies `"default"` und wird verwendet, um die URL zu bestimmen, an der der IdP zuhört.
- `username` {{optional_Inline}}
  - : Eine Zeichenkette, die den Benutzernamen darstellt, der mit dem IdP verbunden ist.

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

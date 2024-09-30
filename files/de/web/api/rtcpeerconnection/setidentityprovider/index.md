---
title: "RTCPeerConnection: setIdentityProvider() Methode"
short-title: setIdentityProvider()
slug: Web/API/RTCPeerConnection/setIdentityProvider
l10n:
  sourceCommit: 310ee01fc5f74eb34004b0a0fcb3e991eda1f7c2
---

{{APIRef("WebRTC")}}

Die **`setIdentityProvider()`** Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Schnittstelle setzt den Identity Provider (IdP) auf das im Parameter angegebene Tripel: dessen Name, das verwendete Protokoll zur Kommunikation (optional) und ein optionaler Benutzername. Der IdP wird nur dann verwendet, wenn ein Nachweis erforderlich ist.

Wenn der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) auf `"closed"` gesetzt ist, wird ein `InvalidStateError` ausgelöst.

## Syntax

```js-nolint
setIdentityProvider(domainname)
setIdentityProvider(domainname, protocol)
setIdentityProvider(domainname, protocol, username)
```

### Parameter

- `domainname`
  - : Ein String, der den Domainnamen darstellt, an dem sich der IdP befindet.
- `protocol` {{optional_Inline}}
  - : Ein String, der das Protokoll darstellt, das zur Kommunikation mit dem IdP verwendet wird.
    Es hat standardmäßig den Wert `"default"` und wird verwendet, um die URL zu bestimmen, unter der der IdP lauscht.
- `username` {{optional_Inline}}
  - : Ein String, der den Benutzernamen repräsentiert, der mit dem IdP verknüpft ist.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

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

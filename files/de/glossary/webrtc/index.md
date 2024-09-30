---
title: WebRTC
slug: Glossary/WebRTC
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**WebRTC** (_Web Real-Time Communication_) ist eine [API](/de/docs/Glossary/API), die von Webanwendungen für Video-Chats, Sprachgespräche und P2P-Dateiübertragungen genutzt werden kann.

WebRTC besteht hauptsächlich aus diesen Teilen:

- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
  - : Erteilt den Zugriff auf die Kamera und/oder das Mikrofon eines Geräts und kann deren Signale in eine RTC-Verbindung einbetten.
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
  - : Eine Schnittstelle zur Konfiguration von Video-Chats oder Sprachgesprächen.
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
  - : Bietet eine Methode zur Einrichtung eines [peer-to-peer](/de/docs/Glossary/P2P) Datenwegs zwischen Browsern.

## Siehe auch

- [WebRTC](https://en.wikipedia.org/wiki/WebRTC) auf Wikipedia
- [WebRTC API auf MDN](/de/docs/Web/API/WebRTC_API)
- [Browser-Kompatibilität für WebRTC](https://caniuse.com/rtcpeerconnection)

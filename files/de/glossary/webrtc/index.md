---
title: WebRTC
slug: Glossary/WebRTC
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**WebRTC** (_Web Real-Time Communication_) ist eine {{Glossary("API")}}, die von Video-Chat-, Sprach- und P2P-Dateifreigabe-Webanwendungen verwendet werden kann.

WebRTC besteht hauptsächlich aus diesen Teilen:

- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}
  - : Ermöglicht den Zugriff auf die Kamera und/oder das Mikrofon eines Geräts und kann deren Signale in eine RTC-Verbindung einbinden.
- {{domxref("RTCPeerConnection")}}
  - : Eine Schnittstelle zur Konfiguration von Video-Chats oder Sprachanrufen.
- {{domxref("RTCDataChannel")}}
  - : Bietet eine Methode zur Einrichtung eines {{Glossary("P2P", "peer-to-peer")}} Datenpfads zwischen Browsern.

## Siehe auch

- [WebRTC](https://en.wikipedia.org/wiki/WebRTC) auf Wikipedia
- [WebRTC API auf MDN](/de/docs/Web/API/WebRTC_API)
- [Browserunterstützung für WebRTC](https://caniuse.com/rtcpeerconnection)

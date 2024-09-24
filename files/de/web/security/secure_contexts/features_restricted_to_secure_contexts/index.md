---
title: Funktionen, die auf sichere Kontexte beschränkt sind
slug: Web/Security/Secure_Contexts/features_restricted_to_secure_contexts
l10n:
  sourceCommit: dea173f1ffb3e6bef851f2e328cf7562f1ef78ce
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Diese Referenz listet die Web-Plattform-Funktionen auf, die nur in sicheren Kontexten verfügbar sind — siehe [Sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) für eine Definition und weitere Details.

## Aktuelle Funktionen, die nur in sicheren Kontexten verfügbar sind

In diesem Abschnitt werden APIs aufgelistet, die laut Spezifikationen nur in sicheren Kontexten verfügbar sind.

- [Async Clipboard API](/de/docs/Web/API/Clipboard)
- {{domxref("Audio Output Devices API", "", "", "nocode")}}
- {{domxref("Background Fetch API", "", "", "nocode")}}
- {{domxref("Background Synchronization API", "", "", "nocode")}}
- {{domxref("Badging API", "", "", "nocode")}}
- {{domxref("Barcode Detection API", "", "", "nocode")}}
- {{domxref("Battery Status API", "", "", "nocode")}}
- [`Cache-Control: immutable`](/de/docs/Web/HTTP/Headers/Cache-Control)
- {{domxref("Contact Picker API", "", "", "nocode")}}
- {{domxref("Content Index API", "", "", "nocode")}}
- {{domxref("Cookie Store API", "", "", "nocode")}}
- [Credential Management API](/de/docs/Web/API/Credential_Management_API)
- {{domxref("Device Memory API", "", "", "nocode")}}
- [Device Orientation / Device Motion](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- {{domxref("Document Picture-in-Picture API", "", "", "nocode")}}
- [EyeDropper API](/de/docs/Web/API/EyeDropper)
- [Encrypted Media Extensions](/de/docs/Web/API/Encrypted_Media_Extensions_API)
- {{domxref("File System API", "", "", "nocode")}}
- [Generic Sensor API](https://w3c.github.io/sensors/)
- {{domxref("Gamepad API", "", "", "nocode")}}
- {{domxref("Geolocation API", "", "", "nocode")}}
- {{domxref("Idle Detection API", "", "", "nocode")}}
- {{domxref("Keyboard API", "", "", "nocode")}}
- {{domxref("Local Font Access API", "", "", "nocode")}}
- [Notifications API](/de/docs/Web/API/Notifications_API)
- {{domxref("Payment Handler API", "", "", "nocode")}}
- [Payment Request API](/de/docs/Web/API/Payment_Request_API)
- [Presentation API](/de/docs/Web/API/Presentation_API)
- [Push API](/de/docs/Web/API/Push_API)
- [Reporting API](/de/docs/Web/API/Reporting_API)
- {{domxref("Screen Capture API", "", "", "nocode")}}
- {{domxref("Screen Wake Lock API", "", "", "nocode")}}
- [Service Workers](/de/docs/Web/API/Service_Worker_API)
- {{domxref("Shared Storage API", "", "", "nocode")}}
- [Storage API](/de/docs/Web/API/Storage_API)
- {{domxref("VirtualKeyboard API", "", "", "nocode")}}
- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [Web Bluetooth](/de/docs/Web/API/Web_Bluetooth_API)
- {{domxref("Web Locks API", "", "", "nocode")}}
- [Web MIDI](/de/docs/Web/API/Web_MIDI_API)
- {{domxref("Web NFC API", "", "", "nocode")}}
- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- {{domxref("WebCodecs API", "", "", "nocode")}}
- [WebGPU API](/de/docs/Web/API/WebGPU_API)
- {{domxref("WebHID API", "", "", "nocode")}}
- {{domxref("WebOTP API", "", "", "nocode")}}
- {{domxref("WebTransport API", "", "", "nocode")}}
- {{domxref("WebUSB API", "", "", "nocode")}}
- {{domxref("WebXR Device API", "", "", "nocode")}}
- [Web Share API](/de/docs/Web/API/Web_Share_API)
- {{domxref("Window Management API", "", "", "nocode")}}

Zusätzlich erfordern die folgenden Methoden einen sicheren Kontext (auch wenn die zugehörige API dies nicht tut):

- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler)

## Siehe auch

- [Sichere Kontexte](/de/docs/Web/Security/Secure_Contexts)
- ["secure context"-Abfrage auf Chrome Platform Status](https://chromestatus.com/features#secure%20context)

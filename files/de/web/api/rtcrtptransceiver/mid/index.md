---
title: "RTCRtpTransceiver: Eigenschaft mid"
short-title: mid
slug: Web/API/RTCRtpTransceiver/mid
l10n:
  sourceCommit: dbd5b5198331fb1c61df1ac02dcbc440f83a78bb
---

{{APIRef("WebRTC")}}

Die schreibgeschützte [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Schnittstelle hat die Eigenschaft **`mid`**, die die Medien-ID (`mid`) angibt, welche die Paarung von Sender und Empfänger des Streams eindeutig identifiziert.

## Wert

Ein String, der die Paarung von Quelle und Ziel des Streams des Transceivers eindeutig identifiziert. Sein Wert wird von der Medien-ID der SDP-m-Zeile abgeleitet. Dieser Wert ist `null`, bevor eine lokale oder entfernte Beschreibung angewendet wird, die die entsprechende m-Zeile enthält, oder wenn ein Rollback diese Zuordnung rückgängig macht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)

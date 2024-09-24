---
title: "RTCDataChannel: Eigenschaft reliable"
short-title: reliable
slug: Web/API/RTCDataChannel/reliable
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte `RTCDataChannel`-Eigenschaft **`reliable`** gibt an, ob der Datenkanal zuverlässig ist oder nicht.

> [!WARNING]
> Diese Eigenschaft ist veraltet. Verwenden Sie stattdessen {{domxref("RTCDataChannel.ordered")}} in neuem Code, und aktualisieren Sie bestehenden Code so bald wie möglich.

## Wert

`true`, wenn die Verbindung des {{domxref("RTCDataChannel")}} zuverlässig ist; `false`, wenn sie es nicht ist.

## Spezifikationen

Nicht mehr Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCDataChannel.ordered")}}

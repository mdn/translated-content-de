---
title: RTCErrorEvent
slug: Web/API/RTCErrorEvent
l10n:
  sourceCommit: 581220b4299dd4c44544f7c200440129067a9d9d
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`RTCErrorEvent`**-Schnittstelle der [WebRTC-API](/de/docs/Web/API/WebRTC_API) repräsentiert ein Fehlerereignis, das an ein WebRTC-Objekt gesendet wird. Sie erbt von der standardmäßigen [`Event`](/de/docs/Web/API/Event)-Schnittstelle und fügt RTC-spezifische Informationen zur Beschreibung des Fehlers hinzu.

Die `error`-Ereignisse, die bei [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel/error_event) und [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport/error_event) ausgelöst werden, sind Instanzen dieses Objekts.

> [!NOTE]
> WebRTC definiert andere Fehlerereignis-Schnittstellen, wie [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent), die für Fehler verwendet werden, die andere spezielle Informationsanforderungen haben.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCErrorEvent()`](/de/docs/Web/API/RTCErrorEvent/RTCErrorEvent)
  - : Erstellt und gibt ein neues `RTCErrorEvent`-Objekt zurück.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`error`](/de/docs/Web/API/RTCErrorEvent/error) {{ReadOnlyInline}}
  - : Ein [`RTCError`](/de/docs/Web/API/RTCError)-Objekt, das RTC-spezifische Informationen über den Fehler angibt.
    Dazu gehören Informationen wie der Fehlertyp und die Ursache sowie der Ort, der den Fehler ausgelöst hat.

## Instanz-Methoden

_Erbt nur Methoden von ihrer übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent)

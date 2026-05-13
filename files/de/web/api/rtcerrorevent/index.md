---
title: RTCErrorEvent
slug: Web/API/RTCErrorEvent
l10n:
  sourceCommit: e7f93b8ebd8b26bd6fae71f7b0b6214a671a4ef9
---

{{APIRef("WebRTC")}}

Das **`RTCErrorEvent`**-Interface der [WebRTC-API](/de/docs/Web/API/WebRTC_API) repräsentiert ein Fehlerereignis, das an ein WebRTC-Objekt gesendet wird. Es erbt vom Standard-[`Event`](/de/docs/Web/API/Event)-Interface und fügt RTC-spezifische Informationen hinzu, die den Fehler beschreiben.

Die `error`-Ereignisse, die bei [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel/error_event) und [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport/error_event) ausgelöst werden, sind Instanzen dieses Objekts.

> [!NOTE]
> WebRTC definiert andere Fehlerereignis-Interfaces, wie z.B. [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent), die für Fehler verwendet werden, die andere spezielle Informationsanforderungen zur Weitergabe haben.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCErrorEvent()`](/de/docs/Web/API/RTCErrorEvent/RTCErrorEvent)
  - : Erstellt und gibt ein neues `RTCErrorEvent`-Objekt zurück.

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface, [`Event`](/de/docs/Web/API/Event)._

- [`error`](/de/docs/Web/API/RTCErrorEvent/error) {{ReadOnlyInline}}
  - : Ein [`RTCError`](/de/docs/Web/API/RTCError)-Objekt, das RTC-spezifische Informationen über den Fehler angibt. Dazu gehören Informationen wie der Fehlertyp und die Ursache sowie der Ort, der den Fehler ausgelöst hat.

## Instanzmethoden

_Erbt nur Methoden von seinem Eltern-Interface, [`Event`](/de/docs/Web/API/Event)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent)

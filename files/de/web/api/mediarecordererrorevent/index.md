---
title: MediaRecorderErrorEvent
slug: Web/API/MediaRecorderErrorEvent
l10n:
  sourceCommit: 8a48db345586ff90e3d5fd2fd59adac59981e9b0
---

{{APIRef("MediaStream Recording")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`MediaRecorderErrorEvent`**-Schnittstelle repräsentiert Fehler, die von der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) zurückgegeben werden. Es handelt sich um ein {{domxref("Event")}}-Objekt, das einen Verweis auf eine {{domxref("DOMException")}} enthält, die den aufgetretenen Fehler beschreibt.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("MediaRecorderErrorEvent.MediaRecorderErrorEvent", "MediaStreamRecorderEvent()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erstellt und gibt ein neues `MediaRecorderErrorEvent`-Ereignisobjekt mit den angegebenen Parametern zurück.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seiner Elternschnittstelle, {{domxref("Event")}}_.

- {{domxref("MediaRecorderErrorEvent.error", "error")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine {{domxref("DOMException")}}, die Informationen über den aufgetretenen Fehler enthält.

## Instanz-Methoden

_Erbt Methoden von seiner Elternschnittstelle, {{domxref("Event")}}_.

## Spezifikationen

Dieses Feature ist nicht mehr Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

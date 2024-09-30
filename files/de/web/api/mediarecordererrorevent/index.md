---
title: MediaRecorderErrorEvent
slug: Web/API/MediaRecorderErrorEvent
l10n:
  sourceCommit: 8a48db345586ff90e3d5fd2fd59adac59981e9b0
---

{{APIRef("MediaStream Recording")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`MediaRecorderErrorEvent`**-Schnittstelle repräsentiert Fehler, die von der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) zurückgegeben werden. Es handelt sich um ein [`Event`](/de/docs/Web/API/Event)-Objekt, das einen Verweis auf eine [`DOMException`](/de/docs/Web/API/DOMException) enthält, die den aufgetretenen Fehler beschreibt.

{{InheritanceDiagram}}

## Konstruktor

- [`MediaStreamRecorderEvent()`](/de/docs/Web/API/MediaRecorderErrorEvent/MediaRecorderErrorEvent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erstellt und gibt ein neues `MediaRecorderErrorEvent`-Ereignisobjekt mit den angegebenen Parametern zurück.

## Instanzeigenschaften

_Erbt Eigenschaften von seiner übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)_.

- [`error`](/de/docs/Web/API/MediaRecorderErrorEvent/error) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein [`DOMException`](/de/docs/Web/API/DOMException) mit Informationen über den aufgetretenen Fehler.

## Instanzmethoden

_Erbt Methoden von seiner übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)_.

## Spezifikationen

Dieses Feature ist nicht mehr Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

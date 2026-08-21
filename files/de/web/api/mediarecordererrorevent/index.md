---
title: MediaRecorderErrorEvent
slug: Web/API/MediaRecorderErrorEvent
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("MediaStream Recording")}}{{Non-standard_Header}}

Die **`MediaRecorderErrorEvent`**-Schnittstelle repräsentiert Fehler, die von der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) zurückgegeben werden. Sie ist ein [`Event`](/de/docs/Web/API/Event)-Objekt, das eine Referenz zu einer [`DOMException`](/de/docs/Web/API/DOMException) enthält, die den aufgetretenen Fehler beschreibt.

{{InheritanceDiagram}}

## Konstruktor

- [`MediaStreamRecorderEvent()`](/de/docs/Web/API/MediaRecorderErrorEvent/MediaRecorderErrorEvent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erstellt und gibt ein neues `MediaRecorderErrorEvent`-Ereignisobjekt mit den angegebenen Parametern zurück.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seiner Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)_.

- [`error`](/de/docs/Web/API/MediaRecorderErrorEvent/error) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine [`DOMException`](/de/docs/Web/API/DOMException), die Informationen über den aufgetretenen Fehler enthält.

## Instanz-Methoden

_Erbt Methoden von seiner Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)_.

## Spezifikationen

Dieses Feature ist nicht mehr Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

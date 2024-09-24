---
title: PerformanceMark
slug: Web/API/PerformanceMark
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

**`PerformanceMark`** ist ein Interface für {{domxref("PerformanceEntry")}} Objekte mit einem {{domxref("PerformanceEntry.entryType","entryType")}} von "`mark`".

Einträge dieses Typs werden typischerweise erstellt, indem {{domxref("Performance.mark","performance.mark()")}} aufgerufen wird, um einen _benannten_ {{domxref("DOMHighResTimeStamp")}} (die _Markierung_) zur Leistungstimeline des Browsers hinzuzufügen. Um eine Leistungsmarke zu erstellen, die nicht zur Leistungstimeline des Browsers hinzugefügt wird, verwenden Sie den Konstruktor.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("PerformanceMark.PerformanceMark", "PerformanceMark()")}}
  - : Erstellt ein neues `PerformanceMark` Objekt, das nicht zur Leistungstimeline des Browsers hinzugefügt wird.

## Instanzeigenschaften

Dieses Interface erweitert die folgenden {{domxref("PerformanceEntry")}} Eigenschaften, indem es die Eigenschaften wie folgt qualifiziert/einschränkt:

- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}}
  - : Gibt "`mark`" zurück.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}}
  - : Gibt den Namen zurück, der der Markierung gegeben wurde, als sie mittels eines Aufrufs von {{domxref("Performance.mark()","performance.mark()")}} erstellt wurde.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}}
  - : Gibt den {{domxref("DOMHighResTimeStamp")}} zurück, als {{domxref("Performance.mark()","performance.mark()")}} aufgerufen wurde.
- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}}
  - : Gibt "`0`" zurück. (Eine Markierung hat keine _Dauer_.)

Dieses Interface unterstützt auch die folgenden Eigenschaften:

- {{domxref("PerformanceMark.detail")}} {{ReadOnlyInline}}
  - : Gibt beliebige Metadaten zurück, die der Markierung bei der Erstellung hinzugefügt wurden.

## Instanzmethoden

Dieses Interface hat keine Methoden.

## Beispiel

Siehe das Beispiel in [Using the User Timing API](/de/docs/Web/API/Performance_API/User_timing).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [User Timing (Übersicht)](/de/docs/Web/API/Performance_API/User_timing)
- [Using the User Timing API](/de/docs/Web/API/Performance_API/User_timing)

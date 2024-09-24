---
title: SensorErrorEvent
slug: Web/API/SensorErrorEvent
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Die **`SensorErrorEvent`**-Schnittstelle der [Sensor-APIs](/de/docs/Web/API/Sensor_APIs) bietet Informationen über Fehler, die von einem {{domxref('Sensor')}} oder einer abgeleiteten Schnittstelle ausgelöst werden.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("SensorErrorEvent.SensorErrorEvent", "SensorErrorEvent()")}}
  - : Erstellt ein neues `SensorErrorEvent`-Objekt.

## Instanz-Eigenschaften

- {{domxref('SensorErrorEvent.error')}} {{ReadOnlyInline}}
  - : Gibt das {{domxref('DOMException')}}-Objekt zurück, das im Konstruktor des Events übergeben wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: Erstellen eines virtuellen Sensors
short-title: Erstellen eines virtuellen Sensors
slug: Web/WebDriver/Reference/Classic/Commands/CreateVirtualSensor
l10n:
  sourceCommit: 45686c6814da2a2ff9c8cc87df4dd4b0881f136f
---

Der _Erstellen eines virtuellen Sensors_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API erstellt einen virtuellen Sensor eines bestimmten Typs, der den Plattform-Sensor desselben Typs überschreibt. Dies ermöglicht es Tests, die [Sensor-APIs](/de/docs/Web/API/Sensor_APIs) mit vorab festgelegten Messwerten zu nutzen, anstatt sich auf reale Hardware zu verlassen. Während der virtuelle Sensor existiert, verwenden neue Verbindungen zu einem Sensor desselben Typs im obersten {{Glossary("Browsing_context", "Browsing-Kontext")}} den virtuellen Sensor anstelle des Plattform-Sensors.

> [!NOTE]
> Sensorinstanzen desselben Typs können koexistieren und verschiedene Gerätesensoren verwenden. Ein Sensor, der bereits mit einem echten, hardwarebasierten Sensor verbunden ist, erhält weiterhin Messwerte von diesem und wechselt nur dann zum virtuellen Sensor, wenn er erneut verbunden wird.

## Syntax

| Methode                                            | URI-Vorlage                    |
| -------------------------------------------------- | ------------------------------ |
| [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/sensor` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

### Nutzlast

Die Eingabe ist ein Objekt:

- `type`
  - : Ein String, der den zu erstellenden virtuellen Sensortyp identifiziert. Mögliche Werte sind unter anderem `"ambient-light"`, `"accelerometer"` und `"gyroscope"`. Im obersten Browsing-Kontext kann jeweils nur ein virtueller Sensor eines bestimmten Typs existieren.
- `connected` {{optional_inline}}
  - : Ein Boolescher Wert, der angibt, ob der Sensor in der Lage ist, Messwerte bereitzustellen. Standardwert ist `true`.
- `maxSamplingFrequency` {{optional_inline}}
  - : Eine Zahl in Hertz, die die obere Grenze der Abtastfrequenz angibt, die der virtuelle Sensor unterstützt.
- `minSamplingFrequency` {{optional_inline}}
  - : Eine Zahl in Hertz, die die untere Grenze der Abtastfrequenz angibt, die der virtuelle Sensor unterstützt.

### Rückgabewert

`null` bei Erfolg.

### Fehler

- [`ungültige Sitzungs-ID`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [`ungültiges Argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Der `type` ist kein String, es handelt sich um einen nicht unterstützten virtuellen Sensortyp oder ein virtueller Sensor dieses Typs existiert bereits. Die angegebenen Abtastfrequenzwerte sind ungültig, wenn sie keine Zahlen sind oder wenn die `minSamplingFrequency` größer als die `maxSamplingFrequency` ist.

## Beispiele

### Erstellen eines virtuellen Sensors

Mit einem WebDriver-Server, der auf `localhost:4444` läuft, wird davon ausgegangen, dass eine aktive Sitzung erstellt wurde. Um einen virtuellen [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor) zu erstellen, senden Sie seinen Typ in der Nutzlast der Anfrage und ersetzen `ID` durch die `sessionId` aus der Antwort der [Neuen Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession):

```bash
curl -i -H "Content-Type: application/json" \
  -d '{"type": "ambient-light"}' \
  http://localhost:4444/session/ID/sensor
```

Der Server antwortet mit einem `null`-Wert, um den Erfolg anzuzeigen:

```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8

{"value":null}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Aktualisieren der virtuellen Sensorsensorwerte](/de/docs/Web/WebDriver/Reference/Classic/Commands/UpdateVirtualSensorReading) Befehl
- [Abrufen von Informationen über virtuelle Sensoren](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetVirtualSensorInformation) Befehl
- [Löschen eines virtuellen Sensors](/de/docs/Web/WebDriver/Reference/Classic/Commands/DeleteVirtualSensor) Befehl
- [Sensor-APIs](/de/docs/Web/API/Sensor_APIs)

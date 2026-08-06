---
title: Informationen zu virtuellen Sensoren abrufen
short-title: Informationen zu virtuellen Sensoren abrufen
slug: Web/WebDriver/Reference/Classic/Commands/GetVirtualSensorInformation
l10n:
  sourceCommit: 45686c6814da2a2ff9c8cc87df4dd4b0881f136f
---

Der _Get Virtual Sensor Information_-[Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt Informationen über einen zuvor mit dem Befehl [Create Virtual Sensor](/de/docs/Web/WebDriver/Reference/Classic/Commands/CreateVirtualSensor) erstellten virtuellen Sensor zurück. Er gibt die aktuell von der Seite angeforderte Abtastfrequenz an, die es einem Test ermöglicht zu bestätigen, dass die [Sensor APIs](/de/docs/Web/API/Sensor_APIs) die Messwerte mit der erwarteten Rate nutzen.

## Syntax

| Methode                                          | URI-Vorlage                           |
| ------------------------------------------------ | ------------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/sensor/{type}` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.
- `type`
  - : Der Typ des virtuellen Sensors, über den Informationen abgefragt werden sollen. Mögliche Werte sind unter anderem `"ambient-light"`, `"accelerometer"` und `"gyroscope"`.

### Rückgabewert

Ein Objekt mit dem folgenden Feld:

- `requestedSamplingFrequency`
  - : Eine Zahl in Hertz, die die aktuell für den virtuellen Sensor angeforderte Abtastfrequenz angibt. Dieser Wert liegt innerhalb der minimalen und maximalen Abtastfrequenzen, die bei der Erstellung des Sensors festgelegt wurden.

### Fehler

- [`invalid session id`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Die Sitzung existiert nicht.
- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Es existiert kein virtueller Sensor des angegebenen `type`.

## Beispiele

### Informationen zu virtuellen Sensoren abrufen

Mit einem WebDriver-Server, der auf `localhost:4444` läuft, nehmen wir an, dass ein virtueller `"ambient-light"`-Sensor für die aktive Sitzung erstellt wurde. Um dessen Informationen abzurufen, hängen Sie den Sensortyp an den Endpunkt an, ersetzen Sie `ID` durch die `sessionId` aus der [New Session](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession)-Antwort:

```bash
curl -i http://localhost:4444/session/ID/sensor/ambient-light
```

Der Server antwortet mit der aktuell angeforderten Abtastfrequenz:

```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8

{"value":{"requestedSamplingFrequency":60}}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Create Virtual Sensor](/de/docs/Web/WebDriver/Reference/Classic/Commands/CreateVirtualSensor) Befehl
- [Update Virtual Sensor Reading](/de/docs/Web/WebDriver/Reference/Classic/Commands/UpdateVirtualSensorReading) Befehl
- [Delete Virtual Sensor](/de/docs/Web/WebDriver/Reference/Classic/Commands/DeleteVirtualSensor) Befehl
- [Sensor APIs](/de/docs/Web/API/Sensor_APIs)

---
title: Aktualisieren der virtuellen Sensorablesung
short-title: Aktualisieren der virtuellen Sensorablesung
slug: Web/WebDriver/Reference/Classic/Commands/UpdateVirtualSensorReading
l10n:
  sourceCommit: 45686c6814da2a2ff9c8cc87df4dd4b0881f136f
---

Der Befehl _Aktualisieren der virtuellen Sensorablesung_ der [WebDriver](/de/docs/Web/WebDriver) API stellt eine neue Ablesung für einen virtuellen Sensor bereit, der zuvor mit dem Befehl [Virtuellen Sensor erstellen](/de/docs/Web/WebDriver/Reference/Classic/Commands/CreateVirtualSensor) erstellt wurde. Die neue Ablesung wird den Plattform-Sensoren über die [Sensor APIs](/de/docs/Web/API/Sensor_APIs) zur Verfügung gestellt, sodass Tests sensorabhängiges Verhalten mit vorbestimmten Daten steuern können.

## Syntax

| Methode                                            | URI-Vorlage                           |
| -------------------------------------------------- | ------------------------------------- |
| [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/sensor/{type}` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.
- `type`
  - : Der virtuelle Sensortyp, der aktualisiert werden soll. Mögliche Werte sind unter anderem `"ambient-light"`, `"accelerometer"` und `"gyroscope"`.

### Nutzlast

Die Eingabe ist ein Objekt:

- `reading`
  - : Ein Objekt, das die neue Sensorablesung darstellt. Die Eigenschaften, die es enthalten muss, hängen vom Sensor `type` ab; beispielsweise erwartet ein `"ambient-light"` Sensor einen `illuminance` Wert.

### Rückgabewert

`null` bei Erfolg.

### Fehler

- [`invalid session id`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Der `type` ist kein unterstützter virtueller Sensortyp, es existiert kein virtueller Sensor dieses Typs, das `reading` ist kein Objekt oder die Ablesung ist für den gegebenen Sensor `type` nicht gültig.

## Beispiele

### Aktualisieren einer virtuellen Sensorablesung

Bei einem laufenden WebDriver-Server auf `localhost:4444` wird angenommen, dass ein virtueller `"ambient-light"` Sensor für die aktive Sitzung erstellt wurde. Um eine neue Ablesung festzulegen, senden Sie das `reading` Objekt in der Anfrage-Nutzlast und ersetzen Sie `ID` durch die `sessionId` aus der Antwort der [Neuen Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession):

```bash
curl -i -H "Content-Type: application/json" \
  -d '{"reading": {"illuminance": 42}}' \
  http://localhost:4444/session/ID/sensor/ambient-light
```

Der Server antwortet mit einem `null` Wert, um den Erfolg anzuzeigen:

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

- Befehl [Virtuellen Sensor erstellen](/de/docs/Web/WebDriver/Reference/Classic/Commands/CreateVirtualSensor)
- Befehl [Informationen zum virtuellen Sensor abrufen](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetVirtualSensorInformation)
- Befehl [Virtuellen Sensor löschen](/de/docs/Web/WebDriver/Reference/Classic/Commands/DeleteVirtualSensor)
- [Sensor APIs](/de/docs/Web/API/Sensor_APIs)

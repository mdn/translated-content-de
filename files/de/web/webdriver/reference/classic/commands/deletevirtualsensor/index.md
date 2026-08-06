---
title: Virtuellen Sensor löschen
short-title: Virtuellen Sensor löschen
slug: Web/WebDriver/Reference/Classic/Commands/DeleteVirtualSensor
l10n:
  sourceCommit: 45686c6814da2a2ff9c8cc87df4dd4b0881f136f
---

Der _Delete Virtual Sensor_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API entfernt einen zuvor erstellten virtuellen Sensor mit dem [Create Virtual Sensor](/de/docs/Web/WebDriver/Reference/Classic/Commands/CreateVirtualSensor) Befehl. Nachdem der virtuelle Sensor gelöscht wurde, verwenden die [Sensor APIs](/de/docs/Web/API/Sensor_APIs) wieder den echten Plattform-Sensor dieses Typs, wenn einer verfügbar ist.

## Syntax

| Methode                                                | URI-Vorlage                           |
| ------------------------------------------------------ | ------------------------------------- |
| [`DELETE`](/de/docs/Web/HTTP/Reference/Methods/DELETE) | `/session/{session id}/sensor/{type}` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.
- `type`
  - : Der zu löschende virtuelle Sensortyp. Mögliche Werte sind unter anderem `"ambient-light"`, `"accelerometer"` und `"gyroscope"`.

### Rückgabewert

`null` bei Erfolg.

### Fehler

- [`invalid session id`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Kein virtueller Sensor des angegebenen `type` existiert.

## Beispiele

### Löschen eines virtuellen Sensors

Mit einem auf `localhost:4444` laufenden WebDriver-Server, nehmen wir an, dass ein virtueller `"ambient-light"` Sensor für die aktive Sitzung erstellt wurde. Um ihn zu entfernen, senden Sie eine `DELETE` Anfrage mit dem Sensortyp an die Endpunktadresse, wobei `ID` durch die `sessionId` aus der [New Session](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) Antwort ersetzt wird:

```bash
curl -i -X DELETE http://localhost:4444/session/ID/sensor/ambient-light
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

- [Create Virtual Sensor](/de/docs/Web/WebDriver/Reference/Classic/Commands/CreateVirtualSensor) Befehl
- [Update Virtual Sensor Reading](/de/docs/Web/WebDriver/Reference/Classic/Commands/UpdateVirtualSensorReading) Befehl
- [Get Virtual Sensor Information](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetVirtualSensorInformation) Befehl
- [Sensor APIs](/de/docs/Web/API/Sensor_APIs)

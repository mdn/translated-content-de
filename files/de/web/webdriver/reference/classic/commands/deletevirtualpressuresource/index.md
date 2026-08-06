---
title: Löschen der virtuellen Druckquelle
short-title: Löschen der virtuellen Druckquelle
slug: Web/WebDriver/Reference/Classic/Commands/DeleteVirtualPressureSource
l10n:
  sourceCommit: 45686c6814da2a2ff9c8cc87df4dd4b0881f136f
---

Der _Löschen der virtuellen Druckquelle_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API entfernt eine virtuelle Druckquelle, die zuvor mit dem [Erstellen einer virtuellen Druckquelle](/de/docs/Web/WebDriver/Reference/Classic/Commands/CreateVirtualPressureSource) Befehl erstellt wurde. Nachdem die virtuelle Druckquelle gelöscht wurde, verwendet die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API) wieder die reale Plattformdruckquelle dieses Typs, wenn eine verfügbar ist.

## Syntax

| Methode                                                | URI-Vorlage                                   |
| ------------------------------------------------------ | --------------------------------------------- |
| [`DELETE`](/de/docs/Web/HTTP/Reference/Methods/DELETE) | `/session/{session id}/pressuresource/{type}` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.
- `type`
  - : Den zu löschenden Druckquellentyp, zum Beispiel `"cpu"`.

### Rückgabewert

`null`, wenn erfolgreich.

### Fehler

- [`ungültige Sitzungs-ID`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [`ungültiges Argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Der `type` ist kein unterstützter Druckquellentyp.

## Beispiele

### Löschen einer virtuellen Druckquelle

Bei laufendem WebDriver-Server auf `localhost:4444` wird angenommen, dass eine virtuelle `"cpu"` Druckquelle für die aktive Sitzung erstellt wurde. Um diese zu entfernen, senden Sie eine `DELETE` Anfrage mit dem Druckquellentyp an den Endpunkt, wobei `ID` durch die `sessionId` aus der [Neue Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) Antwort ersetzt wird:

```bash
curl -i -X DELETE http://localhost:4444/session/ID/pressuresource/cpu
```

Der Server antwortet mit einem `null` Wert zur Anzeige des Erfolgs:

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

- [Erstellen einer virtuellen Druckquelle](/de/docs/Web/WebDriver/Reference/Classic/Commands/CreateVirtualPressureSource) Befehl
- [Aktualisieren einer virtuellen Druckquelle](/de/docs/Web/WebDriver/Reference/Classic/Commands/UpdateVirtualPressureSource) Befehl
- [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API)

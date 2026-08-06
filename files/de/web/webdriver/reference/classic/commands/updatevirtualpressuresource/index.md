---
title: Aktualisieren der virtuellen Druckquelle
short-title: Aktualisieren der virtuellen Druckquelle
slug: Web/WebDriver/Reference/Classic/Commands/UpdateVirtualPressureSource
l10n:
  sourceCommit: 45686c6814da2a2ff9c8cc87df4dd4b0881f136f
---

Der _Aktualisieren der virtuellen Druckquelle_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API setzt ein neues Beispiel für eine virtuelle Druckquelle, die zuvor mit dem Befehl [Virtuelle Druckquelle erstellen](/de/docs/Web/WebDriver/Reference/Classic/Commands/CreateVirtualPressureSource) erstellt wurde. Das neue Beispiel wird über die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API) an die Seite geliefert, wodurch es Tests ermöglicht wird, druckabhängiges Verhalten mit vorbestimmten Daten zu steuern.

## Syntax

| Methode                                            | URI-Vorlage                                   |
| -------------------------------------------------- | --------------------------------------------- |
| [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/pressuresource/{type}` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.
- `type`
  - : Der Druckquellentyp, der aktualisiert werden soll, zum Beispiel `"cpu"`.

### Nutzdaten

Die Eingabe ist ein Objekt:

- `sample`
  - : Eine Zeichenkette, die den zu meldenden Druckzustand angibt. Eines von `"nominal"`, `"fair"`, `"serious"` oder `"critical"`.
- `ownContributionEstimate` {{optional_inline}}
  - : Eine Zahl zwischen `0` und `1`, die schätzt, welcher Anteil des gemeldeten Drucks durch die Seite selbst verursacht wird.

### Rückgabewert

`null`, wenn erfolgreich.

### Fehler

- [`invalid session id`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Die Sitzung existiert nicht.
- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Das `sample` ist kein gültiger Druckzustand, oder `ownContributionEstimate` ist keine gültige Zahl.
- `unsupported operation`
  - : Es wurde keine virtuelle Druckquelle des angegebenen `type` erstellt.

## Beispiele

### Aktualisieren einer virtuellen Druckquelle

Bei einem WebDriver-Server, der unter `localhost:4444` läuft, nehmen wir an, dass eine virtuelle `"cpu"`-Druckquelle für die aktive Sitzung erstellt wurde. Um einen neuen Druckzustand zu melden, senden Sie den `sample`-Wert in den Nutzdaten der Anfrage und ersetzen Sie `ID` durch die `sessionId` aus der [Neue Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) Antwort:

```bash
curl -i -H "Content-Type: application/json" \
  -d '{"sample": "critical"}' \
  http://localhost:4444/session/ID/pressuresource/cpu
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

- [Virtuelle Druckquelle erstellen](/de/docs/Web/WebDriver/Reference/Classic/Commands/CreateVirtualPressureSource) Befehl
- [Virtuelle Druckquelle löschen](/de/docs/Web/WebDriver/Reference/Classic/Commands/DeleteVirtualPressureSource) Befehl
- [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API)

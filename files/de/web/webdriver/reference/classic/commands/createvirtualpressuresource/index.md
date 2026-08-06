---
title: Erstellen einer virtuellen Druckquelle
short-title: Erstellen einer virtuellen Druckquelle
slug: Web/WebDriver/Reference/Classic/Commands/CreateVirtualPressureSource
l10n:
  sourceCommit: 45686c6814da2a2ff9c8cc87df4dd4b0881f136f
---

Der _Befehl zum Erstellen einer virtuellen Druckquelle_ der [WebDriver](/de/docs/Web/WebDriver) API erstellt eine virtuelle Druckquelle eines bestimmten Typs, die die Plattform-Druckquelle desselben Typs ersetzt. Dies ermöglicht es Tests, die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API) mit vorbestimmten Druckzuständen zu testen, anstatt sich auf echte Hardware zu verlassen.

## Syntax

| Methode                                            | URI-Vorlage                            |
| -------------------------------------------------- | -------------------------------------- |
| [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/pressuresource` |

### URL-Parameter

- `session id`
  - : Identifikator der Sitzung.

### Nutzlast

Die Eingabe ist ein Objekt:

- `type`
  - : Ein String, der den Typ der zu erstellenden Druckquelle identifiziert. Derzeit ist der einzige weit verbreitete Wert `"cpu"`.
- `supported` {{optional_inline}}
  - : Ein Boolean, der angibt, ob die virtuelle Druckquelle in der Lage ist, Proben bereitzustellen. Voreinstellung ist `true`.

### Rückgabewert

`null`, wenn erfolgreich.

### Fehler

- [`invalid session id`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Die Sitzung existiert nicht.
- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Der `type` ist kein unterstützter Druckquellentyp, oder eine virtuelle Druckquelle dieses Typs existiert bereits.

## Beispiele

### Erstellen einer virtuellen Druckquelle

Wenn ein WebDriver-Server auf `localhost:4444` läuft und eine aktive Sitzung erstellt wurde, um eine virtuelle `"cpu"` Druckquelle zu erstellen, senden Sie den Typ im Request-Payload und ersetzen Sie `ID` durch die `sessionId` aus der [Neue Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) Antwort:

```bash
curl -i -H "Content-Type: application/json" \
  -d '{"type": "cpu"}' \
  http://localhost:4444/session/ID/pressuresource
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

- [Update Virtual Pressure Source](/de/docs/Web/WebDriver/Reference/Classic/Commands/UpdateVirtualPressureSource) Befehl
- [Delete Virtual Pressure Source](/de/docs/Web/WebDriver/Reference/Classic/Commands/DeleteVirtualPressureSource) Befehl
- [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API)

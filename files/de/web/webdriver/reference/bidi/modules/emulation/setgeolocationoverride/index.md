---
title: Befehl `emulation.setGeolocationOverride`
short-title: setGeolocationOverride
slug: Web/WebDriver/Reference/BiDi/Modules/emulation/setGeolocationOverride
l10n:
  sourceCommit: fbe036d8f9c91c2b781e523e20b0c6dad10b2247
---

Der [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) `emulation.setGeolocationOverride` des Moduls [`emulation`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/emulation) überschreibt die über die [Geolocation API](/de/docs/Web/API/Geolocation_API) bereitgestellten Standortdaten für die angegebenen [Top-Level-Kontexte](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) oder [Benutzerkontexte](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts).

## Syntax

```json-nolint
/* With required parameters and `contexts` */
{
  "method": "emulation.setGeolocationOverride",
  "params": {
    "contexts": [
      "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa"
    ],
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  }
}

/* With required parameters and `userContexts` */
{
  "method": "emulation.setGeolocationOverride",
  "params": {
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    },
    "userContexts": [
      "a812d4d0-8c8f-4c78-9de1-3e5c5b3b3c3c"
    ]
  }
}

/* With required and optional parameters */
{
  "method": "emulation.setGeolocationOverride",
  "params": {
    "contexts": [
      "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa"
    ],
    "coordinates": {
      "accuracy": 10,
      "altitude": 35,
      "altitudeAccuracy": 5,
      "heading": 90,
      "latitude": 51.5074,
      "longitude": -0.1278,
      "speed": 1.5
    }
  }
}
```

### Parameter

Das Feld `params` enthält:

- `contexts` {{optional_inline}}
  - : Ein Array mit einer oder mehreren Zeichenfolgen, die die IDs der betroffenen [Top-Level-Kontexte](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) enthalten.
    Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
    Dieses Feld darf nicht verwendet werden, wenn auch [`userContexts`](#usercontexts) angegeben ist.
- `coordinates`
  - : Ein Objekt, das die simulierte geografische Position angibt.
    Es kann `null` sein, um die Überschreibung für den angegebenen Geltungsbereich zu entfernen.
    Dieses Feld darf nicht verwendet werden, wenn auch `error` angegeben ist. Ist `error` nicht angegeben, ist dieses Feld erforderlich.
    Es enthält die folgenden Felder:
    - `accuracy` {{optional_inline}}
      - : Eine nicht negative Zahl, die die Genauigkeit der Werte `latitude` und `longitude` in Metern angibt.
        Der Standardwert ist `1`.
    - `altitude` {{optional_inline}}
      - : Eine Zahl, die die Höhe in Metern bezogen auf den mittleren Meeresspiegel angibt.
        Sie kann `null` sein, um nicht verfügbare Höhendaten zu simulieren.
        Der Standardwert ist `null`.
    - `altitudeAccuracy` {{optional_inline}}
      - : Eine nicht negative Zahl, die die Genauigkeit des Werts `altitude` in Metern angibt.
        Sie kann `null` sein, um nicht verfügbare Daten zur Höhengenauigkeit zu simulieren.
        Geben Sie `altitude` an, wenn Sie dieses Feld angeben.
        Der Standardwert ist `null`.
    - `heading` {{optional_inline}}
      - : Eine Zahl, die die Bewegungsrichtung in Grad im Uhrzeigersinn ausgehend von geografisch Nord angibt.
        Sie kann `null` sein, um nicht verfügbare Daten zur Bewegungsrichtung zu simulieren.
        Der Wert muss größer oder gleich `0` und kleiner als `360` sein.
        Der Standardwert ist `null`.
    - `latitude`
      - : Eine Zahl, die den Breitengrad in Dezimalgrad angibt.
        Der Wert muss zwischen `-90` und `90` liegen.
    - `longitude`
      - : Eine Zahl, die den Längengrad in Dezimalgrad angibt.
        Der Wert muss zwischen `-180` und `180` liegen.
    - `speed` {{optional_inline}}
      - : Eine nicht negative Zahl, die die Geschwindigkeit in Metern pro Sekunde angibt.
        Sie kann `null` sein, um nicht verfügbare Geschwindigkeitsdaten zu simulieren.
        Der Standardwert ist `null`.
- `error`
  - : Ein Objekt, das einen simulierten Fehler beim Ermitteln einer Position angibt.
    Dieses Feld darf nicht verwendet werden, wenn auch `coordinates` angegeben ist. Ist `coordinates` nicht angegeben, ist dieses Feld erforderlich.
    - `type`
      - : Eine Zeichenfolge, die den simulierten Fehler angibt.
        Der einzige unterstützte Wert ist `positionUnavailable`.
- `userContexts` {{optional_inline}}
  - : Ein Array mit einer oder mehreren Zeichenfolgen, die die IDs der betroffenen [Benutzerkontexte](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) enthalten.
    Benutzerkontext-IDs werden von Befehlen wie [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) oder [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) zurückgegeben.
    Dieses Feld darf nicht verwendet werden, wenn auch [`contexts`](#contexts) angegeben ist.

Wenn weder `contexts` noch `userContexts` angegeben ist, gilt der Befehl für die gesamte Sitzung.

### Rückgabewert

Das Feld `result` in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Ein erforderlicher Parameter fehlt oder ein Parameter hat einen ungültigen Typ oder Wert.
    - Sowohl `contexts` als auch `userContexts` sind angegeben.
    - `contexts` oder `userContexts` ist ein leeres Array.
    - Ein in `contexts` angegebener Kontext ist kein Top-Level-Kontext.
    - Sowohl `coordinates` als auch `error` sind angegeben.
    - Weder `coordinates` noch `error` ist angegeben.
    - [`altitudeAccuracy`](#altitudeaccuracy) ist ohne [`altitude`](#altitude) angegeben.
- `no such frame`
  - : Es wurde kein Kontext mit einer in `contexts` angegebenen ID gefunden.
- `no such user context`
  - : Es wurde kein Benutzerkontext mit einer in `userContexts` angegebenen ID gefunden.

## Beschreibung

Mit dem Befehl `emulation.setGeolocationOverride` können Sie eine geografische Position für die ausgewählten Top-Level-Kontexte oder Benutzerkontexte simulieren. Wenn kein Geltungsbereich angegeben ist, gilt die Überschreibung für die gesamte Sitzung.
Der Befehl überschreibt die von der [Geolocation API](/de/docs/Web/API/Geolocation_API) gemeldete Position. So können Sie standortbezogene Funktionen testen, beispielsweise Geofencing für lokale Empfehlungen.

Der Parameter `coordinates` stellt eine simulierte Position bereit, während `error` einen Fehler beim Ermitteln einer Position simuliert.
Sie können diese Felder nicht zusammen verwenden, müssen aber eines davon angeben.
Wenn Sie ein einzelnes Koordinatenfeld wie `altitude` auf `null` setzen, simulieren Sie für dieses Feld nicht verfügbare Daten.

Eine Überschreibung für einen bestimmten Kontext hat Vorrang vor einer Überschreibung für dessen Benutzerkontext.
Eine Überschreibung für einen Benutzerkontext hat Vorrang vor einer Überschreibung für die gesamte Sitzung.

Um eine Überschreibung zu entfernen, setzen Sie `coordinates` für die betroffenen Kontexte oder Benutzerkontexte auf `null`.
Wenn Sie beispielsweise Paris für einen Benutzerkontext und London für einen darin enthaltenen Tab festlegen, meldet der Tab nach dem Entfernen seiner Überschreibung Paris.

Das Überschreiben der Position erteilt nicht automatisch die Berechtigung zur Standortbestimmung.
Um die Berechtigung zur Standortbestimmung für Ihren Test zu konfigurieren, verwenden Sie den Befehl [`permissions.setPermission`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/permissions/setPermission).

## Beispiele

### Standort eines Tabs mit den Koordinaten von Toronto überschreiben

Vorausgesetzt, Sie haben eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Angenommen, Sie haben eine Webseite, die anhand des Standorts der Benutzer Empfehlungen für Restaurants in der Nähe anzeigt, und möchten prüfen, ob sie Empfehlungen für Toronto anzeigt.

Öffnen Sie zunächst mit [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) einen Tab. Der Befehl gibt dessen Kontext-ID zurück.
Laden Sie die Seite anschließend über HTTPS oder von localhost, da die [Geolocation API](/de/docs/Web/API/Geolocation_API) einen sicheren Kontext erfordert.
Erteilen Sie außerdem mit [`permissions.setPermission`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/permissions/setPermission) die Berechtigung zur Standortbestimmung für den Origin der Seite.

Senden Sie die folgende Nachricht, um den Standort des Tabs mit den Koordinaten von Toronto zu überschreiben:

```json
{
  "id": 1,
  "method": "emulation.setGeolocationOverride",
  "params": {
    "contexts": ["5e5e96e8-5247-4f22-9b35-a4a2d841cbaa"],
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
    }
  }
}
```

Der Browser antwortet mit einem leeren `result`-Objekt:

```json
{
  "type": "success",
  "id": 1,
  "result": {}
}
```

Lösen Sie nach erfolgreicher Ausführung des Befehls die Standortabfrage der Seite aus.
Wenn die Seite die Position der Benutzer anfordert, gibt der Browser die überschriebenen Koordinaten zurück.
Prüfen Sie, ob die Seite Restaurantempfehlungen für Toronto anzeigt.

Um die Überschreibung zu entfernen, senden Sie denselben Befehl mit `coordinates` auf `null` gesetzt und demselben `contexts`-Array.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Befehl [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts)
- Befehl [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create)
- Befehl [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree)
- Befehl [`permissions.setPermission`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/permissions/setPermission)
- [Geolocation API](/de/docs/Web/API/Geolocation_API)

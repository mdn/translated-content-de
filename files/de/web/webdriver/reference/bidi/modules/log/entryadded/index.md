---
title: "`log.entryAdded`-Ereignis"
short-title: entryAdded
slug: Web/WebDriver/Reference/BiDi/Modules/log/entryAdded
l10n:
  sourceCommit: 8a86bbb9816f718762fa855d78b92e5525c0d520
---

Das [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) `log.entryAdded` des Moduls [`log`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/log) wird ausgelöst, wenn im Browser ein neuer Protokolleintrag entsteht – entweder durch einen Aufruf der Console-API oder durch einen unbehandelten JavaScript-Fehler.

## Ereignisdaten

Das Feld `params` in der Ereignisbenachrichtigung enthält ein Protokolleintragsobjekt. Je nach Quelle hat dieses Objekt einen anderen Typ: `"console"` oder `"javascript"`. Jeder Typ kann zusätzliche, quellenspezifische Felder enthalten.

### Gemeinsame Felder

Alle Protokolleintragsobjekte enthalten die folgenden Felder:

- `level`
  - : Ein String, der den Schweregrad des Protokolleintrags angibt. Er hat einen der folgenden Werte:
    - `"debug"`: Eine Debug-Meldung (von [`console.debug()`](/de/docs/Web/API/console/debug_static) oder [`console.trace()`](/de/docs/Web/API/console/trace_static)).
    - `"info"`: Eine Informationsmeldung (von [`console.log()`](/de/docs/Web/API/console/log_static), [`console.info()`](/de/docs/Web/API/console/info_static) und [anderen Console-Methoden](/de/docs/Web/API/console), die keinen spezifischeren Schweregrad erzeugen).
    - `"warn"`: Eine Warnmeldung (von [`console.warn()`](/de/docs/Web/API/console/warn_static)).
    - `"error"`: Eine Fehlermeldung (von [`console.error()`](/de/docs/Web/API/console/error_static) oder [`console.assert()`](/de/docs/Web/API/console/assert_static)).
- `source`
  - : Ein Objekt, das den [Realm](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#realms) identifiziert, in dem der Protokolleintrag erstellt wurde. Es enthält die folgenden Felder:
    - `realm`
      - : Ein String mit der ID des Realm.
    - `context` {{optional_inline}}
      - : Ein String mit der ID des [Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts), in dem der Protokolleintrag erstellt wurde.
    - `userContext` {{optional_inline}}
      - : Ein String mit der ID des [Benutzerkontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts), in dem das skriptbezogene Ereignis aufgetreten ist.
- `stackTrace` {{optional_inline}}
  - : Ein Objekt, das den JavaScript-Aufrufstapel zum Zeitpunkt der Erstellung des Protokolleintrags darstellt.
    Es enthält das folgende Feld:
    - `callFrames`
      - : Ein Array mit null oder mehr Stack-Frame-Objekten.
        Jedes Objekt enthält die folgenden Felder:
        - `columnNumber`
          - : Eine nicht negative Ganzzahl mit der nullbasierten Spaltennummer des ausgeführten Codes.
        - `functionName`
          - : Ein String mit dem Namen der ausgeführten Funktion.
        - `lineNumber`
          - : Eine nicht negative Ganzzahl mit der nullbasierten Zeilennummer des ausgeführten Codes.
        - `url`
          - : Ein String mit der URL des Skripts.
- `text`
  - : Ein String mit der Protokollmeldung oder `null`, falls keine verfügbar ist. Bei Console-Einträgen besteht er aus allen in Strings umgewandelten Argumenten, die durch Leerzeichen verbunden sind; bei JavaScript-Fehlern enthält er in der Regel die Fehlermeldung.
    Das genaue Format hängt vom Browser ab. Verlassen Sie sich daher bei Prüfungen in Tests nicht auf diesen Wert.
- `timestamp`
  - : Eine nicht negative Ganzzahl, die den Zeitpunkt der Erstellung des Protokolleintrags als Anzahl der seit der Unix-Epoche vergangenen Millisekunden angibt ({{jsxref("Date.now()")}}).
- `type`
  - : Ein String, der die Quelle des Protokolleintrags identifiziert. Er hat einen der folgenden Werte:
    - `"console"`: Gibt an, dass der Protokolleintrag durch den Aufruf einer Console-API-Methode erzeugt wurde (zum Beispiel [`console.log()`](/de/docs/Web/API/console/log_static) oder [`console.warn()`](/de/docs/Web/API/console/warn_static)). Protokolleintragsobjekte dieses Typs enthalten [zusätzliche Felder](#console_log_entry_fields).
    - `"javascript"`: Gibt an, dass der Protokolleintrag durch einen unbehandelten JavaScript-Fehler erzeugt wurde.

### Felder von `"console"`-Protokolleinträgen

Zusätzlich zu den [gemeinsamen Feldern](#gemeinsame_felder) enthalten Protokolleintragsobjekte mit `"type": "console"` auch:

- `args`
  - : Ein Array von Objekten, die die an die Console-Methode übergebenen Argumente darstellen. Jedes Objekt hat ein `type`-Feld (beispielsweise `"string"`, `"number"`, `"boolean"` oder `"array"`) sowie optionale Felder `value`, `handle` und `internalId`.
- `method`
  - : Ein String mit dem Namen der aufgerufenen Console-Methode (beispielsweise `"log"`, `"error"`, `"assert"`, `"debug"`, `"trace"` oder `"warn"`).

## Beispiele

### Ein Ereignis für eine Console-Protokollmeldung empfangen

Wenn eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und ein [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `log.entryAdded` aktiv sind, sendet der Browser ein `log.entryAdded`-Ereignis, sobald ein Skript `console.log("hello", [1, true, "foo"])` ausführt:

```json
{
  "type": "event",
  "method": "log.entryAdded",
  "params": {
    "type": "console",
    "method": "log",
    "source": {
      "realm": "7c37f4c0-abcd-1234-ef56-789012345678",
      "context": "6B3D5B3A-6571-432B-8E96-E53B5C2ECBB5"
    },
    "args": [
      {
        "type": "string",
        "value": "hello"
      },
      {
        "type": "array",
        "value": [
          { "type": "number", "value": 1 },
          { "type": "boolean", "value": true },
          { "type": "string", "value": "foo" }
        ]
      }
    ],
    "level": "info",
    "text": "hello 1,true,foo",
    "timestamp": 1712345678901,
    "stackTrace": {
      "callFrames": [
        {
          "columnNumber": 8,
          "functionName": "",
          "lineNumber": 1,
          "url": "https://example.com/app.js"
        }
      ]
    }
  }
}
```

### Ein Ereignis für eine Console-Warnung empfangen

Wenn eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und ein [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `log.entryAdded` aktiv sind, sendet der Browser ein `log.entryAdded`-Ereignis, sobald ein Skript `console.warn("something went wrong")` ausführt:

```json
{
  "type": "event",
  "method": "log.entryAdded",
  "params": {
    "type": "console",
    "method": "warn",
    "source": {
      "realm": "7c37f4c0-abcd-1234-ef56-789012345678",
      "context": "6B3D5B3A-6571-432B-8E96-E53B5C2ECBB5"
    },
    "args": [
      {
        "type": "string",
        "value": "something went wrong"
      }
    ],
    "level": "warn",
    "text": "something went wrong",
    "timestamp": 1712345678950,
    "stackTrace": {
      "callFrames": [
        {
          "columnNumber": 8,
          "functionName": "",
          "lineNumber": 1,
          "url": "https://example.com/app.js"
        }
      ]
    }
  }
}
```

### Ein Ereignis für einen unbehandelten JavaScript-Fehler empfangen

Wenn eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und ein [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `log.entryAdded` aktiv sind, sendet der Browser ein `log.entryAdded`-Ereignis, sobald ein unbehandelter JavaScript-Fehler auftritt:

```json
{
  "type": "event",
  "method": "log.entryAdded",
  "params": {
    "type": "javascript",
    "level": "error",
    "source": {
      "realm": "7c37f4c0-abcd-1234-ef56-789012345678",
      "context": "6B3D5B3A-6571-432B-8E96-E53B5C2ECBB5"
    },
    "text": "ReferenceError: undefinedVariable is not defined",
    "timestamp": 1712345679100,
    "stackTrace": {
      "callFrames": [
        {
          "columnNumber": 27,
          "functionName": "",
          "lineNumber": 3,
          "url": "https://example.com/app.js"
        },
        {
          "columnNumber": 18,
          "functionName": "",
          "lineNumber": 3,
          "url": "https://example.com/app.js"
        }
      ]
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Befehl [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe)
- API [`console`](/de/docs/Web/API/console)

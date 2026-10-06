---
title: "`log.entryAdded`-Ereignis"
short-title: entryAdded
slug: Web/WebDriver/Reference/BiDi/Modules/log/entryAdded
l10n:
  sourceCommit: 7124ff73f982c7cd1882e5056e849443116f0333
---

Das [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) `log.entryAdded` des Moduls [`log`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/log) wird ausgelöst, wenn im Browser ein neuer Protokolleintrag entsteht – entweder durch einen Aufruf der Console-API oder durch einen unbehandelten JavaScript-Fehler.

## Ereignisdaten

Das Feld `params` in der Ereignisbenachrichtigung enthält ein Protokolleintragsobjekt. Je nach Quelle hat dieses Objekt den Typ `"console"` oder `"javascript"`. Jeder Typ kann zusätzliche quellenspezifische Felder enthalten.

### Gemeinsame Felder

Alle Protokolleintragsobjekte enthalten die folgenden Felder:

- `level`
  - : Eine Zeichenfolge, die den Schweregrad des Protokolleintrags angibt. Sie hat einen der folgenden Werte:
    - `"debug"`: Eine Debug-Meldung (von [`console.debug()`](/de/docs/Web/API/console/debug_static) oder [`console.trace()`](/de/docs/Web/API/console/trace_static)).
    - `"info"`: Eine Informationsmeldung (von [`console.log()`](/de/docs/Web/API/console/log_static), [`console.info()`](/de/docs/Web/API/console/info_static) und [anderen Console-Methoden](/de/docs/Web/API/console), die keinen spezifischeren Schweregrad erzeugen).
    - `"warn"`: Eine Warnmeldung (von [`console.warn()`](/de/docs/Web/API/console/warn_static)).
    - `"error"`: Eine Fehlermeldung (von [`console.error()`](/de/docs/Web/API/console/error_static) oder [`console.assert()`](/de/docs/Web/API/console/assert_static)).
- `source`
  - : Ein Objekt, das den [Realm](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#realms) identifiziert, in dem der Protokolleintrag erstellt wurde. Es enthält die folgenden Felder:
    - `realm`
      - : Eine Zeichenfolge mit der ID des Realms.
    - `context` {{optional_inline}}
      - : Eine Zeichenfolge mit der ID des [Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts), in dem der Protokolleintrag erstellt wurde.
    - `userContext` {{optional_inline}}
      - : Eine Zeichenfolge mit der ID des [Benutzerkontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts), in dem das skriptbezogene Ereignis aufgetreten ist.
- `stackTrace` {{optional_inline}}
  - : Ein Objekt mit einem `callFrames`-Array, das den JavaScript-Aufrufstapel zum Zeitpunkt der Erstellung des Eintrags darstellt. Jedes Element des Arrays ist ein Aufrufrahmen mit den folgenden Feldern: `columnNumber`, `functionName`, `lineNumber` und `url`.
- `text`
  - : Eine Zeichenfolge mit der Protokollmeldung oder `null`, wenn sie nicht verfügbar ist. Bei Console-Einträgen besteht sie aus den aneinandergereihten, durch Leerzeichen getrennten Zeichenfolgendarstellungen aller Argumente; bei JavaScript-Fehlern ist sie in der Regel die Fehlermeldung.
    Das genaue Format hängt vom Browser ab. Verlassen Sie sich daher bei Assertions in Tests nicht auf diesen Wert.
- `timestamp`
  - : Eine nicht negative Ganzzahl, die den Erstellungszeitpunkt des Protokolleintrags als Anzahl der seit der Unix-Epoche verstrichenen Millisekunden angibt ({{jsxref("Date.now()")}}).
- `type`
  - : Eine Zeichenfolge, die die Quelle des Protokolleintrags identifiziert. Sie hat einen der folgenden Werte:
    - `"console"`: Gibt an, dass der Protokolleintrag durch den Aufruf einer Console-API-Methode erzeugt wurde (beispielsweise [`console.log()`](/de/docs/Web/API/console/log_static) oder [`console.warn()`](/de/docs/Web/API/console/warn_static)). Protokolleintragsobjekte dieses Typs enthalten [zusätzliche Felder](#console_log_entry_fields).
    - `"javascript"`: Gibt an, dass der Protokolleintrag durch einen unbehandelten JavaScript-Fehler erzeugt wurde.

### Felder von `"console"`-Protokolleinträgen

Zusätzlich zu den [gemeinsamen Feldern](#gemeinsame_felder) enthalten Protokolleintragsobjekte mit `"type": "console"` die folgenden Felder:

- `args`
  - : Ein Array von Objekten, die die an die Console-Methode übergebenen Argumente darstellen. Jedes Objekt hat ein `type`-Feld (beispielsweise `"string"`, `"number"`, `"boolean"` oder `"array"`) und optional die Felder `value`, `handle` und `internalId`.
- `method`
  - : Eine Zeichenfolge mit dem Namen der aufgerufenen Console-Methode (beispielsweise `"log"`, `"error"`, `"assert"`, `"debug"`, `"trace"` oder `"warn"`).

## Beispiele

### Ein Ereignis für einen Console-Protokolleintrag empfangen

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

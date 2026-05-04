---
title: log.entryAdded Ereignis
short-title: log.entryAdded
slug: Web/WebDriver/Reference/BiDi/Modules/log/entryAdded
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

Das `log.entryAdded` [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) des [`log`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/log) Moduls wird ausgelöst, wenn ein neuer Log-Eintrag im Browser erstellt wird, entweder durch einen Aufruf der Konsolen-API oder einen unbehandelten JavaScript-Fehler.

## Ereignisdaten

Das `params`-Feld in der Ereignisbenachrichtigung ist ein Log-Entry-Objekt. Abhängig von der Quelle des Logs hat das Log-Entry-Objekt unterschiedliche Typen: `"console"` oder `"javascript"`. Jeder Typ kann zusätzliche, für diese Quelle spezifische Felder bereitstellen.

### Allgemeine Felder

Alle Log-Entry-Objekte enthalten die folgenden Felder:

- `level`
  - : Ein String, der den Schweregrad des Log-Eintrags angibt. Er hat einen der folgenden Werte:
    - `"debug"`: Eine Debug-Nachricht (von [`console.debug()`](/de/docs/Web/API/console/debug_static) oder [`console.trace()`](/de/docs/Web/API/console/trace_static)).
    - `"info"`: Eine Informationsnachricht (von [`console.log()`](/de/docs/Web/API/console/log_static), [`console.info()`](/de/docs/Web/API/console/info_static) und [anderen Konsolenmethoden](/de/docs/Web/API/console), die keinen spezifischeren Level produzieren).
    - `"warn"`: Eine Warnung (von [`console.warn()`](/de/docs/Web/API/console/warn_static)).
    - `"error"`: Eine Fehlermeldung (von [`console.error()`](/de/docs/Web/API/console/error_static) oder [`console.assert()`](/de/docs/Web/API/console/assert_static)).
- `source`
  - : Ein Objekt, das den [realm](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms) identifiziert, in dem der Log-Eintrag erstellt wurde. Es enthält die folgenden Felder:
    - `realm`
      - : Ein String, der die ID des Realms enthält.
    - `context` {{optional_inline}}
      - : Ein String, der die ID des Kontexts enthält, in dem der Log-Eintrag erstellt wurde.
    - `userContext` {{optional_inline}}
      - : Ein String, der die ID des Benutzerkontexts enthält, in dem das Skriptbezogene Ereignis aufgetreten ist.
- `stackTrace` {{optional_inline}}
  - : Ein Objekt mit einem `callFrames` Array, das den [JavaScript-Stack](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/stackTrace) zu dem Zeitpunkt darstellt, als der Eintrag erstellt wurde. Jedes Element im Array ist ein Stack-Frame mit den folgenden Feldern: `columnNumber`, `functionName`, `lineNumber` und `url`.
- `text`
  - : Ein String, der die Log-Nachricht enthält oder `null`, wenn nicht verfügbar. Bei Konsoleneinträgen ist es die Verkettung aller String-Argumente, die durch Leerzeichen verbunden sind, und bei JavaScript-Fehlern ist es generell die Fehlermeldung.
    Das genaue Format ist browserabhängig und sollte daher nicht für Tests verwendet werden.
- `timestamp`
  - : Eine nicht-negative Ganzzahl, die die Zeit angibt, zu der der Log-Eintrag erstellt wurde, in UTC, als verstrichene Millisekunden seit dem Epoch ({{jsxref("Date.now()")}}).
- `type`
  - : Ein String, der die Quelle des Log-Eintrags identifiziert. Er hat einen der folgenden Werte:
    - `"console"`: Zeigt an, dass der Log-Eintrag aus einem Aufruf einer Konsolen-API-Methode generiert wurde (z.B. [`console.log()`](/de/docs/Web/API/console/log_static), [`console.warn()`](/de/docs/Web/API/console/warn_static)). Log-Entry-Objekte dieses Typs enthalten [zusätzliche Felder](#console_log_entry_fields).
    - `"javascript"`: Zeigt an, dass der Log-Eintrag aus einem unbehandelten JavaScript-Fehler generiert wurde.

### `"console"` Log-Entry-Felder

Zusätzlich zu den [allgemeinen Feldern](#allgemeine_felder) enthalten Log-Entry-Objekte mit `"type": "console"` auch:

- `args`
  - : Ein Array von Objekten, die die an die Konsolenmethode übergebenen Argumente repräsentieren. Jedes Objekt hat ein `type` Feld (wie `"string"`, `"number"`, `"boolean"` oder `"array"`) und optionale `value`, `handle` und `internalId` Felder.
- `method`
  - : Ein String, der den Namen der aufgerufenen Konsolenmethode enthält (z.B. `"log"`, `"error"`, `"assert"`, `"debug"`, `"trace"`, `"warn"`).

## Beispiele

### Empfang eines Ereignisses für ein Konsolen-Log

Mit einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einem [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `log.entryAdded` aktiv sendet der Browser ein `log.entryAdded` Ereignis, wenn ein Skript `console.log("hello", [1, true, "foo"])` auswertet:

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

### Empfang eines Ereignisses für eine Konsolenwarnung

Mit einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einem [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `log.entryAdded` aktiv sendet der Browser ein `log.entryAdded` Ereignis, wenn ein Skript `console.warn("something went wrong")` auswertet:

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

### Empfang eines Ereignisses für einen unbehandelten JavaScript-Fehler

Mit einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einem [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `log.entryAdded` aktiv sendet der Browser ein `log.entryAdded` Ereignis, wenn ein unbehandelter JavaScript-Fehler auftritt:

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

- [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) Befehl
- [`console`](/de/docs/Web/API/console) API

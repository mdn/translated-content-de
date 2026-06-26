---
title: "`browsingContext.reload`-Befehl"
short-title: reload
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload
l10n:
  sourceCommit: 50e846e7423814d7d0c3c3630ff8e793b38cad8a
---

Der `browsingContext.reload` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext)-Moduls lädt den angegebenen [Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) neu.

## Syntax

```json-nolint
{
  "method": "browsingContext.reload",
  "params": {
    "context": "<contextId>"
  }
}
```

### Parameter

Das `params`-Feld enthält:

- `context`
  - : Ein String, der die ID des neu zu ladenden Kontexts enthält.
    Kontext-IDs werden durch Befehle wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
- `ignoreCache` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob der Browser den HTTP-Cache beim Neuladen umgehen soll.
    - `false`: Der Browser kann zwischengespeicherte Ressourcen beim Neuladen verwenden. Dies ist der Standardwert.
    - `true`: Der Browser lädt die Seite neu, ohne zwischengespeicherte Ressourcen zu verwenden, und ruft alle Inhalte aus dem Netzwerk ab.
- `wait` {{optional_inline}}
  - : Ein Schlüsselwort, das die Phase der Dokumentenladezeit angibt, zu der der Befehl zurückkehrt (die Phasen entsprechen denen der [`document.readyState`](/de/docs/Web/API/Document/readyState)-Eigenschaft).
    Es kann einen der folgenden Werte annehmen:
    - `"complete"`
      - : Der Befehl kehrt zurück, wenn das Dokument und alle seine Ressourcen vollständig geladen sind.
        Verwenden Sie diesen Wert, wenn Ihre Automatisierung mit dem Seiteninhalt interagieren muss — zum Beispiel, um einen Button zu klicken oder Text zu lesen — bevor weitere Befehle gesendet werden.
    - `"interactive"`
      - : Der Befehl kehrt zurück, wenn das Dokument geparst wurde und zur Interaktion bereit ist.
        Verwenden Sie diesen Wert, wenn Sie das DOM benötigen, aber nicht darauf warten müssen, dass Bilder oder andere Ressourcen geladen sind.
    - `"none"`
      - : Der Befehl kehrt zurück, sobald die Navigation festgeschrieben ist, das heißt, der Browser hat begonnen, die Seite neu zu laden, aber der Seiteninhalt ist noch nicht verfügbar.
        Dies ist auch das Standardverhalten, wenn `wait` weggelassen wird.
        Verwenden Sie diesen Wert, wenn Sie nur das Neuladen initiieren und dessen Fortschritt durch Navigationsevents verfolgen müssen.

### Rückgabewert

Das `result`-Objekt in der Antwort enthält die folgenden Felder:

- `navigation`
  - : Ein String, der die ID ({{Glossary("UUID", "UUID")}}) enthält, die diese Navigation eindeutig identifiziert. Für jeden `browsingContext.reload`-Befehl wird eine neue UUID generiert.
    Wenn Sie für Navigationsevents wie [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) angemeldet sind, enthält das Event diese gleiche UUID, sodass Sie das Event zurück zu diesem spezifischen Neuladevorgang zuordnen können.
- `url`
  - : Ein String, der die URL des neu geladenen Dokuments enthält, einschließlich des Fragments.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
- `no such frame`
  - : Kein Kontext mit der angegebenen Kontext-ID gefunden.
- `unknown error`
  - : Ein Navigationsfehler ist aufgetreten, wie z.B. ein Netzwerkfehler oder ein abgebrochenes Neuladen.

## Beispiele

### Neuladen einer Seite

Angenommen, Sie haben eine [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Angenommen, ein Tab hat `https://example.com/` geladen. Verwenden Sie die Kontext-ID dieses Tabs, um die folgende Nachricht zu senden, um ihn neu zu laden:

```json
{
  "id": 1,
  "method": "browsingContext.reload",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa"
  }
}
```

Der Browser antwortet wie folgt mit der Navigations-ID und der URL des neu geladenen Dokuments:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "navigation": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "url": "https://example.com/"
  }
}
```

### Umgehen des Caches beim Neuladen einer Seite

Angenommen, ein Tab hat `https://example.com/` geladen und Sie möchten den Browser zwingen, alle Ressourcen aus dem Netzwerk abzurufen und den Cache zu umgehen. Verwenden Sie die Kontext-ID dieses Tabs, um die folgende Nachricht zu senden:

```json
{
  "id": 2,
  "method": "browsingContext.reload",
  "params": {
    "context": "d84e9b52-c4a1-4f88-b537-613c8a5b9e2d",
    "ignoreCache": true
  }
}
```

Der Browser lädt die Seite neu und antwortet, sobald die Navigation festgeschrieben ist:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "navigation": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    "url": "https://example.com/"
  }
}
```

### Warten, bis eine Seite vollständig geladen ist, während sie neu geladen wird

Angenommen, ein Tab hat `https://example.com/` geladen und Sie möchten ihn neu laden, aber nicht fortfahren, bis die Seite vollständig geladen ist. Verwenden Sie die Kontext-ID dieses Tabs, um die folgende Nachricht zu senden:

```json
{
  "id": 3,
  "method": "browsingContext.reload",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "wait": "complete"
  }
}
```

Der Browser antwortet wie folgt, sobald das Dokument und alle seine Ressourcen vollständig geladen sind:

```json
{
  "id": 3,
  "type": "success",
  "result": {
    "navigation": "c3d4e5f6-a7b8-9012-cdef-123456789012",
    "url": "https://example.com/"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate)-Befehl
- [`browsingContext.traverseHistory`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/traverseHistory)-Befehl
- [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create)-Befehl
- [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree)-Befehl
- [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted)-Event
- [`browsingContext.navigationCommitted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationCommitted)-Event
- [`browsingContext.navigationFailed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationFailed)-Event

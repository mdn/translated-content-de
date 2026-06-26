---
title: "`browsingContext.navigate` Kommando"
short-title: navigate
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate
l10n:
  sourceCommit: 50e846e7423814d7d0c3c3630ff8e793b38cad8a
---

Das `browsingContext.navigate` [Kommando](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) Moduls navigiert den angegebenen [Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) zur angegebenen URL.

## Syntax

```json-nolint
{
  "method": "browsingContext.navigate",
  "params": {
    "context": "<contextId>",
    "url": "<url>"
  }
}
```

### Parameter

Das `params` Feld enthält:

- `context`
  - : Ein String, der die ID des zu navigierenden Kontexts enthält.
    Kontext-IDs werden von Kommandos wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
- `url`
  - : Ein String, der die Ziel-URL enthält.
- `wait` {{optional_inline}}
  - : Ein Schlüsselwort, das die Stufe des Dokumentenladens bestimmt, bei der das Kommando zurückkehrt (die Stufen entsprechen denen der [`document.readyState`](/de/docs/Web/API/Document/readyState) Eigenschaft).
    Es kann einen der folgenden Werte annehmen:
    - `"complete"`
      - : Das Kommando gibt zurück, wenn das Dokument und alle seine Unterressourcen vollständig geladen sind.
        Verwenden Sie diesen Wert, wenn Ihre Automatisierung mit dem Seiteninhalt interagieren muss – beispielsweise um einen Button zu klicken oder Text zu lesen – bevor weitere Kommandos gesendet werden.
    - `"interactive"`
      - : Das Kommando gibt zurück, wenn das Dokument geparst wurde und bereit zur Interaktion ist.
        Verwenden Sie diesen Wert, wenn Sie das DOM verfügbar haben müssen, aber Bilder oder andere Unterressourcen nicht vollständig geladen sein müssen.
    - `"none"`
      - : Das Kommando gibt zurück, sobald die Navigation festgeschrieben wurde, das heißt, der Browser hat die URL akzeptiert und begonnen, die neue Seite zu laden, aber der Seiteninhalt ist noch nicht verfügbar.
        Dies ist auch das Standardverhalten, wenn `wait` weggelassen wird.
        Verwenden Sie diesen Wert, wenn Sie nur die Navigation initiieren müssen und deren Fortschritt durch Navigationsereignisse verfolgen möchten.

### Rückgabewert

Das `result` Objekt in der Antwort enthält die folgenden Felder:

- `navigation`
  - : Ein String, der die ID ({{Glossary("UUID", "UUID")}}) enthält, die diese Navigation eindeutig identifiziert. Für jedes `browsingContext.navigate` Kommando wird eine neue UUID generiert.
    Wenn Sie auf Navigationsereignisse wie [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) abonniert sind, enthält das Ereignis dieselbe UUID, sodass Sie das Ereignis mit diesem spezifischen Navigationsaufruf verknüpfen können.
- `url`
  - : Ein String, der die URL des geladenen Dokuments enthält, einschließlich des Fragments.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
    Dieser Fehler wird auch zurückgegeben, wenn der `url` Parameter keine gültige URL ist.
- `no such frame`
  - : Es wird kein Kontext mit der angegebenen Kontext-ID gefunden.
- `unknown error`
  - : Ein Navigationsfehler ist aufgetreten, wie zum Beispiel ein Netzwerkfehler oder eine abgebrochene Navigation.

## Beispiele

### Navigation zu einer URL

Angenommen, Sie haben eine [WebDriver BiDi Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Angenommen, Sie erstellen einen neuen Tab mit [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create). Verwenden Sie die Kontext-ID dieses Tabs, um die folgende Nachricht zu senden, um ihn zu `https://example.com/page.html` zu navigieren:

```json
{
  "id": 1,
  "method": "browsingContext.navigate",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "url": "https://example.com/page.html"
  }
}
```

Der Browser antwortet wie folgt mit der Navigations-ID und der URL des geladenen Dokuments:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "navigation": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "url": "https://example.com/page.html"
  }
}
```

### Navigation und Warten auf vollständiges Laden der Seite

Angenommen, Sie möchten einen Kontext zu `https://example.com/form.html` navigieren und warten, bis die Seite vollständig geladen ist, bevor Sie fortfahren. Senden Sie die folgende Nachricht:

```json
{
  "id": 2,
  "method": "browsingContext.navigate",
  "params": {
    "context": "d84e9b52-c4a1-4f88-b537-613c8a5b9e2d",
    "url": "https://example.com/form.html",
    "wait": "complete"
  }
}
```

Der Browser antwortet wie folgt, sobald das Dokument und alle seine Unterressourcen vollständig geladen sind:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "navigation": "b2c3d4e5-f6a7-8901-bcde-f01234567890",
    "url": "https://example.com/form.html"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browsingContext.reload`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) Kommando
- [`browsingContext.traverseHistory`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/traverseHistory) Kommando
- [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) Kommando
- [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) Kommando
- [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) Ereignis
- [`browsingContext.navigationCommitted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationCommitted) Ereignis
- [`browsingContext.navigationFailed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationFailed) Ereignis

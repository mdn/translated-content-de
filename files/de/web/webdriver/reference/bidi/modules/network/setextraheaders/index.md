---
title: Befehl `network.setExtraHeaders`
short-title: setExtraHeaders
slug: Web/WebDriver/Reference/BiDi/Modules/network/setExtraHeaders
l10n:
  sourceCommit: fd6a5b07ff0cee3eed0540c09e2f49145541dc76
---

Der [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) `network.setExtraHeaders` des Moduls [`network`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network) legt Header fest, die der Browser seinen ausgehenden Anfragen hinzufügt. Dabei ersetzt er vorhandene Header mit demselben Namen.
Die Header gelten für Anfragen aus allen [Kontexten](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) oder aus den angegebenen [Benutzerkontexten](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) beziehungsweise [Top-Level-Kontexten](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context).

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "network.setExtraHeaders",
  "params": {
    "headers": [
      {
        "name": "X-Test-Run",
        "value": {
          "type": "string",
          "value": "checkout-flow"
        }
      }
    ]
  }
}

/* With the optional `contexts` parameter */
{
  "method": "network.setExtraHeaders",
  "params": {
    "contexts": ["93ee5bd6-d256-4608-a002-9a8995cc0e5f"],
    "headers": [
      {
        "name": "X-Test-Run",
        "value": {
          "type": "string",
          "value": "checkout-flow"
        }
      }
    ]
  }
}

/* With the optional `userContexts` parameter */
{
  "method": "network.setExtraHeaders",
  "params": {
    "headers": [
      {
        "name": "X-Test-Run",
        "value": {
          "type": "string",
          "value": "checkout-flow"
        }
      }
    ],
    "userContexts": ["4e4b1f6d-3f1a-4b2e-9f8c-1a2b3c4d5e6f"]
  }
}
```

### Parameter

Das Feld `params` enthält:

- `contexts` {{optional_inline}}
  - : Ein Array mit einer oder mehreren Kontext-ID-Zeichenfolgen. Jede davon bezeichnet einen [Top-Level-Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context), dessen Anfragen die angegebenen Header enthalten.
    Anfragen aus untergeordneten Kontexten, etwa iframes, enthalten diese Header ebenfalls.
    Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.

    Dieses Feld kann nicht verwendet werden, wenn auch `userContexts` angegeben ist.

- `headers`
  - : Ein Array von Objekten, die jeweils einen Header angeben, der Anfragen hinzugefügt werden soll.
    Das Array ersetzt die zuvor für dieselben Kontexte, dieselben Benutzerkontexte oder alle Kontexte festgelegten Header.
    Geben Sie ein leeres Array an, um die zuvor festgelegten Header zu entfernen.

    Jedes Objekt enthält die folgenden Felder:
    - `name`
      - : Eine Zeichenfolge mit dem Namen des Headers, beispielsweise `X-Test-Run`.
        Der Name muss ein gültiger Name für einen [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) sein.
    - `value`
      - : Ein Objekt, das den Header-Wert angibt.
        Es enthält die folgenden Felder:
        - `type`
          - : Eine Zeichenfolge, die angibt, wie der Header-Wert kodiert ist.
            Sie kann einen der folgenden Werte annehmen:
            - `base64`: Der Wert besteht aus {{Glossary("Base64", "Base64")}}-kodierten Bytes.
            - `string`: Der Wert ist Text, den der Browser als {{Glossary("UTF-8", "UTF-8")}}-kodierte Bytes sendet.
        - `value`
          - : Eine Zeichenfolge mit dem Header-Wert in der durch das Feld [`type`](#type) angegebenen Kodierung.
            Der dekodierte Header-Wert darf weder Zeilenumbrüche noch Nullzeichen enthalten und nicht mit einem Leerzeichen oder Tabulator beginnen oder enden.

- `userContexts` {{optional_inline}}
  - : Ein Array mit einer oder mehreren Zeichenfolgen. Jede davon bezeichnet einen [Benutzerkontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts), dessen Anfragen die angegebenen Header enthalten.
    Benutzerkontext-IDs werden von Befehlen wie [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) oder [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) zurückgegeben.

    Dieses Feld kann nicht verwendet werden, wenn auch `contexts` angegeben ist.

Wenn weder `contexts` noch `userContexts` angegeben ist, werden die Header Anfragen aus allen Kontexten hinzugefügt.

### Rückgabewert

Das Feld `result` in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Ein erforderlicher Parameter fehlt oder ein Parameter hat einen ungültigen Typ.
    - Das Feld `type` im `value`-Objekt eines Headers ist weder `base64` noch `string`.
    - Sowohl `contexts` als auch `userContexts` sind angegeben.
    - `contexts` oder `userContexts` ist angegeben, aber leer.
    - Ein Header-Name ist ungültig.
    - Ein Header-Wert ist ungültig.
    - Ein in `contexts` angegebener Kontext ist kein Top-Level-Kontext.
- `no such frame`
  - : Es wurde kein Kontext mit einer in `contexts` angegebenen ID gefunden.
- `no such user context`
  - : Es wurde kein Benutzerkontext mit einer in `userContexts` angegebenen ID gefunden.

## Beschreibung

Wenn Sie den Befehl `network.setExtraHeaders` senden, fügt der Browser die angegebenen Header allen Anfragen aus den ausgewählten Kontexten oder Benutzerkontexten hinzu. Ist weder `contexts` noch `userContexts` angegeben, gilt dies für Anfragen aus allen Kontexten.
Dazu gehören Navigationsanfragen und Anfragen, die von Skripten beispielsweise mit [`fetch()`](/de/docs/Web/API/Window/fetch) ausgeführt werden.
Die Header werden hinzugefügt, bevor der Browser das Ereignis [`network.beforeRequestSent`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) auslöst. Daher enthält das Array `headers` im `request`-Objekt des Ereignisses die Header bereits.

Jeder Aufruf von `network.setExtraHeaders` ersetzt die zuvor festgelegten Header nur für die angegebenen Kontexte oder Benutzerkontexte beziehungsweise für alle Kontexte, wenn keiner der beiden Parameter angegeben ist.
Wenn Sie beispielsweise die Header für einen Tab ändern, werden dadurch die für dessen Benutzerkontext festgelegten Header nicht entfernt.

Header, die für alle Kontexte oder für einen Benutzerkontext festgelegt wurden, gelten auch für Kontexte, die nach der Verarbeitung des Befehls erstellt werden.
Header, die für einen Top-Level-Kontext festgelegt wurden, gelten auch für untergeordnete Kontexte, die später darin erstellt werden.
Die Header bleiben wirksam, bis Sie sie mit einem weiteren `network.setExtraHeaders`-Befehl ersetzen oder die Sitzung endet.

Ein von Ihnen angegebener Header ersetzt einen vorhandenen Header mit demselben Namen, den der Browser andernfalls senden würde.
Der Browser ergänzt den vorhandenen Wert nicht.
Wenn Sie beispielsweise für {{HTTPHeader("Accept-Language")}} den Wert `de-DE` angeben, ersetzt dieser den vorhandenen Wert des Browsers, etwa `en-US,en;q=0.9`.

Der Browser kombiniert innerhalb derselben Sitzung die Header, die Sie für alle Kontexte, für einen Benutzerkontext und für einen Top-Level-Kontext festlegen.
Wenn Sie denselben Header auf mehreren dieser Ebenen festlegen, wird der spezifischste Wert gesendet: Ein für den Top-Level-Kontext festgelegter Wert hat Vorrang vor einem für den Benutzerkontext festgelegten Wert, und dieser hat Vorrang vor einem für alle Kontexte festgelegten Wert.

## Beispiele

### Einen Header zu jeder Anfrage hinzufügen

Angenommen, Sie haben eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Nehmen Sie außerdem an, dass zwei Tabs geöffnet sind, in denen jeweils die Seite angezeigt wird, die Sie testen.
Die Kontext-ID des ersten Tabs haben Sie mit [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) ermittelt.
Mit [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) haben Sie einen Benutzerkontext erstellt und dessen ID erhalten.
Anschließend haben Sie den zweiten Tab mit [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) in diesem Benutzerkontext geöffnet.

Angenommen, Ihr Testserver protokolliert Anfragen und Sie möchten erkennen, welcher Test für die jeweilige Anfrage verantwortlich ist.
Senden Sie die folgende Nachricht, um Anfragen aus allen Kontexten einen `X-Test-Run`-Header hinzuzufügen:

```json
{
  "id": 1,
  "method": "network.setExtraHeaders",
  "params": {
    "headers": [
      {
        "name": "X-Test-Run",
        "value": {
          "type": "string",
          "value": "checkout-flow"
        }
      }
    ]
  }
}
```

Der Browser antwortet mit einem leeren `result`-Objekt:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

Von nun an enthält jede Anfrage aus jedem Tab den Header `X-Test-Run: checkout-flow`.
Wenn Sie [`network.beforeRequestSent`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) abonniert haben, erscheint der Header auch im Array `headers` des `request`-Objekts jedes Ereignisses.

### Einen Header-Wert für einen Benutzerkontext überschreiben

Nehmen Sie für dieselbe Verbindung, Sitzung und dieselben Tabs wie im ersten Beispiel an, dass Sie die Header für alle Kontexte mit einem einzigen `network.setExtraHeaders`-Befehl durch zwei Header ersetzt haben: `X-Test-Run: checkout-flow` und `X-Tenant: tenant-b`.

Senden Sie die folgende Nachricht, um für Anfragen aus dem Benutzerkontext des zweiten Tabs einen anderen `X-Tenant`-Wert festzulegen:

```json
{
  "id": 2,
  "method": "network.setExtraHeaders",
  "params": {
    "headers": [
      {
        "name": "X-Tenant",
        "value": {
          "type": "string",
          "value": "tenant-a"
        }
      }
    ],
    "userContexts": ["4e4b1f6d-3f1a-4b2e-9f8c-1a2b3c4d5e6f"]
  }
}
```

Der Browser antwortet mit einem leeren `result`-Objekt:

```json
{
  "id": 2,
  "type": "success",
  "result": {}
}
```

Anfragen aus dem zweiten Tab enthalten nun `X-Test-Run: checkout-flow` und `X-Tenant: tenant-a`.
Anfragen aus dem ersten Tab enthalten weiterhin `X-Test-Run: checkout-flow` und `X-Tenant: tenant-b`.

### Einen Anfrage-Header für einen Tab ersetzen

Nehmen Sie für dieselbe Verbindung, Sitzung und dieselben Tabs wie im ersten Beispiel an, dass Sie prüfen möchten, wie eine Seite auf einen Benutzer reagiert, dessen bevorzugte Sprache kanadisches Französisch ist.

Senden Sie die folgende Nachricht, um den Header `Accept-Language` für den ersten Tab zu ersetzen:

```json
{
  "id": 3,
  "method": "network.setExtraHeaders",
  "params": {
    "contexts": ["93ee5bd6-d256-4608-a002-9a8995cc0e5f"],
    "headers": [
      {
        "name": "Accept-Language",
        "value": {
          "type": "string",
          "value": "fr-CA"
        }
      }
    ]
  }
}
```

Der Browser antwortet mit einem leeren `result`-Objekt:

```json
{
  "id": 3,
  "type": "success",
  "result": {}
}
```

Anfragen aus diesem Tab enthalten nun `Accept-Language: fr-CA` anstelle des Werts, den der Browser andernfalls senden würde, beispielsweise `en-US,en;q=0.9`.

### Die für alle Kontexte festgelegten Header entfernen

Senden Sie mit derselben Verbindung und Sitzung wie im ersten Beispiel die folgende Nachricht mit einem leeren Array `headers`, um die für alle Kontexte festgelegten Header zu entfernen:

```json
{
  "id": 4,
  "method": "network.setExtraHeaders",
  "params": {
    "headers": []
  }
}
```

Der Browser antwortet mit einem leeren `result`-Objekt:

```json
{
  "id": 4,
  "type": "success",
  "result": {}
}
```

Von nun an enthalten Anfragen den Header `X-Test-Run` nicht mehr.
Header, die für bestimmte Benutzerkontexte oder Top-Level-Kontexte festgelegt wurden, sind davon nicht betroffen.
Um diese Header zu entfernen, senden Sie ein leeres Array `headers` und geben Sie die entsprechenden IDs in `userContexts` oder `contexts` an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Befehl [`network.setCacheBehavior`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network/setCacheBehavior)
- Befehl [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext)
- Befehl [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree)
- Referenz zu [HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers)

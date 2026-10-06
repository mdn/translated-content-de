---
title: Befehl `script.getRealms`
short-title: getRealms
slug: Web/WebDriver/Reference/BiDi/Modules/script/getRealms
l10n:
  sourceCommit: 7124ff73f982c7cd1882e5056e849443116f0333
---

Der [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) `script.getRealms` des Moduls [`script`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script) gibt eine Liste aller [Realms](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#realms) zurück.
Sie können die Liste optional nach [Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) oder nach [Realm-Typ](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#types_of_realms) filtern.

## Syntax

```json-nolint
/* With no parameters */
{
  "method": "script.getRealms",
  "params": {}
}

/* With optional parameters */
{
  "method": "script.getRealms",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "type": "window"
  }
}
```

### Parameter

Das Feld `params` kann Folgendes enthalten:

- `context` {{optional_inline}}
  - : Ein String mit der ID des Kontexts, dessen Realms Sie auflisten möchten.
    Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
    Wenn das Feld nicht angegeben ist, werden die Realms aller Kontexte zurückgegeben.
- `type` {{optional_inline}}
  - : Ein String mit dem [Realm-Typ](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#types_of_realms), den Sie auflisten möchten.
    Er kann einen der folgenden Werte annehmen:
    - `"window"`: Ein Realm, dessen globales Objekt ein [`Window`](/de/docs/Web/API/Window) ist.
      Dazu gehören [Sandbox-Realms](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#sandbox_realms).
    - `"worker"`: Ein Realm, dessen globales Objekt ein [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist, jedoch keiner der spezifischeren globalen Geltungsbereiche für Dedicated Worker, Shared Worker oder Service Worker.
    - `"dedicated-worker"`: Ein Realm, dessen globales Objekt ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) ist.
    - `"shared-worker"`: Ein Realm, dessen globales Objekt ein [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) ist.
    - `"service-worker"`: Ein Realm, dessen globales Objekt ein [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ist.
    - `"worklet"`: Ein Realm, dessen globales Objekt ein [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope) ist, jedoch keiner der spezifischeren globalen Geltungsbereiche für Audio- oder Paint-Worklets.
    - `"audio-worklet"`: Ein Realm, dessen globales Objekt ein [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope) ist.
    - `"paint-worklet"`: Ein Realm, dessen globales Objekt ein [`PaintWorkletGlobalScope`](/de/docs/Web/API/PaintWorkletGlobalScope) ist.

    Wenn das Feld `type` nicht angegeben ist, werden Realms aller Typen zurückgegeben.

### Rückgabewert

Das Objekt `result` in der Antwort enthält das folgende Feld:

- `realms`
  - : Ein Array von Realm-Objekten, eines für jeden passenden Realm, oder ein leeres Array, wenn keine passenden Realms vorhanden sind.
    Der Wert des Felds `type` in jedem Objekt bestimmt, welche weiteren Felder vorhanden sind:
    - `context` {{optional_inline}}
      - : Ein String mit der ID des Kontexts, zu dem der Realm gehört.
        Dieses Feld ist nur enthalten, wenn der Wert von `type` `"window"` ist.
    - `origin`
      - : Ein String mit der {{Glossary("Origin", "Origin")}} des Realms.
    - `owners` {{optional_inline}}
      - : Ein Array mit einem einzigen Element: der ID des Realms, dem der Worker gehört.
        Dieses Feld ist nur enthalten, wenn der Wert von `type` `"dedicated-worker"` ist.
    - `realm`
      - : Ein String mit der ID des Realms.
    - `sandbox` {{optional_inline}}
      - : Ein String mit dem Namen des [Sandbox-Realms](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#sandbox_realms).
        Dieses Feld ist nur bei einem Sandbox-Realm enthalten, dessen Typ `"window"` ist.
    - `type`
      - : Ein String, der den Realm-Typ angibt.
        Mögliche Werte finden Sie beim Parameter [`type`](#type).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein Parameter hat einen ungültigen Typ.
    Dieser Fehler wird auch zurückgegeben, wenn `type` keiner der erkannten Realm-Typen ist.
- `no such frame`
  - : Es wurde kein Kontext mit der angegebenen `context`-ID gefunden.

## Beschreibung

Mit dem Befehl `script.getRealms` können Sie Realm-IDs ermitteln. Diese können Sie anschließend anstelle einer Kontext-ID an Befehle wie [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate), [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) oder [`script.disown`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/disown) übergeben.
Da Worker- und Worklet-Realms keine zugehörige Kontext-ID haben, können Sie ein Skript darin nur ausführen, indem Sie direkt auf den Realm verweisen.

Ein Kontext kann mehrere Realms haben. Wenn Sie nach `context` filtern, können daher der Realm des aktiven Dokuments, Sandbox-Realms und die Realms der Worker zurückgegeben werden, die dem Dokument gehören.
Die Realms untergeordneter Kontexte sind nicht enthalten.
Um die Realms eines untergeordneten Kontexts abzurufen, rufen Sie den Befehl mit der ID dieses Kontexts auf.

Es werden nur Realms zurückgegeben, die bereit sind, Skripte auszuführen. Ein Realm, der noch initialisiert wird, erscheint daher nicht im Ergebnis.
Realm-IDs ändern sich bei jeder Navigation zu einem anderen Dokument. Rufen Sie sie nach einer solchen Navigation daher erneut ab.

## Beispiele

### Alle Realms abrufen

Angenommen, Sie haben eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Angenommen, ein Tab ist unter `https://example.com` geöffnet und die Seite hat einen Dedicated Worker gestartet.
Außerdem haben Sie zuvor mit [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) einen Sandbox-Realm namens `myAutomationSandbox` erstellt.

Senden Sie die folgende Nachricht, um alle verfügbaren Realms abzurufen:

```json
{
  "id": 1,
  "method": "script.getRealms",
  "params": {}
}
```

Der Browser antwortet mit den drei Realms wie folgt:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "realms": [
      {
        "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
        "origin": "https://example.com",
        "realm": "7c37f4c0-abcd-1234-ef56-789012345678",
        "type": "window"
      },
      {
        "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
        "origin": "https://example.com",
        "realm": "e4f5a6b7-c8d9-4012-b3c4-d5e6f7a8b9c0",
        "sandbox": "myAutomationSandbox",
        "type": "window"
      },
      {
        "origin": "https://example.com",
        "owners": ["7c37f4c0-abcd-1234-ef56-789012345678"],
        "realm": "a1b2c3d4-e5f6-4708-9a1b-2c3d4e5f6071",
        "type": "dedicated-worker"
      }
    ]
  }
}
```

### Nur die Window-Realms eines Kontexts abrufen

Angenommen, Sie öffnen mit derselben Verbindung und Sitzung wie im vorherigen Beispiel einen zweiten Tab unter `https://example.net`.
Der neue Tab hat einen eigenen Kontext.

Senden Sie die folgende Nachricht, um nur die Window-Realms des ersten Tabs unter `https://example.com` abzurufen:

```json
{
  "id": 2,
  "method": "script.getRealms",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "type": "window"
  }
}
```

Der Browser antwortet nur mit den Realms, die dem angegebenen `context` und `type` entsprechen.
Der Realm des Dedicated Workers entspricht nicht dem angegebenen `type`, und der Realm des zweiten Tabs gehört zu einem anderen `context`. Daher fehlen beide in der Antwort:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "realms": [
      {
        "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
        "origin": "https://example.com",
        "realm": "7c37f4c0-abcd-1234-ef56-789012345678",
        "type": "window"
      },
      {
        "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
        "origin": "https://example.com",
        "realm": "e4f5a6b7-c8d9-4012-b3c4-d5e6f7a8b9c0",
        "sandbox": "myAutomationSandbox",
        "type": "window"
      }
    ]
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Befehl [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction)
- Befehl [`script.disown`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/disown)
- Befehl [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate)
- Ereignis [`script.realmCreated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmCreated)
- Ereignis [`script.realmDestroyed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmDestroyed)

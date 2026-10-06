---
title: Ereignis `script.realmCreated`
short-title: realmCreated
slug: Web/WebDriver/Reference/BiDi/Modules/script/realmCreated
l10n:
  sourceCommit: 7124ff73f982c7cd1882e5056e849443116f0333
---

Das [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) `script.realmCreated` des Moduls [`script`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script) wird ausgelöst, wenn ein neuer [Realm](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#realms) für ein Dokument, einen Worker oder ein Worklet erstellt wird.

## Ereignisdaten

Das Feld `params` in der Ereignisbenachrichtigung ist ein Objekt, das je nach Wert des Feldes `type` die folgenden Felder enthalten kann:

- `context` {{optional_inline}}
  - : Ein String mit der ID des [Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts), zu dem der Realm gehört.
    Dieses Feld ist nur enthalten, wenn das Feld `type` den Wert `"window"` hat.
- `origin`
  - : Ein String mit dem {{Glossary("Origin", "Origin")}} des Realms.
- `owners` {{optional_inline}}
  - : Ein Array mit einem einzigen Element, das die ID des Realms enthält, dem der Worker gehört.
    Dieses Feld ist nur enthalten, wenn das Feld `type` den Wert `"dedicated-worker"` hat.
- `realm`
  - : Ein String mit der ID des Realms.
    Übergeben Sie diesen Wert als Feld `realm` des Parameters `target` bei Befehlen wie [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate).
- `sandbox` {{optional_inline}}
  - : Ein String mit dem Namen des [Sandbox-Realms](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#sandbox_realms).
    Dieses Feld ist nur bei einem Sandbox-Realm enthalten, dessen Typ `"window"` ist.
- `type`
  - : Ein String, der den [Typ des Realms](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#types_of_realms) angibt.
    Er hat einen der folgenden Werte:
    - `"window"`: Ein Realm, dessen globales Objekt ein [`Window`](/de/docs/Web/API/Window) ist.
      Dazu gehören auch [Sandbox-Realms](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script#sandbox_realms).
    - `"worker"`: Ein Realm, dessen globales Objekt ein [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist, jedoch keiner der spezifischeren globalen Scopes für Dedicated Worker, Shared Worker oder Service Worker.
    - `"dedicated-worker"`: Ein Realm, dessen globales Objekt ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) ist.
    - `"shared-worker"`: Ein Realm, dessen globales Objekt ein [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) ist.
    - `"service-worker"`: Ein Realm, dessen globales Objekt ein [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ist.
    - `"worklet"`: Ein Realm, dessen globales Objekt ein [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope) ist, jedoch keiner der spezifischeren globalen Scopes für Audio- oder Paint-Worklets.
    - `"audio-worklet"`: Ein Realm, dessen globales Objekt ein [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope) ist.
    - `"paint-worklet"`: Ein Realm, dessen globales Objekt ein [`PaintWorkletGlobalScope`](/de/docs/Web/API/PaintWorkletGlobalScope) ist.

## Beschreibung

Verwenden Sie dieses Ereignis zusammen mit [`script.realmDestroyed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmDestroyed), um die Lebensdauer von JavaScript-Realms zu überwachen.

Wenn Sie dieses Ereignis [abonnieren](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe), sendet der Browser zunächst für jeden bereits vorhandenen Realm, der bereit ist, Skripte auszuführen, ein `script.realmCreated`-Ereignis. Anschließend sendet er weitere Ereignisse, wenn neue Realms erstellt werden.
Sie müssen daher [`script.getRealms`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms) nicht aufrufen, um die Realms zu ermitteln, die bereits vor dem Abonnieren vorhanden waren.

Bei einer Navigation zu einem anderen Dokument wird ein neuer Realm für das Dokument erstellt. Daher erhalten Sie ein neues Ereignis mit einer neuen Realm-ID.
Die Realm-ID aus der Zeit vor der Navigation ist nicht mehr gültig.

## Beispiele

### Ein Ereignis beim Laden eines Dokuments empfangen

Angenommen, Sie verfügen über eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), in der `script.realmCreated` [abonniert](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) ist.

Wenn beim Abonnieren bereits Realms vorhanden sind, erhalten Sie zuerst für jeden dieser Realms ein Ereignis.
Wenn anschließend ein Tab ein Dokument unter `https://example.com` lädt, sendet der Browser die folgende Benachrichtigung:

```json
{
  "type": "event",
  "method": "script.realmCreated",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "origin": "https://example.com",
    "realm": "7c37f4c0-abcd-1234-ef56-789012345678",
    "type": "window"
  }
}
```

### Ein Ereignis beim Starten eines Workers empfangen

Angenommen, die Seite startet mit derselben Verbindung und Sitzung wie im vorherigen Beispiel einen Dedicated Worker.

Der Browser sendet die folgende Benachrichtigung. Sie enthält kein Feld `context`, da ein Worker-Realm keinem Kontext angehört.
Stattdessen enthält `owners` die ID des Realms, dem der Worker gehört:

```json
{
  "type": "event",
  "method": "script.realmCreated",
  "params": {
    "origin": "https://example.com",
    "owners": ["7c37f4c0-abcd-1234-ef56-789012345678"],
    "realm": "a1b2c3d4-e5f6-4708-9a1b-2c3d4e5f6071",
    "type": "dedicated-worker"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Befehl [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction)
- Befehl [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate)
- Befehl [`script.getRealms`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms)
- Ereignis [`script.realmDestroyed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmDestroyed)
- Befehl [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe)

---
title: userScripts.execute()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/execute
l10n:
  sourceCommit: 14e9b0589ba62353a7cc08b2e2371b1c4ef0cac6
---

Injiziert ein Benutzerskript in einen Zielkontext (z. B. Tab oder Frame).

> [!NOTE]
> Standardmäßig wird das injizierte Skript bei `document_idle` ausgeführt oder sofort, wenn die Seite geladen ist. Wenn die Eigenschaft `injectImmediately` auf `true` gesetzt ist, injiziert das Skript ohne zu warten, selbst wenn die Seite noch lädt.

## Syntax

```js-nolint
let executeUserScript = browser.userScripts.execute(
  injection, // object
);
```

### Parameter

- `injection`
  - : Ein Objekt, das angibt, welche Benutzerskripte wohin und wie injiziert werden sollen.
    - `injectImmediately` {{optional_inline}}
      - : `boolean`. Wenn auf `true` gesetzt, wird die Injektion so schnell wie möglich im Zielkontext ausgelöst. Dies garantiert nicht, dass die Injektion vor dem Laden der Seite erfolgt, da die Seite möglicherweise vor dem Skript das Ziel erreicht.

    - `js`
      - : `array` von {{WebExtAPIRef("userScripts.ScriptSource")}}. Die Skripte, die in passende Seiten injiziert werden sollen.
    - `target`
      - : Ein Objekt, das den Zielkontext definiert, in den Skripte injiziert werden.
        - `allFrames` {{optional_inline}}
          - : `boolean`. Wenn auf `true` gesetzt, wird das Skript in alle verfügbaren Frames injiziert. Standardmäßig wird es nur in den obersten Frame injiziert.
        - `documentIds` {{optional_inline}}
          - : `array` von `string`. Die IDs der Dokumente, in die injiziert werden soll. Darf nicht angegeben werden, wenn `frameIds` gesetzt ist.
        - `frameIds` {{optional_inline}}
          - : `array` von `integer`. Die IDs der Frames, in die injiziert werden soll. Darf nicht angegeben werden, wenn `documentIds` gesetzt ist.
        - `tabId`
          - : `integer`. Die ID eines Tabs, in den injiziert werden soll.
    - `world` {{optional_inline}}
      - : {{WebExtAPIRef("userScripts.ExecutionWorld")}}. Die Ausführungsumgebung, die verwendet wird, um die Skripte auszuführen. Standardmäßig `"USER_SCRIPT"`.
    - `worldId` {{optional_inline}}
      - : `string`. ID einer Benutzerskript-Welt, in der das Skript ausgeführt wird. Nur gültig, wenn `world` `USER_SCRIPT` ist oder weggelassen wird. Wenn `worldId` weggelassen wird, wird das Skript in der Standard-`USER_SCRIPT`-Welt ("") ausgeführt. Werte mit führenden Unterstrichen (`_`) sind reserviert. Die maximale Länge beträgt 256 Zeichen. Eine Welt kann von mehreren Skripten als ihre Ausführungsumgebung verwendet werden. Um das Verhalten einer Welt zu konfigurieren, übergeben Sie ihre `worldId` an {{WebExtAPIRef("userScripts.configureWorld")}} bevor das erste Skript in dieser Welt ausgeführt wird.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von Objekten erfüllt wird, die das Ergebnis der Injektion mit folgenden Eigenschaften beschreiben:

- `documentId`
  - : `string`. Dokument-ID, die mit der Injektion verbunden ist.
- `error` {{optional_inline}}
  - : `string`. Fehlermeldung, falls vorhanden. Dies schließt sich gegenseitig mit `result` aus.
- `frameId`
  - : `integer`. Frame-ID, die mit der Injektion verbunden ist.
- `result` {{optional_inline}}
  - : `string`. Ergebnis der Skriptinjektion, falls vorhanden. Dies schließt sich gegenseitig mit `error` aus.

## Beispiele

```js
await browser.userScripts.execute({
  js: [{ code: "console.log('Hello world!');" }],
  target: { tabId: 1 },
});
```

## Browser-Kompatibilität

{{Compat}}

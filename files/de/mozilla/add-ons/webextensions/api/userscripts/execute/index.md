---
title: userScripts.execute()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/execute
l10n:
  sourceCommit: 6afda999d054c2ba12d13d129b13eb35952b4fbe
---

Fügt ein Benutzer-Skript in einen Zielkontext ein (z.B. Tab oder Frame).

> [!NOTE]
> Standardmäßig wird das eingefügte Skript bei `document_idle` oder sofort ausgeführt, wenn die Seite geladen ist. Wenn die Eigenschaft `injectImmediately` auf `true` gesetzt ist, wird das Skript ohne Wartezeit eingefügt, selbst wenn die Seite noch lädt.

## Syntax

```js-nolint
let executeUserScript = browser.userScripts.execute(
  injection, // array of objects
);
```

### Parameter

- `injection`
  - : Ein Array von Objekten, die spezifizieren, welche Benutzer-Skripte wo und wie eingefügt werden sollen.
    - `injectImmediately` {{optional_inline}}
      - : `boolean`. Wenn auf `true` gesetzt, wird die Einfügung so schnell wie möglich im Zielkontext ausgeführt. Dies garantiert nicht, dass die Einfügung vor dem Laden der Seite erfolgt, da die Seite möglicherweise geladen wird, bevor das Skript das Ziel erreicht hat.

    - `js`
      - : `array` von {{WebExtAPIRef("userScripts.ScriptSource")}}. Die Skripte, die in die passenden Seiten eingefügt werden sollen.
    - `target`
      - : Ein Objekt, das den Zielkontext definiert, in den Skripte eingefügt werden.
        - `allFrames` {{optional_inline}}
          - : `boolean`. Wenn auf `true` gesetzt, wird das Skript in alle verfügbaren Frames eingefügt. Standardmäßig auf `false`, wobei das Skript nur in das oberste Frame eingefügt wird.
        - `documentIds` {{optional_inline}}
          - : `array` von `string`. Die IDs der Dokumente, in die eingefügt werden soll. Darf nicht angegeben werden, wenn `frameIds` gesetzt ist.
        - `frameIds` {{optional_inline}}
          - : `array` von `integer`. Die IDs der Frames, in die eingefügt werden soll. Darf nicht angegeben werden, wenn `documentIds` gesetzt ist.
        - `tabId`
          - : `integer`. Die ID eines Tabs, in den eingefügt werden soll.
    - `world` {{optional_inline}}
      - : {{WebExtAPIRef("userScripts.ExecutionWorld")}}. Die Ausführungsumgebung, die verwendet wird, um die Skripte auszuführen. Standardmäßig `"USER_SCRIPT"`.
    - `worldId` {{optional_inline}}
      - : `string`. ID einer Benutzer-Skript-Welt, in der das Skript ausgeführt wird. Nur gültig, wenn `world` `USER_SCRIPT` ist oder weggelassen wird. Wenn `worldId` weggelassen wird, wird das Skript in der Standard-`USER_SCRIPT`-Welt ("") ausgeführt. Werte mit führenden Unterstrichen (`_`) sind reserviert. Die maximale Länge beträgt 256 Zeichen. Eine Welt kann von mehreren Skripten als Ausführungsumgebung genutzt werden. Um das Verhalten einer Welt zu konfigurieren, übergeben Sie deren `worldId` an {{WebExtAPIRef("userScripts.configureWorld")}} bevor das erste Skript in dieser Welt ausgeführt wird.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von Objekten erfüllt wird, die das Ergebnis der Einfügung mit folgenden Eigenschaften beschreiben:

- `documentId`
  - : `string`. Dokument-ID, die mit der Einfügung verknüpft ist.
- `error` {{optional_inline}}
  - : `string`. Fehlermeldung, falls vorhanden. Dies schließt `result` aus.
- `frameId`
  - : `integer`. Frame-ID, die mit der Einfügung verknüpft ist.
- `result` {{optional_inline}}
  - : `string`. Ergebnis der Skript-Einfügung, falls vorhanden. Dies schließt `error` aus.

## Beispiele

```js
await browser.userScripts.execute([
  {
    js: [{ code: "console.log('Hello world!');" }],
    target: { tabId: 1 },
  },
]);
```

## Browser-Kompatibilität

{{Compat}}

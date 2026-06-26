---
title: userScripts.execute()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/execute
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Injiziert ein Benutzerskript in einen Zielkontext (z.B. Tab oder Frame).

> [!NOTE]
> Standardmäßig wird das injizierte Skript bei `document_idle` oder sofort ausgeführt, wenn die Seite bereits geladen ist. Wenn die Eigenschaft `injectImmediately` auf `true` gesetzt ist, wird das Skript ohne Warten injiziert, selbst wenn die Seite noch lädt.

## Syntax

```js-nolint
let executeUserScript = browser.userScripts.execute(
  injection, // object
);
```

### Parameter

- `injection`
  - : Ein Objekt, das spezifiziert, welche Benutzerskripte injiziert werden sollen, wo und wie.
    - `injectImmediately` {{optional_inline}}
      - : `boolean`. Wenn auf `true` gesetzt, wird die Injektion so schnell wie möglich im Zielkontext ausgelöst. Dies gewährleistet nicht, dass die Injektion vor dem Laden der Seite erfolgt, da die Seite möglicherweise vor dem Erreichen des Ziels geladen wird.

    - `js`
      - : `array` von {{WebExtAPIRef("userScripts.ScriptSource")}}. Die Skripte, die in übereinstimmende Seiten injiziert werden sollen.
    - `target`
      - : Ein Objekt, das den Zielkontext definiert, in den Skripte injiziert werden.
        - `allFrames` {{optional_inline}}
          - : `boolean`. Wenn auf `true` gesetzt, wird das Skript in alle verfügbaren Frames injiziert. Standardmäßig ist `false`, wobei das Skript nur in den oberen Frame injiziert wird.
        - `documentIds` {{optional_inline}}
          - : `array` von `string`. Die IDs der Dokumente, in die injiziert werden soll. Darf nicht spezifiziert werden, wenn `frameIds` gesetzt ist. Weitere Informationen finden Sie im Artikel [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
        - `frameIds` {{optional_inline}}
          - : `array` von `integer`. Die IDs der Frames, in die injiziert werden soll. Darf nicht spezifiziert werden, wenn `documentIds` gesetzt ist.
        - `tabId`
          - : `integer`. Die ID eines Tabs, in die injiziert werden soll.
    - `world` {{optional_inline}}
      - : {{WebExtAPIRef("userScripts.ExecutionWorld")}}. Die Ausführungsumgebung, die verwendet werden soll, um die Skripte auszuführen. Standardmäßig `"USER_SCRIPT"`.
    - `worldId` {{optional_inline}}
      - : `string`. ID einer Benutzerskriptwelt, in der das Skript ausgeführt wird. Nur gültig, wenn `world` `USER_SCRIPT` ist oder weggelassen wird. Wenn `worldId` weggelassen wird, wird das Skript in der standardmäßigen `USER_SCRIPT`-Welt ausgeführt (""). Werte mit führenden Unterstrichen (`_`) sind reserviert. Die maximale Länge beträgt 256 Zeichen. Eine Welt kann von mehreren Skripten als deren Ausführungsumgebung verwendet werden. Um das Verhalten einer Welt zu konfigurieren, übergeben Sie ihre `worldId` an {{WebExtAPIRef("userScripts.configureWorld")}}, bevor das erste Skript in dieser Welt ausgeführt wird.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von Objekten erfüllt wird, das das Ergebnis der Injektion mit folgenden Eigenschaften beschreibt:

- `documentId`
  - : `string`. Dokumenten-ID, die mit der Injektion assoziiert ist. Weitere Informationen finden Sie im Artikel [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `error` {{optional_inline}}
  - : `string`. Fehlermeldung, falls vorhanden. Dies schließt sich gegenseitig mit `result` aus.
- `frameId`
  - : `integer`. Frame-ID, die mit der Injektion assoziiert ist.
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

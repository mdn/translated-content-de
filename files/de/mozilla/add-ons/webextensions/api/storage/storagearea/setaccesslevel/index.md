---
title: StorageArea.setAccessLevel()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/setAccessLevel
l10n:
  sourceCommit: 2857820893ce291eb2cf5e370551136065bc080c
---

Legt das Zugriffslevel für den Speicherbereich fest.

Verwenden Sie diese Methode, um:

- Den `session` Speicherbereich für Inhalts-Skripte freizugeben. Im Gegensatz zu anderen Speicherbereichen ist `storage.session` standardmäßig nur für privilegierte (vertrauenswürdige) Erweiterungskontexte verfügbar.
- Den Zugriff von Inhalts-Skripten auf `local`, `managed` und `sync` Speicherbereiche einzuschränken. Standardmäßig sind diese Speicherbereiche für alle Erweiterungskontexte, einschließlich Inhalts-Skripten, zugänglich.

## Syntax

```js-nolint
await browser.storage.<storageType>.setAccessLevel(
  accessLevel             // string
)
```

Wobei `<storageType>` einer der folgenden Speicherbereiche ist: {{WebExtAPIRef("storage.local")}}, {{WebExtAPIRef("storage.managed")}}, {{WebExtAPIRef("storage.session")}} oder {{WebExtAPIRef("storage.sync")}}.

### Parameter

- `accessLevel`
  - : `String`. Das Zugriffslevel des Speicherbereichs. Mögliche Werte sind `TRUSTED_CONTEXTS` oder `TRUSTED_AND_UNTRUSTED_CONTEXTS`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ohne Argumente erfüllt wird, wenn der Vorgang erfolgreich war. Wenn der Vorgang fehlgeschlagen ist, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API. Diese Dokumentation stammt von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.

---
title: runtime.getVersion()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getVersion
l10n:
  sourceCommit: 3dad2299b9d045afbcefc2fd5500ed7257ceedda
---

Gibt die Version der Erweiterung aus dem Manifest-Schlüssel [`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) zurück.

## Syntax

```js-nolint
let extensionVersion = browser.runtime.getVersion()
```

### Parameter

Keine.

### Rückgabewert

Ein `string`, der die im Manifest angegebene Version der Erweiterung enthält.

> [!NOTE]
> Die zurückgegebene Version kann von der Zeichenfolge in der Datei abweichen, da der Browser sie parsen und serialisieren kann.

## Beispiele

Versionszeichenfolge der Erweiterung abrufen:

```js
const version = browser.runtime.getVersion();
console.log(version);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Methode {{WebExtAPIRef("runtime.getManifest()")}}, die das gesamte Manifest als Objekt zurückgibt.
- Der Manifest-Schlüssel [`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)

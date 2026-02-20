---
title: runtime.getVersion()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getVersion
l10n:
  sourceCommit: 9a1a8665d37c3b75f9d9a545c4c2407296615a41
---

Gibt die Versionsnummer der Erweiterung aus dem [`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) [Manifest](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Schlüssel zurück.

## Syntax

```js-nolint
let extensionVersion = await browser.runtime.getVersion()
```

### Parameter

Keine.

### Rückgabewert

Ein `string`, der die Versionsnummer der Erweiterung enthält, wie im Manifest angegeben.

> [!NOTE]
> Die zurückgegebene Version kann sich von der Zeichenkette in der Datei unterscheiden, da der Browser sie parsen und serialisieren kann.

## Beispiele

Holen Sie sich die Versionszeichenkette der Erweiterung:

```js
const version = browser.runtime.getVersion();
console.log(version);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Methode {{WebExtAPIRef("runtime.getManifest()")}}, die das gesamte Manifest als Objekt zurückgibt.
- Manifest [`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) Schlüssel

---
title: i18n.getMessage()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/getMessage
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Holt die lokalisierte Zeichenkette für die angegebene Nachricht.

Sehen Sie die [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization) Seite für einen Leitfaden zur Nutzung dieser Funktion.

## Syntax

```js-nolint
browser.i18n.getMessage(
  messageName,  // string
  substitutions // optional any
)
```

### Parameter

- `messageName`
  - : `string`. Der Name der Nachricht, wie im messages.json File angegeben. Wenn die Nachricht nicht in messages.json gefunden werden kann:
    - Gibt Firefox "" zurück und protokolliert einen Fehler.
    - Gibt Chrome "" zurück und protokolliert keinen Fehler.

- `substitutions` {{optional_inline}}
  - : `string` oder `array` von `string`. Eine einzelne Ersetzungszeichenkette oder ein Array von Ersetzungszeichenketten.

    In Chrome, wenn Sie mehr als 9 Ersetzungszeichenketten angeben, wird `getMessage()` `undefined` zurückgeben.

### Rückgabewert

`string`. Nachricht lokalisiert für die aktuelle Locale.

## Beispiele

Holen Sie sich die lokalisierte Zeichenkette für `"messageContent"`, wobei `target.url` ersetzt wird:

```js
let message = browser.i18n.getMessage("messageContent", target.url);
console.log(message);
```

Dies würde mit einer \_locales/en/messages.json Datei funktionieren, die enthält:

```json
{
  "messageContent": {
    "message": "You clicked $URL$.",
    "description": "Tells the user which link they clicked.",
    "placeholders": {
      "url": {
        "content": "$1",
        "example": "https://developer.mozilla.org"
      }
    }
  }
}
```

Wenn `target.url` "https\://developer.mozilla.org" ist, dann wäre der Wert der Nachricht in der "en" Locale:

```plain
"You clicked https://developer.mozilla.org."
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.i18n`](https://developer.chrome.com/docs/extensions/reference/api/i18n#method-getMessage). Diese Dokumentation ist abgeleitet von [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/extensions/common/api/i18n.json) im Chromium-Code.

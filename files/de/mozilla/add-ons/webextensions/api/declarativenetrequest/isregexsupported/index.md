---
title: declarativeNetRequest.isRegexSupported
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/isRegexSupported
l10n:
  sourceCommit: e64d736b93d6323f51f347274d1e016cde14d009
---

{{AddonSidebar}}

Prüft, ob ein regulärer Ausdruck als [`declarativeNetRequest.RuleCondition.regexFilter`](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#regexfilter) Regelbedingung unterstützt wird.

## Syntax

```js-nolint
let count = await browser.declarativeNetRequest.isRegexSupported(
    regexOptions                // object
);
```

### Parameter

- `regexOptions`
  - : Ein Objekt, das den zu überprüfenden regulären Ausdruck enthält.
    - `isCaseSensitive` {{optional_inline}}
      - : `boolean` Ob der angegebene reguläre Ausdruck groß-/kleinbuchstabensensitiv ist. Standardmäßig ist `true`.
    - `regex`
      - : `string` Der zu überprüfende reguläre Ausdruck.
    - `requireCapturing` {{optional_inline}}
      - : `boolean` Ob der angegebene reguläre Ausdruck Capturing erfordert. Capturing ist nur für Weiterleitungsregeln erforderlich, die eine regexSubstitution-Aktion angeben. Der Standard ist false.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt mit diesen Eigenschaften erfüllt wird:

- `isSupported`
  - : `boolean` Ob der reguläre Ausdruck unterstützt wird.
- `reason` {{optional_inline}}
  - : `string` Gibt den Grund an, warum der reguläre Ausdruck nicht unterstützt wird. Mögliche Werte sind `"syntaxError"` und `"memoryLimitExceeded"`. Wird nur bereitgestellt, wenn `isSupported` false ist.

Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

---
title: declarativeNetRequest.isRegexSupported
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/isRegexSupported
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Überprüft, ob ein regulärer Ausdruck als [`declarativeNetRequest.RuleCondition.regexFilter`](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#regexfilter)-Regelbedingung unterstützt wird.

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
      - : `boolean` Gibt an, ob der angegebene reguläre Ausdruck groß-/kleinsensitiv ist. Standard ist `true`.
    - `regex`
      - : `string` Der zu überprüfende reguläre Ausdruck.
    - `requireCapturing` {{optional_inline}}
      - : `boolean` Gibt an, ob der angegebene reguläre Ausdruck das Erfassen erfordert. Das Erfassen ist nur für Umleitungsregeln erforderlich, die eine regexSubstitution-Aktion angeben. Der Standardwert ist false.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, welches diese Eigenschaften enthält:

- `isSupported`
  - : `boolean` Gibt an, ob der reguläre Ausdruck unterstützt wird.
- `reason` {{optional_inline}}
  - : `string` Gibt den Grund an, warum der reguläre Ausdruck nicht unterstützt wird. Mögliche Werte sind `"syntaxError"` und `"memoryLimitExceeded"`. Wird nur bereitgestellt, wenn `isSupported` false ist.

Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung zurückgewiesen.

## Beispiele

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

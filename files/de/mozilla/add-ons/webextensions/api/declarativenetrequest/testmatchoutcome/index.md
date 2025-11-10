---
title: declarativeNetRequest.testMatchOutcome
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/testMatchOutcome
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Überprüft, ob eine der `declarativeNetRequest`-Regeln der Erweiterung eine hypothetische Anforderung erfüllen würde. Diese Funktion ist nur während des Testens verfügbar, da sie während der Entwicklung von Erweiterungen verwendet werden soll. Sehen Sie unter [Testing](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#testing) nach, wie das Testen in jedem Browser aktiviert wird.

## Syntax

```js-nolint
let result = await browser.declarativeNetRequest.testMatchOutcome(
    request,                // object
    options                 // optional object
);
```

### Parameter

- `request`
  - : Die Details der zu testenden Anfrage.
    - `initiator` {{optional_inline}}
      - : Ein `string`. Die Initiator-URL (falls vorhanden) für die hypothetische Anfrage.
    - `method` {{optional_inline}}
      - : Ein `string`. Die standardmäßige (klein geschriebene) HTTP-Methode der hypothetischen Anfrage. Voreinstellung ist `"get"` für HTTP-Anfragen und wird für nicht-HTTP-Anfragen ignoriert.
    - `tabId` {{optional_inline}}
      - : Eine `number`. Die ID des Tabs, in dem die hypothetische Anfrage erfolgt. Die ID muss nicht mit einer realen Tab-ID übereinstimmen. Die Standardeinstellung ist `-1`, was bedeutet, dass die Anfrage nicht mit einem Tab in Verbindung steht.
    - `type`
      - : {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. Der Ressourcentyp der hypothetischen Anfrage.
    - `url`
      - : Ein `string`. Die URL der hypothetischen Anfrage.

- `options` {{optional_inline}}
  - : Details der Optionen für die Anfrage.
    - `includeOtherExtensions` {{optional_inline}}
      - : Ein `boolean`. Ob Übereinstimmungen von Regeln anderer Erweiterungen in `matchedRules` eingeschlossen werden. Wenn Regeln von anderen Erweiterungen übereinstimmen, besitzt die resultierende `matchedRule` eine `extensionId`-Eigenschaft. Standardmäßig ist `false`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das diese Eigenschaften hat:

- `matchedRules`
  - : {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}. Details der Regeln (falls vorhanden), die zur hypothetischen Anfrage passen.

Wenn keine Regeln passen, ist das `matchedRules`-Array leer. Wenn die Anfrage fehlschlägt, wird das Versprechen mit einer Fehlermeldung abgelehnt.

## Beispiele

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

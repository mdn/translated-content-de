---
title: declarativeNetRequest.onRuleMatchedDebug
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/onRuleMatchedDebug
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn eine Regel mit einer Anfrage übereinstimmt. Nur verfügbare Erweiterungen mit der Berechtigung `"declarativeNetRequestFeedback"`, da dies nur für Debugging-Zwecke vorgesehen ist. Siehe [Testen](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#testing) für Details dazu, wie das Testen in jedem Browser aktiviert wird.

## Syntax

```js-nolint
browser.declarativeNetRequest.onRuleMatchedDebug.addListener(listener)
browser.declarativeNetRequest.onRuleMatchedDebug.removeListener(listener)
browser.declarativeNetRequest.onRuleMatchedDebug.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Hört auf, auf dieses Ereignis zu hören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüfen, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn darauf gehört wird, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
    - `request`
      - : Ein Objekt, das Informationen über die Anfrage enthält, mit der die Regel übereinstimmte.
        - `documentId` {{optional_inline}}
          - : Ein `string`. Der eindeutige Bezeichner für das Dokument des Rahmens, falls diese Anfrage für einen Rahmen ist.
        - `documentLifecycle` {{optional_inline}}
          - : Ein `string`. Der Lebenszyklus des Dokuments des Rahmens, falls diese Anfrage für einen Rahmen ist. Mögliche Werte sind: `"prerender"`, `"active"`, `"cached"`, oder `"pending_deletion"`.
        - `frameId`
          - : Eine `number`. Der Wert `0` zeigt an, dass die Anfrage im Hauptframe erfolgt. Ein positiver Wert zeigt die ID eines Unterrahmens an, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Rahmens geladen wird (Typ ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Rahmens an, nicht die des äußeren Rahmens. Rahmen-IDs sind innerhalb eines Tabs einzigartig.
        - `frameType` {{optional_inline}}
          - : Ein `string`. Der Typ des Rahmens, falls diese Anfrage für einen Rahmen ist. Mögliche Werte sind: `"outermost_frame"`, `"fenced_frame"`, oder `"sub_frame"`.
        - `initiator` {{optional_inline}}
          - : Ein `string`. Der Ursprung, von dem die Anfrage initiiert wurde. Dies ändert sich nicht durch Weiterleitungen. Der String 'null' wird verwendet, wenn es sich um einen opaken Ursprung handelt.
        - `method`
          - : Ein `string`. Eine standardmäßige HTTP-Methode.
        - `parentDocumentId` {{optional_inline}}
          - : Ein `string`. Der eindeutige Bezeichner für das übergeordnete Dokument des Rahmens, wenn diese Anfrage für einen Rahmen ist und einen Eltern hat.
        - `parentFrameId`
          - : Eine `number`. Die ID des Rahmens, der den Rahmen umfasst, der die Anfrage gesendet hat. Auf `-1` gesetzt, wenn es keinen Elternrahmen gibt.
        - `requestId`
          - : Ein `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browsersitzung einzigartig.
        - `tabId`
          - : Eine `number`. Die ID des Tabs, in dem die Anfrage stattfindet. Auf `-1` gesetzt, wenn die Anfrage nicht mit einem Tab in Zusammenhang steht.
        - `type`
          - : {{WebExtAPIRef("declarativeNetRequest.ResourceType", "ResourceType")}}. Der Ressourcentyp der Anfrage.
        - `url`
          - : Ein `string`. Die URL der Anfrage.

    - `rule`
      - : {{WebExtAPIRef("declarativeNetRequest.MatchedRule", "MatchedRule")}}. Details einer übereinstimmenden Regel.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

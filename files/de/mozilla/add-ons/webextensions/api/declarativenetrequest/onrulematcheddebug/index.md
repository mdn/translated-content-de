---
title: declarativeNetRequest.onRuleMatchedDebug
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/onRuleMatchedDebug
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Regel mit einer Anfrage übereinstimmt. Nur für Erweiterungen verfügbar, die über die Berechtigung `"declarativeNetRequestFeedback"` verfügen, da dies nur zu Debugging-Zwecken vorgesehen ist. Siehe [Testing](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#testing) für Details dazu, wie das Testen in jedem Browser aktiviert wird.

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
  - : Hört auf, diesem Ereignis zuzuhören. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüfen, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion werden folgende Argumente übergeben:

    - `request`

      - : Ein Objekt, das Informationen über die Anfrage enthält, die der Regel entspricht.
        - `documentId` {{optional_inline}}
          - : Ein `string`. Die eindeutige Kennung für das Dokument des Rahmens, falls diese Anfrage für einen Rahmen ist.
        - `documentLifecycle` {{optional_inline}}
          - : Ein `string`. Der Lebenszyklus des Dokuments des Rahmens, falls diese Anfrage für einen Rahmen ist. Mögliche Werte sind: `"prerender"`, `"active"`, `"cached"` oder `"pending_deletion"`.
        - `frameId`
          - : Eine `number`. Der Wert `0` zeigt an, dass die Anfrage im Hauptframe erfolgt. Ein positiver Wert gibt die ID eines Unterrahmens an, in dem die Anfrage erfolgt. Wenn das Dokument eines (Unter-)Rahmens geladen wird (Typ ist `main_frame` oder `sub_frame`), zeigt `frameId` die ID dieses Rahmens an, nicht die ID des äußeren Rahmens. Rahmen-IDs sind innerhalb eines Tabs eindeutig.
        - `frameType` {{optional_inline}}
          - : Ein `string`. Der Typ des Rahmens, falls diese Anfrage für einen Rahmen ist. Mögliche Werte sind: `"outermost_frame"`, `"fenced_frame"` oder `"sub_frame"`.
        - `initiator` {{optional_inline}}
          - : Ein `string`. Der Ursprung, an dem die Anfrage initiiert wurde. Dies ändert sich nicht bei Umleitungen. Der String 'null' wird verwendet, wenn dies ein undurchsichtiger Ursprung ist.
        - `method`
          - : Ein `string`. Eine standardmäßige HTTP-Methode.
        - `parentDocumentId` {{optional_inline}}
          - : Ein `string`. Die eindeutige Kennung für das übergeordnete Dokument des Rahmens, falls diese Anfrage für einen Rahmen mit einem übergeordneten Element ist.
        - `parentFrameId`
          - : Eine `number`. Die ID des Rahmens, der den Rahmen umschließt, der die Anfrage gesendet hat. Auf `-1` gesetzt, wenn es keinen übergeordneten Rahmen gibt.
        - `requestId`
          - : Ein `string`. Die ID der Anfrage. Anfragen-IDs sind innerhalb einer Browsersitzung eindeutig.
        - `tabId`
          - : Eine `number`. Die ID des Tabs, in dem die Anfrage erfolgt. Auf `-1` gesetzt, wenn die Anfrage nicht mit einem Tab in Zusammenhang steht.
        - `type`
          - : {{WebExtAPIRef("declarativeNetRequest.ResourceType", "ResourceType")}}. Der Ressourcentyp der Anfrage.
        - `url`
          - : Ein `string`. Die URL der Anfrage.

    - `rule`
      - : {{WebExtAPIRef("declarativeNetRequest.MatchedRule", "MatchedRule")}}. Details einer übereinstimmenden Regel.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

---
title: declarativeNetRequest.onRuleMatchedDebug
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/onRuleMatchedDebug
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Regel mit einer Anforderung übereinstimmt. Nur Erweiterungen mit der Berechtigung `"declarativeNetRequestFeedback"` können darauf zugreifen, da dies nur zu Debugging-Zwecken vorgesehen ist. Siehe [Testen](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#testing) für Details darüber, wie das Testen in jedem Browser aktiviert wird.

## Syntax

```js-nolint
browser.declarativeNetRequest.onRuleMatchedDebug.addListener(listener)
browser.declarativeNetRequest.onRuleMatchedDebug.removeListener(listener)
browser.declarativeNetRequest.onRuleMatchedDebug.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion werden diese Argumente übergeben:

    - `request`

      - : Ein Objekt, das Informationen über die Anforderung enthält, die die Regel erfüllt hat.
        - `documentId` {{optional_inline}}
          - : Ein `string`. Die eindeutige Kennung für das Dokument des Frames, falls diese Anforderung einen Frame betrifft.
        - `documentLifecycle` {{optional_inline}}
          - : Ein `string`. Der Lebenszyklus des Dokuments des Frames, falls diese Anforderung einen Frame betrifft. Mögliche Werte sind: `"prerender"`, `"active"`, `"cached"`, oder `"pending_deletion"`.
        - `frameId`
          - : Eine `number`. Der Wert `0` gibt an, dass die Anforderung im Hauptframe erfolgt. Ein positiver Wert gibt die ID eines Unterrahmens an, in dem die Anforderung erfolgt. Wenn das Dokument eines (Unter-)Rahmens geladen wird (Typ ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Rahmens an, nicht die ID des äußeren Rahmens. Frame-IDs sind einzigartig innerhalb eines Tabs.
        - `frameType` {{optional_inline}}
          - : Ein `string`. Der Typ des Rahmens, falls diese Anforderung einen Frame betrifft. Mögliche Werte sind: `"outermost_frame"`, `"fenced_frame"`, oder `"sub_frame"`.
        - `initiator` {{optional_inline}}
          - : Ein `string`. Der Ursprung, bei dem die Anforderung initiiert wurde. Dies ändert sich nicht durch Umleitungen. Der String 'null' wird verwendet, wenn es sich um einen undurchsichtigen Ursprung handelt.
        - `method`
          - : Ein `string`. Eine standardmäßige HTTP-Methode.
        - `parentDocumentId` {{optional_inline}}
          - : Ein `string`. Die eindeutige Kennung für das Dokument des übergeordneten Rahmens, wenn diese Anforderung einen Rahmen betrifft und ein übergeordnetes Element hat.
        - `parentFrameId`
          - : Eine `number`. Die ID des Rahmens, der den Frame umschließt, der die Anforderung gesendet hat. Wird auf `-1` gesetzt, wenn kein übergeordneter Rahmen vorhanden ist.
        - `requestId`
          - : Ein `string`. Die ID der Anforderung. Anforderungs-IDs sind einzigartig innerhalb einer Browsersitzung.
        - `tabId`
          - : Eine `number`. Die ID des Tabs, in dem die Anforderung erfolgt. Wird auf `-1` gesetzt, wenn die Anforderung nicht mit einem Tab in Zusammenhang steht.
        - `type`
          - : {{WebExtAPIRef("declarativeNetRequest.ResourceType", "ResourceType")}}. Der Ressourcentyp der Anforderung.
        - `url`
          - : Ein `string`. Die URL der Anforderung.

    - `rule`
      - : {{WebExtAPIRef("declarativeNetRequest.MatchedRule", "MatchedRule")}}. Details einer übereinstimmenden Regel.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

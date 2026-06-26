---
title: declarativeNetRequest.onRuleMatchedDebug
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/onRuleMatchedDebug
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Wird ausgelöst, wenn eine Regel mit einer Anfrage übereinstimmt. Nur für Erweiterungen mit der Berechtigung `"declarativeNetRequestFeedback"` verfügbar, da dies nur für Debugging-Zwecke vorgesehen ist. Siehe [Testen](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#testing) für Details darüber, wie das Testen in jedem Browser aktiviert wird.

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
  - : Hört auf, diesem Ereignis zu lauschen. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, `false` andernfalls.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion werden diese Argumente übergeben:
    - `request`
      - : Ein Objekt, das Informationen über die Anfrage enthält, die mit der Regel übereinstimmt.
        - `documentId` {{optional_inline}}
          - : Ein `string`. Die eindeutige Kennung für das Dokument des Frames, wenn diese Anfrage für einen Frame ist. Weitere Informationen finden Sie im Artikel [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
        - `documentLifecycle` {{optional_inline}}
          - : Ein `string`. Der Lebenszyklus des Dokuments des Frames, wenn diese Anfrage für einen Frame ist. Mögliche Werte sind: `"prerender"`, `"active"`, `"cached"` oder `"pending_deletion"`.
        - `frameId`
          - : Eine `number`. Der Wert `0` zeigt an, dass die Anfrage im Hauptframe stattfindet. Ein positiver Wert gibt die ID eines Unterframes an, in dem die Anfrage stattfindet. Wenn das Dokument eines (Unter-)Frames geladen wird (Typ ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind innerhalb eines Tabs eindeutig.
        - `frameType` {{optional_inline}}
          - : Ein `string`. Der Typ des Frames, wenn diese Anfrage für einen Frame ist. Mögliche Werte sind: `"outermost_frame"`, `"fenced_frame"` oder `"sub_frame"`.
        - `initiator` {{optional_inline}}
          - : Ein `string`. Der Ursprung, an dem die Anfrage initiiert wurde. Dies ändert sich nicht bei Weiterleitungen. Der String 'null' wird verwendet, wenn es sich um einen undurchsichtigen Ursprung handelt.
        - `method`
          - : Ein `string`. Eine Standard-HTTP-Methode.
        - `parentDocumentId` {{optional_inline}}
          - : Ein `string`. Die eindeutige Kennung für das übergeordnete Dokument des Frames, wenn diese Anfrage für einen Frame und ein übergeordnetes Element hat. Weitere Informationen finden Sie im Artikel [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
        - `parentFrameId`
          - : Eine `number`. Die ID des Frames, der den Frame umschließt, der die Anfrage gesendet hat. Auf `-1` gesetzt, wenn es keinen übergeordneten Frame gibt.
        - `requestId`
          - : Ein `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browsersitzung eindeutig.
        - `tabId`
          - : Eine `number`. Die ID des Tabs, in dem die Anfrage stattfindet. Auf `-1` gesetzt, wenn die Anfrage nicht mit einem Tab verbunden ist.
        - `type`
          - : {{WebExtAPIRef("declarativeNetRequest.ResourceType", "ResourceType")}}. Der Ressourcentyp der Anfrage.
        - `url`
          - : Ein `string`. Die URL der Anfrage.

    - `rule`
      - : {{WebExtAPIRef("declarativeNetRequest.MatchedRule", "MatchedRule")}}. Details einer übereinstimmenden Regel.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

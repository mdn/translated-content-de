---
title: proxy.RequestDetails
slug: Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Enthält Informationen über eine Webanforderung. Eine Instanz dieses Objekts wird an den {{WebExtAPIRef("proxy.onRequest")}}-Listener übergeben.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `cookieStoreId`
  - : `string`. Die Cookie-Store-ID des aktuellen Kontexts. Weitere Informationen finden Sie im Artikel [Arbeiten mit kontextbezogenen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `documentId` {{optional_inline}}
  - : `string`. Die UUID des Dokuments, das die Anforderung erstellt. Weitere Informationen finden Sie im Artikel [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `documentUrl`
  - : `string`. URL der Seite, in die die angeforderte Ressource geladen wird.
- `frameId`
  - : `integer`. Null, wenn die Anforderung im Hauptframe erfolgt; ein positiver Wert ist die ID eines Unterframes, in dem die Anforderung erfolgt. Wenn das Dokument eines (Unter-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Frames an, nicht die der äußeren Frames. Frame-IDs sind eindeutig innerhalb eines Tabs.
- `fromCache`
  - : `boolean`. Gibt an, ob diese Antwort aus dem Festplattencache abgerufen wird.
- `incognito`
  - : `boolean`. `true` für Anfragen im privaten Modus.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`
  - : `string`. URL der Ressource, die die Anforderung ausgelöst hat. Beachten Sie, dass dies möglicherweise nicht mit der URL der Seite übereinstimmt, in die die angeforderte Ressource geladen wird. Beispielsweise, wenn ein Dokument einen Ladevorgang in einem anderen Fenster durch den [target-Attribut eines Links](/de/docs/Web/HTML/Reference/Elements/a#target) oder wenn ein CSS-Dokument ein Bild mit der [`url()` funktionalen Notation](/de/docs/Web/CSS/Reference/Values/url_function) enthält, dann ist dies die URL des ursprünglichen Dokuments beziehungsweise des CSS-Dokuments.
- `parentDocumentId` {{optional_inline}}
  - : `string`. Eine UUID des übergeordneten Dokuments, das den Frame besitzt. Nicht gesetzt, wenn kein übergeordnetes Dokument existiert. Weitere Informationen finden Sie im Artikel [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anforderung gesendet hat. Auf -1 gesetzt, wenn kein übergeordneter Frame existiert.
- `requestId`
  - : `string`. Die ID der Anforderung. Anforderungs-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie eine ID verwenden können, um verschiedene Ereignisse zu identifizieren, die mit derselben Anforderung verknüpft sind.
- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Anforderungsheader, die mit dieser Anforderung gesendet werden. Beachten Sie, dass dies nur enthalten ist, wenn die Option `"requestHeaders"` an `addListener()` übergeben wurde.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anforderung erfolgt. Auf -1 gesetzt, wenn die Anforderung nicht mit einem Tab verknüpft ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anforderung und ihre Inhaltsfensterhierarchie von Drittanbietern stammt.
- `timeStamp`
  - : `number`. Der Zeitpunkt, zu dem dieses Event ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script" oder "stylesheet".
- `url`
  - : `string`. Ziel der Anforderung.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

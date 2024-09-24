---
title: proxy.RequestDetails
slug: Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{AddonSidebar}}

Enthält Informationen über eine Webanfrage. Eine Instanz dieses Objekts wird an den {{WebExtAPIRef("proxy.onRequest")}} Listener übergeben.

## Typ

Werte dieser Art sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `cookieStoreId`
  - : `string`. Die Cookie Store ID des aktuellen Kontexts. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `documentUrl`
  - : `string`. URL der Seite, in die die angeforderte Ressource geladen wird.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe geschieht; ein positiver Wert ist die ID eines Unterframes, in dem die Anfrage geschieht. Wenn das Dokument eines (Unter-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind einzigartig innerhalb eines Tabs.
- `fromCache`
  - : `boolean`. Gibt an, ob diese Antwort aus dem Festplattencache abgerufen wird.
- `incognito`
  - : `boolean`. `true` für Anfragen im privaten Modus.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`
  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Beachten Sie, dass dies möglicherweise nicht die gleiche URL wie die der Seite ist, in die die angeforderte Ressource geladen wird. Wenn beispielsweise ein Dokument eine Ladeanforderung in einem anderen Fenster über das [target-Attribut eines Links](/de/docs/Web/HTML/Element/a#target) auslöst oder ein CSS-Dokument ein Bild mit der [`url()`-Funktionsnotation](/de/docs/Web/CSS/url_function) einbindet, ist dies die URL des ursprünglichen Dokuments bzw. des CSS-Dokuments.
- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage gesendet hat. Auf -1 gesetzt, wenn kein übergeordneter Frame existiert.
- `requestId`
  - : `string`. Die ID der Anfrage. Anfrage-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie eine ID verwenden können, um verschiedene Ereignisse zu identifizieren, die mit derselben Anfrage verbunden sind.
- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Anfrageheader, die mit dieser Anfrage gesendet werden. Beachten Sie, dass dies nur enthalten ist, wenn die Option `"requestHeaders"` in `addListener()` übergeben wurde.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab zusammenhängt.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfensterhierarchie von Dritten ist.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Die Art der angeforderten Ressource: zum Beispiel "image", "script" oder "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

---
title: proxy.RequestDetails
slug: Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{AddonSidebar}}

Enthält Informationen zu einer Webanforderung. Eine Instanz dieses Objekts wird an den {{WebExtAPIRef("proxy.onRequest")}} Listener übergeben.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `cookieStoreId`
  - : `string`. Die Cookie-Store-ID des aktuellen Kontextes. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `documentUrl`
  - : `string`. URL der Seite, in die die angeforderte Ressource geladen wird.
- `frameId`
  - : `integer`. Null, wenn die Anforderung im Hauptframe erfolgt; ein positiver Wert ist die ID eines Unterframes, in dem die Anforderung erfolgt. Wenn das Dokument eines (Unter-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind eindeutig innerhalb eines Tabs.
- `fromCache`
  - : `boolean`. Gibt an, ob diese Antwort aus dem Festplattencache abgerufen wird.
- `incognito`
  - : `boolean`. `true` bei Anfragen im privaten Modus.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`
  - : `string`. URL der Ressource, die die Anforderung ausgelöst hat. Beachten Sie, dass dies nicht unbedingt die gleiche URL ist wie die der Seite, in die die angeforderte Ressource geladen wird. Zum Beispiel, wenn ein Dokument eine Ladung in einem anderen Fenster über das [target-Attribut eines Links](/de/docs/Web/HTML/Element/a#target) auslöst oder ein CSS-Dokument ein Bild unter Verwendung der [`url()` funktionalen Notation](/de/docs/Web/CSS/url_function) einbezieht, dann ist dies die URL des ursprünglichen Dokuments bzw. des CSS-Dokuments.
- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anforderung gesendet hat. Wird auf -1 gesetzt, wenn kein übergeordneter Frame existiert.
- `requestId`
  - : `string`. Die ID der Anforderung. Anforderungs-IDs sind innerhalb einer Browser-Sitzung eindeutig, sodass Sie eine ID verwenden können, um verschiedene Ereignisse zu identifizieren, die mit derselben Anforderung verbunden sind.
- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Anforderungs-Header, die mit dieser Anforderung gesendet werden. Beachten Sie, dass dies nur enthalten ist, wenn die `"requestHeaders"` Option an `addListener()` übergeben wurde.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anforderung erfolgt. Wird auf -1 gesetzt, wenn die Anforderung nicht mit einem Tab verbunden ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anforderung und ihre Inhaltsfenster-Hierarchie von Drittanbietern stammen.
- `timeStamp`
  - : `number`. Der Zeitpunkt, zu dem dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script" oder "stylesheet".
- `url`
  - : `string`. Ziel der Anforderung.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

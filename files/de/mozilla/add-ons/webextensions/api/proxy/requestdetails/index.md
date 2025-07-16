---
title: proxy.RequestDetails
slug: Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Enthält Informationen über eine Webanfrage. Eine Instanz dieses Objekts wird an den {{WebExtAPIRef("proxy.onRequest")}}-Listener übergeben.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `cookieStoreId`
  - : `string`. Die Cookie-Store-ID des aktuellen Kontextes. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `documentUrl`
  - : `string`. URL der Seite, in die die angeforderte Ressource geladen wird.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe erfolgt; ein positiver Wert ist die ID eines Subframes, in dem die Anfrage erfolgt. Wenn das Dokument eines (Sub-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind eindeutig innerhalb eines Tabs.
- `fromCache`
  - : `boolean`. Gibt an, ob diese Antwort aus dem Festplattencache abgerufen wird.
- `incognito`
  - : `boolean`. `true` für Anfragen im privaten Modus.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel "GET" oder "POST".
- `originUrl`
  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Beachten Sie, dass dies nicht unbedingt die gleiche URL ist wie die der Seite, in die die angeforderte Ressource geladen wird. Wenn z.B. ein Dokument einen Ladevorgang in einem anderen Fenster durch das [Ziel-Attribut eines Links](/de/docs/Web/HTML/Reference/Elements/a#target) oder ein CSS-Dokument ein Bild unter Verwendung der [`url()`-Funktionsnotation](/de/docs/Web/CSS/url_function) integriert, dann ist dies die URL des ursprünglichen Dokuments bzw. des CSS-Dokuments.
- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage gesendet hat. Auf -1 gesetzt, wenn kein übergeordneter Frame existiert.
- `requestId`
  - : `string`. Die ID der Anfrage. Anfragen-IDs sind innerhalb einer Browsersitzung eindeutig, sodass Sie eine ID verwenden können, um verschiedene Ereignisse zu identifizieren, die mit derselben Anfrage verbunden sind.
- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Anfrage-Header, die mit dieser Anfrage gesendet werden. Beachten Sie, dass dies nur enthalten ist, wenn die Option `"requestHeaders"` an `addListener()` übergeben wurde.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab in Verbindung steht.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfenster-Hierarchie von Drittanbietern sind.
- `timeStamp`
  - : `number`. Der Zeitpunkt, zu dem dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel "image", "script" oder "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

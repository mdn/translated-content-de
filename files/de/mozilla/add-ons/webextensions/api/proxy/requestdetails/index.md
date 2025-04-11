---
title: proxy.RequestDetails
slug: Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{AddonSidebar}}

Enthält Informationen über eine Webanfrage. Eine Instanz dieses Objekts wird an den {{WebExtAPIRef("proxy.onRequest")}} Listener übergeben.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `cookieStoreId`
  - : `string`. Die Cookie-Store-ID des aktuellen Kontexts. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `documentUrl`
  - : `string`. URL der Seite, in die die angeforderte Ressource geladen wird.
- `frameId`
  - : `integer`. Null, wenn die Anfrage im Hauptframe stattfindet; ein positiver Wert ist die ID eines Unterframes, in dem die Anfrage stattfindet. Wenn das Dokument eines (Unter-)Frames geladen wird (`type` ist `main_frame` oder `sub_frame`), gibt `frameId` die ID dieses Frames an, nicht die ID des äußeren Frames. Frame-IDs sind einzigartig innerhalb eines Tabs.
- `fromCache`
  - : `boolean`. Gibt an, ob diese Antwort aus dem Disk-Cache geladen wird.
- `incognito`
  - : `boolean`. `true` für Anfragen im privaten Modus.
- `method`
  - : `string`. Standard-HTTP-Methode: zum Beispiel, "GET" oder "POST".
- `originUrl`
  - : `string`. URL der Ressource, die die Anfrage ausgelöst hat. Beachten Sie, dass dies nicht unbedingt dieselbe URL ist wie die der Seite, in die die angeforderte Ressource geladen wird. Zum Beispiel, wenn ein Dokument einen Ladevorgang in einem anderen Fenster durch das [target-Attribut eines Links](/de/docs/Web/HTML/Reference/Elements/a#target) auslöst oder ein CSS-Dokument ein Bild mit der [`url()` Funktionsschreibweise](/de/docs/Web/CSS/url_function) einschließt, dann ist dies die URL des Originaldokuments oder des CSS-Dokuments.
- `parentFrameId`
  - : `integer`. ID des Frames, der den Frame enthält, der die Anfrage gesendet hat. Auf -1 gesetzt, wenn kein übergeordneter Frame existiert.
- `requestId`
  - : `string`. Die ID der Anfrage. Anfragen-IDs sind einzigartig innerhalb einer Browsersitzung, sodass Sie eine ID verwenden können, um verschiedene Ereignisse zu identifizieren, die mit derselben Anfrage verbunden sind.
- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Die HTTP-Anforderungsheader, die mit dieser Anfrage gesendet werden. Beachten Sie, dass dies nur enthalten ist, wenn die Option `"requestHeaders"` in `addListener()` übergeben wurde.
- `tabId`
  - : `integer`. ID des Tabs, in dem die Anfrage stattfindet. Auf -1 gesetzt, wenn die Anfrage nicht mit einem Tab verbunden ist.
- `thirdParty`
  - : `boolean`. Gibt an, ob die Anfrage und ihre Inhaltsfensterhierarchie Drittanbieter sind.
- `timeStamp`
  - : `number`. Die Zeit, zu der dieses Ereignis ausgelöst wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Der Typ der angeforderten Ressource: zum Beispiel, "image", "script" oder "stylesheet".
- `url`
  - : `string`. Ziel der Anfrage.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

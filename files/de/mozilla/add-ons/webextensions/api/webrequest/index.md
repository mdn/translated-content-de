---
title: webRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Fügen Sie Ereignis-Listener für die verschiedenen Phasen einer HTTP-Anfrage hinzu, die Websocket-Anfragen auf `ws://` und `wss://` einschließen. Der Ereignis-Listener erhält detaillierte Informationen über die Anfrage und kann die Anfrage modifizieren oder abbrechen.

Jedes Ereignis wird in einer bestimmten Phase der Anfrage ausgelöst. Die Abfolge der Ereignisse sieht wie folgt aus:

![Reihenfolge der Anfragen ist onBeforeRequest, onBeforeSendHeader, onSendHeaders, onHeadersReceived, onResponseStarted und onCompleted. Das onHeadersReceived kann ein onBeforeRedirect und ein onAuthRequired verursachen. Ereignisse, die durch onHeadersReceived verursacht werden, beginnen beim Anfang onBeforeRequest. Ereignisse, die durch onAuthRequired verursacht werden, beginnen bei onBeforeSendHeader.](webrequest-flow.png)

Allerdings könnten nicht alle dieser Ereignisse von einer Erweiterung beobachtet werden. Zum Beispiel könnte `onBeforeRedirect` nicht von `onBeforeRequest` gefolgt werden, wenn das Umleitungsziel nicht mit den URLs im Ereignisfilter `filter.urls` übereinstimmt. Dies kann daran liegen, dass die URLs im Filter eng definiert sind, oder das Umleitungsziel von einer Erweiterung nicht beobachtet werden kann, z. B. wenn es zu einer `data:`-URL umleitet.

{{WebExtAPIRef("webRequest.onErrorOccurred", "onErrorOccurred")}} kann jederzeit während der Anfrage ausgelöst werden. Beachten Sie auch, dass manchmal die Reihenfolge der Ereignisse von dieser abweichen kann. Zum Beispiel in Firefox, bei einem [HSTS](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) Upgrade, wird das `onBeforeRedirect` Ereignis unmittelbar nach `onBeforeRequest` ausgelöst. `onErrorOccurred` wird auch ausgelöst, wenn [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) eine Anfrage blockiert.

Alle Ereignisse – _außer_ `onErrorOccurred` – können drei Argumente für `addListener()` annehmen:

- den Listener selbst
- ein {{WebExtAPIRef("webRequest.RequestFilter", "filter")}} Objekt, damit Sie nur über Anfragen zu bestimmten URLs oder für bestimmte Ressourcentypen benachrichtigt werden
- ein optionales `extraInfoSpec` Objekt. Sie können dies verwenden, um zusätzliche ereignisspezifische Anweisungen zu übergeben.

Der Listener-Funktion wird ein `details` Objekt übergeben, das Informationen über die Anfrage enthält. Dazu gehört eine Anfragen-ID, die einem Add-on ermöglicht, Ereignisse, die mit einer einzigen Anfrage verbunden sind, zu korrelieren. Sie ist innerhalb einer Browsersitzung und im Kontext des Add-ons einzigartig. Sie bleibt während einer Anfrage gleich, auch bei Umleitungen und Authentifizierungsaustauschen.

Um die `webRequest` API für einen gegebenen Host zu verwenden, muss eine Erweiterung die `"webRequest"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für diesen Host haben. Um das `"blocking"` Merkmal zu verwenden, muss die Erweiterung auch die `"webRequestBlocking"` API-Berechtigung haben.

Um Ressourcen abzufangen, die von einer Seite geladen werden (wie Bilder, Skripte oder Stylesheets), muss die Erweiterung die Host-Berechtigung sowohl für die Ressource als auch für die Hauptseite, die die Ressource anfordert, haben. Zum Beispiel, wenn eine Seite unter `https://developer.mozilla.org` ein Bild von `https://mdn.mozillademos.org` lädt, dann muss eine Erweiterung beide Host-Berechtigungen haben, wenn sie die Bildanfrage abfangen soll.

## Anfragen modifizieren

Bei einigen dieser Ereignisse können Sie die Anfrage modifizieren. Konkret können Sie:

- die Anfrage abbrechen in:
  - {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}
  - {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}
  - {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}

- die Anfrage umleiten in:
  - {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}
  - {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}

- Anforderungsheader modifizieren in:
  - {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}

- Antwortheader modifizieren in:
  - {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}

- Authentifizierungsdaten bereitstellen in:
  - {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}

Um dies zu tun, müssen Sie im `extraInfoSpec`-Argument des Ereignisses `addListener()` eine Option mit dem Wert `"blocking"` übergeben. Dadurch wird der Listener synchron.

Im Listener können Sie dann ein {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}} Objekt zurückgeben, das die erforderliche Modifikation angibt: zum Beispiel der modifizierte Anforderungsheader, den Sie senden möchten.

## Anfragen beim Browser-Start

Wenn ein Listener mit der `"blocking"` Option registriert wird und während des Erweiterungsstarts registriert wird, startet die Erweiterung früh, wenn eine Anfrage während des Browserstarts gemacht wird, die zum Listener passt. Dies ermöglicht es der Erweiterung, die Anfrage beim Browserstart zu beobachten. Wenn Sie diese Schritte nicht unternehmen, könnten Anfragen, die beim Start gemacht werden, übersehen werden.

## Spekulative Anfragen

Der Browser kann spekulative Verbindungen herstellen, bei denen er feststellt, dass bald eine Anfrage an eine URI kommen könnte. Diese Art von Verbindung liefert keine gültigen Tab-Informationen, daher sind Anfragedetails wie `tabId`, `frameId`, `parentFrameId` usw. ungenau. Diese Verbindungen haben einen {{WebExtAPIRef("webRequest.ResourceType")}} vom Typ `speculative`.

## Sicherheitsinformationen zugreifen

Im {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} Listener können Sie auf die {{Glossary("TLS", "TLS")}}-Eigenschaften einer Anfrage zugreifen, indem Sie {{WebExtAPIRef("webRequest.getSecurityInfo()", "getSecurityInfo()")}} aufrufen. Dazu müssen Sie auch "blocking" im `extraInfoSpec`-Argument des Ereignisses `addListener()` übergeben.

Sie können Details des TLS-Handshakes lesen, jedoch nicht modifizieren oder die Vertrauensentscheidungen des Browsers überschreiben.

## Antworten modifizieren

Um die HTTP-Antwortkörper für eine Anfrage zu modifizieren, rufen Sie {{WebExtAPIRef("webRequest.filterResponseData")}} auf und übergeben die ID der Anfrage. Dies gibt ein {{WebExtAPIRef("webRequest.StreamFilter")}} Objekt zurück, das Sie verwenden können, um die Daten zu untersuchen und zu modifizieren, wie sie vom Browser empfangen werden.

Dazu müssen Sie sowohl die `"webRequestBlocking"` API-Berechtigung als auch die `"webRequest"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den entsprechenden Host haben.

## Typen

- {{WebExtAPIRef("webRequest.BlockingResponse")}}
  - : Ein Objekt dieses Typs wird von Ereignis-Listenern zurückgegeben, die `"blocking"` in ihrem `extraInfoSpec`-Argument gesetzt haben. Durch das Setzen bestimmter Eigenschaften in `BlockingResponse` kann der Listener Netzwerk-Anfragen modifizieren.
- {{WebExtAPIRef("webRequest.CertificateInfo")}}
  - : Ein Objekt, das ein einzelnes X.509-Zertifikat beschreibt.
- {{WebExtAPIRef("webRequest.HttpHeaders")}}
  - : Ein Array von HTTP-Headern. Jeder Header wird als ein Objekt mit zwei Eigenschaften dargestellt: `name` und entweder `value` oder `binaryValue`.
- {{WebExtAPIRef("webRequest.RequestFilter")}}
  - : Ein Objekt, das Filter beschreibt, die auf `webRequest` Ereignisse angewendet werden.
- {{WebExtAPIRef("webRequest.ResourceType")}}
  - : Repräsentiert eine bestimmte Art von Ressource, die in einer Web-Anfrage abgerufen wird.
- {{WebExtAPIRef("webRequest.SecurityInfo")}}
  - : Ein Objekt, das die Sicherheitseigenschaften einer bestimmten Web-Anfrage beschreibt.
- {{WebExtAPIRef("webRequest.StreamFilter")}}
  - : Ein Objekt, das verwendet werden kann, um HTTP-Antworten zu überwachen und zu modifizieren, während sie empfangen werden.
- {{WebExtAPIRef("webRequest.UploadData")}}
  - : Enthält die in einer URL-Anfrage hochgeladenen Daten.

## Eigenschaften

- {{WebExtAPIRef("webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES", "webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES")}}
  - : Die maximale Anzahl von Aufrufen von {{WebExtAPIRef("WebRequest.handlerBehaviorChanged", "handlerBehaviorChanged()")}}, die in einem Zeitraum von 10 Minuten erfolgen kann.

## Methoden

- {{WebExtAPIRef("webRequest.handlerBehaviorChanged()")}}
  - : Diese Methode kann verwendet werden, um sicherzustellen, dass Ereignis-Listener korrekt angewendet werden, wenn Seiten im In-Memory-Cache des Browsers sind.
- {{WebExtAPIRef("webRequest.filterResponseData()")}}
  - : Gibt ein {{WebExtAPIRef("webRequest.StreamFilter")}} Objekt für eine gegebene Anfrage zurück.
- {{WebExtAPIRef("webRequest.getSecurityInfo()")}}
  - : Ruft detaillierte Informationen über die {{Glossary("TLS", "TLS")}} Verbindung ab, die mit einer gegebenen Anfrage verbunden ist.

## Ereignisse

- {{WebExtAPIRef("webRequest.onBeforeRequest")}}
  - : Wird ausgelöst, wenn eine Anfrage gleich gesendet wird und bevor Header verfügbar sind. Dies ist ein guter Punkt, um zuzuhören, wenn Sie die Anfrage abbrechen oder umleiten möchten.
- {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}}
  - : Wird ausgelöst, bevor HTTP-Daten gesendet werden, aber nachdem HTTP-Header verfügbar sind. Dies ist ein guter Punkt, um zuzuhören, wenn Sie HTTP-Anforderungsheader modifizieren möchten.
- {{WebExtAPIRef("webRequest.onSendHeaders")}}
  - : Wird ausgelöst, kurz bevor Header gesendet werden. Wenn Ihr Add-on oder ein anderes Add-on Header in {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} modifiziert hat, sehen Sie hier die modifizierte Version.
- {{WebExtAPIRef("webRequest.onHeadersReceived")}}
  - : Wird ausgelöst, wenn die HTTP-Antwortheader, die mit einer Anfrage verbunden sind, empfangen wurden. Sie können dieses Ereignis verwenden, um HTTP-Antwortheader zu modifizieren.
- {{WebExtAPIRef("webRequest.onAuthRequired")}}
  - : Wird ausgelöst, wenn der Server den Client auffordert, Authentifizierungsdaten bereitzustellen. Der Listener kann nichts tun, die Anfrage abbrechen oder Authentifizierungsdaten bereitstellen.
- {{WebExtAPIRef("webRequest.onResponseStarted")}}
  - : Wird ausgelöst, wenn das erste Byte des Antwortkörpers empfangen wurde. Für HTTP-Anfragen bedeutet dies, dass die Statuszeile und die Antwortheader verfügbar sind.
- {{WebExtAPIRef("webRequest.onBeforeRedirect")}}
  - : Wird ausgelöst, wenn eine serverinitiierte Umleitung kurz bevorsteht.
- {{WebExtAPIRef("webRequest.onCompleted")}}
  - : Wird ausgelöst, wenn eine Anfrage abgeschlossen ist.
- {{WebExtAPIRef("webRequest.onErrorOccurred")}}
  - : Wird ausgelöst, wenn ein Fehler auftritt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

[Zusätzliche Anmerkungen zu Inkonsistenzen in Chrome](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#webrequest_api).

> [!NOTE]
> Diese API basiert auf der Chromium API [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest). Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

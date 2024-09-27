---
title: webRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügen Sie Ereignislistener für die verschiedenen Phasen einer HTTP-Anfrage hinzu, die auch WebSocket-Anfragen auf `ws://` und `wss://` umfasst. Der Ereignislistener erhält detaillierte Informationen über die Anfrage und kann die Anfrage modifizieren oder abbrechen.

Jedes Ereignis wird in einer bestimmten Phase der Anfrage ausgelöst. Die Reihenfolge der Ereignisse ist wie folgt:

![Die Reihenfolge der Anfragen ist onBeforeRequest, onBeforeSendHeader, onSendHeaders, onHeadersReceived, onResponseStarted und onCompleted. Das onHeadersReceived kann ein onBeforeRedirect und ein onAuthRequired verursachen. Ereignisse, die durch onHeadersReceived verursacht werden, beginnen am Anfang von onBeforeRequest. Ereignisse, die durch onAuthRequired verursacht werden, beginnen bei onBeforeSendHeader.](webrequest-flow.png)

Es ist jedoch möglich, dass nicht alle diese Ereignisse von einer Erweiterung beobachtet werden. Zum Beispiel kann `onBeforeRedirect` nicht von `onBeforeRequest` gefolgt werden, wenn das Umleitungsziel nicht mit dem Ereignisfilter `filter.urls` übereinstimmt. Dies kann der Fall sein, wenn die URLs im Filter eng definiert sind oder das Umleitungsziel von einer Erweiterung nicht beobachtet werden kann, z. B. wenn es zu einer `data:` URL umleitet.

{{WebExtAPIRef("webRequest.onErrorOccurred", "onErrorOccurred")}} kann jederzeit während der Anfrage ausgelöst werden. Beachten Sie auch, dass die Reihenfolge der Ereignisse manchmal abweichen kann. In Firefox wird beispielsweise bei einem [HSTS](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)-Upgrade das `onBeforeRedirect`-Ereignis unmittelbar nach `onBeforeRequest` ausgelöst. `onErrorOccurred` wird auch ausgelöst, wenn [Firefox Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) eine Anfrage blockiert.

Alle Ereignisse – _außer_ `onErrorOccurred` – können drei Argumente an `addListener()` übergeben:

- der Listener selbst
- ein {{WebExtAPIRef("webRequest.RequestFilter", "filter")}}-Objekt, sodass Sie nur über Anfragen zu bestimmten URLs oder bestimmten Ressourcentypen benachrichtigt werden können
- ein optionales `extraInfoSpec`-Objekt, mit dem Sie zusätzliche, ereignisspezifische Anweisungen übergeben können.

Die Listener-Funktion erhält ein `details`-Objekt, das Informationen über die Anfrage enthält. Dazu gehört eine Anfragen-ID, die vorgesehen ist, damit eine Erweiterung Ereignisse, die mit einer einzelnen Anfrage in Zusammenhang stehen, korrelieren kann. Sie ist innerhalb einer Browser-Sitzung und im Kontext der Erweiterung eindeutig. Sie bleibt während einer Anfrage gleich, sogar über Umleitungen und Authentifizierungsaustausche hinweg.

Um die `webRequest` API für einen gegebenen Host zu verwenden, muss eine Erweiterung die `"webRequest"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für diesen Host haben. Um das `"blocking"`-Feature zu verwenden, muss die Erweiterung auch die `"webRequestBlocking"` API-Berechtigung haben.

Um Ressourcen, die von einer Seite geladen werden (wie Bilder, Skripte oder Stylesheets), abzufangen, muss die Erweiterung die Host-Berechtigung sowohl für die Ressource als auch für die Hauptseite, die die Ressource anfordert, haben. Wenn beispielsweise eine Seite unter `https://developer.mozilla.org` ein Bild von `https://mdn.mozillademos.org` lädt, muss eine Erweiterung beide Host-Berechtigungen haben, wenn sie die Bildanfrage abfangen möchte.

## Anfragen modifizieren

Bei einigen dieser Ereignisse können Sie die Anfrage modifizieren. Insbesondere können Sie:

- die Anfrage abbrechen in:

  - {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}
  - {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}
  - {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}

- die Anfrage umleiten in:

  - {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}
  - {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}

- Anfragen-Header ändern in:

  - {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}

- Antwort-Header ändern in:

  - {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}

- Authentifizierungsdaten bereitstellen in:

  - {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}

Dazu müssen Sie im `extraInfoSpec`-Argument für das Ereignis `addListener()` eine Option mit dem Wert `"blocking"` übergeben. Dies macht den Listener synchron.

Im Listener können Sie dann ein {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}}-Objekt zurückgeben, das die Modifikation angibt, die Sie vornehmen müssen: zum Beispiel den geänderten Anfragen-Header, den Sie senden möchten.

## Anfragen beim Browser-Start

Wenn ein Listener mit der Option `"blocking"` registriert wird und während des Erweiterungs-Starts registriert wird, wird die Erweiterung frühzeitig gestartet, wenn eine Anfrage während des Browser-Starts gestellt wird, die mit dem Listener übereinstimmt. Dies ermöglicht der Erweiterung, die Anfrage beim Browser-Start zu beobachten. Wenn Sie diese Schritte nicht befolgen, könnten Anfragen, die beim Start gestellt werden, übersehen werden.

## Spekulative Anfragen

Der Browser kann spekulative Verbindungen herstellen, bei denen er feststellt, dass eine Anfrage an eine URI bald erfolgen kann. Diese Art der Verbindung stellt keine gültigen Tab-Informationen bereit, sodass Anfragedetails wie `tabId`, `frameId`, `parentFrameId` usw. ungenau sind. Diese Verbindungen haben einen {{WebExtAPIRef("webRequest.ResourceType")}} von `speculative`.

## Sicherheitsinformationen abrufen

Im {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} Listener können Sie auf die [TLS](/de/docs/Glossary/TLS) Eigenschaften einer Anfrage zugreifen, indem Sie {{WebExtAPIRef("webRequest.getSecurityInfo()", "getSecurityInfo()")}} aufrufen. Dazu müssen Sie auch "blocking" im `extraInfoSpec`-Argument zum Ereignis `addListener()` übergeben.

Sie können Details des TLS-Handschlags lesen, aber nicht ändern oder die Vertrauensentscheidungen des Browsers überschreiben.

## Antworten modifizieren

Um die HTTP-Antwortkörper für eine Anfrage zu modifizieren, rufen Sie {{WebExtAPIRef("webRequest.filterResponseData")}} auf und übergeben die ID der Anfrage. Dies gibt ein {{WebExtAPIRef("webRequest.StreamFilter")}}-Objekt zurück, das Sie verwenden können, um die Daten zu prüfen und zu ändern, während sie vom Browser empfangen werden.

Dazu müssen Sie die `"webRequestBlocking"` API-Berechtigung sowie die `"webRequest"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den jeweiligen Host haben.

## Typen

- {{WebExtAPIRef("webRequest.BlockingResponse")}}
  - : Ein Objekt dieses Typs wird von Ereignis-Listenern zurückgegeben, die `"blocking"` in ihrem `extraInfoSpec`-Argument gesetzt haben. Indem Sie bestimmte Eigenschaften in `BlockingResponse` festlegen, kann der Listener Netzwerk-Anfragen modifizieren.
- {{WebExtAPIRef("webRequest.CertificateInfo")}}
  - : Ein Objekt, das ein einzelnes X.509-Zertifikat beschreibt.
- {{WebExtAPIRef("webRequest.HttpHeaders")}}
  - : Ein Array von HTTP-Headern. Jeder Header wird als ein Objekt mit zwei Eigenschaften dargestellt: `name` und entweder `value` oder `binaryValue`.
- {{WebExtAPIRef("webRequest.RequestFilter")}}
  - : Ein Objekt, das Filter beschreibt, die auf `webRequest`-Ereignisse angewendet werden.
- {{WebExtAPIRef("webRequest.ResourceType")}}
  - : Stellt eine bestimmte Art von Ressource dar, die in einer Web-Anfrage angefordert wurde.
- {{WebExtAPIRef("webRequest.SecurityInfo")}}
  - : Ein Objekt, das die Sicherheitsmerkmale einer bestimmten Web-Anfrage beschreibt.
- {{WebExtAPIRef("webRequest.StreamFilter")}}
  - : Ein Objekt, das verwendet werden kann, um HTTP-Antworten zu überwachen und zu modifizieren, während sie empfangen werden.
- {{WebExtAPIRef("webRequest.UploadData")}}
  - : Enthält Daten, die in einer URL-Anfrage hochgeladen wurden.

## Eigenschaften

- {{WebExtAPIRef("webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES", "webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES")}}
  - : Die maximale Anzahl von Aufrufen, die {{WebExtAPIRef("WebRequest.handlerBehaviorChanged", "handlerBehaviorChanged()")}} in einem Zeitraum von 10 Minuten vorgenommen werden können.

## Methoden

- {{WebExtAPIRef("webRequest.handlerBehaviorChanged()")}}
  - : Diese Methode kann verwendet werden, um sicherzustellen, dass Ereignis-Listener korrekt angewendet werden, wenn Seiten im In-Memory-Cache des Browsers sind.
- {{WebExtAPIRef("webRequest.filterResponseData()")}}
  - : Gibt ein {{WebExtAPIRef("webRequest.StreamFilter")}}-Objekt für eine gegebene Anfrage zurück.
- {{WebExtAPIRef("webRequest.getSecurityInfo()")}}
  - : Erhält detaillierte Informationen über die [TLS](/de/docs/Glossary/TLS)-Verbindung, die mit einer gegebenen Anfrage verbunden ist.

## Ereignisse

- {{WebExtAPIRef("webRequest.onBeforeRequest")}}
  - : Wird ausgelöst, wenn eine Anfrage kurz vor ihrer Absendung steht und bevor Header verfügbar sind. Dies ist ein guter Ort, um zu hören, wenn Sie die Anfrage abbrechen oder umleiten möchten.
- {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}}
  - : Wird ausgelöst, bevor HTTP-Daten gesendet werden, jedoch nachdem HTTP-Header verfügbar sind. Dies ist ein guter Ort, um zuzuhören, wenn Sie HTTP-Anfragen-Header ändern möchten.
- {{WebExtAPIRef("webRequest.onSendHeaders")}}
  - : Wird unmittelbar vor dem Senden von Headern ausgelöst. Wenn Ihr Add-on oder ein anderes Add-on die Header in `{{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}` geändert hat, sehen Sie hier die geänderte Version.
- {{WebExtAPIRef("webRequest.onHeadersReceived")}}
  - : Wird ausgelöst, wenn die HTTP-Antwort-Header, die mit einer Anfrage verknüpft sind, empfangen wurden. Sie können dieses Ereignis verwenden, um HTTP-Antwort-Header zu ändern.
- {{WebExtAPIRef("webRequest.onAuthRequired")}}
  - : Wird ausgelöst, wenn der Server den Client auffordert, Authentifizierungsdaten bereitzustellen. Der Listener kann nichts tun, die Anfrage abbrechen oder Authentifizierungsdaten bereitstellen.
- {{WebExtAPIRef("webRequest.onResponseStarted")}}
  - : Wird ausgelöst, wenn das erste Byte des Antwortkörpers empfangen wird. Für HTTP-Anfragen bedeutet dies, dass die Statuszeile und die Antwort-Header verfügbar sind.
- {{WebExtAPIRef("webRequest.onBeforeRedirect")}}
  - : Wird ausgelöst, wenn eine vom Server initiierte Umleitung kurz bevorsteht.
- {{WebExtAPIRef("webRequest.onCompleted")}}
  - : Wird ausgelöst, wenn eine Anfrage abgeschlossen ist.
- {{WebExtAPIRef("webRequest.onErrorOccurred")}}
  - : Wird ausgelöst, wenn ein Fehler auftritt.

## Browser-Kompatibilität

{{Compat}}

[Zusätzliche Hinweise zu Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#webrequest_api).

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest) API. Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

---
title: webRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügen Sie Ereignislistener für die verschiedenen Phasen einer HTTP-Anfrage hinzu, die auch Websocket-Anfragen auf `ws://` und `wss://` umfassen. Der Ereignislistener erhält detaillierte Informationen über die Anfrage und kann die Anfrage ändern oder abbrechen.

Jedes Ereignis wird in einer bestimmten Phase der Anfrage ausgelöst. Die Reihenfolge der Ereignisse ist wie folgt:

![Die Reihenfolge der Anfragen ist onBeforeRequest, onBeforeSendHeader, onSendHeaders, onHeadersReceived, onResponseStarted und onCompleted. Das onHeadersReceived kann ein onBeforeRedirect und ein onAuthRequired verursachen. Ereignisse, die von onHeadersReceived verursacht werden, beginnen am Anfang mit onBeforeRequest. Ereignisse, die von onAuthRequired verursacht werden, beginnen bei onBeforeSendHeader.](webrequest-flow.png)

Jedoch werden möglicherweise nicht alle dieser Ereignisse von einer Erweiterung beobachtet. Zum Beispiel, `onBeforeRedirect` könnte nicht von `onBeforeRequest` gefolgt werden, wenn das Umleitungsziel nicht mit den Ereignis- `filter.urls` übereinstimmt. Dies kann daran liegen, dass die URLs im Filter eng definiert sind oder das Umleitungsziel von einer Erweiterung nicht beobachtet werden kann, wie zum Beispiel, wenn es zu einer `data:` URL umleitet.

{{WebExtAPIRef("webRequest.onErrorOccurred", "onErrorOccurred")}} kann jederzeit während der Anfrage ausgelöst werden. Beachten Sie außerdem, dass sich die Reihenfolge der Ereignisse manchmal von dieser unterscheiden kann. Zum Beispiel wird in Firefox bei einem [HSTS](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)-Upgrade das `onBeforeRedirect` Ereignis sofort nach `onBeforeRequest` ausgelöst. `onErrorOccurred` wird auch ausgelöst, wenn [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) eine Anfrage blockiert.

Alle Ereignisse – _außer_ `onErrorOccurred` – können drei Argumente an `addListener()` übergeben:

- den Listener selbst
- ein {{WebExtAPIRef("webRequest.RequestFilter", "filter")}} Objekt, damit Sie nur über Anfragen zu bestimmten URLs oder bestimmten Ressourcentypen benachrichtigt werden
- ein optionales `extraInfoSpec` Objekt. Sie können dieses verwenden, um zusätzliche spezifische Anweisungen für das Ereignis zu übergeben.

Die Listener-Funktion erhält ein `details` Objekt, das Informationen über die Anfrage enthält. Dazu gehört eine Anfrage-ID, die bereitgestellt wird, um einer Erweiterung die Korrelation von Ereignissen zu einer einzelnen Anfrage zu ermöglichen. Sie ist innerhalb einer Browsersitzung und im Kontext der Erweiterung eindeutig. Sie bleibt während einer Anfrage gleich, auch über Umleitungen und Authentifizierungsaustausche hinweg.

Um die `webRequest` API für einen bestimmten Host zu verwenden, muss eine Erweiterung die `"webRequest"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für diesen Host haben. Um die `"blocking"`-Funktion zu verwenden, muss die Erweiterung auch die `"webRequestBlocking"` API-Berechtigung haben.

Um Ressourcen abzufangen, die von einer Seite geladen werden (wie Bilder, Skripte oder Stylesheets), muss die Erweiterung sowohl die Host-Berechtigung für die Ressource als auch für die Hauptseite, die die Ressource anfordert, haben. Zum Beispiel, wenn eine Seite unter `https://developer.mozilla.org` ein Bild von `https://mdn.mozillademos.org` lädt, dann muss eine Erweiterung beide Host-Berechtigungen besitzen, um die Bildanforderung abzufangen.

## Anfragen ändern

Bei einigen dieser Ereignisse können Sie die Anfrage ändern. Insbesondere können Sie:

- die Anfrage abbrechen in:

  - {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}
  - {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}
  - {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}

- die Anfrage umleiten in:

  - {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}
  - {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}

- Anfrage-Header ändern in:

  - {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}

- Antwort-Header ändern in:

  - {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}

- Authentifizierungsanmeldedaten bereitstellen in:

  - {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}

Um dies zu tun, müssen Sie eine Option mit dem Wert `"blocking"` im `extraInfoSpec` Argument an das `addListener()` des Ereignisses übergeben. Dadurch wird der Listener synchron.

Im Listener können Sie dann ein {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}} Objekt zurückgeben, das die Änderung angibt, die Sie vornehmen müssen: zum Beispiel den modifizierten Anforderungs-Header, den Sie senden möchten.

## Anfragen beim Browserstart

Wenn ein Listener mit der Option `"blocking"` registriert wird und während des Starts der Erweiterung registriert wird, startet die Erweiterung frühzeitig, wenn eine Anfrage während des Browserstarts gemacht wird, die mit dem Listener übereinstimmt. Dies ermöglicht der Erweiterung, die Anfrage beim Start des Browsers zu beobachten. Wenn Sie diese Schritte nicht unternehmen, könnten Anfragen, die beim Start ausgeführt werden, übersehen werden.

## Spekulative Anfragen

Der Browser kann spekulative Verbindungen herstellen, bei denen er feststellt, dass eine Anfrage zu einer URI bald erfolgen könnte. Diese Art von Verbindung liefert keine gültigen Tab-Informationen, sodass Anfragedetails wie `tabId`, `frameId`, `parentFrameId`, usw. ungenau sind. Diese Verbindungen haben einen {{WebExtAPIRef("webRequest.ResourceType")}} von `speculative`.

## Sicherheitsinformationen abrufen

Im {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} Listener können Sie auf die {{Glossary("TLS", "TLS")}} Eigenschaften einer Anfrage zugreifen, indem Sie {{WebExtAPIRef("webRequest.getSecurityInfo()", "getSecurityInfo()")}} aufrufen. Dazu müssen Sie auch "blocking" im `extraInfoSpec` Argument an das `addListener()` des Ereignisses übergeben.

Sie können Details des TLS-Handshakes lesen, diese jedoch nicht ändern oder die Vertrauensentscheidungen des Browsers außer Kraft setzen.

## Antworten ändern

Um die HTTP-Antwortkörper für eine Anfrage zu ändern, rufen Sie {{WebExtAPIRef("webRequest.filterResponseData")}} auf und übergeben Sie die ID der Anfrage. Dies gibt ein {{WebExtAPIRef("webRequest.StreamFilter")}} Objekt zurück, das Sie verwenden können, um die Daten zu untersuchen und zu ändern, während sie vom Browser empfangen werden.

Dazu müssen Sie die `"webRequestBlocking"` API-Berechtigung sowie die `"webRequest"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den betreffenden Host haben.

## Typen

- {{WebExtAPIRef("webRequest.BlockingResponse")}}
  - : Ein Objekt dieses Typs wird von Event-Listenern zurückgegeben, die `"blocking"` in ihrem `extraInfoSpec` Argument gesetzt haben. Durch das Setzen bestimmter Eigenschaften in `BlockingResponse` kann der Listener Netzwerk-Anfragen ändern.
- {{WebExtAPIRef("webRequest.CertificateInfo")}}
  - : Ein Objekt, das ein einzelnes X.509-Zertifikat beschreibt.
- {{WebExtAPIRef("webRequest.HttpHeaders")}}
  - : Ein Array von HTTP-Headern. Jeder Header wird als Objekt mit zwei Eigenschaften dargestellt: `name` und entweder `value` oder `binaryValue`.
- {{WebExtAPIRef("webRequest.RequestFilter")}}
  - : Ein Objekt, das Filter beschreibt, die auf `webRequest` Ereignisse angewendet werden können.
- {{WebExtAPIRef("webRequest.ResourceType")}}
  - : Repräsentiert eine bestimmte Art von Ressource, die in einer Webanfrage abgerufen wird.
- {{WebExtAPIRef("webRequest.SecurityInfo")}}
  - : Ein Objekt, das die Sicherheitseigenschaften einer bestimmten Webanfrage beschreibt.
- {{WebExtAPIRef("webRequest.StreamFilter")}}
  - : Ein Objekt, das verwendet werden kann, um HTTP-Antworten zu überwachen und zu ändern, während sie empfangen werden.
- {{WebExtAPIRef("webRequest.UploadData")}}
  - : Enthält Daten, die in einer URL-Anfrage hochgeladen wurden.

## Eigenschaften

- {{WebExtAPIRef("webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES", "webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES")}}
  - : Die maximale Anzahl von Malen, die {{WebExtAPIRef("WebRequest.handlerBehaviorChanged", "handlerBehaviorChanged()")}} in einem Zeitraum von 10 Minuten aufgerufen werden kann.

## Methoden

- {{WebExtAPIRef("webRequest.handlerBehaviorChanged()")}}
  - : Diese Methode kann verwendet werden, um sicherzustellen, dass Ereignislistener korrekt angewendet werden, wenn Seiten im Arbeitsspeicher-Cache des Browsers sind.
- {{WebExtAPIRef("webRequest.filterResponseData()")}}
  - : Gibt ein {{WebExtAPIRef("webRequest.StreamFilter")}} Objekt für eine gegebene Anfrage zurück.
- {{WebExtAPIRef("webRequest.getSecurityInfo()")}}
  - : Ruft detaillierte Informationen über die {{Glossary("TLS", "TLS")}}-Verbindung ab, die mit einer bestimmten Anfrage verbunden ist.

## Ereignisse

- {{WebExtAPIRef("webRequest.onBeforeRequest")}}
  - : Wird ausgelöst, wenn eine Anfrage gleich gemacht werden soll und bevor Header verfügbar sind. Dies ist ein guter Ort, um zu lauschen, wenn Sie die Anfrage abbrechen oder umleiten möchten.
- {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}}
  - : Wird ausgelöst, bevor HTTP-Daten gesendet werden, aber nachdem HTTP-Header verfügbar sind. Dies ist ein guter Ort, um zu lauschen, wenn Sie HTTP-Anfrage-Header ändern möchten.
- {{WebExtAPIRef("webRequest.onSendHeaders")}}
  - : Wird unmittelbar vor dem Senden von Headern ausgelöst. Wenn Ihr Add-On oder ein anderes Add-On Header in `{{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}` geändert hat, sehen Sie hier die modifizierte Version.
- {{WebExtAPIRef("webRequest.onHeadersReceived")}}
  - : Wird ausgelöst, wenn die HTTP-Antwort-Header einer Anfrage empfangen wurden. Sie können dieses Ereignis verwenden, um HTTP-Antwort-Header zu ändern.
- {{WebExtAPIRef("webRequest.onAuthRequired")}}
  - : Wird ausgelöst, wenn der Server den Client auffordert, Authentifizierungsanmeldedaten bereitzustellen. Der Listener kann nichts tun, die Anfrage abbrechen oder Authentifizierungsanmeldedaten bereitstellen.
- {{WebExtAPIRef("webRequest.onResponseStarted")}}
  - : Wird ausgelöst, wenn das erste Byte des Antwortkörpers empfangen wird. Für HTTP-Anfragen bedeutet dies, dass die Statuszeile und die Antwort-Header verfügbar sind.
- {{WebExtAPIRef("webRequest.onBeforeRedirect")}}
  - : Wird ausgelöst, wenn eine serverinitiierte Umleitung bevorsteht.
- {{WebExtAPIRef("webRequest.onCompleted")}}
  - : Wird ausgelöst, wenn eine Anfrage abgeschlossen ist.
- {{WebExtAPIRef("webRequest.onErrorOccurred")}}
  - : Wird ausgelöst, wenn ein Fehler auftritt.

## Browser-Kompatibilität

{{Compat}}

[Zusätzliche Hinweise zu Chrome-Unverträglichkeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#webrequest_api).

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest) API von Chromium. Diese Dokumentation ist von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code abgeleitet.

<!--
// Urheberrecht 2015 Die Chromium-Mitwirkenden. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Nutzung in Quell- und Binärformen, mit oder ohne
// Änderungen, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weiterverbreitungen des Quellcodes müssen das obenstehende Urheberrecht
// und diesen Bedingungstext beibehalten.
//    * Weiterverbreitungen in Binärform müssen die obenstehende
// Urheberrechtserklärung und diese Liste von Bedingungen sowie den folgenden
// Haftungsausschluss in der Dokumentation und/oder anderen Materialien beilegen, die
// mit der Verteilung geliefert werden.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser
// Software abgeleitet wurden, zu unterstützen oder zu fördern, ohne vorherige schriftliche
// Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE GARANTIEN,
// EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE IMPLIZIERTEN GARANTIEN FÜR
// DIE MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, SIND
// AUSGESCHLOSSEN. IN KEINEM FALL SIND DIE URHEBERRECHTSINHABER ODER MITWIRKENDEN
// FÜR SCHÄDEN HAFTBAR, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIREKTE, INDIREKTE,
// BEILÄUFIGE, BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER
// NICHT BESCHRÄNKT AUF, DIE BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN;
// NUTZUNGS-, DATEN- ODER GEWINNVERLUSTE; ODER GESCHÄFTSUNTERBRECHUNGEN)
// JEDER ART UND WEISE, OB DURCH VERTRAG, HAFTUNGSRECHT ODER UNERLAUBTE HANDLUNG
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), ENTSTEHEND AUS
// DER NUTZUNG DIESER SOFTWARE, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER
// SCHÄDEN HINGEWIESEN WURDE.
-->

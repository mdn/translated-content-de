---
title: webRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{AddonSidebar}}

Fügen Sie Ereignislistener für die verschiedenen Phasen der Erstellung einer HTTP-Anfrage hinzu, einschließlich Websocket-Anfragen auf `ws://` und `wss://`. Der Ereignislistener erhält detaillierte Informationen über die Anfrage und kann die Anfrage ändern oder abbrechen.

Jedes Ereignis wird in einer bestimmten Phase der Anfrage ausgelöst. Die Reihenfolge der Ereignisse ist wie folgt:

![Die Reihenfolge der Anfragen ist onBeforeRequest, onBeforeSendHeader, onSendHeaders, onHeadersReceived, onResponseStarted und onCompleted. Das Ereignis onHeadersReceived kann ein onBeforeRedirect und ein onAuthRequired auslösen. Ereignisse, die durch onHeadersReceived verursacht werden, beginnen beim Anfang onBeforeRequest. Ereignisse, die durch onAuthRequired verursacht werden, beginnen bei onBeforeSendHeader.](webrequest-flow.png)

Allerdings werden nicht alle dieser Ereignisse von einer Erweiterung beobachtet. Beispielsweise könnte `onBeforeRedirect` nicht von `onBeforeRequest` gefolgt werden, wenn das Umleitungsziel nicht dem Ereignis `filter.urls` entspricht. Dies kann der Fall sein, wenn die URLs im Filter eng definiert sind oder das Umleitungsziel nicht von einer Erweiterung beobachtet werden kann, zum Beispiel wenn es zu einer `data:`-URL umleitet.

{{WebExtAPIRef("webRequest.onErrorOccurred", "onErrorOccurred")}} kann jederzeit während der Anfrage ausgelöst werden. Beachten Sie außerdem, dass die Reihenfolge der Ereignisse manchmal davon abweichen kann. Beispielsweise wird in Firefox bei einem [HSTS](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)-Upgrade das `onBeforeRedirect`-Ereignis sofort nach `onBeforeRequest` ausgelöst. `onErrorOccurred` wird auch ausgelöst, wenn [Firefox-Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) eine Anfrage blockiert.

Alle Ereignisse – _außer_ `onErrorOccurred` – können drei Argumente an `addListener()` übergeben:

- den Listener selbst
- ein {{WebExtAPIRef("webRequest.RequestFilter", "filter")}}-Objekt, damit Sie nur über Anfragen zu bestimmten URLs oder für bestimmte Arten von Ressourcen benachrichtigt werden
- ein optionales `extraInfoSpec`-Objekt. Mit diesem können Sie zusätzliche spezifische Anweisungen für das Ereignis übergeben.

Der Listener-Funktion wird ein `details`-Objekt übergeben, das Informationen über die Anfrage enthält. Dazu gehört eine Anfragen-ID, die es einem Add-on ermöglicht, Ereignisse, die mit einer einzelnen Anfrage verbunden sind, zu korrelieren. Sie ist innerhalb einer Browsersitzung und im Kontext des Add-ons eindeutig. Sie bleibt während einer Anfrage gleich, sogar bei Umleitungen und Authentifizierungsaustauschen.

Um die `webRequest`-API für einen bestimmten Host zu nutzen, muss eine Erweiterung die `"webRequest"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für diesen Host haben. Um das Feature `"blocking"` zu verwenden, muss die Erweiterung außerdem die `"webRequestBlocking"`-API-Berechtigung haben.

Um Ressourcen abzufangen, die von einer Seite geladen werden (wie Bilder, Skripte oder Stylesheets), muss die Erweiterung sowohl die Host-Berechtigung für die Ressource als auch für die Hauptseite, die die Ressource anfordert, haben. Zum Beispiel, wenn eine Seite unter `https://developer.mozilla.org` ein Bild von `https://mdn.mozillademos.org` lädt, muss eine Erweiterung beide Host-Berechtigungen besitzen, wenn sie die Bildanfrage abfangen will.

## Anfragen ändern

Bei einigen dieser Ereignisse können Sie die Anfrage ändern. Insbesondere können Sie:

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

Um dies zu tun, müssen Sie eine Option mit dem Wert `"blocking"` im `extraInfoSpec`-Argument an das `addListener()`-Ereignis übergeben. Dies macht den Listener synchron.

Im Listener können Sie dann ein {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}}-Objekt zurückgeben, das die Änderung angibt, die Sie vornehmen müssen: zum Beispiel der geänderte Anfragen-Header, den Sie senden möchten.

## Anfragen beim Browser-Start

Wenn ein Listener mit der Option `"blocking"` registriert und während des Erweiterungsstarts registriert wird, wird die Erweiterung frühzeitig gestartet, wenn eine Anfrage beim Browser-Start gestellt wird, die mit dem Listener übereinstimmt. Dies ermöglicht der Erweiterung, die Anfrage beim Browser-Start zu beobachten. Wenn Sie diese Schritte nicht unternehmen, können beim Start erstellte Anfragen übersehen werden.

## Spekulative Anfragen

Der Browser kann spekulative Verbindungen herstellen, bei denen angenommen wird, dass eine Anfrage an eine URI bald erfolgen könnte. Dieser Verbindungstyp bietet keine gültigen Tab-Informationen, sodass Anfragedetails wie `tabId`, `frameId`, `parentFrameId` usw. ungenau sind. Diese Verbindungen haben einen {{WebExtAPIRef("webRequest.ResourceType")}} von `speculative`.

## Zugreifen auf Sicherheitsinformationen

Im {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} Listener können Sie auf die {{Glossary("TLS", "TLS")}} Eigenschaften einer Anfrage zugreifen, indem Sie {{WebExtAPIRef("webRequest.getSecurityInfo()", "getSecurityInfo()")}} aufrufen. Dazu müssen Sie auch "blocking" im `extraInfoSpec`-Argument an das `addListener()`-Ereignis übergeben.

Sie können Details des TLS-Handshakes lesen, aber sie nicht ändern oder die Vertrauensentscheidungen des Browsers überschreiben.

## Antworten modifizieren

Um die HTTP-Antwortkörper für eine Anfrage zu modifizieren, rufen Sie {{WebExtAPIRef("webRequest.filterResponseData")}} auf und übergeben Sie die ID der Anfrage. Dies gibt ein {{WebExtAPIRef("webRequest.StreamFilter")}} Objekt zurück, das Sie verwenden können, um die Daten zu untersuchen und zu modifizieren, während sie vom Browser empfangen werden.

Um dies zu tun, müssen Sie die `"webRequestBlocking"`-API-Berechtigung sowie die `"webRequest"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den betreffenden Host haben.

## Typen

- {{WebExtAPIRef("webRequest.BlockingResponse")}}
  - : Ein Objekt dieses Typs wird von Ereignislistenern zurückgegeben, die `"blocking"` in ihrem `extraInfoSpec`-Argument gesetzt haben. Durch das Setzen bestimmter Eigenschaften in `BlockingResponse` kann der Listener Netzwerk-Anfragen ändern.
- {{WebExtAPIRef("webRequest.CertificateInfo")}}
  - : Ein Objekt, das ein einzelnes X.509-Zertifikat beschreibt.
- {{WebExtAPIRef("webRequest.HttpHeaders")}}
  - : Ein Array von HTTP-Headern. Jeder Header wird als Objekt mit zwei Eigenschaften dargestellt: `name` und entweder `value` oder `binaryValue`.
- {{WebExtAPIRef("webRequest.RequestFilter")}}
  - : Ein Objekt, das Filter zur Anwendung auf `webRequest`-Ereignisse beschreibt.
- {{WebExtAPIRef("webRequest.ResourceType")}}
  - : Repräsentiert eine bestimmte Art von Ressource, die in einer Web-Anfrage abgerufen wird.
- {{WebExtAPIRef("webRequest.SecurityInfo")}}
  - : Ein Objekt, das die Sicherheitseigenschaften einer bestimmten Web-Anfrage beschreibt.
- {{WebExtAPIRef("webRequest.StreamFilter")}}
  - : Ein Objekt, das verwendet werden kann, um HTTP-Antworten zu überwachen und zu modifizieren, während sie empfangen werden.
- {{WebExtAPIRef("webRequest.UploadData")}}
  - : Enthält Daten, die in einer URL-Anfrage hochgeladen werden.

## Eigenschaften

- {{WebExtAPIRef("webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES", "webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES")}}
  - : Die maximale Anzahl an Aufrufen, die {{WebExtAPIRef("WebRequest.handlerBehaviorChanged", "handlerBehaviorChanged()")}} in einem Zeitraum von 10 Minuten ausführen kann.

## Methoden

- {{WebExtAPIRef("webRequest.handlerBehaviorChanged()")}}
  - : Diese Methode kann verwendet werden, um sicherzustellen, dass Ereignislistener korrekt angewendet werden, wenn Seiten im In-Memory-Cache des Browsers liegen.
- {{WebExtAPIRef("webRequest.filterResponseData()")}}
  - : Gibt ein {{WebExtAPIRef("webRequest.StreamFilter")}}-Objekt für eine bestimmte Anfrage zurück.
- {{WebExtAPIRef("webRequest.getSecurityInfo()")}}
  - : Ruft detaillierte Informationen über die {{Glossary("TLS", "TLS")}}-Verbindung ab, die mit einer bestimmten Anfrage verbunden ist.

## Ereignisse

- {{WebExtAPIRef("webRequest.onBeforeRequest")}}
  - : Wird ausgelöst, wenn eine Anfrage gestellt werden soll und bevor Header verfügbar sind. Dies ist ein guter Ort, um zuzuhören, wenn Sie die Anfrage abbrechen oder umleiten möchten.
- {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}}
  - : Wird ausgelöst, bevor HTTP-Daten gesendet werden, aber nachdem HTTP-Header verfügbar sind. Dies ist ein guter Ort, um zuzuhören, wenn Sie HTTP-Anfragen-Header ändern möchten.
- {{WebExtAPIRef("webRequest.onSendHeaders")}}
  - : Wird ausgelöst, kurz bevor Header gesendet werden. Wenn Ihr Add-on oder ein anderes Add-on Header in {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} geändert hat, sehen Sie hier die geänderte Version.
- {{WebExtAPIRef("webRequest.onHeadersReceived")}}
  - : Wird ausgelöst, wenn die HTTP-Antwortheader, die mit einer Anfrage verbunden sind, empfangen wurden. Sie können dieses Ereignis verwenden, um HTTP-Antwortheader zu ändern.
- {{WebExtAPIRef("webRequest.onAuthRequired")}}
  - : Wird ausgelöst, wenn der Server den Client auffordert, Authentifizierungsdaten bereitzustellen. Der Listener kann nichts tun, die Anfrage abbrechen oder Authentifizierungsdaten bereitstellen.
- {{WebExtAPIRef("webRequest.onResponseStarted")}}
  - : Wird ausgelöst, wenn das erste Byte des Antwortkörpers empfangen wird. Bei HTTP-Anfragen bedeutet dies, dass die Statuszeile und Antwort-Header verfügbar sind.
- {{WebExtAPIRef("webRequest.onBeforeRedirect")}}
  - : Wird ausgelöst, wenn eine serverinitiierte Umleitung im Begriff ist, stattzufinden.
- {{WebExtAPIRef("webRequest.onCompleted")}}
  - : Wird ausgelöst, wenn eine Anfrage abgeschlossen ist.
- {{WebExtAPIRef("webRequest.onErrorOccurred")}}
  - : Wird ausgelöst, wenn ein Fehler auftritt.

## Browser-Kompatibilität

{{Compat}}

[Zusätzliche Anmerkungen zu Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#webrequest_api).

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest) API. Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->

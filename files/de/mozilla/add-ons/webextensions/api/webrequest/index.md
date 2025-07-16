---
title: webRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Fügen Sie Ereignis-Listener für die verschiedenen Phasen einer HTTP-Anfrage hinzu, einschließlich WebSocket-Anfragen über `ws://` und `wss://`. Der Ereignis-Listener erhält detaillierte Informationen über die Anfrage und kann die Anfrage ändern oder abbrechen.

Jedes Ereignis wird in einer bestimmten Phase der Anfrage ausgelöst. Die Reihenfolge der Ereignisse ist folgende:

![Die Reihenfolge der Anfragen ist onBeforeRequest, onBeforeSendHeader, onSendHeaders, onHeadersReceived, onResponseStarted und onCompleted. Das onHeadersReceived kann ein onBeforeRedirect und ein onAuthRequired verursachen. Ereignisse, die durch onHeadersReceived ausgelöst werden, starten beim Anfang onBeforeRequest. Ereignisse, die durch onAuthRequired verursacht werden, beginnen bei onBeforeSendHeader.](webrequest-flow.png)

Allerdings müssen nicht alle dieser Ereignisse von einer Erweiterung beobachtet werden. Zum Beispiel könnte `onBeforeRedirect` nicht von `onBeforeRequest` gefolgt werden, wenn das Ziel der Umleitung nicht mit den `filter.urls` des Ereignisses übereinstimmt. Dies kann daran liegen, dass die URLs im Filter eng definiert sind oder das Umleitungsziel nicht von einer Erweiterung beobachtet werden kann, wie zum Beispiel bei einer Umleitung zu einer `data:` URL.

{{WebExtAPIRef("webRequest.onErrorOccurred", "onErrorOccurred")}} kann zu jeder Zeit während der Anfrage ausgelöst werden. Beachten Sie auch, dass manchmal die Reihenfolge der Ereignisse hiervon abweichen kann. Zum Beispiel wird in Firefox bei einem [HSTS](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)-Upgrade das `onBeforeRedirect`-Ereignis sofort nach `onBeforeRequest` ausgelöst. `onErrorOccurred` wird auch ausgelöst, wenn der [Firefox Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) eine Anfrage blockiert.

Alle Ereignisse – _außer_ `onErrorOccurred` – können drei Argumente für `addListener()` annehmen:

- der Listener selbst
- ein {{WebExtAPIRef("webRequest.RequestFilter", "filter")}} Objekt, sodass Sie nur für Anfragen an bestimmte URLs oder für bestimmte Ressourcentypen benachrichtigt werden
- ein optionales `extraInfoSpec` Objekt. Sie können dieses verwenden, um zusätzliche ereignisspezifische Anweisungen zu übermitteln.

Der Listener-Funktion wird ein `details`-Objekt übergeben, das Informationen über die Anfrage enthält. Dies schließt eine Anfragen-ID ein, die es einer Add-on ermöglicht, die mit einer einzelnen Anfrage verbundenen Ereignisse zu verknüpfen. Es ist innerhalb einer Browsersitzung und des Kontextes des Add-ons einzigartig. Es bleibt über die gesamte Anfrage hinweg dieselbe, selbst über Weiterleitungen und Authentifizierungsaustausch hinweg.

Um die `webRequest` API für einen bestimmten Host zu verwenden, muss eine Erweiterung die `"webRequest"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für diesen Host haben. Um die `"blocking"`-Funktion zu nutzen, muss die Erweiterung außerdem über die `"webRequestBlocking"` API-Berechtigung verfügen.

Um Ressourcen, die von einer Seite geladen wurden (wie Bilder, Skripte oder Stylesheets), abzufangen, muss die Erweiterung die Host-Berechtigung sowohl für die Ressource als auch für die Hauptseite, die die Ressource anfordert, haben. Zum Beispiel, wenn eine Seite auf `https://developer.mozilla.org` ein Bild von `https://mdn.mozillademos.org` lädt, dann muss eine Erweiterung beide Host-Berechtigungen haben, wenn sie die Bildanfrage abfangen möchte.

## Anfragen ändern

Bei einigen dieser Ereignisse können Sie die Anfrage ändern. Genauer gesagt können Sie:

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

- Authentifizierungsdaten bereitstellen in:
  - {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}

Um dies zu tun, müssen Sie im `extraInfoSpec`-Argument des Events `addListener()` eine Option mit dem Wert `"blocking"` übergeben. Dies macht den Listener synchron.

Im Listener können Sie dann ein {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}} Objekt zurückgeben, das die Änderung anzeigt, die Sie vornehmen müssen: z.B. den geänderten Anfrage-Header, den Sie senden möchten.

## Anfragen beim Browser-Start

Wenn ein Listener mit der Option `"blocking"` registriert und während des Starts der Erweiterung registriert wird, wird die Erweiterung früh gestartet, wenn eine Anfrage während des Browser-Starts gemacht wird, die dem Listener entspricht. Dadurch wird ermöglicht, dass die Erweiterung die Anfrage beim Browser-Start beobachten kann. Wenn Sie diese Schritte nicht befolgen, könnten Anfragen beim Start übersehen werden.

## Spekulative Anfragen

Der Browser kann spekulative Verbindungen herstellen, bei denen er bestimmt, dass bald eine Anfrage an eine URI kommen könnte. Diese Art von Verbindung liefert keine gültigen Tab-Informationen, sodass Anfragedetails wie `tabId`, `frameId`, `parentFrameId` usw. ungenau sind. Diese Verbindungen haben einen {{WebExtAPIRef("webRequest.ResourceType")}} von `speculative`.

## Sicherheitsinformationen abrufen

Im {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} Listener können Sie auf die {{Glossary("TLS", "TLS")}} Eigenschaften einer Anfrage zugreifen, indem Sie {{WebExtAPIRef("webRequest.getSecurityInfo()", "getSecurityInfo()")}} aufrufen. Dazu müssen Sie auch "blocking" im `extraInfoSpec`-Argument des Events `addListener()` übergeben.

Sie können Details des TLS-Handshakes lesen, aber sie nicht ändern oder die Vertrauensentscheidungen des Browsers überschreiben.

## Antworten ändern

Um die HTTP-Antwortkörper für eine Anfrage zu ändern, rufen Sie {{WebExtAPIRef("webRequest.filterResponseData")}} auf und übergeben Sie dabei die ID der Anfrage. Dies gibt ein {{WebExtAPIRef("webRequest.StreamFilter")}} Objekt zurück, das Sie verwenden können, um die Daten zu untersuchen und zu ändern, während sie vom Browser empfangen werden.

Um dies zu tun, müssen Sie sowohl die `"webRequestBlocking"` API-Berechtigung als auch die `"webRequest"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den betreffenden Host haben.

## Typen

- {{WebExtAPIRef("webRequest.BlockingResponse")}}
  - : Ein Objekt dieses Typs wird von Ereignis-Listenern zurückgegeben, die `"blocking"` in ihrem `extraInfoSpec`-Argument gesetzt haben. Durch das Setzen bestimmter Eigenschaften in `BlockingResponse`, kann der Listener Netzwerk-Anfragen ändern.
- {{WebExtAPIRef("webRequest.CertificateInfo")}}
  - : Ein Objekt, das ein einzelnes X.509-Zertifikat beschreibt.
- {{WebExtAPIRef("webRequest.HttpHeaders")}}
  - : Ein Array von HTTP-Headern. Jeder Header wird als Objekt mit zwei Eigenschaften dargestellt: `name` und entweder `value` oder `binaryValue`.
- {{WebExtAPIRef("webRequest.RequestFilter")}}
  - : Ein Objekt, das Filter beschreibt, die auf `webRequest`-Ereignisse angewendet werden.
- {{WebExtAPIRef("webRequest.ResourceType")}}
  - : Repräsentiert eine bestimmte Art von Ressource, die in einer Web-Anfrage abgerufen wird.
- {{WebExtAPIRef("webRequest.SecurityInfo")}}
  - : Ein Objekt, das die Sicherheitseigenschaften einer bestimmten Web-Anfrage beschreibt.
- {{WebExtAPIRef("webRequest.StreamFilter")}}
  - : Ein Objekt, das verwendet werden kann, um HTTP-Antworten während des Empfangs zu überwachen und zu ändern.
- {{WebExtAPIRef("webRequest.UploadData")}}
  - : Enthält Daten, die in einer URL-Anfrage hochgeladen wurden.

## Eigenschaften

- {{WebExtAPIRef("webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES", "webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES")}}
  - : Die maximale Anzahl von Malen, die {{WebExtAPIRef("WebRequest.handlerBehaviorChanged", "handlerBehaviorChanged()")}} in einem Zeitraum von 10 Minuten aufgerufen werden kann.

## Methoden

- {{WebExtAPIRef("webRequest.handlerBehaviorChanged()")}}
  - : Diese Methode kann verwendet werden, um sicherzustellen, dass Ereignis-Listener korrekt angewendet werden, wenn Seiten im Speicher-Cache des Browsers sind.
- {{WebExtAPIRef("webRequest.filterResponseData()")}}
  - : Gibt ein {{WebExtAPIRef("webRequest.StreamFilter")}} Objekt für eine bestimmte Anfrage zurück.
- {{WebExtAPIRef("webRequest.getSecurityInfo()")}}
  - : Ruft detaillierte Informationen über die {{Glossary("TLS", "TLS")}} Verbindung ab, die mit einer bestimmten Anfrage verbunden ist.

## Ereignisse

- {{WebExtAPIRef("webRequest.onBeforeRequest")}}
  - : Wird ausgelöst, wenn eine Anfrage gemacht werden soll und bevor Header verfügbar sind. Dies ist ein guter Zeitpunkt, um zu hören, wenn Sie die Anfrage abbrechen oder umleiten möchten.
- {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}}
  - : Wird ausgelöst, bevor HTTP-Daten gesendet werden, aber nachdem HTTP-Header verfügbar sind. Dies ist ein guter Zeitpunkt, um zu hören, wenn Sie HTTP-Anfrageheader ändern möchten.
- {{WebExtAPIRef("webRequest.onSendHeaders")}}
  - : Wird direkt vor dem Senden von Headern ausgelöst. Wenn Ihr Add-on oder ein anderes Add-on Header in {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} geändert hat, sehen Sie hier die geänderte Version.
- {{WebExtAPIRef("webRequest.onHeadersReceived")}}
  - : Wird ausgelöst, wenn die HTTP-Antwortheader, die mit einer Anfrage verbunden sind, empfangen wurden. Sie können dieses Ereignis verwenden, um HTTP-Antwortheader zu ändern.
- {{WebExtAPIRef("webRequest.onAuthRequired")}}
  - : Wird ausgelöst, wenn der Server den Client auffordert, Authentifizierungsdaten bereitzustellen. Der Listener kann nichts tun, die Anfrage abbrechen oder Authentifizierungsdaten bereitstellen.
- {{WebExtAPIRef("webRequest.onResponseStarted")}}
  - : Wird ausgelöst, wenn das erste Byte des Antwortkörpers empfangen wurde. Für HTTP-Anfragen bedeutet dies, dass die Statuszeile und Antwort-Header verfügbar sind.
- {{WebExtAPIRef("webRequest.onBeforeRedirect")}}
  - : Wird ausgelöst, wenn eine serverseitige Umleitung durchgeführt werden soll.
- {{WebExtAPIRef("webRequest.onCompleted")}}
  - : Wird ausgelöst, wenn eine Anfrage abgeschlossen ist.
- {{WebExtAPIRef("webRequest.onErrorOccurred")}}
  - : Wird ausgelöst, wenn ein Fehler auftritt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

[Zusätzliche Hinweise zu Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#webrequest_api).

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest) API. Diese Dokumentation stammt aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

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

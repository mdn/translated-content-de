---
title: webRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Fügen Sie Ereignis-Listener für die verschiedenen Phasen einer HTTP-Anfrage hinzu, einschließlich WebSocket-Anfragen über `ws://` und `wss://`. Der Ereignis-Listener erhält detaillierte Informationen über die Anfrage und kann die Anfrage ändern oder abbrechen.

Jedes Ereignis wird in einer bestimmten Phase der Anfrage ausgelöst. Die Reihenfolge der Ereignisse ist wie folgt:

![Reihenfolge der Anfragen ist onBeforeRequest, onBeforeSendHeader, onSendHeaders, onHeadersReceived, onResponseStarted und onCompleted. Das onHeadersReceived kann ein onBeforeRedirect und ein onAuthRequired verursachen. Ereignisse, die durch onHeadersReceived ausgelöst werden, beginnen am Anfang mit onBeforeRequest. Ereignisse, die durch onAuthRequired ausgelöst werden, beginnen mit onBeforeSendHeader.](webrequest-flow.png)

Nicht alle dieser Ereignisse können jedoch von einer Erweiterung beobachtet werden. Beispielsweise kann `onBeforeRedirect` nicht von `onBeforeRequest` gefolgt werden, wenn das Weiterleitungsziel nicht mit dem Ereignis `filter.urls` übereinstimmt. Dies kann der Fall sein, wenn die URLs im Filter eng definiert sind oder das Weiterleitungsziel von einer Erweiterung nicht beobachtet werden kann, wie z. B. wenn es zu einer `data:` URL weiterleitet.

{{WebExtAPIRef("webRequest.onErrorOccurred", "onErrorOccurred")}} kann jederzeit während der Anfrage ausgelöst werden. Beachten Sie auch, dass die Ereignisreihenfolge manchmal davon abweichen kann. Beispielsweise wird in Firefox bei einem [HSTS](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)-Upgrade das `onBeforeRedirect`-Ereignis sofort nach `onBeforeRequest` ausgelöst. `onErrorOccurred` wird ebenfalls ausgelöst, wenn [Firefox-Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) eine Anfrage blockiert.

Alle Ereignisse – _außer_ `onErrorOccurred` – können drei Argumente an `addListener()` übergeben:

- den Listener selbst
- ein {{WebExtAPIRef("webRequest.RequestFilter", "filter")}}-Objekt, damit Sie nur für Anfragen an bestimmte URLs oder für bestimmte Ressourcentypen benachrichtigt werden können
- ein optionales `extraInfoSpec`-Objekt. Sie können dies verwenden, um zusätzliche, ereignisspezifische Anweisungen zu übergeben.

Der Listener-Funktion wird ein `details`-Objekt übergeben, das Informationen über die Anfrage enthält. Dies umfasst eine Anfragen-ID, die bereitgestellt wird, um einer Erweiterung die Korrelation von Ereignissen zu ermöglichen, die mit einer einzigen Anfrage verbunden sind. Sie ist innerhalb einer Browsersitzung und im Kontext der Erweiterung eindeutig. Sie bleibt über eine Anfrage hinweg gleich, sogar über Weiterleitungen und Authentifizierungsaustausche hinweg.

Um die `webRequest`-API für einen bestimmten Host zu verwenden, muss eine Erweiterung über die Berechtigung `"webRequest"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für diesen Host verfügen. Um die `"blocking"`-Funktion zu nutzen, muss die Erweiterung auch die `"webRequestBlocking"` API-Berechtigung besitzen.

Um Ressourcen, die von einer Seite geladen werden (wie Bilder, Skripte oder Stylesheets), abzufangen, muss die Erweiterung sowohl die Host-Berechtigung für die Ressource als auch für die Hauptseite, die die Ressource anfordert, besitzen. Wenn eine Seite unter `https://developer.mozilla.org` z. B. ein Bild von `https://mdn.mozillademos.org` lädt, muss eine Erweiterung beide Host-Berechtigungen haben, wenn sie die Bildanfrage abfangen will.

## Modifizieren von Anfragen

Bei einigen dieser Ereignisse können Sie die Anfrage modifizieren. Insbesondere können Sie:

- die Anfrage abbrechen in:

  - {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}
  - {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}
  - {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}

- die Anfrage umleiten in:

  - {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}
  - {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}

- Anfrage-Header modifizieren in:

  - {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}

- Antwort-Header modifizieren in:

  - {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}

- Authentifizierungsdaten bereitstellen in:
  - {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}

Um dies zu tun, müssen Sie im `extraInfoSpec`-Argument zum Ereignis `addListener()` eine Option mit dem Wert `"blocking"` übergeben. Dies macht den Listener synchron.

Im Listener können Sie dann ein {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}}-Objekt zurückgeben, das die Modifikation, die Sie vornehmen müssen, angibt: zum Beispiel den modifizierten Anfrage-Header, den Sie senden möchten.

## Anfragen beim Browser-Start

Wenn ein Listener mit der `"blocking"`-Option registriert ist und während des Erweiterungs-Starts registriert wird, startet die Erweiterung frühzeitig, wenn während des Browser-Starts eine Anfrage erfolgt, die mit dem Listener übereinstimmt. Dadurch kann die Erweiterung die Anfrage beim Browser-Start beobachten. Wenn Sie diese Schritte nicht unternehmen, könnten Anfragen beim Start übersehen werden.

## Spekulative Anfragen

Der Browser kann spekulative Verbindungen herstellen, bei denen er feststellt, dass möglicherweise bald eine Anfrage an eine URI erfolgt. Diese Art von Verbindung liefert keine gültigen Tab-Informationen, sodass Anfragedetails wie `tabId`, `frameId`, `parentFrameId` usw. ungenau sind. Diese Verbindungen haben einen {{WebExtAPIRef("webRequest.ResourceType")}} von `speculative`.

## Zugriff auf Sicherheitsinformationen

Im {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}-Listener können Sie auf die {{Glossary("TLS", "TLS")}}-Eigenschaften einer Anfrage zugreifen, indem Sie {{WebExtAPIRef("webRequest.getSecurityInfo()", "getSecurityInfo()")}} aufrufen. Dazu müssen Sie auch "blocking" im `extraInfoSpec`-Argument zum Ereignis `addListener()` übergeben.

Sie können Details des TLS-Handshakes lesen, sie aber nicht modifizieren oder die Vertrauensentscheidungen des Browsers überschreiben.

## Modifizieren von Antworten

Um die HTTP-Antwortkörper einer Anfrage zu modifizieren, rufen Sie {{WebExtAPIRef("webRequest.filterResponseData")}} auf und übergeben die ID der Anfrage. Dies gibt ein {{WebExtAPIRef("webRequest.StreamFilter")}}-Objekt zurück, das Sie verwenden können, um die Daten zu untersuchen und zu modifizieren, während sie vom Browser empfangen werden.

Dazu müssen Sie über die `"webRequestBlocking"` API-Berechtigung sowie über die `"webRequest"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den entsprechenden Host verfügen.

## Arten

- {{WebExtAPIRef("webRequest.BlockingResponse")}}
  - : Ein Objekt dieses Typs wird von Event-Listenern zurückgegeben, die `"blocking"` in ihrem `extraInfoSpec`-Argument gesetzt haben. Indem bestimmte Eigenschaften im `BlockingResponse` gesetzt werden, kann der Listener Netzwerk-Anfragen modifizieren.
- {{WebExtAPIRef("webRequest.CertificateInfo")}}
  - : Ein Objekt, das ein einzelnes X.509-Zertifikat beschreibt.
- {{WebExtAPIRef("webRequest.HttpHeaders")}}
  - : Ein Array von HTTP-Headern. Jeder Header wird als Objekt mit zwei Eigenschaften dargestellt: `name` und entweder `value` oder `binaryValue`.
- {{WebExtAPIRef("webRequest.RequestFilter")}}
  - : Ein Objekt, das Filter beschreibt, die auf `webRequest`-Ereignisse angewendet werden.
- {{WebExtAPIRef("webRequest.ResourceType")}}
  - : Stellt eine bestimmte Art von Ressource dar, die in einer Web-Anfrage abgerufen wird.
- {{WebExtAPIRef("webRequest.SecurityInfo")}}
  - : Ein Objekt, das die Sicherheitseigenschaften einer bestimmten Web-Anfrage beschreibt.
- {{WebExtAPIRef("webRequest.StreamFilter")}}
  - : Ein Objekt, das verwendet werden kann, um HTTP-Antworten zu überwachen und zu modifizieren, während sie empfangen werden.
- {{WebExtAPIRef("webRequest.UploadData")}}
  - : Enthält Daten, die in einer URL-Anfrage hochgeladen wurden.

## Eigenschaften

- {{WebExtAPIRef("webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES", "webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES")}}
  - : Die maximale Anzahl von Zeiten, die {{WebExtAPIRef("WebRequest.handlerBehaviorChanged", "handlerBehaviorChanged()")}} innerhalb eines 10-Minuten-Zeitraums aufgerufen werden kann.

## Methoden

- {{WebExtAPIRef("webRequest.handlerBehaviorChanged()")}}
  - : Diese Methode kann verwendet werden, um sicherzustellen, dass Event-Listener korrekt angewendet werden, wenn Seiten im In-Memory-Cache des Browsers gespeichert sind.
- {{WebExtAPIRef("webRequest.filterResponseData()")}}
  - : Gibt ein {{WebExtAPIRef("webRequest.StreamFilter")}}-Objekt für eine gegebene Anfrage zurück.
- {{WebExtAPIRef("webRequest.getSecurityInfo()")}}
  - : Ruft detaillierte Informationen über die {{Glossary("TLS", "TLS")}}-Verbindung in Verbindung mit einer gegebenen Anfrage ab.

## Ereignisse

- {{WebExtAPIRef("webRequest.onBeforeRequest")}}
  - : Wird ausgelöst, wenn eine Anfrage kurz vor der Durchführung steht und bevor Header verfügbar sind. Das ist ein guter Zeitpunkt, um zuzuhören, wenn Sie die Anfrage abbrechen oder umleiten möchten.
- {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}}
  - : Wird ausgelöst, bevor HTTP-Daten gesendet werden, aber nachdem HTTP-Header verfügbar sind. Das ist ein guter Zeitpunkt, um zuzuhören, wenn Sie HTTP-Anfrage-Header modifizieren möchten.
- {{WebExtAPIRef("webRequest.onSendHeaders")}}
  - : Wird unmittelbar vor dem Senden der Header ausgelöst. Wenn Ihr Add-on oder ein anderes Add-on Header in {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} geändert hat, sehen Sie hier die modifizierte Version.
- {{WebExtAPIRef("webRequest.onHeadersReceived")}}
  - : Wird ausgelöst, wenn die HTTP-Antwort-Header in Verbindung mit einer Anfrage empfangen wurden. Sie können dieses Ereignis verwenden, um HTTP-Antwort-Header zu modifizieren.
- {{WebExtAPIRef("webRequest.onAuthRequired")}}
  - : Wird ausgelöst, wenn der Server den Client auffordert, Authentifizierungsdaten bereitzustellen. Der Listener kann nichts tun, die Anfrage abbrechen oder Authentifizierungsdaten bereitstellen.
- {{WebExtAPIRef("webRequest.onResponseStarted")}}
  - : Wird ausgelöst, wenn das erste Byte des Antwortkörpers empfangen wird. Für HTTP-Anfragen bedeutet dies, dass die Statuszeile und Antwort-Header verfügbar sind.
- {{WebExtAPIRef("webRequest.onBeforeRedirect")}}
  - : Wird ausgelöst, wenn eine serverinitiierte Weiterleitung kurz bevorsteht.
- {{WebExtAPIRef("webRequest.onCompleted")}}
  - : Wird ausgelöst, wenn eine Anfrage abgeschlossen ist.
- {{WebExtAPIRef("webRequest.onErrorOccurred")}}
  - : Wird ausgelöst, wenn ein Fehler auftritt.

## Browser-Kompatibilität

{{Compat}}

[Zusätzliche Hinweise zu Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#webrequest_api).

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest)-API von Chromium. Diese Dokumentation leitet sich von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code ab.

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

---
title: webRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{AddonSidebar}}

Fügen Sie Ereignis-Listener für die verschiedenen Phasen einer HTTP-Anfrage hinzu, einschließlich WebSocket-Anfragen über `ws://` und `wss://`. Der Ereignis-Listener empfängt detaillierte Informationen über die Anfrage und kann die Anfrage modifizieren oder abbrechen.

Jedes Ereignis wird in einer bestimmten Phase der Anfrage ausgelöst. Die Abfolge der Ereignisse ist wie folgt:

![Reihenfolge der Anfragen ist onBeforeRequest, onBeforeSendHeaders, onSendHeaders, onHeadersReceived, onResponseStarted und onCompleted. Das onHeadersReceived kann ein onBeforeRedirect und ein onAuthRequired verursachen. Ereignisse, die durch onHeadersReceived verursacht werden, beginnen am Anfang mit onBeforeRequest. Ereignisse, die durch onAuthRequired verursacht werden, beginnen bei onBeforeSendHeaders.](webrequest-flow.png)

Jedoch könnten nicht alle dieser Ereignisse von einer Erweiterung beobachtet werden. Zum Beispiel könnte `onBeforeRedirect` nicht von `onBeforeRequest` gefolgt werden, wenn das Umleitungsziel nicht dem Ereignis `filter.urls` entspricht. Dies kann der Fall sein, wenn die URLs im Filter eng definiert sind oder das Umleitungsziel von einer Erweiterung nicht beobachtet werden kann, wie wenn es zu einer `data:`-URL umleitet.

{{WebExtAPIRef("webRequest.onErrorOccurred", "onErrorOccurred")}} kann jederzeit während der Anfrage ausgelöst werden. Beachten Sie auch, dass manchmal die Reihenfolge der Ereignisse von dieser abweichen kann. Zum Beispiel wird in Firefox bei einem [HSTS](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)-Upgrade das `onBeforeRedirect`-Ereignis sofort nach `onBeforeRequest` ausgelöst. `onErrorOccurred` wird auch ausgeführt, wenn [Firefox Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) eine Anfrage blockiert.

Alle Ereignisse – _außer_ `onErrorOccurred` – können drei Argumente an `addListener()` übergeben:

- der Listener selbst
- ein {{WebExtAPIRef("webRequest.RequestFilter", "filter")}}-Objekt, damit Sie nur für Anfragen zu bestimmten URLs oder für bestimmte Ressourcentypen benachrichtigt werden können
- ein optionales `extraInfoSpec`-Objekt. Damit können Sie zusätzliche ereignisspezifische Anweisungen übergeben.

Der Listener-Funktion wird ein `details`-Objekt übergeben, das Informationen über die Anfrage enthält. Dazu gehört eine Anfrage-ID, die bereitgestellt wird, um einer Erweiterung die Korrelation von Ereignissen zu einer einzelnen Anfrage zu ermöglichen. Sie ist einzigartig innerhalb einer Browsersitzung und dem Kontext der Erweiterung. Sie bleibt während einer Anfrage gleich, selbst über Umleitungen und Authentifizierungsaustausche hinweg.

Um die `webRequest`-API für einen bestimmten Host zu verwenden, muss eine Erweiterung die `"webRequest"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für diesen Host besitzen. Um die `"blocking"`-Funktion zu nutzen, muss die Erweiterung auch die `"webRequestBlocking"`-API-Berechtigung besitzen.

Um Ressourcen, die von einer Seite geladen werden (wie Bilder, Skripte oder Stylesheets), abzufangen, muss die Erweiterung sowohl die Host-Berechtigung für die Ressource als auch für die Hauptseite, die die Ressource anfordert, besitzen. Beispielsweise, wenn eine Seite auf `https://developer.mozilla.org` ein Bild von `https://mdn.mozillademos.org` lädt, muss eine Erweiterung beide Host-Berechtigungen haben, um die Bildanforderung abfangen zu können.

## Modifizieren von Anfragen

Bei einigen dieser Ereignisse können Sie die Anfrage modifizieren. Insbesondere können Sie:

- die Anfrage abbrechen in:

  - {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}
  - {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}
  - {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}

- die Anfrage umleiten in:

  - {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}
  - {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}

- Anfragen-Header modifizieren in:

  - {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}

- Antwort-Header modifizieren in:

  - {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}

- Authentifizierungsdaten bereitstellen in:

  - {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}

Dazu müssen Sie im `extraInfoSpec`-Argument zum `addListener()` des Ereignisses eine Option mit dem Wert `"blocking"` übergeben. Dies macht den Listener synchron.

Im Listener können Sie dann ein {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}}-Objekt zurückgeben, das angibt, welche Modifikation Sie vornehmen müssen: zum Beispiel den modifizierten Anfragen-Header, den Sie senden möchten.

## Anfragen beim Browserstart

Wenn ein Listener mit der `"blocking"`-Option registriert wird und während des Starts der Erweiterung registriert wird, startet die Erweiterung frühzeitig, wenn eine Anfrage beim Start des Browsers gestellt wird, die dem Listener entspricht. Dies ermöglicht der Erweiterung, die Anfrage beim Browserstart zu beobachten. Wenn Sie diese Schritte nicht unternehmen, könnten beim Start gestellte Anfragen verpasst werden.

## Spekulative Anfragen

Der Browser kann spekulative Verbindungen herstellen, bei denen er feststellt, dass eine Anfrage zu einer URI möglicherweise bald erfolgen wird. Solche Verbindungen liefern keine gültigen Tab-Informationen, daher sind Anfragedetails wie `tabId`, `frameId`, `parentFrameId` usw. ungenau. Diese Verbindungen haben einen {{WebExtAPIRef("webRequest.ResourceType")}} von `speculative`.

## Zugriff auf Sicherheitsinformationen

Im {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}-Listener können Sie die {{Glossary("TLS", "TLS")}}-Eigenschaften einer Anfrage über den Aufruf von {{WebExtAPIRef("webRequest.getSecurityInfo()", "getSecurityInfo()")}} abrufen. Dazu müssen Sie auch "blocking" im `extraInfoSpec`-Argument zum `addListener()` des Ereignisses übergeben.

Sie können Details des TLS-Handshakes lesen, sie aber nicht modifizieren oder die Vertrauensentscheidungen des Browsers überschreiben.

## Modifizieren von Antworten

Um die HTTP-Antwortkörper für eine Anfrage zu modifizieren, rufen Sie {{WebExtAPIRef("webRequest.filterResponseData")}} auf und übergeben Sie die ID der Anfrage. Dies gibt ein {{WebExtAPIRef("webRequest.StreamFilter")}}-Objekt zurück, das Sie verwenden können, um die Daten zu untersuchen und zu ändern, während sie vom Browser empfangen werden.

Dazu müssen Sie sowohl die `"webRequestBlocking"`-API-Berechtigung als auch die `"webRequest"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den entsprechenden Host besitzen.

## Typen

- {{WebExtAPIRef("webRequest.BlockingResponse")}}
  - : Ein Objekt dieses Typs wird von Ereignis-Listenern zurückgegeben, die `"blocking"` in ihrem `extraInfoSpec`-Argument gesetzt haben. Durch das Setzen bestimmter Eigenschaften in `BlockingResponse` kann der Listener Netzwerk-Anfragen modifizieren.
- {{WebExtAPIRef("webRequest.CertificateInfo")}}
  - : Ein Objekt, das ein einzelnes X.509-Zertifikat beschreibt.
- {{WebExtAPIRef("webRequest.HttpHeaders")}}
  - : Ein Array von HTTP-Headern. Jeder Header wird als Objekt mit zwei Eigenschaften dargestellt: `name` und entweder `value` oder `binaryValue`.
- {{WebExtAPIRef("webRequest.RequestFilter")}}
  - : Ein Objekt, das Filter beschreibt, die auf `webRequest`-Ereignisse angewendet werden.
- {{WebExtAPIRef("webRequest.ResourceType")}}
  - : Repräsentiert eine bestimmte Art von Ressource, die in einer Webanfrage abgerufen wird.
- {{WebExtAPIRef("webRequest.SecurityInfo")}}
  - : Ein Objekt, das die Sicherheitseigenschaften einer bestimmten Webanfrage beschreibt.
- {{WebExtAPIRef("webRequest.StreamFilter")}}
  - : Ein Objekt, das verwendet werden kann, um HTTP-Antworten zu überwachen und zu modifizieren, während sie empfangen werden.
- {{WebExtAPIRef("webRequest.UploadData")}}
  - : Enthält Daten, die in einer URL-Anfrage hochgeladen werden.

## Eigenschaften

- {{WebExtAPIRef("webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES", "webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES")}}
  - : Die maximale Anzahl von Malen, die {{WebExtAPIRef("WebRequest.handlerBehaviorChanged", "handlerBehaviorChanged()")}} in einem Zeitraum von 10 Minuten aufgerufen werden kann.

## Methoden

- {{WebExtAPIRef("webRequest.handlerBehaviorChanged()")}}
  - : Diese Methode kann verwendet werden, um sicherzustellen, dass Ereignis-Listener korrekt angewendet werden, wenn Seiten im Cache des Browsers sind.
- {{WebExtAPIRef("webRequest.filterResponseData()")}}
  - : Gibt ein {{WebExtAPIRef("webRequest.StreamFilter")}}-Objekt für eine gegebene Anfrage zurück.
- {{WebExtAPIRef("webRequest.getSecurityInfo()")}}
  - : Ruft detaillierte Informationen über die {{Glossary("TLS", "TLS")}}-Verbindung ab, die mit einer gegebenen Anfrage verbunden ist.

## Ereignisse

- {{WebExtAPIRef("webRequest.onBeforeRequest")}}
  - : Wird ausgelöst, wenn eine Anfrage im Begriff ist, gemacht zu werden, und bevor Header verfügbar sind. Dies ist ein guter Zeitpunkt, zuzuhören, wenn Sie die Anfrage abbrechen oder umleiten möchten.
- {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}}
  - : Wird ausgelöst, bevor HTTP-Daten gesendet werden, aber nachdem HTTP-Header verfügbar sind. Dies ist ein guter Zeitpunkt, zuzuhören, wenn Sie HTTP-Anfragen-Header modifizieren möchten.
- {{WebExtAPIRef("webRequest.onSendHeaders")}}
  - : Wird unmittelbar vor dem Senden von Headern ausgelöst. Wenn Ihre Erweiterung oder eine andere Erweiterung Header in `{{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}` modifiziert hat, sehen Sie hier die modifizierte Version.
- {{WebExtAPIRef("webRequest.onHeadersReceived")}}
  - : Wird ausgelöst, wenn die HTTP-Antwort-Header, die mit einer Anfrage verbunden sind, empfangen wurden. Sie können dieses Ereignis nutzen, um HTTP-Antwort-Header zu modifizieren.
- {{WebExtAPIRef("webRequest.onAuthRequired")}}
  - : Wird ausgelöst, wenn der Server den Client auffordert, Authentifizierungsdaten bereitzustellen. Der Listener kann nichts tun, die Anfrage abbrechen oder Authentifizierungsdaten bereitstellen.
- {{WebExtAPIRef("webRequest.onResponseStarted")}}
  - : Wird ausgelöst, wenn das erste Byte des Antwortkörpers empfangen wird. Für HTTP-Anfragen bedeutet dies, dass die Statuszeile und Antwort-Header verfügbar sind.
- {{WebExtAPIRef("webRequest.onBeforeRedirect")}}
  - : Wird ausgelöst, wenn eine serverinitiierte Umleitung im Begriff ist, zu erfolgen.
- {{WebExtAPIRef("webRequest.onCompleted")}}
  - : Wird ausgelöst, wenn eine Anfrage abgeschlossen ist.
- {{WebExtAPIRef("webRequest.onErrorOccurred")}}
  - : Wird ausgelöst, wenn ein Fehler auftritt.

## Browser-Kompatibilität

{{Compat}}

[Zusätzliche Hinweise zu Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#webrequest_api).

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest)-API von Chromium. Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

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
- DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
- THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
- (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
- OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->

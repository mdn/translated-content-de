---
title: webRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügen Sie Ereignislistener für die verschiedenen Phasen einer HTTP-Anfrage hinzu, einschließlich WebSocket-Anfragen auf `ws://` und `wss://`. Der Ereignislistener erhält detaillierte Informationen über die Anfrage und kann die Anfrage modifizieren oder abbrechen.

Jedes Ereignis wird in einer bestimmten Phase der Anfrage ausgelöst. Die Reihenfolge der Ereignisse ist wie folgt:

![Die Reihenfolge der Anfragen ist onBeforeRequest, onBeforeSendHeader, onSendHeaders, onHeadersReceived, onResponseStarted und onCompleted. Das onHeadersReceived kann ein onBeforeRedirect und ein onAuthRequired auslösen. Ereignisse, die durch onHeadersReceived verursacht werden, beginnen zu Beginn mit onBeforeRequest. Ereignisse, die durch onAuthRequired verursacht werden, beginnen bei onBeforeSendHeader.](webrequest-flow.png)

Jedoch könnten nicht alle dieser Ereignisse von einer Erweiterung beobachtet werden. Beispielsweise könnte `onBeforeRedirect` nicht von `onBeforeRequest` gefolgt sein, wenn das Weiterleitungsziel nicht mit den Ereignisfilter-URLs übereinstimmt. Dies kann daran liegen, dass die URLs im Filter eng definiert sind oder das Weiterleitungsziel von einer Erweiterung nicht beobachtet werden kann, wie etwa bei einer Weiterleitung zu einer `data:`-URL.

{{WebExtAPIRef("webRequest.onErrorOccurred", "onErrorOccurred")}} kann jederzeit während der Anfrage auftreten. Beachten Sie auch, dass die Reihenfolge der Ereignisse manchmal von dieser abweichen kann. Beispielsweise wird in Firefox bei einem [HSTS](/de/docs/Web/HTTP/Headers/Strict-Transport-Security) Upgrade das `onBeforeRedirect`-Ereignis unmittelbar nach `onBeforeRequest` ausgelöst. `onErrorOccurred` wird ebenfalls ausgelöst, wenn der [Firefox Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) eine Anfrage blockiert.

Alle Ereignisse – _außer_ `onErrorOccurred` – können drei Argumente zu `addListener()` annehmen:

- der Listener selbst
- ein {{WebExtAPIRef("webRequest.RequestFilter", "filter")}}-Objekt, sodass Sie nur für Anfragen zu bestimmten URLs oder für bestimmte Ressourcentypen benachrichtigt werden
- ein optionales `extraInfoSpec`-Objekt. Sie können dies verwenden, um zusätzliche, ereignisspezifische Anweisungen zu übergeben.

Der Listener-Funktion wird ein `details`-Objekt übergeben, das Informationen über die Anfrage enthält. Dazu gehört eine Anfragen-ID, die bereitgestellt wird, um einer Erweiterung zu ermöglichen, Ereignisse zu korrelieren, die mit einer einzelnen Anfrage verbunden sind. Sie ist innerhalb einer Browsersitzung und dem Kontext der Erweiterung eindeutig. Sie bleibt während einer Anfrage gleich, selbst über Umleitungen und Authentifizierungsaustausche hinweg.

Um die `webRequest` API für einen bestimmten Host zu verwenden, muss eine Erweiterung die `"webRequest"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und die [Hostberechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für diesen Host haben. Um die `"blocking"`-Funktion zu verwenden, muss die Erweiterung auch die `"webRequestBlocking"` API-Berechtigung besitzen.

Um Ressourcen, die von einer Seite geladen werden (wie Bilder, Skripte oder Stylesheets), abzufangen, muss die Erweiterung die Hostberechtigung sowohl für die Ressource als auch für die Hauptseite, die die Ressource fordert, haben. Wenn beispielsweise eine Seite auf `https://developer.mozilla.org` ein Bild von `https://mdn.mozillademos.org` lädt, muss eine Erweiterung beide Hostberechtigungen haben, um die Bildanfrage abzufangen.

## Modifizierung von Anfragen

Bei einigen dieser Ereignisse können Sie die Anfrage modifizieren. Insbesondere können Sie:

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

- Authentifizierungsinformationen bereitstellen in:

  - {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}

Um dies zu tun, müssen Sie eine Option mit dem Wert `"blocking"` im `extraInfoSpec`-Argument an die `addListener()`-Funktion des Ereignisses übergeben. Dadurch wird der Listener synchron.

Im Listener können Sie dann ein {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}}-Objekt zurückgeben, das die von Ihnen vorzunehmende Änderung angibt: zum Beispiel den modifizierten Anforderungsheader, den Sie senden möchten.

## Anfragen beim Browser-Start

Wenn ein Listener mit der `"blocking"`-Option registriert ist und während des Erweiterungsstarts registriert wird, wenn eine Übereinstimmung mit dem Listener besteht, startet die Erweiterung früh und kann die Anfrage beim Browser-Start beobachten. Wenn Sie diese Schritte nicht unternehmen, könnten beim Start gestellte Anfragen übersehen werden.

## Spekulative Anfragen

Der Browser kann spekulative Verbindungen herstellen, bei denen er feststellt, dass bald eine Anfrage zu einer URI erfolgen könnte. Diese Art der Verbindung bietet keine gültigen Tab-Informationen, sodass Anfragedetails wie `tabId`, `frameId`, `parentFrameId` usw. ungenau sind. Diese Verbindungen haben einen {{WebExtAPIRef("webRequest.ResourceType")}} von `speculative`.

## Zugriff auf Sicherheitsinformationen

Im {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}-Listener können Sie auf die [TLS](/de/docs/Glossary/TLS)-Eigenschaften einer Anfrage zugreifen, indem Sie {{WebExtAPIRef("webRequest.getSecurityInfo()", "getSecurityInfo()")}} aufrufen. Dazu müssen Sie auch "blocking" im `extraInfoSpec`-Argument an die `addListener()`-Funktion des Ereignisses übergeben.

Sie können Details des TLS-Handshakes lesen, aber sie nicht modifizieren oder die Vertrauensentscheidungen des Browsers übersteuern.

## Modifizierung von Antworten

Um die HTTP-Antwortkörper einer Anfrage zu modifizieren, rufen Sie {{WebExtAPIRef("webRequest.filterResponseData")}} auf und übergeben Sie die ID der Anfrage. Dies gibt ein {{WebExtAPIRef("webRequest.StreamFilter")}}-Objekt zurück, das Sie verwenden können, um die Daten zu prüfen und zu ändern, während sie vom Browser empfangen werden.

Um dies zu tun, müssen Sie sowohl die `"webRequestBlocking"` API-Berechtigung als auch die `"webRequest"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) und die [Hostberechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den betreffenden Host haben.

## Typen

- {{WebExtAPIRef("webRequest.BlockingResponse")}}
  - : Ein Objekt dieses Typs wird von Ereignislistenern zurückgegeben, die `"blocking"` in ihrem `extraInfoSpec`-Argument gesetzt haben. Durch Einstellen bestimmter Eigenschaften in `BlockingResponse` kann der Listener Netzwerk-Anfragen modifizieren.
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
  - : Ein Objekt, das verwendet werden kann, um HTTP-Antworten zu überwachen und zu ändern, während sie empfangen werden.
- {{WebExtAPIRef("webRequest.UploadData")}}
  - : Enthält Daten, die in einer URL-Anfrage hochgeladen wurden.

## Eigenschaften

- {{WebExtAPIRef("webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES", "webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES")}}
  - : Die maximale Anzahl von Aufrufen, die {{WebExtAPIRef("WebRequest.handlerBehaviorChanged", "handlerBehaviorChanged()")}} in einem Zeitraum von 10 Minuten haben kann.

## Methoden

- {{WebExtAPIRef("webRequest.handlerBehaviorChanged()")}}
  - : Diese Methode kann verwendet werden, um sicherzustellen, dass Ereignislistener korrekt angewendet werden, wenn Seiten im In-Memory-Cache des Browsers sind.
- {{WebExtAPIRef("webRequest.filterResponseData()")}}
  - : Gibt ein {{WebExtAPIRef("webRequest.StreamFilter")}}-Objekt für eine gegebene Anfrage zurück.
- {{WebExtAPIRef("webRequest.getSecurityInfo()")}}
  - : Ruft detaillierte Informationen über die [TLS](/de/docs/Glossary/TLS) Verbindung ab, die mit einer gegebenen Anfrage assoziiert ist.

## Ereignisse

- {{WebExtAPIRef("webRequest.onBeforeRequest")}}
  - : Wird ausgelöst, wenn eine Anfrage gerade gestellt werden soll und bevor Header verfügbar sind. Dies ist ein guter Platz, um zuzuhören, wenn Sie die Anfrage abbrechen oder umleiten möchten.
- {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}}
  - : Wird ausgelöst, bevor HTTP-Daten gesendet werden, aber nachdem HTTP-Header verfügbar sind. Dies ist ein guter Platz, um zuzuhören, wenn Sie HTTP-Anforderungsheader ändern möchten.
- {{WebExtAPIRef("webRequest.onSendHeaders")}}
  - : Wird direkt vor dem Senden von Headern ausgelöst. Wenn Ihr Add-on oder ein anderes Add-on Header in `{{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}` geändert hat, sehen Sie hier die geänderte Version.
- {{WebExtAPIRef("webRequest.onHeadersReceived")}}
  - : Wird ausgelöst, wenn die HTTP-Antwortheader, die mit einer Anfrage assoziiert sind, empfangen wurden. Sie können dieses Ereignis verwenden, um HTTP-Antwortheader zu ändern.
- {{WebExtAPIRef("webRequest.onAuthRequired")}}
  - : Wird ausgelöst, wenn der Server den Client auffordert, Authentifizierungsinformationen bereitzustellen. Der Listener kann nichts tun, die Anfrage abbrechen oder Authentifizierungsinformationen bereitstellen.
- {{WebExtAPIRef("webRequest.onResponseStarted")}}
  - : Wird ausgelöst, wenn das erste Byte des Antwortkörpers empfangen wird. Für HTTP-Anforderungen bedeutet dies, dass die Statuszeile und die Antwortheader verfügbar sind.
- {{WebExtAPIRef("webRequest.onBeforeRedirect")}}
  - : Wird ausgelöst, wenn eine serverinitiierte Umleitung erfolgen wird.
- {{WebExtAPIRef("webRequest.onCompleted")}}
  - : Wird ausgelöst, wenn eine Anfrage abgeschlossen ist.
- {{WebExtAPIRef("webRequest.onErrorOccurred")}}
  - : Wird ausgelöst, wenn ein Fehler auftritt.

## Browser-Kompatibilität

{{Compat}}

[Zusätzliche Hinweise zu Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#webrequest_api).

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest) API. Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

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

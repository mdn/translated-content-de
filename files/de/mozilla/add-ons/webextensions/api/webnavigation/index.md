---
title: webNavigation
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Fügen Sie Event-Listener für die verschiedenen Stadien einer Navigation hinzu. Eine Navigation besteht aus einem Rahmen im Browser, der von einer URL zu einer anderen wechselt, üblicherweise (aber nicht immer) als Reaktion auf eine Benutzeraktion wie das Klicken auf einen Link oder das Eingeben einer URL in die Adressleiste.

Im Vergleich zur {{WebExtAPIRef("webRequest")}} API: Navigationen führen normalerweise dazu, dass der Browser Webanfragen stellt, aber die `webRequest` API bezieht sich auf die niedrigere Ebene der HTTP-Schicht, während die `webNavigation` API sich mehr auf die Ansicht aus der Browser-Benutzeroberfläche selbst konzentriert.

Jedes Event entspricht einem bestimmten Stadium der Navigation. Die Abfolge der Events ist wie folgt:

![Visualisierung des primären Flusses und zusätzlicher Flüsse, die unten beschrieben werden.](we-flow.png)

- Der primäre Fluss ist:

  - {{WebExtAPIRef("webNavigation.onBeforeNavigate", "onBeforeNavigate")}}
  - {{WebExtAPIRef("webNavigation.onCommitted", "onCommitted")}}
  - {{WebExtAPIRef("webNavigation.onDOMContentLoaded", "onDOMContentLoaded")}}
  - {{WebExtAPIRef("webNavigation.onCompleted", "onCompleted")}}.

- Zusätzlich:
  - {{WebExtAPIRef("webNavigation.onCreatedNavigationTarget", "onCreatedNavigationTarget")}} wird vor `onBeforeNavigate` ausgelöst, wenn der Browser ein neues Tab oder Fenster für die Navigation erstellen musste (zum Beispiel, weil der Benutzer einen Link in einem neuen Tab geöffnet hat).
  - {{WebExtAPIRef("webNavigation.onHistoryStateUpdated", "onHistoryStateUpdated")}} wird ausgelöst, wenn eine Seite die [History API](/de/docs/Web/API/History_API) verwendet, um die in der Adressleiste des Browsers angezeigte URL zu aktualisieren.
  - {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated", "onReferenceFragmentUpdated")}} wird ausgelöst, wenn der [Fragmentbezeichner](/de/docs/Web/URI/Reference/Fragment) einer Seite geändert wird.
  - {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}} kann jederzeit ausgelöst werden.

Jede Navigation ist ein URL-Übergang in einem bestimmten Browser-Rahmen. Der Browser-Rahmen wird durch eine Tab-ID und eine Frame-ID identifiziert. Der Frame kann der oberste Browsing-Kontext im Tab sein oder ein verschachtelter Browsing-Kontext, der als [iframe](/de/docs/Web/HTML/Reference/Elements/iframe) implementiert ist.

Jeder `addListener()`-Aufruf eines Events akzeptiert einen optionalen Filterparameter. Der Filter wird ein oder mehrere URL-Muster festlegen, und das Event wird dann nur für Navigationen ausgelöst, bei denen die Ziel-URL einem dieser Muster entspricht.

Der `onCommitted` Event-Listener übergibt zwei zusätzliche Eigenschaften: einen {{WebExtAPIRef("webNavigation.TransitionType","TransitionType")}}, der die Ursache der Navigation angibt (zum Beispiel, weil der Benutzer auf einen Link geklickt hat, oder weil er ein Lesezeichen ausgewählt hat), und einen {{WebExtAPIRef("webNavigation.TransitionQualifier","TransitionQualifier")}}, der weitere Informationen zur Navigation liefert.

Um diese API zu verwenden, benötigen Sie die "webNavigation" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Typen

- {{WebExtAPIRef("webNavigation.TransitionType")}}
  - : Ursache der Navigation: zum Beispiel, der Benutzer klickte auf einen Link, gab eine Adresse ein oder klickte ein Lesezeichen.
- {{WebExtAPIRef("webNavigation.TransitionQualifier")}}
  - : Zusätzliche Informationen über eine Transition.

## Funktionen

- {{WebExtAPIRef("webNavigation.getFrame()")}}
  - : Ruft Informationen über einen bestimmten Frame ab. Ein Frame kann der oberste Frame in einem Tab sein oder ein verschachtelter [iframe](/de/docs/Web/HTML/Reference/Elements/iframe) und wird eindeutig durch eine Tab-ID und eine Frame-ID identifiziert.
- {{WebExtAPIRef("webNavigation.getAllFrames()")}}
  - : Gibt bei Angabe einer Tab-ID Informationen über alle darin enthaltenen Frames zurück.

## Events

- {{WebExtAPIRef("webNavigation.onBeforeNavigate")}}
  - : Wird ausgelöst, wenn der Browser im Begriff ist, ein Navigationsevent zu starten.
- {{WebExtAPIRef("webNavigation.onCommitted")}}
  - : Wird ausgelöst, wenn eine Navigation festgeschrieben ist. Mindestens ein Teil des neuen Dokuments wurde vom Server empfangen und der Browser hat entschieden, zum neuen Dokument zu wechseln.
- {{WebExtAPIRef("webNavigation.onDOMContentLoaded")}}
  - : Wird ausgelöst, wenn das [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis in der Seite ausgelöst wird.
- {{WebExtAPIRef("webNavigation.onCompleted")}}
  - : Wird ausgelöst, wenn ein Dokument, einschließlich der von ihm referenzierten Ressourcen, vollständig geladen und initialisiert ist. Dies entspricht dem DOM [`load`](/de/docs/Web/API/Window/load_event) Ereignis.
- {{WebExtAPIRef("webNavigation.onErrorOccurred")}}
  - : Wird ausgelöst, wenn ein Fehler auftritt und die Navigation abgebrochen wird. Dies kann geschehen, wenn ein Netzwerkfehler auftrat oder der Benutzer die Navigation abgebrochen hat.
- {{WebExtAPIRef("webNavigation.onCreatedNavigationTarget")}}
  - : Wird ausgelöst, wenn ein neues Fenster oder ein neues Tab in einem vorhandenen Fenster erstellt wird, um eine Navigation zu hosten: zum Beispiel, wenn der Benutzer einen Link in einem neuen Tab öffnet.
- {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated")}}
  - : Wird ausgelöst, wenn der [Fragmentbezeichner](https://en.wikipedia.org/wiki/Fragment_identifier) einer Seite geändert wird.
- {{WebExtAPIRef("webNavigation.onTabReplaced")}}
  - : Wird ausgelöst, wenn der Inhalt des Tabs durch einen anderen (üblicherweise zuvor vorgerenderten) Tab ersetzt wird.
- {{WebExtAPIRef("webNavigation.onHistoryStateUpdated")}}
  - : Wird ausgelöst, wenn die Seite die [History API](/de/docs/Web/API/History_API) verwendet, um die URL in der Adressleiste des Browsers zu aktualisieren.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation) API. Diese Dokumentation leitet sich von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code ab.

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

---
title: webNavigation
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation
l10n:
  sourceCommit: a966a8b4eade72a13de8a688c13f2d5056321f02
---

{{AddonSidebar}}

Fügen Sie Ereignislistener für die verschiedenen Phasen einer Navigation hinzu. Eine Navigation besteht aus einem Frame im Browser, der von einer URL zu einer anderen wechselt, normalerweise (aber nicht immer) als Reaktion auf eine Benutzeraktion, wie das Klicken auf einen Link oder das Eingeben einer URL in die Adressleiste.

Verglichen mit der {{WebExtAPIRef("webRequest")}} API: Navigationsvorgänge führen normalerweise dazu, dass der Browser Webanfragen stellt, aber die webRequest API ist mit der tieferliegenden Ansicht von der HTTP-Ebene befasst, während die webNavigation API sich mehr mit der Ansicht von der Browser-Benutzeroberfläche selbst befasst.

Jedes Ereignis entspricht einer bestimmten Phase in der Navigation. Die Reihenfolge der Ereignisse ist wie folgt:

![Visualisierung des primären Flusses und zusätzlicher Flüsse, die unten beschrieben werden.](we-flow.png)

- Der primäre Fluss ist:

  - `{{WebExtAPIRef("webNavigation.onBeforeNavigate", "onBeforeNavigate")}}`
  - `{{WebExtAPIRef("webNavigation.onCommitted", "onCommitted")}}`
  - `{{WebExtAPIRef("webNavigation.onDOMContentLoaded", "onDOMContentLoaded")}}`
  - `{{WebExtAPIRef("webNavigation.onCompleted", "onCompleted")}}`.

- Zusätzlich:

  - `{{WebExtAPIRef("webNavigation.onCreatedNavigationTarget", "onCreatedNavigationTarget")}}` wird vor `onBeforeNavigate` ausgelöst, wenn der Browser einen neuen Tab oder ein neues Fenster für die Navigation erstellen muss (zum Beispiel, weil der Benutzer einen Link in einem neuen Tab geöffnet hat).
  - {{WebExtAPIRef("webNavigation.onHistoryStateUpdated", "onHistoryStateUpdated")}} wird ausgelöst, wenn eine Seite die [history API](/de/docs/Web/API/History_API) verwendet, um die in der Adressleiste des Browsers angezeigte URL zu aktualisieren.
  - {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated", "onReferenceFragmentUpdated")}} wird ausgelöst, wenn sich der [Fragmentbezeichner](/de/docs/Web/URI/Fragment) für eine Seite ändert.
  - {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}} kann jederzeit ausgelöst werden.

Jede Navigation ist ein URL-Übergang in einem bestimmten Browser-Frame. Der Browser-Frame wird durch eine Tab-ID und eine Frame-ID identifiziert. Der Frame kann der oberste Browsing-Kontext im Tab oder ein eingebetteter Browsing-Kontext, der als <iframe> implementiert ist, sein.

Der `addListener()`-Aufruf jedes Ereignisses akzeptiert einen optionalen Filterparameter. Der Filter gibt ein oder mehrere URL-Muster an, und das Ereignis wird dann nur für Navigationen ausgelöst, bei denen die Ziel-URL eines der Muster erfüllt.

Dem `onCommitted`-Ereignislistener werden zwei zusätzliche Eigenschaften übergeben: eine {{WebExtAPIRef("webNavigation.TransitionType","TransitionType")}}, die die Ursache der Navigation angibt (zum Beispiel, weil der Benutzer auf einen Link geklickt hat oder weil der Benutzer ein Lesezeichen ausgewählt hat), und ein {{WebExtAPIRef("webNavigation.TransitionQualifier","TransitionQualifier")}}, der weitere Informationen zur Navigation bietet.

Um diese API zu verwenden, müssen Sie die Berechtigung "webNavigation" haben [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Typen

- {{WebExtAPIRef("webNavigation.TransitionType")}}
  - : Ursache der Navigation: zum Beispiel, der Benutzer hat auf einen Link geklickt, oder eine Adresse eingegeben, oder auf ein Lesezeichen geklickt.
- {{WebExtAPIRef("webNavigation.TransitionQualifier")}}
  - : Zusätzliche Informationen über einen Übergang.

## Funktionen

- {{WebExtAPIRef("webNavigation.getFrame()")}}
  - : Ruft Informationen über einen bestimmten Frame ab. Ein Frame kann der oberste Frame in einem Tab oder ein eingebetteter <iframe> sein und wird eindeutig durch eine Tab-ID und eine Frame-ID identifiziert.
- {{WebExtAPIRef("webNavigation.getAllFrames()")}}
  - : Gibt bei Vorliegen einer Tab-ID Informationen über alle enthaltenen Frames aus.

## Ereignisse

- {{WebExtAPIRef("webNavigation.onBeforeNavigate")}}
  - : Wird ausgelöst, wenn der Browser im Begriff ist, ein Navigationsereignis zu starten.
- {{WebExtAPIRef("webNavigation.onCommitted")}}
  - : Wird ausgelöst, wenn eine Navigation festgesetzt wird. Mindestens ein Teil des neuen Dokuments wurde vom Server empfangen, und der Browser hat beschlossen, zum neuen Dokument zu wechseln.
- {{WebExtAPIRef("webNavigation.onDOMContentLoaded")}}
  - : Wird ausgelöst, wenn das [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis auf der Seite ausgelöst wird.
- {{WebExtAPIRef("webNavigation.onCompleted")}}
  - : Wird ausgelöst, wenn ein Dokument, einschließlich der von ihm referenzierten Ressourcen, vollständig geladen und initialisiert ist. Dies entspricht dem DOM [`load`](/de/docs/Web/API/Window/load_event)-Ereignis.
- {{WebExtAPIRef("webNavigation.onErrorOccurred")}}
  - : Wird ausgelöst, wenn ein Fehler auftritt und die Navigation abgebrochen wird. Dies kann passieren, wenn entweder ein Netzwerkfehler aufgetreten ist, oder der Benutzer die Navigation abgebrochen hat.
- {{WebExtAPIRef("webNavigation.onCreatedNavigationTarget")}}
  - : Wird ausgelöst, wenn ein neues Fenster oder ein neuer Tab in einem bestehenden Fenster erstellt wurde, um eine Navigation zu hosten: zum Beispiel, wenn der Benutzer einen Link in einem neuen Tab öffnet.
- {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated")}}
  - : Wird ausgelöst, wenn sich der [Fragmentbezeichner](https://en.wikipedia.org/wiki/Fragment_identifier) für eine Seite ändert.
- {{WebExtAPIRef("webNavigation.onTabReplaced")}}
  - : Wird ausgelöst, wenn der Inhalt des Tabs durch einen anderen (normalerweise zuvor vorgerenderten) Tab ersetzt wird.
- {{WebExtAPIRef("webNavigation.onHistoryStateUpdated")}}
  - : Wird ausgelöst, wenn die Seite die [history API (2011)](/de/docs/Web/API/History_API) verwendet hat, um die in der Adressleiste des Browsers angezeigte URL zu aktualisieren.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation) API von Chromium. Diese Dokumentation leitet sich von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code ab.

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

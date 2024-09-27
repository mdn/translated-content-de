---
title: webNavigation
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation
l10n:
  sourceCommit: a966a8b4eade72a13de8a688c13f2d5056321f02
---

{{AddonSidebar}}

Fügen Sie Ereignis-Listener für die verschiedenen Phasen einer Navigation hinzu. Eine Navigation besteht aus einem Rahmen im Browser, der von einer URL zu einer anderen wechselt, normalerweise (aber nicht immer) als Reaktion auf eine Benutzeraktion wie das Klicken auf einen Link oder das Eingeben einer URL in die Adressleiste.

Verglichen mit der {{WebExtAPIRef("webRequest")}} API: Navigierungen führen in der Regel dazu, dass der Browser Webanfragen stellt, aber die webRequest API befasst sich mit der tieferen Ebene der HTTP-Schicht, während die webNavigation API mehr mit der Darstellung aus der Sicht der Browser-Benutzeroberfläche beschäftigt ist.

Jedes Ereignis entspricht einer bestimmten Phase in der Navigation. Die Abfolge der Ereignisse sieht folgendermaßen aus:

![Visualisierung des primären Flusses und zusätzlicher Flüsse, die unten beschrieben werden.](we-flow.png)

- Der primäre Fluss ist:

  - `{{WebExtAPIRef("webNavigation.onBeforeNavigate", "onBeforeNavigate")}}`
  - `{{WebExtAPIRef("webNavigation.onCommitted", "onCommitted")}}`
  - `{{WebExtAPIRef("webNavigation.onDOMContentLoaded", "onDOMContentLoaded")}}`
  - `{{WebExtAPIRef("webNavigation.onCompleted", "onCompleted")}}`.

- Zusätzlich:

  - `{{WebExtAPIRef("webNavigation.onCreatedNavigationTarget", "onCreatedNavigationTarget")}}` wird vor `onBeforeNavigate` ausgelöst, wenn der Browser ein neues Tab oder Fenster für die Navigation erstellen muss (z. B. weil der Benutzer einen Link in einem neuen Tab geöffnet hat).
  - {{WebExtAPIRef("webNavigation.onHistoryStateUpdated", "onHistoryStateUpdated")}} wird ausgelöst, wenn eine Seite die [history API](/de/docs/Web/API/History_API) verwendet, um die in der Adressleiste des Browsers angezeigte URL zu aktualisieren.
  - {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated", "onReferenceFragmentUpdated")}} wird ausgelöst, wenn der [Fragmentbezeichner](/de/docs/Web/URI/Fragment) für eine Seite geändert wird.
  - {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}} kann jederzeit ausgelöst werden.

Jede Navigation ist ein URL-Übergang in einem bestimmten Browser-Rahmen. Der Browser-Rahmen wird durch eine Tab-ID und eine Rahmen-ID identifiziert. Der Rahmen kann der oberste Browsing-Kontext im Tab sein oder ein verschachtelter Browsing-Kontext, der als [iframe](/de/docs/Web/HTML/Element/iframe) implementiert ist.

Jeder `addListener()`-Aufruf eines Ereignisses akzeptiert einen optionalen Filterparameter. Der Filter legt ein oder mehrere URL-Muster fest, und das Ereignis wird dann nur für Navigierungen ausgelöst, bei denen die Ziel-URL mit einem der Muster übereinstimmt.

Dem `onCommitted` Ereignis-Listener werden zwei zusätzliche Eigenschaften übergeben: ein {{WebExtAPIRef("webNavigation.TransitionType","TransitionType")}}, das die Ursache der Navigation angibt (z. B. weil der Benutzer auf einen Link geklickt hat oder ein Lesezeichen ausgewählt hat), und ein {{WebExtAPIRef("webNavigation.TransitionQualifier","TransitionQualifier")}}, das weitere Informationen über die Navigation liefert.

Um diese API nutzen zu können, benötigen Sie die "webNavigation" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Typen

- {{WebExtAPIRef("webNavigation.TransitionType")}}
  - : Ursache der Navigation: zum Beispiel hat der Benutzer auf einen Link geklickt, eine Adresse eingegeben oder ein Lesezeichen ausgewählt.
- {{WebExtAPIRef("webNavigation.TransitionQualifier")}}
  - : Zusätzliche Informationen über einen Übergang.

## Funktionen

- {{WebExtAPIRef("webNavigation.getFrame()")}}
  - : Ruft Informationen über einen bestimmten Rahmen ab. Ein Rahmen kann der oberste Rahmen in einem Tab sein oder ein verschachteltes [iframe](/de/docs/Web/HTML/Element/iframe) und ist eindeutig durch eine Tab-ID und eine Rahmen-ID identifiziert.
- {{WebExtAPIRef("webNavigation.getAllFrames()")}}
  - : Gibt bei einer Tab-ID Informationen über alle enthaltenen Rahmen zurück.

## Ereignisse

- {{WebExtAPIRef("webNavigation.onBeforeNavigate")}}
  - : Wird ausgelöst, wenn der Browser im Begriff ist, ein Navigationsevent zu starten.
- {{WebExtAPIRef("webNavigation.onCommitted")}}
  - : Wird ausgelöst, wenn eine Navigation festgeschrieben wird. Mindestens ein Teil des neuen Dokuments wurde vom Server empfangen und der Browser hat beschlossen, auf das neue Dokument zu wechseln.
- {{WebExtAPIRef("webNavigation.onDOMContentLoaded")}}
  - : Wird ausgelöst, wenn das [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis auf der Seite ausgelöst wird.
- {{WebExtAPIRef("webNavigation.onCompleted")}}
  - : Wird ausgelöst, wenn ein Dokument, einschließlich der von ihm referenzierten Ressourcen, vollständig geladen und initialisiert ist. Dies entspricht dem DOM [`load`](/de/docs/Web/API/Window/load_event) Ereignis.
- {{WebExtAPIRef("webNavigation.onErrorOccurred")}}
  - : Wird ausgelöst, wenn ein Fehler auftritt und die Navigation abgebrochen wird. Dies kann passieren, wenn entweder ein Netzwerkfehler aufgetreten ist oder der Benutzer die Navigation abgebrochen hat.
- {{WebExtAPIRef("webNavigation.onCreatedNavigationTarget")}}
  - : Wird ausgelöst, wenn ein neues Fenster oder ein neuer Tab in einem bestehenden Fenster erstellt wird, um eine Navigation zu hosten: zum Beispiel, wenn der Benutzer einen Link in einem neuen Tab öffnet.
- {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated")}}
  - : Wird ausgelöst, wenn der [Fragmentbezeichner](https://en.wikipedia.org/wiki/Fragment_identifier) für eine Seite geändert wird.
- {{WebExtAPIRef("webNavigation.onTabReplaced")}}
  - : Wird ausgelöst, wenn der Inhalt des Tabs durch einen anderen (normalerweise zuvor vorgerenderten) Tab ersetzt wird.
- {{WebExtAPIRef("webNavigation.onHistoryStateUpdated")}}
  - : Wird ausgelöst, wenn die Seite die [history API (2011)](/de/docs/Web/API/History_API) verwendet, um die in der Adressleiste des Browsers angezeigte URL zu aktualisieren.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation) API. Diese Dokumentation ist abgeleitet von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.

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

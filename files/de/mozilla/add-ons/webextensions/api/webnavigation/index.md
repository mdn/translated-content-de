---
title: webNavigation
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation
l10n:
  sourceCommit: e92bec809ea0bef618f7e604d7a7457f50aa0127
---

{{AddonSidebar}}

Fügen Sie Ereignis-Listener für die verschiedenen Phasen einer Navigation hinzu. Eine Navigation besteht aus einem Frame im Browser, der von einer URL zu einer anderen wechselt, üblicherweise (aber nicht immer) als Reaktion auf eine Benutzeraktion wie das Klicken auf einen Link oder das Eingeben einer URL in die Adressleiste.

Verglichen mit der {{WebExtAPIRef("webRequest")}}-API: Navigationen führen normalerweise dazu, dass der Browser Webanfragen stellt, aber die webRequest-API beschäftigt sich eher mit der unteren Ebene der HTTP-Schicht, während die webNavigation-API sich mehr mit der Ansicht vom Browser-UI selbst beschäftigt.

Jedes Ereignis entspricht einer bestimmten Phase in der Navigation. Die Abfolge der Ereignisse ist wie folgt:

![Darstellung des primären Ablaufs und zusätzlicher Abläufe, wie unten beschrieben.](we-flow.png)

- Der primäre Ablauf ist:

  - {{WebExtAPIRef("webNavigation.onBeforeNavigate", "onBeforeNavigate")}}
  - {{WebExtAPIRef("webNavigation.onCommitted", "onCommitted")}}
  - {{WebExtAPIRef("webNavigation.onDOMContentLoaded", "onDOMContentLoaded")}}
  - {{WebExtAPIRef("webNavigation.onCompleted", "onCompleted")}}.

- Zusätzlich:

  - {{WebExtAPIRef("webNavigation.onCreatedNavigationTarget", "onCreatedNavigationTarget")}} wird vor `onBeforeNavigate` ausgelöst, wenn der Browser einen neuen Tab oder ein neues Fenster für die Navigation erstellen muss (zum Beispiel, weil der Benutzer einen Link in einem neuen Tab geöffnet hat).
  - {{WebExtAPIRef("webNavigation.onHistoryStateUpdated", "onHistoryStateUpdated")}} wird ausgelöst, wenn eine Seite die [History-API](/de/docs/Web/API/History_API) verwendet, um die in der Adressleiste des Browsers angezeigte URL zu aktualisieren.
  - {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated", "onReferenceFragmentUpdated")}} wird ausgelöst, wenn sich der [Fragment-Identifier](/de/docs/Web/URI/Reference/Fragment) einer Seite ändert.
  - {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}} kann jederzeit ausgelöst werden.

Jede Navigation ist ein URL-Übergang in einem bestimmten Browser-Frame. Der Browser-Frame wird durch eine Tab-ID und eine Frame-ID identifiziert. Der Frame kann der oberste Browsing-Kontext im Tab sein oder ein verschachtelter Browsing-Kontext, der als [iframe](/de/docs/Web/HTML/Reference/Elements/iframe) implementiert ist.

Jeder `addListener()`-Aufruf eines Ereignisses akzeptiert einen optionalen Filterparameter. Der Filter gibt ein oder mehrere URL-Muster an, und das Ereignis wird dann nur ausgelöst, wenn die Ziel-URL eines der Muster erfüllt.

Dem `onCommitted`-Eventlistener werden zwei zusätzliche Eigenschaften übergeben: ein {{WebExtAPIRef("webNavigation.TransitionType","TransitionType")}}, der die Ursache der Navigation angibt (zum Beispiel, weil der Benutzer auf einen Link geklickt hat oder ein Lesezeichen ausgewählt hat), und ein {{WebExtAPIRef("webNavigation.TransitionQualifier","TransitionQualifier")}}, der weitere Informationen über die Navigation bereitstellt.

Um diese API zu nutzen, benötigen Sie die "webNavigation" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Typen

- {{WebExtAPIRef("webNavigation.TransitionType")}}
  - : Ursache der Navigation: zum Beispiel, der Benutzer hat auf einen Link geklickt, eine Adresse eingegeben oder ein Lesezeichen ausgewählt.
- {{WebExtAPIRef("webNavigation.TransitionQualifier")}}
  - : Zusätzliche Informationen zu einem Übergang.

## Funktionen

- {{WebExtAPIRef("webNavigation.getFrame()")}}
  - : Ruft Informationen über einen bestimmten Frame ab. Ein Frame kann der oberste Frame in einem Tab oder ein verschachteltes [iframe](/de/docs/Web/HTML/Reference/Elements/iframe) sein und wird eindeutig durch eine Tab-ID und eine Frame-ID identifiziert.
- {{WebExtAPIRef("webNavigation.getAllFrames()")}}
  - : Gibt bei Angabe einer Tab-ID Informationen über alle enthaltenen Frames zurück.

## Ereignisse

- {{WebExtAPIRef("webNavigation.onBeforeNavigate")}}
  - : Wird ausgelöst, wenn der Browser kurz davor ist, ein Navigationsevent zu starten.
- {{WebExtAPIRef("webNavigation.onCommitted")}}
  - : Wird ausgelöst, wenn eine Navigation festgeschrieben ist. Mindestens ein Teil des neuen Dokuments wurde vom Server empfangen und der Browser hat entschieden, zu dem neuen Dokument zu wechseln.
- {{WebExtAPIRef("webNavigation.onDOMContentLoaded")}}
  - : Wird ausgelöst, wenn das [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis in der Seite ausgelöst wird.
- {{WebExtAPIRef("webNavigation.onCompleted")}}
  - : Wird ausgelöst, wenn ein Dokument, einschließlich der von ihm referenzierten Ressourcen, vollständig geladen und initialisiert ist. Dies entspricht dem DOM-Event [`load`](/de/docs/Web/API/Window/load_event).
- {{WebExtAPIRef("webNavigation.onErrorOccurred")}}
  - : Wird ausgelöst, wenn ein Fehler auftritt und die Navigation abgebrochen wird. Dies kann passieren, wenn entweder ein Netzwerkfehler auftrat oder der Benutzer die Navigation abgebrochen hat.
- {{WebExtAPIRef("webNavigation.onCreatedNavigationTarget")}}
  - : Wird ausgelöst, wenn ein neues Fenster oder ein neuer Tab in einem bestehenden Fenster erstellt wird, um eine Navigation zu hosten: zum Beispiel, wenn der Benutzer einen Link in einem neuen Tab öffnet.
- {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated")}}
  - : Wird ausgelöst, wenn sich der [Fragment-Identifier](https://en.wikipedia.org/wiki/Fragment_identifier) einer Seite ändert.
- {{WebExtAPIRef("webNavigation.onTabReplaced")}}
  - : Wird ausgelöst, wenn der Inhalt des Tabs durch einen anderen (normalerweise zuvor vorgerenderten) Tab ersetzt wird.
- {{WebExtAPIRef("webNavigation.onHistoryStateUpdated")}}
  - : Wird ausgelöst, wenn die Seite die [History-API](/de/docs/Web/API/History_API) verwendet, um die in der Adressleiste des Browsers angezeigte URL zu aktualisieren.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation)-API. Diese Dokumentation ist abgeleitet von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.

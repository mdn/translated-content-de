---
title: webNavigation
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{AddonSidebar}}

Fügen Sie Ereignis-Listener für die verschiedenen Phasen einer Navigation hinzu. Eine Navigation besteht aus einem Frame im Browser, der von einer URL zu einer anderen übergeht, normalerweise (aber nicht immer) als Reaktion auf eine Benutzeraktion wie das Klicken auf einen Link oder das Eingeben einer URL in die Adressleiste.

Verglichen mit der {{WebExtAPIRef("webRequest")}} API: Navigationen führen normalerweise dazu, dass der Browser Webanfragen macht, aber die webRequest API befasst sich mit der unteren Ebene aus der Sicht der HTTP-Ebene, während die webNavigation API mehr mit der Sicht der Browser-UI selbst befasst ist.

Jedes Ereignis entspricht einem bestimmten Stadium der Navigation. Die Reihenfolge der Ereignisse sieht wie folgt aus:

![Visualisierung des primären Flusses und der unten beschriebenen zusätzlichen Flüsse.](we-flow.png)

- Der primäre Fluss ist:

  - {{WebExtAPIRef("webNavigation.onBeforeNavigate", "onBeforeNavigate")}}
  - {{WebExtAPIRef("webNavigation.onCommitted", "onCommitted")}}
  - {{WebExtAPIRef("webNavigation.onDOMContentLoaded", "onDOMContentLoaded")}}
  - {{WebExtAPIRef("webNavigation.onCompleted", "onCompleted")}}.

- Zusätzlich:

  - {{WebExtAPIRef("webNavigation.onCreatedNavigationTarget", "onCreatedNavigationTarget")}} wird ausgelöst, bevor `onBeforeNavigate`, wenn der Browser ein neues Tab oder Fenster für die Navigation erstellen muss (zum Beispiel, weil der Benutzer einen Link in einem neuen Tab öffnete).
  - {{WebExtAPIRef("webNavigation.onHistoryStateUpdated", "onHistoryStateUpdated")}} wird ausgelöst, wenn eine Seite die [History API](/de/docs/Web/API/History_API) verwendet, um die in der Adressleiste des Browsers angezeigte URL zu aktualisieren.
  - {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated", "onReferenceFragmentUpdated")}} wird ausgelöst, wenn der [Fragment-Bezeichner](/de/docs/Web/URI/Reference/Fragment) für eine Seite geändert wird.
  - {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}} kann zu jedem Zeitpunkt ausgelöst werden.

Jede Navigation ist ein URL-Übergang in einem bestimmten Browser-Frame. Der Browser-Frame wird durch eine Tab-ID und eine Frame-ID identifiziert. Der Frame kann der oberste Browsing-Kontext im Tab oder ein verschachtelter Browsing-Kontext sein, der als [iframe](/de/docs/Web/HTML/Element/iframe) implementiert ist.

Der `addListener()`-Aufruf jedes Ereignisses akzeptiert einen optionalen Filterparameter. Der Filter legt ein oder mehrere URL-Muster fest, und das Ereignis wird dann nur für Navigationen ausgelöst, bei denen die Ziel-URL mit einem dieser Muster übereinstimmt.

Der `onCommitted`-Ereignis-Listener erhält zwei zusätzliche Eigenschaften: einen {{WebExtAPIRef("webNavigation.TransitionType","TransitionType")}}, der die Ursache der Navigation angibt (zum Beispiel, weil der Benutzer auf einen Link geklickt hat oder ein Lesezeichen ausgewählt hat), und einen {{WebExtAPIRef("webNavigation.TransitionQualifier","TransitionQualifier")}}, der weitere Informationen über die Navigation liefert.

Um diese API zu verwenden, benötigen Sie die "webNavigation" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Typen

- {{WebExtAPIRef("webNavigation.TransitionType")}}
  - : Ursache der Navigation: zum Beispiel hat der Benutzer auf einen Link geklickt, eine Adresse eingegeben oder ein Lesezeichen ausgewählt.
- {{WebExtAPIRef("webNavigation.TransitionQualifier")}}
  - : Zusätzliche Informationen über eine Transition.

## Funktionen

- {{WebExtAPIRef("webNavigation.getFrame()")}}
  - : Ruft Informationen über einen bestimmten Frame ab. Ein Frame kann der oberste Frame in einem Tab oder ein verschachtelter [iframe](/de/docs/Web/HTML/Element/iframe) sein und wird eindeutig durch eine Tab-ID und eine Frame-ID identifiziert.
- {{WebExtAPIRef("webNavigation.getAllFrames()")}}
  - : Gibt eine Tab-ID an und ruft Informationen über alle enthaltenen Frames ab.

## Ereignisse

- {{WebExtAPIRef("webNavigation.onBeforeNavigate")}}
  - : Wird ausgelöst, wenn der Browser kurz davor steht, einen Navigationsevent zu starten.
- {{WebExtAPIRef("webNavigation.onCommitted")}}
  - : Wird ausgelöst, wenn eine Navigation festgeschrieben wurde. Mindestens ein Teil des neuen Dokuments wurde vom Server empfangen und der Browser hat entschieden, zum neuen Dokument zu wechseln.
- {{WebExtAPIRef("webNavigation.onDOMContentLoaded")}}
  - : Wird ausgelöst, wenn das [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event)-Event auf der Seite ausgelöst wird.
- {{WebExtAPIRef("webNavigation.onCompleted")}}
  - : Wird ausgelöst, wenn ein Dokument, einschließlich der darin referenzierten Ressourcen, vollständig geladen und initialisiert ist. Dies entspricht dem DOM [`load`](/de/docs/Web/API/Window/load_event)-Event.
- {{WebExtAPIRef("webNavigation.onErrorOccurred")}}
  - : Wird ausgelöst, wenn ein Fehler auftritt und die Navigation abgebrochen wird. Dies kann passieren, wenn entweder ein Netzwerkfehler aufgetreten ist oder der Benutzer die Navigation abgebrochen hat.
- {{WebExtAPIRef("webNavigation.onCreatedNavigationTarget")}}
  - : Wird ausgelöst, wenn ein neues Fenster oder ein neues Tab in einem bestehenden Fenster erstellt wird, um eine Navigation zu hosten: zum Beispiel, wenn der Benutzer einen Link in einem neuen Tab öffnet.
- {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated")}}
  - : Wird ausgelöst, wenn der [Fragmentbezeichner](https://en.wikipedia.org/wiki/Fragment_identifier) für eine Seite geändert wird.
- {{WebExtAPIRef("webNavigation.onTabReplaced")}}
  - : Wird ausgelöst, wenn der Inhalt des Tabs durch einen anderen (normalerweise zuvor vorgerenderten) Tab ersetzt wird.
- {{WebExtAPIRef("webNavigation.onHistoryStateUpdated")}}
  - : Wird ausgelöst, wenn die Seite die [History API (2011)](/de/docs/Web/API/History_API) verwendet, um die in der Adressleiste des Browsers angezeigte URL zu aktualisieren.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation) API von Chromium. Diese Dokumentation ist aus [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code abgeleitet.

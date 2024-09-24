---
title: webNavigation
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügen Sie Ereignis-Listener für die verschiedenen Phasen einer Navigation hinzu. Eine Navigation besteht aus einem Frame im Browser, der von einer URL zu einer anderen wechselt, normalerweise (aber nicht immer) als Reaktion auf eine Benutzeraktion wie das Klicken auf einen Link oder das Eingeben einer URL in die Adressleiste.

Im Vergleich zur {{WebExtAPIRef("webRequest")}} API: Navigationen führen in der Regel dazu, dass der Browser Webanfragen stellt, aber die webRequest-API beschäftigt sich mit der niedriger gelegenen Ansicht von der HTTP-Schicht, während die webNavigation-API mehr auf die Ansicht von der Benutzeroberfläche des Browsers selbst ausgerichtet ist.

Jedes Ereignis entspricht einer bestimmten Phase in der Navigation. Die Abfolge der Ereignisse ist wie folgt:

![Visualisierung des Hauptflusses und zusätzlicher Flüsse, die unten beschrieben sind.](we-flow.png)

- Der Hauptablauf ist:

  - `{{WebExtAPIRef("webNavigation.onBeforeNavigate", "onBeforeNavigate")}}`
  - `{{WebExtAPIRef("webNavigation.onCommitted", "onCommitted")}}`
  - `{{WebExtAPIRef("webNavigation.onDOMContentLoaded", "onDOMContentLoaded")}}`
  - `{{WebExtAPIRef("webNavigation.onCompleted", "onCompleted")}}`.

- Zusätzlich:

  - `{{WebExtAPIRef("webNavigation.onCreatedNavigationTarget", "onCreatedNavigationTarget")}}` wird vor `onBeforeNavigate` ausgelöst, wenn der Browser einen neuen Tab oder ein neues Fenster für die Navigation erstellen muss (z.B. weil der Benutzer einen Link in einem neuen Tab geöffnet hat).
  - {{WebExtAPIRef("webNavigation.onHistoryStateUpdated", "onHistoryStateUpdated")}} wird ausgelöst, wenn eine Seite die [History API (2011)](http://diveintohtml5.info/history.html) verwendet, um die in der Adressleiste des Browsers angezeigte URL zu aktualisieren.
  - {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated", "onReferenceFragmentUpdated")}} wird ausgelöst, wenn der [Fragment-Identifier](https://en.wikipedia.org/wiki/Fragment_identifier) einer Seite geändert wird.
  - {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}} kann jederzeit ausgelöst werden.

Jede Navigation ist ein URL-Übergang in einem bestimmten Browser-Frame. Der Browser-Frame wird durch eine Tab-ID und eine Frame-ID identifiziert. Der Frame kann der oberste Browsing-Kontext im Tab sein oder ein verschachtelter Browsing-Kontext, der als [iframe](/de/docs/Web/HTML/Element/iframe) implementiert ist.

Jeder `addListener()`-Aufruf eines Ereignisses akzeptiert einen optionalen Filterparameter. Der Filter wird ein oder mehrere URL-Muster angeben, und das Ereignis wird dann nur für Navigationen ausgelöst, bei denen die Ziel-URL mit einem der Muster übereinstimmt.

Der `onCommitted`-Ereignis-Listener erhält zwei zusätzliche Eigenschaften: einen {{WebExtAPIRef("webNavigation.TransitionType","TransitionType")}}, der die Ursache der Navigation angibt (z.B. weil der Benutzer einen Link angeklickt hat oder ein Lesezeichen ausgewählt hat), und einen {{WebExtAPIRef("webNavigation.TransitionQualifier","TransitionQualifier")}}, der weitere Informationen über die Navigation liefert.

Um diese API zu verwenden, benötigen Sie die "webNavigation"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Typen

- {{WebExtAPIRef("webNavigation.TransitionType")}}
  - : Ursache der Navigation: zum Beispiel, der Benutzer hat einen Link angeklickt, eine Adresse eingegeben oder ein Lesezeichen angeklickt.
- {{WebExtAPIRef("webNavigation.TransitionQualifier")}}
  - : Zusätzliche Informationen über einen Übergang.

## Funktionen

- {{WebExtAPIRef("webNavigation.getFrame()")}}
  - : Ruft Informationen über einen bestimmten Frame ab. Ein Frame kann der oberste Frame in einem Tab oder ein verschachteltes [iframe](/de/docs/Web/HTML/Element/iframe) sein und wird eindeutig durch eine Tab-ID und eine Frame-ID identifiziert.
- {{WebExtAPIRef("webNavigation.getAllFrames()")}}
  - : Gibt bei Angabe einer Tab-ID Informationen über alle darin enthaltenen Frames zurück.

## Ereignisse

- {{WebExtAPIRef("webNavigation.onBeforeNavigate")}}
  - : Wird ausgelöst, wenn der Browser kurz davor ist, ein Navigationsereignis zu starten.
- {{WebExtAPIRef("webNavigation.onCommitted")}}
  - : Wird ausgelöst, wenn eine Navigation festgeschrieben wird. Mindestens ein Teil des neuen Dokuments wurde vom Server empfangen und der Browser hat sich entschieden, auf das neue Dokument zu wechseln.
- {{WebExtAPIRef("webNavigation.onDOMContentLoaded")}}
  - : Wird ausgelöst, wenn das [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis auf der Seite ausgelöst wird.
- {{WebExtAPIRef("webNavigation.onCompleted")}}
  - : Wird ausgelöst, wenn ein Dokument, einschließlich der darin referenzierten Ressourcen, vollständig geladen und initialisiert ist. Dies entspricht dem DOM-[`load`](/de/docs/Web/API/Window/load_event)-Ereignis.
- {{WebExtAPIRef("webNavigation.onErrorOccurred")}}
  - : Wird ausgelöst, wenn ein Fehler auftritt und die Navigation abgebrochen wird. Dies kann passieren, wenn ein Netzwerkfehler aufgetreten ist oder der Benutzer die Navigation abgebrochen hat.
- {{WebExtAPIRef("webNavigation.onCreatedNavigationTarget")}}
  - : Wird ausgelöst, wenn ein neues Fenster oder ein neuer Tab in einem bestehenden Fenster erstellt wird, um eine Navigation durchzuführen: zum Beispiel, wenn der Benutzer einen Link in einem neuen Tab öffnet.
- {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated")}}
  - : Wird ausgelöst, wenn der [Fragment-Identifier](https://en.wikipedia.org/wiki/Fragment_identifier) einer Seite geändert wird.
- {{WebExtAPIRef("webNavigation.onTabReplaced")}}
  - : Wird ausgelöst, wenn der Inhalt des Tabs durch einen anderen (in der Regel zuvor vorrenderierten) Tab ersetzt wird.
- {{WebExtAPIRef("webNavigation.onHistoryStateUpdated")}}
  - : Wird ausgelöst, wenn die Seite die [History API (2011)](http://diveintohtml5.info/history.html) verwendet hat, um die in der Adressleiste des Browsers angezeigte URL zu aktualisieren.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation) API. Diese Dokumentation wird aus [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code abgeleitet.

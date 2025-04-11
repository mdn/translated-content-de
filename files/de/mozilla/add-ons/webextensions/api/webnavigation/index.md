---
title: webNavigation
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{AddonSidebar}}

Fügen Sie Ereignislistener für die verschiedenen Phasen einer Navigation hinzu. Eine Navigation besteht aus einem Frame im Browser, der von einer URL zu einer anderen wechselt, normalerweise (aber nicht immer) als Reaktion auf eine Benutzeraktion wie das Klicken auf einen Link oder das Eingeben einer URL in die Adressleiste.

Vergleich mit der {{WebExtAPIRef("webRequest")}} API: Navigationen führen normalerweise dazu, dass der Browser Webanfragen durchführt, aber die webRequest-API bezieht sich auf die niederschwelligere Sicht von der HTTP-Schicht, während die webNavigation-API sich mehr auf die Sicht der Browser-Benutzeroberfläche konzentriert.

Jedes Ereignis entspricht einem bestimmten Stadium der Navigation. Die Reihenfolge der Ereignisse ist wie folgt:

![Visualisierung des primären Ablaufs und der unten beschriebenen zusätzlichen Abläufe.](we-flow.png)

- Der primäre Ablauf ist:

  - {{WebExtAPIRef("webNavigation.onBeforeNavigate", "onBeforeNavigate")}}
  - {{WebExtAPIRef("webNavigation.onCommitted", "onCommitted")}}
  - {{WebExtAPIRef("webNavigation.onDOMContentLoaded", "onDOMContentLoaded")}}
  - {{WebExtAPIRef("webNavigation.onCompleted", "onCompleted")}}.

- Zusätzlich:

  - {{WebExtAPIRef("webNavigation.onCreatedNavigationTarget", "onCreatedNavigationTarget")}} wird vor `onBeforeNavigate` ausgelöst, wenn der Browser einen neuen Tab oder ein neues Fenster für die Navigation erstellen musste (zum Beispiel, weil der Benutzer einen Link in einem neuen Tab geöffnet hat).
  - {{WebExtAPIRef("webNavigation.onHistoryStateUpdated", "onHistoryStateUpdated")}} wird ausgelöst, wenn eine Seite die [history API](/de/docs/Web/API/History_API) verwendet, um die in der Browser-Adressleiste angezeigte URL zu aktualisieren.
  - {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated", "onReferenceFragmentUpdated")}} wird ausgelöst, wenn der [Fragment-Identifikator](/de/docs/Web/URI/Reference/Fragment) einer Seite geändert wird.
  - {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}} kann jederzeit ausgelöst werden.

Jede Navigation ist ein URL-Übergang in einem bestimmten Browser-Frame. Der Browser-Frame wird durch eine Tab-ID und eine Frame-ID identifiziert. Der Frame kann der oberste Browsing-Kontext im Tab sein oder ein verschachtelter Browsing-Kontext sein, der als [iframe](/de/docs/Web/HTML/Reference/Elements/iframe) implementiert ist.

Jeder `addListener()`-Aufruf eines Ereignisses akzeptiert einen optionalen Filterparameter. Der Filter gibt ein oder mehrere URL-Muster an, und das Ereignis wird dann nur für Navigationen ausgelöst, bei denen die Ziel-URL mit einem der Muster übereinstimmt.

Dem `onCommitted`-Ereignislistener werden zwei zusätzliche Eigenschaften übergeben: ein {{WebExtAPIRef("webNavigation.TransitionType","TransitionType")}}, das die Ursache der Navigation anzeigt (zum Beispiel, weil der Benutzer auf einen Link geklickt hat oder ein Lesezeichen ausgewählt hat), und ein {{WebExtAPIRef("webNavigation.TransitionQualifier","TransitionQualifier")}}, das zusätzliche Informationen über die Navigation liefert.

Um diese API zu verwenden, benötigen Sie die "webNavigation" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Typen

- {{WebExtAPIRef("webNavigation.TransitionType")}}
  - : Ursache der Navigation: zum Beispiel, der Benutzer hat auf einen Link geklickt, eine Adresse eingegeben oder ein Lesezeichen ausgewählt.
- {{WebExtAPIRef("webNavigation.TransitionQualifier")}}
  - : Zusätzliche Informationen über einen Übergang.

## Funktionen

- {{WebExtAPIRef("webNavigation.getFrame()")}}
  - : Ruft Informationen über einen bestimmten Frame ab. Ein Frame kann der oberste Frame in einem Tab oder ein verschachtelter [iframe](/de/docs/Web/HTML/Reference/Elements/iframe) sein und wird eindeutig durch eine Tab-ID und eine Frame-ID identifiziert.
- {{WebExtAPIRef("webNavigation.getAllFrames()")}}
  - : Angesichts einer Tab-ID ruft Informationen über alle enthaltenen Frames ab.

## Ereignisse

- {{WebExtAPIRef("webNavigation.onBeforeNavigate")}}
  - : Wird ausgelöst, wenn der Browser dabei ist, ein Navigationsereignis zu starten.
- {{WebExtAPIRef("webNavigation.onCommitted")}}
  - : Wird ausgelöst, wenn eine Navigation festgeschrieben wird. Mindestens ein Teil des neuen Dokuments wurde vom Server empfangen, und der Browser hat beschlossen, zum neuen Dokument zu wechseln.
- {{WebExtAPIRef("webNavigation.onDOMContentLoaded")}}
  - : Wird ausgelöst, wenn das [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis auf der Seite ausgelöst wird.
- {{WebExtAPIRef("webNavigation.onCompleted")}}
  - : Wird ausgelöst, wenn ein Dokument, einschließlich der von ihm referenzierten Ressourcen, vollständig geladen und initialisiert wurde. Dies entspricht dem DOM-Event [`load`](/de/docs/Web/API/Window/load_event).
- {{WebExtAPIRef("webNavigation.onErrorOccurred")}}
  - : Wird ausgelöst, wenn ein Fehler auftritt und die Navigation abgebrochen wird. Dies kann passieren, wenn entweder ein Netzwerkfehler auftrat oder der Benutzer die Navigation abgebrochen hat.
- {{WebExtAPIRef("webNavigation.onCreatedNavigationTarget")}}
  - : Wird ausgelöst, wenn ein neues Fenster oder ein neuer Tab in einem vorhandenen Fenster erstellt wird, um eine Navigation zu hosten: beispielsweise, wenn der Benutzer einen Link in einem neuen Tab öffnet.
- {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated")}}
  - : Wird ausgelöst, wenn der [Fragment-Identifikator](https://en.wikipedia.org/wiki/Fragment_identifier) einer Seite geändert wird.
- {{WebExtAPIRef("webNavigation.onTabReplaced")}}
  - : Wird ausgelöst, wenn der Inhalt des Tabs durch einen anderen (normalerweise zuvor vorgerenderten) Tab ersetzt wird.
- {{WebExtAPIRef("webNavigation.onHistoryStateUpdated")}}
  - : Wird ausgelöst, wenn die Seite die [history API (2011)](/de/docs/Web/API/History_API) verwendet, um die in der Browser-Adressleiste angezeigte URL zu aktualisieren.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation) API von Chromium. Diese Dokumentation stammt aus [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.

<!--
// Urheberrecht 2015 Die Chromium-Autoren. Alle Rechte vorbehalten.
//
// Die Verbreitung und Nutzung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weiterverbreitungen des Quellcodes müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss beibehalten.
//    * Weiterverbreitungen in Binärform müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderen Materialien, die mit der Verteilung geliefert
// werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser Software
// abgeleitet wurden, zu unterstützen oder zu fördern, ohne vorherige spezifische
// schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND BEITRAGENDEN
// "WIE BESEHEN" UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE GEWÄHRLEISTUNGEN,
// EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT, DER IMPLIZIERTEN GEWÄHRLEISTUNGEN
// DER MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN
// ABGELEHNT. IN KEINEM FALL HAFTEN DIE EIGENTÜMER ODER DIE BEITRAGENDEN FÜR
// DIREKTE, INDIREKTE, ZUFÄLLIGE, BESONDERE, BEISPIELHAFTE ODER FOLGESCHÄDEN
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE BESCHAFFUNG VON
// ERSATZGÜTERN ODER -DIENSTLEISTUNGEN; NUTZUNGSVERLUST, DATEN ODER GEWINNE;
// ODER GESCHÄFTSUNTERBRECHUNG) JEDOCH VERURSACHT UND UNTER JEGLICHER HAFTUNGSTHEORIE,
// OB IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH
// FAHRLÄSSIGKEIT ODER ANDERWEITIG) AUFGRUND DER VERWENDUNG DIESER SOFTWARE,
// SELBST WENN DIE MÖGLICHKEIT SOLCHER SCHÄDEN ANGEDEUTET WURDE.
-->

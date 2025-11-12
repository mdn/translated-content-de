---
title: Bounce-Tracking-Minderungen
slug: Web/Privacy/Guides/Bounce_tracking_mitigations
l10n:
  sourceCommit: 6317c2391f3a94e8c4fba467a1d5bebc46417385
---

**Bounce-Tracking-Minderungen** ist eine Browserfunktion, die den Datenschutz der Benutzer verbessert, indem sie vor **Bounce-Tracking** schützt. Dieser Artikel erklärt, was Bounce-Tracking ist und wie Bounce-Tracking-Minderungen funktionieren.

## Definition von Bounce-Tracking

Bounce-Tracking (manchmal auch Redirect-Tracking genannt) ist ein Missbrauch der plattformübergreifenden Navigation, bei dem ein Tracker den Benutzer zu seiner Website umleitet, um ein First-Party-Cookie zu setzen, das den Benutzer über andere Websites hinweg verfolgt. Die Umleitung kann so schnell erfolgen, dass der Benutzer sie möglicherweise gar nicht bemerkt.

Tatsächlich ermöglicht Bounce-Tracking das Setzen von Tracking-Cookies, selbst wenn der Browser [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) deaktiviert hat.

Bounce-Tracking kann auf verschiedene Weise durchgeführt werden:

1. Als "Bounce Back". In diesem Fall startet der Benutzer auf einer Website (`site1.example`), wird zu einer Tracker-Website (`tracker.example`) navigiert, wo das Tracking-Cookie gesetzt wird, und dann zurück zu `site1.example` umgeleitet.

   <!--

   Mermaid JS-Quelle:

   flowchart LR
      A["site1.example"] -- &nbsp;&nbsp;1: Navigate&nbsp;&nbsp; --&gt; B["tracker.example"]
      B -- &nbsp;&nbsp;2: Store cookie&nbsp;&nbsp; --&gt; C[("Browser")]
      B -- &nbsp;&nbsp;3: Redirect&nbsp;&nbsp; --&gt; A

   https://www.mermaidchart.com/ wurde genutzt, um das Diagramm mit dem "Standardthema" zu erstellen.

   -->

   ![Eine Illustration eines Bounce Back Beispiels](bounce-back.svg)

2. Als "Bounce Through". In diesem Fall startet der Benutzer auf einer Website (`site1.example`), wird zu einer Tracker-Website (`tracker.example`) navigiert, wo das Tracking-Cookie gesetzt wird, und dann zu einer anderen Seite (`site2.example`) umgeleitet.

      <!--

   Mermaid JS-Quelle:

   flowchart LR
     A["site1.example"] -- &nbsp;&nbsp;1: Navigate&nbsp;&nbsp; --&gt; B["tracker.example"]
     B -- &nbsp;&nbsp;3: Redirect&nbsp;&nbsp; --&gt; C["site2.example"]
     B -- &nbsp;&nbsp;2: Store cookie&nbsp;&nbsp; --&gt; D[(Browser)]


   https://www.mermaidchart.com/ wurde genutzt, um das Diagramm mit dem "Standardthema" zu erstellen.

   -->

   ![Eine Illustration eines Bounce Through Beispiels](bounce-through.svg)

In beiden Fällen sind sich die Benutzer möglicherweise nicht bewusst, dass sie `tracker.example` besucht haben. Sie könnten glauben, nur `site1.example` besucht zu haben oder versuchen, zu `site2.example` zu navigieren.

## Wie Bounce-Tracking-Minderungen funktionieren

Bounce-Tracking-Minderungen funktionieren, indem Tracker-Websites über eine Heuristik identifiziert und regelmäßig Cookies sowie andere zugehörige Zustandsdaten gelöscht werden (weitere Beispiele sind [`localStorage`](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API), [Cache API](/de/docs/Web/API/CacheStorage), und Netzwerk-Zustandsdaten). Das Feature vermeidet die Verwendung von Block- oder Erlauben-Listen, um zu entscheiden, welche Websites betroffen sind.

Es ist entscheidend, dass der Browser beim Schutz vor Bounce-Tracking nicht in legitime, nicht zum Tracking gehörende Weiterleitungsabläufe eingreift. Zum Beispiel beinhalten Single Sign-On (SSO), [Identity Federation](/de/docs/Web/API/FedCM_API#fedcm_concepts) und Zahlungsdienste im Allgemeinen die Umleitung des Benutzers zu einer anderen Website, auf der er eine Aktion ausführt, woraufhin Zustandsinformationen aktualisiert werden, um den Benutzer dann zurück zur ursprünglichen Website zu leiten.

Der Prozess funktioniert wie folgt:

1. Der Browser überwacht die Navigationen und markiert Websites, die Teil eines "Bounce" sind, also Websites, über die eine Navigation umgeleitet wurde. Dies schließt sowohl serverinitiierte Weiterleitungen als auch clientseitige Weiterleitungen ein, bei denen JavaScript programmgesteuert eine Navigation auslöst.
2. Der Browser überprüft regelmäßig die Liste der markierten Websites und prüft, ob der Benutzer die Seite aktiv genutzt hat, indem er innerhalb der letzten 45 Tage mit ihr interagiert hat. Beispiel-Interaktionen umfassen das Klicken auf einen Button, das Eingeben von Daten in ein Formular und das Scrollen der Seite. Die Interaktion kann vor, während oder nach der Erkennung des Bounce erfolgen.
3. Wenn die Website keine Benutzerinteraktion aufweist und Drittanbieter-Cookies blockiert sind, werden deren Zustandsdaten gelöscht.

Die Heuristik arbeitet mit Websites, die durch {{Glossary("eTLD", "eTLD+1")}} definiert sind. Daher werden sowohl `foo.site1.example` als auch `bar.site1.example` als `site1.example` behandelt.

## Spezifikationen

{{specifications}}

## Browser-Unterstützung

- Die Implementierung der Bounce-Tracking-Minderungen in Chromium wurde in Version 116 eingeführt.
- Firefox [unterstützt es ebenfalls](https://firefox-source-docs.mozilla.org/toolkit/components/antitracking/anti-tracking/bounce-tracking-protection/).
- Safari hat den Bounce-Tracking-Schutz zuerst in [ITP 2.0](https://webkit.org/blog/8311/intelligent-tracking-prevention-2-0/) eingeführt.

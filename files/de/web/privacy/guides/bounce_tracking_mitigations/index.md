---
title: Bounce Tracking Abschwächungen
slug: Web/Privacy/Guides/Bounce_tracking_mitigations
l10n:
  sourceCommit: a73b189594f4dbed3dd953d263ebd93f28ba16d0
---

**Bounce Tracking Abschwächungen** (in einigen Browsern als **bounce tracking protection** bezeichnet) sind eine Funktion, die den Datenschutz des Nutzers verbessert, indem sie Schutz vor **bounce tracking** bietet. Dieser Artikel erklärt, was bounce tracking ist und wie Bounce Tracking Abschwächungen funktionieren.

## Definition von Bounce Tracking

Bounce Tracking (auch bekannt als **redirect tracking**) ist ein Missbrauch der plattformübergreifenden Navigation, bei dem ein Tracker einen Benutzer auf seine Website weiterleitet, um ein First-Party-Cookie zu setzen, das den Benutzer über andere Websites hinweg verfolgt. Die Weiterleitung kann so schnell erfolgen, dass der Benutzer sie möglicherweise gar nicht bemerkt.

Effektiv ermöglicht Bounce Tracking das Setzen von Tracking-Cookies, auch wenn der Browser [Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) deaktiviert hat.

Bounce Tracking kann auf verschiedene Weisen durchgeführt werden:

1. Als "bounce back". In diesem Fall beginnt der Benutzer auf einer Website (`site1.example`), wird zu einer Tracker-Website (`tracker.example`) navigiert, wo das Tracking-Cookie gesetzt wird, und wird dann zurück zu `site1.example` weitergeleitet.

   <!--

   Mermaid JS source:

   flowchart LR
      A["site1.example"] -- &nbsp;&nbsp;1: Navigate&nbsp;&nbsp; --&gt; B["tracker.example"]
      B -- &nbsp;&nbsp;2: Store cookie&nbsp;&nbsp; --&gt; C[("Browser")]
      B -- &nbsp;&nbsp;3: Redirect&nbsp;&nbsp; --&gt; A

   https://www.mermaidchart.com/ was used to generate the chart, with the "Default theme"

   -->

   ![Eine Illustration eines Bounce Back Beispiels](bounce-back.svg)

2. Als "bounce through". In diesem Fall beginnt der Benutzer auf einer Website (`site1.example`), wird zu einer Tracker-Website (`tracker.example`) navigiert, wo das Tracking-Cookie gesetzt wird und wird dann zu einer anderen Website (`site2.example`) weitergeleitet.

      <!--
   
   Mermaid JS source:
   
   flowchart LR
     A["site1.example"] -- &nbsp;&nbsp;1: Navigate&nbsp;&nbsp; --&gt; B["tracker.example"]
     B -- &nbsp;&nbsp;3: Redirect&nbsp;&nbsp; --&gt; C["site2.example"]
     B -- &nbsp;&nbsp;2: Store cookie&nbsp;&nbsp; --&gt; D[(Browser)]
   
   
   https://www.mermaidchart.com/ was used to generate the chart, with the "Default theme"
   
   -->

   ![Eine Illustration eines Bounce Through Beispiels](bounce-through.svg)

In beiden Fällen sind Benutzer sich möglicherweise nicht bewusst, dass sie `tracker.example` besucht haben. Sie könnten glauben, dass sie nur `site1.example` besucht haben oder versuchen, zu `site2.example` zu navigieren.

## Funktionsweise der Bounce Tracking Abschwächungen

Bounce Tracking Abschwächungen funktionieren, indem sie Tracker-Websites mithilfe einer Heuristik identifizieren und regelmäßig Cookies und andere zugehörige Zustandsdaten löschen (weitere Beispiele sind [`localStorage`](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API), [Cache API](/de/docs/Web/API/CacheStorage) und Netzwerkzustandsdaten). Die Funktion vermeidet die Verwendung von Block- oder Zulassungslisten, um zu entscheiden, welche Websites betroffen sind.

Es ist entscheidend, dass der Browser beim Schutz vor Bounce Tracking nicht legitime, nicht-tracking Weiterleitungsabläufe stört. Beispielsweise beinhalten Single Sign-On (SSO), [Identity Federation](/de/docs/Web/API/FedCM_API#fedcm_concepts) und Zahlungsdienste im Allgemeinen die Weiterleitung des Benutzers zu einer anderen Website, auf der er eine Aktion ausführt, Zustandsinformationen aktualisiert und dann zum ursprünglichen Standort zurückleitet.

Der Prozess funktioniert wie folgt:

1. Der Browser überwacht Navigationen und kennzeichnet Websites, die Teil eines "Bounce" sind, also Websites, über die eine Navigation umgeleitet wurde. Dies umfasst sowohl server-initiierte Weiterleitungen als auch clientseitige Weiterleitungen, bei denen JavaScript programmgesteuert eine Navigation auslöst.
2. Der Browser untersucht regelmäßig seine Liste der gekennzeichneten Websites und überprüft, ob der Benutzer die Website aktiv genutzt hat, indem er in den letzten 45 Tagen mit ihr interagiert hat. Beispielinteraktionen umfassen das Klicken auf einen Button, das Eingeben von Daten in ein Formular und das Scrollen auf der Website. Die Interaktion kann vor, während oder nach dem Erkennen des Bounces erfolgen.
3. Wenn die Website keine Benutzerinteraktion aufweist und Third-Party-Cookies blockiert sind, werden ihre Zustandsdaten gelöscht.

Die Heuristik arbeitet auf {{Glossary("site", "Sites")}}, die durch {{Glossary("eTLD#etld1", "eTLD+1")}} definiert sind. Infolgedessen werden sowohl `foo.site1.example` als auch `bar.site1.example` als `site1.example` behandelt.

### Zustandsbehaftete vs. zustandslose Bounces

Frühere Implementierungen haben nur Websites gekennzeichnet, die Teil eines "zustandsbehafteten Bounces" sind, also eines "Bounce", bei dem die Weiterleitungsseite Zustandsinformationen (wie ein Cookie) setzt. Dies wurde geändert, weil andere Formen von Zustand — wie Netzwerkzustand — automatisch gesetzt werden, aber immer noch manipuliert werden können, um Benutzer zu verfolgen. Wenn Sie diese Arten von Zustand betrachten, wird jeder Bounce effektiv zustandsbehaftet, sodass es nicht nützlich ist, "zustandsbehaftete Bounces" als eine separate Gruppe zu betrachten.

Die Implementierungen wurden daher aktualisiert, um im "zustandslosen Modus" zu arbeiten.

## Spezifikationen

{{specifications}}

## Browser-Kompatibilität

- Die Implementierung der Bounce Tracking Abschwächungen in Chromium wurde in Version 116 ausgeliefert und funktioniert, wenn Benutzereinstellungen Third-Party-Cookies blockieren. Chromium hat Third-Party-Cookies standardmäßig nur deaktiviert, wenn es im Inkognito-Modus von Chrome (oder dem entsprechenden Modus in anderen Browsern, wie dem InPrivate-Modus von Microsoft Edge) verwendet wird. Browser mit nicht auf Chromium basierenden Rendering-Engines blockieren standardmäßig immer Third-Party-Cookies.
- Firefox [unterstützt Bounce Tracking Schutz](https://firefox-source-docs.mozilla.org/toolkit/components/antitracking/anti-tracking/bounce-tracking-protection/), wenn der [Enhanced Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) auf den strikten Modus eingestellt ist.
  - Firefox hat seine bestehenden Funktionen zum [Schutz vor Redirect-Tracking](/de/docs/Web/Privacy/Guides/Redirect_tracking_protection) neben dem Bounce Tracking Schutz beibehalten, da es einen plattformübergreifenden Ansatz bietet, der sich nicht auf eine bekannte Tracker-Liste verlässt.
  - Firefox hat seine Implementierung in Version [145](/de/docs/Mozilla/Firefox/Releases/145) auf den zustandslosen Modus umgestellt.
- Safari implementiert Bounce Tracking Abschwächungen nicht im Sinne der [Spezifikation](#spezifikationen). Safari hat eine eigene Listen-basierte Bounce Tracking Schutz, die erstmals in [ITP 2.0](https://webkit.org/blog/8311/intelligent-tracking-prevention-2-0/) eingeführt wurde. Siehe auch die [Safari](https://privacycg.github.io/nav-tracking-mitigations/#mitigations-safari) Beschreibung in der Spezifikation.

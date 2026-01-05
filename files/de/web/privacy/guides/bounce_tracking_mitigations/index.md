---
title: Abwehrmaßnahmen gegen Bounce-Tracking
slug: Web/Privacy/Guides/Bounce_tracking_mitigations
l10n:
  sourceCommit: d7a0ef33dfce20818a160557b5a72d6565cec254
---

**Abwehrmaßnahmen gegen Bounce-Tracking** (in einigen Browsern als **Bounce-Tracking-Schutz** bezeichnet) ist eine Funktion, die den Schutz der Privatsphäre der Benutzer verbessert, indem sie gegen **Bounce-Tracking** schützt. Dieser Artikel erklärt, was Bounce-Tracking ist und wie Abwehrmaßnahmen gegen Bounce-Tracking funktionieren.

## Definition von Bounce-Tracking

Bounce-Tracking (auch bekannt als **Redirect-Tracking**) ist ein Missbrauch von Cross-Site-Navigation, bei dem ein Tracker einen Benutzer auf seine Website umleitet, um ein First-Party-Cookie zu setzen, das den Benutzer über andere Websites hinweg verfolgt. Die Umleitung kann so schnell erfolgen, dass ein Benutzer sie möglicherweise nicht einmal bemerkt.

Effektiv ermöglicht Bounce-Tracking das Setzen von Tracking-Cookies, selbst wenn der Browser [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) deaktiviert hat.

Bounce-Tracking kann auf verschiedene Arten durchgeführt werden:

1. Als "Bounce back". In diesem Fall beginnt der Benutzer auf einer Website (`site1.example`), wird auf eine Tracker-Site (`tracker.example`) navigiert, wo das Tracking-Cookie gesetzt wird, und dann zurück zu `site1.example` umgeleitet.

   <!--

   Mermaid JS source:

   flowchart LR
      A["site1.example"] -- &nbsp;&nbsp;1: Navigate&nbsp;&nbsp; --&gt; B["tracker.example"]
      B -- &nbsp;&nbsp;2: Store cookie&nbsp;&nbsp; --&gt; C[("Browser")]
      B -- &nbsp;&nbsp;3: Redirect&nbsp;&nbsp; --&gt; A

   https://www.mermaidchart.com/ was used to generate the chart, with the "Default theme"

   -->

   ![Eine Darstellung eines Bounce-Back-Beispiels](bounce-back.svg)

2. Als "Bounce through". In diesem Fall beginnt der Benutzer auf einer Website (`site1.example`), wird auf eine Tracker-Site (`tracker.example`) navigiert, wo das Tracking-Cookie gesetzt wird, und dann zu einer anderen Website (`site2.example`) umgeleitet.

      <!--
   
   Mermaid JS source:
   
   flowchart LR
     A["site1.example"] -- &nbsp;&nbsp;1: Navigate&nbsp;&nbsp; --&gt; B["tracker.example"]
     B -- &nbsp;&nbsp;3: Redirect&nbsp;&nbsp; --&gt; C["site2.example"]
     B -- &nbsp;&nbsp;2: Store cookie&nbsp;&nbsp; --&gt; D[(Browser)]
   
   
   https://www.mermaidchart.com/ was used to generate the chart, with the "Default theme"
   
   -->

   ![Eine Darstellung eines Bounce-Through-Beispiels](bounce-through.svg)

In beiden Fällen sind sich die Benutzer möglicherweise nicht bewusst, dass sie `tracker.example` besucht haben. Sie könnten glauben, nur `site1.example` besucht zu haben oder versucht haben, zu `site2.example` zu navigieren.

## Wie Abwehrmaßnahmen gegen Bounce-Tracking funktionieren

Abwehrmaßnahmen gegen Bounce-Tracking funktionieren, indem sie Tracker-Sites mit Hilfe einer Heuristik identifizieren und regelmäßig Cookies und andere Zustandsdaten löschen, die mit ihnen verbunden sind (weitere Beispiele sind [`localStorage`](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API), [Cache API](/de/docs/Web/API/CacheStorage) und Netzwerkzustandsdaten). Die Funktion vermeidet es, Block- oder Erlauben-Listen zu verwenden, um zu entscheiden, welche Websites betroffen sind.

Es ist wichtig, dass der Browser, während er sich gegen Bounce-Tracking verteidigt, die legitimen, nicht-tracking-basierten Umleitungsabläufe nicht beeinträchtigt. Zum Beispiel beinhalten Single Sign-On (SSO), [Identitätsföderation](/de/docs/Web/API/FedCM_API#fedcm_concepts) und Zahlungsdienste in der Regel eine Umleitung des Benutzers zu einer anderen Website, auf der er eine Aktion ausführt, die zu einer Aktualisierung der Zustandsinformationen führt, bevor der Benutzer wieder zurück zur ursprünglichen Website geleitet wird.

Der Prozess funktioniert wie folgt:

1. Der Browser überwacht Navigationen und markiert Websites, die Teil eines "Bounces" sind, also Websites, durch die eine Navigation umgeleitet wurde. Dazu gehören sowohl serverinitiierte Umleitungen als auch clientseitige Umleitungen, bei denen JavaScript programmgesteuert eine Navigation auslöst.
2. Der Browser untersucht regelmäßig seine Liste der markierten Websites und prüft, ob der Benutzer die Website aktiv genutzt hat, indem er innerhalb der letzten 45 Tage mit ihr interagiert hat. Beispielhafte Interaktionen umfassen das Klicken auf einen Button, das Eingeben von Daten in ein Formular und das Scrollen auf der Website. Die Interaktion kann vor, während oder nach der Erkennung des Bounce erfolgen.
3. Falls die Website keine Benutzerinteraktion aufweist und Drittanbieter-Cookies blockiert sind, wird ihr Zustand gelöscht.

Die Heuristik arbeitet auf {{Glossary("site", "Sites")}}. Daher werden sowohl `foo.site1.example` als auch `bar.site1.example` als `site1.example` behandelt.

### Stateful vs. Stateless Bounces

Frühere Implementierungen markierten nur Websites, die Teil eines "stateful bounce" sind, also einem "Bounce", bei dem die Umleitungsseite Zustandsinformationen setzt (wie ein Cookie). Dies wurde geändert, da andere Formen von Zustand — wie Netzwerkzustand — automatisch gesetzt werden, aber trotzdem manipuliert werden können, um Benutzer zu verfolgen. Wenn man diese Arten von Zustand betrachtet, wird jeder Bounce effektiv stateful, sodass es nicht sinnvoll ist, "stateful bounces" als eigene Gruppe zu betrachten.

Implementierungen wurden daher aktualisiert, um im "stateless mode" zu arbeiten.

## Spezifikationen

{{specifications}}

## Browser-Kompatibilität

- Die Implementierung von Bounce-Tracking-Abwehrmaßnahmen in Chromium wurde in Version 116 eingeführt und funktioniert, wenn Benutzereinstellungen Drittanbieter-Cookies blockieren. Chromium hat Drittanbieter-Cookies standardmäßig nur im Inkognito-Modus von Chrome deaktiviert (oder dem Äquivalent in anderen Browsern, wie dem InPrivate-Modus von Microsoft Edge). Browser, die auf Nicht-Chromium-Rendering-Engines basieren, blockieren standardmäßig immer Drittanbieter-Cookies.
- Firefox [unterstützt Bounce-Tracking-Schutz](https://firefox-source-docs.mozilla.org/toolkit/components/antitracking/anti-tracking/bounce-tracking-protection/), wenn der [erweiterte Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) auf den strengen Modus eingestellt ist.
  - Firefox hat seine bestehenden [Redirect-Tracking-Schutz](/de/docs/Web/Privacy/Guides/Redirect_tracking_protection) Funktionen neben dem Bounce-Tracking-Schutz beibehalten, da es einen browserübergreifenden Ansatz bietet, der nicht auf eine bekannte Tracker-Liste angewiesen ist.
  - Firefox hat seine Implementierung aktualisiert, um im Stateless-Modus in [Version 145](/de/docs/Mozilla/Firefox/Releases/145) zu laufen.
- Safari implementiert keine Bounce-Tracking-Abwehrmaßnahmen wie in der [Spezifikation](#spezifikationen) definiert. Safari hat seinen eigenen Listen-basierten Bounce-Tracking-Schutz, der erstmals in [ITP 2.0](https://webkit.org/blog/8311/intelligent-tracking-prevention-2-0/) eingeführt wurde. Siehe auch die [Safari](https://privacycg.github.io/nav-tracking-mitigations/#mitigations-safari) Beschreibung in der Spezifikation.

---
title: View Transition API
slug: Web/API/View_Transition_API
l10n:
  sourceCommit: 15e1155ab8a0587405601cc4753bb789cd6ac47c
---

{{DefaultAPISidebar("View Transition API")}}

Die **View Transition API** bietet einen Mechanismus, mit dem sich animierte Übergänge zwischen verschiedenen Ansichten einer Website und ihrer Elemente einfach erstellen lassen. Dazu gehören Übergänge zwischen DOM-Zuständen in einer Single-Page-App (SPA) und Übergänge bei der Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Konzepte und Verwendung

Animierte Ansichtsübergänge sind eine beliebte Gestaltungsmöglichkeit, um die kognitive Belastung der Nutzer zu verringern, ihnen die Orientierung zu erleichtern und die wahrgenommene Ladezeit beim Wechsel zwischen Zuständen oder Ansichten einer Anwendung zu verkürzen.

Bisher war es jedoch schwierig, solche Übergänge im Web zu erstellen:

- Übergänge zwischen Zuständen in Single-Page-Apps (SPAs) erfordern häufig umfangreichen CSS- und JavaScript-Code, um:
  - Das Laden und die Positionierung der alten und neuen Inhalte zu handhaben.
  - Die alten und neuen Zustände zu animieren und so den Übergang zu erzeugen.
  - Zu verhindern, dass unbeabsichtigte Interaktionen mit den alten Inhalten Probleme verursachen.
  - Die alten Inhalte zu entfernen, sobald der Übergang abgeschlossen ist.
    Wenn alte und neue Inhalte gleichzeitig im DOM vorhanden sind, können außerdem Probleme mit der Barrierefreiheit auftreten, etwa der Verlust der Leseposition, Unklarheiten beim Fokus oder ungewöhnliche Ankündigungen durch Live-Regionen.
- Ansichtsübergänge zwischen Dokumenten (also bei der Navigation zwischen verschiedenen Seiten einer MPA) waren bisher nicht möglich.

Die View Transition API bietet eine einfache Möglichkeit, die erforderlichen Ansichtswechsel und Übergangsanimationen für beide Anwendungsfälle umzusetzen.

Ein Ansichtsübergang mit den Standardanimationen des Browsers lässt sich sehr schnell erstellen. Darüber hinaus können Sie sowohl die Übergangsanimation anpassen als auch den Ansichtsübergang selbst steuern – beispielsweise festlegen, unter welchen Umständen die Animation übersprungen wird. Das gilt für Ansichtsübergänge in SPAs und MPAs.

Weitere Informationen finden Sie unter:

- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using)
- [Verwendung von View-Transition-Typen](/de/docs/Web/API/View_Transition_API/Using_types)
- [Verwendung elementbezogener Ansichtsübergänge](/de/docs/Web/API/View_Transition_API/Using_element-scoped)

## Schnittstellen

- [`CSSViewTransitionRule`](/de/docs/Web/API/CSSViewTransitionRule)
  - : Repräsentiert eine {{cssxref("@view-transition")}}-[At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules).
- [`ViewTransition`](/de/docs/Web/API/ViewTransition)
  - : Repräsentiert einen Ansichtsübergang und bietet Funktionen, um auf verschiedene Zustände des Übergangs zu reagieren (z. B. wenn die Animation ausgeführt werden kann oder abgeschlossen ist) oder den Übergang vollständig zu überspringen.
- [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet)
  - : Ein [Set-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das die Typen eines aktiven Ansichtsübergangs repräsentiert. Damit lassen sich die Typen während des Übergangs abfragen oder ändern.

## Erweiterungen anderer Schnittstellen

- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
  - : Startet einen neuen Ansichtsübergang innerhalb desselben Dokuments (SPA) und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, das ihn repräsentiert.
- [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)
  - : Das Ereignisobjekt für das Ereignis [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event). Bei einer Navigation zwischen Dokumenten können Sie damit den zugehörigen Ansichtsübergang vom _Zieldokument_ aus steuern. Dazu erhalten Sie Zugriff auf das entsprechende [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt, sofern die Navigation einen Ansichtsübergang ausgelöst hat.
- [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)
  - : Das Ereignisobjekt für das Ereignis [`pageswap`](/de/docs/Web/API/Window/pageswap_event). Bei einer Navigation zwischen Dokumenten können Sie damit den zugehörigen Ansichtsübergang vom _Ausgangsdokument_ aus steuern. Dazu erhalten Sie Zugriff auf das entsprechende [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt, sofern die Navigation einen Ansichtsübergang ausgelöst hat. Außerdem stellt es Informationen über die Art der Navigation sowie über die Einträge des aktuellen Dokuments und des Zieldokuments im Verlauf bereit.
- Das [`Window`](/de/docs/Web/API/Window)-Ereignis [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)
  - : Wird ausgelöst, wenn ein Dokument erstmals gerendert wird – entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments aus dem {{Glossary("bfcache", "Back/Forward-Cache")}} (bfcache) oder einem {{Glossary("Prerender", "Prerender")}}.
- Das [`Window`](/de/docs/Web/API/Window)-Ereignis [`pageswap`](/de/docs/Web/API/Window/pageswap_event)
  - : Wird ausgelöst, wenn ein Dokument aufgrund einer Navigation unmittelbar entladen werden soll.

## HTML-Ergänzungen

- [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect)
  - : Kennzeichnet die wichtigsten Inhalte im zugehörigen Dokument für die erste Ansicht der Seite. Das Rendern des Dokuments wird blockiert, bis diese Inhalte geparst wurden. So wird in allen unterstützenden Browsern eine konsistente erste Darstellung und damit ein konsistenter Ansichtsübergang gewährleistet.

## CSS-Ergänzungen

### At-Regeln

- {{cssxref("@view-transition")}}
  - : Bei einer Navigation zwischen Dokumenten wird `@view-transition` verwendet, um Ansichtsübergänge für das aktuelle Dokument und das Zieldokument zu aktivieren.

### Eigenschaften

- {{cssxref("view-transition-name")}}
  - : Gibt den Snapshot des Ansichtsübergangs an, an dem ausgewählte Elemente teilnehmen. Dadurch kann ein Element während eines Ansichtsübergangs unabhängig vom Rest der Seite animiert werden.
- {{cssxref("view-transition-class")}}
  - : Bietet eine zusätzliche Möglichkeit, ausgewählte Elemente mit einem `view-transition-name` zu gestalten.
- {{cssxref("view-transition-scope")}}
  - : Ermöglicht es, die Erkennung von Elementen mit festgelegten `view-transition-name`-Werten und damit die Erstellung von [Snapshots](/de/docs/Web/API/View_Transition_API/Using#an_aside_on_snapshots) für Ansichtsübergänge auf einen bestimmten Element-Unterbaum zu beschränken.

### Pseudoklassen

- {{cssxref(":active-view-transition")}}
  - : Trifft auf Elemente zu, während ein Ansichtsübergang läuft.
- {{cssxref(":active-view-transition-type()")}}
  - : Trifft auf Elemente zu, während ein Ansichtsübergang mit einem oder mehreren bestimmten Typen läuft.

### Pseudoelemente

- {{cssxref("::view-transition")}}
  - : Das Wurzelelement der Ebene für Ansichtsübergänge. Es enthält alle Ansichtsübergänge und liegt über allen anderen Seiteninhalten.
- {{cssxref("::view-transition-group()")}}
  - : Das Wurzelelement eines einzelnen Ansichtsübergangs.
- {{cssxref("::view-transition-image-pair()")}}
  - : Der Container für die alte und die neue Ansicht eines Ansichtsübergangs – vor und nach dem Übergang.
- {{cssxref("::view-transition-old()")}}
  - : Ein statischer Snapshot der alten Ansicht vor dem Übergang.
- {{cssxref("::view-transition-new()")}}
  - : Eine Live-Darstellung der neuen Ansicht nach dem Übergang.

## Beispiele

- [Grundlegende SPA-Demo für Ansichtsübergänge](https://mdn.github.io/dom-examples/view-transitions/spa/): Eine einfache Bildergalerie mit Ansichtsübergängen, die separate Animationen zwischen alten und neuen Bildern sowie alten und neuen Bildunterschriften zeigt.
- [Grundlegende MPA-Demo für Ansichtsübergänge](https://mdn.github.io/dom-examples/view-transitions/mpa/): Eine Beispielwebsite mit zwei Seiten, die Ansichtsübergänge zwischen Dokumenten (MPA) demonstriert. Bei der Navigation zwischen den beiden Seiten verwendet sie einen benutzerdefinierten Übergang, bei dem die Ansicht nach oben geschoben wird.
- [Demo für Ansichtsübergänge mit `match-element`](/de/docs/Web/CSS/Reference/Properties/view-transition-name#using_the_match-element_value): Eine SPA mit animierten Listeneinträgen. Sie zeigt, wie sich mit dem Wert `match-element` der Eigenschaft `view-transition-name` einzelne Elemente animieren lassen.
- [HTTP 203-Playlist](https://http203-playlist.netlify.app/): Eine Demo-App für einen Videoplayer mit mehreren verschiedenen SPA-Ansichtsübergängen. Viele davon werden in [Fließende Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) erläutert.
- [Chrome-DevRel-Demos für Ansichtsübergänge](https://view-transitions.chrome.dev/): Eine Reihe von Demos zur View Transition API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fließende Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) auf developer.chrome.com (2024)
- [View Transitions API: Single-Page-Apps ohne Framework](https://www.debugbear.com/blog/view-transitions-spa-without-framework) auf DebugBear (2024)
- [Gleichzeitige und verschachtelte Ansichtsübergänge mit elementbezogenen Ansichtsübergängen ausführen](https://developer.chrome.com/docs/css-ui/view-transitions/element-scoped-view-transitions) auf developer.chrome.com

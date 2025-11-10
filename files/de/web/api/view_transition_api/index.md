---
title: View Transition API
slug: Web/API/View_Transition_API
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{DefaultAPISidebar("View Transition API")}}

Die **View Transition API** bietet eine Mechanismus zur einfachen Erstellung animierter Übergänge zwischen verschiedenen Ansichten einer Website. Dies umfasst die Animation zwischen DOM-Zuständen in einer Single-Page-Anwendung (SPA) und die Animation der Navigation zwischen Dokumenten in einer Multi-Page-Anwendung (MPA).

## Konzepte und Verwendung

View-Übergänge sind eine beliebte Designwahl, um die kognitive Belastung der Benutzer zu reduzieren, ihnen zu helfen, im Kontext zu bleiben, und die wahrgenommene Ladelatenz zu verringern, während sie zwischen Zuständen oder Ansichten einer Anwendung wechseln.

Das Erstellen von View-Übergängen im Web war jedoch historisch gesehen schwierig:

- Übergänge zwischen Zuständen in Single-Page-Anwendungen (SPAs) erfordern in der Regel das Schreiben erheblichen CSS- und JavaScript-Codes, um:
  - Das Laden und die Positionierung von altem und neuem Inhalt zu handhaben.
  - Die alten und neuen Zustände zu animieren, um den Übergang zu erstellen.
  - Zu verhindern, dass versehentliche Benutzerinteraktionen mit dem alten Inhalt Probleme verursachen.
  - Den alten Inhalt zu entfernen, wenn der Übergang abgeschlossen ist.
    Barrierefreiheitsprobleme wie Verlust der Leseposition, Fokusverwirrung und seltsames Verhalten beim Vorlesen von Live-Bereichen können auch auftreten, wenn neuer und alter Inhalt gleichzeitig im DOM vorhanden sind.
- Übergänge zwischen Dokumentansichten (d.h. über Navigationswechsel zwischen verschiedenen Seiten in MPAs) waren historisch unmöglich.

Die View Transition API bietet eine einfache Möglichkeit, die erforderlichen Ansichtsänderungen und Übergangsanimationen für beide oben genannten Anwendungsfälle zu handhaben.

Das Erstellen eines View-Übergangs, der die Standard-Übergangsanimationen des Browsers verwendet, ist sehr schnell durchführbar, und es gibt Funktionen, die es Ihnen ermöglichen, sowohl die Übergangsanimation anzupassen als auch den View-Übergang selbst zu manipulieren (zum Beispiel Umstände anzugeben, unter denen die Animation übersprungen wird), sowohl für SPA- als auch für MPA-View-Übergänge.

Siehe [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using) für weitere Informationen.

## Schnittstellen

- [`ViewTransition`](/de/docs/Web/API/ViewTransition)
  - : Repräsentiert einen View-Übergang und bietet Funktionalitäten, um auf das Erreichen verschiedener Zustände des Übergangs zu reagieren (z.B. bereit, die Animation auszuführen, oder Animation abgeschlossen) oder den Übergang insgesamt zu überspringen.

## Erweiterungen zu anderen Schnittstellen

- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
  - : Startet einen neuen gleichen-Dokument (SPA) View-Übergang und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, um diesen darzustellen.
- [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)
  - : Das Ereignisobjekt für das [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis. Während einer Dokumenten-Navigation erlaubt es Ihnen, den zugehörigen View-Übergang zu manipulieren (indem es Zugang zum relevanten [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt bietet) aus dem Dokument, zu dem navigiert wird, wenn ein View-Übergang durch die Navigation ausgelöst wurde.
- [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)
  - : Das Ereignisobjekt für das [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis. Während einer Dokumenten-Navigation erlaubt es Ihnen, den zugehörigen View-Übergang zu manipulieren (indem es Zugang zum relevanten [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt bietet) aus dem Dokument, von dem aus navigiert wird, wenn ein View-Übergang durch die Navigation ausgelöst wurde. Es bietet auch Zugriff auf Informationen zum Navigationstyp und zu aktuellen und Ziel-Dokumentenhistorieneinträgen.
- Das [`Window`](/de/docs/Web/API/Window) [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis
  - : Wird ausgelöst, wenn ein Dokument erstmals gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "back/forward cache")}} (bfcache) oder {{Glossary("Prerender", "Prerender")}}).
- Das [`Window`](/de/docs/Web/API/Window) [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis
  - : Wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll.

## HTML-Erweiterungen

- [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect)
  - : Identifiziert den wichtigsten Inhalt im zugehörigen Dokument für die erste Ansicht der Seite durch den Benutzer. Das Rendern des Dokuments wird blockiert, bis der kritische Inhalt analysiert wurde, um einen konsistenten ersten Anstrich — und damit einen Ansichtstransition — in allen unterstützenden Browsern sicherzustellen.

## CSS-Erweiterungen

### At-Regeln

- {{cssxref("@view-transition")}}
  - : Im Falle einer Dokumenten-Navigation wird `@view-transition` verwendet, um sowohl das aktuelle als auch das Ziel-Dokument so zu gestalten, dass sie einem View-Übergang unterzogen werden.

### Eigenschaften

- {{cssxref("view-transition-name")}}
  - : Gibt den View-Übergangs-Snapshot an, an dem ausgewählte Elemente teilnehmen werden, was es einem Element ermöglicht, während eines View-Übergangs separat vom Rest der Seite animiert zu werden.
- {{cssxref("view-transition-class")}}
  - : Bietet eine zusätzliche Methode zum Stylen ausgewählter Elemente, die einen `view-transition-name` haben.

### Pseudo-Klassen

- {{cssxref(":active-view-transition")}}
  - : Passt auf Elemente, wenn ein View-Übergang im Gange ist.
- {{cssxref(":active-view-transition-type()")}}
  - : Passt auf Elemente, wenn ein View-Übergang eines bestimmten Typs im Gange ist.

### Pseudo-Elemente

- {{cssxref("::view-transition")}}
  - : Der Wurzelpunkt des View-Übergangs-Overlays, das alle View-Übergänge enthält und über allen anderen Seiteninhalten liegt.
- {{cssxref("::view-transition-group()")}}
  - : Der Wurzelpunkt eines einzelnen View-Übergangs.
- {{cssxref("::view-transition-image-pair()")}}
  - : Der Container für die alten und neuen Ansichten eines View-Übergangs — vor und nach dem Übergang.
- {{cssxref("::view-transition-old()")}}
  - : Ein statisches Abbild der alten Ansicht, vor dem Übergang.
- {{cssxref("::view-transition-new()")}}
  - : Eine Live-Darstellung der neuen Ansicht, nach dem Übergang.

## Beispiele

- [Grundlegende View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/): Eine grundlegende Bildgalerie-Demo mit View-Übergängen, die separate Animationen zwischen alten und neuen Bildern sowie alten und neuen Bildunterschriften zeigt.
- [Grundlegende View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/): Eine beispielhafte Zwei-Seiten-Website, die die Verwendung von Dokumentenübergreifenden (MPA) View-Übergängen demonstriert und einen benutzerdefinierten "Hochwisch"-Übergang bietet, wenn zwischen den beiden Seiten navigiert wird.
- [View transitions `match-element` Demo](/de/docs/Web/CSS/Reference/Properties/view-transition-name#using_the_match-element_value): Eine SPA mit animierten Listenpunkten, die die Verwendung des `match-element`-Werts der `view-transition-name`-Eigenschaft zur Animation einzelner Elemente zeigt.
- [HTTP 203 Playlist](https://http203-playlist.netlify.app/): Eine Video-Player-Demo-App, die mehrere verschiedene SPA-View-Übergänge bietet, von denen viele in [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) erklärt werden.
- [Chrome DevRel View Transitions Demos](https://view-transitions.chrome.dev/): Eine Reihe von Demos zur View Transition API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) auf developer.chrome.com (2024)
- [View Transition API: Erstellen von sanften Seitenübergängen](https://stackdiary.com/view-transitions-api/) auf stackdiary.com (2023)
- [View Transitions API: Single Page Apps ohne ein Framework](https://www.debugbear.com/blog/view-transitions-spa-without-framework) auf DebugBear (2024)

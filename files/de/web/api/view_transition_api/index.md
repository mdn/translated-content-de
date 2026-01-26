---
title: View Transition API
slug: Web/API/View_Transition_API
l10n:
  sourceCommit: baf0cb6bfe8bf2418122300d3f93e3aa94f72dca
---

{{DefaultAPISidebar("View Transition API")}}

Die **View Transition API** bietet eine Möglichkeit, animierte Übergänge zwischen verschiedenen Ansichten einer Website einfach zu erstellen. Dies umfasst Animationen zwischen DOM-Zuständen in einer Single-Page-Anwendung (SPA) sowie Animationen der Navigation zwischen Dokumenten in einer Multi-Page-Anwendung (MPA).

## Konzepte und Verwendung

Ansichtsübergänge sind eine beliebte Designwahl, um die kognitive Belastung der Nutzer zu reduzieren, ihnen zu helfen, im Kontext zu bleiben, und die wahrgenommene Ladezeit zu verkürzen, während sie zwischen Zuständen oder Ansichten einer Anwendung wechseln.

Jedoch war es historisch gesehen schwierig, Ansichtsübergänge im Web zu erstellen:

- Übergänge zwischen Zuständen in Single-Page-Anwendungen (SPAs) erforderten oft signifikanten CSS- und JavaScript-Aufwand, um:
  - Das Laden und Positionieren der alten und neuen Inhalte zu verwalten.
  - Die alten und neuen Zustände zu animieren, um den Übergang zu schaffen.
  - Unbeabsichtigte Benutzerinteraktionen mit dem alten Inhalt zu verhindern, die Probleme verursachen könnten.
  - Den alten Inhalt zu entfernen, sobald der Übergang abgeschlossen ist.
    Zugänglichkeitsprobleme wie der Verlust der Leseposition, Fokusverwirrung und seltsames Verhalten bei Ankündigungen in Live-Bereichen können ebenfalls entstehen, wenn sowohl der neue als auch der alte Inhalt gleichzeitig im DOM präsent sind.
- Dokumentübergreifende Ansichtsübergänge (d.h. über Navigationsvorgänge zwischen verschiedenen Seiten in MPAs) waren historisch nicht möglich.

Die View Transition API bietet eine einfache Möglichkeit, die erforderlichen Ansichtsänderungen und Übergangsanimationen für beide oben genannten Anwendungsfälle zu handhaben.

Einen Ansichtsübergang zu erstellen, der die Standard-Übergangsanimationen des Browsers verwendet, ist sehr schnell durchzuführen, und es gibt Funktionen, die es ermöglichen, sowohl die Übergangsanimation anzupassen als auch den Ansichtsübergang selbst zu beeinflussen (zum Beispiel Umstände festzulegen, unter denen die Animation übersprungen wird), sowohl für SPA- als auch MPA-Ansichtsübergänge.

Siehe [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using) für weitere Informationen.

## Schnittstellen

- [`CSSViewTransitionRule`](/de/docs/Web/API/CSSViewTransitionRule)
  - : Repräsentiert eine {{cssxref("@view-transition")}} [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules).
- [`ViewTransition`](/de/docs/Web/API/ViewTransition)
  - : Repräsentiert einen Ansichtsübergang und bietet Funktionalität, um auf das Erreichen verschiedener Übergangszustände zu reagieren (z. B. bereit zum Starten der Animation oder Animation abgeschlossen) oder den Übergang ganz zu überspringen.
- [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet)
  - : Ein [mengenartiges Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das die Typen eines aktiven Ansichtsübergangs repräsentiert, wodurch die Typen während eines Übergangs in Echtzeit abgefragt oder modifiziert werden können.

## Erweiterungen zu anderen Schnittstellen

- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
  - : Startet einen neuen dokumentinternen (SPA) Ansichtsübergang und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, das ihn repräsentiert.
- [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)
  - : Das Ereignisobjekt für das [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis. Während einer dokumentübergreifenden Navigation ermöglicht es Ihnen, den zugehörigen Ansichtsübergang zu manipulieren (indem der Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekt bereitgestellt wird) aus dem Dokument, zu dem navigiert wird, wenn ein Ansichtsübergang von der Navigation ausgelöst wurde.
- [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)
  - : Das Ereignisobjekt für das [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis. Während einer dokumentübergreifenden Navigation ermöglicht es Ihnen, den zugehörigen Ansichtsübergang zu manipulieren (indem der Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekt bereitgestellt wird) aus dem Dokument, von dem aus navigiert wird, wenn ein Ansichtsübergang von der Navigation ausgelöst wurde. Es bietet auch Zugriff auf Informationen über den Navigationstyp und die aktuellen sowie die Zieldokument-Verlaufeinträge.
- Das [`Window`](/de/docs/Web/API/Window) [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis
  - : Wird ausgelöst, wenn ein Dokument erstmals gerendert wird, entweder beim Laden eines frischen Dokuments aus dem Netzwerk oder bei der Aktivierung eines Dokuments (entweder aus dem {{Glossary("bfcache", "Back/Forward Cache")}} (bfcache) oder {{Glossary("Prerender", "Prerender")}}).
- Das [`Window`](/de/docs/Web/API/Window) [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis
  - : Wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll.

## HTML-Ergänzungen

- [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect)
  - : Identifiziert den kritischsten Inhalt im zugehörigen Dokument für die anfängliche Ansicht der Seite für den Benutzer. Das Rendern des Dokuments wird blockiert, bis der kritische Inhalt analysiert wurde, was ein konsistentes erstes Rendering — und folglich einen Ansichtsübergang — über alle unterstützten Browser hinweg sicherstellt.

## CSS-Ergänzungen

### At-rules

- {{cssxref("@view-transition")}}
  - : Im Falle einer dokumentübergreifenden Navigation wird `@view-transition` verwendet, um das aktuelle und das Zieldokument in einen Ansichtsübergang einzubeziehen.

### Eigenschaften

- {{cssxref("view-transition-name")}}
  - : Gibt den Ansichtsübergangs-Snapshot an, an dem ausgewählte Elemente teilnehmen werden, was es ermöglicht, dass ein Element während eines Ansichtsübergangs unabhängig vom Rest der Seite animiert wird.
- {{cssxref("view-transition-class")}}
  - : Bietet eine zusätzliche Methode zum Stylen von ausgewählten Elementen, die einen `view-transition-name` haben.

### Pseudo-Klassen

- {{cssxref(":active-view-transition")}}
  - : Passt auf Elemente, wenn ein Ansichtsübergang im Gange ist.
- {{cssxref(":active-view-transition-type()")}}
  - : Passt auf Elemente, wenn ein Ansichtsübergang mit einem oder mehreren spezifischen Typen im Gange ist.

### Pseudo-Elemente

- {{cssxref("::view-transition")}}
  - : Der Ursprung der Ansichtsübergangsüberlagerung, die alle Ansichtsübergänge enthält und über allen anderen Seiteninhalten sitzt.
- {{cssxref("::view-transition-group()")}}
  - : Der Ursprung eines einzigen Ansichtsübergangs.
- {{cssxref("::view-transition-image-pair()")}}
  - : Der Container für die alten und neuen Ansichten eines Ansichtsübergangs — vor und nach dem Übergang.
- {{cssxref("::view-transition-old()")}}
  - : Eine statische Momentaufnahme der alten Ansicht vor dem Übergang.
- {{cssxref("::view-transition-new()")}}
  - : Eine Live-Darstellung der neuen Ansicht nach dem Übergang.

## Beispiele

- [Grundlegende Ansichtsübergänge SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/): Eine einfache Bildergalerie-Demo mit Ansichtsübergängen, die separate Animationen zwischen alten und neuen Bildern sowie alten und neuen Bildunterschriften zeigt.
- [Grundlegende Ansichtsübergänge MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/): Eine Beispielseite mit zwei Seiten, die die Verwendung von dokumentübergreifenden (MPA) Ansichtsübergängen demonstriert und einen benutzerdefinierten "Swipe up"-Übergang bietet, wenn zwischen den beiden Seiten navigiert wird.
- [Ansichtsübergänge `match-element`-Demo](/de/docs/Web/CSS/Reference/Properties/view-transition-name#using_the_match-element_value): Eine SPA mit animierten Listenelementen, die die Verwendung des `match-element`-Werts der `view-transition-name`-Eigenschaft zur Animation individueller Elemente demonstriert.
- [HTTP 203-Playlist](https://http203-playlist.netlify.app/): Eine Videoplayer-Demo-Anwendung, die mehrere verschiedene SPA-Ansichtsübergänge beinhaltet, von denen viele in [Fließende Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) erklärt werden.
- [Chrome DevRel Ansichtsübergänge-Demos](https://view-transitions.chrome.dev/): Eine Serie von View Transition API-Demos.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fließende Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) auf developer.chrome.com (2024)
- [View Transition API: Erstellung fließender Seitenübergänge](https://stackdiary.com/view-transitions-api/) auf stackdiary.com (2023)
- [View Transitions API: Single Page Apps ohne Framework](https://www.debugbear.com/blog/view-transitions-spa-without-framework) auf DebugBear (2024)

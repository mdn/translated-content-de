---
title: View Transition API
slug: Web/API/View_Transition_API
l10n:
  sourceCommit: 3114d1b72a4d46d314caa7f73f775a1f6f7407dc
---

{{DefaultAPISidebar("View Transition API")}}

Die **View Transition API** bietet einen Mechanismus zur einfachen Erstellung von animierten Übergängen zwischen verschiedenen Ansichten von Websites und Elementen. Dies umfasst die Animation zwischen DOM-Zuständen in einer Single-Page-App (SPA) und die Animation der Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Konzepte und Nutzung

View-Übergänge sind eine beliebte Designwahl, um die kognitive Belastung der Benutzer zu verringern, ihnen zu helfen, im Kontext zu bleiben, und die wahrgenommene Ladezeit zu reduzieren, während sie zwischen Zuständen oder Ansichten einer Anwendung wechseln.

Allerdings war das Erstellen von View-Übergängen im Web historisch schwierig:

- Übergänge zwischen Zuständen in Single-Page-Apps (SPAs) erfordern in der Regel das Schreiben von erheblichem CSS und JavaScript, um:
  - Das Laden und Positionieren der alten und neuen Inhalte zu behandeln.
  - Die alten und neuen Zustände zu animieren, um den Übergang zu schaffen.
  - Zu verhindern, dass versehentliche Benutzerinteraktionen mit den alten Inhalten Probleme verursachen.
  - Die alten Inhalte zu entfernen, sobald der Übergang abgeschlossen ist.
    Barrierefreiheitsprobleme wie der Verlust der Leseposition, Verwirrung bei der Fokussierung und seltsames Verhalten bei Live-Bereichsansagen können auch auftreten, wenn sowohl die neuen als auch die alten Inhalte gleichzeitig im DOM vorhanden sind.
- Übergänge über Dokumente hinweg (d.h. bei Navigationen zwischen verschiedenen Seiten in MPAs) waren historisch gesehen unmöglich.

Die View Transition API bietet eine einfache Möglichkeit, die erforderlichen Ansichtsänderungen und Übergangsanimationen für beide Anwendungsfälle zu handhaben.

Das Erstellen eines Ansichtsübergangs, der die Standardübergangsanimationen des Browsers verwendet, ist sehr schnell durchzuführen, und es gibt Funktionen, die es Ihnen ermöglichen, sowohl die Übergangsanimation als auch den Ansichtsübergang selbst anzupassen und zu manipulieren (zum Beispiel Umstände zu spezifizieren, unter denen die Animation übersprungen wird) für sowohl SPA- als auch MPA-Ansichtsübergänge.

Weitere Informationen finden Sie unter:

- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using)
- [Verwendung von View-Übergangstypen](/de/docs/Web/API/View_Transition_API/Using_types)
- [Verwendung von elementbezogenen View-Übergängen](/de/docs/Web/API/View_Transition_API/Using_element-scoped)

## Schnittstellen

- [`CSSViewTransitionRule`](/de/docs/Web/API/CSSViewTransitionRule)
  - : Repräsentiert eine {{cssxref("@view-transition")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules).
- [`ViewTransition`](/de/docs/Web/API/ViewTransition)
  - : Repräsentiert einen Ansichtsübergang und bietet Funktionalität, um auf das Erreichen verschiedener Zustände des Übergangs zu reagieren (z. B. bereit, die Animation auszuführen oder die Animation abzuschließen) oder den Übergang ganz zu überspringen.
- [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet)
  - : Ein [mengenähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das die Typen eines aktiven Ansichtsübergangs darstellt, wodurch die Typen während eines Übergangs dynamisch abgefragt oder modifiziert werden können.

## Erweiterungen zu anderen Schnittstellen

- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
  - : Startet einen neuen gleichseitigen (SPA) Ansichtsübergang und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekt zurück, um ihn darzustellen.
- [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)
  - : Das Ereignisobjekt für das [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis. Während einer cross-Dokument-Navigation, ermöglicht es Ihnen, den zugehörigen Ansichtsübergang (und gewährt Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekt) von dem Dokument aus zu manipulieren, zu dem navigiert wird, wenn ein Ansichtsübergang durch die Navigation ausgelöst wurde.
- [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)
  - : Das Ereignisobjekt für das [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis. Während einer cross-Dokument-Navigation, ermöglicht es Ihnen, den zugehörigen Ansichtsübergang (und gewährt Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekt) von dem Dokument aus zu manipulieren, von dem aus navigiert wird, wenn ein Ansichtsübergang durch die Navigation ausgelöst wurde. Es bietet auch Zugriff auf Informationen über den Navigationstyp und die aktuellen sowie die Ziel-Dokumenthistory-Einträge.
- Das [`Window`](/de/docs/Web/API/Window) [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis
  - : Wird ausgelöst, wenn ein Dokument zum ersten Mal gerendert wird, entweder beim Laden eines frischen Dokuments aus dem Netzwerk oder durch Aktivierung eines Dokuments (entweder aus dem {{Glossary("bfcache", "Back/Forward Cache")}} (bfcache) oder {{Glossary("Prerender", "prerender")}}).
- Das [`Window`](/de/docs/Web/API/Window) [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis
  - : Wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll.

## HTML-Erweiterungen

- [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect)
  - : Identifiziert den wichtigsten Inhalt im zugehörigen Dokument für die erste Ansicht der Seite durch den Benutzer. Das Rendern des Dokuments wird blockiert, bis der wichtige Inhalt analysiert wurde, um einen konsistenten ersten Anstrich — und daher einen Ansichtsübergang — in allen unterstützenden Browsern zu gewährleisten.

## CSS-Erweiterungen

### At-Regeln

- {{cssxref("@view-transition")}}
  - : Im Falle einer cross-Dokument-Navigation wird `@view-transition` verwendet, um das aktuelle und das Zieldokument für einen Ansichtsübergang zu aktivieren.

### Eigenschaften

- {{cssxref("view-transition-name")}}
  - : Gibt das Ansichtsübergangs-Snapshot an, an dem die ausgewählten Elemente teilnehmen werden, was es einem Element ermöglicht, während eines Ansichtsübergangs separat vom Rest der Seite animiert zu werden.
- {{cssxref("view-transition-class")}}
  - : Bietet eine zusätzliche Methode zum Styling ausgewählter Elemente, die einen `view-transition-name` haben.
- {{cssxref("view-transition-scope")}}
  - : Ermöglicht die Auffindbarkeit von Elementen mit festgelegten `view-transition-name`-Werten (und damit die Erstellung von Ansichtsübergangs-[Snapshots](/de/docs/Web/API/View_Transition_API/Using#an_aside_on_snapshots)), um auf ein bestimmtes Element-Teilbaum isoliert zu werden.

### Pseudoklassen

- {{cssxref(":active-view-transition")}}
  - : Entspricht den Elementen, wenn ein Ansichtsübergang in Bearbeitung ist.
- {{cssxref(":active-view-transition-type()")}}
  - : Entspricht den Elementen, wenn ein Ansichtsübergang mit einem oder mehreren spezifischen Typen in Bearbeitung ist.

### Pseudoelemente

- {{cssxref("::view-transition")}}
  - : Die Wurzel des Ansichtsübergangs-Overlays, das alle Ansichtsübergänge enthält und über allen anderen Seiteninhalten liegt.
- {{cssxref("::view-transition-group()")}}
  - : Die Wurzel eines einzelnen Ansichtsübergangs.
- {{cssxref("::view-transition-image-pair()")}}
  - : Der Container für alte und neue Ansichten eines Ansichtsübergangs — vor und nach dem Übergang.
- {{cssxref("::view-transition-old()")}}
  - : Ein statisches Snapshot der alten Ansicht, vor dem Übergang.
- {{cssxref("::view-transition-new()")}}
  - : Eine Live-Darstellung der neuen Ansicht, nach dem Übergang.

## Beispiele

- [Grundlegende View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/): Ein grundlegendes Bildergalerie-Demo mit Ansichtsübergängen, das separate Animationen zwischen alten und neuen Bildern sowie alten und neuen Beschriftungen zeigt.
- [Grundlegende View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/): Ein Beispiel für eine zweiseitige Website, die die Nutzung von cross-Dokument (MPA) Ansichtsübergängen demonstriert und einen benutzerdefinierten "Swipe-up"-Übergang bietet, wenn zwischen den beiden Seiten navigiert wird.
- [View transitions `match-element` Demo](/de/docs/Web/CSS/Reference/Properties/view-transition-name#using_the_match-element_value): Eine SPA mit animierten Listenelementen, die die Verwendung des `match-element` Werts der `view-transition-name`-Eigenschaft zeigt, um einzelne Elemente zu animieren.
- [HTTP 203 Playlist](https://http203-playlist.netlify.app/): Eine Videoplayer-Demo-App, die mehrere verschiedene SPA-Ansichtsübergänge bietet, von denen viele in [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) erklärt werden.
- [Chrome DevRel View Transitions Demos](https://view-transitions.chrome.dev/): Eine Reihe von Demos der View Transition API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) auf developer.chrome.com (2024)
- [View Transition API: Creating Smooth Page Transitions](https://stackdiary.com/view-transitions-api/) auf stackdiary.com (2023)
- [View Transitions API: Single Page Apps Without a Framework](https://www.debugbear.com/blog/view-transitions-spa-without-framework) auf DebugBear (2024)
- [Run concurrent and nested view transitions with element-scoped view transitions](https://developer.chrome.com/docs/css-ui/view-transitions/element-scoped-view-transitions) auf developer.chrome.com

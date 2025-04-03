---
title: View Transition API
slug: Web/API/View_Transition_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("View Transition API")}}

Die **View Transition API** bietet einen Mechanismus zur einfachen Erstellung von animierten Übergängen zwischen verschiedenen Website-Ansichten. Dies umfasst die Animation zwischen DOM-Zuständen in einer Single-Page-App (SPA) und die Animation der Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Konzepte und Nutzung

Sichtübergänge sind eine beliebte Designwahl, um die kognitive Belastung der Benutzer zu reduzieren, ihnen zu helfen, im Kontext zu bleiben, und die wahrgenommene Ladezeit zu reduzieren, während sie zwischen Zuständen oder Ansichten einer Anwendung wechseln.

Das Erstellen von Sichtübergängen im Web war jedoch historisch gesehen schwierig:

- Übergänge zwischen Zuständen in Single-Page-Apps (SPAs) erfordern in der Regel das Schreiben erheblicher Mengen an CSS und JavaScript, um:
  - Das Laden und die Positionierung der alten und neuen Inhalte zu handhaben.
  - Die alten und neuen Zustände zu animieren, um den Übergang zu schaffen.
  - Unbeabsichtigte Benutzerinteraktionen mit den alten Inhalten zu verhindern, die Probleme verursachen könnten.
  - Die alten Inhalte zu entfernen, sobald der Übergang abgeschlossen ist.
    Barrierefreiheitsprobleme wie der Verlust der Leseposition, Verwirrung bezüglich des Fokus und merkwürdiges Verhalten bei Live-Region-Ankündigungen können ebenfalls auftreten, wenn die neuen und alten Inhalte gleichzeitig im DOM vorhanden sind.
- Übergreifende Dokumentenübergänge (d.h. beim Navigieren zwischen verschiedenen Seiten in MPAs) waren historisch gesehen unmöglich.

Die View Transition API bietet eine einfache Möglichkeit, die erforderlichen Sichtänderungen und Übergangsanimationen für beide oben genannten Anwendungsfälle zu handhaben.

Das Erstellen eines Sichtübergangs, der die Standardübergangsanimationen des Browsers verwendet, ist sehr schnell durchzuführen, und es gibt Funktionen, die es Ihnen ermöglichen, sowohl die Übergangsanimation anzupassen als auch den Sichtübergang selbst zu manipulieren (zum Beispiel die Umstände anzugeben, unter denen die Animation übersprungen wird), sowohl für SPA- als auch MPA-Sichtübergänge.

Siehe [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using) für weitere Informationen.

## Schnittstellen

- [`ViewTransition`](/de/docs/Web/API/ViewTransition)
  - : Repräsentiert einen Sichtübergang und bietet Funktionen, um auf das Erreichen unterschiedlicher Zustände des Übergangs zu reagieren (z. B. bereit für die Animation oder abgeschlossene Animation) oder den Übergang ganz zu überspringen.

## Erweiterungen zu anderen Schnittstellen

- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
  - : Startet einen neuen Single-Document- (SPA) Sichtübergang und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, um ihn darzustellen.
- [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)
  - : Das Ereignisobjekt für das [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis. Während einer übergreifenden Dokumentennavigation ermöglicht es, den zugehörigen Sichtübergang zu manipulieren (Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt), aus dem Dokument, zu dem navigiert wird, wenn ein Sichtübergang durch die Navigation ausgelöst wurde.
- [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)
  - : Das Ereignisobjekt für das [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis. Während einer übergreifenden Dokumentennavigation ermöglicht es, den zugehörigen Sichtübergang zu manipulieren (Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt), aus dem Dokument, von dem navigiert wird, wenn ein Sichtübergang durch die Navigation ausgelöst wurde. Es bietet außerdem Zugriff auf Informationen zum Navigationstyp und aktuellen sowie Ziel-Dokumentverlaufseinträgen.
- Das [`Window`](/de/docs/Web/API/Window) [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis
  - : Wird ausgelöst, wenn ein Dokument erstmals gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "Back/Forward Cache")}} (bfcache) oder {{Glossary("Prerender", "Prerender")}}).
- Das [`Window`](/de/docs/Web/API/Window) [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis
  - : Wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll.

## HTML-Ergänzungen

- [`<link rel="expect">`](/de/docs/Web/HTML/Attributes/rel#expect)
  - : Identifiziert die wichtigsten Inhalte im zugehörigen Dokument für die erste Ansicht des Benutzers auf der Seite. Das Rendern des Dokuments wird blockiert, bis die kritischen Inhalte analysiert sind, um einen konsistenten ersten Anstrich — und damit Sichtübergang — über alle unterstützenden Browser hinweg zu gewährleisten.

## CSS-Ergänzungen

### At-Regeln

- {{cssxref("@view-transition")}}
  - : Im Falle einer übergreifenden Dokumentennavigation wird `@view-transition` verwendet, um das aktuelle und Ziel-Dokument dazu zu bringen, einen Sichtübergang zu durchlaufen.

### Eigenschaften

- {{cssxref("view-transition-name")}}
  - : Verleiht dem ausgewählten Element einen separaten identifizierenden Namen und führt dazu, dass es an einem separaten Sichtübergang vom Haupt-Sichtübergang teilnimmt — oder an keinem Sichtübergang, wenn der Wert `none` angegeben ist.

### Pseudoelemente

- {{cssxref("::view-transition")}}
  - : Das Root des Sichtübergangs-Overlays, das alle Sichtübergänge enthält und über allen anderen Seiteninhalten liegt.
- {{cssxref("::view-transition-group", "::view-transition-group()")}}
  - : Das Root eines einzelnen Sichtübergangs.
- {{cssxref("::view-transition-image-pair", "::view-transition-image-pair()")}}
  - : Der Container für alte und neue Ansichten eines Sichtübergangs — vor und nach dem Übergang.
- {{cssxref("::view-transition-old", "::view-transition-old()")}}
  - : Eine statische Momentaufnahme der alten Ansicht, vor dem Übergang.
- {{cssxref("::view-transition-new", "::view-transition-new()")}}
  - : Eine Live-Darstellung der neuen Ansicht, nach dem Übergang.

## Beispiele

- [Grundlegende View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/): Eine grundlegende Galerie-Demo mit Sichtübergängen, die separate Animationen zwischen alten und neuen Bildern sowie alten und neuen Bildunterschriften bietet.
- [Grundlegende View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/): Eine Beispiel-Website mit zwei Seiten, die die Verwendung von übergreifenden Dokumenten- (MPA) Sichtübergängen demonstriert und einen benutzerdefinierten "Swipe-Up"-Übergang zwischen den beiden Seiten bietet.
- [HTTP 203 Playlist](https://http203-playlist.netlify.app/): Eine Demo-App für einen Videoplayer, die mehrere verschiedene SPA-Sichtübergänge bietet, von denen viele in [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) erklärt werden.
- [Liste der Chrome DevRel-Teammitglieder](https://view-transitions.chrome.dev/profiles/mpa/): Eine einfache Teamprofilseiten-App, die zeigt, wie man die [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) und [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignisse verwendet, um ausgehende und eingehende Animationen eines übergreifenden Dokumentenübergangs basierend auf den "Von"- und "Zu"-URLs anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) auf developer.chrome.com (2024)
- [View Transition API: Erstellen von Sanften Seitenübergängen](https://stackdiary.com/view-transitions-api/) auf stackdiary.com (2023)
- [View Transitions API: Single Page Apps ohne Framework](https://www.debugbear.com/blog/view-transitions-spa-without-framework) auf DebugBear (2024)

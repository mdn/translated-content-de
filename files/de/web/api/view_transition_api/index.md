---
title: View Transition API
slug: Web/API/View_Transition_API
l10n:
  sourceCommit: 5de337827007e2a7fb89261215b6dbcf4caafafa
---

{{DefaultAPISidebar("View Transition API")}}

Die **View Transition API** bietet einen Mechanismus, um einfach animierte Übergänge zwischen verschiedenen Ansichten einer Website zu erstellen. Dies umfasst die Animation zwischen DOM-Zuständen in einer Single-Page-App (SPA) und die Animation der Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Konzepte und Nutzung

Ansichtsübergänge sind eine beliebte Designwahl, um die kognitive Belastung der Nutzer zu reduzieren, ihnen zu helfen, im Kontext zu bleiben, und die wahrgenommene Ladezeit zu verringern, während sie zwischen Zuständen oder Ansichten einer Anwendung wechseln.

Allerdings war es historisch gesehen schwierig, Ansichtsübergänge im Web zu erstellen:

- Übergänge zwischen Zuständen in Single-Page-Apps (SPAs) erfordern in der Regel erhebliche CSS- und JavaScript-Arbeit, um:
  - Das Laden und die Positionierung des alten und neuen Inhalts zu handhaben.
  - Die alten und neuen Zustände zu animieren, um den Übergang zu erstellen.
  - Zu verhindern, dass versehentliche Nutzerinteraktionen mit dem alten Inhalt Probleme verursachen.
  - Den alten Inhalt nach Abschluss des Übergangs zu entfernen.
    Barrierefreiheitsprobleme wie der Verlust der Leseposition, Verwirrung des Fokus und seltsames Verhalten der Live-Region-Ankündigung können ebenfalls, infolge der gleichzeitigen Präsenz des alten und neuen Inhalts im DOM, auftreten.
- Dokumentübergreifende Ansichtsübergänge (d.h. über Navigationen zwischen verschiedenen Seiten in MPAs) waren historisch gesehen unmöglich.

Die View Transition API bietet eine einfache Möglichkeit, die erforderlichen Ansichtsänderungen und Übergangsanimationen für beide oben genannten Anwendungsfälle zu handhaben.

Das Erstellen eines Ansichtsübergangs, der die Standardübergangsanimationen des Browsers verwendet, ist sehr schnell umsetzbar, und es gibt Funktionen, die es Ihnen ermöglichen, sowohl die Übergangsanimation anzupassen als auch den Ansichtsübergang selbst zu manipulieren (zum Beispiel die Umstände festzulegen, unter denen die Animation übersprungen wird), sowohl für SPA als auch MPA Ansichtsübergänge.

Weitere Informationen finden Sie unter [Using the View Transition API](/de/docs/Web/API/View_Transition_API/Using).

## Schnittstellen

- [`ViewTransition`](/de/docs/Web/API/ViewTransition)
  - : Repräsentiert einen Ansichtsübergang und bietet Funktionen zum Reagieren auf den Übergang, wenn er verschiedene Zustände erreicht (z.B. bereit für die Animation oder Animation abgeschlossen) oder den Übergang ganz zu überspringen.

## Erweiterungen zu anderen Schnittstellen

- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
  - : Startet einen neuen, gleichen Dokument- (SPA) Ansichtsübergang und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, um ihn zu repräsentieren.
- [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)
  - : Das Ereignisobjekt für das [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis. Bei einer dokumentübergreifenden Navigation ermöglicht es Ihnen, den zugehörigen Ansichtsübergang zu manipulieren (mit Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt) vom Dokument aus, zu dem navigiert wird, wenn ein Ansichtsübergang durch die Navigation ausgelöst wurde.
- [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)
  - : Das Ereignisobjekt für das [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis. Bei einer dokumentübergreifenden Navigation ermöglicht es Ihnen, den zugehörigen Ansichtsübergang zu manipulieren (mit Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt) vom Dokument aus, von dem aus navigiert wird, wenn ein Ansichtsübergang durch die Navigation ausgelöst wurde. Es bietet auch Zugriff auf Informationen zur Navigationsart und den aktuellen, sowie den Ziel-Dokumentgeschichteeinträgen.
- Das [`Window`](/de/docs/Web/API/Window) [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis
  - : Wird ausgelöst, wenn ein Dokument das erste Mal gerendert wird, entweder beim Laden eines frischen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "back/forward cache")}} (bfcache) oder {{Glossary("Prerender", "prerender")}}).
- Das [`Window`](/de/docs/Web/API/Window) [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis
  - : Wird ausgelöst, wenn ein Dokument kurz vor dem Entladen aufgrund einer Navigation steht.

## HTML-Ergänzungen

- [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect)
  - : Identifiziert die kritischsten Inhalte im zugehörigen Dokument für die initiale Ansicht der Seite durch den Nutzer. Das Dokument-Rendering wird blockiert, bis die kritischen Inhalte erkannt wurden, um einen konsistenten ersten Anstrich zu gewährleisten — und somit auch einen konsistenten Ansichtsübergang – in allen unterstützenden Browsern.

## CSS-Ergänzungen

### At-Regeln

- {{cssxref("@view-transition")}}
  - : Im Falle einer dokumentübergreifenden Navigation wird `@view-transition` verwendet, um das aktuelle und das Ziel-Dokument in einen Ansichtsübergang einzubeziehen.

### Eigenschaften

- {{cssxref("view-transition-name")}}
  - : Verleiht dem ausgewählten Element einen separaten Identifikationsnamen und bewirkt, dass es an einem separaten Ansichtsübergang, als dem Root-Ansichtsübergang — oder keinem Ansichtsübergang, wenn der Wert `none` angegeben ist.
- {{cssxref("view-transition-class")}}
  - : Bietet eine zusätzliche Methode, um ausgewählte Elemente, die einen `view-transition-name` haben, zu stylen.

### Pseudoelemente

- {{cssxref("::view-transition")}}
  - : Der Ursprung des Ansichtsübergangs-Overlays, das alle Ansichtsübergänge enthält und über allen anderen Seiteninhalten liegt.
- {{cssxref("::view-transition-group()")}}
  - : Der Ursprung eines einzelnen Ansichtsübergangs.
- {{cssxref("::view-transition-image-pair()")}}
  - : Der Container für die alten und neuen Ansichten eines Ansichtsübergangs — vor und nach dem Übergang.
- {{cssxref("::view-transition-old()")}}
  - : Eine statische Momentaufnahme der alten Ansicht, vor dem Übergang.
- {{cssxref("::view-transition-new()")}}
  - : Eine Live-Darstellung der neuen Ansicht, nach dem Übergang.

## Beispiele

- [Basic View Transitions SPA demo](https://mdn.github.io/dom-examples/view-transitions/spa/): Eine grundlegende Bildgalerie-Demo mit Ansichtsübergängen, die separate Animationen zwischen alten und neuen Bildern sowie alten und neuen Bildunterschriften zeigt.
- [Basic View Transitions MPA demo](https://mdn.github.io/dom-examples/view-transitions/mpa/): Eine Beispielseite mit zwei Seiten, die die Nutzung von dokumentübergreifenden (MPA) Ansichtsübergängen demonstriert, bietet einen benutzerdefinierten "hochwischen"-Übergang, wenn zwischen den beiden Seiten navigiert wird.
- [HTTP 203 playlist](https://http203-playlist.netlify.app/): Eine Videoplayer-Demo-App, die mehrere verschiedene SPA-Ansichtsübergänge zeigt, von denen viele in [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) erklärt werden.
- [List of Chrome DevRel team members](https://view-transitions.chrome.dev/profiles/mpa/): Eine einfache Teamprofilseite-App, die zeigt, wie die [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)- und [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignisse verwendet werden, um die ausgehenden und eingehenden Animationen eines dokumentübergreifenden Ansichtsübergangs basierend auf den "von" und "zu" URLs anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) auf developer.chrome.com (2024)
- [View Transition API: Creating Smooth Page Transitions](https://stackdiary.com/view-transitions-api/) auf stackdiary.com (2023)
- [View Transitions API: Single Page Apps Without a Framework](https://www.debugbear.com/blog/view-transitions-spa-without-framework) auf DebugBear (2024)

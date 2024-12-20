---
title: View Transition API
slug: Web/API/View_Transition_API
l10n:
  sourceCommit: 0f7f19a62e8dadb2da69f8801db76c2eab2ff8f8
---

{{DefaultAPISidebar("View Transition API")}}

Die **View Transition API** bietet einen Mechanismus zur einfachen Erstellung von animierten Übergängen zwischen verschiedenen Ansichten einer Website. Dies umfasst das Animieren zwischen DOM-Zuständen in einer Single-Page-App (SPA) und das Animieren der Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Konzepte und Verwendung

Ansichtsübergänge sind eine beliebte Designwahl, um die kognitive Belastung der Benutzer zu reduzieren, ihnen den Kontext beizubehalten und die wahrgenommene Latenzzeit beim Bewegen zwischen Zuständen oder Ansichten einer Anwendung zu verringern.

Allerdings war das Erstellen von Ansichtsübergängen im Web historisch gesehen schwierig:

- Übergänge zwischen Zuständen in Single-Page-Apps (SPAs) erfordern häufig das Schreiben umfangreicher CSS- und JavaScript-Codes, um:
  - Das Laden und Positionieren der alten und neuen Inhalte zu handhaben.
  - Die alten und neuen Zustände zu animieren, um den Übergang zu schaffen.
  - Unbeabsichtigte Benutzerinteraktionen mit dem alten Inhalt zu verhindern, die Probleme verursachen könnten.
  - Den alten Inhalt zu entfernen, sobald der Übergang abgeschlossen ist.
    Barrierefreiheitsprobleme wie der Verlust der Leseposition, Verwirrung durch fehlenden Fokus und merkwürdiges Verhalten bei Live-Regionen-Ankündigungen können ebenfalls auftreten, wenn sowohl der neue als auch der alte Inhalt gleichzeitig im DOM vorhanden sind.
- Übergänge zwischen Dokumenten (d.h. Navigieren zwischen verschiedenen Seiten in MPAs) waren historisch gesehen unmöglich.

Die View Transition API bietet eine einfache Möglichkeit, die erforderlichen Ansichtsänderungen und Übergangsanimationen für beide oben genannten Anwendungsfälle zu verwalten.

Das Erstellen eines Ansichtsübergangs, der die Standardübergangsanimationen des Browsers verwendet, ist sehr schnell zu erledigen, und es gibt Funktionen, die Sie sowohl die Übergangsanimation anpassen als auch den Ansichtsübergang selbst manipulieren lassen (z.B. Umstände festlegen, unter denen die Animation übersprungen wird) für sowohl SPA- als auch MPA-Ansichtsübergänge.

Weitere Informationen finden Sie unter [Using the View Transition API](/de/docs/Web/API/View_Transition_API/Using).

## Schnittstellen

- [`ViewTransition`](/de/docs/Web/API/ViewTransition)
  - : Repräsentiert einen Ansichtsübergang und bietet Funktionen, um auf das Erreichen verschiedener Zustände des Übergangs zu reagieren (z.B. bereit für die Animation oder Animation abgeschlossen) oder den Übergang ganz zu überspringen.

## Erweiterungen zu anderen Schnittstellen

- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
  - : Startet einen neuen Ansichtsübergang innerhalb desselben Dokuments (SPA) und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, um diesen darzustellen.
- [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)
  - : Das Ereignisobjekt für das [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis. Während einer Navigation zwischen Dokumenten ermöglicht es Ihnen, den zugehörigen Ansichtsübergang zu manipulieren (bietet Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt) von dem Dokument aus, zu dem navigiert wird, falls ein Ansichtsübergang durch die Navigation ausgelöst wurde.
- [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)
  - : Das Ereignisobjekt für das [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis. Während einer Navigation zwischen Dokumenten ermöglicht es Ihnen, den zugehörigen Ansichtsübergang zu manipulieren (bietet Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt) von dem Dokument aus, von dem navigiert wird, falls ein Ansichtsübergang durch die Navigation ausgelöst wurde. Es bietet auch Zugriff auf Informationen über den Navigationstyp und die aktuellen sowie die Ziel-Dokumenthistorik-Einträge.
- Das [`Window`](/de/docs/Web/API/Window) [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis
  - : Wird ausgelöst, wenn ein Dokument erstmals dargestellt wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "back/forward cache")}} (bfcache) oder {{Glossary("Prerender", "prerender")}}).
- Das [`Window`](/de/docs/Web/API/Window) [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis
  - : Wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen wird.

## HTML-Erweiterungen

- [`<link rel="expect">`](/de/docs/Web/HTML/Attributes/rel#expect)
  - : Identifiziert die wichtigsten Inhalte des zugehörigen Dokuments für die anfängliche Ansicht der Seite durch den Benutzer. Die Dokumentdarstellung wird blockiert, bis die kritischen Inhalte analysiert wurden, um einen konsistenten ersten Anstrich — und somit einen Ansichtsübergang — über alle unterstützenden Browser hinweg zu gewährleisten.

## CSS-Erweiterungen

### At-Rules

- {{cssxref("@view-transition")}}
  - : Im Falle einer Navigation zwischen Dokumenten wird `@view-transition` verwendet, um die aktuellen und Ziel-Dokumente für einen Ansichtsübergang zu optieren.

### Eigenschaften

- {{cssxref("view-transition-name")}}
  - : Versorgt das ausgewählte Element mit einem separaten identifizierenden Namen und führt es in einen separaten Ansichtsübergang vom Hauptansichtsübergang — oder keinen Ansichtsübergang, wenn der Wert `none` angegeben ist.

### Pseudo-Elemente

- {{cssxref("::view-transition")}}
  - : Der Wurzelpunkt der Ansichtsübergangsüberlagerung, die alle Ansichtsübergänge enthält und über allen anderen Seiteninhalten liegt.
- {{cssxref("::view-transition-group", "::view-transition-group()")}}
  - : Der Ausgangspunkt eines einzelnen Ansichtsübergangs.
- {{cssxref("::view-transition-image-pair", "::view-transition-image-pair()")}}
  - : Der Container für die alten und neuen Ansichten eines Ansichtsübergangs — vor und nach dem Übergang.
- {{cssxref("::view-transition-old", "::view-transition-old()")}}
  - : Eine statische Momentaufnahme der alten Ansicht vor dem Übergang.
- {{cssxref("::view-transition-new", "::view-transition-new()")}}
  - : Eine Live-Darstellung der neuen Ansicht nach dem Übergang.

## Beispiele

- [Grundlegende View-Transition-SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/): Eine einfache Bildgalerie-Demo mit Ansichtsübergängen, die separate Animationen zwischen alten und neuen Bildern und alten und neuen Bildunterschriften bietet.
- [Grundlegende View-Transition-MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/): Eine Beispiel-Zwei-Seiten-Website, die die Verwendung von Übergängen zwischen Dokumenten (MPA) zeigt und einen benutzerdefinierten "Wisch-nach-oben"-Übergang bietet, wenn zwischen den beiden Seiten navigiert wird.
- [HTTP 203 Playlist](https://http203-playlist.netlify.app/): Eine Video-Player-Demo-App, die mehrere verschiedene SPA-Ansichtsübergänge bietet, von denen viele in [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) erläutert werden.
- [Liste der Chrome DevRel-Teammitglieder](https://view-transitions.chrome.dev/profiles/mpa/): Eine einfache Team-Profilseiten-App, die zeigt, wie die [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)- und [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignisse verwendet werden, um die ausgehenden und eingehenden Animationen eines Ansichtsübergangs zwischen Dokumenten basierend auf den "von" und "zu" URLs anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) auf developer.chrome.com (2024)
- [View Transition API: Creating Smooth Page Transitions](https://stackdiary.com/view-transitions-api/) auf stackdiary.com (2023)
- [View Transitions API: Single Page Apps Without a Framework](https://www.debugbear.com/blog/view-transitions-spa-without-framework) auf www.debugbear.com (2024)

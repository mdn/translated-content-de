---
title: View Transitions API
slug: Web/API/View_Transitions_API
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{DefaultAPISidebar("View Transitions API")}}

Die **View Transitions API** bietet eine Möglichkeit, um animierte Übergänge zwischen verschiedenen Webseitenansichten einfach zu erstellen. Dies umfasst das Animieren von DOM-Zuständen in einer Single-Page-App (SPA) und das Animieren der Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Konzepte und Verwendung

Übergänge zwischen Ansichten sind eine beliebte Designwahl, um die kognitive Belastung der Benutzer zu verringern, ihnen zu helfen, den Kontext beizubehalten, und die wahrgenommene Ladezeit zu verkürzen, während sie zwischen Zuständen oder Ansichten einer Anwendung wechseln.

Das Erstellen von Ansichtsübergängen im Web war jedoch historisch gesehen schwierig:

- Übergänge zwischen Zuständen in Single-Page-Apps (SPAs) erfordern in der Regel das Schreiben erheblicher Mengen an CSS und JavaScript, um:
  - Das Laden und Positionieren des alten und neuen Inhalts zu verwalten.
  - Die alten und neuen Zustände zu animieren, um den Übergang zu schaffen.
  - Unbeabsichtigte Benutzerinteraktionen mit alten Inhalten zu verhindern, die Probleme verursachen könnten.
  - Den alten Inhalt zu entfernen, sobald der Übergang abgeschlossen ist.
    Barrierefreiheitsprobleme wie Verlust der Leseposition, Verwirrung durch Fokus und seltsames Verhalten der Live-Region-Ankündigung können auch auftreten, wenn die neuen und alten Inhalte gleichzeitig im DOM vorhanden sind.
- Cross-Dokument-Übergänge (d.h. über Navigationsvorgänge zwischen verschiedenen Seiten in MPAs) waren historisch unmöglich.

Die View Transitions API bietet eine einfache Möglichkeit, die erforderlichen Ansichtsänderungen und Übergangsanimationen für die obigen Anwendungsfälle zu handhaben.

Das Erstellen eines Ansichtsübergangs, der die Standardübergangsanimationen des Browsers verwendet, ist sehr einfach, und es gibt Funktionen, die es Ihnen ermöglichen, sowohl die Übergangsanimation anzupassen als auch den Ansichtsübergang selbst zu manipulieren (zum Beispiel Umstände spezifizieren, unter denen die Animation übersprungen wird), sowohl für SPA- als auch für MPA-Ansichtsübergänge.

Weitere Informationen finden Sie unter [Verwendung der View Transitions API](/de/docs/Web/API/View_Transitions_API/Using).

## Schnittstellen

- [`ViewTransition`](/de/docs/Web/API/ViewTransition)
  - : Repräsentiert einen Ansichtsübergang und bietet Funktionen, um auf das Erreichen verschiedener Zustände des Übergangs zu reagieren (z.B. bereit zur Ausführung der Animation oder Animation abgeschlossen) oder den Übergang vollständig zu überspringen.

## Erweiterungen zu anderen Schnittstellen

- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
  - : Startet einen neuen Ansichtsübergang im gleichen Dokument (SPA) und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, das ihn repräsentiert.
- [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)
  - : Das Ereignisobjekt für das [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis. Während einer Cross-Dokument-Navigation erlaubt es Ihnen, den zugehörigen Ansichtsübergang zu manipulieren (gewährt Zugang zum relevanten [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt) aus dem Dokument, zu dem navigiert wird, falls ein Ansichtsübergang durch die Navigation ausgelöst wurde.
- [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)
  - : Das Ereignisobjekt für das [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis. Während einer Cross-Dokument-Navigation erlaubt es Ihnen, den zugehörigen Ansichtsübergang zu manipulieren (bietet Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt) aus dem Dokument, von dem aus navigiert wird, falls ein Ansichtsübergang durch die Navigation ausgelöst wurde. Es bietet auch Zugang zu Informationen über den Navigationstyp und die aktuellen sowie Ziel-Dokument-Historien-Einträge.
- Das [`Window`](/de/docs/Web/API/Window) [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis
  - : Wird ausgelöst, wenn ein Dokument zum ersten Mal gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder bei der Aktivierung eines Dokuments (entweder aus dem [Back/Forward-Cache](/de/docs/Glossary/bfcache) (bfcache) oder [Prerender](/de/docs/Glossary/Prerender)).
- Das [`Window`](/de/docs/Web/API/Window) [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis
  - : Wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll.

## HTML-Erweiterungen

- [`<link rel="expect">`](/de/docs/Web/HTML/Attributes/rel#expect)
  - : Identifiziert den wichtigsten Inhalt im verbundenen Dokument für die erste Ansicht der Seite durch den Benutzer. Das Dokument-Rendering wird blockiert, bis der kritische Inhalt analysiert wurde, wodurch ein konsistenter erster Anstrich – und daher ein Ansichtsübergang – in allen unterstützenden Browsern sichergestellt wird.

## CSS-Erweiterungen

### At-Rules

- {{cssxref("@view-transition")}}
  - : Im Falle einer Cross-Dokument-Navigation wird `@view-transition` verwendet, um die aktuellen und Ziel-Dokumente einem Ansichtsübergang zu unterziehen.

### Eigenschaften

- {{cssxref("view-transition-name")}}
  - : Verleiht dem ausgewählten Element einen separaten Identifikationsnamen und führt dazu, dass es an einem separaten Ansichtsübergang teilnimmt als der übergeordnete Ansichtsübergang — oder an keinem Ansichtsübergang, wenn der Wert `none` angegeben wird.

### Pseudo-Elemente

- {{cssxref("::view-transition")}}
  - : Der Ausgangspunkt des Ansichtsübergangsüberlagerung, die alle Ansichtsübergänge enthält und über allem anderen Seiteninhalt liegt.
- {{cssxref("::view-transition-group", "::view-transition-group()")}}
  - : Der Ausgangspunkt eines einzelnen Ansichtsübergangs.
- {{cssxref("::view-transition-image-pair", "::view-transition-image-pair()")}}
  - : Der Container für die alten und neuen Ansichten eines Ansichtsübergangs — vor und nach dem Übergang.
- {{cssxref("::view-transition-old", "::view-transition-old()")}}
  - : Eine statische Momentaufnahme der alten Ansicht, vor dem Übergang.
- {{cssxref("::view-transition-new", "::view-transition-new()")}}
  - : Eine Live-Darstellung der neuen Ansicht, nach dem Übergang.

## Beispiele

- [Basic View Transitions SPA Demo](https://mdn.github.io/dom-examples/view-transitions/spa/): Eine grundlegende Bildgalerie-Demo mit Ansichtsübergängen, mit separaten Animationen zwischen alten und neuen Bildern und alten und neuen Bildunterschriften.
- [Basic View Transitions MPA Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/): Eine Beispielseite mit zwei Seiten, die die Verwendung von Cross-Dokument (MPA) Ansichtsübergängen demonstriert und einen benutzerdefinierten "Hochwischen"-Übergang bietet, wenn zwischen den beiden Seiten navigiert wird.
- [HTTP 203 Playlist](https://http203-playlist.netlify.app/): Eine Videoplayer-Demo-App, die mehrere verschiedene SPA-Ansichtsübergänge bietet, von denen viele in [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/) erklärt werden.
- [Liste der Teammitglieder von Chrome DevRel](https://view-transitions.netlify.app/profiles/mpa/): Eine einfache Teamprofilseiten-App, die zeigt, wie die [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)- und [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignisse verwendet werden können, um die ausgehenden und eingehenden Animationen eines Cross-Dokument-Ansichtsübergangs basierend auf den "von" und "zu" URLs anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
- [View Transitions API: Creating Smooth Page Transitions](https://stackdiary.com/view-transitions-api/)

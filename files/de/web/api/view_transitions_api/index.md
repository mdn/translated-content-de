---
title: View Transitions API
slug: Web/API/View_Transitions_API
l10n:
  sourceCommit: c420b9b3126451f53d112afe33e007d6efdb605d
---

{{DefaultAPISidebar("View Transitions API")}}

Die **View Transitions API** bietet einen Mechanismus, um animierte Übergänge zwischen verschiedenen Ansichten einer Website einfach zu erstellen. Dies umfasst das Animieren zwischen DOM-Zuständen in einer Single-Page-App (SPA) sowie die Animation der Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Konzepte und Nutzung

Ansichtsübergänge sind eine populäre Designwahl, um die kognitive Belastung der Benutzer zu reduzieren, ihnen zu helfen, den Kontext beizubehalten, und die wahrgenommene Ladezeit zu verkürzen, wenn sie zwischen Zuständen oder Ansichten einer Anwendung wechseln.

Das Erstellen von Ansichtsübergängen im Web war jedoch historisch schwierig:

- Übergänge zwischen Zuständen in Single-Page-Apps (SPAs) erfordern in der Regel das Schreiben von erheblichem CSS und JavaScript, um:
  - Das Laden und Positionieren des alten und neuen Inhalts zu handhaben.
  - Den Übergang der alten und neuen Zustände zu animieren.
  - Zu verhindern, dass unbeabsichtigte Benutzerinteraktionen mit dem alten Inhalt Probleme verursachen.
  - Den alten Inhalt zu entfernen, sobald der Übergang abgeschlossen ist.
    Zugänglichkeitsprobleme wie der Verlust der Leseposition, Verwirrung des Fokus und seltsames Verhalten der Live-Region-Ankündigung können auch daraus resultieren, dass der neue und alte Inhalt gleichzeitig im DOM vorhanden sind.
- Dokumentübergreifende Ansichtsübergänge (d.h. über die Navigation zwischen verschiedenen Seiten in MPAs) waren historisch unmöglich.

Die View Transitions API bietet eine einfache Möglichkeit, die erforderlichen Ansichtsänderungen und Übergangsanimationen für beide oben genannten Anwendungsfälle zu handhaben.

Das Erstellen eines Ansichtsübergangs, der die Standardübergangsanimationen des Browsers verwendet, ist sehr schnell zu bewerkstelligen, und es gibt Funktionen, die es Ihnen ermöglichen, sowohl die Übergangsanimation anzupassen als auch den Ansichtsübergang selbst zu manipulieren (z.B. Umstände anzugeben, unter denen die Animation übersprungen wird), sowohl für SPA- als auch MPA-Ansichtsübergänge.

Weitere Informationen finden Sie unter [Using the View Transitions API](/de/docs/Web/API/View_Transitions_API/Using).

## Schnittstellen

- [`ViewTransition`](/de/docs/Web/API/ViewTransition)
  - : Repräsentiert einen Ansichtsübergang und bietet Funktionalitäten, um auf den Übergang in verschiedenen Zuständen zu reagieren (z.B. bereit für die Ausführung der Animation oder die Animation ist beendet) oder den Übergang ganz zu überspringen.

## Erweiterungen zu anderen Schnittstellen

- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
  - : Startet einen neuen Dokument-internen (SPA) Ansichtsübergang und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, um es zu repräsentieren.
- [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)
  - : Das Ereignisobjekt für das [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis. Bei einer dokumentübergreifenden Navigation ermöglicht es Ihnen, den zugehörigen Ansichtsübergang zu manipulieren (und Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt) von dem Dokument aus zu erhalten, auf das navigiert wird, wenn ein Ansichtsübergang durch die Navigation ausgelöst wurde.
- [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)
  - : Das Ereignisobjekt für das [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis. Bei einer dokumentübergreifenden Navigation ermöglicht es Ihnen, den zugehörigen Ansichtsübergang zu manipulieren (und Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt) von dem Dokument aus zu erhalten, von dem aus navigiert wird, wenn ein Ansichtsübergang durch die Navigation ausgelöst wurde. Es bietet auch Zugriff auf Informationen über den Navigationstyp und die aktuellen und Ziel-Dokumentverläufseinträge.
- Das [`Window`](/de/docs/Web/API/Window) [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis
  - : Wird ausgelöst, wenn ein Dokument zum ersten Mal gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "back/forward cache")}} (bfcache) oder {{Glossary("Prerender", "prerender")}}).
- Das [`Window`](/de/docs/Web/API/Window) [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis
  - : Wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen wird.

## HTML-Ergänzungen

- [`<link rel="expect">`](/de/docs/Web/HTML/Attributes/rel#expect)
  - : Identifiziert den kritischsten Inhalt im zugehörigen Dokument für die Erstansicht der Seite durch den Benutzer. Das Rendern des Dokuments wird blockiert, bis der kritische Inhalt analysiert wurde, wodurch ein konsistentes erstes Rendering - und somit Ansichtsübergang - in allen unterstützenden Browsern sichergestellt wird.

## CSS-Ergänzungen

### At-Regeln

- {{cssxref("@view-transition")}}
  - : Bei einer dokumentübergreifenden Navigation wird `@view-transition` verwendet, um das aktuelle und das Ziel-Dokument in einen Ansichtsübergang einzubinden.

### Eigenschaften

- {{cssxref("view-transition-name")}}
  - : Verleiht dem ausgewählten Element einen separaten identifizierenden Namen und lässt es an einem separaten Ansichtsübergang vom Root-Ansichtsübergang teilnehmen — oder keinem Ansichtsübergang, wenn der Wert `none` angegeben ist.

### Pseudoelemente

- {{cssxref("::view-transition")}}
  - : Der Ursprung der Ansichtsübergangs-Überlagerung, die alle Ansichtsübergänge enthält und über allen anderen Seitenelementen liegt.
- {{cssxref("::view-transition-group", "::view-transition-group()")}}
  - : Der Ursprung eines einzelnen Ansichtsübergangs.
- {{cssxref("::view-transition-image-pair", "::view-transition-image-pair()")}}
  - : Der Container für die alten und neuen Ansichten eines Ansichtsübergangs — vor und nach dem Übergang.
- {{cssxref("::view-transition-old", "::view-transition-old()")}}
  - : Ein statisches Abbild der alten Ansicht vor dem Übergang.
- {{cssxref("::view-transition-new", "::view-transition-new()")}}
  - : Eine Live-Darstellung der neuen Ansicht nach dem Übergang.

## Beispiele

- [Basis-Ansichtsübergänge SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/): Eine grundlegende Bildergalerie-Demo mit Ansichtsübergängen, die separate Animationen zwischen alten und neuen Bildern sowie alten und neuen Unterschriften bietet.
- [Basis-Ansichtsübergänge MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/): Eine Beispielseite mit zwei Seiten, die die Verwendung von dokumentübergreifenden (MPA) Ansichtsübergängen demonstriert und einen benutzerdefinierten "Hochwischen"-Übergang bietet, wenn zwischen den beiden Seiten navigiert wird.
- [HTTP 203 Wiedergabeliste](https://http203-playlist.netlify.app/): Eine Videoplayer-Demo-App, die mehrere verschiedene SPA-Ansichtsübergänge enthält, von denen viele in [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/) erklärt werden.
- [Liste der Chrome DevRel Teammitglieder](https://view-transitions.chrome.dev/profiles/mpa/): Eine grundlegende Teamprofilseiten-App, die zeigt, wie die [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) und [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignisse verwendet werden, um die ausgehende und eingehende Animation eines dokumentübergreifenden Ansichtsübergangs basierend auf den "von"- und "zu"-URLs anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
- [View Transitions API: Creating Smooth Page Transitions](https://stackdiary.com/view-transitions-api/)

---
title: View Transition API
slug: Web/API/View_Transition_API
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{DefaultAPISidebar("View Transition API")}}

Die **View Transition API** bietet einen Mechanismus, um animierte Übergänge zwischen verschiedenen Ansichten einer Website einfach zu erstellen. Dazu gehört das Animieren zwischen DOM-Zuständen in einer Single-Page-App (SPA) und das Animieren der Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Konzepte und Nutzung

View-Übergänge sind eine beliebte Designwahl, um die kognitive Belastung der Benutzer zu reduzieren, ihnen zu helfen, den Kontext zu behalten, und die wahrgenommene Ladezeit zu verringern, während sie sich zwischen Zuständen oder Ansichten einer Anwendung bewegen.

Allerdings war das Erstellen von View-Übergängen im Web historisch gesehen schwierig:

- Übergänge zwischen Zuständen in Single-Page-Apps (SPAs) umfassen in der Regel das Schreiben erheblicher Mengen an CSS und JavaScript, um:
  - Das Laden und Positionieren des alten und neuen Inhalts zu handhaben.
  - Die alten und neuen Zustände zu animieren, um den Übergang zu erzeugen.
  - Unbeabsichtigte Benutzerinteraktionen mit dem alten Inhalt zu verhindern, die Probleme verursachen könnten.
  - Den alten Inhalt zu entfernen, sobald der Übergang abgeschlossen ist.
    Barrierefreiheitsprobleme wie der Verlust der Leseposition, Verwirrung beim Fokus und seltsames Verhalten bei der Ankündigung von Live-Bereichen können auch auftreten, wenn der neue und alte Inhalt gleichzeitig im DOM vorhanden sind.
- Übergänge zwischen Dokumenten über verschiedene Seiten in MPAs hinweg waren bisher unmöglich.

Die View Transition API liefert eine einfache Möglichkeit, die erforderlichen View-Änderungen und Übergangsanimationen für beide oben genannten Anwendungsfälle zu handhaben.

Das Erstellen eines View-Übergangs, der die Standard-Übergangsanimationen des Browsers verwendet, geht sehr schnell und es gibt Funktionen, die es Ihnen ermöglichen, sowohl die Übergangsanimation anzupassen als auch den View-Übergang selbst zu manipulieren (z. B. um Umstände anzugeben, unter denen die Animation übersprungen wird), sowohl für SPA- als auch MPA-View-Übergänge.

Siehe [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using) für weitere Informationen.

## Schnittstellen

- [`ViewTransition`](/de/docs/Web/API/ViewTransition)
  - : Repräsentiert einen View-Übergang und bietet Funktionen, um auf den Übergang zu reagieren, wenn er verschiedene Zustände erreicht (z. B. bereit für die Animation oder Animation abgeschlossen) oder den Übergang vollständig zu überspringen.

## Erweiterungen für andere Schnittstellen

- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
  - : Startet einen neuen Spa-View-Übergang im selben Dokument und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, um ihn darzustellen.
- [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)
  - : Das Ereignisobjekt für das [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis. Während einer cross-document Navigation ermöglicht es Ihnen, den zugehörigen View-Übergang zu manipulieren (wobei Sie Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt erhalten) von dem Dokument aus, zu dem navigiert wird, wenn ein View-Übergang durch die Navigation ausgelöst wurde.
- [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)
  - : Das Ereignisobjekt für das [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis. Während einer cross-document Navigation ermöglicht es Ihnen, den zugehörigen View-Übergang zu manipulieren (wobei Sie Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt erhalten) von dem Dokument aus, von dem navigiert wird, wenn ein View-Übergang durch die Navigation ausgelöst wurde. Es bietet auch Zugriff auf Informationen über den Navigationstyp und die aktuellen sowie die Ziel-Dokumenten-Historieneinträge.
- Das [`Window`](/de/docs/Web/API/Window) [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis
  - : Wird ausgelöst, wenn ein Dokument zum ersten Mal gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "back/forward cache")}} (bfcache) oder {{Glossary("Prerender", "prerender")}}).
- Das [`Window`](/de/docs/Web/API/Window) [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis
  - : Wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll.

## HTML-Ergänzungen

- [`<link rel="expect">`](/de/docs/Web/HTML/Attributes/rel#expect)
  - : Identifiziert den wichtigsten Inhalt im zugehörigen Dokument für die anfängliche Ansicht der Seite des Benutzers. Die Dokumentenwiedergabe wird blockiert, bis der kritische Inhalt analysiert wurde, um ein konsistentes erstes Rendering — und damit einen einheitlichen View-Übergang — über alle unterstützenden Browser hinweg zu gewährleisten.

## CSS-Ergänzungen

### At-Rules

- {{cssxref("@view-transition")}}
  - : Im Fall einer cross-document Navigation wird `@view-transition` verwendet, um die aktuellen und Ziel-Dokumente dazu zu bringen, einen View-Übergang zu durchlaufen.

### Eigenschaften

- {{cssxref("view-transition-name")}}
  - : Verleiht dem ausgewählten Element einen separaten Identifikationsnamen und führt dazu, dass es an einem separaten View-Übergang vom Root-View-Übergang teilnimmt — oder an keinem View-Übergang, wenn der Wert `none` angegeben ist.

### Pseudoelemente

- {{cssxref("::view-transition")}}
  - : Der Ursprung des View-Transition-Overlays, das alle View-Übergänge enthält und über allen anderen Seiteninhalten liegt.
- {{cssxref("::view-transition-group", "::view-transition-group()")}}
  - : Der Ursprung eines einzelnen View-Übergangs.
- {{cssxref("::view-transition-image-pair", "::view-transition-image-pair()")}}
  - : Der Container für die alten und neuen Ansichten eines View-Übergangs — vor und nach dem Übergang.
- {{cssxref("::view-transition-old", "::view-transition-old()")}}
  - : Eine statische Momentaufnahme der alten Ansicht, vor dem Übergang.
- {{cssxref("::view-transition-new", "::view-transition-new()")}}
  - : Eine Live-Darstellung der neuen Ansicht, nach dem Übergang.

## Beispiele

- [Basis-View-Übergänge SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/): Eine grundlegende Bildergalerie-Demo mit View-Übergängen, die separate Animationen zwischen alten und neuen Bildern sowie alten und neuen Bildunterschriften aufweist.
- [Basis-View-Übergänge MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/): Eine Beispielseite mit zwei Seiten, die die Nutzung von cross-document (MPA) View-Übergängen zeigt und einen benutzerdefinierten "Swipe-Up"-Übergang bietet, wenn zwischen den beiden Seiten navigiert wird.
- [HTTP 203 Wiedergabeliste](https://http203-playlist.netlify.app/): Eine Video-Player-Demo-App, die mehrere verschiedene SPA View-Übergänge bietet, von denen viele in [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) erklärt werden.
- [Liste der Chrome DevRel Teammitglieder](https://view-transitions.chrome.dev/profiles/mpa/): Eine grundlegende App für Teamprofilseiten, die zeigt, wie man die [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)- und [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignisse verwendet, um die ausgehenden und eingehenden Animationen eines cross-document View-Übergangs basierend auf den "from" und "to" URLs anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) auf developer.chrome.com (2024)
- [View Transition API: Creating Smooth Page Transitions](https://stackdiary.com/view-transitions-api/) auf stackdiary.com (2023)
- [View Transitions API: Single Page Apps Without a Framework](https://www.debugbear.com/blog/view-transitions-spa-without-framework) auf DebugBear (2024)

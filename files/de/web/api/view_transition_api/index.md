---
title: View Transition API
slug: Web/API/View_Transition_API
l10n:
  sourceCommit: c1079d8b83ce25341085abe533388ba1ffe342cf
---

{{DefaultAPISidebar("View Transition API")}}

Die **View Transition API** bietet ein Mechanismus, um einfach animierte Übergänge zwischen verschiedenen Ansichten einer Website zu erstellen. Dies umfasst das Animieren zwischen DOM-Zuständen in einer Single-Page-App (SPA) und das Animieren der Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Konzepte und Verwendung

Ansichtsübergänge sind eine beliebte Designwahl, um die kognitive Belastung der Benutzer zu reduzieren, ihnen zu helfen, sich im Kontext zu halten, und wahrgenommene Ladezeiten zu verringern, während sie sich zwischen Zuständen oder Ansichten einer Anwendung bewegen.

Allerdings war das Erstellen von Ansichtsübergängen im Web historisch gesehen schwierig:

- Übergänge zwischen Zuständen in Single-Page-Apps (SPAs) erfordern das Schreiben von bedeutendem CSS und JavaScript, um:
  - Das Laden und Positionieren der alten und neuen Inhalte zu handhaben.
  - Die alten und neuen Zustände zu animieren, um den Übergang zu erstellen.
  - Zu verhindern, dass versehentliche Benutzerinteraktionen mit dem alten Inhalt Probleme verursachen.
  - Den alten Inhalt zu entfernen, sobald der Übergang abgeschlossen ist.
    Barrierefreiheitsprobleme wie Verlust der Leseposition, Fokusverwirrungen und seltsames Verhalten von Live-Region-Ankündigungen können ebenfalls auftreten, wenn der neue und der alte Inhalt gleichzeitig im DOM vorhanden sind.
- Dokumentenübergreifende Ansichtsübergänge (d.h. Navigationen zwischen verschiedenen Seiten in MPAs) waren historisch gesehen unmöglich.

Die View Transition API bietet eine einfache Möglichkeit, die erforderlichen Ansichtsänderungen und Übergangsanimationen für beide oben genannten Anwendungsfälle zu handhaben.

Das Erstellen eines Ansichtsübergangs, der die Standard-Übergangsanimationen des Browsers verwendet, ist sehr schnell durchzuführen, und es gibt Funktionen, die es Ihnen ermöglichen, sowohl die Übergangsanimation anzupassen als auch den Ansichtsübergang selbst zu manipulieren (zum Beispiel die Umstände anzugeben, unter denen die Animation übersprungen wird), für sowohl SPA- als auch MPA-Ansichtsübergänge.

Siehe [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using) für mehr Informationen.

## Schnittstellen

- [`ViewTransition`](/de/docs/Web/API/ViewTransition)
  - : Repräsentiert einen Ansichtsübergang und bietet Funktionalität, um auf das Erreichen verschiedener Zustände des Übergangs zu reagieren (z. B. bereit, die Animation auszuführen, oder Animation abgeschlossen) oder den Übergang vollständig zu überspringen.

## Erweiterungen für andere Schnittstellen

- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
  - : Startet einen neuen gleich-Dokument (SPA) Ansichtsübergang und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, um ihn darzustellen.
- [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)
  - : Das Ereignisobjekt für das [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis. Während einer dokumentenübergreifenden Navigation erlaubt es Ihnen, den zugehörigen Ansichtsübergang zu manipulieren (indem auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zugegriffen wird) aus dem Dokument heraus, zu dem navigiert wird, falls ein Ansichtsübergang durch die Navigation ausgelöst wurde.
- [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)
  - : Das Ereignisobjekt für das [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis. Während einer dokumentenübergreifenden Navigation erlaubt es Ihnen, den zugehörigen Ansichtsübergang zu manipulieren (indem auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zugegriffen wird) aus dem Dokument heraus, von dem navigiert wird, falls ein Ansichtsübergang durch die Navigation ausgelöst wurde. Es bietet auch Zugriff auf Informationen über den Navigationstyp sowie die aktuellen und Ziel-Dokumenthistorieeinträge.
- Das [`Window`](/de/docs/Web/API/Window) [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis
  - : Wird ausgelöst, wenn ein Dokument erstmals gerendert wird, sei es beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "back/forward cache")}} (bfcache) oder {{Glossary("Prerender", "prerender")}}).
- Das [`Window`](/de/docs/Web/API/Window) [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis
  - : Wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll.

## HTML-Erweiterungen

- [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect)
  - : Identifiziert den kritischsten Inhalt im zugehörigen Dokument für die anfängliche Ansicht der Seite des Benutzers. Das Rendern des Dokuments wird blockiert, bis der kritische Inhalt analysiert wurde, um eine konsistente erste Darstellung — und daher einen Ansichtsübergang — in allen unterstützenden Browsern zu gewährleisten.

## CSS-Erweiterungen

### At-Rules

- {{cssxref("@view-transition")}}
  - : Im Falle einer dokumentenübergreifenden Navigation wird `@view-transition` verwendet, um das aktuelle und das Zieldokument dafür anzumelden, einen Ansichtsübergang zu durchlaufen.

### Eigenschaften

- {{cssxref("view-transition-name")}}
  - : Gibt den Ansichtsübergang-Snapshot an, an dem ausgewählte Elemente teilnehmen, wodurch ein Element separat vom Rest der Seite während eines Ansichtsübergangs animiert werden kann.
- {{cssxref("view-transition-class")}}
  - : Bietet eine zusätzliche Methode zum Stylen ausgewählter Elemente, die einen `view-transition-name` haben.

### Pseudo-Elemente

- {{cssxref("::view-transition")}}
  - : Die Wurzel des Ansichtsübergangs-Overlays, das alle Ansichtsübergänge enthält und über dem restlichen Seiteninhalt liegt.
- {{cssxref("::view-transition-group()")}}
  - : Die Wurzel eines einzelnen Ansichtsübergangs.
- {{cssxref("::view-transition-image-pair()")}}
  - : Der Container für die alten und neuen Ansichten eines Ansichtsübergangs — vor und nach dem Übergang.
- {{cssxref("::view-transition-old()")}}
  - : Ein statischer Schnappschuss der alten Ansicht, vor dem Übergang.
- {{cssxref("::view-transition-new()")}}
  - : Eine Live-Darstellung der neuen Ansicht, nach dem Übergang.

## Beispiele

- [Grundlegende View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/): Eine grundlegende Bildgalerie-Demo mit Ansichtsübergängen, die separate Animationen zwischen alten und neuen Bildern und alten und neuen Bildunterschriften bietet.
- [Grundlegende View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/): Eine beispielhafte Zwei-Seiten-Site, die die Verwendung von dokumentenübergreifenden (MPA) Ansichtsübergängen demonstriert und einen benutzerdefinierten "Nach-oben-wischen"-Übergang bietet, wenn zwischen den beiden Seiten navigiert wird.
- [View Transitions match-element Demo](https://mdn.github.io/dom-examples/view-transitions/match-element/): Eine SPA mit animierten Listenpunkten, die die Verwendung des Wertes `match-element` der Eigenschaft `view-transition-name` demonstriert.
- [HTTP 203 Playlist](https://http203-playlist.netlify.app/): Eine Videoplayer-Demo-App, die mehrere verschiedene SPA-Ansichtsübergänge bietet, von denen viele in [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) erklärt werden.
- [Chrome DevRel View Transitions Demos](https://view-transitions.chrome.dev/): Eine Serie von View Transition API-Demos.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) auf developer.chrome.com (2024)
- [View Transition API: Creating Smooth Page Transitions](https://stackdiary.com/view-transitions-api/) auf stackdiary.com (2023)
- [View Transitions API: Single Page Apps Without a Framework](https://www.debugbear.com/blog/view-transitions-spa-without-framework) auf DebugBear (2024)

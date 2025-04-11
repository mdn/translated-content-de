---
title: View Transition API
slug: Web/API/View_Transition_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("View Transition API")}}

Die **View Transition API** bietet einen Mechanismus, um animierte Übergänge zwischen verschiedenen Ansichten einer Website einfach zu erstellen. Dies umfasst das Animieren zwischen DOM-Zuständen in einer Single-Page-App (SPA) und das Animieren der Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Konzepte und Verwendung

View-Übergänge sind eine beliebte Designwahl, um die kognitive Belastung der Benutzer zu reduzieren, ihnen zu helfen, im Kontext zu bleiben, und die wahrgenommene Ladeverzögerung zu verringern, während sie zwischen Zuständen oder Ansichten einer Anwendung wechseln.

Die Erstellung von View-Übergängen im Web war jedoch historisch gesehen schwierig:

- Übergänge zwischen Zuständen in Single-Page-Apps (SPAs) erfordern in der Regel das Schreiben von umfangreichem CSS und JavaScript, um:
  - Das Laden und die Platzierung der alten und neuen Inhalte zu verwalten.
  - Die alten und neuen Zustände zu animieren, um den Übergang zu erstellen.
  - Zu verhindern, dass versehentliche Benutzerinteraktionen mit dem alten Inhalt Probleme verursachen.
  - Den alten Inhalt zu entfernen, sobald der Übergang abgeschlossen ist.
    Barrierefreiheitsprobleme wie Verlust der Leseposition, Fokussierverwirrung und seltsames Verhalten bei Live-Bereichsankündigungen können auch auftreten, wenn der neue und der alte Inhalt gleichzeitig im DOM vorhanden sind.
- Dokumentenübergreifende View-Übergänge (d.h. über Navigationen zwischen verschiedenen Seiten in MPAs) waren bisher unmöglich.

Die View Transition API bietet eine einfache Möglichkeit, die erforderlichen Ansichtsänderungen und Übergangsanimationen für beide oben genannten Anwendungsfälle zu handhaben.

Einen View-Übergang zu erstellen, der die Standardübergangsanimationen des Browsers verwendet, ist sehr schnell umzusetzen, und es gibt Funktionen, die es Ihnen ermöglichen, sowohl die Übergangsanimation anzupassen als auch den View-Übergang selbst zu manipulieren (zum Beispiel die Umstände festzulegen, unter denen die Animation übersprungen wird), sowohl für SPA- als auch MPA-View-Übergänge.

Siehe [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using) für weitere Informationen.

## Schnittstellen

- [`ViewTransition`](/de/docs/Web/API/ViewTransition)
  - : Repräsentiert einen View-Übergang und bietet Funktionalität, um auf das Erreichen verschiedener Zustände des Übergangs zu reagieren (z. B. bereit, die Animation auszuführen, oder Animation beendet) oder den Übergang ganz zu überspringen.

## Erweiterungen anderer Schnittstellen

- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
  - : Startet einen neuen selben Dokument (SPA) View-Übergang und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekt zurück, um diesen zu repräsentieren.
- [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)
  - : Das Ereignisobjekt für das [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis. Während einer dokumentenübergreifenden Navigation ermöglicht es Ihnen, den zugehörigen View-Übergang zu manipulieren (Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekt) aus dem Dokument, zu dem navigiert wird, wenn ein View-Übergang durch die Navigation ausgelöst wurde.
- [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)
  - : Das Ereignisobjekt für das [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis. Während einer dokumentenübergreifenden Navigation ermöglicht es Ihnen, den zugehörigen View-Übergang zu manipulieren (Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekt) aus dem Dokument, von dem aus navigiert wird, wenn ein View-Übergang durch die Navigation ausgelöst wurde. Es bietet auch Zugriff auf Informationen über den Navigationstyp und aktuelle und Ziel-Dokumentverlaufseinträge.
- Das [`Window`](/de/docs/Web/API/Window) [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis
  - : Wird ausgelöst, wenn ein Dokument zum ersten Mal gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "back/forward cache")}} (bfcache) oder {{Glossary("Prerender", "prerender")}}).
- Das [`Window`](/de/docs/Web/API/Window) [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis
  - : Wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll.

## HTML-Erweiterungen

- [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect)
  - : Identifiziert den kritischsten Inhalt im zugehörigen Dokument für die anfängliche Ansicht der Seite des Benutzers. Das Rendern des Dokuments wird blockiert, bis der kritische Inhalt analysiert wurde, um ein konsistentes erstes Rendering — und daher einen konsistenten View-Übergang — in allen unterstützenden Browsern zu gewährleisten.

## CSS-Erweiterungen

### At-regeln

- {{cssxref("@view-transition")}}
  - : Im Falle einer dokumentenübergreifenden Navigation wird `@view-transition` verwendet, um aktuelle und Zieldokumente für einen View-Übergang anzumelden.

### Eigenschaften

- {{cssxref("view-transition-name")}}
  - : Gibt dem ausgewählten Element einen separaten identifizierenden Namen und bewirkt, dass es an einem separaten View-Übergang vom Haupt-View-Übergang teilnimmt — oder an keinem View-Übergang, wenn der Wert `none` angegeben ist.

### Pseudo-Elemente

- {{cssxref("::view-transition")}}
  - : Das Wurzelelement der View-Übergangsüberlagerung, das alle View-Übergänge enthält und über dem gesamten anderen Seiteninhalt liegt.
- {{cssxref("::view-transition-group", "::view-transition-group()")}}
  - : Das Wurzelelement eines einzelnen View-Übergangs.
- {{cssxref("::view-transition-image-pair", "::view-transition-image-pair()")}}
  - : Der Container für die alten und neuen Ansichten eines View-Übergangs — vor und nach dem Übergang.
- {{cssxref("::view-transition-old", "::view-transition-old()")}}
  - : Eine statische Momentaufnahme der alten Ansicht, vor dem Übergang.
- {{cssxref("::view-transition-new", "::view-transition-new()")}}
  - : Eine Live-Darstellung der neuen Ansicht, nach dem Übergang.

## Beispiele

- [Basic View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/): Eine einfache Bildgalerie-Demo mit View-Übergängen, die separate Animationen zwischen alten und neuen Bildern sowie alten und neuen Bildunterschriften bietet.
- [Basic View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/): Eine Beispielseite mit zwei Seiten, die die Verwendung von dokumentenübergreifenden (MPA) View-Übergängen demonstriert und einen benutzerdefinierten "Hochwisch"-Übergang bietet, wenn zwischen den beiden Seiten navigiert wird.
- [HTTP 203 Wiedergabeliste](https://http203-playlist.netlify.app/): Eine Videoplayer-Demo-App, die mehrere verschiedene SPA-View-Übergänge bietet, von denen viele in [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) erklärt werden.
- [Liste der Mitglieder des Chrome DevRel-Teams](https://view-transitions.chrome.dev/profiles/mpa/): Eine grundlegende Teamprofilseiten-App, die demonstriert, wie die [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) und [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignisse verwendet werden können, um die ausgehenden und eingehenden Animationen eines dokumentenübergreifenden View-Übergangs basierend auf den "Von"- und "Zu"-URLs anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) auf developer.chrome.com (2024)
- [View Transition API: Erstellen von sanften Seitenübergängen](https://stackdiary.com/view-transitions-api/) auf stackdiary.com (2023)
- [View Transitions API: Single Page Apps ohne ein Framework](https://www.debugbear.com/blog/view-transitions-spa-without-framework) auf DebugBear (2024)

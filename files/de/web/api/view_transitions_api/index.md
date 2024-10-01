---
title: View Transitions API
slug: Web/API/View_Transitions_API
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{DefaultAPISidebar("View Transitions API")}}

Die **View Transitions API** bietet einen Mechanismus, um animierte Übergänge zwischen verschiedenen Ansichten einer Website einfach zu erstellen. Dies umfasst das Animieren zwischen DOM-Zuständen in einer Single-Page-App (SPA) und das Animieren der Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Konzepte und Verwendung

Ansichtsübergänge sind eine beliebte Designwahl, um die kognitive Belastung der Benutzer zu reduzieren, ihnen zu helfen, im Kontext zu bleiben, und die wahrgenommene Ladezeit zu verkürzen, während sie sich zwischen Zuständen oder Ansichten einer Anwendung bewegen.

Allerdings war es historisch gesehen schwierig, Ansichtsübergänge im Web zu erstellen:

- Übergänge zwischen Zuständen in Single-Page-Apps (SPAs) erfordern in der Regel das Schreiben von erheblichem CSS und JavaScript, um:
  - Das Laden und die Positionierung der alten und neuen Inhalte zu handhaben.
  - Die alten und neuen Zustände zu animieren, um den Übergang zu schaffen.
  - Unabsichtliche Benutzerinteraktionen mit alten Inhalten zu verhindern, die Probleme verursachen könnten.
  - Die alten Inhalte zu entfernen, sobald der Übergang abgeschlossen ist.
    Barrierefreiheitsprobleme wie Verlust der Leseposition, Verwirrung des Fokus und seltsames Verhalten bei Live-Bereichsansagen können ebenfalls auftreten, wenn neue und alte Inhalte gleichzeitig im DOM vorhanden sind.
- Dokumentenübergreifende Ansichtsübergänge (d. h. über Navigierungen zwischen verschiedenen Seiten in MPAs) waren historisch gesehen unmöglich.

Die View Transitions API bietet eine einfache Möglichkeit, die erforderlichen Ansichtsänderungen und Übergangsanimationen für beide oben genannten Anwendungsfälle zu handhaben.

Das Erstellen eines Ansichtsübergangs, der die Standardübergangsanimationen des Browsers verwendet, ist sehr schnell durchzuführen, und es gibt Funktionen, die es Ihnen ermöglichen, sowohl die Übergangsanimation anzupassen als auch den Ansichtsübergang selbst zu manipulieren (zum Beispiel um festzulegen, unter welchen Umständen die Animation übersprungen wird), sowohl für SPA- als auch MPA-Ansichtsübergänge.

Siehe [Verwendung der View Transitions API](/de/docs/Web/API/View_Transitions_API/Using) für weitere Informationen.

## Schnittstellen

- [`ViewTransition`](/de/docs/Web/API/ViewTransition)
  - : Repräsentiert einen Ansichtsübergang und bietet Funktionalität, um auf das Erreichen verschiedener Übergangszustände zu reagieren (z. B. bereit, um die Animation auszuführen, oder Animation beendet) oder den Übergang ganz zu überspringen.

## Erweiterungen zu anderen Schnittstellen

- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
  - : Startet einen neuen gleichermaßen geltenden (SPA) Ansichtsübergang und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, um es zu repräsentieren.
- [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)
  - : Das Ereignisobjekt für das [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis. Bei einer dokumentenübergreifenden Navigation ermöglicht es Ihnen, den zugehörigen Ansichtsübergang zu manipulieren (und bietet Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt) vom Dokument aus, in das navigiert wird, wenn ein Ansichtsübergang durch die Navigation ausgelöst wurde.
- [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)
  - : Das Ereignisobjekt für das [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis. Bei einer dokumentenübergreifenden Navigation ermöglicht es Ihnen, den zugehörigen Ansichtsübergang zu manipulieren (und bietet Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt) vom Dokument aus, von dem aus navigiert wird, wenn ein Ansichtsübergang durch die Navigation ausgelöst wurde. Es bietet auch Zugriff auf Informationen über den Navigationstyp und die aktuellen und Zieldokumenthistorieeinträge.
- Das [`Window`](/de/docs/Web/API/Window) [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis
  - : Wird ausgelöst, wenn ein Dokument erstmals gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "Back/Forward Cache")}} (bfcache) oder {{Glossary("Prerender", "Prerender")}}).
- Das [`Window`](/de/docs/Web/API/Window) [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis
  - : Wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen wird.

## HTML-Ergänzungen

- [`<link rel="expect">`](/de/docs/Web/HTML/Attributes/rel#expect)
  - : Identifiziert die wichtigsten Inhalte im zugehörigen Dokument für die erste Ansicht der Seite des Benutzers. Das Rendern des Dokuments wird blockiert, bis die kritischen Inhalte analysiert wurden, was einen konsistenten ersten Anstrich und somit einen Ansichtsübergang über alle unterstützenden Browser hinweg gewährleistet.

## CSS-Ergänzungen

### At-Regeln

- {{cssxref("@view-transition")}}
  - : Im Falle einer dokumentenübergreifenden Navigation wird `@view-transition` verwendet, um die aktuellen und Ziel-Dokumente einem Ansichtsübergang zu unterziehen.

### Eigenschaften

- {{cssxref("view-transition-name")}}
  - : Verleiht dem ausgewählten Element einen separaten Identifikationsnamen und bewirkt, dass es an einem separaten Ansichtsübergang vom Hauptansichtsübergang teilnimmt — oder keinem Ansichtsübergang, wenn der Wert `none` angegeben wird.

### Pseudo-Elemente

- {{cssxref("::view-transition")}}
  - : Die Wurzel des Ansichtsübergangs-Overlays, das alle Ansichtsübergänge enthält und über allen anderen Seiteninhalten liegt.
- {{cssxref("::view-transition-group", "::view-transition-group()")}}
  - : Die Wurzel eines einzelnen Ansichtsübergangs.
- {{cssxref("::view-transition-image-pair", "::view-transition-image-pair()")}}
  - : Der Container für die alten und neuen Ansichten eines Ansichtsübergangs — vor und nach dem Übergang.
- {{cssxref("::view-transition-old", "::view-transition-old()")}}
  - : Eine statische Momentaufnahme der alten Ansicht, vor dem Übergang.
- {{cssxref("::view-transition-new", "::view-transition-new()")}}
  - : Eine Live-Darstellung der neuen Ansicht, nach dem Übergang.

## Beispiele

- [Grundlegende View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/): Eine grundlegende Bildergalerie-Demo mit Ansichtsübergängen, die separate Animationen zwischen alten und neuen Bildern sowie alten und neuen Bildunterschriften bietet.
- [Grundlegende View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/): Eine Beispiel-Zwei-Seiten-Site, die die Verwendung von dokumentenübergreifenden (MPA) Ansichtsübergängen demonstriert, und eine benutzerdefinierte "Nach oben wischen"-Übergang bietet, wenn zwischen den beiden Seiten navigiert wird.
- [HTTP 203 Playlist](https://http203-playlist.netlify.app/): Eine Video-Player-Demo-App, die mehrere verschiedene SPA-Ansichtsübergänge bietet, von denen viele in [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/) erklärt werden.
- [Liste der Chrome DevRel-Teammitglieder](https://view-transitions.netlify.app/profiles/mpa/): Eine grundlegende App mit Teamprofilseiten, die zeigt, wie die [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) und [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignisse verwendet werden können, um die ausgehenden und eingehenden Animationen eines dokumentenübergreifenden Ansichtsübergangs basierend auf den "von" und "zu" URLs anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
- [View Transitions API: Creating Smooth Page Transitions](https://stackdiary.com/view-transitions-api/)

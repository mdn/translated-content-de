---
title: View Transition API
slug: Web/API/View_Transition_API
l10n:
  sourceCommit: 157426c0588634ab54df9a48e173b83154a46895
---

{{DefaultAPISidebar("View Transition API")}}

Die **View Transition API** bietet einen Mechanismus zur einfachen Erstellung von animierten Übergängen zwischen verschiedenen Ansichten auf einer Website. Dazu gehört das Animieren zwischen DOM-Zuständen in einer Single-Page-App (SPA) und das Animieren der Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Konzepte und Nutzung

View-Übergänge sind eine beliebte Designentscheidung, um die kognitive Belastung der Benutzer zu reduzieren, ihnen zu helfen, im Kontext zu bleiben, und die wahrgenommene Ladezeit zu verringern, während sie zwischen Zuständen oder Ansichten einer Anwendung wechseln.

Allerdings war das Erstellen von View-Übergängen im Web bisher schwierig:

- Übergänge zwischen Zuständen in Single-Page-Apps (SPAs) erfordern normalerweise umfangreiches CSS und JavaScript, um:
  - Das Laden und Positionieren der alten und neuen Inhalte zu bearbeiten.
  - Die alten und neuen Zustände zu animieren, um den Übergang zu erstellen.
  - Zu verhindern, dass unbeabsichtigte Benutzerinteraktionen mit den alten Inhalten Probleme verursachen.
  - Die alten Inhalte zu entfernen, sobald der Übergang abgeschlossen ist.
    Barrierefreiheitsprobleme wie der Verlust der Leseposition, Verwirrung der Fokus-Reihenfolge und ungewöhnliches Verhalten von Live-Bereichen können auch resultieren, wenn sowohl der neue als auch der alte Inhalt gleichzeitig im DOM vorhanden sind.
- Cross-Dokument-Übergänge (d.h. über Navigationsvorgänge zwischen verschiedenen Seiten in MPAs) waren bisher unmöglich.

Die View Transition API bietet einen einfachen Weg, die erforderlichen View-Änderungen und Übergangsanimationen für beide genannten Anwendungsfälle zu behandeln.

Das Erstellen eines View-Übergangs, der die Standard-Übergangsanimationen des Browsers verwendet, ist sehr schnell zu erledigen, und es gibt Funktionen, die es Ihnen ermöglichen, sowohl die Übergangsanimation anzupassen als auch den View-Übergang selbst zu manipulieren (zum Beispiel Umstände festzulegen, unter denen die Animation übersprungen wird), sowohl für SPA- als auch MPA-View-Übergänge.

Siehe [Using the View Transition API](/de/docs/Web/API/View_Transition_API/Using) für weitere Informationen.

## Schnittstellen

- [`ViewTransition`](/de/docs/Web/API/ViewTransition)
  - : Repräsentiert einen View-Übergang und bietet Funktionalität, um auf den Übergang zu reagieren, wenn verschiedene Zustände erreicht werden (z. B. bereit, um die Animation auszuführen, oder Animation abgeschlossen) oder den Übergang insgesamt zu überspringen.

## Erweiterungen anderer Schnittstellen

- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
  - : Startet einen neuen gleichseitigen (SPA) View-Übergang und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, um ihn zu repräsentieren.
- [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)
  - : Das Ereignisobjekt für das [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis. Während einer Cross-Dokument-Navigation können Sie den zugehörigen View-Übergang manipulieren (indem Sie Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt erhalten) von dem Dokument aus, zu dem navigiert wird, falls ein View-Übergang durch die Navigation ausgelöst wurde.
- [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)
  - : Das Ereignisobjekt für das [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis. Während einer Cross-Dokument-Navigation können Sie den zugehörigen View-Übergang manipulieren (indem Sie Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt erhalten) von dem Dokument aus, von dem aus navigiert wird, falls ein View-Übergang durch die Navigation ausgelöst wurde. Es bietet auch Zugriff auf Informationen über den Navigationstyp sowie die Historieneinträge des aktuellen und Ziel-Dokuments.
- Das [`Window`](/de/docs/Web/API/Window) [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis
  - : Wird ausgelöst, wenn ein Dokument erstmals gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "back/forward cache")}} (bfcache) oder {{Glossary("Prerender", "prerender")}}).
- Das [`Window`](/de/docs/Web/API/Window) [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis
  - : Wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll.

## HTML-Ergänzungen

- [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect)
  - : Identifiziert die wichtigsten Inhalte im zugehörigen Dokument für die erste Ansicht der Seite durch den Benutzer. Das Rendern des Dokuments wird blockiert, bis die wesentlichen Inhalte geparst wurden, was einen konsistenten ersten Anstrich und damit einen View-Übergang über alle unterstützenden Browser hinweg gewährleistet.

## CSS-Ergänzungen

### At-Rules

- {{cssxref("@view-transition")}}
  - : Im Falle einer Cross-Dokument-Navigation wird `@view-transition` verwendet, um die aktuellen und Ziel-Dokumente einem View-Übergang zu unterziehen.

### Eigenschaften

- {{cssxref("view-transition-name")}}
  - : Gibt das View-Übergangssnapshot an, an dem ausgewählte Elemente teilnehmen werden, was es einem Element ermöglicht, während eines View-Übergangs separat vom Rest der Seite animiert zu werden.
- {{cssxref("view-transition-class")}}
  - : Bietet eine zusätzliche Methode, um ausgewählte Elemente zu stylen, die einen `view-transition-name` haben.

### Pseudo-Klassen

- {{cssxref(":active-view-transition")}}
  - : Passt Elemente an, wenn ein View-Übergang aktiv ist.
- {{cssxref(":active-view-transition-type()")}}
  - : Passt Elemente an, wenn ein View-Übergang eines bestimmten Typs aktiv ist.

### Pseudo-Elemente

- {{cssxref("::view-transition")}}
  - : Die Wurzel der View-Übergangs-Überlagerung, die alle View-Übergänge enthält und über allen anderen Seiteninhalten liegt.
- {{cssxref("::view-transition-group()")}}
  - : Die Wurzel eines einzigen View-Übergangs.
- {{cssxref("::view-transition-image-pair()")}}
  - : Der Container für die alten und neuen Ansichten eines View-Übergangs — vor und nach dem Übergang.
- {{cssxref("::view-transition-old()")}}
  - : Ein statisches Snapshot der alten Ansicht, vor dem Übergang.
- {{cssxref("::view-transition-new()")}}
  - : Eine Live-Darstellung der neuen Ansicht, nach dem Übergang.

## Beispiele

- [Beispiel für grundlegende View-Übergänge in einer SPA](https://mdn.github.io/dom-examples/view-transitions/spa/): Ein einfaches Bildergalerie-Demo mit View-Übergängen, einschließlich separater Animationen zwischen alten und neuen Bildern sowie alten und neuen Bildunterschriften.
- [Beispiel für grundlegende View-Übergänge in einer MPA](https://mdn.github.io/dom-examples/view-transitions/mpa/): Eine zweiseitige Beispielsseite, die die Nutzung von Cross-Dokument- (MPA) View-Übergängen demonstriert und einen benutzerdefinierten "nach oben wischen" Übergang bietet, wenn zwischen den beiden Seiten navigiert wird.
- [Demo für View-Übergänge mit `match-element`](/de/docs/Web/CSS/view-transition-name#using_the_match-element_value): Eine SPA mit animierten Listenelementen, die die Verwendung des Wertes `match-element` der Eigenschaft `view-transition-name` demonstriert, um einzelne Elemente zu animieren.
- [HTTP 203 Wiedergabeliste](https://http203-playlist.netlify.app/): Eine Video-Player-Demo-App, die mehrere verschiedene SPA-View-Übergänge bietet, von denen viele in [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) erklärt werden.
- [Chrome DevRel View-Übergangs-Demos](https://view-transitions.chrome.dev/): Eine Reihe von Demos zur View Transition API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) auf developer.chrome.com (2024)
- [View Transition API: Creating Smooth Page Transitions](https://stackdiary.com/view-transitions-api/) auf stackdiary.com (2023)
- [View Transitions API: Single Page Apps Without a Framework](https://www.debugbear.com/blog/view-transitions-spa-without-framework) auf DebugBear (2024)

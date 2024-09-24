---
title: View-Übergänge-API
slug: Web/API/View_Transitions_API
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{DefaultAPISidebar("View Transitions API")}}

Die **View Transitions API** bietet einen Mechanismus zum einfachen Erstellen von animierten Übergängen zwischen verschiedenen Ansichten einer Website. Dies umfasst Animationen zwischen DOM-Zuständen in einer Single-Page-App (SPA) und das Animieren der Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Konzepte und Nutzung

Ansichtsübergänge sind ein beliebtes Gestaltungselement, um die kognitive Belastung der Benutzer zu reduzieren, ihnen zu helfen, im Kontext zu bleiben, und die wahrgenommene Ladeverzögerung zu verringern, während sie zwischen Zuständen oder Ansichten einer Anwendung wechseln.

Historisch gesehen war die Erstellung von Ansichtsübergängen im Web jedoch schwierig:

- Übergänge zwischen Zuständen in Single-Page-Apps (SPAs) erforderten oft umfangreiches Schreiben von CSS und JavaScript, um:
  - Das Laden und Positionieren des alten und neuen Inhalts zu handhaben.
  - Die alten und neuen Zustände zu animieren, um den Übergang zu erstellen.
  - Unbeabsichtigte Benutzerinteraktionen mit dem alten Inhalt zu verhindern, die Probleme verursachen könnten.
  - Den alten Inhalt zu entfernen, sobald der Übergang abgeschlossen ist.
    Barrierefreiheitsthemen wie Verlust der Leseposition, Fokusverwirrung und seltsames Verhalten von Live-Region-Ankündigungen können ebenfalls auftreten, wenn der neue und alte Inhalt gleichzeitig im DOM vorhanden sind.
- Übergänge über Dokumente hinweg (d.h. über die Navigation zwischen verschiedenen Seiten in MPAs) waren historisch gesehen unmöglich.

Die View Transitions API bietet eine einfache Methode zur Handhabung der erforderlichen Ansichtsänderungen und Übergangsanimationen für beide der oben genannten Anwendungsfälle.

Die Erstellung eines Ansichtsübergangs, der die Standardübergangsanimationen des Browsers verwendet, ist sehr schnell durchzuführen, und es gibt Funktionen, die es Ihnen ermöglichen, sowohl die Übergangsanimation anzupassen als auch den Ansichtsübergang selbst zu manipulieren (zum Beispiel die Umstände festzulegen, unter denen die Animation übersprungen wird), sowohl für SPA- als auch MPA-Ansichtsübergänge.

Siehe [Verwendung der View Transitions API](/de/docs/Web/API/View_Transitions_API/Using) für weitere Informationen.

## Schnittstellen

- {{domxref("ViewTransition")}}
  - : Repräsentiert einen Ansichtsübergang und bietet Funktionalität, um auf den Übergang zu reagieren, wenn er verschiedene Zustände erreicht (z.B. bereit, um die Animation auszuführen, oder die Animation beendet) oder den Übergang ganz zu überspringen.

## Erweiterungen zu anderen Schnittstellen

- {{domxref("Document.startViewTransition()")}}
  - : Startet einen neuen Same-Document (SPA) Ansichtsübergang und gibt ein {{domxref("ViewTransition")}}-Objekt zurück, um ihn zu repräsentieren.
- {{domxref("PageRevealEvent")}}
  - : Das Ereignisobjekt für das {{domxref("Window.pagereveal_event", "pagereveal")}}-Ereignis. Während einer Navigation über Dokumente hinweg ermöglicht es Ihnen, den zugehörigen Ansichtsübergang zu manipulieren (indem es Zugriff auf das relevante {{domxref("ViewTransition")}}-Objekt bietet) von dem Dokument, zu dem navigiert wird, wenn die Navigation einen Ansichtsübergang ausgelöst hat.
- {{domxref("PageSwapEvent")}}
  - : Das Ereignisobjekt für das {{domxref("Window.pageswap_event", "pageswap")}}-Ereignis. Während einer Navigation über Dokumente hinweg ermöglicht es Ihnen, den zugehörigen Ansichtsübergang zu manipulieren (indem es Zugriff auf das relevante {{domxref("ViewTransition")}}-Objekt bietet) von dem Dokument, von dem navigiert wird, wenn die Navigation einen Ansichtsübergang ausgelöst hat. Es bietet außerdem Zugriff auf Informationen über den Navigationstyp und die aktuellen sowie Zielhistorie-Einträge des Dokuments.
- Das {{domxref("Window")}} {{domxref("Window.pagereveal_event", "pagereveal")}}-Ereignis
  - : Wird ausgelöst, wenn ein Dokument zum ersten Mal gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem [Back/Forward-Cache](/de/docs/Glossary/bfcache) (bfcache) oder [prerender](/de/docs/Glossary/Prerender)).
- Das {{domxref("Window")}} {{domxref("Window.pageswap_event", "pageswap")}}-Ereignis
  - : Wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll.

## Hinzufügungen zu HTML

- [`<link rel="expect">`](/de/docs/Web/HTML/Attributes/rel#expect)
  - : Identifiziert den kritischsten Inhalt im zugehörigen Dokument für die anfängliche Ansicht der Seite durch den Benutzer. Das Rendern des Dokuments wird blockiert, bis der kritische Inhalt analysiert wurde, was einen konsistenten ersten Anstrich — und damit einen Ansichtsübergang — in allen unterstützenden Browsern sicherstellt.

## Hinzufügungen zu CSS

### At-Regeln

- {{cssxref("@view-transition")}}
  - : Im Falle einer Navigation über Dokumente hinweg wird `@view-transition` verwendet, um das aktuelle und das Zielfokument für einen Ansichtsübergang anzumelden.

### Eigenschaften

- {{cssxref("view-transition-name")}}
  - : Verleiht dem ausgewählten Element einen separaten Identifikationsnamen und bewirkt, dass es an einem separaten Ansichtsübergang vom Hauptansichtsübergang teilnimmt — oder an keinem Ansichtsübergang, wenn der Wert `none` angegeben ist.

### Pseudoelemente

- {{cssxref("::view-transition")}}
  - : Der Ursprung des Überlagerung für die Ansichtsübergänge, die alle Ansichtsübergänge enthält und über alle anderen Seiteninhalte gelegt ist.
- {{cssxref("::view-transition-group", "::view-transition-group()")}}
  - : Der Ursprung eines einzelnen Ansichtsübergangs.
- {{cssxref("::view-transition-image-pair", "::view-transition-image-pair()")}}
  - : Der Container für alte und neue Ansichten eines Ansichtsübergangs — vor und nach dem Übergang.
- {{cssxref("::view-transition-old", "::view-transition-old()")}}
  - : Eine statische Momentaufnahme der alten Ansicht, vor dem Übergang.
- {{cssxref("::view-transition-new", "::view-transition-new()")}}
  - : Eine dynamische Darstellung der neuen Ansicht, nach dem Übergang.

## Beispiele

- [Grundlegendes View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/): Ein grundlegendes Bildgalerie-Demo mit Ansichtsübergängen, mit separaten Animationen zwischen alten und neuen Bildern sowie alten und neuen Bildunterschriften.
- [Grundlegendes View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/): Eine Muster-Website mit zwei Seiten, die die Verwendung von Ansichtsübergängen über Dokumente hinweg (MPA) demonstriert und ein benutzerdefiniertes "Hochwischen"-Übergang bietet, wenn zwischen den beiden Seiten navigiert wird.
- [HTTP 203-Wiedergabeliste](https://http203-playlist.netlify.app/): Eine Video-Player-Demo-App, die mehrere verschiedene SPA-Ansichtsübergänge bietet, von denen viele in [Sanfte und einfache Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/) erklärt werden.
- [Liste der Chrome DevRel-Teammitglieder](https://view-transitions.netlify.app/profiles/mpa/): Eine einfache Teamprofilseiten-App, die zeigt, wie die {{domxref("Window.pagereveal_event", "pagereveal")}}- und {{domxref("Window.pageswap_event", "pageswap")}}-Ereignisse verwendet werden, um die ausgehenden und eingehenden Animationen eines Ansichtsübergangs über Dokumente hinweg basierend auf den "Von"- und "Zu"-URLs zu individualisieren.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Sanfte und einfache Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
- [View Transitions API: Erstellen von sanften Seitenübergängen](https://stackdiary.com/view-transitions-api/)

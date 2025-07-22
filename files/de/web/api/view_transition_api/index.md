---
title: View Transition API
slug: Web/API/View_Transition_API
l10n:
  sourceCommit: 462dc4b2f5c9eaef94d21da0f37ec3bf977c5592
---

{{DefaultAPISidebar("View Transition API")}}

Die **View Transition API** bietet eine Methode, um einfach animierte Übergänge zwischen verschiedenen Website-Ansichten zu erstellen. Dies umfasst das Animieren zwischen DOM-Zuständen in einer Single-Page-App (SPA) sowie das Animieren der Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Konzepte und Verwendung

Ansichtsübergänge sind eine beliebte Designentscheidung, um die kognitive Belastung der Benutzer zu reduzieren, ihnen dabei zu helfen, im Kontext zu bleiben, und die wahrgenommene Ladeverzögerung zu verringern, während sie zwischen Zuständen oder Ansichten einer Anwendung wechseln.

Das Erstellen von Ansichtsübergängen im Web war jedoch historisch gesehen schwierig:

- Übergänge zwischen Zuständen in Single-Page-Apps (SPAs) tendieren dazu, bedeutende Mengen an CSS und JavaScript zu erfordern, um:
  - Das Laden und Positionieren des alten und neuen Inhalts zu handhaben.
  - Die alten und neuen Zustände zu animieren, um den Übergang zu schaffen.
  - Unbeabsichtigte Benutzerinteraktionen mit dem alten Inhalt zu vermeiden, die Probleme verursachen könnten.
  - Den alten Inhalt zu entfernen, sobald der Übergang abgeschlossen ist.
    Barrierefreiheitsprobleme wie der Verlust der Leseposition, Fokusverwirrung und seltsames Verhalten bei Live-Region-Ankündigungen können ebenfalls auftreten, wenn neuer und alter Inhalt gleichzeitig im DOM vorhanden sind.
- Dokumentübergreifende Ansichtsübergänge (d.h. bei Navigationen zwischen verschiedenen Seiten in MPAs) waren historisch gesehen unmöglich.

Die View Transition API bietet eine einfache Möglichkeit, die erforderlichen Ansichtsänderungen und Übergangsanimationen für beide oben genannten Anwendungsfälle zu handhaben.

Das Erstellen eines Ansichtsübergangs, der die Standardübergangsanimationen des Browsers nutzt, ist sehr schnell möglich, und es gibt Funktionen, die es Ihnen ermöglichen, sowohl die Übergangsanimation anzupassen als auch den Ansichtsübergang selbst zu manipulieren (zum Beispiel Umstände festlegen, unter denen die Animation übersprungen wird), sowohl für SPA- als auch MPA-Ansichtsübergänge.

Siehe [Using the View Transition API](/de/docs/Web/API/View_Transition_API/Using) für weitere Informationen.

## Schnittstellen

- [`ViewTransition`](/de/docs/Web/API/ViewTransition)
  - : Repräsentiert einen Ansichtsübergang und bietet Funktionen, um auf das Erreichen verschiedener Zustände (z. B. bereit, die Animation auszuführen, oder Animation abgeschlossen) zu reagieren oder den Übergang insgesamt zu überspringen.

## Erweiterungen zu anderen Schnittstellen

- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
  - : Startet einen neuen gleichen Dokumenten (SPA) Ansichtsübergang und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekt zurück, um ihn darzustellen.
- [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)
  - : Das Ereignisobjekt für das [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis. Während einer dokumentübergreifenden Navigation ermöglicht es Ihnen, den zugehörigen Ansichtsübergang zu manipulieren (bietet Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekt) aus dem Dokument, zu dem navigiert wird, wenn ein Ansichtsübergang durch die Navigation ausgelöst wurde.
- [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)
  - : Das Ereignisobjekt für das [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis. Während einer dokumentübergreifenden Navigation ermöglicht es Ihnen, den zugehörigen Ansichtsübergang zu manipulieren (bietet Zugriff auf das relevante [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekt) aus dem Dokument, von dem navigiert wird, wenn ein Ansichtsübergang durch die Navigation ausgelöst wurde. Es bietet auch Zugriff auf Informationen zum Navigationstyp sowie zu aktuellen und Ziel-Dokument-Historieeinträgen.
- Das [`Window`](/de/docs/Web/API/Window) [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis
  - : Wird ausgelöst, wenn ein Dokument erstmals gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "back/forward cache")}} (bfcache) oder {{Glossary("Prerender", "Prerender")}}).
- Das [`Window`](/de/docs/Web/API/Window) [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis
  - : Wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen wird.

## HTML-Ergänzungen

- [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect)
  - : Identifiziert den wichtigsten Inhalt im zugehörigen Dokument für die anfängliche Ansicht der Seite des Benutzers. Die Dokumentdarstellung wird blockiert, bis der kritische Inhalt analysiert wurde, um ein konsistentes erstes Bild — und damit einen Ansichtsübergang — in allen unterstützenden Browsern sicherzustellen.

## CSS-Ergänzungen

### At-Regeln

- {{cssxref("@view-transition")}}
  - : Im Falle einer dokumentübergreifenden Navigation wird `@view-transition` verwendet, um sich für einen Ansichtsübergang des aktuellen und Ziel-Dokuments zu entscheiden.

### Eigenschaften

- {{cssxref("view-transition-name")}}
  - : Gibt das Ansichtsübergang-Snapshot an, an dem ausgewählte Elemente teilnehmen werden, was es einem Element ermöglicht, während eines Ansichtsübergangs separat vom Rest der Seite animiert zu werden.
- {{cssxref("view-transition-class")}}
  - : Bietet eine zusätzliche Methode zum Stylen ausgewählter Elemente, die einen `view-transition-name` haben.

### Pseudo-Klassen

- {{cssxref(":active-view-transition")}}
  - : Passt auf Elemente, wenn ein Ansichtsübergang im Gange ist.
- {{cssxref(":active-view-transition-type()")}}
  - : Passt auf Elemente, wenn ein Ansichtsübergang eines bestimmten Typs im Gange ist.

### Pseudo-Elemente

- {{cssxref("::view-transition")}}
  - : Die Wurzel der Ansichtsübergänge-Überlagerung, die alle Ansichtsübergänge enthält und über dem gesamten anderen Seiteninhalt sitzt.
- {{cssxref("::view-transition-group()")}}
  - : Die Wurzel eines einzelnen Ansichtsübergangs.
- {{cssxref("::view-transition-image-pair()")}}
  - : Der Container für die alten und neuen Ansichten eines Ansichtsübergangs — vor und nach dem Übergang.
- {{cssxref("::view-transition-old()")}}
  - : Eine statische Momentaufnahme der alten Ansicht, vor dem Übergang.
- {{cssxref("::view-transition-new()")}}
  - : Eine Live-Darstellung der neuen Ansicht, nach dem Übergang.

## Beispiele

- [Grundlegende Ansichtsübergänge SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/): Eine grundlegende Bildgalerie-Demo mit Ansichtsübergängen, die separate Animationen zwischen alten und neuen Bildern sowie alten und neuen Bildunterschriften zeigt.
- [Grundlegende Ansichtsübergänge MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/): Eine Beispielseite mit zwei Seiten, die die Verwendung von dokumentübergreifenden (MPA) Ansichtsübergängen demonstriert und einen benutzerdefinierten "Hochwisch"-Übergang bietet, wenn zwischen den beiden Seiten navigiert wird.
- [Ansichtsübergänge match-element Demo](https://mdn.github.io/dom-examples/view-transitions/match-element/): Eine SPA mit animierten Listenelementen, die die Verwendung des Werts `match-element` der Eigenschaft `view-transition-name` demonstriert.
- [HTTP 203 Wiedergabeliste](https://http203-playlist.netlify.app/): Eine Videoplayer-Demo-App, die mehrere verschiedene SPA-Ansichtsübergänge bietet, von denen viele in [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) erklärt werden.
- [Chrome DevRel Ansichtsübergänge Demos](https://view-transitions.chrome.dev/): Eine Serie von View Transition API Demos.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) auf developer.chrome.com (2024)
- [View Transition API: Creating Smooth Page Transitions](https://stackdiary.com/view-transitions-api/) auf stackdiary.com (2023)
- [View Transitions API: Single Page Apps Without a Framework](https://www.debugbear.com/blog/view-transitions-spa-without-framework) auf DebugBear (2024)

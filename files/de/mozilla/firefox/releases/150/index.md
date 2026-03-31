---
title: Firefox 150 Versionshinweise für Entwickler (Beta)
short-title: Firefox 150 (Beta)
slug: Mozilla/Firefox/Releases/150
l10n:
  sourceCommit: 8bc98818dfbc851ee6749b123e98f5eeb7e43923
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 150, die Entwickler betreffen.
Firefox 150 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [21. April 2026](https://whattrainisitnow.com/release/?version=150) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Hinweise schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

<!-- ### CSS -->

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

#### DOM

- Das Argument [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) der Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wird jetzt unterstützt.
  Dies ermöglicht der Methode, den Knoten zurückzugeben, der den Cursor innerhalb eines Shadow DOM enthält, vorausgesetzt, der zugehörige [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) wurde als Option übergeben.
  ([Firefox Bug 1914596](https://bugzil.la/1914596)).

- Die nicht-standardisierte Methode [`caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wird jetzt unterstützt. ([Firefox Bug 1550635](https://bugzil.la/1550635)).
- Die Methode `ariaNotify()` wird jetzt auf [`Document`](/de/docs/Web/API/Document/ariaNotify) und [`Element`](/de/docs/Web/API/Element/ariaNotify) unterstützt.
  Diese stellt eine Zeichenkette in die Warteschlange, die von einem {{Glossary("screen_reader", "Screenreader")}} angesagt werden soll und bietet eine ergonomischere und zuverlässigere Alternative zu [ARIA-Live-Bereichen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions).
  ([Firefox Bug 2018095](https://bugzil.la/2018095)).

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Das Verhalten von {{WebExtAPIRef("tabs.move")}} wurde für geteilte Ansichten aktualisiert, sodass:
  - Die Reihenfolge der Tabs in einer geteilten Ansicht getauscht werden kann. ([Firefox Bug 2016762](https://bugzil.la/2016762))
  - Wenn die Liste der Tabs sowohl geteilte Ansicht-Tabs als auch ein oder mehr Tabs umfasst, die zwischen ihnen platziert werden, werden die Tabs auseinander verschoben und die geteilte Ansicht geschlossen. ([Firefox Bug 2022549](https://bugzil.la/2022549))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Web-Features

Diese Features sind in Firefox 150 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

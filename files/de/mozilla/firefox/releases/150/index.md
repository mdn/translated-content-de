---
title: Firefox 150 Versionshinweise für Entwickler (Beta)
short-title: Firefox 150 (Beta)
slug: Mozilla/Firefox/Releases/150
l10n:
  sourceCommit: 77310c7693ce7d92cfaee81a9c33537771d3feb0
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 150, die Entwickler betreffen.
Firefox 150 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [21. April 2026](https://whattrainisitnow.com/release/?version=150) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

## Änderungen für Webentwickler

### HTML

- Das `"auto"`-Schlüsselwort wird nun als Option für das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut von `<img>`-Elementen (und [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)) unterstützt.
  Dies ermöglicht lazy-loaded `<img>`-Elementen, die berechnete Bildlayoutgröße zu verwenden, nachdem CSS angewendet wurde, um auszuwählen, welches Bild aus einem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) angezeigt werden soll.
  Dies ist einfacher, als Medienbedingungen und ihre zugehörigen Größen im Attribut anzugeben, was wahrscheinlich ein Verhalten dupliziert, das bereits in CSS-Medienabfragen erfasst wurde.
  ([Firefox Bug 1819581](https://bugzil.la/1819581)).

### CSS

- Die [`light-dark()`](/de/docs/Web/CSS/Reference/Values/color_value/light-dark) CSS-Funktion akzeptiert jetzt [`<image>`](/de/docs/Web/CSS/Reference/Values/image) Werte. Dies erlaubt die Verwendung von Bildern, Verläufen usw. für verschiedene Farbschemata.
  ([Firefox Bug 2023569](https://bugzil.la/2023569)).

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) gibt jetzt `false` zurück, wenn das zu ersetzende Element {{htmlelement("html")}} im HTML [Namensraum](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) ist.
  Anders ausgedrückt, Sie können diese Methode nicht verwenden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu erstellen, der das `<html>`-Element durch seinen inneren Inhalt ersetzt. ([Firefox Bug 2022176](https://bugzil.la/2022176)).

#### DOM

- Das Argument [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) der Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wird jetzt unterstützt.
  Dies ermöglicht es der Methode, den Knoten zurückzugeben, der den Cursor innerhalb eines Shadow DOM enthält, vorausgesetzt, dass dessen zugehöriger [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) als Option übergeben wurde.
  ([Firefox Bug 1914596](https://bugzil.la/1914596)).

- Die nicht standardisierte Methode [`caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wird jetzt unterstützt. ([Firefox Bug 1550635](https://bugzil.la/1550635)).
- Die Methode `ariaNotify()` wird nun auf [`Document`](/de/docs/Web/API/Document/ariaNotify) und [`Element`](/de/docs/Web/API/Element/ariaNotify) unterstützt.
  Dies stellt eine Zeichenfolge von Text in die Warteschlange, die von einem {{Glossary("screen_reader", "Screenreader")}} angesagt werden soll, und bietet eine ergonomischere und zuverlässigere Alternative zu [ARIA Live-Bereichen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions).
  ([Firefox Bug 2018095](https://bugzil.la/2018095)).

## Änderungen für Add-on-Entwickler

- Das Verhalten von {{WebExtAPIRef("tabs.move")}} wurde für geteilte Ansichten aktualisiert, sodass:
  - Die Reihenfolge der Tabs in einer geteilten Ansicht ausgetauscht werden kann. ([Firefox Bug 2016762](https://bugzil.la/2016762))
  - Wenn die Liste der Tabs sowohl Tabs aus geteilten Ansichten als auch einen oder mehrere dazwischen liegende Tabs enthält, werden die Tabs auseinander verschoben und die geteilte Ansicht geschlossen. ([Firefox Bug 2022549](https://bugzil.la/2022549))

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 150 aktiviert, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Scoped Custom Element Registries**: `dom.scoped-custom-element-registries.enabled`

  Die Eigenschaft [`customElementRegistry`](/de/docs/Web/API/CustomElementRegistry) wird auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt.
  Dies erlaubt die Definition von [scoped custom element registries](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries).
  ([Firefox Bug 2018900](https://bugzil.la/2018900)).

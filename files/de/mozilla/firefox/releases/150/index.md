---
title: Firefox 150 Versionshinweise für Entwickler (Beta)
short-title: Firefox 150 (Beta)
slug: Mozilla/Firefox/Releases/150
l10n:
  sourceCommit: 349453ff6528d70f57df473ffae5f37520f46d7d
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 150, die Entwickler betreffen.
Firefox 150 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [21. April 2026](https://whattrainisitnow.com/release/?version=150) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften ein, für die Sie Anmerkungen schreiben -->

## Änderungen für Web-Entwickler

<!-- ### Entwickler-Tools -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- Die [`light-dark()`](/de/docs/Web/CSS/Reference/Values/color_value/light-dark) CSS-Funktion akzeptiert jetzt [`<image>`](/de/docs/Web/CSS/Reference/Values/image) Werte. Dies ermöglicht die Verwendung von Bildern, Verläufen usw. für verschiedene Farbschemata.
  ([Firefox Bug 2023569](https://bugzil.la/2023569)).

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

- Das [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) Argument der [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) Methode wird jetzt unterstützt.
  Dies ermöglicht es der Methode, den Knoten zurückzugeben, der den Cursor innerhalb eines Shadow DOM enthält, vorausgesetzt, dass das zugehörige [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) als Option übergeben wurde.
  ([Firefox Bug 1914596](https://bugzil.la/1914596)).

- Die nicht standardisierte [`caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) Methode der [`Document`](/de/docs/Web/API/Document) Schnittstelle wird jetzt unterstützt. ([Firefox Bug 1550635](https://bugzil.la/1550635)).
- Die `ariaNotify()` Methode wird jetzt auf [`Document`](/de/docs/Web/API/Document/ariaNotify) und [`Element`](/de/docs/Web/API/Element/ariaNotify) unterstützt.
  Dies stellt eine Zeichenfolge von Text in die Warteschlange, die von einem {{Glossary("screen_reader", "Screen Reader")}} angekündigt werden soll und bietet eine ergonomischere und zuverlässigere Alternative zu [ARIA Live Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions).
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
  - Die Reihenfolge der Tabs in einer geteilten Ansicht vertauscht werden kann. ([Firefox Bug 2016762](https://bugzil.la/2016762))
  - Wenn die Liste der Tabs sowohl geteilte Ansichts-Tabs enthält und ein oder mehrere Tabs zwischen ihnen platziert werden, werden die Tabs getrennt und die geteilte Ansicht geschlossen. ([Firefox Bug 2022549](https://bugzil.la/2022549))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 150 verfügbar, jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Scoped Custom Element Registries**: `dom.scoped-custom-element-registries.enabled`

  Die [`customElementRegistry`](/de/docs/Web/API/CustomElementRegistry) Eigenschaft wird auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt.
  Dies ermöglicht die Definition von [Scoped Custom Element Registries](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries).
  ([Firefox Bug 2018900](https://bugzil.la/2018900)).

---
title: Firefox 150 Versionshinweise für Entwickler (Beta)
short-title: Firefox 150 (Beta)
slug: Mozilla/Firefox/Releases/150
l10n:
  sourceCommit: ee8d82679c2c915378ecea36983cb65a343ad9e7
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 150, die Entwickler betreffen.
Firefox 150 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [21. April 2026](https://whattrainisitnow.com/release/?version=150) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie Überschriften ein, für die Sie Hinweise schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

### HTML

- Das Schlüsselwort `"auto"` wird jetzt als Option für das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut von `<img>`-Elementen (und [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)) unterstützt.
  Dies ermöglicht es verzögert geladenen `<img>`-Elementen, die berechnete Bildlayoutgröße nach Anwendung von CSS zu verwenden, um auszuwählen, welches Bild aus einem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) angezeigt werden soll.
  Dies ist einfacher als das Festlegen von Medienbedingungen und deren zugehörigen Größen im Attribut, was wahrscheinlich ein Verhalten dupliziert, das bereits in CSS-Medienabfragen erfasst wird.
  ([Firefox-Bug 1819581](https://bugzil.la/1819581)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- Die CSS-Funktion [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) akzeptiert jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Werte anstelle von nur zwei. Dies ermöglicht das Mischen einer beliebigen Anzahl von Farben. ([Firefox-Bug 2024171](https://bugzil.la/2024171)).

- Die CSS-Funktion [`light-dark()`](/de/docs/Web/CSS/Reference/Values/color_value/light-dark) akzeptiert jetzt [`<image>`](/de/docs/Web/CSS/Reference/Values/image)-Werte. Dies ermöglicht die Verwendung von Bildern, Verläufen usw. für verschiedene Farbschemata.
  ([Firefox-Bug 2023569](https://bugzil.la/2023569)).

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) gibt jetzt `false` zurück, wenn das zu ersetzende Element {{htmlelement("html")}} im HTML-[Namensraum](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) ist.
  Mit anderen Worten, Sie können diese Methode nicht verwenden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu erstellen, der das `<html>`-Element durch seinen inneren Inhalt ersetzt. ([Firefox-Bug 2022176](https://bugzil.la/2022176)).

#### DOM

- Das Argument [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) der Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wird jetzt unterstützt.
  Dies ermöglicht es der Methode, das Knoten zu liefern, das die Einfügemarke innerhalb eines Shadow DOMs enthält, vorausgesetzt, sein zugehöriges [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) wurde als Option übergeben.
  ([Firefox-Bug 1914596](https://bugzil.la/1914596)).

- Die nicht standardmäßige Methode [`caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wird jetzt unterstützt. ([Firefox-Bug 1550635](https://bugzil.la/1550635)).
- Die Methode `ariaNotify()` wird jetzt auf [`Document`](/de/docs/Web/API/Document/ariaNotify) und [`Element`](/de/docs/Web/API/Element/ariaNotify) unterstützt.
  Dies stellt eine Textzeichenfolge zur Verfügung, die von einem {{Glossary("screen_reader", "Screenreader")}} angekündigt werden soll, was eine ergonomischere und zuverlässigere Alternative zu [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) bietet.
  ([Firefox-Bug 2018095](https://bugzil.la/2018095)).

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Das Verhalten von {{WebExtAPIRef("tabs.move")}} wurde für Split-Views aktualisiert, sodass:
  - Die Reihenfolge der Tabs in einer geteilten Ansicht vertauscht werden kann. ([Firefox-Bug 2016762](https://bugzil.la/2016762))
  - Wenn die Liste der Tabs sowohl Split-View-Tabs als auch ein oder mehrere Tabs enthält, die zwischen ihnen platziert werden, werden die Tabs auseinander bewegt und die geteilte Ansicht geschlossen. ([Firefox-Bug 2022549](https://bugzil.la/2022549))
- Ein Problem wurde behoben, bei dem einige JavaScript-[`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Aufrufe das CSS nicht importierten. ([Firefox-Bug 2016369](https://bugzil.la/2016369))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Web-Features

Diese Features werden in Firefox 150 ausgeliefert, sind aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzten Sie diese auf `true`.
Sie können weitere solcher Funktionen auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features) finden.

- **Gescopte benutzerdefinierte Element-Registries**: `dom.scoped-custom-element-registries.enabled`

  Die Eigenschaft [`customElementRegistry`](/de/docs/Web/API/CustomElementRegistry) wird auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt.
  Dies ermöglicht die Definition von [gescopten benutzerdefinierten Element-Registries](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries).
  ([Firefox-Bug 2018900](https://bugzil.la/2018900)).

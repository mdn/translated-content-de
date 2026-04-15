---
title: Firefox 150 Versionshinweise für Entwickler (Beta)
short-title: Firefox 150 (Beta)
slug: Mozilla/Firefox/Releases/150
l10n:
  sourceCommit: 30b188bef30df12b7afb90069a373abad6f4f6cf
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 150, die Entwickler betreffen.
Firefox 150 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [21. April 2026](https://whattrainisitnow.com/release/?version=150) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie Überschriften aus, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

### Entwickler-Tools

- Eine spezifische Nachricht wird nun im [_Antwort-Tab_ des Netzwerk-Bereiches](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) angezeigt, um zu erklären, warum es keine Antwortdaten gibt, wenn eine Anfrage umgeleitet wurde.
  ([Firefox Bug 2016679](https://bugzil.la/2016679)).

### HTML

- Das `"auto"` Schlüsselwort wird nun als Option für das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attribut von `<img>` Elementen (und [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)) unterstützt.
  Dies ermöglicht es, dass nach dem Anwenden von CSS lazy-geladene `<img>` Elemente die berechnete Bildlayoutgröße nutzen, um auszuwählen, welches Bild aus einem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) angezeigt werden soll.
  Dies ist einfacher, als Medienbedingungen und deren zugehörige Größen im Attribut anzugeben, was wahrscheinlich ein bereits in CSS-Medienabfragen erfasstes Verhalten dupliziert.
  ([Firefox Bug 1819581](https://bugzil.la/1819581)).

### CSS

- Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion akzeptiert jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, anstatt nur zwei. Das ermöglicht es, beliebig viele Farben zu mischen. ([Firefox Bug 2024171](https://bugzil.la/2024171)).

- Die [`light-dark()`](/de/docs/Web/CSS/Reference/Values/color_value/light-dark) CSS-Funktion akzeptiert nun [`<image>`](/de/docs/Web/CSS/Reference/Values/image) Werte. Dies ermöglicht es, Bilder, Verläufe usw. für verschiedene Farbschemata zu verwenden.
  ([Firefox Bug 2023569](https://bugzil.la/2023569)).

- Die medienbasierten Pseudoklassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}} und {{cssxref(":volume-locked")}} werden jetzt unterstützt. Sie erlauben es, {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente basierend auf ihrem aktuellen Zustand, wie z.B. Abspielen oder Pause, zu gestalten. ([Firefox Bug 2020775](https://bugzil.la/2020775)).

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) wird jetzt `false` zurückgeben, wenn das zu ersetzende Element {{htmlelement("html")}} im HTML [Namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) ist.
  Mit anderen Worten, Sie können diese Methode nicht verwenden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu erstellen, der das `<html>` Element mit seinem inneren Inhalt ersetzt. ([Firefox Bug 2022176](https://bugzil.la/2022176)).

#### DOM

- Das Argument [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) der Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wird jetzt unterstützt.
  Dies ermöglicht der Methode, den Knoten zurückzugeben, der den Cursor innerhalb eines Shadow DOM enthält, vorausgesetzt, sein zugehöriger [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) wurde als Option übergeben.
  ([Firefox Bug 1914596](https://bugzil.la/1914596)).

- Die nicht-standardmäßige Methode [`caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) der [`Document`](/de/docs/Web/API/Document) Schnittstelle wird jetzt unterstützt. ([Firefox Bug 1550635](https://bugzil.la/1550635)).
- Die Methode `ariaNotify()` wird jetzt auf [`Document`](/de/docs/Web/API/Document/ariaNotify) und [`Element`](/de/docs/Web/API/Element/ariaNotify) unterstützt.
  Diese stellt eine Zeichenfolge in die Warteschlange, die von einem {{Glossary("screen_reader", "Screenreader")}} angesagt wird, und bietet eine ergonomischere und zuverlässigere Alternative zu [ARIA Live Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions).
  ([Firefox Bug 2018095](https://bugzil.la/2018095)).

## Änderungen für Add-on-Entwickler

- Das Verhalten von {{WebExtAPIRef("tabs.move")}} wurde für Split-Ansichten aktualisiert, sodass:
  - Die Reihenfolge von Tabs in einer Split-Ansicht getauscht werden kann. ([Firefox Bug 2016762](https://bugzil.la/2016762))
  - Wenn die Liste der Tabs sowohl Split-View-Tabs umfasst und ein oder mehrere Tabs zwischen ihnen platziert werden, werden die Tabs auseinanderbewegt und die Split-Ansicht geschlossen. ([Firefox Bug 2022549](https://bugzil.la/2022549))
- Ein Problem wurde behoben, bei dem einige JavaScript [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Aufrufe fehlgeschlagen sind, um CSS zu importieren. ([Firefox Bug 2016369](https://bugzil.la/2016369))

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 150 integriert, jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Sie finden weitere solcher Funktionen auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Attributs mit Namensräumen in der `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion akzeptiert nun [Attributs mit Namensräumen](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dies ermöglicht es, Attribute von Elementen von [XML](/de/docs/Web/XML)-basierten Sprachen, wie [SVG](/de/docs/Web/SVG), zu verwenden und entsprechend zu gestalten. ([Firefox Bug 2014060](https://bugzil.la/2014060))

- **Absolut positionierte Elemente in mehrspaltigen Containern und beim Drucken**: `layout.abspos.fragmentainer-aware-positioning.enabled`

  Absolut positionierte Elemente innerhalb von [mehrspaltigen Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken sind jetzt korrekt positioniert und fragmentiert. Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layout-Probleme wie überlappenden Text oder Inhaltverlust. ([Firefox Bug 2018797](https://bugzil.la/2018797)).

- **Gezielte registrierter benutzerdefinierter Elemente**: `dom.scoped-custom-element-registries.enabled`

  Die Eigenschaft [`customElementRegistry`](/de/docs/Web/API/CustomElementRegistry) wird auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element), und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt.
  Dies ermöglicht die Definition von [gezielten registrierter benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries).
  ([Firefox Bug 2018900](https://bugzil.la/2018900)).

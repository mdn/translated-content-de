---
title: Firefox 159 – Versionshinweise für Entwickler (Beta)
short-title: Firefox 159 (Beta)
slug: Mozilla/Firefox/Releases/159
l10n:
  sourceCommit: 30f17ced3a8fc8172e11e7379893d4e61f5bdd61
---

Dieser Artikel informiert über die Änderungen in Firefox 159, die für Entwickler relevant sind.
Firefox 159 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und erscheint am [27. Oktober 2026](https://whattrainisitnow.com/release/?version=159).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte entfernen Sie die Kommentarzeichen bei den Überschriften, zu denen Sie Hinweise verfassen. -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

#### Entfernungen

- Die bisherige Syntax für das Masonry-Layout wurde entfernt: der Wert `masonry` der Eigenschaften {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} sowie die Eigenschaft `masonry-auto-flow`. Diese Syntax war standardmäßig nur in Nightly aktiviert, gesteuert durch die Einstellung `layout.css.grid-template-masonry-value.enabled`. Sie wurde durch das [Grid-Lanes-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Grid_lanes) ersetzt, das die Werte `grid-lanes` und `inline-grid-lanes` der Eigenschaft {{cssxref("display")}} verwendet. ([Firefox-Bug 2077170](https://bugzil.la/2077170))

<!-- ### JavaScript -->

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Methoden zur Bereinigung von HTML mit der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API), etwa [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML), entfernen unerwünschte Elemente und Attribute jetzt bereits beim Parsen des Markups. Bisher wurde zunächst das gesamte Markup geparst und anschließend der entstandene DOM-Baum bereinigt. Das Ergebnis ist dasselbe, mit einer Ausnahme: Benachbarter Text befindet sich nun in einem einzigen Textknoten, statt auf mehrere verteilt zu sein. ([Firefox-Bug 2070498](https://bugzil.la/2070498))

#### DOM

- [Bereichsgebundene Custom-Element-Registries](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) werden jetzt unterstützt. Damit kann für einen Shadow-Tree eine unabhängige [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) erstellt werden, deren Definitionen nur für diesen DOM-Teilbaum gelten. So lassen sich Namenskonflikte vermeiden, wenn mehrere Web Components Elemente mit demselben Namen deklarieren. Die Eigenschaft `customElementRegistry` kann für [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) verwendet werden. Der [Konstruktor `CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry) erstellt ein neues `CustomElementRegistry`-Objekt zur bereichsgebundenen Verwendung. ([Firefox-Bug 2070506](https://bugzil.la/2070506))

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemeines -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 159 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der jeweiligen Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Numerische CSS-Factory-Funktionen in Workern und Worklets verfügbar**: `layout.css.namespace.exposed-in-workers-and-worklets`

  Die [numerischen Factory-Funktionen](/de/docs/Web/API/CSS/factory_functions_static) des Namensraums [`CSS`](/de/docs/Web/API/CSS), beispielsweise `CSS.px()`, sind jetzt auch in Workern und Paint Worklets verfügbar, nicht mehr nur auf `Window`. Sie sind Teil der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API). Außerhalb von Nightly muss daher zusätzlich die Einstellung `layout.css.typed-om.enabled` auf `true` gesetzt sein. ([Firefox-Bug 2079188](https://bugzil.la/2079188))

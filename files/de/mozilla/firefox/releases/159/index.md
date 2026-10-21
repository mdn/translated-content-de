---
title: Firefox 159 – Versionshinweise für Entwickler (Beta)
short-title: Firefox 159 (Beta)
slug: Mozilla/Firefox/Releases/159
l10n:
  sourceCommit: 7220cba37bea17e7e18a674ec730366e8af815ab
---

Dieser Artikel informiert über Änderungen in Firefox 159, die Entwickler betreffen.
Firefox 159 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und erscheint am [27. Oktober 2026](https://whattrainisitnow.com/release/?version=159).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

### CSS

#### Entfernungen

- Die veraltete Syntax für Masonry-Layouts wurde entfernt: der Wert `masonry` der Eigenschaften {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} sowie die Eigenschaft `masonry-auto-flow`. Diese Syntax war standardmäßig nur in Nightly aktiviert, gesteuert durch die Einstellung `layout.css.grid-template-masonry-value.enabled`. Sie wurde durch das [Grid-Lanes-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Grid_lanes) ersetzt, das die Werte `grid-lanes` und `inline-grid-lanes` der Eigenschaft {{cssxref("display")}} verwendet. ([Firefox-Bug 2077170](https://bugzil.la/2077170))

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- Methoden, die HTML mit der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) bereinigen, beispielsweise [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML), entfernen unerwünschte Elemente und Attribute nun bereits beim Parsen des Markups. Zuvor wurde zunächst das gesamte Markup geparst und anschließend der entstandene DOM-Baum bereinigt. Das Ergebnis ist unverändert, mit einer Ausnahme: Benachbarter Text befindet sich nun in einem einzigen Textknoten, statt auf mehrere verteilt zu sein. ([Firefox-Bug 2070498](https://bugzil.la/2070498))

#### DOM

- [Geltungsbereichsgebundene Registries für benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) werden jetzt unterstützt. Damit kann für einen Shadow Tree eine unabhängige [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) erstellt werden, deren Definitionen nur für diesen bestimmten DOM-Teilbaum gelten. So lassen sich Namenskonflikte vermeiden, wenn mehrere Web Components Elemente mit demselben Namen deklarieren. Die Eigenschaft `customElementRegistry` kann auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) verwendet werden. Der [Konstruktor `CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry) erstellt ein neues `CustomElementRegistry`-Objekt für die Verwendung in einem bestimmten Geltungsbereich. ([Firefox-Bug 2070506](https://bugzil.la/2070506))

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 159 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der jeweiligen Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Numerische CSS-Factory-Funktionen in Workern und Worklets verfügbar**: `layout.css.namespace.exposed-in-workers-and-worklets`

  Die [numerischen Factory-Funktionen](/de/docs/Web/API/CSS/factory_functions_static) des [`CSS`](/de/docs/Web/API/CSS)-Namespace, beispielsweise `CSS.px()`, sind jetzt auch in Workern und Paint Worklets verfügbar, nicht mehr nur auf `Window`. Sie sind Teil der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API). Außerhalb von Nightly muss daher zusätzlich die Einstellung `layout.css.typed-om.enabled` auf `true` gesetzt sein. ([Firefox-Bug 2079188](https://bugzil.la/2079188))

- **Neue Eigenschaften von `MathMLAnchorElement`**: `mathml.a.element.enabled`

  Das Interface [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) unterstützt jetzt die Eigenschaften [`download`](/de/docs/Web/API/MathMLAnchorElement/download), [`ping`](/de/docs/Web/API/MathMLAnchorElement/ping), [`rel`](/de/docs/Web/API/MathMLAnchorElement/rel), [`relList`](/de/docs/Web/API/MathMLAnchorElement/relList) und [`referrerPolicy`](/de/docs/Web/API/MathMLAnchorElement/referrerPolicy). ([Firefox-Bug 2064612](https://bugzil.la/2064612))

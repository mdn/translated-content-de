---
title: Firefox 151 Versionshinweise für Entwickler (Beta)
short-title: Firefox 151 (Beta)
slug: Mozilla/Firefox/Releases/151
l10n:
  sourceCommit: e7f93b8ebd8b26bd6fae71f7b0b6214a671a4ef9
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 151, die Entwickler betreffen.
Firefox 151 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [19. Mai 2026](https://whattrainisitnow.com/release/?version=151) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

<!-- ### Developer Tools -->

### HTML

- Das [`shadowrootslotassignment` Attribut](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) wird nun auf {{htmlelement("template")}} Elementen unterstützt, was die deklarative Definition des Slot-Zuweisungsverhaltens für Shadow Roots ermöglicht.
  Das Attribut wird in JavaScript durch [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment) oder [`HTMLTemplateElement.shadowRootSlotAssignment`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSlotAssignment) widergespiegelt
  ([Firefox Bug 2031295](https://bugzil.la/2031295), [Firefox Bug 2023824](https://bugzil.la/2023824)).

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

### CSS

- Die CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen. Dies erlaubt es Ihnen zu überprüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat und dementsprechend Stile auf seine Kinder anzuwenden. ([Firefox Bug 2016929](https://bugzil.la/2016929), ([Firefox Bug 2019254](https://bugzil.la/2019254)), ([Firefox Bug 2024601](https://bugzil.la/2024601)), [Firefox Bug 2030645](https://bugzil.la/2030645)).

- Die {{cssxref("position-anchor")}} CSS-Eigenschaft unterstützt jetzt den `normal` (Standard-) Wert. Dies ermöglicht die Anpassung an die {{cssxref("position-area")}} Eigenschaft, sodass wenn die `position-area` Eigenschaft aktualisiert wird, die `position-anchor` Eigenschaft ebenfalls aktualisiert wird. ([Firefox Bug 2030351](https://bugzil.la/2030351)).

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) gibt nun `false` zurück, wenn das zu ersetzende Element {{svgelement("svg")}} im SVG [Namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) oder {{mathmlelement("math")}} im MathML-Namespace ist (zusätzlich zu {{htmlelement("html")}}, was in [Firefox 150](/de/docs/Mozilla/Firefox/Releases/150#apis) nicht erlaubt war). ([Firefox Bug 2032359](https://bugzil.la/2032359)).
- Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) wird jetzt auf Desktop-Plattformen unterstützt.
  Dies ermöglicht das Öffnen eines [Always-on-Top-Fensters](/de/docs/Web/API/Document_Picture-in-Picture_API#how_does_it_work), das mit beliebigem HTML-Inhalt gefüllt werden kann.
  Es kann verwendet werden, um Inhalte anzuzeigen, die ein Benutzer separat von der Startseite (oder sogar dem Browser) ansehen möchte, wie z. B. eine Sammlung von Streams, die die Teilnehmer eines Videokonferenzgesprächs zeigen, einen Börsenticker oder einen Countdown-Timer.
  ([Firefox Bug 2006594](https://bugzil.la/2006594)).
- Die [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang) Eigenschaft wird unterstützt, um die Sprache des Zeichenkontextes der Leinwand festzulegen.
  Während ein DOM-Canvas diesen Kontext von dem `lang` Attribut seines zugehörigen {{htmlelement("canvas")}} Elements erben kann, ist dies nützlich, um den Kontext für ein Offscreen-Canvas festzulegen, das möglicherweise gerendert wird, bevor es mit einem `<canvas>` in Verbindung gebracht wird.
  ([Firefox Bug 1943070](https://bugzil.la/1943070)).
- Die [`options.keyboardLock`](/de/docs/Web/API/Element/requestFullscreen#keyboardlock) Eigenschaft kann jetzt als Option an [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) übergeben werden, wodurch Websites die Tastatursperre anfordern können, wenn das Element im Vollbildmodus angezeigt wird.
  Dies verhindert, dass durch die <kbd>Esc</kbd> Taste das Element den Vollbildmodus verlässt (es ist stattdessen ein langes Drücken erforderlich) und einige zuvor reservierte Browser-Hotkeys können jetzt abgefangen und ihre Standardaktion verhindert werden.
  ([Firefox Bug 2032302](https://bugzil.la/2032302)).
- Die [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang) Eigenschaft wird nun unterstützt, wodurch die Darstellungssprache eines Offscreen-Canvas explizit festgelegt und nach der Erstellung des Rendering-Kontextes geändert werden kann.
  ([Firefox Bug 1943070](https://bugzil.la/1943070)).

<!-- #### DOM -->

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}} fügen nun korrekt eine geteilte Ansicht hinzu und entfernen sie, wenn ein Aufruf einen der Reiter der geteilten Ansicht enthält. Bisher scheiterte ein Aufruf oder trennte die geteilte Ansicht. ([Firefox Bug 2029099](https://bugzil.la/2029099))
- {{WebExtAPIRef("tabs.move()")}} verschiebt nun korrekt eine geteilte Ansicht nach rechts, wenn ein Aufruf einen der Reiter der geteilten Ansicht enthält. Bisher verschob ein Aufruf eine geteilte Ansicht nur nach links oder ans Ende der Tab-Liste. ([Firefox Bug 2027855](https://bugzil.la/2027855))

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Webfunktionen

Diese Funktionen werden in Firefox 151 bereitgestellt, sind aber standardmäßig deaktiviert.
Um sie zu testen, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie diese auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`@container style()` Bereichssyntax-Abfragen**: `layout.css.attr.enabled`

  Die CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen unterstützen nun die _Bereichssyntax_. Diese ermöglicht es Ihnen zu prüfen, ob ein Container eine gültige benutzerdefinierte CSS-Eigenschaft hat und deren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=`, und `<=` zu vergleichen und dementsprechend Stile auf seine Kinder anzuwenden. ([Firefox Bug 2024601](https://bugzil.la/2024601)).

- **Fix für verschachtelte scrollbare Bereiche**: `layout.css.fake-webkit-scrollbar.enabled`

  Diese Implementierung wurde hinzugefügt, um ein Problem zu beheben, bei dem scrollbare Inhalte nicht erreichbar waren. Wenn eine Scrollleiste auf `display: none;` oder `width: 0;` gesetzt ist, würden die Scrollleisten verschachtelter scrollbarer Bereiche übereinander gestapelt, was bedeutet, dass einige der Inhalte möglicherweise nicht erreichbar sind. ([Firefox Bug 1977511](https://bugzil.la/1977511)).

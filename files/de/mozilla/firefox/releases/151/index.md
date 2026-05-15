---
title: Firefox 151 Versionshinweise für Entwickler (Beta)
short-title: Firefox 151 (Beta)
slug: Mozilla/Firefox/Releases/151
l10n:
  sourceCommit: 61270783d941e72a9f33e5978c6c04e424ec02e5
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 151, die Entwickler betreffen.
Firefox 151 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [19. Mai 2026](https://whattrainisitnow.com/release/?version=151) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte entfernen Sie das Kommentarzeichen bei allen Überschriften, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

### HTML

- Das [`shadowrootslotassignment` Attribut](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) wird nun bei {{htmlelement("template")}} Elementen unterstützt, sodass eine deklarative Definition des Slot-Zuweisungsverhaltens für Shadow Roots möglich ist.
  Das Attribut wird in JavaScript durch [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment) oder [`HTMLTemplateElement.shadowRootSlotAssignment`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSlotAssignment) veranschaulicht
  ([Firefox Bug 2031295](https://bugzil.la/2031295), [Firefox Bug 2023824](https://bugzil.la/2023824)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernt -->

<!-- ### MathML -->

<!-- #### Entfernt -->

<!-- ### SVG -->

<!-- #### Entfernt -->

### CSS

- Die CSS-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützt `style()` Abfragen. Dies ermöglicht es Ihnen zu prüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat, und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox Bug 2016929](https://bugzil.la/2016929), ([Firefox Bug 2019254](https://bugzil.la/2019254)), ([Firefox Bug 2024601](https://bugzil.la/2024601)), [Firefox Bug 2030645](https://bugzil.la/2030645)).

- Die {{cssxref("position-anchor")}} CSS-Eigenschaft unterstützt jetzt den `normal` (Standard-) Wert. Dies ermöglicht das Angleichen an die {{cssxref("position-area")}} Eigenschaft, sodass, wenn die `position-area` Eigenschaft aktualisiert wird, die `position-anchor` Eigenschaft ebenfalls aktualisiert wird. ([Firefox Bug 2030351](https://bugzil.la/2030351)).

<!-- #### Entfernt -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernt -->

<!-- ### HTTP -->

<!-- #### Entfernt -->

<!-- ### Sicherheit -->

<!-- #### Entfernt -->

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) gibt jetzt `false` zurück, wenn das zu ersetzende Element {{svgelement("svg")}} im SVG [Namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) oder {{mathmlelement("math")}} im MathML-Namespace ist (zusammen mit {{htmlelement("html")}}, das in [Firefox 150](/de/docs/Mozilla/Firefox/Releases/150#apis) nicht erlaubt war).
  ([Firefox Bug 2032359](https://bugzil.la/2032359)).
- Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) wird nun auf Desktop-Plattformen unterstützt.
  Dadurch wird es möglich, ein [immer im Vordergrund Fenster](/de/docs/Web/API/Document_Picture-in-Picture_API#how_does_it_work) zu öffnen, das mit beliebigem HTML-Inhalt gefüllt werden kann.
  Es kann verwendet werden, um jeglichen Inhalt anzuzeigen, den ein Benutzer separat von der Startseite (oder sogar dem Browser) anzeigen möchte, wie beispielsweise eine Reihe von Streams, die die Teilnehmer eines Videokonferenzgesprächs zeigen, ein Börsenticker oder ein Countdown-Timer.
  ([Firefox Bug 2006594](https://bugzil.la/2006594)).
- Die [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang) Eigenschaft wird unterstützt, um die Sprache des Zeichenkontexts für das Canvas festzulegen.
  Während ein DOM-Canvas diesen Kontext vom `lang` Attribut seines zugehörigen {{htmlelement("canvas")}} Elements erben kann, ist dies nützlich, um den Kontext für ein Offscreen-Canvas festzulegen, das möglicherweise gerendert wird, bevor es mit einem `<canvas>` verbunden wird.
  ([Firefox Bug 1943070](https://bugzil.la/1943070)).
- Die Eigenschaft [`options.keyboardLock`](/de/docs/Web/API/Element/requestFullscreen#keyboardlock) kann jetzt als Option an [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) übergeben werden, wodurch Websites eine Tastatursperre anfordern können, wenn das Element im Vollbildmodus angezeigt wird.
  Dadurch wird verhindert, dass die <kbd>Esc</kbd>-Taste dazu führt, dass das Element den Vollbildmodus verlässt (ein langes Drücken ist stattdessen erforderlich), und einige vormals reservierte Browser-Hotkeys können jetzt abgefangen und deren Standardaktion verhindert werden.
  ([Firefox Bug 2032302](https://bugzil.la/2032302)).
- Die [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang) Eigenschaft wird jetzt unterstützt, sodass die Darstellungssprache eines Offscreen-Canvas explizit angegeben und nach Erstellung des Zeichenkontexts geändert werden kann.
  ([Firefox Bug 1943070](https://bugzil.la/1943070)).
- Die [`CSSContainerRule.conditions`](/de/docs/Web/API/CSSContainerRule/conditions) Eigenschaft wird jetzt unterstützt und spiegelt die Unterstützung der CSS-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) für mehrere durch Kommas getrennte Container-Bedingungen wider.
  Die `condition` Eigenschaft stellt eine entsprechende `@container` als Array von Objekten dar, wobei jedes Objekt eine einzelne Container-Bedingung repräsentiert.
  ([Firefox Bug 2022827](https://bugzil.la/2022827)).

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernt -->

<!-- ### WebAssembly -->

<!-- #### Entfernt -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}} fügen jetzt korrekt eine geteilte Ansicht hinzu und entfernen sie, wenn ein Aufruf eines der Tabs der geteilten Ansicht enthält. Zuvor war ein Aufruf fehlgeschlagen oder trennte die geteilte Ansicht. ([Firefox Bug 2029099](https://bugzil.la/2029099))
- {{WebExtAPIRef("tabs.move()")}} verschiebt jetzt korrekt eine geteilte Ansicht nach rechts, wenn ein Aufruf eines der Tabs der geteilten Ansicht enthält. Zuvor wurde eine geteilte Ansicht nur nach links oder ans Ende der Tab-Liste verschoben. ([Firefox Bug 2027855](https://bugzil.la/2027855))

<!-- ### Entfernt -->

<!-- ### Sonstiges -->

## Experimentelle Webfunktionen

Diese Funktionen werden in Firefox 151 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`@container style()` Bereichssyntax-Abfragen**: `layout.css.attr.enabled`

  Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-Regel [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen unterstützen nun die _Bereichssyntax_. Dies ermöglicht es Ihnen zu überprüfen, ob ein Container eine gültige benutzerdefinierte CSS-Eigenschaft hat und deren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` zu vergleichen und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox Bug 2024601](https://bugzil.la/2024601)).

- **`field-sizing` Eigenschaft**: `layout.css.field-sizing.enabled`

  Die {{cssxref("field-sizing")}} CSS-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formularelementen zu steuern. Diese Eigenschaft hat zwei Werte: `content` erlaubt Elementen, sich an ihre Inhalte anzupassen, und `fixed` legt eine feste Größe für Elemente fest. ([Firefox Bug 1977176](https://bugzil.la/1977176)).

- **Behebung für verschachtelte scrollbare Bereiche**: `layout.css.fake-webkit-scrollbar.enabled`

  Diese Implementierung wurde hinzugefügt, um ein Problem zu beheben, bei dem scrollbare Inhalte nicht erreichbar waren. Wenn eine Scrollleiste auf `display: none;` oder `width: 0;` eingestellt ist, würden die Scrollleisten verschachtelter scrollbarer Bereiche übereinander gestapelt werden, was bedeutet, dass einige der Inhalte möglicherweise nicht erreichbar sind. ([Firefox Bug 1977511](https://bugzil.la/1977511)).

- **`<timeline-range-name>` Werte**: `layout.css.scroll-driven-animations.enabled`

  Die {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}} CSS-Eigenschaften und die {{cssxref("animation-range")}} Kurzschreibweise-Eigenschaft unterstützen nun [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) Werte. Diese [`<timeline-range-name>`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) Werte ermöglichen es Ihnen, genau anzugeben, welcher Bereich einer scrollgesteuerten Animation stattfindet. ([Firefox Bug 1804775](https://bugzil.la/1804775)).

---
title: Firefox 151 Versionshinweise für Entwickler (Beta)
short-title: Firefox 151 (Beta)
slug: Mozilla/Firefox/Releases/151
l10n:
  sourceCommit: 6726ca44f6e211414f4279bebd47ca18a4cde51a
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 151, die Entwickler betreffen.
Firefox 151 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [19. Mai 2026](https://whattrainisitnow.com/release/?version=151) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

## Änderungen für Webentwickler

### HTML

- Das [`shadowrootslotassignment` Attribut](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) wird jetzt auf {{htmlelement("template")}} Elementen unterstützt, was eine deklarative Definition des Slot-Zuweisungsverhaltens für Shadow-Roots ermöglicht.
  Das Attribut wird in JavaScript durch [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment) oder [`HTMLTemplateElement.shadowRootSlotAssignment`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSlotAssignment) wiedergespiegelt
  ([Firefox Bug 2031295](https://bugzil.la/2031295), [Firefox Bug 2023824](https://bugzil.la/2023824)).

### CSS

- Die CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützt jetzt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen. Dies ermöglicht es Ihnen zu prüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat und Stile entsprechend auf seine Kinder anzuwenden. ([Firefox Bug 2016929](https://bugzil.la/2016929), ([Firefox Bug 2019254](https://bugzil.la/2019254)), ([Firefox Bug 2024601](https://bugzil.la/2024601)), [Firefox Bug 2030645](https://bugzil.la/2030645)).

- Die {{cssxref("position-anchor")}} CSS-Eigenschaft unterstützt nun den `normal` (Standard-)Wert. Dies ermöglicht das Matchen der {{cssxref("position-area")}} Eigenschaft, sodass bei einer Aktualisierung der `position-area` Eigenschaft auch die `position-anchor` Eigenschaft angepasst wird. ([Firefox Bug 2030351](https://bugzil.la/2030351)).

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) gibt jetzt `false` zurück, wenn das zu ersetzende Element {{svgelement("svg")}} im SVG [Namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) oder {{mathmlelement("math")}} im MathML Namespace ist (zusammen mit {{htmlelement("html")}}, welches in [Firefox 150](/de/docs/Mozilla/Firefox/Releases/150#apis) nicht zugelassen war).
  ([Firefox Bug 2032359](https://bugzil.la/2032359)).
- Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) wird jetzt auf Desktop-Plattformen unterstützt.
  Dies ermöglicht es, ein [Always-On-Top Fenster](/de/docs/Web/API/Document_Picture-in-Picture_API#how_does_it_work) zu öffnen, das mit beliebigem HTML-Inhalt gefüllt werden kann.
  Es kann genutzt werden, um jeden Inhalt anzuzeigen, den ein Benutzer getrennt von der Startseite (oder sogar dem Browser) sehen möchte, wie z. B. ein Set von Streams, das die Teilnehmer eines Videokonferenzanrufs zeigt, ein Börsenticker oder ein Countdown-Timer. ([Firefox Bug 2006594](https://bugzil.la/2006594)).
- Die [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang) Eigenschaft wird unterstützt, um die Sprache des Canvas-Zeichnungskontexts festzulegen.
  Während ein DOM Canvas diesen Kontext vom `lang`-Attribut seines zugehörigen {{htmlelement("canvas")}} Elements erben kann, ist dies nützlich, um den Kontext für ein Offscreen-Canvas festzulegen, das möglicherweise gerendert wird, bevor es einem `<canvas>` zugeordnet wird.
  ([Firefox Bug 1943070](https://bugzil.la/1943070)).
- Die [`options.keyboardLock`](/de/docs/Web/API/Element/requestFullscreen#keyboardlock) Eigenschaft kann nun als Option an [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) übergeben werden, um von Websites die Tastatursperre anzufordern, wenn das Element im Vollbildmodus angezeigt wird.
  Dies verhindert, dass die <kbd>Esc</kbd>-Taste das Element aus dem Vollbildmodus entfernt (stattdessen ist ein langes Drücken erforderlich), und einige zuvor reservierte Browser-Hotkeys können jetzt abgefangen und deren Standardaktion verhindert werden.
  ([Firefox Bug 2032302](https://bugzil.la/2032302)).
- Die [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang) Eigenschaft wird jetzt unterstützt, sodass die Sprache des Renderings eines Offscreen-Canvas explizit angegeben und nach der Erstellung des Rendering-Kontexts geändert werden kann.
  ([Firefox Bug 1943070](https://bugzil.la/1943070)).

## Änderungen für Add-on Entwickler

- {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}} fügen nun korrekt eine geteilte Ansicht hinzu und entfernen sie wieder, wenn ein Aufruf einen der Tabs der geteilten Ansicht einbezieht. Zuvor schlug ein Aufruf fehl oder trennte die geteilte Ansicht. ([Firefox Bug 2029099](https://bugzil.la/2029099))
- {{WebExtAPIRef("tabs.move()")}} verschiebt nun korrekt eine geteilte Ansicht nach rechts, wenn ein Aufruf einen der Tabs der geteilten Ansicht einbezieht. Zuvor wurde eine geteilte Ansicht nur nach links oder ans Ende der Tab-Liste verschoben. ([Firefox Bug 2027855](https://bugzil.la/2027855))

## Experimentelle Web-Features

Diese Funktionen werden in Firefox 151 ausgeliefert, sind aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **`@container style()` Bereich-Syntax-Abfragen**: `layout.css.attr.enabled`

  Die CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen unterstützen nun die _Bereich-Syntax_. Dies ermöglicht es Ihnen zu prüfen, ob ein Container eine gültige benutzerdefinierte CSS-Eigenschaft hat und deren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` zu vergleichen und entsprechende Stile auf seine Kinder anzuwenden. ([Firefox Bug 2024601](https://bugzil.la/2024601)).

- **`field-sizing` Eigenschaft**: `layout.css.field-sizing.enabled`

  Die {{cssxref("field-sizing")}} CSS-Eigenschaft lässt Sie das Größenverhalten von Form-Steuerelementen steuern. Diese Eigenschaft hat zwei Werte: `content` erlaubt es Elementen, sich in der Größe an ihren Inhalt anzupassen, und `fixed` setzt eine feste Größe auf Elementen. ([Firefox Bug 1977176](https://bugzil.la/1977176)).

- **Fix für verschachtelte scrollbare Bereiche**: `layout.css.fake-webkit-scrollbar.enabled`

  Diese Implementierung wurde hinzugefügt, um ein Problem zu beheben, bei dem scrollbarere Inhalte unerreichbar waren. Wenn ein Scrollbalken auf `display: none;` oder `width: 0;` gesetzt ist, werden die Scrollbalken von verschachtelten scrollbaren Bereichen aufeinander gestapelt, was bedeutet, dass einige der Inhalte möglicherweise nicht erreichbar sind. ([Firefox Bug 1977511](https://bugzil.la/1977511)).

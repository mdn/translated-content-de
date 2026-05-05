---
title: Firefox 151 Versionshinweise für Entwickler (Beta)
short-title: Firefox 151 (Beta)
slug: Mozilla/Firefox/Releases/151
l10n:
  sourceCommit: 63d3bd949674e905662a171317506f3ee8566b25
---

Dieser Artikel stellt Informationen über die Änderungen in Firefox 151 bereit, die Entwickler betreffen.
Firefox 151 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [19. Mai 2026](https://whattrainisitnow.com/release/?version=151) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte entfernen Sie die Kommentare von Überschriften, für die Sie Hinweise schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

### HTML

- Das [`shadowrootslotassignment`-Attribut](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) wird jetzt auf {{htmlelement("template")}}-Elementen unterstützt und ermöglicht eine deklarative Definition des Slot-Zuweisungsverhaltens für Shadow Roots.
  Das Attribut wird in JavaScript durch [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment) oder [`HTMLTemplateElement.shadowRootSlotAssignment`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSlotAssignment) reflektiert
  ([Firefox Bug 2031295](https://bugzil.la/2031295), [Firefox Bug 2023824](https://bugzil.la/2023824)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernung -->

<!-- ### MathML -->

<!-- #### Entfernung -->

<!-- ### SVG -->

<!-- #### Entfernung -->

### CSS

- Die CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützt jetzt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen. Dies ermöglicht es, zu überprüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat, und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox Bug 2016929](https://bugzil.la/2016929)), ([Firefox Bug 2019254](https://bugzil.la/2019254)), ([Firefox Bug 2024601](https://bugzil.la/2024601)), [Firefox Bug 2030645](https://bugzil.la/2030645)).

<!-- #### Entfernung -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernung -->

<!-- ### HTTP -->

<!-- #### Entfernung -->

<!-- ### Sicherheit -->

<!-- #### Entfernung -->

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) gibt jetzt `false` zurück, wenn das zu ersetzende Element sich im SVG [namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) als {{svgelement("svg")}} oder im MathML-Namespace als {{mathmlelement("math")}} befindet (zusammen mit {{htmlelement("html")}}, das in [Firefox 150](/de/docs/Mozilla/Firefox/Releases/150#apis) nicht erlaubt war).
  ([Firefox Bug 2032359](https://bugzil.la/2032359)).
- Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) wird jetzt auf Desktop-Plattformen unterstützt.
  Dadurch ist es möglich, ein [immer im Vordergrund befindliches Fenster](/de/docs/Web/API/Document_Picture-in-Picture_API#how_does_it_work) zu öffnen, das mit beliebigem HTML-Inhalt gefüllt werden kann.
  Es kann verwendet werden, um Inhalte anzuzeigen, die ein Benutzer getrennt von der aufrufenden Seite (oder sogar dem Browser) ansehen möchte, wie z.B. ein Set von Streams, das die Teilnehmer eines Videoanrufs zeigt, ein Börsenticker oder ein Countdown-Timer.
  ([Firefox Bug 2006594](https://bugzil.la/2006594)).
- Die Eigenschaft [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang) wird unterstützt, um die Sprache des Canvas-Zeichnungs-Kontexts festzulegen.
  Während ein DOM-Canvas diesen Kontext von dem `lang`-Attribut seines zugehörigen {{htmlelement("canvas")}}-Elements erben kann, ist dies nützlich, um den Kontext für ein Offscreen-Canvas festzulegen, das möglicherweise gerendert wird, bevor es einem `<canvas>` zugeordnet wird.
  ([Firefox Bug 1943070](https://bugzil.la/1943070)).
- Die Eigenschaft [`options.keyboardLock`](/de/docs/Web/API/Element/requestFullscreen#keyboardlock) kann jetzt als Option an [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) übergeben werden, sodass Websites um Tastatursperre bitten können, wenn das Element im Vollbildmodus angezeigt wird.
  Dies verhindert, dass die <kbd>Esc</kbd>-Taste das Element aus dem Vollbildmodus entfernt (ein Langdruck ist stattdessen erforderlich), und einige früher reservierte Browser-Hotkeys können jetzt abgefangen und ihre Standardaktion verhindert werden.
  ([Firefox Bug 2032302](https://bugzil.la/2032302)).

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernung -->

<!-- ### WebAssembly -->

<!-- #### Entfernung -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}} fügen nun korrekt eine geteilte Ansicht hinzu bzw. entfernen diese, wenn ein Aufruf einen der Tabs der geteilten Ansicht enthält. Zuvor würde ein Aufruf fehlschlagen oder die geteilte Ansicht trennen. ([Firefox Bug 2029099](https://bugzil.la/2029099))
- {{WebExtAPIRef("tabs.move()")}} verschiebt jetzt korrekt eine geteilte Ansicht nach rechts, wenn ein Aufruf einen der Tabs der geteilten Ansicht enthält. Zuvor wurde eine geteilte Ansicht nur nach links oder ans Ende der Tab-Liste verschoben. ([Firefox Bug 2027855](https://bugzil.la/2027855))

<!-- ### Entfernung -->

<!-- ### Sonstiges -->

## Experimentelle Webfeatures

Diese Funktionen sind in Firefox 151 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`@container style()` Bereichssyntax-Abfragen**: `layout.css.attr.enabled`

  Die CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen unterstützen nun die _Bereichssyntax_. Damit können Sie überprüfen, ob ein Container eine gültige benutzerdefinierte CSS-Eigenschaft hat und ihren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` vergleichen und entsprechend Stile auf seine Kinder anwenden. ([Firefox Bug 2024601](https://bugzil.la/2024601)).

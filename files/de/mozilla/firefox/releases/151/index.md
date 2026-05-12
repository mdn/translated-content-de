---
title: Firefox 151 Versionshinweise für Entwickler (Beta)
short-title: Firefox 151 (Beta)
slug: Mozilla/Firefox/Releases/151
l10n:
  sourceCommit: fc302e3bf88a1ccee922f95ef85c50a3ead4d640
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 151, die Entwickler betreffen.
Firefox 151 ist die aktuelle [Betaversion von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [19. Mai 2026](https://whattrainisitnow.com/release/?version=151) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version werden noch entwickelt.

<!-- Autoren: Bitte entfernen Sie die Kommentierung von Überschriften, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

### HTML

- Das Attribut [`shadowrootslotassignment`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) wird jetzt bei {{htmlelement("template")}}-Elementen unterstützt und erlaubt die deklarative Definition des Slot-Zuweisungsverhaltens für Shadow Roots.
  Das Attribut wird in JavaScript durch [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment) oder [`HTMLTemplateElement.shadowRootSlotAssignment`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSlotAssignment) widergespiegelt
  ([Firefox Fehler 2031295](https://bugzil.la/2031295), [Firefox Fehler 2023824](https://bugzil.la/2023824)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- Die CSS-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützt jetzt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen. Diese ermöglichen es Ihnen zu überprüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat, und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox Fehler 2016929](https://bugzil.la/2016929), ([Firefox Fehler 2019254](https://bugzil.la/2019254)), ([Firefox Fehler 2024601](https://bugzil.la/2024601)), [Firefox Fehler 2030645](https://bugzil.la/2030645)).

- Die {{cssxref("position-anchor")}}-CSS-Eigenschaft unterstützt jetzt den Wert `normal` (Standardwert). Dies erlaubt das Anpassen der {{cssxref("position-area")}}-Eigenschaft, sodass, wenn die `position-area`-Eigenschaft aktualisiert wird, die `position-anchor`-Eigenschaft ebenfalls aktualisiert wird. ([Firefox Fehler 2030351](https://bugzil.la/2030351)).

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) gibt jetzt `false` zurück, wenn das zu ersetzende Element {{svgelement("svg")}} im SVG-[Namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) oder {{mathmlelement("math")}} im MathML-Namespace ist (zusammen mit {{htmlelement("html")}}, das in [Firefox 150](/de/docs/Mozilla/Firefox/Releases/150#apis) nicht erlaubt war).
  ([Firefox Fehler 2032359](https://bugzil.la/2032359)).
- Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) wird jetzt auf Desktop-Plattformen unterstützt.
  Damit können Sie ein [immer im Vordergrund befindliches Fenster](/de/docs/Web/API/Document_Picture-in-Picture_API#how_does_it_work) öffnen, das mit beliebigem HTML-Inhalt gefüllt werden kann.
  Es kann verwendet werden, um Inhalte anzuzeigen, die der Benutzer getrennt von der auslösenden Seite (oder sogar dem Browser) sehen möchte, wie z. B. eine Reihe von Streams mit den Teilnehmern eines Videoanrufs, einen Börsenticker oder einen Countdown-Timer.
  ([Firefox Fehler 2006594](https://bugzil.la/2006594)).
- Die [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang)-Eigenschaft wird unterstützt, um die Sprache des Canvas-Zeichnungskontexts zu setzen.
  Während ein DOM-Canvas diesen Kontext vom `lang`-Attribut seines zugeordneten {{htmlelement("canvas")}}-Elements erben kann, ist dies nützlich, um den Kontext für ein Offscreen-Canvas zu setzen, das möglicherweise gerendert wird, bevor es einem `<canvas>` zugeordnet wird.
  ([Firefox Fehler 1943070](https://bugzil.la/1943070)).
- Die [`options.keyboardLock`](/de/docs/Web/API/Element/requestFullscreen#keyboardlock)-Eigenschaft kann jetzt als Option an [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) übergeben werden, sodass Websites die Sperre der Tastatur anfordern können, wenn das Element im Vollbildmodus angezeigt wird.
  Dies verhindert, dass die <kbd>Esc</kbd>-Taste das Element aus dem Vollbildmodus entfernt (stattdessen ist ein langes Drücken erforderlich), und einige zuvor reservierte Browser-Hotkeys können jetzt abgefangen und deren Standardaktion verhindert werden.
  ([Firefox Fehler 2032302](https://bugzil.la/2032302)).

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}} fügen jetzt korrekt eine geteilte Ansicht hinzu oder entfernen sie, wenn ein Aufruf einen der Tabs der geteilten Ansicht enthält. Bisher schlug ein Aufruf fehl oder trennte die geteilte Ansicht. ([Firefox Fehler 2029099](https://bugzil.la/2029099))
- {{WebExtAPIRef("tabs.move()")}} bewegt jetzt korrekt eine geteilte Ansicht nach rechts, wenn ein Aufruf einen der Tabs der geteilten Ansicht enthält. Bisher wurde eine geteilte Ansicht nur nach links oder ans Ende der Tab-Liste verschoben. ([Firefox Fehler 2027855](https://bugzil.la/2027855))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Webfunktionen

Diese Funktionen werden in Firefox 151 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`@container style()` Bereichssyntax-Abfragen**: `layout.css.attr.enabled`

  Die CSS-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützt nun [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Bereichssyntax-Abfragen. Diese ermöglichen es Ihnen, zu überprüfen, ob ein Container eine gültige benutzerdefinierte CSS-Eigenschaft hat und deren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` vergleichen, und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox Fehler 2024601](https://bugzil.la/2024601)).

- **Behebung für verschachtelte scrollbare Bereiche**: `layout.css.fake-webkit-scrollbar.enabled`

  Diese Implementierung wurde hinzugefügt, um ein Problem zu beheben, bei dem scrollbarere Inhalte nicht erreichbar waren. Wenn ein Scrollbalken auf `display: none;` oder `width: 0;` gesetzt ist, würden sich die Scrollbalken verschachtelter scrollbarer Bereiche übereinander stapeln, was bedeutet, dass einige Inhalte möglicherweise nicht erreichbar wären. ([Firefox Fehler 1977511](https://bugzil.la/1977511)).

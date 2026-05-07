---
title: Firefox 151 Versionshinweise für Entwickler (Beta)
short-title: Firefox 151 (Beta)
slug: Mozilla/Firefox/Releases/151
l10n:
  sourceCommit: 8504c925055b30ac19e8bde1c1f5ad6656f74887
---

Dieser Artikel stellt Informationen über die Änderungen in Firefox 151 bereit, die Entwickler betreffen.
Firefox 151 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [19. Mai 2026](https://whattrainisitnow.com/release/?version=151) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

## Änderungen für Webentwickler

### HTML

- Das [`shadowrootslotassignment`-Attribut](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) wird jetzt auf {{htmlelement("template")}}-Elementen unterstützt, wodurch eine deklarative Definition des Slot-Zuweisungsverhaltens für Shadow-Roots möglich ist.
  Das Attribut wird in JavaScript durch [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment) oder [`HTMLTemplateElement.shadowRootSlotAssignment`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSlotAssignment) widergespiegelt
  ([Firefox Bug 2031295](https://bugzil.la/2031295), [Firefox Bug 2023824](https://bugzil.la/2023824)).

### CSS

- Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-At-Regel unterstützt jetzt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen. Dies ermöglicht es Ihnen zu überprüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft aufweist, und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox Bug 2016929](https://bugzil.la/2016929), ([Firefox Bug 2019254](https://bugzil.la/2019254)), ([Firefox Bug 2024601](https://bugzil.la/2024601)), [Firefox Bug 2030645](https://bugzil.la/2030645)).

- Die {{cssxref("position-anchor")}} CSS-Eigenschaft unterstützt jetzt den `normal` (Standard)-Wert. Dies ermöglicht die Übereinstimmung mit der {{cssxref("position-area")}}-Eigenschaft, so dass, wenn die `position-area`-Eigenschaft aktualisiert wird, auch die `position-anchor`-Eigenschaft aktualisiert wird. ([Firefox Bug 2030351](https://bugzil.la/2030351)).

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) liefert jetzt `false` zurück, wenn das zu ersetzende Element {{svgelement("svg")}} im SVG-[Namensraum](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) oder {{mathmlelement("math")}} im MathML-Namespace ist (zusammen mit {{htmlelement("html")}}, das in [Firefox 150](/de/docs/Mozilla/Firefox/Releases/150#apis) nicht erlaubt war).
  ([Firefox Bug 2032359](https://bugzil.la/2032359)).
- Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) wird jetzt auf Desktop-Plattformen unterstützt.
  Dies ermöglicht es, ein [immer-im-Vordergrund-Fenster](/de/docs/Web/API/Document_Picture-in-Picture_API#how_does_it_work) zu öffnen, das mit beliebigem HTML-Inhalt gefüllt werden kann.
  Es kann verwendet werden, um Inhalte anzuzeigen, die ein Benutzer getrennt von der Startseite (oder sogar dem Browser) sehen möchte, wie z.B. eine Reihe von Streams, die die Teilnehmer eines Videoanrufs zeigen, einen Börsenticker oder eine Countdown-Timer.
  ([Firefox Bug 2006594](https://bugzil.la/2006594)).
- Die [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang) Eigenschaft wird unterstützt, um die Sprache des Canvas-Zeichenkontexts festzulegen.
  Während ein DOM-Canvas diesen Kontext von dem `lang`-Attribut seines zugeordneten {{htmlelement("canvas")}}-Elements erben kann, ist dies nützlich, um den Kontext für ein Offscreen-Canvas festzulegen, das möglicherweise gerendert wird, bevor es einem `<canvas>` zugeordnet wird.
  ([Firefox Bug 1943070](https://bugzil.la/1943070)).
- Die Eigenschaft [`options.keyboardLock`](/de/docs/Web/API/Element/requestFullscreen#keyboardlock) kann jetzt als Option an [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) übergeben werden, wodurch Webseiten die Tastatursperre anfordern können, wenn das Element im Vollbildmodus angezeigt wird.
  Dies verhindert, dass die <kbd>Esc</kbd>-Taste das Verlassen des Vollbildmodus verursacht (ein Langdruck ist stattdessen erforderlich), und einige zuvor reservierte Hotkeys des Browsers können nun abgefangen und deren Standardaktion verhindert werden.
  ([Firefox Bug 2032302](https://bugzil.la/2032302)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}} fügen nun korrekt eine geteilte Ansicht hinzu oder entfernen sie, wenn ein Aufruf einen der Tabs der geteilten Ansicht enthält. Zuvor konnte ein Aufruf fehlschlagen oder die geteilte Ansicht trennen. ([Firefox Bug 2029099](https://bugzil.la/2029099))
- {{WebExtAPIRef("tabs.move()")}} bewegt nun korrekt eine geteilte Ansicht nach rechts, wenn ein Aufruf einen der Tabs der geteilten Ansicht enthält. Zuvor bewegte ein Aufruf eine geteilte Ansicht nur nach links oder an das Ende der Tab-Liste. ([Firefox Bug 2027855](https://bugzil.la/2027855))

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 151 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie nach der passenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`@container style()`-Bereichssyntax-Abfragen**: `layout.css.attr.enabled`

  Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-At-Regel [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen unterstützen jetzt die _Bereichssyntax_. Dies ermöglicht es Ihnen zu überprüfen, ob ein Container eine gültige benutzerdefinierte CSS-Eigenschaft hat und ihren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` zu vergleichen und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox Bug 2024601](https://bugzil.la/2024601)).

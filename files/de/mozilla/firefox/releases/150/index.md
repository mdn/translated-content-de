---
title: Firefox 150 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 150 (Stabil)
slug: Mozilla/Firefox/Releases/150
l10n:
  sourceCommit: 674d6c8868cde1654eaba3c285afde9d3b60ce9f
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 150, die Entwickler betreffen.
Firefox 150 wurde am [21. April 2026](https://whattrainisitnow.com/release/?version=150) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Im [_Response-Tab_ des Netzwerkanalysetools](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) wird nun eine spezifische Nachricht angezeigt, um zu erklären, warum keine Antwortdaten vorhanden sind, wenn eine Anfrage umgeleitet wurde.
  ([Firefox Bug 2016679](https://bugzil.la/2016679)).
- Ein neuer Abschnitt "Element-spezifische Pseudo-Klassen" wurde zum [Pseudo-Klassen-Umschaltbereich](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-common-pseudo-classes) hinzugefügt, einschließlich eines Umschalters für die {{cssxref(":open")}} Pseudo-Klasse, die nur für Elemente verfügbar ist, die einen offenen Zustand haben, wie `<dialog>` Elemente. Der bestehende Umschalter für die {{cssxref(":visited")}} Pseudo-Klasse wurde ebenfalls dorthin verschoben, da er nur für `<a>` und `<area>` Elemente gilt. ([Firefox Bug 2014442](https://bugzil.la/2014442)).

### HTML

- Das `"auto"` Schlüsselwort wird nun als Option für das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attribut von `<img>`-Elementen (und [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)) unterstützt.
  Dies ermöglicht es, dass verzögert geladene `<img>`-Elemente die berechnete Bildlayoutgröße verwenden, nachdem CSS angewendet wurde, um auszuwählen, welches Bild aus einem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) angezeigt werden soll.
  Dies ist einfacher, als Medienbedingungen und deren zugehörige Größen im Attribut festzulegen, was wahrscheinlich von in CSS-Medienabfragen erfasstem Verhalten dupliziert wird.
  ([Firefox Bug 1819581](https://bugzil.la/1819581)).

### CSS

- Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion akzeptiert jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, anstatt nur zwei. Dies ermöglicht die Mischung einer beliebigen Anzahl von Farben. ([Firefox Bug 2024171](https://bugzil.la/2024171)).

- Die [`light-dark()`](/de/docs/Web/CSS/Reference/Values/color_value/light-dark) CSS-Funktion akzeptiert jetzt [`<image>`](/de/docs/Web/CSS/Reference/Values/image) Werte. Dies ermöglicht die Verwendung von Bildern, Verläufen usw. für verschiedene Farbschemata.
  ([Firefox Bug 2023569](https://bugzil.la/2023569)).

- Die medienspezifischen Pseudo-Klassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}} und {{cssxref(":volume-locked")}} werden nun unterstützt. Sie ermöglichen es Ihnen, {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente basierend auf ihrem aktuellen Status, wie z.B. abspielend oder pausiert, zu stylen. ([Firefox Bug 2020775](https://bugzil.la/2020775)).

- Die {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}} Eigenschaften (und die {{cssxref("animation-range")}}-Kurzschreibweise) werden nun unterstützt. Diese Eigenschaften legen den Start und das Ende des Animationsbereichs entlang der Timeline fest, sodass Sie steuern können, wo entlang einer [scrollbasierten Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Timeline eine Animation starten und enden wird. ([Firefox Bug 1825427](https://bugzil.la/1825427)).

- Das {{cssxref("revert-rule")}} CSS-Schlüsselwort wird nun unterstützt. Es ermöglicht, dass der Wert einer Eigenschaft bestimmt wird, als wäre die aktuelle Stilregel nicht vorhanden, sodass stattdessen der Wert einer anderen passenden Regel in Kraft treten kann. ([Firefox Bug 2017307](https://bugzil.la/2017307)).

- Die {{cssxref("overscroll-behavior")}} CSS-Eigenschaft (und ihre zugehörigen Eigenschaften {{cssxref("overscroll-behavior-x")}}, {{cssxref("overscroll-behavior-y")}}, {{cssxref("overscroll-behavior-block")}} und {{cssxref("overscroll-behavior-inline")}}) wird nun korrekt auf Scroll-Container angewendet, die keinen scrollbareren Überfluss haben, wie Elemente mit `overflow: hidden`. Zuvor wurde die Eigenschaft bei solchen Elementen ignoriert. ([Firefox Bug 1837436](https://bugzil.la/1837436)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) wird nun `false` zurückgeben, wenn das zu ersetzende Element {{htmlelement("html")}} im HTML-[Namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) ist.
  Mit anderen Worten, Sie können diese Methode nicht verwenden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu erstellen, der das `<html>`-Element durch seinen inneren Inhalt ersetzt. ([Firefox Bug 2022176](https://bugzil.la/2022176)).

#### DOM

- Das Argument [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) der Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wird nun unterstützt.
  Dies ermöglicht es der Methode, den Knoten zu ermitteln, der den Caret innerhalb eines Shadow DOM enthält, vorausgesetzt, sein zugehöriges [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) wurde als Option übergeben.
  ([Firefox Bug 1914596](https://bugzil.la/1914596)).

- Die [`CSSFontFaceDescriptors`](/de/docs/Web/API/CSSFontFaceDescriptors) Schnittstelle wird nun unterstützt, und eine Instanz dieses Typs wird von der [`CSSFontFaceRule.style`](/de/docs/Web/API/CSSFontFaceRule/style) Eigenschaft zurückgegeben. ([Firefox Bug 2019904](https://bugzil.la/2019904)).

- Die nicht standardisierte Methode [`caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) der [`Document`](/de/docs/Web/API/Document) Schnittstelle wird nun unterstützt. ([Firefox Bug 1550635](https://bugzil.la/1550635)).

- Die `ariaNotify()` Methode wird nun auf [`Document`](/de/docs/Web/API/Document/ariaNotify) und [`Element`](/de/docs/Web/API/Element/ariaNotify) unterstützt.
  Dies reiht eine Textzeichenfolge in die Warteschlange, die von einem {{Glossary("screen_reader", "Bildschirmleser")}} angekündigt werden soll, und bietet eine ergonomischere und zuverlässigere Alternative zu [ARIA-Live-Bereichen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions).
  ([Firefox Bug 2018095](https://bugzil.la/2018095)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Problem wurde behoben, bei dem das Herunterladen blockiert werden konnte, wenn beim Schließen des Browsers ausstehende Downloads vorhanden waren. Die Aufforderung wird nun automatisch ignoriert. ([Firefox Bug 2003840](https://bugzil.la/2003840)).

#### WebDriver BiDi

- Der `emulation.setNetworkConditions` Befehl wurde hinzugefügt, der im Moment den `type: offline` unterstützt. Damit können Sie den Offline-Modus entweder auf spezifischen Browser-Kontexten, Benutzerkontexten (auch bekannt als Container) oder global emulieren. ([Firefox Bug 1993079](https://bugzil.la/1993079)).
- Unsere Unterstützung für nicht utf-8 Header-Werte in allen `network` Modul-Befehlen und -Ereignissen wurde verbessert. Sie werden nun korrekt in `BytesValue` serialisiert. ([Firefox Bug 1994996](https://bugzil.la/1994996)).
- Ein Fehler bei Download-Ereignissen, die durch eine Antwort mit dem "Content-Disposition" Header ausgelöst wurden, wurde behoben. Solche Ereignisse fehlten die `navigation` Eigenschaft, wenn der Download durch einen Link mit `target="_blank"` initiiert wurde. ([Firefox Bug 1999481](https://bugzil.la/1999481)).
- Das `log.entryAdded` Ereignis wurde aktualisiert, um nur für Console-API-Aufrufe gesendet zu werden, die tatsächlich eine Nachricht in den Entwicklerwerkzeugen des Browsers drucken (siehe auch die Konsole-Spezifikation: [Using the printer](https://console.spec.whatwg.org/#printer)). Mit dieser Änderung löst die Verwendung von `console.clear` oder `console.time` kein Ereignis mehr aus. ([Firefox Bug 1866749](https://bugzil.la/1866749)).
- Eine Race-Bedingung mit dem `browsingContext.setViewport` Befehl wurde behoben, die zu einem Timeout führen konnte, wenn mehrere Kontexte parallel erstellt wurden. ([Firefox Bug 2019511](https://bugzil.la/2019511)).
- Der `browsingContext.locateNodes` Befehl wurde verbessert, um das Abrufen des HTML-Elements (`documentElement`) einer Seite bei Verwendung des `css` Locators zu ermöglichen. ([Firefox Bug 2020578](https://bugzil.la/2020578)).

#### Marionette

- Der `WebDriver:getShadowRoot` Befehl wurde behoben, um das Zurückgeben von User-Agent-Shadow-Wurzeln zu stoppen. ([Firefox Bug 2016741](https://bugzil.la/2016741)).

## Änderungen für Add-on-Entwickler

- Das Verhalten von {{WebExtAPIRef("tabs.move")}} wurde für geteilte Ansichten aktualisiert, so dass:
  - Die Reihenfolge der Tabs in einer geteilten Ansicht vertauscht werden kann. ([Firefox Bug 2016762](https://bugzil.la/2016762))
  - Wenn die Liste der Tabs sowohl geteilte Ansichts-Tabs als auch einen oder mehrere Tabs zwischen ihnen enthält, werden die Tabs auseinander bewegt und die geteilte Ansicht geschlossen. ([Firefox Bug 2022549](https://bugzil.la/2022549))
- Erweiterungsdokumente können nun die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden und eine [Relying Party ID (RP ID)](/de/docs/Web/API/PublicKeyCredentialCreationOptions#rp) für jede Domain behaupten, die von den [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) der Erweiterung abgedeckt ist. Diese Änderung bedeutet, dass [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) und [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/create) eine RP ID angeben können, die mit einer host-berechtigten Domain übereinstimmt, wodurch Erweiterungen WebAuthn-Anmeldeinformationen im Namen von Webdiensten erstellen und abrufen können. Weitere Informationen finden Sie unter [Use Web Authn API in web extensions](/de/docs/Mozilla/Add-ons/WebExtensions/Use_the_web_authn_api). ([Firefox Bug 1956484](https://bugzil.la/1956484)).
- Ein Problem wurde behoben, bei dem einige JavaScript [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Aufrufe scheiterten, CSS zu importieren. ([Firefox Bug 2016369](https://bugzil.la/2016369))

## Experimentelle Webfeatures

Diese Funktionen werden in Firefox 150 ausgeliefert, sind aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimental features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Namespaced attributes in `attr()` CSS function**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion akzeptiert jetzt [namespaced attributes](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dies ermöglicht die Verwendung von Attributen aus Elementen von [XML](/de/docs/Web/XML)-basierten Sprachen, wie [SVG](/de/docs/Web/SVG), und deren entsprechendes Styling. ([Firefox Bug 2014060](https://bugzil.la/2014060))

- **`@container style()` queries** (Nightly): `layout.css.style-queries.enabled`

  Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-At-Regel unterstützt jetzt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Anfragen. Dies wurde aktualisiert, um das Schachteln von `style()` Abfragen zu unterstützen. ([Firefox Bug 2014098](https://bugzil.la/2014098)).

- **Absolutely positioned elements in multi-column containers and when printing**: `layout.abspos.fragmentainer-aware-positioning.enabled`

  Absolut positionierte Elemente innerhalb von [Multi-Column-Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken werden nun korrekt positioniert und fragmentiert. Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überlappenden Text oder Inhaltsverlust. ([Firefox Bug 2018797](https://bugzil.la/2018797)).

- **Scoped custom element registries**: `dom.scoped-custom-element-registries.enabled`

  Die [`customElementRegistry`](/de/docs/Web/API/CustomElementRegistry) Eigenschaft wird auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt.
  Dies ermöglicht die Definition von [scoped custom element registries](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries).
  ([Firefox Bug 2018900](https://bugzil.la/2018900)).

- **Multiple import maps**: `dom.multiple_import_maps.enabled`

  [Multiple import maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps) geben Entwicklern mehr Flexibilität bei der Strukturierung und dem Laden von JavaScript-Modulen.
  ([Firefox Bug 1916277](https://bugzil.la/1916277)).

---
title: Firefox 150 Versionshinweise für Entwickler
short-title: Firefox 150
slug: Mozilla/Firefox/Releases/150
l10n:
  sourceCommit: 35be74828a1a06cdd0a1bf0a20c16d29b8adb11f
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 150, die Entwickler betreffen. Firefox 150 wurde am [21. April 2026](https://whattrainisitnow.com/release/?version=150) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Eine spezifische Nachricht wird jetzt im [Antwort-Tab des Netzwerkbereichs](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) angezeigt, um zu erklären, warum keine Antwortdaten vorliegen, wenn eine Anfrage umgeleitet wurde. ([Firefox Fehler 2016679](https://bugzil.la/2016679)).
- Ein neuer Abschnitt "Element-spezifische Pseudoklassen" wurde im [Pseudoklassen-Umschaltbereich](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-common-pseudo-classes) hinzugefügt, einschliesslich eines Umschalters für die {{cssxref(":open")}} Pseudoklasse, die nur für Elemente verfügbar ist, die einen offenen Zustand haben, z.B. `<dialog>`-Elemente. Der bestehende Umschalter für die {{cssxref(":visited")}} Pseudoklasse wurde ebenfalls dorthin verschoben, da sie nur auf `<a>` und `<area>`-Elemente zutrifft. ([Firefox Fehler 2014442](https://bugzil.la/2014442)).

### HTML

- Das `"auto"` Schlüsselwort wird jetzt als Option für das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attribut von `<img>`-Elementen (und [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)) unterstützt. Dies ermöglicht es, lazy-geladenen `<img>`-Elementen die errechnete Bildlayoutgröße zu verwenden, nachdem alle CSS-Regeln angewendet wurden, um auszuwählen, welches Bild aus einem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) angezeigt werden soll. Dies ist einfacher als die Angabe von Medienbedingungen und zugehörigen Größen im Attribut, was wahrscheinlich Verhalten dupliziert, das bereits in CSS-Media Queries erfasst ist. ([Firefox Fehler 1819581](https://bugzil.la/1819581)).

### CSS

- Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, anstatt nur zwei. Dadurch können Sie eine unbegrenzte Anzahl von Farben mischen. ([Firefox Fehler 2024171](https://bugzil.la/2024171)).

- Die [`light-dark()`](/de/docs/Web/CSS/Reference/Values/color_value/light-dark) CSS-Funktion unterstützt jetzt [`<image>`](/de/docs/Web/CSS/Reference/Values/image) Werte. Dies ermöglicht die Verwendung von Bildern, Verläufen usw. für verschiedene Farbschemata. ([Firefox Fehler 2023569](https://bugzil.la/2023569)).

- Die medienabhängigen Pseudoklassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}} und {{cssxref(":volume-locked")}} werden jetzt unterstützt. Sie ermöglichen es, {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente basierend auf ihrem aktuellen Zustand zu stylen, wie zum Beispiel "spielend" oder "pausiert". ([Firefox Fehler 2020775](https://bugzil.la/2020775)).

- Das {{cssxref("revert-rule")}} CSS-Schlüsselwort wird jetzt unterstützt. Es erlaubt einem Eigenschaftswert, so bestimmt zu werden, als ob die aktuelle Stilregel nicht vorhanden wäre, so dass der Wert einer anderen übereinstimmenden Regel stattdessen wirksam wird. ([Firefox Fehler 2017307](https://bugzil.la/2017307)).

- Die {{cssxref("overscroll-behavior")}} CSS-Eigenschaft (und ihre Langform-Eigenschaften {{cssxref("overscroll-behavior-x")}}, {{cssxref("overscroll-behavior-y")}}, {{cssxref("overscroll-behavior-block")}}, und {{cssxref("overscroll-behavior-inline")}}) wendet sich jetzt korrekt auf Scroll-Container an, die keinen scrollbaren Überlauf haben, wie Elemente mit `overflow: hidden`. Zuvor wurde die Eigenschaft bei solchen Elementen ignoriert. ([Firefox Fehler 1837436](https://bugzil.la/1837436)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) gibt jetzt `false` zurück, wenn das zu ersetzende Element {{htmlelement("html")}} im HTML-[Namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) ist. Mit anderen Worten, Sie können diese Methode nicht verwenden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu erstellen, der das `<html>`-Element mit seinem inneren Inhalt ersetzt. ([Firefox Fehler 2022176](https://bugzil.la/2022176)).

- Das [`scrollend`-Ereignis](/de/docs/Web/API/VisualViewport/scrollend_event) wird jetzt auf [`VisualViewport`](/de/docs/Web/API/VisualViewport) unterstützt und erlaubt es, Elemente zu aktualisieren, wenn eine Scroll-Aktion abgeschlossen ist. Dies könnte z.B. verwendet werden, um feste UI-Elemente wieder einzublenden oder ihre Position anzupassen, sobald ein Benutzer das Herumzoomen auf einem Bildschirm beendet hat. ([Firefox Fehler 1801658](https://bugzil.la/1801658)).

#### DOM

- Das [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) Argument der Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wird jetzt unterstützt. Dies ermöglicht der Methode, den Knoten, der die Einfügemarke enthält, aus einem Shadow-DOM zurückzugeben, vorausgesetzt, dass sein zugehöriges [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) als Option übergeben wurde. ([Firefox Fehler 1914596](https://bugzil.la/1914596)).

- Die Methode [`HighlightRegistry.highlightsFromPoint()`](/de/docs/Web/API/HighlightRegistry/highlightsFromPoint) wird jetzt unterstützt und bietet eine Möglichkeit für Webseiten, Informationen über alle angewandten [CSS-benutzerdefinierten Hervorhebungen](/de/docs/Web/API/CSS_Custom_Highlight_API) an einem bestimmten Punkt zu erhalten. Dies schließt Hervorhebungen mit ein, die innerhalb von Shadow-Roots liegen, vorausgesetzt, die zugehörige [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Instanz wurde der Methode übergeben. ([Firefox Fehler 1917991](https://bugzil.la/1917991)).

- Die [`CSSFontFaceDescriptors`](/de/docs/Web/API/CSSFontFaceDescriptors) Schnittstelle wird jetzt unterstützt und eine Instanz dieses Typs wird von der [`CSSFontFaceRule.style`](/de/docs/Web/API/CSSFontFaceRule/style) Eigenschaft zurückgegeben. ([Firefox Fehler 2019904](https://bugzil.la/2019904)).

- Die nicht standardisierte Methode [`caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) der [`Document`](/de/docs/Web/API/Document) Schnittstelle wird jetzt unterstützt. ([Firefox Fehler 1550635](https://bugzil.la/1550635)).

- Die Methode `ariaNotify()` wird jetzt auf [`Document`](/de/docs/Web/API/Document/ariaNotify) und [`Element`](/de/docs/Web/API/Element/ariaNotify) unterstützt. Diese Methode stellt eine Zeichenkette in die Warteschlange, die von einem {{Glossary("screen_reader", "Screenreader")}} angekündigt wird, und bietet damit eine ergonomischere und zuverlässigere Alternative zu [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions). ([Firefox Fehler 2018095](https://bugzil.la/2018095)).

#### Medien, WebRTC und Web Audio

- [`RTCError`](/de/docs/Web/API/RTCError) und [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent) werden jetzt unterstützt und ermöglichen die Meldung von SDP-Parse-Fehlern. ([Firefox Fehler 1814459](https://bugzil.la/1814459)).
- [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent) und das [`RTCPeerConnection.icecandidateerror` Ereignis](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event) werden jetzt unterstützt. ([Firefox Fehler 1561441](https://bugzil.la/1561441)).
- [`RTCIceTransport.role`](/de/docs/Web/API/RTCIceTransport/role) wird jetzt unterstützt. ([Firefox Fehler 2018843](https://bugzil.la/2018843)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Problem wurde behoben, bei dem das Vorhandensein laufender Downloads beim Schließen des Browsers durch eine Eingabeaufforderung blockiert werden konnte. Die Eingabeaufforderung wird jetzt automatisch geschlossen. ([Firefox Fehler 2003840](https://bugzil.la/2003840)).

#### WebDriver BiDi

- Der `emulation.setNetworkConditions` Befehl wurde hinzugefügt, der momentan den `type: offline` unterstützt. Mithilfe dessen können Sie den Offline-Modus entweder in bestimmten Browsing-Kontexten, in Benutzerkontexten (alias Container) oder global emulieren. ([Firefox Fehler 1993079](https://bugzil.la/1993079)).
- Unsere Unterstützung für nicht UTF-8-Kopfzeilenwerte über alle Befehle und Ereignisse des `network` Moduls wurde verbessert. Sie werden jetzt korrekt in `BytesValue` serialisiert. ([Firefox Fehler 1994996](https://bugzil.la/1994996)).
- Ein Fehler bei Download-Ereignissen, die durch eine Antwort mit dem "Content-Disposition" Header ausgelöst wurden, wurde behoben. Solche Ereignisse fehlten die `navigation` Eigenschaft, wenn der Download durch einen Link mit `target="_blank"` initiiert wurde. ([Firefox Fehler 1999481](https://bugzil.la/1999481)).
- Das `log.entryAdded` Ereignis wurde aktualisiert, um nur für Console-API-Aufrufe ausgelöst zu werden, die tatsächlich eine Nachricht in den Entwicklerwerkzeugen des Browsers drucken (siehe auch die Konsolenspezifikation: [using the printer](https://console.spec.whatwg.org/#printer)). Mit dieser Änderung löst die Verwendung von `console.clear` oder `console.time` kein Ereignis mehr aus. ([Firefox Fehler 1866749](https://bugzil.la/1866749)).
- Ein Rennen beim `browsingContext.setViewport` Befehl wurde behoben, das zu einem Timeout führen konnte, wenn mehrere Kontexte parallel erstellt wurden. ([Firefox Fehler 2019511](https://bugzil.la/2019511)).
- Der Befehl `browsingContext.locateNodes` wurde verbessert, um das Abrufen des HTML-Elements (`documentElement`) einer Seite bei Verwendung des `css` Lokators zu ermöglichen. ([Firefox Fehler 2020578](https://bugzil.la/2020578)).

#### Marionette

- Der `WebDriver:getShadowRoot` Befehl wurde behoben, um das Zurückgeben von User-Agent-Shadow-Roots zu verhindern. ([Firefox Fehler 2016741](https://bugzil.la/2016741)).

## Änderungen für Add-on-Entwickler

- Das Verhalten von {{WebExtAPIRef("tabs.move")}} wurde für geteilte Ansichten aktualisiert, so dass:
  - Die Reihenfolge der Tabs in einer geteilten Ansicht kann vertauscht werden. ([Firefox Fehler 2016762](https://bugzil.la/2016762))
  - Wenn die Liste der Tabs sowohl Tabs der geteilten Ansicht beinhaltet als auch ein oder mehrere Tabs zwischen ihnen platziert werden, werden die Tabs auseinander verschoben und die geteilte Ansicht geschlossen. ([Firefox Fehler 2022549](https://bugzil.la/2022549))
- Erweiterungsdokumente können jetzt die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden und eine [Relying Party ID (RP ID)](/de/docs/Web/API/PublicKeyCredentialCreationOptions#rp) für jede Domain behaupten, die durch die [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) der Erweiterung abgedeckt ist. Diese Änderung bedeutet, dass [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) und [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/create) eine RP ID spezifizieren können, die mit einer host-berechtigten Domain übereinstimmt, sodass Erweiterungen WebAuthn-Anmeldedaten im Namen von Webdiensten erstellen und abrufen können. Siehe [Use Web Authn API in web extensions](/de/docs/Mozilla/Add-ons/WebExtensions/Use_the_web_authn_api) für Details. ([Firefox Fehler 1956484](https://bugzil.la/1956484)).
- Ein Problem mit einigen JavaScript-[`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Aufrufen, die CSS nicht importieren konnten, wurde behoben. ([Firefox Fehler 2016369](https://bugzil.la/2016369))

## Experimentelle Webfunktionen

Diese Funktionen werden in Firefox 150 bereitgestellt, sind jedoch standardmäßig deaktiviert. Um sie zu testen, suchen Sie nach der entsprechenden Voreinstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Namensraum-Attribute in `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion akzeptiert jetzt [namensraumbezogene Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dies ermöglicht es, Attribute von Elementen aus [XML](/de/docs/Web/XML)-basierten Sprachen, wie [SVG](/de/docs/Web/SVG), zu übernehmen und entsprechend zu stylen. ([Firefox Fehler 2014060](https://bugzil.la/2014060))

- **`@container style()` Abfragen** (Nightly): `layout.css.style-queries.enabled`

  Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-Regel unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen. Dies wurde aktualisiert, um das Verschachteln von `style()` Abfragen zu unterstützen. ([Firefox Fehler 2014098](https://bugzil.la/2014098)).

- **Absolut positionierte Elemente in Mehrspalten-Containern und beim Drucken**: `layout.abspos.fragmentainer-aware-positioning.enabled`

  Absolut positionierte Elemente in [Mehrspalten-Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken sind jetzt korrekt positioniert und fragmentiert. Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überlappenden Text oder Inhaltsverlust. ([Firefox Fehler 2018797](https://bugzil.la/2018797)).

- **Gescopte benutzerdefinierte Elementregister**: `dom.scoped-custom-element-registries.enabled`

  Die [`customElementRegistry`](/de/docs/Web/API/CustomElementRegistry) Eigenschaft wird auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt. Dies ermöglicht die Definition von [gescopten benutzerdefinierten Elementregistern](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries). ([Firefox Fehler 2018900](https://bugzil.la/2018900)).

- **Mehrfache Importkarten**: `dom.multiple_import_maps.enabled`

  [Mehrfache Importkarten](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps) geben Entwicklern mehr Flexibilität bei der Strukturierung und dem Laden von JavaScript-Modulen. ([Firefox Fehler 1916277](https://bugzil.la/1916277)).

---
title: Veröffentlichungsnotizen für Entwickler von Firefox 150
short-title: Firefox 150
slug: Mozilla/Firefox/Releases/150
l10n:
  sourceCommit: e5cd1cab36e2fdcf5dfe28e10b0a7cb235354e62
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 150, die Entwickler betreffen.
Firefox 150 wurde am [21. April 2026](https://whattrainisitnow.com/release/?version=150) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Eine spezifische Nachricht wird jetzt im [_Antwort-Tab_ des Netzwerk-Paneels](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) angezeigt, um zu erläutern, warum keine Antwortdaten vorliegen, wenn eine Anfrage umgeleitet wurde.
  ([Firefox Bug 2016679](https://bugzil.la/2016679)).
- Ein neuer Abschnitt "Element-spezifische Pseudoklassen" wurde dem [Pseudoklassen-Umschaltpaneel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-common-pseudo-classes) hinzugefügt, einschließlich eines Schalters für die {{cssxref(":open")}}-Pseudoklasse, die nur für Elemente verfügbar ist, die einen offenen Zustand haben, wie `<dialog>`-Elemente. Der vorhandene Schalter für die {{cssxref(":visited")}}-Pseudoklasse wurde ebenfalls dorthin verschoben, da er nur für `<a>`- und `<area>`-Elemente gilt. ([Firefox Bug 2014442](https://bugzil.la/2014442)).

### HTML

- Das `"auto"`-Schlüsselwort wird jetzt als Option für das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut von `<img>`-Elementen (und [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)) unterstützt.
  Dies ermöglicht es, lazy-geladene `<img>`-Elemente die berechnete Bildlayout-Größe zu verwenden, nachdem alle CSS-Einstellungen angewendet wurden, um auszuwählen, welches Bild aus einem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) angezeigt werden soll.
  Dies ist einfacher als die Angabe von Medienbedingungen und deren zugehörigen Größen im Attribut, was wahrscheinlich Verhalten dupliziert, das bereits in CSS-Medienabfragen erfasst wird.
  ([Firefox Bug 1819581](https://bugzil.la/1819581)).

### CSS

- Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion akzeptiert jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Werte, anstatt nur zwei. Dies erlaubt Ihnen, eine beliebige Anzahl von Farben zu mischen. ([Firefox Bug 2024171](https://bugzil.la/2024171)).

- Die [`light-dark()`](/de/docs/Web/CSS/Reference/Values/color_value/light-dark) CSS-Funktion akzeptiert jetzt [`<image>`](/de/docs/Web/CSS/Reference/Values/image)-Werte. Dies erlaubt die Verwendung von Bildern, Verläufen und Ähnlichem für verschiedene Farbschemata.
  ([Firefox Bug 2023569](https://bugzil.la/2023569)).

- Die medienbasierten Pseudoklassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}} und {{cssxref(":volume-locked")}} werden jetzt unterstützt. Sie ermöglichen es, {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente basierend auf ihrem aktuellen Zustand, wie Spielen oder Pausieren, zu stylen. ([Firefox Bug 2020775](https://bugzil.la/2020775)).

- Das {{cssxref("revert-rule")}}-CSS-Schlüsselwort wird jetzt unterstützt. Es erlaubt, dass der Wert einer Eigenschaft so bestimmt wird, als ob die aktuelle Stilregel nicht vorhanden wäre, so dass der Wert einer anderen passenden Regel stattdessen angewendet werden kann. ([Firefox Bug 2017307](https://bugzil.la/2017307)).

- Die {{cssxref("overscroll-behavior")}}-CSS-Eigenschaft (und ihre Longhand-Eigenschaften {{cssxref("overscroll-behavior-x")}}, {{cssxref("overscroll-behavior-y")}}, {{cssxref("overscroll-behavior-block")}} und {{cssxref("overscroll-behavior-inline")}}) werden jetzt korrekt auf Scroll-Container angewendet, die keinen scrollbaren Überlauf haben, wie Elemente mit `overflow: hidden`. Zuvor wurde die Eigenschaft bei solchen Elementen ignoriert. ([Firefox Bug 1837436](https://bugzil.la/1837436)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) wird jetzt `false` zurückgeben, wenn das zu ersetzende Element in der HTML-[Namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) {{htmlelement("html")}} ist.
  Mit anderen Worten, Sie können diese Methode nicht verwenden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu erstellen, der das `<html>`-Element mit seinem inneren Inhalt ersetzt. ([Firefox Bug 2022176](https://bugzil.la/2022176)).

- Das [`scrollend`-Ereignis](/de/docs/Web/API/VisualViewport/scrollend_event) wird jetzt auf [`VisualViewport`](/de/docs/Web/API/VisualViewport) unterstützt, und ermöglicht die Aktualisierung von Elementen, wenn ein Scrollvorgang abgeschlossen ist.
  Dies könnte beispielsweise verwendet werden, um feste UI-Elemente nach Abschluss des Scrollens auf einem herangezoomten Bildschirm zu enthüllen oder anderweitig anzupassen.
  ([Firefox Bug 1801658](https://bugzil.la/1801658)).

#### DOM

- Das Argument [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) der Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wird jetzt unterstützt.
  Dies ermöglicht es der Methode, den Knoten zurückzugeben, der den Kursor innerhalb eines Shadow DOM enthält, sofern dessen zugehöriger [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) als Option übergeben wurde.
  ([Firefox Bug 1914596](https://bugzil.la/1914596)).

- Die Methode [`HighlightRegistry.highlightsFromPoint()`](/de/docs/Web/API/HighlightRegistry/highlightsFromPoint) wird jetzt unterstützt und bietet eine Möglichkeit für Webseiten, Informationen über alle an einem bestimmten Punkt angewendeten [CSS benutzerdefinierten Hervorhebungen](/de/docs/Web/API/CSS_Custom_Highlight_API) zu erhalten.
  Dies umfasst Hervorhebungen, die sich innerhalb von Shadow-Roots befinden, sofern die zugehörige [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Instanz an die Methode übergeben wurde.
  ([Firefox Bug 1917991](https://bugzil.la/1917991)).

- Das [`CSSFontFaceDescriptors`](/de/docs/Web/API/CSSFontFaceDescriptors)-Interface wird jetzt unterstützt, und eine Instanz dieses Typs wird von der [`CSSFontFaceRule.style`](/de/docs/Web/API/CSSFontFaceRule/style)-Eigenschaft zurückgegeben. ([Firefox Bug 2019904](https://bugzil.la/2019904)).

- Die nicht standardisierte Methode [`caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) des [`Document`](/de/docs/Web/API/Document)-Interfaces wird jetzt unterstützt. ([Firefox Bug 1550635](https://bugzil.la/1550635)).

- Die Methode `ariaNotify()` wird jetzt auf [`Document`](/de/docs/Web/API/Document/ariaNotify) und [`Element`](/de/docs/Web/API/Element/ariaNotify) unterstützt.
  Dies stellt eine Textzeichenfolge in die Warteschlange, die von einem {{Glossary("screen_reader", "Screenreader")}} angekündigt wird, und bietet eine ergonomischere und verlässlichere Alternative zu [ARIA-Live-Bereichen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions).
  ([Firefox Bug 2018095](https://bugzil.la/2018095)).

#### Medien, WebRTC und Web Audio

- [`RTCError`](/de/docs/Web/API/RTCError) und [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent) werden jetzt unterstützt, und ermöglichen das Melden von SDP-Parsing-Fehlern.
  ([Firefox Bug 1814459](https://bugzil.la/1814459)).
- [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent) und das [`RTCPeerConnection.icecandidateerror`-Ereignis](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event) werden jetzt unterstützt.
  ([Firefox Bug 1561441](https://bugzil.la/1561441)).
- [`RTCIceTransport.role`](/de/docs/Web/API/RTCIceTransport/role) wird jetzt unterstützt.
  ([Firefox Bug 2018843](https://bugzil.la/2018843)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Problem wurde behoben, bei dem ausstehende Downloads beim Schließen des Browsers durch eine Eingabeaufforderung blockiert werden konnten. Die Eingabeaufforderung wird jetzt automatisch geschlossen. ([Firefox Bug 2003840](https://bugzil.la/2003840)).

#### WebDriver BiDi

- Der Befehl `emulation.setNetworkConditions` wurde hinzugefügt, der derzeit den `type: offline` unterstützt. Mit diesem Befehl können Sie den Offline-Modus entweder für spezifische Browsing-Kontexte, für Benutzerkontexte (auch als Container bekannt) oder global emulieren. ([Firefox Bug 1993079](https://bugzil.la/1993079)).
- Unser Support für nicht-utf-8-Headerwerte in allen Befehlen und Ereignissen des `network`-Moduls wurde verbessert. Sie werden jetzt korrekt als `BytesValue` serialisiert. ([Firefox Bug 1994996](https://bugzil.la/1994996)).
- Ein Fehler bei Download-Ereignissen, die durch eine Antwort mit dem "Content-Disposition"-Header ausgelöst wurden, wurde behoben. Solche Ereignisse hatten die `navigation`-Eigenschaft nicht, wenn der Download von einem Link mit `target="_blank"` initiiert wurde. ([Firefox Bug 1999481](https://bugzil.la/1999481)).
- Das `log.entryAdded`-Ereignis wurde aktualisiert, um nur für Konsolen-API-Aufrufe gesendet zu werden, die tatsächlich eine Nachricht in den Entwickler-Tools des Browsers ausgeben (siehe auch die Konsolenspezifikation: [Using the printer](https://console.spec.whatwg.org/#printer)). Mit dieser Änderung löst die Verwendung von `console.clear` oder `console.time` kein Ereignis mehr aus. ([Firefox Bug 1866749](https://bugzil.la/1866749)).
- Ein Race-Condition-Problem mit dem Befehl `browsingContext.setViewport` wurde behoben, das ein Timeout auslösen konnte, wenn mehrere Kontexte parallel erstellt wurden. ([Firefox Bug 2019511](https://bugzil.la/2019511)).
- Der Befehl `browsingContext.locateNodes` wurde verbessert, um das Abrufen des HTML-Elements (`documentElement`) einer Seite bei Verwendung des `css`-Locators zu ermöglichen. ([Firefox Bug 2020578](https://bugzil.la/2020578)).

#### Marionette

- Der Befehl `WebDriver:getShadowRoot` wurde behoben, um keine User-Agent-Shadow-Roots mehr zurückzugeben. ([Firefox Bug 2016741](https://bugzil.la/2016741)).

## Änderungen für Erweiterungsentwickler

- Das Verhalten von {{WebExtAPIRef("tabs.move")}} wurde für geteilte Ansichten aktualisiert, so dass:
  - Die Reihenfolge der Tabs in einer geteilten Ansicht getauscht werden kann. ([Firefox Bug 2016762](https://bugzil.la/2016762))
  - Wenn die Liste der Tabs sowohl geteilte Ansichts-Tabs als auch Tabs dazwischen enthält, werden die Tabs auseinanderbewegt und die geteilte Ansicht geschlossen. ([Firefox Bug 2022549](https://bugzil.la/2022549))
- Erweiterungsdokumente können jetzt die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) nutzen und eine [Relying Party ID (RP ID)](/de/docs/Web/API/PublicKeyCredentialCreationOptions#rp) für jede Domain angeben, die durch die [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) der Erweiterung abgedeckt wird. Diese Änderung bedeutet, dass [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) und [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/create) eine RP-ID angeben können, die mit einer host-freigegebenen Domain übereinstimmt, wodurch Erweiterungen WebAuthn-Anmeldedaten im Auftrag von Webdiensten erstellen und abrufen können. Weitere Informationen finden Sie unter [Verwenden der Web Authn API in Web-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Use_the_web_authn_api). ([Firefox Bug 1956484](https://bugzil.la/1956484)).
- Ein Problem mit einigen JavaScript-[`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anrufen, die CSS nicht importieren konnten, wurde behoben. ([Firefox Bug 2016369](https://bugzil.la/2016369))

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 150 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach den entsprechenden Einstellungen auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der [Seite für experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Namespaced-Attribute in der `attr()`-CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}}-CSS-Funktion akzeptiert jetzt [namespaced-Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dies ermöglicht es, Attribute von Elementen von [XML](/de/docs/Web/XML)-basierten Sprachen, wie [SVG](/de/docs/Web/SVG), zu entnehmen und entsprechend zu stylen. ([Firefox Bug 2014060](https://bugzil.la/2014060))

- **`@container style()`-Abfragen** (Nightly): `layout.css.style-queries.enabled`

  Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container)-CSS-At-Regel unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen. Diese wurde aktualisiert, um die Verschachtelung von `style()`-Abfragen zu unterstützen. ([Firefox Bug 2014098](https://bugzil.la/2014098)).

- **Absolut positionierte Elemente in mehrspaltigen Containern und beim Drucken**: `layout.abspos.fragmentainer-aware-positioning.enabled`

  Absolut positionierte Elemente innerhalb von [mehrspaltigen Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken werden jetzt korrekt positioniert und fragmentiert. Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überlappenden Text oder Inhaltsverlust. ([Firefox Bug 2018797](https://bugzil.la/2018797)).

- **Gescopte benutzerdefinierte Element-Registries**: `dom.scoped-custom-element-registries.enabled`

  Die Eigenschaft [`customElementRegistry`](/de/docs/Web/API/CustomElementRegistry) wird auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt.
  Dies ermöglicht die Definition von [gescopten benutzerdefinierten Element-Registries](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries).
  ([Firefox Bug 2018900](https://bugzil.la/2018900)).

- **Mehrere Import-Maps**: `dom.multiple_import_maps.enabled`

  [Mehrere Import-Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps) geben Entwicklern mehr Flexibilität bei der Strukturierung und dem Laden von JavaScript-Modulen.
  ([Firefox Bug 1916277](https://bugzil.la/1916277)).

---
title: Firefox 150 Versionshinweise für Entwickler
short-title: Firefox 150
slug: Mozilla/Firefox/Releases/150
l10n:
  sourceCommit: 0b214cbce88da71a9d4470364e378285c2a921a5
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 150, die Entwickler betreffen. Firefox 150 wurde am [21. April 2026](https://whattrainisitnow.com/release/?version=150) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Eine spezifische Nachricht wird jetzt im [_Antwort-Tab_ des Netzwerks-Panels](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) angezeigt, um anzuzeigen, warum keine Antwortdaten vorhanden sind, wenn eine Anfrage umgeleitet wurde. ([Firefox Bug 2016679](https://bugzil.la/2016679)).
- Ein neuer Abschnitt "Element-spezifische Pseudo-Klassen" wurde zum [Pseudo-Klassen-Umschaltfeld](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-common-pseudo-classes) hinzugefügt, einschließlich eines Umschalters für die {{cssxref(":open")}} Pseudo-Klasse, die nur für Elemente verfügbar ist, die einen offenen Zustand haben, wie `<dialog>` Elemente. Der bestehende Umschalter für die {{cssxref(":visited")}} Pseudo-Klasse wurde ebenfalls dorthin verschoben, da sie nur für `<a>` und `<area>` Elemente gilt. ([Firefox Bug 2014442](https://bugzil.la/2014442)).

### HTML

- Das Schlüsselwort `"auto"` wird jetzt als Option für das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attribut von `<img>` Elementen (und [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)) unterstützt. Dies ermöglicht es, lazy-geladenen `<img>` Elementen, die berechnete Bildlayoutgröße, nachdem CSS angewendet wurde, zu verwenden, um auszuwählen, welches Bild aus einem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) angezeigt werden soll. Dies ist einfacher als das Festlegen von Medienbedingungen und deren zugehörigen Größen im Attribut, was wahrscheinlich ein Verhalten dupliziert, das bereits in CSS-Medienabfragen erfasst ist. ([Firefox Bug 1819581](https://bugzil.la/1819581)).

### CSS

- Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion akzeptiert jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, anstatt nur zwei. Dies ermöglicht es Ihnen, eine beliebige Anzahl von Farben zu mischen. ([Firefox Bug 2024171](https://bugzil.la/2024171)).

- Die [`light-dark()`](/de/docs/Web/CSS/Reference/Values/color_value/light-dark) CSS-Funktion akzeptiert jetzt [`<image>`](/de/docs/Web/CSS/Reference/Values/image) Werte. Dies ermöglicht die Verwendung von Bildern, Verläufen usw. für verschiedene Farbschemata. ([Firefox Bug 2023569](https://bugzil.la/2023569)).

- Die medienbasierten Pseudo-Klassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}} und {{cssxref(":volume-locked")}} werden jetzt unterstützt. Sie erlauben das Stylen von {{htmlelement("audio")}} und {{htmlelement("video")}} Elementen basierend auf ihrem aktuellen Zustand, wie zum Beispiel Spielen oder Pausiert. ([Firefox Bug 2020775](https://bugzil.la/2020775)).

- Das {{cssxref("revert-rule")}} CSS-Schlüsselwort wird jetzt unterstützt. Es ermöglicht, dass der Wert einer Eigenschaft so bestimmt wird, als wäre die aktuelle Stilregel nicht vorhanden, sodass der Wert einer anderen übereinstimmenden Regel stattdessen wirksam wird. ([Firefox Bug 2017307](https://bugzil.la/2017307)).

- Die {{cssxref("overscroll-behavior")}} CSS-Eigenschaft (und ihre Langhand-Eigenschaften {{cssxref("overscroll-behavior-x")}}, {{cssxref("overscroll-behavior-y")}}, {{cssxref("overscroll-behavior-block")}}, und {{cssxref("overscroll-behavior-inline")}}) gilt jetzt korrekt für Scroll-Container, die keinen scrollbareren Überschuss haben, wie Elemente mit `overflow: hidden`. Zuvor wurde die Eigenschaft bei solchen Elementen ignoriert. ([Firefox Bug 1837436](https://bugzil.la/1837436)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) gibt jetzt `false` zurück, wenn das zu ersetzende Element {{htmlelement("html")}} im HTML [Namensraum](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) ist. Mit anderen Worten, Sie können diese Methode nicht verwenden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu erstellen, der das `<html>` Element mit seinem inneren Inhalt ersetzt. ([Firefox Bug 2022176](https://bugzil.la/2022176)).

#### DOM

- Das Argument [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) der Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wird jetzt unterstützt. Dies ermöglicht der Methode, den Knoten zurückzugeben, der das Caret innerhalb eines Shadow DOM enthält, vorausgesetzt, sein zugehöriges [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) wurde als Option übergeben. ([Firefox Bug 1914596](https://bugzil.la/1914596)).

- Das Interface [`CSSFontFaceDescriptors`](/de/docs/Web/API/CSSFontFaceDescriptors) wird jetzt unterstützt, und eine Instanz dieses Typs wird von der [`CSSFontFaceRule.style`](/de/docs/Web/API/CSSFontFaceRule/style) Eigenschaft zurückgegeben. ([Firefox Bug 2019904](https://bugzil.la/2019904)).

- Die nicht standardmäßige Methode [`caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) der [`Document`](/de/docs/Web/API/Document) Schnittstelle wird jetzt unterstützt. ([Firefox Bug 1550635](https://bugzil.la/1550635)).

- Die Methode `ariaNotify()` wird jetzt auf [`Document`](/de/docs/Web/API/Document/ariaNotify) und [`Element`](/de/docs/Web/API/Element/ariaNotify) unterstützt. Sie stellt eine Zeichenfolge von Text in die Warteschlange, die von einem {{Glossary("screen_reader", "Screenreader")}} angekündigt werden soll und bietet eine ergonomischere und verlässlichere Alternative zu [ARIA Live-Bereichen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions). ([Firefox Bug 2018095](https://bugzil.la/2018095)).

#### Medien, WebRTC und Web Audio

- [`RTCError`](/de/docs/Web/API/RTCError) und [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent) werden jetzt unterstützt und erlauben es, SDP-Parse-Fehler zu melden. ([Firefox Bug 1814459](https://bugzil.la/1814459)).
- [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent) und [`RTCPeerConnection.icecandidateerror`-Ereignis](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event) werden jetzt unterstützt. ([Firefox Bug 1561441](https://bugzil.la/1561441)).
- [`RTCIceTransport.role`](/de/docs/Web/API/RTCIceTransport/role) wird jetzt unterstützt. ([Firefox Bug 2018843](https://bugzil.la/2018843)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Problem wurde behoben, bei dem ausstehende Downloads beim Schließen des Browsers durch Aufforderungen blockiert werden konnten. Die Aufforderung wird jetzt automatisch verworfen. ([Firefox Bug 2003840](https://bugzil.la/2003840)).

#### WebDriver BiDi

- Der Befehl `emulation.setNetworkConditions` wurde hinzugefügt, der derzeit `type: offline` unterstützt. Damit können Sie den Offline-Modus entweder auf spezifischen Browsing-Kontexten, auf Benutzerkontexten (auch bekannt als Container) oder global emulieren. ([Firefox Bug 1993079](https://bugzil.la/1993079)).
- Unsere Unterstützung für nicht utf-8-kodierte Headerwerte in allen `network` Modulbefehlen und -ereignissen wurde verbessert. Sie werden jetzt korrekt in `BytesValue` serialisiert. ([Firefox Bug 1994996](https://bugzil.la/1994996)).
- Ein Fehler bei Download-Ereignissen, die durch eine Antwort mit dem "Content-Disposition" Header ausgelöst wurden, wurde behoben. Solche Ereignisse hatten die `navigation` Eigenschaft nicht, wenn der Download durch einen Link mit `target="_blank"` initiiert wurde. ([Firefox Bug 1999481](https://bugzil.la/1999481)).
- Das `log.entryAdded` Ereignis wurde aktualisiert, sodass es nur bei Konsolen-API-Aufrufen ausgelöst wird, die tatsächlich eine Nachricht in den Entwicklertools des Browsers ausgeben (siehe auch die Konsolen-Spezifikation: [using the printer](https://console.spec.whatwg.org/#printer)). Mit dieser Änderung lösen `console.clear` oder `console.time` kein Ereignis mehr aus. ([Firefox Bug 1866749](https://bugzil.la/1866749)).
- Ein Rennen bei dem Befehl `browsingContext.setViewport`, das zu einem Timeout führen konnte, wenn mehrere Kontexte parallel erstellt wurden, wurde behoben. ([Firefox Bug 2019511](https://bugzil.la/2019511)).
- Der Befehl `browsingContext.locateNodes` wurde verbessert, um das Abrufen des HTML-Elements (`documentElement`) einer Seite bei Verwendung des `css` Locators zu ermöglichen. ([Firefox Bug 2020578](https://bugzil.la/2020578)).

#### Marionette

- Der Befehl `WebDriver:getShadowRoot` wurde korrigiert, um das Zurückgeben von User-Agent Shadow-Roots zu stoppen. ([Firefox Bug 2016741](https://bugzil.la/2016741)).

## Änderungen für Add-on-Entwickler

- Das Verhalten von {{WebExtAPIRef("tabs.move")}} wurde für geteilte Ansichten aktualisiert, damit:
  - Die Reihenfolge von Tabs in einer geteilten Ansicht getauscht werden kann. ([Firefox Bug 2016762](https://bugzil.la/2016762))
  - Wenn die Liste der Tabs sowohl geteilte Ansicht-Tabs als auch ein oder mehrere Tabs dazwischen platziert, werden die Tabs auseinander bewegt und die geteilte Ansicht geschlossen. ([Firefox Bug 2022549](https://bugzil.la/2022549))
- Erweiterungsdokumente können jetzt die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden und eine [Relying Party ID (RP ID)](/de/docs/Web/API/PublicKeyCredentialCreationOptions#rp) für beliebige Domains beanspruchen, die durch die [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) der Erweiterung abgedeckt sind. Diese Änderung bedeutet, dass [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) und [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/create) eine RP-ID angeben können, die mit einer hostberechtigten Domain übereinstimmt, sodass Erweiterungen WebAuthn-Zugangsdaten im Namen von Webdiensten erstellen und abrufen können. Siehe [Use Web Authn API in web extensions](/de/docs/Mozilla/Add-ons/WebExtensions/Use_the_web_authn_api) für Details. ([Firefox Bug 1956484](https://bugzil.la/1956484)).
- Ein Problem mit einigen JavaScript [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Aufrufen, die beim Import von CSS fehlschlugen, wurde behoben. ([Firefox Bug 2016369](https://bugzil.la/2016369))

## Experimentelle Web-Features

Diese Features sind in Firefox 150 enthalten, aber standardmäßig deaktiviert. Um sie zu testen, suchen Sie die entsprechende Präferenz auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der [Experimental features](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **Namensraum-Attribute in der `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion akzeptiert jetzt [namensraumbezogene Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dies ermöglicht es Ihnen, Attribute aus Elementen von [XML](/de/docs/Web/XML)-basierten Sprachen, wie [SVG](/de/docs/Web/SVG), zu verwenden und entsprechend zu stylen. ([Firefox Bug 2014060](https://bugzil.la/2014060))

- **`@container style()`-Abfragen** (Nightly): `layout.css.style-queries.enabled`

  Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-Regel unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen. Dies wurde aktualisiert, um das Verschachteln von `style()`-Abfragen zu unterstützen. ([Firefox Bug 2014098](https://bugzil.la/2014098)).

- **Absolut positionierte Elemente in Mehrspalten-Containern und beim Drucken**: `layout.abspos.fragmentainer-aware-positioning.enabled`

  Absolut positionierte Elemente innerhalb von [Mehrspalten-Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken sind jetzt korrekt positioniert und fragmentiert. Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layout-Probleme wie überlappenden Text oder Inhaltsverlust. ([Firefox Bug 2018797](https://bugzil.la/2018797)).

- **Gescopte benutzerdefinierte Elementregister**: `dom.scoped-custom-element-registries.enabled`

  Die [`customElementRegistry`](/de/docs/Web/API/CustomElementRegistry) Eigenschaft wird auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element), und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt. Dies erlaubt die Definition von [gescopten benutzerdefinierten Elementregistern](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries). ([Firefox Bug 2018900](https://bugzil.la/2018900)).

- **Mehrfach-Importkarten**: `dom.multiple_import_maps.enabled`

  [Mehrfach-Importkarten](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps) geben Entwicklern mehr Flexibilität bei der Strukturierung und dem Laden von JavaScript-Modulen. ([Firefox Bug 1916277](https://bugzil.la/1916277)).

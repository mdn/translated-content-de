---
title: Firefox 150 Versionshinweise für Entwickler (Stabile Version)
short-title: Firefox 150 (Stabile Version)
slug: Mozilla/Firefox/Releases/150
l10n:
  sourceCommit: a6f4c4fd720fc1ee83284b11382b63ee85501dc1
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 150, die Entwickler betreffen.
Firefox 150 wurde am [21. April 2026](https://whattrainisitnow.com/release/?version=150) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Eine spezifische Nachricht wird jetzt im [_Response-Tab_ des Netzwerkbereichs](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) angezeigt, um anzugeben, warum keine Antwortdaten vorliegen, wenn eine Anfrage umgeleitet wurde.
  ([Firefox Fehler 2016679](https://bugzil.la/2016679)).
- Ein neuer Abschnitt "Element-spezifische Pseudo-Klassen" wurde zum [Pseudo-Klassen-Umschaltbereich](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-common-pseudo-classes) hinzugefügt, einschließlich eines Umschalters für die {{cssxref(":open")}} Pseudo-Klasse, die nur für Elemente verfügbar ist, die einen offenen Zustand haben, wie `<dialog>` Elemente. Der bestehende Umschalter für die {{cssxref(":visited")}} Pseudo-Klasse wurde ebenfalls dorthin verschoben, da er nur für `<a>` und `<area>` Elemente gilt. ([Firefox Fehler 2014442](https://bugzil.la/2014442)).

### HTML

- Das `"auto"` Schlüsselwort wird nun als Option für das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attribut von `<img>` Elementen (und [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)) unterstützt.
  Dies ermöglicht es, dass lazy-geladene `<img>` Elemente die berechnete Bildlayoutgröße verwenden, nachdem CSS angewendet wurde, um auszuwählen, welches Bild aus einem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) angezeigt werden soll.
  Dies ist einfacher, als Medienbedingungen und deren zugehörige Größen im Attribut anzugeben, was wahrscheinlich ein Verhalten dupliziert, das bereits in CSS-Medienabfragen erfasst ist.
  ([Firefox Fehler 1819581](https://bugzil.la/1819581)).

### CSS

- Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion akzeptiert nun mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, anstatt nur zwei. Dies ermöglicht das Mischen einer beliebigen Anzahl von Farben. ([Firefox Fehler 2024171](https://bugzil.la/2024171)).

- Die [`light-dark()`](/de/docs/Web/CSS/Reference/Values/color_value/light-dark) CSS-Funktion akzeptiert jetzt [`<image>`](/de/docs/Web/CSS/Reference/Values/image) Werte. Dies erlaubt die Verwendung von Bildern, Verläufen und so weiter für verschiedene Farb-Schemata.
  ([Firefox Fehler 2023569](https://bugzil.la/2023569)).

- Die medienbasierten Pseudo-Klassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}}, und {{cssxref(":volume-locked")}} werden jetzt unterstützt. Damit können Sie {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente basierend auf ihrem aktuellen Zustand wie Abspielen oder Pausieren stylen. ([Firefox Fehler 2020775](https://bugzil.la/2020775)).

- Das {{cssxref("revert-rule")}} CSS-Schlüsselwort wird jetzt unterstützt. Es ermöglicht, dass der Wert einer Eigenschaft so bestimmt wird, als ob die aktuelle Stilregel nicht vorhanden wäre, sodass stattdessen der Wert von einer anderen passenden Regel wirksam werden kann. ([Firefox Fehler 2017307](https://bugzil.la/2017307)).

- Die {{cssxref("overscroll-behavior")}} CSS-Eigenschaft (und ihre Langform-Eigenschaften {{cssxref("overscroll-behavior-x")}}, {{cssxref("overscroll-behavior-y")}}, {{cssxref("overscroll-behavior-block")}}, und {{cssxref("overscroll-behavior-inline")}}) werden nun korrekt auf Scroll-Container angewendet, die keinen scrollbaren Überlauf haben, wie Elemente mit `overflow: hidden`. Zuvor wurde die Eigenschaft bei solchen Elementen ignoriert. ([Firefox Fehler 1837436](https://bugzil.la/1837436)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) gibt jetzt `false` zurück, wenn das zu ersetzende Element {{htmlelement("html")}} im HTML-[Namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) ist.
  Anders gesagt, Sie können diese Methode nicht verwenden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu erstellen, der das `<html>` Element mit seinem inneren Inhalt ersetzt. ([Firefox Fehler 2022176](https://bugzil.la/2022176)).

#### DOM

- Das Argument [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) der Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wird jetzt unterstützt.
  Dies ermöglicht es der Methode, das Knoten zu liefern, das den Cursor innerhalb eines Shadow DOM enthält, vorausgesetzt, dass sein zugehöriger [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) als Option übergeben wurde.
  ([Firefox Fehler 1914596](https://bugzil.la/1914596)).

- Die Schnittstelle [`CSSFontFaceDescriptors`](/de/docs/Web/API/CSSFontFaceDescriptors) wird jetzt unterstützt, und eine Instanz dieses Typs wird von der [`CSSFontFaceRule.style`](/de/docs/Web/API/CSSFontFaceRule/style) Eigenschaft zurückgegeben. ([Firefox Fehler 2019904](https://bugzil.la/2019904)).

- Die nicht standardisierte Methode [`caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) der [`Document`](/de/docs/Web/API/Document) Schnittstelle wird jetzt unterstützt. ([Firefox Fehler 1550635](https://bugzil.la/1550635)).

- Die `ariaNotify()` Methode wird jetzt auf [`Document`](/de/docs/Web/API/Document/ariaNotify) und [`Element`](/de/docs/Web/API/Element/ariaNotify) unterstützt.
  Dies reiht einen Textstring in die Warteschlange ein, um von einem {{Glossary("screen_reader", "Screenreader")}} angekündigt zu werden, und bietet eine ergonomischere und zuverlässigere Alternative zu [ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions).
  ([Firefox Fehler 2018095](https://bugzil.la/2018095)).

#### Medien, WebRTC und Web Audio

- [`RTCError`](/de/docs/Web/API/RTCError) und [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent) werden jetzt unterstützt, um SDP-Parsierungsfehler zu melden.
  ([Firefox Fehler 1814459](https://bugzil.la/1814459)).
- [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent) und [`RTCPeerConnection.icecandidateerror` event](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event) werden jetzt unterstützt.
  ([Firefox Fehler 1561441](https://bugzil.la/1561441)).
- [`RTCIceTransport.role`](/de/docs/Web/API/RTCIceTransport/role) wird jetzt unterstützt.
  ([Firefox Fehler 2018843](https://bugzil.la/2018843)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Problem wurde behoben, bei dem das Schließen des Browsers mit offenen Downloads durch eine Eingabeaufforderung blockiert werden konnte. Die Eingabeaufforderung wird jetzt automatisch abgelehnt. ([Firefox Fehler 2003840](https://bugzil.la/2003840)).

#### WebDriver BiDi

- Der `emulation.setNetworkConditions` Befehl wurde hinzugefügt, der derzeit `type: offline` unterstützt. Damit können Sie den Offline-Modus entweder in bestimmten Browserkontexten, in Benutzerkontexten (sogenannte Container) oder global emulieren. ([Firefox Fehler 1993079](https://bugzil.la/1993079)).
- Wir haben die Unterstützung für nicht-utf-8 Header-Werte über alle `network` Modulbefehle und Events hinweg verbessert. Sie werden nun korrekt in `BytesValue` serialisiert. ([Firefox Fehler 1994996](https://bugzil.la/1994996)).
- Ein Fehler wurde für Download-Ereignisse behoben, die von einer Antwort mit dem "Content-Disposition" Header ausgelöst wurden. Solche Ereignisse fehlten die `navigation` Eigenschaft, wenn der Download durch einen Link mit `target="_blank"` initiiert wurde. ([Firefox Fehler 1999481](https://bugzil.la/1999481)).
- Das `log.entryAdded` Event wurde aktualisiert, um nur für Konsolen-API-Aufrufe emittiert zu werden, die tatsächlich eine Nachricht in den Entwicklertools des Browsers drucken (siehe auch die Konsolenspezifikation: [wann die Druckfunktion verwenden](https://console.spec.whatwg.org/#printer)). Mit dieser Änderung lösen `console.clear` oder `console.time` kein Ereignis mehr aus. ([Firefox Fehler 1866749](https://bugzil.la/1866749)).
- Ein Wettlaufzustand mit dem `browsingContext.setViewport` Befehl wurde behoben, der zu einem Timeout führen konnte, wenn mehrere Kontexte parallel erstellt wurden. ([Firefox Fehler 2019511](https://bugzil.la/2019511)).
- Der `browsingContext.locateNodes` Befehl wurde verbessert, um das Abrufen des HTML-Elements (`documentElement`) einer Seite bei Verwendung des `css` Locators zu ermöglichen. ([Firefox Fehler 2020578](https://bugzil.la/2020578)).

#### Marionette

- Der `WebDriver:getShadowRoot` Befehl wurde korrigiert, um die Rückgabe von User-Agent-Shadow Roots zu stoppen. ([Firefox Fehler 2016741](https://bugzil.la/2016741)).

## Änderungen für Add-on Entwickler

- Das Verhalten von {{WebExtAPIRef("tabs.move")}} wurde für geteilte Ansichten aktualisiert, so dass:
  - Die Reihenfolge der Tabs in einer geteilten Ansicht getauscht werden kann. ([Firefox Fehler 2016762](https://bugzil.la/2016762))
  - Wenn die Liste der Tabs sowohl Tabs aus geteilten Ansichten umfasst und ein oder mehrere Tabs dazwischen platziert werden, die Tabs auseinander bewegt und die geteilte Ansicht geschlossen wird. ([Firefox Fehler 2022549](https://bugzil.la/2022549))
- Erweiterungsdokumente können jetzt die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) nutzen und eine [Relying Party ID (RP ID)](/de/docs/Web/API/PublicKeyCredentialCreationOptions#rp) für jede Domäne, die von den [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) der Erweiterung abgedeckt wird, festlegen. Diese Änderung bedeutet, dass [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) und [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/create) eine RP ID angeben können, die mit einer hostberechtigten Domäne übereinstimmt, wodurch Erweiterungen WebAuthn-Anmeldeinformationen im Namen von Webdiensten erstellen und abrufen können. Siehe [Web Authn API in Web Erweiterungen verwenden](/de/docs/Mozilla/Add-ons/WebExtensions/Use_the_web_authn_api) für Details. ([Firefox Fehler 1956484](https://bugzil.la/1956484)).
- Ein Problem mit einigen JavaScript [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Aufrufen, die CSS nicht importieren konnten, wurde behoben. ([Firefox Fehler 2016369](https://bugzil.la/2016369))

## Experimentelle Web-Features

Diese Features werden in Firefox 150 ausgeliefert, sind aber standardmäßig deaktiviert. Um sie zu testen, suchen Sie auf der `about:config` Seite nach dem entsprechenden Präferenz und setzen Sie ihn auf `true`.
Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Namenserweiterte Attribute in der `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion akzeptiert jetzt [namenserweiterte Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Damit können Sie Attribute von Elementen [XML]-basierter Sprachen wie [SVG] und entsprechend stylen. ([Firefox Fehler 2014060](https://bugzil.la/2014060))

- **`@container style()` Abfragen** (Nightly): `layout.css.style-queries.enabled`

  Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-At-Regel unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen. Dies wurde aktualisiert, um die Verschachtelung von `style()` Abfragen zu unterstützen. ([Firefox Fehler 2014098](https://bugzil.la/2014098)).

- **Absolut positionierte Elemente in Multi-Column-Containern und beim Drucken**: `layout.abspos.fragmentainer-aware-positioning.enabled`

  Absolut positionierte Elemente in [Multi-Column-Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken sind jetzt korrekt positioniert und fragmentiert. Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überlappenden Text oder Inhaltsverlust. ([Firefox Fehler 2018797](https://bugzil.la/2018797)).

- **Bereichsbezogene benutzerdefinierte Elementregister**: `dom.scoped-custom-element-registries.enabled`

  Die [`customElementRegistry`](/de/docs/Web/API/CustomElementRegistry) Eigenschaft wird auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element), und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt.
  Dies ermöglicht die Definition von [bereichsbezogenen benutzerdefinierten Elementregistern](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries).
  ([Firefox Fehler 2018900](https://bugzil.la/2018900)).

- **Mehrere Importkarten**: `dom.multiple_import_maps.enabled`

  [Mehrere Importkarten](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps) bieten Entwicklern mehr Flexibilität bei der Strukturierung und dem Laden von JavaScript-Modulen.
  ([Firefox Fehler 1916277](https://bugzil.la/1916277)).

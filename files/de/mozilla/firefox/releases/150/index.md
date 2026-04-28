---
title: Firefox 150 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 150 (Stabil)
slug: Mozilla/Firefox/Releases/150
l10n:
  sourceCommit: a7944ceebf276439c0a6a1c134003c4a919f7279
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 150, die Entwickler betreffen.
Firefox 150 wurde am [21. April 2026](https://whattrainisitnow.com/release/?version=150) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Eine spezielle Nachricht wird nun im [_Response-Tab des Netzwerksbereichs_](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) angezeigt, um anzuzeigen, warum keine Antwortdaten vorhanden sind, wenn eine Anfrage umgeleitet wurde. ([Firefox-Bug 2016679](https://bugzil.la/2016679)).
- Ein neuer Abschnitt "Element-spezifische Pseudoklassen" wurde zum [Pseudo-Klassen-Umschaltbereich](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-common-pseudo-classes) hinzugefügt, der einen Schalter für die {{cssxref(":open")}} Pseudoklasse enthält, die nur für Elemente verfügbar ist, die einen offenen Zustand haben wie `<dialog>` Elemente. Der vorhandene Schalter für die {{cssxref(":visited")}} Pseudoklasse wurde ebenfalls dorthin verschoben, da er nur für `<a>` und `<area>` Elemente gilt. ([Firefox-Bug 2014442](https://bugzil.la/2014442)).

### HTML

- Das Stichwort `"auto"` wird jetzt als Option für das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attribut von `<img>` Elementen (und [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)) unterstützt. Dies ermöglicht es trägheitsgeladenen `<img>` Elementen, die berechnete Bildlayoutgröße zu verwenden, nachdem jegliches CSS angewendet wurde, um auszuwählen, welches Bild aus einem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) angezeigt werden soll. Dies ist einfacher als Medienbedingungen und deren zugehörige Größen im Attribut anzugeben, was wahrscheinlich Verhalten dupliziert, das bereits in CSS-Medienabfragen erfasst ist. ([Firefox-Bug 1819581](https://bugzil.la/1819581)).

### CSS

- Die CSS-Funktion [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) akzeptiert jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, anstatt nur zwei. Dies ermöglicht das Mischen einer beliebigen Anzahl von Farben. ([Firefox-Bug 2024171](https://bugzil.la/2024171)).

- Die CSS-Funktion [`light-dark()`](/de/docs/Web/CSS/Reference/Values/color_value/light-dark) akzeptiert jetzt [`<image>`](/de/docs/Web/CSS/Reference/Values/image) Werte. Dies ermöglicht die Verwendung von Bildern, Verläufen usw. für verschiedene Farbschemata. ([Firefox-Bug 2023569](https://bugzil.la/2023569)).

- Die medienbasierten Pseudoklassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}} und {{cssxref(":volume-locked")}} werden jetzt unterstützt. Sie ermöglichen es Ihnen, {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente basierend auf ihrem aktuellen Zustand, wie Abspielen oder Pausieren, zu stylen. ([Firefox-Bug 2020775](https://bugzil.la/2020775)).

- Das CSS-Schlüsselwort {{cssxref("revert-rule")}} wird jetzt unterstützt. Es erlaubt es, den Wert einer Eigenschaft so zu bestimmen, als ob die aktuelle Stilregel nicht vorhanden wäre, sodass der Wert aus einer anderen passenden Regel stattdessen wirksam werden kann. ([Firefox-Bug 2017307](https://bugzil.la/2017307)).

- Die CSS-Eigenschaft {{cssxref("overscroll-behavior")}} (und ihre Langform-Eigenschaften {{cssxref("overscroll-behavior-x")}}, {{cssxref("overscroll-behavior-y")}}, {{cssxref("overscroll-behavior-block")}} und {{cssxref("overscroll-behavior-inline")}}) gilt nun korrekt für Scroll-Container, die keinen scrollbareren Überlauf haben, wie Elemente mit `overflow: hidden`. Zuvor wurde die Eigenschaft bei solchen Elementen ignoriert. ([Firefox-Bug 1837436](https://bugzil.la/1837436)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) gibt nun `false` zurück, wenn das zu ersetzende Element {{htmlelement("html")}} im HTML-[Namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) ist. Mit anderen Worten, Sie können diese Methode nicht verwenden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu erstellen, der das `<html>` Element durch seinen inneren Inhalt ersetzt. ([Firefox-Bug 2022176](https://bugzil.la/2022176)).

#### DOM

- Das Argument [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) der Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wird jetzt unterstützt. Dies ermöglicht es der Methode, den Knoten zurückzugeben, der die Einfügemarke innerhalb eines Shadow DOMs enthält, vorausgesetzt, sein zugehöriger [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) wurde als Option übergeben. ([Firefox-Bug 1914596](https://bugzil.la/1914596)).

- Die Schnittstelle [`CSSFontFaceDescriptors`](/de/docs/Web/API/CSSFontFaceDescriptors) wird jetzt unterstützt, und eine Instanz dieses Typs wird von der Eigenschaft [`CSSFontFaceRule.style`](/de/docs/Web/API/CSSFontFaceRule/style) zurückgegeben. ([Firefox-Bug 2019904](https://bugzil.la/2019904)).

- Die nicht-standardisierte Methode [`caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) der [`Document`](/de/docs/Web/API/Document) Schnittstelle wird jetzt unterstützt. ([Firefox-Bug 1550635](https://bugzil.la/1550635)).

- Die `ariaNotify()` Methode wird jetzt auf [`Document`](/de/docs/Web/API/Document/ariaNotify) und [`Element`](/de/docs/Web/API/Element/ariaNotify) unterstützt. Diese fügt eine Textzeile zu einer Warteschlange hinzu, die von einem {{Glossary("screen_reader", "Screenreader")}} angesagt werden soll, und bietet eine ergonomischere und zuverlässigere Alternative zu [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions). ([Firefox-Bug 2018095](https://bugzil.la/2018095)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Problem wurde behoben, bei dem ausstehende Downloads beim Schließen des Browsers durch eine Eingabeaufforderung blockiert werden konnten. Die Eingabeaufforderung wird jetzt automatisch geschlossen. ([Firefox-Bug 2003840](https://bugzil.la/2003840)).

#### WebDriver BiDi

- Der Befehl `emulation.setNetworkConditions` wurde hinzugefügt, der momentan `type: offline` unterstützt. Damit können Sie den Offlinemodus entweder auf spezifischen Browsing-Kontexten, in Benutzerkontexten (auch Container genannt) oder global emulieren. ([Firefox-Bug 1993079](https://bugzil.la/1993079)).
- Unsere Unterstützung für Nicht-UTF-8-Headerwerte wurde in allen Befehlen und Ereignissen des `network` Moduls verbessert. Sie werden jetzt korrekt in `BytesValue` serialisiert. ([Firefox-Bug 1994996](https://bugzil.la/1994996)).
- Ein Bug bei Download-Ereignissen, die durch eine Antwort mit dem "Content-Disposition"-Header ausgelöst wurden, wurde behoben. Solche Ereignisse fehlten die `navigation` Eigenschaft, wenn der Download durch einen Link mit `target="_blank"` initiiert wurde. ([Firefox-Bug 1999481](https://bugzil.la/1999481)).
- Das Ereignis `log.entryAdded` wurde aktualisiert, um nur für Konsolen-API-Aufrufe ausgegeben zu werden, die tatsächlich eine Nachricht in den Entwicklertools des Browsers drucken (siehe auch die Konsolenspezifikation: [using the printer](https://console.spec.whatwg.org/#printer)). Mit dieser Änderung löst die Verwendung von `console.clear` oder `console.time` kein Ereignis mehr aus. ([Firefox-Bug 1866749](https://bugzil.la/1866749)).
- Ein Wettlaufproblem mit dem Befehl `browsingContext.setViewport` wurde behoben, das zu einem Timeout führen konnte, wenn mehrere Kontexte parallel erstellt wurden. ([Firefox-Bug 2019511](https://bugzil.la/2019511)).
- Der Befehl `browsingContext.locateNodes` wurde verbessert, um das HTML-Element (`documentElement`) einer Seite abzurufen, wenn der `css` Locator verwendet wird. ([Firefox-Bug 2020578](https://bugzil.la/2020578)).

#### Marionette

- Der `WebDriver:getShadowRoot` Befehl wurde korrigiert, um die Rückgabe von Benutzeragent-Shadow-Roots zu stoppen. ([Firefox-Bug 2016741](https://bugzil.la/2016741)).

## Änderungen für Add-on-Entwickler

- Das Verhalten von {{WebExtAPIRef("tabs.move")}} wurde für geteilte Ansichten aktualisiert, sodass:
  - Die Reihenfolge der Tabs in einer geteilten Ansicht gewechselt werden kann. ([Firefox-Bug 2016762](https://bugzil.la/2016762))
  - Wenn die Liste der Tabs sowohl geteilte Ansicht-Tabs beinhaltet als auch ein oder mehrere Tabs zwischen ihnen platziert, werden die Tabs auseinander bewegt und die geteilte Ansicht geschlossen. ([Firefox-Bug 2022549](https://bugzil.la/2022549))
- Erweiterungsdokumente können jetzt die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden und eine [Relying Party ID (RP ID)](/de/docs/Web/API/PublicKeyCredentialCreationOptions#rp) für jede vom Erweiterungshost erlaubte Domain festlegen. Diese Änderung bedeutet, dass [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) und [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/create) eine RP ID festlegen können, die mit einer hostberechtigten Domain übereinstimmt, was es Erweiterungen ermöglicht, WebAuthn-Anmeldedaten im Namen von Webdiensten zu erstellen und abzurufen. Siehe [Use Web Authn API in web extensions](/de/docs/Mozilla/Add-ons/WebExtensions/Use_the_web_authn_api) für Details. ([Firefox-Bug 1956484](https://bugzil.la/1956484)).
- Ein Problem wurde behoben, bei dem einige JavaScript [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Aufrufe fehlschlugen, um CSS zu importieren. ([Firefox-Bug 2016369](https://bugzil.la/2016369))

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 150 verfügbar, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Namensraum-Attribute in der `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion akzeptiert jetzt [Namensraum-Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dadurch können Sie Attribute aus Elementen von [XML](/de/docs/Web/XML)-basierten Sprachen, wie [SVG](/de/docs/Web/SVG) verwenden und entsprechend stylen. ([Firefox-Bug 2014060](https://bugzil.la/2014060))

- **`@container style()` Abfragen** (Nightly): `layout.css.style-queries.enabled`

  Die CSS-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen. Dies wurde aktualisiert, um das Verschachteln von `style()` Abfragen zu unterstützen. ([Firefox-Bug 2014098](https://bugzil.la/2014098)).

- **Absolut positionierte Elemente in mehrspaltigen Containern und beim Drucken**: `layout.abspos.fragmentainer-aware-positioning.enabled`

  Absolut positionierte Elemente innerhalb von [mehrspaltigen Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken werden nun korrekt positioniert und fragmentiert. Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überlappenden Text oder Inhaltsverlust. ([Firefox-Bug 2018797](https://bugzil.la/2018797)).

- **Gescopte benutzerdefinierte Elementregister**: `dom.scoped-custom-element-registries.enabled`

  Die Eigenschaft [`customElementRegistry`](/de/docs/Web/API/CustomElementRegistry) wird auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt. Dies ermöglicht die Definition von [gescopten benutzerdefinierten Elementregistern](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries). ([Firefox-Bug 2018900](https://bugzil.la/2018900)).

- **Mehrfache Importmaps**: `dom.multiple_import_maps.enabled`

  [Mehrfache Importmaps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps) bieten Entwicklern mehr Flexibilität bei der Strukturierung und beim Laden von JavaScript-Modulen. ([Firefox-Bug 1916277](https://bugzil.la/1916277)).

---
title: Firefox 150 Versionshinweise für Entwickler (Stable)
short-title: Firefox 150 (Stable)
slug: Mozilla/Firefox/Releases/150
l10n:
  sourceCommit: f186e0e0faf8089d0d126b97663667c0ff2cf093
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 150, die Entwickler betreffen.
Firefox 150 wurde am [21. April 2026](https://whattrainisitnow.com/release/?version=150) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Eine spezifische Nachricht wird jetzt im [_Response-Tab_ des Netzwerkbereichs](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) angezeigt, um zu erklären, warum keine Antwortdaten vorhanden sind, wenn eine Anfrage umgeleitet wurde.
  ([Firefox Bug 2016679](https://bugzil.la/2016679)).
- Ein neuer Abschnitt "Element-spezifische Pseudoklassen" wurde zum [Pseudoklassen-Umschalter](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-common-pseudo-classes) hinzugefügt. Dort gibt es einen Umschalter für die {{cssxref(":open")}} Pseudoklasse, die nur für Elemente verfügbar ist, die einen offenen Zustand wie `<dialog>` Elemente haben. Der bestehende Umschalter für die {{cssxref(":visited")}} Pseudoklasse wurde ebenfalls dorthin verschoben, da sie nur für `<a>` und `<area>` Elemente gilt. ([Firefox Bug 2014442](https://bugzil.la/2014442)).

### HTML

- Das `"auto"` Schlüsselwort wird nun als Option für das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attribut von `<img>` Elementen (und [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)) unterstützt. Dies ermöglicht es, dass lazy-geladene `<img>` Elemente die berechnete Bildlayoutgröße verwenden, nachdem CSS angewendet wurde, um auszuwählen, welches Bild aus einem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) angezeigt wird. Dies ist einfacher, als Medienbedingungen und ihre zugehörigen Größen im Attribut anzugeben, was wahrscheinlich Verhalten dupliziert, das bereits in CSS-Medienabfragen erfasst ist. ([Firefox Bug 1819581](https://bugzil.la/1819581)).

### CSS

- Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion akzeptiert jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, anstatt nur zwei. Dies erlaubt das Mischen von beliebig vielen Farben. ([Firefox Bug 2024171](https://bugzil.la/2024171)).

- Die [`light-dark()`](/de/docs/Web/CSS/Reference/Values/color_value/light-dark) CSS-Funktion akzeptiert jetzt [`<image>`](/de/docs/Web/CSS/Reference/Values/image) Werte. Dies ermöglicht die Verwendung von Bildern, Verläufen und so weiter für verschiedene Farbschemata.
  ([Firefox Bug 2023569](https://bugzil.la/2023569)).

- Die medienbasierten Pseudoklassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}} und {{cssxref(":volume-locked")}} werden jetzt unterstützt. Sie erlauben Ihnen, {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente basierend auf ihrem aktuellen Zustand zu stylen, wie zum Beispiel beim Abspielen oder Pausieren. ([Firefox Bug 2020775](https://bugzil.la/2020775)).

- Das {{cssxref("revert-rule")}} CSS-Schlüsselwort wird jetzt unterstützt. Es ermöglicht, den Wert einer Eigenschaft zu bestimmen, als ob die aktuelle Stilregel nicht vorhanden wäre, sodass der Wert aus einer anderen passenden Regel stattdessen wirksam werden kann. ([Firefox Bug 2017307](https://bugzil.la/2017307)).

- Die {{cssxref("overscroll-behavior")}} CSS-Eigenschaft (und ihre Langform-Eigenschaften {{cssxref("overscroll-behavior-x")}}, {{cssxref("overscroll-behavior-y")}}, {{cssxref("overscroll-behavior-block")}} und {{cssxref("overscroll-behavior-inline")}}) gelten nun korrekt für Scroll-Container, die keinen scrollbaren Überlauf haben, wie Elemente mit `overflow: hidden`. Zuvor wurde die Eigenschaft bei solchen Elementen ignoriert. ([Firefox Bug 1837436](https://bugzil.la/1837436)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) wird jetzt `false` zurückgeben, wenn das zu ersetzende Element {{htmlelement("html")}} im HTML-[Namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) ist. Mit anderen Worten, Sie können diese Methode nicht verwenden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu erstellen, der das `<html>` Element durch seinen inneren Inhalt ersetzt. ([Firefox Bug 2022176](https://bugzil.la/2022176)).

#### DOM

- Das Argument [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) der Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wird jetzt unterstützt. Dies ermöglicht es der Methode, den Knoten zurückzugeben, der den Kursor aus einem Shadow DOM enthält, sofern sein zugehöriges [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) als Option übergeben wurde. ([Firefox Bug 1914596](https://bugzil.la/1914596)).

- Das Interface [`CSSFontFaceDescriptors`](/de/docs/Web/API/CSSFontFaceDescriptors) wird jetzt unterstützt, und eine Instanz dieses Typs wird von der Eigenschaft [`CSSFontFaceRule.style`](/de/docs/Web/API/CSSFontFaceRule/style) zurückgegeben. ([Firefox Bug 2019904](https://bugzil.la/2019904)).

- Die nicht standardisierte Methode [`caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) des [`Document`](/de/docs/Web/API/Document) Interfaces wird jetzt unterstützt. ([Firefox Bug 1550635](https://bugzil.la/1550635)).

- Die Methode `ariaNotify()` wird jetzt auf [`Document`](/de/docs/Web/API/Document/ariaNotify) und [`Element`](/de/docs/Web/API/Element/ariaNotify) unterstützt. Diese Methode stellt eine textuelle Nachricht in die Warteschlange, die von einem {{Glossary("screen_reader", "Screenreader")}} vorgelesen wird und bietet eine ergonomischere und verlässlichere Alternative zu [ARIA Live-Bereichen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions). ([Firefox Bug 2018095](https://bugzil.la/2018095)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Problem wurde behoben, bei dem der Browser beim Schließen blockiert werden konnte, wenn Downloads ausstehen. Der Hinweis wird jetzt automatisch bestätigt. ([Firefox Bug 2003840](https://bugzil.la/2003840)).

#### WebDriver BiDi

- Der Befehl `emulation.setNetworkConditions` wurde hinzugefügt, der momentan `type: offline` unterstützt. Damit können Sie den Offline-Modus entweder in spezifischen Browserkontexten, Benutzerkontexten (alias Containern) oder global emulieren. ([Firefox Bug 1993079](https://bugzil.la/1993079)).
- Unser Support für nicht utf-8-Headerwerte über alle `network` Modulbefehle und Ereignisse hinweg wurde verbessert. Sie werden jetzt korrekt in `BytesValue` serialisiert. ([Firefox Bug 1994996](https://bugzil.la/1994996)).
- Ein Fehler bei Herunterladen-Ereignissen, die durch eine Antwort mit dem Header "Content-Disposition" ausgelöst wurden, wurde behoben. Solche Ereignisse fehlten die `navigation` Eigenschaft, wenn der Download durch einen Link mit `target="_blank"` initiiert wurde. ([Firefox Bug 1999481](https://bugzil.la/1999481)).
- Das Ereignis `log.entryAdded` wurde aktualisiert, sodass es nur bei Konsolen-API-Aufrufen ausgegeben wird, die tatsächlich eine Nachricht in den Entwicklerwerkzeugen des Browsers ausgeben (siehe auch die Konsolenspezifikation: [using the printer](https://console.spec.whatwg.org/#printer)). Mit dieser Änderung lösen `console.clear` oder `console.time` kein Ereignis mehr aus. ([Firefox Bug 1866749](https://bugzil.la/1866749)).
- Ein Wettlaufproblem mit dem Befehl `browsingContext.setViewport` wurde behoben, das zu einem Timeout führen konnte, wenn mehrere Kontexte parallel erstellt wurden. ([Firefox Bug 2019511](https://bugzil.la/2019511)).
- Der Befehl `browsingContext.locateNodes` wurde verbessert, um das Abrufen des HTML-Elements (`documentElement`) einer Seite beim Verwenden des `css` Locators zu ermöglichen. ([Firefox Bug 2020578](https://bugzil.la/2020578)).

#### Marionette

- Der Befehl `WebDriver:getShadowRoot` wurde behoben, um die Rückgabe von User-Agent Shadow Roots zu stoppen. ([Firefox Bug 2016741](https://bugzil.la/2016741)).

## Änderungen für Add-on-Entwickler

- Das Verhalten von {{WebExtAPIRef("tabs.move")}} wurde für geteilte Ansichten aktualisiert, so dass:
  - Die Reihenfolge der Tabs in einer geteilten Ansicht vertauscht werden kann. ([Firefox Bug 2016762](https://bugzil.la/2016762))
  - Wenn die Liste der Tabs sowohl geteilte Ansicht Tabs enthält, als auch ein oder mehrere Tabs dazwischen platziert, die Tabs auseinander verschoben und die geteilte Ansicht geschlossen werden. ([Firefox Bug 2022549](https://bugzil.la/2022549))
- Erweiterungsdokumente können jetzt die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden und eine [Relying Party ID (RP ID)](/de/docs/Web/API/PublicKeyCredentialCreationOptions#rp) für jede von den Host-Berechtigungen der Erweiterung abgedeckte Domain geltend machen. Diese Änderung bedeutet, dass [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) und [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/create) eine RP ID angeben können, die mit einer hostberechtigten Domain übereinstimmt, sodass Erweiterungen WebAuthn-Credentials im Namen von Webdiensten erstellen und abrufen können. Siehe [Use Web Authn API in web extensions](/de/docs/Mozilla/Add-ons/WebExtensions/Use_the_web_authn_api) für Details. ([Firefox Bug 1956484](https://bugzil.la/1956484)).
- Ein Problem mit einigen JavaScript-['import'](/de/docs/Web/JavaScript/Reference/Statements/import)-Aufrufen, die CSS nicht importieren konnten, wurde behoben. ([Firefox Bug 2016369](https://bugzil.la/2016369))

## Experimentelle Webfeatures

Diese Features sind in Firefox 150 verfügbar, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solcher Features finden Sie auf der [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **Namespaces Attribute in der `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion akzeptiert nun [namespaced attributes](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dies ermöglicht es Ihnen, Attribute von Elementen XML-basierter Sprachen wie [SVG](/de/docs/Web/SVG) zu entnehmen und entsprechend zu stylen. ([Firefox Bug 2014060](https://bugzil.la/2014060))

- **`@container style()` Abfragen** (Nightly): `layout.css.style-queries.enabled`

  Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-At-Regel unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen. Diese wurde aktualisiert, um das Verschachteln von `style()` Abfragen zu unterstützen. ([Firefox Bug 2014098](https://bugzil.la/2014098)).

- **Absolut positionierte Elemente in mehrspaltigen Containern und beim Drucken**: `layout.abspos.fragmentainer-aware-positioning.enabled`

  Absolut positionierte Elemente innerhalb von [mehrspaltigen Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken werden jetzt korrekt positioniert und fragmentiert. Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überlappenden Text oder Inhaltsverlust. ([Firefox Bug 2018797](https://bugzil.la/2018797)).

- **Gescopte benutzerdefinierte Element-Registries**: `dom.scoped-custom-element-registries.enabled`

  Die Eigenschaft [`customElementRegistry`](/de/docs/Web/API/CustomElementRegistry) wird auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt.
  Dies ermöglicht die Definition von [gescopten benutzerdefinierten Element-Registries](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries).
  ([Firefox Bug 2018900](https://bugzil.la/2018900)).

- **Mehrfach-Importmaps**: `dom.multiple_import_maps.enabled`

  [Mehrfach-Importmaps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps) bieten Entwicklern mehr Flexibilität bei der Strukturierung und dem Laden von JavaScript-Modulen. ([Firefox Bug 1916277](https://bugzil.la/1916277)).

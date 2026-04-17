---
title: Firefox 150 Versionshinweise für Entwickler (Beta)
short-title: Firefox 150 (Beta)
slug: Mozilla/Firefox/Releases/150
l10n:
  sourceCommit: 4fb9722796c7e24041ec7f4060d5da19d4e8c404
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 150, die Entwickler betreffen.
Firefox 150 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [21. April 2026](https://whattrainisitnow.com/release/?version=150) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

## Änderungen für Webentwickler

### Entwickler-Tools

- Eine spezifische Nachricht wird jetzt im [_Antwort-Tab_ des Netzwerkbereichs](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) angezeigt, um anzuzeigen, warum keine Antwortdaten vorliegen, wenn eine Anfrage umgeleitet wurde.
  ([Firefox Bug 2016679](https://bugzil.la/2016679)).

### HTML

- Das Schlüsselwort `"auto"` wird nun als Option für das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut von `<img>`-Elementen (und [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)) unterstützt.
  Dies ermöglicht es, lazy-geladenen `<img>`-Elementen die berechnete Bildlayout-Größe zu verwenden, nachdem CSS angewendet wurde, um auszuwählen, welches Bild aus einem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) angezeigt werden soll.
  Dies ist einfacher als das Festlegen von Medienbedingungen und deren zugehörigen Größen im Attribut, was wahrscheinlich das Verhalten dupliziert, das bereits in CSS-Medienabfragen erfasst ist.
  ([Firefox Bug 1819581](https://bugzil.la/1819581)).

### CSS

- Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix)-CSS-Funktion akzeptiert jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Werte, anstatt nur zwei. Dadurch können Sie eine beliebige Anzahl von Farben mischen. ([Firefox Bug 2024171](https://bugzil.la/2024171)).

- Die [`light-dark()`](/de/docs/Web/CSS/Reference/Values/color_value/light-dark)-CSS-Funktion akzeptiert jetzt [`<image>`](/de/docs/Web/CSS/Reference/Values/image)-Werte. Dies ermöglicht die Verwendung von Bildern, Farbverläufen und so weiter für unterschiedliche Farbschemata.
  ([Firefox Bug 2023569](https://bugzil.la/2023569)).

- Die medienbasierten Pseudoklassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}} und {{cssxref(":volume-locked")}} werden jetzt unterstützt. Sie ermöglichen es, {{htmlelement("audio")}} und {{htmlelement("video")}}-Elemente basierend auf ihrem aktuellen Status zu stylen, zum Beispiel beim Abspielen oder Pausieren. ([Firefox Bug 2020775](https://bugzil.la/2020775)).

- Die {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}} Eigenschaften (und die {{cssxref("animation-range")}} Kurzschreibweise) werden jetzt unterstützt. Diese Eigenschaften setzen den Anfang und das Ende des Anwendungsbereichs einer Animation entlang ihrer Zeitleiste, sodass Sie steuern können, wo eine [scroll-gesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) auf einer Zeitleiste beginnt und endet. ([Firefox Bug 1825427](https://bugzil.la/1825427)).

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) wird jetzt `false` zurückgeben, wenn das zu ersetzende Element {{htmlelement("html")}} im HTML-[Namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) ist.
  Mit anderen Worten, Sie können diese Methode nicht verwenden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu erstellen, der das `<html>`-Element durch seinen inneren Inhalt ersetzt. ([Firefox Bug 2022176](https://bugzil.la/2022176)).

#### DOM

- Das Argument [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) der Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wird jetzt unterstützt.
  Dies ermöglicht der Methode, den Knoten zurückzugeben, der den Cursor von innerhalb einem Shadow DOM enthält, sofern dessen zugehörige [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) als Option übergeben wurde.
  ([Firefox Bug 1914596](https://bugzil.la/1914596)).

- Die Schnittstelle [`CSSFontFaceDescriptors`](/de/docs/Web/API/CSSFontFaceDescriptors) wird jetzt unterstützt, und eine Instanz dieses Typs wird von der [`CSSFontFaceRule.style`](/de/docs/Web/API/CSSFontFaceRule/style)-Eigenschaft zurückgegeben. ([Firefox Bug 2019904](https://bugzil.la/2019904)).

- Die nicht-standardisierte Methode [`caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wird jetzt unterstützt. ([Firefox Bug 1550635](https://bugzil.la/1550635)).

- Die `ariaNotify()`-Methode wird jetzt auf [`Document`](/de/docs/Web/API/Document/ariaNotify) und [`Element`](/de/docs/Web/API/Element/ariaNotify) unterstützt.
  Dies reiht eine Textzeichenfolge ein, die von einem {{Glossary("screen_reader", "Screenreader")}} angekündigt wird und bietet eine ergonomischere und zuverlässigere Alternative zu [ARIA-Live-Bereichen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions).
  ([Firefox Bug 2018095](https://bugzil.la/2018095)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Problem wurde behoben, bei dem laufende Downloads beim Schließen des Browsers durch ein Prompt blockiert werden konnten. Das Prompt wird jetzt automatisch geschlossen. ([Firefox Bug 2003840](https://bugzil.la/2003840)).

#### WebDriver BiDi

- Der `emulation.setNetworkConditions`-Befehl wurde hinzugefügt, der im Moment den `type: offline` unterstützt. Damit können Sie den Offline-Modus entweder auf spezifische Browsing-Kontexte, Benutzerkontexte (d.h. Container) oder global emulieren. ([Firefox Bug 1993079](https://bugzil.la/1993079)).
- Wir haben unsere Unterstützung für nicht-utf-8-Headerwerte in allen `network`-Modulbefehlen und Ereignissen verbessert. Sie werden nun richtig in `BytesValue` serialisiert. ([Firefox Bug 1994996](https://bugzil.la/1994996)).
- Ein Bug wurde behoben für Download-Ereignisse, die durch eine Antwort mit dem "Content-Disposition"-Header ausgelöst wurden. Solche Ereignisse fehlten die `navigation`-Eigenschaft, wenn der Download durch einen Link mit `target="_blank"` initiiert wurde. ([Firefox Bug 1999481](https://bugzil.la/1999481)).
- Das `log.entryAdded`-Ereignis wurde aktualisiert, sodass es nur für Konsolen-API-Aufrufe ausgelöst wird, die tatsächlich eine Nachricht in den Entwicklertools im Browser ausgeben (siehe auch die Konsolenspezifikation: [Verwendung des Druckers](https://console.spec.whatwg.org/#printer)). Mit dieser Änderung lösen `console.clear` oder `console.time` keine Ereignisse mehr aus. ([Firefox Bug 1866749](https://bugzil.la/1866749)).
- Ein Wettlaufproblem mit dem `browsingContext.setViewport`-Befehl wurde behoben, das zu einem Timeout führen konnte, wenn mehrere Kontexte parallel erstellt wurden. ([Firefox Bug 2019511](https://bugzil.la/2019511)).
- Der `browsingContext.locateNodes`-Befehl wurde verbessert, um das HTML-Element (`documentElement`) einer Seite beim Verwenden des `css`-Locators abzurufen. ([Firefox Bug 2020578](https://bugzil.la/2020578)).

#### Marionette

- Der `WebDriver:getShadowRoot`-Befehl wurde korrigiert, sodass er keine User-Agent-Shadow-Roots mehr zurückgibt. ([Firefox Bug 2016741](https://bugzil.la/2016741)).

## Änderungen für Add-on-Entwickler

- Das Verhalten von {{WebExtAPIRef("tabs.move")}} wurde für geteilte Ansichten aktualisiert, sodass:
  - Die Reihenfolge der Tabs in einer geteilten Ansicht ausgetauscht werden kann. ([Firefox Bug 2016762](https://bugzil.la/2016762))
  - Wenn die Liste der Tabs sowohl geteilte Ansichts-Tabs als auch einen oder mehrere Tabs zwischen diesen enthält, werden die Tabs getrennt und die geteilte Ansicht geschlossen. ([Firefox Bug 2022549](https://bugzil.la/2022549))
- Ein Problem wurde gelöst, bei dem einige JavaScript-`import`-Aufrufe daran scheiterten, CSS zu importieren. ([Firefox Bug 2016369](https://bugzil.la/2016369))

## Experimentelle Webfeatures

Diese Features sind in Firefox 150 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der [Seite für experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Namespaced-Attribute in der `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}}-CSS-Funktion akzeptiert jetzt [namespaced Attributes](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dies ermöglicht es Ihnen, Attribute von Elementen von [XML](/de/docs/Web/XML)-basierten Sprachen, wie [SVG](/de/docs/Web/SVG), zu verwenden und entsprechend zu stylen. ([Firefox Bug 2014060](https://bugzil.la/2014060))

- **Absolut positionierte Elemente in mehrspaltigen Containern und beim Drucken**: `layout.abspos.fragmentainer-aware-positioning.enabled`

  Absolut positionierte Elemente innerhalb von [mehrspaltigen Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken werden jetzt korrekt positioniert und fragmentiert. Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überlappenden Text oder Inhaltsverlust. ([Firefox Bug 2018797](https://bugzil.la/2018797)).

- **Gescopte benutzerdefinierte Elementregistries**: `dom.scoped-custom-element-registries.enabled`

  Die Eigenschaft [`customElementRegistry`](/de/docs/Web/API/CustomElementRegistry) wird auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt.
  Dies ermöglicht die Definition von [gescopten benutzerdefinierten Elementregistries](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries).
  ([Firefox Bug 2018900](https://bugzil.la/2018900)).

- **Mehrere Import-Maps**: `dom.multiple_import_maps.enabled`

  [Mehrere Import-Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps) bieten Entwicklern mehr Flexibilität bei der Strukturierung und dem Laden von JavaScript-Modulen.
  ([Firefox Bug 1916277](https://bugzil.la/1916277)).

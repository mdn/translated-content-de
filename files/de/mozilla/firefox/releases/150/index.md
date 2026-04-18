---
title: Firefox 150 Versionshinweise für Entwickler (Beta)
short-title: Firefox 150 (Beta)
slug: Mozilla/Firefox/Releases/150
l10n:
  sourceCommit: 291993c57c245249cf27c80f33f3dd22f8dd140d
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 150, die Entwickler betreffen. Firefox 150 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [21. April 2026](https://whattrainisitnow.com/release/?version=150) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

## Änderungen für Webentwickler

### Entwickler-Tools

- Eine spezifische Nachricht wird jetzt im [_Response-Tab_ des Netzwerk-Panel](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) angezeigt, um anzugeben, warum keine Antwortdaten vorhanden sind, wenn eine Anfrage umgeleitet wurde. ([Firefox Bug 2016679](https://bugzil.la/2016679)).

### HTML

- Das Schlüsselwort `"auto"` wird jetzt als Option für das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut von `<img>`-Elementen (und [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)) unterstützt. Dies ermöglicht es, lazy-geladenen `<img>`-Elementen die berechnete Bildlayout-Größe zu verwenden, nachdem jegliches CSS angewendet wurde, um zu wählen, welches Bild aus einem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) angezeigt werden soll. Dies ist einfacher als das Festlegen von Medienbedingungen und deren zugehörigen Größen im Attribut, was wahrscheinlich ein Verhalten dupliziert, das bereits in CSS-Medienabfragen erfasst ist. ([Firefox Bug 1819581](https://bugzil.la/1819581)).

### CSS

- Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion akzeptiert jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Werte, anstatt nur zwei. Dadurch können Sie eine beliebige Anzahl von Farben mischen. ([Firefox Bug 2024171](https://bugzil.la/2024171)).

- Die [`light-dark()`](/de/docs/Web/CSS/Reference/Values/color_value/light-dark) CSS-Funktion akzeptiert jetzt [`<image>`](/de/docs/Web/CSS/Reference/Values/image)-Werte. Dies ermöglicht die Verwendung von Bildern, Verläufen usw. für verschiedene Farbgestaltungen. ([Firefox Bug 2023569](https://bugzil.la/2023569)).

- Die medienbasierten Pseudo-Klassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}} und {{cssxref(":volume-locked")}} werden jetzt unterstützt. Sie ermöglichen es Ihnen, {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente basierend auf ihrem aktuellen Zustand zu stylen, z. B. ob sie abgespielt oder pausiert werden. ([Firefox Bug 2020775](https://bugzil.la/2020775)).

- Die {{cssxref("animation-range-start")}}- und {{cssxref("animation-range-end")}}-Eigenschaften (und die {{cssxref("animation-range")}}-Kurzschreibweise) werden jetzt unterstützt. Diese Eigenschaften legen den Anfang und das Ende des Anhangsbereichs einer Animation auf ihrer Zeitleiste fest und ermöglichen es Ihnen, zu kontrollieren, wo auf einer [Scroll-gesteuerten Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) die Animation starten und enden soll. ([Firefox Bug 1825427](https://bugzil.la/1825427)).

- Das CSS-Schlüsselwort {{cssxref("revert-rule")}} wird jetzt unterstützt. Es ermöglicht, den Wert einer Eigenschaft festzulegen, als ob die aktuelle Stilregel nicht vorhanden wäre, sodass stattdessen der Wert einer anderen passenden Regel wirksam werden kann. ([Firefox Bug 2017307](https://bugzil.la/2017307)).

- Die {{cssxref("overscroll-behavior")}}-CSS-Eigenschaft (und deren Langformen {{cssxref("overscroll-behavior-x")}}, {{cssxref("overscroll-behavior-y")}}, {{cssxref("overscroll-behavior-block")}} und {{cssxref("overscroll-behavior-inline")}}) wird jetzt korrekt auf Scroll-Container angewendet, die keinen scrollbaren Überlauf haben, wie Elemente mit `overflow: hidden`. Bisher wurde die Eigenschaft bei solchen Elementen ignoriert. ([Firefox Bug 1837436](https://bugzil.la/1837436)).

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) gibt jetzt `false` zurück, wenn das zu ersetzende Element {{htmlelement("html")}} im HTML-[Namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) ist. Mit anderen Worten, Sie können diese Methode nicht verwenden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu erstellen, der das `<html>`-Element mit seinem inneren Inhalt ersetzt. ([Firefox Bug 2022176](https://bugzil.la/2022176)).

#### DOM

- Das Argument [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) der Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wird jetzt unterstützt. Dadurch kann die Methode den Knoten innerhalb eines Shadow DOM zurückgeben, der den Cursor enthält, vorausgesetzt, dass das zugehörige [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) als Option übergeben wurde. ([Firefox Bug 1914596](https://bugzil.la/1914596)).

- Die Schnittstelle [`CSSFontFaceDescriptors`](/de/docs/Web/API/CSSFontFaceDescriptors) wird nun unterstützt, und eine Instanz dieses Typs wird durch die Eigenschaft [`CSSFontFaceRule.style`](/de/docs/Web/API/CSSFontFaceRule/style) zurückgegeben. ([Firefox Bug 2019904](https://bugzil.la/2019904)).

- Die nicht standardisierte Methode [`caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wird jetzt unterstützt. ([Firefox Bug 1550635](https://bugzil.la/1550635)).

- Die Methode `ariaNotify()` wird jetzt auf [`Document`](/de/docs/Web/API/Document/ariaNotify) und [`Element`](/de/docs/Web/API/Element/ariaNotify) unterstützt. Diese fügt eine Textzeichenfolge in die Warteschlange ein, die von einem {{Glossary("screen_reader", "Screenreader")}} angekündigt wird, und bietet eine ergonomischere und zuverlässigere Alternative zu [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions). ([Firefox Bug 2018095](https://bugzil.la/2018095)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Problem wurde behoben, bei dem ausstehende Downloads beim Schließen des Browsers durch eine Eingabeaufforderung blockiert werden konnten. Die Eingabeaufforderung wird jetzt automatisch geschlossen. ([Firefox Bug 2003840](https://bugzil.la/2003840)).

#### WebDriver BiDi

- Der Befehl `emulation.setNetworkConditions` wurde hinzugefügt, der momentan den `type: offline` unterstützt. Dadurch können Sie den Offline-Modus entweder auf bestimmten Browsing-Kontexten, auf Benutzerkontexten (alias Containern) oder global emulieren. ([Firefox Bug 1993079](https://bugzil.la/1993079)).
- Unser Support für nicht UTF-8-kodierte Header-Werte wurde in allen `network`-Modulbefehlen und -ereignissen verbessert. Sie werden jetzt ordnungsgemäß in `BytesValue` serialisiert. ([Firefox Bug 1994996](https://bugzil.la/1994996)).
- Ein Fehler wurde behoben, bei dem Ereignisse für Downloads, die durch eine Antwort mit dem "Content-Disposition"-Header ausgelöst wurden, die `navigation`-Eigenschaft fehlte, wenn der Download durch einen Link mit `target="_blank"` initiiert wurde. ([Firefox Bug 1999481](https://bugzil.la/1999481)).
- Das `log.entryAdded`-Ereignis wurde aktualisiert, damit es nur für Konsolen-API-Aufrufe ausgegeben wird, die tatsächlich eine Nachricht in den Entwicklerwerkzeugen des Browsers drucken (siehe auch die Konsolen-Spezifikation: [using the printer](https://console.spec.whatwg.org/#printer)). Mit dieser Änderung wird durch die Verwendung von `console.clear` oder `console.time` kein Ereignis mehr ausgelöst. ([Firefox Bug 1866749](https://bugzil.la/1866749)).
- Ein Race-Condition-Problem mit dem `browsingContext.setViewport`-Befehl wurde behoben, das zum Timeout führen konnte, wenn mehrere Kontexte parallel erstellt wurden. ([Firefox Bug 2019511](https://bugzil.la/2019511)).
- Der Befehl `browsingContext.locateNodes` wurde verbessert, um das Abrufen des HTML-Elements (`documentElement`) einer Seite bei Verwendung des `css`-Locators zu ermöglichen. ([Firefox Bug 2020578](https://bugzil.la/2020578)).

#### Marionette

- Der Befehl `WebDriver:getShadowRoot` wurde behoben, um keine User-Agent-Shadow-Roots mehr zurückzugeben. ([Firefox Bug 2016741](https://bugzil.la/2016741)).

## Änderungen für Add-on-Entwickler

- Das Verhalten von {{WebExtAPIRef("tabs.move")}} wurde für geteilte Ansichten so aktualisiert, dass:
  - Die Reihenfolge der Tabs in einer geteilten Ansicht getauscht werden kann. ([Firefox Bug 2016762](https://bugzil.la/2016762))
  - Wenn die Liste der Tabs sowohl geteilte Ansicht-Tabs umfasst und ein oder mehrere Tabs dazwischen platzieren, werden die Tabs auseinander bewegt und die geteilte Ansicht geschlossen. ([Firefox Bug 2022549](https://bugzil.la/2022549))
- Ein Problem wurde gelöst, bei dem einige JavaScript-`import`-Aufrufe das Importieren von CSS fehlschlugen. ([Firefox Bug 2016369](https://bugzil.la/2016369))

## Experimentelle Web-Features

Diese Funktionen werden in Firefox 150 ausgeliefert, sind aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere derartige Funktionen finden Sie auf der [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features)-Seite.

- **Namespaced-Attribute in der `attr()`-CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}}-CSS-Funktion akzeptiert jetzt [Namespaced-Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dies ermöglicht es, Attribute von Elementen XML-basierter Sprachen wie [SVG](/de/docs/Web/SVG) zu übernehmen und entsprechend zu stylen. ([Firefox Bug 2014060](https://bugzil.la/2014060))

- **`@container style()` Anfragen** (Nightly): `layout.css.style-queries.enabled`

  Die CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Anfragen. Diese wurden aktualisiert, um die Verschachtelung von `style()`-Anfragen zu unterstützen. ([Firefox Bug 2014098](https://bugzil.la/2014098)).

- **Absolut positionierte Elemente in mehrspaltigen Containern und beim Drucken**: `layout.abspos.fragmentainer-aware-positioning.enabled`

  Absolut positionierte Elemente innerhalb von [mehrspaltigen Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken werden nun korrekt positioniert und fragmentiert. Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überlappenden Text oder Inhaltsverlust. ([Firefox Bug 2018797](https://bugzil.la/2018797)).

- **Gescopte benutzerdefinierte Element-Register**: `dom.scoped-custom-element-registries.enabled`

  Die Eigenschaft [`customElementRegistry`](/de/docs/Web/API/CustomElementRegistry) wird auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt. Dies ermöglicht die Definition von [gescopten benutzerdefinierten Elementregistern](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries). ([Firefox Bug 2018900](https://bugzil.la/2018900)).

- **Mehrfach-Importkarten**: `dom.multiple_import_maps.enabled`

  [Multiple Importkarten](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps) bieten Entwicklern mehr Flexibilität bei der Strukturierung und dem Laden von JavaScript-Modulen. ([Firefox Bug 1916277](https://bugzil.la/1916277)).

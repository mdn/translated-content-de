---
title: Firefox 150 Versionshinweise für Entwickler (Beta)
short-title: Firefox 150 (Beta)
slug: Mozilla/Firefox/Releases/150
l10n:
  sourceCommit: 12e3ce1c71f6f04ecf6689a62a02382ad47fd52e
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 150, die Entwickler betreffen.
Firefox 150 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [21. April 2026](https://whattrainisitnow.com/release/?version=150) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

## Änderungen für Web-Entwickler

### Entwicklertools

- Im [_Response-Tab_ des Netzbereichs](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) wird jetzt eine spezifische Nachricht angezeigt, um zu erklären, warum keine Antwortdaten vorliegen, wenn eine Anfrage umgeleitet wurde.
  ([Firefox-Bug 2016679](https://bugzil.la/2016679)).

### HTML

- Das Schlüsselwort `"auto"` wird nun als Option für das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attribut von `<img>` Elementen (und [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)) unterstützt.
  Dies ermöglicht es, dass lazy-loaded `<img>` Elemente die berechnete Bildlayoutgröße verwenden, nachdem CSS angewendet wurde, um zu entscheiden, welches Bild aus einem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) angezeigt wird.
  Dies ist einfacher als Medienbedingungen und deren zugehörige Größen im Attribut zu spezifizieren, was wahrscheinlich ein Verhalten dupliziert, das bereits in CSS-Medienabfragen erfasst wird.
  ([Firefox-Bug 1819581](https://bugzil.la/1819581)).

### CSS

- Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion akzeptiert nun mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, anstatt nur zwei. Dies ermöglicht das Mischen einer beliebigen Anzahl von Farben. ([Firefox-Bug 2024171](https://bugzil.la/2024171)).

- Die [`light-dark()`](/de/docs/Web/CSS/Reference/Values/color_value/light-dark) CSS-Funktion akzeptiert nun [`<image>`](/de/docs/Web/CSS/Reference/Values/image) Werte. Dadurch können Bilder, Verläufe usw. für verschiedene Farbschemata verwendet werden.
  ([Firefox-Bug 2023569](https://bugzil.la/2023569)).

- Die medienbasierten Pseudo-Klassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}}, und {{cssxref(":volume-locked")}} werden nun unterstützt. Sie ermöglichen es Ihnen, {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente basierend auf ihrem aktuellen Status zu stylen, z.B. ob sie gerade abgespielt oder pausiert werden. ([Firefox-Bug 2020775](https://bugzil.la/2020775)).

- Die Eigenschaften {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}} (und die {{cssxref("animation-range")}} Kurzschreibweise) werden nun unterstützt. Diese Eigenschaften legen den Start und das Ende des Anhangsbereichs einer Animation entlang ihrer Zeitachse fest, sodass Sie steuern können, wo entlang einer [scroll-gesteuerten Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Zeitachse eine Animation beginnt und endet. ([Firefox-Bug 1825427](https://bugzil.la/1825427)).

- Das {{cssxref("revert-rule")}} CSS-Schlüsselwort wird nun unterstützt. Es ermöglicht, den Wert einer Eigenschaft so zu bestimmen, als ob die aktuelle Stilregel nicht vorhanden wäre, sodass der Wert aus einer anderen übereinstimmenden Regel stattdessen wirksam wird. ([Firefox-Bug 2017307](https://bugzil.la/2017307)).

- Die {{cssxref("overscroll-behavior")}} CSS-Eigenschaft (und ihre Langschreibweise {{cssxref("overscroll-behavior-x")}}, {{cssxref("overscroll-behavior-y")}}, {{cssxref("overscroll-behavior-block")}}, und {{cssxref("overscroll-behavior-inline")}}) werden nun korrekt auf Scroll-Container angewendet, die keine scollbare Überläufe haben, wie z.B. Elemente mit `overflow: hidden`. Zuvor wurde die Eigenschaft bei solchen Elementen ignoriert. ([Firefox-Bug 1837436](https://bugzil.la/1837436)).

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) gibt jetzt `false` zurück, wenn das zu ersetzende Element {{htmlelement("html")}} im HTML [Namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) ist.
  Mit anderen Worten, Sie können diese Methode nicht verwenden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu erstellen, der das `<html>` Element durch seinen inneren Inhalt ersetzt. ([Firefox-Bug 2022176](https://bugzil.la/2022176)).

#### DOM

- Das Argument [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) der Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wird jetzt unterstützt.
  Dies ermöglicht es der Methode, den Knoten zurückzugeben, der den Cursor aus einem Shadow DOM enthält, sofern sein zugehöriges [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) als Option übergeben wurde.
  ([Firefox-Bug 1914596](https://bugzil.la/1914596)).

- Die Schnittstelle [`CSSFontFaceDescriptors`](/de/docs/Web/API/CSSFontFaceDescriptors) wird jetzt unterstützt und eine Instanz dieses Typs wird von der Eigenschaft [`CSSFontFaceRule.style`](/de/docs/Web/API/CSSFontFaceRule/style) zurückgegeben. ([Firefox-Bug 2019904](https://bugzil.la/2019904)).

- Die nicht-standardisierte Methode [`caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) der [`Document`](/de/docs/Web/API/Document) Schnittstelle wird jetzt unterstützt. ([Firefox-Bug 1550635](https://bugzil.la/1550635)).

- Die `ariaNotify()` Methode wird jetzt sowohl für [`Document`](/de/docs/Web/API/Document/ariaNotify) als auch für [`Element`](/de/docs/Web/API/Element/ariaNotify) unterstützt.
  Sie reiht eine Textzeichenfolge zur Ansage durch einen {{Glossary("screen_reader", "Screenreader")}} ein und bietet eine ergonomischere und zuverlässigere Alternative zu [ARIA-Live-Bereichen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions).
  ([Firefox-Bug 2018095](https://bugzil.la/2018095)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Problem wurde behoben, bei dem das Schließen des Browsers durch ausstehende Downloads blockiert werden konnte. Die Aufforderung wird nun automatisch geschlossen. ([Firefox-Bug 2003840](https://bugzil.la/2003840)).

#### WebDriver BiDi

- Der Befehl `emulation.setNetworkConditions` wurde hinzugefügt, der derzeit den `type: offline` unterstützt. Damit können Sie den Offline-Modus entweder für spezifische Browsing-Kontexte, Benutzerkontexte (auch bekannt als Container) oder global emulieren. ([Firefox-Bug 1993079](https://bugzil.la/1993079)).
- Unser Support für nicht UTF-8 Header-Werte über alle Befehle und Ereignisse des `network` Moduls wurde verbessert. Diese werden jetzt korrekt zu `BytesValue` serialisiert. ([Firefox-Bug 1994996](https://bugzil.la/1994996)).
- Ein Fehler für Download-Ereignisse, die durch eine Antwort mit dem "Content-Disposition" Header ausgelöst wurden, wurde behoben. Solche Ereignisse fehlten dem `navigation` Attribut, wenn der Download durch einen Link mit `target="_blank"` initiiert wurde. ([Firefox-Bug 1999481](https://bugzil.la/1999481)).
- Das `log.entryAdded` Ereignis wurde aktualisiert, sodass es nur für Konsolen-API-Aufrufe gesendet wird, die tatsächlich eine Nachricht in den Browser-Entwicklertools ausgeben (siehe auch die Konsolenspezifikation: [using the printer](https://console.spec.whatwg.org/#printer)). Mit dieser Änderung lösen `console.clear` oder `console.time` kein Ereignis mehr aus. ([Firefox-Bug 1866749](https://bugzil.la/1866749)).
- Eine Race-Bedingung mit dem `browsingContext.setViewport` Befehl, die zu einem Timeout führen konnte, wenn mehrere Kontexte parallel erstellt wurden, wurde behoben. ([Firefox-Bug 2019511](https://bugzil.la/2019511)).
- Der `browsingContext.locateNodes` Befehl wurde verbessert, um das HTML-Element (`documentElement`) einer Seite abrufen zu können, wenn der `css` Locator verwendet wird. ([Firefox-Bug 2020578](https://bugzil.la/2020578)).

#### Marionette

- Der `WebDriver:getShadowRoot` Befehl wurde korrigiert, sodass er keine benutzerdefinierten Shadow-Roots mehr zurückgibt. ([Firefox-Bug 2016741](https://bugzil.la/2016741)).

## Änderungen für Add-on-Entwickler

- Das Verhalten von {{WebExtAPIRef("tabs.move")}} wurde für geteilte Ansichten (split views) aktualisiert, sodass:
  - Die Reihenfolge der Tabs in einer geteilten Ansicht getauscht werden kann. ([Firefox-Bug 2016762](https://bugzil.la/2016762))
  - Wenn die Liste der Tabs sowohl geteilte Ansicht Tabs als auch einige dazwischen platzierte Tabs umfasst, die Tabs auseinandergeschoben und die geteilte Ansicht geschlossen werden. ([Firefox-Bug 2022549](https://bugzil.la/2022549))
- Ein Problem wurde gelöst, bei dem einige JavaScript [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Aufrufe darin scheiterten, CSS zu importieren. ([Firefox-Bug 2016369](https://bugzil.la/2016369))

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 150 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **Namensraum-Attribute in `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion akzeptiert nun [namensraum-Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dies ermöglicht es, Attribute von Elementen XML-basierter Sprachen wie [SVG](/de/docs/Web/SVG) zu stylen. ([Firefox-Bug 2014060](https://bugzil.la/2014060))

- **Absolut positionierte Elemente in Mehrspalten-Containern und beim Drucken**: `layout.abspos.fragmentainer-aware-positioning.enabled`

  Absolut positionierte Elemente innerhalb von [Mehrspalten-Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken werden nun korrekt positioniert und fragmentiert. Dadurch wird die Interoperabilität mit anderen Browsern verbessert und Layoutprobleme wie überlappender Text oder Inhaltsverlust vermieden. ([Firefox-Bug 2018797](https://bugzil.la/2018797)).

- **Gescopte benutzerdefinierte Elementregister**: `dom.scoped-custom-element-registries.enabled`

  Die [`customElementRegistry`](/de/docs/Web/API/CustomElementRegistry) Eigenschaft wird für [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt.
  Dies ermöglicht die Definition von [gescopten benutzerdefinierten Elementregistern](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries).
  ([Firefox-Bug 2018900](https://bugzil.la/2018900)).

- **Mehrere Import-Maps**: `dom.multiple_import_maps.enabled`

  [Mehrere Import-Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps) geben Entwicklern mehr Flexibilität bei der Strukturierung und dem Laden von JavaScript-Modulen.
  ([Firefox-Bug 1916277](https://bugzil.la/1916277)).

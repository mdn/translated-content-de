---
title: Firefox 150 Versionshinweise für Entwickler (Beta)
short-title: Firefox 150 (Beta)
slug: Mozilla/Firefox/Releases/150
l10n:
  sourceCommit: 499ed15e3ae750f552a195088ed9f40ae2046469
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 150, die Entwickler betreffen. Firefox 150 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [21. April 2026](https://whattrainisitnow.com/release/?version=150) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, zu denen Sie Hinweise schreiben -->

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Im [_Response-Tab_ des Netzwerkbereichs](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) wird nun eine spezifische Nachricht angezeigt, um zu erläutern, warum keine Antwortdaten vorhanden sind, wenn eine Anfrage umgeleitet wurde.
  ([Firefox Fehler 2016679](https://bugzil.la/2016679)).

### HTML

- Das Schlüsselwort `"auto"` wird jetzt als Option für das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut von `<img>`-Elementen (und [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)) unterstützt.
  Dadurch können nachgeladenen `<img>`-Elemente die berechnete Bildlayoutgröße verwenden, nachdem jegliches CSS angewendet wurde, um auszuwählen, welches Bild aus einem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) angezeigt werden soll.
  Dies ist einfacher als das Festlegen von Medienbedingungen und deren zugehörigen Größen im Attribut, was wahrscheinlich das Verhalten doppelt, das bereits in CSS-Medienabfragen erfasst ist.
  ([Firefox Fehler 1819581](https://bugzil.la/1819581)).

### CSS

- Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion akzeptiert jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Werte anstelle von nur zwei. Dies ermöglicht es Ihnen, eine beliebige Anzahl von Farben zu mischen. ([Firefox Fehler 2024171](https://bugzil.la/2024171)).

- Die [`light-dark()`](/de/docs/Web/CSS/Reference/Values/color_value/light-dark) CSS-Funktion akzeptiert jetzt [`<image>`](/de/docs/Web/CSS/Reference/Values/image)-Werte. Dadurch können Bilder, Verläufe usw. für verschiedene Farbschemata verwendet werden.
  ([Firefox Fehler 2023569](https://bugzil.la/2023569)).

- Die medienbasierten Pseudoklassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}} und {{cssxref(":volume-locked")}} werden jetzt unterstützt. Sie ermöglichen es Ihnen, {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente basierend auf ihrem aktuellen Zustand, wie z.B. Wiedergabe oder Pause, zu gestalten. ([Firefox Fehler 2020775](https://bugzil.la/2020775)).

- Die Eigenschaften {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}} (und die Kurzschreibweise {{cssxref("animation-range")}}) werden jetzt unterstützt. Diese Eigenschaften legen den Beginn und das Ende des Anwendungsbereichs einer Animation entlang ihrer Zeitachse fest, wodurch Sie steuern können, wo entlang einer [scrollgesteuerten Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Zeitachse eine Animation starten und enden soll. ([Firefox Fehler 1825427](https://bugzil.la/1825427)).

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) gibt jetzt `false` zurück, wenn das zu ersetzende Element {{htmlelement("html")}} im HTML-[Namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) ist.
  Mit anderen Worten, Sie können diese Methode nicht verwenden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu erstellen, der das `<html>`-Element mit seinem inneren Inhalt ersetzt. ([Firefox Fehler 2022176](https://bugzil.la/2022176)).

#### DOM

- Das Argument [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) der Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wird jetzt unterstützt.
  Dadurch kann die Methode den Knoten zurückgeben, der den Cursor innerhalb eines Shadow DOM enthält, sofern das zugehörige [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) als Option übergeben wurde.
  ([Firefox Fehler 1914596](https://bugzil.la/1914596)).

- Die nicht standardmäßige Methode [`caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wird jetzt unterstützt. ([Firefox Fehler 1550635](https://bugzil.la/1550635)).
- Die Methode `ariaNotify()` wird jetzt auf [`Document`](/de/docs/Web/API/Document/ariaNotify) und [`Element`](/de/docs/Web/API/Element/ariaNotify) unterstützt.
  Diese stellt eine Zeichenfolge in die Warteschlange, die von einem {{Glossary("screen_reader", "Screenreader")}} vorgelesen werden soll, und bietet eine ergonomischere und zuverlässigere Alternative zu [ARIA-Live-Bereichen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions).
  ([Firefox Fehler 2018095](https://bugzil.la/2018095)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Problem wurde behoben, bei dem ausstehende Downloads beim Schließen des Browsers durch eine Eingabeaufforderung blockiert werden konnten. Die Eingabeaufforderung wird nun automatisch geschlossen. ([Firefox Fehler 2003840](https://bugzil.la/2003840)).

#### WebDriver BiDi

- Der Befehl `emulation.setNetworkConditions` wurde hinzugefügt, der derzeit den `type: offline` unterstützt. Damit können Sie den Offline-Modus entweder in spezifischen Browser-Kontexten, Benutzerkontexten (auch als Container bekannt) oder global emulieren. ([Firefox Fehler 1993079](https://bugzil.la/1993079)).
- Unsere Unterstützung für nicht-utf-8-Kopfzeilenwerte in allen `network`-Modulbefehlen und -ereignissen wurde verbessert. Sie werden jetzt korrekt in `BytesValue` serialisiert. ([Firefox Fehler 1994996](https://bugzil.la/1994996)).
- Ein Fehler bei Downloadereignissen, die durch eine Antwort mit dem "Content-Disposition"-Header ausgelöst wurden, wurde behoben. Solche Ereignisse verfügten nicht über die `navigation`-Eigenschaft, wenn der Download durch einen Link mit `target="_blank"` initiiert wurde. ([Firefox Fehler 1999481](https://bugzil.la/1999481)).
- Das Ereignis `log.entryAdded` wurde aktualisiert, sodass es nur für Konsolen-API-Aufrufe ausgelöst wird, die tatsächlich eine Nachricht in den Entwicklerwerkzeugen des Browsers drucken (siehe auch die Konsolenspezifikation: [using the printer](https://console.spec.whatwg.org/#printer)). Mit dieser Änderung wird bei Verwendung von `console.clear` oder `console.time` kein Ereignis mehr ausgelöst. ([Firefox Fehler 1866749](https://bugzil.la/1866749)).
- Ein Wettlaufproblem mit dem `browsingContext.setViewport`-Befehl, das zu einem Timeout führen konnte, wenn mehrere Kontexte parallel erstellt wurden, wurde behoben. ([Firefox Fehler 2019511](https://bugzil.la/2019511)).
- Der `browsingContext.locateNodes`-Befehl wurde verbessert, um das HTML-Element (`documentElement`) einer Seite beim Verwenden des `css`-Suchers abzurufen. ([Firefox Fehler 2020578](https://bugzil.la/2020578)).

#### Marionette

- Der Befehl `WebDriver:getShadowRoot` wurde korrigiert, um das Zurückgeben von Benutzer-Agent-Shadow-Root-Objekten zu stoppen. ([Firefox Fehler 2016741](https://bugzil.la/2016741)).

## Änderungen für Add-On-Entwickler

- Das Verhalten von {{WebExtAPIRef("tabs.move")}} wurde für geteilte Ansichten aktualisiert, sodass:
  - Die Reihenfolge der Tabs in einer geteilten Ansicht getauscht werden kann. ([Firefox Fehler 2016762](https://bugzil.la/2016762))
  - Wenn die Liste der Tabs sowohl Tabs für geteilte Ansichten enthält als auch ein oder mehrere Tabs dazwischen platziert werden, die Tabs auseinandergezogen und die geteilte Ansicht geschlossen werden. ([Firefox Fehler 2022549](https://bugzil.la/2022549))
- Ein Problem mit einigen JavaScript-`import`-Aufrufen, die das Importieren von CSS fehlschlugen, wurde behoben. ([Firefox Fehler 2016369](https://bugzil.la/2016369))

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 150 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Namenraum-Attribute in der `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion akzeptiert jetzt [Namenraum-Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dies ermöglicht es, Attribute von Elementen XML-basierter Sprachen, wie [SVG](/de/docs/Web/SVG), zu verwenden und entsprechend zu gestalten. ([Firefox Fehler 2014060](https://bugzil.la/2014060))

- **Absolut positionierte Elemente in mehrspaltigen Containern und beim Drucken**: `layout.abspos.fragmentainer-aware-positioning.enabled`

  Absolut positionierte Elemente innerhalb von [mehrspaltigen Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken sind jetzt korrekt positioniert und fragmentiert. Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie sich überlappenden Text oder Inhaltsverlust. ([Firefox Fehler 2018797](https://bugzil.la/2018797)).

- **Gepaarte benutzerdefinierte Elementregistrierungen**: `dom.scoped-custom-element-registries.enabled`

  Die Eigenschaft [`customElementRegistry`](/de/docs/Web/API/CustomElementRegistry) wird auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt.
  Dies ermöglicht die Definition von [gepaarten benutzerdefinierten Elementregistrierungen](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries).
  ([Firefox Fehler 2018900](https://bugzil.la/2018900)).

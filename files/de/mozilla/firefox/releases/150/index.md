---
title: Firefox 150 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 150 (Stabil)
slug: Mozilla/Firefox/Releases/150
l10n:
  sourceCommit: ce29b1c36065db92c2a59ba507a4941fbf0a5159
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 150, die Entwickler betreffen.
Firefox 150 wurde am [21. April 2026](https://whattrainisitnow.com/release/?version=150) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Eine spezifische Nachricht wird nun im [_Response-Tab_ im Netzwerk-Bereich](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) angezeigt, um anzugeben, warum keine Antwortdaten vorhanden sind, wenn eine Anfrage umgeleitet wurde.
  ([Firefox-Bug 2016679](https://bugzil.la/2016679)).
- Ein neuer Abschnitt "Element-spezifische Pseudoklassen" wurde zum [Pseudoklassen-Umschaltfeld](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-common-pseudo-classes) hinzugefügt, einschließlich eines Umschalters für die {{cssxref(":open")}} Pseudoklasse, die nur für Elemente verfügbar ist, die einen offenen Zustand haben, wie z.B. `<dialog>`-Elemente. Der vorhandene Umschalter für die {{cssxref(":visited")}} Pseudoklasse wurde ebenfalls dorthin verschoben, da er nur auf `<a>` und `<area>`-Elemente anwendbar ist. ([Firefox-Bug 2014442](https://bugzil.la/2014442)).

### HTML

- Das `"auto"`-Schlüsselwort wird jetzt als Option für das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attribut von `<img>`-Elementen (und [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)) unterstützt.
  Dies ermöglicht es, dass lazy-geladene `<img>`-Elemente die berechnete Bild-Layoutgröße nach Anwendung von CSS verwenden, um auszuwählen, welches Bild aus einem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) angezeigt werden soll.
  Dies ist einfacher als das Angeben von Medienbedingungen und deren zugehörigen Größen im Attribut, was wahrscheinlich Verhalten dupliziert, das bereits in CSS-Medienabfragen erfasst ist.
  ([Firefox-Bug 1819581](https://bugzil.la/1819581)).

### CSS

- Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion akzeptiert jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte statt nur zwei. Dies ermöglicht das Mischen einer beliebigen Anzahl von Farben. ([Firefox-Bug 2024171](https://bugzil.la/2024171)).

- Die [`light-dark()`](/de/docs/Web/CSS/Reference/Values/color_value/light-dark) CSS-Funktion akzeptiert jetzt [`<image>`](/de/docs/Web/CSS/Reference/Values/image) Werte. Dies erlaubt die Verwendung von Bildern, Verläufen und so weiter für verschiedene Farbschemata.
  ([Firefox-Bug 2023569](https://bugzil.la/2023569)).

- Die medienbasierten Pseudoklassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}} und {{cssxref(":volume-locked")}} werden nun unterstützt. Sie ermöglichen es, {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente basierend auf ihrem aktuellen Zustand zu stylen, zum Beispiel ob sie abgespielt oder pausiert werden. ([Firefox-Bug 2020775](https://bugzil.la/2020775)).

- Die {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}} Eigenschaften (und die {{cssxref("animation-range")}} Shorthand-Eigenschaft) werden nun unterstützt. Diese Eigenschaften legen den Beginn und das Ende eines Animationsanhangbereichs entlang der Zeitleiste fest und ermöglichen es Ihnen zu steuern, wo auf einer [scrollgesteuerten Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Zeitleiste eine Animation beginnt und endet. ([Firefox-Bug 1825427](https://bugzil.la/1825427)).

- Das {{cssxref("revert-rule")}} CSS-Schlüsselwort wird nun unterstützt. Es ermöglicht den Wert einer Eigenschaft so zu bestimmen, als ob die aktuelle Stilregel nicht vorhanden wäre, sodass der Wert einer anderen passenden Regel stattdessen aktiv wird. ([Firefox-Bug 2017307](https://bugzil.la/2017307)).

- Die {{cssxref("overscroll-behavior")}} CSS-Eigenschaft (und ihre Langform-Eigenschaften {{cssxref("overscroll-behavior-x")}}, {{cssxref("overscroll-behavior-y")}}, {{cssxref("overscroll-behavior-block")}} und {{cssxref("overscroll-behavior-inline")}}) wird nun korrekt auf Scroll-Container angewendet, die keinen scrollbaren Überlauf haben, wie Elemente mit `overflow: hidden`. Bisher wurde die Eigenschaft bei solchen Elementen ignoriert. ([Firefox-Bug 1837436](https://bugzil.la/1837436)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) gibt nun `false` zurück, wenn das zu ersetzende Element {{htmlelement("html")}} im HTML-[Namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) ist.
  Mit anderen Worten, Sie können diese Methode nicht verwenden, um einen [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu erstellen, der das `<html>`-Element durch seinen inneren Inhalt ersetzt. ([Firefox-Bug 2022176](https://bugzil.la/2022176)).

#### DOM

- Das Argument [`options.shadowRoots`](/de/docs/Web/API/Document/caretPositionFromPoint#shadowroots) der Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) wird nun unterstützt.
  Dies ermöglicht es der Methode, den Knoten, der das Caret enthält, aus einem Shadow-DOM zurückzugeben, vorausgesetzt, sein zugehöriger [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) wurde als Option übergeben.
  ([Firefox-Bug 1914596](https://bugzil.la/1914596)).

- Die Schnittstelle [`CSSFontFaceDescriptors`](/de/docs/Web/API/CSSFontFaceDescriptors) wird jetzt unterstützt und eine Instanz dieses Typs wird von der Eigenschaft [`CSSFontFaceRule.style`](/de/docs/Web/API/CSSFontFaceRule/style) zurückgegeben. ([Firefox-Bug 2019904](https://bugzil.la/2019904)).

- Die nicht-standardisierte Methode [`caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wird jetzt unterstützt. ([Firefox-Bug 1550635](https://bugzil.la/1550635)).

- Die `ariaNotify()`-Methode wird nun auf [`Document`](/de/docs/Web/API/Document/ariaNotify) und [`Element`](/de/docs/Web/API/Element/ariaNotify) unterstützt.
  Diese stellt eine Zeichenfolge in die Warteschlange, die von einem {{Glossary("screen_reader", "Screenreader")}} angekündigt werden soll, und bietet eine ergonomischere und zuverlässigere Alternative zu [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions).
  ([Firefox-Bug 2018095](https://bugzil.la/2018095)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Problem wurde behoben, bei dem das Schließen des Browsers durch ausstehende Downloads blockiert werden konnte. Die Aufforderung wird nun automatisch abgelehnt. ([Firefox-Bug 2003840](https://bugzil.la/2003840)).

#### WebDriver BiDi

- Der Befehl `emulation.setNetworkConditions` wurde hinzugefügt, der derzeit den `type: offline` unterstützt. Damit können Sie den Offlinemodus entweder für spezifische Browsing-Kontexte, Benutzerkontexte (auch bekannt als Container) oder global emulieren. ([Firefox-Bug 1993079](https://bugzil.la/1993079)).
- Unsere Unterstützung für nicht utf-8-kodierte Headerwerte in allen `network`-Modulbefehlen und -ereignissen wurde verbessert. Sie werden nun korrekt zu `BytesValue` serialisiert. ([Firefox-Bug 1994996](https://bugzil.la/1994996)).
- Ein Fehler bei Download-Ereignissen, die durch eine Antwort mit dem "Content-Disposition"-Header ausgelöst wurden, wurde behoben. Solche Ereignisse fehlten bisher die `navigation`-Eigenschaft, wenn der Download durch einen Link mit `target="_blank"` initiiert wurde. ([Firefox-Bug 1999481](https://bugzil.la/1999481)).
- Das `log.entryAdded`-Ereignis wurde aktualisiert, sodass es nur noch bei Konsolenschnittstellenaufrufen ausgelöst wird, die tatsächlich eine Nachricht in den Entwicklertools des Browsers ausgeben (siehe auch die Konsolenspezifikation: [Verwendung des Druckers](https://console.spec.whatwg.org/#printer)). Mit dieser Änderung wird das Verwendung von `console.clear` oder `console.time` kein Ereignis mehr auslösen. ([Firefox-Bug 1866749](https://bugzil.la/1866749)).
- Ein Race-Condition Problem mit dem `browsingContext.setViewport`-Befehl, das zu einem Timeout führen konnte, wenn mehrere Kontexte parallel erstellt wurden, wurde behoben. ([Firefox-Bug 2019511](https://bugzil.la/2019511)).
- Der Befehl `browsingContext.locateNodes` wurde verbessert, um das Abrufen des HTML-Elements (`documentElement`) einer Seite beim Verwenden des `css`-Locators zu ermöglichen. ([Firefox-Bug 2020578](https://bugzil.la/2020578)).

#### Marionette

- Der Befehl `WebDriver:getShadowRoot` wurde verbessert, um das Zurückgeben von Benutzer-Agent-Shadow-Roots zu stoppen. ([Firefox-Bug 2016741](https://bugzil.la/2016741)).

## Änderungen für Add-on-Entwickler

- Das Verhalten von {{WebExtAPIRef("tabs.move")}} wurde für geteilte Ansichten aktualisiert, sodass:
  - Die Reihenfolge von Tabs in einer geteilten Ansicht getauscht werden kann. ([Firefox-Bug 2016762](https://bugzil.la/2016762))
  - Wenn die Liste der Tabs sowohl geteilte Ansicht-Tabs als auch andere Tabs enthält und ein oder mehrere Tabs dazwischen platziert werden, werden die Tabs auseinander verschoben und die geteilte Ansicht geschlossen. ([Firefox-Bug 2022549](https://bugzil.la/2022549))
- Ein Problem mit einigen JavaScript [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Aufrufen, die fehlschlugen, um CSS zu importieren, wurde behoben. ([Firefox-Bug 2016369](https://bugzil.la/2016369))

## Experimentelle Web-Features

Diese Features werden in Firefox 150 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie diese auf `true`.
Weitere derartige Merkmale finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Namensraumattribute in der `attr()` CSS-Funktion**: `layout.css.attr.enabled`

  Die {{cssxref("attr")}} CSS-Funktion akzeptiert jetzt [Namensraumattribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dies ermöglicht es, Attribute von Elementen XML-basierter Sprachen wie [SVG](/de/docs/Web/SVG) zu nehmen und entsprechend zu stylen. ([Firefox-Bug 2014060](https://bugzil.la/2014060))

- **`@container style()`-Abfragen** (Nightly): `layout.css.style-queries.enabled`

  Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-Regel unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen. Diese wurde aktualisiert, um die Verschachtelung von `style()`-Abfragen zu unterstützen. ([Firefox-Bug 2014098](https://bugzil.la/2014098)).

- **Absolut positionierte Elemente in Mehrspalten-Containern und beim Drucken**: `layout.abspos.fragmentainer-aware-positioning.enabled`

  Absolut positionierte Elemente innerhalb von [Mehrspalten-Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken werden nun korrekt positioniert und fragmentiert. Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überschneidenden Text oder Inhaltsverlust. ([Firefox-Bug 2018797](https://bugzil.la/2018797)).

- **Gescopte benutzerdefinierte Element-Registrierungen**: `dom.scoped-custom-element-registries.enabled`

  Die Eigenschaft [`customElementRegistry`](/de/docs/Web/API/CustomElementRegistry) wird auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt.
  Dies ermöglicht die Definition von [gescopten benutzerdefinierten Element-Registrierungen](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries).
  ([Firefox-Bug 2018900](https://bugzil.la/2018900)).

- **Mehrere Import Maps**: `dom.multiple_import_maps.enabled`

  [Mehrere Import Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps) geben Entwicklern mehr Flexibilität bei der Strukturierung und dem Laden von JavaScript-Modulen.
  ([Firefox-Bug 1916277](https://bugzil.la/1916277)).

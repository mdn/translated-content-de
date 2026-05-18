---
title: Firefox 151 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 151 (Stabil)
slug: Mozilla/Firefox/Releases/151
l10n:
  sourceCommit: 0b214cbce88da71a9d4470364e378285c2a921a5
---

Dieser Artikel liefert Informationen zu den Änderungen in Firefox 151, die Entwickler betreffen. Firefox 151 wurde am [19. Mai 2026](https://whattrainisitnow.com/release/?version=151) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`shadowrootslotassignment` Attribut](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) wird nun auf {{htmlelement("template")}}-Elementen unterstützt, was eine deklarative Definition des Slotzuweisungsverhaltens für Shadow-Roots ermöglicht. Das Attribut wird in JavaScript durch [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment) oder [`HTMLTemplateElement.shadowRootSlotAssignment`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSlotAssignment) widergespiegelt ([Firefox-Bug 2031295](https://bugzil.la/2031295), [Firefox-Bug 2023824](https://bugzil.la/2023824)).

### CSS

- Der CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützt jetzt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen. Dies ermöglicht Ihnen zu prüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat, und entsprechend Styles auf seine Kinder anzuwenden. ([Firefox-Bug 2016929](https://bugzil.la/2016929), ([Firefox-Bug 2019254](https://bugzil.la/2019254)), ([Firefox-Bug 2024601](https://bugzil.la/2024601)), [Firefox-Bug 2030645](https://bugzil.la/2030645)).

- Die {{cssxref("position-anchor")}} CSS-Eigenschaft unterstützt jetzt den `normal` (Standard) Wert. Dies ermöglicht das Matchen der {{cssxref("position-area")}} Eigenschaft, sodass wenn die `position-area` Eigenschaft aktualisiert wird, auch die `position-anchor` Eigenschaft aktualisiert wird. ([Firefox-Bug 2030351](https://bugzil.la/2030351)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) gibt nun `false` zurück, wenn das zu ersetzende Element ein {{svgelement("svg")}} im SVG [Namensraum](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) oder ein {{mathmlelement("math")}} im MathML Namensraum ist (zusätzlich zu {{htmlelement("html")}}, das in [Firefox 150](/de/docs/Mozilla/Firefox/Releases/150#apis) nicht erlaubt war). ([Firefox-Bug 2032359](https://bugzil.la/2032359)).
- Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) wird nun auf Desktop-Plattformen unterstützt. Dies ermöglicht das Öffnen eines [always-on-top Fensters](/de/docs/Web/API/Document_Picture-in-Picture_API#how_does_it_work), das mit beliebigem HTML-Inhalt gefüllt werden kann. Es kann verwendet werden, um Inhalte darzustellen, die ein Benutzer separat von der Startseite (oder sogar dem Browser) sehen möchte, wie z.B. eine Reihe von Streams, die die Teilnehmer eines Videokonferenzgesprächs zeigen, ein Kurs-Ticker oder ein Countdown-Timer. ([Firefox-Bug 2006594](https://bugzil.la/2006594)).
- Die [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang) Eigenschaft wird unterstützt, um die Sprache des Canvas-Zeichnungskontextes zu setzen. Während ein DOM-Canvas diesen Kontext vom `lang` Attribut seines zugeordneten {{htmlelement("canvas")}} Elements erben kann, ist dies nützlich, um den Kontext für ein Offscreen-Canvas zu setzen, das möglicherweise gerendert wird, bevor es einem `<canvas>` zugeordnet wird. ([Firefox-Bug 1943070](https://bugzil.la/1943070)).
- Die [`options.keyboardLock`](/de/docs/Web/API/Element/requestFullscreen#keyboardlock) Eigenschaft kann jetzt als Option an [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) übergeben werden, um Websites zu erlauben, bei der Anzeige des Elements im Vollbildmodus den Tastatursperre anzufordern. Dies verhindert, dass die <kbd>Esc</kbd>-Taste das Element aus dem Vollbild verlässt (stattdessen ist ein langes Drücken erforderlich), und einige zuvor reservierte Browser-Hotkeys können jetzt abgefangen und ihre Standardaktion verhindert werden. ([Firefox-Bug 2032302](https://bugzil.la/2032302)).
- Die [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang) Eigenschaft wird jetzt unterstützt, um die Ausgabesprache eines Offscreen-Canvas explizit zu spezifizieren und zu ändern, nachdem der Rendering-Kontext erstellt wurde. ([Firefox-Bug 1943070](https://bugzil.la/1943070)).
- Die Eigenschaften `maxStorageBuffersInFragmentStage`, `maxStorageBuffersInVertexStage`, `maxStorageTexturesInFragmentStage` und `maxStorageTexturesInVertexStage` werden jetzt auf [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits) unterstützt und definieren die maximale Anzahl von Speicherpuffern und Texturen, die in den Fragment- und Vertex-Shader-Stufen erlaubt sind. ([Firefox-Bug 2006720](https://bugzil.la/2006720)).
- Die [`CSSContainerRule.conditions`](/de/docs/Web/API/CSSContainerRule/conditions) Eigenschaft wird jetzt unterstützt, was die Unterstützung der CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) für mehrere durch Kommas getrennte Containerbedingungen widerspiegelt. Die `condition`-Eigenschaft spiegelt eine entsprechende `@container` Regel als ein Array von Objekten wider, wobei jedes Objekt eine einzelne Containerbedingung repräsentiert. ([Firefox-Bug 2022827](https://bugzil.la/2022827)).
- Die [Web Serial API](/de/docs/Web/API/Web_Serial_API) wird auf Desktop-Plattformen unterstützt und ermöglicht die Steuerung von Mikrocontrollern, die serielle Kommunikation unterstützen. Dies ermöglicht es Ihnen beispielsweise, Mikrocontroller und Entwicklungsplatinen wie ESP-Geräte, BBCmicro:bit und Raspberry Pi Picos, 3D-Drucker und CNC-Maschinen und andere unterstützte Geräte zu programmieren. Die Verwendung der API erfordert, dass Website-Benutzer ein [synthetisch generiertes Site-Berechtigungs-Add-on](https://support.mozilla.org/en-US/kb/site-permission-add-ons) installieren — dies ist derselbe Ansatz, der zur sicheren Verwaltung des Zugriffs auf WebMIDI verwendet wird. ([Firefox-Bug 2029625](https://bugzil.la/2029625)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für `altitudeAngle` und `azimuthAngle` zu Zeigeraktionen des Typs `touch` hinzugefügt. Diese Eigenschaften ermöglichen es, Touch-Interaktionen mit präzisen Winkeldaten zu simulieren, die den Winkel angeben, mit dem ein Zeiger eine Oberfläche berührt, und dessen Rotationsrichtung. ([Firefox-Bug 2022644](https://bugzil.la/2022644)).
- Ein Fehler wurde behoben, bei dem `UnknownError` DOM-Ausnahmen, die von Inhaltsseiten ausgehen, fälschlicherweise als interne WebDriver-Fehler behandelt wurden. ([Firefox-Bug 2032387](https://bugzil.la/2032387)).

#### WebDriver BiDi

- Der Befehl `browser.setClientWindowState` wurde implementiert. Dieser Befehl ermöglicht es Clients, den Betriebssystem-Fensterzustand eines Browserfensters zu ändern, wie maximiert, minimiert, Vollbild oder normal. Es erlaubt auch die Neupositionierung und Größenänderung des Fensters. ([Firefox-Bug 1855028](https://bugzil.la/1855028)).
- Unterstützung für Worker-Realms (für dedizierte, geteilte und Service-Worker) im Befehl `script.getRealms` hinzugefügt. Der Befehl gibt nun Realm-Informationen für Workerskripte zusätzlich zu Fensterkontexten zurück. ([Firefox-Bug 2016097](https://bugzil.la/2016097)).
- Der oberste Stack-Frame wurde in `log.entryAdded`-Ereignissen für alle Nachrichten der Console API eingeschlossen. ([Firefox-Bug 1941813](https://bugzil.la/1941813)).
- Das `text`-Feld des `log.entryAdded`-Ereignisses wurde verbessert, um besser mit dem Verhalten der Firefox DevTools und der Google Chrome WebDriver BiDi-Implementierung übereinzustimmen. ([Firefox-Bug 2005054](https://bugzil.la/2005054)).
- Netzwerkevent-Cookies wurden behoben, um alle Eigenschaften einzuschließen, nicht nur `name` und `value`. ([Firefox-Bug 1887118](https://bugzil.la/1887118)).
- Der Befehl `network.getData` wurde korrigiert, der bei Weiterleitungen ein Timing-out verursachte. ([Firefox-Bug 2009916](https://bugzil.la/2009916)).
- Der Befehl `browsingContext.reload` wurde korrigiert, der die Position eines navigierten iframes nicht zurücksetzte. ([Firefox-Bug 2023917](https://bugzil.la/2023917)).
- Die leere `proxy`-Fähigkeit wurde aus der `session.new`-Befehlserantwortung entfernt, wenn kein Proxy angegeben ist. ([Firefox-Bug 1916463](https://bugzil.la/1916463)).

#### Marionette

- Die Neupositionierung von Browserfenstern im Linux-Wayland im headless-Modus wurde aktiviert. ([Firefox-Bug 2023978](https://bugzil.la/2023978)).

## Änderungen für Add-on-Entwickler

- Das {{WebExtAPIRef("webRequest.onErrorOccurred")}}-Ereignis fällt nun auf `NS_ERROR_NET_ON_RECEIVING_FROM` zurück anstatt mit einem String zu beginnen, der mit `NS_ERROR_NET_ON_` oder `NS_ERROR_NET_UNKNOWN_` beginnt. Diese Änderung ist Teil von Leistungs- und Zuverlässigkeitsverbesserungen des `onErrorOccurred`-Ereignisses. ([Firefox-Bug 1881986](https://bugzil.la/1881986))
- {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}} fügen nun korrekt eine geteilte Ansicht hinzu bzw. entfernen sie, wenn ein Aufruf einen der Tabs der geteilten Ansicht beinhaltet. Zuvor würde ein Aufruf fehlschlagen oder die geteilte Ansicht trennen. ([Firefox-Bug 2029099](https://bugzil.la/2029099))
- {{WebExtAPIRef("tabs.move()")}} verschiebt nun korrekt eine geteilte Ansicht nach rechts, wenn ein Aufruf einen der Tabs der geteilten Ansicht beinhaltet. Zuvor wurde eine geteilte Ansicht nur nach links oder an das Ende der Tab-Liste verschoben. ([Firefox-Bug 2027855](https://bugzil.la/2027855))

## Experimentelle Web-Features

Diese Features sind in Firefox 151 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Bereichssyntax-Abfragen `@container style()`**: `layout.css.attr.enabled`

  Die `@container` CSS-At-Regel [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen unterstützen jetzt die _Bereichssyntax_. Dies ermöglicht es Ihnen zu prüfen, ob ein Container über eine gültige benutzerdefinierte CSS-Eigenschaft verfügt und ihren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` zu vergleichen und entsprechend Styles auf seine Kinder anzuwenden. ([Firefox-Bug 2024601](https://bugzil.la/2024601)).

- **`field-sizing`-Eigenschaft**: `layout.css.field-sizing.enabled`

  Die {{cssxref("field-sizing")}} CSS-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formularelementen zu kontrollieren. Diese Eigenschaft hat zwei Werte: `content` erlaubt es Elementen, sich in der Größe an ihren Inhalt anzupassen, und `fixed` setzt eine feste Größe auf Elemente. ([Firefox-Bug 1977176](https://bugzil.la/1977176)).

- **MathML `href` auf Nicht-`<a>`-Elementen deaktivieren**: `mathml.href_link_on_non_anchor_element.disabled`

  Wenn aktiviert, erstellt das globale Attribut [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) keinen Hyperlink mehr auf MathML-Elementen außer `<a>`, entsprechend der [MathML Core Spezifikation](https://w3c.github.io/mathml-core/#the-a-element). ([Firefox-Bug 2026848](https://bugzil.la/2026848)).

- **Fix für verschachtelte scrollbare Bereiche**: `layout.css.fake-webkit-scrollbar.enabled`

  Diese Implementierung wurde hinzugefügt, um ein Problem zu beheben, bei dem scrollbare Inhalte nicht erreichbar waren. Wenn eine Scrollleiste auf `display: none;` oder `width: 0;` gesetzt wird, würden die Scrollleisten verschachtelter scrollbarer Bereiche übereinander gestapelt, was bedeutet, dass einige der Inhalte möglicherweise nicht erreichbar sind. ([Firefox-Bug 1977511](https://bugzil.la/1977511)).

- **`<timeline-range-name>` Werte**: `layout.css.scroll-driven-animations.enabled`

  Die CSS-Eigenschaften {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}} und die Kurzform-Eigenschaft {{cssxref("animation-range")}} unterstützen jetzt [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) Werte. Diese [`<timeline-range-name>`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) Werte ermöglichen es Ihnen, genau anzugeben, in welchem Segment eine scroll-gesteuerte Animation stattfinden wird. ([Firefox-Bug 1804775](https://bugzil.la/1804775)).

- **GeometryUtils-Methoden: `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()`**: `layout.css.convertFromNode.enabled`

  Die GeometryUtils-Methoden: `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` sind in Firefox Nightly nicht mehr standardmäßig aktiviert. ([Firefox-Bug 2026051](https://bugzil.la/2026051)).

- **GeometryUtils-Methoden: `getBoxQuads()`**: `layout.css.getBoxQuads.enabled`

  Die GeometryUtils-Methoden: `getBoxQuads()` ist in Firefox Nightly nicht mehr standardmäßig aktiviert. ([Firefox-Bug 2026051](https://bugzil.la/2026051)).

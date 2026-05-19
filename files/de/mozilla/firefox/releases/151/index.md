---
title: Firefox 151 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 151 (Stabil)
slug: Mozilla/Firefox/Releases/151
l10n:
  sourceCommit: 3673b96dceb4e6ac3739103e3c7646e14868a2b2
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 151, die Entwickler betreffen. Firefox 151 wurde am [19. Mai 2026](https://whattrainisitnow.com/release/?version=151) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`shadowrootslotassignment`-Attribut](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) wird nun auf {{htmlelement("template")}} Elementen unterstützt, wodurch die deklarative Definition des Slot-Zuweisungsverhaltens für Shadow Roots ermöglicht wird. Das Attribut wird in JavaScript durch [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment) oder [`HTMLTemplateElement.shadowRootSlotAssignment`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSlotAssignment) widergespiegelt ([Firefox Fehler 2031295](https://bugzil.la/2031295), [Firefox Fehler 2023824](https://bugzil.la/2023824)).

### CSS

- Die CSS-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützt jetzt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen. Damit können Sie überprüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat, und dementsprechend Stile auf seine Kinder anwenden. ([Firefox Fehler 2016929](https://bugzil.la/2016929), ([Firefox Fehler 2019254](https://bugzil.la/2019254)), ([Firefox Fehler 2024601](https://bugzil.la/2024601)), [Firefox Fehler 2030645](https://bugzil.la/2030645)).

- Die {{cssxref("position-anchor")}} CSS-Eigenschaft unterstützt nun den `normal` (Standard-)Wert. Dies ermöglicht das Abgleichen mit der {{cssxref("position-area")}} Eigenschaft, sodass bei einer Aktualisierung der `position-area`-Eigenschaft auch die `position-anchor`-Eigenschaft aktualisiert wird. ([Firefox Fehler 2030351](https://bugzil.la/2030351)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) gibt nun `false` zurück, wenn das zu ersetzende Element im {{svgelement("svg")}} im SVG-[Namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) oder {{mathmlelement("math")}} im MathML-Namespace (zusätzlich zu {{htmlelement("html")}}, das in [Firefox 150](/de/docs/Mozilla/Firefox/Releases/150#apis) nicht erlaubt war) ([Firefox Fehler 2032359](https://bugzil.la/2032359)).
- Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) wird jetzt auf Desktop-Plattformen unterstützt. Dies ermöglicht es, ein [Always-on-Top-Fenster](/de/docs/Web/API/Document_Picture-in-Picture_API#how_does_it_work) zu öffnen, das mit beliebigem HTML-Inhalt befüllt werden kann. Es kann verwendet werden, um Inhalte anzuzeigen, die ein Benutzer separat von der startenden Seite (oder sogar dem Browser) betrachten möchte, z. B. eine Reihe von Streams, die die Teilnehmer eines Videokonferenzanrufs zeigen, ein Börsenticker oder ein Countdown-Timer. ([Firefox Fehler 2006594](https://bugzil.la/2006594)).
- Die Eigenschaft [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang) wird unterstützt, um die Sprache des Canvas-Zeichenkontexts festzulegen. Während ein DOM-Canvas diesen Kontext aus dem `lang`-Attribut des zugehörigen {{htmlelement("canvas")}}-Elements erben kann, ist dies nützlich, um den Kontext für ein Offscreen-Canvas festzulegen, das möglicherweise gerendert wird, bevor es einem `<canvas>` zugeordnet wird. ([Firefox Fehler 1943070](https://bugzil.la/1943070)).
- Die Eigenschaft [`options.keyboardLock`](/de/docs/Web/API/Element/requestFullscreen#keyboardlock) kann jetzt als Option zu [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) übergeben werden, sodass Websites die Tastatursperre anfordern können, wenn das Element im Vollbildmodus angezeigt wird. Dies verhindert, dass die <kbd>Esc</kbd>-Taste dazu führt, dass das Element den Vollbildmodus verlässt (ein langes Drücken ist stattdessen erforderlich), und einige zuvor reservierte Browser-Tastenkombinationen können jetzt abgefangen und ihre Standardaktion verhindert werden. ([Firefox Fehler 2032302](https://bugzil.la/2032302)).
- Die Eigenschaft [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang) wird jetzt unterstützt, wodurch die Render-Sprache eines Offscreen-Canvas explizit angegeben und nach der Erstellung des Rendering-Kontexts geändert werden kann. ([Firefox Fehler 1943070](https://bugzil.la/1943070)).
- Die Eigenschaften `maxStorageBuffersInFragmentStage`, `maxStorageBuffersInVertexStage`, `maxStorageTexturesInFragmentStage` und `maxStorageTexturesInVertexStage` auf [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits) werden nun teilweise unterstützt. Diese Eigenschaften geben den Wert der `maxStorageBuffersPerShaderStage`- und `maxStorageTexturesPerShaderStage`-Grenzen an. Bei der Erstellung eines Geräts werden angeforderte Werte für die *In*Stage-Grenzen ignoriert. ([Firefox Fehler 2006720](https://bugzil.la/2006720)).
- Die Eigenschaft [`CSSContainerRule.conditions`](/de/docs/Web/API/CSSContainerRule/conditions) wird nun unterstützt und spiegelt die Unterstützung der [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container)-Regel für mehrere durch Kommas getrennte Container-Bedingungen wider. Die `condition`-Eigenschaft spiegelt den entsprechenden `@container` als Array von Objekten wider, wobei jedes Objekt eine einzelne Container-Bedingung darstellt. ([Firefox Fehler 2022827](https://bugzil.la/2022827)).
- Die [Web Serial API](/de/docs/Web/API/Web_Serial_API) wird auf Desktop-Plattformen unterstützt und ermöglicht die Steuerung von Mikrocontrollern, die serielle Kommunikation unterstützen. Dies ermöglicht es Ihnen beispielsweise, Mikrocontroller und Entwicklungsboards wie ESP-Geräte, BBCmicro:bit und Raspberry Pi Picos, 3D-Drucker und CNC-Maschinen sowie andere unterstützte Geräte zu programmieren. Die Verwendung der API erfordert, dass Website-Benutzer ein [synthetisch generiertes Webseiten-Berechtigungs-Add-on](https://support.mozilla.org/en-US/kb/site-permission-add-ons) installieren — dies ist der gleiche Ansatz, um den Zugriff auf WebMIDI sicher zu verwalten. ([Firefox Fehler 2029625](https://bugzil.la/2029625)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für `altitudeAngle` und `azimuthAngle` zu Pointer-Aktionen des Subtyps `touch` hinzugefügt. Diese Eigenschaften ermöglichen das Simulieren von Touch-Interaktionen mit präzisen Winkeldaten und geben den Winkel an, in dem ein Zeiger eine Oberfläche berührt und seine Drehrichtung. ([Firefox Fehler 2022644](https://bugzil.la/2022644)).
- Ein Fehler wurde behoben, bei dem `UnknownError` DOM-Ausnahmen, die von Inhaltsseiten stammen, fälschlicherweise als interne WebDriver-Fehler behandelt wurden. ([Firefox Fehler 2032387](https://bugzil.la/2032387)).

#### WebDriver BiDi

- Der `browser.setClientWindowState`-Befehl wurde implementiert. Dieser Befehl ermöglicht es Clients, den OS-Level-Fensterstatus eines Browserfensters zu ändern, z. B. maximiert, minimiert, im Vollbildmodus oder normal. Es ermöglicht auch die Neupositionierung und Größenänderung des Fensters. ([Firefox Fehler 1855028](https://bugzil.la/1855028)).
- Unterstützung für Worker-Welten (für dedizierte, gemeinsame und Service-Arbeiter) im `script.getRealms`-Befehl hinzugefügt. Der Befehl gibt jetzt auch Realm-Informationen für Worker-Skripte zusätzlich zu Fensterkontexten zurück. ([Firefox Fehler 2016097](https://bugzil.la/2016097)).
- Der oberste Stack-Frame wurde in `log.entryAdded`-Ereignissen für alle Console-API-Nachrichten aufgenommen. ([Firefox Fehler 1941813](https://bugzil.la/1941813)).
- Das `text`-Feld des `log.entryAdded`-Ereignisses wurde verbessert, um besser mit dem Verhalten der Firefox-Developer-Tools und der Google Chrome WebDriver BiDi-Implementierung übereinzustimmen. ([Firefox Fehler 2005054](https://bugzil.la/2005054)).
- Netzwerkereignis-Cookies wurden aktualisiert, um alle Eigenschaften einzuschließen, nicht nur `name` und `value`. ([Firefox Fehler 1887118](https://bugzil.la/1887118)).
- Der `network.getData`-Befehl wurde für Umleitungen vor dem Timeout behoben. ([Firefox Fehler 2009916](https://bugzil.la/2009916)).
- Der `browsingContext.reload`-Befehl wurde korrigiert, sodass der Standort eines navigierten iframes zurückgesetzt wird. ([Firefox Fehler 2023917](https://bugzil.la/2023917)).
- Die leere `proxy`-Fähigkeit wurde aus der Antwort des `session.new`-Befehls entfernt, wenn kein Proxy angegeben ist. ([Firefox Fehler 1916463](https://bugzil.la/1916463)).

#### Marionette

- Das Umpositionieren von Browserfenstern unter Linux Wayland im Kopflosen Modus wurde ermöglicht. ([Firefox Fehler 2023978](https://bugzil.la/2023978)).

## Änderungen für Add-on-Entwickler

- Das {{WebExtAPIRef("webRequest.onErrorOccurred")}}-Ereignis fällt nun auf `NS_ERROR_NET_ON_RECEIVING_FROM` zurück, anstatt auf einen String, der mit `NS_ERROR_NET_ON_` oder `NS_ERROR_NET_UNKNOWN_` beginnt. Diese Änderung ist Teil von Leistungs- und Zuverlässigkeitsverbesserungen des `onErrorOccurred`-Ereignisses. ([Firefox Fehler 1881986](https://bugzil.la/1881986))
- {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}} fügen jetzt richtig eine geteilte Ansicht hinzu und entfernen sie, wenn ein Aufruf einen der Tabs der geteilten Ansicht einschließt. Zuvor führte ein Anruf zu einem Fehler oder trennte die geteilte Ansicht. ([Firefox Fehler 2029099](https://bugzil.la/2029099))
- {{WebExtAPIRef("tabs.move()")}} verschiebt nun richtig eine geteilte Ansicht nach rechts, wenn ein Aufruf einen der Tabs der geteilten Ansicht einschließt. Zuvor wurde eine geteilte Ansicht nur nach links oder ans Ende der Tab-Liste verschoben. ([Firefox Fehler 2027855](https://bugzil.la/2027855))

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 151 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`@container style()` Bereichssyntax-Abfragen**: `layout.css.attr.enabled`

  Die CSS-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) mit [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen unterstützt jetzt die _Bereichssyntax_. Dies ermöglicht es Ihnen, zu überprüfen, ob ein Container eine gültige benutzerdefinierte CSS-Eigenschaft hat und deren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` zu vergleichen, um dementsprechend Stile auf seine Kinder anzuwenden. ([Firefox Fehler 2024601](https://bugzil.la/2024601)).

- **`field-sizing` Eigenschaft**: `layout.css.field-sizing.enabled`

  Die {{cssxref("field-sizing")}} CSS-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formularsteuerungselementen zu steuern. Diese Eigenschaft hat zwei Werte: `content` erlaubt es Elementen, sich in ihrer Größe an ihren Inhalt anzupassen, und `fixed` setzt eine feste Größe der Elemente. ([Firefox Fehler 1977176](https://bugzil.la/1977176)).

- **Deaktivierung von MathML `href` auf Nicht-`<a>`-Elementen**: `mathml.href_link_on_non_anchor_element.disabled`

  Wenn aktiviert, erstellt das globale Attribut [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) keinen Hyperlink mehr auf MathML-Elementen, die nicht `<a>` sind, entsprechend der [MathML Core-Spezifikation](https://w3c.github.io/mathml-core/#the-a-element). ([Firefox Fehler 2026848](https://bugzil.la/2026848)).

- **Fix für verschachtelte scrollbare Bereiche**: `layout.css.fake-webkit-scrollbar.enabled`

  Diese Implementierung wurde hinzugefügt, um ein Problem zu beheben, bei dem scrollbarer Inhalt unerreichbar war. Wenn ein Scrollbalken auf `display: none;` oder `width: 0;` gesetzt ist, würden die Scrollbalken von verschachtelten scrollbaren Bereichen übereinander gestapelt, was bedeutet, dass einige Inhalte möglicherweise nicht erreichbar sind. ([Firefox Fehler 1977511](https://bugzil.la/1977511)).

- **`<timeline-range-name>` Werte**: `layout.css.scroll-driven-animations.enabled`

  Die CSS-Eigenschaften {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}} und die Kurzschreibweise {{cssxref("animation-range")}} unterstützen jetzt [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name)-Werte. Diese [`<timeline-range-name>`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names)-Werte ermöglichen es, genau anzugeben, innerhalb welches Segments eine scrollgesteuerte Animation stattfindet. ([Firefox Fehler 1804775](https://bugzil.la/1804775)).

- **GeometryUtils-Methoden: `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()`**: `layout.css.convertFromNode.enabled`

  Die GeometryUtils-Methoden: `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` sind standardmäßig nicht mehr in Firefox Nightly aktiviert. ([Firefox Fehler 2026051](https://bugzil.la/2026051)).

- **GeometryUtils-Methoden: `getBoxQuads()`**: `layout.css.getBoxQuads.enabled`

  Die GeometryUtils-Methode: `getBoxQuads()` ist standardmäßig nicht mehr in Firefox Nightly aktiviert. ([Firefox Fehler 2026051](https://bugzil.la/2026051)).

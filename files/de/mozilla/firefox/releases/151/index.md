---
title: Firefox 151 Versionshinweise für Entwickler (Beta)
short-title: Firefox 151 (Beta)
slug: Mozilla/Firefox/Releases/151
l10n:
  sourceCommit: 5ea8567452714c1ab498f8823bda80617f12d6d0
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 151, die Entwickler betreffen.
Firefox 151 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [19. Mai 2026](https://whattrainisitnow.com/release/?version=151) ausgeliefert.

> [!NOTE]
> Die Versionshinweise für diese Version von Firefox sind noch in Arbeit.

## Änderungen für Webentwickler

### HTML

- Das Attribut [`shadowrootslotassignment`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) wird jetzt bei {{htmlelement("template")}}-Elementen unterstützt, was die deklarative Definition des Slot-Zuweisungsverhaltens für Shadow-Roots erlaubt.
  Das Attribut wird in JavaScript durch [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment) oder [`HTMLTemplateElement.shadowRootSlotAssignment`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSlotAssignment) wiedergegeben
  ([Firefox-Bug 2031295](https://bugzil.la/2031295), [Firefox-Bug 2023824](https://bugzil.la/2023824)).

### CSS

- Die CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützt nun [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen. Dies ermöglicht es, zu überprüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat, und entsprechend den Stil auf seine Kinder anzuwenden. ([Firefox-Bug 2016929](https://bugzil.la/2016929), ([Firefox-Bug 2019254](https://bugzil.la/2019254)), ([Firefox-Bug 2024601](https://bugzil.la/2024601)), [Firefox-Bug 2030645](https://bugzil.la/2030645)).

- Die {{cssxref("position-anchor")}} CSS-Eigenschaft unterstützt jetzt den `normal` (Standard-) Wert. Dies ermöglicht die Abstimmung mit der {{cssxref("position-area")}}-Eigenschaft, sodass, wenn die `position-area`-Eigenschaft aktualisiert wird, die `position-anchor`-Eigenschaft ebenfalls aktualisiert wird. ([Firefox-Bug 2030351](https://bugzil.la/2030351)).

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) gibt nun `false` zurück, wenn das zu ersetzende Element {{svgelement("svg")}} im SVG-[Namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) oder {{mathmlelement("math")}} im MathML-Namespace ist (zusammen mit {{htmlelement("html")}}, das in [Firefox 150](/de/docs/Mozilla/Firefox/Releases/150#apis) nicht erlaubt wurde).
  ([Firefox-Bug 2032359](https://bugzil.la/2032359)).
- Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) wird nun auf Desktop-Plattformen unterstützt.
  Dies ermöglicht es, ein [immer im Vordergrund befindliches Fenster](/de/docs/Web/API/Document_Picture-in-Picture_API#how_does_it_work) zu öffnen, das mit beliebigem HTML-Inhalt gefüllt werden kann.
  Es kann verwendet werden, um jeglichen Inhalt anzuzeigen, den ein Benutzer getrennt von der Seite oder sogar vom Browser sehen möchte, wie z.B. eine Sammlung von Streams, die die Teilnehmer eines Videoanrufs zeigen, einen Börsenticker oder einen Countdown-Timer.
  ([Firefox-Bug 2006594](https://bugzil.la/2006594)).
- Die [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang)-Eigenschaft wird unterstützt, um die Sprache des Canvas-Zeichenkontexts festzulegen.
  Während ein DOM-Canvas diesen Kontext vom `lang`-Attribut des zugehörigen {{htmlelement("canvas")}}-Elements erben kann, ist dies nützlich, um den Kontext für ein Offscreen-Canvas festzulegen, das möglicherweise gerendert wird, bevor es mit einem `<canvas>` verbunden wird.
  ([Firefox-Bug 1943070](https://bugzil.la/1943070)).
- Die [`options.keyboardLock`](/de/docs/Web/API/Element/requestFullscreen#keyboardlock)-Eigenschaft kann jetzt als Option zu [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) hinzugefügt werden, damit Websites Tastatursperre anfordern können, wenn das Element im Vollbildmodus angezeigt wird.
  Dies verhindert, dass die <kbd>Esc</kbd>-Taste das Element aus dem Vollbildmodus entfernt (stattdessen ist ein langes Drücken erforderlich), und einige zuvor reservierte Browser-Hotkeys können nun abgefangen und ihre Standardaktion verhindert werden.
  ([Firefox-Bug 2032302](https://bugzil.la/2032302)).
- Die [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang)-Eigenschaft wird jetzt unterstützt, um die Zeichensprache eines Offscreen-Canvas explizit festzulegen und nach der Erstellung des Zeichenkontexts zu ändern.
  ([Firefox-Bug 1943070](https://bugzil.la/1943070)).
- Die [`CSSContainerRule.conditions`](/de/docs/Web/API/CSSContainerRule/conditions)-Eigenschaft wird jetzt unterstützt, was die CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) für mehrere kommagetrennte Containerbedingungen wiedergibt.
  Die `condition`-Eigenschaft spiegelt eine entsprechende `@container` als Array von Objekten wider, wobei jedes Objekt eine einzelne Containerbedingung darstellt.
  ([Firefox-Bug 2022827](https://bugzil.la/2022827)).
- Die [Web Serial API](/de/docs/Web/API/Web_Serial_API) wird auf Desktop-Plattformen unterstützt, was die Steuerung von Mikrocontrollern ermöglicht, die serielle Kommunikation unterstützen.
  Dies ermöglicht es, beispielsweise Mikrocontroller und Entwicklungsboards wie ESP-Geräte, BBCmicro:bit, und Raspberry Pi Picos, 3D-Drucker und CNC-Maschinen sowie andere unterstützte Geräte zu programmieren.
  Die Nutzung der API erfordert, dass Webseitenbenutzer ein [synthetisch generiertes Website-Berechtigungs-Add-on](https://support.mozilla.org/en-US/kb/site-permission-add-ons) installieren — dies ist der gleiche Ansatz, der zur sicheren Verwaltung des Zugangs zu WebMIDI verwendet wird.
  ([Firefox-Bug 2029625](https://bugzil.la/2029625)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für `altitudeAngle` und `azimuthAngle` zu Zeigeraktionen des Subtyps `touch` hinzugefügt. Diese Eigenschaften ermöglichen das Simulieren von Touch-Interaktionen mit präzisen Winkelorientierungsdaten, die den Winkel angeben, in dem ein Zeiger eine Oberfläche berührt, und dessen Drehrichtung. ([Firefox-Bug 2022644](https://bugzil.la/2022644)).
- Ein Fehler wurde behoben, bei dem `UnknownError` DOM-Ausnahmen, die von Inhaltsseiten stammen, fälschlicherweise als interne WebDriver-Fehler behandelt wurden. ([Firefox-Bug 2032387](https://bugzil.la/2032387)).

#### WebDriver BiDi

- Der Befehl `browser.setClientWindowState` wurde implementiert. Dieser Befehl ermöglicht es Clients, den OS-Level-Fensterstatus eines Browserfensters zu ändern, wie z.B. maximiert, minimiert, Vollbild oder normal. Es ermöglicht auch, das Fenster neu zu positionieren und zu skalieren. ([Firefox-Bug 1855028](https://bugzil.la/1855028)).
- Unterstützung für Worker-Reiche (für dedizierte, geteilte und Service-Worker) im `script.getRealms`-Befehl hinzugefügt. Der Befehl gibt nun Informationen über Reiche für Workerskripte zusätzlich zu Fensterkontexten zurück. ([Firefox-Bug 2016097](https://bugzil.la/2016097)).
- Der oberste Stack-Frame wurde zu `log.entryAdded`-Ereignissen für alle Console-API-Nachrichten hinzugefügt. ([Firefox-Bug 1941813](https://bugzil.la/1941813)).
- Das `text`-Feld des `log.entryAdded`-Ereignisses wurde verbessert, um sich besser an das Verhalten von Firefox DevTools und die WebDriver BiDi-Implementierung von Google Chrome anzupassen. ([Firefox-Bug 2005054](https://bugzil.la/2005054)).
- Netzwerkevent-Cookies wurden behoben, um alle Eigenschaften einzuschließen, nicht nur `name` und `value`. ([Firefox-Bug 1887118](https://bugzil.la/1887118)).
- Der Befehl `network.getData` wurde behoben, um Zeitüberschreitungen bei Umleitungen zu verhindern. ([Firefox-Bug 2009916](https://bugzil.la/2009916)).
- Der Befehl `browsingContext.reload` wurde behoben, um die Position eines navigierten iframes nicht zurückzusetzen. ([Firefox-Bug 2023917](https://bugzil.la/2023917)).
- Die leere `proxy`-Fähigkeit wurde aus der Antwort des Befehls `session.new` entfernt, wenn kein Proxy angegeben ist. ([Firefox-Bug 1916463](https://bugzil.la/1916463)).

#### Marionette

- Die Neupositionierung von Browserfenstern im Headless-Modus unter Linux Wayland wurde aktiviert. ([Firefox-Bug 2023978](https://bugzil.la/2023978)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}} fügen jetzt korrekt eine geteilte Ansicht hinzu und entfernen sie, wenn ein Aufruf einen der Tabs der geteilten Ansicht enthält. Zuvor würde ein Aufruf die geteilte Ansicht trennen oder fehlschlagen. ([Firefox-Bug 2029099](https://bugzil.la/2029099))
- {{WebExtAPIRef("tabs.move()")}} verschiebt nun eine geteilte Ansicht korrekt nach rechts, wenn ein Aufruf einen der Tabs der geteilten Ansicht enthält. Zuvor wurde eine geteilte Ansicht nur nach links oder zum Ende der Tab-Liste verschoben. ([Firefox-Bug 2027855](https://bugzil.la/2027855))

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 151 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der [Seite über experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`@container style()` Bereichssyntax-Abfragen**: `layout.css.attr.enabled`

  Die CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützt nun die _Bereichssyntax_ in [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen. Dies ermöglicht es, zu überprüfen, ob ein Container eine gültige benutzerdefinierte CSS-Eigenschaft hat und ihren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` zu vergleichen und entsprechend den Stil auf seine Kinder anzuwenden. ([Firefox-Bug 2024601](https://bugzil.la/2024601)).

- **`field-sizing` Eigenschaft**: `layout.css.field-sizing.enabled`

  Die {{cssxref("field-sizing")}} CSS-Eigenschaft ermöglicht es Ihnen, das Größensverhalten von Formularelementen zu steuern. Diese Eigenschaft hat zwei Werte: `content` erlaubt es Elementen, ihre Größe dem Inhalt anzupassen, und `fixed` setzt eine feste Größe für Elemente. ([Firefox-Bug 1977176](https://bugzil.la/1977176)).

- **Fix für verschachtelte scrollbare Bereiche**: `layout.css.fake-webkit-scrollbar.enabled`

  Diese Implementierung wurde hinzugefügt, um ein Problem zu beheben, bei dem scrollbarer Inhalt nicht erreichbar war. Wenn eine Scrollleiste auf `display: none;` oder `width: 0;` gesetzt ist, würden die Scrollleisten der verschachtelten scrollbaren Bereiche übereinander gestapelt, was bedeutet, dass einige Inhalte möglicherweise nicht erreichbar sind. ([Firefox-Bug 1977511](https://bugzil.la/1977511)).

- **`<timeline-range-name>` Werte**: `layout.css.scroll-driven-animations.enabled`

  Die {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}} CSS-Eigenschaften und die {{cssxref("animation-range")}} Kurzschreibweise unterstützen jetzt [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) Werte. Diese [`<timeline-range-name>`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) Werte ermöglichen es Ihnen, genau anzugeben, in welchem Segment eine scrollgesteuerte Animation stattfinden wird. ([Firefox-Bug 1804775](https://bugzil.la/1804775)).

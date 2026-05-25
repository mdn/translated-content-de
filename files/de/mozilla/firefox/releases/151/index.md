---
title: Firefox 151 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 151 (Stabil)
slug: Mozilla/Firefox/Releases/151
l10n:
  sourceCommit: d9835ea7d100660d8d845f358277d5b25b825a20
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 151, die Entwickler betreffen.
Firefox 151 wurde am [19. Mai 2026](https://whattrainisitnow.com/release/?version=151) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`shadowrootslotassignment`-Attribut](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) wird jetzt auf {{htmlelement("template")}}-Elementen unterstützt und ermöglicht die deklarative Definition des Slot-Zuweisungsverhaltens für Shadow Roots.
  Das Attribut wird in JavaScript durch [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment) oder [`HTMLTemplateElement.shadowRootSlotAssignment`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSlotAssignment) dargestellt
  ([Firefox-Bug 2031295](https://bugzil.la/2031295), [Firefox-Bug 2023824](https://bugzil.la/2023824)).

### CSS

- Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-At-Regel unterstützt jetzt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen. Diese ermöglicht es zu prüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat, und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox-Bug 2016929](https://bugzil.la/2016929), ([Firefox-Bug 2019254](https://bugzil.la/2019254)), ([Firefox-Bug 2024601](https://bugzil.la/2024601)), [Firefox-Bug 2030645](https://bugzil.la/2030645)).

- Die {{cssxref("position-anchor")}} CSS-Eigenschaft unterstützt jetzt den `normal` (Standard-) Wert. Dies ermöglicht das Abstimmen der {{cssxref("position-area")}}-Eigenschaft, sodass, wenn die `position-area`-Eigenschaft aktualisiert wird, auch die `position-anchor`-Eigenschaft aktualisiert wird. ([Firefox-Bug 2030351](https://bugzil.la/2030351)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) gibt nun `false` zurück, wenn das zu ersetzende Element {{svgelement("svg")}} im SVG-[Namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) oder {{mathmlelement("math")}} im MathML-Namespace ist (zusammen mit {{htmlelement("html")}}, welches in [Firefox 150](/de/docs/Mozilla/Firefox/Releases/150#apis) nicht mehr zulässig war).
  ([Firefox-Bug 2032359](https://bugzil.la/2032359)).
- Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) wird jetzt auf Desktop-Plattformen unterstützt.
  Dies ermöglicht es, ein [immer oben liegendes Fenster](/de/docs/Web/API/Document_Picture-in-Picture_API#how_does_it_work) zu öffnen, das mit beliebigem HTML-Inhalt gefüllt werden kann.
  Es kann verwendet werden, um jeden Inhalt anzuzeigen, den ein Benutzer getrennt von der startenden Seite (oder sogar vom Browser) ansehen möchte, wie z. B. eine Reihe von Streams, die die Teilnehmer eines Videoanrufs zeigen, einen Börsennachrichtenticker oder einen Countdown-Timer.
  ([Firefox-Bug 2006594](https://bugzil.la/2006594)).
- Die [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang)-Eigenschaft wird unterstützt, um die Sprache des Canvas-Zeichnungskontextes festzulegen.
  Während ein DOM-Canvas diesen Kontext von dem `lang`-Attribut seines zugehörigen {{htmlelement("canvas")}}-Elements erben kann, ist dies nützlich, um den Kontext für ein Offscreen-Canvas festzulegen, das möglicherweise gerendert wird, bevor es einem `<canvas>` zugeordnet wird.
  ([Firefox-Bug 1943070](https://bugzil.la/1943070)).
- Die Eigenschaft [`options.keyboardLock`](/de/docs/Web/API/Element/requestFullscreen#keyboardlock) kann jetzt als Option an [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) übergeben werden, um Websites zu ermöglichen, eine Tastatursperre anzufordern, wenn das Element im Vollbildmodus angezeigt wird.
  Dies verhindert, dass die <kbd>Esc</kbd>-Taste das Verlassen des Vollbildmodus des Elements verursacht (ein langes Drücken ist stattdessen erforderlich), und einige früher reservierte Browser-Hotkeys können jetzt abgefangen und deren Standardaktion verhindert werden.
  ([Firefox-Bug 2032302](https://bugzil.la/2032302)).
- Die Eigenschaften `maxStorageBuffersInFragmentStage`, `maxStorageBuffersInVertexStage`, `maxStorageTexturesInFragmentStage` und `maxStorageTexturesInVertexStage` auf [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits) werden jetzt teilweise unterstützt.
  Diese Eigenschaften geben den Wert der `maxStorageBuffersPerShaderStage`- und `maxStorageTexturesPerShaderStage`-Grenzen an.
  Bei der Erstellung eines Geräts werden angeforderte Werte für die *In*Stage-Grenzen ignoriert.
  ([Firefox-Bug 2006720](https://bugzil.la/2006720)).
- Die [`CSSContainerRule.conditions`](/de/docs/Web/API/CSSContainerRule/conditions)-Eigenschaft wird nun unterstützt, was die Unterstützung der [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container)-At-Regel für mehrere durch Kommas getrennte Container-Bedingungen widerspiegelt.
  Die `conditions`-Eigenschaft spiegelt die entsprechende `@container`-Regel als Array von Objekten wider, wobei jedes Objekt eine einzelne Container-Bedingung darstellt.
  ([Firefox-Bug 2022827](https://bugzil.la/2022827)).
- Die [Web Serial API](/de/docs/Web/API/Web_Serial_API) wird auf Desktop-Plattformen unterstützt und ermöglicht die Steuerung von Mikrocontrollern, die serielle Kommunikation unterstützen.
  Dadurch können Sie z. B. Mikrocontroller und Entwicklungsboards wie ESP-Geräte, BBCmicro:bit und Raspberry Pi Picos, 3D-Drucker und CNC-Maschinen sowie andere unterstützte Geräte programmieren.
  Die Nutzung der API erfordert, dass Webseitenbenutzer ein [synthetisch generiertes Site-Berechtigungs-Addon](https://support.mozilla.org/en-US/kb/site-permission-add-ons) installieren — dies ist der gleiche Ansatz, der verwendet wird, um den Zugriff auf WebMIDI sicher zu verwalten.
  ([Firefox-Bug 2029625](https://bugzil.la/2029625)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für `altitudeAngle` und `azimuthAngle` in Touch-Pointer-Aktionen hinzugefügt. Diese Eigenschaften ermöglichen das Simulieren von Touch-Interaktionen mit präzisen Winkelorientierungsdaten, die den Winkel angeben, in dem ein Zeiger eine Oberfläche berührt und seine Drehrichtung. ([Firefox-Bug 2022644](https://bugzil.la/2022644)).
- Ein Fehler behoben, bei dem `UnknownError` DOM-Ausnahmen aus Inhaltsseiten fälschlicherweise als interne WebDriver-Fehler behandelt wurden. ([Firefox-Bug 2032387](https://bugzil.la/2032387)).

#### WebDriver BiDi

- Den `browser.setClientWindowState`-Befehl implementiert. Dieser Befehl ermöglicht es Clients, den Fensterzustand auf Betriebssystemebene eines Browserfensters zu ändern, z. B. maximiert, minimiert, Vollbild oder normal. Es ermöglicht auch, das Fenster neu zu positionieren und zu dimensionieren. ([Firefox-Bug 1855028](https://bugzil.la/1855028)).
- Unterstützung für Worker-Bereiche (für dedizierte, gemeinsame und Service-Worker) im `script.getRealms`-Befehl hinzugefügt. Der Befehl gibt nun Bereichsinformationen für Worker-Skripte zusätzlich zu Fensterkontexten zurück. ([Firefox-Bug 2016097](https://bugzil.la/2016097)).
- Das oberste Stack-Frame in `log.entryAdded`-Ereignissen für alle Console-API-Nachrichten hinzugefügt. ([Firefox-Bug 1941813](https://bugzil.la/1941813)).
- Das `text`-Feld des `log.entryAdded`-Ereignisses verbessert, um besser mit dem Verhalten von Firefox DevTools und der Implementierung von Google Chrome WebDriver BiDi übereinzustimmen. ([Firefox-Bug 2005054](https://bugzil.la/2005054)).
- Netzwerk-Ereignis-Cookies gefixt, um alle Eigenschaften einzuschließen, nicht nur `name` und `value`. ([Firefox-Bug 1887118](https://bugzil.la/1887118)).
- Den `network.getData`-Befehl, der bei Weiterleitungen zu Zeitüberschreitungen führte, behoben. ([Firefox-Bug 2009916](https://bugzil.la/2009916)).
- Den `browsingContext.reload`-Befehl, der den Ort eines navigierten Iframes beim Neuladen nicht zurücksetzte, behoben. ([Firefox-Bug 2023917](https://bugzil.la/2023917)).
- Die leere `proxy`-Fähigkeit aus der `session.new`-Befehlsantwort entfernt, wenn kein Proxy angegeben ist. ([Firefox-Bug 1916463](https://bugzil.la/1916463)).

#### Marionette

- Die Browserfenster-Positionierung auf Linux Wayland im Headless-Modus aktiviert. ([Firefox-Bug 2023978](https://bugzil.la/2023978)).

## Änderungen für Add-on-Entwickler

- Das {{WebExtAPIRef("webRequest.onErrorOccurred")}}-Ereignis weicht jetzt auf `NS_ERROR_NET_ON_RECEIVING_FROM` statt eines Strings, der mit `NS_ERROR_NET_ON_` oder `NS_ERROR_NET_UNKNOWN_` beginnt, aus. Diese Änderung ist Teil von Leistungs- und Zuverlässigkeitsverbesserungen für das `onErrorOccurred`-Ereignis. ([Firefox-Bug 1881986](https://bugzil.la/1881986))
- {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}} fügen nun korrekt eine geteilte Ansicht hinzu und entfernen sie, wenn ein Aufruf einen der Tabs der geteilten Ansicht enthält. Zuvor schlug ein Aufruf fehl oder trennte die geteilte Ansicht. ([Firefox-Bug 2029099](https://bugzil.la/2029099))
- {{WebExtAPIRef("tabs.move()")}} verschiebt eine geteilte Ansicht nun korrekt nach rechts, wenn ein Aufruf einen der Tabs der geteilten Ansicht enthält. Zuvor verschob ein Aufruf eine geteilte Ansicht nur nach links oder an das Ende der Tab-Liste. ([Firefox-Bug 2027855](https://bugzil.la/2027855))

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 151 enthalten, sind jedoch standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`@container style()`-Bereichssyntax-Abfragen**: `layout.css.attr.enabled`

  Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-At-Regel [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen unterstützen jetzt die _Bereichssyntax_. Dies ermöglicht es zu prüfen, ob ein Container eine gültige benutzerdefinierte CSS-Eigenschaft hat und deren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` zu vergleichen und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox-Bug 2024601](https://bugzil.la/2024601)).

- **`field-sizing`-Eigenschaft**: `layout.css.field-sizing.enabled`

  Die {{cssxref("field-sizing")}} CSS-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formularsteuerelementen zu steuern. Diese Eigenschaft hat zwei Werte: `content` erlaubt es den Elementen, sich in der Größe anzupassen, um ihren Inhalt aufzunehmen, und `fixed` setzt eine feste Größe auf den Elementen. ([Firefox-Bug 1977176](https://bugzil.la/1977176)).

- **Deaktivieren des MathML `href` auf Nicht-`<a>`-Elementen**: `mathml.href_link_on_non_anchor_element.disabled`

  Wenn aktiviert, erstellt das [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) globale Attribut keinen Hyperlink mehr auf MathML-Elementen außer `<a>`, was der [MathML-Kern-Spezifikation](https://w3c.github.io/mathml-core/#the-a-element) entspricht. ([Firefox-Bug 2026848](https://bugzil.la/2026848)).

- **Fix für verschachtelte scrollbare Bereiche**: `layout.css.fake-webkit-scrollbar.enabled`

  Diese Implementierung wurde hinzugefügt, um ein Problem zu beheben, bei dem scrollbarer Inhalt unerreichbar war. Wenn ein Scrollbalken auf `display: none;` oder `width: 0;` gesetzt ist, würden die Scrollbalken verschachtelter scrollbarer Bereiche übereinander gestapelt, was bedeutet, dass einige Inhalte möglicherweise nicht erreichbar sind. ([Firefox-Bug 1977511](https://bugzil.la/1977511)).

- **`<timeline-range-name>`-Werte**: `layout.css.scroll-driven-animations.enabled`

  Die {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}} CSS-Eigenschaften und die {{cssxref("animation-range")}} Kurzschreibweise unterstützen jetzt [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name)-Werte. Diese [`<timeline-range-name>`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) Werte erlauben es Ihnen, genau anzugeben, in welchem Segment eine scrollgesteuerte Animation stattfinden wird. ([Firefox-Bug 1804775](https://bugzil.la/1804775)).

- **GeometryUtils-Methoden: `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()`**: `layout.css.convertFromNode.enabled`

  Die GeometryUtils-Methoden: `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` sind standardmäßig nicht mehr in Firefox Nightly aktiviert. ([Firefox-Bug 2026051](https://bugzil.la/2026051)).

- **GeometryUtils-Methode: `getBoxQuads()`**: `layout.css.getBoxQuads.enabled`

  Die GeometryUtils-Methode: `getBoxQuads()` ist standardmäßig nicht mehr in Firefox Nightly aktiviert. ([Firefox-Bug 2026051](https://bugzil.la/2026051)).

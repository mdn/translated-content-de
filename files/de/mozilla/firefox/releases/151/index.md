---
title: Firefox 151 Versionshinweise für Entwickler
short-title: Firefox 151
slug: Mozilla/Firefox/Releases/151
l10n:
  sourceCommit: 681ee4beb90b7e0d001f8938df41d5af0f602fe7
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 151, die Entwickler betreffen.
Firefox 151 wurde am [19. Mai 2026](https://whattrainisitnow.com/release/?version=151) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`shadowrootslotassignment`-Attribut](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) wird jetzt auf {{htmlelement("template")}}-Elementen unterstützt, wodurch eine deklarative Definition des Slot-Zuweisungsverhaltens für Shadow-Roots möglich ist.
  Das Attribut wird in JavaScript durch [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment) oder [`HTMLTemplateElement.shadowRootSlotAssignment`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSlotAssignment) widergespiegelt
  ([Firefox-Bug 2031295](https://bugzil.la/2031295), [Firefox-Bug 2023824](https://bugzil.la/2023824)).

### CSS

- Die CSS-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützt jetzt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen. Dies ermöglicht es Ihnen zu überprüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat, und entsprechende Stile auf seine Kinder anzuwenden. ([Firefox-Bug 2016929](https://bugzil.la/2016929), ([Firefox-Bug 2019254](https://bugzil.la/2019254)), ([Firefox-Bug 2024601](https://bugzil.la/2024601)), [Firefox-Bug 2030645](https://bugzil.la/2030645)).

- Die {{cssxref("position-anchor")}} CSS-Eigenschaft unterstützt jetzt den `normal` (Standard)-Wert. Dies ermöglicht das Abgleichen der {{cssxref("position-area")}}-Eigenschaft, sodass bei einer Aktualisierung der `position-area`-Eigenschaft auch die `position-anchor`-Eigenschaft aktualisiert wird. ([Firefox-Bug 2030351](https://bugzil.la/2030351)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) gibt jetzt `false` zurück, wenn das zu ersetzende Element im SVG-[Namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) ein {{svgelement("svg")}} oder im MathML-Namespace ein {{mathmlelement("math")}} ist (zusammen mit {{htmlelement("html")}}, das in [Firefox 150](/de/docs/Mozilla/Firefox/Releases/150#apis) untersagt wurde).
  ([Firefox-Bug 2032359](https://bugzil.la/2032359)).
- Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) wird nun auf Desktop-Plattformen unterstützt.
  Dies ermöglicht das Öffnen eines [immer im Vordergrund befindlichen Fensters](/de/docs/Web/API/Document_Picture-in-Picture_API#how_does_it_work), das mit beliebigem HTML-Inhalt gefüllt werden kann.
  Es kann verwendet werden, um beliebige Inhalte anzuzeigen, die ein Benutzer getrennt von der Startseite (oder sogar dem Browser) sehen möchte, wie z.B. eine Reihe von Streams, die die Teilnehmer eines Videokonferenzanrufs zeigen, ein Börsenticker oder ein Countdown-Timer.
  ([Firefox-Bug 2006594](https://bugzil.la/2006594)).
- Die [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang)-Eigenschaft wird jetzt unterstützt, um die Sprache des Canvas-Zeichnungskontexts festzulegen.
  Während ein DOM-Canvas diesen Kontext vom `lang`-Attribut seines zugehörigen {{htmlelement("canvas")}}-Elements erben kann, ist dies nützlich, um den Kontext für ein offscreen Canvas festzulegen, das möglicherweise gerendert wird, bevor es mit einem `<canvas>` verbunden wird.
  ([Firefox-Bug 1943070](https://bugzil.la/1943070)).
- Die [`options.keyboardLock`](/de/docs/Web/API/Element/requestFullscreen#keyboardlock)-Eigenschaft kann jetzt als Option an [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) übergeben werden, sodass Websites Keyboard-Sperre anfordern können, wenn das Element im Vollbildmodus angezeigt wird.
  Dadurch verhindert man, dass durch die <kbd>Esc</kbd>-Taste das Element den Vollbildmodus verlässt (anstattdessen ist ein langes Drücken erforderlich), und einige zuvor reservierte Browser-Hotkeys können nun abgefangen und ihre Standardaktion verhindert werden.
  ([Firefox-Bug 2032302](https://bugzil.la/2032302)).
- Die Eigenschaften `maxStorageBuffersInFragmentStage`, `maxStorageBuffersInVertexStage`, `maxStorageTexturesInFragmentStage` und `maxStorageTexturesInVertexStage` auf [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits) werden jetzt teilweise unterstützt.
  Diese Eigenschaften melden den Wert der `maxStorageBuffersPerShaderStage`- und `maxStorageTexturesPerShaderStage`-Grenzen.
  Beim Erstellen eines Geräts werden angeforderte Werte für die *In*Stage-Grenzen ignoriert.
  ([Firefox-Bug 2006720](https://bugzil.la/2006720)).
- Die [`CSSContainerRule.conditions`](/de/docs/Web/API/CSSContainerRule/conditions)-Eigenschaft wird jetzt unterstützt und spiegelt die Unterstützung für die @container-At-Regel für mehrere kommagetrennte Container-Bedingungen wider.
  Die `condition`-Eigenschaft spiegelt ein entsprechendes `@container` als ein Array von Objekten wider, wobei jedes Objekt eine einzelne Container-Bedingung darstellt.
  ([Firefox-Bug 2022827](https://bugzil.la/2022827)).
- Die [Web Serial API](/de/docs/Web/API/Web_Serial_API) wird auf Desktop-Plattformen unterstützt und ermöglicht die Steuerung von Mikrocontrollern, die serielle Kommunikation unterstützen.
  Dies erlaubt es Ihnen beispielsweise, Mikrocontroller und Entwicklungsboards wie ESP-Geräte, BBCmicro:bit und Raspberry Pi Picos, 3D-Drucker und CNC-Maschinen und andere unterstützte Geräte zu programmieren.
  Die Nutzung der API erfordert, dass Website-Benutzer ein [synthetisch generiertes Website-Berechtigungs-Add-on](https://support.mozilla.org/en-US/kb/site-permission-add-ons) installieren — dies ist der gleiche Ansatz, der verwendet wird, um den Zugriff auf WebMIDI sicher zu verwalten.
  ([Firefox-Bug 2029625](https://bugzil.la/2029625)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für `altitudeAngle` und `azimuthAngle` zu Pointer-Aktionen des Subtypes `touch` hinzugefügt. Diese Eigenschaften ermöglichen die Simulation von Touch-Interaktionen mit präzisen Winkelorientierungsdaten, indem sie den Winkel angeben, in dem ein Zeiger eine Oberfläche berührt, und dessen Rotationsrichtung. ([Firefox-Bug 2022644](https://bugzil.la/2022644)).
- Ein Fehler wurde behoben, bei dem `UnknownError` DOM-Ausnahmen von Inhaltsseiten fälschlicherweise als interne WebDriver-Fehler behandelt wurden. ([Firefox-Bug 2032387](https://bugzil.la/2032387)).

#### WebDriver BiDi

- Der Befehl `browser.setClientWindowState` wurde implementiert. Dieser Befehl erlaubt es Clients, den OS-Level-Fensterstatus eines Browser-Fensters zu ändern, z.B. maximiert, minimiert, im Vollbild oder normal. Außerdem können Fenster neu positioniert und deren Größe geändert werden. ([Firefox-Bug 1855028](https://bugzil.la/1855028)).
- Unterstützung für Worker-Realm (für dedicated, shared und service workers) im `script.getRealms`-Befehl hinzugefügt. Der Befehl gibt jetzt Realm-Informationen für Worker-Skripte zusätzlich zu Fensterkontexten zurück. ([Firefox-Bug 2016097](https://bugzil.la/2016097)).
- Das oberste Stack-Frame wurde für alle Console API-Nachrichten zu `log.entryAdded`-Ereignissen hinzugefügt. ([Firefox-Bug 1941813](https://bugzil.la/1941813)).
- Das `text`-Feld des `log.entryAdded`-Ereignisses wurde verbessert, um besser mit dem Verhalten von Firefox DevTools und der Google Chrome WebDriver BiDi-Implementierung übereinzustimmen. ([Firefox-Bug 2005054](https://bugzil.la/2005054)).
- Netzwerk-Ereignis-Cookies wurden korrigiert, um alle Eigenschaften einzuschließen, nicht nur `name` und `value`. ([Firefox-Bug 1887118](https://bugzil.la/1887118)).
- Der Befehl `network.getData` wurde so korrigiert, dass er nicht mehr bei Umleitungen ausläuft. ([Firefox-Bug 2009916](https://bugzil.la/2009916)).
- Der Befehl `browsingContext.reload` wurde so korrigiert, dass er die Position eines navigierten iframes zurücksetzt. ([Firefox-Bug 2023917](https://bugzil.la/2023917)).
- Die leere `proxy`-Fähigkeit wurde aus der Antwort des `session.new`-Befehls entfernt, wenn kein Proxy angegeben ist. ([Firefox-Bug 1916463](https://bugzil.la/1916463)).

#### Marionette

- Neupositionierung von Browser-Fenstern auf Linux Wayland im Headless-Modus aktiviert. ([Firefox-Bug 2023978](https://bugzil.la/2023978)).

## Änderungen für Add-on-Entwickler

- Das {{WebExtAPIRef("webRequest.onErrorOccurred")}}-Ereignis fällt jetzt auf `NS_ERROR_NET_ON_RECEIVING_FROM` zurück, anstatt auf einen String, der mit `NS_ERROR_NET_ON_` oder `NS_ERROR_NET_UNKNOWN_` beginnt. Diese Änderung ist Teil von Leistungs- und Zuverlässigkeitsverbesserungen beim `onErrorOccurred`-Ereignis. ([Firefox-Bug 1881986](https://bugzil.la/1881986))
- {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}} fügen jetzt korrekt eine geteilte Ansicht hinzu und entfernen sie, wenn ein Aufruf eines der Tabs der geteilten Ansicht umfasst. Zuvor schlug ein Aufruf fehl oder trennte die geteilte Ansicht. ([Firefox-Bug 2029099](https://bugzil.la/2029099))
- {{WebExtAPIRef("tabs.move()")}} verschiebt eine geteilte Ansicht jetzt korrekt nach rechts, wenn ein Aufruf eines der Tabs der geteilten Ansicht umfasst. Zuvor konnte ein Aufruf eine geteilte Ansicht nur nach links oder an das Ende der Tab-Liste verschieben. ([Firefox-Bug 2027855](https://bugzil.la/2027855))

## Experimentelle Web-Features

Diese Features werden in Firefox 151 ausgeliefert, sind aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie im `about:config`-Bereich nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`@container style()`-Bereichssyntax-Abfragen**: `layout.css.attr.enabled`

  Die CSS-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen unterstützen jetzt die _Bereichssyntax_. Dies ermöglicht Ihnen zu überprüfen, ob ein Container eine gültige benutzerdefinierte CSS-Eigenschaft hat und deren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` zu vergleichen und entsprechende Stile auf seine Kinder anzuwenden. ([Firefox-Bug 2024601](https://bugzil.la/2024601)).

- **`field-sizing`-Eigenschaft**: `layout.css.field-sizing.enabled`

  Die {{cssxref("field-sizing")}} CSS-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formularsteuerelementen zu steuern. Diese Eigenschaft hat zwei Werte: `content`, sodass Elemente ihre Größe an ihren Inhalt anpassen, und `fixed`, um eine feste Größe für Elemente festzulegen. ([Firefox-Bug 1977176](https://bugzil.la/1977176)).

- **Deaktivierung von MathML-`href` auf nicht-`<a>`-Elementen**: `mathml.href_link_on_non_anchor_element.disabled`

  Wenn aktiviert, erstellt das globale Attribut [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) keine Verknüpfung auf anderen MathML-Elementen als `<a>` mehr, entsprechend der [MathML Core Spezifikation](https://w3c.github.io/mathml-core/#the-a-element). ([Firefox-Bug 2026848](https://bugzil.la/2026848)).

- **Behebung für verschachtelte scrollbare Bereiche**: `layout.css.fake-webkit-scrollbar.enabled`

  Diese Implementierung wurde hinzugefügt, um ein Problem zu beheben, bei dem scrollbar Inhalte nicht erreichbar waren. Wenn eine Scrollbar auf `display: none;` oder `width: 0;` gesetzt ist, würden die Scrollbars verschachtelter scrollbarer Bereiche aufeinander gestapelt, was bedeutet, dass einige der Inhalte möglicherweise nicht erreichbar sind. ([Firefox-Bug 1977511](https://bugzil.la/1977511)).

- **`<timeline-range-name>`-Werte**: `layout.css.scroll-driven-animations.enabled`

  Die CSS-Eigenschaften {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}} und die Kurzform-Eigenschaft {{cssxref("animation-range")}} unterstützen jetzt [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name)-Werte. Diese [`<timeline-range-name>`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names)-Werte erlauben es Ihnen, genau anzugeben, in welchem Segment eine scrollgesteuerte Animation stattfinden wird. ([Firefox-Bug 1804775](https://bugzil.la/1804775)).

- **GeometryUtils-Methoden: `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()`**: `layout.css.convertFromNode.enabled`

  Die GeometryUtils-Methoden: `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()` sind in Firefox Nightly standardmäßig nicht mehr aktiviert. ([Firefox-Bug 2026051](https://bugzil.la/2026051)).

- **GeometryUtils-Methoden: `getBoxQuads()`**: `layout.css.getBoxQuads.enabled`

  Die GeometryUtils-Methode: `getBoxQuads()` ist in Firefox Nightly standardmäßig nicht mehr aktiviert. ([Firefox-Bug 2026051](https://bugzil.la/2026051)).

---
title: Firefox 151 – Versionshinweise für Entwickler
short-title: Firefox 151
slug: Mozilla/Firefox/Releases/151
l10n:
  sourceCommit: 9126ecf140009f571300b0d083148eb31e826128
---

Dieser Artikel informiert über Änderungen in Firefox 151, die für Entwickler relevant sind.
Firefox 151 wurde am [19. Mai 2026](https://whattrainisitnow.com/release/?version=151) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [Attribut `shadowrootslotassignment`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) wird jetzt für {{htmlelement("template")}}-Elemente unterstützt. Damit lässt sich das Verhalten der Slot-Zuweisung für Shadow Roots deklarativ festlegen.
  In JavaScript wird das Attribut durch [`ShadowRoot.slotAssignment`](/de/docs/Web/API/ShadowRoot/slotAssignment) oder [`HTMLTemplateElement.shadowRootSlotAssignment`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSlotAssignment) abgebildet
  ([Firefox-Bug 2031295](https://bugzil.la/2031295), [Firefox-Bug 2023824](https://bugzil.la/2023824)).

### CSS

- Die CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen. Damit können Sie prüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft besitzt, und seine Kindelemente entsprechend gestalten. ([Firefox-Bug 2016929](https://bugzil.la/2016929), ([Firefox-Bug 2019254](https://bugzil.la/2019254)), ([Firefox-Bug 2024601](https://bugzil.la/2024601)), [Firefox-Bug 2030645](https://bugzil.la/2030645)).

- Die CSS-Eigenschaft {{cssxref("position-anchor")}} unterstützt jetzt den Wert `normal` (Standardwert). Dadurch kann sie an die Eigenschaft {{cssxref("position-area")}} angepasst werden: Wenn die Eigenschaft `position-area` aktualisiert wird, wird auch die Eigenschaft `position-anchor` aktualisiert. ([Firefox-Bug 2030351](https://bugzil.la/2030351)).

### JavaScript

Keine nennenswerten Änderungen.

### APIs

- Die Methode [`Sanitizer.replaceElementWithChildren()`](/de/docs/Web/API/Sanitizer/replaceElementWithChildren) gibt jetzt `false` zurück, wenn das zu ersetzende Element {{svgelement("svg")}} im SVG-[Namespace](/de/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) oder {{mathmlelement("math")}} im MathML-Namespace ist. Dies gilt bereits für {{htmlelement("html")}}, das seit [Firefox 150](/de/docs/Mozilla/Firefox/Releases/150#apis) nicht mehr zulässig ist.
  ([Firefox-Bug 2032359](https://bugzil.la/2032359)).
- Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) wird jetzt auf Desktop-Plattformen unterstützt.
  Damit lässt sich ein [Fenster öffnen, das stets im Vordergrund bleibt](/de/docs/Web/API/Document_Picture-in-Picture_API#how_does_it_work) und mit beliebigen HTML-Inhalten gefüllt werden kann.
  Darin können Inhalte angezeigt werden, die Benutzer getrennt von der aufrufenden Seite (oder sogar vom Browser) sehen möchten, etwa mehrere Videostreams mit den Teilnehmern einer Videokonferenz, ein Börsenticker oder ein Countdown.
  ([Firefox-Bug 2006594](https://bugzil.la/2006594)).
- Die Eigenschaft [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang) wird unterstützt, um die Sprache des Canvas-Zeichenkontexts festzulegen.
  Ein Canvas im DOM kann diese Sprache zwar vom Attribut `lang` des zugehörigen {{htmlelement("canvas")}}-Elements erben. Die Eigenschaft ist jedoch nützlich, um die Sprache für ein Offscreen-Canvas festzulegen, das möglicherweise gerendert wird, bevor es einem `<canvas>` zugeordnet wird.
  ([Firefox-Bug 1943070](https://bugzil.la/1943070)).
- Die Eigenschaft [`options.keyboardLock`](/de/docs/Web/API/Element/requestFullscreen#keyboardlock) kann jetzt als Option an [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) übergeben werden. So können Websites eine Tastatursperre anfordern, während das Element im Vollbildmodus angezeigt wird.
  Dadurch beendet ein kurzer Druck auf <kbd>Esc</kbd> den Vollbildmodus nicht mehr; stattdessen ist ein langer Tastendruck erforderlich. Außerdem können einige zuvor für den Browser reservierte Tastenkombinationen jetzt abgefangen und ihre Standardaktionen verhindert werden.
  ([Firefox-Bug 2032302](https://bugzil.la/2032302)).
- Die Eigenschaften `maxStorageBuffersInFragmentStage`, `maxStorageBuffersInVertexStage`, `maxStorageTexturesInFragmentStage` und `maxStorageTexturesInVertexStage` von [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits) werden jetzt teilweise unterstützt.
  Beim Erstellen eines Geräts werden angeforderte Werte für diese Limits ignoriert. Stattdessen werden sie an die Werte der Limits `maxStorageBuffersPerShaderStage` und `maxStorageTexturesPerShaderStage` angepasst. Derzeit gibt es in Firefox jedoch einen Bug, durch den diese Anpassungen nicht in [`GPUDevice.limits`](/de/docs/Web/API/GPUDevice/limits) angezeigt werden.
  ([Firefox-Bug 2006720](https://bugzil.la/2006720)).
- Die Eigenschaft [`CSSContainerRule.conditions`](/de/docs/Web/API/CSSContainerRule/conditions) wird jetzt unterstützt. Sie entspricht der Unterstützung mehrerer kommagetrennter Container-Bedingungen durch die At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container).
  Die Eigenschaft `condition` bildet die zugehörige `@container`-Regel als Array von Objekten ab, wobei jedes Objekt eine einzelne Container-Bedingung darstellt.
  ([Firefox-Bug 2022827](https://bugzil.la/2022827)).
- Die [Web Serial API](/de/docs/Web/API/Web_Serial_API) wird auf Desktop-Plattformen unterstützt und ermöglicht die Steuerung von Mikrocontrollern, die serielle Kommunikation unterstützen.
  Damit können Sie beispielsweise Mikrocontroller und Entwicklungsboards wie ESP-Geräte, BBCmicro:bit und Raspberry Pi Picos sowie 3D-Drucker, CNC-Maschinen und andere unterstützte Geräte programmieren.
  Zur Nutzung der API müssen Website-Benutzer ein [synthetisch generiertes Add-on für Website-Berechtigungen](https://support.mozilla.org/en-US/kb/site-permission-add-ons) installieren. Derselbe Ansatz wird verwendet, um den Zugriff auf WebMIDI sicher zu verwalten.
  ([Firefox-Bug 2029625](https://bugzil.la/2029625)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für `altitudeAngle` und `azimuthAngle` bei Pointer-Aktionen des Untertyps `touch` wurde hinzugefügt. Mit diesen Eigenschaften lassen sich Berührungsinteraktionen mit präzisen Winkelangaben simulieren: Sie geben den Winkel an, in dem ein Zeiger eine Oberfläche berührt, sowie seine Drehrichtung. ([Firefox-Bug 2022644](https://bugzil.la/2022644)).
- Ein Bug wurde behoben, durch den `UnknownError`-DOM-Ausnahmen von Inhaltsseiten fälschlicherweise als interne WebDriver-Fehler behandelt wurden. ([Firefox-Bug 2032387](https://bugzil.la/2032387)).

#### WebDriver BiDi

- Der Befehl `browser.setClientWindowState` wurde implementiert. Damit können Clients den Fensterzustand eines Browserfensters auf Betriebssystemebene ändern, etwa auf maximiert, minimiert, Vollbild oder normal. Außerdem können sie das Fenster neu positionieren und seine Größe ändern. ([Firefox-Bug 1855028](https://bugzil.la/1855028)).
- Der Befehl `script.getRealms` unterstützt jetzt Worker-Realms für Dedicated Workers, Shared Workers und Service Workers. Zusätzlich zu Fensterkontexten gibt der Befehl nun Realm-Informationen für Worker-Skripte zurück. ([Firefox-Bug 2016097](https://bugzil.la/2016097)).
- `log.entryAdded`-Ereignisse enthalten jetzt für alle Nachrichten der Console API den obersten Stack-Frame. ([Firefox-Bug 1941813](https://bugzil.la/1941813)).
- Das Feld `text` des Ereignisses `log.entryAdded` wurde verbessert, damit es dem Verhalten der Firefox DevTools und der WebDriver-BiDi-Implementierung von Google Chrome besser entspricht. ([Firefox-Bug 2005054](https://bugzil.la/2005054)).
- Ein Bug wurde behoben, durch den Cookies in Netzwerkereignissen nur `name` und `value` statt aller Eigenschaften enthielten. ([Firefox-Bug 1887118](https://bugzil.la/1887118)).
- Ein Bug wurde behoben, durch den beim Befehl `network.getData` für Weiterleitungen eine Zeitüberschreitung auftrat. ([Firefox-Bug 2009916](https://bugzil.la/2009916)).
- Ein Bug wurde behoben, durch den der Befehl `browsingContext.reload` die Position eines navigierten iframes nicht zurücksetzte. ([Firefox-Bug 2023917](https://bugzil.la/2023917)).
- Wenn kein Proxy angegeben ist, enthält die Antwort auf den Befehl `session.new` nicht mehr die leere Capability `proxy`. ([Firefox-Bug 1916463](https://bugzil.la/1916463)).

#### Marionette

- Unter Linux Wayland können Browserfenster jetzt auch im Headless-Modus neu positioniert werden. ([Firefox-Bug 2023978](https://bugzil.la/2023978)).

## Änderungen für Add-on-Entwickler

- Das Ereignis {{WebExtAPIRef("webRequest.onErrorOccurred")}} verwendet jetzt als Fallback `NS_ERROR_NET_ON_RECEIVING_FROM` anstelle einer Zeichenfolge, die mit `NS_ERROR_NET_ON_` oder `NS_ERROR_NET_UNKNOWN_` beginnt. Diese Änderung ist Teil von Verbesserungen an der Leistung und Zuverlässigkeit des Ereignisses `onErrorOccurred`. ([Firefox-Bug 1881986](https://bugzil.la/1881986))
- {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}} fügen eine geteilte Ansicht jetzt korrekt zu einer Gruppe hinzu beziehungsweise entfernen sie daraus, wenn ein Aufruf einen ihrer Tabs enthält. Zuvor schlug ein solcher Aufruf fehl oder trennte die geteilte Ansicht. ([Firefox-Bug 2029099](https://bugzil.la/2029099))
- {{WebExtAPIRef("tabs.move()")}} verschiebt eine geteilte Ansicht jetzt korrekt nach rechts, wenn ein Aufruf einen ihrer Tabs enthält. Zuvor konnte ein solcher Aufruf die geteilte Ansicht nur nach links oder an das Ende der Tab-Liste verschieben. ([Firefox-Bug 2027855](https://bugzil.la/2027855))

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 151 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der jeweiligen Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Abfragen mit Bereichssyntax für `@container style()`**: `layout.css.attr.enabled`

  [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen der CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützen jetzt die _Bereichssyntax_. Damit können Sie prüfen, ob ein Container eine gültige benutzerdefinierte CSS-Eigenschaft besitzt, ihren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` vergleichen und seine Kindelemente entsprechend gestalten. ([Firefox-Bug 2024601](https://bugzil.la/2024601)).

- **Eigenschaft `field-sizing`**: `layout.css.field-sizing.enabled`

  Mit der CSS-Eigenschaft {{cssxref("field-sizing")}} können Sie steuern, wie die Größe von Formularsteuerelementen bestimmt wird. Die Eigenschaft hat zwei Werte: `content` lässt Elemente ihre Größe an den Inhalt anpassen, während `fixed` eine feste Größe für Elemente festlegt. ([Firefox-Bug 1977176](https://bugzil.la/1977176)).

- **MathML-`href` auf anderen Elementen als `<a>` deaktivieren**: `mathml.href_link_on_non_anchor_element.disabled`

  Wenn diese Einstellung aktiviert ist, erzeugt das globale Attribut [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) auf anderen MathML-Elementen als `<a>` keinen Hyperlink mehr. Dies entspricht der [MathML-Core-Spezifikation](https://w3c.github.io/mathml-core/#the-a-element). ([Firefox-Bug 2026848](https://bugzil.la/2026848)).

- **Korrektur für verschachtelte scrollbare Bereiche**: `layout.css.fake-webkit-scrollbar.enabled`

  Diese Implementierung behebt ein Problem, durch das scrollbare Inhalte unerreichbar waren. Wenn eine Scrollleiste auf `display: none;` oder `width: 0;` gesetzt ist, können die Scrollleisten verschachtelter scrollbarer Bereiche übereinanderliegen. Dadurch sind möglicherweise Teile des Inhalts nicht erreichbar. ([Firefox-Bug 1977511](https://bugzil.la/1977511)).

- **`<timeline-range-name>`-Werte**: `layout.css.scroll-driven-animations.enabled`

  Die CSS-Eigenschaften {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}} sowie die Kurzschreibweise {{cssxref("animation-range")}} unterstützen jetzt [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name)-Werte. Mit diesen [`<timeline-range-name>`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names)-Werten können Sie genau festlegen, innerhalb welchen Abschnitts eine scrollgesteuerte Animation abläuft. ([Firefox-Bug 1804775](https://bugzil.la/1804775)).

- **GeometryUtils-Methoden: `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()`**: `layout.css.convertFromNode.enabled`

  Die GeometryUtils-Methoden `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()` sind in Firefox Nightly nicht mehr standardmäßig aktiviert. ([Firefox-Bug 2026051](https://bugzil.la/2026051)).

- **GeometryUtils-Methode: `getBoxQuads()`**: `layout.css.getBoxQuads.enabled`

  Die GeometryUtils-Methode `getBoxQuads()` ist in Firefox Nightly nicht mehr standardmäßig aktiviert. ([Firefox-Bug 2026051](https://bugzil.la/2026051)).

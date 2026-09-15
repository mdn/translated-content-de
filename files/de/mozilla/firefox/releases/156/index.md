---
title: Firefox 156 – Versionshinweise für Entwickler (Stable)
short-title: Firefox 156 (Stable)
slug: Mozilla/Firefox/Releases/156
l10n:
  sourceCommit: 05af1a8fbb6316c6ecc8a7b1493e711b637e23b9
---

Dieser Artikel enthält Informationen zu den Änderungen in Firefox 156, die Entwickler betreffen.
Firefox 156 wurde am [15. September 2026](https://whattrainisitnow.com/release/?version=156) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Anzeige der Viewport-Größe im Highlighter des Inspektors rundet Breite und Höhe nicht mehr. Zuvor wurde bei gebrochenen Zoomstufen oder auf Displays mit hoher Pixeldichte eine irreführende Größe gemeldet.
  ([Firefox-Bug 2055445](https://bugzil.la/2055445)).
- DevTools kann nun eine Verbindung zu einem Debugger-Server herstellen, der bis zu drei Versionen älter als der Client ist, gegenüber der bisherigen Begrenzung. Dies ist beim Remote-Debugging eines älteren Firefox- oder GeckoView-Builds relevant.
  ([Firefox-Bug 2064221](https://bugzil.la/2064221)).

### HTML

Keine nennenswerten Änderungen.

### SVG

- [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY) werden für Ereignisse, die auf ein {{SVGElement("tspan")}} abzielen, nun vom Ursprung des äußersten {{SVGElement("svg")}}-Elements aus gemessen. Zuvor wurde der falsche Ursprung verwendet.
  ([Firefox-Bug 2066045](https://bugzil.la/2066045)).
- Der Setter von [`SVGSVGElement.currentScale`](/de/docs/Web/API/SVGSVGElement/currentScale) ist nun bei einem verschachtelten `<svg>`-Element eine No-Op-Operation, wie von der Spezifikation gefordert. Beim äußersten `<svg>`-Element funktioniert er weiterhin.
  ([Firefox-Bug 2063188](https://bugzil.la/2063188)).

### CSS

- Das nicht standardisierte Pseudoelement {{cssxref("::-webkit-scrollbar")}} wird nun in {{cssxref("@supports")}}-Bedingungen auf jeder Website als nicht unterstützt gemeldet. Daher gibt `@supports selector(::-webkit-scrollbar)` `false` zurück und `@supports not (selector(::-webkit-scrollbar))` gibt `true` zurück. Dies schließt die Websites ein, die in der Einstellung `layout.css.fake-webkit-scrollbar.enabled-domains` aufgeführt sind, welche in [Firefox 155](/de/docs/Mozilla/Firefox/Releases/155#css) eingeführt wurde. Firefox verarbeitet auf diesen Websites weiterhin `::-webkit-scrollbar`-Regeln, meldet das Pseudoelement jedoch nicht mehr als unterstützt. Websites verwenden diese Prüfung als Signal dafür, dass die gesamte `::-webkit-scrollbar-*`-Familie unterstützt wird, Firefox unterstützt jedoch nicht die anderen Pseudoelemente dieser Familie. Websites, die ihre standardmäßigen Scrollbar-Stile hinter `@supports not (selector(::-webkit-scrollbar))` absichern, wenden diese Stile nun in Firefox an. ([Firefox-Bug 2062782](https://bugzil.la/2062782)).
- Die Eigenschaften {{cssxref("text-box-trim")}} und {{cssxref("text-box-edge")}} trimmen nun in mehreren Fällen korrekt, die zuvor ein falsches Ergebnis erzeugten:
  Das Trimmen verwendet die Schriftmetriken des Pseudoelements {{cssxref("::first-line")}}, wenn eines zutrifft ([Firefox-Bug 2063835](https://bugzil.la/2063835)),
  beim Fragmentieren einer Inline-Box in der letzten Zeile wird die korrekte Zeile getrimmt ([Firefox-Bug 2063909](https://bugzil.la/2063909)),
  und das Trimmen einer Inline-Box entfernt nicht mehr deren Rahmen und Innenabstand ([Firefox-Bug 2064596](https://bugzil.la/2064596)).
  Beachten Sie, dass {{cssxref("text-box-trim")}} in Kombination mit {{cssxref("line-clamp")}} weiterhin keine Wirkung hat.

### JavaScript

- {{jsxref("Promise.try()")}} löst nun den von seinem Callback zurückgegebenen Wert mithilfe von `PromiseResolve` auf. Dadurch wird ein vom Callback zurückgegebenes Promise durchgereicht, statt in ein neues Promise eingeschlossen zu werden.
  `Promise.try(() => p)` ist nun dasselbe Promise wie `p`, wenn `p` ein natives Promise ist. Dies folgt einer normativen Änderung der Spezifikation.
  ([Firefox-Bug 2062293](https://bugzil.la/2062293)).
- [`using`](/de/docs/Web/JavaScript/Reference/Statements/using)-Deklarationen können nicht mehr neu zugewiesen werden, entsprechend der von der Spezifikation geforderten `const`-ähnlichen Semantik. Zuvor konnte eine solche Bindung stillschweigend verändert werden.
  ([Firefox-Bug 2040286](https://bugzil.la/2040286)).

### Sicherheit

- Die Finite-Field-Diffie-Hellman-Gruppen `ffdhe2048` und `ffdhe3072` werden bei TLS-Handshakes standardmäßig nicht mehr angeboten.
  Server, die nur diese Gruppen unterstützen, können keine Verbindung mehr aushandeln; nahezu alle Server unterstützen stattdessen den ECDHE-Schlüsselaustausch.
  ([Firefox-Bug 1992340](https://bugzil.la/1992340)).

### APIs

- [`SubtleCrypto.deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits) löst nun einen {{jsxref("TypeError")}} aus, wenn der übergebene Parameter `length` `NaN`, `Infinity`, negativ oder größer als 2<sup>32</sup>−1 ist.
  Zuvor wurden diese Werte entweder akzeptiert oder das zurückgegebene Promise mit einem `OperationError` abgelehnt.
  ([Firefox-Bug 2065212](https://bugzil.la/2065212)).
- [`Scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) übernimmt nun die Priorität und das Abbruchsignal der umschließenden Aufgabe über ein `await` hinweg, das synchron erfüllt wird, beispielsweise ein bereits aufgelöstes Promise, ein Nicht-Promise-Wert oder ein `then()`-Callback für ein erfülltes Promise.
  Zuvor verlor die Fortsetzung in diesen Fällen den übernommenen Zustand und fiel stillschweigend auf die Standardpriorität `user-visible` zurück.

#### DOM

- [`Range.deleteContents()`](/de/docs/Web/API/Range/deleteContents) und [`Range.extractContents()`](/de/docs/Web/API/Range/extractContents) arbeiten nun auf dem DOM-Baum statt auf dem flachen Baum.
  Daher löscht und extrahiert ein Range, der eine [Shadow-Root](/de/docs/Web/API/ShadowRoot)-Grenze überspannt, nun die von der Spezifikation geforderten Knoten, einschließlich der Fälle, in denen der Range innerhalb eines Shadow-Baums beginnt oder endet.
  Zuvor konnte ein solcher Range Inhalte aus dem Shadow-Baum entfernen, während nicht zugewiesene Kinder des Hosts bestehen blieben, und [`Range.extractContents()`](/de/docs/Web/API/Range/extractContents) konnte auslösen, statt ein Fragment zurückzugeben.
  Dieselbe Korrektur gilt für [`Selection.deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument).
  ([Firefox-Bug 2053997](https://bugzil.la/2053997)).

#### Medien, WebRTC und Web Audio

- Das Mitglied `alwaysNegotiateDataChannels` des Konfigurationsobjekts, das an den Konstruktor [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection) übergeben wird, wird nun unterstützt. Wenn es auf `true` gesetzt ist, enthält das von der Verbindung erzeugte SDP immer eine Data-Channel-m-line, sodass [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) später aufgerufen werden kann, ohne eine neue Verhandlungsrunde zu erfordern. Das Mitglied hat standardmäßig den Wert `false`, wird von [`RTCPeerConnection.getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration) zurückgegeben und kann nicht durch [`RTCPeerConnection.setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) geändert werden. ([Firefox-Bug 2062561](https://bugzil.la/2062561)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Marionette und RemoteAgent verwenden nun beide einen benutzerdefinierten Exit-Code (69), wenn ihr Server nicht gestartet werden kann. ([Firefox-Bug 2040974](https://bugzil.la/2040974)).
- Das Timing von Zwischenereignissen für Aktionen mit einer Dauer größer als 0 wurde verbessert, damit es einem Intervall von 16 ms näherkommt und die Gesamtdauer nicht erhöht wird, selbst wenn der Content-Prozess überlastet ist. ([Firefox-Bug 2054442](https://bugzil.la/2054442)).

#### WebDriver BiDi

- `browsingContext.startScreencast` wählt nun sicher einen gültigen Download-Ordner aus und sollte nicht mehr auslösen, wenn der Standard-Download-Ordner (`DfltDwnld`) nicht verfügbar ist. ([Firefox-Bug 2066782](https://bugzil.la/2066782)).
- Das Mozilla-spezifische Modul `moz:debugging` wurde korrigiert, damit es verschachtelte Pausen korrekt verarbeitet. ([Firefox-Bug 2060460](https://bugzil.la/2060460)).

#### Marionette

- Der Befehl `WebDriver:GetElementTagName` wurde an die [neuesten Änderungen der Spezifikation](https://github.com/w3c/webdriver/pull/1968) angepasst und gibt nun den [qualifizierten Namen](https://dom.spec.whatwg.org/#concept-element-qualified-name) des DOM-Elements zurück. Dieser Befehl wandelte den Rückgabewert zuvor immer in Kleinbuchstaben um. In der Praxis ist diese Änderung für HTML-Elemente abwärtskompatibel, für Elemente mit einem groß-/kleinschreibungssensitiven qualifizierten Namen, wie SVG-Elemente, ist sie jedoch nicht abwärtskompatibel.([Firefox-Bug 2026697](https://bugzil.la/2026697)).

## Änderungen für Add-on-Entwickler

- Der Manifest-Schlüssel [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) fügt die Eigenschaft `backgrounds_area` hinzu. Diese Eigenschaft ermöglicht es einem Theme festzulegen, wo dessen Hintergrundbilder und Farbverläufe gezeichnet werden. Die Einstellung `"window"` zeichnet sie über das gesamte Browserfenster, während `"top_toolbars"` sie auf die horizontalen Symbolleisten am oberen Rand des Fensters beschränkt. Wenn `backgrounds_area` ausgelassen oder auf `"auto"` gesetzt wird, wählt Firefox den Bereich anhand von `properties.additional_backgrounds_alignment` aus. ([Firefox-Bug 2059526](https://bugzil.la/2059526))

## Experimentelle Webfunktionen

Diese Funktionen werden mit Firefox 156 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Bereichsgebundene Custom-Element-Registrys** (Nightly): `dom.scoped-custom-element-registries.enabled`

  [Bereichsgebundene Custom-Element-Registrys](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) werden nun unterstützt, sodass eine Shadow-Root Custom Elements definieren kann, die nicht mit den in der globalen Registry definierten kollidieren.
  Diese Version aktiviert die Funktion standardmäßig in Nightly-Builds. ([Firefox-Bug 2064333](https://bugzil.la/2064333)).

- **`named-feature()`-Unterstützungsabfragen**: `layout.css.supports.at-rule.enabled`

  Die Funktion `named-feature()` in der At-Regel {{cssxref("@supports")}} ermöglicht es Ihnen zu prüfen, ob der Browser eine Funktion unterstützt, die keine andere erkennbare Syntax besitzt, beispielsweise `@supports named-feature(anchor-position-follows-transforms)`.
  ([Firefox-Bug 2042977](https://bugzil.la/2042977) und [Firefox-Bug 2055354](https://bugzil.la/2055354)).

- **Container Timing API**: `dom.enable_container_timing`

  Die Container Timing API meldet, wann die Inhalte eines Container-Elements gezeichnet werden. Dadurch können Sie die Renderzeit eines Bereichs der Seite statt des gesamten Viewports messen.
  ([Firefox-Bug 1940240](https://bugzil.la/1940240)).

- **MathML-`<a>`-Elemente**: `mathml.a.element.enabled`

  Das MathML-Element `<a>` erstellt aus MathML-Inhalten einen Hyperlink und stellt die Schnittstelle `MathMLAnchorElement` mit denselben URL-Komponenteneigenschaften wie HTML-{{HTMLElement("a")}}-Elemente bereit.
  Diese Version fügt Unterstützung für die IDL-Attribute `rel` und `relList` hinzu. ([Firefox-Bug 2063819](https://bugzil.la/2063819)).

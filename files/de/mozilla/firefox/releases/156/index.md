---
title: Firefox-156-Versionshinweise für Entwickler (Stable)
short-title: Firefox 156 (Stable)
slug: Mozilla/Firefox/Releases/156
l10n:
  sourceCommit: ca2450d9c15ffa15965776dbf5d277eb5c3d0b3f
---

Dieser Artikel enthält Informationen zu den Änderungen in Firefox 156, die Entwickler betreffen.
Firefox 156 wurde am [15. September 2026](https://whattrainisitnow.com/release/?version=156) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Anzeige der Viewport-Größe im Highlighter des Inspektors rundet Breite und Höhe nicht mehr, wodurch zuvor bei gebrochenen Zoomstufen oder auf Displays mit hoher Pixeldichte eine irreführende Größe gemeldet wurde.
  ([Firefox-Bug 2055445](https://bugzil.la/2055445)).
- DevTools kann nun eine Verbindung zu einem Debugger-Server herstellen, der bis zu drei Versionen älter als der Client ist, gegenüber der vorherigen Begrenzung. Dies ist beim Remote-Debugging eines älteren Firefox- oder GeckoView-Builds relevant.
  ([Firefox-Bug 2064221](https://bugzil.la/2064221)).

### HTML

Keine nennenswerten Änderungen.

### SVG

- [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY) werden für Ereignisse, deren Ziel ein {{SVGElement("tspan")}} ist, nun vom Ursprung des äußersten {{SVGElement("svg")}}-Elements aus gemessen; zuvor wurde der falsche Ursprung verwendet.
  ([Firefox-Bug 2066045](https://bugzil.la/2066045)).
- Der Setter von [`SVGSVGElement.currentScale`](/de/docs/Web/API/SVGSVGElement/currentScale) ist nun bei einem verschachtelten `<svg>`-Element eine No-Op-Operation, wie von der Spezifikation gefordert. Beim äußersten `<svg>`-Element funktioniert er weiterhin.
  ([Firefox-Bug 2063188](https://bugzil.la/2063188)).

### CSS

- Das nicht standardisierte Pseudoelement {{cssxref("::-webkit-scrollbar")}} wird nun in {{cssxref("@supports")}}-Bedingungen auf jeder Website als nicht unterstützt gemeldet, sodass `@supports selector(::-webkit-scrollbar)` `false` zurückgibt und `@supports not (selector(::-webkit-scrollbar))` `true` zurückgibt. Dies schließt die Websites ein, die in der in [Firefox 155](/de/docs/Mozilla/Firefox/Releases/155#css) eingeführten Einstellung `layout.css.fake-webkit-scrollbar.enabled-domains` aufgeführt sind. Firefox verarbeitet auf diesen Websites weiterhin `::-webkit-scrollbar`-Regeln, meldet das Pseudoelement jedoch nicht mehr als unterstützt. Websites verwenden diese Prüfung als Signal dafür, dass die gesamte Familie `::-webkit-scrollbar-*` unterstützt wird, Firefox unterstützt jedoch die anderen Pseudoelemente dieser Familie nicht. Websites, die ihre Standard-Scrollbar-Stile mit `@supports not (selector(::-webkit-scrollbar))` absichern, erhalten diese Stile nun in Firefox.
  ([Firefox-Bug 2062782](https://bugzil.la/2062782)).
- Die Eigenschaften {{cssxref("text-box-trim")}} und {{cssxref("text-box-edge")}} beschneiden nun in mehreren Fällen korrekt, die zuvor ein falsches Ergebnis erzeugten:
  Das Beschneiden verwendet die Schriftmetriken des Pseudoelements {{cssxref("::first-line")}}, wenn eines angewendet wird ([Firefox-Bug 2063835](https://bugzil.la/2063835)),
  bei Fragmentierung einer Inline-Box in der letzten Zeile wird die korrekte Zeile beschnitten ([Firefox-Bug 2063909](https://bugzil.la/2063909)),
  und das Beschneiden einer Inline-Box entfernt nicht mehr deren Rahmen und Innenabstand ([Firefox-Bug 2064596](https://bugzil.la/2064596)).
  Beachten Sie, dass {{cssxref("text-box-trim")}} in Kombination mit {{cssxref("line-clamp")}} weiterhin keine Wirkung hat.

### JavaScript

- {{jsxref("Promise.try()")}} löst nun den Rückgabewert des Callbacks auf dieselbe Weise auf wie {{jsxref("Promise.resolve()")}}, sodass ein vom Callback zurückgegebenes Promise unverändert durchgereicht wird, statt in ein neues Promise verpackt zu werden.
  `Promise.try(() => p)` ist nun dasselbe Promise wie `p`, wenn `p` ein natives Promise ist. Dies folgt einer normativen Änderung der Spezifikation.
  ([Firefox-Bug 2062293](https://bugzil.la/2062293)).
- [`using`](/de/docs/Web/JavaScript/Reference/Statements/using)-Deklarationen können nicht mehr neu zugewiesen werden, entsprechend der von der Spezifikation verlangten `const`-ähnlichen Semantik. Zuvor konnte eine solche Bindung stillschweigend geändert werden.
  ([Firefox-Bug 2040286](https://bugzil.la/2040286)).

### Sicherheit

- Die Finite-Field-Diffie-Hellman-Gruppen `ffdhe2048` und `ffdhe3072` werden bei TLS-Handshakes standardmäßig nicht mehr angeboten.
  Server, die ausschließlich diese Gruppen unterstützen, können keine Verbindung mehr aushandeln; nahezu alle Server unterstützen stattdessen den ECDHE-Schlüsselaustausch.
  ([Firefox-Bug 1992340](https://bugzil.la/1992340)).

### APIs

- [`SubtleCrypto.deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits) löst nun einen {{jsxref("TypeError")}} aus, wenn der übergebene Parameter `length` `NaN`, `Infinity`, negativ oder größer als 2<sup>32</sup>−1 ist.
  Zuvor wurden diese Werte entweder akzeptiert oder das zurückgegebene Promise mit einem `OperationError` abgelehnt.
  ([Firefox-Bug 2065212](https://bugzil.la/2065212)).
- [`Scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) übernimmt nun die Priorität und das Abbruchsignal der umschließenden Task über ein `await` hinweg, das synchron erfüllt wird, beispielsweise durch ein bereits aufgelöstes Promise, einen Nicht-Promise-Wert oder einen `then()`-Callback auf einem erfüllten Promise.
  Zuvor verlor die Fortsetzung in diesen Fällen den übernommenen Zustand und fiel stillschweigend auf die Standardpriorität `user-visible` zurück.

#### DOM

- [`Range.deleteContents()`](/de/docs/Web/API/Range/deleteContents) und [`Range.extractContents()`](/de/docs/Web/API/Range/extractContents) arbeiten nun mit dem DOM-Baum statt mit dem flachen Baum.
  Dadurch löscht und extrahiert ein Range, der eine [Shadow-Root](/de/docs/Web/API/ShadowRoot)-Grenze überspannt, nun die von der Spezifikation geforderten Knoten, auch wenn der Range innerhalb eines Shadow-Baums beginnt oder endet.
  Zuvor konnte ein solcher Range Inhalte innerhalb des Shadow-Baums entfernen, während nicht zugewiesene Kinder des Hosts an ihrer Stelle blieben, und [`Range.extractContents()`](/de/docs/Web/API/Range/extractContents) konnte einen Fehler auslösen, statt ein Fragment zurückzugeben.
  Dieselbe Korrektur gilt für [`Selection.deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument).
  ([Firefox-Bug 2053997](https://bugzil.la/2053997)).

#### Medien, WebRTC und Web Audio

- Das Mitglied `alwaysNegotiateDataChannels` des Konfigurationsobjekts, das an den Konstruktor [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection) übergeben wird, wird nun unterstützt. Wenn es auf `true` gesetzt ist, enthält das von der Verbindung erzeugte SDP immer eine Data-Channel-m-line, sodass [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) später aufgerufen werden kann, ohne eine neue Verhandlungsrunde zu erfordern. Das Mitglied hat standardmäßig den Wert `false`, wird von [`RTCPeerConnection.getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration) zurückgegeben und kann nicht durch [`RTCPeerConnection.setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) geändert werden. ([Firefox-Bug 2062561](https://bugzil.la/2062561)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Marionette und RemoteAgent verwenden nun beide einen benutzerdefinierten Exit-Code (69), wenn ihr Server nicht gestartet werden kann. ([Firefox-Bug 2040974](https://bugzil.la/2040974)).
- Das Timing von Zwischenereignissen für Aktionen mit einer Dauer größer als 0 wurde verbessert, um näher an einem Intervall von 16 ms zu liegen und eine Aufblähung der Gesamtdauer zu vermeiden, selbst wenn der Content-Prozess überlastet ist. ([Firefox-Bug 2054442](https://bugzil.la/2054442)).

#### WebDriver BiDi

- `browsingContext.startScreencast` wählt nun sicher einen gültigen Download-Ordner aus und sollte keinen Fehler mehr auslösen, wenn der Standard-Download-Ordner (`DfltDwnld`) nicht verfügbar ist. ([Firefox-Bug 2066782](https://bugzil.la/2066782)).
- Das Mozilla-spezifische Modul `moz:debugging` wurde korrigiert, um verschachtelte Pausen korrekt zu verarbeiten. ([Firefox-Bug 2060460](https://bugzil.la/2060460)).

#### Marionette

- Der Befehl `WebDriver:GetElementTagName` wurde aktualisiert, um den [neuesten Spezifikationsänderungen](https://github.com/w3c/webdriver/pull/1968) zu entsprechen, und gibt nun den [qualifizierten Namen](https://dom.spec.whatwg.org/#concept-element-qualified-name) des DOM-Elements zurück. Dieser Befehl wandelte den Rückgabewert zuvor immer in Kleinbuchstaben um. In der Praxis ist diese Änderung für HTML-Elemente abwärtskompatibel, für Elemente mit einem groß-/kleinschreibungssensitiven qualifizierten Namen, etwa SVG-Elemente, jedoch nicht abwärtskompatibel. ([Firefox-Bug 2026697](https://bugzil.la/2026697)).

## Änderungen für Add-on-Entwickler

- Der Manifest-Schlüssel [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) fügt die Eigenschaft `backgrounds_area` hinzu. Diese Eigenschaft ermöglicht es einem Theme festzulegen, wo dessen Hintergrundbilder und Farbverläufe gezeichnet werden. Wenn sie auf `"window"` gesetzt ist, werden sie über das gesamte Browserfenster gezeichnet, während `"top_toolbars"` sie auf die horizontalen Symbolleisten am oberen Fensterrand beschränkt. Wenn `backgrounds_area` ausgelassen oder auf `"auto"` gesetzt wird, wählt Firefox den Bereich anhand von `properties.additional_backgrounds_alignment` aus. ([Firefox-Bug 2059526](https://bugzil.la/2059526))

## Experimentelle Webfunktionen

Diese Funktionen werden in Firefox 156 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Bereichsspezifische Custom-Element-Registries** (Nightly): `dom.scoped-custom-element-registries.enabled`

  [Bereichsspezifische Custom-Element-Registries](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) werden nun unterstützt, sodass eine Shadow-Root Custom Elements definieren kann, die nicht mit den in der globalen Registry definierten kollidieren.
  Diese Version aktiviert die Funktion standardmäßig in Nightly-Builds. ([Firefox-Bug 2064333](https://bugzil.la/2064333)).

- **`named-feature()`-Support-Abfragen**: `layout.css.anchor-positioning.follows-transforms.enabled`

  Die Funktion `named-feature()` in der {{cssxref("@supports")}}-At-Regel ermöglicht es Ihnen zu prüfen, ob der Browser eine Funktion unterstützt, die keine andere erkennbare Syntax hat, beispielsweise `@supports named-feature(anchor-position-follows-transforms)`.
  ([Firefox-Bug 2042977](https://bugzil.la/2042977) und [Firefox-Bug 2055354](https://bugzil.la/2055354)).

- **Container Timing API**: `dom.enable_container_timing`

  Die Container Timing API meldet, wann die Inhalte eines Container-Elements gerendert werden, sodass Sie die Renderzeit eines Bereichs der Seite statt des gesamten Viewports messen können.
  ([Firefox-Bug 1940240](https://bugzil.la/1940240)).

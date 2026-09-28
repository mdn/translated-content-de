---
title: "Firefox 156: Versionshinweise für Entwickler"
short-title: Firefox 156
slug: Mozilla/Firefox/Releases/156
l10n:
  sourceCommit: 91c6fa25d660ab9d0f8b60b19b103518cc3c1603
---

Dieser Artikel informiert über die Änderungen in Firefox 156, die für Entwickler relevant sind.
Firefox 156 wurde am [15. September 2026](https://whattrainisitnow.com/release/?version=156) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Anzeige der Viewport-Größe im Highlighter des Inspectors rundet Breite und Höhe nicht mehr. Zuvor wurde bei gebrochenen Zoomstufen oder auf hochauflösenden Displays eine irreführende Größe angezeigt.
  ([Firefox-Bug 2055445](https://bugzil.la/2055445)).
- DevTools kann sich jetzt mit einem Debugger-Server verbinden, der bis zu drei Versionen älter ist als der Client. Damit wurde die bisherige Grenze angehoben. Dies ist relevant, wenn Sie einen älteren Firefox- oder GeckoView-Build per Remote-Debugging untersuchen.
  ([Firefox-Bug 2064221](https://bugzil.la/2064221)).

### HTML

Keine nennenswerten Änderungen.

### SVG

- [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY) werden bei Ereignissen, deren Ziel ein {{SVGElement("tspan")}} ist, jetzt vom Ursprung des äußersten {{SVGElement("svg")}}-Elements aus gemessen. Zuvor wurde der falsche Ursprung verwendet.
  ([Firefox-Bug 2066045](https://bugzil.la/2066045)).
- Der Setter von [`SVGSVGElement.currentScale`](/de/docs/Web/API/SVGSVGElement/currentScale) hat bei einem verschachtelten `<svg>`-Element jetzt keine Wirkung mehr, wie es die Spezifikation vorschreibt. Beim äußersten `<svg>`-Element funktioniert er weiterhin.
  ([Firefox-Bug 2063188](https://bugzil.la/2063188)).

### CSS

- Das nicht standardisierte Pseudoelement {{cssxref("::-webkit-scrollbar")}} wird in {{cssxref("@supports")}}-Bedingungen jetzt auf allen Websites als nicht unterstützt gemeldet. Daher liefert `@supports selector(::-webkit-scrollbar)` den Wert `false` und `@supports not (selector(::-webkit-scrollbar))` den Wert `true`. Das gilt auch für die Websites, die in der mit [Firefox 155](/de/docs/Mozilla/Firefox/Releases/155#css) eingeführten Einstellung `layout.css.fake-webkit-scrollbar.enabled-domains` aufgeführt sind. Firefox berücksichtigt `::-webkit-scrollbar`-Regeln auf diesen Websites weiterhin, meldet das Pseudoelement aber nicht mehr als unterstützt. Websites nutzen diese Prüfung als Hinweis darauf, dass die gesamte `::-webkit-scrollbar-*`-Familie unterstützt wird. Firefox unterstützt jedoch die anderen Pseudoelemente dieser Familie nicht. Auf Websites, die ihre standardisierten Scrollbar-Stile an `@supports not (selector(::-webkit-scrollbar))` knüpfen, werden diese Stile jetzt auch in Firefox angewendet. ([Firefox-Bug 2062782](https://bugzil.la/2062782)).
- Die Eigenschaften {{cssxref("text-box-trim")}} und {{cssxref("text-box-edge")}} führen das Trimming jetzt in mehreren Fällen korrekt aus, in denen zuvor ein falsches Ergebnis entstand:
  Wenn das Pseudoelement {{cssxref("::first-line")}} angewendet wird, werden dessen Schriftmetriken verwendet ([Firefox-Bug 2063835](https://bugzil.la/2063835));
  wenn eine Inline-Box in der letzten Zeile fragmentiert ist, wird die richtige Zeile beschnitten ([Firefox-Bug 2063909](https://bugzil.la/2063909));
  und beim Trimming einer Inline-Box werden deren Rahmen und Innenabstand nicht mehr entfernt ([Firefox-Bug 2064596](https://bugzil.la/2064596)).
  Beachten Sie, dass {{cssxref("text-box-trim")}} in Kombination mit {{cssxref("line-clamp")}} weiterhin keine Wirkung hat.

### JavaScript

- {{jsxref("Promise.try()")}} verarbeitet den Rückgabewert des Callbacks jetzt genauso wie {{jsxref("Promise.resolve()")}}. Ein vom Callback zurückgegebenes Promise wird daher unverändert weitergegeben, statt in ein neues Promise eingeschlossen zu werden.
  Wenn `p` ein natives Promise ist, ist `Promise.try(() => p)` jetzt dasselbe Promise wie `p`. Dies folgt einer normativen Änderung der Spezifikation.
  ([Firefox-Bug 2062293](https://bugzil.la/2062293)).
- [`using`](/de/docs/Web/JavaScript/Reference/Statements/using)-Deklarationen können jetzt nicht mehr neu zugewiesen werden. Dies entspricht der von der Spezifikation geforderten, `const` ähnlichen Semantik. Zuvor konnte eine solche Bindung ohne Fehlermeldung verändert werden.
  ([Firefox-Bug 2040286](https://bugzil.la/2040286)).

### Sicherheit

- Die Finite-Field-Diffie-Hellman-Gruppen `ffdhe2048` und `ffdhe3072` werden bei TLS-Handshakes standardmäßig nicht mehr angeboten.
  Server, die ausschließlich diese Gruppen unterstützen, können keine Verbindung mehr aushandeln. Nahezu alle Server unterstützen stattdessen den ECDHE-Schlüsselaustausch.
  ([Firefox-Bug 1992340](https://bugzil.la/1992340)).

### APIs

- [`SubtleCrypto.deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits) löst jetzt einen {{jsxref("TypeError")}} aus, wenn der übergebene Parameter `length` `NaN`, `Infinity`, negativ oder größer als 2<sup>32</sup>−1 ist.
  Zuvor wurden diese Werte entweder akzeptiert oder das zurückgegebene Promise wurde mit einem `OperationError` zurückgewiesen.
  ([Firefox-Bug 2065212](https://bugzil.la/2065212)).
- [`Scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) übernimmt jetzt auch über ein synchron erfülltes `await` hinweg die Priorität und das Abbruchsignal der umschließenden Task. Dazu zählen etwa ein bereits erfülltes Promise, ein Wert, der kein Promise ist, oder ein `then()`-Callback für ein bereits abgeschlossenes Promise.
  Zuvor verlor die Fortsetzung in diesen Fällen den übernommenen Zustand und fiel ohne Hinweis auf die Standardpriorität `user-visible` zurück.

#### DOM

- [`Range.deleteContents()`](/de/docs/Web/API/Range/deleteContents) und [`Range.extractContents()`](/de/docs/Web/API/Range/extractContents) arbeiten jetzt auf dem DOM-Baum statt auf dem flachen Baum.
  Dadurch löscht und extrahiert ein Bereich, der eine [Shadow-Root](/de/docs/Web/API/ShadowRoot)-Grenze überschreitet, jetzt die von der Spezifikation vorgesehenen Knoten – auch wenn der Bereich innerhalb eines Shadow-Baums beginnt oder endet.
  Zuvor konnte ein solcher Bereich Inhalte innerhalb des Shadow-Baums entfernen, während nicht zugewiesene Kindelemente des Hosts erhalten blieben. Außerdem konnte [`Range.extractContents()`](/de/docs/Web/API/Range/extractContents) eine Ausnahme auslösen, statt ein Fragment zurückzugeben.
  Dieselbe Korrektur gilt für [`Selection.deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument).
  ([Firefox-Bug 2053997](https://bugzil.la/2053997)).

#### Medien, WebRTC und Web Audio

- Das Member `alwaysNegotiateDataChannels` des Konfigurationsobjekts, das an den Konstruktor [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection) übergeben wird, wird jetzt unterstützt. Wenn es auf `true` gesetzt ist, enthält das von der Verbindung erzeugte SDP immer eine m-Zeile für einen Datenkanal. Dadurch kann [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) später aufgerufen werden, ohne dass eine erneute Aushandlung erforderlich ist. Der Standardwert des Members ist `false`. Es wird von [`RTCPeerConnection.getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration) zurückgegeben und kann durch [`RTCPeerConnection.setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) nicht geändert werden. ([Firefox-Bug 2062561](https://bugzil.la/2062561)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Marionette und RemoteAgent verwenden jetzt beide einen eigenen Exit-Code (69), wenn ihr Server nicht gestartet werden kann. ([Firefox-Bug 2040974](https://bugzil.la/2040974)).
- Das Timing von Zwischenereignissen bei Aktionen mit einer Dauer von mehr als 0 wurde verbessert. Es liegt nun näher an einem Intervall von 16 ms und verlängert die Gesamtdauer auch dann nicht unnötig, wenn der Inhaltsprozess überlastet ist. ([Firefox-Bug 2054442](https://bugzil.la/2054442)).

#### WebDriver BiDi

- `browsingContext.startScreencast` wählt jetzt zuverlässig einen gültigen Download-Ordner aus und sollte keine Ausnahme mehr auslösen, wenn der Standard-Download-Ordner (`DfltDwnld`) nicht verfügbar ist. ([Firefox-Bug 2066782](https://bugzil.la/2066782)).
- Das Mozilla-spezifische Modul `moz:debugging` wurde korrigiert, sodass es verschachtelte Pausen richtig verarbeitet. ([Firefox-Bug 2060460](https://bugzil.la/2060460)).

#### Marionette

- Der Befehl `WebDriver:GetElementTagName` wurde an die [neuesten Änderungen der Spezifikation](https://github.com/w3c/webdriver/pull/1968) angepasst und gibt jetzt den [qualifizierten Namen](https://dom.spec.whatwg.org/#concept-element-qualified-name) des DOM-Elements zurück. Zuvor wurde der Rückgabewert durch diesen Befehl immer in Kleinbuchstaben umgewandelt. Für HTML-Elemente ist diese Änderung in der Praxis abwärtskompatibel, nicht jedoch für Elemente mit einem qualifizierten Namen, bei dem die Groß- und Kleinschreibung relevant ist, etwa SVG-Elemente. ([Firefox-Bug 2026697](https://bugzil.la/2026697)).

## Änderungen für Add-on-Entwickler

- Der Manifest-Schlüssel [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) erhält die Eigenschaft `backgrounds_area`. Damit kann ein Theme festlegen, wo seine Hintergrundbilder und Farbverläufe gezeichnet werden. Bei `"window"` erstrecken sie sich über das gesamte Browserfenster, während `"top_toolbars"` sie auf die horizontalen Symbolleisten am oberen Fensterrand beschränkt. Wenn `backgrounds_area` weggelassen oder auf `"auto"` gesetzt wird, wählt Firefox den Bereich anhand von `properties.additional_backgrounds_alignment`. ([Firefox-Bug 2059526](https://bugzil.la/2059526))

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 156 enthalten, aber standardmäßig deaktiviert.
Wenn Sie sie ausprobieren möchten, suchen Sie auf der Seite `about:config` nach der jeweiligen Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Bereichsgebundene Registries für benutzerdefinierte Elemente** (Nightly): `dom.scoped-custom-element-registries.enabled`

  [Bereichsgebundene Registries für benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) werden jetzt unterstützt. So kann eine Shadow-Root benutzerdefinierte Elemente definieren, die nicht mit den im globalen Registry definierten Elementen kollidieren.
  In Nightly-Builds ist diese Funktion ab dieser Version standardmäßig aktiviert. ([Firefox-Bug 2064333](https://bugzil.la/2064333)).

- **Unterstützungsabfragen mit `named-feature()`**: `layout.css.anchor-positioning.follows-transforms.enabled`

  Mit der Funktion `named-feature()` in der {{cssxref("@supports")}}-At-Regel können Sie prüfen, ob der Browser eine Funktion unterstützt, für die es keine andere überprüfbare Syntax gibt, beispielsweise `@supports named-feature(anchor-position-follows-transforms)`.
  ([Firefox-Bug 2042977](https://bugzil.la/2042977) und [Firefox-Bug 2055354](https://bugzil.la/2055354)).

- **Container Timing API**: `dom.enable_container_timing`

  Die Container Timing API meldet, wann die Inhalte eines Container-Elements gezeichnet werden. Damit können Sie die Renderzeit eines Seitenbereichs messen, statt nur die des gesamten Viewports.
  ([Firefox-Bug 1940240](https://bugzil.la/1940240)).

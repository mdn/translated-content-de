---
title: Versionshinweise zu Firefox 156 für Entwickler (Stable)
short-title: Firefox 156 (Stable)
slug: Mozilla/Firefox/Releases/156
l10n:
  sourceCommit: 79f0b295d759e9bb6e3c49197434a1d34c449731
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 156, die Entwickler betreffen.
Firefox 156 wurde am [15. September 2026](https://whattrainisitnow.com/release/?version=156) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) löst jetzt Ersetzungsfunktionen — {{cssxref("var")}}, {{cssxref("attr")}} und {{cssxref("env")}} — bei der Berechnung der für eine Deklaration angezeigten Schritte auf. Dadurch wird ein Wert, der aus einer benutzerdefinierten Eigenschaft oder einem Attribut stammt, bis zu seiner Quelle zurückverfolgt, anstatt ungelöst angezeigt zu werden.
  ([Firefox-Bug 2041622](https://bugzil.la/2041622)).
- Die Anzeige der Viewport-Größe im Highlighter des Inspektors rundet Breite und Höhe nicht mehr. Zuvor wurde bei gebrochenen Zoomstufen oder auf Bildschirmen mit hoher Pixeldichte eine irreführende Größe gemeldet.
  ([Firefox-Bug 2055445](https://bugzil.la/2055445)).
- DevTools kann jetzt eine Verbindung zu einem Debugger-Server herstellen, der bis zu drei Versionen älter als der Client ist, gegenüber der bisherigen Grenze. Dies ist relevant beim Remote-Debugging eines älteren Firefox- oder GeckoView-Builds.
  ([Firefox-Bug 2064221](https://bugzil.la/2064221)).
- Es wurde behoben, dass der Lineal-Highlighter nach dem Deaktivieren sichtbar blieb, wenn der Inspektor nicht das ausgewählte Panel war.
  ([Firefox-Bug 2063982](https://bugzil.la/2063982)).
- Es wurde behoben, dass <kbd>F2</kbd> bei Knoten, die dies nicht unterstützen, „Als HTML bearbeiten“ aufrief und veraltete Inhalte aus einer vorherigen Bearbeitung anzeigte.
  ([Firefox-Bug 2064213](https://bugzil.la/2064213)).
- Die Position des Modals „Geräteeinstellungen“ im [Responsive-Design-Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde korrigiert.
  ([Firefox-Bug 2062153](https://bugzil.la/2062153)).

### HTML

Keine nennenswerten Änderungen.

### SVG

- [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY) werden für Ereignisse, die auf ein {{SVGElement("tspan")}} abzielen, jetzt vom Ursprung des äußersten {{SVGElement("svg")}}-Elements aus gemessen. Zuvor wurde der falsche Ursprung verwendet.
  ([Firefox-Bug 2066045](https://bugzil.la/2066045)).
- Der Setter [`SVGSVGElement.currentScale`](/de/docs/Web/API/SVGSVGElement/currentScale) führt jetzt bei einem verschachtelten `<svg>`-Element keine Aktion aus, wie von der Spezifikation gefordert. Beim äußersten `<svg>`-Element funktioniert er weiterhin.
  ([Firefox-Bug 2063188](https://bugzil.la/2063188)).

### CSS

- Das nicht standardisierte Pseudoelement {{cssxref("::-webkit-scrollbar")}} wird jetzt in {{cssxref("@supports")}}-Bedingungen auf jeder Website als nicht unterstützt gemeldet, sodass `@supports selector(::-webkit-scrollbar)` `false` und `@supports not (selector(::-webkit-scrollbar))` `true` zurückgibt. Dies schließt die Websites ein, die in der in [Firefox 155](/de/docs/Mozilla/Firefox/Releases/155#css) eingeführten Einstellung `layout.css.fake-webkit-scrollbar.enabled-domains` aufgeführt sind. Firefox verarbeitet auf diesen Websites weiterhin Regeln für `::-webkit-scrollbar`, meldet das Pseudoelement jedoch nicht mehr als unterstützt. Websites verwenden diese Prüfung als Signal dafür, dass die gesamte Familie `::-webkit-scrollbar-*` unterstützt wird, Firefox unterstützt jedoch die anderen Pseudoelemente dieser Familie nicht. Websites, die ihre standardmäßigen Scrollbar-Stile mit `@supports not (selector(::-webkit-scrollbar))` schützen, erhalten diese Stile jetzt in Firefox. ([Firefox-Bug 2062782](https://bugzil.la/2062782)).
- Die Eigenschaften {{cssxref("text-box-trim")}} und {{cssxref("text-box-edge")}} beschneiden jetzt in mehreren Fällen korrekt, die zuvor ein falsches Ergebnis erzeugten:
  Beim Beschneiden werden die Schriftmetriken des Pseudoelements {{cssxref("::first-line")}} verwendet, wenn eines angewendet wird ([Firefox-Bug 2063835](https://bugzil.la/2063835)),
  bei Fragmentierung einer Inline-Box in der letzten Zeile wird die richtige Zeile beschnitten ([Firefox-Bug 2063909](https://bugzil.la/2063909)),
  und das Beschneiden einer Inline-Box entfernt nicht mehr ihren Rahmen und ihr Padding ([Firefox-Bug 2064596](https://bugzil.la/2064596)).
  Beachten Sie, dass {{cssxref("text-box-trim")}} in Kombination mit {{cssxref("line-clamp")}} weiterhin keine Wirkung hat.
- {{cssxref("@supports")}} meldet keine Unterstützung mehr für das Pseudoelement `::-webkit-scrollbar`, sodass `@supports selector(::-webkit-scrollbar)` jetzt false ist.
  Websites verwendeten dies häufig als Signal dafür, dass `::-webkit-scrollbar-thumb` gestaltet werden kann, was Firefox nicht implementiert. Daher führte die Behauptung einer Unterstützung zu schlechterem Styling als das Melden der fehlenden Unterstützung.
  Verwenden Sie stattdessen {{cssxref("scrollbar-width")}} und {{cssxref("scrollbar-color")}}.
  ([Firefox-Bug 2062782](https://bugzil.la/2062782)).

### JavaScript

- {{jsxref("Promise.try()")}} löst den von seinem Callback zurückgegebenen Wert jetzt mithilfe von `PromiseResolve` auf. Dadurch wird ein vom Callback zurückgegebenes Promise durchgereicht, anstatt in ein neues Promise eingeschlossen zu werden.
  `Promise.try(() => p)` ist jetzt dasselbe Promise wie `p`, wenn `p` ein natives Promise ist. Dies folgt einer normativen Änderung der Spezifikation.
  ([Firefox-Bug 2062293](https://bugzil.la/2062293)).
- [`using`](/de/docs/Web/JavaScript/Reference/Statements/using)-Deklarationen können nicht mehr neu zugewiesen werden, entsprechend der von der Spezifikation geforderten `const`-ähnlichen Semantik. Zuvor konnte eine solche Bindung stillschweigend verändert werden.
  ([Firefox-Bug 2040286](https://bugzil.la/2040286)).

### Sicherheit

- Die Diffie-Hellman-Gruppen für endliche Körper `ffdhe2048` und `ffdhe3072` werden bei TLS-Handshakes standardmäßig nicht mehr angeboten.
  Server, die nur diese Gruppen unterstützen, können keine Verbindung aushandeln; nahezu alle Server unterstützen stattdessen den ECDHE-Schlüsselaustausch.
  ([Firefox-Bug 1992340](https://bugzil.la/1992340)).

### APIs

- [`SubtleCrypto.deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits) löst jetzt einen {{jsxref("TypeError")}} aus, wenn der übergebene Parameter `length` `NaN`, `Infinity`, negativ oder größer als 2<sup>32</sup>−1 ist.
  Zuvor wurden diese Werte entweder akzeptiert oder das zurückgegebene Promise mit einem `OperationError` abgelehnt.
  ([Firefox-Bug 2065212](https://bugzil.la/2065212)).
- [`Scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) übernimmt jetzt die Priorität und das Abbruchsignal der umschließenden Aufgabe über ein `await` hinweg, das synchron erfüllt wird, etwa ein bereits aufgelöstes Promise, ein Nicht-Promise-Wert oder ein `then()`-Callback für ein erfülltes Promise.
  Zuvor verlor die Fortsetzung in diesen Fällen den geerbten Zustand und fiel stillschweigend auf die Standardpriorität `user-visible` zurück.

#### DOM

- [`Range.deleteContents()`](/de/docs/Web/API/Range/deleteContents) und [`Range.extractContents()`](/de/docs/Web/API/Range/extractContents) arbeiten jetzt auf dem DOM-Baum statt auf dem flachen Baum.
  Dadurch löscht und extrahiert ein Bereich, der eine [Shadow-Root](/de/docs/Web/API/ShadowRoot)-Grenze überspannt, jetzt die von der Spezifikation geforderten Knoten, auch wenn der Bereich innerhalb eines Shadow-Baums beginnt oder endet.
  Zuvor konnte ein solcher Bereich Inhalte innerhalb des Shadow-Baums entfernen, während nicht zugewiesene Kinder des Hosts an Ort und Stelle blieben, und [`Range.extractContents()`](/de/docs/Web/API/Range/extractContents) konnte einen Fehler auslösen, statt ein Fragment zurückzugeben.
  Dieselbe Korrektur gilt für [`Selection.deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument).
  ([Firefox-Bug 2053997](https://bugzil.la/2053997)).

#### Medien, WebRTC und Web Audio

- Das Mitglied `alwaysNegotiateDataChannels` des Konfigurationsobjekts, das an den Konstruktor [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection) übergeben wird, wird jetzt unterstützt. Wenn es auf `true` gesetzt ist, enthält das von der Verbindung erzeugte SDP immer eine Data-Channel-m-Line, sodass [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) später aufgerufen werden kann, ohne dass eine neue Verhandlungsrunde erforderlich ist. Das Mitglied ist standardmäßig `false`, wird von [`RTCPeerConnection.getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration) zurückgegeben und kann nicht durch [`RTCPeerConnection.setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) geändert werden. ([Firefox-Bug 2062561](https://bugzil.la/2062561)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Marionette und RemoteAgent verwenden jetzt beide einen benutzerdefinierten Exit-Code (69), wenn ihr Server nicht gestartet werden kann. ([Firefox-Bug 2040974](https://bugzil.la/2040974)).
- Das Timing von Zwischenereignissen für Aktionen mit einer Dauer größer als 0 wurde verbessert, um näher an einem Intervall von 16 ms zu liegen und eine Verlängerung der Gesamtdauer zu vermeiden, selbst wenn der Content-Prozess überlastet ist. ([Firefox-Bug 2054442](https://bugzil.la/2054442)).

#### WebDriver BiDi

- `browsingContext.startScreencast` wählt jetzt sicher einen gültigen Download-Ordner aus und sollte keinen Fehler mehr auslösen, wenn der Standard-Download-Ordner (`DfltDwnld`) nicht verfügbar ist. ([Firefox-Bug 2066782](https://bugzil.la/2066782)).
- Das Mozilla-spezifische Modul `moz:debugging` wurde korrigiert, um verschachtelte Pausen korrekt zu behandeln. ([Firefox-Bug 2060460](https://bugzil.la/2060460)).

#### Marionette

- Der Befehl `WebDriver:GetElementTagName` wurde aktualisiert, um den [neuesten Änderungen der Spezifikation](https://github.com/w3c/webdriver/pull/1968) zu entsprechen, und gibt jetzt den [qualifizierten Namen](https://dom.spec.whatwg.org/#concept-element-qualified-name) des DOM-Elements zurück. Dieser Befehl wandelte den Rückgabewert zuvor immer in Kleinbuchstaben um. In der Praxis ist diese Änderung für HTML-Elemente abwärtskompatibel, stellt jedoch für Elemente mit einem groß-/kleinschreibungssensitiven qualifizierten Namen, etwa SVG-Elemente, eine nicht abwärtskompatible Änderung dar.([Firefox-Bug 2026697](https://bugzil.la/2026697)).

## Änderungen für Add-on-Entwickler

- Der Manifest-Schlüssel [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) fügt die Eigenschaft `backgrounds_area` hinzu. Diese Eigenschaft ermöglicht es einem Theme festzulegen, wo seine Hintergrundbilder und Farbverläufe gezeichnet werden. Die Einstellung `"window"` zeichnet sie über das gesamte Browserfenster hinweg, während `"top_toolbars"` sie auf die horizontalen Symbolleisten am oberen Rand des Fensters beschränkt. Wenn `backgrounds_area` ausgelassen oder auf `"auto"` gesetzt wird, wählt Firefox den Bereich anhand von `properties.additional_backgrounds_alignment` aus. ([Firefox-Bug 2059526](https://bugzil.la/2059526))

## Experimentelle Webfunktionen

Diese Funktionen werden in Firefox 156 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Registrierungen benutzerdefinierter Elemente mit Geltungsbereich** (Nightly): `dom.scoped-custom-element-registries.enabled`

  [Registrierungen benutzerdefinierter Elemente mit Geltungsbereich](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) werden jetzt unterstützt, sodass eine Shadow-Root benutzerdefinierte Elemente definieren kann, die nicht mit denjenigen in der globalen Registrierung kollidieren.
  Diese Version aktiviert die Funktion standardmäßig in Nightly-Builds. ([Firefox-Bug 2064333](https://bugzil.la/2064333)).

- **`named-feature()`-Unterstützungsabfragen**: `layout.css.supports.at-rule.enabled`

  Die Funktion `named-feature()` in der At-Regel {{cssxref("@supports")}} ermöglicht es Ihnen zu testen, ob der Browser eine Funktion unterstützt, die keine andere erkennbare Syntax besitzt, beispielsweise `@supports named-feature(anchor-position-follows-transforms)`.
  ([Firefox-Bug 2042977](https://bugzil.la/2042977) und [Firefox-Bug 2055354](https://bugzil.la/2055354)).

- **Container Timing API**: `dom.enable_container_timing`

  Die Container Timing API meldet, wann die Inhalte eines Container-Elements gerendert werden, sodass Sie die Renderzeit eines Bereichs der Seite statt des gesamten Viewports messen können.
  ([Firefox-Bug 1940240](https://bugzil.la/1940240)).

- **MathML-`<a>`-Elemente**: `mathml.a.element.enabled`

  Das MathML-`<a>`-Element erstellt aus MathML-Inhalten einen Hyperlink und stellt die Schnittstelle `MathMLAnchorElement` mit denselben URL-Komponenteneigenschaften wie HTML-{{HTMLElement("a")}}-Elemente bereit.
  Diese Version fügt Unterstützung für die IDL-Attribute `rel` und `relList` hinzu. ([Firefox-Bug 2063819](https://bugzil.la/2063819)).

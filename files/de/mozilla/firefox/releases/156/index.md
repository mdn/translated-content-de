---
title: Firefox 156 – Versionshinweise für Entwickler (Beta)
short-title: Firefox 156 (Beta)
slug: Mozilla/Firefox/Releases/156
l10n:
  sourceCommit: 78c72a7d42bdbe19e94c98de316fb0a74b93f4e0
---

Dieser Artikel enthält Informationen zu den Änderungen in Firefox 156, die Entwickler betreffen.
Firefox 156 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [15. September 2026](https://whattrainisitnow.com/release/?version=156) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) löst jetzt Ersetzungsfunktionen — {{cssxref("var")}}, {{cssxref("attr")}} und {{cssxref("env")}} — bei der Berechnung der für eine Deklaration angezeigten Schritte auf. Dadurch wird ein Wert, der aus einer benutzerdefinierten Eigenschaft oder einem Attribut stammt, bis zu seiner Quelle zurückverfolgt, statt ungelöst angezeigt zu werden.
  ([Firefox-Bug 2041622](https://bugzil.la/2041622)).
- Die Anzeige der Viewport-Größe im Highlighter des Inspektors rundet Breite und Höhe nicht mehr. Zuvor wurde bei gebrochenen Zoomstufen oder auf Displays mit hoher Pixeldichte eine irreführende Größe gemeldet.
  ([Firefox-Bug 2055445](https://bugzil.la/2055445)).
- DevTools kann sich jetzt mit einem Debugger-Server verbinden, der bis zu drei Versionen älter als der Client ist, statt wie zuvor nur bis zur bisherigen Grenze. Dies ist beim Remote-Debugging eines älteren Firefox- oder GeckoView-Builds relevant.
  ([Firefox-Bug 2064221](https://bugzil.la/2064221)).
- Es wurde ein Fehler behoben, durch den der Lineal-Highlighter nach dem Deaktivieren sichtbar blieb, wenn der Inspektor nicht das ausgewählte Panel war.
  ([Firefox-Bug 2063982](https://bugzil.la/2063982)).
- Es wurde ein Fehler behoben, durch den <kbd>F2</kbd> bei Knoten, die dies nicht unterstützen, „Als HTML bearbeiten“ aufrief und veraltete Inhalte aus einer vorherigen Bearbeitung anzeigte.
  ([Firefox-Bug 2064213](https://bugzil.la/2064213)).
- Die Position des Dialogfensters „Geräteeinstellungen“ im [Responsive-Design-Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde korrigiert.
  ([Firefox-Bug 2062153](https://bugzil.la/2062153)).

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

### SVG

- [`MouseEvent.offsetX`](/de/docs/Web/API/MouseEvent/offsetX) und [`MouseEvent.offsetY`](/de/docs/Web/API/MouseEvent/offsetY) werden für Ereignisse, die auf ein {{SVGElement("tspan")}} abzielen, jetzt vom Ursprung des äußersten {{SVGElement("svg")}}-Elements gemessen. Zuvor wurde der falsche Ursprung verwendet.
  ([Firefox-Bug 2066045](https://bugzil.la/2066045)).
- Der Setter von [`SVGSVGElement.currentScale`](/de/docs/Web/API/SVGSVGElement/currentScale) ist jetzt bei einem verschachtelten `<svg>`-Element eine No-Op-Operation, wie es die Spezifikation verlangt. Beim äußersten `<svg>`-Element funktioniert er weiterhin.
  ([Firefox-Bug 2063188](https://bugzil.la/2063188)).

<!-- #### Removals -->

### CSS

- Das nicht standardisierte {{cssxref("::-webkit-scrollbar")}}-Pseudoelement wird jetzt in {{cssxref("@supports")}}-Bedingungen auf jeder Website als nicht unterstützt gemeldet. Daher gibt `@supports selector(::-webkit-scrollbar)` `false` zurück und `@supports not (selector(::-webkit-scrollbar))` gibt `true` zurück. Dies schließt die Websites ein, die in der in [Firefox 155](/de/docs/Mozilla/Firefox/Releases/155#css) eingeführten Einstellung `layout.css.fake-webkit-scrollbar.enabled-domains` aufgeführt sind. Firefox verarbeitet auf diesen Websites weiterhin `::-webkit-scrollbar`-Regeln, meldet das Pseudoelement jedoch nicht mehr als unterstützt. Websites verwenden diese Prüfung als Signal dafür, dass die gesamte `::-webkit-scrollbar-*`-Familie unterstützt wird, aber Firefox unterstützt die anderen Pseudoelemente dieser Familie nicht. Websites, die ihre Standard-Scrollbar-Stile mit `@supports not (selector(::-webkit-scrollbar))` schützen, wenden diese Stile jetzt in Firefox an. ([Firefox-Bug 2062782](https://bugzil.la/2062782)).
- Die Eigenschaften {{cssxref("text-box-trim")}} und {{cssxref("text-box-edge")}} beschneiden jetzt in mehreren Fällen korrekt, die zuvor ein falsches Ergebnis lieferten:
  Beim Beschneiden werden die Font-Metriken des {{cssxref("::first-line")}}-Pseudoelements verwendet, wenn eines angewendet wird ([Firefox-Bug 2063835](https://bugzil.la/2063835)),
  die korrekte Zeile wird beschnitten, wenn eine Inline-Box in der letzten Zeile fragmentiert ist ([Firefox-Bug 2063909](https://bugzil.la/2063909)),
  und das Beschneiden einer Inline-Box entfernt nicht mehr ihren Rahmen und ihr Padding ([Firefox-Bug 2064596](https://bugzil.la/2064596)).
  Beachten Sie, dass {{cssxref("text-box-trim")}} in Kombination mit {{cssxref("line-clamp")}} weiterhin keine Wirkung hat.
- {{cssxref("@supports")}} meldet keine Unterstützung mehr für das Pseudoelement `::-webkit-scrollbar`, sodass `@supports selector(::-webkit-scrollbar)` jetzt false ist.
  Websites verwendeten dies häufig als Signal dafür, dass `::-webkit-scrollbar-thumb` gestaltet werden kann, was Firefox nicht implementiert. Die Angabe einer Unterstützung führte daher zu schlechterem Styling als das Melden der fehlenden Unterstützung.
  Verwenden Sie stattdessen {{cssxref("scrollbar-width")}} und {{cssxref("scrollbar-color")}}.
  ([Firefox-Bug 2062782](https://bugzil.la/2062782)).

<!-- #### Removals -->

### JavaScript

- {{jsxref("Promise.try()")}} löst jetzt den von seinem Callback zurückgegebenen Wert mithilfe von `PromiseResolve` auf, sodass ein vom Callback zurückgegebenes Promise durchgereicht wird, statt in ein neues Promise eingeschlossen zu werden.
  `Promise.try(() => p)` ist jetzt dasselbe Promise wie `p`, wenn `p` ein natives Promise ist. Dies folgt einer normativen Änderung der Spezifikation.
  ([Firefox-Bug 2062293](https://bugzil.la/2062293)).
- [`using`](/de/docs/Web/JavaScript/Reference/Statements/using)-Deklarationen können nicht mehr neu zugewiesen werden und entsprechen damit der von der Spezifikation verlangten const-ähnlichen Semantik. Zuvor konnte eine solche Bindung stillschweigend verändert werden.
  ([Firefox-Bug 2040286](https://bugzil.la/2040286)).

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

### Sicherheit

- Die Finite-Field-Diffie-Hellman-Gruppen `ffdhe2048` und `ffdhe3072` werden bei TLS-Handshakes nicht mehr standardmäßig angeboten.
  Server, die nur diese Gruppen unterstützen, können keine Verbindung aushandeln; nahezu alle Server unterstützen stattdessen den ECDHE-Schlüsselaustausch.
  ([Firefox-Bug 1992340](https://bugzil.la/1992340)).

<!-- #### Removals -->

### APIs

- [`SubtleCrypto.deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits) löst jetzt einen {{jsxref("TypeError")}} aus, wenn der übergebene Parameter `length` `NaN`, `Infinity`, negativ oder größer als 2<sup>32</sup>−1 ist.
  Zuvor wurden diese Werte entweder akzeptiert oder das zurückgegebene Promise mit einem `OperationError` abgelehnt.
  ([Firefox-Bug 2065212](https://bugzil.la/2065212)).
- [`Scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) übernimmt jetzt die Priorität und das Abbruchsignal der umschließenden Task über ein `await`, das synchron abgeschlossen wird, beispielsweise ein bereits aufgelöstes Promise, ein Nicht-Promise-Wert oder ein `then()`-Callback für ein abgeschlossenes Promise.
  Zuvor verlor die Fortsetzung in diesen Fällen den übernommenen Zustand und fiel stillschweigend auf die Standardpriorität `user-visible` zurück.

#### DOM

- [`Range.deleteContents()`](/de/docs/Web/API/Range/deleteContents) und [`Range.extractContents()`](/de/docs/Web/API/Range/extractContents) arbeiten jetzt auf dem DOM-Baum statt auf dem flachen Baum.
  Daher löscht und extrahiert ein Range, der eine [Shadow-Root](/de/docs/Web/API/ShadowRoot)-Grenze überspannt, jetzt die von der Spezifikation verlangten Knoten, auch wenn der Range innerhalb eines Shadow-Baums beginnt oder endet.
  Zuvor konnte ein solcher Range Inhalte innerhalb des Shadow-Baums entfernen, während nicht zugewiesene Kinder des Hosts an ihrer Stelle blieben, und [`Range.extractContents()`](/de/docs/Web/API/Range/extractContents) konnte einen Fehler auslösen, statt ein Fragment zurückzugeben.
  Dieselbe Korrektur gilt für [`Selection.deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument).
  ([Firefox-Bug 2053997](https://bugzil.la/2053997)).

#### Medien, WebRTC und Web Audio

- Das Mitglied `alwaysNegotiateDataChannels` des Konfigurationsobjekts, das an den Konstruktor [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection) übergeben wird, wird jetzt unterstützt. Wenn es auf `true` gesetzt ist, enthält das von der Verbindung erzeugte SDP immer eine Data-Channel-m-line, sodass [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) später aufgerufen werden kann, ohne eine neue Aushandlungsrunde zu erfordern. Das Mitglied hat standardmäßig den Wert `false`, wird von [`RTCPeerConnection.getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration) zurückgegeben und kann nicht durch [`RTCPeerConnection.setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) geändert werden. ([Firefox-Bug 2062561](https://bugzil.la/2062561)).

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Marionette und RemoteAgent verwenden jetzt beide einen benutzerdefinierten Exit-Code (69), wenn ihr Server nicht gestartet werden kann. ([Firefox-Bug 2040974](https://bugzil.la/2040974)).
- Das Timing von Zwischenereignissen für Aktionen mit einer Dauer größer als 0 wurde verbessert, um näher an einem Intervall von 16 ms zu liegen und eine Verlängerung der Gesamtdauer auch bei überlastetem Content-Prozess zu vermeiden. ([Firefox-Bug 2054442](https://bugzil.la/2054442)).

#### WebDriver BiDi

- `browsingContext.startScreencast` wählt jetzt sicher einen gültigen Download-Ordner aus und sollte keinen Fehler mehr auslösen, wenn der Standard-Download-Ordner (`DfltDwnld`) nicht verfügbar ist. ([Firefox-Bug 2066782](https://bugzil.la/2066782)).
- Das Mozilla-spezifische Modul `moz:debugging` wurde korrigiert, um verschachtelte Pausen korrekt zu verarbeiten. ([Firefox-Bug 2060460](https://bugzil.la/2060460)).

#### Marionette

- Der Befehl `WebDriver:GetElementTagName` wurde aktualisiert, um den [neuesten Änderungen der Spezifikation](https://github.com/w3c/webdriver/pull/1968) zu entsprechen, und gibt jetzt den [qualifizierten Namen](https://dom.spec.whatwg.org/#concept-element-qualified-name) des DOM-Elements zurück. Dieser Befehl wandelte den Rückgabewert bisher immer in Kleinbuchstaben um. In der Praxis ist diese Änderung für HTML-Elemente abwärtskompatibel, für Elemente mit einem groß- und kleinschreibungssensitiven qualifizierten Namen, beispielsweise SVG-Elemente, jedoch nicht abwärtskompatibel.([Firefox-Bug 2026697](https://bugzil.la/2026697)).

## Änderungen für Add-on-Entwickler

- Der Manifest-Schlüssel [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) fügt die Eigenschaft `backgrounds_area` hinzu. Mit dieser Eigenschaft kann ein Theme festlegen, wo seine Hintergrundbilder und Farbverläufe gezeichnet werden. Die Einstellung `"window"` zeichnet sie über das gesamte Browserfenster hinweg, während `"top_toolbars"` sie auf die horizontalen Symbolleisten am oberen Rand des Fensters beschränkt. Wenn `backgrounds_area` ausgelassen oder auf `"auto"` gesetzt wird, wählt Firefox den Bereich anhand von `properties.additional_backgrounds_alignment` aus. ([Firefox-Bug 2059526](https://bugzil.la/2059526))

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Webfunktionen

Diese Funktionen werden in Firefox 156 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Bereichsbezogene Custom-Element-Registries** (Nightly): `dom.scoped-custom-element-registries.enabled`

  [Bereichsbezogene Custom-Element-Registries](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) werden jetzt unterstützt, sodass eine Shadow-Root Custom Elements definieren kann, die nicht mit denen in der globalen Registry kollidieren.
  Diese Version aktiviert die Funktion standardmäßig in Nightly-Builds. ([Firefox-Bug 2064333](https://bugzil.la/2064333)).

- **`named-feature()`-Support-Abfragen**: `layout.css.supports.at-rule.enabled`

  Die Funktion `named-feature()` in der {{cssxref("@supports")}}-At-Regel ermöglicht es Ihnen zu testen, ob der Browser eine Funktion unterstützt, die keine andere erkennbare Syntax besitzt, beispielsweise `@supports named-feature(anchor-position-follows-transforms)`.
  ([Firefox-Bug 2042977](https://bugzil.la/2042977) und [Firefox-Bug 2055354](https://bugzil.la/2055354)).

- **Container Timing API**: `dom.enable_container_timing`

  Die Container Timing API meldet, wann die Inhalte eines Container-Elements gezeichnet werden. Dadurch können Sie die Renderzeit eines Bereichs der Seite statt des gesamten Viewports messen.
  ([Firefox-Bug 1940240](https://bugzil.la/1940240)).

- **MathML-`<a>`-Elemente**: `mathml.a.element.enabled`

  Das MathML-Element `<a>` erstellt aus MathML-Inhalten einen Hyperlink und stellt die Schnittstelle `MathMLAnchorElement` mit denselben URL-Komponenteneigenschaften wie HTML-{{HTMLElement("a")}}-Elemente bereit.
  Diese Version fügt Unterstützung für die IDL-Attribute `rel` und `relList` hinzu. ([Firefox-Bug 2063819](https://bugzil.la/2063819)).

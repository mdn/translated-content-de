---
title: Firefox 145 Versionshinweise für Entwickler (Beta)
short-title: Firefox 145 (Beta)
slug: Mozilla/Firefox/Releases/145
l10n:
  sourceCommit: 40f4474a258a73387de0800e3bd1ff7f51db8a78
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 145, die Entwickler betreffen.
Firefox 145 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [11. November 2025](https://whattrainisitnow.com/release/?version=145) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften ein, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- Die {{cssxref("text-autospace")}} Eigenschaft wird jetzt unterstützt, was automatische Abstandsanpassungen zwischen Zeichen aus verschiedenen Skripten ermöglicht ([Firefox-Bug 1981086](https://bugzil.la/1981086), [Firefox-Bug 1869577](https://bugzil.la/1869577)).

- Die [`math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) generische Schriftfamilie wird jetzt als Wert der `font-family`-Eigenschaft unterstützt, so dass mathematische Ausdrücke geeignete Schriften verwenden können.
  ([Firefox-Bug 1788937](https://bugzil.la/1788937)).

- Separatoren können in {{htmlelement("select")}} Menüs erscheinen, da {{htmlelement("hr")}} in `<select>` implementiert wurde.
  Diese werden jetzt auch in Firefox für Android unterstützt. ([Firefox-Bug 1867045](https://bugzil.la/1867045), [Firefox-Bug 1830909](https://bugzil.la/1830909)).

<!-- #### Entfernungen -->

### JavaScript

- Firefox unterstützt jetzt die {{jsxref("Atomics.waitAsync()")}} statische Methode, die eine Synchronisation von Threads basierend auf dem Wert in einem gemeinsamen Speicherort ermöglicht.
  Die Methode wartet asynchron auf den Wert und gibt ein Objekt zurück, das das Ergebnis des Vorgangs darstellt. Sie ist nicht blockierend und kann im Haupt-Thread verwendet werden.
  ([Firefox-Bug 1884148](https://bugzil.la/1884148)).

<!-- #### Entfernungen -->

### HTTP

- Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Skriptressourcen unterstützt. Diese ermöglichen es Websites, [Subresource-Integritätsgarantien](/de/docs/Web/Security/Subresource_Integrity) für _Skripte_ durchzusetzen.
  Beachten Sie, dass der [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) Schlüssel noch nicht unterstützt wird (Verstöße werden in der Konsole protokolliert).
  ([Firefox-Bug 1984973](https://bugzil.la/1984973)).

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die [`source`](/de/docs/Web/API/ToggleEvent/source) Eigenschaft der [`ToggleEvent`](/de/docs/Web/API/ToggleEvent) Schnittstelle wird jetzt unterstützt.
  Wenn ein [Popover](/de/docs/Web/API/Popover_API) durch ein HTML-Element wie einen {{htmlelement("button")}} ausgelöst wird, enthält die `source` Eigenschaft des Ereignisses das Element, das das Popover ausgelöst hat.
  ([Firefox-Bug 1968987](https://bugzil.la/1968987)).
- Eine [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Instanz wird jetzt für die `style` Eigenschaft auf [`HTMLElement`](/de/docs/Web/API/HTMLElement/style), [`MathMLElement`](/de/docs/Web/API/MathMLElement/style), [`SVGElement`](/de/docs/Web/API/SVGElement/style), und [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule/style), sowie die [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) Methode zurückgegeben. Zuvor wurde eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Instanz zurückgegeben.
  ([Firefox-Bug 1989925](https://bugzil.la/1989925))

<!-- #### DOM -->

#### Medien, WebRTC und Web Audio

- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) sind jetzt {{Glossary("Serializable_object", "serialisierbare Objekte")}}, und [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) und [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) Copy-Konstruktoren werden unterstützt. Diese Änderungen ermöglichen es, Frames zu klonen und zwischen Workern und dem Haupt-Thread zu teilen. ([Firefox-Bug 1868223](https://bugzil.la/1868223) und [Firefox-Bug 1975032](https://bugzil.la/1975032)).

- Der [Matroska-Container](/de/docs/Web/Media/Guides/Formats/Containers) (`.mkv`) wird jetzt für die am häufigsten verwendeten Codecs unterstützt: AVC, HEVC, VP8, VP9, AV1, AAC, Opus und Vorbis. ([Firefox-Bug 1991752](https://bugzil.la/1991752)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der `emulation.setUserAgentOverride` Befehl wurde implementiert, der es ermöglicht, den User-Agent-String des Browsers entweder für einen Satz von Kontexten, Benutzerkontexten oder global zu überschreiben. ([Firefox-Bug 1987935](https://bugzil.la/1987935)).
- Der `browsingContext.downloadEnd` Event wurde implementiert, der ausgesendet wird, wenn ein Download endet (ob erfolgreich oder abgebrochen) ([Firefox-Bug 1970293](https://bugzil.la/1970293)).
- Die `destination` Eigenschaft des `network.beforeRequestSent` Events wurde für oberste Navigationen auf `document` aktualisiert. ([Firefox-Bug 1985552](https://bugzil.la/1985552)).
- Die `browsingContext` Download-Events wurden aktualisiert, um die gleiche Navigations-ID wie das vorherige `browsingContext.navigationStarted` Event wiederzuverwenden. ([Firefox-Bug 1986938](https://bugzil.la/1986938)).
- Ein Fehler bei der Netzwerkerfassung, bei dem nicht-ASCII-Zeichen in Antwortkörpern nicht korrekt kodiert wurden, wurde behoben. ([Firefox-Bug 1986022](https://bugzil.la/1986022)).
- Ein Fehler mit dem `network.getData` Befehl, der Anfragen mit einem leeren Antwortkörper fehlschlagen ließ, wurde behoben. ([Firefox-Bug 1986025](https://bugzil.la/1986025)).
- Ein Fehler, bei dem einige `network` Events als blockiert markiert werden konnten, obwohl sie es nicht waren, wurde behoben. ([Firefox-Bug 1989919](https://bugzil.la/1989919)).

## Änderungen für Add-On-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} erstellt werden, werden jetzt validiert, und ungültige Cookies werden abgelehnt. Diese Änderung wurde nur in Nightly ab Firefox 142 umgesetzt. ([Firefox-Bug 1976509](https://bugzil.la/1976509))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Web-Features

Diese Features werden in Firefox 145 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS-Ankerpositionierung** (Nightly): `layout.css.anchor-positioning.enabled`

  Nightly-Builds unterstützen jetzt standardmäßig die [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning), die es ermöglicht, Elemente miteinander zu verbinden.
  Die ankerpositionierten Elemente können dann ihre Größe und Position relativ zur Größe und Position der Ankerelemente, an die sie gebunden sind, einstellen.
  (Allgemein: [Firefox-Bug 1988224](https://bugzil.la/1988224), {{cssxref("position-area")}}: [Firefox-Bug 1924086](https://bugzil.la/1924086), benutzerdefinierte {{cssxref("@position-try")}} Fallbacks: [Firefox-Bug 1962598](https://bugzil.la/1962598)).

- **CSS-Modulskripte:** (Nightly) und `layout.css.module-scripts.enabled`.

  CSS-Modulskripte werden jetzt unterstützt, sodass ein Stylesheet als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Instanz mit dem [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Schlüsselwort und dem [`type` Importattribut](/de/docs/Web/JavaScript/Reference/Statements/import/with) auf `type="css"` gesetzt, geladen werden kann. ([Firefox-Bug 1720570](https://bugzil.la/1720570)).

- **text-decoration-trim**: `layout.css.text-decoration-trim.enabled`

  Die CSS-Eigenschaft `text-decoration-trim` wird unterstützt, ist aber derzeit standardmäßig deaktiviert.
  Sie ermöglicht es, {{cssxref("text-decoration")}} Start- und Endversätze zu spezifizieren, um die Position von Textdekorationen im Verhältnis zum Text zu verkürzen, zu verlängern oder zu verschieben ([Firefox-Bug 1979915](https://bugzil.la/1979915)).

- **Trusted Types API** für Skripte (Nightly/Frühe Beta): `dom.security.trusted_types.enabled`

  Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) ist jetzt in frühen Beta-Versionen aktiviert. ([Firefox-Bug 1976656](https://bugzil.la/1976656)).

  Die Änderungen umfassen:

- Hinzufügung der [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory), [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), [`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript), [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Schnittstellen und der `trustedTypes` Eigenschaft auf [`Window`](/de/docs/Web/API/Window/trustedTypes) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes).
  - Updates zu [Injection Sink Schnittstellen](/de/docs/Web/API/Trusted_Types_API#injection_sink_interfaces) APIs, wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`document.write()`](/de/docs/Web/API/Document/write), um die `TrustedHTML`, `TrustedScript`, `TrustedScriptURL` neben Strings zu ermöglichen.
  - Unterstützung für die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) und [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) Direktiven und das [`'trusted-types-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) Schlüsselwort der {{HTTPHeader("Content-Security-Policy")}} HTTP-Header.
    Diese können verwendet werden, um vertrauenswürdige Typen anstelle von Strings durchzusetzen, die spezifischen Richtlinien zu benennen, die erlaubt sind, und um [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) und ähnliche Funktionen zu aktivieren, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) unterstützt und durchgesetzt werden.

- **Storage Access Header** (Nightly): `dom.storage_access.headers.enabled`.
  Die {{httpheader("Sec-Fetch-Storage-Access")}} und {{httpheader("Activate-Storage-Access")}} HTTP-Header werden jetzt unterstützt, wodurch ein effizienterer [Storage Access API](/de/docs/Web/API/Storage_Access_API) Workflow ermöglicht wird. ([Firefox-Bug 1991688](https://bugzil.la/1991688)).

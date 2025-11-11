---
title: Firefox 145 Versionshinweise für Entwickler (Stable)
short-title: Firefox 145 (Stable)
slug: Mozilla/Firefox/Releases/145
l10n:
  sourceCommit: 08f01e6cd0103ac0a472f9e3cf2482bb9fc2f25a
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 145, die Entwickler betreffen.
Firefox 145 wurde am [11. November 2025](https://whattrainisitnow.com/release/?version=145) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die Eigenschaft {{cssxref("text-autospace")}} wird jetzt unterstützt, wodurch automatische Abstandsänderungen zwischen Zeichen aus verschiedenen Schriftsätzen ermöglicht werden ([Firefox-Bug 1981086](https://bugzil.la/1981086), [Firefox-Bug 1869577](https://bugzil.la/1869577)).

- Die generische Schriftfamilie [`math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) wird jetzt als Wert der `font-family`-Eigenschaft unterstützt, wodurch mathematische Ausdrücke geeignete Schriftarten verwenden können.
  ([Firefox-Bug 1788937](https://bugzil.la/1788937)).

- Trennzeichen können in {{htmlelement("select")}}-Menüs erscheinen, seit {{htmlelement("hr")}} in `<select>` implementiert wurde.
  Diese werden jetzt auch in Firefox für Android unterstützt. ([Firefox-Bug 1867045](https://bugzil.la/1867045), [Firefox-Bug 1830909](https://bugzil.la/1830909)).

### JavaScript

- Firefox unterstützt nun die statische Methode {{jsxref("Atomics.waitAsync()")}}, die die Synchronisation von Threads basierend auf dem Wert in einem gemeinsamen Speicherort ermöglicht.
  Die Methode wartet asynchron auf den Wert und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt. Sie ist nicht blockierend und kann im Hauptthread verwendet werden.
  ([Firefox-Bug 1884148](https://bugzil.la/1884148)).

### HTTP

- Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden nun für Skript-Ressourcen unterstützt. Diese ermöglichen es Websites, [Garantien für Subresource Integrität](/de/docs/Web/Security/Subresource_Integrity) für _Skripte_ durchzusetzen.
  Beachten Sie, dass der [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints)-Schlüssel noch nicht unterstützt wird (Verstöße werden in die Konsole protokolliert).
  ([Firefox-Bug 1984973](https://bugzil.la/1984973)).

### APIs

- Die [`source`](/de/docs/Web/API/ToggleEvent/source)-Eigenschaft der [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)-Schnittstelle wird jetzt unterstützt.
  Wenn ein [Popover](/de/docs/Web/API/Popover_API) durch ein HTML-Element wie z.B. ein {{htmlelement("button")}} geöffnet oder geschlossen wird, enthält die `source`-Eigenschaft des Events das Element, das das Popover ausgelöst hat.
  ([Firefox-Bug 1968987](https://bugzil.la/1968987)).
- Eine Instanz von [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) wird jetzt für die `style`-Eigenschaft auf [`HTMLElement`](/de/docs/Web/API/HTMLElement/style), [`MathMLElement`](/de/docs/Web/API/MathMLElement/style), [`SVGElement`](/de/docs/Web/API/SVGElement/style) und [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule/style) sowie die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) zurückgegeben. Früher wurde eine Instanz von [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurückgegeben.
  ([Firefox-Bug 1989925](https://bugzil.la/1989925))

#### Media, WebRTC und Web Audio

- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) sind jetzt {{Glossary("Serializable_object", "serialisierbare Objekte")}}, und die Kopierkonstruktoren [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) und [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) werden unterstützt. Diese Änderungen ermöglichen das Klonen von Frames und deren Freigabe zwischen Workern und dem Hauptthread. ([Firefox-Bug 1868223](https://bugzil.la/1868223) und [Firefox-Bug 1975032](https://bugzil.la/1975032)).

- Der [Matroska-Container](/de/docs/Web/Media/Guides/Formats/Containers) (`.mkv`) wird nun für die am häufigsten verwendeten Codecs unterstützt: AVC, HEVC, VP8, VP9, AV1, AAC, Opus und Vorbis. ([Firefox-Bug 1991752](https://bugzil.la/1991752)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der `emulation.setUserAgentOverride`-Befehl wurde implementiert, mit dem der User-Agent-String, der vom Browser verwendet wird, entweder für eine Reihe von Kontexte, Benutzerkontexte oder global überschrieben werden kann. ([Firefox-Bug 1987935](https://bugzil.la/1987935)).
- Das `browsingContext.downloadEnd`-Ereignis wurde implementiert, das ausgelöst wird, wenn ein Download (ob erfolgreich oder abgebrochen) abgeschlossen ist ([Firefox-Bug 1970293](https://bugzil.la/1970293)).
- Die `destination`-Eigenschaft des `network.beforeRequestSent`-Ereignisses wurde für Top-Level-Navigationen auf `document` aktualisiert. ([Firefox-Bug 1985552](https://bugzil.la/1985552)).
- Die Ereignisse `browsingContext` Download wurden aktualisiert, um die gleiche Navigations-ID wie das vorherige `browsingContext.navigationStarted`-Ereignis wiederzuverwenden. ([Firefox-Bug 1986938](https://bugzil.la/1986938)).
- Ein Fehler bei der Netzwerkdatensammlung wurde behoben, bei dem nicht-ASCII-Zeichen in Antwortkörpern nicht korrekt codiert wurden. ([Firefox-Bug 1986022](https://bugzil.la/1986022)).
- Ein Fehler mit dem `network.getData`-Befehl wurde behoben, bei dem Anfragen mit einem leeren Antwortkörper fehlschlugen. ([Firefox-Bug 1986025](https://bugzil.la/1986025)).
- Ein Fehler wurde behoben, bei dem einige `network`-Ereignisse als blockiert markiert werden konnten, obwohl sie es nicht waren. ([Firefox-Bug 1989919](https://bugzil.la/1989919)).

## Änderungen für Add-On-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} erstellt wurden, werden jetzt validiert und ungültige Cookies werden abgelehnt. Diese Änderung wurde nur in der Nightly-Version ab Firefox 142 implementiert. ([Firefox-Bug 1976509](https://bugzil.la/1976509))

## Experimentelle Web Features

Diese Funktionen sind in Firefox 145 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Voreinstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS-Anker-Positionierung** (Nightly): `layout.css.anchor-positioning.enabled`

  Nightly-Builds unterstützen jetzt standardmäßig [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning), die es ermöglicht, Elemente miteinander zu verbinden.
  Die ankerpositionierten Elemente können dann in ihrer Größe und Position relativ zur Größe und Position der Ankerelemente, an die sie gebunden sind, eingestellt werden.
  (Allgemein: [Firefox-Bug 1988224](https://bugzil.la/1988224), {{cssxref("position-area")}}: [Firefox-Bug 1924086](https://bugzil.la/1924086), benutzerdefinierte {{cssxref("@position-try")}}-Fallbacks: [Firefox-Bug 1962598](https://bugzil.la/1962598)).

- **CSS-Modul-Skripte:** (Nightly) und `layout.css.module-scripts.enabled`.

  CSS-Modul-Skripte werden nun unterstützt, sodass ein Stylesheet als Instanz von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) mithilfe des [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Schlüsselworts und des [`type` import attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) auf `type="css"` gesetzten Attributs in ein Skript geladen werden kann. ([Firefox-Bug 1720570](https://bugzil.la/1720570)).

- **text-decoration-trim**: `layout.css.text-decoration-trim.enabled`

  Die CSS-Eigenschaft `text-decoration-trim` wird unterstützt, ist aber derzeit standardmäßig deaktiviert.
  Sie ermöglicht es, {{cssxref("text-decoration")}} Anfangs- und Endoffsets anzugeben, um die Position der Textdekorationen zu verkürzen, zu verlängern oder zu verschieben ([Firefox-Bug 1979915](https://bugzil.la/1979915)).

- **Trusted Types API** für Skripte (Nightly/Frühe Beta): `dom.security.trusted_types.enabled`

  Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) ist jetzt in frühen Beta-Versionen aktiviert. ([Firefox-Bug 1976656](https://bugzil.la/1976656)).

  Die Änderungen umfassen:

- Hinzufügung der Schnittstellen [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory), [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), [`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript), [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) und der `trustedTypes`-Eigenschaft auf [`Window`](/de/docs/Web/API/Window/trustedTypes) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes).
  - Aktualisierungen der APIs für [Injection Sink Interfaces](/de/docs/Web/API/Trusted_Types_API#injection_sink_interfaces) wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`document.write()`](/de/docs/Web/API/Document/write), um die Übergabe von `TrustedHTML`, `TrustedScript`, `TrustedScriptURL` sowie Zeichenfolgen zu ermöglichen.
  - Unterstützung für die Direktiven [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) und [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) sowie das Schlüsselwort [`'trusted-types-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) im {{HTTPHeader("Content-Security-Policy")}} HTTP-Header.
    Diese können verwendet werden, um vertrauenswürdige Typen anstelle von Zeichenfolgen durchzusetzen, die spezifischen Richtlinien zu benennen, die erlaubt sind, und um die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) und ähnlichen Funktionen zu ermöglichen, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) unterstützt und durchgesetzt werden.

- **Storage Access headers** (Nightly): `dom.storage_access.headers.enabled`.
  Die HTTP-Header {{httpheader("Sec-Fetch-Storage-Access")}} und {{httpheader("Activate-Storage-Access")}} werden jetzt unterstützt, was einen effizienteren Workflow der [Storage Access API](/de/docs/Web/API/Storage_Access_API) ermöglicht. ([Firefox-Bug 1991688](https://bugzil.la/1991688)).

---
title: Firefox 145 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 145 (Stabil)
slug: Mozilla/Firefox/Releases/145
l10n:
  sourceCommit: 3d368d5bb769e92539d3e185ab5bfb5f66b4ffc4
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 145, die Entwickler betreffen.
Firefox 145 wurde am [11. November 2025](https://whattrainisitnow.com/release/?version=145) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die {{cssxref("text-autospace")}} Eigenschaft wird jetzt unterstützt, was automatische Anpassungen der Abstände zwischen Zeichen aus verschiedenen Schriften ermöglicht ([Firefox Bug 1981086](https://bugzil.la/1981086), [Firefox Bug 1869577](https://bugzil.la/1869577)).

- Die [`math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) generische Schriftfamile wird jetzt als Wert der `font-family` Eigenschaft unterstützt, sodass mathematische Ausdrücke geeignete Schriften verwenden können. ([Firefox Bug 1788937](https://bugzil.la/1788937)).

- Separatoren können in {{htmlelement("select")}} Menüs erscheinen, seit {{htmlelement("hr")}} in `<select>` implementiert wurde. Diese werden nun auch in Firefox für Android unterstützt. ([Firefox Bug 1867045](https://bugzil.la/1867045), [Firefox Bug 1830909](https://bugzil.la/1830909)).

### JavaScript

- Firefox unterstützt jetzt die {{jsxref("Atomics.waitAsync()")}} statische Methode, die die Synchronisation von Threads basierend auf dem Wert in einem geteilten Speicherort ermöglicht. Die Methode wartet asynchron auf den Wert und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt. Sie ist nicht blockierend und kann im Haupt-Thread verwendet werden.
  ([Firefox Bug 1884148](https://bugzil.la/1884148)).

### HTTP

- Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Skriptressourcen unterstützt. Diese ermöglichen es Websites, [Subressourcen-Integritätsgarantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für _Skripte_ durchzusetzen. Beachten Sie, dass der [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) Schlüssel noch nicht unterstützt wird (Verstöße werden in der Konsole protokolliert).
  ([Firefox Bug 1984973](https://bugzil.la/1984973)).

### Sicherheit

- Wenn der Bounce Tracking Schutz (BTP) aktiviert ist, läuft er jetzt standardmäßig im "stateless" Modus. Im "stateless" Modus kennzeichnet der Browser nicht mehr nur Websites, die Teil eines "Bounce" sind und Statusinformationen setzen (wie ein Cookie), sondern _alle_ Websites, die Teil eines "Bounce" sind. Weitere Informationen darüber, wie BTP funktioniert, finden Sie unter [Bounce tracking mitigations](/de/docs/Web/Privacy/Guides/Bounce_tracking_mitigations). ([Firefox Bug 1990831](https://bugzil.la/1990831)).

### APIs

- Die [`source`](/de/docs/Web/API/ToggleEvent/source) Eigenschaft der [`ToggleEvent`](/de/docs/Web/API/ToggleEvent) Schnittstelle wird jetzt unterstützt. Wenn ein [Popover](/de/docs/Web/API/Popover_API) durch ein HTML-Element wie einen {{htmlelement("button")}} ausgelöst wird, enthält die `source` Eigenschaft des Events das Element, das das Popover ausgelöst hat.
  ([Firefox Bug 1968987](https://bugzil.la/1968987)).
- Eine [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Instanz wird jetzt für die `style` Eigenschaft von [`HTMLElement`](/de/docs/Web/API/HTMLElement/style), [`MathMLElement`](/de/docs/Web/API/MathMLElement/style), [`SVGElement`](/de/docs/Web/API/SVGElement/style) und [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule/style) sowie der [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) Methode zurückgegeben. Zuvor wurde eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Instanz zurückgegeben.
  ([Firefox Bug 1989925](https://bugzil.la/1989925))

#### Medien, WebRTC und Web Audio

- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) sind jetzt {{Glossary("Serializable_object", "serialisierbare Objekte")}} und [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) sowie [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) Kopierkonstruktoren werden unterstützt. Diese Änderungen ermöglichen es, Frames zu klonen und zwischen Workern und dem Haupt-Thread zu teilen. ([Firefox Bug 1868223](https://bugzil.la/1868223) und [Firefox Bug 1975032](https://bugzil.la/1975032)).

- Der [Matroska-Container](/de/docs/Web/Media/Guides/Formats/Containers) (`.mkv`) wird jetzt für die am häufigsten verwendeten Codecs unterstützt: AVC, HEVC, VP8, VP9, AV1, AAC, Opus und Vorbis. ([Firefox Bug 1991752](https://bugzil.la/1991752)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der `emulation.setUserAgentOverride` Befehl wurde implementiert, der es ermöglicht, den vom Browser verwendeten User-Agent-String entweder für einen Satz von Kontexten, Benutzerkontexten oder global zu überschreiben. ([Firefox Bug 1987935](https://bugzil.la/1987935)).
- Das `browsingContext.downloadEnd` Ereignis wurde implementiert, das ausgelöst wird, wenn ein Download abgeschlossen ist (unabhängig davon, ob er erfolgreich oder abgebrochen war) ([Firefox Bug 1970293](https://bugzil.la/1970293)).
- Die `destination` Eigenschaft des `network.beforeRequestSent` Ereignisses wurde für Top-Level-Navigationen auf `document` aktualisiert. ([Firefox Bug 1985552](https://bugzil.la/1985552)).
- Die `browsingContext` Download-Ereignisse wurden aktualisiert, um die gleiche Navigations-ID wie das vorherige `browsingContext.navigationStarted` Ereignis wiederzuverwenden. ([Firefox Bug 1986938](https://bugzil.la/1986938)).
- Ein Fehler in Bezug auf die Netzwerksammlung wurde behoben, bei dem nicht-ASCII-Zeichen in Antwortinhalten nicht korrekt codiert wurden. ([Firefox Bug 1986022](https://bugzil.la/1986022)).
- Ein Fehler mit dem `network.getData` Befehl wurde behoben, der dazu führte, dass Anfragen mit leerem Antwortinhalt fehlschlugen. ([Firefox Bug 1986025](https://bugzil.la/1986025)).
- Ein Fehler wurde behoben, bei dem einige `network` Ereignisse als blockiert markiert werden konnten, obwohl sie es nicht waren. ([Firefox Bug 1989919](https://bugzil.la/1989919)).

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} erstellt wurden, werden nun validiert, und ungültige Cookies werden zurückgewiesen. Diese Änderung wurde nur im Nightly ab Firefox 142 implementiert. ([Firefox Bug 1976509](https://bugzil.la/1976509))

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 145 verfügbar, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solcher Features finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS-Ankerpositionierung** (Nightly): `layout.css.anchor-positioning.enabled`

  Nightly-Builds unterstützen jetzt standardmäßig [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning), was es Ihnen ermöglicht, Elemente miteinander zu verbinden.
  Die ankerpositionierten Elemente können dann ihre Größe und Position relativ zur Größe und Position der Ankerelemente, an die sie gebunden sind, festgelegt werden.
  (Allgemein: [Firefox Bug 1988224](https://bugzil.la/1988224), {{cssxref("position-area")}}: [Firefox Bug 1924086](https://bugzil.la/1924086), benutzerdefinierte {{cssxref("@position-try")}} Fallbacks: [Firefox Bug 1962598](https://bugzil.la/1962598)).

- **CSS-Modulscripts:** (Nightly) und `layout.css.module-scripts.enabled`.

  CSS-Modulscripts werden jetzt unterstützt und ermöglichen es, ein Stylesheet als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Instanz mit dem [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Schlüsselwort und dem [`type` import Attribut](/de/docs/Web/JavaScript/Reference/Statements/import/with) eingestellt auf `type="css"` in ein Skript zu laden. ([Firefox Bug 1720570](https://bugzil.la/1720570)).

- **text-decoration-trim**: `layout.css.text-decoration-trim.enabled`

  Die CSS `text-decoration-trim` Eigenschaft wird unterstützt, ist aber derzeit standardmäßig deaktiviert.
  Sie ermöglicht es Ihnen, {{cssxref("text-decoration")}} Anfangs- und End-Offsets anzugeben, um die Textdekorationen mit der entsprechenden Länge zu kürzen, zu verlängern oder zu verschieben ([Firefox Bug 1979915](https://bugzil.la/1979915)).

- **Trusted Types API** für Skripte (Nightly/Frühe Beta): `dom.security.trusted_types.enabled`

  Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) ist nun in frühen Beta-Versionen aktiviert. ([Firefox Bug 1976656](https://bugzil.la/1976656)).

  Die Änderungen umfassen:

- Hinzufügen der [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory), [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), [`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript), [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Schnittstellen und der `trustedTypes` Eigenschaft auf [`Window`](/de/docs/Web/API/Window/trustedTypes) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes).
  - Updates zu [Injection Sink Schnittstellen](/de/docs/Web/API/Trusted_Types_API#injection_sink_interfaces) APIs, wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`document.write()`](/de/docs/Web/API/Document/write), um die `TrustedHTML`, `TrustedScript`, `TrustedScriptURL` anstelle von Zeichenfolgen zuzulassen.
  - Unterstützung der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) und [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) Direktiven sowie das `'trusted-types-eval'` Schlüsselwort des {{HTTPHeader("Content-Security-Policy")}} HTTP-Headers.
    Diese können verwendet werden, um Trusted Types anstelle von Zeichenfolgen durchzusetzen, die spezifischen erlaubten Richtlinien zu benennen und Funktionen wie [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) zu ermöglichen, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) unterstützt und durchgesetzt werden.

- **Storage Access Header** (Nightly): `dom.storage_access.headers.enabled`.
  Die {{httpheader("Sec-Fetch-Storage-Access")}} und {{httpheader("Activate-Storage-Access")}} HTTP-Header werden jetzt unterstützt und ermöglichen einen effizienteren [Storage Access API](/de/docs/Web/API/Storage_Access_API) Workflow. ([Firefox Bug 1991688](https://bugzil.la/1991688)).

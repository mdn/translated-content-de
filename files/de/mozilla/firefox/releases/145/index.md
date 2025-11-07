---
title: Firefox 145 Versionshinweise für Entwickler (Beta)
short-title: Firefox 145 (Beta)
slug: Mozilla/Firefox/Releases/145
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 145, die Entwickler betreffen.
Firefox 145 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [11. November 2025](https://whattrainisitnow.com/release/?version=145) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte entfernen Sie die Kommentarzeichen bei Überschriften, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- Die {{cssxref("text-autospace")}}-Eigenschaft wird nun unterstützt, was automatische Anpassungen der Abstände zwischen Zeichen aus unterschiedlichen Schriftsystemen ermöglicht ([Firefox Bug 1981086](https://bugzil.la/1981086), [Firefox Bug 1869577](https://bugzil.la/1869577)).

- Die [`math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) generische Schriftfamilie wird nun als Wert der `font-family`-Eigenschaft unterstützt, wodurch mathematische Ausdrücke geeignete Schriftarten verwenden können.
  ([Firefox Bug 1788937](https://bugzil.la/1788937)).

- Trennzeichen können in {{htmlelement("select")}}-Menüs erscheinen, seit {{htmlelement("hr")}} in `<select>` implementiert wurde.
  Diese werden nun auch in Firefox für Android unterstützt. ([Firefox Bug 1867045](https://bugzil.la/1867045), [Firefox Bug 1830909](https://bugzil.la/1830909)).

<!-- #### Entfernungen -->

### JavaScript

- Firefox unterstützt jetzt die {{jsxref("Atomics.waitAsync()")}} statische Methode, die es ermöglicht, Threads basierend auf dem Wert in einem gemeinsamen Speicherort zu synchronisieren.
  Die Methode wartet asynchron auf den Wert und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt. Sie ist nicht blockierend und kann im Hauptthread verwendet werden.
  ([Firefox Bug 1884148](https://bugzil.la/1884148)).

<!-- #### Entfernungen -->

### HTTP

- Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden nun für Skriptressourcen unterstützt. Diese ermöglichen es Websites, [Zusicherungen zur Subressourcen-Integrität](/de/docs/Web/Security/Subresource_Integrity) für _Scripts_ durchzusetzen.
  Beachten Sie, dass der [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) Schlüssel noch nicht unterstützt wird (Verstöße werden in der Konsole protokolliert).
  ([Firefox Bug 1984973](https://bugzil.la/1984973)).

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die [`source`](/de/docs/Web/API/ToggleEvent/source) Eigenschaft der [`ToggleEvent`](/de/docs/Web/API/ToggleEvent) Schnittstelle wird nun unterstützt.
  Wenn ein [Popover](/de/docs/Web/API/Popover_API) durch ein HTML-Element wie ein {{htmlelement("button")}} ausgelöst wird, enthält die `source`-Eigenschaft des Ereignisses das Element, das den Popover ausgelöst hat.
  ([Firefox Bug 1968987](https://bugzil.la/1968987)).
- Eine [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Instanz wird nun für die `style` Eigenschaft auf [`HTMLElement`](/de/docs/Web/API/HTMLElement/style), [`MathMLElement`](/de/docs/Web/API/MathMLElement/style), [`SVGElement`](/de/docs/Web/API/SVGElement/style), und [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule/style) sowie die [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) Methode zurückgegeben. Bisher wurde eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Instanz zurückgegeben.
  ([Firefox Bug 1989925](https://bugzil.la/1989925))

<!-- #### DOM -->

#### Medien, WebRTC und Web Audio

- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) sind nun {{Glossary("Serializable_object", "serialisierbare Objekte")}}, und die Kopierkonstruktoren [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) und [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) werden unterstützt. Diese Änderungen ermöglichen es, Frames zu klonen und zwischen Arbeitern und dem Hauptthread zu teilen. ([Firefox Bug 1868223](https://bugzil.la/1868223) und [Firefox Bug 1975032](https://bugzil.la/1975032)).

- Der [Matroska-Container](/de/docs/Web/Media/Guides/Formats/Containers) (`.mkv`) wird nun für die am häufigsten verwendeten Codecs unterstützt: AVC, HEVC, VP8, VP9, AV1, AAC, Opus und Vorbis. ([Firefox Bug 1991752](https://bugzil.la/1991752)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der Befehl `emulation.setUserAgentOverride` wurde implementiert, der es ermöglicht, den User-Agent-String, der vom Browser verwendet wird, entweder für eine Reihe von Kontexten, Benutzerkontexten oder global zu überschreiben. ([Firefox Bug 1987935](https://bugzil.la/1987935)).
- Das Ereignis `browsingContext.downloadEnd` wurde implementiert, das erzeugt wird, wenn ein Download abgeschlossen ist (ob erfolgreich oder abgebrochen) ([Firefox Bug 1970293](https://bugzil.la/1970293)).
- Die `destination`-Eigenschaft des `network.beforeRequestSent`-Ereignisses wurde für Top-Level-Navigationen auf `document` aktualisiert. ([Firefox Bug 1985552](https://bugzil.la/1985552)).
- Die `browsingContext`-Downloadereignisse wurden aktualisiert, um dieselbe Navigations-ID wie das vorherige `browsingContext.navigationStarted`-Ereignis wiederzuverwenden. ([Firefox Bug 1986938](https://bugzil.la/1986938)).
- Ein Bug für die Sammlung von Netzwerkdaten wurde behoben, bei dem Nicht-ASCII-Zeichen in Antwortkörpern nicht korrekt kodiert wurden. ([Firefox Bug 1986022](https://bugzil.la/1986022)).
- Ein Bug mit dem Befehl `network.getData` wurde behoben, bei dem Anfragen mit leerem Antwortkörper fehlschlugen. ([Firefox Bug 1986025](https://bugzil.la/1986025)).
- Ein Bug, bei dem einige `network`-Ereignisse als blockiert markiert wurden, obwohl sie es nicht waren, wurde behoben. ([Firefox Bug 1989919](https://bugzil.la/1989919)).

## Änderungen für Add-On-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} erstellt werden, werden nun validiert, und ungültige Cookies werden abgelehnt. Diese Änderung wurde nur in der Nightly-Version ab Firefox 142 implementiert. ([Firefox Bug 1976509](https://bugzil.la/1976509))

<!-- ### Entfernungen -->

<!-- ### Andere -->

## Experimentelle Webfeatures

Diese Features sind in Firefox 145 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS-Anker-Positionierung** (Nightly): `layout.css.anchor-positioning.enabled`

  Nightly-Builds unterstützen jetzt standardmäßig die [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning), die es ermöglicht, Elemente miteinander zu verankern.
  Die anker-positionierten Elemente können dann in Größe und Position relativ zu den Ankerelementen, an die sie gebunden sind, eingestellt werden.
  (Allgemein: [Firefox Bug 1988224](https://bugzil.la/1988224), `position-area`: [Firefox Bug 1924086](https://bugzil.la/1924086)).

- **CSS-Modulscripte:** (Nightly) und `layout.css.module-scripts.enabled`.

  CSS-Modulscripte werden nun unterstützt, was es ermöglicht, ein Stylesheet über das Schlüsselwort [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) und das Importattribut [`type`](/de/docs/Web/JavaScript/Reference/Statements/import/with), das auf `type="css"` gesetzt ist, als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanz in ein Skript zu laden. ([Firefox Bug 1720570](https://bugzil.la/1720570)).

- **text-decoration-trim**: `layout.css.text-decoration-trim.enabled`

  Die CSS-Eigenschaft `text-decoration-trim` wird unterstützt, ist aber derzeit standardmäßig deaktiviert.
  Sie ermöglicht es, Start- und Endoffsets für {{cssxref("text-decoration")}} anzugeben, um die Position von Textdekorationen im Verhältnis zum Text zu verkürzen, zu verlängern oder zu verschieben ([Firefox Bug 1979915](https://bugzil.la/1979915)).

- **Trusted Types API** für Scripts (Nightly/Frühe Beta): `dom.security.trusted_types.enabled`

  Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) ist nun in frühen Beta-Versionen aktiviert. ([Firefox Bug 1976656](https://bugzil.la/1976656)).

  Zu den Änderungen gehören:

- Hinzufügung der Schnittstellen [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory), [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), [`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript), [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) und der `trustedTypes`-Eigenschaft auf [`Window`](/de/docs/Web/API/Window/trustedTypes) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes).

  - Aktualisierungen der APIs [Injektionspunkt-Schnittstellen](/de/docs/Web/API/Trusted_Types_API#injection_sink_interfaces), wie z.B. [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`document.write()`](/de/docs/Web/API/Document/write), um `TrustedHTML`, `TrustedScript`, `TrustedScriptURL` sowie Strings zu ermöglichen.
  - Unterstützung der Richtlinien [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) und [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) sowie des Schlüsselworts [`'trusted-types-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) des {{HTTPHeader("Content-Security-Policy")}} HTTP-Headers.
    Diese können verwendet werden, um vertrauenswürdige Typen anstelle von Zeichenfolgen durchzusetzen, die spezifischen Richtlinien zu benennen, die erlaubt sind, und um die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) und ähnlichen Funktionen zu ermöglichen, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) unterstützt und durchgesetzt werden.

- **Storage Access Headers** (Nightly): `dom.storage_access.headers.enabled`.
  Die {{httpheader("Sec-Fetch-Storage-Access")}} und {{httpheader("Activate-Storage-Access")}} HTTP-Header werden nun unterstützt, was einen effizienteren [Storage Access API](/de/docs/Web/API/Storage_Access_API) Workflow ermöglicht. ([Firefox Bug 1991688](https://bugzil.la/1991688)).

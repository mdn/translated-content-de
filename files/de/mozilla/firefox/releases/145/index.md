---
title: Firefox 145 Versionshinweise für Entwickler
short-title: Firefox 145
slug: Mozilla/Firefox/Releases/145
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 145, die Entwickler betreffen.
Firefox 145 wurde am [11. November 2025](https://whattrainisitnow.com/release/?version=145) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die {{cssxref("text-autospace")}}-Eigenschaft wird jetzt unterstützt, was automatische Abstandsanpassungen zwischen Zeichen aus verschiedenen Schriftsystemen ermöglicht ([Firefox-Bug 1981086](https://bugzil.la/1981086), [Firefox-Bug 1869577](https://bugzil.la/1869577)).

- Die [`math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) generische Schriftfamilie wird nun als Wert der `font-family`-Eigenschaft unterstützt, sodass mathematische Ausdrücke geeignete Schriftarten verwenden können. ([Firefox-Bug 1788937](https://bugzil.la/1788937)).

- Separatoren können in {{htmlelement("select")}}-Menüs erscheinen, seitdem {{htmlelement("hr")}} in `<select>` implementiert wurde.
  Diese werden jetzt auch in Firefox für Android unterstützt. ([Firefox-Bug 1867045](https://bugzil.la/1867045), [Firefox-Bug 1830909](https://bugzil.la/1830909)).

### JavaScript

- Firefox unterstützt jetzt die statische Methode {{jsxref("Atomics.waitAsync()")}}, die eine Synchronisation von Threads basierend auf dem Wert in einem gemeinsam genutzten Speicherort ermöglicht.
  Die Methode wartet asynchron auf den Wert und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt. Sie ist nicht blockierend und kann im Haupt-Thread verwendet werden. ([Firefox-Bug 1884148](https://bugzil.la/1884148)).

### HTTP

- Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden nun für Skriptressourcen unterstützt. Diese ermöglichen es Websites, [Subresource-Integritätsgarantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für _Skripte_ durchzusetzen.
  Beachten Sie, dass der [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) Schlüssel noch nicht unterstützt wird (Verstöße werden in der Konsole protokolliert). ([Firefox-Bug 1984973](https://bugzil.la/1984973)).

### Sicherheit

- Wenn Bounce Tracking Protection (BTP) aktiviert ist, läuft es jetzt standardmäßig im "stateless"-Modus.
  Im "stateless"-Modus markiert der Browser nicht mehr nur Websites, die Teil eines "Bounce" sind und Statusinformationen setzen (wie ein Cookie); er markiert _alle_ Websites, die Teil eines "Bounce" sind. Siehe [Bounce tracking mitigations](/de/docs/Web/Privacy/Guides/Bounce_tracking_mitigations) für weitere Informationen darüber, wie BTP funktioniert. ([Firefox-Bug 1990831](https://bugzil.la/1990831)).

### APIs

- Die [`source`](/de/docs/Web/API/ToggleEvent/source) Eigenschaft der [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)-Schnittstelle wird jetzt unterstützt.
  Wenn ein [Popover](/de/docs/Web/API/Popover_API) durch ein HTML-Element wie ein {{htmlelement("button")}} geöffnet oder geschlossen wird, enthält die `source` Eigenschaft des Ereignisses das Element, das den Popover ausgelöst hat. ([Firefox-Bug 1968987](https://bugzil.la/1968987)).
- Eine [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Instanz wird jetzt für die `style` Eigenschaft auf [`HTMLElement`](/de/docs/Web/API/HTMLElement/style), [`MathMLElement`](/de/docs/Web/API/MathMLElement/style), [`SVGElement`](/de/docs/Web/API/SVGElement/style), und [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule/style), sowie die [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) Methode zurückgegeben. Früher wurde eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Instanz zurückgegeben. ([Firefox-Bug 1989925](https://bugzil.la/1989925))

#### Medien, WebRTC und Web Audio

- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) sind jetzt {{Glossary("Serializable_object", "serialisierbare Objekte")}}, und [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) und [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) Kopierkonstruktoren werden unterstützt. Diese Änderungen ermöglichen es, Frames zu klonen und zwischen Workern und dem Haupt-Thread zu teilen. ([Firefox-Bug 1868223](https://bugzil.la/1868223) und [Firefox-Bug 1975032](https://bugzil.la/1975032)).

- Der [Matroska-Container](/de/docs/Web/Media/Guides/Formats/Containers) (`.mkv`) wird jetzt für die am häufigsten verwendeten Codecs unterstützt: AVC, HEVC, VP8, VP9, AV1, AAC, Opus und Vorbis. ([Firefox-Bug 1991752](https://bugzil.la/1991752)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das `emulation.setUserAgentOverride`-Kommando wurde implementiert, das es erlaubt, den vom Browser verwendeten User-Agent-String entweder für einen Satz von Kontexten, Benutzerkontexten oder global zu überschreiben. ([Firefox-Bug 1987935](https://bugzil.la/1987935)).
- Das `browsingContext.downloadEnd` Ereignis wurde implementiert, das ausgelöst wird, wenn ein Download abgeschlossen ist (ob erfolgreich oder abgebrochen) ([Firefox-Bug 1970293](https://bugzil.la/1970293)).
- Die `destination`-Eigenschaft des `network.beforeRequestSent` Ereignisses wurde für Top-Level-Navigationen auf `document` aktualisiert. ([Firefox-Bug 1985552](https://bugzil.la/1985552)).
- Die `browsingContext`-Download-Ereignisse wurden aktualisiert, um dieselbe Navigations-ID wie das vorherige `browsingContext.navigationStarted` Ereignis wiederzuverwenden. ([Firefox-Bug 1986938](https://bugzil.la/1986938)).
- Ein Fehler bei der Netzwerddatenerfassung wurde behoben, bei dem nicht-ASCII-Zeichen in Antwortkörpern nicht richtig kodiert wurden. ([Firefox-Bug 1986022](https://bugzil.la/1986022)).
- Ein Fehler mit dem `network.getData` Kommando wurde behoben, durch den Anfragen mit einem leeren Antwortkörper fehlschlugen. ([Firefox-Bug 1986025](https://bugzil.la/1986025)).
- Ein Fehler, bei dem einige `network`-Ereignisse fälschlicherweise als blockiert markiert werden konnten, selbst wenn sie es nicht waren, wurde behoben. ([Firefox-Bug 1989919](https://bugzil.la/1989919)).

## Änderungen für Add-on-Entwickler

- Mit {{WebExtAPIRef("cookies.set()")}} erstellte Cookies werden jetzt validiert, und ungültige Cookies werden abgelehnt. Diese Änderung wurde nur in Nightly ab Firefox 142 implementiert. ([Firefox-Bug 1976509](https://bugzil.la/1976509))

## Experimentelle Webfeatures

Diese Funktionen werden in Firefox 145 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS-Anker-Positionierung** (Nightly): `layout.css.anchor-positioning.enabled`

  Nightly-Builds unterstützen nun standardmäßig [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning), die es ermöglicht, Elemente zusammen zu verankern.
  Die ankerpositionierten Elemente können dann in ihrer Größe und Position relativ zur Größe und Lage der Verankerungselemente, an die sie gebunden sind, eingestellt werden.
  (Allgemein: [Firefox-Bug 1988224](https://bugzil.la/1988224), {{cssxref("position-area")}}: [Firefox-Bug 1924086](https://bugzil.la/1924086), benutzerdefinierte {{cssxref("@position-try")}} Fallbacks: [Firefox-Bug 1962598](https://bugzil.la/1962598)).

- **CSS-Modul-Skripte:** (Nightly) und `layout.css.module-scripts.enabled`.

  CSS-Modul-Skripte werden jetzt unterstützt, was es ermöglicht, ein Stylesheet als eine [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanz unter Verwendung des [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Schlüsselworts und des [`type` import attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) mit `type="css"` zu laden. ([Firefox-Bug 1720570](https://bugzil.la/1720570)).

- **text-decoration-trim**: `layout.css.text-decoration-trim.enabled`

  Die CSS-Eigenschaft `text-decoration-trim` wird unterstützt, ist aber derzeit standardmäßig deaktiviert.
  Sie ermöglicht es, {{cssxref("text-decoration")}} Start- und Endversätze anzugeben, um Textverzierungen zu kürzen, zu verlängern oder ihre Position relativ zum Text zu verschieben ([Firefox-Bug 1979915](https://bugzil.la/1979915)).

- **Trusted Types API** für Skripte (Nightly/Early Beta): `dom.security.trusted_types.enabled`

  Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) ist nun in frühen Beta-Versionen aktiviert. ([Firefox-Bug 1976656](https://bugzil.la/1976656)).

  Die Änderungen umfassen:

- Hinzufügung der [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory), [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), [`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript), [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Schnittstellen und die `trustedTypes` Eigenschaft auf [`Window`](/de/docs/Web/API/Window/trustedTypes) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes).
  - Updates zu [Injektions-Schnittstellen](/de/docs/Web/API/Trusted_Types_API#injection_sink_interfaces) APIs, wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`document.write()`](/de/docs/Web/API/Document/write), um `TrustedHTML`, `TrustedScript`, `TrustedScriptURL` sowie Strings zu erlauben.
  - Unterstützung für die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) und [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) Direktiven sowie das [`'trusted-types-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) Schlüsselwort des {{HTTPHeader("Content-Security-Policy")}} HTTP-Headers.
    Diese können benutzt werden, um verlässliche Typen anstelle von Strings durchzusetzen, die spezifischen Richtlinien, die erlaubt sind, zu benennen und um [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) und ähnliche Funktionen zu aktivieren, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) unterstützt und durchgesetzt werden.

- **Header für Zugriff auf Speicher** (Nightly): `dom.storage_access.headers.enabled`.
  Die {{httpheader("Sec-Fetch-Storage-Access")}} und {{httpheader("Activate-Storage-Access")}} HTTP-Headers werden nun unterstützt, was einen effizienteren [Storage Access API](/de/docs/Web/API/Storage_Access_API)-Arbeitsablauf ermöglicht. ([Firefox-Bug 1991688](https://bugzil.la/1991688)).

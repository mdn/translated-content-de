---
title: Firefox 145 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 145 (Stabil)
slug: Mozilla/Firefox/Releases/145
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 145, die Entwickler betreffen.
Firefox 145 wurde am [11. November 2025](https://whattrainisitnow.com/release/?version=145) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die Eigenschaft {{cssxref("text-autospace")}} wird jetzt unterstützt, was automatische Abstandsänderungen zwischen Zeichen unterschiedlicher Schriften ermöglicht ([Firefox Bug 1981086](https://bugzil.la/1981086), [Firefox Bug 1869577](https://bugzil.la/1869577)).

- Die generische Schriftfamilie [`math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) wird jetzt als Wert der `font-family` Eigenschaft unterstützt, sodass mathematische Ausdrücke geeignete Schriftarten verwenden können. ([Firefox Bug 1788937](https://bugzil.la/1788937)).

- Trenner können in {{htmlelement("select")}} Menüs erscheinen, da {{htmlelement("hr")}} in `<select>` implementiert wurde. Diese werden jetzt auch in Firefox für Android unterstützt. ([Firefox Bug 1867045](https://bugzil.la/1867045), [Firefox Bug 1830909](https://bugzil.la/1830909)).

### JavaScript

- Firefox unterstützt jetzt die statische Methode {{jsxref("Atomics.waitAsync()")}}, die die Synchronisierung von Threads basierend auf dem Wert an einer gemeinsam genutzten Speicherstelle ermöglicht. Die Methode wartet asynchron auf den Wert und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt. Sie ist nicht blockierend und auf dem Hauptthread verwendbar. ([Firefox Bug 1884148](https://bugzil.la/1884148)).

### HTTP

- Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Skriptressourcen unterstützt. Diese ermöglichen Websites, [Subresource Integrity Guarantees](/de/docs/Web/Security/Defenses/Subresource_Integrity) für _Skripte_ durchzusetzen. Beachten Sie, dass der [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) Schlüssel noch nicht unterstützt wird (Verletzungen werden in die Konsole protokolliert). ([Firefox Bug 1984973](https://bugzil.la/1984973)).

### Sicherheit

- Wenn der Bounce Tracking Schutz (BTP) aktiviert ist, läuft er jetzt standardmäßig im "zustandslosen" Modus. Im "zustandslosen" Modus markiert der Browser nicht mehr nur Sites, die Teil eines "Bounces" sind und Zustandsinformationen setzen (wie z.B. ein Cookie); er markiert _alle_ Sites, die Teil eines "Bounces" sind. Weitere Informationen, wie BTP funktioniert, finden Sie unter [Bounce Tracking Mitigations](/de/docs/Web/Privacy/Guides/Bounce_tracking_mitigations). ([Firefox Bug 1990831](https://bugzil.la/1990831)).

### APIs

- Die [`source`](/de/docs/Web/API/ToggleEvent/source) Eigenschaft der [`ToggleEvent`](/de/docs/Web/API/ToggleEvent) Schnittstelle wird jetzt unterstützt. Wenn ein [Popover](/de/docs/Web/API/Popover_API) durch ein HTML-Element wie ein {{htmlelement("button")}} ausgelöst wird, enthält die `source` Eigenschaft des Events das Element, das das Popover ausgelöst hat. ([Firefox Bug 1968987](https://bugzil.la/1968987)).
- Eine [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Instanz wird jetzt für die `style` Eigenschaft auf [`HTMLElement`](/de/docs/Web/API/HTMLElement/style), [`MathMLElement`](/de/docs/Web/API/MathMLElement/style), [`SVGElement`](/de/docs/Web/API/SVGElement/style), und [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule/style) sowie der [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) Methode zurückgegeben. Bisher wurde eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Instanz zurückgegeben. ([Firefox Bug 1989925](https://bugzil.la/1989925))

#### Medien, WebRTC und Web Audio

- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) sind jetzt {{Glossary("Serializable_object", "serielle Objekte")}}, und [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) und [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) Kopierkonstruktoren werden unterstützt. Diese Änderungen ermöglichen es, Frames zu klonen und zwischen Arbeitern und dem Hauptthread zu teilen. ([Firefox Bug 1868223](https://bugzil.la/1868223) und [Firefox Bug 1975032](https://bugzil.la/1975032)).

- Der [Matroska-Container](/de/docs/Web/Media/Guides/Formats/Containers) (`.mkv`) wird nun für die am häufigsten verwendeten Codecs unterstützt: AVC, HEVC, VP8, VP9, AV1, AAC, Opus und Vorbis. ([Firefox Bug 1991752](https://bugzil.la/1991752)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der Befehl `emulation.setUserAgentOverride` wurde implementiert, der das Überschreiben des User-Agent-Strings durch den Browser entweder für eine Reihe von Kontexten, Benutzerkontexte oder global ermöglicht. ([Firefox Bug 1987935](https://bugzil.la/1987935)).
- Das Ereignis `browsingContext.downloadEnd` wurde implementiert, das ausgelöst wird, wenn ein Download abgeschlossen ist (egal, ob erfolgreich oder abgebrochen) ([Firefox Bug 1970293](https://bugzil.la/1970293)).
- Die `destination` Eigenschaft des `network.beforeRequestSent` Ereignisses für Top-Level-Navigationen wurde auf `document` aktualisiert. ([Firefox Bug 1985552](https://bugzil.la/1985552)).
- Die `browsingContext` Download-Ereignisse wurden aktualisiert, um dieselbe Navigations-ID wie das vorherige `browsingContext.navigationStarted` Ereignis wiederzuverwenden. ([Firefox Bug 1986938](https://bugzil.la/1986938)).
- Ein Fehler bei der Netzwertdatensammlung wurde behoben, bei dem Nicht-ASCII-Zeichen in Antwortkörpern nicht korrekt kodiert wurden. ([Firefox Bug 1986022](https://bugzil.la/1986022)).
- Ein Fehler mit dem `network.getData` Befehl wurde behoben, der Anfragen mit einem leeren Antwortkörper fehlschlagen lassen würde. ([Firefox Bug 1986025](https://bugzil.la/1986025)).
- Ein Fehler wurde behoben, bei dem einige `network` Ereignisse als blockiert gekennzeichnet werden konnten, selbst wenn sie es nicht waren. ([Firefox Bug 1989919](https://bugzil.la/1989919)).

## Änderungen für Add-On-Entwickler

- Mit {{WebExtAPIRef("cookies.set()")}} erstellte Cookies werden jetzt validiert und ungültige Cookies werden abgelehnt. Diese Änderung wurde nur im Nightly ab Firefox 142 implementiert. ([Firefox Bug 1976509](https://bugzil.la/1976509))

## Experimentelle Webfeatures

Diese Funktionen werden in Firefox 145 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um sie zu testen, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS-Ankerpositionierung** (Nightly): `layout.css.anchor-positioning.enabled`

  Nightly-Builds unterstützen jetzt standardmäßig [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning), die es ermöglicht, Elemente miteinander zu verknüpfen.
  Die ankerpositionierten Elemente können dann in ihrer Größe und Position relativ zur Größe und Lage der Ankerelemente, an die sie gebunden sind, eingestellt werden. (Allgemein: [Firefox Bug 1988224](https://bugzil.la/1988224), {{cssxref("position-area")}}: [Firefox Bug 1924086](https://bugzil.la/1924086), benutzerdefinierte {{cssxref("@position-try")}} Fallbacks: [Firefox Bug 1962598](https://bugzil.la/1962598)).

- **CSS-Modulskripte:** (Nightly) und `layout.css.module-scripts.enabled`.

  CSS-Modulskripte werden jetzt unterstützt, wodurch ein Stylesheet als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Instanz mithilfe des [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Schlüsselworts und des [`type` Importattributs](/de/docs/Web/JavaScript/Reference/Statements/import/with) mit `type="css"` geladen werden kann. ([Firefox Bug 1720570](https://bugzil.la/1720570)).

- **text-decoration-trim**: `layout.css.text-decoration-trim.enabled`

  Die CSS-Eigenschaft `text-decoration-trim` wird unterstützt, ist aber derzeit standardmäßig deaktiviert.
  Sie ermöglicht es, {{cssxref("text-decoration")}} Start- und Endversatze anzugeben, um die Position von Textdekorationen zu kürzen, zu verlängern oder zu verschieben ([Firefox Bug 1979915](https://bugzil.la/1979915)).

- **Trusted Types API** für Skripte (Nightly/Frühe Betaversion): `dom.security.trusted_types.enabled`

  Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) ist jetzt in frühen Beta-Versionen aktiviert. ([Firefox Bug 1976656](https://bugzil.la/1976656)).

  Die Änderungen umfassen:

- Hinzufügung der Schnittstellen [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory), [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), [`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript), [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) und die `trustedTypes` Eigenschaft auf [`Window`](/de/docs/Web/API/Window/trustedTypes) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes).
  - Aktualisierungen an [Injection Sink Interfaces](/de/docs/Web/API/Trusted_Types_API#injection_sink_interfaces) APIs wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`document.write()`](/de/docs/Web/API/Document/write), um das Übergeben von `TrustedHTML`, `TrustedScript`, `TrustedScriptURL` ebenso wie Strings zu ermöglichen.
  - Unterstützung für die Direktiven [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) und [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) sowie das Schlüsselwort [`'trusted-types-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) des {{HTTPHeader("Content-Security-Policy")}} HTTP-Headers. Diese können verwendet werden, um Trusted Types anstelle von Strings durchzusetzen, die spezifischen Richtlinien zu benennen, die erlaubt sind, und um [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) und ähnliche Funktionen zu aktivieren, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) unterstützt und durchgesetzt werden.

- **Storage Access Header** (Nightly): `dom.storage_access.headers.enabled`.
  Die HTTP-Header {{httpheader("Sec-Fetch-Storage-Access")}} und {{httpheader("Activate-Storage-Access")}} werden jetzt unterstützt und ermöglichen einen effizienteren [Storage Access API](/de/docs/Web/API/Storage_Access_API) Workflow. ([Firefox Bug 1991688](https://bugzil.la/1991688)).

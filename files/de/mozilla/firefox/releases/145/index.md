---
title: Versionshinweise für Entwickler zu Firefox 145 (Beta)
short-title: Firefox 145 (Beta)
slug: Mozilla/Firefox/Releases/145
l10n:
  sourceCommit: a73569aa91d7249336f5684819a55973530993f9
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 145, die Entwickler betreffen.
Firefox 145 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [11. November 2025](https://whattrainisitnow.com/release/?version=145) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte heben Sie die Überschrift auf, für die Sie Notizen erstellen -->

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

- Die {{cssxref("text-autospace")}}-Eigenschaft wird jetzt unterstützt, was automatische Anpassungen des Abstands zwischen Zeichen aus verschiedenen Schreibrichtungen ermöglicht ([Firefox Bug 1981086](https://bugzil.la/1981086), [Firefox Bug 1869577](https://bugzil.la/1869577)).

- Die [`math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) generische Schriftfamilie wird jetzt als Wert der `font-family`-Eigenschaft unterstützt, sodass mathematische Ausdrücke geeignete Schriftarten verwenden können. ([Firefox Bug 1788937](https://bugzil.la/1788937)).

- Trennzeichen können in {{htmlelement("select")}}-Menüs erscheinen, da {{htmlelement("hr")}} in `<select>` implementiert wurde.
  Diese werden jetzt auch in Firefox für Android unterstützt. ([Firefox Bug 1867045](https://bugzil.la/1867045), [Firefox Bug 1830909](https://bugzil.la/1830909)).

<!-- #### Entfernungen -->

### JavaScript

- Firefox unterstützt jetzt die statische Methode {{jsxref("Atomics.waitAsync()")}}, die die Synchronisation von Threads basierend auf dem Wert in einem geteilten Speicherbereich ermöglicht.
  Die Methode wartet asynchron auf den Wert und gibt ein Objekt zurück, das das Ergebnis der Operation repräsentiert. Sie ist nicht blockierend und auf dem Haupt-Thread nutzbar.
  ([Firefox Bug 1884148](https://bugzil.la/1884148)).

<!-- #### Entfernungen -->

### HTTP

- Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Skriptressourcen unterstützt. Diese ermöglichen es Websites, [Subressourcenintegritätsgarantien](/de/docs/Web/Security/Subresource_Integrity) für _Skripte_ durchzusetzen.
  Beachten Sie, dass der [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints)-Schlüssel noch nicht unterstützt wird (Verletzungen werden in der Konsole protokolliert). ([Firefox Bug 1984973](https://bugzil.la/1984973)).

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die [`source`](/de/docs/Web/API/ToggleEvent/source)-Eigenschaft der [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)-Schnittstelle wird jetzt unterstützt.
  Wenn ein [Popover](/de/docs/Web/API/Popover_API) von einem HTML-Element wie einem {{htmlelement("button")}} ausgelöst wird, enthält die `source`-Eigenschaft des Events das Element, das das Popover ausgelöst hat.
  ([Firefox Bug 1968987](https://bugzil.la/1968987)).
- Eine [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Instanz wird jetzt für die `style`-Eigenschaft auf [`HTMLElement`](/de/docs/Web/API/HTMLElement/style), [`MathMLElement`](/de/docs/Web/API/MathMLElement/style), [`SVGElement`](/de/docs/Web/API/SVGElement/style) und [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule/style) sowie die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) zurückgegeben. Zuvor wurde eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Instanz zurückgegeben.
  ([Firefox Bug 1989925](https://bugzil.la/1989925))

<!-- #### DOM -->

#### Medien, WebRTC und Web Audio

- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) sind jetzt {{Glossary("Serializable_object", "serialisierbare Objekte")}}, und [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) und [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) Kopierkonstruktoren werden unterstützt. Diese Änderungen ermöglichen es, Frames zu klonen und zwischen Workern und dem Haupt-Thread zu teilen. ([Firefox Bug 1868223](https://bugzil.la/1868223) und [Firefox Bug 1975032](https://bugzil.la/1975032)).

- Der [Matroska-Container](/de/docs/Web/Media/Guides/Formats/Containers) (`.mkv`) wird jetzt für die am häufigsten verwendeten Codecs unterstützt: AVC, HEVC, VP8, VP9, AV1, AAC, Opus und Vorbis. ([Firefox Bug 1991752](https://bugzil.la/1991752)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der Befehl `emulation.setUserAgentOverride` wurde implementiert, der es ermöglicht, den User-Agent-String des Browsers entweder für eine Reihe von Kontexten, Benutzerkontexten oder global zu überschreiben. ([Firefox Bug 1987935](https://bugzil.la/1987935)).
- Das Event `browsingContext.downloadEnd` wurde implementiert, das ausgelöst wird, wenn ein Download abgeschlossen ist (ob erfolgreich oder abgebrochen) ([Firefox Bug 1970293](https://bugzil.la/1970293)).
- Die `destination`-Eigenschaft des `network.beforeRequestSent`-Events wurde für oberste Navigationen auf `document` aktualisiert. ([Firefox Bug 1985552](https://bugzil.la/1985552)).
- Die Download-Ereignisse für `browsingContext` wurden aktualisiert, um dieselbe Navigations-ID wie das vorhergehende `browsingContext.navigationStarted`-Event wiederzuverwenden. ([Firefox Bug 1986938](https://bugzil.la/1986938)).
- Ein Fehler bei der Sammlung von Netzdaten wurde behoben, bei dem Nicht-ASCII-Zeichen in Antwortkörperschaften nicht richtig kodiert waren. ([Firefox Bug 1986022](https://bugzil.la/1986022)).
- Ein Fehler mit dem `network.getData`-Befehl wurde behoben, der Anfragen mit einem leeren Antwortkörper scheitern ließ. ([Firefox Bug 1986025](https://bugzil.la/1986025)).
- Ein Fehler wurde behoben, bei dem einige `network`-Events als blockiert gekennzeichnet werden konnten, obwohl sie es nicht waren. ([Firefox Bug 1989919](https://bugzil.la/1989919)).

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} erstellt wurden, werden jetzt validiert, und ungültige Cookies werden zurückgewiesen. Diese Änderung wurde nur in der Nightly-Version ab Firefox 142 implementiert. ([Firefox Bug 1976509](https://bugzil.la/1976509))

<!-- ### Entfernungen -->

<!-- ### Weitere -->

## Experimentelle Web-Features

Diese Features sind in Firefox 145 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der Seite für [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS Ankerpositionierung** (Nightly): `layout.css.anchor-positioning.enabled`

  Nightly-Builds unterstützen jetzt standardmäßig die [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning), die es ermöglicht, Elemente miteinander zu verbinden.
  Die ankerpositionierten Elemente können dann relativ zur Größe und Position der Ankerelemente, an die sie gebunden sind, Größe und Position haben.
  (Allgemein: [Firefox Bug 1988224](https://bugzil.la/1988224), `position-area`: [Firefox Bug 1924086](https://bugzil.la/1924086)).

- **CSS-Modulskripte:** (Nightly) und `layout.css.module-scripts.enabled`.

  CSS-Modulskripte werden jetzt unterstützt, was ermöglicht, ein Stylesheet als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanz über das [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Schlüsselwort und das [`type`-Importattribut](/de/docs/Web/JavaScript/Reference/Statements/import/with) mit `type="css"` in ein Skript zu laden. ([Firefox Bug 1720570](https://bugzil.la/1720570)).

- **text-decoration-trim**: `layout.css.text-decoration-trim.enabled`

  Die CSS-Eigenschaft `text-decoration-trim` wird unterstützt, ist jedoch derzeit standardmäßig deaktiviert.
  Sie ermöglicht es, {{cssxref("text-decoration")}} Start- und Endversätze anzugeben, um die Position von Textdekorationen in Bezug auf den Text zu verkürzen, zu verlängern oder zu verschieben. ([Firefox Bug 1979915](https://bugzil.la/1979915)).

- **Trusted Types API** für Skripte (Nightly/Early Beta): `dom.security.trusted_types.enabled`

  Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) ist jetzt in frühen Beta-Versionen aktiviert. ([Firefox Bug 1976656](https://bugzil.la/1976656)).

  Die Änderungen umfassen:

- Hinzufügung der Schnittstellen [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory), [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), [`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript), [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) und der Eigenschaft `trustedTypes` auf [`Window`](/de/docs/Web/API/Window/trustedTypes) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes).
  - Aktualisierungen von [Einspritzungsschnittstellen](/de/docs/Web/API/Trusted_Types_API#injection_sink_interfaces) APIs, wie z. B. [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`document.write()`](/de/docs/Web/API/Document/write), um auch `TrustedHTML`, `TrustedScript`, `TrustedScriptURL` und Strings zu erlauben.
  - Unterstützung für die Direktiven [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) und [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) sowie das Schlüsselwort [`'trusted-types-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) des {{HTTPHeader("Content-Security-Policy")}} HTTP-Headers.
    Diese können verwendet werden, um vertrauenswürdige Typen statt Strings zu erzwingen, die spezifischen Richtlinien zu benennen, die erlaubt sind, und [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) und ähnliche Funktionen zu aktivieren, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) unterstützt und durchgesetzt werden.

- **Speicherzugriffsheader** (Nightly): `dom.storage_access.headers.enabled`.
  Die HTTP-Header {{httpheader("Sec-Fetch-Storage-Access")}} und {{httpheader("Activate-Storage-Access")}} werden jetzt unterstützt und ermöglichen einen effizienteren Ablauf mit der [Storage Access API](/de/docs/Web/API/Storage_Access_API). ([Firefox Bug 1991688](https://bugzil.la/1991688)).

---
title: Firefox 145 Versionshinweise für Entwickler (Beta)
short-title: Firefox 145 (Beta)
slug: Mozilla/Firefox/Releases/145
l10n:
  sourceCommit: 4db798b6db5773ba5dd76511d60e151db65c320e
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 145, die Entwickler betreffen.
Firefox 145 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und erscheint am [11. November 2025](https://whattrainisitnow.com/release/?version=145).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie die Überschriften aus, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

### CSS

- Die {{cssxref("text-autospace")}}-Eigenschaft wird nun unterstützt, was automatische Abstandsänderungen zwischen Zeichen aus verschiedenen Skripten ermöglicht ([Firefox Bug 1981086](https://bugzil.la/1981086), [Firefox Bug 1869577](https://bugzil.la/1869577)).

- Die [`math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) generische Schriftartenfamilie wird jetzt als Wert der `font-family`-Eigenschaft unterstützt, wodurch mathematische Ausdrücke die geeigneten Schriftarten verwenden können.
  ([Firefox Bug 1788937](https://bugzil.la/1788937)).

### JavaScript

- Firefox unterstützt nun die {{jsxref("Atomics.waitAsync()")}} statische Methode, die eine Synchronisation von Threads basierend auf dem Wert an einem gemeinsam genutzten Speicherort ermöglicht.
  Die Methode wartet asynchron auf den Wert und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt. Sie ist nicht blockierend und kann im Haupt-Thread verwendet werden.
  ([Firefox Bug 1884148](https://bugzil.la/1884148)).

### HTTP

- Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Skriptressourcen unterstützt. Diese ermöglichen es Websites, [Subressourcen-Integritätsgarantien](/de/docs/Web/Security/Subresource_Integrity) für _Skripte_ durchzusetzen.
  Beachten Sie, dass der [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) Schlüssel noch nicht unterstützt wird (Verstöße werden in der Konsole protokolliert).
  ([Firefox Bug 1984973](https://bugzil.la/1984973)).

### APIs

- Die [`source`](/de/docs/Web/API/ToggleEvent/source) Eigenschaft der [`ToggleEvent`](/de/docs/Web/API/ToggleEvent) Schnittstelle wird jetzt unterstützt.
  Wenn ein [Popover](/de/docs/Web/API/Popover_API) ausgelöst wird, um durch ein HTML-Element wie ein {{htmlelement("button")}} geöffnet oder geschlossen zu werden, enthält die `source`-Eigenschaft des Ereignisses das Element, das das Popover ausgelöst hat.
  ([Firefox Bug 1968987](https://bugzil.la/1968987)).
- Eine [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Instanz wird nun für die `style`-Eigenschaft auf [`HTMLElement`](/de/docs/Web/API/HTMLElement/style), [`MathMLElement`](/de/docs/Web/API/MathMLElement/style), [`SVGElement`](/de/docs/Web/API/SVGElement/style) und [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule/style) sowie für die [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)-Methode zurückgegeben. Bisher wurde eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Instanz zurückgegeben.
  ([Firefox Bug 1989925](https://bugzil.la/1989925))

#### Medien, WebRTC und Web Audio

- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) sind jetzt {{Glossary("Serializable_object", "serialisierbare Objekte")}}, und die Copy-Konstruktoren [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) und [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) werden unterstützt. Diese Änderungen ermöglichen es, Frames zu klonen und zwischen Workern und dem Haupt-Thread zu teilen. ([Firefox Bug 1868223](https://bugzil.la/1868223) und [Firefox Bug 1975032](https://bugzil.la/1975032)).

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} erstellt werden, werden jetzt validiert und ungültige Cookies werden abgelehnt. Diese Änderung wurde nur in Nightly ab Firefox 142 implementiert. ([Firefox Bug 1976509](https://bugzil.la/1976509))

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 145 vorhanden, jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der [Seite zu experimentellen Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS-Ankerpositionierung** (Nightly): `layout.css.anchor-positioning.enabled`

  Nightly-Builds unterstützen jetzt standardmäßig [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning), was es ermöglicht, Elemente miteinander zu verankern.
  Die ankerpositionierten Elemente können dann ihre Größe und Position relativ zur Größe und Position der Ankerelemente, an die sie gebunden sind, einstellen.
  (Allgemein: [Firefox Bug 1988224](https://bugzil.la/1988224), `position-area`: [Firefox Bug 1924086](https://bugzil.la/1924086)).

- **CSS-Modulscripte:** (Nightly) und `layout.css.module-scripts.enabled`.

  CSS-Modulscripte werden jetzt unterstützt, was es ermöglicht, ein Stylesheet als eine [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanz in ein Skript zu laden, indem das [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Schlüsselwort und das [`type` import attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) auf `type="css"` gesetzt wird. ([Firefox Bug 1720570](https://bugzil.la/1720570)).

- **text-decoration-trim**: `layout.css.text-decoration-trim.enabled`

  Die CSS-`text-decoration-trim`-Eigenschaft wird unterstützt, ist aber derzeit standardmäßig deaktiviert.
  Sie ermöglicht es, {{cssxref("text-decoration")}} Start- und Endabstände anzugeben, um die Position von Textdekorationen in Bezug auf den Text zu verkürzen, zu verlängern oder zu verschieben ([Firefox Bug 1979915](https://bugzil.la/1979915)).

- **Trusted Types API** für Skripte (Nightly/Early Beta): `dom.security.trusted_types.enabled`

  Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) ist jetzt in frühen Beta-Versionen aktiviert. ([Firefox Bug 1976656](https://bugzil.la/1976656)).

  Die Änderungen umfassen:
  - Hinzufügen der Schnittstellen [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory), [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), [`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript), [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) und der `trustedTypes`-Eigenschaft auf [`Window`](/de/docs/Web/API/Window/trustedTypes) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes).
  - Aktualisierungen der [Injection-Sink-Schnittstellen](/de/docs/Web/API/Trusted_Types_API##injection_sink_interfaces) APIs, wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`document.write()`](/de/docs/Web/API/Document/write), um den `TrustedHTML`, `TrustedScript`, `TrustedScriptURL` neben Strings zuzulassen.
  - Unterstützung für die Direktiven [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) und [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) sowie das Schlüsselwort [`'trusted-types-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) im {{HTTPHeader("Content-Security-Policy")}} HTTP-Header.
    Diese können verwendet werden, um Trusted Types anstelle von Strings durchzusetzen, die spezifischen zulässigen Richtlinien zu benennen und [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) und ähnliche Funktionen zu ermöglichen, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) unterstützt und erzwungen werden.

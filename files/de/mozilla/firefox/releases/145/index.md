---
title: Firefox 145 Versionshinweise für Entwickler (Beta)
short-title: Firefox 145 (Beta)
slug: Mozilla/Firefox/Releases/145
l10n:
  sourceCommit: 986a94c12ed9fc62ae12440987d29b76c1814eaa
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 145, die Entwickler betreffen.
Firefox 145 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [11. November 2025](https://whattrainisitnow.com/release/?version=145) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

### CSS

- Die {{cssxref("text-autospace")}}-Eigenschaft wird jetzt unterstützt und ermöglicht automatische Abstandsänderungen zwischen Zeichen aus verschiedenen Skripten ([Firefox bug 1981086](https://bugzil.la/1981086), [Firefox bug 1869577](https://bugzil.la/1869577)).

- Das Legacy-Schlüsselwort [`-webkit-fill-available`](/de/docs/Web/CSS/Reference/Webkit_extensions#-webkit-prefixed_property_values) wird jetzt als Wert für die CSS-Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} unterstützt, um die Web-Kompatibilität zu verbessern.
  Dieses Schlüsselwort ist ein Alias für das kürzlich standardisierte `stretch`-Schlüsselwort (d.h. [`width: stretch`](/de/docs/Web/CSS/Reference/Properties/width#stretch) und [`height: stretch`](/de/docs/Web/CSS/Reference/Properties/height#stretch)), welches in Firefox noch nicht unterstützt wird.
  ([Firefox bug 1988938](https://bugzil.la/1988938), [Firefox bug 1789477](https://bugzil.la/1789477)).

- Die generische Schriftfamilie [`math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) wird jetzt als Wert der `font-family`-Eigenschaft unterstützt, sodass mathematische Ausdrücke geeignete Schriftarten verwenden können.
  ([Firefox bug 1788937](https://bugzil.la/1788937)).

<!-- #### Removals -->

### JavaScript

- Firefox unterstützt jetzt die statische Methode {{jsxref("Atomics.waitAsync()")}}, die eine Synchronisierung von Threads basierend auf dem Wert in einem gemeinsam genutzten Speicherort ermöglicht.
  Die Methode wartet asynchron auf den Wert und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt. Sie ist nicht-blockierend und kann im Haupt-Thread verwendet werden.
  ([Firefox bug 1884148](https://bugzil.la/1884148)).

<!-- #### Removals -->

### HTTP

- Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Skriptressourcen unterstützt. Dadurch können Websites [Integritätsgarantien für Subressourcen](/de/docs/Web/Security/Subresource_Integrity) für _Skripte_ durchsetzen.
  Beachten Sie, dass der [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints)-Schlüssel noch nicht unterstützt wird (Verletzungen werden in der Konsole protokolliert).
  ([Firefox bug 1984973](https://bugzil.la/1984973)).

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- Die [`source`](/de/docs/Web/API/ToggleEvent/source)-Eigenschaft der [`ToggleEvent`](/de/docs/Web/API/ToggleEvent) Schnittstelle wird jetzt unterstützt.
  Wenn ein [Popover](/de/docs/Web/API/Popover_API) durch ein HTML-Element wie z.B. ein {{htmlelement("button")}} ausgelöst wird, um geöffnet oder geschlossen zu werden, enthält die `source`-Eigenschaft des Events das Element, das das Popover ausgelöst hat.
  ([Firefox bug 1968987](https://bugzil.la/1968987)).
- Eine [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Instanz wird jetzt für die `style`-Eigenschaft bei [`HTMLElement`](/de/docs/Web/API/HTMLElement/style), [`MathMLElement`](/de/docs/Web/API/MathMLElement/style), [`SVGElement`](/de/docs/Web/API/SVGElement/style), und [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule/style) sowie die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) zurückgegeben. Bisher wurde eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Instanz zurückgegeben.
  ([Firefox bug 1989925](https://bugzil.la/1989925))

<!-- #### DOM -->

#### Media, WebRTC und Web Audio

- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) sind jetzt {{Glossary("Serializable_object", "serialisierbare Objekte")}}, und die copy constructors [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) und [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) werden unterstützt. Diese Änderungen ermöglichen es, Frames zu klonen und zwischen Workern und dem Haupt-Thread zu teilen. ([Firefox bug 1868223](https://bugzil.la/1868223) und [Firefox bug 1975032](https://bugzil.la/1975032)).

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} erstellt wurden, werden jetzt validiert, und ungültige Cookies werden zurückgewiesen. Diese Änderung wurde ursprünglich nur in Nightly ab Firefox 142 implementiert. ([Firefox bug 1976509](https://bugzil.la/1976509))

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Webfunktionen

Diese Funktionen werden in Firefox 145 bereitgestellt, sind aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS-Anker-Positionierung** (Nightly): `layout.css.anchor-positioning.enabled`

  Nightly-Builds unterstützen jetzt standardmäßig die [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning), die es Ihnen ermöglicht, Elemente zusammen zu verankern.
  Die ankerpositionierten Elemente können dann ihre Größe und Position relativ zur Größe und Position der Ankerelemente, an die sie gebunden sind, einstellen.
  (Allgemein: [Firefox bug 1988224](https://bugzil.la/1988224), `position-area`: [Firefox bug 1924086](https://bugzil.la/1924086)).

- **CSS-Modulskripte:** (Nightly) und `layout.css.module-scripts.enabled`.

  CSS-Modulskripte werden jetzt unterstützt, was es ermöglicht, ein Stylesheet als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanz mit dem [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Schlüsselwort und dem [`type` import attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with), das auf `type="css"` gesetzt ist, in ein Skript zu laden. ([Firefox bug 1720570](https://bugzil.la/1720570)).

- **text-decoration-trim**: `layout.css.text-decoration-trim.enabled`

  Die CSS-Eigenschaft `text-decoration-trim` wird unterstützt, ist jedoch derzeit standardmäßig deaktiviert.
  Sie ermöglicht es, {{cssxref("text-decoration")}} Anfangs- und End-Offsets festzulegen, um die Position der Textdekorationen im Verhältnis zum Text zu verkürzen, verlängern oder zu verschieben ([Firefox bug 1979915](https://bugzil.la/1979915)).

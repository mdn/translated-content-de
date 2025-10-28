---
title: Veröffentlichungsnotizen für Entwickler zu Firefox 145 (Beta)
short-title: Firefox 145 (Beta)
slug: Mozilla/Firefox/Releases/145
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 145, die Entwickler betreffen. Firefox 145 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [11. November 2025](https://whattrainisitnow.com/release/?version=145) veröffentlicht.

> [!NOTE]
> Die Veröffentlichungsnotizen für diese Version von Firefox befinden sich noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Notizen schreiben -->

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

- Die {{cssxref("text-autospace")}} Eigenschaft wird jetzt unterstützt und ermöglicht automatische Anpassungen der Abstände zwischen Zeichen aus verschiedenen Schriftsystemen ([Firefox Bug 1981086](https://bugzil.la/1981086), [Firefox Bug 1869577](https://bugzil.la/1869577)).

- Das veraltete [`-webkit-fill-available`](/de/docs/Web/CSS/Reference/Webkit_extensions#-webkit-prefixed_property_values) Schlüsselwort wird nun als Wert für die CSS-Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} unterstützt, um die Web-Kompatibilität zu verbessern. Dieses Schlüsselwort ist ein Alias für das kürzlich standardisierte `stretch` Schlüsselwort (d.h. [`width: stretch`](/de/docs/Web/CSS/width#stretch) und [`height: stretch`](/de/docs/Web/CSS/height#stretch)), das in Firefox noch nicht unterstützt wird. ([Firefox Bug 1988938](https://bugzil.la/1988938), [Firefox Bug 1789477](https://bugzil.la/1789477)).

- Die generische Schriftfamilie [`math`](/de/docs/Web/CSS/font-family#math) wird nun als Wert der Eigenschaft `font-family` unterstützt, was es mathematischen Ausdrücken ermöglicht, passende Schriftarten zu verwenden. ([Firefox Bug 1788937](https://bugzil.la/1788937)).

<!-- #### Entfernungen -->

### JavaScript

- Firefox unterstützt jetzt die statische Methode {{jsxref("Atomics.waitAsync()")}}, die die Synchronisation von Threads basierend auf dem Wert an einem gemeinsam genutzten Speicherort ermöglicht. Die Methode wartet asynchron auf den Wert und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt. Sie ist nicht blockierend und kann im Haupt-Thread verwendet werden. ([Firefox Bug 1884148](https://bugzil.la/1884148)).

<!-- #### Entfernungen -->

### HTTP

- Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden nun für Skriptressourcen unterstützt. Diese ermöglichen es Websites, [Integritätsgarantien für Subressourcen](/de/docs/Web/Security/Subresource_Integrity) für _Skripte_ durchzusetzen. Beachten Sie, dass der [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) Schlüssel noch nicht unterstützt wird (Verstöße werden in der Konsole protokolliert). ([Firefox Bug 1984973](https://bugzil.la/1984973)).

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die [`source`](/de/docs/Web/API/ToggleEvent/source) Eigenschaft der [`ToggleEvent`](/de/docs/Web/API/ToggleEvent) Schnittstelle wird nun unterstützt. Wenn ein [Popover](/de/docs/Web/API/Popover_API) durch ein HTML-Element wie ein {{htmlelement("button")}} geöffnet oder geschlossen wird, enthält die `source`-Eigenschaft des Ereignisses das Element, das das Popover ausgelöst hat. ([Firefox Bug 1968987](https://bugzil.la/1968987)).
- Eine [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Instanz wird jetzt für die `style` Eigenschaft auf [`HTMLElement`](/de/docs/Web/API/HTMLElement/style), [`MathMLElement`](/de/docs/Web/API/MathMLElement/style), [`SVGElement`](/de/docs/Web/API/SVGElement/style) und [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule/style) sowie die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) zurückgegeben. Früher wurde eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Instanz zurückgegeben. ([Firefox Bug 1989925](https://bugzil.la/1989925))

<!-- #### DOM -->

#### Medien, WebRTC und Web Audio

- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) sind jetzt {{Glossary("Serializable_object", "serialisierbare Objekte")}}, und die Kopierkonstruktoren [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) und [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) werden unterstützt. Diese Änderungen ermöglichen es, Frames zu klonen und zwischen Workern und dem Haupt-Thread zu teilen. ([Firefox Bug 1868223](https://bugzil.la/1868223) und [Firefox Bug 1975032](https://bugzil.la/1975032)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} erstellt wurden, werden jetzt validiert und ungültige Cookies werden abgelehnt. Diese Änderung wurde nur ab Firefox 142 in Nightly implementiert. ([Firefox Bug 1976509](https://bugzil.la/1976509))

<!-- ### Entfernungen -->

<!-- ### Andere -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 145 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS-Anker-Positionierung** (Nightly): `layout.css.anchor-positioning.enabled`

  Nightly-Builds unterstützen jetzt standardmäßig die [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning), die es ermöglicht, Elemente miteinander zu verknüpfen. Die ankerpositionierten Elemente können dann ihre Größe und Position relativ zur Größe und Position der Ankerelemente, an die sie gebunden sind, anpassen. (Allgemein: [Firefox Bug 1988224](https://bugzil.la/1988224), `position-area`: [Firefox Bug 1924086](https://bugzil.la/1924086)).

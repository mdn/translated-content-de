---
title: Firefox 145 Versionshinweise für Entwickler (Beta)
short-title: Firefox 145 (Beta)
slug: Mozilla/Firefox/Releases/145
l10n:
  sourceCommit: afd98df112547c4c47369c47a7ea7e9bc00ec9e2
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 145, die Entwickler beeinflussen.
Firefox 145 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [11. November 2025](https://whattrainisitnow.com/release/?version=145) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Anmerkungen schreiben -->

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

- Die {{cssxref("text-autospace")}} Eigenschaft wird jetzt unterstützt, was automatische Abstandsänderungen zwischen Zeichen aus verschiedenen Schriften ermöglicht ([Firefox-Bug 1981086](https://bugzil.la/1981086), [Firefox-Bug 1869577](https://bugzil.la/1869577)).

- Die [`math`](/de/docs/Web/CSS/Reference/Properties/font-family#math) generische Schriftfamilie wird jetzt als Wert der `font-family` Eigenschaft unterstützt, wodurch mathematische Ausdrücke geeignete Schriftarten verwenden können.
  ([Firefox-Bug 1788937](https://bugzil.la/1788937)).

<!-- #### Entfernungen -->

### JavaScript

- Firefox unterstützt jetzt die statische Methode {{jsxref("Atomics.waitAsync()")}}, die die Synchronisation von Threads basierend auf dem Wert in einer freigegebenen Speicherstelle ermöglicht.
  Die Methode wartet asynchron auf den Wert und gibt ein Objekt zurück, das das Ergebnis des Vorgangs repräsentiert. Sie ist nicht blockierend und kann im Haupt-Thread verwendet werden.
  ([Firefox-Bug 1884148](https://bugzil.la/1884148)).

<!-- #### Entfernungen -->

### HTTP

- Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Skriptressourcen unterstützt. Diese ermöglichen es Websites, [Integritätsgarantien für Unterressourcen](/de/docs/Web/Security/Subresource_Integrity) für _Skripts_ durchzusetzen.
  Beachten Sie, dass der [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) Schlüssel noch nicht unterstützt wird (Verstöße werden in der Konsole protokolliert).
  ([Firefox-Bug 1984973](https://bugzil.la/1984973)).

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die [`source`](/de/docs/Web/API/ToggleEvent/source) Eigenschaft des [`ToggleEvent`](/de/docs/Web/API/ToggleEvent) Interfaces wird jetzt unterstützt.
  Wenn ein [Popover](/de/docs/Web/API/Popover_API) durch ein HTML-Element wie ein {{htmlelement("button")}} ausgelöst wird, enthält die `source`-Eigenschaft des Events das Element, das das Popover ausgelöst hat.
  ([Firefox-Bug 1968987](https://bugzil.la/1968987)).
- Eine [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Instanz wird jetzt für die `style` Eigenschaft auf [`HTMLElement`](/de/docs/Web/API/HTMLElement/style), [`MathMLElement`](/de/docs/Web/API/MathMLElement/style), [`SVGElement`](/de/docs/Web/API/SVGElement/style), und [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule/style) sowie die [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) Methode zurückgegeben. Zuvor wurde eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Instanz zurückgegeben.
  ([Firefox-Bug 1989925](https://bugzil.la/1989925))

<!-- #### DOM -->

#### Medien, WebRTC und Web Audio

- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) sind jetzt {{Glossary("Serializable_object", "serialisierbare Objekte")}}, und [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) und [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) Kopierkonstruktoren werden unterstützt. Diese Änderungen ermöglichen es, Frames zu klonen und zwischen Workern und dem Haupt-Thread zu teilen. ([Firefox-Bug 1868223](https://bugzil.la/1868223) und [Firefox-Bug 1975032](https://bugzil.la/1975032)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Mit {{WebExtAPIRef("cookies.set()")}} erstellte Cookies werden jetzt validiert, und ungültige Cookies werden abgelehnt. Diese Änderung wurde in Nightly ab Firefox 142 implementiert. ([Firefox-Bug 1976509](https://bugzil.la/1976509))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 145 enthalten, aber standardmäßig deaktiviert.
Um sie zu testen, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS Ankerpositionierung** (Nightly): `layout.css.anchor-positioning.enabled`

  Nightly-Builds unterstützen jetzt standardmäßig [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning), die es ermöglicht, Elemente miteinander zu verknüpfen.
  Die ankerpositionierten Elemente können dann in ihrer Größe und Position relativ zur Größe und Lage der Ankerelemente, an die sie gebunden sind, festgelegt werden.
  (Allgemein: [Firefox-Bug 1988224](https://bugzil.la/1988224), `position-area`: [Firefox-Bug 1924086](https://bugzil.la/1924086)).

- **CSS Modulskripte:** (Nightly) und `layout.css.module-scripts.enabled`.

  CSS Modulskripte werden jetzt unterstützt, sodass ein Stylesheet als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Instanz mit dem [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Schlüsselwort geladen werden kann, wobei das [`type` Import-Attribut](/de/docs/Web/JavaScript/Reference/Statements/import/with) auf `type="css"` gesetzt ist. ([Firefox-Bug 1720570](https://bugzil.la/1720570)).

- **text-decoration-trim**: `layout.css.text-decoration-trim.enabled`

  Die CSS `text-decoration-trim` Eigenschaft wird unterstützt, ist derzeit aber standardmäßig deaktiviert.
  Sie ermöglicht es, `{{cssxref("text-decoration")}}` Anfangs- und Endversätze anzugeben, um die Position von Textdekorationen in Bezug auf den Text zu verkürzen, zu verlängern oder zu verschieben ([Firefox-Bug 1979915](https://bugzil.la/1979915)).

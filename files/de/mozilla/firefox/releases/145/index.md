---
title: Firefox 145 Versionshinweise für Entwickler (Beta)
short-title: Firefox 145 (Beta)
slug: Mozilla/Firefox/Releases/145
l10n:
  sourceCommit: 4ff511f97d5f2d836ddaa508474abe22e04b1b05
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 145, die Entwickler betreffen. Firefox 145 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [11. November 2025](https://whattrainisitnow.com/release/?version=145) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Notizen schreiben -->

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

- Die Eigenschaft {{cssxref("text-autospace")}} wird jetzt unterstützt, wodurch automatische Abstandsänderungen zwischen Zeichen aus verschiedenen Schriftsystemen ermöglicht werden ([Firefox Bug 1981086](https://bugzil.la/1981086), [Firefox Bug 1869577](https://bugzil.la/1869577)).

- Firefox unterstützt jetzt das veraltete [`-webkit-fill-available` Schlüsselwort](/de/docs/Web/CSS/WebKit_Extensions) als Wert für die CSS-Eigenschaften {{cssxref("width")}} und {{cssxref("height")}}, um die Web-Kompatibilität zu verbessern. Dieses Schlüsselwort ist ein Alias für das kürzlich standardisierte `stretch` Schlüsselwort (d.h. [`width: stretch`](/de/docs/Web/CSS/width#stretch) und [`height: stretch`](/de/docs/Web/CSS/height#stretch)), welches in Firefox noch nicht unterstützt wird. ([Firefox Bug 1988938](https://bugzil.la/1988938), [Firefox Bug 1789477](https://bugzil.la/1789477)).

- Die generische Schriftfamilie [`math`](/de/docs/Web/CSS/font-family#math) wird jetzt als Wert der `font-family` Eigenschaft unterstützt, sodass mathematische Ausdrücke geeignete Schriftarten verwenden können. ([Firefox Bug 1788937](https://bugzil.la/1788937)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

### JavaScript

- Firefox unterstützt nun die statische Methode {{jsxref("Atomics.waitAsync()")}}, die eine Synchronisation von Threads basierend auf dem Wert in einem gemeinsam genutzten Speicherbereich ermöglicht. Die Methode wartet asynchron auf den Wert und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt. Sie ist nicht blockierend und kann im Hauptthread verwendet werden. ([Firefox Bug 1884148](https://bugzil.la/1884148)).

<!-- #### Entfernungen -->

### HTTP

- Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Skriptressourcen unterstützt. Diese ermöglichen es Websites, [Sicherheitsgarantien für Subressourcen](/de/docs/Web/Security/Subresource_Integrity) für _Skripte_ durchzusetzen. Beachten Sie, dass der Schlüssel [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) noch nicht unterstützt wird (Verstöße werden in der Konsole protokolliert). ([Firefox Bug 1984973](https://bugzil.la/1984973)).

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die Eigenschaft [`source`](/de/docs/Web/API/ToggleEvent/source) des [`ToggleEvent`](/de/docs/Web/API/ToggleEvent) Interface wird jetzt unterstützt. Wenn ein [Popover](/de/docs/Web/API/Popover_API) durch ein HTML-Element wie ein {{htmlelement("button")}} ausgelöst wird, enthält die `source` Eigenschaft des Ereignisses das Element, das das Popover ausgelöst hat. ([Firefox Bug 1968987](https://bugzil.la/1968987)).

<!-- #### DOM -->

#### Medien, WebRTC und Web Audio

- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) sind jetzt {{Glossary("Serializable_object", "serialisierbare Objekte")}}, und [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) sowie [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) Kopierkonstruktoren werden unterstützt. Diese Änderungen ermöglichen es, Frames zu klonen und zwischen Workern und dem Hauptthread zu teilen. ([Firefox Bug 1868223](https://bugzil.la/1868223) und [Firefox Bug 1975032](https://bugzil.la/1975032)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} erstellt wurden, werden jetzt validiert, und ungültige Cookies werden abgelehnt. Diese Änderung wurde in Nightly ab Firefox 142 umgesetzt. ([Firefox Bug 1976509](https://bugzil.la/1976509))

<!-- ### Entfernungen -->

<!-- ### Andere -->

## Experimentelle Web-Features

Diese Features sind in Firefox 145 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS-Ankerpositionierung** (Nightly): `layout.css.anchor-positioning.enabled`

  Nightly-Builds unterstützen jetzt standardmäßig die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning), die es ermöglicht, Elemente miteinander zu verknüpfen. Die ankerpositionierten Elemente können dann ihre Größe und Position relativ zur Größe und Position der Ankerelemente, an die sie gebunden sind, festlegen. ([Firefox Bug 1988224](https://bugzil.la/1988224)).

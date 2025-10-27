---
title: Firefox 145 Versionshinweise für Entwickler (Beta)
short-title: Firefox 145 (Beta)
slug: Mozilla/Firefox/Releases/145
l10n:
  sourceCommit: eab64f20d32a6755b75a78315f638543f65c7796
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 145, die Entwickler betreffen.
Firefox 145 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [11. November 2025](https://whattrainisitnow.com/release/?version=145) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte alle Überschriften auskommentieren, zu denen Sie Anmerkungen schreiben -->

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

- Die {{cssxref("text-autospace")}} Eigenschaft wird jetzt unterstützt, was eine automatische Anpassung der Abstände zwischen Zeichen aus verschiedenen Schriften ermöglicht ([Firefox Fehler 1981086](https://bugzil.la/1981086), [Firefox Fehler 1869577](https://bugzil.la/1869577)).

- Das veraltete [`-webkit-fill-available`](/de/docs/Web/CSS/WebKit_Extensions#-webkit-prefixed_property_values) Schlüsselwort wird jetzt als Wert für die CSS {{cssxref("width")}} und {{cssxref("height")}} Eigenschaften unterstützt, um die Web-Kompatibilität zu verbessern.
  Dieses Schlüsselwort ist ein Alias für das kürzlich standardisierte `stretch` Schlüsselwort (d.h. [`width: stretch`](/de/docs/Web/CSS/width#stretch) und [`height: stretch`](/de/docs/Web/CSS/height#stretch)), das in Firefox noch nicht unterstützt wird.
  ([Firefox Fehler 1988938](https://bugzil.la/1988938), [Firefox Fehler 1789477](https://bugzil.la/1789477)).

- Die [`math`](/de/docs/Web/CSS/font-family#math) generische Schriftartfamilie wird nun als Wert der `font-family` Eigenschaft unterstützt, wodurch mathematische Ausdrücke geeignete Schriftarten verwenden können.
  ([Firefox Fehler 1788937](https://bugzil.la/1788937)).

<!-- #### Entfernungen -->

### JavaScript

- Firefox unterstützt jetzt die {{jsxref("Atomics.waitAsync()")}} statische Methode, die die Synchronisation von Threads basierend auf dem Wert in einem gemeinsamen Speicherort ermöglicht.
  Die Methode wartet asynchron auf den Wert und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt. Sie ist nicht-blockierend und kann im Hauptthread verwendet werden.
  ([Firefox Fehler 1884148](https://bugzil.la/1884148)).

<!-- #### Entfernungen -->

### HTTP

- Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Skriptressourcen unterstützt. Diese erlauben es Websites, [Unversehrtheitsgarantien für Subressourcen](/de/docs/Web/Security/Subresource_Integrity) für _Skripte_ durchzusetzen.
  Beachten Sie, dass der [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) Schlüssel noch nicht unterstützt wird (Verstöße werden in der Konsole protokolliert).
  ([Firefox Fehler 1984973](https://bugzil.la/1984973)).

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die [`source`](/de/docs/Web/API/ToggleEvent/source) Eigenschaft des [`ToggleEvent`](/de/docs/Web/API/ToggleEvent) Interfaces wird jetzt unterstützt.
  Wenn ein [Popover](/de/docs/Web/API/Popover_API) durch ein HTML-Element wie ein {{htmlelement("button")}} ausgelöst wird, enthalten die `source` Eigenschaft des Ereignisses das Element, das das Popover ausgelöst hat.
  ([Firefox Fehler 1968987](https://bugzil.la/1968987)).

<!-- #### DOM -->

#### Medien, WebRTC und Web Audio

- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) sind nun {{Glossary("Serializable_object", "serialisierbare Objekte")}}, und [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) und [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) Copy-Konstruktoren werden unterstützt. Diese Änderungen ermöglichen es, Frames zu klonen und zwischen Workern und dem Hauptthread zu teilen. ([Firefox Fehler 1868223](https://bugzil.la/1868223) und [Firefox Fehler 1975032](https://bugzil.la/1975032)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} erstellt wurden, werden jetzt validiert, und ungültige Cookies werden abgelehnt. Diese Änderung wurde nur in Nightly ab Firefox 142 umgesetzt. ([Firefox Fehler 1976509](https://bugzil.la/1976509))

<!-- ### Entfernungen -->

<!-- ### Andere -->

## Experimentelle Webfunktionen

Diese Funktionen werden in Firefox 145 ausgeliefert, sind aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **CSS Ankerpositionierung** (Nightly): `layout.css.anchor-positioning.enabled`

  Nightly-Builds unterstützen jetzt standardmäßig [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning), mit der Sie Elemente miteinander verknüpfen können.
  Die ankerpositionierten Elemente können dann in ihrer Größe und Position relativ zur Größe und Position der Ankerelemente eingestellt werden, an die sie gebunden sind.
  (Allgemein: [Firefox Fehler 1988224](https://bugzil.la/1988224), `position-area`: [Firefox Fehler 1924086](https://bugzil.la/1924086)).

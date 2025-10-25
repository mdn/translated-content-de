---
title: Firefox 145 Versionshinweise für Entwickler (Beta)
short-title: Firefox 145 (Beta)
slug: Mozilla/Firefox/Releases/145
l10n:
  sourceCommit: f5f9244b2c9ba209c187fd50fb4f44d4d7f12ab5
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 145, die Entwickler betreffen.
Firefox 145 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [11. November 2025](https://whattrainisitnow.com/release/?version=145) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- Die {{cssxref("text-autospace")}} Eigenschaft wird jetzt unterstützt, was automatische Abstandsjustierungen zwischen Zeichen aus verschiedenen Schriftsystemen ermöglicht ([Firefox-Bug 1981086](https://bugzil.la/1981086), [Firefox-Bug 1869577](https://bugzil.la/1869577)).

- Firefox unterstützt jetzt das veraltete [`-webkit-fill-available` Schlüsselwort](Web/CSS/WebKit_Extensions) als Wert für die CSS-Eigenschaften {{cssxref("width")}} und {{cssxref("height")}}, um die Webkompatibilität zu verbessern.
  Dieses Schlüsselwort ist ein Alias für das kürzlich standardisierte `stretch` Schlüsselwort (z.B. [`width: stretch`](/de/docs/Web/CSS/width#stretch) und [`height: stretch`](/de/docs/Web/CSS/height#stretch)), welches in Firefox noch nicht unterstützt wird.
  ([Firefox-Bug 1988938](https://bugzil.la/1988938), [Firefox-Bug 1789477](https://bugzil.la/1789477)).

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernungen -->

### HTTP

- Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden nun für Skriptressourcen unterstützt. Diese erlauben es Websites, [Integritätsgarantien für Subressourcen](/de/docs/Web/Security/Subresource_Integrity) für _Skripte_ durchzusetzen.
  Beachten Sie, dass der [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) Schlüssel noch nicht unterstützt wird (Verstöße werden in der Konsole protokolliert).
  ([Firefox-Bug 1984973](https://bugzil.la/1984973)).

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

<!-- #### DOM -->

#### Medien, WebRTC und Web Audio

- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) sind jetzt {{Glossary("Serializable_object", "serialisierbare Objekte")}}, und [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) und [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) Copy-Konstruktoren werden unterstützt. Diese Änderungen erlauben es, Frames zu klonen und zwischen Arbeitern und dem Hauptthread zu teilen. ([Firefox-Bug 1868223](https://bugzil.la/1868223) und [Firefox-Bug 1975032](https://bugzil.la/1975032)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Komformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} erstellt wurden, werden jetzt validiert, und ungültige Cookies werden abgelehnt. Diese Änderung wurde nur in Nightly ab Firefox 142 implementiert. ([Firefox-Bug 1976509](https://bugzil.la/1976509))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Web-Features

Diese Funktionen werden in Firefox 145 bereitgestellt, sind aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS-Anker-Positionierung** (Nightly): `layout.css.anchor-positioning.enabled`

  Nightly-Builds unterstützen nun standardmäßig [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning), die es ermöglicht, Elemente miteinander zu verbinden.
  Die ankerpositionierten Elemente können dann in ihrer Größe und Position relativ zur Größe und Lage der Ankerelemente, an die sie gebunden sind, gesetzt werden.
  ([Firefox-Bug 1988224](https://bugzil.la/1988224)).

---
title: Firefox 145 Versionshinweise für Entwickler (Beta)
short-title: Firefox 145 (Beta)
slug: Mozilla/Firefox/Releases/145
l10n:
  sourceCommit: 29998b5a6e4b776dbba1893e016452d081f9ee65
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

<!-- ### CSS -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

### HTTP

- Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Skriptressourcen unterstützt. Diese ermöglichen es Websites, [Subressourcen-Integritätsgarantien](/de/docs/Web/Security/Subresource_Integrity) für _Skripte_ durchzusetzen.
  Beachten Sie, dass der Schlüssel [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) noch nicht unterstützt wird (Verstöße werden in der Konsole protokolliert).
  ([Firefox-Bug 1984973](https://bugzil.la/1984973)).

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

<!-- ### APIs -->

<!-- #### DOM -->

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} erstellt werden, sind jetzt validiert, und ungültige Cookies werden abgelehnt. Diese Änderung wurde zuerst nur in Nightly ab Firefox 142 implementiert. ([Firefox-Bug 1976509](https://bugzil.la/1976509))

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 145 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

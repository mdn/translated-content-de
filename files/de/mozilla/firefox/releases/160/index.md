---
title: "Firefox 160: Versionshinweise für Entwickler (Beta)"
short-title: Firefox 160 (Beta)
slug: Mozilla/Firefox/Releases/160
l10n:
  sourceCommit: 76f6f1b8f87e819a7d09f6f5bc431df508a4e8d6
---

Dieser Artikel informiert über Änderungen in Firefox 160, die für Entwickler relevant sind.
Firefox 160 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und erscheint am [10. November 2026](https://whattrainisitnow.com/release/?version=160).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

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

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- Der Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) akzeptiert jetzt die Option [`headers`](/de/docs/Web/API/WebTransport/WebTransport#headers). Damit lassen sich dem [erweiterten `CONNECT`-Request](/de/docs/Web/HTTP/Reference/Methods/CONNECT#extended_connect), der die Sitzung einrichtet, benutzerdefinierte HTTP-Header hinzufügen.
  Die Header, die der Server in seiner Antwort sendet, sind nach dem Aufbau der Sitzung über die Eigenschaft [`WebTransport.responseHeaders`](/de/docs/Web/API/WebTransport/responseHeaders) verfügbar.
  ([Firefox-Bug 2081470](https://bugzil.la/2081470), [Firefox-Bug 2033220](https://bugzil.la/2033220)).
- Die Methode [`WebTransport.exportKeyingMaterial()`](/de/docs/Web/API/WebTransport/exportKeyingMaterial) wurde an die aktuelle Spezifikation angepasst.
  Das Argument `context` ist jetzt erforderlich. Das neue Argument [`outputLength`](/de/docs/Web/API/WebTransport/exportKeyingMaterial#outputlength) gibt an, wie viele Bytes Schlüsselmaterial abgeleitet werden sollen.
  Zuvor gab die Methode immer 32 Bytes zurück.
  Code, der eines der beiden Argumente auslässt, muss aktualisiert werden.
  ([Firefox-Bug 2079306](https://bugzil.la/2079306)).

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

- {{WebExtAPIRef("runtime.PlatformInfo")}} gibt für ARM64-Plattformen jetzt `arch` mit dem Wert `arm64` zurück. Zuvor wurde `aarch64` zurückgegeben. Damit entspricht der von Firefox für ARM64-Plattformen zurückgegebene Wert dem von Chrome. ([Firefox-Bug 2080310](https://bugzil.la/2080310))

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 160 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere Funktionen dieser Art finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

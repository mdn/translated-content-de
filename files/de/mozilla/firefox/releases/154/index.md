---
title: Firefox 154 Versionshinweise für Entwickler (Beta)
short-title: Firefox 154 (Beta)
slug: Mozilla/Firefox/Releases/154
l10n:
  sourceCommit: 7dae8cc1bbde35982df7baaa495714f45a064913
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 154, die Entwickler betreffen.
Firefox 154 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [18. August 2026](https://whattrainisitnow.com/release/?version=154) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte heben Sie alle Überschriften hervor, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

<!-- ### CSS -->

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

<!-- #### DOM -->

#### Media, WebRTC und Web Audio

- Die Methode [`RTCIceTransport.getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) und das Ereignis [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event) werden nun unterstützt, um das aktuelle [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair) für den Transport zu erhalten.
  ([Firefox-Bug 2019332](https://bugzil.la/2019332)).
- Das Ereignis [`error`](/de/docs/Web/API/RTCDtlsTransport/error_event) wird jetzt bei [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) ausgelöst, um DTLS- und Fingerabdruckfehler zu melden.
  ([Firefox-Bug 1805447](https://bugzil.la/1805447)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 154 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere dieser Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

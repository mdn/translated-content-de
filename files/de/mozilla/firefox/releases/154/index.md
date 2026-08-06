---
title: Firefox 154 Versionshinweise für Entwickler (Beta)
short-title: Firefox 154 (Beta)
slug: Mozilla/Firefox/Releases/154
l10n:
  sourceCommit: 7b081f165c7fa8a57cee1ba00ea87c3d862f2f4e
---

Dieser Artikel enthält Informationen über Änderungen in Firefox 154, die Entwickler betreffen. Firefox 154 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [18. August 2026](https://whattrainisitnow.com/release/?version=154) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte entfernen Sie den Kommentar von Überschriften, für die Sie Anmerkungen schreiben. -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

<!-- Keine wesentlichen Änderungen. -->

<!-- #### Entfernt -->

<!-- ### MathML -->

<!-- #### Entfernt -->

<!-- ### SVG -->

<!-- #### Entfernt -->

<!-- ### CSS -->

<!-- #### Entfernt -->

<!-- ### JavaScript -->

<!-- Keine wesentlichen Änderungen. -->

<!-- #### Entfernt -->

<!-- ### HTTP -->

<!-- #### Entfernt -->

<!-- ### Sicherheit -->

<!-- #### Entfernt -->

### APIs

<!-- #### DOM -->

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCIceTransport.getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) und das Event [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event) werden jetzt unterstützt, um das aktuelle [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair) für den Transport zu erhalten. ([Firefox Bug 2019332](https://bugzil.la/2019332)).
- Das Event [`error`](/de/docs/Web/API/RTCDtlsTransport/error_event) wird jetzt bei [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) ausgelöst, um DTLS- und Fingerabdruckfehler zu melden. ([Firefox Bug 1805447](https://bugzil.la/1805447)).

<!-- #### Entfernt -->

<!-- ### WebAssembly -->

<!-- #### Entfernt -->

<!-- ### WebDriver Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

<!-- ### Entfernt -->

<!-- ### Sonstiges -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 154 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Inhalte mit `line-clamp` abschneiden**: `layout.css.line-clamp.enabled`

  Die {{cssxref("line-clamp")}} CSS-Eigenschaft funktioniert jetzt ohne das `-webkit-` Vendor-Präfix, obwohl sie in diesem Stadium die `no-ellipsis`- und `<string>`-Werte nicht unterstützt. ([Firefox Bug 2042986](https://bugzil.la/2042986)).

- **Prozentwerte für `text-decoration-inset`**: `layout.css.text-decoration-inset-percentage.enabled`

  Die {{cssxref("text-decoration-inset")}} CSS-Eigenschaft unterstützt jetzt Prozentsätze als Werte. Der Prozentwert gibt die Größe des Insets als Prozentsatz der {{cssxref("font-size")}} an. ([Firefox Bug 2044602](https://bugzil.la/2044602)).

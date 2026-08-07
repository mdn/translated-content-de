---
title: Firefox 154 Versionshinweise für Entwickler (Beta)
short-title: Firefox 154 (Beta)
slug: Mozilla/Firefox/Releases/154
l10n:
  sourceCommit: c162145d8f5bfb8d3555acc49a0a74bf8cd7088d
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 154, die Entwickler betreffen.
Firefox 154 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [18. August 2026](https://whattrainisitnow.com/release/?version=154) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte entfernen Sie die Kommentare bei den Überschriften, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernen -->

<!-- ### MathML -->

<!-- #### Entfernen -->

<!-- ### SVG -->

<!-- #### Entfernen -->

<!-- ### CSS -->

<!-- #### Entfernen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernen -->

<!-- ### HTTP -->

<!-- #### Entfernen -->

<!-- ### Sicherheit -->

<!-- #### Entfernen -->

### APIs

<!-- #### DOM -->

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCIceTransport.getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) und das Ereignis [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event) werden jetzt unterstützt, um das aktuelle [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair) für den Transport zu erhalten.
  ([Firefox-Bug 2019332](https://bugzil.la/2019332)).
- Das [`error`](/de/docs/Web/API/RTCDtlsTransport/error_event)-Ereignis wird jetzt auf [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) ausgelöst, um DTLS- und Fingerabdruckfehler zu melden.
  ([Firefox-Bug 1805447](https://bugzil.la/1805447)).

<!-- #### Entfernen -->

<!-- ### WebAssembly -->

<!-- #### Entfernen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-On-Entwickler

- Unterstützung für den [`sandbox`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sandbox) Manifest-Schlüssel wird hinzugefügt, wodurch Erweiterungen Seiten designieren können, die mit einem undurchsichtigen Ursprung geladen werden, ohne direkten Zugriff auf Erweiterungs-APIs. Eine sandboxed-Seite kann `eval()` und ähnliche Konstrukte verwenden, die durch die [Content Security Policy der Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) ansonsten blockiert werden. ([Firefox-Bug 1685123](https://bugzil.la/1685123))

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 154 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Präferenz und setzen Sie diese auf `true`.
Weitere solcher Funktionen finden Sie auf der [Seite mit experimentellen Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Inhalt mit `line-clamp` abschneiden**: `layout.css.line-clamp.enabled`

  Die {{cssxref("line-clamp")}} CSS-Eigenschaft funktioniert jetzt ohne das `-webkit-`-Anbieterpräfix, unterstützt jedoch in diesem Stadium nicht die Werte `no-ellipsis` und `<string>`. ([Firefox-Bug 2042986](https://bugzil.la/2042986)).

- **Prozentwerte für `text-decoration-inset`**: `layout.css.text-decoration-inset-percentage.enabled`

  Die {{cssxref("text-decoration-inset")}} CSS-Eigenschaft unterstützt jetzt Prozentsätze als Werte. Der Prozentwert gibt die Größe des Einschnitts als Prozentsatz der {{cssxref("font-size")}} an. ([Firefox-Bug 2044602](https://bugzil.la/2044602)).

- **CSS Typed Object Model Level 1** (Nightly): `layout.css.typed-om.enabled`

  Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) (wie in der CSS Typed Object Model Level 1 Spezifikation definiert) ist jetzt implementiert.
  Dies vereinfacht die Manipulation von CSS-Eigenschaften, indem CSS-Werte als typisierte JavaScript-Objekte statt als Zeichenfolgen bereitgestellt werden. ([Firefox-Bug 2051047](https://bugzil.la/2051047)).

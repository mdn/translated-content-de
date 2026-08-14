---
title: Firefox 154 Versionshinweise für Entwickler (Beta)
short-title: Firefox 154 (Beta)
slug: Mozilla/Firefox/Releases/154
l10n:
  sourceCommit: 6bf9a27ef6e63f86ad71db7d6f46308f69ec24b6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 154, die Entwickler betreffen.
Firefox 154 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [18. August 2026](https://whattrainisitnow.com/release/?version=154) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Notizen schreiben. -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

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

#### Medien, WebRTC, und Web Audio

- Die Methoden [`RTCIceTransport.getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) und das Event [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event) werden nun unterstützt, um das aktuelle [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair) für den Transport abzurufen.
  ([Firefox-Bug 2019332](https://bugzil.la/2019332)).
- Das [`error`](/de/docs/Web/API/RTCDtlsTransport/error_event) Ereignis wird jetzt auf [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) ausgelöst, um DTLS- und Fingerprinting-Fehler zu melden.
  ([Firefox-Bug 1805447](https://bugzil.la/1805447)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Verbesserte Handhabung der `deltaX` und `deltaY` Eigenschaften für asynchrone Widget-Radbebene-Ereignisse, indem der Layout-Viewport berücksichtigt wird. ([Firefox-Bug 1971979](https://bugzil.la/1971979)).
- Ein Fehler wurde behoben, bei dem eine Navigation vorzeitig für Unterrahmen aufgelöst wurde, wenn `history.replaceState` aufgerufen wurde oder wenn zu einer Fehlerseite navigiert wurde (z. B. durch X-Frame-Options blockiert). ([Firefox-Bug 2051908](https://bugzil.la/2051908)).

#### WebDriver BiDi

- Eine Download-ID wurde zu den Ereignissen `browsingContext.downloadWillBegin` und `browsingContext.downloadEnd` hinzugefügt, um es einfacher zu machen, welche Ereignisse zu demselben Download gehören. ([Firefox-Bug 2040936](https://bugzil.la/2040936)).
- Unterstützung für einen `ignore` Zustand für die Eigenschaft `unhandledPromptBehavior` bei Dateiauswahlen beim Erstellen einer neuen Sitzung mit dem Befehl `session.new` hinzugefügt. Mit diesem Zustand werden Dateiauswahlen nicht automatisch vom Protokoll behandelt. ([Firefox-Bug 1999693](https://bugzil.la/1999693)).
- Feld `userContext` (auch bekannt als Firefox-Container) zum Nutzlast von mehreren WebDriver BiDi-Ereignissen und Befehlen hinzugefügt, was es einfacher macht, eingehende Daten für Kunden, die Ereignisse nach User-Kontext-ID abonnieren, herauszufiltern. ([Firefox-Bug 2018611](https://bugzil.la/2018611)).
- Die Befehle `browsingContext.startScreencast` und `browsingContext.stopScreencast` implementiert, die einen Browsing-Kontext aufnehmen und das Ergebnis als Videodatei speichern. ([Firefox-Bug 2042671](https://bugzil.la/2042671)).
- Der Befehl `emulation.setLocaleOverride` aktualisiert, um die Überschreibung der `Accept-Language` Header für Fetch- und `WebSocket`-Anfragen in Workern zu ermöglichen. ([Firefox-Bug 2052932](https://bugzil.la/2052932)).
- Ein Fehler behoben, bei dem das `script.realmDestroyed` Ereignis für einen Worker nach Navigierung über Prozesse hinweg fehlte. ([Firefox-Bug 2018154](https://bugzil.la/2018154)).

## Änderungen für Add-on-Entwickler

- Unterstützung für das [`sandbox`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sandbox) Manifest-Schlüssel hinzugefügt, das Erweiterungen ermöglicht, Seiten zu kennzeichnen, die mit einem undurchsichtigen Ursprung geladen werden, ohne direkten Zugriff auf Erweiterungs-APIs. Eine sandboxed-Seite kann `eval()` und ähnliche Konstrukte verwenden, die ansonsten durch die [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) der Erweiterung blockiert werden. ([Firefox-Bug 1685123](https://bugzil.la/1685123))

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 154 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **Abschneiden von Inhalten mit `line-clamp`**: `layout.css.line-clamp.enabled`

  Die {{cssxref("line-clamp")}} CSS-Eigenschaft funktioniert jetzt ohne das `-webkit-` Vendor-Präfix, wobei sie in diesem Stadium jedoch nicht die Werte `no-ellipsis` und `<string>` unterstützt. ([Firefox-Bug 2042986](https://bugzil.la/2042986)).

- **Prozentwerte für `text-decoration-inset`**: `layout.css.text-decoration-inset-percentage.enabled`

  Die {{cssxref("text-decoration-inset")}} CSS-Eigenschaft unterstützt jetzt Prozentwerte. Der Prozentwert gibt die Größe des Insets als Prozentsatz der {{cssxref("font-size")}} an. ([Firefox-Bug 2044602](https://bugzil.la/2044602)).

- **CSS Typed Object Model Level 1** (Nightly): `layout.css.typed-om.enabled`

  Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) (wie in der CSS Typed Object Model Level 1 Spezifikation definiert) ist nun implementiert.
  Dies vereinfacht die Manipulation von CSS-Eigenschaften, indem CSS-Werte als typisierte JavaScript-Objekte anstelle von Zeichenfolgen bereitgestellt werden. ([Firefox-Bug 2051047](https://bugzil.la/2051047)).

---
title: Firefox 120 für Entwickler
slug: Mozilla/Firefox/Releases/120
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 120, die Entwickler betreffen. Firefox 120 wurde am [21. November 2023](https://whattrainisitnow.com/release/?version=120) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die Unterstützung für das `media`-Attribut im [`<source>`](/de/docs/Web/HTML/Reference/Elements/source) Element wurde wieder eingeführt und erweitert, um `<audio>` und `<video>`-Elemente zu umfassen. Dieses Attribut wurde erstmals in Firefox 15 hinzugefügt, aber in Firefox 53 entfernt, als seine Verwendung auf das `<source>`-Element innerhalb von `<picture>` beschränkt war. Mit dieser Version wird das `media`-Attribut in `<source>`-Elementen innerhalb von `<audio>`, `<video>` und `<picture>` verfügbar sein ([Firefox Fehler 1836128](https://bugzil.la/1836128)).

### CSS

- Die {{CSSXref("color_value/light-dark", "light-dark()")}} CSS-Farb-Funktion wird nun unterstützt. Diese erlaubt das Festlegen von Farben sowohl für helle als auch für dunkle Modi ohne die Notwendigkeit des `prefers-color-scheme`-Media-Features ([Firefox Fehler 1856999](https://bugzil.la/1856999)).
- Die [`lh`](/de/docs/Web/CSS/length#lh) und [`rlh`](/de/docs/Web/CSS/length#rlh) Line-Height-Einheiten werden nun unterstützt. Diese ermöglichen das Setzen von Eigenschaften relativ zur Zeilenhöhe eines Elements, zum Beispiel das präzise Ausrichten von Hintergrunddekorationen mit mehrzeiligem Text ([Firefox Fehler 1310170](https://bugzil.la/1310170)).

#### Entfernungen

- Die nicht standardisierte {{cssxref("-moz-image-rect")}} CSS-Funktion zum Zuschneiden von Hintergrundbildern wurde entfernt. Diese Funktion wurde erstmals in Firefox 4 eingeführt, aber nie standardisiert oder in anderen Browsern implementiert ([Firefox Fehler 1853867](https://bugzil.la/1853867)).

### JavaScript

- {{jsxref("Date.parse()")}} akzeptiert jetzt mehrere zusätzliche Datumsformate:

  - Numerische Datumsangaben mit Bindestrichen, die nicht dem formalen ISO-Standard entsprechen, werden jetzt akzeptiert ([Firefox Fehler 1557650](https://bugzil.la/1557650)), inklusive:

    - `"01-12-1999"` (Monat zuerst)
    - `"1999-1-5"` (einstelliger Monat oder Tag)
    - `"10000-01-12"` (Jahr > 9999)
    - `"99-01-05"` oder `"01-05-99"` (2-stelliges Jahr, Jahr muss >31 sein, wenn es zuerst kommt)
    - `"1999-01-05 10:00:00"` (Leerzeichen zwischen Datum und Uhrzeit).

    Diese Datümer werden mit einem Verhalten ähnlich anderer Nicht-ISO-Daten analysiert, wie z. B. lokale Zeitzone und Monatsübertragung (31. April wird zu 1. Mai, da der 31. April nicht existiert).

  - Anforderungen an Zeichen, die direkt auf Zahlen folgen, wurden gelockert, um neue Formate zu akzeptieren ([Firefox Fehler 449921](https://bugzil.la/449921)), inklusive:

    - `"DDMonYYYY"`
    - `"Mon.DD.YYYY"`
    - `"DD.Mon.YYYY"`
    - `"YYYY.MM.DD"`
    - `"Mon DD YYYY hh:mmXm"` (`am`/`pm` direkt nach der Uhrzeit)

  - Die Zeitzone `'Z'` wird jetzt für Nicht-ISO-Formate akzeptiert (z. B. `Jan 1 1970 10:00Z`) ([Firefox Fehler 1852422](https://bugzil.la/1852422))

### HTTP

- Der HTTP-Statuscode [`103 Early Hints`](/de/docs/Web/HTTP/Reference/Status/103) ist für [Preconnecting](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) zu einem bestimmten Ursprung aktiviert (von dem die Seite wahrscheinlich Ressourcen benötigt). Weitere Details finden Sie unter [Firefox Fehler 1858712](https://bugzil.la/1858712).
- Firefox unterstützt den [Global Privacy Control](https://globalprivacycontrol.org/) {{HTTPHeader("Sec-GPC")}} Anforderungs-Header, der gesendet werden kann, um anzuzeigen, dass der Benutzer nicht zustimmt, dass eine Website oder ein Dienst seine persönlichen Informationen an Dritte verkauft oder teilt. Benutzer können den Header aktivieren, sowohl im normalen als auch im privaten Modus, indem sie die Einstellung `privacy.globalprivacycontrol.enabled` auf `true` setzen (in `about:config`). Die [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) und [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) Eigenschaften ermöglichen JavaScript, die Zustimmungseinstellung des Benutzers zu überprüfen ([Firefox Fehler 1856029](https://bugzil.la/1856029)).

### APIs

- Die [`authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Schnittstelle wird nun unterstützt. Dies ermöglicht es, dass sich Webanwendungscode basierend darauf konfiguriert, ob der Authenticator Teil des Geräts ist, das die Webauthentifizierung durchführt, oder zwischen Geräten bewegen kann (siehe [Firefox Fehler 1810851](https://bugzil.la/1810851)).
- Die [Erweiterung für minimale PIN-Länge (`minPinLength`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#minpinlength) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt und erlaubt es einem vertrauenden Server, die Mindestlänge der PIN des Authenticators während der Erstellung/Registrierung anzufordern ([Firefox Fehler 1844450](https://bugzil.la/1844450)).
- Die [`Navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) Eigenschaft und die [`UserActivation`](/de/docs/Web/API/UserActivation) Schnittstelle werden nun unterstützt. Diese können verwendet werden, um zu überprüfen, ob der Benutzer mit der Seite interagiert oder seit dem Laden der Seite interagiert hat (siehe [Firefox Fehler 1791079](https://bugzil.la/1791079)).
- Die Methode [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) ist nur für die Verwendung in sicheren Kontexten eingeschränkt ([Firefox Fehler 1858434](https://bugzil.la/1858434)).

### WebDriver-Kompatibilität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung zur Serialisierung von `Proxy`- und `Generator`-Objekten hinzugefügt ([Firefox Fehler 1841786](https://bugzil.la/1841786)).
- Die Eigenschaft `authChallenges` (die Liste der Authentifizierungsherausforderungen in den Headern) wurde zu `responseStarted` und `responseCompleted` Netzwerkevents hinzugefügt, was nützlich sein wird, um das kommende `network.authRequired`-Event zu behandeln ([Firefox Fehler 1855149](https://bugzil.la/1855149)).

## Änderungen für Add-on-Entwickler

- Obwohl [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) auf sichere Kontexte eingeschränkt wurde ([Firefox Fehler 1858434](https://bugzil.la/1858434)), können Inhaltsskripte diese Methode in Dokumenten verwenden, die kein sicherer Kontext sind ([Firefox Fehler 1870498](https://bugzil.la/1870498)).

## Ältere Versionen

{{Firefox_for_developers}}

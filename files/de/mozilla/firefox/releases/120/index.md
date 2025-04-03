---
title: Firefox 120 für Entwickler
slug: Mozilla/Firefox/Releases/120
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 120, die sich auf Entwickler auswirken. Firefox 120 wurde am [21. November 2023](https://whattrainisitnow.com/release/?version=120) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die Unterstützung für das `media`-Attribut im [`<source>`](/de/docs/Web/HTML/Element/source)-Element wurde wieder eingeführt und erweitert, um `<audio>`- und `<video>`-Elemente einzuschließen. Dieses Attribut wurde erstmals in Firefox 15 hinzugefügt, aber in Firefox 53 entfernt, als seine Verwendung auf das `<source>`-Element innerhalb von `<picture>` beschränkt wurde. Mit dieser Veröffentlichung ist das `media`-Attribut in `<source>`-Elementen innerhalb von `<audio>`, `<video>` und `<picture>` verfügbar ([Firefox-Bug 1836128](https://bugzil.la/1836128)).

### CSS

- Die {{CSSXref("color_value/light-dark", "light-dark()")}} CSS-Farb-Funktion wird jetzt unterstützt. Dies ermöglicht das Einstellen von Farben für sowohl helle als auch dunkle Themen ohne die Notwendigkeit der `prefers-color-scheme` Media-Feature ([Firefox-Bug 1856999](https://bugzil.la/1856999)).
- Die [`lh` und `rlh`](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#line_height_units) Zeilenhöhe-Einheiten werden jetzt unterstützt. Diese ermöglichen das Setzen von Eigenschaften relativ zur Zeilenhöhe eines Elements, z. B. um Hintergrunddekorationen exakt mit mehrzeiligem Text auszurichten ([Firefox-Bug 1310170](https://bugzil.la/1310170)).

#### Entfernungen

- Die nicht standardisierte {{cssxref("-moz-image-rect")}} CSS-Funktion zum Zuschneiden von Hintergrundbildern wurde entfernt. Diese Funktion wurde in Firefox 4 eingeführt, aber nie standardisiert oder in anderen Browsern implementiert ([Firefox-Bug 1856999](https://bugzil.la/1853867)).

### JavaScript

- {{jsxref("Date.parse()")}} akzeptiert jetzt mehrere zusätzliche Datumsformate:

  - Numerische Datumsangaben mit Bindestrich, die nicht dem formalen ISO-Standard entsprechen, werden jetzt akzeptiert ([Firefox-Bug 1557650](https://bugzil.la/1557650)), einschließlich:

    - `"01-12-1999"` (Monat zuerst)
    - `"1999-1-5"` (einzelne Ziffer für Monat oder Tag)
    - `"10000-01-12"` (Jahr > 9999)
    - `"99-01-05"` oder `"01-05-99"` (zweistelliges Jahr, Jahr muss >31 sein, wenn es zuerst kommt)
    - `"1999-01-05 10:00:00"` (Leerzeichen zwischen Datum und Uhrzeit).

    Diese Daten werden mit dem für andere nicht-ISO-Daten typischen Verhalten geparst, wie z. B. lokale Zeitzone und Monatüberlauf (der 31. April wechselt zum 1. Mai, da der 31. April nicht existiert).

  - Anforderungen an Zeichen, die direkt auf Zahlen folgen, wurden gelockert, um neue Formate zu akzeptieren ([Firefox-Bug 449921](https://bugzil.la/449921)), einschließlich:

    - `"DDMonYYYY"`
    - `"Mon.DD.YYYY"`
    - `"DD.Mon.YYYY"`
    - `"YYYY.MM.DD"`
    - `"Mon DD YYYY hh:mmXm"` (`am`/`pm` direkt nach der Uhrzeit)

  - Zeitzone `'Z'` wird jetzt für nicht-ISO-Formate akzeptiert (z. B. `Jan 1 1970 10:00Z`) ([Firefox-Bug 1852422](https://bugzil.la/1852422))

### HTTP

- Der [`103 Early Hints`](/de/docs/Web/HTTP/Reference/Status/103) HTTP [informational response](/de/docs/Web/HTTP/Reference/Status#informational_responses)-Statuscode ist aktiviert für [Preconnecting](/de/docs/Web/HTML/Attributes/rel/preconnect) zu einer bestimmten Quelle, von der die Seite voraussichtlich Ressourcen benötigt.
  Weitere Details finden Sie im [Firefox-Bug 1858712](https://bugzil.la/1858712).
- Firefox unterstützt den {{HTTPHeader("Sec-GPC")}} Header der [Global Privacy Control](https://globalprivacycontrol.org/), der gesendet werden kann, um anzuzeigen, dass der Benutzer nicht zustimmt, dass eine Website oder Dienstleistung ihre persönlichen Informationen an Dritte verkauft oder teilt.
  Benutzer können den Header sowohl im normalen als auch im privaten Browsing-Modus aktivieren, indem sie die Einstellung `privacy.globalprivacycontrol.enabled` auf `true` setzen (in `about:config`).
  Die [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) und [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) Eigenschaften ermöglichen es JavaScript, die Zustimmungseinstellungen des Benutzers zu überprüfen ([Firefox-Bug 1856029](https://bugzil.la/1856029)).

### APIs

- Die [`authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Interfaces wird jetzt unterstützt.
  Dadurch kann sich der Code einer Webanwendung auf Client- und Serverseite darauf einstellen, ob der Authentifikator Teil des Geräts ist, das die Web-Authentifizierung ausführt, oder zwischen Geräten wechseln kann (siehe [Firefox-Bug 1810851](https://bugzil.la/1810851)).
- Die [Minimum PIN Length Extension (`minPinLength`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#minpinlength) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt, sodass ein vertrauender Server während der Erstellung/Registrierung die Mindest-PIN-Länge des Authentikators anfordern kann ([Firefox-Bug 1844450](https://bugzil.la/1844450)).
- Die [`Navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) Eigenschaft und das [`UserActivation`](/de/docs/Web/API/UserActivation) Interface werden jetzt unterstützt.
  Diese können verwendet werden, um zu überprüfen, ob der Benutzer mit der Seite interagiert oder seit dem Laden der Seite interagiert hat (siehe [Firefox-Bug 1791079](https://bugzil.la/1791079)).
- Die Methode [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) ist auf die Verwendung in sicheren Kontexten beschränkt ([Firefox-Bug 1858434](https://bugzil.la/1858434)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für die Serialisierung von `Proxy` und `Generator` Objekten hinzugefügt ([Firefox-Bug 1841786](https://bugzil.la/1841786)).
- Die Eigenschaft `authChallenges` (die Liste der in den Headern vorhandenen Authentifizierungsherausforderungen) wurde zu den Netzwerkevents `responseStarted` und `responseCompleted` hinzugefügt, was nützlich sein wird, um das kommende `network.authRequired`-Event zu handhaben ([Firefox-Bug 1855149](https://bugzil.la/1855149)).

## Änderungen für Add-on-Entwickler

- Obwohl [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) auf sichere Kontexte beschränkt ist ([Firefox-Bug 1858434](https://bugzil.la/1858434)), können Inhalts-Skripte diese Methode in Dokumenten verwenden, die kein sicherer Kontext sind ([Firefox-Bug 1870498](https://bugzil.la/1870498)).

## Ältere Versionen

{{Firefox_for_developers}}

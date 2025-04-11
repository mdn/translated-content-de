---
title: Firefox 120 für Entwickler
slug: Mozilla/Firefox/Releases/120
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 120, die Entwickler betreffen. Firefox 120 wurde am [21. November 2023](https://whattrainisitnow.com/release/?version=120) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die Unterstützung für das `media`-Attribut im [`<source>`](/de/docs/Web/HTML/Reference/Elements/source)-Element wurde wieder eingeführt und erweitert, um `<audio>`- und `<video>`-Elemente einzuschließen. Dieses Attribut wurde erstmals in Firefox 15 hinzugefügt, aber in Firefox 53 entfernt, als seine Nutzung auf das `<source>`-Element innerhalb von `<picture>` beschränkt wurde. Mit dieser Veröffentlichung wird das `media`-Attribut in `<source>`-Elementen innerhalb von `<audio>`, `<video>` und `<picture>` verfügbar sein ([Firefox Bug 1836128](https://bugzil.la/1836128)).

### CSS

- Die `{{CSSXref("color_value/light-dark", "light-dark()")}}` CSS-Funktion für Farben wird nun unterstützt. Dies ermöglicht die Festlegung von Farben für sowohl helle als auch dunkle Themen ohne die Notwendigkeit des `prefers-color-scheme`-Media-Features ([Firefox Bug 1856999](https://bugzil.la/1856999)).
- Die [`lh` und `rlh`](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#line_height_units) Zeilenhöhe-Einheiten werden jetzt unterstützt. Diese ermöglichen das Setzen von Eigenschaften relativ zur Zeilenhöhe eines Elements, z.B. um Hintergrunddekorationen präzise mit mehrzeiligem Text auszurichten ([Firefox Bug 1310170](https://bugzil.la/1310170)).

#### Entfernt

- Die nicht standardmäßige {{cssxref("-moz-image-rect")}} CSS-Funktion zum Zuschneiden von Hintergrundbildern wurde entfernt. Diese Funktion wurde erstmals in Firefox 4 eingeführt, aber nie standardisiert oder in anderen Browsern implementiert ([Firefox Bug 1856999](https://bugzil.la/1853867)).

### JavaScript

- {{jsxref("Date.parse()")}} akzeptiert nun mehrere zusätzliche Datumsformate:

  - Numerische, durch Bindestriche getrennte Daten, die nicht dem formalen ISO-Standard entsprechen, sind nun akzeptiert ([Firefox Bug 1557650](https://bugzil.la/1557650)), darunter:

    - `"01-12-1999"` (Monat zuerst)
    - `"1999-1-5"` (einstelliges Monat oder Tag)
    - `"10000-01-12"` (Jahr > 9999)
    - `"99-01-05"` oder `"01-05-99"` (2-stelliges Jahr, Jahr muss >31 sein, wenn es zuerst kommt)
    - `"1999-01-05 10:00:00"` (Leerzeichen zwischen Datum und Uhrzeit).

    Diese Daten werden mit einem Verhalten geparst, das für andere nicht-ISO-Daten typisch ist, wie z.B. lokale Zeitzone und Monatübertragung (z.B. geht der 31. April zum 1. Mai über, da der 31. April nicht existiert).

  - Anforderungen für Zeichen direkt nach Zahlen wurden gelockert, um neue Formate zu akzeptieren ([Firefox Bug 449921](https://bugzil.la/449921)), darunter:

    - `"DDMonYYYY"`
    - `"Mon.DD.YYYY"`
    - `"DD.Mon.YYYY"`
    - `"YYYY.MM.DD"`
    - `"Mon DD YYYY hh:mmXm"` (`am`/`pm` direkt nach der Zeit)

  - Die Zeitzone `'Z'` wird nun für nicht-ISO-Formate akzeptiert (z.B. `Jan 1 1970 10:00Z`) ([Firefox Bug 1852422](https://bugzil.la/1852422))

### HTTP

- Der [`103 Early Hints`](/de/docs/Web/HTTP/Reference/Status/103) HTTP [informational response](/de/docs/Web/HTTP/Reference/Status#informational_responses) Statuscode ist aktiviert, um für eine bestimmte Quelle [Preconnections](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) vorzunehmen (von der die Seite wahrscheinlich Ressourcen benötigt).
  Weitere Details finden Sie im [Firefox Bug 1858712](https://bugzil.la/1858712).
- Firefox unterstützt den [Global Privacy Control](https://globalprivacycontrol.org/) {{HTTPHeader("Sec-GPC")}} Anfrage-Header, der gesendet werden kann, um anzuzeigen, dass der Benutzer nicht zustimmt, dass eine Website oder ein Dienst ihre persönlichen Informationen an Dritte verkauft oder weitergibt.
  Benutzer können den Header sowohl im normalen als auch im privaten Browsermodus aktivieren, indem sie die Voreinstellung `privacy.globalprivacycontrol.enabled` auf `true` setzen (in `about:config`).
  Die Eigenschaften [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) und [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) ermöglichen es JavaScript, die Benutzerzustimmungspräferenz zu überprüfen ([Firefox Bug 1856029](https://bugzil.la/1856029)).

### APIs

- Die [`authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Schnittstelle wird jetzt unterstützt.
  Dadurch können sich Webanwendungen und Servercode basierend darauf konfigurieren, ob der Authentifizierer Teil des Geräts ist, welches die Webauthentifizierung ausführt, oder ob er zwischen Geräten wechseln kann (siehe [Firefox Bug 1810851](https://bugzil.la/1810851)).
- Die [Minimum PIN Length Extension (`minPinLength`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#minpinlength) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt, was es einem Server ermöglicht, die minimale PIN-Länge eines Authentifizierers während der Erstellung/Registrierung anzufordern ([Firefox Bug 1844450](https://bugzil.la/1844450)).
- Die [`Navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) Eigenschaft und das [`UserActivation`](/de/docs/Web/API/UserActivation) Interface sind jetzt unterstützt.
  Diese können verwendet werden, um zu überprüfen, ob der Benutzer mit der Seite interagiert oder seit dem Laden der Seite interagiert hat (siehe [Firefox Bug 1791079](https://bugzil.la/1791079)).
- Die Methode [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) ist auf sichere Kontexte beschränkt ([Firefox Bug 1858434](https://bugzil.la/1858434)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Hinzugefügte Serialisierungsunterstützung für `Proxy` und `Generator` Objekte ([Firefox Bug 1841786](https://bugzil.la/1841786)).
- Die `authChallenges` Eigenschaft (die Liste der in den Headern vorhandenen Authentifizierungsherausforderungen) wurde zu den `responseStarted` und `responseCompleted` Netzwerkereignissen hinzugefügt, was nützlich sein wird, um das kommende `network.authRequired` Ereignis zu handhaben ([Firefox Bug 1855149](https://bugzil.la/1855149)).

## Änderungen für Add-on-Entwickler

- Obwohl [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) auf sichere Kontexte beschränkt wurde ([Firefox Bug 1858434](https://bugzil.la/1858434)), können Inhalts-Skripte diese Methode in Dokumenten verwenden, die kein sicherer Kontext sind ([Firefox Bug 1870498](https://bugzil.la/1870498)).

## Ältere Versionen

{{Firefox_for_developers}}

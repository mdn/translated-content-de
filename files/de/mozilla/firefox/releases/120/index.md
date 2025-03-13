---
title: Firefox 120 für Entwickler
slug: Mozilla/Firefox/Releases/120
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 120, die Entwickler betreffen. Firefox 120 wurde am [21. November 2023](https://whattrainisitnow.com/release/?version=120) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die Unterstützung für das `media`-Attribut im [`<source>`](/de/docs/Web/HTML/Element/source)-Element wurde wieder eingeführt und erweitert, um `<audio>`- und `<video>`-Elemente einzuschließen. Dieses Attribut wurde zuerst in Firefox 15 hinzugefügt, aber in Firefox 53 entfernt, als seine Verwendung auf das `<source>`-Element innerhalb von `<picture>` beschränkt wurde. Mit dieser Version wird das `media`-Attribut in `<source>`-Elementen innerhalb von `<audio>`, `<video>` und `<picture>` verfügbar sein ([Firefox-Bug 1836128](https://bugzil.la/1836128)).

### CSS

- Die {{CSSXref("color_value/light-dark", "light-dark()")}} CSS-Farbe-Funktion wird jetzt unterstützt. Dies ermöglicht die Einstellung von Farben für sowohl helle als auch dunkle Modi ohne die Notwendigkeit der `prefers-color-scheme`-Medienfunktion ([Firefox-Bug 1856999](https://bugzil.la/1856999)).
- Die [`lh` und `rlh`](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#line_height_units)-Linienhöheneinheiten werden jetzt unterstützt. Diese erlauben es, Eigenschaften relativ zur Zeilenhöhe eines Elements festzulegen, um beispielsweise den Hintergrund genau mit mehrzeiligem Text auszurichten ([Firefox-Bug 1310170](https://bugzil.la/1310170)).

#### Entfernungen

- Die nicht standardisierte {{cssxref("-moz-image-rect")}} CSS-Funktion zum Zuschneiden von Hintergrundbildern wurde entfernt. Sie wurde erstmals in Firefox 4 eingeführt, aber nie standardisiert oder in anderen Browsern implementiert ([Firefox-Bug 1856999](https://bugzil.la/1853867)).

### JavaScript

- {{jsxref("Date.parse()")}} akzeptiert jetzt mehrere zusätzliche Datumsformate:

  - Numerische, gestrichelte Daten, die nicht dem formellen ISO-Standard entsprechen, werden jetzt akzeptiert ([Firefox-Bug 1557650](https://bugzil.la/1557650)), einschließlich:

    - `"01-12-1999"` (Monat zuerst)
    - `"1999-1-5"` (einstellige Monat- oder Tagesangabe)
    - `"10000-01-12"` (Jahr > 9999)
    - `"99-01-05"` oder `"01-05-99"` (2-stelliges Jahr, Jahr muss >31 sein, wenn es zuerst kommt)
    - `"1999-01-05 10:00:00"` (Zwischenraum zwischen Datum und Uhrzeit).

    Diese Daten werden mit einem Verhalten geparst, das typisch für andere nicht-ISO-Daten ist, z.B. Zeitzone der Region und Monat-Überlauf (31. April wird auf 1. Mai überlaufen, da der 31. April nicht existiert).

  - Anforderungen für Zeichen, die direkt auf Zahlen folgen, wurden gelockert, um neue Formate zu akzeptieren ([Firefox-Bug 449921](https://bugzil.la/449921)), einschließlich:

    - `"DDMonYYYY"`
    - `"Mon.DD.YYYY"`
    - `"DD.Mon.YYYY"`
    - `"YYYY.MM.DD"`
    - `"Mon DD YYYY hh:mmXm"` (`am`/`pm` direkt nach der Uhrzeit)

  - Die Zeitzone `'Z'` wird jetzt für nicht-ISO-Formate akzeptiert (z.B. `Jan 1 1970 10:00Z`) ([Firefox-Bug 1852422](https://bugzil.la/1852422))

### HTTP

- Der HTTP-Statuscode [`103 Early Hints`](/de/docs/Web/HTTP/Reference/Status/103) [informational response](/de/docs/Web/HTTP/Reference/Status#informational_responses) ist für das [Preconnecting](/de/docs/Web/HTML/Attributes/rel/preconnect) zu einer bestimmten Herkunft aktiviert (von der die Seite wahrscheinlich Ressourcen benötigt).
  Weitere Details finden Sie unter [Firefox-Bug 1858712](https://bugzil.la/1858712).
- Firefox unterstützt den [Global Privacy Control](https://globalprivacycontrol.org/) {{HTTPHeader("Sec-GPC")}}-Anforderungsheader, der gesendet werden kann, um anzuzeigen, dass der Benutzer nicht damit einverstanden ist, dass eine Website oder ein Dienst seine persönlichen Informationen an Dritte verkauft oder weitergibt.
  Benutzer können den Header sowohl im normalen als auch im privaten Modus aktivieren, indem sie die Einstellung `privacy.globalprivacycontrol.enabled` auf `true` setzen (in `about:config`).
  Die Eigenschaften [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) und [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) ermöglichen es JavaScript, die Präferenz der Benutzerzustimmung zu überprüfen ([Firefox-Bug 1856029](https://bugzil.la/1856029)).

### APIs

- Die Eigenschaft [`authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle wird jetzt unterstützt.
  Dies ermöglicht es Webanwendungen, Client- und Server-Code basierend darauf zu konfigurieren, ob der Authenticator Teil des Geräts, das die Webauthentifizierung durchführt, oder zwischen Geräten wechseln kann (siehe [Firefox-Bug 1810851](https://bugzil.la/1810851)).
- Die [Minimum PIN Length Extension (`minPinLength`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#minpinlength) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt und ermöglicht es einem vertrauenden Server, die minimale PIN-Länge des Authenticators bei der Erstellung/Registrierung anzufordern ([Firefox-Bug 1844450](https://bugzil.la/1844450)).
- Die Eigenschaft [`Navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) und die Schnittstelle [`UserActivation`](/de/docs/Web/API/UserActivation) werden jetzt unterstützt.
  Diese können verwendet werden, um zu überprüfen, ob der Benutzer mit der Seite interagiert oder seit dem Laden der Seite mit ihr interagiert hat (siehe [Firefox-Bug 1791079](https://bugzil.la/1791079)).
- Die Methode [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) ist auf die Nutzung in sicheren Kontexten beschränkt ([Firefox-Bug 1858434](https://bugzil.la/1858434)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für die Serialisierung von `Proxy`- und `Generator`-Objekten hinzugefügt ([Firefox-Bug 1841786](https://bugzil.la/1841786)).
- Die Eigenschaft `authChallenges` (die Liste der in den Headers vorhandenen Authentifizierungsherausforderungen) wurde zu den Netzwerkereignissen `responseStarted` und `responseCompleted` hinzugefügt, was nützlich sein wird, um das kommende `network.authRequired`-Ereignis zu behandeln ([Firefox-Bug 1855149](https://bugzil.la/1855149)).

## Änderungen für Add-on-Entwickler

- Obwohl [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) auf sichere Kontexte beschränkt wurde ([Firefox-Bug 1858434](https://bugzil.la/1858434)), können Inhalts-Skripte diese Methode in Dokumenten verwenden, die kein sicherer Kontext sind ([Firefox-Bug 1870498](https://bugzil.la/1870498)).

## Ältere Versionen

{{Firefox_for_developers}}

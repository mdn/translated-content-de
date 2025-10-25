---
title: Firefox 120 Versionshinweise für Entwickler
short-title: Firefox 120
slug: Mozilla/Firefox/Releases/120
l10n:
  sourceCommit: b63437e072cf5eac5d56e54454116bcc41b5c28b
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 120, die Entwickler betreffen. Firefox 120 wurde am [21. November 2023](https://whattrainisitnow.com/release/?version=120) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die Unterstützung für das `media`-Attribut im [`<source>`](/de/docs/Web/HTML/Reference/Elements/source)-Element wurde wieder eingeführt und erweitert, um `<audio>`- und `<video>`-Elemente einzuschließen. Dieses Attribut wurde zuerst in Firefox 15 hinzugefügt, aber in Firefox 53 entfernt, als seine Verwendung auf das `<source>` Element innerhalb von `<picture>` beschränkt wurde. Mit dieser Version wird das `media`-Attribut in `<source>`-Elementen innerhalb von `<audio>`, `<video>` und `<picture>` verfügbar sein ([Firefox Bug 1836128](https://bugzil.la/1836128)).

### CSS

- Die {{CSSXref("color_value/light-dark", "light-dark()")}} CSS-Farb-Funktion wird nun unterstützt. Dies ermöglicht das Einstellen von Farben für sowohl helle als auch dunkle Modus, ohne dass das `prefers-color-scheme` Medienfeature benötigt wird ([Firefox Bug 1856999](https://bugzil.la/1856999)).
- Die [`lh`](/de/docs/Web/CSS/length#lh) und [`rlh`](/de/docs/Web/CSS/length#rlh) Zeilenhöhe-Einheiten werden jetzt unterstützt. Diese erlauben es, Eigenschaften relativ zur Zeilenhöhe eines Elements zu setzen, zum Beispiel, um Hintergrunddekorationen präzise mit mehrzeiligem Text auszurichten ([Firefox Bug 1310170](https://bugzil.la/1310170)).

#### Entfernungen

- Die nicht standardisierte {{cssxref("-moz-image-rect")}} CSS-Funktion zum Ausschneiden von Hintergrundbildern wurde entfernt. Diese Funktion wurde erstmals in Firefox 4 eingeführt, aber nie standardisiert oder in anderen Browsern implementiert ([Firefox Bug 1853867](https://bugzil.la/1853867)).

### JavaScript

- {{jsxref("Date.parse()")}} akzeptiert nun mehrere zusätzliche Datumsformate:
  - Numerische, mit Bindestrichen versehene Daten, die nicht dem formalen ISO-Standard entsprechen, werden jetzt akzeptiert ([Firefox Bug 1557650](https://bugzil.la/1557650)), einschließlich:
    - `"01-12-1999"` (Monat zuerst)
    - `"1999-1-5"` (eineinhalbstelliges Monat oder Tag)
    - `"10000-01-12"` (Jahr > 9999)
    - `"99-01-05"` oder `"01-05-99"` (zweistelliges Jahr, Jahr muss >31 sein, wenn es zuerst kommt)
    - `"1999-01-05 10:00:00"` (Zwischenraum zwischen Datum und Uhrzeit).

    Diese Daten werden mit typischem Verhalten anderer nicht-ISO-Daten geparst, wie z.B. der lokalen Zeitzone und dem Monat-Überlauf (der 31. April wird auf den 1. Mai verschoben, da es den 31. April nicht gibt).

  - Anforderungen an Zeichen, die direkt auf Zahlen folgen, wurden gelockert, um neue Formate zu akzeptieren ([Firefox Bug 449921](https://bugzil.la/449921)), einschließlich:
    - `"DDMonYYYY"`
    - `"Mon.DD.YYYY"`
    - `"DD.Mon.YYYY"`
    - `"YYYY.MM.DD"`
    - `"Mon DD YYYY hh:mmXm"` (`am`/`pm` direkt nach der Uhrzeit)

  - Die Zeitzone `'Z'` wird nun auch für nicht-ISO-Formate akzeptiert (z.B. `Jan 1 1970 10:00Z`) ([Firefox Bug 1852422](https://bugzil.la/1852422))

### HTTP

- Der [`103 Early Hints`](/de/docs/Web/HTTP/Reference/Status/103) HTTP-[Informationsresponse](/de/docs/Web/HTTP/Reference/Status#informational_responses)-Statuscode ist für das [Preconnecting](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) zu einer bestimmten Quelle aktiviert (von der die Seite wahrscheinlich Ressourcen benötigt).
  Weitere Details finden Sie im [Firefox Bug 1858712](https://bugzil.la/1858712).
- Firefox unterstützt den [Global Privacy Control](https://globalprivacycontrol.org/) {{HTTPHeader("Sec-GPC")}} Request-Header, der gesendet werden kann, um anzuzeigen, dass der Benutzer nicht zustimmt, dass eine Website oder ein Dienst seine persönlichen Informationen an Dritte verkauft oder weitergibt.
  Benutzer können den Header sowohl im normalen als auch im privaten Modus aktivieren, indem sie die Präferenz `privacy.globalprivacycontrol.enabled` auf `true` setzen (in `about:config`).
  Die Eigenschaften [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) und [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) erlauben JavaScript, die Zustimmungseinstellung des Benutzers zu prüfen ([Firefox Bug 1856029](https://bugzil.la/1856029)).

### APIs

- Die Eigenschaft [`authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) der Schnittstelle [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) wird jetzt unterstützt.
  Dies erlaubt es Webanwendungscode auf Client- und Serverseite, sich basierend darauf zu konfigurieren, ob der Authenticator ein Teil des Gerät ist, das die Webauthentifizierung ausführt, oder ob er zwischen Geräten mobil ist (siehe [Firefox Bug 1810851](https://bugzil.la/1810851)).
- Die [Minimum-PIN-Längen-Erweiterung (`minPinLength`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#minpinlength) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt, die es einem vertrauenden Server erlaubt, während der Erstellung/Registrierung die Mindest-PIN-Länge des Authenticators anzufordern ([Firefox Bug 1844450](https://bugzil.la/1844450)).
- Die Eigenschaft [`Navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) und die Schnittstelle [`UserActivation`](/de/docs/Web/API/UserActivation) werden jetzt unterstützt.
  Diese können verwendet werden, um zu prüfen, ob der Benutzer mit der Seite interagiert oder seit dem Laden der Seite mit ihr interagiert hat (siehe [Firefox Bug 1791079](https://bugzil.la/1791079)).
- Die Methode [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) ist auf die Nutzung in sicheren Kontexten beschränkt ([Firefox Bug 1858434](https://bugzil.la/1858434)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Die Serialisierungsunterstützung für `Proxy`- und `Generator`-Objekte wurde hinzugefügt ([Firefox Bug 1841786](https://bugzil.la/1841786)).
- Die Eigenschaft `authChallenges` (die Liste der Authentifizierungsherausforderungen, die in den Headern vorhanden sind) wurde zu den Netzwerkevents `responseStarted` und `responseCompleted` hinzugefügt, was nützlich sein wird, um das kommende `network.authRequired`-Event zu bearbeiten ([Firefox Bug 1855149](https://bugzil.la/1855149)).

## Änderungen für Add-on-Entwickler

- Obwohl [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) auf sichere Kontexte beschränkt wurde ([Firefox Bug 1858434](https://bugzil.la/1858434)), können Inhalts-Skripte diese Methode auch in Dokumenten verwenden, die kein sicherer Kontext sind ([Firefox Bug 1870498](https://bugzil.la/1870498)).

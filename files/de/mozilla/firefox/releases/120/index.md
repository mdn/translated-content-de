---
title: Firefox 120 für Entwickler
slug: Mozilla/Firefox/Releases/120
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 120, die Entwickler betreffen. Firefox 120 wurde am [21. November 2023](https://whattrainisitnow.com/release/?version=120) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die Unterstützung für das `media`-Attribut im [`<source>`](/de/docs/Web/HTML/Reference/Elements/source)-Element wurde wieder eingeführt und erweitert, so dass es nun auch in `<audio>` und `<video>`-Elementen verwendet werden kann. Dieses Attribut wurde erstmals in Firefox 15 hinzugefügt, aber in Firefox 53 entfernt, als seine Verwendung auf das `<source>`-Element innerhalb von `<picture>` beschränkt wurde. Mit dieser Veröffentlichung wird das `media`-Attribut in `<source>`-Elementen innerhalb von `<audio>`, `<video>` und `<picture>` verfügbar sein ([Firefox-Bug 1836128](https://bugzil.la/1836128)).

### CSS

- Die {{CSSXref("color_value/light-dark", "light-dark()")}} CSS Farb-Funktion wird jetzt unterstützt. Dies ermöglicht das Setzen von Farben für sowohl helles als auch dunkles Design ohne die Notwendigkeit des `prefers-color-scheme` Media Features ([Firefox-Bug 1856999](https://bugzil.la/1856999)).
- Die [`lh`](/de/docs/Web/CSS/length#lh) und [`rlh`](/de/docs/Web/CSS/length#rlh) Linienhöhe-Einheiten werden jetzt unterstützt. Diese erlauben es, Eigenschaften relativ zur Linienhöhe eines Elements zu setzen, zum Beispiel das genaue Ausrichten von Hintergrunddekorationen mit mehrzeiligem Text ([Firefox-Bug 1310170](https://bugzil.la/1310170)).

#### Entfernungen

- Die nicht-standardisierte {{cssxref("-moz-image-rect")}} CSS-Funktion zum Zuschneiden von Hintergrundbildern wurde entfernt. Diese Funktion wurde erstmals in Firefox 4 eingeführt, aber nie standardisiert oder in anderen Browsern implementiert ([Firefox-Bug 1856999](https://bugzil.la/1853867)).

### JavaScript

- {{jsxref("Date.parse()")}} akzeptiert nun mehrere zusätzliche Datumsformate:
  - Numerische Daten mit Bindestrichen, die nicht dem formalen ISO-Standard entsprechen, werden jetzt akzeptiert ([Firefox-Bug 1557650](https://bugzil.la/1557650)), einschließlich:
    - `"01-12-1999"` (Monat zuerst)
    - `"1999-1-5"` (einzelstelliger Monat oder Tag)
    - `"10000-01-12"` (Jahr > 9999)
    - `"99-01-05"` oder `"01-05-99"` (2-stelliges Jahr, das Jahr muss >31 sein, wenn es zuerst kommt)
    - `"1999-01-05 10:00:00"` (Leerzeichen zwischen Datum und Uhrzeit).

    Diese Daten werden mit einem Verhalten geparst, das typisch für andere Nicht-ISO-Daten ist, wie beispielsweise die lokale Zeitzone und das Monatüberschreiten (der 31. April rollt auf den 1. Mai, da der 31. April nicht existiert).

  - Die Anforderungen an die Zeichen direkt nach den Zahlen wurden gelockert, um neue Formate zu akzeptieren ([Firefox-Bug 449921](https://bugzil.la/449921)), einschließlich:
    - `"DDMonYYYY"`
    - `"Mon.DD.YYYY"`
    - `"DD.Mon.YYYY"`
    - `"YYYY.MM.DD"`
    - `"Mon DD YYYY hh:mmXm"` (`am`/`pm` direkt nach der Zeit)

  - Die Zeitzone `'Z'` wird jetzt für Nicht-ISO-Formate akzeptiert (z.B. `Jan 1 1970 10:00Z`) ([Firefox-Bug 1852422](https://bugzil.la/1852422)).

### HTTP

- Der [`103 Early Hints`](/de/docs/Web/HTTP/Reference/Status/103) HTTP [informational response](/de/docs/Web/HTTP/Reference/Status#informational_responses) Statuscode ist aktiviert für das [Vorkonnekten](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) zu einem bestimmten Ursprung (von dem die Seite wahrscheinlich Ressourcen benötigen wird).
  Für nähere Details siehe [Firefox-Bug 1858712](https://bugzil.la/1858712).
- Firefox unterstützt den [Global Privacy Control](https://globalprivacycontrol.org/) {{HTTPHeader("Sec-GPC")}} Anfrage-Header, der gesendet werden kann, um darauf hinzuweisen, dass der Benutzer einer Website oder einem Dienst die Erlaubnis verweigert, persönliche Informationen an Dritte zu verkaufen oder zu teilen.
  Benutzer können den Header sowohl im normalen als auch im privaten Browsing-Modus aktivieren, indem sie die Einstellung `privacy.globalprivacycontrol.enabled` auf `true` setzen (in `about:config`).
  Die Eigenschaften [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) und [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) ermöglichen es, die Einwilligungspräferenz des Benutzers per JavaScript zu überprüfen ([Firefox-Bug 1856029](https://bugzil.la/1856029)).

### APIs

- Die [`authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Interface wird jetzt unterstützt.
  Dies ermöglicht es Webanwendungen, sich darauf zu konfigurieren, ob der Authenticator Teil des Geräts ist, das die Webauthentifizierung durchführt, oder ob er zwischen Geräten wandern kann (siehe [Firefox-Bug 1810851](https://bugzil.la/1810851)).
- Die [Minimum PIN Length Extension (`minPinLength`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#minpinlength) des [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt, wodurch ein Server der Relying Party die minimale PIN-Länge des Authenticators während der Erstellung/Registrierung anfordern kann ([Firefox-Bug 1844450](https://bugzil.la/1844450)).
- Die [`Navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) Eigenschaft und das [`UserActivation`](/de/docs/Web/API/UserActivation) Interface werden jetzt unterstützt.
  Diese können verwendet werden, um zu überprüfen, ob der Benutzer mit der Seite interagiert oder seit dem Laden der Seite interagiert hat (siehe [Firefox-Bug 1791079](https://bugzil.la/1791079)).
- Die Methode [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) ist auf die Verwendung in sicheren Kontexten beschränkt ([Firefox-Bug 1858434](https://bugzil.la/1858434)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für die Serialisierung von `Proxy` und `Generator` Objekten hinzugefügt ([Firefox-Bug 1841786](https://bugzil.la/1841786)).
- Die `authChallenges` Eigenschaft (die Liste der Authentifizierungsherausforderungen in den Headern) wurde zu den Netzwerkevents `responseStarted` und `responseCompleted` hinzugefügt, um die bevorstehende `network.authRequired` Event zu unterstützen ([Firefox-Bug 1855149](https://bugzil.la/1855149)).

## Änderungen für Add-on-Entwickler

- Obwohl [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) auf sichere Kontexte beschränkt ist ([Firefox-Bug 1858434](https://bugzil.la/1858434)), können Inhaltsskripte diese Methode in Dokumenten verwenden, die kein sicherer Kontext sind ([Firefox-Bug 1870498](https://bugzil.la/1870498)).

## Ältere Versionen

{{Firefox_for_developers}}

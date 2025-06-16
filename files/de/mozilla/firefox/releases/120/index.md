---
title: Firefox 120 für Entwickler
slug: Mozilla/Firefox/Releases/120
l10n:
  sourceCommit: d2317ab6c4301c3774f1f319fa3a532e94ba82f6
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 120, die Entwickler betreffen. Firefox 120 wurde am [21. November 2023](https://whattrainisitnow.com/release/?version=120) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die Unterstützung für das `media`-Attribut im [`<source>`](/de/docs/Web/HTML/Reference/Elements/source)-Element wurde wieder eingeführt und auf `<audio>`- und `<video>`-Elemente erweitert. Dieses Attribut wurde erstmals in Firefox 15 hinzugefügt, aber in Firefox 53 entfernt, als seine Verwendung auf das `<source>`-Element innerhalb von `<picture>` beschränkt wurde. Mit dieser Version wird das `media`-Attribut in `<source>`-Elementen innerhalb von `<audio>`, `<video>` und `<picture>` verfügbar sein ([Firefox Fehler 1836128](https://bugzil.la/1836128)).

### CSS

- Die CSS-Farb-Funktion {{CSSXref("color_value/light-dark", "light-dark()")}} wird jetzt unterstützt. Damit können Farben sowohl für helle als auch für dunkle Darstellungen festgelegt werden, ohne dass die `prefers-color-scheme`-Medienfunktion erforderlich ist ([Firefox Fehler 1856999](https://bugzil.la/1856999)).
- Die [`lh`](/de/docs/Web/CSS/length#lh)- und [`rlh`](/de/docs/Web/CSS/length#rlh)-Linienhöheneinheiten werden jetzt unterstützt. Diese ermöglichen die Einstellung von Eigenschaften, die relativ zur Zeilenhöhe eines Elements sind, beispielsweise um Hintergrunddekorationen präzise mit mehrzeiligem Text auszurichten ([Firefox Fehler 1310170](https://bugzil.la/1310170)).

#### Entfernungen

- Die nicht-standardisierte {{cssxref("-moz-image-rect")}}-CSS-Funktion zur Beschneidung von Hintergrundbildern wurde entfernt. Diese Funktion wurde erstmals in Firefox 4 eingeführt, aber nie standardisiert oder in anderen Browsern implementiert ([Firefox Fehler 1856999](https://bugzil.la/1853867)).

### JavaScript

- {{jsxref("Date.parse()")}} akzeptiert jetzt mehrere zusätzliche Datumsformate:

  - Numerisch gestrichelte Daten, die nicht dem formalen ISO-Standard entsprechen, werden jetzt akzeptiert ([Firefox Fehler 1557650](https://bugzil.la/1557650)), einschließlich:

    - `"01-12-1999"` (Monat zuerst)
    - `"1999-1-5"` (einstelliger Monat oder Tag)
    - `"10000-01-12"` (Jahr > 9999)
    - `"99-01-05"` oder `"01-05-99"` (2-stelliges Jahr, Jahr muss >31 sein, wenn es zuerst kommt)
    - `"1999-01-05 10:00:00"` (Leerzeichen zwischen Datum und Uhrzeit).

    Diese Daten werden mit einem für andere Nicht-ISO-Daten typischen Verhalten geparst, wie zum Beispiel lokaler Zeitzone und Monatsüberlauf (der 31. April wird auf den 1. Mai überführt, da der 31. April nicht existiert).

  - Die Anforderungen für Zeichen direkt nach Zahlen wurden gelockert, um neue Formate zu akzeptieren ([Firefox Fehler 449921](https://bugzil.la/449921)), einschließlich:

    - `"DDMonYYYY"`
    - `"Mon.DD.YYYY"`
    - `"DD.Mon.YYYY"`
    - `"YYYY.MM.DD"`
    - `"Mon DD YYYY hh:mmXm"` (`am`/`pm` direkt nach der Uhrzeit)

  - Zeitzone `'Z'` wird jetzt für Nicht-ISO-Formate akzeptiert (z. B. `Jan 1 1970 10:00Z`) ([Firefox Fehler 1852422](https://bugzil.la/1852422))

### HTTP

- Der [HTTP-Statuscode `103 Early Hints`](/de/docs/Web/HTTP/Reference/Status/103) ist aktiviert für das [Vorabrufen](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) zu einem bestimmten Ursprung (von dem die Seite wahrscheinlich Ressourcen benötigt).
  Weitere Details finden Sie im [Firefox Fehler 1858712](https://bugzil.la/1858712).
- Firefox unterstützt den [Global Privacy Control](https://globalprivacycontrol.org/) {{HTTPHeader("Sec-GPC")}}-Request-Header, der gesendet werden kann, um anzuzeigen, dass der Benutzer nicht damit einverstanden ist, dass eine Website oder ein Dienst seine persönlichen Informationen an Dritte verkauft oder weitergibt.
  Benutzer können den Header sowohl im normalen als auch im privaten Modus aktivieren, indem sie die Voreinstellung `privacy.globalprivacycontrol.enabled` auf `true` setzen (in `about:config`).
  Die Eigenschaften [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) und [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) ermöglichen es JavaScript, die Benutzereinwilligungspräferenz zu überprüfen ([Firefox Fehler 1856029](https://bugzil.la/1856029)).

### APIs

- Die Eigenschaft [`authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces wird jetzt unterstützt.
  Dies ermöglicht es, den Programmcode von Webanwendungen auf Client- und Serverseite so zu konfigurieren, dass festgestellt werden kann, ob der Authentifikator Teil des Geräts ist, das die Webauthentifizierung durchführt, oder ob er zwischen Geräten wechseln kann (siehe [Firefox Fehler 1810851](https://bugzil.la/1810851)).
- Die [Minimal-PIN-Längen-Erweiterung (`minPinLength`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#minpinlength) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt, sodass ein vertrauender Server die minimale PIN-Länge des Authentifikators während der Erstellung/Registrierung anfordern kann ([Firefox Fehler 1844450](https://bugzil.la/1844450)).
- Die [`Navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation)-Eigenschaft und das [`UserActivation`](/de/docs/Web/API/UserActivation)-Interface werden jetzt unterstützt.
  Diese können verwendet werden, um zu prüfen, ob der Benutzer mit der Seite interagiert oder seit dem Laden der Seite mit ihr interagiert hat (siehe [Firefox Fehler 1791079](https://bugzil.la/1791079)).
- Die Methode [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) ist auf die Verwendung in sicheren Kontexten beschränkt ([Firefox Fehler 1858434](https://bugzil.la/1858434)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützt jetzt die Serialisierung von `Proxy`- und `Generator`-Objekten ([Firefox Fehler 1841786](https://bugzil.la/1841786)).
- Hinzugefügt wurde die Eigenschaft `authChallenges` (die Liste der in den Headern vorhandenen Authentifizierungsherausforderungen) zu den Netzwerkevents `responseStarted` und `responseCompleted`, was nützlich sein wird, um das bevorstehende `network.authRequired`-Event zu behandeln ([Firefox Fehler 1855149](https://bugzil.la/1855149)).

## Änderungen für Add-on-Entwickler

- Obwohl [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) auf sichere Kontexte beschränkt ist ([Firefox Fehler 1858434](https://bugzil.la/1858434)), können Inhalts-Skripte diese Methode in Dokumenten verwenden, die kein sicherer Kontext sind ([Firefox Fehler 1870498](https://bugzil.la/1870498)).

## Ältere Versionen

{{Firefox_for_developers}}

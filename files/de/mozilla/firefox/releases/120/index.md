---
title: Firefox 120 für Entwickler
slug: Mozilla/Firefox/Releases/120
l10n:
  sourceCommit: 9a748379272199c67fd7837553b04d76d7e2305a
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 120, die Entwickler betreffen. Firefox 120 wurde am [21. November 2023](https://whattrainisitnow.com/release/?version=120) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die Unterstützung für das `media`-Attribut im [`<source>`](/de/docs/Web/HTML/Element/source)-Element wurde wieder eingeführt und erweitert, um `<audio>`- und `<video>`-Elemente einzuschließen. Dieses Attribut wurde zuerst in Firefox 15 hinzugefügt, aber in Firefox 53 entfernt, als seine Verwendung auf `<source>`-Elemente innerhalb von `<picture>` beschränkt wurde. Mit dieser Version wird das `media`-Attribut in `<source>`-Elementen innerhalb von `<audio>`, `<video>` und `<picture>` verfügbar sein ([Firefox Fehler 1836128](https://bugzil.la/1836128)).

### CSS

- Die {{CSSXref("color_value/light-dark", "light-dark()")}} CSS-Funktion für Farben wird nun unterstützt. Diese ermöglicht es, eine Farbe sowohl für helle als auch dunkle Darstellungen ohne das `prefers-color-scheme`-Medienfeature festzulegen ([Firefox Fehler 1856999](https://bugzil.la/1856999)).
- Die [`lh` und `rlh`](/de/docs/Learn/CSS/Building_blocks/Values_and_units#line_height_units) Zeilenhöhen-Einheiten werden jetzt unterstützt. Diese ermöglichen es, Eigenschaften relativ zur Zeilenhöhe eines Elements festzusetzen, zum Beispiel eine genaue Ausrichtung von Hintergrunddekorationen mit mehrzeiligem Text ([Firefox Fehler 1310170](https://bugzil.la/1310170)).

#### Entfernungen

- Die nicht standardisierte {{cssxref("-moz-image-rect")}} CSS-Funktion zum Beschneiden von Hintergrundbildern wurde entfernt. Diese Funktion wurde erstmals in Firefox 4 eingeführt, aber niemals standardisiert oder in anderen Browsern implementiert ([Firefox Fehler 1856999](https://bugzil.la/1853867)).

### JavaScript

- {{jsxref("Date.parse()")}} akzeptiert jetzt mehrere zusätzliche Datumsformate:

  - Numerische Datumsangaben mit Bindestrichen, die nicht dem formalen ISO-Standard entsprechen, werden jetzt akzeptiert ([Firefox Fehler 1557650](https://bugzil.la/1557650)), einschließlich:

    - `"01-12-1999"` (Monat zuerst)
    - `"1999-1-5"` (Monat oder Tag einstellige Zahl)
    - `"10000-01-12"` (Jahr > 9999)
    - `"99-01-05"` oder `"01-05-99"` (2-stelliges Jahr, Jahr muss >31 sein, wenn es zuerst kommt)
    - `"1999-01-05 10:00:00"` (Leerzeichen zwischen Datum und Uhrzeit).

    Diese Daten werden mit einem typischen Verhalten anderer nicht-ISO-Daten analysiert, wie z.B. lokaler Zeitzone und Monatsumschlag (31. April wird auf 1. Mai übergehen, da der 31. April nicht existiert).

  - Anforderungen für Zeichen, die direkt auf Zahlen folgen, wurden gelockert, um neue Formate zu akzeptieren ([Firefox Fehler 449921](https://bugzil.la/449921)), einschließlich:

    - `"DDMonYYYY"`
    - `"Mon.DD.YYYY"`
    - `"DD.Mon.YYYY"`
    - `"YYYY.MM.DD"`
    - `"Mon DD YYYY hh:mmXm"` (`am`/`pm` direkt nach der Uhrzeit)

  - Zeitzone `'Z'` wird jetzt für nicht-ISO-Formate akzeptiert (z.B. `Jan 1 1970 10:00Z`) ([Firefox Fehler 1852422](https://bugzil.la/1852422))

### HTTP

- Der [`103 Early Hints`](/de/docs/Web/HTTP/Status/103) HTTP-[Informationsantwort](/de/docs/Web/HTTP/Status#information_responses)-Statuscode ist für [Preconnecting](/de/docs/Web/HTML/Attributes/rel/preconnect) zu einem bestimmten Ursprung aktiviert (von dem die Seite wahrscheinlich Ressourcen benötigt).
  Weitere Details finden Sie unter [Firefox Fehler 1858712](https://bugzil.la/1858712).
- Firefox unterstützt den [Global Privacy Control](https://globalprivacycontrol.org/) {{HTTPHeader("Sec-GPC")}} Anfrage-Header, der gesendet werden kann, um anzuzeigen, dass der Benutzer nicht einwilligt, dass eine Website oder ein Dienst ihre persönlichen Informationen an Dritte verkauft oder weitergibt.
  Benutzer können den Header in sowohl normalen als auch privaten Browsing-Modi aktivieren, indem sie die Einstellung `privacy.globalprivacycontrol.enabled` auf `true` setzen (in `about:config`).
  Die [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) und [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl)-Eigenschaften ermöglichen es JavaScript, die Zustimmungseinstellung des Nutzers zu überprüfen ([Firefox Fehler 1856029](https://bugzil.la/1856029)).

### APIs

- Die [`authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment)-Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle wird jetzt unterstützt.
  Dies ermöglicht es der Client- und Serverseite einer Webanwendung sich zu konfigurieren, je nachdem, ob der Authentifikator Teil des Geräts ist, das die Web-Authentifizierung durchführt oder zwischen Geräten beweglich ist (siehe [Firefox Fehler 1810851](https://bugzil.la/1810851)).
- Die [Minimum PIN Length Extension (`minPinLength`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#minpinlength) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt und erlaubt es einem vertrauenden Server, die Mindest-PIN-Länge des Authentifikators während der Erstellung/Registrierung abzufragen ([Firefox Fehler 1844450](https://bugzil.la/1844450)).
- Die [`Navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation)-Eigenschaft und die [`UserActivation`](/de/docs/Web/API/UserActivation)-Schnittstelle werden jetzt unterstützt.
  Diese können verwendet werden, um zu prüfen, ob der Benutzer mit der Seite interagiert oder seit dem Laden der Seite damit interagiert hat (siehe [Firefox Fehler 1791079](https://bugzil.la/1791079)).
- Die Methode [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) ist auf die Verwendung in sicheren Kontexten beschränkt ([Firefox Fehler 1858434](https://bugzil.la/1858434)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für die Serialisierung von `Proxy`- und `Generator`-Objekten hinzugefügt ([Firefox Fehler 1841786](https://bugzil.la/1841786)).
- Die Eigenschaft `authChallenges` (die Liste der in den Headern vorhandenen Authentifizierungsherausforderungen) wurde zu den Netzwerkevents `responseStarted` und `responseCompleted` hinzugefügt, was zur Bearbeitung des kommenden `network.authRequired`-Events nützlich sein wird ([Firefox Fehler 1855149](https://bugzil.la/1855149)).

## Änderungen für Add-on-Entwickler

- Auch wenn [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) auf sichere Kontexte beschränkt wurde ([Firefox Fehler 1858434](https://bugzil.la/1858434)), können Inhalts-Skripte diese Methode in Dokumenten verwenden, die kein sicherer Kontext sind ([Firefox Fehler 1870498](https://bugzil.la/1870498)).

## Ältere Versionen

{{Firefox_for_developers}}

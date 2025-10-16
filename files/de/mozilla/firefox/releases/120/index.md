---
title: Firefox 120 Versionshinweise für Entwickler
short-title: Firefox 120
slug: Mozilla/Firefox/Releases/120
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 120, die Entwickler betreffen. Firefox 120 wurde am [21. November 2023](https://whattrainisitnow.com/release/?version=120) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die Unterstützung für das `media`-Attribut im [`<source>`](/de/docs/Web/HTML/Reference/Elements/source)-Element wurde wieder eingeführt und erweitert, um `<audio>`- und `<video>`-Elemente einzuschließen. Dieses Attribut wurde zuerst in Firefox 15 hinzugefügt, jedoch in Firefox 53 entfernt, als seine Nutzung auf das `<source>`-Element innerhalb von `<picture>` beschränkt wurde. Mit dieser Veröffentlichung wird das `media`-Attribut in `<source>`-Elementen innerhalb von `<audio>`, `<video>` und `<picture>` verfügbar sein ([Firefox Fehler 1836128](https://bugzil.la/1836128)).

### CSS

- Die {{CSSXref("color_value/light-dark", "light-dark()")}} CSS-Farb-Funktion wird jetzt unterstützt. Diese ermöglicht das Festlegen von Farben für sowohl helle als auch dunkle Modi, ohne das `prefers-color-scheme` Medieneigenschaft zu verwenden ([Firefox Fehler 1856999](https://bugzil.la/1856999)).
- Die [`lh`](/de/docs/Web/CSS/length#lh) und [`rlh`](/de/docs/Web/CSS/length#rlh) Zeilenhöheinheiten werden nun unterstützt. Diese ermöglichen das Setzen von Eigenschaften relativ zur Zeilenhöhe eines Elements, um beispielsweise Hintergrunddekorationen präzise an mehrzeiligen Text auszurichten ([Firefox Fehler 1310170](https://bugzil.la/1310170)).

#### Entfernungen

- Die nicht standardisierte {{cssxref("-moz-image-rect")}} CSS-Funktion zum Zuschneiden von Hintergrundbildern wurde entfernt. Diese Funktion wurde erstmals in Firefox 4 eingeführt, aber nie standardisiert oder in anderen Browsern implementiert ([Firefox Fehler 1856999](https://bugzil.la/1853867)).

### JavaScript

- {{jsxref("Date.parse()")}} akzeptiert nun mehrere zusätzliche Datumsformate:
  - Numerische Datumsangaben mit Bindestrichen, die nicht dem formalen ISO-Standard entsprechen, werden jetzt akzeptiert ([Firefox Fehler 1557650](https://bugzil.la/1557650)), darunter:
    - `"01-12-1999"` (Monat zuerst)
    - `"1999-1-5"` (einzeln bestehender Monat oder Tag)
    - `"10000-01-12"` (Jahr > 9999)
    - `"99-01-05"` oder `"01-05-99"` (zweistelliges Jahr, Jahr muss >31 sein, wenn es zuerst genannt wird)
    - `"1999-01-05 10:00:00"` (Leerzeichen zwischen Datum und Uhrzeit).

    Diese Datumsangaben werden mit dem typischen Verhalten anderer nicht-ISO-Daten analysiert, wie beispielsweise der lokalen Zeitzone und dem Monatsüberlauf (der 31. April wird auf den 1. Mai überrollen, da der 31. April nicht existiert).

  - Die Anforderungen an Zeichen, die direkt auf Zahlen folgen, wurden gelockert, um neue Formate zu akzeptieren ([Firefox Fehler 449921](https://bugzil.la/449921)), darunter:
    - `"DDMonYYYY"`
    - `"Mon.DD.YYYY"`
    - `"DD.Mon.YYYY"`
    - `"YYYY.MM.DD"`
    - `"Mon DD YYYY hh:mmXm"` (`am`/`pm` direkt nach der Uhrzeit)

  - Zeitzone `'Z'` wird jetzt für nicht-ISO-Formate akzeptiert (z.B. `Jan 1 1970 10:00Z`) ([Firefox Fehler 1852422](https://bugzil.la/1852422))

### HTTP

- Der HTTP-Statuscode [`103 Early Hints`](/de/docs/Web/HTTP/Reference/Status/103) als [Informierende Antwort](/de/docs/Web/HTTP/Reference/Status#informational_responses) ist für das [Vorbereiten von Verbindungen](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) zu einem bestimmten Ursprung (von dem die Seite wahrscheinlich Ressourcen benötigt) aktiviert.
  Weitere Details finden Sie im [Firefox Fehler 1858712](https://bugzil.la/1858712).
- Firefox unterstützt den [Global Privacy Control](https://globalprivacycontrol.org/) {{HTTPHeader("Sec-GPC")}} Anfrage-Header, der gesendet werden kann, um anzuzeigen, dass der Benutzer nicht damit einverstanden ist, dass eine Website oder ein Dienst seine persönlichen Informationen an Dritte verkauft oder teilt.
  Benutzer können den Header in den normalen und im privaten Browsing-Modus aktivieren, indem sie die Präferenz `privacy.globalprivacycontrol.enabled` auf `true` setzen (in `about:config`).
  Die Eigenschaften [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) und [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) ermöglichen es JavaScript, die Zustimmung des Benutzers abzufragen ([Firefox Fehler 1856029](https://bugzil.la/1856029)).

### APIs

- Die [`authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces wird jetzt unterstützt.
  Diese ermöglicht es, dass sich der Webanwendungscode darauf einstellen kann, ob der Authentifikator Teil des Geräts ist, das die Webauthentifizierung durchführt, oder ob er zwischen Geräten wandern kann (siehe [Firefox Fehler 1810851](https://bugzil.la/1810851)).
- Die [Mindest-PIN-Längen-Erweiterung (`minPinLength`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#minpinlength) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt, sodass ein vertrauender Server die Mindest-PIN-Länge des Authentifikators während der Erstellung/Registrierung anfordern kann ([Firefox Fehler 1844450](https://bugzil.la/1844450)).
- Die [`Navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) Eigenschaft und das [`UserActivation`](/de/docs/Web/API/UserActivation)-Interface werden jetzt unterstützt.
  Diese können verwendet werden, um zu prüfen, ob der Benutzer mit der Seite interagiert oder seit dem Laden der Seite interagiert hat (siehe [Firefox Fehler 1791079](https://bugzil.la/1791079)).
- Die Methode [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) ist auf die Verwendung in sicheren Kontexten beschränkt ([Firefox Fehler 1858434](https://bugzil.la/1858434)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für die Serialisierung von `Proxy`- und `Generator`-Objekten hinzugefügt ([Firefox Fehler 1841786](https://bugzil.la/1841786)).
- Die Eigenschaft `authChallenges` (die Liste der Authentifizierungsherausforderungen in den Headern präsent), zu den Netzwerkevents `responseStarted` und `responseCompleted` hinzugefügt, die nützlich sein werden, um das anstehende Event `network.authRequired` zu handhaben ([Firefox Fehler 1855149](https://bugzil.la/1855149)).

## Änderungen für Add-on-Entwickler

- Obwohl [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) auf sichere Kontexte beschränkt ist ([Firefox Fehler 1858434](https://bugzil.la/1858434)), können Inhalts-Skripte diese Methode in Dokumenten nutzen, die kein sicherer Kontext sind ([Firefox Fehler 1870498](https://bugzil.la/1870498)).

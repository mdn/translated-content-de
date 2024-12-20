---
title: Firefox 120 für Entwickler
slug: Mozilla/Firefox/Releases/120
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 120, die Entwickler betreffen. Firefox 120 wurde am [21. November 2023](https://whattrainisitnow.com/release/?version=120) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die Unterstützung für das `media`-Attribut im [`<source>`](/de/docs/Web/HTML/Element/source)-Element wurde wieder eingeführt und erweitert, um `<audio>`- und `<video>`-Elemente einzuschließen. Dieses Attribut wurde zuerst in Firefox 15 hinzugefügt, aber in Firefox 53 entfernt, als seine Nutzung auf das `<source>`-Element innerhalb von `<picture>` beschränkt wurde. Mit dieser Version wird das `media`-Attribut in `<source>`-Elementen innerhalb von `<audio>`, `<video>` und `<picture>` verfügbar sein ([Firefox-Bug 1836128](https://bugzil.la/1836128)).

### CSS

- Die {{CSSXref("color_value/light-dark", "light-dark()")}}-CSS-Farb-Funktion wird jetzt unterstützt. Dies ermöglicht das Setzen von Farben für sowohl hell- als auch dunkelmodus ohne die `prefers-color-scheme`-Media-Feature ([Firefox-Bug 1856999](https://bugzil.la/1856999)).
- Die [`lh` und `rlh`](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#line_height_units)-Zeilenhöhe-Einheiten werden jetzt unterstützt. Diese erlauben das Setzen von Eigenschaften relativ zur Zeilenhöhe eines Elements, beispielsweise zur genauen Ausrichtung von Hintergrunddekoration bei mehrzeiligem Text ([Firefox-Bug 1310170](https://bugzil.la/1310170)).

#### Entfernungen

- Die nicht standardisierte {{cssxref("-moz-image-rect")}}-CSS-Funktion zum Abschneiden von Hintergrundbildern wurde entfernt. Diese Funktion wurde erstmals in Firefox 4 eingeführt, aber nie standardisiert oder in anderen Browsern implementiert ([Firefox-Bug 1856999](https://bugzil.la/1853867)).

### JavaScript

- {{jsxref("Date.parse()")}} akzeptiert jetzt mehrere zusätzliche Datumsformate:

  - Numerische gestrichelte Daten, die nicht dem formellen ISO-Standard entsprechen, werden jetzt akzeptiert ([Firefox-Bug 1557650](https://bugzil.la/1557650)), einschließlich:

    - `"01-12-1999"` (Monat zuerst)
    - `"1999-1-5"` (einstelliger Monat oder Tag)
    - `"10000-01-12"` (Jahr > 9999)
    - `"99-01-05"` oder `"01-05-99"` (2-stellige Jahreszahl, Jahr muss >31 sein, wenn es zuerst kommt)
    - `"1999-01-05 10:00:00"` (Leerzeichen zwischen Datum und Zeit).

    Diese Daten werden mit typischem Verhalten anderer nicht-ISO-Daten geparst, wie z. B. lokaler Zeitzone und Monat-Umschlag (der 31. April springt auf den 1. Mai um, da der 31. April nicht existiert).

  - Die Anforderungen für Zeichen, die direkt auf Zahlen folgen, wurden gelockert, um neue Formate zu akzeptieren ([Firefox-Bug 449921](https://bugzil.la/449921)), einschließlich:

    - `"DDMonYYYY"`
    - `"Mon.DD.YYYY"`
    - `"DD.Mon.YYYY"`
    - `"YYYY.MM.DD"`
    - `"Mon DD YYYY hh:mmXm"` (`am`/`pm` direkt nach der Zeit)

  - Die Zeitzone `'Z'` wird jetzt für nicht-ISO-Formate akzeptiert (z. B. `Jan 1 1970 10:00Z`) ([Firefox-Bug 1852422](https://bugzil.la/1852422))

### HTTP

- Der [`103 Early Hints`](/de/docs/Web/HTTP/Status/103) HTTP-[informational response](/de/docs/Web/HTTP/Status#informational_responses)-Statuscode ist aktiviert für das [Preconnecting](/de/docs/Web/HTML/Attributes/rel/preconnect) zu einem bestimmten Ursprung (von dem die Seite wahrscheinlich Ressourcen benötigen wird).
  Für weitere Details siehe [Firefox-Bug 1858712](https://bugzil.la/1858712).
- Firefox unterstützt den [Global Privacy Control](https://globalprivacycontrol.org/) {{HTTPHeader("Sec-GPC")}}-Anforderungsheader, der gesendet werden kann, um anzuzeigen, dass der Benutzer nicht zustimmt, dass eine Website oder ein Dienst persönliche Informationen an Dritte verkauft oder teilt.
  Benutzer können den Header sowohl im normalen als auch im privaten Browsing-Modus aktivieren, indem sie die Einstellung `privacy.globalprivacycontrol.enabled` auf `true` setzen (in `about:config`).
  Die Eigenschaften [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) und [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) ermöglichen es JavaScript, die Benutzereinwilligungspräferenz zu überprüfen ([Firefox-Bug 1856029](https://bugzil.la/1856029)).

### APIs

- Die [`authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment)-Eigenschaft des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces wird jetzt unterstützt.
  Dies ermöglicht es Webanwendungen, sich basierend darauf zu konfigurieren, ob der Authenticator Teil des Geräts ist, das die Web-Authentifizierung ausführt, oder zwischen Geräten wechseln kann (siehe [Firefox-Bug 1810851](https://bugzil.la/1810851)).
- Die [Minimum PIN Length Extension (`minPinLength`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#minpinlength) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt, was es einem Bereitsteller-Server erlaubt, die minimale PIN-Länge des Authenticators während der Erstellung/Registrierung anzufordern ([Firefox-Bug 1844450](https://bugzil.la/1844450)).
- Die [`Navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation)-Eigenschaft und das [`UserActivation`](/de/docs/Web/API/UserActivation)-Interface werden jetzt unterstützt.
  Diese können verwendet werden, um zu überprüfen, ob der Benutzer mit der Seite interagiert oder seit dem Laden der Seite damit interagiert hat (siehe [Firefox-Bug 1791079](https://bugzil.la/1791079)).
- Die Methode [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) ist auf die Nutzung in sicheren Kontexten beschränkt ([Firefox-Bug 1858434](https://bugzil.la/1858434)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für die Serialisierung von `Proxy`- und `Generator`-Objekten hinzugefügt ([Firefox-Bug 1841786](https://bugzil.la/1841786)).
- Die `authChallenges`-Eigenschaft (die Liste der Authentifizierungsherausforderungen, die in den Headern vorhanden sind) wurde zu den Netzwerkevents `responseStarted` und `responseCompleted` hinzugefügt, was nützlich sein wird, um das bevorstehende `network.authRequired`-Ereignis zu handhaben ([Firefox-Bug 1855149](https://bugzil.la/1855149)).

## Änderungen für Add-on-Entwickler

- Obwohl [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) auf sichere Kontexte beschränkt wurde ([Firefox-Bug 1858434](https://bugzil.la/1858434)), können Inhaltsskripte diese Methode in Dokumenten verwenden, die kein sicherer Kontext sind ([Firefox-Bug 1870498](https://bugzil.la/1870498)).

## Ältere Versionen

{{Firefox_for_developers}}

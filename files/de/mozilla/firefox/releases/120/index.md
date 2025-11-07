---
title: Firefox 120 Versionshinweise für Entwickler
short-title: Firefox 120
slug: Mozilla/Firefox/Releases/120
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 120, die Entwickler betreffen. Firefox 120 wurde am [21. November 2023](https://whattrainisitnow.com/release/?version=120) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die Unterstützung für das `media` Attribut im [`<source>`](/de/docs/Web/HTML/Reference/Elements/source) Element wurde erneut eingeführt und erweitert, um `<audio>` und `<video>` Elemente einzuschließen. Dieses Attribut wurde erstmals in Firefox 15 hinzugefügt, aber in Firefox 53 entfernt, als seine Nutzung auf das `<source>` Element innerhalb von `<picture>` beschränkt wurde. Mit dieser Version wird das `media` Attribut in `<source>` Elementen innerhalb von `<audio>`, `<video>` und `<picture>` verfügbar sein ([Firefox Bug 1836128](https://bugzil.la/1836128)).

### CSS

- Die {{CSSXref("color_value/light-dark", "light-dark()")}} CSS-Farb-Funktion wird jetzt unterstützt. Dies ermöglicht das Setzen von Farben für sowohl helle als auch dunkle Themen, ohne dass die Nutzung des `prefers-color-scheme` Medienmerkmals erforderlich ist ([Firefox Bug 1856999](https://bugzil.la/1856999)).
- Die [`lh`](/de/docs/Web/CSS/Reference/Values/length#lh) und [`rlh`](/de/docs/Web/CSS/Reference/Values/length#rlh) Zeilenhöhe-Einheiten werden jetzt unterstützt. Diese erlauben das Setzen von Eigenschaften relativ zur Zeilenhöhe eines Elements, zum Beispiel, um Dekorationen präzise an mehrzeiligen Text auszurichten ([Firefox Bug 1310170](https://bugzil.la/1310170)).

#### Entfernungen

- Die nicht-standardisierte {{cssxref("-moz-image-rect")}} CSS-Funktion zum Zuschnitt von Hintergrundbildern wurde entfernt. Diese Funktion wurde erstmals in Firefox 4 eingeführt, aber nie standardisiert oder in anderen Browsern implementiert ([Firefox Bug 1853867](https://bugzil.la/1853867)).

### JavaScript

- {{jsxref("Date.parse()")}} akzeptiert jetzt mehrere zusätzliche Datumsformate:
  - Numerische Datumsangaben mit Bindestrichen, die nicht dem formalen ISO-Standard entsprechen, werden jetzt akzeptiert ([Firefox Bug 1557650](https://bugzil.la/1557650)), einschließlich:
    - `"01-12-1999"` (Monat zuerst)
    - `"1999-1-5"` (einstelliger Monat oder Tag)
    - `"10000-01-12"` (Jahr > 9999)
    - `"99-01-05"` oder `"01-05-99"` (2-stelliges Jahr, Jahr muss >31 sein, wenn es zuerst kommt)
    - `"1999-01-05 10:00:00"` (Zwischenraum zwischen Datum und Uhrzeit).

    Diese Daten werden mit einem Verhalten analysiert, das typisch für andere nicht-ISO-Daten ist, wie z.B. lokale Zeitzone und Monatüberschreitung (31. April wird auf 1. Mai übertragen, da der 31. April nicht existiert).

  - Die Anforderungen an Zeichen, die direkt auf Zahlen folgen, wurden gelockert, um neue Formate zu akzeptieren ([Firefox Bug 449921](https://bugzil.la/449921)), einschließlich:
    - `"DDMonYYYY"`
    - `"Mon.DD.YYYY"`
    - `"DD.Mon.YYYY"`
    - `"YYYY.MM.DD"`
    - `"Mon DD YYYY hh:mmXm"` (`am`/`pm` direkt nach der Uhrzeit)

  - Die Zeitzone `'Z'` wird jetzt für non-ISO-Formate akzeptiert (z.B. `Jan 1 1970 10:00Z`) ([Firefox Bug 1852422](https://bugzil.la/1852422))

### HTTP

- Der HTTP [Interessierende Antwort](/de/docs/Web/HTTP/Reference/Status#informational_responses) Statuscode [`103 Early Hints`](/de/docs/Web/HTTP/Reference/Status/103) ist für das [Preconnect](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) zu einem bestimmten Ursprung, von dem die Seite wahrscheinlich Ressourcen benötigt, aktiviert.
  Für weitere Details siehe [Firefox Bug 1858712](https://bugzil.la/1858712).
- Firefox unterstützt nun den [Global Privacy Control](https://globalprivacycontrol.org/) {{HTTPHeader("Sec-GPC")}} Anfrage-Header, der gesendet werden kann, um anzuzeigen, dass der Nutzer nicht zustimmt, dass eine Website oder ein Dienst seine persönlichen Informationen an Dritte verkauft oder teilt.
  Nutzer können den Header aktivieren, indem sie in normalen und privaten Browsing-Modi die Einstellung `privacy.globalprivacycontrol.enabled` auf `true` setzen (in `about:config`).
  Die [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) und [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) Eigenschaften ermöglichen es JavaScript, die Zustimmung des Nutzers zu überprüfen ([Firefox Bug 1856029](https://bugzil.la/1856029)).

### APIs

- Die [`authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Schnittstelle wird nun unterstützt.
  Dies ermöglicht es Webanwendungs-Client- und Server-Code, sich basierend darauf zu konfigurieren, ob der Authenticator Teil des Geräts ist, das die Web-Authentifizierung durchführt, oder zwischen Geräten wechseln kann (siehe [Firefox Bug 1810851](https://bugzil.la/1810851)).
- Die [Minimum PIN Length Extension (`minPinLength`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#minpinlength) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt, sodass ein vertrauender Server die Mindest-PIN-Länge des Authenticators bei Erstellung/Registrierung anfordern kann ([Firefox Bug 1844450](https://bugzil.la/1844450)).
- Die [`Navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) Eigenschaft und die [`UserActivation`](/de/docs/Web/API/UserActivation) Schnittstelle werden jetzt unterstützt.
  Diese können verwendet werden, um zu überprüfen, ob der Nutzer mit der Seite interagiert, oder seit dem Laden der Seite interagiert hat (siehe [Firefox Bug 1791079](https://bugzil.la/1791079)).
- Die Methode [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) ist nur noch in sicheren Umgebungen einsetzbar ([Firefox Bug 1858434](https://bugzil.la/1858434)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für die Serialisierung von `Proxy` und `Generator` Objekten hinzugefügt ([Firefox Bug 1841786](https://bugzil.la/1841786)).
- Die Eigenschaft `authChallenges` (die Liste der in den Headers enthaltenen Authentifizierungsherausforderungen) wurde zu `responseStarted` und `responseCompleted` Netzwerk-Ereignissen hinzugefügt, die nützlich sein werden, um das bevorstehende `network.authRequired` Ereignis zu handhaben ([Firefox Bug 1855149](https://bugzil.la/1855149)).

## Änderungen für Add-on-Entwickler

- Obwohl [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) auf sichere Umgebungen beschränkt wurde ([Firefox Bug 1858434](https://bugzil.la/1858434)), können Inhaltsskripte diese Methode in Dokumenten verwenden, die keine sichere Umgebung sind ([Firefox Bug 1870498](https://bugzil.la/1870498)).

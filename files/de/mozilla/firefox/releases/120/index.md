---
title: Firefox 120 für Entwickler
slug: Mozilla/Firefox/Releases/120
l10n:
  sourceCommit: 9a748379272199c67fd7837553b04d76d7e2305a
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 120, die Entwickler betreffen. Firefox 120 wurde am [21. November 2023](https://whattrainisitnow.com/release/?version=120) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die Unterstützung für das `media`-Attribut im [`<source>`](/de/docs/Web/HTML/Element/source) Element wurde wieder eingeführt und erweitert, um `<audio>` und `<video>` Elemente einzuschließen. Dieses Attribut wurde zuerst in Firefox 15 eingeführt, jedoch in Firefox 53 entfernt, als seine Nutzung auf `<source>`-Elemente innerhalb von `<picture>` begrenzt wurde. In dieser Version wird das `media`-Attribut in `<source>`-Elementen innerhalb von `<audio>`, `<video>` und `<picture>` verfügbar sein ([Firefox-Bug 1836128](https://bugzil.la/1836128)).

### CSS

- Die {{CSSXref("color_value/light-dark", "light-dark()")}} CSS-Funktion für Farben wird jetzt unterstützt. Dies ermöglicht das Festlegen von Farben sowohl für helle als auch für dunkle Themen, ohne dass das `prefers-color-scheme`-Medienfeature erforderlich ist ([Firefox-Bug 1856999](https://bugzil.la/1856999)).
- Die [`lh` und `rlh`](/de/docs/Learn/CSS/Building_blocks/Values_and_units#line_height_units) Zeilenhöhe-Einheiten werden jetzt unterstützt. Diese ermöglichen das Setzen von Eigenschaften relativ zur Zeilenhöhe eines Elements, beispielsweise um Hintergrunddekorationen präzise mit mehrzeiligem Text auszurichten ([Firefox-Bug 1310170](https://bugzil.la/1310170)).

#### Entfernungen

- Die nicht-standardisierte {{cssxref("-moz-image-rect")}} CSS-Funktion zum Zuschneiden von Hintergrundbildern wurde entfernt. Diese Funktion wurde zuerst in Firefox 4 eingeführt, war jedoch nie standardisiert oder in anderen Browsern implementiert ([Firefox-Bug 1856999](https://bugzil.la/1853867)).

### JavaScript

- {{jsxref("Date.parse()")}} akzeptiert jetzt mehrere zusätzliche Datumsformate:

  - Numerische, gestrichelte Daten, die nicht dem formalen ISO-Standard entsprechen, werden jetzt akzeptiert ([Firefox-Bug 1557650](https://bugzil.la/1557650)), einschließlich:

    - `"01-12-1999"` (Monat zuerst)
    - `"1999-1-5"` (einstelliger Monat oder Tag)
    - `"10000-01-12"` (Jahr > 9999)
    - `"99-01-05"` oder `"01-05-99"` (zweistelliges Jahr, Jahr muss >31 sein, wenn es zuerst kommt)
    - `"1999-01-05 10:00:00"` (Leerzeichen zwischen Datum und Uhrzeit).

    Diese Daten werden mit einem Verhalten geparst, das für andere Nicht-ISO-Daten typisch ist, wie etwa für lokale Zeitzonen und Monatsüberläufe (z.B. wird der 31. April zum 1. Mai, da der 31. April nicht existiert).

  - Anforderungen für Zeichen direkt nach Zahlen wurden gelockert, um neue Formate zu akzeptieren ([Firefox-Bug 449921](https://bugzil.la/449921)), einschließlich:

    - `"DDMonYYYY"`
    - `"Mon.DD.YYYY"`
    - `"DD.Mon.YYYY"`
    - `"YYYY.MM.DD"`
    - `"Mon DD YYYY hh:mmXm"` (`am`/`pm` direkt nach Uhrzeit)

  - Die Zeitzone `'Z'` wird jetzt für Nicht-ISO-Formate akzeptiert (z.B. `Jan 1 1970 10:00Z`) ([Firefox-Bug 1852422](https://bugzil.la/1852422))

### HTTP

- Der [`103 Early Hints`](/de/docs/Web/HTTP/Status/103) HTTP [Informationsantwort](/de/docs/Web/HTTP/Status#information_responses) Statuscode ist für das [Preconnecting](/de/docs/Web/HTML/Attributes/rel/preconnect) zu einem bestimmten Ursprung aktiviert (von dem die Seite wahrscheinlich Ressourcen benötigen wird).
  Für weitere Details siehe [Firefox-Bug 1858712](https://bugzil.la/1858712).
- Firefox unterstützt den [Global Privacy Control](https://globalprivacycontrol.org/) {{HTTPHeader("Sec-GPC")}} Request-Header, der gesendet werden kann, um anzuzeigen, dass der Benutzer nicht zustimmt, dass eine Website oder ein Dienst ihre persönlichen Daten an Dritte verkauft oder weitergibt.
  Benutzer können den Header sowohl im normalen als auch im privaten Browsing-Modus aktivieren, indem sie die Einstellung `privacy.globalprivacycontrol.enabled` auf `true` setzen (in `about:config`).
  Die [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) und [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) Eigenschaften ermöglichen es JavaScript, die Präferenz zur Benutzerzustimmung zu überprüfen ([Firefox-Bug 1856029](https://bugzil.la/1856029)).

### APIs

- Die [`authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Schnittstelle wird jetzt unterstützt.
  Dies ermöglicht es der Webanwendungs-Client- und Servercodierung, sich anhand der Frage zu konfigurieren, ob der Authenticator Teil des Geräts ist, auf dem die Webauthentifizierung ausgeführt wird, oder ob er zwischen Geräten wandern kann (siehe [Firefox-Bug 1810851](https://bugzil.la/1810851)).
- Die [Minimum PIN Length Extension (`minPinLength`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#minpinlength) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt und ermöglicht es einem vertrauenden Server, die minimale PIN-Länge des Authenticators während der Erstellung/Registrierung anzufordern ([Firefox-Bug 1844450](https://bugzil.la/1844450)).
- Die [`Navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) Eigenschaft und die [`UserActivation`](/de/docs/Web/API/UserActivation) Schnittstelle werden jetzt unterstützt.
  Diese können verwendet werden, um zu überprüfen, ob der Benutzer mit der Seite interagiert oder seit dem Laden der Seite interagiert hat (siehe [Firefox-Bug 1791079](https://bugzil.la/1791079)).
- Die [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) Methode ist auf die Verwendung in sicheren Kontexten beschränkt ([Firefox-Bug 1858434](https://bugzil.la/1858434)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für die Serialisierung von `Proxy` und `Generator` Objekten hinzugefügt ([Firefox-Bug 1841786](https://bugzil.la/1841786)).
- Die Eigenschaft `authChallenges` (die Liste der Authentifizierungsherausforderungen, die in den Headern vorhanden sind) wurde zu den Netzwerkeereignissen `responseStarted` und `responseCompleted` hinzugefügt, was nützlich sein wird, um das kommende `network.authRequired`-Ereignis zu behandeln ([Firefox-Bug 1855149](https://bugzil.la/1855149)).

## Änderungen für Add-on-Entwickler

- Obwohl [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) auf sichere Kontexte beschränkt ist ([Firefox-Bug 1858434](https://bugzil.la/1858434)), können Inhaltsskripte diese Methode in Dokumenten verwenden, die keinen sicheren Kontext darstellen ([Firefox-Bug 1870498](https://bugzil.la/1870498)).

## Ältere Versionen

{{Firefox_for_developers}}

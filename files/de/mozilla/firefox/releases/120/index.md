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

- Die Unterstützung für das `media`-Attribut im [`<source>`](/de/docs/Web/HTML/Element/source)-Element wurde wieder eingeführt und erweitert, um `<audio>`- und `<video>`-Elemente einzubeziehen. Dieses Attribut wurde erstmals in Firefox 15 hinzugefügt, aber in Firefox 53 entfernt, als seine Verwendung auf das `<source>`-Element innerhalb von `<picture>` beschränkt wurde. Mit dieser Veröffentlichung wird das `media`-Attribut in `<source>`-Elementen innerhalb von `<audio>`, `<video>` und `<picture>` verfügbar sein ([Firefox-Bug 1836128](https://bugzil.la/1836128)).

### CSS

- Die {{CSSXref("color_value/light-dark", "light-dark()")}} CSS-Farb-Funktion wird nun unterstützt. Diese ermöglicht die Einstellung einer Farbe sowohl für helle als auch für dunkle Modi, ohne dass das `prefers-color-scheme` Media-Feature erforderlich ist ([Firefox-Bug 1856999](https://bugzil.la/1856999)).
- Die [`lh` und `rlh`](/de/docs/Learn/CSS/Building_blocks/Values_and_units#line_height_units) Zeilenhöhen-Einheiten werden nun unterstützt. Diese ermöglichen das Setzen von Eigenschaften relativ zur Zeilenhöhe eines Elements, zum Beispiel, um Hintergrunddekorationen präzise mit mehrzeiligem Text auszurichten ([Firefox-Bug 1310170](https://bugzil.la/1310170)).

#### Entfernungen

- Die nicht standardisierte {{cssxref("-moz-image-rect")}} CSS-Funktion zum Zuschneiden von Hintergrundbildern wurde entfernt. Diese Funktion wurde erstmals in Firefox 4 eingeführt, aber nie standardisiert oder in anderen Browsern implementiert ([Firefox-Bug 1856999](https://bugzil.la/1853867)).

### JavaScript

- {{jsxref("Date.parse()")}} akzeptiert jetzt mehrere zusätzliche Datumsformate:

  - Numerische, gestrichelte Datumsangaben, die nicht dem formalen ISO-Standard entsprechen, werden nun akzeptiert ([Firefox-Bug 1557650](https://bugzil.la/1557650)), einschließlich:

    - `"01-12-1999"` (Monat zuerst)
    - `"1999-1-5"` (einstelliger Monat oder Tag)
    - `"10000-01-12"` (Jahr > 9999)
    - `"99-01-05"` oder `"01-05-99"` (2-stelliges Jahr, Jahr muss >31 sein, wenn es zuerst kommt)
    - `"1999-01-05 10:00:00"` (Leerzeichen zwischen Datum und Uhrzeit).

    Diese Daten werden mit einem Verhalten geparst, das typisch für andere nicht-ISO-Daten ist, wie z.B. lokale Zeitzone und Monatsrollover (der 31. April rollt auf den 1. Mai, da es den 31. April nicht gibt).

  - Anforderungen an Zeichen, die direkt auf Zahlen folgen, wurden gelockert, um neue Formate zu akzeptieren ([Firefox-Bug 449921](https://bugzil.la/449921)), einschließlich:

    - `"DDMonYYYY"`
    - `"Mon.DD.YYYY"`
    - `"DD.Mon.YYYY"`
    - `"YYYY.MM.DD"`
    - `"Mon DD YYYY hh:mmXm"` (`am`/`pm` direkt nach der Uhrzeit)

  - Die Zeitzone `'Z'` wird nun für nicht-ISO-Formate akzeptiert (z.B. `Jan 1 1970 10:00Z`) ([Firefox-Bug 1852422](https://bugzil.la/1852422))

### HTTP

- Der HTTP-Statuscode [`103 Early Hints`](/de/docs/Web/HTTP/Status/103) für [Informationsantworten](/de/docs/Web/HTTP/Status#information_responses) ist für [Preconnecting](/de/docs/Web/HTML/Attributes/rel/preconnect) zu einem bestimmten Ursprung aktiviert (von dem die Seite wahrscheinlich Ressourcen benötigen wird).
  Für weitere Details siehe [Firefox-Bug 1858712](https://bugzil.la/1858712).
- Firefox unterstützt den {{HTTPHeader("Sec-GPC")}} Request-Header für [Global Privacy Control](https://globalprivacycontrol.org/), der gesendet werden kann, um anzuzeigen, dass der Benutzer nicht zustimmt, dass eine Website oder ein Dienst seine persönlichen Informationen an Dritte verkauft oder weitergibt.
  Benutzer können den Header sowohl im normalen als auch im privaten Browsing-Modus aktivieren, indem sie die Einstellung `privacy.globalprivacycontrol.enabled` auf `true` setzen (in `about:config`).
  Die Eigenschaften {{domxref("Navigator.globalPrivacyControl")}} und {{domxref("WorkerNavigator.globalPrivacyControl")}} erlauben es JavaScript, die Zustimmung des Benutzers zu überprüfen ([Firefox-Bug 1856029](https://bugzil.la/1856029)).

### APIs

- Die {{domxref("PublicKeyCredential.authenticatorAttachment", "authenticatorAttachment")}} Eigenschaft der {{domxref("PublicKeyCredential")}}-Schnittstelle wird nun unterstützt.
  Dies ermöglicht es Webanwendungsclients und -servern, sich darauf einzustellen, ob der Authentifikator Teil des Geräts ist, das die Webauthentifizierung ausführt, oder ob er zwischen Geräten wechseln kann (siehe [Firefox-Bug 1810851](https://bugzil.la/1810851)).
- Die [Minimum PIN Length Extension (`minPinLength`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#minpinlength) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt, und ermöglicht es, dem serverseitigen Client während der Erstellung/Registrierung die Mindestlänge der PIN des Authentifikators anzufordern ([Firefox-Bug 1844450](https://bugzil.la/1844450)).
- Die {{domxref("Navigator.userActivation")}} Eigenschaft und die {{domxref("UserActivation")}} Schnittstelle werden nun unterstützt.
  Diese können verwendet werden, um zu prüfen, ob der Benutzer mit der Seite interagiert oder seit dem Laden der Seite interagiert hat (siehe [Firefox-Bug 1791079](https://bugzil.la/1791079)).
- Die Methode {{domxref("PointerEvent.getCoalescedEvents()")}} ist auf die Verwendung in sicheren Kontexten beschränkt ([Firefox-Bug 1858434](https://bugzil.la/1858434)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für die Serialisierung von `Proxy`- und `Generator`-Objekten wurde hinzugefügt ([Firefox-Bug 1841786](https://bugzil.la/1841786)).
- Die `authChallenges`-Eigenschaft (die Liste der in den Headern vorhandenen Authentifizierungsherausforderungen) wurde zu den Netzwerkereignissen `responseStarted` und `responseCompleted` hinzugefügt, was nützlich sein wird, um das kommende `network.authRequired`-Ereignis zu bearbeiten ([Firefox-Bug 1855149](https://bugzil.la/1855149)).

## Änderungen für Add-on-Entwickler

- Obwohl {{domxref("PointerEvent.getCoalescedEvents()")}} auf sichere Kontexte beschränkt wurde ([Firefox-Bug 1858434](https://bugzil.la/1858434)), können Inhaltsskripte diese Methode in Dokumenten verwenden, die kein sicherer Kontext sind ([Firefox-Bug 1870498](https://bugzil.la/1870498)).

## Ältere Versionen

{{Firefox_for_developers}}

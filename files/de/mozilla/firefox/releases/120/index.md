---
title: Firefox 120 für Entwickler
slug: Mozilla/Firefox/Releases/120
l10n:
  sourceCommit: bd4d7bc4176d9f67297e3940ae7163a258f07ef5
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 120, die Entwickler betreffen. Firefox 120 wurde am [21. November 2023](https://whattrainisitnow.com/release/?version=120) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die Unterstützung für das `media`-Attribut im [`<source>`](/de/docs/Web/HTML/Element/source)-Element wurde wiedereingeführt und erweitert, um `<audio>`- und `<video>`-Elemente einzuschließen. Dieses Attribut wurde zuerst in Firefox 15 hinzugefügt, aber in Firefox 53 entfernt, als seine Verwendung auf das `<source>`-Element innerhalb eines `<picture>` beschränkt wurde. Mit dieser Version ist das `media`-Attribut in `<source>`-Elementen innerhalb von `<audio>`, `<video>` und `<picture>` verfügbar ([Firefox-Bug 1836128](https://bugzil.la/1836128)).

### CSS

- Die {{CSSXref("color_value/light-dark", "light-dark()")}} CSS-Funktion für Farben wird jetzt unterstützt. Dies ermöglicht das Setzen von Farben für sowohl hellen als auch dunklen Modus, ohne die `prefers-color-scheme` Media-Feature verwenden zu müssen ([Firefox-Bug 1856999](https://bugzil.la/1856999)).
- Die [`lh` und `rlh`](/de/docs/Learn/CSS/Building_blocks/Values_and_units#line_height_units) Zeilenhöhe-Einheiten werden jetzt unterstützt. Diese erlauben das Setzen von Eigenschaften relativ zur Zeilenhöhe eines Elements, zum Beispiel das präzise Ausrichten von Hintergrunddekorationen mit mehrzeiligem Text ([Firefox-Bug 1310170](https://bugzil.la/1310170)).

#### Entfernungen

- Die nicht-standardmäßige {{cssxref("-moz-image-rect")}} CSS-Funktion zum Zuschneiden von Hintergrundbildern wurde entfernt. Diese Funktion wurde in Firefox 4 erstmals eingeführt, aber nie standardisiert oder in anderen Browsern implementiert ([Firefox-Bug 1856999](https://bugzil.la/1853867)).

### JavaScript

- {{jsxref("Date.parse()")}} akzeptiert jetzt mehrere zusätzliche Datumsformate:

  - Numerische Datumsangaben mit Bindestrichen, die nicht dem formalen ISO-Standard entsprechen, werden jetzt akzeptiert ([Firefox-Bug 1557650](https://bugzil.la/1557650)), einschließlich:

    - `"01-12-1999"` (Monat zuerst)
    - `"1999-1-5"` (einstellige Monat- oder Tagesangabe)
    - `"10000-01-12"` (Jahr > 9999)
    - `"99-01-05"` oder `"01-05-99"` (zweistelliges Jahr, muss >31 sein, wenn es zuerst kommt)
    - `"1999-01-05 10:00:00"` (Leerzeichen zwischen Datum und Uhrzeit).

    Diese Datumsangaben werden mit typischem Verhalten anderer Nicht-ISO-Daten geparst, wie z.B. Ortszeit und Monatsüberlauf (31. April rollt über zum 1. Mai, da der 31. April nicht existiert).

  - Anforderungen an Zeichen direkt nach Zahlen wurden gelockert, um neue Formate zu akzeptieren ([Firefox-Bug 449921](https://bugzil.la/449921)), einschließlich:

    - `"DDMonYYYY"`
    - `"Mon.DD.YYYY"`
    - `"DD.Mon.YYYY"`
    - `"YYYY.MM.DD"`
    - `"Mon DD YYYY hh:mmXm"` (`am`/`pm` direkt nach der Uhrzeit)

  - Zeitzone `'Z'` wird jetzt für Nicht-ISO-Formate akzeptiert (z.B. `Jan 1 1970 10:00Z`) ([Firefox-Bug 1852422](https://bugzil.la/1852422))

### HTTP

- Der [`103 Early Hints`](/de/docs/Web/HTTP/Status/103) HTTP-[Informationsantwort](/de/docs/Web/HTTP/Status#informational_responses)-Statuscode ist aktiviert für das [Preconnecting](/de/docs/Web/HTML/Attributes/rel/preconnect) zu einem bestimmten Ursprung (von dem die Seite wahrscheinlich Ressourcen benötigt).
  Weitere Details finden Sie unter [Firefox-Bug 1858712](https://bugzil.la/1858712).
- Firefox unterstützt den [Global Privacy Control](https://globalprivacycontrol.org/) {{HTTPHeader("Sec-GPC")}} Anfrage-Header, der gesendet werden kann, um anzuzeigen, dass der Benutzer nicht zustimmt, dass eine Website oder ein Dienst ihre persönlichen Informationen an Dritte verkauft oder teilt.
  Benutzer können den Header in sowohl normalem als auch privatem Browsing-Modus aktivieren, indem sie die Einstellung `privacy.globalprivacycontrol.enabled` auf `true` setzen (in `about:config`).
  Die [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) und [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) Eigenschaften erlauben es JavaScript, die Zustimmung des Benutzers zu prüfen ([Firefox-Bug 1856029](https://bugzil.la/1856029)).

### APIs

- Die [`authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Schnittstelle wird jetzt unterstützt.
  Dies erlaubt es, dass sich der Webapplikations-Client und -Servercode basierend darauf konfiguriert, ob der Authenticator Teil des Geräts ist, das die Webauthentifizierung ausführt, oder ob er zwischen Geräten wandeln kann (siehe [Firefox-Bug 1810851](https://bugzil.la/1810851)).
- Die [Minimum PIN Length Extension (`minPinLength`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#minpinlength) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt, was es einem vertrauenden Server erlaubt, während der Erstellung/Registrierung die Mindest-PIN-Länge des Authenticators anzufordern ([Firefox-Bug 1844450](https://bugzil.la/1844450)).
- Die [`Navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) Eigenschaft und die [`UserActivation`](/de/docs/Web/API/UserActivation) Schnittstelle werden jetzt unterstützt.
  Diese können verwendet werden, um zu prüfen, ob der Benutzer mit der Seite interagiert oder seit dem Laden der Seite damit interagiert hat (siehe [Firefox-Bug 1791079](https://bugzil.la/1791079)).
- Die Methode [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) ist auf die Verwendung in sicheren Kontexten beschränkt ([Firefox-Bug 1858434](https://bugzil.la/1858434)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für die Serialisierung von `Proxy` und `Generator` Objekten hinzugefügt ([Firefox-Bug 1841786](https://bugzil.la/1841786)).
- Die Eigenschaft `authChallenges` (die Liste der in den Headern vorhandenen Authentifizierungsherausforderungen) wurde zu den `responseStarted` und `responseCompleted` Netzwerkevents hinzugefügt, die nützlich sein werden, um das kommende `network.authRequired`-Event zu behandeln ([Firefox-Bug 1855149](https://bugzil.la/1855149)).

## Änderungen für Add-on-Entwickler

- Obwohl [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) auf sichere Kontexte beschränkt wurde ([Firefox-Bug 1858434](https://bugzil.la/1858434)), können Inhalts-Skripte diese Methode in Dokumenten verwenden, die kein sicherer Kontext sind ([Firefox-Bug 1870498](https://bugzil.la/1870498)).

## Ältere Versionen

{{Firefox_for_developers}}

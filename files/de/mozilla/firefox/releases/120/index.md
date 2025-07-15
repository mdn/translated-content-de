---
title: Firefox 120 für Entwickler
short-title: Firefox 120
slug: Mozilla/Firefox/Releases/120
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 120, die Entwickler betreffen. Firefox 120 wurde am [21. November 2023](https://whattrainisitnow.com/release/?version=120) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Die Unterstützung für das `media`-Attribut im [`<source>`](/de/docs/Web/HTML/Reference/Elements/source)-Element wurde wieder eingeführt und erweitert, um `<audio>`- und `<video>`-Elemente einzuschließen. Dieses Attribut wurde zuerst in Firefox 15 hinzugefügt, aber in Firefox 53 entfernt, als seine Verwendung auf das `<source>`-Element innerhalb von `<picture>` begrenzt wurde. Mit dieser Version wird das `media`-Attribut in `<source>`-Elementen innerhalb von `<audio>`, `<video>` und `<picture>` verfügbar sein ([Firefox Fehler 1836128](https://bugzil.la/1836128)).

### CSS

- Die {{CSSXref("color_value/light-dark", "light-dark()")}} CSS-Farbfunktion wird jetzt unterstützt. Dies ermöglicht die Festlegung von Farben sowohl für helle als auch dunkle Modi, ohne die `prefers-color-scheme` Medienfunktion zu benötigen ([Firefox Fehler 1856999](https://bugzil.la/1856999)).
- Die [`lh`](/de/docs/Web/CSS/length#lh)- und [`rlh`](/de/docs/Web/CSS/length#rlh)-Linienhöhe-Einheiten werden jetzt unterstützt. Diese erlauben die Festlegung von Eigenschaften relativ zur Linienhöhe eines Elements, um zum Beispiel Hintergrunddekorationen präzise mit mehrzeiligem Text abzustimmen ([Firefox Fehler 1310170](https://bugzil.la/1310170)).

#### Entfernungen

- Die nicht standardisierte {{cssxref("-moz-image-rect")}} CSS-Funktion zum Abschneiden von Hintergrundbildern wurde entfernt. Diese Funktion wurde zuerst in Firefox 4 eingeführt, jedoch nie standardisiert oder in anderen Browsern implementiert ([Firefox Fehler 1856999](https://bugzil.la/1853867)).

### JavaScript

- {{jsxref("Date.parse()")}} akzeptiert nun mehrere zusätzliche Datumsformate:
  - Numerische Strich-Daten, die nicht dem formalen ISO-Standard entsprechen, werden jetzt akzeptiert ([Firefox Fehler 1557650](https://bugzil.la/1557650)), darunter:
    - `"01-12-1999"` (Monat zuerst)
    - `"1999-1-5"` (einzelnstelliger Monat oder Tag)
    - `"10000-01-12"` (Jahr > 9999)
    - `"99-01-05"` oder `"01-05-99"` (zweistelliges Jahr, Jahr muss >31 sein, wenn es zuerst kommt)
    - `"1999-01-05 10:00:00"` (Leerzeichen zwischen Datum und Uhrzeit).

    Diese Daten werden mit einem typischen Verhalten anderer nicht-ISO-Daten geparst, wie z.B. Ortszeit und Monatsüberschreitung (31. April wird auf den 1. Mai überschrieben, da der 31. April nicht existiert).

  - Anforderungen an Zeichen direkt nach Zahlen wurden gelockert, um neue Formate zu akzeptieren ([Firefox Fehler 449921](https://bugzil.la/449921)), darunter:
    - `"DDMonYYYY"`
    - `"Mon.DD.YYYY"`
    - `"DD.Mon.YYYY"`
    - `"YYYY.MM.DD"`
    - `"Mon DD YYYY hh:mmXm"` (`am`/`pm` direkt nach der Uhrzeit)

  - Die Zeitzone `'Z'` wird jetzt für nicht-ISO-Formate akzeptiert (z.B. `Jan 1 1970 10:00Z`) ([Firefox Fehler 1852422](https://bugzil.la/1852422))

### HTTP

- Der HTTP-Statuscode [`103 Early Hints`](/de/docs/Web/HTTP/Reference/Status/103) für [informationsbezogene Antwort](/de/docs/Web/HTTP/Reference/Status#informational_responses) ist aktiviert, um eine [Vorabverbindung](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) zu einem bestimmten Ursprung herzustellen (von dem die Seite wahrscheinlich Ressourcen benötigt).
  Für weitere Details siehe [Firefox Fehler 1858712](https://bugzil.la/1858712).
- Firefox unterstützt den [Global Privacy Control](https://globalprivacycontrol.org/) {{HTTPHeader("Sec-GPC")}} Anforderungsheader, der gesendet werden kann, um anzuzeigen, dass der Benutzer nicht einwilligt, dass eine Website oder ein Dienst seine persönlichen Informationen an Dritte verkauft oder teilt.
  Benutzer können den Header in beiden Modi, normal und privat, aktivieren, indem sie die Präferenz `privacy.globalprivacycontrol.enabled` auf `true` setzen (in `about:config`).
  Die [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) und [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) Eigenschaften ermöglichen es JavaScript, die Zustimmung des Benutzers zu überprüfen ([Firefox Fehler 1856029](https://bugzil.la/1856029)).

### APIs

- Die [`authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) Eigenschaft der Schnittstelle [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) wird jetzt unterstützt.
  Dies ermöglicht es, dass sich Client- und Server-Code von Webanwendungen darauf einstellen, ob der Authenticator Teil des Geräts ist, das die Web-Authentifizierung ausführt, oder ob er zwischen Geräten wechseln kann (siehe [Firefox Fehler 1810851](https://bugzil.la/1810851)).
- Die [Minimum PIN Length Extension (`minPinLength`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#minpinlength) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt, wodurch es einem vertrauenden Server ermöglicht wird, die Mindest-PIN-Länge beim Erstellen/Registrieren des Authenticator anzufordern ([Firefox Fehler 1844450](https://bugzil.la/1844450)).
- Die [`Navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) Eigenschaft und die [`UserActivation`](/de/docs/Web/API/UserActivation) Schnittstelle werden jetzt unterstützt.
  Diese können verwendet werden, um zu überprüfen, ob der Benutzer mit der Seite interagiert, oder ob er es seit dem Laden der Seite getan hat (siehe [Firefox Fehler 1791079](https://bugzil.la/1791079)).
- Die Methode [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) ist nur in sicheren Kontexten verfügbar ([Firefox Fehler 1858434](https://bugzil.la/1858434)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für die Serialisierung von `Proxy`- und `Generator`-Objekten hinzugefügt ([Firefox Fehler 1841786](https://bugzil.la/1841786)).
- Die `authChallenges` Eigenschaft (die Liste der Authentifizierungsherausforderungen, die in den Headern vorhanden sind), wurde zu den Netzwerkereignissen `responseStarted` und `responseCompleted` hinzugefügt, was zur Handhabung des bevorstehenden `network.authRequired`-Ereignisses nützlich wird ([Firefox Fehler 1855149](https://bugzil.la/1855149)).

## Änderungen für Add-on-Entwickler

- Obwohl [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) auf sichere Kontexte beschränkt wurde ([Firefox Fehler 1858434](https://bugzil.la/1858434)), können Inhaltsskripte diese Methode in Dokumenten verwenden, die keinen sicheren Kontext haben ([Firefox Fehler 1870498](https://bugzil.la/1870498)).

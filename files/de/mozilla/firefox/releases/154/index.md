---
title: Firefox 154 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 154 (Stabil)
slug: Mozilla/Firefox/Releases/154
l10n:
  sourceCommit: 2ad62b2e8cb4dbd6305f23fda33d800e218d8aef
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 154, die Entwickler betreffen.
Firefox 154 wurde am [18. August 2026](https://whattrainisitnow.com/release/?version=154) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Der [JSON Viewer](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) zeigt jetzt ein Breadcrumb am unteren Rand des Panels an, das den Speicherort des ausgewählten Eintrags innerhalb der JSON-Struktur angibt.
  ([Firefox Bug 1850288](https://bugzil.la/1850288)).

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die Funktionen {{cssxref("sibling-count")}} und {{cssxref("sibling-index")}} werden jetzt unterstützt. Die Funktion `sibling-count()` gibt die Anzahl der Geschwisterelemente sowie das Element selbst zurück. Die Funktion `sibling-index()` gibt die Indexnummer des Elements im Verhältnis zu seinen Geschwistern zurück. Der Index beginnt bei `1`, nicht bei `0`. ([Firefox Bug 2045706](https://bugzil.la/2045706)).
- Die Eigenschaften {{cssxref("text-box-edge")}} und {{cssxref("text-box-trim")}} sowie die Kurzform {{cssxref("text-box")}} werden jetzt unterstützt. Diese Eigenschaften erleichtern die Steuerung des Textabstands in Blockrichtung, insbesondere wenn ein Block mehrere Schriftarten enthält. Die Eigenschaft `text-box-edge` ermöglicht es Ihnen, die Menge des Raums anzugeben, der vom Block-Container des Textelements abgeschnitten wird. Die Eigenschaft `text-box-trim` ermöglicht es Ihnen, festzulegen, welche Kanten beschnitten werden sollen: die obere Kante, die untere Kante, beide oder keine. Die Kurzform `text-box` kombiniert diese beiden Eigenschaften. ([Firefox Bug 2050141](https://bugzil.la/2050141)).

### JavaScript

- Die Methode {{jsxref("Iterator.prototype.includes()")}} wird jetzt unterstützt, was es Entwicklern ermöglicht, zu prüfen, ob ein Iterator einen bestimmten Wert enthält.
  ([Firefox Bug 2034104](https://bugzil.la/2034104)).
- Die Methode {{jsxref("Iterator.prototype.join()")}} wird jetzt unterstützt und gibt einen String zurück, der die Verkettung aller vom Iterator produzierten Elemente ist, getrennt durch Kommata oder eine angegebene Trennzeichenkette.
  Dies ist ähnlich wie {{jsxref("Array.prototype.join()")}}.
  ([Firefox Bug 2047995](https://bugzil.la/2047995)).
- Die Methoden {{jsxref("Iterator.prototype.chunks()")}} und {{jsxref("Iterator.prototype.windows()")}} werden jetzt unterstützt.
  Diese geben beide ein [Iterator-Hilfeobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das iteriert werden kann, um eine Anzahl von Elementen des ursprünglichen Iterators als Array zu liefern.
  Der Unterschied zwischen den Methoden besteht darin, dass der `chunks()`-Helfer die Elemente des ursprünglichen Iterators in aufeinanderfolgende Array-Teilstücke aufteilt, während der `windows()`-Helfer ein Array zurückgibt, das ein gleitendes Fenster über den ursprünglichen Iterator ist (jede Iteration liefert ein Array, das sich um ein Element weiter bewegt: Das erste Element der vorherigen Iteration wird entfernt und ein neues Element aus dem ursprünglichen Iterator geholt).
  ([Firefox Bug 2047997](https://bugzil.la/2047997)).

### APIs

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCIceTransport.getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) und das Ereignis [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event) werden jetzt unterstützt, um das aktuelle [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair) für den Transport zu erhalten.
  ([Firefox Bug 2019332](https://bugzil.la/2019332)).
- Das [`error`](/de/docs/Web/API/RTCDtlsTransport/error_event)-Ereignis wird jetzt bei [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) ausgelöst, um DTLS- und Fingerabdruckfehler zu melden.
  ([Firefox Bug 1805447](https://bugzil.la/1805447)).
- Die Eigenschaft `rtcp` ist jetzt im Objekt enthalten, das von [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) zurückgegeben wird, und kann im Objekt festgelegt werden, das an [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) übergeben wird.
  Dies bietet die {{Glossary("RTCP", "RTCP")}}-Konfigurationsparameter für die Verbindung.
  ([Firefox Bug 1584318](https://bugzil.la/1584318)).
- Firefox berichtet jetzt über alle in der [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats)-Wörterbuch definierten WebRTC `certificate`-Statistiken und die folgenden zusätzlichen WebRTC `transport`-Statistiken, die im [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Wörterbuch definiert sind: [`remoteCertificateId`](/de/docs/Web/API/RTCTransportStats/remoteCertificateId), [`localCertificateId`](/de/docs/Web/API/RTCTransportStats/localCertificateId), [`packetsSent`](/de/docs/Web/API/RTCTransportStats/packetsSent), [`packetsReceived`](/de/docs/Web/API/RTCTransportStats/packetsReceived), [`bytesSent`](/de/docs/Web/API/RTCTransportStats/bytesSent) und [`bytesReceived`](/de/docs/Web/API/RTCTransportStats/bytesReceived).
  ([Firefox Bug 2019349](https://bugzil.la/2019349) und [Firefox Bug 2019333](https://bugzil.la/2019333)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Verbesserte Handhabung der `deltaX`- und `deltaY`-Eigenschaften für asynchrone Widget-Rollschrittereignisse durch Berücksichtigung des Layout-Viewports. ([Firefox Bug 1971979](https://bugzil.la/1971979)).
- Ein Fehler wurde behoben, bei dem eine Navigation vorzeitig für Subrahmen aufgelöst wurde, wenn `history.replaceState` aufgerufen wurde oder wenn zu einer Fehlerseite navigiert wurde (z. B. blockiert durch X-Frame-Options). ([Firefox Bug 2051908](https://bugzil.la/2051908)).

#### WebDriver BiDi

- Eine Download-ID wurde zu den Ereignissen `browsingContext.downloadWillBegin` und `browsingContext.downloadEnd` hinzugefügt, um es einfacher zu machen, zu identifizieren, welche Ereignisse zum selben Download gehören. ([Firefox Bug 2040936](https://bugzil.la/2040936)).
- Unterstützung für einen `ignore`-Zustand für die Eigenschaft `unhandledPromptBehavior` für Dateiauswähler wurde hinzugefügt, wenn eine neue Sitzung mit dem Befehl `session.new` erstellt wird. In diesem Zustand werden Dateiauswähler nicht automatisch vom Protokoll behandelt. ([Firefox Bug 1999693](https://bugzil.la/1999693)).
- Ein `userContext`-Feld (auch bekannt als Firefox-Container) wurde zur Nutzlast von mehreren WebDriver BiDi-Ereignissen und -Befehlen hinzugefügt, was es einfacher macht, eingehende Daten für Clients, die nach Benutzerkontext-ID auf Ereignis abonnieren, herauszufiltern. ([Firefox Bug 2018611](https://bugzil.la/2018611)).
- Die Befehle `browsingContext.startScreencast` und `browsingContext.stopScreencast` wurden implementiert, die einen Browsing-Kontext aufzeichnen und das Ergebnis als Videodatei speichern. ([Firefox Bug 2042671](https://bugzil.la/2042671)).
- Der Befehl `emulation.setLocaleOverride` wurde aktualisiert, um die Überschreibung des `Accept-Language`-Headers für `fetch`- und `WebSocket`-Anfragen in Workern zu ermöglichen. ([Firefox Bug 2052932](https://bugzil.la/2052932)).
- Ein Fehler wurde behoben, bei dem das Ereignis `script.realmDestroyed` für einen Worker nach einer Navigation über Prozesse hinweg fehlte. ([Firefox Bug 2018154](https://bugzil.la/2018154)).

## Änderungen für Add-on-Entwickler

- Unterstützung für den [`sandbox`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sandbox) Manifest-Schlüssel wurde hinzugefügt, der es Erweiterungen ermöglicht, Seiten zu bezeichnen, die mit einem undurchsichtigen Ursprung geladen werden und keinen direkten Zugriff auf Erweiterungs-APIs haben. Eine Sandbox-Seite kann `eval()` und ähnliche Konstrukte verwenden, die ansonsten durch die [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) der Erweiterung blockiert werden. ([Firefox Bug 1685123](https://bugzil.la/1685123))

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 154 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Präferenz auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der [Seite über experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Inhalte mit `line-clamp` abschneiden**: `layout.css.line-clamp.enabled`

  Die CSS-Eigenschaft {{cssxref("line-clamp")}} funktioniert nun ohne das `-webkit-`-Anbieter-Präfix, obwohl sie in diesem Stadium die Werte `no-ellipsis` und `<string>` nicht unterstützt. ([Firefox Bug 2042986](https://bugzil.la/2042986)).

- **Prozentwerte für `text-decoration-inset`**: `layout.css.text-decoration-inset-percentage.enabled`

  Die CSS-Eigenschaft {{cssxref("text-decoration-inset")}} unterstützt jetzt Prozentsätze als Werte. Der Prozentwert gibt die Größe des Versatzes als Prozentsatz der {{cssxref("font-size")}} an. ([Firefox Bug 2044602](https://bugzil.la/2044602)).

- **Berechnung eines Wertes basierend auf `progress()`**: `layout.css.progress-function.enabled`

  Die CSS-Funktion {{cssxref("progress")}} wird jetzt unterstützt. Dies erlaubt es dem Benutzer, eine {{cssxref("number")}} basierend auf einem Wert (oder Fortschritt) zwischen einem Minimal- und Maximalwert zu berechnen. ([Firefox Bug 2047015](https://bugzil.la/2047015)).

- **CSS Typed Object Model Level 1** (Nightly): `layout.css.typed-om.enabled`

  Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) (wie im CSS Typed Object Model Level 1 Spezifikation definiert) ist jetzt implementiert.
  Dies vereinfacht die Manipulation von CSS-Eigenschaften, indem CSS-Werte als typisierte JavaScript-Objekte statt als Strings exponiert werden. ([Firefox Bug 2051047](https://bugzil.la/2051047)).

---
title: Firefox 154 Versionshinweise für Entwickler
short-title: Firefox 154
slug: Mozilla/Firefox/Releases/154
l10n:
  sourceCommit: d38616f73d7bfbd6c6f698390657da14a92bbb2f
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 154, die Entwickler betreffen.
Firefox 154 wurde am [18. August 2026](https://whattrainisitnow.com/release/?version=154) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [JSON Viewer](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) zeigt nun ein Breadcrumb am unteren Rand des Panels, das den Ort des ausgewählten Eintrags innerhalb der JSON-Struktur angibt.
  ([Firefox-Bug 1850288](https://bugzil.la/1850288)).

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die Funktionen {{cssxref("sibling-count")}} und {{cssxref("sibling-index")}} werden nun unterstützt. Die `sibling-count()`-Funktion gibt die Anzahl der Geschwisterelemente sowie das Element selbst zurück. Die `sibling-index()`-Funktion gibt die Indexnummer des Elements in Bezug auf seine Geschwister zurück. Der Index beginnt bei `1`, nicht bei `0`. ([Firefox-Bug 2045706](https://bugzil.la/2045706)).
- Die Eigenschaften {{cssxref("text-box-edge")}} und {{cssxref("text-box-trim")}} sowie die Kurzform {{cssxref("text-box")}} werden nun unterstützt. Diese Eigenschaften erleichtern die Steuerung des Textabstands in Blockrichtung, insbesondere wenn ein Block mehrere Schriftarten enthält. Die Eigenschaft `text-box-edge` ermöglicht es, die Menge an Platz anzugeben, die aus dem Blockcontainer des Textelements abgeschnitten werden soll. Die Eigenschaft `text-box-trim` ermöglicht es, anzugeben, welche Kanten abgeschnitten werden sollen: die obere Kante, die untere Kante, beide oder keine. Die Kurzform `text-box` kombiniert diese beiden Eigenschaften. ([Firefox-Bug 2050141](https://bugzil.la/2050141)).

### JavaScript

- Die Methode {{jsxref("Iterator.prototype.includes()")}} wird nun unterstützt, was es Entwicklern ermöglicht zu prüfen, ob ein Iterator einen bestimmten Wert enthält.
  ([Firefox-Bug 2034104](https://bugzil.la/2034104)).
- Die Methode {{jsxref("Iterator.prototype.join()")}} wird nun unterstützt und gibt einen String zurück, der die Verkettung aller vom Iterator erzeugten Elemente ist, getrennt durch Kommas oder einen angegebenen Trennzeichen-String.
  Dies ähnelt {{jsxref("Array.prototype.join()")}}.
  ([Firefox-Bug 2047995](https://bugzil.la/2047995)).
- Die Methoden {{jsxref("Iterator.prototype.chunks()")}} und {{jsxref("Iterator.prototype.windows()")}} werden nun unterstützt.
  Diese geben beide ein [Iterator-Helferobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das iteriert werden kann, um eine Anzahl von Elementen aus dem ursprünglichen Iterator als Array zu liefern.
  Der Unterschied zwischen den Methoden besteht darin, dass der `chunks()`-Helfer die Elemente aus dem ursprünglichen Iterator in aufeinanderfolgende Array-Blöcke unterteilt, während der `windows()`-Helfer ein Array zurückgibt, das ein verschiebbares Fenster über den ursprünglichen Iterator ist (jede Iteration liefert ein Array, das um ein Element nach vorne rutscht: das erste Element der vorherigen Iteration wird verworfen und ein neues Element aus dem ursprünglichen Iterator geholt).
  ([Firefox-Bug 2047997](https://bugzil.la/2047997)).

### APIs

#### Media, WebRTC und Web Audio

- Die Methode [`RTCIceTransport.getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) und das Ereignis [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event) werden nun unterstützt, um das aktuelle [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair) für den Transport zu erhalten.
  ([Firefox-Bug 2019332](https://bugzil.la/2019332)).
- Das Ereignis [`error`](/de/docs/Web/API/RTCDtlsTransport/error_event) wird nun auf [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) ausgelöst, um DTLS- und Fingerprinting-Fehler zu melden.
  ([Firefox-Bug 1805447](https://bugzil.la/1805447)).
- Die `rtcp`-Eigenschaft ist nun im Objekt enthalten, das von [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) zurückgegeben wird, und kann im Objekt gesetzt werden, das an [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) übergeben wird.
  Dies bietet die {{Glossary("RTCP", "RTCP")}}-Konfigurationsparameter für die Verbindung.
  ([Firefox-Bug 1584318](https://bugzil.la/1584318)).
- Firefox berichtet nun alle WebRTC-`certificate`-Statistiken, die im [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats)-Wörterbuch definiert sind, und die folgenden zusätzlichen WebRTC-`transport`-Statistiken, die im [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Wörterbuch definiert sind: [`remoteCertificateId`](/de/docs/Web/API/RTCTransportStats/remoteCertificateId), [`localCertificateId`](/de/docs/Web/API/RTCTransportStats/localCertificateId), [`packetsSent`](/de/docs/Web/API/RTCTransportStats/packetsSent), [`packetsReceived`](/de/docs/Web/API/RTCTransportStats/packetsReceived), [`bytesSent`](/de/docs/Web/API/RTCTransportStats/bytesSent), und [`bytesReceived`](/de/docs/Web/API/RTCTransportStats/bytesReceived).
  ([Firefox-Bug 2019349](https://bugzil.la/2019349) und [Firefox-Bug 2019333](https://bugzil.la/2019333)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die Handhabung von `deltaX`- und `deltaY`-Eigenschaften für asynchrone Widget-Rad-Scrollereignisse wurde verbessert, indem das Layout-Viewport berücksichtigt wurde. ([Firefox-Bug 1971979](https://bugzil.la/1971979)).
- Es wurde ein Bug behoben, bei dem eine Navigation vorzeitig für Unterrahmen aufgelöst wurde, wenn `history.replaceState` aufgerufen oder zu einer Fehlerseite navigiert wurde (z. B. von X-Frame-Options blockiert). ([Firefox-Bug 2051908](https://bugzil.la/2051908)).

#### WebDriver BiDi

- Eine Download-ID wurde zu den Ereignissen `browsingContext.downloadWillBegin` und `browsingContext.downloadEnd` hinzugefügt, um einfacher zu identifizieren, welche Ereignisse zum selben Download gehören. ([Firefox-Bug 2040936](https://bugzil.la/2040936)).
- Unterstützung für einen `ignore`-Status für die `unhandledPromptBehavior`-Eigenschaft bei Dateiauswahlen wurde hinzugefügt, wenn eine neue Sitzung mit dem Befehl `session.new` erstellt wird. Mit diesem Status werden Dateiauswahlen nicht automatisch vom Protokoll verarbeitet. ([Firefox-Bug 1999693](https://bugzil.la/1999693)).
- Ein `userContext`-Feld (auch als Firefox-Container bekannt) wurde zur Nutzlast mehrerer WebDriver-BiDi-Ereignisse und -Befehle hinzugefügt. Dadurch wird es einfacher, eingehende Daten für Clients auszublenden, die sich nach Benutzerkontext-ID für Ereignisse anmelden. ([Firefox-Bug 2018611](https://bugzil.la/2018611)).
- Die Befehle `browsingContext.startScreencast` und `browsingContext.stopScreencast` wurden implementiert, die einen Browsing-Kontext aufzeichnen und das Ergebnis als Videodatei speichern werden. ([Firefox-Bug 2042671](https://bugzil.la/2042671)).
- Der Befehl `emulation.setLocaleOverride` wurde aktualisiert, um das Überschreiben des `Accept-Language`-Headers für Fetch- und `WebSocket`-Anfragen in Workern zu ermöglichen. ([Firefox-Bug 2052932](https://bugzil.la/2052932)).
- Es wurde ein Bug behoben, bei dem das Ereignis `script.realmDestroyed` nach einer cross-Prozess-Navigation für einen Worker fehlte. ([Firefox-Bug 2018154](https://bugzil.la/2018154)).

## Änderungen für Add-on-Entwickler

- Unterstützung für den [`sandbox`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sandbox)-Manifest-Schlüssel wurde hinzugefügt, der es Erweiterungen ermöglicht, Seiten zu kennzeichnen, die mit einem undurchsichtigen Ursprung geladen werden, ohne direkten Zugriff auf Erweiterungs-APIs. Eine sandboxed-Seite kann `eval()` und ähnliche Konstrukte verwenden, die ansonsten von der [Content-Security-Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) der Erweiterung blockiert werden. ([Firefox-Bug 1685123](https://bugzil.la/1685123))

## Experimentelle Web-Features

Diese Features sind in Firefox 154 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Inhalt mit `line-clamp` kürzen**: `layout.css.line-clamp.enabled`

  Die CSS-Eigenschaft {{cssxref("line-clamp")}} funktioniert jetzt ohne das `-webkit-` Vendor-Präfix, obwohl sie in diesem Stadium noch nicht die Werte `no-ellipsis` und `<string>` unterstützt. ([Firefox-Bug 2042986](https://bugzil.la/2042986)).

- **Prozentwerte für `text-decoration-inset`**: `layout.css.text-decoration-inset-percentage.enabled`

  Die CSS-Eigenschaft {{cssxref("text-decoration-inset")}} unterstützt nun Prozentwerte. Der Prozentwert gibt die Größe des Insets als Prozentsatz von {{cssxref("font-size")}} an. ([Firefox-Bug 2044602](https://bugzil.la/2044602)).

- **Berechnung eines Wertes basierend auf `progress()`**: `layout.css.progress-function.enabled`

  Die CSS-Funktion {{cssxref("progress")}} wird nun unterstützt. Dies erlaubt es dem Benutzer, eine {{cssxref("number")}} basierend auf einem Wert (oder Fortschritt) zwischen einem minimalen und einem maximalen Wert zu berechnen. ([Firefox-Bug 2047015](https://bugzil.la/2047015)).

- **CSS Typed Object Model Level 1** (Nightly): `layout.css.typed-om.enabled`

  Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) (wie im CSS Typed Object Model Level 1 spezifiziert) ist nun implementiert.
  Dies vereinfacht die Manipulation von CSS-Eigenschaften, indem CSS-Werte als getypte JavaScript-Objekte anstelle von Strings bereitgestellt werden. ([Firefox-Bug 2051047](https://bugzil.la/2051047)).

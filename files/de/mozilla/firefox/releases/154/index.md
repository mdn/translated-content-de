---
title: Firefox 154 Versionshinweise für Entwickler
short-title: Firefox 154
slug: Mozilla/Firefox/Releases/154
l10n:
  sourceCommit: 9ca7c1a4886127a7926d31e1fdd62a86ad71831e
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 154, die Entwickler betreffen.
Firefox 154 wurde am [18. August 2026](https://whattrainisitnow.com/release/?version=154) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Der [JSON-Viewer](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) zeigt jetzt einen Breadcrumb am unteren Rand des Panels, der die Position des ausgewählten Eintrags innerhalb der JSON-Struktur anzeigt.
  ([Firefox-Bug 1850288](https://bugzil.la/1850288)).

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die Funktionen {{cssxref("sibling-count")}} und {{cssxref("sibling-index")}} werden jetzt unterstützt. Die Funktion `sibling-count()` gibt die Anzahl der Geschwisterelemente sowie das Element selbst zurück. Die Funktion `sibling-index()` gibt die Indexnummer des Elements in Bezug auf seine Geschwister zurück. Der Index beginnt bei `1`, nicht bei `0`. ([Firefox-Bug 2045706](https://bugzil.la/2045706)).
- Die Eigenschaften {{cssxref("text-box-edge")}} und {{cssxref("text-box-trim")}} sowie die Abkürzung {{cssxref("text-box")}} werden jetzt unterstützt. Diese Eigenschaften erleichtern die Steuerung des Textabstands in Blockrichtung, insbesondere wenn ein Block mehrere Schriftarten enthält. Die Eigenschaft `text-box-edge` ermöglicht es Ihnen, die Menge an Platz anzugeben, die vom Blockcontainer des Textelements abgeschnitten werden soll. Die Eigenschaft `text-box-trim` erlaubt es Ihnen anzugeben, welche Kanten abgeschnitten werden sollen: die obere Kante, die untere Kante, beide oder keine. Die Abkürzung `text-box` kombiniert diese beiden Eigenschaften. ([Firefox-Bug 2050141](https://bugzil.la/2050141)).

### JavaScript

- Die Methode {{jsxref("Iterator.prototype.includes()")}} wird jetzt unterstützt, sodass Entwickler überprüfen können, ob ein Iterator einen bestimmten Wert enthält.
  ([Firefox-Bug 2034104](https://bugzil.la/2034104)).
- Die Methode {{jsxref("Iterator.prototype.join()")}} wird jetzt unterstützt, und gibt einen String zurück, der die Verkettung aller vom Iterator produzierten Elemente darstellt, getrennt durch Kommata oder einen angegebenen Trennzeichen-String.
  Dies ist ähnlich wie {{jsxref("Array.prototype.join()")}}.
  ([Firefox-Bug 2047995](https://bugzil.la/2047995)).
- Die Methoden {{jsxref("Iterator.prototype.chunks()")}} und {{jsxref("Iterator.prototype.windows()")}} werden jetzt unterstützt.
  Beide geben ein [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das iteriert werden kann, um eine Anzahl von Elementen vom ursprünglichen Iterator als Array zu erzeugen.
  Der Unterschied zwischen den Methoden besteht darin, dass der `chunks()`-Helfer die Elemente des Original-Iterators in aufeinanderfolgende Array-Blöcke unterteilt, während der `windows()`-Helfer ein Array zurückgibt, das ein gleitendes Fenster über den originalen Iterator darstellt (jede Iteration liefert ein Array, das ein Element vorwärts gleitet: es entfernt das erste Element der vorherigen Iteration und zieht ein neues Element aus dem ursprünglichen Iterator).
  ([Firefox-Bug 2047997](https://bugzil.la/2047997)).

### HTTP

- Der {{httpheader("No-Vary-Search")}} Antwort-Header wird jetzt unterstützt.
  Standardmäßig erstellt ein Browser einen separaten HTTP-Cacheeintrag, um die Antwort für jeden Abfrage-String zu speichern, auch wenn sich die Antwort für einige oder alle Parameter nicht ändert oder von deren Reihenfolge abhängt.
  Mit diesem Header kann der Server angeben, ob die Reihenfolge wichtig ist und welche Abfrageparameter, falls vorhanden, den Inhalt von Antworten ändern.
  Der Browser kann dann verhindern, dass doppelte Ressourcen zwischengespeichert oder abgerufen werden müssen.
  ([Firefox-Bug 2038013](https://bugzil.la/2038013)).

### APIs

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCIceTransport.getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) und das Event [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event) werden jetzt unterstützt, um das aktuelle [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair) für den Transport zu erhalten.
  ([Firefox-Bug 2019332](https://bugzil.la/2019332)).
- Das Event [`error`](/de/docs/Web/API/RTCDtlsTransport/error_event) wird jetzt auf [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) ausgelöst, um DTLS- und Fingerprinting-Fehler zu melden.
  ([Firefox-Bug 1805447](https://bugzil.la/1805447)).
- Die `rtcp`-Eigenschaft ist jetzt im Objekt enthalten, das von [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) zurückgegeben wird und kann im Objekt gesetzt werden, das an [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) übergeben wird.
  Dies liefert die {{Glossary("RTCP", "RTCP")}}-Konfigurationsparameter für die Verbindung.
  ([Firefox-Bug 1584318](https://bugzil.la/1584318)).
- Firefox berichtet jetzt über alle in der [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats) Diktionär definierten WebRTC-`certificate`-Statistiken und die folgenden zusätzlichen WebRTC-`transport`-Statistiken, die im [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) Diktionär definiert sind: [`remoteCertificateId`](/de/docs/Web/API/RTCTransportStats/remoteCertificateId), [`localCertificateId`](/de/docs/Web/API/RTCTransportStats/localCertificateId), [`packetsSent`](/de/docs/Web/API/RTCTransportStats/packetsSent), [`packetsReceived`](/de/docs/Web/API/RTCTransportStats/packetsReceived), [`bytesSent`](/de/docs/Web/API/RTCTransportStats/bytesSent), und [`bytesReceived`](/de/docs/Web/API/RTCTransportStats/bytesReceived).
  ([Firefox-Bug 2019349](https://bugzil.la/2019349) und [Firefox-Bug 2019333](https://bugzil.la/2019333)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Verbesserung der Handhabung von `deltaX` und `deltaY` Eigenschaften für asynchrone Widget-Rad-Scroll-Ereignisse unter Berücksichtigung des Layout-Viewports. ([Firefox-Bug 1971979](https://bugzil.la/1971979)).
- Behebung eines Fehlers, bei dem eine Navigation vorzeitig für Unterframes aufgelöst wurde, wenn `history.replaceState` aufgerufen oder zu einer Fehlerseite navigiert wurde (z.B. gesperrt durch X-Frame-Options). ([Firefox-Bug 2051908](https://bugzil.la/2051908)).

#### WebDriver BiDi

- Ein Download-ID zu den `browsingContext.downloadWillBegin` und `browsingContext.downloadEnd` Ereignissen hinzugefügt, um es einfacher zu machen, zu identifizieren, welche Ereignisse zum gleichen Download gehören. ([Firefox-Bug 2040936](https://bugzil.la/2040936)).
- Unterstützung für einen `ignore`-Status für die `unhandledPromptBehavior` Eigenschaft bei Dateiauswahl-Dialogen hinzugefügt, wenn eine neue Sitzung mit dem Befehl `session.new` erstellt wird. Mit diesem Status werden Dateiauswahl-Dialoge nicht automatisch durch das Protokoll gehandhabt. ([Firefox-Bug 1999693](https://bugzil.la/1999693)).
- Ein `userContext` Feld (auch bekannt als Firefox-Container) zur Nutzlast von mehreren WebDriver BiDi-Ereignissen und -Befehlen hinzugefügt, was es einfacher macht, eingehende Daten zu filtern für Clients, die Ereignisse nach User-Context-ID abonnieren. ([Firefox-Bug 2018611](https://bugzil.la/2018611)).
- Die Befehle `browsingContext.startScreencast` und `browsingContext.stopScreencast` implementiert, die einen Browsing-Kontext aufzeichnen und das Ergebnis als Videodatei speichern. ([Firefox-Bug 2042671](https://bugzil.la/2042671)).
- Den `emulation.setLocaleOverride` Befehl aktualisiert, um das Überschreiben des `Accept-Language` Headers für Fetch- und `WebSocket`-Anfragen in Workern zu ermöglichen. ([Firefox-Bug 2052932](https://bugzil.la/2052932)).
- Behebung eines Fehlers, bei dem das `script.realmDestroyed` Ereignis für einen Worker nach einer Navigation über Prozesse hinweg fehlte. ([Firefox-Bug 2018154](https://bugzil.la/2018154)).

## Änderungen für Add-On-Entwickler

- Unterstützung für den [`sandbox`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sandbox) Manifest-Schlüssel hinzugefügt, wodurch Erweiterungen Seiten festlegen können, die mit einem nicht durchschaubaren Ursprung geladen werden, ohne direkten Zugang zu Erweiterungs-APIs. Eine gesandboxte Seite kann `eval()` und ähnliche Konstrukte verwenden, die ansonsten durch die [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) der Erweiterung blockiert sind. ([Firefox-Bug 1685123](https://bugzil.la/1685123))

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 154 ausgeliefert, sind aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Voreinstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **Inhalte mit `line-clamp` abschneiden**: `layout.css.line-clamp.enabled`

  Die {{cssxref("line-clamp")}} CSS-Eigenschaft funktioniert jetzt ohne das `-webkit-` Vendor-Präfix, auch wenn sie in diesem Stadium die Werte `no-ellipsis` und `<string>` nicht unterstützt. ([Firefox-Bug 2042986](https://bugzil.la/2042986)).

- **Prozentwerte für `text-decoration-inset`**: `layout.css.text-decoration-inset-percentage.enabled`

  Die CSS-Eigenschaft {{cssxref("text-decoration-inset")}} unterstützt jetzt Prozentsätze als Werte. Der Prozentwert gibt die Größe des Abstands als Prozentsatz der {{cssxref("font-size")}} an. ([Firefox-Bug 2044602](https://bugzil.la/2044602)).

- **Berechnen eines Wertes basierend auf `progress()`**: `layout.css.progress-function.enabled`

  Die {{cssxref("progress")}} CSS-Funktion wird jetzt unterstützt. Dies ermöglicht es den Benutzer, eine {{cssxref("number")}} basierend auf einem Wert (oder Fortschritt) zwischen einem Mindest- und Höchstwert zu berechnen. ([Firefox-Bug 2047015](https://bugzil.la/2047015)).

- **CSS Typed Object Model Level 1** (Nightly): `layout.css.typed-om.enabled`

  Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) (wie im CSS Typed Object Model Level 1-Spezifikation definiert) ist jetzt implementiert.
  Dies vereinfacht die Manipulation von CSS-Eigenschaften, indem CSS-Werte als typisierte JavaScript-Objekte statt Strings dargestellt werden. ([Firefox-Bug 2051047](https://bugzil.la/2051047)).

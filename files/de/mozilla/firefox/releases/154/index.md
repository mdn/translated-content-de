---
title: Firefox-154-Versionshinweise für Entwickler
short-title: Firefox 154
slug: Mozilla/Firefox/Releases/154
l10n:
  sourceCommit: 27ab6daefdb5b4dea6e70a00bde29b8844e7c1ff
---

Dieser Artikel enthält Informationen zu den Änderungen in Firefox 154, die Entwickler betreffen.
Firefox 154 wurde am [18. August 2026](https://whattrainisitnow.com/release/?version=154) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [JSON Viewer](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) zeigt jetzt am unteren Rand des Panels eine Breadcrumb-Navigation an, die die Position des ausgewählten Eintrags innerhalb der JSON-Struktur angibt.
  ([Firefox-Bug 1850288](https://bugzil.la/1850288)).

### HTML

Keine nennenswerten Änderungen.

### CSS

- Die Funktionen {{cssxref("sibling-count")}} und {{cssxref("sibling-index")}} werden jetzt unterstützt. Die Funktion `sibling-count()` gibt die Anzahl der Geschwisterelemente sowie das Element selbst zurück. Die Funktion `sibling-index()` gibt die Indexnummer des Elements in Relation zu seinen Geschwisterelementen zurück. Der Index beginnt bei `1`, nicht bei `0`. ([Firefox-Bug 2045706](https://bugzil.la/2045706)).
- Die Eigenschaften {{cssxref("text-box-edge")}} und {{cssxref("text-box-trim")}} sowie die Kurzform {{cssxref("text-box")}} werden jetzt unterstützt. Diese Eigenschaften erleichtern die Steuerung von Textabständen in Blockrichtung, insbesondere wenn ein Block mehrere Schriftarten enthält. Die Eigenschaft `text-box-edge` ermöglicht es Ihnen, den Platz anzugeben, der vom Block-Container des Textelements abgeschnitten werden soll. Die Eigenschaft `text-box-trim` ermöglicht es Ihnen, anzugeben, welche Kanten abgeschnitten werden sollen: die obere Kante, die untere Kante, beide oder keine. Die Kurzform `text-box` kombiniert diese beiden Eigenschaften. ([Firefox-Bug 2050141](https://bugzil.la/2050141)).

### JavaScript

- Die Methode {{jsxref("Iterator.prototype.includes()")}} wird jetzt unterstützt und ermöglicht Entwicklern zu prüfen, ob ein Iterator einen bestimmten Wert enthält.
  ([Firefox-Bug 2034104](https://bugzil.la/2034104)).
- Die Methode {{jsxref("Iterator.prototype.join()")}} wird jetzt unterstützt und gibt einen String zurück, der aus der Verkettung aller vom Iterator erzeugten Elemente besteht, getrennt durch Kommas oder einen angegebenen Trennzeichen-String.
  Dies ähnelt {{jsxref("Array.prototype.join()")}}.
  ([Firefox-Bug 2047995](https://bugzil.la/2047995)).
- Die Methoden {{jsxref("Iterator.prototype.chunks()")}} und {{jsxref("Iterator.prototype.windows()")}} werden jetzt unterstützt.
  Beide geben ein [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das iteriert werden kann, um eine Anzahl von Elementen des ursprünglichen Iterators als Array zu liefern.
  Der Unterschied zwischen den Methoden besteht darin, dass der Helfer `chunks()` die Elemente des ursprünglichen Iterators in aufeinanderfolgende Array-Blöcke aufteilt, während der Helfer `windows()` ein Array zurückgibt, das ein gleitendes Fenster über dem ursprünglichen Iterator darstellt (jede Iteration liefert ein Array, das um ein Element weitergleitet: Das erste Element der vorherigen Iteration wird verworfen und ein neues Element aus dem ursprünglichen Iterator abgerufen).
  ([Firefox-Bug 2047997](https://bugzil.la/2047997)).

### HTTP

- Der Response-Header {{httpheader("No-Vary-Search")}} wird jetzt unterstützt.
  Standardmäßig erstellt ein Browser für jeden Query-String einen separaten HTTP-Cache-Eintrag, um die Response zu speichern, selbst wenn sich die Response für einige oder alle Parameter nicht ändert oder nicht von deren Reihenfolge abhängt.
  Dieser Header ermöglicht es dem Server anzugeben, ob die Reihenfolge relevant ist und welche Query-Parameter, falls vorhanden, den Inhalt von Responses ändern.
  Der Browser kann dadurch vermeiden, doppelte Ressourcen cachen oder abrufen zu müssen.
  ([Firefox-Bug 2038013](https://bugzil.la/2038013)).

### APIs

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCIceTransport.getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) und das Event [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event) werden jetzt unterstützt, um das aktuelle [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair) für den Transport abzurufen.
  ([Firefox-Bug 2019332](https://bugzil.la/2019332)).
- Das Event [`error`](/de/docs/Web/API/RTCDtlsTransport/error_event) wird jetzt für [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) ausgelöst, um DTLS- und Fingerprinting-Fehler zu melden.
  ([Firefox-Bug 1805447](https://bugzil.la/1805447)).
- Die Eigenschaft `rtcp` ist jetzt im Objekt enthalten, das von [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) zurückgegeben wird, und kann im Objekt festgelegt werden, das an [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) übergeben wird.
  Dies stellt die {{Glossary("RTCP", "RTCP")}}-Konfigurationsparameter für die Verbindung bereit.
  ([Firefox-Bug 1584318](https://bugzil.la/1584318)).
- Firefox meldet jetzt alle in dem Dictionary [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats) definierten WebRTC-`certificate`-Statistiken sowie die folgenden zusätzlichen, im Dictionary [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) definierten WebRTC-`transport`-Statistiken: [`remoteCertificateId`](/de/docs/Web/API/RTCTransportStats/remoteCertificateId), [`localCertificateId`](/de/docs/Web/API/RTCTransportStats/localCertificateId), [`packetsSent`](/de/docs/Web/API/RTCTransportStats/packetsSent), [`packetsReceived`](/de/docs/Web/API/RTCTransportStats/packetsReceived), [`bytesSent`](/de/docs/Web/API/RTCTransportStats/bytesSent) und [`bytesReceived`](/de/docs/Web/API/RTCTransportStats/bytesReceived).
  ([Firefox-Bug 2019349](https://bugzil.la/2019349) und [Firefox-Bug 2019333](https://bugzil.la/2019333)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die Verarbeitung der Eigenschaften `deltaX` und `deltaY` für asynchrone Widget-Mausrad-Scroll-Events wurde verbessert, indem der Layout-Viewport berücksichtigt wird. ([Firefox-Bug 1971979](https://bugzil.la/1971979)).
- Ein Fehler wurde behoben, bei dem eine Navigation für Subframes bei einem Aufruf von `history.replaceState` oder bei der Navigation zu einer Fehlerseite (z. B. durch X-Frame-Options blockiert) vorzeitig aufgelöst wurde. ([Firefox-Bug 2051908](https://bugzil.la/2051908)).

#### WebDriver BiDi

- Den Events `browsingContext.downloadWillBegin` und `browsingContext.downloadEnd` wurde eine Download-ID hinzugefügt, um einfacher zu erkennen, welche Events zu demselben Download gehören. ([Firefox-Bug 2040936](https://bugzil.la/2040936)).
- Unterstützung für einen Status `ignore` der Eigenschaft `unhandledPromptBehavior` für Dateiauswahlfenster wurde hinzugefügt, wenn mit dem Befehl `session.new` eine neue Sitzung erstellt wird. Mit diesem Status werden Dateiauswahlfenster nicht automatisch durch das Protokoll verarbeitet. ([Firefox-Bug 1999693](https://bugzil.la/1999693)).
- Der Payload mehrerer WebDriver-BiDi-Events und -Befehle enthält jetzt ein Feld `userContext` (auch Firefox-Container genannt), wodurch Clients, die Events anhand der Benutzerkontext-ID abonnieren, eingehende Daten einfacher filtern können. ([Firefox-Bug 2018611](https://bugzil.la/2018611)).
- Die Befehle `browsingContext.startScreencast` und `browsingContext.stopScreencast` wurden implementiert. Sie zeichnen einen Browsing-Kontext auf und speichern das Ergebnis als Videodatei. ([Firefox-Bug 2042671](https://bugzil.la/2042671)).
- Der Befehl `emulation.setLocaleOverride` wurde aktualisiert, um das Überschreiben des Headers `Accept-Language` für Fetch- und `WebSocket`-Requests in Workern zu ermöglichen. ([Firefox-Bug 2052932](https://bugzil.la/2052932)).
- Ein Fehler wurde behoben, bei dem das Event `script.realmDestroyed` nach einer prozessübergreifenden Navigation für einen Worker fehlte. ([Firefox-Bug 2018154](https://bugzil.la/2018154)).

## Änderungen für Add-on-Entwickler

- Unterstützung für den Manifest-Schlüssel [`sandbox`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sandbox) wurde hinzugefügt. Dadurch können Erweiterungen Seiten festlegen, die mit einer opaken Origin geladen werden und keinen direkten Zugriff auf Erweiterungs-APIs haben. Eine Sandbox-Seite kann `eval()` und ähnliche Konstrukte verwenden, die andernfalls durch die [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) der Erweiterung blockiert werden. ([Firefox-Bug 1685123](https://bugzil.la/1685123))

## Experimentelle Web-Features

Diese Features werden in Firefox 154 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Preference und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Inhalte mit `line-clamp` abschneiden**: `layout.css.line-clamp.enabled`

  Die CSS-Eigenschaft {{cssxref("line-clamp")}} funktioniert jetzt ohne das Vendor-Präfix `-webkit-`, unterstützt in diesem Stadium jedoch nicht die Werte `no-ellipsis` und `<string>`. ([Firefox-Bug 2042986](https://bugzil.la/2042986)).

- **Prozentwerte für `text-decoration-inset`**: `layout.css.text-decoration-inset-percentage.enabled`

  Die CSS-Eigenschaft {{cssxref("text-decoration-inset")}} unterstützt jetzt Prozentwerte. Der Prozentwert gibt die Größe des Insets als Prozentsatz der Inline-Größe der dekorierten Box oder jedes einzelnen Box-Fragments an, abhängig vom Wert von {{cssxref("box-decoration-break")}}. ([Firefox-Bug 2044602](https://bugzil.la/2044602)).

- **Einen Wert anhand von `progress()` berechnen**: `layout.css.progress-function.enabled`

  Die CSS-Funktion {{cssxref("progress")}} wird jetzt unterstützt. Sie ermöglicht es dem Benutzer, eine {{cssxref("number")}} anhand eines Werts (oder Fortschritts) zwischen einem Minimal- und einem Maximalwert zu berechnen. ([Firefox-Bug 2047015](https://bugzil.la/2047015)).

- **Die Transparenz einer Farbe mit `alpha()` aktualisieren**: `layout.css.alpha-color-function.enabled`

  Die CSS-Funktion {{cssxref("color_value/alpha", "alpha()")}} wird jetzt unterstützt. Sie ermöglicht es Ihnen, eine Farbe zu übergeben und die Farbe mit einem anderen Alpha-Wert (Transparenz) zurückzuerhalten, während die übrigen Komponenten der Farbe unverändert bleiben. ([Firefox-Bug 2047437](https://bugzil.la/2047437)).

- **CSS Typed Object Model Level 1** (Nightly): `layout.css.typed-om.enabled`

  Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) (wie in der Spezifikation CSS Typed Object Model Level 1 definiert) ist jetzt implementiert.
  Dies vereinfacht die Manipulation von CSS-Eigenschaften, indem CSS-Werte als typisierte JavaScript-Objekte statt als Strings verfügbar gemacht werden. ([Firefox-Bug 2051047](https://bugzil.la/2051047)).

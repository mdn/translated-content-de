---
title: Firefox 154 Versionshinweise für Entwickler
short-title: Firefox 154
slug: Mozilla/Firefox/Releases/154
l10n:
  sourceCommit: a31068ba2df086b7aba127b26d28b083537d5894
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 154, die Entwickler betreffen.
Firefox 154 wurde am [18. August 2026](https://whattrainisitnow.com/release/?version=154) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Der [JSON Viewer](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) zeigt jetzt ein Breadcrumb am unteren Rand des Panels an, das die Position des ausgewählten Eintrags innerhalb der JSON-Struktur anzeigt.
  ([Firefox Bug 1850288](https://bugzil.la/1850288)).

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die Funktionen {{cssxref("sibling-count")}} und {{cssxref("sibling-index")}} werden jetzt unterstützt. Die Funktion `sibling-count()` gibt die Anzahl der Geschwisterelemente sowie das Element selbst zurück. Die Funktion `sibling-index()` gibt die Indexnummer des Elements im Verhältnis zu seinen Geschwistern zurück. Der Index beginnt bei `1`, nicht bei `0`. ([Firefox Bug 2045706](https://bugzil.la/2045706)).
- Die Eigenschaften {{cssxref("text-box-edge")}} und {{cssxref("text-box-trim")}} sowie die Kurzform {{cssxref("text-box")}} werden jetzt unterstützt. Diese Eigenschaften erleichtern die Steuerung des Textabstands in Blockrichtung, insbesondere wenn ein Block mehrere Schriftarten enthält. Die Eigenschaft `text-box-edge` ermöglicht es Ihnen, die Menge an Platz zu spezifizieren, die vom Blockcontainer des Textelements getrimmt werden soll. Die Eigenschaft `text-box-trim` erlaubt es zu spezifizieren, welche Kanten getrimmt werden sollen: die obere Kante, die untere Kante, beide oder keine. Die Kurzform `text-box` kombiniert diese beiden Eigenschaften. ([Firefox Bug 2050141](https://bugzil.la/2050141)).

### JavaScript

- Die Methode {{jsxref("Iterator.prototype.includes()")}} wird jetzt unterstützt, sodass Entwickler prüfen können, ob ein Iterator einen bestimmten Wert enthält.
  ([Firefox Bug 2034104](https://bugzil.la/2034104)).
- Die Methode {{jsxref("Iterator.prototype.join()")}} wird jetzt unterstützt und gibt einen String zurück, der die Verkettung aller vom Iterator produzierten Elemente ist, getrennt durch Kommata oder eine angegebene Trennstring. Dies ist ähnlich wie {{jsxref("Array.prototype.join()")}}.
  ([Firefox Bug 2047995](https://bugzil.la/2047995)).
- Die Methoden {{jsxref("Iterator.prototype.chunks()")}} und {{jsxref("Iterator.prototype.windows()")}} werden jetzt unterstützt. Diese geben beide ein [Iterator-Helferobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das durch iterieren eine Anzahl von Elementen aus dem ursprünglichen Iterator als Array liefert. Der Unterschied zwischen den Methoden besteht darin, dass der `chunks()`-Helfer die Elemente aus dem ursprünglichen Iterator in aufeinanderfolgende Array-Chunks aufteilt, während der `windows()`-Helfer ein Array zurückgibt, das ein gleitendes Fenster über dem ursprünglichen Iterator ist (jede Iteration liefert ein Array, das ein Element weiter nach vorne rutscht: das erste Element der vorherigen Iteration wird fallen gelassen und ein neues Element aus dem ursprünglichen Iterator geholt).
  ([Firefox Bug 2047997](https://bugzil.la/2047997)).

### HTTP

- Der Antwort-Header {{httpheader("No-Vary-Search")}} wird jetzt unterstützt. Standardmäßig erstellt ein Browser für jede Abfragezeichenfolge einen separaten HTTP-Cacheeintrag, um die Antwort zu speichern, auch wenn sich die Antwort für einige oder alle Parameter nicht ändert oder nicht von ihrer Reihenfolge abhängt. Dieser Header erlaubt es dem Server anzugeben, ob die Reihenfolge wichtig ist und welche Abfrageparameter, falls überhaupt, den Inhaltsgedanken von Antworten ändern. Der Browser kann somit vermeiden, doppelte Ressourcen cachen oder abrufen zu müssen.
  ([Firefox Bug 2038013](https://bugzil.la/2038013)).

### APIs

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCIceTransport.getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) und das Ereignis [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event) werden jetzt unterstützt, um das aktuelle [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair) für den Transport zu erhalten.
  ([Firefox Bug 2019332](https://bugzil.la/2019332)).
- Das Ereignis [`error`](/de/docs/Web/API/RTCDtlsTransport/error_event) wird jetzt auf [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) ausgelöst, um DTLS- und Fingerprinting-Fehler zu melden.
  ([Firefox Bug 1805447](https://bugzil.la/1805447)).
- Die `rtcp`-Eigenschaft ist jetzt in dem Objekt enthalten, das von [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) zurückgegeben wird und kann in dem Objekt gesetzt werden, das an [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) übergeben wird. Dies bietet die {{Glossary("RTCP", "RTCP")}}-Konfigurationsparameter für die Verbindung.
  ([Firefox Bug 1584318](https://bugzil.la/1584318)).
- Firefox meldet jetzt alle WebRTC `certificate` Statistiken, die im [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats) Dictionary definiert sind, und die folgenden zusätzlichen WebRTC `transport` Statistiken, die im [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) Dictionary definiert sind: [`remoteCertificateId`](/de/docs/Web/API/RTCTransportStats/remoteCertificateId), [`localCertificateId`](/de/docs/Web/API/RTCTransportStats/localCertificateId), [`packetsSent`](/de/docs/Web/API/RTCTransportStats/packetsSent), [`packetsReceived`](/de/docs/Web/API/RTCTransportStats/packetsReceived), [`bytesSent`](/de/docs/Web/API/RTCTransportStats/bytesSent) und [`bytesReceived`](/de/docs/Web/API/RTCTransportStats/bytesReceived).
  ([Firefox Bug 2019349](https://bugzil.la/2019349) und [Firefox Bug 2019333](https://bugzil.la/2019333)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Verbesserte Handhabung der `deltaX`- und `deltaY`-Eigenschaften für asynchrone Widget-Rad-Scroll-Ereignisse durch Berücksichtigung des Layout-Viewports. ([Firefox Bug 1971979](https://bugzil.la/1971979)).
- Behebung eines Fehlers, bei dem eine Navigation vorzeitig für Subframes gelöst wurde, wenn `history.replaceState` aufgerufen wurde oder beim Navigieren zu einer Fehlerseite (z.B. blockiert durch X-Frame-Options). ([Firefox Bug 2051908](https://bugzil.la/2051908)).

#### WebDriver BiDi

- Ein Download-ID zu den Ereignissen `browsingContext.downloadWillBegin` und `browsingContext.downloadEnd` hinzugefügt, um leichter zu identifizieren, welche Ereignisse zum selben Download gehören. ([Firefox Bug 2040936](https://bugzil.la/2040936)).
- Unterstützung für einen `ignore`-Zustand für die Eigenschaft `unhandledPromptBehavior` für Dateiauswähler hinzugefügt, wenn eine neue Sitzung mit dem `session.new`-Befehl erstellt wird. Mit diesem Zustand werden Dateiauswähler nicht automatisch vom Protokoll behandelt. ([Firefox Bug 1999693](https://bugzil.la/1999693)).
- Ein `userContext`-Feld (auch bekannt als Firefox-Container) zur Nutzlast mehrerer WebDriver BiDi-Ereignisse und -Befehle hinzugefügt, was es erleichtert, eingehende Daten für Kunden herauszufiltern, die sich durch Benutzerkontext-ID zu Ereignissen anmelden. ([Firefox Bug 2018611](https://bugzil.la/2018611)).
- Die Befehle `browsingContext.startScreencast` und `browsingContext.stopScreencast` implementiert, die einen Browsing-Kontext aufzeichnen und das Ergebnis als Videodatei speichern. ([Firefox Bug 2042671](https://bugzil.la/2042671)).
- Der Befehl `emulation.setLocaleOverride` wurde aktualisiert, um die Überschreibung des `Accept-Language` Headers für Fetch- und `WebSocket`-Anfragen in Workern zu ermöglichen. ([Firefox Bug 2052932](https://bugzil.la/2052932)).
- Behebung eines Fehlers, bei dem das Ereignis `script.realmDestroyed` für einen Worker nach der Navigation zwischen Prozessen fehlte. ([Firefox Bug 2018154](https://bugzil.la/2018154)).

## Änderungen für Add-on-Entwickler

- Unterstützung für den [`sandbox`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sandbox) Manifesteintrag hinzugefügt, der Erweiterungen erlaubt, Seiten zu bestimmen, die mit einem intransparenten Ursprung geladen werden, ohne direkten Zugang zu den Erweiterungs-APIs zu haben. Eine sandboxed-Seite kann `eval()` und ähnliche Konstrukte verwenden, die ansonsten durch die [Inhalts-Sicherheitspolitik (Content Security Policy)](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) der Erweiterung blockiert werden. ([Firefox Bug 1685123](https://bugzil.la/1685123))

## Experimentelle Webfeatures

Diese Features werden in Firefox 154 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach dem entsprechenden Preferenzeintrag und setzen Sie ihn auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Inhalt mit `line-clamp` abschneiden**: `layout.css.line-clamp.enabled`

  Die {{cssxref("line-clamp")}} CSS-Eigenschaft funktioniert jetzt ohne das `-webkit-`-Vendor-Prefix, unterstützt jedoch derzeit nicht die Werte `no-ellipsis` und `<string>`. ([Firefox Bug 2042986](https://bugzil.la/2042986)).

- **Prozentwerte für `text-decoration-inset`**: `layout.css.text-decoration-inset-percentage.enabled`

  Die {{cssxref("text-decoration-inset")}} CSS-Eigenschaft unterstützt jetzt Prozentsätze als Werte. Der Prozentwert gibt die Größe des Insets als Prozentsatz der {{cssxref("font-size")}} an. ([Firefox Bug 2044602](https://bugzil.la/2044602)).

- **Berechnung eines Werts basierend auf `progress()`**: `layout.css.progress-function.enabled`

  Die {{cssxref("progress")}} CSS-Funktion wird jetzt unterstützt. Dies erlaubt dem Benutzer die Berechnung einer {{cssxref("number")}} basierend auf einem Wert (oder Fortschritt) zwischen einem Minimum- und einem Maximumwert. ([Firefox Bug 2047015](https://bugzil.la/2047015)).

- **Aktualisierung der Transparenz einer Farbe mit `alpha()`**: `layout.css.alpha-color-function.enabled`

  Die {{cssxref("color_value/alpha", "alpha()")}} CSS-Funktion wird jetzt unterstützt. Sie erlaubt es, eine Farbe zu übergeben und die Farbe mit einem anderen Alpha-(Transparenz-)Wert zurückzubekommen, wobei andere Komponenten der Farbe unverändert bleiben. ([Firefox Bug 2047437](https://bugzil.la/2047437)).

- **CSS Typed Object Model Level 1** (Nightly): `layout.css.typed-om.enabled`

  Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) (wie im CSS Typed Object Model Level 1 spezifiziert) ist jetzt implementiert. Dies vereinfacht die Manipulation von CSS-Eigenschaften, indem CSS-Werte als typisierte JavaScript-Objekte statt als String-Werte zugänglich gemacht werden. ([Firefox Bug 2051047](https://bugzil.la/2051047)).

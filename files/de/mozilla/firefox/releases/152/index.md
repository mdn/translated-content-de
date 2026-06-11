---
title: Firefox 152 Versionshinweise für Entwickler (Beta)
short-title: Firefox 152 (Beta)
slug: Mozilla/Firefox/Releases/152
l10n:
  sourceCommit: bfaf90116752cffcff6098be4d40f843b8e9f6ee
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 152, die Entwickler betreffen. Firefox 152 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [16. Juni 2026](https://whattrainisitnow.com/release/?version=152) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte entfernen Sie die Auskommentierung bei allen Überschriften, für die Sie Hinweise schreiben -->

## Änderungen für Webentwickler

### Entwickler-Tools

- Die Entwickler-Tools haben jetzt eine "Kommentare anzeigen"-Option, um die Anzeige von HTML-Kommentarknoten im Inspektor umzuschalten. Diese Option finden Sie im [Einstellungen-Menü](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#settings-inspector).
  ([Firefox Bug 1455294](https://bugzil.la/1455294)).

### SVG

- Die schreibgeschützte Eigenschaft [`SVGTextPathElement.side`](/de/docs/Web/API/SVGTextPathElement/side) wird jetzt unterstützt und gibt an, ob der Text auf der linken oder rechten Seite eines Textpfads gezeichnet wird. Dies spiegelt das entsprechende [`side`](/de/docs/Web/SVG/Reference/Attribute/side)-Attribut auf dem [`<textPath>`](/de/docs/Web/SVG/Reference/Element/textPath)-Element wider.
  ([Firefox Bug 2034371](https://bugzil.la/2034371)).

### CSS

- Die {{cssxref("field-sizing")}} CSS-Eigenschaft ermöglicht es, das Größenverhalten von Formularelementen zu steuern. Diese Eigenschaft hat zwei Werte: `content` erlaubt es Elementen, ihre Größe anzupassen, um ihrem Inhalt zu entsprechen, und `fixed` setzt eine feste Größe für Elemente.
  ([Firefox Bug 2036620](https://bugzil.la/2036620)).

### APIs

- Die Eigenschaften [`firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart) und [`finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart) der [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Schnittstelle werden unterstützt. Diese können verwendet werden, um zu messen, wie lange der Browser benötigt, um vorläufige HTTP-Antworten und die endgültige HTTP-Antwort nach dem Senden einer Anfrage zu erhalten.
  ([Firefox Bug 2006340](https://bugzil.la/2006340)).
- Die Eigenschaften [`AnimationEvent.animation`](/de/docs/Web/API/AnimationEvent/animation) und [`TransitionEvent.animation`](/de/docs/Web/API/TransitionEvent/animation) werden jetzt unterstützt. Diese bieten eine ergonomischere Möglichkeit, auf die zugehörige Animation zuzugreifen, als [`element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) aufzurufen und nach dem `animationName` oder `propertyName` des Ereignisses zu filtern.
  ([Firefox Bug 1929118](https://bugzil.la/1929118)).

#### DOM

- Die schreibgeschützte Eigenschaft [`actions`](/de/docs/Web/API/Notification/actions) und die statische, schreibgeschützte Eigenschaft [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) der [`Notification`](/de/docs/Web/API/Notification)-Schnittstelle werden unterstützt. Diese enthalten die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) gesetzten Benachrichtigungsaktionen und die plattformspezifische Maximalanzahl von Aktionen, die für eine Benachrichtigung gesetzt werden können.
  ([Firefox Bug 1959931](https://bugzil.la/1959931)).
- Die Methode [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) kann jetzt den Parameter [`options.pseudoElement`](/de/docs/Web/API/Element/getAnimations#pseudoelement) akzeptieren. Dadurch können Sie direkt ein spezifisches Pseudoelement anvisieren, anstatt die Ergebnisse von `{ subtree: true }` zu filtern.
  ([Firefox Bug 1935557](https://bugzil.la/1935557)).
- Die Methode [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) unterstützt jetzt den Parameter [`options.unadjustedMovement`](/de/docs/Web/API/Element/requestPointerLock#unadjustedmovement). Dies ermöglicht es, die Mausbeschleunigung auf Betriebssystemebene zu deaktivieren und stattdessen rohe Mauseingaben zu nutzen, was in Fällen nützlich ist, in denen langsame und präzise Kontrolle der Mausbewegung erforderlich ist.
  ([Firefox Bug 2037802](https://bugzil.la/2037802)).

#### Medien, WebRTC und Web Audio

- Die Eigenschaft `receiveTime` ist nun in den Metadaten enthalten, die von [`RTCEncodedVideoFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata#receivetime) und [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata#receivetime) zurückgegeben werden, und kann als Eigenschaft im `options`-Parameter an die Konstruktoren [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) übergeben werden.
  ([Firefox Bug 2033420](https://bugzil.la/2033420)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die Screenshot-Befehle von Marionette und WebDriver BiDi wurden verbessert, um die maximal zulässigen Dimensionen sicherzustellen. ([Firefox Bug 2020302](https://bugzil.la/2020302)).

#### WebDriver BiDi

- Der Befehl `webExtension.install` wurde erweitert, um die Installation von Web-Erweiterungen in Firefox zu unterstützen, die im Privaten Modus aktiviert sind. ([Firefox Bug 1947679](https://bugzil.la/1947679)).
- Der Befehl `browser.setDownloadBehavior` wurde verbessert, um das Überschreiben des Download-Zielordners zu ermöglichen, bevor die temporäre Datei erstellt wird. ([Firefox Bug 2017252](https://bugzil.la/2017252)).
- Netzwerkevents wurden korrigiert, sodass zwischengespeicherte JavaScript-Antworten nur weitergeleitet werden, wenn ein entsprechender Netzwerkevent-Sammler vorhanden ist, um unnötige Datenweiterleitungen zu vermeiden. ([Firefox Bug 2018237](https://bugzil.la/2018237)).

#### Marionette

- Die Befehle `WebDriver:Navigate` und `WebDriver:Refresh` wurden verbessert, um Fehler korrekt zu melden, wenn das Auslösen der Navigation fehlschlägt, anstatt sie stillschweigend zu ignorieren. ([Firefox Bug 2033769](https://bugzil.la/2033769)).

## Änderungen für Add-on-Entwickler

- Die Fähigkeit der Erweiterungen, Code dynamisch in ihren `moz-extension:`-Dokumenten mit {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} auszuführen, wurde entfernt. Diese Funktion wurde in Firefox 149 veraltet. ([Firefox Bug 2015559](https://bugzil.la/2015559))

  Als Alternative kann eine Erweiterung Code in ihren Dokumenten dynamisch ausführen, indem ein {{WebExtAPIRef("runtime.onMessage")}}-Listener im Skript des Dokuments registriert wird und dann eine Nachricht gesendet wird, um die Ausführung des notwendigen Codes auszulösen.

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 152 ausgeliefert, sind jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Prüfen Sie, ob eine Medien-Codierungs-/Decodierungs-Konfiguration für WebRTC unterstützt wird**: `media.mediacapabilities.webrtc.enabled`

  Der `webrtc`-Typ kann jetzt als Option für [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo#webrtc) und [`MediaCapabilities.encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo#webrtc) angegeben werden, um zu prüfen, ob eine Codierungs-/Decodierungskonfiguration für WebRTC verwendet werden kann. Dies ersetzt den nicht standardmäßigen [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission)-Typ, der zuvor als Alias in Firefox verwendet wurde.
  ([Firefox Bug 1825286](https://bugzil.la/1825286)).

- **TC39 Iterator includes proposal**: `javascript.options.experimental.iterator_includes`

  Die Methode [`Iterator.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) testet, ob der Iterator einen bestimmten Wert liefern wird.
  ([Firefox Bug 2025779](https://bugzil.la/2025779)).

- **TC39 Intl.Locale info proposal**: `javascript.options.experimental.intl_locale_info`

  Der [TC39 Intl.Locale info proposal](https://github.com/tc39/proposal-intl-locale-info) wird jetzt in aktuellen Builds unterstützt, wenn die Einstellung aktiviert ist. Dies umfasst alle [`Intl.Locale` Instanzmethoden, die mit "get" beginnen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale#instance_methods).
  ([Firefox Bug 1693576](https://bugzil.la/1693576)).

- **Text modul importieren**: `javascript.options.experimental.import_text`

  Die `with`-Klausel [`{ type: "text" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) ermöglicht es, den Quellcode eines Moduls als Zeichenfolgenwert zu importieren. Der Medientyp der Antwort wird ignoriert, und der Inhalt wird als Text analysiert, auch wenn der Quellcode Skripte oder anderen ausführbaren Code enthält.
  ([Firefox Bug 2024854](https://bugzil.la/2024854)).

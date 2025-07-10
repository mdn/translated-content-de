---
title: Firefox 3.5 für Entwickler
slug: Mozilla/Firefox/Releases/3.5
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

[Firefox 3.5](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/3.5/releasenotes/) (_veröffentlicht am 30. Juni 2009_) führt eine Reihe neuer Funktionen ein, sowie zusätzliche und verbesserte Unterstützung für eine Vielzahl von Webstandards. Dieser Artikel bietet eine umfangreiche Liste mit Links zu Artikeln, die die wichtigsten Verbesserungen abdecken.

## Neue Entwicklerfunktionen in Firefox 3.5

### Für Website- und Anwendungsentwickler

#### HTML 5 Unterstützung

- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Firefox 3.5 unterstützt die HTML 5 [`audio`](/de/docs/Web/HTML/Reference/Elements/audio) und [`video`](/de/docs/Web/HTML/Reference/Elements/video) Elemente.
- Offline-Ressourcen in Firefox
  - : Firefox 3.5 unterstützt jetzt vollständig die HTML 5 Offline-Ressourcen-Spezifikation.
- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Die HTML 5 Drag-and-Drop-API ermöglicht das Ziehen und Ablegen von Elementen innerhalb und zwischen Websites. Dies bietet auch eine einfachere API zur Nutzung durch Erweiterungen und Mozilla-basierte Anwendungen.

#### Neu unterstützte CSS-Funktionen

- [Unterstützung für herunterladbare Schriftarten](/de/docs/Web/CSS/@font-face)
  - : Die neue {{ cssxref("@font-face") }} @regel ermöglicht es, Webseiten herunterladbare Schriftarten bereitzustellen, sodass Websites genau so dargestellt werden können, wie es sich der Seitenautor vorstellt.
- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
  - : Firefox 3.5 unterstützt jetzt CSS-Medienabfragen, die die Unterstützung für medienabhängige Stylesheets verbessern.
- {{ cssxref("::before") }} und {{ cssxref("::after") }} auf CSS 2.1 aktualisiert
  - : Die Pseudo-Elemente `::before` und `::after` wurden auf volle CSS 2.1-Unterstützung aktualisiert, einschließlich Unterstützung für die Eigenschaften `position`, `float`, `list-style-*` und einige `display`.
- `ch` Einheiten für Längen
  - : Die `ch` Einheit kann jetzt überall verwendet werden, wo eine [Länge](/de/docs/Web/CSS/length) akzeptiert wird. `1ch` ist die Breite des Zeichens "0" (Null).
- {{ cssxref("opacity") }}
  - : Die `-moz-opacity` Mozilla-Erweiterung für CSS wurde zugunsten der standardmäßigen `opacity` Eigenschaft entfernt.
- {{ cssxref("text-shadow") }}
  - : Die `text-shadow` Eigenschaft, die es Webinhalten ermöglicht, Schatteneffekte für Text und Textdekorationen festzulegen, wird jetzt unterstützt.
- {{ cssxref("overflow-wrap") }}
  - : Diese neu unterstützte Eigenschaft ermöglicht es, zu bestimmen, ob Linien innerhalb von Wörtern gebrochen werden dürfen, um Überlauf zu verhindern, wenn eine ansonsten untrennbare Zeichenfolge zu lang ist, um in eine Zeile zu passen.
- `white-space` Eigenschaft unterstützt den `pre-line` Wert
  - : Die {{ cssxref("white-space") }} Eigenschaft akzeptiert jetzt den `pre-line` Wert.
- `-moz-box-shadow`, `-moz-border-image`, `-moz-column-rule`, `-moz-column-rule-width`, `-moz-column-rule-style`, `-moz-column-rule-color`
  - : Firefox 3.5 unterstützt diese Mozilla-Erweiterungen für CSS.
- Der `-moz-nativehyperlinktext` Farbwert
  - : Dieser neue Farbwert repräsentiert die Standard-Hyperlinkfarbe des Benutzer-Systems.
- Die `-moz-window-shadow` Eigenschaft und die `:-moz-system-metric(mac-graphite-theme)` Pseudo-Klasse
  - : Diese neuen CSS-Funktionen wurden hinzugefügt, um die Gestaltung zu erleichtern.
- Neue Werte für `-moz-appearance`
  - : Die `-moz-win-glass` und `-moz-mac-unified-toolbar` Werte wurden zu `-moz-appearance` hinzugefügt.
- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
  - : Firefox 3.5 unterstützt CSS-Transformationen. Weitere Details finden Sie unter {{ cssxref("transform", "-moz-transform") }} und {{ cssxref("transform-origin", "-moz-transform-origin") }}.
- {{ cssxref(":nth-child") }}, {{ cssxref(":nth-last-child") }}, {{ cssxref(":nth-of-type") }}, {{ cssxref(":nth-last-of-type") }}, {{ cssxref(":first-of-type") }}, {{ cssxref(":last-of-type") }}, {{ cssxref(":only-of-type") }}
  - : Diese Selektoren werden alle neu in Firefox 3.5 unterstützt.

#### Neue DOM-Funktionen

- [localStorage](/de/docs/Web/API/Window/localStorage)
  - : Firefox 3.5 unterstützt das Web Storage `localStorage` Attribut, das es Webanwendungen ermöglicht, Daten lokal auf dem Computer des Clients zu speichern.
- [Web Worker verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Firefox 3.5 unterstützt Web Worker, um die Multithreading-Unterstützung in Webanwendungen zu erleichtern.
- [Geolocation verwenden](/de/docs/Web/API/Geolocation_API)
  - : Firefox 3.5 unterstützt die Geolocation-API, die es Webanwendungen ermöglicht, Informationen über den aktuellen Standort des Benutzers zu erhalten, wenn ein Anbieter für diese Informationen installiert und aktiviert ist.
- [Lokalisierung von DOM-Elementen mit Selektoren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
  - : Die Selektoren-API ermöglicht das Abfragen eines Dokuments, um die Elemente zu lokalisieren, die einer bestimmten Auswahlregel entsprechen.
- [Mausgestenereignisse](https://web.archive.org/web/20210724051233/https://developer.mozilla.org/de/docs/Web/Events/Mouse_gesture_events)
  - : Firefox 3.5 unterstützt Mausgestenereignisse, wie Trackpad-Wischbewegungen.
- [Das `NodeIterator` Objekt](/de/docs/Web/API/NodeIterator)
  - : Das `NodeIterator` Objekt ermöglicht die Iteration über die Liste der Knoten in einem DOM-Teilbaum.
- Das `MozAfterPaint` Ereignis
  - : Dieses neue DOM-Ereignis wird nach Aktualisierungen der Fensterzeichnung gesendet.
- Das `MozMousePixelScroll` Ereignis
  - : Dieses neue DOM-Ereignis ermöglicht die Erkennung pixelbasierter Maus-Scrollrad-Ereignisse anstelle zeilenbasierter Scroll-Ereignisse.

#### Neue JavaScript-Funktionen

- [Neu in JavaScript 1.8.1](https://web.archive.org/web/20200805002842/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.1)
  - : Ein Überblick über alle Änderungen in JavaScript 1.8.1.
- [`Object.getPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
  - : Diese neue Methode gibt das Prototyp-Objekt eines angegebenen Objekts zurück.
- Verwendung von nativen JSON
  - : Firefox 3.5 bietet native Unterstützung für {{Glossary("JSON", "JSON")}}.
- Neue Trim-Methoden auf dem String-Objekt
  - : Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) Objekt hat jetzt die Methoden [`trim()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim), [`trimLeft()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) und [`trimRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd).

#### Netzwerk

- Cross-Site-Zugriffskontrollen für HTTP
  - : In Firefox 3.5 ist es jetzt möglich, dass HTTP-Anfragen, einschließlich der von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gestellten, domainsübergreifend funktionieren, wenn der Server dies unterstützt.
- [Fortschrittsereignisse für `XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
  - : Fortschrittsereignisse werden jetzt angeboten, um Erweiterungen die Überwachung des Fortschritts von Anfragen zu ermöglichen.
- Verbesserte Synchrone `XMLHttpRequest` Unterstützung
  - : [DOM Timeout](https://bugzil.la/340345) und [Eingabeveranstaltungen](https://bugzil.la/333198) werden jetzt während eines synchronen `XMLHttpRequest` unterdrückt.
- DNS-Prefetching steuern
  - : Firefox 3.5 bietet DNS-Prefetching, wobei es die Domainnamensauflösung im Voraus für Links auf der aktuellen Seite durchführt, um Zeit zu sparen, wenn Links tatsächlich angeklickt werden. Dieser Artikel beschreibt, wie Sie Ihre Website optimieren können, um das Prefetching zu deaktivieren oder anzupassen, wie das Prefetching funktioniert.

#### Neue Canvas-Funktionen

- [HTML 5 Text-API für `canvas` Elemente](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Canvas-Elemente unterstützen jetzt die HTML 5 Text-API.
- [Schatteneffekte in einem `canvas`](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows)
  - : Canvas-Schatteneffekte werden jetzt unterstützt.
- [`createImageData()`](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object)
  - : Die Canvas-Methode `createImageData()` wird jetzt unterstützt, sodass der Code ein `ImageData` Objekt gezielt anstelle der automatischen Erstellung erzeugen kann. Dies kann die Leistung anderer `ImageData`-Methoden verbessern, indem verhindert wird, dass sie das Objekt selbst erstellen müssen.
- `moz-opaque` Attribut
  - : Das hinzugefügte [`moz-opaque`](/de/docs/Web/HTML/Reference/Elements/canvas#moz-opaque) Attribut lässt den Canvas wissen, ob Transparenz eine Rolle spielt. Wenn der Canvas weiß, dass keine Transparenz vorhanden ist, kann die Malleistung optimiert werden. Siehe auch [`HTMLCanvasElement.mozOpaque`](/de/docs/Web/API/HTMLCanvasElement/mozOpaque).

#### Neue SVG-Funktionen

- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
  - : Sie können jetzt SVG-Effekte auf HTML- und XHTML-Inhalte anwenden; dieser Artikel beschreibt, wie.

#### Verschiedene neue Funktionen

- [ICC-Farbkorrektur in Firefox](/de/docs/Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox)
  - : Firefox 3.5 unterstützt jetzt ICC-Farbkorrektur für getaggte Bilder.
- Das `defer` Attribut wird jetzt auf [`script`](/de/docs/Web/HTML/Reference/Elements/script) Elementen unterstützt
  - : Dieses Attribut signalisiert dem Browser, dass er möglicherweise die Seite weiter parsen und rendern kann, ohne auf das Ende der Skriptausführung zu warten.

### Weitere Verbesserungen

- Die [`wholeText`](/de/docs/Web/API/Text/wholeText) Eigenschaft des Textknotens und die Methode `Text.replaceWholeText()` wurden implementiert.
- Die Eigenschaft [`element.children`](/de/docs/Web/API/Element/children) wurde hinzugefügt. Sie gibt eine _Sammlung_ von Kind-Elementen des gegebenen Elements zurück.
- Die Eigenschaft [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) wird jetzt unterstützt, um editierbare Elemente zu unterstützen.
- Die Element Traversal API wird jetzt vom DOM-[Element](/de/docs/Web/API/Element) Objekt unterstützt.
- HTML-Dokumentknoten können nun mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) geklont werden.
- Die nicht standardisierte `getBoxObjectFor()` DOM-Methode wurde entfernt. Sie sollten stattdessen [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) verwenden.
- Versendete DOM-Ereignisse können jetzt erneut versendet werden. Dadurch besteht Firefox 3.5 den Acid 3-Test 30.
- Verbesserungen wurden im Umgang mit DOM 2 Range vorgenommen.
- Im Nicht-Chrome-Bereich werden jetzt die gefangenen Objekte in Ausnahmen als tatsächlich geworfenes Objekt dargestellt, anstelle einer [`XPConnect`](https://web.archive.org/web/20210423135742/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Language_bindings/XPConnect) Hülle, die das geworfene Objekt enthält.
- SVG-ID-Referenzen sind jetzt dynamisch.
- SVG-Filter funktionieren jetzt für `foreignObject`.
- Die Methode `GetSVGDocument()` wurde zu [`object`](/de/docs/Web/HTML/Reference/Elements/object) und [`iframe`](/de/docs/Web/HTML/Reference/Elements/iframe) Elementen hinzugefügt, um Kompatibilität zu gewährleisten.
- Die implizite Einstellung von Eigenschaften in Objekt- und Array-Initialisierern führt in JavaScript nicht mehr zur Ausführung von Settern.
- Die Variable `gDownloadLastDir.path` wurde in `gDownloadLastDir.file` umbenannt, da es sich um eine `nsIFile` handelt und nicht um einen Pfad.
- Die Variable `gDownloadLastDirPath` wurde in `gDownloadLastDirFile` umbenannt, da es sich um eine `nsIFile` handelt und nicht um einen Pfad.
- Ab Firefox 3.5 können `data:` Bindungen in Chrome-Paketen nicht mehr verwendet werden, die `XPCNativeWrapper`-Automatisierung erhalten.

### Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie zunächst [Erweiterungen für Firefox 3.5 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3.5/Updating_extensions) lesen, was einen hilfreichen Überblick darüber bietet, welche Änderungen Ihre Erweiterung beeinflussen könnten.

#### Neue Komponenten und Funktionalität

- [Unterstützung des privaten Modus beim Browsen](https://web.archive.org/web/20191029190431/https://developer.mozilla.org/de/docs/Archive/Mozilla/Supporting_private_browsing_mode)
  - : Firefox 3.5 bietet den privaten Modus beim Browsen, der die Aktivitäten des Benutzers nicht aufzeichnet. Erweiterungen können den privaten Modus unterstützen, indem sie den in diesem Artikel angebotenen Richtlinien folgen.
- [Sicherheitsänderungen in Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Security_changes)
  - : Dieser Artikel behandelt sicherheitsbezogene Änderungen in Firefox 3.5.
- [Theme-Änderungen in Firefox 3.5](https://web.archive.org/web/20191004004454/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_3.5)
  - : Dieser Artikel behandelt theme-bezogene Änderungen in Firefox 3.5.
- Überwachung von WLAN-Zugriffspunkten
  - : Code mit UniversalXPConnect-Berechtigungen kann nun die Liste der verfügbaren Zugangspunkte überwachen und Informationen über deren SSIDs, MAC-Adressen und Signalstärke erhalten. Dies kann in Verbindung mit Geolocation genutzt werden, um standortbasierte Dienste auf WLAN-Basis anzubieten.

#### Bemerkenswerte Änderungen und Verbesserungen

- Das XUL `textbox` Widget bietet jetzt einen `search` Typ, um als Suchfeld genutzt zu werden.
- Um das Ziehen und Ablegen von Tabs zwischen Fenstern zu unterstützen, hat das `browser` Widget jetzt eine `swapDocShells()` Methode.
- Das `level` Attribut wurde zum `panel` Element hinzugefügt; dies legt fest, ob Panels über anderen Anwendungen erscheinen oder nur über dem Fenster, in dem das Panel enthalten ist.
- XUL-Elemente unterstützen jetzt die Eigenschaften `clientHeight`, `clientWidth`, `scrollHeight` und `scrollWidth`.
- `keyset` enthalten jetzt ein `disabled` Attribut.
- Zusätzlich können `keyset`s nun mit der Methode [`removeChild()`](/de/docs/Web/API/Node/removeChild) des Knotens entfernt werden.
- `mozIStorageStatement` hat die Methode `initialize()` entfernt; Verbraucher sollten stattdessen die `createStatement()` Methode verwenden, um ein neues Statement-Objekt zu erhalten.
- Die Storage-API bietet jetzt Unterstützung für asynchrone Anfragen.
- Die `nsICookie2` Schnittstelle zeigt jetzt die Zeit an, zu der Cookies in ihrem neuen `creationTime`-Attribut erstellt wurden.
- Ein Flag wurde zu `nsIProtocolHandler` (`URI_IS_LOCAL_RESOURCE`) hinzugefügt, das während der Chrome-Registrierung überprüft wird, um sicherzustellen, dass ein Protokoll zur Registrierung zugelassen ist.
- Firefox sucht nun nach Plugins in `/usr/lib/mozilla/plugins` auf Linux sowie an den zuvor unterstützten Standorten.
- Die Plugin-API wurde aktualisiert, um den privaten Modus beim Browsen zu unterstützen; Sie können jetzt `NPN_GetValue()` verwenden, um den Status des privaten Modus mithilfe der Variablen `NPNVprivateModeBool` abzufragen.

## Neue Funktionen für Endbenutzer

### Benutzererfahrung

- Standortbezogenes Browsen
  - : Wenn Sie möchten, können Sie Firefox 3.5 erlauben, Informationen über Ihren aktuellen Standort mit Websites zu teilen. Firefox 3.5 kann Informationen über das Netzwerk, mit dem Sie verbunden sind, verwenden, um Ihren Standort zu teilen. Natürlich fragt es vorher um Ihre Erlaubnis, um Ihre Privatsphäre zu gewährleisten.
- Unterstützung für offene Audio- und Videoformate
  - : Firefox 3.5 unterstützt eingebettetes Video und Audio im offenen Ogg-Format sowie WAV für Audio. Keine Plugins, keine verwirrenden Fehlermeldungen über die Notwendigkeit, etwas zu installieren, das auf Ihrer Plattform ohnehin nicht verfügbar ist.
- Lokale Datenspeicherung
  - : Webanwendungen können jetzt die lokalen Speichermöglichkeiten von Web Storage nutzen, um Daten auf Ihrem Computer zu speichern. Dies ist großartig für alles von Website-Einstellungen bis hin zu komplexeren Daten.

### Sicherheit und Datenschutz

- Privates Surfen
  - : Müssen Sie den Computer einer anderen Person verwenden? Schalten Sie den privaten Modus ein und nichts wird über Ihre Sitzung aufgezeichnet, einschließlich Cookies, Verlauf und anderer potenziell privater Informationen.
- Bessere Datenschutzkontrollen
  - : Die Datenschutzeinstellungen wurden vollständig neu gestaltet, um Benutzern mehr Kontrolle über ihre privaten Informationen zu geben. Benutzer können wählen, ob sie alles einschließlich Verlaufsinformationen, Cookies, Downloads und Formularfeldern behalten oder verwerfen möchten. Darüber hinaus können Benutzer festlegen, ob der Verlauf und/oder Lesezeichen in den automatischen Vorschlägen der Adressleiste enthalten sind, sodass sich keine privaten Webadressen unerwartet beim Tippen in der Adressleiste auftauchen.

### Leistung

- Schnellere JavaScript-Leistung
  - : JavaScript, das "J" in "AJAX", wird in Firefox 3.5 mit der neuen TraceMonkey JavaScript-Engine dramatisch beschleunigt. Webanwendungen sind viel schneller als in Firefox 3.
- Schnellere Seitendarstellung
  - : Webinhalt wird in Firefox 3.5 dank Technologien wie "speculative parsing" schneller gezeichnet. Ihre Benutzer müssen nicht wissen, was es bedeutet, außer dass "es die Dinge schneller zeichnen lässt".

## Siehe auch

{{Firefox_for_developers}}

---
title: Firefox 3.5 für Entwickler*innen
slug: Mozilla/Firefox/Releases/3.5
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

[Firefox 3.5](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/3.5/releasenotes/) (_veröffentlicht am 30. Juni 2009_) führt eine Anzahl neuer Funktionen ein sowie zusätzliche und verbesserte Unterstützung für eine Vielzahl von Webstandards. Dieser Artikel bietet eine umfangreiche Liste mit Links zu Artikeln, die die wichtigsten Verbesserungen abdecken.

## Neue Entwicklerfunktionen in Firefox 3.5

### Für Website- und Anwendungsentwickler\*innen

#### HTML 5 Unterstützung

- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Firefox 3.5 fügt Unterstützung für die HTML 5-Elemente [`audio`](/de/docs/Web/HTML/Reference/Elements/audio) und [`video`](/de/docs/Web/HTML/Reference/Elements/video) hinzu.
- Offline-Ressourcen in Firefox
  - : Firefox 3.5 unterstützt jetzt vollständig die HTML 5-Spezifikation für Offline-Ressourcen.
- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Die HTML 5 Drag-and-Drop-API ermöglicht das Ziehen und Ablegen von Elementen innerhalb von und zwischen Websites. Dies bietet auch eine einfachere API für die Verwendung durch Erweiterungen und auf Mozilla basierende Anwendungen.

#### Neu unterstützte CSS-Funktionen

- [Unterstützung für herunterladbare Schriftarten](/de/docs/Web/CSS/@font-face)
  - : Die neue {{ cssxref("@font-face") }}-@regel ermöglicht es Webseiten, herunterladbare Schriftarten bereitzustellen, sodass Sites genau so gestaltet werden können, wie der Seitenautor es erwartet.
- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
  - : Firefox 3.5 unterstützt jetzt CSS Media Queries, die die Unterstützung für medienabhängige Stylesheets verbessern.
- {{ cssxref("::before") }} und {{ cssxref("::after") }} aktualisiert auf CSS 2.1
  - : Die Pseudoelemente `::before` und `::after` wurden auf vollständige CSS 2.1-Unterstützung aktualisiert und unterstützen nun auch die Eigenschaften `position`, `float`, `list-style-*` und einige `display`-Eigenschaften.
- `ch` Einheiten für Längen
  - : Die `ch`-Einheit kann jetzt überall verwendet werden, wo eine [Längeneinheit](/de/docs/Web/CSS/length#units) akzeptiert wird. `1ch` entspricht der Breite des "0" (Null) Zeichens.
- {{ cssxref("opacity") }}
  - : Die Mozilla-Erweiterung `-moz-opacity` zu CSS wurde zugunsten der standardmäßigen `opacity`-Eigenschaft entfernt.
- {{ cssxref("text-shadow") }}
  - : Die Eigenschaft `text-shadow`, welche es ermöglicht, Schatteneffekte auf Text und Textdekorationen anzuwenden, wird jetzt unterstützt.
- {{ cssxref("overflow-wrap") }}
  - : Diese neu unterstützte Eigenschaft lässt Inhalte spezifizieren, ob Zeilen innerhalb von Wörtern gebrochen werden dürfen, um Überlauf zu verhindern, wenn eine ansonsten unbrechbare Zeichenkette zu lang ist, um in eine Zeile zu passen.
- Die `white-space`-Eigenschaft unterstützt den Wert `pre-line`
  - : Die {{ cssxref("white-space") }}-Eigenschaft akzeptiert jetzt den `pre-line`-Wert.
- `-moz-box-shadow`, `-moz-border-image`, `-moz-column-rule`, `-moz-column-rule-width`, `-moz-column-rule-style`, `-moz-column-rule-color`
  - : Firefox 3.5 fügt Unterstützung für diese Mozilla-Erweiterungen zu CSS hinzu.
- Der {{ cssxref("color_value#Mozilla_Extensions","-moz-nativehyperlinktext") }} Farbwert
  - : Dieser neue Farbwert repräsentiert die standardmäßige Hyperlinkfarbe des Nutzer-Systems.
- Die Eigenschaft `-moz-window-shadow` und die Pseudoklasse `:-moz-system-metric(mac-graphite-theme)`
  - : Diese neuen CSS-Funktionen wurden hinzugefügt, um die Gestaltung zu erleichtern.
- Neue Werte für `-moz-appearance`
  - : Die Werte `-moz-win-glass` und `-moz-mac-unified-toolbar` wurden zu `-moz-appearance` hinzugefügt.
- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
  - : Firefox 3.5 unterstützt CSS-Transformationen. Siehe {{ cssxref("transform", "-moz-transform") }} und {{ cssxref("transform-origin", "-moz-transform-origin") }} für Details.
- {{ cssxref(":nth-child") }}, {{ cssxref(":nth-last-child") }}, {{ cssxref(":nth-of-type") }}, {{ cssxref(":nth-last-of-type") }}, {{ cssxref(":first-of-type") }}, {{ cssxref(":last-of-type") }}, {{ cssxref(":only-of-type") }}
  - : Diese Selektoren werden alle neu in Firefox 3.5 unterstützt.

#### Neue DOM-Funktionen

- [localStorage](/de/docs/Web/API/Web_Storage_API#localstorage)
  - : Firefox 3.5 fügt Unterstützung für die Web Storage `localStorage`-Eigenschaft hinzu, die eine Möglichkeit bietet, dass Webanwendungen Daten lokal auf dem Computer des Kunden speichern.
- [Verwendung von Web-Arbeitern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Firefox 3.5 unterstützt Web-Arbeiter, um die Unterstützung von Multithreading in Webanwendungen zu erleichtern.
- [Verwendung von Geolocation](/de/docs/Web/API/Geolocation_API)
  - : Firefox 3.5 unterstützt die Geolocation-API, die es Webanwendungen ermöglicht, Informationen über den aktuellen Standort des Nutzers zu erhalten, sofern ein Anbieter für diese Informationen installiert und aktiviert ist.
- [DOM-Elemente mithilfe von Selektoren suchen](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
  - : Die Selektoren-API ermöglicht das Abfragen eines Dokuments zur Lokalisierung der Elemente, die einer bestimmten Auswahlregel entsprechen.
- [Mausgestenereignisse](https://web.archive.org/web/20210724051233/https://developer.mozilla.org/de/docs/Web/Events/Mouse_gesture_events)
  - : Firefox 3.5 unterstützt Mausgestenereignisse wie Trackpad-Wischbewegungen.
- [Das `NodeIterator`-Objekt](/de/docs/Web/API/NodeIterator)
  - : Das `NodeIterator`-Objekt bietet Unterstützung für das Durchlaufen der Liste der Knoten in einem DOM-Teilbaum.
- Das `MozAfterPaint`-Ereignis
  - : Dieses neue DOM-Ereignis wird nach Malaktualisierungen in Fenstern gesendet.
- Das `MozMousePixelScroll`-Ereignis
  - : Dieses neue DOM-Ereignis ermöglicht die Erkennung von pixelbasierten Maus-Scrollrad-Ereignissen anstelle von linienbasierten Scrollereignissen.

#### Neue JavaScript-Funktionen

- [Neu in JavaScript 1.8.1](https://web.archive.org/web/20200805002842/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.1)
  - : Ein Überblick über alle Änderungen in JavaScript 1.8.1.
- [`Object.getPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
  - : Diese neue Methode gibt das Prototyp-Objekt eines angegebenen Objekts zurück.
- Verwendung von nativem JSON
  - : Firefox 3.5 unterstützt nativ {{Glossary("JSON", "JSON")}}.
- Neue Trim-Methoden auf dem String-Objekt
  - : Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt verfügt jetzt über die Methoden [`trim()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim), [`trimLeft()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) und [`trimRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd).

#### Netzwerk

- Domänenübergreifende Zugriffskontrollen für HTTP
  - : In Firefox 3.5 ist es jetzt möglich, dass HTTP-Anfragen, einschließlich der von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gestellten, domänenübergreifend funktionieren, wenn der Server dies unterstützt.
- [Fortschrittsereignisse für `XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
  - : Fortschrittsereignisse werden jetzt angeboten, um Erweiterungen das Überwachen des Fortschritts von Anfragen zu ermöglichen.
- Verbesserte Unterstützung für synchrone `XMLHttpRequest`
  - : [DOM Timeout](https://bugzil.la/340345) und [Input Events](https://bugzil.la/333198) werden jetzt während eines synchronen `XMLHttpRequest` unterdrückt.
- Steuerung der DNS-Vorabauflösung
  - : Firefox 3.5 bietet die DNS-Vorabauflösung, bei der die Domainnamen-Auflösung im Voraus für Links auf der aktuellen Seite durchgeführt wird, um Zeit zu sparen, wenn die Links tatsächlich angeklickt werden. Dieser Artikel beschreibt, wie Sie Ihre Website so einstellen können, dass die Vorabauflösung deaktiviert wird oder wie diese angepasst wird.

#### Neue Canvas-Funktionen

- [HTML 5 Text-API für `canvas`-Elemente](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Canvas-Elemente unterstützen jetzt die HTML 5 Text-API.
- [Schatteneffekte in einem `canvas`](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows)
  - : Canvas-Schatteneffekte werden jetzt unterstützt.
- [`createImageData()`](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object)
  - : Die Canvas-Methode `createImageData()` wird jetzt unterstützt, sodass Code gezielt ein `ImageData`-Objekt erstellen kann, anstatt dies automatisch erledigen zu lassen. Dies kann die Leistung anderer `ImageData`-Methoden verbessern, indem verhindert wird, dass sie das Objekt selbst erstellen müssen.
- Attribut `moz-opaque`
  - : Das [`moz-opaque`](/de/docs/Web/HTML/Reference/Elements/canvas#moz-opaque)-Attribut wurde hinzugefügt, das dem Canvas mitteilt, ob Transluzenz eine Rolle spielt oder nicht. Wenn das Canvas weiß, dass keine Transluzenz vorhanden ist, kann die Malleistung optimiert werden. Siehe auch [`HTMLCanvasElement.mozOpaque`](/de/docs/Web/API/HTMLCanvasElement/mozOpaque).

#### Neue SVG-Funktionen

- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
  - : Sie können jetzt SVG-Effekte auf HTML- und XHTML-Inhalte anwenden; dieser Artikel beschreibt, wie.

#### Verschiedene neue Funktionen

- [ICC-Farbkorrektur in Firefox](/de/docs/Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox)
  - : Firefox 3.5 unterstützt jetzt ICC-Farbkorrektur für markierte Bilder.
- Das `defer`-Attribut wird jetzt auf [`script`](/de/docs/Web/HTML/Reference/Elements/script)-Elementen unterstützt
  - : Dieses Attribut signalisiert dem Browser, dass er die Seite weiter analysieren und rendern _darf_, ohne darauf zu warten, dass das Skript seine Ausführung beendet hat.

### Weitere Verbesserungen

- Die Eigenschaft [`wholeText`](/de/docs/Web/API/Text/wholeText) des Textknotens und die Methode `Text.replaceWholeText()` wurden implementiert.
- Die Eigenschaft [`element.children`](/de/docs/Web/API/Element/children) wurde hinzugefügt. Sie gibt eine _Sammlung_ von Kindelementen des angegebenen Elements zurück.
- Die Eigenschaft [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) wird jetzt unterstützt, um bearbeitbare Elemente zu unterstützen.
- Die Element Traversal API wird nun vom DOM-[Element](/de/docs/Web/API/Element)-Objekt unterstützt.
- HTML-Dokumentknoten können jetzt mithilfe von [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) geklont werden.
- Die nicht-standardisierte `getBoxObjectFor()`-DOM-Methode wurde entfernt. Sie sollten stattdessen [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) verwenden.
- Versendete DOM-Ereignisse können jetzt erneut versendet werden. Damit besteht Firefox 3.5 den Acid 3 Test 30.
- Verbesserungen wurden im Umgang mit DOM 2 Range vorgenommen.
- Im Nicht-Chrome-Bereich sind in Ausnahmen gefangene Objekte jetzt das tatsächlich geworfene Objekt, anstatt einer [`XPConnect`](https://web.archive.org/web/20210423135742/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Language_bindings/XPConnect)-Hülle, die das geworfene Objekt enthält.
- SVG-ID-Referenzen sind jetzt live.
- SVG-Filter funktionieren jetzt für `foreignObject`.
- Die Methode `GetSVGDocument()` wurde zu [`object`](/de/docs/Web/HTML/Reference/Elements/object)- und [`iframe`](/de/docs/Web/HTML/Reference/Elements/iframe)-Elementen für Kompatibilität hinzugefügt.
- Implizite Einstellung von Eigenschaften in Objekt- und Array-Initialisierern führt nicht mehr zur Ausführung von Settern in JavaScript.
- Die Variable `gDownloadLastDir.path` wurde in `gDownloadLastDir.file` umbenannt, da sie sich auf ein `nsIFile` bezieht, nicht auf einen Pfad.
- Die Variable `gDownloadLastDirPath` wurde in `gDownloadLastDirFile` umbenannt, da sie sich auf ein `nsIFile` bezieht, nicht auf einen Pfad.
- Seit Firefox 3.5 können Sie `data:`-Bindungen in Chrome-Paketen, die `XPCNativeWrapper`-Automatisierung erhalten, nicht mehr verwenden.

### Für XUL- und Add-on-Entwickler\*innen

Wenn Sie eine Erweiterungsentwickler\*in sind, sollten Sie mit dem Lesen von [Erweiterungen für Firefox 3.5 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3.5/Updating_extensions) beginnen, das einen hilfreichen Überblick über die Änderungen bietet, die Ihre Erweiterung betreffen könnten.

#### Neue Komponenten und Funktionalität

- [Unterstützung des privaten Surfmodus](https://web.archive.org/web/20191029190431/https://developer.mozilla.org/de/docs/Archive/Mozilla/Supporting_private_browsing_mode)
  - : Firefox 3.5 bietet den privaten Surfmodus, der die Aktivitäten des Nutzers nicht aufzeichnet. Erweiterungen können den privaten Surfmodus gemäß den in diesem Artikel angebotenen Richtlinien unterstützen.
- [Sicherheitsänderungen in Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Security_changes)
  - : Dieser Artikel behandelt sicherheitsrelevante Änderungen in Firefox 3.5.
- [Designänderungen in Firefox 3.5](https://web.archive.org/web/20191004004454/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_3.5)
  - : Dieser Artikel behandelt designbezogene Änderungen in Firefox 3.5.
- Überwachung von Wi-Fi-Zugangspunkten
  - : Code mit UniversalXPConnect-Berechtigungen kann jetzt die Liste der verfügbaren Zugangspunkte überwachen und Informationen zu ihren SSIDs, MAC-Adressen und Signalstärke abrufen. Dies kann in Verbindung mit der Geolokalisierung genutzt werden, um einen Standortdienst auf Wi-Fi-Basis anzubieten.

#### Bemerkenswerte Änderungen und Verbesserungen

- Das XUL `textbox`-Widget bietet jetzt einen `search`-Typ, der für Suchfelder verwendet werden kann.
- Um das Ziehen und Ablegen von Tabs zwischen Fenstern zu unterstützen, verfügt das `browser`-Widget jetzt über eine `swapDocShells()`-Methode.
- Der `level`-Attribut zum `panel`-Element wurde hinzugefügt; dies gibt an, ob Panels über anderen Anwendungen erscheinen oder nur über dem Fenster, in dem sich das Panel befindet.
- XUL-Elemente unterstützen jetzt die Eigenschaften `clientHeight`, `clientWidth`, `scrollHeight` und `scrollWidth`.
- `keyset` verfügt jetzt über ein `disabled`-Attribut.
- Zusätzlich können `keysets` jetzt mithilfe der [`removeChild()`](/de/docs/Web/API/Node/removeChild)-Methode des Knotens entfernt werden.
- `mozIStorageStatement` hatte die `initialize()`-Methode entfernt; Verbraucher sollten stattdessen die `createStatement()`-Methode benutzen, um ein neues Statement-Objekt zu erhalten.
- Die Storage API bietet jetzt Unterstützung für asynchrone Anfragen.
- Die `nsICookie2`-Schnittstelle gibt jetzt die Zeit an, zu der Cookies in ihrem neuen `creationTime`-Attribut erstellt wurden.
- Ein Flag wurde zu `nsIProtocolHandler` (`URI_IS_LOCAL_RESOURCE`) hinzugefügt, das während der Chrome-Registrierung überprüft wird, ob ein Protokoll registriert werden darf.
- Firefox sucht jetzt nach Plugins in `/usr/lib/mozilla/plugins` auf Linux sowie an den zuvor unterstützten Orten.
- Die Plugin-API wurde aktualisiert, um Unterstützung für den privaten Surfmodus hinzuzufügen; Sie können jetzt `NPN_GetValue()` verwenden, um den Status des privaten Surfmodus abzufragen, indem Sie die Variable `NPNVprivateModeBool` nutzen.

## Neue Funktionen für Endnutzer\*innen

### Benutzererfahrung

- Standortbasiertes Browsen
  - : Wenn Sie sich dazu entscheiden, können Sie Firefox 3.5 erlauben, Informationen über Ihren aktuellen Standort mit Websites zu teilen. Firefox 3.5 kann Informationen über das Netzwerk, mit dem Sie verbunden sind, verwenden, um Ihren Standort zu teilen. Es wird natürlich um Ihre Erlaubnis gefragt, um Ihre Privatsphäre zu gewährleisten.
- Unterstützung für offene Audio- und Videoformate
  - : Firefox 3.5 unterstützt eingebettetes Video und Audio im offenen Ogg-Format sowie WAV für Audio. Keine Plugins, keine verwirrenden Fehlermeldungen darüber, dass etwas installiert werden muss, das auf Ihrer Plattform ohnehin nicht verfügbar ist.
- Lokale Datenspeicherung
  - : Webanwendungen können jetzt die lokalen Speicherfähigkeiten von Web Storage verwenden, um Daten auf Ihrem Computer zu speichern. Dies ist großartig für alles von Site-Einstellungen bis hin zu komplexeren Daten.

### Sicherheit und Datenschutz

- Privates Surfen
  - : Müssen Sie einen fremden Computer benutzen? Schalten Sie den privaten Surfmodus ein und nichts über Ihre Sitzung wird aufgezeichnet, einschließlich Cookies, Verlauf und jeglicher anderer potenziell privater Informationen.
- Bessere Datenschutzkontrollen
  - : Das Datenschutz-Optionsfeld wurde vollständig neu gestaltet, um den Nutzer*innen mehr Kontrolle über ihre privaten Informationen zu geben. Nutzer*innen können wählen, ob sie Informationen wie Verlaufsinformationen, Cookies, Downloads und Formularfeldinformationen behalten oder verwerfen möchten. Darüber hinaus können Nutzer\*innen festlegen, ob Verlauf und/oder Lesezeichen in den automatischen Vorschlägen der Adressleiste enthalten sein sollen, sodass private Webadressen nicht unerwartet beim Tippen in die Adressleiste auftauchen.

### Leistung

- Schnellere JavaScript-Leistung
  - : JavaScript, das "J" in "AJAX", wurde mit der neuen TraceMonkey-JavaScript-Engine in Firefox 3.5 dramatisch beschleunigt. Webanwendungen sind jetzt viel schneller als in Firefox 3.
- Schnellere Seitenrendering
  - : Webinhalte werden in Firefox 3.5 schneller gezeichnet, dank Technologien wie dem "spekulativen Parsen". Ihre Nutzer\*innen müssen nicht wissen, was das bedeutet, außer "es sorgt dafür, dass Dinge schneller gezeichnet werden".

## Siehe auch

{{Firefox_for_developers}}

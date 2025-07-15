---
title: Firefox 3.5 für Entwickler
short-title: Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

[Firefox 3.5](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/3.5/releasenotes/) (_veröffentlicht am 30. Juni 2009_) führt eine Reihe neuer Funktionen ein sowie zusätzlichen und verbesserten Support für eine Vielzahl von Webstandards. Dieser Artikel bietet eine umfassende Liste mit Links zu Artikeln, die die wichtigsten Verbesserungen behandeln.

## Neue Entwicklerfunktionen in Firefox 3.5

### Für Website- und Anwendungsentwickler

#### Unterstützung für HTML 5

- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Firefox 3.5 fügt Unterstützung für die HTML 5 [`audio`](/de/docs/Web/HTML/Reference/Elements/audio) und [`video`](/de/docs/Web/HTML/Reference/Elements/video) Elemente hinzu.
- Offline-Ressourcen in Firefox
  - : Firefox 3.5 unterstützt jetzt vollständig die HTML 5-Spezifikation für Offline-Ressourcen.
- [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Die HTML 5 Drag & Drop API ermöglicht das Ziehen und Ablegen von Elementen innerhalb und zwischen Websites. Dies bietet auch eine einfachere API für Erweiterungen und auf Mozilla basierende Anwendungen.

#### Neu unterstützte CSS-Funktionen

- [Unterstützung herunterladbarer Schriftarten](/de/docs/Web/CSS/@font-face)
  - : Die neue {{ cssxref("@font-face") }}-Regel erlaubt es Webseiten, herunterladbare Schriftarten bereitzustellen, sodass Seiten genau so angezeigt werden können, wie es der Seitenautor beabsichtigt hat.
- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
  - : Firefox 3.5 unterstützt jetzt CSS-Medienabfragen, die die Unterstützung medienabhängiger Stylesheets verbessern.
- {{ cssxref("::before") }} und {{ cssxref("::after") }} aktualisiert auf CSS 2.1
  - : Die `::before` und `::after` Pseudoelemente wurden auf volle CSS 2.1 Unterstützung aktualisiert und unterstützen jetzt die Eigenschaften `position`, `float`, `list-style-*` und einige `display` Eigenschaften.
- `ch` Einheiten für Längen
  - : Die `ch` Einheit kann jetzt überall verwendet werden, wo ein [Länge](/de/docs/Web/CSS/length) akzeptiert wird. `1ch` ist die Breite des "0" (Null) Zeichens.
- {{ cssxref("opacity") }}
  - : Die `-moz-opacity` Mozilla-Erweiterung zu CSS wurde zugunsten der Standard `opacity` Eigenschaft entfernt.
- {{ cssxref("text-shadow") }}
  - : Die `text-shadow` Eigenschaft, die es Webinhalten erlaubt, Schatteneffekte auf Text und Textdekorationen anzuwenden, wird jetzt unterstützt.
- {{ cssxref("overflow-wrap") }}
  - : Diese neu unterstützte Eigenschaft ermöglicht es, anzugeben, ob Zeilen innerhalb von Wörtern gebrochen werden dürfen, um Überläufe zu verhindern, wenn ein ansonsten unzerbrechlicher String zu lang ist, um in eine Zeile zu passen.
- `white-space` Eigenschaft unterstützt den Wert `pre-line`
  - : Die {{ cssxref("white-space") }} Eigenschaft akzeptiert jetzt den Wert `pre-line`.
- `-moz-box-shadow`, `-moz-border-image`, `-moz-column-rule`, `-moz-column-rule-width`, `-moz-column-rule-style`, `-moz-column-rule-color`
  - : Firefox 3.5 fügt Unterstützung für diese Mozilla-Erweiterungen zu CSS hinzu.
- Der `-moz-nativehyperlinktext` Farbwert
  - : Dieser neue Farbwert repräsentiert die Standardhyperlink-Farbe des Systems des Benutzers.
- Die `-moz-window-shadow` Eigenschaft und die `:-moz-system-metric(mac-graphite-theme)` Pseudoklasse
  - : Diese neuen CSS-Funktionen wurden hinzugefügt, um die Theming zu erleichtern.
- Neue Werte für `-moz-appearance`
  - : Die Werte `-moz-win-glass` und `-moz-mac-unified-toolbar` wurden zu `-moz-appearance` hinzugefügt.
- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
  - : Firefox 3.5 unterstützt CSS-Transformationen. Siehe {{ cssxref("transform", "-moz-transform") }} und {{ cssxref("transform-origin", "-moz-transform-origin") }} für Details.
- {{ cssxref(":nth-child") }}, {{ cssxref(":nth-last-child") }}, {{ cssxref(":nth-of-type") }}, {{ cssxref(":nth-last-of-type") }}, {{ cssxref(":first-of-type") }}, {{ cssxref(":last-of-type") }}, {{ cssxref(":only-of-type") }}
  - : Diese Selektoren werden alle neu in Firefox 3.5 unterstützt.

#### Neue DOM-Funktionen

- [localStorage](/de/docs/Web/API/Window/localStorage)
  - : Firefox 3.5 fügt Unterstützung für die Web Storage `localStorage` Eigenschaft hinzu, die es Webanwendungen ermöglicht, Daten lokal auf dem Computer des Nutzers zu speichern.
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Firefox 3.5 unterstützt Web Worker, um einfache Multithreading-Unterstützung in Webanwendungen zu ermöglichen.
- [Verwendung von Geolocation](/de/docs/Web/API/Geolocation_API)
  - : Firefox 3.5 unterstützt die Geolocation-API, die es Webanwendungen ermöglicht, Informationen über den aktuellen Standort des Benutzers zu erhalten, wenn ein Anbieter für diese Informationen installiert und aktiviert ist.
- [DOM-Elemente mit Selektoren lokalisieren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
  - : Die Selektoren-API erlaubt das Abfragen eines Dokuments, um die Elemente zu lokalisieren, die einer gegebenen Auswahlanweisung entsprechen.
- [Mausgestenereignisse](https://web.archive.org/web/20210724051233/https://developer.mozilla.org/de/docs/Web/Events/Mouse_gesture_events)
  - : Firefox 3.5 unterstützt Mausgestenereignisse wie Trackpad-Wischgesten.
- [Das `NodeIterator`-Objekt](/de/docs/Web/API/NodeIterator)
  - : Das `NodeIterator`-Objekt bietet Unterstützung zum Iterieren über die Liste der Knoten in einem DOM-Teilbaum.
- Das `MozAfterPaint`-Ereignis
  - : Dieses neue DOM-Ereignis wird nach Malereien in Fenstern gesendet.
- Das `MozMousePixelScroll`-Ereignis
  - : Dieses neue DOM-Ereignis ermöglicht die Erkennung von pixelbasierten Maus-Scroll-Rad-Ereignissen anstelle von zeilenbasierten Scroll-Ereignissen.

#### Neue JavaScript-Funktionen

- [Neu in JavaScript 1.8.1](https://web.archive.org/web/20200805002842/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.1)
  - : Ein Überblick über alle Änderungen in JavaScript 1.8.1.
- [`Object.getPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
  - : Diese neue Methode gibt das Prototypobjekt eines bestimmten Objekts zurück.
- Verwendung von nativem JSON
  - : Firefox 3.5 bietet native Unterstützung für {{Glossary("JSON", "JSON")}}.
- Neue Trim-Methoden auf dem String-Objekt
  - : Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt hat jetzt die Methoden [`trim()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim), [`trimLeft()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) und [`trimRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd).

#### Netzwerk

- Cross-Site-Zugriffskontrollen für HTTP
  - : In Firefox 3.5 ist es jetzt möglich, dass HTTP-Anfragen, einschließlich solcher, die mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gemacht werden, domänenübergreifend funktionieren, wenn der Server dies unterstützt.
- [Fortschrittsereignisse für `XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
  - : Fortschrittsereignisse werden jetzt angeboten, um Erweiterungen das Überwachen des Fortschritts von Anfragen zu ermöglichen.
- Verbesserte Unterstützung für synchrone `XMLHttpRequest`
  - : [DOM-Timeout](https://bugzil.la/340345) und [Eingabeereignisse](https://bugzil.la/333198) werden jetzt während eines synchronen `XMLHttpRequest` unterdrückt.
- Steuerung des DNS-Vorabrufs
  - : Firefox 3.5 bietet DNS-Vorabruf, wobei es die Domain-Namen-Auflösung im Voraus für Links in der aktuellen Seite durchführt, um Zeit zu sparen, wenn die Links tatsächlich angeklickt werden. Dieser Artikel beschreibt, wie Sie Ihre Website anpassen können, um den Vorabruf zu deaktivieren oder anzupassen, wie der Vorabruf betrieben wird.

#### Neue Canvas-Funktionen

- [HTML 5 Text-API für `canvas` Elemente](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Canvas-Elemente unterstützen jetzt die HTML 5 Text-API.
- [Schatteneffekte in einem `canvas`](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows)
  - : Schattierungseffekte für Canvas werden jetzt unterstützt.
- [`createImageData()`](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object)
  - : Die Canvas-Methode `createImageData()` wird jetzt unterstützt, wodurch ein `ImageData` Objekt explizit erstellt werden kann, anstatt es automatisch erstellen zu müssen. Dies kann die Leistung anderer `ImageData`-Methoden verbessern, indem sie verhindert, dass das Objekt erstellt werden muss.
- Attribut `moz-opaque`
  - : Das [`moz-opaque`](/de/docs/Web/HTML/Reference/Elements/canvas#moz-opaque) Attribut wurde hinzugefügt, das dem Canvas mitteilt, ob Durchlässigkeit ein Faktor sein wird oder nicht. Wenn das Canvas weiß, dass es keine Durchlässigkeit gibt, kann die Malleistung optimiert werden. Siehe auch [`HTMLCanvasElement.mozOpaque`](/de/docs/Web/API/HTMLCanvasElement/mozOpaque).

#### Neue SVG-Funktionen

- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
  - : Sie können jetzt SVG-Effekte auf HTML- und XHTML-Inhalte anwenden; dieser Artikel beschreibt, wie.

#### Verschiedene neue Funktionen

- [ICC-Farbkorrektur in Firefox](/de/docs/Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox)
  - : Firefox 3.5 unterstützt jetzt ICC-Farbkorrektur für getaggte Bilder.
- Das `defer` Attribut wird jetzt auf [`script`](/de/docs/Web/HTML/Reference/Elements/script) Elementen unterstützt
  - : Dieses Attribut zeigt dem Browser an, dass er _möglicherweise_ die Seite weiterhin parsen und rendern darf, ohne darauf zu warten, dass das Script die Ausführung beendet hat.

### Weitere Verbesserungen

- Die Textnode-Eigenschaft [`wholeText`](/de/docs/Web/API/Text/wholeText) und die Methode `Text.replaceWholeText()` wurden implementiert.
- Die Eigenschaft [`element.children`](/de/docs/Web/API/Element/children) wurde hinzugefügt. Sie gibt eine _Sammlung_ von Kinderelementen des gegebenen Elements zurück.
- Die Eigenschaft [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) wird jetzt unterstützt, um bearbeitbare Elemente zu unterstützen.
- Die Element Traversal API wird jetzt vom DOM [Element](/de/docs/Web/API/Element) Objekt unterstützt.
- HTML-Dokumentknoten können jetzt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) geklont werden.
- Die nicht standardmäßige DOM-Methode `getBoxObjectFor()` wurde entfernt. Sie sollten stattdessen [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) verwenden.
- Versendete DOM-Ereignisse können jetzt erneut gesendet werden. Dies lässt Firefox 3.5 den Acid 3 Test 30 bestehen.
- Verbesserungen wurden bei der Behandlung von DOM 2 Range vorgenommen.
- In einem nicht-Chrome-Bereich sind gefangene Objekte in Ausnahmen jetzt das tatsächlich geworfene Objekt, anstatt eines [`XPConnect`](https://web.archive.org/web/20210423135742/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Language_bindings/XPConnect) Wrappers, der das geworfene Objekt enthält.
- SVG-ID-Referenzen sind jetzt dynamisch.
- SVG-Filter funktionieren jetzt für `foreignObject`.
- Die Methode `GetSVGDocument()` wurde zu [`object`](/de/docs/Web/HTML/Reference/Elements/object)- und [`iframe`](/de/docs/Web/HTML/Reference/Elements/iframe)-Elementen für Kompatibilität hinzugefügt.
- Implizite Einstellungsaufrufe in Objekt- und Array-Initialisierern führen keine Setter mehr aus in JavaScript.
- Die Variable `gDownloadLastDir.path` wurde in `gDownloadLastDir.file` umbenannt, da sie sich auf eine `nsIFile`, nicht auf einen Pfad, bezieht.
- Die Variable `gDownloadLastDirPath` wurde in `gDownloadLastDirFile` umbenannt, da sie sich auf eine `nsIFile`, nicht auf einen Pfad, bezieht.
- Ab Firefox 3.5 können Sie keine `data:` Bindungen in Chrome-Paketen mehr verwenden, die `XPCNativeWrapper` Automatisierung erhalten.

### Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Erweiterungen für Firefox 3.5 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3.5/Updating_extensions) beginnen, das einen hilfreichen Überblick über Änderungen bietet, die Ihre Erweiterung betreffen könnten.

#### Neue Komponenten und Funktionalitäten

- [Unterstützung für den privaten Modus](https://web.archive.org/web/20191029190431/https://developer.mozilla.org/de/docs/Archive/Mozilla/Supporting_private_browsing_mode)
  - : Firefox 3.5 bietet den privaten Modus, der die Aktivitäten des Benutzers nicht aufzeichnet. Erweiterungen können den privaten Modus unterstützen, indem sie den in diesem Artikel beschriebenen Richtlinien folgen.
- [Änderungen der Sicherheit in Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Security_changes)
  - : Dieser Artikel behandelt sicherheitsbezogene Änderungen in Firefox 3.5.
- [Designänderungen in Firefox 3.5](https://web.archive.org/web/20191004004454/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_3.5)
  - : Dieser Artikel behandelt designbezogene Änderungen in Firefox 3.5.
- Überwachung von Wi-Fi-Zugangspunkten
  - : Code mit UniversalXPConnect-Rechten kann jetzt die Liste der verfügbaren Zugangspunkte überwachen und Informationen zu ihren SSIDs, MAC-Adressen und Signalstärken abrufen. Dies kann zusammen mit Geolocation verwendet werden, um einen Wi-Fi-basierten Ortungsdienst anzubieten.

#### Bedeutende Änderungen und Verbesserungen

- Das XUL `textbox`-Widget bietet jetzt einen `search`-Typ, um als Suchfelder verwendet zu werden.
- Um das Ziehen und Ablegen von Tabs zwischen Fenstern zu unterstützen, hat das `browser`-Widget jetzt eine `swapDocShells()` Methode.
- Hinzufügen des `level`-Attributs zum `panel` Element; dies gibt an, ob Panels über anderen Anwendungen erscheinen oder nur über dem Fenster, das das Panel enthält.
- XUL-Elemente unterstützen jetzt die Eigenschaften `clientHeight`, `clientWidth`, `scrollHeight` und `scrollWidth`.
- `keyset` enthält jetzt ein `disabled`-Attribut.
- Zudem können `keyset`s jetzt mit der Methode [`removeChild()`](/de/docs/Web/API/Node/removeChild) des Knotens entfernt werden.
- Bei `mozIStorageStatement` wurde die Methode `initialize()` entfernt; Verbraucher sollten die Methode `createStatement()` verwenden, um ein neues Statement-Objekt zu erhalten.
- Die Storage-API bietet jetzt Unterstützung für asynchrone Anfragen.
- Das `nsICookie2`-Interface macht jetzt die Zeit, zu der Cookies erstellt wurden, in seinem neuen `creationTime` Attribut verfügbar.
- Hinzufügen einer Flagge zu `nsIProtocolHandler` (`URI_IS_LOCAL_RESOURCE`), die während der Chrome-Registrierung überprüft wird, um sicherzustellen, dass ein Protokoll registriert werden darf.
- Firefox sucht nun auch in `/usr/lib/mozilla/plugins` nach Plugins auf Linux sowie an den vorher unterstützten Orten.
- Die Plugin-API wurde aktualisiert, um Unterstützung für den privaten Modus einzuschließen; Sie können jetzt `NPN_GetValue()` verwenden, um den Status des privaten Modus mit der Variable `NPNVprivateModeBool` zu überprüfen.

## Neue Funktionen für Endanwender

### Benutzererfahrung

- Standortbasiertes Surfen
  - : Wenn Sie es zulassen, kann Firefox 3.5 Informationen über Ihren aktuellen Standort mit Websites teilen. Firefox 3.5 kann Informationen über das Netzwerk, mit dem Sie verbunden sind, verwenden, um Ihren Standort zu teilen. Selbstverständlich wird zuvor um Ihre Erlaubnis gebeten, um Ihre Privatsphäre zu gewährleisten.
- Unterstützung für offene Audio- und Videoformate
  - : Firefox 3.5 unterstützt eingebettetes Video und Audio im offenen Ogg-Format, sowie WAV für Audio. Keine Plugins, keine verwirrenden Fehlermeldungen zu erforderlichen Installationen, die sich auf Ihrem Plattform ohnehin als nicht verfügbar erweisen.
- Lokale Datenspeicherung
  - : Webanwendungen können jetzt die lokalen Speicherfähigkeiten von Web Storage nutzen, um Daten auf Ihrem Computer zu speichern. Das ist großartig für alles von Website-Präferenzen bis hin zu komplexeren Daten.

### Sicherheit und Datenschutz

- Privates Surfen
  - : Müssen Sie den Computer einer anderen Person benutzen? Aktivieren Sie den Modus für privates Surfen, und nichts wird über Ihre Sitzung aufgezeichnet, einschließlich Cookies, Verlauf und alle anderen potenziell privaten Informationen.
- Bessere Datenschutzeinstellungen
  - : Das Datenschutz-Präferenzfenster wurde völlig überarbeitet, um Benutzern mehr Kontrolle über ihre privaten Informationen zu bieten. Benutzer können wählen, ob sie irgendwelche Informationen behalten oder verwerfen möchten, darunter Verlaufsinformationen, Cookies, Downloads und Formularfeldinformationen. Darüber hinaus können Benutzer festlegen, ob der Verlauf und/oder Lesezeichen in den automatisierten Vorschlägen der Adressleiste enthalten sind, um private Webadressen zu verhindern, die unerwartet beim Tippen in der Adressleiste erscheinen.

### Leistung

- Schnellere JavaScript-Leistung
  - : JavaScript, das „J“ in „AJAX“, wird in Firefox 3.5 mit der neuen TraceMonkey JavaScript-Engine dramatisch beschleunigt. Webanwendungen sind wesentlich schneller als in Firefox 3.
- Schnellere Seitenanzeige
  - : Webinhalte werden in Firefox 3.5 schneller gezeichnet, dank Technologien wie „spekulatives Parsen“. Ihre Benutzer müssen nur wissen, dass es bedeutet, dass "alles schneller angezeigt wird."

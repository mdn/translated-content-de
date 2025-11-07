---
title: Firefox 3.5 für Entwickler
short-title: Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

[Firefox 3.5](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/3.5/releasenotes/) (_veröffentlicht am 30. Juni 2009_) führt eine Reihe neuer Funktionen ein und bietet zusätzliche und verbesserte Unterstützung für eine Vielzahl von Webstandards. Dieser Artikel bietet eine umfangreiche Liste mit Links zu Artikeln, die die wichtigsten Verbesserungen abdecken.

## Neue Entwicklerfunktionen in Firefox 3.5

### Für Website- und Anwendungsentwickler

#### HTML 5 Unterstützung

- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Firefox 3.5 fügt Unterstützung für die HTML 5-Elemente [`audio`](/de/docs/Web/HTML/Reference/Elements/audio) und [`video`](/de/docs/Web/HTML/Reference/Elements/video) hinzu.
- Offline-Ressourcen in Firefox
  - : Firefox 3.5 unterstützt nun vollständig die HTML 5-Spezifikation für Offline-Ressourcen.
- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Die HTML 5 Drag and Drop API ermöglicht das Ziehen und Ablegen von Elementen innerhalb und zwischen Websites. Dies bietet auch eine einfachere API für die Verwendung durch Erweiterungen und auf Mozilla basierende Anwendungen.

#### Neu unterstützte CSS-Funktionen

- [Unterstützung für herunterladbare Schriftarten](/de/docs/Web/CSS/Reference/At-rules/@font-face)
  - : Die neue {{ cssxref("@font-face") }} @regel ermöglicht es Webseiten, herunterladbare Schriftarten bereitzustellen, sodass Seiten genauso dargestellt werden, wie der Autor es erwartet.
- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
  - : Firefox 3.5 unterstützt jetzt CSS Media Queries, die die Unterstützung für medienspezifische Stylesheets erweitern.
- {{ cssxref("::before") }} und {{ cssxref("::after") }} aktualisiert auf CSS 2.1
  - : Die Pseudo-Elemente `::before` und `::after` wurden auf vollständige CSS 2.1-Unterstützung aktualisiert, einschließlich Unterstützung für die Eigenschaften `position`, `float`, `list-style-*` und einige `display`-Eigenschaften.
- `ch` Einheiten für Längen
  - : Die `ch`-Einheit kann jetzt überall verwendet werden, wo eine [Länge](/de/docs/Web/CSS/Reference/Values/length) akzeptiert wird. `1ch` ist die Breite des "0" (Null) Zeichens.
- {{ cssxref("opacity") }}
  - : Die Mozilla-Erweiterung `-moz-opacity` zu CSS wurde zugunsten der Standard-Eigenschaft `opacity` entfernt.
- {{ cssxref("text-shadow") }}
  - : Die `text-shadow`-Eigenschaft, die es Webinhalten ermöglicht, Schatteneffekte für Text und Textdekorationen anzugeben, wird jetzt unterstützt.
- {{ cssxref("overflow-wrap") }}
  - : Diese neu unterstützte Eigenschaft ermöglicht es, anzugeben, ob Zeilen innerhalb von Wörtern gebrochen werden können, um Überläufe zu verhindern, wenn ein ansonsten unteilbares String zu lang ist, um in eine Zeile zu passen.
- `white-space`-Eigenschaft unterstützt den Wert `pre-line`
  - : Die {{ cssxref("white-space") }}-Eigenschaft akzeptiert nun den Wert `pre-line`.
- `-moz-box-shadow`, `-moz-border-image`, `-moz-column-rule`, `-moz-column-rule-width`, `-moz-column-rule-style`, `-moz-column-rule-color`
  - : Firefox 3.5 fügt Unterstützung für diese Mozilla-Erweiterungen zu CSS hinzu.
- Der Farbwert `-moz-nativehyperlinktext`
  - : Dieser neue Farbwert repräsentiert die standardmäßige Hyperlink-Farbe des Benutzersystems.
- Die Eigenschaft `-moz-window-shadow` und die Pseudo-Klasse `:-moz-system-metric(mac-graphite-theme)`
  - : Diese neuen CSS-Funktionen wurden zur Erleichterung des Themings hinzugefügt.
- Neue Werte für `-moz-appearance`
  - : Die Werte `-moz-win-glass` und `-moz-mac-unified-toolbar` wurden zu `-moz-appearance` hinzugefügt.
- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
  - : Firefox 3.5 unterstützt CSS-Transformationen. Siehe {{ cssxref("transform", "-moz-transform") }} und {{ cssxref("transform-origin", "-moz-transform-origin") }} für Details.
- {{ cssxref(":nth-child") }}, {{ cssxref(":nth-last-child") }}, {{ cssxref(":nth-of-type") }}, {{ cssxref(":nth-last-of-type") }}, {{ cssxref(":first-of-type") }}, {{ cssxref(":last-of-type") }}, {{ cssxref(":only-of-type") }}
  - : Diese Selektoren werden alle neu in Firefox 3.5 unterstützt.

#### Neue DOM-Funktionen

- [localStorage](/de/docs/Web/API/Window/localStorage)
  - : Firefox 3.5 fügt Unterstützung für die Web Storage-Eigenschaft `localStorage` hinzu, die eine Möglichkeit bietet, Daten lokal auf dem Computer des Benutzers zu speichern.
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Firefox 3.5 unterstützt Web-Worker, um eine einfache Multi-Threading-Unterstützung in Webanwendungen zu ermöglichen.
- [Verwendung von Geolocation](/de/docs/Web/API/Geolocation_API)
  - : Firefox 3.5 unterstützt die Geolocation-API, die es Webanwendungen ermöglicht, Informationen über den aktuellen Standort des Benutzers zu erhalten, sofern ein Anbieter für diese Informationen installiert und aktiviert ist.
- [Auffindung von DOM-Elementen mithilfe von Selektoren](/de/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
  - : Die Selektoren-API ermöglicht es, ein Dokument abzufragen, um die Elemente zu finden, die einem bestimmten Auswahlkriterium entsprechen.
- [Mausgestenereignisse](https://web.archive.org/web/20210724051233/https://developer.mozilla.org/de/docs/Web/Events/Mouse_gesture_events)
  - : Firefox 3.5 unterstützt Mausgestenereignisse wie Trackpad-Wischen.
- [Das `NodeIterator`-Objekt](/de/docs/Web/API/NodeIterator)
  - : Das `NodeIterator`-Objekt bietet Unterstützung für das Durchlaufen der Liste der Knoten in einem DOM-Teilbaum.
- Das Ereignis `MozAfterPaint`
  - : Dieses neue DOM-Ereignis wird nach Aktualisierungen des Fenstermalens gesendet.
- Das Ereignis `MozMousePixelScroll`
  - : Dieses neue DOM-Ereignis ermöglicht die Erkennung von pixelbasierten Scroll-Rad-Ereignissen, anstelle von zeilenbasierten Scroll-Ereignissen.

#### Neue JavaScript-Funktionen

- [Neu in JavaScript 1.8.1](https://web.archive.org/web/20200805002842/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.1)
  - : Ein Überblick über alle Änderungen in JavaScript 1.8.1.
- [`Object.getPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
  - : Diese neue Methode gibt das Prototyp-Objekt eines angegebenen Objekts zurück.
- Verwendung von nativem JSON
  - : Firefox 3.5 bietet native Unterstützung für {{Glossary("JSON", "JSON")}}.
- Neue Trim-Methoden am String-Objekt
  - : Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt verfügt nun über die Methoden [`trim()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim), [`trimLeft()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) und [`trimRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd).

#### Netzwerke

- Zugriffskontrollen über Domänen für HTTP
  - : In Firefox 3.5 ist es nun möglich, dass HTTP-Anfragen, einschließlich derjenigen, die von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gemacht werden, domänenübergreifend funktionieren, wenn der Server dies unterstützt.
- [Fortschrittsereignisse für `XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
  - : Fortschrittsereignisse werden angeboten, um Erweiterungen das Überwachen des Fortschritts von Anfragen zu ermöglichen.
- Verbesserte Unterstützung für synchrones `XMLHttpRequest`
  - : [DOM Timeout](https://bugzil.la/340345) und [Input-Events](https://bugzil.la/333198) werden nun während eines synchronen `XMLHttpRequest` unterdrückt.
- Steuerung des DNS-Vorabrufs
  - : Firefox 3.5 bietet DNS-Vorabruf, bei dem die Domainnamen-Auflösung im Voraus für Links auf der aktuellen Seite durchgeführt wird, um Zeit zu sparen, wenn die Links tatsächlich geklickt werden. Dieser Artikel beschreibt, wie Sie Ihre Website so einstellen können, dass sie den Vorabruf deaktiviert oder anpasst, wie der Vorabruf funktioniert.

#### Neue Canvas-Funktionen

- [HTML 5 Text-API für `canvas`-Elemente](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Canvas-Elemente unterstützen nun die HTML 5 Text-API.
- [Schatteneffekte in einem `canvas`](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows)
  - : Canvas-Schatteneffekte werden nun unterstützt.
- [`createImageData()`](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object)
  - : Die Canvas-Methode `createImageData()` wird nun unterstützt, wodurch der Code explizit ein `ImageData`-Objekt erstellen kann, anstatt dies automatisch zu tun. Dies kann die Leistung anderer `ImageData`-Methoden verbessern, indem verhindert wird, dass das Objekt erstellt werden muss.
- `moz-opaque` Attribut
  - : Das Attribut [`moz-opaque`](/de/docs/Web/HTML/Reference/Elements/canvas#moz-opaque) wurde hinzugefügt, wodurch der Canvas wissen kann, ob Transparenz ein Faktor sein wird oder nicht. Wenn der Canvas weiß, dass keine Transparenz vorliegt, kann die Malleistung optimiert werden. Siehe auch [`HTMLCanvasElement.mozOpaque`](/de/docs/Web/API/HTMLCanvasElement/mozOpaque).

#### Neue SVG-Funktionen

- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
  - : Sie können nun SVG-Effekte auf HTML- und XHTML-Inhalte anwenden; dieser Artikel beschreibt, wie.

#### Verschiedene neue Funktionen

- [ICC-Farbkorrektur in Firefox](/de/docs/Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox)
  - : Firefox 3.5 unterstützt jetzt ICC-Farbkorrekturen für markierte Bilder.
- Das `defer`-Attribut wird jetzt für [`script`](/de/docs/Web/HTML/Reference/Elements/script)-Elemente unterstützt
  - : Dieses Attribut weist den Browser an, dass er die Seite weiterhin parsen und rendern kann, ohne auf das Ende der Skriptausführung zu warten.

### Weitere Verbesserungen

- Die Text-Knoten Eigenschaft [`wholeText`](/de/docs/Web/API/Text/wholeText) und die Methode `Text.replaceWholeText()` wurden implementiert.
- Die Eigenschaft [`element.children`](/de/docs/Web/API/Element/children) wurde hinzugefügt. Sie gibt eine _Sammlung_ von Kind-Elementen des gegebenen Elements zurück.
- Die Eigenschaft [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) wird nun unterstützt, um editierbare Elemente zu unterstützen.
- Die Element Traversal API wird nun vom DOM [Element](/de/docs/Web/API/Element) Objekt unterstützt.
- HTML-Dokumentknoten können jetzt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) geklont werden.
- Die nicht-standardisierte `getBoxObjectFor()` DOM-Methode wurde entfernt. Sie sollten [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) verwenden.
- Verschickte DOM-Ereignisse können jetzt erneut verschickt werden. Dies macht, dass Firefox 3.5 den Acid 3 Test 30 besteht.
- Es wurden Verbesserungen im Umgang mit DOM 2 Range vorgenommen.
- In nicht-Chrom-Umgebungen sind gefangene Objekte in Ausnahmen jetzt das tatsächlich geworfene Objekt anstelle eines [`XPConnect`](https://web.archive.org/web/20210423135742/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Language_bindings/XPConnect)-Wrappers, der das geworfene Objekt enthält.
- SVG-ID-Referenzen sind jetzt live.
- SVG-Filter funktionieren jetzt für `foreignObject`.
- Die Methode `GetSVGDocument()` wurde zu [`object`](/de/docs/Web/HTML/Reference/Elements/object) und [`iframe`](/de/docs/Web/HTML/Reference/Elements/iframe) Elementen für Kompatibilität hinzugefügt.
- Implizite Einstellung von Eigenschaften in Objekt- und Array-Initialisierern führt nicht mehr zu Setter-Ausführung in JavaScript.
- Die Variable `gDownloadLastDir.path` wurde in `gDownloadLastDir.file` umbenannt, da sie sich auf ein `nsIFile`, nicht auf einen Pfad bezieht.
- Die Variable `gDownloadLastDirPath` wurde in `gDownloadLastDirFile` umbenannt, da sie sich auf ein `nsIFile`, nicht auf einen Pfad bezieht.
- Ab Firefox 3.5 können Sie keine `data:` Bindungen mehr in Chrom-Paketen verwenden, die `XPCNativeWrapper`-Automatisierung erhalten.

### Für XUL- und Add-On-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Aktualisieren von Erweiterungen für Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Updating_extensions) beginnen, das einen hilfreichen Überblick über die Änderungen bietet, die Ihre Erweiterung betreffen können.

#### Neue Komponenten und Funktionalitäten

- [Unterstützung des privaten Modus beim Surfen](https://web.archive.org/web/20210620014429/https://developer.mozilla.org/de/docs/Archive/Mozilla/Supporting_private_browsing_mode)
  - : Firefox 3.5 bietet den privaten Modus, bei dem die Aktivitäten des Benutzers nicht aufgezeichnet werden. Erweiterungen können den privaten Modus unterstützen, indem sie sich an die in diesem Artikel angebotenen Richtlinien halten.
- [Sicherheitsänderungen in Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Security_changes)
  - : Dieser Artikel behandelt sicherheitsrelevante Änderungen in Firefox 3.5.
- [Themenänderungen in Firefox 3.5](https://web.archive.org/web/20191004004454/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_3.5)
  - : Dieser Artikel behandelt themenbezogene Änderungen in Firefox 3.5.
- Überwachen von WLAN-Zugangspunkten
  - : Code mit UniversalXPConnect-Berechtigungen kann nun die Liste der verfügbaren Zugangspunkte überwachen und Informationen über ihre SSIDs, MAC-Adressen und Signalstärke abrufen. Dies kann in Verbindung mit Geolocation genutzt werden, um einen WLAN-basierten Ortungsdienst anzubieten.

#### Wichtige Änderungen und Verbesserungen

- Das XUL `textbox`-Widget bietet jetzt einen `search`-Typ für die Verwendung als Suchfelder.
- Um das Ziehen und Ablegen von Tabs zwischen Fenstern zu unterstützen, verfügt das `browser`-Widget jetzt über eine `swapDocShells()`-Methode.
- Das `panel`-Element hat nun das `level`-Attribut erhalten; dieses gibt an, ob Panels über anderen Anwendungen oder nur über dem Fenster angezeigt werden, in dem sich das Panel befindet.
- XUL-Elemente unterstützen nun die Eigenschaften `clientHeight`, `clientWidth`, `scrollHeight` und `scrollWidth`.
- `keyset` enthält nun ein `disabled`-Attribut.
- Außerdem können `keyset`s nun mit der [`removeChild()`](/de/docs/Web/API/Node/removeChild)-Methode des Knotens entfernt werden.
- `mozIStorageStatement` wurde die `initialize()`-Methode entfernt; Verbraucher sollten stattdessen die `createStatement()`-Methode verwenden, um ein neues Statement-Objekt zu erhalten.
- Die Storage API bietet nun Unterstützung für asynchrone Anfragen.
- Das Interface `nsICookie2` zeigt nun die Zeit an, zu der Cookies erstellt wurden, in seinem neuen Attribut `creationTime`.
- Hinzugefügtes Flag zum `nsIProtocolHandler` (`URI_IS_LOCAL_RESOURCE`), das bei der Chrome-Registrierung geprüft wird, um sicherzustellen, dass ein Protokoll zur Registrierung erlaubt ist.
- Firefox sucht nun nach Plugins in `/usr/lib/mozilla/plugins` unter Linux, sowie in den zuvor unterstützten Verzeichnissen.
- Die Plugin-API wurde aktualisiert, um Unterstützung für den privaten Modus beim Surfen zu bieten; Sie können nun `NPN_GetValue()` verwenden, um den Status des privaten Modus beim Surfen mit der Variablen `NPNVprivateModeBool` abzufragen.

## Neue Funktionen für Endbenutzer

### Benutzererfahrung

- Standortbasiertes Surfen
  - : Wenn Sie es erlauben, kann Firefox 3.5 Informationen über Ihren aktuellen Standort mit Websites teilen. Firefox 3.5 kann Informationen über das Netzwerk, mit dem Sie verbunden sind, verwenden, um Ihren Standort zu teilen. Natürlich fragt er vorher nach Ihrer Erlaubnis, um Ihre Privatsphäre zu gewährleisten.
- Unterstützung für offene Audio- und Videodateien
  - : Firefox 3.5 unterstützt eingebettete Videos und Audios im offenen Ogg-Format sowie WAV für Audio. Keine Plugins, keine verwirrenden Fehlermeldungen darüber, dass etwas installiert werden muss, das auf Ihrer Plattform nicht verfügbar ist.
- Lokale Datenspeicherung
  - : Webanwendungen können jetzt die lokalen Speicherkapazitäten von Web Storage nutzen, um Daten auf Ihrem Computer zu speichern. Dies ist ideal für alles, von Website-Einstellungen bis zu komplexeren Daten.

### Sicherheit und Privatsphäre

- Privates Surfen
  - : Müssen Sie den Computer eines anderen verwenden? Schalten Sie den privaten Modus ein und nichts wird über Ihre Sitzung aufgezeichnet, einschließlich Cookies, Verlauf und anderer potenziell privater Informationen.
- Bessere Datenschutzkontrollen
  - : Das Datenschutz-Einstellungsfenster wurde komplett neu gestaltet, um den Benutzern mehr Kontrolle über ihre privaten Informationen zu geben. Benutzer können wählen, ob sie Informationen wie Verlauf, Cookies, Downloads und Formularfelder beibehalten oder verwerfen möchten. Darüber hinaus können Benutzer festlegen, ob der Verlauf und/oder Lesezeichen in den automatischen Vorschlägen der Adressleiste enthalten sein sollen, sodass private Webadressen nicht unerwartet beim Eingeben in die Adressleiste erscheinen.

### Leistung

- Schnellere JavaScript-Leistung
  - : JavaScript, das "J" in "AJAX", wird in Firefox 3.5 mit der neuen TraceMonkey JavaScript-Engine erheblich beschleunigt. Webanwendungen sind viel schneller als in Firefox 3.
- Schnellere Seitenrendering
  - : Webinhalte werden in Firefox 3.5 schneller gezeichnet, dank Technologien wie "spekulativem Parsen". Ihre Benutzer müssen nicht wissen, was das bedeutet, außer "es macht Dinge schneller zeichnen".

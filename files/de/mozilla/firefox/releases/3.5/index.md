---
title: Firefox 3.5 für Entwickler
slug: Mozilla/Firefox/Releases/3.5
l10n:
  sourceCommit: c01b393fbb6939f88cc98ac2a34df1a54be1edfd
---

{{FirefoxSidebar}}

[Firefox 3.5](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/3.5/releasenotes/) (_veröffentlicht am 30. Juni 2009_) führt eine Reihe neuer Funktionen ein sowie zusätzliche und verbesserte Unterstützung für eine Vielzahl von Webstandards. Dieser Artikel bietet eine umfangreiche Liste mit Links zu Artikeln, die die wichtigsten Verbesserungen abdecken.

## Neue Entwicklerfunktionen in Firefox 3.5

### Für Website- und Anwendungsentwickler

#### HTML 5 Unterstützung

- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Firefox 3.5 fügt Unterstützung für die HTML 5 [`audio`](/de/docs/Web/HTML/Reference/Elements/audio)- und [`video`](/de/docs/Web/HTML/Reference/Elements/video)-Elemente hinzu.
- Offline-Ressourcen in Firefox
  - : Firefox 3.5 unterstützt jetzt vollständig die HTML 5-Offline-Ressourcen-Spezifikation.
- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Die HTML 5 Drag and Drop API ermöglicht das Ziehen und Ablegen von Elementen innerhalb und zwischen Websites. Dies bietet auch eine einfachere API für die Verwendung durch Erweiterungen und auf Mozilla basierende Anwendungen.

#### Neu unterstützte CSS-Funktionen

- [Downloadbare Schriftarten Unterstützung](/de/docs/Web/CSS/@font-face)
  - : Die neue {{ cssxref("@font-face") }} @-Regel ermöglicht es Webseiten, herunterladbare Schriftarten bereitzustellen, sodass Seiten genau so dargestellt werden können, wie es der Seitenautor erwartet.
- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
  - : Firefox 3.5 unterstützt jetzt CSS-Media-Queries, die die Unterstützung für medienabhängige Stylesheets verbessern.
- {{ cssxref("::before") }} und {{ cssxref("::after") }} aktualisiert auf CSS 2.1
  - : Die `::before`- und `::after`-Pseudoelemente wurden auf vollständige CSS 2.1-Unterstützung aktualisiert, was die Unterstützung für die Eigenschaften `position`, `float`, `list-style-*` und einige `display`-Eigenschaften hinzufügt.
- `ch` Einheiten für Längen
  - : Die `ch`-Einheit kann jetzt überall dort verwendet werden, wo eine [Längeneinheit](/de/docs/Web/CSS/length#units) akzeptiert wird. `1ch` ist die Breite des Zeichens "0" (Null).
- {{ cssxref("opacity") }}
  - : Die `-moz-opacity`-Mozilla-Erweiterung zu CSS wurde zugunsten der Standard-`opacity`-Eigenschaft entfernt.
- {{ cssxref("text-shadow") }}
  - : Die `text-shadow`-Eigenschaft, die es Webinhalten erlaubt, Schatteneffekte auf Text und Textdekorationen anzuwenden, wird nun unterstützt.
- {{ cssxref("overflow-wrap") }}
  - : Diese neu unterstützte Eigenschaft ermöglicht es den Inhalten zu spezifizieren, ob Zeilen innerhalb von Wörtern gebrochen werden dürfen, um Überläufe zu verhindern, wenn eine sonst unbrechbare Zeichenkette zu lang ist, um in eine Zeile zu passen.
- `white-space`-Eigenschaft unterstützt den `pre-line`-Wert
  - : Die {{ cssxref("white-space") }}-Eigenschaft akzeptiert nun den `pre-line`-Wert.
- `-moz-box-shadow`, `-moz-border-image`, `-moz-column-rule`, `-moz-column-rule-width`, `-moz-column-rule-style`, `-moz-column-rule-color`
  - : Firefox 3.5 fügt Unterstützung für diese Mozilla-Erweiterungen zu CSS hinzu.
- Der {{ cssxref("color_value#Mozilla_Extensions","-moz-nativehyperlinktext") }} Farbwert
  - : Dieser neue Farbwert repräsentiert die Standardlinkfarbe des Benutzersystems.
- Die `-moz-window-shadow`-Eigenschaft und die `:-moz-system-metric(mac-graphite-theme)` Pseudoklasse
  - : Diese neuen CSS-Funktionen wurden zur Unterstützung von Themes hinzugefügt.
- Neue Werte für `-moz-appearance`
  - : Die Werte `-moz-win-glass` und `-moz-mac-unified-toolbar` wurden zu `-moz-appearance` hinzugefügt.
- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
  - : Firefox 3.5 unterstützt CSS-Transformationen. Siehe {{ cssxref("transform", "-moz-transform") }} und {{ cssxref("transform-origin", "-moz-transform-origin") }} für Details.
- {{ cssxref(":nth-child") }}, {{ cssxref(":nth-last-child") }}, {{ cssxref(":nth-of-type") }}, {{ cssxref(":nth-last-of-type") }}, {{ cssxref(":first-of-type") }}, {{ cssxref(":last-of-type") }}, {{ cssxref(":only-of-type") }}
  - : Diese Selektoren werden alle in Firefox 3.5 neu unterstützt.

#### Neue DOM-Funktionen

- [localStorage](/de/docs/Web/API/Web_Storage_API#localstorage)
  - : Firefox 3.5 fügt Unterstützung für die Web Storage `localStorage`-Eigenschaft hinzu, die es ermöglicht, Daten lokal auf dem Computer des Clients zu speichern.
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Firefox 3.5 unterstützt Web Worker, um eine einfache Multi-Threading-Unterstützung in Web-Anwendungen zu ermöglichen.
- [Verwendung von Geolocation](/de/docs/Web/API/Geolocation_API)
  - : Firefox 3.5 unterstützt die Geolocation API, die es Web-Anwendungen ermöglicht, Informationen über den aktuellen Standort des Benutzers zu erhalten, sofern ein Anbieter für diese Informationen installiert und aktiviert ist.
- [DOM-Elemente mit Selektoren lokalisieren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
  - : Die Selektoren-API ermöglicht das Abfragen eines Dokuments, um die Elemente zu finden, die einer bestimmten Auswahlregel entsprechen.
- [Mausgesten-Ereignisse](https://web.archive.org/web/20210724051233/https://developer.mozilla.org/de/docs/Web/Events/Mouse_gesture_events)
  - : Firefox 3.5 unterstützt Mausgesten-Ereignisse wie Trackpad-Gesten.
- [Das `NodeIterator`-Objekt](/de/docs/Web/API/NodeIterator)
  - : Das `NodeIterator`-Objekt unterstützt das Iterieren über die Liste der Knoten in einem DOM-Unterbaum.
- Das `MozAfterPaint`-Ereignis
  - : Dieses neue DOM-Ereignis wird nach Malaktualisierungen in Fenstern gesendet.
- Das `MozMousePixelScroll`-Ereignis
  - : Dieses neue DOM-Ereignis ermöglicht die Erkennung von pixel-basierten Mausrad-Scrollereignissen anstelle von linienbasierten Scrollereignissen.

#### Neue JavaScript-Funktionen

- [Neu in JavaScript 1.8.1](https://web.archive.org/web/20200805002842/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.1)
  - : Ein Überblick über alle Änderungen in JavaScript 1.8.1.
- [`Object.getPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
  - : Diese neue Methode gibt das Prototyp-Objekt eines angegebenen Objekts zurück.
- Verwendung von nativen JSON
  - : Firefox 3.5 unterstützt native {{Glossary("JSON", "JSON")}}.
- Neue Trim-Methoden auf dem String-Objekt
  - : Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt hat jetzt die Methoden [`trim()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim), [`trimLeft()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) und [`trimRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd).

#### Netzwerk

- Websiteübergreifende Zugriffssteuerungen für HTTP
  - : In Firefox 3.5 ist es nun möglich, dass HTTP-Anfragen, einschließlich derer, die durch [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gemacht werden, domainsübergreifend funktionieren, wenn der Server dies unterstützt.
- [Fortschrittsereignisse für `XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
  - : Fortschrittsereignisse werden nun angeboten, um Erweiterungen zu ermöglichen, den Fortschritt von Anfragen zu überwachen.
- Verbesserung der synchronen `XMLHttpRequest`-Unterstützung
  - : [DOM-Timeout](https://bugzil.la/340345) und [Eingabeereignisse](https://bugzil.la/333198) werden jetzt während einer synchronen `XMLHttpRequest` unterdrückt.
- Steuerung des DNS-Vorfetchings
  - : Firefox 3.5 bietet DNS-Vorfetching, bei dem die Domänennamenauflösung im Voraus für Links auf der aktuellen Seite durchgeführt wird, um Zeit zu sparen, wenn Links tatsächlich angeklickt werden. Dieser Artikel beschreibt, wie Sie Ihre Website anpassen können, um das Vorfetching zu deaktivieren oder zu steuern, wie das Vorfetching funktioniert.

#### Neue Canvas-Funktionen

- [HTML 5 Text-API für `canvas`-Elemente](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Canvas-Elemente unterstützen jetzt die HTML 5 Text-API.
- [Schatteneffekte in einem `canvas`](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows)
  - : Canvas-Schatteneffekte werden nun unterstützt.
- [`createImageData()`](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object)
  - : Die Canvas-Methode `createImageData()` wird jetzt unterstützt, wodurch Code speziell ein `ImageData`-Objekt erstellen kann, anstatt es automatisch erstellen zu müssen. Dies kann die Leistung anderer `ImageData`-Methoden verbessern, da sie das Objekt nicht selbst erstellen müssen.
- `moz-opaque` Attribut
  - : Das [`moz-opaque`](/de/docs/Web/HTML/Reference/Elements/canvas#moz-opaque)-Attribut wurde hinzugefügt, das dem Canvas mitteilt, ob Transluzenz eine Rolle spielt oder nicht. Wenn das Canvas weiß, dass keine Transluzenz vorhanden ist, kann die Zeichenleistung optimiert werden. Siehe auch [`HTMLCanvasElement.mozOpaque`](/de/docs/Web/API/HTMLCanvasElement/mozOpaque).

#### Neue SVG-Funktionen

- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
  - : Sie können nun SVG-Effekte auf HTML- und XHTML-Inhalte anwenden; dieser Artikel beschreibt, wie.

#### Verschiedene neue Funktionen

- [ICC-Farbkorrektur in Firefox](/de/docs/Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox)
  - : Firefox 3.5 unterstützt nun ICC-Farbkorrekturen für markierte Bilder.
- Das `defer`-Attribut wird jetzt auf [`script`](/de/docs/Web/HTML/Reference/Elements/script)-Elementen unterstützt
  - : Dieses Attribut gibt an, dass der Browser _eventuell_ fortfahren kann, die Seite zu analysieren und darzustellen, ohne darauf zu warten, dass das Skript die Ausführung beendet.

### Weitere Verbesserungen

- Die Eigenschaft [`wholeText`](/de/docs/Web/API/Text/wholeText) des Textknotens und die Methode `Text.replaceWholeText()` wurden implementiert.
- Die Eigenschaft [`element.children`](/de/docs/Web/API/Element/children) wurde hinzugefügt. Sie gibt eine _Sammlung_ von Kinderelementen des gegebenen Elements zurück.
- Die Eigenschaft [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) wird nun unterstützt, um editierbare Elemente zu unterstützen.
- Die Element Traversal API wird nun vom DOM-Objekt [Element](/de/docs/Web/API/Element) unterstützt.
- HTML-Dokumentknoten können nun mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) geklont werden.
- Die nicht standardisierte `getBoxObjectFor()` DOM-Methode wurde entfernt. Stattdessen sollten Sie [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) verwenden.
- Gesendete DOM-Ereignisse können jetzt erneut gesendet werden. Dies führt dazu, dass Firefox 3.5 den Acid 3 Test 30 besteht.
- Verbesserungen wurden beim DOM 2 Range-Handling vorgenommen.
- In Nicht-Chrome-Kontexten sind abgefangene Objekte in Ausnahmen nun das tatsächlich geworfene Objekt anstelle eines [`XPConnect`](https://web.archive.org/web/20210423135742/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Language_bindings/XPConnect)-Wrappers, der das geworfene Objekt enthält.
- SVG-ID-Referenzen sind jetzt live.
- SVG-Filter funktionieren jetzt für `foreignObject`.
- Die `GetSVGDocument()`-Methode wurde den [`object`](/de/docs/Web/HTML/Reference/Elements/object)- und [`iframe`](/de/docs/Web/HTML/Reference/Elements/iframe)-Elementen für die Kompatibilität hinzugefügt.
- Implizites Setzen von Eigenschaften in Objekt- und Array-Initialisierern führt nicht mehr zur Ausführung von Setzern in JavaScript.
- Die Variable `gDownloadLastDir.path` wurde zu `gDownloadLastDir.file` umbenannt, da sie sich auf eine `nsIFile` und nicht auf einen Pfad bezieht.
- Die Variable `gDownloadLastDirPath` wurde zu `gDownloadLastDirFile` umbenannt, da sie sich auf eine `nsIFile` und nicht auf einen Pfad bezieht.
- Ab Firefox 3.5 können Sie keine `data:`-Bindings mehr in Chrome-Paketen verwenden, die `XPCNativeWrapper`-Automatisierung erhalten.

### Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Aktualisieren von Erweiterungen für Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Updating_extensions) beginnen, das einen hilfreichen Überblick über Änderungen bietet, die Ihre Erweiterung betreffen könnten.

#### Neue Komponenten und Funktionen

- [Unterstützung des privaten Modus]https://web.archive.org/web/20191029190431/https://developer.mozilla.org/de/docs/Archive/Mozilla/Supporting_private_browsing_mode)
  - : Firefox 3.5 bietet den privaten Modus, der die Aktivitäten des Benutzers nicht aufzeichnet. Erweiterungen können den privaten Modus gemäß den in diesem Artikel angebotenen Richtlinien unterstützen.
- [Sicherheitsänderungen in Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Security_changes)
  - : Dieser Artikel behandelt sicherheitsrelevante Änderungen in Firefox 3.5.
- [Theme-Änderungen in Firefox 3.5](https://web.archive.org/web/20191004004454/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_3.5)
  - : Dieser Artikel behandelt theme-bezogene Änderungen in Firefox 3.5.
- Überwachen von WLAN-Zugangspunkten
  - : Code mit UniversalXPConnect-Berechtigungen kann nun die Liste der verfügbaren Zugangspunkte überwachen, Informationen über ihre SSIDs, MAC-Adressen und Signalstärke erhalten. Dies kann in Kombination mit Geolocation verwendet werden, um einen WLAN-basierten Ortungsdienst anzubieten.

#### Bemerkenswerte Änderungen und Verbesserungen

- Das XUL `textbox`-Widget bietet jetzt einen `search`-Typ, der als Suchfeld verwendet werden kann.
- Um das Ziehen und Ablegen von Tabs zwischen Fenstern zu unterstützen, hat das `browser`-Widget jetzt eine `swapDocShells()`-Methode.
- Das `panel`-Element wurde um das `level`-Attribut erweitert, das angibt, ob Panels über anderen Anwendungen oder nur über dem Fenster erscheinen, in dem sich das Panel befindet.
- XUL-Elemente unterstützen jetzt die Eigenschaften `clientHeight`, `clientWidth`, `scrollHeight` und `scrollWidth`.
- `keyset` enthält jetzt ein `disabled`-Attribut.
- Darüber hinaus können `keyset`-Elemente nun unter Verwendung der [`removeChild()`](/de/docs/Web/API/Node/removeChild)-Methode des Knotens entfernt werden.
- `mozIStorageStatement` hatte die Methode `initialize()` entfernt; Verbraucher sollten stattdessen die Methode `createStatement()` verwenden, um ein neues Statement-Objekt zu erhalten.
- Die Storage-API bietet jetzt Unterstützung für asynchrone Anfragen.
- Die `nsICookie2`-Schnittstelle zeigt nun die Zeit an, zu der Cookies in ihrem neuen `creationTime`-Attribut erstellt wurden.
- Zu `nsIProtocolHandler` wurde ein Flag hinzugefügt (`URI_IS_LOCAL_RESOURCE`), das während der Chrome-Registrierung überprüft wird, um sicherzustellen, dass ein Protokoll registriert werden darf.
- Firefox sucht nun auf Linux nach Plugins im Verzeichnis `/usr/lib/mozilla/plugins`, sowie in den zuvor unterstützten Verzeichnissen.
- Die Plugin-API wurde aktualisiert, um Unterstützung für den privaten Modus zu bieten; Sie können jetzt `NPN_GetValue()` verwenden, um den Status des privaten Modus mit der Variablen `NPNVprivateModeBool` abzufragen.

## Neue Funktionen für Endbenutzer

### Benutzererfahrung

- Standortabhängiges Browsen
  - : Wenn Sie dies erlauben, kann Firefox 3.5 Informationen über Ihren aktuellen Standort mit Websites teilen. Firefox 3.5 kann Informationen über das Netzwerk, mit dem Sie verbunden sind, verwenden, um Ihren Standort zu teilen. Natürlich fragt es um Erlaubnis, bevor es dies tut, um Ihre Privatsphäre zu gewährleisten.
- Unterstützung für offene Audio- und Videoformate
  - : Firefox 3.5 unterstützt eingebettete Videos und Audios in dem offenen Ogg-Format sowie WAV für Audio. Keine Plugins, keine verwirrenden Fehlermeldungen darüber, dass etwas installiert werden muss, was auf Ihrer Plattform sowieso nicht verfügbar ist.
- Lokale Datenspeicherung
  - : Web-Anwendungen können jetzt die lokalen Speicherkapazitäten von Web Storage nutzen, um Daten auf Ihrem Computer zu speichern. Das eignet sich hervorragend für alles, von Seiteneinstellungen bis hin zu komplexeren Daten.

### Sicherheit und Privatsphäre

- Privates Surfen
  - : Müssen Sie einen fremden Computer verwenden? Schalten Sie den privaten Modus ein, und es wird nichts über Ihre Sitzung aufgezeichnet, einschließlich Cookies, Verlauf und anderen potenziell privaten Informationen.
- Bessere Datenschutzkontrollen
  - : Das Datenschutz-Einstellungsfenster wurde vollständig überarbeitet, um den Benutzern mehr Kontrolle über ihre privaten Informationen zu geben. Benutzer können wählen, ob sie Verlauf, Cookies, Downloads und Formularfelderinformationen beibehalten oder verwerfen möchten. Darüber hinaus können Benutzer festlegen, ob sie Verlauf und/oder Lesezeichen in die automatischen Vorschläge der Adressleiste einbeziehen möchten, sodass private Webadressen beim Tippen in die Adressleiste nicht unerwartet auftreten.

### Leistung

- Schnellere JavaScript-Leistung
  - : Die JavaScript-Leistung, das „J“ in „AJAX“, wird in Firefox 3.5 durch die neue JavaScript-Engine TraceMonkey erheblich beschleunigt. Web-Anwendungen sind viel schneller als in Firefox 3.
- Schnellere Seitendarstellung
  - : Web-Inhalte werden in Firefox 3.5 dank Technologien wie „spekulativen Parsings“ schneller gezeichnet. Ihre Benutzer müssen nur wissen, dass es Dinge schneller darstellt.

## Siehe auch

{{Firefox_for_developers}}

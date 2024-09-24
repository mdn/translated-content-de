---
title: Firefox 3.5 für Entwickler
slug: Mozilla/Firefox/Releases/3.5
l10n:
  sourceCommit: e099e74fe5c09c46f0dfe044894692721a713d29
---

{{FirefoxSidebar}}

[Firefox 3.5](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/3.5/releasenotes/) (_veröffentlicht am 30. Juni 2009_) führt eine Reihe neuer Funktionen ein sowie zusätzliche und verbesserte Unterstützung für eine Vielzahl von Webstandards. Dieser Artikel bietet eine umfangreiche Liste mit Links zu Artikeln, die die wichtigsten Verbesserungen behandeln.

## Neue Entwicklerfunktionen in Firefox 3.5

### Für Website- und Anwendungsentwickler

#### HTML 5 Unterstützung

- [Verwendung von Audio und Video](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : Firefox 3.5 fügt Unterstützung für die HTML 5 [`audio`](/de/docs/Web/HTML/Element/audio) und [`video`](/de/docs/Web/HTML/Element/video) Elemente hinzu.
- Offline-Ressourcen in Firefox
  - : Firefox 3.5 unterstützt nun vollständig die HTML 5-Spezifikation für Offline-Ressourcen.
- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Die HTML 5 Drag and Drop API ermöglicht die Unterstützung für das Ziehen und Ablegen von Elementen innerhalb und zwischen Websites. Dies bietet auch eine einfachere API für die Nutzung durch Erweiterungen und Mozilla-basierte Anwendungen.

#### Neu unterstützte CSS-Funktionen

- [Unterstützung von herunterladbaren Schriften](/de/docs/Web/CSS/@font-face)
  - : Die neue {{ cssxref("@font-face") }} @Regel erlaubt es Webseiten, herunterladbare Schriften bereitzustellen, sodass Websites genau so dargestellt werden können, wie es der Seitenautor erwartet.
- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
  - : Firefox 3.5 unterstützt nun CSS-Medienabfragen, die die Unterstützung für medienabhängige Stylesheets verbessern.
- {{ cssxref("::before") }} und {{ cssxref("::after") }} aktualisiert auf CSS 2.1
  - : Die `::before` und `::after` Pseudoelemente wurden auf volle CSS 2.1 Unterstützung aktualisiert und unterstützen nun die Eigenschaften `position`, `float`, `list-style-*` und einige `display` Eigenschaften.
- `ch` Einheiten für Längenangabe
  - : Die `ch` Einheit kann nun überall dort verwendet werden, wo eine [Längeneinheit](/de/docs/Web/CSS/length#units) akzeptiert wird. `1ch` ist die Breite des Zeichens "0" (Null).
- {{ cssxref("opacity") }}
  - : Die Mozilla-Erweiterung `-moz-opacity` für CSS wurde zugunsten der Standard-Eigenschaft `opacity` entfernt.
- {{ cssxref("text-shadow") }}
  - : Die `text-shadow` Eigenschaft, die es ermöglicht, Schatteneffekte auf Text und Textdekorationen anzuwenden, wird nun unterstützt.
- {{ cssxref("overflow-wrap") }}
  - : Diese neu unterstützte Eigenschaft erlaubt es, anzugeben, ob Zeilen innerhalb von Wörtern gebrochen werden dürfen, um Überläufe zu vermeiden, wenn eine ansonsten untrennbare Zeichenfolge zu lang ist, um auf eine Zeile zu passen.
- `white-space` Eigenschaft unterstützt den Wert `pre-line`
  - : Die Eigenschaft {{ cssxref("white-space") }} akzeptiert nun den Wert `pre-line`.
- `-moz-box-shadow`

  `-moz-border-image`

  `-moz-column-rule`

  `-moz-column-rule-width`

  `-moz-column-rule-style`

  `-moz-column-rule-color`

  - : Firefox 3.5 unterstützt diese Mozilla-Erweiterungen für CSS.

- Der {{ cssxref("color_value#Mozilla_Extensions","-moz-nativehyperlinktext") }} Farbwert
  - : Dieser neue Farbwert repräsentiert die Standard-Hyperlinkfarbe des Benutzer-Systems.
- Die `-moz-window-shadow` Eigenschaft und die Pseudo-Klasse `:-moz-system-metric(mac-graphite-theme)`
  - : Diese neuen CSS-Funktionen wurden hinzugefügt, um die Gestaltung zu erleichtern.
- Neue Werte für `-moz-appearance`
  - : Die Werte `-moz-win-glass` und `-moz-mac-unified-toolbar` wurden zu `-moz-appearance` hinzugefügt.
- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
  - : Firefox 3.5 unterstützt CSS-Transformationen. Siehe {{ cssxref("transform", "-moz-transform") }} und {{ cssxref("transform-origin", "-moz-transform-origin") }} für Details.
- {{ cssxref(":nth-child") }}

  {{ cssxref(":nth-last-child") }}

  {{ cssxref(":nth-of-type") }}

  {{ cssxref(":nth-last-of-type") }}

  {{ cssxref(":first-of-type") }}

  {{ cssxref(":last-of-type") }}

  {{ cssxref(":only-of-type") }}

  - : Diese Selektoren sind alle neu in Firefox 3.5 unterstützt.

#### Neue DOM-Funktionen

- [localStorage](/de/docs/Web/API/Web_Storage_API#localstorage)
  - : Firefox 3.5 fügt Unterstützung für die Web Storage `localStorage` Eigenschaft hinzu, die eine Möglichkeit bietet, dass Webanwendungen Daten lokal auf dem Computer des Kunden speichern.
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Firefox 3.5 unterstützt Web-Worker, um eine einfache Multi-Thread-Unterstützung in Webanwendungen zu ermöglichen.
- [Verwendung der Geolocation](/de/docs/Web/API/Geolocation_API)
  - : Firefox 3.5 unterstützt die Geolocation API, die es Webanwendungen ermöglicht, Informationen über den aktuellen Standort des Benutzers zu erhalten, wenn ein Anbieter für diese Informationen installiert und aktiviert ist.
- [Lokalisierung von DOM-Elementen mit Selektoren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
  - : Die Selektoren-API erlaubt das Abfragen eines Dokuments, um die Elemente zu finden, die einem bestimmten Auswahlregel entsprechen.
- [Mausgestenereignisse](https://web.archive.org/web/20210724051233/https://developer.mozilla.org/de/docs/Web/Events/Mouse_gesture_events)
  - : Firefox 3.5 unterstützt Mausgestenereignisse wie Trackpad-Wischbewegungen.
- [Das `NodeIterator` Objekt](/de/docs/Web/API/NodeIterator)
  - : Das `NodeIterator` Objekt bietet Unterstützung für das Durchlaufen der Liste der Knoten in einem DOM-Unterbaum.
- Das `MozAfterPaint` Ereignis
  - : Dieses neue DOM-Ereignis wird nach Malaktualisierungen in Fenstern gesendet.
- Das `MozMousePixelScroll` Ereignis
  - : Dieses neue DOM-Ereignis ermöglicht die Erkennung von pixelbasierten Scrollrad-Ereignissen der Maus anstelle von linienbasierten Scroll-Ereignissen.

#### Neue JavaScript-Funktionen

- [Neu in JavaScript 1.8.1](https://web.archive.org/web/20200805002842/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.1)
  - : Eine Übersicht aller Änderungen in JavaScript 1.8.1.
- [`Object.getPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
  - : Diese neue Methode gibt das Prototyp eines angegebenen Objekts zurück.
- Verwendet den nativen JSON
  - : Firefox 3.5 hat native Unterstützung für [JSON](/de/docs/Glossary/JSON).
- Neue Trim-Methoden für das String-Objekt
  - : Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) Objekt hat jetzt die Methoden [`trim()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim), [`trimLeft()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) und [`trimRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd).

#### Netzwerk

- Zugriffssteuerungen über mehrere Standorte für HTTP
  - : In Firefox 3.5 ist es nun möglich, dass HTTP-Anfragen, einschließlich jener, die mittels [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gemacht werden, über Domänen hinweg arbeiten, wenn der Server dies unterstützt.
- [Fortschrittsereignisse für `XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
  - : Fortschrittsereignisse werden nun angeboten, um Erweiterungen das Überwachen des Fortschritts von Anfragen zu ermöglichen.
- Verbesserte Unterstützung für synchrones `XMLHttpRequest`
  - : [DOM Timeout](https://bugzil.la/340345) und [Input Events](https://bugzil.la/333198) werden während einer synchronen `XMLHttpRequest` jetzt unterdrückt.
- Steuerung des DNS-Präfetchings
  - : Firefox 3.5 bietet DNS-Präfetching, wobei die Auflösung von Domainnamen im Voraus für auf der aktuellen Seite enthaltene Links durchgeführt wird, um Zeit zu sparen, wenn die Links tatsächlich angeklickt werden. Dieser Artikel beschreibt, wie Sie Ihre Website anpassen können, um Präfetching zu deaktivieren oder anzupassen.

#### Neue Zeichenflächenfunktionen

- [HTML 5 Text-API für `canvas` Elemente](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Zeichenflächenelemente unterstützen nun die HTML 5 Text-API.
- [Schatteneffekte in einer `canvas`](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows)
  - : Schatteneffekte für Zeichenflächen werden nun unterstützt.
- [`createImageData()`](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object)
  - : Die `createImageData()` Methode der Zeichenfläche wird jetzt unterstützt, wodurch der Code speziell ein `ImageData` Objekt erstellen kann, anstatt es automatisch erstellen zu lassen. Dies kann die Leistung anderer `ImageData` Methoden verbessern, indem sie verhindert, dass sie das Objekt erstellen müssen.
- `moz-opaque` Attribut
  - : Das [`moz-opaque`](/de/docs/Web/HTML/Element/canvas#moz-opaque) Attribut wurde hinzugefügt, das der Zeichenfläche mitteilt, ob Transparenz eine Rolle spielen wird oder nicht. Wenn die Zeichenfläche weiß, dass keine Transparenz vorliegt, kann die Malleistung optimiert werden. Siehe auch {{domxref("HTMLCanvasElement.mozOpaque")}}.

#### Neue SVG-Funktionen

- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
  - : Sie können nun SVG-Effekte auf HTML und XHTML-Inhalte anwenden; dieser Artikel beschreibt, wie.

#### Verschiedene neue Funktionen

- [ICC-Farbkorrektur in Firefox](/de/docs/Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox)
  - : Firefox 3.5 unterstützt jetzt ICC-Farbkorrektur für getaggte Bilder.
- Das `defer` Attribut wird jetzt bei [`script`](/de/docs/Web/HTML/Element/script) Elementen unterstützt
  - : Dieses Attribut zeigt dem Browser an, dass er die Seite weiter analysieren und rendern kann, ohne darauf zu warten, dass das Skript die Ausführung beendet.

### Weitere Verbesserungen

- Die [`wholeText`](/de/docs/Web/API/Text/wholeText) Eigenschaft und die `Text.replaceWholeText()` Methode des Textknotens wurden implementiert.
- Die Eigenschaft [`element.children`](/de/docs/Web/API/Element/children) wurde hinzugefügt. Sie gibt eine _Sammlung_ von Kindelementen des angegebenen Elements zurück.
- Die Eigenschaft {{domxref("HTMLElement.contentEditable")}} wird jetzt unterstützt, um bearbeitbare Elemente zu unterstützen.
- Die API für Elementdurchlauf wird jetzt vom DOM [Element](/de/docs/Web/API/Element) Objekt unterstützt.
- HTML-Dokumentknoten können nun mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) geklont werden.
- Die nicht standardisierte `getBoxObjectFor()` DOM-Methode wurde entfernt. Sie sollten stattdessen [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) verwenden.
- Versandte DOM-Ereignisse können nun erneut versandt werden. Dies macht Firefox 3.5 den Acid 3 Test 30 bestehen.
- Verbesserungen bei der Handhabung von DOM 2 Range.
- In Nicht-Chrome-Scopes sind abgefangene Objekte in Ausnahmen nun das tatsächlich geworfene Objekt anstelle eines [`XPConnect`](https://web.archive.org/web/20210423135742/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Language_bindings/XPConnect) Wrappers, das das geworfene Objekt enthält.
- SVG-ID-Referenzen sind jetzt live.
- SVG-Filter funktionieren nun für `foreignObject`.
- Die Methode `GetSVGDocument()` wurde zu [`object`](/de/docs/Web/HTML/Element/object) und [`iframe`](/de/docs/Web/HTML/Element/iframe) Elementen hinzugefügt, um die Kompatibilität zu gewährleisten.
- Implizite Einstellung von Eigenschaften in Objekt- und Array-Initialisierern führt nicht mehr zur Ausführung von Setzern in JavaScript.
- Die Variable `gDownloadLastDir.path` wurde in `gDownloadLastDir.file` umbenannt, da sie sich auf ein `nsIFile` und keinen Pfad bezieht.
- Die Variable `gDownloadLastDirPath` wurde in `gDownloadLastDirFile` umbenannt, da sie sich auf ein `nsIFile` und keinen Pfad bezieht.
- Ab Firefox 3.5 können Sie keine `data:` Bindings mehr in Chrome-Paketen verwenden, die `XPCNativeWrapper` Automatisierung erhalten.

### Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Aktualisierung von Erweiterungen für Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Updating_extensions) beginnen, das einen hilfreichen Überblick über Änderungen bietet, die Ihre Erweiterung betreffen könnten.

#### Neue Komponenten und Funktionen

- [Unterstützung des privaten Surfmodus](https://web.archive.org/web/20191029190431/https://developer.mozilla.org/de/docs/Archive/Mozilla/Supporting_private_browsing_mode)
  - : Firefox 3.5 bietet den Privaten Surfmodus, der die Aktivitäten des Benutzers nicht aufzeichnet. Erweiterungen können den privaten Surfmodus unterstützen, indem sie die in diesem Artikel angebotenen Richtlinien befolgen.
- [Sicherheitsänderungen in Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Security_changes)
  - : Dieser Artikel behandelt sicherheitsbezogene Änderungen in Firefox 3.5.
- [Änderungen der Themes in Firefox 3.5](https://web.archive.org/web/20191004004454/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_3.5)
  - : Dieser Artikel behandelt themenbezogene Änderungen in Firefox 3.5.
- Überwachung von Wi-Fi-Zugangspunkten
  - : Code mit UniversalXPConnect-Berechtigungen kann nun die Liste der verfügbaren Zugangspunkte überwachen und Informationen über ihre SSIDs, MAC-Adressen und Signalstärken erhalten. Dies kann mit Geolocation kombiniert werden, um einen Wi-Fi-basierten Standortdienst anzubieten.

#### Wichtige Änderungen und Verbesserungen

- Das XUL `textbox` Widget bietet jetzt einen `search` Typ, um als Suchfelder verwendet zu werden.
- Um das Ziehen und Ablegen von Tabs zwischen Fenstern zu unterstützen, verfügt das `browser` Widget nun über eine `swapDocShells()` Methode.
- Dem `panel` Element wurde das `level` Attribut hinzugefügt; dieses gibt an, ob Panels über anderen Anwendungen oder nur über dem Fenster erscheinen, in dem sich das Panel befindet.
- XUL-Elemente unterstützen nun die Eigenschaften `clientHeight`, `clientWidth`, `scrollHeight` und `scrollWidth`.
- `keyset` enthält jetzt ein `disabled` Attribut.
- Darüber hinaus können `keyset`s jetzt mit der Methode [`removeChild()`](/de/docs/Web/API/Node/removeChild) des Knotens entfernt werden.
- `mozIStorageStatement` hatte die Methode `initialize()` entfernt; Verbraucher sollten stattdessen die Methode `createStatement()` verwenden, um ein neues Anweisung-Objekt zu erhalten.
- Die Storage-API bietet jetzt Unterstützung für asynchrone Anfragen.
- Das `nsICookie2` Interface gibt jetzt die Zeit an, zu der Cookies in ihrem neuen `creationTime` Attribut erstellt wurden.
- Ein Flag wurde `nsIProtocolHandler` (`URI_IS_LOCAL_RESOURCE`) hinzugefügt, das während der Chrome-Registrierung überprüft wird, um sicherzustellen, dass ein Protokoll registriert werden darf.
- Firefox sucht nun nach Plugins in `/usr/lib/mozilla/plugins` auf Linux sowie in den zuvor unterstützten Standorten.
- Die Plugin-API wurde aktualisiert, um den privaten Surfmodus zu unterstützen; Sie können jetzt `NPN_GetValue()` verwenden, um den Status des privaten Surfmodus mit der Variablen `NPNVprivateModeBool` abzufragen.

## Neue Funktionen für Endbenutzer

### Benutzererfahrung

- Standortsensitives Browsen
  - : Wenn Sie möchten, dürfen Sie Firefox 3.5 erlauben, Informationen über Ihren aktuellen Standort mit Websites zu teilen. Firefox 3.5 kann Informationen über das Netzwerk, mit dem Sie verbunden sind, verwenden, um Ihren Standort zu teilen. Selbstverständlich fragt es Sie vorher um Erlaubnis, um Ihre Privatsphäre zu gewährleisten.
- Unterstützung für offene Audio- und Videodateien
  - : Firefox 3.5 unterstützt eingebettetes Video und Audio im offenen Ogg-Format sowie WAV für Audio. Keine Plugins, keine verwirrenden Fehlermeldungen, die darauf hinweisen, dass etwas installiert werden muss, das auf Ihrer Plattform ohnehin nicht verfügbar ist.
- Lokale Datenspeicherung
  - : Webanwendungen können jetzt die lokalen Speicherungskapazitäten von Web Storage nutzen, um Daten auf Ihrem Computer zu speichern. Das ist großartig für alles, von Website-Einstellungen bis hin zu komplexeren Daten.

### Sicherheit und Datenschutz

- Privates Surfen
  - : Müssen Sie den Computer einer anderen Person verwenden? Schalten Sie den Privaten Surfmodus ein und nichts wird über Ihre Sitzung aufgezeichnet, einschließlich Cookies, Verlauf und anderer potenziell privater Informationen.
- Bessere Datenschutzeinstellungen
  - : Die Datenschutz-Einstellungsseite wurde vollständig neu gestaltet, um Benutzern mehr Kontrolle über ihre privaten Informationen zu bieten. Benutzer können wählen, ob sie alles einschließlich Verlaufsinformationen, Cookies, Downloads und Formularfelder beibehalten oder verwerfen möchten. Außerdem können Benutzer angeben, ob sie den Verlauf und/oder Lesezeichen in den automatisierten Vorschlägen der Adressleiste einbeziehen möchten, damit private Webadressen nicht unerwartet beim Eintippen in die Adressleiste auftauchen.

### Leistung

- Schnellere JavaScript-Leistung
  - : JavaScript, das "J" in "AJAX", wird in Firefox 3.5 mit der neuen TraceMonkey-JavaScript-Engine dramatisch beschleunigt. Webanwendungen sind viel schneller als in Firefox 3.
- Schnellere Seitendarstellung
  - : Webinhalte werden in Firefox 3.5 dank Technologien wie "spekulativem Parsen" schneller gezeichnet. Ihre Benutzer müssen nicht wissen, was das bedeutet, außer "es macht Dinge schneller sichtbar".

## Siehe auch

{{Firefox_for_developers}}

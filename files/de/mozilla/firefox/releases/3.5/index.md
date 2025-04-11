---
title: Firefox 3.5 für Entwickler
slug: Mozilla/Firefox/Releases/3.5
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

[Firefox 3.5](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/3.5/releasenotes/) (_veröffentlicht am 30. Juni 2009_) führt eine Reihe neuer Funktionen ein sowie zusätzliche und verbesserte Unterstützung für eine Vielzahl von Webstandards. Dieser Artikel bietet eine umfangreiche Liste mit Links zu Artikeln, die die wichtigsten Verbesserungen behandeln.

## Neue Entwicklerfunktionen in Firefox 3.5

### Für Website- und Anwendungsentwickler

#### HTML 5 Unterstützung

- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Firefox 3.5 fügt Unterstützung für die HTML 5-Elemente [`audio`](/de/docs/Web/HTML/Reference/Elements/audio) und [`video`](/de/docs/Web/HTML/Reference/Elements/video) hinzu.
- Offline-Ressourcen in Firefox
  - : Firefox 3.5 unterstützt nun vollständig die HTML 5-Spezifikation für Offline-Ressourcen.
- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Die HTML 5 Drag-and-Drop-API ermöglicht das Ziehen und Ablegen von Elementen innerhalb und zwischen Websites. Dies bietet auch eine einfachere API für Erweiterungen und auf Mozilla basierende Anwendungen.

#### Neu unterstützte CSS-Funktionen

- [Unterstützung für herunterladbare Schriftarten](/de/docs/Web/CSS/@font-face)
  - : Die neue {{ cssxref("@font-face") }} @Regel erlaubt es Webseiten, herunterladbare Schriftarten bereitzustellen, sodass Seiten genau so dargestellt werden können, wie der Seitenautor es vorgesehen hat.
- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
  - : Firefox 3.5 unterstützt nun CSS Media Queries, die die Unterstützung für medienabhängige Stylesheets verbessern.
- {{ cssxref("::before") }} und {{ cssxref("::after") }} wurden auf CSS 2.1 aktualisiert
  - : Die Pseudoelemente `::before` und `::after` wurden auf volle CSS 2.1-Unterstützung aktualisiert, einschließlich der Unterstützung für die Eigenschaften `position`, `float`, `list-style-*` und einiger `display`-Eigenschaften.
- `ch` Einheiten für Längen
  - : Die `ch` Einheit kann jetzt überall verwendet werden, wo eine [Längeneinheit](/de/docs/Web/CSS/length#units) akzeptiert wird. `1ch` ist die Breite des Zeichens "0" (Null).
- {{ cssxref("opacity") }}
  - : Die Mozilla-Erweiterung `-moz-opacity` zu CSS wurde zugunsten der standardisierten Eigenschaft `opacity` entfernt.
- {{ cssxref("text-shadow") }}
  - : Die Eigenschaft `text-shadow`, die es Webinhalten erlaubt, Schatteneffekte auf Text und Textdekorationen anzuwenden, wird jetzt unterstützt.
- {{ cssxref("overflow-wrap") }}
  - : Diese neu unterstützte Eigenschaft ermöglicht es Inhalten anzugeben, ob Zeilen innerhalb von Wörtern gebrochen werden dürfen, um Überlauf zu verhindern, wenn ein ansonsten nicht trennbares Zeichenfolgenstück zu lang ist, um in eine Zeile zu passen.
- Die `white-space` Eigenschaft unterstützt den Wert `pre-line`
  - : Die Eigenschaft {{ cssxref("white-space") }} akzeptiert nun den Wert `pre-line`.
- `-moz-box-shadow`

  `-moz-border-image`

  `-moz-column-rule`

  `-moz-column-rule-width`

  `-moz-column-rule-style`

  `-moz-column-rule-color`

  - : Firefox 3.5 fügt Unterstützung für diese Mozilla-Erweiterungen zu CSS hinzu.

- Der {{ cssxref("color_value#Mozilla_Extensions","-moz-nativehyperlinktext") }} Farbwert
  - : Dieser neue Farbwert repräsentiert die Standard-Hyperlinkfarbe des Systems des Nutzers.
- Die Eigenschaft `-moz-window-shadow` und die Pseudoklasse `:-moz-system-metric(mac-graphite-theme)`
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

  - : Diese Selektoren werden alle neu in Firefox 3.5 unterstützt.

#### Neue DOM-Funktionen

- [localStorage](/de/docs/Web/API/Web_Storage_API#localstorage)
  - : Firefox 3.5 fügt Unterstützung für die `localStorage`-Eigenschaft des Web Storage hinzu, die eine Möglichkeit bietet, Daten lokal auf dem Computer des Nutzers zu speichern.
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Firefox 3.5 unterstützt Web-Worker, um eine einfache Unterstützung für Multithreading in Webanwendungen zu ermöglichen.
- [Verwendung von Geolocation](/de/docs/Web/API/Geolocation_API)
  - : Firefox 3.5 unterstützt die Geolocation-API, die es Webanwendungen ermöglicht, Informationen über den aktuellen Standort des Nutzers zu erhalten, wenn ein Anbieter für diese Informationen installiert und aktiviert ist.
- [Lokalisierung von DOM-Elementen mittels Selektoren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
  - : Die Selektoren-API ermöglicht es, ein Dokument abzufragen, um die Elemente zu finden, die mit einer gegebenen Selektionsregel übereinstimmen.
- [Mouse Gesture Events](https://web.archive.org/web/20210724051233/https://developer.mozilla.org/de/docs/Web/Events/Mouse_gesture_events)
  - : Firefox 3.5 unterstützt Mausgestenereignisse wie Trackpad-Wischbewegungen.
- [Das `NodeIterator` Objekt](/de/docs/Web/API/NodeIterator)
  - : Das `NodeIterator`-Objekt bietet Unterstützung für das Durchlaufen der Liste der Knoten in einem DOM-Teilbaum.
- Das `MozAfterPaint` Event
  - : Dieses neue DOM-Ereignis wird nach Updates zur Darstellung in Fenstern gesendet.
- Das `MozMousePixelScroll` Event
  - : Dieses neue DOM-Ereignis erlaubt die Erkennung von pixelbasierten Mausradscrollereignissen anstelle von linienbasierten Scrollereignissen.

#### Neue JavaScript-Funktionen

- [Neu in JavaScript 1.8.1](https://web.archive.org/web/20200805002842/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.1)
  - : Ein Überblick über alle Änderungen in JavaScript 1.8.1.
- [`Object.getPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
  - : Diese neue Methode gibt das Prototyp-Objekt eines angegebenen Objekts zurück.
- Verwendung von nativen JSON
  - : Firefox 3.5 unterstützt nativ {{Glossary("JSON", "JSON")}}.
- Neue Trim-Methoden am String-Objekt
  - : Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt verfügt nun über die Methoden [`trim()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim), [`trimLeft()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) und [`trimRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd).

#### Netzwerke

- Domainsübergreifende Zugriffssteuerungen für HTTP
  - : In Firefox 3.5 ist es jetzt möglich, dass HTTP-Anfragen, einschließlich derjenigen, die durch [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gestellt werden, domänenübergreifend funktionieren, wenn der Server dies unterstützt.
- [Fortschrittsereignisse für `XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
  - : Fortschrittsereignisse werden nun angeboten, um Erweiterungen zu ermöglichen, den Fortschritt von Anfragen zu überwachen.
- Verbesserte synchrone Unterstützung für `XMLHttpRequest`
  - : [DOM-Timeouts](https://bugzil.la/340345) und [Eingabeereignisse](https://bugzil.la/333198) werden nun während synchroner `XMLHttpRequest` unterdrückt.
- Kontrolle der DNS-Vorabauflösung
  - : Firefox 3.5 bietet die DNS-Vorabauflösung, bei der die Auflösung von Domainnamen im Voraus für Links durchgeführt wird, die auf der aktuellen Seite enthalten sind, um Zeit zu sparen, wenn die Links tatsächlich angeklickt werden. Dieser Artikel beschreibt, wie Sie Ihre Webseite so einstellen können, dass die Vorabauflösung deaktiviert wird oder wie Sie die Vorabauflösung steuern können.

#### Neue Canvas-Funktionen

- [HTML 5 Text-API für `canvas`-Elemente](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Canvas-Elemente unterstützen nun die HTML 5 Text-API.
- [Schatteneffekte in einem `canvas`](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows)
  - : Canvas Schatteneffekte werden jetzt unterstützt.
- [`createImageData()`](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object)
  - : Die Canvas-Methode `createImageData()` wird jetzt unterstützt, wodurch es ermöglicht wird, gezielt ein `ImageData`-Objekt zu erstellen, anstatt dies automatisch geschehen zu lassen. Dies kann die Leistung anderer `ImageData`-Methoden verbessern, indem verhindert wird, dass das Objekt erstellt werden muss.
- Das `moz-opaque`-Attribut
  - : Das [`moz-opaque`](/de/docs/Web/HTML/Reference/Elements/canvas#moz-opaque) Attribut wurde hinzugefügt, was dem Canvas mitteilt, ob Transparenz eine Rolle spielt oder nicht. Wenn das Canvas weiß, dass keine Transparenz besteht, kann die Malleistung optimiert werden. Siehe auch [`HTMLCanvasElement.mozOpaque`](/de/docs/Web/API/HTMLCanvasElement/mozOpaque).

#### Neue SVG-Funktionen

- [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
  - : Sie können nun SVG-Effekte auf HTML und XHTML-Inhalte anwenden. Dieser Artikel beschreibt, wie.

#### Verschiedene neue Funktionen

- [ICC-Farbkorrektur in Firefox](/de/docs/Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox)
  - : Firefox 3.5 unterstützt nun ICC-Farbkorrektur für getaggte Bilder.
- Das `defer`-Attribut wird jetzt auf [`script`](/de/docs/Web/HTML/Reference/Elements/script)-Elementen unterstützt
  - : Dieses Attribut zeigt dem Browser an, dass er _eventuell_ die Seite weiter parsen und darstellen kann, ohne darauf zu warten, dass das Skript abgeschlossen ist.

### Andere Verbesserungen

- Die Eigenschaft [`wholeText`](/de/docs/Web/API/Text/wholeText) des Textknotens und die Methode `Text.replaceWholeText()` wurden implementiert.
- Die Eigenschaft [`element.children`](/de/docs/Web/API/Element/children) wurde hinzugefügt. Sie gibt eine _Sammlung_ von Kindelementen des angegebenen Elements zurück.
- Die Eigenschaft [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) wird jetzt unterstützt, um editierbare Elemente zu unterstützen.
- Die Element-Traversal-API wird jetzt vom DOM [Element](/de/docs/Web/API/Element)-Objekt unterstützt.
- HTML-Dokumentknoten können jetzt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) geklont werden.
- Die nicht standardisierte DOM-Methode `getBoxObjectFor()` wurde entfernt. Sie sollten stattdessen [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) verwenden.
- Versendete DOM-Ereignisse können jetzt erneut versendet werden. Dies lässt Firefox 3.5 den Acid 3 Test 30 bestehen.
- Verbesserungen wurden in der DOM 2-Range-Verarbeitung vorgenommen.
- Im Nicht-Chrom-Bereich sind gefangene Objekte in Ausnahmen nun das tatsächlich geworfene Objekt anstelle eines [`XPConnect`](https://web.archive.org/web/20210423135742/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Language_bindings/XPConnect)-Wrappers, der das geworfene Objekt enthält.
- SVG-ID-Referenzen sind jetzt live.
- SVG-Filter funktionieren jetzt für `foreignObject`.
- Die Methode `GetSVGDocument()` wurde zur Kompatibilität zu [`object`](/de/docs/Web/HTML/Reference/Elements/object)- und [`iframe`](/de/docs/Web/HTML/Reference/Elements/iframe)-Elementen hinzugefügt.
- Das implizite Setzen von Eigenschaften in Objekt- und Array-Initialisierern führt in JavaScript nicht mehr zu Setter-Ausführungen.
- Die Variable `gDownloadLastDir.path` wurde zu `gDownloadLastDir.file` umbenannt, da sie sich auf ein `nsIFile` bezieht, nicht auf einen Pfad.
- Die Variable `gDownloadLastDirPath` wurde zu `gDownloadLastDirFile` umbenannt, da sie sich auf ein `nsIFile` bezieht, nicht auf einen Pfad.
- Ab Firefox 3.5 können Sie keine `data:` Bindungen in Chrome-Paketen mehr verwenden, die `XPCNativeWrapper` Automatisierung erhalten.

### Für XUL- und Add-On-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Aktualisierung von Erweiterungen für Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Updating_extensions) beginnen, was einen hilfreichen Überblick über die Aktualisierungen bietet, die Ihre Erweiterung betreffen könnten.

#### Neue Komponenten und Funktionalität

- [Unterstützung des privaten Modus] (https://web.archive.org/web/20191029190431/https://developer.mozilla.org/de/docs/Archive/Mozilla/Supporting_private_browsing_mode)
  - : Firefox 3.5 bietet einen privaten Modus, der die Aktivitäten des Nutzers nicht aufzeichnet. Erweiterungen können den privaten Modus gemäß den Richtlinien in diesem Artikel unterstützen.
- [Sicherheitsänderungen in Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Security_changes)
  - : Dieser Artikel behandelt sicherheitsrelevante Änderungen in Firefox 3.5.
- [Themenänderungen in Firefox 3.5](https://web.archive.org/web/20191004004454/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_3.5)
  - : Dieser Artikel behandelt themenbezogene Änderungen in Firefox 3.5.
- Überwachung von Wi-Fi-Zugangspunkten
  - : Code mit UniversalXPConnect-Berechtigungen kann jetzt die Liste der verfügbaren Zugangspunkte überwachen und Informationen über ihre SSIDs, MAC-Adressen und Signalstärke abrufen. Dies kann zusammen mit Geolocation verwendet werden, um einen Wi-Fi-basierten Standortdienst anzubieten.

#### Wichtige Änderungen und Verbesserungen

- Das XUL `textbox`-Widget bietet jetzt einen `search`-Typ für die Verwendung als Suchfelder.
- Um das Ziehen und Ablegen von Tabs zwischen Fenstern zu unterstützen, verfügt das `browser`-Widget jetzt über eine `swapDocShells()`-Methode.
- Dem `panel`-Element wurde das `level`-Attribut hinzugefügt; dieses gibt an, ob Panels über anderen Anwendungen erscheinen oder nur über dem Fenster, in dem das Panel enthalten ist.
- XUL-Elemente unterstützen jetzt die Eigenschaften `clientHeight`, `clientWidth`, `scrollHeight` und `scrollWidth`.
- `keyset` enthält jetzt ein `disabled`-Attribut.
- Darüber hinaus können `keyset`s jetzt mit der Methode [`removeChild()`](/de/docs/Web/API/Node/removeChild) des Knotens entfernt werden.
- Bei `mozIStorageStatement` wurde die Methode `initialize()` entfernt; Benutzer sollten stattdessen die Methode `createStatement()` verwenden, um ein neues Statement-Objekt zu erhalten.
- Die Storage-API bietet jetzt Unterstützung für asynchrone Anfragen.
- Das `nsICookie2`-Interface zeigt nun die Zeit an, zu der Cookies in seinem neuen Attribut `creationTime` erstellt wurden.
- Ein Flag wurde zu `nsIProtocolHandler` hinzugefügt (`URI_IS_LOCAL_RESOURCE`), das während der Registrierung von Chrome überprüft wird, um sicherzustellen, dass ein Protokoll registriert werden darf.
- Firefox sucht jetzt nach Plugins in `/usr/lib/mozilla/plugins` unter Linux sowie an den zuvor unterstützten Orten.
- Die Plugin-API wurde aktualisiert, um die Unterstützung für den privaten Modus zu beinhalten; Sie können jetzt `NPN_GetValue()` verwenden, um den Status des privaten Modus mit der Variable `NPNVprivateModeBool` abzufragen.

## Neue Funktionen für Endanwender

### Benutzererfahrung

- Standortbasiertes Browsen
  - : Wenn Sie möchten, können Sie Firefox 3.5 erlauben, Informationen über Ihren aktuellen Standort mit Websites zu teilen. Firefox 3.5 kann Informationen über das Netzwerk verwenden, mit dem Sie verbunden sind, um Ihren Standort zu teilen. Natürlich wird Ihre Erlaubnis eingeholt, bevor dies geschieht, um Ihre Privatsphäre zu gewährleisten.
- Unterstützung für offene Audio- und Videoformate
  - : Firefox 3.5 unterstützt eingebettete Videos und Audios mit dem offenen Ogg-Format sowie WAV für Audio. Keine Plugins, keine verwirrenden Fehlermeldungen über die Notwendigkeit zur Installation von etwas, das auf Ihrer Plattform ohnehin nicht verfügbar ist.
- Lokale Datenspeicherung
  - : Webanwendungen können jetzt die lokalen Speicherfunktionen des Web Storage verwenden, um Daten auf Ihrem Computer zu speichern. Dies ist nützlich für alles von Website-Einstellungen bis hin zu komplexeren Daten.

### Sicherheit und Privatsphäre

- Privates Surfen
  - : Müssen Sie den Computer einer anderen Person benutzen? Schalten Sie den privaten Modus ein und nichts wird über Ihre Sitzung aufgezeichnet, einschließlich Cookies, Verlauf und anderer potenziell privater Informationen.
- Bessere Datenschutzkontrollen
  - : Die Datenschutz-Präferenzoberfläche wurde komplett neu gestaltet, um den Nutzern mehr Kontrolle über ihre privaten Informationen zu bieten. Nutzer können wählen, ob sie Verlauf, Cookies, Downloads und Formulardaten beibehalten oder löschen möchten. Darüber hinaus können Benutzer festlegen, ob der Verlauf und/oder Lesezeichen in den automatischen Vorschlägen der Adressleiste enthalten sein sollen, so dass sie private Webadressen ausblenden können, während sie in die Adressleiste tippen.

### Leistung

- Schnellere JavaScript-Leistung
  - : JavaScript, das "J" in "AJAX", wird in Firefox 3.5 mit der neuen TraceMonkey JavaScript-Engine erheblich beschleunigt. Webanwendungen sind viel schneller als in Firefox 3.
- Schnellere Seitendarstellung
  - : Webinhalte werden in Firefox 3.5 schneller gezeichnet, dank Technologien wie dem "spekulativen Parsen". Ihre Benutzer brauchen nicht zu wissen, was das bedeutet, außer "es macht Dinge schneller sichtbar".

## Siehe auch

{{Firefox_for_developers}}

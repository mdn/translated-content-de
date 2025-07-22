---
title: Firefox 3.5 für Entwickler
short-title: Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

[Firefox 3.5](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/3.5/releasenotes/) (_veröffentlicht am 30. Juni 2009_) führt eine Reihe neuer Funktionen ein sowie zusätzliche und verbesserte Unterstützung für eine Vielzahl von Webstandards. Dieser Artikel bietet eine umfassende Liste mit Links zu Artikeln, die die wichtigsten Verbesserungen abdecken.

## Neue Entwicklerfunktionen in Firefox 3.5

### Für Website- und Anwendungsentwickler

#### HTML 5-Unterstützung

- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Firefox 3.5 fügt Unterstützung für die HTML 5-Elemente [`audio`](/de/docs/Web/HTML/Reference/Elements/audio) und [`video`](/de/docs/Web/HTML/Reference/Elements/video) hinzu.
- Offline-Ressourcen in Firefox
  - : Firefox 3.5 unterstützt nun vollständig die HTML 5-Spezifikation für Offline-Ressourcen.
- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Die HTML 5-Drag and Drop-API ermöglicht das Ziehen und Ablegen von Elementen innerhalb und zwischen Websites. Diese API bietet auch eine einfachere Nutzung durch Erweiterungen und auf Mozilla basierende Anwendungen.

#### Neu unterstützte CSS-Funktionen

- [Unterstützung herunterladbarer Schriftarten](/de/docs/Web/CSS/@font-face)
  - : Die neue {{ cssxref("@font-face") }} @-Regel lässt Webseiten herunterladbare Schriftarten bereitstellen, sodass Websites genau so angezeigt werden können, wie es der Autor vorgesehen hat.
- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
  - : Firefox 3.5 unterstützt nun CSS-Medienabfragen, die die Unterstützung für medienabhängige Stylesheets erweitern.
- {{ cssxref("::before") }} und {{ cssxref("::after") }} aktualisiert auf CSS 2.1
  - : Die Pseudo-Elemente `::before` und `::after` wurden auf vollständige CSS 2.1-Unterstützung aktualisiert, einschließlich der Unterstützung für die Eigenschaften `position`, `float`, `list-style-*` und einige `display`-Eigenschaften.
- `ch` Einheiten für Länge
  - : Die `ch`-Einheit kann nun überall verwendet werden, wo eine \<length> akzeptiert wird. `1ch` ist die Breite des "0" (Null)-Zeichens.
- {{ cssxref("opacity") }}
  - : Die Mozilla-Erweiterung `-moz-opacity` zu CSS wurde zugunsten der standardisierten `opacity`-Eigenschaft entfernt.
- {{ cssxref("text-shadow") }}
  - : Die `text-shadow`-Eigenschaft, die es Webinhalten ermöglicht, Schatteneffekte auf Text und Textdekorationen anzuwenden, wird jetzt unterstützt.
- {{ cssxref("overflow-wrap") }}
  - : Diese neu unterstützte Eigenschaft ermöglicht es Inhalten anzugeben, ob Linien innerhalb von Wörtern gebrochen werden dürfen, um Überläufe zu verhindern, wenn ein ansonsten nicht trennbarer String zu lang ist, um in eine Zeile zu passen.
- Die `white-space`-Eigenschaft unterstützt den Wert `pre-line`
  - : Die {{ cssxref("white-space") }}-Eigenschaft akzeptiert jetzt den Wert `pre-line`.
- `-moz-box-shadow`, `-moz-border-image`, `-moz-column-rule`, `-moz-column-rule-width`, `-moz-column-rule-style`, `-moz-column-rule-color`
  - : Firefox 3.5 fügt Unterstützung für diese Mozilla-Erweiterungen zu CSS hinzu.
- Der Farbwert `-moz-nativehyperlinktext`
  - : Dieser neue Farbwert repräsentiert die Standard-Hyperlinkfarbe des Benutzersystems.
- Die `-moz-window-shadow`-Eigenschaft und die `:-moz-system-metric(mac-graphite-theme)` Pseudo-Klasse
  - : Diese neuen CSS-Funktionen wurden hinzugefügt, um das Thema anzupassen.
- Neue Werte für `-moz-appearance`
  - : Die Werte `-moz-win-glass` und `-moz-mac-unified-toolbar` wurden zu `-moz-appearance` hinzugefügt.
- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
  - : Firefox 3.5 unterstützt CSS-Transformationen. Weitere Informationen finden Sie unter {{ cssxref("transform", "-moz-transform") }} und {{ cssxref("transform-origin", "-moz-transform-origin") }}.
- {{ cssxref(":nth-child") }}, {{ cssxref(":nth-last-child") }}, {{ cssxref(":nth-of-type") }}, {{ cssxref(":nth-last-of-type") }}, {{ cssxref(":first-of-type") }}, {{ cssxref(":last-of-type") }}, {{ cssxref(":only-of-type") }}
  - : Diese Selektoren werden alle neu in Firefox 3.5 unterstützt.

#### Neue DOM-Funktionen

- [localStorage](/de/docs/Web/API/Window/localStorage)
  - : Firefox 3.5 fügt Unterstützung für die Web Storage `localStorage`-Eigenschaft hinzu, die es ermöglicht, Daten lokal auf dem Computer des Clients zu speichern.
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Firefox 3.5 unterstützt Web-Worker, um eine einfache Unterstützung für Multi-Threading in Webanwendungen zu bieten.
- [Verwendung von Geolocation](/de/docs/Web/API/Geolocation_API)
  - : Firefox 3.5 unterstützt die Geolocation-API, die es Webanwendungen ermöglicht, Informationen über den aktuellen Standort des Benutzers zu erhalten, wenn ein Anbieter für diese Informationen installiert und aktiviert ist.
- [Lokalisierung von DOM-Elementen mittels Selektoren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
  - : Die Selektoren-API erlaubt das Abfragen eines Dokuments, um die Elemente zu finden, die einer gegebenen Auswahlregel entsprechen.
- [Mausgestenereignisse](https://web.archive.org/web/20210724051233/https://developer.mozilla.org/de/docs/Web/Events/Mouse_gesture_events)
  - : Firefox 3.5 unterstützt Mausgestenereignisse wie Trackpad-Wischgesten.
- [Das `NodeIterator`-Objekt](/de/docs/Web/API/NodeIterator)
  - : Das `NodeIterator`-Objekt bietet Unterstützung für das Iterieren über die Liste der Knoten in einem DOM-Teilbaum.
- Das `MozAfterPaint`-Ereignis
  - : Dieses neue DOM-Ereignis wird nach Aktualisierungen beim Malen in Fenstern gesendet.
- Das `MozMousePixelScroll`-Ereignis
  - : Dieses neue DOM-Ereignis ermöglicht die Erkennung von pixelbasierten Mausrad-Scrollereignissen anstelle von zeilenbasierten Scrollereignissen.

#### Neue JavaScript-Funktionen

- [Neu in JavaScript 1.8.1](https://web.archive.org/web/20200805002842/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.1)
  - : Ein Überblick über alle Änderungen in JavaScript 1.8.1.
- [`Object.getPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
  - : Diese neue Methode gibt das Prototyp-Objekt eines spezifizierten Objekts zurück.
- Verwendung von native JSON
  - : Firefox 3.5 unterstützt nativ {{Glossary("JSON", "JSON")}}.
- Neue Trim-Methoden am String-Objekt
  - : Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt hat jetzt die Methoden [`trim()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim), [`trimLeft()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) und [`trimRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd).

#### Netzwerk

- Zugriffskontrollen über Cross-Site für HTTP
  - : In Firefox 3.5 ist es jetzt möglich, dass HTTP-Anfragen, einschließlich derjenigen, die durch [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gestellt werden, über Domains hinweg funktionieren, wenn der Server dies unterstützt.
- [Fortschrittsereignisse für `XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
  - : Fortschrittsereignisse werden jetzt angeboten, um Erweiterungen zu ermöglichen, den Fortschritt von Anfragen zu überwachen.
- Verbesserte synchrone `XMLHttpRequest`-Unterstützung
  - : [DOM Timeout](https://bugzil.la/340345) und [Input Events](https://bugzil.la/333198) werden nun während einer synchronen `XMLHttpRequest`-Anfrage unterdrückt.
- Steuerung des DNS-Prefetching
  - : Firefox 3.5 bietet DNS-Prefetching, bei dem die Domainnamen-Auflösung im Voraus für Links auf der aktuellen Seite durchgeführt wird, um Zeit zu sparen, wenn Links tatsächlich angeklickt werden. Dieser Artikel beschreibt, wie Sie Ihre Website anpassen können, um Prefetching zu deaktivieren oder anzupassen, wie Prefetching arbeitet.

#### Neue Canvas-Funktionen

- [HTML 5 Text-API für `canvas`-Elemente](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Canvas-Elemente unterstützen nun die HTML 5 Text-API.
- [Schatteneffekte in einer `canvas`](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows)
  - : Schatteneffekte auf Canvas werden jetzt unterstützt.
- [`createImageData()`](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object)
  - : Die Canvas-Methode `createImageData()` wird jetzt unterstützt, sodass Code spezifisch ein `ImageData`-Objekt erstellen kann, anstatt es automatisch erstellen zu lassen. Dies kann die Leistung anderer `ImageData`-Methoden verbessern, indem verhindert wird, dass das Objekt erstellt werden muss.
- `moz-opaque` Attribut
  - : Das [`moz-opaque`](/de/docs/Web/HTML/Reference/Elements/canvas#moz-opaque) Attribut wurde hinzugefügt, das dem Canvas erlaubt zu wissen, ob Transluzenz ein Faktor sein wird. Wenn das Canvas weiß, dass keine Transluzenz vorhanden ist, kann die Malleistung optimiert werden. Siehe auch [`HTMLCanvasElement.mozOpaque`](/de/docs/Web/API/HTMLCanvasElement/mozOpaque).

#### Neue SVG-Funktionen

- [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
  - : Es ist jetzt möglich, SVG-Effekte auf HTML- und XHTML-Inhalte anzuwenden; dieser Artikel beschreibt, wie das gemacht wird.

#### Verschiedene neue Funktionen

- [ICC-Farbkorrektur in Firefox](/de/docs/Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox)
  - : Firefox 3.5 unterstützt jetzt die ICC-Farbkorrektur für markierte Bilder.
- Das `defer`-Attribut wird jetzt auf [`script`](/de/docs/Web/HTML/Reference/Elements/script)-Elementen unterstützt
  - : Dieses Attribut gibt dem Browser an, dass er _möglicherweise_ die Seite weiterparsen und rendern darf, ohne darauf zu warten, dass das Skript die Ausführung beendet.

### Weitere Verbesserungen

- Die `wholeText`-Eigenschaft des Textknotens sowie die Methode `Text.replaceWholeText()` wurden implementiert.
- Die Eigenschaft [`element.children`](/de/docs/Web/API/Element/children) wurde hinzugefügt. Sie gibt eine _Sammlung_ der Kindelemente des gegebenen Elements zurück.
- Die Eigenschaft [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) wird jetzt unterstützt, um bearbeitbare Elemente zu unterstützen.
- Die Element-Durchlauf-API wird jetzt durch das DOM-[Element](/de/docs/Web/API/Element)-Objekt unterstützt.
- HTML-Dokumentknoten können jetzt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) kloniert werden.
- Die nicht standardisierte `getBoxObjectFor()`-DOM-Methode wurde entfernt. Stattdessen sollte [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) verwendet werden.
- Gehaltene DOM-Ereignisse können jetzt erneut ausgelöst werden. Dies ermöglicht es Firefox 3.5, den Acid 3 Test 30 zu bestehen.
- Verbesserungen wurden bei der Behandlung von DOM 2 Bereich gemacht.
- Außerhalb des Chrome-Bereichs sind erfasste Objekte in Ausnahmen jetzt das tatsächlich geworfene Objekt anstelle eines [`XPConnect`](https://web.archive.org/web/20210423135742/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Language_bindings/XPConnect)-Wrappers, das das geworfene Objekt enthält.
- SVG-ID-Verweise sind jetzt live.
- SVG-Filter funktionieren jetzt für `foreignObject`.
- Die `GetSVGDocument()` Methode wurde zu [`object`](/de/docs/Web/HTML/Reference/Elements/object) und [`iframe`](/de/docs/Web/HTML/Reference/Elements/iframe)-Elementen für die Kompatibilität hinzugefügt.
- Implizite Setzung von Eigenschaften in Objekt- und Array-Initialisierern führt nicht mehr die Setter in JavaScript aus.
- Die Variable `gDownloadLastDir.path` wurde in `gDownloadLastDir.file` umbenannt, da sie auf ein `nsIFile` referiert, nicht auf einen Pfad.
- Die Variable `gDownloadLastDirPath` wurde in `gDownloadLastDirFile` umbenannt, da sie auf ein `nsIFile` referiert, nicht auf einen Pfad.
- Ab Firefox 3.5 können keine `data:`-Bindungen in Chrome-Paketen mehr verwendet werden, die `XPCNativeWrapper`-Automatisierung erhalten.

### Für XUL- und Add-On-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Aktualisierung von Erweiterungen für Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Updating_extensions) beginnen, das einen hilfreichen Überblick darüber bietet, welche Änderungen Ihre Erweiterung betreffen könnten.

#### Neue Komponenten und Funktionen

- [Unterstützung des privaten Surfmodus](https://web.archive.org/web/20210620014429/https://developer.mozilla.org/de/docs/Archive/Mozilla/Supporting_private_browsing_mode)
  - : Firefox 3.5 bietet den privaten Surfmodus, der die Aktivitäten des Benutzers nicht aufzeichnet. Erweiterungen können den privaten Surfmodus gemäß den Anleitungen in diesem Artikel unterstützen.
- [Sicherheitsänderungen in Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Security_changes)
  - : Dieser Artikel behandelt sicherheitsrelevante Änderungen in Firefox 3.5.
- [Theme-Änderungen in Firefox 3.5](https://web.archive.org/web/20191004004454/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_3.5)
  - : Dieser Artikel behandelt themenbezogene Änderungen in Firefox 3.5.
- Überwachung von Wi-Fi-Zugangspunkten
  - : Code mit UniversalXPConnect-Rechten kann jetzt die Liste der verfügbaren Zugangspunkte überwachen und Informationen über ihre SSIDs, MAC-Adressen und Signalstärke abrufen. Dies kann in Verbindung mit Geolocation für eine Wi-Fi-basierte Standortdienste verwendet werden.

#### Bemerkenswerte Änderungen und Verbesserungen

- Das XUL `textbox`-Widget bietet jetzt einen `search`-Typ, der als Sucheingabefeld verwendet werden kann.
- Um das Ziehen und Ablegen von Tabs zwischen Fenstern zu unterstützen, hat das `browser`-Widget jetzt eine `swapDocShells()`-Methode.
- Das `panel`-Element wurde um das `level`-Attribut erweitert, das angibt, ob Panels vor anderen Anwendungen oder nur vor dem Fenster angezeigt werden, in dem das Panel enthalten ist.
- XUL-Elemente unterstützen jetzt die Eigenschaften `clientHeight`, `clientWidth`, `scrollHeight` und `scrollWidth`.
- `keyset` hat nun ein `disabled`-Attribut.
- Darüber hinaus können `keyset`s jetzt mit der Methode [`removeChild()`](/de/docs/Web/API/Node/removeChild) des Knotens entfernt werden.
- `mozIStorageStatement` hat die Methode `initialize()` entfernt; Verbraucher sollten stattdessen die Methode `createStatement()` verwenden, um ein neues Statement-Objekt zu erhalten.
- Die Storage-API bietet jetzt Unterstützung für asynchrone Anfragen.
- Die `nsICookie2`-Schnittstelle gibt jetzt die Zeit an, zu der Cookies erstellt wurden, in ihrem neuen Attribut `creationTime` bekannt.
- Ein Flag wurde zu `nsIProtocolHandler` (`URI_IS_LOCAL_RESOURCE`) hinzugefügt, das während der Chrome-Registrierung überprüft wird, um sicherzustellen, dass ein Protokoll registriert werden darf.
- Firefox sucht jetzt nach Plugins in `/usr/lib/mozilla/plugins` auf Linux sowie in den zuvor unterstützten Speicherorten.
- Die Plugin-API wurde aktualisiert, um den Privatmodus zu unterstützen; Sie können jetzt `NPN_GetValue()` verwenden, um den Status des privaten Modus mithilfe der Variablen `NPNVprivateModeBool` abzufragen.

## Neue Funktionen für Endbenutzer

### Benutzererfahrung

- Ortsabhängiges Browsen
  - : Wenn Sie es wünschen, können Sie Firefox 3.5 erlauben, Informationen über Ihren aktuellen Standort mit Websites zu teilen. Firefox 3.5 kann Informationen über das Netzwerk, mit dem Sie verbunden sind, verwenden, um Ihren Standort zu teilen. Natürlich wird Ihre Erlaubnis erfragt, bevor dies geschieht, um Ihre Privatsphäre zu gewährleisten.
- Unterstützung für offene Audio- und Videoformate
  - : Firefox 3.5 unterstützt eingebettete Videos und Audios im offenen Ogg-Format sowie WAV für Audio. Keine Plugins, keine verwirrenden Fehlermeldungen über nötige Installationen, die sich dann als auf Ihrer Plattform nicht verfügbar erweisen.
- Lokale Datenspeicherung
  - : Webanwendungen können nun die lokalen Speicherkapazitäten von Web Storage nutzen, um Daten auf Ihrem Computer zu speichern. Das ist großartig für alles, von Website-Einstellungen bis hin zu komplexeren Daten.

### Sicherheit und Datenschutz

- Privates Surfen
  - : Müssen Sie einen fremden Computer benutzen? Aktivieren Sie den privaten Surfmodus und es wird nichts über Ihre Sitzung aufgezeichnet, einschließlich Cookies, Verlauf und anderer potenziell privater Informationen.
- Bessere Datenschutzkontrollen
  - : Das Datenschutz-Präferenzfenster wurde komplett neu gestaltet, um Benutzern mehr Kontrolle über ihre privaten Informationen zu geben. Benutzer können wählen, ob sie alles einschließlich Verlaufsinformationen, Cookies, Downloads und Formularinformationen behalten oder verwerfen möchten. Darüber hinaus können Benutzer festlegen, ob der Verlauf und/oder Lesezeichen in den automatischen Vorschlägen der Adressleiste enthalten sein sollen, sodass private Webadressen beim Tippen in der Adressleiste nicht unerwartet auftauchen.

### Leistung

- Schnellere JavaScript-Leistung
  - : JavaScript, das "J" in "AJAX", ist in Firefox 3.5 mit der neuen TraceMonkey JavaScript-Engine dramatisch schneller. Webanwendungen laufen bedeutend schneller als in Firefox 3.
- Schnellere Seiten-Rendering
  - : Web-Inhalte werden in Firefox 3.5 schneller gezeichnet, dank Technologien wie "speculative parsing". Ihre Benutzer müssen nicht wissen, was das bedeutet, außer dass "es macht die Dinge schneller sichtbar".

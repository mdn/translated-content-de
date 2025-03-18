---
title: Firefox 3.5 für Entwickler
slug: Mozilla/Firefox/Releases/3.5
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{FirefoxSidebar}}

[Firefox 3.5](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/3.5/releasenotes/) (_veröffentlicht am 30. Juni 2009_) führt eine Reihe neuer Funktionen ein sowie zusätzliche und verbesserte Unterstützung für eine Vielzahl von Webstandards. Dieser Artikel bietet eine umfangreiche Liste mit Links zu Artikeln, die die wichtigsten Verbesserungen abdecken.

## Neue Entwicklerfunktionen in Firefox 3.5

### Für Website- und Anwendungsentwickler

#### HTML 5 Unterstützung

- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Firefox 3.5 fügt Unterstützung für die HTML 5 [`audio`](/de/docs/Web/HTML/Element/audio) und [`video`](/de/docs/Web/HTML/Element/video) Elemente hinzu.
- Offline-Ressourcen in Firefox
  - : Firefox 3.5 unterstützt nun vollständig die HTML 5 Offline-Ressourcen-Spezifikation.
- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Die HTML 5 Drag-and-Drop-API ermöglicht das Ziehen und Ablegen von Elementen innerhalb und zwischen Websites. Dies bietet auch eine einfachere API zur Verwendung durch Erweiterungen und auf Mozilla basierende Anwendungen.

#### Neuerstützte CSS-Funktionen

- [Unterstützung für herunterladbare Schriftarten](/de/docs/Web/CSS/@font-face)
  - : Die neue {{ cssxref("@font-face") }} @-Regel ermöglicht es Webseiten, herunterladbare Schriftarten bereitzustellen, sodass Websites genau wie vom Seitenautor erwartet angezeigt werden können.
- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
  - : Firefox 3.5 unterstützt nun CSS Media Queries, die die Unterstützung für medienabhängige Stylesheets verbessern.
- {{ cssxref("::before") }} und {{ cssxref("::after") }} wurden auf CSS 2.1 aktualisiert
  - : Die `::before` und `::after` Pseudoelemente wurden auf volle Unterstützung von CSS 2.1 aktualisiert, was Unterstützung für die Eigenschaften `position`, `float`, `list-style-*` und einige `display`-Eigenschaften hinzufügt.
- `ch` Einheiten für Länge
  - : Die `ch` Einheit kann jetzt überall verwendet werden, wo eine [Längeneinheit](/de/docs/Web/CSS/length#units) akzeptiert wird. `1ch` ist die Breite des Zeichens "0" (Null).
- {{ cssxref("opacity") }}
  - : Die `-moz-opacity` Mozilla-Erweiterung für CSS wurde zugunsten der standardmäßigen `opacity`-Eigenschaft entfernt.
- {{ cssxref("text-shadow") }}
  - : Die `text-shadow`-Eigenschaft, die Webinhalte erlaubt, Schatteneffekte auf Text und Textdekorationen anzuwenden, wird nun unterstützt.
- {{ cssxref("overflow-wrap") }}
  - : Diese neu unterstützte Eigenschaft ermöglicht es, anzugeben, ob Zeilen innerhalb von Wörtern umbrochen werden dürfen, um Überlauf zu verhindern, wenn ein ansonsten nicht trennbares Zeichen zu lang ist, um in eine Zeile zu passen.
- Die `white-space`-Eigenschaft unterstützt den `pre-line` Wert
  - : Die {{ cssxref("white-space") }}-Eigenschaft akzeptiert nun den `pre-line` Wert.
- `-moz-box-shadow`

  `-moz-border-image`

  `-moz-column-rule`

  `-moz-column-rule-width`

  `-moz-column-rule-style`

  `-moz-column-rule-color`

  - : Firefox 3.5 fügt Unterstützung für diese Mozilla-Erweiterungen für CSS hinzu.

- Der {{ cssxref("color_value#Mozilla_Extensions","-moz-nativehyperlinktext") }} Farbwert
  - : Dieser neue Farbwert repräsentiert die Standard-Hyperlinkfarbe des Systems des Benutzers.
- Die `-moz-window-shadow` Eigenschaft und die `:-moz-system-metric(mac-graphite-theme)` Pseudoklasse
  - : Diese neuen CSS-Features wurden für die Thematik hinzugefügt.
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
  - : Firefox 3.5 fügt Unterstützung für die Web Storage `localStorage` Eigenschaft hinzu, die es Webanwendungen ermöglicht, Daten lokal auf dem Computer des Benutzers zu speichern.
- [Web Worker verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Firefox 3.5 unterstützt Web Worker, um eine einfache Unterstützung für Multithreading in Webanwendungen zu ermöglichen.
- [Geolocation verwenden](/de/docs/Web/API/Geolocation_API)
  - : Firefox 3.5 unterstützt die Geolocation API, die es Webanwendungen ermöglicht, Informationen über den aktuellen Standort des Benutzers zu erhalten, wenn ein Anbieter für diese Informationen installiert und aktiviert ist.
- [DOM-Elemente mithilfe von Selektoren auffinden](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
  - : Die Selektoren-API erlaubt die Abfrage eines Dokuments, um die Elemente zu finden, die einer gegebenen Auswahlregel entsprechen.
- [Maus-Gesten-Ereignisse](https://web.archive.org/web/20210724051233/https://developer.mozilla.org/de/docs/Web/Events/Mouse_gesture_events)
  - : Firefox 3.5 unterstützt Maus-Gesten-Ereignisse wie Trackpad-Wischbewegungen.
- [Das `NodeIterator` Objekt](/de/docs/Web/API/NodeIterator)
  - : Das `NodeIterator`-Objekt bietet Unterstützung für das Durchlaufen der Liste der Knoten in einem DOM-Unterbaum.
- Das `MozAfterPaint`-Ereignis
  - : Dieses neue DOM-Ereignis wird nach Mal-Updates in Fenstern gesendet.
- Das `MozMousePixelScroll`-Ereignis
  - : Dieses neue DOM-Ereignis ermöglicht die Erkennung pixelbasierter Maus-Scroll-Rad-Ereignisse anstelle von zeilenbasierten Scroll-Ereignissen.

#### Neue JavaScript-Funktionen

- [Neu in JavaScript 1.8.1](https://web.archive.org/web/20200805002842/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.1)
  - : Ein Überblick über alle Änderungen in JavaScript 1.8.1.
- [`Object.getPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
  - : Diese neue Methode gibt das Prototyp-Objekt eines angegebenen Objekts zurück.
- Native JSON-Verwendung
  - : Firefox 3.5 hat native Unterstützung für {{Glossary("JSON", "JSON")}}.
- Neue Trim-Methoden für das String-Objekt
  - : Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) Objekt hat nun die Methoden [`trim()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim), [`trimLeft()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) und [`trimRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd).

#### Netzwerken

- Cross-Site-Zugriffskontrollen für HTTP
  - : In Firefox 3.5 ist es jetzt möglich, dass HTTP-Anfragen, einschließlich der von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gestellten, domänenübergreifend funktionieren, wenn der Server dies unterstützt.
- [Fortschrittsereignisse für `XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
  - : Fortschrittsereignisse sind nun verfügbar, um Erweiterungen zu ermöglichen, den Fortschritt von Anfragen zu überwachen.
- Verbesserte synchrone `XMLHttpRequest` Unterstützung
  - : [DOM Timeout](https://bugzil.la/340345) und [Input Events](https://bugzil.la/333198) werden nun während eines synchronen `XMLHttpRequest` unterdrückt.
- Steuerung des DNS-Vorabrufs
  - : Firefox 3.5 bietet DNS-Vorabruf, bei dem die Domainnamenauflösung im Voraus für Links auf der aktuellen Seite durchgeführt wird, um Zeit zu sparen, wenn die Links tatsächlich angeklickt werden. In diesem Artikel wird beschrieben, wie Sie Ihre Website optimieren können, um das Vorabrufen zu deaktivieren oder anzupassen, wie das Vorabrufen funktioniert.

#### Neue Canvas-Funktionen

- [HTML 5 Text-API für `canvas` Elemente](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Canvas-Elemente unterstützen nun die HTML 5 Text-API.
- [Schatteneffekte auf einem `canvas`](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows)
  - : Canvas-Schatteneffekte werden jetzt unterstützt.
- [`createImageData()`](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object)
  - : Die canvas-Methode `createImageData()` wird nun unterstützt, sodass Code ein `ImageData`-Objekt explizit erstellen kann, anstatt es automatisch erstellen zu müssen. Dies kann die Leistung anderer `ImageData`-Methoden verbessern, indem vermieden wird, dass das Objekt erstellt werden muss.
- `moz-opaque` Attribut
  - : Das [`moz-opaque`](/de/docs/Web/HTML/Element/canvas#moz-opaque) Attribut wurde hinzugefügt, das dem canvas mitteilt, ob Durchsichtigkeit ein Faktor sein wird oder nicht. Wenn das canvas weiß, dass keine Durchsichtigkeit vorhanden ist, kann die Malleistung optimiert werden. Siehe auch [`HTMLCanvasElement.mozOpaque`](/de/docs/Web/API/HTMLCanvasElement/mozOpaque).

#### Neue SVG-Funktionen

- [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
  - : Sie können jetzt SVG-Effekte auf HTML- und XHTML-Inhalte anwenden; dieser Artikel beschreibt, wie das geht.

#### Verschiedene neue Funktionen

- [ICC-Farbkorrektur in Firefox](/de/docs/Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox)
  - : Firefox 3.5 unterstützt nun ICC-Farbkorrektur für getaggte Bilder.
- Das `defer` Attribut wird nun auf [`script`](/de/docs/Web/HTML/Element/script) Elementen unterstützt
  - : Dieses Attribut zeigt dem Browser an, dass er _möglicherweise_ die Seite weiter parsen und rendern kann, ohne darauf zu warten, dass das Skript die Ausführung beendet.

### Weitere Verbesserungen

- Die [`wholeText`](/de/docs/Web/API/Text/wholeText) Eigenschaft des Textknotens und die `Text.replaceWholeText()` Methode wurden implementiert.
- Die Eigenschaft [`element.children`](/de/docs/Web/API/Element/children) wurde hinzugefügt. Sie gibt eine _Sammlung_ der Kindelemente des angegebenen Elements zurück.
- Die Eigenschaft [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) wird nun unterstützt, um editierbare Elemente zu unterstützen.
- Die Elementgestaltung-API wird nun vom DOM [Element](/de/docs/Web/API/Element) Objekt unterstützt.
- HTML-Dokumentknoten können nun mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) geklont werden.
- Die nicht standardisierte `getBoxObjectFor()` DOM-Methode wurde entfernt. Sie sollten stattdessen [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) verwenden.
- Versandte DOM-Ereignisse können nun erneut versandt werden. Dadurch besteht Firefox 3.5 den Acid 3 Test 30.
- Verbesserungen wurden im Umgang mit DOM 2 Range vorgenommen.
- In einem Nicht-Browser-Bereich sind abgefangene Objekte in Ausnahmen jetzt das tatsächlich geworfene Objekt anstelle eines [`XPConnect`](https://web.archive.org/web/20210423135742/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Language_bindings/XPConnect) Wrappers, der das geworfene Objekt enthält.
- SVG-ID-Referenzen sind now live.
- SVG-Filter funktionieren jetzt für `foreignObject`.
- Die `GetSVGDocument()` Methode wurde zu [`object`](/de/docs/Web/HTML/Element/object) und [`iframe`](/de/docs/Web/HTML/Element/iframe) Elementen für Kompatibilität hinzugefügt.
- Implizite Einstellungen von Eigenschaften in Objekt- und Array-Initialisierern führen keine Setter mehr aus in JavaScript.
- Die Variable `gDownloadLastDir.path` wurde in `gDownloadLastDir.file` umbenannt, da sie sich auf ein `nsIFile` und nicht auf einen Pfad bezieht.
- Die Variable `gDownloadLastDirPath` wurde in `gDownloadLastDirFile` umbenannt, da sie sich auf ein `nsIFile` und nicht auf einen Pfad bezieht.
- Ab Firefox 3.5 können Sie keine `data:` Bindungen mehr in Chrome-Paketen verwenden, die `XPCNativeWrapper` Automatisierung erhalten.

### Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Erweiterungen für Firefox 3.5 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3.5/Updating_extensions) beginnen, das einen hilfreichen Überblick darüber bietet, welche Änderungen Ihre Erweiterung betreffen könnten.

#### Neue Komponenten und Funktionen

- [Unterstützung des privaten Modus]https://web.archive.org/web/20191029190431/https://developer.mozilla.org/de/docs/Archive/Mozilla/Supporting_private_browsing_mode)
  - : Firefox 3.5 bietet einen privaten Modus, der die Aktivitäten des Benutzers nicht aufzeichnet. Erweiterungen können den privaten Modus gemäß den in diesem Artikel beschriebenen Richtlinien unterstützen.
- [Sicherheitsänderungen in Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Security_changes)
  - : Dieser Artikel behandelt sicherheitsbezogene Änderungen in Firefox 3.5.
- [Thema-Änderungen in Firefox 3.5](https://web.archive.org/web/20191004004454/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_3.5)
  - : Dieser Artikel behandelt Themenbezogene Änderungen in Firefox 3.5.
- Überwachung von WLAN-Zugangspunkten
  - : Code mit UniversalXPConnect-Berechtigungen kann nun die Liste der verfügbaren Zugangspunkte überwachen und Informationen zu deren SSIDs, MAC-Adressen und Signalstärke erhalten. Dies kann in Kombination mit Geolocation verwendet werden, um standortbasierte Dienste über WLAN anzubieten.

#### Bemerkenswerte Änderungen und Verbesserungen

- Das XUL `textbox`-Widget bietet nun einen `search`-Typ für die Verwendung als Suchfelder.
- Um das Ziehen und Ablegen von Tabs zwischen Fenstern zu unterstützen, verfügt das `browser`-Widget nun über eine `swapDocShells()`-Methode.
- Das `level` Attribut wurde dem `panel` Element hinzugefügt; dies gibt an, ob Panels über anderen Anwendungen oder nur über dem Fenster erscheinen, in dem das Panel enthalten ist.
- XUL-Elemente unterstützen nun die Eigenschaften `clientHeight`, `clientWidth`, `scrollHeight` und `scrollWidth`.
- `keyset` enthält nun ein `disabled` Attribut.
- Außerdem können `keysets` nun mit der Methode [`removeChild()`](/de/docs/Web/API/Node/removeChild) des Knotens entfernt werden.
- `mozIStorageStatement` hat die `initialize()` Methode entfernt; Verbraucher sollten stattdessen die `createStatement()` Methode verwenden, um ein neues Statement-Objekt zu erhalten.
- Die Storage API bietet nun Unterstützung für asynchrone Anfragen.
- Das `nsICookie2` Interface macht nun die Zeit, zu der Cookies erstellt wurden, über sein neues `creationTime` Attribut zugänglich.
- Eine Flagge wurde `nsIProtocolHandler` (`URI_IS_LOCAL_RESOURCE`) hinzugefügt, die während der Chrome-Registrierung überprüft wird, um sicherzustellen, dass ein Protokoll registriert werden darf.
- Firefox sucht jetzt nach Plugins in `/usr/lib/mozilla/plugins` unter Linux sowie an den zuvor unterstützten Speicherorten.
- Die Plugin-API wurde aktualisiert, um den privaten Modus zu unterstützen; Sie können nun `NPN_GetValue()` verwenden, um den Status des privaten Modus mit der Variable `NPNVprivateModeBool` abzufragen.

## Neue Funktionen für Endbenutzer

### Benutzererfahrung

- Standortbezogenes Surfen
  - : Wenn Sie dies wünschen, können Sie Firefox 3.5 erlauben, Informationen über Ihren aktuellen Standort mit Websites zu teilen. Firefox 3.5 kann Informationen über das Netzwerk, zu dem Sie verbunden sind, verwenden, um Ihren Standort zu teilen. Natürlich fragt es vorab nach Ihrer Erlaubnis, um Ihre Privatsphäre zu gewährleisten.
- Unterstützung für Audio und Video
  - : Firefox 3.5 unterstützt eingebettete Videos und Audiodateien im offenen Ogg-Format und WAV für Audio. Keine Plugins, keine verwirrenden Fehlermeldungen darüber, dass etwas installiert werden muss, was ohnehin nicht für Ihre Plattform verfügbar ist.
- Lokale Datenspeicherung
  - : Webanwendungen können nun die lokalen Speicherfähigkeiten von Web Storage nutzen, um Daten auf Ihrem Computer zu speichern. Dies ist ideal für alles, von Site-Einstellungen bis hin zu komplexeren Daten.

### Sicherheit und Datenschutz

- Privates Surfen
  - : Müssen Sie den Computer einer anderen Person verwenden? Aktivieren Sie den privaten Modus und nichts wird über Ihre Sitzung aufgezeichnet, einschließlich Cookies, Verlauf und potenziell privater Informationen.
- Bessere Datenschutzkontrollen
  - : Die Datenschutz-Einstellungstafel wurde vollständig neu gestaltet, um Benutzern mehr Kontrolle über ihre persönlichen Informationen zu geben. Benutzer können alles, einschließlich Verlaufsinformationen, Cookies, Downloads und Formularfeldinformationen, behalten oder verwerfen. Zusätzlich können Benutzer angeben, ob Verlaufs- und/oder Lesezeichen in die automatischen Vorschläge der Adressleiste aufgenommen werden sollen, sodass Sie verhindern können, dass private Webadressen unerwartet beim Tippen in der Adressleiste auftauchen.

### Leistung

- Schnellere JavaScript-Performance
  - : JavaScript, das "J" in "AJAX", ist in Firefox 3.5 dank der neuen TraceMonkey-JavaScript-Engine dramatisch schneller. Webanwendungen sind erheblich schneller als in Firefox 3.
- Schnellere Seitendarstellung
  - : Webinhalte werden in Firefox 3.5 schneller dargestellt, dank Technologien wie dem "spekulativen Parsen". Ihre Benutzer müssen nicht verstehen, was das bedeutet, außer "es lässt Dinge schneller erscheinen."

## Siehe auch

{{Firefox_for_developers}}

---
title: Firefox 3.5 für Entwickler
slug: Mozilla/Firefox/Releases/3.5
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

[Firefox 3.5](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/3.5/releasenotes/) (_veröffentlicht am 30. Juni 2009_) führt eine Reihe neuer Funktionen ein und bietet zusätzlichen und verbesserten Support für eine Vielzahl von Webstandards. Dieser Artikel bietet eine umfassende Liste mit Links zu Artikeln, die die wichtigsten Verbesserungen behandeln.

## Neue Entwicklerfunktionen in Firefox 3.5

### Für Website- und Anwendungsentwickler

#### HTML 5-Unterstützung

- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Firefox 3.5 fügt Unterstützung für die HTML 5-Elemente [`audio`](/de/docs/Web/HTML/Reference/Elements/audio) und [`video`](/de/docs/Web/HTML/Reference/Elements/video) hinzu.
- Offline-Ressourcen in Firefox
  - : Firefox 3.5 unterstützt jetzt vollständig die HTML 5-Spezifikation für Offline-Ressourcen.
- [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Die HTML 5 Drag & Drop API ermöglicht das Ziehen und Ablegen von Elementen innerhalb und zwischen Websites. Dies bietet auch eine einfachere API für die Verwendung durch Erweiterungen und Mozilla-basierte Anwendungen.

#### Neu unterstützte CSS-Funktionen

- [Unterstützung für herunterladbare Schriftarten](/de/docs/Web/CSS/@font-face)
  - : Die neue {{ cssxref("@font-face") }} @regel ermöglicht es Webseiten, herunterladbare Schriftarten bereitzustellen, sodass Websites genau so dargestellt werden können, wie es vom Seitenautor erwartet wird.
- [CSS-Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
  - : Firefox 3.5 unterstützt jetzt CSS-Media Queries, die die Unterstützung von medienabhängigen Stylesheets verbessern.
- {{ cssxref("::before") }} und {{ cssxref("::after") }} aktualisiert auf CSS 2.1
  - : Die Pseudo-Elemente `::before` und `::after` wurden auf volle CSS 2.1-Unterstützung aktualisiert, einschließlich Support für die Properties `position`, `float`, `list-style-*` und einige `display`-Eigenschaften.
- `ch` Einheit für Länge
  - : Die `ch` Einheit kann jetzt überall verwendet werden, wo eine [Länge](/de/docs/Web/CSS/length) akzeptiert wird. `1ch` ist die Breite des Zeichens "0" (Null).
- {{ cssxref("opacity") }}
  - : Die `-moz-opacity` Mozilla-Erweiterung für CSS wurde zugunsten der standardmäßigen `opacity` Property entfernt.
- {{ cssxref("text-shadow") }}
  - : Die `text-shadow` Property, die es Webinhalten erlaubt, Schatteneffekte auf Text und Textdekorationen anzuwenden, wird jetzt unterstützt.
- {{ cssxref("overflow-wrap") }}
  - : Diese neu unterstützte Property lässt Inhalte festlegen, ob Zeilen innerhalb von Wörtern gebrochen werden können, um Überlauf zu verhindern, wenn eine ansonsten untrennbare Zeichenkette zu lang ist, um in eine Zeile zu passen.
- `white-space` Property unterstützt den Wert `pre-line`
  - : Die {{ cssxref("white-space") }} Property akzeptiert jetzt den Wert `pre-line`.
- `-moz-box-shadow`, `-moz-border-image`, `-moz-column-rule`, `-moz-column-rule-width`, `-moz-column-rule-style`, `-moz-column-rule-color`
  - : Firefox 3.5 fügt Unterstützung für diese Mozilla-Erweiterungen zu CSS hinzu.
- Der {{ cssxref("color_value#Mozilla_Extensions","-moz-nativehyperlinktext") }} Farbwert
  - : Dieser neue Farbwert stellt die Standard-Hyperlink-Farbe des Systems des Benutzers dar.
- Die `-moz-window-shadow` Property und die `:-moz-system-metric(mac-graphite-theme)` Pseudo-Klasse
  - : Diese neuen CSS-Funktionen wurden zur Ermöglichung des Themens hinzugefügt.
- Neue Werte für `-moz-appearance`
  - : Die Werte `-moz-win-glass` und `-moz-mac-unified-toolbar` wurden zu `-moz-appearance` hinzugefügt.
- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
  - : Firefox 3.5 unterstützt CSS-Transformationen. Siehe {{ cssxref("transform", "-moz-transform") }} und {{ cssxref("transform-origin", "-moz-transform-origin") }} für Details.
- {{ cssxref(":nth-child") }}, {{ cssxref(":nth-last-child") }}, {{ cssxref(":nth-of-type") }}, {{ cssxref(":nth-last-of-type") }}, {{ cssxref(":first-of-type") }}, {{ cssxref(":last-of-type") }}, {{ cssxref(":only-of-type") }}
  - : Diese Selektoren werden alle neu in Firefox 3.5 unterstützt.

#### Neue DOM-Funktionen

- [localStorage](/de/docs/Web/API/Window/localStorage)
  - : Firefox 3.5 fügt Unterstützung für die `localStorage` Property von Web Storage hinzu, die eine Möglichkeit bietet, Daten lokal auf dem Computer des Clients zu speichern.
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Firefox 3.5 unterstützt Web-Worker, um die Unterstützung von Multithreading in Webanwendungen zu erleichtern.
- [Verwendung von Geolocation](/de/docs/Web/API/Geolocation_API)
  - : Firefox 3.5 unterstützt die Geolocation-API, die es Webanwendungen ermöglicht, Informationen über den aktuellen Standort des Benutzers zu erhalten, wenn ein Anbieter für diese Informationen installiert und aktiviert ist.
- [DOM-Elemente mit Selektoren lokalisieren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
  - : Die Selektoren-API ermöglicht das Abfragen eines Dokuments, um die Elemente zu lokalisieren, die einer gegebenen Auswahlregel entsprechen.
- [Mausgesten-Ereignisse](https://web.archive.org/web/20210724051233/https://developer.mozilla.org/de/docs/Web/Events/Mouse_gesture_events)
  - : Firefox 3.5 unterstützt Mausgesten-Ereignisse wie Trackpad-Wischbewegungen.
- [Das `NodeIterator`-Objekt](/de/docs/Web/API/NodeIterator)
  - : Das `NodeIterator`-Objekt bietet Unterstützung für das Iterieren über die Liste der Knoten in einem DOM-Untersystem.
- Das `MozAfterPaint`-Ereignis
  - : Dieses neue DOM-Ereignis wird nach Aktualisierungen der Darstellung in Fenstern gesendet.
- Das `MozMousePixelScroll`-Ereignis
  - : Dieses neue DOM-Ereignis ermöglicht die Erkennung von pixelbasierten Maus-Scrollrad-Ereignissen anstelle von linienbasierten Scroll-Ereignissen.

#### Neue JavaScript-Funktionen

- [Neu in JavaScript 1.8.1](https://web.archive.org/web/20200805002842/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.1)
  - : Ein Überblick über alle Änderungen in JavaScript 1.8.1.
- [`Object.getPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
  - : Diese neue Methode gibt das Prototyp-Objekt eines angegebenen Objekts zurück.
- Verwendung von nativem JSON
  - : Firefox 3.5 hat native Unterstützung für {{Glossary("JSON", "JSON")}}.
- Neue trim-Methoden am String-Objekt
  - : Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt hat jetzt die Methoden [`trim()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim), [`trimLeft()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) und [`trimRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd).

#### Netzwerk

- Kontrolle des Cross-Site-Zugriffs für HTTP
  - : In Firefox 3.5 ist es jetzt möglich, dass HTTP-Anfragen, einschließlich der Anfragen von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), über Domains hinweg arbeiten, wenn der Server dies unterstützt.
- [Fortschrittsereignisse für `XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
  - : Fortschrittsereignisse werden jetzt angeboten, um Erweiterungen das Überwachen des Fortschritts von Anfragen zu ermöglichen.
- Verbesserte Unterstützung für synchrones `XMLHttpRequest`
  - : [DOM Timeout](https://bugzil.la/340345) und [Input Events](https://bugzil.la/333198) werden jetzt während eines synchronen `XMLHttpRequest` unterdrückt.
- Kontrolle von DNS-Prefetching
  - : Firefox 3.5 bietet DNS-Prefetching, bei dem die Domain-Namen-Auflösung im Voraus für Links auf der aktuellen Seite durchgeführt wird, um Zeit zu sparen, wenn Links tatsächlich angeklickt werden. Dieser Artikel beschreibt, wie Sie Ihre Website abstimmen können, um Prefetching zu deaktivieren oder anzupassen, wie Prefetching funktioniert.

#### Neue Canvas-Funktionen

- [HTML 5 Text-API für `canvas`-Elemente](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Canvas-Elemente unterstützen jetzt die HTML 5 Text-API.
- [Schatteneffekte in einem `canvas`](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows)
  - : Canvas-Schatteneffekte werden jetzt unterstützt.
- [`createImageData()`](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object)
  - : Die Canvas-Methode `createImageData()` wird jetzt unterstützt, was es ermöglicht, ein `ImageData`-Objekt spezifisch zu erstellen, anstatt es automatisch erstellen zu lassen. Dies kann die Leistung anderer `ImageData`-Methoden verbessern, indem verhindert wird, dass sie das Objekt selbst erstellen müssen.
- `moz-opaque` Attribut
  - : Das [`moz-opaque`](/de/docs/Web/HTML/Reference/Elements/canvas#moz-opaque) Attribut wurde hinzugefügt, das dem Canvas mitteilt, ob Transluzenz ein Faktor sein wird oder nicht. Wenn das Canvas weiß, dass keine Transluzenz vorliegt, kann die Malleistung optimiert werden. Siehe auch [`HTMLCanvasElement.mozOpaque`](/de/docs/Web/API/HTMLCanvasElement/mozOpaque).

#### Neue SVG-Funktionen

- [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
  - : Sie können jetzt SVG-Effekte auf HTML- und XHTML-Inhalte anwenden; dieser Artikel beschreibt, wie.

#### Verschiedene neue Funktionen

- [ICC-Farbkorrektur in Firefox](/de/docs/Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox)
  - : Firefox 3.5 unterstützt jetzt ICC-Farbkorrektur für markierte Bilder.
- Das `defer` Attribut wird nun bei [`script`](/de/docs/Web/HTML/Reference/Elements/script)-Elementen unterstützt
  - : Dieses Attribut zeigt dem Browser an, dass er die Seite weiterhin parse und rendern kann, ohne darauf zu warten, dass das Skript ausgeführt wird.

### Andere Verbesserungen

- Die [`wholeText`](/de/docs/Web/API/Text/wholeText)-Eigenschaft des Textknotens und die Methode `Text.replaceWholeText()` wurden implementiert.
- Die Eigenschaft [`element.children`](/de/docs/Web/API/Element/children) wurde hinzugefügt. Sie gibt eine _Sammlung_ von Kind-Elementen des angegebenen Elements zurück.
- Die Eigenschaft [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) wird jetzt unterstützt, um bearbeitbare Elemente zu unterstützen.
- Die Element Traversal API wird jetzt vom DOM [Element](/de/docs/Web/API/Element)-Objekt unterstützt.
- HTML-Dokumentknoten können nun mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) geklont werden.
- Die nicht-standardisierte Methode `getBoxObjectFor()` im DOM wurde entfernt. Sie sollten stattdessen [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) verwenden.
- Versendete DOM-Ereignisse können nun erneut versendet werden. Dies macht Firefox 3.5 den Acid 3 Test 30 bestehen.
- Verbesserungen beim Umgang mit DOM 2 Range wurden vorgenommen.
- Im nicht-chromen Scope sind gefangene Objekte in Ausnahmen jetzt das tatsächlich geworfene Objekt anstelle eines [`XPConnect`](https://web.archive.org/web/20210423135742/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Language_bindings/XPConnect)-Wrappers, der das geworfene Objekt enthält.
- SVG-ID-Referenzen sind jetzt live.
- SVG-Filter funktionieren jetzt für `foreignObject`.
- Die `GetSVGDocument()`-Methode wurde zu [`object`](/de/docs/Web/HTML/Reference/Elements/object)- und [`iframe`](/de/docs/Web/HTML/Reference/Elements/iframe)-Elementen hinzugefügt, um die Kompatibilität zu gewährleisten.
- Implizites Setzen von Properties in Objekt- und Array-Initialisierern führt in JavaScript nicht mehr zu Ausführung von Setzern.
- Die Variable `gDownloadLastDir.path` wurde in `gDownloadLastDir.file` umbenannt, da sie sich auf eine `nsIFile` bezieht, nicht auf einen Pfad.
- Die Variable `gDownloadLastDirPath` wurde in `gDownloadLastDirFile` umbenannt, da sie sich auf eine `nsIFile` bezieht, nicht auf einen Pfad.
- Ab Firefox 3.5 können Sie keine `data:` Bindungen in Chrome-Paketen verwenden, die `XPCNativeWrapper`-Automatisierung erhalten.

### Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Aktualisieren von Erweiterungen für Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Updating_extensions) beginnen, das einen hilfreichen Überblick über Änderungen bietet, die Ihre Erweiterung betreffen könnten.

#### Neue Komponenten und Funktionalität

- [Unterstützung des privaten Surfmodus](https://web.archive.org/web/20191029190431/https://developer.mozilla.org/de/docs/Archive/Mozilla/Supporting_private_browsing_mode)
  - : Firefox 3.5 bietet einen privaten Surfmodus, in dem die Aktivitäten des Benutzers nicht aufgezeichnet werden. Erweiterungen können den privaten Surfmodus gemäß den Richtlinien in diesem Artikel unterstützen.
- [Sicherheitsänderungen in Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Security_changes)
  - : Dieser Artikel behandelt sicherheitsbezogene Änderungen in Firefox 3.5.
- [Theme-Änderungen in Firefox 3.5](https://web.archive.org/web/20191004004454/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_3.5)
  - : Dieser Artikel behandelt theme-bezogene Änderungen in Firefox 3.5.
- Überwachung von WLAN-Zugangspunkten
  - : Code mit UniversalXPConnect-Berechtigungen kann nun die Liste der verfügbaren Zugangspunkte überwachen und Informationen zu SSIDs, MAC-Adressen und Signalstärke abrufen. Dies kann in Verbindung mit Geolocation zur Bereitstellung von WLAN-basiertem Standortdienst verwendet werden.

#### Wichtige Änderungen und Verbesserungen

- Das XUL `textbox` Widget bietet nun einen `search`-Typ für Suchfelder.
- Um das Verschieben und Ablegen von Tabs zwischen Fenstern zu unterstützen, hat das `browser` Widget jetzt eine `swapDocShells()`-Methode.
- Das Attribut `level` wurde zum `panel`-Element hinzugefügt; es gibt an, ob Panels über anderen Anwendungen oder nur über dem Fenster angezeigt werden, in dem das Panel enthalten ist.
- XUL-Elemente unterstützen jetzt die Properties `clientHeight`, `clientWidth`, `scrollHeight` und `scrollWidth`.
- `keyset` enthält jetzt ein `disabled`-Attribut.
- Zusätzlich können `keyset`s nun mit der Methode [`removeChild()`](/de/docs/Web/API/Node/removeChild) des Knotens entfernt werden.
- `mozIStorageStatement` hat die Methode `initialize()` entfernt; Verbraucher sollten stattdessen die Methode `createStatement()` verwenden, um ein neues Statement-Objekt zu erhalten.
- Die Storage-API bietet jetzt Unterstützung für asynchrone Anfragen.
- Die `nsICookie2` Schnittstelle stellt jetzt die Zeit, zu der Cookies erstellt wurden, in ihrem neuen Attribut `creationTime` bereit.
- Es wurde ein Flag zu `nsIProtocolHandler` hinzugefügt (`URI_IS_LOCAL_RESOURCE`), das während der Chrome-Registrierung geprüft wird, um sicherzustellen, dass ein Protokoll registriert werden darf.
- Firefox sucht jetzt auf Linux nach Plugins im Verzeichnis `/usr/lib/mozilla/plugins` sowie an den zuvor unterstützten Orten.
- Die Plugin-API wurde aktualisiert, um Unterstützung für den privaten Surfmodus hinzuzufügen; Sie können jetzt `NPN_GetValue()` verwenden, um den Status des privaten Surfmodus anhand der Variablen `NPNVprivateModeBool` zu überprüfen.

## Neue Funktionen für Endbenutzer

### Benutzererlebnis

- Standortabhängiges Browsen
  - : Wenn Sie es wünschen, können Sie Firefox 3.5 erlauben, Informationen über Ihren aktuellen Standort mit Websites zu teilen. Firefox 3.5 kann Informationen über das Netzwerk, mit dem Sie verbunden sind, verwenden, um Ihren Standort zu teilen. Natürlich wird vorher Ihre Erlaubnis eingeholt, um Ihre Privatsphäre zu gewährleisten.
- Unterstützung für offene Audio- und Videoformate
  - : Firefox 3.5 unterstützt eingebettete Videos und Audios im offenen Ogg-Format sowie WAV für Audio. Keine Plugins, keine verwirrenden Fehlermeldungen über nicht verfügbare Plattformen.
- Lokale Datenspeicherung
  - : Webanwendungen können jetzt die lokalen Speicherkapazitäten von Web Storage nutzen, um Daten auf Ihrem Computer zu speichern. Dies ist ideal für alles von Site-Einstellungen bis hin zu komplexeren Daten.

### Sicherheit und Datenschutz

- Privates Surfen
  - : Müssen Sie den Computer einer anderen Person verwenden? Schalten Sie den privaten Surfmodus ein und nichts über Ihre Sitzung, einschließlich Cookies, Verlauf und anderer potenziell privater Informationen, wird aufgezeichnet.
- Bessere Datenschutzkontrollen
  - : Das Datenschutz-Paneel wurde komplett neu gestaltet, um Benutzern mehr Kontrolle über ihre privaten Informationen zu geben. Benutzer können wählen, ob sie alles behalten oder verwerfen möchten, von Verlaufsinformationen über Cookies bis hin zu Downloads und Informationen in Formularfeldern. Außerdem können Benutzer festlegen, ob sie den Verlauf und/oder Lesezeichen in den automatischen Vorschlägen der Adressleiste einbeziehen möchten, um zu verhindern, dass private Webadressen unerwartet auftauchen, während sie in der Adressleiste tippen.

### Leistung

- Schnellere JavaScript-Leistung
  - : JavaScript, das "J" in "AJAX", wird in Firefox 3.5 mit der neuen TraceMonkey JavaScript Engine dramatisch beschleunigt. Webanwendungen sind deutlich schneller als in Firefox 3.
- Schnellere Seitendarstellung
  - : Webinhalte werden in Firefox 3.5 schneller gezeichnet, dank Technologien wie "spekulativer Parsing". Ihre Benutzer müssen nicht wissen, was das bedeutet, außer "es lässt Dinge schneller zeichnen".

## Siehe auch

{{Firefox_for_developers}}

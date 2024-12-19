---
title: Firefox 3.5 für Entwickler
slug: Mozilla/Firefox/Releases/3.5
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{FirefoxSidebar}}

[Firefox 3.5](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/3.5/releasenotes/) (_veröffentlicht am 30. Juni 2009_) führt eine Reihe neuer Funktionen ein sowie zusätzliche und verbesserte Unterstützung für eine Vielzahl von Webstandards. Dieser Artikel bietet eine umfassende Liste mit Links zu Artikeln, die die wichtigsten Verbesserungen behandeln.

## Neue Entwicklerfunktionen in Firefox 3.5

### Für Web- und Anwendungsentwickler

#### HTML 5 Unterstützung

- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Firefox 3.5 fügt Unterstützung für die HTML 5 [`audio`](/de/docs/Web/HTML/Element/audio) und [`video`](/de/docs/Web/HTML/Element/video) Elemente hinzu.
- Offline-Ressourcen in Firefox
  - : Firefox 3.5 unterstützt nun vollständig die HTML 5 Offline-Ressourcen-Spezifikation.
- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Die HTML 5 Drag and Drop API ermöglicht Unterstützung für das Ziehen und Ablegen von Elementen innerhalb und zwischen Websites. Dies bietet auch eine einfachere API, die von Erweiterungen und auf Mozilla basierenden Anwendungen genutzt werden kann.

#### Neu unterstützte CSS-Funktionen

- [Herunterladbare Schriften unterstützen](/de/docs/Web/CSS/@font-face)
  - : Die neue {{ cssxref("@font-face") }} @Regel ermöglicht es Webseiten, herunterladbare Schriften bereitzustellen, sodass Webseiten genau so dargestellt werden können, wie es der Seitenautor erwartet.
- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
  - : Firefox 3.5 unterstützt nun CSS-Medienabfragen, die die Unterstützung von medienabhängigen Stylesheets verbessern.
- {{ cssxref("::before") }} und {{ cssxref("::after") }} auf CSS 2.1 aktualisiert
  - : Die `::before` und `::after` Pseudoelemente wurden auf vollständige CSS 2.1 Unterstützung aktualisiert und fügen Unterstützung für die Eigenschaften `position`, `float`, `list-style-*` und einige `display` Eigenschaften hinzu.
- `ch` Einheiten für Längen
  - : Die `ch` Einheit kann jetzt überall verwendet werden, wo eine [Längeneinheit](/de/docs/Web/CSS/length#units) akzeptiert wird. `1ch` ist die Breite des Zeichens "0" (null).
- {{ cssxref("opacity") }}
  - : Die `-moz-opacity` Mozilla-Erweiterung zu CSS wurde zugunsten der Standard-Eigenschaft `opacity` entfernt.
- {{ cssxref("text-shadow") }}
  - : Die `text-shadow` Eigenschaft, die es Webinhalten ermöglicht, Schatteneffekte auf Text und Textdekorationen anzuwenden, wird jetzt unterstützt.
- {{ cssxref("overflow-wrap") }}
  - : Diese neu unterstützte Eigenschaft ermöglicht es Inhalten zu spezifizieren, ob Zeilen innerhalb von Wörtern gebrochen werden dürfen, um Überlauf zu verhindern, wenn eine ansonsten unbrechbare Zeichenfolge zu lang ist, um in eine Zeile zu passen.
- Die `white-space` Eigenschaft unterstützt den Wert `pre-line`
  - : Die {{ cssxref("white-space") }} Eigenschaft akzeptiert nun den Wert `pre-line`.
- `-moz-box-shadow`

  `-moz-border-image`

  `-moz-column-rule`

  `-moz-column-rule-width`

  `-moz-column-rule-style`

  `-moz-column-rule-color`

  - : Firefox 3.5 fügt Unterstützung für diese Mozilla-Erweiterungen zu CSS hinzu.

- Der {{ cssxref("color_value#Mozilla_Extensions","-moz-nativehyperlinktext") }} Farbwert
  - : Dieser neue Farbwert repräsentiert die Standard-Hyperlinkfarbe des Systems des Benutzers.
- Die `-moz-window-shadow` Eigenschaft und die `:-moz-system-metric(mac-graphite-theme)` Pseudoklasse
  - : Diese neuen CSS-Funktionen wurden hinzugefügt, um das Thema zu erleichtern.
- Neue Werte für `-moz-appearance`
  - : Die Werte `-moz-win-glass` und `-moz-mac-unified-toolbar` wurden zu `-moz-appearance` hinzugefügt.
- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
  - : Firefox 3.5 unterstützt CSS-Transformationen. Details finden Sie unter {{ cssxref("transform", "-moz-transform") }} und {{ cssxref("transform-origin", "-moz-transform-origin") }}.
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
  - : Firefox 3.5 fügt Unterstützung für die Web Storage `localStorage` Eigenschaft hinzu, die eine Möglichkeit bietet, dass Webanwendungen Daten lokal auf dem Computer des Benutzers speichern.
- [Verwendung von Webworkern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Firefox 3.5 unterstützt Webworker, um eine einfache Multithreading-Unterstützung in Webanwendungen zu ermöglichen.
- [Verwendung von Geolocation](/de/docs/Web/API/Geolocation_API)
  - : Firefox 3.5 unterstützt die Geolocation API, die es Webanwendungen ermöglicht, Informationen über den aktuellen Standort des Benutzers zu erhalten, wenn ein Anbieter für diese Informationen installiert und aktiviert ist.
- [Lokalisierung von DOM-Elementen mit Selektoren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
  - : Die Selector-API ermöglicht das Abfragen eines Dokuments, um die Elemente zu lokalisieren, die einer gegebenen Auswahlregel entsprechen.
- [Mausgesten-Ereignisse](https://web.archive.org/web/20210724051233/https://developer.mozilla.org/de/docs/Web/Events/Mouse_gesture_events)
  - : Firefox 3.5 unterstützt Mausgesten-Ereignisse wie Trackpad-Wischgesten.
- [Das `NodeIterator` Objekt](/de/docs/Web/API/NodeIterator)
  - : Das `NodeIterator` Objekt bietet Unterstützung für die Iteration über die Liste der Knoten in einem DOM-Unterbaum.
- Das `MozAfterPaint` Ereignis
  - : Dieses neue DOM-Ereignis wird nach Malaktualisierungen in Fenstern gesendet.
- Das `MozMousePixelScroll` Ereignis
  - : Dieses neue DOM-Ereignis ermöglicht die Erkennung von pixelbasierten Mausrad-Scroll-Ereignissen anstelle von linebassierten Scroll-Ereignissen.

#### Neue JavaScript-Funktionen

- [Neu in JavaScript 1.8.1](https://web.archive.org/web/20200805002842/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.1)
  - : Ein Überblick über alle Änderungen in JavaScript 1.8.1.
- [`Object.getPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
  - : Diese neue Methode gibt das Prototyp-Objekt eines bestimmten Objekts zurück.
- Verwenden von nativen JSON
  - : Firefox 3.5 bietet native Unterstützung für {{Glossary("JSON", "JSON")}}.
- Neue Trim-Methoden auf dem String Objekt
  - : Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) Objekt hat jetzt die Methoden [`trim()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim), [`trimLeft()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) und [`trimRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd).

#### Netzwerk

- Cross-Site-Zugriffskontrollen für HTTP
  - : In Firefox 3.5 ist es jetzt möglich, dass HTTP-Anfragen, einschließlich der von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gestellten, domänenübergreifend funktionieren, wenn der Server dies unterstützt.
- [Fortschrittsereignisse für `XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
  - : Fortschrittsereignisse werden jetzt zur Verfügung gestellt, um Erweiterungen die Überwachung des Fortschritts von Anfragen zu ermöglichen.
- Verbesserte synchrone `XMLHttpRequest` Unterstützung
  - : [DOM-Timeout](https://bugzil.la/340345) und [Eingabeereignisse](https://bugzil.la/333198) werden jetzt während eines synchronen `XMLHttpRequest` unterdrückt.
- DNS-Vorabruf steuern
  - : Firefox 3.5 bietet DNS-Vorabruf an, wobei es die Namensauflösung von Domänen im Voraus für Links auf der aktuellen Seite durchführt, um Zeit zu sparen, wenn Links tatsächlich angeklickt werden. Dieser Artikel beschreibt, wie Sie Ihre Website anpassen können, um den Vorabruf zu deaktivieren oder anzupassen, wie der Vorabruf funktioniert.

#### Neue Canvas-Funktionen

- [HTML 5 Text-API für `canvas` Elemente](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Canvas-Elemente unterstützen jetzt die HTML 5 Text-API.
- [Schatteneffekte in einem `canvas`](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows)
  - : Canvas-Schatteneffekte werden jetzt unterstützt.
- [`createImageData()`](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object)
  - : Die Canvas-Methode `createImageData()` wird jetzt unterstützt, wodurch Code ein `ImageData` Objekt speziell erstellen kann, anstatt es automatisch erstellen zu lassen. Dies kann die Leistung anderer `ImageData` Methoden verbessern, indem verhindert wird, dass sie das Objekt erstellen müssen.
- `moz-opaque` Attribut
  - : Das [`moz-opaque`](/de/docs/Web/HTML/Element/canvas#moz-opaque) Attribut wurde hinzugefügt, das dem Canvas mitteilt, ob Durchsichtigkeit ein Faktor sein wird. Wenn das Canvas weiß, dass keine Durchsichtigkeit vorliegt, kann die Malleistung optimiert werden. Siehe auch [`HTMLCanvasElement.mozOpaque`](/de/docs/Web/API/HTMLCanvasElement/mozOpaque).

#### Neue SVG-Funktionen

- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
  - : Sie können jetzt SVG-Effekte auf HTML- und XHTML-Inhalte anwenden; dieser Artikel beschreibt, wie.

#### Verschiedene neue Funktionen

- [ICC-Farbkorrektur in Firefox](/de/docs/Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox)
  - : Firefox 3.5 unterstützt jetzt ICC-Farbkorrektur für markierte Bilder.
- Das `defer` Attribut wird nun auf [`script`](/de/docs/Web/HTML/Element/script) Elementen unterstützt
  - : Dieses Attribut zeigt dem Browser an, dass er die Seite möglicherweise weiter analysieren und rendern kann, ohne darauf zu warten, dass das Skript das Ausführen beendet hat.

### Weitere Verbesserungen

- Die [`wholeText`](/de/docs/Web/API/Text/wholeText) Eigenschaft des Textknotens und die `Text.replaceWholeText()` Methode wurden implementiert.
- Die Eigenschaft [`element.children`](/de/docs/Web/API/Element/children) wurde hinzugefügt. Sie gibt eine _Sammlung_ von Kinderelementen des gegebenen Elements zurück.
- Die Eigenschaft [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) wird jetzt unterstützt, um bearbeitbare Elemente zu unterstützen.
- Die Element Traversal API wird jetzt vom DOM [Element](/de/docs/Web/API/Element) Objekt unterstützt.
- HTML-Dokumentknoten können jetzt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) geklont werden.
- Die nicht standardmäßige `getBoxObjectFor()` DOM-Methode wurde entfernt. Sie sollten stattdessen [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) verwenden.
- Versendete DOM-Ereignisse können jetzt erneut versendet werden. Dadurch besteht Firefox 3.5 den Acid 3 Test 30.
- Verbesserungen wurden am Handling von DOM 2 Range vorgenommen.
- Im nicht-chrome Scope sind abgefangene Objekte in Ausnahmen jetzt das tatsächliche geworfene Objekt statt eines [`XPConnect`](https://web.archive.org/web/20210423135742/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Language_bindings/XPConnect) Wrappers, der das geworfene Objekt enthält.
- SVG-ID-Referenzen sind jetzt live.
- SVG-Filter funktionieren jetzt für `foreignObject`.
- Die `GetSVGDocument()` Methode wurde den [`object`](/de/docs/Web/HTML/Element/object) und [`iframe`](/de/docs/Web/HTML/Element/iframe) Elementen für Kompatibilität hinzugefügt.
- Implizite Einstellungen von Eigenschaften in Objekt- und Array-Initialisierern führen keine Setter in JavaScript mehr aus.
- Die Variable `gDownloadLastDir.path` wurde in `gDownloadLastDir.file` umbenannt, da sie sich auf eine `nsIFile` bezieht, nicht auf einen Pfad.
- Die Variable `gDownloadLastDirPath` wurde in `gDownloadLastDirFile` umbenannt, da sie sich auf eine `nsIFile` bezieht, nicht auf einen Pfad.
- Ab Firefox 3.5 können Sie keine `data:` Bindungen mehr in Chrome-Paketen verwenden, die `XPCNativeWrapper` Automatisierung erhalten.

### Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Aktualisieren von Erweiterungen für Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Updating_extensions) beginnen, das einen hilfreichen Überblick darüber bietet, welche Änderungen Ihre Erweiterung beeinflussen können.

#### Neue Komponenten und Funktionalität

- [Unterstützung des privaten Modus](https://web.archive.org/web/20191029190431/https://developer.mozilla.org/de/docs/Archive/Mozilla/Supporting_private_browsing_mode)
  - : Firefox 3.5 bietet den privaten Modus, der die Aktivitäten des Benutzers nicht aufzeichnet. Erweiterungen können den privaten Modus unterstützen, indem sie den in diesem Artikel angebotenen Richtlinien folgen.
- [Sicherheitsänderungen in Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Security_changes)
  - : Dieser Artikel behandelt sicherheitsbezogene Änderungen in Firefox 3.5.
- [Designänderungen in Firefox 3.5](https://web.archive.org/web/20191004004454/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_3.5)
  - : Dieser Artikel behandelt designbezogene Änderungen in Firefox 3.5.
- Überwachung von WLAN-Zugangspunkten
  - : Code mit UniversalXPConnect-Berechtigungen kann jetzt die Liste der verfügbaren Zugangspunkte überwachen und Informationen zu deren SSIDs, MAC-Adressen und Signalstärke abrufen. Dies kann zusammen mit der Geolokalisierung verwendet werden, um einen auf WLAN basierten Ortungsdienst anzubieten.

#### Bemerkenswerte Änderungen und Verbesserungen

- Das XUL `textbox` Widget bietet jetzt einen `search` Typ für die Verwendung als Suchfelder an.
- Um das Ziehen und Ablegen von Tabs zwischen Fenstern zu unterstützen, hat das `browser` Widget jetzt eine `swapDocShells()` Methode.
- Das `level` Attribut wurde dem `panel` Element hinzugefügt; dies gibt an, ob Panels über anderen Anwendungen oder nur über dem Fenster erscheinen, in dem sich das Panel befindet.
- XUL-Elemente unterstützen jetzt die Eigenschaften `clientHeight`, `clientWidth`, `scrollHeight` und `scrollWidth`.
- `keyset` umfasst jetzt ein `disabled` Attribut.
- Darüber hinaus können `keyset`s jetzt mit der Methode [`removeChild()`](/de/docs/Web/API/Node/removeChild) des Knotens entfernt werden.
- `mozIStorageStatement` hat die `initialize()` Methode entfernt; Verbraucher sollten die `createStatement()` Methode stattdessen verwenden, um ein neues Statement-Objekt zu erhalten.
- Die Storage API bietet jetzt Unterstützung für asynchrone Anfragen.
- Das `nsICookie2` Interface zeigt jetzt die Zeit an, zu der Cookies in ihrem neuen `creationTime` Attribut erstellt wurden.
- Ein Flag wurde `nsIProtocolHandler` (`URI_IS_LOCAL_RESOURCE`) hinzugefügt, das während der Chrome-Registrierung überprüft wird, um sicherzustellen, dass ein Protokoll registriert werden darf.
- Firefox sucht jetzt nach Plugins in `/usr/lib/mozilla/plugins` unter Linux sowie an den zuvor unterstützten Standorten.
- Die Plugin-API wurde aktualisiert, um den privaten Modus zu unterstützen; Sie können jetzt `NPN_GetValue()` verwenden, um den Status des privaten Modus mithilfe der Variable `NPNVprivateModeBool` abzufragen.

## Neue Funktionen für Endbenutzer

### Benutzererfahrung

- Standortbezogenes Browsen
  - : Falls Sie es möchten, können Sie Firefox 3.5 erlauben, Informationen über Ihren aktuellen Standort mit Websites zu teilen. Firefox 3.5 kann Informationen über das Netzwerk, mit dem Sie verbunden sind, verwenden, um Ihren Standort zu teilen. Natürlich fragt es vorher nach Ihrer Erlaubnis, um Ihre Privatsphäre zu gewährleisten.
- Unterstützung für offene Audio- und Videoformate
  - : Firefox 3.5 unterstützt eingebettetes Video und Audio im offenen Ogg-Format sowie WAV für Audio. Keine Plugins, keine verwirrenden Fehlermeldungen über das Installieren von etwas, das auf Ihrer Plattform ohnehin nicht verfügbar ist.
- Lokale Datenspeicherung
  - : Webanwendungen können jetzt die lokalen Speicherfunktionen von Web Storage nutzen, um Daten auf Ihrem Computer zu speichern. Dies ist ideal für alles, von Website-Einstellungen bis hin zu komplexeren Daten.

### Sicherheit und Datenschutz

- Privates Surfen
  - : Müssen Sie den Computer einer anderen Person verwenden? Aktivieren Sie den privaten Modus und es wird nichts über Ihre Sitzung aufgezeichnet, einschließlich Cookies, Verlauf und anderen potenziell privaten Informationen.
- Bessere Datenschutzkontrollen
  - : Die Datenschutzeinstellung wurde vollständig neu gestaltet, um den Nutzern mehr Kontrolle über ihre privaten Informationen zu bieten. Nutzer können wählen, ob sie alles einschließlich Verlauf, Cookies, Downloads und Formularinformationen behalten oder verwerfen möchten. Außerdem können Nutzer festlegen, ob sie Verlauf und/oder Lesezeichen in den automatischen Vorschlägen der Adressleiste einbeziehen möchten, sodass Sie private Webadressen davon abhalten können, unerwartet beim Tippen in der Adressleiste angezeigt zu werden.

### Leistung

- Schnellere JavaScript-Leistung
  - : JavaScript, das „J“ in „AJAX“, wird in Firefox 3.5 mit der neuen TraceMonkey JavaScript-Engine drastisch beschleunigt. Webanwendungen sind viel schneller als in Firefox 3.
- Schnellere Seitendarstellung
  - : Webinhalte werden in Firefox 3.5 dank Technologien wie "Spekulatives Parsing" schneller dargestellt. Ihre Nutzer müssen nicht wissen, was das bedeutet, außer dass "es macht Dinge schneller zeichnen".

## Siehe auch

{{Firefox_for_developers}}

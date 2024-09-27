---
title: Firefox 3.5 für Entwickler
slug: Mozilla/Firefox/Releases/3.5
l10n:
  sourceCommit: e099e74fe5c09c46f0dfe044894692721a713d29
---

{{FirefoxSidebar}}

[Firefox 3.5](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/3.5/releasenotes/) (_veröffentlicht am 30. Juni 2009_) führt eine Reihe neuer Funktionen ein und bietet zusätzliche und verbesserte Unterstützung für eine Vielzahl von Webstandards. Dieser Artikel bietet eine umfassende Liste mit Links zu Artikeln, die die wichtigsten Verbesserungen behandeln.

## Neue Entwicklerfunktionen in Firefox 3.5

### Für Website- und Anwendungsentwickler

#### HTML 5-Unterstützung

- [Verwendung von Audio und Video](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : Firefox 3.5 fügt Unterstützung für die HTML 5-Elemente [`audio`](/de/docs/Web/HTML/Element/audio) und [`video`](/de/docs/Web/HTML/Element/video) hinzu.
- Offline-Ressourcen in Firefox
  - : Firefox 3.5 unterstützt jetzt vollständig die HTML 5-Spezifikation für Offline-Ressourcen.
- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Die HTML 5-Drag-and-Drop-API ermöglicht das Ziehen und Ablegen von Elementen innerhalb und zwischen Websites. Dies bietet auch eine einfachere API für Erweiterungen und auf Mozilla basierende Anwendungen.

#### Neu unterstützte CSS-Funktionen

- [Unterstützung für herunterladbare Schriftarten](/de/docs/Web/CSS/@font-face)
  - : Die neue {{ cssxref("@font-face") }} @rule erlaubt es Webseiten, herunterladbare Schriftarten bereitzustellen, sodass Seiten genau so angezeigt werden können, wie der Autor es erwartet.
- [CSS-Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
  - : Firefox 3.5 unterstützt jetzt CSS-Media-Queries, die die Unterstützung für medienabhängige Stylesheets verbessern.
- {{ cssxref("::before") }} und {{ cssxref("::after") }} auf CSS 2.1 aktualisiert
  - : Die Pseudoelemente `::before` und `::after` wurden auf volle CSS 2.1-Unterstützung aktualisiert, einschließlich der Unterstützung für die Eigenschaften `position`, `float`, `list-style-*` und einige `display`-Eigenschaften.
- `ch` Einheiten für Längen
  - : Die `ch`-Einheit kann jetzt überall dort verwendet werden, wo eine [Längeneinheit](/de/docs/Web/CSS/length#units) akzeptiert wird. `1ch` ist die Breite des "0" (Null)-Zeichens.
- {{ cssxref("opacity") }}
  - : Die Mozilla-Erweiterung `-moz-opacity` zu CSS wurde zugunsten der Standard-Eigenschaft `opacity` entfernt.
- {{ cssxref("text-shadow") }}
  - : Die `text-shadow`-Eigenschaft, die es erlaubt, Schatteneffekte auf Text und Textdekorationen anzuwenden, wird jetzt unterstützt.
- {{ cssxref("overflow-wrap") }}
  - : Diese neu unterstützte Eigenschaft ermöglicht es Inhalten zu spezifizieren, ob Zeilen innerhalb von Wörtern gebrochen werden dürfen, um Überlauf zu verhindern, wenn ein ansonsten untrennbares String zu lang ist, um auf eine Zeile zu passen.
- `white-space`-Eigenschaft unterstützt den `pre-line`-Wert
  - : Die {{ cssxref("white-space") }}-Eigenschaft akzeptiert jetzt den `pre-line`-Wert.
- `-moz-box-shadow`

  `-moz-border-image`

  `-moz-column-rule`

  `-moz-column-rule-width`

  `-moz-column-rule-style`

  `-moz-column-rule-color`

  - : Firefox 3.5 fügt Unterstützung für diese Mozilla-Erweiterungen zu CSS hinzu.

- Der {{ cssxref("color_value#Mozilla_Extensions","-moz-nativehyperlinktext") }} Farbwert
  - : Dieser neue Farbwert repräsentiert die Standard-Hyperlinkfarbe des Systems des Benutzers.
- Die `-moz-window-shadow`-Eigenschaft und die `:-moz-system-metric(mac-graphite-theme)` Pseudoklasse
  - : Diese neuen CSS-Funktionen wurden hinzugefügt, um das Theming zu erleichtern.
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
  - : Firefox 3.5 fügt Unterstützung für die Web Storage `localStorage`-Eigenschaft hinzu, die es ermöglicht, Daten lokal auf dem Computer des Clients zu speichern.
- [Verwendung von Webarbeitern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Firefox 3.5 unterstützt Webarbeiter, um eine einfache Multithreading-Unterstützung in Webanwendungen zu ermöglichen.
- [Verwendung von Geolocation](/de/docs/Web/API/Geolocation_API)
  - : Firefox 3.5 unterstützt die Geolocation-API, die es Webanwendungen ermöglicht, Informationen über den aktuellen Standort des Benutzers zu erhalten, wenn ein Anbieter für diese Informationen installiert und aktiviert ist.
- [DOM-Elemente mittels Selektoren lokalisieren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
  - : Die Selektoren-API ermöglicht das Abfragen eines Dokuments, um die Elemente zu finden, die einem bestimmten Auswahlkriterium entsprechen.
- [Mausgesten-Ereignisse](https://web.archive.org/web/20210724051233/https://developer.mozilla.org/de/docs/Web/Events/Mouse_gesture_events)
  - : Firefox 3.5 unterstützt Mausgestenereignisse wie Trackpad-Gesten.
- [Das `NodeIterator` Objekt](/de/docs/Web/API/NodeIterator)
  - : Das `NodeIterator`-Objekt bietet Unterstützung für das Iterieren über die Liste der Knoten in einem DOM-Teilbaum.
- Das `MozAfterPaint`-Ereignis
  - : Dieses neue DOM-Ereignis wird nach Malaktualisierungen in Fenstern gesendet.
- Das `MozMousePixelScroll`-Ereignis
  - : Dieses neue DOM-Ereignis ermöglicht die Erkennung von pixelbasierten Scroll-Ereignissen mit der Maus, anstelle von zeilenbasierten Scroll-Ereignissen.

#### Neue JavaScript-Funktionen

- [Neu in JavaScript 1.8.1](https://web.archive.org/web/20200805002842/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.1)
  - : Ein Überblick über alle Änderungen in JavaScript 1.8.1.
- [`Object.getPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
  - : Diese neue Methode gibt das Prototyp-Objekt eines angegebenen Objekts zurück.
- Verwendung von nativem JSON
  - : Firefox 3.5 hat native Unterstützung für [JSON](/de/docs/Glossary/JSON).
- Neue Trim-Methoden am String-Objekt
  - : Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt verfügt nun über die Methoden [`trim()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim), [`trimLeft()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) und [`trimRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd).

#### Netzwerk

- Cross-Site-Zugriffssteuerungen für HTTP
  - : In Firefox 3.5 ist es jetzt möglich, dass HTTP-Anfragen, einschließlich solcher, die durch [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gemacht werden, domainsübergreifend funktionieren, wenn der Server dies unterstützt.
- [Fortschrittsereignisse für `XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
  - : Fortschrittsereignisse werden jetzt angeboten, um Erweiterungen die Überwachung des Fortschritts von Anfragen zu ermöglichen.
- Verbesserte synchrone `XMLHttpRequest`-Unterstützung
  - : [DOM Timeout](https://bugzil.la/340345) und [Eingabereignisse](https://bugzil.la/333198) werden jetzt während einer synchronen `XMLHttpRequest` unterdrückt.
- Kontrolle über DNS-Vorababrufe
  - : Firefox 3.5 bietet DNS-Vorababrufe, bei denen die Domainnamen-Auflösung im Voraus für Links auf der aktuellen Seite durchgeführt wird, um Zeit zu sparen, wenn die Links tatsächlich angeklickt werden. Dieser Artikel beschreibt, wie Sie Ihre Website anpassen können, um das Vorabladen zu deaktivieren oder die Arbeitsweise des Vorabladens anzupassen.

#### Neue Canvas-Funktionen

- [HTML 5 Text-API für `canvas`-Elemente](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Canvas-Elemente unterstützen jetzt die HTML 5 Text-API.
- [Schatteneffekte in einem `canvas`](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows)
  - : Schatteneffekte für Canvas werden jetzt unterstützt.
- [`createImageData()`](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object)
  - : Die Canvas-Methode `createImageData()` wird jetzt unterstützt, was es ermöglicht, ein `ImageData`-Objekt spezifisch zu erstellen, anstatt es automatisch erstellen zu lassen. Dies kann die Leistung anderer `ImageData`-Methoden verbessern, indem sie das Erstellen des Objekts verhindern.
- `moz-opaque` Attribut
  - : Das [`moz-opaque`](/de/docs/Web/HTML/Element/canvas#moz-opaque) Attribut wurde hinzugefügt, das dem Canvas mitteilt, ob Transluzenz ein Faktor sein wird. Wenn das Canvas weiß, dass keine Transluzenz vorhanden ist, kann die Malleistung optimiert werden. Siehe auch [`HTMLCanvasElement.mozOpaque`](/de/docs/Web/API/HTMLCanvasElement/mozOpaque).

#### Neue SVG-Funktionen

- [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
  - : Sie können jetzt SVG-Effekte auf HTML- und XHTML-Inhalte anwenden; dieser Artikel beschreibt, wie.

#### Verschiedene neue Funktionen

- [ICC-Farbkorrektur in Firefox](/de/docs/Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox)
  - : Firefox 3.5 unterstützt jetzt die ICC-Farbkorrektur für markierte Bilder.
- Das `defer` Attribut wird jetzt auf [`script`](/de/docs/Web/HTML/Element/script)-Elementen unterstützt
  - : Dieses Attribut zeigt dem Browser an, dass er das Parsen und Rendern der Seite fortsetzen _darf_, ohne darauf zu warten, dass das Skript die Ausführung beendet hat.

### Weitere Verbesserungen

- Die Textknoteneigenschaft [`wholeText`](/de/docs/Web/API/Text/wholeText) und die Methode `Text.replaceWholeText()` wurden implementiert.
- Die Eigenschaft [`element.children`](/de/docs/Web/API/Element/children) wurde hinzugefügt. Sie gibt eine _Sammlung_ der Kind-Elemente des angegebenen Elements zurück.
- Die Eigenschaft [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) wird jetzt unterstützt, um bearbeitbare Elemente zu unterstützen.
- Die Element Traversal API wird jetzt vom DOM [Element](/de/docs/Web/API/Element)-Objekt unterstützt.
- HTML-Dokumentknoten können jetzt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) geklont werden.
- Die nicht standardisierte DOM-Methode `getBoxObjectFor()` wurde entfernt. Sie sollten stattdessen [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) verwenden.
- Versendete DOM-Ereignisse können jetzt erneut versendet werden. Dies führt dazu, dass Firefox 3.5 den Acid 3-Test 30 besteht.
- Verbesserungen wurden bei der Behandlung von DOM 2 Ranges vorgenommen.
- In nicht-chromumfänglichen Bereichen sind gefangene Objekte in Ausnahmen jetzt das tatsächlich geworfene Objekt anstelle eines [`XPConnect`](https://web.archive.org/web/20210423135742/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Language_bindings/XPConnect)-Wrappers, der das geworfene Objekt enthält.
- SVG-ID-Referenzen sind jetzt live.
- SVG-Filter funktionieren jetzt für `foreignObject`.
- Die Methode `GetSVGDocument()` wurde zu [`object`](/de/docs/Web/HTML/Element/object)- und [`iframe`](/de/docs/Web/HTML/Element/iframe)-Elementen für die Kompatibilität hinzugefügt.
- Implizite Einstellungen von Eigenschaften in Objekt- und Array-Initialisierern führen nicht mehr zum Ausführen von Setzern in JavaScript.
- Die Variable `gDownloadLastDir.path` wurde in `gDownloadLastDir.file` umbenannt da sie sich auf ein `nsIFile`, nicht auf einen Pfad bezieht.
- Die Variable `gDownloadLastDirPath` wurde in `gDownloadLastDirFile` umbenannt da sie sich auf ein `nsIFile`, nicht auf einen Pfad bezieht.
- Ab Firefox 3.5 können Sie keine `data:`-Bindings mehr in Chromepaketen verwenden, die `XPCNativeWrapper`-Automatisierung erhalten.

### Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen der [Aktualisierung von Erweiterungen für Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Updating_extensions) beginnen, das einen hilfreichen Überblick über Änderungen bietet, die Ihre Erweiterung betreffen können.

#### Neue Komponenten und Funktionen

- [Unterstützung des privaten Modus beim Surfen](https://web.archive.org/web/20191029190431/https://developer.mozilla.org/de/docs/Archive/Mozilla/Supporting_private_browsing_mode)
  - : Firefox 3.5 bietet einen privaten Surfmodus, der die Aktivitäten des Benutzers nicht aufzeichnet. Erweiterungen können den privaten Modus unter Berücksichtigung der in diesem Artikel gegebenen Richtlinien unterstützen.
- [Sicherheitsänderungen in Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Security_changes)
  - : Dieser Artikel behandelt sicherheitsrelevante Änderungen in Firefox 3.5.
- [Änderungen am Design in Firefox 3.5](https://web.archive.org/web/20191004004454/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_3.5)
  - : Dieser Artikel behandelt designbezogene Änderungen in Firefox 3.5.
- Überwachung von WLAN-Zugangspunkten
  - : Code mit UniversalXPConnect-Berechtigungen kann nun die Liste der verfügbaren Zugangspunkte überwachen und Informationen zu deren SSIDs, MAC-Adressen und Signalstärken abrufen. Dies kann in Verbindung mit Geolocation verwendet werden, um einen standortbasierten Dienst anzubieten.

#### Bemerkenswerte Änderungen und Verbesserungen

- Das XUL `textbox`-Widget bietet jetzt einen `search`-Typ zur Verwendung als Suchfelder.
- Um das Ziehen und Ablegen von Tabs zwischen Fenstern zu unterstützen, hat das `browser`-Widget jetzt eine `swapDocShells()`-Methode.
- Der `level`-Attribut wurde zum `panel`-Element hinzugefügt; es gibt an, ob Panels über anderen Anwendungen oder nur über dem Fenster erscheinen, in dem das Panel enthalten ist.
- XUL-Elemente unterstützen jetzt die Eigenschaften `clientHeight`, `clientWidth`, `scrollHeight` und `scrollWidth`.
- `keyset` umfasst jetzt ein `disabled`-Attribut.
- Außerdem können `keyset`s jetzt mit der Methode des Knotens [`removeChild()`](/de/docs/Web/API/Node/removeChild) entfernt werden.
- Dem `mozIStorageStatement` wurde die `initialize()`-Methode entfernt; Konsumenten sollten stattdessen die `createStatement()`-Methode verwenden, um ein neues Statement-Objekt zu erhalten.
- Die Storage API bietet jetzt Unterstützung für asynchrone Anfragen.
- Das `nsICookie2`-Interface zeigt jetzt die Zeit an, zu der Cookies über die neue `creationTime`-Eigenschaft erstellt wurden.
- Ein Flag wurde zu `nsIProtocolHandler` (`URI_IS_LOCAL_RESOURCE`) hinzugefügt, das während der Chromeregistrierung überprüft wird, um sicherzustellen, dass ein Protokoll registriert werden darf.
- Firefox sucht jetzt nach Plugins in `/usr/lib/mozilla/plugins` unter Linux, zusätzlich zu den zuvor unterstützten Standorten.
- Die Plugin-API wurde aktualisiert, um den privaten Modus zu unterstützen; Sie können jetzt `NPN_GetValue()` verwenden, um den Status des privaten Modus mit der Variablen `NPNVprivateModeBool` abzufragen.

## Neue Funktionen für Endbenutzer

### Benutzererlebnis

- Standortbezogenes Surfen
  - : Wenn Sie sich dafür entscheiden, können Sie Firefox 3.5 erlauben, Informationen über Ihren aktuellen Standort mit Websites zu teilen. Firefox 3.5 kann Informationen über das Netzwerk, mit dem Sie verbunden sind, verwenden, um Ihren Standort zu teilen. Natürlich fragt es zuvor um Ihre Erlaubnis, um Ihre Privatsphäre zu gewährleisten.
- Unterstützung für offene Audio- und Videoformate
  - : Firefox 3.5 unterstützt eingebettete Videos und Audios mit dem offenen Ogg-Format sowie WAV für Audio. Keine Plugins, keine verwirrenden Fehlermeldungen darüber, etwas installieren zu müssen, das auf Ihrer Plattform letztendlich doch nicht verfügbar ist.
- Lokale Datenspeicherung
  - : Webanwendungen können jetzt die lokalen Speicherfähigkeiten des Web Storage nutzen, um Daten auf Ihrem Computer zu speichern. Das ist großartig für alles von Website-Einstellungen bis hin zu komplexeren Daten.

### Sicherheit und Privatsphäre

- Privates Surfen
  - : Müssen Sie den Computer einer anderen Person verwenden? Schalten Sie den privaten Modus ein und es wird nichts über Ihre Sitzung aufgezeichnet, einschließlich Cookies, Verlauf und anderer potenziell privater Informationen.
- Bessere Datenschutzkontrollen
  - : Das Datenschutz-Optionsfeld wurde komplett neu gestaltet, um den Benutzern mehr Kontrolle über ihre privaten Informationen zu bieten. Benutzer können auswählen, ob sie Informationen wie Verlauf, Cookies, Downloads und Formularfelder beibehalten oder verwerfen möchten. Zudem können Benutzer festlegen, ob sie Verlauf und/oder Lesezeichen in die automatischen Vorschläge der Adressleiste einbeziehen möchten, sodass Sie verhindern können, dass private Webadressen unerwartet in der Adressleiste erscheinen, während Sie tippen.

### Leistung

- Schnellere JavaScript-Performance
  - : JavaScript, das "J" in "AJAX", wird in Firefox 3.5 mit der neuen TraceMonkey-JavaScript-Engine erheblich beschleunigt. Webanwendungen sind viel schneller als in Firefox 3.
- Schnellere Seitendarstellung
  - : Webinhalte werden in Firefox 3.5 dank Technologien wie dem "spekulativen Parsen" schneller gezeichnet. Ihre Benutzer müssen nicht wissen, was das bedeutet, außer dass "es die Dinge schneller zeichnet".

## Siehe auch

{{Firefox_for_developers}}

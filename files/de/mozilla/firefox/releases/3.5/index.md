---
title: Firefox 3.5 für Entwickler
short-title: Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

[Firefox 3.5](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/3.5/releasenotes/) (_veröffentlicht am 30. Juni 2009_) führt eine Reihe neuer Funktionen ein und bietet zusätzliche sowie verbesserte Unterstützung für eine Vielzahl von Webstandards. Dieser Artikel bietet eine umfassende Liste mit Links zu Artikeln, die die wichtigsten Verbesserungen behandeln.

## Neue Entwicklerfunktionen in Firefox 3.5

### Für Website- und Anwendungsentwickler

#### Unterstützung von HTML 5

- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Firefox 3.5 bietet Unterstützung für die HTML 5-Elemente [`audio`](/de/docs/Web/HTML/Reference/Elements/audio) und [`video`](/de/docs/Web/HTML/Reference/Elements/video).
- Offline-Ressourcen in Firefox
  - : Firefox 3.5 unterstützt nun vollständig die HTML 5-Spezifikation für Offline-Ressourcen.
- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Die HTML 5-API für Drag and Drop ermöglicht das Ziehen und Ablegen von Elementen innerhalb und zwischen Websites. Dies bietet auch eine einfachere API für Erweiterungen und auf Mozilla basierte Anwendungen.

#### Neu unterstützte CSS-Features

- [Unterstützung für herunterladbare Schriftarten](/de/docs/Web/CSS/Reference/At-rules/@font-face)
  - : Die neue {{ cssxref("@font-face") }}-Regel ermöglicht es, dass Webseiten herunterladbare Schriftarten bieten, sodass Webseiten genau nach den Vorstellungen des Seitenautors dargestellt werden können.
- [CSS-Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using)
  - : Firefox 3.5 unterstützt jetzt CSS-Medienabfragen, die die Unterstützung für medienabhängige Stylesheets verbessern.
- {{ cssxref("::before") }} und {{ cssxref("::after") }} aktualisiert auf CSS 2.1
  - : Die Pseudoelemente `::before` und `::after` wurden um vollständige CSS 2.1-Unterstützung erweitert, einschließlich Unterstützung für die Eigenschaften `position`, `float`, `list-style-*` und einige `display`-Eigenschaften.
- `ch`-Einheiten für Längenangaben
  - : Die `ch`-Einheit kann nun überall verwendet werden, wo eine \<Länge> akzeptiert wird. `1ch` ist die Breite des "0"-Zeichens.
- {{ cssxref("opacity") }}
  - : Die Mozilla-Erweiterung `-moz-opacity` zu CSS wurde zugunsten der standardmäßigen `opacity`-Eigenschaft entfernt.
- {{ cssxref("text-shadow") }}
  - : Die `text-shadow`-Eigenschaft, mit der Webinhalte Schatteneffekte auf Text und Textdekorationen anwenden können, wird jetzt unterstützt.
- {{ cssxref("overflow-wrap") }}
  - : Diese neu unterstützte Eigenschaft ermöglicht es, anzugeben, ob Zeilen innerhalb von Wörtern gebrochen werden dürfen, um Überläufe zu verhindern, wenn ein ansonsten unbrechbares Zeichenfolgen zu lang ist, um in eine Zeile zu passen.
- `white-space`-Eigenschaft unterstützt den Wert `pre-line`
  - : Die {{ cssxref("white-space") }}-Eigenschaft akzeptiert jetzt den Wert `pre-line`.
- `-moz-box-shadow`, `-moz-border-image`, `-moz-column-rule`, `-moz-column-rule-width`, `-moz-column-rule-style`, `-moz-column-rule-color`
  - : Firefox 3.5 unterstützt diese Mozilla-Erweiterungen von CSS.
- Die Farbwert `-moz-nativehyperlinktext`
  - : Dieser neue Farbwert repräsentiert die standardmäßige Hyperlink-Farbe des Benutzersystems.
- Die `-moz-window-shadow`-Eigenschaft und die `:-moz-system-metric(mac-graphite-theme)`-Pseudoklasse
  - : Diese neuen CSS-Funktionen wurden hinzugefügt, um die Gestaltung zu erleichtern.
- Neue Werte für `-moz-appearance`
  - : Die Werte `-moz-win-glass` und `-moz-mac-unified-toolbar` wurden zu `-moz-appearance` hinzugefügt.
- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using)
  - : Firefox 3.5 unterstützt CSS-Transformationen. Details finden Sie unter {{ cssxref("transform", "-moz-transform") }} und {{ cssxref("transform-origin", "-moz-transform-origin") }}.
- {{ cssxref(":nth-child") }}, {{ cssxref(":nth-last-child") }}, {{ cssxref(":nth-of-type") }}, {{ cssxref(":nth-last-of-type") }}, {{ cssxref(":first-of-type") }}, {{ cssxref(":last-of-type") }}, {{ cssxref(":only-of-type") }}
  - : Diese Selektoren werden alle neu in Firefox 3.5 unterstützt.

#### Neue DOM-Features

- [localStorage](/de/docs/Web/API/Window/localStorage)
  - : Firefox 3.5 fügt Unterstützung für die Web Storage-Eigenschaft `localStorage` hinzu, die Webanwendungen eine Möglichkeit bietet, Daten lokal auf dem Rechner des Benutzers zu speichern.
- [Web Worker verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Firefox 3.5 unterstützt Web Worker, um in Webanwendungen eine einfache Unterstützung für Multithreading zu ermöglichen.
- [Geolocation verwenden](/de/docs/Web/API/Geolocation_API)
  - : Firefox 3.5 unterstützt die Geolocation-API, die es Webanwendungen ermöglicht, Informationen über den aktuellen Standort des Benutzers zu erhalten, falls ein entsprechender Anbieter installiert und aktiviert ist.
- [DOM-Elemente mit Selektoren lokalisieren](/de/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
  - : Mit der Selektoren-API können in einem Dokument Elemente abgefragt werden, die einer vorgegebenen Auswahlregel entsprechen.
- [Mausgesten-Ereignisse](https://web.archive.org/web/20210724051233/https://developer.mozilla.org/de/docs/Web/Events/Mouse_gesture_events)
  - : Firefox 3.5 unterstützt Mausgesten-Ereignisse wie Trackpad-Wischgesten.
- [Das `NodeIterator`-Objekt](/de/docs/Web/API/NodeIterator)
  - : Das `NodeIterator`-Objekt bietet Unterstützung für das Iterieren über die Liste der Knoten in einem DOM-Teilbaum.
- Das `MozAfterPaint`-Ereignis
  - : Dieses neue DOM-Ereignis wird nach Malaktualisierungen in Fenstern gesendet.
- Das `MozMousePixelScroll`-Ereignis
  - : Dieses neue DOM-Ereignis ermöglicht die Erkennung von pixelbasierten Maus-Scrollrad-Ereignissen anstelle von linienbasierten Scroll-Ereignissen.

#### Neue JavaScript-Features

- [Neu in JavaScript 1.8.1](https://web.archive.org/web/20200805002842/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.1)
  - : Ein Überblick über alle Änderungen in JavaScript 1.8.1.
- [`Object.getPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
  - : Diese neue Methode gibt das Prototypenobjekt eines spezifizierten Objekts zurück.
- Verwendung von nativem JSON
  - : Firefox 3.5 bietet native Unterstützung für {{Glossary("JSON", "JSON")}}.
- Neue Trim-Methoden für das String-Objekt
  - : Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt verfügt jetzt über die Methoden [`trim()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim), [`trimLeft()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) und [`trimRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd).

#### Netzwerke

- Domänenübergreifende Zugriffskontrollen für HTTP
  - : In Firefox 3.5 ist es nun möglich, dass HTTP-Anfragen, einschließlich derjenigen, die durch [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gemacht werden, domänenübergreifend funktionieren, sofern der Server dies unterstützt.
- [Fortschrittsereignisse für `XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
  - : Es werden jetzt Fortschrittsereignisse angeboten, um Erweiterungen die Überwachung des Anfragefortschritts zu ermöglichen.
- Verbesserte synchrone `XMLHttpRequest`-Unterstützung
  - : [DOM Timeout](https://bugzil.la/340345) und [Eingabeevents](https://bugzil.la/333198) werden jetzt während eines synchronen `XMLHttpRequest` unterdrückt.
- Steuerung des DNS-Vorababrufs
  - : Firefox 3.5 bietet DNS-Vorababruf, bei dem die Domainnamensauflösung im Voraus für Links auf der aktuellen Seite durchgeführt wird, um Zeit zu sparen, wenn Links tatsächlich angeklickt werden. Dieser Artikel beschreibt, wie Sie Ihre Website anpassen können, um den Vorababruf zu deaktivieren oder dessen Betrieb anzupassen.

#### Neue Canvas-Features

- [HTML 5 Text-API für `canvas`-Elemente](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Canvas-Elemente unterstützen nun die HTML 5-Text-API.
- [Schatteneffekte in einer `canvas`](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows)
  - : Canvas-Schatteneffekte werden nun unterstützt.
- [`createImageData()`](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object)
  - : Die Canvas-Methode `createImageData()` wird jetzt unterstützt, sodass Code speziell ein `ImageData`-Objekt erstellen kann, anstatt dass dies automatisch erfolgen muss. Dies kann die Leistung anderer `ImageData`-Methoden verbessern, da verhindert wird, dass sie das Objekt selbst erstellen müssen.
- `moz-opaque`-Attribut
  - : Das [`moz-opaque`](/de/docs/Web/HTML/Reference/Elements/canvas#moz-opaque)-Attribut wurde hinzugefügt, das dem Canvas mitteilt, ob Transluzenz eine Rolle spielen wird. Wenn das Canvas weiß, dass keine Transluzenz vorliegt, kann die Zeichenleistung optimiert werden. Siehe auch [`HTMLCanvasElement.mozOpaque`](/de/docs/Web/API/HTMLCanvasElement/mozOpaque).

#### Neue SVG-Features

- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
  - : Sie können jetzt SVG-Effekte auf HTML- und XHTML-Inhalte anwenden; dieser Artikel beschreibt, wie das geht.

#### Verschiedene neue Funktionen

- [ICC-Farbkorrektur in Firefox](/de/docs/Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox)
  - : Firefox 3.5 unterstützt jetzt die ICC-Farbkorrektur für markierte Bilder.
- Das `defer`-Attribut wird jetzt auf [`script`](/de/docs/Web/HTML/Reference/Elements/script)-Elementen unterstützt
  - : Dieses Attribut zeigt dem Browser an, dass er möglicherweise die Seite weiter parsen und rendern kann, ohne auf das Ende der Skriptausführung zu warten.

### Weitere Verbesserungen

- Die [`wholeText`](/de/docs/Web/API/Text/wholeText)-Eigenschaft und die `Text.replaceWholeText()`-Methode des Textknotens wurden implementiert.
- Die Eigenschaft [`element.children`](/de/docs/Web/API/Element/children) wurde hinzugefügt. Sie gibt eine _Sammlung_ von Kindelementen des gegebenen Elements zurück.
- Die Eigenschaft [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) wird jetzt unterstützt, um bearbeitbare Elemente zu unterstützen.
- Die Element-Traversal-API wird jetzt vom DOM [Element](/de/docs/Web/API/Element)-Objekt unterstützt.
- HTML-Dokumentknoten können jetzt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) geklont werden.
- Die nicht standardmäßige `getBoxObjectFor()`-DOM-Methode wurde entfernt. Sie sollten stattdessen [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) verwenden.
- Versendete DOM-Ereignisse können jetzt erneut versendet werden. Dadurch besteht Firefox 3.5 den Acid3 Test 30.
- Verbesserungen wurden beim Umgang mit DOM 2-Range vorgenommen.
- In nicht-Chrome-Umgebung sind in Ausnahmen abgefangene Objekte nun das tatsächlich geworfene Objekt anstelle eines [`XPConnect`](https://web.archive.org/web/20210423135742/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Language_bindings/XPConnect)-Wrappers mit dem geworfenen Objekt.
- SVG-ID-Verweise sind jetzt live.
- SVG-Filter funktionieren jetzt für `foreignObject`.
- Die `GetSVGDocument()`-Methode wurde den [`object`](/de/docs/Web/HTML/Reference/Elements/object)- und [`iframe`](/de/docs/Web/HTML/Reference/Elements/iframe)-Elementen für Kompatibilität hinzugefügt.
- Implizites Setzen von Eigenschaften in Objekt- und Array-Literal-Initialisierern führt jetzt nicht mehr zu Setzern in JavaScript.
- Die Variable `gDownloadLastDir.path` wurde in `gDownloadLastDir.file` umbenannt, da sie sich auf eine `nsIFile`, nicht auf einen Pfad bezieht.
- Die Variable `gDownloadLastDirPath` wurde in `gDownloadLastDirFile` umbenannt, da sie sich auf eine `nsIFile`, nicht auf einen Pfad bezieht.
- Ab Firefox 3.5 können Sie keine `data:`-Bindings mehr in Chrome-Paketen verwenden, die `XPCNativeWrapper`-Automatisierung erhalten.

### Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Erweiterungen für Firefox 3.5 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3.5/Updating_extensions) beginnen, das eine hilfreiche Übersicht über Änderungen bietet, die Ihre Erweiterung betreffen könnten.

#### Neue Komponenten und Funktionen

- [Unterstützung für den privaten Modus](https://web.archive.org/web/20210620014429/https://developer.mozilla.org/de/docs/Archive/Mozilla/Supporting_private_browsing_mode)
  - : Firefox 3.5 bietet einen privaten Browsing-Modus, der die Aktivitäten des Benutzers nicht aufzeichnet. Erweiterungen können den privaten Modus unterstützen, indem sie den Richtlinien in diesem Artikel folgen.
- [Sicherheitsänderungen in Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Security_changes)
  - : Dieser Artikel behandelt sicherheitsrelevante Änderungen in Firefox 3.5.
- [Thema-Änderungen in Firefox 3.5](https://web.archive.org/web/20191004004454/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_3.5)
  - : Dieser Artikel behandelt thema-bezogene Änderungen in Firefox 3.5.
- Überwachung von WLAN-Zugangspunkten
  - : Code mit UniversalXPConnect-Rechten kann jetzt die Liste der verfügbaren Zugangspunkte überwachen und Informationen zu ihren SSIDs, MAC-Adressen und Signalstärken abrufen. Dies kann in Kombination mit Geolocation verwendet werden, um Wi-Fi-basierte Standortdienste anzubieten.

#### Bemerkenswerte Änderungen und Verbesserungen

- Das XUL-`textbox`-Widget bietet jetzt einen `search`-Typ zur Verwendung als Suchfelder.
- Zur Unterstützung des Ziehens und Ablegens von Tabs zwischen Fenstern verfügt das `browser`-Widget jetzt über eine `swapDocShells()`-Methode.
- Das `level`-Attribut wurde zum `panel`-Element hinzugefügt; dies gibt an, ob Panels über anderen Anwendungsfenstern oder nur über dem Fenster erscheinen, in dem das Panel enthalten ist.
- XUL-Elemente unterstützen jetzt die Eigenschaften `clientHeight`, `clientWidth`, `scrollHeight` und `scrollWidth`.
- `keyset` enthält jetzt ein `disabled`-Attribut.
- Zusätzlich können `keyset`s jetzt mit der [`removeChild()`](/de/docs/Web/API/Node/removeChild)-Methode des Knotens entfernt werden.
- `mozIStorageStatement` hat die `initialize()`-Methode entfernt; Konsumenten sollten stattdessen die `createStatement()`-Methode verwenden, um ein neues Statement-Objekt zu erhalten.
- Die Storage-API bietet jetzt Unterstützung für asynchrone Anfragen.
- Das `nsICookie2`-Interface gibt jetzt die Zeit, zu der Cookies erstellt wurden, über das neue `creationTime`-Attribut preis.
- Ein Flag (`URI_IS_LOCAL_RESOURCE`) wurde zu `nsIProtocolHandler` hinzugefügt, das während der Chrome-Registrierung überprüft wird, um sicherzustellen, dass ein Protokoll registriert werden darf.
- Firefox sucht unter Linux jetzt nach Plugins unter `/usr/lib/mozilla/plugins` sowie an den zuvor unterstützten Orten.
- Die Plugin-API wurde aktualisiert, um Unterstützung für den privaten Modus zu bieten; Sie können jetzt `NPN_GetValue()` verwenden, um den Zustand des privaten Modus mithilfe der Variablen `NPNVprivateModeBool` abzufragen.

## Neue Funktionen für Endbenutzer

### Benutzererfahrung

- Standorte-aware Browsing
  - : Wenn Sie es erlauben, kann Firefox 3.5 Informationen über Ihren aktuellen Standort mit Websites teilen. Firefox 3.5 kann Informationen über das Netzwerk, mit dem Sie verbunden sind, verwenden, um Ihren Standort zu teilen. Natürlich wird vorher Ihre Erlaubnis eingeholt, um Ihre Privatsphäre zu gewährleisten.
- Unterstützung für offene Audio- und Videoformate
  - : Firefox 3.5 unterstützt eingebettete Videos und Audios im offenen Ogg-Format sowie WAV für Audio. Keine Plugins, keine verwirrenden Fehlermeldungen darüber, dass irgendetwas installiert werden müsse, was sich dann doch als nicht verfügbar auf Ihrer Plattform herausstellt.
- Lokale Datenspeicherung
  - : Webanwendungen können jetzt die lokalen Speicherfunktionen von Web Storage verwenden, um Daten auf Ihrem Computer zu speichern. Dies ist ideal für alles von Seitenpräferenzen bis hin zu komplexeren Daten.

### Sicherheit und Datenschutz

- Privates Browsing
  - : Müssen Sie den Computer einer anderen Person verwenden? Schalten Sie den privaten Browsing-Modus ein, und es wird nichts über Ihre Sitzung aufgezeichnet, einschließlich Cookies, Verlauf und aller anderen möglicherweise privaten Informationen.
- Bessere Datenschutzkontrollen
  - : Die Datenschutz-Einstellungsleiste wurde vollständig neu gestaltet, um Benutzern mehr Kontrolle über ihre privaten Informationen zu bieten. Benutzer können wählen, ob sie alles, einschließlich Verlaufsinformationen, Cookies, Downloads und Eingabefeldinformationen, beibehalten oder verwerfen möchten. Darüber hinaus können Benutzer bestimmen, ob der Verlauf und/oder Lesezeichen in den automatischen Vorschlägen der Adressleiste enthalten sein sollen, damit Sie private Webadressen unerwartet beim Eingeben in die Adressleiste vermeiden können.

### Leistung

- Schnellere JavaScript-Leistung
  - : JavaScript, das "J" in "AJAX", wurde in Firefox 3.5 durch die neue TraceMonkey-JavaScript-Engine erheblich beschleunigt. Webanwendungen sind deutlich schneller als in Firefox 3.
- Schnellere Seitendarstellung
  - : Webinhalte werden in Firefox 3.5 dank Technologien wie "spekulativem Parsen" schneller gezeichnet. Ihre Benutzer müssen nur wissen, dass es bedeutet, dass "es Dinge schneller zeichnet".

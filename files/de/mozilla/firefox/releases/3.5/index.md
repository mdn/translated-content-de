---
title: Firefox 3.5 für Entwickler
short-title: Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5
l10n:
  sourceCommit: 277a8954951c900ef60a5175503976284c1d328d
---

[Firefox 3.5](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/3.5/releasenotes/) (_veröffentlicht am 30. Juni 2009_) führt eine Reihe neuer Funktionen ein sowie zusätzliche und verbesserte Unterstützung für eine Vielzahl von Web-Standards. Dieser Artikel bietet eine ausführliche Liste mit Links zu Artikeln, die die wichtigsten Verbesserungen behandeln.

## Neue Entwicklerfunktionen in Firefox 3.5

### Für Website- und Anwendungsentwickler

#### HTML 5 Unterstützung

- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Firefox 3.5 unterstützt die HTML 5 [`audio`](/de/docs/Web/HTML/Reference/Elements/audio)- und [`video`](/de/docs/Web/HTML/Reference/Elements/video)-Elemente.
- Offline-Ressourcen in Firefox
  - : Firefox 3.5 unterstützt nun vollständig die HTML 5 Spezifikation für Offline-Ressourcen.
- [Drag-and-Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Die HTML 5 Drag-and-Drop-API ermöglicht das Ziehen und Ablegen von Elementen innerhalb und zwischen Websites. Dies bietet auch eine einfachere API für Erweiterungen und Anwendungen auf Mozilla-Basis.

#### Neu unterstützte CSS-Funktionen

- [Unterstützung für herunterladbare Schriftarten](/de/docs/Web/CSS/@font-face)
  - : Die neue {{ cssxref("@font-face") }} @Regel ermöglicht es Webseiten, herunterladbare Schriftarten bereitzustellen, sodass ein Webseiten-Layout exakt so angezeigt werden kann, wie es vom Seitenautor beabsichtigt ist.
- [CSS-Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
  - : Firefox 3.5 unterstützt nun CSS-Media-Queries, die die Unterstützung von medienabhängigen Stylesheets verbessern.
- {{ cssxref("::before") }} und {{ cssxref("::after") }} aktualisiert auf CSS 2.1
  - : Die Pseudoelemente `::before` und `::after` wurden auf vollständige CSS 2.1-Unterstützung aktualisiert, einschließlich Unterstützung für die Eigenschaften `position`, `float`, `list-style-*` und einige `display`-Eigenschaften.
- `ch` Einheiten für Längen
  - : Die `ch` Einheit kann nun überall verwendet werden, wo eine \<length> akzeptiert wird. `1ch` ist die Breite des Zeichens "0" (Null).
- {{ cssxref("opacity") }}
  - : Die Mozilla-Erweiterung `-moz-opacity` wurde zugunsten der standardmäßigen `opacity`-Eigenschaft entfernt.
- {{ cssxref("text-shadow") }}
  - : Die Eigenschaft `text-shadow`, die es ermöglicht, Schatteneffekte für Text und Textdekorationen zu definieren, wird nun unterstützt.
- {{ cssxref("overflow-wrap") }}
  - : Diese neu unterstützte Eigenschaft ermöglicht es, festzulegen, ob Zeilen innerhalb von Wörtern gebrochen werden dürfen, um ein Überlaufen zu verhindern, wenn ein ansonsten unbrechbarer String zu lang ist, um in eine Zeile zu passen.
- `white-space`-Eigenschaft unterstützt den Wert `pre-line`
  - : Die {{ cssxref("white-space") }}-Eigenschaft akzeptiert nun den Wert `pre-line`.
- `-moz-box-shadow`, `-moz-border-image`, `-moz-column-rule`, `-moz-column-rule-width`, `-moz-column-rule-style`, `-moz-column-rule-color`
  - : Firefox 3.5 fügt Unterstützung für diese Mozilla-Erweiterungen zu CSS hinzu.
- Der Farbewert `-moz-nativehyperlinktext`
  - : Dieser neue Farbewert repräsentiert die Standardfarbe für Hyperlinks des Benutzersystems.
- Die `-moz-window-shadow`-Eigenschaft und die `:-moz-system-metric(mac-graphite-theme)` Pseudoklasse
  - : Diese neuen CSS-Funktionen wurden zum Erleichtern von Themen hinzugefügt.
- Neue Werte für `-moz-appearance`
  - : Die Werte `-moz-win-glass` und `-moz-mac-unified-toolbar` wurden `-moz-appearance` hinzugefügt.
- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
  - : Firefox 3.5 unterstützt CSS-Transformationen. Siehe {{ cssxref("transform", "-moz-transform") }} und {{ cssxref("transform-origin", "-moz-transform-origin") }} für Details.
- {{ cssxref(":nth-child") }}, {{ cssxref(":nth-last-child") }}, {{ cssxref(":nth-of-type") }}, {{ cssxref(":nth-last-of-type") }}, {{ cssxref(":first-of-type") }}, {{ cssxref(":last-of-type") }}, {{ cssxref(":only-of-type") }}
  - : Diese Selektoren werden alle neu in Firefox 3.5 unterstützt.

#### Neue DOM-Funktionen

- [localStorage](/de/docs/Web/API/Window/localStorage)
  - : Firefox 3.5 unterstützt die Web Storage `localStorage`-Eigenschaft, die eine Möglichkeit bietet, Daten lokal auf dem Computer des Benutzers zu speichern.
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Firefox 3.5 unterstützt Web-Worker, um Multi-Threading-Unterstützung in Webanwendungen zu ermöglichen.
- [Verwendung von Geolokalisierung](/de/docs/Web/API/Geolocation_API)
  - : Firefox 3.5 unterstützt die Geolocation API, die es Webanwendungen ermöglicht, Informationen über den aktuellen Standort des Benutzers zu erhalten, sofern ein Anbieter für diese Informationen installiert und aktiviert ist.
- [DOM-Elemente mit Selektoren finden](/de/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
  - : Die Selector-API ermöglicht es, ein Dokument abzufragen, um die Elemente zu lokalisieren, die einer bestimmten Auswahlregel entsprechen.
- [Mausgesten-Ereignisse](https://web.archive.org/web/20210724051233/https://developer.mozilla.org/de/docs/Web/Events/Mouse_gesture_events)
  - : Firefox 3.5 unterstützt Mausgesten-Ereignisse wie Trackpad-Wischgesten.
- [Das `NodeIterator`-Objekt](/de/docs/Web/API/NodeIterator)
  - : Das `NodeIterator`-Objekt bietet Unterstützung für das Iterieren über die Liste der Knoten in einem DOM-Teilbaum.
- Das `MozAfterPaint`-Ereignis
  - : Dieses neue DOM-Ereignis wird nach Mal-Updates in Fenstern gesendet.
- Das `MozMousePixelScroll`-Ereignis
  - : Dieses neue DOM-Ereignis ermöglicht die Erkennung von pixelbasierten Mausrad-Scroll-Ereignissen anstelle von linienbasierten Scroll-Ereignissen.

#### Neue JavaScript-Funktionen

- [Neu in JavaScript 1.8.1](https://web.archive.org/web/20200805002842/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.1)
  - : Ein Überblick über alle Änderungen in JavaScript 1.8.1.
- [`Object.getPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
  - : Diese neue Methode gibt das Prototyp-Objekt eines angegebenen Objekts zurück.
- Verwendung von nativen JSON
  - : Firefox 3.5 hat native Unterstützung für {{Glossary("JSON", "JSON")}}.
- Neue Trim-Methoden am `String`-Objekt
  - : Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt verfügt nun über die Methoden [`trim()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim), [`trimLeft()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) und [`trimRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd).

#### Netzwerk

- Domainübergreifende Zugriffssteuerung für HTTP
  - : In Firefox 3.5 ist es nun möglich, dass HTTP-Anfragen, einschließlich jener, die von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gesendet werden, domainsübergreifend funktionieren, sofern der Server dies unterstützt.
- [Fortschrittsereignisse für `XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
  - : Fortschrittsereignisse werden jetzt angeboten, um es Erweiterungen zu ermöglichen, den Fortschritt von Anfragen zu überwachen.
- Verbesserte synchrone `XMLHttpRequest`-Unterstützung
  - : [DOM-Timeout](https://bugzil.la/340345) und [Eingabe-Ereignisse](https://bugzil.la/333198) werden nun während einer synchronen `XMLHttpRequest` unterdrückt.
- Steuerung des DNS-Vorabrufs
  - : Firefox 3.5 bietet DNS-Vorabruf, bei dem die Domainnamen-Auflösung im Voraus für Links ausgeführt wird, die auf der aktuellen Seite enthalten sind, um Zeit zu sparen, wenn Links tatsächlich angeklickt werden. Dieser Artikel beschreibt, wie Sie Ihre Website so anpassen können, dass der Vorabruf deaktiviert oder dessen Betrieb angepasst wird.

#### Neue Canvas-Funktionen

- [HTML 5 Text-API für `canvas`-Elemente](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Canvas-Elemente unterstützen nun die HTML 5 Text-API.
- [Schatteneffekte in einem `canvas`](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows)
  - : Schatteneffekte für Canvas werden nun unterstützt.
- [`createImageData()`](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object)
  - : Die Canvas-Methode `createImageData()` wird nun unterstützt, wodurch Code ein `ImageData`-Objekt gezielt erstellen kann, anstatt dass dies automatisch geschehen muss. Dies kann die Leistung anderer `ImageData`-Methoden verbessern, indem verhindert wird, dass sie das Objekt erstellen müssen.
- `moz-opaque` Attribut
  - : Das Attribut [`moz-opaque`](/de/docs/Web/HTML/Reference/Elements/canvas#moz-opaque) wurde hinzugefügt, welches dem Canvas mitteilt, ob Transluzenz eine Rolle spielen wird oder nicht. Wenn das Canvas weiß, dass keine Transluzenz vorliegt, kann die Malleistung optimiert werden. Siehe auch [`HTMLCanvasElement.mozOpaque`](/de/docs/Web/API/HTMLCanvasElement/mozOpaque).

#### Neue SVG-Funktionen

- [Anwenden von SVG-Effekten auf HTML-Inhalt](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
  - : Sie können nun SVG-Effekte auf HTML- und XHTML-Inhalte anwenden; dieser Artikel beschreibt, wie das funktioniert.

#### Verschiedene neue Funktionen

- [ICC-Farbkorrektur in Firefox](/de/docs/Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox)
  - : Firefox 3.5 unterstützt nun ICC-Farbkorrektur für markierte Bilder.
- Das `defer`-Attribut wird nun auf [`script`](/de/docs/Web/HTML/Reference/Elements/script)-Elementen unterstützt
  - : Dieses Attribut zeigt dem Browser an, dass er die Seite weiterhin parsen und rendern _darf_, ohne darauf zu warten, dass das Script ausgeführt wird.

### Weitere Verbesserungen

- Die [`wholeText`](/de/docs/Web/API/Text/wholeText)-Eigenschaft des Text-Knotens und die `Text.replaceWholeText()`-Methode wurden implementiert.
- Die Eigenschaft [`element.children`](/de/docs/Web/API/Element/children) wurde hinzugefügt. Sie gibt eine _Sammlung_ von Kind-Elementen des angegebenen Elements zurück.
- Die Eigenschaft [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) wird nun unterstützt, um bearbeitbare Elemente zu unterstützen.
- Die Element Traversal API wird nun vom DOM [Element](/de/docs/Web/API/Element)-Objekt unterstützt.
- HTML-Dokumentknoten können nun mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) geklont werden.
- Die nicht standardmäßige `getBoxObjectFor()`-Methode des DOM wurde entfernt. Stattdessen sollten Sie [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) verwenden.
- Ausgelöste DOM-Ereignisse können nun erneut ausgelöst werden. Dies sorgt dafür, dass Firefox 3.5 den Acid 3 Test 30 besteht.
- Verbesserungen wurden im Umgang mit DOM 2 Range vorgenommen.
- Im Nicht-Chrome-Scope sind gefangene Objekte in Ausnahmen nun das eigentlich geworfene Objekt anstelle eines [`XPConnect`](https://web.archive.org/web/20210423135742/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Language_bindings/XPConnect)-Wrappers, der das geworfene Objekt enthält.
- SVG-ID-Referenzen sind nun live.
- SVG-Filter funktionieren nun für `foreignObject`.
- Die `GetSVGDocument()`-Methode wurde zu den [`object`](/de/docs/Web/HTML/Reference/Elements/object)- und [`iframe`](/de/docs/Web/HTML/Reference/Elements/iframe)-Elementen hinzugefügt, um die Kompatibilität sicherzustellen.
- Implizite Einstellung von Eigenschaften in Objekt- und Array-Initialisierern führt nicht mehr zur Ausführung von Setzern in JavaScript.
- Die Variable `gDownloadLastDir.path` wurde zu `gDownloadLastDir.file` umbenannt, da sie sich auf eine `nsIFile`, nicht auf einen Pfad bezieht.
- Die Variable `gDownloadLastDirPath` wurde zu `gDownloadLastDirFile` umbenannt, da sie sich auf eine `nsIFile`, nicht auf einen Pfad bezieht.
- Ab Firefox 3.5 können Sie keine `data:` Bindings mehr in Chrome-Paketen verwenden, die `XPCNativeWrapper` Automatisierung erhalten.

### Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Aktualisieren von Erweiterungen für Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Updating_extensions) beginnen, das einen hilfreichen Überblick darüber bietet, welche Änderungen Ihre Erweiterung betreffen könnten.

#### Neue Komponenten und Funktionalität

- [Unterstützung des Privatmodus beim Surfen](https://web.archive.org/web/20210620014429/https://developer.mozilla.org/de/docs/Archive/Mozilla/Supporting_private_browsing_mode)
  - : Firefox 3.5 bietet den Privatmodus an, der die Aktivitäten des Benutzers nicht aufzeichnet. Erweiterungen können den Privatmodus unterstützen, wenn sie den Richtlinien in diesem Artikel folgen.
- [Sicherheitsänderungen in Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Security_changes)
  - : Dieser Artikel behandelt sicherheitsbezogene Änderungen in Firefox 3.5.
- [Änderungen bei Themen in Firefox 3.5](https://web.archive.org/web/20191004004454/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_3.5)
  - : Dieser Artikel behandelt themenbezogene Änderungen in Firefox 3.5.
- Überwachung von Wi-Fi-Zugangspunkten
  - : Code mit UniversalXPConnect-Berechtigungen kann nun die Liste der verfügbaren Zugangspunkte überwachen und Informationen über ihre SSIDs, MAC-Adressen und Signalstärke abrufen. Dies kann zusammen mit der Geolocation verwendet werden, um einen Standortdienst auf Wi-Fi-Basis anzubieten.

#### Bemerkenswerte Änderungen und Verbesserungen

- Das XUL `textbox`-Widget bietet nun einen `search`-Typ, zur Verwendung als Suchfelder.
- Um das Ziehen und Ablegen von Tabs zwischen Fenstern zu unterstützen, besitzt das `browser`-Widget nun eine `swapDocShells()`-Methode.
- Das `level`-Attribut wurde zum `panel`-Element hinzugefügt; dieses gibt an, ob Panels über anderen Anwendungen erscheinen oder nur über dem Fenster, in dem das Panel enthalten ist.
- XUL-Elemente unterstützen nun die Eigenschaften `clientHeight`, `clientWidth`, `scrollHeight` und `scrollWidth`.
- `keyset` enthält nun ein `disabled`-Attribut.
- Zusätzlich können `keyset`s nun mit der [`removeChild()`](/de/docs/Web/API/Node/removeChild)-Methode des Knotens entfernt werden.
- `mozIStorageStatement` hatte die `initialize()`-Methode entfernt; Verbraucher sollten die `createStatement()`-Methode verwenden, um ein neues Statement-Objekt zu erhalten.
- Die Storage-API bietet nun Unterstützung für asynchrone Anfragen.
- Die `nsICookie2`-Schnittstelle gibt nun in ihrem neuen `creationTime`-Attribut den Zeitpunkt an, zu dem Cookies erstellt wurden.
- Ein Flag wurde zu `nsIProtocolHandler` (`URI_IS_LOCAL_RESOURCE`) hinzugefügt, das während der Chrome-Registrierung überprüft wird, um sicherzustellen, dass ein Protokoll zur Registrierung zulässig ist.
- Firefox sucht nun auch im `/usr/lib/mozilla/plugins` auf Linux nach Plugins, sowie an den zuvor unterstützten Orten.
- Die Plugin-API wurde aktualisiert, um Unterstützung für den Privatmodus beim Surfen zu enthalten; Sie können nun `NPN_GetValue()` verwenden, um den Status des Privatmodus mit der Variable `NPNVprivateModeBool` abzufragen.

## Neue Funktionen für Endbenutzer

### Benutzererfahrung

- Standortbezogenes Surfen
  - : Wenn Sie es möchten, können Sie Firefox 3.5 erlauben, Informationen über Ihren aktuellen Standort mit Websites zu teilen. Firefox 3.5 kann Informationen über das Netzwerk, mit dem Sie verbunden sind, verwenden, um Ihren Standort zu teilen. Natürlich wird vorher um Ihre Erlaubnis gebeten, um Ihre Privatsphäre zu gewährleisten.
- Unterstützung für eingebettete Audio- und Videodateien
  - : Firefox 3.5 unterstützt eingebettete Videos und Audiodateien im offenen Ogg-Format sowie WAV für Audio. Keine Plugins, keine verwirrenden Fehlermeldungen über etwas zu installierendes, was auf Ihrer Plattform sowieso nicht verfügbar ist.
- Lokale Datenspeicherung
  - : Webanwendungen können nun die Fähigkeit der lokalen Speicherung von Web Storage nutzen, um Daten auf Ihrem Computer zu speichern. Dies ist großartig für alles von Webseiteneinstellungen bis hin zu komplexeren Daten.

### Sicherheit und Datenschutz

- Privates Surfen
  - : Müssen Sie den Computer eines anderen verwenden? Schalten Sie den Modus für privates Browsen ein und nichts über Ihre Sitzung wird aufgezeichnet, einschließlich Cookies, Verlauf und anderer potentiell privater Informationen.
- Bessere Datenschutzkontrollen
  - : Das Datenschutz-Präferenzfenster wurde vollständig neu gestaltet, um Benutzern mehr Kontrolle über ihre privaten Informationen zu bieten. Benutzer können wählen, alles zu behalten oder zu verwerfen, einschließlich Verlaufsinformationen, Cookies, Downloads und Formularfeldinformationen. Darüber hinaus können Benutzer festlegen, ob der Verlauf und/oder Lesezeichen in den automatisierten Vorschlägen der Adressleiste enthalten sein sollen, sodass private Webadressen beim Eingeben in die Adressleiste nicht unerwartet auftauchen.

### Leistung

- Schnellere JavaScript-Leistung
  - : JavaScript, das "J" in "AJAX", wird in Firefox 3.5 mit der neuen TraceMonkey-JavaScript-Engine dramatisch beschleunigt. Webanwendungen sind viel schneller als in Firefox 3.
- Schnellere Seitenrendering
  - : Webinhalte werden in Firefox 3.5 dank Technologien wie "speculative parsing" schneller geladen. Ihre Nutzer brauchen nicht zu wissen, was das bedeutet, außer "es macht Dinge schneller".

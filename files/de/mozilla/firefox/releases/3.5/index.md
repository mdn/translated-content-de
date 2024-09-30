---
title: Firefox 3.5 für Entwickler
slug: Mozilla/Firefox/Releases/3.5
l10n:
  sourceCommit: e099e74fe5c09c46f0dfe044894692721a713d29
---

{{FirefoxSidebar}}

[Firefox 3.5](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/3.5/releasenotes/) (_veröffentlicht am 30. Juni 2009_) führt eine Reihe von neuen Funktionen ein und bietet zusätzliche und verbesserte Unterstützung für eine Vielzahl von Webstandards. Dieser Artikel bietet eine umfangreiche Liste mit Links zu Artikeln, die die wichtigsten Verbesserungen behandeln.

## Neue Entwickler-Features in Firefox 3.5

### Für Website- und Anwendungsentwickler

#### HTML 5-Unterstützung

- [Verwendung von Audio und Video](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : Firefox 3.5 unterstützt die HTML 5-Elemente [`audio`](/de/docs/Web/HTML/Element/audio) und [`video`](/de/docs/Web/HTML/Element/video).
- Offline-Ressourcen in Firefox
  - : Firefox 3.5 unterstützt jetzt vollständig die HTML 5-Spezifikation für Offline-Ressourcen.
- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Die HTML 5 Drag and Drop-API ermöglicht das Ziehen und Ablegen von Elementen innerhalb und zwischen Websites. Dies bietet auch eine einfachere API für Erweiterungen und auf Mozilla basierende Anwendungen.

#### Neu unterstützte CSS-Features

- [Unterstützung für herunterladbare Schriftarten](/de/docs/Web/CSS/@font-face)
  - : Die neue {{ cssxref("@font-face") }} @Regel ermöglicht es Webseiten, herunterladbare Schriftarten bereitzustellen, sodass Seiten genau so dargestellt werden können, wie der Autor es erwartet.
- [CSS-Mediaqueries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
  - : Firefox 3.5 unterstützt jetzt CSS-Mediaqueries, die die Unterstützung für medienabhängige Stylesheets verbessern.
- {{ cssxref("::before") }} und {{ cssxref("::after") }} aktualisiert auf CSS 2.1
  - : Die Pseudo-Elemente `::before` und `::after` wurden auf volle CSS 2.1-Unterstützung aktualisiert und unterstützen nun die Eigenschaften `position`, `float`, `list-style-*` und einige `display`-Eigenschaften.
- `ch`-Einheiten für Längen
  - : Die `ch`-Einheit kann jetzt überall verwendet werden, wo eine [Längeneinheit](/de/docs/Web/CSS/length#units) akzeptiert wird. `1ch` ist die Breite des Zeichens "0" (Null).
- {{ cssxref("opacity") }}
  - : Die Mozilla-Erweiterung `-moz-opacity` wurde zugunsten der standardisierten Eigenschaft `opacity` entfernt.
- {{ cssxref("text-shadow") }}
  - : Die Eigenschaft `text-shadow`, die es Webinhalten ermöglicht, Schatteneffekte auf Text und Textdekorationen anzuwenden, wird jetzt unterstützt.
- {{ cssxref("overflow-wrap") }}
  - : Diese neu unterstützte Eigenschaft ermöglicht es, anzugeben, ob Zeilen innerhalb von Wörtern gebrochen werden dürfen, um Überlauf zu vermeiden, wenn eine ansonsten unbrechbare Zeichenkette zu lang ist, um in eine Zeile zu passen.
- `white-space`-Eigenschaft unterstützt den Wert `pre-line`
  - : Die {{ cssxref("white-space") }}-Eigenschaft akzeptiert jetzt den Wert `pre-line`.
- `-moz-box-shadow`

  `-moz-border-image`

  `-moz-column-rule`

  `-moz-column-rule-width`

  `-moz-column-rule-style`

  `-moz-column-rule-color`

  - : Firefox 3.5 unterstützt diese Mozilla-Erweiterungen zu CSS.

- Der {{ cssxref("color_value#Mozilla_Extensions","-moz-nativehyperlinktext") }} Farbwert
  - : Dieser neue Farbwert repräsentiert die standardmäßige Hyperlinkfarbe des Benutzer-Systems.
- Die `-moz-window-shadow`-Eigenschaft und die `:-moz-system-metric(mac-graphite-theme)`-Pseudo-Klasse
  - : Diese neuen CSS-Eigenschaften wurden hinzugefügt, um die Gestaltung zu erleichtern.
- Neue Werte für `-moz-appearance`
  - : Die Werte `-moz-win-glass` und `-moz-mac-unified-toolbar` wurden für `-moz-appearance` hinzugefügt.
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

#### Neue DOM-Features

- [localStorage](/de/docs/Web/API/Web_Storage_API#localstorage)
  - : Firefox 3.5 unterstützt die Web Storage `localStorage`-Eigenschaft, die Webanwendungen eine Möglichkeit bietet, Daten lokal auf dem Computer des Benutzers zu speichern.
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Firefox 3.5 unterstützt Web Worker, um die einfache Unterstützung von Multithreading in Webanwendungen zu ermöglichen.
- [Verwendung von Geolokalisierung](/de/docs/Web/API/Geolocation_API)
  - : Firefox 3.5 unterstützt die Geolocation-API, die es Webanwendungen ermöglicht, Informationen über den aktuellen Standort des Benutzers zu erhalten, sofern ein Anbieter für diese Informationen installiert und aktiviert ist.
- [DOM-Elemente mit Selektoren lokalisieren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
  - : Die Selektoren-API ermöglicht es, ein Dokument zu durchsuchen, um die Elemente zu finden, die einer gegebenen Auswahlregel entsprechen.
- [Mausgestenereignisse](https://web.archive.org/web/20210724051233/https://developer.mozilla.org/de/docs/Web/Events/Mouse_gesture_events)
  - : Firefox 3.5 unterstützt Mausgestenereignisse wie Trackpad-Wischgesten.
- [Das `NodeIterator`-Objekt](/de/docs/Web/API/NodeIterator)
  - : Das `NodeIterator`-Objekt bietet Unterstützung für das Durchlaufen der Liste von Knoten in einem DOM-Unterbaum.
- Das `MozAfterPaint`-Ereignis
  - : Dieses neue DOM-Ereignis wird nach Aktualisierungen der Malerei in Fenstern gesendet.
- Das `MozMousePixelScroll`-Ereignis
  - : Dieses neue DOM-Ereignis ermöglicht die Erkennung von pixelbasierten Mausrad-Scrollereignissen anstelle von zeilenweisen Scrollereignissen.

#### Neue JavaScript-Features

- [Neu in JavaScript 1.8.1](https://web.archive.org/web/20200805002842/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.1)
  - : Ein Überblick über alle Änderungen in JavaScript 1.8.1.
- [`Object.getPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
  - : Diese neue Methode gibt das Prototyp-Objekt eines angegebenen Objekts zurück.
- Verwendung von nativem JSON
  - : Firefox 3.5 unterstützt nativ [JSON](/de/docs/Glossary/JSON).
- Neue Trim-Methoden für das String-Objekt
  - : Das [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt verfügt jetzt über die Methoden [`trim()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim), [`trimLeft()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) und [`trimRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd).

#### Netzwerkfunktionen

- Cross-Site-Zugriffskontrollen für HTTP
  - : In Firefox 3.5 ist es nun möglich, dass HTTP-Anfragen, einschließlich der von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gestellten, domänenübergreifend funktionieren, wenn der Server dies unterstützt.
- [Fortschrittsereignisse für `XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
  - : Fortschrittsereignisse werden jetzt angeboten, um Erweiterungen die Überwachung des Fortschritts von Anfragen zu ermöglichen.
- Verbessert Unterstützung für synchronen `XMLHttpRequest`
  - : [DOM-Timeout](https://bugzil.la/340345) und [Eingabeereignisse](https://bugzil.la/333198) werden nun während eines synchronen `XMLHttpRequest` unterdrückt.
- Steuerung des DNS-Prefetching
  - : Firefox 3.5 bietet DNS-Prefetching, sodass die Domainnamenauflösung im Voraus für Links auf der aktuellen Seite ausgeführt wird, um Zeit zu sparen, wenn Links tatsächlich angeklickt werden. Dieser Artikel beschreibt, wie Sie Ihre Website anpassen können, um Prefetching zu deaktivieren oder die Funktionsweise des Prefetching anzupassen.

#### Neue Canvas-Features

- [HTML 5 Text-API für `canvas`-Elemente](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Canvas-Elemente unterstützen jetzt die HTML 5 Text-API.
- [Schatteneffekte in einem `canvas`](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#shadows)
  - : Canvas-Schatteneffekte werden jetzt unterstützt.
- [`createImageData()`](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object)
  - : Die Canvas-Methode `createImageData()` wird jetzt unterstützt, sodass der Code ein `ImageData`-Objekt speziell erstellen kann, anstatt es automatisch zu machen. Dies kann die Leistung anderer `ImageData`-Methoden verbessern, indem verhindert wird, dass sie das Objekt erstellen müssen.
- `moz-opaque`-Attribut
  - : Das [`moz-opaque`](/de/docs/Web/HTML/Element/canvas#moz-opaque)-Attribut wurde hinzugefügt, welches im Canvas angibt, ob Transluzenz eine Rolle spielt oder nicht. Wenn das Canvas weiß, dass keine Transluzenz vorhanden ist, kann die Malleistung optimiert werden. Siehe auch [`HTMLCanvasElement.mozOpaque`](/de/docs/Web/API/HTMLCanvasElement/mozOpaque).

#### Neue SVG-Features

- [Anwendung von SVG-Effekten auf HTML-Inhalt](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
  - : Sie können jetzt SVG-Effekte auf HTML- und XHTML-Inhalte anwenden; dieser Artikel beschreibt, wie.

#### Verschiedene neue Features

- [ICC-Farbkorrektur in Firefox](/de/docs/Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox)
  - : Firefox 3.5 unterstützt nun ICC-Farbkorrekturen für getaggte Bilder.
- Das `defer`-Attribut wird jetzt auf [`script`](/de/docs/Web/HTML/Element/script)-Elementen unterstützt
  - : Dieses Attribut zeigt dem Browser an, dass er möglicherweise fortfahren kann, die Seite zu parsen und darzustellen, ohne darauf zu warten, dass das Skript ausgeführt wird.

### Weitere Verbesserungen

- Die Textknoten-Eigenschaft [`wholeText`](/de/docs/Web/API/Text/wholeText) und die Methode `Text.replaceWholeText()` wurden implementiert.
- Die Eigenschaft [`element.children`](/de/docs/Web/API/Element/children) wurde hinzugefügt. Sie gibt eine _Sammlung_ von Kind-Elementen des gegebenen Elements zurück.
- Die Eigenschaft [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) wird jetzt unterstützt, um editierbare Elemente zu unterstützen.
- Die Element Traversal API wird nun vom DOM [Element](/de/docs/Web/API/Element)-Objekt unterstützt.
- HTML-Dokumentknoten können jetzt mit [`cloneNode()`](/de/docs/Web/API/Node/cloneNode) geklont werden.
- Die nicht standardmäßige DOM-Methode `getBoxObjectFor()` wurde entfernt. Sie sollten stattdessen [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) verwenden.
- Gesendete DOM-Ereignisse können jetzt erneut gesendet werden. Dadurch besteht Firefox 3.5 den Acid 3 Test 30.
- Verbesserungen wurden an der DOM 2 Bereichsbehandlung vorgenommen.
- Im Nicht-Chrome-Bereich sind gefangene Objekte bei Ausnahmen nun das tatsächlich geworfene Objekt anstelle eines [`XPConnect`](https://web.archive.org/web/20210423135742/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Language_bindings/XPConnect) Wrappers, der das geworfene Objekt enthält.
- SVG-ID-Referenzen sind jetzt live.
- SVG-Filter funktionieren nun auch für `foreignObject`.
- Die Methode `GetSVGDocument()` wurde zu den [`object`](/de/docs/Web/HTML/Element/object) und [`iframe`](/de/docs/Web/HTML/Element/iframe)-Elementen für die Kompatibilität hinzugefügt.
- Implizite Einstellung von Eigenschaften in Objekt- und Array-Initialisierern führt in JavaScript nicht mehr zur Ausführung von Settern.
- Die Variable `gDownloadLastDir.path` wurde in `gDownloadLastDir.file` umbenannt, da sie sich auf eine `nsIFile` und nicht auf einen Pfad bezieht.
- Die Variable `gDownloadLastDirPath` wurde in `gDownloadLastDirFile` umbenannt, da sie sich auf eine `nsIFile` und nicht auf einen Pfad bezieht.
- Ab Firefox 3.5 können Sie keine `data:`-Bindings mehr in Chrome-Paketen verwenden, die `XPCNativeWrapper`-Automatisierung erhalten.

### Für XUL- und Add-on-Entwickler

Wenn Sie ein Erweiterungsentwickler sind, sollten Sie mit dem Lesen von [Aktualisierung von Erweiterungen für Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Updating_extensions) beginnen, welches einen hilfreichen Überblick darüber bietet, welche Änderungen Ihre Erweiterung betreffen könnten.

#### Neue Komponenten und Funktionalitäten

- [Unterstützung des privaten Browsing-Modus](https://web.archive.org/web/20191029190431/https://developer.mozilla.org/de/docs/Archive/Mozilla/Supporting_private_browsing_mode)
  - : Firefox 3.5 bietet einen privaten Browsing-Modus, der die Aktivitäten des Benutzers nicht aufzeichnet. Erweiterungen können den privaten Browsing-Modus unterstützen, indem sie den in diesem Artikel angebotenen Leitlinien folgen.
- [Sicherheitsänderungen in Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Security_changes)
  - : Dieser Artikel behandelt sicherheitsrelevante Änderungen in Firefox 3.5.
- [Themenänderungen in Firefox 3.5](https://web.archive.org/web/20191004004454/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_3.5)
  - : Dieser Artikel behandelt themenbezogene Änderungen in Firefox 3.5.
- Überwachung von Wi-Fi-Zugangspunkten
  - : Code mit UniversalXPConnect-Rechten kann nun die Liste der verfügbaren Zugangspunkte überwachen und Informationen über ihre SSIDs, MAC-Adressen und Signalstärke erhalten. Dies kann zusammen mit der Geolocation verwendet werden, um standortbasierte Dienste per Wi-Fi anzubieten.

#### Bemerkenswerte Änderungen und Verbesserungen

- Das XUL `textbox`-Widget bietet jetzt einen `search`-Typ, für die Verwendung als Suchfelder.
- Um das Ziehen und Ablegen von Tabs zwischen Fenstern zu unterstützen, verfügt das `browser`-Widget jetzt über eine `swapDocShells()`-Methode.
- Das Attribut `level` wurde dem `panel`-Element hinzugefügt; dies gibt an, ob Panels über anderen Anwendungen oder nur über dem Fenster erscheinen, das das Panel enthält.
- XUL-Elemente unterstützen jetzt die Eigenschaften `clientHeight`, `clientWidth`, `scrollHeight` und `scrollWidth`.
- `keyset` enthält jetzt ein `disabled`-Attribut.
- Darüber hinaus können `keyset`s jetzt mit der Methode [`removeChild()`](/de/docs/Web/API/Node/removeChild) des Knotens entfernt werden.
- `mozIStorageStatement` hatte die Methode `initialize()` entfernt; Nutzer sollten die Methode `createStatement()` verwenden, um ein neues Statement-Objekt zu erhalten.
- Die Storage-API bietet jetzt Unterstützung für asynchrone Anfragen.
- Das `nsICookie2`-Interface zeigt jetzt die Zeit, zu der Cookies erstellt wurden, in seinem neuen `creationTime`-Attribut an.
- Ein Flag wurde zum `nsIProtocolHandler` hinzugefügt (`URI_IS_LOCAL_RESOURCE`), das während der Chrome-Registrierung überprüft wird, um sicherzustellen, dass ein Protokoll registriert werden darf.
- Firefox sucht jetzt nach Plugins in `/usr/lib/mozilla/plugins` auf Linux sowie in den zuvor unterstützten Standorten.
- Die Plugin-API wurde aktualisiert, um Unterstützung für den privaten Browsing-Modus zu enthalten; Sie können jetzt `NPN_GetValue()` verwenden, um den Status des privaten Browsing-Modus mit der Variablen `NPNVprivateModeBool` abzufragen.

## Neue Funktionen für Endbenutzer

### Benutzererfahrung

- Standortbasiertes Browsen
  - : Wenn Sie es möchten, können Sie Firefox 3.5 erlauben, Informationen über Ihren aktuellen Standort mit Websites zu teilen. Firefox 3.5 kann Informationen über das Netzwerk, mit dem Sie verbunden sind, verwenden, um Ihren Standort zu teilen. Natürlich wird es vor der Freigabe um Ihre Erlaubnis bitten, um Ihre Privatsphäre zu gewährleisten.
- Offene Audio- und Videounterstützung
  - : Firefox 3.5 unterstützt eingebettetes Video und Audio im offenen Ogg-Format sowie WAV für Audio. Keine Plugins, keine verwirrenden Fehlermeldungen darüber, dass etwas installiert werden muss, das auf Ihrer Plattform ohnehin nicht verfügbar ist.
- Lokale Datenspeicherung
  - : Webanwendungen können jetzt die lokale Speicherfunktion von Web Storage verwenden, um Daten auf Ihrem Computer zu speichern. Dies ist ideal für alles, von Sitepräferenzen bis zu komplexeren Daten.

### Sicherheit und Datenschutz

- Privates Surfen
  - : Müssen Sie den Computer von jemand anderem benutzen? Schalten Sie den privaten Browsing-Modus ein und nichts wird über Ihre Sitzung aufgezeichnet, einschließlich Cookies, Verlauf und anderer potenziell privater Informationen.
- Bessere Datenschutzkontrollen
  - : Das Datenschutz-Einstellungsfeld wurde komplett neu gestaltet, um Benutzern mehr Kontrolle über ihre privaten Informationen zu bieten. Benutzer können wählen, ob sie alles, einschließlich Verlaufinformationen, Cookies, Downloads und Formularfeldern, beibehalten oder verwerfen möchten. Darüber hinaus können Benutzer festlegen, ob der Verlauf und/oder Lesezeichen in die automatischen Vorschläge der Adressleiste einbezogen werden sollen, um zu verhindern, dass private Webadressen unerwartet auftauchen, während sie in die Adressleiste eingeben.

### Leistung

- Schnellere JavaScript-Leistung
  - : JavaScript, das "J" in "AJAX", ist in Firefox 3.5 mit der neuen TraceMonkey-JavaScript-Engine dramatisch beschleunigt. Webanwendungen sind viel schneller als in Firefox 3.
- Schnellere Seitenwiedergabe
  - : Webinhalte werden in Firefox 3.5 dank Technologien wie "spekulatives Parsen" schneller gezeichnet. Ihre Benutzer müssen nicht wissen, was es bedeutet, außer dass "es lässt Dinge schneller zeichnen".

## Siehe auch

{{Firefox_for_developers}}

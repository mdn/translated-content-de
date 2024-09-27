---
title: Firefox 6 für Entwickler
slug: Mozilla/Firefox/Releases/6
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{FirefoxSidebar}}

Firefox 6, basierend auf Gecko 6.0, wurde am 16. August 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Das HTML5-Element {{ HTMLElement("progress") }}, das Ihnen erlaubt, eine Fortschrittsleiste zu erstellen, wird jetzt unterstützt.
- Das Parsen des HTML5-Elements {{ HTMLElement("track") }}, welches Textspuren für Medienelemente spezifiziert, wird jetzt unterstützt. Dieses Element sollte nun im DOM erscheinen, auch wenn das Verhalten noch nicht implementiert ist.
- Das Element {{ HTMLElement("iframe") }} wird jetzt korrekt von seinem Container abgeschnitten, wenn die Ecken des Containers mit der Eigenschaft {{ cssxref("border-radius") }} abgerundet wurden.
- Die Texteingabefelder von {{ HTMLElement("form") }}-Elementen unterstützen nicht mehr die XUL-Eigenschaft [`maxwidth`](/de/docs/XUL/Property/maxwidth); dies war nie beabsichtigt und verstößt gegen die HTML-Spezifikation. Sie sollten stattdessen das [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut verwenden, um die maximale Breite von Eingabefeldern festzulegen.
- Die `CanvasRenderingContext2d`-Eigenschaften `fillStyle` und `strokeStyle` des {{ HTMLElement("canvas") }}-Elements ignorierten früher Müll nach einer gültigen Farbdefinition; jetzt wird dies korrekt als Fehler behandelt. Zum Beispiel wurde "rot blau" als Farbe früher als "rot" behandelt, wenn es ignoriert werden sollte.
- Die Breite und Höhe von {{ HTMLElement("canvas") }}-Elementen kann jetzt korrekt auf 0px gesetzt werden; vorher wurden diese willkürlich auf 300px gesetzt, wenn Sie versuchten, dies zu tun.
- Unterstützung für die HTML [benutzerdefinierten Datenattribute](/de/docs/Web/HTML/Global_attributes#data-) (`data-*`) wurde hinzugefügt. Die DOM-Eigenschaft [`element.dataset`](/de/docs/Web/API/Element/dataset) ermöglicht den Zugriff auf diese.
- Wenn ein {{ HTMLElement("textarea") }}-Element den Fokus erhält, wird der Texteingabepunkt standardmäßig nun am Anfang des Textes platziert, anstatt am Ende. Dies macht das Verhalten von Firefox konsistent mit anderen Browsern.

### CSS

- {{ cssxref("text-decoration-color", "-moz-text-decoration-color") }}
  - : Diese neue Eigenschaft erlaubt es Ihnen, die von Textdekorationen wie Unterstrichen, Überstrichen und Durchstreichungen verwendete Farbe festzulegen.
- {{ cssxref("text-decoration-line", "-moz-text-decoration-line") }}
  - : Diese neue Eigenschaft erlaubt es Ihnen, die Art der zu einem Element hinzugefügten Textdekorationen festzulegen.
- {{ cssxref("text-decoration-style", "-moz-text-decoration-style") }}
  - : Diese neue Eigenschaft erlaubt es Ihnen, den Stil von Textdekorationen wie Unterstrichen, Überstrichen und Durchstreichungen festzulegen. Stilarten umfassen einfache Striche, doppelte Striche, Wellenlinien, gepunktete Linien und so weiter.
- {{ cssxref("hyphens", "-moz-hyphens") }}
  - : Diese neue Eigenschaft erlaubt es Ihnen zu steuern, wie die Trennung von Wörtern beim Umbruch behandelt wird.
- {{ cssxref("-moz-orient", "-moz-orient") }}
  - : Eine neue (derzeit Mozilla-spezifische) Eigenschaft, die es erlaubt, die vertikale oder horizontale Ausrichtung bestimmter Elemente zu steuern (insbesondere {{ HTMLElement("progress") }}).
- {{ cssxref("::-moz-progress-bar") }}
  - : Ein Mozilla-spezifisches Pseudoelement, das es Ihnen erlaubt, den Bereich eines {{ HTMLElement("progress") }}-Elements zu gestalten, der den abgeschlossenen Teil einer Aufgabe darstellt.

#### Andere Änderungen

- Die Eigenschaft `@-moz-document` hat eine neue `regexp()` Funktion, die es Ihnen ermöglicht, die URL des Dokuments mit einem [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) zu vergleichen.
- Die {{ cssxref("azimuth") }} CSS-Eigenschaft wird nicht mehr unterstützt, da wir den wenigen Code, den wir für die `aural`-Mediagruppe hatten, entfernt haben. Sie war nie signifikant implementiert, also machte es mehr Sinn, die unfertige Implementierung vorerst zu entfernen, anstatt zu versuchen, sie zu verbessern.
- In der Vergangenheit wurde die {{ cssxref(":hover") }} Pseudoklasse nicht auf Klassenselektoren angewendet, wenn der Modus für Abwärtskompatibilität aktiv war; zum Beispiel funktionierte `.someclass:hover` nicht. Diese Unregelmäßigkeit wurde entfernt.
- Die {{ cssxref(":indeterminate") }} Pseudoklasse kann auf {{ HTMLElement("progress") }}-Elemente angewendet werden. Dies ist nicht standardisiert, aber wir hoffen, dass es von anderen Browsern übernommen wird, da es nützlich sein wird.
- Der `-moz-win-exclude-glass` Wert wurde der `-moz-appearance` CSS-Eigenschaft hinzugefügt, um undurchsichtige Bereiche in Aero Glass Glanzeffekten auf Windows-Systemen auszuschließen.
- [Firefox-Bug 658949](https://bugzil.la/658949) änderte die Behandlung des Sharps (#) in Daten-URLs, was möglicherweise CSS-Stylesheets beeinträchtigt, die ein solches Symbol enthalten, wenn es nicht escaped ist.

### DOM

- [Verwendung von Medienanfragen im Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
  - : Sie können das Ergebnis einer Medienabfrage-Zeichenfolge nun programmgesteuert mit der Methode [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und der Schnittstelle [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) testen.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Firefox 6 fügt Unterstützung für die W3C-Standard-Touch-Ereignisse hinzu; diese erleichtern das Interpretieren von einem oder mehreren Berührungen gleichzeitig auf berührungsempfindlichen Oberflächen wie Touchscreens und Trackpads.
- [Server-send Events](/de/docs/Web/API/Server-sent_events)
  - : Server-send Events ermöglichen es einer Webanwendung, einen Server zu bitten, Ereignisse zu senden, genau wie bei einem lokal erstellten DOM-Ereignis.

<!---->

- `navigator.securityPolicy`, das lange Zeit nur einen leeren String zurückgab, wurde vollständig entfernt.
- `BlobBuilder` ist jetzt implementiert, allerdings ist es derzeit mit einem Präfix versehen (daher müssen Sie `MozBlobBuilder` verwenden).
- Die `Document.height` und `Document.width` wurden entfernt. [Firefox-Bug 585877](https://bugzil.la/585877)
- Die `entities` und `notations` Eigenschaften des [`DocumentType`](/de/docs/Web/API/DocumentType) Objekts, welche nie implementiert wurden und immer `null` zurückgaben, wurden entfernt, da sie ohnehin aus der Spezifikation entfernt wurden.
- Die `DOMConfiguration`-Schnittstelle und die sie verwendende Eigenschaft `document.domConfig` wurden beide entfernt; sie wurden nie unterstützt und mittlerweile auch aus der DOM-Spezifikation entfernt.
- Das `hashchange` Ereignis enthält nun korrekt [die Felder `newURL` und `oldURL`](/de/docs/Web/API/Window/hashchange_event).
- Die Methode `abort()` des [`FileReader`](/de/docs/Web/API/FileReader) Interface wirft jetzt eine Ausnahme, wenn sie verwendet wird und kein Datei-Lesevorgang läuft.
- Die Methode [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwendet jetzt den [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um zu ermöglichen, dass Sie JavaScript-Objekte anstelle von nur Strings von einem Fenster zu einem anderen übergeben.
- Die API [`window.history`](/de/docs/Web/API/Window/history) verwendet jetzt den [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um die Objekte zu serialisieren, die Sie an die Methoden `pushState()` und `replaceState()` übergeben; dies ermöglicht es Ihnen, komplexere Objekte (einschließlich solcher mit zyklischen Referenzierungsgraphen) zu verwenden.
- Sie können nun [erkennen, wann ein Druckvorgang gestartet und abgeschlossen wurde](/de/docs/Web/CSS/CSS_media_queries/Printing#detecting_print_requests), indem Sie den neuen Ereignissen `beforeprint` und `afterprint` lauschen.
- Die Eigenschaft `document.strictErrorChecking` wurde entfernt, da sie nie implementiert wurde und aus der DOM-Spezifikation entfernt wurde.
- Die standardmäßige [`event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) Eigenschaft wird nun unterstützt; Sie sollten diese anstelle der nicht-standardisierten Methode `getPreventDefault()` verwenden, um zu erkennen, ob [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das Ereignis aufgerufen wurde.
- Die Eigenschaft [`window.top`](/de/docs/Web/API/Window/top) ist jetzt korrekt schreibgeschützt.
- DOM-Ansichten, die wir nie dokumentiert haben, wurden entfernt. Dies war ein Teil des Implementierungsdetails, der die Dinge unnötig verkomplizierte, daher haben wir es entfernt. Wenn Sie diese Änderung bemerken, machen Sie wahrscheinlich etwas falsch.
- Der `EventTarget`-Funktionsparameter `useCapture` von [`addEventListener()`](/de/docs/XPCOM_Interface_Reference/nsIDOMEventTarget) ist jetzt optional, wie es auch in WebKit ist (und gemäß der neuesten Version der Spezifikation).
- Die `mozResponseArrayBuffer`-Eigenschaft des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekts wurde durch die `responseType` und `response` Eigenschaften ersetzt.
- Die [`element.dataset`](/de/docs/Web/API/Element/dataset) Eigenschaft wurde zur [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle hinzugefügt und ermöglicht den Zugriff auf die [`data-*` globalen Attribute](/de/docs/Web/HTML/Global_attributes#data-) eines Elements.
- Das [`CustomEvent`](/de/docs/Web/API/CustomEvent)-Interface wurde implementiert. (siehe [Firefox-Bug 427537](https://bugzil.la/427537))
- Aus Sicherheitsgründen erben `data:`- und `javascript:`-URLs beim Eingeben in die Adressleiste nicht länger den Sicherheitskontext der aktuellen Seite; stattdessen wird ein neuer, leerer Sicherheitskontext erstellt. Das bedeutet, dass Skripte, die durch Eingabe von `javascript:`-URLs in die Adressleiste geladen werden, keinen Zugriff mehr auf DOM-Methoden und dergleichen haben. Diese URLs funktionieren jedoch weiterhin wie zuvor, wenn sie durch ein Skript verwendet werden.

### JavaScript

- In der Vergangenheit war es möglich, den `new` Operator auf mehrere eingebaute Funktionen (`eval()`, `parseInt()`, `Date.parse()`, …) anzuwenden, die dies laut Spezifikation nicht erlauben sollten. Dieses Verhalten wird nun nicht mehr unterstützt. Die Verwendung des `new` Operators auf diese Weise wurde nie offiziell unterstützt und war nicht weit verbreitet, daher ist es unwahrscheinlich, dass diese Änderung Sie betrifft.
- ECMAScript 2015 [WeakMaps](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) wurden als Prototyp-Implementierung hinzugefügt.

### SVG

- Das Attribut {{ SVGAttr("pathLength") }} wird jetzt unterstützt.
- SVG-Muster, -Verläufe und -Filter funktionieren jetzt korrekt, wenn sie von [`data:` URLs](/de/docs/Web/URI/Schemes/data) geladen werden.

### MathML

- Die Implementierung von {{ MathMLElement("mstyle") }} wurde korrigiert.

### Barrierefreiheit (ARIA)

- Ein Zustandsänderungsereignis wird nun korrekt gesendet, wenn sich der Wert von `aria-busy` ändert.
- Ein Attributänderungsereignis wird nun korrekt gesendet, wenn `aria-sort` auftritt.

### Netzwerktechnik

- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : WebSockets wurde auf Protokollversion 07 für Firefox 6 aktualisiert. Darüber hinaus wurde das globale `WebSocket`-Objekt in `MozWebSocket` umbenannt, um eine falsche Verwendung zur Erkennung der Verfügbarkeit unpräfixierter WebSockets zu vermeiden.

<!---->

- Das Parsen des `Content-Disposition`-Headers wurde korrigiert, um korrekt Backslash-escapete ASCII-Zeichen als genau dieses Zeichen zu interpretieren. Vorher wurde dieses Zeichen fälschlicherweise mit einem Unterstrich ("\_") ersetzt.
- Der Wert des Pfadfelds auf `Set-Cookie`-Headern wird jetzt korrekt interpretiert, wenn Anführungszeichen verwendet werden; zuvor wurden sie als Teil der Pfadzeichenfolge behandelt, anstatt als Trennzeichen. **Diese Änderung kann die Kompatibilität mit einigen Websites beeinflussen**, daher sollten Autoren ihren Code überprüfen.
- Der [`Upgrade`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.42) Request-Header wird jetzt unterstützt; Sie können ein Upgrade eines HTTP-Kanals auf ein anderes Protokoll anfordern, indem Sie `nsIHttpChannelInternal.HTTPUpgrade()` aufrufen.

### Andere Änderungen

- Die Unterstützung für Microsummaries wurde entfernt; diese wurden nie weit verbreitet eingesetzt, waren nicht sehr auffindbar und die Unterstützung hat es erschwert, Verbesserungen an der Places (Lesezeichen- und Verlauf) Architektur durchzuführen.
- WebGL unterstützt jetzt die [`OES_texture_float`](https://registry.khronos.org/OpenGL/extensions/OES/OES_texture_float.txt) Erweiterung.
- Das neue _Scratchpad-Tool_ bietet einen praktischen Platz, um mit JavaScript-Code zu experimentieren.
- Die Methode `console.trace()` wurde der [Console API](/de/docs/Web/API/Console_API) hinzugefügt ([Firefox-Bug 585956](https://bugzil.la/585956)).

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über die Änderungen, die Sie vornehmen müssen, um Ihr Add-on mit Firefox 6 kompatibel zu machen, siehe [Aktualisieren von Add-ons für Firefox 6](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_6).

> [!NOTE]
> Firefox 6 erfordert, dass binäre Komponenten neu kompiliert werden, ebenso wie alle Hauptversionen von Firefox. Weitere Einzelheiten finden Sie unter [Binäre Schnittstellen](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces).

### JavaScript-Code-Module

#### FileUtils.jsm

- Die Methode `openSafeFileOutputStream()` öffnet jetzt Dateien mit dem `DEFER_OPEN` [Verhaltens-Flag](/de/docs/XPCOM_Interface_Reference/nsIFileOutputStream#behavior_flag_constants), anstatt zu versuchen, sie sofort zu öffnen.

#### XPCOMUtils.jsm

- Die neue Methode `importRelative()` ermöglicht es Ihnen, ein JavaScript-Code-Modul von einem Pfad relativ zu dem eines anderen JavaScript-Code-Moduls zu laden. Dies erleichtert es, Module zu erstellen, die voneinander abhängig sind.

### XPCOM

- [`nsCOMArray<T>`](/de/docs/XPCOM_array_guide#nsCOMArray.3cT.3e) hat jetzt eine [`RemoveObjectsAt()`](/de/docs/XPCOM_array_guide#deleting_objects)-Methode, um mehrere Objekte gleichzeitig aus dem Array zu entfernen.

### Verwendung des DOM aus dem Chrome

- [Verwendung der DOM-File-API im Chrome-Code](/de/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
  - : Obwohl Sie die DOM-File-API immer aus dem Chrome-Code verwenden konnten, unterstützt der [`File`](/de/docs/Web/API/File)-Konstruktor jetzt die Angabe eines lokalen Pfadnamens, wenn er aus dem Chrome verwendet wird. Darüber hinaus können Sie die Datei, auf die zugegriffen werden soll, unter Verwendung eines `nsIFile`-Objekts angeben.

### Schnittstellenänderungen

- `nsINavHistoryQueryOptions` unterstützt jetzt die Sortierung in Häufigkeitsreihenfolge mit den neuen Konstanten `SORT_BY_FREQUENCY_ASCENDING` und `SORT_BY_FREQUENCY_DESCENDING`.
- `nsIFilePicker` hat ein neues Attribut `nsIFilePicker.addToRecentDocs`, das es Ihnen erlaubt, anzugeben, dass die ausgewählte Datei zur Liste der "zuletzt verwendeten Dokumente" des Benutzers hinzugefügt werden soll, falls vorhanden. Dieses Attribut hat keine Wirkung im privaten Modus.
- Die Methoden von `nsINavBookmarkObserver` mit Element-ID-Parametern erfordern jetzt auch eine GUID.
- `nsIPrefBranch.clearUserPref()` wirft keine Ausnahme mehr, wenn die angegebene Voreinstellung nicht existiert oder keinen benutzerdefinierten Wert hat. Stattdessen wird nichts unternommen.
- Die `nsIMemoryReporter`-Schnittstelle unterstützt jetzt die Angabe der Art des beschriebenen Speichers (gemappt, Heap oder anderes).
- Das Attribut `stateData` von `nsISHEntry` gibt jetzt ein `nsIStructuredCloneContainer` zurück.
- `nsIURI` hat ein neues Attribut `nsIURI.ref`, das den Referenzteil (den Teil nach dem "#") der URI zurückgibt. Es hat auch neue Methoden `nsIURI.cloneIgnoringRef()`, das die `nsIURI` ohne den ref-Teil klont, und `nsIURI.equalsExceptRef()`, das es ermöglicht, mit einer anderen `nsIURI` zu vergleichen und den ref-Teil zu ignorieren.

#### Neue Schnittstellen

- `mozIAsyncFavicons`
  - : Ein neuer Dienst, der es Ihnen erlaubt, asynchron auf den Favicon-Dienst zuzugreifen.
- `nsIEventSource`
  - : _Details folgen._
- `nsIGSettingsCollection`
  - : _Details folgen._
- `nsIGSettingsService`
  - : _Details folgen._
- `nsIHttpUpgradeListener`
  - : Die Callback-Schnittstelle zur Behandlung von HTTP-Upgrade-Anfragen über die Methode `nsIHttpChannelInternal.HTTPUpgrade()`.
- `nsIStructuredCloneContainer`
  - : Ein Container für Objekte, die unter Verwendung des [strukturierten Klon-Algorithmus](/de/docs/HTML/Structured_clones) serialisiert wurden.
- `nsITelemetry`
  - : Implementiert Telemetrie-Unterstützung, um die Aufzeichnung von Telemetriedaten zu ermöglichen, die zur Präsentation von Histogrammen für Leistungsüberwachungszwecke verwendet werden können. Siehe [Firefox-Bug 649502](https://bugzil.la/649502) und [Firefox-Bug 585196](https://bugzil.la/585196).
- `nsITimedChannel`
  - : Siehe [Firefox-Bug 576006](https://bugzil.la/576006).
- `nsIWebSocketListener`
  - : Siehe [Firefox-Bug 640003](https://bugzil.la/640003).
- `nsIWebSocketProtocol`
  - : Siehe [Firefox-Bug 640003](https://bugzil.la/640003).

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsIDOMDocumentEvent` (siehe [Firefox-Bug 655517](https://bugzil.la/655517))
- `nsIDOMDocumentTraversal` (siehe [Firefox-Bug 655514](https://bugzil.la/655514))
- `nsIDOMDocumentRange` (siehe [Firefox-Bug 655513](https://bugzil.la/655513))
- `IWeaveCrypto` (siehe [Firefox-Bug 651596](https://bugzil.la/651596))
- `nsIDOM3DocumentEvent` (siehe [Firefox-Bug 481863](https://bugzil.la/481863))
- `nsIDOMAbstractView`
- `nsILiveTitleNotificationSubject`
- `nsIPlugin` (siehe [Firefox-Bug 637253](https://bugzil.la/637253))
- `nsIPluginInstance` (siehe [Firefox-Bug 637253](https://bugzil.la/637253))
- `nsIHTMLEditRules` (siehe [Firefox-Bug 633750](https://bugzil.la/633750))
- `nsIXSLTProcessorObsolete` (siehe [Firefox-Bug 649534](https://bugzil.la/649534))

### Andere Änderungen

- [Verwendung von Voreinstellungen im Anwendungscode](/de/docs/Mozilla/Preferences/Using_preferences_from_application_code)
  - : Eine neue statische API ist verfügbar, um leicht auf Voreinstellungen zuzugreifen; diese ist nur für Anwendungscode verfügbar und kann nicht von Add-ons verwendet werden.

## Siehe auch

{{Firefox_for_developers}}

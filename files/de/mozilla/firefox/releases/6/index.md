---
title: Firefox 6 für Entwickler
slug: Mozilla/Firefox/Releases/6
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

Firefox 6, basierend auf Gecko 6.0, wurde am 16. August 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Das HTML5-Element {{ HTMLElement("progress") }}, mit dem Sie eine Fortschrittsanzeige erstellen können, wird jetzt unterstützt.
- Das Parsen des HTML5-Elements {{ HTMLElement("track") }}, welches Textspuren für Medienelemente spezifiziert, wird jetzt unterstützt. Dieses Element sollte nun im DOM erscheinen, obwohl sein Verhalten noch nicht implementiert ist.
- Das {{ HTMLElement("iframe") }}-Element wird nun korrekt von seinem Container abgeschnitten, wenn die Ecken des Containers mithilfe der Eigenschaft {{ cssxref("border-radius") }} abgerundet wurden.
- Textfelder von {{ HTMLElement("form") }}-Elementen unterstützen nicht länger die XUL-Eigenschaft [`maxwidth`](/de/docs/XUL/Property/maxwidth); dies war nie beabsichtigt und verstößt gegen die HTML-Spezifikation. Stattdessen sollten Sie das Attribut [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) verwenden, um die maximale Breite von Eingabefeldern festzulegen.
- Die Eigenschaften `fillStyle` und `strokeStyle` des [`CanvasRenderingContext2d`](/de/docs/Web/API/CanvasRenderingContext2D) der {{ HTMLElement("canvas") }} ignorierten zuvor Müll, der nach einer gültigen Farbbestimmung enthalten war; jetzt wird dies korrekt als Fehler behandelt. Beispielsweise wurde "red blue" als Farbe früher als "red" behandelt, obwohl es ignoriert werden sollte.
- Die Breite und Höhe von {{ HTMLElement("canvas") }}-Elementen können jetzt korrekt auf 0px gesetzt werden; zuvor wurden diese willkürlich auf 300px gesetzt, wenn Sie dies versucht haben.
- Unterstützung für HTML-[benutzerdefinierte Datenattribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) (`data-*`) wurde hinzugefügt. Die DOM-Eigenschaft [`dataset`](/de/docs/Web/API/HTMLElement/dataset) erlaubt den Zugriff auf diese.
- Wenn ein {{ HTMLElement("textarea") }}-Element den Fokus erhält, wird der Texteinfügepunkt nun standardmäßig am Anfang des Textes platziert und nicht mehr am Ende. Dies macht das Verhalten von Firefox konsistent mit anderen Browsern.

### CSS

- {{ cssxref("text-decoration-color", "-moz-text-decoration-color") }}
  - : Diese neue Eigenschaft lässt Sie die Farbe einstellen, die von Textdekorationen wie Unterstreichungen, Überstreichungen und Durchstreichungen verwendet wird.
- {{ cssxref("text-decoration-line", "-moz-text-decoration-line") }}
  - : Diese neue Eigenschaft lässt Sie die Art der Textdekorationen einstellen, die einem Element hinzugefügt werden.
- {{ cssxref("text-decoration-style", "-moz-text-decoration-style") }}
  - : Diese neue Eigenschaft lässt Sie den Stil der Textdekorationen einstellen, wie Unterstreichungen, Überstreichungen und Durchstreichungen. Dazu gehören Einzelstriche, Doppelstriche, Wellenlinien, gepunktete Linien und so weiter.
- {{ cssxref("hyphens", "-moz-hyphens") }}
  - : Diese neue Eigenschaft lässt Sie steuern, wie die Silbentrennung von Wörtern beim Zeilenumbruch behandelt wird.
- {{ cssxref("-moz-orient", "-moz-orient") }}
  - : Eine neue (derzeit Mozilla-spezifische) Eigenschaft, mit der Sie die vertikale oder horizontale Ausrichtung bestimmter Elemente steuern können (insbesondere {{ HTMLElement("progress") }}).
- {{ cssxref("::-moz-progress-bar") }}
  - : Ein Mozilla-spezifisches Pseudoelement, das Ihnen erlaubt, den Bereich eines {{ HTMLElement("progress") }}-Elements zu gestalten, der den abgeschlossenen Teil einer Aufgabe repräsentiert.

#### Andere Änderungen

- Die Eigenschaft `@-moz-document` hat eine neue Funktion `regexp()`, mit der Sie die URL des Dokuments mit einem [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) abgleichen können.
- Die CSS-Eigenschaft `azimuth` wird nicht mehr unterstützt, da der geringe Code, den wir für die `aural`-Mediengruppe hatten, entfernt wurde. Es war nie signifikant implementiert, daher machte es mehr Sinn, die unordentliche Implementierung vorerst zu entfernen, anstatt zu versuchen, sie zu reparieren.
- In der Vergangenheit wurde die {{ cssxref(":hover") }}-Pseudoklasse nicht auf Klassenselektoren im Quirks-Modus angewendet; zum Beispiel funktionierte `.some-class:hover` nicht. Diese Besonderheit wurde entfernt.
- Die Pseudoklasse {{ cssxref(":indeterminate") }} kann auf {{ HTMLElement("progress") }}-Elemente angewendet werden. Dies ist nicht standardisiert, aber wir hoffen, dass es von anderen Browsern übernommen wird, da es nützlich sein wird.
- Der `-moz-win-exclude-glass`-Wert wurde der CSS-Eigenschaft `-moz-appearance` hinzugefügt, um opake Bereiche in Aero-Glas-Lackierungseffekten auf Windows-Systemen auszuschließen.
- [Firefox-Bug 658949](https://bugzil.la/658949) änderte, wie das Rautezeichen (#) in Daten-URLs behandelt wird, was CSS-Stylesheets, die ein solches Symbol enthalten und es nicht maskiert haben, brechen kann.

### DOM

- [Verwendung von Media Queries aus Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
  - : Sie können nun das Ergebnis eines Media Query-Strings programmatisch mithilfe der Methode [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und der Schnittstelle [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) testen.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Firefox 6 fügt Unterstützung für W3C-Standard-Touch-Ereignisse hinzu; diese machen es einfach, ein oder mehrere Berührungen gleichzeitig auf berührungsempfindlichen Oberflächen wie Touchscreens und Trackpads zu interpretieren.
- [Server-gesendete Ereignisse](/de/docs/Web/API/Server-sent_events)
  - : Server-gesendete Ereignisse ermöglichen es einer Webanwendung, einen Server zu bitten, Ereignisse zu senden, die genau wie lokale DOM-Ereignisse erstellt wurden.

<!---->

- `navigator.securityPolicy`, das seit langem einen leeren String zurückgegeben hat, wurde vollständig entfernt.
- `BlobBuilder` ist jetzt implementiert, obwohl es derzeit noch mit einem Präfix versehen ist (also müssen Sie `MozBlobBuilder` verwenden).
- `Document.height` und `Document.width` wurden entfernt. [Firefox-Bug 585877](https://bugzil.la/585877)
- Die Eigenschaften `entities` und `notations` des [`DocumentType`](/de/docs/Web/API/DocumentType)-Objekts, die nie implementiert wurden und immer `null` zurückgaben, wurden entfernt, da sie auch aus der Spezifikation entfernt wurden.
- Die Schnittstelle `DOMConfiguration` und die Eigenschaft `document.domConfig`, die sie nutzten, wurden beide entfernt; sie wurden nie unterstützt und sind inzwischen auch aus der DOM-Spezifikation entfernt worden.
- Das `hashchange`-Ereignis enthält jetzt korrekt [die Felder `newURL` und `oldURL`](/de/docs/Web/API/Window/hashchange_event).
- Die Methode `abort()` der [`FileReader`](/de/docs/Web/API/FileReader)-Schnittstelle wirft jetzt eine Ausnahme, wenn sie verwendet wird, während kein Dateilesen im Gange ist.
- Die Methode [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwendet jetzt [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um JavaScript-Objekte statt nur Zeichenfolgen von einem Fenster zu einem anderen zu übergeben.
- Die API der [`window.history`](/de/docs/Web/API/Window/history) verwendet jetzt [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um die Objekte zu serialisieren, die Sie an die Methoden `pushState()` und `replaceState()` übergeben; dies ermöglicht die Verwendung komplexerer Objekte (einschließlich solcher, die zyklische Referenzgraphen enthalten).
- Sie können jetzt [erkennen, wann der Druck gestartet und abgeschlossen wurde](/de/docs/Web/CSS/CSS_media_queries/Printing#detecting_print_requests), indem Sie auf die neuen Ereignisse `beforeprint` und `afterprint` hören.
- Die Eigenschaft `document.strictErrorChecking` wurde entfernt, da sie nie implementiert wurde und aus der DOM-Spezifikation entfernt wurde.
- Die standardmäßige Eigenschaft [`event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) wird jetzt unterstützt; Sie sollten diese verwenden, anstatt der nicht standardmäßigen Methode `getPreventDefault()`, um zu erkennen, ob [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das Ereignis aufgerufen wurde.
- Die Eigenschaft [`window.top`](/de/docs/Web/API/Window/top) ist jetzt ordnungsgemäß schreibgeschützt.
- DOM-Ansichten, die wir nie dokumentiert haben, wurden entfernt. Dies war ein Detail der Implementierung, das unnötig Dinge komplizierte, also haben wir es entfernt. Wenn Ihnen diese Änderung auffällt, machen Sie wahrscheinlich etwas falsch.
- Der Parameter `useCapture` der Funktion [`addEventListener()`](/de/docs/XPCOM_Interface_Reference/nsIDOMEventTarget) von `EventTarget` ist jetzt optional, wie in WebKit (und gemäß der neuesten Version der Spezifikation).
- Die Eigenschaft `mozResponseArrayBuffer` des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekts wurde durch die Eigenschaften `responseType` und `response` ersetzt.
- Die Eigenschaft [`dataset`](/de/docs/Web/API/HTMLElement/dataset) wurde der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle hinzugefügt, was den Zugriff auf die [`data-*`-globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) eines Elements ermöglicht.
- Die Schnittstelle [`CustomEvent`](/de/docs/Web/API/CustomEvent) wurde implementiert. (siehe [Firefox-Bug 427537](https://bugzil.la/427537))
- Aus Sicherheitsgründen erben `data:`- und `javascript:`-URLs nicht länger den Sicherheitskontext der aktuellen Seite, wenn der Benutzer sie in die Adressleiste eingibt; stattdessen wird ein neuer, leerer Sicherheitskontext erstellt. Das bedeutet, dass in der Adressleiste eingegebene `javascript:`-URLs zum Beispiel keinen Zugriff mehr auf DOM-Methoden und dergleichen haben. Diese URLs funktionieren jedoch weiterhin wie zuvor, wenn sie durch Skript verwendet werden.

### JavaScript

- In der Vergangenheit war es möglich, den `new`-Operator auf mehrere eingebaute Funktionen anzuwenden (`eval()`, `parseInt()`, `Date.parse()`, …), die dies laut Spezifikation nicht hätten zulassen sollen. Dieses Verhalten wird nicht mehr unterstützt. Die Verwendung des `new`-Operators in dieser Weise wurde nie offiziell unterstützt und war nicht weit verbreitet, daher ist es unwahrscheinlich, dass diese Änderung Sie betrifft.
- ECMAScript 2015 [WeakMaps](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) wurden als Prototyp-Implementierung hinzugefügt.

### SVG

- Das Attribut {{ SVGAttr("pathLength") }} wird jetzt unterstützt.
- SVG-Muster, -Verläufe und -Filter funktionieren nun korrekt, wenn sie aus [`data:`-URLs](/de/docs/Web/URI/Reference/Schemes/data) geladen werden.

### MathML

- Die Implementierung von {{ MathMLElement("mstyle") }} wurde korrigiert.

### Barrierefreiheit (ARIA)

- Bei Änderungen des Werts von `aria-busy` wird jetzt korrekt ein Zustandsänderungsereignis gesendet.
- Bei einem `aria-sort`-Vorgang wird jetzt korrekt ein Attributänderungsereignis gesendet.

### Netzwerken

- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : WebSockets wurde für Firefox 6 auf Protokollversion 07 aktualisiert. Zusätzlich wurde das globale `WebSocket`-Objekt in `MozWebSocket` umbenannt, um zu verhindern, dass es fälschlicherweise zur Erkennung der Verfügbarkeit von WebSockets ohne Präfix verwendet wird.

<!---->

- Das Parsen des `Content-Disposition`-Headers wurde behoben, um ASCII-Zeichen mit Backslash-Escaping korrekt nur als das jeweilige Zeichen selbst zu interpretieren. Zuvor wurde das Zeichen fälschlicherweise durch einen Unterstrich ("\_") ersetzt.
- Der Wert des Pfadfelds in `Set-Cookie`-Headern wird jetzt korrekt interpretiert, wenn Anführungszeichen verwendet werden; zuvor wurden diese als Teil des Pfad-Strings behandelt, anstatt als Delimiter. **Diese Änderung kann die Kompatibilität mit einigen Websites beeinflussen**, daher sollten Autoren ihren Code überprüfen.
- Der [`Upgrade`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.42)-Request-Header wird nun unterstützt; Sie können ein Upgrade eines HTTP-Channels auf ein anderes Protokoll anfordern, indem Sie `nsIHttpChannelInternal.HTTPUpgrade()` aufrufen.

### Andere Änderungen

- Die Unterstützung für Mikrozusammenfassungen wurde entfernt; diese wurden nie weit verbreitet genutzt, waren nicht leicht auffindbar, und ihre fortlaufende Unterstützung machte Verbesserungen der Places-Architektur (Lesezeichen und Verlauf) schwierig.
- WebGL unterstützt nun die [`OES_texture_float`](https://registry.khronos.org/OpenGL/extensions/OES/OES_texture_float.txt)-Erweiterung.
- Das neue Werkzeug _Scratchpad_ bietet einen praktischen Platz, um mit JavaScript-Code zu experimentieren.
- Die Methode `console.trace()` wurde zur [Console API](/de/docs/Web/API/Console_API) hinzugefügt ([Firefox-Bug 585956](https://bugzil.la/585956)).

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über die Änderungen, die Sie möglicherweise vornehmen müssen, um Ihr Add-on mit Firefox 6 kompatibel zu machen, siehe [Aktualisierung von Add-ons für Firefox 6](/de/docs/Mozilla/Firefox/Releases/6/Updating_add-ons).

> [!NOTE]
> Firefox 6 erfordert, dass binäre Komponenten neu kompiliert werden, wie es bei allen Hauptversionen von Firefox der Fall ist. Siehe [Binäre Schnittstellen](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Details.

### JavaScript-Code-Module

#### FileUtils.jsm

- Die Methode `openSafeFileOutputStream()` öffnet jetzt Dateien mit dem `DEFER_OPEN`-[VerhaltensFlag](/de/docs/XPCOM_Interface_Reference/nsIFileOutputStream#behavior_flag_constants) anstatt zu versuchen, sie sofort zu öffnen.

#### XPCOMUtils.jsm

- Die neue Methode `importRelative()` ermöglicht es Ihnen, ein JavaScript-Code-Modul von einem Pfad zu laden, der relativ zum Pfad eines anderen JavaScript-Code-Moduls ist. Dies erleichtert den Aufbau von Modulen, die voneinander abhängig sind.

### XPCOM

- [`nsCOMArray<T>`](/de/docs/XPCOM_array_guide#nsCOMArray.3cT.3e) hat nun eine [`RemoveObjectsAt()`](/de/docs/XPCOM_array_guide#deleting_objects)-Methode, um mehrere Objekte auf einmal aus dem Array zu entfernen.

### Verwendung des DOM aus dem Chrome

- [Verwendung der DOM-Datei-API im Chrome-Code](/de/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
  - : Obwohl Sie die DOM-Datei-API schon immer aus dem Chrome-Code verwenden konnten, unterstützt der [`File`](/de/docs/Web/API/File)-Konstruktor nun die Angabe eines lokalen Pfadnamens als String, wenn er aus dem Chrome verwendet wird. Zudem können Sie die Datei, auf die Sie zugreifen möchten, mithilfe der DOM-Datei-API unter Verwendung eines `nsIFile`-Objekts angeben.

### Schnittstellenänderungen

- `nsINavHistoryQueryOptions` unterstützt nun das Sortieren in Frequenzreihenfolge mit den neuen Konstanten `SORT_BY_FREQUENCY_ASCENDING` und `SORT_BY_FREQUENCY_DESCENDING`.
- `nsIFilePicker` hat ein neues Attribut `nsIFilePicker.addToRecentDocs`, mit dem Sie angeben können, dass die ausgewählte Datei zur Liste der "zuletzt verwendeten Dokumente" des Benutzers hinzugefügt werden soll, sofern vorhanden. Dieses Attribut hat keine Wirkung im privaten Modus.
- `nsINavBookmarkObserver`-Methoden mit Element ID-Parametern erfordern jetzt auch eine GUID.
- `nsIPrefBranch.clearUserPref()` löst keine Ausnahme mehr aus, wenn die angegebene Präferenz nicht existiert oder keinen benutzerdefinierten Wert hat. Stattdessen unternimmt er nichts.
- Die Schnittstelle `nsIMemoryReporter` bietet nun Unterstützung zur Angabe der Art des beschriebenen Speichers (gemappt, Heap oder sonstiges).
- Das Attribut `stateData` von `nsISHEntry` gibt jetzt ein `nsIStructuredCloneContainer` zurück.
- `nsIURI` hat ein neues Attribut `nsIURI.ref`, das den Referenzteil (den Teil nach dem "#") der URI zurückgibt. Es hat auch neue Methoden `nsIURI.cloneIgnoringRef()`, die das `nsIURI` ohne das ref-Mitglied klonen, und `nsIURI.equalsExceptRef()`, die ein anderes `nsIURI` außer dem ref-Mitglied vergleicht.

#### Neue Schnittstellen

- `mozIAsyncFavicons`
  - : Ein neuer Dienst, der Ihnen erlaubt, asynchron auf den Favicon-Dienst zuzugreifen.
- `nsIEventSource`
  - : _Details folgen._
- `nsIGSettingsCollection`
  - : _Details folgen._
- `nsIGSettingsService`
  - : _Details folgen._
- `nsIHttpUpgradeListener`
  - : Die Rückruf-Schnittstelle für die Behandlung von HTTP-Upgrade-Anfragen über die Methode `nsIHttpChannelInternal.HTTPUpgrade()`.
- `nsIStructuredCloneContainer`
  - : Ein Container für Objekte, die mithilfe des [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert wurden.
- `nsITelemetry`
  - : Implementiert die Telemetrieunterstützung, um die Aufzeichnung von Telemetriedaten zu ermöglichen, die zur Darstellung von Histogrammen zur Leistungsüberwachung verwendet werden. Siehe [Firefox-Bug 649502](https://bugzil.la/649502) und [Firefox-Bug 585196](https://bugzil.la/585196).
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

- [Verwendung von Präferenzen aus Anwendungs-Code](/de/docs/Mozilla/Preferences/Using_preferences_from_application_code)
  - : Eine neue statische API ist verfügbar, um leicht auf Präferenzen zuzugreifen; dies ist nur für Anwendungscode verfügbar und kann nicht von Add-ons verwendet werden.

## Siehe auch

{{Firefox_for_developers}}

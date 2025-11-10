---
title: Firefox 6 Versionshinweise für Entwickler
short-title: Firefox 6
slug: Mozilla/Firefox/Releases/6
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Firefox 6, basierend auf Gecko 6.0, wurde am 16. August 2011 veröffentlicht. Dieser Artikel enthält Links zu Informationen über Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Web-Entwickler

### HTML

- Das HTML5-Element {{ HTMLElement("progress") }}, mit dem Sie eine Fortschrittsanzeige erstellen können, wird nun unterstützt.
- Das Parsen des HTML5-Elements {{ HTMLElement("track") }}, das Texttracks für Medienelemente angibt, wird nun unterstützt. Dieses Element sollte jetzt im DOM erscheinen, obwohl sein Verhalten noch nicht implementiert ist.
- Das {{ HTMLElement("iframe") }}-Element wird nun korrekt von seinem Container abgeschnitten, wenn die Ecken des Containers mit der {{ cssxref("border-radius") }}-Eigenschaft abgerundet wurden.
- Die Text-Eingabefelder der {{ HTMLElement("form") }}-Elemente unterstützen nicht mehr die XUL-Eigenschaft [`maxwidth`](https://web.archive.org/web/20190117013205/https://developer.mozilla.org/de/docs/Mozilla/Tech/XUL/Property/maxWidth); dies war nie beabsichtigt und verstößt gegen die HTML-Spezifikation. Verwenden Sie stattdessen das Attribut [`size`](/de/docs/Web/HTML/Reference/Elements/input#size), um die maximale Breite der Eingabefelder festzulegen.
- Die Eigenschaften `fillStyle` und `strokeStyle` des {{ HTMLElement("canvas") }}-[`CanvasRenderingContext2d`](/de/docs/Web/API/CanvasRenderingContext2D) ignorierten früher Müll, der nach einer gültigen Farbdefinition hinzugefügt wurde; jetzt wird dies korrekt als Fehler behandelt. Zum Beispiel wurde "red blue" als Farbe früher als "red" behandelt, obwohl es hätte ignoriert werden sollen.
- Die Breite und Höhe von {{ HTMLElement("canvas") }}-Elementen kann nun korrekt auf 0px gesetzt werden; zuvor wurden diese willkürlich auf 300px gesetzt, wenn Sie versuchten, dies zu tun.
- Unterstützung für die HTML [benutzerdefinierten Datenattribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) (`data-*`) wurde hinzugefügt. Die DOM-Eigenschaft [`dataset`](/de/docs/Web/API/HTMLElement/dataset) ermöglicht den Zugriff auf sie.
- Wenn ein {{ HTMLElement("textarea") }}-Element den Fokus erhält, wird der Texteingabepunkt standardmäßig am Anfang des Textes platziert statt am Ende. Dadurch wird das Verhalten von Firefox mit anderen Browsern konsistent.

### CSS

- {{ cssxref("text-decoration-color", "-moz-text-decoration-color") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, die Farbe zu setzen, die von Textdekorationen wie Unterstreichungen, Überstreichungen und Durchstreichungen verwendet wird.
- {{ cssxref("text-decoration-line", "-moz-text-decoration-line") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, die Art von Textdekorationen festzulegen, die einem Element hinzugefügt werden.
- {{ cssxref("text-decoration-style", "-moz-text-decoration-style") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, den Stil der Textdekorationen festzulegen, wie Unterstreichungen, Überstreichungen und Durchstreichungen. Zu den Stilen gehören Einlinien-, Doppellinien-, Wellenlinien, gepunktete Linien und dergleichen.
- {{ cssxref("hyphens", "-moz-hyphens") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, zu steuern, wie die Silbentrennung von Wörtern während des Zeilenumbruchs gehandhabt wird.
- {{ cssxref("-moz-orient", "-moz-orient") }}
  - : Eine neue (derzeit Mozilla-spezifische) Eigenschaft, die es Ihnen ermöglicht, die vertikale oder horizontale Ausrichtung bestimmter Elemente (insbesondere {{ HTMLElement("progress") }}) zu steuern.
- {{ cssxref("::-moz-progress-bar") }}
  - : Ein Mozilla-spezifisches Pseudoelement, das es Ihnen ermöglicht, den Bereich eines {{ HTMLElement("progress") }}-Elements zu gestalten, der den abgeschlossenen Teil einer Aufgabe darstellt.

#### Andere Änderungen

- Die `@-moz-document`-Eigenschaft hat eine neue `regexp()`-Funktion, die es Ihnen ermöglicht, die URL des Dokuments mit einem [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) abzugleichen.
- Die `azimuth` CSS-Eigenschaft wird nicht mehr unterstützt, da wir den wenigen Code, den wir für die `aural` Mediengruppe hatten, entfernt haben. Es war nie signifikant implementiert, daher machte es mehr Sinn, die fehlerhafte Implementierung vorerst zu entfernen, anstatt zu versuchen, sie zu reparieren.
- In der Vergangenheit wurde die {{ cssxref(":hover") }}-Pseudoklasse nicht auf Klassenselektoren angewendet, wenn sich diese im Quirks-Modus befanden; zum Beispiel funktionierte `.some-class:hover` nicht. Diese Eigenart wurde entfernt.
- Die {{ cssxref(":indeterminate") }}-Pseudoklasse kann auf {{ HTMLElement("progress") }}-Elemente angewendet werden. Dies ist nicht standardisiert, aber wir hoffen, dass es von anderen Browsern übernommen wird, weil es nützlich sein wird.
- Der `-moz-win-exclude-glass`-Wert wurde zur `-moz-appearance`-CSS-Eigenschaft hinzugefügt, um opake Bereiche in Aero-Glass-Glasur-Effekten auf Windows-Systemen auszuschließen.
- [Firefox-Fehler 658949](https://bugzil.la/658949) änderte, wie das Rautezeichen (#) in Daten-URLs behandelt wird, was CSS-Stylesheets brechen kann, die ein solches Symbol enthalten, wenn es nicht maskiert ist.

### DOM

- [Verwenden von Media Queries aus dem Code heraus](/de/docs/Web/CSS/Guides/Media_queries/Testing)
  - : Sie können jetzt das Ergebnis einer Media-Query-Zeichenfolge programmgesteuert mit der Methode [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und der [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Schnittstelle testen.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Firefox 6 fügt Unterstützung für W3C-Standard-Touch-Ereignisse hinzu; diese erleichtern die Interpretation von einem oder mehreren Berührungen gleichzeitig auf berührungsempfindlichen Oberflächen wie Touchscreens und Trackpads.
- [Server-gesendete Ereignisse](/de/docs/Web/API/Server-sent_events)
  - : Server-gesendete Ereignisse machen es möglich, dass eine Webanwendung einen Server bittet, Ereignisse zu senden, ähnlich wie lokal erstellte DOM-Ereignisse.

<!---->

- `navigator.securityPolicy`, die seit langem eine leere Zeichenfolge zurückgegeben hat, wurde komplett entfernt.
- `BlobBuilder` ist jetzt implementiert, obwohl es derzeit noch mit einem Präfix versehen ist (sodass Sie `MozBlobBuilder` verwenden müssen).
- Die `Document.height` und `Document.width` wurden entfernt. [Firefox-Fehler 585877](https://bugzil.la/585877)
- Die Eigenschaften `entities` und `notations` des [`DocumentType`](/de/docs/Web/API/DocumentType)-Objekts, die nie implementiert wurden und immer `null` zurückgaben, wurden entfernt, da sie ohnehin aus der Spezifikation entfernt wurden.
- Die `DOMConfiguration`-Schnittstelle und die `document.domConfig`-Eigenschaft, die sie verwendete, wurden beide entfernt; sie wurden nie unterstützt und sind inzwischen aus der DOM-Spezifikation entfernt worden.
- Das `hashchange`-Ereignis enthält jetzt korrekt [die Felder `newURL` und `oldURL`](/de/docs/Web/API/Window/hashchange_event).
- Die `abort()`-Methode der [`FileReader`](/de/docs/Web/API/FileReader)-Schnittstelle wirft jetzt eine Ausnahme, wenn keine Dateilesung im Gange ist, wenn sie verwendet wird.
- Die Methode [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwendet nun [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), sodass Sie JavaScript-Objekte statt nur Zeichenfolgen von einem Fenster an ein anderes übergeben können.
- Die API [`window.history`](/de/docs/Web/API/Window/history) verwendet jetzt [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um die Objekte zu serialisieren, die Sie an die Methoden `pushState()` und `replaceState()` übergeben; das ermöglicht Ihnen, komplexere Objekte zu verwenden (einschließlich solcher, die zyklische Referenzgraphen enthalten).
- Sie können jetzt [erkennen, wann ein Druckvorgang gestartet und abgeschlossen wurde](/de/docs/Web/CSS/Guides/Media_queries/Printing#detecting_print_requests), indem Sie auf die neuen Ereignisse `beforeprint` und `afterprint` lauschen.
- Die Eigenschaft `document.strictErrorChecking` wurde entfernt, da sie nie implementiert und aus der DOM-Spezifikation entfernt wurde.
- Die standardmäßige Eigenschaft [`event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) wird jetzt unterstützt; Sie sollten diese anstelle der nicht standardmäßigen Methode `getPreventDefault()` verwenden, um zu erkennen, ob [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das Ereignis aufgerufen wurde.
- Die Eigenschaft [`window.top`](/de/docs/Web/API/Window/top) ist jetzt ordnungsgemäß schreibgeschützt.
- DOM-Ansichten, die wir nie dokumentiert haben, wurden entfernt. Dies war ein bisschen ein Implementierungsdetail, das unnötigerweise Dinge komplizierte, also haben wir es entfernt. Wenn Ihnen diese Änderung auffällt, machen Sie wahrscheinlich etwas falsch.
- Der `useCapture`-Parameter der Funktion `addEventListener()` des `EventTarget` ist jetzt optional, ebenso wie in WebKit (und entsprechend der neuesten Version der Spezifikation).
- Die Eigenschaft `mozResponseArrayBuffer` des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekts wurde durch die Eigenschaften `responseType` und `response` ersetzt.
- Die Eigenschaft [`dataset`](/de/docs/Web/API/HTMLElement/dataset) wurde zur Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) hinzugefügt, sodass Sie auf die [`data-*` globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) eines Elements zugreifen können.
- Die Schnittstelle [`CustomEvent`](/de/docs/Web/API/CustomEvent) wurde implementiert. (siehe [Firefox-Fehler 427537](https://bugzil.la/427537))
- Aus Sicherheitsgründen erben `data:`- und `javascript:`-URLs nicht mehr den Sicherheitskontext der aktuellen Seite, wenn der Benutzer sie in die Adressleiste eingibt; stattdessen wird ein neuer, leerer Sicherheitskontext erstellt. Das bedeutet, dass von `javascript:`-URLs, die in die Adressleiste eingegeben werden, geladene Skripte keinen Zugriff mehr auf DOM-Methoden usw. haben. Diese URLs funktionieren jedoch weiterhin wie zuvor, wenn sie von Skripten verwendet werden.

### JavaScript

- In der Vergangenheit war es möglich, den `new`-Operator auf mehrere eingebaute Funktionen (`eval()`, `parseInt()`, `Date.parse()`, ...) zu verwenden, die dies laut Spezifikation nicht hätten ermöglichen sollen. Dieses Verhalten wird nicht mehr unterstützt. Die Verwendung des `new`-Operators auf diese Weise wurde nie offiziell unterstützt und war nicht weit verbreitet, daher ist es unwahrscheinlich, dass diese Änderung Sie betrifft.
- ECMAScript 2015 [WeakMaps](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) wurden als Prototypimplementierung hinzugefügt.

### SVG

- Das Attribut {{ SVGAttr("pathLength") }} wird jetzt unterstützt.
- SVG-Muster, -Verläufe und -Filter funktionieren jetzt korrekt, wenn sie von [`data:` URLs](/de/docs/Web/URI/Reference/Schemes/data) geladen werden.

### MathML

- Die Implementierung von {{ MathMLElement("mstyle") }} wurde korrigiert.

### Barrierefreiheit (ARIA)

- Ein Zustandsänderungsereignis wird jetzt korrekt gesendet, wenn der Wert von `aria-busy` geändert wird.
- Ein Attributänderungsereignis wird jetzt korrekt gesendet, wenn `aria-sort` auftritt.

### Netzwerk

- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : WebSockets wurde für Firefox 6 auf Protokollversion 07 aktualisiert. Zusätzlich wurde das globale `WebSocket`-Objekt in `MozWebSocket` umbenannt, um zu verhindern, dass es fälschlicherweise zum Erkennen der Verfügbarkeit von unpräfixten WebSockets verwendet wird.

<!---->

- Das Parsen des `Content-Disposition`-Headers wurde behoben, um backslash-escaped ASCII-Zeichen als genau dieses Zeichen anzusehen. Zuvor wurde das Zeichen fälschlicherweise durch einen Unterstrich ("\_") ersetzt.
- Der Wert des Pfadfelds in `Set-Cookie`-Headers wird jetzt korrekt interpretiert, wenn Anführungszeichen verwendet werden; zuvor wurden diese als Teil des Pfadstrings betrachtet, anstatt als Trennzeichen. **Diese Änderung kann die Kompatibilität mit einigen Websites beeinflussen**, daher sollten Autoren ihren Code überprüfen.
- Der [`Upgrade`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.42)-Anforderungsheader wird jetzt unterstützt; Sie können ein Upgrade eines HTTP-Kanals zu einem anderen Protokoll anfordern, indem Sie `nsIHttpChannelInternal.HTTPUpgrade()` aufrufen.

### Andere Änderungen

- Die Unterstützung für Mikrosummen wurde entfernt; diese wurden nie weit verbreitet verwendet, waren nicht sehr auffindbar und die fortgesetzte Unterstützung machte Verbesserungen an der Places-Architektur (Lesezeichen und Verlauf) schwierig.
- WebGL unterstützt jetzt die [`OES_texture_float`](https://registry.khronos.org/OpenGL/extensions/OES/OES_texture_float.txt)-Erweiterung.
- Das neue Werkzeug _Scratchpad_ bietet eine praktische Möglichkeit, mit JavaScript-Code zu experimentieren.
- Die Methode `console.trace()` wurde zur [Console API](/de/docs/Web/API/Console_API) hinzugefügt ([Firefox-Fehler 585956](https://bugzil.la/585956)).

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über die Änderungen, die Sie möglicherweise vornehmen müssen, um Ihr Add-on mit Firefox 6 kompatibel zu machen, siehe [Aktualisieren von Add-ons für Firefox 6](/de/docs/Mozilla/Firefox/Releases/6/Updating_add-ons).

> [!NOTE]
> Firefox 6 erfordert, dass Binärkomponenten neu kompiliert werden, wie dies bei allen Hauptversionen von Firefox der Fall ist. Siehe [Binary Interfaces](https://web.archive.org/web/20210119071646/https://developer.mozilla.org/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Einzelheiten.

### JavaScript-Code-Module

#### FileUtils.jsm

- Die Methode `openSafeFileOutputStream()` öffnet nun Dateien mit dem `DEFER_OPEN` [Verhaltensflagg](https://web.archive.org/web/20210506072901/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFileOutputStream#behavior_flag_constants) anstatt zu versuchen, sie sofort zu öffnen.

#### XPCOMUtils.jsm

- Die neue Methode `importRelative()` ermöglicht das Laden eines JavaScript-Code-Moduls von einem Pfad relativ zu dem eines anderen JavaScript-Code-Moduls. Dies erleichtert den Aufbau von Modulen, die voneinander abhängig sind.

### XPCOM

- [`nsCOMArray<T>`](https://web.archive.org/web/20210413085248/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Guide/Arrays#nsCOMArray.3cT.3e) verfügt jetzt über eine [`RemoveObjectsAt()`](https://web.archive.org/web/20210413085248/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Guide/Arrays#deleting_objects)-Methode zum Entfernen mehrerer Objekte gleichzeitig aus dem Array.

### Verwendung des DOM aus Chrome

- [Verwendung der DOM File API in Chrome-Code](https://web.archive.org/web/20210618235235/https://developer.mozilla.org/de/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
  - : Obwohl Sie die DOM File API immer aus Chrome-Code verwenden konnten, unterstützt der [`File`](/de/docs/Web/API/File)-Konstruktor jetzt die Angabe eines lokalen Pfadnamen-Strings, wenn er aus Chrome verwendet wird. Außerdem können Sie die Datei, auf die Sie zugreifen möchten, mit der DOM File API über ein `nsIFile`-Objekt angeben.

### Schnittstellenänderungen

- `nsINavHistoryQueryOptions` unterstützt jetzt die Sortierung in Häufigkeitsreihenfolge mit den neuen Konstanten `SORT_BY_FREQUENCY_ASCENDING` und `SORT_BY_FREQUENCY_DESCENDING`.
- `nsIFilePicker` hat ein neues Attribut `nsIFilePicker.addToRecentDocs`, das es Ihnen ermöglicht anzugeben, dass die ausgewählte Datei in die Liste der "zuletzt verwendeten Dokumente" des Benutzers aufgenommen werden soll, sofern vorhanden. Dieses Attribut hat keinen Effekt, wenn der private Browsing-Modus aktiv ist.
- Methoden von `nsINavBookmarkObserver` mit Item-ID-Parametern erfordern jetzt auch eine GUID.
- `nsIPrefBranch.clearUserPref()` löst keine Ausnahme mehr aus, wenn die angegebene Einstellung nicht existiert oder keinen benutzerspezifischen Wert hat. Stattdessen wird nichts unternommen.
- Die `nsIMemoryReporter`-Schnittstelle bietet jetzt Unterstützung dafür, die Art des beschriebenen Speichers anzugeben (zugeordnet, Heap oder anderes).
- Das Attribut `stateData` von `nsISHEntry` gibt jetzt einen `nsIStructuredCloneContainer` zurück.
- `nsIURI` hat ein neues Attribut `nsIURI.ref`, das den Referenzanteil (den Teil nach dem "#") der URI zurückgibt. Es gibt auch neue Methoden `nsIURI.cloneIgnoringRef()`, die die `nsIURI` ohne das `ref`-Mitglied klonen, und `nsIURI.equalsExceptRef()`, die mit einer anderen `nsIURI` vergleicht, wobei das `ref`-Mitglied ignoriert wird.

#### Neue Schnittstellen

- `mozIAsyncFavicons`
  - : Ein neuer Dienst, der es Ihnen ermöglicht, auf den Favicon-Dienst asynchron zuzugreifen.
- `nsIEventSource`
  - : _Details folgen._
- `nsIGSettingsCollection`
  - : _Details folgen._
- `nsIGSettingsService`
  - : _Details folgen._
- `nsIHttpUpgradeListener`
  - : Die Callback-Schnittstelle für die Behandlung von HTTP-Upgrade-Anfragen über die Methode `nsIHttpChannelInternal.HTTPUpgrade()`.
- `nsIStructuredCloneContainer`
  - : Ein Container für Objekte, die mit dem [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert wurden.
- `nsITelemetry`
  - : Implementiert Telemetrieunterstützung, um das Erfassen von Telemetriedaten zu ermöglichen, die zur Darstellung von Histogrammen für Leistungsüberwachungszwecke verwendet werden. Siehe [Firefox-Fehler 649502](https://bugzil.la/649502) und [Firefox-Fehler 585196](https://bugzil.la/585196).
- `nsITimedChannel`
  - : Siehe [Firefox-Fehler 576006](https://bugzil.la/576006).
- `nsIWebSocketListener`
  - : Siehe [Firefox-Fehler 640003](https://bugzil.la/640003).
- `nsIWebSocketProtocol`
  - : Siehe [Firefox-Fehler 640003](https://bugzil.la/640003).

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsIDOMDocumentEvent` (siehe [Firefox-Fehler 655517](https://bugzil.la/655517))
- `nsIDOMDocumentTraversal` (siehe [Firefox-Fehler 655514](https://bugzil.la/655514))
- `nsIDOMDocumentRange` (siehe [Firefox-Fehler 655513](https://bugzil.la/655513))
- `IWeaveCrypto` (siehe [Firefox-Fehler 651596](https://bugzil.la/651596))
- `nsIDOM3DocumentEvent` (siehe [Firefox-Fehler 481863](https://bugzil.la/481863))
- `nsIDOMAbstractView`
- `nsILiveTitleNotificationSubject`
- `nsIPlugin` (siehe [Firefox-Fehler 637253](https://bugzil.la/637253))
- `nsIPluginInstance` (siehe [Firefox-Fehler 637253](https://bugzil.la/637253))
- `nsIHTMLEditRules` (siehe [Firefox-Fehler 633750](https://bugzil.la/633750))
- `nsIXSLTProcessorObsolete` (siehe [Firefox-Fehler 649534](https://bugzil.la/649534))

### Andere Änderungen

- [Verwendung von Einstellungen aus Anwendungscode](https://web.archive.org/web/20210419233418/https://developer.mozilla.org/de/docs/Mozilla/Preferences/Using_preferences_from_application_code)
  - : Eine neue statische API steht zur Verfügung, um einfach auf Einstellungen zuzugreifen; dies ist nur für Anwendungscode verfügbar und kann nicht von Add-ons verwendet werden.

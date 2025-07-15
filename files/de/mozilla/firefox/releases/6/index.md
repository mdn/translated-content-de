---
title: Firefox 6 für Entwickler
short-title: Firefox 6
slug: Mozilla/Firefox/Releases/6
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 6, basierend auf Gecko 6.0, wurde am 16. August 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Das HTML5-Element {{ HTMLElement("progress") }}, mit dem Sie eine Fortschrittsanzeige erstellen können, wird jetzt unterstützt.
- Die Analyse des HTML5-Elements {{ HTMLElement("track") }}, das Texte für Medienelemente angibt, wird jetzt unterstützt. Dieses Element sollte jetzt im DOM erscheinen, obwohl sein Verhalten noch nicht implementiert ist.
- Das {{ HTMLElement("iframe") }}-Element wird jetzt korrekt von seinem Container abgeschnitten, wenn die Ecken des Containers mit der Eigenschaft {{ cssxref("border-radius") }} abgerundet wurden.
- Text-Eingabefelder von {{ HTMLElement("form") }}-Elementen unterstützen nicht mehr die XUL-Eigenschaft [`maxwidth`](/de/docs/XUL/Property/maxwidth); dies war nie beabsichtigt und verstößt gegen die HTML-Spezifikation. Sie sollten stattdessen das Attribut [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) verwenden, um die maximale Breite der Eingabefelder festzulegen.
- Die Eigenschaften `fillStyle` und `strokeStyle` des {{ HTMLElement("canvas") }} [`CanvasRenderingContext2d`](/de/docs/Web/API/CanvasRenderingContext2D) haben zuvor unbeachteten Müll nach einer gültigen Farbdefinition ignoriert; jetzt wird dies korrekt als Fehler behandelt. Zum Beispiel wurde "red blue" als Farbe früher als "red" behandelt, während es hätte ignoriert werden sollen.
- Die Breite und Höhe von {{ HTMLElement("canvas") }}-Elementen kann jetzt korrekt auf 0px gesetzt werden; zuvor wurden diese willkürlich auf 300px gesetzt, wenn Sie dies versucht haben.
- Unterstützung für die HTML [benutzerdefinierten Datenattribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) (`data-*`) wurde hinzugefügt. Die DOM-Eigenschaft [`dataset`](/de/docs/Web/API/HTMLElement/dataset) ermöglicht den Zugriff darauf.
- Wenn ein {{ HTMLElement("textarea") }}-Element den Fokus erhält, wird der Texteingabepunkt standardmäßig am Anfang des Textes und nicht am Ende platziert. Dies macht das Verhalten von Firefox konsistent mit anderen Browsern.

### CSS

- {{ cssxref("text-decoration-color", "-moz-text-decoration-color") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, die Farbe von Textverzierungen wie Unterstrichen, Oberstrichen und Durchstreichungen festzulegen.
- {{ cssxref("text-decoration-line", "-moz-text-decoration-line") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, die Art der zu einem Element hinzugefügten Textverzierungen festzulegen.
- {{ cssxref("text-decoration-style", "-moz-text-decoration-style") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, den Stil von Textverzierungen wie Unterstrichen, Oberstrichen und Durchstreichungen festzulegen. Stile umfassen Einfachstriche, Doppelstriche, gewellte Linien, gepunktete Linien usw.
- {{ cssxref("hyphens", "-moz-hyphens") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen zu steuern, wie die Trennung von Wörtern während des Zeilenumbruchs gehandhabt wird.
- {{ cssxref("-moz-orient", "-moz-orient") }}
  - : Eine neue (derzeit Mozilla-spezifische) Eigenschaft, die es Ihnen ermöglicht, die vertikale oder horizontale Ausrichtung bestimmter Elemente zu steuern (insbesondere {{ HTMLElement("progress") }}).
- {{ cssxref("::-moz-progress-bar") }}
  - : Ein Mozilla-spezifisches Pseudoelement, das es Ihnen ermöglicht, den Bereich eines {{ HTMLElement("progress") }}-Elements zu stylen, der den abgeschlossenen Teil einer Aufgabe repräsentiert.

#### Weitere Änderungen

- Die `@-moz-document`-Eigenschaft hat eine neue `regexp()`-Funktion, mit der Sie die URL des Dokuments mit einem [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) abgleichen können.
- Die CSS-Eigenschaft `azimuth` wird nicht mehr unterstützt, da wir den wenigen Code entfernt haben, den wir für die `aural` Mediengruppe hatten. Es war nie wesentlich implementiert, daher war es sinnvoller, die veraltete Implementierung vorerst zu entfernen, anstatt sie zu überarbeiten.
- In der Vergangenheit wurde die {{ cssxref(":hover") }}-Pseudoklasse nicht auf Klassenselektoren angewendet, wenn der Quirks-Modus aktiv war; beispielsweise funktionierte `.some-class:hover` nicht. Diese Besonderheit wurde entfernt.
- Die {{ cssxref(":indeterminate") }}-Pseudoklasse kann auf {{ HTMLElement("progress") }}-Elemente angewendet werden. Dies ist nicht standardisiert, aber wir hoffen, dass es von anderen Browsern übernommen wird, da es nützlich sein wird.
- Der Wert `-moz-win-exclude-glass` wurde der CSS-Eigenschaft `-moz-appearance` hinzugefügt, um opake Regionen bei Aero Glass-Effekten auf Windows-Systemen auszuschließen.
- [Firefox Bug 658949](https://bugzil.la/658949) hat die Behandlung des Hash-Symbols (#) in Daten-URLs geändert, was CSS-Stylesheets, die ein solches Symbol enthalten, brechen kann, wenn es nicht entkommen ist.

### DOM

- [Verwenden von Media-Queries im Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
  - : Sie können jetzt das Ergebnis einer Media-Query-Zeichenfolge programmgesteuert mit der Methode [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und der Schnittstelle [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) testen.
- [Touch-Events](/de/docs/Web/API/Touch_events)
  - : Firefox 6 unterstützt die W3C-Standard-Touch-Events; diese erleichtern die Interpretation von einem oder mehreren Berührungen gleichzeitig auf berührungsempfindlichen Oberflächen wie Touchscreens und Trackpads.
- [Server-sent Events](/de/docs/Web/API/Server-sent_events)
  - : Mit Server-sent Events kann eine Webanwendung den Server bitten, Events zu senden, ebenso wie jedes lokal erstellte DOM-Event.

<!---->

- `navigator.securityPolicy`, das seit langer Zeit einen leeren String zurückgab, wurde vollständig entfernt.
- `BlobBuilder` ist jetzt implementiert, auch wenn es vorerst mit Präfix versehen ist (Sie müssen `MozBlobBuilder` verwenden).
- Die `Document.height` und `Document.width` wurden entfernt. [Firefox Bug 585877](https://bugzil.la/585877)
- Die `entities`- und `notations`-Eigenschaften des [`DocumentType`](/de/docs/Web/API/DocumentType)-Objekts, die nie implementiert wurden und immer `null` zurückgaben, wurden entfernt, da sie auch aus der Spezifikation entfernt wurden.
- Die `DOMConfiguration`-Schnittstelle und die `document.domConfig`-Eigenschaft, die diese verwendete, wurden beide entfernt; sie wurden nie unterstützt und sind seitdem aus der DOM-Spezifikation entfernt worden.
- Das `hashchange`-Event enthält jetzt korrekt [die `newURL`- und `oldURL`-Felder](/de/docs/Web/API/Window/hashchange_event).
- Die `abort()`-Methode der [`FileReader`](/de/docs/Web/API/FileReader)-Schnittstelle wirft jetzt eine Ausnahme, wenn sie verwendet wird, wenn kein Filenachricht im Gange ist.
- Die Methode [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwendet jetzt [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um Ihnen das Übertragen von JavaScript-Objekten anstelle von nur Strings von einem Fenster zu einem anderen zu ermöglichen.
- Die API [`window.history`](/de/docs/Web/API/Window/history) verwendet jetzt [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um die Objekte, die Sie an die Methoden `pushState()` und `replaceState()` übergeben, zu serialisieren; dies erlaubt Ihnen, komplexere Objekte zu verwenden (einschließlich solcher, die zyklische Referenzgraphen enthalten).
- Sie können jetzt [erkennen, wann ein Druckvorgang initiiert und abgeschlossen wurde](/de/docs/Web/CSS/CSS_media_queries/Printing#detecting_print_requests), indem Sie auf die neuen `beforeprint`- und `afterprint`-Events hören.
- Die Eigenschaft `document.strictErrorChecking` wurde entfernt, da sie nie implementiert wurde und aus der DOM-Spezifikation entfernt wurde.
- Die standardmäßige [`event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented)-Eigenschaft wird jetzt unterstützt; Sie sollten diese verwenden, anstelle der nicht-standardisierten Methode `getPreventDefault()`, um festzustellen, ob [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das Ereignis angewendet wurde.
- Die Eigenschaft [`window.top`](/de/docs/Web/API/Window/top) ist jetzt ordnungsgemäß schreibgeschützt.
- DOM-Ansichten, die wir nie dokumentiert haben, wurden entfernt. Dies war ein Detail der Implementierung, das die Dinge unnötig komplizierte, also haben wir es entfernt. Wenn Sie diese Änderung bemerken, machen Sie wahrscheinlich etwas falsch.
- Die `EventTarget`-Funktion [`addEventListener()`](/de/docs/XPCOM_Interface_Reference/nsIDOMEventTarget) hat jetzt einen optionalen `useCapture`-Parameter, wie es in WebKit der Fall ist (und gemäß der neuesten Version der Spezifikation).
- Die Eigenschaft `mozResponseArrayBuffer` des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekts wurde durch die Eigenschaften `responseType` und `response` ersetzt.
- Die [`dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft wurde zur [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle hinzugefügt, was den Zugriff auf die [globalen `data-*` Attribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) eines Elements ermöglicht.
- Die [`CustomEvent`](/de/docs/Web/API/CustomEvent)-Schnittstelle wurde implementiert. (siehe [Firefox Bug 427537](https://bugzil.la/427537))
- Aus Sicherheitsgründen erben `data:`- und `javascript:`-URLs nicht länger den Sicherheitskontext der aktuellen Seite, wenn der Benutzer sie in der Adressleiste eingibt; stattdessen wird ein neuer, leerer Sicherheitskontext erstellt. Dies bedeutet, dass das Skript, das durch Eingabe von `javascript:`-URLs in der Adressleiste geladen wird, keinen Zugriff mehr auf DOM-Methoden und dergleichen hat. Diese URLs funktionieren jedoch weiterhin wie zuvor, wenn Sie durch Skripte verwendet werden.

### JavaScript

- In der Vergangenheit war es möglich, den `new`-Operator bei mehreren eingebauten Funktionen (`eval()`, `parseInt()`, `Date.parse()`, …) zu verwenden, die dies laut Spezifikation nicht hätten erlauben sollen. Dieses Verhalten wird nicht mehr unterstützt. Die Verwendung des `new`-Operators auf diese Weise wurde nie offiziell unterstützt und war nicht weit verbreitet, daher ist es unwahrscheinlich, dass diese Änderung Sie betrifft.
- ECMAScript 2015 [WeakMaps](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) wurden als Prototyp-Implementierung hinzugefügt.

### SVG

- Das Attribut {{ SVGAttr("pathLength") }} wird jetzt unterstützt.
- SVG-Muster, -Verläufe und -Filter funktionieren jetzt korrekt, wenn sie von [`data:`-URLs](/de/docs/Web/URI/Reference/Schemes/data) geladen werden.

### MathML

- Die Implementierung von {{ MathMLElement("mstyle") }} wurde korrigiert.

### Barrierefreiheit (ARIA)

- Ein Zustandsänderungsereignis wird jetzt korrekt gesendet, wenn sich der Wert von `aria-busy` ändert.
- Ein Attributänderungsereignis wird jetzt korrekt gesendet, wenn `aria-sort` auftritt.

### Netzwerk

- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : WebSockets wurde für Firefox 6 auf Protokollversion 07 aktualisiert. Zusätzlich wurde das globale `WebSocket`-Objekt in `MozWebSocket` umbenannt, um zu verhindern, dass es fälschlicherweise zur Erkennung von unpräfigierten WebSockets verwendet wird.

<!---->

- Die Analyse des `Content-Disposition`-Headers wurde korrigiert, um ASCII-Zeichen, die mit einem Backslash entkommen sind, korrekt als genau dieses Zeichen zu interpretieren. Zuvor wurde dieses Zeichen fälschlicherweise durch einen Unterstrich ("\_") ersetzt.
- Der Wert des Pfadfeldes bei `Set-Cookie`-Headers wird jetzt korrekt interpretiert, wenn Anführungszeichen verwendet werden; zuvor wurden sie als Teil der Pfadzeichenfolge behandelt, anstatt als Trennzeichen. **Diese Änderung kann die Kompatibilität mit einigen Websites beeinträchtigen**, daher sollten Autoren ihren Code überprüfen.
- Der [`Upgrade`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.42)-Anforderungsheader wird jetzt unterstützt; Sie können ein Upgrade eines HTTP-Kanals auf ein anderes Protokoll anfordern, indem Sie `nsIHttpChannelInternal.HTTPUpgrade()` aufrufen.

### Weitere Änderungen

- Die Unterstützung für Mikrosummen wurde entfernt; diese wurden nie weit verbreitet genutzt, waren nicht sehr auffindbar, und die Unterstützung machte Verbesserungen für die Places (Lesezeichen- und Verlauf) Architektur schwierig.
- WebGL unterstützt jetzt die [`OES_texture_float`](https://registry.khronos.org/OpenGL/extensions/OES/OES_texture_float.txt) Erweiterung.
- Das neue _Scratchpad_-Tool bietet einen praktischen Ort, um mit JavaScript-Code zu experimentieren.
- Die Methode `console.trace()` wurde zur [Console API](/de/docs/Web/API/Console_API) hinzugefügt ([Firefox Bug 585956](https://bugzil.la/585956)).

## Änderungen für Mozilla- und Erweiterungsentwickler

Für einen Überblick über die Änderungen, die Sie möglicherweise vornehmen müssen, um Ihre Erweiterung kompatibel mit Firefox 6 zu machen, siehe [Aktualisieren von Add-Ons für Firefox 6](/de/docs/Mozilla/Firefox/Releases/6/Updating_add-ons).

> [!NOTE]
> Firefox 6 erfordert, dass binäre Komponenten neu kompiliert werden, ebenso wie alle Hauptversionen von Firefox. Siehe [Binary Interfaces](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Details.

### JavaScript-Code-Module

#### FileUtils.jsm

- Die Methode `openSafeFileOutputStream()` öffnet Dateien jetzt mit dem `DEFER_OPEN` [Verhaltensflag](/de/docs/XPCOM_Interface_Reference/nsIFileOutputStream#behavior_flag_constants) anstelle des sofortigen Öffnens.

#### XPCOMUtils.jsm

- Die neue Methode `importRelative()` ermöglicht das Laden eines JavaScript-Code-Moduls aus einem Pfad relativ zu dem Pfad eines anderen JavaScript-Code-Moduls. Dies erleichtert den Aufbau von Modulen, die voneinander abhängen.

### XPCOM

- [`nsCOMArray<T>`](/de/docs/XPCOM_array_guide#nsCOMArray.3cT.3e) hat jetzt eine [`RemoveObjectsAt()`](/de/docs/XPCOM_array_guide#deleting_objects) Methode zum Entfernen mehrerer Objekte auf einmal aus dem Array.

### Verwendung des DOM von Chrome

- [Verwendung der DOM File API im Chrome-Code](/de/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
  - : Obwohl Sie die DOM File API schon immer vom Chrome-Code aus verwenden konnten, unterstützt der [`File`](/de/docs/Web/API/File)-Konstruktor jetzt die Angabe eines lokalen Pfadnamen-Strings, wenn er von Chrome aus verwendet wird. Zusätzlich können Sie auch die Datei, auf die Sie mit der DOM File API zugreifen möchten, mit einem `nsIFile`-Objekt angeben.

### Schnittstellenänderungen

- `nsINavHistoryQueryOptions` unterstützt jetzt das Sortieren in Frequenzreihenfolge mit den neuen Konstanten `SORT_BY_FREQUENCY_ASCENDING` und `SORT_BY_FREQUENCY_DESCENDING`.
- `nsIFilePicker` hat ein neues `nsIFilePicker.addToRecentDocs`-Attribut, das Ihnen angibt, dass die ausgewählte Datei der Liste der "zuletzt verwendeten Dokumente" des Benutzers hinzugefügt werden soll, sofern vorhanden. Dieses Attribut hat keine Wirkung im privaten Browsing-Modus.
- Methoden von `nsINavBookmarkObserver` mit Element-ID-Parametern erfordern jetzt auch eine GUID.
- `nsIPrefBranch.clearUserPref()` wirft keine Ausnahme mehr, wenn die angegebene Voreinstellung nicht existiert oder keinen benutzerdefinierten Wert hat. Stattdessen tut es nichts.
- Die `nsIMemoryReporter`-Schnittstelle bietet jetzt Unterstützung für die Angabe der Art des beschriebenen Speichers (gemappt, Heap oder andere).
- Das `stateData`-Attribut von `nsISHEntry` gibt jetzt ein `nsIStructuredCloneContainer` zurück.
- `nsIURI` hat ein neues `nsIURI.ref`-Attribut, das den Referenzteil (den Teil nach dem "#") der URI zurückgibt. Es hat auch neue Methoden `nsIURI.cloneIgnoringRef()`, die die `nsIURI` ohne das `ref`-Mitglied klonen und `nsIURI.equalsExceptRef()`, die mit einer anderen `nsIURI` vergleicht, das `ref`-Mitglied ignorierend.

#### Neue Schnittstellen

- `mozIAsyncFavicons`
  - : Ein neuer Dienst, der Ihnen asynchronen Zugriff auf den Favicon-Dienst bietet.
- `nsIEventSource`
  - : _Details werden folgen._
- `nsIGSettingsCollection`
  - : _Details werden folgen._
- `nsIGSettingsService`
  - : _Details werden folgen._
- `nsIHttpUpgradeListener`
  - : Die Rückrufschnittstelle zum Handling von HTTP-Upgraderequests über die Methode `nsIHttpChannelInternal.HTTPUpgrade()`.
- `nsIStructuredCloneContainer`
  - : Ein Container für Objekte, die mit dem [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert wurden.
- `nsITelemetry`
  - : Implementiert Telemetrieunterstützung zur Aufzeichnung von Telemetriedaten, um Histogramme für die Leistungserfassung zu präsentieren. Siehe [Firefox Bug 649502](https://bugzil.la/649502) und [Firefox Bug 585196](https://bugzil.la/585196).
- `nsITimedChannel`
  - : Siehe [Firefox Bug 576006](https://bugzil.la/576006).
- `nsIWebSocketListener`
  - : Siehe [Firefox Bug 640003](https://bugzil.la/640003).
- `nsIWebSocketProtocol`
  - : Siehe [Firefox Bug 640003](https://bugzil.la/640003).

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsIDOMDocumentEvent` (siehe [Firefox Bug 655517](https://bugzil.la/655517))
- `nsIDOMDocumentTraversal` (siehe [Firefox Bug 655514](https://bugzil.la/655514))
- `nsIDOMDocumentRange` (siehe [Firefox Bug 655513](https://bugzil.la/655513))
- `IWeaveCrypto` (siehe [Firefox Bug 651596](https://bugzil.la/651596))
- `nsIDOM3DocumentEvent` (siehe [Firefox Bug 481863](https://bugzil.la/481863))
- `nsIDOMAbstractView`
- `nsILiveTitleNotificationSubject`
- `nsIPlugin` (siehe [Firefox Bug 637253](https://bugzil.la/637253))
- `nsIPluginInstance` (siehe [Firefox Bug 637253](https://bugzil.la/637253))
- `nsIHTMLEditRules` (siehe [Firefox Bug 633750](https://bugzil.la/633750))
- `nsIXSLTProcessorObsolete` (siehe [Firefox Bug 649534](https://bugzil.la/649534))

### Weitere Änderungen

- [Verwendung von Voreinstellungen aus Anwendungs-Code](/de/docs/Mozilla/Preferences/Using_preferences_from_application_code)
  - : Eine neue statische API steht zur Verfügung, um Voreinstellungen einfach abzurufen; dies ist nur für Anwendungs-Code verfügbar und kann nicht von Erweiterungen verwendet werden.

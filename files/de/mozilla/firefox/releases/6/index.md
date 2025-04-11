---
title: Firefox 6 für Entwickler
slug: Mozilla/Firefox/Releases/6
l10n:
  sourceCommit: 960a94a198ca60fb04fe63857ea61d7306465791
---

{{FirefoxSidebar}}

Firefox 6, basierend auf Gecko 6.0, wurde am 16. August 2011 veröffentlicht. Dieser Artikel enthält Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Das HTML5-Element {{ HTMLElement("progress") }}, das Ihnen ermöglicht, eine Fortschrittsanzeige zu erstellen, wird nun unterstützt.
- Das Parsen des HTML5-Elements {{ HTMLElement("track") }}, das Textspuren für Media-Elemente spezifiziert, wird nun unterstützt. Dieses Element sollte jetzt im DOM erscheinen, obwohl sein Verhalten noch nicht implementiert ist.
- Das Element {{ HTMLElement("iframe") }} wird nun korrekt von seinem Container abgeschnitten, wenn die Ecken des Containers mit der Eigenschaft {{ cssxref("border-radius") }} abgerundet wurden.
- Texteingabefelder von {{ HTMLElement("form") }}-Elementen unterstützen nicht mehr die XUL [`maxwidth`](/de/docs/XUL/Property/maxwidth)-Eigenschaft; dies war nie beabsichtigt und verstößt gegen die HTML-Spezifikation. Stattdessen sollten Sie das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut verwenden, um die maximale Breite von Eingabefeldern festzulegen.
- Die Eigenschaften `fillStyle` und `strokeStyle` des {{ HTMLElement("canvas") }} [`CanvasRenderingContext2d`](/de/docs/Web/API/CanvasRenderingContext2D) ignorierten früher Datenmüll, der nach einer gültigen Farbangabe eingefügt wurde; jetzt wird dies korrekt als Fehler behandelt. Zum Beispiel wurde "red blue" früher als Farbe als "red" behandelt, obwohl es ignoriert werden sollte.
- Die Breite und Höhe von {{ HTMLElement("canvas") }}-Elementen kann nun korrekt auf 0px gesetzt werden; zuvor wurden sie willkürlich auf 300px gesetzt, wenn Sie versuchten, das zu tun.
- Unterstützung für die HTML-[benutzerdefinierten Datenattribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) (`data-*`) wurde hinzugefügt. Die DOM-Eigenschaft [`dataset`](/de/docs/Web/API/HTMLElement/dataset) erlaubt den Zugriff auf sie.
- Wenn ein {{ HTMLElement("textarea") }}-Element den Fokus erhält, wird der Texteingabepunkt nun standardmäßig zu Beginn des Textes platziert, anstatt am Ende. Dies macht das Verhalten von Firefox mit anderen Browsern konsistent.

### CSS

- {{ cssxref("text-decoration-color", "-moz-text-decoration-color") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, die Farbe zu setzen, die von Textdekorationen wie Unterstreichungen, Überstreichungen und Durchstreichungen verwendet wird.
- {{ cssxref("text-decoration-line", "-moz-text-decoration-line") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, die Art der Textdekorationen festzulegen, die zu einem Element hinzugefügt werden.
- {{ cssxref("text-decoration-style", "-moz-text-decoration-style") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, den Stil von Textdekorationen festzulegen, wie z.B. Unterstreichungen, Überstreichungen und Durchstreichungen. Stile umfassen Einzelstriche, Doppelstriche, wellenförmige Linien, punktierte Linien usw.
- {{ cssxref("hyphens", "-moz-hyphens") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, zu kontrollieren, wie die Silbentrennung von Wörtern bei der Zeilenumbruchbehandlung gehandhabt wird.
- {{ cssxref("-moz-orient", "-moz-orient") }}
  - : Eine neue (derzeit Mozilla-spezifische) Eigenschaft, die es Ihnen ermöglicht, die vertikale oder horizontale Ausrichtung bestimmter Elemente (insbesondere {{ HTMLElement("progress") }}) zu steuern.
- {{ cssxref("::-moz-progress-bar") }}
  - : Ein Mozilla-spezifisches Pseudoelement, das es Ihnen ermöglicht, den Bereich eines {{ HTMLElement("progress") }}-Elements zu gestalten, der den abgeschlossenen Teil einer Aufgabe darstellt.

#### Andere Änderungen

- Die `@-moz-document`-Eigenschaft hat eine neue `regexp()`-Funktion, die es Ihnen ermöglicht, die URL des Dokuments mit einem [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) abzugleichen.
- Die CSS-Eigenschaft `azimuth` wird nicht mehr unterstützt, da wir den wenigen Code entfernt haben, den wir für die `aural` Media-Gruppe hatten. Sie war nie signifikant implementiert, daher machte es mehr Sinn, die unübersichtliche Implementierung vorerst zu entfernen, anstatt zu versuchen, sie zu verbessern.
- In der Vergangenheit wurde die {{ cssxref(":hover") }}-Pseudoklasse in Quirks-Modus nicht auf Klassenselektoren angewendet; zum Beispiel funktionierte `.some-class:hover` nicht. Diese Besonderheit wurde entfernt.
- Die {{ cssxref(":indeterminate") }}-Pseudoklasse kann auf {{ HTMLElement("progress") }}-Elemente angewendet werden. Dies ist nicht standardmäßig, aber wir hoffen, dass es von anderen Browsern übernommen wird, da es nützlich sein wird.
- Der `-moz-win-exclude-glass`-Wert wurde zur CSS-Eigenschaft `-moz-appearance` hinzugefügt, um undurchsichtige Bereiche in Aero-Glas-Effekten auf Windows-Systemen auszuschließen.
- [Firefox-Bug 658949](https://bugzil.la/658949) hat geändert, wie das Hash (#) Symbol in Daten-URLs behandelt wird, was möglicherweise CSS-Stylesheets beschädigt, die ein solches Symbol enthalten, wenn es nicht entkommen ist.

### DOM

- [Verwenden von Media-Queries aus dem Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
  - : Sie können nun das Ergebnis einer Media-Query-Zeichenfolge programmgesteuert mit der Methode [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und der Schnittstelle [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) testen.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Firefox 6 fügt Unterstützung für die W3C-Standards für Touch-Ereignisse hinzu; diese machen es einfach, eine oder mehrere Berührungen gleichzeitig auf berührungsempfindlichen Oberflächen wie Touchscreens und Trackpads zu interpretieren.
- [Server-sent events](/de/docs/Web/API/Server-sent_events)
  - : Server-sent events ermöglichen es einer Webanwendung, einen Server dazu zu bringen, Ereignisse zu senden, genau wie jedes lokal erzeugte DOM-Ereignis.

<!---->

- `navigator.securityPolicy`, das seit langem eine leere Zeichenkette zurückgegeben hat, wurde vollständig entfernt.
- `BlobBuilder` ist nun implementiert, obwohl es derzeit mit einem Präfix versehen ist (so dass Sie `MozBlobBuilder` verwenden müssen).
- Die `Document.height` und `Document.width` wurden entfernt. [Firefox-Bug 585877](https://bugzil.la/585877)
- Die Eigenschaften `entities` und `notations` des [`DocumentType`](/de/docs/Web/API/DocumentType)-Objekts, die nie implementiert wurden und immer `null` zurückgaben, wurden entfernt, da sie ohnehin aus der Spezifikation entfernt wurden.
- Die `DOMConfiguration`-Schnittstelle und die `document.domConfig`-Eigenschaft, die sie verwendete, wurden beide entfernt; sie wurden nie unterstützt und wurden seitdem aus der DOM-Spezifikation entfernt.
- Das `hashchange`-Ereignis umfasst nun korrekt [die Felder `newURL` und `oldURL`](/de/docs/Web/API/Window/hashchange_event).
- Die `abort()`-Methode der [`FileReader`](/de/docs/Web/API/FileReader)-Schnittstelle löst nun eine Ausnahme aus, wenn sie verwendet wird, während kein Lesevorgang im Gange ist.
- Die Methode [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwendet nun [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um JavaScript-Objekte anstelle von nur Zeichenfolgen von einem Fenster zum anderen zu übergeben.
- Die API [`window.history`](/de/docs/Web/API/Window/history) verwendet nun [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um die Objekte, die Sie an die Methoden `pushState()` und `replaceState()` übergeben, zu serialisieren; dies ermöglicht die Verwendung komplexerer Objekte (einschließlich solcher, die zyklische Graphen von Verweisen enthalten).
- Sie können nun [erkennen, wann ein Druckvorgang initiiert und abgeschlossen wurde](/de/docs/Web/CSS/CSS_media_queries/Printing#detecting_print_requests), indem Sie auf die neuen Ereignisse `beforeprint` und `afterprint` hören.
- Die Eigenschaft `document.strictErrorChecking` wurde entfernt, da sie nie implementiert wurde und aus der DOM-Spezifikation entfernt wurde.
- Die standardmäßige [`event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented)-Eigenschaft wird nun unterstützt; Sie sollten diese anstelle der nicht standardmäßigen Methode `getPreventDefault()` verwenden, um zu erkennen, ob [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das Ereignis angewendet wurde.
- Die Eigenschaft [`window.top`](/de/docs/Web/API/Window/top) ist nun korrekt schreibgeschützt.
- DOM-Ansichten, die wir nie dokumentiert haben, wurden entfernt. Dies war ein bisschen Implementierungsdetail, das die Dinge unnötig komplizierte, also haben wir es entfernt. Wenn Sie diese Änderung bemerken, machen Sie wahrscheinlich etwas falsch.
- Die Funktion [`addEventListener()`](/de/docs/XPCOM_Interface_Reference/nsIDOMEventTarget) des `EventTarget` hat nun den Parameter `useCapture` optional, wie es bei WebKit der Fall ist (und gemäß der neuesten Version der Spezifikation).
- Die `mozResponseArrayBuffer`-Eigenschaft des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekts wurde durch die Eigenschaften `responseType` und `response` ersetzt.
- Die Eigenschaft [`dataset`](/de/docs/Web/API/HTMLElement/dataset) wurde zur Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) hinzugefügt und ermöglicht den Zugriff auf die [globalen HTML-Attribute `data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*) eines Elements.
- Die Schnittstelle [`CustomEvent`](/de/docs/Web/API/CustomEvent) wurde implementiert. (siehe [Firefox-Bug 427537](https://bugzil.la/427537))
- Aus Sicherheitsgründen erben `data:`- und `javascript:`-URLs, die vom Benutzer in der Adressleiste eingegeben werden, nicht mehr den Sicherheitskontext der aktuellen Seite; stattdessen wird ein neuer, leerer Sicherheitskontext erstellt. Dies bedeutet, dass Scripts, die durch Eingabe von `javascript:`-URLs in der Adressleiste geladen werden, beispielsweise keinen Zugriff mehr auf DOM-Methoden haben. Diese URLs funktionieren jedoch wie bisher, wenn sie von einem Script verwendet werden.

### JavaScript

- In der Vergangenheit war es möglich, den `new`-Operator auf mehrere eingebaute Funktionen (`eval()`, `parseInt()`, `Date.parse()`, …) anzuwenden, die laut Spezifikation dies nicht erlauben sollten. Dieses Verhalten wird nicht mehr unterstützt. Die Verwendung des `new`-Operators auf diese Weise wurde nie offiziell unterstützt und war nicht weit verbreitet, daher ist es unwahrscheinlich, dass Sie von dieser Änderung betroffen sind.
- ECMAScript 2015 [WeakMaps](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) wurden als Prototyp implementiert.

### SVG

- Das Attribut {{ SVGAttr("pathLength") }} wird nun unterstützt.
- SVG-Muster, -Verläufe und -Filter funktionieren nun korrekt, wenn sie von [`data:`-URLs](/de/docs/Web/URI/Reference/Schemes/data) geladen werden.

### MathML

- Die Implementierung von {{ MathMLElement("mstyle") }} wurde korrigiert.

### Barrierefreiheit (ARIA)

- Ein Zustandsänderungsereignis wird nun korrekt gesendet, wenn sich der Wert von `aria-busy` ändert.
- Ein Attributänderungsereignis wird nun korrekt gesendet, wenn `aria-sort` auftritt.

### Netzwerk

- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : WebSockets wurde für Firefox 6 auf Protokollversion 07 aktualisiert. Außerdem wurde das globale `WebSocket`-Objekt in `MozWebSocket` umbenannt, um zu verhindern, dass es fälschlicherweise zur Erkennung der Verfügbarkeit nicht prae-fixed WebSockets verwendet wird.

<!---->

- Das Parsen des `Content-Disposition`-Headers wurde korrigiert, um ordnungsgemäß backslash-escapete ASCII-Zeichen als genau das betreffende Zeichen selbst zu interpretieren. Zuvor wurde das Zeichen fälschlicherweise durch einen Unterstrich ("\_") ersetzt.
- Der Wert des path-Felds in `Set-Cookie`-Headers wird nun korrekt interpretiert, wenn Anführungszeichen verwendet werden; zuvor wurden sie als Teil der Pfadzeichenfolge statt als Trennzeichen behandelt. **Diese Änderung kann die Kompatibilität mit einigen Websites beeinträchtigen**, daher sollten Autoren ihren Code überprüfen.
- Der [`Upgrade`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.42)-Anforderungsheader wird jetzt unterstützt; Sie können ein Upgrade eines HTTP-Kanals auf ein anderes Protokoll anfordern, indem Sie `nsIHttpChannelInternal.HTTPUpgrade()` aufrufen.

### Weitere Änderungen

- Die Unterstützung für Mikrozusammenfassungen wurde entfernt; diese waren nie weit verbreitet, nicht sehr auffindbar, und ihre weitere Unterstützung erschwerte Verbesserungen an der Places (Lesezeichen- und Verlaufsverwaltung) Architektur.
- WebGL unterstützt jetzt die [`OES_texture_float`](https://registry.khronos.org/OpenGL/extensions/OES/OES_texture_float.txt)-Erweiterung.
- Das neue Werkzeug _Scratchpad_ bietet einen praktischen Ort, um mit JavaScript-Code zu experimentieren.
- Die Methode `console.trace()` wurde zur [Console API](/de/docs/Web/API/Console_API) hinzugefügt ([Firefox-Bug 585956](https://bugzil.la/585956)).

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über die Änderungen, die Sie möglicherweise vornehmen müssen, um Ihr Add-on mit Firefox 6 kompatibel zu machen, siehe [Aktualisieren von Add-ons für Firefox 6](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_6).

> [!NOTE]
> Firefox 6 erfordert, dass binäre Komponenten neu kompiliert werden, ebenso wie alle Hauptversionen von Firefox. Siehe [Binary Interfaces](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Details.

### JavaScript-Code-Module

#### FileUtils.jsm

- Die Methode `openSafeFileOutputStream()` öffnet nun Dateien mit dem `DEFER_OPEN` [Verhaltensflag](/de/docs/XPCOM_Interface_Reference/nsIFileOutputStream#behavior_flag_constants) anstelle des sofortigen Öffnens.

#### XPCOMUtils.jsm

- Die neue Methode `importRelative()` ermöglicht es Ihnen, ein JavaScript-Code-Modul von einem Pfad relativ zum Pfad eines anderen JavaScript-Code-Moduls zu laden. Dies erleichtert den Aufbau von Modulen, die voneinander abhängen.

### XPCOM

- [`nsCOMArray<T>`](/de/docs/XPCOM_array_guide#nsCOMArray.3cT.3e) hat nun eine Methode [`RemoveObjectsAt()`](/de/docs/XPCOM_array_guide#deleting_objects), um mehrere Objekte auf einmal aus dem Array zu entfernen.

### Verwendung des DOM aus Chrom

- [Verwenden der DOM-File-API im Chrom-Code](/de/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
  - : Obwohl Sie die DOM-File-API schon immer aus Chrom-Code verwenden konnten, unterstützt der [`File`](/de/docs/Web/API/File)-Konstruktor jetzt das Angeben einer lokalen Pfadzeichenfolge, wenn er aus Chrom verwendet wird. Zusätzlich können Sie auch die Datei, auf die mit der DOM-File-API zugegriffen werden soll, mit einem `nsIFile`-Objekt angeben.

### Schnittstellenänderungen

- `nsINavHistoryQueryOptions` unterstützt nun das Sortieren in Frequenzreihenfolge mit den neuen Konstanten `SORT_BY_FREQUENCY_ASCENDING` und `SORT_BY_FREQUENCY_DESCENDING`.
- `nsIFilePicker` hat ein neues Attribut `nsIFilePicker.addToRecentDocs`, mit dem Sie angeben können, dass die ausgewählte Datei zur "zuletzt verwendeten Dokumentenliste" des Benutzers hinzugefügt werden soll, falls eine vorhanden ist. Dieses Attribut hat keinen Effekt im privaten Browsing-Modus.
- `nsINavBookmarkObserver`-Methoden mit Item-ID-Parametern erfordern nun auch eine GUID.
- `nsIPrefBranch.clearUserPref()` löst keine Ausnahme mehr aus, wenn die angegebene Präferenz nicht existiert oder keinen benutzerspezifischen Wert hat. Stattdessen tut es nichts.
- Die `nsIMemoryReporter`-Schnittstelle bietet nun Unterstützung, um den Typ des beschriebenen Speichers anzugeben (gemappt, Heap oder anderer).
- Das Attribut `stateData` von `nsISHEntry` gibt nun einen `nsIStructuredCloneContainer` zurück.
- `nsIURI` hat ein neues Attribut `nsIURI.ref`, das den Referenzteil (den Teil nach dem "#") der URI zurückgibt. Es hat auch neue Methoden `nsIURI.cloneIgnoringRef()`, das die `nsIURI` ohne den ref-Member klont und `nsIURI.equalsExceptRef()`, welches mit einer anderen `nsIURI` vergleicht unter Ausnahme des ref-Members.

#### Neue Schnittstellen

- `mozIAsyncFavicons`
  - : Ein neuer Dienst, der es Ihnen ermöglicht, asynchron auf den Favicon-Dienst zuzugreifen.
- `nsIEventSource`
  - : _Details folgen noch._
- `nsIGSettingsCollection`
  - : _Details folgen noch._
- `nsIGSettingsService`
  - : _Details folgen noch._
- `nsIHttpUpgradeListener`
  - : Die Rückruf-Schnittstelle zur Handhabung von HTTP-Upgrade-Anforderungen über die Methode `nsIHttpChannelInternal.HTTPUpgrade()`.
- `nsIStructuredCloneContainer`
  - : Ein Container für Objekte, die mit dem [strukturierten Klon-Algorithmus](/de/docs/HTML/Structured_clones) serialisiert wurden.
- `nsITelemetry`
  - : Implementiert Unterstützung für Telemetrie, um die Aufzeichnung von Telemetriedaten zu ermöglichen, die zur Darstellung von Histogrammen für Leistungsüberwachungszwecke verwendet werden sollen. Siehe [Firefox-Bug 649502](https://bugzil.la/649502) und [Firefox-Bug 585196](https://bugzil.la/585196).
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

### Weitere Änderungen

- [Verwendung von Präferenzen aus dem Anwendungscode](/de/docs/Mozilla/Preferences/Using_preferences_from_application_code)
  - : Eine neue statische API ist verfügbar, um Präferenzen einfach abzurufen; dies ist nur für Anwendungscode verfügbar und kann nicht von Add-ons verwendet werden.

## Siehe auch

{{Firefox_for_developers}}

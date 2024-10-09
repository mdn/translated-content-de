---
title: Firefox 6 für Entwickler
slug: Mozilla/Firefox/Releases/6
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{FirefoxSidebar}}

Firefox 6, basierend auf Gecko 6.0, wurde am 16. August 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Das HTML5-<code>{{ HTMLElement("progress") }}</code>-Element, mit dem Sie eine Fortschrittsanzeige erstellen können, wird jetzt unterstützt.
- Das Parsen des HTML5-<code>{{ HTMLElement("track") }}</code>-Elements, das Textspuren für Medienelemente spezifiziert, wird nun unterstützt. Dieses Element sollte jetzt im DOM erscheinen, obwohl sein Verhalten noch nicht implementiert ist.
- Das <code>{{ HTMLElement("iframe") }}</code>-Element wird nun korrekt von seinem Container abgeschnitten, wenn die Ecken des Containers mit der {{ cssxref("border-radius") }}-Eigenschaft abgerundet wurden.
- Die Text-<code>{{ HTMLElement("input") }}</code>-Felder von {{ HTMLElement("form") }}-Elementen unterstützen nicht mehr die XUL-[`maxwidth`](/de/docs/XUL/Property/maxwidth)-Eigenschaft; dies war nie beabsichtigt und verstößt gegen die HTML-Spezifikation. Sie sollten stattdessen das [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut verwenden, um die maximale Breite der Eingabefelder festzulegen.
- Die {{ HTMLElement("canvas") }}-Eigenschaften [`CanvasRenderingContext2d`](/de/docs/Web/API/CanvasRenderingContext2d) `fillStyle` und `strokeStyle` ignorierten früher Abfall nach einer gültigen Farbdefinition; nun wird dies korrekt als Fehler behandelt. Zum Beispiel wurde "red blue" früher als "red" behandelt, wobei es ignoriert werden sollte.
- Die Breite und Höhe von {{ HTMLElement("canvas") }}-Elementen kann nun korrekt auf 0px gesetzt werden; bisher wurden diese willkürlich auf 300px gesetzt, wenn Sie das versucht haben.
- Unterstützung für die HTML [benutzerdefinierte Daten-Attribute](/de/docs/Web/HTML/Global_attributes/data-*) (`data-*`) wurde hinzugefügt. Die DOM-`element.dataset`-Eigenschaft ermöglicht den Zugriff darauf.
- Wenn ein {{ HTMLElement("textarea") }}-Element den Fokus erhält, wird der Texteinfügepunkt nun standardmäßig am Anfang des Textes platziert anstatt am Ende. Dies macht das Verhalten von Firefox konsistent mit anderen Browsern.

### CSS

- {{ cssxref("text-decoration-color", "-moz-text-decoration-color") }}
  - : Diese neue Eigenschaft erlaubt es Ihnen, die Farbe der Textdekorationen wie Unterstriche, Überstriche und Durchstreichungen festzulegen.
- {{ cssxref("text-decoration-line", "-moz-text-decoration-line") }}
  - : Diese neue Eigenschaft erlaubt es Ihnen, die Art der zu einem Element hinzugefügten Textdekorationen festzulegen.
- {{ cssxref("text-decoration-style", "-moz-text-decoration-style") }}
  - : Diese neue Eigenschaft erlaubt es Ihnen, den Stil der Textdekorationen wie Unterstriche, Überstriche und Durchstreichungen festzulegen. Stile umfassen einfache Striche, doppelte Striche, gewellte Linien, punktierte Linien und so weiter.
- {{ cssxref("hyphens", "-moz-hyphens") }}
  - : Diese neue Eigenschaft erlaubt es Ihnen, zu steuern, wie die Silbentrennung von Wörtern während des Zeilenumbruchs behandelt wird.
- {{ cssxref("-moz-orient", "-moz-orient") }}
  - : Eine neue (derzeit Mozilla-spezifische) Eigenschaft, die es Ihnen erlaubt, die vertikale oder horizontale Orientierung bestimmter Elemente (insbesondere {{ HTMLElement("progress") }}) zu steuern.
- {{ cssxref("::-moz-progress-bar") }}
  - : Ein Mozilla-spezifisches Pseudo-Element, das es Ihnen ermöglicht, den Bereich eines <code>{{ HTMLElement("progress") }}</code>-Elements zu gestalten, der den abgeschlossenen Teil einer Aufgabe darstellt.

#### Andere Änderungen

- Die `@-moz-document`-Eigenschaft hat eine neue `regexp()`-Funktion, die es Ihnen erlaubt, die URL des Dokuments mit einem [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) abzugleichen.
- Die {{ cssxref("azimuth") }}-CSS-Eigenschaft wird nicht mehr unterstützt, da der Code für die `aural` Mediengruppe entfernt wurde. Sie wurde nie signifikant implementiert, weshalb es sinnvoller war, die überflüssige Implementierung vorübergehend zu entfernen, anstatt sie zu reparieren.
- In der Vergangenheit wurde die {{ cssxref(":hover") }}-Pseudoklasse in Quirks-Modus nicht auf Klassenselektoren angewendet; zum Beispiel funktionierte `.someclass:hover` nicht. Dieses Quirk wurde entfernt.
- Die {{ cssxref(":indeterminate") }}-Pseudoklasse kann auf {{ HTMLElement("progress") }}-Elemente angewendet werden. Dies ist nicht standardisiert, aber wir hoffen, dass dies von anderen Browsern übernommen wird, da es nützlich sein wird.
- Der `-moz-win-exclude-glass`-Wert wurde zur `-moz-appearance`-CSS-Eigenschaft hinzugefügt, um opake Bereiche bei Aero-Glas-Verglasungseffekten auf Windows-Systemen auszuschließen.
- [Firefox-Bug 658949](https://bugzil.la/658949) hat geändert, wie das Hash-Symbol (#) in Daten-URLs behandelt wird, was CSS-Stylesheets, die ein solches Symbol enthalten, beeinträchtigen könnte, wenn es nicht maskiert wird.

### DOM

- [Medienabfragen vom Code aus verwenden](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
  - : Sie können jetzt das Ergebnis einer Medienabfrage-String programmgesteuert mit der [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)-Methode und der [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Schnittstelle testen.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Firefox 6 fügt Unterstützung für die W3C-Standard-Touch-Ereignisse hinzu; diese erleichtern die Interpretation eines oder mehrerer Berührungen gleichzeitig auf berührungsempfindlichen Oberflächen wie Touchscreens und Trackpads.
- [Servergesendete Ereignisse](/de/docs/Web/API/Server-sent_events)
  - : Servergesendete Ereignisse ermöglichen es einer Webanwendung, den Server aufzufordern, Ereignisse zu senden, so wie jedes lokal erstellte DOM-Ereignis.

<!---->

- `navigator.securityPolicy`, das lange nur einen leeren String zurückgab, wurde gänzlich entfernt.
- `BlobBuilder` ist jetzt implementiert, obwohl es derzeit noch mit einem Präfix versehen ist (sodass Sie `MozBlobBuilder` verwenden müssen).
- Die `Document.height`- und `Document.width`-Eigenschaften wurden entfernt. [Firefox-Bug 585877](https://bugzil.la/585877)
- Die `entities`- und `notations`-Eigenschaften des [`DocumentType`](/de/docs/Web/API/DocumentType)-Objekts, die nie implementiert und immer `null` zurückgegeben haben, wurden entfernt, da sie ohnehin aus der Spezifikation entfernt wurden.
- Die `DOMConfiguration`-Schnittstelle und die darauf basierende `document.domConfig`-Eigenschaft wurden beide entfernt; sie wurden nie unterstützt und sind seitdem aus der DOM-Spezifikation entfernt worden.
- Das `hashchange`-Ereignis enthält nun korrekt [die Felder `newURL` und `oldURL`](/de/docs/Web/API/Window/hashchange_event).
- Die `abort()`-Methode der [`FileReader`](/de/docs/Web/API/FileReader)-Schnittstelle wirft nun eine Ausnahme, wenn sie verwendet wird, wenn kein Dateilesen im Gange ist.
- Die [`window.postMessage()`](/de/docs/Web/API/Window/postMessage)-Methode verwendet jetzt [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), damit Sie JavaScript-Objekte statt nur Strings von einem Fenster zu einem anderen übergeben können.
- Die [`window.history`](/de/docs/Web/API/Window/history)-API verwendet jetzt [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um die Objekte zu serialisieren, die Sie an die Methoden `pushState()` und `replaceState()` übergeben; dies ermöglicht die Verwendung komplexerer Objekte (einschließlich solcher, die zyklische Referenzgraphs enthalten).
- Sie können nun [erkennen, wann das Drucken initiiert und abgeschlossen wurde](/de/docs/Web/CSS/CSS_media_queries/Printing#detecting_print_requests), indem Sie auf die neuen `beforeprint`- und `afterprint`-Ereignisse hören.
- Die Eigenschaft `document.strictErrorChecking` wurde entfernt, da sie nie implementiert wurde und aus der DOM-Spezifikation entfernt wurde.
- Die standardmäßige [`event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented)-Eigenschaft wird jetzt unterstützt; Sie sollten diese anstelle der nicht standardisierten `getPreventDefault()`-Methode verwenden, um festzustellen, ob [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das Ereignis aufgerufen wurde.
- Die [`window.top`](/de/docs/Web/API/Window/top)-Eigenschaft ist nun korrekt schreibgeschützt.
- DOM-Ansichten, die wir nie dokumentiert haben, wurden entfernt. Dies war ein Implementierungsdetail, das die Dinge unnötig verkomplizierte, also haben wir es entfernt. Wenn Sie diese Änderung bemerken, machen Sie wahrscheinlich etwas falsch.
- Die `EventTarget`-Funktion [`addEventListener()`](/de/docs/XPCOM_Interface_Reference/nsIDOMEventTarget) hat nun den Parameter `useCapture` optional, wie es auch in WebKit der Fall ist (und gemäß der neuesten Version der Spezifikation).
- Die `mozResponseArrayBuffer`-Eigenschaft des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekts wurde durch die `responseType`- und `response`-Eigenschaften ersetzt.
- Die Eigenschaft [`element.dataset`](/de/docs/Web/API/Element/dataset) wurde zur Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) hinzugefügt, wodurch der Zugriff auf die [`data-*`-globalen Attribute](/de/docs/Web/HTML/Global_attributes/data-*) eines Elements ermöglicht wird.
- Die Schnittstelle [`CustomEvent`](/de/docs/Web/API/CustomEvent) wurde implementiert. (siehe [Firefox-Bug 427537](https://bugzil.la/427537))
- Aus Sicherheitsgründen erben `data:`- und `javascript:`-URLs nicht mehr den Sicherheitskontext der aktuellen Seite, wenn der Benutzer sie in die Adressleiste eingibt; stattdessen wird ein neuer, leerer Sicherheitskontext erstellt. Das bedeutet, dass Skripte, die durch Eingabe von `javascript:`-URLs in die Adressleiste geladen werden, keinen Zugriff mehr auf DOM-Methoden und ähnliche Funktionen haben. Diese URLs funktionieren jedoch wie gewohnt, wenn sie durch Skripte verwendet werden.

### JavaScript

- In der Vergangenheit war es möglich, den `new`-Operator auf mehrere eingebaute Funktionen (`eval()`, `parseInt()`, `Date.parse()`, …) anzuwenden, die dies gemäß der Spezifikation nicht hätten zulassen sollen. Dieses Verhalten wird nicht mehr unterstützt. Die Verwendung des `new`-Operators auf diese Weise wurde niemals offiziell unterstützt und war nicht weit verbreitet, daher ist es unwahrscheinlich, dass diese Änderung Sie betrifft.
- ECMAScript 2015 [WeakMaps](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) wurden als Prototypenimplementierung hinzugefügt.

### SVG

- Das Attribut {{ SVGAttr("pathLength") }} wird jetzt unterstützt.
- SVG-Muster, -Verläufe und -Filter funktionieren nun korrekt, wenn sie von [`data:`-URLs](/de/docs/Web/URI/Schemes/data) geladen werden.

### MathML

- Die Implementierung von {{ MathMLElement("mstyle") }} wurde korrigiert.

### Barrierefreiheit (ARIA)

- Ein Zustandsänderungsereignis wird nun korrekt gesendet, wenn sich der Wert von `aria-busy` ändert.
- Ein Attributänderungsereignis wird nun korrekt gesendet, wenn `aria-sort` auftritt.

### Netzwerk

- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : WebSockets wurde auf Protokollversion 07 für Firefox 6 aktualisiert. Zusätzlich wurde das globale `WebSocket`-Objekt in `MozWebSocket` umbenannt, um zu verhindern, dass es fälschlicherweise verwendet wird, um die Verfügbarkeit von nicht mit Präfixen versehenen WebSockets zu erkennen.

<!---->

- Das Parsen des `Content-Disposition`-Headers wurde behoben, um Backslash-umrahmte ASCII-Zeichen korrekt als genau dieses Zeichen selbst zu interpretieren. Zuvor wurde dieses Zeichen fälschlicherweise durch einen Unterstrich ("\_") ersetzt.
- Der Wert des Pfadfelds in `Set-Cookie`-Headern wird jetzt korrekt interpretiert, wenn Anführungszeichen verwendet werden; zuvor wurden sie als Teil des Pfadstrings behandelt statt als Trennzeichen. **Diese Änderung kann die Kompatibilität mit einigen Websites beeinträchtigen**, daher sollten Autoren ihren Code überprüfen.
- Der [`Upgrade`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.42)-Anforderungsheader wird jetzt unterstützt; Sie können ein Upgrade eines HTTP-Kanals auf ein anderes Protokoll anfordern, indem Sie `nsIHttpChannelInternal.HTTPUpgrade()` aufrufen.

### Andere Änderungen

- Die Unterstützung für Mikrosummen wurde entfernt; sie wurden nie weit verbreitet genutzt, waren nicht sehr auffindbar, und ihre Unterstützung erschwerte Verbesserungen der Places-Architektur (Lesezeichen und Verlauf).
- WebGL unterstützt jetzt die [`OES_texture_float`](https://registry.khronos.org/OpenGL/extensions/OES/OES_texture_float.txt)-Erweiterung.
- Das neue _Scratchpad_-Tool bietet einen praktischen Ort, um mit JavaScript-Code zu experimentieren.
- Die Methode `console.trace()` wurde zur [Console API](/de/docs/Web/API/Console_API) hinzugefügt ([Firefox-Bug 585956](https://bugzil.la/585956)).

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über die Änderungen, die Sie möglicherweise vornehmen müssen, um Ihr Add-on mit Firefox 6 kompatibel zu machen, siehe [Aktualisieren von Add-ons für Firefox 6](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_6).

> [!NOTE]
> Firefox 6 erfordert, dass binäre Komponenten neu kompiliert werden, wie alle Hauptversionen von Firefox. Siehe [Binäre Schnittstellen](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Details.

### JavaScript-Code-Module

#### FileUtils.jsm

- Die Methode `openSafeFileOutputStream()` öffnet jetzt Dateien mit dem `DEFER_OPEN` [Verhaltensflag](/de/docs/XPCOM_Interface_Reference/nsIFileOutputStream#behavior_flag_constants) anstelle des sofortigen Öffnens.

#### XPCOMUtils.jsm

- Die neue `importRelative()`-Methode ermöglicht das Laden eines JavaScript-Code-Moduls von einem Pfad, der relativ zum Pfad eines anderen JavaScript-Code-Moduls ist. Dies erleichtert den Aufbau von Modulen, die voneinander abhängen.

### XPCOM

- [`nsCOMArray<T>`](/de/docs/XPCOM_array_guide#nsCOMArray.3cT.3e) hat jetzt eine [`RemoveObjectsAt()`](/de/docs/XPCOM_array_guide#deleting_objects)-Methode, um mehrere Objekte gleichzeitig aus dem Array zu entfernen.

### Verwendung des DOM aus Chrome

- [Verwendung der DOM-File-API im Chrome-Code](/de/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
  - : Obwohl Sie schon immer die DOM-File-API aus dem Chrome-Code verwenden konnten, unterstützt der [`File`](/de/docs/Web/API/File)-Konstruktor jetzt die Angabe eines lokalen Pfadnamens als Zeichenfolge, wenn er aus dem Chrome verwendet wird. Zusätzlich können Sie auch die Datei mit der DOM-File-API unter Verwendung eines `nsIFile`-Objekts angeben.

### Schnittstellenänderungen

- `nsINavHistoryQueryOptions` unterstützt jetzt die Sortierung nach Häufigkeit mit den neuen Konstanten `SORT_BY_FREQUENCY_ASCENDING` und `SORT_BY_FREQUENCY_DESCENDING`.
- `nsIFilePicker` hat ein neues `nsIFilePicker.addToRecentDocs`-Attribut, das Ihnen ermöglicht anzugeben, dass die ausgewählte Datei zur "zuletzt verwendeten Dokumenten"-Liste des Benutzers hinzugefügt werden soll, falls vorhanden. Dieses Attribut hat keine Wirkung im privaten Modus.
- `nsINavBookmarkObserver`-Methoden mit Element-ID-Parametern erfordern jetzt auch eine GUID.
- `nsIPrefBranch.clearUserPref()` löst keine Ausnahme mehr aus, wenn die angegebene Einstellung nicht existiert oder keinen benutzerdefinierten Wert hat. Stattdessen macht es nichts.
- Die `nsIMemoryReporter`-Schnittstelle unterstützt jetzt die Angabe der Art des beschriebenen Speichers (gemappt, Heap oder anderweitig).
- Das `stateData`-Attribut von `nsISHEntry` gibt jetzt einen `nsIStructuredCloneContainer` zurück.
- `nsIURI` hat ein neues `nsIURI.ref`-Attribut, das den Referenzteil (den Teil nach dem "#") der URI zurückgibt. Es gibt auch neue Methoden `nsIURI.cloneIgnoringRef()`, die die `nsIURI` ohne das `ref`-Element klont und `nsIURI.equalsExceptRef()`, die diese mit einer anderen `nsIURI` ohne das `ref`-Element vergleicht.

#### Neue Schnittstellen

- `mozIAsyncFavicons`
  - : Ein neuer Dienst, der Ihnen ermöglicht, asynchron auf den Favicon-Dienst zuzugreifen.
- `nsIEventSource`
  - : _Details folgen._
- `nsIGSettingsCollection`
  - : _Details folgen._
- `nsIGSettingsService`
  - : _Details folgen._
- `nsIHttpUpgradeListener`
  - : Die Rückruf-Schnittstelle zum Behandeln von HTTP-Upgrade-Anforderungen über die Methode `nsIHttpChannelInternal.HTTPUpgrade()`.
- `nsIStructuredCloneContainer`
  - : Ein Container für Objekte, die mit dem [strukturierten Klon-Algorithmus](/de/docs/HTML/Structured_clones) serialisiert wurden.
- `nsITelemetry`
  - : Implementiert die Unterstützung von Telemetrie, um die Aufzeichnung von Telemetriedaten zu ermöglichen, die zur Darstellung von Histogrammen zur Leistungsüberwachung verwendet werden. Siehe [Firefox-Bug 649502](https://bugzil.la/649502) und [Firefox-Bug 585196](https://bugzil.la/585196).
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

- [Verwendung von Einstellungen aus Anwendungscode](/de/docs/Mozilla/Preferences/Using_preferences_from_application_code)
  - : Eine neue statische API steht zur Verfügung, um leichter auf Einstellungen zuzugreifen; diese ist nur für Anwendungscode verfügbar und kann nicht von Add-ons verwendet werden.

## Siehe auch

{{Firefox_for_developers}}

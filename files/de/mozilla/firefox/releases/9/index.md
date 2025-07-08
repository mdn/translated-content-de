---
title: Firefox 9 für Entwickler
slug: Mozilla/Firefox/Releases/9
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Firefox 9 wurde für Windows am 20. Dezember 2011 veröffentlicht. Die Versionen 9.0.1 für Mac und Linux, die einen in letzter Minute entdeckten Absturzfehler beheben, wurden am 21. Dezember 2011 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das `value` Attribut von {{ HTMLElement("li") }} kann jetzt negativ sein. Zuvor wurden negative Werte auf 0 konvertiert.
- Sie können jetzt [die Start- und Stoppzeit von Medien angeben](/de/docs/Web/Media/Guides/Audio_and_video_delivery#specifying_playback_range) in der URI der Medien, wenn Sie die {{ HTMLElement("audio") }} und {{ HTMLElement("video") }} Elemente verwenden.
- {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }} Elemente respektieren jetzt den Wert des `lang` Attributs, wenn die Rechtschreibprüfung aufgerufen wird.
- Firefox auf Android ermöglicht es Benutzern jetzt, Fotos mit der Kamera des Telefons aufzunehmen, ohne den Browser zu verlassen, wenn das {{ HTMLElement("input") }} Element mit `type="file"` und `accept="image/*"` verwendet wird.
- Windows Vista Stil PNG ICO Bilder werden jetzt unterstützt.
- Beim Zeichnen von Bildern, die das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut verwenden, um CORS-Zugriff anzufordern, werden die Canvas nicht mehr fälschlicherweise [durchkreuzt](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases), wenn CORS gewährt wird.
- Der Wert des [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) Attributs kann jetzt so groß wie 65.534 sein, statt 8190.

### CSS

- Die {{ cssxref("font-stretch") }} Eigenschaft wird jetzt unterstützt.
- Die {{ cssxref("columns") }} Eigenschaft wird jetzt mit dem `-moz` Präfix unterstützt. Dies ist eine Kurzform für die folgenden Eigenschaften: {{ cssxref("column-width") }} und {{ cssxref("column-count") }}.
- Wenn ein Stylesheet, das mit dem {{ HTMLElement("link") }} Element eingebunden wurde, vollständig geladen und analysiert wurde (aber noch nicht auf das Dokument angewendet wurde), wird jetzt ein [`load` Ereignis](/de/docs/Web/HTML/Reference/Elements/link#stylesheet_load_events) ausgelöst. Außerdem wird ein `error` Ereignis ausgelöst, wenn ein Fehler bei der Verarbeitung eines Stylesheets auftritt.
- Sie können jetzt Überlaufeinstellungen sowohl für den linken als auch den rechten Rand von Inhalten mit einer neuen Zwei-Wert-Syntax für {{ cssxref("text-overflow") }} angeben.

### JavaScript

_Keine Änderung._

### DOM

- [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API)
  - : Die neue Fullscreen-API bietet eine Möglichkeit, Inhalte im gesamten Bildschirm anzuzeigen, ohne Browser-Oberfläche. Dies ist ideal für Videos und Spiele. Diese API ist derzeit experimentell und mit Präfixen versehen.

<!---->

- Die Methode [`Node.contains()`](/de/docs/Web/API/Node/contains) ist jetzt implementiert; so können Sie feststellen, ob ein gegebener Knoten ein Nachfahre eines anderen Knotens ist.
- Das Attribut [`Node.parentElement`](/de/docs/Web/API/Node/parentElement) wurde implementiert; es gibt das übergeordnete [`Element`](/de/docs/Web/API/Element) eines DOM-Knotens zurück oder `null`, wenn das übergeordnete Element kein Element ist.
- DOM Level 3 [Zusammensetzungsereignisse](/de/docs/Web/API/CompositionEvent) werden jetzt unterstützt.
- Das Attribut [`Document.scripts`](/de/docs/Web/API/Document/scripts) wurde implementiert; es gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von allen {{ HTMLElement("script") }} Elementen im Dokument zurück.
- Die Methode [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) wurde implementiert.
- Die Menge der Ereignisse, die auf {{ HTMLElement("body") }} Elementen empfangen werden können, wurde überarbeitet, um dem neuesten Entwurf der HTML5-Spezifikation zu entsprechen. Die Liste der Ereignisse in der [DOM-Ereignisreferenz](/de/docs/Web/Events) spiegelt wider, für welche Ereignisse auf {{ HTMLElement("body") }} gehört werden kann.
- Das `readystatechange` Ereignis wird jetzt nur noch auf dem [`Document`](/de/docs/Web/API/Document) ausgelöst, wie beabsichtigt.
- Ereignis-Handler werden jetzt als Standard-IDL-Schnittstellen implementiert. In den meisten Fällen wird sich dies nicht auf Inhalte auswirken, es gibt jedoch Ausnahmen.
- Ein neuer Antworttyp, `"moz-json"`, wurde zu `XMLHttpRequest` hinzugefügt, sodass `XMLHttpRequest` automatisch {{Glossary("JSON", "JSON")}} Zeichenfolgen für Sie parst; wenn Sie diesen Typ anfordern, wird eine zurückgegebene JSON-Zeichenfolge geparst, sodass der Wert der `response` Eigenschaft das resultierende JavaScript-Objekt ist.
- [`XMLHttpRequest` "progress" Ereignisse](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress) werden jetzt zuverlässig für jedes empfangene Datenfragment gesendet; in der Vergangenheit war es möglich, dass das letzte empfangene Datenfragment kein "progress" Ereignis auslöste. Jetzt können Sie den Fortschritt nur durch Verfolgen von "progress" Ereignissen überwachen, anstatt auch "load" Ereignisse zu überwachen, um den Empfang des letzten Datenfragments zu erkennen.
- In der Vergangenheit löste das Aufrufen von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mit einem `null` Listener eine Ausnahme aus. Jetzt wird es ohne Fehler und ohne Wirkung zurückgegeben.
- Die neue [`navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) Eigenschaft ermöglicht es Ihren Inhalten, einfach festzustellen, ob der Benutzer seine Do-Not-Track-Präferenz aktiviert hat; wenn dieser Wert "yes" ist, sollten Sie den Benutzer nicht tracken.
- [`Range`](/de/docs/Web/API/Range) und [`Selection`](/de/docs/Web/API/Selection) Objekte verhalten sich jetzt gemäß ihren Spezifikationen, wenn [`splitText()`](/de/docs/Web/API/Text/splitText) und [`normalize()`](/de/docs/Web/API/Node/normalize) aufgerufen werden.
- Der Wert von [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) für Doctype-Knoten ist jetzt das Dokument, auf dem [`createDocumentType()`](/de/docs/Web/API/DOMImplementation/createDocumentType) aufgerufen wurde, um den Knoten zu erstellen, statt `null`.
- `window.navigator.taintEnabled` wurde entfernt; es wurde seit vielen Jahren nicht mehr unterstützt.

### Workers

- In Blob-URLs implementierte Workers waren in Firefox 8 fehlerhaft und funktionieren ab Firefox 9 wieder.

### WebGL

- Die [WebGL](/de/docs/Web/API/WebGL_API) Kontextattribute `drawingBufferWidth` und `drawingBufferHeight` werden jetzt unterstützt.

### MathML

- Der nicht-standardmäßige `restyle` Wert für das `actiontype` Attribut auf {{ MathMLElement("maction") }} Elementen wurde entfernt.
- Obwohl noch nicht unterstützt, bricht die Verwendung des `mlabeledtr` Elements das Rendering nicht mehr vollständig. Siehe [Firefox Bug 689641](https://bugzil.la/689641) für den Fortschritt der tatsächlichen Unterstützung dieses Elements.

### Netzwerk

- Sie können jetzt den Inhalt von [JavaScript getypten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) (d.h. den Inhalt eines [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) Objekts) [mit XMLHttpRequest senden](/de/docs/Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data).
- WebSocket-Verbindungen erlauben jetzt das Empfangen von Nicht-Zeichen in ansonsten gültigen UTF-8-Datenframes, statt fehlzuschlagen.
- Der HTTP `Accept` Header für XSLT-Anfragen wurde aus Einfachheitsgründen auf `*/*` geändert. Da das Abrufen von XSLT ohnehin immer auf `*/*` zurückfiel, war es sinnvoll, die ursprüngliche Anfrage zu vereinfachen.
- Versuche eines Servers, die Antwortcodes `301 Moved Permanently` oder `307 Temporary Redirect` zu verwenden, um den Benutzer zu einer `javascript:` URI umzuleiten, führen jetzt zu einem Fehler "schlechte Verbindung" statt tatsächlich umgeleitet zu werden. Dies verhindert bestimmte Arten von Cross-Site-Scripting-Angriffen.
- Inhalte, die mit leerem {{ HTTPHeader("Content-Disposition") }} ausgeliefert werden, wurden bisher so behandelt, als ob das {{ HTTPHeader("Content-Disposition") }} "attachment" wäre; das funktionierte nicht immer wie erwartet. Diese werden jetzt so behandelt, als ob das {{ HTTPHeader("Content-Disposition") }} "inline" wäre.
- Die standardmäßige maximale Größe eines Elements im Festplattencache wurde auf 50 MB erhöht; zuvor wurden nur Elemente bis zu 5 MB zwischengespeichert.

### Entwickler-Tools

- Die Webkonsole unterstützt jetzt grundlegende [Zeichenfolgenersetzungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#string-substitutions) in ihren Logging-Methoden.
- Sie können jetzt [visuell verschachtelte Blöcke von Ausgaben erstellen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#using-groups-in-the-console) in der Webkonsole, um die Lesbarkeit zu erleichtern.

## Änderungen für Mozilla- und Add-on-Entwickler

Siehe [Aktualisieren von Add-ons für Firefox 9](/de/docs/Mozilla/Firefox/Releases/9/Updating_add-ons) für einen Überblick über die Änderungen, die Sie vornehmen müssen, um Ihre Add-ons in Firefox 9 zum Laufen zu bringen.

### XUL

- Das `<xul:tab>` Element hat jetzt ein `pending` Attribut, dessen Wert `true` ist, wenn das Tab momentan vom Sitzungswiederherstellungsdienst wiederhergestellt wird. Dies kann zum Stylen des Tabs in Themes verwendet werden. Das Attribut ist bei Tabs, die nicht ausstehend sind, nicht vorhanden.
- Das `<xul:tab>` Element hat jetzt ein `unread` Attribut, dessen Wert `true` ist, wenn sich die Registerkarte geändert hat seit dem letzten Mal, als sie die aktive Registerkarte war oder wenn sie seit Beginn der aktuellen Sitzung nicht ausgewählt wurde. Das Attribut ist bei Tabs, die nicht ungelesen sind, nicht vorhanden.
- Sie können jetzt ein `<xul:panel>` als Drag-Bild für DOM-Drag-and-Drop-Operationen verwenden. Dies ermöglicht es Ihnen, die [Standard Drag & Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) für Drag-and-Drop von XUL-Inhalten zu verwenden.
- Die Methode `appendNotification` des `<xul:notificationbox>` Elements lässt Sie jetzt einen Callback angeben, der für interessante Ereignisse im Zusammenhang mit dem Benachrichtigungskasten aufgerufen wird. Derzeit ist das einzige Ereignis "removed", das Ihnen mitteilt, dass der Kasten aus seinem Fenster entfernt wurde.

### Änderungen am JavaScript-Code-Modul

- `FileUtils.jsm` hat jetzt einen `File` Konstruktor, der ein `nsIFile` Objekt zurückgibt, das eine durch ihren Pfadnamen angegebene Datei darstellt.

### Dienständerungen

- Der Inhaltspräferenzdienst unterstützt jetzt den privaten Modus (siehe [Firefox Bug 679784](https://bugzil.la/679784)).

### NSPR

- NSPR hat jetzt ein "append" Modul, das es Ihnen ermöglicht, neue Daten an das Ende eines bestehenden Protokolls anzufügen.

### Schnittstellenänderungen

#### Entfernte Schnittstellen

- `nsIGlobalHistory3` wurde während der Vereinfachung des Places- und DocShell-Codes entfernt.

#### Verschiedene Schnittstellenänderungen

- Die `nsISound` Schnittstelle hat eine neue Konstante, `EVENT_EDITOR_MAX_LEN`. Diese ermöglicht das Abspielen des Systemtons, wenn mehr Zeichen als erlaubt in ein Textfeld eingegeben werden. Derzeit wird dies nur unter Windows genutzt.
- Die `nsIScriptError2` Schnittstelle hat neue `timeStamp` und `innerWindowID` Eigenschaften; außerdem nimmt die `initWithWindowID()` Methode jetzt eine innere Fenster-ID statt einer äußeren Fenster-ID.
- Das `nsIBidiKeyboard.haveBidiKeyboards` Attribut wurde hinzugefügt; dies ermöglicht es Ihnen festzustellen, ob das System mindestens eine Tastatur für jede Richtung installiert hat: von links nach rechts und von rechts nach links.
- Das neue `nsIEditor.isSelectionEditable` Attribut lässt Sie feststellen, ob der aktuelle Auswahlanker bearbeitbar ist. Dies unterstützt Fälle, in denen nur Teile des Dokuments bearbeitbar sind, indem Sie sehen können, ob die aktuelle Auswahl in einem bearbeitbaren Abschnitt ist.
- Die Methoden `nsIBrowserHistory.registerOpenPage()` und `nsIBrowserHistory.unregisterOpenPage()` wurden im Rahmen einer Leistungsüberholung im Places-System entfernt. Sie können stattdessen die entsprechenden Methoden in `mozIPlacesAutoComplete` verwenden.
- Die Methode `nsIDOMWindowUtils.wrapDOMFile()` wurde hinzugefügt; diese gibt ein DOM [`File`](/de/docs/Web/API/File) Objekt für eine gegebene `nsIFile` zurück.
- Die Methode `nsIChromeFrameMessageManager.removeDelayedFrameScript()` wurde hinzugefügt, um Entfernen von verzögerten Ladeskripten zu unterstützen. Bootstrap-Add-ons sollten dies beim Herunterfahren verwenden, um alle Skripte, die es mit `nsIChromeFrameMessageManager.loadFrameScript()` geladen hat, mit dem verzögerten Ladeflag zu entfernen. Dies wird Add-ons als `browser.messageManager.removeDelayedFrameScript()` offengelegt.
- Die `nsIAppStartup` Schnittstelle hat ein neues `interrupted` Attribut, das Ihnen mitteilt, ob der Startprozess irgendwann durch eine interaktive Aufforderung unterbrochen wurde. Dies kann hilfreich sein, um beispielsweise Startvorgänge während der Leistungsmessung zu zeitlich bestimmen, um Zahlen aus Sitzungen auszuschließen, die unterbrochen wurden.
- Die `nsIEditorSpellCheck` Schnittstelle wurde überarbeitet, um die Auswahl von Rechtschreibprüfungswörterbüchern pro Website zu unterstützen.

### IDL-Parser

Der IDL-Parser unterstützt nicht mehr den niemals vollständig implementierten Begriff einzigartiger Zeiger.

### Änderungen am Build-System

- Die `--enable-application=standalone` Option für den Bau von standalone XPConnect wurde entfernt; sie hat ohnehin seit 2007 nicht mehr funktioniert.
- Die Unterstützung zum Bauen von eigenständigem Necko und Transformiix XSLT wurde entfernt; sie können nicht mehr `--enable-application=network` oder `--enable-application=content/xslt` verwenden.
- Das Build-System sucht jetzt `.mozconfig` bei `$topsrcdir/.mozconfig` oder `$topsrcdir/mozconfig`, und nirgendwo sonst, es sei denn, Sie überschreiben den `.mozconfig` Pfad mithilfe der `MOZCONFIG` Umgebungsvariable.
- Das `xpidl` Dienstprogramm wurde im SDK durch `pyxpidl` ersetzt.

### Sonstige Änderungen

- Der Rechtschreibprüfer hat nicht mehr die willkürliche 130-Zeichen-Grenze für die Länge von Wörtern, die er versuchen wird, zu prüfen. Diese Grenze war zuvor vorhanden, um Abstürze zu verhindern, die im Rechtschreibprüfer auftraten, aber die zugrunde liegenden Fehler wurden inzwischen behoben.
- Sie können jetzt Komponenten registrieren, um dem [`window.navigator`](/de/docs/Web/API/Window/navigator) Objekt Funktionen hinzuzufügen, indem Sie die Kategorie "JavaScript-navigator-property" verwenden.

## Siehe auch

{{Firefox_for_developers}}

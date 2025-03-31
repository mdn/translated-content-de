---
title: Firefox 9 für Entwickler
slug: Mozilla/Firefox/Releases/9
l10n:
  sourceCommit: 5ae01a458eced9772d628f91d035ada423cd073c
---

{{FirefoxSidebar}}

Firefox 9 wurde für Windows am 20. Dezember 2011 veröffentlicht. Die Mac- und Linux-Version 9.0.1, die einen in letzter Minute entdeckten Absturzfehler behebt, wurde am 21. Dezember 2011 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das `value` Attribut des {{ HTMLElement("li") }} kann jetzt negativ sein. Bisher wurden negative Werte in 0 umgewandelt.
- Sie können nun [die Start- und Stopzeit von Medien](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio#specifying_playback_range) in der URI der Medien festlegen, wenn Sie {{ HTMLElement("audio") }} und {{ HTMLElement("video") }} Elemente verwenden.
- {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }} Elemente [respektieren jetzt den Wert des `lang` Attributs](/de/docs/Web/HTML/Global_attributes/spellcheck#controlling_the_spellchecker_language), wenn der Rechtschreibprüfer aufgerufen wird.
- Firefox auf Android ermöglicht es Benutzern jetzt, Fotos mit der Kamera ihres Telefons aufzunehmen, ohne den Browser zu verlassen, wenn das {{ HTMLElement("input") }} Element mit `type="file"` und `accept="image/*"` verwendet wird.
- PNG ICO-Bilder im Windows Vista-Stil werden jetzt unterstützt.
- Das Zeichnen von Bildern, die das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut verwenden, um CORS-Zugriff anzufordern, führt nicht länger [fälschlicherweise zu einer Verfälschung des Canvas](/de/docs/Web/HTML/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f), wenn CORS gewährt wird.
- Der Wert des [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan) Attributs kann nun bis zu 65.534 betragen, zuvor lag das Limit bei 8190.

### CSS

- Die {{ cssxref("font-stretch") }} Eigenschaft wird jetzt unterstützt.
- Die {{ cssxref("columns") }} Eigenschaft wird jetzt unterstützt, mit dem `-moz` Präfix. Dies ist eine Kurzform für die folgenden Eigenschaften: {{ cssxref("column-width") }} und {{ cssxref("column-count") }}.
- Wenn ein mit dem {{ HTMLElement("link") }} Element inkludiertes Stylesheet vollständig geladen und geparst wurde (aber noch nicht auf das Dokument angewendet wurde), wird nun ein [`load` Ereignis](/de/docs/Web/HTML/Element/link#stylesheet_load_events) ausgelöst. Auch bei einem Fehler beim Verarbeiten eines Stylesheets wird ein `error` Ereignis ausgelöst.
- Sie können jetzt Überlaufeinstellungen sowohl für die linke als auch die rechte Kante von Inhalten mit einer neuen Zweisyntax für die {{ cssxref("text-overflow") }} angeben.

### JavaScript

_Keine Änderungen._

### DOM

- [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API)
  - : Die neue Fullscreen-API bietet eine Möglichkeit, Inhalte über den gesamten Bildschirm darzustellen, ohne Browser-Schnittstelle. Dies ist großartig für Videos und Spiele. Diese API ist derzeit experimentell und mit Präfix versehen.

<!---->

- Die [`Node.contains()`](/de/docs/Web/API/Node/contains) Methode ist jetzt implementiert; diese ermöglicht es Ihnen, zu bestimmen, ob ein bestimmter Knoten ein Nachkomme eines anderen Knotens ist.
- Das [`Node.parentElement`](/de/docs/Web/API/Node/parentElement) Attribut wurde implementiert; es gibt das übergeordnete [`Element`](/de/docs/Web/API/Element) eines DOM-Knotens zurück oder `null`, wenn das übergeordnete Element kein Element ist.
- DOM Level 3 [Composition-Ereignisse](/de/docs/Web/API/CompositionEvent) werden jetzt unterstützt.
- Das [`Document.scripts`](/de/docs/Web/API/Document/scripts) Attribut wurde implementiert; es gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) aller {{ HTMLElement("script") }} Elemente im Dokument zurück.
- Die [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) Methode wurde implementiert.
- Der Satz von Ereignissen, die auf {{ HTMLElement("body") }} Elementen abgehört werden können, wurde überarbeitet, um mit dem neuesten Entwurf der HTML5-Spezifikation übereinzustimmen. Die Liste der Ereignisse in der [DOM-Ereignisreferenz](/de/docs/Web/Events) zeigt, welche Ereignisse auf {{ HTMLElement("body") }} abgehört werden können.
- Das `readystatechange` Ereignis wird nun, wie vorgesehen, nur noch auf dem [`Document`](/de/docs/Web/API/Document) ausgelöst.
- Ereignis-Handler werden nun als Standard-IDL-Schnittstellen implementiert. In den meisten Fällen wirkt sich dies nicht auf den Inhalt aus, es gibt jedoch Ausnahmen.
- Ein neuer Antworttyp, `"moz-json"`, wurde zu `XMLHttpRequest` hinzugefügt, wodurch `XMLHttpRequest` automatisch {{Glossary("JSON", "JSON")}} Zeichenfolgen für Sie parsen kann; wenn Sie diesen Typ anfordern, wird eine zurückgegebene JSON-Zeichenfolge geparst, sodass der Wert der `response` Eigenschaft das resultierende JavaScript-Objekt ist.
- [`XMLHttpRequest` "progress" Ereignisse](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress) werden jetzt zuverlässig für jedes empfangene Datenstück gesendet; in der Vergangenheit war es möglich, dass das letzte empfangene Datenstück kein "progress" Ereignis auslöste. Jetzt können Sie den Fortschritt nur durch Verfolgen von "progress" Ereignissen erfassen, und müssen nicht mehr auch "load" Ereignisse überwachen, um den Empfang des letzten Datenstücks zu erkennen.
- In der Vergangenheit führte der Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mit einem `null` Listener zu einer Ausnahme. Jetzt kehrt es ohne Fehler und ohne Effekt zurück.
- Die neue [`navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) Eigenschaft ermöglicht es Ihren Inhalten, einfach zu bestimmen, ob der Benutzer seine Präferenz zum Nichtverfolgen aktiviert hat; wenn dieser Wert "yes" ist, sollten Sie den Benutzer nicht verfolgen.
- [`Range`](/de/docs/Web/API/Range) und [`Selection`](/de/docs/Web/API/Selection) Objekte verhalten sich jetzt gemäß ihren Spezifikationen, wenn [`splitText()`](/de/docs/Web/API/Text/splitText) und [`normalize()`](/de/docs/Web/API/Node/normalize) aufgerufen werden.
- Der Wert von [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) für Doctype-Knoten ist jetzt das Dokument, auf dem [`createDocumentType()`](/de/docs/Web/API/DOMImplementation/createDocumentType) aufgerufen wurde, um den Knoten zu erstellen, anstatt `null`.
- `window.navigator.taintEnabled` wurde entfernt; es wurde seit vielen Jahren nicht mehr unterstützt.

### Workers

- In Blob-URLs implementierte Worker waren in Firefox 8 fehlerhaft und funktionieren ab Firefox 9 wieder.

### WebGL

- Die [WebGL](/de/docs/Web/API/WebGL_API) Kontextattribute `drawingBufferWidth` und `drawingBufferHeight` werden jetzt unterstützt.

### MathML

- Der nicht standardisierte `restyle` Wert für das `actiontype` Attribut auf {{ MathMLElement("maction") }} Elementen wurde entfernt.
- Obwohl weiterhin nicht unterstützt, wird die Verwendung des `mlabeledtr` Elements nicht länger das Rendering vollständig unterbrechen. Siehe [Firefox-Bug 689641](https://bugzil.la/689641) für Fortschritte bei der tatsächlichen Unterstützung dieses Elements.

### Networking

- Sie können jetzt den Inhalt von [JavaScript typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) (d.h. den Inhalt eines [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) Objekts) [mithilfe von XMLHttpRequest senden](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#sending_typed_arrays_as_binary_data).
- WebSocket-Verbindungen erlauben jetzt Nicht-Zeichen in ansonsten gültigen UTF-8-Datenrahmen statt zu fehlschlagen.
- Der HTTP `Accept` Header für XSLT-Anfragen wurde der Einfachheit halber auf `*/*` geändert. Da das Abrufen von XSLT ohnehin immer auf `*/*` zurückgefallen ist, ergab es Sinn, die anfängliche Anfrage zu vereinfachen.
- Serverversuche, den Benutzer mit den Antwortcodes `301 Moved Permanently` oder `307 Temporary Redirect` auf eine `javascript:` URI umzuleiten, [führen jetzt zu einem "bad connection" Fehler](/de/docs/Web/HTTP#more_on_redirection_responses) statt tatsächlich umzuleiten. Dies verhindert bestimmte Arten von Cross-Site-Scripting-Angriffen.
- Inhalte, die mit einer leeren {{ HTTPHeader("Content-Disposition") }} gesendet werden, wurden bisher so behandelt, als ob die {{ HTTPHeader("Content-Disposition") }} "attachment" wäre; dies funktionierte nicht immer wie erwartet. Diese werden jetzt so behandelt, als ob die {{ HTTPHeader("Content-Disposition") }} "inline" wäre.
- Die Standard-Höchstgröße eines Elements im Disk-Cache wurde auf 50 MB erhöht; zuvor wurden nur Elemente bis zu 5 MB zwischengespeichert.

### Entwicklerwerkzeuge

- Die Web-Konsole unterstützt jetzt grundlegende [String-Ersetzungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#string-substitutions) in ihren Logging-Methoden.
- Sie können jetzt [visuell verschachtelte Ausgabeblöcke](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#using-groups-in-the-console) in der Web-Konsole erstellen, um die Lesbarkeit zu verbessern.

## Änderungen für Mozilla und Add-on Entwickler

Siehe [Aktualisieren von Add-ons für Firefox 9](/de/docs/Mozilla/Firefox/Releases/9/Updating_add-ons) für einen Überblick über die Änderungen, die Sie möglicherweise vornehmen müssen, damit Ihre Add-ons in Firefox 9 funktionieren.

### XUL

- Das `<xul:tab>` Element hat jetzt ein `pending` Attribut, dessen Wert `true` ist, wenn der Tab momentan vom Sitzungsdienst wiederhergestellt wird. Dies kann für die Stilgestaltung des Tabs in Themes verwendet werden. Das Attribut ist auf Tabs, die nicht ausstehend sind, nicht vorhanden.
- Das `<xul:tab>` Element hat jetzt ein `unread` Attribut, dessen Wert `true` ist, wenn sich der Tab seit dem letzten Mal, als er der aktive Tab war, geändert hat oder wenn er seit Beginn der aktuellen Sitzung nicht ausgewählt wurde. Das Attribut ist auf Tabs, die nicht ungelesen sind, nicht vorhanden.
- Sie können jetzt ein `<xul:panel>` als Ziehbild für DOM Drag-and-Drop-Operationen verwenden. Dies ermöglicht es Ihnen, die Standard-Drag & Drop-API für [Drag & Drop von XUL-Inhalten](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#using_xul_panels_as_drag_images) zu verwenden.
- Die `appendNotification` Methode des `<xul:notificationbox>` Elements ermöglicht es Ihnen jetzt, einen Callback zu spezifizieren, der für interessante Ereignisse im Zusammenhang mit dem Notificationbox aufgerufen wird. Derzeit ist das einzige Ereignis "removed", das Ihnen mitteilt, dass der Kasten aus seinem Fenster entfernt wurde.

### Änderungen im JavaScript-Code-Modul

- `FileUtils.jsm` hat jetzt einen `File` Konstruktor, der ein `nsIFile` Objekt zurückgibt, das eine Datei darstellt, die durch ihren Pfadnamen spezifiziert ist.

### Dienständerungen

- Der Inhaltspräferenzdienst unterstützt jetzt das private Browsing (siehe [Firefox-Bug 679784](https://bugzil.la/679784)).

### NSPR

- NSPR hat jetzt ein "append" Modul, das Ihnen erlaubt, neue Daten an das Ende eines bestehenden Logs anzufügen.

### Schnittstellenänderungen

#### Entfernte Schnittstellen

- `nsIGlobalHistory3` wurde während der Bereinigung des Places- und DocShell-Codes entfernt.

#### Verschiedene Schnittstellenänderungen

- Die `nsISound` Schnittstelle hat eine neue Konstante, `EVENT_EDITOR_MAX_LEN`. Dies ermöglicht das Abspielen des Systemgeräuschs, wenn mehr Zeichen als die maximal erlaubten in ein Textfeld eingegeben werden. Derzeit wird dies nur auf Windows verwendet.
- Die `nsIScriptError2` Schnittstelle hat neue Eigenschaften `timeStamp` und `innerWindowID`; außerdem nimmt die `initWithWindowID()` Methode jetzt eine innere Fenster-ID anstelle einer äußeren Fenster-ID.
- Das `nsIBidiKeyboard.haveBidiKeyboards` Attribut wurde hinzugefügt; dieses erlaubt Ihnen zu bestimmen, ob das System mindestens eine Tastatur für jede Richtung installiert hat: von links nach rechts und von rechts nach links.
- Das neue `nsIEditor.isSelectionEditable` Attribut ermöglicht es Ihnen zu bestimmen, ob der aktuelle Auswahlanker bearbeitbar ist. Dies hilft, Fälle zu unterstützen, in denen nur Teile des Dokuments bearbeitbar sind, indem Sie sehen können, ob die aktuelle Auswahl in einem bearbeitbaren Abschnitt ist.
- Die Methoden `nsIBrowserHistory.registerOpenPage()` und `nsIBrowserHistory.unregisterOpenPage()` wurden im Rahmen einer Leistungsüberholung im Places-System entfernt. Sie können stattdessen die entsprechenden Methoden in `mozIPlacesAutoComplete` verwenden.
- Die `nsIDOMWindowUtils.wrapDOMFile()` Methode wurde hinzugefügt; diese gibt ein DOM [`File`](/de/docs/Web/API/File) Objekt für eine gegebene `nsIFile` zurück.
- Die `nsIChromeFrameMessageManager.removeDelayedFrameScript()` Methode wurde hinzugefügt, um das Entfernen von verzögert geladenen Skripten zu unterstützen. Bootstrap-Add-ons sollten dies beim Herunterfahren verwenden, um alle Skripte zu entfernen, die sie mit `nsIChromeFrameMessageManager.loadFrameScript()` mit gesetztem verzögerten Lade-Flag geladen haben. Dies wird für Add-ons als `browser.messageManager.removeDelayedFrameScript()` bereitgestellt.
- Die `nsIAppStartup` Schnittstelle hat ein neues `interrupted` Attribut, das Ihnen mitteilt, ob der Startprozess zu irgendeinem Zeitpunkt durch eine interaktive Eingabeaufforderung unterbrochen wurde. Dies kann hilfreich sein, zum Beispiel beim Timing von Starts während der Leistungsauswertung, um Zahlen aus Sitzungen ausschließen zu können, die unterbrochen wurden.
- Die `nsIEditorSpellCheck` Schnittstelle wurde überarbeitet, um die Auswahl von Rechtschreibprüfer-Dictionaries pro Website zu unterstützen.

### IDL-Parser

Der IDL-Parser unterstützt nicht länger die nie vollständig implementierte Vorstellung von eindeutigen Zeigern.

### Änderungen im Build-System

- Die `--enable-application=standalone` Option zum Erstellen von XPConnect als eigenständige Anwendung wurde entfernt; es hat seit 2007 ohnehin nicht funktioniert.
- Die Unterstützung für den eigenständigen Aufbau von Necko und Transformiix XSLT wurde entfernt; Sie können `--enable-application=network` oder `--enable-application=content/xslt` nicht mehr verwenden.
- Das Build-System sucht jetzt nach `.mozconfig` unter `$topsrcdir/.mozconfig` oder `$topsrcdir/mozconfig` und nirgendwo anders, es sei denn, Sie überschreiben den `.mozconfig` Pfad mit der Umgebungsvariable `MOZCONFIG`.
- Das `xpidl` Dienstprogramm wurde im SDK durch `pyxpidl` ersetzt.

### Weitere Änderungen

- Der Rechtschreibprüfer hat nicht mehr ein willkürliches Limit von 130 Zeichen für die Wortlänge, dessen Worte er auf Rechtschreibung überprüfen würde. Dieses Limit war zuvor zur Vermeidung von Abstürzen im Rechtschreibprüfer vorhanden, aber die zugrunde liegenden Fehler wurden inzwischen behoben.
- Sie können jetzt Komponenten registrieren, um Funktionen zum [`window.navigator`](/de/docs/Web/API/Window/navigator) Objekt hinzuzufügen, indem Sie die Kategorie "JavaScript-navigator-property" verwenden.

## Siehe auch

{{Firefox_for_developers}}

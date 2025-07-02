---
title: Firefox 9 für Entwickler
slug: Mozilla/Firefox/Releases/9
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 9 wurde am 20. Dezember 2011 für Windows veröffentlicht. Die Mac- und Linux-Version 9.0.1, die einen in letzter Minute entdeckten Absturzfehler behebt, wurden am 21. Dezember 2011 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das `value`-Attribut von {{ HTMLElement("li") }} kann nun negativ sein. Zuvor wurden negative Werte auf 0 konvertiert.
- Sie können nun [die Start- und Stoppzeit von Medien im URI](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio#specifying_playback_range) angeben, wenn Sie die {{ HTMLElement("audio") }}- und {{ HTMLElement("video") }}-Elemente verwenden.
- Die {{ HTMLElement("input") }}- und {{ HTMLElement("textarea") }}-Elemente [respektieren jetzt den Wert des `lang`-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck#controlling_the_spellchecker_language), wenn sie den Rechtschreibprüfer aufrufen.
- Firefox auf Android ermöglicht es Nutzern nun, ohne den Browser zu verlassen Fotos mit der Handykamera aufzunehmen, wenn das {{ HTMLElement("input") }}-Element mit `type="file"` und `accept="image/*"` verwendet wird.
- Windows Vista Stil PNG ICO Bilder werden jetzt unterstützt.
- Das Zeichnen von Bildern, die das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut verwenden, um CORS-Zugriff anzufordern, führt nicht mehr fälschlicherweise dazu, [das Canvas zu verunreinigen](/de/docs/Web/HTML/How_to/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f), wenn CORS gewährt wird.
- Der Wert des [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan)-Attributs kann nun bis zu 65.534 betragen, vorher war das Limit bei 8190.

### CSS

- Die {{ cssxref("font-stretch") }} Eigenschaft wird jetzt unterstützt.
- Die {{ cssxref("columns") }}-Eigenschaft wird jetzt unterstützt, mit dem `-moz`-Präfix. Dies ist ein Kürzel für die folgenden Eigenschaften: {{ cssxref("column-width") }} und {{ cssxref("column-count") }}.
- Wenn ein über das {{ HTMLElement("link") }}-Element eingebundenes Stylesheet vollständig geladen und geparst (aber noch nicht auf das Dokument angewendet) wurde, wird jetzt ein [`load`-Ereignis](/de/docs/Web/HTML/Reference/Elements/link#stylesheet_load_events) ausgelöst. Tritt beim Verarbeiten eines Stylesheets ein Fehler auf, wird ein `error`-Ereignis ausgelöst.
- Mit einer neuen Zwei-Werte-Syntax können Sie jetzt Überlauf-Einstellungen sowohl für die linke als auch die rechte Kante von Inhalten mit {{ cssxref("text-overflow") }} spezifizieren.

### JavaScript

_Keine Änderungen._

### DOM

- [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API)
  - : Die neue Fullscreen-API bietet eine Möglichkeit, Inhalte im Vollbildmodus ohne Browseroberfläche darzustellen. Dies ist besonders für Video und Spiele geeignet. Diese API ist derzeit experimentell und präfixiert.

<!---->

- Die Methode [`Node.contains()`](/de/docs/Web/API/Node/contains) ist nun implementiert; damit können Sie bestimmen, ob ein bestimmter Knoten ein Nachfahre eines anderen Knotens ist.
- Das Attribut [`Node.parentElement`](/de/docs/Web/API/Node/parentElement) wurde implementiert; dieses gibt das übergeordnete [`Element`](/de/docs/Web/API/Element) eines DOM-Knotens oder `null` zurück, wenn das übergeordnete Element kein Element ist.
- DOM Level 3 [Kompositionsereignisse](/de/docs/Web/API/CompositionEvent) werden nun unterstützt.
- Das Attribut [`Document.scripts`](/de/docs/Web/API/Document/scripts) wurde implementiert; dieses gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) aller {{ HTMLElement("script") }}-Elemente im Dokument zurück.
- Die Methode [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) wurde implementiert.
- Die Menge der Ereignisse, die auf {{ HTMLElement("body") }}-Elementen angehört werden können, wurde aktualisiert, um dem neuesten HTML5-Entwurf zu entsprechen. Die Liste der Ereignisse in der [DOM-Ereignisreferenz](/de/docs/Web/Events) reflektiert, welche Ereignisse auf {{ HTMLElement("body") }} gehört werden können.
- Das `readystatechange`-Ereignis wird jetzt nur noch auf dem [`Document`](/de/docs/Web/API/Document) ausgelöst, wie beabsichtigt.
- Ereignishandler sind jetzt als standardmäßige IDL-Schnittstellen implementiert. In den meisten Fällen wird dies keine Auswirkungen auf Inhalte haben, aber es gibt Ausnahmen.
- Ein neuer Antworttyp, `"moz-json"`, wurde zu `XMLHttpRequest` hinzugefügt, sodass `XMLHttpRequest` JSON-Strings automatisch für Sie parst; wenn Sie diesen Typ anfordern, wird ein zurückgegebener JSON-String geparsed, sodass der Wert der `response`-Eigenschaft das resultierende JavaScript-Objekt ist.
- [`XMLHttpRequest` "progress" Ereignisse](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress) werden nun zuverlässig für jedes empfangene Datenstück gesendet; in der Vergangenheit war es möglich, dass das letzte empfangene Datenstück kein "progress"-Ereignis auslöste. Jetzt können Sie den Fortschritt nur durch das Verfolgen von "progress"-Ereignissen überwachen, anstatt auch "load"-Ereignisse überwachen zu müssen, um den Empfang des letzten Datenstücks zu erkennen.
- In der Vergangenheit führte der Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mit einem `null`-Listener zu einer Ausnahme. Jetzt wird ohne Fehler und ohne Wirkung zurückgekehrt.
- Die neue Eigenschaft [`navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) lässt den Inhalt leicht feststellen, ob die Benutzer Präferenz "Do Not Track" aktiviert wurde; ist dieser Wert "yes", sollten Sie den Benutzer nicht verfolgen.
- [`Range`](/de/docs/Web/API/Range)- und [`Selection`](/de/docs/Web/API/Selection)-Objekte verhalten sich jetzt gemäß ihren Spezifikationen, wenn [`splitText()`](/de/docs/Web/API/Text/splitText) und [`normalize()`](/de/docs/Web/API/Node/normalize) aufgerufen werden.
- Der Wert von [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) für Doctype-Knoten ist jetzt das Dokument, auf dem [`createDocumentType()`](/de/docs/Web/API/DOMImplementation/createDocumentType) aufgerufen wurde, um den Knoten zu erstellen, anstatt `null`.
- `window.navigator.taintEnabled` wurde entfernt; es wurde seit vielen Jahren nicht mehr unterstützt.

### Workers

- In Blob-URLs implementierte Workers, die in Firefox 8 nicht funktionierten, funktionieren ab Firefox 9 wieder.

### WebGL

- Die [WebGL](/de/docs/Web/API/WebGL_API)-Kontextattribute `drawingBufferWidth` und `drawingBufferHeight` werden jetzt unterstützt.

### MathML

- Der nicht standardmäßige `restyle`-Wert für das `actiontype`-Attribut auf {{ MathMLElement("maction") }}-Elementen wurde entfernt.
- Obwohl immer noch nicht unterstützt, führt die Verwendung des `mlabeledtr`-Elements jetzt nicht mehr dazu, dass das Rendering vollständig fehlschlägt. Siehe [Firefox-Bug 689641](https://bugzil.la/689641) für Fortschritte bei der tatsächlichen Unterstützung dieses Elements.

### Netzwerk

- Sie können nun die Inhalte von [JavaScript typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) (d.h. die Inhalte eines [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)-Objekts) [mit XMLHttpRequest senden](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#sending_typed_arrays_as_binary_data).
- WebSocket-Verbindungen erlauben nun den Empfang von Nicht-Zeichen in sonst gültigen UTF-8-Datenrahmen, anstatt zu fehlschlagen.
- Der HTTP-`Accept`-Header für XSLT-Anfragen wurde aus Einfachheitsgründen in `*/*` geändert. Da das Abrufen von XSLT ohnehin immer auf `*/*` zurückfiel, machte es Sinn, die anfängliche Anfrage zu vereinfachen.
- Versuche eines Servers, die Antwortcodes `301 Moved Permanently` oder `307 Temporary Redirect` zu verwenden, um den Benutzer zu einem `javascript:`-URI umzuleiten, führen jetzt [zu einem "bad connection" Fehler](/de/docs/Web/HTTP#more_on_redirection_responses), anstatt tatsächlich umzuleiten. Dies verhindert bestimmte Arten von Cross-Site-Scripting-Angriffen.
- Inhalte, die mit einem leeren {{ HTTPHeader("Content-Disposition") }} bereitgestellt werden, wurden zuvor so behandelt, als ob das {{ HTTPHeader("Content-Disposition") }} "attachment" wäre; dies funktionierte jedoch nicht immer wie erwartet. Diese werden nun so behandelt, als ob das {{ HTTPHeader("Content-Disposition") }} "inline" wäre.
- Die standardmäßig maximal zulässige Größe eines Elements im Festplatten-Cache wurde auf 50 MB erhöht; zuvor wurden nur Elemente bis zu 5 MB zwischengespeichert.

### Entwicklerwerkzeuge

- Die Webkonsole unterstützt jetzt grundlegende [Zeichenkettenersetzungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#string-substitutions) in ihren Protokollierungsmethoden.
- Sie können jetzt [optisch verschachtelte Ausgabeblöcke](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#using-groups-in-the-console) in der Webkonsole erstellen, um das Lesen zu erleichtern.

## Änderungen für Mozilla- und Add-on-Entwickler

Lesen Sie [Aktualisieren von Add-ons für Firefox 9](/de/docs/Mozilla/Firefox/Releases/9/Updating_add-ons) für einen Überblick über die Änderungen, die Sie möglicherweise vornehmen müssen, um Ihre Add-ons in Firefox 9 funktionsfähig zu machen.

### XUL

- Das `<xul:tab>`-Element hat jetzt ein `pending`-Attribut, dessen Wert `true` ist, wenn der Tab gerade vom Sitzungswiederherstellungsdienst wiederhergestellt wird. Dies kann verwendet werden, um den Tab in Themen zu stylen. Das Attribut ist bei Tabs, die nicht ausstehend sind, nicht vorhanden.
- Das `<xul:tab>`-Element hat jetzt ein `unread`-Attribut, dessen Wert `true` ist, wenn der Tab sich seit dem letzten Mal geändert hat, als er der aktive Tab war, oder wenn er seit Beginn der aktuellen Sitzung nicht ausgewählt wurde. Das Attribut ist bei Tabs, die nicht ungelesen sind, nicht vorhanden.
- Sie können nun ein `<xul:panel>` als Ziehbild für DOM-Drag-and-Drop-Operationen verwenden. Dies ermöglicht es Ihnen, die Standard-Drag&Drop-API für [Drag and Drop von XUL-Inhalten](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#using_xul_panels_as_drag_images) zu verwenden.
- Die Methode `appendNotification` des `<xul:notificationbox>`-Elements ermöglicht es nun, einen Rückruf anzugeben, der für interessante Ereignisse im Zusammenhang mit dem Benachrichtigungskasten aufgerufen wird. Derzeit ist das einzige Ereignis "removed", das Ihnen sagt, dass der Kasten aus seinem Fenster entfernt wurde.

### Änderungen an JavaScript-Code-Modulen

- `FileUtils.jsm` hat jetzt einen `File`-Konstruktor, der ein `nsIFile`-Objekt zurückgibt, das eine durch ihren Pfadnamen spezifizierte Datei darstellt.

### Dienständerungen

- Der Inhaltspräferenzdienst behandelt nun das private Modus-Browsen (siehe [Firefox-Bug 679784](https://bugzil.la/679784)).

### NSPR

- NSPR hat jetzt ein "append"-Modul, das es ermöglicht, neue Daten an das Ende eines bestehenden Protokolls anzuhängen.

### Schnittstellenänderungen

#### Entfernte Schnittstellen

- `nsIGlobalHistory3` wurde während der Vereinfachung des Places- und DocShell-Codes entfernt.

#### Verschiedene Schnittstellenänderungen

- Die `nsISound`-Schnittstelle hat eine neue Konstante, `EVENT_EDITOR_MAX_LEN`. Dies ermöglicht das Abspielen des Systemsounds, wenn mehr Zeichen als die maximal zulässigen in ein Textfeld eingegeben werden. Derzeit wird dies nur unter Windows verwendet.
- Die `nsIScriptError2`-Schnittstelle hat neue `timeStamp`- und `innerWindowID`-Eigenschaften; zusätzlich nimmt die Methode `initWithWindowID()` jetzt eine innere Fenster-ID anstelle einer äußeren Fenster-ID.
- Das Attribut `nsIBidiKeyboard.haveBidiKeyboards` wurde hinzugefügt; damit können Sie feststellen, ob das System mindestens eine Tastatur für jede Richtung installiert hat: von links nach rechts und von rechts nach links.
- Das neue Attribut `nsIEditor.isSelectionEditable` ermöglicht es Ihnen zu bestimmen, ob der aktuelle Auswahlanker bearbeitbar ist. Dies unterstützt Fälle, in denen nur Teile des Dokuments bearbeitbar sind, indem Sie sehen können, ob sich die aktuelle Auswahl in einem bearbeitbaren Abschnitt befindet.
- Die Methoden `nsIBrowserHistory.registerOpenPage()` und `nsIBrowserHistory.unregisterOpenPage()` wurden im Rahmen einer Leistungsüberarbeitung im Places-System entfernt. Sie können stattdessen die entsprechenden Methoden in `mozIPlacesAutoComplete` verwenden.
- Die Methode `nsIDOMWindowUtils.wrapDOMFile()` wurde hinzugefügt; diese gibt ein DOM-[`File`](/de/docs/Web/API/File)-Objekt für ein gegebenes `nsIFile` zurück.
- Die Methode `nsIChromeFrameMessageManager.removeDelayedFrameScript()` wurde hinzugefügt, um das Entfernen von verzögerten Ladeskripten zu unterstützen. Bootstrapped-Add-ons sollten dies beim Herunterfahren verwenden, um alle Skripte zu entfernen, die es mit dem verzögerten Ladeflag geladen hat, indem sie `nsIChromeFrameMessageManager.loadFrameScript()` verwendet haben. Diese Methode ist für Add-ons als `browser.messageManager.removeDelayedFrameScript()` verfügbar.
- Die `nsIAppStartup`-Schnittstelle hat ein neues `interrupted`-Attribut, das Ihnen sagt, ob der Startvorgang jemals durch eine interaktive Aufforderung unterbrochen wurde. Dies kann hilfreich sein, um beispielsweise beim Messen der Startzeiten während der Leistungsbewertung Zahlen von Sitzungen, die unterbrochen wurden, zu ignorieren.
- Die Schnittstelle `nsIEditorSpellCheck` wurde überarbeitet, um die Auswahl von Rechtschreibprüfungswörterbüchern pro Seite zu unterstützen.

### IDL-Parser

Der IDL-Parser unterstützt nicht mehr die nie vollständig umgesetzten einzigartigen Zeiger.

### Änderungen im Build-System

- Die Option `--enable-application=standalone` zum Erstellen eines eigenständigen XPConnect wurde entfernt; sie hat seit 2007 ohnehin nicht mehr funktioniert.
- Die Unterstützung für den eigenständigen Bau von Necko und Transformiix XSLT wurde entfernt; Sie können nicht mehr `--enable-application=network` oder `--enable-application=content/xslt` verwenden.
- Das Build-System sucht nun die `.mozconfig` unter `$topsrcdir/.mozconfig` oder `$topsrcdir/mozconfig` und nirgends sonst, es sei denn, Sie überschreiben den Pfad der `.mozconfig` mit der Umgebungsvariable `MOZCONFIG`.
- Das `xpidl`-Dienstprogramm wurde im SDK durch `pyxpidl` ersetzt.

### Andere Änderungen

- Der Rechtschreibprüfer hat jetzt kein willkürliches 130-Zeichen-Wortlängen-Limit mehr für die Länge von Wörtern, die er zu prüfen versucht. Dieses Limit bestand zuvor, um Abstürze zu verhindern, die bei der Rechtschreibprüfung auftraten, aber die zugrunde liegenden Fehler wurden inzwischen behoben.
- Sie können jetzt Komponenten registrieren, um Funktionen zum [`window.navigator`](/de/docs/Web/API/Window/navigator)-Objekt hinzuzufügen, indem Sie die Kategorie "JavaScript-navigator-property" verwenden.

## Siehe auch

{{Firefox_for_developers}}

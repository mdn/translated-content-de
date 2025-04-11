---
title: Firefox 9 für Entwickler
slug: Mozilla/Firefox/Releases/9
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Firefox 9 wurde für Windows am 20. Dezember 2011 veröffentlicht. Die Version 9.0.1 für Mac und Linux, die einen kurz vor der Veröffentlichung entdeckten Absturzfehler behob, wurde am 21. Dezember 2011 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das `value` Attribut von {{ HTMLElement("li") }} kann nun negativ sein. Bisher wurden negative Werte auf 0 gesetzt.
- Sie können nun [Start- und Stoppzeit von Medien](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio#specifying_playback_range) in der URI des Mediums angeben, wenn Sie {{ HTMLElement("audio") }} und {{ HTMLElement("video") }} Elemente verwenden.
- {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }} Elemente [respektieren nun den Wert des `lang` Attributs](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck#controlling_the_spellchecker_language) beim Aufruf des Rechtschreibprüfers.
- Firefox auf Android ermöglicht es nun Nutzern, Fotos mit der Kamera ihres Telefons aufzunehmen, ohne den Browser zu verlassen, wenn das {{ HTMLElement("input") }} Element mit `type="file"` und `accept="image/*"` verwendet wird.
- PNG-ICO-Bilder im Windows Vista-Stil werden nun unterstützt.
- Das Zeichnen von Bildern, die das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut verwenden, um CORS-Zugriff anzufordern, verfärbt die Leinwand nicht mehr fälschlicherweise [wenn CORS gewährt wird](/de/docs/Web/HTML/How_to/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f).
- Der Wert des [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) Attributs kann nun bis zu 65.534 betragen, im Vergleich zu vorher 8190.

### CSS

- Die {{ cssxref("font-stretch") }} Eigenschaft wird nun unterstützt.
- Die {{ cssxref("columns") }} Eigenschaft wird nun unterstützt, mit dem `-moz` Präfix. Dies ist eine Kurzform für die folgenden Eigenschaften: {{ cssxref("column-width") }} und {{ cssxref("column-count") }}.
- Wenn ein Stylesheet, das mit dem {{ HTMLElement("link") }} Element eingebunden wurde, vollständig geladen und geparst ist (aber noch nicht auf das Dokument angewendet wurde), wird nun ein [`load` Ereignis](/de/docs/Web/HTML/Reference/Elements/link#stylesheet_load_events) ausgelöst. Ebenso wird bei einem Fehler beim Verarbeiten eines Stylesheets ein `error` Ereignis ausgelöst.
- Sie können nun Überlauf-Einstellungen sowohl für den linken als auch den rechten Rand von Inhalten mit einer neuen Zwei-Werte-Syntax für {{ cssxref("text-overflow") }} angeben.

### JavaScript

_Keine Änderungen._

### DOM

- [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API)
  - : Die neue Vollbild-API bietet eine Möglichkeit, Inhalte bildschirmfüllend ohne Browserinterface darzustellen. Dies ist großartig für Videos und Spiele. Diese API ist momentan experimentell und erhält ein Präfix.

<!---->

- Die [`Node.contains()`](/de/docs/Web/API/Node/contains) Methode ist jetzt implementiert; sie ermöglicht es, zu bestimmen, ob ein bestimmter Knoten ein Nachfahre eines anderen Knotens ist.
- Das [`Node.parentElement`](/de/docs/Web/API/Node/parentElement) Attribut wurde implementiert; es gibt das übergeordnete [`Element`](/de/docs/Web/API/Element) eines DOM-Knotens zurück oder `null`, wenn das übergeordnete Element keines ist.
- DOM Level 3 [Entwurfskompositionsereignisse](/de/docs/Web/API/CompositionEvent) werden nun unterstützt.
- Das [`Document.scripts`](/de/docs/Web/API/Document/scripts) Attribut wurde implementiert; es gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) aller {{ HTMLElement("script") }} Elemente im Dokument zurück.
- Die [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) Methode wurde implementiert.
- Die Menge der Ereignisse, die auf {{ HTMLElement("body") }} Elementen abgehört werden können, wurde überarbeitet, um den neuesten Entwurf der HTML5-Spezifikation zu erfüllen. Die Liste der Ereignisse in der [DOM-Ereignisreferenz](/de/docs/Web/Events) spiegelt wider, welche Ereignisse auf {{ HTMLElement("body") }} gehört werden können.
- Das `readystatechange` Ereignis wird nun nur noch auf dem [`Document`](/de/docs/Web/API/Document) ausgelöst, wie vorgesehen.
- Ereignis-Handler sind jetzt als standardmäßige IDL-Schnittstellen implementiert. In den meisten Fällen wirkt sich das nicht auf Inhalte aus, es gibt jedoch Ausnahmen.
- Ein neuer Antworttyp, `"moz-json"`, wurde zu `XMLHttpRequest` hinzugefügt, wodurch `XMLHttpRequest` automatisch {{Glossary("JSON", "JSON")}} Zeichenfolgen für Sie parsen kann; wenn Sie diesen Typ anfordern, wird eine zurückgegebene JSON-Zeichenkette geparst, sodass der Wert der `response` Eigenschaft das resultierende JavaScript-Objekt ist.
- [`XMLHttpRequest` "Progress"-Ereignisse](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress) werden nun zuverlässig für jedes empfangene Datenstück gesendet; in der Vergangenheit war es möglich, dass das letzte empfangene Datenstück kein "Progress"-Ereignis auslöste. Jetzt können Sie den Fortschritt nur noch durch Nachverfolgen von "Progress"-Ereignissen überwachen, anstatt auch "Load"-Ereignisse zu überwachen, um den Erhalt des letzten Datenstücks zu erkennen.
- In der Vergangenheit führte das Aufrufen von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mit einem `null` Listener zu einer Ausnahme. Jetzt kehrt es ohne Fehler und ohne Auswirkung zurück.
- Die neue [`navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) Eigenschaft ermöglicht es Ihnen zu ermitteln, ob der Benutzer seine "Nicht-Verfolgen"-Präferenz aktiviert hat; wenn dieser Wert "yes" ist, sollten Sie den Benutzer nicht verfolgen.
- [`Range`](/de/docs/Web/API/Range) und [`Selection`](/de/docs/Web/API/Selection) Objekte verhalten sich nun gemäß ihrer Spezifikationen, wenn [`splitText()`](/de/docs/Web/API/Text/splitText) und [`normalize()`](/de/docs/Web/API/Node/normalize) aufgerufen werden.
- Der Wert von [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) für Doctyp-Knoten ist nun das Dokument, auf dem [`createDocumentType()`](/de/docs/Web/API/DOMImplementation/createDocumentType) aufgerufen wurde, um den Knoten zu erstellen, anstatt `null`.
- `window.navigator.taintEnabled` wurde entfernt; es wurde seit vielen Jahren nicht mehr unterstützt.

### Arbeiter

- Arbeiter, die in Blob-URLs implementiert sind, waren in Firefox 8 defekt und arbeiten ab Firefox 9 wieder.

### WebGL

- Die [WebGL](/de/docs/Web/API/WebGL_API) Kontext-Attribute `drawingBufferWidth` und `drawingBufferHeight` werden nun unterstützt.

### MathML

- Der nicht standardmäßige `restyle` Wert für das `actiontype` Attribut auf {{ MathMLElement("maction") }} Elementen wurde entfernt.
- Obwohl weiterhin nicht unterstützt, führt die Verwendung des `mlabeledtr` Elements nicht länger dazu, dass das Rendering vollständig unterbrochen wird. Siehe [Firefox-Bug 689641](https://bugzil.la/689641) für den Fortschritt zur tatsächlichen Unterstützung dieses Elements.

### Netzwerk

- Sie können nun die Inhalte von [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) (d.h. die Inhalte eines [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) Objekts) [mit XMLHttpRequest senden](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#sending_typed_arrays_as_binary_data).
- WebSocket-Verbindungen erlauben nun Nicht-Zeichen in ansonsten gültigen UTF-8-Datenrahmen, anstatt zu scheitern.
- Der HTTP `Accept` Header für XSLT-Anfragen wurde aus Einfachheitsgründen auf `*/*` geändert. Da das Abrufen von XSLT sowieso immer auf `*/*` zurückgefallen ist, machte es Sinn, die anfängliche Anfrage zu vereinfachen.
- Versuche eines Servers, die Antwortcodes `301 Moved Permanently` oder `307 Temporary Redirect` zu verwenden, um den Nutzer zu einer `javascript:` URI umzuleiten, führen nun zu einem [„schlechter Verbindungs”-Fehler](/de/docs/Web/HTTP#more_on_redirection_responses), anstatt tatsächlich umgeleitet zu werden. Dies verhindert bestimmte Arten von Cross-Site-Scripting-Angriffen.
- Inhalte, die mit einem leeren {{ HTTPHeader("Content-Disposition") }} serviert wurden, wurden zuvor behandelt, als wäre {{ HTTPHeader("Content-Disposition") }} "attachment"; das funktionierte nicht immer wie erwartet. Diese werden nun behandelt, als wäre {{ HTTPHeader("Content-Disposition") }} "inline".
- Die standardmäßige maximale Größe eines Elements im Festplattencache wurde auf 50 MB erhöht; zuvor wurden nur Elemente bis zu 5 MB zwischengespeichert.

### Entwickler-Tools

- Die Webkonsole unterstützt nun grundlegende [Zeichenfolgenersetzungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#string-substitutions) in ihren Protokollierungsmethoden.
- Sie können nun [visuell verschachtelte Ausgabeblöcke erstellen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#using-groups-in-the-console) in der Webkonsole, um das Lesen zu erleichtern.

## Änderungen für Mozilla- und Add-on-Entwickler

Sehen Sie [Aktualisieren von Add-ons für Firefox 9](/de/docs/Mozilla/Firefox/Releases/9/Updating_add-ons) für einen Überblick über die Änderungen, die Sie möglicherweise vornehmen müssen, um Ihre Add-ons in Firefox 9 funktionsfähig zu machen.

### XUL

- Das `<xul:tab>` Element hat nun ein `pending` Attribut, dessen Wert `true` ist, wenn der Tab gerade vom Sitzungsmanager wiederhergestellt wird. Es kann zum Stylen des Tabs in Themes verwendet werden. Das Attribut ist bei nicht ausstehenden Tabs nicht vorhanden.
- Das `<xul:tab>` Element hat nun ein `unread` Attribut, dessen Wert `true` ist, wenn sich der Tab geändert hat, seit er das letzte Mal der aktive Tab war oder wenn er nicht ausgewählt wurde, seit die aktuelle Sitzung begonnen hat. Das Attribut ist bei Tabs, die nicht ungelesen sind, nicht vorhanden.
- Sie können nun ein `<xul:panel>` als Ziehbild für DOM-Drag-and-Drop-Operationen verwenden. Dies ermöglicht es Ihnen, die Standard-Drag & Drop API für [Drag-and-Drop von XUL-Inhalten](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#using_xul_panels_as_drag_images) zu verwenden.
- Die Methode `appendNotification` des `<xul:notificationbox>` Elements ermöglicht es Ihnen nun, einen Rückruf zu bestimmen, der für interessante Ereignisse im Zusammenhang mit dem Notification Box aufgerufen wird. Derzeit ist das einzige Ereignis "removed", das Ihnen mitteilt, dass die Box aus ihrem Fenster entfernt wurde.

### Änderungen im JavaScript-Codemodul

- `FileUtils.jsm` hat nun einen `File` Konstruktor, der ein `nsIFile` Objekt zurückgibt, das eine Datei repräsentiert, die durch ihren Pfadnamen spezifiziert wird.

### Dienständerungen

- Der Inhaltspräferenzdienst unterstützt jetzt das private Browsen (siehe [Firefox-Bug 679784](https://bugzil.la/679784)).

### NSPR

- NSPR hat jetzt ein "append" Modul, das Ihnen ermöglicht, neue Daten an das Ende eines bestehenden Protokolls anzufügen.

### Schnittstellenänderungen

#### Entfernte Schnittstellen

- `nsIGlobalHistory3` wurde bei der Straffung des Places und DocShell Codes entfernt.

#### Verschiedene Schnittstellenänderungen

- Die `nsISound` Schnittstelle hat eine neue Konstante, `EVENT_EDITOR_MAX_LEN`. Diese ermöglicht das Abspielen des Systemklangs, wenn mehr Zeichen als das maximal erlaubte in ein Textfeld eingegeben werden. Derzeit wird dies nur auf Windows verwendet.
- Die `nsIScriptError2` Schnittstelle hat neue `timeStamp` und `innerWindowID` Eigenschaften; außerdem nimmt die Methode `initWithWindowID()` jetzt eine inner window ID anstelle einer outer window ID.
- Das `nsIBidiKeyboard.haveBidiKeyboards` Attribut wurde hinzugefügt; damit können Sie erkennen, ob das System mindestens eine Tastatur für jede Richtung installiert hat: von links nach rechts und von rechts nach links.
- Das neue `nsIEditor.isSelectionEditable` Attribut ermöglicht Ihnen zu bestimmen, ob der aktuelle Auswahlanker bearbeitbar ist. Dies hilft, Fälle zu unterstützen, in denen nur Teile des Dokuments bearbeitbar sind, indem Sie sehen können, ob die aktuelle Auswahl in einem bearbeitbaren Abschnitt liegt.
- Die Methoden `nsIBrowserHistory.registerOpenPage()` und `nsIBrowserHistory.unregisterOpenPage()` wurden im Rahmen einer Leistungsüberarbeitung im Places-System entfernt. Sie können stattdessen die entsprechenden Methoden in `mozIPlacesAutoComplete` verwenden.
- Die Methode `nsIDOMWindowUtils.wrapDOMFile()` wurde hinzugefügt; sie gibt ein DOM [`File`](/de/docs/Web/API/File) Objekt für eine gegebene `nsIFile` zurück.
- Die Methode `nsIChromeFrameMessageManager.removeDelayedFrameScript()` wurde hinzugefügt, um das Entfernen von verzögerten Ladeskripten zu unterstützen. Bootstrapped Add-ons sollten diese Methode beim Shutdown verwenden, um alle Skripte zu entfernen, die sie mit `nsIChromeFrameMessageManager.loadFrameScript()` unter Verwendung der verzögerten Ladeflagge geladen haben. Dies wird Add-ons als `browser.messageManager.removeDelayedFrameScript()` zugänglich gemacht.
- Die `nsIAppStartup` Schnittstelle hat ein neues `interrupted` Attribut, das Ihnen mitteilt, ob der Startvorgang zu irgendeinem Zeitpunkt durch ein interaktives Prompt unterbrochen wurde. Dies kann beispielsweise hilfreich sein, wenn Startup-Zeiten bei einer Leistungsbewertung gemessen werden, um Zahlen aus Sitzungen, die unterbrochen wurden, auszuschließen.
- Die `nsIEditorSpellCheck` Schnittstelle wurde überarbeitet, um die Auswahl von Rechtschreibprüfer-Dictionaries pro Site zu unterstützen.

### IDL-Parser

Der IDL-Parser unterstützt nicht mehr das nie vollständig implementierte Konzept der eindeutigen Zeiger.

### Änderungen im Buildsystem

- Die Option `--enable-application=standalone` zum Erstellen von eigenständigen XPConnect wurde entfernt; sie funktionierte sowieso seit 2007 nicht mehr.
- Die Unterstützung für den eigenständigen Bau von Necko und Transformiix XSLT wurde entfernt; Sie können `--enable-application=network` oder `--enable-application=content/xslt` nicht mehr verwenden.
- Das Buildsystem sucht nun nach `.mozconfig` unter `$topsrcdir/.mozconfig` oder `$topsrcdir/mozconfig`, und nirgendwo anders, es sei denn, Sie überschreiben den `.mozconfig` Pfad mit der `MOZCONFIG` Umgebungsvariable.
- Das `xpidl` Dienstprogramm wurde im SDK durch `pyxpidl` ersetzt.

### Weitere Änderungen

- Der Rechtschreibprüfer hat nicht mehr das willkürliche 130-Zeichen-Wortlängenlimit für die Länge der Wörter, die er auf Rechtschreibfehler überprüft. Dieses Limit war zuvor vorhanden, um Abstürze zu verhindern, die in der Rechtschreibprüfung auftraten; die zugrunde liegenden Bugs wurden inzwischen behoben.
- Sie können nun Komponenten registrieren, um Funktionen zum [`window.navigator`](/de/docs/Web/API/Window/navigator) Objekt hinzuzufügen, indem Sie die Kategorie "JavaScript-navigator-property" verwenden.

## Siehe auch

{{Firefox_for_developers}}

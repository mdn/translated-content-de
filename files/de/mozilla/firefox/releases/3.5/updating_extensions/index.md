---
title: Aktualisieren von Erweiterungen für Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5/Updating_extensions
l10n:
  sourceCommit: f0f30c318c2a318552a753759fa0a09f6690f2a5
---

{{FirefoxSidebar}}

Dieser Artikel bietet hilfreiche Informationen für Erweiterungsentwickler, die versuchen, ihre Erweiterungen so zu aktualisieren, dass sie ordnungsgemäß in Firefox 3.5 funktionieren.

## Update-Grundlagen

Dieser Abschnitt behandelt die Grundlagen, die Sie beachten müssen, wann immer Sie eine Erweiterung für eine neue Version von Firefox aktualisieren.

### Testen Sie Ihre Erweiterung

Beginnen Sie damit, die Datei `install.rdf` Ihrer Erweiterung zu bearbeiten, indem Sie `maxVersion` auf 3.5b4 (wenn Sie mit Firefox 3.5 Beta 4 testen) aktualisieren und die `version` Ihrer Erweiterung erhöhen.

Erstellen Sie dann ein neues Firefox-Profil, damit Ihr Testen nicht Ihr übliches Profil gefährdet. Navigieren Sie zum Verzeichnis, das Firefox enthält, und führen Sie folgenden Befehl aus:

```bash
firefox -createProfile testBeta4
```

Auf dem Mac müssen Sie bis in das Firefox-Anwendungspaket navigieren:

```bash
cd /Applications/Firefox.app/Contents/MacOS/
firefox -createProfile testBeta4
```

Starten Sie Firefox mit dem neuen Profil, indem Sie diesen Befehl in der Befehlszeile ausführen:

```bash
firefox -P testBeta4
```

Testen Sie Ihre Erweiterung gründlich. Wir empfehlen, die folgenden Einstellungen auf `true` zu setzen, um auf JavaScript-Warnungen oder -Ausnahmen hingewiesen zu werden:

- `javascript.options.strict`
- `javascript.options.showInConsole`

### Aktualisieren Sie Ihre Erweiterung

Wenn Sie beim Testen auf Probleme stoßen, aktualisieren Sie Ihren Code, um die Probleme zu beheben. Dieser Artikel enthält nützliche Informationen über Punkte, die möglicherweise etwas Arbeit erfordern.

Sobald Sie dies getan haben, versuchen Sie, Ihre Erweiterung erneut zu verwenden, diesmal mit Ihrem regulären Profil. Dies hilft, die Kompatibilität mit vorhandenen gespeicherten Daten sicherzustellen.

### Aktualisieren Sie Ihre Erweiterung auf addons.mozilla.org

Schließlich ist es Zeit, Ihre aktualisierte Erweiterung zu veröffentlichen. Wenn Ihre Erweiterung keine Codeänderungen benötigte, können Sie sich beim AMO-Dashboard anmelden und die Kompatibilitätsversion dort aktualisieren. Andernfalls müssen Sie eine neue Version bei AMO hochladen.

Weitere Informationen finden Sie unter [Einreichen eines Add-ons bei AMO](/de/docs/Submitting_an_add-on_to_AMO).

## Zugriff auf die Places-Datenbank

Vor Firefox 3.5 erforderte der direkte Zugriff auf die Places-Datenbank mit der [Storage API](/de/docs/Storage) ein wenig Trickserei:

```js
var places = Components.classes["@mozilla.org/file/directory_service;1"]
  .getService(Components.interfaces.nsIProperties)
  .get("ProfD", Components.interfaces.nsIFile);
places.append("places.sqlite");
var db = Components.classes["@mozilla.org/storage/service;1"]
  .getService(Components.interfaces.mozIStorageService)
  .openDatabase(places);
```

Damit wird manuell ein Pfad zur `places.sqlite`-Datenbank-Datei erstellt und die Datei dann für den Storage-Zugriff geöffnet.

Firefox 3.5 fügt einen dedizierten Dienst hinzu, der einen bequemen Zugriff auf die Places-Datenbank bietet; die obige Technik funktioniert in Firefox 3.5 oder später nicht mehr.

```js
var db = Components.classes[
  "@mozilla.org/browser/nav-history-service;1"
].getService(Components.interfaces.nsPIPlacesDatabase).DBConnection;
```

## Such-Textboxen

Der [`textbox`](/de/docs/XUL/textbox)-Typ `timed` ist veraltet; stattdessen sollten Sie `search` verwenden.

In Firefox 3 haben Sie möglicherweise folgendes verwendet:

```xml
<textbox type="timed" timeout="1000" oncommand="alert(this.value);"/>
```

In Firefox 3.5 sollten Sie dies ändern zu:

```xml
<textbox type="search" timeout="1000" oncommand="alert(this.value);"/>
```

## JSON

Das JavaScript-Modul JSON.jsm wurde in Firefox 3.5 zugunsten der nativen JSON-Objektunterstützung entfernt. Einzelheiten finden Sie unter [Verwendung von JSON in Firefox](/en-US/Using_native_JSON) und im Artikel über [JSON](/de/docs/Glossary/JSON) für einen allgemeineren Überblick über JSON und dessen Verwendung in verschiedenen Firefox-Versionen.

Um die Kompatibilität sowohl mit Firefox 3 als auch mit Firefox 3.5 sicherzustellen, können Sie Folgendes tun:

```js
if (typeof JSON === "undefined") {
  Components.utils.import("resource://gre/modules/JSON.jsm");
  JSON.parse = JSON.fromString;
  JSON.stringify = JSON.toString;
}
```

Dies funktioniert, indem das JSON.jsm JavaScript-Modul importiert wird, wenn JSON nicht nativ unterstützt wird, und dann die von diesem Modul bereitgestellten Methoden auf die vom nativen JSON verwendeten Methoden abgebildet werden, sodass dieselben Aufrufe funktionieren.

Sie können dieses Problem auch umgehen, indem Sie direkt das `nsIJSON`-Interface verwenden.

## Änderungen an Kontextmenüs

Um die neuen Audio- und Video-Funktionen zu unterstützen, die in Gecko 1.9.1 hinzugefügt wurden, wurde der `imageURL` Getter der `nsContextMenu` Klasse in `mediaURL` umbenannt; jedoch wurde `imageURL` am 9. Juni 2009 wieder hinzugefügt.

## Änderungen an der Chrome-Registrierung

Firefox 3.5 schließt eine Sicherheitslücke, die es möglich machte, Remote-Chrome zu verwenden. Dies wird jede Erweiterung betreffen, die eine Ressource in ihrer `chrome.manifest` Datei enthält, die auf eine Website oder Daten- oder Ressource-URLs verweist. Siehe [Sicherheitsänderungen in Firefox 3.5](/en-US/Security_changes_in_Firefox_3.5) für Details.

## Abrufen eines Load-Kontexts aus einer Anfrage

Früher war es möglich, einen Load-Kontext aus einer Anfrage zu erhalten, indem man verschiedene docShell-APIs abfragte. Insbesondere war es gängige Praxis, `notificationCallbacks.getInterface(nsIDOMWindow)` zu verwenden, um das mit dem Load assoziierte Window-Objekt zu erhalten. Während der ältere Ansatz in einigen Umständen funktionieren mag, wird er nicht mehr empfohlen ([details](https://bugzil.la/457153#c16)).

Die korrekte und zuverlässige Methode dafür besteht darin, ein `nsILoadContext` zu verwenden (siehe die [Schnittstellendefinition](https://searchfox.org/mozilla-central/source/docshell/base/nsILoadContext.idl)).

Von JavaScript aus machen Sie es so:

```js
var loadContext;
try {
  loadContext = aRequest
    .QueryInterface(Components.interfaces.nsIChannel) // aRequest is equivalent to aSubject from observe
    .notificationCallbacks.getInterface(Components.interfaces.nsILoadContext);
} catch (ex) {
  try {
    loadContext = aRequest.loadGroup.notificationCallbacks.getInterface(
      Components.interfaces.nsILoadContext,
    );
  } catch (ex) {
    loadContext = null;
  }
}
// you can now use |loadContext.associatedWindow| to get the Window object
```

Ein weiteres JavaScript-Beispiel, falls das Obige nicht funktioniert:

```js
// SOURCE: http://stackoverflow.com/questions/10719606/is-it-possible-to-know-the-target-domwindow-for-an-httprequest

function getWindowForRequest(request) {
  if (request instanceof Components.interfaces.nsIRequest) {
    try {
      if (request.notificationCallbacks) {
        return request.notificationCallbacks.getInterface(
          Components.interfaces.nsILoadContext,
        ).associatedWindow;
      }
    } catch (e) {}
    try {
      if (request.loadGroup && request.loadGroup.notificationCallbacks) {
        return request.loadGroup.notificationCallbacks.getInterface(
          Components.interfaces.nsILoadContext,
        ).associatedWindow;
      }
    } catch (e) {}
  }
  return null;
}
```

Von C++ aus können Sie es so machen:

```cpp
nsCOMPtr<nsILoadContext> loadContext;
nsCOMPtr<nsIChannel> channel = do_QueryInterface(aRequest);
NS_QueryNotificationCallbacks(channel, loadContext);
```

## Anpassbare Werkzeugleisten

In Firefox 3.5 hat sich das Verhalten der anpassbaren Werkzeugleisten so geändert, dass das `<xul:toolbar/>`-Binding jetzt Werkzeugleisten-Elemente aus der zugehörigen `<xul:toolbarpalette/>` entfernt und sie zur Werkzeugleiste hinzufügt, anstatt sie zu klonen und zur Werkzeugleiste zu kopieren. Das bedeutet, dass die Palette jetzt nur noch Elemente enthält, die nicht auf der Werkzeugleiste vorhanden sind, im Gegensatz zum vorherigen Verhalten, bei dem sie alle anpassbaren Elemente enthielt, unabhängig davon, ob sie auf der Werkzeugleiste angezeigt wurden. Dies könnte Probleme für Add-ons verursachen, die darauf angewiesen sind, alle anpassbaren Werkzeugleisten-Elemente aus der `<xul:toolbarpalette/>` abzurufen oder die versuchen, Elemente dynamisch in die Palette einzufügen, um sie während der Werkzeugleistenanpassung verfügbar zu machen. Weitere Informationen finden Sie in [Firefox Bug 407725](https://bugzil.la/407725) und [Webkit Bug 467045](https://bugzil.la/467045).

## XPCNativeWrapper

Ab Firefox 3.5 können `data:`-Bindings in Chrome-Paketen, die `XPCNativeWrapper`-Automatisierung erhalten, nicht mehr verwendet werden. Dies löst ein potenzielles Sicherheitsproblem.

XUL-Dokumente erhalten nun `XPCNativeWrapper`-Behandlung, sodass Sie jetzt die `getAttribute()`-Methode verwenden müssen, um Attributwerte abzurufen, anstatt sie direkt zu lesen.

Wenn Ihre Erweiterung `xpcnativewrappers=no` verwendet (was sie nicht tun sollte, da es unsicher ist), wird XBL von dieser Erweiterung nicht auf Dokumente angewendet, die `XPCNativeWrapper`-Automatisierung verwenden, beginnend mit Firefox 3.5.

## Neue interessante Fähigkeiten

### Ereignisse auf allen Tabs abhören

Firefox 3.5 führt die Unterstützung für das Hinzufügen und Entfernen von Fortschritts-Listenern ein, die auf alle Tabs lauschen. Siehe [Ereignisse auf allen Tabs abhören](/en-US/Listening_to_events_on_all_tabs) für Details.

## Für Theme-Entwickler

- Prüfen Sie [Theme-Änderungen in Firefox 3.1](/en-US/Theme_changes_in_Firefox_3.1).
- Gehen Sie zum Mozillazine-Forum [Theme-Änderungen für FF3.1](https://forums.mozillazine.org/viewtopic.php?f=18&t=665138), um einen Überblick / eine Liste aller Änderungen zwischen 3.0 und 3.1 zu erhalten, die Theme-Entwickler betreffen. Dies betrifft neue CSS-Funktionen (wie nth-child, -moz-box-shadow usw.), Änderungen an bestehenden Widgets, allgemeine UI-Verbesserungen und neue FF3.1-Funktionen (Audio/Video-Unterstützung, Privates Surfen, erweiterte Sitzungswiederherstellung, Box-/Fenster-/Textschatten).

---
title: Aktualisierung von Erweiterungen für Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5/Updating_extensions
l10n:
  sourceCommit: f0f30c318c2a318552a753759fa0a09f6690f2a5
---

{{FirefoxSidebar}}

Dieser Artikel bietet nützliche Informationen für Entwickler von Erweiterungen, die versuchen, ihre Erweiterungen so zu aktualisieren, dass sie ordnungsgemäß in Firefox 3.5 funktionieren.

## Grundlegende Aktualisierungen

Dieser Abschnitt behandelt die Grundlagen dessen, was Sie tun müssen, wann immer Sie eine Erweiterung für eine neue Version von Firefox aktualisieren.

### Testen Sie Ihre Erweiterung

Beginnen Sie damit, die Datei `install.rdf` Ihrer Erweiterung zu bearbeiten und `maxVersion` auf 3.5b4 (falls Sie auf Firefox 3.5 Beta 4 testen) zu aktualisieren und erhöhen Sie die `version` Ihrer Erweiterung.

Erstellen Sie dann ein neues Firefox-Profil, damit Ihre Tests Ihr gewöhnliches Profil nicht gefährden. Navigieren Sie zum Verzeichnis, das Firefox enthält, und führen Sie den Befehl aus:

```bash
firefox -createProfile testBeta4
```

Auf dem Mac müssen Sie bis in das Anwendungsbundle von Firefox navigieren:

```bash
cd /Applications/Firefox.app/Contents/MacOS/
firefox -createProfile testBeta4
```

Starten Sie Firefox mit dem neuen Profil, indem Sie diesen Befehl in der Befehlszeile ausführen:

```bash
firefox -P testBeta4
```

Testen Sie Ihre Erweiterung gründlich. Wir empfehlen, die folgenden Einstellungen auf `true` zu setzen, um auf JavaScript-Warnungen oder Ausnahmen aufmerksam gemacht zu werden:

- `javascript.options.strict`
- `javascript.options.showInConsole`

### Aktualisieren Sie Ihre Erweiterung

Wenn Sie während des Testens auf Probleme stoßen, aktualisieren Sie Ihren Code, um die Probleme zu beheben. Dieser Artikel enthält nützliche Informationen zu Punkten, die möglicherweise etwas Arbeit erfordern.

Nachdem Sie das getan haben, versuchen Sie, Ihre Erweiterung erneut zu verwenden, diesmal mit Ihrem regulären Profil. Dies hilft dabei, sicherzustellen, dass die Kompatibilität mit allen vorhandenen gespeicherten Daten besteht.

### Aktualisieren Sie Ihre Erweiterung auf addons.mozilla.org

Schließlich ist es Zeit, Ihre aktualisierte Erweiterung zu veröffentlichen. Wenn Ihre Erweiterung keine Codeänderungen benötigt hat, können Sie sich beim AMO-Dashboard anmelden und dort die Kompatibilitätsversion aktualisieren. Andernfalls müssen Sie eine neue Version bei AMO hochladen.

Siehe [Einreichen eines Add-ons bei AMO](/de/docs/Submitting_an_add-on_to_AMO) für weitere Informationen.

## Zugriff auf die Places-Datenbank

Vor Firefox 3.5 erforderte der direkte Zugriff auf die Places-Datenbank mithilfe der [Storage API](/de/docs/Storage) ein wenig Trickserei:

```js
var places = Components.classes["@mozilla.org/file/directory_service;1"]
  .getService(Components.interfaces.nsIProperties)
  .get("ProfD", Components.interfaces.nsIFile);
places.append("places.sqlite");
var db = Components.classes["@mozilla.org/storage/service;1"]
  .getService(Components.interfaces.mozIStorageService)
  .openDatabase(places);
```

Dies baut einen Pfad zur `places.sqlite`-Datenbankdatei manuell auf und öffnet die Datei für den Speicherzugriff.

Firefox 3.5 fügt einen dedizierten Dienst hinzu, der einen bequemen Weg bietet, auf die Places-Datenbank zuzugreifen; die oben genannte Technik funktioniert in Firefox 3.5 oder später nicht.

```js
var db = Components.classes[
  "@mozilla.org/browser/nav-history-service;1"
].getService(Components.interfaces.nsPIPlacesDatabase).DBConnection;
```

## Suche in Textboxen

Der [`textbox`](/de/docs/XUL/textbox) Typ `timed` ist veraltet; stattdessen sollten Sie `search` verwenden.

In Firefox 3 haben Sie möglicherweise verwendet:

```xml
<textbox type="timed" timeout="1000" oncommand="alert(this.value);"/>
```

In Firefox 3.5 sollten Sie dies ändern zu:

```xml
<textbox type="search" timeout="1000" oncommand="alert(this.value);"/>
```

## JSON

Das JavaScript-Modul JSON.jsm wurde in Firefox 3.5 zugunsten der nativen JSON-Objektunterstützung entfernt. Für Details siehe [Verwendung von JSON in Firefox](/en-US/Using_native_JSON) und der Artikel über [JSON](/de/docs/Glossary/JSON) für eine allgemeinere Übersicht über JSON und seine Verwendung in verschiedenen Versionen von Firefox.

Um die Kompatibilität sowohl mit Firefox 3 als auch mit Firefox 3.5 sicherzustellen, können Sie folgendes tun:

```js
if (typeof JSON === "undefined") {
  Components.utils.import("resource://gre/modules/JSON.jsm");
  JSON.parse = JSON.fromString;
  JSON.stringify = JSON.toString;
}
```

Dies funktioniert, indem das JavaScript-Modul JSON.jsm importiert wird, falls JSON nicht nativ unterstützt wird, und die von diesem Modul bereitgestellten Methoden auf die von nativen JSON verwendeten Methoden abgebildet werden, sodass dieselben Aufrufe funktionieren.

Sie können dieses Problem auch umgehen, indem Sie das `nsIJSON`-Interface direkt verwenden.

## Änderungen an Kontextmenüs

Um die neuen Audio- und Videofunktionen in Gecko 1.9.1 zu unterstützen, hat die Klasse `nsContextMenu` den Getter `imageURL` in `mediaURL` umbenannt; jedoch wurde `imageURL` am 9. Juni 2009 wieder hinzugefügt.

## Änderungen an der Chrome-Registrierung

Firefox 3.5 schließt eine Sicherheitslücke, die es ermöglichte, Remote-Chrome zu verwenden. Dies wirkt sich auf jedes Add-on aus, das eine Ressource in seiner `chrome.manifest`-Datei enthält, die auf eine Website, Daten- oder Ressourcen-URLs verweist. Einzelheiten finden Sie unter [Sicherheitsänderungen in Firefox 3.5](/en-US/Security_changes_in_Firefox_3.5).

## Abrufen eines Ladekontexts von einer Anfrage

Früher war es möglich, einen Ladekontext von einer Anfrage zu erhalten, indem Sie verschiedene docShell-APIs abfragen. Insbesondere war es eine gängige Praxis, `notificationCallbacks.getInterface(nsIDOMWindow)` zu verwenden, um das Fensterobjekt zu erhalten, das mit dem Ladevorgang verbunden ist. Obwohl der ältere Ansatz in einigen Fällen funktionieren kann, wird er nicht mehr empfohlen ([Details](https://bugzil.la/457153#c16)).

Der korrekte und zuverlässige Weg, dies zu tun, besteht darin, einen `nsILoadContext` zu verwenden (siehe die [Schnittstellendefinition](https://searchfox.org/mozilla-central/source/docshell/base/nsILoadContext.idl)).

In JavaScript tun Sie dies wie folgt:

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

Ein weiteres JavaScript-Beispiel, falls obiges nicht funktioniert:

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

In C++ tun Sie dies wie folgt:

```cpp
nsCOMPtr<nsILoadContext> loadContext;
nsCOMPtr<nsIChannel> channel = do_QueryInterface(aRequest);
NS_QueryNotificationCallbacks(channel, loadContext);
```

## Anpassbare Symbolleisten

In Firefox 3.5 hat sich das Verhalten anpassbarer Symbolleisten so geändert, dass das `<xul:toolbar/>`-Binding jetzt Symbolleistenelemente aus der zugehörigen `<xul:toolbarpalette/>` entfernt und sie der Symbolleiste hinzufügt, anstatt sie zu klonen und zur Symbolleiste zu kopieren. Dies bedeutet, dass die Palette jetzt nur noch die Elemente enthält, die nicht auf der Symbolleiste vorhanden sind, im Gegensatz zu dem vorherigen Verhalten, bei dem alle anpassbaren Elemente, ob angezeigt oder nicht, in der Symbolleiste zu finden waren. Dies könnte Probleme für Add-ons verursachen, die darauf angewiesen sind, alle anpassbaren Symbolleistenelemente aus der `<xul:toolbarpalette/>` abzurufen oder die versuchen, Elemente dynamisch in die Palette einzufügen, um sie während der Symbolleistenanpassung verfügbar zu machen. Weitere Informationen finden Sie in [Firefox Bug 407725](https://bugzil.la/407725) und [Webkit Bug 467045](https://bugzil.la/467045).

## XPCNativeWrapper

Ab Firefox 3.5 können Sie in Chrome-Paketen, die `XPCNativeWrapper`-Automatisierung erhalten, keine `data:`-Bindings mehr verwenden. Dies löst ein potenzielles Sicherheitsproblem.

XUL-Dokumente erhalten nun eine `XPCNativeWrapper`-Behandlung, sodass Sie jetzt die Methode `getAttribute()` verwenden müssen, um Attributwerte abzurufen, anstatt sie direkt zu lesen.

Wenn Ihre Erweiterung `xpcnativewrappers=no` verwendet (was sie eigentlich nicht tun sollte, da dies nicht sicher ist), wird XBL von dieser Erweiterung nicht auf Dokumente angewendet, die ab Firefox 3.5 die `XPCNativeWrapper`-Automatisierung verwenden.

## Neue interessante Fähigkeiten

### Überwachen von Ereignissen in allen Tabs

Firefox 3.5 führt die Unterstützung für das Hinzufügen und Entfernen von Fortschrittslistening ein, die auf allen Tabs überwachen. Siehe [Überwachen von Ereignissen in allen Tabs](/en-US/Listening_to_events_on_all_tabs) für Details.

## Für Theme-Entwickler

- Überprüfen Sie [Theme-Änderungen in Firefox 3.1](/en-US/Theme_changes_in_Firefox_3.1).
- Besuchen Sie das Mozillazine-Forum [Theme-Änderungen für FF3.1](https://forums.mozillazine.org/viewtopic.php?f=18&t=665138), um eine Übersicht / Liste aller Änderungen zwischen 3.0 und 3.1 zu erhalten, die Theme-Entwickler betreffen. Dies betrifft neue CSS-Funktionen (wie nth-child, -moz-box-shadow usw.), Änderungen an bestehenden Widgets, allgemeine UI-Verbesserungen und neue FF3.1-Funktionen (Audio-/Video-Unterstützung, privates Surfen, erweitertes Sitzungswiederherstellen, Box-/Fenster-/Textschatten).

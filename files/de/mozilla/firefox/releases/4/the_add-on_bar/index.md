---
title: Die Add-on-Leiste
slug: Mozilla/Firefox/Releases/4/The_add-on_bar
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Firefox 4 entfernt die Statusleiste am unteren Rand des Browserfensters zugunsten einer neuen Symbolleiste, die sich am unteren Rand des Fensters befindet. Diese neue Symbolleiste mit der ID "addon-bar" ist eine standardmäßige XUL-`<toolbar>`; Add-ons können Inhalt darin einfügen, und der Benutzer kann beim Anpassen ihrer Symbolleisten Schaltflächen hineinziehen. Dies ist der Hauptunterschied zwischen der Add-on-Leiste und der alten Statusleiste; Sie können jetzt jedes XUL-Element darin platzieren, da es eine standardmäßige Symbolleiste ist.

> [!NOTE]
> Derzeit ist ein Statusleisten-Shim enthalten, sodass Add-ons, die auf die Existenz der Statusleiste angewiesen sind, weiterhin funktionieren.

## Ein Element zur Add-on-Leiste hinzufügen

Die Add-on-Leiste ist eine XUL-Symbolleiste mit der ID "addon-bar". Der folgende Code ermittelt das zuletzt verwendete Fenster und fügt der Add-on-Leiste ein neues Element hinzu, das den Text "Hello world!" mithilfe eines XUL-`<label>`-Elements anzeigt.

```js
// Find the most recently used window

var mediator = Components.classes[
  "@mozilla.org/appshell/window-mediator;1"
].getService(Components.interfaces.nsIWindowMediator);
var doc = mediator.getMostRecentWindow("navigator:browser").document;

// Get the add-on bar for that window

var addonBar = doc.getElementById("addon-bar");

// Construct the new toolbar item

var newItem = doc.createElement("toolbaritem");
var itemLabel = doc.createElement("label");

// Add the item to the toolbar and set its text label

newItem.appendChild(itemLabel);
addonBar.appendChild(newItem);
itemLabel.value = "Hello world!";
```

Um die Schaltfläche nur einmal hinzuzufügen, erstellen Sie eine boolesche Voreinstellung, um zu überprüfen, ob es der erste Start ist. [Zum Beispiel](https://stackoverflow.com/questions/4978188/how-do-i-detect-a-first-run-in-firefox-a-addon/4978512#4978512):

```js
var firstrun = Services.prefs.getBoolPref("extensions.YOUREXT.firstrun");

var curVersion = "0.0.0";

if (firstrun) {
  Services.prefs.setBoolPref("extensions.YOUREXT.firstrun", false);
  Services.prefs.setCharPref("extensions.YOUREXT.installedVersion", curVersion);
  /* Code related to firstrun */
} else {
  try {
    var installedVersion = Services.prefs.getCharPref(
      "extensions.YOUREXT.installedVersion",
    );
    if (curVersion > installedVersion) {
      Services.prefs.setCharPref(
        "extensions.YOUREXT.installedVersion",
        curVersion,
      );
      /* Code related to upgrade */
    }
  } catch (ex) {
    /* Code related to a reinstall */
  }
}
```

## Anleitung zur Verwendung eines Overlays pro Firefox-Version

Um Unterstützung für die Add-on-Leiste hinzuzufügen und gleichzeitig mit Firefox 3.6 und älter kompatibel zu bleiben, sind zwei Overlays erforderlich. Die [chrome.manifest](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration)-Datei kann durch die Verwendung von [Manifest-Flags](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration#Manifest_Flags) angeben, welche Datei von welcher Firefox-Version verwendet wird:

```plain
overlay chrome://browser/content/browser.xul chrome://myaddon/content/myaddon/overlayold.xul application={ec8030f7-c20a-464f-9b0e-13a3a9e97384} appversion<4.0
overlay chrome://browser/content/browser.xul chrome://myaddon/content/myaddon/overlay.xul application={ec8030f7-c20a-464f-9b0e-13a3a9e97384} appversion>=4.0
```

Hinweis: Die App-Version muss mindestens 2-stellig sein, da sie sonst mit Versionen von Gecko vor 1.8.0.13 und 1.8.1.5 nicht funktioniert.

### Eine Schaltfläche standardmäßig hinzufügen

Siehe: [Eine Schaltfläche standardmäßig hinzufügen](https://web.archive.org/web/20191010115941/https://developer.mozilla.org/de/docs/Archive/Add-ons/Code_snippets/Toolbar#Adding_button_by_default)

## Unterschiedliches Erscheinungsbild

- Da der Browser nicht mehr einen großen Prozentsatz der Leiste mit Statusinformationen belegt, steht der gesamte Bereich für Add-ons zur Verfügung.
- Die Add-on-Leiste ist standardmäßig leer und verborgen; der Benutzer muss sie sichtbar machen.
- Wenn ein Neustart-freies Add-on sich direkt in der Add-on-Leiste installiert und die Leiste noch nicht sichtbar ist, wird die Leiste automatisch sichtbar.
- Wenn das Deinstallieren eines Neustart-freien Add-ons die Anzahl der Elemente in der Add-on-Leiste auf Null reduziert, wird die Leiste automatisch verborgen.

## Siehe auch

- [Die Firefox 4 Add-on-Leiste für Entwickler](https://web.archive.org/web/20110129042912/https://mike.kaply.com/2011/01/25/the-firefox-4-add-on-bar-for-developers) von Mike Kaply

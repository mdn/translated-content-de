---
title: Die Add-on-Leiste
slug: Mozilla/Firefox/Releases/4/The_add-on_bar
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{FirefoxSidebar}}

Firefox 4 hat die Statusleiste am unteren Rand des Browserfensters zugunsten einer neuen Symbolleiste am unteren Rand des Fensters entfernt. Diese neue Symbolleiste mit der ID "addon-bar" ist ein standardmäßiges XUL-`<toolbar>`; Add-ons können Inhalte darin einfügen und der Benutzer kann beim Anpassen der Symbolleisten Schaltflächen hineinziehen. Dies ist der Hauptunterschied zwischen der Add-on-Leiste und der alten Statusleiste; Sie können jetzt jedes XUL-Element einfügen, da es sich um eine standardmäßige Symbolleiste handelt.

> [!NOTE]
> Vorläufig ist ein Statusleisten-Shim enthalten, damit Add-ons, die auf das Vorhandensein der Statusleiste angewiesen sind, weiterhin funktionieren.

## Hinzufügen eines Elements zur Add-on-Leiste

Die Add-on-Leiste ist eine XUL-Symbolleiste mit der ID "addon-bar". Der folgende Code sucht das zuletzt verwendete Fenster und fügt der Add-on-Leiste ein neues Element hinzu, das den Text "Hello world!" mit einem XUL-`<label>`-Element anzeigt.

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

Um die Schaltfläche nur einmal hinzuzufügen, erstellen Sie eine boolesche Voreinstellung, um zu überprüfen, ob es sich um den ersten Start handelt. [Zum Beispiel](https://stackoverflow.com/questions/4978188/how-do-i-detect-a-first-run-in-firefox-a-addon/4978512#4978512):

```js
var firstRun = Services.prefs.getBoolPref("extensions.YOUREXT.firstRun");

var curVersion = "0.0.0";

if (firstRun) {
  Services.prefs.setBoolPref("extensions.YOUREXT.firstRun", false);
  Services.prefs.setCharPref("extensions.YOUREXT.installedVersion", curVersion);
  /* Code related to firstRun */
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

Um die Add-on-Leiste zu unterstützen und gleichzeitig mit Firefox 3.6 und älteren Versionen kompatibel zu bleiben, sind zwei Overlays erforderlich. Die [chrome.manifest](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration)-Datei kann mithilfe von [Manifest-Flags](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration#Manifest_Flags) angeben, welche Datei von welcher Firefox-Version verwendet wird:

```plain
overlay chrome://browser/content/browser.xul chrome://myaddon/content/myaddon/overlay-old.xul application={ec8030f7-c20a-464f-9b0e-13a3a9e97384} appversion<4.0
overlay chrome://browser/content/browser.xul chrome://myaddon/content/myaddon/overlay.xul application={ec8030f7-c20a-464f-9b0e-13a3a9e97384} appversion>=4.0
```

Hinweis: Die Appversion muss mindestens 2-stellig sein, da sie sonst nicht mit Versionen von Gecko vor 1.8.0.13 und 1.8.1.5 funktioniert.

### Hinzufügen einer Schaltfläche standardmäßig

Siehe: [Hinzufügen einer Schaltfläche standardmäßig](https://web.archive.org/web/20191010115941/https://developer.mozilla.org/de/docs/Archive/Add-ons/Code_snippets/Toolbar#Adding_button_by_default)

## Unterschiede im Erscheinungsbild

- Da der Browser keinen großen Teil der Leiste mehr mit Statusinformationen belegt, steht der gesamte Bereich für Add-ons zur Verfügung.
- Die Add-on-Leiste ist standardmäßig leer und ausgeblendet; der Benutzer muss sich entscheiden, sie sichtbar zu machen.
- Installiert sich ein Add-on ohne Neustart direkt in der Add-on-Leiste und ist die Leiste noch nicht sichtbar, wird die Leiste automatisch sichtbar.
- Wenn durch das Deinstallieren eines Add-ons ohne Neustart die Anzahl der Elemente in der Add-on-Leiste auf null sinkt, wird die Leiste automatisch ausgeblendet.

## Siehe auch

- Die [Firefox 4 Add-on-Leiste für Entwickler](https://web.archive.org/web/20110129042912/https://mike.kaply.com/2011/01/25/the-firefox-4-add-on-bar-for-developers) von Mike Kaply

---
title: Die Add-on-Leiste
slug: Mozilla/Firefox/Releases/4/The_add-on_bar
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Firefox 4 entfernt die Statusleiste am unteren Rand des Browserfensters zugunsten einer neuen Werkzeugleiste, die sich am unteren Rand des Fensters befindet. Diese neue Werkzeugleiste mit der ID "addon-bar" ist eine Standard-XUL-`<toolbar>`; Add-ons können Inhalte darin einfügen, und der Benutzer kann beim Anpassen seiner Werkzeugleisten Schaltflächen hineinziehen. Dies ist der Hauptunterschied zwischen der Add-on-Leiste und der alten Statusleiste; Sie können nun jedes XUL-Element darin platzieren, da es sich um eine Standard-Werkzeugleiste handelt.

> [!NOTE]
> Derzeit ist ein Statusleisten-Shim enthalten, damit Add-ons, die das Vorhandensein der Statusleiste erwarten, weiterhin funktionieren.

## Hinzufügen eines Elements zur Add-on-Leiste

Die Add-on-Leiste ist eine XUL-Werkzeugleiste mit der ID "addon-bar". Der folgende Code findet das zuletzt verwendete Fenster und fügt der Add-on-Leiste ein neues Element hinzu, das den Text "Hello world!" mit einem XUL-`<label>`-Element anzeigt.

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

## Verwendung eines Overlays pro Firefox-Version

Um die Add-on-Leiste zu unterstützen und gleichzeitig mit Firefox 3.6 und älter kompatibel zu bleiben, sind zwei Overlays erforderlich. Die Datei [chrome.manifest](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration) kann mithilfe von [Manifest-Flags](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration#Manifest_Flags) angeben, welche Datei von welcher Firefox-Version verwendet wird:

```plain
overlay chrome://browser/content/browser.xul chrome://myaddon/content/myaddon/overlayold.xul application={ec8030f7-c20a-464f-9b0e-13a3a9e97384} appversion<4.0
overlay chrome://browser/content/browser.xul chrome://myaddon/content/myaddon/overlay.xul application={ec8030f7-c20a-464f-9b0e-13a3a9e97384} appversion>=4.0
```

Hinweis: Die appversion muss mindestens 2-stellig sein, sonst funktioniert sie nicht mit Versionen von Gecko vor 1.8.0.13 und 1.8.1.5.

### Hinzufügen eines Buttons standardmäßig

Siehe: [Hinzufügen eines Buttons standardmäßig](https://web.archive.org/web/20191010115941/https://developer.mozilla.org/de/docs/Archive/Add-ons/Code_snippets/Toolbar#Adding_button_by_default)

## Unterschiede im Erscheinungsbild

- Da der Browser nicht mehr einen großen Teil der Leiste mit Statusinformationen belegt, steht der gesamte Bereich für Add-ons zur Verfügung.
- Die Add-on-Leiste ist standardmäßig leer und ausgeblendet; der Benutzer muss wählen, sie sichtbar zu machen.
- Wenn ein Add-on ohne Neustart sich direkt in die Add-on-Leiste installiert und die Leiste nicht bereits sichtbar ist, wird die Leiste automatisch sichtbar.
- Wenn das Deinstallieren eines Add-ons ohne Neustart die Anzahl der Elemente in der Add-on-Leiste auf null reduziert, wird die Leiste automatisch ausgeblendet.

## Siehe auch

- Die [Firefox 4 Add-on-Leiste für Entwickler](https://web.archive.org/web/20110129042912/https://mike.kaply.com/2011/01/25/the-firefox-4-add-on-bar-for-developers), von Mike Kaply

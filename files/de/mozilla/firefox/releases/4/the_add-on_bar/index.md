---
title: Die Add-On-Leiste
slug: Mozilla/Firefox/Releases/4/The_add-on_bar
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 4 entfernt die Statusleiste am unteren Rand des Browserfensters und ersetzt sie durch eine neue Symbolleiste, die sich unten im Fenster befindet. Diese neue Symbolleiste, mit der ID "addon-bar", ist eine standardmäßige XUL-`<toolbar>`; Add-ons können Inhalte darin einfügen, und der Benutzer kann Schaltflächen hineinziehen, während er seine Symbolleisten anpasst. Dies ist der Hauptunterschied zwischen der Add-On-Leiste und der alten Statusleiste; Sie können nun jedes XUL-Element darin platzieren, da es sich um eine standardmäßige Symbolleiste handelt.

> [!NOTE]
> Zurzeit gibt es einen Statusleisten-Shim, sodass Add-ons, die die Anwesenheit der Statusleiste erwarten, weiterhin funktionieren.

## Hinzufügen eines Elements zur Add-On-Leiste

Die Add-On-Leiste ist eine XUL-Symbolleiste mit der ID "addon-bar". Der unten stehende Code sucht das zuletzt verwendete Fenster und fügt der Add-On-Leiste ein neues Element hinzu, das den Text "Hello world!" mit einem XUL-`<label>`-Element anzeigt.

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

Unterstützung für die Add-On-Leiste hinzuzufügen, während die Kompatibilität mit Firefox 3.6 und älteren Versionen beibehalten wird, erfordert die Verwendung von zwei Overlays. Die [chrome.manifest](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration)-Datei kann angeben, welche Datei von welcher Firefox-Version verwendet wird, indem [Manifest-Flags](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration#Manifest_Flags) verwendet werden:

```plain
overlay chrome://browser/content/browser.xul chrome://myaddon/content/myaddon/overlay-old.xul application={ec8030f7-c20a-464f-9b0e-13a3a9e97384} appversion<4.0
overlay chrome://browser/content/browser.xul chrome://myaddon/content/myaddon/overlay.xul application={ec8030f7-c20a-464f-9b0e-13a3a9e97384} appversion>=4.0
```

Hinweis: Die Appversion muss mindestens 2-stellig sein, sonst funktioniert sie nicht mit Versionen von Gecko vor 1.8.0.13 und 1.8.1.5.

### Hinzufügen einer Schaltfläche standardmäßig

Siehe: [Hinzufügen einer Schaltfläche standardmäßig](https://web.archive.org/web/20191010115941/https://developer.mozilla.org/de/docs/Archive/Add-ons/Code_snippets/Toolbar#Adding_button_by_default)

## Unterschiede im Erscheinungsbild

- Da der Browser nicht länger einen Großteil der Leiste mit Statusinformationen ausfüllt, steht der gesamte Bereich für die Nutzung durch Add-ons zur Verfügung.
- Die Add-On-Leiste ist standardmäßig leer und versteckt; der Benutzer muss sie aktiv sichtbar machen.
- Wenn ein Neustart-loses Add-on sich direkt in die Add-On-Leiste installiert und die Leiste noch nicht sichtbar ist, wird die Leiste automatisch sichtbar.
- Wenn das Deinstallieren eines Neustart-losen Add-ons dazu führt, dass die Anzahl der Elemente in der Add-On-Leiste null wird, wird die Leiste automatisch verborgen.

## Siehe auch

- Die [Firefox 4 Add-On-Leiste für Entwickler](https://web.archive.org/web/20110129042912/https://mike.kaply.com/2011/01/25/the-firefox-4-add-on-bar-for-developers), von Mike Kaply

---
title: Aufbau einer Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{AddonSidebar}}

Eine Erweiterung besteht aus einer Sammlung von Dateien, die zur Verteilung und Installation bereitgestellt sind. In diesem Artikel werden wir kurz die Dateien durchgehen, die in einer Erweiterung vorhanden sein könnten.

## manifest.json

Dies ist die einzige Datei, die in jeder Erweiterung vorhanden sein muss. Sie enthält grundlegende Metadaten wie den Namen, die Version und die benötigten Berechtigungen. Außerdem stellt sie Verweise auf andere Dateien in der Erweiterung bereit.

Das Manifest kann auch Verweise auf verschiedene andere Dateitypen enthalten:

- [Hintergrundskripte](#background_scripts_2)
  - : Skripte, die auf Browser-Ereignisse reagieren.
- Symbole
  - : Für die Erweiterung und alle Schaltflächen, die sie definiert.
- [Sidebars, Popups und Optionsseiten](#sidebars_popups_and_options_pages_2)
  - : HTML-Dokumente, die Inhalte für verschiedene Benutzeroberflächenkomponenten bereitstellen.
- [Inhaltsskripte](#content_scripts_2)
  - : JavaScript, das mit Ihrer Erweiterung enthalten ist und das Sie in Webseiten einfügen.
- [Webzugängliche Ressourcen](#webzugängliche_ressourcen)
  - : Machen Sie verpackte Inhalte für Webseiten und Inhaltsskripte zugänglich.

![Die Komponenten einer Web-Erweiterung. Die manifest.JSON muss in allen Erweiterungen vorhanden sein. Sie stellt Verweise auf Hintergrundseiten, Inhaltsskripte, Browseraktionen, Seitenaktionen, Optionsseiten und webzugängliche Ressourcen bereit. Hintergrundseiten bestehen aus HTML und JS. Inhaltsskripte bestehen aus JS und CSS. Der Benutzer klickt auf ein Symbol, um Browseraktionen und Seitenaktionen auszulösen, und das resultierende Popup besteht aus HTML, CSS und JS. Optionsseiten bestehen aus HTML, CSS und JS.](webextension-anatomy.png)

Siehe die [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Referenzseite für alle Details.

Zusätzlich zu den im Manifest bereits aufgelisteten Komponenten kann eine Erweiterung auch zusätzliche [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) und unterstützende Dateien enthalten.

## Hintergrundskripte

Erweiterungen müssen häufig auf Ereignisse reagieren, die im Browser unabhängig von der Lebensdauer einer bestimmten Webseite oder eines Browserfensters auftreten. Dafür sind Hintergrundskripte gedacht.

Hintergrundskripte können persistent oder nicht persistent sein. Persistente Hintergrundskripte laden, sobald die Erweiterung geladen wird, und bleiben geladen, bis die Erweiterung deaktiviert oder deinstalliert wird. Dieses Verhalten von Hintergrundskripten ist nur in Manifest V2 verfügbar. Nicht-persistente Hintergrundskripte laden bei Bedarf, um auf ein Ereignis zu reagieren, und entladen sich, wenn sie inaktiv werden. Dieses Verhalten von Hintergrundskripten ist eine Option in Manifest V2 und das einzige verfügbare Verhalten in Manifest V3.

Sie können alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) im Skript verwenden, wenn Sie die notwendigen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) angefordert haben.

Siehe den Artikel über [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts), um mehr zu erfahren.

## Sidebars, Popups und Optionsseiten

Ihre Erweiterung kann verschiedene Benutzeroberflächenkomponenten enthalten, deren Inhalt mittels eines HTML-Dokuments definiert wird:

- [Sidebar](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
  - : Eine Leiste, die auf der linken Seite des Browserfensters neben der Webseite angezeigt wird.
- [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
  - : Ein Dialog, den Sie anzeigen können, wenn der Benutzer auf einen [Werkzeugleiste-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder eine [Adressleiste-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) klickt.
- [Optionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
  - : Eine Seite, die angezeigt wird, wenn der Benutzer auf die Einstellungen Ihres Add-ons im nativen Add-ons-Manager des Browsers zugreift.

Für jede dieser Komponenten erstellen Sie eine HTML-Datei und verweisen darauf mit einer spezifischen Eigenschaft in [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json). Die HTML-Datei kann CSS- und JavaScript-Dateien enthalten, genau wie eine normale Webseite.

All dies sind eine Art von [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages). Im Unterschied zu einer normalen Webseite kann Ihr JavaScript alle privilegierten WebExtension-APIs genauso nutzen wie Ihr Hintergrundskript.

## Erweiterungsseiten

Sie können auch HTML-Dokumente in Ihrer Erweiterung einfügen, die nicht an eine vordefinierte Benutzeroberflächenkomponente angehängt sind. Anders als die Dokumente, die Sie für Sidebars, Popups oder Optionsseiten bereitstellen, haben diese keinen Eintrag in `manifest.json`. Sie haben jedoch Zugriff auf alle dieselben privilegierten WebExtension-APIs wie Ihr Hintergrundskript.

Eine Seite wie diese würden Sie typischerweise mit {{WebExtAPIRef("windows.create()")}} oder {{WebExtAPIRef("tabs.create()")}} laden.

Um mehr zu erfahren, sehen Sie [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages).

## Inhaltsskripte

Verwenden Sie Inhaltsskripte, um auf Webseiten zuzugreifen und sie zu manipulieren. Inhaltsskripte werden in Webseiten geladen und laufen im Kontext dieser speziellen Seite.

Inhaltsskripte sind von der Erweiterung bereitgestellte Skripte, die im Kontext einer Webseite laufen; das unterscheidet sich von Skripten, die von der Seite selbst geladen werden, einschließlich jener, die in {{HTMLElement("script")}}-Elementen innerhalb der Seite bereitgestellt werden.

Inhaltsskripte können das DOM der Seite wie normale von der Seite geladene Skripte sehen und manipulieren.

Im Gegensatz zu normalen Seitenskripten können Inhaltsskripte:

- Einen kleinen Teil der [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden.
- [Nachrichten mit ihren Hintergrundskripten austauschen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts) und können so indirekt auf alle WebExtension-APIs zugreifen.

Inhaltsskripte können nicht direkt auf normale Seitenskripte zugreifen, aber sie können Nachrichten mit ihnen über die Standard-API [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) austauschen.

Üblicherweise sprechen wir bei Inhaltsskripten von JavaScript, aber Sie können CSS auf Webseiten mithilfe desselben Mechanismus einfügen.

Um mehr zu erfahren, siehe den Artikel über [Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts).

## Webzugängliche Ressourcen

Webzugängliche Ressourcen sind Ressourcen – wie Bilder, HTML, CSS und JavaScript –, die Sie in die Erweiterung einfügen und die Sie für Inhaltsskripte und Seitenskripte zugänglich machen möchten. Ressourcen, die webzugänglich gemacht werden, können von Seitenskripten und Inhaltsskripten unter Verwendung eines speziellen URI-Schemas referenziert werden.

Wenn beispielsweise ein Inhaltsskript einige Bilder in Webseiten einfügen möchte, könnten Sie sie in die Erweiterung einfügen und webzugänglich machen. Dann könnte das Inhaltsskript [`img`](/de/docs/Web/HTML/Reference/Elements/img)-Tags erstellen und anhängen, die die Bilder über das `src`-Attribut referenzieren.

Um mehr zu erfahren, siehe die Dokumentation zum [`"web_accessible_resources"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) `manifest.json`-Schlüssel.

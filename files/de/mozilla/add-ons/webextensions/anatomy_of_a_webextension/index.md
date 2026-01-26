---
title: Aufbau einer Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
l10n:
  sourceCommit: e9a795876d60f95a8a47c9fe8bb90f599ee0057e
---

Eine Erweiterung besteht aus einer Sammlung von Dateien, die zur Verteilung und Installation gepackt sind. In diesem Artikel gehen wir schnell die Dateien durch, die in einer Erweiterung vorhanden sein könnten.

## manifest.json

Dies ist die einzige Datei, die in jeder Erweiterung vorhanden sein muss. Sie enthält grundlegende Metadaten wie den Namen, die Version und die erforderlichen Berechtigungen. Zusätzlich gibt sie Hinweise auf andere Dateien in der Erweiterung.

Das Manifest kann auch Hinweise auf mehrere andere Dateitypen enthalten:

- [Hintergrundskripte](#hintergrundskripte)
  - : Skripte, die auf Browserereignisse reagieren.
- Symbole
  - : Für die Erweiterung und alle Schaltflächen, die sie definieren könnte.
- [Seitenleisten, Popups und Optionsseiten](#sidebars_popups_and_options_pages)
  - : HTML-Dokumente, die Inhalte für verschiedene Benutzeroberflächenkomponenten bereitstellen.
- [Inhaltsskripte](#inhaltsskripte)
  - : JavaScript, das mit Ihrer Erweiterung geliefert wird und das Sie auf Webseiten einfügen.
- [Webzugängliche Ressourcen](#webzugängliche_ressourcen)
  - : Machen Sie verpackte Inhalte für Webseiten und Inhaltsskripte zugänglich.

![Die Komponenten einer Web-Erweiterung. Die manifest.JSON muss in allen Erweiterungen vorhanden sein. Sie gibt Hinweise auf Hintergrundseiten, Inhaltsskripte, Browseraktionen, Seitenaktionen, Optionsseiten und webzugängliche Ressourcen. Hintergrundseiten bestehen aus HTML und JS. Inhaltsskripte bestehen aus JS und CSS. Der Benutzer klickt auf ein Symbol, um Browseraktionen und Seitenaktionen auszulösen, und das resultierende Popup besteht aus HTML, CSS und JS. Optionsseiten bestehen aus HTML, CSS und JS.](webextension-anatomy.png)

Sehen Sie die Referenzseite [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) für alle Details.

Zusätzlich zu denen, die bereits im Manifest aufgeführt sind, kann eine Erweiterung auch zusätzliche [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) und unterstützende Dateien enthalten.

## Hintergrundskripte

Erweiterungen müssen oft auf Ereignisse im Browser reagieren, die unabhängig von der Lebensdauer einer bestimmten Webseite oder eines Browserfensters auftreten. Dafür sind Hintergrundskripte da.

Hintergrundskripte können persistent oder nicht persistent sein. Persistent Hintergrundskripte werden geladen, sobald die Erweiterung geladen wird, und bleiben geladen, bis die Erweiterung deaktiviert oder deinstalliert wird. Dieses Verhalten von Hintergrundskripten ist nur in Manifest V2 verfügbar. Nicht persistente Hintergrundskripte werden geladen, wenn sie benötigt werden, um auf ein Ereignis zu reagieren, und entladen, wenn sie inaktiv werden. Dieses Verhalten von Hintergrundskripten ist eine Option in Manifest V2 und das einzige Verhalten von Hintergrundskripten, das in Manifest V3 verfügbar ist.

Sie können alle [WebExtension APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) im Skript verwenden, wenn Sie die erforderlichen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) angefordert haben.

Lesen Sie den Artikel zu [Hintergrundskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts), um mehr zu erfahren.

## Seitenleisten, Popups und Optionsseiten

Ihre Erweiterung kann verschiedene Benutzeroberflächenkomponenten enthalten, deren Inhalte mit einem HTML-Dokument definiert sind:

- [Seitenleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
  - : Ein Bereich, der links neben dem Webseitenfenster angezeigt wird.
- [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
  - : Ein Dialog, den Sie anzeigen können, wenn der Benutzer auf eine [Symbolleistenschaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder eine [Adressleistenschaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) klickt.
- [Optionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
  - : Eine Seite, die angezeigt wird, wenn der Benutzer auf die Einstellungen Ihres Add-ons im nativen Add-on-Manager des Browsers zugreift.

Für jede dieser Komponenten erstellen Sie eine HTML-Datei und verweisen darauf durch eine spezifische Eigenschaft in [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json). Die HTML-Datei kann CSS- und JavaScript-Dateien enthalten, genau wie eine normale Webseite.

Alle diese sind eine Art von [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages). Im Gegensatz zu einer normalen Webseite kann Ihr JavaScript alle privilegierten WebExtension APIs verwenden, die auch Ihr Hintergrundskript verwenden kann.

## Erweiterungsseiten

Sie können auch HTML-Dokumente in Ihre Erweiterung einfügen, die nicht an eine vordefinierte Benutzeroberflächenkomponente gebunden sind. Im Gegensatz zu den Dokumenten, die Sie möglicherweise für Seitenleisten, Popups oder Optionsseiten bereitstellen, haben diese keinen Eintrag in `manifest.json`. Sie haben jedoch ebenfalls Zugriff auf alle privilegierten WebExtension APIs, die auch Ihr Hintergrundskript hat.

Eine Seite dieser Art würden Sie normalerweise mit {{WebExtAPIRef("windows.create()")}} oder {{WebExtAPIRef("tabs.create()")}} laden.

Lesen Sie den Artikel zu [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages), um mehr zu erfahren.

## Inhaltsskripte

Verwenden Sie Inhaltsskripte, um auf Webseiten zuzugreifen und diese zu manipulieren. Inhaltsskripte werden in Webseiten geladen und laufen im Kontext dieser bestimmten Seite.

Inhaltsskripte sind von der Erweiterung bereitgestellte Skripte, die im Kontext einer Webseite ausgeführt werden; dies unterscheidet sich von Skripten, die von der Seite selbst geladen werden, einschließlich derjenigen, die innerhalb der Seite in {{HTMLElement("script")}} Elementen bereitgestellt werden.

Inhaltsskripte können auf das DOM der Seite zugreifen und es manipulieren, genau wie normale Skripte, die von der Seite geladen werden.

Im Gegensatz zu normalen Seitenskripten können Inhaltsskripte:

- Einen kleinen Teil der [WebExtension APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden.
- [Nachrichten mit ihren Hintergrundskripten austauschen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts) und auf diese Weise indirekt auf alle WebExtension APIs zugreifen.

Inhaltsskripte können nicht direkt auf normale Seitenskripte zugreifen, können jedoch Nachrichten mit ihnen über die standardisierte API [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) austauschen.

Normalerweise sprechen wir, wenn wir über Inhaltsskripte sprechen, von JavaScript, aber Sie können CSS mit demselben Mechanismus in Webseiten einfügen.

Lesen Sie den Artikel zu [Inhaltsskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts), um mehr zu erfahren.

## Webzugängliche Ressourcen

Webzugängliche Ressourcen sind Ressourcen – wie Bilder, HTML, CSS und JavaScript –, die Sie in der Erweiterung einschließen und den Inhaltsskripten und Seitenskripten zugänglich machen möchten. Ressourcen, die webzugänglich gemacht werden, können von Seitenskripten und Inhaltsskripten unter Verwendung eines speziellen URI-Schemas referenziert werden.

Wenn beispielsweise ein Inhaltsskript einige Bilder in Webseiten einfügen möchte, könnten Sie diese in der Erweiterung einschließen und webzugänglich machen. Dann könnte das Inhaltsskript [`img`](/de/docs/Web/HTML/Reference/Elements/img) Tags erstellen und anhängen, die die Bilder über das `src` Attribut referenzieren.

Um mehr zu erfahren, lesen Sie die Dokumentation zum [`"web_accessible_resources"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) `manifest.json` Schlüssel.

---
title: Anatomie einer Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Eine Erweiterung besteht aus einer Sammlung von Dateien, die für die Verteilung und Installation verpackt sind. In diesem Artikel werden wir schnell die Dateien durchgehen, die in einer Erweiterung vorhanden sein könnten.

## manifest.json

Dies ist die einzige Datei, die in jeder Erweiterung vorhanden sein muss. Sie enthält grundlegende Metadaten wie den Namen, die Version und die erforderlichen Berechtigungen. Sie bietet auch Hinweise auf andere Dateien in der Erweiterung.

Das Manifest kann auch Verweise auf mehrere andere Dateitypen enthalten:

- [Hintergrundskripte](#background_scripts_2)
  - : Skripte, die auf Browser-Ereignisse reagieren.
- Symbole
  - : Für die Erweiterung und alle Schaltflächen, die sie möglicherweise definiert.
- [Seitenleisten, Pop-ups und Einstellungsseiten](#sidebars_popups_and_options_pages_2)
  - : HTML-Dokumente, die Inhalte für verschiedene Benutzeroberflächenkomponenten bereitstellen.
- [Inhaltsskripte](#content_scripts_2)
  - : JavaScript, das mit Ihrer Erweiterung enthalten ist, das Sie in Webseiten einfügen werden.
- [Webzugängliche Ressourcen](#webzugängliche_ressourcen)
  - : Machen Sie verpackte Inhalte für Webseiten und Inhaltsskripte zugänglich.

![Die Komponenten einer Web-Erweiterung. Die manifest.JSON muss in allen Erweiterungen vorhanden sein. Sie gibt Hinweise auf Hintergrundseiten, Inhaltsskripte, Browseraktionen, Seitenaktionen, Einstellungsseiten und webzugängliche Ressourcen. Hintergrundseiten bestehen aus HTML und JS. Inhaltsskripte bestehen aus JS und CSS. Der Benutzer klickt auf ein Symbol, um Browseraktionen und Seitenaktionen auszulösen, und das resultierende Pop-up besteht aus HTML, CSS und JS. Einstellungsseiten bestehen aus HTML, CSS und JS.](webextension-anatomy.png)

Sehen Sie sich die [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Referenzseite für alle Details an.

Zusätzlich zu den bereits im Manifest aufgeführten Elementen kann eine Erweiterung auch zusätzliche [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) und unterstützende Dateien enthalten.

## Hintergrundskripte

Erweiterungen müssen oft auf Ereignisse reagieren, die im Browser unabhängig von der Lebensdauer einer bestimmten Webseite oder eines Browserfensters auftreten. Genau dafür sind Hintergrundskripte da.

Hintergrundskripte können persistent oder nicht-persistent sein. Persistente Hintergrundskripte laden, sobald die Erweiterung geladen wird, und bleiben geladen, bis die Erweiterung deaktiviert oder deinstalliert wird. Dieses Verhalten von Hintergrundskripten ist nur in Manifest V2 verfügbar. Nicht-persistente Hintergrundskripte laden, wenn sie benötigt werden, um auf ein Ereignis zu reagieren, und entladen, wenn sie inaktiv werden. Dieses Verhalten von Hintergrundskripten ist eine Option in Manifest V2 und das einzige zur Verfügung stehende Verhalten in Manifest V3.

Sie können in dem Skript alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, wenn Sie die erforderlichen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) angefordert haben.

Siehe den Artikel über [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts), um mehr zu erfahren.

## Seitenleisten, Pop-ups und Einstellungsseiten

Ihre Erweiterung kann verschiedene Benutzeroberflächenkomponenten enthalten, deren Inhalt mit einem HTML-Dokument definiert ist:

- [Seitenleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
  - : Ein Bereich, der auf der linken Seite des Browserfensters neben der Webseite angezeigt wird.
- [Pop-up](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
  - : Ein Dialog, den Sie anzeigen können, wenn der Benutzer auf eine [Symbolleistenschaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [Adressleistenschaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) klickt.
- [Einstellungen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
  - : Eine Seite, die angezeigt wird, wenn der Benutzer auf die Einstellungen Ihres Add-ons im nativen Add-ons-Manager des Browsers zugreift.

Für jede dieser Komponenten erstellen Sie eine HTML-Datei und verweisen darauf, indem Sie eine spezifische Eigenschaft in [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) verwenden. Die HTML-Datei kann CSS- und JavaScript-Dateien enthalten, genau wie eine normale Webseite.

All diese sind eine Art von [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages). Im Gegensatz zu einer normalen Webseite kann Ihr JavaScript alle gleichen privilegierten WebExtension-APIs wie Ihr Hintergrundskript verwenden.

## Erweiterungsseiten

Sie können auch HTML-Dokumente in Ihre Erweiterung aufnehmen, die nicht an eine voreingestellte Benutzeroberflächenkomponente angehängt sind. Im Gegensatz zu den Dokumenten, die Sie möglicherweise für Seitenleisten, Pop-ups oder Einstellungsseiten bereitstellen, haben diese keinen Eintrag in `manifest.json`. Sie haben jedoch auch Zugriff auf alle gleichen privilegierten WebExtension-APIs wie Ihr Hintergrundskript.

Typischerweise würde man eine Seite wie diese mit {{WebExtAPIRef("windows.create()")}} oder {{WebExtAPIRef("tabs.create()")}} laden.

Siehe [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages), um mehr zu erfahren.

## Inhaltsskripte

Verwenden Sie Inhaltsskripte, um auf Webseiten zuzugreifen und diese zu manipulieren. Inhaltsskripte werden in Webseiten geladen und im Kontext dieser speziellen Seite ausgeführt.

Inhaltsskripte sind von der Erweiterung bereitgestellte Skripte, die im Kontext einer Webseite ausgeführt werden; dies unterscheidet sich von Skripten, die von der Seite selbst geladen werden, einschließlich derer, die in {{HTMLElement("script")}}-Elementen innerhalb der Seite enthalten sind.

Inhaltsskripte können das DOM der Seite sehen und manipulieren, genau wie normale Skripte, die von der Seite geladen werden.

Im Gegensatz zu normalen Seitenskripten können Inhaltsskripte:

- Einen kleinen Teil der [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden.
- [Mit ihren Hintergrundskripten Nachrichten austauschen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts) und auf diese Weise indirekt auf alle WebExtension-APIs zugreifen.

Inhaltsskripte können nicht direkt normalen Seitenskripten zugreifen, aber sie können Nachrichten mit ihnen unter Verwendung der Standard-API [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) austauschen.

Normalerweise, wenn wir über Inhaltsskripte sprechen, beziehen wir uns auf JavaScript, aber Sie können CSS mithilfe desselben Mechanismus in Webseiten injizieren.

Siehe den Artikel über [Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts), um mehr zu erfahren.

## Webzugängliche Ressourcen

Webzugängliche Ressourcen sind Ressourcen, wie Bilder, HTML, CSS und JavaScript, die Sie in die Erweiterung einfügen und für Inhaltsskripte und Seitenskripte zugänglich machen möchten. Ressourcen, die webbasiert zugänglich gemacht werden, können von Seitenskripten und Inhaltsskripten unter Verwendung eines speziellen URI-Schemas referenziert werden.

Wenn beispielsweise ein Inhaltsskript einige Bilder in Webseiten einfügen möchte, könnten Sie sie in die Erweiterung aufnehmen und webbasiert zugänglich machen. Dann könnte das Inhaltsskript [`img`](/de/docs/Web/HTML/Reference/Elements/img)-Tags erstellen und anhängen, die die Bilder über das `src`-Attribut referenzieren.

Um mehr zu erfahren, lesen Sie die Dokumentation zum [`"web_accessible_resources"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) `manifest.json`-Schlüssel.

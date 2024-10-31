---
title: Anatomie einer Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
l10n:
  sourceCommit: f98e60b07584a70cf1c6a8623707d9be3efd9674
---

{{AddonSidebar}}

Eine Erweiterung besteht aus einer Sammlung von Dateien, die zur Verteilung und Installation gepackt sind. In diesem Artikel werden wir schnell die Dateien durchgehen, die in einer Erweiterung vorhanden sein könnten.

## manifest.json

Dies ist die einzige Datei, die in jeder Erweiterung vorhanden sein muss. Sie enthält grundlegende Metadaten wie den Namen, die Version und die benötigten Berechtigungen. Außerdem verweist sie auf andere Dateien in der Erweiterung.

Das Manifest kann auch Verweise auf mehrere andere Dateitypen enthalten:

- [Background scripts](#background_scripts_2)
  - : Skripte, die auf Browser-Ereignisse reagieren.
- Icons
  - : Für die Erweiterung und alle Schaltflächen, die sie möglicherweise definiert.
- [Sidebars, popups, and options pages](#sidebars_popups_and_options_pages_2)
  - : HTML-Dokumente, die Inhalte für verschiedene Benutzeroberflächenkomponenten bereitstellen.
- [Content scripts](#content_scripts_2)
  - : JavaScript, das mit Ihrer Erweiterung geliefert wird und das Sie in Webseiten einbetten.
- [Web-accessible resources](#webzugängliche_ressourcen)
  - : Machen Sie gepackte Inhalte für Webseiten und Content-Skripte zugänglich.

![Die Komponenten einer Web-Erweiterung. Die manifest.JSON muss in allen Erweiterungen vorhanden sein. Sie verweist auf Hintergrundseiten, Inhaltsskripte, Browseraktionen, Seitenaktionen, Optionsseiten und webzugängliche Ressourcen. Hintergrundseiten bestehen aus HTML und JS. Inhaltsskripte bestehen aus JS und CSS. Der Benutzer klickt auf ein Symbol, um Browseraktionen und Seitenaktionen auszulösen, und das resultierende Popup besteht aus HTML, CSS und JS. Optionsseiten bestehen aus HTML, CSS und JS.](webextension-anatomy.png)

Siehe die Referenzseite zu [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) für alle Details.

Zusätzlich zu den bereits im Manifest aufgeführten Dateien kann eine Erweiterung auch zusätzliche [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) und Unterstützungsdateien enthalten.

## Background scripts

Erweiterungen müssen oft auf Ereignisse reagieren, die im Browser unabhängig von der Lebensdauer einer bestimmten Webseite oder eines Browserfensters auftreten. Dafür sind Background-Skripte da.

Background-Skripte können persistent oder nicht-persistent sein. Persistente Background-Skripte werden geladen, sobald die Erweiterung geladen wird, und bleiben geladen, bis die Erweiterung deaktiviert oder deinstalliert wird. Dieses Verhaltensmuster für Background-Skripte ist nur in Manifest V2 verfügbar. Nicht-persistente Background-Skripte werden bei Bedarf geladen, um auf ein Ereignis zu reagieren, und werden entladen, wenn sie inaktiv werden. Dieses Verhaltensmuster für Background-Skripte ist eine Option in Manifest V2 und das einzige verfügbare Verhaltensmuster in Manifest V3.

Sie können in dem Skript jede der [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, wenn Sie die notwendigen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) angefordert haben.

Lesen Sie den Artikel über [Background-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts), um mehr zu erfahren.

## Sidebars, popups und Optionsseiten

Ihre Erweiterung kann verschiedene Benutzeroberflächenkomponenten enthalten, deren Inhalt mit einem HTML-Dokument definiert wird:

- [Sidebar](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
  - : Ein Bereich, der links im Browserfenster neben der Webseite angezeigt wird.
- [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
  - : Ein Dialog, der angezeigt wird, wenn der Benutzer auf eine [Toolbar-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [Adressleisten-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) klickt.
- [Options](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
  - : Eine Seite, die angezeigt wird, wenn der Benutzer auf die Einstellungen Ihres Add-ons im nativen Add-ons-Manager des Browsers zugreift.

Für jede dieser Komponenten erstellen Sie eine HTML-Datei und verweisen darauf mit einer spezifischen Eigenschaft in [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json). Die HTML-Datei kann CSS- und JavaScript-Dateien enthalten, genau wie eine normale Webseite.

Alle diese sind eine Art von [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages). Anders als bei einer normalen Webseite kann Ihr JavaScript alle privilegierten WebExtension-APIs verwenden, die auch in Ihrem Background-Skript verfügbar sind.

## Erweiterungsseiten

Sie können auch HTML-Dokumente in Ihre Erweiterung einfügen, die nicht an eine vordefinierte Benutzeroberflächenkomponente gebunden sind. Im Gegensatz zu den Dokumenten, die Sie für Sidebars, Popups oder Optionsseiten bereitstellen könnten, haben diese keinen Eintrag in `manifest.json`. Trotzdem haben sie Zugriff auf alle privilegierten WebExtension-APIs wie Ihr Background-Skript.

Normalerweise würde man eine solche Seite mit {{WebExtAPIRef("windows.create()")}} oder {{WebExtAPIRef("tabs.create()")}} laden.

Lesen Sie [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages), um mehr zu erfahren.

## Content scripts

Verwenden Sie Content-Skripte, um auf Webseiten zuzugreifen und sie zu manipulieren. Content-Skripte werden in Webseiten geladen und laufen im Kontext dieser speziellen Seite.

Content-Skripte sind von der Erweiterung bereitgestellte Skripte, die im Kontext einer Webseite ausgeführt werden; dies unterscheidet sich von Skripten, die von der Seite selbst geladen werden, einschließlich derjenigen, die im {{HTMLElement("script")}}-Element innerhalb der Seite bereitgestellt werden.

Content-Skripte können das DOM der Seite sehen und manipulieren, genau wie normale von der Seite geladene Skripte.

Anders als normale Seitenskripte können Content-Skripte:

- Einen kleinen Teil der [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden.
- [Nachrichten mit ihren Background-Skripten austauschen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts) und auf diese Weise indirekt auf alle WebExtension-APIs zugreifen.

Content-Skripte können nicht direkt auf normale Seitenskripte zugreifen, aber sie können Nachrichten mit ihnen über die Standard-API [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) austauschen.

Normalerweise, wenn wir über Content-Skripte sprechen, beziehen wir uns auf JavaScript, aber Sie können CSS mit demselben Mechanismus in Webseiten einfügen.

Lesen Sie den Artikel über [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts), um mehr zu erfahren.

## Webzugängliche Ressourcen

Webzugängliche Ressourcen sind Ressourcen—wie Bilder, HTML, CSS und JavaScript—die Sie in die Erweiterung einfügen und den Content-Skripten und Seitenskripten zugänglich machen möchten. Ressourcen, die webbasiert zugänglich gemacht werden, können von Seitenskripten und Content-Skripten mithilfe eines speziellen URI-Schemas referenziert werden.

Zum Beispiel, wenn ein Content-Skript einige Bilder in Webseiten einfügen möchte, könnten Sie diese in die Erweiterung einfügen und webbasiert zugänglich machen. Dann könnte das Content-Skript [`img`](/de/docs/Web/HTML/Element/img)-Tags erstellen und einfügen, die die Bilder über das `src`-Attribut referenzieren.

Um mehr zu erfahren, lesen Sie die Dokumentation für den [`"web_accessible_resources"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources)-Schlüssel in `manifest.json`.

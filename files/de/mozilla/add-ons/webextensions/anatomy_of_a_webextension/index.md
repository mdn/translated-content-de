---
title: Anatomie einer Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
l10n:
  sourceCommit: d71511167189aea307159478883ff1b45f16c8a5
---

{{AddonSidebar}}

Eine Erweiterung besteht aus einer Sammlung von Dateien, die für die Verteilung und Installation gepackt sind. In diesem Artikel werden wir die Dateien schnell durchgehen, die in einer Erweiterung vorhanden sein könnten.

## manifest.json

Dies ist die einzige Datei, die in jeder Erweiterung vorhanden sein muss. Sie enthält grundlegende Metadaten wie ihren Namen, ihre Version und die benötigten Berechtigungen. Sie bietet auch Verweise auf andere Dateien in der Erweiterung.

Das Manifest kann auch Verweise auf mehrere andere Dateitypen enthalten:

- [Hintergrundskripte](#background_scripts_2)
  - : Skripte, die auf Browser-Ereignisse reagieren.
- Symbole
  - : Für die Erweiterung und alle Schaltflächen, die sie definieren könnte.
- [Sidebars, Popups und Optionsseiten](#sidebars_popups_and_options_pages_2)
  - : HTML-Dokumente, die Inhalte für verschiedene Benutzeroberflächenkomponenten bereitstellen.
- [Inhaltsskripte](#content_scripts_2)
  - : JavaScript, das mit Ihrer Erweiterung enthalten ist und in Webseiten injiziert wird.
- [Webzugängliche Ressourcen](#webzugängliche_ressourcen)
  - : Machen Sie gepackte Inhalte für Webseiten und Inhaltsskripte zugänglich.

![Die Komponenten einer Web-Erweiterung. Die manifest.JSON muss in allen Erweiterungen vorhanden sein. Sie bietet Verweise auf Hintergrundseiten, Inhaltsskripte, Browseraktionen, Seitenaktionen, Optionsseiten und webzugängliche Ressourcen. Hintergrundseiten bestehen aus HTML und JS. Inhaltsskripte bestehen aus JS und CSS. Der Benutzer klickt auf ein Symbol, um Browseraktionen und Seitenaktionen auszulösen, und das resultierende Popup besteht aus HTML, CSS und JS. Optionsseiten bestehen aus HTML, CSS und JS.](webextension-anatomy.png)

Siehe die Referenzseite [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) für alle Details.

Zusätzlich zu denen, die bereits im Manifest aufgeführt sind, kann eine Erweiterung auch zusätzliche [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) und unterstützende Dateien enthalten.

## Hintergrundskripte

Erweiterungen müssen oft auf Ereignisse im Browser reagieren, die unabhängig von der Lebensdauer einer bestimmten Webseite oder eines Browserfensters auftreten. Dafür sind Hintergrundskripte gedacht.

Hintergrundskripte können persistent oder nicht persistent sein. Persistente Hintergrundskripte werden geladen, sobald die Erweiterung geladen wird, und bleiben geladen, bis die Erweiterung deaktiviert oder deinstalliert wird. Dieses Verhalten von Hintergrundskripten ist nur in Manifest V2 verfügbar. Nicht-persistente Hintergrundskripte werden geladen, wenn sie benötigt werden, um auf ein Ereignis zu reagieren, und entladen, wenn sie inaktiv werden. Dieses Verhalten von Hintergrundskripten ist eine Option in Manifest V2 und das einzige verfügbare Verhalten in Manifest V3.

Sie können alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) im Skript verwenden, falls Sie die notwendigen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) angefordert haben.

Siehe den Artikel über [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts), um mehr zu erfahren.

## Sidebars, Popups und Optionsseiten

Ihre Erweiterung kann verschiedene Benutzeroberflächenkomponenten enthalten, deren Inhalt mit einem HTML-Dokument definiert ist:

- [Sidebar](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
  - : Ein Bereich, der auf der linken Seite des Browserfensters neben der Webseite angezeigt wird.
- [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
  - : Ein Dialog, den Sie anzeigen können, wenn der Benutzer auf eine [Toolbar-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [Adressleisten-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) klickt.
- [Optionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
  - : Eine Seite, die angezeigt wird, wenn der Benutzer die Einstellungen Ihres Add-ons im nativen Add-on-Manager des Browsers aufruft.

Für jede dieser Komponenten erstellen Sie eine HTML-Datei und verweisen darauf durch eine spezifische Eigenschaft in [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json). Die HTML-Datei kann CSS- und JavaScript-Dateien enthalten, genau wie eine normale Webseite.

All diese sind eine Art von [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages). Im Gegensatz zu einer normalen Webseite kann Ihr JavaScript dieselben privilegierten WebExtension-APIs wie Ihr Hintergrundskript verwenden.

## Erweiterungsseiten

Sie können auch HTML-Dokumente in Ihrer Erweiterung einfügen, die nicht an eine vordefinierte Benutzeroberflächenkomponente angehängt sind. Im Gegensatz zu den Dokumenten, die Sie für Sidebars, Popups oder Optionsseiten bereitstellen, haben diese keinen Eintrag in `manifest.json`. Sie erhalten jedoch ebenfalls Zugriff auf dieselben privilegierten WebExtension-APIs wie Ihr Hintergrundskript.

Eine Seite wie diese würden Sie normalerweise mit {{WebExtAPIRef("windows.create()")}} oder {{WebExtAPIRef("tabs.create()")}} laden.

Siehe [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages), um mehr zu erfahren.

## Inhaltsskripte

Verwenden Sie Inhaltsskripte, um auf Webseiten zuzugreifen und sie zu manipulieren. Inhaltsskripte werden in Webseiten geladen und laufen im Kontext der jeweiligen Seite.

Inhaltsskripte sind von der Erweiterung bereitgestellte Skripte, die im Kontext einer Webseite ausgeführt werden; dies unterscheidet sie von Skripten, die von der Seite selbst geladen werden, einschließlich derjenigen, die in {{HTMLElement("script")}}-Elementen innerhalb der Seite bereitgestellt werden.

Inhaltsskripte können das DOM der Seite sehen und manipulieren, genau wie normale Skripte, die von der Seite geladen werden.

Im Gegensatz zu normalen Seitenskripten können Inhaltsskripte:

- Domainübergreifende XHR-Anfragen stellen.
- Einen kleinen Teil der [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden.
- [Nachrichten mit ihren Hintergrundskripten austauschen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts) und können auf diese Weise indirekt auf alle WebExtension-APIs zugreifen.

Inhaltsskripte können nicht direkt auf normale Seitenskripte zugreifen, aber sie können Nachrichten mit ihnen über die standardmäßige [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) API austauschen.

Üblicherweise beziehen wir uns auf JavaScript, wenn wir über Inhaltsskripte sprechen, aber Sie können CSS mit dem gleichen Mechanismus in Webseiten injizieren.

Siehe den Artikel über [Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts), um mehr zu erfahren.

## Webzugängliche Ressourcen

Webzugängliche Ressourcen sind Ressourcen—wie Bilder, HTML, CSS und JavaScript—, die Sie in die Erweiterung aufnehmen und für Inhaltsskripte und Seitenskripte zugänglich machen möchten. Ressourcen, die webzugänglich gemacht werden, können von Seitenskripten und Inhaltsskripten mit einem speziellen URI-Schema referenziert werden.

Zum Beispiel, wenn ein Inhaltsskript einige Bilder in Webseiten einfügen möchte, könnten Sie sie in die Erweiterung aufnehmen und webzugänglich machen. Dann könnte das Inhaltsskript [`img`](/de/docs/Web/HTML/Element/img)-Tags erstellen und anhängen, die die Bilder über das `src`-Attribut referenzieren.

Um mehr zu erfahren, siehe die Dokumentation für den [`"web_accessible_resources"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) Schlüssel in `manifest.json`.

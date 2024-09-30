---
title: Anatomie einer Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
l10n:
  sourceCommit: d71511167189aea307159478883ff1b45f16c8a5
---

{{AddonSidebar}}

Eine Erweiterung besteht aus einer Sammlung von Dateien, die für die Verteilung und Installation verpackt sind. In diesem Artikel werden wir schnell die Dateien durchgehen, die in einer Erweiterung vorhanden sein könnten.

## manifest.json

Dies ist die einzige Datei, die in jeder Erweiterung vorhanden sein muss. Sie enthält grundlegende Metadaten wie den Namen, die Version und die benötigten Berechtigungen. Sie bietet auch Verweise auf andere Dateien in der Erweiterung.

Das Manifest kann auch Verweise auf verschiedene andere Dateitypen enthalten:

- [Background scripts](#background_scripts_2)
  - : Skripte, die auf Browser-Ereignisse reagieren.
- Icons
  - : Für die Erweiterung und alle Schaltflächen, die sie definieren könnte.
- [Seitenleisten, Popups und Optionsseiten](#sidebars_popups_and_options_pages_2)
  - : HTML-Dokumente, die Inhalt für verschiedene Benutzeroberflächenkomponenten bereitstellen.
- [Content scripts](#content_scripts_2)
  - : JavaScript, das mit Ihrer Erweiterung geliefert wird und das Sie in Webseiten injizieren.
- [Webzugängliche Ressourcen](#webzugängliche_ressourcen)
  - : Machen Sie verpackte Inhalte für Webseiten und Content-Scripts zugänglich.

![Die Komponenten einer Web-Erweiterung. Die manifest.JSON muss in allen Erweiterungen vorhanden sein. Sie liefert Verweise auf Hintergrundseiten, Content-Scripts, Browseraktionen, Seitenaktionen, Optionsseiten und webzugängliche Ressourcen. Hintergrundseiten bestehen aus HTML und JS. Content-Scripts bestehen aus JS und CSS. Der Benutzer klickt auf ein Symbol, um Browseraktionen und Seitenaktionen auszulösen. Das resultierende Pop-up besteht aus HTML, CSS und JS. Optionsseiten bestehen aus HTML, CSS und JS.](webextension-anatomy.png)

Sehen Sie sich die Referenzseite [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) für alle Details an.

Zusätzlich zu denen, die bereits im Manifest aufgelistet sind, kann eine Erweiterung auch zusätzliche [Extension pages](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) und unterstützende Dateien enthalten.

## Background scripts

Erweiterungen müssen oft auf Ereignisse reagieren, die im Browser unabhängig von der Lebensdauer einer bestimmten Webseite oder eines Browserfensters auftreten. Dafür sind Hintergrundskripte gedacht.

Hintergrundskripte können persistent oder nicht persistent sein. Persistente Hintergrundskripte werden geladen, sobald die Erweiterung geladen wird, und bleiben geladen, bis die Erweiterung deaktiviert oder deinstalliert wird. Dieses Verhalten von Hintergrundskripten ist nur in Manifest V2 verfügbar. Nicht persistente Hintergrundskripte werden geladen, wenn sie benötigt werden, um auf ein Ereignis zu reagieren, und werden entladen, wenn sie inaktiv werden. Dieses Verhalten von Hintergrundskripten ist eine Option in Manifest V2 und das einzige verfügbare Verhalten von Hintergrundskripten in Manifest V3.

Sie können alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) im Skript verwenden, wenn Sie die notwendigen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) angefordert haben.

Lesen Sie den Artikel zu [background scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts), um mehr zu erfahren.

## Seitenleisten, Popups und Optionsseiten

Ihre Erweiterung kann verschiedene Benutzeroberflächenkomponenten enthalten, deren Inhalte mit einem HTML-Dokument definiert sind:

- [Seiteleisten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
  - : Ein Bereich, der an der linken Seite des Browserfensters neben der Webseite angezeigt wird.
- [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
  - : Ein Dialog, den Sie anzeigen können, wenn der Benutzer auf eine [Symbolleistenschaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [Adressleisten-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) klickt.
- [Optionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
  - : Eine Seite, die angezeigt wird, wenn der Benutzer auf die Einstellungen Ihres Add-ons im nativen Add-ons-Manager des Browsers zugreift.

Für jede dieser Komponenten erstellen Sie eine HTML-Datei und verweisen darauf mit einer spezifischen Eigenschaft in [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json). Die HTML-Datei kann CSS- und JavaScript-Dateien enthalten, genau wie eine normale Webseite.

All dies sind eine Art von [Extension pages](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages). Anders als bei einer normalen Webseite kann Ihr JavaScript dieselben privilegierten WebExtension-APIs wie Ihr Hintergrundskript verwenden.

## Extension pages

Sie können auch HTML-Dokumente in Ihrer Erweiterung einfügen, die nicht an eine vordefinierte Benutzeroberflächenkomponente gebunden sind. Im Gegensatz zu den Dokumenten, die Sie für Seitenleisten, Popups oder Optionsseiten bereitstellen könnten, haben diese keinen Eintrag in `manifest.json`. Sie haben jedoch ebenfalls Zugriff auf dieselben privilegierten WebExtension-APIs wie Ihr Hintergrundskript.

Eine solche Seite würden Sie typischerweise mit {{WebExtAPIRef("windows.create()")}} oder {{WebExtAPIRef("tabs.create()")}} laden.

Lesen Sie [Extension pages](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages), um mehr zu erfahren.

## Content scripts

Verwenden Sie Content-Scripts, um auf Webseiten zuzugreifen und diese zu manipulieren. Content-Scripts werden in Webseiten geladen und laufen im Kontext dieser speziellen Seite.

Content-Scripts sind von der Erweiterung bereitgestellte Skripte, die im Kontext einer Webseite ausgeführt werden; dies unterscheidet sich von Skripten, die durch die Seite selbst geladen werden, einschließlich derjenigen, die in {{HTMLElement("script")}}-Elementen innerhalb der Seite bereitgestellt werden.

Content-Scripts können das DOM der Seite sehen und manipulieren, genau wie normale Skripte, die von der Seite geladen werden.

Anders als normale Seitenskripte können Content-Scripts:

- Cross-Domain-XHR-Anfragen stellen.
- Einen kleinen Teil der [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden.
- [Mit ihren Hintergrundskripten Nachrichten austauschen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts) und auf diese Weise indirekt Zugriff auf alle WebExtension-APIs erhalten.

Content-Scripts können nicht direkt auf normale Seitenskripte zugreifen, aber sie können über die Standard-API [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) Nachrichten mit ihnen austauschen.

Normalerweise beziehen wir uns auf JavaScript, wenn wir über Content-Scripts sprechen, aber Sie können mit demselben Mechanismus auch CSS in Webseiten injizieren.

Lesen Sie den Artikel zu [content scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts), um mehr zu erfahren.

## Webzugängliche Ressourcen

Webzugängliche Ressourcen sind Ressourcen – wie Bilder, HTML, CSS und JavaScript – die Sie in die Erweiterung einfügen und für Content-Scripts und Seitenskripte zugänglich machen möchten. Ressourcen, die webbasiert zugänglich gemacht werden, können von Seitenskripten und Content-Scripts unter Verwendung eines speziellen URI-Schemas referenziert werden.

Wenn ein Content-Script beispielsweise einige Bilder in Webseiten einfügen möchte, könnten Sie diese in die Erweiterung einfügen und webzugänglich machen. Dann könnte das Content-Skript [`img`](/de/docs/Web/HTML/Element/img)-Tags erstellen und anhängen, die die Bilder über das `src`-Attribut referenzieren.

Um mehr zu erfahren, lesen Sie die Dokumentation für den [`"web_accessible_resources"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) `manifest.json`-Schlüssel.

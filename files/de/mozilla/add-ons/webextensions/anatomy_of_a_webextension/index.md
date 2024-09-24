---
title: Anatomie einer Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
l10n:
  sourceCommit: d71511167189aea307159478883ff1b45f16c8a5
---

{{AddonSidebar}}

Eine Erweiterung besteht aus einer Sammlung von Dateien, die zur Verteilung und Installation gepackt sind. In diesem Artikel werden wir schnell die Dateien durchgehen, die in einer Erweiterung vorhanden sein könnten.

## manifest.json

Dies ist die einzige Datei, die in jeder Erweiterung vorhanden sein muss. Sie enthält grundlegende Metadaten wie Name, Version und die benötigten Berechtigungen. Sie verweist auch auf andere Dateien in der Erweiterung.

Das Manifest kann auch Verweise auf verschiedene andere Dateitypen enthalten:

- [Hintergrundskripte](#background_scripts_2)
  - : Skripte, die auf Browserereignisse reagieren.
- Symbole
  - : Für die Erweiterung und alle Schaltflächen, die sie möglicherweise definiert.
- [Seitenleisten, Popups und Optionsseiten](#sidebars_popups_and_options_pages_2)
  - : HTML-Dokumente, die Inhalte für verschiedene Benutzeroberflächenkomponenten bereitstellen.
- [Inhalts-Skripte](#content_scripts_2)
  - : JavaScript, das mit Ihrer Erweiterung enthalten ist und das in Webseiten injiziert wird.
- [Webzugängliche Ressourcen](#webzugängliche_ressourcen)
  - : Machen Sie gepackte Inhalte für Webseiten und Inhalts-Skripte zugänglich.

![Die Komponenten einer Web-Erweiterung. Das manifest.JSON muss in allen Erweiterungen vorhanden sein. Es verweist auf Hintergrundseiten, Inhalts-Skripte, Browser-Aktionen, Seitenaktionen, Optionsseiten und webzugängliche Ressourcen. Hintergrundseiten bestehen aus HTML und JS. Inhalts-Skripte bestehen aus JS und CSS. Der Benutzer klickt auf ein Symbol, um Browser-Aktionen und Seitenaktionen auszulösen, und das resultierende Popup besteht aus HTML, CSS und JS. Optionsseiten bestehen aus HTML, CSS und JS.](webextension-anatomy.png)

Siehe die [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Referenzseite für alle Details.

Zusammen mit den bereits im Manifest gelisteten können eine Erweiterung auch zusätzliche [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) und unterstützende Dateien enthalten.

## Hintergrundskripte

Erweiterungen müssen oft auf Ereignisse reagieren, die im Browser unabhängig von der Lebensdauer einer bestimmten Webseite oder eines Browserfensters auftreten. Dafür sind Hintergrundskripte gedacht.

Hintergrundskripte können persistent oder nicht-persistent sein. Persistente Hintergrundskripte laden, sobald die Erweiterung geladen wird, und bleiben geladen, bis die Erweiterung deaktiviert oder deinstalliert wird. Dieses Verhalten von Hintergrundskripten ist nur in Manifest V2 verfügbar. Nicht-persistente Hintergrundskripte werden bei Bedarf geladen, um auf ein Ereignis zu reagieren, und entladen, wenn sie inaktiv werden. Dieses Verhalten ist eine Option in Manifest V2 und das einzige Verhalten für Hintergrundskripte in Manifest V3.

Sie können im Skript jede der [WebExtension APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, wenn Sie die erforderlichen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) angefordert haben.

Siehe den Artikel über [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts), um mehr zu erfahren.

## Seitenleisten, Popups und Optionsseiten

Ihre Erweiterung kann verschiedene Benutzeroberflächenkomponenten einschließen, deren Inhalt mit einem HTML-Dokument definiert wird:

- [Seitenleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
  - : Ein Bereich, der auf der linken Seite des Browserfensters, neben der Webseite, angezeigt wird.
- [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
  - : Ein Dialogfeld, das Sie anzeigen können, wenn der Benutzer auf eine [Symbolleisten-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [Adressleisten-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) klickt.
- [Optionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
  - : Eine Seite, die angezeigt wird, wenn der Benutzer auf die Einstellungen Ihres Add-ons im nativen Add-on-Manager des Browsers zugreift.

Für jede dieser Komponenten erstellen Sie eine HTML-Datei und verweisen darauf mit einer spezifischen Eigenschaft in [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json). Die HTML-Datei kann CSS- und JavaScript-Dateien enthalten, genau wie eine normale Webseite.

All dies sind eine Art von [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages). Im Gegensatz zu einer normalen Webseite kann Ihr JavaScript alle privilegierten WebExtension APIs wie Ihr Hintergrundskript verwenden.

## Erweiterungsseiten

Sie können auch HTML-Dokumente in Ihre Erweiterung aufnehmen, die nicht an eine vordefinierte Benutzeroberflächenkomponente angehängt sind. Anders als die Dokumente, die Sie für Seitenleisten, Popups oder Optionsseiten bereitstellen, haben diese keinen Eintrag in `manifest.json`. Sie erhalten jedoch ebenfalls Zugriff auf alle privilegierten WebExtension APIs wie Ihr Hintergrundskript.

Normalerweise würden Sie eine Seite dieser Art mit {{WebExtAPIRef("windows.create()")}} oder {{WebExtAPIRef("tabs.create()")}} laden.

Siehe [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) um mehr zu erfahren.

## Inhalts-Skripte

Verwenden Sie Inhalts-Skripte, um auf Webseiten zuzugreifen und sie zu manipulieren. Inhalts-Skripte werden in Webseiten geladen und im Kontext der jeweiligen Seite ausgeführt.

Inhalts-Skripte sind von der Erweiterung bereitgestellte Skripte, die im Kontext einer Webseite ausgeführt werden; dies unterscheidet sich von Skripten, die von der Seite selbst geladen werden, einschließlich derjenigen, die in {{HTMLElement("script")}}-Elementen innerhalb der Seite bereitgestellt werden.

Inhalts-Skripte können das DOM der Seite sehen und manipulieren, genau wie normale Skripte, die von der Seite geladen werden.

Im Gegensatz zu normalen Seitenskripten können Inhalts-Skripte:

- Domainübergreifende XHR-Anfragen stellen.
- Einen kleinen Teil der [WebExtension APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden.
- [Nachrichten mit ihren Hintergrundskripten austauschen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts) und auf diese Weise indirekt auf alle WebExtension APIs zugreifen.

Inhalts-Skripte können nicht direkt auf normale Seitenskripte zugreifen, können jedoch Nachrichten mit ihnen über die standardmäßige [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) API austauschen.

In der Regel, wenn wir von Inhalts-Skripten sprechen, beziehen wir uns auf JavaScript, aber Sie können CSS auf dieselbe Weise in Webseiten injizieren.

Siehe den Artikel über [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts), um mehr zu erfahren.

## Webzugängliche Ressourcen

Webzugängliche Ressourcen sind Ressourcen – wie Bilder, HTML, CSS und JavaScript –, die Sie in die Erweiterung einbeziehen und für Inhalts-Skripte und Seitenskripte zugänglich machen möchten. Ressourcen, die webzugänglich gemacht werden, können von Seitenskripten und Inhalts-Skripten unter Verwendung eines speziellen URI-Schemas referenziert werden.

Wenn beispielsweise ein Inhalts-Skript Bilder in Webseiten einfügen möchte, könnten Sie diese in die Erweiterung aufnehmen und webzugänglich machen. Dann könnte das Inhalts-Skript [`img`](/de/docs/Web/HTML/Element/img)-Tags erstellen und anhängen, die die Bilder über das `src`-Attribut referenzieren.

Um mehr zu erfahren, siehe die Dokumentation zum [`"web_accessible_resources"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) `manifest.json` Schlüssel.

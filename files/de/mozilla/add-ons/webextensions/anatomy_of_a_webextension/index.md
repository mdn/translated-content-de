---
title: Anatomie einer Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
l10n:
  sourceCommit: ee33efab7300d7bf7319921a22f2eb2b60df91da
---

Eine Erweiterung besteht aus einer Sammlung von Dateien, die für den Vertrieb und die Installation verpackt sind. Dieser Artikel beschreibt die Dateien, die in einer Erweiterung vorhanden sein können.

## manifest.json

Diese Datei muss in jeder Erweiterung vorhanden sein. Sie enthält grundlegende Metadaten, wie den Namen, die Version und die erforderlichen Berechtigungen.

Das Manifest kann auch Verweise auf mehrere andere Dateitypen enthalten:

- [Background-Skripte](#background-skripte)
  - : Skripte, die auf Browserevents reagieren.
- Icons
  - : Für die Erweiterung und alle Schaltflächen, die sie definieren könnte.
- [Seitenleisten, Popups und Einstellungsseiten](#sidebars_popups_and_options_pages)
  - : HTML-Dokumente, die Inhalte für verschiedene Benutzeroberflächenkomponenten bereitstellen.
- [Content-Skripte](#content-skripte)
  - : JavaScript, das zusammen mit Ihrer Erweiterung bereitgestellt wird und das Ihre Erweiterung in Webseiten einfügt.
- [Webzugängliche Ressourcen](#webzugängliche_ressourcen)
  - : Verpackte Inhalte, die Webseiten und Content-Skripten zugänglich gemacht werden.

![Die Komponenten einer Erweiterung. Die manifest.json muss in allen Erweiterungen vorhanden sein. Sie liefert Verweise auf Hintergrundseiten, Content-Skripte, Browseraktionen, Seitenaktionen, Einstellungsseiten und webzugängliche Ressourcen. Hintergrundseiten werden in HTML und JavaScript verfasst. Content-Skripte werden in JavaScript und CSS verfasst. Der Benutzer klickt auf ein Icon, um Browseraktionen und Seitenaktionen auszulösen, die ein Popup anzeigen können, das aus HTML, CSS und JavaScript besteht. Einstellungsseiten bestehen aus HTML, CSS und JavaScript.](webextension-anatomy.png)

Sehen Sie sich die Referenzseite [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) für alle Details an.

Zusätzlich zu den im Manifest aufgelisteten können Erweiterungen weitere [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) und unterstützende Dateien enthalten.

## Background-Skripte

Erweiterungen müssen häufig auf Ereignisse reagieren, die im Browser unabhängig von der Lebenszeit einer bestimmten Webseite oder eines Browserfensters auftreten. Dafür sind Hintergrundskripte da.

Background-Skripte können persistent oder nicht persistent sein.

- Persistente Hintergrundskripte werden geladen, sobald die Erweiterung geladen wird und bleiben geladen, bis die Erweiterung deaktiviert oder deinstalliert wird. Nur Manifest-V2-Erweiterungen können persistente Hintergrundskripte verwenden.
- Nicht-persistente Hintergrundskripte werden bei Bedarf geladen, um auf ein Ereignis zu reagieren, und entladen, wenn sie untätig werden. Manifest-V3-Erweiterungen verwenden nur nicht-persistente Hintergrundskripte und Manifest-V2-Erweiterungen können sich für dieses Verhalten entscheiden.

Sie können in dem Skript alle der [WebExtensions-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, wenn Sie die erforderlichen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) angefordert haben.

Weitere Informationen finden Sie im Artikel über [Background-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts).

## Seitenleisten, Popups und Einstellungsseiten

Ihre Erweiterung kann Benutzeroberflächenkomponenten umfassen, die mit einem HTML-Dokument definiert sind:

- [Seitenleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
  - : Ein Bereich, der links im Browserfenster neben der Webseite angezeigt wird.
- [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
  - : Ein Dialog, der angezeigt wird, wenn der Benutzer auf einen [Symbolleistenschalter](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder einen [Adressleistenknopf](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) klickt.
- [Einstellungen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
  - : Eine Seite, die angezeigt wird, wenn der Benutzer auf die Einstellungen Ihres Add-ons im nativen Add-ons-Manager des Browsers zugreift.

Für jede dieser Komponenten erstellen Sie eine HTML-Datei und verweisen darauf mit einer bestimmten Eigenschaft in [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json). Die HTML-Datei kann CSS- und JavaScript-Dateien enthalten, ähnlich wie eine normale Webseite.

Alle diese sind [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages). Anders als eine normale Webseite kann das JavaScript Ihrer Erweiterung dieselben privilegierten WebExtensions-APIs wie Ihr Hintergrundskript verwenden.

## Erweiterungsseiten

Sie können auch HTML-Dokumente in Ihre Erweiterung einfügen, die nicht an eine vordefinierte Benutzeroberflächenkomponente angehängt sind. Anders als die Dokumente, die Sie für Seitenleisten, Popups oder Einstellungsseiten bereitstellen, haben diese keinen Eintrag in `manifest.json`. Sie haben jedoch ebenfalls Zugriff auf alle dieselben privilegierten WebExtensions-APIs wie Ihr Hintergrundskript.

Sie würden eine solche Seite typischerweise mit {{WebExtAPIRef("windows.create()")}} oder {{WebExtAPIRef("tabs.create()")}} laden.

Siehe [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages), um mehr zu erfahren.

## Content-Skripte

Benutzen Sie Content-Skripte, um auf Webseiten zuzugreifen und sie zu manipulieren. Content-Skripte werden in Webseiten geladen und laufen im Kontext dieser bestimmten Seite.

Content-Skripte sind von der Erweiterung bereitgestellte Skripte, die im Kontext einer Webseite ausgeführt werden; dies unterscheidet sich von Skripten, die von der Seite selbst geladen werden, einschließlich solcher, die in {{HTMLElement("script")}}-Elementen innerhalb der Seite bereitgestellt werden.

Content-Skripte können auf das DOM der Seite zugreifen und es manipulieren, wie jedes andere Skript, das von der Seite geladen wird. Im Gegensatz zu normalen Seitenskripten können Content-Skripte jedoch:

- Einen kleinen Teil der [WebExtensions-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden.
- [Nachrichten mit ihren Hintergrundskripten austauschen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts), die ein Content-Skript verwenden kann, um ein Hintergrundskript zu bitten, etwas mit einer WebExtensions-API zu tun.

Content-Skripte können nicht direkt auf normale Seitenskripte zugreifen, können aber Nachrichten mit ihnen über die standardmäßige [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) API austauschen.

Ihre Erweiterung kann auch CSS in Webseiten injizieren, indem sie den Mechanismus verwendet, um Content-Skripte zu injizieren.

Weitere Informationen finden Sie im Artikel über [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts).

## Webzugängliche Ressourcen

Webzugängliche Ressourcen sind Ressourcen – wie Bilder, HTML, CSS und JavaScript –, die Sie in die Erweiterung einfügen und die Sie für Content-Skripte und Seitenskripte zugänglich machen möchten. Ressourcen, die webbasiert zugänglich gemacht werden, können von Seitenskripten und Content-Skripten unter Verwendung eines speziellen URI-Schemas referenziert werden.

Wenn ein Content-Skript beispielsweise Bilder in Webseiten einfügen möchte, können Sie diese in die Erweiterung einfügen und webzugänglich machen. Dann könnte das Content-Skript [`img`](/de/docs/Web/HTML/Reference/Elements/img)-Tags erstellen und anhängen, die auf die Bilder über das `src`-Attribut verweisen.

Um mehr zu erfahren, sehen Sie die Dokumentation zum [`"web_accessible_resources"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) `manifest.json` Schlüssel.

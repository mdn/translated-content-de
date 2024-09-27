---
title: Browser-Erweiterungen
slug: Mozilla/Add-ons/WebExtensions
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Erweiterungen oder Add-ons können die Funktionalität eines Browsers modifizieren und erweitern. Erweiterungen für Firefox werden mit der WebExtensions-API, einer browserübergreifenden Technologie, erstellt.

Die Technologie für Erweiterungen in Firefox ist weitgehend kompatibel mit der [Erweiterungs-API](https://developer.chrome.com/docs/extensions/reference/) von Chromium-basierten Browsern (wie Google Chrome, Microsoft Edge, Opera, Vivaldi). In den meisten Fällen laufen Erweiterungen, die für Chromium-basierte Browser geschrieben wurden, mit [nur wenigen Änderungen](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) in Firefox.

## Schlüsselressourcen

- Leitfäden
  - : Ob Sie gerade erst anfangen oder fortgeschrittene Ratschläge suchen, lernen Sie, wie Erweiterungen funktionieren und nutzen Sie die WebExtensions-API durch unser umfangreiches Angebot an [Tutorials und Leitfäden](/de/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions).
- Referenzen
  - : Erhalten Sie umfassende Details über die Methoden, Eigenschaften, Typen und Ereignisse der [WebExtensions-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) und vollständige Details über die [Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json).
- Firefox-Arbeitsablauf
  - : Entdecken Sie, wie man Erweiterungen für Firefox erstellt und veröffentlicht: Erhalten Sie alle Informationen über Entwicklerwerkzeuge, Veröffentlichung und Verteilung sowie die Portierung auf [Extension Workshop](https://extensionworkshop.com/).

> [!NOTE]
> Wenn Sie Ideen oder Fragen haben oder Hilfe benötigen, können Sie uns im [Community-Forum](https://discourse.mozilla.org/c/add-ons/35) oder im [Add-ons Room](https://matrix.to/#/!CuzZVoCbeoDHsxMCVJ:mozilla.org?via=mozilla.org&via=matrix.org&via=humanoids.be) auf [Matrix](https://wiki.mozilla.org/Matrix) erreichen.

## Erste Schritte

Entdecken Sie [was Erweiterungen machen können](/de/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions), bevor Sie [Ihre erste Erweiterung bauen](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension). Lernen Sie über die [Anatomie einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension) und erhalten Sie einen Überblick über den [Entwicklungs- und Veröffentlichung-Prozess von Erweiterungen im Firefox-Stil](https://extensionworkshop.com/documentation/develop/firefox-workflow-overview/). Erkunden Sie etwas tiefer mit einer umfassenden Auswahl an [Beispiel-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples), die Sie direkt in Firefox ausführen können.

## Konzepte

Erhalten Sie detaillierte Informationen über die Konzepte, die Erweiterungen zugrunde liegen, von einem [Überblick über die JavaScript-API](/de/docs/Mozilla/Add-ons/WebExtensions/API), über [Content Scripts,](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) [Match Patterns](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), [Arbeiten mit Dateien](/de/docs/Mozilla/Add-ons/WebExtensions/Working_with_files), [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization) und [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy), bis hin zu fortgeschrittenen Themen wie [Native Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging), [using the devtools APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools) und [native Manifeste](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests).

## Benutzeroberfläche

Entdecken Sie alle [Benutzeroberflächen-](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface) Komponenten, die Sie in Ihren Erweiterungen verwenden können, mit Codierungsbeispielen und Tipps.

## Anleitung

Von Mustern, die Sie regelmäßig verwenden werden, wie [Arbeiten mit der Tabs API](/de/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API) und [Hinzufügen eines Buttons zur Toolbar](/de/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar), bis hin zu fortgeschrittenen Themen wie [Abfangen von HTTP-Anfragen](/de/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests) und [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), finden Sie eine Reihe von Tutorials, um Ihnen den Einstieg zu erleichtern.

## Firefox-Arbeitsablauf

Wenn Sie bereit sind, Ihre Erweiterung für Firefox zu erstellen oder Ihre Chrome-Erweiterung zu portieren, besuchen Sie [Extension Workshop](https://extensionworkshop.com/). Dort finden Sie Details zu:

- Dem Firefox-Arbeitsablauf, wie z.B. [temporäres Installieren von Erweiterungen während der Entwicklung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), [Debugging](https://extensionworkshop.com/documentation/develop/debugging/), [Anfordern der richtigen Berechtigungen](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) und mehr.
- Dem [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) Entwickler-Tool.
- [Portierung einer Google Chrome-Erweiterung](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/), [Unterschiede zwischen Desktop- und Android- Erweiterungen](https://extensionworkshop.com/documentation/develop/differences-between-desktop-and-android-extensions/) und mehr.
- [Überblick über Veröffentlichung und Verteilung](https://extensionworkshop.com/documentation/publish/), [Bewerbung Ihrer Erweiterung](https://extensionworkshop.com/documentation/publish/promoting-your-extension/), die [besten Praktiken für den Lebenszyklus von Erweiterungen](https://extensionworkshop.com/documentation/manage/) und mehr.

## Referenz

### JavaScript-APIs

Erhalten Sie umfassende Details über die Methoden, Eigenschaften, Typen und Ereignisse für alle [JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API). Es gibt auch detaillierte Informationen über die Kompatibilität jeder API mit den wichtigsten Browsern. Die meisten Referenzseiten enthalten auch Codierungsbeispiele und Links zu den Erweiterungsbeispielen, die die API verwenden.

### Manifest-Schlüssel

Erhalten Sie vollständige Details über die [Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json), einschließlich aller ihrer Eigenschaften und Einstellungen. Detaillierte Informationen zur [Kompatibilität](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json) jedes Schlüssels mit den wichtigsten Browsern sind ebenfalls enthalten.

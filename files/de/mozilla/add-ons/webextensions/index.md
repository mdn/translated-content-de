---
title: Browser-Erweiterungen
slug: Mozilla/Add-ons/WebExtensions
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Erweiterungen oder Add-ons können die Funktionalität eines Browsers modifizieren und verbessern. Erweiterungen für Firefox werden mit der WebExtensions-API, einer browserübergreifenden Technologie, entwickelt.

Die Technologie für Erweiterungen in Firefox ist weitgehend kompatibel mit der [Erweiterungs-API](https://developer.chrome.com/docs/extensions/reference/), die von Chromium-basierten Browsern (wie Google Chrome, Microsoft Edge, Opera, Vivaldi) unterstützt wird. In den meisten Fällen laufen Erweiterungen, die für Chromium-basierte Browser geschrieben wurden, mit [nur wenigen Änderungen](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) in Firefox.

## Wichtige Ressourcen

- Anleitungen
  - : Egal, ob Sie gerade erst anfangen oder nach fortgeschrittenen Ratschlägen suchen, lernen Sie, wie Erweiterungen funktionieren, und nutzen Sie die WebExtensions-API mit unserem umfangreichen Angebot an [Tutorials und Anleitungen](/de/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions).
- Referenzen
  - : Erhalten Sie umfassende Details zu den Methoden, Eigenschaften, Typen und Ereignissen der [WebExtensions-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) und vollständige Informationen über die [Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json).
- Firefox-Workflow
  - : Erfahren Sie, wie Sie Erweiterungen für Firefox entwickeln und veröffentlichen: Holen Sie sich die Informationen zu Entwicklerwerkzeugen, Veröffentlichung und Vertrieb sowie portieren Sie im [Extension Workshop](https://extensionworkshop.com/).

> [!NOTE]
> Wenn Sie Ideen oder Fragen haben oder Hilfe benötigen, können Sie uns im [Community-Forum](https://discourse.mozilla.org/c/add-ons/35) oder im [Add-ons Room](https://matrix.to/#/!CuzZVoCbeoDHsxMCVJ:mozilla.org?via=mozilla.org&via=matrix.org&via=humanoids.be) auf [Matrix](https://wiki.mozilla.org/Matrix) erreichen.

## Erste Schritte

Entdecken Sie [was Erweiterungen leisten können](/de/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions), bevor Sie [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) entwickeln. Erfahren Sie mehr über den [Aufbau einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension) und erhalten Sie einen Überblick über den [Entwicklungs- und Veröffentlichungsworkflow von Erweiterungen im Firefox-Stil](https://extensionworkshop.com/documentation/develop/firefox-workflow-overview/). Erkunden Sie weiter mit einer umfassenden Auswahl an [Beispiel-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples), die Sie direkt in Firefox ausführen können.

## Konzepte

Erhalten Sie detaillierte Informationen über die Konzepte, die Erweiterungen zugrunde liegen, [von einem Überblick über die JavaScript-API](/de/docs/Mozilla/Add-ons/WebExtensions/API), über [Contentscripts,](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) [Muster der Übereinstimmung](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), [Arbeiten mit Dateien](/de/docs/Mozilla/Add-ons/WebExtensions/Working_with_files), [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization) und [Content-Security-Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy), bis hin zu fortgeschrittenen Themen wie [nativer Nachrichtenübermittlung](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging), [Verwendung der Devtools-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools) und [nativen Manifesten](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests).

## Benutzeroberfläche

Entdecken Sie alle [Benutzeroberflächen-](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface) Komponenten, die Sie in Ihren Erweiterungen verwenden können, mit Beispielcode und Tipps.

## Anleitungen

Von regelmäßig verwendeten Mustern wie [Arbeiten mit der Tabs-API](/de/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API) und [Hinzufügen eines Buttons zur Symbolleiste](/de/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar) zu fortgeschritteneren Themen wie [Abfangen von HTTP-Anfragen](/de/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests) und [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), finden Sie eine Reihe von Tutorials, um Ihnen den Einstieg zu erleichtern.

## Firefox-Workflow

Wenn Sie bereit sind, Ihre Erweiterung für Firefox zu erstellen oder Ihre Chrome-Erweiterung zu portieren, besuchen Sie [Extension Workshop](https://extensionworkshop.com/). Es bietet Details zu:

- Dem Firefox-Workflow, wie [temporäres Installieren von Erweiterungen während der Entwicklung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), [Debugging](https://extensionworkshop.com/documentation/develop/debugging/), [Anfordern der richtigen Berechtigungen](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) und mehr.
- Dem [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) Entwickler-Tool.
- [Portierung einer Google Chrome-Erweiterung](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/), [Unterschiede zwischen Desktop und Android](https://extensionworkshop.com/documentation/develop/differences-between-desktop-and-android-extensions/) und mehr.
- [Überblick über Veröffentlichung und Vertrieb](https://extensionworkshop.com/documentation/publish/), [Bewerben Ihrer Erweiterung](https://extensionworkshop.com/documentation/publish/promoting-your-extension/), die [Best Practices während des Lebenszyklus von Erweiterungen](https://extensionworkshop.com/documentation/manage/), und mehr.

## Referenz

### JavaScript-APIs

Erhalten Sie umfassende Details zu den Methoden, Eigenschaften, Typen und Ereignissen für alle [JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API). Es gibt auch detaillierte Informationen zur Kompatibilität jedes API mit den wichtigsten Browsern. Die meisten Referenzseiten enthalten auch Codebeispiele und Links zu den Erweiterungsbeispielen, die die API verwenden.

### Manifest-Schlüssel

Holen Sie sich vollständige Details zu den [Manifest-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json), einschließlich all ihrer Eigenschaften und Einstellungen. Es gibt auch detaillierte Informationen zur [Kompatibilität](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json) jedes Schlüssels mit den wichtigsten Browsern.

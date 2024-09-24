---
title: Was kommt als Nächstes?
slug: Mozilla/Add-ons/WebExtensions/What_next
l10n:
  sourceCommit: 8e318f66a4433d20190f167f3da108d4b27e93f2
---

{{AddonSidebar}}

Sie sind jetzt bereit, Ihre Idee für eine Browser-Erweiterung in die Realität umzusetzen. Bevor Sie diese Reise beginnen, sollten Sie sich einiger Dinge bewusst sein, die Ihnen helfen werden, den Prozess reibungslos zu gestalten.

Auf [Extension Workshop](https://extensionworkshop.com), einer Website, die Ihnen beim Schreiben, Testen, Veröffentlichen und Verteilen von Erweiterungen für Firefox hilft, finden Sie weitere Informationen zu vielen der auf dieser Seite behandelten Themen.

## Ihre Entwicklungsumgebung

Es sind keine speziellen Entwicklungs- oder Build-Umgebungstools erforderlich, um Browser-Erweiterungen zu erstellen: Es ist durchaus möglich, großartige Browser-Erweiterungen mit nichts anderem als einem Texteditor zu erstellen. Wenn Sie jedoch bereits für das Web entwickeln und ein Set von Tools und eine Umgebung haben, die Sie wiederverwenden möchten, müssen Sie sich über einige Dinge im Klaren sein.

Wenn Sie Minifizierungs- oder Verschleierungstools verwenden, um Ihren endgültigen Code bereitzustellen, müssen Sie Ihren Quellcode für den [AMO-Bewertungsprozess](#der_bewertungsprozess) bereitstellen. Außerdem müssen die von Ihnen verwendeten Tools – für Minifizierung, Verschleierung und Build-Prozesse – Open Source sein (oder eine unbegrenzte kostenlose Nutzung anbieten) und auf dem Computer des Prüfers (Windows, Mac oder Linux) ausführbar sein. Leider können unsere Prüfer nicht mit kommerziellen oder webbasierten Tools arbeiten.

[Erfahren Sie mehr über Entwicklungstools auf Extension Workshop](https://extensionworkshop.com/documentation/develop/browser-extension-development-tools/)

## Drittanbieter-Bibliotheken

Drittanbieter-Bibliotheken sind eine großartige Möglichkeit, schnell komplexe Funktionen oder Features zu Ihren Browser-Erweiterungen hinzuzufügen. Wenn Sie eine Erweiterung beim [AMO-Bewertungsprozess](#der_bewertungsprozess) einreichen, wird der Prozess auch alle verwendeten Drittanbieter-Bibliotheken berücksichtigen. Um die Überprüfung zu beschleunigen, sollten Sie Drittanbieter-Bibliotheken immer von ihrer offiziellen Website oder dem offiziellen Repository herunterladen und, falls die Bibliothek minifiziert ist, einen Link zum Quellcode bereitstellen. Bitte beachten Sie, dass Drittanbieter-Bibliotheken in keiner Weise geändert werden dürfen.

[Erfahren Sie mehr über das Einreichen von Quellcode auf Extension Workshop](https://extensionworkshop.com/documentation/publish/source-code-submission/)

## Die Firefox Add-on-Vertriebsvereinbarung

Browser-Erweiterungen müssen signiert sein, um in den Release- oder Beta-Versionen von Firefox installiert zu werden. Das Signieren erfolgt auf addons.mozilla.org (AMO) und unterliegt den Bedingungen der Firefox Add-on-Vertriebsvereinbarung. Ziel der Vereinbarung ist es, sicherzustellen, dass Firefox-Nutzer Zugriff auf gut unterstützte, qualitativ hochwertige Add-ons erhalten, die das Firefox-Erlebnis verbessern.

[Lesen Sie die Vereinbarung auf Extension Workshop](https://extensionworkshop.com/documentation/publish/firefox-add-on-distribution-agreement/)

[Erfahren Sie mehr über das Signieren auf Extension Workshop](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)

## Der Bewertungsprozess

Wenn eine Browser-Erweiterung zur Signierung eingereicht wird, unterliegt sie einer automatisierten Überprüfung. Sie kann auch einer manuellen Überprüfung unterzogen werden, wenn die automatisierte Überprüfung feststellt, dass eine manuelle Überprüfung erforderlich ist. Ihre Browser-Erweiterung wird erst signiert, wenn sie die automatische Überprüfung bestanden hat, und die Signierung kann widerrufen werden, wenn sie die manuelle Überprüfung nicht besteht. Der Bewertungsprozess folgt einer strengen Reihe von Richtlinien, sodass es einfach ist, mögliche Bewertungsprobleme im Voraus zu erkennen und zu vermeiden.

[Informieren Sie sich über die Bewertungsrichtlinien und -richtlinien auf Extension Workshop](https://extensionworkshop.com/documentation/publish/add-on-policies/)

## AMO empfohlene Browser-Erweiterungen

Wenn Sie sich entscheiden, Ihre Browser-Erweiterung auf AMO aufzulisten, könnte Ihre Erweiterung auf der AMO-Website, im Add-on-Manager des Firefox-Browsers oder an anderer Stelle auf einer Mozilla-Website hervorgehoben werden. Wir haben eine Liste mit Richtlinien zusammengestellt, wie Erweiterungen für eine Hervorhebung ausgewählt werden. Indem Sie diese Richtlinien befolgen, geben Sie Ihrer Erweiterung die beste Chance, hervorgehoben zu werden.

[Erfahren Sie mehr darüber, wie Ihre Add-ons hervorgehoben werden können, auf Extension Workshop](https://extensionworkshop.com/documentation/publish/recommended-extensions/)

## Setzen Sie Ihr Lernerlebnis fort

Nun wissen Sie, was vor Ihnen liegt, es ist Zeit, tiefer in die Details der Browser-Erweiterungsentwicklung einzutauchen. In den folgenden Abschnitten werden Sie entdecken:

- Mehr über die grundlegenden Konzepte hinter Browser-Erweiterungen, beginnend mit Details darüber, wie Sie die [JavaScript-APIs verwenden](/de/docs/Mozilla/Add-ons/WebExtensions/API).
- Eine Anleitung zu den [Benutzeroberflächenkomponenten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface), die für Ihre Browser-Erweiterungen verfügbar sind.
- Eine Sammlung von Anleitungen, wie man wichtige Aufgaben in Ihren Erweiterungen erreicht oder die JavaScript-APIs nutzt.
- Ein vollständiges Referenzhandbuch zu den [JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs).
- Ein vollständiges Referenzhandbuch zu den [Manifest-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

Sie sollten auch zum Extension Workshop gehen, wo Sie alles finden, was Sie über die Erstellung von Erweiterungen für Firefox wissen müssen, einschließlich:

- [einer Übersicht über die Firefox-Erweiterungsfunktionen](https://extensionworkshop.com/#about)
- [Details zu den Tools und Prozessen für die Entwicklung und das Testen](https://extensionworkshop.com/documentation/develop/)
- [wie Sie Ihre Erweiterung auf addons.mozilla.org veröffentlichen oder selbst vertreiben](https://extensionworkshop.com/documentation/publish/)
- [wie Sie Ihre veröffentlichte Erweiterung verwalten](https://extensionworkshop.com/documentation/manage/)
- [einem Unternehmensleitfaden für die Entwicklung und Nutzung von Erweiterungen](https://extensionworkshop.com/documentation/enterprise/)
- [wie Sie Themes für Firefox entwickeln](https://extensionworkshop.com/documentation/themes/)
- [Details zu den Firefox-Entwickler-Communities](https://extensionworkshop.com/community/)

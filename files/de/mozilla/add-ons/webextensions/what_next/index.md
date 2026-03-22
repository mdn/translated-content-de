---
title: Was nun?
slug: Mozilla/Add-ons/WebExtensions/What_next
l10n:
  sourceCommit: ee33efab7300d7bf7319921a22f2eb2b60df91da
---

Sie sind nun bereit, Ihre Ideen für eine Browsererweiterung in die Tat umzusetzen. Bevor Sie diese Reise antreten, ist es sinnvoll, sich über einige Dinge im Klaren zu sein, die diesen Prozess reibungsloser gestalten werden.

Weitere Informationen zu vielen der auf dieser Seite besprochenen Themen finden Sie auf dem [Extension Workshop](https://extensionworkshop.com/), einer Website, die Ihnen beim Schreiben, Testen, Veröffentlichen und Verteilen von Erweiterungen für Firefox hilft.

## Ihre Entwicklungsumgebung

Sie benötigen keine speziellen Entwicklungs- oder Build-Umgebungstools, um Erweiterungen zu erstellen: Es ist durchaus möglich, großartige Erweiterungen nur mit einem Texteditor zu erstellen. Wenn Sie jedoch bereits für das Web entwickeln und ein Toolset sowie eine Umgebung verwenden, die Sie weiterverwenden möchten, sollten Sie ein paar Dinge beachten.

Wenn Sie Werkzeuge zur Minimierung oder Verschleierung verwenden, um Ihren endgültigen Code zu liefern, müssen Sie Ihren Quellcode für den [AMO-Überprüfungsprozess](#der_überprüfungsprozess) bereitstellen. Außerdem müssen die von Ihnen verwendeten Werkzeuge - für Minimierung, Verschleierung und Build-Prozesse - Open Source sein (oder unbegrenzte kostenlose Nutzung bieten) und auf dem Computer des Prüfers (Windows, Mac oder Linux) ausführbar sein. Leider können unsere Prüfer nicht mit kommerziellen oder webbasierten Werkzeugen arbeiten.

[Erfahren Sie mehr über Entwicklungstools im Extension Workshop.](https://extensionworkshop.com/documentation/develop/browser-extension-development-tools/)

## Drittanbieter-Bibliotheken

Drittanbieter-Bibliotheken sind eine großartige Möglichkeit, um schnell komplexe Funktionen oder Features zu Ihren Erweiterungen hinzuzufügen. Wenn Sie eine Erweiterung zum [AMO-Überprüfungsprozess](#der_überprüfungsprozess) einreichen, werden auch alle verwendeten Drittanbieter-Bibliotheken berücksichtigt. Um die Überprüfung zu erleichtern, stellen Sie sicher, dass Sie jede Drittanbieter-Bibliothek immer von ihrer offiziellen Website oder ihrem Repository herunterladen und, wenn die Bibliothek minimiert ist, einen Link zum Quellcode bereitstellen. Modifizieren Sie Drittanbieter-Bibliotheken nicht.

[Erfahren Sie mehr über die Einreichung von Quellcode im Extension Workshop](https://extensionworkshop.com/documentation/publish/source-code-submission/)

## Die Firefox-Add-on-Vertriebsvereinbarung

Browser-Erweiterungen müssen signiert werden, um in den Release- oder Beta-Versionen von Firefox installiert zu werden. Die Signierung erfolgt auf addons.mozilla.org (AMO) und unterliegt den Bestimmungen der Firefox-Add-on-Vertriebsvereinbarung. Das Ziel der Vereinbarung ist es sicherzustellen, dass Firefox-Nutzer Zugriff auf gut unterstützte, qualitativ hochwertige Add-ons haben, die die Firefox-Erfahrung verbessern.

[Lesen Sie die Vereinbarung im Extension Workshop](https://extensionworkshop.com/documentation/publish/firefox-add-on-distribution-agreement/)

[Erfahren Sie mehr über das Signieren im Extension Workshop](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)

## Der Überprüfungsprozess

Wenn Sie eine Erweiterung zur Signierung einreichen, unterliegt sie einer automatischen Überprüfung. Die automatische Überprüfung kann auch bestimmen, dass eine manuelle Überprüfung erforderlich ist. AMO wird Ihre Browsererweiterung nicht signieren, bis sie die automatische Überprüfung bestanden hat, und es kann die Signierung aufheben, wenn Ihre Erweiterung die manuelle Überprüfung nicht besteht. Der Überprüfungsprozess folgt strengen Richtlinien, die es einfach machen, potenzielle Überprüfungsprobleme zu erkennen und zu vermeiden.

[Informieren Sie sich über die Überprüfungspolitik und -richtlinien im Extension Workshop](https://extensionworkshop.com/documentation/publish/add-on-policies/)

## Ausgewählte Browser-Erweiterungen auf AMO

Wenn Sie sich entscheiden, Ihre Browsererweiterung auf AMO aufzulisten, könnten wir sie auf der AMO-Website, im Firefox-Add-on-Manager oder anderswo auf einer Mozilla-Website präsentieren. Wir haben eine Liste von Richtlinien zusammengestellt, um Erweiterungen auszuwählen, die hervorgehoben werden sollen. Wenn Sie diesen Richtlinien folgen, geben Sie Ihrer Erweiterung die beste Chance, vorgestellt zu werden.

[Erfahren Sie mehr darüber, wie Ihre Add-ons vorgestellt werden können im Extension Workshop](https://extensionworkshop.com/documentation/publish/recommended-extensions/)

## Setzen Sie Ihr Lernerlebnis fort

Jetzt, da Sie wissen, was auf Sie zukommt, ist es an der Zeit, tiefer in die Details der Entwicklung von Erweiterungen einzutauchen, und zu entdecken:

- Mehr über die grundlegenden Konzepte hinter Browser-Erweiterungen, beginnend mit Details zur [Verwendung der JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API).
- Einen Leitfaden zu den [Benutzeroberflächenkomponenten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface), die Ihren Erweiterungen zur Verfügung stehen.
- Eine Sammlung von Anleitungen zur Durchführung wichtiger Aufgaben in Ihren Erweiterungen oder zur Nutzung der JavaScript-APIs.
- Einen vollständigen Referenzleitfaden zu den [JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs).
- Einen vollständigen Referenzleitfaden zu den [Manifest-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

Besuchen Sie auch den Extension Workshop, wo Sie alles finden, was Sie über die Erstellung von Erweiterungen für Firefox wissen müssen, einschließlich:

- [Ein Überblick über die Funktionen von Firefox-Erweiterungen](https://extensionworkshop.com/#about)
- [Details zu den Werkzeugen und Prozessen für die Entwicklung und das Testen](https://extensionworkshop.com/documentation/develop/)
- [Wie Sie Ihre Erweiterung auf addons.mozilla.org veröffentlichen oder selbst verteilen können](https://extensionworkshop.com/documentation/publish/)
- [Wie Sie Ihre veröffentlichte Erweiterung verwalten](https://extensionworkshop.com/documentation/manage/)
- [Ein Unternehmensleitfaden zur Entwicklung und Nutzung von Erweiterungen](https://extensionworkshop.com/documentation/enterprise/)
- [Wie Sie Themes für Firefox entwickeln](https://extensionworkshop.com/documentation/themes/)
- [Details zu den Firefox-Entwicklergemeinschaften](https://extensionworkshop.com/community/)

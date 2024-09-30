---
title: Was nun?
slug: Mozilla/Add-ons/WebExtensions/What_next
l10n:
  sourceCommit: 8e318f66a4433d20190f167f3da108d4b27e93f2
---

{{AddonSidebar}}

Sie sind nun bereit, Ihre Idee für eine Browsererweiterung in die Realität umzusetzen. Bevor Sie diese Reise antreten, sollten Sie sich einiger Dinge bewusst sein, die dazu beitragen, dass sie reibungslos verläuft.

Mehr Informationen zu vielen der auf dieser Seite besprochenen Themen finden Sie im [Extension Workshop](https://extensionworkshop.com), einer Website, die Ihnen beim Schreiben, Testen, Veröffentlichen und Verteilen von Erweiterungen für Firefox hilft.

## Ihre Entwicklungsumgebung

Zur Erstellung von Browsererweiterungen benötigen Sie keine speziellen Entwicklungs- oder Build-Umgebungstools: Es ist durchaus möglich, großartige Browsererweiterungen mit nichts weiter als einem Texteditor zu erstellen. Wenn Sie jedoch bereits für das Web entwickelt haben und über ein Set an Tools und eine Umgebung verfügen, die Sie wiederverwenden möchten, sollten Sie ein paar Dinge beachten.

Wenn Sie Minifizierungs- oder Verschleierungstools verwenden, um Ihren endgültigen Code zu liefern, müssen Sie Ihren Quellcode für den [AMO-Überprüfungsprozess](#der_überprüfungsprozess) bereitstellen. Außerdem müssen die von Ihnen verwendeten Tools—diejenigen für Minifizierung, Verschleierung und Build-Prozesse—Open Source sein (oder unbegrenzte kostenlose Nutzung bieten) und auf dem Computer des Prüfers (Windows, Mac oder Linux) ausführbar sein. Leider können unsere Prüfer nicht mit kommerziellen oder webbasierten Tools arbeiten.

[Erfahren Sie mehr über Entwicklungstools im Extension Workshop](https://extensionworkshop.com/documentation/develop/browser-extension-development-tools/)

## Drittanbieter-Bibliotheken

Drittanbieter-Bibliotheken sind eine großartige Möglichkeit, schnell komplexe Funktionen oder Merkmale zu Ihren Browsererweiterungen hinzuzufügen. Wenn Sie eine Erweiterung für den [AMO-Überprüfungsprozess](#der_überprüfungsprozess) einreichen, werden auch alle verwendeten Drittanbieter-Bibliotheken in Betracht gezogen. Um die Überprüfung zu beschleunigen, laden Sie Drittanbieter-Bibliotheken immer von deren offizieller Website oder Repository herunter, und wenn die Bibliothek minifiziert ist, stellen Sie einen Link zum Quellcode bereit. Bitte beachten Sie, dass Drittanbieter-Bibliotheken in keiner Weise modifiziert werden dürfen.

[Erfahren Sie mehr über die Einreichung von Quellcodes im Extension Workshop](https://extensionworkshop.com/documentation/publish/source-code-submission/)

## Die Firefox Add-on Distribution Agreement

Browsererweiterungen müssen signiert werden, um in den Release- oder Beta-Versionen von Firefox installiert zu werden. Das Signieren findet auf addons.mozilla.org (AMO) statt und unterliegt den Bedingungen der Firefox Add-on Distribution Agreement. Ziel der Vereinbarung ist es, sicherzustellen, dass Firefox-Benutzer Zugriff auf gut unterstützte, qualitativ hochwertige Add-ons haben, die die Firefox-Erfahrung verbessern.

[Lesen Sie die Vereinbarung im Extension Workshop](https://extensionworkshop.com/documentation/publish/firefox-add-on-distribution-agreement/)

[Erfahren Sie mehr über das Signieren im Extension Workshop](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)

## Der Überprüfungsprozess

Wenn eine Browsererweiterung zum Signieren eingereicht wird, unterliegt sie einer automatisierten Überprüfung. Sie kann zudem einer manuellen Überprüfung unterzogen werden, wenn die automatisierte Überprüfung feststellt, dass eine manuelle Überprüfung erforderlich ist. Ihre Browsererweiterung wird erst dann signiert, wenn sie die automatisierte Überprüfung bestanden hat und ihre Signierung kann widerrufen werden, wenn sie die manuelle Überprüfung nicht besteht. Der Überprüfungsprozess folgt einem strengen Satz von Richtlinien, sodass es einfach ist, mögliche Überprüfungsprobleme zu vermeiden.

[Überprüfen Sie die Richtlinien zur Überprüfung im Extension Workshop](https://extensionworkshop.com/documentation/publish/add-on-policies/)

## AMO empfohlene Browsererweiterungen

Wenn Sie sich entscheiden, Ihre Browsererweiterung auf AMO zu listen, könnte Ihre Erweiterung auf der AMO-Website, im Add-on-Manager des Firefox-Browsers oder an anderer Stelle auf einer Mozilla-Website vorgestellt werden. Wir haben eine Liste von Richtlinien zusammengestellt, wie Erweiterungen für die Präsentation ausgewählt werden. Wenn Sie diesen Richtlinien folgen, erhöhen Sie die Chance, dass Ihre Erweiterung vorgestellt wird.

[Erfahren Sie mehr darüber, wie Ihre Add-ons im Extension Workshop vorgestellt werden](https://extensionworkshop.com/documentation/publish/recommended-extensions/)

## Setzen Sie Ihre Lernerfahrung fort

Jetzt, da Sie wissen, was vor Ihnen liegt, ist es an der Zeit, sich tiefer mit der Entwicklung von Browsererweiterungen zu befassen. In den folgenden Abschnitten erfahren Sie:

- Mehr über die grundlegenden Konzepte hinter Browsererweiterungen, beginnend mit Details zur [Verwendung der JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API).
- Ein Leitfaden zu den [Benutzeroberflächenkomponenten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface), die Ihren Browsererweiterungen zur Verfügung stehen.
- Eine Sammlung von Anleitungen zur Durchführung wichtiger Aufgaben in Ihren Erweiterungen oder zur Nutzung der JavaScript-APIs.
- Ein vollständiger Referenzleitfaden zu den [JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs).
- Ein vollständiger Referenzleitfaden zu den [Manifest-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

Sie sollten auch den Extension Workshop besuchen, wo Sie alles finden, was Sie über das Erstellen von Erweiterungen für Firefox wissen müssen, einschließlich:

- [einem Überblick über die Firefox-Erweiterungsmerkmale](https://extensionworkshop.com/#about)
- [Details zu den Werkzeugen und Prozessen für die Entwicklung und das Testen](https://extensionworkshop.com/documentation/develop/)
- [wie Sie Ihre Erweiterung auf addons.mozilla.org veröffentlichen oder selbst verteilen](https://extensionworkshop.com/documentation/publish/)
- [wie Sie Ihre veröffentlichte Erweiterung verwalten](https://extensionworkshop.com/documentation/manage/)
- [ein Leitfaden für Unternehmen zur Entwicklung und Nutzung von Erweiterungen](https://extensionworkshop.com/documentation/enterprise/)
- [wie man Themes für Firefox entwickelt](https://extensionworkshop.com/documentation/themes/)
- [Details zu den Entwicklergemeinschaften von Firefox](https://extensionworkshop.com/community/)

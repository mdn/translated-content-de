---
title: Was nun?
slug: Mozilla/Add-ons/WebExtensions/What_next
l10n:
  sourceCommit: 30bf998d2d87c97c2865d713ad5afc9c476264a0
---

{{AddonSidebar}}

Sie sind nun bereit, Ihre Idee für eine Browser-Erweiterung in die Realität umzusetzen. Bevor Sie diese Reise antreten, sollten Sie einige Dinge beachten, die den Prozess erleichtern werden.

Weitere Informationen zu vielen der hier besprochenen Themen finden Sie auf dem [Extension Workshop](https://extensionworkshop.com/), einer Website, die Ihnen beim Schreiben, Testen, Veröffentlichen und Verteilen von Erweiterungen für Firefox hilft.

## Ihre Entwicklungsumgebung

Sie benötigen keine speziellen Entwicklungs- oder Build-Umgebungstools, um Browser-Erweiterungen zu erstellen: Es ist durchaus möglich, großartige Browser-Erweiterungen nur mit einem Texteditor zu erstellen. Wenn Sie jedoch bereits für das Web entwickeln und ein Set von Tools und eine Umgebung haben, die Sie wiederverwenden möchten, müssen Sie einige Dinge beachten.

Wenn Sie Minifizierungs- oder Obfuskationstools zur Auslieferung Ihres endgültigen Codes verwenden, müssen Sie Ihren Quellcode dem [AMO-Überprüfungsprozess](#der_überprüfungsprozess) zur Verfügung stellen. Außerdem müssen die von Ihnen verwendeten Tools—sowohl für Minifizierung, Obfuskation als auch Build-Prozesse—Open Source (oder uneingeschränkt kostenlos nutzbar) sein und auf dem Computer des Prüfers (Windows, Mac oder Linux) ausführbar sein. Leider können unsere Prüfer nicht mit kommerziellen oder webbasierten Tools arbeiten.

[Erfahren Sie mehr über Entwicklungstools auf dem Extension Workshop](https://extensionworkshop.com/documentation/develop/browser-extension-development-tools/)

## Drittanbieter-Bibliotheken

Drittanbieter-Bibliotheken sind eine großartige Möglichkeit, komplexe Funktionen oder Funktionalitäten schnell zu Ihren Browser-Erweiterungen hinzuzufügen. Wenn Sie eine Erweiterung zum [AMO-Überprüfungsprozess](#der_überprüfungsprozess) einreichen, wird im Prozess auch jede verwendete Drittanbieter-Bibliothek berücksichtigt. Um die Überprüfung zu vereinfachen, sollten Sie Drittanbieter-Bibliotheken immer von ihrer offiziellen Website oder ihrem Repository herunterladen, und wenn die Bibliothek minifiziert ist, einen Link zum Quellcode bereitstellen. Bitte beachten Sie, dass Drittanbieter-Bibliotheken in keiner Weise verändert werden dürfen.

[Erfahren Sie mehr über die Einreichung von Quellcode auf dem Extension Workshop](https://extensionworkshop.com/documentation/publish/source-code-submission/)

## Vereinbarung zur Verbreitung von Firefox-Add-ons

Browser-Erweiterungen müssen signiert werden, um in den Release- oder Beta-Versionen von Firefox installiert zu werden. Das Signieren erfolgt auf addons.mozilla.org (AMO) und unterliegt den Bedingungen der Vereinbarung zur Verbreitung von Firefox-Add-ons. Ziel der Vereinbarung ist es, sicherzustellen, dass Firefox-Nutzer Zugriff auf gut unterstützte, qualitativ hochwertige Add-ons haben, die das Firefox-Erlebnis bereichern.

[Lesen Sie die Vereinbarung auf dem Extension Workshop](https://extensionworkshop.com/documentation/publish/firefox-add-on-distribution-agreement/)

[Erfahren Sie mehr über das Signieren auf dem Extension Workshop](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)

## Der Überprüfungsprozess

Wenn eine Browser-Erweiterung zum Signieren eingereicht wird, unterliegt sie einer automatischen Prüfung. Sie kann auch einer manuellen Prüfung unterzogen werden, wenn die automatische Prüfung feststellt, dass eine manuelle Überprüfung erforderlich ist. Ihre Browser-Erweiterung wird erst signiert, wenn sie die automatische Überprüfung bestanden hat und kann ihre Signierung verlieren, wenn sie die manuelle Überprüfung nicht besteht. Der Überprüfungsprozess folgt einem strikten Satz von Richtlinien, so dass es einfach ist, mögliche Überprüfungsprobleme zu vermeiden.

[Überprüfungsrichtlinien und Richtlinien auf dem Extension Workshop ansehen](https://extensionworkshop.com/documentation/publish/add-on-policies/)

## Auf AMO vorgestellte Browser-Erweiterungen

Wenn Sie sich entscheiden, Ihre Browser-Erweiterung auf AMO aufzulisten, könnte Ihre Erweiterung auf der AMO-Website, im Add-on-Manager von Firefox oder anderswo auf einer Mozilla-Website vorgestellt werden. Wir haben eine Liste von Richtlinien zusammengestellt, wie Erweiterungen für eine Präsentation ausgewählt werden. Indem Sie diesen Richtlinien folgen, geben Sie Ihrer Erweiterung die besten Chancen, vorgestellt zu werden.

[Erfahren Sie mehr darüber, wie Ihre Add-ons auf dem Extension Workshop vorgestellt werden können](https://extensionworkshop.com/documentation/publish/recommended-extensions/)

## Setzen Sie Ihr Lernerlebnis fort

Jetzt, da Sie wissen, was vor Ihnen liegt, ist es an der Zeit, tiefer in die Details der Browser-Erweiterungsentwicklung einzutauchen. In den folgenden Abschnitten werden Sie entdecken:

- Mehr über die grundlegenden Konzepte hinter Browser-Erweiterungen, beginnend mit Details darüber, wie man die [JavaScript-APIs verwendet](/de/docs/Mozilla/Add-ons/WebExtensions/API).
- Ein Leitfaden zu den [Benutzeroberflächenkomponenten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface), die Ihren Browser-Erweiterungen zur Verfügung stehen.
- Eine Sammlung von Anleitungen zur Erreichung wichtiger Aufgaben in Ihren Erweiterungen oder zur Nutzung der JavaScript-APIs.
- Ein vollständiger Referenzleitfaden zu den [JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs).
- Ein vollständiger Referenzleitfaden zu den [Manifest-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

Sie sollten auch zum Extension Workshop gehen, wo Sie alles finden, was Sie über die Erstellung von Erweiterungen für Firefox wissen müssen, einschließlich:

- [einem Überblick über die Firefox-Erweiterungsfunktionen](https://extensionworkshop.com/#about)
- [Details zu den Tools und Prozessen für Entwicklung und Testen](https://extensionworkshop.com/documentation/develop/)
- [wie Sie Ihre Erweiterung auf addons.mozilla.org veröffentlichen oder selbst verteilen können](https://extensionworkshop.com/documentation/publish/)
- [wie Sie Ihre veröffentlichte Erweiterung verwalten](https://extensionworkshop.com/documentation/manage/)
- [einem Unternehmensleitfaden zur Entwicklung und Nutzung von Erweiterungen](https://extensionworkshop.com/documentation/enterprise/)
- [wie man Themes für Firefox entwickelt](https://extensionworkshop.com/documentation/themes/)
- [Details zu den Firefox-Entwicklergemeinschaften](https://extensionworkshop.com/community/)

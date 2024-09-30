---
title: Client-side Web-APIs
slug: Learn/JavaScript/Client-side_web_APIs
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}

Bei der Entwicklung von Client-seitigem JavaScript für Websites oder Anwendungen werden Sie schnell auf **Application Programming Interfaces** (**APIs**) stoßen. APIs sind Programmierfunktionen zur Manipulation verschiedener Aspekte des Browsers und Betriebssystems, auf dem die Website läuft, oder zur Manipulation von Daten anderer Websites oder Dienste. In diesem Modul werden wir erkunden, was APIs sind und wie Sie einige der am häufigsten vorkommenden APIs verwenden können, die Ihnen in Ihrer Entwicklungsarbeit häufig begegnen.

## Voraussetzungen

Um das Beste aus diesem Modul herauszuholen, sollten Sie die vorherigen JavaScript-Module der Serie ([Erste Schritte](/de/docs/Learn/JavaScript/First_steps), [Bausteine](/de/docs/Learn/JavaScript/Building_blocks) und [JavaScript-Objekte](/de/docs/Learn/JavaScript/Objects)) durchgearbeitet haben. Diese Module beinhalten typischerweise eine einfache Nutzung von APIs, da es oft schwierig ist, Client-seitige JavaScript-Beispiele ohne sie zu schreiben. Für dieses Tutorial gehen wir davon aus, dass Sie Kenntnisse über die grundlegende JavaScript-Sprache besitzen und wir werden gängige Web-APIs etwas detaillierter untersuchen.

Grundkenntnisse in [HTML](/de/docs/Learn/HTML) und [CSS](/de/docs/Learn/CSS) wären ebenfalls nützlich.

> [!NOTE]
> Wenn Sie auf einem Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, könnten Sie (die meisten) der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Leitfäden

- [Einführung in Web-APIs](/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
  - : Zuerst werden wir APIs auf einer hohen Ebene betrachten – was sind sie, wie funktionieren sie, wie verwendet man sie im Code und wie sind sie strukturiert? Außerdem werfen wir einen Blick darauf, welche unterschiedlichen Hauptklassen von APIs es gibt und welche Verwendungen sie haben.
- [Manipulation von Dokumenten](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
  - : Beim Verfassen von Webseiten und Apps ist es eine der häufigsten Aufgaben, Webdokumente auf irgendeine Weise zu manipulieren. Dies geschieht normalerweise durch die Verwendung des Document Object Model (DOM), einem Satz von APIs zur Steuerung von HTML- und Stilinformationen, das stark auf das [`Document`](/de/docs/Web/API/Document)-Objekt zurückgreift. In diesem Artikel werden wir im Detail betrachten, wie man das DOM verwendet, sowie einige andere interessante APIs, die Ihre Umgebung auf interessante Weise verändern können.
- [Daten vom Server abrufen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
  - : Eine weitere sehr häufige Aufgabe in modernen Websites und Anwendungen ist das Abrufen einzelner Datenobjekte vom Server, um Abschnitte einer Webseite zu aktualisieren, ohne eine komplett neue Seite laden zu müssen. Dieses scheinbar kleine Detail hat einen großen Einfluss auf die Leistung und das Verhalten von Websites gehabt. In diesem Artikel erklären wir das Konzept und betrachten Technologien, die dies ermöglichen, wie [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und die [Fetch API](/de/docs/Web/API/Fetch_API).
- [Drittanbieter-APIs](/de/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
  - : Die APIs, die wir bisher behandelt haben, sind in den Browser integriert, aber nicht alle APIs sind es. Viele große Websites und Dienste wie Google Maps, Facebook, PayPal usw. bieten APIs, die es Entwicklern ermöglichen, deren Daten oder Dienste zu nutzen (z. B. benutzerdefinierte Google Maps auf Ihrer Website anzuzeigen oder die Facebook-Anmeldung zu verwenden, um Ihre Nutzer anzumelden). Dieser Artikel betrachtet den Unterschied zwischen Browser-APIs und Drittanbieter-APIs und zeigt einige typische Verwendungen der letzteren.
- [Grafiken zeichnen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
  - : Der Browser enthält einige sehr leistungsfähige Grafikprogrammierungstools, von der Scalable Vector Graphics ([SVG](/de/docs/Web/SVG))-Sprache bis hin zu APIs zum Zeichnen auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [The Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in die Canvas API und weitere Ressourcen, um Ihnen zu ermöglichen, mehr zu lernen.
- [Video- und Audio-APIs](/de/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
  - : HTML beinhaltet Elemente zum Einbetten von Multimedia-Inhalten in Dokumente – {{htmlelement("video")}} und {{htmlelement("audio")}} – die wiederum eigene APIs für die Steuerung der Wiedergabe, Suche usw. haben. Dieser Artikel zeigt Ihnen, wie Sie gängige Aufgaben wie das Erstellen benutzerdefinierter Wiedergabesteuerungen durchführen.
- [Client-seitige Speicherung](/de/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
  - : Moderne Webbrowser verfügen über eine Reihe verschiedener Technologien, die es Ihnen ermöglichen, datenbezogene Websites zu speichern und bei Bedarf abzurufen, was es Ihnen ermöglicht, Daten langfristig zu speichern, Sites offline zu speichern und mehr. Dieser Artikel erklärt die Grundlagen, wie diese funktionieren.

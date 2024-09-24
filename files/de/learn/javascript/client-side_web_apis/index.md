---
title: Client-seitige Web-APIs
slug: Learn/JavaScript/Client-side_web_APIs
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}

Beim Schreiben von clientseitigem JavaScript für Websites oder Anwendungen stoßen Sie schnell auf **Application Programming Interfaces** (**APIs**). APIs sind Programmierfunktionen zur Manipulation verschiedener Aspekte des Browsers und des Betriebssystems, auf dem die Website läuft, oder zur Manipulation von Daten anderer Websites oder Dienste. In diesem Modul werden wir erkunden, was APIs sind und wie Sie einige der häufigsten APIs verwenden, auf die Sie in Ihrer Entwicklungsarbeit häufig stoßen werden.

## Voraussetzungen

Um das Beste aus diesem Modul herauszuholen, sollten Sie die vorherigen JavaScript-Module der Serie ([Erste Schritte](/de/docs/Learn/JavaScript/First_steps), [Bausteine](/de/docs/Learn/JavaScript/Building_blocks) und [JavaScript-Objekte](/de/docs/Learn/JavaScript/Objects)) durchgearbeitet haben. Diese Module enthalten typischerweise grundlegende API-Nutzung, da es oft schwierig ist, clientseitige JavaScript-Beispiele ohne sie zu schreiben. Für dieses Tutorial gehen wir davon aus, dass Sie mit der Kernsprache JavaScript vertraut sind, und werden gängige Web-APIs etwas genauer erkunden.

Grundkenntnisse in [HTML](/de/docs/Learn/HTML) und [CSS](/de/docs/Learn/CSS) wären ebenfalls nützlich.

> [!NOTE]
> Wenn Sie an einem Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, könnten Sie (die meisten) der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Anleitungen

- [Einführung in Web-APIs](/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
  - : Zuerst betrachten wir APIs auf einer hohen Ebene — was sind sie, wie funktionieren sie, wie verwendet man sie im Code, und wie sind sie strukturiert? Wir werden auch einen Blick auf die verschiedenen Hauptklassen von APIs werfen und deren Nutzungsmöglichkeiten.
- [Manipulieren von Dokumenten](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
  - : Beim Schreiben von Webseiten und Apps möchten Sie häufig Webdokumente auf irgendeine Weise manipulieren. Dies geschieht in der Regel mithilfe des Document Object Model (DOM), einer Reihe von APIs zur Steuerung von HTML und Styling-Informationen, die stark das {{domxref("Document")}}-Objekt nutzen. In diesem Artikel schauen wir uns im Detail an, wie das DOM verwendet wird, zusammen mit einigen anderen interessanten APIs, die Ihre Umgebung auf interessante Weise verändern können.
- [Abrufen von Daten vom Server](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
  - : Eine weitere sehr häufige Aufgabe in modernen Websites und Anwendungen ist das Abrufen einzelner Datenobjekte vom Server, um Abschnitte einer Webseite zu aktualisieren, ohne eine vollständig neue Seite laden zu müssen. Dieses scheinbar kleine Detail hat einen großen Einfluss auf die Leistung und das Verhalten von Websites. In diesem Artikel erklären wir das Konzept und betrachten Technologien, die dies ermöglichen, wie {{domxref("XMLHttpRequest")}} und die [Fetch API](/de/docs/Web/API/Fetch_API).
- [Drittanbieter-APIs](/de/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
  - : Die APIs, die wir bisher behandelt haben, sind in den Browser integriert, aber nicht alle APIs sind es. Viele große Websites und Dienste wie Google Maps, Facebook, PayPal usw. bieten APIs an, die es Entwicklern ermöglichen, ihre Daten oder Dienste zu nutzen (z. B. benutzerdefinierte Google Maps auf Ihrer Website anzuzeigen oder Facebook-Login für die Anmeldung Ihrer Benutzer zu verwenden). Dieser Artikel betrachtet den Unterschied zwischen Browser-APIs und Drittanbieter-APIs und zeigt einige typische Anwendungen der letzteren.
- [Grafiken zeichnen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
  - : Der Browser enthält einige sehr leistungsstarke Grafikprogrammierungstools, von der Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) Sprache, bis hin zu APIs zum Zeichnen auf HTML {{htmlelement("canvas")}}-Elementen (siehe [The Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in die Canvas-API und weitere Ressourcen, um mehr darüber zu erfahren.
- [Video- und Audio-APIs](/de/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
  - : HTML kommt mit Elementen zum Einbetten von reichhaltigen Medien in Dokumenten — {{htmlelement("video")}} und {{htmlelement("audio")}} — die wiederum ihre eigenen APIs zum Steuern der Wiedergabe, des Suchens usw. haben. Dieser Artikel zeigt Ihnen, wie Sie häufige Aufgaben wie das Erstellen benutzerdefinierter Wiedergabesteuerungen durchführen.
- [Client-seitige Speicherung](/de/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
  - : Moderne Webbrowser bieten eine Reihe verschiedener Technologien, die es ermöglichen, datenbezogene Websites zu speichern und bei Bedarf abzurufen, sodass Sie Daten langfristig speichern, Websites offline speichern und mehr können. Dieser Artikel erklärt die Grundlagen, wie diese funktionieren.

---
title: Client-Side-Web-APIs
slug: Learn/JavaScript/Client-side_web_APIs
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}

Wenn Sie clientseitiges JavaScript für Websites oder Anwendungen schreiben, werden Sie schnell auf **Application Programming Interfaces** (**APIs**) stoßen. APIs sind Programmierfunktionen, um verschiedene Aspekte des Browsers und Betriebssystems zu manipulieren, auf dem die Website läuft, oder Daten von anderen Websites oder Diensten zu verarbeiten. In diesem Modul werden wir erkunden, was APIs sind und wie man einige der häufigsten APIs verwendet, denen Sie in Ihrer Entwicklungsarbeit oft begegnen werden.

## Voraussetzungen

Um das Beste aus diesem Modul herauszuholen, sollten Sie die vorherigen JavaScript-Module der Serie durchgearbeitet haben ([Erste Schritte](/de/docs/Learn/JavaScript/First_steps), [Bausteine](/de/docs/Learn/JavaScript/Building_blocks) und [JavaScript-Objekte](/de/docs/Learn/JavaScript/Objects)). Diese Module beinhalten typischerweise einfache API-Verwendung, da es oft schwierig ist, clientseitige JavaScript-Beispiele ohne sie zu schreiben. Für dieses Tutorial setzen wir voraus, dass Sie mit der Kernsprache JavaScript vertraut sind und wir werden gängige Web-APIs etwas detaillierter erkunden.

Grundlegende Kenntnisse von [HTML](/de/docs/Learn/HTML) und [CSS](/de/docs/Learn/CSS) wären ebenfalls nützlich.

> [!NOTE]
> Wenn Sie an einem Gerät arbeiten, an dem Sie keine eigenen Dateien erstellen können, könnten Sie die meisten der Codebeispiele in einem Online-Coding-Programm wie [JS Bin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Leitfäden

- [Einführung in Web-APIs](/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
  - : Zuerst werden wir uns APIs aus einer höheren Perspektive ansehen – was sind sie, wie funktionieren sie, wie verwendet man sie im Code und wie sind sie strukturiert? Wir werden uns auch ansehen, welche verschiedenen Hauptklassen von APIs existieren und welche Verwendungen sie haben.
- [Manipulation von Dokumenten](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
  - : Beim Schreiben von Webseiten und Apps ist eine der häufigsten Aufgaben, Webdokumente in irgendeiner Weise zu manipulieren. Dies geschieht normalerweise durch die Verwendung des Document Object Model (DOM), einer Reihe von APIs zur Steuerung von HTML und Styling-Informationen, die stark das [`Document`](/de/docs/Web/API/Document)-Objekt verwenden. In diesem Artikel schauen wir uns im Detail an, wie man das DOM verwendet, zusammen mit einigen anderen interessanten APIs, die Ihre Umgebung auf interessante Weise ändern können.
- [Abrufen von Daten vom Server](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
  - : Eine weitere sehr häufige Aufgabe in modernen Websites und Anwendungen ist das Abrufen einzelner Datenobjekte vom Server, um Abschnitte einer Webseite zu aktualisieren, ohne eine komplett neue Seite laden zu müssen. Dieses scheinbar kleine Detail hat einen enormen Einfluss auf die Leistung und das Verhalten von Websites. In diesem Artikel erklären wir das Konzept und schauen uns Technologien an, die es ermöglichen, wie [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und die [Fetch API](/de/docs/Web/API/Fetch_API).
- [Drittanbieter-APIs](/de/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
  - : Die bisher behandelten APIs sind in den Browser eingebaut, aber nicht alle APIs sind es. Viele große Websites und Dienste wie Google Maps, Facebook, PayPal, etc. bieten APIs an, die es Entwicklern ermöglichen, deren Daten oder Dienste zu nutzen (z. B. benutzerdefinierte Google Maps auf Ihrer Seite anzuzeigen oder Facebook-Login zu verwenden, um Ihre Benutzer anzumelden). Dieser Artikel behandelt den Unterschied zwischen Browser-APIs und 3rd-Party-APIs und zeigt einige typische Verwendungen der letzteren.
- [Grafiken zeichnen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
  - : Der Browser enthält einige sehr leistungsfähige Grafikprogrammierungstools, von der Sprache Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) bis zu APIs zum Zeichnen auf HTML {{htmlelement("canvas")}}-Elementen (siehe [The Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in die Canvas API und weiterführende Ressourcen, um Ihnen zu ermöglichen, mehr zu lernen.
- [Video- und Audio-APIs](/de/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
  - : HTML enthält Elemente zum Einbetten von Rich-Media in Dokumente — {{htmlelement("video")}} und {{htmlelement("audio")}} — die wiederum ihre eigenen APIs zum Steuern der Wiedergabe, zum Suchen usw. haben. Dieser Artikel zeigt Ihnen, wie Sie gängige Aufgaben wie das Erstellen benutzerdefinierter Wiedergabesteuerungen durchführen können.
- [Client-seitige Speicherung](/de/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
  - : Moderne Webbrowser bieten eine Reihe verschiedener Technologien, die es Ihnen ermöglichen, datenbezogene Informationen zu speichern und sie bei Bedarf abzurufen, sodass Sie Daten langfristig speichern, Websites offline speichern u. m. können. Dieser Artikel erklärt die Grundlagen, wie diese funktionieren.

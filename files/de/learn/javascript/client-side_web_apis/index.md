---
title: Client-seitige Web-APIs
slug: Learn/JavaScript/Client-side_web_APIs
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}

Wenn Sie client-seitiges JavaScript für Websites oder Anwendungen schreiben, stoßen Sie schnell auf **Application Programming Interfaces** (**APIs**). APIs sind Programmfunktionen zur Manipulation verschiedener Aspekte des Browsers und des Betriebssystems, auf dem die Website läuft, oder zur Manipulation von Daten von anderen Websites oder Diensten. In diesem Modul werden wir erkunden, was APIs sind und wie man einige der gebräuchlichsten APIs verwendet, auf die Sie häufig in Ihrer Entwicklungsarbeit stoßen werden.

## Voraussetzungen

Um das Beste aus diesem Modul herauszuholen, sollten Sie die vorhergehenden JavaScript-Module der Serie ([Erste Schritte](/de/docs/Learn/JavaScript/First_steps), [Bausteine](/de/docs/Learn/JavaScript/Building_blocks) und [JavaScript-Objekte](/de/docs/Learn/JavaScript/Objects)) durchgearbeitet haben. Diese Module beinhalten typischerweise einfache API-Verwendungen, da es oft schwierig ist, client-seitige JavaScript-Beispiele ohne sie zu schreiben. Für dieses Tutorial gehen wir davon aus, dass Sie die Kernsprache JavaScript beherrschen, und wir werden gängige Web-APIs etwas detaillierter erkunden.

Grundkenntnisse in [HTML](/de/docs/Learn/HTML) und [CSS](/de/docs/Learn/CSS) wären ebenfalls nützlich.

> [!NOTE]
> Wenn Sie an einem Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, können Sie (die meisten) Beispielcodes in einem Online-Codierprogramm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Leitfäden

- [Einführung in Web-APIs](/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
  - : Zuerst werfen wir einen Blick auf APIs aus einer übergeordneten Perspektive — was sind sie, wie funktionieren sie, wie verwendet man sie im Code und wie sind sie strukturiert? Wir werden auch die verschiedenen Hauptkategorien von APIs betrachten und welche Anwendungen sie haben.
- [Dokumente manipulieren](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
  - : Beim Schreiben von Webseiten und Apps ist es eine der häufigsten Aufgaben, Webdokumente auf irgendeine Weise zu manipulieren. Dies wird in der Regel durch die Verwendung des Document Object Model (DOM) erreicht, einem Satz von APIs zur Steuerung von HTML und Styling-Informationen, der intensiv das [`Document`](/de/docs/Web/API/Document)-Objekt verwendet. In diesem Artikel werden wir uns im Detail ansehen, wie man das DOM verwendet, zusammen mit einigen anderen interessanten APIs, die Ihre Umgebung auf interessante Weise verändern können.
- [Daten vom Server abrufen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
  - : Eine weitere sehr häufige Aufgabe in modernen Websites und Anwendungen ist das Abrufen einzelner Daten von einem Server, um Teile einer Webseite zu aktualisieren, ohne eine völlig neue Seite laden zu müssen. Dieses scheinbar kleine Detail hat einen enormen Einfluss auf die Leistung und das Verhalten von Websites gehabt. In diesem Artikel erklären wir das Konzept und betrachten Technologien, die dies möglich machen, wie z.B. [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und die [Fetch API](/de/docs/Web/API/Fetch_API).
- [Drittanbieter-APIs](/de/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
  - : Die bisher behandelten APIs sind in den Browser integriert, aber nicht alle APIs sind das. Viele große Websites und Dienste wie Google Maps, Facebook, PayPal, etc. bieten APIs, die es Entwicklern ermöglichen, ihre Daten oder Dienste zu nutzen (z. B. benutzerdefinierte Google Maps auf Ihrer Website anzeigen oder Facebook-Login für Ihre Benutzer verwenden). Dieser Artikel betrachtet den Unterschied zwischen Browser-APIs und Drittanbieter-APIs und zeigt einige typische Verwendungen der letzteren.
- [Grafiken zeichnen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
  - : Der Browser enthält einige sehr leistungsfähige Grafikprogrammierungstools, von der Scalable Vector Graphics ([SVG](/de/docs/Web/SVG))-Sprache bis hin zu APIs zum Zeichnen auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [The Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in die Canvas-API und weitere Ressourcen, um mehr zu lernen.
- [Video- und Audio-APIs](/de/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
  - : HTML enthält Elemente zum Einbetten von Multimedia-Inhalten in Dokumente — {{htmlelement("video")}} und {{htmlelement("audio")}} — die wiederum eigene APIs zum Steuern der Wiedergabe, des Suchens usw. besitzen. Dieser Artikel zeigt Ihnen, wie man häufige Aufgaben wie das Erstellen benutzerdefinierter Wiedergabesteuerungen durchführt.
- [Client-seitige Speicherung](/de/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
  - : Moderne Webbrowser bieten eine Reihe verschiedener Technologien, die es Ihnen ermöglichen, datenbezogene Informationen von Websites zu speichern und bei Bedarf abzurufen, was Ihnen ermöglicht, Daten langfristig zu speichern, Websites offline zu speichern und vieles mehr. Dieser Artikel erklärt die Grundlagen, wie diese funktionieren.

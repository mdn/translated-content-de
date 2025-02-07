---
title: Dynamisches Skripting mit JavaScript
slug: Learn_web_development/Core/Scripting
l10n:
  sourceCommit: 07d0f18e4b2ad43185bcc98ce99b7080c6411b2a
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core")}}

JavaScript ist ein umfangreiches Thema mit einer Vielzahl an Funktionen, Stilen und Techniken, die es zu lernen gilt, sowie zahlreichen APIs und Tools, die darauf aufbauen. Dieses Modul konzentriert sich hauptsächlich auf die grundlegenden Aspekte der Kernsprache sowie einige wichtige begleitende Themen — das Erlernen dieser Themen gibt Ihnen eine solide Grundlage, um darauf aufzubauen.

## Voraussetzungen

Vor Beginn dieses Moduls benötigen Sie keine Vorkenntnisse in JavaScript, aber Sie sollten die vorherigen Module in diesem Kurs durchgearbeitet haben. Sie sollten zumindest [HTML](/de/docs/Learn_web_development/Core/Structuring_content) und die [grundlegenden Grundlagen von CSS](/de/docs/Learn_web_development/Core/Styling_basics) kennen.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, können Sie (die meisten) Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Tutorials und Herausforderungen

- [Was ist JavaScript?](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript)
  - : Willkommen im JavaScript-Kurs für Anfänger auf MDN! In diesem ersten Artikel betrachten wir JavaScript auf einer höheren Ebene und beantworten Fragen wie „Was ist das?“ und „Was tut es?“. Dabei stellen wir sicher, dass Sie mit dem Zweck von JavaScript vertraut sind.
- [Ein erster Sprung in JavaScript](/de/docs/Learn_web_development/Core/Scripting/A_first_splash)
  - : Nachdem Sie etwas über die Theorie von JavaScript und dessen Anwendungsmöglichkeiten gelernt haben, geben wir Ihnen in diesem praxisorientierten Tutorial einen Schnellkurs über die grundlegenden Funktionen von JavaScript. Hier entwickeln Sie Schritt für Schritt ein einfaches „Zahlenraten“-Spiel.
- [Was ist schiefgelaufen? Fehlersuche in JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong)
  - : Wenn Sie im vorherigen Artikel das „Zahlenraten“-Spiel erstellt haben, haben Sie vielleicht festgestellt, dass es nicht funktioniert hat. Keine Sorge — dieser Artikel möchte Ihnen einfache Tipps geben, wie Sie Fehler in JavaScript-Programmen finden und beheben können.
- [Das Speichern von Informationen — Variablen](/de/docs/Learn_web_development/Core/Scripting/Variables)
  - : Nach den letzten Artikeln sollten Sie nun wissen, was JavaScript ist, was es für Sie tun kann, wie Sie es zusammen mit anderen Webtechnologien verwenden und wie die Hauptmerkmale auf hoher Ebene aussehen. In diesem Artikel widmen wir uns den Grundlagen: Wie arbeitet man mit den grundlegendsten Bausteinen von JavaScript — Variablen?
- [Grundlegende Mathematik in JavaScript — Zahlen und Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math)
  - : An dieser Stelle im Kurs besprechen wir Mathematik in JavaScript — wie wir Operatoren und andere Funktionen kombinieren können, um erfolgreich mit Zahlen zu arbeiten.
- [Mit Text umgehen — Strings in JavaScript](/de/docs/Learn_web_development/Core/Scripting/Strings)
  - : Als nächstes richten wir unsere Aufmerksamkeit auf Strings — so bezeichnet man Textstücke in der Programmierung. In diesem Artikel betrachten wir die Grundlagen, die Sie beim Lernen von JavaScript über Strings wissen sollten, wie das Erstellen von Strings, das Escapen von Anführungszeichen in Strings und das Verknüpfen von Strings.
- [Nützliche String-Methoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods)
  - : Nachdem wir die Grundlagen von Strings behandelt haben, machen wir einen Schritt weiter und denken darüber nach, welche nützlichen Operationen wir mit eingebauten Methoden auf Strings durchführen können, wie das Finden der Länge eines Text-Strings, Zusammenfügen und Aufteilen von Strings, Ersetzen eines Zeichens in einem String durch ein anderes und mehr.
- [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays)
  - : In dieser Lektion sehen wir uns Arrays an — eine praktische Methode, eine Liste von Daten unter einem einzigen Variablennamen zu speichern. Hier erklären wir, warum das nützlich ist, und erkunden, wie man ein Array erstellt, Elemente im Array abruft, hinzufügt und entfernt und vieles mehr.
- [Herausforderung: Alberner Geschichtengenerator](/de/docs/Learn_web_development/Core/Scripting/Silly_story_generator) <sup>Challenge</sup>
  - : In dieser Herausforderung werden Sie aufgefordert, einige der Kenntnisse aus den Artikeln dieses Moduls anzuwenden, um eine lustige App zu erstellen, die zufällige alberne Geschichten generiert. Viel Spaß!
- [Entscheidungen in Ihrem Code treffen — Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals)
  - : In jeder Programmiersprache muss der Code Entscheidungen treffen und dementsprechend Aktionen durchführen, abhängig von verschiedenen Eingaben. Zum Beispiel in einem Spiel: Wenn die Anzahl der Leben des Spielers 0 ist, dann ist das Spiel vorbei. In einer Wetter-App: Wenn sie am Morgen aufgerufen wird, wird eine Sonnenaufgangsgrafik angezeigt; nachts werden Sterne und ein Mond gezeigt. In diesem Artikel erkunden wir, wie sogenannte bedingte Anweisungen in JavaScript funktionieren.
- [Code wiederholt ausführen](/de/docs/Learn_web_development/Core/Scripting/Loops)
  - : Programmiersprachen sind sehr nützlich, um repetitive Aufgaben schnell zu erledigen, sei es bei einfachen Berechnungen oder Situationen, in denen zahlreiche ähnliche Arbeiten abgeschlossen werden müssen. Hier betrachten wir die in JavaScript verfügbaren Schleifenstrukturen, die solche Anforderungen erfüllen.
- [Funktionen — Wiederverwendbare Codeblöcke](/de/docs/Learn_web_development/Core/Scripting/Functions)
  - : Ein weiteres unverzichtbares Konzept in der Programmierung sind **Funktionen**, die es ermöglichen, einen Codeblock, der eine einzige Aufgabe ausführt, in einem definierten Block zu speichern und diesen Code dann mit einem einzigen kurzen Befehl immer dann aufzurufen, wenn Sie ihn benötigen — anstatt denselben Code mehrfach tippen zu müssen. In diesem Artikel behandeln wir grundlegende Konzepte hinter Funktionen, wie die grundlegende Syntax, das Aufrufen und Definieren, den Scope und Parameter.
- [Erstellen Sie Ihre eigene Funktion](/de/docs/Learn_web_development/Core/Scripting/Build_your_own_function)
  - : Nachdem die wesentliche Theorie im vorherigen Artikel behandelt wurde, bietet dieser Artikel praktische Erfahrungen. Hier üben Sie das Erstellen Ihrer eigenen, benutzerdefinierten Funktion. Unterwegs erklären wir auch einige nützliche Details im Umgang mit Funktionen.
- [Rückgabewerte von Funktionen](/de/docs/Learn_web_development/Core/Scripting/Return_values)
  - : Es gibt ein letztes wesentliches Konzept zu Funktionen, das wir besprechen müssen — Rückgabewerte. Einige Funktionen geben keinen signifikanten Wert zurück, andere hingegen schon. Es ist wichtig zu verstehen, was ihre Werte sind, wie Sie sie in Ihrem Code verwenden und wie Sie Funktionen nützliche Werte zurückgeben lassen. Wir behandeln all dies unten.
- [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
  - : In diesem Artikel besprechen wir einige wichtige Konzepte in Bezug auf Ereignisse und betrachten die Grundlagen, wie sie in Browsern funktionieren.
- [Ereignisbubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)
  - : Dieser Artikel führt in die Konzepte des Ereignisbubblings, des Ereignis-Capturing und der Ereignis-Delegierung ein, die beschreiben, was passiert, wenn Sie einem Element einen Listener hinzufügen, das ein anderes Element enthält, und ein Ereignis dann am enthaltenen Element auftritt.
- [Herausforderung: Bildergalerie](/de/docs/Learn_web_development/Core/Scripting/Image_gallery) <sup>Challenge</sup>
  - : Nachdem wir die grundlegenden Bausteine von JavaScript betrachtet haben, testen wir Ihr Wissen über Schleifen, Funktionen, Bedingungen und Ereignisse, indem wir Sie anleiten, ein recht häufiges Element zu erstellen, das Sie auf vielen Webseiten sehen werden — eine JavaScript-gesteuerte Bildergalerie.
- [Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics)
  - : In diesem Artikel betrachten wir die grundlegende Syntax von JavaScript-Objekten und wiederholen einige JavaScript-Funktionen, die wir bereits früher im Kurs gesehen haben, um noch einmal zu betonen, dass viele der bisherigen Funktionen Objekte sind.
- [Einführung in DOM Skripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)
  - : Beim Schreiben von Webseiten und Apps ist es eine der häufigsten Aufgaben, die Dokumentenstruktur in irgendeiner Weise zu ändern. Dies wird üblicherweise durch Manipulation des Document Object Models (DOM) über eine Reihe von integrierten Browser-APIs für die Steuerung von HTML und stilistischen Informationen erledigt. In diesem Artikel führen wir Sie in **DOM Skripting** ein.
- [Netzwerkanfragen mit JavaScript durchführen](/de/docs/Learn_web_development/Core/Scripting/Network_requests)
  - : Eine weitere sehr häufige Aufgabe in modernen Webseiten und Anwendungen ist das Durchführen von Netzwerkanfragen, um einzelne Daten vom Server abzurufen und Abschnitte einer Webseite zu aktualisieren, ohne eine vollständige neue Seite laden zu müssen. Dieser scheinbar kleine Aspekt hat große Auswirkungen auf die Leistung und das Verhalten von Webseiten gehabt, daher erklären wir in diesem Artikel das Konzept und betrachten Technologien, die dies ermöglichen.
- [Arbeiten mit JSON](/de/docs/Learn_web_development/Core/Scripting/JSON)

  - : JavaScript Object Notation (JSON) ist ein standardisiertes, textbasiertes Format zur Darstellung strukturierter Daten, basierend auf der Syntax von JavaScript-Objekten. Es wird häufig für die Datenübertragung in Webanwendungen verwendet (z. B. beim Senden von Daten vom Server an den Client, damit diese auf einer Webseite angezeigt werden können, oder umgekehrt). Sie werden es oft verwenden, daher geben wir Ihnen in diesem Artikel alles, was Sie benötigen, um mit JSON in JavaScript zu arbeiten, einschließlich Parsing von JSON, um auf die darin enthaltenen Daten zuzugreifen, und Erstellung von JSON.

- [Debuggen von JavaScript und Umgang mit Fehlern](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript)
  - : In dieser Lektion kehren wir zum Thema Debuggen von JavaScript zurück (welches wir erstmals in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) behandelt haben). Hier werden wir tiefer in Techniken zum Aufspüren von Fehlern einsteigen, aber auch betrachten, wie man Code defensiv programmiert und Fehler im Code verarbeitet, um Probleme von vornherein zu vermeiden.

## Siehe auch

- [Scrimba: Learn JavaScript](https://v2.scrimba.com/learn-javascript-c0v?via=mdn) <sup>_MDN Lernpartner_</sup>
  - : [Scrimbas](https://scrimba.com?via=mdn) _Learn JavaScript_-Kurs lehrt Ihnen JavaScript, indem Sie über 140 interaktive Coding-Herausforderungen lösen und Projekte erstellen, darunter ein Spiel, eine Browsererweiterung und sogar eine mobile App. Scrimba bietet unterhaltsame, interaktive Lektionen, die von fachkundigen Lehrern vermittelt werden.
- [Learn JavaScript](https://learnjavascript.online/)
  - : Eine ausgezeichnete Ressource für angehende Webentwickler — Lernen Sie JavaScript in einer interaktiven Umgebung mit kurzen Lektionen und interaktiven Tests, die durch automatische Bewertung unterstützt werden. Die ersten 40 Lektionen sind kostenlos, der gesamte Kurs ist gegen eine kleine Einmalzahlung verfügbar.

{{NextMenu("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core")}}

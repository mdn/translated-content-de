---
title: Dynamische Skripterstellung mit JavaScript
slug: Learn_web_development/Core/Scripting
l10n:
  sourceCommit: e5249d6363292d2cfb9c3ab7e284a9988ae029df
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core")}}

JavaScript ist ein umfangreiches Thema mit vielen verschiedenen Funktionen, Stilen und Techniken, die es zu erlernen gilt, sowie vielen APIs und Tools, die darauf aufbauen. Dieses Modul konzentriert sich hauptsächlich auf die wesentlichen Kernsprachenmerkmale sowie einige zentrale Begleitthemen — durch das Erlernen dieser Themen erhalten Sie eine solide Grundlage.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, benötigen Sie keine Vorkenntnisse in JavaScript. Sie sollten jedoch die vorherigen Module des Kurses durchgearbeitet haben und [HTML](/de/docs/Learn_web_development/Core/Structuring_content) und die [grundlegenden Grundlagen von CSS](/de/docs/Learn_web_development/Core/Styling_basics) kennen.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, können Sie (die meisten) der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Tutorials und Herausforderungen

- [Was ist JavaScript?](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript)
  - : Willkommen zum MDN-Anfängerkurs für JavaScript! In diesem ersten Artikel betrachten wir JavaScript aus einer übergeordneten Sicht, beantworten Fragen wie "Was ist das?" und "Was macht es?" und stellen sicher, dass Sie mit dem Zweck von JavaScript vertraut sind.
- [Ein erster Sprung in JavaScript](/de/docs/Learn_web_development/Core/Scripting/A_first_splash)
  - : Nun, da Sie etwas über die Theorie von JavaScript und seine Einsatzmöglichkeiten gelernt haben, geben wir Ihnen einen Schnellkurs über die grundlegenden Funktionen von JavaScript durch ein vollständig praktisches Tutorial. Hier werden Sie ein einfaches "Errate die Zahl"-Spiel Schritt für Schritt aufbauen.
- [Was ist schief gelaufen? JavaScript-Fehlerbehebung](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong)
  - : Als Sie das "Errate die Zahl"-Spiel im vorherigen Artikel aufgebaut haben, haben Sie möglicherweise festgestellt, dass es nicht funktioniert hat. Keine Angst — dieser Artikel soll Ihnen helfen, solche Probleme zu lösen, indem er Ihnen einige einfache Tipps gibt, wie Sie Fehler in JavaScript-Programmen finden und beheben können.
- [Die Informationen speichern, die Sie benötigen — Variablen](/de/docs/Learn_web_development/Core/Scripting/Variables)
  - : Nachdem Sie die letzten Artikel gelesen haben, sollten Sie jetzt wissen, was JavaScript ist, was es für Sie tun kann, wie Sie es zusammen mit anderen Webtechnologien verwenden und wie seine Hauptmerkmale aus einer übergeordneten Sicht aussehen. In diesem Artikel gehen wir auf die wirklichen Grundlagen ein und betrachten, wie man mit den grundlegendsten Bausteinen von JavaScript arbeitet — den Variablen.
- [Grundlegende Mathematik in JavaScript — Zahlen und Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math)
  - : An diesem Punkt im Kurs besprechen wir die Mathematik in JavaScript — wie wir Operatoren und andere Funktionen kombinieren können, um Zahlen erfolgreich nach unseren Vorgaben zu manipulieren.
- [Umgang mit Text — Strings in JavaScript](/de/docs/Learn_web_development/Core/Scripting/Strings)
  - : Als nächstes wenden wir uns den Strings zu — so nennt man Stücke Text im Programmieren. In diesem Artikel werden wir uns all die üblichen Dinge ansehen, die Sie wirklich über Strings beim Lernen von JavaScript wissen sollten, wie etwa das Erstellen von Strings, das Escapen von Anführungszeichen in Strings und das Zusammenfügen von Strings.
- [Nützliche String-Methoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods)
  - : Nun, da wir uns die Grundlagen der Strings angesehen haben, gehen wir einen Gang höher und denken darüber nach, welche nützlichen Operationen wir mit eingebauten Methoden an Strings durchführen können, wie etwa die Länge eines Textstrings zu finden, Strings zusammenzufügen und zu teilen, ein Zeichen in einem String durch ein anderes zu ersetzen und mehr.
- [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays)
  - : In dieser Lektion werden wir uns Arrays ansehen — eine elegante Möglichkeit, eine Liste von Datenelementen unter einem einzigen Variablennamen zu speichern. Wir schauen uns an, warum dies nützlich ist, und erkunden dann, wie man ein Array erstellt, Elemente daraus abruft, hinzufügt und entfernt, und mehr.
- [Herausforderung: Blödelgeschichte-Generator](/de/docs/Learn_web_development/Core/Scripting/Silly_story_generator) <sup>Herausforderung</sup>
  - : In dieser Herausforderung werden Sie aufgefordert, einige der in den Artikeln dieses Moduls erworbenen Kenntnisse anzuwenden, um eine unterhaltsame App zu erstellen, die zufällige, alberne Geschichten generiert. Viel Spaß!
- [Entscheidungen in Ihrem Code treffen — Bedingte Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals)
  - : In jeder Programmiersprache muss der Code Entscheidungen treffen und darauf basierende Aktionen ausführen, abhängig von verschiedenen Eingaben. Zum Beispiel: In einem Spiel ist es vorbei, wenn die Anzahl der Leben eines Spielers 0 ist. In einer Wetter-App zeigen Sie eine Aufgangs-Grafik am Morgen an; Sterne und Mond in der Nacht. In diesem Artikel werden wir untersuchen, wie sogenannte bedingte Anweisungen in JavaScript funktionieren.
- [Code-Schleifen](/de/docs/Learn_web_development/Core/Scripting/Loops)
  - : Programmiersprachen sind sehr nützlich, um repetitive Aufgaben schnell zu erledigen, von mehreren einfachen Berechnungen bis hin zu nahezu jeder anderen Situation, in der Sie viele ähnliche Arbeiten zu erledigen haben. Hier werden wir die Schleifenstrukturen betrachten, die in JavaScript zur Verfügung stehen, um solche Anforderungen zu bewältigen.
- [Funktionen — Wiederverwendbare Codeblöcke](/de/docs/Learn_web_development/Core/Scripting/Functions)
  - : Ein weiteres wesentliches Konzept beim Codieren sind **Funktionen**, die es Ihnen ermöglichen, einen Code, der eine einzelne Aufgabe ausführt, in einem definierten Block zu speichern und diesen Code dann durch einen kurzen Befehl aufzurufen, wann immer Sie ihn benötigen — anstatt denselben Code mehrfach eintippen zu müssen. In diesem Artikel werden wir grundlegende Konzepte hinter Funktionen untersuchen, wie grundlegende Syntax, wie man sie aufruft und definiert, ihre Gültigkeit und Parameter.
- [Erstellen Sie Ihre eigene Funktion](/de/docs/Learn_web_development/Core/Scripting/Build_your_own_function)
  - : Mit dem größten Teil der wesentlichen Theorie, die im vorherigen Artikel behandelt wurde, bietet dieser Artikel praktische Erfahrung. Hier werden Sie etwas Übung darin bekommen, Ihre eigene benutzerdefinierte Funktion zu erstellen. Unterwegs erklären wir auch einige nützliche Details im Umgang mit Funktionen.
- [Rückgabewerte von Funktionen](/de/docs/Learn_web_development/Core/Scripting/Return_values)
  - : Es gibt ein letztes wesentliches Konzept über Funktionen, das wir besprechen müssen — Rückgabewerte. Einige Funktionen geben keinen signifikanten Wert zurück, andere tun dies jedoch. Es ist wichtig zu verstehen, was ihre Werte sind, wie man sie in Ihrem Code verwendet und wie man Funktionen nützliche Werte zurückgeben lässt. Wir werden all das unten behandeln.
- [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
  - : In diesem Artikel besprechen wir einige wichtige Konzepte rund um Ereignisse und betrachten die Grundlagen, wie sie in Browsern funktionieren.
- [Ereignis-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)
  - : Dieser Artikel führt in die Konzepte des Ereignis-Bubblings, der Ereignis-Erfassung und der Ereignis-Delegierung ein, die alle darüber handeln, was passiert, wenn Sie einem Element, das ein anderes enthält, einen Listener hinzufügen und dann ein Ereignis im enthaltenen Element auftritt.
- [Herausforderung: Bildergalerie](/de/docs/Learn_web_development/Core/Scripting/Image_gallery) <sup>Herausforderung</sup>
  - : Nachdem wir uns die grundlegenden Bausteine von JavaScript angesehen haben, werden wir Ihr Wissen über Schleifen, Funktionen, bedingte Anweisungen und Ereignisse testen, indem wir Sie dazu bringen, einen recht häufigen Gegenstand zu erstellen, den Sie auf vielen Websites sehen werden — eine von JavaScript gesteuerte Bildergalerie.
- [Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics)
  - : In diesem Artikel betrachten wir die grundlegende JavaScript-Objektsyntax und wiederholen einige JavaScript-Funktionen, die wir bereits früher im Kurs gesehen haben, und unterstreichen die Tatsache, dass viele der Funktionen, mit denen Sie bereits gearbeitet haben, Objekte sind.
- [Einführung ins DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)
  - : Beim Schreiben von Webseiten und Apps ist eine der häufigsten Aufgaben, die Dokumentstruktur in irgendeiner Weise zu ändern. Dies geschieht in der Regel durch Manipulation des Document Object Model (DOM) über eine Reihe von integrierten Browser-APIs zur Steuerung von HTML- und Stilinformationen. In diesem Artikel werden wir Sie in das **DOM-Scripting** einführen.
- [Netzwerkanfragen mit JavaScript stellen](/de/docs/Learn_web_development/Core/Scripting/Network_requests)
  - : Eine weitere sehr häufige Aufgabe in modernen Websites und Anwendungen ist das Stellen von Netzwerkanfragen, um individuelle Datenelemente vom Server abzurufen und so Abschnitte einer Website zu aktualisieren, ohne eine komplett neue Seite laden zu müssen. Dieses scheinbar kleine Detail hat einen großen Einfluss auf die Leistung und das Verhalten von Websites gehabt. In diesem Artikel erklären wir das Konzept und betrachten Technologien, die dies möglich machen.
- [Arbeiten mit JSON](/de/docs/Learn_web_development/Core/Scripting/JSON)
  - : JavaScript Object Notation (JSON) ist ein standardisiertes textbasiertes Format zur Darstellung strukturierter Daten basierend auf der JavaScript-Objektsyntax. Es wird häufig zum Übertragen von Daten in Webanwendungen verwendet (z. B. um einige Daten vom Server an den Client zu senden, damit sie auf einer Webseite angezeigt werden können, oder umgekehrt). Sie werden es ziemlich oft antreffen, daher geben wir Ihnen in diesem Artikel alles, was Sie brauchen, um mit JSON mit JavaScript zu arbeiten, einschließlich des Parsens von JSON, damit Sie auf die darin enthaltenen Daten zugreifen und JSON erstellen können.
- [JavaScript-Debugging und Fehlerbehandlung](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript)
  - : In dieser Lektion kehren wir zum Thema JavaScript-Debugging zurück (das wir zuerst in [Was ist schief gelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) betrachtet haben). Hier werden wir tiefer in Techniken eintauchen, um Fehler aufzuspüren, aber auch darauf achten, wie man defensiv programmiert und Fehler in Ihrem Code behandelt, um Probleme von vornherein zu vermeiden.

## Siehe auch

- [Scrimba: JavaScript lernen](https://v2.scrimba.com/learn-javascript-c0v?via=mdn) <sup>_MDN-Curriculum-Partner_</sup>
  - : [Scrimbas](https://scrimba.com?via=mdn) _JavaScript lernen_ Kurs lehrt Ihnen JavaScript durch das Lösen von mehr als 140 interaktiven Coding-Herausforderungen, Projekte bauen inkl. eines Spiels, einer Browser-Erweiterung und sogar einer mobilen App. Scrimba bietet unterhaltsame interaktive Lektionen, die von sachkundigen Lehrern unterrichtet werden.
- [JavaScript lernen](https://learnjavascript.online/)
  - : Eine ausgezeichnete Ressource für angehende Webentwickler — Lernen Sie JavaScript in einer interaktiven Umgebung, mit kurzen Lektionen und interaktiven Tests, begleitet von automatisierter Bewertung. Die ersten 40 Lektionen sind kostenlos und der vollständige Kurs ist für eine geringe Einmalzahlung verfügbar.

{{NextMenu("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core")}}

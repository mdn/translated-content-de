---
title: Bausteine von Webformularen
slug: Learn/Forms
l10n:
  sourceCommit: b76266228bd0900aa1256902c7858971156a58c9
---

{{LearnSidebar}}

Dieses Modul bietet eine Reihe von Artikeln, die Ihnen helfen werden, die Grundlagen von Webformularen zu beherrschen. Webformulare sind ein sehr leistungsfähiges Werkzeug für die Interaktion mit Benutzern – am häufigsten werden sie verwendet, um Daten von Benutzern zu sammeln oder ihnen die Kontrolle über eine Benutzeroberfläche zu ermöglichen. Aus historischen und technischen Gründen ist es jedoch nicht immer offensichtlich, wie man sie optimal nutzt. In den unten aufgeführten Artikeln behandeln wir alle wesentlichen Aspekte von Webformularen, einschließlich der Auszeichnung ihrer HTML-Struktur, der Gestaltung von Formularelementen, der Validierung von Formulardaten und der Übermittlung von Daten an den Server.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie mindestens unser [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) durchgearbeitet haben. An diesem Punkt sollten Sie die [Einführungsleitfäden](#einführungsleitfäden) leicht verständlich finden und in der Lage sein, unseren Leitfaden zu den [grundlegenden nativen Formularelementen](/de/docs/Learn/Forms/Basic_native_form_controls) zu nutzen.

Die Beherrschung von Formularen erfordert jedoch mehr als nur HTML-Kenntnisse — Sie müssen auch einige spezielle Techniken erlernen, um Formularelemente zu gestalten, und es sind einige Skriptkenntnisse erforderlich, um Dinge wie Validierung und die Erstellung benutzerdefinierter Formularelemente zu handhaben. Daher empfehlen wir Ihnen, bevor Sie sich die anderen unten aufgeführten Abschnitte ansehen, zunächst etwas über [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) zu lernen.

Der obige Text ist ein guter Hinweis darauf, warum wir Webformulare in ein eigenes, eigenständiges Modul gestellt haben, anstatt zu versuchen, Teile davon in die Themenbereiche HTML, CSS und JavaScript zu mischen – Formularelemente sind komplexer als die meisten anderen HTML-Elemente und erfordern auch eine enge Verbindung mit verwandten Techniken in CSS und JavaScript, um das Beste aus ihnen herauszuholen.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, könnten Sie (die meisten) der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Einführungsleitfäden

- [Ihr erstes Formular](/de/docs/Learn/Forms/Your_first_form)
  - : Der erste Artikel unserer Serie bietet Ihnen Ihre erste Erfahrung bei der Erstellung eines Webformulars, einschließlich der Gestaltung eines einfachen Formulars, der Implementierung mit den richtigen HTML-Elementen, der Anwendung von sehr einfachen Stilmitteln über CSS und wie Daten an einen Server gesendet werden.
- [Wie man ein Webformular strukturiert](/de/docs/Learn/Forms/How_to_structure_a_web_form)
  - : Nachdem die Grundlagen behandelt sind, schauen wir uns nun die Elemente genauer an, die Struktur und Bedeutung für die verschiedenen Teile eines Formulars bieten.

## Die verschiedenen Formularelemente

- [Grundlegende native Formularelemente](/de/docs/Learn/Forms/Basic_native_form_controls)
  - : Wir beginnen diesen Abschnitt, indem wir die Funktionalität der ursprünglichen HTML {{htmlelement("input")}}-Typen im Detail betrachten und prüfen, welche Optionen zur Sammlung verschiedener Datentypen verfügbar sind.
- [Die HTML5-Eingabetypen](/de/docs/Learn/Forms/HTML5_input_types)
  - : Hier setzen wir unser tiefes Eintauchen in das `<input>`-Element fort und betrachten die zusätzlichen Eingabetypen, die bei der Veröffentlichung von HTML5 bereitgestellt wurden, sowie die verschiedenen UI-Kontrollen und Datenaufnahmeverbesserungen, die sie bieten. Außerdem betrachten wir das {{htmlelement('output')}}-Element.
- [Weitere Formularelemente](/de/docs/Learn/Forms/Other_form_controls)
  - : Als Nächstes sehen wir uns alle nicht-`<input>`-Formularelemente und zugehörigen Werkzeuge an, wie {{htmlelement('select')}}, {{htmlelement('textarea')}}, {{htmlelement('meter')}}, und {{htmlelement('progress')}}.

## Form-Styling-Leitfäden

- [Webformulare stylen](/de/docs/Learn/Forms/Styling_web_forms)
  - : Dieser Artikel bietet eine Einführung in die Gestaltung von Formularen mit CSS, einschließlich aller Grundlagen, die Sie für einfache Gestaltungsaufgaben wissen müssen.
- [Erweitertes Form-Styling](/de/docs/Learn/Forms/Advanced_form_styling)
  - : Hier betrachten wir einige fortgeschrittenere Techniken zur Gestaltung von Formularen, die verwendet werden müssen, wenn man versucht, mit einigen der schwieriger zu stylenden Formularelemente umzugehen.
- [UI-Pseudo-Klassen](/de/docs/Learn/Forms/UI_pseudo-classes)
  - : Eine Einführung in die UI-Pseudo-Klassen, die es ermöglichen, HTML-Formularelemente basierend auf ihrem aktuellen Zustand zu anzusprechen.

## Validierung und Übermittlung von Formulardaten

- [Clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
  - : Das Senden von Daten reicht nicht aus — wir müssen auch sicherstellen, dass die Daten, die Benutzer in Formulare eingeben, im richtigen Format vorliegen, um erfolgreich verarbeitet zu werden und dass sie unsere Anwendungen nicht beschädigen. Wir möchten unseren Benutzern auch helfen, unsere Formulare korrekt auszufüllen und nicht frustriert zu werden, wenn sie versuchen, unsere Apps zu nutzen. Die Formularvalidierung hilft uns, diese Ziele zu erreichen – dieser Artikel erklärt, was Sie wissen müssen.
- [Formulardaten senden](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)
  - : Dieser Artikel untersucht, was passiert, wenn ein Benutzer ein Formular absendet – wohin gehen die Daten und wie werden sie behandelt, wenn sie dort ankommen? Wir betrachten auch einige der Sicherheitsbedenken, die mit dem Senden von Formulardaten verbunden sind.

## Fortgeschrittene Artikel

Die folgenden Artikel sind nicht unerlässlich für den Lernweg, aber sie werden sich als interessant und nützlich erweisen, wenn Sie die oben genannten Techniken beherrschen und mehr wissen möchten.

- [Wie man benutzerdefinierte Formularelemente erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
  - : Sie werden auf einige Fälle stoßen, bei denen die nativen Formularelemente nicht das bieten, was Sie benötigen, z. B. wegen der Gestaltung oder Funktionalität. In solchen Fällen müssen Sie möglicherweise ein eigenes Formularelement aus rohem HTML erstellen. Dieser Artikel erklärt, wie Sie dies tun und welche Überlegungen Sie dabei anstellen müssen, mit einer praktischen Fallstudie.
- [Formulare mit JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
  - : Dieser Artikel untersucht, wie man ein Formular verwenden kann, um eine HTTP-Anfrage zusammenzustellen und sie über benutzerdefiniertes JavaScript zu senden, anstatt über die Standardformularübermittlung. Es wird auch erläutert, warum Sie dies tun möchten und welche Auswirkungen dies hat. (Siehe auch [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).)
- [CSS-Kompatibilitätstabelle für Formularelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
  - : Dieser letzte Artikel bietet eine praktische Referenz, mit der Sie nachschlagen können, welche CSS-Eigenschaften mit welchen Formularelementen kompatibel sind.

## Siehe auch

- [Referenz für HTML-Formularelemente](/de/docs/Web/HTML/Element#forms)
- [Referenz für HTML \<input>-Typen](/de/docs/Web/HTML/Element/input)
- [HTML-Attributreferenz](/de/docs/Web/HTML/Attributes)
- [Methoden und Eingabekontrollen für Benutzer](/de/docs/Learn/Forms/User_input_methods)

---
title: Webformulare
slug: Learn_web_development/Extensions/Forms
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions")}}

Dieses Modul bietet eine Reihe von Artikeln, die Ihnen helfen, die Grundlagen von Webformularen zu meistern. Webformulare sind ein sehr mächtiges Werkzeug für die Interaktion mit Benutzern – am häufigsten werden sie verwendet, um Daten von Benutzern zu sammeln oder ihnen die Steuerung einer Benutzeroberfläche zu ermöglichen. Aus historischen und technischen Gründen ist es jedoch nicht immer offensichtlich, wie man sie optimal nutzt. In den unten aufgeführten Artikeln werden wir alle grundlegenden Aspekte von Webformularen behandeln, einschließlich der Markierung ihrer HTML-Struktur, dem Styling von Formularelementen, der Validierung von Formulardaten und dem Senden von Daten an den Server.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie zumindest unsere [Einführung in HTML](/de/docs/Learn_web_development/Core/Structuring_content) durcharbeiten. An diesem Punkt sollten Sie die [Einführungstutorials](#einführungstutorials) leicht verständlich finden und auch in der Lage sein, unser Tutorial zu [Grundlegenden nativen Formularelementen](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) zu nutzen.

Um Formulare zu meistern, benötigen Sie jedoch mehr als nur HTML-Kenntnisse — Sie müssen auch spezielle Techniken zum Stylen von Formularelementen erlernen, und einige Skriptkenntnisse sind erforderlich, um Dinge wie Validierung und das Erstellen benutzerdefinierter Formularelemente zu handhaben. Bevor Sie sich also die anderen unten aufgeführten Abschnitte ansehen, empfehlen wir Ihnen, zuerst etwas über [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) zu lernen.

Der obige Text ist ein guter Hinweis darauf, warum wir Webformulare in ein eigenes unabhängiges Modul gesteckt haben, anstatt Teile davon in die Themenbereiche HTML, CSS und JavaScript zu mischen — Formularelemente sind komplexer als die meisten anderen HTML-Elemente, und sie erfordern auch eine enge Verzahnung mit CSS- und JavaScript-Techniken, um das Beste aus ihnen herauszuholen.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, könnten Sie (die meisten) der Codebeispiele in einem Online-Coding-Programm wie [JS Bin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Einführungstutorials

- [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
  - : Der erste Artikel in unserer Serie bietet Ihnen Ihre allererste Erfahrung beim Erstellen eines Webformulars, einschließlich des Designs eines einfachen Formulars, der Implementierung mit den richtigen HTML-Elementen, dem Hinzufügen einiger sehr einfacher Styles mit CSS und wie Daten an einen Server gesendet werden.
- [Wie man ein Webformular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
  - : Nachdem die Grundlagen behandelt sind, schauen wir uns jetzt genauer die Elemente an, die Struktur und Bedeutung für die verschiedenen Teile eines Formulars bieten.

## Die verschiedenen Formularelemente

- [Grundlegende native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
  - : Wir beginnen diesen Abschnitt, indem wir die Funktionalität der ursprünglichen HTML-{{htmlelement("input")}}-Typen im Detail betrachten und untersuchen, welche Optionen zur Sammlung verschiedener Datentypen verfügbar sind.
- [Die HTML5-Input-Typen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types)
  - : Hier setzen wir unseren tiefen Einblick in das `<input>`-Element fort, indem wir die zusätzlichen Eingabetypen untersuchen, die mit HTML5 eingeführt wurden, sowie die verschiedenen UI-Steuerelemente und Verbesserungen bei der Datenerfassung, die sie bieten. Wir betrachten außerdem das {{htmlelement('output')}}-Element.
- [Andere Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls)
  - : Als Nächstes betrachten wir alle nicht-`<input>`-Formularelemente und zugehörige Tools wie {{htmlelement('select')}}, {{htmlelement('textarea')}}, {{htmlelement('meter')}} und {{htmlelement('progress')}}.

## Form Styling Tutorials

- [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
  - : Dieser Artikel bietet eine Einführung in das Styling von Formularen mit CSS, einschließlich aller Grundlagen, die Sie für grundlegende Styling-Aufgaben wissen müssen.
- [Erweiterte Formularstyling-Techniken](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Hier betrachten wir einige fortgeschrittene Styling-Techniken, die verwendet werden müssen, um einige der schwieriger zu stylenden Formularelemente zu bearbeiten.
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
  - : Dieser Artikel erklärt, wie man spezielle, moderne HTML- und CSS-Features zusammen verwenden kann, um vollständig angepasste `<select>`-Elemente zu erstellen. Dazu gehört die vollständige Kontrolle über das Styling der Select-Taste, des Dropdown-Pickers, des Pfeilsymbols, des aktuellen Auswahl-Häkchens und jedes einzelnen `<option>`-Elements.
- [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
  - : Eine Einführung in die UI-Pseudoklassen, die HTML-Formularelemente basierend auf ihrem aktuellen Zustand ansprechen.

## Validierung und Übermittlung von Formulardaten

- [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
  - : Daten zu senden ist nicht genug — wir müssen auch sicherstellen, dass die Daten, die Benutzer in Formulare eingeben, im richtigen Format vorliegen, um sie erfolgreich zu verarbeiten, und dass sie unsere Anwendungen nicht zum Absturz bringen. Wir möchten auch unseren Benutzern helfen, unsere Formulare korrekt auszufüllen und nicht frustriert zu werden, wenn sie versuchen, unsere Apps zu nutzen. Formularvalidierung hilft uns, diese Ziele zu erreichen — dieser Artikel sagt Ihnen, was Sie wissen müssen.
- [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
  - : In diesem Artikel wird untersucht, was passiert, wenn ein Benutzer ein Formular absendet — wohin gehen die Daten, und wie gehen wir damit um, wenn sie ankommen? Wir betrachten auch einige der Sicherheitsbedenken im Zusammenhang mit dem Senden von Formulardaten.

## Zusätzliche Artikel

Die folgenden Artikel sind nicht in der Lernpfad enthalten, aber sie werden interessant und nützlich sein, wenn Sie die oben genannten Techniken gemeistert haben und mehr wissen möchten.

- [Wie man benutzerdefinierte Formularelemente erstellt](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
  - : Sie werden auf einige Fälle stoßen, in denen die nativen Formular-Widgets einfach nicht das bieten, was Sie benötigen, z.B. wegen des Stylings oder der Funktionalität. In solchen Fällen müssen Sie möglicherweise Ihr eigenes Formular-Widget aus rohem HTML bauen. Dieser Artikel erklärt, wie Sie dies tun würden und welche Überlegungen Sie dabei beachten müssen, mit einer praktischen Fallstudie.
- [Formulare über JavaScript senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
  - : Dieser Artikel untersucht Möglichkeiten, ein Formular zu verwenden, um eine HTTP-Anfrage zusammenzustellen und sie über benutzerdefiniertes JavaScript zu senden, anstatt die Standard-Formularübermittlung zu nutzen. Es wird auch untersucht, warum Sie dies tun möchten und welche Auswirkungen dies hat. (Siehe auch [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).)
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
  - : Dieser Artikel erklärt, wie man spezielle, moderne HTML- und CSS-Features zusammen verwenden kann, um vollständig angepasste {{htmlelement("select")}}-Elemente zu erstellen.

## Siehe auch

- [HTML-Formular-Elementreferenz](/de/docs/Web/HTML/Reference/Elements#forms)
- [HTML `<input>`-Typenreferenz](/de/docs/Web/HTML/Reference/Elements/input)
- [HTML-Attributreferenz](/de/docs/Web/HTML/Reference/Attributes)
- [Benutzereingabemethoden und Steuerungen](/de/docs/Learn_web_development/Extensions/Forms/User_input_methods)

{{NextMenu("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions")}}

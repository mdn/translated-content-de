---
title: Webformulare
slug: Learn_web_development/Extensions/Forms
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions")}}

Dieses Modul bietet eine Reihe von Artikeln, die Ihnen helfen, die Grundlagen von Webformularen zu beherrschen. Webformulare sind ein sehr leistungsfähiges Werkzeug zur Interaktion mit Benutzern – am häufigsten werden sie verwendet, um Daten von Benutzern zu sammeln oder ihnen die Kontrolle über eine Benutzeroberfläche zu ermöglichen. Aus historischen und technischen Gründen ist es jedoch nicht immer offensichtlich, wie man sie optimal nutzt. In den unten aufgeführten Artikeln werden wir alle wesentlichen Aspekte von Webformularen behandeln, einschließlich der Auszeichnung ihrer HTML-Struktur, der Gestaltung von Formularelementen, der Validierung von Formulardaten und der Übermittlung von Daten an den Server.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie zumindest unseren [Einführung in HTML](/de/docs/Learn_web_development/Core/Structuring_content) durchgearbeitet haben. An diesem Punkt sollten Sie die [Einführungstutorials](#einführungstutorials) leicht verstehen können und auch in der Lage sein, unser [Grundlegende native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)-Tutorial zu nutzen.

Das Beherrschen von Formularen erfordert jedoch mehr als nur HTML-Kenntnisse — Sie müssen auch einige spezielle Techniken lernen, um Formularelemente zu gestalten, und etwas Skriptkenntnisse sind erforderlich, um Dinge wie Validierung und die Erstellung benutzerdefinierter Formularelemente zu handhaben. Daher empfehlen wir Ihnen, bevor Sie sich die unten aufgeführten Abschnitte ansehen, zuerst etwas über [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) zu lernen.

Der obige Text ist ein guter Indikator dafür, warum wir Webformulare in ein eigenes eigenständiges Modul anstatt in die Themenbereiche HTML, CSS und JavaScript integriert haben — Formularelemente sind komplexer als die meisten anderen HTML-Elemente und erfordern auch eine enge Verbindung mit den zugehörigen Techniken aus CSS und JavaScript, um das Beste aus ihnen herauszuholen.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, bei dem Sie keine eigenen Dateien erstellen können, könnten Sie die meisten der Codebeispiele in einem Online-Codeprogramm wie [JS Bin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Einführungstutorials

- [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
  - : Der erste Artikel unserer Serie bietet Ihnen Ihre erste Erfahrung beim Erstellen eines Webformulars, einschließlich der Gestaltung eines einfachen Formulars, der Implementierung mit den richtigen HTML-Elementen, der Hinzufügung von sehr einfachem Styling über CSS und der Art und Weise, wie Daten an einen Server gesendet werden.
- [Wie man ein Webformular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
  - : Nachdem die Grundlagen behandelt sind, betrachten wir nun detaillierter die Elemente, die zur Bereitstellung von Struktur und Bedeutung für die verschiedenen Teile eines Formulars verwendet werden.

## Die verschiedenen Formularelemente

- [Grundlegende native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
  - : Wir beginnen diesen Abschnitt, indem wir die Funktionalität der ursprünglichen HTML {{htmlelement("input")}}-Typen im Detail betrachten, und schauen, welche Optionen zur Sammlung verschiedener Datentypen verfügbar sind.
- [Die HTML5-Input-Typen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types)
  - : Hier setzen wir unser tiefgehendes Studium des `<input>`-Elements fort, indem wir uns die zusätzlichen Eingabetypen ansehen, die mit der Veröffentlichung von HTML5 hinzugefügt wurden, und die verschiedenen UI-Steuerungen und Datenerfassungserweiterungen, die sie bieten. Zusätzlich betrachten wir das {{htmlelement('output')}}-Element.
- [Andere Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls)
  - : Anschließend betrachten wir alle nicht-`<input>` Formularelemente und die dazugehörigen Werkzeuge, wie {{htmlelement('select')}}, {{htmlelement('textarea')}}, {{htmlelement('meter')}}, und {{htmlelement('progress')}}.

## Formstyling-Tutorials

- [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
  - : Dieser Artikel bietet eine Einführung in das Styling von Formularen mit CSS, einschließlich aller Grundlagen, die Sie für grundlegende Styling-Aufgaben wissen müssen.
- [Erweitertes Formstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Hier betrachten wir einige erweiterte Techniken für das Styling von Formularen, die verwendet werden müssen, wenn versucht wird, einige der schwieriger zu stylenden Formularelemente zu behandeln.
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
  - : Dieser Artikel erklärt, wie man moderne HTML- und CSS-Funktionen zusammen verwendet, um vollständig angepasste `<select>`-Elemente zu erstellen. Dies beinhaltet die vollständige Kontrolle über das Styling der Select-Schaltfläche, des Dropdown-Pickers, des Pfeilsymbols, des aktuellen Auswahl-Häkchens und jedes einzelnen `<option>`-Elements.
- [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
  - : Eine Einführung in die UI-Pseudoklassen, die es ermöglichen, HTML-Formularelemente basierend auf ihrem aktuellen Zustand auszuwählen.

## Validierung und Übermittlung von Formulardaten

- [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
  - : Daten zu senden ist nicht genug — wir müssen auch sicherstellen, dass die Daten, die Benutzer in Formulare eingeben, im richtigen Format vorliegen, um sie erfolgreich zu verarbeiten, und dass sie unsere Anwendungen nicht beschädigen. Wir möchten unseren Benutzern auch helfen, unsere Formulare korrekt auszufüllen und nicht frustriert zu werden, wenn sie versuchen, unsere Anwendungen zu nutzen. Die Formularvalidierung hilft uns, diese Ziele zu erreichen — dieser Artikel erklärt, was Sie wissen müssen.
- [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
  - : Dieser Artikel beschreibt, was passiert, wenn ein Benutzer ein Formular absendet — wohin die Daten gehen und wie wir sie handhaben, wenn sie dort ankommen. Wir betrachten auch einige der Sicherheitsbedenken, die mit dem Senden von Formulardaten verbunden sind.

## Zusätzliche Artikel

Die folgenden Artikel sind nicht im Lernpfad enthalten, werden sich jedoch als interessant und nützlich erweisen, wenn Sie die oben genannten Techniken beherrschen und mehr wissen möchten.

- [Wie man benutzerdefinierte Formularelemente baut](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
  - : Sie werden auf einige Fälle stoßen, in denen die nativen Formular-Widgets einfach nicht bieten, was Sie benötigen, z.B. aufgrund von Styling oder Funktionalität. In solchen Fällen müssen Sie möglicherweise Ihr eigenes Formularelement aus rohem HTML erstellen. Dieser Artikel erklärt, wie Sie dies tun würden und welche Überlegungen Sie dabei beachten müssen, mit einer praktischen Fallstudie.
- [Senden von Formularen durch JavaScript](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
  - : Dieser Artikel untersucht Möglichkeiten, ein Formular zu verwenden, um eine HTTP-Anfrage zusammenzustellen und sie über benutzerdefiniertes JavaScript zu senden, anstatt über eine Standard-Formularübermittlung. Es wird auch darauf eingegangen, warum Sie dies tun möchten und welche Auswirkungen dies hat. (Siehe auch [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).)
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
  - : Dieser Artikel erklärt, wie man moderne HTML- und CSS-Funktionen zusammen verwendet, um vollständig angepasste {{htmlelement("select")}}-Elemente zu erstellen.

## Siehe auch

- [HTML-Formularelement-Referenz](/de/docs/Web/HTML/Reference/Elements#forms)
- [HTML `<input>`-Typenreferenz](/de/docs/Web/HTML/Reference/Elements/input)
- [HTML-Attributreferenz](/de/docs/Web/HTML/Reference/Attributes)
- [Benutzereingabemethoden und -steuerungen](/de/docs/Learn_web_development/Extensions/Forms/User_input_methods)

{{NextMenu("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions")}}

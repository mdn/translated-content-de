---
title: Bausteine für Webformulare
slug: Learn/Forms
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}

Dieses Modul bietet eine Reihe von Artikeln, die Ihnen helfen werden, die Grundlagen von Webformularen zu beherrschen. Webformulare sind ein sehr mächtiges Werkzeug für die Interaktion mit Benutzern – am häufigsten werden sie verwendet, um Daten von Benutzern zu sammeln oder ihnen die Steuerung einer Benutzeroberfläche zu ermöglichen. Aus historischen und technischen Gründen ist es jedoch nicht immer offensichtlich, wie sie ihr volles Potenzial entfalten können. In den unten aufgeführten Artikeln werden wir alle wesentlichen Aspekte von Webformularen behandeln, einschließlich der Auszeichnung ihrer HTML-Struktur, dem Styling von Formularelementen, der Validierung von Formulardaten und dem Senden von Daten an den Server.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie zumindest unseren [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) durchgearbeitet haben. An diesem Punkt sollten Sie die [Einführungsleitfäden](#einführungsleitfäden) leicht verständlich finden und auch in der Lage sein, unseren [Leitfaden zu grundlegenden nativen Formularelementen](/de/docs/Learn/Forms/Basic_native_form_controls) zu nutzen.

Das Beherrschen von Formularen erfordert jedoch mehr als nur HTML-Kenntnisse — Sie müssen auch einige spezifische Techniken erlernen, um Formularelemente zu stylen, und es sind einige Scripting-Kenntnisse erforderlich, um Dinge wie Validierung und die Erstellung benutzerdefinierter Formularelemente zu handhaben. Daher empfehlen wir Ihnen, bevor Sie sich die anderen unten aufgeführten Abschnitte ansehen, zuerst etwas [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) zu lernen.

Der obige Text ist ein guter Hinweis darauf, warum wir Webformulare in ein eigenes, eigenständiges Modul aufgenommen haben, anstatt Teile davon in die Themenbereiche HTML, CSS und JavaScript zu mischen — Formularelemente sind komplexer als die meisten anderen HTML-Elemente und erfordern zudem eine enge Verknüpfung verwandter CSS- und JavaScript-Techniken, um das Beste aus ihnen herauszuholen.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie nicht in der Lage sind, Ihre eigenen Dateien zu erstellen, könnten Sie (die meisten) der Codebeispiele in einem Online-Coding-Programm wie [JS Bin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Einführungsleitfäden

- [Ihr erstes Formular](/de/docs/Learn/Forms/Your_first_form)
  - : Der erste Artikel unserer Serie bietet Ihnen Ihre allererste Erfahrung bei der Erstellung eines Webformulars, einschließlich des Entwurfs eines einfachen Formulars, der Implementierung mit den richtigen HTML-Elementen, dem Hinzufügen sehr einfacher Stilmittel über CSS und wie Daten an einen Server gesendet werden.
- [Wie man ein Webformular strukturiert](/de/docs/Learn/Forms/How_to_structure_a_web_form)
  - : Nachdem die Grundlagen geklärt sind, betrachten wir nun ausführlicher die Elemente, die verwendet werden, um Struktur und Bedeutung für die verschiedenen Teile eines Formulars zu liefern.

## Die verschiedenen Formularelemente

- [Grundlegende native Formularelemente](/de/docs/Learn/Forms/Basic_native_form_controls)
  - : Wir beginnen diesen Abschnitt, indem wir die Funktionalität der ursprünglichen HTML {{htmlelement("input")}}-Typen im Detail betrachten, und welche Optionen zur Verfügung stehen, um verschiedene Arten von Daten zu sammeln.
- [Die HTML5-Eingabetyps](/de/docs/Learn/Forms/HTML5_input_types)
  - : Hier setzen wir unser tiefgehendes Eintauchen in das `<input>`-Element fort, indem wir die zusätzlichen Eingabetyps betrachten, die mit HTML5 bereitgestellt wurden, und die verschiedenen UI-Kontrollen und Datenaufnahmeverbesserungen, die sie bieten. Zusätzlich betrachten wir das {{htmlelement('output')}}-Element.
- [Andere Formularelemente](/de/docs/Learn/Forms/Other_form_controls)
  - : Als nächstes betrachten wir alle nicht-`<input>` Formularelemente und zugehörige Werkzeuge, wie {{htmlelement('select')}}, {{htmlelement('textarea')}}, {{htmlelement('meter')}} und {{htmlelement('progress')}}.

## Leitfäden zur Formulargestaltung

- [Webformulare stylen](/de/docs/Learn/Forms/Styling_web_forms)
  - : Dieser Artikel bietet eine Einführung in das Styling von Formularen mit CSS, einschließlich aller Grundlagen, die Sie für grundlegende Styling-Aufgaben wissen müssen.
- [Erweiterte Formulargestaltung](/de/docs/Learn/Forms/Advanced_form_styling)
  - : Hier schauen wir uns einige fortgeschrittenere Techniken zur Formulargestaltung an, die erforderlich sind, wenn man versucht, mit einigen der schwieriger zu stylenden Formularelemente umzugehen.
- [UI-Pseudoklassen](/de/docs/Learn/Forms/UI_pseudo-classes)
  - : Eine Einführung in die UI-Pseudoklassen, die es ermöglichen, HTML-Formularelemente basierend auf ihrem aktuellen Zustand zu benennen.

## Validierung und Absenden von Formulardaten

- [Clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
  - : Das Senden von Daten ist nicht genug – wir müssen auch sicherstellen, dass die Daten, die Benutzer in Formulare eingeben, im richtigen Format vorliegen, um sie erfolgreich verarbeiten zu können und dass sie unsere Anwendungen nicht beeinträchtigen. Wir möchten auch unseren Benutzern helfen, unsere Formulare korrekt auszufüllen und nicht frustriert zu werden, wenn sie versuchen, unsere Apps zu nutzen. Formularvalidierung hilft uns, diese Ziele zu erreichen — dieser Artikel erklärt, was Sie wissen müssen.
- [Formulardaten senden](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)
  - : Dieser Artikel betrachtet, was passiert, wenn ein Benutzer ein Formular absendet – wohin gehen die Daten und wie gehen wir damit um, wenn sie ankommen? Wir betrachten auch einige der Sicherheitsaspekte im Zusammenhang mit dem Senden von Formulardaten.

## Fortgeschrittene Artikel

Die folgenden Artikel sind nicht unbedingt erforderlich für den Lernweg, aber sie werden sich als interessant und nützlich erweisen, wenn Sie die oben genannten Techniken gemeistert haben und mehr wissen wollen.

- [Wie man benutzerdefinierte Formularelemente erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
  - : Sie werden auf einige Fälle stoßen, in denen die nativen Formular-Widgets einfach nicht das bieten, was Sie brauchen, z. B. aufgrund von Styling oder Funktionalität. In solchen Fällen müssen Sie möglicherweise Ihr eigenes Formular-Widget aus rohem HTML erstellen. Dieser Artikel erklärt, wie Sie dies tun würden und auf welche Überlegungen Sie dabei achten müssen, mit einer praktischen Fallstudie.
- [Formulare über JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
  - : Dieser Artikel betrachtet Möglichkeiten, ein Formular zu verwenden, um eine HTTP-Anfrage zusammenzustellen und sie über benutzerdefiniertes JavaScript zu senden, anstatt über die Standardformularübermittlung. Es wird auch betrachtet, warum Sie dies tun möchten und welche Auswirkungen das hat. (Siehe auch [Using FormData objects](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).)
- [Kompatibilitätstabelle für CSS-Eigenschaften für Formularelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
  - : Dieser letzte Artikel bietet ein nützliches Nachschlagewerk, das Ihnen ermöglicht, nachzuschlagen, welche CSS-Eigenschaften mit welchen Formularelementen kompatibel sind.

## Siehe auch

- [HTML Formular-Elementreferenz](/de/docs/Web/HTML/Element#forms)
- [HTML `<input>` Typenreferenz](/de/docs/Web/HTML/Element/input)
- [HTML Attributreferenz](/de/docs/Web/HTML/Attributes)
- [Benutzereingabemethoden und -kontrollen](/de/docs/Learn/Forms/User_input_methods)

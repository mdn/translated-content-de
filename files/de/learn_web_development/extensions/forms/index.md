---
title: Webformulare
slug: Learn_web_development/Extensions/Forms
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions")}}

Dieses Modul bietet eine Reihe von Artikeln, die Ihnen helfen, die Grundlagen von Webformularen zu meistern. Webformulare sind ein sehr leistungsfähiges Werkzeug zur Interaktion mit Benutzern – am häufigsten werden sie zum Sammeln von Daten von Benutzern oder zur Steuerung einer Benutzeroberfläche eingesetzt. Aus historischen und technischen Gründen ist es jedoch nicht immer offensichtlich, wie man sie optimal nutzt. In den unten aufgeführten Artikeln behandeln wir alle wesentlichen Aspekte von Webformularen, einschließlich der Auszeichnung ihrer HTML-Struktur, der Gestaltung von Formularelementen, der Validierung von Formulardaten und des Sendens von Daten an den Server.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie zumindest unsere [Einführung in HTML](/de/docs/Learn_web_development/Core/Structuring_content) durchgearbeitet haben. An diesem Punkt sollten die [Einführungstutorials](#einführungstutorials) leicht verständlich sein, und Sie sollten auch in der Lage sein, unser Tutorial zu [Grundlegenden nativen Formularelementen](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) zu nutzen.

Das Meistern von Formularen erfordert jedoch mehr als nur HTML-Kenntnisse — Sie müssen auch einige spezielle Techniken lernen, um Formularelemente zu gestalten, und einige Skriptkenntnisse sind erforderlich, um Dinge wie Validierung und das Erstellen eigener Formularelemente zu handhaben. Daher empfehlen wir Ihnen, bevor Sie sich die anderen unten aufgeführten Abschnitte ansehen, zunächst etwas [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) zu lernen.

Der obige Text ist ein guter Indikator dafür, warum wir Webformulare in ein eigenes, unabhängiges Modul gepackt haben, anstatt zu versuchen, es in die Themenbereiche HTML, CSS und JavaScript zu mischen — Formularelemente sind komplexer als die meisten anderen HTML-Elemente und erfordern auch eine enge Verbindung von CSS- und JavaScript-Techniken, um das Beste aus ihnen herauszuholen.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, können Sie die (meisten) Codebeispiele in einem Online-Coding-Programm wie [JS Bin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Einführungstutorials

- [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
  - : Der erste Artikel unserer Serie bietet Ihre erste Erfahrung im Erstellen eines Webformulars, einschließlich der Gestaltung eines einfachen Formulars, der Implementierung mit den richtigen HTML-Elementen, dem Hinzufügen von sehr einfachem Styling über CSS und wie Daten an einen Server gesendet werden.
- [Wie strukturiert man ein Webformular](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
  - : Nachdem die Grundlagen behandelt wurden, betrachten wir nun detaillierter die Elemente, die verwendet werden, um den unterschiedlichen Teilen eines Formulars Struktur und Bedeutung zu verleihen.

## Die verschiedenen Formularelemente

- [Grundlegende native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
  - : Wir beginnen diesen Abschnitt mit einem detaillierten Blick auf die Funktionalität der ursprünglichen HTML-{{htmlelement("input")}}-Typen und untersuchen, welche Optionen verfügbar sind, um verschiedene Datentypen zu sammeln.
- [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types)
  - : Hier setzen wir unseren tiefen Einblick in das `<input>`-Element fort und betrachten die zusätzlichen Eingabetypen, die bei der Veröffentlichung von HTML5 bereitgestellt wurden, sowie die verschiedenen Benutzeroberflächen-Steuerelemente und Verbesserungen zur Datensammlung, die sie bieten. Außerdem betrachten wir das {{htmlelement('output')}}-Element.
- [Andere Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls)
  - : Als nächstes betrachten wir alle nicht-`<input>`-Formularelemente und zugehörige Werkzeuge, wie {{htmlelement('select')}}, {{htmlelement('textarea')}}, {{htmlelement('meter')}} und {{htmlelement('progress')}}.

## Tutorials zur Formulargestaltung

- [Gestaltung von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
  - : Dieser Artikel bietet eine Einführung in die Gestaltung von Formularen mit CSS, einschließlich aller Grundlagen, die Sie für grundlegende Gestaltungsaufgaben wissen müssen.
- [Erweiterte Formulargestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Hier betrachten wir einige fortgeschrittenere Gestaltungstechniken, die verwendet werden müssen, um einige der schwerer zu stilisierenden Formularelemente zu bearbeiten.
- [Anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
  - : Dieser Artikel erklärt, wie man moderne HTML- und CSS-Features gemeinsam nutzen kann, um vollständig angepasste `<select>`-Elemente zu erstellen. Dazu gehört die volle Kontrolle über die Gestaltung der Auswahl-Schaltfläche, des Dropdown-Auswahlfeldes, des Pfeilsymbols, des aktuellen Auswahlsymbols und jedes einzelnen `<option>`-Elements.
- [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
  - : Eine Einführung in die UI-Pseudoklassen, die es ermöglichen, HTML-Formularelemente basierend auf ihrem aktuellen Zustand anzusprechen.

## Validierung und Übermittlung von Formulardaten

- [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
  - : Datensenden allein reicht nicht aus — wir müssen auch sicherstellen, dass die Daten, die Benutzer in Formulare eingeben, im richtigen Format sind, um sie erfolgreich zu verarbeiten, und dass sie unsere Anwendungen nicht beschädigen. Wir möchten auch unseren Benutzern helfen, unsere Formulare korrekt auszufüllen und nicht frustriert zu sein, wenn sie versuchen, unsere Apps zu verwenden. Die Formularvalidierung hilft uns, diese Ziele zu erreichen — dieser Artikel erklärt, was Sie wissen müssen.
- [Versenden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
  - : Dieser Artikel betrachtet, was passiert, wenn ein Benutzer ein Formular übermittelt — wohin gehen die Daten und wie gehen wir damit um, wenn sie ankommen? Wir betrachten auch einige der mit dem Versenden von Formulardaten verbundenen Sicherheitsbedenken.

## Zusätzliche Artikel

Die folgenden Artikel sind nicht im Lernpfad enthalten, werden jedoch interessant und nützlich sein, wenn Sie die oben genannten Techniken gemeistert haben und mehr erfahren wollen.

- [Wie man benutzerdefinierte Formularelemente erstellt](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
  - : Sie werden auf einige Fälle stoßen, in denen die nativen Formularelemente einfach nicht das bieten, was Sie benötigen, z.B. aufgrund von Stil oder Funktionalität. In solchen Fällen müssen Sie möglicherweise Ihr eigenes Formularelement aus reinem HTML erstellen. Dieser Artikel erklärt, wie Sie das tun würden und welche Überlegungen Sie dabei berücksichtigen müssen, mit einer praktischen Fallstudie.
- [Versenden von Formularen über JavaScript](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
  - : Dieser Artikel erläutert Möglichkeiten, ein Formular zu verwenden, um eine HTTP-Anfrage zusammenzustellen und sie über benutzerdefiniertes JavaScript zu senden, anstatt eine Standardformularübermittlung zu verwenden. Er erklärt auch, warum Sie das tun möchten und welche Implikationen dies hat. (Siehe auch [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).)
- [Anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
  - : Dieser Artikel erklärt, wie man moderne HTML- und CSS-Features gemeinsam nutzen kann, um vollständig angepasste {{htmlelement("select")}}-Elemente zu erstellen.

## Siehe auch

- [HTML-Formularelement-Referenz](/de/docs/Web/HTML/Element#forms)
- [HTML `<input>`-Typen-Referenz](/de/docs/Web/HTML/Element/input)
- [HTML-Attribut-Referenz](/de/docs/Web/HTML/Attributes)
- [Benutzereingabemethoden und Steuerelemente](/de/docs/Learn_web_development/Extensions/Forms/User_input_methods)

{{NextMenu("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions")}}

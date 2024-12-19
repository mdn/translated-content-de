---
title: Webformulare
slug: Learn_web_development/Extensions/Forms
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions")}}

Dieses Modul bietet eine Reihe von Artikeln, die Ihnen helfen werden, die Grundlagen von Webformularen zu beherrschen. Webformulare sind ein sehr leistungsfähiges Werkzeug zur Interaktion mit Benutzern – am häufigsten werden sie verwendet, um Daten von Benutzern zu sammeln oder ihnen die Steuerung einer Benutzeroberfläche zu ermöglichen. Aus historischen und technischen Gründen ist es jedoch nicht immer offensichtlich, wie sie optimal genutzt werden können. In den unten aufgelisteten Artikeln behandeln wir alle wesentlichen Aspekte von Webformularen, einschließlich des Markierens ihrer HTML-Struktur, des Stils von Formularelementen, der Validierung von Formulardaten und dem Senden von Daten an den Server.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie mindestens unsere [Einführung in HTML](/de/docs/Learn_web_development/Core/Structuring_content) durcharbeiten. An diesem Punkt sollten Sie die [Einführungstutorials](#einführungstutorials) leicht verstehen können und auch in der Lage sein, unser [Tutorial zu grundlegenden nativen Formularelementen](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) zu nutzen.

Das Beherrschen von Formularen erfordert jedoch mehr als nur HTML-Kenntnisse – Sie müssen auch einige spezielle Techniken lernen, um Formularelemente zu gestalten, und einige Skriptkenntnisse sind erforderlich, um Dinge wie Validierung und die Erstellung benutzerdefinierter Formularelemente zu handhaben. Bevor Sie sich daher die unten aufgelisteten anderen Abschnitte ansehen, empfehlen wir Ihnen, sich zunächst etwas über [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) anzueignen.

Der obige Text zeigt gut, warum wir Webformulare in ein eigenständiges Modul gestellt haben, anstatt Teile davon in die Themenbereiche HTML, CSS und JavaScript zu mischen — Formularelemente sind komplexer als die meisten anderen HTML-Elemente und erfordern auch eine enge Verbindung verwandter CSS- und JavaScript-Techniken, um das Beste aus ihnen herauszuholen.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, könnten Sie (die meisten) der Codebeispiele in einem Online-Coding-Programm wie [JS Bin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Einführungstutorials

- [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
  - : Der erste Artikel unserer Serie bietet Ihnen Ihre allererste Erfahrung bei der Erstellung eines Webformulars, einschließlich der Gestaltung eines einfachen Formulars, der Implementierung mit den richtigen HTML-Elementen, dem Hinzufügen von sehr einfachem Styling über CSS und der Erklärung, wie Daten an einen Server gesendet werden.
- [Wie man ein Webformular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
  - : Nachdem die Grundlagen geklärt sind, schauen wir uns nun die Elemente im Detail an, die Struktur und Bedeutung für die verschiedenen Teile eines Formulars bieten.

## Die verschiedenen Formularelemente

- [Grundlegende native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
  - : Wir beginnen diesen Abschnitt, indem wir uns die Funktionalität der ursprünglichen HTML-{{htmlelement("input")}}-Typen im Detail ansehen und betrachten, welche Optionen verfügbar sind, um verschiedene Arten von Daten zu sammeln.
- [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types)
  - : Hier setzen wir unser detailliertes Eintauchen in das `<input>`-Element fort, indem wir die zusätzlichen Eingabetypen betrachten, die mit der Einführung von HTML5 bereitgestellt wurden, sowie die verschiedenen Benutzeroberflächensteuerungen und Verbesserungen zur Datensammlung, die sie bieten. Zusätzlich betrachten wir das {{htmlelement('output')}}-Element.
- [Andere Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls)
  - : Als Nächstes betrachten wir alle nicht-`<input>`-Formularelemente und zugehörige Werkzeuge wie {{htmlelement('select')}}, {{htmlelement('textarea')}}, {{htmlelement('meter')}} und {{htmlelement('progress')}}.

## Form-Styling-Tutorials

- [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
  - : Dieser Artikel bietet eine Einführung in das Styling von Formularen mit CSS, einschließlich aller Grundlagen, die Sie für grundlegende Styling-Aufgaben kennen müssen.
- [Erweitertes Form-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Hier befassen wir uns mit einigen fortgeschritteneren Styling-Techniken, die verwendet werden müssen, wenn es darum geht, einige der schwieriger zu stylenden Formularelemente zu handhaben.
- [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
  - : Eine Einführung in die UI-Pseudoklassen, die es ermöglichen, HTML-Formularelemente basierend auf ihrem aktuellen Zustand anzusprechen.

## Validierung und Übermittlung von Formulardaten

- [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
  - : Daten zu senden reicht nicht aus — wir müssen auch sicherstellen, dass die Daten, die Benutzer in Formulare eingeben, im richtigen Format vorliegen, um sie erfolgreich zu verarbeiten, und dass sie unsere Anwendungen nicht zerstören. Wir möchten unseren Benutzern auch helfen, unsere Formulare korrekt auszufüllen und nicht frustriert zu werden, wenn sie versuchen, unsere Apps zu nutzen. Formularvalidierung hilft uns, diese Ziele zu erreichen — dieser Artikel erklärt, was Sie wissen müssen.
- [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
  - : Dieser Artikel betrachtet, was passiert, wenn ein Benutzer ein Formular abschickt – wohin gehen die Daten und wie handhaben wir sie, wenn sie dort ankommen? Wir betrachten auch einige der Sicherheitsbedenken im Zusammenhang mit dem Senden von Formulardaten.

## Erweiterte Artikel

Die folgenden Artikel sind nicht im Lernpfad enthalten, aber sie sind interessant und nützlich, wenn Sie die oben genannten Techniken gemeistert haben und mehr wissen möchten.

- [Wie man benutzerdefinierte Formularelemente erstellt](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
  - : Sie werden auf einige Fälle stoßen, in denen die nativen Formularelemente nicht das bieten, was Sie brauchen, z. B. aufgrund von Styling oder Funktionalität. In solchen Fällen müssen Sie möglicherweise Ihr eigenes Formularelement aus rohem HTML erstellen. Dieser Artikel erklärt, wie Sie das tun und welche Überlegungen dabei zu beachten sind, mit einer praktischen Fallstudie.
- [Senden von Formularen über JavaScript](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
  - : Dieser Artikel betrachtet Möglichkeiten, ein Formular zu nutzen, um eine HTTP-Anfrage zu erstellen und diese über benutzerdefiniertes JavaScript zu senden, anstatt über die standardmäßige Formularübermittlung. Auch wird erläutert, warum Sie das tun sollten und welche Auswirkungen dies hat. (Siehe auch [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).)

## Siehe auch

- [HTML Formular-Elementreferenz](/de/docs/Web/HTML/Element#forms)
- [HTML \<input>-Typenreferenz](/de/docs/Web/HTML/Element/input)
- [HTML-Attribut-Referenz](/de/docs/Web/HTML/Attributes)
- [Benutzereingabemethoden und Steuerungen](/de/docs/Learn_web_development/Extensions/Forms/User_input_methods)

{{NextMenu("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions")}}

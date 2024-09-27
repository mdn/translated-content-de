---
title: Bausteine für Webformulare
slug: Learn/Forms
l10n:
  sourceCommit: b76266228bd0900aa1256902c7858971156a58c9
---

{{LearnSidebar}}

Dieses Modul bietet eine Reihe von Artikeln, die Ihnen helfen werden, die Grundlagen von Webformularen zu meistern. Webformulare sind ein sehr leistungsfähiges Werkzeug zur Interaktion mit Benutzern — sie werden am häufigsten zum Sammeln von Daten von Benutzern oder zur Steuerung einer Benutzeroberfläche verwendet. Aus historischen und technischen Gründen ist jedoch nicht immer offensichtlich, wie man sie optimal nutzt. In den unten aufgeführten Artikeln decken wir alle wesentlichen Aspekte von Webformularen ab, einschließlich der Strukturierung ihres HTML-Aufbaus, der Gestaltung von Formularelementen, der Validierung von Formulardaten und dem Senden von Daten an den Server.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie zumindest unsere [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) durchgearbeitet haben. Zu diesem Zeitpunkt sollten Sie die [Einführungsleitfäden](#einführungsleitfäden) leicht verständlich finden und auch in der Lage sein, unseren [Leitfaden zu grundlegenden nativen Formularelementen](/de/docs/Learn/Forms/Basic_native_form_controls) zu nutzen.

Das Beherrschen von Formularen erfordert jedoch mehr als nur HTML-Kenntnisse — Sie müssen auch einige spezielle Techniken zum Stylen von Formularelementen erlernen und benötigen einige Kenntnisse in der Skripterstellung, um Dinge wie Validierung und das Erstellen benutzerdefinierter Formularelemente zu handhaben. Daher empfehlen wir Ihnen, bevor Sie sich die anderen unten aufgeführten Abschnitte ansehen, dass Sie zuerst etwas [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) lernen.

Der obige Text ist ein guter Indikator dafür, warum wir Webformulare in ein eigenes, eigenständiges Modul gepackt haben, anstatt zu versuchen, Teile davon in die Themenbereiche HTML, CSS und JavaScript zu mischen — Formularelemente sind komplexer als die meisten anderen HTML-Elemente und erfordern auch eine enge Verbindung verwandter CSS- und JavaScript-Techniken, um das Beste aus ihnen herauszuholen.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, können Sie die meisten der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Einführungsleitfäden

- [Ihr erstes Formular](/de/docs/Learn/Forms/Your_first_form)
  - : Der erste Artikel unserer Serie bietet Ihnen Ihre erste Erfahrung beim Erstellen eines Webformulars, einschließlich des Designs eines einfachen Formulars, der Implementierung mit den richtigen HTML-Elementen, des Hinzufügens einer sehr einfachen Gestaltung über CSS und wie Daten an einen Server gesendet werden.
- [Wie man ein Webformular strukturiert](/de/docs/Learn/Forms/How_to_structure_a_web_form)
  - : Nachdem die Grundlagen abgehandelt sind, schauen wir uns nun genauer die Elemente an, die verwendet werden, um Struktur und Bedeutung zu den verschiedenen Teilen eines Formulars zu geben.

## Die verschiedenen Formularelemente

- [Grundlegende native Formularelemente](/de/docs/Learn/Forms/Basic_native_form_controls)
  - : Wir beginnen diesen Abschnitt, indem wir uns die Funktionalität der ursprünglichen HTML-{{htmlelement("input")}}-Typen im Detail ansehen und überprüfen, welche Optionen zur Erfassung verschiedener Datentypen verfügbar sind.
- [Die HTML5-`<input>`-Typen](/de/docs/Learn/Forms/HTML5_input_types)
  - : Hier setzen wir unsere detaillierte Betrachtung des `<input>`-Elements fort, indem wir uns die zusätzlichen Eingabetypen ansehen, die mit der Veröffentlichung von HTML5 hinzugefügt wurden, und die verschiedenen Benutzeroberflächensteuerungen und Verbesserungen zur Datenerfassung, die sie bieten. Außerdem betrachten wir das {{htmlelement('output')}}-Element.
- [Andere Formularelemente](/de/docs/Learn/Forms/Other_form_controls)
  - : Als nächstes betrachten wir alle Nicht-`<input>`-Formularelemente und zugehörige Werkzeuge, wie {{htmlelement('select')}}, {{htmlelement('textarea')}}, {{htmlelement('meter')}} und {{htmlelement('progress')}}.

## Formulare-Gestaltungsleitfäden

- [Webformulare gestalten](/de/docs/Learn/Forms/Styling_web_forms)
  - : Dieser Artikel bietet eine Einführung in die Gestaltung von Formularen mit CSS, einschließlich aller Grundlagen, die Sie für einfache Gestaltungsaufgaben kennen müssen.
- [Erweitertes Styling von Formularen](/de/docs/Learn/Forms/Advanced_form_styling)
  - : Hier betrachten wir einige fortgeschrittenere Gestaltungs-Techniken, die verwendet werden müssen, wenn versucht wird, mit einigen der schwer zu stylenden Formularelemente umzugehen.
- [UI-Pseudo-Klassen](/de/docs/Learn/Forms/UI_pseudo-classes)
  - : Eine Einführung in die UI-Pseudo-Klassen, die es ermöglichen, HTML-Formularelemente basierend auf ihrem aktuellen Zustand anzusteuern.

## Validierung und Übermittlung von Formulardaten

- [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
  - : Das Senden von Daten reicht nicht aus — wir müssen auch sicherstellen, dass die Daten, die Benutzer in Formulare eingeben, im richtigen Format vorliegen, um sie erfolgreich zu bearbeiten, und dass sie unsere Anwendungen nicht beschädigen. Wir möchten unseren Benutzern auch helfen, unsere Formulare korrekt auszufüllen und nicht frustriert zu sein, wenn sie versuchen, unsere Apps zu verwenden. Die Formularvalidierung hilft uns, diese Ziele zu erreichen — dieser Artikel erklärt, was Sie dazu wissen müssen.
- [Formulardaten senden](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)
  - : Dieser Artikel untersucht, was passiert, wenn ein Benutzer ein Formular abschickt — wohin gehen die Daten, und wie gehen wir damit um, wenn sie dort ankommen? Wir betrachten auch einige der Sicherheitsbedenken, die mit dem Senden von Formulardaten verbunden sind.

## Fortgeschrittene Artikel

Die folgenden Artikel sind nicht unbedingt für den Lernpfad erforderlich, werden sich jedoch als interessant und nützlich erweisen, wenn Sie die oben genannten Techniken gemeistert haben und mehr wissen möchten.

- [Wie man benutzerdefinierte Formularelemente erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
  - : Sie werden auf einige Fälle stoßen, in denen die nativen Formular-Widgets einfach nicht das bieten, was Sie benötigen, z. B. aufgrund von Stil oder Funktionalität. In solchen Fällen müssen Sie möglicherweise Ihr eigenes Formular-Widget aus Roh-HTML erstellen. Dieser Artikel erklärt, wie Sie dies tun und welche Überlegungen Sie dabei beachten müssen, mit einer praktischen Fallstudie.
- [Formulare über JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
  - : Dieser Artikel untersucht Möglichkeiten, ein Formular zu verwenden, um eine HTTP-Anfrage zu erstellen und diese über benutzerdefiniertes JavaScript zu senden, anstatt eine standardmäßige Formularübermittlung zu verwenden. Er untersucht auch die Gründe, warum Sie dies tun möchten, und die Implikationen davon. (Siehe auch [FormData-Objekte verwenden](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).)
- [CSS-Eigenschaftskompatibilitätstabelle für Formularelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
  - : Dieser letzte Artikel bietet eine praktische Referenz, mit der Sie nachschlagen können, welche CSS-Eigenschaften mit welchen Formularelementen kompatibel sind.

## Siehe auch

- [HTML-Formularelement-Referenz](/de/docs/Web/HTML/Element#forms)
- [HTML-`<input>`-Typen-Referenz](/de/docs/Web/HTML/Element/input)
- [HTML-Attribut-Referenz](/de/docs/Web/HTML/Attributes)
- [Eingabemethoden und Steuerelemente für Benutzer](/de/docs/Learn/Forms/User_input_methods)

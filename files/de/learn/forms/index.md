---
title: Webformular-Bausteine
slug: Learn/Forms
l10n:
  sourceCommit: b76266228bd0900aa1256902c7858971156a58c9
---

{{LearnSidebar}}

Dieses Modul bietet eine Reihe von Artikeln, die Ihnen helfen, die Grundlagen von Webformularen zu meistern. Webformulare sind ein sehr mächtiges Werkzeug zur Interaktion mit Benutzern — am häufigsten werden sie zum Sammeln von Daten von Benutzern oder zur Steuerung einer Benutzeroberfläche verwendet. Aus historischen und technischen Gründen ist es jedoch nicht immer offensichtlich, wie sie ihr volles Potenzial ausschöpfen können. In den unten aufgeführten Artikeln behandeln wir alle wesentlichen Aspekte von Webformularen, einschließlich der Erstellung ihrer HTML-Struktur, dem Styling von Formularsteuerelementen, der Validierung von Formulardaten und dem Übermitteln von Daten an den Server.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie mindestens unsere [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) durcharbeiten. Zu diesem Zeitpunkt sollten Sie die [Einführungsleitfäden](#einführungsleitfäden) leicht verständlich finden und auch in der Lage sein, unseren [Leitfaden zu grundlegenden nativen Formularsteuerelementen](/de/docs/Learn/Forms/Basic_native_form_controls) zu nutzen.

Das Meistern von Formularen erfordert jedoch mehr als nur HTML-Kenntnisse — Sie müssen auch einige spezifische Techniken zum Styling von Formularsteuerelementen erlernen, und einige Scripting-Kenntnisse sind erforderlich, um Aspekte wie Validierung und die Erstellung benutzerdefinierter Formularsteuerelemente zu handhaben. Daher empfehlen wir Ihnen, bevor Sie sich die anderen unten aufgeführten Abschnitte ansehen, dass Sie zunächst etwas [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) lernen.

Der obige Text ist ein guter Hinweis darauf, warum wir Webformulare in ein eigenständiges Modul aufgenommen haben, anstatt es in die Themenbereiche HTML, CSS und JavaScript zu mischen — Formularelemente sind komplexer als die meisten anderen HTML-Elemente, und sie erfordern auch eine enge Verbindung mit verwandten CSS- und JavaScript-Techniken, um das Beste aus ihnen herauszuholen.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, könnten Sie (die meisten) Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Einführungsleitfäden

- [Ihr erstes Formular](/de/docs/Learn/Forms/Your_first_form)
  - : Der erste Artikel unserer Serie bietet Ihnen Ihre allererste Erfahrung bei der Erstellung eines Webformulars, einschließlich des Entwerfens eines einfachen Formulars, der Implementierung mit den richtigen HTML-Elementen, dem Hinzufügen einiger sehr einfacher Styles über CSS und wie Daten an einen Server gesendet werden.
- [Wie strukturiert man ein Webformular](/de/docs/Learn/Forms/How_to_structure_a_web_form)
  - : Nachdem die Grundlagen abgedeckt sind, schauen wir uns nun im Detail die Elemente an, die Struktur und Bedeutung für die verschiedenen Teile eines Formulars bieten.

## Die verschiedenen Formularsteuerelemente

- [Grundlegende native Formularsteuerelemente](/de/docs/Learn/Forms/Basic_native_form_controls)
  - : Wir beginnen diesen Abschnitt, indem wir die Funktionalität der ursprünglichen HTML-{{htmlelement("input")}}-Typen im Detail betrachten und prüfen, welche Optionen verfügbar sind, um verschiedene Arten von Daten zu sammeln.
- [Die HTML5-Input-Typen](/de/docs/Learn/Forms/HTML5_input_types)
  - : Hier setzen wir unser tiefgehendes Eintauchen in das `<input>`-Element fort und betrachten die zusätzlichen Eingabetypen, die bei der Veröffentlichung von HTML5 eingeführt wurden, sowie die verschiedenen UI-Steuerelemente und Erleichterungen zur Datenerfassung, die sie bieten. Außerdem betrachten wir das {{htmlelement('output')}}-Element.
- [Andere Formularsteuerelemente](/de/docs/Learn/Forms/Other_form_controls)
  - : Als Nächstes werfen wir einen Blick auf alle nicht-`<input>`-Formularsteuerelemente und zugehörige Werkzeuge, wie {{htmlelement('select')}}, {{htmlelement('textarea')}}, {{htmlelement('meter')}} und {{htmlelement('progress')}}.

## Formular-Styling-Leitfäden

- [Styling von Webformularen](/de/docs/Learn/Forms/Styling_web_forms)
  - : Dieser Artikel bietet eine Einführung in das Styling von Formularen mit CSS, einschließlich aller grundlegenden Kenntnisse, die Sie für grundlegende Styling-Aufgaben benötigen könnten.
- [Erweitertes Formularstyling](/de/docs/Learn/Forms/Advanced_form_styling)
  - : Hier betrachten wir einige komplexere Techniken zum Styling von Formularen, die erforderlich sind, wenn schwierig zu stylende Formularelemente behandelt werden müssen.
- [UI-Pseudoklassen](/de/docs/Learn/Forms/UI_pseudo-classes)
  - : Eine Einführung in die UI-Pseudoklassen, die es ermöglichen, HTML-Formularsteuerelemente basierend auf ihrem aktuellen Zustand zu adressieren.

## Validierung und Übermittlung von Formulardaten

- [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
  - : Daten zu senden ist nicht genug — wir müssen auch sicherstellen, dass die Daten, die Benutzer in Formulare eingeben, im richtigen Format vorliegen, um sie erfolgreich zu verarbeiten, und dass sie unsere Anwendungen nicht gefährden. Wir möchten auch unseren Benutzern helfen, unsere Formulare korrekt auszufüllen und nicht frustriert zu werden, wenn sie versuchen, unsere Apps zu nutzen. Die Formularvalidierung hilft uns, diese Ziele zu erreichen — dieser Artikel erklärt Ihnen, was Sie wissen müssen.
- [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)
  - : Dieser Artikel befasst sich mit dem, was passiert, wenn ein Benutzer ein Formular absendet — wohin gehen die Daten, und wie gehen wir mit ihnen um, wenn sie dort ankommen? Außerdem betrachten wir einige der Sicherheitsbedenken im Zusammenhang mit dem Senden von Formulardaten.

## Erweiterte Artikel

Die folgenden Artikel sind nicht unbedingt erforderlich für den Lernpfad, werden jedoch interessant und nützlich sein, wenn Sie die oben genannten Techniken beherrschen und mehr wissen möchten.

- [Wie man benutzerdefinierte Formularsteuerelemente erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
  - : Sie werden auf einige Fälle stoßen, in denen die nativen Formular-Widgets einfach nicht das bieten, was Sie benötigen, z.B. aufgrund von Styling oder Funktionalität. In solchen Fällen müssen Sie möglicherweise Ihr eigenes Formular-Widget aus rohem HTML erstellen. Dieser Artikel erklärt, wie Sie dies tun und welche Überlegungen Sie dabei beachten müssen, anhand einer praktischen Fallstudie.
- [Formulare über JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
  - : Dieser Artikel untersucht Möglichkeiten, ein Formular zu verwenden, um eine HTTP-Anfrage zusammenzustellen und sie über benutzerdefiniertes JavaScript zu senden, anstatt durch die Standardformular-Übermittlung. Außerdem wird untersucht, warum Sie dies tun würden und welche Auswirkungen dies hat. (Siehe auch [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).)
- [CSS-Eigenschaftskompatibilitätstabelle für Formularsteuerelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
  - : Dieser letzte Artikel bietet eine praktische Referenz, mit der Sie nachschlagen können, welche CSS-Eigenschaften mit welchen Formularelementen kompatibel sind.

## Siehe auch

- [HTML-Formularelement-Referenz](/de/docs/Web/HTML/Element#forms)
- [HTML `<input>`-Typen-Referenz](/de/docs/Web/HTML/Element/input)
- [HTML-Attribut-Referenz](/de/docs/Web/HTML/Attributes)
- [Benutzereingabemethoden und Steuerungen](/de/docs/Learn/Forms/User_input_methods)

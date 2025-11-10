---
title: Webformulare
slug: Learn_web_development/Extensions/Forms
l10n:
  sourceCommit: f85d2e26b062decf7a2bb9179c3a93003f4067a9
---

{{NextMenu("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions")}}

Dieses Modul bietet eine Reihe von Artikeln, die Ihnen helfen werden, die Grundlagen von Webformularen zu meistern. Webformulare sind ein sehr leistungsstarkes Werkzeug zur Interaktion mit Benutzern – am häufigsten werden sie zum Sammeln von Daten von Benutzern oder zur Steuerung einer Benutzeroberfläche verwendet. Aus historischen und technischen Gründen ist es jedoch nicht immer offensichtlich, wie man sie optimal nutzt. In den unten aufgeführten Artikeln werden wir alle wesentlichen Aspekte von Webformularen behandeln, einschließlich der Auszeichnung ihrer HTML-Struktur, der Gestaltung von Formularelementen, der Validierung von Formulardaten und des Sendens von Daten an den Server.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie zumindest unser [Einführung in HTML](/de/docs/Learn_web_development/Core/Structuring_content) durchgearbeitet haben. An diesem Punkt sollten Ihnen die [Einführungstutorials](#einführungstutorials) leicht verständlich sein, und Sie sollten auch in der Lage sein, unser Tutorial über [Grundlegende native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) zu nutzen.

Das Beherrschen von Formularen erfordert jedoch mehr als nur HTML-Kenntnisse – Sie müssen auch einige spezifische Techniken erlernen, um Formularelemente zu gestalten, und es sind einige Skriptkenntnisse erforderlich, um Dinge wie Validierung und die Erstellung benutzerdefinierter Formularelemente zu handhaben. Daher würden wir Ihnen empfehlen, vor dem Durcharbeiten der anderen unten aufgeführten Abschnitte zunächst etwas über [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) zu lernen.

Der obige Text ist ein guter Hinweis darauf, warum wir Webformulare in ein eigenes eigenständiges Modul gepackt haben, anstatt Teile davon in die Themenbereiche HTML, CSS und JavaScript zu mischen – Formular-Elemente sind komplexer als die meisten anderen HTML-Elemente und sie erfordern auch eine enge Verbindung von zugehörigen CSS- und JavaScript-Techniken, um das Beste aus ihnen herauszuholen.

> [!NOTE]
> Wenn Sie an einem Computer, Tablet oder einem anderen Gerät arbeiten, auf dem Sie keine Dateien erstellen können, können Sie versuchen, den Code in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) auszuführen.

## Einführungstutorials

- [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
  - : Der erste Artikel unserer Serie bietet Ihnen Ihre allererste Erfahrung beim Erstellen eines Webformulars, einschließlich der Gestaltung eines einfachen Formulars, der Implementierung mit den richtigen HTML-Elementen, des Hinzufügens einer sehr einfachen Gestaltung über CSS und wie Daten an einen Server gesendet werden.
- [Wie man ein Webformular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
  - : Nachdem die Grundlagen behandelt sind, betrachten wir nun genauer die Elemente, die Struktur und Bedeutung für die verschiedenen Teile eines Formulars bereitstellen.

## Die verschiedenen Formularelemente

- [Grundlegende native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
  - : Wir beginnen diesen Abschnitt, indem wir die Funktionalität der ursprünglichen HTML {{htmlelement("input")}}-Typen im Detail betrachten und untersuchen, welche Optionen zur Erfassung verschiedener Datentypen verfügbar sind.
- [Die HTML5-Input-Typen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types)
  - : Hier setzen wir unseren tiefen Einblick in das `<input>`-Element fort, indem wir die zusätzlichen Eingabetypen betrachten, die bei der Veröffentlichung von HTML5 bereitgestellt wurden, und die verschiedenen UI-Steuerungen und Datenerfassungserweiterungen, die sie bieten. Außerdem betrachten wir das {{htmlelement('output')}}-Element.
- [Andere Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls)
  - : Als nächstes betrachten wir alle nicht-`<input>` Formularelemente und zugehörigen Werkzeuge, wie {{htmlelement('select')}}, {{htmlelement('textarea')}}, {{htmlelement('meter')}} und {{htmlelement('progress')}}.

## Tutorials zur Formulargestaltung

- [Webformulare gestalten](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
  - : Dieser Artikel bietet eine Einführung in die Gestaltung von Formularen mit CSS, einschließlich aller Grundlagen, die Sie für grundlegende Gestaltungsvorgänge benötigen.
- [Erweiterte Formulargestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Hier betrachten wir einige fortgeschrittene Techniken zur Formulargestaltung, die eingesetzt werden müssen, wenn es um die Bearbeitung einiger schwer zu gestaltender Formularelemente geht.
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
  - : Dieser Artikel erklärt, wie Sie moderne HTML- und CSS-Funktionen zusammen verwenden können, um vollständig anpassbare `<select>`-Elemente zu erstellen. Dies umfasst die volle Kontrolle über die Gestaltung der Auswahltaste, des Dropdown-Pickers, des Pfeil-icons, des aktuellen Auswahlhäkchens und jedes einzelnen `<option>`-Elements.
- [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
  - : Eine Einführung in die UI-Pseudoklassen, die es ermöglichen, HTML-Formularelemente basierend auf ihrem aktuellen Zustand gezielt anzuwenden.

## Validierung und Absenden von Formulardaten

- [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
  - : Daten zu senden ist nicht genug – wir müssen auch sicherstellen, dass die Daten, die Benutzer in Formulare eingeben, im richtigen Format vorliegen, um sie erfolgreich zu verarbeiten, und dass sie unsere Anwendungen nicht zerstören. Wir möchten auch unseren Benutzern helfen, unsere Formulare korrekt auszufüllen und nicht frustriert zu sein, wenn sie versuchen, unsere Apps zu nutzen. Die Formularvalidierung hilft uns, diese Ziele zu erreichen – dieser Artikel erklärt Ihnen, was Sie wissen müssen.
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
  - : Dieser Artikel untersucht, was passiert, wenn ein Benutzer ein Formular absendet – wohin gehen die Daten und wie handhaben wir sie, wenn sie dort ankommen? Wir betrachten auch einige der Sicherheitsbedenken im Zusammenhang mit dem Senden von Formulardaten.

## Zusätzliche Tutorials

Die folgenden Artikel sind nicht im Lernpfad enthalten, aber sie werden interessant und nützlich sein, wenn Sie die oben genannten Techniken gemeistert haben und mehr erfahren möchten.

- [Wie man benutzerdefinierte Formularelemente erstellt](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
  - : Sie stoßen auf Fälle, in denen die nativen Formular-Widgets einfach nicht bieten, was Sie brauchen, z.B. aufgrund von Gestaltung oder Funktionalität. In solchen Fällen müssen Sie möglicherweise Ihr eigenes Formular-Widget aus rohem HTML erstellen. Dieser Artikel erklärt, wie Sie dies tun würden und welche Überlegungen Sie bei der Durchführung beachten müssen, mit einer praktischen Fallstudie.
- [Formulare über JavaScript senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
  - : Dieser Artikel untersucht Möglichkeiten, ein Formular zu verwenden, um eine HTTP-Anfrage zusammenzustellen und sie über benutzerdefiniertes JavaScript zu senden, anstatt über die standardmäßige Formularübermittlung. Er untersucht auch, warum Sie dies tun möchten und welche Auswirkungen dies hat. (Siehe auch [Verwenden von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).)
- [HTML-Formulare in älteren Browsern](/de/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
  - : Dieser Artikel bietet Tipps und Tricks, um den Schmerz zu lindern, wenn und wann Sie ältere Browser mit Ihren HTML-Formularen unterstützen müssen.
- [Benutzereingabemethoden und -steuerungen](/de/docs/Learn_web_development/Extensions/Forms/User_input_methods)
  - : Dieser Artikel zeigt die verschiedenen Möglichkeiten, wie Benutzer mit Formularen und anderen Webinhalten interagieren, und bietet Empfehlungen für das Verwalten von Benutzereingaben, praxisnahe Beispiele und Links zu weiteren Informationen.

## Siehe auch

- [HTML-Formularelement-Referenz](/de/docs/Web/HTML/Reference/Elements#forms)
- [HTML `<input>` Typen-Referenz](/de/docs/Web/HTML/Reference/Elements/input)
- [HTML-Attribut-Referenz](/de/docs/Web/HTML/Reference/Attributes)

{{NextMenu("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions")}}

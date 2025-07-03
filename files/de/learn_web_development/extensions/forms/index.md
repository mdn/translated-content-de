---
title: Webformulare
slug: Learn_web_development/Extensions/Forms
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{NextMenu("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions")}}

Dieses Modul bietet eine Reihe von Artikeln, die Ihnen helfen werden, die Grundlagen von Webformularen zu beherrschen. Webformulare sind ein sehr leistungsstarkes Werkzeug für die Interaktion mit Benutzern – am häufigsten werden sie zum Sammeln von Daten von Benutzern oder zum Steuern einer Benutzeroberfläche verwendet. Aus historischen und technischen Gründen ist es jedoch nicht immer offensichtlich, wie man sie optimal nutzt. In den unten aufgeführten Artikeln werden wir alle wesentlichen Aspekte von Webformularen behandeln, einschließlich der Auszeichnung ihrer HTML-Struktur, des Stils von Formularelementen, der Validierung von Formulardaten und der Übermittlung von Daten an den Server.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie zumindest unser [Einführung in HTML](/de/docs/Learn_web_development/Core/Structuring_content) durchgearbeitet haben. Zu diesem Zeitpunkt sollten Ihnen die [Einführungstutorials](#einführungstutorials) leicht verständlich sein und Sie sollten in der Lage sein, unser Tutorial zu den [Grundlegenden nativen Formularelementen](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) zu nutzen.

Die Beherrschung von Formularen erfordert jedoch mehr als nur HTML-Kenntnisse – Sie müssen auch einige spezifische Techniken lernen, um Formularelemente zu gestalten, und einige Skriptkenntnisse sind erforderlich, um Dinge wie Validierung zu handhaben und benutzerdefinierte Formularelemente zu erstellen. Daher empfehlen wir Ihnen, dass Sie sich, bevor Sie sich die anderen unten aufgeführten Abschnitte anschauen, zunächst etwas [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) aneignen.

Der oben stehende Text ist ein guter Hinweis darauf, warum wir Webformulare in ein eigenes eigenständiges Modul gestellt haben, anstatt zu versuchen, Teile davon in die Themenbereiche HTML, CSS und JavaScript zu mischen – Formularelemente sind komplizierter als die meisten anderen HTML-Elemente, und sie erfordern auch eine enge Verbindung zu verwandten CSS- und JavaScript-Techniken, um das Beste aus ihnen herauszuholen.

> [!NOTE]
> Wenn Sie an einem Computer, Tablet oder einem anderen Gerät arbeiten, auf dem Sie keine Dateien erstellen können, können Sie versuchen, den Code in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) auszuführen.

## Einführungstutorials

- [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
  - : Der erste Artikel in unserer Serie bietet Ihre allererste Erfahrung mit dem Erstellen eines Webformulars, einschließlich des Designs eines einfachen Formulars, dessen Implementierung mit den richtigen HTML-Elementen, dem Hinzufügen einiger sehr einfacher Styling-Elemente über CSS und der Art und Weise, wie Daten an einen Server gesendet werden.
- [Wie man ein Webformular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
  - : Nachdem wir die Grundlagen behandelt haben, werfen wir nun einen genaueren Blick auf die Elemente, die Struktur und Bedeutung zu den verschiedenen Teilen eines Formulars liefern.

## Die verschiedenen Formularelemente

- [Grundlegende native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
  - : Wir beginnen diesen Abschnitt mit einem detaillierten Blick auf die Funktionalität der ursprünglichen HTML {{htmlelement("input")}}-Typen und darauf, welche Optionen zur Verfügung stehen, um verschiedene Arten von Daten zu sammeln.
- [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types)
  - : Hier setzen wir unser tiefes Eintauchen in das `<input>`-Element fort, indem wir die zusätzlichen Eingabetypen betrachten, die mit der Veröffentlichung von HTML5 bereitgestellt wurden, sowie die verschiedenen UI-Steuerelemente und Datensammlungserweiterungen, die sie bieten. Zusätzlich betrachten wir das {{htmlelement('output')}}-Element.
- [Andere Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls)
  - : Als nächstes werfen wir einen Blick auf alle nicht-`<input>`-Formularelemente und die damit verbundenen Werkzeuge, wie {{htmlelement('select')}}, {{htmlelement('textarea')}}, {{htmlelement('meter')}} und {{htmlelement('progress')}}.

## Form-Styling-Tutorials

- [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
  - : Dieser Artikel bietet eine Einführung in das Stylen von Formularen mit CSS, einschließlich aller Grundlagen, die Sie für einfache Styling-Aufgaben wissen müssen.
- [Erweitertes Form-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Hier betrachten wir einige fortgeschrittenere Form-Styling-Techniken, die verwendet werden müssen, wenn man versucht, mit einigen der schwierig zu stylenden Formularelemente umzugehen.
- [Anpassbare Auswahlelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
  - : Dieser Artikel erklärt, wie man moderne HTML- und CSS-Features gemeinsam nutzt, um vollständig anpassbare `<select>`-Elemente zu erstellen. Dies umfasst die volle Kontrolle über das Styling der Auswahl-Schaltfläche, das Dropdown, das Pfeilsymbol, das aktuelle Auswahl-Häkchen und jedes einzelne `<option>`-Element.
- [UI-Pseudo-Klassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
  - : Eine Einführung in die UI-Pseudo-Klassen, die es ermöglichen, HTML-Formularelemente basierend auf ihrem aktuellen Zustand zu adressieren.

## Validierung und Übermittlung von Formulardaten

- [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
  - : Daten zu senden ist nicht genug — wir müssen auch sicherstellen, dass die Daten, die Benutzer in Formulare eingeben, im richtigen Format vorliegen, um sie erfolgreich zu verarbeiten, und dass sie unsere Anwendungen nicht zum Absturz bringen. Wir möchten auch unseren Benutzern helfen, unsere Formulare korrekt auszufüllen und nicht frustriert zu sein, wenn sie versuchen, unsere Anwendungen zu nutzen. Die Formularvalidierung hilft uns, diese Ziele zu erreichen — dieser Artikel erklärt, was Sie wissen müssen.
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
  - : Dieser Artikel behandelt, was passiert, wenn ein Benutzer ein Formular abschickt — wohin gehen die Daten und wie gehen wir damit um, wenn sie dort ankommen? Wir werfen auch einen Blick auf einige der Sicherheitsbedenken, die mit dem Senden von Formulardaten verbunden sind.

## Zusätzliche Artikel

Die folgenden Artikel sind nicht in den Lernpfad eingebunden, werden sich jedoch als interessant und nützlich erweisen, wenn Sie die oben genannten Techniken beherrschen und mehr erfahren möchten.

- [Wie man benutzerdefinierte Formularelemente erstellt](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
  - : Sie werden auf einige Fälle stoßen, in denen die nativen Formular-Widgets einfach nicht bieten, was Sie brauchen, z.B. wegen des Stylings oder der Funktionalität. In solchen Fällen müssen Sie möglicherweise Ihr eigenes Formularelement aus rohem HTML erstellen. Dieser Artikel erklärt, wie Sie dies tun und welche Überlegungen Sie dabei beachten müssen, mit einer praktischen Fallstudie.
- [Formulare über JavaScript senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
  - : Dieser Artikel betrachtet Möglichkeiten, ein Formular zu verwenden, um eine HTTP-Anfrage zusammenzustellen und sie über benutzerdefiniertes JavaScript zu senden, anstatt über die standardmäßige Formularübermittlung. Er behandelt auch, warum man dies tun möchte und welche Auswirkungen dies hat. (Siehe auch [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).)
- [Anpassbare Auswahlelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
  - : Dieser Artikel erklärt, wie man moderne HTML- und CSS-Features gemeinsam nutzt, um vollständig anpassbare {{htmlelement("select")}}-Elemente zu erstellen.

## Siehe auch

- [HTML-Formularelementreferenz](/de/docs/Web/HTML/Reference/Elements#forms)
- [HTML `<input>`-Typen-Referenz](/de/docs/Web/HTML/Reference/Elements/input)
- [HTML-Attributreferenz](/de/docs/Web/HTML/Reference/Attributes)
- [Methoden und Steuerungen für Benutzereingaben](/de/docs/Learn_web_development/Extensions/Forms/User_input_methods)

{{NextMenu("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions")}}

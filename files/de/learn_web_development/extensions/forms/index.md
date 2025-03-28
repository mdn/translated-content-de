---
title: Webformulare
slug: Learn_web_development/Extensions/Forms
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions")}}

Dieses Modul bietet eine Reihe von Artikeln, die Ihnen helfen, die Grundlagen von Webformularen zu meistern. Webformulare sind ein sehr leistungsfähiges Werkzeug zur Interaktion mit Benutzern – am häufigsten werden sie verwendet, um Daten von Benutzern zu sammeln oder ihnen die Steuerung einer Benutzeroberfläche zu ermöglichen. Aus historischen und technischen Gründen ist es jedoch nicht immer offensichtlich, wie man sie in vollem Umfang nutzt. In den unten aufgeführten Artikeln behandeln wir alle wesentlichen Aspekte von Webformularen, einschließlich der Markierung ihrer HTML-Struktur, der Gestaltung von Formularsteuerelementen, der Validierung von Formulardaten und der Übermittlung von Daten an den Server.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie zumindest unseren [Einführung in HTML](/de/docs/Learn_web_development/Core/Structuring_content) durcharbeiten. An diesem Punkt sollten Sie die [Einführungstutorials](#einführungstutorials) leicht verständlich finden und auch in der Lage sein, unser [Grundlegende native Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) Tutorial zu nutzen.

Das Meistern von Formularen erfordert jedoch mehr als nur HTML-Kenntnisse – Sie müssen auch einige spezielle Techniken lernen, um Formularsteuerelemente zu gestalten, und einige Script-Kenntnisse sind erforderlich, um Dinge wie Validierung und das Erstellen benutzerdefinierter Formularsteuerelemente zu handhaben. Bevor Sie sich also die anderen unten aufgeführten Abschnitte ansehen, empfehlen wir Ihnen, zunächst etwas [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) zu lernen.

Der obige Text ist ein guter Indikator dafür, warum wir Webformulare in ein eigenständiges Modul gepackt haben, anstatt Teile davon in die Themenbereiche HTML, CSS und JavaScript zu mischen – Formularelemente sind komplexer als die meisten anderen HTML-Elemente und erfordern auch eine enge Verbindung zu verwandten CSS- und JavaScript-Techniken, um das Beste aus ihnen herauszuholen.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, könnten Sie versuchen, die (meisten) Codebeispiele in einem Online-Coding-Programm wie [JS Bin](https://jsbin.com/) oder [Glitch](https://glitch.com/) auszuprobieren.

## Einführungstutorials

- [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
  - : Der erste Artikel in unserer Serie bietet Ihnen Ihre allererste Erfahrung im Erstellen eines Webformulars, einschließlich der Gestaltung eines einfachen Formulars, dessen Implementierung mit den richtigen HTML-Elementen, der Hinzufügung einiger sehr einfacher CSS-Stilmittel und wie Daten an einen Server gesendet werden.
- [Wie man ein Webformular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
  - : Nachdem die Grundlagen geklärt sind, betrachten wir nun detaillierter die Elemente, die dazu verwendet werden, den verschiedenen Teilen eines Formulars Struktur und Bedeutung zu verleihen.

## Die verschiedenen Formularsteuerelemente

- [Grundlegende native Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
  - : Wir beginnen diesen Abschnitt, indem wir uns die Funktionalität der ursprünglichen HTML {{htmlelement("input")}} Typen im Detail ansehen und welche Optionen zur Verfügung stehen, um verschiedene Arten von Daten zu sammeln.
- [Die HTML5 Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types)
  - : Hier führen wir unsere umfassende Untersuchung des `<input>` Elements fort, indem wir die zusätzlichen Eingabetypen betrachten, die mit HTML5 eingeführt wurden, sowie die verschiedenen UI-Steuerelemente und Verbesserungen der Datenerfassung, die sie bieten. Zusätzlich betrachten wir das {{htmlelement('output')}} Element.
- [Andere Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls)
  - : Als nächstes betrachten wir alle nicht-`<input>` Formularsteuerelemente und zugehörige Werkzeuge, wie {{htmlelement('select')}}, {{htmlelement('textarea')}}, {{htmlelement('meter')}} und {{htmlelement('progress')}}.

## Formulargestaltungstutorials

- [Gestaltung von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
  - : Dieser Artikel bietet eine Einführung in die Gestaltung von Formularen mit CSS, einschließlich aller Grundlagen, die Sie für grundlegende Gestaltungsaufgaben benötigen könnten.
- [Erweiterte Formulargestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Hier betrachten wir einige fortgeschrittenere Gestaltungstechniken, die verwendet werden müssen, wenn man sich mit einigen der schwierigeren zu gestaltenden Formularelemente befasst.
- [Anpassbare Auswahlelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
  - : Dieser Artikel erklärt, wie man mit Hilfe moderner HTML- und CSS-Funktionen vollständig anpassbare `<select>`-Elemente erstellt. Dies umfasst die vollständige Kontrolle über die Gestaltung des Auswahlknopfs, des Dropdown-Pickers, des Pfeilsymbols, des aktuellen Auswahlsymbols und jedes einzelnen `<option>` Elements.
- [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
  - : Eine Einführung in die UI-Pseudoklassen, die es ermöglichen, HTML-Formularsteuerelemente basierend auf ihrem aktuellen Zustand anzuvisieren.

## Validierung und Übermittlung von Formulardaten

- [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
  - : Daten zu senden reicht nicht aus — wir müssen auch sicherstellen, dass die Daten, die Benutzer in Formulare eingeben, im richtigen Format vorliegen, um sie erfolgreich zu verarbeiten, und dass sie unsere Anwendungen nicht zerstören. Wir möchten auch unseren Benutzern helfen, unsere Formulare korrekt auszufüllen und nicht frustriert zu sein, wenn sie versuchen, unsere Anwendungen zu verwenden. Die Formularvalidierung hilft uns, diese Ziele zu erreichen — dieser Artikel sagt Ihnen, was Sie wissen müssen.
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
  - : Dieser Artikel untersucht, was passiert, wenn ein Benutzer ein Formular abschickt — wohin gehen die Daten und wie gehen wir damit um, wenn sie ankommen? Wir betrachten auch einige der Sicherheitsbedenken, die mit dem Senden von Formulardaten verbunden sind.

## Zusätzliche Artikel

Die folgenden Artikel sind nicht in dem Lernpfad enthalten, aber sie werden interessant und nützlich sein, wenn Sie die oben genannten Techniken gemeistert haben und mehr wissen möchten.

- [Wie man benutzerdefinierte Formularsteuerelemente baut](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
  - : Sie werden auf einige Fälle stoßen, in denen die nativen Formular-Widgets einfach nicht das bieten, was Sie benötigen, z. B. wegen Gestaltung oder Funktionalität. In solchen Fällen müssen Sie möglicherweise Ihr eigenes Formular-Widget aus rohem HTML bauen. Dieser Artikel erklärt, wie Sie dies tun würden und welche Überlegungen Sie dabei berücksichtigen müssen, mit einer praktischen Fallstudie.
- [Formulare über JavaScript senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
  - : Dieser Artikel untersucht Möglichkeiten, ein Formular zu verwenden, um eine HTTP-Anfrage zusammenzustellen und über benutzerdefiniertes JavaScript zu senden, anstatt über die Standard-Formulareinreichung. Es wird auch erklärt, warum Sie dies tun möchten und welche Auswirkungen dies hat. (Siehe auch [FormData-Objekte verwenden](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).)
- [Anpassbare Auswahlelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
  - : Dieser Artikel erklärt, wie man mit Hilfe moderner HTML- und CSS-Funktionen vollständig anpassbare {{htmlelement("select")}}-Elemente erstellt.

## Siehe auch

- [HTML Forms Element Referenz](/de/docs/Web/HTML/Element#forms)
- [HTML `<input>` Typen Referenz](/de/docs/Web/HTML/Element/input)
- [HTML Attributreferenz](/de/docs/Web/HTML/Attributes)
- [Benutzereingabemethoden und Steuerelemente](/de/docs/Learn_web_development/Extensions/Forms/User_input_methods)

{{NextMenu("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions")}}

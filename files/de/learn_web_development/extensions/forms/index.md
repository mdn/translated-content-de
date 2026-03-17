---
title: Webformulare
slug: Learn_web_development/Extensions/Forms
l10n:
  sourceCommit: 76936e1d9ff271ac59307a0f858d0d7b57f3866a
---

{{NextMenu("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions")}}

Dieses Modul bietet eine Reihe von Artikeln, die Ihnen helfen, die Grundlagen von Webformularen zu meistern. Webformulare sind ein sehr leistungsfähiges Werkzeug zur Interaktion mit Benutzern – sie werden am häufigsten zum Sammeln von Daten von Benutzern oder zur Steuerung einer Benutzeroberfläche verwendet. Aus historischen und technischen Gründen ist es jedoch nicht immer offensichtlich, wie sie ihr volles Potenzial entfalten können. In den unten aufgeführten Artikeln behandeln wir alle wesentlichen Aspekte von Webformularen, einschließlich der Auszeichnung ihrer HTML-Struktur, dem Styling von Formularelementen, der Validierung von Formulardaten und dem Senden von Daten an den Server.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie zumindest unsere [Einführung in HTML](/de/docs/Learn_web_development/Core/Structuring_content) durcharbeiten. An diesem Punkt sollten Sie die [Einleitungstutorials](#einführungstutorials) leicht verständlich finden und auch in der Lage sein, unser [Tutorial zu grundlegenden nativen Formularelementen](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls) zu nutzen.

Das Beherrschen von Formularen erfordert jedoch mehr als nur HTML-Kenntnisse — Sie müssen auch einige spezifische Techniken zum Stylen von Formularelementen erlernen, und es werden einige Scriptkenntnisse benötigt, um Dinge wie Validierung und das Erstellen benutzerdefinierter Formularelemente zu handhaben. Daher empfehlen wir Ihnen, bevor Sie sich die anderen unten aufgeführten Abschnitte ansehen, sich zunächst mit [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) vertraut zu machen.

Der obige Text zeigt gut, warum wir Webformulare in ein eigenes Modul gestellt haben, anstatt Teile davon in die Themenbereiche HTML, CSS und JavaScript zu mischen — Formularelemente sind komplexer als die meisten anderen HTML-Elemente und erfordern außerdem eine enge Verbindung von verwandten CSS- und JavaScript-Techniken, um das Beste aus ihnen herauszuholen.

> [!NOTE]
> Wenn Sie an einem Computer, Tablet oder einem anderen Gerät arbeiten, auf dem Sie keine Dateien erstellen können, können Sie versuchen, den Code in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) auszuführen.

## Einführungstutorials

- [Ihr erstes Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form)
  - : Der erste Artikel unserer Serie bietet Ihre allererste Erfahrung im Erstellen eines Webformulars, einschließlich der Gestaltung eines einfachen Formulars, der Implementierung mit den richtigen HTML-Elementen, dem Hinzufügen eines sehr einfachen Stylings über CSS und wie Daten an einen Server gesendet werden.
- [Wie man ein Webformular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
  - : Nachdem die Grundlagen behandelt sind, werfen wir nun einen genaueren Blick auf die Elemente, die verwendet werden, um verschiedenen Teilen eines Formulars Struktur und Bedeutung zu verleihen.

## Die verschiedenen Formularelemente

- [Grundlegende native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
  - : Wir beginnen diesen Abschnitt, indem wir die Funktionalität der ursprünglichen HTML {{htmlelement("input")}}-Typen im Detail untersuchen und sehen, welche Optionen zur Verfügung stehen, um verschiedene Datentypen zu sammeln.
- [Die HTML5 Input-Typen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types)
  - : Hier setzen wir unser tiefgehendes Studium des `<input>`-Elements fort, indem wir die zusätzlichen Input-Typen betrachten, die bei der Veröffentlichung von HTML5 eingeführt wurden, sowie die verschiedenen UI-Kontrollen und Datenerfassungserweiterungen, die sie bieten. Darüber hinaus betrachten wir das {{htmlelement('output')}}-Element.
- [Andere Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls)
  - : Als Nächstes betrachten wir alle nicht-`<input>`-Formularelemente und zugehörigen Werkzeuge, wie z.B. {{htmlelement('select')}}, {{htmlelement('textarea')}}, {{htmlelement('meter')}} und {{htmlelement('progress')}}.

## Formular-Styling-Tutorials

- [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
  - : Dieser Artikel bietet eine Einführung in das Styling von Formularen mit CSS und umfasst alle Grundlagen, die Sie für grundlegende Styling-Aufgaben benötigen.
- [Weiterführendes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Hier betrachten wir einige fortgeschrittenere Techniken des Formularstylings, die verwendet werden müssen, wenn es darum geht, mit einigen der schwieriger zu stylenden Formularelemente umzugehen.
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
  - : Dieser Artikel erklärt, wie Sie moderne HTML- und CSS-Funktionen zusammen nutzen, um vollständig anpassbare `<select>`-Elemente zu erstellen. Dies umfasst die vollständige Kontrolle über das Styling des Auswahlbuttons, der Dropdown-Auswahl, des Pfeilsymbols, des aktuellen Auswahl-Häkchens und jedes einzelnen `<option>`-Elements.
- [Anpassbare Auswahl-Listboxen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select_listboxes)
  - : Dieser Artikel knüpft an den vorherigen an und zeigt, wie anpassbare Listbox-`<select>`-Elemente gestylt werden.
- [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
  - : Eine Einführung in die UI-Pseudoklassen, die es ermöglichen, HTML-Formularelemente basierend auf ihrem aktuellen Zustand anzusprechen.

## Validieren und Senden von Formulardaten

- [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
  - : Das Senden von Daten ist nicht ausreichend — wir müssen auch sicherstellen, dass die Daten, die Benutzer in Formulare eingeben, im richtigen Format vorliegen, um sie erfolgreich verarbeiten zu können, und dass sie unsere Anwendungen nicht beschädigen. Wir möchten auch unseren Benutzern helfen, unsere Formulare korrekt auszufüllen und nicht frustriert zu sein, wenn sie versuchen, unsere Apps zu nutzen. Die Formularvalidierung hilft uns, diese Ziele zu erreichen — dieser Artikel sagt Ihnen, was Sie darüber wissen müssen.
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
  - : Dieser Artikel untersucht, was passiert, wenn ein Benutzer ein Formular abschickt — wohin gehen die Daten und wie behandeln wir sie, wenn sie dort ankommen? Wir betrachten auch einige der Sicherheitsaspekte, die mit dem Senden von Formulardaten verbunden sind.

## Zusätzliche Tutorials

Die folgenden Artikel sind nicht im Lernpfad enthalten, werden sich jedoch als interessant und nützlich erweisen, wenn Sie die oben genannten Techniken gemeistert haben und mehr erfahren möchten.

- [Wie man benutzerdefinierte Formularelemente erstellt](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
  - : Sie werden auf einige Fälle stoßen, in denen die nativen Formularelemente nicht das bieten, was Sie benötigen, z.B. aufgrund von Styling oder Funktionalität. In solchen Fällen müssen Sie möglicherweise Ihr eigenes Formularelement aus reinem HTML erstellen. Dieser Artikel erklärt, wie Sie dies tun würden, und welche Überlegungen Sie dabei beachten müssen, anhand einer praktischen Fallstudie.
- [Formulare über JavaScript senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
  - : Dieser Artikel untersucht Möglichkeiten, ein Formular zu verwenden, um eine HTTP-Anfrage zusammenzustellen und sie über benutzerdefiniertes JavaScript zu senden, anstatt eine Standard-Formularübermittlung zu verwenden. Er behandelt auch, warum Sie dies tun möchten und welche Implikationen damit verbunden sind. (Siehe auch [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).)
- [HTML-Formulare in veralteten Browsern](/de/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
  - : Dieser Artikel bietet Tipps und Tricks, um die Probleme zu erleichtern, wenn und wann Sie veraltete Browser mit Ihren HTML-Formularen unterstützen müssen.
- [Methoden und Steuerungen der Benutzereingabe](/de/docs/Learn_web_development/Extensions/Forms/User_input_methods)
  - : Dieser Artikel zeigt die verschiedenen Wege, wie Benutzer mit Formularen und anderen Webinhalten interagieren, und bietet Empfehlungen zur Verwaltung von Benutzereingaben, praxisnahe Beispiele und Links zu weiteren Informationen.

## Siehe auch

- [Referenz zu HTML-Formular-Elementen](/de/docs/Web/HTML/Reference/Elements#forms)
- [Referenz zu HTML-`<input>`-Typen](/de/docs/Web/HTML/Reference/Elements/input)
- [Referenz zu HTML-Attributen](/de/docs/Web/HTML/Reference/Attributes)

{{NextMenu("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions")}}

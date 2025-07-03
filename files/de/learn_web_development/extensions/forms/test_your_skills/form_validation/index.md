---
title: "Testen Sie Ihre Fähigkeiten: Formularvalidierung"
short-title: Form validation
slug: Learn_web_development/Extensions/Forms/Test_your_skills/Form_validation
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Das Ziel dieses Fähigkeitstests ist zu beurteilen, ob Sie unseren Artikel [Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Formularvalidierung 1

In dieser Aufgabe stellen wir Ihnen ein einfaches Support-Anfrageformular zur Verfügung, und wir möchten, dass Sie einige Validierungsfunktionen hinzufügen:

1. Machen Sie alle Eingabefelder erforderlich, damit das Formular gesendet werden kann.
2. Ändern Sie den Typ der Felder "Email address" und "Phone number", damit der Browser eine spezifischere Validierung anwendet, die für die angeforderten Daten geeignet ist.
3. Geben Sie dem Feld "User name" eine erforderliche Länge von 5 bis 20 Zeichen, dem Feld "Phone number" eine maximale Länge von 15 Zeichen und dem Feld "Comment" eine maximale Länge von 200 Zeichen.

Versuchen Sie, Ihr Formular zu übermitteln — es sollte die Übermittlung verweigern, bis die oben genannten Einschränkungen befolgt werden, und geeignete Fehlermeldungen geben. Um Ihnen zu helfen, sollten Sie in Betracht ziehen, einige einfache CSS hinzuzufügen, um anzuzeigen, wann ein Formularfeld gültig oder ungültig ist.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Formularvalidierung 2

Jetzt möchten wir, dass Sie dasselbe Formular aus der vorherigen Aufgabe (verwenden Sie Ihre vorherige Antwort, wenn Sie möchten) nehmen und eine spezifischere Musterüberprüfung für die ersten drei Felder mit regulären Ausdrücken hinzufügen.

1. Alle Benutzernamen in unserer Anwendung bestehen aus einem einzigen Buchstaben, gefolgt von einem Punkt, gefolgt von drei oder mehr Buchstaben oder Zahlen. Alle Buchstaben sollten klein geschrieben sein.
2. Alle E-Mail-Adressen für unsere Nutzer bestehen aus einem oder mehreren Buchstaben (klein oder groß) oder Zahlen, gefolgt von "@bigcorp.eu".
3. Entfernen Sie die Längenvalidierung für das Feld Telefonnummer, falls vorhanden, und stellen Sie es so ein, dass es 10 Ziffern akzeptiert — entweder 10 Ziffern in einer Reihe oder ein Muster von drei Ziffern, drei Ziffern, dann vier Ziffern, getrennt durch entweder Leerzeichen, Bindestriche oder Punkte.

> [!NOTE]
> Reguläre Ausdrücke sind wirklich herausfordernd, wenn Sie neu darin sind, aber verzweifeln Sie nicht — versuchen Sie es und sehen Sie, wie weit Sie kommen; es ist keine Schande, um Hilfe zu bitten. Alles, was Sie brauchen, um diese Fragen zu beantworten, finden Sie in unserer [Referenz zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) und durch die Suche auf [Stack Overflow](https://stackoverflow.com/).

Auch hier sollten Sie in Betracht ziehen, einige einfache CSS hinzuzufügen, um anzuzeigen, wann ein Formularfeld gültig oder ungültig ist.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Formularvalidierung 3

In unserer letzten Aufgabe für dieses Set stellen wir Ihnen ein ähnliches Beispiel wie im begleitenden Artikel bereit — ein Eingabefeld für eine E-Mail-Adresse. Wir möchten, dass Sie die Constraint Validation API und einige Formularvalidierungsattribute verwenden, um benutzerdefinierte Fehlermeldungen zu programmieren.

1. Machen Sie die Eingabe zwingend erforderlich und geben Sie eine Mindestlänge von 10 Zeichen an.
2. Fügen Sie einen Event-Listener hinzu, der überprüft, ob der eingegebene Wert eine E-Mail-Adresse ist und ob er lang genug ist. Wenn er nicht wie eine E-Mail-Adresse aussieht oder zu kurz ist, geben Sie dem Nutzer geeignete benutzerdefinierte Fehlermeldungen.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

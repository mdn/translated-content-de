---
title: "Testen Sie Ihre Fähigkeiten: Formularvalidierung"
slug: Learn_web_development/Extensions/Forms/Test_your_skills:_Form_validation
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Das Ziel dieses Fertigkeitstests ist es, zu überprüfen, ob Sie unseren Artikel zur [Client-seitigen Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Formularvalidierung 1

In dieser Aufgabe stellen wir Ihnen ein einfaches Anfrageformular zur Verfügung, und wir möchten, dass Sie ihm einige Validierungsfunktionen hinzufügen:

1. Machen Sie alle Eingabefelder obligatorisch, bevor das Formular eingereicht werden kann.
2. Ändern Sie den Typ der Felder "Email address" und "Phone number", damit der Browser spezifischere Validierungen für die abgefragten Daten anwendet.
3. Geben Sie dem Feld "User name" eine erforderliche Länge von 5 bis 20 Zeichen, dem Feld "Phone number" eine maximale Länge von 15 Zeichen und dem Feld "Comment" eine maximale Länge von 200 Zeichen.

Versuchen Sie, Ihr Formular abzusenden — es sollte die Einreichung verweigern, bis die oben genannten Einschränkungen berücksichtigt werden, und entsprechende Fehlermeldungen ausgeben. Zur Unterstützung könnten Sie erwägen, etwas einfaches CSS hinzuzufügen, um anzuzeigen, wann ein Formularfeld gültig oder ungültig ist.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Formularvalidierung 2

Jetzt möchten wir, dass Sie dasselbe Formular wie in der vorherigen Aufgabe verwenden (nutzen Sie Ihre vorherige Antwort, wenn Sie möchten), und fügen Sie den ersten drei Feldern eine spezifischere Muster-Validierung mit regulären Ausdrücken hinzu.

1. Alle Benutzernamen in unserer Anwendung bestehen aus einem einzelnen Buchstaben, gefolgt von einem Punkt, gefolgt von drei oder mehr Buchstaben oder Zahlen. Alle Buchstaben sollten klein geschrieben sein.
2. Alle E-Mail-Adressen unserer Benutzer bestehen aus einem oder mehreren Buchstaben (groß oder klein) oder Zahlen, gefolgt von "@bigcorp.eu".
3. Entfernen Sie die Längenvalidierung aus dem Feld "Phone number", falls vorhanden, und stellen Sie es so ein, dass es 10 Ziffern akzeptiert — entweder 10 Ziffern in Folge oder ein Muster aus drei Ziffern, drei Ziffern, dann vier Ziffern, getrennt durch entweder Leerzeichen, Bindestriche oder Punkte.

> [!NOTE]
> Reguläre Ausdrücke sind sehr herausfordernd, wenn Sie neu damit sind, aber verzweifeln Sie nicht — versuchen Sie es und sehen Sie, wie weit Sie kommen; es ist keine Schande, um Hilfe zu bitten. Alles, was Sie brauchen, um diese Fragen zu beantworten, finden Sie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) und durch die Suche auf [Stack Overflow](https://stackoverflow.com/).

Auch hier könnten Sie erwägen, etwas einfaches CSS hinzuzufügen, um anzuzeigen, wann ein Formularfeld gültig oder ungültig ist.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Formularvalidierung 3

In unserer letzten Aufgabe für dieses Set stellen wir Ihnen ein ähnliches Beispiel zu dem im begleitenden Artikel gezeigten zur Verfügung — ein Eingabefeld für die E-Mail-Adresse. Wir möchten, dass Sie die Constraint Validation API verwenden sowie einige Formularvalidierungsattribute, um benutzerdefinierte Fehlermeldungen zu programmieren.

1. Machen Sie das Eingabefeld obligatorisch auszufüllen und geben Sie ihm eine Mindestlänge von 10 Zeichen.
2. Fügen Sie einen Ereignis-Listener hinzu, der überprüft, ob der eingegebene Wert eine E-Mail-Adresse ist und ob er lang genug ist. Wenn es nicht wie eine E-Mail-Adresse aussieht oder zu kurz ist, geben Sie dem Benutzer entsprechende benutzerdefinierte Fehlermeldungen.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

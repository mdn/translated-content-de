---
title: "Testen Sie Ihre Fähigkeiten: Formularvalidierung"
slug: Learn_web_development/Extensions/Forms/Test_your_skills:_Form_validation
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

Ziel dieses Fähigkeitentests ist es zu überprüfen, ob Sie unseren Artikel zur [Client-seitigen Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Falls Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Formularvalidierung 1

In dieser Aufgabe stellen wir Ihnen ein einfaches Support-Anfrageformular zur Verfügung und möchten, dass Sie einige Validierungsfunktionen hinzufügen:

1. Machen Sie alle Eingabefelder obligatorisch, bevor das Formular abgesendet werden kann.
2. Ändern Sie den Typ der Felder "Email address" und "Phone number", damit der Browser eine spezifischere Validierung für die angeforderten Daten durchführt.
3. Geben Sie dem Feld "User name" eine erforderliche Länge von 5 bis 20 Zeichen, dem Feld "Phone number" eine maximale Länge von 15 Zeichen und dem Feld "Comment" eine maximale Länge von 200 Zeichen.

Versuchen Sie, Ihr Formular abzusenden — es sollte die Absendung verweigern, bis die obigen Bedingungen erfüllt sind, und geeignete Fehlermeldungen anzeigen. Um Ihnen zu helfen, möchten Sie vielleicht ein einfaches CSS hinzufügen, um anzuzeigen, wann ein Formularfeld gültig oder ungültig ist.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Formularvalidierung 2

Nun möchten wir, dass Sie das gleiche Formular, das Sie in der vorherigen Aufgabe gesehen haben (verwenden Sie Ihre vorherige Antwort, wenn Sie möchten), um einige spezifischere Muster-Validierungen auf die ersten drei Felder mit regulären Ausdrücken erweitern:

1. Alle Benutzernamen in unserer Anwendung bestehen aus einem einzelnen Buchstaben, gefolgt von einem Punkt, gefolgt von drei oder mehr Buchstaben oder Zahlen. Alle Buchstaben sollten klein geschrieben sein.
2. Alle Email-Adressen unserer Benutzer bestehen aus einem oder mehreren Buchstaben (groß oder klein) oder Zahlen, gefolgt von "@bigcorp.eu".
3. Entfernen Sie die Längenvalidierung aus dem Telefonnummernfeld, falls vorhanden, und setzen Sie es so, dass es 10 Ziffern akzeptiert — entweder 10 Ziffern in Folge oder ein Muster von drei Ziffern, drei Ziffern und vier Ziffern, getrennt durch Leerzeichen, Bindestriche oder Punkte.

> [!NOTE]
> Reguläre Ausdrücke sind wirklich herausfordernd, wenn Sie neu darin sind, aber verzweifeln Sie nicht — probieren Sie es aus und sehen Sie, wie weit Sie kommen; es ist keine Schande, um Hilfe zu bitten. Alles, was Sie zur Beantwortung dieser Fragen benötigen, finden Sie in unserem [Referenz zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) und durch die Suche auf [Stack Overflow](https://stackoverflow.com/).

Auch hier möchten Sie möglicherweise ein einfaches CSS hinzufügen, um anzuzeigen, wann ein Formularfeld gültig oder ungültig ist.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Formularvalidierung 3

In unserer letzten Aufgabe für dieses Set stellen wir Ihnen ein ähnliches Beispiel wie im begleitenden Artikel vor — ein Eingabefeld für eine Email-Adresse. Wir möchten, dass Sie die Constraint-Validierungs-API sowie einige Formularvalidierungsattribute verwenden, um benutzerdefinierte Fehlermeldungen zu programmieren.

1. Machen Sie die Eingabe obligatorisch und geben Sie eine Mindestlänge von 10 Zeichen an.
2. Fügen Sie einen Event-Listener hinzu, der überprüft, ob der eingegebene Wert eine Email-Adresse ist und ob er lang genug ist. Wenn er nicht wie eine Email-Adresse aussieht oder zu kurz ist, geben Sie dem Benutzer geeignete benutzerdefinierte Fehlermeldungen.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

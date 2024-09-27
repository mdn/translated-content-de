---
title: "Testen Sie Ihre Fähigkeiten: Formularvalidierung"
slug: Learn/Forms/Test_your_skills:_Form_validation
l10n:
  sourceCommit: b76266228bd0900aa1256902c7858971156a58c9
---

{{learnsidebar}}

Ziel dieses Fähigkeitstests ist es zu prüfen, ob Sie unseren Artikel [Client-side form validation](/de/docs/Learn/Forms/Form_validation) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Formularvalidierung 1

In dieser Aufgabe stellen wir Ihnen ein einfaches Supportanfrageformular zur Verfügung und möchten, dass Sie einige Validierungsfunktionen hinzufügen:

1. Machen Sie alle Eingabefelder obligatorisch, bevor das Formular abgeschickt werden kann.
2. Ändern Sie den Typ der Felder "Email address" und "Phone number", damit der Browser eine spezifischere Validierung für die geforderten Daten anwendet.
3. Geben Sie dem Feld "User name" eine erforderliche Länge von 5 bis 20 Zeichen, dem Feld "Phone number" eine maximale Länge von 15 Zeichen und dem Feld "Comment" eine maximale Länge von 200 Zeichen.

Versuchen Sie, Ihr Formular abzusenden — es sollte die Absendung verweigern, bis die oben genannten Bedingungen erfüllt sind, und geeignete Fehlermeldungen anzeigen. Zur Unterstützung könnten Sie erwägen, einfaches CSS hinzuzufügen, um anzuzeigen, wann ein Formularfeld gültig oder ungültig ist.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Formularvalidierung 2

Nun möchten wir, dass Sie das gleiche Formular aus der vorherigen Aufgabe verwenden (verwenden Sie Ihre vorherige Antwort, wenn Sie möchten) und einige spezifische Musterüberprüfungen für die ersten drei Felder mithilfe von regulären Ausdrücken hinzufügen.

1. Alle Benutzernamen in unserer Anwendung bestehen aus einem einzelnen Buchstaben, gefolgt von einem Punkt, gefolgt von drei oder mehr Buchstaben oder Zahlen. Alle Buchstaben sollten klein geschrieben sein.
2. Alle E-Mail-Adressen unserer Benutzer bestehen aus einem oder mehreren Buchstaben (klein oder groß) oder Zahlen, gefolgt von "@bigcorp.eu".
3. Entfernen Sie die Längenvalidierung vom Telefonnummernfeld, falls vorhanden, und setzen Sie es so, dass es 10 Ziffern akzeptiert — entweder 10 Ziffern in einer Reihe oder ein Muster von drei Ziffern, drei Ziffern und dann vier Ziffern, getrennt durch Leerzeichen, Bindestriche oder Punkte.

> [!NOTE]
> Reguläre Ausdrücke sind wirklich herausfordernd, wenn Sie neu darin sind, aber verzweifeln Sie nicht — probieren Sie es aus und schauen Sie, wie weit Sie kommen; es ist keine Schande, um Hilfe zu bitten. Alles, was Sie benötigen, um diese Fragen zu beantworten, finden Sie in unserem [RegEx-Referenz](/de/docs/Web/JavaScript/Guide/Regular_expressions) und durch die Suche auf [Stack Overflow](https://stackoverflow.com/).

Auch hier könnten Sie erwägen, einfaches CSS hinzuzufügen, um anzuzeigen, wann ein Formularfeld gültig oder ungültig ist.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Formularvalidierung 3

In unserer letzten Aufgabe dieses Sets stellen wir Ihnen ein ähnliches Beispiel wie im begleitenden Artikel vor — ein einfaches Eingabefeld für E-Mail-Adressen. Wir möchten, dass Sie die Constraint Validation API zusammen mit einigen Formularvalidierungsattributen verwenden, um benutzerdefinierte Fehlermeldungen zu programmieren.

1. Machen Sie das Eingabefeld obligatorisch und geben Sie eine Mindestlänge von 10 Zeichen vor.
2. Fügen Sie einen Ereignis-Listener hinzu, der überprüft, ob der eingegebene Wert eine E-Mail-Adresse ist und ob er lang genug ist. Wenn es nicht wie eine E-Mail-Adresse aussieht oder zu kurz ist, geben Sie dem Benutzer passende benutzerdefinierte Fehlermeldungen.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

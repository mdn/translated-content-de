---
title: "Testen Sie Ihre Fähigkeiten: Formularvalidierung"
short-title: Form validation
slug: Learn_web_development/Extensions/Forms/Test_your_skills/Form_validation
l10n:
  sourceCommit: 93f54b6e1fdfef1375233abb265f101bd6866f99
---

Ziel dieses Fähigkeitstests ist es, zu prüfen, ob Sie unseren Artikel zur [Client-seitigen Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Formularvalidierung 1

In dieser Aufgabe stellen wir Ihnen ein einfaches Support-Anfrageformular zur Verfügung, und wir möchten, dass Sie einige Validierungsfunktionen hinzufügen:

1. Machen Sie alle Eingabefelder obligatorisch, bevor das Formular eingereicht werden kann.
2. Ändern Sie den Typ der Felder "E-Mail-Adresse" und "Telefonnummer", sodass der Browser eine spezifischere Validierung für die angeforderten Daten durchführt.
3. Geben Sie dem Feld "Benutzername" eine erforderliche Länge von 5 bis 20 Zeichen, dem Feld "Telefonnummer" eine maximale Länge von 15 Zeichen und dem Feld "Kommentar" eine maximale Länge von 200 Zeichen.

Versuchen Sie, Ihr Formular abzusenden — es sollte die Einsendung verweigern, bis die oben genannten Einschränkungen erfüllt sind, und geeignete Fehlermeldungen anzeigen. Zur Unterstützung könnten Sie in Betracht ziehen, ein einfaches CSS hinzuzufügen, um anzuzeigen, wann ein Formularfeld gültig oder ungültig ist.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Formularvalidierung 2

Nun möchten wir, dass Sie das gleiche Formular aus der vorherigen Aufgabe nehmen (verwenden Sie Ihre vorherige Antwort, wenn Sie möchten) und der ersten drei Felder eine spezifischere Muster-Validierung mittels regulärer Ausdrücke hinzufügen.

1. Alle Benutzernamen in unserer Anwendung bestehen aus einem einzelnen Buchstaben, gefolgt von einem Punkt, gefolgt von drei oder mehr Buchstaben oder Zahlen. Alle Buchstaben sollten klein sein.
2. Alle E-Mail-Adressen unserer Benutzer bestehen aus einem oder mehreren Buchstaben (groß oder klein) oder Zahlen, gefolgt von "@bigcorp.eu".
3. Entfernen Sie die Längenvalidierung aus dem Feld für die Telefonnummer, falls vorhanden, und stellen Sie es so ein, dass es 10 Ziffern akzeptiert — entweder 10 Ziffern in einer Reihe, oder ein Muster von drei Ziffern, dann drei andere Ziffern, dann vier Ziffern, getrennt durch entweder Leerzeichen, Bindestriche oder Punkte.

> [!NOTE]
> Reguläre Ausdrücke sind wirklich herausfordernd, wenn Sie neu darin sind, aber verzweifeln Sie nicht — versuchen Sie es und sehen Sie, wie weit Sie kommen; es ist keine Schande, um Hilfe zu bitten. Alles, was Sie brauchen, um diese Fragen zu beantworten, finden Sie in unserem [Referenz für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) und durch die Suche auf [Stack Overflow](https://stackoverflow.com/).

Auch hier könnten Sie in Betracht ziehen, ein einfaches CSS hinzuzufügen, um anzuzeigen, wann ein Formularfeld gültig oder ungültig ist.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Formularvalidierung 3

In unserer letzten Aufgabe für dieses Set stellen wir Ihnen ein ähnliches Beispiel zu dem, was Sie im begleitenden Artikel gesehen haben, zur Verfügung — ein Eingabefeld für E-Mail-Adressen. Wir möchten, dass Sie die Constraint Validation API sowie einige Formularvalidierungsattribute verwenden, um benutzerdefinierte Fehlermeldungen zu programmieren.

1. Machen Sie die Eingabe verpflichtend auszufüllen und geben Sie ihr eine Mindestlänge von 10 Zeichen.
2. Fügen Sie einen Eventlistener hinzu, der überprüft, ob der eingegebene Wert eine E-Mail-Adresse ist und ob er lang genug ist. Wenn er nicht wie eine E-Mail-Adresse aussieht oder zu kurz ist, geben Sie dem Benutzer entsprechende benutzerdefinierte Fehlermeldungen aus.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

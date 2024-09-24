---
title: "Testen Sie Ihre Fähigkeiten: Formularüberprüfung"
slug: Learn/Forms/Test_your_skills:_Form_validation
l10n:
  sourceCommit: b76266228bd0900aa1256902c7858971156a58c9
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitstests ist es, zu bewerten, ob Sie unseren Artikel über die [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie stecken bleiben, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Formularüberprüfung 1

In dieser Aufgabe stellen wir Ihnen ein einfaches Support-Anfrageformular zur Verfügung, und wir möchten, dass Sie einige Validierungsfunktionen hinzufügen:

1. Machen Sie alle Eingabefelder verpflichtend auszufüllen, bevor das Formular abgesendet werden kann.
2. Ändern Sie den Typ der Felder "Email address" und "Phone number", um den Browser dazu zu bringen, spezifische Validierungen anzuwenden, die für die geforderten Daten geeignet sind.
3. Geben Sie dem Feld "User name" eine erforderliche Länge von 5 bis 20 Zeichen, dem Feld "Phone number" eine maximale Länge von 15 Zeichen und dem Feld "Comment" eine maximale Länge von 200 Zeichen.

Versuchen Sie, Ihr Formular abzuschicken - es sollte sich weigern, gesendet zu werden, bis die oben genannten Einschränkungen eingehalten werden und geeignete Fehlermeldungen angezeigt werden. Um Ihnen zu helfen, sollten Sie erwägen, etwas einfaches CSS hinzuzufügen, um zu zeigen, wann ein Formularfeld gültig oder ungültig ist.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor daran zu arbeiten.

## Formularüberprüfung 2

Jetzt möchten wir, dass Sie dasselbe Formular, das Sie in der vorherigen Aufgabe gesehen haben (verwenden Sie Ihre vorherige Antwort, wenn Sie möchten), nehmen und etwas spezifischere Musterüberprüfungen für die ersten drei Felder mit regulären Ausdrücken hinzufügen.

1. Alle Benutzernamen in unserer Anwendung bestehen aus einem einzigen Buchstaben, gefolgt von einem Punkt, gefolgt von drei oder mehr Buchstaben oder Zahlen. Alle Buchstaben sollten klein geschrieben sein.
2. Alle E-Mail-Adressen unserer Benutzer bestehen aus einem oder mehreren Buchstaben (groß oder klein) oder Zahlen, gefolgt von "@bigcorp.eu".
3. Entfernen Sie die Längenvalidierung aus dem Telefonfeld, falls vorhanden, und stellen Sie es so ein, dass es 10 Ziffern akzeptiert — entweder 10 Ziffern in einer Reihe oder ein Muster aus drei Ziffern, drei Ziffern, dann vier Ziffern, getrennt durch Leerzeichen, Bindestriche oder Punkte.

> [!NOTE]
> Reguläre Ausdrücke sind wirklich herausfordernd, wenn Sie neu damit sind, aber verzweifeln Sie nicht — probieren Sie es aus und sehen Sie, wie weit Sie kommen; es ist keine Schande, um Hilfe zu bitten. Sie finden alles, was Sie brauchen, um diese Fragen zu beantworten, in unserem [Referenzführer für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) und durch Suchen auf [Stack Overflow](https://stackoverflow.com/).

Auch hier sollten Sie erwägen, etwas einfaches CSS hinzuzufügen, um zu zeigen, wann ein Formularfeld gültig oder ungültig ist.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor daran zu arbeiten.

## Formularüberprüfung 3

In unserer letzten Aufgabe für dieses Set bieten wir Ihnen ein ähnliches Beispiel wie das im begleitenden Artikel — ein einfaches Eingabefeld für die E-Mail-Adresse. Wir möchten, dass Sie die Constraints-Validierungs-API sowie einige Formularvalidierungsattribute verwenden, um benutzerdefinierte Fehlermeldungen zu programmieren.

1. Machen Sie die Eingabe verpflichtend auszufüllen und geben Sie ihr eine Mindestlänge von 10 Zeichen.
2. Fügen Sie einen Ereignislistener hinzu, der überprüft, ob der eingegebene Wert eine E-Mail-Adresse ist und ob er lang genug ist. Wenn es nicht wie eine E-Mail-Adresse aussieht oder zu kurz ist, geben Sie dem Benutzer entsprechende benutzerdefinierte Fehlermeldungen.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor daran zu arbeiten.

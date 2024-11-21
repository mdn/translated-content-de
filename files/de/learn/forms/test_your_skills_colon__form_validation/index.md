---
title: "Testen Sie Ihre Fähigkeiten: Formularvalidierung"
slug: Learn/Forms/Test_your_skills:_Form_validation
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitstests ist es zu überprüfen, ob Sie unseren Artikel zur [Client-seitigen Formularvalidierung](/de/docs/Learn/Forms/Form_validation) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite ausprobieren oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/).
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Formularvalidierung 1

In dieser Aufgabe stellen wir Ihnen ein einfaches Support-Anfrageformular zur Verfügung und möchten, dass Sie einige Validierungsfunktionen hinzufügen:

1. Machen Sie alle Eingabefelder obligatorisch, damit das Formular abgeschickt werden kann.
2. Ändern Sie den Typ der Felder "Email address" und "Phone number", damit der Browser eine spezifischere Validierung, die für die abgefragten Daten geeignet ist, anwendet.
3. Geben Sie dem Feld "User name" eine erforderliche Länge von 5 bis 20 Zeichen, dem Feld "Phone number" eine maximale Länge von 15 Zeichen, und dem Feld "Comment" eine maximale Länge von 200 Zeichen.

Versuchen Sie, Ihr Formular zu übermitteln — es sollte die Übermittlung verweigern, bis die oben genannten Einschränkungen erfüllt sind, und geeignete Fehlermeldungen anzeigen. Zur Unterstützung könnten Sie erwägen, einfaches CSS hinzuzufügen, um anzuzeigen, wann ein Formularfeld gültig oder ungültig ist.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Formularvalidierung 2

Jetzt möchten wir, dass Sie dasselbe Formular wie in der vorherigen Aufgabe verwenden (verwenden Sie gerne Ihre vorherige Antwort), und fügen Sie eine spezifischere Musterüberprüfung für die ersten drei Felder mithilfe von regulären Ausdrücken hinzu.

1. Alle Benutzernamen in unserer Anwendung bestehen aus einem einzelnen Buchstaben, gefolgt von einem Punkt und dann drei oder mehr Buchstaben oder Zahlen. Alle Buchstaben sollten klein geschrieben sein.
2. Alle E-Mail-Adressen unserer Benutzer bestehen aus einem oder mehreren Buchstaben (in Groß- oder Kleinschreibung) oder Zahlen, gefolgt von "@bigcorp.eu".
3. Entfernen Sie die Längenvalidierung aus dem Telefonnummernfeld, falls vorhanden, und legen Sie fest, dass es 10 Ziffern akzeptiert — entweder 10 Ziffern in einer Reihe oder ein Muster von drei Ziffern, drei Ziffern, dann vier Ziffern, getrennt durch Leerzeichen, Bindestriche oder Punkte.

> [!NOTE]
> Reguläre Ausdrücke sind wirklich herausfordernd, wenn Sie neu darin sind, aber verzweifeln Sie nicht — versuchen Sie es und sehen Sie, wo Sie landen; es ist keine Schande, um Hilfe zu bitten. Sie finden alles, was Sie brauchen, um diese Fragen zu beantworten, in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions), und durch die Suche auf [Stack Overflow](https://stackoverflow.com/).

Auch hier könnten Sie in Betracht ziehen, einfaches CSS hinzuzufügen, um anzuzeigen, wann ein Formularfeld gültig oder ungültig ist.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Formularvalidierung 3

In unserer letzten Aufgabe für dieses Set stellen wir Ihnen ein ähnliches Beispiel wie im begleitenden Artikel vor — ein Eingabefeld für die E-Mail-Adressen-Eingabe. Wir möchten, dass Sie die API zur Einschränkungsvalidierung und einige Formularvalidierungsattribute verwenden, um benutzerdefinierte Fehlermeldungen zu programmieren.

1. Machen Sie die Eingabe verpflichtend auszufüllen und geben Sie ihr eine Mindestlänge von 10 Zeichen.
2. Fügen Sie einen Event-Listener hinzu, der überprüft, ob der eingegebene Wert eine E-Mail-Adresse ist und ob er lang genug ist. Wenn er nicht wie eine E-Mail-Adresse aussieht oder zu kurz ist, geben Sie dem Benutzer entsprechende benutzerdefinierte Fehlermeldungen.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/form-validation/form-validation3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

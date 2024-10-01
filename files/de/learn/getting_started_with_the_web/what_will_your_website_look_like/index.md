---
title: Wie wird Ihre Website aussehen?
slug: Learn/Getting_started_with_the_web/What_will_your_website_look_like
l10n:
  sourceCommit: a966a8b4eade72a13de8a688c13f2d5056321f02
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/Installing_basic_software", "Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web")}}

_Wie wird Ihre Website aussehen?_ behandelt die Planung und Gestaltung, die Sie für Ihre Website vornehmen müssen, bevor Sie mit dem Programmieren beginnen, einschließlich „Welche Informationen bietet meine Website?“, „Welche Schriftarten und Farben möchte ich?“ und „Was macht meine Website?“

## Zuerst das Wichtigste: Planung

Bevor Sie irgendetwas tun, brauchen Sie ein paar Ideen. Was sollte Ihre Website eigentlich tun? Eine Website kann im Grunde genommen alles machen, aber für den Anfang sollten Sie es einfach halten. Wir beginnen mit dem Erstellen einer einfachen Webseite mit einer Überschrift, einem Bild und ein paar Absätzen.

Zu Beginn sollten Sie diese Fragen beantworten:

1. **Worum geht es auf Ihrer Website?** Mögen Sie Hunde, New York oder Pac-Man?
2. **Welche Informationen präsentieren Sie zu diesem Thema?** Schreiben Sie einen Titel und ein paar Absätze und überlegen Sie sich ein Bild, das Sie auf Ihrer Seite zeigen möchten.
3. **Wie sieht Ihre Website aus,** in einfachen, übergeordneten Begriffen? Was ist die Hintergrundfarbe? Welche Art von Schriftart ist geeignet: formell, cartoonartig, fett und laut, subtil?

> [!NOTE]
> Komplexe Projekte benötigen detaillierte Richtlinien, die alle Details zu Farben, Schriftarten, Abständen zwischen Elementen auf einer Seite, angemessenem Schreibstil usw. umfassen. Dies wird manchmal als Design-Leitfaden, Design-System oder Markenbuch bezeichnet, und Sie können ein Beispiel im [Firefox Acorn Design System](https://acorn.firefox.com/latest) ansehen.

## Entwerfen Ihres Designs

Nehmen Sie nun Stift und Papier und skizzieren Sie grob, wie Ihre Website aussehen soll. Für Ihre erste einfache Webseite gibt es nicht viel zu skizzieren, aber Sie sollten sich jetzt angewöhnen, dies zu tun. Es hilft wirklich – Sie müssen kein Van Gogh sein!

![Eine grobe Zeichnung und Skizze einer Website auf Papier](website-drawing-scan.png)

> [!NOTE]
> Sogar bei echten, komplexen Websites beginnen die Designteams normalerweise mit groben Skizzen auf Papier und erstellen später digitale Entwürfe mit einem Grafikeditor oder Webtechnologien.
>
> Webteams bestehen oft sowohl aus einem Grafikdesigner als auch einem {{Glossary("UX", "UX (User Experience)")}} Designer. Grafikdesigner erstellen die visuellen Elemente der Website. UX-Designer haben eine etwas abstraktere Rolle, indem sie sich damit beschäftigen, wie Benutzer die Website erleben und mit ihr interagieren werden.

## Auswahl Ihrer Inhalte

An diesem Punkt ist es gut, den Inhalt zusammenzustellen, der später auf Ihrer Webseite erscheinen wird.

### Text

Sie sollten noch Ihre Absätze und den Titel von früher haben. Halten Sie diese in der Nähe.

### Thema-Farbe

Um eine Farbe auszuwählen, gehen Sie zum [Farbwähler](/de/docs/Web/CSS/CSS_colors/Color_picker_tool) und finden Sie eine Farbe, die Ihnen gefällt. Wenn Sie auf eine Farbe klicken, sehen Sie einen seltsamen sechsstelligen Code wie `#660066`. Dies wird _Hex-Code_ genannt (kurz für hexadezimal) und repräsentiert Ihre Farbe. Notieren Sie den Code irgendwo sicher für jetzt.

![Farbwähler-Tool auf der MDN-Dokumentationswebsite mit RGB-, HSL- und HEX-Farben](color-picker.png)

### Bilder

Um ein Bild auszuwählen, gehen Sie zu [Google Bilder](https://www.google.com/imghp) und suchen Sie nach etwas Passendem.

1. Wenn Sie das gewünschte Bild gefunden haben, klicken Sie auf das Bild, um eine vergrößerte Ansicht davon zu erhalten.
2. Rechtsklicken Sie auf das Bild (Strg + Klick auf einem Mac), wählen Sie _Bild speichern unter..._ und wählen Sie einen sicheren Ort, um Ihr Bild zu speichern. Alternativ können Sie die Webadresse des Bildes aus der Adressleiste Ihres Browsers kopieren, um sie später zu verwenden.

![Suchergebnisse für einen Suchbegriff auf Google Bilder](updated-google-images.png)

Beachten Sie, dass die meisten Bilder im Web, einschließlich Google Bilder, urheberrechtlich geschützt sind. Um die Wahrscheinlichkeit von Urheberrechtsverletzungen zu verringern, können Sie den Lizenzfilter von Google verwenden. Klicken Sie auf die Schaltfläche _Tools_ und dann auf die entstehende Option _Nutzungsrechte_, die unten erscheint. Sie sollten die Option _Creative Commons-Lizenzen_ wählen.

![Gefilterte Suchergebnisse, um Bilder von Creative Commons-Lizenzen auf Google Bilder zu erhalten](updated-google-images-licensing.png)

### Schriftart

Wie bei Bildern sind viele Schriftarten durch Lizenzen geschützt, was bedeutet, dass Sie sie nicht frei auf Ihrer Website verwenden können. [Google Fonts](https://developers.google.com/fonts) ist ein Webdienst von Google, der den Zugriff auf viele Schriftarten bietet.

Sobald Sie eine Schriftart gefunden haben, gibt es zwei Hauptmethoden, um sie zu verwenden:

1. Fügen Sie eine Referenz in Ihren Code ein, um die Schriftart von den Google-Servern zu laden.
2. Laden Sie die Schriftdatei auf Ihr eigenes System herunter, hosten Sie die Schrift selbst und verwenden Sie Ihre gehostete Kopie im Code Ihrer Website.

> [!NOTE]
> Das Bereitstellen von Schriftarten, die auf Google Fonts gehostet werden, kann mit der Datenschutzverordnung der Europäischen Union [DSGVO](https://gdpr.eu/) nicht kompatibel sein, da der Schriftartenservice die IP-Adresse des Benutzers offenlegt. Wenn dies ein potenzielles Problem für Sie darstellt, wählen Sie entweder die zweite Option oder einen Schriftanbieter, der DSGVO-konform ist, wie etwa [Bunny Fonts](https://fonts.bunny.net/about).

Alternativ können Sie [sichere Web-Schriftarten](https://web.mit.edu/jmorzins/www/fonts.html) wie Arial, Times New Roman oder Courier New verwenden.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/Installing_basic_software", "Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web")}}

---
title: Wie wird Ihre Website aussehen?
slug: Learn/Getting_started_with_the_web/What_will_your_website_look_like
l10n:
  sourceCommit: a966a8b4eade72a13de8a688c13f2d5056321f02
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/Installing_basic_software", "Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web")}}

_Wie wird Ihre Website aussehen?_ bespricht die Planungs- und Gestaltungsarbeiten, die Sie für Ihre Website durchführen müssen, bevor Sie mit dem Codieren beginnen. Dazu gehören Fragen wie "Welche Informationen bietet meine Website?", "Welche Schriftarten und Farben möchte ich verwenden?" und "Welche Funktionen bietet meine Seite?"

## Zuerst die Planung

Bevor Sie irgendetwas tun, brauchen Sie einige Ideen. Was sollte Ihre Website eigentlich tun? Eine Website kann grundsätzlich alles machen, aber für den ersten Versuch sollten Sie es einfach halten. Wir beginnen mit der Erstellung einer einfachen Webseite mit einer Überschrift, einem Bild und ein paar Absätzen.

Um loszulegen, müssen Sie diese Fragen beantworten:

1. **Worum geht es auf Ihrer Website?** Mögen Sie Hunde, New York oder Pac-Man?
2. **Welche Informationen präsentieren Sie zu diesem Thema?** Schreiben Sie einen Titel und ein paar Absätze und überlegen Sie sich ein Bild, das Sie auf Ihrer Seite zeigen möchten.
3. **Wie sieht Ihre Website aus,** in einfachen, allgemeinen Begriffen? Welche Hintergrundfarbe hat sie? Welche Art von Schrift ist angemessen: formell, cartoonhaft, fett und laut, subtil?

> [!NOTE]
> Komplexe Projekte benötigen detaillierte Richtlinien, die alle Details von Farben, Schriftarten, Abständen zwischen den Elementen auf einer Seite, geeigneten Schreibstilen usw. abdecken. Dies wird manchmal als Design-Leitfaden, Design-System oder Markenbuch bezeichnet, und Sie können ein Beispiel im [Firefox Acorn Design System](https://acorn.firefox.com/latest) sehen.

## Skizzieren Ihres Designs

Nehmen Sie als nächstes Stift und Papier und skizzieren Sie grob, wie Ihre Seite aussehen soll. Für Ihre erste einfache Webseite gibt es nicht viel zu skizzieren, aber Sie sollten sich jetzt angewöhnen, dies zu tun. Es hilft wirklich – Sie müssen kein Van Gogh sein!

![Eine grobe Zeichnung und Skizze einer Website auf Papier](website-drawing-scan.png)

> [!NOTE]
> Selbst bei echten, komplexen Websites beginnen die Designteams in der Regel mit groben Skizzen auf Papier und bauen später digitale Mockups mit einem Grafikeditor oder Webtechnologien.
>
> Web-Teams umfassen oft sowohl einen Grafikdesigner als auch einen [User Experience](/de/docs/Glossary/UX) (UX) Designer. Grafikdesigner gestalten das visuelle Erscheinungsbild der Website. UX-Designer haben eine etwas abstraktere Rolle bei der Betrachtung, wie Nutzer die Website erleben und damit interagieren werden.

## Auswahl Ihrer Ressourcen

An diesem Punkt ist es gut, mit der Zusammenstellung der Inhalte zu beginnen, die letztendlich auf Ihrer Webseite erscheinen werden.

### Text

Sie sollten noch Ihre Absätze und den Titel von früher haben. Halten Sie diese griffbereit.

### Farbthema

Um eine Farbe auszuwählen, gehen Sie zum [Color Picker](/de/docs/Web/CSS/CSS_colors/Color_picker_tool) und finden eine Farbe, die Ihnen gefällt. Wenn Sie auf eine Farbe klicken, sehen Sie einen seltsamen sechsstelligen Code wie `#660066`. Das wird als _Hex-Code_ bezeichnet (kurz für hexadezimal) und repräsentiert Ihre Farbe. Kopieren Sie den Code an einen sicheren Ort.

![Color-Picker-Tool auf der MDN Docs-Website mit RGB-, HSL- und HEX-Farben](color-picker.png)

### Bilder

Um ein Bild auszuwählen, gehen Sie zu [Google Images](https://www.google.com/imghp) und suchen nach etwas Passendem.

1. Wenn Sie das gewünschte Bild gefunden haben, klicken Sie auf das Bild, um eine vergrößerte Ansicht zu erhalten.
2. Rechtsklicken Sie das Bild (Strg + Klick auf einem Mac), wählen Sie _Bild speichern unter..._ und wählen Sie einen sicheren Ort zum Speichern Ihres Bildes. Alternativ können Sie die Webadresse des Bildes aus der Adressleiste Ihres Browsers für später kopieren.

![Suchergebnisse für einen Suchbegriff in Google Images](updated-google-images.png)

Beachten Sie, dass die meisten Bilder im Internet, einschließlich Google Images, urheberrechtlich geschützt sind. Um die Wahrscheinlichkeit einer Urheberrechtsverletzung zu reduzieren, können Sie den Lizenzfilter von Google verwenden. Klicken Sie auf die Schaltfläche _Tools_ und dann auf die erscheinende Option _Nutzungsrechte_. Sie sollten die Option _Creative Commons-Lizenzen_ wählen.

![Gefilterte Suchergebnisse, um Bilder mit Creative Commons-Lizenzen in Google Images zu erhalten](updated-google-images-licensing.png)

### Schriftarten

Wie bei Bildern sind viele Schriftarten durch Lizenzen geschützt, was bedeutet, dass Sie sie nicht frei auf Ihrer Seite verwenden können. [Google Fonts](https://developers.google.com/fonts) ist ein Webdienst von Google, der Zugriff auf viele Schriftarten bietet.

Sobald Sie eine Schrift gefunden haben, gibt es zwei Hauptmethoden, sie zu verwenden:

1. Fügen Sie einen Verweis in Ihrem Code hinzu, um die Schrift von Googles Servern zu laden.
2. Laden Sie die Schriftdatei auf Ihr eigenes System herunter, hosten Sie die Schrift selbst und verwenden Sie Ihre gehostete Kopie im Code Ihrer Website.

> [!NOTE]
> Das Bereitstellen von Schriften, die auf Google Fonts gehostet werden, kann mit der Datenschutzverordnung der Europäischen Union [GDPR](https://gdpr.eu/) unvereinbar sein, da der Schriftdienst die IP-Adresse des Nutzers offenlegt. Wenn dies ein potenzielles Problem für Sie ist, wählen Sie entweder die zweite Option oder einen Schriftanbieter, der GDPR-konform ist, wie [Bunny Fonts](https://fonts.bunny.net/about).

Alternativ können Sie [sichere Web-Schriften](https://web.mit.edu/jmorzins/www/fonts.html) wie Arial, Times New Roman oder Courier New verwenden.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/Installing_basic_software", "Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web")}}

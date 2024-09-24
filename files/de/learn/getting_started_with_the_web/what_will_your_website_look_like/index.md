---
title: Wie wird Ihre Website aussehen?
slug: Learn/Getting_started_with_the_web/What_will_your_website_look_like
l10n:
  sourceCommit: 14f7331883bfa16ca5c0e3cd3b19d412e1b412fd
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/Installing_basic_software", "Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web")}}

_Wie wird Ihre Website aussehen?_ behandelt die Planungs- und Designarbeit, die Sie für Ihre Website erledigen müssen, bevor Sie mit dem Codieren beginnen, einschließlich "Welche Informationen bietet meine Website?", "Welche Schriftarten und Farben möchte ich?" und "Was macht meine Seite?"

## Zunächst: Planung

Bevor Sie irgendetwas tun, brauchen Sie einige Ideen. Was soll Ihre Website eigentlich tun? Eine Website kann grundsätzlich alles Mögliche tun, aber für den Anfang sollten Sie es einfach halten. Wir werden mit der Erstellung einer einfachen Webseite beginnen, die eine Überschrift, ein Bild und ein paar Absätze enthält.

Dazu müssen Sie diese Fragen beantworten:

1. **Worum geht es auf Ihrer Website?** Mögen Sie Hunde, New York oder Pac-Man?
2. **Welche Informationen präsentieren Sie zu diesem Thema?** Schreiben Sie einen Titel und ein paar Absätze und überlegen Sie sich ein Bild, das Sie auf Ihrer Seite zeigen möchten.
3. **Wie sieht Ihre Website aus,** in einfachen, allgemeinen Begriffen? Wie ist die Hintergrundfarbe? Welche Art von Schriftart ist geeignet: formell, cartoonhaft, fett und laut, subtil?

> [!NOTE]
> Komplexe Projekte benötigen detaillierte Richtlinien, die alle Details zu Farben, Schriftarten, Abständen zwischen Elementen auf einer Seite, geeignetem Schreibstil usw. umfassen. Dies wird manchmal als Designrichtlinie, Designsystem oder Markenhandbuch bezeichnet, und Sie können ein Beispiel im [Firefox Acorn Design System](https://acorn.firefox.com/latest/) sehen.

## Ihren Entwurf skizzieren

Nehmen Sie sich als nächstes Stift und Papier und skizzieren Sie grob, wie Ihre Seite aussehen soll. Für Ihre erste einfache Webseite gibt es nicht viel zu skizzieren, aber Sie sollten sich angewöhnen, dies jetzt zu tun. Es hilft wirklich — Sie müssen nicht wie Van Gogh sein!

![Eine grobe Zeichnung und Skizze einer Website auf Papier](website-drawing-scan.png)

> [!NOTE]
> Selbst bei echten, komplexen Websites beginnen die Designteams normalerweise mit groben Skizzen auf Papier und erstellen später digitale Entwürfe mit einem Grafikeditor oder Webtechnologien.
>
> Webteams beinhalten oft sowohl einen Grafikdesigner als auch einen {{Glossary("UX", "User Experience")}} (UX) Designer. Grafikdesigner erstellen die visuellen Aspekte der Website. UX-Designer beschäftigen sich in einer eher abstrakten Rolle damit, wie Benutzer die Website erleben und damit interagieren werden.

## Auswahl Ihrer Ressourcen

An diesem Punkt ist es sinnvoll, den Inhalt zusammenzustellen, der später auf Ihrer Webseite erscheint.

### Text

Sie sollten Ihre Absätze und den Titel von früher noch haben. Halten Sie diese griffbereit.

### Themenfarbe

Um eine Farbe auszuwählen, gehen Sie zum [Farbwähler](/de/docs/Web/CSS/CSS_colors/Color_picker_tool) und finden Sie eine Farbe, die Ihnen gefällt. Wenn Sie auf eine Farbe klicken, sehen Sie einen seltsamen sechsstelligen Code wie `#660066`. Das wird als _Hex-Code_ (kurz für hexadezimal) bezeichnet und repräsentiert Ihre Farbe. Notieren Sie den Code an einem sicheren Ort.

![Farbwähler-Tool auf der MDN Docs Webseite mit RGB-, HSL- und HEX-Farben](color-picker.png)

### Bilder

Um ein Bild auszuwählen, gehen Sie zu [Google Bilder](https://www.google.com/imghp) und suchen Sie nach etwas Passendem.

1. Wenn Sie das gewünschte Bild gefunden haben, klicken Sie darauf, um eine vergrößerte Ansicht zu erhalten.
2. Rechtsklicken Sie auf das Bild (Strg + Klick auf einem Mac), wählen Sie _Bild speichern unter..._ und wählen Sie einen sicheren Ort zum Speichern Ihres Bildes. Alternativ können Sie die Webadresse des Bildes aus der Adressleiste Ihres Browsers für eine spätere Verwendung kopieren.

![Suchergebnisse für einen Suchbegriff in Google Bilder](updated-google-images.png)

Beachten Sie, dass die meisten Bilder im Internet, auch in Google Bilder, urheberrechtlich geschützt sind. Um das Risiko einer Urheberrechtsverletzung zu verringern, können Sie den Lizenzfilter von Google verwenden. Klicken Sie auf den _Tools_ Button und dann auf die erscheinende Option _Nutzungsrechte_. Sie sollten die Option _Creative Commons-Lizenzen_ wählen.

![Gefilterte Suchergebnisse, um Bilder mit Creative Commons-Lizenzen in Google Bilder zu erhalten](updated-google-images-licensing.png)

### Schriftart

Wie bei Bildern sind viele Schriftarten durch Lizenzen geschützt, was bedeutet, dass Sie sie nicht frei auf Ihrer Webseite verwenden können. [Google Fonts](https://developers.google.com/fonts) ist ein Webdienst von Google, der Zugriff auf viele Schriftarten bietet.

Sobald Sie eine Schriftart gefunden haben, gibt es zwei Hauptwege, sie zu verwenden:

1. Fügen Sie eine Referenz in Ihrem Code hinzu, um die Schriftart von Googles Servern zu laden.
2. Laden Sie die Schriftart-Datei auf Ihr eigenes System herunter, hosten Sie die Schriftart selbst und verwenden Sie Ihre gehostete Kopie im Code Ihrer Website.

> [!NOTE]
> Das Bereitstellen von Schriftarten, die auf Google Fonts gehostet werden, ist möglicherweise nicht mit der Datenschutzverordnung der Europäischen Union [DSGVO](https://gdpr.eu/what-is-gdpr/) vereinbar, da der Schriftartdienst die IP-Adresse des Nutzers offenbart. Wenn dies ein potenzielles Problem für Sie darstellt, wählen Sie entweder die zweite Option oder einen Schriftartanbieter, der DSGVO-konform ist, wie zum Beispiel [Bunny Fonts](https://fonts.bunny.net/about).

Alternativ können Sie [sichere Webschriftarten](https://web.mit.edu/jmorzins/www/fonts.html) wie Arial, Times New Roman oder Courier New verwenden.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/Installing_basic_software", "Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web")}}

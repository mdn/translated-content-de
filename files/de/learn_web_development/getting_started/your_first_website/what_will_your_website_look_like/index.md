---
title: Wie wird Ihre Website aussehen?
short-title: Wie wird sie aussehen?
slug: Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

_Wie wird Ihre Website aussehen?_ behandelt die Planungs- und Gestaltungsarbeit, die Sie für Ihre Website erledigen müssen, bevor Sie mit dem Programmieren beginnen. Dazu gehören Fragen wie "Welche Informationen bietet meine Website?", "Welche Schriftarten und Farben möchte ich verwenden?" und "Welche Funktionen soll meine Website haben?"

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computerbetriebssystem, der grundlegenden Software, die Sie für den Bau einer Website verwenden werden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Planung einer einfachen Website.</li>
          <li>Verwendung eines grundlegenden Designprozesses.</li>
          <li>Sammeln von Ressourcen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zuerst die Planung

Bevor Sie irgendetwas tun, brauchen Sie einige Ideen. Was soll Ihre Website tatsächlich tun? Eine Website kann grundsätzlich alles tun, aber für den ersten Versuch sollten Sie die Dinge einfach halten. Wir beginnen mit der Erstellung einer einfachen Webseite mit einer Überschrift, einem Bild und einigen Absätzen.

Um zu beginnen, müssen Sie diese Fragen beantworten:

1. **Worum geht es auf Ihrer Website?** Mögen Sie Hunde, New York oder Pac-Man?
2. **Welche Informationen präsentieren Sie zu diesem Thema?** Schreiben Sie einen Titel und ein paar Absätze und überlegen Sie, welches Bild Sie auf Ihrer Seite zeigen möchten.
3. **Wie sieht Ihre Website aus,** in einfachen, übergeordneten Begriffen? Wie sieht die Hintergrundfarbe aus? Welche Art von Schriftart ist geeignet: formell, cartoonartig, fett und laut, dezent?

> [!NOTE]
> Komplexe Projekte benötigen detaillierte Richtlinien, die alle Details zu Farben, Schriftarten, Abständen zwischen Elementen auf einer Seite, geeigneten Schreibstilen usw. umfassen. Dies wird manchmal als Design-Leitfaden, Design-System oder Markenbuch bezeichnet, und ein Beispiel dafür finden Sie im [Firefox Acorn Design System](https://acorn.firefox.com/latest).

## Entwurf Ihres Designs

Nehmen Sie nun Stift und Papier und zeichnen Sie grob, wie Ihre Website aussehen soll. Für Ihre erste einfache Webseite gibt es nicht viel zu skizzieren, aber Sie sollten sich jetzt angewöhnen, dies zu tun. Es hilft wirklich — Sie müssen kein Van Gogh sein!

![Eine grobe Zeichnung und Skizze einer Website auf Papier](website-drawing-scan.png)

> [!NOTE]
> Selbst bei echten, komplexen Websites beginnen die Designteams normalerweise mit groben Skizzen auf Papier und erstellen später digitale Mockups mit einem Grafikeditor oder Webtechnologien.
>
> Webteams umfassen oft sowohl einen Grafikdesigner als auch einen {{Glossary("UX", "User Experience")}} (UX) Designer. Grafikdesigner erstellen die visuellen Elemente der Website. UX-Designer haben eine eher abstrakte Rolle und beschäftigen sich damit, wie Benutzer die Website erleben und mit ihr interagieren werden.

An diesem Punkt ist es gut, den Inhalt zusammenzustellen, der schließlich auf Ihrer Webseite erscheinen wird. Sie sollten immer noch Ihre Absätze und den Titel von früher haben. Halten Sie diese griffbereit.

## Auswahl einer Themenfarbe

Um eine Farbe auszuwählen, gehen Sie zum [Color Picker](/de/docs/Web/CSS/CSS_colors/Color_picker_tool) und finden Sie eine Farbe, die Ihnen gefällt. Wenn Sie auf eine Farbe klicken, sehen Sie einen seltsamen sechsstelligen Code wie `#660066`. Das nennt man einen _Hex-Code_ (kurz für hexadezimal) und er repräsentiert Ihre Farbe. Kopieren Sie den Code und bewahren Sie ihn vorerst sicher auf.

![Farbwähler-Tool auf der MDN-Docs-Website mit RGB-, HSL- und HEX-Farben](color-picker.png)

## Auswahl eines Bildes

Um ein Bild auszuwählen, gehen Sie zu [Google Images](https://www.google.com/imghp) und suchen Sie nach etwas Passendem.

1. Wenn Sie das gewünschte Bild gefunden haben, klicken Sie auf das Bild, um eine vergrößerte Ansicht davon zu erhalten.
2. Klicken Sie mit der rechten Maustaste auf das Bild (Strg + Klick auf einem Mac), wählen Sie _Bild speichern unter…_ und wählen Sie einen sicheren Ort zum Speichern des Bildes.

![Suchergebnisse für einen Suchbegriff bei Google Images](updated-google-images.png)

Beachten Sie, dass die meisten Bilder im Web, einschließlich derer bei Google Images, urheberrechtlich geschützt sind. Um die Wahrscheinlichkeit einer Urheberrechtsverletzung zu verringern, können Sie den Lizenzfilter von Google verwenden. Klicken Sie auf die Schaltfläche _Tools_ und dann auf die Option _Nutzungsrechte_, die darunter erscheint. Sie sollten die Option _Creative Commons-Lizenzen_ wählen.

![Gefilterte Suchergebnisse, um Bilder mit Creative Commons-Lizenzen bei Google Images zu erhalten](updated-google-images-licensing.png)

## Auswahl einer Schriftart

Wie bei Bildern sind viele Schriftarten durch Lizenzen geschützt, was bedeutet, dass Sie sie nicht frei auf Ihrer Website verwenden können. [Google Fonts](https://developers.google.com/fonts) ist ein Webdienst von Google, der Zugriff auf viele Schriftarten bietet.

Sobald Sie eine Schriftart gefunden haben, gibt es zwei Hauptmethoden, sie zu verwenden:

1. Fügen Sie eine Referenz in Ihren Code hinzu, um die Schriftart von den Servern von Google zu laden.
2. Laden Sie die Schriftartdatei auf Ihr eigenes System herunter, hosten Sie die Schriftart selbst und verwenden Sie Ihre gehostete Kopie im Code Ihrer Website.

> [!NOTE]
> Das Hosten von Schriftarten auf Google Fonts kann mit der Datenschutzverordnung der Europäischen Union [GDPR](https://gdpr.eu/) unvereinbar sein, da der Schriftdienst die IP-Adresse des Nutzers offenlegt. Wenn dies ein potenzielles Problem darstellt, wählen Sie entweder die zweite Option oder einen Schriftartenanbieter, der GDPR-konform ist, wie z.B. [Bunny Fonts](https://fonts.bunny.net/about).

Alternativ können Sie [sichere Webschriftarten](https://web.mit.edu/jmorzins/www/fonts.html) wie Arial, Times New Roman oder Courier New verwenden.

{{NextMenu("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

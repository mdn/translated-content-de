---
title: Wie wird Ihre Website aussehen?
short-title: Wie wird sie aussehen?
slug: Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

_Wie wird Ihre Website aussehen?_ befasst sich mit der Planungs- und Gestaltungsarbeit, die Sie für Ihre Website leisten müssen, bevor Sie mit dem Programmieren beginnen. Dazu gehört "Welche Informationen bietet meine Website?", "Welche Schriftarten und Farben möchte ich?", und "Was macht meine Seite?"

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über Ihr Computerbetriebssystem, die grundlegende Software, die Sie zum Erstellen einer Website verwenden, und Dateisysteme.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Planen einer einfachen Website.</li>
          <li>Verwenden eines grundlegenden Designprozesses.</li>
          <li>Sammeln von Materialien.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zuerst einmal: Planung

Bevor Sie etwas tun, brauchen Sie einige Ideen. Was soll Ihre Website eigentlich tun? Eine Website kann im Grunde alles machen, aber für Ihren ersten Versuch sollten Sie die Dinge einfach halten. Wir beginnen mit der Erstellung einer einfachen Webseite mit einer Überschrift, einem Bild und ein paar Absätzen.

Zunächst müssen Sie folgende Fragen beantworten:

1. **Worum geht es auf Ihrer Website?** Mögen Sie Hunde, New York oder Pac-Man?
2. **Welche Informationen präsentieren Sie zu diesem Thema?** Schreiben Sie einen Titel und ein paar Absätze und denken Sie an ein Bild, das Sie auf Ihrer Seite zeigen möchten.
3. **Wie sieht Ihre Website aus,** in einfachen, grundlegenden Begriffen? Was ist die Hintergrundfarbe? Welche Art von Schriftart ist geeignet: formell, cartoonhaft, fett und laut, subtil?

> [!NOTE]
> Komplexe Projekte benötigen detaillierte Richtlinien, die alle Details zu Farben, Schriftarten, Abständen zwischen Elementen auf einer Seite, geeigneten Schreibstilen und so weiter umfassen. Dies wird manchmal als Designleitfaden, Designsystem oder Markenbuch bezeichnet, und Sie können ein Beispiel im [Firefox Acorn Design System](https://acorn.firefox.com/latest) sehen.

## Entwerfen Ihres Designs

Als Nächstes nehmen Sie Stift und Papier und skizzieren grob, wie Ihre Seite aussehen soll. Für Ihre erste einfache Webseite gibt es nicht viel zu skizzieren, aber Sie sollten sich jetzt angewöhnen, dies zu tun. Es hilft wirklich – Sie müssen kein Van Gogh sein!

![Eine grobe Zeichnung und Skizze einer Website auf Papier](website-drawing-scan.png)

> [!NOTE]
> Selbst bei realen, komplexen Websites beginnen die Designteams in der Regel mit groben Skizzen auf Papier und erstellen später digitale Entwürfe mithilfe eines Grafikeditors oder Webtechnologien.
>
> Webteams umfassen oft sowohl einen Grafikdesigner als auch einen {{Glossary("UX", "User Experience")}} (UX)-Designer. Grafikdesigner gestalten das visuelle Erscheinungsbild der Website. UX-Designer haben eine etwas abstraktere Rolle, indem sie sich mit der Benutzererfahrung und der Interaktion mit der Website befassen.

An dieser Stelle ist es gut, die Inhalte zusammenzustellen, die schließlich auf Ihrer Webseite erscheinen werden. Sie sollten Ihre Absätze und den Titel von früher noch griffbereit haben.

## Auswahl einer Farbthematik

Um eine Farbe auszuwählen, gehen Sie zum [Color Picker](/de/docs/Web/CSS/CSS_colors/Color_picker_tool) und finden Sie eine Farbe, die Ihnen gefällt. Wenn Sie auf eine Farbe klicken, sehen Sie einen seltsamen sechsstelligen Code wie `#660066`. Das wird als _Hex-Code_ (kurz für hexadezimal) bezeichnet und repräsentiert Ihre Farbe. Notieren Sie den Code für den Moment an einem sicheren Ort.

![Farb-Auswahl-Tool auf der MDN-Dokumentationswebsite mit RGB-, HSL- und HEX-Farben](color-picker.png)

## Auswahl eines Bildes

Um ein Bild auszuwählen, gehen Sie zu [Google Images](https://www.google.com/imghp) und suchen Sie nach etwas Passendem.

1. Wenn Sie das gewünschte Bild gefunden haben, klicken Sie auf das Bild, um eine vergrößerte Ansicht zu erhalten.
2. Klicken Sie mit der rechten Maustaste auf das Bild (Strg + Klick auf einem Mac), wählen Sie _Bild speichern unter…_ und suchen Sie sich einen sicheren Ort zum Speichern Ihres Bildes.

![Suchergebnisse für einen Suchbegriff bei Google Images](updated-google-images.png)

Beachten Sie, dass die meisten Bilder im Web, einschließlich Google Images, urheberrechtlich geschützt sind. Um die Wahrscheinlichkeit eines Urheberrechtsverstoßes zu verringern, können Sie den Lizenzfilter von Google verwenden. Klicken Sie auf die Schaltfläche _Tools_, dann auf die erscheinende Option _Nutzungsrechte_. Sie sollten die Option _Creative Commons-Lizenzen_ auswählen.

![Gefilterte Suchergebnisse, um Bilder von Creative Commons-Lizenzen bei Google Images zu erhalten](updated-google-images-licensing.png)

## Auswahl einer Schriftart

Wie bei Bildern sind auch viele Schriftarten durch Lizenzen geschützt, was bedeutet, dass Sie sie nicht frei auf Ihrer Website verwenden können. [Google Fonts](https://developers.google.com/fonts) ist ein Webdienst von Google, der Zugriff auf viele Schriftarten bietet.

Sobald Sie eine Schriftart gefunden haben, gibt es zwei Hauptmethoden, sie zu verwenden:

1. Fügen Sie einen Verweis in Ihrem Code hinzu, um die Schriftart von den Google-Servern zu laden.
2. Laden Sie die Schriftart herunter, hosten Sie sie selbst, und verwenden Sie Ihre lokale Kopie im Code Ihrer Website.

> [!NOTE]
> Das Laden von Schriftarten, die auf Google Fonts gehostet werden, kann mit der Datenschutzverordnung [GDPR](https://gdpr.eu/) der Europäischen Union unvereinbar sein, da der Schriftdienst die IP-Adresse des Nutzers preisgibt. Wenn dies ein potenzielles Problem für Sie darstellt, wählen Sie entweder die zweite Option oder einen Schriftartanbieter, der GDPR-konform ist, wie zum Beispiel [Bunny Fonts](https://fonts.bunny.net/about).

Alternativ können Sie [sichere Webschriftarten](https://web.mit.edu/jmorzins/www/fonts.html) wie Arial, Times New Roman oder Courier New verwenden.

{{NextMenu("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

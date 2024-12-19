---
title: Wie wird Ihre Website aussehen?
slug: Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

_Wie wird Ihre Website aussehen?_ behandelt die Planungs- und Designarbeit, die Sie für Ihre Website vor dem Schreiben von Code leisten müssen, einschließlich "Welche Informationen bietet meine Website?", "Welche Schriftarten und Farben möchte ich?" und "Was soll meine Seite machen?"

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem, der Basissoftware, die Sie zum Erstellen einer Website verwenden werden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Planen Sie eine einfache Website.</li>
          <li>Verwenden Sie einen grundlegenden Designprozess.</li>
          <li>Sammeln Sie Ressourcen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zuerst: Planung

Bevor Sie irgendetwas tun, brauchen Sie einige Ideen. Was soll Ihre Website eigentlich machen? Eine Website kann im Grunde alles tun, aber für den ersten Versuch sollten Sie es einfach halten. Wir beginnen mit der Erstellung einer einfachen Webseite mit einer Überschrift, einem Bild und ein paar Absätzen.

Um zu beginnen, müssen Sie diese Fragen beantworten:

1. **Worum geht es auf Ihrer Website?** Mögen Sie Hunde, New York oder Pac-Man?
2. **Welche Informationen präsentieren Sie zum Thema?** Schreiben Sie einen Titel und einige Absätze und denken Sie an ein Bild, das Sie auf Ihrer Seite zeigen möchten.
3. **Wie sieht Ihre Website aus**, in einfachen, groben Zügen? Was ist die Hintergrundfarbe? Welche Art von Schriftart ist angemessen: formell, comicartig, fett und laut, subtil?

> [!NOTE]
> Komplexe Projekte benötigen detaillierte Richtlinien, die alle Details zu Farben, Schriftarten, Abständen zwischen Elementen auf einer Seite, angemessenen Schreibstilen und so weiter enthalten. Dies wird manchmal als Designleitfaden, Designsprache oder Markenbuch bezeichnet, und Sie können ein Beispiel im [Firefox Acorn Design System](https://acorn.firefox.com/latest) sehen.

## Skizzieren Ihres Designs

Nehmen Sie als nächstes Stift und Papier und skizzieren Sie grob, wie Ihre Seite aussehen soll. Für Ihre erste einfache Webseite gibt es nicht viel zu skizzieren, aber Sie sollten sich jetzt daran gewöhnen, dies zu tun. Es hilft wirklich — Sie müssen kein Van Gogh sein!

![Eine grobe Zeichnung und Skizze einer Website auf Papier](website-drawing-scan.png)

> [!NOTE]
> Auch bei realen, komplexen Websites beginnen die Designteams normalerweise mit groben Skizzen auf Papier und erstellen später digitale Mockups mit einem Grafikeditor oder Webtechnologien.
>
> Webteams bestehen oft sowohl aus einem Grafikdesigner als auch einem {{Glossary("UX", "Benutzererfahrungsdesigner")}} (UX). Grafikdesigner erstellen die visuellen Elemente der Website. UX-Designer haben eine etwas abstraktere Rolle bei der Gestaltung, wie Benutzer die Website erleben und mit ihr interagieren werden.

An diesem Punkt ist es gut, den Inhalt zusammenzustellen, der schließlich auf Ihrer Webseite erscheinen wird. Sie sollten noch Ihre Absätze und den Titel von früher haben. Halten Sie diese in der Nähe.

## Auswahl einer Themenfarbe

Um eine Farbe auszuwählen, gehen Sie zum [Color Picker](/de/docs/Web/CSS/CSS_colors/Color_picker_tool) und finden Sie eine Farbe, die Ihnen gefällt. Wenn Sie auf eine Farbe klicken, sehen Sie einen seltsamen sechsstelligen Code wie `#660066`. Das wird ein _Hex-Code_ genannt (kurz für Hexadezimal) und stellt Ihre Farbe dar. Kopieren Sie den Code an einen sicheren Ort.

![Color-Picker-Tool auf der MDN Docs-Website mit RGB, HSL und HEX-Farben](color-picker.png)

## Auswahl eines Bildes

Um ein Bild auszuwählen, gehen Sie zu [Google Images](https://www.google.com/imghp) und suchen Sie etwas Passendes.

1. Wenn Sie das gewünschte Bild gefunden haben, klicken Sie auf das Bild, um eine vergrößerte Ansicht zu erhalten.
2. Klicken Sie mit der rechten Maustaste auf das Bild (Strg + Klick auf einem Mac), wählen Sie _Bild speichern unter…_ und wählen Sie einen sicheren Ort zum Speichern Ihres Bildes.

![Suchergebnisse für einen Suchbegriff in Google Images](updated-google-images.png)

Beachten Sie, dass die meisten Bilder im Web, einschließlich Google Images, urheberrechtlich geschützt sind. Um die Wahrscheinlichkeit einer Urheberrechtsverletzung zu verringern, können Sie den Lizenzfilter von Google verwenden. Klicken Sie auf die Schaltfläche _Tools_ und dann auf die erscheinende Option _Nutzungsrechte_. Sie sollten die Option _Creative Commons-Lizenzen_ wählen.

![Gefilterte Suchergebnisse für Bilder mit Creative-Commons-Lizenzen auf Google Images](updated-google-images-licensing.png)

## Auswahl einer Schriftart

Wie bei Bildern sind viele Schriftarten durch Lizenzen geschützt, was bedeutet, dass Sie sie nicht frei auf Ihrer Website verwenden können. [Google Fonts](https://developers.google.com/fonts) ist ein von Google betriebener Webdienst, der den Zugang zu vielen Schriftarten bietet.

Sobald Sie eine Schriftart gefunden haben, gibt es zwei Hauptmethoden, sie zu verwenden:

1. Fügen Sie eine Referenz in Ihren Code ein, um die Schriftart von den Google-Servern zu laden.
2. Laden Sie die Schriftart-Datei auf Ihr eigenes System herunter, hosten Sie die Schriftart selbst und verwenden Sie Ihre gehostete Kopie im Code Ihrer Website.

> [!NOTE]
> Das Bereitstellen von Schriftarten, die auf Google Fonts gehostet werden, kann mit der Datenschutzverordnung der Europäischen Union [GDPR](https://gdpr.eu/) unvereinbar sein, da der Schriftartdienst die IP-Adresse des Nutzers offenlegt. Falls dies ein potenzielles Problem für Sie ist, wählen Sie entweder die zweite Option oder einen Schriftartenanbieter, der mit der GDPR konform ist, wie zum Beispiel [Bunny Fonts](https://fonts.bunny.net/about).

Alternativ können Sie [sichere Webschriftarten](https://web.mit.edu/jmorzins/www/fonts.html) wie Arial, Times New Roman oder Courier New verwenden.

{{NextMenu("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

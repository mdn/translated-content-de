---
title: Wie wird Ihre Website aussehen?
short-title: Wie wird sie aussehen?
slug: Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like
l10n:
  sourceCommit: 62ab95d20f246369cfab654c5a7a8727deb21ea6
---

{{NextMenu("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

_Wie wird Ihre Website aussehen?_ behandelt die Planungs- und Designarbeiten, die Sie für Ihre Website durchführen müssen, bevor Sie Code schreiben. Dazu gehören Fragen wie "Welche Informationen bietet meine Website?", "Welche Schriftarten und Farben möchte ich?" und "Was soll meine Seite tun?"

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis für Ihr Computerbetriebssystem, die grundlegende Software, die Sie zur Erstellung einer Website verwenden werden, und Dateisysteme.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Eine grundlegende Website planen.</li>
          <li>Einen grundlegenden Designprozess anwenden.</li>
          <li>Materialien sammeln.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zuerst: Planung

Bevor Sie irgendetwas tun, brauchen Sie einige Ideen. Was soll Ihre Website eigentlich tun? Eine Website kann grundsätzlich alles tun, aber für den ersten Versuch sollten Sie es einfach halten. Wir werden damit beginnen, eine einfache Webseite mit einer Überschrift, einem Bild und ein paar Absätzen zu erstellen.

Um zu beginnen, müssen Sie diese Fragen beantworten:

1. **Worum geht es auf Ihrer Website?** Mögen Sie Hunde, New York oder Pac-Man?
2. **Welche Informationen präsentieren Sie zu diesem Thema?** Schreiben Sie einen Titel und ein paar Absätze und überlegen Sie sich ein Bild, das Sie auf Ihrer Seite zeigen möchten.
3. **Wie sieht Ihre Website aus,** in einfachen, übergeordneten Begriffen? Welche Hintergrundfarbe hat sie? Welche Art von Schriftart ist passend: formell, cartoonartig, fett und laut, subtil?

> [!NOTE]
> Komplexe Projekte benötigen detaillierte Richtlinien, die alle Details zu Farben, Schriftarten, Abständen zwischen Elementen auf einer Seite, angemessenen Schreibstilen usw. abdecken. Dies wird manchmal als Designrichtlinie, Designsystem oder Markenbuch bezeichnet, ein Beispiel finden Sie im [Firefox Acorn Design System](https://acorn.firefox.com/latest).

## Skizzieren Ihres Designs

Nehmen Sie als Nächstes Stift und Papier und skizzieren Sie grob, wie Ihre Seite aussehen soll. Für Ihre erste einfache Webseite gibt es nicht viel zu skizzieren, aber Sie sollten sich diese Gewohnheit jetzt aneignen. Es hilft wirklich sehr — Sie müssen kein Van Gogh sein!

![Eine grobe Zeichnung und Skizze einer Website auf Papier](website-drawing-scan.png)

> [!NOTE]
> Selbst bei echten, komplexen Websites beginnen die Designteams normalerweise mit groben Skizzen auf Papier und erstellen später digitale Entwürfe mit einem Grafikeditor oder Webtechnologien.
>
> Webteams bestehen oft sowohl aus einem [Grafikdesigner](/de/docs/Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes#graphic_designer) als auch aus einem [User Experience (UX) Designer](/docs/Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes#user_experience_ux_designer). Grafikdesigner gestalten das visuelle Erscheinungsbild der Website. UX-Designer haben eine etwas abstraktere Rolle, indem sie sich mit der Benutzererfahrung und der Interaktion mit der Website befassen.

An diesem Punkt ist es sinnvoll, die Inhalte zusammenzustellen, die letztendlich auf Ihrer Webseite erscheinen werden. Sie sollten Ihre Absätze und den Titel von früher bereithalten. Bewahren Sie diese in Ihrer Nähe auf.

## Auswahl einer Farbgestaltung

Lassen Sie uns eine Hintergrundfarbe für Ihre Seite auswählen.

1. Besuchen Sie [den Color Picker](/de/docs/Web/CSS/CSS_colors/Color_picker_tool) und finden Sie eine Farbe, die Ihnen gefällt.
2. Wenn Sie auf eine Farbe klicken, sehen Sie einen seltsamen sechsstelligen Code wie `#660066`. Das nennt man einen _Hex-Code_ (kurz für hexadezimal), der Ihre Farbe darstellt. Notieren Sie sich den Code an einem sicheren Ort für später.

![Color-Picker-Tool auf der MDN Docs-Website mit RGB-, HSL- und HEX-Farben ](color-picker.png)

## Auswahl eines Bildes

Jetzt ist es an der Zeit, ein Bild für Ihre Seite zu finden.

1. Gehen Sie zu [Google Bilder](https://www.google.com/imghp).
2. Beachten Sie, dass die meisten Bilder im Internet, einschließlich Google Bilder, urheberrechtlich geschützt sind. Um das Risiko einer Urheberrechtsverletzung zu verringern, können Sie den Lizenzfilter von Google verwenden. Klicken Sie auf die Schaltfläche _Tools_ und dann auf die erscheinende Option _Nutzungsrechte_. Sie sollten die Option _Creative Commons-Lizenzen_ wählen.

   ![Gefilterte Suchergebnisse, um Bilder von Creative Commons Lizenzen auf Google Images zu erhalten](updated-google-images-licensing.png)

3. Suchen Sie nach einem geeigneten Bild.
4. Wenn Sie das Bild gefunden haben, das Sie möchten, klicken Sie auf das Bild, um eine vergrößerte Ansicht zu erhalten.
5. Klicken Sie mit der rechten Maustaste auf das Bild (<kbd>Ctrl</kbd> + Klick auf einem Mac), wählen Sie _Bild speichern unter…_, und wählen Sie einen sicheren Ort zum Speichern Ihres Bildes.

   ![Suchergebnisse für einen Suchbegriff auf Google Images](updated-google-images.png)

## Auswahl einer Schriftart

Es gibt eine Reihe von Schriftarten, die als [websichere Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) bezeichnet werden — wie Arial, Times New Roman oder Courier New — die auf den meisten Computersystemen verfügbar sind. Wenn Sie eine dieser Schriftarten auf Ihrer Website verwenden, lädt der Browser die Schriftartendatei, die auf dem Computer des Benutzers verfügbar ist.

Wenn Sie jedoch andere Schriftarten verwenden möchten, die auf Geräten nicht allgemein verfügbar sind, müssen Sie diese entweder zusammen mit Ihren Website-Dateien einbeziehen oder auf die Schriftartendateien von einem Drittanbieter-Schriftservice verweisen, damit der Browser sie bei Bedarf herunterladen kann. [Google Fonts](https://fonts.google.com/) ist ein solcher Dienst, der Zugang zu vielen Schriftarten bietet.

Lassen Sie uns Google-Schriftarten verwenden, um eine Schriftart für Ihre Website auszuwählen:

1. Gehen Sie zu [Google Fonts](https://fonts.google.com/).
2. Scrollen Sie die Liste der Schriftarten nach unten, bis Sie eine finden, die Ihnen gefällt. Falls Sie Schwierigkeiten haben, eine zu finden, können Sie die in der anderen Spalte verfügbaren Filter verwenden, um Ihre Suche einzugrenzen.
3. Klicken Sie Ihre Schriftoption an und klicken Sie auf der nächsten Seite auf die Schaltfläche "Get font".
4. Auf der nächsten Seite klicken Sie auf "Get embed code".
5. Kopieren Sie beide der bereitgestellten Codeblöcke und speichern Sie sie an einem sicheren Ort für späteren Gebrauch.

> [!NOTE]
> Wie bei Bildern sind viele Schriftarten durch Lizenzen geschützt, was bedeutet, dass Sie sie nicht unbedingt frei für kommerzielle Websites verwenden können. Sie sind vorerst in Ordnung, wenn Sie an Lernbeispielen arbeiten, aber bedenken Sie dies bei der Auswahl von Schriftarten für echte Websites.

{{NextMenu("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

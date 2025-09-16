---
title: Wie wird Ihre Website aussehen?
short-title: Wie wird sie aussehen?
slug: Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like
l10n:
  sourceCommit: c148812e0874220770cab62c16f33f48ceb98e99
---

{{NextMenu("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

_Wie wird Ihre Website aussehen?_ befasst sich mit der Planungs- und Gestaltungsarbeit, die Sie für Ihre Website vor der Codierung durchführen müssen. Dazu gehören Fragen wie „Welche Informationen bietet meine Website?“, „Welche Schriftarten und Farben möchte ich?“ und „Was macht meine Website?“

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über Ihr Computer-Betriebssystem, die grundlegende Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisysteme.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Planen einer einfachen Website.</li>
          <li>Verwenden eines grundlegenden Designprozesses.</li>
          <li>Zusammensammeln von Ressourcen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zuerst einmal: Planung

Bevor Sie irgendetwas tun, brauchen Sie einige Ideen. Was soll Ihre Website tatsächlich tun? Eine Website kann im Grunde alles tun, aber für Ihren ersten Versuch sollten Sie es einfach halten. Wir beginnen mit der Erstellung einer einfachen Webseite mit einer Überschrift, einem Bild und ein paar Absätzen.

Um zu beginnen, müssen Sie diese Fragen beantworten:

1. **Worum geht es auf Ihrer Website?** Mögen Sie Hunde, New York oder Pac-Man?
2. **Welche Informationen präsentieren Sie zum Thema?** Schreiben Sie einen Titel und ein paar Absätze und überlegen Sie sich ein Bild, das Sie auf Ihrer Seite zeigen möchten.
3. **Wie sieht Ihre Website aus**, in einfachen, groben Zügen? Wie ist die Hintergrundfarbe? Welche Art von Schriftart ist angemessen: formell, cartoonhaft, fett und laut, subtil?

> [!NOTE]
> Komplexe Projekte erfordern detaillierte Richtlinien, die alle Details von Farben, Schriftarten, Abständen zwischen den Elementen auf einer Seite, geeigneter Schreibstil usw. umfassen. Dies wird manchmal als Designleitfaden, Designsystem oder Markenbuch bezeichnet, und Sie können ein Beispiel beim [Firefox Acorn Design System](https://acorn.firefox.com/latest) sehen.

## Entwurf Ihres Designs

Nehmen Sie als Nächstes Stift und Papier und skizzieren Sie grob, wie Ihre Seite aussehen soll. Für Ihre erste einfache Webseite gibt es zwar nicht viel zu skizzieren, aber Sie sollten sich jetzt daran gewöhnen, dies zu tun. Es hilft wirklich — Sie müssen kein Van Gogh sein!

![Eine grobe Zeichnung und Skizze einer Website auf Papier](website-drawing-scan.png)

> [!NOTE]
> Selbst auf echten, komplexen Websites beginnen die Designteams normalerweise mit groben Skizzen auf Papier und erstellen später digitale Mockups mit einem Grafikeditor oder Webtechnologien.
>
> Webteams umfassen oft sowohl einen [Grafikdesigner](/de/docs/Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes#graphic_designer) als auch einen [User Experience (UX) Designer](/de/docs/Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes#user_experience_ux_designer). Grafikdesigner erarbeiten die visuellen Elemente der Website. UX-Designer haben eine eher abstrakte Rolle und beschäftigen sich damit, wie Benutzer die Website erleben und mit ihr interagieren werden.

An diesem Punkt ist es gut, damit zu beginnen, die Inhalte zusammenzustellen, die letztendlich auf Ihrer Webseite erscheinen werden. Sie sollten Ihre Absätze und Ihren Titel von früher noch haben. Halten Sie diese griffbereit.

## Auswahl einer Farbebene

Wählen wir einen Hintergrundfarbton für Ihre Seite.

1. Gehen Sie zu [dem Farbwähler](/de/docs/Web/CSS/CSS_colors/Color_picker) und finden Sie eine Farbe, die Ihnen gefällt.
2. Wenn Sie auf eine Farbe klicken, sehen Sie einen seltsamen sechsstelligen Code wie `#660066`. Dies wird als _Hex-Code_ (kurz für hexadezimal) bezeichnet und stellt Ihre Farbe dar. Kopieren Sie den Code vorerst sicherheitshalber irgendwo hin.

![Color-Picker-Tool auf MDN Docs-Website mit RGB, HSL und HEX-Farben](color-picker.png)

## Auswahl eines Bildes

Jetzt ist es an der Zeit, ein Bild für Ihre Seite zu finden.

1. Gehen Sie zu [Google Bilder](https://www.google.com/imghp).
2. Beachten Sie, dass die meisten Bilder im Internet, auch in Google Bilder, urheberrechtlich geschützt sind. Um Ihre Wahrscheinlichkeit, gegen das Urheberrecht zu verstoßen, zu verringern, können Sie den Lizenzfilter von Google verwenden. Klicken Sie auf die Schaltfläche _Werkzeuge_ und dann auf die erscheinende Option _Nutzungsrechte_. Sie sollten die Option _Creative Commons-Lizenzen_ wählen.

   ![Gefilterte Suchergebnisse, um Bilder von Creative Commons-Lizenzen auf Google Bilder zu erhalten](updated-google-images-licensing.png)

3. Suchen Sie ein geeignetes Bild.
4. Wenn Sie das gewünschte Bild gefunden haben, klicken Sie darauf, um eine vergrößerte Ansicht zu erhalten.
5. Klicken Sie mit der rechten Maustaste auf das Bild (<kbd>Ctrl</kbd> + Klick auf einem Mac), wählen Sie _Bild speichern unter..._ und wählen Sie einen sicheren Ort, um Ihr Bild zu speichern.

   ![Suchergebnisse für einen Suchbegriff auf Google Bilder](updated-google-images.png)

## Auswahl einer Schriftart

Es gibt einen Satz von Schriftarten, die als [websichere Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) bezeichnet werden — wie Arial, Times New Roman oder Courier New — die auf den meisten Computersystemen allgemein verfügbar sind. Wenn Sie eine dieser Schriftarten auf Ihrer Website verwenden, lädt der Browser die auf dem Computer des Benutzers verfügbare Schriftartdatei.

Wenn Sie jedoch andere Schriftarten verwenden möchten, die auf Geräten normalerweise nicht verfügbar sind, müssen Sie entweder diese zusammen mit Ihren Website-Dateien einbinden oder die Schriftartdateien von einem Drittanbieterdienst referenzieren, damit der Browser sie bei Bedarf herunterladen kann. [Google Fonts](https://fonts.google.com/) ist ein solcher Dienst, der Zugriff auf viele Schriftarten bietet.

Verwenden wir Google Fonts, um eine Schriftart für Ihre Website auszuwählen:

1. Gehen Sie zu [Google Fonts](https://fonts.google.com/).
2. Scrollen Sie die Liste der Schriftarten hinunter, bis Sie eine finden, die Ihnen gefällt. Wenn Sie Schwierigkeiten haben, eine zu finden, können Sie die in der anderen Spalte verfügbaren Filter verwenden, um Ihre Suche einzugrenzen.
3. Klicken Sie auf Ihre Schriftartoption und dann auf der nächsten Seite auf die Schaltfläche "Schriftart abrufen".
4. Klicken Sie auf der nächsten Seite auf "Einbettungscode erhalten".
5. Kopieren Sie beide bereitgestellten Codeblöcke und bewahren Sie sie für eine spätere Verwendung sicher auf.

> [!NOTE]
> Wie bei Bildern sind viele Schriftarten durch Lizenzen geschützt, was bedeutet, dass Sie sie nicht unbedingt frei auf kommerziellen Websites verwenden können. Für jetzt werden Sie gut zurechtkommen, solange Sie an Lernbeispielen arbeiten, aber behalten Sie dies im Kopf, wenn Sie Schriftarten für echte Websites auswählen.

{{NextMenu("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

---
title: Wahrnehmbar
slug: Web/Accessibility/Understanding_WCAG/Perceivable
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{AccessibilitySidebar}}

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so schreiben können, dass sie den Erfolgskriterien entsprechen, die im **Wahrnehmbar**-Prinzip der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 festgelegt sind. Wahrnehmbar bedeutet, dass Benutzer in der Lage sein müssen, die Inhalte auf irgendeine Weise wahrzunehmen, unter Nutzung eines oder mehrerer ihrer Sinne.

> [!NOTE]
> Um die W3C-Definitionen für Wahrnehmbar und deren Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 1: Wahrnehmbar - Informationen und Benutzeroberflächenkomponenten müssen so präsentiert werden, dass die Benutzer sie wahrnehmen können.](https://www.w3.org/TR/WCAG21/#perceivable)

## Richtlinie 1.1 — Bereitstellung von Textalternativen für Nicht-Text-Inhalte

Der Schlüssel hierbei ist, dass Text in andere Formen umgewandelt werden kann, die Menschen mit Behinderungen nutzen können. Zum Beispiel kann er von einem Screenreader gesprochen, in großen Druck umgewandelt oder auf einem Braille-Display dargestellt werden. Nicht-Text-Inhalte beziehen sich auf Multimedia wie Bilder, Audio und Video.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie man den Kriterien entspricht</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="5">1.1.1 Textäquivalente bereitstellen (A)</td>
      <td>
        Alle Bilder, die bedeutungsvolle Inhalte vermitteln, sollten mit geeigneten
        alternativen Texten versehen werden.
      </td>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives"
          >Textalternativen.</a
        >
      </td>
    </tr>
    <tr>
      <td>
        Komplexe Bilder oder Diagramme sollten eine barrierefreie Alternative
        haben, entweder auf derselben Seite oder über einen Link. Verwenden Sie
        einen regulären Link anstelle eines <code>longdesc</code>-Attributs.
      </td>
      <td>
        <p>
          Eine Textbeschreibung kann funktionieren oder eine zugängliche Datentabelle
          (siehe
          <a href="Learn_web_development/Core/Structuring_content/Table_accessibility"
            >HTML-Tabellenzugänglichkeit</a
          >). Siehe W3C's
          <a href="https://www.w3.org/TR/html-longdesc/">Image Description Extension (longdesc)</a>
          für das Argument gegen <code>longdesc</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Multimediainhalte (d.h. Audio oder Video) sollten zumindest eine
        beschreibende Bezeichnung haben, wie z.B. Untertitel oder ähnliches.
      </td>
      <td>
        <p>
          Siehe <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          >
          für statische Untertiteloptionen und
          <a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts"
            >Audio-Transkripte</a
          >,
          <a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#video_text_tracks"
            >Video-Textspuren</a
          >
          für andere Alternativen.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        UI-Steuerelemente wie Formularelemente und Buttons sollten Textlabels
        haben, die ihren Zweck beschreiben.
      </td>
      <td>
        Buttons sind einfach — Sie sollten sicherstellen, dass der Button-Text
        die Funktion des Buttons beschreibt (z.B., <code
          >&#x3C;button>Bild hochladen&#x3C;/button></code
        >). Für weitere Informationen zu anderen UI-Steuerelementen, siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI-Steuerelemente</a
        >.
      </td>
    </tr>
    <tr>
      <td>
        Implementieren Sie dekorative (nicht-inhaltliche) Bilder, Videos usw. so,
        dass sie für unterstützende Technologien unsichtbar sind, damit sie die
        Benutzer nicht verwirren.
      </td>
      <td>
        <p>
          Dekorative Bilder sollten mit CSS-Hintergrundbildern
          implementiert werden (siehe
          <a
            href="/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders"
            >Hintergründe und Rahmen</a
          >). Wenn Sie ein Bild über ein
          {{htmlelement("img")}}-Element einfügen müssen, geben Sie ihm ein leeres alt
          (<code>alt=""</code>). Andernfalls könnten Screenreader versuchen, den
          Dateipfad usw. vorzulesen.
        </p>
        <p>
          Wenn Sie ein Hintergrundvideo oder Audio einfügen, das automatisch
          abgespielt wird, machen Sie es so unaufdringlich wie möglich. Lassen Sie es
          nicht wie Inhalt aussehen/klingen und bieten Sie eine Steuerung zum
          Ausschalten an. Idealerweise sollten Sie es gar nicht erst einbeziehen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die [WCAG-Beschreibung für Richtlinie 1.1: Textalternativen](https://www.w3.org/TR/WCAG21/#text-alternatives).

## Richtlinie 1.2 — Bereitstellung von Textalternativen für zeitbasierte Medien

Zeitbasierte Medien beziehen sich auf Multimedia mit einer Dauer, wie Audio und Video. Beachten Sie, dass, wenn das Audio/Video als Alternative zu vorhandenen Textinhalten dient, Sie keine weitere Textalternative bereitstellen müssen.

<table>
  <thead>
    <tr>
       <th scope="col">Erfolgskriterien</th>
       <th scope="col">Wie man den Kriterien entspricht</th>
       <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
       <td>1.2.1 Alternativen für vorab aufgezeichnete nur Audio- und Video-Inhalte bereitstellen (A)</td>
       <td>Für vorab aufgezeichnete rein audio-basierte Medien sollte ein Transkript bereitgestellt werden, und für vorab aufgezeichnete rein video-basierte Medien (d.h. stummes Video) sollte ein Transkript oder eine Audiobeschreibung bereitgestellt werden.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Informationen zu Transkripten. Kein Tutorial für Audiobeschreibungen ist bislang verfügbar.</td>
    </tr>
    <tr>
       <td>1.2.2 Untertitel für webbasierte Videos bereitstellen (A)</td>
       <td>Sie sollten Untertitel für Videos bereitstellen, die im Web präsentiert werden (z.B. HTML-Video). Dies ist zugunsten von Menschen, die den Audioteil des Videos nicht hören können.</td>
       <td>Siehe <a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#video_text_tracks">Video-Textspuren</a> für HTML-Videountertitel. Siehe auch <a href="https://support.google.com/youtube/answer/2734796?hl=en">Fügen Sie Ihre eigenen Untertitel & geschlossene Untertitel hinzu</a> (YouTube).</td>
    </tr>
    <tr>
       <td>1.2.3 Textabschrift oder Audiobeschreibung für webbasierte Videos bereitstellen (A)</td>
       <td>Sie sollten Textabschriften oder Audiobeschreibungen für Videos bereitstellen, die im Web präsentiert werden (z.B. HTML-Video). Dies ist zugunsten derer, die den visuellen Teil des Videos nicht sehen können und nicht den vollen Inhalt allein durch das Audio erhalten.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Informationen zu Transkripten. Kein Tutorial für Audiobeschreibungen ist bislang verfügbar.</td>
    </tr>
    <tr>
       <td>1.2.4 Untertitel für Live-Audio bereitstellen (AA)</td>
       <td>Sie sollten synchronisierte Untertitel für alle Live-Multimedia, die Audio enthalten (z.B. Videokonferenzen, Live-Audioübertragungen), bereitstellen.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.5 Audiobeschreibungen für vorab aufgezeichnete Videos bereitstellen (AA)</td>
       <td>Audiobeschreibungen sollten für vorab aufgezeichnete Videos bereitgestellt werden, jedoch nur, wenn das vorhandene Audio nicht die vollständige Bedeutung vermittelt, die durch das Video ausgedrückt wird.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.6 Gebärdensprache-Äquivalent zu vorab aufgezeichnetem Audio bereitstellen (AAA)</td>
       <td>Ein gleichwertiges Gebärdensprachvideo sollte für jeden aufgezeichneten Inhalt mit Audio bereitgestellt werden.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.7 Videos mit Audiobeschreibungen verlängern (AAA)</td>
       <td>Wo Audiobeschreibungen nicht bereitgestellt werden können (siehe 1.2.5) aufgrund von Videotimingproblemen (z.B. es gibt keine geeigneten Pausen im Inhalt, in die Audiobeschreibungen eingefügt werden können), sollte eine alternative Version des Videos bereitgestellt werden, die eingefügte Pausen (und Audiobeschreibungen) enthält.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.8 Eine Alternative für vorab aufgezeichnete Medien bereitstellen (AAA)</td>
       <td>Für alle Inhalte, die Video enthalten, sollte ein beschreibendes Texttranskript bereitgestellt werden, zum Beispiel ein Drehbuch des Films, den Sie gerade ansehen. Dies ist zugunsten hörgeschädigter Zuschauer, die den Inhalt nicht hören können.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Informationen zu Transkripten.</td>
    </tr>
    <tr>
       <td>1.2.9 Transkript für Live-Audio bereitstellen (AAA)</td>
       <td>Für jegliche Live-Audioinhalte, die ausgestrahlt werden, sollte ein beschreibender Text bereitgestellt werden, zum Beispiel ein Drehbuch des Stücks oder Musicals, das Sie hören. Dies ist zugunsten hörgeschädigter Zuschauer, die den Inhalt nicht hören können.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Informationen zu Transkripten.</td>
    </tr>
 </tbody>
</table>

> [!NOTE]
> Siehe auch die [WCAG-Beschreibung für Richtlinie 1.2: Zeitbasierte Medien: Bereitstellung von Alternativen für zeitbasierte Medien](https://www.w3.org/TR/WCAG21/#time-based-media).

## Richtlinie 1.3 — Erstellen Sie Inhalte, die auf verschiedene Arten präsentiert werden können

Diese Richtlinie bezieht sich auf die Fähigkeit von Inhalten, in verschiedenen Formen konsumiert zu werden, um den unterschiedlichen Bedürfnissen der Benutzer gerecht zu werden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie man den Kriterien entspricht</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
    <tr>
      <td>1.3.1 Informationen und Beziehungen (A)</td>
      <td>
        <p>
          Jegliche Inhaltsstruktur oder visuelle Beziehung zwischen Inhalten kann
          auch programmatisch bestimmt oder aus einer Textbeschreibung
          abgeleitet werden. Die Hauptsituationen, in denen dies relevant ist,
          sind:
        </p>
        <ul>
          <li>
            Textlabels und die Formularelemente, die sie beschreiben. Diese sind
            eindeutig mit dem {{htmlelement("label")}}-Element verbunden, das von
            Screenreadern usw. aufgenommen werden kann.
          </li>
          <li>
            Alt-Text für Bilder. Inhaltsbilder sollten über verfügbaren Text
            verfügen, der den Inhalt des Bildes klar beschreibt. Dieser kann
            programmatisch damit verknüpft werden (z.B. Alt-Text),
            oder es ist sonst einfach, ihn zuzuordnen (z.B. beschreibt das Bild und
            befindet sich direkt daneben). Dies sollte bedeuten, dass die volle
            Bedeutung immer noch abgeleitet werden kann, auch wenn man das Bild
            nicht sehen kann.
          </li>
          <li>
            Listen. Wenn die Reihenfolge der Listenelemente wichtig ist, verwenden
            Sie eine geordnete Liste ({{htmlelement("ol")}}).
          </li>
        </ul>
      </td>
      <td>
        Der gesamte
        <p>
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML"
            >HTML: Eine gute Grundlage für Barrierefreiheit</a
          >
          ist reich an Informationen darüber, aber Sie sollten besonders
          auf
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#good_semantics"
            >Gute Semantik</a
          >,
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
            >UI-Steuerelemente</a
          >, und
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          >
          achten.
        </p>
      </td>
    </tr>
    <tr>
      <td>1.3.2 Sinnvolle Inhaltsreihenfolge (A)</td>
      <td>
        Eine vernünftige, logische Lesereihenfolge sollte für alle Inhalte leicht
        zu bestimmen sein, auch wenn sie visuell auf eine unübliche Weise
        präsentiert wird. Die Reihenfolge sollte offensichtlich durch den
        Einsatz korrekter semantischer Elemente gemacht werden (z.B. Überschriften,
        Absätze), wobei CSS verwendet wird, um unerwartete Layoutstile zu
        erstellen, unabhängig vom Markup.
      </td>
      <td>
        Erneut, wenden Sie sich an
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML"
          >HTML: Eine gute Grundlage für Barrierefreiheit</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.3.3 Sensorische Charakteristika (A)</td>
      <td>
        <p>
          Anweisungen zur Bedienung von Steuerelementen oder zum Verständnis von
          Inhalten dürfen nicht auf einem einzigen Sinn beruhen. Dies könnte
          für Menschen mit einer Behinderung im Zusammenhang mit diesem Sinn,
          oder für ein Gerät, das diesen Sinn nicht unterstützt, unzugänglich
          sein. Zum Beispiel:
        </p>
        <ul>
          <li>
            "Klicken Sie auf den runden Button, um fortzufahren"<br />Der Button
            sollte klar beschriftet sein, so dass es offensichtlich ist, dass es
            der Button ist, den Sie drücken müssen. Wenn es mehrere Buttons gibt,
            stellen Sie sicher, dass sie alle klar beschriftet sind, um ihre
            Funktion zu unterscheiden.
          </li>
          <li>
            "Hören Sie auf die Audiounterweisung, um Anleitung zu erhalten"<br />Dies
            ist offensichtlich problematisch — Audio wird unzugänglich für
            Menschen mit Hörbehinderungen sein, während Text gelesen, aber auch
            von einem Screenreader vorgelesen werden kann, falls erforderlich.
          </li>
          <li>
            "Wischen Sie von der rechten Bildschirmseite, um das Menü zu öffnen"<br />Einige
            Benutzer können möglicherweise nicht den Bildschirm wischen, entweder
            aufgrund einer Behinderung oder weil ihr Gerät keine Touch-Funktion
            unterstützt. Eine Alternative sollte bereitgestellt werden, z.B.
            eine Tastenkombination oder ein Button, der per Tastatur oder anderen
            Mitteln aktiviert werden kann.
          </li>
        </ul>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Informationen allein durch Farbe zu
            vermitteln steht im Zusammenhang damit, wird jedoch in einer
            anderen Richtlinie behandelt — 1.4.1.
          </p>
        </div>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        1.3.4 Orientierung (AA)
        <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        Inhalte schränken ihre Ansicht und Bedienung nicht auf eine bestimmte
        Anzeigeorientierung ein, wie Hoch- oder Querformat, es sei denn, eine
        bestimmte Anzeigeorientierung ist unerlässlich.
      </td>
      <td>
        <p>
          <a href="https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
            >Orientierung verstehen</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        1.3.5 Eingabenzweck identifizieren (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          Folgen Sie der Liste der
          <a href="https://www.w3.org/TR/WCAG21/#input-purposes"
            >53 Eingabefelder</a
          >,
          um den Zweck eines Feldes programmatisch zu identifizieren.
        </p>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html"
          >Eingabenzweck verstehen</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.3.6 Zweck identifizieren (AAA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        In Inhalten, die mit Markup-Sprachen implementiert sind, kann der Zweck
        von Benutzeroberflächenkomponenten, Icons und Regionen programmatisch
        bestimmt werden.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html"
          >Zweck verstehen</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 1.3: Anpassbar: Inhalte erstellen, die auf verschiedene Weisen präsentiert werden können, ohne Informationen oder die Struktur zu verlieren.](https://www.w3.org/TR/WCAG21/#adaptable)

## Richtlinie 1.4: Machen Sie es Benutzern leichter, Inhalte zu sehen und zu hören, einschließlich der Trennung von Vordergrund und Hintergrund

Diese Richtlinie bezieht sich darauf, sicherzustellen, dass Kerninhalte leicht von Hintergründen und anderer Dekoration zu unterscheiden sind. Das klassische Beispiel ist Farbe (sowohl [Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) als auch [Verwendung von Farbe](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Use_of_color) zur Instruktion), aber sie gilt auch in anderen Situationen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie man den Kriterien entspricht</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
    <tr>
      <td>1.4.1 Nutzung von Farbe (A)</td>
      <td>
        <p>
          Farbe sollte nicht allein verwendet werden, um Informationen zu
          übermitteln. Zum Beispiel sollten in Formularen erforderliche Felder
          niemals nur mit einer Farbe (wie Rot) markiert werden. Stattdessen (oder
          zusätzlich) wäre etwas wie ein Sternchen mit dem Etikett "erforderlich"
          angemessener.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Use_of_color"
          >Nutzung von Farbe</a
        >,
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast"
          >Farbe und Farbkontrast</a
        >,
        und
        <a
          href="/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#multiple_labels"
          >Mehrere Labels</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.2 Audiosteuerung (A)</td>
      <td>
        Für alle Audiodaten, die länger als drei Sekunden abgespielt werden,
        stellen Sie zugängliche Steuerelemente zum Abspielen und Pausieren des
        Audios/Videos sowie zum Stummschalten/Anpassen der Lautstärke bereit.
      </td>
      <td>
        Verwenden Sie native <code>&lt;button&gt;</code>, um zugängliche
        Tastatursteuerungen bereitzustellen, wie gezeigt in
        <a
          href="/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics"
          >Video-Spieler-Styling-Grundlagen</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.3 Mindestkontrast (AA)</td>
      <td>
        <p>
          Der Farbkontrast zwischen Hintergrund- und Vordergrundinhalten sollte
          auf einem Mindestniveau liegen, um die Lesbarkeit zu gewährleisten:
        </p>
        <ul>
          <li>
            Text und sein Hintergrund sollten ein Kontrastverhältnis von
            mindestens 4,5:1 haben.
          </li>
          <li>
            Überschrift (oder nur größerer) Text sollte ein Verhältnis von
            mindestens 3:1 haben. Größerer Text wird definiert als mindestens
            18pt oder 14pt fett.
          </li>
        </ul>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast"
          >Farbkontrast</a
        > und
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast"
          >Farbe und Farbkontrast</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.4 Text vergrößern (AA)</td>
      <td>
        Die Seite sollte lesbar und nutzbar sein, wenn die Textgröße verdoppelt
        wird. Dies bedeutet, dass Designs responsiv sein sollten, sodass beim
        Vergrößern der Textgröße der Inhalt weiterhin zugänglich ist.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.5 Bilder von Text (AA)</td>
      <td>
        Bilder sollten NICHT verwendet werden, um Inhalte darzustellen, wo Text
        die Aufgabe erledigen würde. Zum Beispiel, wenn ein Bild hauptsächlich
        Text enthält, könnte es mit Text ebenso gut wie Bildern dargestellt
        werden.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.6 Erhöhter Kontrast (AAA)</td>
      <td>
        <p>Dies folgt dem Kriterium 1.4.3 und baut darauf auf.</p>
        <ul>
          <li>
            Text und sein Hintergrund sollten ein Kontrastverhältnis von
            mindestens 7:1 haben.
          </li>
          <li>
            Überschrift (oder nur größerer) Text sollte ein Verhältnis von
            mindestens 4,5:1 haben. Größerer Text wird definiert als mindestens
            18pt oder 14pt fett.
          </li>
        </ul>
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast"
          >Farbe und Farbkontrast</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.7 Wenig oder kein Hintergrundaudio (AAA)</td>
      <td>
        Vorab aufgezeichnete Audioaufnahmen, die hauptsächlich Sprache enthalten,
        sollten wenig Hintergrundgeräusche haben, sodass der Inhalt leicht
        verstanden werden kann.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.8 Visuelle Darstellung (AAA)</td>
      <td>
        <p>Für die Präsentation von Textinhalten sollte Folgendes zutreffen:</p>
        <ul>
          <li>Vordergrund- und Hintergrundfarben sollten vom Benutzer auswählbar sein.</li>
          <li>
            Textblöcke sollten für maximale Lesbarkeit nicht breiter als 80
            Zeichen (oder Glyphen) sein.
          </li>
          <li>
            Text sollte nicht vollständig ausgerichtet sein (z.B. <code
              >text-align: justify;</code
            >).
          </li>
          <li>
            Der Zeilenabstand sollte innerhalb von Absätzen mindestens
            1,5-mal die Textgröße betragen (z.B. <code>line-height: 1.5;</code>),
            und zwischen Absätzen mindestens 2,25-mal die Textgröße (z.B. <code
              >padding: 2.25rem;</code
            >).
          </li>
          <li>
            Wenn die Textgröße verdoppelt wird, sollte der Inhalt nicht
            gescrollt werden müssen.
          </li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.9 Bilder von Text (Keine Ausnahme) (AAA)</td>
      <td>
        Text sollte nicht als Teil eines Bildes präsentiert werden, es sei denn,
        es dient rein dekorativen Zwecken (d.h. es vermittelt keine Inhalte)
        oder kann auf keine andere Weise dargestellt werden.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        1.4.10 Umfließen (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <ul>
          <li>
            Kein horizontales Scrollen für von links nach rechts lesbare
            Sprachen (wie Englisch) oder von rechts nach links lesbare Sprachen
            (wie Arabisch)
          </li>
          <li>
            Kein vertikales Scrollen für von oben nach unten lesbare Sprachen
            (wie Japanisch)
          </li>
          <li>
            Außer für Teile des Inhalts, die eine zweidimensionale Darstellung
            für die Nutzung oder Bedeutung erfordern (wie eine große Datentabelle)
          </li>
        </ul>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
          >Umfließen verstehen</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.4.11 Nicht-Text-Kontrast (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        Minimales Farbkontrastverhältnis von 3:1 für Benutzeroberflächenkomponenten
        und grafische Objekte.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"
          >Nicht-Text-Kontrast verstehen</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.4.12 Textabstand (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          Es tritt kein Verlust von Inhalten oder Funktionalität auf, wenn die
          folgenden Stile angewendet werden:
        </p>
        <ul>
          <li>
            Zeilenhöhe (Zeilenabstand) auf mindestens 1,5-mal die Schriftgröße
          </li>
          <li>
            Abstand nach Absätzen auf mindestens 2-mal die Schriftgröße
          </li>
          <li>
            Buchstabenabstand (Tracking) auf mindestens 0,12-mal die Schriftgröße
          </li>
          <li>Wortabstand auf mindestens 0,16-mal die Schriftgröße</li>
        </ul>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
          >Textabstand verstehen</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.4.13 Inhalte bei Hover oder Fokus (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          Während zusätzliche Inhalte in Koordination mit Hover und
          Tastaturfokus erscheinen und verschwinden können, gibt dieses
          Erfolgskriterium drei Bedingungen vor, die erfüllt werden müssen:
        </p>
        <ul>
          <li>verwerfbar (kann geschlossen/entfernt werden)</li>
          <li>
            hoverbar (die zusätzlichen Inhalte verschwinden nicht, wenn der
            Zeiger darüber bewegt wird)
          </li>
          <li>
            persistent (die zusätzlichen Inhalte verschwinden nicht ohne
            Benutzeraktion)
          </li>
        </ul>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html"
          >Inhalte bei Hover oder Fokus verstehen</a
        >
      </td>
    </tr>
  </thead>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 1.4: Unterscheidbar: Machen Sie es Benutzern leichter, Inhalte zu sehen und zu hören, einschließlich der Trennung von Vordergrund und Hintergrund.](https://www.w3.org/TR/WCAG21/#distinguishable)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG)

  1. Wahrnehmbar
  2. [Bedienbar](/de/docs/Web/Accessibility/Understanding_WCAG/Operable)
  3. [Verständlich](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Understanding_WCAG/Robust)

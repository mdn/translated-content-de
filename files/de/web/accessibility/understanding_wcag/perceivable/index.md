---
title: Wahrnehmbar
slug: Web/Accessibility/Understanding_WCAG/Perceivable
l10n:
  sourceCommit: 3a004b55441ee5ac51bd34be5f3b7c6ce693ed6d
---

{{AccessibilitySidebar}}

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so gestalten, dass sie den Erfolgskriterien entsprechen, die im **Wahrnehmbar**-Prinzip der Richtlinien für Barrierefreiheit von Webinhalten (WCAG) 2.0 und 2.1 festgelegt sind. "Wahrnehmbar" bedeutet, dass Benutzer in der Lage sein müssen, die Inhalte auf irgendeine Weise mit einem oder mehreren ihrer Sinne wahrzunehmen.

> [!NOTE]
> Um die W3C-Definitionen für "Wahrnehmbar" und die zugehörigen Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 1: Wahrnehmbar - Informationen und Benutzeroberflächenkomponenten müssen den Benutzern in einer Weise präsentiert werden, die sie wahrnehmen können.](https://www.w3.org/TR/WCAG21/#perceivable)

## Richtlinie 1.1 — Bereitstellung von Textalternativen für nicht-textliche Inhalte

Der Schlüssel hierbei ist, dass Text in andere Formen umgewandelt werden kann, die Menschen mit Behinderungen nutzen können. Zum Beispiel kann er von einem Screenreader vorgelesen, in großer Schrift gedruckt oder auf einem Braille-Display dargestellt werden. Nicht-textliche Inhalte beziehen sich auf Multimedia wie Bilder, Audio und Video.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie Sie die Kriterien erfüllen</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="5">1.1.1 Bereitstellung von Textequivalenten (A)</td>
      <td>
        Alle Bilder, die relevante Inhalte vermitteln, sollten mit passenden Alternativtexten versehen werden.
      </td>
      <td>
        <a href="/de/docs/Learn/Accessibility/HTML#text_alternatives"
          >Textalternativen.</a
        >
      </td>
    </tr>
    <tr>
      <td>
        Komplexe Bilder oder Diagramme sollten eine zugängliche Alternative erhalten, entweder auf derselben Seite oder über einen Link. Verwenden Sie einen normalen Link anstelle eines <code>longdesc</code>-Attributes.
      </td>
      <td>
        <p>
          Eine Textbeschreibung könnte funktionieren oder auch eine zugängliche Datentabelle (siehe
          <a href="/de/docs/Learn/HTML/Tables/Advanced"
            >HTML-Tabellen erweiterte Funktionen und Barrierefreiheit</a
          >). Siehe W3C's
          <a href="https://www.w3.org/TR/html-longdesc/">Image Description Extension (longdesc)</a>
          für das Argument gegen <code>longdesc</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Multimedia-Inhalte (d. h. Audio oder Video) sollten mindestens eine beschreibende Identifikation aufweisen, wie zum Beispiel eine Untertitelung oder Ähnliches.
      </td>
      <td>
        <p>
          Siehe <a href="/de/docs/Learn/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          >
          für Optionen zu statischen Untertiteln und
          <a href="/de/docs/Learn/Accessibility/Multimedia#audio_transcripts"
            >Audio-Transkripte</a
          >,
          <a href="/de/docs/Learn/Accessibility/Multimedia#video_text_tracks"
            >Video-Textspuren</a
          >
          für andere Alternativen.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        UI-Steuerelemente wie Formularelemente und Schaltflächen sollten Textbeschriftungen haben, die ihren Zweck beschreiben.
      </td>
      <td>
        Schaltflächen sind einfach — Sie sollten sicherstellen, dass der Schaltflächentext die Funktion der Schaltfläche beschreibt (z. B. <code
          >&#x3C;button>Bild hochladen&#x3C;/button></code
        >). Weitere Informationen zu anderen UI-Steuerelementen finden Sie unter
        <a href="/de/docs/Learn/Accessibility/HTML#ui_controls"
          >UI-Steuerelemente</a
        >.
      </td>
    </tr>
    <tr>
      <td>
        Dekorative (nicht-inhaltliche) Bilder, Videos etc. sollten so implementiert werden, dass sie für unterstützende Technologien unsichtbar sind, um die Benutzer nicht zu verwirren.
      </td>
      <td>
        <p>
          Dekorative Bilder sollten mithilfe von CSS-Hintergrundbildern implementiert werden (siehe
          <a
            href="/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders"
            >Hintergründe</a
          >). Wenn Sie ein Bild über ein
          {{htmlelement("img")}}-Element einfügen müssen, geben Sie ihm einen leeren alt-Text
          (<code>alt=""</code>). Andernfalls könnten Screenreader versuchen, den Dateipfad usw. vorzulesen.
        </p>
        <p>
          Wenn Sie Hintergrundvideos oder -audios einfügen, die automatisch abspielen, sollten diese so unaufdringlich wie möglich sein. Machen Sie es nicht so, dass es wie Inhalte aussieht/klingt, und bieten Sie eine Steuerung an, um es auszuschalten. Idealerweise sollten Sie es überhaupt nicht einfügen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Sehen Sie auch die [WCAG-Beschreibung zur Richtlinie 1.1: Textalternativen](https://www.w3.org/TR/WCAG21/#text-alternatives).

## Richtlinie 1.2 — Bereitstellung von Textalternativen für zeitbasierte Medien

Zeitbasierte Medien beziehen sich auf Multimedia mit einer Dauer, wie Audio und Video. Beachten Sie, dass Sie keine weitere Textalternative bereitstellen müssen, wenn Audio/Video als Alternative zu bestehenden Textinhalten dient.

<table>
  <thead>
    <tr>
       <th scope="col">Erfolgskriterien</th>
       <th scope="col">Wie Sie die Kriterien erfüllen</th>
       <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
       <td>1.2.1 Alternativen für vorab aufgezeichnete Audio- und Video-Inhalte bereitstellen (A)</td>
       <td>Ein Transkript sollte für vorab aufgezeichnete Audio-Inhalte bereitgestellt werden, und ein Transkript oder eine Audiobeschreibung sollte für vorab aufgezeichnete Video-Inhalte (d. h. stumme Videos) bereitgestellt werden.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Informationen zu Transkripten. Es ist noch kein Tutorial zur Audiobeschreibung verfügbar.</td>
    </tr>
    <tr>
       <td>1.2.2 Untertitel für webbasierte Videos bereitstellen (A)</td>
       <td>Sie sollten Untertitel für Videos bereitstellen, die im Internet präsentiert werden (z. B. HTML-Video). Dies kommt Menschen zugute, die den Audioteil des Videos nicht hören können.</td>
       <td>Siehe <a href="/de/docs/Learn/Accessibility/Multimedia#video_text_tracks">Video-Textspuren</a> für HTML-Video-Untertitel. Siehe auch <a href="https://support.google.com/youtube/answer/2734796?hl=en">Fügen Sie Ihre eigenen Untertitel und geschlossenen Untertitel hinzu</a> (YouTube).</td>
    </tr>
    <tr>
       <td>1.2.3 Texttranskript oder Audiobeschreibung für webbasierte Videos bereitstellen (A)</td>
       <td>Sie sollten Texttranskripte oder Audiobeschreibungen für Videos bereitstellen, die im Internet präsentiert werden (z. B. HTML-Video). Dies kommt Menschen zugute, die den visuellen Teil des Videos nicht sehen können und nicht den vollständigen Inhalt nur durch das Audio erhalten.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Informationen zu Transkripten. Es ist noch kein Tutorial zur Audiobeschreibung verfügbar.</td>
    </tr>
    <tr>
       <td>1.2.4 Untertitel für Live-Audio bereitstellen (AA)</td>
       <td>Sie sollten synchronisierte Untertitel für alle Live-Multimedia bereitstellen, die Audio enthalten (z. B. Videokonferenzen, Live-Audioübertragungen).</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.5 Audiobeschreibungen für vorab aufgezeichnete Videos bereitstellen (AA)</td>
       <td>Für vorab aufgezeichnete Videos sollten Audiobeschreibungen bereitgestellt werden, jedoch nur, wenn das vorhandene Audio nicht die gesamte Bedeutung vermittelt, die das Video ausdrückt.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.6 Gebärdensprach-Äquivalent zu vorab aufgezeichnetem Audio bereitstellen (AAA)</td>
       <td>Ein entsprechendes Video in Gebärdensprache sollte für alle vorab aufgezeichneten Inhalte bereitgestellt werden, die Audio enthalten.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.7 Erweiterte Videos mit Audiobeschreibungen bereitstellen (AAA)</td>
       <td>Wo Audiobeschreibungen nicht bereitgestellt werden können (siehe 1.2.5) aufgrund von Videozeitproblemen (z. B. es gibt keine geeigneten Pausen im Inhalt, um die Audiobeschreibungen einzufügen), sollte eine alternative Version des Videos bereitgestellt werden, das eingefügte Pausen (und Audiobeschreibungen) enthält.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.8 Eine Alternative für vorab aufgezeichnete Medien bereitstellen (AAA)</td>
       <td>Für alle Inhalte, die Video enthalten, sollte ein beschreibendes Texttranskript bereitgestellt werden, z. B. ein Skript des Films, den Sie gerade ansehen. Dies ist für hörgeschädigte Zuschauer gedacht, die den Inhalt nicht hören können.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Informationen zu Transkripten.</td>
    </tr>
    <tr>
       <td>1.2.9 Transkript für Live-Audio bereitstellen (AAA)</td>
       <td>Für alle Live-Audio-Inhalte, die gesendet werden, sollte ein beschreibender Text bereitgestellt werden, z. B. ein Skript des Stücks oder Musicals, das Sie gerade hören. Dies ist für hörgeschädigte Zuschauer gedacht, die den Inhalt nicht hören können.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Informationen zu Transkripten.</td>
    </tr>
 </tbody>
</table>

> [!NOTE]
> Sehen Sie auch die [WCAG-Beschreibung zur Richtlinie 1.2: Zeitbasierte Medien: Alternativen für zeitbasierte Medien bereitstellen](https://www.w3.org/TR/WCAG21/#time-based-media).

## Richtlinie 1.3 — Erstellen von Inhalten, die in unterschiedlichen Weisen präsentiert werden können

Diese Richtlinie bezieht sich darauf, dass Inhalte für Benutzer auf unterschiedliche Weise konsumiert werden können, um ihren unterschiedlichen Bedürfnissen gerecht zu werden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie Sie die Kriterien erfüllen</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
    <tr>
      <td>1.3.1 Info und Beziehungen (A)</td>
      <td>
        <p>
          Jede Inhaltsstruktur oder visuelle Beziehung zwischen Inhalten kann auch programmatisch bestimmt oder aus einer Textbeschreibung abgeleitet werden. Die Hauptsituationen, in denen dies relevant ist, sind:
        </p>
        <ul>
          <li>
            Textbeschriftungen und die Formularelemente, die sie beschreiben. Diese werden eindeutig mit dem {{htmlelement("label")}}-Element verknüpft, das von Screenreadern usw. erkannt werden kann.
          </li>
          <li>
            Bild-Alt-Text. Inhaltliche Bilder sollten einen Text haben, der den Inhalt des Bildes eindeutig beschreibt und programmatisch damit verknüpft werden kann (z. B. Alt-Text) oder anderweitig leicht zuzuordnen ist (z. B. beschreibt es und befindet sich direkt daneben). Dies sollte bedeuten, dass die volle Bedeutung immer noch abgeleitet werden kann, auch wenn Sie das Bild nicht sehen können.
          </li>
          <li>
            Listen. Wenn die Reihenfolge der Listenelemente wichtig ist, verwenden Sie eine geordnete Liste ({{htmlelement("ol")}}).
          </li>
        </ul>
      </td>
      <td>
        Der gesamte Inhalt von
        <p>
          <a href="/de/docs/Learn/Accessibility/HTML"
            >HTML: Eine gute Grundlage für Barrierefreiheit</a
          >
          ist voll mit Informationen darüber, aber Sie sollten insbesondere auf
          <a href="/de/docs/Learn/Accessibility/HTML#good_semantics"
            >Gute Semantik</a
          >,
          <a href="/de/docs/Learn/Accessibility/HTML#ui_controls"
            >UI-Steuerelemente</a
          > und
          <a href="/de/docs/Learn/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          > verweisen.
        </p>
      </td>
    </tr>
    <tr>
      <td>1.3.2 Sinnvolle Inhaltssequenz (A)</td>
      <td>
        Eine sinnvolle, logische Leserichtung sollte für alle Inhalte leicht zu bestimmen sein, auch wenn sie visuell auf ungewöhnliche Weise präsentiert werden. Die Reihenfolge sollte durch die Verwendung korrekter semantischer Elemente (z. B. Überschriften, Absätze) offensichtlich gemacht werden, wobei CSS verwendet wird, um alle ungewöhnlichen Layoutstile zu erstellen, unabhängig von der Markierung.
      </td>
      <td>
        Wiederum beziehen Sie sich auf
        <a href="/de/docs/Learn/Accessibility/HTML"
          >HTML: Eine gute Grundlage für Barrierefreiheit</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.3.3 Sensorische Merkmale (A)</td>
      <td>
        <p>
          Anweisungen zur Bedienung von Steuerelementen oder zum Verständnis von Inhalten beruhen nicht auf einem einzigen Sinn. Dies könnte sich für Menschen mit einer Behinderung, die mit diesem Sinn verbunden ist, oder ein Gerät, das diesen Sinn nicht unterstützt, als unzugänglich erweisen. Beispiele hierfür sind:
        </p>
        <ul>
          <li>
            "Klicken Sie auf den runden Knopf, um fortzufahren"<br />Der Knopf sollte deutlich beschriftet sein, damit klar ersichtlich ist, dass es der Knopf ist, den Sie drücken müssen. Wenn es mehrere Knöpfe gibt, stellen Sie sicher, dass alle deutlich beschriftet sind, um ihre Funktion zu unterscheiden.
          </li>
          <li>
            "Hören Sie sich die Audioanweisungen zur Orientierung an"<br />Dies ist offensichtlich problematisch – Audio wird für Menschen mit Hörbehinderungen unzugänglich sein, während Text gelesen werden kann, aber auch von einem Screenreader vorgelesen werden kann, wenn erforderlich.
          </li>
          <li>
            "Wischen Sie vom rechten Rand des Bildschirms, um das Menü zu öffnen"<br />Einige Benutzer sind möglicherweise nicht in der Lage, den Bildschirm zu wischen, sei es aufgrund einer Behinderung oder weil ihr Gerät keinen Touch unterstützt. Es sollte eine Alternative bereitgestellt werden, wie ein Tastaturkürzel oder eine Schaltfläche, die mit der Tastatur oder anderen Mitteln aktiviert werden kann.
          </li>
        </ul>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Anweisungen ausschließlich durch Farbe zu übermitteln, ist ein verwandtes Thema, wird jedoch in einer anderen Richtlinie behandelt — 1.4.1.
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
        Inhalte beschränken sich nicht auf eine einzige Anzeigeausrichtung, wie Hoch- oder Querformat, es sei denn, eine spezifische Anzeigeausrichtung ist wesentlich.
      </td>
      <td>
        <p>
          <a href="https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
            >Verstehen der Orientierung</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        1.3.5 Eingabezweck identifizieren (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          Folgen Sie der Liste von
          <a href="https://www.w3.org/TR/WCAG21/#input-purposes"
            >53 Eingabefeldern</a
          >,
          um den Zweck eines Feldes programmatisch zu identifizieren.
        </p>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html"
          >Eingabezweck identifizieren verstehen</a
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
        In Inhalten, die unter Verwendung von Markup-Sprachen implementiert sind, kann der Zweck von Benutzeroberflächenkomponenten, Symbolen und Regionen programmatisch bestimmt werden.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html"
          >Zweck identifizieren verstehen</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung zur [Richtlinie 1.3: Anpassungsfähig: Erstellen von Inhalten, die in unterschiedlicher Weise präsentiert werden können, ohne Informationen zu verlieren oder die Struktur zu verändern.](https://www.w3.org/TR/WCAG21/#adaptable)

## Richtlinie 1.4: Es den Benutzern erleichtern, Inhalte zu sehen und zu hören, indem Vordergrund und Hintergrund getrennt werden

Diese Richtlinie bezieht sich darauf, sicherzustellen, dass der Kerninhalt leicht von Hintergründen und anderen Dekorationen zu unterscheiden ist. Das klassische Beispiel ist Farbe (sowohl [Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) als auch [Farbverwendung](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Use_of_color), um Anweisungen zu vermitteln), aber sie gilt auch in anderen Situationen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie Sie die Kriterien erfüllen</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
    <tr>
      <td>1.4.1 Farbgebrauch (A)</td>
      <td>
        <p>
          Farbe sollte nicht ausschließlich verwendet werden, um Informationen zu übermitteln. In Formularen sollten Sie beispielsweise niemals erforderliche Felder nur anhand einer Farbe kennzeichnen (z. B. Rot). Stattdessen wäre etwas wie ein Sternchen mit der Beschriftung "erforderlich" angemessener.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Use_of_color"
          >Farbgebrauch</a
        >,
        <a
          href="/de/docs/Learn/Accessibility/CSS_and_JavaScript#color_and_color_contrast"
          >Farbe und Farbkontrast</a
        >,
        und
        <a
          href="/de/docs/Learn/Forms/How_to_structure_a_web_form#multiple_labels"
          >Mehrere Beschriftungen</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.2 Audio-Steuerungen (A)</td>
      <td>
        Für alle Audios, die länger als drei Sekunden spielen, bieten Sie zugängliche Steuerungen zum Abspielen und Anhalten des Audios/Videos sowie zum Stummschalten/Anpassen der Lautstärke.
      </td>
      <td>
        Verwenden Sie native <code>&lt;button&gt;</code>, um zugängliche Tastatursteuerungen bereitzustellen, wie in
        <a
          href="/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics"
          >Video Player Styling Basics</a
        > gezeigt.
      </td>
    </tr>
    <tr>
      <td>1.4.3 Mindestkontrast (AA)</td>
      <td>
        <p>
          Der Farbkontrast zwischen Hintergrund und Vordergrundinhalten sollte auf einem Mindestniveau liegen, um Lesbarkeit sicherzustellen:
        </p>
        <ul>
          <li>
            Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens 4,5:1 haben.
          </li>
          <li>
            Überschrift oder einfach größerer Text sollte ein Verhältnis von mindestens 3:1 haben. Größerer Text ist definiert als mindestens 18pt oder 14pt fett.
          </li>
        </ul>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast"
          >Farbkontrast</a
        > und
        <a
          href="/de/docs/Learn/Accessibility/CSS_and_JavaScript#color_and_color_contrast"
          >Farbe und Farbkontrast</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.4 Text vergrößern (AA)</td>
      <td>
        Die Seite sollte lesbar und nutzbar sein, wenn die Textgröße verdoppelt wird. Das bedeutet, dass Designs ansprechend sein sollten, sodass beim Vergrößern der Textgröße der Inhalt immer noch zugänglich ist.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.5 Textbilder (AA)</td>
      <td>
        Bilder sollten NICHT verwendet werden, um Inhalte darzustellen, wo Text die Aufgabe erledigen könnte. Wenn ein Bild hauptsächlich aus Text besteht, könnte es sowohl mit Text als auch mit Bildern dargestellt werden.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.6 Erhöhter Kontrast (AAA)</td>
      <td>
        <p>Dies folgt auf und baut auf Kriterium 1.4.3 auf.</p>
        <ul>
          <li>
            Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens 7:1 haben.
          </li>
          <li>
            Überschrift oder einfach größerer Text sollte ein Verhältnis von mindestens 4,5:1 haben. Größerer Text ist definiert als mindestens 18pt oder 14pt fett.
          </li>
        </ul>
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn/Accessibility/CSS_and_JavaScript#color_and_color_contrast"
          >Farbe und Farbkontrast</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.7 Wenig oder kein Hintergrundaudio (AAA)</td>
      <td>
        Vorab aufgezeichnete Audiodateien, die hauptsächlich Sprache enthalten, sollten minimale Hintergrundgeräusche haben, damit der Inhalt leicht verständlich ist.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.8 Visuelle Präsentation (AAA)</td>
      <td>
        <p>Für die Präsentation von Textinhalten sollte Folgendes zutreffen:</p>
        <ul>
          <li>Vordergrund- und Hintergrundfarben sollten benutzerdefinierbar sein.</li>
          <li>
            Textblöcke sollten aus maximal 80 Zeichen (oder Glyphen) bestehen, um maximale Lesbarkeit zu gewährleisten.
          </li>
          <li>
            Text sollte nicht vollständig ausgerichtet sein (z. B. <code
              >text-align: justify;</code
            >).
          </li>
          <li>
            Der Zeilenabstand sollte mindestens 1,5-mal so groß wie die Textgröße innerhalb von Absätzen sein (z. B. <code>line-height: 1.5;</code>), und mindestens 2,25-mal so groß wie die Textgröße zwischen Absätzen (z. B. <code
              >padding: 2.25rem;</code
            >).
          </li>
          <li>
            Beim Verdoppeln der Textgröße sollte der Inhalt nicht gescrollt werden müssen.
          </li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.9 Textbilder (Keine Ausnahme) (AAA)</td>
      <td>
        Text sollte nicht als Teil eines Bildes präsentiert werden, es sei denn, es handelt sich ausschließlich um Dekoration (d. h. er vermittelt keinen Inhalt) oder kann auf keine andere Weise präsentiert werden.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        1.4.10 Umbruch (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <ul>
          <li>
            Kein horizontales Scrollen für von links-nach-rechts-Sprachen (wie Englisch) oder von rechts-nach-links-Sprachen (wie Arabisch)
          </li>
          <li>
            Kein vertikales Scrollen für von oben-nach-unten-Sprachen (wie Japanisch)
          </li>
          <li>
            Ausgenommen Teile des Inhalts, die ein zweidimensionales Layout für Nutzung oder Bedeutung erfordern (wie eine große Datentabelle)
          </li>
        </ul>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
          >Umbruch verstehen</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.4.11 Nicht-Text-Kontrast(AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        Minimales Farbkontrastverhältnis von 3:1 für Benutzeroberflächenkomponenten und grafische Objekte.
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
          Es erfolgt kein Verlust an Inhalt oder Funktionalität, wenn die folgenden Stile angewendet werden:
        </p>
        <ul>
          <li>
            Zeilenhöhe (Zeilenabstand) auf mindestens 1,5-mal die Schriftgröße
          </li>
          <li>
            Abstand nach Absätzen auf mindestens das 2-fache der Schriftgröße
          </li>
          <li>
            Buchstabenabstand (Tracking) auf mindestens das 0,12-fache der Schriftgröße
          </li>
          <li>Wortabstand auf mindestens das 0,16-fache der Schriftgröße</li>
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
        1.4.13 Inhalt bei Hover oder Fokus (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          Während zusätzlicher Inhalt erscheinen und verschwinden kann, wenn Hovern und Tastaturfokus verwendet wird, spezifiziert dieses Erfolgskriterium drei Bedingungen, die erfüllt werden müssen:
        </p>
        <ul>
          <li>entfernen lassen (kann geschlossen/entfernt werden)</li>
          <li>
            hoverbar (der zusätzliche Inhalt verschwindet nicht, wenn der Zeiger darüber ist)
          </li>
          <li>
            beständig (der zusätzliche Inhalt verschwindet nicht ohne Benutzeraktion)
          </li>
        </ul>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html"
          >Inhalt bei Hover oder Fokus verstehen</a
        >
      </td>
    </tr>
  </thead>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung zur [Richtlinie 1.4: Unterscheidbar: Es den Benutzern erleichtern, Inhalte zu sehen und zu hören, indem Vordergrund und Hintergrund getrennt werden.](https://www.w3.org/TR/WCAG21/#distinguishable)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG)

  1. Wahrnehmbar
  2. [Bedienbar](/de/docs/Web/Accessibility/Understanding_WCAG/Operable)
  3. [Verständlich](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Understanding_WCAG/Robust)

---
title: Wahrnehmbar
slug: Web/Accessibility/Guides/Understanding_WCAG/Perceivable
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Dieser Artikel bietet praktische Ratschläge dazu, wie Sie Ihre Webinhalte so schreiben, dass sie den Erfolgsrichtlinien entsprechen, die im **Wahrnehmbar**-Prinzip der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 umrissen sind. Wahrnehmbar bedeutet, dass Nutzer in der Lage sein müssen, die Inhalte mit einem oder mehreren ihrer Sinne wahrzunehmen.

> [!NOTE]
> Um die W3C-Definitionen für Wahrnehmbar und dessen Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 1: Wahrnehmbar - Informationen und Benutzeroberflächenkomponenten müssen Nutzern auf eine Weise dargestellt werden, die sie wahrnehmen können.](https://w3c.github.io/wcag/guidelines/22/#perceivable)

## Richtlinie 1.1 — Bereitstellung von Textalternativen für nicht-textuellen Inhalt

Der Schlüssel hier ist, dass Text in andere Formen umgewandelt werden kann, die Menschen mit Behinderungen verwenden können. Beispielsweise kann er von einem Bildschirmleseprogramm gesprochen, in Großdruck umgewandelt oder auf einem Braille-Display dargestellt werden. Nicht-textueller Inhalt bezieht sich auf Multimedia wie Bilder, Audio und Video.

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
        Alle Bilder, die bedeutungsvollen Inhalt enthalten, sollten mit geeigneten
        Alternativtexten versehen werden.
      </td>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives"
          >Textalternativen.</a
        >
      </td>
    </tr>
    <tr>
      <td>
        Komplexe Bilder oder Diagramme sollten über eine zugängliche Alternative
        verfügen, entweder auf derselben Seite oder über einen Link. Verwenden Sie
        einen regulären Link anstelle eines <code>longdesc</code>-Attributs.
      </td>
      <td>
        <p>
          Eine Textbeschreibung kann funktionieren, oder eine zugängliche Datentabelle (siehe
          <a href="/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility"
            >HTML-Tabellenzugänglichkeit</a
          >). Siehe W3C's
          <a href="https://www.w3.org/TR/html-longdesc/">Image Description Extension (longdesc)</a>
          für das Argument gegen <code>longdesc</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Multimediainhalte (d.h. Audio oder Video) sollten zumindest über eine
        beschreibende Identifikation verfügen, wie eine Untertitelung oder Ähnliches.
      </td>
      <td>
        <p>
          Siehe <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          >
          für statische Untertitelungsoptionen, und
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
        UI-Steuerelemente wie Formularelemente und Schaltflächen sollten Textlabels haben,
        die ihren Zweck beschreiben.
      </td>
      <td>
        Schaltflächen sind einfach—Sie sollten sicherstellen, dass der Schaltflächentext die
        Funktion der Schaltfläche beschreibt (z.B. <code
          >&#x3C;button>Bild hochladen&#x3C;/button></code
        >). Für weitere Informationen zu anderen UI-Steuerelementen siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie semantische UI-Steuerelemente, wo möglich</a
        >.
      </td>
    </tr>
    <tr>
      <td>
        Implementieren Sie dekorative (nicht-inhaltliche) Bilder, Videos usw. auf eine Weise, die
        für unterstützende Technologien unsichtbar ist, um Verwirrung bei den Nutzern zu vermeiden.
      </td>
      <td>
        <p>
          Dekorative Bilder sollten mit CSS-Hintergrundbildern implementiert werden (siehe
          <a
            href="/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders"
            >Hintergründe und Rahmen</a
          >). Wenn Sie ein Bild über ein
          {{htmlelement("img")}}-Element einfügen müssen, geben Sie ihm einen leeren alt-Text
          (<code>alt=""</code>). Andernfalls versuchen Screenreader möglicherweise, den Dateipfad
          usw. vorzulesen.
        </p>
        <p>
          Wenn Sie Hintergrundvideo oder -audio einfügen, das automatisch abgespielt wird,
          stellen Sie sicher, dass es so unauffällig wie möglich ist. Vermeiden Sie, es wie
          Inhalt aussehen/klingen zu lassen, und bieten Sie eine Steuerung an, es auszuschalten.
          Idealerweise sollten Sie es überhaupt nicht einfügen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die [WCAG-Beschreibung für Richtlinie 1.1: Textalternativen](https://w3c.github.io/wcag/guidelines/22/#text-alternatives).

## Richtlinie 1.2 — Bereitstellung von Textalternativen für zeitbasierte Medien

Zeitbasierte Medien beziehen sich auf Multimedia mit einer Dauer, wie Audio- und Videoinhalte. Beachten Sie, dass, wenn die Audio/Video Inhalte als Alternative zu bestehenden Textinhalten dienen, Sie keine weitere Textalternative bereitstellen müssen.

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
       <td>1.2.1 Alternativen für vorab aufgezeichnete Audio- und Video-Only-Inhalte bereitstellen (A)</td>
       <td>Für vorab aufgezeichnete Audio-Only-Medien sollte ein Transkript bereitgestellt werden, und für vorab aufgezeichnete Video-Only-Medien (d.h. stummes Video) sollte ein Transkript oder eine Audiobeschreibung bereitgestellt werden.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Transkriptinformationen. Es gibt noch keine Audiobeschreibung-Tutorial.</td>
    </tr>
    <tr>
       <td>1.2.2 Bereitstellung von Untertiteln für webbasierte Videos (A)</td>
       <td>Sie sollten Untertitel für im Web präsentierte Videos (z.B. HTML-Video) bereitstellen. Dies kommt Personen zugute, die den Audioteil des Videos nicht hören können.</td>
       <td>Siehe <a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#video_text_tracks">Video-Textspuren</a> für HTML-Video-Untertitel. Siehe auch <a href="https://support.google.com/youtube/answer/2734796?hl=en">Hinzufügen eigener Untertitel & geschlossener Untertitel</a> (YouTube).</td>
    </tr>
    <tr>
       <td>1.2.3 Texttranskript oder Audiobeschreibung für webbasierte Videos bereitstellen (A)</td>
       <td>Sie sollten Texttranskripte oder Audiobeschreibungen für im Web präsentierte Videos bereitstellen (z.B. HTML-Video). Dies kommt Personen zugute, die den visuellen Teil des Videos nicht sehen können und den vollen Inhalt nicht allein aus dem Audio erhalten.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Transkriptinformationen. Es gibt noch kein Audiobeschreibung-Tutorial.</td>
    </tr>
    <tr>
       <td>1.2.4 Bereitstellung von Untertiteln für Live-Audio (AA)</td>
       <td>Sie sollten synchronisierte Untertitel für alle Live-Multimedia bereitstellen, die Audio enthalten (z.B. Videokonferenzen, Live-Audio-Übertragungen).</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.5 Bereitstellung von Audiobeschreibungen für vorab aufgezeichnete Videos (AA)</td>
       <td>Audiobeschreibungen sollten für vorab aufgezeichnete Videos bereitgestellt werden, jedoch nur, wenn das vorhandene Audio nicht die volle Bedeutung des Videos vermittelt.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.6 Bereitstellung einer Gebärdensprache-Äquivalenz für vorab aufgezeichnetes Audio (AAA)</td>
       <td>Ein gleichwertiges Gebärdensprachenvideo sollte für alle vorab aufgezeichneten Inhalte bereitgestellt werden, die Audio enthalten.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.7 Bereitstellung eines erweiterten Videos mit Audiobeschreibungen (AAA)</td>
       <td>Wo Audiobeschreibungen nicht bereitgestellt werden können (siehe 1.2.5) aufgrund von Timing-Problemen im Video (z.B. es gibt keine geeigneten Pausen im Inhalt, um die Audiobeschreibungen einzufügen), sollte eine alternative Version des Videos bereitgestellt werden, die eingefügte Pausen (und Audiobeschreibungen) enthält.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.8 Bereitstellung einer Alternative für vorab aufgezeichnete Medien (AAA)</td>
       <td>Für alle Inhalte, die Video enthalten, sollte ein beschreibendes Texttranskript bereitgestellt werden, zum Beispiel ein Drehbuch des Films, den Sie ansehen. Dies kommt hörgeschädigten Zuschauern zugute, die den Inhalt nicht hören können.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Transkriptinformationen.</td>
    </tr>
    <tr>
       <td>1.2.9 Bereitstellung eines Transkripts für Live-Audio (AAA)</td>
       <td>Für alle Live-Audi-Inhalte, die gesendet werden, sollte ein beschreibender Text bereitgestellt werden, zum Beispiel ein Drehbuch des Stücks oder Musicals, das Sie hören. Dies kommt hörgeschädigten Zuschauern zugute, die den Inhalt nicht hören können.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Transkriptinformationen.</td>
    </tr>
 </tbody>
</table>

> [!NOTE]
> Siehe auch die [WCAG-Beschreibung für Richtlinie 1.2: Zeitbasierte Medien: Alternativen für zeitbasierte Medien bereitstellen](https://w3c.github.io/wcag/guidelines/22/#time-based-media).

## Richtlinie 1.3 — Erstellen Sie Inhalte, die auf verschiedene Weise präsentiert werden können

Diese Richtlinie bezieht sich auf die Fähigkeit der Inhalte, von Nutzern auf vielfältige Weise konsumiert zu werden, um ihren unterschiedlichen Bedürfnissen entgegenzukommen.

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
          Jegliche Inhaltsstruktur—oder visuelle Beziehung zwischen Inhalten—kann
          auch programmatisch bestimmt werden, oder aus der Textbeschreibung abgeleitet werden. Die Hauptsituationen, in denen dies relevant ist, sind:
        </p>
        <ul>
          <li>
            Text Labels und die Formular-Elemente, die sie beschreiben. Diese sind
            eindeutig mit dem {{htmlelement("label")}}-Element verbunden, welches von Screenreadern, usw. erkannt werden kann.
          </li>
          <li>
            Bild-alt-Text. Inhaltsbilder sollten über Text verfügen, der
            den Bildinhalt deutlich beschreibt und programmatisch damit verbunden werden kann (z.B. alt-Text) oder anderweitig leicht zuzuordnen ist (z.B. es beschreibt das Bild und befindet sich direkt daneben). Dies sollte bedeuten, dass die vollständige Bedeutung auch dann noch verstanden werden kann, wenn man das Bild nicht sehen kann.
          </li>
          <li>
            Listen. Wenn die Reihenfolge der Listenelemente wichtig ist, verwenden Sie eine geordnete Liste ({{htmlelement("ol")}}).
          </li>
        </ul>
      </td>
      <td>
        Der gesamte
        <p>
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML"
            >HTML: Eine gute Grundlage für Barrierefreiheit</a
          >
          ist mit Informationen darüber gefüllt, aber Sie sollten besonders
          darauf achten
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#good_semantics"
            >Gute Semantik</a
          >,
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
            >Verwenden Sie semantische UI-Steuerelemente, wo möglich</a
          >, und
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>1.3.2 Sinnvolle Inhaltsreihenfolge (A)</td>
      <td>
        Eine sinnvolle, logische Lesereihenfolge sollte für alle Inhalte leicht erkennbar sein, auch wenn sie auf ungewöhnliche Weise visuell dargestellt werden. Die Reihenfolge sollte durch die Verwendung der richtigen semantischen Elemente (z.B. Überschriften, Absätze) deutlich gemacht werden, wobei CSS verwendet wird, um ungewöhnliche Layoutstile zu erstellen, unabhängig von der Markup-Sprache.
      </td>
      <td>
        Auch hier, beachten Sie
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML"
          >HTML: Eine gute Grundlage für Barrierefreiheit</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.3.3 Sensorische Merkmale (A)</td>
      <td>
        <p>
          Anweisungen zur Bedienung von Steuerelementen oder zum Verständnis von Inhalten beruhen nicht auf einem einzigen Sinn. Dies kann sich als unzugänglich für Menschen erweisen, die eine Behinderung im Zusammenhang mit diesem Sinn haben, oder für Geräte, die diesen Sinn nicht unterstützen. Zum Beispiel:
        </p>
        <ul>
          <li>
            "Klicken Sie auf die runde Schaltfläche, um fortzufahren"<br />Die Schaltfläche sollte klar beschriftet sein, sodass offensichtlich ist, dass es sich um die Schaltfläche handelt, die Sie drücken müssen. Wenn es mehrere Schaltflächen gibt, stellen Sie sicher, dass alle klar beschriftet sind, um deren Funktion zu unterscheiden.
          </li>
          <li>
            "Hören Sie sich die Audioanweisungen zur Orientierung an"<br />Das ist offensichtlich problematisch—Audio wird für Menschen mit Hörbeeinträchtigungen unzugänglich, während Text gelesen werden kann und, falls erforderlich, auch von einem Screenreader gesprochen werden kann.
          </li>
          <li>
            "Wischen Sie von der rechten Seite des Bildschirms, um das Menü anzuzeigen"<br />Einige Nutzer können möglicherweise nicht über den Bildschirm wischen, entweder aufgrund einer Behinderung oder weil ihr Gerät keine Berührung unterstützt. Eine Alternative sollte bereitgestellt werden, wie eine Tastenkombination oder eine Schaltfläche, die über eine Tastatur oder andere Mittel aktiviert werden kann.
          </li>
        </ul>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Übermittlung von Anweisungen allein durch Farbe ist damit verwandt, jedoch in einer anderen Richtlinie behandelt — 1.4.1.
          </p>
        </div>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        1.3.4 Orientierung (AA)
      </td>
      <td>
        Inhalt beschränkt seine Ansicht und Bedienung nicht auf eine einzelne Anzeigeorientierung, wie Hoch- oder Querformat, es sei denn, eine spezifische Anzeigeorientierung ist wesentlich.
      </td>
      <td>
        <p>
          <a href="https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
            >Verständnis der Orientierung</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        1.3.5 Eingabefunktion identifizieren (AA)
      </td>
      <td>
        <p>
          Folgen Sie der Liste von
          <a href="https://w3c.github.io/wcag/guidelines/22/#input-purposes"
            >53 Eingabefeldern</a
          >
          zur programmatischen Identifizierung des Zwecks eines Feldes.
        </p>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html"
          >Verständnis der Identifizierung des Eingabezwecks</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.3.6 Zweck identifizieren (AAA)
      </td>
      <td>
        In Inhalten, die mit Auszeichnungssprachen implementiert sind, kann der Zweck von Benutzeroberflächenkomponenten, Symbolen und Bereichen programmatisch bestimmt werden.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html"
          >Verständnis des Identifizierens des Zwecks</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 1.3: Anpassbar: Erstellen Sie Inhalte, die auf unterschiedliche Weise präsentiert werden können, ohne Informationen oder Struktur zu verlieren.](https://w3c.github.io/wcag/guidelines/22/#adaptable)

## Richtlinie 1.4: Machen Sie es Benutzern leichter, Inhalte zu sehen und zu hören, einschließlich der Trennung von Vorder- und Hintergrund

Diese Richtlinie bezieht sich darauf, sicherzustellen, dass Kerninhalte von Hintergründen und anderen Verzierungen deutlich zu unterscheiden sind. Das klassische Beispiel ist Farbe (sowohl [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) als auch [Verwendung von Farbe](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Use_of_color) zur Übermittlung von Anweisungen), aber sie gilt auch in anderen Situationen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie man den Kriterien entspricht</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
    <tr>
      <td>1.4.1 Verwendung von Farbe (A)</td>
      <td>
        <p>
          Farbe sollte nicht ausschließlich verwendet werden, um Informationen zu übermitteln. Zum Beispiel sollten in Formularen Pflichtfelder niemals nur mit einer Farbe markiert werden (wie Rot). Stattdessen (oder auch) wäre etwas wie ein Sternchen mit einem "erforderlich"-Label angemessener.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Use_of_color"
          >Verwendung von Farbe</a
        >,
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast"
          >Farbe und Farbkontrast</a
        >,
        und
        <a
          href="/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#multiple_labels"
          >Mehrfache Labels</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.2 Audio-Steuerelemente (A)</td>
      <td>
        Für jedes Audio, das länger als drei Sekunden spielt, bieten Sie zugängliche Steuerelemente zum Abspielen und Anhalten des Audios/Videos sowie zum Stummschalten/Anpassen der Lautstärke.
      </td>
      <td>
        Verwenden Sie native <code>&lt;button&gt;</code>s, um zugängliche Tastatursteuerungen bereitzustellen, wie in
        <a
          href="/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics"
          >Grundlagen des Videoplayer-Stylings</a
        > gezeigt.
      </td>
    </tr>
    <tr>
      <td>1.4.3 Mindestkontrast (AA)</td>
      <td>
        <p>
          Der Farbkontrast zwischen Hintergrund und Vordergrundinhalt sollte mindestens ein bestimmtes Minimum erreichen, um die Lesbarkeit zu gewährleisten:
        </p>
        <ul>
          <li>
            Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens 4.5:1 haben.
          </li>
          <li>
            Überschriften- (oder einfach größere) Texte sollten ein Verhältnis von mindestens 3:1 haben. Größerer Text ist definiert als mindestens 18pt oder 14pt fett.
          </li>
        </ul>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast"
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
        Die Seite sollte lesbar und benutzbar sein, wenn die Textgröße verdoppelt wird. Dies bedeutet, dass Designs responsiv sein sollten, sodass bei erhöhter Schriftgröße der Inhalt dennoch zugänglich ist.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.5 Bilder von Text (AA)</td>
      <td>
        Bilder sollten NICHT verwendet werden, um Inhalte zu präsentieren, wenn Text die Aufgabe erledigen würde. Wenn ein Bild überwiegend textuell ist, könnte es auch mit Text zusammen mit Bildern dargestellt werden.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.6 Verstärkter Kontrast (AAA)</td>
      <td>
        <p>Dies folgt auf und baut auf Kriterium 1.4.3 auf.</p>
        <ul>
          <li>
            Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens 7:1 haben.
          </li>
          <li>
            Überschriften- (oder einfach größere) Texte sollten ein Verhältnis von mindestens 4.5:1 haben. Größerer Text ist definiert als mindestens 18pt oder 14pt fett.
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
      <td>1.4.7 Niedriger oder kein Hintergrundaudio (AAA)</td>
      <td>
        Voraufgezeichnete Audiodaten, die hauptsächlich Sprachinhalte enthalten, sollten minimale Hintergrundgeräusche haben, damit der Inhalt leicht verständlich ist.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.8 Visuelle Darstellung (AAA)</td>
      <td>
        <p>Für die Präsentation von Textinhalten sollte Folgendes gelten:</p>
        <ul>
          <li>Vordergrund- und Hintergrundfarben sollten vom Benutzer wählbar sein.</li>
          <li>
            Textblöcke sollten nicht breiter als 80 Zeichen (oder Glyphen) sein, um maximale Lesbarkeit zu gewährleisten.
          </li>
          <li>
            Text sollte nicht vollständig gerechtfertigt sein (z.B. <code
              >text-align: justify;</code
            >).
          </li>
          <li>
            Der Zeilenabstand sollte mindestens 1,5-mal so groß sein wie die Textgröße innerhalb von Absätzen (z.B. <code>line-height: 1.5;</code>), und mindestens 2,25-mal so groß zwischen den Absätzen (z.B. <code
              >padding: 2.25rem;</code
            >).
          </li>
          <li>
            Wenn die Textgröße verdoppelt wird, sollte der Inhalt nicht gescrollt werden müssen.
          </li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.9 Bilder von Text (Keine Ausnahme) (AAA)</td>
      <td>
        Text sollte nicht als Teil eines Bildes präsentiert werden, es sei denn, es ist rein dekorativ (d.h. es vermittelt keinen Inhalt) oder kann in keiner anderen Weise präsentiert werden.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        1.4.10 Umfluss (AA)
      </td>
      <td>
        <ul>
          <li>
            Kein horizontales Scrollen für Links-nach-Rechts-Sprachen (wie Englisch)
            oder Rechts-nach-Links-Sprachen (wie Arabisch)
          </li>
          <li>
            Kein vertikales Scrollen für Oben-nach-Unten-Sprachen (wie Japanisch)
          </li>
          <li>
            Ausgenommen für Teile des Inhalts, die für die Nutzung oder Bedeutung eine zweidimensionale Anordnung erfordern (wie eine große Datentabelle)
          </li>
        </ul>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
          >Verständnis des Umflusses</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.4.11 Nicht-Text-Kontrast (AA)
      </td>
      <td>
        Mindestfarbe Kontrastverhältnis von 3:1 für Benutzeroberflächenkomponenten und
        grafische Objekte.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"
          >Verständnis des Nicht-Text-Kontrasts</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.4.12 Textabstand (AA)
      </td>
      <td>
        <p>
          Kein Verlust von Inhalten oder Funktionalität tritt auf, wenn die folgenden Stile
          angewendet werden:
        </p>
        <ul>
          <li>
            Zeilenhöhe (Zeilenabstand) mindestens 1,5-mal so groß wie die Schriftgröße
          </li>
          <li>
            Abstand nach Absätzen mindestens 2-mal so groß wie die Schriftgröße
          </li>
          <li>
            Buchstabenabstand mindestens 0,12-mal so groß wie die Schriftgröße
          </li>
          <li>Wortabstand mindestens 0,16-mal so groß wie die Schriftgröße</li>
        </ul>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
          >Verständnis des Textabstands</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.4.13 Inhalt bei Hover oder Fokus (AA)
      </td>
      <td>
        <p>
          Während zusätzlicher Inhalt in Koordination mit Hover und Tastaturfokus erscheinen und verschwinden kann, spezifiziert dieses Erfolgskriterium drei Bedingungen, die erfüllt werden müssen:
        </p>
        <ul>
          <li>entfernbar (kann geschlossen/entfernt werden)</li>
          <li>
            hoverfähig (der zusätzliche Inhalt verschwindet nicht, wenn der
            Zeiger darüber ist)
          </li>
          <li>
            beständig (der zusätzliche Inhalt verschwindet nicht ohne Nutzeraktion)
          </li>
        </ul>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html"
          >Verständnis von Inhalt bei Hover oder Fokus</a
        >
      </td>
    </tr>
  </thead>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 1.4: Unterscheidbar: Machen Sie es Benutzern leichter, Inhalte zu sehen und zu hören, einschließlich der Trennung von Vorder- und Hintergrund.](https://w3c.github.io/wcag/guidelines/22/#distinguishable)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
  1. Wahrnehmbar
  2. [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  3. [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

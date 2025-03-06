---
title: Wahrnehmbar
slug: Web/Accessibility/Guides/Understanding_WCAG/Perceivable
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so gestalten, dass sie den Erfolgskriterien entsprechen, die im **Wahrnehmbaren** Prinzip der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 aufgeführt sind. Wahrnehmbar bedeutet, dass Nutzer die Inhalte in irgendeiner Weise mit einem oder mehreren ihrer Sinne wahrnehmen können müssen.

> [!NOTE]
> Um die W3C-Definitionen für Wahrnehmbar und dessen Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 1: Wahrnehmbar - Informationen und Benutzeroberflächenkomponenten müssen den Nutzern auf eine Weise präsentiert werden, die sie wahrnehmen können.](https://www.w3.org/TR/WCAG21/#perceivable)

## Richtlinie 1.1 — Bereitstellung von Textalternativen für Nicht-Text-Inhalte

Der Schlüssel hier ist, dass Text in andere Formen umgewandelt werden kann, die Menschen mit Behinderungen nutzen können. Zum Beispiel kann er von einem Screenreader vorgelesen, in Großdruck konvertiert oder auf einem Brailledisplay dargestellt werden. Nicht-Text-Inhalte beziehen sich auf Multimedia wie Bilder, Audio und Video.

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
        Alle Bilder, die bedeutungsvolle Inhalte vermitteln, sollten mit
        geeigneten alternativen Texten versehen werden.
      </td>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives"
          >Textalternativen.</a
        >
      </td>
    </tr>
    <tr>
      <td>
        Komplexe Bilder oder Diagramme sollten eine zugängliche Alternative
        haben, entweder auf derselben Seite oder über einen Link. Verwenden Sie
        einen normalen Link anstelle eines <code>longdesc</code>-Attributes.
      </td>
      <td>
        <p>
          Eine Textbeschreibung kann funktionieren, oder eine zugängliche
          Datentabelle (siehe
          <a href="Learn_web_development/Core/Structuring_content/Table_accessibility"
            >HTML-Tabellenzugänglichkeit</a
          >). Siehe W3Cs
          <a href="https://www.w3.org/TR/html-longdesc/">Image Description Extension (longdesc)</a>
          für die Argumentation gegen <code>longdesc</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Multimediainhalte (d.h. Audio oder Video) sollten zumindest eine
        beschreibende Identifikation wie eine Untertitelung oder ähnliches
        haben.
      </td>
      <td>
        <p>
          Siehe <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          >
          für statische Untertitel-Optionen, und
          <a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts"
            >Audioabschriften</a
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
        UI-Kontrollen wie Formularelemente und Schaltflächen sollten Textetiketten
        haben, die ihren Zweck beschreiben.
      </td>
      <td>
        Schaltflächen sind einfach - Sie sollten sicherstellen, dass der
        Schaltflächentext die Funktion der Schaltfläche beschreibt (z.B., <code
          >&#x3C;button>Upload image&#x3C;/button></code
        >). Für weitere Informationen zu anderen UI-Kontrollen, siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI-Kontrollen</a
        >.
      </td>
    </tr>
    <tr>
      <td>
        Implementieren Sie dekorative (nicht-inhaltliche) Bilder, Video usw., auf
        eine Weise, die für unterstützende Technologien unsichtbar ist, damit sie
        die Nutzer nicht verwirren.
      </td>
      <td>
        <p>
          Dekorative Bilder sollten mit CSS-Hintergrundbildern implementiert werden
          (siehe
          <a
            href="/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders"
            >Hintergründe und Umrandungen</a
          >). Wenn Sie ein Bild über ein
          {{htmlelement("img")}}-Element einfügen müssen, geben Sie ihm einen
          leeren alt-Attributwert (<code>alt=""</code>). Andernfalls können
          Screenreader versuchen, den Dateipfad usw. vorzulesen.
        </p>
        <p>
          Wenn Sie Hintergrundvideo oder -audio hinzufügen, das automatisch
          abgespielt wird, machen Sie es so unauffällig wie möglich. Lassen Sie es
          nicht wie Inhalt aussehen/klingen und bieten Sie eine Steuerung an, um es
          auszuschalten. Ideal wäre es, es überhaupt nicht einzubinden.
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die [WCAG-Beschreibung für Richtlinie 1.1: Textalternativen](https://www.w3.org/TR/WCAG21/#text-alternatives).

## Richtlinie 1.2 — Bereitstellung von Textalternativen für zeitbasierte Medien

Zeitbasierte Medien beziehen sich auf Multimedia mit einer Dauer, wie Audio und Video. Beachten Sie, dass wenn das Audio/Video als Alternative zu vorhandenen Textinhalten dient, Sie keine weitere Textalternative bereitstellen müssen.

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
       <td>1.2.1 Alternativen für vorab aufgezeichnete Audio- und Videoinhalte bereitstellen (A)</td>
       <td>Für vorab aufgezeichnete Audioinhalte sollte eine Abschrift bereitgestellt werden, und für vorab aufgezeichnete Videoinhalte (d.h. stummes Video) sollte eine Abschrift oder eine Audiobeschreibung bereitgestellt werden.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audioabschriften</a> für Informationen zu Abschriften. Ein Tutorial zur Audiobeschreibung ist noch nicht verfügbar.</td>
    </tr>
    <tr>
       <td>1.2.2 Untertitelung für webbasierte Videos bereitstellen (A)</td>
       <td>Sie sollten Untertitel für Videos bereitstellen, die im Web präsentiert werden (z.B. HTML-Video). Dies ist für Personen, die den Audioanteil des Videos nicht hören können.</td>
       <td>Siehe <a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#video_text_tracks">Video-Textspuren</a> für HTML-Video-Untertitel. Siehe auch <a href="https://support.google.com/youtube/answer/2734796?hl=en">Fügen Sie Ihre eigenen Untertitel &amp; Closed Captions hinzu</a> (YouTube).</td>
    </tr>
    <tr>
       <td>1.2.3 Textabschrift oder Audiobeschreibung für webbasierte Videos bereitstellen (A)</td>
       <td>Sie sollten Textabschriften oder Audiobeschreibungen für Videos bereitstellen, die im Web präsentiert werden (z.B. HTML-Video). Dies ist für den Nutzen von Menschen, die den visuellen Teil des Videos nicht sehen können und den vollständigen Inhalt nicht nur über das Audio erhalten.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audioabschriften</a> für Informationen zu Abschriften. Ein Tutorial zur Audiobeschreibung ist noch nicht verfügbar.</td>
    </tr>
    <tr>
       <td>1.2.4 Untertitel für Live-Audio bereitstellen (AA)</td>
       <td>Sie sollten synchronisierte Untertitel für alle Live-Multimediainhalte bereitstellen, die Audio enthalten (z.B. Videokonferenzen, Live-Audioübertragungen).</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.5 Audiobeschreibungen für vorab aufgezeichnete Videos bereitstellen (AA)</td>
       <td>Audiobeschreibungen sollten für vorab aufgezeichnete Videos bereitgestellt werden, jedoch nur, wenn das vorhandene Audio nicht die vollständige Bedeutung des Videos vermittelt.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.6 Gebärdensprachäquivalent zu vorab aufgezeichneten Audios bereitstellen (AAA)</td>
       <td>Ein äquivalentes Gebärdensprachvideo sollte für jeden vorab aufgezeichneten Inhalt bereitgestellt werden, der Audio enthält.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.7 Erweitertes Video mit Audiobeschreibungen bereitstellen (AAA)</td>
       <td>Wo Audiobeschreibungen aufgrund von Video-Timing-Problemen nicht bereitgestellt werden können (siehe 1.2.5) (z.B. gibt es keine geeigneten Pausen im Inhalt, um die Audiobeschreibungen einzufügen), sollte eine alternative Version des Videos bereitgestellt werden, die eingefügte Pausen und Audiobeschreibungen enthält.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.8 Alternative für vorab aufgezeichnete Medien bereitstellen (AAA)</td>
       <td>Für alle Inhalte, die Videos enthalten, sollte eine beschreibende Textabschrift bereitgestellt werden, beispielsweise ein Skript des Films, den Sie sehen. Dies ist für den Nutzen von hörgeschädigten Zuschauern, die den Inhalt nicht hören können.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audioabschriften</a> für Informationen zu Abschriften.</td>
    </tr>
    <tr>
       <td>1.2.9 Abschrift für Live-Audio bereitstellen (AAA)</td>
       <td>Für alle Live-Audioinhalte, die übertragen werden, sollte eine beschreibende Abschrift bereitgestellt werden, z.B. ein Skript des Stückes oder Musicals, das Sie hören. Dies ist für den Nutzen von hörgeschädigten Zuschauern, die den Inhalt nicht hören können.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audioabschriften</a> für Informationen zu Abschriften.</td>
    </tr>
 </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 1.2: Zeitbasierte Medien: Alternativen für zeitbasierte Medien bereitstellen](https://www.w3.org/TR/WCAG21/#time-based-media).

## Richtlinie 1.3 — Erstellen Sie Inhalte, die auf verschiedene Arten präsentiert werden können

Diese Richtlinie bezieht sich auf die Fähigkeit, Inhalte auf verschiedene Arten wahrnehmen zu können, um den unterschiedlichen Bedürfnissen der Nutzer gerecht zu werden.

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
          Jede Inhaltsstruktur oder visuelle Beziehung zwischen Inhalten kann
          auch programmatisch bestimmt oder aus einer Textbeschreibung
          abgeleitet werden. Die Hauptsituationen, in denen dies relevant ist,
          sind:
        </p>
        <ul>
          <li>
            Textetiketten und die Formularelemente, die sie beschreiben. Diese
            sind eindeutig mit dem {{htmlelement("label")}}-Element
            verknüpft, das z.B. von Screenreadern erkannt werden kann.
          </li>
          <li>
            Bild-Alt-Text. Inhaltsbilder sollten Text haben, der den Inhalt des
            Bildes klar beschreibt und programmatisch damit verknüpft ist
            (z.B. Alt-Text) oder leicht damit verknüpft werden kann (z.B.
            beschreibend und direkt neben dem Bild platziert). Dies sollte
            bedeuten, dass die vollständige Bedeutung auch dann verstanden
            werden kann, wenn man das Bild nicht sieht.
          </li>
          <li>
            Listen. Wenn die Reihenfolge der Listenelemente wichtig ist,
            verwenden Sie eine geordnete Liste ({{htmlelement("ol")}}).
          </li>
        </ul>
      </td>
      <td>
        Der gesamte
        <p>
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML"
            >HTML: Eine gute Basis für Barrierefreiheit</a
          >
          ist voll mit Informationen darüber, aber Sie sollten
          besonders auf
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#good_semantics"
            >Gute Semantik</a
          >,
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
            >UI-Kontrollen</a
          >, und
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          >
          verweisen.
        </p>
      </td>
    </tr>
    <tr>
      <td>1.3.2 Sinnvolle Inhaltsreihenfolge (A)</td>
      <td>
        Eine sinnvolle, logische Lesereihenfolge sollte für jeden Inhalt
        leicht zu bestimmen sein, auch wenn er visuell ungewöhnlich
        präsentiert wird. Die Reihenfolge sollte durch den Einsatz
        korrekter semantischer Elemente (z.B. Überschriften, Absätze)
        offensichtlich sein, wobei CSS verwendet wird, um
        ungewöhnliche Layoutstile zu erstellen, unabhängig vom Markup.
      </td>
      <td>
        Wiederum siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML"
          >HTML: Eine gute Basis für Barrierefreiheit</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.3.3 Sensorische Eigenschaften (A)</td>
      <td>
        <p>
          Anweisungen zum Bedienen von Kontrollen oder Verstehen von
          Inhalten sollten nicht von einem einzigen Sinn abhängen. Dies
          könnte für Menschen mit Behinderungen in Bezug auf diesen Sinn
          oder Geräte, die diesen Sinn nicht unterstützen, unzugänglich
          sein. Zum Beispiel:
        </p>
        <ul>
          <li>
            "Klicken Sie auf den runden Knopf, um fortzufahren"<br />Der
            Knopf sollte klar beschriftet sein, damit offensichtlich ist,
            dass er der Knopf ist, den Sie drücken müssen. Wenn es
            mehrere Knöpfe gibt, stellen Sie sicher, dass sie alle klar
            beschriftet sind, um ihre Funktion zu unterscheiden.
          </li>
          <li>
            "Hören Sie sich die Audioanweisungen für Anleitungen an"<br />Dies
            ist offensichtlich problematisch - Audio ist für Menschen mit
            Hörbehinderungen unzugänglich, während Text gelesen, aber auch
            von einem Screenreader vorgelesen werden kann.
          </li>
          <li>
            "Wischen Sie vom rechten Bildschirmrand, um das Menü anzuzeigen"<br />Einige
            Benutzer können möglicherweise nicht über den Bildschirm wischen,
            entweder aufgrund von Behinderung oder weil ihr Gerät keine
            Touchunterstützung hat. Eine Alternative sollte angeboten werden,
            wie eine Tastenkombination oder eine Schaltfläche, die über eine
            Tastatur oder andere Mittel aktiviert werden kann.
          </li>
        </ul>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Anweisungen ausschließlich durch
            Farben zu vermitteln, ist damit verwandt, aber
            wird in einer anderen Richtlinie behandelt — 1.4.1.
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
        Inhalte schränken ihre Ansicht und Bedienung nicht auf eine einzige
        Anzeigeorientierung wie Hoch- oder Querformat ein, es sei denn,
        eine spezifische Anzeigeorientierung ist essentiell.
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
        1.3.5 Eingabepurpose identifizieren (AA) <em
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
          >Verständnis von Eingabepurpose identifizieren</a
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
        In Inhalten, die mit Markup-Sprachen implementiert sind, kann der
        Zweck von Benutzeroberflächenkomponenten, Symbolen und Regionen
        programmatisch bestimmt werden.
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
> Siehe auch die WCAG-Beschreibung für [Richtlinie 1.3: Anpassbar: Erstellen von Inhalten, die auf verschiedene Arten präsentiert werden können, ohne Informationen oder Struktur zu verlieren.](https://www.w3.org/TR/WCAG21/#adaptable)

## Richtlinie 1.4: Es Benutzern erleichtern, Inhalte zu sehen und zu hören, einschließlich der Trennung von Vordergrund und Hintergrund

Diese Richtlinie bezieht sich darauf, sicherzustellen, dass Kerninhalte leicht von Hintergründen und anderen Dekorationen zu unterscheiden sind. Das klassische Beispiel ist Farbe (sowohl [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) als auch [Verwendung von Farbe](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Use_of_color), um Anweisungen zu übermitteln), aber dies trifft auch in anderen Situationen zu.

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
          Farbe sollte nicht allein verwendet werden, um Information zu
          übermitteln. Beispielsweise sollten in Formularen erforderliche
          Felder nie nur mit einer Farbe (wie Rot) markiert werden. Stattdessen
          (oder zusätzlich) wäre etwas wie ein Sternchen mit einem
          "erforderlich"-Etikett angemessener.
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
      <td>1.4.2 Audiosteuerungen (A)</td>
      <td>
        Für alle Audios, die länger als drei Sekunden gespielt werden, bieten
        Sie zugängliche Steuerungen zum Abspielen und Anhalten von
        Audio/Video sowie zum Stummschalten/Anpassen der Lautstärke.
      </td>
      <td>
        Verwenden Sie nativen <code>&lt;button&gt;</code>s, um zugängliche
        Tastatursteuerungen bereitzustellen, wie gezeigt in
        <a
          href="/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics"
          >Grundlagen des Videoplayerstylings</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.3 Mindestkontrast (AA)</td>
      <td>
        <p>
          Der Farbkontrast zwischen Hintergrund- und Vordergrundinhalten
          sollte mindestens folgendem Niveau entsprechen, um die
          Lesbarkeit zu gewährleisten:
        </p>
        <ul>
          <li>
            Text und sein Hintergrund sollten ein Kontrastverhältnis von
            mindestens 4,5:1 haben.
          </li>
          <li>
            Überschrift (oder einfach größerer) Text sollte ein Verhältnis von
            mindestens 3:1 haben. Großer Text ist definiert als mindestens
            18pt oder 14pt fett.
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
      <td>1.4.4 Textvergrößerung (AA)</td>
      <td>
        Die Seite sollte lesbar und verwendbar sein, wenn die Textgröße
        verdoppelt wird. Das bedeutet, dass Designs responsiv sein sollten,
        sodass der Inhalt auch bei vergrößerter Textgröße zugänglich bleibt.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.5 Bilder aus Text (AA)</td>
      <td>
        Bilder sollten NICHT verwendet werden, um Inhalte darzustellen, wo Text
        dieselbe Aufgabe übernehmen könnte. Wenn ein Bild hauptsächlich aus
        Text besteht, sollte es mit Text sowie Bildern dargestellt
        werden.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.6 Erhöhter Kontrast (AAA)</td>
      <td>
        <p>Dies folgt auf und baut auf Kriterium 1.4.3 auf.</p>
        <ul>
          <li>
            Text und sein Hintergrund sollten ein Kontrastverhältnis von
            mindestens 7:1 haben.
          </li>
          <li>
            Überschrift (oder einfach größerer) Text sollte ein Verhältnis von
            mindestens 4,5:1 haben. Großer Text ist definiert als mindestens
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
        Voraufgezeichnete Audioaufnahmen, die hauptsächlich Sprache
        beinhalten, sollten minimales Hintergrundgeräusch haben, damit der
        Inhalt leicht verstanden werden kann.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.8 Visuelle Darstellung (AAA)</td>
      <td>
        <p>Für die Präsentation von Textinhalten sollte Folgendes zutreffen:</p>
        <ul>
          <li>Vordergrund- und Hintergrundfarben sollten benutzerwählbar sein.</li>
          <li>
            Textblöcke sollten nicht breiter sein als 80 Zeichen (oder Glyphen),
            um maximale Lesbarkeit zu gewährleisten.
          </li>
          <li>
            Text sollte nicht vollständig ausgerichtet sein (z.B. <code
              >text-align: justify;</code
            >).
          </li>
          <li>
            Der Zeilenabstand sollte mindestens 1,5-mal so groß sein wie die
            Textgröße innerhalb von Absätzen (z.B. <code>line-height: 1.5;</code>),
            und mindestens 2,25-mal so groß zwischen den Absätzen (z.B. <code
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
      <td>1.4.9 Bilder aus Text (keine Ausnahme) (AAA)</td>
      <td>
        Text sollte nicht als Teil eines Bildes präsentiert werden, es sei denn,
        es handelt sich um reine Dekoration (d.h. es vermittelt keine Inhalte)
        oder kann in keiner anderen Weise dargestellt werden.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        1.4.10 Rückfluss (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <ul>
          <li>
            Kein horizontales Scrollen für von links nach rechts lesende
            Sprachen (wie Englisch) oder von rechts nach links lesende Sprachen
            (wie Arabisch)
          </li>
          <li>
            Kein vertikales Scrollen für von oben nach unten lesende Sprachen
            (wie Japanisch)
          </li>
          <li>
            Mit Ausnahme von Teilen des Inhalts, die ein zweidimensionales
            Layout zur Nutzung oder Bedeutung erfordern (wie eine große
            Datentabelle)
          </li>
        </ul>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
          >Verstehen des Rückflusses</a
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
        Mindestens ein Farbkontrastverhältnis von 3:1 für
        Benutzeroberflächenkomponenten und grafische Objekte.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"
          >Verständnis von Nicht-Text-Kontrast</a
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
          Kein Verlust von Inhalten oder Funktionalitäten tritt auf, wenn
          folgende Stile angewendet werden:
        </p>
        <ul>
          <li>
            Zeilenhöhe (Zeilenabstand) auf mindestens 1,5-mal die
            Schriftgröße
          </li>
          <li>
            Abstand nach Absätzen auf mindestens 2-mal die Schriftgröße
          </li>
          <li>
            Zeichenabstand (Tracking) auf mindestens 0,12-mal die
            Schriftgröße
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
        1.4.13 Inhalt bei Hover oder Fokus (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          Während zusätzlicher Inhalt in Koordination mit Hover und
          Tastaturfokus erscheinen und verschwinden kann, spezifiziert dieses
          Erfolgskriterium drei Bedingungen, die erfüllt sein müssen:
        </p>
        <ul>
          <li>abschließbar (kann geschlossen/entfernt werden)</li>
          <li>
            hoverbar (der zusätzliche Inhalt verschwindet nicht, wenn der
            Zeiger darüber ist)
          </li>
          <li>
            persistent (der zusätzliche Inhalt verschwindet nicht ohne
            Benutzeraktion)
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
> Siehe auch die WCAG-Beschreibung für [Richtlinie 1.4: Unterscheidbar: Es Benutzern erleichtern, Inhalte zu sehen und zu hören, einschließlich der Trennung von Vordergrund und Hintergrund.](https://www.w3.org/TR/WCAG21/#distinguishable)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  1. Wahrnehmbar
  2. [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  3. [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

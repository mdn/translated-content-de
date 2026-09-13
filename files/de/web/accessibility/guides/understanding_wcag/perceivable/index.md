---
title: Wahrnehmbar
slug: Web/Accessibility/Guides/Understanding_WCAG/Perceivable
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

Dieser Artikel liefert praktische Ratschläge, wie Sie Ihre Webinhalte so gestalten können, dass sie den Erfolgskriterien des Prinzips **Wahrnehmbar** der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 entsprechen. Wahrnehmbar bedeutet, dass Nutzer in der Lage sein müssen, die Inhalte auf irgendeine Weise wahrzunehmen, wobei mindestens ein ihrer Sinne genutzt werden kann.

> [!NOTE]
> Um die W3C-Definitionen für Wahrnehmbar und seine Leitlinien und Erfolgskriterien zu lesen, siehe [Prinzip 1: Wahrnehmbar – Informationen und Benutzerschnittstellenelemente müssen in einer Weise dargestellt werden, die Nutzer wahrnehmen können.](https://w3c.github.io/wcag/guidelines/22/#perceivable)

## Leitlinie 1.1 — Bereitstellung von Textalternativen für nicht-textuelle Inhalte

Der Schlüssel hier ist, dass Text in andere Formen umgewandelt werden kann, die Menschen mit Behinderungen nutzen können. Zum Beispiel kann er von einem Screenreader vorgelesen, in Großdruck umgewandelt oder auf einem Brailledisplay dargestellt werden. Nicht-textuelle Inhalte beziehen sich auf Multimedia wie Bilder, Audio und Video.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Konformität mit den Kriterien</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="5">1.1.1 Bereitstellung von Textäquivalenten (A)</td>
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
        einen regulären Link anstelle eines <code>longdesc</code>-Attributs.
      </td>
      <td>
        <p>
          Eine Textbeschreibung kann funktionieren, oder eine zugängliche
          Datentabelle (siehe
          <a href="/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility"
            >HTML-Tabellen-Zugänglichkeit</a
          >). Siehe W3C's
          <a href="https://www.w3.org/TR/html-longdesc/">Image Description Extension (longdesc)</a>
          für das Argument gegen <code>longdesc</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Multimediainhalte (z. B. Audio oder Video) sollten mindestens eine
        beschreibende Kennzeichnung wie Bilduntertitel oder Ähnliches haben.
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
        UI-Kontrollen wie Formularelemente und Schaltflächen sollten
        Beschriftungen haben, die ihren Zweck beschreiben.
      </td>
      <td>
        Bei Schaltflächen sollte sichergestellt sein, dass der Schaltflächentext
        die Funktion der Schaltfläche beschreibt (z. B. <code
          >&#x3C;button>Bild hochladen&#x3C;/button></code
        >). Für weitere Informationen zu anderen UI-Kontrollen siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie semantische UI-Kontrollen, wo möglich</a
        >.
      </td>
    </tr>
    <tr>
      <td>
        Dekorative (nicht-inhaltliche) Bilder, Videos usw. sollten so
        implementiert werden, dass sie für unterstützende Technologien unsichtbar
        sind, um die Benutzer nicht zu verwirren.
      </td>
      <td>
        <p>
          Dekorative Bilder sollten mit CSS-Hintergrundbildern implementiert
          werden (siehe
          <a
            href="/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders"
            >Hintergründe und Rahmen</a
          >). Wenn Sie ein Bild über ein
          {{htmlelement("img")}}-Element einfügen müssen, geben Sie ihm einen leeren
          alt-Text (<code>alt=""</code>). Andernfalls könnten Screenreader
          versuchen, den Dateipfad usw. vorzulesen.
        </p>
        <p>
          Wenn Sie Hintergrundvideos oder -audios einfügen, die automatisch
          wiedergegeben werden, machen Sie sie so unaufdringlich wie möglich.
          Gestalten Sie sie nicht so, dass sie wie Inhalte aussehen/klingen, und
          bieten Sie eine Steuerung zur Deaktivierung an. Ideal wäre, sie gar
          nicht einzubinden.
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die [WCAG-Beschreibung für Leitlinie 1.1: Textalternativen](https://w3c.github.io/wcag/guidelines/22/#text-alternatives).

## Leitlinie 1.2 — Bereitstellung von Textalternativen für zeitbasierte Medien

Zeitbasierte Medien beziehen sich auf Multimedia mit einer Dauer, etwa Audio und Video. Beachten Sie, dass, wenn Audio/Video als Alternative zu bereits vorhandenem Textinhalt dient, Sie keine weitere Textalternative bereitstellen müssen.

<table>
  <thead>
    <tr>
       <th scope="col">Erfolgskriterien</th>
       <th scope="col">Konformität mit den Kriterien</th>
       <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
       <td>1.2.1 Bereitstellung von Alternativen für vorab aufgezeichnete Audio- und Videoinhalte (A)</td>
       <td>Für vorab aufgezeichnete Audioinhalte sollte ein Transkript bereitgestellt werden, und für vorab aufgezeichnete Videoinhalte (z. B. stummes Video) ein Transkript oder eine Audiobeschreibung.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Informationen zu Transkripten. Noch kein Tutorial für Audiobeschreibungen verfügbar.</td>
    </tr>
    <tr>
       <td>1.2.2 Bereitstellung von Untertiteln für webbasierte Videos (A)</td>
       <td>Sie sollten Untertitel für auf dem Web präsentierte Videos (z. B. HTML-Videos) bereitstellen. Dies kommt Menschen zugute, die den Audioteil des Videos nicht hören können.</td>
       <td>Siehe <a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#video_text_tracks">Video-Textspuren</a> für HTML-Video-Untertitel. Siehe auch <a href="https://support.google.com/youtube/answer/2734796?hl=en">Eigene Untertitel hinzufügen</a> (YouTube).</td>
    </tr>
    <tr>
       <td>1.2.3 Bereitstellung eines Texttranskripts oder einer Audiobeschreibung für webbasierte Videos (A)</td>
       <td>Sie sollten Texttranskripte oder Audiobeschreibungen für im Web präsentierte Videos bereitstellen (z. B. HTML-Video). Dies kommt Menschen zugute, die den visuellen Teil des Videos nicht sehen können und den vollständigen Inhalt nicht nur durch Audio erhalten.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Informationen zu Transkripten. Noch kein Tutorial für Audiobeschreibungen verfügbar.</td>
    </tr>
    <tr>
       <td>1.2.4 Bereitstellung von Untertiteln für Live-Audio (AA)</td>
       <td>Sie sollten synchronisierte Untertitel für alle Live-Multimedia, die Audio enthält (z. B. Videokonferenzen, Live-Audiobroadcasts), bereitstellen.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.5 Bereitstellung von Audiobeschreibungen für vorab aufgezeichnete Videos (AA)</td>
       <td>Audiobeschreibungen sollten für vorab aufgezeichnete Videos bereitgestellt werden, jedoch nur, wenn das vorhandene Audio die im Video ausgedrückte vollständige Bedeutung nicht vermittelt.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.6 Bereitstellung eines Gebärdensprachäquivalents für vorab aufgenommenes Audio (AAA)</td>
       <td>Ein äquivalentes Gebärdensprachvideo sollte für alle vorab aufgezeichneten Inhalte, die Audio enthalten, bereitgestellt werden.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.7 Bereitstellung eines erweiterten Videos mit Audiobeschreibungen (AAA)</td>
       <td>Wenn Audiobeschreibungen aufgrund von Videotimingproblemen (z. B. es gibt keine geeigneten Pausen in den Inhalten, um die Audiobeschreibungen einzufügen) nicht bereitgestellt werden können (siehe 1.2.5), sollte eine alternative Version des Videos bereitgestellt werden, die eingefügte Pausen (und Audiobeschreibungen) enthält.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.8 Bereitstellung einer Alternative für vorab aufgezeichnete Medien (AAA)</td>
       <td>Für alle Inhalte, die Videos enthalten, sollte ein beschreibendes Texttranskript bereitgestellt werden, z. B. ein Drehbuch des Films, den Sie sich ansehen. Dies ist zum Vorteil von hörgeschädigten Zuschauern, die den Inhalt nicht hören können.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Transkriptinformationen.</td>
    </tr>
    <tr>
       <td>1.2.9 Bereitstellung eines Transkripts für Live-Audio (AAA)</td>
       <td>Für alle Live-Audioinhalte, die ausgestrahlt werden, sollte ein beschreibender Text bereitgestellt werden, z. B. ein Drehbuch des Stücks oder Musicals, das Sie hören. Dies ist zum Vorteil von hörgeschädigten Zuschauern, die den Inhalt nicht hören können.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Transkriptinformationen.</td>
    </tr>
 </tbody>
</table>

> [!NOTE]
> Siehe auch die [WCAG-Beschreibung für Leitlinie 1.2: Zeitbasierte Medien: Bereitstellung von Alternativen für zeitbasierte Medien](https://w3c.github.io/wcag/guidelines/22/#time-based-media).

## Leitlinie 1.3 — Erstellen von Inhalten, die auf unterschiedliche Weise präsentiert werden können

Diese Leitlinie bezieht sich auf die Fähigkeit, Inhalte auf verschiedene Weisen zu konsumieren, um den unterschiedlichen Bedürfnissen der Benutzer gerecht zu werden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Konformität mit den Kriterien</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
    <tr>
      <td>1.3.1 Informationen und Beziehungen (A)</td>
      <td>
        <p>
          Jede Inhaltsstruktur oder visuelle Beziehung zwischen Inhalten kann
          auch programmgesteuert bestimmt oder aus der Textbeschreibung
          abgeleitet werden. Die Hauptsituationen, in denen dies relevant ist,
          sind:
        </p>
        <ul>
          <li>
            Textbeschriftungen und die Formularelemente, die sie beschreiben.
            Diese sind eindeutig mit dem {{htmlelement("label")}}-Element
            verknüpft, das von Screenreadern usw. erkannt werden kann.
          </li>
          <li>
            Alt-Text für Bilder. Inhaltsbilder sollten über Text verfügen, der
            den Inhalt des Bildes klar beschreibt und programmgesteuert mit
            diesem verknüpft werden kann (z. B. Alt-Text) oder anderweitig
            leicht zuzuordnen ist (z. B. beschreibt es und steht direkt daneben).
            Dies sollte bedeuten, dass die gesamte Bedeutung auch dann
            verstanden werden kann, wenn Sie das Bild nicht sehen können.
          </li>
          <li>
            Listen. Wenn die Reihenfolge der Listenelemente wichtig ist, verwenden Sie eine geordnete Liste ({{htmlelement("ol")}}).
          </li>
        </ul>
      </td>
      <td>
        Das gesamte
        <p>
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML"
            >HTML: Eine gute Grundlage für Zugänglichkeit</a
          >
          ist voll von Informationen darüber, aber Sie sollten insbesondere auf
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#good_semantics"
            >Gute Semantik</a
          >,
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
            >Verwendung von semantischen UI-Kontrollen, wo möglich</a
          > und
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          > verweisen.
        </p>
      </td>
    </tr>
    <tr>
      <td>1.3.2 Sinnvolle Inhaltsreihenfolge (A)</td>
      <td>
        Eine sinnvolle, logische Lesereihenfolge sollte für jeden Inhalt leicht
        zu bestimmen sein, selbst wenn er visuell auf ungewöhnliche Weise
        präsentiert wird. Die Reihenfolge sollte durch die Verwendung korrekter
        semantischer Elemente (z. B. Überschriften, Absätze) offensichtlich
        gemacht werden, wobei CSS verwendet wird, um ungewöhnliche Layoutstile
        zu erstellen, unabhängig vom Markup.
      </td>
      <td>
        Beziehen Sie sich erneut auf
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML"
          >HTML: Eine gute Grundlage für Zugänglichkeit</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.3.3 Sensorische Merkmale (A)</td>
      <td>
        <p>
          Anweisungen zum Bedienen von Kontrollen oder zum Verständnis von
          Inhalten verlassen sich nicht auf einen einzigen Sinn. Dies könnte für
          Menschen mit einer Behinderung in Bezug auf diesen Sinn oder ein
          Gerät, das diesen Sinn nicht unterstützt, unzugänglich sein. Zum
          Beispiel:
        </p>
        <ul>
          <li>
            "Klicken Sie auf den runden Button, um fortzufahren"<br />Der Button
            sollte deutlich beschriftet sein, damit offensichtlich ist, dass es
            der Button ist, den Sie drücken müssen. Wenn es mehrere Buttons
            gibt, stellen Sie sicher, dass sie alle deutlich beschriftet sind,
            um ihre Funktion zu unterscheiden.
          </li>
          <li>
            "Hören Sie sich die Audioanweisungen zur Orientierung an"<br />Dies
            ist offensichtlich problematisch—Audio wird für Menschen mit
            Hörproblemen unzugänglich sein, während Text gelesen, aber auch
            von einem Screenreader bei Bedarf vorgelesen werden kann.
          </li>
          <li>
            "Wischen Sie vom rechten Rand des Bildschirms, um das Menü anzuzeigen"<br />Einige
            Benutzer können möglicherweise den Bildschirm nicht wischen, sei es
            aufgrund einer Behinderung oder weil ihr Gerät Touch nicht
            unterstützt. Eine Alternative sollte bereitgestellt werden, wie
            z. B. eine Tastenkombination oder ein Button, der mit der Tastatur
            oder auf andere Weise aktiviert werden kann.
          </li>
        </ul>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Anweisungen nur durch Farbe zu vermitteln,
            hängt zusammen, wird aber in einer anderen Leitlinie behandelt —
            1.4.1.
          </p>
        </div>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        1.3.4 Ausrichtung (AA)
      </td>
      <td>
        Inhalte schränken ihre Ansicht und Bedienung nicht auf eine einzige
        Darstellungsrichtung, wie z. B. Hoch- oder Querformat, ein, es sei denn,
        eine spezifische Darstellungsrichtung ist unerlässlich.
      </td>
      <td>
        <p>
          <a href="https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
            >Verständnis der Ausrichtung</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        1.3.5 Eingabezweck identifizieren (AA)
      </td>
      <td>
        <p>
          Folgen Sie der Liste der
          <a href="https://w3c.github.io/wcag/guidelines/22/#input-purposes"
            >53 Eingabefelder</a
          >, um den Zweck eines Feldes programmgesteuert zu identifizieren.
        </p>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html"
          >Verständnis des Eingabezwecks</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.3.6 Zweck identifizieren (AAA)
      </td>
      <td>
        In Inhalten, die mit Markup-Sprachen implementiert sind, kann der Zweck
        von Benutzeroberflächenkomponenten, Symbolen und Regionen
        programmgesteuert bestimmt werden.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html"
          >Verständnis des Zwecks</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Leitlinie 1.3: Anpassbar – Erstellen Sie Inhalte, die auf unterschiedliche Weise präsentiert werden können, ohne Informationen oder Struktur zu verlieren.](https://w3c.github.io/wcag/guidelines/22/#adaptable)

## Leitlinie 1.4: Machen Sie es Nutzern leichter, Inhalte zu sehen und zu hören, indem Sie Vordergrund von Hintergrund trennen

Diese Leitlinie bezieht sich darauf, sicherzustellen, dass die Kerninhalte leicht von Hintergründen und anderen Dekorationen zu unterscheiden sind. Das klassische Beispiel ist die Farbe (sowohl [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) als auch [Einsatz von Farbe](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Use_of_color) zur Vermittlung von Anweisungen), aber es gilt auch in anderen Situationen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Konformität mit den Kriterien</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
    <tr>
      <td>1.4.1 Farbnutzung (A)</td>
      <td>
        <p>
          Es sollte nicht allein auf Farbe vertraut werden, um Informationen zu
          vermitteln. Zum Beispiel sollten in Formularen erforderliche Felder
          niemals nur mit einer Farbe (wie Rot) markiert werden. Stattdessen (oder
          zusätzlich) wäre etwas wie ein Sternchen mit der Bezeichnung
          "erforderlich" angemessen.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Use_of_color"
          >Einsatz von Farbe</a
        >,
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast"
          >Farbe und Farbkontrast</a
        > und
        <a
          href="/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#multiple_labels"
          >Mehrfachbeschriftungen</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.2 Audiosteuerungen (A)</td>
      <td>
        Für jedes Audio, das länger als drei Sekunden gespielt wird, sollten
        zugängliche Steuerungen bereitgestellt werden, um das Audio/Video
        abzuspielen und zu pausieren sowie die Lautstärke stummzuschalten/anzupassen.
      </td>
      <td>
        Verwenden Sie native <code>&lt;button&gt;</code>, um zugängliche
        Tastatursteuerungen bereitzustellen, wie in
        <a
          href="/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics"
          >Grundlagen der Videoplayer-Gestaltung</a
        > gezeigt.
      </td>
    </tr>
    <tr>
      <td>1.4.3 Minimaler Kontrast (AA)</td>
      <td>
        <p>
          Der Farbkontrast zwischen Hintergrund und Vordergrundinhalt sollte auf
          einem Mindestniveau gehalten werden, um die Lesbarkeit sicherzustellen:
        </p>
        <ul>
          <li>
            Text und sein Hintergrund sollten ein Kontrastverhältnis von
            mindestens 4.5:1 aufweisen.
          </li>
          <li>
            Überschriften (oder einfach größerer) Text sollten ein Verhältnis
            von mindestens 3:1 haben. Größerer Text wird als mindestens 18pt oder 14pt fett definiert.
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
        Die Seite sollte lesbar und nutzbar sein, wenn die Textgröße verdoppelt
        wird. Dies bedeutet, dass Designs responsiv sein sollten, sodass der
        Inhalt bei vergrößerter Textgröße weiterhin zugänglich ist.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.5 Bilder von Text (AA)</td>
      <td>
        Bilder sollten NICHT verwendet werden, um Inhalte darzustellen, wenn
        Text die Aufgabe erledigen würde. Wenn ein Bild hauptsächlich
        textuell ist, könnte es sowohl durch Text als auch durch Bilder
        dargestellt werden.
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
            Überschriftentext (oder einfach größerer Text) sollte ein Verhältnis
            von mindestens 4.5:1 haben. Größerer Text wird als mindestens 18pt oder 14pt fett definiert.
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
      <td>1.4.7 Geringer oder kein Hintergrundaudio (AAA)</td>
      <td>
        Vorab aufgezeichnete Audiowiedergaben, die hauptsächlich Sprache
        enthalten, sollten minimalen Hintergrundrauschen haben, damit der Inhalt
        leicht verständlich ist.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.8 Visuelle Präsentation (AAA)</td>
      <td>
        <p>Für die Präsentation von Textinhalten sollten folgende Punkte zutreffen:</p>
        <ul>
          <li>Vorder- und Hintergrundfarben sollten vom Nutzer wählbar sein.</li>
          <li>
            Textblöcke sollten nicht breiter als 80 Zeichen (oder Glyphen) sein,
            um maximale Lesbarkeit zu gewährleisten.
          </li>
          <li>
            Text sollte nicht vollständig ausgerichtet sein (z. B. <code
              >text-align: justify;</code
            >).
          </li>
          <li>
            Der Zeilenabstand sollte mindestens das 1,5-fache der Textgröße
            innerhalb von Absätzen betragen (z. B. <code>line-height: 1.5;</code>), und mindestens das 2,25-fache der Textgröße zwischen
            Absätzen (z. B. <code>padding: 2.25rem;</code>).
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
        es dient lediglich der Dekoration (d.h. vermittelt keinen Inhalt) oder
        kann nicht auf andere Weise präsentiert werden.
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
            Kein horizontaler Bildlauf für Sprachen von links nach rechts (wie Englisch)
            oder von rechts nach links (wie Arabisch)
          </li>
          <li>
            Kein vertikaler Bildlauf für Sprachen von oben nach unten (wie Japanisch)
          </li>
          <li>
            Außer für Teile des Inhalts, die ein zweidimensionales Layout
            erfordern, um verwendet oder verstanden zu werden (wie eine große
            Datentabelle)
          </li>
        </ul>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
          >Verständnis von Umfluss</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.4.11 Nicht-Text-Kontrast (AA)
      </td>
      <td>
        Minimales Farbkontrastverhältnis von 3:1 für Benutzeroberflächenkomponenten
        und grafische Objekte.
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
        1.4.12 Textabstände (AA)
      </td>
      <td>
        <p>
          Es tritt kein Verlust von Inhalten oder Funktionalität auf, wenn
          folgende Stile angewendet werden:
        </p>
        <ul>
          <li>
            Zeilenhöhe (Zeilenabstand) auf mindestens das 1,5-fache der
            Schriftgröße
          </li>
          <li>
            Abstand nach Absätzen auf mindestens das Doppelte der Schriftgröße
          </li>
          <li>
            Zeichenabstand (Tracking) auf mindestens 0,12-mal die Schriftgröße
          </li>
          <li>Wortabstand auf mindestens 0,16-mal die Schriftgröße</li>
        </ul>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
          >Verständnis von Textabständen</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.4.13 Inhalt bei Hover oder Fokus (AA)
      </td>
      <td>
        <p>
          Während zusätzlicher Inhalt in Koordination mit Hover und
          Tastaturfokus erscheinen und verschwinden kann, legt dieses
          Erfolgskriterium drei Bedingungen fest, die erfüllt sein müssen:
        </p>
        <ul>
          <li>entfernbar (kann geschlossen/entfernt werden)</li>
          <li>
            hoverable (der zusätzliche Inhalt verschwindet nicht, wenn der
            Zeiger über ihm ist)
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
          >Verständnis von Inhalt bei Hover oder Fokus</a
        >
      </td>
    </tr>
  </thead>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Leitlinie 1.4: Unterscheidbar – Machen Sie es den Nutzern einfacher, Inhalte zu sehen und zu hören, indem Sie Vordergrund von Hintergrund trennen.](https://w3c.github.io/wcag/guidelines/22/#distinguishable)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
  1. Wahrnehmbar
  2. [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  3. [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

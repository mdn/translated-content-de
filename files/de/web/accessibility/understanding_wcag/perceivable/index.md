---
title: Wahrnehmbar
slug: Web/Accessibility/Understanding_WCAG/Perceivable
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{AccessibilitySidebar}}

Dieser Artikel bietet praktische Ratschläge dazu, wie Sie Ihre Webinhalte so erstellen, dass sie den Erfolgskriterien des Prinzips **Wahrnehmbar** der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 entsprechen. Wahrnehmbar besagt, dass Benutzer in der Lage sein müssen, die Inhalte in irgendeiner Weise wahrzunehmen, indem sie einen oder mehrere ihrer Sinne nutzen.

> [!NOTE]
> Um die W3C-Definitionen für Wahrnehmbar sowie die zugehörigen Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 1: Wahrnehmbar - Informationen und Benutzeroberflächenkomponenten müssen auf eine Weise präsentiert werden, die Benutzer wahrnehmen können.](https://www.w3.org/TR/WCAG21/#perceivable)

## Richtlinie 1.1 — Bereitstellung von Textalternativen für Nicht-Text-Inhalte

Der Schlüssel hierbei ist, dass Text in andere Formen umgewandelt werden kann, die Menschen mit Behinderungen nutzen können. Zum Beispiel kann er von einem Bildschirmleser vorgelesen, in Großdruck umgewandelt oder auf einem Brailledisplay dargestellt werden. Nicht-Text-Inhalte beziehen sich auf Multimedia wie Bilder, Audio und Video.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie Sie den Kriterien entsprechen</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="5">1.1.1 Geben Sie Textäquivalente an (A)</td>
      <td>
        Alle Bilder, die sinnvolle Inhalte vermitteln, sollten mit geeigneten
        Alternativtexten versehen werden.
      </td>
      <td>
        <a href="/de/docs/Learn/Accessibility/HTML#text_alternatives"
          >Textalternativen</a
        >.
      </td>
    </tr>
    <tr>
      <td>
        Komplexe Bilder oder Diagramme sollten eine zugängliche Alternative erhalten,
        entweder auf derselben Seite oder über einen Link. Verwenden Sie einen normalen Link anstelle eines <code>longdesc</code>-Attributs.
      </td>
      <td>
        <p>
          Eine Textbeschreibung kann funktionieren oder eine zugängliche Datentabelle (siehe
          <a href="/de/docs/Learn/HTML/Tables/Advanced"
            >Erweiterte Funktionen und Barrierefreiheit von HTML-Tabellen</a
          >). Siehe W3C's
          <a href="https://www.w3.org/TR/html-longdesc/">Image Description Extension (longdesc)</a>
          für das Argument gegen <code>longdesc</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Multimediainhalte (d.h. Audio oder Video) sollten zumindest eine
        beschreibende Identifikation haben, wie z.B. eine Untertitelung oder ähnliches.
      </td>
      <td>
        <p>
          Siehe <a href="/de/docs/Learn/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          >
          für statische Untertiteloptionen, und
          <a href="/de/docs/Learn/Accessibility/Multimedia#audio_transcripts"
            >Audio-Transkripte</a
          >,
          <a href="/de/docs/Learn/Accessibility/Multimedia#video_text_tracks"
            >Video-Textspuren</a
          >
          für weitere Alternativen.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Benutzeroberflächenkontrollen wie Formularelemente und Schaltflächen sollten Textbeschriftungen haben, die ihren Zweck beschreiben.
      </td>
      <td>
        Schaltflächen sind einfach — Sie sollten sicherstellen, dass der Schaltflächentext die Funktion der Schaltfläche beschreibt (z.B. <code
          >&#x3C;button>Bild hochladen&#x3C;/button></code
        >). Für weitere Informationen zu anderen Benutzeroberflächenkontrollen siehe
        <a href="/de/docs/Learn/Accessibility/HTML#ui_controls"
          >Benutzeroberflächenkontrollen</a
        >.
      </td>
    </tr>
    <tr>
      <td>
        Implementieren Sie dekorative (nicht-inhaltliche) Bilder, Videos, usw., auf eine Weise, die für unterstützende Technologien unsichtbar ist, so dass sie die Benutzer nicht verwirren.
      </td>
      <td>
        <p>
          Dekorative Bilder sollten mithilfe von CSS-Hintergrundbildern implementiert werden (siehe
          <a
            href="/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders"
            >Hintergründe</a
          >). Wenn Sie ein Bild über ein
          {{htmlelement("img")}}-Element einfügen müssen, geben Sie ihm ein leeres alt
          (<code>alt=""</code>). Andernfalls könnten Bildschirmleser versuchen, den Dateipfad, usw. vorzulesen.
        </p>
        <p>
          Wenn Sie Hintergrundvideo oder -audio einfügen, das automatisch abgespielt wird, machen Sie es so unaufdringlich wie möglich. Lassen Sie es nicht so aussehen/klingen wie Inhalt und bieten Sie eine Steuerung an, um es abzuschalten. Ideal wäre es, es gar nicht erst einzufügen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die [WCAG-Beschreibung für Richtlinie 1.1: Textalternativen](https://www.w3.org/TR/WCAG21/#text-alternatives).

## Richtlinie 1.2 — Bereitstellung von Textalternativen für zeitbasierte Medien

Zeitbasierte Medien beziehen sich auf Multimedia mit einer Dauer, wie Audio und Video. Beachten Sie, dass, wenn das Audio/Video als Alternative zu bestehenden Textinhalten dient, keine weitere Textalternative erforderlich ist.

<table>
  <thead>
    <tr>
       <th scope="col">Erfolgskriterien</th>
       <th scope="col">Wie Sie den Kriterien entsprechen</th>
       <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
       <td>1.2.1 Alternativen für vorab aufgezeichnete Audio- und nur Videoinhalte bereitstellen (A)</td>
       <td>Ein Transkript sollte für vorab aufgezeichnete Audioinhalte bereitgestellt werden, und ein Transkript oder eine Audiobeschreibung sollte für vorab aufgezeichnete nur Videoinhalte (d.h. stummes Video) bereitgestellt werden.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Informationen zu Transkripten. Es gibt noch kein Tutorial zur Audiobeschreibung.</td>
    </tr>
    <tr>
       <td>1.2.2 Untertitel für webbasierte Videos bereitstellen (A)</td>
       <td>Sie sollten Untertitel für Videos bereitstellen, die im Web präsentiert werden (z.B. HTML-Video). Dies ist für Personen gedacht, die den Audioteil des Videos nicht hören können.</td>
       <td>Siehe <a href="/de/docs/Learn/Accessibility/Multimedia#video_text_tracks">Video-Textspuren</a> für HTML-Video-Untertitel. Siehe auch <a href="https://support.google.com/youtube/answer/2734796?hl=en">Add your own subtitles &amp; closed captions</a> (YouTube).</td>
    </tr>
    <tr>
       <td>1.2.3 Texttranskript oder Audiobeschreibung für webbasierte Videos bereitstellen (A)</td>
       <td>Sie sollten Texttranskripte oder Audiobeschreibungen für Videos bereitstellen, die im Web präsentiert werden (z.B. HTML-Video). Dies richtet sich an Personen, die den visuellen Teil des Videos nicht sehen können und den vollständigen Inhalt nicht allein aus dem Audio erhalten.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Informationen zu Transkripten. Es gibt noch kein Tutorial zur Audiobeschreibung.</td>
    </tr>
    <tr>
       <td>1.2.4 Untertitel für Live-Audio bereitstellen (AA)</td>
       <td>Sie sollten synchronisierte Untertitel für alle Live-Multimedia bereitstellen, die Audio enthalten (z.B. Videokonferenzen, Live-Audioübertragungen).</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.5 Audiobeschreibungen für vorab aufgezeichnete Videos bereitstellen (AA)</td>
       <td>Audiobeschreibungen sollten für vorab aufgezeichnete Videos bereitgestellt werden, jedoch nur, wenn das vorhandene Audio nicht die vollständige Bedeutung vermittelt, die das Video ausdrückt.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.6 Gebärdensprachäquivalent zu vorab aufgezeichnetem Audio bereitstellen (AAA)</td>
       <td>Ein äquivalentes Gebärdensprachvideo sollte für alle vorab aufgezeichneten Inhalte bereitgestellt werden, die Audio enthalten.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.7 Erweitertes Video mit Audiobeschreibungen (AAA)</td>
       <td>Wo Audiobeschreibungen nicht bereitgestellt werden können (siehe 1.2.5) aufgrund von Timing-Problemen im Video (z.B. keine geeigneten Pausen im Inhalt, um die Audiobeschreibungen einzufügen), sollte eine alternative Version des Videos bereitgestellt werden, die eingefügte Pausen (und Audiobeschreibungen) enthält.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.8 Alternative für vorab aufgezeichnete Medien bereitstellen (AAA)</td>
       <td>Für alle Inhalte, die Videos enthalten, sollte ein beschreibendes Texttranskript bereitgestellt werden, z.B. ein Skript des Films, den Sie sehen. Dies ist für hörgeschädigte Zuschauer gedacht, die den Inhalt nicht hören können.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Informationen zu Transkripten.</td>
    </tr>
    <tr>
       <td>1.2.9 Transkript für Live-Audio bereitstellen (AAA)</td>
       <td>Für alle Live-Audioinhalte, die übertragen werden, sollte ein beschreibender Text bereitgestellt werden, z.B. ein Skript des Stücks oder der Musik, die Sie hören. Dies ist für hörgeschädigte Zuschauer gedacht, die den Inhalt nicht hören können.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Informationen zu Transkripten.</td>
    </tr>
 </tbody>
</table>

> [!NOTE]
> Siehe auch die [WCAG-Beschreibung für Richtlinie 1.2: Zeitbasierte Medien: Alternativen für zeitbasierte Medien bereitstellen](https://www.w3.org/TR/WCAG21/#time-based-media).

## Richtlinie 1.3 — Inhalte erstellen, die in unterschiedlichen Weisen präsentiert werden können

Diese Richtlinie bezieht sich auf die Fähigkeit von Inhalten, von Benutzern auf unterschiedliche Weise konsumiert zu werden, um deren unterschiedlichen Bedürfnisse gerecht zu werden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie Sie den Kriterien entsprechen</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
    <tr>
      <td>1.3.1 Informationen und Beziehungen (A)</td>
      <td>
        <p>
          Jede Inhaltsstruktur—oder visuelle Beziehung zwischen Inhalten—können
          programmatisch bestimmt oder aus einer Textbeschreibung abgeleitet
          werden. Die hauptsächlichen Situationen, in denen dies relevant ist, sind:
        </p>
        <ul>
          <li>
            Textbeschriftungen und die von ihnen beschriebenen Formularelemente. Diese werden
            eindeutig über das {{htmlelement("label")}}-Element verknüpft, welches von Bildschirmlesern, usw. erfasst werden kann.
          </li>
          <li>
            Bild-alt-Text. Inhaltsbilder sollten über Text verfügen, der
            den Inhalt des Bildes klar beschreibt und programmatisch damit verknüpft werden kann (z.B. alt-Text),
            oder anderweitig leicht zuzuordnen ist (z.B. beschreibt es und ist direkt daneben platziert). Dies sollte bedeuten, dass die vollständige Bedeutung trotzdem
            erfasst werden kann, auch wenn Sie das Bild nicht sehen können.
          </li>
          <li>
            Listen. Wenn die Reihenfolge der Listenelemente wichtig ist, verwenden Sie eine geordnete Liste
            ({{htmlelement("ol")}}).
          </li>
        </ul>
      </td>
      <td>
        Das gesamte
        <p>
          <a href="/de/docs/Learn/Accessibility/HTML"
            >HTML: Eine gute Grundlage für Barrierefreiheit</a
          >
          ist vollgepackt mit Informationen darüber, aber Sie sollten insbesondere
          auf
          <a href="/de/docs/Learn/Accessibility/HTML#good_semantics"
            >Gute Semantik</a
          >,
          <a href="/de/docs/Learn/Accessibility/HTML#ui_controls"
            >Benutzeroberflächenkontrollen</a
          > und
          <a href="/de/docs/Learn/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          > verweisen.
        </p>
      </td>
    </tr>
    <tr>
      <td>1.3.2 Sinnvolle Inhaltsreihenfolge (A)</td>
      <td>
        Eine sinnvolle, logische Lesereihenfolge sollte für alle
        Inhalte leicht erkennbar sein, selbst wenn sie visuell auf ungewöhnliche Weise präsentiert werden. Die Reihenfolge
        sollte durch die Verwendung korrekter semantischer Elemente (z.B.
        Überschriften, Absätze) offensichtlich gemacht werden, wobei CSS verwendet wird, um ungewöhnliche Layoutstile zu erstellen, unabhängig vom Markup.
      </td>
      <td>
        Verweisen Sie erneut auf
        <a href="/de/docs/Learn/Accessibility/HTML"
          >HTML: Eine gute Grundlage für Barrierefreiheit</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.3.3 Sensorische Merkmale (A)</td>
      <td>
        <p>
          Anweisungen zur Bedienung von Bedienelementen oder zum Verständnis von Inhalten sollten sich nicht nur auf einen einzelnen Sinn verlassen. Dies könnte für Menschen mit Behinderungen, die diesen Sinn betreffen, oder für Geräte, die diesen Sinn nicht unterstützen, unzugänglich sein. Zum Beispiel:
        </p>
        <ul>
          <li>
            "Klicken Sie auf die runde Schaltfläche, um fortzufahren"<br />Die Schaltfläche sollte
            klar beschriftet sein, so dass es offensichtlich ist, dass es sich um die zu drückende Schaltfläche handelt. Wenn es mehrere Schaltflächen gibt, stellen Sie sicher, dass sie alle
            eindeutig beschriftet sind, um ihre Funktion zu unterscheiden.
          </li>
          <li>
            "Hören Sie sich die Audioanweisungen zur Anleitung an"<br />Dies ist
            offensichtlich problematisch—Audio wird für Menschen mit
            Hörbeeinträchtigungen unzugänglich sein, während Text gelesen werden kann, aber
            auch von einem Bildschirmleser vorgelesen werden kann, wenn erforderlich.
          </li>
          <li>
            "Wischen Sie von der rechten Seite des Bildschirms, um das Menü anzuzeigen"<br />Einige
            Benutzer könnten den Bildschirm nicht wischen können, entweder aufgrund einer
            Behinderung oder weil ihr Gerät keine Berührung unterstützt. Eine Alternative sollte bereitgestellt werden, wie eine Tastenkombination oder
            eine Schaltfläche, die über die Tastatur oder auf andere Weise aktiviert werden kann.
          </li>
        </ul>
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Anweisungen und Erläuterungen nur über Farbe zu
            vermitteln, ist ähnlich, wird aber in einer anderen Richtlinie behandelt — 1.4.1.
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
        Inhalte schränken ihre Ansicht und Bedienung nicht auf eine einzelne Bildschirm-
        orientierung ein, wie z.B. Hoch- oder Querformat, es sei denn, eine spezifische
        Bildschirmorientierung ist essentiell.
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
        1.3.5 Eingabepurpose identifizieren (AA) <em
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
          >
          um den Zweck eines Feldes programmatisch zu identifizieren.
        </p>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html"
          >Verständnis für Eingabepurpose</a
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
        von Benutzeroberflächenkomponenten, Symbolen und Regionen programmatisch
        ermittelt werden.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html"
          >Verständnis für Zweckidentifikation</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 1.3: Anpassbar: Inhalte erstellen, die in verschiedenen Weisen dargestellt werden können, ohne Informationen oder Struktur zu verlieren.](https://www.w3.org/TR/WCAG21/#adaptable)

## Richtlinie 1.4: Es den Benutzern erleichtern, Inhalte zu sehen und zu hören, einschließlich der Trennung von Vorder- und Hintergrund

Diese Richtlinie bezieht sich darauf, sicherzustellen, dass Kerninhalte leicht von Hintergründen und anderen Dekorationen zu unterscheiden sind. Ein klassisches Beispiel ist die Farbe (sowohl [Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) als auch [Verwendung von Farbe](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Use_of_color) zur Weitergabe von Anweisungen), aber es gilt auch in anderen Situationen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie Sie den Kriterien entsprechen</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
    <tr>
      <td>1.4.1 Verwendung von Farbe (A)</td>
      <td>
        <p>
          Farbe sollte nicht allein darauf vertraut werden, Informationen zu vermitteln. Zum
          Beispiel sollten in Formularen erforderliche Felder niemals nur durch eine
          Farbe (wie Rot) gekennzeichnet werden. Stattdessen (oder zusätzlich) wäre etwas wie ein Sternchen mit der Beschriftung "erforderlich" geeigneter.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Use_of_color"
          >Verwendung von Farbe</a
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
      <td>1.4.2 Audiosteuerung (A)</td>
      <td>
        Für alle Audios, die länger als drei Sekunden spielen, sollten
        zugängliche Steuerelemente zum Abspielen und Anhalten des Audio/Videos sowie Mute/Anpassen der
        Lautstärke bereitgestellt werden.
      </td>
      <td>
        Verwenden Sie native <code>&lt;button&gt;</code>s, um zugängliche Tastatur-
        steuerungen bereitzustellen, wie in
        <a
          href="/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics"
          >Grundlagen zur Gestaltung von Videoplayern</a
        > gezeigt.
      </td>
    </tr>
    <tr>
      <td>1.4.3 Mindestkontrast (AA)</td>
      <td>
        <p>
          Der Farbkontrast zwischen Hintergrund und Vordergrundinhalten sollte
          ein Mindestniveau haben, um die Lesbarkeit sicherzustellen:
        </p>
        <ul>
          <li>
            Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens
            4,5:1 haben.
          </li>
          <li>
            Überschriften (oder einfach größerer Text) sollten ein Verhältnis von mindestens 3:1 haben.
            Größerer Text wird als mindestens 18pt, oder 14pt fett definiert.
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
        Die Seite sollte lesbar und nutzbar sein, wenn die Textgröße verdoppelt wird.
        Das bedeutet, dass Designs responsiv sein sollten, sodass der Inhalt auch bei vergrößerter
        Textgröße zugänglich bleibt.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.5 Bilder von Text (AA)</td>
      <td>
        Bilder sollten NICHT verwendet werden, um Inhalte darzustellen, bei denen Text
        die Aufgabe übernehmen könnte. Wenn ein Bild hauptsächlich aus Text besteht,
        könnte es durch Text sowie Bilder dargestellt werden.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.6 Erhöhter Kontrast (AAA)</td>
      <td>
        <p>Dies folgt, und baut weiter auf, Kriterium 1.4.3 auf.</p>
        <ul>
          <li>
            Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens
            7:1 haben.
          </li>
          <li>
            Überschriften (oder einfach größerer Text) sollten ein Verhältnis von mindestens 4,5:1 haben.
            Größerer Text wird als mindestens 18pt, oder 14pt fett definiert.
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
      <td>1.4.7 Wenig oder keinen Hintergrundaudio (AAA)</td>
      <td>
        Vorab aufgezeichnete Audioaufnahmen, die hauptsächlich Sprache beinhalten, sollten minimalen Hintergrundlärm aufweisen, damit der Inhalt leicht verständlich ist.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.8 Visuelle Präsentation (AAA)</td>
      <td>
        <p>Für die Darstellung von Textinhalten sollte Folgendes gelten:</p>
        <ul>
          <li>Vorder- und Hintergrundfarben sollten vom Benutzer auswählbar sein.</li>
          <li>
            Textblöcke sollten für maximale Lesbarkeit nicht breiter als 80 Zeichen (oder Glyphen) sein.
          </li>
          <li>
            Text sollte nicht vollständig ausgerichtet sein (z.B. <code
              >text-align: justify;</code
            >).
          </li>
          <li>
            Zeilenhöhe sollte innerhalb von Absätzen mindestens 1,5-mal der Textgröße entsprechen
            (z.B. <code>line-height: 1.5;</code>), und zwischen Absätzen mindestens 2,25-mal
            der Textgröße (z.B. <code
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
        Text sollte nicht als Bestandteil eines Bildes präsentiert werden, es sei denn, es handelt sich um reine
        Dekoration (das heißt, es vermittelt keine Inhalte) oder kann auf keine andere Weise
        dargestellt werden.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        1.4.10 Umfluss (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <ul>
          <li>
            Kein horizontales Scrollen für links-nach-rechts-Sprachen (wie Englisch)
            oder rechts-nach-links-Sprachen (wie Arabisch)
          </li>
          <li>
            Kein vertikales Scrollen für oben-nach-unten-Sprachen (wie Japanisch)
          </li>
          <li>
            Außer für Teile des Inhalts, die ein zweidimensionales Layout
            für Nutzung oder Bedeutung erfordern (wie eine große Datentabelle)
          </li>
        </ul>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
          >Umfluss verstehen</a
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
        Mindest-Farbkontrastverhältnis von 3:1 für Benutzeroberflächenkomponenten und
        grafische Objekte.
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
          Es treten keine Verluste an Inhalten oder Funktionalität auf, wenn folgende Stile
          angewendet werden:
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
        1.4.13 Inhalt bei Hover oder Fokus (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          Während zusätzlicher Inhalt möglicherweise in Verbindung mit
          Hover und Tastaturfokus erscheint und verschwindet, spezifiziert dieses Erfolgskriterium drei
          Bedingungen, die erfüllt sein müssen:
        </p>
        <ul>
          <li>entfernbar (kann geschlossen/entfernt werden)</li>
          <li>
            hoverfähig (der zusätzliche Inhalt verschwindet nicht, wenn der
            Zeiger darüber liegt)
          </li>
          <li>
            dauerhaft (der zusätzliche Inhalt verschwindet nicht ohne Benutzeraktion)
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
> Siehe auch die WCAG-Beschreibung für [Richtlinie 1.4: Unterscheidbar: Es den Benutzern erleichtern, Inhalte zu sehen und zu hören, einschließlich der Trennung von Vorder- und Hintergrund.](https://www.w3.org/TR/WCAG21/#distinguishable)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG)

  1. Wahrnehmbar
  2. [Bedienbar](/de/docs/Web/Accessibility/Understanding_WCAG/Operable)
  3. [Verständlich](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Understanding_WCAG/Robust)

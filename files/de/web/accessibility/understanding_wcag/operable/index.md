---
title: Bedienen
slug: Web/Accessibility/Understanding_WCAG/Operable
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{AccessibilitySidebar}}

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so verfassen, dass sie den Erfolgskriterien entsprechen, die im **Bedienbarkeits**-Prinzip der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 beschrieben sind. Bedienbar bedeutet, dass Benutzeroberflächenkomponenten und Navigation bedienbar sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Bedienbarkeit und ihre Richtlinien sowie Erfolgskriterien zu lesen, siehe [Prinzip 2: Bedienbar — Benutzeroberflächenkomponenten und Navigation müssen bedienbar sein.](https://www.w3.org/TR/WCAG21/#operable)

## Richtlinie 2.1 — Tastaturzugänglich: Machen Sie alle Funktionen über die Tastatur zugänglich

Diese Richtlinie umfasst die Notwendigkeit, Kernfunktionen einer Website über eine Tastatur zugänglich zu machen, neben anderen Methoden (z. B. Maus), sodass Benutzer, die auf Tastatursteuerung angewiesen sind, darauf zugreifen können.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie man die Kriterien erfüllt</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.1.1 Tastatur (A)</td>
      <td>
        Alle Funktionen sollten mit Tastatursteuerungen zugänglich sein, es sei
        denn, dies ist mit der Tastatur nicht möglich (z. B. Freihandzeichnen).
        Eingebaute Steuerungen sollten, wo möglich, verwendet werden (z. B. durch
        Formularsteuerungen tabben) und man sollte nur dort benutzerdefinierte
        Funktionen einbauen, wo nötig.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI-Steuerungen</a
        >
        und
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Tastaturzugänglichkeit wiederherstellen</a
        >
      </td>
    </tr>
    <tr>
      <td>2.1.2 Keine Tastaturfalle (A)</td>
      <td>
        <p>
          Wenn Sie mit der Tastatur in einen Funktionsbereich eintreten, sollten
          Sie diesen Bereich auch wieder mit <em>nur</em> der Tastatur verlassen
          können. Zum Beispiel, wenn Sie <kbd>Enter</kbd>/<kbd>Return</kbd> auf
          einer fokussierten Schaltfläche drücken, um ein Optionsfenster zu
          öffnen, sollten Sie dieses Fenster wieder schließen und zum Hauptinhalt
          zurückkehren können, nur mit der Tastatur.
        </p>
        <p>
          Dies ist sehr wichtig, damit Tastaturbenutzer nicht in bestimmten
          Bereichen Ihrer Apps gefangen werden.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.1.3 Tastatur — alle Funktionen (AAA)</td>
      <td>
        Dies ist ein weiterer Schritt über das Kriterium 2.1.1 hinaus. Um
        AAA-Konformität zu erreichen, sollten alle Funktionen mit
        Tastatursteuerungen zugänglich sein — ohne Ausnahmen.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI-Steuerungen</a
        >
        und
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Tastaturzugänglichkeit wiederherstellen</a
        >
      </td>
    </tr>
    <tr>
      <td>
        2.1.4 Zeichen-Tastenkombinationen (A)
        <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        Wenn es eine einzelne Zeichen-Tastenkombination gibt, muss mindestens
        eines der folgenden zutreffen: Einzelne
        Zeichen-Tastenkombinationen können deaktiviert oder umbelegt werden oder
        sie sind nur aktiv, wenn das entsprechende Benutzeroberflächenkomponent
        im Fokus ist.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html"
          >Verständnis von Zeichen-Tastenkombinationen</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.1 Tastatur zugänglich: Machen Sie alle Funktionen über eine Tastatur zugänglich](https://www.w3.org/TR/WCAG21/#keyboard-accessible).

## Richtlinie 2.2 — Genügend Zeit: Gewährleisten Sie, dass Benutzer genügend Zeit haben, Inhalte zu lesen und zu nutzen

Diese Richtlinie umfasst Situationen, in denen Funktionen eine Zeitbegrenzung haben können. Zum Beispiel müssen Käufe aus Sicherheitsgründen manchmal innerhalb einer bestimmten Zeit abgeschlossen werden.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie man die Kriterien erfüllt</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.2.1 Zeit ist anpassbar (A)</td>
      <td>
        <p>
          Für Funktionen mit Zeitbegrenzungen (z. B. das Abschließen einer Hotel-
          oder Flugbuchung hat oft eine Zeitbegrenzung), sollte dem Benutzer
          Steuerungen zur Verfügung gestellt werden, um die Zeitbegrenzung zu
          ändern, zu verlängern oder auszuschalten.
        </p>
        <p>
          Ausnahmen hiervon sind Aktivitäten mit Zeitbegrenzungen von mehr als 20
          Stunden, Echtzeitereignisse (z. B. Live-Mehrspielerspiele) und alle
          anderen Aktivitäten, die eine Zeitbegrenzung erfordern und ungültig
          wären, wenn sie ausgeschaltet würden.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.2 Pausieren, stoppen, ausblenden (A)</td>
      <td>
        <p>
          Bei sich automatisch wiederholenden/blinkenden Inhalten, die länger
          als 5 Sekunden dauern und neben anderen Inhalten gezeigt werden, sollten
          Steuerungen bereitgestellt werden, um sie zu pausieren, zu stoppen oder
          auszublenden. Dies gilt nicht für bewegende/blinkende Inhalte, die für
          die Erfahrung wesentlich sind. Beispiele umfassen scrollenden Text und
          Videos.
        </p>
        <p>
          Bei sich automatisch aktualisierenden Informationen, die automatisch
          starten und neben anderen Inhalten gezeigt werden, sollten Steuerungen
          bereitgestellt werden, um sie zu pausieren, zu stoppen oder
          auszublenden oder um die Frequenz der Aktualisierungen zu steuern. Dies
          gilt nicht für sich automatisch aktualisierende Inhalte, die für die
          Erfahrung wesentlich sind. Beispiele umfassen Karussells oder
          rotierende Ankündigungen.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.3 Keine Zeitlimits (AAA)</td>
      <td>
        Dies baut auf Kriterium 2.2.1 auf und besagt, dass Inhalte, die die
        AAA-Konformität erfüllen wollen, keine Zeitlimits haben sollten.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.4 Unterbrechungen unterdrücken (AAA)</td>
      <td>
        Alle Unterbrechungen wie Benachrichtigungen oder Zwischeneinblendungen
        sollten Funktionalitäten bieten, um sie zu unterdrücken oder
        zu verschieben, es sei denn, es handelt sich um eine Notfallwarnung.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.5 Erneute Authentifizierung (AAA)</td>
      <td>
        Wenn eine Authentifizierungssitzung während der Nutzung einer Web-App
        abläuft, kann der Benutzer sich erneut authentifizieren und seine Nutzung
        fortsetzen, ohne Daten zu verlieren.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        2.2.6 Zeitüberschreitungen (AAA)
        <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          Sollte es eine Zeitüberschreitung geben (verursacht durch
          Benutzerinaktivität), warnen Sie die Benutzer zu Beginn eines
          Prozesses, damit sie nicht überrascht werden, dass eine
          Zeitüberschreitung existiert (oder erlauben Sie nur eine
          Zeitüberschreitung nach 20 Stunden Inaktivität).
        </p>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html"
          >Verständnis von Zeitüberschreitungen</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.2 Genügend Zeit: Gewährleisten Sie, dass Benutzer genügend Zeit haben, Inhalte zu lesen und zu nutzen](https://www.w3.org/TR/WCAG21/#enough-time).

## Richtlinie 2.3 — Anfälle und körperliche Reaktionen: Gestalten Sie Inhalte so, dass sie keine Anfälle oder körperlichen Reaktionen auslösen

Dies bezieht sich auf Inhalte, die, wenn sie nicht verändert werden, bei Benutzern mit Zuständen wie Epilepsie Anfälle auslösen oder bei Benutzern mit Zuständen wie vestibulären Störungen körperliche Reaktionen (wie Schwindel) auslösen könnten.

<table>
  <thead>
    <tr>
    <th scope="col">Erfolgskriterien</th>
    <th scope="col">Wie man die Kriterien erfüllt</th>
    <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.3.1 Drei Blitze oder unterhalb der Schwelle (A)</td>
      <td>Inhalte sind frei von Elementen, die mehr als dreimal pro Sekunde blitzen, oder blitzende Inhalte liegen unter den akzeptablen <a href="https://www.w3.org/TR/WCAG20/#general-thresholddef">Blitz- und Rotblitz-Schwellenwerten</a>.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.2 Drei Blitze (AAA)</td>
      <td>Inhalte enthalten keine Aspekte, die mehr als dreimal pro Sekunde blitzen.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.3 Animationen durch Interaktionen (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
      <td>Benutzern erlauben, Animationen durch Interaktionen zu deaktivieren (es sei denn, die Animation ist wesentlich).</td>
      <td><a href="https://www.w3.org/TR/WCAG21/#animation-from-interactions">Verständnis von Animationen durch Interaktionen</a></td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.3 Anfälle und körperliche Reaktionen: Gestalten Sie Inhalte so, dass sie keine Anfälle oder körperlichen Reaktionen auslösen](https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions).

## Richtlinie 2.4 — Navigierbar: Stellen Sie Möglichkeiten bereit, die Benutzern helfen, Inhalte zu finden und sich zu orientieren

Die Konformitätskriterien unter dieser Richtlinie beziehen sich auf Möglichkeiten, wie Benutzer erwarten können, sich zu orientieren und die Inhalte und Funktionen zu finden, die sie auf der aktuellen Seite oder auf anderen Seiten der Website suchen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie man die Kriterien erfüllt</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.4.1 Blöcke überspringen (A)</td>
      <td>
        <p>
          Ein Mechanismus sollte bereitgestellt werden, der es dem Benutzer
          ermöglicht, direkt zum Hauptinhalt oder zu den auf der Seite verfügbaren
          Funktionen zu springen und die wiederholten Funktionen (wie das
          Unternehmenslogo oder die Navigation) zu überspringen. Dies wird
          oft durch „Sprunglinks“ erreicht — Links, die am Anfang des
          Seitenquellcodes platziert und durch CSS verborgen werden.
        </p>
        <p>
          Wenn eine ordnungsgemäße Struktur von Überschriften und semantischen
          Containern zur Navigation bereitgestellt wird (zum Beispiel
          {{htmlelement("section")}}, {{htmlelement("aside")}} usw.), ist ein
          zusätzlicher „Sprunglink“ nicht nötig.
        </p>
      </td>
      <td><em>Ein Abschnitt über „Sprunglinks“ sollte hinzugefügt werden.</em></td>
    </tr>
    <tr>
      <td>2.4.2 Seitentitel einschließen (A)</td>
      <td>
        Jede Webseite sollte einen informativen
        {{htmlelement("title")}} enthalten, dessen Inhalt den
        Inhalt/Zweck der Seite beschreibt.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_a_title"
          >Titel hinzufügen</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.3 Logische Fokusreihenfolge (A)</td>
      <td>
        Die „Tabulatorreihenfolge“ von fokussierbaren Seitenelementen (z. B.
        Links, Schaltflächen, Formulareingaben) sollte logisch sinnvoll sein,
        damit die Seite auch von Nutzern mit Sehbehinderungen/Tastaturnutzern
        nutzbar bleibt.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI-Steuerungen</a
        >
        für allgemeine Ratschläge zum Tabben zu Steuerungen. Wenn Sie Elemente in
        einer ungewöhnlichen Anordnung platzieren müssen, ist es besser, die
        Quellordnung sinnvoll zu gestalten und dann CSS-Funktionen wie
        <a href="/de/docs/Learn_web_development/Core/CSS_layout/Positioning">Positionierung</a>
        zu verwenden, um das Layout zu handhaben.
      </td>
    </tr>
    <tr>
      <td>2.4.4 Link-Zweck (im Kontext) (A)</td>
      <td>
        Der Zweck/das Ziel eines Links sollte aus dem Linktext oder aus dem
        Kontext (z. B. dem umgebenden Text) erkennbar sein. Ausnahmen sind dort,
        wo der Link-Zweck für <em>alle</em> Benutzer unklar ist (siehe
        <a href="https://www.w3.org/TR/WCAG20/#ambiguouslinkdef"
          >mehrdeutig für Benutzer im Allgemeinen</a
        >
        für eine nützliche Erklärung hierzu).
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
          >Bedeutungsvolle Textbeschriftungen</a
        >. Beachten Sie auch, dass Sie Fälle minimieren sollten, in denen
        mehrere Kopien desselben Textes zu verschiedenen Orten verlinken. Dies
        kann für Benutzer von Bildschirmlesegeräten problematisch sein, die oft
        eine Liste der Links aus dem Kontext nehmen — mehrere Links, die
        alle mit „hier klicken“, „hier klicken“, „hier klicken“
        beschriftet sind, wären verwirrend.
      </td>
    </tr>
    <tr>
      <td>2.4.5 Mehrere Navigationsmechanismen (AA)</td>
      <td>
        <p>
          Sie sollten mindestens zwei allgemeine Navigationsmechanismen
          bereitstellen, um Seiten auf Ihrer Website zu finden, zum Beispiel
          Navigationsmenü, Breadcrumb-Pfad, Seitensuche, Sitemap, Liste
          verwandter Links usw.
        </p>
        <p>
          Die einzige Ausnahme hiervon besteht, wenn eine Seite ein Schritt in
          einem Prozess ist, sodass sie logischerweise nur Links zu den vorherigen
          und nächsten Schritten hat.
        </p>
      </td>
      <td>
        Die meisten dieser Mechanismen können mit einfachen HTML-Funktionen
        erstellt werden, zum Beispiel siehe
        <a
          href="/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#search_field"
          >Suchfeld</a
        >,
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#active_learning_creating_a_navigation_menu"
          >Erstellen eines Navigationsmenüs</a
        >,
        <a
          href="/de/docs/Learn_web_development/Core/Text_styling/Styling_links#styling_links_as_buttons"
          >Stylen von Links als Schaltflächen</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.6 Überschriften und Bezeichnungen (AA)</td>
      <td>
        Überschrift (z. B. {{htmlelement("Heading_Elements", "&lt;h2&gt;")}}) und
        {{htmlelement("label")}} Elemente beschreiben klar den Zweck
        des Inhalts und der Formularelemente, die sie beschreiben sollen.
      </td>
      <td>
        <p>
          Siehe
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
            >UI-Steuerungen</a
          >,
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
            >Bedeutungsvolle Textbeschriftungen</a
          >,
          <a
            href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
            >Grundlagen von Überschriften und Absätzen</a
          >,
          <a
            href="/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#the_label_element"
            >Das &#x3C;label> Element</a
          >.
        </p>
        <p>
          Beachten Sie, dass Sie vermeiden sollten, Überschriften oder
          Beschriftungen zu duplizieren (z. B. mehrere Instanzen von „Weitere
          Informationen“), es sei denn, die Struktur ermöglicht es Ihnen, sie
          leicht zu unterscheiden.
        </p>
      </td>
    </tr>
    <tr>
      <td>2.4.7 Sichtbarer Fokus für fokussierbare Elemente (AA)</td>
      <td>
        Beim Tabben durch fokussierbare Elemente wie Links oder Formulareingaben
        sollte es einen visuellen Indikator geben, der zeigt, welches Element
        aktuell den Fokus hat. Dies ist normalerweise ein gepunkteter oder blauer
        Umriss standardmäßig (abhängig von Browser, Plattform usw.), aber dies
        kann durch CSS überschrieben werden.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI-Steuerungen</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.8 Standort innerhalb der Seite (AAA)</td>
      <td>
        Wenn Sie sich auf einer Seite innerhalb einer komplexen Website oder
        eines Schrittsatzes befinden, sollte dem Benutzer ein Indikator
        bereitgestellt werden, der zeigt, wo sie sich auf der Website befinden,
        zum Beispiel ein Breadcrumb-Pfad, Sitemap oder Text wie „Formularseite 2
        von 10“.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.4.9 Link-Zweck (nur Link) (AAA)</td>
      <td>
        Dieses Kriterium baut auf 2.4.4 auf und besagt, dass zur Erfüllung der
        AAA, der Zweck/das Ziel eines Links aus dem Linktext allein erkennbar
        sein sollte, auch wenn er aus dem Kontext genommen wird.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
          >Bedeutungsvolle Textbeschriftungen</a
        >. Beachten Sie auch, dass Sie Fälle minimieren sollten, in denen
        mehrere Kopien desselben Textes zu verschiedenen Orten verlinken. Dies
        kann für Benutzer von Bildschirmlesegeräten problematisch sein, die oft
        eine Liste der Links aus dem Kontext nehmen — mehrere Links, die
        alle mit „hier klicken“, „hier klicken“, „hier klicken“
        beschriftet sind, wären verwirrend.
      </td>
    </tr>
    <tr>
      <td>2.4.10 Abschnittsüberschriften (AAA)</td>
      <td>
        <p>
          Neben dem Erstellen einer nützlichen Dokumentstruktur sollten
          Überschriften auch genau beschreiben und Inhaltsbereiche in logische
          Abschnitte unterteilen.
        </p>
        <p>
          Beachten Sie, dass sich dieses Kriterium auf Überschriften und
          Titel im Allgemeinen Webinhalt bezieht (z. B. Überschriften
          innerhalb von Textinhalten). Überschriften und Titel für
          Benutzeroberflächen sind ein Sonderfall, der im Kriterium 4.1.2
          behandelt wird.
        </p>
      </td>
      <td>
        <p>
          Siehe
          <a
            href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
            >Grundlagen von Überschriften und Absätzen</a
          >.
        </p>
      </td>
    </tr>
    <tr>
    <td> 2.4.11 Fokus nicht verdeckt (Minimum) (AA)</td>
    <td>
    <p> Wenn eine Komponente der Benutzeroberfläche Tastaturfokus erhält, wird die Komponente nicht vollständig durch vom Autor erstellten Inhalt verdeckt.</p>
    <p> <strong>Hinweis:</strong> Wenn der Inhalt der Benutzeroberfläche durch den Benutzer neu positioniert werden kann, wird nur die anfängliche Position des durch den Benutzer verschiebbaren Inhalts für die Prüfung auf Einhaltung dieses Standards berücksichtigt. Auch Inhalte, die vom Benutzer geöffnet werden, können die Komponente, die den Fokus erhält, verdecken. Darüber hinaus wird die Komponente mit Fokus nicht als verdeckt für Konformitäts- und Prüfzwecke angesehen, wenn der Benutzer die fokussierte Komponente aufdecken kann, ohne den Tastaturfokus zu ändern.</p>
    </td>
    <td>
    <p> Informieren Sie sich über das <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum">Verständnis des nicht verdeckten Fokus (Minimum)</a>, um mehr über diesen Standard zu erfahren.</p>
    </td>
    </tr>
    <tr>
    <td> 2.4.12 Fokus nicht verdeckt (Verbessert) (AAA) </td>
    <td>
    <p> Befolgt die Regeln wie 2.4.11, außer dass, wenn eine Benutzeroberflächenkomponente Fokus erhält, kein Teil der Komponente durch vom Autor erstellten Inhalt verdeckt werden kann. Wenn die Oberfläche konfigurierbar ist, werden nur die anfänglichen Positionen des durch den Benutzer verschiebbaren Inhalts für die Prüfung und Einhaltung dieses Standards berücksichtigt.</p>
    </td>
    <td>
    <p> Informieren Sie sich über das <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced">Verständnis des nicht verdeckten Fokus (Verbessert) (Level AAA)</a> , um mehr über diesen Standard zu erfahren.</p> </td>
    </td>
    </tr>
<tr>
  <td> 2.4.13 Fokusanzeige (AAA)</td>
  <td>
    <p>Wenn die Tastatur-Fokus-Anzeige sichtbar ist, erfüllt der Bereich der Fokus-Anzeige alle folgenden Kriterien:</p>
    <ul>
      <li>Muss mindestens so groß sein wie der Bereich eines <code>2px</code> dicken Umrisses der unmarkierten Komponente oder Unterkomponente, die den Inhalt der Komponente, den Rand und den Hintergrund umfasst, jedoch äußere Schatten- oder Glüheffekte ausschließt.</li>
      <li>Muss ein Kontrastverhältnis von mindestens 3:1 zwischen denselben Pixeln im fokussierten und unfokussierten Zustand aufweisen.</li>
    </ul>
    <p> Die Ausnahmen dafür sind:</p>
    <ul>
      <li>Der Fokus-Indikator wird vom Benutzer bestimmt und kann nicht vom Autor angepasst werden.</li>
      <li>Die Farbe des Fokus-Indikators und des Hintergriffs wird nicht vom Autor verändert.</li>
    </ul>
  </td>
  <td>
    <p> Informieren Sie sich über das <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html">Verständnis des Fokus-Erscheinungsbildes (Level AAA)</a> , um mehr über diesen Standard zu erfahren.</p>
  </td>
</tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.4 Navigierbar: Stellen Sie Möglichkeiten bereit, die Benutzern helfen, Inhalte zu finden und sich zu orientieren.](https://www.w3.org/TR/WCAG21/#navigable)

## Richtlinie 2.5 Eingabemodalitäten: Erleichtern Sie es den Benutzern, Funktionen durch verschiedene Eingaben jenseits der Tastatur zu bedienen

Die Konformitätskriterien unter dieser Richtlinie stellen sicher, dass Benutzer in der Lage sind, mit digitaler Technologie über verschiedene Eingabemethoden jenseits einer Tastatur oder Maus zu interagieren (einschließlich Touchscreen, Stimme, Gerätebewegung oder alternative Eingabegeräte).

<table>
 <thead>
  <tr>
   <th scope="col">Erfolgskriterien</th>
   <th scope="col">Wie man die Kriterien erfüllt</th>
   <th scope="col">Praktische Ressource</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>2.5.1 Zeigergesten (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Alle Funktionen, die mit einem Zeiger bedient werden können, können mit einfachen Aktionen bedient werden. Pfad- oder Mehrpunkt-Gesten sind nicht erforderlich, um irgendwelche Funktionen zu bedienen. Es gibt Ausnahmen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html">Verständnis von Zeigergesten</a></td>
  </tr>
  <tr>
   <td>2.5.2 Zeiger-Abbruch (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Für Funktionen, die mit einem einzelnen Zeiger bedient werden können, trifft mindestens eines der folgenden zu: Kein Down-Ereignis, Abbruch/Rückgängigmachen, Aufhebung oder wesentlich.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html">Verständnis von Zeiger-Abbruch</a></td>
  </tr>
  <tr>
   <td>2.5.3 Beschriftung im Namen (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Für jede Benutzeroberflächenkomponente, die ein sichtbares Textetikett enthält, stellen Sie sicher, dass der barrierefreie Name mit dem sichtbaren Text im Etikett übereinstimmt (oder ihn enthält).</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">Verständnis von Beschriftung im Namen</a></td>
  </tr>
  <tr>
   <td>2.5.4 Bewegungsaktivierung (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Stellen Sie sicher, dass für Funktionen, die durch a) Gerätemotion (wie Schütteln, Kippen) oder b) Benutzerbewegungen, die von Gerätesensoren (einschließlich einer Kamera) erkannt werden, ausgelöst werden können, beide folgenden Kriterien zutreffen: 1) Bewegungsaktivierung kann deaktiviert werden und 2) die Funktion kann ohne Nutzung von Gerätemotion oder Benutzerbewegungen bedient werden. Es gibt Ausnahmen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html">Verständnis von Bewegungsaktivierung</a></td>
  </tr>
  <tr>
   <td>2.5.5 Zielgröße (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Die Größe des Berührungsziels eines funktionsfähigen Elements muss mindestens 44 CSS-Pixel in Breite und Höhe betragen. Es gibt Ausnahmen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html">Verständnis von Zielgröße</a></td>
  </tr>
  <tr>
   <td>2.5.6 Gleichzeitige Eingabemechanismen (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Stellen Sie sicher, dass Benutzer verschiedene Modi der Eingabe verwenden und zwischen diesen wechseln können, wenn sie mit digitalen Inhalten interagieren, einschließlich Touchscreen, Tastatur, Maus, Sprachbefehlen oder alternativen Eingabegeräten. Es gibt eine wesentliche Ausnahme. </td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html">Verständnis von gleichzeitigen Eingabemechanismen</a></td>
 </tr>
 <tr>
 <td> 2.5.8 Zielgröße Mindestanforderung (AA)</td>
 <td> Die Zielgröße für Zeigereingaben sollte mindestens <code>24px</code> breit und <code>24px</code> hoch sein, mit Ausnahme der folgenden Bereiche:
 <ul>
  <li> <strong>Abstand:</strong> Zielen, die weniger als <code>24px x 24px</code> sind, sind so positioniert, dass, wenn ein <code>24px</code> Durchmesser-Kreis auf die Begrenzungsbox jedes Ziels zentriert ist, die Kreise sich nicht mit einem anderen Ziel oder dem Kreis eines weiteren untergroßen Ziels überschneiden.</li>
  <li> <strong>Equivalent:</strong> Eine separate Steuerung, die dieselbe Funktion erfüllt und diesen Standard erfüllt, ist auf derselben Seite verfügbar.</li>
  <li> <strong>Inline:</strong> Das Ziel befindet sich innerhalb einer Textzeile, wobei seine Größe durch die Zeilenhöhe oder den umgebenden Nicht-Zieltext beschränkt ist.</li>
  <li> <strong>Nutzernagent-Steuerung:</strong> Die Größe des Ziels wird vom Nutzernagent bestimmt und wurde nicht vom Autor geändert.</li>
  <li> <strong>Wesentlich:</strong> Eine bestimmte Darstellung des Ziels ist wesentlich oder gesetzlich vorgeschrieben, um die übermittelten Informationen zu vermitteln.</li>
 </ul>
 <td> Informieren Sie sich über das <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html">Verständnis der Zielgröße Mindestanforderung</a> </td>
</tr>
  </tr>
 </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.5: Eingabemodalitäten: Erleichtern Sie es den Benutzern, Funktionen durch verschiedene Eingaben jenseits der Tastatur zu bedienen.](https://www.w3.org/TR/WCAG21/#input-modalities)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG)

  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
  2. Bedienbar
  3. [Verständlich](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Understanding_WCAG/Robust)

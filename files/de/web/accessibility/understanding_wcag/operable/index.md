---
title: Operable
slug: Web/Accessibility/Understanding_WCAG/Operable
l10n:
  sourceCommit: be68d68e0bf1c9cdf5f40939201403638fb90cbe
---

{{AccessibilitySidebar}}

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so gestalten, dass sie den Erfolgskriterien des **Operable**-Prinzips der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 entsprechen. Operable besagt, dass Benutzeroberflächenkomponenten und Navigation bedienbar sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Operable und seine Richtlinien sowie Erfolgskriterien zu lesen, siehe [Prinzip 2: Operable — Benutzeroberflächenkomponenten und Navigation müssen bedienbar sein.](https://www.w3.org/TR/WCAG21/#operable)

## Richtlinie 2.1 — Tastaturzugänglichkeit: Alle Funktionen müssen über eine Tastatur zugänglich sein

Diese Richtlinie behandelt die Notwendigkeit, dass Kernfunktionen einer Website zusätzlich zu anderen Mitteln (z. B. Maus) über eine Tastatur erreichbar sind, sodass Benutzer, die auf Tastatursteuerung angewiesen sind, darauf zugreifen können.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie die Kriterien erfüllt werden</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.1.1 Tastatur (A)</td>
      <td>
        Alle Funktionen sollten über Tastatursteuerungen zugänglich sein, es sei denn, sie können nicht über die Tastatur ausgeführt werden (z. B. Freihandzeichnen). Wo möglich, sollten eingebaute Steuerungen verwendet werden (z. B. durch Formularelemente blättern), und benutzerdefinierte Funktionalitäten sollten nur bei Bedarf implementiert werden.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn/Accessibility/HTML#ui_controls"
          >UI-Steuerungen</a
        >
        und
        <a
          href="/de/docs/Learn/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Tastaturzugänglichkeit wiederherstellen</a
        >
      </td>
    </tr>
    <tr>
      <td>2.1.2 Keine Tastaturfalle (A)</td>
      <td>
        <p>
          Wenn Sie mit der Tastatur in einen Funktionsbereich gelangen, sollten Sie diesen auch wieder verlassen können, indem Sie <em>nur</em> die Tastatur verwenden. Beispielsweise sollten Sie, wenn Sie <kbd>Enter</kbd>/<kbd>Return</kbd> auf einer fokussierten Schaltfläche drücken, um ein Optionsfenster zu öffnen, dieses Fenster wieder schließen und mit der Tastatur zum Hauptinhalt zurückkehren können.
        </p>
        <p>
          Dies ist sehr wichtig, damit Tastaturnutzer nicht in spezifischen Abschnitten Ihrer Apps gefangen sind.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.1.3 Tastatur — alle Funktionen (AAA)</td>
      <td>
        Dies ist ein weiterer Schritt über Kriterium 2.1.1 hinaus. Um die Stufe AAA Konformität zu erreichen, sollten alle Funktionen mit Tastatursteuerungen zugänglich sein — ohne Ausnahmen.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn/Accessibility/HTML#ui_controls"
          >UI-Steuerungen</a
        >
        und
        <a
          href="/de/docs/Learn/Accessibility/HTML#building_keyboard_accessibility_back_in"
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
        Wenn eine Tastenkombination mit einem einzelnen Zeichen existiert, muss mindestens eine der folgenden Bedingungen erfüllt sein: Zeichen-Tastenkombinationen können deaktiviert, neu zugewiesen oder sind nur aktiv, wenn die betreffende Benutzeroberflächenkomponente im Fokus steht.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html"
          >Verstehen von Zeichen-Tastenkombinationen</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.1 Tastaturzugänglichkeit: Alle Funktionen müssen über eine Tastatur zugänglich sein](https://www.w3.org/TR/WCAG21/#keyboard-accessible).

## Richtlinie 2.2 — Genügend Zeit: Den Nutzern genügend Zeit geben, um den Inhalt zu lesen und zu nutzen

Diese Richtlinie bezieht sich auf Situationen, in denen Funktionen eine zeitliche Begrenzung haben können. Zum Beispiel müssen Käufe aus Sicherheitsgründen manchmal innerhalb eines Zeitlimits abgeschlossen werden.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie die Kriterien erfüllt werden</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.2.1 Zeitbegrenzung anpassbar (A)</td>
      <td>
        <p>
          Bei Funktionen mit Zeitbegrenzung (z. B. die Buchung eines Hotels oder Fluges hat oft eine zeitliche Begrenzung) sollte der Benutzer Steuerungsmöglichkeiten erhalten, um die Zeitbegrenzung anzupassen, zu verlängern oder auszuschalten.
        </p>
        <p>
          Ausnahmen sind Aktivitäten mit Zeitbegrenzungen von über 20 Stunden, Echtzeitereignisse (z. B. Live-Multiplayer-Spiele) und jede andere Aktivität, die eine Zeitbegrenzung erfordert und ungültig wäre, wenn sie aufgehoben würde.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.2 Anhalten, stoppen, verbergen (A)</td>
      <td>
        <p>
          Für sich bewegenden/blinkenden Inhalt, der automatisch startet, länger als 5 Sekunden dauert und zusammen mit anderem Inhalt gezeigt wird, sollten Steuerungen bereitgestellt werden, um ihn anzuhalten, zu stoppen oder zu verbergen. Dies gilt nicht für sich bewegenden/blinkenden Inhalt, der essenziell für das Erlebnis ist. Beispiele sind scrollender Text und Videos.
        </p>
        <p>
          Für automatisch aktualisierte Informationen, die automatisch starten und mit anderem Inhalt gezeigt werden, sollten Steuerungen bereitgestellt werden, um sie anzuhalten, zu stoppen oder zu verbergen, oder um die Häufigkeit der Aktualisierungen zu steuern. Dies gilt nicht für automatisch aktualisierte Inhalte, die essenziell für das Erlebnis sind. Beispiele sind Karussells oder rotierende Ankündigungen.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.3 Keine Zeitbegrenzungen (AAA)</td>
      <td>
        Dies baut auf den Kriterien 2.2.1 auf und besagt, dass Inhalte, die die AAA-Konformität erreichen möchten, keine Zeitbegrenzungen haben sollten.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.4 Unterdrücken von Unterbrechungen (AAA)</td>
      <td>
        Alle Unterbrechungen wie Warnungen oder Zwischeneinblendungen sollten steuerbar sein, um sie zu unterdrücken oder zu verzögern, es sei denn, es handelt sich um Notfallwarnungen.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.5 Erneute Authentifizierung (AAA)</td>
      <td>
        Wenn eine Authentifizierungssitzung während der Verwendung einer Web-App abläuft, kann der Benutzer sich erneut authentifizieren und seine Nutzung fortsetzen, ohne Daten zu verlieren.
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
          Wenn es eine Zeitüberschreitung (verursacht durch Benutzerinaktivität) gibt, warnen Sie die Benutzer zu Beginn eines Prozesses, damit sie nicht überrascht werden, dass eine Zeitüberschreitung existiert (oder erlauben Sie die Zeitüberschreitung nur nach 20 Stunden Inaktivität).
        </p>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html"
          >Verstehen von Zeitüberschreitungen</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.2 Genügend Zeit: Den Nutzern genügend Zeit geben, um den Inhalt zu lesen und zu nutzen](https://www.w3.org/TR/WCAG21/#enough-time).

## Richtlinie 2.3 — Anfälle und körperliche Reaktionen: Entwerfen Sie Inhalte nicht so, dass sie bekanntermaßen Anfälle oder körperliche Reaktionen verursachen

Dies bezieht sich auf Inhalte, die, wenn sie nicht geändert werden, bei Benutzern mit Bedingungen wie Epilepsie Anfälle auslösen oder bei Benutzern mit Bedingungen wie vestibulären Störungen körperliche Reaktionen (wie Schwindel) verursachen können.

<table>
  <thead>
    <tr>
    <th scope="col">Erfolgskriterien</th>
    <th scope="col">Wie die Kriterien erfüllt werden</th>
    <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.3.1 Drei Blitze oder unter Schwellenwert (A)</td>
      <td>Der Inhalt enthält keinen Aspekt, der mehr als dreimal pro Sekunde blinkt, oder blinkender Inhalt liegt unter den akzeptablen <a href="https://www.w3.org/TR/WCAG20/#general-thresholddef">Blitz- und Rotblitz-Schwellenwerten</a>.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.2 Drei Blitze (AAA)</td>
      <td>Der Inhalt enthält keinen Aspekt, der mehr als dreimal pro Sekunde blinkt.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.3 Animationen aus Interaktionen (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
      <td>Erlauben Sie es den Benutzern, Animationen aus Interaktionen zu deaktivieren (es sei denn, die Animation ist essenziell).</td>
      <td><a href="https://www.w3.org/TR/WCAG21/#animation-from-interactions">Verstehen von Animationen aus Interaktionen</a></td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.3 Anfälle und körperliche Reaktionen: Entwerfen Sie Inhalte nicht so, dass sie bekanntermaßen Anfälle oder körperliche Reaktionen verursachen.](https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions)

## Richtlinie 2.4 — Navigierbar: Bieten Sie Wege an, um Nutzern zu helfen, zu navigieren, Inhalte zu finden und festzustellen, wo sie sich befinden

Die Konformitätskriterien unter dieser Richtlinie beziehen sich auf Möglichkeiten, wie Benutzer sich orientieren und die Inhalte und Funktionen finden können, die sie auf der aktuellen Seite oder auf anderen Seiten der Website suchen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie die Kriterien erfüllt werden</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.4.1 Blöcke überspringen (A)</td>
      <td>
        <p>
          Es sollte ein Mechanismus bereitgestellt werden, der es dem Benutzer ermöglicht, direkt zum Hauptinhalt oder zu den Funktionen der Seite zu springen, an den wiederholten Funktionen (wie dem Firmenlogo oder der Navigation) vorbei. Dies wird oft mit "Skip Links" erreicht — Links, die am Anfang des Seitenquellcodes eingefügt sind, die zum Hauptinhalt verlinken und durch CSS versteckt werden.
        </p>
        <p>
          Wenn eine ordentliche Struktur von Überschriften und semantischen Containern bereitgestellt wird (zum Beispiel {{htmlelement("section")}}, {{htmlelement("aside")}}, etc.), dann ist ein zusätzlicher "Skip Link" nicht notwendig.
        </p>
      </td>
      <td><em>Abschnitt zu "Skip Links" hinzufügen.</em></td>
    </tr>
    <tr>
      <td>2.4.2 Seitentitel einfügen (A)</td>
      <td>
        Jede Webseite sollte einen informativen
        {{htmlelement("title")}} enthalten, der den Inhalt/Zweck der Seite beschreibt.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_a_title"
          >Hinzufügen eines Titels</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.3 Logische Fokusreihenfolge (A)</td>
      <td>
        Die "Tabulatorreihenfolge" der fokussierbaren Seitenelemente (z. B. Links, Schaltflächen, Formulareingaben) ergibt einen logischen Sinn, was bedeutet, dass die Seite für nicht-sichtige/Tastaturbenutzer weiterhin benutzbar ist.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn/Accessibility/HTML#ui_controls"
          >UI-Steuerungen</a
        >
        für allgemeine Ratschläge zum Tabben zu Steuerungen. Wenn Sie Elemente in einer ungewöhnlichen Anordnung platzieren müssen, stellen Sie besser sicher, dass die Quellreihenfolge sinnvoll ist, und verwenden Sie dann CSS-Funktionen wie
        <a href="/de/docs/Learn/CSS/CSS_layout/Positioning">Positionierung</a>,
        um das Layout zu handhaben.
      </td>
    </tr>
    <tr>
      <td>2.4.4 Linkzweck (im Kontext) (A)</td>
      <td>
        Der Zweck/das Ziel eines Links kann aus dem Linktext oder aus seinem Umfeld (z. B. dem umliegenden Text) bestimmt werden. Ausnahmen sind, wo der Zweck des Links für <em>alle</em> Benutzer mehrdeutig ist (siehe
        <a href="https://www.w3.org/TR/WCAG20/#ambiguouslinkdef"
          >mehrdeutig für die Nutzer im Allgemeinen</a
        >
        für eine hilfreiche Erklärung dazu).
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn/Accessibility/HTML#meaningful_text_labels"
          >Sinnvolle Textmarker</a
        >. Beachten Sie auch, dass Sie Instanzen minimieren sollten, in denen mehrfache Kopien desselben Textes an verschiedene Orte verlinken. Dies kann Probleme für Bildschirmleser-Nutzer verursachen, die oft eine Liste der Links aus dem Kontext heraus aufrufen — mehrere Links, alle mit "hier klicken", "hier klicken", "hier klicken" beschriftet, wären verwirrend.
      </td>
    </tr>
    <tr>
      <td>2.4.5 Mehrere Navigationsmechanismen (AA)</td>
      <td>
        <p>
          Sie sollten mindestens zwei allgemeine Navigationsmechanismen bereitstellen, um Seiten auf Ihrer Website zu finden, z. B. Navigationsmenü, Breadcrumb-Navigation, Seitensuche, Sitemap, Liste verwandter Links usw.
        </p>
        <p>
          Die einzige Ausnahme ist, wenn eine Seite ein Schritt in einem Prozess ist und daher nur logisch Links zu den vorherigen und nächsten Schritten haben sollte.
        </p>
      </td>
      <td>
        Die meisten dieser Mechanismen können mit einfachen HTML-Features erstellt werden, zum Beispiel siehe
        <a
          href="/de/docs/Learn/Forms/HTML5_input_types#search_field"
          >Suchfeld</a
        >,
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#active_learning_creating_a_navigation_menu"
          >Erstellen eines Navigationsmenüs</a
        >,
        <a
          href="/de/docs/Learn/CSS/Styling_text/Styling_links#styling_links_as_buttons"
          >Links als Schaltflächen gestalten</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.6 Überschriften und Beschriftungen (AA)</td>
      <td>
        Überschriften (z. B. {{htmlelement("Heading_Elements", "&lt;h2&gt;")}}) und
        {{htmlelement("label")}} Elemente beschreiben klar den Zweck
        der Inhalte und Formularelemente, die sie beschreiben sollen.
      </td>
      <td>
        <p>
          Siehe
          <a href="/de/docs/Learn/Accessibility/HTML#ui_controls"
            >UI-Steuerungen</a
          >,
          <a href="/de/docs/Learn/Accessibility/HTML#meaningful_text_labels"
            >Sinnvolle Textmarker</a
          >,
          <a
            href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#the_basics_headings_and_paragraphs"
            >Die Grundlagen von Überschriften und Absätzen</a
          >,
          <a
            href="/de/docs/Learn/Forms/How_to_structure_a_web_form#the_label_element"
            >Das &#x3C;label>-Element</a
          >.
        </p>
        <p>
          Beachten Sie, dass Sie vermeiden sollten, Überschriften oder Beschriftungen zu duplizieren (z. B. mehrere Instanzen von "Weitere Informationen"), es sei denn, die Struktur ermöglicht es Ihnen, zwischen ihnen leicht zu unterscheiden.
        </p>
      </td>
    </tr>
    <tr>
      <td>2.4.7 Sichtbarer Fokus für fokussierbare Elemente (AA)</td>
      <td>
        Beim Durchblättern fokussierbarer Elemente wie Links oder Formulareingaben sollte ein visuelles Indikator zeigen, welches Element gerade im Fokus steht. Dies ist normalerweise ein gepunkteter oder blauer Umriss standardmäßig (abhängig von Browser, Plattform, etc.), kann aber durch CSS überschrieben werden.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#using_native_keyboard_accessibility"
          >Verwendung der nativen Tastatur-Zugänglichkeit</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.8 Standort innerhalb der Website (AAA)</td>
      <td>
        Wenn man sich auf einer Seite innerhalb einer komplexen Website oder eines Schrittes in einem Prozess befindet, sollte dem Benutzer ein Indikator gegeben werden, der zeigt, wo er sich auf der Website befindet, z. B. ein Breadcrumb-Navigation, Sitemap oder Text wie "Formularseite 2 von 10".
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.4.9 Linkzweck (nur Link) (AAA)</td>
      <td>
        Dieses Kriterium baut auf 2.4.4 auf und besagt, dass, um AAA-Konformität zu erreichen, der Zweck/das Ziel eines Links allein aus dem Linktext bestimmbar sein sollte, auch wenn dieser aus dem Kontext genommen ist.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn/Accessibility/HTML#meaningful_text_labels"
          >Sinnvolle Textmarker</a
        >. Beachten Sie auch, dass Sie Instanzen minimieren sollten, in denen mehrfache Kopien desselben Textes an verschiedene Orte verlinken. Dies kann Probleme für Bildschirmleser-Nutzer verursachen, die oft eine Liste der Links aus dem Kontext heraus aufrufen — mehrere Links, alle mit "hier klicken", "hier klicken", "hier klicken" beschriftet, wären verwirrend.
      </td>
    </tr>
    <tr>
      <td>2.4.10 Abschnittsüberschriften (AAA)</td>
      <td>
        <p>
          Zusätzlich zur Erstellung einer nützlichen Dokumentenstruktur sollten Überschriften auch den Inhalt genau beschreiben und ihn in logische Abschnitte unterteilen.
        </p>
        <p>
          Beachten Sie, dass sich dieses Kriterium auf Überschriften und Titel in allgemeinen Webinhalten bezieht (z. B. Überschriften innerhalb von Textinhalten). Überschriften und Titel für Benutzeroberflächen sind ein besonderer Fall, der in Kriterium 4.1.2 behandelt wird.
        </p>
      </td>
      <td>
        <p>
          Siehe
          <a
            href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#the_basics_headings_and_paragraphs"
            >Die Grundlagen von Überschriften und Absätzen</a
          >.
        </p>
      </td>
    </tr>
    <tr>
    <td> 2.4.11 Fokus nicht verdeckt (Minimum) (AA)</td>
    <td>
    <p> Wenn ein Benutzeroberflächenkomponente mit Tastaturfokus in den Fokus gerät, wird die Komponente nicht vollständig durch vom Autor erstellte Inhalte verdeckt.</p>
    <p> <strong>Hinweis:</strong> Wenn der Inhalt der Schnittstelle vom Benutzer neu positioniert werden kann, wird nur die anfängliche Position des benutzerverstellbaren Inhalts für Tests berücksichtigt, um diesem Standard zu entsprechen. Außerdem kann der vom Benutzer geöffnete Inhalt die Komponente, die den Fokus erhält, verdecken. Wenn der Benutzer die fokussierte Komponente aufdecken kann, ohne den Tastaturfokus zu ändern, wird die Komponente mit Fokus nicht als versteckt für Konformitäts- und Testzwecke betrachtet.</p>
    </td>
    <td>
    <p> Siehe <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum">Verstehen des Fokus nicht verdeckt (Minimum)</a>, um mehr über diesen Standard zu erfahren.</p>
    </td>
    </tr>
    <tr>
    <td> 2.4.12 Fokus nicht verdeckt (Erweitert) (AAA) </td>
    <td>
    <p> Folgen Sie den Regeln wie bei 2.4.11, außer dass, wenn ein Benutzeroberflächenkomponente mit Fokus in den Fokus gerät, kein Teil der Komponente durch vom Autor erstellte Inhalte verdeckt werden kann. Wenn die Schnittstelle konfigurierbar ist, werden nur die Anfangspositionen der benutzerverstellbaren Inhalte für das Testen und die Erfüllung dieses Standards berücksichtigt.</p>
    </td>
    <td>
    <p> Siehe <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced">Verstehen des Fokus nicht verdeckt (Erweitert) (Level AAA)</a>, um mehr über diesen Standard zu erfahren.</p> </td>
    </td>
    </tr>
<tr>
  <td> 2.4.13 Fokus Erscheinung (AAA)</td>
  <td>
    <p>Wenn der Tastaturfokus-Indikator sichtbar ist, erfüllt der Bereich des Fokus-Indikators alle folgenden:</p>
    <ul>
      <li>Er muss mindestens so groß sein wie der Bereich eines <code>2px</code> dicken Umfangs der unfokussierten Komponente oder Subkomponente, der den Inhalt, den Rand und den Hintergrund der Komponente beinhaltet, wobei äußere Schatten oder Glüheffekte ausgeschlossen sind.</li>
      <li>Es muss ein Kontrastverhältnis von mindestens 3:1 zwischen den gleichen Pixeln in den fokussierten und unfokussierten Zuständen bestehen.</li>
    </ul>
    <p> Die Ausnahmen sind:</p>
    <ul>
      <li>Der Fokus-Indikator wird vom Benutzer bestimmt und kann nicht vom Autor angepasst werden.</li>
      <li>Der Fokus-Indikator und die Hintergrundfarbe des Indikators werden nicht vom Autor modifiziert.</li>
    </ul>
  </td>
  <td>
    <p> Siehe <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html">Verstehen der Fokus Erscheinung (Level AAA)</a>, um mehr über diesen Standard zu erfahren.</p>
  </td>
</tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.4 Navigierbar: Bieten Sie Wege an, um Nutzern zu helfen, zu navigieren, Inhalte zu finden und festzustellen, wo sie sich befinden.](https://www.w3.org/TR/WCAG21/#navigable)

## Richtlinie 2.5 Eingabemethoden: Erleichtern Sie es Benutzern, Funktionalitäten durch verschiedene Eingabemethoden jenseits der Tastatur zu bedienen

Die Konformitätskriterien unter dieser Richtlinie stellen sicher, dass Benutzer in der Lage sind, mit digitaler Technologie durch verschiedene Eingabemethoden jenseits von Tastatur oder Maus zu interagieren (einschließlich Touchscreen, Stimme, Gerätemotion oder alternative Eingabegeräte).

<table>
 <thead>
  <tr>
   <th scope="col">Erfolgskriterien</th>
   <th scope="col">Wie die Kriterien erfüllt werden</th>
   <th scope="col">Praktische Ressource</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>2.5.1 Zeigergesten (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Alle Funktionen, die mit einem Zeiger bedient werden können, können mit Ein-Punkt-Aktionen bedient werden. Pfadbasierte oder Mehrpunktgesten sind nicht erforderlich, um eine Funktionalität zu bedienen. Ausnahmen bestehen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html">Verstehen von Zeigergesten</a></td>
  </tr>
  <tr>
   <td>2.5.2 Zeigerabwehr (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Für Funktionen, die mit einem Einzelzeiger bedient werden können, gilt mindestens eine der folgenden: kein Abwärtsereignis, Abbrechen/Rückgängig, Aufwärtsumkehr oder wesentlich.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html">Verstehen von Zeigerabwehr</a></td>
  </tr>
  <tr>
   <td>2.5.3 Beschriftung in Name (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Für jede Benutzeroberflächenkomponente, die ein sichtbares Textlabel enthält, stellen Sie sicher, dass der zugängliche Name das sichtbare Textlabel entweder enthält oder dem entspricht.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">Verstehen von Beschriftung in Name</a></td>
  </tr>
  <tr>
   <td>2.5.4 Bewegungssteuerung (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Stellen Sie sicher, dass für Funktionen, die a) durch Gerätemotion (wie Schütteln, Neigen) oder b) Benutzergesten, die durch Gerätesensoren (einschließlich einer Kamera) erkannt werden, ausgelöst werden können, beide der folgenden Bedingungen zutreffen: 1) Bewegungssteuerung kann deaktiviert werden, und 2) die Funktionalität kann ohne Verwendung von Gerätemotion oder Benutzergesten bedient werden. Ausnahmen bestehen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html">Verstehen von Bewegungssteuerung</a></td>
  </tr>
  <tr>
   <td>2.5.5 Zielgröße (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Die Größe des Zieltouchbereichs eines ausführbaren Elements muss mindestens 44 CSS-Pixel in Breite und Höhe betragen. Ausnahmen bestehen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html">Verstehen von Zielgröße</a></td>
  </tr>
  <tr>
   <td>2.5.6 Gleichzeitige Eingabemechanismen (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Stellen Sie sicher, dass Menschen verschiedene Eingabemethoden verwenden und zwischen diesen wechseln können, wenn sie mit digitalen Inhalten interagieren, einschließlich Touchscreen, Tastatur, Maus, Sprachbefehlen oder alternativen Eingabegeräten. Eine wesentliche Ausnahme besteht. </td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html">Verstehen von gleichzeitigen Eingabemechanismen</a></td>
 </tr>
 <tr>
 <td> 2.5.8 Zielgröße Minimum (AA)</td>
 <td> Die Zielgröße für Zeigereingaben sollte mindestens <code>24px</code> breit und <code>24px</code> hoch sein, mit Ausnahme der folgenden Bereiche:
 <ul>
  <li> <strong>Abstand:</strong>Ziele, die weniger als <code>24px x 24px</code> sind, sind so positioniert, dass, wenn ein <code>24px</code> Durchmesser-Kreis auf jedes Ziel-Bounding-Box zentriert wird, sich die Kreise nicht mit einem anderen Ziel oder dem Kreis für ein anderes untermaßiges Ziel überschneiden.</li>
  <li> <strong>Äquivalent:</strong> Eine separate Steuerung, die auf derselben Seite verfügbar ist, erfüllt diese Norm.</li>
  <li> <strong>Inline:</strong> Das Ziel befindet sich innerhalb einer Textzeile mit einer durch die Zeilenhöhe oder umgebenden Nicht-Ziel-Text eingeschränkten Größe.</li>
  <li> <strong>Nutzeragentensteuerung:</strong> Die Größe des Ziels wird durch den Nutzeragenten bestimmt und wurde vom Autor nicht modifiziert.</li>
  <li> <strong>Wesentlich:</strong> Eine bestimmte Darstellung des Ziels ist wesentlich oder gesetzlich vorgeschrieben, um die übermittelten Informationen zu vermitteln.</li>
 </ul>
 <td> Siehe <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html">Verstehen von Zielgröße Minimum</a> </td>
</tr>
  </tr>
 </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.5: Eingabemethoden: Erleichtern Sie es Benutzern, Funktionalitäten durch verschiedene Eingabemethoden jenseits der Tastatur zu bedienen.](https://www.w3.org/TR/WCAG21/#input-modalities)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG)

  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
  2. Operable
  3. [Verständlich](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Understanding_WCAG/Robust)

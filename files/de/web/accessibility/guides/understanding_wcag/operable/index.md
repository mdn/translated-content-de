---
title: Bedienbar
slug: Web/Accessibility/Guides/Understanding_WCAG/Operable
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so verfassen, dass sie den Erfolgskriterien des **Operable**-Prinzips der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 entsprechen. Operable besagt, dass Benutzeroberflächenkomponenten und die Navigation bedienbar sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Operable, die Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 2: Bedienbar — Benutzeroberflächenkomponenten und Navigation müssen bedienbar sein.](https://w3c.github.io/wcag/guidelines/22/#operable)

## Richtlinie 2.1 — Tastaturzugänglich: Machen Sie alle Funktionen über eine Tastatur verfügbar

Diese Richtlinie behandelt die Notwendigkeit, die Kernfunktionen einer Website neben anderen Mitteln (z. B. Maus) auch über eine Tastatur verfügbar zu machen, damit Benutzer, die auf Tastatursteuerungen angewiesen sind, darauf zugreifen können.

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
      <td>2.1.1 Tastatur (A)</td>
      <td>
        Alle Funktionen sollten über Tastatursteuerungen zugänglich sein, es sei denn,
        es kann nicht über die Tastatur gemacht werden (z. B. Freihandzeichnen). Eingebaute
        Steuerelemente sollten nach Möglichkeit verwendet werden (z. B. Tab durch Formular-
        Steuerelemente), und benutzerdefinierte Funktionen sollten nur bei Bedarf eingebaut werden.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie nach Möglichkeit semantische UI-Steuerelemente</a
        >
        und
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Wiedererstellung der Tastaturzugänglichkeit</a
        >
      </td>
    </tr>
    <tr>
      <td>2.1.2 Keine Tastaturfalle (A)</td>
      <td>
        <p>
          Wenn Sie mit der Tastatur in einen Funktionsbereich eintreten, sollten Sie
          diesen Bereich auch mit <em>nur</em> der Tastatur wieder verlassen können. Zum Beispiel, wenn Sie <kbd>Enter</kbd>/<kbd>Return</kbd>
          auf einer fokussierten Schaltfläche drücken, um ein Optionsfenster zu öffnen, sollten Sie
          dieses Fenster wieder schließen und mit der Tastatur zum Hauptinhalt zurückkehren können.
        </p>
        <p>
          Dies ist sehr wichtig, damit Tastaturbenutzer nicht in bestimmten Bereichen Ihrer Apps feststecken.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.1.3 Tastatur — alle Funktionen (AAA)</td>
      <td>
        Dies ist ein weiterer Schritt über das Kriterium 2.1.1 hinaus. Um AAA-Konformität zu erreichen, sollten alle Funktionen über Tastatursteuerungen zugänglich sein — ohne Ausnahmen.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie nach Möglichkeit semantische UI-Steuerelemente</a
        >
        und
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Wiedererstellung der Tastaturzugänglichkeit</a
        >
      </td>
    </tr>
    <tr>
      <td>
        2.1.4 Zeichen-Tastenkombinationen (A)
      </td>
      <td>
        Wenn eine einzelne Zeichen-Tastenkombination existiert, dann ist mindestens eine der
        folgenden Bedingungen wahr: Zeichen-Tastenkombinationen können deaktiviert,
        neu zugeordnet oder nur dann aktiv sein, wenn die relevante Benutzeroberflächenkomponente
        im Fokus steht.
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
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.1 Tastaturzugänglich: Machen Sie alle Funktionen über eine Tastatur verfügbar](https://w3c.github.io/wcag/guidelines/22/#keyboard-accessible).

## Richtlinie 2.2 — Genügend Zeit: Geben Sie den Benutzern genügend Zeit, um Inhalte zu lesen und zu nutzen

Diese Richtlinie behandelt Situationen, in denen Funktionen möglicherweise ein zeitliches Limit haben. Zum Beispiel müssen Käufe manchmal aus Sicherheitsgründen innerhalb eines bestimmten Zeitrahmens abgeschlossen werden.

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
      <td>2.2.1 Zeit ist anpassbar (A)</td>
      <td>
        <p>
          Für Funktionen mit zeitlichen Begrenzungen (z. B. das Abschließen einer Hotel- oder Flugbuchung, die oft zeitlich begrenzt ist), sollte dem Benutzer Steuerungen zur Verfügung gestellt werden, die es ihm ermöglichen, das Zeitlimit anzupassen, zu verlängern oder auszuschalten.
        </p>
        <p>
          Ausnahmen von dieser Regel sind Aktivitäten mit zeitlichen Begrenzungen, die länger als 20 Stunden sind, Echtzeitereignisse (z. B. Live-Multiplayer-Spiele) und alle anderen Aktivitäten, die ein Zeitlimit erfordern und ungültig wären, wenn es abgeschaltet wäre.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.2 Anhalten, stoppen, ausblenden (A)</td>
      <td>
        <p>
          Für sich automatisch bewegende/blinkende Inhalte, die länger als 5 Sekunden dauern und zusammen mit anderen Inhalten angezeigt werden, sollten Steuerungen bereitgestellt werden, um sie anzuhalten, zu stoppen oder auszublenden. Dies gilt nicht für sich bewegende/blinkende Inhalte, die für das Erlebnis wesentlich sind. Beispiele umfassen scrollenden Text und Videos.
        </p>
        <p>
          Für automatisch aktualisierte Informationen, die automatisch starten und zusammen mit anderen Inhalten angezeigt werden, sollten Steuerungen bereitgestellt werden, um sie anzuhalten, zu stoppen oder auszublenden, oder um die Häufigkeit der Updates zu steuern. Dies gilt nicht für automatisch aktualisierte Inhalte, die für das Erlebnis wesentlich sind. Beispiele umfassen Karussells oder rotierende Ankündigungen.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.3 Keine zeitlichen Begrenzungen (AAA)</td>
      <td>
        Dies baut auf den Kriterien 2.2.1 auf, die besagen, dass Inhalte, die die AAA-Konformität erreichen wollen, keine zeitlichen Begrenzungen haben sollten.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.4 Unterdrücken von Unterbrechungen (AAA)</td>
      <td>
        Alle Unterbrechungen wie Warnungen oder Zwischeneinblendungen sollten über eine verfügbare Funktion verfügen, um sie zu unterdrücken oder zu verschieben, es sei denn, es handelt sich um eine Notfallwarnung.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.5 Wiederherstellung der Authentifizierung (AAA)</td>
      <td>
        Wenn eine Authentifizierungssitzung während der Nutzung einer Webanwendung abläuft, sollte der Benutzer erneut authentifizieren können und seine Nutzung ohne Datenverlust fortsetzen können.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        2.2.6 Timeouts (AAA)
      </td>
      <td>
        <p>
          Wenn ein Timeout aufgrund von Benutzerinaktivität auftritt, sollten Benutzer zu Beginn eines Prozesses gewarnt werden, damit sie nicht überrascht sind, dass ein Timeout existiert (oder das Timeout darf erst nach 20 Stunden Inaktivität auftreten).
        </p>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html"
          >Verstehen von Timeouts</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.2 Genügend Zeit: Geben Sie den Benutzern genügend Zeit, um Inhalte zu lesen und zu nutzen](https://w3c.github.io/wcag/guidelines/22/#enough-time).

## Richtlinie 2.3 — Anfälle und physische Reaktionen: Gestalten Sie Inhalte nicht auf eine Weise, die bekanntermaßen Anfälle oder physische Reaktionen verursacht

Dies bezieht sich auf Inhalte, die, wenn sie nicht geändert werden, Anfälle bei Benutzern mit Erkrankungen wie Epilepsie verursachen könnten ODER physische Reaktionen (wie Schwindel) bei Benutzern mit Erkrankungen wie vestibulären Störungen hervorrufen könnten.

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
      <td>2.3.1 Drei Blitze oder unterhalb der Schwellenwerte (A)</td>
      <td>Inhalte enthalten keine Aspekte, die mehr als dreimal pro Sekunde blitzen, oder der blitzende Inhalt liegt unterhalb der akzeptablen <a href="https://w3c.github.io/wcag/guidelines/22/#dfn-general-flash-and-red-flash-thresholds">Blitz- und Rotblitz-Schwellenwerte</a>.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.2 Drei Blitze (AAA)</td>
      <td>Inhalte enthalten keine Aspekte, die mehr als dreimal pro Sekunde blitzen.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.3 Animationen aus Interaktionen (AAA)</td>
      <td>Benutzern ermöglichen, Animationen aus Interaktionen zu deaktivieren (sofern die Animation nicht wesentlich ist).</td>
      <td><a href="https://w3c.github.io/wcag/guidelines/22/#animation-from-interactions">Verstehen von Animationen aus Interaktionen</a></td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.3 Anfälle und physische Reaktionen: Gestalten Sie Inhalte nicht auf eine Weise, die bekanntermaßen Anfälle oder physische Reaktionen verursacht.](https://w3c.github.io/wcag/guidelines/22/#seizures-and-physical-reactions)

## Richtlinie 2.4 — Navigierbar: Bieten Sie Möglichkeiten, Benutzern beim Navigieren, Finden von Inhalten und Bestimmen ihrer Position zu helfen

Die Erfolgskriterien unter dieser Richtlinie beziehen sich auf Möglichkeiten, wie Benutzer in der Lage sein sollten, sich zu orientieren und die Inhalte und Funktionen zu finden, die sie auf der aktuellen Seite oder anderen Seiten der Website suchen.

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
      <td>2.4.1 Blöcke umgehen (A)</td>
      <td>
        <p>
          Eine Mechanismus sollte bereitgestellt werden, der es dem Benutzer ermöglicht, direkt zum Hauptinhalt oder zu den verfügbaren Funktionen auf der Seite zu springen, vorbei an den wiederholten Funktionen (wie dem Firmenlogo oder der Navigation). Dies wird oft mit "Überspringen-Links" erreicht — Links, die oben im Seitencode eingefügt werden, um zum Hauptinhalt zu führen und mit CSS ausgeblendet sind.
        </p>
        <p>
          Wenn eine ordnungsgemäße Struktur der Überschriften und semantischen Container bereitgestellt wird, um sich damit zu bewegen (z. B. {{htmlelement("section")}},
          {{htmlelement("aside")}}, etc.), dann ist ein zusätzlicher "Überspringen-Link" nicht notwendig.
        </p>
      </td>
      <td><em>Es muss ein Abschnitt zu "Überspringen-Links" hinzugefügt werden.</em></td>
    </tr>
    <tr>
      <td>2.4.2 Seitentitel einbinden (A)</td>
      <td>
        Jede Webseite sollte ein informatives
        {{htmlelement("title")}} enthalten, dessen Inhalt den
        Inhalt/Zweck der Seite beschreibt.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_a_title"
          >Hinzufügen eines Titels</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.3 Logische Fokussierreihenfolge (A)</td>
      <td>
        Die "Tabreihenfolge" von fokussierbaren Seitenfunktionen (z. B. Links, Schaltflächen,
        Formulareingaben) ergibt einen logischen Sinn, was bedeutet, dass die Seite für nichtsehende/Tastaturbenutzer noch nutzbar ist.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie nach Möglichkeit semantische UI-Steuerelemente</a
        >
        für allgemeine Ratschläge zum Tabben zu Steuerelementen. Wenn Sie Elemente
        in einem ungewöhnlichen Layout platzieren müssen, ist es besser sicherzustellen, dass die
        Quellreihenfolge sinnvoll ist, und dann CSS-Funktionen wie
        <a href="/de/docs/Learn_web_development/Core/CSS_layout/Positioning">Positionierung</a>
        zu verwenden, um das Layout zu gestalten.
      </td>
    </tr>
    <tr>
      <td>2.4.4 Zweck des Links (im Kontext) (A)</td>
      <td>
        Der Zweck/das Ziel eines Links kann aus dem Linktext oder aus seinem Umfeld (z. B. dem umgebenden Text) bestimmt werden. Ausnahmen sind, wo der Zweck des Links für <em>alle</em> Benutzer mehrdeutig ist (siehe
        <a href="https://w3c.github.io/wcag/guidelines/22/#dfn-ambiguous-to-users-in-general"
          >mehrdeutig für Benutzer im Allgemeinen</a
        >
        für eine nützliche Erklärung dazu).
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels"
          >Verwenden Sie sinnvolle Textetiketten</a
        >. Beachten Sie auch, dass Sie Fälle minimieren sollten, in denen mehrere Kopien
        desselben Textes an verschiedene Orte verlinkt sind. Dies kann Probleme
        für Bildschirmlesegerätenutzer verursachen, die häufig eine Liste der Links aus
        dem Zusammenhang herausbringen — mehrere Links, alle mit der Bezeichnung "hier klicken", "hier klicken",
        "hier klicken" wären verwirrend.
      </td>
    </tr>
    <tr>
      <td>2.4.5 Mehrere Navigationsmechanismen (AA)</td>
      <td>
        <p>
          Sie sollten mindestens zwei allgemeine Navigationsmechanismen bereitstellen, um
          Seiten auf Ihrer Website zu finden, z. B. Navigationsmenü, Breadcrumb-Navigation,
          Sitesuche, Sitemap, Liste verwandter Links, etc.
        </p>
        <p>
          Die einzige Ausnahme hiervon ist, wenn eine Seite ein Schritt in einem
          Prozess ist, sodass sie logisch nur Links zu den vorherigen und nächsten Schritten haben sollte.
        </p>
      </td>
      <td>
        Die meisten dieser Mechanismen können mit vollständig unterstützten HTML-Funktionen erstellt werden, zum Beispiel siehe
        <a
          href="/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#search_field"
          >Suchfeld</a
        >,
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#creating_a_navigation_menu"
          >Erstellung eines Navigationsmenüs</a
        >,
        <a
          href="/de/docs/Learn_web_development/Core/Text_styling/Styling_links#styling_links_as_buttons"
          >Links als Schaltflächen gestalten</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.6 Überschriften und Bezeichnungen (AA)</td>
      <td>
        Überschriften (z. B. {{htmlelement("Heading_Elements", "&lt;h2&gt;")}}) und
        {{htmlelement("label")}}-Elemente beschreiben klar den Zweck
        der Inhalte und Formularelemente, die sie beschreiben sollen.
      </td>
      <td>
        <p>
          Siehe
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
            >Verwenden Sie nach Möglichkeit semantische UI-Steuerelemente</a
          >,
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels"
            >Verwenden Sie sinnvolle Textetiketten</a
          >,
          <a
            href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
            >Die Grundlagen von Überschriften und Absätzen</a
          >,
          <a
            href="/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#the_label_element"
            >Das &#x3C;label>-Element</a
          >.
        </p>
        <p>
          Beachten Sie, dass Sie vermeiden sollten, Überschriften oder Bezeichnungen zu duplizieren (z. B.
          mehrere Instanzen von "Weitere Informationen"), es sei denn, die Struktur
          ermöglicht es Ihnen, zwischen ihnen leicht zu unterscheiden.
        </p>
      </td>
    </tr>
    <tr>
      <td>2.4.7 Sichtbarer Fokus für fokussierbare Elemente (AA)</td>
      <td>
        Beim Durchtabben von fokussierbaren Elementen wie Links oder Formulareingaben
        sollte ein visueller Indikator angezeigt werden, der Ihnen zeigt, welches Element aktuell
        im Fokus steht. Dies ist in der Regel eine gepunktete oder blaue Umrandung standardmäßig
        (abhängig von Browser, Plattform, etc.), aber dies kann durch CSS überschrieben werden.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie nach Möglichkeit semantische UI-Steuerelemente</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.8 Standort innerhalb der Website (AAA)</td>
      <td>
        Wenn Sie sich auf einer Seite innerhalb einer komplexen Website oder eines Satzes von Schritten befinden, sollte dem Benutzer eine Anzeige gegeben werden, wo er sich auf der Website befindet, z. B. eine Breadcrumb-Navigation, Sitemap oder Text wie "Formularseite 2 von 10".
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.4.9 Zweck des Links (nur Link) (AAA)</td>
      <td>
        Dieses Kriterium baut auf 2.4.4 auf und besagt, dass zur Konformität mit AAA der
        Zweck/das Ziel eines Links allein aus dem Linktext ersichtlich sein sollte,
        selbst wenn er aus dem Kontext herausgenommen wird.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels"
          >Verwenden Sie sinnvolle Textetiketten</a
        >. Beachten Sie auch, dass Sie Fälle minimieren sollten, in denen mehrere Kopien
        desselben Textes an verschiedene Orte verlinkt sind. Dies kann Probleme
        für Bildschirmlesegerätenutzer verursachen, die häufig eine Liste der Links aus
        dem Zusammenhang herausbringen — mehrere Links, alle mit der Bezeichnung "hier klicken", "hier klicken",
        "hier klicken" wären verwirrend.
      </td>
    </tr>
    <tr>
      <td>2.4.10 Abschnittsüberschriften (AAA)</td>
      <td>
        <p>
          Ebenso wie die Schaffung einer nützlichen Dokumentenstruktur sollten Überschriften auch den Inhalt genau beschreiben und in logische Abschnitte unterteilen.
        </p>
        <p>
          Beachten Sie, dass dieses Kriterium sich auf Überschriften und Titel in allgemeinen Webinhalten bezieht (z. B. Überschriften innerhalb von Textinhalten). Überschriften und Titel für Benutzeroberflächen sind ein Sonderfall, der in Kriterium 4.1.2 behandelt wird.
        </p>
      </td>
      <td>
        <p>
          Siehe
          <a
            href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
            >Die Grundlagen von Überschriften und Absätzen</a
          >.
        </p>
      </td>
    </tr>
    <tr>
    <td> 2.4.11 Fokus nicht verdeckt (Minimum) (AA)</td>
    <td>
    <p> Wenn eine Benutzeroberflächenkomponente den Tastaturfokus erhält, ist die Komponente nicht vollständig verborgen durch vom Autor erstellte Inhalte.</p>
    <p> <strong>Hinweis:</strong> Wenn der Inhalt der Benutzeroberfläche vom Benutzer neu positioniert werden kann, wird nur die anfängliche Position der benutzerbeweglichen Inhalte für den Test, um dieser Norm zu entsprechen, berücksichtigt. Außerdem können vom Benutzer geöffnete Inhalte die Komponente mit Fokus verdecken. Wenn der Benutzer die fokussierte Komponente ohne Änderung des Tastaturfokus sichtbar machen kann, wird die Komponente mit Fokus nicht als verborgen für Konformitäts- und Testzwecke betrachtet.</p>
    </td>
    <td>
    <p> Prüfen Sie <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum">Verstehen von Fokus nicht verdeckt (Minimum)</a>, um mehr über diesen Standard zu erfahren.</p>
    </td>
    </tr>
    <tr>
    <td> 2.4.12 Fokus nicht verdeckt (Erweitert) (AAA) </td>
    <td>
    <p> Folgt den Regeln wie 2.4.11, außer wenn eine Benutzeroberflächenkomponente den Fokus erhält, kann kein Teil der Komponente durch vom Autor erstellte Inhalte verborgen werden. Wenn die Schnittstelle konfigurierbar ist, werden nur die anfänglichen Positionen der benutzerbeweglichen Inhalte für den Test und das Erfüllen dieses Standards berücksichtigt.</p>
    </td>
    <td>
    <p> Prüfen Sie <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced">Verstehen von Fokus nicht verdeckt (Erweitert) (Level AAA)</a>, um mehr über diesen Standard zu erfahren.</p> </td>
    </td>
    </tr>
<tr>
  <td> 2.4.13 Fokusdarstellung (AAA)</td>
  <td>
    <p>Wenn der Tastaturfokus-Indikator sichtbar ist, entspricht die Fläche des Fokus-Indikators allen folgenden Anforderungen:</p>
    <ul>
      <li>Muss mindestens so groß sein wie die Fläche eines <code>2px</code> dicken Umfangs der nicht fokussierten Komponente oder Unterkomponente, die den Inhalt, Rahmen und Hintergrund der Komponente einschließt, jedoch äußere Schatten oder Leuchteffekte ausschließt.</li>
      <li>Muss ein Kontrastverhältnis von mindestens 3:1 zwischen denselben Pixeln in den fokussierten und nicht fokussierten Zuständen aufweisen</li>
    </ul>
    <p> Die Ausnahmen hierzu sind:</p>
    <ul>
      <li>Der Fokus-Indikator wird vom Benutzer bestimmt und kann vom Autor nicht angepasst werden.</li>
      <li>Die Farbe des Fokus-Indikators und des Indikators-Hintergrunds wird vom Autor nicht geändert.</li>
    </ul>
  </td>
  <td>
    <p> Prüfen Sie <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html">Verstehen von Fokusdarstellung (Level AAA)</a>, um mehr über diesen Standard zu erfahren.</p>
  </td>
</tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.4: Navigierbar: Bieten Sie Möglichkeiten, Benutzern beim Navigieren, Finden von Inhalten und Bestimmen ihrer Position zu helfen.](https://w3c.github.io/wcag/guidelines/22/#navigable)

## Richtlinie 2.5 Eingabemodalitäten: Erleichtern Sie es den Benutzern, Funktionen über verschiedene Eingaben jenseits der Tastatur zu bedienen

Die Erfolgskriterien unter dieser Richtlinie stellen sicher, dass Benutzer mit digitalen Technologien interagieren können, indem sie verschiedene Eingabemethoden jenseits von Tastatur oder Maus verwenden (einschließlich Touchscreen, Sprache, Gerätebewegung oder alternative Eingabegeräte).

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
   <td>2.5.1 Zeigergesten (A)</td>
   <td>Alle Funktionen, die mit einem Zeiger bedient werden können, können mit Einpunktaktionen bedient werden. Pfadbasierte oder mehrpunktige Gesten sind nicht erforderlich, um Funktionen zu bedienen. Ausnahmen existieren.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html">Verstehen von Zeigergesten</a></td>
  </tr>
  <tr>
   <td>2.5.2 Zeigerabbruch (A)</td>
   <td>Für Funktionen, die mit einem Einzelzeiger bedient werden können, gilt mindestens eine der folgenden Bedingungen: kein Down-Event, Abbruch/Rückgängigmachen, Hochumkehrung oder wesentlich.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html">Verstehen vom Zeigerabbruch</a></td>
  </tr>
  <tr>
   <td>2.5.3 Beschriftung im Namen (A)</td>
   <td>Für jede Benutzeroberflächenkomponente, die ein sichtbares Textetikett enthält, stellen Sie sicher, dass der zugängliche Name mit dem sichtbaren Text im Etikett übereinstimmt (oder diesen einschließt).</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">Verstehen von Beschriftungen im Namen</a></td>
  </tr>
  <tr>
   <td>2.5.4 Bewegungsauslösung (A)</td>
   <td>Stellen Sie sicher, dass für Funktionen, die durch a) Gerätebewegung (wie Schütteln, Kippen) oder b) Benutzergesten, die von Gerätesensoren (einschließlich einer Kamera) erkannt werden, ausgelöst werden können, beide der folgenden Bedingungen gelten: 1) Bewegungsauslösung kann deaktiviert werden und 2) die Funktion kann ohne Verwendung von Gerätebewegungen oder Benutzergesten ausgeführt werden. Ausnahmen existieren.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html">Verstehen von Bewegungsauslösung</a></td>
  </tr>
  <tr>
   <td>2.5.5 Zielgröße (AAA)</td>
   <td>Die Größe der Touch-Ziel eines aktiven Elements muss mindestens 44 CSS-Pixel in Breite und Höhe betragen. Ausnahmen gelten.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html">Verstehen von Zielgrößen</a></td>
  </tr>
  <tr>
   <td>2.5.6 Gleichzeitige Eingabemechanismen (AAA)</td>
   <td>Stellen Sie sicher, dass Personen beim Interagieren mit digitalen Inhalten verschiedene Modi der Eingabe verwenden und wechseln können, einschließlich Touchscreen, Tastatur, Maus, Sprachbefehle oder alternative Eingabegeräte. Eine wesentliche Ausnahme existiert.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html">Verstehen von gleichzeitigen Eingabemechanismen</a></td>
 </tr>
 <tr>
 <td> 2.5.8 Zielgröße Minimum (AA)</td>
 <td> Die Zielgröße für Zeigereingaben sollte mindestens <code>24px</code> in Breite und Höhe betragen, außer für die folgenden Bereiche:
 <ul>
  <li> <strong>Abstand:</strong> Ziele, die kleiner als <code>24px x 24px</code> sind, sind so positioniert, dass wenn ein <code>24px</code> Durchmesserkreis auf das Begrenzungsfeld jedes Ziels zentriert ist, die Kreise sich nicht mit einem anderen Ziel oder dem Kreis für ein anderes untergroßes Ziel überschneiden.</li>
  <li> <strong>Äquivalent:</strong> Eine separate Steuerung, die die gleiche Funktion erfüllt und dieser Norm entspricht, ist auf derselben Seite verfügbar.</li>
  <li> <strong>Inline:</strong> Das Ziel befindet sich innerhalb einer Textzeile mit seiner Größe, die durch die Zeilenhöhe oder den umgebenden Nicht-Ziel-Text begrenzt ist.</li>
  <li> <strong>Benutzer-Agent-Steuerung:</strong> Die Größe des Ziels wird vom Benutzeragenten bestimmt und wurde nicht vom Autor geändert.</li>
  <li> <strong>Wesentlich:</strong> Eine bestimmte Darstellung des Ziels ist wesentlich oder gesetzlich vorgeschrieben für die übermittelten Informationen.</li>
 </ul>
 <td> Prüfen Sie <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html">Verstehen von Zielgröße Minimum</a> </td>
</tr>
  </tr>
 </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.5: Eingabemodalitäten: Erleichtern Sie es den Benutzern, Funktionen über verschiedene Eingaben jenseits der Tastatur zu bedienen.](https://w3c.github.io/wcag/guidelines/22/#input-modalities)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. Bedienbar
  3. [Verstehbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

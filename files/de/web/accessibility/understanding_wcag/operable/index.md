---
title: Bedienbar
slug: Web/Accessibility/Understanding_WCAG/Operable
l10n:
  sourceCommit: be68d68e0bf1c9cdf5f40939201403638fb90cbe
---

{{AccessibilitySidebar}}

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so verfassen, dass sie den Erfolgskriterien entsprechen, die im **Bedienbar**-Prinzip der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 dargelegt sind. "Bedienbar" besagt, dass Benutzeroberflächenkomponenten und Navigation bedienbar sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Bedienbarkeit sowie deren Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 2: Bedienbar — Benutzeroberflächenkomponenten und Navigation müssen bedienbar sein.](https://www.w3.org/TR/WCAG21/#operable)

## Richtlinie 2.1 — Tastaturzugänglich: Alle Funktionen per Tastatur verfügbar machen

Diese Richtlinie behandelt die Notwendigkeit, die Kernfunktionalitäten einer Website zusätzlich zu anderen Methoden (z. B. Maus) über eine Tastatur zugänglich zu machen, damit Benutzer, die auf Tastatursteuerungen angewiesen sind, darauf zugreifen können.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterium</th>
      <th scope="col">Wie man die Kriterien erfüllt</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.1.1 Tastatur (A)</td>
      <td>
        Alle Funktionen sollten mit Tastatursteuerungen zugänglich sein, es sei denn, es ist nicht möglich, sie per Tastatur auszuführen (z. B. freihändiges Zeichnen). Integrierte Steuerungen sollten, wenn möglich, verwendet werden (z. B. durch Formularelemente tabben), und Sie sollten nur dann eigene Funktionen einbauen, wenn dies erforderlich ist.
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
          Beim Betreten eines Funktionsbereichs über die Tastatur sollten Sie diesen Bereich auch wieder ausschließlich mit der Tastatur verlassen können. Zum Beispiel, wenn Sie <kbd>Enter</kbd>/<kbd>Return</kbd> auf einer fokussierten Schaltfläche drücken, um ein Optionsfenster zu öffnen, sollten Sie dieses Fenster wieder schließen und mit der Tastatur zum Hauptinhalt zurückkehren können.
        </p>
        <p>
          Dies ist sehr wichtig, damit Tastaturbenutzer nicht in bestimmten Abschnitten Ihrer Apps gefangen sind.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.1.3 Tastatur — alle Funktionalitäten (AAA)</td>
      <td>
        Dies ist ein weiterer Schritt über das Kriterium 2.1.1 hinaus. Um AAA-Konformität zu erreichen, sollte alle Funktionalität über Tastatursteuerungen zugänglich sein — ohne Ausnahmen.
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
        Wenn eine einzelne Zeichen-Tastenkombination existiert, dann trifft mindestens eines der Folgenden zu: Einzelne Zeichen-Tastenkombinationen können deaktiviert, neu zugeordnet oder nur dann aktiv sein, wenn die relevante Benutzeroberflächenkomponente im Fokus steht.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html"
          >Zeichen-Tastenkombinationen verstehen</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.1 Tastaturzugänglich: Alle Funktionen per Tastatur verfügbar machen](https://www.w3.org/TR/WCAG21/#keyboard-accessible).

## Richtlinie 2.2 — Genügend Zeit: Genügend Zeit zur Verfügung stellen, um Inhalte zu lesen und zu nutzen

Diese Richtlinie behandelt Situationen, in denen die Funktionalität möglicherweise zeitlich begrenzt ist. Zum Beispiel müssen Käufe manchmal aus Sicherheitsgründen innerhalb eines bestimmten Zeitlimits abgeschlossen werden.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterium</th>
      <th scope="col">Wie man die Kriterien erfüllt</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.2.1 Zeitsteuerung ist anpassbar (A)</td>
      <td>
        <p>
          Bei Funktionen mit Zeitlimits (z. B. ein Hotel- oder Flugbuchungsvorgang hat oft ein Zeitlimit) sollte der Benutzer Kontrollen haben, um das Zeitlimit anzupassen, zu verlängern oder zu deaktivieren.
        </p>
        <p>
          Ausnahmen sind Aktivitäten mit Zeitlimits von mehr als 20 Stunden, Echtzeitereignisse (z. B. Multiplayer-Spiele in Echtzeit) und jede andere Aktivität, die ein Zeitlimit benötigt und ungültig wäre, wenn es deaktiviert würde.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.2 Anhalten, stoppen, verstecken (A)</td>
      <td>
        <p>
          Bei bewegten/blinkenden Inhalten, die automatisch starten, länger als 5 Sekunden dauern und neben anderen Inhalten angezeigt werden, sollten Steuerelemente zum Anhalten, Stoppen oder Verstecken bereitgestellt werden. Dies gilt nicht für bewegte/blinkende Inhalte, die wesentlich für die Erfahrung sind. Beispiele sind rollende Texte und Videos.
        </p>
        <p>
          Bei automatisch aktualisierten Informationen, die automatisch starten und neben anderen Inhalten angezeigt werden, sollten Steuerelemente bereitgestellt werden, um sie anzuhalten, zu stoppen, zu verstecken oder die Aktualisierungsfrequenz zu steuern. Dies gilt nicht für automatisch aktualisierte Inhalte, die wesentlich für die Erfahrung sind. Beispiele sind Karussells oder rotierende Ankündigungen.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.3 Keine Zeitlimits (AAA)</td>
      <td>
        Dies baut auf Kriterium 2.2.1 auf und besagt, dass Inhalte, die die AAA-Konformität erreichen wollen, keine Zeitlimits haben sollten.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.4 Unterdrücken von Unterbrechungen (AAA)</td>
      <td>
        Jegliche Unterbrechungen wie Warnungen oder interstitielle Anzeigen sollten eine Funktionalität zur Verfügung haben, um sie zu unterdrücken oder zu verschieben, es sei denn, es handelt sich um eine Notfallwarnung.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.5 Re-Authentifizierung (AAA)</td>
      <td>
        Wenn eine Authentifizierungssitzung während der Nutzung einer Web-App abläuft, kann der Benutzer sich erneut authentifizieren und seine Nutzung fortsetzen, ohne Daten zu verlieren.
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
          Wenn es eine Zeitüberschreitung (verursacht durch Benutzerinaktivität) gibt, sollten Benutzer zu Beginn eines Prozesses gewarnt werden, damit sie nicht überrascht sind, dass eine Zeitüberschreitung existiert (oder die Zeitüberschreitung erst nach 20 Stunden Inaktivität zulassen).
        </p>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html"
          >Zeitüberschreitungen verstehen</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.2 Genügend Zeit: Genügend Zeit zur Verfügung stellen, um Inhalte zu lesen und zu nutzen](https://www.w3.org/TR/WCAG21/#enough-time).

## Richtlinie 2.3 — Anfälle und körperliche Reaktionen: Inhalte nicht so gestalten, dass bekannt ist, dass sie Anfälle oder körperliche Reaktionen hervorrufen

Dies bezieht sich auf Inhalte, die, wenn sie nicht geändert werden, Anfälle bei Benutzern mit Erkrankungen wie Epilepsie oder physische Reaktionen (z. B. Schwindel) bei Benutzern mit Erkrankungen wie vestibulären Störungen auslösen könnten.

<table>
  <thead>
    <tr>
    <th scope="col">Erfolgskriterium</th>
    <th scope="col">Wie man die Kriterien erfüllt</th>
    <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.3.1 Drei Blitze oder unterhalb des Schwellenwerts (A)</td>
      <td>Inhalte enthalten keinen Aspekt, der mehr als dreimal pro Sekunde blitzt, oder blinkende Inhalte sind unterhalb der akzeptablen <a href="https://www.w3.org/TR/WCAG20/#general-thresholddef">Blitz- und Rotblitz-Schwellenwerte</a>.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.2 Drei Blitze (AAA)</td>
      <td>Inhalte enthalten keinen Aspekt, der mehr als dreimal pro Sekunde blitzt.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.3 Animationen durch Interaktionen (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
      <td>Erlauben Sie Benutzern, Animationen aufgrund von Interaktionen zu deaktivieren (es sei denn, die Animation ist wesentlich).</td>
      <td><a href="https://www.w3.org/TR/WCAG21/#animation-from-interactions">Animationen aus Interaktionen verstehen</a></td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.3 Anfälle und körperliche Reaktionen: Inhalte nicht so gestalten, dass bekannt ist, dass sie Anfälle oder körperliche Reaktionen hervorrufen.](https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions)

## Richtlinie 2.4 — Navigierbar: Möglichkeiten bereitstellen, um Benutzern zu helfen, zu navigieren, Inhalte zu finden und festzustellen, wo sie sich befinden

Die Konformitätskriterien unter dieser Richtlinie beziehen sich auf Möglichkeiten, wie Benutzer sich orientieren und die Inhalte und Funktionen, die sie auf der aktuellen Seite oder anderen Seiten der Website suchen, finden können.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterium</th>
      <th scope="col">Wie man die Kriterien erfüllt</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.4.1 Blöcke überspringen (A)</td>
      <td>
        <p>
          Es sollte ein Mechanismus bereitgestellt werden, der es dem Benutzer ermöglicht, direkt zum Hauptinhalt oder zur Funktionalität auf der Seite zu springen, vorbei an den sich wiederholenden Elementen (wie das Firmenlogo oder die Navigation). Dies wird oft durch "Sprunglinks" erreicht — Links, die am Anfang des Seitenquellcodes platziert werden, zum Hauptinhalt führen und per CSS verborgen sind.
        </p>
        <p>
          Wenn eine ordnungsgemäße Struktur von Überschriften und semantischen Containern zur Navigation bereitgestellt wird (zum Beispiel {{htmlelement("section")}},{{htmlelement("aside")}} usw.), dann wird kein zusätzlicher "Sprunglink" benötigt.
        </p>
      </td>
      <td><em>Ein Abschnitt über "Sprunglinks" muss hinzugefügt werden.</em></td>
    </tr>
    <tr>
      <td>2.4.2 Seitentitel einbeziehen (A)</td>
      <td>
        Jede Webseite sollte ein informatives
        {{htmlelement("title")}} enthalten, dessen Inhalt den Inhalt/Zweck der
        Seite beschreibt.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_a_title"
          >Einen Titel hinzufügen</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.3 Logische Fokusreihenfolge (A)</td>
      <td>
        Die "Tab-Reihenfolge" der fokussierbaren Seitenmerkmale (z. B. Links, Schaltflächen, Formulareingaben) ergibt einen logischen Sinn, was bedeutet, dass die Seite auch für nicht-sichtbare/Tastaturbenutzer nutzbar ist.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn/Accessibility/HTML#ui_controls"
          >UI-Steuerungen</a
        >
        für allgemeine Ratschläge zum Tabben zu Steuerungen. Wenn Sie Elemente in einer ungewöhnlichen Anordnung platzieren müssen, ist es besser, sicherzustellen, dass die Quellreihenfolge sinnvoll ist, und dann CSS-Funktionen wie
        <a href="/de/docs/Learn/CSS/CSS_layout/Positioning">Positionierung</a>
        zu verwenden, um das Layout zu steuern.
      </td>
    </tr>
    <tr>
      <td>2.4.4 Zweck des Links (im Kontext) (A)</td>
      <td>
        Der Zweck/das Ziel eines Links kann aus dem Linktext oder aus seinem Kontext bestimmt werden (z. B. dem umgebenden Text). Ausnahmen sind dort, wo der Zweck des Links für <em>alle</em> Benutzer unklar ist (siehe
        <a href="https://www.w3.org/TR/WCAG20/#ambiguouslinkdef"
          >unklar für Benutzer im Allgemeinen</a
        >
        für eine nützliche Erklärung hierzu).
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn/Accessibility/HTML#meaningful_text_labels"
          >Bedeutungsvolle Textbeschriftungen</a
        >. Beachten Sie auch, dass Sie Instanzen minimieren sollten, bei denen mehrere Kopien desselben Textes auf unterschiedliche Stellen verlinken. Dies kann Probleme für Bildschirmlesegerätenutzer verursachen, die häufig eine Liste der Links außerhalb des Kontexts anzeigen — mehrere Links, die alle als "Hier klicken" gekennzeichnet sind, wären verwirrend.
      </td>
    </tr>
    <tr>
      <td>2.4.5 Mehrere Navigationsmechanismen (AA)</td>
      <td>
        <p>
          Sie sollten mindestens zwei allgemeine Navigationsmechanismen bereitstellen, um Seiten auf Ihrer Website zu finden, z. B. Navigationsmenü, Breadcrumb, Site-Suche, Sitemap, Liste verwandter Links, usw.
        </p>
        <p>
          Die einzige Ausnahme hierbei ist, wenn eine Seite ein Schritt in einem Prozess ist, sodass sie nur logisch Links zu den vorherigen und nächsten Schritten haben sollte.
        </p>
      </td>
      <td>
        Die meisten dieser Mechanismen können mit einfachen HTML-Funktionen erstellt werden, siehe zum Beispiel
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
          >Stilisierung von Links als Schaltflächen</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.6 Überschriften und Beschriftungen (AA)</td>
      <td>
        Überschriften (z. B. {{htmlelement("Heading_Elements", "&lt;h2&gt;")}}) und
        {{htmlelement("label")}}-Elemente beschreiben klar den Zweck
        der Inhalte und Formularelemente, die sie beschreiben sollen.
      </td>
      <td>
        <p>
          Siehe
          <a href="/de/docs/Learn/Accessibility/HTML#ui_controls"
            >UI-Steuerungen</a
          >,
          <a href="/de/docs/Learn/Accessibility/HTML#meaningful_text_labels"
            >Bedeutungsvolle Textbeschriftungen</a
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
          Beachten Sie, dass Sie die Duplizierung von Überschriften oder Beschriftungen vermeiden sollten (z. B. mehrere Instanzen von "Weitere Informationen"), es sei denn, die Struktur ermöglicht es Ihnen, zwischen ihnen leicht zu unterscheiden.
        </p>
      </td>
    </tr>
    <tr>
      <td>2.4.7 Sichtbarer Fokus für fokussierbare Elemente (AA)</td>
      <td>
        Beim Tabben durch fokussierbare Elemente wie Links oder Formulareingaben sollte ein visueller Indikator anzeigen, welches Element derzeit den Fokus besitzt. Dies ist normalerweise eine gepunktete oder blaue Umrandung standardmäßig (abhängig von Browser, Plattform usw.), aber dies kann durch CSS überschrieben werden.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#using_native_keyboard_accessibility"
          >Verwendung nativer Tastaturzugänglichkeit</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.8 Standort innerhalb der Website (AAA)</td>
      <td>
        Wenn man sich auf einer Seite innerhalb einer komplexen Website oder eines Schrittsatzes befindet, sollte dem Benutzer ein Hinweis gegeben werden, wo er sich auf der Website befindet, z. B. eine Breadcrumb, Sitemap oder Text wie "Formularseite 2 von 10".
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.4.9 Zweck des Links (nur Link) (AAA)</td>
      <td>
        Dieses Kriterium baut auf Kriterium 2.4.4 auf und besagt, dass der Zweck/das Ziel eines Links, um AAA-Konformität zu erreichen, allein durch den Linktext bestimmbar sein sollte, selbst wenn er aus dem Kontext heraus ist.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn/Accessibility/HTML#meaningful_text_labels"
          >Bedeutungsvolle Textbeschriftungen</a
        >. Beachten Sie auch, dass Sie Instanzen minimieren sollten, bei denen mehrere Kopien desselben Textes auf unterschiedliche Stellen verlinken. Dies kann Probleme für Bildschirmlesegerätenutzer verursachen, die häufig eine Liste der Links außerhalb des Kontexts anzeigen — mehrere Links, die alle als "Hier klicken" gekennzeichnet sind, wären verwirrend.
      </td>
    </tr>
    <tr>
      <td>2.4.10 Abschnittsüberschriften (AAA)</td>
      <td>
        <p>
          Neben der Erstellung einer nützlichen Dokumentstruktur sollten Überschriften auch den Inhalt korrekt beschreiben und in logische Abschnitte unterteilen.
        </p>
        <p>
          Beachten Sie, dass sich dieses Kriterium auf Überschriften und Titel in allgemeinen Webinhalten bezieht (z. B. Überschriften innerhalb von Textinhalten). Überschriften und Titel für Benutzeroberflächen sind ein Sonderfall, der im Kriterium 4.1.2 behandelt wird.
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
    <p> Wenn eine Benutzeroberflächenkomponente den Tastaturfokus erhält, ist die Komponente nicht vollständig aufgrund enthaltener, vom Autor erstellter Inhalte verborgen.</p>
    <p> <strong>Hinweis:</strong> Wenn die Inhalte der Oberfläche durch den Benutzer neu positioniert werden können, wird für die Konformität mit diesem Standard nur die anfängliche Position der benutzerbeweglichen Inhalte betrachtet. Außerdem kann durch den Benutzer geöffneten Inhalte die Komponente, die Fokus erhält, verdecken. Weiterhin, wenn der Benutzer die fokussierte Komponente ohne Änderung des Tastaturfokus anzeigen kann, wird die Komponente mit Fokus für Konformitäts- und Testzwecke nicht als verdeckt betrachtet.</p>
    </td>
    <td>
    <p> Lernen Sie mehr über diesen Standard: <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum">Den Fokus nicht verdeckt (Minimum) verstehen</a>.</p>
    </td>
    </tr>
    <tr>
    <td> 2.4.12 Fokus nicht verdeckt (Erweitert) (AAA) </td>
    <td>
    <p> Folgt den Regeln wie 2.4.11, außer wenn eine Benutzeroberflächenkomponente den Fokus erhält, darf kein Teil der Komponente durch vom Autor erstellte Inhalte verdeckt sein. Wenn die Oberfläche konfigurierbar ist, werden für Test- und Konformitätszwecke nur die anfänglichen Positionen von benutzerbeweglichen Inhalten berücksichtigt.</p>
    </td>
    <td>
    <p> Lernen Sie mehr über diesen Standard: <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced">Den Fokus nicht verdeckt (Erweitert) (Stufe AAA) verstehen</a>.</p> </td>
    </td>
    </tr>
<tr>
  <td> 2.4.13 Fokuserscheinung (AAA)</td>
  <td>
    <p>Wenn der Tastaturfokus-Indikator sichtbar ist, erfüllt das Gebiet des Fokus-Indikators alle folgenden Anforderungen:</p>
    <ul>
      <li>Muss mindestens so groß sein wie der Bereich eines <code>2px</code> dicken Rahmens der unfokussierten Komponente oder Unterkomponente, die den Inhalt, die Umrandung und den Hintergrund der Komponente umfasst, ohne Außenschatten oder Glüheffekte.</li>
      <li>Muss ein Kontrastverhältnis von mindestens 3:1 zwischen denselben Pixeln im fokussierten und unfokussierten Zustand aufweisen</li>
    </ul>
    <p> Die Ausnahmen hierzu sind:</p>
    <ul>
      <li>Der Fokus-Indikator wird vom Benutzer bestimmt und kann vom Autor nicht angepasst werden.</li>
      <li>Der Fokus-Indikator und die Hintergrundfarbe des Indikators werden vom Autor nicht modifiziert.</li>
    </ul>
  </td>
  <td>
    <p> Lernen Sie mehr über diesen Standard: <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html">Die Fokuserscheinung (Stufe AAA) verstehen</a>.</p>
  </td>
</tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.4 Navigierbar: Möglichkeiten bereitstellen, um Benutzern zu helfen, zu navigieren, Inhalte zu finden und festzustellen, wo sie sich befinden.](https://www.w3.org/TR/WCAG21/#navigable)

## Richtlinie 2.5 Eingabemodalitäten: Es den Nutzern erleichtern, Funktionen über verschiedene Eingabemöglichkeiten außerhalb der Tastatur zu bedienen

Die Konformitätskriterien unter dieser Richtlinie stellen sicher, dass Benutzer in der Lage sind, mit digitalen Technologien unter Nutzung verschiedener Eingabemethoden über eine Tastatur oder Maus hinaus zu interagieren (einschließlich Touchscreen, Sprachsteuerung, Gerätemotion oder alternativer Eingabegeräte).

<table>
 <thead>
  <tr>
   <th scope="col">Erfolgskriterium</th>
   <th scope="col">Wie man die Kriterien erfüllt</th>
   <th scope="col">Praktische Ressource</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>2.5.1 Zeigergesten (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Alle Funktionen, die mit einem Zeigegerät ausgeführt werden können, können mit Einzelpunktaktionen ausgeführt werden. Pfadbasierte oder Mehrpunktgesten sind nicht erforderlich, um Funktionen auszuführen. Es gibt Ausnahmen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html">Zeigergesten verstehen</a></td>
  </tr>
  <tr>
   <td>2.5.2 Zeiger-Stornierung (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Für Funktionen, die mit einem Einzelzeiger bedient werden können, trifft mindestens eines der folgenden zu: kein Down-Ereignis, Abbrechen/Rückgängig, Aufhebung oder wesentlich.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html">Zeiger-Stornierung verstehen</a></td>
  </tr>
  <tr>
   <td>2.5.3 Beschriftung im Namen (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Für jede Benutzeroberflächenkomponente, die eine sichtbare Textbeschriftung enthält, sollte der zugängliche Name (oder enthalten) die sichtbare Text in der Beschriftung entsprechen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">Beschriftung im Namen verstehen</a></td>
  </tr>
  <tr>
   <td>2.5.4 Bewegungssteuerung (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Stellen Sie sicher, dass für Funktionen, die durch a) Gerätemotion (wie Schütteln, Neigen) oder b) durch Gerätesensoren erkanntes Benutzergebärden (inklusive Kamera) ausgelöst werden können, beide der folgenden Bedingung gelten: 1) Bewegungssteuerung kann deaktiviert werden, und 2) die Funktionalität kann ohne den Einsatz von Gerätemotion oder Benutzergebärden bedient werden. Es gibt Ausnahmen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html">Bewegungssteuerung verstehen</a></td>
  </tr>
  <tr>
   <td>2.5.5 Zielgröße (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Die Größe des berührbaren Ziels eines anklickbaren Elements muss mindestens 44 CSS-Pixel in Breite und Höhe betragen. Es gibt Ausnahmen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html">Zielgröße verstehen</a></td>
  </tr>
  <tr>
   <td>2.5.6 Gleichzeitige Eingabemechanismen (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Stellen Sie sicher, dass Personen verschiedene Eingabemodi verwenden und zwischen diesen wechseln können, wenn sie mit digitalen Inhalten interagieren, einschließlich Touchscreen, Tastatur, Maus, Sprachbefehle oder alternativen Eingabegeräten. Es gibt eine wesentliche Ausnahme.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html">Gleichzeitige Eingabemechanismen verstehen</a></td>
 </tr>
 <tr>
 <td> 2.5.8 Zielgröße Minimum (AA)</td>
 <td> Die Zielgröße für Zeigereingaben sollte mindestens <code>24px</code> breit und <code>24px</code> hoch sein, außer für die folgenden Bereiche:
 <ul>
  <li> <strong>Abstand:</strong>Ziele, die kleiner als <code>24px x 24px</code> sind, sind so positioniert, dass, wenn ein <code>24px</code>-Durchmesser-Kreis auf dem Begrenzungsrahmen jedes Ziels zentriert ist, die Kreise sich nicht mit einem anderen Ziel oder dem Kreis für ein anderes untergroßes Ziel überschneiden.</li>
  <li> <strong>Äquivalent:</strong> Ein separates Steuerelement, das die gleiche Funktion erfüllt und diesen Standard erfüllt, ist auf derselben Seite verfügbar.</li>
  <li> <strong>Inline:</strong> Das Ziel befindet sich in einer Textzeile mit einer Größe, die durch die Zeilenhöhe oder umgebenden nicht zielgerichteten Text eingeschränkt ist.</li>
  <li> <strong>Benutzeragentensteuerung:</strong> Die Größe des Ziels wird durch den Benutzeragenten bestimmt und wurde nicht vom Autor geändert.</li>
  <li> <strong>Wesentlich:</strong> Eine bestimmte Präsentation des Ziels ist wesentlich oder gesetzlich erforderlich für die vermittelte Information.</li>
 </ul>
 <td> Lernen Sie mehr über diesen Standard: <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html">Zielgröße Minimum verstehen</a> </td>
</tr>
  </tr>
 </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.5: Eingabemodalitäten: Es den Nutzern erleichtern, Funktionen über verschiedene Eingabemöglichkeiten außerhalb der Tastatur zu bedienen.](https://www.w3.org/TR/WCAG21/#input-modalities)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG)

  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
  2. Bedienbar
  3. [Verständlich](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Understanding_WCAG/Robust)

---
title: Bedienbar
slug: Web/Accessibility/Guides/Understanding_WCAG/Operable
l10n:
  sourceCommit: 0b8f00bb9ece33c6964eea886b2f7db8711d7b62
---

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so schreiben, dass sie den Erfolgskriterien entsprechen, die im **Bedienbar**-Prinzip der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 beschrieben sind. Bedienbar besagt, dass Benutzeroberflächenkomponenten und Navigation bedienbar sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Bedienbar und deren Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 2: Bedienbar — Benutzeroberflächenkomponenten und Navigation müssen bedienbar sein.](https://w3c.github.io/wcag/guidelines/22/#operable)

## Richtlinie 2.1 — Tastaturzugänglich: Machen Sie alle Funktionen von einer Tastatur aus verfügbar

Diese Richtlinie behandelt die Notwendigkeit, Kernfunktionen einer Website über eine Tastatur zusätzlich zu anderen Mitteln (z. B. Maus) zugänglich zu machen, damit Benutzer, die auf Tastatursteuerung angewiesen sind, darauf zugreifen können.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">So erfüllen Sie die Kriterien</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.1.1 Tastatur (A)</td>
      <td>
        Alle Funktionen sollten mit Tastatursteuerungen zugänglich sein, es sei
        denn, dies ist mit der Tastatur nicht möglich (z. B. Freihandzeichnung).
        Eingebaute Steuerungen sollten nach Möglichkeit verwendet werden (z. B.
        Tabulatortaste durch Formsteuerungen), und benutzerdefinierte
        Funktionen sollten nur dort implementiert werden, wo sie benötigt
        werden.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie nach Möglichkeit semantische UI-Steuerungen</a
        >
        und
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Erneute Implementierung der Tastaturzugänglichkeit</a
        >
      </td>
    </tr>
    <tr>
      <td>2.1.2 Keine Tastaturfalle (A)</td>
      <td>
        <p>
          Wenn Sie einen Funktionsbereich mit der Tastatur betreten, sollten Sie
          diesen Bereich auch nur mit der <em>Tastatur</em> wieder verlassen
          können. Zum Beispiel, wenn Sie die <kbd>Enter</kbd>/<kbd>Return</kbd>
          -Taste auf einer fokussierten Schaltfläche drücken, um ein
          Optionsfenster zu öffnen, sollten Sie dieses Fenster wieder schließen
          und zur Hauptinhalte mit der Tastatur zurückkehren können.
        </p>
        <p>
          Dies ist sehr wichtig, damit Tastaturbenutzer nicht in bestimmten
          Bereichen Ihrer Apps gefangen sind.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.1.3 Tastatur — alle Funktionen (AAA)</td>
      <td>
        Dies ist ein weiterer Schritt über das Kriterium 2.1.1 hinaus. Um die
        AAA-Konformität zu erreichen, sollten alle Funktionen ohne Ausnahmen
        mit Tastatursteuerungen zugänglich sein.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie nach Möglichkeit semantische UI-Steuerungen</a
        >
        und
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Erneute Implementierung der Tastaturzugänglichkeit</a
        >
      </td>
    </tr>
    <tr>
      <td>
        2.1.4 Zeichentastenkombinationen (A)
      </td>
      <td>
        Wenn eine einzelne Zeichentastenkombination existiert, dann trifft
        mindestens eines der folgenden Punkte zu: Tastenkombinationen mit einem
        Zeichen können deaktiviert, neu zugeordnet oder sind nur aktiv, wenn die
        relevante Benutzeroberflächenkomponente fokussiert ist.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html"
          >Verständnis von Zeichentastenkombinationen</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.1 Tastaturzugänglich: Machen Sie alle Funktionen von einer Tastatur aus verfügbar](https://w3c.github.io/wcag/guidelines/22/#keyboard-accessible).

## Richtlinie 2.2 — Genügend Zeit: Benutzern genügend Zeit geben, Inhalte zu lesen und zu nutzen

Diese Richtlinie behandelt Situationen, in denen Funktionen möglicherweise ein Zeitlimit haben. Zum Beispiel müssen Käufe manchmal innerhalb eines Zeitlimits abgeschlossen werden, aus Sicherheitsgründen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">So erfüllen Sie die Kriterien</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.2.1 Zeit ist anpassbar (A)</td>
      <td>
        <p>
          Für Funktionen mit Zeitlimits (z. B. das Abschließen einer
          Hotel- oder Flugbuchung hat oft ein Zeitlimit), sollte der Benutzer
          Steuerungen erhalten, um das Zeitlimit anzupassen, zu verlängern oder
          zu deaktivieren.
        </p>
        <p>
          Ausnahmen hiervon sind Aktivitäten mit Zeitlimits von mehr als 20
          Stunden, Echtzeitereignisse (z. B. Live-Multiplayer-Spiele), und jede
          andere Aktivität, die ein Zeitlimit erfordert und ungültig wäre,
          wenn sie deaktiviert würde.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.2 Anhalten, stoppen, verstecken (A)</td>
      <td>
        <p>
          Für sich automatisch bewegende oder blinkende Inhalte, die länger als
          5 Sekunden dauern und zusammen mit anderem Inhalt gezeigt werden,
          sollten Steuerungen bereitgestellt werden, um sie anzuhalten, zu
          stoppen oder zu verstecken. Dies gilt nicht für Inhalte, die
          essenziell für die Erfahrung sind. Beispiele sind scrollende Texte und
          Videos.
        </p>
        <p>
          Bei sich automatisch aktualisierenden Informationen, die
          automatisch starten und zusammen mit anderem Inhalt angezeigt werden,
          sollten Steuerungen bereitgestellt werden, um sie anzuhalten, zu
          stoppen oder zu verstecken oder um die Häufigkeit der
          Aktualisierungen zu steuern. Dies gilt nicht für
          sich automatisch aktualisierende Inhalte, die essenziell für die
          Erfahrung sind. Beispiele sind Karussells oder drehende
          Ankündigungen.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.3 Keine Zeitlimits (AAA)</td>
      <td>
        Dies baut auf den Kriterien 2.2.1 auf und besagt, dass Inhalte,
        die die AAA-Konformität erreichen wollen, keine Zeitlimits haben sollten.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.4 Unterdrückung von Unterbrechungen (AAA)</td>
      <td>
        Alle Unterbrechungen wie Warnungen oder Werbung sollten eine
        Funktionalität zur Unterdrückung oder Verschiebung haben, es sei denn,
        es handelt sich um eine Notfallwarnung.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.5 Erneute Authentifizierung (AAA)</td>
      <td>
        Wenn eine Authentifizierungssitzung während der Benutzung einer Web-App
        abläuft, kann der Benutzer sich erneut authentifizieren und ihre Nutzung
        ohne Datenverlust fortsetzen.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        2.2.6 Timeouts (AAA)
      </td>
      <td>
        <p>
          Wenn ein Timeout (verursacht durch Benutzerinaktivität) eintritt,
          warnen Sie die Benutzer zu Beginn eines Prozesses, damit sie nicht
          überrascht sind, dass ein Timeout existiert (oder erlauben Sie das
          Timeout nur nach 20 Stunden Inaktivität).
        </p>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html"
          >Verständnis der Timeouts</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.2 Genügend Zeit: Benutzern genügend Zeit geben, Inhalte zu lesen und zu nutzen](https://w3c.github.io/wcag/guidelines/22/#enough-time).

## Richtlinie 2.3 — Anfälle und körperliche Reaktionen: Gestalten Sie Inhalte so, dass sie keine Anfälle oder körperliche Reaktionen verursachen

Dies bezieht sich auf Inhalte, die ohne Änderung Anfälle bei Benutzern mit Erkrankungen wie Epilepsie auslösen könnten ODER körperliche Reaktionen (wie Schwindel) bei Benutzern mit Erkrankungen wie vestibulären Störungen verursachen könnten.

<table>
  <thead>
    <tr>
    <th scope="col">Erfolgskriterien</th>
    <th scope="col">So erfüllen Sie die Kriterien</th>
    <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.3.1 Drei Blitze oder unter Schwelle (A)</td>
      <td>Der Inhalt enthält keine Aspekte, die mehr als dreimal pro Sekunde blitzen, oder blinkende Inhalte liegen unter den akzeptablen <a href="https://w3c.github.io/wcag/guidelines/22/#dfn-general-flash-and-red-flash-thresholds">Blitz- und Rotblitz-Schwellenwerten</a>.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.2 Drei Blitze (AAA)</td>
      <td>Der Inhalt enthält keine Aspekte, die mehr als dreimal pro Sekunde blitzen.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.3 Animationen aus Interaktionen (AAA)</em></td>
      <td>Benutzern erlauben, Animationen aus Interaktionen zu deaktivieren (es sei denn, die Animation ist essenziell).</td>
      <td><a href="https://w3c.github.io/wcag/guidelines/22/#animation-from-interactions">Verständnis von Animationen aus Interaktionen</a></td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.3 Anfälle und körperliche Reaktionen: Gestalten Sie Inhalte so, dass sie keine Anfälle oder körperliche Reaktionen verursachen.](https://w3c.github.io/wcag/guidelines/22/#seizures-and-physical-reactions)

## Richtlinie 2.4 — Navigierbar: Bieten Sie Möglichkeiten, Benutzern zu helfen, zu navigieren, Inhalte zu finden und zu bestimmen, wo sie sich befinden

Die Konformitätskriterien unter dieser Richtlinie beziehen sich auf Möglichkeiten, Benutzern zu ermöglichen, sich zu orientieren und die Inhalte und Funktionen zu finden, die sie auf der aktuellen Seite oder anderen Seiten der Website suchen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">So erfüllen Sie die Kriterien</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.4.1 Blöcke umgehen (A)</td>
      <td>
        <p>
          Es sollte ein Mechanismus bereitgestellt werden, der es dem Benutzer
          ermöglicht, direkt zum Hauptinhalt oder zur verfügbaren Funktionalität
          auf der Seite zu springen und die wiederkehrenden Merkmale (wie das
          Firmenlogo oder die Navigation) zu umgehen. Dies wird oft durch
          "Skip-Links" erreicht - Links, die oben im Seitenquellcode eingefügt
          werden, die zum Hauptinhalt führen und durch CSS verborgen werden.
        </p>
        <p>
          Wenn eine richtige Struktur von Überschriften und semantischen
          Containern bereitgestellt wird, um damit zu navigieren (zum Beispiel
          {{htmlelement("section")}}, {{htmlelement("aside")}}, etc.),
          dann ist ein zusätzlicher "Skip-Link" nicht notwendig.
        </p>
      </td>
      <td><em>Ein Abschnitt zu "Skip-Links" muss hinzugefügt werden.</em></td>
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
          >Hinzufügen eines Titels</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.3 Logische Fokusreihenfolge (A)</td>
      <td>
        Die "Tab-Reihenfolge" von fokussierbaren Seitenfunktionen (z. B. Links,
        Schaltflächen, Formulareingaben) ergibt einen logischen Sinn, was
        bedeutet, dass die Seite auch von sehbehinderten/benutzenden
        Tastaturbenutzern verwendet werden kann.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie nach Möglichkeit semantische UI-Steuerungen</a
        >
        für allgemeine Ratschläge zum Tabben durch Steuerungen. Wenn Sie
        Elemente in einem ungewöhnlichen Layout platzieren müssen, ist es
        besser, sicherzustellen, dass die Quellreihenfolge sinnvoll ist, dann
        nutzen Sie CSS-Funktionen wie
        <a href="/de/docs/Learn_web_development/Core/CSS_layout/Positioning">Positionierung</a>
        um das Layout zu handhaben.
      </td>
    </tr>
    <tr>
      <td>2.4.4 Linkzweck (im Kontext) (A)</td>
      <td>
        Der Zweck/das Ziel eines Links kann aus dem Linktext oder aus seinem
        Umfeld (z. B. dem umgebenden Text) bestimmt werden. Ausnahmen sind
        Links, deren Zweck für <em>alle</em> Benutzer unklar ist (siehe
        <a href="https://w3c.github.io/wcag/guidelines/22/#dfn-ambiguous-to-users-in-general"
          >mehrdeutig für Benutzer im Allgemeinen</a
        >
        für eine nützliche Erklärung).
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels"
          >Verwenden Sie sinnvolle Textbeschriftungen</a
        >. Beachten Sie auch, dass Sie Fälle minimieren sollten, in denen
        mehrere Kopien desselben Textes auf verschiedene Orte verlinken. Dies
        kann Probleme für Benutzer von Bildschirmlesegeräten verursachen, die
        oft eine Liste der Links aus dem Kontext aufrufen - mehrere Links, alle
        mit "Hier klicken", würden verwirrend sein.
      </td>
    </tr>
    <tr>
      <td>2.4.5 Mehrere Navigationsmechanismen (AA)</td>
      <td>
        <p>
          Sie sollten mindestens zwei allgemeine Navigationsmechanismen
          bereitstellen, um Seiten auf Ihrer Website zu finden, zum Beispiel
          Navigationsmenü, Breadcrumb-Leiste, Seitensuche, Sitemap, Liste
          verwandter Links, etc.
        </p>
        <p>
          Die einzige Ausnahme hiervon ist eine Seite, die ein Schritt in einem
          Prozess ist, sodass logisch nur Links zu den vorherigen und nächsten
          Schritten vorhanden sein sollten.
        </p>
      </td>
      <td>
        Die meisten dieser Mechanismen können mit vollständig unterstützten
        HTML-Features erstellt werden, zum Beispiel siehe
        <a
          href="/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#search_field"
          >Suchfeld</a
        >,
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#creating_a_navigation_menu"
          >Erstellen eines Navigationsmenüs</a
        >,
        <a
          href="/de/docs/Learn_web_development/Core/Text_styling/Styling_links#styling_links_as_buttons"
          >Links als Schaltflächen stylen</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.6 Überschriften und Beschriftungen (AA)</td>
      <td>
        Überschriftselemente (z. B. {{htmlelement("Heading_Elements", "&lt;h2&gt;")}})
        und {{htmlelement("label")}} -Elemente beschreiben klar den Zweck
        der Inhalte und Formularelemente, die sie beschreiben sollen.
      </td>
      <td>
        <p>
          Siehe
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
            >Verwenden Sie nach Möglichkeit semantische UI-Steuerungen</a
          >,
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels"
            >Verwenden Sie sinnvolle Textbeschriftungen</a
          >,
          <a
            href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
            >Die Grundlagen von Überschriften und Absätzen</a
          >,
          <a
            href="/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#the_label_element"
            >Das &#x3C;label> -Element</a
          >.
        </p>
        <p>
          Beachten Sie, dass Sie doppelte Überschriften oder Beschriftungen
          vermeiden sollten (z. B. mehrere Instanzen von "Weitere
          Informationen"), es sei denn, die Struktur ermöglicht es Ihnen, sie
          leicht zu unterscheiden.
        </p>
      </td>
    </tr>
    <tr>
      <td>2.4.7 Sichtbarer Fokus für fokussierbare Elemente (AA)</td>
      <td>
        Beim Tabben durch fokussierbare Elemente wie Links oder Formulareingaben
        sollte es einen visuellen Indikator geben, der zeigt, welches Element
        derzeit den Fokus hat. Dies ist normalerweise eine gepunktete oder blaue
        Umrandung (abhängig vom Browser, der Plattform, etc.), dies kann aber
        durch CSS überschrieben werden.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie nach Möglichkeit semantische UI-Steuerungen</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.8 Standort innerhalb der Seite (AAA)</td>
      <td>
        Wenn Sie sich auf einer Seite innerhalb einer komplexen Website oder
        eines Schrittsatzes befinden, sollte der Benutzer einen Indikator
        erhalten, wo er sich auf der Seite befindet, zum Beispiel eine
        Breadcrumb-Leiste, Sitemap oder ein Text wie "Formularseite 2 von 10".
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.4.9 Linkzweck (nur Link) (AAA)</td>
      <td>
        Dieses Kriterium baut auf 2.4.4 auf und besagt, dass zur Konformität
        nach AAA der Zweck/das Ziel eines Links allein aus dem Linktext
        heraus erkennbar sein sollte, auch wenn er aus dem Kontext gerissen wird.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels"
          >Verwenden Sie sinnvolle Textbeschriftungen</a
        >. Beachten Sie auch, dass Sie Fälle minimieren sollten, in denen
        mehrere Kopien desselben Textes auf verschiedene Orte verlinken. Dies
        kann Probleme für Benutzer von Bildschirmlesegeräten verursachen, die
        oft eine Liste der Links aus dem Kontext aufrufen - mehrere Links, alle
        mit "Hier klicken", würden verwirrend sein.
      </td>
    </tr>
    <tr>
      <td>2.4.10 Abschnittsüberschriften (AAA)</td>
      <td>
        <p>
          Neben der Erstellung einer nützlichen Dokumentstruktur, sollten
          Überschriften auch den Inhalt voneinander trennen und logisch in
          Abschnitte gliedern.
        </p>
        <p>
          Beachten Sie, dass sich dieses Kriterium auf Überschriften und Titel
          im allgemeinen Webinhalt bezieht (z. B. Überschriften innerhalb von
          Textinhalten). Überschriften und Titel für Benutzeroberflächen sind
          ein spezieller Fall, der in Kriterium 4.1.2 behandelt wird.
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
    <p> Wenn eine Benutzeroberflächenkomponente den Tastaturfokus erhält, darf die Komponente aufgrund von enthaltenen, vom Autor erstellten Inhalten nicht vollständig verborgen sein.</p>
    <p> <strong>Hinweis:</strong> Wenn der Inhalt der Benutzeroberfläche vom Benutzer neu positioniert werden kann, wird für die Prüfung der Konformität mit diesem Standard nur die Anfangsposition des benutzerbewegbaren Inhalts berücksichtigt. Auch Inhalte, die vom Benutzer geöffnet werden, können die Komponente verdecken, die den Fokus erhält. Wenn der Benutzer die fokussierte Komponente jedoch ohne Änderung des Tastaturfokus sichtbar machen kann, wird die Komponente mit Fokus nicht als verborgen betrachtet, was Konformitäts- und Prüfungszwecke betrifft.</p>
    </td>
    <td>
    <p> Erfahren Sie mehr zu diesem Standard unter <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum">Verständnis von Fokus nicht verdeckt (Minimum)</a>.</p>
    </td>
    </tr>
    <tr>
    <td> 2.4.12 Fokus nicht verdeckt (Erweitert) (AAA) </td>
    <td>
    <p> Gilt die Regeln wie 2.4.11 außer wenn eine Benutzeroberflächenkomponente den Fokus erhält, darf kein Teil der Komponente durch vom Autor erstellte Inhalte verdeckt werden. Wenn die Benutzeroberfläche konfigurierbar ist, werden nur die ursprünglichen Positionen benutzerbewegbarer Inhalte für die Prüfung und Erfüllung dieses Standards berücksichtigt.</p>
    </td>
    <td>
    <p> Erfahren Sie mehr zu diesem Standard unter <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced">Verständnis von Fokus nicht verdeckt (Erweitert) (Level AAA)</a>.</p> </td>
    </td>
    </tr>
<tr>
  <td> 2.4.13 Fokusdarstellung (AAA)</td>
  <td>
    <p>Wenn der Fokus-Indikator der Tastatur sichtbar ist, erfüllt der Bereich des Fokus-Indikators alle folgenden Bedingungen:</p>
    <ul>
      <li>Muss mindestens so groß sein wie der Bereich eines <code>2px</code> dicken Umfangs der un-fokussierten Komponente oder Unterkomponente, der den Inhalt der Komponente, ihre Grenze und den Hintergrund umfasst, außen vor gelassen verwischte Schatten oder Leuchteffekte.</li>
      <li>Muss einen Kontrastverhältnis von mindestens 3:1 zwischen denselben Pixeln im fokussierten und un-fokussierten Zustand haben.</li>
    </ul>
    <p> Die Ausnahmen hiervon sind:</p>
    <ul>
      <li>Der Fokus-Indikator wird vom Benutzer festgelegt und kann vom Autor nicht angepasst werden.</li>
      <li>Der Fokus-Indikator und die Hintergrundfarbe des Indikators wurden vom Autor nicht geändert.</li>
    </ul>
  </td>
  <td>
    <p> Erfahren Sie mehr zu diesem Standard unter <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html">Verständnis von Fokusdarstellung (Level AAA)</a>.</p>
  </td>
</tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.4 Navigierbar: Bieten Sie Möglichkeiten, Benutzern zu helfen, zu navigieren, Inhalte zu finden und zu bestimmen, wo sie sich befinden.](https://w3c.github.io/wcag/guidelines/22/#navigable)

## Richtlinie 2.5 Eingabemodalitäten: Machen Sie es Benutzern einfacher, Funktionen durch verschiedene Eingaben jenseits der Tastatur zu bedienen

Die Konformitätskriterien unter dieser Richtlinie stellen sicher, dass Benutzer in der Lage sind, mit digitaler Technologie über verschiedene Eingabemethoden jenseits von Tastatur oder Maus (einschließlich Touchscreen, Sprache, Gerätesteuerung oder alternativen Eingabegeräten) zu interagieren.

<table>
 <thead>
  <tr>
   <th scope="col">Erfolgskriterien</th>
   <th scope="col">So erfüllen Sie die Kriterien</th>
   <th scope="col">Praktische Ressource</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>2.5.1 Zeigergesten (A)</em></td>
   <td>Alle Funktionen, die mit einem Zeiger bedient werden können, können mit Einzelpunktaktionen bedient werden. Pfadbasierte oder mehrpunktige Gesten sind für keine Funktionalität erforderlich. Es existieren Ausnahmen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html">Verständnis von Zeigergesten</a></td>
  </tr>
  <tr>
   <td>2.5.2 Abbrechen von Zeigern (A)</em></td>
   <td>Bei Funktionen, die mit einem Einzelzeiger bedient werden können, trifft mindestens eines der folgenden Punkte zu: kein Down-Event, Abbruch/Rückgängigmachen, Rückkehr oder essenziell.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html">Verständnis von Abbrechen von Zeigern</a></td>
  </tr>
  <tr>
   <td>2.5.3 Beschriftung im Namen (A)</em></td>
   <td>Für jede Benutzeroberflächenkomponente, die ein sichtbares Textlabel enthält, stellen Sie sicher, dass der zugängliche Name mit dem sichtbaren Text im Label übereinstimmt (oder ihn einschließt).</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">Verständnis von Beschriftung im Namen</a></td>
  </tr>
  <tr>
   <td>2.5.4 Bewegungsauslösung (A)</em></td>
   <td>Stellen Sie sicher, dass für Funktionen, die durch a) Gerätestörungen (wie Schütteln, Neigen) oder b) Benutzergesten, die durch Gerätesensoren erkannt werden (einschließlich einer Kamera), beide der folgenden Punkte zutreffen: 1) Bewegungsauslösung kann deaktiviert werden, und 2) die Funktionalität kann ohne Verwendung von Gerätestörungen oder Benutzergesten bedient werden. Ausnahmen existieren.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html">Verständnis der Bewegungsauslösung</a></td>
  </tr>
  <tr>
   <td>2.5.5 Zielgröße (AAA)</td>
   <td>Die Größe eines berührbaren Ziels muss mindestens 44 CSS-Pixels in Breite und Höhe betragen. Es existieren Ausnahmen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html">Verständnis der Zielgröße</a></td>
  </tr>
  <tr>
   <td>2.5.6 Gleichzeitige Eingabemechanismen (AAA)</td>
   <td>Stellen Sie sicher, dass Menschen verschiedene Eingabemodi verwenden und zwischen ihnen wechseln können, wenn sie mit digitalen Inhalten, einschließlich Touchscreen, Tastatur, Maus, Sprachbefehlen oder alternativen Eingabegeräten interagieren. Eine essenzielle Ausnahme existiert. </td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html">Verständnis der gleichzeitigen Eingabemechanismen</a></td>
 </tr>
 <tr>
 <td> 2.5.8 Mindestzielgröße (AA)</td>
 <td> Die Zielgröße für Zeigereingaben sollte mindestens <code>24px</code> breit und <code>24px</code> hoch sein, außer für die folgenden Bereiche:
 <ul>
  <li> <strong>Abstand:</strong>Ziele, die weniger als <code>24px x 24px</code> groß sind, sind so positioniert, dass wenn ein <code>24px</code> Durchmesser-Kreis auf das Zentrum des Boxmodels des Ziels gerichtet wird, sich die Kreise nicht mit einem anderen Ziel überschneiden oder mit dem Kreis anderer untergroßer Ziele.</li>
  <li> <strong>Äquivalent:</strong> Eine separate Steuerung, die die gleiche Funktion erfüllt, die diesen Standard erfüllt, ist auf derselben Seite verfügbar.</li>
  <li> <strong>Inline:</strong> Das Ziel befindet sich in einer Textzeile, mit seiner Größe durch die Zeilenhöhe oder den umgebenden Nicht-Zieltext beschränkt ist.</li>
  <li> <strong>Benutzeragentensteuerung:</strong> Die Größe des Ziels wird durch den Benutzeragenten bestimmt und wurde vom Autor nicht verändert.</li>
  <li> <strong>Essenziell:</strong> Eine besondere Präsentation des Ziels ist essenziell oder rechtlich erforderlich für die darzustellende Information.</li>
 </ul>
 <td> Erfahren Sie mehr über <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html">Verständnis der Mindestzielgröße</a> </td>
</tr>
  </tr>
 </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.5: Eingabemodalitäten: Machen Sie es Benutzern einfacher, Funktionen durch verschiedene Eingaben jenseits der Tastatur zu bedienen.](https://w3c.github.io/wcag/guidelines/22/#input-modalities)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  1. [Erfassbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. Bedienbar
  3. [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

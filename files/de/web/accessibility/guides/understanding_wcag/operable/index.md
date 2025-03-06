---
title: Bedienbar
slug: Web/Accessibility/Guides/Understanding_WCAG/Operable
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Dieser Artikel bietet praktische Ratschläge dazu, wie Sie Ihre Webinhalte so gestalten können, dass sie den Erfolgskriterien des WCAG-Prinzips **Bedienbar** entsprechen. Bedienbar besagt, dass Benutzeroberflächenkomponenten und Navigation bedienbar sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Bedienbar und seine Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 2: Bedienbar — Benutzeroberflächenkomponenten und Navigation müssen bedienbar sein.](https://www.w3.org/TR/WCAG21/#operable)

## Richtlinie 2.1 — Tastaturzugänglichkeit: Machen Sie alle Funktionen über eine Tastatur verfügbar

Diese Richtlinie behandelt die Notwendigkeit, die Kernfunktionalität einer Website zusätzlich zu anderen Mitteln (z. B. Maus) auch über eine Tastatur verfügbar zu machen, damit Benutzer, die auf Tastatursteuerungen angewiesen sind, darauf zugreifen können.

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
        Alle Funktionen sollten mit Tastatursteuerung zugänglich sein, es sei denn,
        dies ist nicht möglich (z. B. Freihandzeichnen). Wo möglich, sollten integrierte
        Steuerungen verwendet werden (z. B. das Durchtabben durch Formularelemente), und
        maßgeschneiderte Funktionen sollten nur dann erstellt werden, wenn nötig.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI-Steuerungen</a
        >
        und
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Wiederherstellung der Tastaturzugänglichkeit</a
        >
      </td>
    </tr>
    <tr>
      <td>2.1.2 Keine Tastaturfalle (A)</td>
      <td>
        <p>
          Wenn Sie eine Funktionalität mit der Tastatur betreten, sollten Sie
          nur mit der Tastatur wieder aus dieser Sektion herauskommen können. Zum Beispiel, wenn Sie
          auf einen fokussierten Button drücken, um ein Optionen-Fenster zu öffnen,
          sollten Sie dieses Fenster auch wieder schließen können und zum Hauptinhalt
          mit der Tastatur zurückkehren können.
        </p>
        <p>
          Dies ist sehr wichtig, damit Tastaturbenutzer nicht in bestimmten Abschnitten
          Ihrer Anwendungen gefangen sind.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.1.3 Tastatur — alle Funktionen (AAA)</td>
      <td>
        Dies geht über das Kriterium 2.1.1 hinaus. Um eine AAA-Konformität zu
        erreichen, sollten alle Funktionen mit Tastatursteuerung erreichbar sein — ohne
        Ausnahmen.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI-Steuerungen</a
        >
        und
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Wiederherstellung der Tastaturzugänglichkeit</a
        >
      </td>
    </tr>
    <tr>
      <td>
        2.1.4 Zeichenkurzbefehle (A)
        <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        Wenn ein einzelner Zeichenkurzbefehl existiert, muss mindestens eines der
        folgenden wahr sein: einzelne Zeichenkurzbefehle können abgeschaltet,
        neu zugeordnet oder nur aktiv sein, wenn die relevante Benutzeroberflächenkomponente
        im Fokus ist.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html"
          >Verständnis von Zeichenkurzbefehlen</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.1 Tastaturzugänglichkeit: Machen Sie alle Funktionen über eine Tastatur verfügbar](https://www.w3.org/TR/WCAG21/#keyboard-accessible).

## Richtlinie 2.2 — Ausreichend Zeit: Geben Sie Nutzern genügend Zeit, um Inhalte zu lesen und zu verwenden

Diese Richtlinie behandelt Situationen, in denen Funktionalitäten zeitlich begrenzt sind. Beispielsweise müssen Käufe manchmal aus Sicherheitsgründen innerhalb einer bestimmten Zeit abgeschlossen werden.

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
      <td>2.2.1 Zeitsteuerung ist anpassbar (A)</td>
      <td>
        <p>
          Für Funktionen mit zeitlichen Begrenzungen (z. B. Abschluss einer Hotel- oder
          Flugbuchung hat oft eine Zeitbegrenzung), sollte dem Benutzer die Möglichkeit
          gegeben werden, die Zeitbegrenzung anzupassen, zu verlängern oder auszuschalten.
        </p>
        <p>
          Ausnahmen davon sind Aktivitäten mit Zeitbegrenzungen, die länger als 20
          Stunden dauern, Echtzeitereignisse (z. B. Live-Multiplayer-Spiele) und
          jede andere Aktivität, die eine Zeitbegrenzung erfordert und ungültig
          würde, wenn sie abgeschaltet würde.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.2 Anhalten, stoppen, verstecken (A)</td>
      <td>
        <p>
          Für bewegende/blinkende Inhalte, die automatisch beginnen, länger als 5
          Sekunden dauern und neben anderen Inhalten angezeigt werden, sollten
          Steuerungen bereitgestellt werden, um sie anzuhalten, zu stoppen oder zu
          verstecken. Dies gilt nicht für bewegende/blinkende Inhalte, die essenziell
          für das Erlebnis sind. Beispiele umfassen scrollenden Text und Videos.
        </p>
        <p>
          Für automatisch aktualisierte Informationen, die automatisch beginnen und
          neben anderen Inhalten angezeigt werden, sollten Steuerungen bereitgestellt
          werden, um sie anzuhalten, zu stoppen, zu verstecken oder um die Frequenz der
          Updates zu kontrollieren. Dies gilt nicht für automatisch aktualisierte
          Inhalte, die essenziell für das Erlebnis sind. Beispiele sind Karussells
          oder rotierende Ankündigungen.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.3 Keine zeitlichen Begrenzungen (AAA)</td>
      <td>
        Dies baut auf den Kriterien 2.2.1 auf und besagt, dass Inhalte, die AAA-Konformität
        erreichen wollen, keine zeitlichen Begrenzungen haben sollten.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.4 Unterdrückung von Unterbrechungen (AAA)</td>
      <td>
        Alle Unterbrechungen wie Warnungen oder Zwischenwerbung sollten
        unterdrückt oder verschoben werden können, es sei denn, es handelt sich um
        einen Notfallalarm.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.5 Erneute Authentifizierung (AAA)</td>
      <td>
        Wenn eine Authentifizierungssitzung während der Nutzung einer Web-App abläuft,
        kann der Benutzer sich erneut authentifizieren und die Nutzung fortsetzen, ohne
        Daten zu verlieren.
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
          Sollte es eine Zeitüberschreitung (verursacht durch Benutzerinaktivität) geben, warnen
          Sie die Benutzer zu Beginn eines Prozesses, sodass sie nicht überrascht werden, dass
          eine Zeitüberschreitung existiert (oder erlauben Sie nur eine Zeitüberschreitung nach
          20 Stunden Inaktivität).
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
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.2 Ausreichend Zeit: Geben Sie Nutzern genügend Zeit, um Inhalte zu lesen und zu verwenden](https://www.w3.org/TR/WCAG21/#enough-time).

## Richtlinie 2.3 — Anfälle und physische Reaktionen: Entwerfen Sie Inhalte so, dass sie keine Anfälle oder physischen Reaktionen auslösen

Dies bezieht sich auf Inhalte, die, wenn sie nicht geändert werden, bei Nutzern Anfälle (wie bei Epilepsie) oder physische Reaktionen (wie Schwindel) auslösen könnten, insbesondere bei Nutzern mit vestibulären Störungen.

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
      <td>2.3.1 Drei Blitze oder unter Schwelle (A)</td>
      <td>Inhalte enthalten keinen Aspekt, der mehr als dreimal pro Sekunde blinkt, oder blinkende Inhalte sind unterhalb akzeptabler <a href="https://www.w3.org/TR/WCAG20/#general-thresholddef">Blitz- und Rot-Blitz-Schwellen</a>.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.2 Drei Blitze (AAA)</td>
      <td>Inhalte enthalten keinen Aspekt, der mehr als dreimal pro Sekunde blinkt.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.3 Animationen durch Interaktionen (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
      <td>Geben Sie Nutzern die Möglichkeit, Animationen durch Interaktionen zu deaktivieren (es sei denn, die Animation ist wesentlich).</td>
      <td><a href="https://www.w3.org/TR/WCAG21/#animation-from-interactions">Verständnis von Animationen durch Interaktionen</a></td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.3 Anfälle und physische Reaktionen: Do not design content in a way that is known to cause seizures or physical reactions.](https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions)

## Richtlinie 2.4 — Navigierbar: Stellen Sie Möglichkeiten bereit, um Benutzern beim Navigieren, Finden von Inhalten und Bestimmen ihres Standorts zu helfen

Die Konformitätskriterien unter dieser Richtlinie beziehen sich auf die Möglichkeiten, wie Benutzer sich orientieren und die Inhalte und Funktionalitäten finden können, nach denen sie auf der aktuellen Seite oder auf anderen Seiten der Website suchen.

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
      <td>2.4.1 Umgehen von Blöcken (A)</td>
      <td>
        <p>
          Es sollte ein Mechanismus bereitgestellt werden, der es dem Benutzer ermöglicht, direkt zum Hauptinhalt oder zur verfügbaren Funktionalität auf der Seite zu springen und wiederholte Features zu überspringen (wie das Unternehmenslogo oder die Navigation). Dies wird häufig durch „Sprunglinks“ erreicht — Links, die am Anfang der Seitenquelle eingefügt und durch CSS versteckt werden und zum Hauptinhalt führen.
        </p>
        <p>
          Wenn eine ordnungsgemäße Struktur von Überschriften und semantischen Containern bereitgestellt wird, um zu navigieren (zum Beispiel {{htmlelement("section")}},
          {{htmlelement("aside")}}, etc.), dann ist ein zusätzlicher „Sprunglink“
          nicht erforderlich.
        </p>
      </td>
      <td><em>Es muss ein Abschnitt zu "Sprunglinks" hinzugefügt werden.</em></td>
    </tr>
    <tr>
      <td>2.4.2 Seitentitel einfügen (A)</td>
      <td>
        Jede Webseite sollte ein informatives
        {{htmlelement("title")}}-Element enthalten, dessen Inhalt den
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
        Die "Tabulatorreihenfolge" der fokussierbaren Seitenelemente (z. B. Links, Buttons,
        Formulareingaben) ergibt logischen Sinn, was bedeutet, dass die Seite
        immer noch von Nichtsehbehinderten/Tastaturbenutzern verwendet werden kann.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI-Steuerungen</a
        >
        für allgemeine Ratschläge zum Tabben zu Steuerelementen. Wenn es notwendig ist,
        Elemente in einer ungewöhnlichen Anordnung zu platzieren, ist es besser, den
        Quellcode in eine sinnvolle Reihenfolge zu bringen und CSS-Funktionen wie
        <a href="/de/docs/Learn_web_development/Core/CSS_layout/Positioning">Positionierung</a>
        für das Layout zu verwenden.
      </td>
    </tr>
    <tr>
      <td>2.4.4 Link-Zweck (im Kontext) (A)</td>
      <td>
        Der Zweck/die Zielseite eines Links kann aus dem Linktext oder
        aus dem Umfeld (z. B. dem umgebenden Text) bestimmt werden. Ausnahmen
        sind, wenn der Link-Zweck für <em>alle</em> Benutzer mehrdeutig ist (siehe
        <a href="https://www.w3.org/TR/WCAG20/#ambiguouslinkdef"
          >mehrdeutig für Benutzer im Allgemeinen</a
        >
        für eine hilfreiche Erklärung dazu).
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
          >Bedeutungsvolle Textbeschriftungen</a
        >. Beachten Sie auch, dass Sie Instanzen minimieren sollten, bei denen mehrere Kopien
        desselben Texts zu unterschiedlichen Orten verlinken. Dies kann Probleme
        für Bildschirmlese-Benutzer verursachen, die oft eine Liste der Links
        außerhalb des Kontexts aufrufen — mehrere Links, die alle „hier klicken“, „hier klicken“,
        „hier klicken“ beschriftet sind, wären verwirrend.
      </td>
    </tr>
    <tr>
      <td>2.4.5 Mehrere Navigationsmechanismen (AA)</td>
      <td>
        <p>
          Sie sollten mindestens zwei allgemeine Navigationsmechanismen bereitstellen, um
          Seiten auf Ihrer Website zu finden, z. B. Navigationsmenü,
          Breadcrumb-Navigation, Seitensuche, Sitemap, Liste verwandter Links usw.
        </p>
        <p>
          Die einzige Ausnahme davon ist, wenn eine Seite einen Schritt in
          einem Prozess darstellt, sodass sie nur logisch Links zu den vorherigen
          und nächsten Schritten haben sollte.
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
          >Stilisierung von Links als Buttons</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.6 Überschriften und Beschriftungen (AA)</td>
      <td>
        Überschriften (z. B. {{htmlelement("Heading_Elements", "&lt;h2&gt;")}}) und
        {{htmlelement("label")}}-Elemente beschreiben deutlich den Zweck
        der Inhalte und Formularelemente, die sie beschreiben sollen.
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
            >Die Grundlagen von Überschriften und Absätzen</a
          >,
          <a
            href="/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#the_label_element"
            >Das &#x3C;label>-Element</a
          >.
        </p>
        <p>
          Beachten Sie, dass Sie vermeiden sollten, Überschriften oder Beschriftungen zu
          duplizieren (z. B. mehrere Instanzen von „Weitere Informationen“), es sei denn, die
          Struktur erlaubt es Ihnen, sie leicht zu unterscheiden.
        </p>
      </td>
    </tr>
    <tr>
      <td>2.4.7 Sichtbarer Fokus für fokussierbare Elemente (AA)</td>
      <td>
        Beim Durchtabben durch fokussierbare Elemente wie Links oder
        Formulareingaben sollte es einen visuellen Hinweis geben, welches
        Element derzeit im Fokus ist. Dies ist normalerweise eine gepunktete oder
        blaue Umrandung standardmäßig (abhängig vom Browser, der Plattform usw.),
        aber dies kann durch CSS überschrieben werden.
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
        Wenn man sich auf einer Seite innerhalb einer komplexen Website oder eines
        Schrittes befindet, sollte dem Benutzer ein Hinweis darauf gegeben werden, wo
        er sich in der Website befindet, z. B. eine Breadcrumb-Navigation,
        Sitemap oder Text wie „Formularseite 2 von 10“.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.4.9 Link-Zweck (nur Link) (AAA)</td>
      <td>
        Dieses Kriterium baut auf 2.4.4 auf und besagt, dass zur AAA-Konformität
        der Zweck/die Zielseite eines Links allein aus dem Linktext erkennbar sein
        sollte, auch wenn dieser aus dem Kontext heraus ist.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
          >Bedeutungsvolle Textbeschriftungen</a
        >. Beachten Sie auch, dass Sie Instanzen minimieren sollten, bei denen mehrere
        Kopien desselben Texts zu unterschiedlichen Orten verlinken. Dies kann Probleme
        für Bildschirmlese-Benutzer verursachen, die oft eine Liste der Links
        außerhalb des Kontexts aufrufen — mehrere Links, die alle „hier klicken“, „hier klicken“,
        „hier klicken“ beschriftet sind, wären verwirrend.
      </td>
    </tr>
    <tr>
      <td>2.4.10 Abschnittsüberschriften (AAA)</td>
      <td>
        <p>
          Neben der Erstellung einer nützlichen Dokumentenstruktur sollten
          Überschriften auch genau beschreiben und Inhaltsbereiche in logische
          Abschnitte aufteilen.
        </p>
        <p>
          Beachten Sie, dass sich dieses Kriterium auf Überschriften und Titel in
          allgemeinen Webinhalten bezieht (z. B. Überschriften innerhalb von
          Textinhalten). Überschriften und Titel für Benutzeroberflächen sind ein
          Sonderfall, der im Kriterium 4.1.2 behandelt wird.
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
    <td> 2.4.11 Fokus ist nicht verdeckt (Minimum) (AA)</td>
    <td>
    <p> Wenn eine Benutzeroberflächenkomponente den Tastaturfokus erhält, ist die Komponente nicht vollständig verdeckt durch vom Autor erstellte Inhalte.</p>
    <p> <strong>Hinweis:</strong> Wenn der Inhalt der Benutzeroberfläche vom Benutzer neu positioniert werden kann, wird nur die anfängliche Position des benutzerbeweglichen Inhalts für den Test zur Konformität mit diesem Standard betrachtet. Außerdem können durch den Benutzer geöffnete Inhalte die fokussierte Komponente verdecken. Wenn der Benutzer die fokussierte Komponente sichtbar machen kann, ohne den Tastaturfokus zu ändern, wird die fokussierte Komponente für Konformitäts- und Testzwecke nicht als verdeckt betrachtet.</p>
    </td>
    <td>
    <p> Schauen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum">Verständnis von Fokus nicht verdeckt (Minimum)</a> an, um mehr über diesen Standard zu erfahren.</p>
    </td>
    </tr>
    <tr>
    <td> 2.4.12 Fokus ist nicht verdeckt (Erweitert) (AAA) </td>
    <td>
    <p> Folgt den Regeln von 2.4.11, außer wenn eine Benutzeroberflächenkomponente den Fokus erhält, kann kein Teil der Komponente durch vom Autor erstellte Inhalte verdeckt werden. Wenn die Schnittstelle konfigurierbar ist, werden nur die anfänglichen Positionen der benutzerbeweglichen Inhalte für Tests und das Erfüllen dieses Standards betrachtet.</p>
    </td>
    <td>
    <p> Schauen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced">Verständnis von Fokus nicht verdeckt (Erweitert) (Level AAA)</a> an, um mehr über diesen Standard zu erfahren.</p> </td>
    </td>
    </tr>
<tr>
  <td> 2.4.13 Erscheinungsbild des Fokus (AAA)</td>
  <td>
    <p>Wenn der Tastaturfokus-Indikator sichtbar ist, entspricht der Bereich des Fokus-Indikators allen folgenden:</p>
    <ul>
      <li>Muss mindestens so groß sein wie der Bereich eines <code>2px</code> dicken Umfangs der unzentrierten Komponente oder Unterkomponente, die den Inhalt, den Rahmen und den Hintergrund der Komponente umfasst, ausgenommen äußere Schatten oder Glüheffekte.</li>
      <li>Muss ein Kontrastverhältnis von mindestens 3:1 zwischen denselben Pixeln im fokussierten und unzentrierten Zustand haben.</li>
    </ul>
    <p> Die Ausnahmen hiervon sind:</p>
    <ul>
      <li>Der Fokus-Indikator wird vom Benutzer bestimmt und kann vom Autor nicht angepasst werden.</li>
      <li>Der Fokus-Indikator und die Hintergrundfarbe des Indikators werden vom Autor nicht modifiziert.</li>
    </ul>
  </td>
  <td>
    <p> Schauen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html">Verständnis von Erscheinungsbild des Fokus (Level AAA)</a> an, um mehr über diesen Standard zu erfahren.</p>
  </td>
</tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.4 Navigierbar: Stellen Sie Möglichkeiten bereit, um Benutzern beim Navigieren, Finden von Inhalten und Bestimmen ihres Standorts zu helfen.](https://www.w3.org/TR/WCAG21/#navigable)

## Richtlinie 2.5 Eingabemodalitäten: Machen Sie es einfacher für Benutzer, Funktionalitäten durch verschiedene Eingaben über die Tastatur hinaus zu bedienen

Die Konformitätskriterien unter dieser Richtlinie stellen sicher, dass Benutzer mit Hilfe verschiedener Eingabemethoden über eine Tastatur oder Maus hinaus (einschließlich Touchscreen, Sprache, Gerätemotion oder alternativer Eingabegeräte) mit digitaler Technologie interagieren können.

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
   <td>Alle Funktionalitäten, die mit einem Zeiger bedient werden können, können mit Einzelpunktaktionen bedient werden. Wegbasierte oder mehrpunktgesten sind nicht erforderlich, um eine Funktionalität zu bedienen. Ausnahmen existieren.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html">Verständnis von Zeigergesten</a></td>
  </tr>
  <tr>
   <td>2.5.2 Zeigerstornierung (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Für Funktionen, die mit einem Einzelzeiger bedient werden können, gilt mindestens eines der folgenden: kein Down-Event, Abbruch/Undo, Up-Reversal oder wesentlich.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html">Verständnis von Zeigerstornierung</a></td>
  </tr>
  <tr>
   <td>2.5.3 Beschriftung im Namen (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Für jede Benutzeroberflächenkomponente, die ein sichtbares Textetikett enthält, stellen Sie sicher, dass der zugängliche Name mit dem sichtbaren Text im Etikett übereinstimmt (oder diesen einschließt).</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">Verständnis von Beschriftung im Namen</a></td>
  </tr>
  <tr>
   <td>2.5.4 Bewegungssteuerung (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Stellen Sie sicher, dass für Funktionalitäten, die durch a) Gerätemotion (wie Schütteln, Neigen) oder b) durch Gerätesensoren (einschließlich einer Kamera) erkannte Benutzerbewegungen ausgelöst werden können, beide folgenden Bedingungen erfüllt sind: 1) Bewegungssteuerung kann deaktiviert werden, und 2) die Funktionalität kann ohne Gerätemotion oder Benutzerbewegungen bedient werden. Ausnahmen existieren.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html">Verständnis von Bewegungssteuerung</a></td>
  </tr>
  <tr>
   <td>2.5.5 Zielgröße (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Die Größe des berührbaren Ziels eines benutzbaren Elements muss mindestens 44 CSS-Pixel in Breite und Höhe betragen. Ausnahmen existieren.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html">Verständnis von Zielgröße</a></td>
  </tr>
  <tr>
   <td>2.5.6 Gleichzeitige Eingabemechanismen (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Stellen Sie sicher, dass Menschen verschiedene Eingabemöglichkeiten verwenden und zwischen ihnen wechseln können, wenn sie mit digitalen Inhalten interagieren, einschließlich Touchscreen, Tastatur, Maus, Sprachbefehle oder alternative Eingabegeräte. Eine wesentliche Ausnahme existiert. </td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html">Verständnis von gleichzeitigen Eingabemechanismen</a></td>
 </tr>
 <tr>
 <td> 2.5.8 Zielgröße Minimum (AA)</td>
 <td> Zielgröße für Zeigereingaben sollte mindestens <code>24px</code> breit und <code>24px</code> hoch sein, außer in den folgenden Bereichen:
 <ul>
  <li> <strong>Abstand:</strong> Ziele, die weniger als <code>24px x 24px</code> groß sind, sind so positioniert, dass, wenn ein Kreis von <code>24px</code> Durchmesser auf den Begrenzungsrahmen jedes Ziels zentriert wird, die Kreise sich nicht mit einem anderen Ziel oder dem Kreis für ein anderes unterdimensioniertes Ziel schneiden.</li>
  <li> <strong>Äquivalent:</strong> Eine separate Steuerung, die dieselbe Funktion erfüllt und diesen Standard erfüllt, ist auf derselben Seite verfügbar.</li>
  <li> <strong>Inline:</strong> Das Ziel befindet sich in einer Textzeile und seine Größe wird durch die Zeilenhöhe oder den umgebenden Nicht-Zieltext eingeschränkt.</li>
  <li> <strong>Benutzeragentensteuerung:</strong> Die Größe des Ziels wird vom Benutzeragenten bestimmt und wurde nicht vom Autor modifiziert.</li>
  <li> <strong>Wesentlich:</strong> Eine bestimmte Darstellung des Ziels ist wesentlich oder rechtlich erforderlich für die übermittelten Informationen.</li>
 </ul>
 <td> Schauen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html">Verständnis von Zielgröße Minimum</a> an </td>
</tr>
  </tr>
 </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.5: Eingabemodalitäten: Machen Sie es einfacher für Benutzer, Funktionalitäten durch verschiedene Eingaben über die Tastatur hinaus zu bedienen.](https://www.w3.org/TR/WCAG21/#input-modalities)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. Bedienbar
  3. [Verstehbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

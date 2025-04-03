---
title: Bedienbar
slug: Web/Accessibility/Guides/Understanding_WCAG/Operable
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so gestalten können, dass sie den Erfolgskriterien entsprechen, die im **Operable**-Prinzip der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 festgelegt sind. Bedienbar bedeutet, dass Benutzeroberflächenkomponenten und Navigation bedienbar sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Bedienbarkeit sowie deren Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 2: Bedienbar — Benutzeroberflächenkomponenten und Navigation müssen bedienbar sein.](https://www.w3.org/TR/WCAG21/#operable)

## Richtlinie 2.1 — Tastaturbedienbar: Alle Funktionen mit einer Tastatur verfügbar machen

Diese Richtlinie behandelt die Notwendigkeit, die Kernfunktionen einer Website zusätzlich zu anderen Mitteln (z.B. Maus) über eine Tastatur verfügbar zu machen, damit Benutzer, die auf Tastatursteuerung angewiesen sind, darauf zugreifen können.

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
        Alle Funktionen sollten mit Tastatursteuerungen zugänglich sein, es sei
        denn, es kann mit der Tastatur nicht durchgeführt werden (z.B.
        Freihandzeichnung). Integrierte Steuerelemente sollten, wenn möglich,
        verwendet werden (z.B. Durchlaufen von Formularsteuerelementen), und Sie
        sollten nur dann benutzerdefinierte Funktionen einbauen, wo es nötig
        ist.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI-Kontrollen</a
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
          Wenn Sie einen Funktionsbereich mit der Tastatur betreten, sollten Sie
          diesen Bereich auch mit <em>nur</em> der Tastatur wieder verlassen
          können. Zum Beispiel, wenn Sie die Taste <kbd>Enter</kbd>/<kbd>Return</kbd>
          auf einer fokussierten Schaltfläche drücken, um ein Optionsfenster zu
          öffnen, sollten Sie dieses Fenster auch wieder schließen und zum
          Hauptinhalt zurückkehren können, nur mit der Tastatur.
        </p>
        <p>
          Dies ist sehr wichtig, damit Benutzer, die die Tastatur verwenden, in
          Ihren Apps nicht in speziellen Abschnitten gefangen werden.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.1.3 Tastatur — alle Funktionen (AAA)</td>
      <td>
        Dies ist ein weiterer Schritt über das Kriterium 2.1.1 hinaus. Um AAA-Konformität zu erreichen, sollten alle Funktionen mit Tastatursteuerungen zugänglich sein — ohne Ausnahmen.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI-Kontrollen</a
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
        2.1.4 Zeichen-Tastenkombinationen (A)
        <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        Wenn eine einzelne Zeichen-Tastenkombination existiert, dann trifft
        mindestens eine der folgenden Bedingungen zu: Einfache
        Zeichen-Tastenkombinationen können ausgeschaltet, neu zugewiesen oder
        nur aktiv sein, wenn das relevante Benutzeroberflächen-Element im Fokus
        ist.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html"
          >Verständnis für Zeichen-Tastenkombinationen</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.1 Tastaturbedienbar: Alle Funktionen mit einer Tastatur verfügbar machen](https://www.w3.org/TR/WCAG21/#keyboard-accessible).

## Richtlinie 2.2 — Genügend Zeit: Nutzern ausreichend Zeit geben, um Inhalte zu lesen und zu nutzen

Diese Richtlinie behandelt Situationen, in denen Funktionen ein Zeitlimit haben können. Zum Beispiel müssen Käufe manchmal aus Sicherheitsgründen innerhalb eines Zeitlimits abgeschlossen werden.

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
      <td>2.2.1 Zeitliche Vorgaben sind anpassbar (A)</td>
      <td>
        <p>
          Für Funktionen mit Zeitlimits (z.B. das Abschließen einer Hotel- oder
          Flugbuchung hat oft ein Zeitlimit), sollte der Benutzer die
          Möglichkeit bekommen, das Zeitlimit anzupassen, zu verlängern oder
          abzuschalten.
        </p>
        <p>
          Ausnahmen hiervon sind Aktivitäten mit einem Zeitlimit von mehr als 20
          Stunden, Echtzeitereignisse (z.B. Live-Multiplayer-Spiele), und jede
          andere Aktivität, die ein Zeitlimit benötigt und ungültig würde, wenn
          es abgeschaltet würde.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.2 Pausieren, Anhalten, Verbergen (A)</td>
      <td>
        <p>
          Für sich bewegende/blinkende Inhalte, die automatisch starten, länger
          als 5 Sekunden dauern und mit anderen Inhalten gezeigt werden, sollten
          Steuerungen bereitgestellt werden, um sie zu pausieren, zu stoppen
          oder zu verbergen. Dies gilt nicht für bewegende/blinkende Inhalte,
          die essenziell für das Erlebnis sind. Beispiele sind scrollende Texte
          und Videos.
        </p>
        <p>
          Für sich automatisch aktualisierende Informationen, die automatisch
          starten und mit anderen Inhalten gezeigt werden, sollten
          Steuerungen bereitgestellt werden, um sie zu pausieren, zu stoppen
          oder zu verbergen oder um die Häufigkeit der Aktualisierungen zu
          kontrollieren. Dies gilt nicht für automatisch aktualisierte Inhalte,
          die essenziell für das Erlebnis sind. Beispiele sind Karusselle oder
          rotierende Ankündigungen.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.3 Keine Zeitlimits (AAA)</td>
      <td>
        Dies baut auf Kriterium 2.2.1 auf und gibt an, dass Inhalte, die die
        AAA-Konformität erreichen möchten, keine Zeitlimits haben sollten.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.4 Unterbrechungen unterdrücken (AAA)</td>
      <td>
        Alle Unterbrechungen wie Alarme oder Interstitial-Werbung sollten
        Funktionen bereitstellen, um sie zu unterdrücken oder zu verschieben,
        es sei denn, es handelt sich um einen Notfallalarm.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.5 Wieder-Authentifizierung (AAA)</td>
      <td>
        Wenn eine Authentifizierungssitzung während der Nutzung einer Web-App
        abläuft, kann der Benutzer sich erneut authentifizieren und seine
        Nutzung fortsetzen, ohne Daten zu verlieren.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        2.2.6 Timeouts (AAA)
        <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          Wenn es ein Timeout (verursacht durch Benutzerinaktivität) gibt,
          warnen Sie Benutzer zu Beginn eines Prozesses, damit sie nicht
          überrascht sind, dass ein Timeout existiert (oder erlauben Sie ein
          Timeout nur nach 20 Stunden Inaktivität).
        </p>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html"
          >Verständnis von Timeouts</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.2 Genügend Zeit: Nutzern ausreichend Zeit geben, um Inhalte zu lesen und zu nutzen](https://www.w3.org/TR/WCAG21/#enough-time).

## Richtlinie 2.3 — Anfälle und physische Reaktionen: Inhalte nicht so gestalten, dass sie Anfälle oder physische Reaktionen auslösen

Dies bezieht sich auf Inhalte, die, wenn nicht geändert, Anfälle bei Nutzern mit Krankheiten wie Epilepsie auslösen können ODER physische Reaktionen (wie Schwindel) bei Nutzern mit Erkrankungen wie vestibulären Störungen hervorrufen können.

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
      <td>2.3.1 Drei Blitze, oder unter Schwelle (A)</td>
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
      <td>Erlaubt es Benutzern, Animationen aus Interaktionen zu deaktivieren (es sei denn, die Animation ist essenziell).</td>
      <td><a href="https://www.w3.org/TR/WCAG21/#animation-from-interactions">Verständnis von Animationen aus Interaktionen</a></td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.3 Anfälle und physische Reaktionen: Inhalte nicht so gestalten, dass sie Anfälle oder physische Reaktionen auslösen.](https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions)

## Richtlinie 2.4 — Navigierbar: Wege bereitstellen, um Benutzern zu helfen, sich zu orientieren, Inhalte zu finden und zu bestimmen, wo sie sich befinden

Die Konformitätskriterien dieser Richtlinie beziehen sich auf Methoden, mit denen Benutzer sich erwartungsgemäß orientieren und die gewünschten Inhalte und Funktionen auf der aktuellen oder anderen Seiten der Website finden können.

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
      <td>2.4.1 Blöcke überspringen (A)</td>
      <td>
        <p>
          Es sollte ein Mechanismus bereitgestellt werden, der es dem Benutzer
          ermöglicht, direkt zum Hauptinhalt oder zur Hauptfunktionalität der
          Seite zu springen, die sich hinter den sich wiederholenden Merkmalen
          (wie dem Unternehmenslogo oder der Navigation) befinden. Dies wird
          oft durch "Skip-Links" erreicht — Links, die an der Spitze des
          Seitenquellcodes eingefügt werden, mit dem Hauptinhalt verknüpft sind
          und durch CSS versteckt werden.
        </p>
        <p>
          Wenn eine ordnungsgemäße Struktur von Überschriften und semantischen
          Containern bereitgestellt wird, kann auf "Skip-Links" verzichtet
          werden (zum Beispiel {{htmlelement("section")}},
          {{htmlelement("aside")}}, etc.).
        </p>
      </td>
      <td><em>Ein Abschnitt zu "Skip-Links" muss hinzugefügt werden.</em></td>
    </tr>
    <tr>
      <td>2.4.2 Seitentitel einfügen (A)</td>
      <td>
        Jede Webseite sollte ein informatives
        {{htmlelement("title")}}-Element enthalten, dessen Inhalt den
        Seiteninhalt/Zweck beschreibt.
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
        Die "Tabulatorenreihenfolge" von fokussierbaren Seitenelementen (z.B.
        Links, Schaltflächen, Formulareingaben) soll einen logischen Sinn
        ergeben, so dass die Seite auch für nicht-sichtbare/Tastaturbenutzer
        noch brauchbar ist.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI-Kontrollen</a
        >
        für allgemeine Ratschläge zur Verwendung von Tabs bei Steuerelementen.
        Wenn Sie Elemente in einer ungewöhnlichen Anordnung platzieren müssen,
        ist es besser, sicherzustellen, dass die Quellordnung sinnvoll ist, und
        dann CSS-Funktionen wie
        <a href="/de/docs/Learn_web_development/Core/CSS_layout/Positioning">Positionierung</a>
        zur Handhabung der Anordnung zu verwenden.
      </td>
    </tr>
    <tr>
      <td>2.4.4 Link-Zweck (im Kontext) (A)</td>
      <td>
        Der Zweck/das Ziel eines Links kann aus dem Linktext oder aus seinem
        Kontext (z.B. dem umgebenden Text) bestimmt werden. Ausnahmen bestehen,
        wo der Linkzweck für <em>alle</em> Benutzer mehrdeutig ist (siehe
        <a href="https://www.w3.org/TR/WCAG20/#ambiguouslinkdef"
          >mehrdeutig für Benutzer im Allgemeinen</a
        >
        für eine nützliche Erklärung hierzu).
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
          >Aussagekräftige Textbezeichnungen</a
        >. Es ist auch zu beachten, dass Sie die Anzahl der Instanzen minimieren
        sollten, bei denen mehrere Kopien desselben Textes zu verschiedenen
        Orten verlinkt sind. Dies kann Probleme für Benutzer von
        Screenreadern verursachen, die oft eine Liste der Links ohne Kontext
        anzeigen — mehrere Links mit der Bezeichnung "klicken Sie hier",
        "klicken Sie hier", "klicken Sie hier" wären verwirrend.
      </td>
    </tr>
    <tr>
      <td>2.4.5 Mehrere Navigationsmechanismen (AA)</td>
      <td>
        <p>
          Sie sollten mindestens zwei allgemeine Navigationsmechanismen
          bereitstellen, um Seiten auf Ihrer Website zu finden, zum Beispiel
          Navigationsmenü, Breadcrumb-Navigation, Websitesuche, Sitemap, Liste
          verwandter Links usw.
        </p>
        <p>
          Die einzige Ausnahme hiervon ist, wenn eine Seite ein Schritt in
          einem Prozess ist, sodass sie nur logischerweise Links zu den
          vorherigen und nächsten Schritten haben sollte.
        </p>
      </td>
      <td>
        Die meisten dieser Mechanismen können mit vollständig unterstützten
        HTML-Funktionen erstellt werden, siehe zum Beispiel
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
          >Links als Schaltflächen stylen</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.6 Überschriften und Beschriftungen (AA)</td>
      <td>
        Überschriften (z.B. {{htmlelement("Heading_Elements", "&lt;h2&gt;")}})
        und {{htmlelement("label")}}-Elemente beschreiben klar den
        Zweck der Inhalte und Formularelemente, die sie beschreiben sollen.
      </td>
      <td>
        <p>
          Siehe
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
            >UI-Kontrollen</a
          >,
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
            >Aussagekräftige Textbezeichnungen</a
          >,
          <a
            href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
            >Grundlagen von Überschriften und Absätzen</a
          >,
          <a
            href="/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#the_label_element"
            >Das &#x3C;label>-Element</a
          >.
        </p>
        <p>
          Beachten Sie, dass Sie Duplikate von Überschriften oder Beschriftungen vermeiden sollten (z.B. mehrere Instanzen von "Weitere Informationen"), es sei denn, die Struktur ermöglicht es Ihnen, sie leicht zu unterscheiden.
        </p>
      </td>
    </tr>
    <tr>
      <td>2.4.7 Sichtbarer Fokus für fokussierbare Elemente (AA)</td>
      <td>
        Beim Durchtabben von fokussierbaren Elementen, wie Links oder
        Formulareingaben, sollte es einen visuellen Indikator geben, der
        anzeigt, welches Element derzeit im Fokus steht. Dies ist normalerweise
        ein gepunkteter oder blauer Umriss als Standard (abhängig vom Browser,
        der Plattform, etc.), aber dies kann durch CSS überschrieben werden.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI-Kontrollen</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.8 Standort innerhalb der Website (AAA)</td>
      <td>
        Wenn Sie sich auf einer Seite innerhalb einer komplexen Website oder
        einer Reihe von Schritten befinden, sollte dem Benutzer ein Indikator
        gegeben werden, wo er sich auf der Website befindet, zum Beispiel
        ein Breadcrumb-Navigation, eine Sitemap oder Text wie "Formularseite 2 von 10".
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.4.9 Link-Zweck (nur Link) (AAA)</td>
      <td>
        Dieses Kriterium baut auf 2.4.4 auf und gibt an, dass zur Erreichung
        der AAA-Konformität der Zweck/das Ziel eines Links allein aus dem
        Linktext, auch wenn dieser aus dem Kontext heraus gesehen wird,
        bestimmbar sein sollte.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
          >Aussagekräftige Textbezeichnungen</a
        >. Es ist auch zu beachten, dass Sie die Anzahl der Instanzen minimieren sollten, bei denen mehrere Kopien desselben Textes zu verschiedenen Orten verlinkt sind. Dies kann Probleme für Benutzer von Screenreadern verursachen, die oft eine Liste der Links ohne Kontext anzeigen — mehrere Links mit der Bezeichnung "klicken Sie hier", "klicken Sie hier", "klicken Sie hier" wären verwirrend.
      </td>
    </tr>
    <tr>
      <td>2.4.10 Abschnittsüberschriften (AAA)</td>
      <td>
        <p>
          Neben der Erstellung einer nützlichen Dokumentstruktur sollten
          Überschriften auch die Überschriftbereiche in logische Abschnitte
          aufteilen und beschreiben.
        </p>
        <p>
          Beachten Sie, dass sich dieses Kriterium auf Überschriften und Titel
          in generellen Webinhalten bezieht (z.B. Überschriften innerhalb von
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
    <p> Wenn ein Benutzeroberflächenkomponente durch Tastaturfokus erhält, darf das Komponente nicht vollständig durch vom Autor erstellte Inhalte verdeckt sein.</p>
    <p> <strong>Hinweis:</strong> Wenn der Inhalt der Oberfläche vom Benutzer neu positioniert werden kann, wird nur die ursprüngliche Position der benutzerbewegebaren Inhalte zur Überprüfung der Konformität mit diesem Standard berücksichtigt. Auch darf durch den Benutzer geöffneter Inhalt die fokussierte Komponente verdecken. Wenn der Benutzer die fokussierte Komponente ohne Änderung des Tastaturfokus sichtbar machen kann, wird das fokussierte Komponente nicht als verdeckt für Konformitäts- und Testzwecke angesehen.</p>
    </td>
    <td>
    <p> Schauen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum">Verständnis von Fokus nicht verdeckt (Minimum)</a> an, um mehr über diesen Standard zu erfahren.</p>
    </td>
    </tr>
    <tr>
    <td> 2.4.12 Fokus nicht verdeckt (Erweitert) (AAA) </td>
    <td>
    <p> Folgt den Regeln von 2.4.11, außer dass bei Empfang von Fokus durch eine Benutzeroberflächenkomponente, kein Teil der Komponente durch vom Autor erstellte Inhalte verdeckt werden darf. Wenn die Schnittstelle konfigurierbar ist, werden nur die anfänglichen Positionen der benutzerbewegbaren Inhalte für die Überprüfung und das Erreichen dieses Standards berücksichtigt.</p>
    </td>
    <td>
    <p> Schauen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced">Verständnis von Fokus nicht verdeckt (Erweitert) (Level AAA)</a> an, um mehr über diesen Standard zu erfahren.</p> </td>
    </td>
    </tr>
<tr>
  <td> 2.4.13 Schwerpunkt Erscheinungsbild (AAA)</td>
  <td>
    <p>Wenn der Tastaturfokus-Indikator sichtbar ist, erfüllt die Fläche des Fokus-Indikators alle folgenden Kriterien:</p>
    <ul>
      <li>Muss mindestens so groß sein wie die Fläche eines <code>2px</code> dicken Umrisses der unaufmerksamen Komponente oder Unterkomponente, die den Inhalt, die Grenze und den Hintergrund der Komponente einschließt, ohne äußere Schatten oder Leuchteffekte.</li>
      <li>Erfordert ein Kontrastverhältnis von mindestens 3:1 zwischen denselben Pixeln im fokussierten und unaufmerksamen Zustand</li>
    </ul>
    <p> Die Ausnahmen hierzu sind:</p>
    <ul>
      <li>Der Fokus-Indikator wird vom Benutzer bestimmt und kann durch den Autor nicht angepasst werden.</li>
      <li>Der Fokus-Indikator und die Hintergrundfarbe des Indikators sind vom Autor nicht verändert worden.</li>
    </ul>
  </td>
  <td>
    <p> Schauen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html">Verständnis von Fokus Erscheinungsbild (Level AAA)</a> an, um mehr über diesen Standard zu erfahren.</p>
  </td>
</tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.4 Navigierbar: Wege bereitstellen, um Benutzern zu helfen, sich zu orientieren, Inhalte zu finden und zu bestimmen, wo sie sich befinden.](https://www.w3.org/TR/WCAG21/#navigable)

## Richtlinie 2.5 Eingabemodalitäten: Machen Sie es Benutzern leichter, Funktionen durch verschiedene Inputs über die Tastatur hinaus zu bedienen

Die Konformitätskriterien dieser Richtlinie stellen sicher, dass Benutzer mit digitaler Technologie über verschiedene Eingabemethoden jenseits von Tastatur oder Maus interagieren können (einschließlich Touchscreen, Stimme, Gerätemotion oder alternative Eingabegeräte).

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
   <td>2.5.1 Zeigergesten (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Alle Funktionen, die mit einem Zeiger bedient werden können, können mit Einzelpunktaktionen bedient werden. Pfadbasierte oder Mehrpunktgesten sind nicht erforderlich, um Funktionen zu bedienen. Es gibt Ausnahmen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html">Verständnis von Zeigergesten</a></td>
  </tr>
  <tr>
   <td>2.5.2 Zeiger-Stornierung (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Für Funktionen, die mit einem Einzelzeiger bedient werden können, muss mindestens einer der folgenden Punkte zutreffen: kein Down-Event, Abbruch/Rückgängigmachen, Aufwärtsumkehrung oder essenziell.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html">Verständnis von Zeiger-Stornierung</a></td>
  </tr>
  <tr>
   <td>2.5.3 Beschriftung im Namen (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Für jede Benutzeroberflächenkomponente, die ein sichtbares Textetikett enthält, stellen Sie sicher, dass der zugängliche Name (oder er enthält) den sichtbaren Text im Etikett übereinstimmt.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">Verständnis von Beschriftung im Namen</a></td>
  </tr>
  <tr>
   <td>2.5.4 Bewegungssteuerung (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Stellen Sie sicher, dass bei Funktionen, die a) durch Gerätemotion ausgelöst werden können (wie Schütteln, Neigen) oder b) durch Gesten von Gerätesensoren erkannt werden (einschließlich einer Kamera), beide der folgenden Punkte zutreffen: 1) Bewegungssteuerung kann deaktiviert werden, und 2) die Funktionalität kann ohne Verwendung von Gerätemotion oder Benutzer-Gesten bedient werden. Es gibt Ausnahmen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html">Verständnis von Bewegungssteuerung</a></td>
  </tr>
  <tr>
   <td>2.5.5 Zielgröße (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Die Größe des aktionsfähigen Berührungsziels eines Elements muss mindestens 44 CSS-Pixel in Breite und Höhe betragen. Es gibt Ausnahmen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html">Verständnis der Zielgröße</a></td>
  </tr>
  <tr>
   <td>2.5.6 Gleichzeitige Eingabemechanismen (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Stellen Sie sicher, dass Personen beim Interagieren mit digitalen Inhalten zwischen verschiedenen Eingabemodi wechseln und diese nutzen können, einschließlich Touchscreen, Tastatur, Maus, Sprachbefehlen oder alternativen Eingabegeräten. Eine essenzielle Ausnahme existiert.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html">Verständnis von gleichzeitigen Eingabemechanismen</a></td>
 </tr>
 <tr>
 <td> 2.5.8 Zielgröße Minimum (AA)</td>
 <td> Die Zielgröße für Zeigereingaben sollte mindestens <code>24px</code> breit und <code>24px</code> hoch sein, mit Ausnahme der folgenden Bereiche:
 <ul>
  <li> <strong>Abstand:</strong> Ziele, die weniger als <code>24px x 24px</code> groß sind, sind so positioniert, dass wenn ein <code>24px</code>-Durchmesser-Kreis auf jedes Ziel-Zielfeld zentriert ist, die Kreise sich nicht mit anderen Zielen oder dem Kreis für ein anderes untergroßes Ziel überschneiden.</li>
  <li> <strong>Äquivalent:</strong> Eine separate Steuerung, die dieselbe Funktion erfüllt, die diesem Standard entspricht, ist auf derselben Seite verfügbar.</li>
  <li> <strong>Inline:</strong> Das Ziel befindet sich innerhalb einer Textzeile mit seiner Größe, die durch die Zeilenhöhe oder umliegenden nicht-Ziel-Text eingeschränkt ist.</li>
  <li> <strong>Benutzeragentensteuerung:</strong> Die Größe des Ziels wird durch den Benutzeragenten bestimmt und wurde nicht vom Autor modifiziert.</li>
  <li> <strong>Wesentlich:</strong> Eine bestimmte Darstellung des Ziels ist wesentlich oder gesetzlich vorgeschrieben, um die vermittelten Informationen auszudrücken.</li>
 </ul>
 <td> Informieren Sie sich über <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html">Verständnis der minimalen Zielgröße</a> </td>
</tr>
  </tr>
 </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.5: Eingabemodalitäten: Machen Sie es Benutzern leichter, Funktionen durch verschiedene Inputs über die Tastatur hinaus zu bedienen.](https://www.w3.org/TR/WCAG21/#input-modalities)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. Bedienbar
  3. [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

---
title: Verständlich
slug: Web/Accessibility/Guides/Understanding_WCAG/Understandable
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so schreiben, dass sie den Erfolgsfaktoren entsprechen, die im **Verständlich**-Prinzip der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 beschrieben sind. Verständlich besagt, dass Informationen und die Bedienung der Benutzeroberfläche verständlich sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Verständlich und seine Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 3: Verständlich — Informationen und die Bedienung der Benutzeroberfläche müssen verständlich sein](https://w3c.github.io/wcag/guidelines/22/#understandable).

## Richtlinie 3.1 — Lesbar: Machen Sie Textinhalte lesbar und verständlich

Diese Richtlinie konzentriert sich darauf, Textinhalte so verständlich wie möglich zu machen.

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
      <td>3.1.1 Sprache der Seite (A)</td>
      <td>
        Die Standardsprache jeder Webseite sollte über den Code erkennbar sein. Dies ist unerlässlich, um beispielsweise sicherzustellen, dass der Leser auf einer Seite gelandet ist, die in einer für ihn geeigneten Sprache verfasst ist. Der einfachste Weg, dies zu erreichen, besteht darin, das <a href="/de/docs/Web/HTML/Reference/Global_attributes/lang">lang</a>-Attribut im {{htmlelement("html")}}-Element der Seite zu setzen und ihm einen Wert zuzuweisen, der den Sprachcode darstellt, der die Sprache am besten beschreibt, in der die Seite geschrieben ist.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#setting_the_primary_language_of_the_document"
          >Festlegen der primären Sprache des Dokuments</a
        >.
      </td>
    </tr>
    <tr>
      <td>3.1.2 Sprache von Teilen (AA)</td>
      <td>
        <p>
          In Fällen, in denen der Inhalt einer Seite Wörter oder Ausdrücke in einer anderen Sprache als der Hauptsprache enthält, verwenden Sie das <a href="/de/docs/Web/HTML/Reference/Global_attributes/lang">lang</a>-Attribut auf einem Element, das den betreffenden Begriff umgibt (z. B. einem {{htmlelement("span")}}, wenn kein semantisches Element verfügbar ist), um eine geeignete Sprache dafür festzulegen.
        </p>
        <p>
          Sie müssen keine andere Sprache für Wörter oder Ausdrücke festlegen, die unabhängig von der Sprache gleich sind (z. B. Eigennamen, technische Begriffe, die nicht Teil einer bestimmten Sprache sind).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.3 Ungewöhnliche Wörter (AAA)</td>
      <td>
        Wo technische Begriffe, Jargon oder Idiome/Slang verwendet werden, sollten Definitionen für solche Ausdrücke/Wörter bereitgestellt werden. Ihre Seite sollte ein Glossar bieten, das Definitionen solcher Wörter/Begriffe enthält, auf die Sie dann verlinken können, wenn sie erscheinen, oder zumindest Definitionen irgendwo im umgebenden Text bereitstellen oder in einer
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/Lists#description_lists"
          >Beschreibungsliste</a
        >
        am Ende der Seite.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.4 Abkürzungen (AAA)</td>
      <td>
        <p>
          Wo Abkürzungen verwendet werden, sollten Sie eine Erweiterung oder eine Definition davon bereitstellen, falls erforderlich.
        </p>
        <p>
          Das {{htmlelement("abbr")}}-Element wird oft als bevorzugtes Mittel angesehen, um eine Erweiterung für eine Abkürzung bereitzustellen — es nimmt ein <a href="/de/docs/Web/HTML/Reference/Global_attributes/title">title</a>-Attribut auf, das die Erweiterung enthält, und diese erscheint, wenn man mit der Maus über das Akronym fährt. Dennoch sind die Inhalte des Titelattributs über die Tastatur nicht zugänglich und werden von Screenreadern nicht zuverlässig vorgelesen. Eine bessere Handhabung ist es, Links zu Glossarseiten bereitzustellen, die die Akronymerweiterung und Erklärung enthalten oder diese zumindest im umgebenden Text in Kontext einzubinden.
        </p>
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations"
          >Abkürzungen</a
        >.
      </td>
    </tr>
    <tr>
      <td>3.1.5 Leseverständnis (AAA)</td>
      <td>
        <p>
          Wenn Text bereitgestellt wird, der ein höheres Leseverständnis als auf einer niedrigeren Sekundarstufenebene (typischerweise Kinder im Alter von 11–14 Jahren) erfordert, bieten Sie zusätzliches Erklärmaterial an, um Personen zu helfen, die es nicht lesen können, oder bieten Sie eine alternative Version an, die auf einer niedrigeren Sekundarstufenebene verfasst ist.
        </p>
        <p>
          Dies bedeutet nicht, dass alle Themen von jedem verstanden werden sollten, sondern dass der Schreibstil für alle zugänglich sein sollte. Es ist besser, alle Inhalte auf einer niedrigeren Sekundarstufenebene zu schreiben, selbst technische Dokumentationen wie Programmier-Tutorials, es sei denn, es gibt einen guten Grund, dies nicht zu tun (z. B. ein alternativer Stil für poetische Effekte), oder sie müssen in einem strikten Stil geschrieben werden (z. B. W3C-Spezifikationen).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.6 Aussprache (AAA)</td>
      <td>
        <p>
          Ein Mechanismus sollte bereitgestellt werden, um den Benutzern den Zugang zur Aussprache von Wörtern zu ermöglichen, wenn diese erforderlich ist, um den Inhalt vollständig zu verstehen.
        </p>
        <p>
          Das HTML-{{htmlelement("audio")}}-Element kann verwendet werden, um eine Steuerung zu erstellen, mit der der Leser eine Audiodatei mit der richtigen Aussprache abspielen kann, und es ist auch sinnvoll, nach schwierigen Wörtern einen textlichen Ausspracheleitfaden hinzuzufügen, so wie Sie sie in Wörterbuchartikeln finden.
        </p>
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio"
          >Video- und Audioinhalte</a
        >, und
        <a
          href="https://www.oxfordlearnersdictionaries.com/us/about/pronunciation_english.html"
          >Ausspracheleitfaden für das Englische Wörterbuch</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.1 Lesbar: Machen Sie Textinhalte lesbar und verständlich](https://w3c.github.io/wcag/guidelines/22/#readable).

## Richtlinie 3.2 — Vorhersehbar: Webseiten erscheinen und funktionieren auf vorhersehbare Weise

Diese Richtlinie konzentriert sich darauf, Benutzeroberflächen intuitiv und verständlich zu gestalten.

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
      <td>3.2.1 Bei Fokus (A)</td>
      <td>
        <p>
          Wenn eine Steuerung oder eine andere Seitenfunktion den Fokus erhält, sollte sie den Kontext nicht so ändern, dass dies den Benutzer verwirren oder desorientieren könnte.
        </p>
        <p>
          Dies ist eine Frage des sinnvollen Designs — Menschen wollen keine Schnittstellen, die sie überraschen; sie wollen, dass Dinge intuitiv sind und sich wie erwartet verhalten. Zum Beispiel sollte das Fokussieren einer Navigationsmenüoption nicht die angezeigte Seite ändern — sie sollte aktiviert werden, bevor die Anzeige sich ändert.
        </p>
      </td>
      <td>
        Das <code>Element</code>'s [`focus`](/de/docs/Web/API/Element/focus_event) Ereignis enthält einige nützliche Informationen. Siehe auch
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Tastaturerreichbarkeit wieder einbauen</a
        >
        für einige nützliche Implementierungsideen.
      </td>
    </tr>
    <tr>
      <td>3.2.2 Bei Eingabe (A)</td>
      <td>
        <p>
          Wenn Daten in eine Steuerung eingegeben oder eine Einstellung geändert wird, sollte sich der Kontext nicht unerwartet ändern. Der Benutzer sollte vor der Veränderung gewarnt/benachrichtigt werden.
        </p>
        <p>
          Auch hier sollte sinnvolles Design implementiert werden. Wenn beispielsweise das Drücken auf einen Button dazu führt, dass die Anwendung die aktuelle Ansicht verlässt, sollte der Benutzer aufgefordert werden, diese Aktion zu bestätigen und seine Arbeit zu speichern, wenn es angebracht ist.
        </p>
      </td>
      <td>
        Das [`input`](/de/docs/Web/API/Element/input_event) Ereignis ist hier nützlich.
      </td>
    </tr>
    <tr>
      <td>3.2.3 Konsistente Navigation (AA)</td>
      <td>
        <p>
          Der Stil und die Platzierung des Navigationsmenüs/der Steuerung sollten auf verschiedenen Seiten oder Ansichten einer Webseite konsistent sein, und die bestehenden Elemente sollten in derselben Reihenfolge erscheinen, auch wenn z. B. neue Elemente hinzugefügt werden. Wird die Änderung vom Benutzer initiiert, z. B. durch Auswahl eines anderen Farbschemas oder einer anderen Position für die Navigation, sollte seine Wahl auf allen Seiten respektiert werden.
        </p>
        <p>
          Erneut sinnvolles Design — machen Sie die Navigationselemente auf allen Seiten oder Ansichten gleich.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#structure_page_sections_logically"
          >Seitenabschnitte logisch strukturieren</a
        >
        für Informationen über modernes Markup für Layouts. Siehe auch
        <a
          href="/de/docs/Learn_web_development/Core/Text_styling/Styling_links#styling_links_as_buttons"
          >Links als Buttons gestalten</a
        >
        für ein nützliches Beispiel eines zugänglichen Navigationsmenüs.
      </td>
    </tr>
    <tr>
      <td>3.2.4 Konsistente Identifikation (AA)</td>
      <td>
        <p>
          Steuerungen oder Komponenten mit derselben Funktionalität sollten auf verschiedenen Seiten oder Ansichten gleich identifiziert werden. Ein Währungsumrechner, der auf jeder Seite einer Weltreise-Website erscheint, sollte zum Beispiel semantisch und hinsichtlich der Beschriftungen genau gleich sein.
        </p>
        <p>Erneut sinnvolles Design!</p>
      </td>
      <td>
        "Labels" können sich auf beschreibende Informationen in Textinhalten oder HTML-Formularbeschriftungen beziehen. Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels"
          >sinnvolle Textbeschriftungen verwenden</a
        >
        für mehr Informationen.
      </td>
    </tr>
    <tr>
      <td>3.2.5 Änderung auf Anfrage (AAA)</td>
      <td>
        <p>
          Kontextänderungen, die Benutzer verwirren oder desorientieren könnten, sollten nur erfolgen, wenn sie vom Benutzer angefordert werden, ODER der Benutzer sollte in der Lage sein, sie zu deaktivieren.
        </p>
        <p>
          Wenn Sie etwas haben müssen, das die aktuelle Ansicht erheblich ändert (z. B. Inhalte oder Steuerungen), lassen Sie den Benutzer steuern, wann er möchte, dass diese Änderung erfolgt (z. B. welche Seite angezeigt werden soll, wann zum nächsten Foto in der Galerie gewechselt werden soll...)
        </p>
        <p>
          Wenn Sie etwas wie ein Karussell auf einer Seite haben müssen, bieten Sie eine Option an, es nicht automatisch weiterlaufen zu lassen. Besser solche Funktionalitäten zu vermeiden, wenn möglich.
        </p>
      </td>
 </tr>
      <tr>
      <td> 3.2.6 Konsistente Hilfe (A)</td>
      <td> <p> Webseiten, die Hilfsmechanismen enthalten, einschließlich Selbsthilfeoptionen und menschlicher Kontaktdaten, die auf mehreren Webseiten wiederholt werden, müssen diese Mechanismen in derselben Reihenfolge auf allen Seiten platzieren, es sei denn, eine Änderung wird vom Benutzer initiiert.</p>
      <td> <p> Schauen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-help">Dokumentation zur konsistenten Hilfe</a> für diesen Standard an, um mehr zu lernen. </p>
      </td>
      </td>
      <tr>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.2 Vorhersehbar: Webseiten erscheinen und funktionieren auf vorhersehbare Weise](https://w3c.github.io/wcag/guidelines/22/#predictable).

## Richtlinie 3.3 — Eingabeunterstützung: Helfen Sie Benutzern, Fehler zu vermeiden und zu korrigieren

Diese Richtlinie zentriert sich darauf, den Benutzern zu helfen, richtige Informationen einzugeben, wann immer erforderlich, mit einem Minimum an Fehlern.

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
      <td>3.3.1 Fehlererkennung (A)</td>
      <td>
        <p>
          Wenn ein Benutzer ein Formular ausfüllt oder zwischen Optionen wählt, sollte jeder erkannte Fehler dem Benutzer deutlich mitgeteilt werden, zusammen mit dem Formularsteuerelement, das sich auf den Fehler bezieht.
        </p>
        <p>
          Es ist ratsam, eine Erkennung und Handhabung von Fehlern auf der Client-Seite zu implementieren, über HTML-Formularvalidierungsfunktionen und/oder JavaScript, je nachdem, welches am besten für Ihre Situation geeignet ist. Wenn ein Fehler erkannt wird, sollte eine intuitive Fehlermeldung neben der fehlerhaften Formulareingabe angezeigt werden, um dem Benutzer zu helfen, seine Eingaben zu korrigieren. Für Screenreader-Benutzer können Sie aria live regions verwenden, um den Benutzer über eine Änderung auf der Seite zu informieren.
        </p>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Eine Validierung auf der Serverseite sollte <em>immer</em> zusammen mit der Client-Seiten-Validierung verwendet werden. Die Validierung auf der Client-Seite ist zu einfach zu deaktivieren oder anderweitig zu umgehen, sodass sie nicht allein zuverlässig sein kann.
          </p>
        </div>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Extensions/Forms/Form_validation"
          >Formulardatenvalidierung</a
        >
        für umfassende Informationen zur Validierung, und
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#dynamic_content_updates"
          >WAI-ARIA: Dynamische Inhaltsaktualisierungen</a
        >
        für Informationen zu Live-Regionen.
      </td>
    </tr>
    <tr>
      <td>3.3.2 Beschriftungen oder Anweisungen (A)</td>
      <td>
        <p>
          Klare Anweisungen sollten bereitgestellt werden, wenn eine Dateneingabe erforderlich ist. Wenn eine kurze Anweisung oder Aufforderung erforderlich ist, können Sie {{htmlelement("label")}}-Elemente für einzelne Eingaben wie Name oder Alter verwenden, eine Kombination aus {{htmlelement("label")}}s und {{htmlelement("fieldset")}}s/{{htmlelement("legend")}}s für mehrere Eingaben, die zusammengehören (wie die Elemente eines Geburtsdatums oder einer Postadresse).
        </p>
        <p>
          Bei komplexerer Erklärung können Sie immer auch erklärende Absätze hinzufügen oder vielleicht müssen Sie Ihre Formulare intuitiver gestalten.
        </p>
      </td>
      <td>
        <ul>
          <li>
            <a
              href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels"
              >Sinnvolle Textbeschriftungen verwenden</a
            >
          </li>
          <li>
            <a href="/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form"
              >Wie man ein HTML-Formular strukturiert</a
            >
          </li>
          <li>
            <a
              href="/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Text_labels_and_names"
              >Textbeschriftungen und Namen</a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3.3.3 Fehlererkennung (AA)</td>
      <td>
        <p>
          Wenn ein Fehler erkannt und bekannte Korrekturvorschläge vorhanden sind, stellen Sie diese dem Benutzer zur Verfügung (z. B. Alternativen vorschlagen, wenn der Benutzer einen Benutzernamen auswählt und einen bereits vergebenen ausgewählt hat), es sei denn, dies würde ein Sicherheitsproblem verursachen (z. B. bei der Eingabe eines Passworts) oder ein Kontextproblem (z. B. sie versuchen, eine Frage in einer Quiz-App zu beantworten).
        </p>
        <p>
          In solchen Fällen, wo dies angemessen ist, verwenden Sie vermutlich eine Kombination aus JavaScript und serverseitiger Funktionalität, um zu überprüfen, ob die Eingabe korrekt ist, und falls nicht, welche brauchbaren Vorschläge dem Benutzer gegeben werden können. Solche Vorschläge sollten nützlich im Kontext angezeigt werden, genau wie Fehlermeldungen (siehe 3.3.1).
        </p>
      </td>
      <td>Derzeit keine Tutorialvorschläge.</td>
    </tr>
    <tr>
      <td>3.3.4 Fehlervermeidung (Rechtlich, Finanziell, Daten) (AA)</td>
      <td>
        <p>
          Im Fall von Formularen, die die Eingabe sensibler Daten betreffen (wie rechtliche Vereinbarungen, E-Commerce-Transaktionen oder persönliche Daten), sollte mindestens einer der folgenden Fälle zutreffen:
        </p>
        <ul>
          <li>Einsendungen sind umkehrbar.</li>
          <li>
            Daten werden auf Fehler geprüft, und dem Benutzer wird die Möglichkeit gegeben, diese zu korrigieren.
          </li>
          <li>
            Ein Mechanismus ist verfügbar, um Informationen vor der endgültigen Einsendung zu bestätigen und zu korrigieren.
          </li>
        </ul>
      </td>
      <td>
        <p>
          <strong>Umkehrbar</strong> — für jede Ansicht, in der Daten eingegeben werden können, bieten Sie eine gleichwertige Ansicht, die es ermöglicht, einen Eintrag zu bearbeiten oder sogar zu löschen, wenn angebracht (siehe zum Beispiel
          <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django">Django-Web-Framework</a
          >).
        </p>
        <p>
          <strong>Datenprüfung</strong> — wie in 3.3.1 behandelt, sollte eine Kombination aus Validierung auf der Client-Seite und der Serverseite verwendet werden, um Fehler zu erkennen und dem Benutzer hilfreiche Nachrichten anzuzeigen, damit er seine Eingaben korrigieren kann.
        </p>
        <p>
          <strong>Bestätigung und Korrektur</strong> — wo passend, nachdem eine Reihe von Formularfeldern ausgefüllt wurden, um eine Aufgabe zu erledigen (wie das Kaufen eines Produkts), sollte dem Benutzer eine Bestätigungsseite gezeigt werden, auf der er seine Eingaben prüfen und alles korrigieren kann, das nicht richtig aussieht. Dieses Muster wird häufig auf E-Commerce-Seiten wie Amazon verwendet.
        </p>
      </td>
    </tr>
    <tr>
      <td>3.3.5 Kontextbezogene Hilfe ist verfügbar (AAA)</td>
      <td>
        Stellen Sie Anweisungen und andere passende Hinweise im Kontext bereit, um beim Ausfüllen und Absenden von Formularen zu helfen.
      </td>
      <td>
        Dies baut wirklich nur auf 3.3.1 und anderen ähnlichen Kriterien auf, erfordert jedoch gründlichere kontextsensitive Hilfsinformationen und -dienste, z. B. Bereitstellung eines dedizierten Links zu einer Hilfeseite oder einem Hilfedienst auf jeder Seite, Bereitstellung von Beispielen, die zeigen, wie eine erfolgreiche Eingabe aussehen sollte.
      </td>
    </tr>
    <tr>
      <td>3.3.6 Fehlervermeidung (Alle) (AAA)</td>
      <td>
        Dieses Prinzip baut auf 3.3.4 auf und erweitert seine Anforderungen auf alle Benutzereingabesituationen, nicht nur auf solche, die sensible Daten betreffen.
      </td>
      <td>Erneut siehe 3.3.4.</td>
      </tr>
      <tr>
      <td> 3.3.7 Redundante Eingaben (A) </td>
      <td>
      Informationen, die erforderlich sind und die zuvor vom Benutzer im selben Prozess oder Benutzerfluss eingegeben oder bereitgestellt wurden, werden entweder automatisch ausgefüllt oder dem Benutzer zur Auswahl aus einer Liste von Optionen bereitgestellt, es sei denn, das erneute Eingeben der Informationen ist wesentlich oder aus Sicherheitsgründen erforderlich oder wenn die Informationen nicht mehr gültig sind.
      </td>
      <td>Sehen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry">Verständnis von redundanten Eingaben</a> an, um mehr zu erfahren.</td>
      </tr>
      <tr>
      <td> 3.3.8 Zugängliche Authentifizierung (Minimum) (AA)
      </td>
      <td>
Kognitive Funktionstests, wie das Merken eines Passworts, sind für keinen Schritt in einem Authentifizierungsprozess erforderlich, es sei denn, es wird eine Alternative angeboten, wie zum Beispiel das Erkennen eines Objekts oder persönlichen Inhalts (z. B. Bilder, Videos und Audiodateien) oder ein Mechanismus zur Unterstützung (z. B. Kopieren und Einfügen und automatisches Speichern von Passwörtern).
      </td>
      <td> Sehen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum">Dokumentation zur zugänglichen Authentifizierung</a> für diesen Standard an, um mehr zu erfahren. </td>
    </tr>
    <tr>
 <td> 3.3.9 Zugängliche Authentifizierung (Erweitert) (AAA) </td>
    <td>
Ein kognitiver Funktionstest, wie das Merken eines Passworts, darf für keinen Schritt in einem Authentifizierungsprozess erforderlich sein, ohne eine Alternative zu bieten, die nicht auf einem kognitiven Funktionstest basiert, oder einen Mechanismus zu bieten, um den Benutzer beim Ausfüllen des kognitiven Funktionstests zu unterstützen. Authentifizierungstests, die vom Benutzer verlangen, Objekte zu erkennen oder nicht-textuellen Inhalt zu identifizieren, den der Benutzer der Website bereitgestellt hat, sind zulässig.
    </td>
<td> Sehen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced">erweiterte Dokumentation zur zugänglichen Authentifizierung (AAA)</a> an, um mehr zu erfahren.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.3 Eingabeunterstützung: Helfen Sie Benutzern, Fehler zu vermeiden und zu korrigieren](https://w3c.github.io/wcag/guidelines/22/#input-assistance).

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  3. Verständlich
  4. [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

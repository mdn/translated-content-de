---
title: Verständlich
slug: Web/Accessibility/Guides/Understanding_WCAG/Understandable
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so verfassen, dass sie den Erfolgskriterien entsprechen, die im **Verständlich**-Prinzip der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 dargelegt sind. Verständlich bedeutet, dass Informationen und die Bedienung der Benutzeroberfläche verständlich sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Verständlich sowie die dazugehörigen Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 3: Verständlich — Informationen und die Bedienung der Benutzeroberfläche müssen verständlich sein](https://w3c.github.io/wcag/guidelines/22/#understandable).

## Richtlinie 3.1 — Lesbar: Machen Sie Textinhalte lesbar und verständlich

Diese Richtlinie konzentriert sich darauf, Textinhalte so verständlich wie möglich zu gestalten.

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
      <td>3.1.1 Sprache der Seite (A)</td>
      <td>
        Die Standardsprache jeder Webseite sollte über den Code erkennbar sein. Dies ist wichtig, um sicherzustellen, dass der Leser auf einer in einer für ihn geeigneten Sprache verfassten Seite angekommen ist. Der einfachste Weg, dies zu erreichen, ist das Setzen des <a href="/de/docs/Web/HTML/Reference/Global_attributes/lang">lang</a>-Attributs auf dem {{htmlelement("html")}}-Element der Seite, wobei der Wert dem Sprachcode entspricht, der die Sprache der Seite am besten repräsentiert.
      </td>
      <td>
        Siehe <a href="/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#setting_the_primary_language_of_the_document">Festlegung der Primärsprache des Dokuments</a>.
      </td>
    </tr>
    <tr>
      <td>3.1.2 Sprache der Teile (AA)</td>
      <td>
        <p>
          Wenn der Inhalt einer Seite Wörter oder Ausdrücke enthält, die in einer anderen Sprache als die Primärsprache verfasst sind, sollte das <a href="/de/docs/Web/HTML/Reference/Global_attributes/lang">lang</a>-Attribut auf einem um den entsprechenden Begriff gewickelten Element (z.B. ein {{htmlelement("span")}}, wenn kein semantisches Element verfügbar ist) verwendet werden, um eine geeignete Sprache festzulegen.
        </p>
        <p>
          Sie müssen keine andere Sprache für Wörter oder Ausdrücke festlegen, die unabhängig von der Sprache gleich sind (z.B. Eigennamen, technische Begriffe, die nicht zu einer bestimmten Sprache gehören).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.3 Ungewöhnliche Wörter (AAA)</td>
      <td>
        Wenn technische Begriffe, Fachjargon oder Redewendungen/Slang verwendet werden, sollten Definitionen für solche Ausdrücke/Wörter bereitgestellt werden. Ihre Seite sollte ein Glossar enthalten, das Definitionen solcher Wörter/Begriffe enthält, auf die Sie dann verlinken können, wenn sie erscheinen, oder zumindest Definitionen irgendwo im umgebenden Text oder in einer <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists#description_lists">Beschreibungsliste</a> am Ende der Seite bereitstellen.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.4 Abkürzungen (AAA)</td>
      <td>
        <p>
          Wenn Abkürzungen verwendet werden, sollten Sie eine Erweiterung oder erforderlichenfalls eine Definition bereitstellen.
        </p>
        <p>
          Das {{htmlelement("abbr")}}-Element wird oft als bevorzugte Methode angesehen, um eine Erweiterung für eine Abkürzung bereitzustellen — es nimmt ein <a href="/de/docs/Web/HTML/Reference/Global_attributes/title">title</a>-Attribut auf, das die Erweiterung enthält, und dies erscheint, wenn die Abkürzung mit der Maus überfahren wird. Der Titelinhalt ist jedoch nicht über die Tastatur zugänglich und wird auch nicht zuverlässig von Bildschirmlesern vorgelesen. Eine bessere Methode, damit umzugehen, besteht darin, wieder auf Glossarseiten zu verlinken, die die Abkürzungserweiterung und Erklärung enthalten, oder zumindest diese im umgebenden Text im Kontext einzuschließen.
        </p>
      </td>
      <td>
        Siehe <a href="/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations">Abkürzungen</a>.
      </td>
    </tr>
    <tr>
      <td>3.1.5 Lesestufe (AAA)</td>
      <td>
        <p>
          Wenn Text bereitgestellt wird, der ein höheres Leseverständnis als das Niveau der Sekundarstufe erfordert (normalerweise Kinder im Alter von 11-14 Jahren), sollten ergänzende Erläuterungen bereitgestellt werden, um Personen zu helfen, die ihn nicht lesen können, oder eine alternative Version angeboten werden, die auf dem Niveau der Sekundarstufe verfasst ist.
        </p>
        <p>
          Das bedeutet nicht, dass alle Themen von jedem verstanden werden sollten, sondern dass der Schreibstil für jeden zugänglich sein sollte. Es ist besser, alle Inhalte auf Sekundarstufenniveau zu verfassen, selbst technische Dokumentationen wie Programmieranleitungen, es sei denn, es gibt einen guten Grund dagegen (z.B. ein alternativer Stil für poetische Effekte) oder sie müssen in einem strikten Stil verfasst werden (z.B. W3C-Spezifikationen).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.6 Aussprache (AAA)</td>
      <td>
        <p>
          Ein Mechanismus sollte bereitgestellt werden, der Benutzern den Zugang zur Aussprache von Wörtern ermöglicht, wo es erforderlich ist, um den Inhalt vollständig zu verstehen.
        </p>
        <p>
          Mit dem HTML-{{htmlelement("audio")}}-Element kann ein Steuerelement erstellt werden, das dem Leser ermöglicht, eine Audiodatei abzuspielen, die die korrekte Aussprache enthält. Es macht auch Sinn, einen textuellen Ausspracheführer nach schwierigen Wörtern einzufügen, ähnlich wie in Wörterbucheinträgen.
        </p>
      </td>
      <td>
        Siehe <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio">Video- und Audioinhalte</a> und <a href="https://www.oxfordlearnersdictionaries.com/us/about/pronunciation_english.html">Ausspracheführer für Englisch Wörterbuch</a>.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.1 Lesbar: Machen Sie Textinhalte lesbar und verständlich](https://w3c.github.io/wcag/guidelines/22/#readable).

## Richtlinie 3.2 — Vorhersehbar: Webseiten sollen auf vorhersehbare Weise erscheinen und funktionieren

Diese Richtlinie konzentriert sich darauf, Benutzeroberflächen intuitiv und verständlich zu gestalten.

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
      <td>3.2.1 Bei Fokus (A)</td>
      <td>
        <p>
          Wenn ein Steuerelement oder ein anderes Seitenelement den Fokus erhält, sollte es den Kontext nicht in einer Weise ändern, die den Benutzer verwirren oder desorientieren könnte.
        </p>
        <p>
          Dies ist eine Frage des umsichtigen Designs — Menschen wollen keine Benutzeroberflächen, die sie überraschen; sie wollen, dass die Dinge intuitiv und erwartungsgemäß funktionieren. Beispielsweise sollte das Fokussieren einer Navigationsmenüoption die angezeigte Seite nicht ändern — sie sollte aktiviert werden, bevor sich die Anzeige ändert.
        </p>
      </td>
      <td>
        Das <code>Element</code>'s [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis enthält einige nützliche Informationen. Siehe auch <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in">Keyboard-Zugänglichkeit neu einbauen</a> für einige nützliche Implementierungsideen.
      </td>
    </tr>
    <tr>
      <td>3.2.2 Bei Eingabe (A)</td>
      <td>
        <p>
          Wenn Daten in ein Steuerelement eingegeben werden oder eine Einstellung geändert wird, sollte der Kontext nicht unerwartet geändert werden. Der Benutzer sollte gewarnt/beraten werden, bevor die Änderung erfolgt.
        </p>
        <p>
          Wiederum sollte ein umsichtiges Design implementiert werden. Beispielsweise sollte der Benutzer gewarnt werden oder die Möglichkeit haben, eine Aktion zu bestätigen oder seine Arbeit zu speichern, bevor eine Taste gedrückt wird, die dazu führt, dass die Anwendung die aktuelle Ansicht verlässt.
        </p>
      </td>
      <td>
        Das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis ist hierbei nützlich.
      </td>
    </tr>
    <tr>
      <td>3.2.3 Konsistente Navigation (AA)</td>
      <td>
        <p>
          Der Stil und die Platzierung des Navigationsmenüs/der Steuerungen sollten zwischen verschiedenen Seiten oder Ansichten einer Webseite konsistent sein, und die vorhandenen Elemente sollten in derselben Reihenfolge erscheinen, selbst wenn z.B. neue Elemente hinzugefügt werden. Wenn der Benutzer eine Änderung vorgenommen hat, z.B. ein anderes Farbschema oder eine andere Position für die Navigation ausgewählt hat, sollte seine Wahl auf allen Seiten respektiert werden.
        </p>
        <p>
          Wiederum umsichtiges Design — machen Sie die Navigationselemente auf allen Seiten oder Ansichten gleich.
        </p>
      </td>
      <td>
        Siehe <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#structure_page_sections_logically">Strukturieren von Seitensektionen logisch</a> für Informationen über modernes Markup für Layouts. Siehe auch <a href="/de/docs/Learn_web_development/Core/Text_styling/Styling_links#styling_links_as_buttons">Verlinkungen als Schaltflächen stylen</a> für ein nützliches Beispiel für ein zugängliches Navigationsmenü.
      </td>
    </tr>
    <tr>
      <td>3.2.4 Konsistente Identifikation (AA)</td>
      <td>
        <p>
          Steuerelemente oder Komponenten mit derselben Funktionalität sollten auf verschiedenen Seiten oder Ansichten auf dieselbe Weise identifiziert werden. Ein Währungsumrechner, der beispielsweise auf jeder Seite einer Weltreise-Website erscheint, sollte semantisch und hinsichtlich der Bezeichnungen identisch sein.
        </p>
        <p>Wiederum umsichtiges Design!</p>
      </td>
      <td>
        "Labels" können sich auf beschreibende Informationen in Textinhalten oder HTML-Formularbeschriftungen beziehen. Siehe <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels">Verwendung bedeutungsvoller Textlabels</a> für weitere Informationen.
      </td>
    </tr>
    <tr>
      <td>3.2.5 Änderung auf Anfrage (AAA)</td>
      <td>
        <p>
          Änderungen im Kontext, die Benutzer möglicherweise verwirren oder desorientieren könnten, sollten nur auf Nutzeranfrage erfolgen oder Benutzer sollten in der Lage sein, sie zu deaktivieren.
        </p>
        <p>
          Wenn Sie etwas benötigen, das die aktuelle Ansicht erheblich verändert (z.B. Inhalt oder Steuerelemente), lassen Sie den Benutzer steuern, wann diese Änderung erfolgen soll (z.B. welche Seite angezeigt werden soll, wann zum nächsten Foto in der Galerie gewechselt werden soll...).
        </p>
        <p>
          Wenn Sie etwas wie ein Karussell auf einer Seite benötigen, bieten Sie eine Option an, um das automatische Fortschreiten zu stoppen. Besser ist es, solche Funktionalitäten möglichst zu vermeiden.
        </p>
      </td>
    </tr>
    <tr>
      <td> 3.2.6 Konsistente Hilfe (A)</td>
      <td>
        <p>Webseiten, die Hilfemechanismen enthalten, einschließlich Selbsthilfeoptionen und Kontaktdetails, die auf mehreren Webseiten wiederholt werden, müssen diese Mechanismen in derselben Reihenfolge auf allen Seiten platzieren, es sei denn, eine Änderung wurde vom Benutzer initiiert.</p>
      <td>
        <p>Lesen Sie die <a href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-help">dokumentierte konsistente Hilfe</a> für diese Norm, um mehr zu erfahren.</p>
      </td>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.2 Vorhersehbar: Webseiten sollen auf vorhersehbare Weise erscheinen und funktionieren](https://w3c.github.io/wcag/guidelines/22/#predictable).

## Richtlinie 3.3 — Eingabeunterstützung: Helfen Sie Benutzern, Fehler zu vermeiden und zu korrigieren

Diese Richtlinie konzentriert sich darauf, Benutzern dabei zu helfen, korrekte Informationen einzugeben, wenn erforderlich, mit minimalen Fehlern.

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
      <td>3.3.1 Fehleridentifizierung (A)</td>
      <td>
        <p>
          Wenn ein Benutzer ein Formular ausfüllt oder zwischen Optionen wählt, sollte ein entdeckter Fehler dem Benutzer klar gemeldet werden, zusammen mit dem Formularelement, auf das sich der Fehler bezieht.
        </p>
        <p>
          Es ist ratsam, eine clientseitige Fehlererkennung und -behandlung zu implementieren, entweder über HTML-Formularvalidierungsfunktionen und/oder JavaScript, je nachdem, was für Ihre Situation am besten geeignet ist. Wenn ein Fehler erkannt wird, sollte neben dem Formulareingabefeld, das den Fehler verursacht, eine intuitive Fehlermeldung angezeigt werden, um dem Benutzer zu helfen, seine Eingaben zu korrigieren. Für Bildschirmleser-Benutzer können Sie ARIA-Live-Regionen verwenden, um den Benutzer auf eine Änderung auf der Seite aufmerksam zu machen.
        </p>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Die serverseitige Validierung sollte <em>immer</em> zusammen mit der clientseitigen Validierung verwendet werden. Die clientseitige Validierung lässt sich zu leicht deaktivieren oder umgehen, daher kann nicht allein auf sie vertraut werden.
          </p>
        </div>
      </td>
      <td>
        Siehe <a href="/de/docs/Learn_web_development/Extensions/Forms/Form_validation">Datenvalidierung von Formularen</a> für umfassende Validierungsinformationen und <a href="/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#dynamic_content_updates">WAI-ARIA: Dynamische Inhaltsaktualisierungen</a> für Informationen über Live-Regionen.
      </td>
    </tr>
    <tr>
      <td>3.3.2 Beschriftungen oder Anweisungen (A)</td>
      <td>
        <p>
          Klare Anweisungen sollten bereitgestellt werden, wenn eine Dateneingabe erforderlich ist. Wenn eine kurze Anweisung oder Eingabeaufforderung erforderlich ist, können Sie {{htmlelement("label")}}-Elemente für einzelne Eingaben wie Name oder Alter verwenden, eine Kombination aus {{htmlelement("label")}}s und {{htmlelement("fieldset")}}s/{{htmlelement("legend")}}s für mehrere Eingaben, die zusammengehören (wie die Elemente eines Geburtsdatums oder einer Postadresse).
        </p>
        <p>
          Wenn eine komplexere Erklärung erforderlich ist, können Sie immer erklärende Absätze einfügen oder vielleicht müssen Sie versuchen, Ihre Formulare intuitiver zu gestalten.
        </p>
      </td>
      <td>
        <ul>
          <li>
            <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels">Verwendung bedeutungsvoller Textlabels</a>
          </li>
          <li>
            <a href="/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form">Wie man ein HTML-Formular strukturiert</a>
          </li>
          <li>
            <a href="/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Text_labels_and_names">Textlabels und Namen</a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3.3.3 Fehlerhinweise (AA)</td>
      <td>
        <p>
          Wenn ein Fehler erkannt wird und Korrekturvorschläge bekannt sind, stellen Sie diese dem Benutzer bereit (z.B. Alternativen vorschlagen, wenn der Benutzer einen Benutzernamen auswählt, der bereits vergeben ist), es sei denn, dies würde ein Sicherheitsproblem oder Kontextproblem verursachen (z.B. beim Eingeben eines Passworts).
        </p>
        <p>
          In solchen Fällen wird, wo dies angemessen ist, wahrscheinlich eine Kombination aus JavaScript und serverseitigen Funktionen verwendet, um zu prüfen, ob der Eintrag korrekt ist, und wenn nicht, welche brauchbaren Vorschläge dem Benutzer gemacht werden können. Solche Vorschläge sollten nützlich im Kontext angezeigt werden, genau wie Fehlermeldungen (siehe 3.3.1).
        </p>
      </td>
      <td>Derzeit keine Tutorials vorgeschlagen.</td>
    </tr>
    <tr>
      <td>3.3.4 Fehlervermeidung (Rechtlich, Finanziell, Daten) (AA)</td>
      <td>
        <p>
          Bei Formularen, die die Eingabe sensibler Daten erfordern (wie rechtliche Vereinbarungen, E-Commerce-Transaktionen oder persönliche Daten), sollte mindestens eines der folgenden zutreffen:
        </p>
        <ul>
          <li>Einsendungen sind umkehrbar.</li>
          <li>
            Daten werden auf Fehler überprüft und dem Benutzer wird Gelegenheit gegeben, sie zu korrigieren.
          </li>
          <li>
            Ein Mechanismus steht zur Verfügung, um Informationen vor der endgültigen Einsendung zu bestätigen und zu korrigieren.
          </li>
        </ul>
      </td>
      <td>
        <p>
          <strong>Umkehrbar</strong> — für jede Ansicht, in der Daten eingegeben werden können, bieten Sie eine äquivalente Ansicht, die es ermöglicht, einen Eintrag zu bearbeiten oder sogar zu löschen, je nach Bedarf (z.B. siehe <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django">Django-Web-Framework</a>).
        </p>
        <p>
          <strong>Datenüberprüfung</strong> — wie in 3.3.1 behandelt, sollte eine Kombination aus clientseitiger und serverseitiger Validierung verwendet werden, um Fehler zu erkennen und hilfreiche Meldungen anzuzeigen, die es dem Benutzer ermöglichen, seine Eingaben zu korrigieren.
        </p>
        <p>
          <strong>Bestätigen und korrigieren</strong> — wo dies angemessen ist, sollte der Benutzer nach dem Ausfüllen einer Reihe von Formularfeldern zur Erledigung einer Aufgabe (z.B. Kauf eines Produkts) eine Bestätigungsseite erhalten, auf der er seine Eingaben überprüfen und korrigieren kann, was nicht richtig aussieht. Dieses Muster wird häufig auf E-Commerce-Seiten wie Amazon verwendet.
        </p>
      </td>
    </tr>
    <tr>
      <td>3.3.5 Kontextsensitive Hilfe ist verfügbar (AAA)</td>
      <td>
        Stellen Sie Anleitungen und andere passende Hinweise im Kontext bereit, um das Ausfüllen und Einsenden von Formularen zu erleichtern.
      </td>
      <td>
        Dies baut wirklich nur auf 3.3.1 und anderen ähnlichen Kriterien auf, erfordert jedoch umfassendere kontextbezogene Hilfeinformationen und -dienste, z.B. Bereitstellung eines dedizierten Links zu einer Hilfeseite oder einem Hilfedienst auf jeder Seite, Bereitstellung von Beispielen, die zeigen, wie ein erfolgreiches Ausfüllen aussehen sollte.
      </td>
    </tr>
    <tr>
      <td>3.3.6 Fehlervermeidung (Alle) (AAA)</td>
      <td>
        Dieses Prinzip baut auf 3.3.4 auf und erweitert dessen Anforderungen auf alle Benutzereingabesituationen, nicht nur solche, die sensible Daten betreffen.
      </td>
      <td>Siehe erneut 3.3.4.</td>
      </tr>
      <tr>
      <td> 3.3.7 Redundante Eingabe (A) </td>
      <td>
      Informationen, die benötigt werden und die zuvor vom Benutzer im selben Prozess oder Benutzerfluss eingegeben oder bereitgestellt wurden, werden entweder automatisch ausgefüllt oder können vom Benutzer aus einer Liste von Optionen ausgewählt werden, es sei denn, eine erneute Eingabe der Informationen ist essentiell oder aus Sicherheitsgründen erforderlich oder die Informationen sind nicht mehr gültig.
      </td>
      <td>Lesen Sie <a href="https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry">Verständnis der redundanten Eingabe</a>, um mehr zu erfahren.</td>
      </tr>
      <tr>
      <td> 3.3.8 Zugängliche Authentifizierung (Minimum) (AA)</td>
      <td>
Für keinen Schritt in einem Authentifizierungsprozess sind kognitive Funktionstests, wie das Erinnern eines Passworts, erforderlich, es sei denn, es wird eine Alternative bereitgestellt, wie die Erkennung von Objekten oder persönlichen Inhalten (z.B. Bilder, Videos und Audio), oder ein Mechanismus zur Unterstützung (z.B. Kopieren und Einfügen und automatisches Speichern von Passwörtern).
      </td>
      <td>Lesen Sie die <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum">dokumentierte zugängliche Authentifizierung</a> für diesen Standard, um mehr zu erfahren.</td>
    </tr>
    <tr>
    <td> 3.3.9 Zugängliche Authentifizierung (Erweitert) (AAA)
    </td>
    <td>
    Ein kognitiver Funktionstest, wie das Erinnern eines Passworts, darf für keinen Schritt in einem Authentifizierungsprozess ohne Bereitstellung einer Alternative erforderlich sein, die sich nicht auf einen kognitiven Funktionstest stützt, oder bietet einen Mechanismus, der den Benutzer bei der Durchführung des kognitiven Funktionstests unterstützt. Authentifizierungstests, die vom Benutzer verlangen, Objekte oder nicht-textuellen Inhalt zu erkennen, den der Benutzer der Webseite zur Verfügung gestellt hat, sind erlaubt.
    </td>
    <td>Lesen Sie die <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced">erweiterte Dokumentation zur zugänglichen Authentifizierung (AAA)</a>, um mehr zu erfahren.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.3 Eingabeunterstützung: Helfen Sie Benutzern, Fehler zu vermeiden und zu korrigieren](https://w3c.github.io/wcag/guidelines/22/#input-assistance).

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  1. [Sichtbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  3. Verständlich
  4. [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

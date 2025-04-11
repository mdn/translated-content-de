---
title: Verstehbar
slug: Web/Accessibility/Guides/Understanding_WCAG/Understandable
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so schreiben können, dass sie den Erfolgskriterien des **Verstehbar**-Prinzips der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 entsprechen. Verstehbar bedeutet, dass Informationen und die Bedienung der Benutzeroberfläche verständlich sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Verstehbar und deren Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 3: Verstehbar — Informationen und die Bedienung der Benutzeroberfläche müssen verständlich sein](https://www.w3.org/TR/WCAG21/#understandable).

## Richtlinie 3.1 — Lesbar: Machen Sie Textinhalte lesbar und verständlich

Diese Richtlinie konzentriert sich darauf, Textinhalte so verständlich wie möglich zu gestalten.

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
        Die Standardsprache einer jeden Webseite sollte über den Code erkennbar sein. Dies ist wichtig, um sicherzustellen, dass der Leser auf einer Seite gelandet ist, die in einer für ihn geeigneten Sprache verfasst ist. Der einfachste Weg, dies zu erreichen, ist das Setzen des <a href="/de/docs/Web/HTML/Reference/Global_attributes/lang">lang</a>-Attributs im {{htmlelement("html")}}-Element der Seite mit einem Wert, der dem Sprachcode entspricht, der am besten der Sprache entspricht, in der die Seite geschrieben ist.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#setting_the_primary_language_of_the_document"
          >Festlegen der Hauptsprache des Dokuments</a
        >.
      </td>
    </tr>
    <tr>
      <td>3.1.2 Sprache von Teilen (AA)</td>
      <td>
        <p>
          In Fällen, in denen der Inhalt einer Seite Wörter oder Ausdrücke in einer anderen Sprache als der Hauptsprache enthält, verwenden Sie das <a href="/de/docs/Web/HTML/Reference/Global_attributes/lang">lang</a>-Attribut auf einem Element, das um den betreffenden Begriff gewickelt ist (z.B. ein {{htmlelement("span")}}, wenn kein semantisches Element verfügbar ist), um eine geeignete Sprache dafür zu setzen.
        </p>
        <p>
          Es ist nicht erforderlich, eine andere Sprache für Wörter oder Ausdrücke zu setzen, die unabhängig von der Sprache gleich sind (zum Beispiel Eigennamen, technische Begriffe, die nicht Teil einer bestimmten Sprache sind).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.3 Ungewöhnliche Wörter (AAA)</td>
      <td>
        Wo technische Begriffe, Fachjargon oder idiomatische Ausdrücke/Slang verwendet werden, sollten dafür Definitionen bereitgestellt werden. Ihre Website sollte ein Glossar bereitstellen, das Definitionen dieser Wörter/Begriffe enthält, auf das Sie dann verlinken können, wenn sie erscheinen, oder zumindest Definitionen im umgebenden Text oder in einer
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/Lists#description_lists"
          >Beschreibungsliste</a
        >
        am Ende der Seite bereitstellen.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.4 Abkürzungen (AAA)</td>
      <td>
        <p>
          Wo Abkürzungen verwendet werden, sollten Sie eine Ergänzung oder eine Definition dieser bereitstellen.
        </p>
        <p>
          Das {{htmlelement("abbr")}}-Element wird oft als bevorzugte Methode zum Bereitstellen einer Erweiterung für eine Abkürzung angesehen — es nimmt ein <a href="/de/docs/Web/HTML/Reference/Global_attributes/title">title</a>-Attribut an, das die Erweiterung enthält, und diese erscheint, wenn Sie mit der Maus über das Akronym fahren. Jedoch sind die Titelinhalte nicht über die Tastatur zugänglich, noch werden sie zuverlässig von Bildschirmlesegeräten vorgelesen. Eine bessere Methode, um dies zu handhaben, besteht darin, Links zu Glossarseiten bereitzustellen, die die Akronymerweiterung und -erklärung enthalten, oder zumindest sie im umgebenden Text im Kontext einzuschließen.
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
      <td>3.1.5 Lesbarkeit (AAA)</td>
      <td>
        <p>
          Wenn Text bereitgestellt wird, der ein höheres Leseverständnis als das der unteren Sekundarstufe erfordert (normalerweise Kinder im Alter von 11-14 Jahren), stellen Sie ergänzendes Erklärmaterial bereit, um Menschen zu helfen, die es nicht lesen können, oder bieten Sie eine alternative Version an, die auf dem Niveau der unteren Sekundarstufe geschrieben ist.
        </p>
        <p>
          Das bedeutet nicht, dass alle Inhalte von jedem verstanden werden müssen, aber der Schreibstil sollte für alle zugänglich sein. Es ist besser, alle Inhalte auf dem Niveau der unteren Sekundarstufe zu schreiben, auch technische Dokumentationen wie Programmieranleitungen, es sei denn, es gibt einen guten Grund, dies nicht zu tun (z.B. ein alternativer Stil für poetische Effekte) oder sie müssen in einem strikten Stil verfasst werden (z.B. W3C-Spezifikationen).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.6 Aussprache (AAA)</td>
      <td>
        <p>
          Ein Mechanismus sollte bereitgestellt werden, um Benutzern den Zugang zur Aussprache von Wörtern zu ermöglichen, wo dies erforderlich ist, um den Inhalt vollständig zu verstehen.
        </p>
        <p>
          Das HTML-{{htmlelement("audio")}}-Element kann verwendet werden, um eine Steuerung zu erstellen, die dem Leser ermöglicht, eine Audiodatei mit der korrekten Aussprache abzuspielen, und es macht auch Sinn, einen textuellen Aussprachehinweis nach schwierigen Wörtern zu inkludieren, so wie es in Wörterbucheinträgen üblich ist.
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
          >Ausspracheführer für das englische Wörterbuch</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.1 Lesbar: Machen Sie Textinhalte lesbar und verständlich](https://www.w3.org/TR/WCAG21/#readable).

## Richtlinie 3.2 — Vorhersehbar: Lassen Sie Webseiten auf vorhersehbare Weise erscheinen und funktionieren

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
          Wenn ein Steuerelement oder ein anderes Seitenelement den Fokus erhält, sollte es den Kontext nicht so verändern, dass der Benutzer verwirrt oder desorientiert wird.
        </p>
        <p>
          Dies ist eine Frage des sinnvollen Designs — Benutzer möchten nicht von Schnittstellen überrascht werden; sie möchten, dass Dinge intuitiv und erwartungsgemäß funktionieren. Zum Beispiel sollte das Fokussieren auf eine Navigationsmenüoption nicht die angezeigte Seite ändern — sie sollte aktiviert werden, bevor sich die Anzeige ändert.
        </p>
      </td>
      <td>
        <code>Element</code>'s [`focus`](/de/docs/Web/API/Element/focus_event) Ereignis enthält einige nützliche Informationen. Siehe auch
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Keyboard-Zugänglichkeit wieder einbauen</a
        >
        für nützliche Implementierungsideen.
      </td>
    </tr>
    <tr>
      <td>3.2.2 Bei Eingabe (A)</td>
      <td>
        <p>
          Wenn Daten in ein Steuerelement eingegeben werden oder eine Einstellung geändert wird, sollte der Kontext nicht unerwartet geändert werden. Der Benutzer sollte gewarnt oder über die bevorstehende Änderung informiert werden, bevor sie erfolgt.
        </p>
        <p>
          Auch hier sollte sinnvolles Design implementiert werden. Wenn zum Beispiel das Drücken eines Buttons die Anwendung dazu bringt, die aktuelle Ansicht zu verlassen, sollte der Benutzer aufgefordert werden, diese Aktion zu bestätigen, seine Arbeit zu speichern, falls zutreffend, usw.
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
          Der Stil und die Anordnung von Navigationsmenüs/-steuerelementen sollten zwischen verschiedenen Seiten oder Ansichten einer Webseite konsistent sein, und die bestehenden Elemente sollten in derselben Reihenfolge erscheinen, auch wenn zum Beispiel neue Elemente hinzugefügt werden. Wenn der Benutzer eine Änderung initiiert hat, z.B. eine andere Farbschema- oder Positionswahl für die Navigation, sollte seine Wahl auf allen Seiten respektiert werden.
        </p>
        <p>
          Wiederum sinnvolles Design — machen Sie die Navigationselemente auf allen Seiten oder Ansichten gleich.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#structure_page_sections_logically"
          >Strukturieren Sie Seitensektionen logisch</a
        >
        für Informationen über moderne Layout-Markup. Siehe auch
        <a
          href="/de/docs/Learn_web_development/Core/Text_styling/Styling_links#styling_links_as_buttons"
          >Links als Buttons stylen</a
        >
        für ein nützliches Beispiel für ein zugängliches Navigationsmenü.
      </td>
    </tr>
    <tr>
      <td>3.2.4 Konsistente Identifikation (AA)</td>
      <td>
        <p>
          Steuerelemente oder Komponenten, die dieselbe Funktionalität haben, sollten auf dieselbe Weise über verschiedene Seiten oder Ansichten hinweg identifiziert werden. Ein Währungsrechner, der auf jeder Seite einer weltweiten Reise-Website erscheint, sollte zum Beispiel semantisch und bezüglich der Labels genau gleich sein.
        </p>
        <p>Wiederum sinnvolles Design!</p>
      </td>
      <td>
        "Labels" können sich auf beschreibende Informationen im Textinhalt oder HTML-Formular-Labels beziehen. Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels"
          >Verwenden Sie bedeutungsvolle Text-Labels</a
        >
        für weitere Informationen.
      </td>
    </tr>
    <tr>
      <td>3.2.5 Änderungswunsch (AAA)</td>
      <td>
        <p>
          Kontextänderungen, die möglicherweise Benutzer verwirren oder desorientieren können, sollten nur dann auftreten, wenn sie vom Benutzer angefordert werden, ODER der Benutzer sollte in der Lage sein, sie auszuschalten.
        </p>
        <p>
          Wenn Sie etwas haben müssen, das die aktuelle Ansicht erheblich ändert (z.B. Inhalte oder Steuerelemente), lassen Sie den Benutzer steuern, wann sie möchten, dass diese Änderung stattfindet (z.B. welche Seite angezeigt wird, wann zum nächsten Foto in der Galerie übergegangen wird...)
        </p>
        <p>
          Wenn Sie etwas wie ein Karussell auf einer Seite haben müssen, geben Sie eine Option, um das automatische Fortschreiten zu stoppen. Besser, solche Funktionalitäten zu vermeiden, wenn möglich.
        </p>
      </td>
      </tr>
      <tr>
      <td> 3.2.6 Konsistente Hilfe (A)</td>
      <td> <p>Webseiten, die Hilfe-Mechanismen enthalten, einschließlich Selbsthilfeoptionen und menschliche Kontaktdaten, die auf mehreren Webseiten wiederholt werden, müssen diese Mechanismen in derselben Reihenfolge auf allen Seiten platzieren, es sei denn, eine Änderung wird vom Benutzer initiiert.</p>
      <td> <p>Weitere Informationen finden Sie in der <a href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-help">Dokumentation zur konsistenten Hilfe</a> für diesen Standard. </p>
      </td>
      </td>
      <tr>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.2 Vorhersehbar: Lassen Sie Webseiten auf vorhersehbare Weise erscheinen und funktionieren](https://www.w3.org/TR/WCAG21/#predictable).

## Richtlinie 3.3 — Eingabeunterstützung: Helfen Sie Benutzern Fehler zu vermeiden und zu korrigieren

Diese Richtlinie konzentriert sich darauf, Benutzern zu helfen, die korrekten Informationen mit möglichst wenigen Fehlern einzugeben.

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
      <td>3.3.1 Fehleridentifikation (A)</td>
      <td>
        <p>
          Wenn ein Benutzer ein Formular ausfüllt oder zwischen Optionen auswählt, sollte jeder erkannte Fehler dem Benutzer deutlich mitgeteilt werden, zusammen mit dem Formularsteuerelement, mit dem der Fehler zusammenhängt.
        </p>
        <p>
          Es wird empfohlen, clientseitige Fehlererkennung und -behandlung zu implementieren, über HTML-Formularvalidierungsfunktionen oder JavaScript, was auch immer für Ihre Situation am besten geeignet ist. Wenn ein Fehler erkannt wird, sollte eine intuitive Fehlermeldung neben dem fehlerhaften Formulareingabefeld angezeigt werden, um dem Benutzer zu helfen, seine Eingaben zu korrigieren. Für Benutzer von Bildschirmlesegeräten können Sie aria live-Regionen verwenden, um den Benutzer über eine Änderung auf der Seite zu informieren.
        </p>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Serverseitige Validierung sollte <em>immer</em> zusätzlich zur clientseitigen Validierung verwendet werden. Die clientseitige Validierung ist zu einfach zu deaktivieren oder auf andere Weise zu umgehen, daher kann sie nicht allein darauf verlassen werden.
          </p>
        </div>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Extensions/Forms/Form_validation"
          >Formulardatenvalidierung</a
        >
        für umfassende Validierungsinformationen, und
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#dynamic_content_updates"
          >WAI-ARIA: Dynamische Inhaltsaktualisierungen</a
        >
        für Informationen über Live-Regionen.
      </td>
    </tr>
    <tr>
      <td>3.3.2 Labels oder Anweisungen (A)</td>
      <td>
        <p>
          Klare Anweisungen sollten bereitgestellt werden, wenn eine Dateneingabe erforderlich ist. Wenn eine kurze Anweisung oder Aufforderung erforderlich ist, können Sie {{htmlelement("label")}}-Elemente für einzelne Eingaben wie Name oder Alter verwenden, eine Kombination aus {{htmlelement("label")}}s und {{htmlelement("fieldset")}}s/{{htmlelement("legend")}}s für mehrere Eingaben, die zusammengehören (wie die Elemente eines Geburtsdatums oder einer Postadresse).
        </p>
        <p>
          Wenn eine komplexere Erklärung erforderlich ist, können Sie immer auch erläuternde Absätze einschließen, oder vielleicht müssen Sie versuchen, Ihre Formulare intuitiver zu gestalten.
        </p>
      </td>
      <td>
        <ul>
          <li>
            <a
              href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels"
              >Verwenden Sie bedeutungsvolle Text-Labels</a
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
              >Text-Labels und Namen</a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3.3.3 Fehler-Vorschlag (AA)</td>
      <td>
        <p>
          Wenn ein Fehler erkannt wird und Vorschläge zur Korrektur bekannt sind, sollten diese dem Benutzer zur Verfügung gestellt werden (z.B. das Vorschlagen von Alternativen, wenn der Benutzer einen Benutzernamen auswählt und einen wählt, der bereits vergeben ist), es sei denn, dies würde ein Sicherheitsproblem (z.B. beim Eingeben eines Passworts) oder ein Kontextproblem (z.B. wenn sie versuchen, eine Frage in einer Quiz-App zu beantworten) verursachen.
        </p>
        <p>
          In solchen Fällen, wenn dies angebracht ist, verwenden Sie wahrscheinlich eine Kombination aus JavaScript und serverseitiger Funktionalität, um zu überprüfen, ob der Eintrag korrekt ist, und wenn nicht, welche möglichen Vorschläge dem Benutzer gegeben werden können. Solche Vorschläge sollten nützlich im Kontext angezeigt werden, genau wie Fehlermeldungen (siehe 3.3.1).
        </p>
      </td>
      <td>Noch keine Tutorial-Vorschläge.</td>
    </tr>
    <tr>
      <td>3.3.4 Fehler-Prävention (Rechtlich, Finanziell, Daten) (AA)</td>
      <td>
        <p>
          Im Fall von Formularen, die die Eingabe sensibler Daten erfordern (wie rechtliche Vereinbarungen, E-Commerce-Transaktionen oder persönliche Daten), sollte mindestens eines der folgenden Kriterien zutreffen:
        </p>
        <ul>
          <li>Einsendungen sind reversibel.</li>
          <li>
            Daten werden auf Fehler überprüft, und dem Benutzer wird die Möglichkeit gegeben, diese zu korrigieren.
          </li>
          <li>
            Es steht ein Mechanismus zur Verfügung, um Informationen vor der endgültigen Übermittlung zu bestätigen und zu korrigieren.
          </li>
        </ul>
      </td>
      <td>
        <p>
          <strong>Reversibel</strong> — für jede Ansicht, in der Daten eingegeben werden können, stellen Sie eine äquivalente Ansicht bereit, die es ermöglicht, einen Eintrag zu bearbeiten oder sogar zu löschen, wie angebracht (siehe zum Beispiel
          <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django">Django-Web-Framework</a
          >).
        </p>
        <p>
          <strong>Datenüberprüfung</strong> — wie in 3.3.1 behandelt, sollte eine Kombination aus client- und serverseitiger Validierung verwendet werden, um Fehler zu erkennen und hilfreiche Meldungen an den Benutzer anzuzeigen, um ihm die Korrektur seiner Eingaben zu ermöglichen.
        </p>
        <p>
          <strong>Bestätigen und korrigieren</strong> — wo angebracht, sollte der Benutzer nach dem Ausfüllen einer Reihe von Formularfeldern zur Durchführung einer Aufgabe (wie dem Kauf eines Produkts) einen Bestätigungsbildschirm sehen, auf dem er seine Eingaben überprüfen und alles korrigieren kann, was nicht richtig aussieht. Dieses Muster wird häufig auf E-Commerce-Websites wie Amazon verwendet.
        </p>
      </td>
    </tr>
    <tr>
      <td>3.3.5 Kontext-sensitive Hilfe ist verfügbar (AAA)</td>
      <td>
        Bereitstellen von Anweisungen und anderen angemessenen Hinweisen im Kontext, um das Ausfüllen und Einreichen von Formularen zu unterstützen.
      </td>
      <td>
        Dies baut wirklich auf 3.3.1 und anderen ähnlichen Kriterien auf, erfordert jedoch umfassendere kontextuelle Hilfeinformationen und -dienste, z.B. Bereitstellung eines speziellen Links zu einer Hilfeseite oder einem Dienst auf jeder Seite, Bereitstellung von Beispielen, die zeigen, wie eine erfolgreiche Eingabe aussehen sollte.
      </td>
    </tr>
    <tr>
      <td>3.3.6 Fehler-Prävention (Alle) (AAA)</td>
      <td>
        Dieses Prinzip baut auf 3.3.4 auf und erweitert seine Anforderungen auf alle Benutzereingabesituationen, nicht nur solche, die sensible Daten betreffen.
      </td>
      <td>Wiederum siehe 3.3.4.</td>
      </tr>
      <tr>
      <td>3.3.7 Redundante Eingabe (A)</td>
      <td>
      Informationen, die notwendig sind und die der Benutzer im gleichen Prozess oder Benutzerfluss zuvor eingegeben oder bereitgestellt hat, werden entweder automatisch vorausgefüllt oder dem Benutzer aus einer Liste von Optionen auswählbar angeboten, es sei denn, das Wiederholen der Informationen ist aus Sicherheitsgründen erforderlich, oder die Informationen sind nicht mehr gültig.
      </td>
      <td>Weitere Informationen finden Sie im <a href="https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry">Verständnispunkt redundante Eingabe</a>.</td>
      </tr>
      <tr>
      <td>3.3.8 Zugängliche Authentifizierung (Minimum) (AA)</td>
      <td>Kognitive Funktionstests, wie z.B. das Merken eines Passworts, sind in keinem Schritt eines Authentifizierungsprozesses erforderlich, es sei denn, es wird eine Alternative bereitgestellt, wie z.B. die Erkennung eines Objekts oder personalisierten Inhalts (z.B. Bilder, Videos und Audio), oder ein Mechanismus zur Unterstützung (z.B. Kopieren und Einfügen und automatisches Speichern von Passwörtern).</td>
      <td> Weitere Informationen zu diesem Standard finden Sie in der <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum">Dokumentation zur zugänglichen Authentifizierung</a>.</td>
    </tr>
    <tr>
      <td>3.3.9 Zugängliche Authentifizierung (Erweitert) (AAA)</td>
      <td>Ein kognitiver Funktionstest, wie z.B. das Merken eines Passworts, darf in keinem Schritt eines Authentifizierungsprozesses ohne Bereitstellung einer Alternative erforderlich sein, die nicht auf einem kognitiven Funktionstest beruht oder eine Möglichkeit bietet, den Benutzer bei der Durchführung des kognitiven Funktionstests zu unterstützen. Authentifizierungstests, die den Benutzer erfordern, Objekte zu erkennen oder nicht-textuelle Inhalte zu identifizieren, die der Benutzer der Website bereitgestellt hat, sind zulässig.</td>
<td>Weitere Informationen finden Sie in der <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced">Erweiterte zugängliche Authentifizierungsdokumentation (AAA)</a>.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.3 Eingabeunterstützung: Helfen Sie Benutzern Fehler zu vermeiden und zu korrigieren](https://www.w3.org/TR/WCAG21/#input-assistance).

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  3. Verstehbar
  4. [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

---
title: Understandable
slug: Web/Accessibility/Understanding_WCAG/Understandable
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{AccessibilitySidebar}}

Dieser Artikel bietet praxisnahe Ratschläge, wie Sie Ihre Webinhalte so schreiben können, dass sie den Erfolgskriterien des **Understandable**-Prinzips der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 entsprechen. Understandable besagt, dass Informationen und die Bedienung der Benutzeroberfläche verständlich sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Understandable sowie deren Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 3: Understandable — Informationen und die Bedienung der Benutzeroberfläche müssen verständlich sein](https://www.w3.org/TR/WCAG21/#understandable).

## Richtlinie 3.1 — Lesbar: Machen Sie Textinhalte lesbar und verständlich

Diese Richtlinie konzentriert sich darauf, Textinhalte so verständlich wie möglich zu machen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie Sie die Kriterien erfüllen</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3.1.1 Sprache der Seite (A)</td>
      <td>
        Die Standardmenschsprache jeder Webseite sollte über den Code erkannt werden können. Dies ist entscheidend, um sicherzustellen, dass der Leser auf einer Seite angekommen ist, die in einer für ihn geeigneten Sprache verfasst ist. Der einfachste Weg, dies zu erreichen, ist die Festlegung des <a href="/de/docs/Web/HTML/Global_attributes#lang">lang</a>-Attributs auf dem {{htmlelement("html")}}-Element der Seite, wobei es einen Wert erhält, der am besten die Sprache repräsentiert, in der die Seite verfasst ist.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#setting_the_primary_language_of_the_document"
          >Festlegung der primären Sprache des Dokuments</a
        >.
      </td>
    </tr>
    <tr>
      <td>3.1.2 Sprache der Teile (AA)</td>
      <td>
        <p>
          Wenn der Inhalt einer Seite Wörter oder Phrasen enthält, die sich von der Hauptsprache unterscheiden, verwenden Sie das <a href="/de/docs/Web/HTML/Global_attributes#lang">lang</a>-Attribut auf einem um das betreffende Wort oder Phrase gewickelten Element (z. B. einem {{htmlelement("span")}}, wenn kein semantisches Element verfügbar ist), um eine geeignete Sprache dafür festzulegen.
        </p>
        <p>
          Sie müssen keine andere Sprache für Wörter oder Phrasen festlegen, die unabhängig von der Sprache gleich bleiben (beispielsweise Eigennamen, technische Begriffe, die nicht Teil einer bestimmten Sprache sind).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.3 Ungewöhnliche Wörter (AAA)</td>
      <td>
        Wenn technische Begriffe, Fachjargon oder Redewendungen/Slang verwendet werden, sollten Definitionen für solche Phrasen/Wörter bereitgestellt werden. Ihre Seite sollte ein Glossar bereitstellen, das Definitionen solcher Wörter/Begriffe enthält, auf das Sie dann verlinken können, wenn sie erscheinen, oder zumindest Definitionen im umgebenden Text oder in einer <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#description_lists">Beschreibungsliste</a> am unteren Rand der Seite bereitstellen.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.4 Abkürzungen (AAA)</td>
      <td>
        <p>
          Wo Abkürzungen verwendet werden, sollten Sie eine Erweiterung davon oder eine Definition nach Bedarf bereitstellen.
        </p>
        <p>
          Das {{htmlelement("abbr")}}-Element wird oft als die bevorzugte Methode angesehen, um eine Erweiterung für eine Abkürzung bereitzustellen — es nimmt ein <a href="/de/docs/Web/HTML/Global_attributes#title">title</a>-Attribut, das die Erweiterung enthält, und diese erscheint, wenn das Akronym mit der Maus überfahren wird. Die Inhalte des Titelattributs sind jedoch nicht über die Tastatur zugänglich, noch werden sie zuverlässig von Screenreadern vorgelesen. Eine bessere Möglichkeit, dies zu handhaben, ist es, erneut Links zu Glossarseiten zu bereitgestellen, die die Akronymausweitung und Erklärung enthalten, oder sie zumindest im umgebenden Text im Kontext einzufügen.
        </p>
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#abbreviations"
          >Abkürzungen</a
        >.
      </td>
    </tr>
    <tr>
      <td>3.1.5 Lesestufe (AAA)</td>
      <td>
        <p>
          Wenn Texte bereitgestellt werden, die ein höheres Lesestufeniveau als die untere Sekundarstufe erfordern (typischerweise Kinder im Alter von 11-14 Jahren), stellen Sie erklärendes Begleitmaterial zur Verfügung, um Personen zu helfen, die es nicht lesen können, oder stellen Sie eine alternative Version bereit, die auf niedrigerem Sekundarschulniveau geschrieben ist.
        </p>
        <p>
          Dies bedeutet nicht, dass alle Themen von jedem verstanden werden sollten, aber der Schreibstil sollte für jeden zugänglich sein. Es ist besser, alle Inhalte auf einem niedrigeren Sekundarstufenniveau zu schreiben, selbst technische Dokumentationen wie Programmierhandbücher, es sei denn, es gibt einen guten Grund, dies nicht zu tun (z. B. ein alternativer Stil aus poetischem Effekt) oder sie müssen in einem strengen Stil geschrieben werden (z. B. W3C-Spezifikationen).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.6 Aussprache (AAA)</td>
      <td>
        <p>
          Es sollte ein Mechanismus bereitgestellt werden, um Benutzern Zugang zur Aussprache von Wörtern zu geben, wo sie benötigt wird, um den Inhalt vollständig zu verstehen.
        </p>
        <p>
          Das HTML-{{htmlelement("audio")}}-Element kann verwendet werden, um ein Steuerungselement zu erstellen, das es dem Leser ermöglicht, eine Audiodatei mit der korrekten Aussprache abzuspielen, und es ist auch sinnvoll, eine textliche Aussprachehilfe nach schwierigen Wörtern hinzuzufügen, ähnlich wie in Wörterbucheinträgen.
        </p>
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content"
          >Video- und Audioinhalte</a
        > und
        <a
          href="https://www.oxfordlearnersdictionaries.com/us/about/pronunciation_english.html"
          >Ausspracheführer für englische Wörterbücher</a
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
      <th scope="col">Wie Sie die Kriterien erfüllen</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3.2.1 Bei Fokus (A)</td>
      <td>
        <p>
          Wenn ein Steuerungselement oder ein anderes Seitenelement den Fokus erhält, sollte es den Kontext nicht in einer Weise ändern, die den Benutzer verwirren oder desorientieren könnte.
        </p>
        <p>
          Dies ist eine Frage des vernünftigen Designs — Menschen wollen keine Schnittstellen, die sie überraschen; sie möchten, dass Dinge intuitiv und erwartungsgemäß funktionieren. Zum Beispiel sollte das Fokussieren einer Navigationsmenüoption die angezeigte Seite nicht ändern — es sollte aktiviert werden, bevor sich die Anzeige ändert.
        </p>
      </td>
      <td>
        Das <code>Element</code>-[`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis enthält nützliche Informationen. Siehe auch
        <a
          href="/de/docs/Learn/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Reimplementierung der Tastaturzugänglichkeit</a
        >
        für einige nützliche Umsetzungsideen.
      </td>
    </tr>
    <tr>
      <td>3.2.2 Bei Eingabe (A)</td>
      <td>
        <p>
          Wenn Daten in ein Steuerungselement eingegeben werden oder eine Einstellung geändert wird, sollte der Kontext nicht unerwartet geändert werden. Der Benutzer sollte vor der bevorstehenden Änderung gewarnt/beraten werden, bevor sie eintritt.
        </p>
        <p>
          Auch hier sollte ein sinnvolles Design umgesetzt werden. Wenn beispielsweise das Drücken eines Knopfes dazu führt, dass die Anwendung die aktuelle Ansicht verlässt, sollte der Benutzer aufgefordert werden, diese Aktion zu bestätigen und seine Arbeit gegebenenfalls zu speichern.
        </p>
      </td>
      <td>
        Das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis ist hier nützlich.
      </td>
    </tr>
    <tr>
      <td>3.2.3 Konsistente Navigation (AA)</td>
      <td>
        <p>
          Der Stil und die Positionierung von Navigationsmenüs/Steuerelementen sollten zwischen verschiedenen Seiten oder Ansichten einer Webseite konsistent sein, und die vorhandenen Elemente sollten in derselben Reihenfolge erscheinen, selbst wenn beispielsweise neue Elemente hinzugefügt werden. Wenn der Benutzer eine Änderung initiiert hat, z. B. die Wahl eines anderen Farbschemas oder die Position für die Navigation, sollte seine Auswahl auf allen Seiten respektiert werden.
        </p>
        <p>
          Wiederum vernünftiges Design – machen Sie die Navigationssteuerungen auf allen Seiten oder Ansichten gleich.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn/Accessibility/HTML#page_layouts"
          >Seitenlayouts</a
        >
        für Informationen über modernes Markup für Layouts. Siehe auch
        <a
          href="/de/docs/Learn/CSS/Styling_text/Styling_links#styling_links_as_buttons"
          >Links als Buttons stylen</a
        >
        für ein nützliches Beispiel eines zugänglichen Navigationsmenüs.
      </td>
    </tr>
    <tr>
      <td>3.2.4 Konsistente Identifikation (AA)</td>
      <td>
        <p>
          Steuerelemente oder Komponenten, die dieselbe Funktionalität haben, sollten auf verschiedenen Seiten oder Ansichten auf dieselbe Weise identifiziert werden. Ein Währungsumrechner, der beispielsweise auf jeder Seite einer Weltreise-Website erscheint, sollte semantisch und hinsichtlich der Beschriftungen genau gleich sein.
        </p>
        <p>Wieder sinnvolles Design!</p>
      </td>
      <td>
        "Labels" können sich auf beschreibende Informationen in Textinhalten oder HTML-Formularbeschriftungen beziehen. Siehe
        <a href="/de/docs/Learn/Accessibility/HTML#meaningful_text_labels"
          >Sinnvolle Textbeschriftungen</a
        >
        für mehr Informationen.
      </td>
    </tr>
    <tr>
      <td>3.2.5 Änderung auf Anfrage (AAA)</td>
      <td>
        <p>
          Änderungen im Kontext, die Benutzer möglicherweise verwirren oder desorientieren könnten, sollten nur dann erfolgen, wenn sie vom Benutzer angefordert werden ODER der Benutzer sollte sie ausschalten können.
        </p>
        <p>
          Wenn Sie etwas benötigen, das die aktuelle Ansicht erheblich ändert (z. B. Inhalte oder Steuerelemente), lassen Sie den Benutzer steuern, wann er diese Änderung möchte (z. B. welche Seite angezeigt wird, wann zum nächsten Foto in der Galerie weitergeblättert werden soll...)
        </p>
        <p>
          Wenn Sie etwas wie ein Karussell auf einer Seite haben möchten, stellen Sie eine Option bereit, um dessen automatischen Fortschritt zu stoppen. Besser, solche Funktionen zu vermeiden, wenn möglich.
        </p>
      </td>
      <tr>
      <td> 3.2.6 Konsistente Hilfe (A)</td>
      <td> <p> Webseiten, die Hilfe-Mechanismen enthalten, einschließlich Selbsthilfeoptionen und menschlichen Kontaktinformationen, die auf mehreren Webseiten wiederholt werden, müssen diese Mechanismen in der gleichen Reihenfolge auf allen Seiten platzieren, es sei denn, eine Änderung wird vom Benutzer initiiert.</p>
      <td> <p>Sehen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-help">dokumentation zur konsistenten Hilfe</a> für diese Norm an, um mehr zu erfahren. </p>
      </td>
      </td>
      <tr>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.2 Vorhersehbar: Lassen Sie Webseiten auf vorhersehbare Weise erscheinen und funktionieren](https://www.w3.org/TR/WCAG21/#predictable).

## Richtlinie 3.3 — Eingabeunterstützung: Benutzern helfen, Fehler zu vermeiden und zu korrigieren

Diese Richtlinie konzentriert sich darauf, Benutzern zu helfen, korrekte Informationen einzugeben, wann immer erforderlich, mit minimalen Fehlern.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie Sie die Kriterien erfüllen</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3.3.1 Fehlererkennung (A)</td>
      <td>
        <p>
          Wenn ein Benutzer ein Formular ausfüllt oder zwischen Optionen wählt, sollten alle erkannten Fehler dem Benutzer klar gemeldet werden, zusammen mit dem Formularfeld, auf das sich der Fehler bezieht.
        </p>
        <p>
          Es wird empfohlen, clientseitige Fehlererkennung und -behandlung zu implementieren, entweder über HTML-Formularvalidierungsfunktionen und/oder JavaScript, je nachdem, was für Ihre Situation am besten geeignet ist. Wenn ein Fehler erkannt wird, sollte eine intuitive Fehlermeldung neben dem fehlerhaften Formularfeld angezeigt werden, um dem Benutzer dabei zu helfen, seine Eingaben zu korrigieren. Für Screenreader-Benutzer können Sie aria live regions verwenden, um den Benutzer auf eine Änderung auf der Seite hinzuweisen.
        </p>
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Serverseitige Validierung sollte <em>immer</em> neben clientseitiger Validierung verwendet werden. Die clientseitige Validierung lässt sich zu leicht deaktivieren oder umgehen, sodass sie nicht allein darauf verlassen werden kann.
          </p>
        </div>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn/Forms/Form_validation"
          >Formulardatenvalidierung</a
        >
        für umfassende Validierungsinformationen, und
        <a
          href="/de/docs/Learn/Accessibility/WAI-ARIA_basics#dynamic_content_updates"
          >WAI-ARIA: Dynamische Inhaltsaktualisierungen</a
        >
        für Informationen zu Live-Regionen.
      </td>
    </tr>
    <tr>
      <td>3.3.2 Beschriftungen oder Anweisungen (A)</td>
      <td>
        <p>
          Klare Anweisungen sollten bereitgestellt werden, wenn eine Dateneingabe erforderlich ist. Wenn eine einfache Anweisung oder Aufforderung erforderlich ist, können Sie {{htmlelement("label")}}-Elemente für einzelne Eingaben wie Name oder Alter verwenden, eine Kombination aus {{htmlelement("label")}}s und {{htmlelement("fieldset")}}s/{{htmlelement("legend")}}s für mehrere Eingaben, die zusammen gehören (wie die Elemente eines Geburtsdatums oder einer Postadresse).
        </p>
        <p>
          Wenn komplexere Erklärungen erforderlich sind, können Sie auch erklärende Absätze einfügen oder vielleicht versuchen, Ihre Formulare intuitiver zu gestalten.
        </p>
      </td>
      <td>
        <ul>
          <li>
            <a
              href="/de/docs/Learn/Accessibility/HTML#meaningful_text_labels"
              >Sinnvolle Textbeschriftungen</a
            >
          </li>
          <li>
            <a href="/de/docs/Learn/Forms/How_to_structure_a_web_form"
              >Anleitung zur Strukturierung eines HTML-Formulars</a
            >
          </li>
          <li>
            <a
              href="/de/docs/Web/Accessibility/Understanding_WCAG/Text_labels_and_names"
              >Textbeschriftungen und -namen</a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3.3.3 Fehlervorschläge (AA)</td>
      <td>
        <p>
          Wenn ein Fehler erkannt wird und Korrekturvorschläge bekannt sind, stellen Sie diese dem Benutzer zur Verfügung (z.B. Vorschläge von Alternativen, wenn der Benutzer einen Benutzernamen auswählt, der bereits vergeben ist), es sei denn, dies würde ein Sicherheitsproblem (z.B. bei der Eingabe eines Passworts) oder ein Kontextproblem (z.B. sie versuchen eine Frage in einer Quiz-App zu beantworten) verursachen.
        </p>
        <p>
          In solchen Fällen verwenden Sie wahrscheinlich, wenn dies angemessen ist, eine Kombination aus JavaScript und serverseitiger Funktionalität, um zu überprüfen, ob die Eingabe korrekt ist und wenn nicht, welche sinnvollen Vorschläge dem Benutzer gegeben werden können. Solche Vorschläge sollten nützlich im Kontext angezeigt werden, genauso wie Fehlermeldungen (siehe 3.3.1).
        </p>
      </td>
      <td>Noch keine Tutorialvorschläge.</td>
    </tr>
    <tr>
      <td>3.3.4 Fehlervermeidung (Rechtlich, Finanziell, Daten) (AA)</td>
      <td>
        <p>
          Bei Formularen, die die Eingabe sensibler Daten umfassen (wie z.B. rechtliche Vereinbarungen, E-Commerce-Transaktionen oder persönliche Daten), sollte mindestens einer der folgenden Punkte zutreffen:
        </p>
        <ul>
          <li>Eingaben sind rückgängig machbar.</li>
          <li>
            Daten werden auf Fehler überprüft, und dem Benutzer wird die Möglichkeit gegeben, sie zu korrigieren.
          </li>
          <li>
            Ein Mechanismus ist verfügbar, um Informationen vor der endgültigen Übermittlung zu bestätigen und zu korrigieren.
          </li>
        </ul>
      </td>
      <td>
        <p>
          <strong>Rückgängig machbar</strong> — für jede Ansicht, in der Daten eingegeben werden können, stellen Sie eine gleichwertige Ansicht bereit, mit der Sie einen Eintrag bearbeiten oder sogar löschen können, wie angemessen (siehe z.B. <a href="/de/docs/Learn/Server-side/Django">Django Web Framework</a>).
        </p>
        <p>
          <strong>Datenüberprüfung</strong> — wie in 3.3.1 behandelt, sollte eine Kombination aus clientseitiger und serverseitiger Validierung verwendet werden, um Fehler zu erkennen und dem Benutzer hilfreiche Nachrichten anzuzeigen, um ihn zu ermöglichen, seine Eingaben zu korrigieren.
        </p>
        <p>
          <strong>Bestätigung und Korrektur</strong> — wo angebracht, sollte der Benutzer nach dem Ausfüllen einer Reihe von Formularfeldern, um eine Aufgabe zu erfüllen (z.B. ein Produkt zu kaufen), eine Bestätigungsseite angezeigt bekommen, auf der er seine Eingaben überprüfen und alles korrigieren kann, was nicht richtig wirkt. Dieses Muster wird häufig auf E-Commerce-Seiten wie Amazon verwendet.
        </p>
      </td>
    </tr>
    <tr>
      <td>3.3.5 Kontextbezogene Hilfe ist verfügbar (AAA)</td>
      <td>
        Stellen Sie Anweisungen und andere geeignete Hinweise im Kontext zur Verfügung, um das Ausfüllen und Übermitteln des Formulars zu erleichtern.
      </td>
      <td>
        Dies baut wirklich auf 3.3.1 und anderen ähnlichen Kriterien auf, erfordert jedoch umfassendere kontextbezogene Hilfsinformationen und -dienste, z. B. Bereitstellung eines dedizierten Links zu einer Hilfeseite oder einem Hilfsdienst auf jeder Seite, Bereitstellung von Beispielen, die zeigen, wie eine erfolgreiche Vervollständigung aussehen sollte.
      </td>
    </tr>
    <tr>
      <td>3.3.6 Fehlervermeidung (Alle) (AAA)</td>
      <td>
        Dieses Prinzip baut auf 3.3.4 auf und erweitert seine Anforderungen auf alle Benutzereingabesituationen, nicht nur auf solche, die sensible Daten betreffen.
      </td>
      <td>Siehe erneut 3.3.4.</td>
    </tr>
    <tr>
      <td> 3.3.7 Redundante Eingabe (A) </td>
      <td>
      Informationen, die erforderlich sind und die zuvor im selben Prozess oder Nutzungsfluss vom Benutzer eingegeben oder bereitgestellt wurden, werden entweder automatisch ausgefüllt oder dem Benutzer zur Auswahl aus einer Liste von Optionen bereitgestellt, es sei denn, die erneute Eingabe der Informationen ist wesentlich oder aus Sicherheitsgründen erforderlich, oder wenn die Informationen nicht mehr gültig sind.
      </td>
      <td>Sehen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry">Redundante Eingabe verstehen</a> für weitere Informationen an.</td>
    </tr>
    <tr>
      <td> 3.3.8 Zugängliche Authentifizierung (Minimum) (AA)
      </td>
      <td>
Kognitive Funktionstests, wie das Erinnern an ein Passwort, werden für keinen Schritt in einem Authentifizierungsprozess benötigt, es sei denn, es wird eine Alternative bereitgestellt, wie z.B. eine Erkennung von Objekten oder persönlichen Inhalten (z.B. Bilder, Videos und Audio), oder ein Mechanismus, der hilft (z.B. Kopieren und Einfügen und automatisches Speichern von Passwörtern).
      </td>
      <td> Sehen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum">Dokumentation zur zugänglichen Authentifizierung</a> für diesen Standard an, um mehr zu erfahren. </td>
    </tr>
    <tr>
      <td> 3.3.9 Zugängliche Authentifizierung (Erweitert) (AAA) </td>
      <td>
Ein kognitiver Funktionstest, wie das Erinnern an ein Passwort, darf für keinen Schritt eines Authentifizierungsprozesses erforderlich sein, ohne dass eine Alternative bereitgestellt wird, die nicht auf einem kognitiven Funktionstest beruht, oder ein Mechanismus bereitgestellt wird, um den Benutzer bei der Durchführung des kognitiven Funktionstests zu unterstützen. Authentifizierungstests, die von Benutzern verlangen, Objekte zu erkennen oder nicht-textuelle Inhalte zu identifizieren, die der Benutzer der Website bereitgestellt hat, sind erlaubt.
      </td>
      <td> Sehen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced">erweiterte Dokumentation zur zugänglichen Authentifizierung (AAA)</a> an, um mehr zu erfahren.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.3 Eingabeunterstützung: Benutzern helfen, Fehler zu vermeiden und zu korrigieren](https://www.w3.org/TR/WCAG21/#input-assistance).

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG)

  1. [Perceivable](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
  2. [Operable](/de/docs/Web/Accessibility/Understanding_WCAG/Operable)
  3. Understandable
  4. [Robust](/de/docs/Web/Accessibility/Understanding_WCAG/Robust)

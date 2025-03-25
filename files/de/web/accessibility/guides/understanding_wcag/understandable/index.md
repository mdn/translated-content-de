---
title: Verständlich
slug: Web/Accessibility/Guides/Understanding_WCAG/Understandable
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so verfassen können, dass sie den Erfolgskriterien entsprechen, die im **Verständlich**-Prinzip der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 beschrieben sind. Verständlich besagt, dass Informationen und die Bedienung der Benutzeroberfläche nachvollziehbar sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Verständlich sowie die zugehörigen Richtlinien und Erfolgskriterien zu lesen, sehen Sie sich [Prinzip 3: Verständlich — Informationen und die Bedienung der Benutzeroberfläche müssen nachvollziehbar sein](https://www.w3.org/TR/WCAG21/#understandable) an.

## Richtlinie 3.1 — Lesbar: Machen Sie Textinhalte lesbar und verständlich

Diese Richtlinie konzentriert sich darauf, Texte so verständlich wie möglich zu machen.

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
      <td>3.1.1 Sprache der Seite (A)</td>
      <td>
        Die Standardsprache jeder Webseite sollte über den Code erkennbar sein. Dies ist wichtig, um sicherzustellen, dass der Leser auf einer Seite landet, die in einer für ihn geeigneten Sprache verfasst ist. Der einfachste Weg, dies zu erreichen, ist das Setzen des <a href="/de/docs/Web/HTML/Global_attributes/lang">lang</a> Attributs auf dem {{htmlelement("html")}} Element der Seite, wobei es den Sprachcode enthält, der die Sprache der Seite am besten repräsentiert.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#setting_the_primary_language_of_the_document"
          >Festlegen der Primärsprache des Dokuments</a
        >.
      </td>
    </tr>
    <tr>
      <td>3.1.2 Sprache von Teilen (AA)</td>
      <td>
        <p>
          Wenn der Inhalt einer Seite Wörter oder Ausdrücke in einer anderen Sprache als der Hauptsprache enthält, verwenden Sie das
          <a href="/de/docs/Web/HTML/Global_attributes/lang">lang</a> Attribut auf einem Element um den betreffenden Begriff (z.B. ein {{htmlelement("span")}} für den Fall, dass kein semantisches Element verfügbar ist), um eine angemessene Sprache dafür festzulegen.
        </p>
        <p>
          Es ist nicht erforderlich, eine andere Sprache für Wörter oder Ausdrücke festzulegen, die unabhängig von der Sprache gleich sind (z.B. Eigennamen, technische Begriffe, die nicht Teil einer bestimmten Sprache sind).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.3 Ungewöhnliche Wörter (AAA)</td>
      <td>
        Wo technische Begriffe, Jargon oder Idiome/Slang verwendet werden, sollten Definitionen für solche Ausdrücke/Wörter bereitgestellt werden. Ihre Seite sollte ein Glossar mit Definitionen solcher Wörter/Begriffe enthalten, auf das Sie verlinken können, wenn sie auftauchen, oder zumindest Definitionen irgendwo im umgebenden Text bereitstellen, oder in einer
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/Lists#description_lists"
          >Beschreibungsliste</a
        > am Ende der Seite.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.4 Abkürzungen (AAA)</td>
      <td>
        <p>
          Wo Abkürzungen verwendet werden, sollten Sie eine Erklärung dieser Abkürzungen oder eine erforderliche Definition bereitstellen.
        </p>
        <p>
          Das {{htmlelement("abbr")}} Element wird oft als bevorzugte Möglichkeit angesehen, eine Erweiterung für eine Abkürzung bereitzustellen — es nimmt ein <a href="/de/docs/Web/HTML/Global_attributes/title">title</a> Attribut auf, das die Erweiterung enthält, die angezeigt wird, wenn mit der Maus über die Abkürzung gefahren wird. Die Inhalte des title Attributs sind jedoch weder über die Tastatur zugänglich noch werden sie zuverlässig von Screenreadern vorgelesen. Es ist besser, Links zu Glossarseiten bereitzustellen, die die Erweiterung der Abkürzung und eine Erklärung enthalten, oder sie zumindest im umgebenden Text im Kontext zu inkludieren.
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
      <td>3.1.5 Lesestufe (AAA)</td>
      <td>
        <p>
          Wenn Texte bereitgestellt werden, die eine höhere Lesestufe als die niedrige Sekundarstufe (typischerweise Kinder im Alter von 11-14 Jahren) erfordern, stellen Sie zusätzliches Erklärungsmaterial zur Verfügung, um Personen zu helfen, die es nicht lesen können, oder bieten Sie eine alternative Version an, die auf niedrigem Sekundarstufenniveau geschrieben ist.
        </p>
        <p>
          Das bedeutet nicht, dass alle Themen von allen verstanden werden sollten, aber der Schreibstil sollte für alle zugänglich sein. Es ist besser, alle Inhalte auf niedrigem Sekundarstufenniveau zu verfassen, selbst technische Dokumentationen wie Programmier-Tutorials, es sei denn, es gibt einen guten Grund, dies nicht zu tun (z.B. ein alternativer Stil für einen poetischen Effekt), oder sie müssen in einem strengen Stil geschrieben werden (z.B. W3C-Spezifikationen).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.6 Aussprache (AAA)</td>
      <td>
        <p>
          Es sollte ein Mechanismus bereitgestellt werden, um den Benutzern Zugang zur Aussprache von Wörtern zu geben, wo sie erforderlich ist, um den Inhalt vollständig zu verstehen.
        </p>
        <p>
          Das HTML {{htmlelement("audio")}} Element kann verwendet werden, um eine Steuerung zu erstellen, die dem Leser erlaubt, eine Audiodatei mit der korrekten Aussprache abzuspielen, und es macht auch Sinn, eine textliche Ausspracheanleitung nach schwierigen Wörtern einzufügen, ähnlich wie man es in Wörterbucheinträgen findet.
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
          >Ausspracheanleitung für englische Wörterbücher</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.1 Lesbar: Machen Sie Textinhalte lesbar und verständlich](https://www.w3.org/TR/WCAG21/#readable).

## Richtlinie 3.2 — Vorhersehbar: Lassen Sie Webseiten auf vorhersehbare Weise erscheinen und funktionieren

Diese Richtlinie konzentriert sich darauf, Benutzeroberflächen intuitiv und verständlich zu machen.

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
      <td>3.2.1 Bei Fokus (A)</td>
      <td>
        <p>
          Wenn eine Steuerung oder ein anderes Seitenelement den Fokus erhält, sollte sich der Kontext nicht in einer Weise ändern, die den Benutzer verwirren oder desorientieren könnte.
        </p>
        <p>
          Dies ist eine Frage des sinnvollen Designs — Menschen möchten nicht, dass sie von Schnittstellen überrascht werden; sie möchten, dass Dinge intuitiv sind und sich erwartungsgemäß verhalten. Beispielsweise sollte das Fokussieren einer Navigationsmenüoption nicht die angezeigte Seite ändern — sie sollte aktiviert werden, bevor sich die Anzeige ändert.
        </p>
      </td>
      <td>
        <code>Element</code>'s [`focus`](/de/docs/Web/API/Element/focus_event) Ereignis enthält einige nützliche Informationen. Siehe auch
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Tastaturzugänglichkeit wieder einbauen</a
        >
        für einige nützliche Implementierungsideen.
      </td>
    </tr>
    <tr>
      <td>3.2.2 Bei Eingabe (A)</td>
      <td>
        <p>
          Wenn Daten in eine Steuerung eingegeben werden oder eine Einstellung geändert wird, sollte sich der Kontext nicht unerwartet ändern. Der Benutzer sollte über die bevorstehende Änderung gewarnt/benachrichtigt werden, bevor sie eintritt.
        </p>
        <p>
          Auch hier sollte ein sinnvolles Design umgesetzt werden. Beispielsweise sollte der Benutzer gefragt werden, bevor er eine Schaltfläche betätigt, die die Anwendung dazu veranlasst, die aktuelle Ansicht zu verlassen, ob er dies wirklich möchte. Außerdem sollte er seine Arbeit speichern, falls erforderlich.
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
          Der Stil und die Positionierung des Navigationsmenüs/der -steuerung sollte zwischen den verschiedenen Seiten oder Ansichten einer Webseite konsistent sein, und die bestehenden Elemente sollten in der gleichen Reihenfolge erscheinen, auch wenn beispielsweise neue Elemente hinzugefügt werden. Wenn der Benutzer eine Änderung vorgenommen hat, z.B. eine andere Farbschema oder Position für die Navigation ausgewählt hat, sollte seine Wahl auf allen Seiten respektiert werden.
        </p>
        <p>
          Auch hier sinnvolles Design — gestalten Sie die Navigationssteuerungen auf allen Seiten oder Ansichten gleich.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#page_layouts"
          >Seitenlayouts</a
        >
        für Informationen über modernes Markup für Layouts. Siehe auch
        <a
          href="/de/docs/Learn_web_development/Core/Text_styling/Styling_links#styling_links_as_buttons"
          >Styling von Links als Schaltflächen</a
        >
        für ein nützliches barrierefreies Navigationsmenü-Beispiel.
      </td>
    </tr>
    <tr>
      <td>3.2.4 Konsistente Identifikation (AA)</td>
      <td>
        <p>
          Steuerungen oder Komponenten, die die gleiche Funktionalität haben, sollten auf allen verschiedenen Seiten oder Ansichten auf die gleiche Weise identifiziert werden. Beispielsweise sollte ein Währungsrechner, der auf jeder Seite einer Weltreiseseite erscheint, semantisch und in Bezug auf Beschriftungen exakt gleich sein.
        </p>
        <p>Auch hier, sinnvolles Design!</p>
      </td>
      <td>
        "Labels" können sich auf beschreibende Informationen in Textinhalten oder HTML-Formularbeschriftungen beziehen. Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
          >Bedeutungsvolle Textlabels</a
        >
        für weitere Informationen.
      </td>
    </tr>
    <tr>
      <td>3.2.5 Änderung auf Anfrage (AAA)</td>
      <td>
        <p>
          Kontextänderungen, die Benutzer möglicherweise verwirren oder desorientieren könnten, sollten nur dann auftreten, wenn sie von dem Benutzer angefordert werden, ODER der Benutzer sollte in der Lage sein, sie zu deaktivieren.
        </p>
        <p>
          Wenn etwas erheblich die aktuelle Ansicht ändern muss (z.B. Inhalt oder Bedienelemente), lassen Sie den Benutzer steuern, wann die Änderung auftreten soll (z.B. welche Seite angezeigt werden soll, wann zum nächsten Foto in der Galerie weitergeschaltet werden soll...).
        </p>
        <p>
          Wenn Sie etwas wie ein Karussell auf einer Seite benötigen, bieten Sie eine Option, um das automatische Weiterblättern zu stoppen. Besser ist es, auf solche Funktionen zu verzichten, wenn möglich.
        </p>
      </td>
 </tr>
      <tr>
      <td> 3.2.6 Konsistente Hilfe (A)</td>
      <td> <p> Webseiten, die Hilfemechanismen enthalten, einschließlich Selbsthilfeoptionen und menschlichen Kontaktdaten, die auf mehreren Webseiten wiederholt werden, müssen diese Mechanismen in derselben Reihenfolge auf allen Seiten platzieren, es sei denn, eine Änderung wird vom Benutzer initiiert.</p>
      <td> <p> Sehen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-help">Dokumentation zur konsistenten Hilfe</a> für diesen Standard an, um mehr zu erfahren. </p>
      </td>
      </td>
      <tr>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.2 Vorhersehbar: Lassen Sie Webseiten auf vorhersehbare Weise erscheinen und funktionieren](https://www.w3.org/TR/WCAG21/#predictable).

## Richtlinie 3.3 — Eingabeunterstützung: Helfen Sie Benutzern, Fehler zu vermeiden und zu korrigieren

Diese Richtlinie konzentriert sich darauf, Benutzern zu helfen, korrekte Informationen einzugeben, wenn dies erforderlich ist, mit einem Minimum an Fehlern.

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
      <td>3.3.1 Fehlererkennung (A)</td>
      <td>
        <p>
          Wenn ein Benutzer ein Formular ausfüllt oder zwischen Optionen wählt, sollte jeder erkannte Fehler dem Benutzer klar mitgeteilt werden, zusammen mit der Formularsteuerung, auf die sich der Fehler bezieht.
        </p>
        <p>
          Es ist ratsam, eine clientseitige Fehlererkennung und -behandlung zu implementieren, über HTML-Formularvalidierungsfunktionen und/oder JavaScript, je nachdem, was für Ihre Situation am besten geeignet ist. Wenn ein Fehler erkannt wird, sollte eine intuitive Fehlermeldung neben der Formulareingabe angezeigt werden, das fehlerhaft ist, um dem Benutzer zu helfen, seine Eingaben zu korrigieren. Für Screenreader-Benutzer können Sie aria Live-Regionen verwenden, um den Benutzer über eine Änderung auf der Seite zu informieren.
        </p>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Serverside-Validierung sollte <em>immer</em> zusammen mit Clientside-Validierung verwendet werden. Clientside-Validierung lässt sich zu einfach deaktivieren oder umgehen, daher kann man sich nicht allein darauf verlassen.
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
      <td>3.3.2 Bezeichnungen oder Anweisungen (A)</td>
      <td>
        <p>
          Klare Anweisungen sollten bereitgestellt werden, wenn die Eingabe von Daten erforderlich ist. Wenn eine kurze Anweisung oder Eingabeaufforderung erforderlich ist, können Sie {{htmlelement("label")}} Elemente für Einzelangaben wie Namen oder Alter verwenden, eine Kombination aus {{htmlelement("label")}}s und {{htmlelement("fieldset")}}s/{{htmlelement("legend")}}s für mehrere zusammengehörende Eingaben (wie die Elemente eines Geburtsdatums oder einer Postadresse).
        </p>
        <p>
          Wenn eine komplexere Erklärung erforderlich ist, können Sie immer auch erläuternde Absätze einfügen, oder möglicherweise müssen Sie versuchen, Ihre Formulare intuitiver zu gestalten.
        </p>
      </td>
      <td>
        <ul>
          <li>
            <a
              href="/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
              >Bedeutungsvolle Textlabels</a
            >
          </li>
          <li>
            <a href="/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form"
              >So strukturieren Sie ein HTML-Formular</a
            >
          </li>
          <li>
            <a
              href="/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Text_labels_and_names"
              >Textlabels und Namen</a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3.3.3 Fehlerhinweise (AA)</td>
      <td>
        <p>
          Wenn ein Fehler erkannt wird und Korrekturvorschläge bekannt sind, sollten diese dem Benutzer bereitgestellt werden (z.B. Alternativen vorschlagen, wenn der Benutzer einen Benutzernamen auswählt und dieser bereits vergeben ist), es sei denn, dies würde ein Sicherheitsproblem (z.B. bei der Eingabe eines Passworts) oder ein Kontextproblem (z.B. sie versuchen, eine Frage in einer Quiz-App zu beantworten) verursachen.
        </p>
        <p>
          In solchen Fällen, wenn dies angemessen ist, verwenden Sie wahrscheinlich eine Kombination aus JavaScript und serverside-Funktionalität, um zu überprüfen, ob die Eingabe korrekt ist und, falls nicht, welche brauchbaren Vorschläge dem Benutzer gemacht werden können. Solche Vorschläge sollten nützlich im Kontext dargestellt werden, genau wie Fehlermeldungen (siehe 3.3.1).
        </p>
      </td>
      <td>Noch keine Tutorial-Vorschläge.</td>
    </tr>
    <tr>
      <td>3.3.4 Fehlervermeidung (Rechtlich, Finanziell, Daten) (AA)</td>
      <td>
        <p>
          Im Falle von Formularen, die die Eingabe sensibler Daten (z.B. rechtliche Vereinbarungen, E-Commerce-Transaktionen oder persönliche Daten) beinhalten, sollte mindestens eine der folgenden Bedingungen zutreffen:
        </p>
        <ul>
          <li>Eingaben sind umkehrbar.</li>
          <li>
            Daten werden auf Fehler überprüft, und dem Benutzer wird die Möglichkeit gegeben, diese zu korrigieren.
          </li>
          <li>
            Ein Mechanismus steht zur Verfügung, um Informationen vor der endgültigen Einreichung zu bestätigen und zu korrigieren.
          </li>
        </ul>
      </td>
      <td>
        <p>
          <strong>Umkehrbar</strong> — für jede Ansicht, in der Daten eingegeben werden können, stellen Sie eine gleichwertige Ansicht bereit, die Sie bearbeiten oder sogar einen Eintrag löschen erlaubt, soweit dies angemessen ist (siehe z.B.
          <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django">Django-Web-Framework</a
          >).
        </p>
        <p>
          <strong>Überprüfung von Daten</strong> — wie in 3.3.1 behandelt, sollte eine Kombination aus clientseitiger und serverseitiger Validierung verwendet werden, um Fehler zu erkennen und hilfreiche Nachrichten anzuzeigen, um dem Benutzer zu ermöglichen, seine Eingaben zu korrigieren.
        </p>
        <p>
          <strong>Bestätigen und korrigieren</strong> — wo dies angemessen ist, sollte der Benutzer nach dem Ausfüllen einer Reihe von Formularfeldern, um eine Aufgabe auszuführen (wie den Kauf eines Produkts), einen Bestätigungsbildschirm erhalten, auf dem er seine Eingaben überprüfen und alles korrigieren kann, was nicht richtig aussieht. Dieses Muster wird häufig auf E-Commerce-Websites wie Amazon verwendet.
        </p>
      </td>
    </tr>
    <tr>
      <td>3.3.5 Kontextbezogene Hilfe ist verfügbar (AAA)</td>
      <td>
        Stellen Sie Anweisungen und andere geeignete Hinweise im Kontext bereit, um das Ausfüllen und Einreichen von Formularen zu unterstützen.
      </td>
      <td>
        Dies baut wirklich nur auf 3.3.1 und anderen ähnlichen Kriterien auf, erfordert aber umfassendere kontextbezogene Hilfsinformationen und -dienste, z.B. die Bereitstellung eines dedizierten Links zu einer Hilfeseite oder einem Dienst auf jeder Seite, um zu zeigen, wie eine erfolgreiche Ausführung aussehen sollte.
      </td>
    </tr>
    <tr>
      <td>3.3.6 Fehlervermeidung (Alle) (AAA)</td>
      <td>
        Dieses Prinzip baut auf 3.3.4 auf und erweitert seine Anforderungen auf alle Benutzereingabesituationen, nicht nur auf solche mit sensiblen Daten.
      </td>
      <td>Siehe erneut 3.3.4.</td>
      </tr>
      <tr>
      <td> 3.3.7 Überflüssige Eingabe (A) </td>
      <td>
      Informationen, die erforderlich sind und zuvor vom Benutzer im gleichen Prozess oder Ablauf eingegeben oder bereitgestellt wurden, werden entweder automatisch ausgefüllt oder dem Benutzer aus einer Liste von Optionen zur Auswahl angeboten, es sei denn, die erneute Eingabe der Informationen ist erforderlich oder aus Sicherheitsgründen notwendig, oder die Informationen sind nicht mehr gültig.
      </td>
      <td>Sehen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry">Verständnis für überflüssige Eingabe</a> an, um mehr zu erfahren.</td>
      </tr>
      <tr>
      <td> 3.3.8 Zugängliches Authentifizieren (Minimum) (AA)
      </td>
      <td>
Tests der kognitiven Funktion, wie das Erinnern eines Passwortes, sind für keinen Schritt in einem Authentifizierungsprozess erforderlich, es sei denn, es wird eine Alternative bereitgestellt, wie zum Beispiel das Erkennen eines Objektes oder persönlichen Inhalts (z.B. Bilder, Videos und Audio), oder ein Mechanismus zur Unterstützung (z.B. Kopieren und Einfügen und automatisches Speichern von Passwörtern).
      </td>
      <td> Sehen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum"> Dokumentation zur zugänglichen Authentifizierung</a> für diesen Standard an, um mehr zu erfahren. </td>
    </tr>
    <tr>
 <td> 3.3.9 Zugängliche Authentifizierung (Erweitert) (AAA) </td>
    <td>
Ein Test der kognitiven Funktion, wie das Erinnern eines Passwortes, darf für keinen Schritt in einem Authentifizierungsprozess erforderlich sein, ohne dass eine Alternative bereitgestellt wird, die nicht auf einem Test der kognitiven Funktion beruht oder einen Mechanismus zur Unterstützung des Benutzers bei der Durchführung des Tests der kognitiven Funktion bietet. Authentifizierungsprüfungen, die vom Benutzer das Erkennen von Objekten oder die Identifizierung von nicht-textlicher Inhalten erfordern, die der Benutzer der Webseite zur Verfügung gestellt hat, sind zulässig.
    </td>
<td> Sehen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced">erweiterte Dokumentation zur zugänglichen Authentifizierung (AAA)</a> an, um mehr zu erfahren.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.3 Eingabeunterstützung: Helfen Sie Benutzern, Fehler zu vermeiden und zu korrigieren](https://www.w3.org/TR/WCAG21/#input-assistance).

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  3. Verständlich
  4. [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

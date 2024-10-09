---
title: Understandable
slug: Web/Accessibility/Understanding_WCAG/Understandable
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{AccessibilitySidebar}}

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so verfassen, dass sie den Erfolgskriterien des **Understandable**-Prinzips der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 entsprechen. Understandable bedeutet, dass Informationen und die Bedienung von Benutzeroberflächen verständlich sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Understandable sowie dessen Richtlinien und Erfolgskriterien zu lesen, sehen Sie [Prinzip 3: Understandable — Informationen und die Bedienung von Benutzeroberflächen müssen verständlich sein](https://www.w3.org/TR/WCAG21/#understandable).

## Leitfaden 3.1 — Lesbar: Machen Sie Textinhalte lesbar und verständlich

Dieser Leitfaden konzentriert sich darauf, Textinhalte so verständlich wie möglich zu machen.

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
        Die Standardmenschensprache jeder Webseite sollte über Code erkennbar sein. Dies ist unerlässlich, um sicherzustellen, dass der Leser auf einer Seite angekommen ist, die in einer für ihn geeigneten Sprache verfasst ist. Der einfachste Weg, dies zu erreichen, ist die Festlegung des <a href="/de/docs/Web/HTML/Global_attributes/lang">lang</a>-Attributs im {{htmlelement("html")}}-Element der Seite, wobei es einen Wert erhält, der dem Sprachcode entspricht, der die Sprache repräsentiert, in der die Seite geschrieben ist.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#setting_the_primary_language_of_the_document"
          >Festlegung der Hauptsprache des Dokuments</a
        >.
      </td>
    </tr>
    <tr>
      <td>3.1.2 Sprache der Teile (AA)</td>
      <td>
        <p>
          In Fällen, in denen der Inhalt einer Seite Wörter oder Phrasen enthält, die sich von der Hauptsprache unterscheiden, verwenden Sie das <a href="/de/docs/Web/HTML/Global_attributes/lang">lang</a>-Attribut auf einem Element, das um den betreffenden Begriff gewickelt ist (z.B. ein {{htmlelement("span")}}, wenn kein semantisches Element verfügbar ist), um eine geeignete Sprache dafür festzulegen.
        </p>
        <p>
          Sie müssen keine verschiedene Sprache für Wörter oder Phrasen festlegen, die unabhängig von der Sprache gleich sind (z.B. Eigennamen, technische Begriffe, die nicht Teil einer bestimmten Sprache sind).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.3 Ungewöhnliche Wörter (AAA)</td>
      <td>
        Wo technische Begriffe, Jargon oder Redewendungen/Slang verwendet werden, sollten Definitionen für solche Phrasen/Wörter bereitgestellt werden. Ihre Website sollte ein Glossar enthalten, das Definitionen solcher Wörter/Begriffe enthält, auf die Sie dann verlinken können, wenn sie auftreten, oder mindestens Definitionen irgendwo im umgebenden Text bereitstellen oder in einer <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#description_lists">Beschreibungs-Liste</a> am Ende der Seite.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.4 Abkürzungen (AAA)</td>
      <td>
        <p>
          Wo Abkürzungen verwendet werden, sollten Sie eine Erweiterung oder eine notwendige Definition bereitstellen.
        </p>
        <p>
          Das {{htmlelement("abbr")}}-Element wird oft als bevorzugte Methode angesehen, um eine Erweiterung für eine Abkürzung zu liefern — es nimmt ein <a href="/de/docs/Web/HTML/Global_attributes/title">title</a>-Attribut, das die Erweiterung enthält, und diese erscheint, wenn das Akronym mit der Maus überfahren wird. Der Titelinhalt ist jedoch nicht über die Tastatur zugänglich, und Bildschirmleser lesen ihn nicht zuverlässig vor. Eine bessere Möglichkeit besteht darin, erneut Links zu Glossarseiten zu bieten, die die Akronymerweiterung und -erklärung enthalten, oder sie mindestens im umgebenden Text im Kontext einschließen.
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
          Wenn Text bereitgestellt wird, der eine höhere Lesestufe als die Unterrichtsstufe der Unterstufe (typischerweise Kinder im Alter von 11-14 Jahren) erfordert, stellen Sie zusätzliches erklärendes Material bereit, um Personen zu helfen, die es nicht lesen können, oder bieten Sie eine alternative Version an, die auf einer Unterrichtsstufe der Unterstufe geschrieben ist.
        </p>
        <p>
          Das bedeutet nicht, dass alle Themen von jedem verstanden werden sollten, aber dass der Schreibstil für alle zugänglich sein sollte. Es ist besser, alle Inhalte auf einer Unterrichtsstufe der Unterstufe zu verfassen, selbst technische Dokumentation wie Programmieranleitungen, es sei denn, es gibt einen guten Grund dagegen (z.B. ein alternativer Stil für einen poetischen Effekt), oder sie müssen in einem strengen Stil geschrieben werden (z.B. W3C-Spezifikationen).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.6 Aussprache (AAA)</td>
      <td>
        <p>
          Ein Mechanismus sollte bereitgestellt werden, um Benutzern Zugang zur Aussprache von Wörtern zu geben, wo sie benötigt wird, um den Inhalt vollständig zu verstehen.
        </p>
        <p>
          Das HTML-{{htmlelement("audio")}}-Element kann verwendet werden, um ein Steuerelement zu erstellen, das dem Leser erlaubt, eine Audiodatei mit der korrekten Aussprache abzuspielen, und es macht auch Sinn, einen textuellen Ausspracheleitfaden nach schwierigen Wörtern einzufügen, so wie man es in Wörterbucheinträgen findet.
        </p>
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content"
          >Video- und Audioinhalte</a
        >, und
        <a
          href="https://www.oxfordlearnersdictionaries.com/us/about/pronunciation_english.html"
          >Ausspracheleitfaden für englische Wörterbücher</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Leitfaden 3.1 Lesbar: Machen Sie Textinhalte lesbar und verständlich](https://www.w3.org/TR/WCAG21/#readable).

## Leitfaden 3.2 — Vorhersehbar: Lassen Sie Webseiten auf vorhersehbare Weise erscheinen und funktionieren

Dieser Leitfaden konzentriert sich darauf, Benutzeroberflächen intuitiv und verständlich zu gestalten.

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
      <td>3.2.1 Beim Fokussieren (A)</td>
      <td>
        <p>
          Wenn ein Steuerelement oder ein anderes Seitenelement den Fokus erhält, sollte es den Kontext nicht in einer Weise ändern, die den Benutzer verwirren oder desorientieren könnte.
        </p>
        <p>
          Dies ist eine Frage des vernünftigen Designs — Menschen möchten nicht, dass Schnittstellen sie überraschen; sie möchten, dass Dinge intuitiv sind und sich wie erwartet verhalten. Beispielsweise sollte das Fokussieren einer Navigationsmenüoption nicht die angezeigte Seite ändern — die Option sollte aktiviert werden, bevor sich die Anzeige ändert.
        </p>
      </td>
      <td>
        Das ‘focus’-Ereignis von <code>Element</code> enthält einige nützliche Informationen. Siehe auch
        <a
          href="/de/docs/Learn/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Tastaturzugänglichkeit wieder herstellen</a
        >
        für einige nützliche Implementierungsideen.
      </td>
    </tr>
    <tr>
      <td>3.2.2 Bei Eingabe (A)</td>
      <td>
        <p>
          Wenn Daten in ein Steuerelement eingegeben oder eine Einstellung geändert werden, sollte der Kontext nicht unerwartet geändert werden. Der Benutzer sollte auf die bevorstehende Änderung gewarnt oder hingewiesen werden, bevor sie erfolgt.
        </p>
        <p>
          Auch hier sollte ein vernünftiges Design implementiert werden. Beispielsweise sollte, wenn das Drücken einer Taste dazu führt, dass die Anwendung die aktuelle Ansicht verlässt, der Benutzer gefragt werden, diese Aktion zu bestätigen, seine Arbeit zu speichern, wenn dies angemessen ist, usw.
        </p>
      </td>
      <td>
        Das ‘input’-Ereignis ist hier nützlich.
      </td>
    </tr>
    <tr>
      <td>3.2.3 Konsistente Navigation (AA)</td>
      <td>
        <p>
          Der Stil und die Platzierung des Navigationsmenüs/-steuerung sollte zwischen verschiedenen Seiten oder Ansichten einer Webseite konsistent sein, und die vorhandenen Elemente sollten in derselben Reihenfolge erscheinen, auch wenn beispielsweise neue Elemente hinzugefügt werden. Wenn der Benutzer eine Änderung initiiert hat, z.B. eine andere Farbschema oder Position für die Navigation zu wählen, sollte seine Wahl auf allen Seiten berücksichtigt werden.
        </p>
        <p>
          Wiederum vernünftiges Design — machen Sie die Navigationselemente auf allen Seiten oder Ansichten gleich.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn/Accessibility/HTML#page_layouts"
          >Seitenlayouts</a
        >
        für Information über modernes Markup für Layouts. Siehe auch
        <a
          href="/de/docs/Learn/CSS/Styling_text/Styling_links#styling_links_as_buttons"
          >Links als Schaltflächen stylen</a
        >
        für ein nützliches Beispiel für ein zugängliches Navigationsmenü.
      </td>
    </tr>
    <tr>
      <td>3.2.4 Konsistente Identifikation (AA)</td>
      <td>
        <p>
          Steuerelemente oder Komponenten, die dieselbe Funktionalität haben, sollten in derselben Weise auf verschiedenen Seiten oder Ansichten identifiziert werden. Ein Währungsumrechner, der auf jeder Seite einer Weltreise-Website erscheint, sollte beispielsweise genau dasselbe sein, sowohl semantisch als auch in Bezug auf Bezeichnungen.
        </p>
        <p>Wieder vernünftiges Design!</p>
      </td>
      <td>
        „Label“ kann sich auf beschreibende Informationen in Textinhalten oder HTML-Formularlabels beziehen. Siehe
        <a href="/de/docs/Learn/Accessibility/HTML#meaningful_text_labels"
          >Bedeutungsvolle Textlabels</a
        >
        für mehr Informationen.
      </td>
    </tr>
    <tr>
      <td>3.2.5 Änderung auf Anfrage (AAA)</td>
      <td>
        <p>
          Änderungen im Kontext, die Benutzer möglicherweise verwirren oder desorientieren könnten, sollten nur auftreten, wenn sie vom Benutzer angefordert werden, ODER der Benutzer sollte in der Lage sein, sie auszuschalten.
        </p>
        <p>
          Wenn Sie etwas haben, das die aktuelle Ansicht erheblich verändert (z.B. Inhalt oder Steuerelemente), lassen Sie den Benutzer steuern, wann diese Änderung erfolgen soll (z.B. welche Seite angezeigt werden soll, wann man zum nächsten Foto in der Galerie wechseln möchte...)
        </p>
        <p>
          Wenn Sie etwas wie ein Karussell auf einer Seite haben, bieten Sie eine Option an, es nicht automatisch weiterschalten zu lassen. Besser wäre es, solche Funktionen möglichst zu vermeiden.
        </p>
      </td>
    </tr>
    <tr>
      <td> 3.2.6 Konsistente Hilfe (A) </td>
      <td> <p>Webseiten, die Hilfsmechanismen enthalten, einschließlich Selbsthilfeoptionen und menschliche Kontaktdetails, die auf mehreren Webseiten wiederholt werden, müssen diese Mechanismen in derselben Reihenfolge auf allen Seiten platzieren, es sei denn, es wird eine Änderung vom Benutzer initiiert.</p>
      <td> <p>Sehen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-help">konsistente Hilfe-Dokumentation</a> für diesen Standard an, um mehr zu erfahren. </p>
      </td>
      </tr>
    </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Leitfaden 3.2 Vorhersehbar: Lassen Sie Webseiten auf vorhersehbare Weise erscheinen und funktionieren](https://www.w3.org/TR/WCAG21/#predictable).

## Leitfaden 3.3 — Eingabeunterstützung: Helfen Sie Benutzern, Fehler zu vermeiden und zu korrigieren

Dieser Leitfaden konzentriert sich darauf, Benutzern zu helfen, korrekte Informationen mit möglichst wenigen Fehlern einzugeben.

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
      <td>3.3.1 Fehlererkennung (A)</td>
      <td>
        <p>
          Wenn ein Benutzer ein Formular ausfüllt oder zwischen Optionen wählt, sollte jeder festgestellte Fehler dem Benutzer deutlich mitgeteilt werden, zusammen mit der Formularkontrolle, auf die sich der Fehler bezieht.
        </p>
        <p>
          Es ist ratsam, clientseitige Fehlererkennung und -behandlung zu implementieren, über HTML-Formularvalidierungsfunktionen, und/oder JavaScript, was auch immer für Ihre Situation am besten ist. Wenn ein Fehler erkannt wird, sollte eine intuitive Fehlermeldung neben dem Formularfeld gezeigt werden, das fehlerhaft ist, um dem Benutzer zu helfen, seine Eingaben zu korrigieren. Für Bildschirmleserbenutzer können Sie aria live regions verwenden, um den Benutzer auf eine Änderung auf der Seite aufmerksam zu machen.
        </p>
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Serverseitige Validierung sollte <em>immer</em> neben der clientseitigen Validierung verwendet werden. Diese ist zu leicht auszuschalten oder anderweitig zu umgehen, daher kann sie nicht alleine darauf vertraut werden.
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
        für Informationen zu Live-Bereichen.
      </td>
    </tr>
    <tr>
      <td>3.3.2 Labels oder Anweisungen (A)</td>
      <td>
        <p>
          Klare Anweisungen sollten bereitgestellt werden, wenn eine Dateneingabe erforderlich ist. Wenn eine einfache Anweisung oder Aufforderung erforderlich ist, können Sie {{htmlelement("label")}}-Elemente für einzelne Eingaben wie Name oder Alter verwenden, eine Kombination oder {{htmlelement("label")}}s und {{htmlelement("fieldset")}}s/{{htmlelement("legend")}}s für mehrere Eingaben, die zusammengehören (z.B. die Elemente eines Geburtsdatums oder einer Postadresse).
        </p>
        <p>
          Wenn eine komplexere Erklärung erforderlich ist, können Sie immer erläuternde Absätze einfügen, oder vielleicht müssen Sie versuchen, Ihre Formulare intuitiver zu gestalten.
        </p>
      </td>
      <td>
        <ul>
          <li>
            <a
              href="/de/docs/Learn/Accessibility/HTML#meaningful_text_labels"
              >Bedeutungsvolle Textlabels</a
            >
          </li>
          <li>
            <a href="/de/docs/Learn/Forms/How_to_structure_a_web_form"
              >Wie Sie ein HTML-Formular strukturieren</a
            >
          </li>
          <li>
            <a
              href="/de/docs/Web/Accessibility/Understanding_WCAG/Text_labels_and_names"
              >Textlabels und -namen</a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3.3.3 Fehlervorschläge (AA)</td>
      <td>
        <p>
          Wenn ein Fehler erkannt wird und Korrekturvorschläge bekannt sind, geben Sie diese dem Benutzer an (z.B. Alternativen vorschlagen, wenn der Benutzer einen Benutzernamen auswählt und einen gewählt hat, der bereits vergeben ist), es sei denn, dies würde ein Sicherheitsproblem verursachen (z.B. bei der Eingabe eines Passworts) oder ein Kontextproblem (z.B. sie versuchen, eine Frage in einer Quiz-App zu beantworten).
        </p>
        <p>
          In solchen Fällen, wenn dies angemessen ist, verwenden Sie wahrscheinlich eine Kombination aus JavaScript und serverseitiger Funktionalität, um zu überprüfen, ob der Eintrag korrekt ist und wenn nicht, welche praktikablen Vorschläge dem Benutzer gegeben werden können. Solche Vorschläge sollten wie Fehlermeldungen (siehe 3.3.1) nützlich im Kontext angezeigt werden.
        </p>
      </td>
      <td>Noch keine Tutorialvorschläge.</td>
    </tr>
    <tr>
      <td>3.3.4 Fehlervermeidung (rechtlich, finanziell, Daten) (AA)</td>
      <td>
        <p>
          Im Falle von Formularen, die die Eingabe sensibler Daten betreffen (wie rechtliche Vereinbarungen, E-Commerce-Transaktionen oder persönliche Daten), sollte mindestens eines der folgenden zutreffen:
        </p>
        <ul>
          <li>Eingaben sind umkehrbar.</li>
          <li>
            Daten werden auf Fehler überprüft, und dem Benutzer wird die Möglichkeit gegeben, sie zu korrigieren.
          </li>
          <li>
            Es steht ein Mechanismus zur Verfügung, um Informationen vor der endgültigen Übermittlung zu bestätigen und zu korrigieren.
          </li>
        </ul>
      </td>
      <td>
        <p>
          <strong>Umkehrbar</strong> — für jede Ansicht, in der Daten eingegeben werden können, bieten Sie eine gleichwertige Ansicht an, die es erlaubt, einen Eintrag zu bearbeiten oder sogar zu löschen, soweit angemessen (zum Beispiel siehe <a href="/de/docs/Learn/Server-side/Django">Django-Webframework</a>).
        </p>
        <p>
          <strong>Datenüberprüfung</strong> — wie in 3.3.1 behandelt, sollte eine Kombination aus clientseitiger und serverseitiger Validierung verwendet werden, um Fehler zu erkennen und hilfreiche Nachrichten anzuzeigen, damit der Benutzer seine Eingaben korrigieren kann.
        </p>
        <p>
          <strong>Bestätigen und korrigieren</strong> — wo angemessen, sollte dem Benutzer nach dem Ausfüllen einer Reihe von Formularfeldern zum Ausführen einer Aufgabe (wie dem Kauf eines Produkts) ein Bestätigungsbildschirm angezeigt werden, auf dem er seine Eingaben überprüfen und korrigieren kann, was nicht richtig aussieht. Dieses Muster wird häufig auf E-Commerce-Websites wie Amazon verwendet.
        </p>
      </td>
    </tr>
    <tr>
      <td>3.3.5 Kontextsensitive Hilfe ist verfügbar (AAA)</td>
      <td>
        Stellen Sie Anweisungen und andere geeignete Hinweise im Kontext bereit, um bei der Formulareingabe und -übermittlung zu helfen.
      </td>
      <td>
        Dies baut im Grunde auf 3.3.1 und anderen ähnlichen Kriterien auf, erfordert jedoch gründlichere kontextuelle Hilfsinformationen und -dienste, z.B. Bereitstellung eines dedizierten Links zu einer Hilfeseite oder einem -dienst auf jeder Seite, Bereitstellung von Beispielen, die zeigen, wie der erfolgreiche Abschluss aussehen sollte.
      </td>
    </tr>
    <tr>
      <td>3.3.6 Fehlervermeidung (Alle) (AAA)</td>
      <td>
        Dieses Prinzip baut auf 3.3.4 auf und erweitert dessen Anforderungen auf alle Benutzereingabesituationen, nicht nur auf solche, die sensible Daten betreffen.
      </td>
      <td>Siehe 3.3.4.</td>
    </tr>
    <tr>
      <td>3.3.7 Redundante Eingabe (A)</td>
      <td>
      Informationen, die erforderlich sind und zuvor vom Benutzer im selben Prozess oder Benutzerablauf eingegeben oder bereitgestellt wurden, werden entweder automatisch ausgefüllt oder dem Benutzer zur Auswahl aus einer Liste von Optionen bereitgestellt, es sei denn, die erneute Eingabe der Informationen ist unerlässlich oder aus Sicherheitsgründen erforderlich, oder die Informationen sind nicht mehr gültig.
      </td>
      <td>Sehen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry">Verständnis für redundante Eingabe</a> an, um mehr zu erfahren.</td>
      </tr>
      <tr>
      <td>3.3.8 Barrierefreie Authentifizierung (Minimum) (AA)</td>
      <td>
Kognitionsfunktionstests, wie das Erinnern an ein Passwort, sind in keinem Schritt eines Authentifizierungsprozesses erforderlich, es sei denn, es wird eine Alternative bereitgestellt, wie das Erkennen eines Objekts oder persönlichen Inhalts (z.B. Bilder, Videos und Audio) oder ein Mechanismus zur Unterstützung (z.B. Kopieren und Einfügen und automatisches Speichern von Passwörtern).
      </td>
      <td>Sehen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum">Dokumentation zur barrierefreien Authentifizierung</a> für diesen Standard an, um mehr zu erfahren.</td>
    </tr>
    <tr>
      <td>3.3.9 Barrierefreie Authentifizierung (Erweitert) (AAA)</td>
      <td>
Ein kognitiver Funktionstest, wie das Erinnern an ein Passwort, darf in keinem Schritt eines Authentifizierungsprozesses erforderlich sein, ohne eine Alternative bereitzustellen, die nicht auf einem kognitiven Funktionstest beruht, oder einen Mechanismus zu bieten, der den Benutzer bei der Durchführung des kognitiven Funktionstests unterstützt. Authentifizierungstests, die den Benutzer auffordern, Objekte zu erkennen oder nicht-textliche Inhalte zu identifizieren, die der Benutzer der Website bereitgestellt hat, sind zulässig.
      </td>
      <td>Sehen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced">erweiterte Dokumentation zur barrierefreien Authentifizierung (AAA)</a> an, um mehr zu erfahren.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Leitfaden 3.3 Eingabeunterstützung: Helfen Sie Benutzern, Fehler zu vermeiden und zu korrigieren](https://www.w3.org/TR/WCAG21/#input-assistance).

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG)

  1. [Perceptible](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
  2. [Bedienbar](/de/docs/Web/Accessibility/Understanding_WCAG/Operable)
  3. Understandable
  4. [Robust](/de/docs/Web/Accessibility/Understanding_WCAG/Robust)

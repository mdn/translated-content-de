---
title: HTML-Element-Seitenschablone
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

> **Hinweis:** _Entfernen Sie diese gesamte erläuternde Anmerkung vor der Veröffentlichung_
>
> ---
>
> **Seiten-Vorarbeiten:**
>
> Die Frontmaterie am Anfang der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend für das jeweilige Element aktualisiert werden.
>
> ```md
> ---
> title: "<NameOfTheElement>: Das NameOfTheElement-Element"
> slug: Web/HTML/Element/NameOfTheElement
> page-type: html-element
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: html.elements.NameOfTheElement
> ---
> ```
>
> - **title**
>   - : Überschrift, die oben auf der Seite angezeigt wird.
>     Formatieren Sie sie als `'<NameOfTheElement>: Beschreibung des Zweckes des Elements'`.
>     Zum Beispiel hat das [`<video>`](/de/docs/Web/HTML/Reference/Elements/video)-Element einen _Titel_ von: **'`<video>`: Das Video-Einbettungs-Element'**.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird wie `Web/HTML/Element/NameOfTheElement` formatiert, wobei der Elementname in _Kleinbuchstaben_ ist.
>     Zum Beispiel hat das [`<video>`](/de/docs/Web/HTML/Reference/Elements/video)-Element einen _Slug_ von `Web/HTML/Element/video`.
> - **page-type**
>   - : Immer `html-element`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `html.elements.NameOfTheElement` mit der Abfragezeichenfolge für das Element im [Browser-Compat-Daten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel, um die Kompatibilitäts- und Spezifikationsabschnitte automatisch zu füllen (Ersetzen der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Element in unserem [Browser-Compat-Daten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden dazu, wie man das macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Reihe von Makroaufrufen erscheint oben im Inhaltsbereich (unmittelbar unter der Seiten-Frontmatter).
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es besteht keine Notwendigkeit, hinzuzufügen/entfernen):
>
> - `\{{SeeCompatTable}}` — generiert ein **Dies ist eine experimentelle Technologie**-Banner, das auf Technologie hingewiesen wird [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   Wenn es experimentell ist und die Technologie in Firefox hinter einem pref verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — generiert ein **Veraltet**-Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — generiert ein **Nicht standardmäßig**-Banner, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den untenstehenden Anweisungen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — generiert ein **Sicherer Kontext**-Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn dies nicht der Fall ist, können Sie den Makroaufruf entfernen.
>   Wenn ja, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{HTMLSidebar}}` — generiert die Referenz-Seitenleiste auf der linken Seite für das Element.
>   Der Inhalt der Seitenleiste hängt von den Tags in den Seiten-Metadaten ab.
> - Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Geben Sie die Status-Header-Makros nicht manuell an. Siehe den Abschnitt [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Experimentell**, **Veraltet**, und **Nicht standardmäßigen** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> _Denken Sie daran, diese gesamte erläuternde Anmerkung vor der Veröffentlichung zu entfernen_

{{HTMLSidebar}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`<insert_the_element_name>`** [HTML](/de/docs/Web/HTML)-Element _(fügen Sie einen zusammenfassenden Absatz ein, der das Element benennt und dessen Funktion beschreibt, idealerweise ein oder zwei kurze Sätze)_.

## Probieren Sie es aus

Dieser Abschnitt wird durch das `InteractiveExample`-Makro generiert.
Darin enthalten sind der Titel des "Probieren Sie es aus"-Abschnitts und der Code-Editor.
Lesen Sie im Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_ für weitere Informationen.

Weitere Informationen — an diesem Punkt fügen Sie ein paar weitere Absätze ein, die die wichtigsten Dinge erklären, die Sie über die Verwendung des Elements und seiner Hauptmerkmale wissen müssen. Es ist gut, kurz zu erklären, was im interaktiven Beispiel vor sich geht, wenn es nicht sofort offensichtlich ist. Sie könnten auch wichtige Punkte darüber erklären, wie dieses Element mit wichtigen verwandten JavaScript- oder CSS-Funktionen interagiert. Nicht zu detailliert — Sie möchten nicht die Dokumentation auf mehreren Seiten wiederholen — aber ein wichtiger Punkt und ein Link zur Seite dieses Features wären nützlich. Siehe erneut die `<video>` Seite für ein Beispiel.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `attribute1` {{Deprecated_inline}} {{experimental_inline}}
  - : Hier eine Beschreibung, was das Attribut tut. Nehmen Sie einen Begriff und Definition für jedes Attribut auf. Wenn das Attribut nicht experimentell/veraltet ist, entfernen Sie die entsprechenden Makroaufrufe.
- `attribute2`
  - : etc.

## Ereignisse

Fügen Sie eine Tabelle der Ereignisse ein, die auf diesem Elementtyp ausgelöst werden, falls vorhanden.

| Ereignisname | Wird ausgelöst, wenn                      |
| ------------ | ----------------------------------------- |
| ereignis 1   | Erklären Sie kurz, wann es ausgelöst wird |
| ereignis 2   | Erklären Sie kurz, wann es ausgelöst wird |
| etc.         |                                           |

## Barrierefreiheit

Warnen Sie vor möglichen Bedenken hinsichtlich der Barrierefreiheit, die bei der Verwendung dieses Elements bestehen, und wie man diese umgehen kann. Entfernen Sie diesen Abschnitt, wenn keine aufgelistet werden können.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung nutzen Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für mehr Information.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite ein und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch API
>
> Beispiel von Fetch
>
> ### Weitere Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API, siehe [die Seite über fetch()](https://example.org/).
> ```

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        Füllen Sie eine Liste der Inhaltskategorien, zu denen das HTML-Element gehört.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Welchen Inhalt darf das Element enthalten?</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Kann das Endtag weggelassen werden, oder muss es vorhanden sein? Muss es weggelassen werden?
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Welche Elternelemente kann das Element Kind von sein? Zum Beispiel "Jedes
        Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fluss-Inhalt</a
        > akzeptiert."
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        Füllen Sie eine Liste der ARIA-Rollen aus, die auf dem Element gesetzt werden können; zum Beispiel
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role"><code>directory</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        Welche DOM-Schnittstelle repräsentiert das Element in JavaScript? Zum Beispiel
        [`HTMLOListElement`](/de/docs/Web/API/HTMLOListElement) im Fall von ol.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden ein, die sich auf das aktuelle Element beziehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibrichtlinienführer_.

- link1
- link2
- externer_link (Jahr)

---
title: HTML-Element-Seitenschablone
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template
l10n:
  sourceCommit: 8f0171397993605739530a8d32f24a804d06f882
---

> [!NOTE]
> _Entfernen Sie diese gesamte erläuternde Anmerkung vor der Veröffentlichung_
>
> ---
>
> **Seitenfrontmaterie:**
>
> Die Frontmatter am Anfang der Seite wird verwendet, um "Metadaten der Seite" zu definieren.
> Die Werte sollten entsprechend für das jeweilige Element aktualisiert werden.
>
> ```md
> ---
> title: "<NameOfTheElement>: Das NameOfTheElement-Element"
> slug: Web/HTML/Reference/Elements/NameOfTheElement
> page-type: html-element
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: html.elements.NameOfTheElement
> sidebar: htmlsidebar
> ---
> ```
>
> - **title**
>   - : Der Titel, der oben auf der Seite angezeigt wird.
>     Formatieren Sie ihn als `'<NameOfTheElement>: Beschreibung des Zwecks des Elements'`.
>     Zum Beispiel hat das [`<video>`](/de/docs/Web/HTML/Reference/Elements/video)-Element einen _Titel_ von: **'\<video>: Das Video Embed-Element'**.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird in etwa so formatiert sein: `Web/HTML/Reference/Elements/NameOfTheElement`, wobei der Elementname in _Kleinbuchstaben_ geschrieben ist.
>     Zum Beispiel hat das [`<video>`](/de/docs/Web/HTML/Reference/Elements/video)-Element einen _Slug_ von `Web/HTML/Reference/Elements/video`.
> - **page-type**
>   - : Immer `html-element`.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Daten zur Browser-Kompatibilität für das Feature festgelegt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `html.elements.NameOfTheElement` mit der Abfragezeichenfolge für das Element im [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (ersetzen der `\{{Compat}}` und `\{{Specifications}}`-Makros).
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Element in unserem [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und dieser Eintrag Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden, wie dies getan wird](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Diese `htmlsidebar` für alle HTML-Leitfaden- und Referenzseiten.
>     Siehe [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Reihe von Makros erscheint oben im Inhaltsbereich unmittelbar nach der Seiten-Frontmatter.
> Diese Makros werden automatisch durch das Tooling hinzugefügt, daher vermeiden Sie das Hinzufügen oder Entfernen von ihnen:
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie hinter einem Pref in Firefox versteckt ist, sollten Sie dafür auch einen Eintrag auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht standardisiert**-Banner, das anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) für Informationen.
>
> Beispiele der **Experimentellen**, **Veralteten** und **Nicht standardisierten**-Banner werden nach diesem Hinweisblock gezeigt.
>
> _Denken Sie daran, diese ganze erläuternde Anmerkung vor der Veröffentlichung zu entfernen_

{{SeeCompatTable}}{{Non-standard_Header}}

Das **`<insert_the_element_name>`** [HTML](/de/docs/Web/HTML)-Element _(fügen Sie einen zusammenfassenden Absatz ein, der das Element benennt und sagt, was es tut, idealerweise ein oder zwei kurze Sätze)_.

## Probieren Sie es aus

Dieser Abschnitt wird durch das `InteractiveExample`-Makro generiert.
Dies beinhaltet den Titel des Abschnitts "Probieren Sie es aus" und den Code-Editor.
Sehen Sie sich den Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_ für weitere Informationen an.

Weitere Informationen — an dieser Stelle fügen Sie einige weitere Absätze hinzu, die die wichtigsten Dinge erklären, die Sie über die Verwendung des Elements und seine Hauptmerkmale wissen müssen. Es ist gut, kurz zu erklären, was im interaktiven Beispiel vor sich geht, wenn dies nicht sofort offensichtlich ist. Sie können auch wichtige Punkte darüber erklären, wie dieses Element mit wichtigen verwandten JavaScript- oder CSS-Features interagiert. Nicht zu viele Details — Sie möchten die Dokumentation nicht über Seiten hinweg wiederholen —, aber ein Schlüsselpunkt plus ein Link zur Seite dieses Features wäre nützlich. Siehe wieder die `<video>`-Seite für ein Beispiel.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `attribute1` {{Deprecated_inline}} {{experimental_inline}}
  - : Fügen Sie hier eine Beschreibung ein, was das Attribut tut. Fügen Sie einen Begriff und eine Definition für jedes Attribut ein. Wenn das Attribut nicht experimentell/veraltet ist, entfernen Sie die entsprechenden Makro-Aufrufe.
- `attribute2`
  - : usw.

## Ereignisse

Fügen Sie eine Tabelle der Ereignisse ein, die auf diesem Typ von Element ausgelöst werden, falls vorhanden.

| Ereignisname | Wann ausgelöst                            |
| ------------ | ----------------------------------------- |
| event 1      | Erklären Sie kurz, wann es ausgelöst wird |
| event 2      | Erklären Sie kurz, wann es ausgelöst wird |
| usw.         |                                           |

## Barrierefreiheit

Warnen Sie vor potenziellen Barrierefreiheitsproblemen, die bei der Verwendung dieses Elements bestehen, und wie man sie umgehen kann. Entfernen Sie diesen Abschnitt, wenn es keine gibt, die aufzulisten sind.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend dafür sein, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Code-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für weitere Informationen.

> [!NOTE]
> Manchmal werden Sie auf Beispiele verlinken wollen, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Mehr Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der fetch-API
>
> Beispiel für Fetch
>
> ### Mehr Beispiele
>
> Links zu mehr Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite haben und keine auf dieser Seite:
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
        Füllen Sie eine Liste der Inhaltskategorien aus, zu denen das HTML-Element gehört.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Welchen Inhalt darf das Element enthalten?</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Kann das End-Tag weggelassen werden, oder muss es vorhanden sein? Muss es weggelassen werden?
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Welche Elternelemente können das Element als Kind haben? Zum Beispiel "Jedes
        Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
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

Fügen Sie Links zu Referenzseiten und Leitfäden ein, die sich auf das aktuelle Element beziehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)

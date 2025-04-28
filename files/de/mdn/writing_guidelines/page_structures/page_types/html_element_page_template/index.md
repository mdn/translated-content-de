---
title: HTML-Elementseitentemplate
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

> **Note:** _Entfernen Sie diese gesamte erläuternde Anmerkung vor der Veröffentlichung_
>
> ---
>
> **Seitenkopfdaten:**
>
> Der Frontmatter am Anfang der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend für das jeweilige Element aktualisiert werden.
>
> ```md
> ---
> title: "<NameDesElements>: Das NameDesElements-Element"
> slug: Web/HTML/Reference/Elements/NameDesElements
> page-type: html-element
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: html.elements.NameDesElements
> sidebar: htmlsidebar
> ---
> ```
>
> - **title**
>   - : Der Titelüberschrift wird oben auf der Seite angezeigt.
>     Formatieren Sie als `'<NameDesElements>: Beschreibung der Funktion des Elements'`.
>     Zum Beispiel hat das [`<video>`](/de/docs/Web/HTML/Reference/Elements/video) Element einen _title_ von: **'`<video>`: Das Videoeinbettungselement'**.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird wie `Web/HTML/Reference/Elements/NameDesElements` formatiert, wobei der Elementname in _Kleinbuchstaben_ ist.
>     Zum Beispiel hat das [`<video>`](/de/docs/Web/HTML/Reference/Elements/video) Element einen _slug_ von `Web/HTML/Reference/Elements/video`.
> - **page-type**
>   - : Immer `html-element`.
> - **status**
>   - : Kennzeichnung, die den Status dieses Features beschreibt. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `html.elements.NameDesElements` durch die Abfragezeichenfolge für das Element im [Browser-Kompatibilitätsdaten-Repository](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet automatisch den Schlüssel, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (Ersetzen der `\{{Compat}}` und `\{{Specifications}}` Makros).
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Element in unserem [Browser-Kompatibilitätsdaten-Repository](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag muss Spezifikationsinformationen enthalten.
>     Siehe unser [Leitfaden, wie man dies tut](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Dieser `htmlsidebar` ist für alle HTML-Leitfaden- und Referenzseiten.
>     Siehe [Seiteneinstellungen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makros erscheint oben im Inhaltsbereich direkt nach den Seitendaten.
> Diese Makros werden automatisch durch die Tools hinzugefügt, daher vermeiden Sie das Hinzufügen oder Entfernen von ihnen:
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Falls sie experimentell ist und die Technologie hinter einem Pref in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dies erzeugt ein **Veraltet**-Banner, das darauf hinweist, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht standardisiert**-Banner, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) für Informationen.
>
> Beispiele für die **Experimentell**, **Veraltet** und **Nicht standardisiert** Banner werden nach diesem Notizblock gezeigt.
>
> _Vergessen Sie nicht, diese gesamte erläuternde Anmerkung vor der Veröffentlichung zu entfernen_

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`<insert_the_element_name>`** [HTML](/de/docs/Web/HTML) Element tut _(fügen Sie einen Zusammenfassungsabsatz ein, der das Element benennt und sagt, was es tut, idealerweise ein oder zwei kurze Sätze)_.

## Probieren Sie es aus

Dieser Abschnitt wird durch das `InteractiveExample`-Makro generiert.
Dies umfasst den Titel des Abschnitts "Probieren Sie es aus" und den Code-Editor.
Weitere Informationen finden Sie im Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_.

Weitere Informationen — an diesem Punkt fügen Sie ein paar weitere Absätze hinzu, die die wichtigsten Dinge erklären, die Sie über die Verwendung des Elements und seiner Hauptmerkmale wissen müssen. Es ist gut, kurz zu erklären, was im interaktiven Beispiel vor sich geht, wenn es nicht sofort offensichtlich ist. Sie könnten auch wichtige Punkte darüber erklären, wie dieses Element mit wichtigen verwandten JavaScript- oder CSS-Features interagiert. Nicht zu viel Detail — Sie möchten nicht die Dokumentation über Seiten hinweg wiederholen — aber ein Schlüsselpunkt plus ein Link zur Seite dieses Features wäre nützlich. Siehe erneut die `<video>`-Seite für ein Beispiel.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `attribute1` {{Deprecated_inline}} {{experimental_inline}}
  - : Fügen Sie hier eine Beschreibung dessen ein, was das Attribut tut. Fügen Sie für jedes Attribut einen Begriff und eine Definition ein. Wenn das Attribut nicht experimentell/veraltet ist, entfernen Sie die entsprechenden Makro-Aufrufe.
- `attribute2`
  - : usw.

## Ereignisse

Fügen Sie eine Tabelle der Ereignisse ein, die bei diesem Elementtyp ausgelöst werden, falls vorhanden.

| Ereignisname | Wird ausgelöst, wenn                      |
| ------------ | ----------------------------------------- |
| Ereignis 1   | Erklären Sie kurz, wann es ausgelöst wird |
| Ereignis 2   | Erklären Sie kurz, wann es ausgelöst wird |
| usw.         |                                           |

## Barrierefreiheit

Warnen Sie vor möglichen Barrierefreiheitsbedenken, die bei der Verwendung dieses Elements auftreten können, und wie man sie umgehen kann. Entfernen Sie diesen Abschnitt, wenn es keine zu nennen gibt.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden dazu, wie man [Codebeispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite ein und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch-API
>
> Beispiel für Fetch
>
> ### Weitere Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter die H2-Überschrift "Beispiele". Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API siehe [die Seite zu fetch()](https://example.org/).
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
      <th scope="row">Erlaubte Inhalte</th>
      <td>Welche Inhalte darf das Element enthalten?</td>
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
        Welche Elternelemente können das Element als Kind enthalten? Zum Beispiel "Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert."
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        Füllen Sie eine Liste der ARIA-Rollen aus, die auf das Element gesetzt werden können; zum Beispiel
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role"><code>directory</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
      <td>
        Welches DOM-Interface repräsentiert das Element in JavaScript? Zum Beispiel
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

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf das aktuelle Element beziehen. Für weitere Richtlinien sehen Sie den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibrichtlinienstil_.

- link1
- link2
- external_link (year)

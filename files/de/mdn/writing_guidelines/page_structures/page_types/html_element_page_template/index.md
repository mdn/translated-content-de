---
title: HTML-Element-Seitenschablone
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

> [!NOTE] > _Entfernen Sie diese gesamte erklärende Notiz, bevor Sie veröffentlichen_
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite definieren die "Seitenmetadaten".
> Die Werte sollten entsprechend dem spezifischen Element aktualisiert werden.
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
>   - : Ein Überschriftstitel, der oben auf der Seite angezeigt wird.
>     Formatieren Sie ihn als `'<NameOfTheElement>: Beschreibung des Zwecks des Elements'`.
>     Zum Beispiel hat das [`<video>`](/de/docs/Web/HTML/Reference/Elements/video)-Element einen _title_ von: **'`<video>`: Das Video-Embed-Element'**.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert als `Web/HTML/Reference/Elements/NameOfTheElement`, wobei der Elementname in _Kleinbuchstaben_ geschrieben wird.
>     Zum Beispiel hat das [`<video>`](/de/docs/Web/HTML/Reference/Elements/video)-Element einen _slug_ von `Web/HTML/Reference/Elements/video`.
> - **page-type**
>   - : Immer `html-element`.
> - **status**
>   - : Kennzeichnungen, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell festgelegt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Wie Feature-Statuses hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `html.elements.NameOfTheElement` mit der Abfragestring für das Element im [Browser-Compat-Daten-Repository](https://github.com/mdn/browser-compat-data).
>     Die Toolkette verwendet automatisch den Schlüssel, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (ersetzt die `\{{Compat}}` und `\{{Specifications}}` Makros).
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Element in unserem [Browser-Compat-Daten-Repository](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Diese `htmlsidebar` für alle HTML-Leitfäden und Referenzseiten.
>     Siehe [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Oben auf der Seite Makros**
>
> Eine Anzahl von Makros erscheint am Anfang des Inhaltsbereichs direkt nach den Seitenmetadaten.
> Diese Makros werden automatisch durch Werkzeuge hinzugefügt, daher vermeiden Sie das Hinzufügen oder Entfernen von ihnen:
>
> - `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Falls es experimentell ist und die Technologie hinter einer Voreinstellung in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — erzeugt ein **Veraltet**-Banner, das darauf hinweist, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — erzeugt ein **Nicht standardisiert**-Banner, das darauf hinweist, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Siehe ["Wie Feature-Statuses hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) für Informationen.
>
> Beispiele der **Experimentellen**, **Veralteten** und **Nicht standardisierten** Banner werden nach diesem Notizblock gezeigt.
>
> _Diesen gesamten erklärenden Hinweis vor der Veröffentlichung entfernen_

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`<insert_the_element_name>`** [HTML](/de/docs/Web/HTML)-Element tut _(fügen Sie einen zusammenfassenden Absatz ein, der das Element benennt und beschreibt, was es tut, idealerweise ein oder zwei kurze Sätze)_.

## Probieren Sie es aus

Dieser Abschnitt wird durch das `InteractiveExample`-Makro generiert.
Dies beinhaltet den "Probieren Sie es aus"-Sektions-Titel und den Code-Editor.
Siehe den Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_ für weitere Informationen.

Weitere Informationen — an diesem Punkt fügen Sie ein paar weitere Absätze hinzu, in denen die wichtigsten Dinge erklärt werden, die Sie über die Verwendung des Elements und seiner Hauptmerkmale wissen müssen. Es ist gut, kurz zu erklären, was im interaktiven Beispiel vor sich geht, wenn es nicht sofort offensichtlich ist. Sie könnten auch wesentliche Punkte darüber erklären, wie dieses Element mit wichtigen zugehörigen JavaScript- oder CSS-Funktionen interagiert. Nicht zu detailliert — Sie möchten die Dokumentation nicht auf mehreren Seiten wiederholen — aber ein wesentlicher Punkt plus ein Link zur entsprechenden Funktionsseite wäre nützlich. Siehe erneut die `<video>` Seite für ein Beispiel.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `attribute1` {{Deprecated_inline}} {{experimental_inline}}
  - : Fügen Sie hier eine Beschreibung dessen ein, was das Attribut tut. Fügen Sie für jedes Attribut einen Begriff und eine Definition ein. Wenn das Attribut nicht experimentell/veraltet ist, entfernen Sie die entsprechenden Makroaufrufe.
- `attribute2`
  - : usw.

## Events

Fügen Sie eine Tabelle der Events ein, die bei diesem Typ von Element ausgelöst werden, falls vorhanden.

| Ereignisname | Ausgelöst, wenn                           |
| ------------ | ----------------------------------------- |
| ereignis 1   | Erklären Sie kurz, wann es ausgelöst wird |
| ereignis 2   | Erklären Sie kurz, wann es ausgelöst wird |
| usw.         |                                           |

## Barrierefreiheit

Warnen Sie vor möglichen Barrierefreiheitsproblemen, die bei der Verwendung dieses Elements auftreten können, und wie man sie umgeht. Entfernen Sie diesen Abschnitt, wenn es keine zu erwähnenden gibt.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Code-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für weitere Informationen.

> [!NOTE]
> Manchmal werden Sie auf Beispiele verlinken wollen, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und einige weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwenden der Fetch-API
>
> Beispiel für Fetch
>
> ### Weitere Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite haben und keine auf dieser Seite:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie direkt unter der H2-Überschrift "Beispiele" die Links hinzu. Zum Beispiel:
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
        Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalt</a> akzeptiert."
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        Füllen Sie eine Liste der ARIA-Rollen aus, die dem Element zugewiesen werden können, zum Beispiel
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

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit dem aktuellen Element in Zusammenhang stehen. Weitere Richtlinien finden Sie im [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)

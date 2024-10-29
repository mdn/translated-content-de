---
title: HTML-Element-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diese gesamte erklärende Notiz vor der Veröffentlichung_
>
> ---
>
> **Seiten-Frontmatter:**
>
> Der Frontmatter-Abschnitt oben auf der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend für das jeweilige Element aktualisiert werden.
>
> ```md
> ---
> title: "<NameOfTheElement>: Das NameOfTheElement-Element"
> slug: Web/HTML/Element/NameOfTheElement
> page-type: html-element
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: html.elements.NameOfTheElement
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Formatieren Sie sie als `'<NameOfTheElement>: Beschreibung des Zwecks des Elements'`.
>     Zum Beispiel hat das [`<video>`](/de/docs/Web/HTML/Element/video) Element einen _title_ von: **'`<video>`: Das Videoeinbettungs-Element'**.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/HTML/Element/NameOfTheElement`, wobei der Elementname in _Kleinbuchstaben_ gehalten wird.
>     Zum Beispiel hat das [`<video>`](/de/docs/Web/HTML/Element/video) Element einen _slug_ von `Web/HTML/Element/video`.
> - **page-type**
>   - : Immer `html-element`.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `html.elements.NameOfTheElement` durch den Abfrage-String für das Element im [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (Ersetzen der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Element in unserem [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag muss Spezifikationsinformationen enthalten.
>     Siehe unser [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Macros oben auf der Seite**
>
> Eine Anzahl von Macro-Aufrufen erscheint am Anfang des Inhaltsabschnitts (direkt unter dem Seiten-Frontmatter).
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es besteht keine Notwendigkeit hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — Dies erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem Pref in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — Dies erzeugt ein **Veraltet**-Banner, das anzeigt, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — Dies erzeugt ein **Nicht-Standard**-Banner, das anzeigt, dass das Feature nicht Teil irgendeiner Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß der untenstehenden Ratschläge aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — Dies erzeugt ein **Sicherer Kontext**-Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn nicht, können Sie den Macro-Aufruf entfernen.
>   Wenn ja, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{HTMLSidebar}}` — Dies erzeugt die linke Seitenleiste für das Element.
>   Der Inhalt der Seitenleiste hängt von den Tags in den Seitenmetadaten ab.
> - Denken Sie daran, das Macro `\{{MDNSidebar}}` zu entfernen, wenn Sie diese Seite kopieren.
>
> Man sollte keine Status-Header-Makros manuell bereitstellen. Um diese Status zur Seite hinzuzufügen, lesen Sie die Sektion ["Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
>
> Beispiele der **Experimentell**, **Veraltet**, und **Nicht-Standard** Banner werden direkt nach diesem Notizblock gezeigt.
>
> _Denken Sie daran, diese gesamte erklärende Notiz vor der Veröffentlichung zu entfernen_

{{HTMLSidebar}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`<insert_the_element_name>`** [HTML](/de/docs/Web/HTML) Element macht _(fügen Sie einen zusammenfassenden Absatz ein, der das Element benennt und beschreibt, was es tut, idealerweise ein oder zwei kurze Sätze)_.

\\{{EmbedInteractiveExample("pages/tabbed/nameOfElement.html", "tabbed-standard")}}

Weitere Informationen — an diesem Punkt sollten Sie einige weitere Absätze hinzufügen, die die wichtigsten Dinge erklären, die Sie über die Verwendung des Elements und seiner Hauptmerkmale wissen müssen. Es ist gut, kurz zu erklären, was in dem interaktiven Beispiel geschieht, wenn es nicht sofort offensichtlich ist. Sie könnten auch wichtige Punkte darüber erklären, wie dieses Element mit wichtigen verwandten JavaScript- oder CSS-Funktionen interagiert. Nicht zu viele Details — Sie möchten die Dokumentation über Seiten hinweg nicht wiederholen — aber ein wichtiger Punkt plus ein Link zur Seite dieser Funktion wäre nützlich. Siehe die `<video>` Seite als Beispiel.

## Attribute

Dieses Element schließt die [globalen Attribute](/de/docs/Web/HTML/Global_attributes) ein.

- `attribute1` {{Deprecated_inline}} {{experimental_inline}}
  - : Fügen Sie hier eine Beschreibung ein, was das Attribut tut. Fügen Sie einen Begriff und eine Definition für jedes Attribut ein. Wenn das Attribut nicht experimentell/veraltet ist, entfernen Sie die entsprechenden Macro-Aufrufe.
- `attribute2`
  - : etc.

## Ereignisse

Fügen Sie eine Tabelle der Ereignisse ein, die bei diesem Elementtypen ausgelöst werden, wenn vorhanden.

| Ereignisname | Wird ausgelöst, wenn                      |
| ------------ | ----------------------------------------- |
| Ereignis 1   | Erklären Sie kurz, wann es ausgelöst wird |
| Ereignis 2   | Erklären Sie kurz, wann es ausgelöst wird |
| etc.         |                                           |

## Barrierefreiheit

Warnen Sie vor potenziellen Barrierefreiheitsbedenken, die bei der Verwendung dieses Elements bestehen, und wie sie umgangen werden können. Entfernen Sie diesen Abschnitt, wenn es keine zu erwähnen gibt.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zum Hinzufügen von [Code-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der fetch API
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
> Für Beispiele zu dieser API, siehe [die Seite zu fetch()](https://example.org/).
> ```

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
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
        Welche Elternelemente können das Element als Kind haben? Zum Beispiel "Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließinhalte</a
        > akzeptiert."
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        Füllen Sie eine Liste der ARIA-Rollen aus, die auf dem Element gesetzt werden können; zum Beispiel
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/directory_role"><code>directory</code></a>.
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

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf das aktuelle Element beziehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)

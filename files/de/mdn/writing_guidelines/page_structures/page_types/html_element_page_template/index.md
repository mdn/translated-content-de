---
title: HTML-Elementseiten Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diese gesamte erläuternde Notiz, bevor Sie sie veröffentlichen_
>
> ---
>
> **Page front matter:**
>
> Das Frontmatter am Anfang der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten für das jeweilige Element entsprechend aktualisiert werden.
>
> ```md
> ---
> title: "<NameOfTheElement>: The NameOfTheElement element"
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
>     Formatieren Sie es als `'<NameOfTheElement>: Beschreibung des Zwecks des Elements'`.
>     Zum Beispiel hat das [`<video>`](/de/docs/Web/HTML/Element/video) Element einen _title_ von: **'\<video>: Das Video Embed Element'**.
> - **slug**
>   - : Das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird im Format `Web/HTML/Element/NameOfTheElement` sein, wobei der Elementname in _Kleinbuchstaben_ ist.
>     Zum Beispiel hat das [`<video>`](/de/docs/Web/HTML/Element/video) Element einen _slug_ von `Web/HTML/Element/video`.
> - **page-type**
>   - : Immer `html-element`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `html.elements.NameOfTheElement` durch den Abfrage-String für das Element im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (Ersetzung der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Element in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag muss Spezifikationsinformationen enthalten.
>     Siehe unser [Leitfaden zur Vorgehensweise](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Oben-auf-der-Seite Makros**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsbereichs (direkt unter dem Seiten-Frontmatter).
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es besteht keine Notwendigkeit, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies generiert ein **Dies ist eine experimentelle Technologie** Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie hinter einem Pref in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) eintragen.
> - `\{{Deprecated_Header}}` — dies generiert ein **Veraltet** Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dies generiert ein **Nicht-standard** Banner, das darauf hinweist, dass das Feature Teil keiner Spezifikation ist.
>
> Sie sollten die folgenden Makros entsprechend den unten stehenden Ratschlägen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — dies generiert ein **Sicherer Kontext** Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Falls dies nicht der Fall ist, können Sie den Makroaufruf entfernen.
>   Wenn doch, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) einfügen.
> - `\{{HTMLSidebar}}` — dies generiert die linksseitige Referenz-Sidebar für das Element.
>   Der Inhalt der Sidebar hängt von den Tags in den Seiten-Metadaten ab.
> - Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Status-Header-Makros nicht manuell bereitstellen. Beziehen Sie sich auf den Abschnitt ["How to add or update feature statuses"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status der Seite hinzuzufügen.
>
> Beispiele der **Experimentellen**, **Veralteten** und **Nicht-standard** Banner werden direkt nach diesem Notizblock angezeigt.
>
> _Denken Sie daran, diese gesamte erläuternde Notiz zu entfernen, bevor Sie sie veröffentlichen_

{{HTMLSidebar}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`<insert_the_element_name>`** [HTML](/de/docs/Web/HTML) Element hat die Funktion, _(fügen Sie einen zusammenfassenden Absatz ein, der das Element benennt und sagt, was es tut, idealerweise ein oder zwei kurze Sätze)_.

\\{{EmbedInteractiveExample("pages/tabbed/nameOfElement.html", "tabbed-standard")}}

Weitere Informationen — an dieser Stelle fügen Sie ein paar weitere Absätze ein, die die wichtigsten Dinge erklären, die Sie über die Verwendung des Elements und seiner Hauptmerkmale wissen müssen. Es ist gut, kurz zu erklären, was im interaktiven Beispiel vor sich geht, wenn es nicht sofort offensichtlich ist. Sie könnten auch wichtige Punkte darüber erklären, wie dieses Element mit wichtigen verwandten JavaScript- oder CSS-Funktionen interagiert. Nicht zu viele Details — Sie möchten die Dokumentation auf den Seiten nicht wiederholen — aber ein wichtiger Punkt plus ein Link zur Seite dieser Funktion wäre nützlich. Schauen Sie sich als Beispiel die `<video>` Seite an.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `attribute1` {{Deprecated_inline}} {{experimental_inline}}
  - : Fügen Sie hier eine Beschreibung dessen ein, was das Attribut tut. Geben Sie für jedes Attribut einen Begriff und eine Definition an. Wenn das Attribut nicht experimentell/veraltet ist, entfernen Sie die entsprechenden Makroaufrufe.
- `attribute2`
  - : usw.

## Ereignisse

Fügen Sie eine Tabelle der auf diesem Elementtyp ausgelösten Ereignisse ein, falls vorhanden.

| Ereignisname | Ausgelöst, wenn                           |
| ------------ | ----------------------------------------- |
| event 1      | Erklären Sie kurz, wann es ausgelöst wird |
| event 2      | Erklären Sie kurz, wann es ausgelöst wird |
| usw.         |                                           |

## Barrierefreiheit

Warnen Sie vor eventuell vorhandenen Bedenken hinsichtlich der Barrierefreiheit bei der Verwendung dieses Elements und wie man diese umgehen kann. Entfernen Sie diesen Abschnitt, wenn keine aufzulisten sind.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) mit dem Namen des Beispiels haben. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zur Vorgehensweise, um [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzuzufügen, für mehr Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und einige weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Beispielsweise:
>
> ```md
> ## Beispiele
>
> ### Verwenden der Fetch API
>
> Beispiel von Fetch
>
> ### Weitere Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keines auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" ein. Beispielsweise:
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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        Füllen Sie eine Liste der Inhaltskategorien aus, zu denen das HTML-Element gehört.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>Welchen Inhalt darf das Element enthalten?</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Kann das End-Tag weggelassen werden oder muss es vorhanden sein? Muss es weggelassen werden?
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Welche Elternelemente können die Eltern des Elements sein? Zum Beispiel "Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
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

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit dem aktuellen Element zusammenhängen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden für Schreibstile_.

- link1
- link2
- external_link (year)

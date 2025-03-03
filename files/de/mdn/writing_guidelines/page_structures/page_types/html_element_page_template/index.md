---
title: HTML-Elementseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template
l10n:
  sourceCommit: 359403526b7b802cdb09b90acf28577b959076d0
---

> **Hinweis:** _Entfernen Sie diese gesamte Erklärung, bevor Sie die Seite veröffentlichen._
>
> ---
>
> **Seiten-Front-Matter:**
>
> Das Frontmatter am oberen Rand der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten für das jeweilige Element entsprechend aktualisiert werden.
>
> ```md
> ---
> title: "<NameOfTheElement>: Das NameOfTheElement Element"
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
>   - : Überschrift oben auf der Seite.
>     Formatieren als `'<NameOfTheElement>: Beschreibung des Zwecks des Elements'`.
>     Zum Beispiel hat das [`<video>`](/de/docs/Web/HTML/Element/video) Element den _Titel_: **'`<video>`: Das Video-Einbettungselement'**.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird wie `Web/HTML/Element/NameOfTheElement` formatiert, wobei der Elementname in _kleinen Buchstaben_ geschrieben wird.
>     Zum Beispiel hat das [`<video>`](/de/docs/Web/HTML/Element/video) Element den _Slug_ `Web/HTML/Element/video`.
> - **page-type**
>   - : Immer `html-element`.
> - **status**
>   - : Kennzeichen, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: er wird basierend auf den Werten in den Browserskompatibilitätsdaten für das Feature automatisch gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `html.elements.NameOfTheElement` mit der Abfragezeichenfolge für das Element im [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte auszufüllen (Ersetzung der `\{{Compat}}` und `\{{Specifications}}` Macros).
>
>     Beachten Sie, dass Sie zuerst möglicherweise einen Eintrag für das Element in unserem [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden, wie dies zu tun ist](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Top-of-page Macros**
>
> Eine Anzahl von Macro-Aufrufen erscheint am Anfang des Inhaltsabschnitts (direkt unterhalb des Seiten-Front-Matters).
> Diese Macros werden von der Toolchain automatisch hinzugefügt (es ist nicht notwendig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — Dieser generiert ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie in Firefox hinter einem Pref versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimental features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) einfügen.
> - `\{{Deprecated_Header}}` — Dieser generiert ein **Veraltet** Banner, das anzeigt, dass die Verwendung der Technologie [abgeraten](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — Dieser generiert ein **Nicht-standard** Banner, das anzeigt, dass das Feature Teil keiner Spezifikation ist.
>
> Sie sollten die folgenden Macros entsprechend den untenstehenden Ratschlägen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — Dieser generiert ein **Sicherer Kontext** Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn dies nicht der Fall ist, können Sie den Macro-Aufruf entfernen.
>   Wenn dies der Fall ist, sollten Sie auch einen Eintrag dafür auf der Seite [Features restricted to secure contexts](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) einfügen.
> - `\{{HTMLSidebar}}` — Dieser generiert die linksseitige Referenz-Seitenleiste für das Element.
>   Der Inhalt der Seitenleiste hängt von den Tags in den Seitenmetadaten ab.
> - Denken Sie daran, das `\{{MDNSidebar}}` Macro zu entfernen, wenn Sie diese Seite kopieren.
>
> Fügen Sie keine Status-Header-Macros manuell hinzu. Beziehen Sie sich auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Experimentell**, **Veraltet** und **Nicht-standard** Banner werden direkt nach diesem Erklärungsteil gezeigt.
>
> _Denken Sie daran, diese gesamte Erklärung vor der Veröffentlichung zu entfernen._

{{HTMLSidebar}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`<insert_the_element_name>`** [HTML](/de/docs/Web/HTML) Element macht Folgendes _(fügen Sie einen zusammenfassenden Absatz ein, der das Element benennt und sagt, was es tut, idealerweise ein oder zwei kurze Sätze)_.

\\{{EmbedInteractiveExample("pages/tabbed/nameOfElement.html", "tabbed-standard")}}

Weitere Informationen — an dieser Stelle fügen Sie einige weitere Absätze hinzu, die die wichtigsten Dinge erklären, die Sie über die Verwendung des Elements und seine Hauptmerkmale wissen müssen. Es ist gut, kurz zu erklären, was im interaktiven Beispiel vor sich geht, wenn es nicht sofort offensichtlich ist. Sie könnten auch wichtige Punkte darüber erklären, wie dieses Element mit wichtigen verwandten JavaScript- oder CSS-Funktionen interagiert. Nicht zu viele Details — Sie möchten die Dokumentation nicht über Seiten hinweg wiederholen — aber ein wichtiger Punkt plus ein Link zur Seite dieses Features wäre nützlich. Siehe erneut die `<video>`-Seite für ein Beispiel.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `attribute1` {{Deprecated_inline}} {{experimental_inline}}
  - : Fügen Sie hier eine Beschreibung dessen ein, was das Attribut macht. Fügen Sie für jedes Attribut einen Begriff und eine Definition ein. Wenn das Attribut nicht experimentell/veraltet ist, entfernen Sie die entsprechenden Macro-Aufrufe.
- `attribute2`
  - : etc.

## Events

Fügen Sie eine Tabelle der Events hinzu, die auf diesem Elementtyp ausgelöst werden, falls vorhanden.

| Ereignisname | Ausgelöst, wenn                           |
| ------------ | ----------------------------------------- |
| event 1      | Erklären Sie kurz, wann es ausgelöst wird |
| event 2      | Erklären Sie kurz, wann es ausgelöst wird |
| etc.         |                                           |

## Barrierefreiheit

Warnen Sie vor möglichen Barrierefreiheitsbedenken, die bei der Verwendung dieses Elements bestehen, und wie Sie diese umgehen können. Entfernen Sie diesen Abschnitt, wenn keine aufgelistet werden müssen.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unsere Anleitung, wie [Codebeispiele hinzugefügt werden können](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples), für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Examples
>
> ### Using the fetch API
>
> Example of Fetch
>
> ### More examples
>
> Links to more examples on other pages
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite haben und keine auf dieser Seite:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie einfach die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Examples
>
> For examples of this API, see [the page on fetch()](https://example.org/).
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
      <th scope="row">Zulässiger Inhalt</th>
      <td>Welche Inhalte darf das Element enthalten?</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Kann das End-Tag weggelassen werden, oder muss es vorhanden sein? Muss es weggelassen werden?
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Welche Elternelemente kann das Element ein Kind von sein? Zum Beispiel "Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert."
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>
        Tragen Sie eine Liste der ARIA-Rollen ein, die auf das Element gesetzt werden können; zum Beispiel
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

_Um dieses Macro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Macro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf das aktuelle Element beziehen. Für weitere Richtlinien, siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Writing style guide_.

- link1
- link2
- external_link (Jahr)

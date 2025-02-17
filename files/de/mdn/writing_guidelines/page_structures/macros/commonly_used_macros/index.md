---
title: Häufig verwendete Makros
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

Diese Seite listet viele der universell einsetzbaren Makros auf, die für die Nutzung auf MDN erstellt wurden.
Für zusätzliche Informationen und Anleitungen zur Nutzung dieser Makros, siehe [Makros verwenden](/de/docs/MDN/Writing_guidelines/Page_structures/Macros).

Weitere Informationen zu selten genutzten, nur in speziellen Kontexten eingesetzten oder veralteten Makros finden Sie unter [Andere Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Other).

## Verlinkung

MDN stellt eine Reihe von Link-Makros bereit, um die Erstellung von Links zu Referenzseiten, Glossareinträgen und anderen Themen zu erleichtern.

Link-Makros werden empfohlen, da sie kompakter und übersetzungsfreundlicher als normale Markdown-Links sind.
Beispielsweise muss ein Glossar- oder Referenzlink, der mithilfe eines Makros erstellt wurde, nicht übersetzt werden: In anderen Sprachversionen wird er automatisch auf die korrekte Datei verweisen.

### Glossar-Links

Das [`Glossary`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossary.rs)-Makro erstellt einen Link zu einem angegebenen Begriffseintrag im MDN-[Glossar](/de/docs/Glossary).
Dieses Makro akzeptiert einen erforderlichen und einen optionalen Parameter:

1. Der Name des Begriffs (z. B. "HTML"): `\{{Glossary("HTML")}}` ergibt {{Glossary("HTML", "HTML")}}.
2. Optional: Der Text, der im Artikel anstelle des Begriffsnamens angezeigt werden soll: `\{{Glossary("CSS", "Cascading Style Sheets")}}` ergibt {{Glossary("CSS", "Cascading Style Sheets")}}.

### Verlinkung von Seiten in Referenzen

Es gibt Makros für sprachunabhängige Verlinkungen zu Seiten in spezifischen Referenzbereichen in MDN: JavaScript, CSS, HTML-Elemente, SVG, usw.

Die Makros sind einfach zu verwenden: In der Regel reicht es aus, den Namen des zu verlinkenden Elements im ersten Parameter anzugeben.
Die meisten Makros akzeptieren außerdem einen zweiten Parameter, um den angezeigten Text zu ändern (Dokumentation ist unter den Links in der linken Spalte nachzulesen).

<table class="standard-table">
  <thead>
    <tr>
      <th>Makro</th>
      <th>Verlinkt auf Seite unter</th>
      <th>Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/cssxref.rs">CSSxRef</a>
      </td>
      <td>
        <a href="/de/docs/Web/CSS/Reference">CSS-Referenz</a> (/Web/CSS/Reference)
      </td>
      <td>
        <code>\{{CSSxRef("cursor")}}</code> ergibt {{CSSxRef("cursor")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/domxref.rs">DOMxRef</a>
      </td>
      <td>
        <a href="/de/docs/Web/API">DOM-Referenz</a> (/Web/API)
      </td>
      <td>
        <code>\{{DOMxRef("Document")}}</code> oder <code>\{{DOMxRef("document")}}</code> ergibt [`Document`](/de/docs/Web/API/Document),<br />
        <code>\{{DOMxRef("document.getElementsByName()")}}</code> ergibt [`document.getElementsByName()`](/de/docs/Web/API/Document/getElementsByName)<br />
        <code>\{{DOMxRef("Node")}}</code> ergibt [`Node`](/de/docs/Web/API/Node).<br />
        Sie können den angezeigten Text mit einem zweiten Parameter ändern: <code>\{{DOMxRef("document.getElementsByName()","getElementsByName()")}}</code> ergibt [`getElementsByName()`](/de/docs/Web/API/Document/getElementsByName).
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs">HTMLElement</a>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Element">HTML-Element-Referenz</a> (/Web/HTML/Element)
      </td>
      <td>
        <code>\{{HTMLElement("select")}}</code> ergibt {{HTMLElement("select")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/jsxref.rs">JSxRef</a>
      </td>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference">JavaScript-Referenz</a> (/Web/JavaScript/Reference).
      </td>
      <td>
        <code>\{{JSxRef("Promise")}}</code> ergibt {{JSxRef("Promise")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgattr.rs">SVGAttr</a>
      </td>
      <td>
        <a href="/de/docs/Web/SVG/Attribute">SVG-Attribut-Referenz</a> (/Web/SVG/Attribute).
      </td>
      <td>
        <code>\{{SVGAttr("d")}}</code> ergibt {{SVGAttr("d")}}
      </td>
    </tr>
    ... (Tabelle setzt sich fort) ...
  </tbody>
</table>

### Navigationshilfen für mehrseitige Leitfäden

[`Previous`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs), [`Next`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) bieten Navigationskontrollen für Artikel, die Teil einer Sequenz sind.
Für die einseitigen Vorlagen ist nur der Wiki-Standort des vorherigen oder nächsten Artikels in der Sequenz erforderlich.
Für [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) sind zwei Parameter erforderlich: der vorherige und der nächste Wiki-Standort.

## Codebeispiele

### Live-Beispiele

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) ermöglicht das Einbetten eines Codebeispiels auf einer Seite, wie in [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) erstellt einen Link zu einer Seite mit der Ausgabe eines Codebeispiels, wie in [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs) ermöglicht das Einbetten von Live-Beispielen von GitHub-Seiten.
  Weitere Informationen finden Sie unter [GitHub Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_live_samples).

... (Abschnitte setzen sich entsprechend fort) ...

---
title: Definitionen mit HTML
slug: Learn_web_development/Howto/Solve_HTML_problems/Define_terms_with_HTML
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubpages("/de/docs/Learn_web_development/Howto/Solve_HTML_problems")}}

HTML bietet mehrere Möglichkeiten, semantische Beschreibungen entweder inline oder als strukturierte Glossare zu vermitteln. In diesem Artikel werden wir behandeln, wie Sie Schlüsselwörter richtig markieren, wenn Sie diese definieren.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten vertraut sein mit der Erstellung eines
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >einfachen HTML-Dokuments</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie man neue Schlüsselwörter einführt und wie man Definitionslisten erstellt.
      </td>
    </tr>
  </tbody>
</table>

Wenn Sie einen Begriff definiert haben möchten, schauen Sie wahrscheinlich sofort in ein Wörterbuch oder Glossar. Wörterbücher und Glossare assoziieren _formal_ Schlüsselwörter mit einer oder mehreren Beschreibungen, wie in diesem Fall:

> - Blau (_Adjektiv_)
>   - : Von einer Farbe wie der Himmel an einem sonnigen Tag.
>     _"Der klare blaue Himmel"_

Aber wir definieren ständig Schlüsselwörter informell, wie hier:

> **Firefox** ist der Webbrowser, der von der Mozilla Foundation entwickelt wurde.

Um mit diesen Anwendungsfällen umzugehen, bietet {{Glossary("HTML", "HTML")}} {{Glossary("tag", "Tags")}} zum Markieren von Beschreibungen und beschriebenen Wörtern, sodass Ihre Bedeutung Ihren Lesern korrekt übermittelt wird.

## Anleitung zur informellen Beschreibung

In Lehrbüchern ist es üblich, das erste Vorkommen eines Schlüsselworts fett zu markieren und es sofort zu definieren.

Das machen wir auch in HTML, außer dass HTML kein visuelles Medium ist und wir deshalb kein Fett verwenden. Wir benutzen {{htmlelement("dfn")}}, ein spezielles Element, das nur zur Markierung des ersten Vorkommens von Schlüsselwörtern dient. Beachten Sie, dass `<dfn>`-Tags um das _zu definierende Wort_ herum gehen, nicht um die Definition (die Definition besteht aus dem gesamten Absatz):

```html
<p><dfn>Firefox</dfn> is the web browser created by the Mozilla Foundation.</p>
```

> [!NOTE]
> Eine andere Verwendung für fett ist, um Inhalte zu betonen. Fett selbst ist ein HTML fremdes Konzept, aber es gibt [Tags zur Angabe von Betonung.](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)

### Sonderfall: Abkürzungen

Es ist am besten, [Abkürzungen speziell zu markieren](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations) mit {{htmlelement("abbr")}}, damit Screenreader sie angemessen vorlesen können und Sie alle Abkürzungen einheitlich behandeln können. Genau wie bei jedem neuen Schlüsselwort sollten Sie Ihre Abkürzungen beim ersten Auftreten definieren.

```html
<p>
  <dfn><abbr>HTML</abbr> (hypertext markup language)</dfn>
  is a description language used to structure documents on the web.
</p>
```

> [!NOTE]
> Die HTML-Spezifikation reserviert tatsächlich [das `title`-Attribut](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element) zur Erweiterung der Abkürzung. Dies ist jedoch keine akzeptable Alternative zur Bereitstellung einer Inline-Erweiterung. Der Inhalt von `title` ist vollständig für Ihre Benutzer verborgen, es sei denn, sie benutzen eine Maus und schweben zufällig über der Abkürzung. Die Spezifikation [erkennt dies ebenfalls an.](https://html.spec.whatwg.org/multipage/dom.html#attr-title)

### Verbesserung der Zugänglichkeit

{{HTMLElement('dfn')}} markiert das definierte Schlüsselwort und zeigt an, dass der aktuelle Absatz das Schlüsselwort definiert. Mit anderen Worten, es besteht eine implizite Beziehung zwischen dem `<dfn>`-Element und seinem Container. Wenn Sie eine formellere Beziehung wünschen oder Ihre Definition aus nur einem Satz anstelle des gesamten Absatzes besteht, können Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)-Attribut verwenden, um einen Begriff formeller mit seiner Definition zu verknüpfen:

```html
<p>
  <span id="ff">
    <dfn aria-describedby="ff">Firefox</dfn>
    is the web browser created by the Mozilla Foundation.
  </span>
  You can download it at <a href="https://www.mozilla.org">mozilla.org</a>
</p>
```

Hilfstechnologien können dieses Attribut häufig nutzen, um eine Textalternative zu einem gegebenen Begriff zu finden. Sie können `aria-describedby` auf jedem Tag verwenden, das ein zu definierendes Schlüsselwort umschließt (nicht nur das `<dfn>`-Element). `aria-describedby` verweist auf die [`id`](/de/docs/Web/HTML/Global_attributes/id) des Elements, das die Beschreibung enthält.

## Anleitung zum Erstellen einer Definitionsliste

Definitionslisten sind genau das, was sie behaupten zu sein: eine Liste von Begriffen und ihren passenden Beschreibungen (z. B. Definitionslisten, Wörterbucheinträge, FAQs und Schlüssel-Wert-Paare).

> [!NOTE]
> Definitionslisten sind [nicht geeignet für die Auszeichnung von Dialogen,](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element) da Gespräche die Sprecher nicht direkt beschreiben. Hier sind [Empfehlungen zur Auszeichnung von Dialogen](https://html.spec.whatwg.org/multipage/semantics-other.html#conversations).

Die beschriebenen Begriffe gehen in {{htmlelement("dt")}}-Elemente. Die passende Beschreibung folgt unmittelbar und ist in einem oder mehreren {{htmlelement("dd")}}-Elementen enthalten. Umgeben Sie die gesamte Definitionsliste mit einem {{htmlelement("dl")}}-Element.

### Ein einfaches Beispiel

Hier ist ein Beispiel, das Arten von Lebensmitteln und Getränken beschreibt:

```html
<dl>
  <dt>jambalaya</dt>
  <dd>
    rice-based entree typically containing chicken, sausage, seafood, and spices
  </dd>

  <dt>sukiyaki</dt>
  <dd>
    Japanese specialty consisting of thinly sliced meat, vegetables, and
    noodles, cooked in sake and soy sauce
  </dd>

  <dt>chianti</dt>
  <dd>dry Italian red wine originating in Tuscany</dd>
</dl>
```

> [!NOTE]
> Das grundlegende Muster, wie Sie sehen können, besteht darin, `<dt>`-Begriffe mit `<dd>`-Beschreibungen abzuwechseln. Wenn zwei oder mehr Begriffe hintereinander vorkommen, gilt die folgende Beschreibung für alle. Wenn zwei oder mehr Beschreibungen hintereinander vorkommen, gelten sie alle für den zuletzt angegebenen Begriff.

### Verbesserung der visuellen Ausgabe

So zeigt ein grafischer Browser die obige Liste an:

{{EmbedLiveSample("A_simple_example", 600, 180)}}

Wenn Sie möchten, dass die Schlüsselwörter besser hervorstechen, können Sie versuchen, sie fett zu markieren. Denken Sie daran, HTML ist kein visuelles Medium; wir benötigen {{Glossary("CSS", "CSS")}} für alle visuellen Effekte. Die CSS-Eigenschaft {{cssxref("font-weight")}} ist hier das, was Sie benötigen:

```css
dt {
  font-weight: bold;
}
```

Dies ergibt das unten leicht besser lesbare Ergebnis:

{{EmbedLiveSample("How_to_build_a_description_list", 600, 180)}}

## Mehr erfahren

- {{htmlelement("dfn")}}
- {{htmlelement("dl")}}
- {{htmlelement("dt")}}
- {{htmlelement("dd")}}
- [Anleitung zur Verwendung des aria-describedby-Attributes](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)

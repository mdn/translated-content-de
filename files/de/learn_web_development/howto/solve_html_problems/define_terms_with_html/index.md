---
title: Begriffe mit HTML definieren
slug: Learn_web_development/Howto/Solve_HTML_problems/Define_terms_with_HTML
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{QuickLinksWithSubpages("/de/docs/Learn_web_development/Howto/Solve_HTML_problems")}}

HTML bietet mehrere Möglichkeiten, semantische Beschreibungen zu vermitteln, sei es inline oder als strukturierte Glossare. In diesem Artikel behandeln wir, wie Sie Schlüsselwörter richtig auszeichnen, wenn Sie diese definieren.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten mit der Erstellung eines
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >einfachen HTML-Dokuments</a
        >
        vertraut sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Lernen, wie man neue Schlüsselwörter einführt und Beschreibungslisten erstellt.
      </td>
    </tr>
  </tbody>
</table>

Wenn Sie eine Definition für einen Begriff benötigen, greifen Sie wahrscheinlich direkt zu einem Wörterbuch oder Glossar. Wörterbücher und Glossare verknüpfen Schlüsselwörter _formell_ mit einer oder mehreren Beschreibungen, wie in diesem Beispiel:

> - Blau (_Adjektiv_)
>   - : Von einer Farbe wie der Himmel an einem sonnigen Tag.
>     _"Der klare blaue Himmel"_

Aber wir definieren ständig informell Schlüsselwörter, so wie hier:

> **Firefox** ist der Webbrowser, der von der Mozilla Foundation entwickelt wurde.

Um mit diesen Anwendungsfällen umzugehen, bietet {{Glossary("HTML", "HTML")}} {{Glossary("tag", "Tags")}}, um Beschreibungen und beschriebene Wörter zu markieren, damit Ihre Bedeutung Ihren Lesern richtig vermittelt wird.

## Anleitung zur Markierung informeller Beschreibungen

In Lehrbüchern wird das erste Vorkommen eines Schlüsselworts häufig fettgedruckt und sofort definiert.

Wir tun das in HTML auch, außer dass HTML kein visuelles Medium ist und wir daher kein Fett verwenden. Wir benutzen {{htmlelement("dfn")}}, ein spezielles Element, das ausschließlich zum Markieren des ersten Vorkommens von Schlüsselwörtern dient. Beachten Sie, dass `<dfn>`-Tags das _zu definierende Wort_ und nicht die Definition umschließen (die Definition besteht aus dem gesamten Absatz):

```html
<p><dfn>Firefox</dfn> is the web browser created by the Mozilla Foundation.</p>
```

> [!NOTE]
> Eine andere Verwendung von Fettdruck ist, um Inhalte zu betonen. Fett an sich ist ein Konzept, das HTML fremd ist, aber es gibt [Tags, um Betonung zu kennzeichnen.](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)

### Sonderfall: Abkürzungen

Es ist am besten, [Abkürzungen speziell zu markieren](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations) mit {{htmlelement("abbr")}}, damit Bildschirmlesegeräte sie angemessen lesen und Sie alle Abkürzungen einheitlich behandeln können. Genau wie bei jedem neuen Schlüsselwort sollten Sie Ihre Abkürzungen das erste Mal definieren, wenn sie auftreten.

```html
<p>
  <dfn><abbr>HTML</abbr> (hypertext markup language)</dfn>
  is a description language used to structure documents on the web.
</p>
```

> [!NOTE]
> Die HTML-Spezifikation legt tatsächlich [das `title`-Attribut](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element) bereit, um die Abkürzung zu erweitern. Dies ist jedoch keine akzeptable Alternative, um eine Inline-Erweiterung bereitzustellen. Der Inhalt von `title` ist für Ihre Nutzer vollständig verborgen, es sei denn, sie verwenden eine Maus und schweben zufällig über der Abkürzung. Die Spezifikation [bestätigt dies auch.](https://html.spec.whatwg.org/multipage/dom.html#attr-title)

### Verbesserung der Zugänglichkeit

{{HTMLElement('dfn')}} kennzeichnet das definierte Schlüsselwort und gibt an, dass der aktuelle Absatz das Schlüsselwort definiert. Mit anderen Worten, es besteht eine implizite Beziehung zwischen dem `<dfn>`-Element und seinem Container. Wenn Sie eine formellere Beziehung oder Ihre Definition nur aus einem Satz anstatt des gesamten Absatzes besteht, können Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut verwenden, um einen Begriff formeller mit seiner Definition zu verknüpfen:

```html
<p>
  <span id="ff">
    <dfn aria-describedby="ff">Firefox</dfn>
    is the web browser created by the Mozilla Foundation.
  </span>
  You can download it at <a href="https://www.mozilla.org">mozilla.org</a>
</p>
```

Assistive Technologien können dieses Attribut oft verwenden, um eine Textalternative zu einem bestimmten Begriff zu finden. Sie können `aria-describedby` auf jedem Tag verwenden, das ein zu definierendes Schlüsselwort einschließt (nicht nur das `<dfn>`-Element). `aria-describedby` verweist auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Elements, das die Beschreibung enthält.

## Anleitung zur Erstellung einer Beschreibungslisten

Beschreibungslisten sind genau das, was sie vorgeben zu sein: eine Liste von Begriffen und ihren passenden Beschreibungen (z. B. Definitionslisten, Lexikoneinträge, FAQs und Schlüssel-Wert-Paare).

> [!NOTE]
> Beschreibungslisten sind [nicht geeignet für die Markierung von Dialogen,](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element) da Konversationen die Sprecher nicht direkt beschreiben. Hier sind [Empfehlungen zur Markierung von Dialogen](https://html.spec.whatwg.org/multipage/semantics-other.html#conversations).

Die beschriebenen Begriffe stehen in {{htmlelement("dt")}}-Elementen. Die passende Beschreibung folgt unmittelbar und ist in einem oder mehreren {{htmlelement("dd")}}-Elementen enthalten. Umgeben Sie die ganze Beschreibungslisten mit einem {{htmlelement("dl")}}-Element.

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
> Das grundlegende Muster, wie Sie sehen können, ist die Abwechslung von `<dt>`-Begriffen mit `<dd>`-Beschreibungen. Wenn zwei oder mehr Begriffe in einer Reihe auftreten, gilt die folgende Beschreibung für alle von ihnen. Wenn zwei oder mehr Beschreibungen nacheinander auftreten, gelten sie alle für den zuletzt angegebenen Begriff.

### Verbesserung der visuellen Ausgabe

So zeigt ein grafischer Browser die obige Liste an:

{{EmbedLiveSample("A_simple_example", 600, 180)}}

Wenn Sie möchten, dass die Schlüsselwörter besser hervorstechen, können Sie versuchen, sie fett zu formatieren. Denken Sie daran, HTML ist kein visuelles Medium; wir benötigen {{Glossary("CSS", "CSS")}} für alle visuellen Effekte. Hierfür benötigen Sie die CSS-Eigenschaft {{cssxref("font-weight")}}:

```css
dt {
  font-weight: bold;
}
```

Dies ergibt das untenstehende etwas besser lesbare Ergebnis:

{{EmbedLiveSample("How_to_build_a_description_list", 600, 180)}}

## Mehr erfahren

- {{htmlelement("dfn")}}
- {{htmlelement("dl")}}
- {{htmlelement("dt")}}
- {{htmlelement("dd")}}
- [Wie man das aria-describedby-Attribut verwendet](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)

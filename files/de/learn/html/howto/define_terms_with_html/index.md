---
title: Begriffe mit HTML definieren
slug: Learn/HTML/Howto/Define_terms_with_HTML
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{QuickLinksWithSubpages("/de/docs/Learn/HTML/Howto")}}

HTML bietet mehrere Möglichkeiten, um Beschreibungselemente darzustellen, sei es inline oder in Form von strukturierten Glossaren. In diesem Artikel behandeln wir, wie Sie Schlüsselwörter richtig markieren, wenn Sie sie definieren.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten damit vertraut sein,
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >ein einfaches HTML-Dokument zu erstellen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Lernen Sie, wie neue Schlüsselwörter eingeführt und Beschreibungslisten erstellt werden.
      </td>
    </tr>
  </tbody>
</table>

Wenn Sie einen Begriff definiert haben möchten, greifen Sie wahrscheinlich direkt auf ein Wörterbuch oder Glossar zurück. Wörterbücher und Glossare assoziieren _formal_ Schlüsselwörter mit einer oder mehreren Beschreibungen, wie in diesem Fall:

> - Blau (_Adjektiv_)
>   - : Von einer Farbe wie der Himmel an einem sonnigen Tag.
>     _"Der klare blaue Himmel"_

Aber wir definieren ständig Wörter informell, wie hier:

> **Firefox** ist der Webbrowser, der von der Mozilla Foundation erstellt wurde.

Um mit diesen Anwendungsfällen umzugehen, bietet [HTML](/de/docs/Glossary/HTML) [Tags](/de/docs/Glossary/tag) an, um Beschreibungen und beschriebene Wörter zu markieren, sodass Ihre Bedeutung für Ihre Leser richtig vermittelt wird.

## Anleitung zur Markierung informeller Beschreibungen

In Lehrbüchern ist es üblich, dass beim ersten Auftreten eines Schlüsselworts dieses fettgedruckt hervorgehoben und sofort definiert wird.

Das machen wir auch in HTML, nur dass HTML kein visuelles Medium ist und wir daher kein Fettgedruckt verwenden. Wir verwenden {{htmlelement("dfn")}}, ein spezielles Element, nur um das erste Vorkommen von Schlüsselwörtern zu markieren. Beachten Sie, dass `<dfn>`-Tags um das _zu definierende Wort_ und nicht um die Definition verwendet werden (die Definition besteht aus dem gesamten Absatz):

```html
<p><dfn>Firefox</dfn> is the web browser created by the Mozilla Foundation.</p>
```

> [!NOTE]
> Eine andere Verwendung für Fettgedruckt ist die Betonung von Inhalten. Fettgedruckt selbst ist ein fremdes Konzept für HTML, aber es gibt [Tags zur Kennzeichnung von Betonung.](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#emphasis_and_importance)

### Spezialfall: Abkürzungen

Es ist am besten, [Abkürzungen speziell zu markieren](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#abbreviations) mit {{htmlelement("abbr")}}, damit Screenreader sie angemessen lesen und Sie alle Abkürzungen einheitlich bearbeiten können. Genau wie bei jedem neuen Schlüsselwort sollten Sie Ihre Abkürzungen beim ersten Auftreten definieren.

```html
<p>
  <dfn><abbr>HTML</abbr> (hypertext markup language)</dfn>
  is a description language used to structure documents on the web.
</p>
```

> [!NOTE]
> Die HTML-Spezifikation [reserviert tatsächlich das `title`-Attribut](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element) für die Erweiterung der Abkürzung. Dies ist jedoch keine akzeptable Alternative zur Bereitstellung einer Inline-Erweiterung. Der Inhalt von `title` ist vollständig vor Ihren Benutzern verborgen, es sei denn, sie verwenden eine Maus und bewegen diese zufällig über die Abkürzung. Die Spezifikation erkennt dies auch [entsprechend an.](https://html.spec.whatwg.org/multipage/dom.html#attr-title)

### Zugänglichkeit verbessern

{{HTMLElement('dfn')}} markiert das definierte Schlüsselwort und zeigt an, dass der aktuelle Absatz das Schlüsselwort definiert. Mit anderen Worten, es gibt eine implizite Beziehung zwischen dem `<dfn>`-Element und seinem Container. Wenn Sie eine formalere Beziehung wünschen oder Ihre Definition aus nur einem Satz anstatt des gesamten Absatzes besteht, können Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)-Attribut verwenden, um einen Begriff formeller mit seiner Definition zu verknüpfen:

```html
<p>
  <span id="ff">
    <dfn aria-describedby="ff">Firefox</dfn>
    is the web browser created by the Mozilla Foundation.
  </span>
  You can download it at <a href="https://www.mozilla.org">mozilla.org</a>
</p>
```

Hilfstechnologien können dieses Attribut oft verwenden, um eine Textalternative zu einem bestimmten Begriff zu finden. Sie können `aria-describedby` auf jedem Tag verwenden, das ein zu definierendes Schlüsselwort umschließt (nicht nur das `<dfn>`-Element). `aria-describedby` verweist auf die [`id`](/de/docs/Web/HTML/Global_attributes#id) des Elements, das die Beschreibung enthält.

## Anleitung zur Erstellung einer Beschreibungslisten

Beschreibungslisten sind genau das, was sie versprechen: eine Liste von Begriffen und ihren dazugehörigen Beschreibungen (z. B. Definitionslisten, Wörterbucheinträge, FAQs und Schlüssel-Wert-Paare).

> [!NOTE]
> Beschreibungslisten sind [nicht geeignet für die Auszeichnung von Dialogen,](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element) da Gespräche die Sprecher nicht direkt beschreiben. Hier sind [Empfehlungen zur Auszeichnung von Dialogen](https://html.spec.whatwg.org/multipage/semantics-other.html#conversations).

Die beschriebenen Begriffe gehen in {{htmlelement("dt")}}-Elemente. Die dazugehörige Beschreibung folgt sofort, enthalten in einem oder mehreren {{htmlelement("dd")}}-Elementen. Umgeben Sie die gesamte Beschreibungslisten mit einem {{htmlelement("dl")}}-Element.

### Ein einfaches Beispiel

Hier ist ein einfaches Beispiel, das Arten von Lebensmitteln und Getränken beschreibt:

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
> Das grundlegende Muster, wie Sie sehen können, besteht darin, `<dt>`-Begriffe mit `<dd>`-Beschreibungen abzuwechseln. Wenn zwei oder mehr Begriffe hintereinander auftreten, gilt die folgende Beschreibung für alle von ihnen. Wenn zwei oder mehr Beschreibungen hintereinander auftauchen, beziehen sie sich alle auf den zuletzt genannten Begriff.

### Verbesserung der visuellen Ausgabe

So zeigt ein grafischer Browser die oben angegebene Liste an:

{{EmbedLiveSample("A_simple_example", 600, 180)}}

Wenn Sie möchten, dass die Schlüsselwörter besser hervorgehoben werden, könnten Sie versuchen, sie fett zu machen. Denken Sie daran, HTML ist kein visuelles Medium; wir benötigen [CSS](/de/docs/Glossary/CSS) für alle visuellen Effekte. Die CSS-Eigenschaft {{cssxref("font-weight")}} ist hier, was Sie brauchen:

```css
dt {
  font-weight: bold;
}
```

Dies ergibt das etwas besser lesbare Ergebnis unten:

{{EmbedLiveSample("How_to_build_a_description_list", 600, 180)}}

## Mehr erfahren

- {{htmlelement("dfn")}}
- {{htmlelement("dl")}}
- {{htmlelement("dt")}}
- {{htmlelement("dd")}}
- [Anleitung zur Verwendung des aria-describedby-Attributs](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)

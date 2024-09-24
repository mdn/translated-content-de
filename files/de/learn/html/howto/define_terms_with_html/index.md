---
title: Begriffe mit HTML definieren
slug: Learn/HTML/Howto/Define_terms_with_HTML
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{QuickLinksWithSubpages("/de/docs/Learn/HTML/Howto")}}

HTML bietet mehrere Möglichkeiten, beschreibende Semantik zu vermitteln, sei es inline oder als strukturierte Glossare. In diesem Artikel werden wir behandeln, wie Sie Schlüsselwörter richtig markieren, wenn Sie sie definieren.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten damit vertraut sein, wie man
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >ein einfaches HTML-Dokument erstellt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie man neue Schlüsselwörter einführt und wie man Beschreibungslisten erstellt.
      </td>
    </tr>
  </tbody>
</table>

Wenn Sie einen Begriff definiert haben möchten, gehen Sie wahrscheinlich direkt zu einem Wörterbuch oder Glossar. Wörterbücher und Glossare verknüpfen Schlüsselwörter _formell_ mit einer oder mehreren Beschreibungen, wie in diesem Fall:

> - Blau (_Adjektiv_)
>   - : Von einer Farbe wie der Himmel an einem sonnigen Tag.
>     _"Der klare blaue Himmel"_

Aber wir definieren ständig informell Schlüsselwörter, wie hier:

> **Firefox** ist der Webbrowser, der von der Mozilla Foundation erstellt wurde.

Um mit diesen Anwendungsfällen umzugehen, bietet {{Glossary("HTML")}} {{Glossary("tag", "tags")}}, um Beschreibungen und beschriebene Wörter zu kennzeichnen, sodass Ihre Bedeutung für Ihre Leser ordnungsgemäß vermittelt wird.

## Wie man eine informelle Beschreibung markiert

In Lehrbüchern ist es üblich, das Schlüsselwort beim ersten Vorkommen fett darzustellen und es sofort zu definieren.

Das tun wir auch in HTML, außer dass HTML kein visuelles Medium ist und wir daher kein Fett verwenden. Wir verwenden {{htmlelement("dfn")}}, welches ein spezielles Element ist, um das erste Vorkommen von Schlüsselwörtern zu markieren. Beachten Sie, dass `<dfn>`-Tags den _zu definierenden Begriff_ umgeben, nicht die Definition (die Definition besteht aus dem gesamten Absatz):

```html
<p><dfn>Firefox</dfn> ist der Webbrowser, der von der Mozilla Foundation erstellt wurde.</p>
```

> [!NOTE]
> Ein weiterer Anwendungsfall für Fett ist, um Inhalte zu betonen. Fett selbst ist ein HTML-fremdes Konzept, aber es gibt [Tags, um Betonung anzuzeigen.](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#emphasis_and_importance)

### Sonderfall: Abkürzungen

Es ist am besten, [Abkürzungen speziell zu markieren](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#abbreviations) mit {{htmlelement("abbr")}}, sodass Bildschirmleser sie angemessen lesen und Sie auf alle Abkürzungen einheitlich zugreifen können. Genau wie bei jedem neuen Schlüsselwort sollten Sie Ihre Abkürzungen beim ersten Vorkommen definieren.

```html
<p>
  <dfn><abbr>HTML</abbr> (hypertext markup language)</dfn>
  ist eine Beschreibungssprache, die zum Strukturieren von Dokumenten im Web verwendet wird.
</p>
```

> [!NOTE]
> Die HTML-Spezifikation [reserviert tatsächlich das `title`-Attribut](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element) für die Erweiterung der Abkürzung. Dies ist jedoch keine akzeptable Alternative, um eine Inline-Erweiterung bereitzustellen. Der Inhalt von `title` ist vollständig vor Ihren Benutzern verborgen, es sei denn, sie verwenden eine Maus und halten zufällig über der Abkürzung. Die Spezifikation erkennt dies ebenfalls an.](https://html.spec.whatwg.org/multipage/dom.html#attr-title)

### Barrierefreiheit verbessern

{{HTMLElement('dfn')}} markiert das definierte Schlüsselwort und zeigt an, dass der aktuelle Absatz das Schlüsselwort definiert. Mit anderen Worten, es besteht eine implizite Beziehung zwischen dem `<dfn>`-Element und seinem Container. Wenn Sie eine formellere Beziehung wünschen oder Ihre Definition nur aus einem Satz anstatt des ganzen Absatzes besteht, können Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) Attribut verwenden, um einen Begriff formeller mit seiner Definition zu verknüpfen:

```html
<p>
  <span id="ff">
    <dfn aria-describedby="ff">Firefox</dfn>
    ist der Webbrowser, der von der Mozilla Foundation erstellt wurde.
  </span>
  Sie können es unter <a href="https://www.mozilla.org">mozilla.org</a> herunterladen.
</p>
```

Hilfstechnologien können dieses Attribut oft verwenden, um eine Textalternative zu einem bestimmten Begriff zu finden. Sie können `aria-describedby` auf jedem Tag verwenden, das ein zu definierendes Schlüsselwort einschließt (nicht nur auf dem `<dfn>`-Element). `aria-describedby` verweist auf die [`id`](/de/docs/Web/HTML/Global_attributes#id) des Elements, das die Beschreibung enthält.

## Wie man eine Beschreibungslist erstellt

Beschreibungslisten sind genau das, was sie zu sein vorgeben: eine Liste von Begriffen und deren passenden Beschreibungen (z. B. Definitionslisten, Wörterbucheinträge, FAQs und Schlüssel-Wert-Paare).

> [!NOTE]
> Beschreibungslisten sind [nicht geeignet zum Markieren von Dialogen,](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element) weil Konversation nicht direkt die Sprecher beschreibt. Hier sind [Empfehlungen zum Markieren von Dialogen.](https://html.spec.whatwg.org/multipage/semantics-other.html#conversations)

Die beschriebenen Begriffe werden in {{htmlelement("dt")}} Elementen platziert. Die passende Beschreibung folgt sofort, eingeschlossen in einem oder mehreren {{htmlelement("dd")}} Elementen. Umfassen Sie die gesamte Beschreibungslist mit einem {{htmlelement("dl")}} Element.

### Ein einfaches Beispiel

Hier ist ein einfaches Beispiel, das Arten von Speisen und Getränken beschreibt:

```html
<dl>
  <dt>jambalaya</dt>
  <dd>
    Reis-basierte Hauptspeise, die typischerweise Huhn, Wurst, Meeresfrüchte und Gewürze enthält
  </dd>

  <dt>sukiyaki</dt>
  <dd>
    Japanische Spezialität bestehend aus dünn geschnittenem Fleisch, Gemüse, und
    Nudeln, gekocht in Sake und Sojasauce
  </dd>

  <dt>chianti</dt>
  <dd>Trockener italienischer Rotwein aus der Region Toskana</dd>
</dl>
```

> [!NOTE]
> Das grundlegende Muster, wie Sie sehen können, ist, `<dt>` Begriffe mit `<dd>` Beschreibungen abzuwechseln. Wenn zwei oder mehr Begriffe hintereinander auftreten, gilt die folgende Beschreibung für alle von ihnen. Wenn zwei oder mehr Beschreibungen hintereinander auftreten, gelten sie alle für den zuletzt genannten Begriff.

### Verbesserung der visuellen Darstellung

So zeigt ein grafischer Browser die vorstehende Liste an:

{{EmbedLiveSample("A_simple_example", 600, 180)}}

Wenn Sie möchten, dass die Schlüsselwörter besser zur Geltung kommen, könnten Sie versuchen, sie fett zu machen. Denken Sie daran, HTML ist kein visuelles Medium; wir benötigen {{glossary("CSS")}} für alle visuellen Effekte. Die CSS-{{cssxref("font-weight")}}-Eigenschaft ist, was Sie hier benötigen:

```css
dt {
  font-weight: bold;
}
```

Dies führt zu dem etwas besser lesbaren Ergebnis unten:

{{EmbedLiveSample("How_to_build_a_description_list", 600, 180)}}

## Mehr erfahren

- {{htmlelement("dfn")}}
- {{htmlelement("dl")}}
- {{htmlelement("dt")}}
- {{htmlelement("dd")}}
- [Wie man das aria-describedby-Attribut verwendet](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)

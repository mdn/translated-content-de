---
title: "<bdi>: Das Bidirektionale Isolationselement"
slug: Web/HTML/Reference/Elements/bdi
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<bdi>`**-[HTML](/de/docs/Web/HTML)-Element weist den bidirektionalen Algorithmus des Browsers an, den enthaltenen Text isoliert von seinem umgebenden Text zu behandeln. Dies ist besonders nützlich, wenn eine Website dynamisch Text einfügt und die Richtung des eingefügten Textes nicht bekannt ist.

{{InteractiveExample("HTML Demo: &lt;bdi&gt;", "tabbed-standard")}}

```html interactive-example
<h1>World wrestling championships</h1>

<ul>
  <li><bdi class="name">Evil Steven</bdi>: 1st place</li>
  <li><bdi class="name">François fatale</bdi>: 2nd place</li>
  <li><span class="name">سما</span>: 3rd place</li>
  <li><bdi class="name">الرجل القوي إيان</bdi>: 4th place</li>
  <li><span class="name" dir="auto">سما</span>: 5th place</li>
</ul>
```

```css interactive-example
html {
  font-family: sans-serif;
}

bdi {
  /* Add your styles here */
}

.name {
  color: red;
}
```

Bidirektionaler Text ist Text, der sowohl Zeichenfolgen enthalten kann, die von links nach rechts (LTR) als auch von rechts nach links (RTL) angeordnet sind, wie zum Beispiel ein in einen englischen Text eingebettetes arabisches Zitat. Browser implementieren den [Unicode-Bidirektionalen Algorithmus](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics), um damit umzugehen. In diesem Algorithmus wird den Zeichen eine implizite Richtung zugewiesen: Zum Beispiel werden lateinische Zeichen als LTR behandelt, während arabische Zeichen als RTL behandelt werden. Einige andere Zeichen (wie Leerzeichen und einige Satzzeichen) werden als neutral behandelt und erhalten eine Richtung, die von den sie umgebenden Zeichen abhängt.

Normalerweise wird der bidirektionale Algorithmus das Richtige tun, ohne dass der Autor spezielles Markup bereitstellen muss, aber gelegentlich benötigt der Algorithmus Hilfe. Genau hier kommt `<bdi>` ins Spiel.

Das `<bdi>`-Element wird verwendet, um einen Textbereich zu umschließen und den bidirektionalen Algorithmus anzuweisen, diesen Text isoliert von seiner Umgebung zu behandeln. Dies funktioniert auf zwei Arten:

- Die Richtung des im `<bdi>` eingebetteten Textes _beeinflusst nicht_ die Richtung des umgebenden Textes.
- Die Richtung des im `<bdi>` eingebetteten Textes _wird nicht durch_ die Richtung des umgebenden Textes beeinflusst.

Zum Beispiel, betrachten wir folgenden Text:

```plain
EMBEDDED-TEXT - 1st place
```

Wenn `EMBEDDED-TEXT` LTR ist, funktioniert dies einwandfrei. Aber wenn `EMBEDDED-TEXT` RTL ist, wird `- 1` als RTL-Text behandelt (weil es aus neutralen und schwachen Zeichen besteht). Das Ergebnis wird unleserlich sein:

```plain
1 - EMBEDDED-TEXTst place
```

Wenn Sie die Richtung von `EMBEDDED-TEXT` im Voraus kennen, können Sie dieses Problem lösen, indem Sie `EMBEDDED-TEXT` in ein {{HTMLElement("span")}} mit dem [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)-Attribut, das auf die bekannte Richtung eingestellt ist, einbetten. Aber wenn Sie die Richtung nicht kennen - beispielsweise, weil `EMBEDDED-TEXT` aus einer Datenbank gelesen oder vom Benutzer eingegeben wird - sollten Sie `<bdi>` verwenden, um zu verhindern, dass die Richtung von `EMBEDDED-TEXT` seine Umgebung beeinflusst.

Obwohl derselbe visuelle Effekt mit der CSS-Regel {{cssxref("unicode-bidi", "unicode-bidi: isolate")}} auf einem {{HTMLElement("span")}} oder einem anderen Textformatierungselement erreicht werden kann, sollten HTML-Autoren diesen Ansatz nicht verwenden, da er nicht semantisch ist und Browser das CSS-Design ignorieren dürfen.

Das Einbetten der Zeichen in `<span dir="auto">` hat denselben Effekt wie die Verwendung von `<bdi>`, aber seine Semantik ist weniger klar.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes), außer dass das [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)-Attribut anders als gewöhnlich funktioniert: Es ist standardmäßig auf `auto` gesetzt, das bedeutet, dass der Wert niemals vom übergeordneten Element geerbt wird. Dies bedeutet, dass, sofern Sie keinen Wert von entweder `rtl` oder `ltr` für `dir` angeben, der {{Glossary("user_agent", "User-Agent")}} die korrekte Richtung basierend auf dem Inhalt des `<bdi>` bestimmt.

## Beispiele

### Kein bdi nur mit LTR

Dieses Beispiel listet die Gewinner eines Wettbewerbs unter Verwendung von {{HTMLElement("span")}}-Elementen auf. Wenn die Namen nur LTR-Text enthalten, sehen die Ergebnisse gut aus:

```html
<ul>
  <li><span class="name">Henrietta Boffin</span> - 1st place</li>
  <li><span class="name">Jerry Cruncher</span> - 2nd place</li>
</ul>
```

```css hidden
body {
  border: 1px solid #3f87a6;
  max-width: calc(100% - 40px - 6px);
  padding: 20px;
  width: calc(100% - 40px - 6px);
  border-width: 1px 1px 1px 5px;
}
```

{{EmbedLiveSample('No_bdi_with_only_LTR','','120')}}

### Kein bdi mit RTL-Text

Dieses Beispiel listet die Gewinner eines Wettbewerbs unter Verwendung von {{HTMLElement("span")}}-Elementen auf, und einer der Gewinner hat einen Namen, der aus RTL-Text besteht. In diesem Fall wird das `- 1`, das aus Zeichen mit neutraler oder schwacher Richtung besteht, die Richtung des RTL-Textes übernehmen und das Ergebnis wird unleserlich sein:

```html
<ul>
  <li><span class="name">اَلأَعْشَى</span> - 1st place</li>
  <li><span class="name">Jerry Cruncher</span> - 2nd place</li>
</ul>
```

```css hidden
body {
  border: 1px solid #3f87a6;
  max-width: calc(100% - 40px - 6px);
  padding: 20px;
  width: calc(100% - 40px - 6px);
  border-width: 1px 1px 1px 5px;
}
```

{{EmbedLiveSample('No_bdi_with_RTL_text','','120')}}

### Verwendung von bdi mit LTR- und RTL-Text

Dieses Beispiel listet die Gewinner eines Wettbewerbs unter Verwendung von `<bdi>`-Elementen auf. Diese Elemente weisen den Browser an, den Namen isoliert von seinem Einbettungskontext zu behandeln, sodass die Beispielausgabe korrekt angeordnet ist:

```html
<ul>
  <li><bdi class="name">اَلأَعْشَى</bdi> - 1st place</li>
  <li><bdi class="name">Jerry Cruncher</bdi> - 2nd place</li>
</ul>
```

```css hidden
body {
  border: 1px solid #3f87a6;
  max-width: calc(100% - 40px - 6px);
  padding: 20px;
  width: calc(100% - 40px - 6px);
  border-width: 1px 1px 1px 5px;
}
```

{{EmbedLiveSample('Using_bdi_with_LTR_and_RTL_text','','120')}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungselemente</a>, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierter Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasierter Inhalt</a>
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generisch</a
          ></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Inline-Markup und bidirektionaler Text in HTML](https://www.w3.org/International/articles/inline-bidi-markup/)
- [Grundlagen des Unicode-Bidirektionalen Algorithmus](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics)
- {{Glossary("Localization", "Lokalisierung")}}
- Verwandtes HTML-Element: {{HTMLElement("bdo")}}
- Verwandte CSS-Eigenschaften: {{cssxref("direction")}}, {{cssxref("unicode-bidi")}}

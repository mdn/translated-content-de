---
title: "<bdi>: Das Bidirectional Isolate-Element"
slug: Web/HTML/Reference/Elements/bdi
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<bdi>`**-[HTML](/de/docs/Web/HTML)-Element weist den bidirektionalen Algorithmus des Browsers an, den darin enthaltenen Text isoliert von seinem umgebenden Text zu behandeln. Dies ist besonders nützlich, wenn eine Website Text dynamisch einfügt und die Richtung des eingefügten Textes nicht bekannt ist.

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

Bidirektionaler Text ist Text, der sowohl Zeichenfolgen enthalten kann, die von links nach rechts (LTR) als auch solche, die von rechts nach links (RTL) angeordnet sind, wie etwa ein arabisches Zitat eingebettet in einen englischen String. Browser implementieren den [Unicode Bidirectional Algorithm](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics), um dies zu handhaben. In diesem Algorithmus wird den Zeichen eine implizite Richtung zugewiesen: Beispielsweise werden lateinische Zeichen als LTR und arabische Zeichen als RTL behandelt. Einige andere Zeichen (wie Leerzeichen und einige Satzzeichen) werden als neutral behandelt und erhalten eine Richtung basierend auf den sie umgebenden Zeichen.

Normalerweise wird der bidirektionale Algorithmus die richtige Funktion ausführen, ohne dass der Autor spezielles Markup bereitstellen muss, aber gelegentlich benötigt der Algorithmus Unterstützung. Genau hier kommt `<bdi>` ins Spiel.

Das `<bdi>`-Element wird verwendet, um einen Textabschnitt zu umschließen und den bidirektionalen Algorithmus anzuweisen, diesen Text isoliert von seiner Umgebung zu behandeln. Dies funktioniert auf zwei Arten:

- Die Richtung des in `<bdi>` eingebetteten Textes _beeinflusst nicht_ die Richtung des umgebenden Textes.
- Die Richtung des in `<bdi>` eingebetteten Textes _wird nicht von_ der Richtung des umgebenden Textes beeinflusst.

Betrachten Sie zum Beispiel einen Text wie:

```plain
EMBEDDED-TEXT - 1st place
```

Wenn `EMBEDDED-TEXT` LTR ist, funktioniert dies einwandfrei. Aber wenn `EMBEDDED-TEXT` RTL ist, dann wird `- 1` als RTL-Text behandelt (weil es aus neutralen und schwachen Zeichen besteht). Das Ergebnis wird daher unverständlich sein:

```plain
1 - EMBEDDED-TEXTst place
```

Wenn Sie die Richtung von `EMBEDDED-TEXT` im Voraus kennen, können Sie dieses Problem beheben, indem Sie `EMBEDDED-TEXT` in ein {{HTMLElement("span")}} mit dem [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)-Attribut einbetten, das auf die bekannte Richtung eingestellt ist. Aber wenn Sie die Richtung nicht kennen - zum Beispiel, weil `EMBEDDED-TEXT` aus einer Datenbank gelesen oder vom Benutzer eingegeben wird - sollten Sie `<bdi>` verwenden, um zu verhindern, dass die Richtung von `EMBEDDED-TEXT` seine Umgebung beeinflusst.

Obwohl derselbe visuelle Effekt durch die Verwendung der CSS-Regel {{cssxref("unicode-bidi", "unicode-bidi: isolate")}} auf einem {{HTMLElement("span")}} oder einem anderen Textformatierungselement erreicht werden kann, sollten HTML-Autoren diesen Ansatz nicht verwenden, da er nicht semantisch ist und die Browser CSS-Styling ignorieren dürfen.

Das Einbetten der Zeichen in `<span dir="auto">` hat denselben Effekt wie die Verwendung von `<bdi>`, aber seine Semantik ist weniger klar.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes), mit der Ausnahme, dass sich das [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)-Attribut anders verhält als normal: Es ist standardmäßig auf `auto` eingestellt, was bedeutet, dass sein Wert niemals vom Elternelement geerbt wird. Dies bedeutet, dass der {{Glossary("user_agent", "user agent")}}, wenn Sie keinen Wert von entweder `rtl` oder `ltr` für `dir` angeben, die richtige Richtung basierend auf dem Inhalt von `<bdi>` bestimmt.

## Beispiele

### Keine Nutzung von bdi mit nur LTR

Dieses Beispiel listet die Gewinner eines Wettbewerbs auf und verwendet dabei nur {{HTMLElement("span")}}-Elemente. Wenn die Namen nur LTR-Text enthalten, sehen die Ergebnisse gut aus:

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

{{ EmbedLiveSample('No_bdi_with_only_LTR','','120') }}

### Keine Nutzung von bdi mit RTL-Text

Dieses Beispiel listet die Gewinner eines Wettbewerbs auf und verwendet dabei nur {{HTMLElement("span")}}-Elemente, und einer der Gewinner hat einen Namen, der aus RTL-Text besteht. In diesem Fall wird `- 1`, das aus Zeichen mit neutraler oder schwacher Richtung besteht, die Richtung des RTL-Textes übernehmen und das Ergebnis wird unverständlich sein:

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

{{ EmbedLiveSample('No_bdi_with_RTL_text','','120') }}

### Verwendung von bdi mit LTR- und RTL-Text

Dieses Beispiel listet die Gewinner eines Wettbewerbs auf und verwendet `<bdi>`-Elemente. Diese Elemente weisen den Browser an, den Namen isoliert von seinem Einbettungskontext zu behandeln, sodass die Ausgabe des Beispiels korrekt geordnet ist:

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

{{ EmbedLiveSample('Using_bdi_with_LTR_and_RTL_text','','120') }}

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, spürbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Auslassung des Tags</th>
      <td>Keine, sowohl der Anfangs- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generisch</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Jede</td>
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
- [Grundlagen des Unicode Bidirectional Algorithm](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics)
- {{Glossary("Localization", "Lokalisierung")}}
- Verwandtes HTML-Element: {{HTMLElement("bdo")}}
- Verwandte CSS-Eigenschaften: {{cssxref("direction")}}, {{cssxref("unicode-bidi")}}
